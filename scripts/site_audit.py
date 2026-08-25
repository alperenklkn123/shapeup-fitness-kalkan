#!/usr/bin/env python3
from __future__ import annotations
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = [ROOT / 'index.html', ROOT / 'gallery.html', ROOT / 'admin' / 'index.html', ROOT / '404.html']
DIRECT_REVIEW = 'https://search.google.com/local/writereview?placeid=ChIJw_Y6vGAtwBQROEuRz0soR_8'
EXPECTED_CNAME = 'shapetrainingclub.net'
EXPECTED_SUPABASE = '@supabase/supabase-js@2.111.0'

errors: list[str] = []
warnings: list[str] = []

class Parser(HTMLParser):
    def __init__(self, file: Path):
        super().__init__(convert_charrefs=True)
        self.file = file
        self.ids: list[str] = []
        self.refs: list[tuple[str, str]] = []
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if d.get('id'):
            self.ids.append(d['id'])
        for attr in ('href','src'):
            if d.get(attr):
                self.refs.append((attr,d[attr]))
        if tag == 'a' and d.get('target') == '_blank':
            rel = set((d.get('rel') or '').lower().split())
            if 'noopener' not in rel:
                errors.append(f'{self.file.relative_to(ROOT)}: target=_blank link missing rel=noopener: {d.get("href","")}')

def check_local_ref(source: Path, value: str):
    v = value.strip()
    if not v or v.startswith(('#','mailto:','tel:','javascript:','data:')):
        return
    parts = urlsplit(v)
    if parts.scheme or parts.netloc:
        return
    path = parts.path
    if not path or path == '/':
        return
    target = ROOT / path.lstrip('/') if path.startswith('/') else source.parent / path
    target = target.resolve()
    try:
        target.relative_to(ROOT.resolve())
    except ValueError:
        errors.append(f'{source.relative_to(ROOT)}: local reference escapes site root: {v}')
        return
    if path.endswith('/'):
        target = target / 'index.html'
    if not target.exists():
        errors.append(f'{source.relative_to(ROOT)}: missing local file for {v}')

for file in HTML_FILES:
    if not file.exists():
        errors.append(f'Missing required file: {file.relative_to(ROOT)}')
        continue
    text = file.read_text(encoding='utf-8')
    p = Parser(file)
    p.feed(text)
    dup = sorted({x for x in p.ids if p.ids.count(x) > 1})
    if dup:
        errors.append(f'{file.relative_to(ROOT)}: duplicate IDs: {", ".join(dup)}')
    for _, ref in p.refs:
        check_local_ref(file, ref)

# Core production invariants.
cname = (ROOT / 'CNAME').read_text(encoding='utf-8').strip() if (ROOT / 'CNAME').exists() else ''
if cname != EXPECTED_CNAME:
    errors.append(f'CNAME must be exactly {EXPECTED_CNAME!r}; found {cname!r}')

index = (ROOT / 'index.html').read_text(encoding='utf-8')
admin = (ROOT / 'admin' / 'index.html').read_text(encoding='utf-8')
gallery = (ROOT / 'gallery.html').read_text(encoding='utf-8')
defaults = (ROOT / 'site-defaults.js').read_text(encoding='utf-8')
config = (ROOT / 'supabase-config.js').read_text(encoding='utf-8')

for name, text in [('index.html', index), ('gallery.html', gallery), ('admin/index.html', admin)]:
    if EXPECTED_SUPABASE not in text:
        errors.append(f'{name}: Supabase JS is not pinned to the approved version')

for old in ('site-defaults.js?v=19','admin.js?v=19','admin.css?v=17'):
    if old in index + gallery + admin:
        errors.append(f'Stale cache-busting reference remains: {old}')

if DIRECT_REVIEW not in index or DIRECT_REVIEW not in defaults:
    errors.append('Direct Google review URL is missing from production defaults/page')
if 'google.com/search?q=Shape+Training+Club+Kalkan+reviews' in index or 'google.com/search?q=Shape+Training+Club+Kalkan+reviews' in defaults:
    errors.append('Legacy Google search review URL remains in active production content')

if 'service_role' in config.lower() and 'secret/service_role' not in config.lower():
    warnings.append('supabase-config.js contains service_role text; verify it is comment-only')
if re.search(r'\bsb_secret_[A-Za-z0-9_-]+', config):
    errors.append('A Supabase secret key appears to be exposed in supabase-config.js')

robots = (ROOT / 'robots.txt').read_text(encoding='utf-8') if (ROOT / 'robots.txt').exists() else ''
if 'Sitemap: https://shapetrainingclub.net/sitemap.xml' not in robots:
    errors.append('robots.txt is missing the production sitemap URL')

sitemap = (ROOT / 'sitemap.xml').read_text(encoding='utf-8') if (ROOT / 'sitemap.xml').exists() else ''
for url in ('https://shapetrainingclub.net/','https://shapetrainingclub.net/gallery.html'):
    if url not in sitemap:
        errors.append(f'sitemap.xml is missing {url}')

if errors:
    print('SITE AUDIT: FAILED')
    for e in errors: print(f'ERROR: {e}')
    for w in warnings: print(f'WARN: {w}')
    sys.exit(1)
print('SITE AUDIT: PASSED')
for w in warnings: print(f'WARN: {w}')
print('Checked local references, duplicate IDs, CNAME, sitemap, robots, Google Reviews, cache versions, Supabase version pinning and obvious secret exposure.')

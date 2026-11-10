#!/usr/bin/env python3
"""Run from the unzipped Shape Training Club website folder or pass its path.
Safely adds SHAPE KIDS to existing homepage nav and quick-access panel.
This script is idempotent and keeps a backup of original index.html.
"""
from pathlib import Path
import sys
import shutil

folder = Path(sys.argv[1]).expanduser().resolve() if len(sys.argv)>1 else Path.cwd()
index = folder / 'index.html'
if not index.is_file():
    raise SystemExit('index.html not found. Usage: python3 install_shape_kids.py /path/to/your/website')
content = index.read_text(encoding='utf-8')
if 'href="shape-kids/"' in content:
    print('SHAPE KIDS link already present; no changes needed.')
    sys.exit(0)
nav_old='<a href="#coaching" data-i18n="navCoaching">Coaching</a>'
nav_new=nav_old+'<a href="shape-kids/">SHAPE KIDS</a>'
quick_anchor='<a class="quick-link" id="quickGroupLink" href="#group-classes">'
quick_new='<a class="quick-link" href="shape-kids/"><span aria-hidden="true">✳</span><b>SHAPE KIDS</b><i aria-hidden="true">→</i></a>\n          '+quick_anchor
if nav_old not in content or quick_anchor not in content:
    raise SystemExit('Website structure differs from the verified version. No changes written; inspect index.html manually.')
content = content.replace(nav_old, nav_new, 1).replace(quick_anchor, quick_new, 1)
# Desktop five-item nav may need slightly narrower gaps.
if 'nav{display:flex;gap:28px}' in content:
    content = content.replace('nav{display:flex;gap:28px}', 'nav{display:flex;gap:18px}', 1)
shutil.copy2(index, folder / 'index.html.before-shape-kids.bak')
index.write_text(content,encoding='utf-8')
print('Updated index.html. Backup: index.html.before-shape-kids.bak')

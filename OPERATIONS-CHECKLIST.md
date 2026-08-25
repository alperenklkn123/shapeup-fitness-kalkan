# Shape Training Club — Production Operations Checklist (V23)

This file is the operational checklist for `https://shapetrainingclub.net/`.

## Accounts that must remain accessible

Keep recovery access, a current recovery email/phone, a strong unique password and 2FA for:

1. GitHub account that owns `shapeup-fitness-kalkan`
2. Domain registrar / Cloudflare account for `shapetrainingclub.net`
3. Supabase account/project `vhghrafodagmcbjiqfpq`
4. Google Business Profile for Shape Training Club
5. Instagram account used by the website

Do not store any of these passwords in this repository.

## GitHub Pages

- Repository branch used for production: `main`
- Custom domain: `shapetrainingclub.net`
- Keep `CNAME` in repository root.
- Pages must show a successful deployment after every production upload.
- Keep HTTPS enforcement enabled in GitHub Pages settings.
- `.github/workflows/site-health.yml` performs a local audit on every push and a live website/TLS check once per day.

## Domain / DNS

Expected DNS when using GitHub Pages directly (DNS-only):

- A `@` → `185.199.108.153`
- A `@` → `185.199.109.153`
- A `@` → `185.199.110.153`
- A `@` → `185.199.111.153`
- CNAME `www` → `alperenklkn123.github.io`
- Keep the GitHub Pages verification TXT record if present.

Domain auto-renew must stay ON. Keep the registrar payment method and recovery email current.

## Supabase

- Browser code may contain only the project URL and publishable/anon key.
- Never commit a `service_role`, secret key, database password or admin password.
- `site-assets` must be a PUBLIC bucket for public website images.
- Upload/delete operations must be restricted to authenticated admins by Storage RLS.
- `site_config` must allow public SELECT and admin-only INSERT/UPDATE.
- `admin_users` must allow an authenticated user to read only their own admin row.
- Disable public email sign-up if this project is only for the site administrator.
- Authentication → URL Configuration:
  - Site URL: `https://shapetrainingclub.net`
  - Redirect URL: `https://shapetrainingclub.net/admin/**`

A reviewable RLS template is stored in `supabase-rls-template.sql`. Compare it with the live policies before running it.

## Monthly 5-minute check

1. Open the site on mobile data in a private/incognito tab.
2. Scan the reception QR code.
3. Test Google Reviews, WhatsApp, Call, Instagram, Maps and Gallery.
4. Log in to `/admin/` and confirm data loads; do not make a change unless needed.
5. Open GitHub Actions → `Site health` and confirm recent runs are green.
6. Check domain auto-renew and expiry/recovery details.
7. Check Supabase project notices, database/storage usage and Auth warnings.

## Before changing the site

- Download/retain the last known-good ZIP.
- Change one logical feature at a time.
- Run `python3 scripts/site_audit.py` before upload.
- After GitHub deploys, test the live site in a private/incognito tab.

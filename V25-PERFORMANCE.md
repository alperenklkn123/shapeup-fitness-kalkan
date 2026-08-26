# Shape Training Club — V25 Performance Fix

This release targets the Cloudflare RUM issues observed on the production site.

## Changes

1. Removed post-paint JavaScript hero font resizing, which was moving `#top .actions`.
2. Reserved stable space for hero copy, hero CTA, quick-access heading and contact CTA.
3. Removed the second full-page render after exchange-rate requests finish.
4. Replaced the public Supabase JS SDK with a direct REST read for `site_config`. The admin panel still uses the pinned Supabase SDK.
5. Added a seven-day local site-config cache and an early hero URL cache for repeat visits.
6. Media-only Supabase changes no longer reconstruct membership/menu/contact DOM.
7. Preloaded desktop/mobile hero assets and added high priority to the first gallery images.
8. Kept Cloudflare Web Analytics enabled for measurement.

## Expected measurement

Cloudflare's 24-hour/7-day windows include samples from before this deployment. Evaluate V25 using traffic collected after deployment, preferably after at least 20–50 new visits.

# V26 Gallery Upload Fix

Based on V25 Performance Fix.

- Keeps all V25 CLS/performance and Cloudflare Analytics changes.
- Fixes Photo Gallery uploads where a valid JPG/PNG could be rejected after browser-side optimization.
- Adds an Image-element decoding fallback when `createImageBitmap()` cannot decode a photo.
- Aligns the gallery client-side post-processing limit with the 5 MB Supabase `site-assets` bucket (safe cap: 4.8 MB).
- Keeps normal gallery optimization to WebP when the browser supports it.
- Shows the actual Storage error message in the admin panel when an upload fails.

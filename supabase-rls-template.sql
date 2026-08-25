-- Shape Training Club — Supabase RLS reference template
-- IMPORTANT: Review existing policies and table/bucket names before executing.
-- This file is intentionally NOT executed by the website or GitHub Actions.

-- 1) admin_users: logged-in user may only read their own admin record.
alter table public.admin_users enable row level security;
revoke all on table public.admin_users from anon, authenticated;
grant select on table public.admin_users to authenticated;

drop policy if exists "admin user can read own row" on public.admin_users;
create policy "admin user can read own row"
on public.admin_users
for select
to authenticated
using (user_id = auth.uid());

-- 2) site_config: everyone can read published config; only listed admins can write it.
alter table public.site_config enable row level security;
revoke all on table public.site_config from anon, authenticated;
grant select on table public.site_config to anon, authenticated;
grant insert, update on table public.site_config to authenticated;

drop policy if exists "public can read site config" on public.site_config;
create policy "public can read site config"
on public.site_config
for select
to anon, authenticated
using (id = 1);

drop policy if exists "admins can insert site config" on public.site_config;
create policy "admins can insert site config"
on public.site_config
for insert
to authenticated
with check (
  id = 1 and exists (
    select 1 from public.admin_users a where a.user_id = auth.uid()
  )
);

drop policy if exists "admins can update site config" on public.site_config;
create policy "admins can update site config"
on public.site_config
for update
to authenticated
using (
  id = 1 and exists (
    select 1 from public.admin_users a where a.user_id = auth.uid()
  )
)
with check (
  id = 1 and exists (
    select 1 from public.admin_users a where a.user_id = auth.uid()
  )
);

-- 3) Storage: `site-assets` should be configured as a PUBLIC bucket.
-- Public reads then use getPublicUrl; mutations remain admin-only.

drop policy if exists "admins can upload site assets" on storage.objects;
create policy "admins can upload site assets"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'site-assets' and exists (
    select 1 from public.admin_users a where a.user_id = auth.uid()
  )
);

drop policy if exists "admins can update site assets" on storage.objects;
create policy "admins can update site assets"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'site-assets' and exists (
    select 1 from public.admin_users a where a.user_id = auth.uid()
  )
)
with check (
  bucket_id = 'site-assets' and exists (
    select 1 from public.admin_users a where a.user_id = auth.uid()
  )
);

drop policy if exists "admins can delete site assets" on storage.objects;
create policy "admins can delete site assets"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'site-assets' and exists (
    select 1 from public.admin_users a where a.user_id = auth.uid()
  )
);

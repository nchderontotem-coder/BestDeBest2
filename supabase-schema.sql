-- BestDeBest authentication/profile schema
-- Run this in Supabase Dashboard -> SQL Editor.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text not null default '',
  last_name text not null default '',
  display_name text not null default '',
  location text not null default '',
  birth_date date,
  is_seller boolean not null default false,
  is_delivery boolean not null default false,
  shop_name text,
  profile_picture text not null default '',
  bio text not null default '',
  is_banned boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists profiles_display_name_lower_unique
  on public.profiles (lower(display_name))
  where display_name <> '';

alter table public.profiles enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
  on public.profiles for select
  to authenticated
  using (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles for insert
  to authenticated
  with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

create or replace function public.set_profile_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
before update on public.profiles
for each row execute function public.set_profile_updated_at();

-- IMPORTANT:
-- Do not make a user an admin by editing client-side JavaScript.
-- Set up admin authorization separately with server-controlled roles/RLS.
-- The current browser app's legacy manager email list is UI-only and is NOT
-- a secure admin authorization system.


-- Prevent ordinary authenticated users from granting themselves privileged
-- seller/delivery flags or clearing an account ban through direct API calls.
create or replace function public.protect_profile_privileged_fields()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.role() <> 'service_role' then
    if tg_op = 'INSERT' then
      new.is_seller := false;
      new.is_delivery := false;
      new.is_banned := false;
    else
      new.is_seller := old.is_seller;
      new.is_delivery := old.is_delivery;
      new.is_banned := old.is_banned;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_protect_privileged_fields on public.profiles;
create trigger profiles_protect_privileged_fields
before insert or update on public.profiles
for each row execute function public.protect_profile_privileged_fields();

-- Run this in the Supabase SQL editor to set up the waitlist table.

create extension if not exists "pgcrypto";

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  lang text not null default 'en' check (lang in ('en','fr','es')),
  source text not null default 'unknown',
  created_at timestamptz not null default now(),
  unique (email)
);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- Allow anonymous inserts from the landing page (no select / update / delete).
drop policy if exists "waitlist anon insert" on public.waitlist;
create policy "waitlist anon insert"
  on public.waitlist
  for insert
  to anon
  with check (true);

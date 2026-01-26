-- Create news table
create table public.news (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text unique not null,
  content text not null,
  excerpt text not null,
  published boolean default false not null,
  published_at timestamp with time zone
);

-- Create index on slug for faster lookups
create index news_slug_idx on public.news(slug);

-- Create index on published for filtering
create index news_published_idx on public.news(published);

-- Create index on published_at for ordering
create index news_published_at_idx on public.news(published_at desc);

-- Enable Row Level Security
alter table public.news enable row level security;

-- Policy: Anyone can read published news
create policy "Public can read published news"
  on public.news
  for select
  using (published = true);

-- Policy: Authenticated users can read all news (for admin)
create policy "Authenticated users can read all news"
  on public.news
  for select
  to authenticated
  using (true);

-- Policy: Authenticated users can insert news
create policy "Authenticated users can insert news"
  on public.news
  for insert
  to authenticated
  with check (true);

-- Policy: Authenticated users can update news
create policy "Authenticated users can update news"
  on public.news
  for update
  to authenticated
  using (true);

-- Policy: Authenticated users can delete news
create policy "Authenticated users can delete news"
  on public.news
  for delete
  to authenticated
  using (true);

-- Create function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger to automatically update updated_at
create trigger handle_news_updated_at
  before update on public.news
  for each row
  execute function public.handle_updated_at();

# Fitness Funnel MVP (Next.js 14 + Supabase + Stripe)

Lean sales funnel optimized for conversion and speed:
- Landing page with VSL, testimonials, pricing preview, and lead capture
- Checkout for one-time program and monthly membership
- Upsell page for 1:1 coaching upgrade
- Protected dashboard for user content
- Simple admin to add/assign video + PDF content

## 1) Install and run

```bash
npm install
npm run dev
```

## 2) Configure env

Copy `.env.example` to `.env.local` and fill:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_PROGRAM`
- `STRIPE_PRICE_MEMBERSHIP`
- `STRIPE_PRICE_UPSELL`

## 3) Supabase setup

Run SQL from `supabase/schema.sql` in Supabase SQL editor.

Then create your first admin user:
1. Sign up via `/login`
2. In Supabase Table Editor, set `profiles.role = 'admin'` for that user

## 4) Stripe setup

Create 3 Stripe Prices:
- program one-time price
- membership recurring monthly price
- upsell one-time price

Add their IDs to env values above.

For webhook:
- Endpoint: `/api/stripe/webhook`
- Event: `checkout.session.completed`

## Performance notes

- App Router + server components by default
- Minimal client JS (only forms/buttons needing interaction)
- Lightweight Tailwind styling and simple UI
- No heavy UI libraries

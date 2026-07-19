# Boba Bloom — Agent Guide

## Commands
- Dev: `npm run dev` (port 3000)
- Build: `npm run build`
- Preview: `npm run preview`
- `postinstall` runs `nuxt prepare` (generates `.nuxt/` types)

## Architecture
- **Nuxt 4** app/ directory structure (components/, pages/, composables/, assets/ live under app/)
- Components & composables auto-import (no manual registration)
- `@nuxtjs/tailwindcss` — Tailwind config is **inline in `nuxt.config.ts`** under `tailwindcss.config`, not a separate file
- All components use `<script setup>` with **plain JS** (no `lang="ts"`)
- Design skill used: `.agents/skills/frontend-design/SKILL.md`

## Style System
- Colors: primary (amber 50-900), secondary (violet 50-900), accent (green 50-900), pink (50-900), cream (#FFF8F0), soft (#F8FAFC)
- Fonts: Poppins 300-900 (`.font-display` for headings), Inter 300-700 (`.font-body` / default) — loaded via Google Fonts in nuxt.config link tags
- Custom CSS classes in `app/assets/css/main.css`: `glass`, `glass-strong`, `glass-card`, `text-gradient`, `btn-primary`, `btn-secondary`, `blob`/`blob-sm`, `animation-delay-{100-1000}`, `stagger-{1-8}`

## Image Patterns
- All `<img>` use **Unsplash URLs** with `w={size}&h={size}&fit=crop&auto=format` params, plus `loading="lazy"` and `decoding="async"`
- Every `<img>` has `@error="onImgError($event)"` handler that hides broken images (Testimonials also renders fallback initials via innerHTML)
- Images wrapped in containers with gradient fallback backgrounds

## Sections & Navbar
- Section IDs for scroll anchor: `hero`, `featured`, `about`, `reviews`, `footer`
- Navbar uses `text-gray-700` on `bg-white/70 backdrop-blur-sm` in both initial and scrolled states
- `app.vue` sets body `bg-cream`; `index.vue` sets `antialiased` via `useHead` — may override parent body class

## Animations
- Scroll entrance uses CSS `animate-fade-up` with inline `animation-delay` stagger (NOT `useIntersectionObserver` composable, which exists but is unused for section visibility)

## No tests, no linting, no typechecking configured

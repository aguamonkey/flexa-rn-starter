# Flexa React Native Starter — Scan + Spend (Expo-ready)

> **Not a new SDK.** This is an **Expo-ready React Native starter** built on the official **Flexa SDK + Components (Scan & Spend)** so wallet teams can integrate retail payments in **under two hours**.

---

## Why this exists
Integrating Scan/Spend usually stalls on native setup, permissions, deep links, and environment keys. This starter removes that friction with an Expo-first template, MOCK/LIVE modes, and copy-paste config.

## What you get
- **Expo-first** demo app (iOS/Android), **MOCK by default**, **LIVE** via `PUBLISHABLE_KEY`
- **Scan / Spend / Settings** screens with tiny, SOLID-friendly layers:
  - `screens/` → UI only  
  - `hooks/` → orchestration (`useScan`, `useSpend`)  
  - `services/` → `flexaClient` surface (swap mock ↔ real SDK)  
- **Copy-paste config** helpers (camera perms, deep links / intent filters)
- **CI stub** (Node 20) and a clear roadmap to v1.0
- **Docs + short videos** (coming in v1.0): setup, Scan demo, Spend demo

## Quick start (MOCK)
1. Copy `.env.example` → `.env` (keep `MOCK=1`)
2. Open the demo screens to simulate Scan/Spend without keys

## Live mode (later)
1. Set `MOCK=0` in `.env`
2. Add your Flexa `PUBLISHABLE_KEY`
3. Follow the iOS/Android snippets in the README (deep links + camera)

## Project structure
apps/demo/
navigation/
screens/ # ScanScreen.tsx, SpendScreen.tsx, SettingsScreen.tsx
hooks/ # useScan.ts, useSpend.ts
services/ # flexaClient.ts, env.ts
lib/ # camera.ts, deeplinks.ts
state/ # store.ts
.github/workflows/ci.yml


## Roadmap to v1.0
- **M1 (Week 1):** Scaffold + **Scan (MOCK/LIVE)**, doc v1
- **M2 (Week 2):** **Spend (MOCK/LIVE)**, error states, CI/tests, record videos
- **M3 (Week 3):** Feedback polish, release **v1.0**

## Outcomes we’re targeting
- Time-to-first-payment **< 2 hours** on real devices
- Starter adopted/forked by early wallet teams
- Clear, repeatable path from Expo to store-ready builds

## Contributing
PRs and issues welcome. Keep files single-purpose (screens/ui vs hooks vs services).

## License
MIT

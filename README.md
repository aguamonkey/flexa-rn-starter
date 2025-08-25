# Flexa React Native Starter — Scan + Spend (Expo-ready)

**Goal:** Help wallet teams integrate Flexa Components (Scan + Spend) in **< 2 hours**.

## Structure
apps/demo/
navigation/
screens/ (ScanScreen.tsx, SpendScreen.tsx, SettingsScreen.tsx)
hooks/ (useScan.ts, useSpend.ts)
services/ (flexaClient.ts, env.ts)
lib/ (camera.ts, deeplinks.ts)
state/ (store.ts)
.github/workflows/ci.yml

csharp
Copy
Edit

## Quick start (MOCK)
- Copy `.env.example` to `.env` and keep `MOCK=1`

## Live mode (later)
- Set `MOCK=0` and add `PUBLISHABLE_KEY`

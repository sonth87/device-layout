# Versioning & Release Rules — Quy tắc Bump Version

This document defines the mandatory **SemVer versioning rules** and library build procedures for developers and AI agents working on `@sonth87/device-layout`.

---

## 1. SemVer Principles (`MAJOR.MINOR.PATCH`)

The `version` field in `package.json` follows strict Semantic Versioning (`MAJOR.MINOR.PATCH`):

| Level | When to Bump | Examples in `@sonth87/device-layout` |
|---|---|---|
| **PATCH**<br/>(`0.2.5` → `0.2.6`) | Bug fixes, style tweaks, layout fixes, performance improvements with **no API or contract changes**. | - Fixing z-index or modal theme styling<br/>- Fixing desktop stack sorting calculation<br/>- Fixing CSS isolation or asset URL resolution |
| **MINOR**<br/>(`0.2.5` → `0.3.0`) | New features, new options, new built-in apps or widgets that are **fully backward-compatible**. | - Adding modular `SimpleModeFeatures` options<br/>- Adding new default apps or widgets<br/>- Adding new theme compositors (e.g. Linux theme) |
| **MAJOR**<br/>(`0.2.5` → `1.0.0`) | Breaking changes to core contracts, types, or store interfaces. | - Renaming core `DeviceLayoutProps` or `AppConfig` fields<br/>- Breaking changes to Zustand store slice structures<br/>- Removing or altering core CSS variable contracts |

---

## 2. Required Workflow for AI Agents & Developers

Whenever completing a feature, bug fix, or refactor:

1. **Determine SemVer Level**:
   - Bug fix / style fix $\rightarrow$ **PATCH**
   - New feature / backward-compatible prop addition $\rightarrow$ **MINOR**
   - Breaking API change $\rightarrow$ **MAJOR**

2. **Update `package.json`**:
   - Increment the `"version"` field in `package.json`.

3. **Re-build ESM Library Bundle**:
   - Run `pnpm build:lib` to re-compile the distribution bundle and TypeScript declaration files into `dist-lib/`.

4. **Verification**:
   - Run `pnpm build` to verify Next.js production build and TypeScript typechecking pass with zero errors.

---

## 3. Library Delivery & Summary Checklist

- `package.json`: `"version"` matches current release.
- `dist-lib/`: ESM bundle (`index.js`), CSS (`style.css`), and TS declarations (`lib.d.ts`) compiled via `pnpm build:lib`.
- `walkthrough.md`: Summarize changes made and verification results.

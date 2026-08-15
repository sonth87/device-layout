<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Device Layout Agent Guidelines

Welcome AI Agent! Read the following authoritative documentation files before adding features or modifying code in this codebase:

## Primary Guidelines
- **[docs/agent-guidelines.md](docs/agent-guidelines.md)** — Core coding rules, Tailwind v4 class conventions, Zustand `useShallow` rules, window math, Liquid Glass scoping, and Simple Mode rules.
- **[docs/architecture.md](docs/architecture.md)** — Folder structure, Zustand store slice architecture, theme compositor pattern.
- **[docs/simple-mode.md](docs/simple-mode.md)** — Modular Simple Mode (`isSimpleMode`) API reference and configuration details.
- **[docs/versioning.md](docs/versioning.md)** — SemVer versioning rules (PATCH for fixes, MINOR for features, MAJOR for breaking changes) & library release workflow.

## Development & Build Commands
- `pnpm dev`: Start Next.js development server for `http://localhost:3000/desktop` & `http://localhost:3000/simple`.
- `pnpm dev:docs`: Start Next.js development server and open `http://localhost:3100/docs`.
- `pnpm build:lib`: Compile ESM library bundle & TS declaration files into `dist-lib/`.
- `pnpm build`: Next.js production build and full TypeScript type check.

## Key Rules
1. **Tailwind CSS v4**: Use `shrink-0`, `grow`, `bg-white/20` (never v3 `flex-shrink-0`, `flex-grow`).
2. **Zustand State**: All object/array selectors MUST use `useShallow`. Never create selectors inside callback bodies.
3. **Simple Mode**: Read feature flags via `useSimpleModeFeatures()`. Support `isSimpleMode: boolean | SimpleModeFeatures`.
4. **SemVer & Completion**: After completing features/fixes, ALWAYS bump `version` in `package.json` following SemVer (`PATCH` for fixes, `MINOR` for features, `MAJOR` for breaking API changes) and execute `pnpm build:lib` to compile `dist-lib/`.
5. **Documentation Exception**: Do NOT bump `version` in `package.json` or run `pnpm build:lib` when ONLY modifying End-User Documentation or documentation site files (`docs/`, `content/`, etc.).


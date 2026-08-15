// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "api-reference/app-config.mdx": () => import("../content/docs/api-reference/app-config.mdx?collection=docs"), "api-reference/device-layout.mdx": () => import("../content/docs/api-reference/device-layout.mdx?collection=docs"), "api-reference/hooks.mdx": () => import("../content/docs/api-reference/hooks.mdx?collection=docs"), "api-reference/simple-mode.mdx": () => import("../content/docs/api-reference/simple-mode.mdx?collection=docs"), "examples/case-studies.mdx": () => import("../content/docs/examples/case-studies.mdx?collection=docs"), "getting-started/installation.mdx": () => import("../content/docs/getting-started/installation.mdx?collection=docs"), "getting-started/quickstart.mdx": () => import("../content/docs/getting-started/quickstart.mdx?collection=docs"), "guides/adding-apps.mdx": () => import("../content/docs/guides/adding-apps.mdx?collection=docs"), "guides/electron.mdx": () => import("../content/docs/guides/electron.mdx?collection=docs"), "guides/integration-modes.mdx": () => import("../content/docs/guides/integration-modes.mdx?collection=docs"), "guides/programmatic-control.mdx": () => import("../content/docs/guides/programmatic-control.mdx?collection=docs"), }),
};
export default browserCollections;
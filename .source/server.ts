// @ts-nocheck
import * as __fd_glob_16 from "../content/docs/getting-started/quickstart.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/getting-started/installation.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/guides/programmatic-control.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/guides/integration-modes.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/guides/electron.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/guides/adding-apps.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/examples/case-studies.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/api-reference/simple-mode.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/api-reference/hooks.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/api-reference/device-layout.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/api-reference/app-config.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/guides/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/getting-started/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/examples/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api-reference/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "api-reference/meta.json": __fd_glob_1, "examples/meta.json": __fd_glob_2, "getting-started/meta.json": __fd_glob_3, "guides/meta.json": __fd_glob_4, }, {"index.mdx": __fd_glob_5, "api-reference/app-config.mdx": __fd_glob_6, "api-reference/device-layout.mdx": __fd_glob_7, "api-reference/hooks.mdx": __fd_glob_8, "api-reference/simple-mode.mdx": __fd_glob_9, "examples/case-studies.mdx": __fd_glob_10, "guides/adding-apps.mdx": __fd_glob_11, "guides/electron.mdx": __fd_glob_12, "guides/integration-modes.mdx": __fd_glob_13, "guides/programmatic-control.mdx": __fd_glob_14, "getting-started/installation.mdx": __fd_glob_15, "getting-started/quickstart.mdx": __fd_glob_16, });
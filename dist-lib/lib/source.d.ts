export declare const source: import('fumadocs-core/source').LoaderOutput<{
    meta: import('fumadocs-core/source').Meta<undefined, import('fumadocs-mdx/runtime/server').MetaCollectionEntry<{
        title?: string | undefined;
        pages?: string[] | undefined;
        pagesIndex?: string | undefined;
        description?: string | undefined;
        root?: boolean | undefined;
        defaultOpen?: boolean | undefined;
        collapsible?: boolean | undefined;
        icon?: string | undefined;
    }>>;
    page: import('fumadocs-core/source').Page<undefined, import('fumadocs-mdx/runtime/server').DocCollectionEntry<"docs", {
        title: string;
        description?: string | undefined;
        icon?: string | undefined;
        full?: boolean | undefined;
        _openapi?: Record<string, import('fumadocs-core/source/schema')._JSONType> | undefined;
    }, import('fumadocs-mdx/runtime/types').InternalTypeConfig & {
        DocData: {};
    }>>;
    i18n: undefined;
}>;

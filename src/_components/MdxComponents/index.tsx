import type { MDXComponents } from "mdx/types";

export function MdxComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

import { Post } from "@/_types";

import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Code from "./Code";
import ExternalLink from "./ExternalLink";
import Callout from "./Callout";
import Image from "next/image";

const REHYPE_OPTION = {
  theme: "github-dark",
  defaultLanguage: "tsx",
};

const MdxComponents: MDXComponents = {
  h1: (props) => <p className="text-lg font-semibold" {...props} />,
  h2: (props) => <p className="font-semibold" {...props} />,
  a: (props) => <ExternalLink {...props} />,
  p: (props) => <p className="text-gray mb-8" {...props} />,
  code: ({
    "data-language": dataLanguage,
    ...props
  }: { "data-language"?: string } & React.HTMLAttributes<HTMLElement>) => {
    if (dataLanguage) {
      return <code data-language={dataLanguage} {...props} />;
    }
    return <Code {...props} />;
  },
  blockquote: (props) => <Callout {...props} />,
  ul: (props) => (
    <ul
      className="list-disc pl-4 [&>li]:text-gray [&>li]:leading-relaxed"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-4 [&>li]:text-gray [&>li]:leading-relaxed"
      {...props}
    />
  ),
  img: (props) => (
    <Image
      src={props.src || ""}
      alt={props.alt || ""}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto"
    />
  ),
};

export function MDXContentRenderer({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <h1 className="text-lg ">{post.title}</h1>

      <MDXRemote
        source={post.content}
        components={MdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, REHYPE_OPTION]],
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}

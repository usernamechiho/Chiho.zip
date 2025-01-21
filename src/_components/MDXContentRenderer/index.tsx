import { Post } from "@/_types";

import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Code from "./Code";
import ExternalLink from "./ExternalLink";
import Callout from "./Callout";
import Image from "next/image";

const MdxComponents: MDXComponents = {
  h1: (props) => <p className="text-lg font-semibold" {...props} />,
  h2: (props) => <p className="font-semibold" {...props} />,
  a: (props) => <ExternalLink {...props} />,
  p: (props) => <p className="text-gray" {...props} />,
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
  ul: (props) => <ul className="list-disc pl-4 [&>li]:text-gray" {...props} />,
  ol: (props) => (
    <ol className="list-decimal pl-4 [&>li]:text-gray" {...props} />
  ),
  img: (props) => <Image src={props.src || ""} alt={props.alt || ""} />,
};

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  defaultLanguage: "tsx",
};

export function MDXContentRenderer({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="flex justify-between items-end mb-12">
        <p className="text-lg font-semibold">{post.title}</p>

        <p className="text-gray">
          {post.createdYear}.{post.createdDate}
        </p>
      </div>

      <MDXRemote
        source={post.content}
        components={MdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}

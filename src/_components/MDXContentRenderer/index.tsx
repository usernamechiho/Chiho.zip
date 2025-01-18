import { Post } from "@/_types";

import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Code from "./Code";
import ExternalLink from "./ExternalLink";

const MdxComponents: MDXComponents = {
  h1: (props) => <p className="text-lg font-semibold" {...props} />,
  h2: (props) => <p className="font-semibold" {...props} />,
  a: (props) => <ExternalLink {...props} />,
  p: (props) => <p className="text-gray" {...props} />,
  code: (props) => <Code className="text-red-500 text-gray" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
};

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  defaultLanguage: "tsx",
};

export function MDXContentRenderer({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end mb-10">
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

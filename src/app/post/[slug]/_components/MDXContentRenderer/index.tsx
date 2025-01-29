import { Post } from "@/_types";

import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Code from "./Code";
import ExternalLink from "./ExternalLink";
import Callout from "./Callout";
import Image from "next/image";
import { ContentHeading } from "../ContentHeading";
import AnimatedPageHeader from "@/_components/AnimatedPageHeader";
import dynamic from "next/dynamic"; // 이 줄을 추가해주세요

const REHYPE_OPTION = {
  theme: "github-dark",
  defaultLanguage: "tsx",
};

/** TODO: 각 태그에 대한 스타일, 컴포넌트는 분리 */
const MdxComponents: MDXComponents = {
  h1: (props) => <p className="font-semibold" {...props} />,
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
      className="w-full h-auto rounded"
    />
  ),

  /** 이렇게 렌더링 가능 */
  AnimatedPageHeader: dynamic(() => import("@/_components/AnimatedPageHeader")),
};

export function MDXContentRenderer({ post }: { post: Post }) {
  return (
    <div className="flex flex-col mb-12">
      <ContentHeading title={post.title} />

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

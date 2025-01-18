import { Post } from "@/_types";
import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";

const MdxComponents: MDXComponents = {
  h1: (props) => <p className="text-lg font-bold" {...props} />,
  h2: (props) => <p className="font-bold" {...props} />,
  p: (props) => <p className="text-gray" {...props} />,
};

export function MDXContentRenderer({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end mb-10">
        <p className="text-lg font-bold">{post.title}</p>

        <p className="text-gray">
          {post.createdYear}.{post.createdDate}
        </p>
      </div>

      <MDXRemote source={post.content} components={MdxComponents} />
    </div>
  );
}

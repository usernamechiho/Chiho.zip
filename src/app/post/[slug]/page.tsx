import { MDXContentRenderer } from "@/_components/MDXContentRenderer";
import { getPostBySlug, getPosts } from "@/_utils/post";
import { notFound } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return <MDXContentRenderer post={post} />;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ slug }) => ({ slug }));
}

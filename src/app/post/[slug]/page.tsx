import { getPost, getPosts } from "@/_utils/post";
import { notFound } from "next/navigation";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return notFound();

  return <div>Post</div>;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ slug }) => ({ slug }));
}

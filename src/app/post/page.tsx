import { getPosts } from "@/_utils/post";

export default async function Post() {
  const posts = await getPosts();

  return <div></div>;
}

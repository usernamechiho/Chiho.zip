import { getPosts } from "@/_utils/post";

export default async function Post() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => {
        return (
          <>
            <div key={post.slug}>{post.title}</div>
          </>
        );
      })}
    </div>
  );
}

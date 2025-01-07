import { getPosts } from "@/_utils/post";

export default async function Post() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div className="flex flex-col">
      <p className="text-black text-lg font-bold">Post</p>

      <div className="flex flex-col mt-12">
        {posts.map((post) => (
          <div key={post.slug}>
            {post.createdAt.toString()} {post.category} / {post.title}
          </div>
        ))}
      </div>
    </div>
  );
}

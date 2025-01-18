import AnimatedPageHeader from "@/_components/AnimatedPageHeader";
import PostList from "@/_components/PostList";
import { getPosts } from "@/_utils/post";

export default async function Post() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col">
      <AnimatedPageHeader label="Post" />

      <ul className="flex flex-col gap-4">
        {posts.map((post, index) => {
          /** 현재 게시글이 해당 연도의 첫 번째 게시글인지 확인 */
          const isFirstPostOfYear =
            index === 0 || posts[index - 1].createdYear !== post.createdYear;

          return (
            <PostList
              key={post.slug}
              index={index}
              post={post}
              isFirstPostOfYear={isFirstPostOfYear}
            />
          );
        })}
      </ul>
    </div>
  );
}

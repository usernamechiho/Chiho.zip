type PostCategory = "Javascript" | "Browser";

type Post = {
  title: string;
  description: string;
  category: PostCategory;
  createdAt: string;
  slug: string;
};

export type { PostCategory, Post };

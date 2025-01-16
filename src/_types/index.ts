type PostCategory = "Javascript" | "Browser";

type Post = {
  title: string;
  slug: string;
  category: PostCategory;
  createdYear: string;
  createdDate: string;
  content: string;
};

export type { PostCategory, Post };

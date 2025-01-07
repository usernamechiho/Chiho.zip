import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/_types";

/**
 * 블로그 포스트 데이터를 가져오는 비동기 함수
 *
 * @returns {Promise<Array<Post>>} 포스트 객체 배열
 */
async function getPosts(): Promise<Post[]> {
  // 프로젝트 루트 기준으로 포스트 디렉토리 경로 설정
  const postPath = path.resolve(process.cwd(), "src/_posts");

  /**
   * 포스트 디렉토리 내의 모든 항목을 가져옴
   * withFileTypes: true 옵션으로 파일 타입 정보도 함께 가져옴
   */
  const postFolders = await readdir(postPath, { withFileTypes: true });

  // 결과 저장을 위한 배열 초기화
  const posts: Post[] = [];

  /**
   * 각 포스트 폴더를 순회
   */
  for (const postFolder of postFolders) {
    // 디렉토리가 아닌 항목은 건너뜀
    if (!postFolder.isDirectory()) continue;

    /**
     * content.mdx 파일의 전체 경로 생성
     *
     * 구조: src/_posts/[post-slug]/content.mdx
     */
    const contentPath = path.join(postPath, postFolder.name, "content.mdx");

    try {
      // MDX 파일의 내용을 UTF-8 인코딩으로 읽어옴
      const content = await readFile(contentPath, "utf-8");
      // gray-matter를 사용하여 frontmatter 데이터 파싱
      const { data } = matter(content);

      // 포스트 메타데이터를 배열에 추가
      posts.push({
        title: data.title,
        slug: data.slug,
        category: data.category,
        createdYear: data.createdYear,
        createdDate: data.createdDate,
      });
    } catch (error) {
      console.error(`Error reading post ${postFolder.name}:`, error);
    }
  }

  return posts;
}

export { getPosts };

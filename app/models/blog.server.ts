import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { marked } from 'marked';

export type Post = {
  slug: string;
  title: string;
  description: string;
  published_at: string;
  contentHtml?: string;
  tags: string[];
  category: string;
};

const postsDirectory = path.join(__dirname, 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug: id,
      ...matterResult.data,
    } as Post;
  });
  // Sort posts by date
  return allPostsData.sort((a: Post, b: Post) => {
    if (a.published_at < b.published_at) {
      return 1;
    } else if (a.published_at > b.published_at) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert to HTML string
  const contentHtml = marked(matterResult.content.trim());

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  } as Post;
}

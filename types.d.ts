type Project = {
  id: number;
  title: string;
  logo: string;
  link: string;
  desc: string;
  blurHash: string;
  technologies: string[];
};

type Article = {
  title: string;
  desc: string;
  link: string;
  views: string;
  external: boolean;
  isNew: boolean;
  readTime: string;
  published: string;
  tags: string[];
  github_url: string;
};

type Company = {
  title: string;
  alt: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
};

type Institute = {
  short_title: string;
  title: string;
  alt: string;
  role: string;
  skills: string[];
  period: string;
  startingYear: string;
  logo: string;
  awards: {
    title: string;
    description: string;
    date: string;
  }[];
};

type Skill = {
  name: string;
  description: string;
  link: string;
  type: string;
  image: string;
};

export interface IArticle {
  id?: number;
  title: string;
  description: string;
  coverImage?: string;
  tags: string[];
  tag_list?: string[];
  publishedAt: string;
  devToSlug?: string;
  devToPath?: string;
  devToURL?: string;
  commentsCount?: number;
  publicReactionsCount?: number;
  positiveReactionsCount?: number;
  canonical?: string;
  collectionId?: number;
  readingTime?: number;
  slug: string;
  markdown?: string;
  html?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  type_of: string;
  canonical_url: string;
  slug: string;
  body_markdown: string;
  tags: string[];
  tag_list: string[];
  comments_count: number;
  cover_image: string;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published: boolean;
  published_at: string;
  published_timestamp: string;
  url: string;
  readable_publish_date: string;
  collection_id: null | number;
  social_image: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: null | string;
  last_comment_at: string;
  body_html: string;
}

export type Post = {
  slug: string;
  title: string;
  description: string;
  published_at: string;
  contentHtml?: string;
  tags: string[];
  category: string;
};

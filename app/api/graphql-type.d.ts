export type Content_Query = {
  html: string;
  raw: {
    children: {
      type: string;
      children: {
        text: string;
      }[];
    }[];
  };
};

export type Picture_Query = {
  size: number;
  stage: string;
  url: string;
  width: number;
};

export type Node_Query = {
  createdAt: Date;
  content: Content_Query;
  id: string;
  publishedAt: Date;
  publishedBy: {
    id: string;
  };
  title: string;
  titleSlug: string;
  updatedAt: Date;
  picture: Picture_Query;
};

export type article_Query = {
  article: Node_Query;
};

export type Query = {
  articlesConnection: {
    edges: {
      node: Node_Query;
    }[];
  };
};

export type doc_Query = {
  id: string;
  content: Content_Query;
  picture: Picture_Query;
  title: string;
  titleSlug: string;
  bioOf: string;
  publishedBy: {
    id: string;
  };
  publishedAt: Date;
  updatedAt: Date;
};

export type Story = {
  stories: doc_Query[];
  story: doc_Query;
};

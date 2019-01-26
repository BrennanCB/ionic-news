export interface ArticleInteface {
  author: string;
  content: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  publishedAt: Date;
  title: string;
  url: string;
  urlToImage: string;
}

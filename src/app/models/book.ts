export interface Book {
  authors?: string[];
  description?: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  pageCount?: number;
  publishedDate?: string;
  publisher?: string;
  requested?: boolean;
  subtitle?: string;
  title?: string;
  userId?: string;
  username?: string;
  _id?: string;
}

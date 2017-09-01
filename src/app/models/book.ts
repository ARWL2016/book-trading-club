export interface Book {
  authors?: string[];
  description?: string;
  imageLinks? : {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  pageCount?: number;
  publishedDate?: string;
  publisher?: string;
  subtitle?: string;
  title?: string;
}

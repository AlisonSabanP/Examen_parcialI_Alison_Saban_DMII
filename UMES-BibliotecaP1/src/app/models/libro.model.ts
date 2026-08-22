export interface Libro {
    bookId: number;
    title: string;
    authors: Array<string>;
    first_publish_year: number;
    edition_count: number;
    language: Array<string>;
}
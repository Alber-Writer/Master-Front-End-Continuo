console.log("************** DELIVERABLE 04 *********************");
console.log("Read Books");
{
  interface Book {
    title: string,
    isRead: boolean
  }
  type BooksCol = Book[];

  const isBookReadDeliverable = (books: BooksCol, titleToSearch: Book["title"]): boolean =>
    books.some((book: Book): boolean => book.title === titleToSearch && book.isRead === true);

  const books: BooksCol = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  console.log(isBookReadDeliverable(books, "Devastación")); // true
  console.log(isBookReadDeliverable(books, "Canción de hielo y fuego")); // false
  console.log(isBookReadDeliverable(books, "Los Pilares de la Tierra")); // false
}

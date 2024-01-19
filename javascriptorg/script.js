const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destucturing

const book = getBook(5);
const title = book.title;
const author = book.author;
const publicationDate = book.publicationDate;
const hasMovieAdaptation = book.hasMovieAdaptation;
book;
author;
title;
const { pages, genres } = book;
pages;
genres;
console.log(author, title, pages, genres);
console.log(pages);

const [primaryGenre, secondaryGenre, ...otherGeners] = genres;
console.log(primaryGenre, secondaryGenre, otherGeners);

const newGenres = ["Thriller", ...otherGeners];
newGenres;

const updateBook = { ...book, movieTalk: "Hit", pages: 600 };
updateBook;

const one = book.genres[3];
one;

const IfElse = pages > 1000 ? "More Than Thousand" : "Less Than Thousand";
IfElse;

const pageRange = `the book has ${IfElse} pages`;
pageRange;
const summary = `${title} is a fantastic movie of ${pages} pages with excellent writing by ${author}`;
summary;

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summaryy = `the book has ${
  hasMovieAdaptation ? "" : "not"
}been adapted as a movie`;
summaryy;

//Optional Chaining

function totalReviews(book) {
  const reads = book.reviews?.goodreads?.reviewsCount;
  const library = book.reviews?.librarything?.reviewsCount ?? 0;
  return reads + library;
}
console.log(totalReviews(book));

//Functional Array Methods
const books = getBooks();
books;

const x = [1, 20, 40, 5, 9].map((cal) => cal * 2);
x;

const movieTitles = books.map((book) => book.title);
movieTitles;

const Bdata = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
Bdata;

const Bauthors = books.map((book) => book.author);
Bauthors;

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const fanatsyBooks = books
  .filter((books) => books.genres.includes("fantasy"))
  .map((book) => book.title);
fanatsyBooks;

const allPages = books.reduce((sum, book) => sum + book.pages, 0);
allPages;
const allPagesStr = books.reduce((add, book) => add + book.title, "");
allPagesStr;

const arr = [82, 12, 48, 27, 205];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortByPages = books.slice().sort((a, b) => a.pages - b.pages); //ascending if(b-a) secending order
sortByPages;

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  console.log("hi all");
  return data;
}

const todos = getTodos();
function key() {
  console.log(todos);
  console.log("welcome");
}

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 1.5;
  }
  set state(stateeq) {
    if (stateeq <= 0) {
      this._state = 0;
    } else if (stateeq > 100) {
      this._state = 100;
    } else {
      this._state = stateeq;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    return this.books.filter((book) => book[type] === value).length
      ? this.books.find((book) => book[type] === value)
      : null;
  }
  giveBookByName(bookName) {
    let giveBook;
    let positionBook = this.books.findIndex((book) => book.name === bookName);
    if (positionBook !== -1) {
      giveBook = this.books[positionBook];
      delete this.books.splice(positionBook, 1);
      return giveBook;
    } else {
      return null;
    }
  }
}
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subjectName) {
    if (mark >= 2 && mark <= 5) {
      if (
        Object.keys(this.marks).filter((subject) => subject === subjectName)
          .length
      ) {
        this.marks[subjectName].push(mark);
      } else {
        this.marks[subjectName] = [mark];
      }
    }
  }
  getAverageBySubject(subjectName) {
    if (
      Object.keys(this.marks).filter((subject) => subject === subjectName)
        .length
    ) {
      return this.marks[subjectName].reduce(
        (sum, acc, i, arr) =>
          i === arr.length - 1 ? (sum + acc) / arr.length : sum + acc,
        0
      );
    } else {
      return 0;
    }
  }
  getAverage() {
    return Object.keys(this.marks).reduce(
      (acc, subject, i, arr) =>
        i === arr.length - 1
          ? (acc + this.getAverageBySubject(subject)) / arr.length
          : acc + this.getAverageBySubject(subject),
      0
    );
  }
}

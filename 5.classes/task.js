class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix () {
    this.state *= 1.5;
  }

  set state (fix) {
    if (fix < 0) {
      this._state = 0
    } else if (fix > 100) {
      this._state = 100;
    } else {
      this._state = fix;
    }
  }
  get state () {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor (name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find(book => book[type] === value);
    if (result){
      return result;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let result = this.books.find(book => book.name === bookName);
    if (result) {
      this. books = this.books.filter(book => book.name !== bookName);
      return result;
    } else {
      return null;
    }
  }
}
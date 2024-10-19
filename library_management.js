// Task 1. Create a Book Class

class Book {
    constructor(title, author, ISBN, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = isAvailable;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }

    get isAvailable() {
        return this._isAvailable;
    }
    
    set isAvailable(status) {
        this._isAvailable = status;
    }
}

// Task 2. Create a Section Class

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    calculateTotalBooksAvailable() {
        let availableBooksCount = 0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isAvailable) {
                availableBooksCount++;
            }
        }
        return availableBooksCount;
    }

    listBooks() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`${this.books[i].getDetails()} - Available: ${this.books[i].isAvailable}`);
        }
    }
}
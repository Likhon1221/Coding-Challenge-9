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

// Task 3. Create a Patron Class

class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}"`);
        } else {
            console.log(`"${book.title}" not available.`);
        }
    }

    returnBook(book) {
        const initialLength = this.borrowedBooks.length;
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);

        if (this.borrowedBooks.length < initialLength) {
            book.isAvailable = true;
            console.log(`${this.name} returned "${book.title}"`);
        } else {
            console.log(`${this.name} did not borrow "${book.title}"`);
        }
    }
}

// Task 4. Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron {
    constructor(name, priority = true) {
        super(name);
        this.priority = priority;
    }

    // Overriding the borrowBook method
    borrowBook(book) {
        if (book.isAvailable) {
            super.borrowBook(book);
        } else {
            console.log(`VIP ${this.name} has priority, but "${book.title}" is already borrowed.`);
        }
    }
}
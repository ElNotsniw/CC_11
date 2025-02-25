// Task 1 - Created Book Class

// Create a class, Book, to include information like titles, authors, isbns, and amount of copies.

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title
        this.author = author
        this.isbn = isbn
        this.copies = copies
    }

    // Retreiving the information from the class, Books.

    getdetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }

    // Update the amount of copies after a transaction occurs.

    updateCopies(quantity) {
        this.copies += quantity
    }
}

// Creating a book and then updating the amount of copies, and finally, console-loggin the results.

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5)
console.log(book1.getdetails())

book1.updateCopies(-1)
console.log(book1.getdetails())





// -------------------------------------------------------------------------------------------------------------------------------
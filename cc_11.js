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


// -------------------------------------------------------------------------------------------------------------------------------


// (Task 1) - Creating a book and then updating the amount of copies, and finally, console-loggin the results.

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5)
console.log(book1.getdetails())

book1.updateCopies(-1)
console.log(book1.getdetails())





// -------------------------------------------------------------------------------------------------------------------------------



// Task 2 - Created Borrower Class

// Create a class, Borrower, and include information like name and the borrowerID

class Borrower {
    constructor(name, borrowerID) {
        this.name = name
        this.borrowerID = borrowerID
        this.borrowedBooks = []
    }

    // A method to show what book is going to be borrowed

    borrowBook(book) {
        this.borrowedBooks.push(book)
    }
    
    // A method to have a book returned to the library

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book)
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1)
        }
    }
}


// -------------------------------------------------------------------------------------------------------------------------------


// (Task 2) - Creating a borrower with a name and borrowerID, with them borrowing The Great Gatsby book

const borrower1 = new Borrower("Alice Johnson", 201)
borrower1.borrowBook("The Great Gatsby")
console.log(borrower1.borrowedBooks)

// Console-logging the borrower returning the book they borrowed

borrower1.returnBook("The Great Gatsby")
console.log(borrower1.borrowedBooks)




// -------------------------------------------------------------------------------------------------------------------------------




// Task 3 - Created Library Class

// Creating a class, Library, to include the books and the borrowers

class Library {
    constructor () {
        this.books = []
        this.borrowers = []
    }

    // Creating this method to add books to the library

    addBook(book) {
        this.books.push(book)
    }

    // Creating this method to list out all books in the library currently

    listBooks() {
        this.books.forEach(book => {
            console.log(book.getdetails())
        })
    }

    // (Task 4) - Creating a method, lendBook, to associate a borrowed book to a person

    lendBook(borrowerID, isbn) {
        
    // Allowing members to borrow books by finding if it is in stock, lending it to them, and updating it in the database
        
    const borrower = this.borrowers.find(b => b.borrowerID === borrowerID)

        const book = this.books.find(b => b.isbn === isbn)

        if (book.copies <= 0){
            console.log("No Copies Available")
            return
        }


        book.updateCopies(-1)
        borrower.borrowBook(book.title) 
    }
}

// -------------------------------------------------------------------------------------------------------------------------------


// (Task 3) - Console-logging the Library to show what is in the library's database

const library = new Library()
library.addBook(book1)
library.listBooks()


// -------------------------------------------------------------------------------------------------------------------------------


// (Task 4) - Console-logging the borrower and book that the person is borrowing with their ID and the book's ISBN

library.borrowers.push(borrower1)
library.lendBook(201, 123456)
console.log(book1.getdetails())
console.log(borrower1.borrowedBooks)
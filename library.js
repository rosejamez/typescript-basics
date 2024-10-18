var Author = /** @class */ (function () {
    function Author(authorId, name, bio) {
        this.authorId = authorId;
        this.name = name;
        this.bio = bio;
    }
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(bookId, title, author, publishedYear) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(memberId, name, email) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
    }
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.authors = [];
        this.members = [];
    }
    Library.prototype.addAuthor = function (author) {
        this.authors.push(author);
    };
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Library.prototype.displayAuthors = function () {
        console.log("Authors:");
        this.authors.forEach(function (author) {
            console.log("ID: ".concat(author.authorId, ", Name: ").concat(author.name, ", Bio: ").concat(author.bio));
        });
    };
    Library.prototype.displayBooks = function () {
        console.log("Books:");
        this.books.forEach(function (book) {
            console.log("ID: ".concat(book.bookId, ", Title: ").concat(book.title, ", Author: ").concat(book.author.name, ", Year: ").concat(book.publishedYear));
        });
    };
    Library.prototype.displayMembers = function () {
        console.log("Library Members:");
        this.members.forEach(function (member) {
            console.log("ID: ".concat(member.memberId, ", Name: ").concat(member.name, ", Email: ").concat(member.email));
        });
    };
    return Library;
}());
// Example Usage
var library = new Library();
// Adding authors
var author1 = new Author(1, "George Orwell", "English novelist and essayist.");
var author2 = new Author(2, "J.K. Rowling", "British author, best known for the Harry Potter series.");
library.addAuthor(author1);
library.addAuthor(author2);
// Adding books
var book1 = new Book(1, "1984", author1, 1949);
var book2 = new Book(2, "Harry Potter and the Philosopher's Stone", author2, 1997);
library.addBook(book1);
library.addBook(book2);
// Adding members
var member1 = new Member(1, "Alice Smith", "alice@example.com");
var member2 = new Member(2, "Bob Johnson", "bob@example.com");
library.addMember(member1);
library.addMember(member2);
// Displaying details
library.displayAuthors();
library.displayBooks();
library.displayMembers();

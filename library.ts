class Author {
    constructor(
        public authorId: number,
        public name: string,
        public bio: string
    ) {}
}

class Book {
    constructor(
        public bookId: number,
        public title: string,
        public author: Author,
        public publishedYear: number
    ) {}
}

class Member {
    constructor(
        public memberId: number,
        public name: string,
        public email: string
    ) {}
}

class Library {
    private books: Book[] = [];
    private authors: Author[] = [];
    private members: Member[] = [];

    addAuthor(author: Author): void {
        this.authors.push(author);
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    displayAuthors(): void {
        console.log("Authors:");
        this.authors.forEach(author => {
            console.log(`ID: ${author.authorId}, Name: ${author.name}, Bio: ${author.bio}`);
        });
    }

    displayBooks(): void {
        console.log("Books:");
        this.books.forEach(book => {
            console.log(`ID: ${book.bookId}, Title: ${book.title}, Author: ${book.author.name}, Year: ${book.publishedYear}`);
        });
    }

    displayMembers(): void {
        console.log("Library Members:");
        this.members.forEach(member => {
            console.log(`ID: ${member.memberId}, Name: ${member.name}, Email: ${member.email}`);
        });
    }
}


const library = new Library();

const author1 = new Author(1, "George Orwell", "English novelist and essayist.");
const author2 = new Author(2, "J.K. Rowling", "British author, best known for the Harry Potter series.");
library.addAuthor(author1);
library.addAuthor(author2);


const book1 = new Book(1, "1984", author1, 1949);
const book2 = new Book(2, "Harry Potter and the Philosopher's Stone", author2, 1997);
library.addBook(book1);
library.addBook(book2);


const member1 = new Member(1, "Alice Smith", "alice@example.com");
const member2 = new Member(2, "Bob Johnson", "bob@example.com");
library.addMember(member1);
library.addMember(member2);


library.displayAuthors();
library.displayBooks();
library.displayMembers();

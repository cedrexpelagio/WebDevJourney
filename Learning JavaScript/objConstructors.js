const book = {
    title: "",
    author: "",
    pages: 0,
    read: "",
};

function Author(author) {
    this.author = author;
}

Author.prototype.hello = function () {
    console.log(`Hello, I'm ${this.author}!`);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

Object.setPrototypeOf(Book.prototype, Author.prototype);

function OldBook(title, author, pages, read, datePublish) {
    Book.call(this, title, author, pages, read);
    this.datePublish = datePublish;
}

OldBook.prototype.displayPublishDate = function () {
    console.log(`The ${this.title} by ${this.author} in ${this.datePublish}, ${this.pages} pages, ${this.read}`);
}

Object.setPrototypeOf(OldBook.prototype, Book.prototype);

const topCourse = new OldBook("JavaScript Course", "The Odin Project", 20, "not read yet", 1990);
const atomicHabits = new Book("Atomic Habits", "James Clear", 200, "read");

console.log(topCourse.info());
topCourse.displayPublishDate();
console.log(atomicHabits.info());

atomicHabits.hello();

console.log(Object.getPrototypeOf(Object.getPrototypeOf(atomicHabits)));
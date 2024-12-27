// Lớp Book:

// Thuộc tính:
// title: tên sách
// author: tác giả
// year: năm xuất bản
// status: trạng thái sách (có thể là "available" hoặc "borrowed")
// Phương thức:
// constructor(title, author, year): hàm khởi tạo để khởi tạo các thuộc tính của sách.
// borrow(): thay đổi trạng thái sách thành "borrowed".
// returnBook(): thay đổi trạng thái sách thành "available".
// getInfo(): in ra thông tin sách (tên, tác giả, năm xuất bản, trạng thái).

class Book {
    title: string;
    author: string;
    year: Date;
    status: string ;

    constructor(tittle: string, author:string, year:Date){
        this.title = tittle;
        this.author = author;
        this.year = year;
        this.status ="available";
    }
    borrow():void{
        if(this.status == "available"){
            this.status = "borrowed";
            console.log(`Bạn đã mượn được sách ${this.title}`)
        }
        else{
            console.log(`Sách ${this.title} hiện tại không có sẵn`)
        }
    }
    returnBook():void{
        if(this.status == "borrowed"){
            this.status = "available";
            console.log(`Bạn đã trả sách ${this.title}`)
        }
        else{
            console.log(`Sách ${this.title} đã được trả, vui lòng xác nhận lại`);
        }
    }
    getInfo():void {
        const info ={
            Title: this.title,
            Author: this.author,
            Year:this.year,
            Status: this.status
        };
        console.log(info);
    }

}



// Lớp Library:

// Thuộc tính:
// books: danh sách chứa các đối tượng sách.
// Phương thức:
// constructor(): hàm khởi tạo danh sách sách trống.
// addBook(book: Book): thêm một sách vào thư viện.
// listBooks(): liệt kê tất cả các sách trong thư viện, bao gồm thông tin và trạng thái hiện tại.
// borrowBook(title: string): cho mượn sách theo tên (nếu sách có sẵn).
// returnBook(title: string): trả sách theo tên.

// Bài tập: Quản lý thư viện sách

// Mô tả: Xây dựng các lớp (class) để quản lý thông tin của một thư viện sách,
//  bao gồm các sách và các chức năng như thêm sách, xem thông tin sách, cho mượn sách và trả sách.

class Library {
    books: Book[];
    
    constructor(book:Book[]=[]){
        this.books = book;
    }

    addBook(book: Book){         
        this.books.push(book);
    }
    listBooks():void{
        if(this.books.length === 0 ){
            console.log("Hiện tại không có sách")
        }
        else(this.books.forEach((book)=>{
             return book.getInfo();
        }
        ))
    }
}

const book1 = new Book("Harry Potter và Hòn đá Phù thủy", "J.K. Rowling", new Date("1997-06-26") );
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald",new Date("1925-06-26"));

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.listBooks();

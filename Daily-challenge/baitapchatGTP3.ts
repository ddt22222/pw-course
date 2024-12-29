// // // Mô tả: Tạo một lớp Student với các thuộc tính:

// // // id (số nguyên)
// // // name (chuỗi)
// // // age (số nguyên)
// // // gpa (số thực)
// // // Yêu cầu:

// // // Tạo phương thức để hiển thị thông tin sinh viên.
// // // Tạo một mảng Student và thêm 5 sinh viên.
// // // Viết hàm tìm sinh viên có GPA cao nhất.

// // class Student {
// //     constructor(
// //         public id: number,
// //         public name: string,
// //         public age: number,
// //         public gpa: number,
// //     ) {}

// //     showInfor() {
// //         const info = {
// //             ID: this.id,
// //             Tên: this.name,
// //             Tuổi: this.age,
// //             ĐiểmGPA: this.gpa,
// //         };
// //         console.log(info);
// //     }
// // }

// // const students: Student[] = [
// //     new Student(1, "Đức", 18, 3.5),
// //     new Student(2, "Lan", 19, 3.8),
// //     new Student(3, "Hùng", 20, 3.2),
// //     new Student(4, "Mai", 18, 3.9),
// //     new Student(5, "An", 21, 3.6),
// // ];

// // // Tìm GPA lớn nhất và sinh viên có GPA lớn nhất
// // let maxGpaStudent: Student | null = null;

// // students.forEach(student => {
// //     if (maxGpaStudent === null || student.gpa > maxGpaStudent.gpa) {
// //         maxGpaStudent = student;
// //     }
// // });

// // // Hiển thị thông tin sinh viên có GPA cao nhất
// // if (maxGpaStudent) {
// //     console.log("Sinh viên có GPA cao nhất:");
// //     maxGpaStudent.showInfor();
// // }


// // Bài tập 2: Hệ thống quản lý tài khoản ngân hàng
// // Mô tả: Tạo các lớp:

// // BankAccount với các thuộc tính:
// // accountNumber (số tài khoản),
// // ownerName (tên chủ tài khoản),
// // balance (số dư).

// class BankAccount {
//     constructor(
//         public accountNumber: string,
//         public ownerName: string,
//         public balance: number
//     ) {}

//     deposit(amount: number) {
//         this.balance += amount;
//         console.log(`Tài khoản của bạn có ${this.balance} đồng`);
//     }

//     withdraw(amount: number) {
//         this.balance -= amount;
//         console.log(`Bạn đã rút ${amount}.Tài khoản của bạn còn ${this.balance} đồng`);
//     }

//     checkBalance(): void {
//         console.log(`Bạn có ${this.balance} trong tài khoản`);
//     }

//     // Phương thức chuyển đổi BankAccount thành SavingAccount
//     toSavingAccount(interestRate: number): SavingAccount {
//         return new SavingAccount(this.accountNumber, this.ownerName, this.balance, interestRate);
//     }
// }

// class SavingAccount extends BankAccount {
//     constructor(
//         public accountNumber: string,
//         public ownerName: string,
//         public balance: number,
//         public interestRate: number
//     ) {
//         super(accountNumber, ownerName, balance); // Gọi constructor của lớp cha
//     }

//     applyInterest() {
//         const interest = this.balance * this.interestRate;
//         this.balance += interest; // Cộng lãi suất vào số dư
//         console.log(`Lãi suất đã được áp dụng. Số dư mới là ${this.balance}`);
//     }
// }

// // Sử dụng
// const currentAccount = new BankAccount("0001", "Duc", 1000000);
// currentAccount.deposit(500000); // Gửi tiền
// currentAccount.withdraw(200000); // Rút tiền
// currentAccount.checkBalance(); // Kiểm tra số dư

// // Chuyển sang tài khoản tiết kiệm
// const savingAccount = currentAccount.toSavingAccount(0.05);
// savingAccount.applyInterest(); // Tính lãi suất


// // Các phương thức:
// // deposit(amount: number): Nạp tiền.
// // withdraw(amount: number): Rút tiền.
// // checkBalance(): Kiểm tra số dư.
// // Yêu cầu nâng cao:

// // Tạo lớp con SavingAccount (Tài khoản tiết kiệm) có thêm thuộc tính interestRate (lãi suất) 
// // và phương thức applyInterest() để tính lãi.
// // Tạo một mảng các tài khoản, thực hiện giao dịch và in thông tin.


// Bài tập 3: Quản lý sản phẩm
// Mô tả: Tạo một lớp Product với các thuộc tính:

// id (số nguyên),
// name (chuỗi),
// price (số thực),
// quantity (số nguyên).
// Yêu cầu:

// Tạo phương thức để tính tổng giá trị (getTotalValue()).
// Tạo lớp Inventory (kho hàng) quản lý danh sách sản phẩm.
// Phương thức thêm, sửa, xóa sản phẩm.
// Phương thức tính tổng giá trị của tất cả sản phẩm trong kho.

class Product {
    constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number){};

    getTOtalValue(){
        const total = this.price*this.quantity
        return total;
    }
}

class Inventory {
    product : Product[] = [];

    constructor(product: Product[]){
        this.product = product;
    }

    addProduct(product: Product){
        this.product.push(product);
    }
    editProduct(updatedProduct: Product) {
        // Tìm sản phẩm theo id và cập nhật thông tin
        const index = this.product.findIndex(x => x.id === updatedProduct.id);
        
        if (index !== -1) {
            // Cập nhật các thuộc tính name, price, quantity
            this.product[index].name = updatedProduct.name;
            this.product[index].price = updatedProduct.price;
            this.product[index].quantity = updatedProduct.quantity;
            console.log(`Sản phẩm với ID ${updatedProduct.id} đã được cập nhật.`);
        } else {
            console.log(`Không tìm thấy sản phẩm với ID ${updatedProduct.id}.`);
        }
    }
    removeProduct(id: number) {
        this.product = this.product.filter(x => x.id !== id);
        console.log(`Sản phẩm có id ${id} đã được xóa.`);
    }

    sumProduct() {
        const total = this.product.reduce((sum, product) => sum + product.getTOtalValue(), 0);
        console.log(`Tổng giá trị của tất cả sản phẩm trong kho: ${total}`);
    }
}

    const sp1 = new Product(1,"aa",200000,120);
    const sp2 = new Product(2,"bb",120000,10);

    const item1 = new Inventory([sp1,sp2]);

    item1.sumProduct();
    

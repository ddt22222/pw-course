// /////////////////////Đề bài: Xây dựng hệ thống quản lý đơn hàng//////////////////////


// Hãy xây dựng một hệ thống quản lý đơn hàng cho một cửa hàng trực tuyến. Hệ thống cần có các lớp sau:

// 1. Lớp Product
// Thuộc tính:
// id: Mã sản phẩm (kiểu number)
// name: Tên sản phẩm (kiểu string)
// price: Giá sản phẩm (kiểu number)
// quantity: Số lượng có sẵn (kiểu number)
// Phương thức:
// getInfo(): Trả về thông tin sản phẩm dạng chuỗi.
// updateStock(quantity: number): Cập nhật số lượng sản phẩm trong kho.

class Product {
    constructor(
        public id: number, 
        public name:string, 
        public price:number, 
        public quantity:number
    ){}
    getInfo():void{
        const info = `id: ${this.id}, name: ${this.name}, price: ${this.price}, quantity: ${this.quantity}`;
        console.log(info);
    }
    updateStock(quantity: number){
        this.quantity += quantity;
        console.log(`Trong kho hiện tại có ${this.quantity} sản phẩm`);
    }
}

// 2. Lớp OrderItem
// Thuộc tính:
// product: Sản phẩm (kiểu Product)
// quantity: Số lượng sản phẩm trong đơn hàng (kiểu number)
// Phương thức:
// getTotal(): Trả về tổng tiền của sản phẩm trong đơn hàng.

class OrderItem {
    product: Product;
    quantity: number;
    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
    getTotal(): number {
        if (this.quantity > this.product.quantity) {
            console.log(`Không đủ hàng trong kho cho sản phẩm ${this.product.name}`);
            return 0; // Không thể tính tổng nếu không đủ hàng
        }
        return this.quantity * this.product.price;
    }
}

// 3. Lớp Order
// Thuộc tính:
// id: Mã đơn hàng (kiểu number)
// items: Mảng các sản phẩm trong đơn hàng (kiểu OrderItem[])
// status: Trạng thái đơn hàng (kiểu string, các giá trị: "Pending", "Completed", "Cancelled")
// Phương thức:
// addItem(item: OrderItem): Thêm một sản phẩm vào đơn hàng.
// removeItem(productId: number): Xóa sản phẩm khỏi đơn hàng dựa trên id.
// getTotal(): Tính tổng tiền của toàn bộ đơn hàng.
// checkout(): Đổi trạng thái đơn hàng thành "Completed".

class Order {
    id: number;
    items: OrderItem[]=[];
    status: string;

    constructor(id: number){
        this.id = id;
    }
    addItem(item: OrderItem): void {
        this.items.push(item);
        console.log(`Đã thêm sản phẩm: ${item.product.name}, số lượng: ${item.quantity}`);
    }
    removeItem(productId: number): void {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            const removedItem = this.items.splice(index, 1)[0];
            console.log(`Đã xóa sản phẩm: ${removedItem.product.name}`);
        } else {
            console.log("Không tìm thấy sản phẩm để xóa.");
        }
    }

    getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.getTotal(), 0);
    }
}


// 4. Lớp Store
// Thuộc tính:
// products: Danh sách sản phẩm có sẵn (kiểu Product[])
// orders: Danh sách các đơn hàng (kiểu Order[])
// Phương thức:
// addProduct(product: Product): Thêm sản phẩm mới vào cửa hàng.
// createOrder(order: Order): Tạo đơn hàng mới.
// listOrders(): Hiển thị tất cả các đơn hàng.

// Nhiệm vụ:
// Cài đặt toàn bộ các lớp theo mô tả.
// Viết hàm kiểm tra trong Store để tìm sản phẩm theo id.
// Viết thêm hàm hủy đơn hàng (cancelOrder()) trong lớp Order.
// Hiển thị danh sách sản phẩm còn lại sau mỗi đơn hàng.
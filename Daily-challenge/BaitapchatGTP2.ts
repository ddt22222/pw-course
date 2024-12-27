class Product {
    constructor(
        public id: number, 
        public name: string, 
        public price: number, 
        public quantity: number
    ) {}

    getInfo(): string {
        return `id: ${this.id}, name: ${this.name}, price: ${this.price}, quantity: ${this.quantity}`;
    }

    updateStock(quantity: number) {
        this.quantity += quantity;
        console.log(`Trong kho hiện tại có ${this.quantity} sản phẩm`);
    }
}

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

class Order {
    id: number;
    items: OrderItem[] = [];
    status: string = "Pending";

    constructor(id: number) {
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

    checkout(): void {
        if (this.items.length > 0) {
            this.status = "Completed";
            console.log("Đơn hàng đã hoàn tất.");
        } else {
            console.log("Không có sản phẩm trong giỏ hàng để thanh toán.");
        }
    }

    cancelOrder(): void {
        this.status = "Cancelled";
        console.log("Đơn hàng đã bị hủy.");
    }
}

class Store {
    products: Product[] = [];
    orders: Order[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    createOrder(order: Order): void {
        this.orders.push(order);
    }

    listOrders(): void {
        this.orders.forEach(order => {
            console.log(`Order ID: ${order.id}, Status: ${order.status}`);
            order.items.forEach(item => {
                console.log(`  Product: ${item.product.name}, Quantity: ${item.quantity}, Total: ${item.getTotal()}`);
            });
        });
    }

    listProducts(): void {
        this.products.forEach(product => {
            console.log(product.getInfo());
        });
    }

    findProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}

// Tạo các sản phẩm và cửa hàng
const product1 = new Product(1, "Áo", 123000, 3);
const product2 = new Product(2, "Quần", 123000, 1);

const nhapHang = new Store();
nhapHang.addProduct(product1);
nhapHang.addProduct(product2);

// Kiểm tra danh sách sản phẩm
console.log("Danh sách sản phẩm:");
nhapHang.listProducts();

// Tạo đơn hàng và thêm sản phẩm
const order1 = new Order(1);
order1.addItem(new OrderItem(product1, 2));
order1.addItem(new OrderItem(product2, 1));

// Tạo đơn hàng trong cửa hàng
nhapHang.createOrder(order1);

// Kiểm tra danh sách đơn hàng
console.log("\nDanh sách đơn hàng:");
nhapHang.listOrders();
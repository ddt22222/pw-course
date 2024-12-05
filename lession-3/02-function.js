// Bài 1 Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì

const { DESTRUCTION } = require("dns");

const height = 1.75;
const weight = 90;

function BMI(){
    const BMI= weight/(height*height);
    console.log(BMI);

    if(BMI < 18.5){
        console.log("Thieu can")
        return;
    }
    
    if(18.5 < BMI < 25){
        console.log("Binh thuong")
        return;
    }
    if(25 < BMI < 30){
        console.log("Thua can")
        return;
    }
    if(BMI >= 30){
        console.log("Beo phi")
        return;
    }
}
BMI();

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
// chuyển đổi.
// Biết công thức chuyển đổi:
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;


const celsius = 36; 
const fahrenheit = 97;

function celciusToFahrenheit() {
    const celsiusToFahrenheit = celsius*9/5 +32;
    const fahrenheitToCelsius = (fahrenheit-32)*5/9;
    console.log(`Độ F là :${celsiusToFahrenheit}`);
    console.log(`Độ C là :${fahrenheitToCelsius}`)
}
celciusToFahrenheit();


// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.

const array = [2,3,5,6,1,2,-2,3]    
function SumArray(){
    let sum = 0
    for(let i of array){
        sum += i ;
    }
    return console.log(`Tổng là ${sum}`)    
}
SumArray();

// //4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

const array2 = [2,9,3,4,1993,2,1,19,11,13,1997,0,1];

function isPrime(){
    let prime = {};
    for(let i of array2){
        if(i <= 1){
            continue;
        }
    let isPrimeNumber = true;
    for (j = 2; j <= Math.sqrt(i); j++){
        if(i % j == 0){
            isPrimeNumber = false;
            break;
        }
    }
        if(isPrimeNumber){
            prime[i] =  "so nguyen to"
        }
    }
    console.log(prime);
}
isPrime();

// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
// người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail


let userInfo =  [
{
    name: "Duc",
    email: "Duc@gmail.com"
},
{
    name: "Nga",
    email: "nga@gmail.com"
},
{
    name: "Trong",
    email: "Trong@gmail.com"
},
{
    name: "Viet",
    email: "Viet@gmail.com"
}
]

function replaceEmail(name,newEmail){
    for (let i in userInfo){
        if(name === userInfo[i].name){
            userInfo[i].email= newEmail;
        }
    }
}

replaceEmail("Viet", "Viet2@gmail.com");
console.log(userInfo);

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}

let studentScore = [
{
    "name" : "alex",
    score : 85
},
{
    "name": "david",
    score : 79
},
{
    "name": "tom",
    score : 92
},
{
    "name": "My",
    score : 27  
},
{
    "name": "thomas",
    score : 54
},
]

function scoreAvg(){
    sumScore = 0;
    for(let i in studentScore){
        sumScore += studentScore[i].score;
    }
    return sumScore/studentScore.length;
}
const scoreA = scoreAvg();
console.log(scoreA);

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }

let productCart = [
 { name: "product 1", price: -100},
 { name: "product 2", price: 200},
 { name: "product 3", price: 300},
 { name: "product 4", price: 400},
 { name: "product 5", price: 500}
]

function checkPrice(){
    for (let i in productCart){
        if(productCart[i].price < 0){
            return console.log("Có sản phẩm giá nhỏ hơn 0");
        }
    }
    console.log("Tất cả sản phẩm có giá đều lớn hơn 0");
}
checkPrice();

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.

function checkOpen(now) {

}
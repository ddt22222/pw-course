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


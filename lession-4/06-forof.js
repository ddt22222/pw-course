// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
// 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.

let array = [1, 2, 3, 4, 3, 2, 4, 1, 55, 23];
let newArray = [];  

function newArrayConvert(number){
for (let [index, value] of array.entries()){
    if (value === number){
    newArray.push(index);
    }
}
return newArray;
}
console.log(newArrayConvert(1));


// function newArrayConvert(number) {
//     for (let [index, value] of array.entries()) { // hàm này lấy ra cả index và value của mảng
//         if (value === number) {
//             if (index === 0) {
//                 // Xử lý nếu trường hợp lấy ra số đầu tiên của mảng
//                 newArray.push(array[index], array[index + 1], array[index + 2]);
//             } else if (index === array.length - 1) {
//                 // xử lý nếu trường hợp lấy ra số cuối của mảng
//                 newArray.push(array[index - 2], array[index - 1], array[index]);
//             } else {
//                 // xử lý nếu lấy ra bất kỳ số nào ở giữa mảng
//                 newArray.push(array[index - 1], array[index], array[index + 1]);
//             }
//             break; //dừng lại nếu vào bất ký trường hợp nào
//         }
//     }
//     return newArray; // trả về newArray sau loop
// }
// console.log(` Mảng của bạn là ${newArrayConvert(2)}`);

// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
// “y”, “a”, “l”, “P”] => dua vao bai tap for


// Cach 1
// let str = "Playwright";
// let reverseStr = Array.from(str).reverse();
// let newStr = [];

// for (let char of reverseStr){
//     newStr.push(char);
// }
// console.log(newStr);

//Cach 2 

let str2 = "Playwright";
let str2Reserve = [];

for (let i = str2.length - 1; i >= 0; i--) {
    str2Reserve.push(str2[i]);
}

console.log(str2Reserve);



// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
// 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]

let array2 = [1, 2, 3, 1, 2, 4, 1, 5];
let count = {};
let newArray2 = [];

// Đếm số lần xuất hiện của từng phần tử
array2.forEach(value => {
    count[value] = (count[value] || 0) + 1;
});
console.log(count)

// Thêm các phần tử không bị trùng lặp vào mảng mới
array2.forEach(value => {
    if (count[value] === 1) {
        newArray2.push(value);
    }
});

console.log(newArray2); // Kết quả: [3, 4, 5]

// for (let check of array2) {
//     let isDuplicate = false;
//     for (let existing of newArray2) {  
//         if (check === existing) { // kiểm tra xem Giá trị được thêm vào  có trong mảng mới không, nếu có break
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         newArray2.push(check);
//     }
// }

// console.log(newArray2);
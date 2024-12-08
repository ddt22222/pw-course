// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra

let array=[1,2,3];

array.forEach(number => console.log(number));

// Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,
//     3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3

let array2 = [1, 2, 4, 1, 2, 3, 5, 1];

let max = array2[0]; // Giả sử phần tử đầu tiên là lớn nhất
let min = array2[0];  // Giả sử phần tử đầu tiên là lớn nhất
let sum = 0;
array2.forEach((number) => {
  sum += number; 
  if (number > max) {
    max = number; // Cập nhật giá trị lớn nhất nếu tìm thấy số lớn hơn
  }
  else if (number < min){
    min = number; 
  }
});
console.log("Số lớn nhất là:", max);
console.log("Số nhỏ nhất là:", min);
console.log("Tổng là:", sum)

// Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
// dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

let array3 = [1,2,3];
let newArray3 = [];

array3.forEach((number) => {
    let newNumber;
    newNumber = number*2;
    newArray3.push(newNumber);
})
console.log(newArray3);
// 1. Tính tổng từ 1 đến 100.
sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 2. In bảng cửu chương từ 2 đến 9.

let a = 2;
let b = 1;

for (let i = a; i <= 9; i++) {
  for (let j = b; j <= 9; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
  a++;
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let isOdd = [];

for (let i = 1; i <= 99; i++) {
  if (i % 2 !==0) {
    isOdd.push(i);
    continue;
  }
}
console.log(isOdd);

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
//     user-1@example.com, user2@example.com, ..., user10@example.com).

let mailInfor = [
  { name: "userA", order: "1" },
  { name: "userB", order: "2" },
  { name: "userC", order: "3" },
  { name: "userD", order: "4" },
  { name: "userE", order: "5" },
];
mailUser = [];
for (let i in mailInfor) {
  mailUser.push(mailInfor[i].name + mailInfor[i].order + "@gmail.com");
}
console.log(mailUser);

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}

let revenue = [
  { month: 1, total: 200 },
  { month: 2, total: 1000 },
  { month: 3, total: 1200 },
  { month: 4, total: 1500 },
  { month: 5, total: 900 },
  { month: 6, total: 300 },
  { month: 7, total: -200 },
  { month: 8, total: -100 },
  { month: 9, total: 150 },
  { month: 10, total: 180 },
  { month: 11, total: -100 },
  { month: 12, total: 700 },
];
let sum = 0;
for (let i in revenue) {
  sum += revenue[i].total;
}
console.log(sum);

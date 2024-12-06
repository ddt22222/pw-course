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

function BMI() {
  const BMI = weight / (height * height);
  console.log(BMI);

  if (BMI < 18.5) {
    console.log("Thieu can");
    return;
  }

  if (18.5 < BMI < 25) {
    console.log("Binh thuong");
    return;
  }
  if (25 < BMI < 30) {
    console.log("Thua can");
    return;
  }
  if (BMI >= 30) {
    console.log("Beo phi");
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
  const celsiusToFahrenheit = (celsius * 9) / 5 + 32;
  const fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`Độ F là :${celsiusToFahrenheit}`);
  console.log(`Độ C là :${fahrenheitToCelsius}`);
}
celciusToFahrenheit();

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.

const array = [2, 3, 5, 6, 1, 2, -2, 3];
function SumArray() {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  return console.log(`Tổng là ${sum}`);
}
SumArray();

// //4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

const array2 = [2, 9, 3, 4, 1993, 2, 1, 19, 11, 13, 1997, 0, 1];

function isPrime() {
  let prime = {};
  for (let i of array2) {
    if (i <= 1) {
      continue;
    }
    let isPrimeNumber = true;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      prime[i] = "so nguyen to";
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

let userInfo = [
  {
    name: "Duc",
    email: "Duc@gmail.com",
  },
  {
    name: "Nga",
    email: "nga@gmail.com",
  },
  {
    name: "Trong",
    email: "Trong@gmail.com",
  },
  {
    name: "Viet",
    email: "Viet@gmail.com",
  },
];

function replaceEmail(name, newEmail) {
  for (let i in userInfo) {
    if (name === userInfo[i].name) {
      userInfo[i].email = newEmail;
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
    name: "alex",
    score: 85,
  },
  {
    name: "david",
    score: 79,
  },
  {
    name: "tom",
    score: 92,
  },
  {
    name: "My",
    score: 27,
  },
  {
    name: "thomas",
    score: 54,
  },
];

function scoreAvg() {
  sumScore = 0;
  for (let i in studentScore) {
    sumScore += studentScore[i].score;
  }
  return sumScore / studentScore.length;
}
const scoreA = scoreAvg();
console.log(scoreA);

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }

let productCart = [
  { name: "product 1", price: -100 },
  { name: "product 2", price: 200 },
  { name: "product 3", price: 300 },
  { name: "product 4", price: 400 },
  { name: "product 5", price: 500 },
];

function checkPrice() {
  for (let i in productCart) {
    if (productCart[i].price < 0) {
      return console.log("Có sản phẩm giá nhỏ hơn 0");
    }
  }
  console.log("Tất cả sản phẩm có giá đều lớn hơn 0");
}
checkPrice();

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.

const AM = 9;
const PM = 21;

function checkOpen(now) {
  if (now >= AM && now < PM) {
    console.log("Cửa hàng vẫn còn mở ");
  } else console.log("Cửa hàng đang đóng ");
}
checkOpen(20);

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.

function ticketInfo(age) {
  if (age <= 5) {
    console.log("Miễn phí");
    return;
  }
  if (age >= 18) {
    console.log("Giá vé là 100k");
    return;
  }
  if (age >= 6 && age < 18) {
    console.log("Giá vé là 50k");
    return;
  }
}
ticketInfo(19);

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
// switch...case để xử lý.

function toMonth(month) {
  switch (month) {
    case (month = 1):
      console.log("January");
      break;
    case (month = 2):
      console.log("Feburary");
      break;
    case (month = 3):
      console.log("March");
      break;
    case (month = 4):
      console.log("April");
      break;
    case (month = 5):
      console.log("May");
      break;
    case (month = 6):
      console.log("June");
      break;
    case (month = 7):
      console.log("July");
      break;
    case (month = 8):
      console.log("August");
      break;
    case (month = 9):
      console.log("September");
      break;
    case (month = 10):
      console.log("October");
      break;
    case (month = 11):
      console.log("November");
      break;
    case (month = 12):
      console.log("December");
      break;
  }
}
toMonth(2);

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
//     6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).

function toClassify(score) {
  if (score >= 8) {
    console.log("Giỏi");
  } else if (score >= 6.5 && score < 8) {
    console.log("Khá");
  } else if (score >= 5 && score < 6.5) {
    console.log("Trung Bình");
  } else if (score < 5) {
    console.log("Yếu");
  }
}
toClassify(5);

// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
// (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)

function degreeInfo(degree) {
  if (degree >= 30) {
    console.log("Nóng");
  } else if (degree >= 20 && degree < 30) {
    console.log("Mát");
  } else if (degree < 20) {
    console.log("Lạnh");
  }
}
degreeInfo(29);

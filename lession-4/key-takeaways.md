## Phạm vi của biến
Biến Global: biến có giá trị sử dụng tại tất cả vị trí trong code.
Cách khai báo: 
var <biến>;

Biến trong scope{}: biến có giá trị sử dụng trong 1 function, 1 vòng lặp, hoặc 1 câu điều kiện, khi ra khỏi sẽ không có giá trị sử dụng

## Câu điều kiện
If- else : 
if- else if -else

Cách khai báo:
if(condition){
    coding                // chạy đoạn code này nếu condition=true
}
else if(condition2){
    coding2              // chạy đoạn code này nếu condition2=true và condition =false
}
else{
    coding3                      // chạy đoạn code này nếu condition2=false và condition =false
}


## switch case / default
Tương đối giống với if tuy nhiên switch case dễ dàng cho ta chia nhánh các trường hợp chỉ xét riêng giá trị. Ví dụ tháng 1 -> january, tháng 2 ->feburary . Các case phức tạp như > < hoặc nhiều điều kiện kết hợp không dùng switch case.

Cách khai báo

switch (biến){
    case = 1: 
        console.log("Đây là số một");
    case =2: 
        console.log("Đây là số hai");
    default: 
         console.log("Đây là trường hợp còn lại");
}


## Toán tử so sánh == , === , !==

so sánh == : chỉ xét về giá trị 
    ví dụ const number= "5"== 5;
    console.log(number); ->>> true

so sánh === : xét về giá trị + kiểu dữ liệu
    ví dụ const number= "5"=== 5;
    console.log(number); ->>> false       

so sánh !== : hiểu là khác nhau
    ví dụ const number= "5" !== 5;
    console.log(number); ->>> true      

## forEach 
giúp ta lấy ra được các giá trị của 1 mảng 1 cách đơn giản
ví dụ:
```
 Cách 1:
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
}); 
```
```
Cách 2: 
viết dưới dạng arrow function
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(number=>{
    console.log(number);
}); 
```
## for ... in 
giúp ta lấy ra được các giá trị của 1 object hoặc 1 mảng 


## for ... of

giúp ta lấy ra được các giá trị của  1 mảng hoặc 1 chuỗi 
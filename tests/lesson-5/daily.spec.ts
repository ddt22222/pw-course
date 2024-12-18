// Yêu cầu:
// Tên hàm: decodeVault
// Tham số:
// numbers: number[] – Một mảng các số nguyên dương
// Kết quả:
// Trả về một mảng các số đã được giải mã (số ban đầu + số đảo ngược của nó)


// Quy tắc:
// Các số đầu vào là số nguyên dương
// Với mỗi số, tính tổng của nó với số đảo ngược của nó
// Số đảo ngược bỏ qua các số 0 ở đầu (ví dụ: 100 đảo ngược thành 1)
// Các số đầu vào có thể có độ dài khác nhau

// function decodeVault(numbers: number[]): number[]{
//     let result: number[]= [];
//     let sumResult: number[]=[];
//     for (let number of numbers){
//         const numToString = Number(number.toString().split("").reverse().join(""));
//         result.push(numToString);
//         sumResult.forEach(sumNumber=> sumNumber = number+result[numToString])
//     }
//     return sumResult;
// }
// console.log(decodeVault([12345]));

function decodeVault(numbers: number[]): number[] {
    let sumResult: number[] = [];
    
    for (let number of numbers) {
        const reversedNumber = Number(number.toString().split("").reverse().join("")); // Đảo ngược số
        const sum = number + reversedNumber; // Tính tổng
        sumResult.push(sum); // Thêm vào mảng kết quả
    }
    
    return sumResult;
}

// Ví dụ
console.log(decodeVault([12345, 678, 910])); 


// Julius Caesar đã sử dụng một phương pháp mã hóa đơn giản để gửi các thông điệp bí mật. Phương pháp này dịch chuyển mỗi chữ cái trong bảng chữ cái một số vị trí nhất định. Ví dụ, với độ dịch là 3:

// 'A' -> 'D'
// 'B' -> 'E'
// 'Z' -> 'C'
// Yêu cầu:
// Tên hàm: caesarCipher
// Tham số:
// messages: string[] - Mảng các thông điệp cần mã hóa
// shift: number - Số vị trí cần dịch chuyển (1-25)
// Kết quả:
// Trả về mảng các thông điệp đã được mã hóa
// Quy tắc:
// Chỉ mã hóa chữ cái (a-z, A-Z)
// Giữ nguyên chữ hoa/thường
// Các ký tự khác (số, dấu câu, khoảng trắng) giữ nguyên
// Nếu shift là số âm, dịch chuyển về bên trái
// Nếu shift > 25, lấy phần dư khi chia cho 26

// const alphabetArray =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// function caesarCipher(message: string[], shift: number){
//     const newArray: string[] = [];
//     /// Lấy ra string trong mảng đã cho
//     for (let content of message){
//         for(let i of content){
//             if(alphabetArray.includes(i)){
//                 i = alphabetArray[alphabetArray[i]+shift]
//             }   /// Lặp mỗi chữ cái trong mảng string và tìm nó trong mảng đã cho, tiếp dó cộng với tham số shift vả trả về biến đã truyền
            
//         }
//     }
 
//     /// Trả về ký tự lấy được vào mảng mới ( join lại) 
// }

const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Chuyển mảng alphabetArray thành cả chữ hoa và chữ thường
const alphabetLowerCase = alphabetArray.map(letter => letter.toLowerCase())

function caesarCipher(message: string[], shift: number) {
    const newArray: string[] = [];
    
    for (let content of message) {
        let transformedContent = "";
        
        for (let i of content) {
            if (alphabetArray.includes(i.toUpperCase())) {
                // Kiểm tra với chữ hoa
                let newIndex = (alphabetArray.indexOf(i.toUpperCase()) + shift) % 26;
                transformedContent += alphabetArray[newIndex];
            } else if (alphabetLowerCase.includes(i.toLowerCase())) {
                // Kiểm tra với chữ thường
                let newIndex = (alphabetLowerCase.indexOf(i.toLowerCase()) + shift) % 26;
                transformedContent += alphabetLowerCase[newIndex];
            } else {
                // Giữ nguyên các ký tự không phải chữ cái
                transformedContent += i;
            }
        }
        
        newArray.push(transformedContent);
    }

    return newArray;
}

// Ví dụ chạy thử
console.log(caesarCipher(["egghee", "zxcsggG"], 3)); // Output: ["KHhh", "CUjjJ"]
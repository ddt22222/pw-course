// // // 1. Check Array Input

// // // Write a JavaScript function to check whether an `input` is an array or not.
// // // Test Data :
// // // console.log(is_array('w3resource'));
// // // console.log(is_array([1, 2, 4, 0]));
// // // false
// // // true

// // function is_array(check) {
// //     if (Array.isArray(check)) {
// //         return "true";
// //     } else {
// //         return "false";
// //     }
// // }

// // console.log(is_array('w3resource')); // Kết quả: "false"
// // console.log(is_array([1, 2, 4, 0])); // Kết quả: "true"

// // // 2. Clone Array

// // // Write a JavaScript function to clone an array.
// // // Test Data :
// // // console.log(array_Clone([1, 2, 4, 0]));
// // // console.log(array_Clone([1, 2, [4, 0]]));
// // // [1, 2, 4, 0]
// // // [1, 2, [4, 0]]

// // function array_Clone(array){
// //     let newArray = [];
// //     array.forEach(element => {
// //         newArray.push(element);
// //     });
// //     return newArray;
// // }

// // console.log(array_Clone([1, 2, 4, 0]));
// // console.log(array_Clone([1, 2, [4, 0]]));

// // // 3. First Elements of Array

// // // Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// // // Test Data :
// // // console.log(first([7, 9, 0, -2]));
// // // console.log(first([],3));
// // // console.log(first([7, 9, 0, -2],3));
// // // console.log(first([7, 9, 0, -2],6));
// // // console.log(first([7, 9, 0, -2],-3));
// // // Expected Output :
// // // 7
// // // []
// // // [7, 9, 0]
// // // [7, 9, 0, -2]
// // // []

// // function first(array2, number) {
// //     // Nếu không truyền số lượng hoặc số lượng là 0, trả về mảng rỗng
// //     if (number === undefined || number < 0) {
// //         return [];
// //     }
// //     // Dùng slice để lấy `number` phần tử đầu tiên
// //     return array2.slice(0, number);
// // }

// // console.log(first([7, 9, 0, -2]));
// // console.log(first([],3));
// // console.log(first([7, 9, 0, -2],3));
// // console.log(first([7, 9, 0, -2],6));
// // console.log(first([7, 9, 0, -2],-3));


// // // 4. Last Elements of Array

// // // Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// // // Test Data :
// // // console.log(last([7, 9, 0, -2]));
// // // console.log(last([7, 9, 0, -2],3));
// // // console.log(last([7, 9, 0, -2],6));
// // // Expected Output :
// // // -2
// // // [9, 0, -2]
// // // [7, 9, 0, -2]

// // function last(array3,number){
// //     if(number == undefined || number == null || number <= 0){
// //         return [];
// //     }
// //     return array3.slice(-number);
// // }

// // console.log(last([7, 9, 0, -2],3));

// // // 5. Join Array Elements

// // // Write a simple JavaScript program to join all elements of the following array into a string. JavaScript software solutions
// // // Sample array : myColor = ["Red", "Green", "White", "Black"];
// // // Expected Output :
// // // "Red,Green,White,Black"
// // // "Red,Green,White,Black"
// // // "Red+Green+White+Black"

// // let myColor = ["Red", "Green", "White", "Black"];

// // let string2 = myColor.toString();

// // console.log(string2);

// // let string3 = myColor.join('+');

// // console.log(string3);

// // // 7. Sort Array

// // // Write a JavaScript program to sort the items of an array.
// // // Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // // Sample Output : -4,-3,1,2,3,5,6,7,8

// // let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // let newArr1 = [];

// // while (arr1.length > 0) {
// //     // Giả định phần tử đầu tiên là nhỏ nhất
// //     let min = arr1[0];
// //     let minIndex = 0;

// //     // Duyệt qua mảng để tìm phần tử nhỏ nhất
// //     for (let i = 1; i < arr1.length; i++) {
// //         if (arr1[i] < min) {
// //             min = arr1[i];
// //             minIndex = i;
// //         }
// //     }

// //     // Đưa phần tử nhỏ nhất vào mảng mới
// //     newArr1.push(min);

// //     // Loại bỏ phần tử nhỏ nhất khỏi mảng gốc
// //     arr1.splice(minIndex, 1);
// // }

// // console.log(newArr1);


// // // Cach 2 
// // // let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// // // // Sử dụng phương pháp sort có sẵn để sắp xếp mảng tăng dần
// // // let newArr1 = arr1.slice().sort((a, b) => a - b);

// // // console.log(newArr1);





// // // 8. Most Frequent Array Item

// // // JavaScript software solutions
// // // Write a JavaScript program to find the most frequent item in an array.
// // // Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// // // Sample Output : a ( 5 times )


// // let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// // let countArray2 = {};

// // arr2.forEach( element =>{
// //     countArray2[element] = ((countArray2[element])||0) + 1;
// // })

// // let countMax = 0;
// // let countKey;

// // for (let count in countArray2 ){
// //     if (countArray2[count] > countMax){
// //         countMax = countArray2[count] ;
// //         countKey = count;
// //     }
// // }
// // console.log(`Giá trị xuất hiện nhiều nhất là ${countKey}, số lần xuất hiện là ${countMax}`);


// // // 9. Swap Case in String

// // // Write a JavaScript program that accepts a
// // //  string as input and swaps the case of each character. 
// // //  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// // let str1 = "The Quick Brown Fox";
// // let newStr1 = "";

// // for (let i of str1){
// //     // if (i == null || i == " "){
// //     //     continue;
// //     // }

// //     if(i === i.toUpperCase()){
// //         i = i.toLowerCase();
// //         newStr1 += i;
// //     }
// //     else if (i === i.toLowerCase()){
// //         i = i.toUpperCase();
// //         newStr1 += i;
// //     }
// // }
// // console.log(newStr1)


// // // 10. Print Nested Array Elements

// // // Write a JavaScript program that prints the elements of the following array.
// // // Note : Use nested for loops.
// // // Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// // // Sample Output :
// // // "row 0"
// // // " 1"
// // // " 2"
// // // " 1"
// // // " 24"
// // // "row 1"


// // let array2 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// // console.log(array2[0]);

// // for (let i = 0; i < array2.length; i++) {
// //     console.log(i, array2[i]);
// // }

// // // Declare and initialize a sample 2-D array
// // var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// // // Iterate through each row in the 2-D array
// // for (var i in a) {
// //    // Output the current row index
// //    console.log("row " + i);
   
// //    // Iterate through each element in the current row
// //    for (var j in a[i]) {
// //       // Output the current element value
// //       console.log(" " + a[i][j]);
// //    }
// // }

// // 11. Sum of Squares in Array

// // Write a JavaScript program to find the sum of squares of a numerical vector.

// // Function to calculate the sum of squares of elements in an array
// function sum_sq(array) {
//     var sum = 0, // Initialize a variable to store the sum of squares
//         i = array.length; // Initialize a variable with the length of the array
  
//     // Iterate through the array in reverse order
//     while (i--)
//       // Add the square of the current element to the sum
//       sum += Math.pow(array[i], 2);
  
//     // Return the calculated sum of squares
//     return sum;
//   }
  
//   // Output the result of the function with a sample array
//   console.log(sum_sq([0, 1, 2, 3, 4]));


// //   12. Sum and Product of Array

// // >
// // Write a JavaScript program to compute the sum and product of an array of integers.

// function sumAndProduct(arr){
//     let sum = 0;
//     let product = 1;
//     for (let i of arr){
//         sum += i;
//         product *=i;
//     }
//     console.log(sum);
//     console.log(product);
// }

// sumAndProduct([1,2,3,4,5]);

// // 14. Remove Duplicates

// // Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// // Cach 1

// let array3= ["a",1,2,4,5,1,2,"b",9,2,"c","a"];

// let fixArray3 = [...new Set(array3)];


// //Cach 2

// let array4 = ["a",1,2,4,5,1,2,"b",9,2,"c","a"];
// let newArray4 =[];

// for (let i of array4){
//     let isDuplicate = false;
//     for(let j of newArray4){
//         if(i === j ){
//         isDuplicate = true;
//         break;
//     }
// }
//     if(!isDuplicate){
//         newArray4.push(i);
//     }
// }
// console.log(newArray4);



// // 15. Display Colors with Ordinals

// // We have the following arrays :
// // color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// // o = ["th","st","nd","rd"]
// // Write a JavaScript program to display the colors in the following way :
// // "1st choice is Blue ."
// // "2nd choice is Green."
// // "3rd choice is Red."

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th","st","nd","rd"];


// for (let i = 0; i < color.length; i++) {
//     let rank = i + 1; // Thứ hạng (1st, 2nd, 3rd, ...)
//     let suffix = "th"; // Hậu tố mặc định

//     // Xác định hậu tố đúng
//     if (rank === 1) suffix = "st";
//     else if (rank === 2) suffix = "nd";
//     else if (rank === 3) suffix = "rd";
//     else suffix ="th";

//     // In kết quả
//     console.log(`${rank}${suffix} choice is ${color[i]}.`);
// }


// // 16. Find Leap Years in Range

// // Write a JavaScript program to find the leap years in a given range of years.

// function leapYear(startYear, endYear){
//     let leapYearArr=[];
//     for (let i = startYear; i <= endYear; i++){
//         if( i % 4 !=0 || (i % 100 == 0 && i % 400 !=0)){
//             continue;
//         }
//         else if( i % 4 == 0){
//             leapYearArr.push(i);
//         }
//     }
//     console.log(leapYearArr);
// }
// leapYear(1700,2100);


// // 17. Shuffle Array

// // Write a JavaScript program to shuffle an array.

// let array5 = [1,2,3,4,5];

// function suffer(arr){
//     for(let i = 0; i <arr.length; i++){    
//     let randomIndex = Math.floor(Math.random()*(i+1));
//     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//     }
//     return arr;
// }
// console.log("Mảng ban đầu:", array5);
// console.log("Mảng sau khi xáo trộn:", suffer(array5));

// // 18. Binary Search

// // Write a JavaScript program to perform a binary search.
// // Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// // Sample array :
// // var items = [1, 2, 3, 4, 5, 7, 8, 9];
// // Expected Output :
// // console.log(binary_Search(items, 1)); //0
// // console.log(binary_Search(items, 5)); //4

// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (array[mid] === target) {
//             return mid; // Tìm thấy phần tử
//         } else if (array[mid] < target) {
//             left = mid + 1; // Tìm ở nửa phải
//         } else {
//             right = mid - 1; // Tìm ở nửa trái
//         }
//     }

//     return -1; // Không tìm thấy
// }

// // Ví dụ
// let array6 = [1, 3, 5, 7, 9, 11, 13];
// console.log(binarySearch(array6, 7)); // Kết quả: 3.



// // 19. Sum of Arrays by Index

// // There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// // Sample array :
// // array1 = [1,0,2,3,4];
// // array2 = [3,5,6,7,8,13]; 
// // Expected Output :
// // [4, 5, 8, 10, 12, 13]

// let array7 = [1,0,2,3,4];
// let array8 = [3,5,6,7,8,13]; 

// // let sumArray =[];

// let maxIndex = Math.max(array7.length,array8.length);

// let extendedArray1 = Array.from({length: maxIndex},(_,i)=> array7[i]||0);
// let extendedArray2 = Array.from({length: maxIndex},(_,i)=> array8[i]||0);

// const result = extendedArray1.map((value,index)=> value + extendedArray2[index]);

// console.log(result);

// // 21. Flatten Nested Array

// // Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// // Sample Data :
// // console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// // [1, 2, 3, 4, 5, 6]
// // console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// // [1, 2, 3, [[4]], 5, 6]
// // Click me to see the solution


// let array9 = [1, [2], [3, [[4]]], [5, 6]];
// let convertArray9 = [];
// function flatten(arrayX){
// for (let i of arrayX) {
//     if (typeof i === 'object') {
//         // Flatten object (array) and convert all inner elements to numbers
//         let flattened = i.flat().map(Number); // Flatten array and convert each element to a number
//         convertArray9.push(...flattened); // Spread and add to result array
//     } else {
//         convertArray9.push(Number(i)); // Convert single value to number
//     }
// }
// }

// console.log(flatten(array9));

// // 22. Union of Two Arrays

// // Write a JavaScript program to compute the union of two arrays.
// // Sample Data :
// // console.log(union([1, 2, 3], [100, 2, 1, 10]));
// // [1, 2, 3, 10, 100]

// let array10 = [1, 2, 3];
// let array11 = [100, 2, 1, 10];
// let union = [];

// for (let i of array10){
//     union.push(i);
// }
// for (let i of array11){
//     let isDuplicate = false;
//     for (let j=0 ; j < union.length; j++){
//         if(i === union[j]){
//             isDuplicate=true;
//             break;
//         }
//     }
//     if(!isDuplicate){
//         union.push(i);
//     }
// }
// console.log(union);


// // 23. Difference Between Arrays

// // Write a JavaScript function to find the difference between two arrays.
// // Test Data :
// // console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // ["3", "10", "100"]
// // console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// // ["6"]

// let array12 = [1, 2, 3];
// let array13 = [100, 2, 1, 10];
// let sumArray =[...array12,...array13];

// const difference = sumArray.filter((value) => 
//     sumArray.indexOf(value) === sumArray.lastIndexOf(value)
// )

// console.log(difference);


// // 24. Remove Falsy Values

// // Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// // Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// // Expected result : [15, -22, 47]

// // let falseArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// // let trueArray =[];

// // for (let i of falseArray){
// //     if(typeof i ==='number'){
// //         trueArray.push(i);
// //     }
// // }
// // console.log(trueArray);

// let falseArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// let trueArray = falseArray.filter(value => typeof value === 'number' && value !== 0 && !isNaN(value));

// console.log(trueArray);

// // 25. Sort Objects by Title

// // Write a JavaScript function to sort the following array of objects by title value.
// // Sample object :

// let library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];

//    library.sort((a, b) => {
//     return a.title.localeCompare(b.title);
//  });
 
//  console.log(library);

// //  26. Find Pair with Target Sum

// // Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// // Input: numbers= [10,20,10,40,50,60,70], target=50

// // <<<<<<< HEAD

// // =======
// // function findNumber(array,target){
// //     for(let i of array){
// //         for (let j=0; j < array.length;j++){
// //             if(i === array[j]){
// //                 continue;
// //             }
// //         }
// //     }
// // }
// // >>>>>>> e9c989fda776e85a449d6e4da54626182dc9b389


// // 29. Fill Array with Values

// // Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// // Test Data :
// // console.log(num_string_range('a', "z", 2));
// // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
// const lowercaseAlphabet = alphabet.map(value => value.toLowerCase());

// function fillArray(start,end){
//     let resultArray =[];
//     if(start <= end && !isNaN(start) && !isNaN(end)){
//         for(let i= start ; i <= end; i++){
//             resultArray.push(i);
//         }
//         return resultArray;
//     }
//     else if (start > end && !isNaN(start) && !isNaN(end)){
//         for(let i = start ; i >= end; i--){
//             resultArray.push(i);
//         }
//         return resultArray;
//     }
//     else if (alphabet.includes(start) && alphabet.includes(end)){
//         const indexStart = alphabet.indexOf(start);
//         const indexEnd = alphabet.indexOf(end);

//           if (indexStart <= indexEnd) {
//             for (let i = indexStart; i <= indexEnd; i++) {
//                 resultArray.push(alphabet[i]);
//             }
//         } else {
//             for (let i = indexStart; i >= indexEnd; i--) {
//                 resultArray.push(alphabet[i]);
//             }
//         }
//         return resultArray;
//     }
//     else if (lowercaseAlphabet.includes(start) && lowercaseAlphabet.includes(end)){
//         const indexStart = lowercaseAlphabet.indexOf(start);
//         const indexEnd = lowercaseAlphabet.indexOf(end);

//           if (indexStart <= indexEnd) {
//             for (let i = indexStart; i <= indexEnd; i++) {
//                 resultArray.push(lowercaseAlphabet[i]);
//             }
//         } else {
//             for (let i = indexStart; i >= indexEnd; i--) {
//                 resultArray.push(lowercaseAlphabet[i]);
//             }
//         }
//         return resultArray;
//     }
        
// }
// console.log(fillArray(1,100));


// 30. Merge Arrays Without Duplicates

// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

// const array1 = [1, 2, 3];
// const array2 = [2, 30, 1];

// function merge_array(array1,array2){
//     return [...new Set([...array1,...array2])]
// }
// console.log(merge_array(array1,array2));

// 31. Remove Specific Element

// Write a JavaScript function to remove a specific element from an array.

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

// function remove_array_element(array, rmNumber){
//     newArr=[];
//     if(!array.includes(rmNumber)){
//         console.log("Không có gì thay đổi");
//         return array;
//     }
//     else if (array.includes(rmNumber)){
//         newArr = array.filter(x => x !== rmNumber);
//         return newArr;
//     }
// }

// console.log(remove_array_element([2, 5, 9, 6], 7));

// 32. Find Element in Array

// Write a JavaScript function to find an array containing a specific element.

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]

// arr = [2, 5, 9, 6];

// function checkContain(arr,number){
//     if(arr.includes(number)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkContain(arr, 4));

// 34. Nth Largest Element

// Write a JavaScript function to get the nth largest element from an unsorted array.

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

// Sort lại mảng trước theo giá trị giảm dần, tìm giá trị tương ứng với n

// function nthlargest(arrX,ordinalNum){
//     const sortedArr = arrX.sort((a,b) => b-a);
//     const target = sortedArr[ordinalNum-1];
//     return target;
// }

// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

// 35. Random Array Item

// Write a JavaScript function to get random items from an array.


// function randomItem(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }

// // Thử nghiệm chọn ngẫu nhiên nhiều lần
// const arr = [43, 56, 23, 89, 88, 90, 99, 652];
// const counts = { 43: 0, 56: 0, 23: 0, 89: 0, 88: 0, 90: 0, 99: 0, 652: 0 };

// // Chạy thử 1000 lần
// for (let i = 0; i < 1000000; i++) {
//     const selectedItem = randomItem(arr);
//     counts[selectedItem]++;
// }

// console.log(counts);


// 36. Pre-filled Numeric Array

// Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]


// function array_filled(arrRange,arrNum){
//     let newArr=[];
//     for(let i=0 ; i < arrRange; i++){
//         newArr.push(arrNum);
//     }
//     return newArr;
// }
// console.log(array_filled(9,2));

// 37. Pre-filled String Array

// Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

// Test Data :
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]

// function array_filled2(arrRange,value){
//     return Array(arrRange).fill(value);
// }
// console.log(array_filled2(9,'hello'));

// 38. Move Array Element

// Write a JavaScript function to move an array element from one position to another.

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

// function move(arr, index, shiftedIndex) {
//     // Xử lý chỉ số âm
//     if (index < 0) index = arr.length + index;  // Chuyển chỉ số âm thành chỉ số dương
//     if (shiftedIndex < 0) shiftedIndex = arr.length + shiftedIndex; // Tương tự cho shiftedIndex
    
//     // Hoán đổi các phần tử
//     let temp = arr[index];
//     arr[index] = arr[shiftedIndex];
//     arr[shiftedIndex] = temp;
    
//     return arr;
// }
// console.log(move([10, 20, 30, 40, 50], -1, -2));

// 39. Filter Array Values

// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

// function filter_array_values(arr){
//     let newArr =[];
//     for (let i of arr){
//         if( i!==0 & i != null & i != ''){
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

// 41. Array Between Two Integers

// Write a JavaScript function to generate an array between two integers of 1 step length.

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// function rangeBetween(start,end){
//     let newArr=[]
//     for(i =start; i<=end;i ++){
//         newArr.push(i);
//     }
//     return newArr;
// }
// console.log(rangeBetween(-4,7));

// //Cach 2
// function rangeBetween(start, end) {
//     return Array.from({ length: end - start + 1 }, (_, index) => start + index);
// }

// console.log(rangeBetween(-4, 7)); // Kết quả: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// 42. Unique Elements from Two Arrays

// Write a JavaScript function to find unique elements in two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

// function difference(array1,array2){
//     let uniqueArray1 = array1.filter(x=> !array2.includes(x));
//     let uniqueArray2 = array2.filter(x=> !array1.includes(x));

//     return [...uniqueArray1,...uniqueArray2];
// }
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// 43. Unzip Arrays

// Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

// Test Data :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
// [["a","b"],[1,2],[true,false]]
// [["a","b"],[1,2],[true]]

//Cach 1
// function unzip(array1, array2) {
//     let arrayString = [];
//     let arrayNumber = [];
//     let arrayBool = [];

//     // Duyệt qua cả hai mảng array1 và array2
//     for (let i = 0; i < array1.length; i++) {
//         // Kiểm tra kiểu dữ liệu của phần tử trong array1
//         if (typeof array1[i] === 'string') {
//             arrayString.push(array1[i]);
//         } else if (typeof array1[i] === 'number') {
//             arrayNumber.push(array1[i]);
//         } else if (typeof array1[i] === 'boolean') {
//             arrayBool.push(array1[i]);
//         }
        
//         // Kiểm tra kiểu dữ liệu của phần tử trong array2
//         if (typeof array2[i] === 'string') {
//             arrayString.push(array2[i]);
//         } else if (typeof array2[i] === 'number') {
//             arrayNumber.push(array2[i]);
//         } else if (typeof array2[i] === 'boolean') {
//             arrayBool.push(array2[i]);
//         }
//     }

//     // Trả về kết quả
//     return [arrayString, arrayNumber, arrayBool];
// }

// // Sử dụng
// const array1 = ['a', 1, true];
// const array2 = ['b', 2, false];

// console.log(unzip(array1, array2));
// // Kết quả: [['a', 'b'], [1, 2], [true, false]]

//Cach 2

function unzip(array1,array2){
    combinedArray = array1.concat(array2);
    return [
        combinedArray.filter(string => typeof string === 'string'),
        combinedArray.filter(number => typeof number === 'number'),
        combinedArray.filter(boolean => typeof boolean === 'boolean')
    ]
}
const array1 = ['a', 1, true];
const array2 = ['b', 2, false];

console.log(unzip(array1, array2));
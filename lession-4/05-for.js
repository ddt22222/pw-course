// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
// = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10

let object ={
    name: "Alex",
    age: 10
}
for (let i in object){
    console.log(`${i} = ${object[i]}`);
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
// 30 (=10+20).

let student = {
    name: "alex",
    age: 10,
    salary: 20
}
let sum = 0;
for (let i in student){
    if(typeof student[i] === "number"){
        sum += student[i];
    }
}
console.log("Tổng các giá trị là số:", sum);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
// [“name”, “age”]

let student2 = {
    name: "alex",
    age: 10,
    salary: "30 trieu"
}
let arrStudent2 = [];
for(let i in student2){
    arrStudent2.push(i);
}
console.log(arrStudent2);
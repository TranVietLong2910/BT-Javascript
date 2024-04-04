//XỬ LÝ OBJECT

const person = {
    name: "John",
    age: 25,
    address: "123 Main St",
  };



//Truy cập thuộc tính của đối tượng
console.log(person.name); // Output: "John"
console.log(person.age); // Output: 25
console.log(person["address"]); // Output: "123 Main St"

//Thay đổi giá trị thuộc tính của đối tượng:
person.age = 30;
console.log(person.age); // Output: 30

//Thêm thuộc tính vào đối tượng
person.sex = "Male";
console.log(person); // Output: { name: "John", age: 25, address: "123 Main St", sex: "Male" }

//Xóa thuộc tính khỏi đối tượng
delete person.age;
console.log(person); // Output: { name: "John" , address: "123 Main St" }

//Duyệt qua các thuộc tính của đối tượng
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Output:
// name: John
// age: 25
// address: 123 Main St


//Kiểm tra tính tồn tại của thuộc tính trong đối tượng
console.log("name" in person); // Output: true
console.log("sex" in person); // Output: false

//Sao chép đối tượng
// Sao chép theo cách thủ công
const person2 = {
    name: person.name,
    age: person.age,
    address: person.address
};
console.log(person2); // Output: { name: "John", age: 25, address: "123 Main St" }

// Sử dụng toán tử spread (...)
const person3 = { ...person };
console.log(person3); // Output: { name: "John", age: 25, address: "123 Main St" }
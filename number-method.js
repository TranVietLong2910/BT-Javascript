//XỬ LÝ SỐ

const number1 = 5.5;
const number2 = 3;
const number3 = -9;
const stringNumber = "42";

//Phép toán cơ bản
const sum = number1 + number2;
console.log(sum); // Output: 8.5

const difference = number1 - number2;
console.log(difference); // Output: 2.5

const product = number1 * number2;
console.log(product); // Output: 16.5

const quotient = number1 / number2;
console.log(quotient); // Output: 1.8333333333333333


//Làm tròn số
const roundedNumber = Math.round(number1);
console.log(roundedNumber); // Output: 6

const ceilNumber = Math.ceil(number1);
console.log(ceilNumber); // Output: 6

const floorNumber = Math.floor(number1);
console.log(floorNumber); // Output: 5

//Chuyển đổi số thành chuỗi
const converNumber = number1.toString();
console.log(converNumber); // Output: "5.5"

//Kiểm tra tính chẵn lẻ
console.log(number2 % 2 === 0); // Output: false (số lẻ)
console.log(number2 % 2 === 1); // Output: true (số lẻ)

//Kiểm tra số âm, dương, hoặc bằng 0
console.log(Math.sign(number3)); // Output: -1 (số âm)
console.log(number3 > 0); // Output: false (không phải số dương)
console.log(number3 < 0); // Output: true (là số âm)
console.log(number3 === 0); // Output: false (không bằng 0)

//
const parsedNumber = parseInt(stringNumber);
console.log(parsedNumber); // Output: 42
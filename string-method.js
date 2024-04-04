// XỬ LÝ CHUỖI

const str = "Hi, Peter!";
const str2 = "How old are you?";

//Lấy độ dài của chuỗi
const length = str.length;
console.log(length); // Output: 10

//Truy cập các ký tự trong chuỗi
const firstChar = str[0];
console.log(firstChar); // Output: "H"

const lastChar = str[str.length - 1];
console.log(lastChar); // Output: "!"

//Tách chuỗi thành mảng các từ
const words = str.split(" ");
console.log(words); // Output:["Hi,", "Peter!"]


//Ghép các chuỗi lại với nhau
const combinedStr = str + str2;
console.log(combinedStr); // Output: "Hi, Peter!How old are you?"

//Tìm kiếm và thay thế một chuỗi con trong chuỗi gốc
const newStr = str.replace("Peter", "Marry");
console.log(newStr); // Output: "Hi, Marry"

//Chuyển đổi chuỗi thành chữ hoa hoặc chữ thường
const uppercaseStr = str.toUpperCase();
console.log(uppercaseStr); // Output: "HI, PETER!"

const lowercaseStr = str.toLowerCase();
console.log(lowercaseStr); // Output: "hi, peter!"

//Kiểm tra chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi con cụ thể hay không
console.log(str.startsWith("Hello")); // Output: false
console.log(str.startsWith("Hi")); // Output: true
console.log(str.endsWith("!")); // Output: true
console.log(str.startsWith("?")); // Output: false

//Trích xuất một phần của chuỗi
const extractedStr = str.slice(0, 7);
console.log(extractedStr); // Output: "Hi, Pet"

// XỬ LÝ 1 MẢNG
const array = [1, 2, 3, 4, 5];

//Lấy độ dài của mảng
const length = array.length;
console.log(length); // Output: 5

//Truy cập các phần tử trong mảng 
const firstElement = array[0];
console.log(firstElement); // Output: 1

const lastElement = array[array.length - 1];
console.log(lastElement); // Output: 5

//Duyệt qua mảng
array.forEach((element) => {
  console.log(element);
});

//Thêm phần tử
array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

//Xoá phần tử khỏi mảng
array.splice(2, 1); // Xóa phần tử thứ 3 (index 2)
console.log(array); // Output: [1, 2, 4, 5]

//Sắp xếp mảng
// Theo thứ tự tăng dần
array.sort();
console.log(array); // Output: [1, 2, 3, 4, 5]

//Theo chiều đảo ngược thứ tự
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]


//Tìm phần tử trong mảng
const index = array.indexOf(3);
console.log(index); // Output: 2

//Tạp một mảng mới từ mảng gốc
const newArray = array.map((element) => element * 2);
console.log(newArray); // Output: [2, 4, 6, 8, 10]

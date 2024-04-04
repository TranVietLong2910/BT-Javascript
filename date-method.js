//XỬ LÝ DATE

//Tạo đối tượng Date mới
const currentDate = new Date();
console.log(currentDate); // Output: Sun Apr 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

const specificDate = new Date("2024-04-01");
console.log(specificDate); // Output: Sat Apr 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

const dateWithMilliseconds = new Date(2024, 3, 1, 10, 30, 15, 500);
console.log(dateWithMilliseconds); // Output: Sat Apr 01 2024 10:30:15 GMT+0000 (Coordinated Universal Time)

//Truy cập các thành phần của đối tượng Date
console.log(currentDate.getFullYear()); // Output: 2024
console.log(currentDate.getMonth()); // Output: 3 (tháng bắt đầu từ 0, nên tháng 3 đại diện cho tháng 4)
console.log(currentDate.getDate()); // Output: 4
console.log(currentDate.getHours()); // Output: 0
console.log(currentDate.getMinutes()); // Output: 0
console.log(currentDate.getSeconds()); // Output: 0
console.log(currentDate.getMilliseconds()); // Output: 0

//Định dạng đối tượng Date thành chuỗi
console.log(currentDate.toString()); // Output: Sun Apr 04 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(currentDate.toISOString()); // Output: 2024-04-04T00:00:00.000Z
console.log(currentDate.toLocaleString()); // Output: 4/4/2024, 12:00:00 AM

//Cộng hoặc trừ thời gian từ đối tượng Date
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 7);
console.log(futureDate); // Output: Sun Apr 11 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

const pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 7);
console.log(pastDate); // Output: Sun Mar 28 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

//So sánh các đối tượng Date
const date1 = new Date("2024-04-01");
const date2 = new Date("2024-04-05");

console.log(date1 < date2); // Output: true
console.log(date1.getTime() < date2.getTime()); // Output: true
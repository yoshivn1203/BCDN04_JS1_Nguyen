/**
 * Khối 1:Input 1 số nguyên dương có 2 chữ số 
 * vd: 63
 * 
 * 
 * Khối 2:
 * B1: tạo biến 
 * number (chứa số có 2 chữ số )

 * B2: Lập công thức tính toán
 * number = 23
 * Số hàng chục = Math.floor(soDu/10); => 6
 * Số hàng đơn vị = soDu%10 => 3
 * 
 * Tổng = Số hàng chục + Số hàng đơn vị
 * B3: Thông báo kết quả
 *
 * Khối 3:Output
 * tổng của 2 chữ số
 * 63 => 6+3 = 9
 * 
 */

let number = 63;

console.log(`Tổng của 2 chữ số là: ${Math.floor(number / 10) + (number % 10)}`);

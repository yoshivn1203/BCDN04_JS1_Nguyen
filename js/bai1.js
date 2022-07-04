/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * luongNgay, soNgay
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến luongNgay, soNgay
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     tienLuong = luongNgay * soNgay
 * B4: Thông báo kết quả ở console.log
 *
 *Khối 3:Kết quả (Output)
 * tienLuong
 */

let luongNgay = 100000;
let soNgay = 30;

tienLuong = new Intl.NumberFormat('vn-VN').format(luongNgay * soNgay);
console.log(`Tiền Lương của nhân viên: ${tienLuong}`);

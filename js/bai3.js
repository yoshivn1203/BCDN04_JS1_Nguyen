/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * soTienUsd, tiGiaUsd
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến soTienUsd, tiGiaUsd
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     soTienVnd = soTienUsd * tiGiaUsd
 *     Format kết quả cho dễ nhìn
 * B4: Thông báo kết quả ở console.log
 *
 *Khối 3:Kết quả (Output)
 * soTienVnd
 */

let soTienUsd = 25;
let tiGiaUsd = 23500;

soTienVnd = new Intl.NumberFormat('vn-VN').format(soTienUsd * tiGiaUsd);
console.log(`Số tiền sau quy đổi VND: ${soTienVnd} VND`);

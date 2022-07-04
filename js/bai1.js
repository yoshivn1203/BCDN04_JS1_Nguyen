let luongNgay = 100000;
let soNgay = 30;

tienLuong = new Intl.NumberFormat('vn-VN').format(luongNgay * soNgay);
console.log(`Tiền Lương của nhân viên: ${tienLuong}`);

let soTienUsd = 25;
let tiGiaUsd = 23500;

soTienVnd = new Intl.NumberFormat('vn-VN').format(soTienUsd * tiGiaUsd);
console.log(`Số tiền sau quy đổi VND: ${soTienVnd} VND`);

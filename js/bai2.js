let daySo = [1, 2, 3, 4, 5];
tong = daySo.reduce((a, b) => a + b, 0);
trungBinh = tong / daySo.length;
console.log(`Giá trị trung bình của dãy số : ${trungBinh}`);

/**
 *Khối 1: Dãy số gồm 5 chữ số (Input)
 * daySo
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến daySo là array gồm 5 số
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     Trung Bình = Tổng của các số trong dãy số/ số lượng các số trong dãy số
 * B4: Thông báo kết quả ở console.log
 *
 *Khối 3:Kết quả (Output)
 * trungBinh
 */

let daySo = [1, 2, 3, 4, 5];
tong = daySo.reduce((a, b) => a + b, 0);
trungBinh = tong / daySo.length;
console.log(`Giá trị trung bình của dãy số : ${trungBinh}`);

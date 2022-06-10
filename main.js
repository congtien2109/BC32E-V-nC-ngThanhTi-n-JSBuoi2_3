
// BAI TAP 1

document.getElementById('btnTinhLuong').onclick = function(){
    // input: luong1Ngay => number, soNgayLam => number
    var luong1Ngay = document.getElementById('luong1Ngay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    // output: ketQua => number
    var luong = ''
    //xu ly
    luong = luong1Ngay * soNgayLam;
    // in ket qua ra man hinh
    document.getElementById('luong').innerHTML = luong;
}
 
 // BAI TAP 2
 
 document.getElementById('btnTinhTrungBinh').onclick = function(){
     // input: soThu1 => number, soThu2 => number, soThu3 => number, soThu4 => number, soThu5 => number
     var soThu1 = Number(document.getElementById('soThu1').value);
     var soThu2 =Number(document.getElementById('soThu2').value);
     var soThu3 = Number(document.getElementById('soThu3').value);
     var soThu4 = Number(document.getElementById('soThu4').value);
     var soThu5 = Number(document.getElementById('soThu5').value);
    //output: ketqua => number
    var ketQua = '';
    //xu ly
    ketQua = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    //in ket qua ra man hinh
    document.getElementById('tinhTrungBinh').innerHTML = ketQua;
 }
 
 // BAI TAP 3
 
 document.getElementById('btnQuyDoi').onclick = function(){
     // input: soTienUsd => number, motUsd => 23500
 var soTienUsd = document.getElementById('soTienUsd').value;
 var motUsd = 23500;
 // output: ketQua => number
 var ketQua = ''
 //xu ly
 ketQua = soTienUsd * motUsd;
 // in ket qua ra man hinh
 document.getElementById('quyDoi').innerHTML = ketQua;
 }
 
 // BAI TAP 4
 
 document.getElementById('btnTinh').onclick = function(){
     // input: chieuDai => number, chieuRong => number
     var chieuDai = Number(document.getElementById('chieuDai').value);
     var chieuRong = Number(document.getElementById('chieuRong').value);
     // output: dienTich => number, chuVi => number
     var dienTich = '';
     var chuVi = '';
     // xu ly
     dienTich = chieuDai * chieuRong;
     chuVi = (chieuDai + chieuRong) * 2;
     // in ket qua ra man hinh
     document.getElementById('tinh').innerHTML= "Dien tich: " + dienTich + "; Chu vi: " + chuVi;
 }
 
 // BAI TAP 5
 
document.getElementById('btnTinhTong').onclick = function(){
    //input: so2ChuSo => number
    var so2ChuSo = Number(document.getElementById('so2ChuSo').value); 
    //output: tinhTong => number
    tinhTong = '';

    //xu ly
    hangChuc = Math.floor(so2ChuSo / 10);
    hangDonVi = Math.floor(so2ChuSo % 10);
    //in ket qua ra man hinh
    document.getElementById('tinhTong').innerHTML = hangChuc + hangDonVi;
}
 
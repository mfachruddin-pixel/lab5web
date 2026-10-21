// NAMA : MUHAMMAD FACHRUDDIN
// NIM  : 312510103

// ==========================================
// Latihan 1: Menampilkan output
// ==========================================
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// ==========================================
// Latihan 2: Alert dan prompt
// ==========================================
const namaPengguna = prompt("Latihan 2: Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

// ==========================================
// Latihan 3 & Eksperimen 1: Operasi aritmetika dari prompt
// ==========================================
function operasiDasar(a, b) {
    console.log("--- Hasil Operasi Dasar (" + a + " dan " + b + ") ---");
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

const inputAngka1 = prompt("Eksperimen 1: Masukkan angka pertama untuk hitungan:");
const inputAngka2 = prompt("Eksperimen 1: Masukkan angka kedua untuk hitungan:");
if (inputAngka1 !== null && inputAngka2 !== null) {
    operasiDasar(Number(inputAngka1), Number(inputAngka2));
}

// ==========================================
// Latihan 4: Seleksi kondisi if-else
// ==========================================
const inputNilai = prompt("Latihan 4: Masukkan nilai (0-100):");
const nilaiMahasiswa = Number(inputNilai);

if (inputNilai === null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Latihan 4: Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Latihan 4: Lulus");
} else {
    alert("Latihan 4: Belum lulus");
}

// ==========================================
// Latihan 5: Seleksi kondisi switch
// ==========================================
const inputPilihan = prompt("Latihan 5: Masukkan angka 1-5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

// ==========================================
// Latihan 6: Form bilangan genap atau ganjil
// ==========================================
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// ==========================================
// Latihan 7: Mengubah warna halaman
// ==========================================
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// ==========================================
// Latihan 8: DOM dan checkbox menu makanan
// ==========================================
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ==========================================
// F. Mini Project: Kalkulator Nilai Mahasiswa
// ==========================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesKalkulator() {
    const inputTugas = document.getElementById("nilaiTugas").value;
    const inputUts = document.getElementById("nilaiUts").value;
    const inputUas = document.getElementById("nilaiUas").value;

    const tugas = Number(inputTugas);
    const uts = Number(inputUts);
    const uas = Number(inputUas);

    if (inputTugas === "" || inputUts === "" || inputUas === "" ||
        tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Mini Project: Harap masukkan nilai yang valid (0 - 100).");
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    document.getElementById("hasilAkhir").textContent = akhir.toFixed(2);
    document.getElementById("hasilPredikat").textContent = predikat;
    document.getElementById("hasilStatus").textContent = status;
}

// ==========================================
// G. Tambahan Eksperimen Mandiri (7, 8, 11)
// ==========================================

// Eksperimen 7: Perulangan tabel perkalian angka 7
console.log("--- Eksperimen 7: Tabel Perkalian 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

// Eksperimen 8: Function cekGenap
function cekGenap(angka) {
    return angka % 2 === 0;
}
console.log("Eksperimen 8: Apakah 8 genap? " + cekGenap(8));

// Eksperimen 11: Menyembunyikan/menampilkan elemen HTML
function toggleElemen() {
    const elemen = document.getElementById("teksToggle");
    if (elemen.style.display === "none") {
        elemen.style.display = "block";
    } else {
        elemen.style.display = "none";
    }
}
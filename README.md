Laporan Praktikum 5: JavaScript Dasar dan Manipulasi HTML

Mata Kuliah: Pemrograman Web

Nama: MUHAMMAD FACHRUDDIN

NIM: 312510103

A. Tujuan Praktikum

Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.

Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.

Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.

Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript (DOM).

Membuat interaksi sederhana pada form dan melakukan validasi input.

B. Langkah Kerja Praktikum (Latihan 1 - 8)

Latihan 1: Menampilkan Output

Menampilkan teks "Hello World" menggunakan textContent pada elemen HTML dan mencetaknya di console.log().

[Insert screenshot hasil halaman web dan Console Latihan 1 di sini]

Latihan 2: Alert dan Prompt

Menggunakan prompt() untuk meminta input nama pengguna, memvalidasi input kosong, lalu menampilkan sapaan dengan alert() serta menuliskannya di halaman HTML.

[Insert screenshot pop-up prompt dan alert Latihan 2 di sini]

Latihan 3: Function dan Operasi Aritmetika

Membuat fungsi operasiDasar(a, b) untuk menghitung penjumlahan, pengurangan, perkalian, pembagian, dan modulus dari dua angka, lalu menampilkannya di Console.

[Insert screenshot hasil perhitungan di Console Latihan 3 di sini]

Latihan 4 & 5: Seleksi Kondisi (if-else & switch)

If-else: Meminta input nilai angka (0-100) dan menentukan status kelulusan (Lulus >= 60).

Switch: Meminta input angka 1-5 dan mengembalikan teks nama bilangan ("Bilangan satu", dsb) menggunakan pop-up alert().

[Insert screenshot pop-up hasil Latihan 4 dan Latihan 5 di sini]

Latihan 6: Form Bilangan Genap/Ganjil

Membuat interaksi form input yang merespons klik tombol untuk mengecek apakah angka yang dimasukkan adalah bilangan genap atau ganjil.

[Insert screenshot hasil cek bilangan Latihan 6 di sini]

Latihan 7: Mengubah Warna Halaman

Membuat tiga tombol yang memanggil satu fungsi ubahWarnaLatar(warna) untuk mengubah document.body.style.backgroundColor menjadi hijau, putih, atau kuning.

[Insert screenshot halaman saat warna berubah Latihan 7 di sini]

Latihan 8: DOM dan Checkbox Menu Makanan

Membuat daftar checkbox makanan. Menggunakan event listener change agar setiap kali checkbox dicentang/dilepas, total harga langsung diperbarui secara real-time.

[Insert screenshot menu makanan dan total harga Latihan 8 di sini]

C. Mini Project: Kalkulator Nilai Mahasiswa

Kalkulator interaktif yang menerima input nilai Tugas (30%), UTS (30%), dan UAS (40%). Program ini melakukan validasi nilai rentang 0-100, lalu menampilkan secara langsung ke layar:

Total Nilai Akhir

Predikat (A, B, C, D, E)

Status Kelulusan (Lulus/Belum lulus)

[Insert screenshot form dan hasil perhitungan Mini Project di sini]

D. Eksperimen Mandiri

Beberapa fitur tambahan yang diintegrasikan ke dalam file HTML dan JS:

Prompt Aritmetika (Eksperimen 1): Mengubah Latihan 3 agar meminta dua input angka secara dinamis melalui prompt().

Perulangan (Eksperimen 7): Mencetak tabel perkalian angka 7 (dari 1 hingga 10) di Console menggunakan fungsi for.

Fungsi Cek Genap (Eksperimen 8): Menggunakan fungsi yang mengembalikan nilai boolean true atau false terhadap status angka genap, dan dicetak di Console.

Validasi Form (Eksperimen 9): Mencegah user memasukkan input kosong/huruf pada kalkulator nilai dan form ganjil genap.

Hide/Show Elemen HTML (Eksperimen 11): Menambahkan tombol toggle menggunakan perubahan properti CSS display: none dan display: block untuk menyembunyikan dan menampilkan sebuah teks.

[Insert screenshot pembuktian Eksperimen Mandiri (Tabel 7 di Console, atau tombol Hide/Show) di sini]

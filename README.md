# Laporan Praktikum Pemrograman Web - Pertemuan 6 (JavaScript Dasar)

**Nama:** MUHAMMAD FACHRUDDIN  
**NIM:** 312510103  
**Mata Kuliah:** Pemrograman Web  
**Repository:** Lab5Web  

---

## A. Tujuan Praktikum
1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.

---

## B. Cara Menjalankan Program
1. Clone atau unduh repository ini ke dalam komputer lokal.
2. Buka folder `Lab5Web`.
3. Jalankan file `index.html` menggunakan web browser (Google Chrome, Mozilla Firefox, atau Microsoft Edge).
4. Untuk melihat hasil manipulasi console, klik kanan pada halaman web -> pilih **Inspect** (atau tekan F12) -> buka tab **Console**.

---

## C. Hasil Latihan Praktikum

### Latihan 1: Menampilkan Output & Latihan 2: Alert dan Prompt
Menampilkan teks "Hello World" ke dalam elemen HTML dan Console, serta meminta input nama menggunakan prompt lalu menampilkannya.
![Latihan 1 dan 2]([Masukkan link/path gambar screenshot Latihan 1 & 2 di sini])

### Latihan 3: Function dan Operasi Aritmetika
Melakukan operasi penjumlahan, pengurangan, perkalian, pembagian, dan modulus berdasarkan input dari parameter fungsi.
![Latihan 3]([Masukkan link/path gambar screenshot Console Latihan 3 di sini])

### Latihan 4 & 5: Seleksi Kondisi (if-else & switch)
Menentukan status kelulusan berdasarkan input nilai angka (Latihan 4) dan mencetak nama bilangan menggunakan switch (Latihan 5).
![Latihan 4 dan 5]([Masukkan link/path gambar screenshot popup alert Latihan 4 & 5 di sini])

### Latihan 6: Form Bilangan Genap atau Ganjil
Mengecek apakah bilangan bulat yang dimasukkan ke dalam form merupakan bilangan genap atau ganjil menggunakan manipulasi DOM.
![Latihan 6]([Masukkan link/path gambar screenshot form bilangan di sini])

### Latihan 7: Mengubah Warna Halaman
Mengubah warna latar belakang body halaman HTML (Hijau, Putih, Kuning) dengan menggunakan satu fungsi berparameter saat tombol ditekan.
![Latihan 7]([Masukkan link/path gambar screenshot perubahan warna latar di sini])

### Latihan 8: DOM dan Checkbox Menu Makanan
Menghitung total harga secara dinamis secara *real-time* saat checkbox menu makanan dicentang menggunakan *event listener*.
![Latihan 8]([Masukkan link/path gambar screenshot menu makanan di sini])

---

## D. Hasil Mini Project (Kalkulator Nilai Mahasiswa)
Program ini menerima input nilai Tugas, UTS, dan UAS. Kemudian, program memvalidasi input agar berada di rentang 0-100, menghitung bobot nilai akhir (30% Tugas + 30% UTS + 40% UAS), menentukan predikat (A/B/C/D/E), dan menampilkan status kelulusan langsung ke dalam halaman web.
![Mini Project]([Masukkan link/path gambar screenshot kalkulator nilai di sini])

---

## E. Hasil Eksperimen Mandiri
1. **Eksperimen 1:** Operasi aritmetika menggunakan nilai dari prompt pengguna.
2. **Eksperimen 7 & 8:** Perulangan tabel perkalian 7 dan fungsi *return boolean* untuk mengecek bilangan genap (terlihat di Console).
3. **Eksperimen 10:** Menambahkan ekstra dua pilihan menu makanan dan harganya pada form Latihan 8.
4. **Eksperimen 11:** Membuat tombol interaktif untuk menyembunyikan dan menampilkan kembali elemen teks (Hide/Show HTML).
![Eksperimen Mandiri]([Masukkan link/path gambar screenshot eksperimen mandiri di sini])

---

## F. Jawaban Pertanyaan dan Tugas (Bagian H)

**1. Perbedaan console.log(), alert(), prompt(), dan textContent/innerHTML:**
- `console.log()`: Menampilkan pesan ke console browser untuk kebutuhan *debugging*.
- `alert()`: Menampilkan pesan peringatan melalui pop-up dialog di browser.
- `prompt()`: Menampilkan jendela pop-up dialog yang meminta masukan/input teks dari pengguna.
- `textContent` / `innerHTML`: Digunakan untuk memanipulasi konten HTML. `textContent` hanya mengubah teks murni, sedangkan `innerHTML` dapat memproses tag HTML.

**2. Perbedaan let dan const:**
- `let`: Mendeklarasikan variabel yang nilainya dapat diubah (*re-assigned*).
- `const`: Mendeklarasikan variabel/konstanta yang nilainya tetap dan tidak dapat diubah setelah diinisialisasi.

**3. Perbedaan operator == dan ===:**
- `==` (Equality): Membandingkan dua nilai tanpa memperhatikan tipe datanya (melakukan konversi otomatis).
- `===` (Strict Equality): Membandingkan dua nilai beserta tipe datanya secara ketat.

**4. Fungsi if-else dan switch:**
- `if-else`: Menguji kondisi logis yang kompleks, rentang nilai, atau ekspresi boolean.
- `switch`: Memilih satu dari banyak pilihan berdasarkan pencocokan nilai pasti yang spesifik.

**5. Fungsi parameter dan return dalam Function:**
- `Parameter`: Variabel penampung yang menerima nilai masukan (argumen) dari luar ke dalam fungsi.
- `return`: Perintah untuk mengembalikan hasil proses komputasi dari dalam fungsi ke pemanggil fungsi tersebut.

**6. Cara JavaScript memilih elemen HTML menggunakan document.getElementById():**
JavaScript mencari elemen pada DOM (Document Object Model) berdasarkan atribut `id` uniknya. Setelah ditemukan, elemen dikembalikan sebagai objek yang dapat dimanipulasi teks, warna, atau propertinya.

**7. Script Validasi Form:**
```javascript
function validasiForm(nama, nilaiInput) {
  const nilai = Number(nilaiInput);
  if (!nama || nama.trim() === "") {
    alert("Nama tidak boleh kosong.");
    return false;
  }
  if (nilaiInput.trim() === "" || Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
    alert("Nilai harus berupa angka antara 0 sampai 100.");
    return false;
  }
  return true;
}

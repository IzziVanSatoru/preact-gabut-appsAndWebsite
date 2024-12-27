
# Gabut Cuy Website / apss

Proyek ini adalah website sederhana dengan layout responsif yang menampilkan header dan footer. Header berisi menu navigasi dan nama proyek, sedangkan footer tampil di bawah konten utama. Desainnya menggunakan fleksibilitas CSS dan responsif pada berbagai ukuran layar.

## Fitur Utama
- **Header**: Berisi judul dan menu navigasi untuk halaman Home, About, dan Hobbies.
- **Footer**: Menampilkan footer di bagian bawah halaman.
- **Responsif**: Desain yang responsif untuk tampilan desktop, tablet, dan mobile.
- **Animasi Hover**: Transisi warna pada tautan di menu navigasi saat di-hover.

## Prasyarat
Sebelum memulai, pastikan kamu telah menginstal hal-hal berikut:
- [Node.js](https://nodejs.org/) (termasuk npm)

## Instalasi

1. **Clone repository** ini ke komputer kamu:
    ```bash
    git clone https://github.com/IzziVanSatoru/preact-gabut-appsAndWebsite.git
    ```

2. **Masuk ke direktori proyek**:
    ```bash
    cd preact-gabut-appsAndWebsite.git
    ```

3. **Instalasi dependensi** menggunakan npm:
    ```bash
    npm install
    ```

4. **Jalankan proyek** di server lokal:
    ```bash
    npm run dev
    ```

5. Setelah server berjalan, buka browser dan akses:
    ```
    http://localhost:3000
    ```

## Struktur Proyek
Berikut adalah struktur folder dari proyek ini:

```
gabut-cuy-website/
├── components/           # Komponen reusable (Header, Footer)
├── pages/                # Halaman utama seperti Home, About, Hobbies
├── public/               # Asset statis seperti gambar dan file lainnya
├── styles/               # Gaya CSS atau SCSS
├── package.json          # Dependensi dan skrip proyek
└── README.md             # Dokumentasi proyek
```

## Pengembangan

### Menambahkan Halaman Baru

Untuk menambahkan halaman baru, cukup buat file baru di dalam folder `pages/` dengan ekstensi `.js` atau `.jsx`. Setiap file akan otomatis menjadi route berdasarkan nama file.

Contoh:  
- Untuk halaman `Contact`, buat file `pages/contact.jsx`.

### Menambahkan Komponen

Untuk menambahkan komponen baru, buat file di dalam folder `components/` dan ekspor komponen tersebut.

Contoh:
- Membuat komponen `Card.jsx`:
    ```jsx
    const Card = () => {
      return <div className="card">This is a card component</div>;
    };

    export default Card;
    ```

## Teknologi yang Digunakan
- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **CSS Flexbox**: Untuk layout yang fleksibel.
- **Media Queries**: Untuk desain responsif yang menyesuaikan dengan berbagai ukuran layar.
- **JSX**: Sintaks JavaScript yang memungkinkan penulisan elemen HTML di dalam JavaScript.

## Lisensi
Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## Kontribusi
Jika kamu ingin berkontribusi pada proyek ini, silakan buat fork repositori ini, buat perubahan, dan kirimkan pull request.


## ada yang gw bilang
- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **CSS Flexbox**: Untuk layout yang fleksibel. tetapi ada bug ketika layar diperbesar 100 di semua page harus diperkecil sampai 65 - 75 % agak navbar gak gak nimpa page lain
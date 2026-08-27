📱 Sistem Informasi Lingkungan Berbasis Mobile (SI-Lingkungan)

SI-Lingkungan adalah sistem informasi seluler modern yang menempatkan Kepala Lingkungan (Kepling) / Kepala Dusun (Kadus) sebagai Super Admin lapangan. Platform ini dirancang untuk memangkas birokrasi kependudukan, transparansi keuangan iuran warga, efisiensi penerbitan E-Surat ber-TTD Digital, hingga penanganan kondisi darurat secara real-time.

🌟 Fitur Utama (Full Feature Set)

Manajemen Kependudukan & KTA Digital

Digital Identity (KTA Digital): Kartu identitas warga berbasis QR Code untuk verifikasi Bansos dan gotong royong.

Verifikasi Warga Berjenjang: Approval otomatis di dashboard Kepling untuk registrasi warga baru.

Keuangan & Iuran Lingkungan (Financials)

Pembayaran QRIS & E-Wallet: Integrasi pembayaran iuran sampah, kebersihan, dan keamanan.

Pencatatan Kas Offline: Pengurus RT & Kepling dapat mencatat penerimaan tunai secara presisi.

Buku Kas Transparan (Public Ledger): Laporan Pemasukan vs Pengeluaran lingkungan dengan visualisasi grafik interaktif.

E-Surat Pengantar & Administrasi (Digital Service)

E-Surat Pengantar: Pengajuan Surat Keterangan Domisili, SKU, dan SKTM langsung dari ponsel.

Tanda Tangan Digital SHA-256: Kepling menandatangani dokumen secara digital lengkap dengan stempel kriptografi.

Export PDF: Pratinjau dan pengunduhan dokumen siap cetak.

Pengaduan & Pelaporan Warga (Lapor Pak Kepling)

Geotagged Reporting: Pelaporan fasilitas umum rusak, masalah kebersihan, dan gangguan lingkungan.

Status Tracking: Pemantauan status penanganan transparan (Submitted $\rightarrow$ In Progress $\rightarrow$ Resolved).

Sistem Keamanan & Keadaan Darurat (Panic Button)

Tombol SOS 3-Detik: Mencegah ketidaksengajaan dengan mekanisme tahan 3 detik.

Alarm Sirine & Broadcast Live GPS: Notifikasi alarm keras dengan pilihan kategori (Kebakaran, Kriminal, Medis, Bencana).

Pusat Komunikasi & Ekonomi (Community Hub)

Papan Pengumuman Digital: Broadcast berita resmi dan jadwal gotong royong.

Jadwal Ronda & Presensi QR Code: Pembagian regu poskamling malam.

Bursa Warga (Pasar Tetangga): Marketplace lokal UMKM antar tetangga tanpa komisi.

📐 Arsitektur Pengguna & Peran (User Roles)

Peran (Role)

Wewenang Utama

Kepling / Kadus (Super Admin)

Verifikasi akun warga, penandatanganan E-Surat (SHA-256), broadcast pengumuman, dan validasi panic button.

Pengurus RT / RW (Secondary Admin)

Pencatatan iuran tunai kas offline dan pembantu verifikasi faktual di lapangan.

Warga (Regular User)

Pengajuan E-Surat, pembayaran iuran, pelaporan masalah, pemicu tombol darurat panic, dan transaksi bursa warga.

🚀 Cara Menjalankan Proyek (Local Setup)

Proyek ini menggunakan pendekatan Standalone Web App modern yang dapat langsung dijalankan tanpa perlu proses kompilasi (Zero Build Setup):

Clone Repositori:

git clone [https://github.com/username/sistem-informasi-lingkungan.git](https://github.com/username/sistem-informasi-lingkungan.git)
cd sistem-informasi-lingkungan


Jalankan Aplikasi:

Buka berkas index.html langsung melalui peramban web (Browser) favorit Anda (Chrome, Firefox, Edge, Safari).

Atau gunakan ekstensi Live Server di VS Code untuk pengalaman pengembangan terbaik.

🌐 Panduan Deploy ke GitHub Pages

Agar aplikasi dapat diakses publik atau melalui perangkat seluler secara langsung:

Unggah seluruh berkas ke repositori GitHub Anda.

Masuk ke halaman Settings di repositori GitHub.

Klik menu Pages pada bilah samping kiri.

Pada opsi Source, pilih cabang main (atau master) dan folder / (root).

Klik Save. Dalam beberapa saat, aplikasi Anda akan live di URL https://username.github.io/sistem-informasi-lingkungan/.

📄 Lisensi

Proyek ini dilindungi di bawah lisensi MIT License.

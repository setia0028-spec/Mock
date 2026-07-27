// mock.js — simulasi lokal callUniversalAPI, tanpa panggil API asli sama sekali.
// Dipisah jadi 2 kolam jawaban: yang dites dengan DeepThink ON dan OFF.
// Pemilihan kolamnya otomatis ikut variabel global `deepThink` dari app utama
// (bisa dibaca langsung karena script ini jalan di scope global yang sama).

const mockAnswersThink = [
    "<think>Saya perlu mempertimbangkan pertanyaan ini dengan cermat sebelum menjawab.</think># Mengapa Aplikasi Sekarang Banyak yang Pakai SPA? **SPA** (Single Page Application) adalah aplikasi web yang hanya memuat satu halaman HTML sekali, lalu kontennya di-update secara dinamis tanpa reload ulang halaman. Berikut alasan utama mengapa tren ini mendominasi (terutama untuk aplikasi berbasis produk/dashboard): ## 1. Pengalaman Pengguna (UX) yang Jauh Lebih Halus**Navigasi instan**: Tidak ada 'kedipan' putih atau loading ulang penuh saat pindah halaman. **Transisi animasi**: Bisa dibuat seperti aplikasi native (mobile/desktop). **State tetap terjaga**: Pemutar musik, chat, atau form yang setengah diisi tidak hilang saat berpindah tab. ## 2. Efisiensi Bandwidth (Setelah Muat Awal) Hanya *data (JSON)* yang dikirim bolak-balik, bukan seluruh HTML/CSS/JS.",
    "<think>Menganalisis konteks percakapan... kemungkinan pengguna ingin menguji tampilan UI.</think># Judul Level 1: Petualangan di Puncak Merbabu\n## Judul Level 2: Hari Pertama\n### Judul Level 3: Persiapan\n#### Judul Level 4: Cek Peralatan\n##### Judul Level 5: Detail Kecil\n###### Judul Level 6: Catatan Akhir\n\n**Teks tebal** dan *teks miring* dan ***tebal + miring***\n~~teks coret~~\n`kode inline` untuk `nama_variabel`\n\n> Ini blockquote.\n> Cocok buat kutipan atau dialog.\n>> Bisa di-nested juga\n\n---\n\n## List\n**Unordered List:**\n- Bawa tenda\n- Bawa kompor\n    - Gas kecil\n    - Gas besar\n- Bawa jaket\n\n**Ordered List:**\n1. Jalan dari basecamp\n2. Pos 1\n3. Pos 2\n4. Puncak\n\n**Task List:**\n- [x] Packing selesai\n- [ ] Izin ke orang tua\n- [ ] Cek cuaca\n\n## Link dan Gambar\nIni [link ke Google](https://google.com)\n\n## Tabel\n| Waktu | Kegiatan | Lokasi |\n| --- | --- | --- |\n| 06:00 | Start jalan | Basecamp |\n| 12:00 | Makan siang | Pos 3 |\n| 15:00 | Sampai puncak | Puncak Merbabu |\n\n## Kode\n```javascript\nfunction hello() {\n  console.log('Halo dari kode block');\n}\n```",
    "<think>Tidak ada API yang dipanggil di sini. Ini murni simulasi lokal.</think>Mock sedang jalan, **API asli tidak dipanggil.**",
    "<think>Pengguna memberikan instruksi dalam bahasa Indonesia tentang cara menjawab pertanyaan. Ini adalah pedoman untuk asisten AI, bukan pertanyaan faktual. Saya perlu mengakui instruksi ini dengan singkat sesuai aturan yang diberikan, tanpa membuka dengan asumsi atau tawaran, tanpa bertanya balik, dan tanpa kata pelunak karena instruksinya sudah jelas.</think>Baik, instruksi diterima. Saya akan terapkan dalam semua respons.",
    "<think>Pertanyaan tentang perbedaan 'CoT native' dan 'CoT prompting'. Istilah teknis dalam AI/LLM. Langsung jelaskan tanpa asumsi tambahan.</think>**CoT (Chain-of-Thought) prompting** adalah teknik menambahkan instruksi eksplisit dalam prompt agar model mengeluarkan langkah penalaran sebelum jawaban final, misalnya dengan menyuruh 'think step by step'.\n\n**CoT native** adalah kemampuan bawaan model untuk melakukan penalaran bertahap secara internal tanpa perlu instruksi eksplisit dari prompt.\n\nPerbedaan intinya: CoT prompting adalah pemicu eksternal lewat desain prompt, sedangkan CoT native adalah kapabilitas internal model yang sudah terintegrasi dalam arsitekturnya.",
    "<think>Menyajikan data perbandingan framework.</think>## Perbandingan Framework JavaScript\n\n| Framework | Popularitas | Performa | Learning Curve |\n| --- | --- | --- | --- |\n| React | Sangat Tinggi | Baik | Sedang |\n| Vue | Tinggi | Baik | Rendah |\n| Angular | Sedang | Sangat Baik | Tinggi |\n| Svelte | Sedang | Sangat Baik | Sedang |\n\n**Kesimpulan:** Pilih React untuk proyek besar dengan komunitas luas.",
    "<think>Memberikan tutorial instalasi.</think>## Cara Install Node.js di Ubuntu\n\n```bash\nsudo apt update\nsudo apt install nodejs npm\nnode --version\n```\n\n**Atau pakai NVM:**\n```bash\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nnvm install 18\nnvm use 18\n```",
    "<think>Menjelaskan sintaks JavaScript modern.</think>## Sintaks Modern JavaScript\n\n### Destructuring\n```javascript\nconst user = { name: 'Budi', age: 25 };\nconst { name, age } = user;\n```\n\n### Spread Operator\n```javascript\nconst arr2 = [...arr1, 4, 5];\n```\n\n### Arrow Function\n```javascript\nconst double = (x) => x * 2;\n```"
];

// Jawaban TANPA think — dipakai kalau DeepThink lagi OFF saat pesan dikirim.
const mockAnswersNoThink = [
    "Di sebuah gang sempit di sudut kota yang jarang tersentuh cahaya matahari sore, terdapat sebuah toko tua tanpa papan nama. Orang-orang sekitar menyebutnya **\"Arsip Senja\"**.\n\nToko itu tidak menjual buku, kopi, atau barang antik. Toko itu menjual *kenangan*.\n\n---\n\n> *\"Setiap kenangan memiliki bobot yang sama. Untuk mengambil satu toples masa lalu, Anda harus meninggalkan satu toples masa depan sebagai gantinya.\"*\n\nSabtu, 25 Juli 2026. Hujan turun dengan deras. Seorang gadis muda bernama **Maya** melangkah masuk, membawa serta kesedihan yang pekat.\n\n*\"Aku ingin membeli suara tawa ibuku,\"* bisiknya.",
    "**REST API** adalah arsitektur komunikasi antar sistem berbasis HTTP. Prinsip utamanya:\n- **Stateless** — Setiap request independen\n- **Resource-based** — Data diakses via URL\n- **HTTP Methods** — GET, POST, PUT, DELETE\n\nMetode populer: JSON over HTTP.",
    "## Perbandingan Database\n\n| Database | Type | Use Case |\n| --- | --- | --- |\n| PostgreSQL | Relational | Data kompleks, transaksi |\n| MongoDB | Document | Data tidak terstruktur |\n| Redis | Key-Value | Caching, real-time |\n\n**Rekomendasi:**\n- Aplikasi banking → PostgreSQL\n- Session management → Redis",
    "## FAQ: Docker untuk Pemula\n\n**Q: Apa itu Docker?**\nA: Platform untuk mengembangkan dan menjalankan aplikasi dalam container.\n\n**Q: Bedanya Docker dengan VM?**\nA: Docker lebih ringan karena sharing kernel host OS.\n\n**Q: Cara install Docker?**\nA: `curl -fsSL https://get.docker.com | sh`",
    "## Prinsip Desain UI/UX\n\n### 1. Konsistensi\nPengguna tidak perlu belajar ulang setiap kali berpindah halaman.\n\n### 2. Feedback\nSetiap aksi harus ada respons (loading, success, error).\n\n> **Golden Rule:** \"Don't make me think\" — Krug",
    "## Persiapan Liburan ke Gunung\n\n### Perlengkapan Wajib:\n- 🎒 Ransel 50-70 liter\n- 🏕️ Tenda dome 2-3 orang\n- 🛌 Sleeping bag suhu -5°C\n- 🥾 Sepatu gunung yang sudah terbukti\n\n### Tips:\n1. **Aklimatisasi** — Jangan langsung ke puncak\n2. **Hidrasi** — Minum minimal 3 liter/hari",
    "Mock sedang jalan, **API asli tidak dipanggil.** Ini jawaban tanpa think karena DeepThink lagi dimatikan."
];

let lastIndexThink = -1;
let lastIndexNoThink = -1;

function pickRandom(pool, lastIndexRef) {
    if (pool.length === 1) return { text: pool[0], index: 0 };
    let index;
    do {
        index = Math.floor(Math.random() * pool.length);
    } while (index === lastIndexRef);
    return { text: pool[index], index };
}

callUniversalAPI = async function(messagesHistory, systemInstruction, enableSearch) {
    await new Promise(r => setTimeout(r, 800));

    // `deepThink` dibaca langsung dari variabel global app utama.
    const useThink = (typeof deepThink !== 'undefined') ? deepThink : false;

    let raw;
    if (useThink) {
        const picked = pickRandom(mockAnswersThink, lastIndexThink);
        lastIndexThink = picked.index;
        raw = picked.text;
    } else {
        const picked = pickRandom(mockAnswersNoThink, lastIndexNoThink);
        lastIndexNoThink = picked.index;
        raw = picked.text;
    }

    let thinkPart = '';
    let answerPart = raw.trim();
    if (useThink) {
        const thinkMatch = raw.match(/<think>([\s\S]*?)<\/think>/i);
        if (thinkMatch) {
            thinkPart = thinkMatch[1].trim();
            answerPart = raw.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
        }
    }

    return { think: thinkPart, answer: answerPart, sources: [] };
};

// mock-ai.js
// Menyediakan jawaban AI palsu dalam bentuk stream teks mentah.
// Tidak tergantung pada UI manapun.

(function() {
  // Teks jawaban contoh (bisa diubah)
  const ANSWER_TEXT = `Berdasarkan analisis di atas, berikut dampak perubahan iklim terhadap pertanian:

1. Penurunan produktivitas pada tanaman pangan utama (padi, gandum, jagung)
2. Pergeseran musim tanam yang mengganggu siklus pertanian
3. Meningkatnya hama dan penyakit tanaman akibat suhu yang lebih hangat

Untuk mitigasi, diperlukan:
- Pengembangan varietas tahan iklim
- Sistem irigasi yang lebih efisien
- Praktik pertanian regeneratif`;

  function createTextStream(text) {
    const words = text.split(/\s+/).filter(w => w.length > 0);
    let index = 0;

    return new ReadableStream({
      start(controller) {
        function pushNext() {
          if (index < words.length) {
            const word = words[index] + ' ';
            controller.enqueue(new TextEncoder().encode(word));
            index++;
            setTimeout(pushNext, 30);
          } else {
            controller.close();
          }
        }
        setTimeout(pushNext, 300);
      }
    });
  }

  window.MockAI = {
    getAnswerStream: function() {
      return createTextStream(ANSWER_TEXT);
    },
    // Bisa tambahkan setter untuk mengganti teks
    setAnswerText: function(newText) {
      // Dalam implementasi sederhana, kita bisa override fungsi getAnswerStream
      // tapi untuk kemudahan, kita simpan di variabel internal.
      // Akan lebih baik menggunakan closure, tapi untuk demo ini kita override.
      window.MockAI._answerText = newText;
    }
  };

  // Default answer
  window.MockAI._answerText = ANSWER_TEXT;
  // Override getter agar menggunakan _answerText
  const originalGet = window.MockAI.getAnswerStream;
  window.MockAI.getAnswerStream = function() {
    return createTextStream(window.MockAI._answerText);
  };

  console.log('[MockAI] Siap memberikan stream teks mentah.');
})();

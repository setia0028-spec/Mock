// mock-ai.js
// Menyediakan jawaban AI palsu dalam bentuk stream teks mentah.
// Tidak tergantung pada UI manapun.

(function() {
  // Teks jawaban contoh (bisa diubah)
  const ANSWER_TEXT = "Itu murni **keriuhan dan *psywar* khas media sosial antarsuporter sepak bola**, Bos! Kutipan yang Bos bawa itu berasal dari postingan akun-akun *fanbase* Bobotoh (pendukung Persib) yang sedang mengklarifikasi foto viral pemain baru mereka. \n\nMeskipun belum masuk ke portal berita nasional yang formal karena ini sebatas \"drama medsos\", fakta di lapangan yang memicu obrolan tersebut 100% nyata. \n\nBerikut adalah bedah tuntas maksud dari status viral tersebut:\n\n### 1. Konteks Peristiwa (Faktanya)\n* **Siapa Balsa?** Pemain yang dimaksud adalah **Balša Sekulić**, striker asing baru Persib Bandung asal Montenegro.\n* **Momen Kejadian:** Balsa baru saja melakoni laga debutnya bersama Persib di turnamen Piala Presiden melawan Arema FC pada hari **Sabtu, 25 Juli 2026** kemarin. Persib memenangkan laga tersebut dengan skor **1-0**.\n* **Maksud Pose Balsa:** Usai pertandingan, Balsa berpose mengangkat **jari telunjuk** dan **jempol**. Bagi Balsa, itu murni ekspresi lugu kebahagiaan debutnya: Telunjuk artinya **1 gol**, dan Jempol artinya **Bagus/Sip kita menang**. \n\n### 2. Akar Keributan (Kenapa Jadi Rame?)\nDi sepak bola Indonesia, pose telunjuk dan jempol yang terbuka itu sangat identik dengan **Sajete (Salam Jempol Telunjuk)**, yaitu simbol huruf **\"J\"** yang merupakan kebanggaan suporter Persija Jakarta (**The Jakmania**). \n\nKarena The Jakmania adalah rival abadi pendukung Persib, foto Balsa itu langsung digoreng dan diramaikan. \n* Suporter tetangga (The Jakmania) *geer* mengira pemain baru Persib malah berpose pakai simbol kebanggaan mereka (huruf J). \n* Sebagian lagi menganggap pose Balsa mirip huruf **\"L\"** (*Loser*/Pecundang) untuk mengejek.\n\n### 3. Bedah Kalimat Sunda di Caption\nPemilik status yang Bos kutip itu adalah Bobotoh yang sedang membela Balsa dan menyindir balik pihak rival. Kalau diterjemahkan ke bahasa Indonesia, begini maksudnya:\n\n> *\"Ah lier we etamah nu nga gede gedekeuna\"*\n> **(Ah pusing deh sama orang-orang yang suka membesar-besarkan masalah ini.)**\n\n> *\"Balsa ge malah seri jeng teu ngartieun ....maksud manehna mah cuma ekpresi 1 gol dan menang\"*\n> **(Balsa-nya saja malah ketawa dan nggak ngerti kenapa ini jadi ribut... maksud dia tuh murni cuma ekspresi 1 gol dan menang.)**\n\n> *\"Geer pisan we nu suprter tatangga, L jeng j jauh atuh teu puguh titingalian sieteh .....jelas meren\"*\n> **(Kegeeran banget sih suporter tetangga [The Jakmania]. Bentuk huruf L dan J itu beda jauh, nggak bener tuh matanya/salah lihat... udah jelas kan sekarang.)**\n\n**Kesimpulannya:** Balsa Sekulic sebagai orang asing sama sekali tidak tahu-menahu soal \"politik\" salam jari suporter lokal. Dia cuma niat selebrasi kemenangan 1-0 laga perdananya, tapi posenya nggak sengaja mirip salam rival, sehingga jadi bahan gorengan panas di TikTok dan Instagram!";

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

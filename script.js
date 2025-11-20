// --- Data Motivasi Panjang (20 Variasi Sesuai Permintaan) ---
const END_SESSION_MOTIVATION = [
    "Haii, aku tau kamu lagi capek. Kamu baru aja nyelesain tugas yang dari tadi bikin pusing, ya kan? Tapi coba tarik napas dulu… karena kamu hebat. Iya, kamu! Kamu yang bilang ‘aduh males banget’ tapi tetap duduk, tetap ngerjain, tetap selesai. Kadang kita lupa kalau usaha kecil yang kita lakukan hari ini itu sebenarnya kemenangan besar. Kamu mungkin ngerasa tugasnya sepele, tapi kamu tetap milih untuk bertanggung jawab, dan itu nggak semua orang bisa. Jadi, makasih ya… udah berjuang hari ini. Kasih diri kamu sedikit apresiasi. Minum air, istirahat sebentar, atau rebahan bentar juga nggak apa-apa. Kamu layak ngerasa bangga. Ingat, perjalananmu masih panjang, tapi satu tugas selesai itu artinya satu langkah lebih dekat ke versi dirimu yang kamu impikan. Terus maju ya. Aku bangga banget sama kamu.",
    "Stop. Hening sejenak. Sadarilah: 25 menit ini adalah bukti ketekunanmu. Kamu memilih untuk *melawan* distraksi. Itu *skill* mahal. Tepuk bahu sendiri, ambil jeda. Kamu layak dapat energi baru. Jangan biarkan rasa lelah mengalahkan pencapaian kecil ini. *You've got this!*",
    "Tugas selesai. *Level up* tercentang. Ingat, *progress* bukan tentang menjadi sempurna, tapi tentang menjadi lebih baik dari kemarin. Kamu baru saja membuktikan bahwa kamu lebih kuat dari rasa malasmu. Itu keren! Sekarang, minum air, regangkan badan, dan persiapkan diri untuk sesi berikutnya. Bangga sama diri sendiri!",
    "Setiap detik fokusmu adalah investasi. Hari ini, kamu memilih untuk berinvestasi pada masa depanmu. Tidak mudah, aku tahu. Tapi lihat hasilnya! Tugas selesai, pikiran lega. Rasakan sensasi kemenangan kecil ini. Itu yang akan membuatmu terus bergerak. *Keep that fire burning!* Sekarang, *chill* sebentar.",
    "Waktunya istirahat! Ingat, istirahat bukan tanda menyerah, tapi strategi cerdas. Kamu baru saja menghabiskan energi mental yang besar. Isi ulang tangki. Matikan layar sebentar, lihat ke luar jendela. Kamu akan kembali dengan pikiran yang *fresh* dan siap *slay* lagi.",
    "Dulu kamu berpikir 'Ah, nggak bakal selesai.' Sekarang? Tugas itu selesai! Buktikan pada dirimu sendiri bahwa keraguanmu itu cuma *noise* di kepala. Kamu adalah seorang *finisher*. Simpan rasa bangga ini, karena ini adalah bahan bakar terbaik untuk tantangan selanjutnya. Selamat, *bestie*!",
    "Berani memulai adalah 50% kemenangan. Kamu bukan hanya berani memulai, tapi juga berani menyelesaikannya. Kamu adalah *warrior* di medan perang produktivitas. Ambil minuman favoritmu, nikmati keheningan sebentar. *It’s time to reboot*. Tugas berikutnya akan jauh lebih mudah setelah *break* yang berkualitas.",
    "Setiap Pomodoro yang selesai adalah batu bata yang kamu letakkan untuk membangun impianmu. Kebiasaan fokus ini akan membawamu jauh. Terima kasih sudah tidak menyerah pada hari yang sulit ini. Sekarang, jeda sebentar. Izinkan dirimu menikmati buah dari perjuanganmu.",
    "Hebat! Tugas selesai. Sekarang, biarkan otakmu istirahat. Ingat, keseimbangan itu penting. Jangan paksa dirimu sampai kelelahan. Nikmati jeda ini seolah-olah itu adalah hadiah termahal. Hanya dengan istirahat yang cukup, kamu bisa kembali dengan performa maksimal. Sampai jumpa di sesi berikutnya!",
    "Disiplin adalah menjalaninya meskipun kamu tidak mood. Dan kamu baru saja menunjukkan disiplin kelas atas! Tugas selesai, waktu istirahat tiba. Biarkan otakmu tahu bahwa kerja dan istirahat memiliki batas yang jelas. Kamu pantas mendapatkan *break* penuh tanpa rasa bersalah.",
    "Aku tahu kamu capek banget. Rasa lelah itu nyata, dan itu berarti kamu sudah bekerja keras. Aku bangga kamu bisa melewati batas lelah itu dan menyelesaikan sesi ini. Rasa lelah ini adalah medali. Sekarang, medali itu sudah diterima. Jadi, *take a deep breath*, *recharge*, dan biarkan energi positif mengalir kembali. Sampai ketemu di sesi baru!",
    "Lihat! Hasilnya ada di depan mata. Hanya dengan 25 menit fokus, kamu bisa mencapai ini. Jangan pernah meremehkan kekuatan fokus yang terarah. Ini adalah *superpower* kamu. Sekarang, *off to a mindful break*. *Well done!*",
    "Kamu membuat pilihan yang tepat. Saat dunia memanggil untuk distraksi, kamu memilih untuk fokus. Ini adalah kemenangan karakter. Rayakan kemenangan kecil ini dengan istirahat yang benar-benar *santuy*. Kamu layak!",
    "Satu sesi selesai = konsistensi terjaga. Konsistensi kecil inilah yang akan mengalahkan usaha besar yang sporadis. Kamu membangun kebiasaan baik hari ini. Beri dirimu jeda untuk meresapi keberhasilan ini. Lalu, mari kita lanjutkan perjalanan ini bersama-sama.",
    "Tugas ini mungkin terasa seperti tembok, tapi kamu baru saja melewatinya. Kamu lebih kuat dari yang kamu kira. Gunakan waktu istirahat ini untuk benar-benar melepaskan diri dari tugas. Nikmati waktu kosong itu. Saatnya mengisi ulang baterai mentalmu, *superstar*.",
    "Hebat, kamu sukses mengatur emosi dan fokusmu. Mengelola perasaan malas adalah bagian tersulit. Kamu berhasil melaluinya. Sekarang, ambil napas perlahan. Biarkan ketenangan menggantikan stres. Ingat, kamu sudah berbuat yang terbaik hari ini.",
    "Prosesnya memang berliku, tapi kamu tetap di jalur. Itu yang terpenting. Jangan terlalu keras pada diri sendiri tentang hasilnya, fokuslah pada proses fokus yang baru saja kamu jalani dengan sempurna. Ambil 5-10 menit untuk *self-care*. *You're doing great!*",
    "Waktunya *intentional break*. Jeda yang disengaja. Jangan hanya pindah dari satu layar ke layar lain. Lakukan sesuatu yang benar-benar membuatmu rileks. Matikan mode kerja. Ini adalah penghargaanmu karena sudah menyelesaikan tugas penting. *See you soon!*",
    "Tugas selesai. *No cap*, kamu keren. Semangat pantang menyerahmu layak diacungi jempol. Sekarang waktunya untuk mengisi kembali semangat itu. Minum, makan camilan sehat, dan nikmati momen ringan ini. Kamu adalah panutan bagi dirimu sendiri.",
    "Terima kasih sudah memilih untuk bertanggung jawab. Terima kasih sudah menghormati waktu yang kamu tetapkan. Kamu membuat dirimu bangga. Tutup matamu sebentar, rasakan kemenangan ini. Kamu sudah melangkah lebih dekat ke targetmu. Teruslah berjalan, kamu luar biasa."
];

// --- Data Quotes Gen Z Pendek (Untuk muncul otomatis setiap 15 detik) ---
const genzQuotes = [
    "Slay the day, not the distraction.",
    "Low-key harus ngerjain ini. No cap.",
    "Choose your fighter: Produktivitas.",
    "Main character energy? Selesaikan tugas ini.",
    "Level up your life, satu tugas selesai.",
    "Ini waktunya untuk main game yang sebenarnya: Produktivitas.",
    "Jangan cuma scrolling. Do the things!",
    "Gaskan terus, jangan kasih kendor.",
    "Vibes lagi on!",
];

document.addEventListener('DOMContentLoaded', () => {
    // --- Elemen DOM ---
    const taskInput = document.getElementById('taskInput');
    const setTaskButton = document.getElementById('setTaskButton');
    const currentTaskDisplay = document.getElementById('currentTask');
    const timerDisplay = document.getElementById('timerDisplay');
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');
    const genzQuoteDisplay = document.getElementById('genzQuote');
    const focusNoise = document.getElementById('focusNoise');
    const toggleNoiseButton = document.getElementById('toggleNoiseButton');
    const volumeControl = document.getElementById('volumeControl');
    const musicStatusDisplay = document.getElementById('musicStatus');

    // --- Variabel State ---
    const POMODORO_TIME = 25 * 60; 
    let secondsRemaining = POMODORO_TIME;
    let timerInterval = null;
    let isPaused = true;
    let noisePlaying = false;

    // --- Fungsionalitas Tugas ---
    setTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            currentTaskDisplay.textContent = `✅ Tugasmu: ${task}`;
            taskInput.value = '';
        } else {
            alert('Masukkan tugas dulu dong, biar jelas mau ngapain!');
            currentTaskDisplay.textContent = "Tugas harian menantimu!";
        }
    });

    // --- Fungsionalitas Timer & Integrasi Musik ---

    function updateTimerDisplay() {
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerDisplay.textContent = formattedTime;
    }

    function startTimer() {
        if (!isPaused || secondsRemaining === 0) return;

        // Fungsionalitas Musik: Instruksi ke pengguna untuk menjalankan playlist mereka
        if (isPaused) {
            musicStatusDisplay.textContent = "🎶 Timer mulai! Putar musik semangat Anda sekarang.";
            musicStatusDisplay.style.color = '#e67e22'; 
        }

        isPaused = false;
        startButton.disabled = true;
        pauseButton.disabled = false;
        musicStatusDisplay.style.color = '#27ae60'; // Warna hijau saat aktif

        timerInterval = setInterval(() => {
            secondsRemaining--;
            updateTimerDisplay();

            if (secondsRemaining <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                isPaused = true;
                startButton.disabled = false;
                pauseButton.disabled = true;
                timerDisplay.textContent = "00:00";
                
                // KATA-KATA MOTIVASI PANJANG MUNCUL DI SINI
                const randomIndex = Math.floor(Math.random() * END_SESSION_MOTIVATION.length);
                const motivation = END_SESSION_MOTIVATION[randomIndex];
                
                // Menggunakan confirm untuk pop-up motivasi yang lebih besar dan acak
                confirm("🎉 Sesi Pomodoro Selesai! 🎉\n\n" + motivation + "\n\nKlik OK untuk kembali ke mode reset.");
                
                musicStatusDisplay.textContent = "Selesai! Waktunya istirahat dan motivasi.";
                musicStatusDisplay.style.color = '#e74c3c'; 
                
                resetTimer(false); 
            }
        }, 1000);
    }

    function pauseTimer() {
        if (!isPaused && timerInterval !== null) {
            clearInterval(timerInterval);
            timerInterval = null;
            isPaused = true;
            startButton.disabled = false;
            pauseButton.disabled = true;
            musicStatusDisplay.textContent = "Sesi Jeda. Pause Musik Manual.";
            musicStatusDisplay.style.color = '#f39c12'; 
        }
    }

    function resetTimer(force = true) {
        pauseTimer(); 
        secondsRemaining = POMODORO_TIME;
        updateTimerDisplay();
        if(force) {
            startButton.disabled = false;
            pauseButton.disabled = true;
        }
        musicStatusDisplay.textContent = "Klik Mulai untuk memutar musik semangat!";
        musicStatusDisplay.style.color = '#7f8c8d'; 
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);

    // --- Fungsionalitas Quotes Gen Z Pendek (Otomatis) ---
    function displayRandomQuote() {
        genzQuoteDisplay.style.opacity = 0;
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * genzQuotes.length);
            genzQuoteDisplay.textContent = `"${genzQuotes[randomIndex]}"`;
            genzQuoteDisplay.style.opacity = 1;
        }, 500); 
    }
    
    // Mulai quotes otomatis setiap 15 detik
    displayRandomQuote();
    setInterval(displayRandomQuote, 15000); 

    // --- Fungsionalitas White Noise & Volume ---
    focusNoise.volume = volumeControl.value;

    toggleNoiseButton.addEventListener('click', () => {
        if (noisePlaying) {
            focusNoise.pause();
            toggleNoiseButton.textContent = 'Play White Noise';
            toggleNoiseButton.style.backgroundColor = '#3498db';
            noisePlaying = false;
        } else {
            focusNoise.play().catch(error => {
                // Memberikan pesan jika browser memblokir Autoplay
                alert("Browser memblokir Autoplay. Klik tombol 'Play White Noise' ini lagi.");
                console.error("Autoplay Error:", error);
            });
            toggleNoiseButton.textContent = 'Stop White Noise';
            toggleNoiseButton.style.backgroundColor = '#c0392b';
            noisePlaying = true;
        }
    });

    volumeControl.addEventListener('input', (e) => {
        focusNoise.volume = e.target.value;
    });

    // Inisialisasi tampilan awal
    updateTimerDisplay();
});
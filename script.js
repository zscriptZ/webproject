// Mendapatkan URL Tujuan
const urlParams = new URLSearchParams(window.location.search);
const destinationUrl = urlParams.get('url');

if (destinationUrl) {
    const decodedUrl = decodeURIComponent(destinationUrl);
    const getLinkButton = document.getElementById('getLinkButton');
    const countdownElement = document.getElementById('countdown');
    const timerElement = document.getElementById('timer');
    const goButton = document.getElementById('goButton');
    let countdown = 5;

    // Event saat tombol "Get Link" diklik
    getLinkButton.addEventListener('click', () => {
        // Sembunyikan tombol "Get Link" dan tampilkan countdown
        getLinkButton.style.display = 'none';
        countdownElement.style.display = 'block';

        // Mulai countdown
        const interval = setInterval(() => {
            countdown--;
            timerElement.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(interval);
                countdownElement.style.display = 'none';
                goButton.style.display = 'block'; // Tampilkan tombol "Go"
                goButton.href = decodedUrl; // Tautkan tombol "Go" ke URL asli
            }
        }, 1000);
    });
}

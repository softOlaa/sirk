document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    // Try to autoplay music on page load
    function tryAutoplayMusic() {
        if (!isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                if (musicBtn) {
                    musicBtn.innerHTML = 'PAUSE MUSIC <i class="fa-solid fa-pause"></i>';
                    musicBtn.style.borderColor = '#dfb76c';
                    musicBtn.style.color = '#dfb76c';
                }
            }).catch(error => {
                // Autoplay might be blocked; user gesture will be required
                // Optionally, show a message or visual cue here
            });
        }
    }
    tryAutoplayMusic();

    // Music Player Toggling
    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicBtn.innerHTML = 'PAUSE MUSIC <i class="fa-solid fa-pause"></i>';
                musicBtn.style.borderColor = '#dfb76c';
                musicBtn.style.color = '#dfb76c';
            }).catch(error => {
                console.log("Audio playback failed or blocked by browser policies:", error);
            });
        } else {
            bgMusic.pause();
            isPlaying = false;
            musicBtn.innerHTML = 'PLAY MUSIC <i class="fa-solid fa-music"></i>';
            musicBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            musicBtn.style.color = '#e0e0e0';
        }
    });
});

const music = document.querySelector("#bg-music");
const musicButton = document.querySelector(".music-button");
const musicButtonIcon = document.querySelector(".music-button__icon");
const unlockButton = document.querySelector(".unlock-button");

music.volume = 0.1;

const updateMusicButton = () => {
  const isPlaying = !music.paused;

  musicButton.setAttribute("aria-pressed", String(isPlaying));
  musicButtonIcon.innerHTML = isPlaying ? "&#10074;&#10074;" : "&#9654;";
};

const playMusic = () => {
  music.play().catch(updateMusicButton);
};

musicButton.addEventListener("click", () => {
  if (music.paused) {
    playMusic();
    return;
  }

  music.pause();
});

unlockButton.addEventListener("click", () => {
  document.body.classList.remove("is-locked");
  playMusic();
});

music.addEventListener("play", updateMusicButton);
music.addEventListener("pause", updateMusicButton);
updateMusicButton();

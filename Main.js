const watchBtn = document.getElementById('watch-btn');
const videoContainer = document.getElementById('player');
const adVideo = document.getElementById('ad-video');
const earningsDisplay = document.getElementById('earnings');
const withdrawBtn = document.getElementById('withdraw-btn');

let earnings = 0;

if(localStorage.getItem('earnings')) {
  earnings = parseFloat(localStorage.getItem('earnings'));
  earningsDisplay.textContent = earnings.toFixed(2);
  updateWithdrawBtn();
}

watchBtn.addEventListener('click', () => {
  watchBtn.style.display = 'none';
  videoContainer.style.display = 'block';
  adVideo.play();
});

adVideo.addEventListener('ended', () => {
  earnings += 0.50;
  earningsDisplay.textContent = earnings.toFixed(2);
  localStorage.setItem('earnings', earnings.toFixed(2));
  alert('Dzięki za obejrzenie! Zarobiłeś 0,50 zł.');
  videoContainer.style.display = 'none';
  watchBtn.style.display = 'block';
  updateWithdrawBtn();
});

withdrawBtn.addEventListener('click', () => {
  if(earnings >= 1) {
    alert('Kod BLIK został wysłany na Twój telefon! (symulacja)');
    earnings = 0;
    earningsDisplay.textContent = earnings.toFixed(2);
    localStorage.setItem('earnings', earnings.toFixed(2));
    updateWithdrawBtn();
  } else {
    alert('Musisz zarobić co najmniej 1 zł, żeby wypłacić.');
  }
});

function updateWithdrawBtn() {
  withdrawBtn.disabled = earnings < 1;
}

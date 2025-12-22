// --- STAR ANIMATION ---
function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.querySelector('.stars').appendChild(star);
  setTimeout(() => star.remove(), 5000);
}
setInterval(createStar, 200);

// --- START BUTTON ---
document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('splash').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    // Auto scroll to first slide if needed, but usually default is top
  }, 1000);
});

// --- TYPING EFFECT ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const textElement = entry.target.querySelector('.typing-text');
      if (textElement && !textElement.dataset.typed) {
        textElement.dataset.typed = "true"; // Mark as typed
        const text = textElement.getAttribute('data-text');
        typeWriter(textElement, text);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));

function typeWriter(element, text) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

// --- GIFT BOX LOGIC (OPEN -> VANISH -> POPUP) ---
const giftBox = document.getElementById('gift');
const giftWrapper = document.getElementById('giftWrapper');
const popup = document.getElementById('popup');

giftBox.addEventListener('click', () => {
  // 1. Open the Box (Animation)
  giftBox.classList.add('open');
  
  // 2. Wait 1 second, then Vanish the box
  setTimeout(() => {
    giftWrapper.classList.add('vanish'); // CSS handles opacity 0 & scale 0
  }, 1000);

  // 3. Wait another 1 second (total 2s), then Show Popup
  setTimeout(() => {
    popup.classList.remove('hidden');
  }, 2000);

}, { once: true }); // Only clickable once

// --- YES / NO BUTTON LOGIC ---

// YES BUTTON -> FACEBOOK
document.getElementById('yesBtn').addEventListener('click', () => {
  const content = document.querySelector('.popup-content');
  content.innerHTML = "<h1>Yay! I Love You! ❤️</h1><p>Taking you to me...</p>";
  
  // Confetti Burst
  for(let i=0; i<50; i++) createStar();

  setTimeout(() => {
    window.location.href = "https://www.facebook.com/itz.sifat.216342";
  }, 2000);
});

// NO BUTTON -> GOOGLE
document.getElementById('noBtn').addEventListener('click', () => {
  window.location.href = "https://www.google.com";
});

// --- STAR ANIMATION (Background Effect) ---
function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (Math.random() * 3 + 2) + 's';
  const starsContainer = document.querySelector('.stars');
  if (starsContainer) {
    starsContainer.appendChild(star);
  }
  setTimeout(() => star.remove(), 5000);
}
setInterval(createStar, 200);

// --- START BUTTON (Splash Screen Removal) ---
const startBtn = document.getElementById('startButton');
if (startBtn) {
  startBtn.addEventListener('click', () => {
    document.getElementById('splash').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
    }, 1000);
  });
}

// --- TYPING EFFECT (Using Intersection Observer) ---
const observerOptions = {
  threshold: 0.6 // Slide-ta 60% dekhagile typing shuru hobe
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const textElement = entry.target.querySelector('.typing-text');
      if (textElement && !textElement.dataset.typed) {
        textElement.dataset.typed = "true";
        const text = textElement.getAttribute('data-text');
        typeWriter(textElement, text);
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));

function typeWriter(element, text) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60); // Typing speed
    }
  }
  type();
}

// --- GIFT BOX LOGIC (Open -> Vanish -> Popup) ---
const giftBox = document.getElementById('gift');
const giftWrapper = document.getElementById('giftWrapper');
const popup = document.getElementById('popup');

if (giftBox) {
  giftBox.addEventListener('click', () => {
    // 1. Box Open Animation
    giftBox.classList.add('open');
    
    // 2. 1 sec por box vanish hobe
    setTimeout(() => {
      giftWrapper.classList.add('vanish');
    }, 1000);

    // 3. 2 sec por main Proposal Popup ashbe
    setTimeout(() => {
      popup.classList.remove('hidden');
    }, 2000);
  }, { once: true });
}

// --- NO BUTTON PRANK (Runaway Logic) ---
const noBtn = document.getElementById('noBtn');
if (noBtn) {
  const moveButton = () => {
    // Random position calculate kora (screen-er bhetore)
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.zIndex = "3000";
  };

  // PC-r jonne hover korle palabe, Mobile-e touch korle palabe
  noBtn.addEventListener('mouseover', moveButton);
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Click hobe na, shudhu move hobe
    moveButton();
  });
}

// --- YES BUTTON LOGIC ---
const yesBtn = document.getElementById('yesBtn');
if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    const content = document.querySelector('.popup-content');
    content.innerHTML = "<h1>Yay! I Love You! ❤️</h1><p>Taking you to my profile...</p>";
    
    // Final celebration effect jodi dite chao
    setTimeout(() => {
      window.location.href = "https://www.facebook.com/itz.sifat.216342";
    }, 2000);
  });
}

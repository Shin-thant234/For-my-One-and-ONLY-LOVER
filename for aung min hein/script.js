function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function sendLove() {
  const name = getQueryParam("name") || "Wint Wah Htet";
  const message = document.getElementById("message");
  message.innerHTML = `Love u so much chee htope, ${name}! ❤️`;
  message.style.opacity = 1;

  // Create confetti effect
  for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 100);
  }
}


window.onload = sendLove;
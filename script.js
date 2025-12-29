function go(from, to) {
  document.getElementById(from).classList.add("hidden");
  document.getElementById(to).classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  if (music) music.play();
}

/* NO button escape */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";
  });
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);
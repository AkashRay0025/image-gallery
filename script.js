const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

nextBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: 320, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: -320, behavior: "smooth" });
});

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
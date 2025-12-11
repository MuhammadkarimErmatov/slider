const images = [
  "./images/view.png",
  "./images/frontview.png",
  "./images/sideview.jpg",
  "./images/rearview.png"
];

let current = 0;

function selectImage(i) {
  current = i;
  updateImage();
}

function nextImage() {
  current = (current + 1) % images.length;
  updateImage();
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  updateImage();
}

function updateImage() {
  document.getElementById("mainImage").src = images[current];

  document.querySelectorAll(".thumb").forEach((thumb, index) => {
    thumb.classList.remove("active");
    if (index === current) thumb.classList.add("active");
  });
}

updateImage();
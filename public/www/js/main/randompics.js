const images = [
  "image/ranpic1.jpg",
  "image/ranpic2.jpg",
  "image/ranpic3.jpg",
  "image/ranpic4.jpg",
  "image/ranpic5.jpg",
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

window.onload = function () {
  const divElement = document.getElementById("random-image");
  divElement.style.backgroundImage = `url(${getRandomImage()})`;
};

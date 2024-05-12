var index = 0;
var images = document.querySelectorAll(".slider img");

const burgerMenuToggle = document.getElementById('burger-menu-toggle');
const navbarCta = document.getElementById('navbar-cta');
burgerMenuToggle.addEventListener('click', () => {
  navbarCta.classList.toggle('hidden');
});

images[index].style.display = "block";

function nextSlide() {
  images[index].style.display = "none";
  index = (index + 1) % images.length;
  images[index].style.display = "block";
}

function prevSlide() {
  images[index].style.display = "none";
  index = (index - 1 + images.length) % images.length;
  images[index].style.display = "block";
}

function search() {
  var input = document.getElementById("inputSearch");
  var type = document.getElementById("type");
  var room = document.getElementById("rooms");
  if (!input.value) alert("Please type in your choice");
  if (!type.value) alert("Please choose an option");
  if (!room.value) alert("Please choose an option");
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("btnSearch").addEventListener("click", search);

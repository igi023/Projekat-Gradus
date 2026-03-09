function promeniSliku(index) {
  const slike = document.querySelectorAll(".slika");
  const dugmad = document.querySelectorAll(".pages span");

  slike.forEach(slika => slika.classList.remove("aktivna"));
  dugmad.forEach(dugme => dugme.style.background = "#bfc7a1");

  slike[index].classList.add("aktivna");
  dugmad[index].style.background = "#9DCA3E";
}




document.querySelector(".scrollTop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const box1 = document.querySelector(".kutija1");
const box2 = document.querySelector(".kutija2");

let current = 0; 
const boxes = [box1, box2];

setInterval(() => {
  const activeBox = boxes[current];
  const nextBox = boxes[1 - current];

  // nasumično odredi smer: 1 = levo, -1 = desno
  const direction = Math.random() < 0.5 ? 1 : -1;

  // sledeću postavimo u pravcu suprotnom od izlaza
  nextBox.style.transition = "none";
  nextBox.style.transform = `translateX(${direction * 120}%)`;
  nextBox.style.opacity = "0";

  // repaint
  nextBox.offsetHeight;

  // uključimo animaciju
  activeBox.style.transition = "transform 2.5s ease-in-out, opacity 2.5s ease-in-out";
  nextBox.style.transition = "transform 2.5s ease-in-out, opacity 2.5s ease-in-out";

  // animacija
  activeBox.style.transform = `translateX(${direction * -120}%)`;
  activeBox.style.opacity = "0";

  nextBox.style.transform = "translateX(0)";
  nextBox.style.opacity = "1";

  // reset pozicije stare kutije
  setTimeout(() => {
    activeBox.style.transition = "none";
    activeBox.style.transform = `translateX(${direction * 120}%)`;
  }, 2500);

  current = 1 - current;

}, 4000);


const followBtn = document.querySelector('.followBtn');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.closeBtn');

    followBtn.addEventListener('click', () => {
      popup.style.display = 'flex';
      setTimeout(() => popup.classList.add('active'), 10);
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
      setTimeout(() => popup.style.display = 'none', 500);
    });




// Smooth scroll za navigaciju
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {

  nav.classList.toggle("active");
  hamburger.classList.toggle("active");

});

const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    nav.classList.remove("active");
    hamburger.classList.remove("active");

  });
});
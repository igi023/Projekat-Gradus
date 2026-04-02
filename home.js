let startX = 0;
let currentIndex = 0;

function updateSlider() {
  const slike = document.querySelectorAll(".slika");
  const dugmad = document.querySelectorAll(".pages span");

  if (!slike.length) return;

  slike.forEach((slika) => slika.classList.remove("aktivna"));

  if (slike[currentIndex]) {
    slike[currentIndex].classList.add("aktivna");
  }

  dugmad.forEach((dugme, index) => {
    dugme.style.background = index === currentIndex ? "#9DCA3E" : "#efefef";
  });
}

function promeniSliku(index) {
  const slike = document.querySelectorAll(".slika");
  const dugmad = document.querySelectorAll(".pages span");

  if (!slike.length || !dugmad.length) return;

  // na telefonu ne koristis klik na kruzice
  if (window.innerWidth < 768) {
    return;
  }

  currentIndex = index;
  updateSlider();
}

const container = document.querySelector(".Zgrada");

if (container) {
  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", (e) => {
    // swipe radi na svim ekranima do 768px ukljucujuci 768
    if (window.innerWidth > 768) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const slike = document.querySelectorAll(".slika");

    if (!slike.length) return;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        currentIndex++;
      } else {
        currentIndex--;
      }

      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex >= slike.length) currentIndex = slike.length - 1;

      updateSlider();
    }
  });
}


/* scroll to top */
const scrollTopBtn = document.querySelector(".scrollTop");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.pointerEvents = "auto";
    } else {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.pointerEvents = "auto";
    }
  });

  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* slider za misljenja */
const box1 = document.querySelector(".kutija1");
const box2 = document.querySelector(".kutija2");

if (box1 && box2) {
  let current = 0;
  const boxes = [box1, box2];

  setInterval(() => {
    const activeBox = boxes[current];
    const nextBox = boxes[1 - current];
    const direction = Math.random() < 0.5 ? 1 : -1;

    nextBox.style.transition = "none";
    nextBox.style.transform = `translateX(${direction * 120}%)`;
    nextBox.style.opacity = "0";

    nextBox.offsetHeight;

    activeBox.style.transition =
      "transform 2.5s ease-in-out, opacity 2.5s ease-in-out";
    nextBox.style.transition =
      "transform 2.5s ease-in-out, opacity 2.5s ease-in-out";

    activeBox.style.transform = `translateX(${direction * -120}%)`;
    activeBox.style.opacity = "0";

    nextBox.style.transform = "translateX(0)";
    nextBox.style.opacity = "1";

    setTimeout(() => {
      activeBox.style.transition = "none";
      activeBox.style.transform = `translateX(${direction * 120}%)`;
    }, 2500);

    current = 1 - current;
  }, 4000);
}

/* popup */
const followBtn = document.querySelector(".followBtn");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".closeBtn");

if (followBtn && popup && closeBtn) {
  followBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    setTimeout(() => popup.classList.add("active"), 10);
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
      setTimeout(() => {
        popup.style.display = "none";
      }, 500);
    }
  });
}

/* smooth scroll za navigaciju */
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    const target = document.querySelector(href);

    if (target) {
      const headerOffset = 86;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    if (nav && hamburger) {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

/* hamburger */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mainNav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");

    if (nav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
}

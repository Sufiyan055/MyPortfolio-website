let navBar = document.querySelector(".navBar ul");
const tabsBox = document.querySelector(".projectUl");
allTabs = document.querySelectorAll(".tab");
arrowIcons = document.querySelectorAll(".icon span");
const email = document.getElementById("email");
const emialError = document.getElementById("emialError");

document.querySelector("#openNav").onclick = () => {
  navBar.classList.add("ulactive");
};

document.querySelector("#closeNav").onclick = () => {
  navBar.classList.remove("ulactive");
};

/* My Projects */

let isDragging = false;

const handleIcons = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft);
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth > scrollVal ? "flex" : "none";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 50);
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons();
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

/* Animation on Scroll in My Skill section */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

/* Contact form */

function validateEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emialError.style.display = "block";
    emialError.innerHTML = "<b>*Please enter a valid email</b>";
    return false;
  }
  emialError.innerHTML = "";
  return true;
}

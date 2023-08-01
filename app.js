const navBar = document.querySelector(".navBar ul");
const menuOpen = document.querySelector(".menu");
const closeOpen = document.querySelector(".close");

menuOpen.addEventListener("click", () => {
  navBar.style.width = "220px";
  navBar.style.visibility = "visible";
  navBar.style.transition = "0.4s ease-in-out";
});

closeOpen.addEventListener("click", () => {
  navBar.style.width = "0px";
  navBar.style.visibility = "hidden";
  navBar.style.transition = "0.4s ease-in-out";
});

/* My Projects */

const tabsBox = document.querySelector(".projectUl");
allTabs = document.querySelectorAll(".tab");
arrowIcons = document.querySelectorAll(".icon span");

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

let navBar = document.querySelector(".navBar ul");
const tabsBox = document.querySelector(".projectUl");
allTabs = document.querySelectorAll(".tab");
arrowIcons = document.querySelectorAll(".icon span");
const email = document.getElementById("email");
const emialError = document.getElementById("emialError");
let projectPreview = document.querySelector(".project-preview");
let previewBox = document.querySelectorAll(".preview");

document.querySelector("#openNav").onclick = () => {
  navBar.classList.add("ulactive");
};

document.querySelector("#closeNav").onclick = () => {
  navBar.classList.remove("ulactive");
};

/* My Projects */

/* Open Popup */
document.querySelectorAll(".projects-container .btnname").forEach((project) => {
  project.onclick = () => {
    projectPreview.style.display = "flex";
    let name = project.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

/* Close Popup */
previewBox.forEach((close) => {
  close.querySelector(".fa-x").onclick = () => {
    close.classList.remove("active");
    projectPreview.style.display = "none";
  };
});

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

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const closeBtn = document.getElementsByName("close-outline");
const ul = document.querySelectorAll(".main-nav-link");

btnNav.addEventListener("click", () => {
    header.classList.toggle("nav-open");
});

function liActive(){
    ul.forEach((li) => {
        li.addEventListener("click", () => {
            ul.forEach((li) => li.classList.remove("active-link"));
            li.classList.add("active-link");
        })
    })
};
liActive();

//////////////////////////////////////////////
// For learning purposes
/*
function highlightNavItemFromHash() {
  const hash = window.location.hash;
  const navItems = document.querySelectorAll('.main-nav-list li');

  navItems.forEach(li => li.classList.remove('active-link'));
  const targetLink = document.querySelector(`.main-nav-link[href="${hash}"]`);

  if (targetLink) {
    const parentLi = targetLink.closest('li');
    if (parentLi) {
      parentLi.classList.add('active-link');
    }
  }
}

window.addEventListener('hashchange', highlightNavItemFromHash);
*/
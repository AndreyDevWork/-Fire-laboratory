document.addEventListener('DOMContentLoaded', () => {
  const humburger = document.querySelector('.humburger');
  const overlay = document.querySelector('.aside__overlay');
  const logoNav = document.querySelector('.nav__logo');
  const asideNav = document.querySelector('.aside__nav');


  if(window.scrollY > 110) {
    humburger.classList.add('humburger_active');
  }

  window.addEventListener('scroll', () => {
    if(window.scrollY > 110) {
      humburger.classList.add('humburger_active');
    }
    if(window.scrollY < 110) {
      humburger.classList.remove('humburger_active');
    }
  });

  humburger.addEventListener('click', () => {
    logoNav.classList.toggle('nav_logo-hide');
    asideNav.classList.toggle('aside__nav_active');
    humburger.classList.toggle('humburger_focus')
    overlay.classList.toggle('aside__overlay_active');
  });
  overlay.addEventListener('click', () => {
    logoNav.classList.toggle('nav_logo-hide');
    asideNav.classList.toggle('aside__nav_active');
    humburger.classList.toggle('humburger_focus')
    overlay.classList.toggle('aside__overlay_active');
  });
  asideNav.addEventListener('click', (e) => {
    e.stopPropagation
  });
});


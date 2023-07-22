document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.header__link');

  if(window.scrollY > 110) {
    links.forEach(item => {
      item.classList.add('header__link_hide');
    })
  }

  window.addEventListener('scroll', () => {
    if(window.scrollY > 110) {
      links.forEach(item => {
        item.classList.add('header__link_hide');
      });

    }
    if(window.scrollY < 110) {
      links.forEach(item => {
        item.classList.remove('header__link_hide');
      });
    }

  });
});
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav__item-with');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const dropdown = item.querySelector('.nav__drop-down');
      dropdown.classList.toggle('nav__drop-down_active');
    });
  });
});

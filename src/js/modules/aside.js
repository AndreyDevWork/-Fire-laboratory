document.addEventListener('DOMContentLoaded', () => {
  const asideItems = document.querySelectorAll('.aside__item-with');

  asideItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown');
    const plus = item.querySelector('.aside__plus');
    const minus = item.querySelector('.aside__minus');
    item.addEventListener('click', () => {
      dropdown.classList.toggle('aside_hiden');
      plus.classList.toggle('aside_hiden');
      minus.classList.toggle('aside_hiden');
    });

  });


});
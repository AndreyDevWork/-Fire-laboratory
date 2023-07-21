document.addEventListener('DOMContentLoaded', () => {

  const mainItems = document.querySelectorAll('.main__item');

  mainItems.forEach(item => {

    item.addEventListener('mouseenter', () => {
      const p3 = item.querySelector('.p3');
      item.classList.add('main__item_active');   
      p3.classList.add('main__p3_active');   
    });
    item.addEventListener('mouseleave', () => {
      const p3 = item.querySelector('.p3');
      item.classList.remove('main__item_active');
      p3.classList.remove('main__p3_active');   
    });
  });
});
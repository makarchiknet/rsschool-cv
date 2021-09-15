const iconMenuBurger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');


if (iconMenuBurger) {
   iconMenuBurger.addEventListener('click', function (event) {
      document.body.classList.toggle('_lock');
      iconMenuBurger.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

// Прокрутка при клике

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });
}

function onMenuLinkClick(event) {

   const menuLink = event.target;

   if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      console.log(gotoBlock);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
      console.log(gotoBlockValue);

      if (iconMenuBurger.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenuBurger.classList.remove('_active');
         menuBody.classList.remove('_active');
      }

      window.scrollTo({
         top: gotoBlockValue,
         behavior: 'smooth'
      });
      event.preventDefault();
   }
}



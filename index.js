    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    const open = () => {
      mobileMenu.classList.add('is-open');
    }

    const close = (e) => {
      if(e.target.nodeName !== "DIV")
      mobileMenu.classList.remove('is-open');
    }
  
    openMenuBtn.addEventListener('click', open);
    closeMenuBtn.addEventListener('click', close);
    mobileMenu.addEventListener('click', close)
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
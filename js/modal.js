(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-open]'),
    closeMenuBtn: document.querySelector('[data-modal-close]'),
    menu: document.querySelector('[data-modal]'),
    body: document.body,
  };

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);

  function openMenu() {
    refs.menu.classList.add('is-open');
    refs.body.classList.add('no-scroll');
  }

  function closeMenu() {
    refs.menu.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  }
})();
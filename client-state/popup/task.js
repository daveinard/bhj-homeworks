const modal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if(!document.cookie.includes('name=CookieClose')) {
  modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'name=CookieClose';
})
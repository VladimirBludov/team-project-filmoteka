import { refs } from '../utils/refs';

export let signIn = false;

toggleSign(signIn);
refs.signInUp.addEventListener('click', onAutorizationClick);
refs.logOut.addEventListener('click', onExitClick);

function onAutorizationClick(e) {
  signIn = true;
  toggleSign(signIn);

  // --- Отработка закрытия окна по Esc и клику по дропу ----
  refs.closeBtn.addEventListener('click', onCloseBtnClick);
  window.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    onCloseBtnClick(e);
  });

  console.log(refs);

  refs.onDrop.addEventListener('click', e => {
    console.log(e);
    if (e.target === e.currentTarget) {
      onCloseBtnClick(e);
    }
  });
  // --------------------------------------------------------

  refs.createNewUser.addEventListener('click', toggleLogSign);
  refs.logUser.addEventListener('click', toggleLogSign);
  refs.signInUp.removeEventListener('click', onAutorizationClick);
}

function onExitClick(e) {
  signIn = false;
  document.location.href = document.getElementById('home');
  toggleSign(signIn);
  refs.logOut.removeEventListener('click', onExitClick);
}

function toggleSign(key) {
  if (key) {
    refs.libraryButton.hidden = false;
    refs.signInUp.hidden = true;
    refs.logOut.style.visibility = 'visible';
    refs.modalAuth.classList.remove('is-hidden');
  } else {
    refs.libraryButton.hidden = true;
    refs.signInUp.hidden = false;
    refs.logOut.style.visibility = 'hidden';
    refs.modalAuth.classList.add('is-hidden');
  }
}

function toggleLogSign(e) {
  refs.formLogin.classList.toggle('active');
  refs.formSign.classList.toggle('active');
}

function onCloseBtnClick(e) {
  refs.modalAuth.classList.add('is-hidden');
  refs.closeBtn.removeEventListener('click', onCloseBtnClick);
}

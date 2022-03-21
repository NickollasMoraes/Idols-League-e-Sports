const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

document.querySelector('#noticia1-js').addEventListener('click', () => {
  window.location = 'https://www.youtube.com/watch?v=MdA3C6Yj7Eo&t=5s'
})
document.querySelector('#noticia2-js').addEventListener('click', () => {
  window.location = 'https://youtu.be/yiIFLjp14Bo'
})
document.querySelector('#noticia3-js').addEventListener('click', () => {
  window.location = 'https://youtu.be/UTSEZlojEAc'
})
document.querySelector('#noticia4-js').addEventListener('click', () => {
  window.location = 'https://youtu.be/K9mFqZUyrM8'
})
const updateHeaderBackground = () => {
  const largeBackgroundUrl = 'assets/bg_large.jpg';
  document.querySelectorAll('.header')[0].style.backgroundImage = `url('${largeBackgroundUrl}')`;
}

window.addEventListener('load', () => {
  updateHeaderBackground();
});
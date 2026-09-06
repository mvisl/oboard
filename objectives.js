// Figma 3320:24892: ON_CLICK ↔ ON/OFF; SMART_ANIMATE / EASE_OUT / 300ms.
const objectives = document.querySelector('#objectives');
objectives.addEventListener('click', () => {
  const expanded = objectives.getAttribute('aria-expanded') !== 'true';
  objectives.setAttribute('aria-expanded', String(expanded));
  document.querySelector('#objectives-body').setAttribute('aria-hidden', String(!expanded));
});
// Keep the native 1440px composition, fitting smaller browser windows uniformly.
function fitPrototype() {
  document.documentElement.style.setProperty('--scale', Math.min(1, window.innerWidth / 1440));
}
fitPrototype();
window.addEventListener('resize', fitPrototype);

// Figma 3320:24892: ON_CLICK ↔ ON/OFF; EASE_OUT / 300ms.
const objectives = document.querySelector('#objectives');
const toggle = document.querySelector('#objectives-toggle');
function toggleObjectives() {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  objectives.dataset.expanded = String(expanded);
  document.querySelector('#objectives-body').setAttribute('aria-hidden', String(!expanded));
}
// The header is a native keyboard-accessible button. Rows preserve the Figma
// whole-section click, while dragging to select real text does not collapse it.
objectives.addEventListener('click', () => {
  if (window.getSelection()?.toString()) return;
  toggleObjectives();
});
function fitPrototype() {
  const scale = Math.min(1, window.innerWidth / 1440);
  document.documentElement.style.setProperty('--scale', scale);
  document.documentElement.style.setProperty('--viewport-width', `${window.innerWidth / scale}px`);
  document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight / scale}px`);
}
fitPrototype();
window.addEventListener('resize', fitPrototype);

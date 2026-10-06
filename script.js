const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogCaption = document.getElementById('dialog-caption');
const dialogClose = document.getElementById('dialog-close');

document.querySelectorAll('.image-open').forEach((button) => {
  button.addEventListener('click', () => {
    const sourceImage = button.closest('.serp-card, figure')?.querySelector('img');
    if (!sourceImage) return;
    dialogImage.src = sourceImage.currentSrc || sourceImage.src;
    dialogImage.alt = button.dataset.caption || 'Captura ampliada';
    dialogCaption.textContent = button.dataset.caption || 'Captura ampliada';
    dialog.showModal();
  });
});

dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  dialogImage.removeAttribute('src');
});

const navLinks = [...document.querySelectorAll('.nav a')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach((section) => observer.observe(section));
}

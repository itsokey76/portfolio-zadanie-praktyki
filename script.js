// Burger menu

const burgerBtn = document.querySelector('.header__burger-btn');
const header = document.querySelector('.header');
const links = document.querySelectorAll('.header__nav-list-item a');

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('active');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('active');
  });
});

// Submit Email

const form = document.getElementById('my-form');
const submitBtn = form.querySelector('.footer__list-item-input-btn');
const emailInput = form.querySelector('input[type="email"]');

emailInput.addEventListener('input', () => {
  submitBtn.disabled = !emailInput.validity.valid;
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.result === 'success') {
      alert('Email został wysłany!');
      form.reset();
    }
  } catch (error) {
    console.error('Błąd podczas wysyłania:', error);
  }
});

// Smooth link scroll

const landingLinks = document.querySelectorAll('a[href^="#"]');

landingLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth',
    });
  });
});

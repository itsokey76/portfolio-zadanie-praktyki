// Burger menu

console.log('hello');

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

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    console.log('Данные от сервера:', data);

    if (data.result === 'success') {
      alert('Email został wysłany!');
      form.reset();
    }
  } catch (error) {
    console.error('Błąd podczas wysyłania:', error);
  }
});

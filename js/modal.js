// ageGate.js — логіка 18+ перевірки через localStorage

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('age-modal');
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');

  // Перевіряємо, чи користувач вже підтвердив повноліття
  const isAdult = localStorage.getItem('ageConfirmed');

  if (isAdult === 'true') {
    // Якщо вже підтверджено — не показуємо попап
    modal.style.display = 'none';
  } else {
    // Інакше — показуємо модальне вікно
    modal.style.display = 'flex';
  }

  // Якщо натиснуто "Так" — зберігаємо відповідь і ховаємо попап
  btnYes.addEventListener('click', () => {
    localStorage.setItem('ageConfirmed', 'true');
    modal.style.display = 'none';
  });

  // Якщо натиснуто "Ні" — редірект на зовнішній сайт (наприклад, Google)
  btnNo.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
});
localStorage.clear()

  const contactLink = document.querySelector('.logosDiv a[href="responsible_page.html"]');
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('close-modal');

  contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // скасовує перехід
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Якщо хочеш зберігати форму або надіслати її — оброби submit:
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    modal.style.display = 'none';
  });

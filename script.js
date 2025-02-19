const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');

    title.addEventListener('click', () => {
        // Закрити інші елементи, крім поточного
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Перемкнути поточний елемент
        item.classList.toggle('active');
    });
});

function sendMessage(event) {
    if (event) event.preventDefault(); // Запобігає перезавантаженню форми

    // Очищення полів вводу
    document.querySelectorAll('.input-field').forEach(field => field.value = '');

    // Показ повідомлення (викликатиметься один раз)
    alert('Message sent');
}

// Якщо викликається з кнопки, додайте `event.preventDefault()`
document.querySelector('.send-button')?.addEventListener('click', sendMessage);


const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open');
});

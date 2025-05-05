const toggleButtons = document.querySelectorAll('.faq-toggle');

toggleButtons.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentElement.classList.toggle('active');
    })
});
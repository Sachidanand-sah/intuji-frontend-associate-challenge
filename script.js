document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('expanded');
        }
    });
});
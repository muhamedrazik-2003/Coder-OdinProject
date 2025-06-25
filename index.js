const dropdownBtn = document.querySelector('#nav-dropdown-btn');
const navDropdown = document.querySelector('nav');

dropdownBtn.addEventListener('click', () => {
  navDropdown.classList.toggle('hidden');
});
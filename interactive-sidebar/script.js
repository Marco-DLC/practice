const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
sidebar.textContent = 'Menu Options'

const container = document.querySelector('.container');

container.appendChild(sidebar);

const mainContent = document.querySelector('.mainContent');

const menuBtn = document.querySelector('#menuBtn');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
    mainContent.classList.toggle('mainContent-sidebar-open');
})
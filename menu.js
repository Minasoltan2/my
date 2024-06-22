document.getElementById('menu-icon').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    if (menuList.style.display === 'none' || menuList.style.display === '') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
});

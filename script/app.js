const laguna = document.getElementById('abajo');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 300) {
        abajo.style.backgroundColor = '#04aa6b';
        abajo.style.borderBottom = '3px solid #299684';
    } else {
        abajo.style.backgroundColor = 'rgb(123, 157, 145)';
          abajo.style.borderBottom = 'none';
    }
});
var numberBox = document.getElementsByClassName('number');

//Change color on all boxes on hover
function changeColor() {
    for (i=0; i < numberBox.length; i++) {
        numberBox[i].classList.toggle('color-change');
    }
}

for (i = 0; i < numberBox.length; i++) {
    numberBox[i].addEventListener('mouseenter', changeColor);
    numberBox[i].addEventListener('mouseleave', changeColor);
}
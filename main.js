var numberBox = document.getElementsByClassName('number');

//Change color on all boxes on hover
function changeColor() {
    for (i=0; i < numberBox.length; i++) {
        numberBox[i].classList.toggle('color-change');
    }
};

for (i = 0; i < numberBox.length; i++) {
    numberBox[i].addEventListener('mouseenter', changeColor);
    numberBox[i].addEventListener('mouseleave', changeColor);
}

//Box click and message appears
//create h3 element
var addText = document.createElement("h3");
//texts
var text1 = document.createTextNode('Oooh - so close, but no cigar');
var text2 = document.createTextNode('DING DING DING - We have a winner')


//box 1 click
function box1Message() {
    addText.appendChild(text1);
    document.querySelector('.text').appendChild(addText)
};

numberBox[0].addEventListener('click', box1Message);
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
var boxes = document.getElementsByClassName('boxes');
//create h3 element
var addText = document.createElement("h3");
//texts
var text1 = document.createTextNode('Oooh - so close, but no cigar');


//box1 click
function box1Message() {
    addText.appendChild(text1);
    document.querySelector('.text').appendChild(addText)
};

boxes[0].addEventListener('click', box1Message);
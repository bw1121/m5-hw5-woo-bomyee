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
//create element
var addText = document.createElement('h3');

//texts
var text1 = document.createTextNode('Oooh - so close, but no cigar');
var text2 = document.createTextNode('DING DING DING - We have a winner');
var text3 = document.createTextNode('Oops, better luck next time');


//box 1 click
function box1Message() {
    addText.appendChild(text1);
    document.querySelector('.text').appendChild(addText);
};

//box 2 click
function box2Message() {
    addText.appendChild(text2);
    document.querySelector('.text').appendChild(addText);
};

//box 3 click
function box3Message() {
    addText.appendChild(text3);
    document.querySelector('.text').appendChild(addText);
};

numberBox[0].addEventListener('click', box1Message);
numberBox[1].addEventListener('click', box2Message);
numberBox[2].addEventListener('click', box3Message);

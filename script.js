var css = document.querySelector('h3')
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('randomButton');

//CHOOSE YOUR OWN COLORS
function setGradient(){
    body.style.background = 'linear-gradient(to right, ' 
    + color1.value 
    + ', ' 
    + color2.value 
    + ')';  

    css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

//GENERATE A RANDOM COLOR
function getRandomColor(){
    var num = '';

    num = Math.floor(Math.random() * 16777216).toString(16);
    while(num.length < 6) {
        num = '0' + num;
    }
    return '#' + num;
}

//SET COLORS TO THE RANDOM COLOR
function setRandomColors(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

button.addEventListener('click', setRandomColors);

window.addEventListener('load', setGradient);
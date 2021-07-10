// Select DOM Elements

let colorsInput     = document.querySelectorAll(".inputColor");
let range           = document.querySelector('input[type="range"]');

let colorsDiv       = document.querySelector('.colors');

let buttons         = document.querySelectorAll("button");
let randomButton    = document.querySelector('.random');

let info            = document.querySelector('span');

// Initialisation 

let gradientColors = ['#F6D242', '#FF52E5'];
let direction      = 45;
let newColor;
let index=3;

colorsInput[0].value = gradientColors[0];
colorsInput[0].style.background = gradientColors[0];

colorsInput[1].value = gradientColors[1];
colorsInput[1].style.background = gradientColors[1];

document.body.style.background = `linear-gradient(${direction}deg, ${gradientColors})`;

// Direction control
range.addEventListener('input', ()=> {
    let direction = range.value * 3.6;
    document.body.style.background = `linear-gradient(${direction}deg, ${gradientColors})`;
});

// Add new colors 

buttons.forEach(button => {
    button.addEventListener('click', addOrRemove)
});

// Create a random color picker 
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }
  
// + ou - buttons 

function addOrRemove(e) {
    if(e.target.id == 'plus' ){

        // No more than 6 colors 
        if(gradientColors.length>=6){
            info.innerText = 'You should not add more than 6 colors';
            return
        }
    
        else {
            info.innerText = '';
            newColor = getRandomColor();
            let newInput = document.createElement('input');
            newInput.value = newColor;
            newInput.setAttribute('class','form-control mb-3 inputColor');
            newInput.setAttribute('type', "text");
            newInput.setAttribute('name', "couleur");
            newInput.setAttribute('data-index', index);
            index++;
            newInput.style.background = newInput.value;
            colorsDiv.append(newInput);    
        
            gradientColors.push(newInput.value);
            colorsInput  = document.querySelectorAll(".inputColor");
            console.log(colorsInput);
            
            document.body.style.background = `linear-gradient(${direction}deg, ${gradientColors})`;
        }
    
    } else if (e.target.id == 'moins') {

        if(gradientColors.length == 2){
            info.innerText = 'You should have at least 2 colors';
            return;
        }
        info.innerText = '';
        gradientColors.pop();

        colorsDiv.removeChild(colorsDiv.lastChild);
        colorsInput  = document.querySelectorAll(".inputColor");
        document.body.style.background = `linear-gradient(${direction}deg, ${gradientColors})`;
        index--;
    } 

    colorsInput.forEach(colorInput => {
        colorInput.addEventListener('input', changeColor)
    });

}

console.log(colorsInput);

// Generate random color gradient 

randomButton.addEventListener('click', () => {
    console.log(colorsInput)
    for (let i = 0; i < gradientColors.length; i++) {
        info.innerText = '';
        gradientColors[i]= getRandomColor();
        colorsInput[i].value = gradientColors[i];
        colorsInput[i].style.background = gradientColors[i];
        document.body.style.background = `linear-gradient(${direction}deg, ${gradientColors})`;
    }
})

//Change colors manually

colorsInput.forEach(colorInput => {
    colorInput.addEventListener('input', changeColor)
});

function changeColor(e) {
        color = e.target.value;
        e.target.style.background = color;
        colorsInput  = document.querySelectorAll(".inputColor");
        let i = e.target.getAttribute('data-index');
        console.log(i);
        gradientColors[i-1]=color;
        console.log(gradientColors);
        document.body.style.background = `linear-gradient(${direction}deg, ${gradientColors})`;
    }
    



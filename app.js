const btn = document.getElementById('btn');
const submit = document.getElementById('submit-button')
const clock =document.getElementById('time-left');
const question = document.getElementById('question');
const timeUp = document.getElementById('time-up');
const choiceBtn = document.getElementById('btn-sec')
const quesArea = document.getElementById('quest-area');
const questOne  = document.getElementById('quest-one');
const questTwo  = document.getElementById('quest-two');
const questThree  = document.getElementById('quest-three');
const questFour = document.getElementById('quest-four');
const rightAns = document.getElementById('right');
const wrongAns = document.getElementById('wrong-answer');
const total = document.getElementById('total');
const finalScore = document.getElementById('score-legend');
let rightResult = document.getElementById('right-result');
let wrongResult = document.getElementById('wrong-result');
//for local storage
const nameInput = document.getElementById('name-input')
const scoreInput = document.getElementById('score-input')
const inputBtn = document.getElementById('submit-button')
const nameOutput = document.getElementById('name-output')
const scoreOutput = document.getElementById('score-output')

//changing button choice display
 
// setting start button and some styling
btn.addEventListener('click', countDown)


let seconds = 60;
clock.textContent = (`00:${seconds}`);

function countDown () {
    btn.style.display=('none')
const countdown = setInterval (() => {
    seconds--;
    clock.textContent = (`00:${seconds}`);
    if (seconds <= 1 ) {
        clearInterval(countdown);
        clock.textContent = ('Time\'s up!');
        clock.style.fontSize=('4rem');
        clock.style.color=('black');
    } else {
 
    }
    if (seconds <= 30) {
        clock.style.color=('red');
        clock.style.fontSize=('3rem');
    }
    if (seconds <= 10) {
        clock.style.fontSize=('4rem');
    } 

},1000);
}


//making wrong answer score function
let result = 0;
var increment = function () {
        result ++;
        wrongResult.innerHTML = result;
    }
     


// setting first question when start is pushed.. 
btn.addEventListener('click', ask)

//questions and choices
function ask () {
    quesArea.innerHTML = 'Arrays can store:';
    questOne.innerHTML = 'Strings';
    questTwo.innerHTML = 'Numbers';
    questThree.innerHTML = 'Booleans';
    questFour.innerHTML = 'All of the Above';

//setting choice button events     
    questOne.addEventListener('click', () => {
       increment();

    })

    questTwo.addEventListener('click', () => {
        increment();
         
    })

    questThree.addEventListener('click', () => {
        increment();
        
    })

    questFour.addEventListener('click', () => {
        rightResult.innerHTML = 2;
        ask2();
   
    })

}

//setting second question
function ask2 () {
    quesArea.innerHTML = 'An example of a boolean is :';
    questOne.innerHTML = 'True and False';
    questTwo.innerHTML = 'Strings';
    questThree.innerHTML = 'Number';
    questFour.innerHTML = 'None of the above ';

    //setting boolean values
    questOne.addEventListener('click', () => {
        rightResult.innerHTML = 4;
        ask3();

    })

    questTwo.addEventListener('click', () => {
        
        
    })

    questThree.addEventListener('click', () => {
        
    
    })

    questFour.addEventListener('click', () => {
        
        
    })


}

//making third question 
function ask3 () {
    quesArea.innerHTML = 'JavaScript is used to:';
    questOne.innerHTML = 'Style a document';
    questTwo.innerHTML = 'Structure a document';
    questThree.innerHTML = 'Make a document interactive';
    questFour.innerHTML = 'All of the above ';

    //setting boolean values
    questOne.addEventListener('click', () => {
        
    })

    questTwo.addEventListener('click', () => {
        
        
    })

    questThree.addEventListener('click', () => {
        rightResult.innerHTML = 6;
        ask4();
    })

    questFour.addEventListener('click', () => {
        
        
    })
}

// making fourth question 
function ask4 () {
    quesArea.innerHTML = 'NaN stands for : ';
    questOne.innerHTML = 'String';
    questTwo.innerHTML = 'Function';
    questThree.innerHTML = 'Not a number ';
    questFour.innerHTML = 'none of the above ';

    //setting boolean values
    questOne.addEventListener('click', () => {
        

    })

    questTwo.addEventListener('click', () => {
        
        
    })

    questThree.addEventListener('click', () => {
        rightResult.innerHTML = 8;
        finalResult();
        
    })

    questFour.addEventListener('click', () => {
        
        
    })
}

//final result 
function finalResult () {
    finalScore.innerHTML = 'Congrats! Your final score is:';
}



//storing score and name
inputBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const score = scoreInput.value;

    nameOutput.innerHTML += `${name}`;
    scoreOutput.innerHTML += `${score}`
})

for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const score = localStorage.key(name);

}


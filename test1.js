let lives = 3

const questionsdisplay = document.querySelector('.questions-display')
const input = document.querySelector('.input')
const firstform = document.querySelector('.first-form')
const submit = document.querySelector('.submitbutton')
const secondform = document.querySelector('.second-form')


one = true
two = false
three = false
four = false
five = false

let answer = ''

let delay = false

secondform.style.display = 'none'


function yestofirstquestion() {
    const $1and0text = 'Good... Then we shall begin. The first question will be easy, how many days are there in october?'
    typeText($1and0text, 35)
}


const begintext = 'Welcome to the halloween quiz, do you dare to proceed?'

typeText(begintext, 50);
let firstext = true




function typeText(newText, typingSpeed = 100) {
    delay = true
    if (delay === true) {
        console.log('doing')
    }
    questionsdisplay.textContent = ''; // Clear previous text
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < newText.length) {
            questionsdisplay.textContent += newText.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval); // Stop when text is complete
                delay = false

                if (secondone === true) {
                    secondform.style.display = 'block'
                }
                else if (thirdone === true) {
                    style.display = 'block'
                }
   



            }

    }, typingSpeed);

}



firstform.addEventListener('change', function(event) {
    answer = event.target.value
    console.log(answer)
})


secondform.addEventListener('change', function(event) {
    answer = event.target.value
    console.log(answer)
})


secondone = false
thirdone = false
fourthone = false
fifthone = false
sixthone = false



function question3() {
    const text3 = 'What is the name of this charactare?'
    typeText(text3, 50)
}

function question4() {
    const text4 = ''
    typeText(text4, 50)
}

function getanswer() {
    if (one === true) {
        if (answer === 'choice1' && delay === false) {
        firstform.style.display = 'none'
        answer = ''
        secondone = true
        yestofirstquestion()
        one = false
        two = true
    }
    }
    else if (two === true) {
        if (answer === 'choice3.3' && delay === false) {
            secondform.style.display = 'none'
            answer = ''
            thirdone = true
            question3()
            two = false
            three = true
        }
        else if (answer !== 'choice3.3' && delay === false) {
                lives -= 1
                console.log(lives)
            }
        }
    else if (three === true && delay === false) {
        thirdform.style.display = 'none'
        answer = ''
        fourthone = true

        three = false
        four = true

    }

    }






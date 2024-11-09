let lives = 3

const questionsdisplay = document.querySelector('.questions-display')
const input = document.querySelector('.input')
const firstform = document.querySelector('.first-form')
const submit = document.querySelector('.submitbutton')
const secondform = document.querySelector('.second-form')
const backgroundmusic = document.querySelector('.music')
const static = document.querySelector('.static')
const staticevent = document.querySelector('.staticevent')
const jeff = document.querySelector('.jeff')



let audio = document.querySelector(".music"); // Use querySelector to target the audio element
audio.play(); // Play the audio

one = true
two = false
three = false
four = false
five = false

let answer = ''

let delay = false

secondform.style.display = 'none'


function yestofirstquestion() {
    let $1and0text = 'Good... Then we shall begin. The first question will be easy, how many days are there in october?'
    typeText($1and0text, 35)
}


let begintext = 'Welcome to the halloween quiz, do you dare to proceed?'

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
                    input.style.display = 'block'
                    jeff.style.display = 'block'
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

input.addEventListener('input', function(event) {
    answer = event.target.value
})


secondone = false
thirdone = false
fourthone = false
fifthone = false
sixthone = false



function question3() {
    questionsdisplay.textContent = ''
    const text3 = 'What is the name of this character?'
    typeText(text3, 50)
}

function question4() {
    const text4 = ''
    typeText(text4, 50)
}



function getanswer() {
    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    console.log(five)

    static.style.opacity = '0'
    
    if (delay === false) {
    static.classList.add('staticevent')
    }

    if (one === true && two === false) {
        if (answer === 'choice1' && delay === false) {

        answer = ''
        secondone = true

            setTimeout(() => {
                firstform.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
        static.addEventListener('animationend', function() {

        yestofirstquestion()
        static.classList.remove('staticevent')
        }, {once: true})
        one = false
        two = true
    }
    }
    else if (two === true && one === false) {
        if (answer === 'choice3.3' && delay === false) {

            answer = ''
            secondone = false
            thirdone = true
            setTimeout(() => {
                secondform.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                question3()
                static.classList.remove('staticevent')
            }, {once: true})
  
            two = false
            three = true
        }
    }

    else if (three === true) {
        if (answer.toLowerCase() === 'jeff' || answer.toLowerCase() === 'jeff the killer' && delay === false) {
        answer = ''
        thirdone = false
        fourthone = true
        setTimeout(() => {
            secondform.style.display = 'none'
            questionsdisplay.textContent = ''
        }, 500)
        static.addEventListener('animationend', function() {
            question4()
            static.classList.remove('staticevent')
        })
        console.log('bombaclat')
    }




    }

}


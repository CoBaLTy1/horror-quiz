// Function to play the audio and remove the event listeners


let audioon = false
let audiooff = true
const audioshowon = document.querySelector('.audio-on')
const audioshowoff = document.querySelector('.audio-off')

function audiooner() {
    const audio = document.querySelector('.first-music');
    if (audiooff === true) {
        audio.loop = true; // Enable looping of the audio
        audio.play().catch((error) => console.log("Playback blocked: ", error));
        audioon = true
        audiooff = false
        audioshowoff.style.display = 'none'
        audioshowon.style.display = 'block'
    }
    else if (audioon === true) {
        audio.pause()
        audioon = false
        audiooff = true
        audioshowon.style.display = 'none'
        audioshowoff.style.display = 'block'
    }


}

// Add event listeners for user interactions



let lives = 3
const questionsdisplay = document.querySelector('.questions-display')
const input = document.querySelector('.input')
const firstform = document.querySelector('.first-form')
const submit = document.querySelector('.submitbutton')
const secondform = document.querySelector('.second-form')
const static = document.querySelector('.static')
const staticevent = document.querySelector('.staticevent')
const jeff = document.querySelector('.jeff')
const beginoverlay = document.querySelector('.begin-overlay')
const menu = document.querySelector('.menu')
const play = document.querySelector('.play')
const backgroundmusic = document.querySelector('.music')
const thirdform = document.querySelector('.third-form')
const fourthform = document.querySelector('.fourth-form')
const russian = document.querySelector('.russian')
const fifthform = document.querySelector('.fifth-form')


one = true
two = false
three = false
four = false
five = false
six = false
seven = false
eight = false
nine = false
ten = false

let answer = ''

let delay = false

secondform.style.display = 'none'

let begintext = 'Welcome to the horror quiz, do you dare to proceed?'

let firstone = false

function start() {
    menu.style.display = 'none'
    beginoverlay.style.display = 'none'
    play.style.display = 'none'


    const audio = document.querySelector('.first-music');
    audio.pause();  // Pause the audio
    audio.currentTime = 0;  // Reset the playback position to the start
    const audio1 = document.querySelector('.music')
    audio1.loop = true
    audio1.play()    
    typeText(begintext, 50);
    firstone = true
    audioshowoff.style.display = 'none'
    audioshowon.style.display = 'none'
}

function yestofirstquestion() {
    let $1and0text = 'Good... Then we shall begin. The first question will be easy, how many days are there in october?'
    typeText($1and0text, 35)
}









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

                if (firstone === true) {
                    firstform.style.display = 'block'
                    firstone = false
                }

                else if (secondone === true) {
                    secondform.style.display = 'block'
                }
                else if (thirdone === true) {
                    input.style.display = 'block'
                    jeff.style.display = 'block'
                }
                else if (fourthone === true) {
                    fourthform.style.display = 'block'
                    russian.style.display = 'block'
                }
                else if (sixthone === true) {
                    fifthform.style.display = 'block'
                    counter.style.display = 'block'
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
seventhone = false
eigthone = false
ninethone = false
tenthone = false

let remember = 0

function question3() {
    questionsdisplay.textContent = ''
    const text3 = 'What is the name of this character?'
    typeText(text3, 50)
}

function question4() {
    const text4 = 'What creepypasta does the picture below belong to?'
    typeText(text4, 50)
}

function question5() {
    const text5 = 'alright write down 30 charactares and remember theses 30 charactares for the remainder of the quiz';
    typeText(text5, 50);
}

// Select the elements
const passwordField = document.getElementById('password'); // Password input field
const counter = document.querySelector('.counter'); // Counter element
const errorMessage = document.querySelector('.error'); // Error message element

// Add event listener to password input field
passwordField.addEventListener('input', function() {
    // Get the length of the input field
    const passwordLength = passwordField.value.length;

    // Update the counter
    counter.textContent = passwordLength;

    // Check if the length is not 30 and show/hide the error message
    if (passwordLength !== 30) {
        errorMessage.style.display = 'block'; // Show error
    } else {
        errorMessage.style.display = 'none'; // Hide error
        counter.style.color = 'green'
    }
});

fourthform.addEventListener('input', function() {
    rangevalue = fourthform.value
    answer = fourthform.value
    console.log(answer)
})

function getanswer(event) {
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
            thirdform.style.display = 'none'
            jeff.style.display = 'none'
            questionsdisplay.textContent = ''
        }, 500)
        static.addEventListener('animationend', function() {
            question4()
            static.classList.remove('staticevent')
        })
        three = false
        four = true
    }
    }
    else if (four === true) {
        answer
        if (answer === 8 && delay === false) {
            console.log('hello')
            answer = ''
            fourthone = false
            fifthone = true
            setTimeout(() => {
                fourthform.style.display = 'none'
                russian.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                question5()
            })
        }
    }

    else if (five === true) {
        if (delay === false) {
            passwordLength = remember
            fifthone = false
            sixthone = true
            setTimeout(() => {
                fifthform.style.display = 'none'
                counter.style.display = 'none'
                errorMessage.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                question6()
                static.classList.remove('staticevent')
            })
        }

        
    }

}



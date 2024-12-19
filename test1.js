let firstheart = true
let secondheart = false
let thirdheart = false

const eye1 = document.querySelector('.eye1')
const eye2 = document.querySelector('.eye2')
const eye3 = document.querySelector('.eye3')
const eye4 = document.querySelector('.eye4')
const eye5 = document.querySelector('.eye5')

// Function to randomly position and rotate the eyes within specified viewport limits
function positionEyes() {
    const eyes = [eye1, eye2, eye3, eye4, eye5];
    const positions = []; // Array to store occupied positions

    eyes.forEach(eye => {
        let left, top;

        // Find a unique position for each eye
        do {
            // Randomly choose to place the eye in the first 30vw or last 10vw
            const isInFirstSection = Math.random() < 0.3; // 30% chance for the first section
            left = isInFirstSection 
                ? Math.random() * 30 + 'vw' // Random position within the first 30vw
                : (Math.random() * 10 + 90) + 'vw'; // Random position within the last 10vw (90vw to 100vw)

            // Generate a random top position between 0 and 100vh
            top = Math.random() * 100 + 'vh';
        } while (
            positions.some(pos => pos.left === left && pos.top === top) // Check for overlap
        );

        // Store the position
        positions.push({ left, top });

        // Generate a random rotation angle (0, 90, 180, 270 degrees)
        const rotation = Math.floor(Math.random() * 4) * 90; // 0, 90, 180, or 270 degrees

        // Set the random position and rotation for each eye
        eye.style.position = 'absolute'; // Use absolute positioning
        eye.style.left = left;
        eye.style.top = top;
        eye.style.transform = `rotate(${rotation}deg)`; // Apply rotation
        eye.style.display = 'block'; // Ensure the eye is visible
    });
}

// Call the function to position and rotate the eyes
positionEyes();



let lives = 3
const questionsdisplay = document.querySelector('.questions-display')
const input = document.querySelector('.input')
const firstform = document.querySelector('.first-form')
const submit = document.querySelector('.submitbutton')
const secondform = document.querySelector('.second-form')
const static = document.querySelector('.static')
const staticevent = document.querySelector('.staticevent')
const jeff = document.querySelector('.jeff')
const play = document.querySelector('.play')
const backgroundmusic = document.querySelector('.music')
const thirdform = document.querySelector('.third-form')
const fourthform = document.querySelector('.fourth-form')
const russian = document.querySelector('.russian')
const fifthform = document.querySelector('.fifth-form')
const beginoverlay = document.querySelector('.begin-overlay')
const menu = document.querySelector('.menu')
const audioshowon = document.querySelector('.audio-on')
const audioshowoff = document.querySelector('.audio-off')
let secondtime = localStorage.getItem('secondtime') === 'true'; // Check local storage for secondtime
let begintext = 'Welcome to the horror quiz, do you dare to proceed?'
let delay = false
let firstone = true

const happy1 = document.querySelector('.happy1')
const happy2 = document.querySelector('.happy2')
const happywhite = document.querySelector('.happywhite')
const happyblack = document.querySelector('.happyblack')
const overlay = document.querySelector('.overlay')
const kvadrat = document.querySelector('.kvadrat')
const background = document.querySelector('.background')    
const heart1 = document.querySelector('.heart1')
const heart2 = document.querySelector('.heart2')
const heart3 = document.querySelector('.heart3')
const questionsdisplaymid = document.querySelector('.questionsdisplaymid')







function typeText(newText, typingSpeed = 100) {
    // Prevent starting a new typing action if one is already in progress
    if (delay) return;  // Exit early if typing is already in progress

    delay = true;  // Set delay to true, indicating that typing is in progress
    questionsdisplay.textContent = '';  // Clear any previous text
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < newText.length) {
            questionsdisplay.textContent += newText.charAt(index);  // Add one character at a time
            index++;
        } else {
            clearInterval(typingInterval);  // Stop when all text is typed
            delay = false;  // Allow the next typing action to proceed

            // Conditionally show the next form or content after typing finishes
            if (firstone === true) {
                firstform.style.display = 'block';
                submit.style.display = 'block';
                firstone = false;
            } if (secondone === true) {
                secondform.style.display = 'block';
                submit.style.display = 'block';
            } if (thirdone === true) {
                thirdform.style.display = 'block';
                input.style.display = 'block';
                jeff.style.display = 'block';
                submit.style.display = 'block';
            }  if (fourthone === true) {
                fourthform.style.display = 'block';
                russian.style.display = 'block';
                submit.style.display = 'block';
            } if (fifthone === true) {
                fifthform.style.display = 'block';
                counter.style.display = 'block';
            }  if (sixthone === true) {
                sixthform.style.display = 'block'
                possession.style.display = 'block'
                shining.style.display = 'block'
                alien.style.display = 'block'
                lambs.style.display = 'block'
                submit.style.display = 'block'
                box1.style.display = 'block'
                box2.style.display = 'block'
                box3.style.display = 'block'
                box4.style.display = 'block'
            }  if (seventhone === true) {
                seventhform.style.display = 'block'
                submit.style.display = 'block'
                thenightmare.style.display = 'block'
            }  if (eightone === true) {
                eightform.style.display = 'block'
                submit.style.display = 'block'
                therake.style.display = 'block'
            }  if (ninethone === true) {
                ninethform.style.display = 'block'
                submit.style.display = 'block'
                scream.style.display = 'block'
                jigsaw.style.display = 'block'
                slenderman.style.display = 'block'
                smiledog.style.display = 'block'
            }  if (tenthone === true) {
                tenthform.style.display = 'block'
                submit.style.display = 'block'
            }  if (eleventhone === true) {
                playagain.style.display = 'block'
                goback.style.display = 'block'
                happy1.classList.add('add')
                happy2.classList.add('add')
                happywhite.classList.add('add')
                happyblack.classList.add('add')
                overlay.style.display = 'none'
                background.style.backgroundColor = 'white'
        }
    }
    }, typingSpeed);  // Adjust typing speed based on the given typingSpeed parameter
}

const audio1 = document.querySelector('.music')

function start() {
    menu.style.display = 'none'
    beginoverlay.style.display = 'none'
    play.style.display = 'none'
    const audio = document.querySelector('.first-music');
    audio.pause();  // Pause the audio
    audio.currentTime = 0;  // Reset the playback position to the start

    audio1.loop = true
    audio1.play()    
    audio1.volume = '0.1'
    typeText(begintext, 50);
    firstone = true
    audioshowoff.style.display = 'none'
    audioshowon.style.display = 'none'
}




function typeText1(newText1, typingSpeed = 100) {
    // Prevent starting a new typing action if one is already in progress
    if (delay) return;  // Exit early if typing is already in progress

    delay = true;  // Set delay to true, indicating that typing is in progress
    questionsdisplaymid.innerHTML = '';  // Clear any previous text
    let index = 0;

    const words = newText1.split(' ');  // Split the text into words
    const lastWord = words.pop();  // Get the last word
    const remainingText = words.join(' ');  // Join the remaining words back together

    const typingInterval = setInterval(() => {
        if (index < remainingText.length) {
            questionsdisplaymid.innerHTML += remainingText.charAt(index);  // Add one character at a time
            index++;
        } else if (index < remainingText.length + lastWord.length + 1) {
            // Add a space before the last word
            if (index === remainingText.length) {
                questionsdisplaymid.innerHTML += ' ';
            } else {
                // Determine the color based on the last word
                const color = lastWord.toLowerCase() === "correct" ? "#32CD32" : 
                              lastWord.toLowerCase() === "incorrect" ? "red" : "black";
                // Add one character of the last word with the determined color
                questionsdisplaymid.innerHTML += `<span style="color: ${color};">${lastWord.charAt(index - remainingText.length - 1)}</span>`;
            }
            index++;
        } else {
            clearInterval(typingInterval);  // Stop when all text is typed
            delay = false;  // Allow the next typing action to proceed
        }
    }, typingSpeed);  // Adjust typing speed based on the given typingSpeed parameter
}



function midtext1() {
    let texter1 = 'Your answer was Correct';

    typeText1(texter1, 50);
}



const midblack = document.querySelector('.midblack');



function midtext2() {
    let newtext2 = 'Your answer was Incorrect';


    typeText1(newtext2, 50);
}

let audioon = false
let audiooff = true


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

const goodending = document.querySelector('.good-ending')




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
eleven = false

let answer = ''



secondform.style.display = 'none'








function yestofirstquestion() {
    let $1and0text = 'Good... Then we shall begin. The first question will be easy, how many days are there in october?'
    typeText($1and0text, 35)
}




const possession = document.querySelector('.possession')
const shining = document.querySelector('.shining')
const alien = document.querySelector('.alien')
const lambs = document.querySelector('.lambs')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const thenightmare = document.querySelector('.the-nightmare')
const seventhform = document.querySelector('.seventh-form')
const thenumber = document.querySelector('.thenumber')
const eightform = document.querySelector('.eight-form')
const therake = document.querySelector('.the-rake')
const ninethform = document.querySelector('.nineth-form')
const scream = document.querySelector('.scream')
const jigsaw = document.querySelector('.jigsaw')
const slenderman = document.querySelector('.slender-man')
const smiledog = document.querySelector('.smile-dog')
const selector1 = document.querySelector('.selector1')
const tenthform = document.querySelector('.tenth-form')
const full1 = document.querySelector('.full1')
const playagain = document.querySelector('.playagain')
const goback = document.querySelector('.goback')
const warningtext = document.querySelector('.warning-text')









firstform.addEventListener('change', function(event) {
    answer = event.target.value
    console.log(answer)
})


secondform.addEventListener('change', function(event) {
    answer = event.target.value
    console.log(answer)
})

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent form submission
        answer = input.value;
        console.log(answer);
    }
});

input.addEventListener('input', function(event) {
    answer = input.value;
})



let secondone = false
let thirdone = false
let fourthone = false
let fifthone = false
let sixthone = false
let seventhone = false
let eightone = false
let ninethone = false
let tenthone = false
let eleventhone = false

let remember = ''

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
    const text5 = 'alright write down 15 charactares and remember theses 15 charactares for the remainder of the quiz';
    typeText(text5, 50);
}

function question6() {
    const text6 = 'Which one of these pictures below belong to a horror movie?'
    typeText(text6, 50)
} 

function question7() {
    const text7 = 'during what year was the movie "The Nightmare Before Christmas" released?'
    typeText(text7, 50)
}
function question8() {
    const text8 = 'What creepypasta does the picture below belong to?'
    typeText(text8, 50)
}

function question9() {
    const text9 = 'which of the pictures below are not creepypastas?';
    typeText(text9, 50);
}

function question10() {
    const text10 = 'now rewrite the 15 characters from before but switch the first and last character and add the characters abc instead of the characters 5-8 and switch the 13th character and 9th character'
    typeText(text10, 50)
    
    if (done === true && remembertext) {
        // Convert string to array for easier manipulation
        let chars = remembertext.split('');
        
        // Switch first and last characters
        [chars[0], chars[14]] = [chars[14], chars[0]];
        
        // Replace characters 5-8 with 'abc'
        chars.splice(4, 4, 'a', 'b', 'c');
        
        // Switch 13th and 9th characters
        [chars[12], chars[8]] = [chars[8], chars[12]];
        
        // Convert back to string and save as the new expected answer
        remembertext = chars.join('');
        console.log('Modified text (expected answer):', remembertext);
    }
}

function end() {
    const text11 = 'congratulations you have completed the quiz! Thank you for playing! It only took you ### attempts'
    typeText(text11, 50)
}

// Select the elements
const passwordField = document.getElementById('password'); // Password input field
const counter = document.querySelector('.counter'); // Counter element
const errorMessage = document.querySelector('.error'); // Error message element


let passwordLength = 0
// Add event listener to password input field
fifthform.addEventListener('submit', function(event) {
    event.preventDefault();

});


let passwordcontent = ''
let remembertext = ''

fifthform.addEventListener('input', function() {
    passwordField.value = passwordField.value.replace(/\s+/g, '');

passwordLength = passwordField.value.length;
passwordcontent = passwordField.value
    counter.textContent = passwordLength;
    if (passwordLength !== 15) {
        counter.style.color = 'red'; // Show error
        submit.style.display = 'none';
    } else {
        counter.style.color = 'green'; // Hide error
        submit.style.display = 'block';
    }
})



const selector = document.querySelector('.selector')

selector.addEventListener('change', function() {
    answer = selector.value
    console.log(answer)
})
selector1.addEventListener('change', function() {
    answer = selector1.value
    console.log(answer)
})

const sixthform = document.querySelector('.sixth-form')


let selectedAnswers = new Set();
sixthform.addEventListener('change', function(event) {
    if (event.target.checked) {
        selectedAnswers.add(event.target.value);
    } else {
        selectedAnswers.delete(event.target.value);
    }
})

let selectedAnswers1 = new Set()
ninethform.addEventListener('change', function(event) {
    if (event.target.checked) {
        selectedAnswers1.add(event.target.value);
    } else {
        selectedAnswers1.delete(event.target.value);
    }
})


thenumber.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent form submission
        answer = thenumber.value;
        console.log(answer);
    }
});

thenumber.addEventListener('input', function(event) {
    answer = thenumber.value;
})


const passwordField1 = document.querySelector('.password1');

passwordField1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        answer = passwordField1.value
        console.log(answer)
    }

})

passwordField1.addEventListener('input', function(event) {
    answer = passwordField1.value
})

done = false


const jumpscare = document.querySelector('.the-jumpscare')

let jumpscaresound = new Audio('distorted-corrupted-screams-sfx_83bpm_A_major.mp3')

let whisper1 = new Audio('New Project.wav')
let whisper2 = new Audio('New Project (1) (1).wav')

function crashWebsite() {
    for (var i = 5; i > 3; i = i + 1){ console.log(i); }
}

function displayUserIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            // Display the IP address in an alert
            alert('Congrats, you lose... thank you for your IP address: ' + data.ip);
        })
}

// Call the function when the DOM is fully loaded


function fadeAudio(audioElement, startVolume, endVolume, duration) {
    const steps = 20;
    const volumeStep = (endVolume - startVolume) / steps;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    audioElement.volume = startVolume;
    
    const fadeInterval = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
            audioElement.volume = startVolume + (volumeStep * currentStep);
        } else {
            clearInterval(fadeInterval);
            audioElement.volume = endVolume;
            if (endVolume === 0) {
                audioElement.pause();
            }
        }
    }, stepDuration);
}






function getanswer() {
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
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
        static.addEventListener('animationend', function() {
        yestofirstquestion()
        static.classList.remove('staticevent')
        }, {once: true})
        one = false
        two = true
    } else {
 
        jumpscare.style.display = 'block'
 
        answer = '';
        audio1.pause()
        jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
        jumpscaresound.play()
        jumpscaresound.volume = '1.0'
        displayUserIP()
        
        setTimeout(() => {
            crashWebsite()
        }, 200)









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
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                question3()
                static.classList.remove('staticevent')
            }, {once: true})

            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)
  
            two = false
            three = true

        } 

             else if (answer !== 'choice1' && delay === false) {
                lives -= 1;
                secondone = false
                thirdone = true
                if (lives === 0) {
                    jumpscare.style.display = 'block'
        
                    answer = '';
                    audio1.pause()
                    jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                    jumpscaresound.play()
                    jumpscaresound.volume = '1.0'
                    displayUserIP()
                    
                    setTimeout(() => {
                        crashWebsite()
                    }, 200)
                }
        
                 if (firstheart === true) {
                    positionEyes();
                    heart3.classList.add('blink');
                    heart3.addEventListener('animationend', function() {
                        question3()
                        heart3.classList.remove('blink');
                        heart3.style.display = 'none'; // Hide heart1 after blinking
                        heart1.style.gridColumn = '11/13'
                        heart2.style.gridColumn = '9/11'
                        heart2.style.marginLeft = '0%'
                        firstheart = false
                        secondheart = true
                    }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
                } else if (secondheart === true) {
                    heart1.classList.add('blink');
                    heart1.addEventListener('animationend', function() {
                        heart1.classList.remove('blink');
                        heart1.style.display = 'none'; // Hide heart2 after blinking
                        heart2.style.gridColumn = '10/12'
                        secondheart = false
                        thirdheart = true
                        fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                        setTimeout(() => {
                            fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                            fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        }, 2000)
                    }, { once: true });
                } else if (thirdheart === true) {
                    heart2.classList.add('blink');
                    heart2.addEventListener('animationend', function() {
                        heart2.classList.remove('blink');
                        heart2.style.display = 'none'; // Hide heart3 after blinking
                        thirdheart = false
                    }, { once: true });
                }
                setTimeout(() => {
                    midblack.style.display = 'block'
                    firstform.style.display = 'none'
                    submit.style.display = 'none'
                    questionsdisplay.textContent = ''
                    midtext2()
                }, 800)

                setTimeout(() => {
                    questionsdisplaymid.textContent = ''
                    midblack.style.display = 'none'
                    secondform.style.display = 'none'
                }, 3900)
                
            static.addEventListener('animationend', function() {
                midblack.style.display = 'none'



            static.classList.remove('staticevent')
            }, {once: true})
            two = false
            three = true
            
            
            }
                }
                
            
    else if (three === true) {
        console.log('answer:', answer)
        if ((answer.toLowerCase() === 'jeff' || answer.toLowerCase() === 'jeff the killer') && delay === false) {
            console.log('hello'); // Should log if the condition passes
            
    
            answer = '';
            thirdone = false;
            fourthone = true;
    
            setTimeout(() => {
                input.style.display = 'none';
                jeff.style.display = 'none';
                submit.style.display = 'none';
                questionsdisplay.textContent = '';
            }, 500);
    
            static.addEventListener('animationend', function() {
                question4();
                static.classList.remove('staticevent');
            }, { once: true });


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)
    
            three = false;
            four = true;
            
        }
    else if (answer !== answer.toLowerCase() === 'jeff' || answer.toLowerCase() !== 'jeff the killer') {
        answer = '';
        lives -= 1;
        thirdone = false;
        fourthone = true;
        if (lives === 0) {
            jumpscare.style.display = 'block'

            answer = '';
            audio1.pause()
            jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
            jumpscaresound.play()
            jumpscaresound.volume = '1.0'
            displayUserIP()
            
            setTimeout(() => {
                crashWebsite()
            }, 200)
        }

    
            else if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds

                    whisper1.loop = true
                    whisper2.loop = true
                    whisper1.volume = 0
                    whisper2.volume = 0;
                    whisper1.play();
                    whisper2.play();

                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 0.001, 5000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 0.001, 5000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
                thirdform.style.display = 'none'
                input.style.display = 'none'
                jeff.style.display = 'none'
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
            question4()
        static.classList.remove('staticevent')
        }, {once: true})
        three = false
        four = true
        }
        
        }
    
    
    else if (four === true) {
        if (answer === '8' && delay === false) {
            console.log('hello')
            answer = ''
            fourthone = false
            fifthone = true
            setTimeout(() => {
                fourthform.style.display = 'none'
                russian.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                question5()
                static.classList.remove('staticevent')
            }, {once: true})


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)

            four = false
            five = true
        }

        else if (answer !== '8') {
            answer = '';
            lives -= 1;
            fourthone = false
            fifthone = true
            if (lives === 0) {
                jumpscare.style.display = 'block'
    
                answer = '';
                audio1.pause()
                jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                jumpscaresound.play()
                jumpscaresound.volume = '1.0'
                displayUserIP()
                
                setTimeout(() => {
                    crashWebsite()
                }, 200)
            }
    
    
            else if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                fourthform.style.display = 'none'
                russian.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''

                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
            question5()
        static.classList.remove('staticevent')
        }, {once: true})
        four = false
        five = true
        }
    }

    else if (five === true) {
        if (delay === false && passwordLength === 15) {
            remember = passwordLength
            remembertext = passwordcontent
            console.log(remembertext)
            done = true
            answer = ''
            fifthone = false
            sixthone = true
            setTimeout(() => {
                questionsdisplay.textContent = ''
                fifthform.style.display = 'none'
                counter.style.display = 'none'
                passwordField.style.display = 'none'
                submit.style.display = 'none'

            }, 500)
            static.addEventListener('animationend', function() {
                question6()
                static.classList.remove('staticevent')
            }, {once: true})


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)

            five = false
            six = true
        }

        else if (passwordLength !== 15) {
            answer = '';
            lives -= 1;
            if (lives === 0) {
                jumpscare.style.display = 'block'
    
                answer = '';
                audio1.pause()
                jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                jumpscaresound.play()
                jumpscaresound.volume = '1.0'
                displayUserIP()
                
                setTimeout(() => {
                    crashWebsite()
                }, 200)
            }
    

            if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                fifthform.style.display = 'none'
                counter.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                warningtext.style.display = 'block'
                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
                question6()
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
        static.classList.remove('staticevent')
        }, {once: true})
        }
        }
    
    else if (six === true) {
        if (selectedAnswers.has('1') && selectedAnswers.has('2') && selectedAnswers.has('4') && 
            !selectedAnswers.has('3') && delay === false) {
            selectedAnswers = ''
            answer = ''
            sixthone = false
            seventhone = true
            setTimeout(() => {
                sixthform.style.display = 'none'
                possession.style.display = 'none'
                shining.style.display = 'none'
                alien.style.display = 'none'
                lambs.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                question7()
                static.classList.remove('staticevent')
            }, {once: true})


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)

            six = false
            seven = true
        }

        else {
            answer = '';
            lives -= 1;
            sixthone = false
            seventhone = true
            if (lives === 0) {
                jumpscare.style.display = 'block'
    
                answer = '';
                audio1.pause()
                jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                jumpscaresound.play()
                jumpscaresound.volume = '1.0'
                displayUserIP()
                
                setTimeout(() => {
                    crashWebsite()
                }, 200)
            }
    
    
            if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                sixthform.style.display = 'none'
                possession.style.display = 'none'
                shining.style.display = 'none'
                alien.style.display = 'none'
                lambs.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
                question7()
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
        static.classList.remove('staticevent')
        }, {once: true})
        six = false
        seven = true
        }

    } else if (seven === true) {
        if (answer === '1993' && delay === false) {
            answer = ''
            seventhone = false
            eightone = true
            setTimeout(() => {
                seventhform.style.display = 'none'
                thenightmare.style.display = 'none'
                questionsdisplay.textContent = ''
                submit.style.display = 'none'
            }, 500)
            static.addEventListener('animationend', function() {
                question8()
                static.classList.remove('staticevent')
            }, {once: true})


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)


            seven = false
            eight = true
        }


        else if (answer !== '1993' && delay === false) {
            answer = '';
            lives -= 1;
            seventhone = false
            eightone = true
            if (lives === 0) {
                jumpscare.style.display = 'block'
    
                answer = '';
                audio1.pause()
                jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                jumpscaresound.play()
                jumpscaresound.volume = '1.0'
                displayUserIP()
                
                setTimeout(() => {
                    crashWebsite()
                }, 200)
            }
    
    
            if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                seventhform.style.display = 'none'
                thenightmare.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
                question8()
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
        static.classList.remove('staticevent')
        }, {once: true})
        seven = false
        eight = true
        }


    } else if (eight === true) {
        if (answer === '4' && delay === false) {
            answer = ''
            eightone = false
            ninethone = true
            setTimeout(() => {
                eightform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                therake.style.display = 'none'
            }, 500)
            static.addEventListener('animationend', function() {
                question9()
                static.classList.remove('staticevent')
            }, {once: true})


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)


            eight = false
            nine = true
        }

        else if (answer !== '4' && delay === false) {
            answer = '';
            lives -= 1;
            eightone = false
            ninethone = true
            if (lives === 0) {
                jumpscare.style.display = 'block'
    
                answer = '';
                audio1.pause()
                jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                jumpscaresound.play()
                jumpscaresound.volume = '1.0'
                displayUserIP()
                
                setTimeout(() => {
                    crashWebsite()
                }, 200)
            }
    
    
            if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                eightform.style.display = 'none'
                therake.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
                question9()
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
        static.classList.remove('staticevent')
        }, {once: true})
        eight = false
        nine = true
        }

    } else if (nine === true) {
        if ( selectedAnswers1.has('1') && selectedAnswers1.has('2') && !selectedAnswers1.has('3') && !selectedAnswers1.has('4') && delay === false) {
            answer = ''
            ninethone = false
            tenthone = true
            setTimeout(() => {
                ninethform.style.display = 'none'
                submit.style.display = 'none'
                scream.style.display = 'none'
                jigsaw.style.display = 'none'
                slenderman.style.display = 'none'
                smiledog.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                question10()
                static.classList.remove('staticevent')
            }, {once: true})


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)

            nine = false
            ten = true
        }


        else if (!selectedAnswers.has('1') && !selectedAnswers.has('2') && selectedAnswers.has('3') && 
        selectedAnswers.has('4') && delay === false) {
            answer = '';
            lives -= 1;
            ninethone = false
            tenthone = true
            if (lives === 0) {
                jumpscare.style.display = 'block'
    
                answer = '';
                audio1.pause()
                jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                jumpscaresound.play()
                jumpscaresound.volume = '1.0'
                displayUserIP()
                
                setTimeout(() => {
                    crashWebsite()
                }, 200)
            }
    
    
            if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                ninethform.style.display = 'none'
                scream.style.display = 'none'
                jigsaw.style.display = 'none'
                slenderman.style.display = 'none'
                smiledog.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
                question10()
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
        static.classList.remove('staticevent')
        }, {once: true})
        nine = false
        ten = true
        }

    } else if (ten === true) {
        // Add these debug logs to see what's being compared
        console.log('User answer:', answer);
        console.log('Expected answer:', remembertext);
        
        if (answer.toLocaleLowerCase() === remembertext.toLocaleLowerCase() && delay === false) {
            console.log('Answer matched!');
            answer = ''
            tenthone = false
            eleventhone = true
            setTimeout(() => {
                tenthform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
            }, 500)
            static.addEventListener('animationend', function() {
                end()
                backgroundmusic.pause()
                goodending.play()
                static.classList.remove('staticevent')
            }, {once: true})


            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext1()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)

            ten = false
            eleven = true
        }
    }

    else if (answer.toLocaleLowerCase() !== remembertext.toLocaleLowerCase() && delay === false) {
            answer = '';
            lives -= 1;
            tenthone = false
            eleventhone = true
            if (lives === 0) {
                jumpscare.style.display = 'block'
    
                answer = '';
                audio1.pause()
                jumpscaresound.currentTime = 17; // Set the audio to start at 17 seconds
                jumpscaresound.play()
                jumpscaresound.volume = '1.0'
                displayUserIP()
                
                setTimeout(() => {
                    crashWebsite()
                }, 200)
            }
    
    
            if (firstheart === true) {
                positionEyes();
                heart3.classList.add('blink');
                heart3.addEventListener('animationend', function() {
                    heart3.classList.remove('blink');
                    heart3.style.display = 'none'; // Hide heart1 after blinking
                    heart1.style.gridColumn = '11/13'
                    heart2.style.gridColumn = '9/11'
                    heart2.style.marginLeft = '0%'
                    firstheart = false
                    secondheart = true
                }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs
            } else if (secondheart === true) {
                heart1.classList.add('blink');
                heart1.addEventListener('animationend', function() {
                    heart1.classList.remove('blink');
                    heart1.style.display = 'none'; // Hide heart2 after blinking
                    heart2.style.gridColumn = '10/12'
                    secondheart = false
                    thirdheart = true
                    fadeAudio(audio1, audio1.volume, 0, 2000); // Fade out over 2 seconds
                    setTimeout(() => {
                        fadeAudio(whisper1, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                        fadeAudio(whisper2, 0, 1.0, 1000); // Fade in to 50% volume over 1 second
                    }, 2000)
                }, { once: true });
            } else if (thirdheart === true) {
                heart2.classList.add('blink');
                heart2.addEventListener('animationend', function() {
                    heart2.classList.remove('blink');
                    heart2.style.display = 'none'; // Hide heart3 after blinking
                    thirdheart = false
                }, { once: true });
            }
            setTimeout(() => {
                midblack.style.display = 'block'
                firstform.style.display = 'none'
                submit.style.display = 'none'
                questionsdisplay.textContent = ''
                midtext2()
            }, 800)

            setTimeout(() => {
                questionsdisplaymid.textContent = ''
                midblack.style.display = 'none'
            }, 3900)
            
        static.addEventListener('animationend', function() {
            midblack.style.display = 'none'
        static.classList.remove('staticevent')
        }, {once: true})
        ten = false
        eleven = true
        }
}




const full = document.querySelector('.full')




function resetQuiz() {
    location.reload();
}

console.log('Current lives:', lives);
console.log('First heart:', firstheart);
console.log('Second heart:', secondheart);
console.log('Third heart:', thirdheart);

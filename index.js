let chooseChar = []
const charactersA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbolsA = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const numbersA = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let passLength = 15
let passArray = []
let password = ""
let op1El = document.getElementById("op1-el")
let op2El = document.getElementById("op2-el")
let charLengthEl = document.getElementById("charLength")
let textEl = document.getElementById("textCharLength")
 

charLengthEl.addEventListener("click", function() {
    textEl.value = charLengthEl.value
    passLength = charLengthEl.value
})

// Returns a random character from array
function randomChar() {
    return Math.floor(Math.random()*chooseChar.length)
}

// Returns a passaword in form of an array of characters
function generatePassword() {
    let symCheck = document.getElementById("symbols").checked; 
    let numCheck = document.getElementById("numbers").checked; 

    if (symCheck === true && numCheck === false) {
        chooseChar = charactersA.concat(symbolsA)

        for(let i = 0; i < passLength; i++) {
            let char = chooseChar[randomChar()]
            passArray.push(char)
        }
        chooseChar = []
        password = passArray.join('')
        return password 

    } else if (symCheck === false && numCheck === true) {
        chooseChar = charactersA.concat(numbersA)

        for(let i = 0; i < passLength; i++) {
            let char = chooseChar[randomChar()]
            passArray.push(char)
        }
        chooseChar = []
        password = passArray.join('')
        return password 

    } else if (symCheck === false && numCheck === false) {
        chooseChar = charactersA
        
        for(let i = 0; i < passLength; i++) {
            let char = chooseChar[randomChar()]
            passArray.push(char)
        }
        chooseChar = []
        password = passArray.join('')
        return password 

    } else {
        chooseChar = charactersA.concat(numbersA).concat(symbolsA)
        for(let i = 0; i < passLength; i++) {
            let char = chooseChar[randomChar()]
            passArray.push(char)
        }
        chooseChar = []
        password = passArray.join('')
        return password 
    } 
}

// Listens to a click and generates 2 passwords
generate.addEventListener("click", function() {
    op1El.textContent = generatePassword()
    passArray = []   
    op2El.textContent = generatePassword()
    passArray = []   
})

// Listens to a click and copies to clipboard
op1El.addEventListener("click", function() {
    let copyText = document.getElementById("op1-el").innerHTML
    navigator.clipboard.writeText(copyText); 
})

op2El.addEventListener("click", function() {
    let copyText = document.getElementById("op2-el").innerHTML
    navigator.clipboard.writeText(copyText); 
})
let enterTextInput = document.getElementById("enterText");
let enterText1Input = document.getElementById("enterText1");
let shiftInput = document.getElementById("shift");
let encryptedInput = document.getElementById("cipher");

let original = enterTextInput.value;
let original1 = enterText1Input.value;

enterTextInput.addEventListener("input", characterEntered, false);
enterText1Input.addEventListener("input", characterEntered, false);
shiftInput.addEventListener("input", numberEntered, false);
encryptedInput.addEventListener("input", characterEntered, false);

function characterEntered(e) {
    original = enterTextInput.value.toLowerCase().replace(/[^a-z]/g, '');
    original1 = enterText1Input.value.toLowerCase().replace(/[^a-z]/g, '');
    startEncryption();
}

function numberEntered(e) {
    startEncryption();
}

function startEncryption() {
    let encrypted = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;

    for (letter of original) {
        encrypted += shiftLetter(letter, shift);
    }

    for (letter of original1) {
        encrypted += shiftLetterP(letter, shift);
    }

    encryptedInput.value = encrypted;
}

function shiftLetter(letter, shift) {
    let newLetter = "";

    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + (shift % 26);

    if (newLetterCode < 97) {
        newLetterCode += 26;
    } else if (newLetterCode > 122) {
        newLetterCode -= 26;
    }

    newLetter = String.fromCharCode(newLetterCode);

    return newLetter;
}

function shiftLetterP(letter, shift) {
    let newLetter = "";

    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode - (shift % 26);

    if (newLetterCode < 97) {
        newLetterCode += 26;
    } else if (newLetterCode > 122) {
        newLetterCode -= 26;
    }

    newLetter = String.fromCharCode(newLetterCode);

    return newLetter;
}

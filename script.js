const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const formatText = str => {
    return str.replaceAll(/[\s\W^_]/g, "").trim().toLowerCase();
}

const writeBackwords = str => {
    return str.split("").reverse().join("");
}

const isPalindrome = (formatedText, backwordsText) => {
    return formatedText === backwordsText;
}

const writeResult = (str, isPalindrom) => {
    resultText.innerHTML = isPalindrom ? `${str} is a palindrome` : `${str} is not a palindrome`;
}

checkButton.addEventListener("click", (e) => {
    const text = textInput.value;
    const formatedText = formatText(text);
    const formatedTextBackwords = writeBackwords(formatedText);
    const isTextPalindrome = isPalindrome(formatedText, formatedTextBackwords);
  if(text === "") {
    alert("Please input a value");
  } else {
    writeResult(text, isTextPalindrome);
  }
})
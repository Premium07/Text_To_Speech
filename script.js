const input = document.querySelector("input");
const btn = document.querySelector("button");

const convert = () => {
    btn.addEventListener("click", () => {
        const text = input.value;
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    })
}

convert();
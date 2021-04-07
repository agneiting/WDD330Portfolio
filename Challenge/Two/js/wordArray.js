var wordsArray = [
    "JavaScript",
    "Captain",
    "Cement",
    "Tangerine",
    "Reunited",
    "Development",
    "Programming",
    "Design",
    "Statement",
    "Mountain",
    "Sequence",
    "Occasion",
    "Syndrome",
    "Privilege",
    "Evolution",
    "Edition",
]

let answer = '';

export function randomWord() {
    answer = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return answer;
}
let randomColor = null;
let colorCodeContainer = document.querySelector(".color-code");
let optionsContainer = document.querySelector(".options-container");
let scoreSpan = document.getElementById("score");
let score = 0;
scoreSpan.innerText = `${score}`;
function incrementScore(){
    score += 1;
    scoreSpan.innerText = `${score}`;
}
function validateResult(event){
    const selectedColor = `${event.target.style.backgroundColor}`;
    if(selectedColor === randomColor){
        incrementScore();
        startGame();
    }
    else{
        score = 0;
        scoreSpan.innerText = `${score}`;
        startGame();
    }
}
function generateRandomNumberBetween(min,max){
    return min + Math.floor(Math.random() * (max-min+1))
}
function generateRandomColorRGB(){
    const red = generateRandomNumberBetween(0,255);
    const green = generateRandomNumberBetween(0,255);
    const blue = generateRandomNumberBetween(0,255);
    return `rgb(${red}, ${green}, ${blue})`;
}
function startGame(){
    optionsContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;
    const ans_index = generateRandomNumberBetween(1,6);
    for(let i=1; i<=6; i++){
        let div = document.createElement('div');
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.margin = "5px"
        div.style.borderRadius = "10px"
        div.style.backgroundColor = i === ans_index ? randomColor : generateRandomColorRGB();
        optionsContainer.append(div);
        div.addEventListener("click", validateResult)
    }
    
}
window.addEventListener('load', () => {startGame()})
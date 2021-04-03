let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "down";

function setBackground(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function drawSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function startGame(){
    setBackground();
    drawSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    switch(direction){
        case "up":
            snakeY -= box;
            break;
        case "down":
            snakeY += box;
            break;
        case "left":
            snakeX -= box;
            break;
        case "right":
            snakeX += box;
            break;
    }

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}
let game = setInterval(startGame, 100);
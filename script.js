let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "down";
let screenWidth = box * 16;
let screenHeight = box * 16;

function setBackground(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, screenWidth, screenWidth);
}

function drawSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown',update);

function update(event){
    switch(event.keyCode){
        case 37:
            if(direction != "right") direction = "left";
            break;
        case 38:
            if(direction != "down") direction = "up";
            break;
        case 39:
            if(direction != "left") direction = "right";
            break;
        case 40:
            if(direction != "up") direction = "down";
            break;
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
            if(snakeY < 0) snakeY = screenHeight ;
            break;
        case "down":
            snakeY += box;
            if(snakeY > (screenHeight-box)) snakeY = 0; 
            break;
        case "left":
            snakeX -= box;
            if(snakeX < 0) snakeX = screenWidth;
            break;
        case "right":
            snakeX += box;
            if(snakeX > (screenWidth-box)) snakeX = 0;
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
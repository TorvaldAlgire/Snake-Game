const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const row = canvas.height / scale;
const col = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();  
        
        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        snake.checkCollision();
    }, 250); // Not sure what this is doing here, what does the 250 mean?
}());

window.addEventListener('keydown', ((evt => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
})));
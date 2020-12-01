const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const row = canvas.height / scale;
const col = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();
    snake.draw();
}());
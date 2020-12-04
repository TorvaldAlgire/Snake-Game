function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * row - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * col - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}
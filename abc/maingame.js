var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
//context 중요

class player{
    constructor(position_x,position_y,radius,color){
        this.position_x = position_x;
        this.position_y = position_y;
        this.radius = radius;
        this.color = color;
    }

    draw() 
    {
        context.beginPath();
        context.arc(this.position_x, this.position_y, this.radius, 0, 2*Math.PI);
        context.fillstyle = this.color;
        context.fill();
        context.closePath();
    }
}

var char_player = new player(100, 100, 20, 'skyblue');
char_player.draw();

var bullets = [];

canvas.onclick(ev)
[
    let 
]
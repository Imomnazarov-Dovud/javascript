//координати
var click2 = function (event) {
    console.log(event.pageX + " " + event.pageY);
 };

 $("html").click(click2);
 //початок
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 //Налаштування


 var width = canvas.width;
 var height = canvas.height;


 var score = 0;


 var drawScore = function () {
    ctx.font = "60px Caurier";
    ctx.fillStyle = "Black"
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    ctx.fillText("Score: " + score, width - 200, height / 9);
 }


 var gameOver = function () {
    clearInterval(intervalId);
    ctx.font = "60px Caurier";
    ctx.textAlign = "cener";
    ctx.textBaseline = "middle";
    ctxfillText("GAME OVER", width / 2, height / 2);
 };


 var Position = function(x,y) {
    this.x = x;
    this.y =y;
 };


 //Людина
 //намалювати
 var x1;
 var y1;

 function Draw() {
    this.x = 15;
    this.y = 10;
    this.position = new Position(this.x, this.y)
 }
 Draw.prototype.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x+25, this.y);
    ctx.lineTo(this.x+25, this.y+50);
    ctx.lineTo(this.x-25, this.y+50);
    ctx.lineTo(this.x-25, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.fill();
 }
 Draw.prototype.move = function () {
    if (this.x < 0) {
       this.x = 0;
    } else if (this.x > 1250) {
       this.x = 1250;
    }
    if (this.y < 0) {
       this.y = 0;
    } else if (this.y > 450) {
       this.y = 450;
    }while (this.y < 260) {
      this.y++;
    }
 }


 Draw.prototype.setDirection = function (direction) {
    if (direction === "left") {
       this.x = this.x - 5;
    } else if (direction === "right") {
       this.x = this.x + 5;
    } else if (direction === "up") {
       this.y = this.y - 150;
    }
    x1 = this.x;
    y1= this.y;
 }


 //зробити так щоб людина брала монету
 function takeCoin() {
    if (x1 === x2 && y1 < y2) {
          color = false;
          score=+1;
    }
 };

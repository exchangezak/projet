//recuperer l'element canvas du dom 
let canvas=document.querySelector("#myCanvas");
let ctx=canvas.getContext('2d');
let ballradius=10;
let x=canvas.width/2;
let y=canvas.height - 30;
let dx=6;
let dy=-6;
let paddleHeight=20;
let paddleWidth=250;
let paddleX=(canvas.width - paddleWidth)/2;
console.log(paddleX)
let rigthPressed=false;
let leftPressed=false;
let brickRowCount=6;
let brickColumnCount=13;
let brickWidth=80;
let brickHeight=30;
let brickPadding=5;
let brickOffsetLeft=50;
let brickOfsetTop=30;
let score=0;
let lives=3;
let bricks=[];
for(let i=0;i<brickColumnCount;i++){
    bricks[i]=[];
    for(let j=0;j<brickRowCount;j++){
        bricks[i][j]={x:0,y:0,status:1};
        console.log(bricks[i][j]);
    }
}
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);
document.addEventListener("mousemove",mouseMoveHandler,false);
function keyDownHandler(e){
    if(e.keyCode==39){
        rigthPressed=true;
    }
    if(e.keyCode==37){
        leftPressed=true;
    }
}
function keyUpHandler(e){
    if(e.keyCode==39){
        rigthPressed=false
    }
    if(e.keyCode==37){
        leftPressed=false;
    }
}
function mouseMoveHandler(e){
    let relX=e.clientX - canvas.offsetLeft;
    if(relX>0 && relX<canvas.width){
        paddleX=relX - paddleWidth/2;
    }
}

function drawScores(){
    ctx.font="16px Arial";
    ctxfillStyle="blue";
    ctx.fillText("Score: " + score, 8,20);
}
function drawLives(){
    ctx.font="16px Arial";
    ctxfillStyle="blue";
    ctx.fillText("Lives:" + lives,canvas.width - 65,20);

}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.closePath();
}
function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballradius,0,Math.PI*2);
    ctx.fillStyle="pink";
    ctx.fill();
    ctx.closePath();
}
function collDet(){
    for(let i=0;i<brickColumnCount;i++){
        for(let j=0;j<brickRowCount;j++){
            let b=bricks[i][j];
            if(b.status==1){
                if(x>b.x && x<b.x+brickWidth &&y>b.y &&y<b.y+brickHeight){
                    dy=-dy;
                    b.status=0;
                    score+=7;
                    if(score==brickRowCount*brickColumnCount*7){
                        alert("you won")
                        document.location.reload();
                    }
                }
            }
        }
    }
}
function drawBricks(){
    for(let i=0;i<brickColumnCount;i++){
        for(let j=0;j<brickRowCount;j++){
            if(bricks[i][j].status===1){
                let brickx=(i*(brickWidth + brickPadding))+brickOffsetLeft;
                let bricky=(j*(brickHeight + brickPadding))+brickOfsetTop;
                bricks[i][j].x=brickx;
                bricks[i][j].y=bricky;
                ctx.beginPath();
                ctx.rect(brickx,bricky,brickWidth,brickHeight);
                ctx.fillStyle="blue";
                ctx.fill();
                ctx.closePath();


            }
        }
    }
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBricks();
    drawBall();
    drawLives();
    drawScores();
    drawPaddle();
    collDet();
 
    if(x+ dx > canvas.width - ballradius || x + dx < ballradius){
        dx = -dx;
    }
    if(y + dy < ballradius){
        dy= -dy;
    }
    else if(y + dy >canvas.height - ballradius){
        if(x>paddleX && x<paddleX + paddleWidth){
            dx=8*((x-(paddleX+paddleWidth/2))/paddleWidth);
            dy=-dy;
        }
        else{
        lives--;
        if(!lives){
            alert("game over");
            document.location.reload();
        }
        else{
            x=canvas.width/2;
            y=canvas.height-30;
            dx=6;
            dy=-6;
        }
    }
}
    if(rigthPressed && paddleX < canvas.width - paddleWidth/2){
        paddleX+=14;
    }
    if(leftPressed && paddleX> -paddleWidth/2){
        paddleX-=14;
    }
    x+=dx;
    y+=dy;
    requestAnimationFrame(draw);
}
draw();


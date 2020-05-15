//recuperer l'element canvas du dom 
let canvas=document.querySelector("#myCanvas");
let ctx=canvas.getContext('2d');
// console.log(ctx)
//creation des variables dont jen ai besoin et je leur donner les valeurs
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
        // console.log(bricks[i][j]);
    }
}
// ajouter des ecouteurs sur les evenments qui va faire lutilsateur 
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);
document.addEventListener("mousemove",mouseMoveHandler,false);
//fonctions pour capter les touches de clavier fleche gauche et droite 
function keyDownHandler(e){
    if(e.keyCode==39){
        rigthPressed=true;
    }
    if(e.keyCode==37){
        leftPressed=true;
    }
}
//fonction quand l'utillisateur enleve ses mains sur les deux touches gauche droit
function keyUpHandler(e){
    if(e.keyCode==39){
        rigthPressed=false
    }
    if(e.keyCode==37){
        leftPressed=false;
    }
}
//fonction pour capter le mouvement de la souris de lutilisateur
function mouseMoveHandler(e){
    let relX=e.clientX - canvas.offsetLeft;
    if(relX>0 && relX<canvas.width){
        paddleX=relX - paddleWidth/2;
    }
}
//fonction pour afficher le score d'utilisateur
function drawScores(){
    ctx.font="16px Arial";
    ctxfillStyle="blue";
    ctx.fillText("Score: " + score, 8,20);
}
// fonction des vies qui possede l'utilisateur 
function drawLives(){
    ctx.font="16px Arial";
    ctxfillStyle="blue";
    ctx.fillText("Lives:" + lives,canvas.width - 65,20);

}
//fonction pour le bloc qui lance la balle
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.closePath();
}
//fonction pour la balle 
function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballradius,0,Math.PI*2);
    ctx.fillStyle="pink";
    ctx.fill();
    ctx.closePath();
}
//fonction qui va ajouter le score et manimpuler les vies si lutilisateur perd ou gagne 
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
//fonction pour les blocks qui contient le jeu
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
//fonction qui contient ttes les fonctions
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBricks();
    drawBall();
    drawLives();
    drawScores();
    drawPaddle();
    collDet();
 /*si la largeur du canvas + dx=6 superier a la largeur de canvas moins la balle radius ou la largeur du canvas plus dx=6 inferieur de la balleradius
  aloors dx sera decrementer si la condition est vrai*/
    if(x+ dx > canvas.width - ballradius || x + dx < ballradius){
        dx = -dx;
    }
// si la longuer du canvas plus dy=-6 inferrieru de la balle radius alors dy sera decrementer a chaque fois que la condition se realise

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
//ici invocation de la fonction draw
draw();


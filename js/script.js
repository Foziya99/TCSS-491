const canvas =document.getElementById("canvas1");
const ctx= canvas.getContext('2d');
canvas.width=800;
canvas.height=500;

const keys=[];

const player ={
    x:200,
    y:300,
    width:40,
    height:72,
    frameX:0,
    frameY:0,
    speed: 1,
    moving:false

};
const playerSprite=new Image();
playerSprite.src="chewie.png";
const background=new Image();
background.src="background.png";

function drawSprite(img,sX,sY,sW,sH,dX, dY,dW,dH){
    ctx.drawImage(img, sX,sY,sW,sH,dX,dY,dW,dH)
}

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background, 0,0, canvas.width, canvas.height);
    drawSprite(playerSprite,player.width*player.frameX,player.height*player.frameY,player.width,player.height,player.x,player.y,player.width, player.height);
    movePlayer();
    requestAnimationFrame(animate);

}
animate();
window.addEventListener("keydown",function(e) {
     keys[e.keyCode]=true;
     player.moving= true;
         
});
window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    player.moving=false;

});
function movePlayer (){
    let m = Math.floor(Math.random()* 3);
    if(m==0)
        moveUp();
    if(m==1)
        moveDown();
    if(m==2)
        moveLeft();
    if(m==3)
        moveRight();
     }
     
     function moveUp(){
         player.y -= player.speed;
         player.frameY=3;
     }
     function moveDown(){
        player.y += player.speed;
        player.frameY=0;
     }
     function moveLeft(){
        player.x += player.speed;
        player.frameY=2;
     }
     function moveRight(){
        player.x -= player.speed;
        player.frameY=1; 
     }
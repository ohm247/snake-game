var edges 
var group 
function preload(){
  
  
}

function setup() {
  createCanvas(800,400);
  

  snake = createSprite(100,200,20,20)
group = new Group()

   edges = createEdgeSprites()
 
   apple = createSprite(300,200,10,10)
   apple.shapeColor = "red"

  group.add(snake)

}

function draw() {
  background(255,255,255);  
  background("blue")
  //snake.bounceOff(edges)
  if(keyDown(UP_ARROW)){
    snake.velocityY = -5;
    snake.velocityX = 0;
  }

  if(keyDown(DOWN_ARROW)){
    snake.velocityY = 5;
    snake.velocityX = 0;
  }

  if(keyDown(RIGHT_ARROW)){
    snake.velocityX = 5;
    snake.velocityY = 0;
  }

  if(keyDown(LEFT_ARROW)){
    snake.velocityX = -5;
    snake.velocityY = 0;
  }


  
  
  for(var i = 0; i<20; i++){
    if(snake.isTouching(apple)){
      apple.x = random(10,380)
      apple.y = random(380,10)
      var s = createSprite(200,200,20,20)
      group.add(s)
    }
  }
  for(var j = group.length - 1; j > 0; j--){
    group.get(j).x = group.get(j - 1).x
    group.get(j).y = group.get(j-1).y
  }

  drawSprites();

  if(group.isTouching(edges)){
    textSize(50)
    text("Gameover",50,50)
    //apple.destroy()
//group.destroyEach()
apple.visible = false
group.visible = false
group.setVelocityEach(0,0)



  }
}

//https://editor.p5js.org/aparna19000/sketches/1en--clMV
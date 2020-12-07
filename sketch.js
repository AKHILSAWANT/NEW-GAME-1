var player;
var enemy;
var enemyGroup;
var virus;
var shoot;
var bullet;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var enemyobs;
var enemyobs2;
var enemyobs3;
var bulletcount = 0
var bulletGroup;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(width/2, height/2, 10, 10)
  enemy = createSprite(width/2-100, height/2, 10, 10)
  enemy.velocityY = -1;
  enemyobs = createSprite(width/2-100, height/2-150, 10, 10)
  enemyobs.visible = true
  enemyobs2 = createSprite(width/2-200, height/2-150, 10, 10)
  virus = createSprite(width/2+100, height/2, 10, 10)
  shoot = createButton("Shoot")
  shoot.position(width/2+300, height/2+200)
  obs1 = createSprite(width/2+400, height/2+100, 30, 25)
  obs2 = createSprite(width/2+300, height/2-100, 20, 35)
  obs3 = createSprite(width/2-300, height/2+200, 25, 30)
  obs4 = createSprite(width/2-400, height/2-200, 30, 30)
  obs5 = createSprite(width/2-300, height/2, 20, 15)

  bulletGroup = new Group()
  enemyGroup = new Group()
  enemyGroup.add(enemy)

  player.shapeColor = "blue"
  enemy.shapeColor = "yellow"
  virus.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  
  if (keyDown("w")){
    player.y = player.y-2
  }

  if (keyDown("s")){
    player.y = player.y+2
  }

  if (keyDown("a")){
    player.x = player.x-2
  }

  if (keyDown("d")){
    player.x = player.x+2
  }

  shoot.mousePressed(()=>{
    bullet = createSprite(player.x, player.y, 15, 5)
    bulletGroup.add(bullet)
    bullet.shapeColor = "red"
    bullet.velocityX = -2
    bulletcount = bulletcount+1
  });

  if (bulletGroup.isTouching(enemy)){
    enemy.destroy()
    bulletGroup.destroyEach()
  }

  if (bulletcount === 3){
    shoot.hide()
  }

  if (player.isTouching(virus) || player.isTouching(enemy)){
    player.destroy();
    }

  if (enemyGroup.isTouching(enemyobs)){
    enemyGroup.bounceOff()
  }

   drawSprites()
}
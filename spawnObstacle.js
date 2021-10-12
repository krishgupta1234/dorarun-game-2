function spawnobstacles(){
    if(frameCount % 240 === 0){
    obstacle = createSprite(1400,500,30,60)
      obstacle.velocityX = -4; 
     var rand = Math.round(random(1,6))
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.4;
      obstacle.lifetime = 400;
      obstacleGroup.add(obstacle)
obstacle.debug = true
obstacle.setCollider("rectangle",0,0,150,350)
    }
  }

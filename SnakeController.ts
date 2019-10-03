import WorldModel from './WorldModel'
import Snake from './Snake'

class SnakeController{
  private snakeWorld
  private slitherer

  constructor(w:WorldModel, s:Snake){
    this.snakeWorld = w
    this.slitherer = s
  }

  private turnSnakeLeft(){
    this.slitherer.turnLeft

  }

  private turnSnakeRight(){
    this.slitherer.turnRight
  }

  public get snakePosition(){
    return this.slitherer.position
  }

  public get snakeDirection(){
    return this.slitherer.direction
  }

  public get worldWidth(){
    return this.snakeWorld.widthgetter
  }

  public worldHeight(){
    return this.snakeWorld.heightgetter
  }
}


export default SnakeController;
import WorldModel from './WorldModel'
import Snake from './Snake'

/** Snake Controller Class */
class SnakeController{
  private snakeWorld
  private slitherer
  /**
   * Creates an instance of the snake controller class.
   * @param w - Represents the world model class
   * @param s - Represents the snake class
   */
  constructor(w:WorldModel, s:Snake){
    this.snakeWorld = w
    this.slitherer = s
  }

  /**
   * Calls turn left on slitherer.
   */
  public turnSnakeLeft(){
    this.slitherer.turnLeft()

  }

  /** 
   * Calls turn right on slitherer.
   */
  public turnSnakeRight(){
    this.slitherer.turnRight()
  }

  /**
   * Gets slitherer's position.
   */

  public get snakePosition(){
    return this.slitherer.position()
  }

  /**
   * Gets slitherer's direction.
   */
  public get snakeDirection(){
    return this.slitherer.direction()
  }

  /**
   * Gets the world's width.
   */
  public get worldWidth(){
    return this.snakeWorld.widthgetter()
  }

  /**
   * Gets the world's height.
   */
  public worldHeight(){
    return this.snakeWorld.heightgetter()
  }
}


export default SnakeController;
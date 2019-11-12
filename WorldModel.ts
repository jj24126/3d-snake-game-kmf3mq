import Snake from './Snake'

/**World Model Class */
class WorldModel{
  private snk:Snake
  private width:number
  private height:number
  private view
/**
 * Creates a new World Model
 * @param s - Represents the snake class
 */
 constructor(s:Snake){
    this.snk = s
    this.width = 10
    this.height = 10
    this.view = null
  }

  /**
   * Calls the snake's move method
   * @param steps - Retrieve's the snake.
   */
  public update(steps){
    this.snk.move(steps)
  }

  /**
   * Gets the snake.
   */
  public get snake(){
    return this.snk
  }

  /**
   * Gets the width.
   */
  public get widthgetter(){
    return this.width
  }

  /**
   * Gets the height.
   */

  public get heightgetter(){
    return this.height 
  } 

  
}


export default WorldModel;

import Snake from './Snake'

/**World Model Class */
class WorldModel{
  private snk:Snake
  private width
  private height
  private view
/**
 * Creates a new World Model
 * @param s - Represents the snake class
 */
 constructor(s:Snake){
    this.snk = s
    this.width
    this.height
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

  public set View (){

  }
}


export default WorldModel;

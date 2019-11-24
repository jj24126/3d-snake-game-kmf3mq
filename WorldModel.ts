import Snake from './Snake'
import display from './display'
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
    this.width = 
    this.height = 
    this.view = null
  }

  /**
   * Calls the snake's move method
   * @param steps - Retrieve's the snake.
   */
  public update(steps){
    this.snk.move(steps)
    if(this.view !== null) {display (this.view)}
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
  public get currentWidth(){
    return this.width
  }

  /**
   * Gets the height.
   */

  public get currentHeight(){
    return this.height 
  } 

  public set View(v:this.view){
    this.view = this.view

  }

  
}


export default WorldModel;

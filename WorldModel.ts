import Snake from './Snake'
import IView from './IView'
/**World Model Class */
class WorldModel{
  private snk:Snake
  private width:number
  private height:number
  private myView:IView | null
/**
 * Creates a new World Model
 * @param s - Represents the snake class
 */
 constructor(s:Snake){
    this.snk = s
    this.width = 10
    this.height = 10
    this.myView= null
  }

  /**
   * Calls the snake's move method
   * @param steps - Retrieve's the snake.
   */
  public update(steps){
    this.snk.move(steps)
    if(this.myView !== null) {this.myView.display(this)}
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

  /**
   *  Sets the View to the one that is passed.
   * @param v -The view to set it to
   */
  public set View(v:IView){
    this.myView = v

  }

  
}


export default WorldModel;

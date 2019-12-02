import Snake from './Snake'
import IView from './IView'
/**World Model Class */
class WorldModel{
 // private snk:Snake
  private allSnakes
  private width:number
  private height:number
  private allViews
  //private myView:IView | null
  
/**
 * Creates a new World Model
 * @param s - Represents the snake class
 */
 constructor(/*s:Snake*/){
    //this.snk = s
    this.allSnakes = []
    this.width = 40
    this.height = 40
    this.allViews = []
    //this.myView = null
  }

  /**
   * Calls the snake's move method
   * @param steps - Retrieve's the snake.
   */
  public update(steps){
    this.allSnakes.move(steps)
    if(this.allViews !== null) {this.allViews.display(this)}
  }

  public get allSnks() {
    return this.allSnakes
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

  public addSnakes(s) {
    this.allSnakes.push(s)
  }

  public addView(v) {
    this.allViews.push(v)
  }


 /* public set View(v:IView){
    this.myView = v

  }*/

  
}


export default WorldModel;

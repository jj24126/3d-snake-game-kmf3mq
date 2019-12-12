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
    this.allSnakes = []
    this.width = 100
    this.height = 100
    this.allViews = []
  }

  /**
   * Calls the snake's move method
   * @param steps - Retrieve's the snake.
   */
  public update(steps){

    let collidedSnks = []

    for(let h = 0; h < this.allSnks.length; h++){
      if(this.allSnks[h].didCollide(this.allSnks) && collidedSnks.some(this.allSnks[h]) === false)
      {collidedSnks.push(this.allSnks[h])}
    }
    
    for(let k = 0; k < collidedSnks.length; k++) {
      this.allSnakes.splice(this.allSnakes.indexOf(collidedSnks[k]), 1)
    }
    
    for(let b = 0; b < this.allSnks.length; b++){
      this.allSnakes[b].move(steps)
    }

    for(let n = 0; n < this.allViews.length; n++){
     {this.allViews[n].display(this)}
    }
  }

  /**
   * Returns this.allSnakes
   */
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

  /**
   * Adds snakes to allSnakes
   * @param s - the snake to add
   */

  public addSnakes(s) {
    this.allSnakes.push(s)
  }

  /**
   * Adds views to allViews
   * @param v -the view to add
   */

  public addView(v) {
    this.allViews.push(v)
  }
  
}


export default WorldModel;

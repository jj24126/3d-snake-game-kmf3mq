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

    let collidedSnks = []

    for(let h = 0; h < this.allSnks.length; h++){
      if(this.allSnks[h].didCollide() && collidedSnks.includes(this.allSnks[h]) === false)
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

  public addView(v) {
    this.allViews.push(v)
  }


 /* public set View(v:IView){
    this.myView = v

  }*/

  
}


export default WorldModel;

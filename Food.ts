import Point from './Point'
import IActor from './IActor'

/**Class representing Food */

class Food implements IActor{
  currentPosition:Point
  isCurrentlyActive

  /**
   * Creates a new Food object
   * @param x- the x coordinate of the Food's position
   * @param y- the y coordinate of the Food's position
   */
  constructor(x,y){
    this.currentPosition = new Point(x,y) 
    this.isCurrentlyActive = true
  }

  public update(){

  }
 
 /**
  * sets the the iscurrentlyActive property to false
  */
  public eat(){
    this.isCurrentlyActive = false
  }

  /**
   * returns the currentPosition property
   */
  public get position(){
    return this.currentPosition

  }

  /**
   * returns the isCurrentlyActive property
   */
  public get isActive(){
    return this.isCurrentlyActive
  }

  /**
   * returns the string "food"
   */
  public get type(){
    return "food"
  }

}

export default Food;
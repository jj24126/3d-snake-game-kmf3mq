
/**Point class */
class Point{
  private xcoord:number
  private ycoord:number
  /**
   * Creates a new point.
   * @param x - The x-coordinate
   * @param y - The y-coordinate
   */
  constructor(x:number, y:number){
    this.xcoord = x
    this.ycoord = y
  }

  /**
   * Gets the x-coordinate
   */

  public get x(){
    return this.xcoord
  }

  /**
   * Gets the y-coordinate
   */

  public get y(){
    return this.ycoord
  }

  /**
   *  Returns true when this point's x & y are the same as p'same
   * @ parsm p - the p value
   */  
  public equals(p) {
    if(p.x === this.x && p.y ===this.y) {return true}
  }
}

export default Point;
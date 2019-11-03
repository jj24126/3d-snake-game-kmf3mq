
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
}

export default Point;
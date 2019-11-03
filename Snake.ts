import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

/**Class representing a Snake */
class Snake{
  private currentPosition:Point
  private currentDirection:number
  /**
   * Creates a Snake
   */
   constructor(){
    this.currentPosition = new Point(0,0)
    this.currentDirection = 1
  }

  /**
   * Moves the Snake
   * @param numMoves -  The number of moves to move the snake.
   */
  public move(numMoves:number){
    if(this.currentDirection === 0) {this.currentPosition = new Point(this.position.x, this.position.y + numMoves)}
    else if(this.currentDirection === 1) {this.currentPosition = new Point(this.position.x + numMoves, this.position.y)}
    else if(this.currentDirection === 2) {this.currentPosition = new Point(this.position.x, this.position.y - numMoves)}
    else if( this.currentDirection === 3) {this.currentPosition = new Point(this.position.x - numMoves, this.position.y)}
  }

  /**
   * Turns the snake left.
   */
   public turnLeft(){
    if(this.currentDirection === 0) {this.currentDirection = 3}
    else if(this.currentDirection === 1) {this.currentDirection = 0}
    else if(this.currentDirection === 2) {this.currentDirection = 1}
    else if(this.currentDirection === 3) {this.currentDirection = 2}
  }

  /**
   * Turns the snake right.
   */

  public turnRight(){
    if(this.currentDirection === 0) {this.currentDirection = 1}
    else if(this.currentDirection === 1) {this.currentDirection = 2}
    else if(this.currentDirection === 2) {this.currentDirection = 3}
    else if(this.currentDirection === 3) {this.currentDirection = 0}
  }

  /**
   * Gets the snake's current position
   */

  public get position(){
    return this.currentPosition
  }

  /**
   * Gets the snake's current direction
   */
  public get direction(){
    return this.currentDirection
  }
}


export default Snake;
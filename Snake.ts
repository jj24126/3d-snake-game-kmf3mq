import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

/**Class representing a Snake */
class Snake{
  private currentParts
  private currentDirection:number
  /**
   * Creates a Snake
   */
   constructor(startPosition:Point, size){
    this.currentParts = [startPosition]
    this.currentDirection = 1
  
    for (let b=1; b < this.currentParts.size - 1; b++) {
      this.currentParts.push(new Point(startPosition.x - b, startPosition.y));
    }
  }

  /**
   * Moves the Snake
   * @param numMoves -  The number of moves to move the snake.
   */
  public move(numMoves:number){

    for(let b = this.currentParts.length-1; b != 0; b--){
      this.currentParts[b] = this.currentParts[b-1]
    }


    if(this.currentDirection === 0) {this.currentParts[0] = new Point(this.position.x, this.position.y + numMoves)}
    else if(this.currentDirection === 1) {this.currentParts[0] = new Point(this.position.x + numMoves, this.position.y)}
    else if(this.currentDirection === 2) {this.currentParts[0] = new Point(this.position.x, this.position.y - numMoves)}
    else if( this.currentDirection === 3) {this.currentParts[0] = new Point(this.position.x - numMoves, this.position.y)}
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
    return this.currentParts[0]
  }

  /**
   * Gets the snake's current direction
   */
  public get direction(){
    return this.currentDirection
  }

  public didCollide(s){

    if(this.currentParts.position === (this.currentParts.slice(1)) || this.currentParts.position === s.slice(0))

      {return true}
    
    /*if(this.position(this.currentParts[0]) === (this.position(this.currentParts.slice(1))) || 
        this.position(s.slice(0)))

      {return true}*/
  }

  /**
   * Returns the whole snake, including the head
   */

  public get allParts(){
   return this.currentParts
  }

}


export default Snake;
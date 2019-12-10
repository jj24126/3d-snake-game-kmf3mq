import display from './display';
import Point from './Point';
import ICollidable from './ICollidable'
import IAcotr

// place your code on line 5 above the export statement below

/**Class representing a Snake */
class Snake implements ICollidable{
  private currentParts
  private currentDirection:number
  private isCurrentlyActive
  /**
   * Creates a Snake
   */
   constructor(startPosition:Point, size){
    this.currentParts = [startPosition]
    this.currentDirection = 1
    this.isCurrentlyActive = true
  
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

    if(this.currentParts.type != "snake") {
      this.currentParts.posiiton.equals(IActor.position)
      

    }

    else if(this.currentParts === s ){
      for(let b = this.currentParts.length - 1; b != 0; b--){
       if(this.currentParts.position.equals(s.currentParts[b])) {return true}
      }
      return false
    }

    else if(this.currentParts != s){
     for(let b = s.currentParts.length - 1; b >= 0; b--){
      if(this.currentParts.position === s.currentParts[b]) {return true}
     }
     return false
     
    }

    /*this.currentParts.position === this.currentParts[b]*/
  }

  /**
   * Returns the whole snake, including the head
   */

  public get allParts(){
   return this.currentParts
  }

  
  /**
   * Calls the move method
   */

  public update(){
    this.move
  }

  /**
   * Sets the isCurrentlyActive property to false
   */

  public die(){
    this.isCurrentlyActive = false
  }

  public get isActive(){
    return this.isCurrentlyActive
  }

  public get type(){
    return "snake"
  }

  public grow(){

    let tailEnd = this.currentParts[this.currentParts.length - 1];

    if(this.currentParts.direction = 0){this.currentParts.push(new Point(tailEnd.x, tailEnd.y+1))}

    else if(this.currentParts.direction = 1) {this.currentParts.push(new Point(tailEnd.x-1, tailEnd.y))}

    else if(this.currentParts.direction = 2) {this.currentParts.push(new Point(tailEnd.x, tailEnd.y-1))}

    else if(this.currentParts.direction = 3) {this.currentParts.push(new Point(tailEnd.x+1, tailEnd.y))}
  }
}


export default Snake;
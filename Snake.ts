import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

class Snake{
  private currentPosition:Point
  private currentDirection:number
   constructor(){
    this.currentPosition = new Point(0,0)
    this.currentDirection = 1
  }
  public move(numMoves:number){
    if(this.currentDirection === 0) {this.currentPosition = new Point(this.position.x, this.position.y + numMoves)}
    else if(this.currentDirection === 1) {this.currentPosition = new Point(this.position.x + numMoves, this.position.y)}
    else if(this.currentDirection === 2) {this.currentPosition = new Point(this.position.x, this.position.y - numMoves)}
    else if( this.currentDirection === 3) {this.currentPosition = new Point(this.position.x - numMoves, this.position.y)}
  }
  
   public turnLeft(){
    if(this.currentDirection === 0) {this.currentDirection = 3}
    else if(this.currentDirection === 1) {this.currentDirection = 0}
    else if(this.currentDirection === 2) {this.currentDirection = 1}
    else if(this.currentDirection === 3) {this.currentDirection = 2}
  }

  public turnRight(){
    if(this.currentDirection === 0) {this.currentDirection = 1}
    else if(this.currentDirection === 1) {this.currentDirection = 2}
    else if(this.currentDirection === 2) {this.currentDirection = 3}
    else if(this.currentDirection === 3) {this.currentDirection = 0}
  }

  public get position(){
    return this.currentPosition
  }

  public get direction(){
    return this.currentDirection
  }
}


export default Snake;
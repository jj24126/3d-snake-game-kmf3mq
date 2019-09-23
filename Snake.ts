
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
    if(this.currentDirection === 1) {this.currentPosition = this.currentPosition + numMoves}
    else if(this.currentDirection === -1) {this.currentPosition = this.currentPosition - numMoves}
  }
  public turn(){
    if(this.currentDirection === 1) {this.currentDirection = -1}
    else if(this.currentDirection === -1) {this.currentDirection = 1}
  }

  public turnLeft(){

  }

  public turnRight(){
    
  }

  public get position(){
    return this.currentPosition
  }
}


export default Snake;
import display from './display';

// place your code on line 5 above the export statement below

class Snake{
  private currentPosition:number
  private currentDirection:number
   constructor(){
    this.currentPosition = new Point()
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

class Point{
  public xcoord:number
  public ycoord:number
  constructor(){
    this.xcoord = 0
    this.ycoord = 0
  }

  public get xcor(){
    return this.xcoord
  }

  public get ycor(){
    return this.ycoord
  }
}




export default Snake;
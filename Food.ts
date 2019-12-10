import Point from './Point'
import IActor from './IActor'

class Food implements IActor{
  currentPosition:Point
  isCurrentlyActive

  constructor(x,y){
    this.currentPosition = new Point(x,y) 
    this.isCurrentlyActive = true
  }

  public update(){

  }

 public eat(){
    this.isCurrentlyActive = false
  }

  public get position(){
    return this.currentPosition

  }

  public get isActive(){
    return this.isCurrentlyActive
  }

  public get type(){
    return "food"
  }

}

export default Food;
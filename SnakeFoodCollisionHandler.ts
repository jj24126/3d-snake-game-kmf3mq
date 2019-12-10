import Snake from './Snake'
import Food from './Food'
import ICollisionHandler from './ICollisionHandler'

class SnakeFoodCollisionHandler implements ICollisionHandler{

  public applyAction(s:Snake,f:Food){
    f.eat()
    s.grow()
    

  }
}

import Snake from './Snake'
import Food from './Food'
import ICollisionHandler from './ICollisionHandler'

class SnakeFoodCollisionHandler implements ICollisionHandler{

  /**
   * Calls eat on the food object and calls grow on the snake
   * @param s - the snake
   * @param f - the food
   */

  public applyAction(s:Snake, f:Food){
    f.eat()
    s.grow()
  }
}

export default SnakeFoodCollisionHandler;

import Snake from './Snake'
import ICollisionHandler from './ICollisionHandler'

class SnakeSnakeCollisionHandler implements ICollisionHandler{

  /**
   * Calls the die method on the first snake in a snake collision with another Snake
   * @param s - the first Snake
   * @param s2 - the second snake
   */

  applyAction(s:Snake, s2:Snake){

    s.die()

  }

}

export default SnakeSnakeCollisionHandler;
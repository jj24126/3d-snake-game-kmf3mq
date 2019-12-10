import Snake from './Snake'
import ICollisionHandler from './ICollisionHandler'

class SnakeSnakeCollisionHandler implements ICollisionHandler{

  applyAction(s:Snake, s2:Snake){

    s.die()

  }

}

export default SnakeSnakeCollisionHandler;
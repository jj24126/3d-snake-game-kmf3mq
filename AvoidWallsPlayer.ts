
import Player from './Player'
import SnakeController from './SnakeController'

/**Avoid Walls Player class */
class AvoidWallsPlayer extends Player{
  /**
   * Creates a new instance of the avoid walls player class.
   */
  constructor(sc:SnakeController){
    super(sc)
  }

    /** 
     * Calls turnSnakeLeft / turnSnakeRight on sc, to avoid crashing into * the wall.
     */
    makeTurn(){
      
      if(this.sc.snakeDirection === 0 && this.sc.snakePosition(, this.sc.worldHeight - 1))
      
   
  }

}

export default AvoidWallsPlayer;
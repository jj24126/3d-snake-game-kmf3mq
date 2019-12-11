
import Player from './Player'
import SnakeController from './SnakeController'
import LRKeyInputHandler from './LRKeyInputHandler'

/**Class representing a HumanPlayer*/

class HumanPlayer extends Player{
  private controller:SnakeController
  private handler:LRKeyInputHandler

  /**
   * Creates a new HumanPlayer
   * @param sc - SnakeController
   * @param ih - LRKeyInputHandler
   */
  constructor(sc:SnakeController, ih:LRKeyInputHandler){
    super(sc)
    this.controller = sc 
    this.handler = ih
  }

  /**
   * Depending on the LRKeyInputHandler calls turnSnakeLeft on the SnakeController and calls resetLeftMove on the 
   * LRKeyInputHandler, or calls turnSnakeRight on the SnakeController and calls resetRightMove on the LRKeyInputHandler.
   */
  public makeTurn(){
    if(this.handler.madeLeftMove) {this.controller.turnSnakeLeft()
                                   this.handler.resetLeftMove() }
    else if(this.handler.madeRightMove) {this.controller.turnSnakeRight()
                                         this.handler.resetRightMove()}
  }

}


export default HumanPlayer;
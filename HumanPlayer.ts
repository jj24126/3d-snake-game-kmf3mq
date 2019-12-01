
import Player from './Player'
import SnakeController from './SnakeController'
import LRKeyInputHandler from './LRKeyInputHandler'

class HumanPlayer extends Player{
  private controller:SnakeController
  private handler:LRKeyInputHandler
  constructor(sc:SnakeController, ih:LRKeyInputHandler){
    super(sc)
    this.controller = sc 
    this.handler = ih
  }

  public makeTurn(){
    if(this.handler.madeLeftMove === true) {this.controller.turnSnakeLeft()
                                            this.handler.resetLeftMove() }
    else if(this.handler.madeRightMove === true) {this.controller.turnSnakeRight()
                                                  this.handler.resetRightMove()}
  }

}
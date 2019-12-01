
import Player from './Player'
import SnakeController from './SnakeController'
import IInputHandler from './IInputHandler'

class HumanPlayer extends Player{
  private controller
  private handler
  constructor(sc:SnakeController, ih:IInputHandler){
    super(sc)
    this.controller = sc 
    this.handler = ih
  }

  public makeTurn(){
    if(this.handler.madeLeftMove === true) {this.controller.turnSnakeLeft()
                                            this.handler.resetLeftMove() }
    else if(this.handler.madeRightMove === true) {this.controller.turnSnakeright()
                                                  this.handler.resetRightMove()}
  }

}
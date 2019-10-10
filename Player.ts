import SnakeController from './SnakeController'

abstract class Player{
  private sc:SnakeController

  constructor(snkCont:SnakeController){
    this.sc = snkCont
  }

  private makeTurn(){
    
  }


}

export default Player;
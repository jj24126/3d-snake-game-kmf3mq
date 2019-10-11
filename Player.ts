import SnakeController from './SnakeController'

abstract class Player{
  private sc:SnakeController

  constructor(snkCont:SnakeController){
    this.sc = snkCont
  }

  abstract makeTurn:() => void;
}

export default Player;
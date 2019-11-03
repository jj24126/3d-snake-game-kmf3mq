import SnakeController from './SnakeController'

/** Player class */
abstract class Player{
  private sc:SnakeController
  /**
   * Creates an instance of the player class
   * @param snkCont - The snake controller class.
   */
  constructor(snkCont:SnakeController){
    this.sc = snkCont
  }

    /** 
     * Calls turnSnakeLeft / turnSnakeRight on sc, to avoid crashing into * the wall.
     */
  abstract makeTurn:() => void;
}

export default Player;
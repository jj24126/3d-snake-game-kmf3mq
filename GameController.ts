import WorldModel from './WorldModel'
import Player from './Player'

/**Class representing a GameController*/
class GameController{
  private world:WorldModel
  private player1
  private player2

  /**
   * Creates a new GameController
   * @ param w - WorldModel
   */
  constructor(w:WorldModel){
    this.world = w
  }

  /**
   * Depending on how much time has elapsed calls update on the WorldModel
   */

  public run(){
    let lastTime = 0

    const updateFrame =(milliseconds)=> {
      this.player1.makeTurn()
      this.player2.makeTurn()
      if((milliseconds - lastTime) > 250) {this.world.update(1)
                                           lastTime = lastTime + 250}
      requestAnimationFrame(updateFrame);
    }
   requestAnimationFrame(updateFrame)
  }

  /**
   * Sets the player 1 property to p
   * @ param p - what the player1 property is set to
   */
  public set p1(p:Player){
    this.player1 = p
  };

  /**
   * Sets the player 2 property to p
   * @ param p - what the player 2 propery is set to
   */
  public set p2(p:Player){
    this.player2 = p
  };

}
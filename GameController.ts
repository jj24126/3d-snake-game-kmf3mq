import WorldModel from './WorldModel'
import Player from './Player'


class GameController{
  private world:WorldModel
  private player1
  private player2
  constructor(w:WorldModel){
    this.world = w
  }

  public run(){
    const lastTime = 0

    if(requestAnimationFrame(this.run) > 250) {this.world.update(1)
                                                lastTime + 250} 
    requestAnimationFrame(this.run)      
  }

  public updateFrame(){
    requestAnimationFrame(this.updateFrame)
    this.player1.makeTurn()
    this.player2.makeTurn()
  }

  public set p1(p:Player){
    this.player1 = p
  };

  public set p2(p:Player){
    this.player2 = p
  };

}
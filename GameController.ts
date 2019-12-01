import WorldModel from './WorldModel'


class GameController{
  private world:WorldModel
  private player1
  private player2
  constructor(w:WorldModel){
    this.world = w
  }

  public run(){
    const lastTime = 0
  }

  public updateFrame(){
    requestAnimationFrame(this.updateFrame)
  }

  public set p1(){

  };

  public set p2(){

  };

}
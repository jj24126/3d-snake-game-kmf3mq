import Snake from './Snake'


class WorldModel{
  private snk:Snake

 constructor(s:Snake){
    this.snk = s
  }

  public update(steps){
    this.snk.move(steps)
    this.snk.position
  }
}


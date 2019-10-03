import Snake from './Snake'


class WorldModel{
  private snk:Snake
  private width
  private height

 constructor(s:Snake){
    this.snk = s
    this.width
    this.height
  }

  public update(steps){
    this.snk.move(steps)
  }

  public get snake(){
    return this.snk
  }

  public get widthgetter(){
    return this.width
  }

  public get heightgetter(){
    return this.height 
  } 
}


export default WorldModel;

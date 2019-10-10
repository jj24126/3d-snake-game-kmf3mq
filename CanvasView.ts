import IView from './IView'
import WorldModel from './WorldModel'


class CanvasView implements IView{
  private canvas:HTMLCanvasElement
  private context:CanvasRenderingContext2D

 contructor(v:number){
     this.canvas = document.createElement("canvas")
     document.body.appendChild(this.canvas)
     this.context = this.canvas.getContext("2d")
  }

  private display(w:WorldModel){
    this.canvas = w.widthgetter * v 

  }

}

export default CanvasView;  
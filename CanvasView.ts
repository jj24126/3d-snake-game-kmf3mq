import IView from './IView'
import WorldModel from './WorldModel'




class CanvasView implements IView{
  private canvas:HTMLCanvasElement
  private context:CanvasRenderingContext2D
  private sf: number

 constructor(sf:number){
     this.canvas = document.createElement("canvas")
     document.body.appendChild(this.canvas)
     this.context = this.canvas.getContext("2d")
     this.sf = sf

  }

  private display(w:WorldModel){
    this.canvas.width = w.widthgetter * this.sf
    this.canvas.height = w.heightgetter * this.sf
    
  }

}

export default CanvasView;  
import IView from './IView'
import WorldModel from './WorldModel'

/**
 * Canvas view class
 */
class CanvasView implements IView{
  private canvas:HTMLCanvasElement
  private context:CanvasRenderingContext2D
  private sf: number
  /**
   * Creates an instance of the canvas view class
   * @param sf - A number used as a scaling factor.
   */
 constructor(sf:number){
     this.canvas = document.createElement("canvas")
     document.body.appendChild(this.canvas)
     this.context = this.canvas.getContext("2d")
     this.sf = sf
  }

  /** 
   * Displays the view
   * @param w - Represents the world model class.
   */
  public display(w:WorldModel){
    this.canvas.width = w.widthgetter * this.sf
    this.canvas.height = w.heightgetter * this.sf
    this.context.fillRect()
    
  }

}

export default CanvasView;  
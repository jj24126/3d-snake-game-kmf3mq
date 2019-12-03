import IView from './IView'
import WorldModel from './WorldModel'

/**
 * Canvas view class
 */
class CanvasView implements IView{
  private canvas:HTMLCanvasElement
  private context:CanvasRenderingContext2D
  public sf: number
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
    this.canvas.width = w.currentWidth * this.sf
    this.canvas.height = w.currentHeight * this.sf

   for(let b = 0; b < w.allSnks.length -1 ; b++){

     this.context.fillRect(w.allSnks[b].position.x * this.sf, w.allSnks[b].position.y * this.sf, this.sf, this.sf)
   }  
  }

}

export default CanvasView;  
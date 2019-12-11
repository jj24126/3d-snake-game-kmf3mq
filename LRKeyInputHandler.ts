import IInputHandler from './IInputHandler'

/** Class representing a LRKeyInputHandler */
class LRKeyInputHandler implements IInputHandler{
  private wasLeftArrowPushed:Boolean
  private wasRightArrowPushed:Boolean

  /**
   * Creates a new LRKeyInputHandler
   */
  constructor(){
    this.wasLeftArrowPushed = false
    this.wasRightArrowPushed = false;

    window.addEventListener("keydown", (event) => {
      if(event.key === "ArrowLeft") {this.wasLeftArrowPushed = true}

      else if(event.key === "ArrowRight") {this.wasRightArrowPushed = true}
    })
  }

  /**
   * Returns the property wasLeftArrowPushed
   */
  public madeLeftMove(){
    return this.wasLeftArrowPushed
  }

  /**
   * Returns the property wasRightArrowPushed
   */

  public madeRightMove(){
    return this.wasRightArrowPushed
  }

  /**
   * sets wasLeftArrowPushed to false
   */
  public resetLeftMove(){
    this.wasLeftArrowPushed = false
  }

  /**
   * wasRightArrowPushed
   */

  public resetRightMove(){
    this.wasRightArrowPushed = false
  }
}

export default LRKeyInputHandler;
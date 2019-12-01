


class LRKeyInputHandler implements IInputHandler{
  private wasLeftArrowPushed:Boolean
  private wasRightArrowPushed:Boolean

  constructor(){
    this.wasLeftArrowPushed = false
    this.wasRightArrowPushed = false;

    (event) => {
      if(event.key === "ArrowLeft") {this.wasLeftArrowPushed = true}

      else if(event.key === "ArrowRight") {this.wasRightArrowPushed = true}
    }
  }

  public madeLeftMove(){
    return this.wasLeftArrowPushed
  }

  public madeRightMove(){
    return this.wasRightArrowPushed
  }

  public resetLeftMove(){
    this.wasLeftArrowPushed = false
  }

  public resetRightMove(){
    this.wasRightArrowPushed = false
  }




  
}
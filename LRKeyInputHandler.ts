import IInputHandler from './IInputHandler'

class LRKeyInputHandler implements IInputHandler{
  wasLeftArrowPushed:Boolean
  wasRightArrowPushed:Boolean

  constructor(){
    this.wasLeftArrowPushed = false
    this.wasRightArrowPushed = false 
  } 
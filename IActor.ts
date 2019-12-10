
import Point from './Point'
/**
 * Interface for Actor
 */

interface IActor {
  position:Point

  


  update:() => void;
}

export default IActor;
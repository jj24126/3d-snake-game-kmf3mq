
import IActor from './IActor'

/**
 * Interface for collidable
 */

interface ICollidable extends IActor{

  didCollide:(s) => void;

}

export default ICollidable;
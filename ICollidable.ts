
import IActor from './IActor'

/**
 * interface for collidable
 */

interface ICollidable extends IActor{

  didCollide:(s) => void;

}

export default ICollidable;


import IActor from './IActor'
/**
 * Interface for collision handler
 */

interface ICollisionHandler{

  applyAction:(actor1:IActor, actor2:IActor) => void;
}

export default ICollisionHandler;
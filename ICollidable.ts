


import IActor from './IActor'

/**
 * interface for collidable
 */

interface ICollidable extends IActor{

  didCollidable:() => void;

}



import IActor from './IActor'

/**
 * interface for collidable
 */

interface ICollidable extends IActor{

  didCollide:() => void;

}
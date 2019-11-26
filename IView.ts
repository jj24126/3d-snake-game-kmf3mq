import WorldModel from './WorldModel'

/**
 * Interface for view
 */
interface IView  {

display:(w:WorldModel) => void; 

}

export default IView;
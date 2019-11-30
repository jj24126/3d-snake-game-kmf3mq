import AvoidWallsPlayer from '../AvoidWallsPlayer'
import WorldModel from '../WorldModel'
import Snake from '../Snake'
import SnakeController from '../SnakeController'


describe("AvoidWallsPlayer", function(){
  it("has working makeTurn method", function(){
    let s = new Snake
    let awp = new AvoidWallsPlayer(new SnakeController(new WorldModel(new Snake),new Snake))
    s.turnLeft
    s.turnLeft
    s.move(1)
    s.turnRight
    expect(s.direction).toBe(1)
  })

})
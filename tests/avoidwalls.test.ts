import AvoidWallsPlayer from '../AvoidWallsPlayer'
import WorldModel from '../WorldModel'
import Snake from '../Snake'
import SnakeController from '../SnakeController'
import Point from '../Point'


describe("AvoidWallsPlayer", function(){
  it("has working makeTurn method", function(){
    let s = new Snake(new Point(4,8),4)
    let awp = new AvoidWallsPlayer(new SnakeController(new WorldModel(),new Snake(new Point(4,8),4)))
    s.turnLeft
    s.turnLeft
    s.move(1)
    s.turnRight
    expect(s.direction).toBe(1)
  })

})
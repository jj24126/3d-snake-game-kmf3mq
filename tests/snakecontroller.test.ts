import WorldModel from '../WorldModel'
import Snake from '../Snake'
import SnakeController from '../SnakeController'
import Point from '../Point'

describe("SnakeController", function(){
  it("has working world height getter", function(){
    let sc = new SnakeController(new WorldModel(), new Snake(new Point(7,7),1))
    expect(sc.worldHeight).toBe(10)
  })

  it("has working world width getter", function(){
    let sc = new SnakeController(new WorldModel(), new Snake(new Point(4,1),4))
    expect(sc.worldWidth).toBe(10)
  })

  it("has working snake direction getter", function(){
    let sc = new SnakeController(new WorldModel(), new Snake(new Point(4,7),4))
    expect(sc.snakeDirection).toBe(1)
  })

  it("has working snake position getter", function(){
    let sc = new SnakeController(new WorldModel(), new Snake(new Point(10,4),4))
    expect(sc.snakePosition).toBe(0,0)
  })

  it("has working turn snake right method", function(){
    let sc = new SnakeController(new WorldModel(), new Snake(new Point(4,4),4))
    sc.turnSnakeRight()
    expect(sc.snakeDirection).toBe(2)
  })

  it("has working turn snake left method", function(){
    let sc = new SnakeController(new WorldModel(), new Snake(new Point(4,4),4))
    sc.turnSnakeLeft()
    expect(sc.snakeDirection).toBe(0)
  })
  
})

import WorldModel from '../WorldModel'
import Snake from '../Snake'
import SnakeController from '../SnakeController'

describe("SnakeController", function(){
  it("has working world height getter", function(){
    let sc = new SnakeController(new WorldModel(new Snake), new Snake)
    expect(sc.worldHeight).toBe(10)
  })

  it("has working world width getter", function(){
    let sc = new SnakeController(new WorldModel(new Snake), new Snake)
    expect(sc.worldWidth).toBe(10)
  })

  it("has working snake direction getter", function(){
    let sc = new SnakeController(new WorldModel(new Snake), new Snake)
    expect(sc.snakeDirection).toBe(1)
  })

  it("has working snake position getter", function(){
    let sc = new SnakeController(new WorldModel(new Snake), new Snake)
    expect(sc.snakePosition).toBe(0,0)
  })

  it("has working turn snake right method", function(){
    let sc = new SnakeController(new WorldModel(new Snake), new Snake)
    sc.turnSnakeRight()
    expect(sc.snakeDirection).toBe(2)
  })

  it("has working turn snake left method", function(){
    let sc = new SnakeController(new WorldModel(new Snake), new Snake)
    sc.turnSnakeLeft()
    expect(sc.snakeDirection).toBe(0)
  })
  
})

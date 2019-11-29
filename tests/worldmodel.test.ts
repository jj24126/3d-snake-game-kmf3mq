
import WorldModel from '../WorldModel'
import Snake from '../Snake'
import Point from '../Point'

describe("WorldModel", function(){

  it ("has a working height getter",function(){
    let w = new WorldModel(new Snake)
    expect(w.currentHeight).toBe(10)
  })

  it("has working width getter", function(){
    let w = new WorldModel(new Snake)
    expect(w.currentWidth).toBe(10)
  })

  it("has working snake getter", function(){
    let w = new WorldModel(new Snake)
    expect(w.snake).toBe(new Snake)
  })

  it(" has working update method", function(){
    let w = new WorldModel(new Snake)
    w.update(4)
    expect(w.update).toBe(w.snake.position(4,0))
  })

})


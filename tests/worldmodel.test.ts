
import WorldModel from '../WorldModel'
import Snake from '../Snake'
import Point from '../Point'

describe("WorldModel", function(){

  it ("has a working height getter",function(){
    let w = new WorldModel()
    expect(w.currentHeight).toBe(100)
  })

  it("has working width getter", function(){
    let w = new WorldModel()
    expect(w.currentWidth).toBe(100)
  })

  it("has working allSnakes getter", function(){
    let w = new WorldModel()
    let snk1 = new Snake(new Point(7,1),4)
    expect(w.allSnks).toContain(snk1)
  })

  it("has working update method", function(){
    let w = new WorldModel()
    let snk1 = new Snake(new Point(4,0),4)
    w.addSnakes(snk1)
    w.update(4)
    expect(w.allSnks[0].position).toBe(8,0)
    })

})


import Snake from '../Snake'
import Point from '../Point'


describe("Snake", function(){
  it("has a working getter for direction", function(){
    let s = new Snake(new Point(4,4),4);
    expect(s.direction).toBe(1)
  })

  it("has a working getter for position", function(){
    let s = new Snake(new Point(4,3),4);
    expect(s.position).toBe(4,3)
  })

  it("turns right", function(){
    let s = new Snake(new Point(4,1), 1);
    s.turnRight()
    expect(s.direction).toBe(2)
  })

  it("turns left", function(){
    let s = new Snake(new Point(4,8),4);
    s.turnLeft()
    expect(s.direction).toBe(0)
  })

  it("moves", function(){
    let s = new Snake(new Point(1,0),4);
    s.move(4)
    expect(s.position).toBe(5,0)
  })

  it("has working type getter", function(){
    let s = new Snake(new Point(4,7),4)
    expect(s.type).toBe("snake")
  })

  it("has working isActive getter", function(){
    let s = new Snake(new Point(4,4),4)
    expect(s.isActive).toBe(true)
  })

  it("has working die method", function(){
    let s = new Snake(new Point(7,1),4)
    expect(s.isActive).toBe(false)
  })
})
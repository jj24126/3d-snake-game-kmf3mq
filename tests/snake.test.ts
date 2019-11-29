import Snake from '../Snake'


describe("Snake", function(){
  it("has a working getter for direction", function(){
    let s = new Snake();
    expect(s.direction).toBe(1)
  })

  it("has a working getter for position", function(){
    let s = new Snake();
    expect(s.position).toBe(0,0)
  })

  it("turns right", function(){
    let s = new Snake();
    s.turnRight()
    expect(s.direction).toBe(2)
  })

  it("turns left", function(){
    let s = new Snake();
    s.turnLeft()
    expect(s.direction).toBe(0)
  })

  it("moves", function(){
    let s = new Snake();
    s.move(4)
    expect(s.position).toBe(4,0)
  })
})
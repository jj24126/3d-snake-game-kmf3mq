import Point from './Point'

describe("Point", function(){
  it("has working getter for y", function(){
    const p = new Point(4,7)
    expect(p.y).toBe(7)
  })

  it("has working x getter", function(){
    const p = new Point(4,7)
    expect(p.x).toBe(4)
  })
})
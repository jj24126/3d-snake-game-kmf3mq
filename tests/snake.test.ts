import Snake from '../Snake'


describe("Snake", function(){
  it("has a working getter for direction", function(){
    let s = new Snake();
    expect(s.direction).toBe(1)
  })
})
const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("should be 1 flat array", function () {
    expect(unroll([[1,2],[3,4]]).length).toEqual(4)
  })

  it("should unroll", () => {
    expect(unroll([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5])
  })

});

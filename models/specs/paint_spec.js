const assert = require("assert");
const Paint = require("../paint.js");

describe("Paint", function(){

  let paint1;
  let paint2;

  beforeEach(function(){
    paint1 = new Paint(10);
    paint2 = new Paint(0);
  });

  it("should have a number of litres of paint", function(){
    assert.strictEqual(paint1.volume, 10)
  });

  it("should be abe to check if it is empty", function() {
    assert.strictEqual(paint1.check_empty(), false);
    assert.strictEqual(paint2.check_empty(), true);
  });

  it("should be able to empty itself of paint", function() {
    paint1.empty();
    assert.strictEqual(paint1.check_empty(), true);
  });

});

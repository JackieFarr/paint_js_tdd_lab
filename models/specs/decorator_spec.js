const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function(){

  let decorator;
  let paint1;
  let paint2;
  let room1;
  let room2;

  beforeEach(function(){
    decorator = new Decorator();
    paint1 = new Paint(10);
    paint2 = new Paint(10);
    room1 = new Room(20);
    room2 = new Room(50);
  });

  it("should start with an empty paint stock", function(){
    assert.deepStrictEqual(decorator.stock, []);
  });

  it("should be able to add a can of paint to stock", function() {
    decorator.add_paint(paint1);
    assert.deepStrictEqual(decorator.stock, [paint1]);
  });

  it("should be able to remove a can of paint to stock", function() {
    decorator.add_paint(paint1);
    decorator.remove_one_paint_can();
    assert.deepStrictEqual(decorator.stock, []);
  });

  it("should be able to calculate total litres paint in stock", function () {
    decorator.add_paint(paint1);
    decorator.add_paint(paint2);
    assert.deepStrictEqual(decorator.check_stock(), 20);
  });

  it("should be able to calculate if enough paint to paint room", function(){
    decorator.add_paint(paint1);
    decorator.add_paint(paint2);
    assert.deepStrictEqual(decorator.enough_paint(room1), true)
    assert.deepStrictEqual(decorator.enough_paint(room2), false)
  });

  it("should be able to paint room if has enough paint in stock", function(){
    decorator.add_paint(paint1);
    decorator.add_paint(paint2);
    decorator.paint(room1);
    assert.deepStrictEqual(decorator.stock, []);
    assert.deepStrictEqual(room1.painted, true);
  });

  it("should not be able to paint room if not enough paint in stock", function(){
    decorator.add_paint(paint1);
    decorator.add_paint(paint2);
    decorator.paint(room2);
    assert.deepStrictEqual(decorator.stock, [paint1, paint2]);
    assert.deepStrictEqual(room1.painted, false);
  });

});

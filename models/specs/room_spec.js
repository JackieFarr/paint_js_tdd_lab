const assert = require("assert");
const Room = require("../room.js");

describe("Room", function() {

  let room;

  beforeEach(function() {
    room = new Room(50);
  });

  it("should have an area", function() {
    assert.strictEqual(room.area, 50);
  });

  it("should start not painted", function(){
    assert.strictEqual(room.painted, false);
  });

  it("should be able to be painted", function(){
    room.paint();
    assert.strictEqual(room.painted, true);
  })

});

const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.add_paint = function (paint) {
  this.stock.push(paint);
};

Decorator.prototype.remove_one_paint_can = function () {
  this.stock.pop();
};

Decorator.prototype.check_stock = function () {
  let total_volume = 0;
  for (paint of this.stock) {
    total_volume += paint.volume;
  }
  return total_volume;
};

Decorator.prototype.enough_paint = function (room) {
  if (this.check_stock() >= room.area) {
    return true;
  }
  return false;
};

Decorator.prototype.paint = function (room) {
  if (this.enough_paint(room)) {
    let n = room.area / 10;
    for (var j = 0; j <= n; j++ ) {
      this.stock.pop();
    };
    room.painted = true;
  };
};
module.exports = Decorator;

const Paint = function(volume){
  this.volume = volume;
};

Paint.prototype.check_empty = function () {
  if (this.volume == 0) {
    return true;
  }
  return false;
};

Paint.prototype.empty = function () {
  this.volume = 0;
};

module.exports = Paint;

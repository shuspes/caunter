function Counter(initVal, step, config) {
  console.log(config);

  this.step = step;
  this.value = initVal;
}

Counter.prototype.increase = function() {};

Counter.prototype.decrease = function() {};

Counter.prototype.get = function() {
  return this.value;
};

module.exports = Counter;

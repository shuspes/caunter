const assert = require('assert');
const Counter = require('../counter');

describe('Array', () => {
  it('counter is function', () => {
    assert.ok(typeof Counter === 'function');
  });

  it('counter has 2 params', () => {
    assert.ok(Counter.length === 3);
  });

  it('counter has step', () => {
    const counter = new Counter(2, 5);
    assert.equal(counter.step, 5);
  });

  it('counter has value', () => {
    const counter = new Counter(2, 5);
    assert.equal(counter.value, 2);
  });

  it('counter has increase', () => {
    const counter = new Counter(2, 5);
    assert.equal(typeof counter.increase, 'function');
  });

  it('counter has decrease', () => {
    const counter = new Counter(2, 5);
    assert.equal(typeof counter.decrease, 'function');
  });

  it('counter has get', () => {
    const counter = new Counter(2, 5);
    assert.equal(typeof counter.get, 'function');
  });

  it('get return value', () => {
    const counter = new Counter(2, 5);
    assert.equal(counter.get(), 2);
  });
});

const { expect } = require('chai');
const { add, multi } = require('../server/math');

describe('math', function () {
  describe('add', function () {
    it('should return 10 when add(2, 3, 5)', function () {
      expect(add(2, 3, 5), 10);
    });
  });
  describe('multi', function () {
    it('should return 25 when multi(2, 3, 5)', function () {
      expect(multi(2, 3, 5), 25);
    });
  });
});
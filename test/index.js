const { expect } = require('chai');
const { add, multi, complex } = require('../server/math');

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
  describe('complex', function () {
    it('should return 1 when complex(2, 3)', function () {
      expect(complex(2, 3), 1);
    });
    it('should return 1 when complex(4, 3)', function () {
      expect(complex(4, 3), 1);
    });
    it('should return 0 when complex(3, 3)', function () {
      expect(complex(3, 3), 0);
    });
  });
});
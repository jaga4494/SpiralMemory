describe("SpiralMemory", function() {
  var calc;
  beforeEach(function() {
        calc = new spiralMemory();
    });
  describe("When calculate is clicked", function(){
    it("should be able to find Manhattan distance of 1", function() {
        calc.buildSpiral(1);
        expect( calc.getManhattanDistance() ).toEqual(0);
    });

    it("should be able to find Manhattan distance of 10", function() {
        calc.buildSpiral(10);
        expect( calc.getManhattanDistance() ).toEqual(1);
    });

    it("should be able to find Manhattan distance of 1000", function() {
        calc.buildSpiral(1000);
        expect( calc.getManhattanDistance() ).toEqual(4);
    });
    afterEach(function() {
          calc.resetValues();
      });
  });
});

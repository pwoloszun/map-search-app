describe("RealEstateList", function() {
  var realEstateList;

  beforeEach(function() {
    var json = [
      {selected: false},
      {selected: false},
      {selected: false}
    ];
    realEstateList = new MapSearchApp.Collections.RealEstateList(json);
  });

  describe("initialize()", function() {

    it("should initialize collection with proper values", function() {
      var selectedList = realEstateList.pluck("selected");
      selectedList.should.be.like([false, false, false]);
    });

  });

  //TODO
});

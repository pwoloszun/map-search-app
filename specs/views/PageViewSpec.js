describe("PageView", function() {
  var view, realEstates;

  beforeEach(function() {
    realEstates = sinon.mock();
    view = new MapSearchApp.Views.PageView({collection: realEstates});
  });

  describe("render()", function() {
    beforeEach(function() {
      view.render();
    });

    xit("should render template", function() {
      view.$el.should.have.class("top-container");
    });

  });
});

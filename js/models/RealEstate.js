MapSearchApp.Models.RealEstate = Backbone.Model.extend({
  // TODO add methods:
  // isSelected()
  // toggleSelected()
});

// TODO: comment out
function testRealEstate() {
  var re = new MapSearchApp.Models.RealEstate();
  console.log(re.isSelected()); // false
  re.toggleSelected();
  console.log(re.isSelected()); // true
  re.toggleSelected();
  console.log(re.isSelected()); // false
}
//testRealEstate();

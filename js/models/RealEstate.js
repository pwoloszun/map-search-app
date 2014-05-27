MapSearchApp.Models.RealEstate = Backbone.Model.extend({
  // TODO add methods:
  // isSelected()
  // toggleSelected()
});

// TODO: comment out
function testRealEstate() {
  var re = new MapSearchApp.Models.RealEstate();
  console.log(re.isSelected()); // false
  re.toggleSelecte();
  console.log(re.isSelected()); // true
  re.toggleSelecte();
  console.log(re.isSelected()); // false
}
//testRealEstate();

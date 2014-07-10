MapSearchApp.Collections.RealEstateList = Backbone.Collection.extend({

  model: MapSearchApp.Models.RealEstate

  // TODO: observe models isSelected()

});

function testRealEstateList() {
  var json = [
    {selected: false},
    {selected: false},
    {selected: false}
  ];
  var collection = new MapSearchApp.Collections.RealEstateList(json);

  var re = collection.at(1);
  re.toggleSelected();
  var selectedList = collection.pluck("selected");
  console.log(selectedList, "should be: F, T, F"); // => F, T, F

  re = collection.at(0);
  re.toggleSelected();
  selectedList = collection.pluck("selected");
  console.log(selectedList, "should be: T, F, F"); // => T, F, F
}
//testRealEstateList();

//
// TODO*: implement sortBy(attrName, reverse = false)
//collection.comparator = function(re1, re2) {
//  return re1.get("name") >= re2.get("name");
//};
//collection.sort();

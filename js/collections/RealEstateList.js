MapSearchApp.Collections.RealEstateList = Backbone.Collection.extend({

  // TODO: observe models isSelected()

});

//var reList = new MapSearchApp.Collections.RealEstateList();
//reList.each(function(realEstate, index) {
//});

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
// TODO*: implement selfSortBy(attrName, reverse = false)
function collectionSortExample() {
  collection.on("sort", function() {
    // triggered after sort() called
  });
  collection.comparator = function(re1, re2) {
    return re1.get("name") >= re2.get("name");
  };
  collection.sort();
}

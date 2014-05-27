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
  var selected = collection.map(function(re) {
    return re.get("selected");
  });
  console.log(selected); // => F, T, F

  re = collection.at(0);
  re.toggleSelected();
  selected = collection.map(function(re) {
    return re.get("selected");
  });
  console.log(selected); // => T, F, F
}
//testRealEstateList();

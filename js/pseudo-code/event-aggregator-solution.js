// app.js
function appEventAggregatorSolution() {
  var mapView = new MapView();
  var detailsView = new DetailsView();
  var listView = new ListView();
}

// MapView.js
function MapView() {
  var mapView = this;
  pubSub.subscribe("listView:list-item:selected", function(selectedItem) {
    mapView.changeSelected(selectedItem);
  });
}

// ListView.js
function ListView() {
  var listView = this;
  pubSub.subscribe("mapView:list-item:selected", function(selectedItem) {
    listView.changeSelected(selectedItem);
  });
}

// DetailsView.js
function DetailsView() {
  var detailsView = this;
  pubSub.subscribe("mapView:list-item:selected", function(selectedItem) {
    detailsView.update(selectedItem);
  });
  pubSub.subscribe("listView:list-item:selected", function(selectedItem) {
    detailsView.update(selectedItem);
  });
}

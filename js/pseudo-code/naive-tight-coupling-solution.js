// app.js
function appTightCoupling() {
  var mapView = new MapView();
  var detailsView = new DetailsView();
  var listView = new ListView();

  mapView.setViews(listView, detailsView);
  listView.setViews(mapView, detailsView);
}

// MapView.js
function MapView() {
  this.on("marker:click", function(item) {
    this.listView.select(item);
  });
}

// ListView.js
function ListView() {
  this.on("listItem:click", function(item) {
    this.mapView.select(item);
  });
}

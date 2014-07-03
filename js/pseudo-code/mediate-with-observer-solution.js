// app.js
function appMediateWithObserver() {
  var mapView = new MapView();
  var detailsView = new DetailsView();
  var listView = new ListView();

  listView.on("list-item:selected", function(selectedItem) {
    mapView.changeSelectedTo(selectedItem);
    detailsView.updateWith(selectedItem);
  });

  mapView.on("marker:select", function(selectedItem) {
    listView.changeSelectedTo(selectedItem);
    detailsView.updateWith(selectedItem);
  });
}

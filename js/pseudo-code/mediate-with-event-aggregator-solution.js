// app.js
function appMediateWithEventAggregator() {
  var mapView = new MapView();
  var detailsView = new DetailsView();
  var listView = new ListView();

  pubSub.subscribe("listView:list-item:selected", function() {
    mapView.changeSelectedTo(selectedItem);
    detailsView.updateWith(selectedItem);
  });

  pubSub.subscribe("mapView:list-item:selected", function() {
    listView.changeSelectedTo(selectedItem);
    detailsView.updateWith(selectedItem);
  });
}

MapSearchApp.Repositories.realEstateRepository = (function() {
  var REAL_ESTATES_COUNT = 10;
  var STREETS = _(["Rzeckiego", "Jaspisowa", "Nowy Swiat", "Balcera", "Naleczowska"]);

  var generateRealEstatesJSON = function(count) {
    var realEstatesData = [];
    for (var i = 0; i < count; i++) {
      realEstatesData.push({
        id: 100 + i,
        street: STREETS.sample() + " " + Math.floor(randomBetween(1, 90)),
        lat: randomBetween(1, 100),
        lng: randomBetween(1, 100)
      });
    }
    return realEstatesData;
  };

  var json = generateRealEstatesJSON(REAL_ESTATES_COUNT);
  var realEstatesList = new MapSearchApp.Collections.RealEstateList(json);

  var getAll = function() {
    return realEstatesList;
  };

  var loadMore = function() {
    REAL_ESTATES_COUNT += 10;
    var json = generateRealEstatesJSON(REAL_ESTATES_COUNT);
    realEstatesList.reset(json);
  };

  return {
    getAll: getAll,
    loadMore: loadMore
  };
})();

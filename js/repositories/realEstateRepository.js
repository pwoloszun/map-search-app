MapSearchApp.Repositories.realEstateRepository = (function() {

  var STREETS = _(["Rzeckiego", "Jaspisowa", "Nowy Swiat", "Balcera", "Naleczowska"]);
  var REAL_ESTATES_DATA = [];
  for (var i = 0; i < 10; i++) {
    REAL_ESTATES_DATA.push({
      id: 100 + i,
      street: STREETS.sample() + " " + Math.floor(randomBetween(1, 90)),
      lat: randomBetween(1, 100),
      lng: randomBetween(1, 100)
    });
  }

  var realEstatesList = new MapSearchApp.Collections.RealEstateList(REAL_ESTATES_DATA);

  function getAll() {
    return realEstatesList;
  }

  return {
    getAll: getAll
  };
})();

MapSearchApp.Services.pubSub = (function() {
  var eventAgg = _({}).extend(Backbone.Events);

  return {
    publish: function(topic, args) {
      eventAgg.trigger(topic, args);
    },
    subscribe: function(topic, fn, ctx) {
      eventAgg.on(topic, fn, ctx);
    }
  };
})();

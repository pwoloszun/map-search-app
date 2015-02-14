MapSearchApp.Views.MoreResultsPubSubView = Backbone.View.extend({

  template: MapSearchApp.Services.templates.get("#more-results-pub-sub-template"),

  events: {
    "click .load-more-pub-sub-btn": "loadMoreRealEstates"
  },

  initialize: function(params) {
    this._realEstateRepository = MapSearchApp.Repositories.realEstateRepository;
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  },

  loadMoreRealEstates: function() {
    this._realEstateRepository.loadMore();
    MapSearchApp.Services.pubSub.publish("moreResultsPubSub:loaded");
  }

});

MapSearchApp.Services.templates = (function() {
  var CACHED_TEMPLATES = {};

  function get(templateId) {
    var template = CACHED_TEMPLATES[templateId];
    if (!template) {
      var html = $(templateId).html();
      template = Handlebars.compile(html);
      CACHED_TEMPLATES[templateId] = template;
    }
    return template;
  }

  return {
    get: get
  };
})();

const engine = new EasySearch.MongoDB({
  sort: function (searchObject, options) {
    const props = options.search.props;
    return props.sort || {};
  },

  selector: function (searchObject, options, aggregation) {
    const selector = this.defaultConfiguration().selector(
      searchObject,
      options,
      aggregation
    );
    Object.assign(selector, options.search.props.query);
    return selector;
  },

  selectorPerField: function (field, searchString) {
    return this.defaultConfiguration().selectorPerField(field, searchString);
  },
});

const TitlesIndex = new EasySearch.Index({
  collection: Titles,
  fields: ["name", "description"],
  engine: engine,
});

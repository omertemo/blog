import SimpleSchema from "simpl-schema";

new ValidatedMethod({
  name: "titles.show",
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: function (data) {
    this.unblock();

    Titles.findOne({ _id: data._id });
  },
});

import SimpleSchema from "simpl-schema";

new ValidatedMethod({
  name: "titles.update",
  mixins: [SignedInMixin, RoleMixin],
  roles: ["roles.admin"],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    title: TitleSchema,
  }).validator(),
  run: function (data) {
    this.unblock();

    Titles.update(
      { _id: data._id },
      {
        $set: data.title,
      }
    );
  },
});

import SimpleSchema from "simpl-schema";

new ValidatedMethod({
  name: "titles.delete",
  mixins: [SignedInMixin, RoleMixin],
  roles: ["roles.admin"],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: function (data) {
    this.unblock();

    return Titles.remove({ _id: data._id });
  },
});

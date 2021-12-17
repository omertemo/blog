import SimpleSchema from "simpl-schema";

new ValidatedMethod({
  name: "titles.create",
  mixins: [SignedInMixin, RoleMixin],
  roles: ["roles.admin"],
  validate: new SimpleSchema({
    title: TitleSchema,
  }).validator(),
  run: function (data) {
    this.unblock();

    return Titles.insert(data.title);
  },
});

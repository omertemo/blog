import SimpleSchema from "simpl-schema";

new ValidatedMethod({
  name: "auth.users.userCreate",
  validate: new SimpleSchema({
    email: String,
    password: String,
    profile: {
      type: Object,
      blackbox: true,
    },
  }).validator(),
  run: function (data) {
    this.unblock();
    const { email, password, profile } = data;

    const userId = Accounts.createUser({
      email: email,
      password: password,
      profile: profile,
    });

    Roles.addUsersToRoles(userId, "roles.user", null);
  },
});

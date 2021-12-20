Migrations.add({
  version: 1,
  name: "Roller tanımlanıyor ve admin user oluşturuluyor.",
  up: function () {
    Roles.createRole("roles.admin");
    Roles.createRole("roles.user");

    const userId = Accounts.createUser({
      email: "admin@bordo.io",
      password: "123",
      profile: {
        firstName: "Bordo",
        lastName: "Admin",
      },
    });
    Roles.addUsersToRoles(userId, "roles.admin", Roles.GLOBAL_GROUP);
  },
});

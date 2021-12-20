Template.registerHelper("isUserInRole", function (userId, role) {
  console.log(Meteor.userId() + "\n" + userId);
  console.log(role);
  console.log(Roles.userIsInRole(Meteor.user(), role));
  return Roles.userIsInRole(userId, role);
});

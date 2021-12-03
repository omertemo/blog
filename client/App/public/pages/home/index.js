Template.publicPagesHome.helpers({
  city: function () {
    return Session.get("city");
  },
  description: function () {
    return Session.get("description");
  },
  temperature: function () {
    return Session.get("temperature");
  },
  icon: function () {
    return Session.get("icon");
  },
});

Template.publicPagesHome.events({
  "submit .city-name": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var city = event.target.city.value;

    // Call the api and populate the template
    Meteor.call("weather", city, function (err, res) {
      console.log(res);
      Session.set("city", res.name);
      Session.set("description", res.weather[0].description);
      Session.set("temperature", Math.round(res.main.temp) + "°");
      console.log(res.main);
      Session.set("icon", res.weather[0].icon);
    });

    // Clear form
    event.target.city.value = "";
  },
});

// Template.publicPagesHome.helpers({
// create: function() {

// },
// rendered: function() {

// },
// destroyed: function() {

// },
// });

// Template.publicPagesHome.events({
// 'click #foo': function(event, template) {

// }
// });

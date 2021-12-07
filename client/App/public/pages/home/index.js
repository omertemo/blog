import Swal from "sweetalert2";

Template.publicPageHome.onCreated(function () {
  this.state = new ReactiveDict(null, {
    titles: [],
  });
});

Template.publicPageHome.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get("titles");

    Meteor.call("titles.list", {}, function (error, result) {
      if (error) {
        console.log("error", error);
      }
      if (result) {
        console.log(result);
        self.state.set("titles", result);
      }
    });
  });
});

Template.publicPageHome.events({
  "click .brd-delete": function (event, template) {
    const title = this;

    console.log(this);

    Swal.fire({
      title: "Silmek istiyor musunuz?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--bs-danger)",
      cancelButtonColor: "var(--bs-dark)",
      cancelButtonText: "Hayır",
      confirmButtonText: "Evet",
    }).then((result) => {
      if (result.value) {
        Loading.show();
        Meteor.call(
          "titles.delete",
          { _id: title._id },
          function (error, result) {
            Loading.hide();

            if (error) {
              console.log("error", error);
            }

            AppUtil.refreshTokens.set("titles", Random.id());
          }
        );
      }
    });
  },
  "click .brd-update": function (event, template) {
    const title = this;

    console.log(this);

    AppUtil.temp.set("title", this);
  },
  "click .brd-title-remove": function (event, template) {
    event.preventDefault();

    const title = this.data;

    console.log(this);

    Swal.fire({
      title: "Silmek istiyor musunuz?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--bs-danger)",
      cancelButtonColor: "var(--bs-dark)",
      cancelButtonText: "Hayır",
      confirmButtonText: "Evet",
    }).then((result) => {
      if (result.value) {
        Loading.show();
        Meteor.call(
          "titles.delete",
          { _id: title._id },
          function (error, result) {
            Loading.hide();

            if (error) {
              console.log("error", error);
            }

            AppUtil.refreshTokens.set("titles", Random.id());
          }
        );
      }
    });
  },
  "click .brd-title-update": function (event, template) {
    event.preventDefault();
    const title = this;

    AppUtil.temp.set("title", this.data);
    $("#brdPublicModalTitleUpdateModal").modal("show");
  },
});

Template.publicPageHome.events({
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
      Session.set("temperature", Math.round(res.main.temp - 270) + "°");
      console.log(res.main);
      Session.set("icon", res.weather[0].icon);
    });

    // Clear form
    event.target.city.value = "";
  },
});

// Template.publicPageHome.helpers({
// create: function() {

// },
// rendered: function() {

// },
// destroyed: function() {

// },
// });

// Template.publicPageHome.events({
// 'click #foo': function(event, template) {

// }
// });

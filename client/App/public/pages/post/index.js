import Swal from "sweetalert2";

Template.publicPagePost.onCreated(function () {
  this.state = new ReactiveDict(null, {
    titles: [],
  });
});

Template.publicPagePost.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get("titles");

    Loading.show();
    Meteor.call("titles.list", {}, function (error, result) {
      if (error) {
        console.log("error", error);
        return;
      }
      if (result) {
        Loading.hide();
        self.state.set("titles", result);
      }
    });
  });
});

Template.publicPagePost.events({
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
              alert(error);
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

import Swal from "sweetalert2";

Template.publicComponentTitleCard.onCreated(function () {});

Template.publicComponentTitleCard.onRendered(function () {});

Template.publicComponentTitleCard.events({
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
});

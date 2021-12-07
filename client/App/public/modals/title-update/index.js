import bootstrap from "bootstrap";

Template.publicModalTitleUpdate.onRendered(function () {
  const self = this;

  const modalElement = document.getElementById(
    "brdPublicModalTitleUpdateModal"
  );
  this.modal = new bootstrap.Modal(modalElement);

  modalElement.addEventListener("hidden.bs.modal", function (event) {
    AppUtil.temp.set("title", null);
    self.$("form#brdPublicModalTitleUpdateForm").trigger("reset");
  });
});

Template.publicModalTitleUpdate.events({
  "submit form#brdPublicModalTitleUpdateForm": function (event, template) {
    event.preventDefault();

    const title = AppUtil.temp.get("title");

    const name = event.target.name.value;
    const description = event.target.description.value;
    const author = event.target.author.value;

    const obj = {
      _id: title._id,
      title: {
        name: name,
        description: description,
        author: author,
      },
    };

    Meteor.call("titles.update", obj, function (error, result) {
      if (error) {
        console.log("error", error);
      }

      AppUtil.refreshTokens.set("titles", Random.id());
      event.target.reset();
      template.modal.hide();
    });
  },
});

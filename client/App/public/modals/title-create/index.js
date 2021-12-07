import bootstrap from "bootstrap";

Template.publicModalTitleCreate.onRendered(function () {
  const self = this;

  const modalElement = document.getElementById(
    "brdPublicModalTitleCreateModal"
  );
  this.modal = new bootstrap.Modal(modalElement);

  modalElement.addEventListener("hidden.bs.modal", function (event) {
    self.$("form#brdPublicModalTitleCreateForm").trigger("reset");
  });
});

Template.publicModalTitleCreate.events({
  "submit form#brdPublicModalTitleCreateForm": function (event, template) {
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;
    const author = event.target.author.value;

    const obj = {
      title: {
        name: name,
        description: description,
        author: author,
      },
    };

    Meteor.call("titles.create", obj, function (error, result) {
      if (error) {
        console.log("error", error);
      }

      console.log(result);
      AppUtil.refreshTokens.set("titles", Random.id());
      event.target.reset();
      template.modal.hide();
    });
  },
});

import Swal from "sweetalert2";

Template.publicPageHome.onCreated(function () {
  this.state = new ReactiveDict(null, {
    titles: [],
  });
  // const docs = TitlesIndex.search({ title: "Yapay Zeka" }).fetch();
});

Template.publicPageHome.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get("titles");

    Loading.show();
    Meteor.call("titles.list", {}, function (error, result) {
      if (error) {
        console.log("error", error);
      }
      if (result) {
        // console.log(TitlesIndex.search("hanoi").fetch());
        Loading.hide();
        self.state.set("titles", result);
      }
    });
  });
});

Template.publicPageHome.events({
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

  // FOR SEARCH BUTTON
  ////////////////////////
  "keyup .brd-title-search, input .brd-title-search": function (
    event,
    template
  ) {
    event.preventDefault();

    const search = event.target.value;

    if (template.timeout) {
      clearTimeout(template.timeout);
    }
  },
});
Template.publicPageHome.helpers({
  TitlesIndex: () => TitlesIndex,
  // TitlesIndex.search("hanoi").fetch();
});

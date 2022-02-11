import ClassicEditor from "/imports/js/ckeditor/ckeditor.js";
Template.publicPageHome.onRendered(function () {
  const self = this;

  this.autorun(function () {
    const language = CurrentLocale.get();

    if (!language) {
      return;
    }

    Meteor.setTimeout(function () {
      ClassicEditor.create(
        self.find("#announcementCreateDescription"),
        CkEditorOptions(language)
      )
        .then((editor) => {
          self.ckEditor = editor;
        })
        .catch((error) => {
          console.error(error);
        });
    }, 50);
  });
});

Template.publicPageHome.events({
  "click #save": function (event, template) {
    console.log(template.ckEditor.getData());
  },
});

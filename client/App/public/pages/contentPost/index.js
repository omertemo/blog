Template.publicPageContentPost.onCreated(function () {
  this.state = new ReactiveDict(null, {
    titles: [],
  });
});

Template.publicPageContentPost.onRendered(function () {
  $("#content").ckeditor();
});

Template.publicPageContentPost.events({
  "click #saveButton": function (event, template) {
    event.preventDefault();

    const content = event.target.content.value;
    console.log(content);

    const obj = {
      title: {
        content: content,
      },
    };
  },
});

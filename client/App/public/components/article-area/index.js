Template.publicComponentTitleCard.onRendered(function () {});

Template.publicComponentTitleCard.events({
  "click .brd-increase": function (event, template) {
    template.data.number.set(template.data.number.get() + 1);
  },
  "click .brd-decrease": function (event, template) {
    template.data.number.set(template.data.number.get() - 1);
  },
});

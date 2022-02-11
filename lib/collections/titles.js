import SimpleSchema from "simpl-schema";

Titles = new Mongo.Collection("titles");

TitleSchema = new SimpleSchema({
  name: String,

  description: {
    type: String,
    optional: true,
  },
  author: String,
  like: {
    type: Boolean,
    optional: true,
  },
  content: {
    type: String,
    optional: true,
  },
});

Titles.attachSchema(TitleSchema);

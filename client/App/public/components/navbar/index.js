import { FlowRouter } from "meteor/ostrio:flow-router-extra";

FlowRouter.route("/", {
  name: "public.home",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "publicPagesHome" });
  },
});
FlowRouter.route("/about", {
  name: "public.about",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "publicPagesAbout" });
  },
});
FlowRouter.route("/post", {
  name: "public.post",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "publicPagesPost" });
  },
});
FlowRouter.route("/contact", {
  name: "public.contact",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "publicPagesContact" });
  },
});

FlowRouter.route("/weather", {
  name: "public.weather",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "publicPagesWeather" });
  },
});

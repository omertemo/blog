import { FlowRouter } from "meteor/ostrio:flow-router-extra";

FlowRouter.route("/", {
  name: "public.home",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "publicPagesHome" });
  },
});
FlowRouter.route("/try", {
  name: "public.try",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "publicPagesDeneme" });
  },
});

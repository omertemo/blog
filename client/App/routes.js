import { FlowRouter } from "meteor/ostrio:flow-router-extra";

FlowRouter.route("/", {
  name: "public.home",
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "publicPageHome" });
  },
});
FlowRouter.route("/about", {
  name: "public.about",
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "publicPageAbout" });
  },
});
FlowRouter.route("/post", {
  name: "public.post",
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "publicPagePost" });
  },
});
FlowRouter.route("/contact", {
  name: "public.contact",
  triggersEnter: [MustSignIn],
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "publicPageContact" });
  },
});

FlowRouter.route("/auth/sign-in", {
  name: "auth.signIn",
  action: function (params, queryParams) {
    this.render("authLayoutDefault", { page: "authPagesSignIn" });
  },
});

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91535"],
  {
    730801: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return j;
          },
        });
      var r = t("37983");
      t("884691");
      var a = t("627445"),
        l = t.n(a),
        o = t("759843"),
        n = t("446674"),
        i = t("77078"),
        d = t("545158"),
        u = t("428958"),
        c = t("183137"),
        p = t("592407"),
        m = t("845579"),
        f = t("305961"),
        h = t("37785"),
        g = t("191814"),
        S = t("476765"),
        C = t("58608"),
        x = t("701909"),
        y = t("49111"),
        N = t("994428"),
        R = t("660516"),
        A = t("12970");
      let _ = [
        y.GuildFeatures.CREATOR_MONETIZABLE,
        y.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
      ];
      function j(e) {
        let {
            transitionState: s,
            onClose: t,
            guildId: a,
            markAsDismissed: j,
          } = e,
          D = (0, S.useUID)(),
          v = (0, n.useStateFromStores)([f.default], () =>
            f.default.getGuild(a)
          );
        l(null != v, "Guild must be defined"),
          (0, u.default)({
            type: R.ImpressionTypes.MODAL,
            name: o.ImpressionNames.GUILD_SHOP_UPSELL,
            properties: { passed_in_guild_id: a },
          });
        let I = m.GifAutoPlay.useSetting();
        return (0, r.jsxs)(i.ModalRoot, {
          size: i.ModalSize.LARGE,
          className: A.root,
          transitionState: s,
          "aria-labelledby": D,
          children: [
            (0, r.jsxs)(i.ModalHeader, {
              separator: !1,
              className: A.header,
              children: [
                (0, r.jsx)(i.ModalCloseButton, {
                  className: A.closeButton,
                  onClick: t,
                }),
                (0, r.jsx)(i.Heading, {
                  variant: "heading-xl/medium",
                  color: "header-primary",
                  id: D,
                  children: "Server Shop is now open for business!",
                }),
                (0, r.jsx)(g.default, { size: 6 }),
                (0, r.jsx)(i.Text, {
                  variant: "text-md/normal",
                  className: A.description,
                  color: "header-secondary",
                  children:
                    "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise.",
                }),
                (0, r.jsx)(g.default, { size: 8 }),
                (0, r.jsx)(h.default, {
                  onClick: () => {
                    j(N.ContentDismissActionType.SECONDARY);
                    let e = "".concat(
                      x.default.getCreatorSupportArticleURL(
                        y.HelpdeskArticles.SERVER_SUBSCRIPTION_AND_PRODUCTS
                      ),
                      "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1"
                    );
                    (0, d.default)(e, !0);
                  },
                  children: "Learn more",
                }),
              ],
            }),
            (0, r.jsx)("div", { className: A.divider }),
            (0, r.jsxs)(i.ModalContent, {
              className: A.content,
              children: [
                I
                  ? (0, r.jsx)("img", {
                      src: (0, c.getAssetCDNUrl)(
                        "server_products/upsell/demo2.png"
                      ),
                      alt: "",
                      className: A.demo,
                    })
                  : (0, r.jsx)(C.default, {
                      autoPlay: !0,
                      loop: !0,
                      className: A.demo,
                      width: 400,
                      poster: (0, c.getAssetCDNUrl)(
                        "server_products/upsell/demo2.png"
                      ),
                      src: (0, c.getAssetCDNUrl)(
                        "server_products/upsell/demo.mp4"
                      ),
                    }),
                (0, r.jsx)("img", {
                  src: (0, c.getAssetCDNUrl)(
                    "server_products/upsell/new_sales.png"
                  ),
                  alt: "",
                  className: A.earningsImage,
                }),
              ],
            }),
            (0, r.jsxs)(i.ModalFooter, {
              children: [
                (0, r.jsx)(i.Button, {
                  onClick: () => {
                    _.some(e => v.hasFeature(e))
                      ? p.default.open(
                          a,
                          y.GuildSettingsSections.GUILD_PRODUCTS
                        )
                      : p.default.open(
                          a,
                          y.GuildSettingsSections.ROLE_SUBSCRIPTIONS
                        ),
                      j(N.ContentDismissActionType.PRIMARY),
                      t();
                  },
                  children: "Check it out",
                }),
                (0, r.jsx)(g.default, { size: 12, horizontal: !0 }),
              ],
            }),
          ],
        });
      }
    },
    37785: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return i;
          },
        });
      var r = t("37983"),
        a = t("884691"),
        l = t("77078"),
        o = t("393414"),
        n = t("49111"),
        i = a.forwardRef(function (e, s) {
          let {
              href: t,
              children: i,
              onClick: d,
              onKeyPress: u,
              focusProps: c,
              ...p
            } = e,
            m = a.useCallback(
              e => {
                !e.repeat &&
                  ((e.charCode === n.KeyboardKeys.SPACE ||
                    e.charCode === n.KeyboardKeys.ENTER) &&
                    (e.preventDefault(),
                    null != t && (0, o.transitionTo)(t),
                    null == d || d()),
                  null == u || u(e));
              },
              [t, u, d]
            ),
            f = a.useCallback(
              e => {
                !e.metaKey &&
                  !e.shiftKey &&
                  0 === e.button &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  null != t && (0, o.transitionTo)(t),
                  null == d || d());
              },
              [t, d]
            ),
            h = (0, r.jsx)("a", {
              ref: s,
              href: t,
              onClick: f,
              onKeyPress: m,
              ...p,
              children: i,
            });
          return (0, r.jsx)(l.FocusRing, { ...c, children: h });
        });
    },
  },
]);
//# sourceMappingURL=8b0a95e6554b8fa66372.js.map

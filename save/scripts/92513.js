(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92513"],
  {
    766826: function (e, s, t) {
      "use strict";
      e.exports = t.p + "7e531318fd51f7f7b362.png";
    },
    733154: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("76527");
      t.es(a, s);
    },
    907572: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("437816");
      t.es(a, s);
    },
    823527: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("116788");
      t.es(a, s);
    },
    863638: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return T;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("733154"),
        n = t("907572"),
        r = t("823527"),
        c = t("77078"),
        i = t("79112"),
        o = t("701909"),
        d = t("49111"),
        N = t("782340"),
        E = t("638005"),
        u = t("766826");
      function T(e) {
        let { transitionState: s, onClose: t } = e;
        return (0, a.jsxs)(c.ModalRoot, {
          transitionState: s,
          size: c.ModalSize.DYNAMIC,
          className: E.modalRoot,
          children: [
            (0, a.jsxs)(c.ModalHeader, {
              separator: !1,
              className: E.modalHeader,
              children: [
                (0, a.jsx)("div", {
                  className: E.imageFrame,
                  children: (0, a.jsx)("img", {
                    alt: N.default.Messages
                      .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
                    src: u,
                    className: E.heroImage,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: E.headerWrapper,
                  children: [
                    (0, a.jsx)(c.Heading, {
                      variant: "heading-xl/bold",
                      children:
                        N.default.Messages
                          .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER,
                    }),
                    (0, a.jsx)("div", {
                      className: E.betaTag,
                      children: (0, a.jsx)(c.Text, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: N.default.Messages.BETA,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(c.ModalContent, {
              className: E.modalContent,
              children: [
                (0, a.jsxs)("div", {
                  className: E.modalContentFrame,
                  children: [
                    (0, a.jsx)(c.Text, {
                      variant: "text-md/medium",
                      color: "header-secondary",
                      children:
                        N.default.Messages
                          .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION,
                    }),
                    (0, a.jsx)(_, {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: E.modalFooter,
                  children: [
                    (0, a.jsx)(c.Button, {
                      onClick: t,
                      className: E.button,
                      children:
                        N.default.Messages
                          .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT,
                    }),
                    (0, a.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: E.disclosureText,
                      children:
                        N.default.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format(
                          {
                            recentActivityURL: o.default.getArticleURL(
                              d.HelpdeskArticles.MEMBER_LIST_ACTIVITY_FEED
                            ),
                            handleActivityPrivacyClick: () => {
                              t(),
                                i.default.open(
                                  d.UserSettingsSections.ACTIVITY_PRIVACY
                                );
                            },
                          }
                        ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let _ = () => {
        let e = [
          {
            icon: (0, a.jsx)(n.FriendsIcon, { className: E.icon }),
            text: N.default.Messages
              .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE,
          },
          {
            icon: (0, a.jsx)(r.GameControllerIcon, { className: E.icon }),
            text: N.default.Messages
              .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE,
          },
          {
            icon: (0, a.jsx)(l.ChatIcon, { className: E.icon }),
            text: N.default.Messages
              .CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE,
          },
        ];
        return (0, a.jsx)("div", {
          className: E.notes,
          children: e.map((e, s) => {
            let { icon: t, text: l } = e;
            return (0, a.jsxs)(
              "div",
              {
                className: E.badgeNote,
                children: [
                  (0, a.jsx)("div", { className: E.badge, children: t }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: l,
                  }),
                ],
              },
              "memberlist-learn-more-note-".concat(s)
            );
          }),
        });
      };
    },
    76527: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          ChatIcon: function () {
            return r;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        n = t("82169");
      let r = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: c,
          }),
        });
      };
    },
    437816: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          FriendsIcon: function () {
            return r;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        n = t("82169");
      let r = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...i
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              className: c,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
              className: c,
            }),
          ],
        });
      };
    },
    116788: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          GameControllerIcon: function () {
            return r;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        n = t("82169");
      let r = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            fillRule: "evenodd",
            d: "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
            clipRule: "evenodd",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=2960c400c2bb86de0b8e.js.map

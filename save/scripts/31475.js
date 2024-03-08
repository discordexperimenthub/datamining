(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31475"],
  {
    88885: function (e, s, a) {
      "use strict";
      a.r(s);
      var t = a("605244");
      a.es(t, s);
    },
    56657: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return f;
          },
        });
      var t = a("37983");
      a("884691");
      var l = a("414456"),
        i = a.n(l),
        r = a("669491"),
        d = a("77078"),
        n = a("476765"),
        o = a("79945"),
        c = a("256170"),
        m = a("867544"),
        x = a("399699"),
        u = a("566998"),
        h = a("701909"),
        E = a("49111"),
        _ = a("782340"),
        v = a("864555");
      function N() {
        return (0, t.jsx)("div", {
          className: v.dummySwitch,
          children: (0, t.jsxs)("svg", {
            className: v.dummySlider,
            viewBox: "0 0 28 20",
            preserveAspectRatio: "xMinYMid meet",
            style: { left: 9 },
            children: [
              (0, t.jsx)("rect", {
                fill: "white",
                x: 4,
                y: 0,
                height: 20,
                width: 20,
                rx: "10",
              }),
              (0, t.jsxs)("svg", {
                viewBox: "0 0 20 20",
                fill: "none",
                children: [
                  (0, t.jsx)("path", {
                    fill: r.default.unsafe_rawColors.GREEN_360.css,
                    d: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
                  }),
                  (0, t.jsx)("path", {
                    fill: r.default.unsafe_rawColors.GREEN_360.css,
                    d: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function f(e) {
        let { transitionState: s, onClose: a } = e,
          l = (0, n.useUID)();
        return (0, t.jsxs)(d.ModalRoot, {
          transitionState: s,
          "aria-labelledby": l,
          size: d.ModalSize.LARGE,
          children: [
            (0, t.jsx)(d.ModalCloseButton, {
              className: v.closeButton,
              onClick: a,
            }),
            (0, t.jsxs)(d.ModalContent, {
              className: v.container,
              children: [
                (0, t.jsx)(d.Heading, {
                  id: l,
                  color: "header-primary",
                  variant: "heading-xl/medium",
                  children: _.default.Messages.GUILD_FEED_NUX_CURATION_TITLE,
                }),
                (0, t.jsx)(d.Text, {
                  className: v.subtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: _.default.Messages.GUILD_FEED_NUX_CURATION_SUBTITLE,
                }),
                (0, t.jsxs)("div", {
                  className: v.itemList,
                  children: [
                    (0, t.jsx)("div", {
                      className: v.demoContainer,
                      children: (0, t.jsxs)("div", {
                        className: v.demoList,
                        children: [
                          (0, t.jsxs)("div", {
                            className: v.demoItem,
                            children: [
                              (0, t.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-normal",
                                children: _.default.Messages.ADD_REACTION,
                              }),
                              (0, t.jsx)(o.default, { className: v.demoIcon }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: i(v.demoItem, v.demoItemSelected),
                            children: [
                              (0, t.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children:
                                  _.default.Messages.GUILD_FEED_FEATURE_MESSAGE,
                              }),
                              (0, t.jsx)(c.default, {
                                className: i(
                                  v.demoIcon,
                                  v.demoIconActive,
                                  v.demoCaret
                                ),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: v.demoItem,
                            children: [
                              (0, t.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-normal",
                                children: _.default.Messages.PIN_MESSAGE,
                              }),
                              (0, t.jsx)(u.default, { className: v.demoIcon }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: v.demoContainer,
                      children: (0, t.jsxs)("div", {
                        className: v.demoList,
                        children: [
                          (0, t.jsxs)("div", {
                            className: v.demoItem,
                            children: [
                              (0, t.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-normal",
                                children:
                                  _.default.Messages
                                    .GUILD_FEED_HIDE_MESSAGE_ITEM,
                              }),
                              (0, t.jsx)(m.default, {
                                className: v.demoIcon,
                                foregroundColor: "currentColor",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: i(v.demoItem, v.demoItemSelected),
                            children: [
                              (0, t.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children:
                                  _.default.Messages
                                    .GUILD_FEED_REMOVE_MESSAGE_ITEM,
                              }),
                              (0, t.jsx)(x.default, {
                                className: i(v.demoIcon, v.demoIconActive),
                                foregroundColor: "currentColor",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: v.demoContainer,
                      children: (0, t.jsx)("div", {
                        className: v.demoList,
                        children: (0, t.jsxs)("div", {
                          className: v.demoItem,
                          style: { padding: 0 },
                          children: [
                            (0, t.jsx)(d.Text, {
                              variant: "text-md/semibold",
                              color: "header-primary",
                              children:
                                _.default.Messages.GUILD_FEED_DEMOTE_CHANNEL,
                            }),
                            (0, t.jsx)(N, {}),
                          ],
                        }),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: v.textContainer,
                      children: [
                        (0, t.jsx)(d.Text, {
                          className: v.itemTitle,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children:
                            _.default.Messages
                              .GUILD_FEED_NUX_CURATION_FEATURE_TITLE,
                        }),
                        (0, t.jsx)(d.Text, {
                          className: v.itemSubtitle,
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            _.default.Messages
                              .GUILD_FEED_NUX_CURATION_FEATURE_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: v.textContainer,
                      children: [
                        (0, t.jsx)(d.Text, {
                          className: v.itemTitle,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children:
                            _.default.Messages
                              .GUILD_FEED_NUX_CURATION_REMOVE_TITLE,
                        }),
                        (0, t.jsx)(d.Text, {
                          className: v.itemSubtitle,
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            _.default.Messages
                              .GUILD_FEED_NUX_CURATION_REMOVE_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: v.textContainer,
                      children: [
                        (0, t.jsx)(d.Text, {
                          className: v.itemTitle,
                          variant: "text-md/medium",
                          color: "header-primary",
                          children:
                            _.default.Messages
                              .GUILD_FEED_NUX_CURATION_BLOCK_TITLE,
                        }),
                        (0, t.jsx)(d.Text, {
                          className: v.itemSubtitle,
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            _.default.Messages
                              .GUILD_FEED_NUX_CURATION_BLOCK_SUBTITLE,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)(d.ModalFooter, {
              children: [
                (0, t.jsx)(d.Button, {
                  onClick: a,
                  children: _.default.Messages.OKAY,
                }),
                (0, t.jsx)(d.Anchor, {
                  className: i(
                    v.learnMore,
                    (0, d.getButtonStyle)({
                      look: d.Button.Looks.LINK,
                      color: d.Button.Colors.PRIMARY,
                    })
                  ),
                  href: h.default.getArticleURL(E.HelpdeskArticles.GUILD_HOME),
                  children: _.default.Messages.LEARN_MORE,
                }),
              ],
            }),
          ],
        });
      }
    },
    399699: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return d;
          },
        });
      var t = a("37983");
      a("884691");
      var l = a("469563"),
        i = a("88885"),
        r = a("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 24,
              height: a = 24,
              color: l = "currentColor",
              foreground: i,
              ...d
            } = e;
            return (0, t.jsxs)("svg", {
              ...(0, r.default)(d),
              width: s,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, t.jsx)("rect", {
                  className: i,
                  x: "2.10049",
                  y: "20.4853",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2.10049 20.4853)",
                  fill: l,
                }),
                (0, t.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                  fill: l,
                }),
              ],
            });
          },
          i.HomeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    605244: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          HomeSlashIcon: function () {
            return r;
          },
        });
      var t = a("37983");
      a("884691");
      var l = a("669491"),
        i = a("82169");
      let r = e => {
        let {
          width: s = 24,
          height: a = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...n
        } = e;
        return (0, t.jsx)("svg", {
          ...(0, i.default)(n),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM15.5 3.7a.5.5 0 0 1 .05.75l-10.9 10.9a.5.5 0 0 1-.85-.3l-.27-2.72a.46.46 0 0 0-.35-.4 2 2 0 0 1-.79-3.54l8.39-6.45a2 2 0 0 1 2.44 0L15.5 3.7ZM6.31 22c-.12 0-.17-.14-.08-.23l1.92-1.92a.5.5 0 0 1 .85.36V21a1 1 0 0 1-1 1H6.31ZM14.47 13.53c-.19.19-.19.5-.03.73.35.5.56 1.1.56 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.8l.79-7.87c.02-.2.16-.36.35-.4a2 2 0 0 0 .79-3.54l-.78-.6a.5.5 0 0 0-.66.04l-5.7 5.7Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=f559bbed51f508445f7d.js.map

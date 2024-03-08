(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36034"],
  {
    242149: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          QUICKSWITCHER_SHOW: function () {
            return o;
          },
        });
      var n = s("104589"),
        a = s("778588");
      let o = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!a.default.hasLayers() && (0, n.show)(), !1),
      };
    },
    347445: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          TOGGLE_HOTKEYS: function () {
            return i;
          },
        });
      var n = s("77078"),
        a = s("244030"),
        o = s("386867");
      let i = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, n.hasModalOpen)(o.KEYBOARD_SHORTCUT_MODAL_KEY)
            ? a.hide()
            : a.show(),
          !1
        ),
      };
    },
    856584: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return O;
          },
        });
      var n = s("37983"),
        a = s("884691"),
        o = s("77078"),
        i = s("242149"),
        r = s("347445"),
        d = s("476765"),
        l = s("701909"),
        c = s("180748"),
        u = s("49111"),
        _ = s("782340"),
        T = s("162757");
      function O(t) {
        let { transitionState: e, onClose: s } = t,
          O = (0, d.useUID)();
        return (
          a.useEffect(() => {
            c.keyboardNavigationExplainerModalSeen();
          }, []),
          (0, n.jsxs)(o.ModalRoot, {
            transitionState: e,
            role: "alertdialog",
            "aria-labelledby": O,
            children: [
              (0, n.jsxs)(o.ModalContent, {
                className: T.content,
                children: [
                  (0, n.jsx)(o.Heading, {
                    variant: "heading-xl/semibold",
                    id: O,
                    className: T.header,
                    children:
                      _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format(
                        {
                          tab: (t, e) =>
                            (0, n.jsx)(
                              o.KeyCombo,
                              { shortcut: "tab", className: T.headerShortcut },
                              e
                            ),
                        }
                      ),
                  }),
                  (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children:
                      _.default.Messages
                        .KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY,
                  }),
                  (0, n.jsxs)("ul", {
                    className: T.tips,
                    children: [
                      (0, n.jsxs)("li", {
                        children: [
                          (0, n.jsx)(o.KeyCombo, {
                            shortcut: r.TOGGLE_HOTKEYS.binds[0],
                          }),
                          (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children:
                              _.default.Messages
                                .KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("li", {
                        children: [
                          (0, n.jsx)(o.KeyCombo, {
                            shortcut: i.QUICKSWITCHER_SHOW.binds[0],
                          }),
                          (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children:
                              _.default.Messages
                                .KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children:
                      _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format(
                        {
                          link: l.default.getArticleURL(
                            u.HelpdeskArticles.KEYBOARD_NAVIGATION
                          ),
                        }
                      ),
                  }),
                ],
              }),
              (0, n.jsx)(o.ModalFooter, {
                children: (0, n.jsx)(o.Button, {
                  onClick: s,
                  color: o.Button.Colors.BRAND,
                  size: o.Button.Sizes.SMALL,
                  autoFocus: !0,
                  children: _.default.Messages.OKAY,
                }),
              }),
            ],
          })
        );
      }
    },
    244030: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          show: function () {
            return a;
          },
          hide: function () {
            return o;
          },
        });
      var n = s("913144");
      function a() {
        n.default.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function o() {
        n.default.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    386867: function (t, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          KEYBOARD_SHORTCUT_MODAL_KEY: function () {
            return n;
          },
        });
      let n = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
  },
]);
//# sourceMappingURL=75298ba58bf4e9d42ef2.js.map

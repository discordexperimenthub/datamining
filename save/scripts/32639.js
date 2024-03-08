(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32639"],
  {
    170441: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("77078"),
        a = n("139321"),
        l = n("13798"),
        i = n("350501"),
        d = n("782340"),
        c = n("638753");
      function r(e) {
        let {
          guildId: t,
          channel: r,
          keybind: u,
          transitionState: D,
          onClose: O,
        } = e;
        function _() {
          (0, a.hideHotspot)(
            a.HotspotLocations.SOUNDBOARD_WHEEL_EDUCATION_MODAL
          ),
            O();
        }
        function h() {
          _(),
            (0, o.openModalLazy)(async () => {
              let { default: e } = await n
                .el("644926")
                .then(n.bind(n, "644926"));
              return t => (0, s.jsx)(e, { ...t });
            });
        }
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: D,
          "aria-label":
            d.default.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER,
          children: [
            (0, s.jsxs)(o.ModalContent, {
              className: c.content,
              children: [
                (0, s.jsx)(o.Heading, {
                  variant: "heading-xl/extrabold",
                  className: c.header,
                  children:
                    d.default.Messages
                      .SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER,
                }),
                (0, s.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children:
                    d.default.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_BODY.format(
                      {
                        keybind: (0, l.toString)(u.shortcut, !0).split(" + "),
                        keybindHook: (e, t) =>
                          (0, s.jsx)(
                            "span",
                            {
                              className: c.keybindHintKeys,
                              children: (0, s.jsx)(o.KeyCombo, {
                                className: c.keybindShortcut,
                                shortcut: (0, l.toString)(u.shortcut, !1),
                              }),
                            },
                            t
                          ),
                        openSettingsHook: (e, t) =>
                          (0, s.jsx)(o.Anchor, { onClick: h, children: e }, t),
                      }
                    ),
                }),
                (0, s.jsx)("div", {
                  className: c.soundWheel,
                  children: (0, s.jsx)(i.default, {
                    width: 372,
                    height: 316,
                    guildId: t,
                    channel: r,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                  }),
                }),
              ],
            }),
            (0, s.jsxs)(o.ModalFooter, {
              children: [
                (0, s.jsx)(o.Button, {
                  onClick: _,
                  children:
                    d.default.Messages
                      .SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_CONFIRM,
                }),
                (0, s.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.PRIMARY,
                  onClick: h,
                  children:
                    d.default.Messages
                      .SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_EDIT_KEYBIND,
                }),
              ],
            }),
            (0, s.jsx)(o.ModalCloseButton, {
              className: c.closeButton,
              onClick: _,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=b51039f70eb6f2e55955.js.map

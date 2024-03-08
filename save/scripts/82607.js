(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82607"],
  {
    6674: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return m;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        o = a("414456"),
        r = a.n(o),
        l = a("77078"),
        i = a("54239"),
        c = a("599417"),
        d = a("393414"),
        u = a("845579"),
        E = a("49111"),
        T = a("782340"),
        _ = a("741806"),
        h = a("890957");
      function m(t) {
        let { transitionState: e, onClose: a } = t,
          [o, m] = n.useState(!1),
          [A, g] = n.useState(null),
          x = async () => {
            g(null), m(!0);
            try {
              await u.FamilyCenterEnabled.updateSetting(!1),
                (0, d.transitionTo)(E.Routes.FRIENDS),
                (0, i.popLayer)(),
                a();
            } catch (e) {
              let t = new c.default(e);
              g(t.getAnyErrorMessage());
            } finally {
              m(!1);
            }
          },
          C = () => {
            (0, d.transitionTo)(E.Routes.SETTINGS("family-center")), a();
          };
        return (0, s.jsxs)(l.ModalRoot, {
          className: _.root,
          transitionState: e,
          children: [
            (0, s.jsxs)(l.ModalHeader, {
              separator: !1,
              className: _.header,
              children: [
                (0, s.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  className: _.title,
                  children:
                    T.default.Messages
                      .FAMILY_CENTER_DISABLE_FEATURE_MODAL_HEADER_TEXT,
                }),
                (0, s.jsx)(l.Text, {
                  variant: "text-sm/normal",
                  className: _.subtitle,
                  children:
                    T.default.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_SUBTITLE_TEXT.format(
                      {
                        openSettingsHook: (t, e) =>
                          (0, s.jsx)(l.Anchor, { onClick: C, children: t }, e),
                      }
                    ),
                }),
              ],
            }),
            (0, s.jsxs)(l.ModalContent, {
              children: [
                (0, s.jsxs)("div", {
                  className: r(_.buttonContainer, h.marginTop20),
                  children: [
                    (0, s.jsx)(l.Button, {
                      type: "submit",
                      className: h.marginBottom8,
                      grow: !0,
                      color: l.Button.Colors.RED,
                      onClick: x,
                      submitting: o,
                      children:
                        T.default.Messages
                          .FAMILY_CENTER_DISABLE_FEATURE_MODAL_DISABLE_BUTTON_TEXT,
                    }),
                    (0, s.jsx)(l.Button, {
                      grow: !0,
                      color: l.Button.Colors.PRIMARY,
                      onClick: a,
                      children: T.default.Messages.CANCEL,
                    }),
                  ],
                }),
                (0, s.jsx)(l.Text, {
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: A,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=2bd1c7c8246314e3578d.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81121"],
  {
    846339: function (t, e, n) {
      "use strict";
      t.exports = n.p + "d1bdcfab9d054e1d8ba5.svg";
    },
    496896: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return T;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("77078"),
        a = n("79112"),
        i = n("845579"),
        l = n("145131"),
        c = n("476765"),
        d = n("599110"),
        r = n("49111"),
        u = n("397336"),
        A = n("782340"),
        _ = n("741640"),
        C = n("846339");
      function T(t) {
        let { onClose: e, transitionState: n } = t,
          T = (0, c.useUID)();
        function L() {
          e(),
            a.default.open(r.UserSettingsSections.ACCESSIBILITY, null, {
              scrollPosition: u.AccessibilityScrollPositions.LEGACY_CHAT_INPUT,
            });
        }
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: n,
          "aria-labelledby": T,
          children: [
            (0, s.jsx)("img", { className: _.art, src: C, alt: "" }),
            (0, s.jsx)(o.ModalContent, {
              children: (0, s.jsxs)(l.default, {
                direction: l.default.Direction.VERTICAL,
                justify: l.default.Justify.CENTER,
                children: [
                  (0, s.jsx)(o.Heading, {
                    id: T,
                    variant: "heading-lg/semibold",
                    className: _.title,
                    children:
                      A.default.Messages
                        .LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_TITLE,
                  }),
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: _.body,
                    children:
                      A.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_MESSAGE.format(
                        {
                          openSettingsHook: (t, e) =>
                            (0, s.jsx)(
                              o.Anchor,
                              { onClick: L, children: t },
                              e
                            ),
                        }
                      ),
                  }),
                ],
              }),
            }),
            (0, s.jsxs)(o.ModalFooter, {
              children: [
                (0, s.jsx)(o.Button, {
                  type: "button",
                  onClick: function () {
                    d.default.track(
                      r.AnalyticEvents.LEGACY_CHAT_INPUT_TOGGLED,
                      {
                        enabled: !1,
                        location: "LegacyChatInputExplanationModal",
                      }
                    ),
                      i.UseLegacyChatInput.updateSetting(!1),
                      e();
                  },
                  children:
                    A.default.Messages
                      .LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_BUTTON_CTA,
                }),
                (0, s.jsx)(o.Button, {
                  type: "button",
                  look: o.Button.Looks.LINK,
                  size: o.Button.Sizes.MEDIUM,
                  color: o.Button.Colors.PRIMARY,
                  onClick: e,
                  children: A.default.Messages.NO_THANKS,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=99e51538b0838f3d6500.js.map

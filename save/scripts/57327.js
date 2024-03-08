(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57327"],
  {
    264514: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return M;
          },
        }),
        t("222007");
      var a = t("37983");
      t("884691");
      var l = t("627445"),
        n = t.n(l),
        o = t("77078"),
        i = t("162426"),
        r = t("197509"),
        d = t("191814"),
        u = t("476765"),
        c = t("49111"),
        E = t("782340"),
        T = t("161296");
      function M(e) {
        let { transitionState: s, guild: t, onClose: l } = e,
          M = (0, u.useUID)(),
          [N, { loading: O, error: _ }] = (0, i.default)(r.removeMonetization),
          h = async () => {
            n(null != t, "no guild");
            let e = await N(t.id);
            null != e && l();
          };
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: s,
          "aria-labelledby": M,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              children: [
                (0, a.jsx)(o.Heading, {
                  id: M,
                  variant: "heading-md/semibold",
                  children:
                    E.default.Messages
                      .CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_HEADER,
                }),
                (0, a.jsx)(o.ModalCloseButton, {
                  className: T.closeButton,
                  onClick: l,
                }),
              ],
            }),
            (0, a.jsxs)(o.ModalContent, {
              className: T.content,
              children: [
                null != _
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(o.FormErrorBlock, { children: _.message }),
                        (0, a.jsx)(d.default, { size: 24 }),
                      ],
                    })
                  : null,
                (0, a.jsx)(o.FormText, {
                  type: o.FormText.Types.ERROR,
                  children:
                    E.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_MODAL_DESCRIPTION.format(
                      {
                        guildName: t.toString(),
                        url: c.MarketingURLs.DEVELOPER_PORTAL_TEAMS,
                      }
                    ),
                }),
                (0, a.jsx)(d.default, { size: 16 }),
              ],
            }),
            (0, a.jsx)(o.ModalFooter, {
              className: T.footer,
              children: (0, a.jsx)(o.Button, {
                color: o.Button.Colors.RED,
                className: T.goBackButton,
                submitting: O,
                onClick: h,
                children: E.default.Messages.SAVE,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=491cf3de86500bcb3079.js.map

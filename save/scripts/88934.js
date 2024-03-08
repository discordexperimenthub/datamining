(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88934"],
  {
    846903: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d12b5c285831f85c5eee.svg";
    },
    34212: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c60749c54c9f5152ebbc.svg";
    },
    359694: function (e, t, s) {
      "use strict";
      e.exports = s.p + "7e81dd54960672eabe78.svg";
    },
    783096: function (e, t, s) {
      "use strict";
      e.exports = s.p + "b0b5c172690ff57e9432.svg";
    },
    267237: function (e, t, s) {
      "use strict";
      e.exports = s.p + "41675689ca055858e137.svg";
    },
    948195: function (e, t, s) {
      "use strict";
      e.exports = s.p + "e8260769c855befdc8fe.svg";
    },
    510676: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f0cba42b6a6d3b2de4fd.svg";
    },
    737444: function (e, t, s) {
      "use strict";
      e.exports = s.p + "0a3ae0a6213e605457af.svg";
    },
    999391: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        a = s("627445"),
        r = s.n(a),
        o = s("446674"),
        u = s("752113"),
        i = s("697218"),
        c = s("719923"),
        d = s("782340");
      class f extends l.Component {
        render() {
          let { user: e, transitionState: t, onClose: s } = this.props;
          return (0, n.jsxs)(u.default, {
            transitionState: t,
            "aria-label": d.default.Messages.PREMIUM_REQUIRED,
            children: [
              (0, n.jsx)(u.default.Header, {
                onClose: () => s(!1),
                children: d.default.Messages.PREMIUM_REQUIRED,
              }),
              (0, n.jsx)(u.default.Content, {
                type: u.default.Types.UPGRADE,
                children:
                  c.default.isPremium(e) &&
                  !c.default.canInstallPremiumApplications(e)
                    ? d.default.Messages.PREMIUM_UPGRADE_REQUIRED_BODY
                    : d.default.Messages.PREMIUM_SUBSCRIPTION_REQUIRED_BODY,
              }),
              (0, n.jsx)(u.default.Footer, {
                primary: {
                  onClick: () => s(!0),
                  label: d.default.Messages.PREMIUM_REQUIRED_GET_NITRO,
                },
              }),
            ],
          });
        }
      }
      var E = o.default.connectStores([i.default], () => {
        let e = i.default.getCurrentUser();
        return (
          r(null != e, "PremiumRequiredModal: user cannot be null"), { user: e }
        );
      })(f);
    },
    752113: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n,
        l,
        a = s("37983");
      s("884691");
      var r = s("77078"),
        o = s("145131"),
        u = s("917570");
      ((n = l || (l = {})).UPGRADE = "UPGRADE"),
        (n.CANCEL = "CANCEL"),
        (n.UNVERIFIED = "UNVERIFIED"),
        (n.UNCLAIMED = "UNCLAIMED"),
        (n.GRANDFATHERED = "GRANDFATHERED");
      let i = {
          UPGRADE: "imageUpgrade",
          CANCEL: "imageCancel",
          UNVERIFIED: "imageUnverified",
          UNCLAIMED: "imageUnclaimed",
          GRANDFATHERED: "imageCancel",
        },
        c = e => {
          let { children: t, ...s } = e;
          return (0, a.jsx)(r.ModalRoot, { ...s, children: t });
        };
      (c.Header = e => {
        let { children: t, onClose: s } = e;
        return (0, a.jsxs)(r.ModalHeader, {
          justify: o.default.Justify.BETWEEN,
          separator: !1,
          children: [
            (0, a.jsx)(r.FormTitle, { tag: r.FormTitleTags.H4, children: t }),
            null != s
              ? (0, a.jsx)(r.ModalCloseButton, {
                  className: u.closeIcon,
                  onClick: s,
                })
              : null,
          ],
        });
      }),
        (c.Content = e => {
          let { children: t, type: s } = e;
          return (0, a.jsxs)(r.ModalContent, {
            children: [
              (0, a.jsx)("div", { className: u[i[s]] }),
              (0, a.jsx)("div", { className: u.message, children: t }),
            ],
          });
        }),
        (c.Footer = e => {
          let { primary: t, primaryRenderer: s, secondary: n } = e;
          return (0, a.jsx)(r.ModalFooter, {
            children: (0, a.jsxs)(o.default, {
              justify: o.default.Justify.END,
              children: [
                null != n
                  ? (0, a.jsx)(r.Button, {
                      onClick: n.onClick,
                      look: r.Button.Looks.LINK,
                      innerClassName: u.secondaryButton,
                      children: n.label,
                    })
                  : null,
                null != t
                  ? (0, a.jsx)(r.Button, {
                      onClick: t.onClick,
                      color: r.Button.Colors.BRAND,
                      children: t.label,
                    })
                  : s,
              ],
            }),
          });
        }),
        (c.Types = l);
      var d = c;
    },
  },
]);
//# sourceMappingURL=91545c0bf1b21863a108.js.map

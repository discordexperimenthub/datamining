(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28649"],
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
        c = s("145131"),
        o = s("917570");
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
        u = e => {
          let { children: t, ...s } = e;
          return (0, a.jsx)(r.ModalRoot, { ...s, children: t });
        };
      (u.Header = e => {
        let { children: t, onClose: s } = e;
        return (0, a.jsxs)(r.ModalHeader, {
          justify: c.default.Justify.BETWEEN,
          separator: !1,
          children: [
            (0, a.jsx)(r.FormTitle, { tag: r.FormTitleTags.H4, children: t }),
            null != s
              ? (0, a.jsx)(r.ModalCloseButton, {
                  className: o.closeIcon,
                  onClick: s,
                })
              : null,
          ],
        });
      }),
        (u.Content = e => {
          let { children: t, type: s } = e;
          return (0, a.jsxs)(r.ModalContent, {
            children: [
              (0, a.jsx)("div", { className: o[i[s]] }),
              (0, a.jsx)("div", { className: o.message, children: t }),
            ],
          });
        }),
        (u.Footer = e => {
          let { primary: t, primaryRenderer: s, secondary: n } = e;
          return (0, a.jsx)(r.ModalFooter, {
            children: (0, a.jsxs)(c.default, {
              justify: c.default.Justify.END,
              children: [
                null != n
                  ? (0, a.jsx)(r.Button, {
                      onClick: n.onClick,
                      look: r.Button.Looks.LINK,
                      innerClassName: o.secondaryButton,
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
        (u.Types = l);
      var d = u;
    },
    984599: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("77078"),
        r = s("752113"),
        c = s("782340");
      class o extends l.Component {
        render() {
          let { transitionState: e } = this.props;
          return (0, n.jsxs)(r.default, {
            transitionState: e,
            "aria-label": c.default.Messages.PREMIUM_NOT_CLAIMED,
            children: [
              (0, n.jsx)(r.default.Header, {
                children: c.default.Messages.PREMIUM_NOT_CLAIMED,
              }),
              (0, n.jsx)(r.default.Content, {
                type: r.default.Types.UNCLAIMED,
                children: c.default.Messages.PREMIUM_NOT_CLAIMED_BODY,
              }),
              (0, n.jsx)(r.default.Footer, {
                secondary: {
                  onClick: this.cancel,
                  label: c.default.Messages.NEVERMIND,
                },
                primary: {
                  onClick: this.claimAccount,
                  label: c.default.Messages.CLAIM_ACCOUNT,
                },
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.cancel = () => {
              let { onClose: e } = this.props;
              null == e || e();
            }),
            (this.claimAccount = () => {
              let { onClose: e } = this.props;
              null == e || e(),
                (0, a.openModalLazy)(async () => {
                  let { default: e } = await s
                    .el("633156")
                    .then(s.bind(s, "633156"));
                  return t => (0, n.jsx)(e, { ...t });
                });
            });
        }
      }
      var i = o;
    },
  },
]);
//# sourceMappingURL=7e184c86c1f0fbb15bd1.js.map

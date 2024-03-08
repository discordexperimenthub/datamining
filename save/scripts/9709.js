(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9709"],
  {
    377242: function (e, s, t) {
      "use strict";
      e.exports = t.p + "2fe51ab3c6e4a2f071d0.svg";
    },
    64614: function (e, s, t) {
      "use strict";
      e.exports = t.p + "160965070a33cfbb5c24.png";
    },
    735063: function (e, s, t) {
      "use strict";
      e.exports = t.p + "72ce193f3363a03c1c5e.svg";
    },
    176384: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return u;
          },
        }),
        t("222007");
      var n = t("37983"),
        i = t("884691"),
        r = t("730290"),
        a = t("382825"),
        l = t("619340"),
        o = t("456320"),
        c = t("49111");
      function d(e) {
        let { platformType: s } = e,
          [t, a] = i.useState("verifying");
        return (
          i.useEffect(() => {
            let e = r.parse(window.location.search),
              { code: t, state: n } = e;
            if (null == t || null == n) {
              a("error");
              return;
            }
            l.default.linkDispatchAuthCallback(s, { code: t, state: n }).then(
              e => {
                let { status: s } = e;
                a(204 === s ? "verified" : "error");
              },
              () => {
                a("error");
              }
            );
          }, [s]),
          (0, n.jsx)(o.AccountConnectionResult, {
            platformType: s,
            verifying: "verifying" === t,
            verified: "verified" === t,
          })
        );
      }
      var u = function (e) {
        let { match: s } = e,
          t = s.params.type,
          { two_way_link_type: i } = r.parse(window.location.search);
        return [
          c.PlatformTypes.XBOX,
          c.PlatformTypes.PLAYSTATION_STAGING,
          c.PlatformTypes.PLAYSTATION,
          c.PlatformTypes.CRUNCHYROLL,
        ].includes(t) && i === a.TwoWayLinkType.DESKTOP
          ? (0, n.jsx)(d, { platformType: t })
          : null;
      };
    },
    456320: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          AccountConnectionResult: function () {
            return h;
          },
          default: function () {
            return g;
          },
        }),
        t("222007");
      var n = t("37983"),
        i = t("884691"),
        r = t("414456"),
        a = t.n(r),
        l = t("730290"),
        o = t("77078"),
        c = t("619340"),
        d = t("376556"),
        u = t("43982"),
        f = t("49111"),
        p = t("782340"),
        m = t("533144");
      let C = null != window.opener;
      function h(e) {
        let s,
          t,
          { verifying: r, verified: l, platformType: c } = e,
          u = d.default.get(c),
          f = i.useCallback(() => {
            window.close();
          }, []);
        return (
          (s = r
            ? (0, n.jsx)("div", {
                className: m.message,
                children: p.default.Messages.CONNECTED_ACCOUNT_VERIFYING.format(
                  { name: u.name }
                ),
              })
            : l
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: m.message,
                      children:
                        p.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format(
                          { name: u.name }
                        ),
                    }),
                    (0, n.jsx)("div", {
                      className: a(m.message, m.details),
                      children:
                        p.default.Messages
                          .CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS,
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: a(m.message, m.error),
                      children:
                        p.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format(
                          { name: u.name }
                        ),
                    }),
                    (0, n.jsx)("div", {
                      className: a(m.message, m.details),
                      children:
                        p.default.Messages
                          .CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                    }),
                  ],
                })),
          (C || r) &&
            (t = (0, n.jsx)(o.Button, {
              className: m.btn,
              disabled: r,
              onClick: f,
              children: r
                ? (0, n.jsx)(o.Spinner, { itemClassName: m.spinnerItem })
                : p.default.Messages.DONE,
            })),
          (0, n.jsx)("div", {
            className: m.verifyConnectedAccount,
            children: (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("div", {
                  className: m.logos,
                  children: [
                    (0, n.jsx)("div", { className: a(m.logo, m.logoDiscord) }),
                    (0, n.jsx)("div", { className: m.logosDivider }),
                    (0, n.jsx)("div", {
                      className: m.logo,
                      style: {
                        backgroundImage: 'url("'.concat(u.icon.whiteSVG, '")'),
                      },
                    }),
                  ],
                }),
                s,
                t,
              ],
            }),
          })
        );
      }
      class N extends i.Component {
        componentDidMount() {
          let e;
          let s = (0, l.parse)(this.props.location.search),
            { code: t, state: n, oauth_verifier: i, loading: r } = s;
          if (null != r) return;
          null != i && (t = i),
            Object.keys(s).forEach(t => {
              t.startsWith("openid.") && (null == e && (e = {}), (e[t] = s[t]));
            });
          let a = e => {
              let { status: s, body: t } = e;
              this.setState(
                { verifying: !1, verified: 204 === s || 200 === s },
                () => {
                  this.state.verified && C && window.close();
                }
              ),
                (null == t ? void 0 : t.redirect) != null &&
                  (window.location = t.redirect);
            },
            o = { code: t, openid_params: e, state: n },
            d = e => c.default.callback(this.getType(), o, e).then(a, a);
          if (C) {
            d(!1);
            return;
          }
          u.default
            .request(f.RPCCommands.CONNECTIONS_CALLBACK, {
              ...o,
              providerType: this.getType(),
            })
            .then(a, e => d("RPCError" !== e.name))
            .then(() => u.default.disconnect());
        }
        render() {
          let { verifying: e, verified: s } = this.state,
            t = this.getType();
          return d.default.isSupported(t)
            ? (0, n.jsx)(h, {
                platformType: this.getType(),
                verifying: e,
                verified: s,
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            (this.state = { verifying: !0, verified: !1 }),
            (this.getType = () => this.props.match.params.type);
        }
      }
      var g = N;
    },
  },
]);
//# sourceMappingURL=7b058ae197d56ff54f6f.js.map

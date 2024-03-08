(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39377"],
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
    456320: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          AccountConnectionResult: function () {
            return h;
          },
          default: function () {
            return N;
          },
        }),
        t("222007");
      var a = t("37983"),
        i = t("884691"),
        n = t("414456"),
        r = t.n(n),
        l = t("730290"),
        c = t("77078"),
        d = t("619340"),
        o = t("376556"),
        u = t("43982"),
        p = t("49111"),
        m = t("782340"),
        C = t("533144");
      let f = null != window.opener;
      function h(e) {
        let s,
          t,
          { verifying: n, verified: l, platformType: d } = e,
          u = o.default.get(d),
          p = i.useCallback(() => {
            window.close();
          }, []);
        return (
          (s = n
            ? (0, a.jsx)("div", {
                className: C.message,
                children: m.default.Messages.CONNECTED_ACCOUNT_VERIFYING.format(
                  { name: u.name }
                ),
              })
            : l
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: C.message,
                      children:
                        m.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format(
                          { name: u.name }
                        ),
                    }),
                    (0, a.jsx)("div", {
                      className: r(C.message, C.details),
                      children:
                        m.default.Messages
                          .CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS,
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: r(C.message, C.error),
                      children:
                        m.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format(
                          { name: u.name }
                        ),
                    }),
                    (0, a.jsx)("div", {
                      className: r(C.message, C.details),
                      children:
                        m.default.Messages
                          .CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS,
                    }),
                  ],
                })),
          (f || n) &&
            (t = (0, a.jsx)(c.Button, {
              className: C.btn,
              disabled: n,
              onClick: p,
              children: n
                ? (0, a.jsx)(c.Spinner, { itemClassName: C.spinnerItem })
                : m.default.Messages.DONE,
            })),
          (0, a.jsx)("div", {
            className: C.verifyConnectedAccount,
            children: (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("div", {
                  className: C.logos,
                  children: [
                    (0, a.jsx)("div", { className: r(C.logo, C.logoDiscord) }),
                    (0, a.jsx)("div", { className: C.logosDivider }),
                    (0, a.jsx)("div", {
                      className: C.logo,
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
      class g extends i.Component {
        componentDidMount() {
          let e;
          let s = (0, l.parse)(this.props.location.search),
            { code: t, state: a, oauth_verifier: i, loading: n } = s;
          if (null != n) return;
          null != i && (t = i),
            Object.keys(s).forEach(t => {
              t.startsWith("openid.") && (null == e && (e = {}), (e[t] = s[t]));
            });
          let r = e => {
              let { status: s, body: t } = e;
              this.setState(
                { verifying: !1, verified: 204 === s || 200 === s },
                () => {
                  this.state.verified && f && window.close();
                }
              ),
                (null == t ? void 0 : t.redirect) != null &&
                  (window.location = t.redirect);
            },
            c = { code: t, openid_params: e, state: a },
            o = e => d.default.callback(this.getType(), c, e).then(r, r);
          if (f) {
            o(!1);
            return;
          }
          u.default
            .request(p.RPCCommands.CONNECTIONS_CALLBACK, {
              ...c,
              providerType: this.getType(),
            })
            .then(r, e => o("RPCError" !== e.name))
            .then(() => u.default.disconnect());
        }
        render() {
          let { verifying: e, verified: s } = this.state,
            t = this.getType();
          return o.default.isSupported(t)
            ? (0, a.jsx)(h, {
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
      var N = g;
    },
  },
]);
//# sourceMappingURL=b24489ec4f756b6e86ad.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91591"],
  {
    337863: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var a = s("37983");
      s("884691");
      var u = s("90915"),
        n = s("73749"),
        o = s("563555"),
        c = s("33942"),
        r = s("941281"),
        h = s("49111");
      function i() {
        return (0, a.jsxs)(u.Switch, {
          children: [
            (0, a.jsx)(n.default, {
              path: h.Routes.OAUTH2_AUTHORIZED,
              component: r.OAuth2AuthorizedPage,
            }),
            (0, a.jsx)(n.default, {
              path: h.Routes.OAUTH2_AUTHORIZE,
              component: c.OAuth2AuthorizePage,
            }),
            (0, a.jsx)(n.default, {
              path: h.Routes.OAUTH2_ERROR,
              component: r.OAuth2ErrorPage,
            }),
            (0, a.jsx)(n.default, {
              path: [
                h.Routes.OAUTH2_WHITELIST_ACCEPT,
                "/oauth2/whitelist/accept",
              ],
              component: o.default,
            }),
          ],
        });
      }
    },
    563555: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s("222007");
      var a = s("37983"),
        u = s("884691"),
        n = s("730290"),
        o = s("90915"),
        c = s("8222"),
        r = s("267570"),
        h = s("941281"),
        i = s("782340");
      function d() {
        let e;
        let t = (0, o.useLocation)(),
          [s, d] = u.useState(!1),
          [l, f] = u.useState(!1);
        return (
          u.useEffect(() => {
            (async function e() {
              let e = (0, n.parse)(t.search);
              try {
                var s;
                await (0, c.acceptWhitelist)(
                  null !== (s = e.token) && void 0 !== s ? s : ""
                ),
                  d(!0);
              } catch {
                f(!0);
              }
            })();
          }, [t.search]),
          (e = s
            ? (0, a.jsx)(h.OAuth2Success, {
                message: i.default.Messages.WHITELISTED,
                showsCloseWindowText: !0,
              })
            : l
              ? (0, a.jsx)(h.OAuth2Error, {
                  message: i.default.Messages.WHITELIST_FAILED,
                  showsCloseWindowText: !0,
                })
              : (0, a.jsx)(h.default, {
                  message: i.default.Messages.WHITELISTING,
                  spinner: !0,
                })),
          (0, a.jsx)(r.OAuth2Page, { children: e })
        );
      }
    },
  },
]);
//# sourceMappingURL=6c42b4c506b85fe11a22.js.map

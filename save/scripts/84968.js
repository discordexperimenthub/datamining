(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84968"],
  {
    143453: function (e, a, t) {
      "use strict";
      e.exports = t.p + "8da9ef44f0d6b8822df6.png";
    },
    249978: function (e, a, t) {
      "use strict";
      t.r(a);
      var s = t("613511");
      t.es(s, a);
    },
    598347: function (e, a, t) {
      "use strict";
      var s, n;
      t.r(a),
        t.d(a, {
          TwoWayLinkModalSlideTypes: function () {
            return s;
          },
        }),
        ((n = s || (s = {})).LANDING = "landing"),
        (n.PRE_CONNECT = "pre-connect"),
        (n.PRE_CONNECT_WAITING = "pre-connect-waiting"),
        (n.DISCORD_CONSENT = "discord-consent"),
        (n.SUCCESS = "success"),
        (n.ERROR = "error");
    },
    755993: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          TwoWayLinkDiscordConsent: function () {
            return m;
          },
        }),
        t("222007");
      var s = t("37983"),
        n = t("884691"),
        l = t("627445"),
        r = t.n(l),
        o = t("77078"),
        i = t("619340"),
        c = t("605250"),
        d = t("33942"),
        u = t("145131"),
        h = t("782340"),
        N = t("221818");
      let x = new c.default("TwoWayLinkDiscordConsentWeb");
      function m(e) {
        let {
            platformType: a,
            clientId: t,
            scopes: l,
            authToken: c,
            onContinue: m,
            onError: C,
            onClose: f,
            redirectUri: T,
          } = e,
          [p, v] = n.useState(!1),
          j = n.useCallback(
            async e => {
              let t,
                { location: s } = e,
                { callbackCode: n, callbackState: l } = c;
              try {
                t = await i.default.completeTwoWayLink(a, s, n, l);
              } catch (e) {
                x.error("".concat(a, " link error:"), e);
              }
              null != t ? m() : C();
            },
            [a, c, m, C]
          ),
          {
            header: y,
            body: E,
            appDetails: g,
            sendAuthorize: L,
          } = (0, d.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: l,
            responseType: "code",
            callback: j,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: T,
          }),
          k = n.useCallback(() => {
            r(null != L, "sendAuthorize not available"), v(!0), L(!0);
          }, [L]);
        return (0, s.jsxs)("div", {
          className: N.container,
          children: [
            null != f &&
              (0, s.jsx)(o.ModalCloseButton, {
                className: N.closeButton,
                onClick: f,
              }),
            (0, s.jsxs)(o.Scroller, {
              children: [
                (0, s.jsx)(o.ModalHeader, {
                  direction: u.default.Direction.VERTICAL,
                  className: N.header,
                  separator: !1,
                  children: (0, s.jsx)(o.Text, {
                    className: N.stepHeader,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children:
                      h.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                        number: 2,
                        total: 2,
                      }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: N.discordConsentBody,
                  children: [y, E, g],
                }),
                (0, s.jsx)(o.ModalFooter, {
                  className: N.footer,
                  children: (0, s.jsx)(o.Button, {
                    className: N.footerButton,
                    color: o.Button.Colors.BRAND,
                    submitting: p,
                    onClick: k,
                    children: h.default.Messages.AUTHORIZE_AND_CONTINUE,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    871988: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          TwoWayLinkError: function () {
            return d;
          },
        });
      var s = t("37983");
      t("884691");
      var n = t("77078"),
        l = t("145131"),
        r = t("758710"),
        o = t("782340"),
        i = t("221818"),
        c = t("143453");
      function d(e) {
        let { onContinue: a, onClose: t, title: d, body: u } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(n.ModalHeader, {
              direction: l.default.Direction.VERTICAL,
              className: i.header,
              separator: !1,
              children: [
                (0, s.jsx)("img", {
                  src: c,
                  className: i.illustration,
                  width: "254",
                  height: "127",
                  alt: "",
                }),
                (0, s.jsx)(n.Heading, {
                  className: i.title,
                  variant: "heading-xl/extrabold",
                  children: d,
                }),
                null != t &&
                  (0, s.jsx)(n.ModalCloseButton, {
                    className: i.closeButton,
                    onClick: t,
                  }),
              ],
            }),
            (0, s.jsx)(n.ModalContent, {
              className: i.body,
              paddingFix: !1,
              children: (0, s.jsx)(n.Text, {
                tag: "p",
                variant: "text-md/normal",
                color: "header-secondary",
                children: u,
              }),
            }),
            (0, s.jsx)(n.ModalFooter, {
              className: i.footer,
              children: (0, s.jsxs)(n.Button, {
                className: i.footerButton,
                color: n.Button.Colors.BRAND,
                onClick: a,
                children: [
                  o.default.Messages.TRY_AGAIN,
                  (0, s.jsx)(r.default, {
                    className: i.launchIcon,
                    width: "16",
                    height: "16",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    634644: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          TwoWayLinkLanding: function () {
            return d;
          },
        });
      var s = t("37983");
      t("884691");
      var n = t("446674"),
        l = t("77078"),
        r = t("47319"),
        o = t("145131"),
        i = t("782340"),
        c = t("221818");
      function d(e) {
        let {
            platformType: a,
            onContinue: t,
            onClose: d,
            img: u,
            headerConnect: h,
            headerReconnect: N,
            body: x,
            learnMoreLink: m,
            valueProps: C,
          } = e,
          f = (0, n.useStateFromStores)([r.default], () => {
            let e = r.default.getAccount(null, a);
            return (null == e ? void 0 : e.twoWayLink) === !1;
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(l.ModalHeader, {
              direction: o.default.Direction.VERTICAL,
              className: c.header,
              separator: !1,
              children: [
                (0, s.jsxs)("div", {
                  className: c.illustration,
                  children: [u, " "],
                }),
                (0, s.jsx)(l.Heading, {
                  className: c.title,
                  variant: "heading-xl/extrabold",
                  children: f && null != N ? N : h,
                }),
                (0, s.jsx)(l.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: d,
                }),
              ],
            }),
            (0, s.jsxs)(l.ModalContent, {
              className: c.body,
              paddingFix: !1,
              children: [
                (0, s.jsx)(l.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: x,
                }),
                (0, s.jsx)("div", { className: c.valueProps, children: C }),
                null != m
                  ? (0, s.jsx)(l.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        i.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format(
                          { helpCenterLink: m }
                        ),
                    })
                  : null,
              ],
            }),
            (0, s.jsx)(l.ModalFooter, {
              className: c.footer,
              children: (0, s.jsx)(l.Button, {
                className: c.footerButton,
                color: l.Button.Colors.BRAND,
                onClick: t,
                children: i.default.Messages.CONTINUE,
              }),
            }),
          ],
        });
      }
    },
    79528: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          TwoWayLinkPreConnect: function () {
            return T;
          },
        }),
        t("70102");
      var s = t("37983"),
        n = t("884691"),
        l = t("627445"),
        r = t.n(l),
        o = t("382825"),
        i = t("77078"),
        c = t("913144"),
        d = t("535013"),
        u = t("926994"),
        h = t("605250"),
        N = t("145131"),
        x = t("758710"),
        m = t("782340"),
        C = t("221818");
      let f = new h.default("TwoWayLink");
      function T(e) {
        let {
            platformType: a,
            isWaitingForConnection: t,
            onWaitingForConnection: l,
            expectedCallbackState: h,
            onAuthToken: T,
            onError: p,
            onClose: v,
            img: j,
            title: y,
            body: E,
            redirectDestination: g,
          } = e,
          L = n.useCallback(async () => {
            let e;
            try {
              if (
                ((e = await (0, u.openProviderAuthorize)(a, {
                  twoWayLinkType: o.TwoWayLinkType.DESKTOP,
                })),
                null == e)
              )
                throw Error("missing authorizeURL");
            } catch (e) {
              f.error("Error opening provider authorize page", e), p();
              return;
            }
            let { state: t } = (0, d.getCallbackParamsFromURL)(e);
            r(null != t, "Authorize URL state query parameter must be present"),
              null == l || l(t);
          }, [a, p, l]),
          k = n.useCallback(
            e => {
              let { callbackCode: t, callbackState: s } = e;
              if (s !== h) {
                f.warn(
                  "".concat(a, " link: received mismatching callback state!")
                );
                return;
              }
              T({ callbackCode: t, callbackState: s });
            },
            [a, h, T]
          );
        return (
          n.useEffect(
            () => (
              c.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", k),
              () => {
                c.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", k);
              }
            ),
            [k]
          ),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(i.ModalHeader, {
                direction: N.default.Direction.VERTICAL,
                className: C.header,
                separator: !1,
                children: [
                  (0, s.jsx)(i.Text, {
                    className: C.stepHeader,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children:
                      m.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                        number: 1,
                        total: 2,
                      }),
                  }),
                  (0, s.jsxs)("div", {
                    className: C.illustration,
                    children: [j, " "],
                  }),
                  (0, s.jsx)(i.Heading, {
                    className: C.title,
                    variant: "heading-xl/extrabold",
                    children: y,
                  }),
                  null != v &&
                    (0, s.jsx)(i.ModalCloseButton, {
                      className: C.closeButton,
                      onClick: v,
                    }),
                ],
              }),
              (0, s.jsxs)(i.ModalContent, {
                className: C.body,
                paddingFix: !1,
                children: [
                  (0, s.jsx)(i.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: E,
                  }),
                  !t &&
                    (0, s.jsx)(i.Text, {
                      tag: "p",
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        m.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
                          redirectUrl: g,
                        }),
                    }),
                ],
              }),
              (0, s.jsx)(i.ModalFooter, {
                className: C.footer,
                children: (0, s.jsxs)(i.Button, {
                  className: C.footerButton,
                  color: t ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                  onClick: L,
                  children: [
                    t ? m.default.Messages.RETRY : m.default.Messages.CONTINUE,
                    (0, s.jsx)(x.default, {
                      className: C.launchIcon,
                      width: "16",
                      height: "16",
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    451039: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          TwoWayLinkSuccess: function () {
            return i;
          },
        });
      var s = t("37983");
      t("884691");
      var n = t("77078"),
        l = t("145131"),
        r = t("782340"),
        o = t("221818");
      function i(e) {
        let { onClose: a, img: t, title: i, body: c, content: d } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(n.ModalHeader, {
              direction: l.default.Direction.VERTICAL,
              className: o.header,
              separator: !1,
              children: [
                (0, s.jsx)("div", { className: o.illustration, children: t }),
                (0, s.jsx)(n.Heading, {
                  className: o.title,
                  variant: "heading-xl/extrabold",
                  children: i,
                }),
                (0, s.jsx)(n.ModalCloseButton, {
                  className: o.closeButton,
                  onClick: a,
                }),
              ],
            }),
            (0, s.jsxs)(n.ModalContent, {
              className: o.body,
              paddingFix: !1,
              children: [
                (0, s.jsx)(n.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: c,
                }),
                d,
              ],
            }),
            (0, s.jsx)(n.ModalFooter, {
              className: o.footer,
              children: (0, s.jsx)(n.Button, {
                className: o.footerButton,
                color: n.Button.Colors.BRAND,
                onClick: a,
                children: r.default.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
    106390: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          ValueProp: function () {
            return r;
          },
          BulletedValueProp: function () {
            return o;
          },
          ValuePropContainer: function () {
            return i;
          },
        });
      var s = t("37983");
      t("884691");
      var n = t("77078"),
        l = t("221818");
      function r(e) {
        let { text: a, children: t } = e;
        return (0, s.jsxs)("div", {
          className: l.valueProp,
          children: [
            (0, s.jsx)("div", {
              className: l.valuePropIconContainer,
              children: t,
            }),
            (0, s.jsx)(n.Text, { variant: "text-sm/medium", children: a }),
          ],
        });
      }
      function o(e) {
        let { title: a, bulletPoints: t, icon: r } = e;
        return (0, s.jsxs)("div", {
          className: l.bulletedValueProp,
          children: [
            (0, s.jsx)("div", {
              className: l.valuePropIconContainer,
              children: r,
            }),
            (0, s.jsxs)("div", {
              className: l.bulletPointsContainer,
              children: [
                (0, s.jsx)(n.Text, {
                  variant: "text-md/bold",
                  color: "header-primary",
                  children: a,
                }),
                (0, s.jsx)("div", {
                  className: l.bulletPoints,
                  children: t.map(e =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: l.bulletPoint,
                        children: [
                          (0, s.jsx)(n.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: "•",
                          }),
                          (0, s.jsx)(n.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: l.bulletPointText,
                            children: e,
                          }),
                        ],
                      },
                      e
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function i(e) {
        let { children: a } = e;
        return (0, s.jsx)("div", {
          className: l.valuePropContainer,
          children: a,
        });
      }
    },
    997511: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          useTwoWayLinkModalSlideManager: function () {
            return i;
          },
        }),
        t("222007");
      var s = t("884691"),
        n = t("84339"),
        l = t("599110"),
        r = t("598347"),
        o = t("49111");
      function i(e, a) {
        let [t, i] = s.useState(r.TwoWayLinkModalSlideTypes.LANDING),
          c = (0, n.default)(t),
          [d, u] = s.useState(null),
          [h, N] = s.useState(null),
          x = s.useCallback(() => {
            switch (t) {
              case r.TwoWayLinkModalSlideTypes.LANDING:
                i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT);
                break;
              case r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
                i(r.TwoWayLinkModalSlideTypes.SUCCESS);
                break;
              case r.TwoWayLinkModalSlideTypes.ERROR:
                i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT);
            }
          }, [t]),
          m = s.useCallback(() => {
            u(null), i(r.TwoWayLinkModalSlideTypes.ERROR);
          }, []),
          C = s.useCallback(e => {
            u(e), i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING);
          }, []),
          f = s.useCallback(e => {
            u(null), N(e), i(r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT);
          }, []);
        return (
          s.useEffect(() => {
            t !== c &&
              l.default.track(o.AnalyticEvents.ACCOUNT_LINK_STEP, {
                location_stack: e,
                previous_step: c,
                current_step: t,
                platform_type: a,
              });
          }, [t, c, e, a]),
          {
            slide: t,
            gotoNext: x,
            gotoError: m,
            handleWaitingForConnection: C,
            handleAuthToken: f,
            expectedCallbackState: d,
            callbackData: h,
          }
        );
      }
    },
    758710: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return o;
          },
        });
      var s = t("37983");
      t("884691");
      var n = t("469563"),
        l = t("249978"),
        r = t("75196"),
        o = (0, n.replaceIcon)(
          function (e) {
            let {
              width: a = 24,
              height: t = 24,
              color: n = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(o),
              width: a,
              height: t,
              viewBox: "0 0 24 24",
              children: [
                (0, s.jsx)("path", {
                  className: l,
                  fill: n,
                  d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z",
                }),
                (0, s.jsx)("path", {
                  className: l,
                  fill: n,
                  d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z",
                }),
              ],
            });
          },
          l.WindowLaunchIcon,
          void 0,
          { size: 24 }
        );
    },
    613511: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          WindowLaunchIcon: function () {
            return r;
          },
        });
      var s = t("37983");
      t("884691");
      var n = t("669491"),
        l = t("82169");
      let r = e => {
        let {
          width: a = 24,
          height: t = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, l.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: a,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z",
              className: o,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
              className: o,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=aa8cdaecc991c7880f2d.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16132"],
  {
    527826: function (e, t, n) {
      "use strict";
      e.exports = n.p + "adf75861421c2a6a6269.png";
    },
    429255: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ce07dbd992d1a181b3a9.png";
    },
    516765: function (e, t, n) {
      "use strict";
      e.exports = n.p + "cafeec5a19e1bc310a2d.png";
    },
    335171: function (e, t, n) {
      "use strict";
      e.exports = n.p + "7a1bccb9d18c03cd2072.png";
    },
    307460: function (e, t, n) {
      "use strict";
      e.exports = n.p + "2b37a07b349d534b98eb.png";
    },
    823527: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("116788");
      n.es(s, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("882039");
      n.es(s, t);
    },
    458250: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("106076"),
        r = n("755993"),
        i = n("49111"),
        a = n("171644");
      function l(e) {
        let { authToken: t, onContinue: n, onError: l, onClose: d } = e;
        return (0, s.jsx)(r.TwoWayLinkDiscordConsent, {
          platformType: i.PlatformTypes.XBOX,
          clientId: o.ConsoleOAuthApplications.XBOX_APPLICATION_ID,
          scopes: a.XBOX_CLIENT_SCOPES,
          authToken: t,
          onContinue: n,
          onError: l,
          onClose: d,
        });
      }
    },
    268767: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("871988"),
        r = n("782340");
      function i(e) {
        let { onContinue: t, onClose: n } = e;
        return (0, s.jsx)(o.TwoWayLinkError, {
          title: r.default.Messages.CONNECT_XBOX_ERROR_TITLE,
          body: r.default.Messages.CONNECT_XBOX_ERROR_BODY,
          onClose: n,
          onContinue: t,
        });
      }
    },
    867528: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("351368"),
        r = n("368121"),
        i = n("701909"),
        a = n("634644"),
        l = n("106390"),
        d = n("49111"),
        c = n("782340"),
        u = n("335171");
      function f() {
        return (0, s.jsxs)(l.ValuePropContainer, {
          children: [
            (0, s.jsx)(l.ValueProp, {
              text: c.default.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
              children: (0, s.jsx)(r.default, {}),
            }),
            (0, s.jsx)(l.ValueProp, {
              text: c.default.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
              children: (0, s.jsx)(o.default, {}),
            }),
          ],
        });
      }
      function C(e) {
        let { onContinue: t, onClose: n } = e,
          o = i.default.getArticleURL(d.HelpdeskArticles.XBOX_CONNECTION);
        return (0, s.jsx)(a.TwoWayLinkLanding, {
          platformType: d.PlatformTypes.XBOX,
          headerConnect: c.default.Messages.CONNECT_XBOX_LANDING_TITLE,
          headerReconnect: c.default.Messages.RECONNECT_XBOX_LANDING_TITLE,
          body: c.default.Messages.CONNECT_XBOX_LANDING_BODY,
          learnMoreLink: o,
          onClose: n,
          onContinue: t,
          img: (0, s.jsx)("img", { src: u, width: 234, height: 152, alt: "" }),
          valueProps: (0, s.jsx)(f, {}),
        });
      }
    },
    194167: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("77078"),
        r = n("997511"),
        i = n("458250"),
        a = n("268767"),
        l = n("867528"),
        d = n("572235"),
        c = n("590882"),
        u = n("598347"),
        f = n("49111"),
        C = n("221818");
      function h(e) {
        let { transitionState: t, onClose: n, analyticsLocation: h } = e,
          {
            slide: p,
            gotoNext: T,
            gotoError: x,
            handleWaitingForConnection: _,
            handleAuthToken: N,
            expectedCallbackState: O,
            callbackData: g,
          } = (0, r.useTwoWayLinkModalSlideManager)(h, f.PlatformTypes.XBOX);
        return (0, s.jsx)(o.ModalRoot, {
          className: C.modal,
          transitionState: t,
          disableTrack: !0,
          children: (0, s.jsxs)(o.Slides, {
            activeSlide: p,
            width: 408,
            children: [
              (0, s.jsx)(o.Slide, {
                id: u.TwoWayLinkModalSlideTypes.LANDING,
                children: (0, s.jsx)(l.default, { onContinue: T, onClose: n }),
              }),
              (0, s.jsx)(o.Slide, {
                id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
                children: (0, s.jsx)(d.default, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: _,
                  onAuthToken: N,
                  onError: x,
                  onClose: n,
                }),
              }),
              (0, s.jsx)(o.Slide, {
                id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
                children: (0, s.jsx)(d.default, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: O,
                  onAuthToken: N,
                  onError: x,
                  onClose: n,
                }),
              }),
              (0, s.jsx)(o.Slide, {
                id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
                children: (0, s.jsx)(i.default, {
                  authToken: g,
                  onContinue: T,
                  onError: x,
                  onClose: n,
                }),
              }),
              (0, s.jsx)(o.Slide, {
                id: u.TwoWayLinkModalSlideTypes.ERROR,
                children: (0, s.jsx)(a.default, { onContinue: T, onClose: n }),
              }),
              (0, s.jsx)(o.Slide, {
                id: u.TwoWayLinkModalSlideTypes.SUCCESS,
                children: (0, s.jsx)(c.default, { onClose: n }),
              }),
            ],
          }),
        });
      }
    },
    572235: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("79528"),
        r = n("49111"),
        i = n("171644"),
        a = n("782340"),
        l = n("429255"),
        d = n("516765");
      function c(e) {
        let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: c,
            onAuthToken: u,
            onError: f,
            onClose: C,
          } = e,
          h = t
            ? (0, s.jsx)("img", {
                src: d,
                width: "168",
                height: "124",
                alt: "",
              })
            : (0, s.jsx)("img", {
                src: l,
                width: "152",
                height: "124",
                alt: "",
              }),
          p = t
            ? a.default.Messages.XBOX_DETAILS_TITLE_WAITING
            : a.default.Messages.XBOX_DETAILS_TITLE,
          T = t
            ? a.default.Messages.XBOX_DETAILS_BODY_WAITING
            : a.default.Messages.XBOX_DETAILS_BODY;
        return (0, s.jsx)(o.TwoWayLinkPreConnect, {
          platformType: r.PlatformTypes.XBOX,
          isWaitingForConnection: t,
          onWaitingForConnection: n,
          expectedCallbackState: c,
          onAuthToken: u,
          onError: f,
          onClose: C,
          img: h,
          title: p,
          body: T,
          redirectDestination: i.XBOX_LINK_DEST_ORIGIN,
        });
      }
    },
    590882: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("77078"),
        r = n("376556"),
        i = n("671278"),
        a = n("701909"),
        l = n("451039"),
        d = n("49111"),
        c = n("171644"),
        u = n("782340"),
        f = n("286392"),
        C = n("307460");
      function h() {
        return (0, s.jsxs)("div", {
          className: f.getXboxApp,
          children: [
            (0, s.jsxs)("div", {
              className: f.getXboxAppBody,
              children: [
                (0, s.jsxs)(o.Heading, {
                  className: f.getXboxAppHeading,
                  variant: "text-lg/semibold",
                  children: [
                    (0, s.jsx)("div", {
                      className: f.xboxLogoBox,
                      children: (0, s.jsx)("img", {
                        src: r.default.get(d.PlatformTypes.XBOX).icon.whiteSVG,
                        alt: "",
                      }),
                    }),
                    u.default.Messages.GET_XBOX_APP,
                  ],
                }),
                (0, s.jsx)(o.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u.default.Messages.CONNECT_XBOX_SUCCESS_APP_BODY,
                }),
                (0, s.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: (0, s.jsx)(o.Anchor, {
                    href: a.default.getArticleURL(
                      d.HelpdeskArticles.XBOX_CONNECTION
                    ),
                    children: u.default.Messages.LEARN_MORE,
                  }),
                }),
              ],
            }),
            (0, s.jsx)(i.default, {
              className: f.getXboxAppQR,
              text: c.XBOX_APP_WEB_LINK,
              size: 90,
            }),
          ],
        });
      }
      function p(e) {
        let { onClose: t } = e;
        return (0, s.jsx)(l.TwoWayLinkSuccess, {
          img: (0, s.jsx)("img", {
            src: C,
            width: "232",
            height: "113",
            alt: "",
          }),
          title: u.default.Messages.CONNECT_XBOX_SUCCESS_TITLE,
          body: u.default.Messages.CONNECT_XBOX_SUCCESS_BODY,
          content: (0, s.jsx)(h, {}),
          onClose: t,
        });
      }
    },
    671278: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QRCodeOverlaySizes: function () {
            return o;
          },
          QRCodeWithOverlay: function () {
            return f;
          },
          default: function () {
            return C;
          },
        });
      var s,
        o,
        r = n("37983"),
        i = n("884691"),
        a = n("82697"),
        l = n("679001");
      ((s = o || (o = {})).SIZE_40 = "SIZE_40"), (s.SIZE_60 = "SIZE_60");
      let d = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        c = n("527826");
      class u extends i.PureComponent {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, r.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: e,
            children: (0, r.jsx)(a.default, { value: t, level: "M", ...n }),
          });
        }
      }
      u.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
      class f extends i.PureComponent {
        render() {
          let { overlaySize: e } = this.props,
            t = d[null != e ? e : "SIZE_40"];
          return (0, r.jsxs)("div", {
            className: l.qrCodeContainer,
            children: [
              (0, r.jsx)(u, { ...this.props }),
              (0, r.jsx)("div", {
                className: l.qrCodeOverlay,
                children: (0, r.jsx)("img", {
                  className: l[t],
                  src: c,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      f.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
      var C = u;
    },
    351368: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("469563"),
        r = n("823527"),
        i = n("75196"),
        a = (0, o.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: o = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, i.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: r,
                fill: o,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.66493 5H18.3351C19.9079 5 21.2137 6.21463 21.3273 7.78329L21.9932 16.9774C22.0684 18.0165 21.2871 18.9198 20.248 18.9951C20.2027 18.9984 20.1572 19 20.1117 19C18.9191 19 17.8786 18.1904 17.5855 17.0342L17.0699 15H6.93021L6.41455 17.0342C6.12148 18.1904 5.081 19 3.88832 19C2.84651 19 2.00195 18.1554 2.00195 17.1136C2.00195 17.0682 2.0036 17.0227 2.00688 16.9774L2.67277 7.78329C2.78638 6.21463 4.09216 5 5.66493 5ZM14.5001 10C15.3285 10 16.0001 9.32843 16.0001 8.5C16.0001 7.67157 15.3285 7 14.5001 7C13.6716 7 13.0001 7.67157 13.0001 8.5C13.0001 9.32843 13.6716 10 14.5001 10ZM18.5001 13C19.3285 13 20.0001 12.3284 20.0001 11.5C20.0001 10.6716 19.3285 10 18.5001 10C17.6716 10 17.0001 10.6716 17.0001 11.5C17.0001 12.3284 17.6716 13 18.5001 13ZM6.00007 9H4.00008V11H6.00007V13H8.00007V11H10.0001V9H8.00007V7H6.00007V9Z",
                "aria-hidden": !0,
              }),
            });
          },
          r.GameControllerIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("469563"),
        r = n("390300"),
        i = n("75196"),
        a = (0, o.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: o = "currentColor",
              foreground: r,
              ...a
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, i.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: r,
                fill: o,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          r.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    116788: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GameControllerIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("669491"),
        r = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = o.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, r.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
            clipRule: "evenodd",
            className: a,
          }),
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("669491"),
        r = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = o.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, r.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: a,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: a,
            }),
          ],
        });
      };
    },
    106076: function (e, t, n) {
      "use strict";
      var s, o;
      n.r(t),
        n.d(t, {
          ConsoleOAuthApplications: function () {
            return s;
          },
          ConsoleOAuthApplicationsSets: function () {
            return r;
          },
        }),
        n("222007"),
        ((o = s || (s = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (o.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (o.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let r = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
  },
]);
//# sourceMappingURL=9ae3d8233e8f4caa4269.js.map

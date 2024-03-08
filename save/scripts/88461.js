(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88461"],
  {
    265369: function (e, t, s) {
      "use strict";
      e.exports = s.p + "99c9ca7d01d903b18cad.svg";
    },
    799557: function (e, t, s) {
      "use strict";
      e.exports = s.p + "dfcd6ac84e97da5203b5.png";
    },
    923107: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("679791");
      s.es(n, t);
    },
    993469: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("918101");
      s.es(n, t);
    },
    779807: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("528993");
      s.es(n, t);
    },
    994509: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        l = s("872717"),
        a = s("145131"),
        i = s("364719"),
        o = s("599110"),
        c = s("814478"),
        u = s("57641"),
        d = s("49111"),
        f = s("782340"),
        h = s("549727"),
        g = s("666042"),
        p = s("265369"),
        x = s("799557");
      class v extends r.PureComponent {
        componentDidMount() {
          o.default.track(d.AnalyticEvents.ACCOUNT_LINK_STEP, {
            previous_step: null,
            current_step: "landing page",
            platform_type: d.PlatformTypes.XBOX,
          });
        }
        handleLinkAccountPressed() {
          l.default
            .get({
              url: d.Endpoints.CONNECTIONS_AUTHORIZE_CONTINUATION(
                d.PlatformTypes.XBOX
              ),
              oldFormErrors: !0,
            })
            .then(e => {
              window.location.href = e.body.url;
            })
            .catch(e => {
              let t;
              try {
                t = e.body.message;
              } catch (s) {
                t = String(e);
              }
              o.default.track(d.AnalyticEvents.ACCOUNT_LINK_FAILED, {
                error_message: t,
                status_code: e.status,
                link_method: "pin",
                current_step: "landing page",
                platform_type: d.PlatformTypes.XBOX,
              }),
                this.setState({ errorMessage: t });
            });
        }
        goBack() {
          window.location = d.Routes.CONNECTIONS(d.PlatformTypes.XBOX);
        }
        renderXboxButtons() {
          return (0, n.jsxs)("div", {
            className: g.xboxButtonContainer,
            children: [
              (0, n.jsx)(c.XboxGamepadButton, {
                type: "A",
                text: f.default.Messages.XBOX_LINK,
                style: g.gamepadButton,
                onClick: this.handleLinkAccountPressed,
              }),
              (0, n.jsx)(c.XboxGamepadButton, {
                type: "B",
                text: f.default.Messages.CANCEL,
                style: g.gamepadButton,
                onClick: this.goBack,
              }),
              this.renderErrorMessage(),
            ],
          });
        }
        renderErrorMessage() {
          let { errorMessage: e } = this.state;
          return null == e
            ? null
            : (0, n.jsxs)("div", {
                className: g.errorMessageContainer,
                children: [
                  (0, n.jsx)(i.default, { className: g.errorMessageIcon }),
                  (0, n.jsx)("div", { className: g.errorMessage, children: e }),
                ],
              });
        }
        renderContent() {
          return (0, n.jsxs)("div", {
            className: g.pageWrapper,
            children: [
              (0, n.jsx)("img", { alt: "Discord", className: g.logo, src: p }),
              (0, n.jsxs)(a.default, {
                className: g.container,
                justify: a.default.Justify.CENTER,
                align: a.default.Align.CENTER,
                children: [
                  (0, n.jsxs)(a.default.Child, {
                    className: h.leftPanel,
                    children: [
                      (0, n.jsx)("div", {
                        className: h.sectionTitle,
                        children: f.default.Messages.DISCORD_RICH_PRESENCE,
                      }),
                      (0, n.jsx)("div", {
                        className: h.sectionSubtitle,
                        children: f.default.Messages.LINK_YOUR_XBOX_ACCOUNT_1,
                      }),
                      (0, n.jsx)("div", {
                        className: h.sectionSubtitle,
                        children: f.default.Messages.LINK_YOUR_XBOX_ACCOUNT_2,
                      }),
                      this.renderXboxButtons(),
                    ],
                  }),
                  (0, n.jsx)(a.default, {
                    className: g.rightPanel,
                    justify: a.default.Justify.END,
                    align: a.default.Align.CENTER,
                    children: (0, n.jsx)("img", {
                      alt: "",
                      className: g.image,
                      src: x,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        render() {
          return (0, n.jsx)(u.XboxGamepadButtonHandlers, {
            A: this.handleLinkAccountPressed,
            B: this.goBack,
            children: this.renderContent(),
          });
        }
        constructor(...e) {
          super(...e), (this.state = { errorMessage: null });
        }
      }
      var C = v;
    },
    814478: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          XboxGamepadButton: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("669491"),
        l = s("77078"),
        a = s("958638"),
        i = s("44930"),
        o = s("363314");
      let c = {
        A: {
          Icon: a.default,
          color: r.default.unsafe_rawColors.PRIMARY_400.css,
        },
        B: { Icon: i.default, color: r.default.unsafe_rawColors.RED_360.css },
      };
      function u(e) {
        let { type: t, text: s, style: a, onClick: i } = e,
          u = c[t];
        return (0, n.jsxs)(l.Clickable, {
          className: o.gamepadButtonContainer,
          style: null != i ? { cursor: "pointer" } : void 0,
          onClick: i,
          children: [
            (0, n.jsx)(u.Icon, {
              className: a,
              color: u.color,
              backgroundColor: r.default.unsafe_rawColors.PRIMARY_600.css,
            }),
            (0, n.jsx)("div", { className: o.gamepadButtonText, children: s }),
          ],
        });
      }
    },
    57641: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          XboxGamepadButtonHandlers: function () {
            return i;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        l = s("31695");
      let a = {
        A: 0,
        B: 1,
        X: 2,
        Y: 3,
        LB: 4,
        RB: 5,
        LT: 6,
        RT: 7,
        Back: 8,
        Start: 9,
        LS: 10,
        RS: 11,
        Up: 12,
        Down: 13,
        Left: 14,
        Right: 15,
        Home: 16,
      };
      function i(e) {
        let { children: t, ...s } = e;
        return (
          !(function (e) {
            let [t] = r.useState(() => ({}));
            (0, l.default)(() => {
              let s = navigator.getGamepads()[0];
              if (null != s)
                for (let [r, l] of Object.entries(e)) {
                  var n;
                  let e = a[r];
                  if (null == e) continue;
                  let i =
                    null === (n = s.buttons[e]) || void 0 === n
                      ? void 0
                      : n.pressed;
                  t[r] !== i && (i && l(i), (t[r] = i));
                }
            });
          })(s),
          (0, n.jsx)(n.Fragment, { children: t })
        );
      }
    },
    364719: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("469563"),
        l = s("779807"),
        a = s("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: s = 16,
              color: r = "currentColor",
              foreground: l,
              ...i
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, a.default)(i),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: (0, n.jsx)("path", {
                  className: l,
                  fill: r,
                  d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z",
                }),
              }),
            });
          },
          l.WarningIcon,
          void 0,
          { size: 16 }
        );
    },
    958638: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("469563"),
        l = s("923107"),
        a = s("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 30,
              height: s = 30,
              color: r = "currentColor",
              foreground: l,
              background: i,
              backgroundColor: o,
              ...c
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, a.default)(c),
              width: t,
              height: s,
              viewBox: "0 0 30 30",
              children: (0, n.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, n.jsx)("circle", {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: o,
                    className: i,
                  }),
                  (0, n.jsx)("path", {
                    d: "M22.1001 22H19.3946L18.2136 18.6522H11.9866L10.8056 22H8.1001L13.7259 7H16.4743L22.1001 22ZM15.1001 9.76087L12.8026 16.3261H17.3976L15.1001 9.76087Z",
                    fill: r,
                    className: l,
                  }),
                ],
              }),
            });
          },
          l.AIcon,
          void 0,
          { size: 30 }
        );
    },
    44930: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("469563"),
        l = s("993469"),
        a = s("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 30,
              height: s = 30,
              color: r = "currentColor",
              foreground: l,
              background: i,
              backgroundColor: o,
              ...c
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, a.default)(c),
              width: t,
              height: s,
              viewBox: "0 0 30 30",
              children: (0, n.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, n.jsx)("circle", {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: o,
                    className: i,
                  }),
                  (0, n.jsx)("path", {
                    d: "M10.116 22.3089V7.12891H16.518C17.7206 7.12891 18.6886 7.48091 19.422 8.18491C20.17 8.88891 20.544 9.82024 20.544 10.9789C20.544 11.8882 20.3313 12.6216 19.906 13.1789C19.4953 13.7216 18.96 14.1176 18.3 14.3669C20.192 14.8216 21.138 16.0682 21.138 18.1069C21.138 19.5296 20.7126 20.5856 19.862 21.2749C19.026 21.9642 17.838 22.3089 16.298 22.3089H10.116ZM15.638 13.4209C17.2073 13.4209 17.992 12.7462 17.992 11.3969C17.992 10.7076 17.7866 10.1942 17.376 9.85691C16.9653 9.51957 16.386 9.35091 15.638 9.35091H12.668V13.4209H15.638ZM15.968 20.0869C16.76 20.0869 17.3906 19.9109 17.86 19.5589C18.344 19.2069 18.586 18.6422 18.586 17.8649C18.586 17.0876 18.344 16.5229 17.86 16.1709C17.3906 15.8189 16.76 15.6429 15.968 15.6429H12.668V20.0869H15.968Z",
                    fill: r,
                    className: l,
                  }),
                ],
              }),
            });
          },
          l.BIcon,
          void 0,
          { size: 30 }
        );
    },
    679791: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          AIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M20.84 21.32a.5.5 0 0 1-.46.68h-1.52a1 1 0 0 1-.94-.66l-1.55-4.28H7.63l-1.56 4.28a1 1 0 0 1-.94.66H3.62a.5.5 0 0 1-.47-.68l7.09-18.6a1 1 0 0 1 .93-.64h1.63a1 1 0 0 1 .93.65l7.11 18.6ZM11.98 5.1l-3.43 9.43h6.87L11.98 5.1Z",
            className: i,
          }),
        });
      };
    },
    918101: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          BIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M6.46 22a1 1 0 0 1-1-1V3.08a1 1 0 0 1 1-1h7.05c1.58 0 2.84.47 3.78 1.39a4.9 4.9 0 0 1 1.42 3.67 4.7 4.7 0 0 1-.81 2.85 4.64 4.64 0 0 1-2.02 1.59c2.46.62 3.7 2.25 3.7 4.9 0 1.9-.56 3.29-1.65 4.2-1.1.88-2.65 1.32-4.65 1.32H6.46Zm6.16-11.43a3.8 3.8 0 0 0 2.5-.75c.6-.5.9-1.26.9-2.28 0-1.02-.3-1.78-.9-2.28a3.7 3.7 0 0 0-2.5-.78H8.17v6.09h4.45Zm.6 9.03c1.12 0 2-.27 2.63-.8.65-.56.98-1.4.98-2.52 0-1.11-.33-1.94-.98-2.48a3.93 3.93 0 0 0-2.63-.8H8.17v6.6h5.05Z",
            className: i,
          }),
        });
      };
    },
    528993: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          WarningIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            fillRule: "evenodd",
            d: "M10 3.1a2.37 2.37 0 0 1 4 0l8.71 14.75c.84 1.41-.26 3.15-2 3.15H3.29c-1.74 0-2.84-1.74-2-3.15L9.99 3.1Zm3.25 14.65a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.06 14l.37-5.94a1 1 0 0 0-1-1.06h-.87a1 1 0 0 0-1 1.06l.38 5.94a1.06 1.06 0 0 0 2.12 0Z",
            clipRule: "evenodd",
            className: i,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=a1c4f0068d0ac5eee98f.js.map

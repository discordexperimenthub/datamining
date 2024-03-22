(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15600"],
  {
    340419: function (t, n, e) {
      "use strict";
      t.exports = e.p + "3d0ee2d5ef8cf0aa72d7.svg";
    },
    559922: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          playVibingWumpusMusic: function () {
            return u;
          },
          stopVibingWumpusMusic: function () {
            return r;
          },
          pauseVibingWumpusMusic: function () {
            return c;
          },
          deleteAllSafetyWarnings: function () {
            return o;
          },
          markAsInappropriateConversation: function () {
            return l;
          },
        });
      var i = e("872717"),
        s = e("913144"),
        a = e("49111");
      function u() {
        s.default.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function r() {
        s.default.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function c() {
        s.default.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function o(t) {
        return i.HTTP.del({ url: a.Endpoints.DELETE_SAFETY_WARNINGS(t) });
      }
      function l(t, n) {
        return i.HTTP.post({
          url: a.Endpoints.ADD_SAFETY_WARNING(t),
          body: { safety_warning_type: n },
        });
      }
    },
    128605: function (t, n, e) {
      "use strict";
      var i, s, a, u;
      e.r(n),
        e.d(n, {
          VibingWumpusAction: function () {
            return i;
          },
          VibingWumpusSource: function () {
            return s;
          },
        }),
        ((a = i || (i = {})).PLAY = "play"),
        (a.PAUSE = "pause"),
        (a.BACK_TO_CONVERSATION = "back_to_conversation"),
        ((u = s || (s = {})).INAPPROPRIATE_CONVERSATION =
          "inappropriate_conversation"),
        (u.KEYBIND = "keybind");
    },
    166260: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          VibingWumpus: function () {
            return m;
          },
          default: function () {
            return M;
          },
        }),
        e("222007");
      var i = e("37983"),
        s = e("884691"),
        a = e("414456"),
        u = e.n(a),
        r = e("65597"),
        c = e("77078"),
        o = e("206230"),
        l = e("491605"),
        d = e("830837"),
        p = e("132755"),
        A = e("599110"),
        I = e("559922"),
        N = e("128605"),
        _ = e("49111"),
        f = e("782340"),
        P = e("509728"),
        S = e("932379"),
        E = e("340419");
      function m(t) {
        let {
            onClose: n,
            source: a = N.VibingWumpusSource.INAPPROPRIATE_CONVERSATION,
          } = t,
          m = (0, r.useStateFromStores)(
            [o.default],
            () => o.default.useReducedMotion
          ),
          [M, V] = s.useState(!1);
        s.useEffect(() => {
          let t = new Date();
          return (
            A.default.track(_.AnalyticEvents.VIBING_WUMPUS_VIEWED, {
              source: a,
            }),
            (0, I.playVibingWumpusMusic)(),
            () => {
              A.default.track(_.AnalyticEvents.VIBING_WUMPUS_CLOSED, {
                duration_open_ms: new Date().getTime() - t.getTime(),
                source: a,
              }),
                (0, I.stopVibingWumpusMusic)();
            }
          );
        }, [a]);
        let g = () => {
          M
            ? ((0, I.playVibingWumpusMusic)(),
              A.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                action: N.VibingWumpusAction.PLAY,
              }))
            : ((0, I.pauseVibingWumpusMusic)(),
              A.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                action: N.VibingWumpusAction.PAUSE,
              })),
            V(!M);
        };
        async function U() {
          let { default: t } = await e
            .el("926299")
            .then(e.t.bind(e, "926299", 19));
          return t;
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: P.ringContainer,
              children: (0, i.jsx)("img", {
                src: E,
                alt: "",
                className: P.ringArt,
              }),
            }),
            (0, i.jsx)(l.default, {
              importData: U,
              shouldAnimate: !M && !m,
              className: P.wumpus,
              pauseAtFrame: m ? 200 : void 0,
            }),
            (0, i.jsx)(c.Tooltip, {
              text: M ? f.default.Messages.PLAY : f.default.Messages.PAUSE,
              position: "top",
              "aria-label": M
                ? f.default.Messages.PLAY
                : f.default.Messages.PAUSE,
              children: t =>
                (0, i.jsx)(c.Clickable, {
                  ...t,
                  onClick: g,
                  className: P.iconButton,
                  children: M
                    ? (0, i.jsx)(p.default, { className: P.icon })
                    : (0, i.jsx)(d.default, { className: P.icon }),
                }),
            }),
            (0, i.jsxs)(c.ModalContent, {
              className: u(S.body, P.body),
              children: [
                (0, i.jsxs)("div", {
                  className: u(S.textContainer, P.textContainer),
                  children: [
                    (0, i.jsx)(c.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children:
                        f.default.Messages
                          .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER,
                    }),
                    (0, i.jsx)(c.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        f.default.Messages
                          .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: P.buttonContainer,
                  children: (0, i.jsx)(c.Button, {
                    fullWidth: !0,
                    color: c.Button.Colors.BRAND,
                    size: c.Button.Sizes.MEDIUM,
                    onClick: () => {
                      n(),
                        A.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                          action: N.VibingWumpusAction.BACK_TO_CONVERSATION,
                        });
                    },
                    children:
                      f.default.Messages
                        .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var M = t => {
        let { onClose: n, transitionState: e } = t;
        return (0, i.jsx)(c.ModalRoot, {
          transitionState: e,
          children: (0, i.jsx)(m, { onClose: n }),
        });
      };
    },
  },
]);
//# sourceMappingURL=02f928d046cf8b88ac4a.js.map

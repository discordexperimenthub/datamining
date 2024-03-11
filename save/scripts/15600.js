(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15600"],
  {
    340419: function (t, e, n) {
      "use strict";
      t.exports = n.p + "3d0ee2d5ef8cf0aa72d7.svg";
    },
    559922: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
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
      var i = n("872717"),
        a = n("913144"),
        s = n("49111");
      function u() {
        a.default.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function r() {
        a.default.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function c() {
        a.default.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function o(t) {
        return i.default.delete({ url: s.Endpoints.DELETE_SAFETY_WARNINGS(t) });
      }
      function l(t, e) {
        return i.default.post({
          url: s.Endpoints.ADD_SAFETY_WARNING(t),
          body: { safety_warning_type: e },
        });
      }
    },
    128605: function (t, e, n) {
      "use strict";
      var i, a, s, u;
      n.r(e),
        n.d(e, {
          VibingWumpusAction: function () {
            return i;
          },
          VibingWumpusSource: function () {
            return a;
          },
        }),
        ((s = i || (i = {})).PLAY = "play"),
        (s.PAUSE = "pause"),
        (s.BACK_TO_CONVERSATION = "back_to_conversation"),
        ((u = a || (a = {})).INAPPROPRIATE_CONVERSATION =
          "inappropriate_conversation"),
        (u.KEYBIND = "keybind");
    },
    166260: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          VibingWumpus: function () {
            return m;
          },
          default: function () {
            return M;
          },
        }),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        s = n("414456"),
        u = n.n(s),
        r = n("65597"),
        c = n("77078"),
        o = n("206230"),
        l = n("491605"),
        d = n("830837"),
        p = n("132755"),
        A = n("599110"),
        I = n("559922"),
        f = n("128605"),
        N = n("49111"),
        _ = n("782340"),
        E = n("509728"),
        P = n("932379"),
        S = n("340419");
      function m(t) {
        let {
            onClose: e,
            source: s = f.VibingWumpusSource.INAPPROPRIATE_CONVERSATION,
          } = t,
          m = (0, r.default)([o.default], () => o.default.useReducedMotion),
          [M, V] = a.useState(!1);
        a.useEffect(() => {
          let t = new Date();
          return (
            A.default.track(N.AnalyticEvents.VIBING_WUMPUS_VIEWED, {
              source: s,
            }),
            (0, I.playVibingWumpusMusic)(),
            () => {
              A.default.track(N.AnalyticEvents.VIBING_WUMPUS_CLOSED, {
                duration_open_ms: new Date().getTime() - t.getTime(),
                source: s,
              }),
                (0, I.stopVibingWumpusMusic)();
            }
          );
        }, [s]);
        let g = () => {
          M
            ? ((0, I.playVibingWumpusMusic)(),
              A.default.track(N.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                action: f.VibingWumpusAction.PLAY,
              }))
            : ((0, I.pauseVibingWumpusMusic)(),
              A.default.track(N.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                action: f.VibingWumpusAction.PAUSE,
              })),
            V(!M);
        };
        async function U() {
          let { default: t } = await n
            .el("926299")
            .then(n.t.bind(n, "926299", 19));
          return t;
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: E.ringContainer,
              children: (0, i.jsx)("img", {
                src: S,
                alt: "",
                className: E.ringArt,
              }),
            }),
            (0, i.jsx)(l.default, {
              importData: U,
              shouldAnimate: !M && !m,
              className: E.wumpus,
              pauseAtFrame: m ? 200 : void 0,
            }),
            (0, i.jsx)(c.Tooltip, {
              text: M ? _.default.Messages.PLAY : _.default.Messages.PAUSE,
              position: "top",
              "aria-label": M
                ? _.default.Messages.PLAY
                : _.default.Messages.PAUSE,
              children: t =>
                (0, i.jsx)(c.Clickable, {
                  ...t,
                  onClick: g,
                  className: E.iconButton,
                  children: M
                    ? (0, i.jsx)(p.default, { className: E.icon })
                    : (0, i.jsx)(d.default, { className: E.icon }),
                }),
            }),
            (0, i.jsxs)(c.ModalContent, {
              className: u(P.body, E.body),
              children: [
                (0, i.jsxs)("div", {
                  className: u(P.textContainer, E.textContainer),
                  children: [
                    (0, i.jsx)(c.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children:
                        _.default.Messages
                          .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER,
                    }),
                    (0, i.jsx)(c.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        _.default.Messages
                          .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: E.buttonContainer,
                  children: (0, i.jsx)(c.Button, {
                    fullWidth: !0,
                    color: c.Button.Colors.BRAND,
                    size: c.Button.Sizes.MEDIUM,
                    onClick: () => {
                      e(),
                        A.default.track(N.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                          action: f.VibingWumpusAction.BACK_TO_CONVERSATION,
                        });
                    },
                    children:
                      _.default.Messages
                        .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var M = t => {
        let { onClose: e, transitionState: n } = t;
        return (0, i.jsx)(c.ModalRoot, {
          transitionState: n,
          children: (0, i.jsx)(m, { onClose: e }),
        });
      };
    },
  },
]);
//# sourceMappingURL=6fc380a843375b5b5762.js.map

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
            return c;
          },
          pauseVibingWumpusMusic: function () {
            return r;
          },
          markAsInappropriateConversation: function () {
            return o;
          },
        });
      var i = n("872717"),
        s = n("913144"),
        a = n("49111");
      function u() {
        s.default.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function c() {
        s.default.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function r() {
        s.default.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function o(t, e) {
        return i.default.post({
          url: a.Endpoints.ADD_SAFETY_WARNING(t),
          body: { safety_warning_type: e },
        });
      }
    },
    128605: function (t, e, n) {
      "use strict";
      var i, s, a, u;
      n.r(e),
        n.d(e, {
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
    166260: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          VibingWumpus: function () {
            return E;
          },
          default: function () {
            return M;
          },
        }),
        n("222007");
      var i = n("37983"),
        s = n("884691"),
        a = n("414456"),
        u = n.n(a),
        c = n("65597"),
        r = n("77078"),
        o = n("206230"),
        l = n("491605"),
        d = n("830837"),
        p = n("132755"),
        I = n("599110"),
        A = n("559922"),
        N = n("128605"),
        _ = n("49111"),
        f = n("782340"),
        P = n("509728"),
        m = n("932379"),
        S = n("340419");
      function E(t) {
        let {
            onClose: e,
            source: a = N.VibingWumpusSource.INAPPROPRIATE_CONVERSATION,
          } = t,
          E = (0, c.default)([o.default], () => o.default.useReducedMotion),
          [M, V] = s.useState(!1);
        s.useEffect(() => {
          let t = new Date();
          return (
            I.default.track(_.AnalyticEvents.VIBING_WUMPUS_VIEWED, {
              source: a,
            }),
            (0, A.playVibingWumpusMusic)(),
            () => {
              I.default.track(_.AnalyticEvents.VIBING_WUMPUS_CLOSED, {
                duration_open_ms: new Date().getTime() - t.getTime(),
                source: a,
              }),
                (0, A.stopVibingWumpusMusic)();
            }
          );
        }, [a]);
        let U = () => {
          M
            ? ((0, A.playVibingWumpusMusic)(),
              I.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                action: N.VibingWumpusAction.PLAY,
              }))
            : ((0, A.pauseVibingWumpusMusic)(),
              I.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
                action: N.VibingWumpusAction.PAUSE,
              })),
            V(!M);
        };
        async function g() {
          let { default: t } = await n
            .el("926299")
            .then(n.t.bind(n, "926299", 19));
          return t;
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: P.ringContainer,
              children: (0, i.jsx)("img", {
                src: S,
                alt: "",
                className: P.ringArt,
              }),
            }),
            (0, i.jsx)(l.default, {
              importData: g,
              shouldAnimate: !M && !E,
              className: P.wumpus,
              pauseAtFrame: E ? 200 : void 0,
            }),
            (0, i.jsx)(r.Tooltip, {
              text: M ? f.default.Messages.PLAY : f.default.Messages.PAUSE,
              position: "top",
              "aria-label": M
                ? f.default.Messages.PLAY
                : f.default.Messages.PAUSE,
              children: t =>
                (0, i.jsx)(r.Clickable, {
                  ...t,
                  onClick: U,
                  className: P.iconButton,
                  children: M
                    ? (0, i.jsx)(p.default, { className: P.icon })
                    : (0, i.jsx)(d.default, { className: P.icon }),
                }),
            }),
            (0, i.jsxs)(r.ModalContent, {
              className: u(m.body, P.body),
              children: [
                (0, i.jsxs)("div", {
                  className: u(m.textContainer, P.textContainer),
                  children: [
                    (0, i.jsx)(r.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children:
                        f.default.Messages
                          .INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER,
                    }),
                    (0, i.jsx)(r.Text, {
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
                  children: (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    color: r.Button.Colors.BRAND,
                    size: r.Button.Sizes.MEDIUM,
                    onClick: () => {
                      e(),
                        I.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
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
        let { onClose: e, transitionState: n } = t;
        return (0, i.jsx)(r.ModalRoot, {
          transitionState: n,
          children: (0, i.jsx)(E, { onClose: e }),
        });
      };
    },
  },
]);
//# sourceMappingURL=9f12b649195462849d51.js.map

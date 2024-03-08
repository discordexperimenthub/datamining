(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24439"],
  {
    945439: function (e, t, n) {
      "use strict";
      e.exports = n.p + "60e64ec1e28c734051d0.svg";
    },
    465312: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e5fb2c858f851f61c32e.svg";
    },
    22368: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePaymentModalAnimationScene: function () {
            return i;
          },
        }),
        n("222007");
      var a = n("884691"),
        r = n("85336"),
        s = n("286350");
      function i(e) {
        let {
            purchaseState: t,
            currentStep: n,
            initialScene: i,
            purchaseScene: o,
            errorScene: l,
            successScene: u,
          } = e,
          [d, c] = (0, a.useState)(i);
        return (
          (0, a.useEffect)(() => {
            t === s.PurchaseState.PURCHASING
              ? c(o)
              : t === s.PurchaseState.FAIL && c(l);
          }, [t, o, l]),
          (0, a.useEffect)(() => {
            n === r.Step.CONFIRM && c(u);
          }, [n, u]),
          [d, c]
        );
      }
    },
    467831: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PremiumPaymentAnimationTier0: function () {
            return A;
          },
          PremiumPaymentAnimationTier1: function () {
            return f;
          },
          PremiumPaymentAnimationTier2: function () {
            return g;
          },
          PremiumPaymentGuildAnimation: function () {
            return b;
          },
        }),
        n("222007");
      var a,
        r,
        s,
        i,
        o,
        l,
        u,
        d,
        c = n("37983"),
        E = n("884691"),
        m = n("414456"),
        S = n.n(m),
        p = n("907002"),
        I = n("458960"),
        D = n("273108"),
        h = n("577567");
      ((o = a || (a = {})).NORMAL = "normal"),
        (o.SPEED_START = "speed_start"),
        (o.SPEED_LOOP = "speed_loop"),
        (o.FINISH = "finish"),
        (o.IDLE = "idle");
      let _ = {
        normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
        speed_start: { BEG: 601, END: 636 },
        speed_loop: { BEG: 637, END: 668 },
        finish: { BEG: 669, END: 870 },
        idle: { BEG: 871, END: 878 },
      };
      class A extends E.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case A.Scenes.SPEED_START:
              return A.Scenes.SPEED_LOOP;
            case A.Scenes.FINISH:
              return A.Scenes.IDLE;
            default:
              return e;
          }
        }
        importDefault() {
          return n
            .el("133541")
            .then(n.t.bind(n, "133541", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: a,
            pause: r,
            pauseWhileUnfocused: s,
          } = this.props;
          return (0, c.jsx)(D.default, {
            className: S(h.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: _,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: s,
            pause: r,
          });
        }
      }
      (A.Scenes = a),
        ((l = r || (r = {})).NORMAL = "normal"),
        (l.SPEED_START = "speed_start"),
        (l.SPEED_LOOP = "speed_loop"),
        (l.FINISH = "finish"),
        (l.IDLE = "idle");
      let N = {
        normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
        speed_start: { BEG: 601, END: 636 },
        speed_loop: { BEG: 637, END: 668 },
        finish: { BEG: 669, END: 870 },
        idle: { BEG: 871, END: 878 },
      };
      class f extends E.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case f.Scenes.SPEED_START:
              return f.Scenes.SPEED_LOOP;
            case f.Scenes.FINISH:
              return f.Scenes.IDLE;
            default:
              return e;
          }
        }
        importDefault() {
          return n
            .el("73902")
            .then(n.t.bind(n, "73902", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: a,
            pause: r,
            pauseWhileUnfocused: s,
          } = this.props;
          return (0, c.jsx)(D.default, {
            className: S(h.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: N,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: s,
            pause: r,
          });
        }
      }
      (f.Scenes = r),
        ((u = s || (s = {})).IDLE_ENTRY = "idle_entry"),
        (u.IDLE_LOOP = "idle_loop"),
        (u.BOOST_START = "boost_start"),
        (u.BOOST_LOOP = "boost_loop"),
        (u.BOOST_END = "boost_end"),
        (u.VICTORY = "victory"),
        (u.ERROR = "error");
      let T = {
        idle_entry: { BEG: 0, END: 50 },
        idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
        boost_start: { BEG: 230, END: 275 },
        boost_loop: { BEG: 275, END: 290 },
        boost_end: { BEG: 386, END: 455 },
        victory: { BEG: 470, END: 525 },
        error: { BEG: 290, END: 375 },
      };
      class O extends E.PureComponent {
        getStyle(e) {
          let { animation: t } = this.props;
          return {
            transform: [
              {
                translateX: t.x.interpolate({
                  inputRange: [0, 1],
                  outputRange: e ? ["100%", "0%"] : ["0%", "-100%"],
                }),
              },
              {
                translateY: t.y.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["100%", "0%"],
                }),
              },
            ],
          };
        }
        render() {
          let { className: e } = this.props;
          return (0, c.jsxs)("div", {
            className: h.panningAnimation,
            children: [
              (0, c.jsx)(I.default.div, {
                className: e,
                style: this.getStyle(!1),
              }),
              (0, c.jsx)(I.default.div, {
                className: e,
                style: this.getStyle(!0),
              }),
            ],
          });
        }
      }
      let L = Object.freeze({
        IDLE_ENTRY: { toValue: 1, duration: 1500 },
        IDLE_LOOP: {
          toValue: 1,
          duration: 6e3,
          easing: I.default.Easing.linear,
        },
        BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
        ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
      });
      class g extends E.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case g.Scenes.IDLE_ENTRY:
              return g.Scenes.IDLE_LOOP;
            case g.Scenes.BOOST_START:
              return g.Scenes.BOOST_LOOP;
            case g.Scenes.BOOST_END:
              return g.Scenes.VICTORY;
            case g.Scenes.VICTORY:
              return g.Scenes.IDLE_ENTRY;
            case g.Scenes.ERROR:
              return g.Scenes.IDLE_LOOP;
            default:
              return e;
          }
        }
        componentWillUnmount() {
          this.didUnmount = !0;
        }
        importData() {
          return n
            .el("475800")
            .then(n.t.bind(n, "475800", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        animateEntry(e) {
          I.default
            .parallel([
              I.default.timing(this.foregroundAnimation.y, {
                toValue: e.toValue,
                duration: e.duration,
                delay: e.delay || 0,
              }),
              I.default.timing(this.backgroundAnimation.y, {
                toValue: e.toValue,
                duration: 1.2 * e.duration,
                delay: e.delay || 0,
              }),
            ])
            .start();
        }
        animateIdleEntry() {
          this.animateEntry(L.IDLE_ENTRY);
        }
        animateError() {
          this.animateEntry(L.ERROR);
        }
        animateIdleLoop() {
          this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
        }
        animateBoostStart() {
          I.default
            .parallel([
              I.default.timing(this.foregroundAnimation.y, {
                toValue: L.BOOST_START.toValue,
                duration: L.BOOST_START.duration,
                delay: L.BOOST_START.delay,
              }),
              I.default.timing(this.backgroundAnimation.y, {
                toValue: L.BOOST_START.toValue,
                duration: 1.2 * L.BOOST_START.duration,
                delay: L.BOOST_START.delay,
              }),
            ])
            .start();
        }
        render() {
          let {
            className: e,
            nextScene: t,
            pause: n,
            onSceneComplete: a,
          } = this.props;
          return (0, c.jsxs)("div", {
            className: S(h.tier2Animation, e),
            children: [
              n
                ? (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsxs)("div", {
                      className: h.panningAnimation,
                      children: [
                        (0, c.jsx)("div", { className: h.tier2Background }),
                        (0, c.jsx)("div", { className: h.tier2Foreground }),
                      ],
                    }),
                  })
                : (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsx)(O, {
                        className: h.tier2Background,
                        animation: this.backgroundAnimation,
                      }),
                      (0, c.jsx)(O, {
                        className: h.tier2Foreground,
                        animation: this.foregroundAnimation,
                      }),
                    ],
                  }),
              (0, c.jsx)(D.default, {
                className: h.sequencedAnimation,
                importData: this.importData,
                nextScene: n ? "idle_loop" : t,
                sceneSegments: T,
                onScenePlay: this.handleScenePlay,
                onSceneComplete: a,
                pauseWhileUnfocused: !1,
                pause: n,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.backgroundAnimation = new I.default.ValueXY({ x: 0, y: 0 })),
            (this.foregroundAnimation = new I.default.ValueXY({ x: 0, y: 0 })),
            (this.didUnmount = !1),
            (this.animateIdleLoopBackground = () => {
              !this.didUnmount &&
                (this.backgroundAnimation.x.setValue(0),
                I.default
                  .timing(this.backgroundAnimation.x, {
                    toValue: L.IDLE_LOOP.toValue,
                    duration: 1.2 * L.IDLE_LOOP.duration,
                    easing: I.default.Easing.linear,
                  })
                  .start(this.animateIdleLoopBackground));
            }),
            (this.animateIdleLoopForeground = () => {
              !this.didUnmount &&
                (this.foregroundAnimation.x.setValue(0),
                I.default
                  .timing(this.foregroundAnimation.x, {
                    toValue: L.IDLE_LOOP.toValue,
                    duration: L.IDLE_LOOP.duration,
                    easing: L.IDLE_LOOP.easing,
                  })
                  .start(this.animateIdleLoopForeground));
            }),
            (this.handleScenePlay = e => {
              switch (e) {
                case "idle_entry":
                  this.animateIdleEntry(), this.animateIdleLoop();
                  break;
                case "error":
                  this.animateError();
                  break;
                case "boost_start":
                  this.animateBoostStart();
              }
              let { onScenePlay: t } = this.props;
              null != t && t(e);
            });
        }
      }
      (g.Scenes = s),
        ((d = i || (i = {})).ENTRY = "entry"),
        (d.IDLE = "idle"),
        (d.STARS = "stars"),
        (d.ERROR = "error"),
        (d.SUCCESS = "success");
      let R = {
          entry: { BEG: 0, END: 180 },
          idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
          stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
          error: { BEG: 360, END: 540 },
          success: { BEG: 540, END: 778 },
        },
        P = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
        y = [
          { left: 29, top: 100, color: P.WHITE },
          { left: 245, top: 11, color: P.PINK },
          { left: 393, top: 22, color: P.WHITE },
          { left: 74, top: 30, color: P.PINK },
          { left: 188, top: 9, color: P.WHITE },
          { left: 379, top: 97, color: P.PINK },
        ],
        x = Object.freeze({
          SCALE_INITIAL: 0,
          SCALE_MIDDLE: 1,
          SCALE_END: 0,
          ROTATE_INITIAL: 0,
          ROTATE_MIDDLE: 180,
          ROTATE_END: 360,
          DELAY_MIN: 200,
          DELAY_MAX: 500,
          DELAY_STAGGER: 200,
          DURATION_MIDDLE: 400,
          DURATION_END: 250,
          SIZE_MIN: 7,
          SIZE_MAX: 15,
          EASING_MIDDLE: I.default.Easing.bezier(0.3, 0.01, 0, 0.99),
          EASING_END: I.default.Easing.bezier(0, -0.01, 0.99, 0),
        });
      function B(e) {
        let { animate: t } = e,
          [n, a] = E.useState(0),
          r = (0, p.useSprings)(
            y.length,
            y.map((e, r) => {
              let s =
                  r > 0
                    ? x.DELAY_STAGGER * r +
                      Math.random() * (x.DELAY_MAX - x.DELAY_MIN) +
                      x.DELAY_MIN
                    : 0,
                i = Math.random() * (x.SIZE_MAX - x.SIZE_MIN) + x.SIZE_MIN;
              return {
                from: {
                  scale: x.SCALE_INITIAL,
                  rotate: x.ROTATE_INITIAL,
                  top: e.top,
                  left: e.left,
                  width: i,
                  height: i,
                },
                to: async e => {
                  t
                    ? (await e({
                        scale: x.SCALE_MIDDLE,
                        rotate: x.ROTATE_MIDDLE,
                        delay: s,
                        config: {
                          duration: x.DURATION_MIDDLE,
                          easing: x.EASING_MIDDLE,
                        },
                      }),
                      await e({
                        scale: x.SCALE_END,
                        rotate: x.ROTATE_END,
                        config: {
                          duration: x.DURATION_END,
                          easing: x.EASING_END,
                        },
                      }),
                      await e({
                        scale: x.SCALE_INITIAL,
                        rotate: x.ROTATE_INITIAL,
                        immediate: !0,
                      }),
                      r === y.length - 1 && a(n + 1))
                    : await e({
                        scale: x.SCALE_INITIAL,
                        rotate: x.ROTATE_INITIAL,
                      });
                },
              };
            })
          );
        return (0, c.jsx)(c.Fragment, {
          children: r.map((e, t) => {
            let n = y[t];
            return (0, c.jsx)(
              p.animated.svg,
              {
                style: e,
                className: h.guildStar,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12.14 12.24",
                children: (0, c.jsx)("path", {
                  d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                  fill: n.color,
                }),
              },
              t
            );
          }),
        });
      }
      class b extends E.PureComponent {
        static getNextScene(e) {
          switch (e) {
            case "entry":
            case "error":
            case "success":
              return "idle";
            default:
              return e;
          }
        }
        importData() {
          return n
            .el("438967")
            .then(n.t.bind(n, "438967", 19))
            .then(e => {
              let { default: t } = e;
              return t;
            });
        }
        render() {
          let {
            className: e,
            nextScene: t,
            pause: n,
            onScenePlay: a,
            onSceneComplete: r,
            pauseWhileUnfocused: s,
          } = this.props;
          return (0, c.jsxs)("div", {
            className: S(h.guildWrapper, e),
            children: [
              (0, c.jsx)(D.default, {
                className: h.guildBackground,
                importData: this.importData,
                nextScene: n ? "idle" : t,
                sceneSegments: R,
                onScenePlay: a,
                onSceneComplete: r,
                pauseWhileUnfocused: s,
                pause: n,
              }),
              (0, c.jsx)(B, { animate: !n && "stars" === t }),
            ],
          });
        }
      }
      b.Scenes = i;
    },
  },
]);
//# sourceMappingURL=24439.3cbcf23c1f4078065750.js.map

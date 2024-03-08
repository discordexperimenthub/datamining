(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17884"],
  {
    315147: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3808a69f670fa9a67284.svg";
    },
    65324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("70102");
      var a = n("37983"),
        i = n("884691"),
        l = n("446674"),
        r = n("206230"),
        s = n("491605"),
        u = n("642716"),
        o = n("646718");
      function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: h,
            idleAnimationState: c,
          } = e,
          f = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.useReducedMotion
          ),
          [m, p] = i.useState(h),
          S = i.useRef((0, u.getGiftAnimationData)(t, m)),
          [b, y] = i.useState(null == c),
          [A, E] = i.useState(!1),
          [k, v] = i.useState(-1),
          P = () => {
            (S.current = (0, u.getGiftAnimationData)(t, m)), v(e => e + 1);
          },
          O = () => {
            y(!1), E(!0), v(-1), p(h);
          };
        i.useEffect(() => {
          null == c && p(h);
        }, [c, h]),
          i.useEffect(() => {
            if (null != c && k >= 0) {
              O();
              return;
            }
            P();
          }, [t, c]),
          i.useEffect(() => {
            (!A || null == c) && P();
          }, [m]),
          i.useEffect(() => {
            A && (y(null == c), E(!1), P());
          }, [A]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, a.jsx)(s.default, {
          importData: S.current,
          shouldAnimate: !f && d,
          className: n,
          versionKey: k,
          onComplete:
            null != c
              ? () => {
                  null != c && (p(c), y(!0));
                }
              : void 0,
          loop: b,
        });
      }
    },
    642716: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getGiftAnimationData: function () {
            return l;
          },
        });
      var a = n("210721"),
        i = n("646718");
      let l = (e, t) => {
        let l;
        switch (e) {
          case i.PremiumGiftStyles.SNOWGLOBE:
            l = () =>
              n
                .el("452661")
                .then(n.t.bind(n, "452661", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case i.PremiumGiftStyles.BOX:
            l = () =>
              n
                .el("726871")
                .then(n.t.bind(n, "726871", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case i.PremiumGiftStyles.CUP:
            l = () =>
              n
                .el("544929")
                .then(n.t.bind(n, "544929", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case i.PremiumGiftStyles.STANDARD_BOX:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("973372")
                    .then(n.t.bind(n, "973372", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("353540")
                    .then(n.t.bind(n, "353540", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("303473")
                    .then(n.t.bind(n, "303473", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.CAKE:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("127891")
                    .then(n.t.bind(n, "127891", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("953820")
                    .then(n.t.bind(n, "953820", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("311972")
                    .then(n.t.bind(n, "311972", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.CHEST:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("269055")
                    .then(n.t.bind(n, "269055", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("120467")
                    .then(n.t.bind(n, "120467", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("451680")
                    .then(n.t.bind(n, "451680", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.COFFEE:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("863089")
                    .then(n.t.bind(n, "863089", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("949233")
                    .then(n.t.bind(n, "949233", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("361896")
                    .then(n.t.bind(n, "361896", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("158302")
                    .then(n.t.bind(n, "158302", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("610146")
                    .then(n.t.bind(n, "610146", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("294569")
                    .then(n.t.bind(n, "294569", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_CAKE:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("124416")
                    .then(n.t.bind(n, "124416", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("335900")
                    .then(n.t.bind(n, "335900", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("566748")
                    .then(n.t.bind(n, "566748", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_CHEST:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("708949")
                    .then(n.t.bind(n, "708949", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("355472")
                    .then(n.t.bind(n, "355472", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("262001")
                    .then(n.t.bind(n, "262001", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case i.PremiumGiftStyles.SEASONAL_COFFEE:
            switch (t) {
              case a.AnimationState.IDLE:
                l = () =>
                  n
                    .el("836477")
                    .then(n.t.bind(n, "836477", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.AnimationState.LOOP:
                l = () =>
                  n
                    .el("737995")
                    .then(n.t.bind(n, "737995", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("433750")
                    .then(n.t.bind(n, "433750", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            l = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return l;
      };
    },
    273108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var a = n("37983"),
        i = n("884691"),
        l = n("414456"),
        r = n.n(l),
        s = n("446674"),
        u = n("206230"),
        o = n("471671"),
        d = n("708721");
      class h extends i.PureComponent {
        async componentDidMount() {
          let {
              importData: e,
              nextScene: t,
              pauseWhileUnfocused: a,
              pause: i,
              isWindowFocused: l,
              useReducedMotion: r,
            } = this.props,
            [s, { default: u }] = await Promise.all([
              e(),
              n.el("865981").then(n.t.bind(n, "865981", 23)),
            ]);
          null != this.animationRef &&
            ((this.animation = u.loadAnimation({
              container: this.animationRef,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: s,
            })),
            this.animation.addEventListener(
              "loopComplete",
              this.handleLoopComplete
            ),
            this.animation.addEventListener("complete", this.handleComplete),
            this.playScene(t),
            ((a && !l) || i || r) && this.animation.pause());
        }
        componentWillUnmount() {
          (this.isUnmounted = !0),
            null != this.animation &&
              (this.animation.destroy(), (this.animation = void 0));
        }
        componentDidUpdate(e) {
          var t, n, a;
          let {
            nextScene: i,
            pauseWhileUnfocused: l,
            pause: r,
            isWindowFocused: s,
            useReducedMotion: u,
          } = this.props;
          i !== this.currentScene &&
            this.shouldForcePlayAfter() &&
            !r &&
            this.playScene(i),
            null != this.animation &&
              (l && !e.isWindowFocused && s && !u && !0 !== r
                ? this.animation.play()
                : (u || (l && e.isWindowFocused && !s)) &&
                  this.animation.pause()),
            !e.pause && r
              ? null === (t = this.animation) || void 0 === t || t.pause()
              : e.pause &&
                !r &&
                !u &&
                (null === (n = this.animation) || void 0 === n || n.play()),
            e.nextScene !== i &&
              r &&
              (this.playScene(i),
              null === (a = this.animation) || void 0 === a || a.pause());
        }
        shouldForcePlayAfter() {
          let { sceneSegments: e } = this.props,
            t = e[this.currentScene];
          return !0 === t.shouldForcePlayAfter;
        }
        playScene(e) {
          if (this.isUnmounted) return;
          let {
              onScenePlay: t,
              sceneSegments: n,
              useReducedMotion: a,
            } = this.props,
            i = n[e],
            l = n[this.currentScene];
          if (
            (null != this.animation &&
              (e === this.currentScene || i.BEG !== l.BEG || i.END !== l.END) &&
              this.animation.playSegments([i.BEG, i.END], !0),
            (this.currentScene = e),
            null != t && t(this.currentScene),
            a)
          ) {
            var r;
            null === (r = this.animation) || void 0 === r || r.pause();
          }
        }
        render() {
          return (0, a.jsx)("div", {
            ref: this.handleSetRef,
            className: r(this.props.className, d.wrapper),
          });
        }
        constructor(...e) {
          super(...e),
            (this.animationRef = null),
            (this.currentScene = this.props.nextScene),
            (this.isUnmounted = !1),
            (this.handleLoopComplete = () => {
              let { onSceneComplete: e, nextScene: t } = this.props;
              null != e && e(this.currentScene), this.playScene(t);
            }),
            (this.handleComplete = () => {
              let { onSceneComplete: e } = this.props;
              null != e && e(this.currentScene);
            }),
            (this.handleSetRef = e => {
              this.animationRef = e;
              let { animationRef: t } = this.props;
              null != t && t(e);
            });
        }
      }
      h.defaultProps = { pauseWhileUnfocused: !0, pause: !1 };
      var c = e => {
        let { componentRef: t, ...n } = e,
          i = (0, s.useStateFromStores)([o.default], () =>
            o.default.isFocused()
          ),
          l = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.useReducedMotion
          );
        return (0, a.jsx)(h, {
          ...n,
          isWindowFocused: i,
          useReducedMotion: l,
          ref: t,
        });
      };
    },
    181108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var a = n("37983"),
        i = n("884691"),
        l = n("516555");
      let r = [n("315147")],
        s = ["#FFFFFF"],
        u = 1e3 / 60,
        o = {
          velocity: {
            type: "static-random",
            minValue: { x: 0, y: 1 },
            maxValue: { x: 3, y: 3 },
          },
          rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
          },
          size: { type: "static-random", minValue: 2, maxValue: 6 },
          dragCoefficient: { type: "static", value: { x: 0.05, y: 0.05 } },
          opacity: { type: "static", value: 0.3 },
        };
      function d(e) {
        let { className: t, firing: n = !0, wind: d = 2 } = e,
          [h, c] = i.useState(null),
          [f, m] = i.useState(null),
          p = (0, l.useConfettiCannon)(f, h),
          S = i.useMemo(() => new l.Environment({ wind: d }), [d]),
          b = i.useCallback(() => {
            let e = null == f ? void 0 : f.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            p.createConfetti({
              ...o,
              position: {
                type: "static-random",
                minValue: { x: -t.width / 2, y: -6 },
                maxValue: { x: t.width, y: -6 },
              },
            });
          }, [p, f]);
        return (
          i.useEffect(() => {
            let e = n ? setInterval(b, u) : null;
            return () => clearInterval(e);
          }, [n, b]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.ConfettiCanvas, {
                ref: m,
                className: t,
                environment: S,
              }),
              (0, a.jsx)(l.SpriteCanvas, {
                ref: c,
                colors: s,
                sprites: r,
                spriteWidth: 6,
                spriteHeight: 6,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=17884.1eb9aece970b99fc7b5f.js.map

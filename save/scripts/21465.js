(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21465"],
  {
    439437: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return o;
          },
        }),
        n("222007"),
        n("424973");
      var s,
        o,
        i = n("37983"),
        r = n("884691"),
        a = n("414456"),
        l = n.n(a),
        c = n("369470"),
        u = n.n(c),
        d = n("458960"),
        p = n("266491"),
        h = n("957954"),
        f = n("485328"),
        m = n("407063"),
        C = n("87465"),
        g = n("659500"),
        E = n("49111"),
        L = n("610533");
      let A = { friction: 10, tension: 100 };
      function N(t, e) {
        return ((t % e) + e) % e;
      }
      class O extends r.Component {
        componentWillEnter(t) {
          let { directionHistory: e } = this.props,
            { translate: n, opacity: s } = this.state;
          n.setValue(e[e.length - 1]),
            s.setValue(0),
            t(),
            d.default
              .parallel([
                d.default.timing(s, {
                  toValue: 1,
                  easing: d.default.Easing.out(d.default.Easing.linear),
                  duration: 200,
                }),
                d.default.spring(n, { toValue: 0, ...A }),
              ])
              .start();
        }
        componentWillLeave(t) {
          let { directionHistory: e } = this.props,
            { opacity: n, translate: s } = this.state;
          d.default
            .parallel([
              d.default.timing(n, {
                toValue: 0,
                easing: d.default.Easing.in(d.default.Easing.linear),
                duration: 200,
              }),
              d.default.spring(s, { toValue: -1 * e[e.length - 1], ...A }),
            ])
            .start(t);
        }
        getStyle() {
          let { translate: t, opacity: e } = this.state;
          return d.default.accelerate({
            opacity: e,
            transform: [
              {
                translateX: t.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0px", "300px"],
                }),
              },
            ],
          });
        }
        render() {
          let { item: t } = this.props,
            { className: e } = this.props;
          return (0, i.jsx)(d.default.img, {
            src: t.src,
            alt: "",
            className: l(L.slide, e),
            style: this.getStyle(),
          });
        }
        constructor(...t) {
          super(...t),
            (this.state = {
              translate: new d.default.Value(0),
              opacity: new d.default.Value(1),
            });
        }
      }
      ((s = class extends r.Component {
        componentDidMount() {
          this.preloadNextImages(),
            f.default.disable(),
            f.default.enableTemp(h.MODAL_CAROUSEL_LAYOUT),
            g.ComponentDispatch.subscribe(
              E.ComponentActions.MODAL_CAROUSEL_NEXT,
              this.gotoNextThrottled
            ),
            g.ComponentDispatch.subscribe(
              E.ComponentActions.MODAL_CAROUSEL_PREV,
              this.gotoPrevThrottled
            );
        }
        componentWillUnmount() {
          f.default.disableTemp(),
            g.ComponentDispatch.unsubscribe(
              E.ComponentActions.MODAL_CAROUSEL_NEXT,
              this.gotoNextThrottled
            ),
            g.ComponentDispatch.unsubscribe(
              E.ComponentActions.MODAL_CAROUSEL_PREV,
              this.gotoPrevThrottled
            );
        }
        preloadNextImages() {
          var t, e;
          let { currentIndex: n } = this.state,
            { items: s } = this.props;
          let o = (((n + 1) % (t = s.length)) + t) % t;
          let i = (((n - 1) % (e = s.length)) + e) % e;
          this.preloadImage(s[o]), this.preloadImage(s[i]);
        }
        preloadImage(t) {
          (0, m.loadImage)(t.src);
        }
        componentDidUpdate(t, e) {
          let { currentIndex: n } = this.state;
          n !== e.currentIndex && this.preloadNextImages();
        }
        navigateTo(t) {
          var e, n, s;
          let { directionHistory: o, currentIndex: i } = this.state;
          o.push(t - i),
            (t = ((t % (s = this.props.items.length)) + s) % s),
            this.setState({ currentIndex: t, directionHistory: o }),
            null === (e = (n = this.props).onIndexChange) ||
              void 0 === e ||
              e.call(n, t);
        }
        render() {
          var t;
          let { className: e } = this.props,
            { currentIndex: n, directionHistory: s } = this.state,
            { modalCarouselItemClassName: o } = this.props,
            r = this.props.items[n],
            a = this.props.items;
          return (0, i.jsxs)(p.default, {
            component: "div",
            className: l(L.wrapper, e),
            children: [
              a.length > 1
                ? (0, i.jsx)(C.CarouselPrevious, {
                    className: L.navPrev,
                    onClick: this.gotoPrev,
                  })
                : null,
              null !== (t = r.component) && void 0 !== t
                ? t
                : (0, i.jsx)(
                    O,
                    { item: r, directionHistory: s, className: o },
                    r.src
                  ),
              a.length > 1
                ? (0, i.jsx)(C.CarouselNext, {
                    className: L.navNext,
                    onClick: this.gotoNext,
                  })
                : null,
            ],
          });
        }
        constructor(t) {
          super(t),
            (this.gotoNext = () => {
              let { currentIndex: t } = this.state;
              this.navigateTo(t + 1);
            }),
            (this.gotoPrev = () => {
              let { currentIndex: t } = this.state;
              this.navigateTo(t - 1);
            }),
            (this.gotoNextThrottled = u(this.gotoNext, 300)),
            (this.gotoPrevThrottled = u(this.gotoPrev, 300)),
            (this.state = { currentIndex: t.startWith, directionHistory: [] });
        }
      }).defaultProps = { startWith: 0 }),
        (o = s);
    },
    7037: function (t, e, n) {
      "use strict";
      n.r(e);
      var s = n("833067");
      n.es(s, e);
    },
    73579: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          CAROUSEL_NEXT: function () {
            return l;
          },
          CAROUSEL_PREV: function () {
            return c;
          },
          MODAL_CAROUSEL_NEXT: function () {
            return u;
          },
          MODAL_CAROUSEL_PREV: function () {
            return d;
          },
          MODAL_CAROUSEL_CLOSE: function () {
            return p;
          },
        });
      var s = n("77078"),
        o = n("778588"),
        i = n("659500"),
        r = n("49111");
      let a = () => o.default.hasLayers() || (0, s.hasAnyModalOpen)(),
        l = {
          binds: ["right"],
          comboKeysBindGlobal: !0,
          action() {
            if (!a())
              return (
                i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_NEXT),
                !1
              );
          },
        },
        c = {
          binds: ["left"],
          comboKeysBindGlobal: !0,
          action() {
            if (!a())
              return (
                i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_PREV),
                !1
              );
          },
        },
        u = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.ComponentDispatch.dispatch(
              r.ComponentActions.MODAL_CAROUSEL_NEXT
            ),
            !1
          ),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.ComponentDispatch.dispatch(
              r.ComponentActions.MODAL_CAROUSEL_PREV
            ),
            !1
          ),
        },
        p = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (
              i.ComponentDispatch.hasSubscribers(r.ComponentActions.MODAL_CLOSE)
            )
              return (
                i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CLOSE), !1
              );
          },
        };
    },
    957954: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          MODAL_CAROUSEL_LAYOUT: function () {
            return i;
          },
        });
      var s = n("73579"),
        o = n("49111");
      let i = {
        [o.KeybindActions.MODAL_CAROUSEL_NEXT]: s.MODAL_CAROUSEL_NEXT,
        [o.KeybindActions.MODAL_CAROUSEL_PREV]: s.MODAL_CAROUSEL_PREV,
        [o.KeybindActions.CLOSE_MODAL]: s.MODAL_CAROUSEL_CLOSE,
      };
    },
    100814: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("414456"),
        i = n.n(o),
        r = n("77078"),
        a = n("439437"),
        l = n("242970");
      function c(t) {
        let {
          className: e,
          transitionState: n,
          items: o,
          startingIndex: c,
          onClose: u,
          onIndexChange: d,
          modalCarouselClassName: p,
          modalCarouselItemClassName: h,
        } = t;
        return (0, s.jsx)(r.ModalRoot, {
          hideShadow: !0,
          className: i(l.carouselModal, e),
          size: r.ModalSize.DYNAMIC,
          transitionState: n,
          "aria-label": "",
          onClick: u,
          children: (0, s.jsx)(a.default, {
            className: p,
            items: o,
            startWith: c,
            onIndexChange: d,
            modalCarouselItemClassName: h,
          }),
        });
      }
    },
    137215: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return p;
          },
        });
      var s = n("37983"),
        o = n("884691"),
        i = n("414456"),
        r = n.n(i),
        a = n("546671"),
        l = n("711603");
      let c = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
        u = {
          [c.UP]: l.up,
          [c.RIGHT]: l.right,
          [c.DOWN]: l.down,
          [c.LEFT]: l.left,
        };
      class d extends o.PureComponent {
        render() {
          let { direction: t, className: e } = this.props;
          return (0, s.jsx)(a.default, {
            className: r(l.arrow, e, { [u[t]]: !0 }),
          });
        }
      }
      d.Directions = c;
      var p = d;
    },
    87465: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          CarouselPrevious: function () {
            return p;
          },
          CarouselNext: function () {
            return h;
          },
          default: function () {
            return f;
          },
        }),
        n("222007");
      var s = n("37983"),
        o = n("884691"),
        i = n("414456"),
        r = n.n(i),
        a = n("77078"),
        l = n("137215"),
        c = n("931435");
      let u = { CENTER: c.alignCenter, LEFT: c.alignLeft };
      class d extends o.PureComponent {
        componentDidUpdate(t) {
          let { selectedIndex: e } = this.props;
          t.selectedIndex !== e && this.handleSelectedIndexChange(e);
        }
        render() {
          let {
              renderItem: t,
              items: e,
              vertical: n,
              paginationContainerClass: i,
              align: l,
            } = this.props,
            u = n
              ? c.verticalPaginationItemContainer
              : c.horizontalPaginationItemContainer;
          return (0, s.jsx)(a.AdvancedScrollerAuto, {
            orientation: n ? "vertical" : "horizontal",
            className: r(u, i, l),
            ref: this.handleSetScrollerRef,
            children: e.map((e, n) =>
              o.cloneElement(t(e, n), {
                onClick: () => this.handlePageClick(n),
                key: n,
                ref: t => {
                  this._paginationItemRefs[n] = t;
                },
              })
            ),
          });
        }
        constructor(...t) {
          super(...t),
            (this._scrollerRef = null),
            (this._paginationItemRefs = []),
            (this.handleSetScrollerRef = t => {
              this._scrollerRef = t;
            }),
            (this.handleSelectedIndexChange = t => {
              let e = this._scrollerRef;
              if (null == e) return;
              let n = this._paginationItemRefs[t];
              null != n &&
                e.scrollIntoViewNode({
                  node: n,
                  animate: !0,
                  padding: this.props.scrollToPadding,
                });
            }),
            (this.handlePageClick = t => {
              let { onSetItem: e } = this.props;
              e(t);
            });
        }
      }
      (d.Align = u),
        (d.defaultProps = {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: u.CENTER,
        });
      class p extends o.PureComponent {
        render() {
          let { className: t } = this.props;
          return (0, s.jsx)(a.Button, {
            look: a.Button.Looks.BLANK,
            size: a.Button.Sizes.NONE,
            className: r(c.prevButtonContainer, t),
            onClick: this.handlePrevClick,
            children: (0, s.jsx)(l.default, {
              className: c.arrow,
              direction: l.default.Directions.LEFT,
            }),
          });
        }
        constructor(...t) {
          super(...t),
            (this.handlePrevClick = t => {
              t.stopPropagation(), t.preventDefault();
              let { onClick: e } = this.props;
              null == e || e(t);
            });
        }
      }
      class h extends o.PureComponent {
        render() {
          let { className: t } = this.props;
          return (0, s.jsx)(a.Button, {
            look: a.Button.Looks.BLANK,
            size: a.Button.Sizes.NONE,
            className: r(c.nextButtonContainer, t),
            onClick: this.handleNextClick,
            children: (0, s.jsx)(l.default, {
              className: c.arrow,
              direction: l.default.Directions.RIGHT,
            }),
          });
        }
        constructor(...t) {
          super(...t),
            (this.handleNextClick = t => {
              t.stopPropagation(), t.preventDefault();
              let { onClick: e } = this.props;
              null == e || e(t);
            });
        }
      }
      var f = d;
    },
    246053: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        }),
        n("70102");
      var s,
        o,
        i = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        l = n("75196"),
        c = n("774889");
      ((o = s || (s = {})).LEFT = "LEFT"),
        (o.RIGHT = "RIGHT"),
        (o.UP = "UP"),
        (o.DOWN = "DOWN"),
        (o.UP_LEFT = "UP_LEFT"),
        (o.DOWN_RIGHT = "DOWN_RIGHT");
      let u = t => {
        let {
          width: e = 24,
          height: n = 24,
          color: s = "currentColor",
          direction: o,
          foreground: r,
          className: u,
          title: d,
          ...p
        } = t;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(p),
          width: e,
          height: n,
          className: a(
            u,
            (function (t) {
              switch (t) {
                case "LEFT":
                  return c.left;
                case "RIGHT":
                  return c.right;
                case "UP":
                  return null;
                case "DOWN":
                  return c.down;
                case "UP_LEFT":
                  return c.upLeft;
                case "DOWN_RIGHT":
                  return c.downRight;
                default:
                  throw Error("Invalid Direction ".concat(t));
              }
            })(o)
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, i.jsx)("title", { children: d }) : null,
            (0, i.jsx)("polygon", {
              className: r,
              fill: s,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      u.Directions = s;
      var d = u;
    },
    546671: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return a;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("469563"),
        i = n("7037"),
        r = n("246053"),
        a = (0, o.replaceIcon)(function (t) {
          return (0, s.jsx)(r.default, {
            ...t,
            direction: r.default.Directions.UP,
          });
        }, i.ArrowSmallUpIcon);
    },
    833067: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          ArrowSmallUpIcon: function () {
            return r;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("669491"),
        i = n("82169");
      let r = t => {
        let {
          width: e = 24,
          height: n = 24,
          color: r = o.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...l
        } = t;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: a,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=10371417908550b991a2.js.map

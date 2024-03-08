(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11626"],
  {
    700468: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ItemSizes: function () {
            return L;
          },
          default: function () {
            return T;
          },
        });
      var n = s("926607");
      s("222007");
      var a = s("37983"),
        i = s("884691"),
        r = s("414456"),
        l = s.n(r),
        o = s("458960"),
        d = s("77078"),
        u = s("737960"),
        h = s("933629"),
        c = s("87465"),
        p = s("963241"),
        m = s("560176"),
        g = s("633667"),
        C = s("265836"),
        f = s("952368"),
        I = s("468482"),
        x = s("659500"),
        E = s("49111"),
        v = s("958575");
      function N() {
        let e = (0, n._)(["grayscale(", ")"]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      let L = {
          SMALL: { width: 640, height: 360, margin: 15 },
          MEDIUM: { width: 880, height: 495, margin: 20 },
        },
        S = { width: 1920, height: 1080 },
        A = { width: 1280, height: 720 },
        y = e =>
          (0, h.renderVideoComponent)({
            ...e,
            className: v.videoWrapper,
            mediaPlayerClassName: v.mediaPlayer,
          }),
        P = e => (0, a.jsx)(f.default, { ...e }),
        M = e => {
          let t,
            s,
            n,
            {
              item: i,
              size: r,
              onPlay: l,
              onEnded: o,
              onClick: u,
              playable: c,
              volume: p,
              isMuted: C,
              onVolumeChange: f,
              onMute: I,
            } = e;
          if (i.type === E.CarouselMediaTypes.YOUTUBE_VIDEO)
            (t = { url: (0, E.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId), ...S }),
              (s = {
                url: ""
                  .concat((0, E.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...A,
              }),
              (n = g.SupportedEmbedIFrame.YOUTUBE);
          else {
            let e = null != i.width ? i.width : 0,
              n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
              (s = { url: i.src, proxyURL: i.src, width: e, height: n });
          }
          let x = (0, a.jsx)(m.EmbedVideo, {
            href: null,
            thumbnail: t,
            video: s,
            provider: n,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: c,
            className: v.video,
            volume: p,
            onVolumeChange: f,
            autoMute: C,
            onMute: I,
            autoPlay: c,
            renderVideoComponent: y,
            renderImageComponent: P,
            renderLinkComponent: h.renderMaskedLinkComponent,
          });
          return c
            ? x
            : (0, a.jsx)(d.Clickable, {
                className: v.itemImageWrapper,
                onClick: u,
                children: x,
              });
        },
        R = () =>
          (0, a.jsx)("div", {
            className: v.paginationVideoOverlay,
            children: (0, a.jsx)(I.default, {
              inactive: !0,
              className: v.paginationVideoPlayPill,
              renderLinkComponent: h.renderMaskedLinkComponent,
            }),
          });
      class O extends i.PureComponent {
        componentDidMount() {
          x.ComponentDispatch.subscribe(
            E.ComponentActions.CAROUSEL_PREV,
            this.manualPrevious
          ),
            x.ComponentDispatch.subscribe(
              E.ComponentActions.CAROUSEL_NEXT,
              this.manualNext
            );
        }
        componentWillUnmount() {
          x.ComponentDispatch.unsubscribe(
            E.ComponentActions.CAROUSEL_PREV,
            this.manualPrevious
          ),
            x.ComponentDispatch.unsubscribe(
              E.ComponentActions.CAROUSEL_NEXT,
              this.manualNext
            );
        }
        getStyle(e, t) {
          let s = t.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: o.default.Extrapolate.CLAMP,
          });
          return {
            opacity: t.interpolate({
              inputRange: [0, 1],
              outputRange: [0.3, 1],
              extrapolate: o.default.Extrapolate.CLAMP,
            }),
            filter: o.default.template(N(), s),
          };
        }
        handleCurrentItemClick(e, t) {
          let { onCurrentItemClick: s } = this.props;
          null != s && s(e, t), this.setState({ hasInteracted: !0 });
        }
        handleEdgeItemMouseEnter(e) {
          let { currentIndex: t } = this.state;
          e < t
            ? this.setState({ hoveringPreviousItem: !0 })
            : e > t && this.setState({ hoveringNextItem: !0 });
        }
        renderCarousel() {
          let { items: e } = this.props,
            {
              currentIndex: t,
              animate: s,
              hoveringPreviousItem: n,
              hoveringNextItem: i,
            } = this.state,
            r = (0, a.jsx)(p.default, {
              items: e,
              itemSize: this.getItemSize(),
              renderItem: this.renderItem,
              currentIndex: t,
              animate: s,
              edgeItems: 2,
            });
          return e.length <= 1
            ? r
            : (0, a.jsxs)("div", {
                className: v.carouselButtonsContainer,
                children: [
                  r,
                  (0, a.jsx)(c.CarouselPrevious, {
                    onClick: this.manualPrevious,
                    className: l(v.arrow, { [v.arrowHovered]: n }),
                  }),
                  (0, a.jsx)(c.CarouselNext, {
                    onClick: this.manualNext,
                    className: l(v.arrow, { [v.arrowHovered]: i }),
                  }),
                ],
              });
        }
        getPaginationSrc(e) {
          return e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO
            ? (0, E.YOUTUBE_PREVIEW_URL)(e.youtubeVideoId)
            : e.type === E.CarouselMediaTypes.IMG
              ? e.src
              : e.type === E.CarouselMediaTypes.VIDEO
                ? e.thumbnailSrc
                : null;
        }
        render() {
          let {
              items: e,
              className: t,
              autoplayInterval: s,
              paused: n,
            } = this.props,
            { currentIndex: i, playingVideo: r, hasInteracted: l } = this.state;
          return (0, a.jsxs)(C.default, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: s,
            className: t,
            disable: r || l || n,
            children: [
              this.renderCarousel(),
              (0, a.jsx)("div", {
                className: v.pagination,
                children: (0, a.jsx)(c.default, {
                  renderItem: this.renderPaginationItem,
                  scrollToPadding: 85,
                  items: e,
                  selectedIndex: i,
                  onSetItem: e => this.setItem(e, !0),
                  paginationContainerClass: v.scroller,
                  align:
                    e.length < 6
                      ? c.default.Align.LEFT
                      : c.default.Align.CENTER,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              currentIndex: 0,
              animate: !0,
              playingVideo: !1,
              hasInteracted: !1,
              hoveringPreviousItem: !1,
              hoveringNextItem: !1,
              volume: 1,
              isMuted: !0,
            }),
            (this.getItemSize = () => {
              let { width: e } = this.props,
                t = L.MEDIUM;
              return null != e && e < t.width && (t = L.SMALL), t;
            }),
            (this.setItem = (e, t) => {
              let {
                  props: { items: s, onIntentionalChange: n },
                  state: { currentIndex: a },
                } = this,
                i = (0, p.normalizeIndex)(a, s.length),
                r = (0, p.normalizeIndex)(e, s.length),
                l =
                  1 === Math.abs(e - i) ||
                  (e === s.length - 1 && 0 === i) ||
                  (0 === e && i === s.length - 1);
              this.setState({
                playingVideo: !1,
                currentIndex: r,
                animate: l,
                hasInteracted: t,
              }),
                t && null != n && n(s[r], i, r);
            }),
            (this.autoNext = () => {
              this.setItem(this.state.currentIndex + 1, !1);
            }),
            (this.manualNext = () => {
              this.setItem(this.state.currentIndex + 1, !0);
            }),
            (this.manualPrevious = () => {
              this.setItem(this.state.currentIndex - 1, !0);
            }),
            (this.handlePlay = e =>
              this.setState({ playingVideo: !0, hasInteracted: !e })),
            (this.handleEnded = () => {
              !this.state.hasInteracted && this.autoNext();
            }),
            (this.handleVolumeChange = e => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            (this.handleMute = e => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            (this.handleVideoClick = e => {
              this.setItem(e, !0);
            }),
            (this.handleEdgeItemMouseLeave = () => {
              this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
            }),
            (this.renderCarouselImage = (e, t, s) =>
              s
                ? (0, a.jsx)(d.Clickable, {
                    onClick: () => this.handleCurrentItemClick(e, t),
                    className: v.itemImageWrapper,
                    children: (0, a.jsx)("img", {
                      src: e.src,
                      alt: "",
                      className: v.currentImage,
                    }),
                  })
                : (0, a.jsx)(d.Clickable, {
                    onClick: () => this.setItem(t, !0),
                    className: v.itemImageWrapper,
                    children: (0, a.jsx)("img", {
                      alt: "",
                      className: v.itemImage,
                      src: e.src,
                      draggable: !1,
                    }),
                  })),
            (this.renderItem = (e, t, s) => {
              let { currentIndex: n, volume: i, isMuted: r } = this.state,
                d = t === (0, p.normalizeIndex)(n, this.props.items.length);
              return (0, a.jsx)(o.default.div, {
                className: l(v.item, { [v.currentItem]: d }),
                style: null != s ? this.getStyle(t, s) : null,
                onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
                onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
                children:
                  e.type === E.CarouselMediaTypes.VIDEO ||
                  e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO
                    ? (0, a.jsx)(M, {
                        item: e,
                        size: this.getItemSize(),
                        onPlay: this.handlePlay,
                        onEnded: this.handleEnded,
                        playable: d,
                        onClick: () => this.handleVideoClick(t),
                        volume: i,
                        onVolumeChange: this.handleVolumeChange,
                        isMuted: r,
                        onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, d),
              });
            }),
            (this.renderPaginationItem = (e, t) => {
              let { currentIndex: s } = this.state,
                n = s === t;
              return (0, a.jsxs)(
                "div",
                {
                  className: l(
                    v.paginationItem,
                    n
                      ? v.selectedStorePaginationItem
                      : v.unselectedStorePaginationItem
                  ),
                  children: [
                    (0, a.jsx)("img", {
                      alt: null == e.alt ? t : e.alt,
                      className: v.storePaginationImg,
                      src: this.getPaginationSrc(e),
                      draggable: !1,
                    }),
                    e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO ||
                    e.type === E.CarouselMediaTypes.VIDEO
                      ? (0, a.jsx)(R, {})
                      : null,
                    n
                      ? (0, a.jsx)("div", { className: v.overlappingBorder })
                      : null,
                  ],
                },
                "page-".concat(t)
              );
            });
        }
      }
      O.defaultProps = { autoplayInterval: 8e3, paused: !1 };
      var T = (0, u.default)(O);
    },
    439437: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        }),
        s("222007"),
        s("424973");
      var n,
        a,
        i = s("37983"),
        r = s("884691"),
        l = s("414456"),
        o = s.n(l),
        d = s("369470"),
        u = s.n(d),
        h = s("458960"),
        c = s("266491"),
        p = s("957954"),
        m = s("485328"),
        g = s("407063"),
        C = s("87465"),
        f = s("659500"),
        I = s("49111"),
        x = s("610533");
      let E = { friction: 10, tension: 100 };
      function v(e, t) {
        return ((e % t) + t) % t;
      }
      class N extends r.Component {
        componentWillEnter(e) {
          let { directionHistory: t } = this.props,
            { translate: s, opacity: n } = this.state;
          s.setValue(t[t.length - 1]),
            n.setValue(0),
            e(),
            h.default
              .parallel([
                h.default.timing(n, {
                  toValue: 1,
                  easing: h.default.Easing.out(h.default.Easing.linear),
                  duration: 200,
                }),
                h.default.spring(s, { toValue: 0, ...E }),
              ])
              .start();
        }
        componentWillLeave(e) {
          let { directionHistory: t } = this.props,
            { opacity: s, translate: n } = this.state;
          h.default
            .parallel([
              h.default.timing(s, {
                toValue: 0,
                easing: h.default.Easing.in(h.default.Easing.linear),
                duration: 200,
              }),
              h.default.spring(n, { toValue: -1 * t[t.length - 1], ...E }),
            ])
            .start(e);
        }
        getStyle() {
          let { translate: e, opacity: t } = this.state;
          return h.default.accelerate({
            opacity: t,
            transform: [
              {
                translateX: e.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0px", "300px"],
                }),
              },
            ],
          });
        }
        render() {
          let { item: e } = this.props,
            { className: t } = this.props;
          return (0, i.jsx)(h.default.img, {
            src: e.src,
            alt: "",
            className: o(x.slide, t),
            style: this.getStyle(),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              translate: new h.default.Value(0),
              opacity: new h.default.Value(1),
            });
        }
      }
      ((n = class extends r.Component {
        componentDidMount() {
          this.preloadNextImages(),
            m.default.disable(),
            m.default.enableTemp(p.MODAL_CAROUSEL_LAYOUT),
            f.ComponentDispatch.subscribe(
              I.ComponentActions.MODAL_CAROUSEL_NEXT,
              this.gotoNextThrottled
            ),
            f.ComponentDispatch.subscribe(
              I.ComponentActions.MODAL_CAROUSEL_PREV,
              this.gotoPrevThrottled
            );
        }
        componentWillUnmount() {
          m.default.disableTemp(),
            f.ComponentDispatch.unsubscribe(
              I.ComponentActions.MODAL_CAROUSEL_NEXT,
              this.gotoNextThrottled
            ),
            f.ComponentDispatch.unsubscribe(
              I.ComponentActions.MODAL_CAROUSEL_PREV,
              this.gotoPrevThrottled
            );
        }
        preloadNextImages() {
          var e, t;
          let { currentIndex: s } = this.state,
            { items: n } = this.props;
          let a = (((s + 1) % (e = n.length)) + e) % e;
          let i = (((s - 1) % (t = n.length)) + t) % t;
          this.preloadImage(n[a]), this.preloadImage(n[i]);
        }
        preloadImage(e) {
          (0, g.loadImage)(e.src);
        }
        componentDidUpdate(e, t) {
          let { currentIndex: s } = this.state;
          s !== t.currentIndex && this.preloadNextImages();
        }
        navigateTo(e) {
          var t, s, n;
          let { directionHistory: a, currentIndex: i } = this.state;
          a.push(e - i),
            (e = ((e % (n = this.props.items.length)) + n) % n),
            this.setState({ currentIndex: e, directionHistory: a }),
            null === (t = (s = this.props).onIndexChange) ||
              void 0 === t ||
              t.call(s, e);
        }
        render() {
          var e;
          let { className: t } = this.props,
            { currentIndex: s, directionHistory: n } = this.state,
            { modalCarouselItemClassName: a } = this.props,
            r = this.props.items[s],
            l = this.props.items;
          return (0, i.jsxs)(c.default, {
            component: "div",
            className: o(x.wrapper, t),
            children: [
              l.length > 1
                ? (0, i.jsx)(C.CarouselPrevious, {
                    className: x.navPrev,
                    onClick: this.gotoPrev,
                  })
                : null,
              null !== (e = r.component) && void 0 !== e
                ? e
                : (0, i.jsx)(
                    N,
                    { item: r, directionHistory: n, className: a },
                    r.src
                  ),
              l.length > 1
                ? (0, i.jsx)(C.CarouselNext, {
                    className: x.navNext,
                    onClick: this.gotoNext,
                  })
                : null,
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.gotoNext = () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e + 1);
            }),
            (this.gotoPrev = () => {
              let { currentIndex: e } = this.state;
              this.navigateTo(e - 1);
            }),
            (this.gotoNextThrottled = u(this.gotoNext, 300)),
            (this.gotoPrevThrottled = u(this.gotoPrev, 300)),
            (this.state = { currentIndex: e.startWith, directionHistory: [] });
        }
      }).defaultProps = { startWith: 0 }),
        (a = n);
    },
    824021: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Rules: function () {
            return C;
          },
          default: function () {
            return E;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        i = s("414456"),
        r = s.n(i),
        l = s("404828"),
        o = s.n(l),
        d = s("77078"),
        u = s("895530"),
        h = s("9074"),
        c = s("271560"),
        p = s("782340"),
        m = s("450731");
      let g = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
        C = {
          ...h.default.rules,
          heading: {
            ...h.default.rules.heading,
            react(e, t, s) {
              let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
              return (0, n.jsx)(
                u.default,
                { tag: a, children: t(e.content, s) },
                s.key
              );
            },
          },
          assetImage: {
            order: 5,
            match(e, t) {
              let s = e.match(g);
              if (null != s) {
                let e = s[2],
                  n = t.assets.find(t => t.id === e);
                return null != n && [...s, n, t.applicationId];
              }
              return !1;
            },
            parse: e => ({ asset: e[3], alt: e[1], applicationId: e[4] }),
            react: (e, t, s) =>
              (0, n.jsx)(
                "div",
                {
                  className: m.assetWrapper,
                  children: (0, n.jsx)("img", {
                    alt: e.alt,
                    src: (0, c.getAssetURL)(e.applicationId, e.asset, 800),
                    className: m.asset,
                  }),
                },
                s.key
              ),
          },
        },
        f = o.parserFor(C),
        I = o.reactFor(o.ruleOutput(C, "react"));
      class x extends a.PureComponent {
        componentDidMount() {
          if (null != this._container) {
            let { height: e } = this._container.getBoundingClientRect();
            this.setState({ collapsable: e > 400 });
          }
        }
        render() {
          let {
              applicationId: e,
              description: t,
              blurb: s,
              className: a,
              assets: i,
            } = this.props,
            { collapsed: l, collapsable: o } = this.state;
          return (0, n.jsxs)("div", {
            className: a,
            children: [
              (0, n.jsx)("div", {
                className: r({ [m.collapsed]: o && l }),
                children: (0, n.jsxs)("div", {
                  ref: this.setContentContainerRef,
                  children: [
                    (0, n.jsx)("div", { className: m.blurb, children: s }),
                    (0, n.jsx)(h.default, {
                      className: m.description,
                      parser: f,
                      output: I,
                      state: { assets: i, applicationId: e },
                      children: t,
                    }),
                  ],
                }),
              }),
              o
                ? (0, n.jsx)(d.Button, {
                    className: m.toggleCollapseButton,
                    onClick: this.handleToggleCollapse,
                    color: d.Button.Colors.PRIMARY,
                    children: l
                      ? p.default.Messages
                          .APPLICATION_STORE_DESCRIPTION_READ_MORE
                      : p.default.Messages
                          .APPLICATION_STORE_DESCRIPTION_READ_LESS,
                  })
                : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { collapsed: !0, collapsable: !0 }),
            (this.handleToggleCollapse = () => {
              this.setState({ collapsed: !this.state.collapsed });
            }),
            (this.setContentContainerRef = e => {
              this._container = e;
            });
        }
      }
      var E = x;
    },
    590177: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          transformAssetURL: function () {
            return c;
          },
          default: function () {
            return g;
          },
        }),
        s("424973"),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        i = s("77078"),
        r = s("700468"),
        l = s("439437"),
        o = s("180612"),
        d = s("75576"),
        u = s("49111"),
        h = s("782340");
      function c(e) {
        return "".concat(e.split("?")[0], "?size=").concat(2048);
      }
      let p = e => {
        let { index: t, items: s, ...a } = e,
          i = s[t],
          r = 0,
          o = [];
        for (let e of s)
          if (e.type === u.CarouselMediaTypes.IMG) {
            let { width: t, height: s, src: n } = e;
            e === i && (r = o.length),
              o.push({ src: c(n), width: t, height: s });
          }
        return (0, n.jsx)(l.default, { ...a, items: o, startWith: r });
      };
      class m extends a.Component {
        render() {
          let { pageSize: e, ...t } = this.props,
            s = e === d.PageSizes.SMALL ? o.default : r.default;
          return (0, n.jsx)(s, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick,
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleCurrentItemClick = (e, t) => {
              e.type === u.CarouselMediaTypes.IMG &&
                !(0, i.hasAnyModalOpen)() &&
                (0, i.openModal)(e =>
                  (0, n.jsx)(i.ModalRoot, {
                    size: i.ModalSize.DYNAMIC,
                    "aria-label": h.default.Messages.IMAGE,
                    ...e,
                    children: (0, n.jsx)(p, {
                      ...e,
                      index: t,
                      items: this.props.items,
                    }),
                  })
                );
            });
        }
      }
      var g = m;
    },
    75576: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PAGE_WIDTH_THRESHOLD: function () {
            return n;
          },
          PageSizes: function () {
            return a;
          },
        });
      let n = 1e3,
        a = Object.freeze({ SMALL: "small", LARGE: "large" });
    },
    180612: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        }),
        s("222007"),
        s("70102");
      var n = s("37983"),
        a = s("884691"),
        i = s("414456"),
        r = s.n(i),
        l = s("77078"),
        o = s("700468"),
        d = s("933629"),
        u = s("749344"),
        h = s("560176"),
        c = s("633667"),
        p = s("952368"),
        m = s("888673"),
        g = s("75576"),
        C = s("49111"),
        f = s("782340"),
        I = s("568174");
      let x = e => {
          let { className: t, ...s } = e;
          return (0, n.jsx)(m.default, {
            ...s,
            className: r(I.sizedToParent, t),
            mediaPlayerClassName: I.sizedToParent,
            renderLinkComponent: d.renderMaskedLinkComponent,
          });
        },
        E = e => {
          let { containerClassName: t, className: s, ...a } = e;
          return (0, n.jsx)(p.default, { ...a, className: r(s, t) });
        },
        v = { width: 1280, height: 720 },
        N = { width: 640, height: 360 },
        L = e => {
          let t,
            s,
            a,
            {
              item: i,
              onPlay: r,
              volume: l,
              onVolumeChange: u,
              onMute: p,
              isMuted: m,
              autoPlay: f,
            } = e;
          if (i.type === C.CarouselMediaTypes.YOUTUBE_VIDEO)
            (t = { url: (0, C.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId), ...v }),
              (s = {
                url: ""
                  .concat((0, C.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?")
                  .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                ...N,
              }),
              (a = c.SupportedEmbedIFrame.YOUTUBE);
          else {
            let e = null != i.width ? i.width : 0,
              n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
              (s = { url: i.src, proxyURL: i.src, width: e, height: n });
          }
          return (0, n.jsx)("div", {
            className: I.embedContainer,
            children: (0, n.jsx)(h.EmbedVideo, {
              className: I.sizedToParent,
              iframeWrapperClassName: I.sizedToParent,
              href: null,
              thumbnail: t,
              video: s,
              provider: a,
              maxHeight: o.ItemSizes.SMALL.height,
              maxWidth: g.PageSizes.SMALL,
              onPlay: r,
              playable: !0,
              volume: l,
              onVolumeChange: u,
              autoMute: m,
              onMute: p,
              autoPlay: f,
              renderImageComponent: E,
              renderVideoComponent: x,
              renderLinkComponent: d.renderMaskedLinkComponent,
            }),
          });
        };
      class S extends a.PureComponent {
        componentDidMount() {
          let { items: e } = this.props;
          e.length > 0 &&
            e[0].type === C.CarouselMediaTypes.IMG &&
            this.setState({
              imageLoadingStartTime: new Map(
                this.state.imageLoadingStartTime
              ).set(e[0].src, Date.now()),
            });
        }
        handleCurrentItemClick(e, t) {
          let { onCurrentItemClick: s } = this.props;
          null != s && s(e, t), this.setState({ hasInteracted: !0 });
        }
        render() {
          let {
              items: e,
              autoplayInterval: t,
              className: s,
              paused: a,
              themedPagination: i,
            } = this.props,
            { hasInteracted: l } = this.state;
          return (0, n.jsx)(u.default, {
            items: e.slice(0, 12),
            delay: t,
            paused: a || l,
            renderItem: this.renderItem,
            className: r(I.smallCarousel, s),
            themedPagination: i,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              hasInteracted: !1,
              isVideoPlaying: !1,
              isMuted: !0,
              volume: 1,
              status: new Map(),
              imageLoadingStartTime: new Map(),
            }),
            (this.handlePlay = e => {
              this.setState({ isVideoPlaying: !0, hasInteracted: !e });
            }),
            (this.handleVolumeChange = e => {
              this.setState({ volume: e, hasInteracted: !0 });
            }),
            (this.handleMute = e => {
              this.setState({ isMuted: e, hasInteracted: !0 });
            }),
            (this.handleChangeItem = e => {
              this.setState({ isVideoPlaying: !1 }),
                e.type === C.CarouselMediaTypes.IMG &&
                  this.setState({
                    imageLoadingStartTime: new Map(
                      this.state.imageLoadingStartTime
                    ).set(e.src, Date.now()),
                  });
            }),
            (this.handleIntentionalChange = (e, t, s, n) => {
              this.setState({ hasInteracted: !0 });
              let { onIntentionalChange: a } = this.props;
              null != a && a(e, t, s, n);
            }),
            (this.handleOnErrorImg = e => {
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "errored"),
              });
            }),
            (this.handleOnLoadImg = e => {
              let { onImageLoad: t } = this.props;
              this.setState({
                status: new Map(this.state.status).set(e.target.src, "loaded"),
              });
              let s = this.state.imageLoadingStartTime.get(e.target.src),
                n = null != s ? Date.now() - s : void 0;
              null == t || t({ src: e.target.src, loadTimeMs: n });
            }),
            (this.renderItem = (e, t) => {
              let s;
              let { isMuted: a, volume: i } = this.state,
                { videoAutoPlay: o } = this.props;
              switch (e.type) {
                case C.CarouselMediaTypes.YOUTUBE_VIDEO:
                case C.CarouselMediaTypes.VIDEO:
                  s = (0, n.jsx)(L, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: a,
                    volume: i,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: o,
                  });
                  break;
                case C.CarouselMediaTypes.IMG:
                  if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, n.jsx)(l.Heading, {
                      variant: "heading-xl/semibold",
                      children: f.default.Messages.ERRORS_IMAGE_NOT_FOUND,
                    });
                    return (0, n.jsx)("div", {
                      className: I.errorContainer,
                      children:
                        void 0 !== this.props.errorComponent
                          ? this.props.errorComponent
                          : e,
                    });
                  }
                  {
                    var d;
                    let t =
                      null !== (d = e.alt) && void 0 !== d
                        ? d
                        : f.default.Messages.IMAGE;
                    s = (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(l.Spinner, {
                          className: r(I.spinner, {
                            [I.hidden]: void 0 !== this.state.status.get(e.src),
                          }),
                          type: l.Spinner.Type.SPINNING_CIRCLE,
                        }),
                        (0, n.jsx)("img", {
                          onError: this.handleOnErrorImg,
                          onLoad: this.handleOnLoadImg,
                          className: r(I.smallCarouselImage, {
                            [I.hidden]:
                              "loaded" !== this.state.status.get(e.src),
                          }),
                          src: e.src,
                          alt: t,
                        }),
                      ],
                    });
                  }
                  break;
                default:
                  throw Error("Unexpected MediaType");
              }
              return (0, n.jsx)(l.Clickable, {
                className: I.smallCarouselItem,
                onClick: () => this.handleCurrentItemClick(e, t),
                children: s,
              });
            });
        }
      }
      S.defaultProps = { paused: !1, videoAutoPlay: !0 };
      var A = S;
    },
    73579: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CAROUSEL_NEXT: function () {
            return o;
          },
          CAROUSEL_PREV: function () {
            return d;
          },
          MODAL_CAROUSEL_NEXT: function () {
            return u;
          },
          MODAL_CAROUSEL_PREV: function () {
            return h;
          },
          MODAL_CAROUSEL_CLOSE: function () {
            return c;
          },
        });
      var n = s("77078"),
        a = s("778588"),
        i = s("659500"),
        r = s("49111");
      let l = () => a.default.hasLayers() || (0, n.hasAnyModalOpen)(),
        o = {
          binds: ["right"],
          comboKeysBindGlobal: !0,
          action() {
            if (!l())
              return (
                i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_NEXT),
                !1
              );
          },
        },
        d = {
          binds: ["left"],
          comboKeysBindGlobal: !0,
          action() {
            if (!l())
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
        h = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.ComponentDispatch.dispatch(
              r.ComponentActions.MODAL_CAROUSEL_PREV
            ),
            !1
          ),
        },
        c = {
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
    957954: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MODAL_CAROUSEL_LAYOUT: function () {
            return i;
          },
        });
      var n = s("73579"),
        a = s("49111");
      let i = {
        [a.KeybindActions.MODAL_CAROUSEL_NEXT]: n.MODAL_CAROUSEL_NEXT,
        [a.KeybindActions.MODAL_CAROUSEL_PREV]: n.MODAL_CAROUSEL_PREV,
        [a.KeybindActions.CLOSE_MODAL]: n.MODAL_CAROUSEL_CLOSE,
      };
    },
    87465: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CarouselPrevious: function () {
            return c;
          },
          CarouselNext: function () {
            return p;
          },
          default: function () {
            return m;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        i = s("414456"),
        r = s.n(i),
        l = s("77078"),
        o = s("137215"),
        d = s("931435");
      let u = { CENTER: d.alignCenter, LEFT: d.alignLeft };
      class h extends a.PureComponent {
        componentDidUpdate(e) {
          let { selectedIndex: t } = this.props;
          e.selectedIndex !== t && this.handleSelectedIndexChange(t);
        }
        render() {
          let {
              renderItem: e,
              items: t,
              vertical: s,
              paginationContainerClass: i,
              align: o,
            } = this.props,
            u = s
              ? d.verticalPaginationItemContainer
              : d.horizontalPaginationItemContainer;
          return (0, n.jsx)(l.AdvancedScrollerAuto, {
            orientation: s ? "vertical" : "horizontal",
            className: r(u, i, o),
            ref: this.handleSetScrollerRef,
            children: t.map((t, s) =>
              a.cloneElement(e(t, s), {
                onClick: () => this.handlePageClick(s),
                key: s,
                ref: e => {
                  this._paginationItemRefs[s] = e;
                },
              })
            ),
          });
        }
        constructor(...e) {
          super(...e),
            (this._scrollerRef = null),
            (this._paginationItemRefs = []),
            (this.handleSetScrollerRef = e => {
              this._scrollerRef = e;
            }),
            (this.handleSelectedIndexChange = e => {
              let t = this._scrollerRef;
              if (null == t) return;
              let s = this._paginationItemRefs[e];
              null != s &&
                t.scrollIntoViewNode({
                  node: s,
                  animate: !0,
                  padding: this.props.scrollToPadding,
                });
            }),
            (this.handlePageClick = e => {
              let { onSetItem: t } = this.props;
              t(e);
            });
        }
      }
      (h.Align = u),
        (h.defaultProps = {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: u.CENTER,
        });
      class c extends a.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, n.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: r(d.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, n.jsx)(o.default, {
              className: d.arrow,
              direction: o.default.Directions.LEFT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.handlePrevClick = e => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t } = this.props;
              null == t || t(e);
            });
        }
      }
      class p extends a.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, n.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: r(d.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, n.jsx)(o.default, {
              className: d.arrow,
              direction: o.default.Directions.RIGHT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleNextClick = e => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t } = this.props;
              null == t || t(e);
            });
        }
      }
      var m = h;
    },
    963241: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          normalizeIndex: function () {
            return c;
          },
          default: function () {
            return m;
          },
        }),
        s("222007"),
        s("70102");
      var n = s("37983"),
        a = s("884691"),
        i = s("414456"),
        r = s.n(i),
        l = s("458960"),
        o = s("737960"),
        d = s("674569");
      let u = { tension: 7, friction: 5, overshootClamping: !0 },
        h = { CENTER: "center", RIGHT: "right" };
      function c(e, t) {
        return ((e % t) + t) % t;
      }
      class p extends a.Component {
        componentDidMount() {
          this.animatedIndex.setValue(this.props.currentIndex);
        }
        componentDidUpdate(e) {
          let {
              align: t,
              animate: s,
              currentIndex: n,
              items: a,
              width: i,
            } = this.props,
            r = c(n, a.length),
            o = c(e.currentIndex, a.length);
          (r !== o || a.length !== e.items.length) &&
            this.updateAnimatedIndex(r, o),
            i !== e.width
              ? this.animatedAlignmentOffset.setValue(
                  this.getAlignmentOffset(t)
                )
              : s &&
                (t !== e.align || r !== o) &&
                l.default
                  .spring(this.animatedAlignmentOffset, {
                    ...u,
                    toValue: this.getAlignmentOffset(t),
                  })
                  .start();
        }
        getAlignmentOffset(e) {
          let {
              width: t,
              itemSize: s,
              currentIndex: n,
              gutter: a,
              items: i,
            } = this.props,
            r = c(n, i.length),
            l = a * r * 2;
          return e === h.CENTER
            ? (t - s.width) / 2 + l
            : e === h.RIGHT
              ? t - s.width - a + l
              : a + l;
        }
        getCarouselTranslate() {
          let { itemSize: e, edgeItems: t } = this.props;
          return t * (e.width + e.margin);
        }
        animateToIndex(e, t) {
          let { animatedIndex: s } = this,
            { items: n, edgeItems: a } = this.props;
          a > 0 &&
            (0 === e && t === n.length - 1
              ? s.setValue(-1)
              : 0 === t &&
                e === n.length - 1 &&
                n.length > 2 &&
                s.setValue(n.length)),
            l.default.spring(s, { ...u, toValue: e }).start();
        }
        updateAnimatedIndex(e, t) {
          let { animatedIndex: s, animatedOpacity: n } = this,
            { animate: a } = this.props;
          a
            ? this.animateToIndex(e, t)
            : l.default
                .timing(n, { fromValue: 1, toValue: 0, duration: 100 })
                .start(() => {
                  s.setValue(e),
                    l.default
                      .timing(n, { fromValue: 0, toValue: 1, duration: 100 })
                      .start();
                });
        }
        renderSingleItem() {
          let {
            renderItem: e,
            items: t,
            itemSize: s,
            className: a,
          } = this.props;
          return (0, n.jsx)("div", {
            className: r(d.singleItemWrapper, d.viewport, a),
            children: (0, n.jsx)("div", {
              className: d.singleItem,
              style: { width: s.width, height: s.height },
              children: e(t[0], 0),
            }),
          });
        }
        renderCarouselItems() {
          let e;
          let {
              animatedIndex: t,
              animatedAlignmentOffset: s,
              animatedOpacity: a,
            } = this,
            {
              renderItem: i,
              items: r,
              itemSize: o,
              edgeItems: u,
              gutter: h,
            } = this.props,
            { margin: c, width: p } = o,
            m = this.getCarouselTranslate(),
            g = this.getItemStyle();
          e = u > 0 ? [...r.slice(-u), ...r, ...r.slice(0, u)] : r;
          let C = e.map((e, t) =>
            (0, n.jsx)(
              "div",
              {
                style: g,
                className: d.item,
                children: i(e, t - u, this.interpolateValueForItem(t - u)),
              },
              t
            )
          );
          return (0, n.jsx)(l.default.div, {
            className: d.carousel,
            style: {
              opacity: a,
              left: l.default.add(
                t.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-m, -c - p - m - h * (r.length - 1)],
                }),
                s
              ),
            },
            children: C,
          });
        }
        render() {
          let { items: e, className: t, hideOverflow: s } = this.props;
          if (e.length <= 0) throw Error("Carousel has no items");
          return 1 === e.length
            ? this.renderSingleItem()
            : (0, n.jsx)("div", {
                className: r({ [d.viewport]: s }, t),
                children: this.renderCarouselItems(),
              });
        }
        constructor(...e) {
          super(...e),
            (this.animatedIndex = new l.default.Value(this.props.currentIndex)),
            (this.animatedAlignmentOffset = new l.default.Value(
              this.getAlignmentOffset(this.props.align)
            )),
            (this.animatedOpacity = new l.default.Value(1)),
            (this.getItemStyle = () => {
              let {
                itemSize: { width: e, margin: t, height: s },
              } = this.props;
              return {
                flexBasis: e,
                marginRight: t,
                height: s,
                width: e,
                maxWidth: e,
              };
            }),
            (this.interpolateValueForItem = e =>
              this.animatedIndex.interpolate({
                inputRange: [e - 1, e, e + 1],
                outputRange: [0, 1, 0],
                extrapolate: "clamp",
              }));
        }
      }
      p.defaultProps = {
        animate: !0,
        edgeItems: 2,
        align: h.CENTER,
        gutter: 0,
        hideOverflow: !0,
      };
      var m = (0, o.default)(p);
    },
    749344: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        }),
        s("222007");
      var n = s("37983"),
        a = s("884691"),
        i = s("414456"),
        r = s.n(i),
        l = s("917351"),
        o = s.n(l),
        d = s("862337"),
        u = s("77078"),
        h = s("659500"),
        c = s("137215"),
        p = s("16594"),
        m = s("49111"),
        g = s("782340"),
        C = s("592994");
      let f = { JUMP: "jump", NEXT: "next", PREVIOUS: "previous" };
      class I extends a.PureComponent {
        componentDidMount() {
          h.ComponentDispatch.subscribe(
            m.ComponentActions.CAROUSEL_PREV,
            this.handlePrevious
          ),
            h.ComponentDispatch.subscribe(
              m.ComponentActions.CAROUSEL_NEXT,
              this.handleNext
            );
        }
        componentWillUnmount() {
          h.ComponentDispatch.unsubscribe(
            m.ComponentActions.CAROUSEL_PREV,
            this.handlePrevious
          ),
            h.ComponentDispatch.unsubscribe(
              m.ComponentActions.CAROUSEL_NEXT,
              this.handleNext
            );
        }
        render() {
          let {
              current: e,
              count: t,
              includeHitboxPadding: s,
              arrowClassName: a,
            } = this.props,
            i = r(C.arrowHitbox, a, { [C.arrowHitboxPadding]: s });
          return (0, n.jsxs)("div", {
            className: r(C.controls, this.props.className),
            children: [
              (0, n.jsx)(u.Button, {
                look: u.Button.Looks.BLANK,
                className: i,
                onClick: this.handlePrevious,
                "aria-label": g.default.Messages.PAGINATION_PREVIOUS,
                children: (0, n.jsx)(c.default, {
                  className: C.arrow,
                  direction: c.default.Directions.LEFT,
                }),
              }),
              (0, n.jsx)("div", {
                className: C.dots,
                children: o.times(t, t =>
                  (0, n.jsx)(
                    u.Button,
                    {
                      look: u.Button.Looks.BLANK,
                      size: u.Button.Sizes.NONE,
                      onClick: () => this.handleDotClick(t),
                      className: t === e ? C.dotSelected : C.dotNormal,
                      "aria-label":
                        g.default.Messages.PAGINATION_SLIDE_LABEL.format({
                          pageNumber: t + 1,
                        }),
                    },
                    "dot-".concat(t)
                  )
                ),
              }),
              (0, n.jsx)(u.Button, {
                look: u.Button.Looks.BLANK,
                className: i,
                onClick: this.handleNext,
                "aria-label": g.default.Messages.PAGINATION_NEXT,
                children: (0, n.jsx)(c.default, {
                  className: C.arrow,
                  direction: c.default.Directions.RIGHT,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleDotClick = e => {
              let {
                onSetItem: t,
                onIntentionalChange: s,
                current: n,
              } = this.props;
              null == s || s(n, e, f.JUMP), t(e);
            }),
            (this.handleNext = () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: s,
                } = this.props,
                n = s(1);
              null == e || e(t, n, f.NEXT);
            }),
            (this.handlePrevious = () => {
              let {
                  onIntentionalChange: e,
                  current: t,
                  onChangePage: s,
                } = this.props,
                n = s(-1);
              null == e || e(t, n, f.PREVIOUS);
            });
        }
      }
      I.defaultProps = { includeHitboxPadding: !0 };
      class x extends a.PureComponent {
        componentDidMount() {
          !this.props.paused && !this.state.hovered && this.startTimer();
        }
        componentWillUnmount() {
          this.stopTimer();
        }
        componentDidUpdate(e, t) {
          var s, n, a, i;
          let r = ((s = this.props), (n = this.state), !s.paused && !n.hovered);
          let l = ((a = e), (i = t), !a.paused && !i.hovered);
          r && !l ? this.startTimer() : !r && l && this.stopTimer();
          let { items: o } = this.props,
            { visibleIndex: d } = this.state;
          null == o[d] && this.changeItem(o, 1);
        }
        startTimer() {
          null != this.props.delay &&
            this.timer.start(this.props.delay, this.nextItem);
        }
        stopTimer() {
          null != this.props.delay && this.timer.stop();
        }
        changeItem(e, t) {
          let s = this.state.visibleIndex + t;
          s < 0 ? (s = e.length - 1) : s > e.length - 1 && (s = 0);
          let { onChangeItem: n } = this.props;
          null == n || n(e[s], this.state.visibleIndex, s);
          let a = t > 0 ? p.SlideDirection.LEFT : p.SlideDirection.RIGHT;
          return this.setState({ visibleIndex: s, direction: a }), s;
        }
        render() {
          let {
              items: e,
              renderItem: t,
              className: s,
              paginationClassName: a,
              paginationArrowClassName: i,
              themedPagination: l,
              includeHitboxPadding: o,
              style: d,
              aspectRatio: u,
            } = this.props,
            { visibleIndex: h } = this.state;
          return (0, n.jsxs)("div", {
            className: r(C.root, s),
            style: d,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            children: [
              (0, n.jsx)("div", {
                style: { aspectRatio: u },
                children: (0, n.jsx)(p.default, {
                  step: h,
                  direction: this.getCurrentDirection(),
                  className: C.carousel,
                  children: t(e[h], h),
                }),
              }),
              e.length > 1 &&
                (0, n.jsx)(I, {
                  className: r(a, l ? C.themedPagination : C.pagination),
                  arrowClassName: i,
                  includeHitboxPadding: o,
                  current: h,
                  count: e.length,
                  onChangePage: t => this.changeItem(e, t),
                  onSetItem: this.handleSetItem,
                  onIntentionalChange: this.handleIntentionalChange,
                }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.timer = new d.Interval()),
            (this.getCurrentDirection = () => this.state.direction),
            (this.nextItem = () => {
              let { items: e } = this.props;
              this.changeItem(e, 1);
            }),
            (this.previousItem = () => {
              let { items: e } = this.props;
              this.changeItem(e, -1);
            }),
            (this.handleSetItem = e => {
              let { visibleIndex: t } = this.state,
                { items: s } = this.props;
              this.changeItem(s, e - t);
            }),
            (this.handleMouseEnter = () => {
              this.setState({ hovered: !0 });
            }),
            (this.handleMouseLeave = () => {
              this.setState({ hovered: !1 });
            }),
            (this.handleIntentionalChange = (e, t, s) => {
              let { items: n, onIntentionalChange: a } = this.props;
              return null == a ? void 0 : a(n[t], e, t, s);
            }),
            (this.state = {
              visibleIndex:
                !0 === e.randomize ? o.random(0, e.items.length - 1) : 0,
              direction: p.SlideDirection.LEFT,
              hovered: !1,
            });
        }
      }
      x.defaultProps = { aspectRatio: 16 / 9 };
      var E = x;
    },
    895530: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("414456"),
        i = s.n(a),
        r = s("612654");
      function l(e) {
        let { children: t, tag: s, className: a } = e;
        return (
          (s = null != s ? s : "h3"),
          (0, n.jsx)(s, { className: i(r.title, a), children: t })
        );
      }
    },
    9074: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return N;
          },
        });
      var n,
        a = s("37983"),
        i = s("884691"),
        r = s("414456"),
        l = s.n(r),
        o = s("404828"),
        d = s.n(o),
        u = s("269936"),
        h = s("647374"),
        c = s("47677"),
        p = s("895530"),
        m = s("915621"),
        g = s("356410");
      let C = new RegExp(
        "https?://".concat(
          null !== (n = window.GLOBAL_ENV.CDN_HOST) && void 0 !== n ? n : ""
        )
      );
      function f(e) {
        return "string" == typeof e.content ? e.content : E(e.content);
      }
      let I = {
          ...d.defaultRules,
          heading: {
            ...d.defaultRules.heading,
            react(e, t, s) {
              let n = "h".concat(e.level);
              return (0, a.jsx)(
                p.default,
                { tag: n, children: t(e.content, s) },
                s.key
              );
            },
          },
          paragraph: {
            ...d.defaultRules.paragraph,
            react: (e, t, s) =>
              (0, a.jsx)(
                "div",
                { className: m.paragraph, children: t(e.content, s) },
                s.key
              ),
          },
          strong: { ...d.defaultRules.strong, order: 6 },
          em: { ...d.defaultRules.em, order: 6 },
          u: { ...d.defaultRules.u, order: 5 },
          del: { ...d.defaultRules.del, order: 6 },
          link: {
            ...h.default,
            ...(0, c.default)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...d.defaultRules.blockQuote,
            react: (e, t, s) =>
              (0, a.jsx)(
                "blockquote",
                { className: m.blockquote, children: f(e) },
                s.key
              ),
          },
          image: {
            ...d.defaultRules.image,
            order: 6,
            match(e, t, s) {
              let n = d.defaultRules.image;
              if (null == n || null == n.match) return !1;
              let a = n.match(e, t, s);
              if (null != a && Array.isArray(a) && a.length >= 3) {
                let e = a[2];
                if ("string" == typeof e) return null != e.match(C) ? a : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...d.defaultRules.inlineCode,
            order: 6,
            react: (e, t, s) =>
              (0, a.jsx)(
                "code",
                { className: m.codeInline, children: f(e) },
                s.key
              ),
          },
          codeBlock: {
            ...d.defaultRules.codeBlock,
            react(e, t, n) {
              let i = () =>
                (0, a.jsx)(
                  "pre",
                  {
                    children: (0, a.jsx)("code", {
                      className: l(g.scrollbarGhostHairline, "hljs"),
                      children: f(e),
                    }),
                  },
                  n.key
                );
              return (0, a.jsx)(
                u.LazyLibrary,
                {
                  createPromise: () => s.el("86256").then(s.bind(s, "86256")),
                  webpackId: "86256",
                  renderFallback: i,
                  render: t => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return i();
                    {
                      let s = t.highlight(e.lang, e.content, !0);
                      return null == s
                        ? i()
                        : (0, a.jsx)(
                            "pre",
                            {
                              children: (0, a.jsx)("code", {
                                className: l(
                                  g.scrollbarGhostHairline,
                                  "hljs",
                                  s.language
                                ),
                                dangerouslySetInnerHTML: { __html: s.value },
                              }),
                            },
                            n.key
                          );
                    }
                  },
                },
                n.key
              );
            },
          },
        },
        x = d.parserFor(I),
        E = d.reactFor(d.ruleOutput(I, "react"));
      class v extends i.PureComponent {
        render() {
          let {
              className: e,
              children: t,
              state: s,
              parser: n,
              output: i,
            } = this.props,
            r = n("".concat(t, "\n\n"), { inline: !1, ...s }),
            o = i(r);
          return (0, a.jsx)("div", {
            className: l(m.markdown, e),
            children: o,
          });
        }
      }
      (v.rules = I), (v.defaultProps = { parser: x, output: E });
      var N = v;
    },
    16594: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SlideDirection: function () {
            return a;
          },
          default: function () {
            return m;
          },
        });
      var n,
        a,
        i = s("37983"),
        r = s("884691"),
        l = s("414456"),
        o = s.n(l),
        d = s("458960"),
        u = s("266491"),
        h = s("2331");
      ((n = a || (a = {}))[(n.RIGHT = -1)] = "RIGHT"),
        (n[(n.LEFT = 1)] = "LEFT");
      let c = { friction: 7, tension: 40, overshootClamping: !0 };
      class p extends r.PureComponent {
        componentWillEnter(e) {
          this._animated.setValue(-this.props.direction),
            d.default.spring(this._animated, { toValue: 0, ...c }).start(e);
        }
        componentDidAppear() {
          this._animated.setValue(0);
        }
        componentWillLeave(e) {
          d.default
            .spring(this._animated, { toValue: this.props.direction, ...c })
            .start(e);
        }
        getStyle() {
          return d.default.accelerate({
            transform: [
              {
                translateX: this._animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "-100%"],
                }),
              },
            ],
          });
        }
        render() {
          return (0, i.jsx)(d.default.div, {
            style: this.getStyle(),
            className: h.item,
            children: this.props.children,
          });
        }
        constructor(e) {
          super(e), (this._animated = new d.default.Value(-1 * e.direction));
        }
      }
      var m = e => {
        let { children: t, step: s, direction: n, className: a } = e;
        return (0, i.jsx)(u.default, {
          component: "div",
          className: o(h.animator, a),
          children: (0, i.jsx)(p, { direction: n, children: t }, s),
        });
      };
    },
  },
]);
//# sourceMappingURL=90b41212df54bb41d034.js.map

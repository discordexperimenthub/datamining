(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70917"],
  {
    291802: function (e, t, n) {
      var a = {
        "./2017-11-16.mp4": "720564",
        "./2019-12-17.mp4": "27510",
        "./channel-following.png": "595687",
        "./discovery.jpg": "26022",
        "./discriminator.mp4": "294795",
        "./g250k-cl.mp4": "968428",
        "./header.mp4": "243705",
        "./hypesquad-hack-week/header.png": "585113",
        "./hypesquad-hack-week/paladins-loot.png": "486667",
        "./ko-new-year.jpg": "811755",
        "./league-rp-cl.mp4": "533299",
        "./polish-week.png": "877016",
        "./special-template/desktop-cta.png": "772882",
        "./special-template/update-badge.svg": "659148",
        "./stickers-launch/2020_PMM_STICKERS_Mrkt_BlogHdr_2500x1000.png":
          "622690",
        "./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Left_180x220.png":
          "303679",
        "./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Right_180x220.png":
          "203661",
        "./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_Changelog_658X220.png":
          "927032",
        "./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_FooterCTA_238x220.png":
          "291544",
        "./stickers-launch/2020_PMM_STICKERS_Mrkt_MobileHero_375x190.png":
          "245490",
        "./stickers-launch/2020_PMM_STICKERS_Mrkt_Mobile_FooterCTA_343x78.png":
          "322717",
        "./store.jpg": "938368",
      };
      function l(e) {
        return n(s(e));
      }
      function s(e) {
        if (!n.o(a, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (l.id = '"291802"'),
        (l.keys = function () {
          return Object.keys(a);
        }),
        (l.resolve = s),
        (e.exports = l);
    },
    720564: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ca5a948d164f6ce225e5.mp4";
    },
    27510: function (e, t, n) {
      "use strict";
      e.exports = n.p + "918d75cfaf2f93685736.mp4";
    },
    595687: function (e, t, n) {
      "use strict";
      e.exports = n.p + "04166adfcb72e52bc295.png";
    },
    26022: function (e, t, n) {
      "use strict";
      e.exports = n.p + "cbfdbaf12547f2bc088d.jpg";
    },
    294795: function (e, t, n) {
      "use strict";
      e.exports = n.p + "21b75d6e855402010caa.mp4";
    },
    968428: function (e, t, n) {
      "use strict";
      e.exports = n.p + "6e26350a0e5a42564d84.mp4";
    },
    243705: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0c76c0ebcd143998b078.mp4";
    },
    585113: function (e, t, n) {
      "use strict";
      e.exports = n.p + "768e2db24b4be4cb5ada.png";
    },
    486667: function (e, t, n) {
      "use strict";
      e.exports = n.p + "eb675889271dd2dbc33b.png";
    },
    811755: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b52d70718517aa0a80c5.jpg";
    },
    533299: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4f95bd8264236dafad87.mp4";
    },
    877016: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e5283f308298742b4d40.png";
    },
    772882: function (e, t, n) {
      "use strict";
      e.exports = n.p + "79d88077390653508caa.png";
    },
    659148: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5c1996c0fa63a89f5182.svg";
    },
    622690: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b7074384432f11736b79.png";
    },
    303679: function (e, t, n) {
      "use strict";
      e.exports = n.p + "6485daa6cdedfe5d8396.png";
    },
    203661: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3c1c9f559e95cbdbb7c9.png";
    },
    927032: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51c7fb00c7456a3c9c8b.png";
    },
    291544: function (e, t, n) {
      "use strict";
      e.exports = n.p + "92570c182c371886ade1.png";
    },
    245490: function (e, t, n) {
      "use strict";
      e.exports = n.p + "96a5f689acd225738eca.png";
    },
    322717: function (e, t, n) {
      "use strict";
      e.exports = n.p + "14f41fc98f7994dad265.png";
    },
    938368: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3a2f3db8ffc94f41ad04.jpg";
    },
    170935: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("77078"),
        r = n("776156"),
        o = n("114535"),
        i = n("599110"),
        c = n("562897"),
        u = n("49111"),
        d = n("234222"),
        h = n("782340"),
        p = n("898545");
      class g extends l.PureComponent {
        componentDidMount() {
          (this.mountedAt = Date.now()),
            (this.maxScrolledPercentage = 0),
            this.track(u.AnalyticEvents.CHANGE_LOG_OPENED, {}, !0);
        }
        componentWillUnmount() {
          this.track(u.AnalyticEvents.CHANGE_LOG_CLOSED);
        }
        render() {
          return (0, a.jsx)(c.default, {
            ...this.props,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track,
          });
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this.maxScrolledPercentage = 0),
            (this.mountedAt = 0),
            (this.close = () => {
              (0, s.closeModal)(d.CHANGELOG_MODAL_KEY);
            }),
            (this.handleScroll = e => {
              let {
                offsetHeight: t,
                scrollHeight: n,
                scrollTop: a,
              } = e.getScrollerState();
              this.maxScrolledPercentage = Math.min(
                Math.max(this.maxScrolledPercentage, a / (n - t)),
                1
              );
            }),
            (this.track = function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                { changeLog: l } = t.props,
                { date: s, revision: r } = l,
                o = { change_log_id: "".concat(s, ":").concat(r), ...n };
              !a &&
                (o = {
                  seconds_open: Math.round((Date.now() - t.mountedAt) / 1e3),
                  max_scrolled_percentage:
                    100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                  ...o,
                }),
                i.default.track(e, o);
            });
        }
      }
      function f(e) {
        let {
          changelog: t,
          loaded: n,
          clientTooOld: i,
        } = (0, o.useCurrentChangelog)();
        if (
          (l.useEffect(() => {
            if (n && null != t)
              return () => r.default.markChangelogAsSeen(t.id, t.date);
          }, [n, t]),
          i)
        )
          return (0, a.jsx)(s.ModalRoot, {
            transitionState: e.transitionState,
            children: (0, a.jsx)("div", {
              className: p.empty,
              children: (0, a.jsx)(s.Heading, {
                variant: "heading-lg/medium",
                children: h.default.Messages.CHANGE_LOG_CLIENT_OLD,
              }),
            }),
          });
        if (null == t)
          return n
            ? (0, a.jsx)(s.ModalRoot, {
                transitionState: e.transitionState,
                children: (0, a.jsx)("div", {
                  className: p.empty,
                  children: (0, a.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: h.default.Messages.CHANGE_LOG_FAILED_TO_LOAD,
                  }),
                }),
              })
            : (0, a.jsx)(s.ModalRoot, {
                transitionState: e.transitionState,
                children: (0, a.jsx)("div", {
                  className: p.empty,
                  children: (0, a.jsx)(s.Spinner, {
                    type: s.Spinner.Type.WANDERING_CUBES,
                  }),
                }),
              });
        return (0, a.jsx)(s.ModalRoot, {
          transitionState: e.transitionState,
          children: (0, a.jsx)(g, { changeLog: t }),
        });
      }
    },
    562897: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        r = n.n(s),
        o = n("866227"),
        i = n.n(o),
        c = n("77078"),
        u = n("15649"),
        d = n("367376"),
        h = n("933629"),
        p = n("560176"),
        g = n("633667"),
        f = n("145131"),
        C = n("762740"),
        m = n("369952"),
        x = n("15435"),
        _ = n("58608"),
        v = n("142367"),
        L = n("49111"),
        k = n("782340"),
        E = n("76050"),
        R = n("79571");
      let S = d.default.reactParserFor(v.default.getDefaultRules(E)),
        N = {};
      class A extends l.PureComponent {
        track(e, t, n) {
          this.props.track(e, t, n);
        }
        renderFooter() {
          return (0, a.jsxs)("div", {
            className: E.footer,
            children: [
              (0, a.jsx)(c.Anchor, {
                "aria-label": k.default.Messages.TWITTER,
                className: E.socialLink,
                href: (0, u.default)(L.LocalizedLinks.TWITTER),
                target: "blank",
                children: (0, a.jsx)(x.default, {}),
              }),
              (0, a.jsx)(c.Anchor, {
                "aria-label": k.default.Messages.FACEBOOK,
                className: E.socialLink,
                href: L.SOCIAL_LINKS.FACEBOOK_URL,
                target: "blank",
                children: (0, a.jsx)(C.default, {}),
              }),
              (0, a.jsx)(c.Anchor, {
                "aria-label": k.default.Messages.INSTAGRAM,
                className: E.socialLink,
                href: L.SOCIAL_LINKS.INSTAGRAM_URL,
                target: "blank",
                children: (0, a.jsx)(m.default, {}),
              }),
              (0, a.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: k.default.Messages.FOLLOW_US_FOR_MORE_UPDATES,
              }),
            ],
          });
        }
        renderVideo() {
          let { changeLog: e } = this.props,
            t = e.youtube_video_id,
            l = e.video,
            s = e.image;
          if (null != t && "" !== t)
            return (0, a.jsx)(p.EmbedVideo, {
              className: r(E.video),
              allowFullScreen: !1,
              href: "https://youtu.be/".concat(t),
              thumbnail: {
                url: "https://i.ytimg.com/vi/".concat(t, "/maxresdefault.jpg"),
                width: 451,
                height: 254,
              },
              video: {
                url: "https://www.youtube.com/embed/".concat(
                  t,
                  "?vq=large&rel=0&controls=0&showinfo=0"
                ),
                width: 451,
                height: 254,
              },
              provider: g.SupportedEmbedIFrame.YOUTUBE,
              maxWidth: 451,
              maxHeight: 254,
              renderVideoComponent: h.renderVideoComponent,
              renderImageComponent: h.renderImageComponent,
              renderLinkComponent: h.renderMaskedLinkComponent,
              onPlay: () => {
                this.track(
                  L.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED,
                  {},
                  !0
                );
              },
            });
          if (null != l && "" !== l) {
            let e = l.startsWith("https://")
              ? l
              : n("291802")(
                  "../../images/change-log/"
                    .concat(l)
                    .replace("../../images/change-log/", "./")
                );
            return (0, a.jsx)(_.default, {
              src: e,
              poster: s,
              width: 451,
              height: 254,
              loop: !0,
              muted: !0,
              autoPlay: !0,
              className: E.video,
              onPlay: () => {
                this.track(
                  L.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED,
                  {},
                  !0
                );
              },
            });
          }
          if (null == s || "" === s) return null;
          else {
            let e = s.startsWith("https://")
              ? s
              : n("291802")(
                  "../../images/change-log/"
                    .concat(s)
                    .replace("../../images/change-log/", "./")
                );
            return (0, a.jsx)("img", {
              className: E.image,
              alt: "",
              src: e,
              width: 451,
              height: 254,
            });
          }
        }
        render() {
          let { changeLog: e } = this.props;
          return (0, a.jsxs)(c.ModalRoot, {
            transitionState: c.ModalTransitionState.ENTERED,
            className: R.modal,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                align: f.default.Justify.BETWEEN,
                separator: !1,
                children: [
                  this.renderHeader(),
                  (0, a.jsx)(f.default.Child, {
                    grow: 0,
                    children: (0, a.jsx)(c.ModalCloseButton, {
                      onClick: this.props.onClose,
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(c.ModalContent, {
                className: r(R.content, E.container, {}),
                scrollerRef: this.scrollerRef,
                onScroll: this.handleScroll,
                children: (0, a.jsxs)("div", {
                  tabIndex: 0,
                  role: "region",
                  "aria-label": k.default.Messages.CHANGELOG_CONTENT_LABEL,
                  children: [
                    this.renderVideo(),
                    S(e.body, !1, {
                      changeLog: this,
                      interpolations: N,
                      onLinkClick: this.trackLinkClick,
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(c.ModalFooter, {
                direction: f.default.Direction.HORIZONTAL,
                children: this.renderFooter(),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.scrollerRef = l.createRef()),
            (this.handleScroll = () => {
              let { current: e } = this.scrollerRef;
              if (null != e) {
                var t, n;
                null === (t = (n = this.props).onScroll) ||
                  void 0 === t ||
                  t.call(n, e);
              }
            }),
            (this.trackLinkClick = e => {
              this.props.track(
                L.AnalyticEvents.CHANGE_LOG_CTA_CLICKED,
                { cta_type: "inline_link", target: e },
                !1
              );
            }),
            (this.renderHeader = () => {
              let { changeLog: e } = this.props;
              return (0, a.jsxs)(f.default.Child, {
                grow: 1,
                shrink: 1,
                children: [
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: k.default.Messages.WHATS_NEW,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    className: E.date,
                    children: k.default.Messages.WHATS_NEW_DATE.format({
                      date:
                        null != e.date && "" !== e.date
                          ? i(e.date).toDate()
                          : new Date(),
                    }),
                  }),
                ],
              });
            });
        }
      }
      var M = A;
    },
    491589: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("281069");
      n.es(a, t);
    },
    887560: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("125174");
      n.es(a, t);
    },
    409186: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("90769");
      n.es(a, t);
    },
    114535: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCurrentChangelog: function () {
            return u;
          },
        });
      var a = n("884691"),
        l = n("65597"),
        s = n("776156"),
        r = n("915639"),
        o = n("34966"),
        i = n("234222");
      function c(e, t) {
        let {
          changelog: n,
          loadState: r,
          defaultChangelog: c,
          defaultLoadState: u,
        } = (0, l.useStateFromStoresObject)(
          [o.default],
          () => {
            let n = null != e ? o.default.getChangelog(e, t) : null,
              a = null != e ? o.default.getChangelog(e, "en-US") : null,
              l = null != e && o.default.getChangelogLoadStatus(e, "en-US"),
              s = null != e && o.default.getChangelogLoadStatus(e, t);
            return {
              changelog: n,
              loadState: s,
              defaultChangelog: a,
              defaultLoadState: l,
            };
          },
          [e, t]
        );
        return (a.useEffect(() => {
          null != e &&
            null == n &&
            r === i.ChangelogLoadState.NOT_LOADED &&
            s.default.fetchChangelog(e, t);
        }, [e, n, r, t]),
        null == e)
          ? { id: e, changelog: null, loaded: !1 }
          : null == n && r === i.ChangelogLoadState.LOADED_FAILURE
            ? {
                id: e,
                changelog: c,
                loaded: u !== i.ChangelogLoadState.NOT_LOADED,
              }
            : {
                id: e,
                changelog: n,
                loaded: r !== i.ChangelogLoadState.NOT_LOADED,
              };
      }
      function u() {
        let e = (0, l.useStateFromStores)([r.default], () => r.default.locale),
          t = (0, l.useStateFromStores)([o.default], () =>
            o.default.latestChangelogId()
          ),
          n = (0, l.useStateFromStores)([o.default], () =>
            o.default.getConfig()
          ),
          a = null != n && 0 === Object.keys(n).length,
          s = null != n && Object.keys(n).length > 0 && null == t,
          i = (0, l.useStateFromStores)([o.default], () =>
            o.default.overrideId()
          ),
          { changelog: u, loaded: d } = c(t, e),
          { changelog: h, loaded: p } = c(i, e);
        return null == i || (null == h && p)
          ? { id: t, changelog: u, loaded: !!a || d, clientTooOld: s }
          : { id: i, changelog: h, loaded: p, clientTooOld: !1 };
      }
    },
    762740: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("491589"),
        r = n("75196"),
        o = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: l = "currentColor",
              className: s,
              foreground: o,
              ...i
            } = e;
            return (0, a.jsx)("svg", {
              className: s,
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              ...(0, r.default)(i),
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("path", {
                    className: o,
                    fill: l,
                    d: "M0,1.99406028 C0,0.892771196 0.894513756,0 1.99406028,0 L14.0059397,0 C15.1072288,0 16,0.894513756 16,1.99406028 L16,14.0059397 C16,15.1072288 15.1054862,16 14.0059397,16 L1.99406028,16 C0.892771196,16 0,15.1054862 0,14.0059397 L0,1.99406028 Z M8.23182341,16 L10.3991764,16 L10.3991764,9.93141161 L12.5663127,9.93141161 L13,7.76405862 L10.3991764,7.76405862 L10.3246195,6.3468265 C10.3246195,5.66107601 10.5049432,5.17342158 11.4698488,5.17342158 L12.974642,5.17385505 L12.974642,3.12202197 C12.7618079,3.09319618 12.3142495,3 11.4644304,3 C9.69001851,3 8.18500859,4.20353112 8.18500859,6.23043964 L8.23182341,7.76405862 L6.06425368,7.76405862 L6.06425368,9.93141161 L8.23182341,9.93141161 L8.23182341,16 Z",
                  }),
                  (0, a.jsx)("rect", { width: "16", height: "16" }),
                ],
              }),
            });
          },
          s.FacebookIcon,
          void 0,
          { size: 16 }
        );
    },
    369952: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("887560"),
        r = n("75196"),
        o = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: l = "currentColor",
              className: s,
              foreground: o,
              ...i
            } = e;
            return (0, a.jsx)("svg", {
              className: s,
              xmlns: "http://www.w3.org/2000/svg",
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              ...(0, r.default)(i),
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("path", {
                    className: o,
                    fill: l,
                    d: "M4.70012698,0.0531746 C3.84888888,0.092 3.2675238,0.22720635 2.7588254,0.42492063 C2.23292063,0.62926983 1.78692063,0.90273016 1.3422857,1.34733333 C0.89768254,1.79196825 0.62422222,2.23796825 0.41987302,2.76387303 C0.22215872,3.27257143 0.08695238,3.85393651 0.04812698,4.7051746 C0.00920635,5.55819048 0,5.83053968 0,8.00253968 C0,10.1745079 0.00920635,10.4468571 0.04812698,11.299873 C0.08695238,12.1511111 0.22215873,12.7324762 0.41987302,13.2411746 C0.62422222,13.7670794 0.89768254,14.2130794 1.34228572,14.6577143 C1.78692062,15.1023175 2.23292062,15.3757778 2.7588254,15.5801587 C3.2675238,15.7778413 3.8488889,15.9130476 4.70012698,15.951873 C5.55314286,15.9907937 5.82549206,16 7.99749206,16 C10.1694603,16 10.4418095,15.9907937 11.2948254,15.951873 C12.1460635,15.9130476 12.7274286,15.7778413 13.236127,15.5801587 C13.7620317,15.3757778 14.2080317,15.1023175 14.6526667,14.6577143 C15.0972698,14.2130794 15.3707302,13.7670794 15.5751111,13.2411746 C15.7727937,12.7324762 15.908,12.1511111 15.9468254,11.299873 C15.985746,10.4468571 15.9949524,10.1745079 15.9949524,8.00253968 C15.9949524,5.83053968 15.985746,5.55819048 15.9468254,4.7051746 C15.908,3.8539365 15.7727937,3.27257143 15.5751111,2.76387302 C15.3707302,2.23796825 15.0972698,1.79196825 14.6526667,1.34733332 C14.2080317,0.90273016 13.7620317,0.62926984 13.236127,0.42492064 C12.7274286,0.22720634 12.1460635,0.092 11.2948254,0.0531746 C10.4418095,0.01425397 10.1694603,0.00504762 7.99749206,0.00504762 C5.82549206,0.00504762 5.55314286,0.01425397 4.70012698,0.0531746 L4.70012698,0.0531746 Z M8.00001453,2.00504762 C9.95416635,2.00504762 10.185649,2.01251386 10.9573741,2.04772432 C11.6709381,2.08026206 12.0584565,2.19948958 12.3163471,2.29971739 C12.6579641,2.43248289 12.9017646,2.59107525 13.157854,2.84719363 C13.4139723,3.10328295 13.5725647,3.34708347 13.7053302,3.68870053 C13.805558,3.94659105 13.9247856,4.33410953 13.9573233,5.04767346 C13.9925338,5.8193986 14,6.05088127 14,8.00506213 C14,9.95921396 13.9925338,10.1906966 13.9573233,10.9624217 C13.9247856,11.6759857 13.805558,12.0635042 13.7053302,12.3213947 C13.5725647,12.6630117 13.4139723,12.9068123 13.157854,13.1629016 C12.9017646,13.41902 12.6579641,13.5776123 12.3163471,13.7103779 C12.0584565,13.8106057 11.6709381,13.9298332 10.9573741,13.9623709 C10.1857652,13.9975814 9.9543116,14.0050476 8.00001453,14.0050476 C6.04568839,14.0050476 5.81426383,13.9975814 5.04262587,13.9623709 C4.32906195,13.9298332 3.94154347,13.8106057 3.68365294,13.7103779 C3.34203588,13.5776123 3.09823536,13.41902 2.84214604,13.1629016 C2.58605671,12.9068123 2.42743531,12.6630117 2.29466977,12.3213947 C2.19444197,12.0635042 2.07521444,11.6759857 2.04267671,10.9624217 C2.00746628,10.1906966 2,9.95921395 2,8.00506212 C2,6.05088125 2.00746625,5.81939858 2.0426767,5.04767347 C2.07521444,4.33410953 2.19444196,3.94659104 2.29466977,3.68870052 C2.42743531,3.34708346 2.58602767,3.10328294 2.84214604,2.84719362 C3.09823536,2.59107524 3.34203588,2.43248288 3.68365294,2.29971735 C3.94154346,2.19948953 4.32906194,2.08026201 5.04262587,2.04772428 C5.81435097,2.01251381 6.04583365,2.00504758 8.00001453,2.00504758 L8.00001453,2.00504762 Z",
                  }),
                  (0, a.jsx)("path", {
                    className: o,
                    fill: l,
                    d: "M8.0000119,10 C6.89542535,10 6,9.10457466 6,8.0000119 C6,6.89542535 6.89542534,6 8.0000119,6 C9.10457467,6 10,6.89542534 10,8.0000119 C10,9.10457467 9.10457466,10 8.0000119,10 L8.0000119,10 Z M8.00001546,4 C5.7908468,4 4,5.7908468 4,8.00001546 C4,10.2091532 5.7908468,12 8.00001546,12 C10.2091532,12 12,10.2091532 12,8.00001546 C12,5.7908468 10.2091532,4 8.00001546,4 L8.00001546,4 Z M13,4.00001654 C13,4.55230644 12.5522734,5 11.9999835,5 C11.4477266,5 11,4.55230645 11,4.00001654 C11,3.44772664 11.4477266,3 11.9999835,3 C12.5522734,3 13,3.44772663 13,4.00001654 L13,4.00001654 Z",
                  }),
                  (0, a.jsx)("rect", { width: "16", height: "16" }),
                ],
              }),
            });
          },
          s.InstagramIcon,
          void 0,
          { size: 16 }
        );
    },
    15435: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        s = n("409186"),
        r = n("75196"),
        o = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 20,
              height: n = 16,
              color: l = "currentColor",
              className: s,
              foreground: o,
              ...i
            } = e;
            return (0, a.jsx)("svg", {
              className: s,
              width: t,
              height: n,
              viewBox: "0 0 20 16",
              ...(0, r.default)(i),
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("path", {
                    className: o,
                    fill: l,
                    d: "M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615 6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923 2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846 C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 C4.68125,16 2.6625,15.3846154 1,14.1538462 Z",
                  }),
                  (0, a.jsx)("rect", { width: "20", height: "16" }),
                ],
              }),
            });
          },
          s.XNeutralIcon,
          void 0,
          { size: 16 }
        );
    },
    142367: function (e, t, n) {
      "use strict";
      let a;
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("781738");
      var l = n("404828"),
        s = n.n(l),
        r = n("290689");
      let o = s.defaultRules.lheading,
        i = s.defaultRules.heading,
        c = s.defaultRules.link,
        u = s.defaultRules.image,
        d = s.defaultRules.list,
        h = s.defaultRules.blockQuote,
        p = s.defaultRules.paragraph,
        g = /\{(.+?)}/,
        f = /^\$(\w+?)\$/;
      a = n("159661");
      let C = e => {
          let { transformUpperCase: t = !1 } = e;
          return (e, n, a) => {
            let l = g.exec(e[1]),
              r = e[1].replace(g, "");
            return (
              t && (r = r.toUpperCase()),
              {
                className: null != l ? l[1] : null,
                level: "=" === e[2] ? 1 : 2,
                content: s.parseInline(n, r, a),
              }
            );
          };
        },
        m = e => ({
          ...a.baseRules,
          image: {
            ...u,
            ...("function" == typeof a.customRules.image
              ? a.customRules.image(e)
              : a.customRules.image),
          },
          link: {
            ...c,
            ...("function" == typeof a.customRules.link
              ? a.customRules.link(e)
              : a.customRules.link),
          },
          list: {
            ...d,
            ...("function" == typeof a.customRules.list
              ? a.customRules.list(e)
              : a.customRules.list),
          },
          interpolation: {
            order: r.default.order,
            match: e => f.exec(e),
            parse(e, t, n) {
              let a = n.interpolations[e[1]];
              return null == a
                ? { type: "text", content: e[0] }
                : { type: "interpolation", renderer: a };
            },
            react: e => e.renderer(),
          },
          lheading: {
            ...o,
            parse: C({ transformUpperCase: !0 }),
            ...("function" == typeof a.customRules.lheading
              ? a.customRules.lheading(e)
              : a.customRules.lheading),
          },
          heading: {
            ...i,
            ...("function" == typeof a.customRules.heading
              ? a.customRules.heading(e)
              : a.customRules.heading),
          },
          blockQuote: {
            ...h,
            ...("function" == typeof a.customRules.blockQuote
              ? a.customRules.blockQuote(e)
              : a.customRules.blockQuote),
          },
          paragraph: {
            ...p,
            ...("function" == typeof a.customRules.paragraph
              ? a.customRules.paragraph(e)
              : a.customRules.paragraph),
          },
        }),
        x = e => ({
          lheading: {
            ...o,
            parse: C({ transformUpperCase: !1 }),
            ...("function" == typeof a.customRules.lheading
              ? a.customRules.lheading(e)
              : a.customRules.lheading),
          },
        });
      var _ = {
        getDefaultRules: e => ({ ...m(e) }),
        getSpecialRules: e => ({ ...m(e), ...x(e) }),
      };
    },
    159661: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          baseRules: function () {
            return v;
          },
          customRules: function () {
            return L;
          },
        }),
        n("222007");
      var a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        r = n.n(s),
        o = n("404828"),
        i = n.n(o),
        c = n("77078"),
        u = n("54239"),
        d = n("79112"),
        h = n("367376"),
        p = n("393414"),
        g = n("599110"),
        f = n("49111"),
        C = n("234222");
      let m = i.defaultRules.link,
        x = { section: f.AnalyticsSections.SETTINGS_CHANGELOG },
        _ = e => {
          var t, n;
          let {
              level: a,
              children: s,
              className: o = null,
              styleSheet: i = {},
            } = e,
            u = (0, c.usePrivateHeadingLevel)(),
            d = parseInt(a, 10),
            h = isNaN(d) ? 1 : d;
          return l.createElement(
            "h".concat(u + h - 1),
            {
              className: r(
                ...((t = i), null == (n = o) ? [] : n.split(" ").map(e => t[e]))
              ),
            },
            s
          );
        },
        v = h.default.defaultRules,
        L = {
          link: {
            parse(e, t, n) {
              let a;
              let l = e[2],
                s =
                  l.startsWith("https://discordapp.com/nitro") ||
                  l.startsWith("https://discord.com/nitro"),
                r =
                  l.startsWith("https://discordapp.com/hypesquad") ||
                  l.startsWith("https://discord.com/hypesquad"),
                o =
                  l.startsWith("/shop/fullscreen?source=1") ||
                  l.startsWith("/activities");
              return (
                (a =
                  s || r
                    ? e => {
                        g.default.track(
                          f.AnalyticEvents.PREMIUM_PROMOTION_OPENED,
                          { location: x }
                        ),
                          s
                            ? d.default.open(f.UserSettingsSections.PREMIUM)
                            : r &&
                              d.default.open(
                                f.UserSettingsSections.HYPESQUAD_ONLINE
                              ),
                          n.changeLog.track(
                            f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED,
                            { cta_type: "nitro" }
                          ),
                          (0, c.closeModal)(C.CHANGELOG_MODAL_KEY),
                          e.preventDefault();
                      }
                    : o
                      ? e => {
                          (0, p.transitionTo)(l),
                            n.changeLog.track(
                              f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED,
                              { ...g.default.getCampaignParams(l) }
                            ),
                            (0, u.popAllLayers)(),
                            (0, c.closeModal)(C.CHANGELOG_MODAL_KEY),
                            e.preventDefault();
                        }
                      : () => {
                          n &&
                            "function" == typeof n.onLinkClick &&
                            n.onLinkClick(l),
                            n.changeLog.track(
                              f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED,
                              { ...g.default.getCampaignParams(l) }
                            );
                        }),
                { ...m.parse(e, t, n), callToAction: a }
              );
            },
            react(e, t, n) {
              let l = (0, a.jsx)(
                c.Anchor,
                {
                  href: i.sanitizeUrl(e.target),
                  title: e.title,
                  onClick: e.callToAction,
                  target: "_blank",
                  className: e.callToAction ? "cta" : void 0,
                  children: t(e.content, n),
                },
                n.key
              );
              return l;
            },
          },
          lheading: e => ({
            react: (t, n, l) =>
              (0, a.jsx)(
                _,
                {
                  level: t.level,
                  className: t.className,
                  styleSheet: e,
                  children: n(t.content, l),
                },
                l.key
              ),
          }),
          heading: {
            react: (e, t, n) =>
              (0, a.jsx)(
                _,
                { level: e.level, children: t(e.content, n) },
                n.key
              ),
          },
          image: {
            react(e, t, l) {
              let s = n("291802")(
                "../../images/change-log/"
                  .concat(e.target)
                  .replace("../../images/change-log/", "./")
              );
              return (0, a.jsx)("img", { alt: e.alt, src: s }, l.key);
            },
          },
          blockQuote: { react: v.blockQuote.react },
          paragraph: {
            react: (e, t, n) =>
              (0, a.jsx)("p", { children: t(e.content, n) }, n.key),
          },
        };
    },
    281069: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FacebookIcon: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z",
            className: o,
          }),
        });
      };
    },
    125174: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InstagramIcon: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, s.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M17.25 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
              className: o,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M7.86 2.07a7.3 7.3 0 0 0-2.43.47A4.9 4.9 0 0 0 3.66 3.7a4.9 4.9 0 0 0-1.15 1.77 7.35 7.35 0 0 0-.46 2.43C2.01 8.96 2 9.3 2 12.02c0 2.71.02 3.06.07 4.12.05 1.07.22 1.8.47 2.43.26.66.6 1.21 1.16 1.77.55.55 1.11.9 1.77 1.15.64.24 1.36.41 2.43.46 1.06.04 1.4.05 4.12.05 2.71 0 3.06-.02 4.12-.07a6.14 6.14 0 0 0 4.2-1.63 6.15 6.15 0 0 0 1.6-4.2c.05-1.06.06-1.4.06-4.12 0-2.71-.02-3.05-.07-4.12a6.15 6.15 0 0 0-1.63-4.2 6.14 6.14 0 0 0-4.2-1.6C15.04 2 14.7 2 11.98 2c-2.71 0-3.05.02-4.12.07Zm.1 2c-.88.04-1.39.17-1.8.33a2.9 2.9 0 0 0-1.08.7 2.9 2.9 0 0 0-.7 1.09c-.16.4-.29.92-.33 1.8A68.6 68.6 0 0 0 4 12.01c0 2.7.02 3 .07 4.03.04.87.17 1.38.33 1.79.17.42.36.73.7 1.08.35.34.67.54 1.09.7.41.16.92.29 1.8.33 1.01.04 1.32.05 4.03.05 2.7 0 3-.02 4.03-.07 1.28-.06 2.23-.4 2.87-1.04.64-.64.97-1.6 1.03-2.87.04-1.02.05-1.33.05-4.04 0-2.7-.02-3-.07-4.03-.06-1.28-.4-2.23-1.04-2.87-.64-.64-1.6-.97-2.87-1.03A69.44 69.44 0 0 0 11.98 4c-2.7 0-3 .02-4.02.07Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    90769: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          XNeutralIcon: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("669491"),
        s = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, s.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M13.86 10.47 21.15 2h-1.73l-6.33 7.35L8.04 2H2.22l7.64 11.12L2.22 22h1.72l6.68-7.77L15.96 22h5.82l-7.92-11.53Zm-2.36 2.75-.78-1.11L4.57 3.3h2.65l4.97 7.11.77 1.1 6.46 9.25h-2.65l-5.27-7.54Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=9ab4434b7da3aed841a6.js.map

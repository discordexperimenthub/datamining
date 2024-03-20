(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42003"],
  {
    397613: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ErrorBoundary: function () {
            return a;
          },
        }),
        r("70102"),
        r("222007");
      var s = r("884691");
      let n = (0, s.createContext)(null),
        i = { didCatch: !1, error: null };
      class a extends s.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, r, s = arguments.length, n = Array(s), a = 0;
              a < s;
              a++
            )
              n[a] = arguments[a];
            null === (t = (r = this.props).onReset) ||
              void 0 === t ||
              t.call(r, { args: n, reason: "imperative-api" }),
              this.setState(i);
          }
        }
        componentDidCatch(e, t) {
          var r, s;
          null === (r = (s = this.props).onError) ||
            void 0 === r ||
            r.call(s, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: r } = this.state,
            { resetKeys: s } = this.props;
          if (
            r &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
              );
            })(e.resetKeys, s)
          ) {
            var n, a;
            null === (n = (a = this.props).onReset) ||
              void 0 === n ||
              n.call(a, { next: s, prev: e.resetKeys, reason: "keys" }),
              this.setState(i);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: r,
              fallback: i,
            } = this.props,
            { didCatch: a, error: l } = this.state,
            u = e;
          if (a) {
            let e = { error: l, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, s.isValidElement)(i)) u = i;
            else if ("function" == typeof t) u = t(e);
            else if (r) u = (0, s.createElement)(r, e);
            else throw l;
          }
          return (0, s.createElement)(
            n.Provider,
            {
              value: {
                didCatch: a,
                error: l,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            u
          );
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = i);
        }
      }
    },
    111633: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        var t, r;
        return (e = String(e).toLowerCase()).length < 3
          ? e
          : (121 === e.charCodeAt(0) && ((t = !0), (e = "Y" + e.substr(1))),
            y.test(e)
              ? (e = e.substr(0, e.length - 2))
              : g.test(e) && (e = e.substr(0, e.length - 1)),
            (r = b.exec(e))
              ? u.test(r[1]) && (e = e.substr(0, e.length - 1))
              : (r = _.exec(e)) &&
                c.test(r[1]) &&
                ((e = r[1]),
                m.test(e)
                  ? (e += "e")
                  : A.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (r = E.exec(e)) && c.test(r[1]) && (e = r[1] + "i"),
            (r = T.exec(e)) && u.test(r[1]) && (e = r[1] + s[r[2]]),
            (r = S.exec(e)) && u.test(r[1]) && (e = r[1] + n[r[2]]),
            (r = C.exec(e))
              ? d.test(r[1]) && (e = r[1])
              : (r = v.exec(e)) && d.test(r[1]) && (e = r[1]),
            (r = h.exec(e)) &&
              (d.test(r[1]) || (o.test(r[1]) && !f.test(r[1]))) &&
              (e = r[1]),
            p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var s = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        n = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        i = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        l = "(" + i + "[aeiou]*)",
        u = RegExp("^" + a + "?" + l + a),
        o = RegExp("^" + a + "?" + l + a + l + "?$"),
        d = RegExp("^" + a + "?(" + l + a + "){2,}"),
        c = RegExp("^" + a + "?" + i),
        f = RegExp("^" + a + i + "[^aeiouwxy]$"),
        p = /ll$/,
        h = /^(.+?)e$/,
        E = /^(.+?)y$/,
        v = /^(.+?(s|t))(ion)$/,
        _ = /^(.+?)(ed|ing)$/,
        m = /(at|bl|iz)$/,
        b = /^(.+?)eed$/,
        g = /^.+?[^s]s$/,
        y = /^.+?(ss|i)es$/,
        A = /([^aeiouylsz])\1$/,
        T = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        S = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return n;
          },
        }),
        r("70102");
      var s = r("884691");
      function n() {
        let e = (0, s.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: r, createStore: n, children: i } = t,
              a = (0, s.useRef)();
            return (
              !a.current &&
                (r &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !n && (n = () => r)),
                (a.current = n())),
              (0, s.createElement)(e.Provider, { value: a.current }, i)
            );
          },
          useStore: function (t) {
            let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              n = (0, s.useContext)(e);
            if (!n)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return n(t, r);
          },
          useStoreApi: () => {
            let t = (0, s.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, s.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t]
            );
          },
        };
      }
    },
    583397: function (e, t, r) {
      "use strict";
      e.exports = r.p + "c133c9df9ee4552c188a.svg";
    },
    378675: function (e, t, r) {
      "use strict";
      e.exports = r.p + "d063b4bf17f1fee95f05.svg";
    },
    926607: function (e, t, r) {
      "use strict";
      function s(e, t) {
        return (
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      r.r(t),
        r.d(t, {
          _: function () {
            return s;
          },
        });
    },
    642950: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return h;
          },
        }),
        r("222007");
      var s = r("37983"),
        n = r("884691"),
        i = r("414456"),
        a = r.n(i),
        l = r("77078"),
        u = r("54239"),
        o = r("79112"),
        d = r("49111"),
        c = r("782340"),
        f = r("44026");
      class p extends n.Component {
        render() {
          return (0, s.jsxs)("div", {
            className: f.streamerModeEnabled,
            children: [
              (0, s.jsx)("div", { className: f.streamerModeEnabledImage }),
              (0, s.jsx)(l.Clickable, {
                className: a(f.streamerModeEnabledBtn, {
                  [f.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: c.default.Messages.STREAMER_MODE_ENABLED,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleClick = () => {
              !this.props.disableButton &&
                ((0, u.pushLayer)(d.Layers.USER_SETTINGS),
                o.default.setSection(d.UserSettingsSections.STREAMER_MODE));
            });
        }
      }
      p.defaultProps = { disableButton: !1 };
      var h = p;
    },
    7037: function (e, t, r) {
      "use strict";
      r.r(t);
      var s = r("833067");
      r.es(s, t);
    },
    970366: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          trackAppUIViewed: function () {
            return u;
          },
        }),
        r("222007");
      var s = r("748820"),
        n = r("49671"),
        i = r("599110"),
        a = r("49111");
      let l = new (class e {
        trackEvent(e, t) {
          let r = Date.now();
          requestIdleCallback(() => {
            i.default.track(e, {
              ...(function () {
                var e, t, r;
                let s = "--campaign-id=",
                  i =
                    null !==
                      (r =
                        null === n.default || void 0 === n.default
                          ? void 0
                          : null === (t = n.default.processUtils) ||
                              void 0 === t
                            ? void 0
                            : null === (e = t.getMainArgvSync) || void 0 === e
                              ? void 0
                              : e.call(t)) && void 0 !== r
                      ? r
                      : [];
                for (let e of i)
                  if (e.startsWith(s)) return { referrer: e.substr(s.length) };
                return {};
              })(),
              ...(function () {
                let e = !1,
                  t = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0,
                  };
                return (
                  null != window.performance &&
                    null != window.performance.getEntries &&
                    window.performance.getEntries().forEach(r => {
                      let s =
                          null != r.encodedBodySize
                            ? r.encodedBodySize
                            : r.decodedBodySize,
                        n =
                          null != r.decodedBodySize
                            ? r.decodedBodySize
                            : r.encodedBodySize,
                        i = r.transferSize;
                      null != n &&
                        null != s &&
                        ((e = !0),
                        (t.total_compressed_byte_size += s),
                        (t.total_uncompressed_byte_size += n),
                        null != i && (t.total_uncompressed_byte_size += i),
                        "resource" === r.entryType &&
                          ("script" === r.initiatorType &&
                            null != r.name &&
                            null != r.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += s),
                            (t.js_uncompressed_byte_size += n),
                            null != i && (t.js_uncompressed_byte_size += i)),
                          "link" === r.initiatorType &&
                            null != r.name &&
                            null != r.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += s),
                            (t.css_uncompressed_byte_size += n),
                            null != i && (t.css_uncompressed_byte_size += i))));
                    }),
                  e ? t : {}
                );
              })(),
              load_id: this.loadId,
              screen_name: t,
              duration_ms_since_app_opened:
                r - window.GLOBAL_ENV.HTML_TIMESTAMP,
            });
          });
        }
        trackAppUIViewed(e) {
          !this.appUIViewed &&
            (this.trackEvent(a.AnalyticEvents.APP_UI_VIEWED, e),
            (this.appUIViewed = !0));
        }
        constructor() {
          (this.loadId = (0, s.v4)()), (this.appUIViewed = !1);
        }
      })();
      function u(e) {
        l.trackAppUIViewed(e);
      }
    },
    476108: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var s = r("446674"),
        n = r("95410"),
        i = r("913144"),
        a = r("49111");
      let l = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = l,
        o = "LAST_VIEWED_PATH";
      class d extends s.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          u = null != e ? e : l;
        }
        get defaultRoute() {
          return a.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : a.Routes.ME;
        }
        get fallbackRoute() {
          return a.Routes.ME;
        }
        getState() {
          return u;
        }
      }
      (d.displayName = "DefaultRouteStore"),
        (d.persistKey = "DefaultRouteStore"),
        (d.migrations = [
          () => {
            let e = n.default.get(o, null);
            return n.default.remove(o), { lastViewedPath: e };
          },
        ]);
      var c = new d(i.default, {
        SAVE_LAST_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedNonVoicePath = t), !0;
        },
      });
    },
    287850: function (e, t, r) {
      "use strict";
      let s, n, i;
      r.r(t),
        r.d(t, {
          default: function () {
            return N;
          },
        }),
        r("222007"),
        r("424973");
      var a,
        l,
        u = r("866227"),
        o = r.n(u),
        d = r("446674"),
        c = r("407846"),
        f = r("913144"),
        p = r("21121"),
        h = r("934306"),
        E = r("288518"),
        v = r("486503"),
        _ = r("233069"),
        m = r("42203"),
        b = r("305961"),
        g = r("660478"),
        y = r("282109"),
        A = r("697218"),
        T = r("299039"),
        S = r("724210");
      ((l = a || (a = {})).DEFAULT = "DEFAULT"), (l.FAVORITE = "FAVORITE");
      let C = new c.default(
        e => {
          let { isRequest: t, isFavorite: r } = e;
          return t ? [] : [r ? "FAVORITE" : "DEFAULT"];
        },
        e => {
          let { lastMessageId: t } = e;
          return -t;
        }
      );
      function w(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, r;
                let s =
                    null !==
                      (r =
                        null !== (t = g.default.lastMessageId(e.id)) &&
                        void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== r
                      ? r
                      : e.id,
                  n = e.isMessageRequestTimestamp;
                if (null != n) {
                  let e = o(n).valueOf(),
                    t = T.default.fromTimestamp(e);
                  return T.default.compare(s, t) > 0 ? s : t;
                }
                return s;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite:
            y.default.isMessagesFavorite(e.id) &&
            (0, p.isInMainTabsExperiment)(),
          isRequest: E.default.isMessageRequest(e.id) || v.default.isSpam(e.id),
        };
      }
      function x() {
        C.clear(),
          Object.values(m.default.getMutablePrivateChannels()).forEach(e => {
            C.set(e.id, w(e));
          }),
          (0, p.isInMainTabsExperiment)() &&
            (0, h.isSplitMessagesTab)() &&
            y.default.getAddedToMessages().forEach(e => {
              let t = m.default.getChannel(e);
              null != t &&
                (0, _.isGuildTextChannelType)(t.type) &&
                C.set(t.id, w(t));
            });
      }
      function I() {
        let e = m.default.getMutablePrivateChannels();
        for (let t in e) C.set(t, w(e[t]));
      }
      let R =
        ((s = []),
        (n = []),
        (i = []),
        () => {
          let e = C.values("FAVORITE"),
            t = C.values("DEFAULT");
          return (
            (s !== e || n !== t) &&
              ((i = []),
              e.forEach(e => {
                let { channelId: t } = e;
                return i.push(t);
              }),
              (s = e),
              t.forEach(e => {
                let { channelId: t } = e;
                return i.push(t);
              }),
              (n = t)),
            i
          );
        });
      class z extends d.default.Store {
        initialize() {
          this.waitFor(m.default, b.default, A.default, E.default, y.default),
            this.syncWith([y.default, E.default], x);
        }
        getPrivateChannelIds() {
          return R();
        }
        getSortedChannels() {
          return [C.values("FAVORITE"), C.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            C.values().forEach(t => {
              let { channelId: r, lastMessageId: s } = t;
              e[r] = s;
            }),
            e
          );
        }
      }
      z.displayName = "PrivateChannelSortStore";
      var N = new z(f.default, {
        CONNECTION_OPEN: x,
        CONNECTION_OPEN_SUPPLEMENTAL: x,
        OVERLAY_INITIALIZE: x,
        CACHE_LOADED: I,
        CACHE_LOADED_LAZY: I,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          t.forEach(e => {
            ((0, _.isPrivate)(e.type) || C.has(e.id)) && C.set(e.id, w(e));
          });
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          if (
            !(0, _.isPrivate)(t.type) ||
            t.id === S.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
          )
            return !1;
          C.set(t.id, w(t));
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          return C.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: r } = e;
          if (!C.has(t)) return !1;
          let s = m.default.getChannel(t);
          return null != s && C.set(t, w(s, r.id));
        },
        GUILD_CREATE: function (e) {
          let t = e.guild.id;
          return C.delete(t);
        },
        LOGOUT: function () {
          C.clear();
        },
      });
    },
    137215: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var s = r("37983"),
        n = r("884691"),
        i = r("414456"),
        a = r.n(i),
        l = r("546671"),
        u = r("711603");
      let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
        d = {
          [o.UP]: u.up,
          [o.RIGHT]: u.right,
          [o.DOWN]: u.down,
          [o.LEFT]: u.left,
        };
      class c extends n.PureComponent {
        render() {
          let { direction: e, className: t } = this.props;
          return (0, s.jsx)(l.default, {
            className: a(u.arrow, t, { [d[e]]: !0 }),
          });
        }
      }
      c.Directions = o;
      var f = c;
    },
    454589: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        }),
        r("222007");
      var s = r("37983"),
        n = r("884691"),
        i = r("414456"),
        a = r.n(i),
        l = r("77078"),
        u = r("145131"),
        o = r("461380"),
        d = r("361466");
      class c extends n.PureComponent {
        handleClick(e) {
          let { onBreadcrumbClick: t } = this.props;
          null != t && t(e);
        }
        render() {
          let { breadcrumbs: e, className: t } = this.props,
            r = e.map(this.renderBreadcrumb);
          return (0, s.jsx)(u.default, {
            justify: u.default.Justify.START,
            className: a(d.breadcrumbs, t),
            children: r,
          });
        }
        constructor(...e) {
          super(...e),
            (this.renderBreadcrumb = (e, t) => {
              let {
                  activeId: r,
                  onBreadcrumbClick: n,
                  breadcrumbs: i,
                  renderCustomBreadcrumb: u,
                  separatorClassName: c,
                } = this.props,
                f = e.id === r,
                p = t === i.length - 1,
                h =
                  null != u
                    ? u(e, f)
                    : (0, s.jsx)("span", {
                        className: a(d.breadcrumb, {
                          [d.activeBreadcrumb]: f,
                          [d.interactiveBreadcrumb]: null != n,
                        }),
                        children: e.label,
                      });
              return (0, s.jsxs)(
                "div",
                {
                  className: a(d.breadcrumbWrapper, {
                    [d.breadcrumbFinalWrapper]: p,
                  }),
                  children: [
                    null != n
                      ? (0, s.jsx)(l.Clickable, {
                          tag: "span",
                          onClick: () => this.handleClick(e),
                          className: d.breadcrumbClickWrapper,
                          children: h,
                        })
                      : h,
                    p
                      ? null
                      : (0, s.jsx)(o.default, {
                          className: a(d.breadcrumbArrow, c),
                          direction: o.default.Directions.RIGHT,
                        }),
                  ],
                },
                e.id
              );
            });
        }
      }
      var f = c;
    },
    546671: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return l;
          },
        });
      var s = r("37983");
      r("884691");
      var n = r("469563"),
        i = r("7037"),
        a = r("246053"),
        l = (0, n.replaceIcon)(function (e) {
          return (0, s.jsx)(a.default, {
            ...e,
            direction: a.default.Directions.UP,
          });
        }, i.ArrowSmallUpIcon);
    },
    833067: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ArrowSmallUpIcon: function () {
            return a;
          },
        });
      var s = r("37983");
      r("884691");
      var n = r("669491"),
        i = r("82169");
      let a = e => {
        let {
          width: t = 24,
          height: r = 24,
          color: a = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...u
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: r,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: l,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=b359b38bcf7fe9a1ba0c.js.map

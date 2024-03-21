(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2259"],
  {
    397613: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ErrorBoundary: function () {
            return a;
          },
        }),
        s("70102"),
        s("222007");
      var r = s("884691");
      let i = (0, r.createContext)(null),
        n = { didCatch: !1, error: null };
      class a extends r.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, s, r = arguments.length, i = Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            null === (t = (s = this.props).onReset) ||
              void 0 === t ||
              t.call(s, { args: i, reason: "imperative-api" }),
              this.setState(n);
          }
        }
        componentDidCatch(e, t) {
          var s, r;
          null === (s = (r = this.props).onError) ||
            void 0 === s ||
            s.call(r, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: s } = this.state,
            { resetKeys: r } = this.props;
          if (
            s &&
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
                e.length !== t.length || e.some((e, s) => !Object.is(e, t[s]))
              );
            })(e.resetKeys, r)
          ) {
            var i, a;
            null === (i = (a = this.props).onReset) ||
              void 0 === i ||
              i.call(a, { next: r, prev: e.resetKeys, reason: "keys" }),
              this.setState(n);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: s,
              fallback: n,
            } = this.props,
            { didCatch: a, error: l } = this.state,
            u = e;
          if (a) {
            let e = { error: l, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, r.isValidElement)(n)) u = n;
            else if ("function" == typeof t) u = t(e);
            else if (s) u = (0, r.createElement)(s, e);
            else throw l;
          }
          return (0, r.createElement)(
            i.Provider,
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
            (this.state = n);
        }
      }
    },
    111633: function (e, t, s) {
      "use strict";
      e.exports = function (e) {
        var t, s;
        return (e = String(e).toLowerCase()).length < 3
          ? e
          : (121 === e.charCodeAt(0) && ((t = !0), (e = "Y" + e.substr(1))),
            g.test(e)
              ? (e = e.substr(0, e.length - 2))
              : y.test(e) && (e = e.substr(0, e.length - 1)),
            (s = m.exec(e))
              ? u.test(s[1]) && (e = e.substr(0, e.length - 1))
              : (s = v.exec(e)) &&
                c.test(s[1]) &&
                ((e = s[1]),
                b.test(e)
                  ? (e += "e")
                  : A.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (s = E.exec(e)) && c.test(s[1]) && (e = s[1] + "i"),
            (s = S.exec(e)) && u.test(s[1]) && (e = s[1] + r[s[2]]),
            (s = C.exec(e)) && u.test(s[1]) && (e = s[1] + i[s[2]]),
            (s = T.exec(e))
              ? d.test(s[1]) && (e = s[1])
              : (s = _.exec(e)) && d.test(s[1]) && (e = s[1]),
            (s = h.exec(e)) &&
              (d.test(s[1]) || (o.test(s[1]) && !f.test(s[1]))) &&
              (e = s[1]),
            p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var r = {
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
        i = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        n = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        l = "(" + n + "[aeiou]*)",
        u = RegExp("^" + a + "?" + l + a),
        o = RegExp("^" + a + "?" + l + a + l + "?$"),
        d = RegExp("^" + a + "?(" + l + a + "){2,}"),
        c = RegExp("^" + a + "?" + n),
        f = RegExp("^" + a + n + "[^aeiouwxy]$"),
        p = /ll$/,
        h = /^(.+?)e$/,
        E = /^(.+?)y$/,
        _ = /^(.+?(s|t))(ion)$/,
        v = /^(.+?)(ed|ing)$/,
        b = /(at|bl|iz)$/,
        m = /^(.+?)eed$/,
        y = /^.+?[^s]s$/,
        g = /^.+?(ss|i)es$/,
        A = /([^aeiouylsz])\1$/,
        S = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        T = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        }),
        s("70102");
      var r = s("884691");
      function i() {
        let e = (0, r.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: s, createStore: i, children: n } = t,
              a = (0, r.useRef)();
            return (
              !a.current &&
                (s &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !i && (i = () => s)),
                (a.current = i())),
              (0, r.createElement)(e.Provider, { value: a.current }, n)
            );
          },
          useStore: function (t) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              i = (0, r.useContext)(e);
            if (!i)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return i(t, s);
          },
          useStoreApi: () => {
            let t = (0, r.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, r.useMemo)(
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
    69448: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f6da6e7ed1d57e445d0e.svg";
    },
    583397: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c133c9df9ee4552c188a.svg";
    },
    378675: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d063b4bf17f1fee95f05.svg";
    },
    926607: function (e, t, s) {
      "use strict";
      function r(e, t) {
        return (
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      s.r(t),
        s.d(t, {
          _: function () {
            return r;
          },
        });
    },
    642950: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        }),
        s("222007");
      var r = s("37983"),
        i = s("884691"),
        n = s("414456"),
        a = s.n(n),
        l = s("77078"),
        u = s("54239"),
        o = s("79112"),
        d = s("49111"),
        c = s("782340"),
        f = s("44026");
      class p extends i.Component {
        render() {
          return (0, r.jsxs)("div", {
            className: f.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: f.streamerModeEnabledImage }),
              (0, r.jsx)(l.Clickable, {
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
    970366: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          trackAppUIViewed: function () {
            return u;
          },
        }),
        s("222007");
      var r = s("748820"),
        i = s("49671"),
        n = s("599110"),
        a = s("49111");
      let l = new (class e {
        trackEvent(e, t) {
          let s = Date.now();
          requestIdleCallback(() => {
            n.default.track(e, {
              ...(function () {
                var e, t, s;
                let r = "--campaign-id=",
                  n =
                    null !==
                      (s =
                        null === i.default || void 0 === i.default
                          ? void 0
                          : null === (t = i.default.processUtils) ||
                              void 0 === t
                            ? void 0
                            : null === (e = t.getMainArgvSync) || void 0 === e
                              ? void 0
                              : e.call(t)) && void 0 !== s
                      ? s
                      : [];
                for (let e of n)
                  if (e.startsWith(r)) return { referrer: e.substr(r.length) };
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
                    window.performance.getEntries().forEach(s => {
                      let r =
                          null != s.encodedBodySize
                            ? s.encodedBodySize
                            : s.decodedBodySize,
                        i =
                          null != s.decodedBodySize
                            ? s.decodedBodySize
                            : s.encodedBodySize,
                        n = s.transferSize;
                      null != i &&
                        null != r &&
                        ((e = !0),
                        (t.total_compressed_byte_size += r),
                        (t.total_uncompressed_byte_size += i),
                        null != n && (t.total_uncompressed_byte_size += n),
                        "resource" === s.entryType &&
                          ("script" === s.initiatorType &&
                            null != s.name &&
                            null != s.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += r),
                            (t.js_uncompressed_byte_size += i),
                            null != n && (t.js_uncompressed_byte_size += n)),
                          "link" === s.initiatorType &&
                            null != s.name &&
                            null != s.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += r),
                            (t.css_uncompressed_byte_size += i),
                            null != n && (t.css_uncompressed_byte_size += n))));
                    }),
                  e ? t : {}
                );
              })(),
              load_id: this.loadId,
              screen_name: t,
              duration_ms_since_app_opened:
                s - window.GLOBAL_ENV.HTML_TIMESTAMP,
            });
          });
        }
        trackAppUIViewed(e) {
          !this.appUIViewed &&
            (this.trackEvent(a.AnalyticEvents.APP_UI_VIEWED, e),
            (this.appUIViewed = !0));
        }
        constructor() {
          (this.loadId = (0, r.v4)()), (this.appUIViewed = !1);
        }
      })();
      function u(e) {
        l.trackAppUIViewed(e);
      }
    },
    476108: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var r = s("446674"),
        i = s("95410"),
        n = s("913144"),
        a = s("49111");
      let l = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = l,
        o = "LAST_VIEWED_PATH";
      class d extends r.default.PersistedStore {
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
            let e = i.default.get(o, null);
            return i.default.remove(o), { lastViewedPath: e };
          },
        ]);
      var c = new d(n.default, {
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
    287850: function (e, t, s) {
      "use strict";
      let r, i, n;
      s.r(t),
        s.d(t, {
          default: function () {
            return N;
          },
        }),
        s("222007"),
        s("424973");
      var a,
        l,
        u = s("866227"),
        o = s.n(u),
        d = s("446674"),
        c = s("407846"),
        f = s("913144"),
        p = s("21121"),
        h = s("934306"),
        E = s("288518"),
        _ = s("486503"),
        v = s("233069"),
        b = s("42203"),
        m = s("305961"),
        y = s("660478"),
        g = s("282109"),
        A = s("697218"),
        S = s("299039"),
        C = s("724210");
      ((l = a || (a = {})).DEFAULT = "DEFAULT"), (l.FAVORITE = "FAVORITE");
      let T = new c.default(
        e => {
          let { isRequest: t, isFavorite: s } = e;
          return t ? [] : [s ? "FAVORITE" : "DEFAULT"];
        },
        e => {
          let { lastMessageId: t } = e;
          return -t;
        }
      );
      function z(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, s;
                let r =
                    null !==
                      (s =
                        null !== (t = y.default.lastMessageId(e.id)) &&
                        void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== s
                      ? s
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = o(i).valueOf(),
                    t = S.default.fromTimestamp(e);
                  return S.default.compare(r, t) > 0 ? r : t;
                }
                return r;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite:
            g.default.isMessagesFavorite(e.id) &&
            (0, p.isInMainTabsExperiment)(),
          isRequest: E.default.isMessageRequest(e.id) || _.default.isSpam(e.id),
        };
      }
      function x() {
        T.clear(),
          Object.values(b.default.getMutablePrivateChannels()).forEach(e => {
            T.set(e.id, z(e));
          }),
          (0, p.isInMainTabsExperiment)() &&
            (0, h.isSplitMessagesTab)() &&
            g.default.getAddedToMessages().forEach(e => {
              let t = b.default.getChannel(e);
              null != t &&
                (0, v.isGuildTextChannelType)(t.type) &&
                T.set(t.id, z(t));
            });
      }
      function R() {
        let e = b.default.getMutablePrivateChannels();
        for (let t in e) T.set(t, z(e[t]));
      }
      let I =
        ((r = []),
        (i = []),
        (n = []),
        () => {
          let e = T.values("FAVORITE"),
            t = T.values("DEFAULT");
          return (
            (r !== e || i !== t) &&
              ((n = []),
              e.forEach(e => {
                let { channelId: t } = e;
                return n.push(t);
              }),
              (r = e),
              t.forEach(e => {
                let { channelId: t } = e;
                return n.push(t);
              }),
              (i = t)),
            n
          );
        });
      class w extends d.default.Store {
        initialize() {
          this.waitFor(b.default, m.default, A.default, E.default, g.default),
            this.syncWith([g.default, E.default], x);
        }
        getPrivateChannelIds() {
          return I();
        }
        getSortedChannels() {
          return [T.values("FAVORITE"), T.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            T.values().forEach(t => {
              let { channelId: s, lastMessageId: r } = t;
              e[s] = r;
            }),
            e
          );
        }
      }
      w.displayName = "PrivateChannelSortStore";
      var N = new w(f.default, {
        CONNECTION_OPEN: x,
        CONNECTION_OPEN_SUPPLEMENTAL: x,
        OVERLAY_INITIALIZE: x,
        CACHE_LOADED: R,
        CACHE_LOADED_LAZY: R,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          t.forEach(e => {
            ((0, v.isPrivate)(e.type) || T.has(e.id)) && T.set(e.id, z(e));
          });
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          if (
            !(0, v.isPrivate)(t.type) ||
            t.id === C.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
          )
            return !1;
          T.set(t.id, z(t));
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          return T.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: s } = e;
          if (!T.has(t)) return !1;
          let r = b.default.getChannel(t);
          return null != r && T.set(t, z(r, s.id));
        },
        GUILD_CREATE: function (e) {
          let t = e.guild.id;
          return T.delete(t);
        },
        LOGOUT: function () {
          T.clear();
        },
      });
    },
    454589: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        }),
        s("222007");
      var r = s("37983"),
        i = s("884691"),
        n = s("414456"),
        a = s.n(n),
        l = s("77078"),
        u = s("145131"),
        o = s("461380"),
        d = s("361466");
      class c extends i.PureComponent {
        handleClick(e) {
          let { onBreadcrumbClick: t } = this.props;
          null != t && t(e);
        }
        render() {
          let { breadcrumbs: e, className: t } = this.props,
            s = e.map(this.renderBreadcrumb);
          return (0, r.jsx)(u.default, {
            justify: u.default.Justify.START,
            className: a(d.breadcrumbs, t),
            children: s,
          });
        }
        constructor(...e) {
          super(...e),
            (this.renderBreadcrumb = (e, t) => {
              let {
                  activeId: s,
                  onBreadcrumbClick: i,
                  breadcrumbs: n,
                  renderCustomBreadcrumb: u,
                  separatorClassName: c,
                } = this.props,
                f = e.id === s,
                p = t === n.length - 1,
                h =
                  null != u
                    ? u(e, f)
                    : (0, r.jsx)("span", {
                        className: a(d.breadcrumb, {
                          [d.activeBreadcrumb]: f,
                          [d.interactiveBreadcrumb]: null != i,
                        }),
                        children: e.label,
                      });
              return (0, r.jsxs)(
                "div",
                {
                  className: a(d.breadcrumbWrapper, {
                    [d.breadcrumbFinalWrapper]: p,
                  }),
                  children: [
                    null != i
                      ? (0, r.jsx)(l.Clickable, {
                          tag: "span",
                          onClick: () => this.handleClick(e),
                          className: d.breadcrumbClickWrapper,
                          children: h,
                        })
                      : h,
                    p
                      ? null
                      : (0, r.jsx)(o.default, {
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
  },
]);
//# sourceMappingURL=14a1de910563a54c4ff4.js.map

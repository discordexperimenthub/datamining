(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85206"],
  {
    397613: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ErrorBoundary: function () {
            return l;
          },
        }),
        r("70102"),
        r("222007");
      var n = r("884691");
      let i = (0, n.createContext)(null),
        s = { didCatch: !1, error: null };
      class l extends n.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, r, n = arguments.length, i = Array(n), l = 0;
              l < n;
              l++
            )
              i[l] = arguments[l];
            null === (t = (r = this.props).onReset) ||
              void 0 === t ||
              t.call(r, { args: i, reason: "imperative-api" }),
              this.setState(s);
          }
        }
        componentDidCatch(e, t) {
          var r, n;
          null === (r = (n = this.props).onError) ||
            void 0 === r ||
            r.call(n, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: r } = this.state,
            { resetKeys: n } = this.props;
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
            })(e.resetKeys, n)
          ) {
            var i, l;
            null === (i = (l = this.props).onReset) ||
              void 0 === i ||
              i.call(l, { next: n, prev: e.resetKeys, reason: "keys" }),
              this.setState(s);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: r,
              fallback: s,
            } = this.props,
            { didCatch: l, error: a } = this.state,
            u = e;
          if (l) {
            let e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, n.isValidElement)(s)) u = s;
            else if ("function" == typeof t) u = t(e);
            else if (r) u = (0, n.createElement)(r, e);
            else throw a;
          }
          return (0, n.createElement)(
            i.Provider,
            {
              value: {
                didCatch: l,
                error: a,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            u
          );
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = s);
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
            T.test(e)
              ? (e = e.substr(0, e.length - 2))
              : y.test(e) && (e = e.substr(0, e.length - 1)),
            (r = g.exec(e))
              ? u.test(r[1]) && (e = e.substr(0, e.length - 1))
              : (r = v.exec(e)) &&
                c.test(r[1]) &&
                ((e = r[1]),
                m.test(e)
                  ? (e += "e")
                  : A.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (r = _.exec(e)) && c.test(r[1]) && (e = r[1] + "i"),
            (r = b.exec(e)) && u.test(r[1]) && (e = r[1] + n[r[2]]),
            (r = I.exec(e)) && u.test(r[1]) && (e = r[1] + i[r[2]]),
            (r = C.exec(e))
              ? d.test(r[1]) && (e = r[1])
              : (r = h.exec(e)) && d.test(r[1]) && (e = r[1]),
            (r = E.exec(e)) &&
              (d.test(r[1]) || (o.test(r[1]) && !f.test(r[1]))) &&
              (e = r[1]),
            p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var n = {
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
        s = "[aeiouy]",
        l = "([^aeiou][^aeiouy]*)",
        a = "(" + s + "[aeiou]*)",
        u = RegExp("^" + l + "?" + a + l),
        o = RegExp("^" + l + "?" + a + l + a + "?$"),
        d = RegExp("^" + l + "?(" + a + l + "){2,}"),
        c = RegExp("^" + l + "?" + s),
        f = RegExp("^" + l + s + "[^aeiouwxy]$"),
        p = /ll$/,
        E = /^(.+?)e$/,
        _ = /^(.+?)y$/,
        h = /^(.+?(s|t))(ion)$/,
        v = /^(.+?)(ed|ing)$/,
        m = /(at|bl|iz)$/,
        g = /^(.+?)eed$/,
        y = /^.+?[^s]s$/,
        T = /^.+?(ss|i)es$/,
        A = /([^aeiouylsz])\1$/,
        b = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        }),
        r("70102");
      var n = r("884691");
      function i() {
        let e = (0, n.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: r, createStore: i, children: s } = t,
              l = (0, n.useRef)();
            return (
              !l.current &&
                (r &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !i && (i = () => r)),
                (l.current = i())),
              (0, n.createElement)(e.Provider, { value: l.current }, s)
            );
          },
          useStore: function (t) {
            let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              i = (0, n.useContext)(e);
            if (!i)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return i(t, r);
          },
          useStoreApi: () => {
            let t = (0, n.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, n.useMemo)(
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
    69448: function (e, t, r) {
      "use strict";
      e.exports = r.p + "f6da6e7ed1d57e445d0e.svg";
    },
    583397: function (e, t, r) {
      "use strict";
      e.exports = r.p + "c133c9df9ee4552c188a.svg";
    },
    378675: function (e, t, r) {
      "use strict";
      e.exports = r.p + "d063b4bf17f1fee95f05.svg";
    },
    665718: function (e, t, r) {
      "use strict";
      e.exports = r.p + "5420f8fd9d89897c6448.svg";
    },
    897327: function (e, t, r) {
      "use strict";
      e.exports = r.p + "d8197d45ef3e7289594d.svg";
    },
    926607: function (e, t, r) {
      "use strict";
      function n(e, t) {
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
            return n;
          },
        });
    },
    289867: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var n = r("913144"),
        i = {
          toggleMembersSection() {
            n.default.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
          },
          toggleProfilePanelSection() {
            n.default.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
          },
          toggleSummariesSection() {
            n.default.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
          },
        };
    },
    642950: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return E;
          },
        }),
        r("222007");
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("77078"),
        u = r("54239"),
        o = r("79112"),
        d = r("49111"),
        c = r("782340"),
        f = r("44026");
      class p extends i.Component {
        render() {
          return (0, n.jsxs)("div", {
            className: f.streamerModeEnabled,
            children: [
              (0, n.jsx)("div", { className: f.streamerModeEnabledImage }),
              (0, n.jsx)(a.Clickable, {
                className: l(f.streamerModeEnabledBtn, {
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
      var E = p;
    },
    7037: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("833067");
      r.es(n, t);
    },
    177589: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return o;
          },
        });
      var n = r("429928"),
        i = r("36539"),
        s = r("502651"),
        l = r("671071"),
        a = r("322631"),
        u = r("947297");
      function o(e) {
        return (0, i.default)(e)
          ? u.XBOX_APPLICATION_ID_PREFIX + e.name
          : (0, n.default)(e) && null != e.party && null != e.party.id
            ? l.SpotifyApplication.id
            : (0, s.default)(e) && null != e.url
              ? a.TWITCH_APPLICATION_ID_PREFIX + e.url
              : null != e.application_id
                ? e.application_id
                : null;
      }
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
      var n = r("748820"),
        i = r("49671"),
        s = r("599110"),
        l = r("49111");
      let a = new (class e {
        trackEvent(e, t) {
          let r = Date.now();
          requestIdleCallback(() => {
            s.default.track(e, {
              ...(function () {
                var e, t, r;
                let n = "--campaign-id=",
                  s =
                    null !==
                      (r =
                        null === i.default || void 0 === i.default
                          ? void 0
                          : null === (t = i.default.processUtils) ||
                              void 0 === t
                            ? void 0
                            : null === (e = t.getMainArgvSync) || void 0 === e
                              ? void 0
                              : e.call(t)) && void 0 !== r
                      ? r
                      : [];
                for (let e of s)
                  if (e.startsWith(n)) return { referrer: e.substr(n.length) };
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
                      let n =
                          null != r.encodedBodySize
                            ? r.encodedBodySize
                            : r.decodedBodySize,
                        i =
                          null != r.decodedBodySize
                            ? r.decodedBodySize
                            : r.encodedBodySize,
                        s = r.transferSize;
                      null != i &&
                        null != n &&
                        ((e = !0),
                        (t.total_compressed_byte_size += n),
                        (t.total_uncompressed_byte_size += i),
                        null != s && (t.total_uncompressed_byte_size += s),
                        "resource" === r.entryType &&
                          ("script" === r.initiatorType &&
                            null != r.name &&
                            null != r.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += n),
                            (t.js_uncompressed_byte_size += i),
                            null != s && (t.js_uncompressed_byte_size += s)),
                          "link" === r.initiatorType &&
                            null != r.name &&
                            null != r.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += n),
                            (t.css_uncompressed_byte_size += i),
                            null != s && (t.css_uncompressed_byte_size += s))));
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
            (this.trackEvent(l.AnalyticEvents.APP_UI_VIEWED, e),
            (this.appUIViewed = !0));
        }
        constructor() {
          (this.loadId = (0, n.v4)()), (this.appUIViewed = !1);
        }
      })();
      function u(e) {
        a.trackAppUIViewed(e);
      }
    },
    893980: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          trackProfilePanelViewed: function () {
            return u;
          },
          trackProfilePanelToggled: function () {
            return o;
          },
        });
      var n = r("373469"),
        i = r("824563"),
        s = r("27618"),
        l = r("599110"),
        a = r("49111");
      let u = e => {
          let {
            displayProfile: t,
            isMobile: r,
            loadDurationMs: n,
            activity: i,
            customStatusActivity: s,
            status: u,
          } = e;
          l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: r,
            has_activity:
              null != i &&
              (null == i ? void 0 : i.type) !== a.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == i ? void 0 : i.type) === a.ActivityTypes.PLAYING,
            load_duration_ms: n,
            profile_user_status: u,
            has_custom_status: null != s,
            has_profile_effect: null != t.profileEffectId,
            ...d(t),
          });
        },
        o = (e, t) => {
          l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...d(e),
          });
        },
        d = e => {
          var t;
          if (null == e) return {};
          let r = e.userId,
            l = null != n.default.getAnyStreamForUser(r),
            u = i.default.findActivity(r, e => {
              let { type: t } = e;
              return l
                ? t === a.ActivityTypes.PLAYING
                : t !== a.ActivityTypes.CUSTOM_STATUS;
            }),
            o = null == u ? void 0 : u.assets,
            d = s.default.isFriend(r);
          return {
            has_images: !!(null !== (t = null == o ? void 0 : o.large_image) &&
            void 0 !== t
              ? t
              : null == o
                ? void 0
                : o.small_image),
            is_friend: d,
            viewed_profile_user_id: r,
            profile_has_nitro_customization: e.hasPremiumCustomization(),
            profile_has_theme_color_customized: e.hasThemeColors(),
            profile_has_theme_animation: null != e.popoutAnimationParticleType,
          };
        };
    },
    322631: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          TWITCH_APPLICATION_ID_PREFIX: function () {
            return a;
          },
          default: function () {
            return n;
          },
        });
      var n,
        i = r("376556"),
        s = r("653047"),
        l = r("782340");
      let a = "twitch:";
      n = class extends s.default {
        getIconURL() {
          return i.default.get("twitch").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(a).concat(e.url)),
            (this.name =
              l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH);
        }
      };
    },
    947297: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          XBOX_APPLICATION_ID_PREFIX: function () {
            return l;
          },
          default: function () {
            return n;
          },
        });
      var n,
        i = r("376556"),
        s = r("653047");
      let l = "xbox:";
      n = class extends s.default {
        getIconURL() {
          return i.default.get("xbox").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(l).concat(e.name)),
            (this.name = e.name);
        }
      };
    },
    476108: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r("446674"),
        i = r("95410"),
        s = r("913144"),
        l = r("49111");
      let a = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = a,
        o = "LAST_VIEWED_PATH";
      class d extends n.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
          u = null != e ? e : a;
        }
        get defaultRoute() {
          return l.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : l.Routes.ME;
        }
        get fallbackRoute() {
          return l.Routes.ME;
        }
        getState() {
          return u;
        }
      }
      (d.displayName = "DefaultRouteStore"),
        (d.persistKey = "DefaultRouteStore"),
        (d.migrations = [
          () => {
            let e = i.Storage.get(o, null);
            return i.Storage.remove(o), { lastViewedPath: e };
          },
        ]);
      var c = new d(s.default, {
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
    1017: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return m;
          },
        });
      var n = r("446674"),
        i = r("913144"),
        s = r("177589"),
        l = r("824563"),
        a = r("843823"),
        u = r("697218"),
        o = r("49111");
      let d = !1,
        c = {},
        f = {};
      function p(e) {
        let t = !1;
        return (
          e.forEach(e => {
            t = !1 !== _(e) || t;
          }),
          t
        );
      }
      function E(e) {
        let t = f[e];
        if (null == t) return !1;
        let r = t.gameId;
        return (
          null != c[r] &&
            ((c = { ...c }),
            delete c[r][e],
            0 === Object.values(c[r]).length && delete c[r]),
          (f = { ...f }),
          delete f[e],
          !0
        );
      }
      function _(e) {
        let { user: t, activities: r } = e;
        if (null == t) return !1;
        let n = r.filter(e => e.type !== o.ActivityTypes.CUSTOM_STATUS);
        if (0 === n.length) return E(t.id);
        let i = !1;
        return (
          n.forEach(e => {
            (function (e, t) {
              var r, n, i, l;
              let a = (0, s.default)(e);
              if (null == a) return E(t.id);
              let u = f[t.id];
              null != u && u.gameId !== a && E(t.id);
              let o =
                  null !==
                    (n =
                      null === (r = e.timestamps) || void 0 === r
                        ? void 0
                        : r.start) && void 0 !== n
                    ? n
                    : Date.now(),
                d = { userId: t.id, activity: e, startedPlaying: o };
              return (
                (i = a),
                (l = d),
                (c = { ...c, [i]: { ...c[i], [l.userId]: l } }),
                (f = {
                  ...f,
                  [l.userId]: { gameId: i, startedPlaying: l.startedPlaying },
                }),
                !0
              );
            })(e, t) && (i = !0);
          }),
          i
        );
      }
      function h() {
        let e = !1;
        if (!a.default.needsRefresh() && !d) {
          let t;
          (c = {}),
            (f = {}),
            (t = !1),
            l.default.getUserIds().forEach(e => {
              let r = u.default.getUser(e);
              null != r &&
                (t =
                  _({ user: r, activities: l.default.getActivities(e) }) || t);
            }),
            (e = t);
        }
        return (d = !a.default.needsRefresh()), e;
      }
      class v extends n.default.Store {
        initialize() {
          this.waitFor(a.default), this.syncWith([a.default], h);
        }
        get games() {
          return c;
        }
        get usersPlaying() {
          return f;
        }
        get gameIds() {
          return Object.keys(c);
        }
        getNowPlaying(e) {
          return c[e];
        }
        getUserGame(e) {
          return f[e];
        }
      }
      v.displayName = "NowPlayingStore";
      var m = new v(i.default, {
        CONNECTION_OPEN: function () {
          (c = {}), (f = {});
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
          let { guilds: t, presences: r } = e,
            n = !1;
          return (
            t.forEach(e => {
              p(e.presences) && (n = !0);
            }),
            p(r) && (n = !0),
            n
          );
        },
        LOGOUT: function () {
          (c = {}), (f = {});
        },
        PRESENCE_UPDATES: function (e) {
          let { updates: t } = e;
          return t.map(e => _(e)).some(e => e);
        },
        PRESENCES_REPLACE: function (e) {
          let { presences: t } = e;
          return p(t);
        },
      });
    },
    287850: function (e, t, r) {
      "use strict";
      let n, i, s;
      r.r(t),
        r.d(t, {
          default: function () {
            return O;
          },
        }),
        r("222007"),
        r("424973");
      var l,
        a,
        u = r("866227"),
        o = r.n(u),
        d = r("446674"),
        c = r("407846"),
        f = r("913144"),
        p = r("21121"),
        E = r("934306"),
        _ = r("288518"),
        h = r("486503"),
        v = r("233069"),
        m = r("42203"),
        g = r("305961"),
        y = r("660478"),
        T = r("282109"),
        A = r("697218"),
        b = r("299039"),
        I = r("724210");
      ((a = l || (l = {})).DEFAULT = "DEFAULT"), (a.FAVORITE = "FAVORITE");
      let C = new c.SecondaryIndexMap(
        e => {
          let { isRequest: t, isFavorite: r } = e;
          return t ? [] : [r ? "FAVORITE" : "DEFAULT"];
        },
        e => {
          let { lastMessageId: t } = e;
          return -t;
        }
      );
      function S(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, r;
                let n =
                    null !==
                      (r =
                        null !== (t = y.default.lastMessageId(e.id)) &&
                        void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== r
                      ? r
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = o(i).valueOf(),
                    t = b.default.fromTimestamp(e);
                  return b.default.compare(n, t) > 0 ? n : t;
                }
                return n;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite:
            T.default.isMessagesFavorite(e.id) &&
            (0, p.isInMainTabsExperiment)(),
          isRequest: _.default.isMessageRequest(e.id) || h.default.isSpam(e.id),
        };
      }
      function N() {
        C.clear(),
          Object.values(m.default.getMutablePrivateChannels()).forEach(e => {
            C.set(e.id, S(e));
          }),
          (0, p.isInMainTabsExperiment)() &&
            (0, E.isSplitMessagesTab)() &&
            T.default.getAddedToMessages().forEach(e => {
              let t = m.default.getChannel(e);
              null != t &&
                (0, v.isGuildTextChannelType)(t.type) &&
                C.set(t.id, S(t));
            });
      }
      function P() {
        let e = m.default.getMutablePrivateChannels();
        for (let t in e) C.set(t, S(e[t]));
      }
      let R =
        ((n = []),
        (i = []),
        (s = []),
        () => {
          let e = C.values("FAVORITE"),
            t = C.values("DEFAULT");
          return (
            (n !== e || i !== t) &&
              ((s = []),
              e.forEach(e => {
                let { channelId: t } = e;
                return s.push(t);
              }),
              (n = e),
              t.forEach(e => {
                let { channelId: t } = e;
                return s.push(t);
              }),
              (i = t)),
            s
          );
        });
      class x extends d.default.Store {
        initialize() {
          this.waitFor(m.default, g.default, A.default, _.default, T.default),
            this.syncWith([T.default, _.default], N);
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
              let { channelId: r, lastMessageId: n } = t;
              e[r] = n;
            }),
            e
          );
        }
      }
      x.displayName = "PrivateChannelSortStore";
      var O = new x(f.default, {
        CONNECTION_OPEN: N,
        CONNECTION_OPEN_SUPPLEMENTAL: N,
        OVERLAY_INITIALIZE: N,
        CACHE_LOADED: P,
        CACHE_LOADED_LAZY: P,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          t.forEach(e => {
            ((0, v.isPrivate)(e.type) || C.has(e.id)) && C.set(e.id, S(e));
          });
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          if (
            !(0, v.isPrivate)(t.type) ||
            t.id === I.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
          )
            return !1;
          C.set(t.id, S(t));
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          return C.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: r } = e;
          if (!C.has(t)) return !1;
          let n = m.default.getChannel(t);
          return null != n && C.set(t, S(n, r.id));
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
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("546671"),
        u = r("711603");
      let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
        d = {
          [o.UP]: u.up,
          [o.RIGHT]: u.right,
          [o.DOWN]: u.down,
          [o.LEFT]: u.left,
        };
      class c extends i.PureComponent {
        render() {
          let { direction: e, className: t } = this.props;
          return (0, n.jsx)(a.default, {
            className: l(u.arrow, t, { [d[e]]: !0 }),
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
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("77078"),
        u = r("145131"),
        o = r("461380"),
        d = r("361466");
      class c extends i.PureComponent {
        handleClick(e) {
          let { onBreadcrumbClick: t } = this.props;
          null != t && t(e);
        }
        render() {
          let { breadcrumbs: e, className: t } = this.props,
            r = e.map(this.renderBreadcrumb);
          return (0, n.jsx)(u.default, {
            justify: u.default.Justify.START,
            className: l(d.breadcrumbs, t),
            children: r,
          });
        }
        constructor(...e) {
          super(...e),
            (this.renderBreadcrumb = (e, t) => {
              let {
                  activeId: r,
                  onBreadcrumbClick: i,
                  breadcrumbs: s,
                  renderCustomBreadcrumb: u,
                  separatorClassName: c,
                } = this.props,
                f = e.id === r,
                p = t === s.length - 1,
                E =
                  null != u
                    ? u(e, f)
                    : (0, n.jsx)("span", {
                        className: l(d.breadcrumb, {
                          [d.activeBreadcrumb]: f,
                          [d.interactiveBreadcrumb]: null != i,
                        }),
                        children: e.label,
                      });
              return (0, n.jsxs)(
                "div",
                {
                  className: l(d.breadcrumbWrapper, {
                    [d.breadcrumbFinalWrapper]: p,
                  }),
                  children: [
                    null != i
                      ? (0, n.jsx)(a.Clickable, {
                          tag: "span",
                          onClick: () => this.handleClick(e),
                          className: d.breadcrumbClickWrapper,
                          children: E,
                        })
                      : E,
                    p
                      ? null
                      : (0, n.jsx)(o.default, {
                          className: l(d.breadcrumbArrow, c),
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
    440351: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("77078"),
        u = r("145131"),
        o = r("750457"),
        d = r("890957");
      class c extends i.PureComponent {
        render() {
          let {
            title: e,
            description: t,
            agreement: r,
            disagreement: i,
            onAgree: s,
            onDisagree: c,
            imageClassName: f,
          } = this.props;
          return (0, n.jsxs)(u.default, {
            className: o.gatedContent,
            justify: u.default.Justify.CENTER,
            align: u.default.Align.CENTER,
            direction: u.default.Direction.VERTICAL,
            children: [
              (0, n.jsx)("div", { className: l(o.image, f) }),
              (0, n.jsx)("div", {
                className: l(o.title, d.marginBottom8),
                children: e,
              }),
              (0, n.jsx)("div", {
                className: l(o.description, d.marginBottom20),
                children: t,
              }),
              (0, n.jsxs)(u.default, {
                justify: u.default.Justify.CENTER,
                align: u.default.Align.CENTER,
                grow: 0,
                children: [
                  null != i
                    ? (0, n.jsx)(a.Button, {
                        className: o.action,
                        size: a.ButtonSizes.LARGE,
                        color: a.ButtonColors.PRIMARY,
                        onClick: c,
                        children: i,
                      })
                    : null,
                  null != r
                    ? (0, n.jsx)(a.Button, {
                        className: o.action,
                        color: a.Button.Colors.RED,
                        size: a.ButtonSizes.LARGE,
                        onClick: s,
                        children: r,
                      })
                    : null,
                ],
              }),
            ],
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
            return a;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("469563"),
        s = r("7037"),
        l = r("246053"),
        a = (0, i.replaceIcon)(function (e) {
          return (0, n.jsx)(l.default, {
            ...e,
            direction: l.default.Directions.UP,
          });
        }, s.ArrowSmallUpIcon);
    },
    833067: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ArrowSmallUpIcon: function () {
            return l;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("669491"),
        s = r("82169");
      let l = e => {
        let {
          width: t = 24,
          height: r = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: r,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: a,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=35e9dcd902b9841973f7.js.map

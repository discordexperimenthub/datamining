(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40636"],
  {
    766665: function (e, t, n) {
      var i = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && i
          ? i(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    69448: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6da6e7ed1d57e445d0e.svg";
    },
    969715: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UnfeatureItemConfirmationModal: function () {
            return I;
          },
          FeatureItemConfirmationModal: function () {
            return f;
          },
          FeatureMessageConfirmationModal: function () {
            return E;
          },
          FeatureForumPostConfirmationModal: function () {
            return _;
          },
        }),
        n("222007");
      var i = n("37983"),
        s = n("884691"),
        l = n("866227"),
        a = n.n(l),
        u = n("611221"),
        d = n("77078"),
        r = n("599417"),
        o = n("699473"),
        c = n("713810"),
        h = n("782340"),
        m = n("43229");
      function I(e) {
        let { featureableItem: t, header: n, body: l, ...a } = e,
          [u, o] = s.useState(null),
          [m, I] = s.useState(!1);
        return (0, i.jsxs)(d.ConfirmModal, {
          header: n,
          confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
          confirmButtonColor: d.Button.Colors.RED,
          cancelText: h.default.Messages.CANCEL,
          loading: m,
          onConfirm: async () => {
            try {
              I(!0), await (0, c.unfeatureGuildFeedItem)(t), I(!1);
            } catch (e) {
              throw (o(new r.default(e)), I(!1), e);
            }
          },
          ...a,
          children: [
            (0, i.jsx)(d.Text, { variant: "text-md/normal", children: l }),
            null != u &&
              (0, i.jsx)(d.Text, {
                color: "text-danger",
                variant: "text-xs/normal",
                children: u.message,
              }),
          ],
        });
      }
      function f(e) {
        let {
            featureableItem: t,
            expiresSeconds: n,
            header: l,
            children: u,
            options: o,
            ...I
          } = e,
          [f, E] = s.useState(null),
          [_, F] = s.useState(!1);
        return (0, i.jsxs)(d.ConfirmModal, {
          header: l,
          confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
          cancelText: h.default.Messages.CANCEL,
          confirmButtonColor: d.Button.Colors.BRAND,
          loading: _,
          onConfirm: async () => {
            try {
              let e = a().add(n, "second").toDate();
              F(!0), await (0, c.featureGuildFeedItem)(t, e, o);
            } catch (e) {
              throw (E(new r.default(e)), e);
            } finally {
              F(!1);
            }
          },
          ...I,
          children: [
            null != f &&
              (0, i.jsx)(d.Text, {
                className: m.featureModalError,
                color: "text-danger",
                variant: "text-xs/normal",
                children: f.message,
              }),
            u,
          ],
        });
      }
      function E(e) {
        let {
          message: t,
          guildId: n,
          channel: s,
          expiresSeconds: l,
          timePeriod: a,
          options: r,
          ...c
        } = e;
        return (0, i.jsxs)(f, {
          ...c,
          featureableItem: {
            guildId: n,
            entity: t,
            entityType: u.GuildFeedItemTypes.MESSAGE,
          },
          header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
          expiresSeconds: l,
          options: r,
          children: [
            (0, i.jsx)(d.Text, {
              className: m.featureModalText,
              variant: "text-md/normal",
              children:
                h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format(
                  { timePeriod: a }
                ),
            }),
            (0, i.jsx)("div", {
              className: m.featureModalMessage,
              children: (0, i.jsx)(o.default, {
                channel: s,
                message: t,
                disableInteraction: !0,
              }),
            }),
          ],
        });
      }
      function _(e) {
        let {
          thread: t,
          guildId: n,
          expiresSeconds: s,
          timePeriod: l,
          options: a,
          ...r
        } = e;
        return (0, i.jsx)(f, {
          ...r,
          featureableItem: {
            guildId: n,
            entity: t,
            entityType: u.GuildFeedItemTypes.FORUM_POST,
          },
          header:
            h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
          expiresSeconds: s,
          options: a,
          children: (0, i.jsx)(d.Text, {
            className: m.featureModalText,
            variant: "text-md/normal",
            children:
              h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format(
                { threadName: t.name, timePeriod: l }
              ),
          }),
        });
      }
    },
    887446: function (e, t, n) {
      "use strict";
      let i, s, l, a;
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var u = n("748820"),
        d = n("446674"),
        r = n("913144"),
        o = n("724210"),
        c = n("515631");
      let h = {};
      function m(e) {
        return { guildId: e, sessionId: (0, u.v4)() };
      }
      function I(e) {
        null != l && l.guildId === e ? ((s = l), (l = void 0)) : (s = m(e));
      }
      class f extends d.default.Store {
        getSavedScrollPosition(e) {
          return h[e];
        }
        getHomeSessionId(e) {
          return null != s && s.guildId === e
            ? s.sessionId
            : null != l && l.guildId === e
              ? l.sessionId
              : void 0;
        }
        getHomeSessionSource(e) {
          return null != a && a.guildId === e
            ? a.source
            : c.GuildHomeLandingSource.ORGANIC;
        }
      }
      f.displayName = "GuildHomeStore";
      var E = new f(r.default, {
        CONNECTION_OPEN: function () {
          h = {};
        },
        GUILD_FEED_FETCH_FRESH_START: function (e) {
          let { guildId: t } = e;
          delete h[t];
        },
        GUILD_HOME_SET_SCROLL_POSITION: function (e) {
          let { guildId: t, scrollPosition: n } = e;
          h[t] = n;
        },
        CHANNEL_SELECT: function (e) {
          let { guildId: t, channelId: n } = e;
          if (
            null == t ||
            null == n ||
            !(0, o.isStaticChannelRoute)(n) ||
            !(0, o.isGuildHomeChannel)(n)
          ) {
            (i = void 0), (s = void 0), (l = void 0), (a = void 0);
            return;
          }
          let u = (0, o.buildGuildStaticChannelId)(n, t);
          if (i === u || (null != s && s.guildId === t)) return !1;
          I(t), (i = u), null != a && a.guildId !== t && (a = void 0);
        },
        CHANNEL_PRELOAD: function (e) {
          let { guildId: t, channelId: n } = e;
          if (
            null == t ||
            null == n ||
            !(0, o.isStaticChannelRoute)(n) ||
            !(0, o.isGuildHomeChannel)(n)
          ) {
            l = void 0;
            return;
          }
          if (null != l && l.guildId === t) return !1;
          l = m(t);
        },
        GUILD_HOME_SET_SOURCE: function (e) {
          let { source: t, guildId: n } = e;
          a = { guildId: n, source: t };
        },
        GUILD_HOME_ENSURE_HOME_SESSION: function (e) {
          let { guildId: t } = e;
          if (null != s && s.guildId === t) return !1;
          I(t);
        },
        LOGOUT: function () {
          (s = void 0), (l = void 0), (a = void 0);
        },
      });
    },
    393027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("803182"),
        s = n("308503"),
        l = n("49111");
      function a(e) {
        let t = (0, i.matchPath)(null != e ? e : "", {
          path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === l.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.matchPath)(null != e ? e : "", {
          path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      var u = (0, s.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = a(t);
          e({ path: t, guildId: n, channelId: i });
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = a(t);
          e({ path: null, guildId: n, channelId: i, basePath: t });
        },
      }));
    },
    69890: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMessageCountText: function () {
            return u;
          },
          formatMessageCountLabel: function () {
            return r;
          },
        });
      var i = n("299039"),
        s = n("648564"),
        l = n("782340");
      let a = e => i.default.compare("992549565104128000", e) > -1,
        u = (e, t) => {
          if (null == e || e < 0) return "0";
          {
            let n = a(t);
            return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD
              ? "50+"
              : e >= s.MAX_THREAD_MESSAGE_COUNT
                ? "100k+"
                : "".concat(e);
          }
        },
        d = (e, t, n) => {
          let i = u(e, n);
          return "0" === i
            ? l.default.Messages.SEE_THREAD
            : t.format({ count: i });
        },
        r = (e, t) => d(e, l.default.Messages.THREAD_MESSAGE_COUNT, t);
    },
    938237: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          markAnalyticsFeedItemSeen: function () {
            return s;
          },
          markAnalyticsFeedItemUnseen: function () {
            return l;
          },
          flushAnalyticsFeedItems: function () {
            return a;
          },
        });
      var i = n("913144");
      function s(e, t, n) {
        i.default.dispatch({
          type: "ANALYTICS_FEED_ITEM_SEEN",
          id: e,
          feedItemId: t,
          timestampMillis: n,
        });
      }
      function l(e, t, n) {
        i.default.dispatch({
          type: "ANALYTICS_FEED_ITEM_UNSEEN",
          id: e,
          feedItemId: t,
          timestampMillis: n,
        });
      }
      function a(e, t) {
        i.default.dispatch({ type: "ANALYTICS_FEED_FLUSH", id: e, force: t });
      }
    },
    395118: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AnalyticsFeedTypes: function () {
            return i;
          },
          ForceFlushType: function () {
            return s;
          },
          AnalyticsFeedItemSeenManager: function () {
            return c;
          },
        }),
        n("424973"),
        n("222007");
      var i,
        s,
        l,
        a,
        u = n("627445"),
        d = n.n(u),
        r = n("913144");
      ((l = i || (i = {})).GUILD_HOME = "guild_home"),
        (l.FORUM_CHANNEL = "forum_channel"),
        ((a = s || (s = {}))[(a.IMMEDIATE = 0)] = "IMMEDIATE"),
        (a[(a.IMMEDIATE_WITH_COOLDOWN = 1)] = "IMMEDIATE_WITH_COOLDOWN"),
        (a[(a.IMMEDIATE_WITH_DELAY = 2)] = "IMMEDIATE_WITH_DELAY");
      class o {
        maybeMarkSeen(e) {
          let t = this.seenIntervals[this.seenIntervals.length - 1];
          return (
            (null == t || null != t.endTimeMillis) &&
            (this.seenIntervals.push({ startTimeMillis: e }), !0)
          );
        }
        maybeMarkUnseen(e) {
          let t = this.seenIntervals[this.seenIntervals.length - 1];
          return (
            null != t && null == t.endTimeMillis && ((t.endTimeMillis = e), !0)
          );
        }
        isVisible() {
          let e = this.seenIntervals[this.seenIntervals.length - 1];
          return (
            (null == e ? void 0 : e.startTimeMillis) != null &&
            (null == e ? void 0 : e.endTimeMillis) == null
          );
        }
        computeSeenTimeDestructive(e) {
          let t = 0,
            n = [];
          for (let i of this.seenIntervals) {
            if (null != i.endTimeMillis) {
              t += i.endTimeMillis - i.startTimeMillis;
              continue;
            }
            if (e) {
              let e = Date.now();
              (t += e - i.startTimeMillis), n.push({ startTimeMillis: e });
              continue;
            }
            n.push(i);
          }
          return (
            d(n.length < 2, "there should only be a single left over data"),
            (this.seenIntervals = n),
            Math.round(t)
          );
        }
        constructor() {
          this.seenIntervals = [];
        }
      }
      class c {
        maybeFlushSeenItems(e) {
          if (
            (null == e && Date.now() - this._lastFlushTimeMillis < 6e4) ||
            (1 === e && Date.now() - this._lastFlushTimeMillis < 3e3)
          )
            return Promise.resolve();
          let t = this.createFlushSeenItemsFunction(e);
          return null == t
            ? Promise.resolve()
            : ((this._lastFlushTimeMillis = Date.now()), 0 === e || 1 === e)
              ? new Promise(async e => {
                  await t(), e();
                })
              : new Promise(e => {
                  setTimeout(async () => {
                    await t(), e();
                  }, 100);
                });
        }
        constructor({ id: e, windowId: t, isPaused: n }) {
          (this.initialize = () => {
            var e;
            r.default.subscribe(
              "ANALYTICS_FEED_ITEM_SEEN",
              this.handleFeedItemSeen
            ),
              r.default.subscribe(
                "ANALYTICS_FEED_ITEM_UNSEEN",
                this.handleFeedItemUnseen
              ),
              r.default.subscribe(
                "ANALYTICS_FEED_FLUSH",
                this.handleFeedItemFlush
              ),
              r.default.subscribe(
                "APP_STATE_UPDATE",
                this.handleAppStateUpdate
              ),
              r.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen),
              r.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose),
              r.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
              null === (e = this.onInitialize) || void 0 === e || e.call(this);
          }),
            (this.terminate = () => {
              var e;
              r.default.unsubscribe(
                "ANALYTICS_FEED_ITEM_SEEN",
                this.handleFeedItemSeen
              ),
                r.default.unsubscribe(
                  "ANALYTICS_FEED_ITEM_UNSEEN",
                  this.handleFeedItemUnseen
                ),
                r.default.unsubscribe(
                  "ANALYTICS_FEED_FLUSH",
                  this.handleFeedItemFlush
                ),
                r.default.unsubscribe(
                  "APP_STATE_UPDATE",
                  this.handleAppStateUpdate
                ),
                r.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen),
                r.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose),
                r.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
                null === (e = this.onTerminate) || void 0 === e || e.call(this),
                this.maybeFlushSeenItems(0);
            }),
            (this.handleFeedItemFlush = e => {
              let { id: t, force: n } = e;
              this._id === t && this.maybeFlushSeenItems(n);
            }),
            (this.handleFeedItemSeen = e => {
              var t;
              let n = e.id,
                i = e.timestampMillis,
                s = e.feedItemId;
              if (n !== this._id) return;
              if (this._paused) {
                this._pausedFeedItemIds.add(s);
                return;
              }
              let l = this.getTrackedFeedItem(s),
                a = l.maybeMarkSeen(i);
              null === (t = this.onFeedItemSeen) ||
                void 0 === t ||
                t.call(this, s, a);
            }),
            (this.handleFeedItemUnseen = e => {
              var t;
              let n = e.id,
                i = e.timestampMillis,
                s = e.feedItemId;
              if (n !== this._id) return;
              this._paused && this._pausedFeedItemIds.delete(s);
              let l = this.getTrackedFeedItem(s),
                a = l.maybeMarkUnseen(i);
              null === (t = this.onFeedItemUnseen) ||
                void 0 === t ||
                t.call(this, s, a),
                this.maybeFlushSeenItems();
            }),
            (this.getTrackedFeedItem = e => (
              null == this.trackedFeedItems[e] &&
                (this.trackedFeedItems[e] = new o()),
              this.trackedFeedItems[e]
            )),
            (this.getVisibleFeedItemIds = () => {
              let e = Object.keys(this.trackedFeedItems);
              return new Set(
                e.filter(e => {
                  var t;
                  return null === (t = this.trackedFeedItems[e]) || void 0 === t
                    ? void 0
                    : t.isVisible();
                })
              );
            }),
            (this.handleDrawerClose = () => {
              this._isReactNavigationFocused && this.resume();
            }),
            (this.handleDrawerOpen = () => {
              this._isReactNavigationFocused && this.pause();
            }),
            (this.handleAppStateUpdate = e => {
              let { state: t } = e;
              "active" === t && this._isReactNavigationFocused && this.resume(),
                "background" === t &&
                  (this._isReactNavigationFocused && this.pause(),
                  this.maybeFlushSeenItems(0));
            }),
            (this.clearPausedFeedItemIds = () => {
              (this._pausedFeedItemIds = new Set()), (this._paused = !1);
            }),
            (this.pause = () => {
              if (this._paused) return;
              let e = this.getVisibleFeedItemIds();
              e.forEach(e => {
                this.handleFeedItemUnseen({
                  id: this._id,
                  feedItemId: e,
                  timestampMillis: Date.now(),
                  type: "ANALYTICS_FEED_ITEM_UNSEEN",
                });
              }),
                (this._paused = !0),
                (this._pausedFeedItemIds = e);
            }),
            (this.resume = () => {
              this._paused &&
                ((this._paused = !1),
                this._pausedFeedItemIds.forEach(e => {
                  this.handleFeedItemSeen({
                    id: this._id,
                    feedItemId: e,
                    timestampMillis: Date.now(),
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                  });
                }),
                this.clearPausedFeedItemIds());
            }),
            (this.handleReactNavigationFocus = (e, t) => {
              (this._isReactNavigationFocused = e),
                this._isReactNavigationFocused && !t
                  ? this.resume()
                  : this.pause();
            }),
            (this.handleWindowFocus = e => {
              this._windowId === e.windowId &&
                (e.focused ? this.resume() : this.pause());
            }),
            (this.trackedFeedItems = {}),
            (this._id = e),
            (this._windowId = t),
            (this._pausedFeedItemIds = new Set()),
            (this._paused = null != n && n),
            (this._isReactNavigationFocused = !0),
            (this._lastFlushTimeMillis = Date.now());
        }
      }
    },
    98013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeDesktopDownloadURL: function () {
            return r;
          },
          getPlatformReadableName: function () {
            return c;
          },
          getCurrentPlatformDownloadURL: function () {
            return h;
          },
          getMobileDownloadLink: function () {
            return m;
          },
        });
      var i = n("597755"),
        s = n.n(i),
        l = n("815157"),
        a = n("271938"),
        u = n("49111");
      let d = "linux";
      function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(u.DownloadLinks.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function o() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = s.os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? d
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function c(e) {
        return { win: "Windows", osx: "Mac", [d]: "Linux" }[o(e)];
      }
      function h() {
        let e = o();
        return r(e, !1, e === d ? "tar.gz" : null);
      }
      function m(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, l.default)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, l.default)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=df70e5bd78f56abb64dd.js.map

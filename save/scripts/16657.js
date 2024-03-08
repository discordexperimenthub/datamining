(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16657"],
  {
    766665: function (e, t, n) {
      var s = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && s
          ? s(e, t, {
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
            return _;
          },
          FeatureForumPostConfirmationModal: function () {
            return E;
          },
        }),
        n("222007");
      var s = n("37983"),
        i = n("884691"),
        a = n("866227"),
        l = n.n(a),
        u = n("611221"),
        r = n("77078"),
        d = n("599417"),
        o = n("699473"),
        h = n("713810"),
        c = n("782340"),
        m = n("43229");
      function I(e) {
        let { featureableItem: t, header: n, body: a, ...l } = e,
          [u, o] = i.useState(null),
          [m, I] = i.useState(!1);
        return (0, s.jsxs)(r.ConfirmModal, {
          header: n,
          confirmText: c.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
          confirmButtonColor: r.Button.Colors.RED,
          cancelText: c.default.Messages.CANCEL,
          loading: m,
          onConfirm: async () => {
            try {
              I(!0), await (0, h.unfeatureGuildFeedItem)(t), I(!1);
            } catch (e) {
              throw (o(new d.default(e)), I(!1), e);
            }
          },
          ...l,
          children: [
            (0, s.jsx)(r.Text, { variant: "text-md/normal", children: a }),
            null != u &&
              (0, s.jsx)(r.Text, {
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
            header: a,
            children: u,
            options: o,
            ...I
          } = e,
          [f, _] = i.useState(null),
          [E, F] = i.useState(!1);
        return (0, s.jsxs)(r.ConfirmModal, {
          header: a,
          confirmText: c.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
          cancelText: c.default.Messages.CANCEL,
          confirmButtonColor: r.Button.Colors.BRAND,
          loading: E,
          onConfirm: async () => {
            try {
              let e = l().add(n, "second").toDate();
              F(!0), await (0, h.featureGuildFeedItem)(t, e, o);
            } catch (e) {
              throw (_(new d.default(e)), e);
            } finally {
              F(!1);
            }
          },
          ...I,
          children: [
            null != f &&
              (0, s.jsx)(r.Text, {
                className: m.featureModalError,
                color: "text-danger",
                variant: "text-xs/normal",
                children: f.message,
              }),
            u,
          ],
        });
      }
      function _(e) {
        let {
          message: t,
          guildId: n,
          channel: i,
          expiresSeconds: a,
          timePeriod: l,
          options: d,
          ...h
        } = e;
        return (0, s.jsxs)(f, {
          ...h,
          featureableItem: {
            guildId: n,
            entity: t,
            entityType: u.GuildFeedItemTypes.MESSAGE,
          },
          header: c.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
          expiresSeconds: a,
          options: d,
          children: [
            (0, s.jsx)(r.Text, {
              className: m.featureModalText,
              variant: "text-md/normal",
              children:
                c.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format(
                  { timePeriod: l }
                ),
            }),
            (0, s.jsx)("div", {
              className: m.featureModalMessage,
              children: (0, s.jsx)(o.default, {
                channel: i,
                message: t,
                disableInteraction: !0,
              }),
            }),
          ],
        });
      }
      function E(e) {
        let {
          thread: t,
          guildId: n,
          expiresSeconds: i,
          timePeriod: a,
          options: l,
          ...d
        } = e;
        return (0, s.jsx)(f, {
          ...d,
          featureableItem: {
            guildId: n,
            entity: t,
            entityType: u.GuildFeedItemTypes.FORUM_POST,
          },
          header:
            c.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
          expiresSeconds: i,
          options: l,
          children: (0, s.jsx)(r.Text, {
            className: m.featureModalText,
            variant: "text-md/normal",
            children:
              c.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format(
                { threadName: t.name, timePeriod: a }
              ),
          }),
        });
      }
    },
    393027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("803182"),
        i = n("308503"),
        a = n("49111");
      function l(e) {
        let t = (0, s.matchPath)(null != e ? e : "", {
          path: a.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, s.matchPath)(null != e ? e : "", {
          path: a.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      var u = (0, i.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: s } = l(t);
          e({ path: t, guildId: n, channelId: s });
        },
        resetPath(t) {
          let { guildId: n, channelId: s } = l(t);
          e({ path: null, guildId: n, channelId: s, basePath: t });
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
            return d;
          },
        });
      var s = n("299039"),
        i = n("648564"),
        a = n("782340");
      let l = e => s.default.compare("992549565104128000", e) > -1,
        u = (e, t) => {
          if (null == e || e < 0) return "0";
          {
            let n = l(t);
            return (null == t || n) && e >= i.MAX_THREAD_MESSAGE_COUNT_OLD
              ? "50+"
              : e >= i.MAX_THREAD_MESSAGE_COUNT
                ? "100k+"
                : "".concat(e);
          }
        },
        r = (e, t, n) => {
          let s = u(e, n);
          return "0" === s
            ? a.default.Messages.SEE_THREAD
            : t.format({ count: s });
        },
        d = (e, t) => r(e, a.default.Messages.THREAD_MESSAGE_COUNT, t);
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return l;
          },
          useUID: function () {
            return u;
          },
          UID: function () {
            return r;
          },
        });
      var s = n("995008"),
        i = n.n(s),
        a = n("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(e);
        },
        u = () => (0, a.useLazyValue)(() => l()),
        r = e => {
          let { children: t } = e;
          return t(u());
        };
    },
    938237: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          markAnalyticsFeedItemSeen: function () {
            return i;
          },
          markAnalyticsFeedItemUnseen: function () {
            return a;
          },
          flushAnalyticsFeedItems: function () {
            return l;
          },
        });
      var s = n("913144");
      function i(e, t, n) {
        s.default.dispatch({
          type: "ANALYTICS_FEED_ITEM_SEEN",
          id: e,
          feedItemId: t,
          timestampMillis: n,
        });
      }
      function a(e, t, n) {
        s.default.dispatch({
          type: "ANALYTICS_FEED_ITEM_UNSEEN",
          id: e,
          feedItemId: t,
          timestampMillis: n,
        });
      }
      function l(e, t) {
        s.default.dispatch({ type: "ANALYTICS_FEED_FLUSH", id: e, force: t });
      }
    },
    395118: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AnalyticsFeedTypes: function () {
            return s;
          },
          ForceFlushType: function () {
            return i;
          },
          AnalyticsFeedItemSeenManager: function () {
            return h;
          },
        }),
        n("424973"),
        n("222007");
      var s,
        i,
        a,
        l,
        u = n("627445"),
        r = n.n(u),
        d = n("913144");
      ((a = s || (s = {})).GUILD_HOME = "guild_home"),
        (a.FORUM_CHANNEL = "forum_channel"),
        ((l = i || (i = {}))[(l.IMMEDIATE = 0)] = "IMMEDIATE"),
        (l[(l.IMMEDIATE_WITH_COOLDOWN = 1)] = "IMMEDIATE_WITH_COOLDOWN"),
        (l[(l.IMMEDIATE_WITH_DELAY = 2)] = "IMMEDIATE_WITH_DELAY");
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
          for (let s of this.seenIntervals) {
            if (null != s.endTimeMillis) {
              t += s.endTimeMillis - s.startTimeMillis;
              continue;
            }
            if (e) {
              let e = Date.now();
              (t += e - s.startTimeMillis), n.push({ startTimeMillis: e });
              continue;
            }
            n.push(s);
          }
          return (
            r(n.length < 2, "there should only be a single left over data"),
            (this.seenIntervals = n),
            Math.round(t)
          );
        }
        constructor() {
          this.seenIntervals = [];
        }
      }
      class h {
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
            d.default.subscribe(
              "ANALYTICS_FEED_ITEM_SEEN",
              this.handleFeedItemSeen
            ),
              d.default.subscribe(
                "ANALYTICS_FEED_ITEM_UNSEEN",
                this.handleFeedItemUnseen
              ),
              d.default.subscribe(
                "ANALYTICS_FEED_FLUSH",
                this.handleFeedItemFlush
              ),
              d.default.subscribe(
                "APP_STATE_UPDATE",
                this.handleAppStateUpdate
              ),
              d.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen),
              d.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose),
              d.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
              null === (e = this.onInitialize) || void 0 === e || e.call(this);
          }),
            (this.terminate = () => {
              var e;
              d.default.unsubscribe(
                "ANALYTICS_FEED_ITEM_SEEN",
                this.handleFeedItemSeen
              ),
                d.default.unsubscribe(
                  "ANALYTICS_FEED_ITEM_UNSEEN",
                  this.handleFeedItemUnseen
                ),
                d.default.unsubscribe(
                  "ANALYTICS_FEED_FLUSH",
                  this.handleFeedItemFlush
                ),
                d.default.unsubscribe(
                  "APP_STATE_UPDATE",
                  this.handleAppStateUpdate
                ),
                d.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen),
                d.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose),
                d.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
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
                s = e.timestampMillis,
                i = e.feedItemId;
              if (n !== this._id) return;
              if (this._paused) {
                this._pausedFeedItemIds.add(i);
                return;
              }
              let a = this.getTrackedFeedItem(i),
                l = a.maybeMarkSeen(s);
              null === (t = this.onFeedItemSeen) ||
                void 0 === t ||
                t.call(this, i, l);
            }),
            (this.handleFeedItemUnseen = e => {
              var t;
              let n = e.id,
                s = e.timestampMillis,
                i = e.feedItemId;
              if (n !== this._id) return;
              this._paused && this._pausedFeedItemIds.delete(i);
              let a = this.getTrackedFeedItem(i),
                l = a.maybeMarkUnseen(s);
              null === (t = this.onFeedItemUnseen) ||
                void 0 === t ||
                t.call(this, i, l),
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
            return d;
          },
          getPlatformReadableName: function () {
            return h;
          },
          getCurrentPlatformDownloadURL: function () {
            return c;
          },
          getMobileDownloadLink: function () {
            return m;
          },
        });
      var s = n("597755"),
        i = n.n(s),
        a = n("815157"),
        l = n("271938"),
        u = n("49111");
      let r = "linux";
      function d(e) {
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
            : null === (e = i.os) || void 0 === e
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
            ? r
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function h(e) {
        return { win: "Windows", osx: "Mac", [r]: "Linux" }[o(e)];
      }
      function c() {
        let e = o();
        return d(e, !1, e === r ? "tar.gz" : null);
      }
      function m(e, t, n) {
        let s = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, a.default)(
              null != s
                ? s
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, a.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, a.default)(
              null != s ? s : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, a.generateAttemptId)(),
              }
            );
          default:
            return null != s ? s : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=5fe482d5425e9bd03bc5.js.map

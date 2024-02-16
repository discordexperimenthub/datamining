(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1727"],
  {
    658536: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var l = n("913144"),
        a = n("689988"),
        i = n("26989"),
        u = n("697218"),
        d = n("509");
      let r = null,
        s = () => {
          let e = i.default.getCommunicationDisabledUserMap();
          Object.keys(e).forEach(t => {
            let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
              l = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
              a = e[t];
            !(0, d.isCommunicationDisabled)(a) && o(n, l);
          });
        },
        o = (e, t) => {
          var n, a, r, s, o, f;
          let c = i.default.getMember(e, t),
            E = u.default.getUser(t);
          if (null == c || null == E || (0, d.isMemberCommunicationDisabled)(c))
            return;
          let C = {
            ...c,
            guildId: e,
            nick: null !== (n = c.nick) && void 0 !== n ? n : E.username,
            avatar: null !== (a = c.avatar) && void 0 !== a ? a : void 0,
            premiumSince:
              null !== (r = c.premiumSince) && void 0 !== r ? r : void 0,
            isPending: null !== (s = c.isPending) && void 0 !== s && s,
            user: {
              ...E,
              email: null !== (o = E.email) && void 0 !== o ? o : void 0,
              phone: null !== (f = E.phone) && void 0 !== f ? f : void 0,
            },
            communicationDisabledUntil: null,
          };
          l.default.dispatch({ type: "GUILD_MEMBER_UPDATE", ...C });
        };
      class f extends a.default {
        _initialize() {
          r = setInterval(() => s(), 1e4);
        }
        _terminate() {
          clearInterval(r);
        }
        constructor(...e) {
          super(...e), (this.clearGuildMemberTimeout = o);
        }
      }
      var c = new f();
    },
    341329: function (e, t, n) {
      "use strict";
      let l;
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        }),
        n("222007");
      var a = n("803182"),
        i = n("811022"),
        u = n("95410"),
        d = n("913144"),
        r = n("404118"),
        s = n("819689"),
        o = n("115718"),
        f = n("689988"),
        c = n("408062"),
        E = n("619443"),
        C = n("582713"),
        g = n("233069"),
        p = n("982108"),
        _ = n("42203"),
        h = n("305961"),
        N = n("660478"),
        A = n("18494"),
        m = n("162771"),
        I = n("718517"),
        T = n("519841"),
        S = n("787336"),
        v = n("49111"),
        L = n("724210"),
        M = n("782340");
      let R = new i.default("MessageManager");
      function b(e) {
        let {
          guildId: t,
          channelId: n,
          messageId: a,
          forceFetch: i,
          isPreload: d,
          jumpType: r,
          skipLocalFetch: f,
          logFailures: C,
        } = e;
        if (null == n) {
          C && R.log("Skipping fetch because channelId is null");
          return;
        }
        if ((0, L.isStaticChannelRoute)(n)) {
          C && R.log("Skipping fetch because channelId is a static route");
          return;
        }
        let g = _.default.getChannel(n);
        if (
          (null == g ? void 0 : g.type) === v.ChannelTypes.GUILD_STORE ||
          ((null == g ? void 0 : g.type) != null &&
            v.ChannelTypesSets.GUILD_THREADS_ONLY.has(g.type))
        ) {
          C && R.log("Skipping fetch because channel is a forum/store");
          return;
        }
        let p = c.default.getOrCreate(n);
        T.AttachmentLinkRefreshExperiment.getCurrentConfig({
          location: "fetch_messages",
        }).enabled &&
          p.some(S.messageHasExpiredAttachmentUrl) &&
          (R.log("Found expired attachment link, clearing messages"),
          c.default.clear(n),
          (p = c.default.getOrCreate(n))),
          null != p.jumpTargetId &&
            null == a &&
            ((p = p.mutate({
              jumpTargetId: null,
              jumped: !1,
              jumpType: o.JumpTypes.ANIMATED,
            })),
            c.default.commit(p)),
          null != p.focusTargetId &&
            null == a &&
            ((p = p.mutate({ focusTargetId: null })), c.default.commit(p));
        let A = i;
        if (
          (!d || E.default.isConnected() || p.loadingMore
            ? p.loadingMore || (p.ready && !p.cached)
              ? null != a
                ? (A = !0)
                : C &&
                  R.log("Skipping fetch because no other conditions matched")
              : null == t || null != h.default.getGuild(t)
                ? (A = !0)
                : C &&
                  R.log(
                    "Skipping fetch we are connected and have loaded messages"
                  )
            : (A = !0),
          A)
        ) {
          if ((c.default.commit(p.mutate({ loadingMore: !0 })), null != a))
            s.default.jumpToMessage({
              channelId: n,
              messageId: a,
              flash: !0,
              isPreload: d,
              skipLocalFetch: f,
              jumpType: r,
            });
          else if (
            (null == g ? void 0 : g.isThread()) &&
            (function (e) {
              if (N.default.hasOpenedThread(e)) return !1;
              if (null == l) {
                var t;
                l =
                  null !== (t = u.default.get(D, {})) && void 0 !== t ? t : {};
              }
              if (e in l) return !1;
              l[e] = Date.now();
              let n = Date.now() - O;
              for (let e in l) l[e] < n && delete l[e];
              return u.default.set(D, l), !0;
            })(n)
          )
            R.log("Jumping to start of thread ".concat(g.id)),
              s.default.fetchMessages({
                channelId: n,
                limit: v.MAX_MESSAGES_PER_CHANNEL,
                jump: { messageId: n, flash: !1 },
                isPreload: d,
                skipLocalFetch: f,
              });
          else if (
            (null == g ? void 0 : g.isThread()) &&
            N.default.hasTrackedUnread(g.id) &&
            !p.ready
          ) {
            let e = N.default.getTrackedAckMessageId(g.id);
            R.log(
              "Jumping to most recent message in thread "
                .concat(g.id, " - ")
                .concat(e)
            ),
              s.default.fetchMessages({
                channelId: n,
                limit: v.MAX_MESSAGES_PER_CHANNEL,
                jump: { messageId: e, flash: !1, offset: 1 },
                isPreload: d,
                skipLocalFetch: f,
              });
          } else
            s.default.fetchMessages({
              channelId: n,
              limit: v.MAX_MESSAGES_PER_CHANNEL,
              isPreload: d,
              skipLocalFetch: f,
              jump: { jumpType: o.JumpTypes.ANIMATED },
            });
        }
      }
      let O = 90 * I.default.Millis.DAY,
        D = "viewedThreadIds";
      function P() {
        let e = A.default.getChannelId();
        if (null != e) {
          let n = _.default.getChannel(e);
          if (null != n) {
            var t;
            let e = (0, a.matchPath)(location.pathname, {
              path: v.Routes.CHANNEL(":guild", ":channel", ":message"),
              exact: !0,
            });
            b({
              guildId: n.getGuildId(),
              channelId: n.id,
              messageId:
                null == e
                  ? void 0
                  : null === (t = e.params) || void 0 === t
                    ? void 0
                    : t.message,
            }),
              k(n.getGuildId(), n.id);
          }
        }
      }
      function y() {
        let {
            isPreload: e,
            skipLocalFetch: t,
            logFailures: n,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          l = A.default.getChannelId();
        if (null != l) {
          let a = _.default.getChannel(l);
          null != a
            ? ((0, g.isTextChannel)(a.type)
                ? b({
                    guildId: a.getGuildId(),
                    channelId: a.id,
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n,
                  })
                : n &&
                  R.log(
                    "Skipping fetch because the selected channel is not a text channel"
                  ),
              k(a.getGuildId(), a.id))
            : n && R.log("Skipping fetch because channel is null");
        } else
          n && R.log("Skipping fetch because there is no selected channel");
      }
      function G(e) {
        let { guildId: t, channelId: n, messageId: l, jumpType: a } = e;
        b({ guildId: t, channelId: n, messageId: l, jumpType: a }), k(t, n);
      }
      function H(e) {
        let { guildId: t, channelId: n } = e;
        b({ guildId: t, channelId: n });
      }
      function k(e, t) {
        let n = p.default.getCurrentSidebarChannelId(t);
        if (null == n) return;
        let l = p.default.getCurrentSidebarMessageId(t);
        b({ guildId: e, channelId: n, messageId: l });
      }
      function U() {
        let e = A.default.getChannelId(),
          t = m.default.getGuildId();
        if (null == t || null == e) return;
        let n = p.default.getSidebarState(e);
        (null == n ? void 0 : n.type) !== C.SidebarType.VIEW_CHANNEL && k(t, e);
      }
      function w(e) {
        let { guildId: t, channelId: n, context: l } = e;
        l === v.CURRENT_APP_CONTEXT &&
          (b({ guildId: t, channelId: n }), k(t, n));
      }
      function V(e) {
        let { channel: t, messageId: n } = e,
          l = t.guild_id;
        null != l &&
          A.default.getChannelId(l) === t.id &&
          b({ guildId: l, channelId: t.id, messageId: n });
      }
      function W(e) {
        let { channelId: t } = e;
        s.default.fetchMessages({
          channelId: t,
          limit: v.MAX_MESSAGES_PER_CHANNEL,
        });
      }
      function x(e) {
        let { response: t } = e;
        if (null == t || null == t.body) return null;
        if (t.body.code === v.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
          let e = t.body.retry_after;
          null != e &&
            r.default.show({
              title: M.default.Messages.RATE_LIMITED,
              body: M.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                retryAfterMinutes: Math.ceil(e / 60),
              }),
            });
        }
      }
      let F = {};
      function j(e) {
        var t;
        let { channelId: n, jump: l, isStale: a, isPreview: i = !1 } = e;
        if (i) return;
        let u = null !== (t = F[n]) && void 0 !== t ? t : 0;
        if (Date.now() - u < 10 * I.default.Millis.SECOND) return;
        F[n] = Date.now();
        let d = A.default.getChannelId(),
          r = p.default.getCurrentSidebarChannelId(d),
          o = n === d || n === r;
        a &&
          E.default.isConnected() &&
          o &&
          s.default.fetchMessages({
            channelId: n,
            limit: v.MAX_MESSAGES_PER_CHANNEL,
            jump: l,
          });
      }
      function X(e) {
        let { channelId: t, messageRecord: n } = e;
        null != n &&
          d.default.dispatch({
            type: "MESSAGE_SEND_FAILED",
            channelId: t,
            messageId: n.id,
          });
      }
      function Y(e) {
        let { state: t } = e;
        if ("active" !== t) return !1;
        let n = A.default.getChannelId();
        if (null == n) return !1;
        s.default.fetchNewLocalMessages(n, v.MAX_MESSAGES_PER_CHANNEL);
      }
      class Z extends f.default {
        _initialize() {
          d.default.subscribe("CONNECTION_OPEN", P);
        }
        _terminate() {
          d.default.unsubscribe("CONNECTION_OPEN", P);
        }
        constructor(...e) {
          super(...e),
            (this.fetchMessages = b),
            (this.loadSelectedChannelIfNecessary = y),
            (this.stores = new Map().set(p.default, U)),
            (this.actions = {
              APP_STATE_UPDATE: Y,
              OVERLAY_INITIALIZE: P,
              CHANNEL_SELECT: G,
              VOICE_CHANNEL_SELECT: H,
              THREAD_CREATE: V,
              THREAD_LIST_SYNC: () => y(),
              CHANNEL_CREATE: V,
              CHANNEL_PRELOAD: w,
              THREAD_CREATE_LOCAL: W,
              GUILD_CREATE: () => y(),
              MESSAGE_END_EDIT: x,
              LOAD_MESSAGES_SUCCESS: j,
              UPLOAD_FAIL: X,
              CHANNEL_DELETE: () => y(),
              THREAD_DELETE: () => y(),
            });
        }
      }
      var B = new Z();
    },
    764828: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SafetyWarningTypes: function () {
            return i;
          },
          SafetyWarningFeedbackTypes: function () {
            return u;
          },
          default: function () {
            return g;
          },
        });
      var l,
        a,
        i,
        u,
        d = n("446674"),
        r = n("913144"),
        s = n("42203");
      ((l = i || (i = {}))[(l.STRANGER_DANGER = 1)] = "STRANGER_DANGER"),
        (l[(l.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] =
          "INAPPROPRIATE_CONVERSATION_TIER_1"),
        (l[(l.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] =
          "INAPPROPRIATE_CONVERSATION_TIER_2"),
        ((a = u || (u = {}))[(a.UPVOTE = 0)] = "UPVOTE"),
        (a[(a.DOWNVOTE = 1)] = "DOWNVOTE");
      let o = [],
        f = {};
      function c(e) {
        let { safetyWarnings: t } = e;
        null != t && (f[e.id] = t),
          null == t && null != f[e.id] && delete f[e.id];
      }
      function E() {
        (f = {}),
          Object.values(s.default.getMutablePrivateChannels()).forEach(e => {
            c(e);
          });
      }
      class C extends d.default.Store {
        initialize() {
          this.waitFor(s.default);
        }
        getChannelSafetyWarning(e, t) {
          var n;
          return null === (n = f[e]) || void 0 === n
            ? void 0
            : n.find(e => e.id === t);
        }
        getChannelSafetyWarnings(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : o;
        }
      }
      var g = new C(r.default, {
        CHANNEL_CREATE: function (e) {
          c(e.channel);
        },
        CHANNEL_DELETE: function (e) {
          null != f[e.channel.id] && delete f[e.channel.id];
        },
        CHANNEL_UPDATES: function (e) {
          e.channels.forEach(e => {
            c(e);
          });
        },
        CONNECTION_OPEN: E,
        CONNECTION_OPEN_SUPPLEMENTAL: E,
        CHANNEL_SAFETY_WARNING_FEEDBACK: function (e) {
          let { channelId: t, warningId: n, feedbackType: l } = e,
            a = f[t];
          null != a &&
            (f[t] = a.map(e => (e.id === n ? { ...e, feedback_type: l } : e)));
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function (e) {
          let { channelId: t } = e,
            n = f[t];
          null != n &&
            (f[t] = n.map(e => ({ ...e, dismiss_timestamp: void 0 })));
        },
        DISMISS_CHANNEL_SAFETY_WARNINGS: function (e) {
          let { channelId: t, warningIds: n } = e,
            l = f[t];
          if (null == l) return;
          let a = Date.now().toString();
          f[t] = l.map(e =>
            n.includes(e.id) ? { ...e, dismiss_timestamp: a } : e
          );
        },
      });
    },
    761771: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isEligibleForInappropriateConversationWarning: function () {
            return u;
          },
          useIsEligibleForInappropriateConversationWarning: function () {
            return d;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
          kind: "user",
          id: "2024-01_inappropriate_conversation_warning",
          label: "Inappropriate Conversation Warning",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable Inappropriate Conversation Warning",
              config: { enabled: !0 },
            },
          ],
        }),
        i = (0, l.createExperiment)({
          kind: "user",
          id: "2024-01_inappropriate_conversation_warning_staff_bypass",
          label: "Inappropriate Conversation Warning Staff Bypass",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable Inappropriate Conversation Warning Staff Bypass",
              config: { enabled: !0 },
            },
          ],
        });
      function u(e) {
        let { location: t, autoTrackExposure: n = !1 } = e,
          { enabled: l } = a.getCurrentConfig(
            { location: t },
            { autoTrackExposure: n }
          ),
          { enabled: u } = i.getCurrentConfig(
            { location: t },
            { autoTrackExposure: n }
          );
        return l || u;
      }
      function d(e) {
        let { location: t, autoTrackExposure: n = !1 } = e,
          { enabled: l } = a.useExperiment(
            { location: t },
            { autoTrackExposure: n }
          ),
          { enabled: u } = i.useExperiment(
            { location: t },
            { autoTrackExposure: n }
          );
        return l || u;
      }
    },
    774223: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function i(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          className: u,
          foreground: d,
          ...r
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(r),
          className: u,
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            className: d,
            fill: i,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=1727.aeb9b1a4da8cf7996ae0.js.map

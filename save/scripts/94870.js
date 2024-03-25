(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94870"],
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
    811513: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("430143");
      n.es(i, t);
    },
    304983: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("541742");
      n.es(i, t);
    },
    969715: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UnfeatureItemConfirmationModal: function () {
            return f;
          },
          FeatureItemConfirmationModal: function () {
            return I;
          },
          FeatureMessageConfirmationModal: function () {
            return _;
          },
          FeatureForumPostConfirmationModal: function () {
            return m;
          },
        }),
        n("222007");
      var i = n("37983"),
        s = n("884691"),
        l = n("866227"),
        a = n.n(l),
        u = n("611221"),
        r = n("77078"),
        d = n("599417"),
        o = n("699473"),
        c = n("713810"),
        h = n("782340"),
        E = n("43229");
      function f(e) {
        let { featureableItem: t, header: n, body: l, ...a } = e,
          [u, o] = s.useState(null),
          [E, f] = s.useState(!1);
        return (0, i.jsxs)(r.ConfirmModal, {
          header: n,
          confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
          confirmButtonColor: r.Button.Colors.RED,
          cancelText: h.default.Messages.CANCEL,
          loading: E,
          onConfirm: async () => {
            try {
              f(!0), await (0, c.unfeatureGuildFeedItem)(t), f(!1);
            } catch (e) {
              throw (o(new d.default(e)), f(!1), e);
            }
          },
          ...a,
          children: [
            (0, i.jsx)(r.Text, { variant: "text-md/normal", children: l }),
            null != u &&
              (0, i.jsx)(r.Text, {
                color: "text-danger",
                variant: "text-xs/normal",
                children: u.message,
              }),
          ],
        });
      }
      function I(e) {
        let {
            featureableItem: t,
            expiresSeconds: n,
            header: l,
            children: u,
            options: o,
            ...f
          } = e,
          [I, _] = s.useState(null),
          [m, T] = s.useState(!1);
        return (0, i.jsxs)(r.ConfirmModal, {
          header: l,
          confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
          cancelText: h.default.Messages.CANCEL,
          confirmButtonColor: r.Button.Colors.BRAND,
          loading: m,
          onConfirm: async () => {
            try {
              let e = a().add(n, "second").toDate();
              T(!0), await (0, c.featureGuildFeedItem)(t, e, o);
            } catch (e) {
              throw (_(new d.default(e)), e);
            } finally {
              T(!1);
            }
          },
          ...f,
          children: [
            null != I &&
              (0, i.jsx)(r.Text, {
                className: E.featureModalError,
                color: "text-danger",
                variant: "text-xs/normal",
                children: I.message,
              }),
            u,
          ],
        });
      }
      function _(e) {
        let {
          message: t,
          guildId: n,
          channel: s,
          expiresSeconds: l,
          timePeriod: a,
          options: d,
          ...c
        } = e;
        return (0, i.jsxs)(I, {
          ...c,
          featureableItem: {
            guildId: n,
            entity: t,
            entityType: u.GuildFeedItemTypes.MESSAGE,
          },
          header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
          expiresSeconds: l,
          options: d,
          children: [
            (0, i.jsx)(r.Text, {
              className: E.featureModalText,
              variant: "text-md/normal",
              children:
                h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format(
                  { timePeriod: a }
                ),
            }),
            (0, i.jsx)("div", {
              className: E.featureModalMessage,
              children: (0, i.jsx)(o.default, {
                channel: s,
                message: t,
                disableInteraction: !0,
              }),
            }),
          ],
        });
      }
      function m(e) {
        let {
          thread: t,
          guildId: n,
          expiresSeconds: s,
          timePeriod: l,
          options: a,
          ...d
        } = e;
        return (0, i.jsx)(I, {
          ...d,
          featureableItem: {
            guildId: n,
            entity: t,
            entityType: u.GuildFeedItemTypes.FORUM_POST,
          },
          header:
            h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
          expiresSeconds: s,
          options: a,
          children: (0, i.jsx)(r.Text, {
            className: E.featureModalText,
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
            return _;
          },
        });
      var u = n("748820"),
        r = n("446674"),
        d = n("913144"),
        o = n("724210"),
        c = n("515631");
      let h = {};
      function E(e) {
        return { guildId: e, sessionId: (0, u.v4)() };
      }
      function f(e) {
        null != l && l.guildId === e ? ((s = l), (l = void 0)) : (s = E(e));
      }
      class I extends r.default.Store {
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
      I.displayName = "GuildHomeStore";
      var _ = new I(d.default, {
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
          f(t), (i = u), null != a && a.guildId !== t && (a = void 0);
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
          l = E(t);
        },
        GUILD_HOME_SET_SOURCE: function (e) {
          let { source: t, guildId: n } = e;
          a = { guildId: n, source: t };
        },
        GUILD_HOME_ENSURE_HOME_SESSION: function (e) {
          let { guildId: t } = e;
          if (null != s && s.guildId === t) return !1;
          f(t);
        },
        LOGOUT: function () {
          (s = void 0), (l = void 0), (a = void 0);
        },
      });
    },
    835257: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          registerFetchedSupplementals: function () {
            return p;
          },
          JoinSourceType: function () {
            return s;
          },
          getJoinSourceTypeLabel: function () {
            return F;
          },
          getIntegrationLabel: function () {
            return N;
          },
          useGetIntegrationIconString: function () {
            return g;
          },
          fetchMemberSupplemental: function () {
            return v;
          },
        }),
        n("424973");
      var i,
        s,
        l,
        a,
        u,
        r,
        d = n("872717"),
        o = n("819855"),
        c = n("841098"),
        h = n("376556"),
        E = n("572943"),
        f = n("49111"),
        I = n("782340");
      let _ = {};
      function m(e, t) {
        return e + t;
      }
      function T(e, t) {
        return t.map(t => e + t);
      }
      function M(e) {
        return e.split("-")[1];
      }
      ((a = i || (i = {}))[(a.FAILED = 0)] = "FAILED"),
        (a[(a.UNFETCHED = 1)] = "UNFETCHED"),
        (a[(a.PENDING = 2)] = "PENDING"),
        (a[(a.SUCCEEDED = 3)] = "SUCCEEDED"),
        (a[(a.FAILED_NO_RETRY = 4)] = "FAILED_NO_RETRY");
      function S(e, t) {
        e.forEach(e => {
          _[e] = t;
        });
      }
      function p(e, t) {
        t.forEach(t =>
          (function (e, t, n) {
            _[e + t] = 3;
          })(e, t, 3)
        );
      }
      ((u = s || (s = {}))[(u.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (u[(u.BOT = 1)] = "BOT"),
        (u[(u.INTEGRATION = 2)] = "INTEGRATION"),
        (u[(u.DISCOVERY = 3)] = "DISCOVERY"),
        (u[(u.HUB = 4)] = "HUB"),
        (u[(u.INVITE = 5)] = "INVITE"),
        (u[(u.VANITY_URL = 6)] = "VANITY_URL");
      let F = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
          case 1:
            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
          case 2:
            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
          case 3:
            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
          case 4:
            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
          case 5:
            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
          case 6:
            if (null != t && !n)
              return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format(
                { vanityUrl: t }
              );
            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
          default:
            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN;
        }
      };
      ((r = l || (l = {})).DISCORD = "discord"),
        (r.TWITCH = "twitch"),
        (r.YOUTUBE = "youtube"),
        (r.GUILD_SUBSCRIPTION = "guild_subscription");
      let N = e => {
          switch (e) {
            case "twitch":
              return I.default.Messages
                .MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
            case "youtube":
              return I.default.Messages
                .MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
            default:
              return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
          }
        },
        g = e => {
          let t = h.default.get((0, E.useLegacyPlatformType)(e)),
            n = (0, c.default)();
          return null != t && ["twitch", "youtube"].includes(e)
            ? "url('".concat(
                (0, o.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG,
                "')"
              )
            : null;
        };
      function A(e) {
        return {
          userId: e.user_id,
          sourceInviteCode: e.source_invite_code,
          joinSourceType: e.join_source_type,
          inviterId: e.inviter_id,
          integrationType: e.integration_type,
        };
      }
      async function v(e, t) {
        let n = T(e, t),
          i = n.filter(e => _[e] <= 1).map(M);
        if (0 === i.length) return [];
        S(n, 2);
        try {
          let t = await d.HTTP.post({
            url: f.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
          });
          if (!Array.isArray(t.body)) return S(n, 0), [];
          let s = t.body.map(A),
            l = [];
          s.forEach(e => {
            let { userId: t } = e;
            return l.push(t);
          });
          let a = T(e, l),
            u = i.filter(e => !l.includes(e)),
            r = T(e, u);
          return S(a, 3), S(r, 0), s;
        } catch (e) {
          S(n, 0);
        }
        return [];
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
            return d;
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
        r = (e, t, n) => {
          let i = u(e, n);
          return "0" === i
            ? l.default.Messages.SEE_THREAD
            : t.format({ count: i });
        },
        d = (e, t) => r(e, l.default.Messages.THREAD_MESSAGE_COUNT, t);
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return a;
          },
          useUID: function () {
            return u;
          },
          UID: function () {
            return r;
          },
        });
      var i = n("995008"),
        s = n.n(i),
        l = n("775560");
      let a = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return s(e);
        },
        u = () => (0, l.useLazyValue)(() => a()),
        r = e => {
          let { children: t } = e;
          return t(u());
        };
    },
    433487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("304983"),
        a = n("75196"),
        u = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...u
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, a.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                fill: s,
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          l.MoreHorizontalIcon,
          void 0,
          { size: 24 }
        );
    },
    155207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("811513"),
        a = n("75196"),
        u = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, a.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", {
                  className: l,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: l,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, i.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          l.GroupIcon,
          void 0,
          { size: 24 }
        );
    },
    713573: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        a = n("77078"),
        u = n("451914"),
        r = n("548122");
      let d = Object.freeze({
          SIZE_10: r.size10,
          SIZE_12: r.size12,
          SIZE_14: r.size14,
          SIZE_16: r.size16,
          SIZE_20: r.size20,
          SIZE_24: r.size24,
          SIZE_32: r.size32,
        }),
        o = e => {
          let {
            id: t,
            muted: n = !1,
            className: s = u.wrapper,
            size: r = d.SIZE_14,
            selectable: o = !1,
            children: c,
            color: h,
            onClick: E,
            onContextMenu: f,
            style: I,
            title: _,
            uppercase: m,
          } = e;
          return (0, i.jsx)(a.H, {
            role: null != E ? "button" : void 0,
            onClick: E,
            onContextMenu: f,
            id: t,
            className: l(s, {
              [u.base]: !0,
              [r]: !0,
              [u.selectable]: o,
              [u.muted]: n,
              [u.uppercase]: m,
            }),
            title: _,
            style: null != h ? { ...I, color: h } : I,
            children: c,
          });
        };
      o.Sizes = d;
      var c = o;
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
        r = n.n(u),
        d = n("913144");
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
            r(n.length < 2, "there should only be a single left over data"),
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
            return d;
          },
          getPlatformReadableName: function () {
            return c;
          },
          getCurrentPlatformDownloadURL: function () {
            return h;
          },
          getMobileDownloadLink: function () {
            return E;
          },
        });
      var i = n("597755"),
        s = n.n(i),
        l = n("815157"),
        a = n("271938"),
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
            ? r
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function c(e) {
        return { win: "Windows", osx: "Mac", [r]: "Linux" }[o(e)];
      }
      function h() {
        let e = o();
        return d(e, !1, e === r ? "tar.gz" : null);
      }
      function E(e, t, n) {
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
    430143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GroupIcon: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...r
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
            className: u,
          }),
        });
      };
    },
    541742: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MoreHorizontalIcon: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...r
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            fillRule: "evenodd",
            d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=d6166de07ee9465a9015.js.map

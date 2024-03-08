(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70077"],
  {
    855143: function (e, t, n) {
      "use strict";
      e.exports = n.p + "01864c39871ce619d855.svg";
    },
    934516: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a72746e7108167af95c8.svg";
    },
    267363: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ack: function () {
            return c;
          },
          ackChannel: function () {
            return E;
          },
          bulkAck: function () {
            return f;
          },
          localAck: function () {
            return C;
          },
          enableAutomaticAck: function () {
            return _;
          },
          disableAutomaticAck: function () {
            return A;
          },
          ackGuildFeature: function () {
            return T;
          },
          ackUserFeature: function () {
            return S;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("913144"),
        i = n("401690"),
        u = n("233069"),
        a = n("42203"),
        r = n("245997"),
        d = n("697218"),
        s = n("299039"),
        o = n("49111");
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 ? arguments[3] : void 0,
          u = arguments.length > 4 ? arguments[4] : void 0;
        l.default.dispatch({
          type: "CHANNEL_ACK",
          channelId: e,
          messageId: i,
          immediate: t,
          force: n,
          context: o.CURRENT_APP_CONTEXT,
          location: u,
        });
      }
      function E(e) {
        e.isCategory()
          ? !(function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                l = a.default.getChannel(e);
              if (null == l || null == l.guild_id) return;
              let d = r.default.getCategories(l.guild_id);
              if (null == d[e]) return;
              let s = d[e]
                  .filter(e => {
                    let { channel: t } = e;
                    return (0, u.isGuildReadableType)(t.type);
                  })
                  .map(e => {
                    let { channel: t } = e;
                    return t.id;
                  }),
                o = [...s];
              for (let e of (s.forEach(e => {
                let t = i.default.getActiveJoinedThreadsForParent(
                  l.guild_id,
                  e
                );
                for (let e in t) o.push(e);
              }),
              o))
                c(e, t, n);
            })(e.id, !0, !0)
          : e.isForumLikeChannel()
            ? c(e.id, !0, !0, s.default.fromTimestamp(Date.now()))
            : c(e.id, !0, !0);
      }
      function f(e, t) {
        l.default.dispatch({
          type: "BULK_ACK",
          channels: e,
          context: o.CURRENT_APP_CONTEXT,
          onFinished: t,
        });
      }
      function C(e) {
        l.default.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
      }
      function _(e, t) {
        l.default.dispatch({
          type: "ENABLE_AUTOMATIC_ACK",
          channelId: e,
          windowId: t,
        });
      }
      function A(e, t) {
        l.default.dispatch({
          type: "DISABLE_AUTOMATIC_ACK",
          channelId: e,
          windowId: t,
        });
      }
      function T(e, t, n) {
        l.default.dispatch({
          type: "GUILD_FEATURE_ACK",
          id: e,
          ackType: t,
          ackedId: n,
          local: !1,
        });
      }
      function S(e, t) {
        var n;
        let i =
          null === (n = d.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.id;
        null != i &&
          l.default.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e,
            ackedId: t,
            local: !1,
          });
      }
    },
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983"),
        i = n("884691"),
        u = n("77078"),
        a = n("390236"),
        r = i.memo(function (e) {
          var t, n, r, d;
          let {
              user: s,
              size: o = u.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": E = !1,
              ...f
            } = e,
            C = i.useContext(a.default);
          return (0, l.jsx)(u.Avatar, {
            src:
              ((t = s),
              (n = (0, u.getAvatarSize)(o)),
              (r = c),
              (d = C),
              t.getAvatarURL(d, n, r)),
            size: o,
            "aria-label": E ? void 0 : s.username,
            "aria-hidden": E,
            ...f,
          });
        });
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("76527");
      n.es(l, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("618807");
      n.es(l, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("882039");
      n.es(l, t);
    },
    320954: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("917351"),
        i = n.n(l);
      function u(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => !0;
        return i(e)
          .map(e =>
            "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]
          )
          .flattenDeep()
          .filter(n)
          .value();
      }
    },
    143909: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n("424973"),
        n("222007");
      var l = n("37983"),
        i = n("884691"),
        u = n("414456"),
        a = n.n(u),
        r = n("446674"),
        d = n("551042"),
        s = n("77078"),
        o = n("450911"),
        c = n("87657"),
        E = n("812204"),
        f = n("685665"),
        C = n("679653"),
        _ = n("419830"),
        A = n("123561"),
        T = n("144491"),
        S = n("161778"),
        h = n("233069"),
        I = n("27618"),
        L = n("18494"),
        N = n("162771"),
        g = n("843823"),
        D = n("697218"),
        U = n("941886"),
        R = n("810567"),
        p = n("904276"),
        v = n("875436"),
        O = n("449008"),
        P = n("6468"),
        m = n("16002"),
        G = n("782340"),
        x = n("372015"),
        H = n("855143"),
        M = n("934516");
      function y(e) {
        let { channel: t, ChannelIcon: n, selected: i, onClick: u } = e,
          a = (0, C.default)(t);
        return (0, l.jsxs)(s.Clickable, {
          className: x.channelRow,
          onClick: () => u(t.id),
          children: [
            i
              ? (0, l.jsx)(v.default, { className: x.radioIcon })
              : (0, l.jsx)(p.default, { className: x.radioIcon }),
            (0, l.jsx)(n, { className: x.icon, width: 16, height: 16 }),
            (0, l.jsx)(s.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              children: a,
            }),
          ],
        });
      }
      function w(e) {
        let { guildId: t, selectedChannelId: n, onSelectChannelId: u } = e,
          d = (0, r.useStateFromStores)([L.default], () =>
            L.default.getChannelId()
          ),
          { guildChannels: o } = (0, r.useStateFromStoresObject)(
            [A.default],
            () => A.default.getGuildWithoutChangingCommunityRows(t)
          ),
          c = i.useMemo(() => {
            let e = [];
            return (
              o.forEachChannel(t => {
                !1 !== (0, P.canAttachClipsToChannel)(t.id) &&
                  ((0, h.isGuildSelectableChannelType)(t.type) ||
                    (0, h.isGuildVocalChannelType)(t.type)) &&
                  e.push(t);
              }),
              e.sort((e, t) => (e.id === d ? -1 : t.id === d ? 1 : 0))
            );
          }, [o, d]);
        return 0 === c.length
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", { className: a(x.divider, x.bottomDivider) }),
                (0, l.jsx)(s.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  className: x.contentPadding,
                  children: G.default.Messages.CLIP_SHARE_SELECT_CHANNEL,
                }),
                (0, l.jsx)(s.List, {
                  sections: [c.length],
                  sectionHeight: 0,
                  renderRow: e => {
                    let { section: t, row: i } = e;
                    if (t > 0) return null;
                    let a = c[i],
                      r = (0, _.getChannelIconComponent)(a);
                    return null == r
                      ? null
                      : (0, l.jsx)(
                          y,
                          {
                            channel: a,
                            ChannelIcon: r,
                            selected: n === a.id,
                            onClick: u,
                          },
                          a.id
                        );
                  },
                  rowHeight: (e, t) => {
                    if (e > 0) return 0;
                    let n = c[t];
                    return null != n ? 56 : 0;
                  },
                  renderSection: () => null,
                  className: a(x.channelList, x.contentPadding),
                  fade: !0,
                }),
              ],
            });
      }
      function F(e) {
        let { friends: t, searchQuery: n, disabled: u, onShareClip: d } = e,
          o = i.useMemo(
            () =>
              0 === n.length
                ? t
                : t.filter(e =>
                    e.username.toLowerCase().includes(n.toLowerCase())
                  ),
            [t, n]
          ),
          E = (0, r.useStateFromStores)([S.default], () => S.default.theme);
        return 0 === o.length
          ? (0, l.jsxs)(U.default, {
              theme: E,
              className: x.emptyStateContainer,
              children: [
                (0, l.jsx)(U.default.Image, {
                  width: 415,
                  height: 75,
                  lightSrc: M,
                  darkSrc: H,
                }),
                (0, l.jsx)(U.default.Text, {
                  note: G.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND,
                }),
              ],
            })
          : (0, l.jsx)(s.List, {
              sections: [o.length],
              sectionHeight: 0,
              renderRow: e => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let i = o[n],
                  a = o[n].username;
                return (0, l.jsxs)(
                  "div",
                  {
                    className: x.userRow,
                    children: [
                      (0, l.jsx)(c.default, { user: i }),
                      (0, l.jsx)(s.Text, {
                        className: x.username,
                        variant: "text-md/normal",
                        children: a,
                      }),
                      (0, l.jsx)(s.Button, {
                        disabled: u,
                        onClick: () => d(i.id),
                        className: x.friendShareButton,
                        look: s.ButtonLooks.OUTLINED,
                        size: s.ButtonSizes.SMALL,
                        color: s.ButtonColors.BRAND,
                        children: (0, l.jsx)(s.Text, {
                          variant: "text-sm/medium",
                          children: G.default.Messages.SHARE,
                        }),
                      }),
                    ],
                  },
                  i.id
                );
              },
              rowHeight: (e, t) => {
                if (e > 0) return 0;
                let n = o[t];
                return null != n ? 52 : 0;
              },
              renderSection: () => null,
              className: a(x.friendsList, x.contentPadding),
              fade: !0,
            });
      }
      function j(e) {
        let { clip: t, editMetadata: n, transitionState: u, onClose: c } = e,
          [C, _] = i.useState(""),
          [A, S] = i.useState(!1),
          [h, L] = i.useState(null),
          U = (0, r.useStateFromStoresArray)([I.default], () =>
            I.default.getFriendIDs()
          ),
          p = (0, r.useStateFromStoresArray)(
            [g.default, D.default],
            () =>
              U.map(e => D.default.getUser(e))
                .filter(O.isNotNullish)
                .sort((e, t) => {
                  var n, l, i, u;
                  return (
                    (null !==
                      (i =
                        null === (n = g.default.getUserAffinity(t.id)) ||
                        void 0 === n
                          ? void 0
                          : n.affinity) && void 0 !== i
                      ? i
                      : 0) -
                    (null !==
                      (u =
                        null === (l = g.default.getUserAffinity(e.id)) ||
                        void 0 === l
                          ? void 0
                          : l.affinity) && void 0 !== u
                      ? u
                      : 0)
                  );
                }),
            [U]
          ),
          v = (0, r.useStateFromStores)([N.default], () =>
            N.default.getGuildId()
          ),
          { analyticsLocations: P } = (0, f.default)(
            E.default.CLIPS_SHARE_MODAL
          );
        async function H(e) {
          let l = null != e ? e : h;
          if (null != l) {
            S(!0);
            try {
              await (0, m.shareClip)(t, {
                channelId: l,
                editMetadata: n,
                analyticsLocations: P,
              }),
                null == e && (0, T.transitionToChannel)(l),
                d.closeAllModals();
            } catch (e) {
            } finally {
              S(!1);
            }
          }
        }
        async function M(e) {
          let t = await o.default.openPrivateChannel(e);
          await H(t);
        }
        return (0, l.jsxs)(s.ModalRoot, {
          size: s.ModalSize.SMALL,
          transitionState: u,
          children: [
            (0, l.jsx)(s.Heading, {
              className: a(x.title, x.contentPadding),
              variant: "heading-lg/semibold",
              color: "interactive-active",
              children: G.default.Messages.CLIP_SHARE_MODAL_TITLE,
            }),
            (0, l.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-normal",
              className: a(x.subtitle, x.contentPadding),
              children: G.default.Messages.CLIP_SHARE_MODAL_SUBTITLE,
            }),
            (0, l.jsx)(R.default, {
              className: x.searchBar,
              query: C,
              onChange: _,
              size: R.default.Sizes.MEDIUM,
              onClear: function () {
                _("");
              },
              placeholder: G.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
            }),
            (0, l.jsx)("div", { className: a(x.divider, x.topDivider) }),
            (0, l.jsx)(F, {
              searchQuery: C,
              friends: p,
              onShareClip: M,
              disabled: A,
            }),
            null != v &&
              (0, l.jsx)(w, {
                guildId: v,
                selectedChannelId: h,
                onSelectChannelId: L,
              }),
            (0, l.jsxs)(s.ModalFooter, {
              children: [
                (0, l.jsx)(s.Button, {
                  disabled: null == h,
                  submitting: A,
                  color: s.Button.Colors.BRAND,
                  onClick: () => H(),
                  children: G.default.Messages.CLIPS_EDIT_SHARE_CLIP,
                }),
                (0, l.jsx)(s.Button, {
                  submitting: A,
                  look: s.ButtonLooks.LINK,
                  onClick: c,
                  color: s.ButtonColors.PRIMARY,
                  children: G.default.Messages.BACK,
                }),
              ],
            }),
          ],
        });
      }
    },
    123561: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        }),
        n("222007");
      var l = n("917351"),
        i = n.n(l),
        u = n("446674"),
        a = n("913144"),
        r = n("191225"),
        d = n("203288"),
        s = n("398604"),
        o = n("401690"),
        c = n("755624"),
        E = n("374363"),
        f = n("271938"),
        C = n("870691"),
        _ = n("42203"),
        A = n("816092"),
        T = n("546463"),
        S = n("957255"),
        h = n("660478"),
        I = n("18494"),
        L = n("282109"),
        N = n("449008"),
        g = n("299039"),
        D = n("319839"),
        U = n("397336");
      let R = null,
        p = null,
        v = new D.default();
      function O() {
        let e = I.default.getChannelId(),
          t = I.default.getVoiceChannelId();
        return (R = e), (p = t), v.clear();
      }
      function P(e) {
        let {
          guild: { id: t },
        } = e;
        return v.clearGuildId(t);
      }
      function m(e) {
        let {
          channel: { guild_id: t },
        } = e;
        return v.clearGuildId(t);
      }
      function G(e) {
        let { guildId: t } = e;
        return v.clearGuildId(t);
      }
      function x(e) {
        let { channelId: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
      }
      function H() {
        return null != R && v.nonPositionalChannelIdUpdate(R);
      }
      function M(e) {
        let { channel: t } = e;
        return v.nonPositionalChannelIdUpdate(t.id);
      }
      function y(e) {
        let { id: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
      }
      function w() {
        let e = I.default.getChannelId(),
          t = I.default.getVoiceChannelId(),
          n = R !== e || p !== t;
        return (
          !!n &&
          (i([R, p, e, t])
            .uniq()
            .forEach(e => {
              null != e && v.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
          (R = e),
          (p = t),
          !0)
        );
      }
      function F(e) {
        let { id: t } = e,
          n = _.default.getChannel(t);
        return null == n ? v.clearGuildId(t) : v.clearGuildId(n.guild_id);
      }
      function j(e) {
        let { guildId: t } = e;
        return v.clearGuildId(t);
      }
      function B() {
        return v.updateSubtitles();
      }
      function V(e) {
        let { guildScheduledEvent: t } = e;
        return v.updateSubtitles(t.guild_id);
      }
      class b extends u.default.Store {
        initialize() {
          this.waitFor(
            o.default,
            f.default,
            C.default,
            _.default,
            A.default,
            r.default,
            T.default,
            d.default,
            s.default,
            c.default,
            S.default,
            h.default,
            I.default,
            L.default,
            E.default
          );
        }
        getGuild(e, t) {
          let n = v.getGuild(e, t);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        getGuildWithoutChangingCommunityRows(e) {
          let t = v.getGuildWithoutCommunityRows(e);
          return { guildChannelsVersion: t.version, guildChannels: t };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let t = v.getGuildWithoutCommunityRows(e),
            n = t.getCategoryFromSection(t.recentsSectionNumber);
          return n.getShownChannelIds().length;
        }
      }
      b.displayName = "ChannelListStore";
      var k = new b(a.default, {
        APPLICATION_FETCH_FAIL: B,
        APPLICATION_FETCH_SUCCESS: B,
        APPLICATION_FETCH: B,
        APPLICATIONS_FETCH_FAIL: B,
        APPLICATIONS_FETCH_SUCCESS: B,
        APPLICATIONS_FETCH: B,
        BACKGROUND_SYNC: O,
        BULK_ACK: function (e) {
          let { channels: t } = e,
            n = !1;
          return (
            i(t)
              .map(e => {
                var t;
                return null === (t = _.default.getChannel(e.channelId)) ||
                  void 0 === t
                  ? void 0
                  : t.guild_id;
              })
              .filter(N.isNotNullish)
              .uniq()
              .forEach(e => {
                v.clearGuildId(e) && (n = !0);
              }),
            n
          );
        },
        BULK_CLEAR_RECENTS: G,
        CACHE_LOADED_LAZY: O,
        CATEGORY_COLLAPSE_ALL: G,
        CATEGORY_COLLAPSE: F,
        CATEGORY_EXPAND_ALL: G,
        CATEGORY_EXPAND: F,
        CHANNEL_ACK: x,
        CHANNEL_COLLAPSE: function (e) {
          var t;
          let { channelId: n } = e;
          return v.clearGuildId(
            null === (t = _.default.getChannel(n)) || void 0 === t
              ? void 0
              : t.guild_id
          );
        },
        CHANNEL_CREATE: m,
        CHANNEL_DELETE: m,
        CHANNEL_LOCAL_ACK: x,
        CHANNEL_MUTE_EXPIRED: G,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: x,
        CHANNEL_SELECT: w,
        CHANNEL_STATUSES: function (e) {
          return v.clearGuildId(e.guildId);
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          return (
            i(t)
              .map(e => e.guild_id)
              .uniq()
              .forEach(e => {
                v.clearGuildId(e) && (n = !0);
              }),
            n
          );
        },
        CONNECTION_OPEN_SUPPLEMENTAL: B,
        CONNECTION_OPEN: O,
        CURRENT_USER_UPDATE: O,
        DECAY_READ_STATES: O,
        DEV_TOOLS_DESIGN_TOGGLE_SET: O,
        DISABLE_AUTOMATIC_ACK: x,
        DISMISS_FAVORITE_SUGGESTION: function (e) {
          let { channelId: t } = e;
          return v.nonPositionalChannelIdUpdate(t);
        },
        DRAWER_CLOSE: H,
        DRAWER_OPEN: H,
        EMBEDDED_ACTIVITY_INBOUND_UPDATE: function (e) {
          let { guildId: t, channelId: n } = e;
          return v.updateSubtitles(t, n);
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
          B();
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
        ENABLE_AUTOMATIC_ACK: x,
        FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
          let { guildId: t } = e;
          return v.updateSubtitles(t);
        },
        GAMES_DATABASE_FETCH_FAIL: B,
        GAMES_DATABASE_FETCH: B,
        GAMES_DATABASE_UPDATE: B,
        GUILD_APPLICATIONS_FETCH_SUCCESS: B,
        GUILD_CREATE: P,
        GUILD_DELETE: P,
        GUILD_FEED_FETCH_SUCCESS: B,
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e;
          return f.default.getId() === n.id && v.clearGuildId(t);
        },
        GUILD_MUTE_EXPIRED: G,
        GUILD_ROLE_CREATE: G,
        GUILD_ROLE_DELETE: G,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: G,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: G,
        GUILD_ROLE_UPDATE: G,
        GUILD_SCHEDULED_EVENT_CREATE: V,
        GUILD_SCHEDULED_EVENT_DELETE: V,
        GUILD_SCHEDULED_EVENT_UPDATE: V,
        GUILD_TOGGLE_COLLAPSE_MUTED: G,
        GUILD_UPDATE: P,
        IMPERSONATE_STOP: G,
        IMPERSONATE_UPDATE: G,
        LOAD_CHANNELS: function (e) {
          e.channels.forEach(e => {
            let { guildId: t } = e;
            return v.clearGuildId(t);
          });
        },
        LOAD_MESSAGES_SUCCESS: x,
        MESSAGE_ACK: x,
        MESSAGE_CREATE: function (e) {
          let { channelId: t } = e;
          return v.nonPositionalChannelIdUpdate(t);
        },
        MESSAGE_DELETE_BULK: x,
        MESSAGE_DELETE: x,
        NOTIFICATION_SETTINGS_UPDATE: O,
        OVERLAY_INITIALIZE: O,
        PASSIVE_UPDATE_V1: function (e) {
          return null != e.channels && (v.clearGuildId(e.guildId), !0);
        },
        RECOMPUTE_READ_STATES: O,
        RESORT_THREADS: x,
        SET_RECENTLY_ACTIVE_COLLAPSED: O,
        THREAD_CREATE: M,
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return v.nonPositionalChannelUpdate(t);
        },
        THREAD_LIST_SYNC: G,
        THREAD_MEMBER_UPDATE: y,
        THREAD_MEMBERS_UPDATE: y,
        THREAD_UPDATE: M,
        TRY_ACK: x,
        UPDATE_CHANNEL_DIMENSIONS: x,
        UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
          let { guildId: t } = e;
          v.updateSubtitles(t);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e;
          t.forEach(e => {
            let { guild_id: t } = e;
            return v.clearGuildId(t);
          });
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
        USER_GUILD_SETTINGS_GUILD_UPDATE: G,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
          var t;
          let { settings: n } = e;
          if (n.type !== U.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
          let l =
              null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
            i = !1;
          return (
            null != l &&
              g.default.keys(l).forEach(e => {
                let t = l[e].guildRecentsDismissedAt;
                null != t && (i = v.updateRecentsCategory(e) || i);
              }),
            i
          );
        },
        VOICE_CATEGORY_COLLAPSE: j,
        VOICE_CATEGORY_EXPAND: j,
        VOICE_CHANNEL_SELECT: w,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          return v.nonPositionalChannelIdUpdate(e.id);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = w(),
            l = new Set();
          for (let { channelId: e, oldChannelId: i } of t)
            null != i &&
              !l.has(i) &&
              (v.nonPositionalChannelIdUpdate(i) && (n = !0), l.add(i)),
              null != e &&
                !l.has(e) &&
                (v.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
          return n;
        },
        WINDOW_FOCUS: H,
      });
    },
    870691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var l = n("446674"),
        i = n("913144"),
        u = n("449008"),
        a = n("42203"),
        r = n("341542"),
        d = n("923959"),
        s = n("49111");
      let o = {},
        c = 0;
      function E() {
        c += 1;
      }
      function f(e) {
        if (null == o[e]) return !1;
        delete o[e];
      }
      class C extends l.default.PersistedStore {
        initialize(e) {
          this.waitFor(a.default, r.default),
            this.removeChangeListener(E),
            this.addChangeListener(E),
            (o = null != e ? e : {});
        }
        getState() {
          return o;
        }
        isCollapsed(e) {
          return null != e && "null" !== e && !!o[e] && o[e];
        }
        getCollapsedCategories() {
          return o;
        }
        get version() {
          return c;
        }
      }
      (C.displayName = "CategoryCollapseStore"),
        (C.persistKey = "collapsedCategories");
      var _ = new C(i.default, {
        CONNECTION_OPEN: function (e) {
          for (let t of (!e.userGuildSettings.partial && (o = {}),
          e.userGuildSettings.entries))
            if (null != t.channel_overrides)
              for (let e of t.channel_overrides)
                e.collapsed ? (o[e.channel_id] = !0) : delete o[e.channel_id];
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e,
            n = new Set(t.map(e => e.guild_id).filter(u.isNotNullish));
          for (let e in o) {
            let t = a.default.getChannel(e);
            null != t &&
              null != t.guild_id &&
              n.has(t.guild_id) &&
              delete o[t.id];
          }
          for (let e of t)
            for (let t of e.channel_overrides)
              t.collapsed && (o[t.channel_id] = !0);
        },
        CATEGORY_COLLAPSE: function (e) {
          let { id: t } = e;
          if (o[t]) return !1;
          o[t] = !0;
        },
        CATEGORY_EXPAND: function (e) {
          let { id: t } = e;
          return f(t);
        },
        CATEGORY_COLLAPSE_ALL: function (e) {
          let { guildId: t } = e;
          d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            "null" !== t.id && (o[t.id] = !0);
          });
        },
        CATEGORY_EXPAND_ALL: function (e) {
          let { guildId: t } = e;
          d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            delete o[t.id];
          });
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          return f(t);
        },
      });
    },
    245997: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        }),
        n("424973"),
        n("222007"),
        n("808653");
      var l = n("446674"),
        i = n("913144"),
        u = n("320954"),
        a = n("379881"),
        r = n("271938"),
        d = n("42203"),
        s = n("923959"),
        o = n("305961"),
        c = n("49111");
      let E = null,
        f = {},
        C = null;
      function _() {
        return { _categories: [], null: [] };
      }
      let A = _();
      function T(e, t) {
        e.index = t;
      }
      function S(e) {
        let t = s.default.getChannels(e),
          n = _(),
          l = e => {
            var t;
            let { channel: l } = e,
              i =
                null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) &&
                void 0 !== t
                  ? t
                  : n.null;
            i.push({ channel: l, index: -1 });
          };
        return (
          t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            n._categories.push({ channel: t, index: -1 }), (n[t.id] = []);
          }),
          t[(0, s.GUILD_SELECTABLE_CHANNELS_KEY)].forEach(l),
          t[(0, s.GUILD_VOCAL_CHANNELS_KEY)].forEach(l),
          (0, u.default)(n._categories, n).forEach(T),
          (f[e] = n),
          n
        );
      }
      function h() {
        (f = {}), null != E && S(E);
      }
      function I(e) {
        let {
          guild: { id: t },
        } = e;
        (f[t] = void 0), E === t && S(t);
      }
      function L(e) {
        let {
          channel: { guild_id: t },
        } = e;
        if (null == t) return !1;
        (f[t] = void 0), E === t && S(t);
      }
      function N(e) {
        let { guildId: t } = e;
        (f[t] = void 0), t === E && S(t);
      }
      function g(e, t) {
        if (((C = t), null == e || null == e.getGuildId())) return !1;
        let n = e.getGuildId();
        return null != n && ((f[n] = void 0), n === E && S(n), !0);
      }
      function D() {
        S(c.FAVORITES);
      }
      class U extends l.default.Store {
        initialize() {
          this.waitFor(s.default, o.default, r.default, d.default, a.default),
            this.syncWith([a.default], D);
        }
        getCategories(e) {
          return null != e
            ? (function (e) {
                let t = f[e];
                return null != t ? t : S(e);
              })(e)
            : A;
        }
      }
      U.displayName = "GuildCategoryStore";
      var R = new U(i.default, {
        CHANNEL_SELECT: function (e) {
          let { guildId: t } = e;
          if (((E = null != t ? t : null), null == t || null != f[t]))
            return !1;
          S(t);
        },
        CONNECTION_OPEN: h,
        OVERLAY_INITIALIZE: h,
        CACHE_LOADED_LAZY: h,
        GUILD_CREATE: I,
        GUILD_UPDATE: I,
        GUILD_DELETE: function (e) {
          let {
            guild: { id: t },
          } = e;
          delete f[t];
        },
        CHANNEL_CREATE: L,
        CHANNEL_DELETE: L,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          for (let { guild_id: e } of t)
            null != e && ((f[e] = void 0), (n = !0), E === e && S(e));
          return n;
        },
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e;
          if (r.default.getId() !== n.id) return !1;
          (f[t] = void 0), t === E && S(t);
        },
        CURRENT_USER_UPDATE: function () {
          if (null == E) return !1;
          S(E);
        },
        GUILD_ROLE_CREATE: N,
        GUILD_ROLE_UPDATE: N,
        GUILD_ROLE_DELETE: N,
        IMPERSONATE_UPDATE: N,
        IMPERSONATE_STOP: N,
        VOICE_CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null == t && null != C
            ? g(d.default.getChannel(C), null)
            : g(d.default.getChannel(t), t);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return t.reduce((e, t) => {
            let { channelId: n, sessionId: l } = t;
            return r.default.getSessionId() !== l
              ? e
              : g(d.default.getChannel(n), n) || e;
          }, !1);
        },
      });
    },
    843823: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("446674"),
        i = n("913144"),
        u = n("27618");
      let a = !1,
        r = Object.freeze({
          userAffinities: [],
          affinityUserIds: new Set(),
          lastFetched: 0,
        }),
        d = Object.freeze({
          userAffinitiesMap: new Map(),
          affinityUserIds: new Set(),
        }),
        s = { ...r },
        o = { ...d };
      function c() {
        let e = new Map(
            s.userAffinities
              .filter(e => {
                let { user_id: t } = e;
                return !u.default.isBlocked(t);
              })
              .map(e => [e.user_id, e])
          ),
          t = new Set(e.keys());
        o = { userAffinitiesMap: e, affinityUserIds: t };
      }
      class E extends l.default.PersistedStore {
        initialize(e) {
          this.waitFor(u.default),
            null != e &&
              ((s.userAffinities = e.userAffinities),
              (s.lastFetched = e.lastFetched),
              c()),
            this.syncWith([u.default], c);
        }
        needsRefresh() {
          return Date.now() - s.lastFetched > 864e5;
        }
        getFetching() {
          return a;
        }
        getState() {
          return s;
        }
        getUserAffinities() {
          return s.userAffinities;
        }
        getUserAffinity(e) {
          return o.userAffinitiesMap.get(e);
        }
        getUserAffinitiesUserIds() {
          return o.affinityUserIds;
        }
      }
      (E.displayName = "UserAffinitiesStore"),
        (E.persistKey = "UserAffinitiesStore"),
        (E.migrations = [e => null]);
      var f = new E(i.default, {
        LOAD_USER_AFFINITIES_SUCCESS: function (e) {
          var t;
          let { affinities: n } = e;
          (s.userAffinities =
            null !== (t = n.user_affinities) && void 0 !== t ? t : []),
            (s.lastFetched = Date.now()),
            c(),
            (a = !1);
        },
        LOAD_USER_AFFINITIES: function () {
          a = !0;
        },
        LOAD_USER_AFFINITIES_FAILURE: function () {
          a = !1;
        },
        LOGOUT: function () {
          (s = { ...r }), (o = { ...d });
        },
      });
    },
    941886: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EmptyStateImage: function () {
            return T;
          },
          EmptyStateText: function () {
            return S;
          },
          default: function () {
            return i;
          },
        });
      var l,
        i,
        u = n("37983"),
        a = n("884691"),
        r = n("414456"),
        d = n.n(r),
        s = n("819855"),
        o = n("77078"),
        c = n("145131"),
        E = n("49111"),
        f = n("177914"),
        C = n("890957");
      let { Provider: _, Consumer: A } = a.createContext(E.ThemeTypes.DARK);
      class T extends a.PureComponent {
        render() {
          let {
            lightSrc: e,
            darkSrc: t,
            width: n,
            height: l,
            offsetX: i,
            offsetY: a,
            style: r,
          } = this.props;
          return (0, u.jsx)(A, {
            children: o =>
              (0, u.jsx)(c.default.Child, {
                grow: 0,
                className: d(f.image, C.marginBottom40),
                style: {
                  ...r,
                  width: n,
                  height: l,
                  marginLeft: i,
                  marginTop: a,
                  backgroundImage: "url(".concat(
                    (0, s.isThemeDark)(o) ? t : e,
                    ")"
                  ),
                },
              }),
          });
        }
      }
      let S = e => {
        let {
          children: t,
          className: n,
          noteClassName: l,
          note: i,
          style: a,
        } = e;
        return (0, u.jsxs)(c.default.Child, {
          grow: 0,
          direction: c.default.Direction.VERTICAL,
          style: a,
          children: [
            null != t &&
              (0, u.jsx)(o.H, { className: d(n, f.title), children: t }),
            null != i
              ? (0, u.jsx)("div", {
                  className: d(l, f.text, C.marginTop8),
                  children: i,
                })
              : null,
          ],
        });
      };
      ((l = class extends a.PureComponent {
        render() {
          let { children: e, theme: t, className: n, style: l } = this.props;
          return (0, u.jsx)(_, {
            value: t,
            children: (0, u.jsx)(c.default, {
              direction: c.default.Direction.VERTICAL,
              align: c.default.Align.CENTER,
              justify: c.default.Justify.CENTER,
              className: d(f.wrapper, n),
              style: l,
              children: e,
            }),
          });
        }
      }).Text = S),
        (l.Image = T),
        (i = l);
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        u = n("733154"),
        a = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: u,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, a.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, l.jsx)("path", {
                className: u,
                fill: i,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          u.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        u = n("390300"),
        a = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: u,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, a.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: u,
                fill: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          u.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        u = n("287083"),
        a = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: i = "currentColor",
              ...u
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, a.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: i,
              }),
            });
          },
          u.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        u = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, u.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: r,
          }),
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        u = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, u.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: r,
            }),
          ],
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        u = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...d
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, u.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=4af13028dc51007c9b9d.js.map

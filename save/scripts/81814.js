(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81814"],
  {
    470932: function (e, t, a) {
      "use strict";
      e.exports = a.p + "e725a703dee45c6662e1.svg";
    },
    499255: function (e, t, a) {
      "use strict";
      e.exports = a.p + "75c70d0d6625bb8cf2f5.svg";
    },
    704936: function (e, t, a) {
      "use strict";
      e.exports = a.p + "5ff73b0989c80fde7edb.svg";
    },
    465988: function (e, t, a) {
      "use strict";
      e.exports = a.p + "c11a0ed34fddcdfaf466.svg";
    },
    526954: function (e, t, a) {
      "use strict";
      e.exports = a.p + "18883c22029ff557572e.svg";
    },
    35296: function (e, t, a) {
      "use strict";
      e.exports = a.p + "44a8a263aced971974c6.svg";
    },
    344665: function (e, t, a) {
      "use strict";
      e.exports = a.p + "a61b011f6d36f74215e5.svg";
    },
    93556: function (e, t, a) {
      "use strict";
      e.exports = a.p + "3a93e7ad39ce7e750bc6.svg";
    },
    118913: function (e, t, a) {
      "use strict";
      e.exports = a.p + "15fbb1a85485d28174e5.svg";
    },
    125134: function (e, t, a) {
      "use strict";
      e.exports = a.p + "48db18afbce8673d114c.svg";
    },
    380493: function (e, t, a) {
      "use strict";
      e.exports = a.p + "a978c23f8e989757d65b.svg";
    },
    783858: function (e, t, a) {
      "use strict";
      e.exports = a.p + "bb338d0a77decab1981a.svg";
    },
    181482: function (e, t, a) {
      "use strict";
      e.exports = a.p + "ad3488a6a9528f5656f9.svg";
    },
    925107: function (e, t, a) {
      "use strict";
      e.exports = a.p + "076eaacfcda10b3dd081.svg";
    },
    347124: function (e, t, a) {
      "use strict";
      e.exports = a.p + "21b83b80872fce3e23d1.svg";
    },
    630344: function (e, t, a) {
      "use strict";
      e.exports = a.p + "3e876feb943a16979f7f.svg";
    },
    735468: function (e, t, a) {
      "use strict";
      e.exports = a.p + "0f8d9250f8612ab7dc44.svg";
    },
    782983: function (e, t, a) {
      "use strict";
      e.exports = a.p + "6bd51186f4cbfe84f872.svg";
    },
    229709: function (e, t, a) {
      "use strict";
      e.exports = a.p + "6fb2064d47ffad5be5df.svg";
    },
    897142: function (e, t, a) {
      "use strict";
      e.exports = a.p + "133496b12baf37b12e29.svg";
    },
    352791: function (e, t, a) {
      "use strict";
      e.exports = a.p + "23e8fc1dee30b7819227.svg";
    },
    245629: function (e, t, a) {
      "use strict";
      e.exports = a.p + "e6496ded2b1c9137e3be.svg";
    },
    141555: function (e, t, a) {
      "use strict";
      e.exports = a.p + "4631416718b327c65f5e.svg";
    },
    520609: function (e, t, a) {
      "use strict";
      e.exports = a.p + "449491e78be7e6b79921.svg";
    },
    487577: function (e, t, a) {
      "use strict";
      e.exports = a.p + "1e79875ffaa10d5d26b3.svg";
    },
    448738: function (e, t, a) {
      "use strict";
      e.exports = a.p + "cefbb4051caaf7fcd9b9.svg";
    },
    605141: function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a("41688");
      a.es(l, t);
    },
    191152: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          fetchActiveChannels: function () {
            return d;
          },
        });
      var l = a("872717"),
        n = a("913144"),
        s = a("599417"),
        i = a("49111");
      async function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        n.default.dispatch({ type: "ACTIVE_CHANNELS_FETCH_START", guildId: e });
        try {
          var a, d;
          let s = await l.default.get({
              url: i.Endpoints.ACTIVE_CHANNELS(e),
              query: { channel_limit: t },
            }),
            r =
              null !==
                (d =
                  null === (a = s.body) || void 0 === a
                    ? void 0
                    : a.channels) && void 0 !== d
                ? d
                : [];
          return (
            n.default.dispatch({
              type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
              guildId: e,
              channels: r,
            }),
            s
          );
        } catch (t) {
          throw (
            (n.default.dispatch({
              type: "ACTIVE_CHANNELS_FETCH_FAILURE",
              guildId: e,
              error: new s.default(t),
            }),
            t)
          );
        }
      }
    },
    425974: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var l = a("884691"),
        n = a("446674"),
        s = a("558130"),
        i = a("887446"),
        d = a("599110"),
        r = a("49111");
      function u(e, t, a) {
        let u = (0, n.useStateFromStores)(
          [s.default],
          () => {
            let t = s.default.getActiveChannelsFetchStatus(e);
            return null != t && !t.loading;
          },
          [e]
        );
        l.useEffect(() => {
          u &&
            d.default.track(r.AnalyticEvents.ACTIVE_CHANNELS_LOADED, {
              guild_id: e,
              text_channels_shown: t.length,
              voice_channels_shown: a.length,
              home_session_id: i.default.getHomeSessionId(e),
            });
        }, [e, u]);
      }
    },
    462998: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        }),
        a("424973");
      var l = a("37983"),
        n = a("884691"),
        s = a("446674"),
        i = a("272030"),
        d = a("264732"),
        r = a("738073"),
        u = a("716241"),
        o = a("850391"),
        c = a("347895"),
        f = a("698882"),
        m = a("934288"),
        h = a("353054"),
        E = a("557809"),
        g = a("267567"),
        I = a("393414"),
        _ = a("208021"),
        x = a("42203"),
        v = a("474643"),
        C = a("247013"),
        S = a("305961"),
        N = a("377253"),
        p = a("957255"),
        T = a("697218"),
        A = a("945330"),
        j = a("664336"),
        M = a("679653"),
        D = a("176347"),
        F = a("49111"),
        L = a("782340"),
        R = a("264594");
      function b(e) {
        let {
            channelId: t,
            baseChannelId: b,
            channelViewSource: G = "Split View",
            isResourceChannelView: y,
          } = e,
          O = (0, s.useStateFromStores)([x.default], () =>
            x.default.getChannel(t)
          ),
          H = (0, s.useStateFromStores)([S.default], () =>
            S.default.getGuild(null == O ? void 0 : O.getGuildId())
          ),
          k = (0, s.useStateFromStores)([T.default], () =>
            T.default.getCurrentUser()
          ),
          U = (0, s.useStateFromStores)([C.default], () =>
            C.default.didAgree(null == O ? void 0 : O.guild_id)
          ),
          w = (null == k ? void 0 : k.nsfwAllowed) === !0,
          B = (0, M.default)(O),
          P = (0, s.useStateFromStores)(
            [g.default],
            () =>
              (null == H ? void 0 : H.id) != null && g.default.isLurking(H.id),
            [H]
          ),
          V = (0, s.useStateFromStores)([p.default], () =>
            p.default.can(F.Permissions.SEND_MESSAGES, O)
          ),
          W = (0, m.default)(t),
          K = (0, s.useStateFromStores)([f.default], () => {
            var e;
            return null ===
              (e = f.default.getResourceForChannel(
                null == H ? void 0 : H.id,
                t
              )) || void 0 === e
              ? void 0
              : e.title;
          }),
          z = n.useRef(!1);
        if (
          (n.useEffect(() => {
            null != O &&
              !z.current &&
              ((z.current = !0),
              (0, u.trackWithMetadata)(F.AnalyticEvents.CHANNEL_OPENED, {
                ...(0, u.getChannelOpenedMetadata)(O.id),
                channel_id: O.id,
                guild_id: O.guild_id,
                parent_id: O.parent_id,
                channel_view: G,
                can_send_message: V,
              }));
          }, [O, G, V]),
          null == O || null == H)
        )
          return null;
        let Y = [];
        return (!P &&
          Y.push((0, l.jsx)(h.default, { channel: O }, "notifications")),
        Y.push(
          (0, l.jsx)(
            j.default.Icon,
            {
              icon: A.default,
              tooltip: L.default.Messages.CLOSE,
              onClick: () => _.default.closeChannelSidebar(b),
            },
            "close"
          )
        ),
        !O.isNSFW() || (w && U))
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(d.default, {
                  channel: O,
                  draftType: v.DraftType.ChannelMessage,
                }),
                (0, l.jsx)(j.default, {
                  toolbar: Y,
                  "aria-label":
                    L.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                  children: (0, E.renderTitle)({
                    channel: O,
                    channelName: W ? K : B,
                    guild: H,
                    inSidebar: !0,
                    handleContextMenu: e => {
                      (0, i.openContextMenuLazy)(e, async () => {
                        let { default: e } = await a
                          .el("229233")
                          .then(a.bind(a, "229233"));
                        return t =>
                          (0, l.jsx)(e, { ...t, channel: O, guild: H });
                      });
                    },
                    handleClick: () => {
                      let e = N.default.getMessages(O.id);
                      if (y) {
                        (0, I.transitionTo)(F.Routes.CHANNEL(O.guild_id, O.id)),
                          (0, c.selectHomeResourceChannel)(O.guild_id, null);
                        return;
                      }
                      (0, I.transitionToGuild)(
                        O.guild_id,
                        O.id,
                        e.jumpTargetId
                      );
                    },
                  }),
                }),
                (0, l.jsx)("div", {
                  className: R.chat,
                  children: (0, l.jsx)(
                    D.default,
                    {
                      channel: O,
                      guild: H,
                      chatInputType: o.ChatInputTypes.SIDEBAR,
                    },
                    t
                  ),
                }),
              ],
            })
          : (0, l.jsx)(r.default, { guild: H });
      }
    },
    404103: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        });
      var l = a("611221"),
        n = a("913144"),
        s = a("316272"),
        i = a("887446"),
        d = a("582713"),
        r = a("271938"),
        u = a("982108"),
        o = a("42203"),
        c = a("18494"),
        f = a("162771"),
        m = a("599110"),
        h = a("299039"),
        E = a("713810"),
        g = a("185014"),
        I = a("886484"),
        _ = a("60036"),
        x = a("2804"),
        v = a("515631"),
        C = a("49111"),
        S = a("724210");
      class N extends s.default {
        _initialize() {
          n.default.subscribe("MESSAGE_REACTION_ADD", this.handleReaction),
            n.default.subscribe("MESSAGE_REACTION_REMOVE", this.handleReaction),
            n.default.subscribe(
              "SIDEBAR_VIEW_CHANNEL",
              this.handleSidebarViewChannel
            ),
            n.default.subscribe("MESSAGE_CREATE", this.handleMessageCreate),
            n.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
        }
        _terminate() {
          n.default.unsubscribe("MESSAGE_REACTION_ADD", this.handleReaction),
            n.default.unsubscribe(
              "MESSAGE_REACTION_REMOVE",
              this.handleReaction
            ),
            n.default.unsubscribe(
              "SIDEBAR_VIEW_CHANNEL",
              this.handleSidebarViewChannel
            ),
            n.default.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate),
            n.default.unsubscribe(
              "APP_STATE_UPDATE",
              this.handleAppStateUpdate
            );
        }
        handleReaction(e) {
          let { type: t, userId: a, messageId: l, optimistic: n } = e;
          if (a !== r.default.getId() || !n) return;
          let s = f.default.getGuildId();
          if (null == s) return;
          let d = c.default.getChannelId();
          if (!(0, S.isGuildHomeChannel)(d)) return;
          let u = g.default.getItemForMessageId(s, l);
          if (null == u) return;
          let o = (0, _.default)(u);
          (0, E.trackFeedItemInteracted)({
            feed_item_type: (0, x.getFeedItemTypeFromId)(u.id),
            feed_item_id: u.id,
            load_id: g.default.getLoadId(s),
            action_type:
              "MESSAGE_REACTION_ADD" === t
                ? v.FeedItemInteractionType.REACTION_ADDED
                : v.FeedItemInteractionType.REACTION_REMOVED,
            guild_id: s,
            channel_id: o.channel_id,
            message_id: l,
            home_session_id: i.default.getHomeSessionId(s),
          });
        }
        handleSidebarViewChannel(e) {
          let { channelId: t, baseChannelId: a, sidebarType: n } = e;
          if (n !== d.SidebarType.VIEW_THREAD || !(0, S.isGuildHomeChannel)(a))
            return;
          let s = f.default.getGuildId();
          if (null == s) return;
          let r = g.default.getItemForMessageId(
            s,
            h.default.castChannelIdAsMessageId(t)
          );
          if (null != r)
            r.type !== l.GuildFeedItemTypes.FORUM_POST &&
              (0, E.trackFeedItemInteracted)({
                feed_item_type: (0, x.getFeedItemTypeFromId)(r.id),
                feed_item_id: r.id,
                load_id: g.default.getLoadId(s),
                action_type: v.FeedItemInteractionType.THREAD_EMBED_CLICKED,
                guild_id: s,
                channel_id: (0, I.getChannelIdForItem)(r),
                message_id: h.default.castChannelIdAsMessageId(t),
                home_session_id: i.default.getHomeSessionId(s),
              });
        }
        handleMessageCreate(e) {
          let t,
            a,
            { optimistic: l, message: n } = e;
          if (!l || n.state !== C.MessageStates.SENDING) return;
          let s = f.default.getGuildId();
          if (null == s) return;
          let d = u.default.getSidebarState(S.StaticChannelRoute.GUILD_HOME);
          if (null == d || !(0, u.isViewChannelSidebar)(d)) return;
          let r = o.default.getChannel(d.channelId),
            c = (0, I.getSidebarMessageId)(d, r);
          if (null == c) return;
          let m = g.default.getItemForMessageId(s, c);
          if (null != m) {
            if (n.type === C.MessageTypes.DEFAULT)
              (t = v.FeedItemInteractionType.MESSAGED_IN_SIDEBAR), (a = c);
            else if (n.type === C.MessageTypes.REPLY) {
              var h, _;
              (a =
                null === (h = n.message_reference) || void 0 === h
                  ? void 0
                  : h.message_id),
                (t =
                  (null === (_ = n.message_reference) || void 0 === _
                    ? void 0
                    : _.message_id) === c
                    ? v.FeedItemInteractionType.REPLIED_TO_MESSAGE
                    : v.FeedItemInteractionType.REPLIED_IN_SIDEBAR);
            }
            null != t &&
              (0, E.trackFeedItemInteracted)({
                feed_item_type: (0, x.getFeedItemTypeFromId)(m.id),
                feed_item_id: m.id,
                load_id: g.default.getLoadId(s),
                action_type: t,
                guild_id: s,
                channel_id: n.channel_id,
                message_id: a,
                home_session_id: i.default.getHomeSessionId(s),
              });
          }
        }
        handleAppStateUpdate(e) {
          let { state: t } = e;
          if ("background" !== t) return;
          let a = f.default.getGuildId();
          null != a &&
            m.default.track(C.AnalyticEvents.HOME_BACKGROUNDED, {
              guild_id: a,
              home_session_id: i.default.getHomeSessionId(a),
              load_id: g.default.getLoadId(a),
            });
        }
      }
      var p = new N();
    },
    468670: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var l = a("118810"),
        n = a("887446"),
        s = a("713810"),
        i = a("185014"),
        d = a("60036"),
        r = a("2804"),
        u = a("515631");
      function o(e, t, a) {
        let { feedItemId: d, guildId: o, channelId: c, messageId: f } = a,
          m = e.target;
        for (; (0, l.isElement)(m); ) {
          var h, E;
          if (m === t) break;
          let e =
            null !==
              (E =
                null === (h = m.getAttribute("data-role")) || void 0 === h
                  ? void 0
                  : h.toUpperCase()) && void 0 !== E
              ? E
              : m.tagName;
          if ("A" === e)
            return (
              (0, s.trackFeedItemInteracted)({
                feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                feed_item_id: d,
                load_id: i.default.getLoadId(o),
                action_type: u.FeedItemInteractionType.LINK_CLICKED,
                guild_id: o,
                channel_id: c,
                message_id: f,
                home_session_id: n.default.getHomeSessionId(o),
              }),
              !0
            );
          if ("IMG" === e)
            return (
              (0, s.trackFeedItemInteracted)({
                feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                feed_item_id: d,
                load_id: i.default.getLoadId(o),
                action_type: u.FeedItemInteractionType.IMAGE_CLICKED,
                guild_id: o,
                channel_id: c,
                message_id: f,
                home_session_id: n.default.getHomeSessionId(o),
              }),
              !0
            );
          else if ("BUTTON" === e || "button" === m.getAttribute("role")) {
            let e = u.FeedItemInteractionType.BUTTON_CLICKED;
            if ("view-more-replies" === m.getAttribute("data-action"))
              e = u.FeedItemInteractionType.VIEW_MORE_REPLIES;
            return (
              (0, s.trackFeedItemInteracted)({
                feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                feed_item_id: d,
                load_id: i.default.getLoadId(o),
                action_type: e,
                guild_id: o,
                channel_id: c,
                message_id: f,
                home_session_id: n.default.getHomeSessionId(o),
              }),
              !0
            );
          }
          m = m.parentNode;
        }
        return !1;
      }
      function c(e) {
        let {
            guildId: t,
            channelId: a,
            feedItemId: l,
            onChannelClick: c,
            onContentClick: f,
          } = e,
          m = (e, o) => {
            var c;
            e.stopPropagation();
            let m = i.default.getItem(t, l);
            null != m &&
              ((0, s.trackFeedItemInteracted)({
                feed_item_type: (0, r.getFeedItemTypeFromId)(l),
                feed_item_id: l,
                load_id: i.default.getLoadId(t),
                action_type: u.FeedItemInteractionType.MESSAGE_CLICKED,
                guild_id: t,
                channel_id: a,
                message_id:
                  null !== (c = null == o ? void 0 : o.id) && void 0 !== c
                    ? c
                    : (0, d.default)(m).id,
                home_session_id: n.default.getHomeSessionId(t),
              }),
              f(o));
          };
        return {
          handleMessageClick: (e, n, s) => {
            e.stopPropagation(),
              !o(e, n, {
                feedItemId: l,
                guildId: t,
                channelId: a,
                messageId: s.id,
              }) && m(e, s);
          },
          handleChannelClick: e => {
            e.stopPropagation(),
              (0, s.trackFeedItemInteracted)({
                feed_item_type: (0, r.getFeedItemTypeFromId)(l),
                feed_item_id: l,
                load_id: i.default.getLoadId(t),
                action_type: u.FeedItemInteractionType.MESSAGE_CHANNEL_CLICKED,
                guild_id: t,
                channel_id: a,
                home_session_id: n.default.getHomeSessionId(t),
              }),
              c();
          },
          handleCardClick: (e, n) => {
            !o(e, n, { feedItemId: l, guildId: t, channelId: a }) && m(e);
          },
          handleItemClick: m,
        };
      }
    },
    435123: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          shouldFetchGuildFeed: function () {
            return d;
          },
          default: function () {
            return r;
          },
        });
      var l = a("884691"),
        n = a("446674"),
        s = a("713810"),
        i = a("185014");
      function d(e, t) {
        let a = i.default.getLastFetchedMillis(e);
        if (!t && null != a && Date.now() - a < 72e5) return !1;
        let { loading: l } = i.default.getFetchStatus(e);
        return l === i.LoadingStatus.NONE && !0;
      }
      function r(e) {
        let { guildId: t, highlightedItemData: a } = e,
          { loading: r, error: u } = (0, n.useStateFromStores)(
            [i.default],
            () => i.default.getFetchStatus(t),
            [t]
          ),
          o = l.useCallback(
            e => {
              let { force: l, flushSeenItems: n } = e;
              async function i() {
                try {
                  await (0, s.fetchGuildFeed)({
                    guildId: t,
                    flushSeenItems: n,
                    refresh: !0,
                    highlightedItemData: a,
                  });
                } catch (e) {
                  console.error(e);
                }
              }
              d(t, null != l && l) && i();
            },
            [t, a]
          ),
          c = l.useCallback(() => {
            d(t, !0) && e();
            async function e() {
              try {
                await (0, s.fetchGuildFeed)({ guildId: t, refresh: !1 });
              } catch (e) {
                console.error(e);
              }
            }
          }, [t]);
        return (
          l.useEffect(() => {
            o({ force: null != a });
          }, [o, a]),
          { fetchFresh: o, fetchPage: c, loading: r, error: u }
        );
      }
    },
    465519: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getFeaturedExpirationTextColor: function () {
            return d;
          },
          areSecondLevelArraysEqual: function () {
            return r;
          },
        });
      var l = a("866227"),
        n = a.n(l),
        s = a("669491"),
        i = a("886484");
      let d = e => {
        let t = n(e).diff(n(), "s");
        return t <= i.FEATURE_EXPIRES_SECONDS.ONE_DAY
          ? s.default.colors.TEXT_DANGER
          : t <= i.FEATURE_EXPIRES_SECONDS.THREE_DAYS
            ? s.default.colors.TEXT_WARNING
            : s.default.colors.TEXT_POSITIVE;
      };
      function r(e, t) {
        if (e.length !== t.length) return !1;
        for (let a = 0; a < e.length; a++) {
          let l = e[a],
            n = t[a];
          if (l.length !== n.length || !l.some((e, t) => n[t] !== e)) return !1;
        }
        return !0;
      }
    },
    530853: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return H;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("355262"),
        r = a("446674"),
        u = a("77078"),
        o = a("272030"),
        c = a("679653"),
        f = a("419830"),
        m = a("537325"),
        h = a("208021"),
        E = a("582713"),
        g = a("982108"),
        I = a("42203"),
        _ = a("27618"),
        x = a("449008"),
        v = a("185014"),
        C = a("886484"),
        S = a("60036"),
        N = a("468670"),
        p = a("465519"),
        T = a("344934"),
        A = a("113312"),
        j = a("339274"),
        M = a("605143"),
        D = a("759668"),
        F = a("449405"),
        L = a("49111"),
        R = a("724210"),
        b = a("782340"),
        G = a("985443");
      let y = async () => {
        let { default: e } = await a.el("814781").then(a.bind(a, "814781"));
        return e;
      };
      function O(e) {
        let {
            item: t,
            referenceMessageBundles: a,
            channel: s,
            guildId: d,
            animateAvatar: r,
            onMessageClick: o,
          } = e,
          c = n.useCallback(() => {
            var e, l;
            let n = a[a.length - 2 + 1];
            h.default.openChannelAsSidebar({
              guildId: d,
              channelId: s.id,
              baseChannelId: R.StaticChannelRoute.GUILD_HOME,
              flash: !1,
              details: {
                type: E.SidebarOpenDetailsType.HOME,
                initialMessageId:
                  null !==
                    (l =
                      null == n
                        ? void 0
                        : null === (e = n[0]) || void 0 === e
                          ? void 0
                          : e.id) && void 0 !== l
                    ? l
                    : a[0][0].id,
                highlightMessageIds: new Set(
                  (0, S.getAllMessageIdsFromFeedItem)(t)
                ),
              },
            });
          }, [t, s, d, a]);
        return (0, l.jsxs)("div", {
          className: G.conversationArea,
          children: [
            a.slice(0, 2).map((e, t) => {
              let n = e[0];
              return null == n
                ? null
                : (0, l.jsx)(
                    T.GuildFeedConversationReply,
                    {
                      className: i(G.conversationMessage, {
                        [G.mentioned]: n.mentioned,
                      }),
                      guildId: d,
                      channel: s,
                      message: n,
                      onMessageClick: o,
                      isTruncated: e.length > 1,
                      animateAvatar: r,
                      children:
                        t !== a.length - 1 &&
                        (0, l.jsx)("div", { className: G.replySpine }),
                    },
                    n.id
                  );
            }),
            a.length > 2 &&
              (0, l.jsx)(
                "div",
                {
                  className: i(G.conversationMessage, G.viewMoreReplies),
                  children: (0, l.jsx)(u.Clickable, {
                    onClick: c,
                    "data-action": "view-more-replies",
                    children:
                      b.default.Messages.GUILD_FEED_TRUNCATED_REPLIES_VIEW_MORE.format(
                        { count: a.length - 2 }
                      ),
                  }),
                },
                "view-more"
              ),
          ],
        });
      }
      var H = n.forwardRef(function (e, t) {
        var a, s;
        let {
            guildId: T,
            conversationItem: H,
            showFeedback: k,
            setOnDismissedFeedback: U,
          } = e,
          { root: w } = H,
          { messages: B, children: P } = w,
          V = B[0],
          W = B[B.length - 1],
          K = W.channel_id,
          z = (0, r.useStateFromStoresArray)(
            [v.default],
            () =>
              B.map(e => v.default.getCachedMessage(T, K, e.id)).filter(
                x.isNotNullish
              ),
            [T, K, B]
          ),
          Y = (0, r.useStateFromStores)([I.default], () =>
            I.default.getChannel(K)
          ),
          Z = (0, f.getChannelIconComponent)(Y, void 0, { textFocused: !0 }),
          X = (0, f.getChannelIconTooltipText)(Y),
          J = (0, c.default)(Y),
          [q, Q] = n.useState(!1),
          $ = (0, r.useStateFromStores)(
            [_.default],
            () => null != W && _.default.isBlocked(W.author.id)
          ),
          ee = (0, d.useListItem)(
            null !==
              (s =
                null === (a = z[z.length - 1]) || void 0 === a
                  ? void 0
                  : a.id) && void 0 !== s
              ? s
              : H.id
          ),
          et = H.id,
          ea = (0, r.useStateFromStores)([g.default], () =>
            g.default.getSidebarState(R.StaticChannelRoute.GUILD_HOME)
          ),
          el = (0, C.getSidebarMessageId)(ea, Y),
          en = null != el && V.id === el,
          {
            handleItemClick: es,
            handleChannelClick: ei,
            handleCardClick: ed,
            handleMessageClick: er,
          } = (0, N.default)({
            guildId: T,
            channelId: K,
            feedItemId: et,
            onChannelClick: () => (0, m.default)(L.Routes.CHANNEL(T, K, V.id)),
            onContentClick: e => {
              var t;
              h.default.openChannelAsSidebar({
                guildId: T,
                channelId: K,
                baseChannelId: R.StaticChannelRoute.GUILD_HOME,
                flash: !1,
                details: {
                  type: E.SidebarOpenDetailsType.HOME,
                  initialMessageId:
                    null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                      ? t
                      : V.id,
                  highlightMessageIds: new Set(
                    (0, S.getAllMessageIdsFromFeedItem)(H)
                  ),
                },
              });
            },
          }),
          eu = (0, r.useStateFromStores)(
            [v.default],
            () =>
              null == Y
                ? []
                : P.map(e =>
                    e.messages
                      .map(e => v.default.getCachedMessage(T, Y.id, e.id))
                      .filter(x.isNotNullish)
                  ).filter(e => 0 !== e.length),
            [T, Y, P],
            p.areSecondLevelArraysEqual
          );
        if (null == Y || null == V || null == W || $) return null;
        let eo = e => {
          e.stopPropagation(),
            (0, o.openContextMenuLazy)(e, async () => {
              let e = await y();
              return t => (0, l.jsx)(e, { ...t, item: H, channel: Y });
            });
        };
        return (0, l.jsxs)(j.default, {
          className: k ? G.containerNoPadding : G.container,
          ref: t,
          selected: en,
          onCardClick: ed,
          onItemClick: es,
          onContextMenu: eo,
          itemId: et,
          ariaLabel:
            b.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
              channelName: J,
            }),
          listItemProps: ee,
          onMouseEnter: () => Q(!0),
          onMouseLeave: () => Q(!1),
          children: [
            (0, l.jsxs)(u.HeadingLevel, {
              component: (0, l.jsxs)(M.default, {
                children: [
                  (0, l.jsx)("div", {
                    className: G.messageHeaderMenuLeft,
                    children: (0, l.jsxs)(u.Clickable, {
                      className: G.channelNameContainer,
                      onClick: ei,
                      children: [
                        null != Z
                          ? (0, l.jsx)(u.Tooltip, {
                              text: X,
                              delay: 500,
                              children: e =>
                                (0, l.jsx)(Z, {
                                  ...e,
                                  className: G.channelIcon,
                                  height: 16,
                                  width: 16,
                                }),
                            })
                          : null,
                        (0, l.jsx)(u.Heading, {
                          lineClamp: 1,
                          variant: "heading-sm/semibold",
                          children: J,
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: G.messageHeaderMenuRight,
                    children: (0, l.jsx)(D.default, {
                      feedItem: H,
                      guildId: T,
                      onContextMenu: eo,
                    }),
                  }),
                ],
              }),
              children: [
                (0, l.jsx)("div", {
                  className: i(G.messageBundleItemBody, {
                    [G.conversationRoot]: eu.length > 0,
                    [G.hasReply]: V.type === L.MessageTypes.REPLY,
                  }),
                  children: (0, l.jsx)(F.default, {
                    feedItemId: H.id,
                    guildId: T,
                    channel: Y,
                    messages: z,
                    animateAvatar: q,
                    onMessageClick: er,
                  }),
                }),
                (0, l.jsx)(O, {
                  item: H,
                  channel: Y,
                  guildId: T,
                  referenceMessageBundles: eu,
                  onMessageClick: er,
                  animateAvatar: q,
                }),
              ],
            }),
            k &&
              (0, l.jsx)(A.default, {
                guildId: T,
                guildFeedItem: H,
                setOnDismissFeedback: U,
              }),
          ],
        });
      });
    },
    344934: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GuildFeedConversationReply: function () {
            return C;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("77078"),
        r = a("574073"),
        u = a("865343"),
        o = a("909917"),
        c = a("380986"),
        f = a("969706"),
        m = a("39331"),
        h = a("115859"),
        E = a("497880"),
        g = a("93332"),
        I = a("587904"),
        _ = a("894488"),
        x = a("422145");
      function v(e) {
        let {
            message: t,
            guildId: a,
            animateAvatar: s,
            channel: i,
            author: r,
          } = e,
          { popouts: m, setPopout: h } = (0, f.default)(
            t.id,
            _.DEFAULT_POPOUTS
          ),
          { usernameProfile: E, avatarProfile: v } = m,
          C = n.useMemo(() => e => (0, o.default)(e, t), [t]),
          S = (0, c.useContextMenuUser)(t.author.id, i.id),
          N = (0, c.useClickMessageAuthorUsername)(t, i, E, h),
          p = (0, c.useClickMessageAuthorAvatar)(v, h),
          T = n.useCallback(
            () =>
              h({
                usernameProfile: !1,
                avatarProfile: !1,
                referencedUsernameProfile: !1,
              }),
            [h]
          ),
          A = (0, g.useAvatar)({
            props: {
              message: t,
              channel: i,
              author: r,
              guildId: a,
              compact: !0,
              displayCompactAvatars: !0,
              animate: s,
              showAvatarPopout: v,
              showUsernamePopout: E,
              onContextMenu: S,
              onClickUsername: N,
              onClickAvatar: p,
              onPopoutRequestClose: T,
            },
            guildId: a,
            handleRenderPopout: C,
            className: x.avatar,
          }),
          j = (0, g.useUsername)(e, C),
          M = (0, u.getMessageUsernameId)(t),
          D = (0, u.getMessageTimestampId)(t),
          F = "".concat(M, " ").concat(D),
          L = (0, u.getMessageReplyId)(t);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(d.H, {
            className: x.header,
            "aria-describedby": L,
            "aria-labelledby": F,
            children: [
              A,
              (0, l.jsx)("span", {
                id: (0, u.getMessageUsernameId)(t),
                className: x.username,
                children: (0, l.jsx)(l.Fragment, { children: j }),
              }),
              (0, l.jsx)(I.default, {
                id: (0, u.getMessageTimestampId)(t),
                timestamp: t.timestamp,
                className: x.timestamp,
              }),
            ],
          }),
        });
      }
      let C = n.forwardRef(function (e, t) {
        let {
            message: a,
            className: s,
            onMessageClick: u,
            children: o,
            isTruncated: c,
            channel: f,
            guildId: g,
            animateAvatar: I,
          } = e,
          _ = n.useRef(null),
          { content: C, hasSpoilerEmbeds: S } = (0, m.default)(a, {
            hideSimpleEmbedContent: !0,
          }),
          N = (0, r.default)(a),
          p = n.useCallback(
            e => {
              u(e, _.current, a);
            },
            [u, a]
          );
        return (0, l.jsxs)("div", {
          ref: _,
          className: s,
          onClick: p,
          role: "article",
          children: [
            (0, l.jsx)(d.FocusRing, {
              offset: { left: 4, right: 4 },
              children: (0, l.jsxs)("div", {
                children: [
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(v, {
                        author: N,
                        message: a,
                        channel: f,
                        guildId: g,
                        animateAvatar: I,
                      }),
                      (0, l.jsx)(E.default, {
                        className: i(x.messageContent, {
                          [x.truncatedReply]: c,
                        }),
                        message: a,
                        content: C,
                        contentRef: t,
                      }),
                    ],
                  }),
                  (0, h.default)({
                    className: x.accessories,
                    channelMessageProps: e,
                    hasSpoilerEmbeds: S,
                    isInteracting: !1,
                  }),
                ],
              }),
            }),
            o,
          ],
        });
      });
    },
    113312: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("907002"),
        r = a("819855"),
        u = a("77078"),
        o = a("841098"),
        c = a("601414"),
        f = a("137215"),
        m = a("945330"),
        h = a("302120"),
        E = a("782340"),
        g = a("453236"),
        I = a("499255"),
        _ = a("704936"),
        x = a("465988"),
        v = a("526954"),
        C = a("35296"),
        S = a("344665"),
        N = a("93556"),
        p = a("118913"),
        T = a("125134"),
        A = a("380493"),
        j = a("783858"),
        M = a("181482"),
        D = a("925107"),
        F = a("347124"),
        L = a("630344"),
        R = a("735468");
      let b = [
        {
          light: F,
          dark: D,
          selected: L,
          value: h.GuildFeedbackRating.TERRIBLE,
          altDescription: () =>
            E.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE,
          description: () =>
            E.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE,
        },
        {
          light: _,
          dark: I,
          selected: x,
          value: h.GuildFeedbackRating.BAD,
          altDescription: () =>
            E.default.Messages.GUILD_FEED_FEEDBACK_RATING_BAD,
        },
        {
          light: j,
          dark: A,
          selected: M,
          value: h.GuildFeedbackRating.OKAY,
          altDescription: () =>
            E.default.Messages.GUILD_FEED_FEEDBACK_RATING_OKAY,
        },
        {
          light: p,
          dark: N,
          selected: T,
          value: h.GuildFeedbackRating.GOOD,
          altDescription: () =>
            E.default.Messages.GUILD_FEED_FEEDBACK_RATING_GOOD,
        },
        {
          light: C,
          dark: v,
          selected: S,
          value: h.GuildFeedbackRating.EXCELLENT,
          altDescription: () =>
            E.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT,
          description: () =>
            E.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT,
        },
      ];
      function G(e) {
        let {
            defaultSrc: t,
            selectedSrc: a,
            selected: s,
            disableAnimation: i,
            alt: r,
          } = e,
          [u, o] = (0, d.useSpring)(
            () => ({
              from: { opacity: 1 },
              config: {
                duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION,
              },
            }),
            [s, i]
          ),
          [c, f] = (0, d.useSpring)(
            () => ({
              from: { opacity: 0 },
              config: {
                duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION,
              },
            }),
            [s, i]
          );
        return (
          n.useEffect(() => {
            s
              ? (o({ opacity: 0 }), f({ opacity: 1 }))
              : (o({ opacity: 1 }), f({ opacity: 0 }));
          }, [s, i, o, f]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(d.animated.img, {
                style: { opacity: c.opacity },
                src: a,
                width: 40,
                height: 40,
                alt: r,
              }),
              (0, l.jsx)(d.animated.img, {
                className: g.ratingInner,
                style: { opacity: u.opacity },
                src: t,
                width: 40,
                height: 40,
                alt: r,
              }),
            ],
          })
        );
      }
      function y(e) {
        let {
            selectedRating: t,
            setSelectedRating: a,
            disableAnimation: n,
          } = e,
          s = (0, o.default)();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_TITLE,
            }),
            (0, l.jsx)(u.Text, {
              variant: "text-md/normal",
              children:
                E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_SUBTITLE,
            }),
            (0, l.jsx)("div", {
              className: g.ratingsContainer,
              children: b.map(e =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: g.ratingContainer,
                    children: [
                      (0, l.jsx)(u.Clickable, {
                        className: g.rating,
                        onClick: () => {
                          a(e.value);
                        },
                        children: (0, l.jsx)(G, {
                          defaultSrc: (0, r.isThemeDark)(s) ? e.dark : e.light,
                          selectedSrc: e.selected,
                          selected: t === e.value,
                          alt: e.altDescription(),
                          disableAnimation: n,
                        }),
                      }),
                      null != e.description
                        ? (0, l.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children: e.altDescription(),
                          })
                        : null,
                    ],
                  },
                  e.value
                )
              ),
            }),
          ],
        });
      }
      function O(e) {
        var t;
        let {
          selectedRating: a,
          selectedReasons: n,
          onSelectedReasons: s,
          onUserFeedbackChanged: d,
          onSubmitPressed: r,
          canSubmit: o,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children:
                E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_2_TITLE.format({
                  rating: a.toLowerCase(),
                }),
            }),
            (0, l.jsx)("div", {
              className: g.pillContainer,
              children: (null !== (t = (0, h.GUILD_FEED_FEEDBACK_REASONS)[a]) &&
              void 0 !== t
                ? t
                : []
              ).map(e =>
                (0, l.jsx)(
                  u.Clickable,
                  {
                    onClick: () => s(e),
                    className: i(g.pill, n.has(e) ? g.pillSelected : null),
                    children: (0, l.jsx)(u.Text, {
                      variant: "text-md/normal",
                      children: (0, c.getDescriptionFromReason)(e),
                    }),
                  },
                  e
                )
              ),
            }),
            n.has(h.GuildFeedFeedbackReason.OTHER)
              ? (0, l.jsx)(u.TextInput, {
                  autoFocus: !0,
                  className: g.textInput,
                  onChange: d,
                  placeholder:
                    E.default.Messages.GUILD_FEED_FEEDBACK_OTHER_PLACEHOLDER,
                })
              : null,
            (0, l.jsx)(u.Button, {
              className: g.button,
              disabled: !o,
              onClick: r,
              children: E.default.Messages.SUBMIT,
            }),
          ],
        });
      }
      function H() {
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)("img", { src: R, width: 75, height: 75, alt: "" }),
            (0, l.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_3_TITLE,
            }),
          ],
        });
      }
      function k(e) {
        let t, a;
        let {
          selectedRating: n,
          setSelectedRating: s,
          selectedReasons: d,
          setSelectedReasons: r,
          setUserFeedback: o,
          backPressed: h,
          onSubmitPressed: E,
          onBackPressed: I,
          onClosePressed: _,
          showSubmitted: x,
          canSubmit: v,
          isAnimating: C,
          useReducedMotion: S,
        } = (0, c.useGuildFeedFeedback)(e);
        return (
          x
            ? ((a = !1), (t = (0, l.jsx)(H, {})))
            : null == n || h || C
              ? ((a = !1),
                (t = (0, l.jsx)(y, {
                  disableAnimation: h || S,
                  selectedRating: n,
                  setSelectedRating: s,
                })))
              : ((a = !0),
                (t = (0, l.jsx)(O, {
                  selectedRating: n,
                  selectedReasons: d,
                  onSelectedReasons: r,
                  onUserFeedbackChanged: o,
                  onBackPressed: I,
                  onSubmitPressed: E,
                  canSubmit: v,
                }))),
          (0, l.jsx)("div", {
            className: g.parentContainer,
            onClick: e => e.stopPropagation(),
            children: (0, l.jsxs)("div", {
              className: i(g.container, g.containerDivider),
              children: [
                t,
                a
                  ? (0, l.jsx)(u.Clickable, {
                      className: i(g.icon, g.back),
                      onClick: I,
                      children: (0, l.jsx)(f.default, {
                        direction: f.default.Directions.LEFT,
                      }),
                    })
                  : null,
                (0, l.jsx)(u.Clickable, {
                  className: i(g.icon, g.close),
                  onClick: _,
                  children: (0, l.jsx)(m.default, {}),
                }),
              ],
            }),
          })
        );
      }
    },
    339274: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("77078"),
        r = a("333987"),
        u = a("77810"),
        o = n.forwardRef(function (e, t) {
          let {
              className: a,
              children: s,
              ariaLabel: o,
              onContextMenu: c,
              onCardClick: f,
              onItemClick: m,
              listItemProps: h,
              itemId: E,
              selected: g,
              ...I
            } = e,
            [_, x] = (0, r.default)(t),
            v = n.useRef(null);
          return (0, l.jsxs)("div", {
            ref: x,
            className: i(u.card, u.interactiveCard, { [u.selected]: g }, a),
            "data-item-id": E,
            onContextMenu: c,
            onClick: e => (null == f ? void 0 : f(e, _.current)),
            ...I,
            children: [
              (0, l.jsx)(d.Clickable, {
                className: u.clickableTarget,
                innerRef: v,
                "aria-label": o,
                onClick: m,
                ...h,
              }),
              s,
            ],
          });
        });
    },
    537594: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("611221"),
        i = a("446674"),
        d = a("449008"),
        r = a("713810"),
        u = a("185014"),
        o = a("530853"),
        c = a("435837"),
        f = a("592979"),
        m = a("232882"),
        h = a("309673"),
        E = n.memo(function (e) {
          let {
              guildId: t,
              itemId: a,
              scrollerHeight: E,
              scrollerRef: g,
              showFeedback: I,
              setOnDismissedFeedback: _,
            } = e,
            [x, v, C] = (0, i.useStateFromStoresArray)([u.default], () => [
              u.default.getItem(t, a),
              u.default.getIsItemHiding(t, a),
              u.default.getIsItemHidden(t, a),
            ]),
            S = n.useRef(null);
          if (
            (n.useEffect(() => {
              var e;
              let l = S.current;
              if (null == l || null == E) {
                (0, r.markGuildFeedItemAsUnseen)(t, a, Date.now());
                return;
              }
              let n = l.clientHeight,
                s =
                  null === (e = g.current) || void 0 === e
                    ? void 0
                    : e.getScrollerNode();
              if (null == s) return;
              let i = Math.min(0.5, (0.5 * E) / n),
                d = new IntersectionObserver(
                  e =>
                    (function (e, t, a) {
                      for (let l of a) {
                        let a = l.target.dataset.itemId;
                        if (null == a) return;
                        let n = Date.now();
                        l.intersectionRatio >= t
                          ? (0, r.markGuildFeedItemAsSeen)(e, a, n)
                          : (0, r.markGuildFeedItemAsUnseen)(e, a, n);
                      }
                    })(t, i, e),
                  {
                    root: s,
                    rootMargin: "0px 100000px 0px 100000px",
                    threshold: i,
                  }
                );
              return (
                d.observe(l),
                () => {
                  d.disconnect();
                }
              );
            }, [a, t, g, E, v, C]),
            null == x || C)
          )
            return null;
          if (v) return (0, l.jsx)(c.default, { guildId: t, feedItem: x });
          switch (x.type) {
            case s.GuildFeedItemTypes.FORUM_POST:
              return (0, l.jsx)(h.default, {
                ref: S,
                guildId: t,
                postItem: x,
                showFeedback: I,
                setOnDismissedFeedback: _,
              });
            case s.GuildFeedItemTypes.MESSAGE:
              return (0, l.jsx)(m.default, {
                ref: S,
                guildId: t,
                messageItem: x,
                showFeedback: I,
                setOnDismissedFeedback: _,
              });
            case s.GuildFeedItemTypes.MESSAGE_BUNDLE:
              return (0, l.jsx)(f.default, {
                ref: S,
                guildId: t,
                messageBundleItem: x,
                showFeedback: I,
                setOnDismissedFeedback: _,
              });
            case s.GuildFeedItemTypes.CONVERSATION:
              return (0, l.jsx)(o.default, {
                ref: S,
                guildId: t,
                conversationItem: x,
                showFeedback: I,
                setOnDismissedFeedback: _,
              });
            default:
              (0, d.assertNever)(x);
          }
        });
    },
    605143: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        s = a.n(n),
        i = a("245102");
      function d(e) {
        let { children: t, hideBorder: a } = e;
        return (0, l.jsx)("div", {
          className: s(i.feedItemHeader, { [i.hideBorder]: a }),
          children: t,
        });
      }
    },
    435837: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return T;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("355262"),
        i = a("801110"),
        d = a("446674"),
        r = a("77078"),
        u = a("679653"),
        o = a("419830"),
        c = a("42203"),
        f = a("26989"),
        m = a("27618"),
        h = a("697218"),
        E = a("116320"),
        g = a("867544"),
        I = a("387111"),
        _ = a("713810"),
        x = a("60036"),
        v = a("339274"),
        C = a("605143"),
        S = a("782340"),
        N = a("641401");
      function p(e) {
        let { guildId: t, feedItem: a, onSendFeedback: n } = e,
          s = (0, x.default)(a),
          g = s.channel_id,
          v = (0, d.useStateFromStores)([c.default], () =>
            c.default.getChannel(g)
          ),
          C = (0, u.default)(v),
          p = (0, o.getChannelIconComponent)(v),
          T = (0, d.useStateFromStores)([h.default], () =>
            h.default.getUser(s.author.id)
          ),
          A = (0, d.useStateFromStores)([c.default, f.default, m.default], () =>
            I.default.getName(t, g, T)
          ),
          j = e => {
            (0, _.setFeedItemPreference)(t, e), n();
          };
        return (0, l.jsxs)("div", {
          className: N.options,
          children: [
            (0, l.jsx)(r.Clickable, {
              className: N.option,
              onClick: () =>
                j({
                  channel_id: g,
                  message_id: s.id,
                  entity_type: i.GuildFeedPreferenceEntityTypes.MESSAGE,
                }),
              children: (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "interactive-active",
                children:
                  S.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_NO_LIKE,
              }),
            }),
            (0, l.jsx)(r.Clickable, {
              className: N.option,
              onClick: () =>
                j({
                  channel_id: g,
                  entity_type: i.GuildFeedPreferenceEntityTypes.CHANNEL,
                }),
              children: (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "interactive-active",
                children:
                  S.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_CHANNEL.format(
                    {
                      channelName: C,
                      channelNameHook: (e, t) =>
                        (0, l.jsxs)(
                          "span",
                          {
                            children: [
                              null != p &&
                                (0, l.jsx)(p, {
                                  className: N.mentionIcon,
                                  width: 20,
                                  height: 20,
                                }),
                              " ",
                              e,
                            ],
                          },
                          t
                        ),
                    }
                  ),
              }),
            }),
            (0, l.jsx)(r.Clickable, {
              className: N.option,
              onClick: () => {
                var e;
                return j({
                  user_id:
                    null == s
                      ? void 0
                      : null === (e = s.author) || void 0 === e
                        ? void 0
                        : e.id,
                  entity_type: i.GuildFeedPreferenceEntityTypes.USER,
                });
              },
              children: (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "interactive-active",
                children:
                  S.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_USER.format(
                    {
                      username: A,
                      usernameHook: (e, t) =>
                        (0, l.jsxs)(
                          "span",
                          {
                            children: [
                              (0, l.jsx)(E.default, {
                                className: N.mentionIcon,
                                width: 20,
                                height: 20,
                              }),
                              " ",
                              e,
                            ],
                          },
                          t
                        ),
                    }
                  ),
              }),
            }),
          ],
        });
      }
      function T(e) {
        let { guildId: t, feedItem: a } = e,
          [i, d] = n.useState(!1),
          u = (0, s.useListItem)(a.id);
        return (0, l.jsxs)(v.default, {
          ariaLabel: S.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM,
          listItemProps: u,
          children: [
            (0, l.jsxs)(C.default, {
              hideBorder: i,
              children: [
                (0, l.jsx)(g.default, {
                  className: N.icon,
                  width: 16,
                  height: 16,
                  foregroundColor: "currentColor",
                }),
                i
                  ? (0, l.jsxs)("div", {
                      className: N.title,
                      children: [
                        (0, l.jsx)(r.Text, {
                          className: N.title,
                          variant: "text-md/medium",
                          color: "interactive-active",
                          children:
                            S.default.Messages
                              .GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_TITLE,
                        }),
                        (0, l.jsx)(r.Text, {
                          className: N.title,
                          variant: "text-xs/medium",
                          color: "interactive-normal",
                          children:
                            S.default.Messages
                              .GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_SUBTITLE,
                        }),
                      ],
                    })
                  : (0, l.jsx)(r.Text, {
                      className: N.title,
                      variant: "text-md/medium",
                      color: "interactive-active",
                      children:
                        S.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM,
                    }),
                (0, l.jsx)(r.Button, {
                  size: r.Button.Sizes.SMALL,
                  color: r.Button.Colors.PRIMARY,
                  onClick: () => {
                    (0, _.unhideItemFromGuildFeed)(a, t);
                  },
                  children: S.default.Messages.UNDO,
                }),
              ],
            }),
            !i &&
              (0, l.jsx)(p, {
                guildId: t,
                feedItem: a,
                onSendFeedback: () => d(!0),
              }),
          ],
        });
      }
    },
    759668: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("77078"),
        s = a("433487"),
        i = a("782340"),
        d = a("674498");
      function r(e) {
        e.stopPropagation();
      }
      function u(e) {
        let { onContextMenu: t } = e,
          a = i.default.Messages.MORE;
        return (0, l.jsx)("div", {
          onClick: r,
          onContextMenu: r,
          children: (0, l.jsx)(n.Tooltip, {
            text: a,
            hideOnClick: !0,
            children: e => {
              let { onMouseEnter: i, onMouseLeave: r, onClick: u } = e;
              return (0, l.jsx)(n.Button, {
                onMouseEnter: i,
                onMouseLeave: r,
                look: n.Button.Looks.BLANK,
                size: n.Button.Sizes.NONE,
                onClick: e => {
                  null == u || u(), t(e);
                },
                "aria-label": a,
                className: d.overflowButton,
                children: (0, l.jsx)(s.default, { className: d.icon }),
              });
            },
          }),
        });
      }
    },
    208695: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GuildFeedMessage: function () {
            return V;
          },
          default: function () {
            return W;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("446674"),
        r = a("77078"),
        u = a("405645"),
        o = a("887446"),
        c = a("634807"),
        f = a("913491"),
        m = a("574073"),
        h = a("865343"),
        E = a("909917"),
        g = a("380986"),
        I = a("969706"),
        _ = a("39331"),
        x = a("115859"),
        v = a("862451"),
        C = a("611792"),
        S = a("554372"),
        N = a("256572"),
        p = a("208021"),
        T = a("582713"),
        A = a("42203"),
        j = a("780571"),
        M = a("497880"),
        D = a("93332"),
        F = a("299039"),
        L = a("713810"),
        R = a("185014"),
        b = a("2804"),
        G = a("603371"),
        y = a("515631"),
        O = a("49111"),
        H = a("724210"),
        k = a("894488"),
        U = a("782340"),
        w = a("840741"),
        B = a("5762");
      let P = n.memo(function (e) {
          let {
              message: t,
              channel: a,
              animateAvatar: s,
              repliedMessage: i,
            } = e,
            { popouts: d, setPopout: r } = (0, I.default)(
              t.id,
              k.DEFAULT_POPOUTS
            ),
            { usernameProfile: o, avatarProfile: c } = d,
            f = (0, g.useContextMenuUser)(t.author.id, a.id),
            h = (0, g.useClickMessageAuthorUsername)(t, a, o, r),
            _ = (0, g.useClickMessageAuthorAvatar)(c, r),
            x = n.useCallback(
              () =>
                r({
                  usernameProfile: !1,
                  avatarProfile: !1,
                  referencedUsernameProfile: !1,
                }),
              [r]
            ),
            v = (0, m.default)(t),
            C = (0, u.useRoleIcon)({
              guildId: a.guild_id,
              roleId: v.iconRoleId,
            });
          return (0, l.jsx)(D.default, {
            guildId: a.guild_id,
            message: t,
            channel: a,
            repliedMessage: i,
            author: v,
            showTimestampOnHover: t.type !== O.MessageTypes.REPLY,
            renderPopout: E.default,
            showAvatarPopout: c,
            showUsernamePopout: o,
            onClickAvatar: _,
            onClickUsername: h,
            onPopoutRequestClose: x,
            onContextMenu: f,
            roleIcon: C,
            animate: s,
          });
        }),
        V = n.forwardRef(function (e, t) {
          var a;
          let {
              guildId: s,
              channel: u,
              message: m,
              feedItemId: E,
              className: g,
              animateAvatar: I,
              contentClassName: D,
              children: G,
              groupId: k,
              onMessageClick: U,
              hideHeader: w = !1,
              forceAddReactions: V = !0,
              ...W
            } = e,
            K = n.useRef(null),
            z = (0, d.useStateFromStores)([A.default], () =>
              A.default.getChannel(u.id)
            ),
            Y = null != z && m.isFirstMessageInForumPost(z),
            Z = (0, c.isMessageNewerThanImprovedMarkdownEpoch)(
              (null !== (a = m.editedTimestamp) && void 0 !== a
                ? a
                : m.timestamp
              ).valueOf()
            ),
            { content: X, hasSpoilerEmbeds: J } = (0, _.default)(m, {
              hideSimpleEmbedContent: !0,
              allowList: Y || Z,
              allowHeading: Y || Z,
              allowLinks: !0,
              previewLinkTarget: !0,
            }),
            q = m.type === O.MessageTypes.REPLY ? m.messageReference : void 0,
            Q = (0, d.useStateFromStores)([N.default], () =>
              N.default.getMessageByReference(q)
            ),
            $ = (0, d.useStateFromStores)(
              [A.default],
              () =>
                m.hasFlag(O.MessageFlags.HAS_THREAD) &&
                A.default.getChannel(F.default.castMessageIdAsChannelId(m.id))
            ),
            ee = (0, h.getMessageAriaLabelledBy)(m, k, {
              hasTimestamp: m.id === k,
            }),
            et = (0, h.getMessageAriaDescribedBy)(m),
            ea =
              null != q
                ? (0, l.jsx)(r.Clickable, {
                    onClick: e => {
                      null != Q.message &&
                        (e.stopPropagation(),
                        (0, L.trackFeedItemInteracted)({
                          feed_item_type: (0, b.getFeedItemTypeFromId)(E),
                          feed_item_id: E,
                          load_id: R.default.getLoadId(s),
                          action_type:
                            y.FeedItemInteractionType
                              .REFERENCED_MESSAGE_CLICKED,
                          guild_id: s,
                          channel_id: u.id,
                          message_id: m.id,
                          home_session_id: o.default.getHomeSessionId(s),
                        }),
                        p.default.openChannelAsSidebar({
                          guildId: u.guild_id,
                          channelId: u.id,
                          baseChannelId: H.StaticChannelRoute.GUILD_HOME,
                          details: {
                            type: T.SidebarOpenDetailsType.HOME,
                            initialMessageId: Q.message.id,
                          },
                        }));
                    },
                    children: (0, S.default)(m, u, q, Q, !1),
                  })
                : null,
            el = (0, f.default)(m),
            en = n.useCallback(
              e => {
                U(e, K.current, m);
              },
              [U, m]
            );
          return (0, l.jsx)(j.default, {
            messageRef: K,
            className: i(g, {
              [B.mentioned]: m.mentioned && !(0, f.default)(m),
            }),
            onClick: en,
            childrenRepliedMessage: ea,
            childrenExecutedCommand: (0, C.default)(m, u, !1),
            childrenHeader:
              el || w
                ? null
                : (0, l.jsx)(P, {
                    channel: u,
                    message: m,
                    animateAvatar: I,
                    repliedMessage: Q,
                  }),
            childrenAccessories: (0, x.default)({
              channelMessageProps: e,
              hasSpoilerEmbeds: J,
              isInteracting: !1,
              forceAddReactions: V,
            }),
            childrenMessageContent: (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(M.default, {
                  className: D,
                  message: m,
                  content: X,
                  contentRef: t,
                }),
                G,
              ],
            }),
            childrenSystemMessage: (0, v.default)(e),
            hasThread: null != $ && m.hasFlag(O.MessageFlags.HAS_THREAD),
            hasReply: m.type === O.MessageTypes.REPLY,
            isSystemMessage: el,
            "aria-labelledby": ee,
            "aria-describedby": et,
            ...W,
          });
        });
      var W = n.memo(function (e) {
        let { message: t, guildId: a, feedItemId: s, disableTruncation: d } = e,
          u = t.attachments.length > 0,
          [o, c] = n.useState(!1),
          [f, m] = (0, G.default)(a, s);
        return (0, l.jsx)(V, {
          ref: e => {
            null != e && !d && c(e.scrollHeight > e.clientHeight);
          },
          contentClassName: i({
            [w.clampLarge]: !d && !f && !u,
            [w.clampSmall]: !d && !f && u,
          }),
          ...e,
          children:
            o && !f
              ? (0, l.jsx)(r.Clickable, {
                  className: w.showMore,
                  onClick: e => m(e, t),
                  "aria-hidden": !0,
                  children:
                    U.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE,
                })
              : null,
        });
      });
    },
    449405: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("77078"),
        i = a("603371"),
        d = a("208695"),
        r = a("782340"),
        u = a("840741"),
        o = n.memo(function (e) {
          let { guildId: t, feedItemId: a, messages: o } = e,
            c = n.useRef([]),
            f = o.some(e => e.attachments.length > 0),
            m = f ? 4 : 8,
            [h, E] = n.useState(),
            [g, I] = n.useState(),
            [_, x] = (0, i.default)(t, a);
          if (
            (n.useLayoutEffect(() => {
              let e = 0;
              for (let [a, l] of c.current.entries()) {
                var t;
                if (null == l) continue;
                let n = parseFloat(
                    null !==
                      (t = window
                        .getComputedStyle(l)
                        .getPropertyValue("line-height")) && void 0 !== t
                      ? t
                      : "0"
                  ),
                  s = l.scrollHeight / n;
                if ((e += s) > m) {
                  E(a), I(s - (e - m));
                  break;
                }
              }
            }, [o, m]),
            0 === o.length)
          )
            return null;
          let v = o[0].id;
          return (0, l.jsx)(l.Fragment, {
            children: o.map((t, a) => {
              if (null != h && a > h && !_) return null;
              let n = h === a,
                i =
                  n && null != g
                    ? (function (e) {
                        if (e >= 10) return u.clampLarge;
                        if (e >= 4 && e < 10) return u.clampMed;
                        if (e < 4) return u.clampSmall;
                      })(g)
                    : null,
                f = n && null != i && !_;
              return (0, l.jsx)(
                d.GuildFeedMessage,
                {
                  message: t,
                  groupId: v,
                  ...e,
                  contentClassName: f ? i : void 0,
                  children: f
                    ? (0, l.jsx)(s.Clickable, {
                        className: u.showMore,
                        onClick: e => x(e, t),
                        "aria-hidden": !0,
                        children:
                          r.default.Messages
                            .GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE,
                      })
                    : null,
                  ref: e => (c.current[a] = e),
                  hideHeader: 0 !== a,
                  forceAddReactions: a === o.length - 1,
                },
                t.id
              );
            }),
          });
        });
    },
    592979: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        }),
        a("222007"),
        a("834022");
      var l = a("37983"),
        n = a("884691"),
        s = a("355262"),
        i = a("446674"),
        d = a("77078"),
        r = a("272030"),
        u = a("679653"),
        o = a("419830"),
        c = a("537325"),
        f = a("208021"),
        m = a("582713"),
        h = a("982108"),
        E = a("42203"),
        g = a("27618"),
        I = a("449008"),
        _ = a("185014"),
        x = a("886484"),
        v = a("60036"),
        C = a("468670"),
        S = a("113312"),
        N = a("339274"),
        p = a("605143"),
        T = a("759668"),
        A = a("449405"),
        j = a("232882"),
        M = a("49111"),
        D = a("724210"),
        F = a("782340"),
        L = a("148631");
      let R = async () => {
        let { default: e } = await a.el("814781").then(a.bind(a, "814781"));
        return e;
      };
      var b = n.forwardRef(function (e, t) {
        var a, b;
        let {
            guildId: G,
            messageBundleItem: y,
            showFeedback: O,
            setOnDismissedFeedback: H,
          } = e,
          { messages: k } = y,
          U = k[0].message,
          w = k[k.length - 1].message,
          B = w.channel_id,
          P = (0, i.useStateFromStoresArray)(
            [_.default],
            () =>
              k
                .map(e => _.default.getCachedMessage(G, B, e.message.id))
                .filter(I.isNotNullish),
            [G, B, k]
          ),
          V = (0, i.useStateFromStores)([E.default], () =>
            E.default.getChannel(B)
          ),
          W = (0, o.getChannelIconComponent)(V, void 0, { textFocused: !0 }),
          K = (0, o.getChannelIconTooltipText)(V),
          z = (0, u.default)(V),
          [Y, Z] = n.useState(!1),
          X = (0, i.useStateFromStores)(
            [g.default],
            () => null != w && g.default.isBlocked(w.author.id)
          ),
          J = (0, s.useListItem)(
            null !==
              (b =
                null === (a = P[P.length - 1]) || void 0 === a
                  ? void 0
                  : a.id) && void 0 !== b
              ? b
              : y.id
          ),
          q = y.id,
          Q = (0, i.useStateFromStores)([h.default], () =>
            h.default.getSidebarState(D.StaticChannelRoute.GUILD_HOME)
          ),
          $ = (0, x.getSidebarMessageId)(Q, V),
          ee = null != $ && U.id === $,
          {
            handleItemClick: et,
            handleChannelClick: ea,
            handleCardClick: el,
            handleMessageClick: en,
          } = (0, C.default)({
            guildId: G,
            channelId: B,
            feedItemId: q,
            onChannelClick: () => (0, c.default)(M.Routes.CHANNEL(G, B, U.id)),
            onContentClick: e => {
              var t;
              f.default.openChannelAsSidebar({
                guildId: G,
                channelId: B,
                baseChannelId: D.StaticChannelRoute.GUILD_HOME,
                flash: !1,
                details: {
                  type: m.SidebarOpenDetailsType.HOME,
                  initialMessageId:
                    null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                      ? t
                      : U.id,
                  highlightMessageIds: new Set(
                    (0, v.getAllMessageIdsFromFeedItem)(y)
                  ),
                },
              });
            },
          }),
          es = n.useMemo(
            () =>
              k
                .map(e => {
                  var t;
                  return null !== (t = e.referenceMessages) && void 0 !== t
                    ? t
                    : [];
                })
                .flat(),
            [k]
          );
        if (null == V || null == U || null == w || X) return null;
        let ei = e => {
          e.stopPropagation(),
            (0, r.openContextMenuLazy)(e, async () => {
              let e = await R();
              return t => (0, l.jsx)(e, { ...t, item: y, channel: V });
            });
        };
        return (0, l.jsxs)(N.default, {
          className: O ? L.containerNoPadding : L.container,
          ref: t,
          selected: ee,
          onCardClick: el,
          onItemClick: et,
          onContextMenu: ei,
          itemId: q,
          ariaLabel:
            F.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
              channelName: z,
            }),
          listItemProps: J,
          onMouseEnter: () => Z(!0),
          onMouseLeave: () => Z(!1),
          children: [
            (0, l.jsxs)(d.HeadingLevel, {
              component: (0, l.jsxs)(p.default, {
                children: [
                  (0, l.jsx)("div", {
                    className: L.messageHeaderMenuLeft,
                    children: (0, l.jsxs)(d.Clickable, {
                      className: L.channelNameContainer,
                      onClick: ea,
                      children: [
                        null != W
                          ? (0, l.jsx)(d.Tooltip, {
                              text: K,
                              delay: 500,
                              children: e =>
                                (0, l.jsx)(W, {
                                  ...e,
                                  className: L.channelIcon,
                                  height: 16,
                                  width: 16,
                                }),
                            })
                          : null,
                        (0, l.jsx)(d.Heading, {
                          lineClamp: 1,
                          variant: "heading-sm/semibold",
                          children: z,
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: L.messageHeaderMenuRight,
                    children: (0, l.jsx)(T.default, {
                      feedItem: y,
                      guildId: G,
                      onContextMenu: ei,
                    }),
                  }),
                ],
              }),
              children: [
                (0, l.jsx)("div", {
                  className: L.messageBundleItemBody,
                  children: (0, l.jsx)(A.default, {
                    feedItemId: y.id,
                    guildId: G,
                    channel: V,
                    messages: P,
                    animateAvatar: Y,
                    onMessageClick: en,
                  }),
                }),
                (0, l.jsx)(j.ReferenceMessages, {
                  referenceMessages: es,
                  guildId: G,
                }),
              ],
            }),
            O &&
              (0, l.jsx)(S.default, {
                guildId: G,
                guildFeedItem: y,
                setOnDismissFeedback: H,
              }),
          ],
        });
      });
    },
    232882: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ReferenceMessagesBase: function () {
            return G;
          },
          ReferenceMessages: function () {
            return y;
          },
          default: function () {
            return O;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("355262"),
        i = a("611221"),
        d = a("446674"),
        r = a("77078"),
        u = a("272030"),
        o = a("679653"),
        c = a("419830"),
        f = a("537325"),
        m = a("208021"),
        h = a("582713"),
        E = a("982108"),
        g = a("42203"),
        I = a("27618"),
        _ = a("811305"),
        x = a("185014"),
        v = a("886484"),
        C = a("2804"),
        S = a("468670"),
        N = a("120027"),
        p = a("113312"),
        T = a("339274"),
        A = a("605143"),
        j = a("759668"),
        M = a("208695"),
        D = a("49111"),
        F = a("724210"),
        L = a("782340"),
        R = a("777531");
      let b = async () => {
        let { default: e } = await a.el("437150").then(a.bind(a, "437150"));
        return e;
      };
      function G(e) {
        let { guildId: t, maxUsers: a, users: n, text: s } = e;
        return (0, l.jsxs)("div", {
          className: R.referenceMessagesText,
          children: [
            (0, l.jsx)(_.default, {
              guildId: t,
              users: n,
              size: _.Sizes.SIZE_16,
              className: R.userSummaryItem,
              max: a,
              showDefaultAvatarsForNullUsers: !0,
            }),
            (0, l.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: s,
            }),
          ],
        });
      }
      function y(e) {
        let { referenceMessages: t, guildId: a } = e,
          s = n.useMemo(() => {
            let e = new Set();
            return t
              .map(e => e.author)
              .filter(t => !(null == t || e.has(t.id)) && (e.add(t.id), !0))
              .slice(0, 3);
          }, [t]),
          i = t.length;
        if (0 === i) return null;
        let d =
          i > 3
            ? L.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
                maxReplies: 3,
              })
            : L.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
                numReplies: i,
              });
        return (0, l.jsx)(G, { guildId: a, users: s, text: d });
      }
      var O = n.forwardRef(function (e, t) {
        var a, _;
        let {
            guildId: G,
            messageItem: O,
            showFeedback: H,
            setOnDismissedFeedback: k,
          } = e,
          U = O.message.channel_id,
          w = O.message.id,
          { message: B, isFeaturedMessage: P } = (0,
          d.useStateFromStoresObject)(
            [x.default],
            () => {
              let e = x.default.getCachedMessage(G, U, w),
                t =
                  null != e &&
                  x.default.getIsItemFeatured({
                    guildId: G,
                    entity: e,
                    entityType: i.GuildFeedItemTypes.MESSAGE,
                  });
              return { message: e, isFeaturedMessage: t };
            },
            [G, U, w]
          ),
          V = (0, d.useStateFromStores)([g.default], () =>
            g.default.getChannel(U)
          ),
          W = (0, c.getChannelIconComponent)(V, void 0, { textFocused: !0 }),
          K = (0, c.getChannelIconTooltipText)(V),
          z =
            null !== (a = null == O ? void 0 : O.referenceMessages) &&
            void 0 !== a
              ? a
              : [],
          Y = (0, o.default)(V),
          [Z, X] = n.useState(!1),
          J = (0, d.useStateFromStores)(
            [I.default],
            () =>
              null != B && I.default.isBlocked(null == B ? void 0 : B.author.id)
          ),
          q = (0, s.useListItem)(
            null !== (_ = null == B ? void 0 : B.id) && void 0 !== _ ? _ : w
          ),
          Q = (0, C.default)(O),
          $ = (0, d.useStateFromStores)([E.default], () =>
            E.default.getSidebarState(F.StaticChannelRoute.GUILD_HOME)
          ),
          ee = (0, v.getSidebarMessageId)($, V),
          et = null != ee && O.message.id === ee,
          ea = O.highlighted
            ? L.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT
            : P
              ? L.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS
              : null,
          {
            handleItemClick: el,
            handleChannelClick: en,
            handleCardClick: es,
            handleMessageClick: ei,
          } = (0, S.default)({
            guildId: G,
            channelId: U,
            feedItemId: Q,
            onChannelClick: () => (0, f.default)(D.Routes.CHANNEL(G, U, w)),
            onContentClick: () => {
              m.default.openChannelAsSidebar({
                guildId: G,
                channelId: U,
                baseChannelId: F.StaticChannelRoute.GUILD_HOME,
                details: {
                  type: h.SidebarOpenDetailsType.HOME,
                  initialMessageId: w,
                  highlightMessageIds: new Set([w]),
                },
              });
            },
          });
        if (null == V || null == B || null == O || J) return null;
        let ed = e => {
          e.stopPropagation(),
            (0, u.openContextMenuLazy)(e, async () => {
              let e = await b();
              return t =>
                (0, l.jsx)(e, { ...t, messageItem: O, channel: V, message: B });
            });
        };
        return (0, l.jsxs)(T.default, {
          className: H ? R.containerNoPadding : R.container,
          ref: t,
          selected: et,
          onCardClick: es,
          onItemClick: el,
          onContextMenu: ed,
          itemId: Q,
          ariaLabel:
            L.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
              channelName: Y,
            }),
          listItemProps: q,
          onMouseEnter: () => X(!0),
          onMouseLeave: () => X(!1),
          children: [
            (0, l.jsxs)(r.HeadingLevel, {
              component: (0, l.jsxs)(A.default, {
                children: [
                  (0, l.jsxs)("div", {
                    className: R.messageHeaderMenuLeft,
                    children: [
                      (0, l.jsxs)(r.Clickable, {
                        className: R.channelNameContainer,
                        onClick: en,
                        children: [
                          null != W
                            ? (0, l.jsx)(r.Tooltip, {
                                text: K,
                                delay: 500,
                                children: e =>
                                  (0, l.jsx)(W, {
                                    ...e,
                                    className: R.channelIcon,
                                    height: 16,
                                    width: 16,
                                  }),
                              })
                            : null,
                          (0, l.jsx)(r.Heading, {
                            lineClamp: 1,
                            variant: "heading-sm/semibold",
                            children: Y,
                          }),
                        ],
                      }),
                      null != ea &&
                        (0, l.jsxs)("div", {
                          className: R.featuredMessageContainer,
                          children: [
                            (0, l.jsx)(N.default, {
                              height: 4,
                              width: 4,
                              "aria-hidden": "true",
                              className: R.featuredMessageIcon,
                            }),
                            (0, l.jsx)(r.Text, {
                              className: R.featuredMessageText,
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children: ea,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: R.messageHeaderMenuRight,
                    children: (0, l.jsx)(j.default, {
                      feedItem: O,
                      guildId: G,
                      onContextMenu: ed,
                    }),
                  }),
                ],
              }),
              children: [
                (0, l.jsx)(M.default, {
                  className: R.messageItemBody,
                  guildId: G,
                  animateAvatar: Z,
                  channel: V,
                  message: B,
                  feedItemId: O.id,
                  onMessageClick: ei,
                }),
                (0, l.jsx)(y, { referenceMessages: z, guildId: G }),
              ],
            }),
            H &&
              (0, l.jsx)(p.default, {
                guildId: G,
                guildFeedItem: O,
                setOnDismissFeedback: k,
              }),
          ],
        });
      });
    },
    309673: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return P;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("597755"),
        i = a.n(s),
        d = a("355262"),
        r = a("611221"),
        u = a("446674"),
        o = a("77078"),
        c = a("272030"),
        f = a("679653"),
        m = a("419830"),
        h = a("680986"),
        E = a("90625"),
        g = a("537325"),
        I = a("208021"),
        _ = a("800843"),
        x = a("610730"),
        v = a("982108"),
        C = a("42203"),
        S = a("27618"),
        N = a("185014"),
        p = a("886484"),
        T = a("2804"),
        A = a("468670"),
        j = a("120027"),
        M = a("113312"),
        D = a("339274"),
        F = a("605143"),
        L = a("759668"),
        R = a("208695"),
        b = a("232882"),
        G = a("49111"),
        y = a("724210"),
        O = a("648564"),
        H = a("782340"),
        k = a("746831");
      let U = new Set(["Electron", "Chrome"]),
        w = async () => {
          let { default: e } = await a.el("437150").then(a.bind(a, "437150"));
          return e;
        };
      function B(e) {
        let { channel: t } = e,
          a = (0, u.useStateFromStores)([x.default], () => {
            var e;
            return null !== (e = x.default.getCount(t.id)) && void 0 !== e
              ? e
              : 0;
          }),
          n =
            a >= O.MAX_THREAD_MESSAGE_COUNT
              ? H.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
                  maxReplies: O.MAX_THREAD_MESSAGE_COUNT,
                })
              : H.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
                  numReplies: a,
                }),
          s = (0, u.useStateFromStores)([_.default], () =>
            _.default.getMemberIdsPreview(t.id)
          ),
          i = (0, h.useFacepileUsers)(t, null != s ? s : []);
        return 0 === a
          ? null
          : (0, l.jsx)(b.ReferenceMessagesBase, {
              guildId: t.guild_id,
              maxUsers: 5,
              users: i,
              text: n,
            });
      }
      var P = n.forwardRef(function (e, t) {
        var a;
        let {
            guildId: s,
            postItem: _,
            showFeedback: x,
            setOnDismissedFeedback: b,
          } = e,
          { thread: O } = _,
          P = (0, u.useStateFromStores)(
            [C.default],
            () => C.default.getChannel(O.id),
            [O.id]
          ),
          { message: V, isFeaturedPost: W } = (0, u.useStateFromStoresObject)(
            [N.default],
            () => {
              let e = N.default.getCachedMessage(s, O.id, _.message.id),
                t = N.default.getIsItemFeatured({
                  guildId: s,
                  entity: O,
                  entityType: r.GuildFeedItemTypes.FORUM_POST,
                });
              return { message: e, isFeaturedPost: t };
            },
            [s, _.message.id, O]
          ),
          K = (0, f.default)(O),
          z = (0, u.useStateFromStores)(
            [S.default],
            () =>
              null != V && S.default.isBlocked(null == V ? void 0 : V.author.id)
          ),
          Y = (0, d.useListItem)(
            null !== (a = null == V ? void 0 : V.id) && void 0 !== a
              ? a
              : _.message.id
          ),
          Z = (0, T.default)(_),
          X = (0, m.getChannelIconTooltipText)(O),
          J = (0, u.useStateFromStores)([C.default], () =>
            C.default.getChannel(O.parent_id)
          ),
          q = (0, f.default)(J),
          Q = (0, m.getChannelIconComponent)(J),
          [$, ee] = n.useState(!1),
          et = (0, u.useStateFromStores)([v.default], () =>
            v.default.getSidebarState(y.StaticChannelRoute.GUILD_HOME)
          ),
          ea = (0, p.getSidebarMessageId)(et, P),
          el = null != ea && _.message.id === ea,
          en = _.highlighted
            ? H.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT
            : W
              ? H.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS
              : null,
          {
            handleItemClick: es,
            handleChannelClick: ei,
            handleCardClick: ed,
            handleMessageClick: er,
          } = (0, A.default)({
            guildId: s,
            channelId: O.id,
            feedItemId: Z,
            onChannelClick: () =>
              (0, g.default)(G.Routes.CHANNEL(s, O.parent_id)),
            onContentClick: () =>
              I.default.openThreadAsSidebar({
                guildId: s,
                baseChannelId: y.StaticChannelRoute.GUILD_HOME,
                channelId: O.id,
              }),
          }),
          [eu, eo] = (0, h.useSomeAppliedTags)(O),
          ec = eu[0],
          ef = (0, h.useAppliedTags)(O).slice(1),
          em = null != i.name && !U.has(i.name);
        if (null == O || null == P || null == V || null == _ || z) return null;
        let eh = e => {
          e.stopPropagation(),
            (0, c.openContextMenuLazy)(e, async () => {
              let e = await w();
              return t =>
                (0, l.jsx)(e, { ...t, messageItem: _, channel: P, message: V });
            });
        };
        return (0, l.jsxs)(D.default, {
          className: x ? k.containerNoPadding : k.container,
          ref: t,
          selected: el,
          onCardClick: ed,
          onItemClick: es,
          onContextMenu: eh,
          itemId: Z,
          ariaLabel:
            H.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
              channelName: K,
            }),
          listItemProps: Y,
          onMouseEnter: () => ee(!0),
          onMouseLeave: () => ee(!1),
          children: [
            (0, l.jsx)(o.HeadingLevel, {
              component: (0, l.jsxs)(F.default, {
                children: [
                  (0, l.jsxs)("div", {
                    className: k.postHeaderMenuLeft,
                    children: [
                      (0, l.jsxs)(o.Clickable, {
                        className: k.channelNameContainer,
                        onClick: ei,
                        children: [
                          null != Q
                            ? (0, l.jsx)(o.Tooltip, {
                                text: X,
                                delay: 500,
                                children: e =>
                                  (0, l.jsx)(Q, {
                                    ...e,
                                    className: k.channelIcon,
                                    height: 16,
                                    width: 16,
                                  }),
                              })
                            : null,
                          (0, l.jsx)(o.Heading, {
                            className: k.channelName,
                            variant: "heading-sm/semibold",
                            lineClamp: 1,
                            children: q,
                          }),
                        ],
                      }),
                      null != en &&
                        (0, l.jsxs)("div", {
                          className: k.featuredPostContainer,
                          children: [
                            (0, l.jsx)(j.default, {
                              height: 4,
                              width: 4,
                              "aria-hidden": "true",
                              className: k.featuredPostIcon,
                            }),
                            (0, l.jsx)(o.Text, {
                              className: k.featuredPostText,
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children: en,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: k.postHeaderMenuRight,
                    children: (0, l.jsx)(L.default, {
                      feedItem: _,
                      guildId: s,
                      onContextMenu: eh,
                    }),
                  }),
                ],
              }),
              children: (0, l.jsxs)(o.HeadingLevel, {
                component: (0, l.jsxs)("div", {
                  className: k.titleContainer,
                  children: [
                    (0, l.jsx)(o.Heading, {
                      className: k.title,
                      variant: "heading-lg/semibold",
                      children: O.name,
                    }),
                    null != ec
                      ? (0, l.jsxs)("div", {
                          className: k.tags,
                          children: [
                            (0, l.jsx)(E.default, {
                              tag: ec,
                              size: E.default.Sizes.SMALL,
                            }),
                            eo > 0
                              ? (0, l.jsx)(E.ForumTagOverflow, {
                                  tags: ef,
                                  count: eo,
                                  size: E.default.Sizes.SMALL,
                                })
                              : null,
                          ],
                        })
                      : null,
                  ],
                }),
                children: [
                  (0, l.jsx)(R.default, {
                    className: k.messageItemBody,
                    guildId: O.guild_id,
                    animateAvatar: $,
                    channel: O,
                    message: V,
                    feedItemId: _.id,
                    onMessageClick: er,
                    disableTruncation: em,
                  }),
                  (0, l.jsx)(B, { channel: O }),
                ],
              }),
            }),
            x &&
              (0, l.jsx)(M.default, {
                guildId: s,
                guildFeedItem: _,
                setOnDismissFeedback: b,
              }),
          ],
        });
      });
    },
    603371: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        }),
        a("222007");
      var l = a("884691"),
        n = a("887446"),
        s = a("713810"),
        i = a("185014"),
        d = a("2804"),
        r = a("515631");
      function u(e, t) {
        let [a, u] = l.useState(!1),
          o = l.useCallback(
            (a, l) => {
              a.stopPropagation(),
                u(!0),
                (0, s.trackFeedItemInteracted)({
                  feed_item_type: (0, d.getFeedItemTypeFromId)(t),
                  feed_item_id: t,
                  load_id: i.default.getLoadId(e),
                  action_type: r.FeedItemInteractionType.EXPANDED_ITEM,
                  guild_id: e,
                  channel_id: l.channel_id,
                  message_id: l.id,
                  home_session_id: n.default.getHomeSessionId(e),
                });
            },
            [e, t]
          );
        return [a, o];
      }
    },
    302120: function (e, t, a) {
      "use strict";
      var l, n, s, i;
      a.r(t),
        a.d(t, {
          GUILD_FEED_FEEDBACK_LAST_SEEN: function () {
            return d;
          },
          GUILD_FEED_FEEDBACK_TIME_OUT: function () {
            return r;
          },
          GUILD_FEED_FEEDBACK_ANIMATION_DURATION: function () {
            return u;
          },
          GuildFeedbackRating: function () {
            return l;
          },
          GuildFeedFeedbackReason: function () {
            return n;
          },
          GUILD_FEED_FEEDBACK_REASONS: function () {
            return o;
          },
        });
      let d = "guild_feed_feedback_last_seen",
        r = 6048e5,
        u = 450;
      ((s = l || (l = {})).TERRIBLE = "terrible"),
        (s.BAD = "bad"),
        (s.OKAY = "okay"),
        (s.GOOD = "good"),
        (s.EXCELLENT = "excellent"),
        ((i = n || (n = {}))[(i.ALREADY_SAW = 0)] = "ALREADY_SAW"),
        (i[(i.IRRELEVANT = 1)] = "IRRELEVANT"),
        (i[(i.TOO_OLD = 2)] = "TOO_OLD"),
        (i[(i.CONFUSING_OR_RANDOM = 3)] = "CONFUSING_OR_RANDOM"),
        (i[(i.INAPPROPRIATE = 4)] = "INAPPROPRIATE"),
        (i[(i.UNINTERESTING = 5)] = "UNINTERESTING"),
        (i[(i.ENTERTAINING = 6)] = "ENTERTAINING"),
        (i[(i.INFORMATIVE = 7)] = "INFORMATIVE"),
        (i[(i.USEFUL = 8)] = "USEFUL"),
        (i[(i.OTHER = 9)] = "OTHER"),
        (i[(i.FUNNY = 10)] = "FUNNY");
      let o = {
        terrible: [0, 1, 2, 3, 4, 9],
        bad: [0, 1, 2, 3, 4, 9],
        okay: [1, 2, 5, 0, 9],
        good: [10, 6, 7, 8, 9],
        excellent: [10, 6, 7, 8, 9],
      };
    },
    601414: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useShowFeedback: function () {
            return E;
          },
          getDescriptionFromReason: function () {
            return g;
          },
          useGuildFeedFeedback: function () {
            return I;
          },
        }),
        a("222007");
      var l = a("884691"),
        n = a("446674"),
        s = a("95410"),
        i = a("206230"),
        d = a("185014"),
        r = a("760190"),
        u = a("599110"),
        o = a("677315"),
        c = a("887446"),
        f = a("302120"),
        m = a("49111"),
        h = a("782340");
      function E() {
        let e = l.useMemo(
            () =>
              r.default.getExperimentBucket(
                o.GuildHomeFeedbackExperiment.definition.id
              ),
            []
          ),
          [t, a] = l.useState(!1),
          n = l.useMemo(
            () => s.default.get(f.GUILD_FEED_FEEDBACK_LAST_SEEN),
            [t]
          ),
          i = l.useMemo(
            () =>
              100 * Math.random() < e &&
              (null == n || Date.now() - n > f.GUILD_FEED_FEEDBACK_TIME_OUT),
            [e, n]
          );
        return { showFeedback: i, setOnDismissedFeedback: a };
      }
      function g(e) {
        switch (e) {
          case f.GuildFeedFeedbackReason.ALREADY_SAW:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ALREADY_SAW;
          case f.GuildFeedFeedbackReason.IRRELEVANT:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_IRRELEVANT;
          case f.GuildFeedFeedbackReason.TOO_OLD:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_TOO_OLD;
          case f.GuildFeedFeedbackReason.CONFUSING_OR_RANDOM:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_CONFUSING;
          case f.GuildFeedFeedbackReason.INAPPROPRIATE:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INAPPROPRIATE;
          case f.GuildFeedFeedbackReason.UNINTERESTING:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_UNINTERESTING;
          case f.GuildFeedFeedbackReason.ENTERTAINING:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ENTERTAINING;
          case f.GuildFeedFeedbackReason.INFORMATIVE:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INFORMATIVE;
          case f.GuildFeedFeedbackReason.USEFUL:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_USEFUL;
          case f.GuildFeedFeedbackReason.OTHER:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OTHER_REASON;
          case f.GuildFeedFeedbackReason.FUNNY:
            return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_FUNNY;
          default:
            return null;
        }
      }
      function I(e) {
        let { guildId: t, guildFeedItem: a, setOnDismissFeedback: r } = e,
          [o, h] = l.useState(),
          [E, I] = l.useState(new Set()),
          [_, x] = l.useState(),
          [v, C] = l.useState(!1),
          [S, N] = l.useState(!1),
          [p, T] = l.useState(!1),
          A = l.useCallback(
            e => {
              h(e),
                T(!0),
                C(!1),
                setTimeout(() => {
                  T(!1);
                }, f.GUILD_FEED_FEEDBACK_ANIMATION_DURATION + 150);
            },
            [h, C, T]
          ),
          j = l.useCallback(
            e => {
              e === f.GuildFeedFeedbackReason.OTHER &&
                E.has(f.GuildFeedFeedbackReason.OTHER) &&
                x(null);
              let t = new Set(E);
              t.has(e) ? t.delete(e) : t.add(e), I(t);
            },
            [E, x, I]
          ),
          M = l.useCallback(() => {
            C(!0), I(new Set());
          }, [C, I]),
          D = l.useCallback(
            e => {
              (function (e) {
                let {
                    guildId: t,
                    guildFeedItem: a,
                    dismissed: l,
                    selectedRating: n = null,
                    selectedReasons: s = null,
                    userFeedback: i = null,
                  } = e,
                  r = Array.from(null != s ? s : []);
                u.default.track(m.AnalyticEvents.HOME_FEEDBACK_SUBMITTED, {
                  guild_id: t,
                  home_session_id: c.default.getHomeSessionId(t),
                  feed_item_id: a.id,
                  feed_item_position: 0,
                  dismissed: l,
                  report_name: "feed_item_feedback",
                  load_id: d.default.getLoadId(t),
                  rating: n,
                  reason_codes: r,
                  reason_descriptions: r.map(e => {
                    var t;
                    return null !== (t = g(e)) && void 0 !== t ? t : "";
                  }),
                  user_feedback: i,
                });
              })({
                guildId: t,
                guildFeedItem: a,
                dismissed: e,
                selectedRating: o,
                selectedReasons: E,
                userFeedback: _,
              });
            },
            [t, a, o, E, _]
          ),
          F = l.useCallback(() => {
            s.default.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now()),
              null == r || r(!0),
              !S && D(!0);
          }, [D, r, S]),
          L = l.useCallback(() => {
            D(!1),
              N(!0),
              s.default.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now());
          }, [D]),
          R = l.useMemo(
            () =>
              E.size > 0 &&
              (!E.has(f.GuildFeedFeedbackReason.OTHER) ||
                (null != _ && "" !== _)),
            [E, _]
          ),
          b = (0, n.useStateFromStores)(
            [i.default],
            () => i.default.useReducedMotion
          ),
          G = l.useRef(!1);
        return (
          l.useEffect(
            () => () => {
              G.current = !0;
            },
            []
          ),
          l.useEffect(
            () => () => {
              G.current && null != o && F();
            },
            [o, F]
          ),
          {
            selectedRating: o,
            setSelectedRating: A,
            selectedReasons: E,
            setSelectedReasons: j,
            setUserFeedback: x,
            backPressed: v,
            onBackPressed: M,
            onSubmitPressed: L,
            onClosePressed: F,
            showSubmitted: S,
            isAnimating: p,
            canSubmit: R,
            useReducedMotion: b,
          }
        );
      }
    },
    608275: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          saveGuildHomeScrollPosition: function () {
            return d;
          },
          ensureGuildHomeSession: function () {
            return r;
          },
          trackGuildHomeOpened: function () {
            return u;
          },
        });
      var l = a("913144"),
        n = a("599110"),
        s = a("887446"),
        i = a("49111");
      function d(e, t) {
        l.default.dispatch({
          type: "GUILD_HOME_SET_SCROLL_POSITION",
          guildId: e,
          scrollPosition: t,
        });
      }
      function r(e) {
        l.default.dispatch({
          type: "GUILD_HOME_ENSURE_HOME_SESSION",
          guildId: e,
        });
      }
      function u(e, t) {
        n.default.track(i.AnalyticEvents.HOME_OPENED, {
          guild_id: e,
          home_session_id: s.default.getHomeSessionId(e),
          home_session_source: t,
        });
      }
    },
    685911: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a("446674"),
        n = a("913144");
      let s = {};
      class i extends l.default.PersistedStore {
        initialize(e) {
          var t;
          null != e &&
            (s =
              null !== (t = e.numCleanLoadsForGuild) && void 0 !== t ? t : {});
        }
        getState() {
          return { numCleanLoadsForGuild: s };
        }
        getTotalNumCleanLoads() {
          let e = 0;
          for (let a in s) {
            var t;
            e += null !== (t = s[a]) && void 0 !== t ? t : 0;
          }
          return e;
        }
      }
      (i.displayName = "GuildHomeFeedbackStore"),
        (i.persistKey = "GuildHomeFeedbackStore");
      var d = new i(n.default, {
        GUILD_FEED_FETCH_SUCCESS: function (e) {
          var t;
          let { guildId: a, fresh: l } = e;
          if (!l) return !1;
          s[a] = Math.min(
            50,
            (null !== (t = s[a]) && void 0 !== t ? t : 0) + 1
          );
        },
        LOGOUT: function () {
          s = {};
        },
      });
    },
    146005: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GuildHomeHeaderRedesignExperiment: function () {
            return n;
          },
        });
      var l = a("862205");
      let n = (0, l.createExperiment)({
        kind: "guild",
        id: "2022-12_home_header_redesign",
        label: "Home New Header",
        defaultConfig: { hasNewHeader: !1 },
        treatments: [
          { id: 1, label: "New Header", config: { hasNewHeader: !0 } },
        ],
      });
    },
    379607: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return w;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("866227"),
        r = a.n(d),
        u = a("611221"),
        o = a("446674"),
        c = a("669491"),
        f = a("819855"),
        m = a("77078"),
        h = a("272030"),
        E = a("590514"),
        g = a("750560"),
        I = a("679653"),
        _ = a("419830"),
        x = a("713810"),
        v = a("185014"),
        C = a("465519"),
        S = a("120027"),
        N = a("699473"),
        p = a("42203"),
        T = a("697218"),
        A = a("730106"),
        j = a("215361"),
        M = a("345318"),
        D = a("782340"),
        F = a("286669"),
        L = a("782983"),
        R = a("229709");
      let b = async () => {
          let { default: e } = await a.el("437150").then(a.bind(a, "437150"));
          return e;
        },
        G = e => {
          let { featuredItem: t, className: a } = e,
            s = c.default.colors.TEXT_POSITIVE,
            d = j.default,
            u = (0, o.useStateFromStores)(
              [T.default],
              () => T.default.getUser(t.details.actorUserId),
              [t]
            ),
            f = n.useMemo(
              () => (null == u ? {} : { [t.guildId]: [u.id] }),
              [t.guildId, u]
            );
          switch (
            ((0, g.useSubscribeGuildMembers)(f),
            (s = (0, C.getFeaturedExpirationTextColor)(t.details.expiresAt)))
          ) {
            case c.default.colors.TEXT_DANGER:
              d = A.default;
              break;
            case c.default.colors.TEXT_WARNING:
              d = M.default;
              break;
            case c.default.colors.TEXT_POSITIVE:
              d = j.default;
          }
          return (0, l.jsxs)("div", {
            className: i(a, F.header),
            children: [
              (0, l.jsxs)("div", {
                className: F.expirationContainer,
                children: [
                  (0, l.jsx)(d, {
                    color: s.css,
                    "aria-hidden": !0,
                    className: F.expiredIcon,
                  }),
                  (0, l.jsx)(m.Text, {
                    style: { color: s.css },
                    variant: "text-sm/normal",
                    children:
                      D.default.Messages.GUILD_FEED_FEATURED_EXPIRED_IN.format({
                        fromNow: r(t.details.expiresAt).fromNow(),
                      }),
                  }),
                ],
              }),
              (0, l.jsx)(S.default, {
                height: 4,
                width: 4,
                "aria-hidden": "true",
                className: F.dotIcon,
              }),
              (0, l.jsxs)("div", {
                className: F.featuredByContainer,
                children: [
                  (0, l.jsx)(m.Text, {
                    className: F.featuredByText,
                    variant: "text-sm/normal",
                    children: D.default.Messages.GUILD_FEED_FEATURED_BY,
                  }),
                  null != u &&
                    (0, l.jsx)(m.Avatar, {
                      size: m.AvatarSizes.SIZE_16,
                      src: u.getAvatarURL(void 0, 16),
                      "aria-hidden": !0,
                    }),
                ],
              }),
            ],
          });
        },
        y = e => {
          let { channel: t } = e,
            a = (0, I.default)(t),
            n = (0, _.getChannelIconComponent)(t),
            s = (0, _.getChannelIconTooltipText)(t);
          return null == t
            ? null
            : (0, l.jsxs)("div", {
                className: F.channelHeaderContainer,
                children: [
                  null != n
                    ? (0, l.jsx)(m.Tooltip, {
                        text: s,
                        delay: 500,
                        children: e =>
                          (0, l.jsx)(n, {
                            ...e,
                            className: F.channelIcon,
                            height: 16,
                            width: 16,
                          }),
                      })
                    : null,
                  (0, l.jsx)(m.Heading, {
                    className: F.channelHeader,
                    variant: "text-sm/semibold",
                    children: a,
                  }),
                ],
              });
        },
        O = n.memo(function (e) {
          let { guildId: t, featuredItem: a } = e,
            n = (0, o.useStateFromStores)([v.default], () =>
              v.default.getCachedMessage(t, a.message.channel_id, a.message.id)
            ),
            s = (0, o.useStateFromStores)([p.default], () =>
              p.default.getChannel(null == n ? void 0 : n.channel_id)
            );
          return null == s || null == n
            ? null
            : (0, l.jsxs)(m.Clickable, {
                onContextMenu: e => {
                  e.stopPropagation(),
                    (0, h.openContextMenuLazy)(e, async () => {
                      let e = await b();
                      return t =>
                        (0, l.jsx)(e, {
                          ...t,
                          messageItem: a,
                          channel: s,
                          message: n,
                        });
                    });
                },
                className: F.featuredItemsGroupWrapper,
                children: [
                  (0, l.jsx)(G, { featuredItem: a.featuredItem }),
                  (0, l.jsx)(y, { channel: s }),
                  (0, l.jsx)(N.default, {
                    className: F.featuredItemsGroupCozy,
                    message: n,
                    channel: s,
                  }),
                ],
              });
        }),
        H = n.memo(function (e) {
          let { guildId: t, featuredItem: a } = e,
            n = (0, o.useStateFromStores)([p.default], () =>
              p.default.getChannel(a.thread.id)
            ),
            s = (0, o.useStateFromStores)([p.default], () =>
              p.default.getChannel(null == n ? void 0 : n.parent_id)
            ),
            i = (0, o.useStateFromStores)([v.default], () =>
              v.default.getCachedMessage(t, a.message.channel_id, a.message.id)
            );
          return null == i || null == s || null == n
            ? null
            : (0, l.jsxs)(
                m.Clickable,
                {
                  onContextMenu: e => {
                    e.stopPropagation(),
                      (0, h.openContextMenuLazy)(e, async () => {
                        let e = await b();
                        return t =>
                          (0, l.jsx)(e, {
                            ...t,
                            messageItem: a,
                            channel: n,
                            message: i,
                          });
                      });
                  },
                  className: F.featuredItemsGroupWrapper,
                  children: [
                    (0, l.jsx)(G, { featuredItem: a.featuredItem }),
                    (0, l.jsx)(y, { channel: s }),
                    (0, l.jsx)(m.Heading, {
                      className: F.forumPostHeading,
                      variant: "heading-md/semibold",
                      children: n.name,
                    }),
                    (0, l.jsx)(N.default, {
                      className: F.featuredItemsGroupCozy,
                      message: i,
                      channel: n,
                    }),
                  ],
                },
                i.id
              );
        });
      function k(e) {
        let t = (0, f.isThemeLight)(e) ? R : L;
        return (0, l.jsxs)("div", {
          className: F.emptyPlaceholder,
          children: [
            (0, l.jsx)("div", {
              className: F.emptyImage,
              style: { backgroundImage: "url(".concat(t, ")") },
            }),
            (0, l.jsx)("div", {
              className: F.emptyBody,
              children: D.default.Messages.GUILD_FEED_FEATURED_ITEMS_NO_ITEMS,
            }),
          ],
        });
      }
      function U() {
        return (0, l.jsx)(E.Header, {
          title: D.default.Messages.GUILD_FEED_FEATURE_MESSAGE,
        });
      }
      function w(e) {
        let { guildId: t } = e,
          a = (0, o.useStateFromStoresArray)(
            [v.default],
            () => v.default.getFeaturedItems(t),
            [t]
          ),
          s = (0, o.useStateFromStores)(
            [v.default],
            () => v.default.getFeaturedItemsFetchStatus(t),
            [t]
          );
        return (
          n.useEffect(() => {
            (0, x.fetchGuildFeedFeaturedItems)(t);
          }, [t]),
          (0, l.jsx)(m.Dialog, {
            "aria-label": D.default.Messages.GUILD_FEED_FEATURED_MESSAGES,
            children: (0, l.jsx)(E.ItemsPopout, {
              analyticsName: "Featured Feed Items Popout",
              listName: "featuredMessages",
              items: a,
              loading: s.loading !== v.LoadingStatus.NONE,
              renderEmptyState: k,
              renderHeader: U,
              renderItem: function (e) {
                return null == e
                  ? []
                  : e.type === u.GuildFeedItemTypes.MESSAGE
                    ? [(0, l.jsx)(O, { guildId: t, featuredItem: e }, e.id)]
                    : e.type === u.GuildFeedItemTypes.FORUM_POST
                      ? [(0, l.jsx)(H, { guildId: t, featuredItem: e }, e.id)]
                      : [];
              },
            }),
          })
        );
      }
    },
    241094: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useActiveTextChannels: function () {
            return h;
          },
          useActiveVoiceChannels: function () {
            return g;
          },
        }),
        a("222007");
      var l = a("446674"),
        n = a("233069"),
        s = a("42203"),
        i = a("305961"),
        d = a("957255"),
        r = a("282109"),
        u = a("316133"),
        o = a("449008"),
        c = a("558130"),
        f = a("49111"),
        m = a("724210");
      let h = e =>
          (0, l.useStateFromStoresArray)(
            [s.default, d.default, c.default, r.default],
            () => E(e, [s.default, d.default, c.default, r.default])
          ),
        E = function (e) {
          let [t, a, l, i] =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [s.default, d.default, c.default, r.default],
            u = l.getActiveChannelIds(e),
            h = null != u ? Array.from(u) : [],
            E = i.getMutedChannels(e);
          return h
            .map(e => t.getChannel(e))
            .filter(o.isNotNullish)
            .filter(e => {
              if (
                (null == e
                  ? void 0
                  : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) ||
                !(0, n.isTextChannel)(e.type) ||
                E.has(e.id) ||
                (null != e.parent_id && E.has(e.parent_id)) ||
                !a.can(f.Permissions.VIEW_CHANNEL, e)
              )
                return !1;
              let l = t.getChannel(e.parent_id);
              return (
                !(
                  e.isThread() &&
                  null != l &&
                  (null == l
                    ? void 0
                    : l.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED))
                ) && !0
              );
            });
        },
        g = (e, t) =>
          (0, l.useStateFromStoresArray)(
            [d.default, s.default, u.default, i.default],
            () => I(e, t, [d.default, s.default, u.default, i.default])
          ),
        I = function (e, t) {
          var a;
          let [l, n, r, c] =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [d.default, s.default, u.default, i.default],
            h = r.getVoiceStates(e),
            E = Object.keys(h).filter(e => h[e].length > 0),
            g =
              null === (a = c.getGuild(e)) || void 0 === a
                ? void 0
                : a.afkChannelId;
          return E.filter(
            e => e !== g && e !== (null == t ? void 0 : t.channel_id)
          )
            .map(e => n.getChannel(e))
            .filter(o.isNotNullish)
            .filter(
              e =>
                !(null == e
                  ? void 0
                  : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) &&
                l.can(f.Permissions.VIEW_CHANNEL, e)
            );
        };
    },
    577177: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var l = a("884691"),
        n = a("398604"),
        s = a("534222"),
        i = a("599110"),
        d = a("887446"),
        r = a("49111");
      function u(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          a = (0, s.default)(e);
        l.useEffect(() => {
          t &&
            i.default.track(r.AnalyticEvents.HOME_EVENTS_LOADED, {
              guild_id: e,
              active_events_shown: a.some(e =>
                (0, n.isGuildScheduledEventActive)(e)
              )
                ? 1
                : 0,
              upcoming_events_shown: a.some(
                e => !(0, n.isGuildScheduledEventActive)(e)
              )
                ? 1
                : 0,
              home_session_id: d.default.getHomeSessionId(e),
            });
        }, [e, t]);
      }
    },
    75360: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("884691"),
        n = a("730290"),
        s = a("90915");
      function i() {
        let e = (0, s.useLocation)(),
          { highlight_channel_id: t, highlight_message_id: a } = (0, n.parse)(
            e.search
          );
        return l.useMemo(
          () =>
            null != a && null != t ? { messageId: a, channelId: t } : null,
          [t, a]
        );
      }
    },
    795783: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a("298386"),
        n = a("446674"),
        s = a("923959"),
        i = a("282109");
      function d(e) {
        let t = (0, n.useStateFromStores)([s.default], () =>
            s.default.getChannels(e)
          ),
          a = t[s.GUILD_SELECTABLE_CHANNELS_KEY],
          d = (0, n.useStateFromStoresArray)(
            [i.default],
            () =>
              a
                .filter(e => {
                  let { channel: t } = e;
                  return (
                    l.ChannelTypesSets.READABLE.has(t.type) &&
                    !l.ChannelTypesSets.GUILD_VOCAL.has(t.type)
                  );
                })
                .filter(t => {
                  let { channel: a } = t;
                  return (
                    i.default.isChannelMuted(e, a.id) ||
                    i.default.isCategoryMuted(e, a.id)
                  );
                }),
            [e, a]
          );
        return d.length;
      }
    },
    620840: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var l = a("884691"),
        n = a("65597"),
        s = a("697218"),
        i = a("685911"),
        d = a("994428");
      let r = new Date(Date.UTC(2022, 7, 6));
      function u(e, t) {
        let a = (0, n.default)(
            [i.default],
            () => 2 >= i.default.getTotalNumCleanLoads()
          ),
          u = (0, n.default)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null == e || e.createdAt.getTime() < r.getTime();
          }),
          o = l.useMemo(
            () =>
              (null == e ? void 0 : e.joinedAt) != null &&
              r.getTime() > e.joinedAt.getTime(),
            [null == e ? void 0 : e.joinedAt]
          ),
          c = a && u && !o;
        return (
          l.useEffect(() => {
            !c && t(d.ContentDismissActionType.AUTO);
          }, [c]),
          c || !0
        );
      }
    },
    280110: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a("884691"),
        n = a("599110"),
        s = a("887446"),
        i = a("49111");
      function d(e) {
        l.useEffect(() => {
          let t = s.default.getHomeSessionId(e);
          return () => {
            n.default.track(i.AnalyticEvents.HOME_EXITED, {
              guild_id: e,
              home_session_id: t,
            });
          };
        }, [e]);
      }
    },
    154925: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DISPLAYED_PARTICIPANT_AVATARS: function () {
            return g;
          },
          ACTIVE_NOW_ICON_SIZE: function () {
            return I;
          },
          ActiveNowBase: function () {
            return _;
          },
          ActiveChannelBase: function () {
            return x;
          },
          ActiveNowFiller: function () {
            return v;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("974667"),
        r = a("77078"),
        u = a("834897"),
        o = a("419830"),
        c = a("811305"),
        f = a("515631"),
        m = a("782340"),
        h = a("762382"),
        E = a("470932");
      let g = 3,
        I = 16,
        _ = n.forwardRef(function (e, t) {
          let {
              shouldUseCollapsedLayout: a = !0,
              listItemId: n,
              onClick: s,
              icon: o,
              iconTooltipText: c,
              textNode: m,
              header: E,
              accessoryNode: g,
              children: I,
            } = e,
            _ = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY),
            x = (0, d.useListItem)(null != n ? n : "");
          return (0, l.jsxs)("div", {
            ref: t,
            className: i(h.container, {
              [h.containerCard]: _,
              [h.collapsedLayout]: _ && a,
            }),
            children: [
              (0, l.jsxs)(r.Clickable, {
                className: h.body,
                onClick: s,
                ...(null != n ? x : void 0),
                children: [
                  (0, l.jsxs)("div", {
                    className: h.details,
                    children: [
                      null != o
                        ? (0, l.jsx)(r.Tooltip, {
                            text: c,
                            delay: 500,
                            children: e =>
                              (0, l.jsx)("div", {
                                ...e,
                                className: h.iconContainer,
                                children: o,
                              }),
                          })
                        : null,
                      (0, l.jsx)(r.Heading, {
                        className: h.title,
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        children: E,
                      }),
                      (0, l.jsx)("div", { className: h.subtitle, children: m }),
                    ],
                  }),
                  null != g &&
                    (0, l.jsx)("div", {
                      className: h.accessoryContainer,
                      children: g,
                    }),
                ],
              }),
              I,
            ],
          });
        }),
        x = n.forwardRef(function (e, t) {
          let {
              children: a,
              guildId: n,
              channel: s,
              text: i,
              activityIndicator: d,
              usersInSummary: m,
              onChannelClick: E,
              channelIconOptions: x,
            } = e,
            v = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY),
            C = (0, o.getChannelIconComponent)(s, null, x);
          return (0, l.jsx)(_, {
            ref: t,
            textNode:
              null != i
                ? (0, l.jsx)(r.Text, {
                    className: h.channelSubtitle,
                    variant: "text-xs/normal",
                    children: i,
                  })
                : null,
            listItemId: s.id,
            accessoryNode: (0, l.jsx)(c.default, {
              guildId: n,
              users: m,
              size: v ? c.Sizes.SIZE_24 : c.Sizes.SIZE_16,
              max: v ? 5 : g,
              extraDetail: d,
            }),
            onClick: E,
            icon: null != C && (0, l.jsx)(C, { width: I, height: I }),
            iconTooltipText: (0, o.getChannelIconTooltipText)(s),
            header: s.name,
            children: a,
          });
        });
      function v() {
        return (0, l.jsxs)("div", {
          className: i(h.container, h.containerCard, h.fillerCard),
          children: [
            (0, l.jsx)("img", {
              src: E,
              className: h.spacerChannelImg,
              alt: "",
              "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
              className: h.fillerText,
              children: [
                (0, l.jsx)(r.Heading, {
                  className: h.title,
                  variant: "heading-sm/semibold",
                  children:
                    m.default.Messages.ACTIVE_CHANNELS_COLLAPSED_SPACER_TITLE,
                }),
                (0, l.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  children:
                    m.default.Messages
                      .ACTIVE_CHANNELS_COLLAPSED_SPACER_SUBTITLE,
                }),
              ],
            }),
          ],
        });
      }
    },
    914878: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("917351"),
        r = a("355262"),
        u = a("942367"),
        o = a("446674"),
        c = a("77078"),
        f = a("731898"),
        m = a("841098"),
        h = a("510889"),
        E = a("191152"),
        g = a("425974"),
        I = a("398604"),
        _ = a("534222"),
        x = a("316133"),
        v = a("461380"),
        C = a("599110"),
        S = a("558130"),
        N = a("887446"),
        p = a("241094"),
        T = a("154925"),
        A = a("128651"),
        j = a("475117"),
        M = a("540585"),
        D = a("821435"),
        F = a("49111"),
        L = a("782340"),
        R = a("597603"),
        b = a("897142"),
        G = a("352791");
      let y = { overflowX: void 0, overflowY: void 0 };
      function O() {
        let e = (0, m.default)();
        return (0, l.jsxs)("div", {
          className: R.emptyStateContainer,
          children: [
            (0, l.jsx)("img", {
              className: R.image,
              src: "dark" === e ? b : G,
              width: 154,
              height: 48,
              alt: "",
            }),
            (0, l.jsx)(c.Heading, {
              className: R.title,
              variant: "heading-md/semibold",
              children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_TITLE,
            }),
            (0, l.jsx)(c.Text, {
              className: R.subtitle,
              color: "header-secondary",
              variant: "text-sm/normal",
              children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_SUBTITLE,
            }),
          ],
        });
      }
      function H(e) {
        let {
            isUsingCollapsedLayout: t,
            scrollerRef: a,
            handleScroll: n,
            activeChannels: s,
            totalActiveChannels: i,
          } = e,
          d = (0, h.default)("active-channels", a, {
            orientation: t
              ? u.Orientations.HORIZONTAL
              : u.Orientations.VERTICAL,
          });
        return (0, l.jsx)(r.ListNavigatorProvider, {
          navigator: d,
          children: (0, l.jsx)(r.ListNavigatorContainer, {
            children: e => {
              let { ref: d, ...r } = e;
              return (0, l.jsxs)(c.AdvancedScrollerNone, {
                className: R.channelList,
                orientation: "horizontal",
                paddingFix: !1,
                onScroll: n,
                style: t ? void 0 : y,
                ref: e => {
                  var t;
                  (a.current = e),
                    (d.current =
                      null !== (t = null == e ? void 0 : e.getScrollerNode()) &&
                      void 0 !== t
                        ? t
                        : null),
                    n();
                },
                ...r,
                children: [s, t && i < 4 && (0, l.jsx)(T.ActiveNowFiller, {})],
              });
            },
          }),
        });
      }
      function k(e) {
        let { guildId: t, isUsingCollapsedLayout: a } = e,
          s = (0, o.useStateFromStores)([S.default], () =>
            S.default.getActiveChannelsFetchStatus(t)
          ),
          r = (0, p.useActiveTextChannels)(t),
          u = (0, _.useGuildActiveEvent)(t),
          m = (0, o.useStateFromStores)([x.default], () =>
            x.default.getVoiceStates(t)
          ),
          h = (0, p.useActiveVoiceChannels)(t, u),
          T = r.length + h.length + (null != u ? 1 : 0),
          b = T > 0,
          G = n.useRef(null),
          y = (0, _.default)(t),
          k = y.filter(e => !(0, I.isGuildScheduledEventActive)(e)),
          [U, w] = n.useState(0 === k.length),
          [B, P] = n.useState(!0),
          [V, W] = n.useState(!1),
          { ref: K, width: z } = (0, f.default)(),
          Y = n.useCallback(() => {
            let { current: e } = G;
            if (null == e || null == z) return;
            let { scrollLeft: t, scrollWidth: a } = e.getScrollerState();
            P(t <= 0), W(t >= a - z - 1);
          }, [z]),
          Z = n.useCallback(() => {
            let { current: e } = G;
            if (null == e || null == z) return;
            let { scrollLeft: t } = e.getScrollerState(),
              a = z + 12,
              l = Math.max(0.25 * z - 9, 140);
            e.scrollTo({
              to: Math.max(0, Math.ceil((t - a) / l) * l),
              animate: !0,
            });
          }, [z]),
          X = n.useCallback(() => {
            let { current: e } = G;
            if (null == e || null == z) return;
            let { scrollLeft: t, scrollWidth: a } = e.getScrollerState(),
              l = z + 12,
              n = Math.max(0.25 * z - 9, 140);
            e.scrollTo({
              to: Math.min(a, Math.floor((t + l) / n) * n),
              animate: !0,
            });
          }, [z]);
        n.useEffect(() => {
          S.default.shouldFetch(t) && (0, E.fetchActiveChannels)(t);
        }, [t]),
          (0, g.default)(t, r, h);
        let J = n.useCallback(
            e => {
              C.default.track(F.AnalyticEvents.ACTIVE_CHANNEL_CLICKED, {
                guild_id: e.guild_id,
                channel_id: e.id,
                channel_type: e.type,
                text_channels_shown: r.length,
                voice_channels_shown: h.length,
                home_session_id: N.default.getHomeSessionId(e.guild_id),
              });
            },
            [r, h]
          ),
          q = r.map(e =>
            (0, l.jsx)(
              j.default,
              { guildId: t, channel: e, trackChannelClick: J },
              e.id
            )
          ),
          Q = h.map(e =>
            (0, l.jsx)(
              M.default,
              {
                guildId: t,
                channel: e,
                voiceStates: m[e.id],
                trackChannelClick: J,
                showPreview: !a,
              },
              e.id
            )
          ),
          $ = [];
        if (a) $ = [...q, ...Q];
        else if (U)
          $ = d.compact([
            null != u &&
              (0, l.jsx)(D.default, { event: u, isInList: !0 }, "event"),
            ...q.slice(0, 10),
            ...Q,
          ]);
        else {
          let e = d.take(q, 3 - (Q.length > 0 ? 1 : 0) - (null != u ? 1 : 0)),
            t = d.take(Q, 3 - e.length - (null != u ? 1 : 0));
          $ = d.compact([
            null != u &&
              (0, l.jsx)(D.default, { event: u, isInList: !0 }, "event"),
            ...e,
            ...t,
          ]);
        }
        return (0, l.jsx)("div", {
          ref: K,
          className: R.container,
          children: (0, l.jsxs)(c.HeadingLevel, {
            component: (0, l.jsxs)("div", {
              className: R.header,
              children: [
                (0, l.jsx)(c.Heading, {
                  variant: "heading-md/semibold",
                  children: L.default.Messages.ACTIVE_CHANNELS_HEADER,
                }),
                !a &&
                  (null == s ? void 0 : s.loading) !== !0 &&
                  T > 3 &&
                  (0, l.jsx)(c.Clickable, {
                    onClick: () => w(!U),
                    children: (0, l.jsx)(c.Text, {
                      className: R.showAll,
                      variant: "text-sm/normal",
                      children: U
                        ? L.default.Messages.GUILD_HOME_SEE_LESS
                        : L.default.Messages.GUILD_HOME_SEE_ALL.format({
                            count: T,
                          }),
                    }),
                  }),
              ],
            }),
            children: [
              (null == s ? void 0 : s.loading)
                ? (0, l.jsx)(c.AdvancedScrollerNone, {
                    className: R.channelList,
                    orientation: "horizontal",
                    paddingFix: !1,
                    children: (0, l.jsx)(A.default, { guildId: t }),
                  })
                : b
                  ? (0, l.jsx)(H, {
                      isUsingCollapsedLayout: a,
                      scrollerRef: G,
                      handleScroll: Y,
                      activeChannels: $,
                      totalActiveChannels: T,
                    })
                  : (0, l.jsx)(O, {}),
              a &&
                b &&
                !B &&
                (0, l.jsx)(c.Clickable, {
                  className: i(R.scrollIcon, R.left),
                  onClick: Z,
                  "aria-hidden": !0,
                  children: (0, l.jsx)(v.default, {
                    direction: v.default.Directions.LEFT,
                    height: 12,
                    width: 12,
                  }),
                }),
              a &&
                b &&
                !V &&
                (0, l.jsx)(c.Clickable, {
                  className: i(R.scrollIcon, R.right),
                  onClick: X,
                  "aria-hidden": !0,
                  children: (0, l.jsx)(v.default, {
                    direction: v.default.Directions.RIGHT,
                    height: 12,
                    width: 12,
                  }),
                }),
            ],
          }),
        });
      }
    },
    128651: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        s = a.n(n),
        i = a("917351"),
        d = a("834897"),
        r = a("67602"),
        u = a("811305"),
        o = a("515631"),
        c = a("762382");
      function f(e) {
        let { guildId: t } = e,
          a = (0, d.default)(o.COLLAPSED_SIZE_MEDIA_QUERY);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            i.times(a ? 4 : 3, e =>
              (0, l.jsxs)(
                "div",
                {
                  className: s(c.container, {
                    [c.loadingContainer]: !0,
                    [c.containerCard]: a,
                    [c.collapsedLayout]: a,
                  }),
                  children: [
                    (0, l.jsxs)("div", {
                      className: c.body,
                      children: [
                        (0, l.jsxs)("div", {
                          className: c.details,
                          children: [
                            (0, l.jsx)("div", { className: c.iconContainer }),
                            (0, l.jsx)(r.ContentBlob, {
                              className: c.title,
                              opacity: 0.2,
                              width: 72,
                            }),
                            (0, l.jsx)(r.ContentBlob, {
                              className: c.subtitle,
                              opacity: 0.1,
                              width: 100,
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className: c.accessoryContainer,
                          children: (0, l.jsx)(u.default, {
                            guildId: t,
                            renderUser: () =>
                              (0, l.jsx)("div", {
                                className: c.loadingUser,
                                style: {
                                  width: a ? 24 : 16,
                                  height: a ? 24 : 16,
                                },
                              }),
                            users: [null, null],
                            size: a ? u.Sizes.SIZE_24 : u.Sizes.SIZE_16,
                            extraDetail: (0, l.jsx)("div", {
                              className: c.typingIndicator,
                            }),
                          }),
                        }),
                      ],
                    }),
                    2 === e &&
                      (0, l.jsx)("div", { className: c.previewContainer }),
                  ],
                },
                e
              )
            ),
            (0, l.jsx)("div", {}),
            " ",
          ],
        });
      }
    },
    475117: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("917351"),
        s = a.n(n),
        i = a("446674"),
        d = a("77078"),
        r = a("537325"),
        u = a("191542"),
        o = a("697218"),
        c = a("449008"),
        f = a("299039"),
        m = a("558130"),
        h = a("154925"),
        E = a("49111"),
        g = a("782340"),
        I = a("762382");
      function _(e) {
        let { guildId: t, channel: a, trackChannelClick: n } = e,
          _ = (0, i.useStateFromStoresArray)([m.default], () => {
            var e;
            return null !== (e = m.default.getChannelMessageData(a.id)) &&
              void 0 !== e
              ? e
              : [];
          }),
          x = s.uniq(s.map(_, "userId")),
          v = (0, i.useStateFromStoresArray)([o.default], () =>
            x.map(e => o.default.getUser(e))
          ),
          C = (0, i.useStateFromStores)(
            [u.default],
            () => {
              let e = u.default.getTypingUsers(a.id);
              return Object.keys(e).length > 0;
            },
            [a.id]
          ),
          S =
            _.length < m.MAX_STORED_MESSAGES
              ? g.default.Messages.ACTIVE_CHANNELS_FEW_MESSAGES.format({
                  count: _.length,
                })
              : g.default.Messages.ACTIVE_CHANNELS_MANY_MESSAGES,
          N = C
            ? (0, l.jsx)("div", {
                className: I.typingIndicator,
                children: (0, l.jsx)(d.Dots, {
                  className: I.ellipsis,
                  dotRadius: 2,
                  themed: !0,
                }),
              })
            : null;
        return (0, l.jsx)(h.ActiveChannelBase, {
          guildId: t,
          channel: a,
          usersInSummary: v.filter(c.isNotNullish),
          text: S,
          activityIndicator: N,
          onChannelClick: () => {
            n(a),
              (0, r.default)(
                E.Routes.CHANNEL(
                  a.guild_id,
                  a.id,
                  f.default.fromTimestamp(Date.now())
                )
              );
          },
        });
      }
    },
    540585: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return j;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("917351"),
        i = a.n(s),
        d = a("446674"),
        r = a("77078"),
        u = a("987317"),
        o = a("990766"),
        c = a("242740"),
        f = a("223913"),
        m = a("795026"),
        h = a("673527"),
        E = a("848848"),
        g = a("233069"),
        I = a("373469"),
        _ = a("271938"),
        x = a("957255"),
        v = a("18494"),
        C = a("267675"),
        S = a("158998"),
        N = a("154925"),
        p = a("49111"),
        T = a("762382");
      function A(e) {
        var t;
        let { channel: a, voiceStates: n, showPlaceholder: s } = e,
          c = (0, d.useStateFromStores)(
            [I.default],
            () => I.default.getAllApplicationStreamsForChannel(a.id)[0]
          ),
          E = (0, d.useStateFromStores)([I.default], () =>
            null != c ? I.default.getActiveStreamForApplicationStream(c) : null
          ),
          g = (0, d.useStateFromStores)([_.default], () => _.default.getId()),
          [x, v] = (0, f.useCanWatchStream)(a);
        if (null == c) return null;
        let N = i.chain(n).map("member").find(["userId", c.ownerId]).value(),
          A = i.chain(n).map("user").find(["id", c.ownerId]).value(),
          j =
            null !== (t = null == N ? void 0 : N.nick) && void 0 !== t
              ? t
              : S.default.getName(A),
          M =
            null != E &&
            null != c &&
            E.state !== p.ApplicationStreamStates.ENDED &&
            E.ownerId === c.ownerId;
        return (0, l.jsxs)(r.Clickable, {
          onClick: () => {
            u.default.selectVoiceChannel(a.id),
              !M && (0, o.watchStreamAndTransitionToStream)(c);
          },
          className: T.previewContainer,
          children: [
            s
              ? (0, l.jsx)(h.DefaultFallback, {
                  className: T.previewImage,
                  isLoading: !0,
                })
              : (0, l.jsx)(h.default, { className: T.previewImage, stream: c }),
            x
              ? (0, l.jsx)("div", {
                  className: T.previewHover,
                  children: (0, l.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.previewButton,
                    children: (0, m.default)(c, E, g, v),
                  }),
                })
              : null,
            null != j
              ? (0, l.jsxs)("div", {
                  className: T.previewName,
                  children: [
                    (0, l.jsx)(C.default, {
                      width: 18,
                      height: 18,
                      className: T.icon,
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "none",
                      children: j,
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function j(e) {
        var t;
        let {
            guildId: a,
            channel: s,
            voiceStates: r,
            trackChannelClick: u,
            showPreview: o,
          } = e,
          f = r.map(e => e.user),
          { needSubscriptionToAccess: m } = (0, E.default)(
            null !== (t = null == s ? void 0 : s.id) && void 0 !== t
              ? t
              : void 0
          ),
          h = (0, d.useStateFromStores)(
            [x.default],
            () => !x.default.can(p.Permissions.CONNECT, s)
          ),
          I = n.useRef(null),
          _ = (function (e) {
            let t = n.useRef(null),
              [a, l] = n.useState(!1);
            return (
              n.useEffect(() => {
                t.current = new IntersectionObserver(e => {
                  let [t] = e;
                  return l(t.isIntersecting);
                });
              }, []),
              n.useEffect(() => {
                var a;
                if (null != e.current)
                  return (
                    null === (a = t.current) ||
                      void 0 === a ||
                      a.observe(e.current),
                    () => {
                      var e;
                      null === (e = t.current) ||
                        void 0 === e ||
                        e.disconnect();
                    }
                  );
              }, [e]),
              a
            );
          })(I),
          C = n.useRef(!1);
        n.useEffect(() => {
          _ && (C.current = !0);
        }, [_]);
        let T = i.map(r, e => {
            var t, a;
            return null !==
              (a = null === (t = e.member) || void 0 === t ? void 0 : t.nick) &&
              void 0 !== a
              ? a
              : S.default.getName(e.user);
          }),
          j = T.join(", ");
        return (0, l.jsx)(N.ActiveChannelBase, {
          ref: I,
          guildId: a,
          channel: s,
          text: j,
          usersInSummary: f,
          onChannelClick: () => {
            if (!(0, g.isGuildVocalChannelType)(s.type)) return;
            let e = v.default.getVoiceChannelId(),
              t = !x.default.can(p.Permissions.CONNECT, s);
            u(s),
              c.default.handleVoiceConnect({
                channel: s,
                locked: t,
                connected: e === s.id,
                needSubscriptionToAccess: m,
              });
          },
          channelIconOptions: { locked: h },
          children:
            o &&
            (0, l.jsx)(A, {
              channel: s,
              voiceStates: r,
              showPlaceholder: !C.current,
            }),
        });
      }
    },
    260730: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("446674"),
        i = a("713810"),
        d = a("404103"),
        r = a("350928"),
        u = a("185014"),
        o = a("60036"),
        c = a("435123"),
        f = a("537594"),
        m = a("38654"),
        h = a("471671"),
        E = a("555158"),
        g = a("395118"),
        I = a("299039"),
        _ = a("816454"),
        x = a("601414"),
        v = a("146005"),
        C = a("887446"),
        S = a("75360"),
        N = a("216364"),
        p = a("405700"),
        T = a("806727"),
        A = a("807058"),
        j = a("815619"),
        M = a("515631"),
        D = a("782340"),
        F = a("15452");
      let L = n.memo(function (e) {
          let { guildId: t } = e,
            a = (0, s.useStateFromStores)([m.default], () =>
              m.default.isViewingRoles(t)
            );
          return a
            ? (0, l.jsx)(E.default, {
                messageType: E.HelpMessageTypes.WARNING,
                children: D.default.Messages.GUILD_FEED_VIEW_AS_ROLE_WARNING,
              })
            : null;
        }),
        R = n.memo(function (e) {
          let {
              guildId: t,
              hasMoreItems: a,
              scrollerRef: s,
              error: i,
              fetchPage: d,
              onReloadClick: r,
            } = e,
            u = n.useRef(null);
          return (n.useEffect(() => {
            var e;
            let t = u.current,
              l =
                null === (e = s.current) || void 0 === e
                  ? void 0
                  : e.getScrollerNode();
            if (null == l || null == t || !a) return;
            let n = new IntersectionObserver(
              e => {
                for (let t of e) t.intersectionRatio > 0 && d();
              },
              { root: l, rootMargin: "0px 0px 200px 0px", threshold: 0 }
            );
            return (
              n.observe(t),
              () => {
                n.disconnect();
              }
            );
          }, [s, u, d, t, a]),
          null != i)
            ? (0, l.jsx)(N.GuildFeedPaginationError, {
                guildId: t,
                onReloadClick: d,
              })
            : a
              ? (0, l.jsx)("div", {
                  className: F.container,
                  ref: u,
                  children: (0, l.jsx)(p.default, { count: 1 }),
                })
              : (0, l.jsx)(N.GuildFeedFooter, { guildId: t, onReloadClick: r });
        });
      function b(e) {
        var t, a, m, E, D;
        let { guild: b, renderMode: G, scrollerRef: y, seenManagerRef: O } = e,
          H = (0, S.default)(),
          [k, U, w, B] = (0, s.useStateFromStoresArray)([u.default], () =>
            [
              M.GuildFeedSectionTypes.READ,
              M.GuildFeedSectionTypes.UNREAD,
              M.GuildFeedSectionTypes.HIGHLIGHTED,
              M.GuildFeedSectionTypes.ALL,
            ].map(e => u.default.getFeedItemSection(b.id, e))
          ),
          P = (0, s.useStateFromStores)([u.default], () =>
            u.default.getLoadId(b.id)
          ),
          V = (0, s.useStateFromStores)([C.default], () =>
            C.default.getHomeSessionId(b.id)
          ),
          {
            loading: W,
            error: K,
            fetchFresh: z,
            fetchPage: Y,
          } = (0, c.default)({ guildId: b.id, highlightedItemData: H }),
          { hasMoreItems: Z } = (0, s.useStateFromStores)([u.default], () =>
            u.default.getPaginationStatus(b.id)
          ),
          { hasNewHeader: X } =
            v.GuildHomeHeaderRedesignExperiment.useExperiment(
              { guildId: b.id, location: "00f40d_1" },
              { autoTrackExposure: !1 }
            ),
          { homeHeaderScroll: J } = (0, j.useHomeHeader)(b);
        n.useEffect(
          () => (
            d.default.initialize(),
            () => {
              d.default.terminate();
            }
          ),
          []
        ),
          n.useLayoutEffect(() => {
            if (null == P || null == V) return;
            (0, i.sendFeedShownAnalytics)(b.id);
            let e = (0, _.getMainWindowId)(),
              t = new r.default({
                guildId: b.id,
                loadId: P,
                homeSessionId: V,
                windowId: e,
                isPaused: !h.default.isFocused(e),
              });
            return (
              t.initialize(),
              (O.current = t),
              () => {
                t.terminate();
              }
            );
          }, [O, b.id, P, V]);
        let q = (function (e) {
            let [t, a] = n.useState(null);
            return (
              n.useEffect(() => {
                var t;
                let l =
                  null === (t = e.current) || void 0 === t
                    ? void 0
                    : t.getScrollerNode();
                if (null == l) return;
                let n = new ResizeObserver(e => {
                  for (let t of e) a(t.contentRect.height);
                });
                return (
                  n.observe(l),
                  () => {
                    n.disconnect();
                  }
                );
              }, [e]),
              t
            );
          })(y),
          Q = n.useMemo(
            () =>
              G !== M.GuildFeedRenderMode.NEW
                ? []
                : [...B].sort(
                    (e, t) =>
                      -I.default.compare(
                        (0, o.default)(e).id,
                        (0, o.default)(t).id
                      )
                  ),
            [B, G]
          ),
          $ = n.useCallback(async () => {
            var e;
            await (null === (e = O.current) || void 0 === e
              ? void 0
              : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE)),
              z({
                force: !0,
                flushSeenItems: () => {
                  var e;
                  return null === (e = O.current) || void 0 === e
                    ? void 0
                    : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE);
                },
              });
          }, [O, z]);
        n.useEffect(() => {
          if (W === u.LoadingStatus.LOADING_FRESH_FEED) {
            var e, t;
            X
              ? null === (e = y.current) ||
                void 0 === e ||
                e.scrollTo({ to: J })
              : null === (t = y.current) || void 0 === t || t.scrollToTop();
          }
        }, [W, X, J]);
        let ee = 0 === B.length,
          { showFeedback: et, setOnDismissedFeedback: ea } = (0,
          x.useShowFeedback)();
        if (ee)
          return W === u.LoadingStatus.LOADING_FRESH_FEED
            ? (0, l.jsx)("div", {
                className: F.container,
                children: (0, l.jsx)(p.default, {}),
              })
            : null != K
              ? (0, l.jsx)(N.GuildFeedError, {
                  guildId: b.id,
                  onReloadClick: $,
                })
              : (0, l.jsx)(N.GuildFeedEmpty, {
                  guildId: b.id,
                  onReloadClick: $,
                });
        if (G === M.GuildFeedRenderMode.TOP)
          return (0, l.jsxs)("div", {
            className: F.container,
            children: [
              (0, l.jsx)(T.default, { guild: b }),
              B.map((e, t) =>
                (0, l.jsx)(
                  f.default,
                  {
                    guildId: b.id,
                    itemId: e.id,
                    scrollerHeight: q,
                    scrollerRef: y,
                    showFeedback: 0 === t && et,
                    setOnDismissedFeedback: ea,
                  },
                  e.id
                )
              ),
              (0, l.jsx)(R, {
                guildId: b.id,
                hasMoreItems: null != Z && Z,
                scrollerRef: y,
                error: K,
                fetchPage: Y,
                onReloadClick: $,
              }),
            ],
          });
        if (G === M.GuildFeedRenderMode.NEW)
          return (0, l.jsxs)("div", {
            className: F.container,
            children: [
              (0, l.jsx)(T.default, { guild: b }),
              Q.map((e, t) =>
                (0, l.jsx)(
                  f.default,
                  {
                    guildId: b.id,
                    itemId: e.id,
                    scrollerHeight: q,
                    scrollerRef: y,
                    showFeedback: 0 === t && et,
                    setOnDismissedFeedback: ea,
                  },
                  e.id
                )
              ),
              (0, l.jsx)(R, {
                guildId: b.id,
                hasMoreItems: null != Z && Z,
                scrollerRef: y,
                error: K,
                fetchPage: Y,
                onReloadClick: $,
              }),
            ],
          });
        let el =
          null !==
            (D =
              null !==
                (E = null === (t = w[0]) || void 0 === t ? void 0 : t.id) &&
              void 0 !== E
                ? E
                : null === (a = U[0]) || void 0 === a
                  ? void 0
                  : a.id) && void 0 !== D
            ? D
            : null === (m = k[0]) || void 0 === m
              ? void 0
              : m.id;
        return (0, l.jsxs)("div", {
          className: F.container,
          children: [
            (0, l.jsx)(L, { guildId: b.id }),
            (0, l.jsx)(T.default, { guild: b }),
            w.map(e =>
              (0, l.jsx)(
                f.default,
                {
                  guildId: b.id,
                  itemId: e.id,
                  scrollerHeight: q,
                  scrollerRef: y,
                  showFeedback: e.id === el && et,
                  setOnDismissedFeedback: ea,
                },
                e.id
              )
            ),
            U.map(e =>
              (0, l.jsx)(
                f.default,
                {
                  guildId: b.id,
                  itemId: e.id,
                  scrollerHeight: q,
                  scrollerRef: y,
                  showFeedback: e.id === el && et,
                  setOnDismissedFeedback: ea,
                },
                e.id
              )
            ),
            k.length > 0 ? (0, l.jsx)(A.default, {}) : null,
            k.map(e =>
              (0, l.jsx)(
                f.default,
                {
                  guildId: b.id,
                  itemId: e.id,
                  scrollerHeight: q,
                  scrollerRef: y,
                  showFeedback: e.id === el && et,
                  setOnDismissedFeedback: ea,
                },
                e.id
              )
            ),
            (0, l.jsx)(R, {
              guildId: b.id,
              hasMoreItems: null != Z && Z,
              scrollerRef: y,
              error: K,
              fetchPage: Y,
              onReloadClick: $,
            }),
          ],
        });
      }
    },
    216364: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GuildFeedFooter: function () {
            return g;
          },
          GuildFeedEmpty: function () {
            return I;
          },
          GuildFeedError: function () {
            return _;
          },
          GuildFeedPaginationError: function () {
            return x;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("77078"),
        r = a("109264"),
        u = a("543289"),
        o = a("423487"),
        c = a("795783"),
        f = a("49111"),
        m = a("782340"),
        h = a("961357");
      function E(e, t, n) {
        return (0, l.jsx)(
          d.Clickable,
          {
            className: h.mutedChannelsHook,
            onClick: function () {
              (0, d.openModalLazy)(async () => {
                let { default: e } = await a
                  .el("747593")
                  .then(a.bind(a, "747593"));
                return t => (0, l.jsx)(e, { ...t, guildId: n });
              });
            },
            children: e,
          },
          t
        );
      }
      let g = n.memo(function (e) {
          let { guildId: t, onReloadClick: a } = e,
            n = (0, c.default)(t);
          return (0, l.jsxs)("div", {
            className: i(h.container, h.footerContainer),
            children: [
              (0, l.jsxs)("div", {
                className: h.iconContainer,
                children: [
                  (0, l.jsx)(r.default, {
                    className: h.icon,
                    width: 20,
                    height: 20,
                  }),
                  (0, l.jsx)(u.default, {
                    className: h.stars,
                    width: 52,
                    height: 40,
                  }),
                ],
              }),
              (0, l.jsx)(d.Heading, {
                className: h.header,
                variant: "heading-md/semibold",
                children: m.default.Messages.GUILD_FEED_FOOTER_TITLE,
              }),
              (0, l.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children:
                  n > 0
                    ? m.default.Messages.GUILD_FEED_MUTED_CHANNELS_SUBTITLE.format(
                        {
                          numMutedChannels: n,
                          mutedChannelsHook: (e, a) => E(e, a, t),
                        }
                      )
                    : m.default.Messages.GUILD_FEED_FOOTER_SUBTITLE,
              }),
              (0, l.jsx)(d.Button, {
                onClick: a,
                className: h.button,
                children: m.default.Messages.GUILD_FEED_RELOAD,
              }),
            ],
          });
        }),
        I = n.memo(function (e) {
          let { guildId: t, onReloadClick: a } = e,
            n = (0, c.default)(t);
          return (0, l.jsxs)("div", {
            className: i(h.container, h.background),
            children: [
              (0, l.jsxs)("div", {
                className: h.iconContainer,
                children: [
                  (0, l.jsx)(r.default, {
                    className: h.icon,
                    width: 36,
                    height: 36,
                  }),
                  (0, l.jsx)(u.default, { className: h.stars }),
                ],
              }),
              (0, l.jsx)(d.Heading, {
                className: h.header,
                variant: "heading-md/semibold",
                children: m.default.Messages.GUILD_FEED_EMPTY_TITLE,
              }),
              (0, l.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children:
                  n > 0
                    ? m.default.Messages.GUILD_FEED_MUTED_CHANNELS_SUBTITLE.format(
                        {
                          numMutedChannels: n,
                          mutedChannelsHook: (e, a) => E(e, a, t),
                        }
                      )
                    : m.default.Messages.GUILD_FEED_EMPTY_SUBTITLE,
              }),
              (0, l.jsx)(d.Button, {
                onClick: a,
                className: h.button,
                children: m.default.Messages.GUILD_FEED_RELOAD,
              }),
            ],
          });
        }),
        _ = n.memo(function (e) {
          let { onReloadClick: t } = e;
          return (0, l.jsxs)("div", {
            className: i(h.container, h.background),
            children: [
              (0, l.jsx)("div", {
                className: h.iconContainer,
                children: (0, l.jsx)(o.default, {
                  className: h.icon,
                  width: 36,
                  height: 36,
                }),
              }),
              (0, l.jsx)(d.Heading, {
                className: h.header,
                variant: "heading-md/semibold",
                children: m.default.Messages.GUILD_FEED_ERROR_TITLE,
              }),
              (0, l.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: m.default.Messages.GUILD_FEED_ERROR_SUBTITLE.format({
                  url: f.Links.STATUS,
                }),
              }),
              (0, l.jsx)(d.Button, {
                onClick: t,
                className: h.button,
                children: m.default.Messages.GUILD_FEED_RELOAD,
              }),
            ],
          });
        }),
        x = n.memo(function (e) {
          let { onReloadClick: t } = e;
          return (0, l.jsxs)("div", {
            className: i(
              h.container,
              h.paginationContainer,
              h.primaryBackground
            ),
            children: [
              (0, l.jsx)("div", {
                className: h.iconContainer,
                children: (0, l.jsx)(o.default, {
                  className: h.icon,
                  width: 36,
                  height: 36,
                }),
              }),
              (0, l.jsx)(d.Heading, {
                className: h.header,
                variant: "heading-md/semibold",
                children: m.default.Messages.GUILD_FEED_ERROR_TITLE,
              }),
              (0, l.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: m.default.Messages.GUILD_FEED_ERROR_SUBTITLE.format({
                  url: f.Links.STATUS,
                }),
              }),
              (0, l.jsx)(d.Button, {
                onClick: t,
                className: h.button,
                children: m.default.Messages.RETRY,
              }),
            ],
          });
        });
    },
    405700: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("917351"),
        i = a.n(s),
        d = a("339274"),
        r = a("605143"),
        u = a("88243"),
        o = a("67602"),
        c = a("55155");
      function f() {
        let e = n.useMemo(() => {
          if (!(0.5 > i.random(1)))
            return { ...(0, u.generateAttachmentSpec)(), last: !0 };
        }, []);
        return (0, l.jsxs)(d.default, {
          "aria-hidden": !0,
          ariaLabel: "",
          children: [
            (0, l.jsx)(r.default, {
              children: (0, l.jsx)(o.ContentBlob, {
                className: c.channelName,
                opacity: 0.3,
                width: 80,
              }),
            }),
            (0, l.jsx)("div", {
              className: c.body,
              children: (0, l.jsx)(o.default, {
                messages: 5,
                attachmentSpecs: e,
                className: c.withoutCustomBackground,
              }),
            }),
          ],
        });
      }
      var m = n.memo(function (e) {
        let { count: t } = e;
        return (0, l.jsx)(l.Fragment, {
          children: i.times(null != t ? t : 5, e => (0, l.jsx)(f, {}, e)),
        });
      });
    },
    67076: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        s = a.n(n),
        i = a("446674"),
        d = a("77078"),
        r = a("957255"),
        u = a("945330"),
        o = a("701909"),
        c = a("620840"),
        f = a("49111"),
        m = a("994428"),
        h = a("782340"),
        E = a("194728"),
        g = a("487577");
      function I(e) {
        let { children: t, onClose: a } = e;
        return (0, l.jsxs)("div", {
          className: E.container,
          children: [
            (0, l.jsx)(d.Clickable, {
              className: E.closeButton,
              onClick: a,
              children: (0, l.jsx)(u.default, { className: E.closeIcon }),
            }),
            (0, l.jsx)("div", { className: E.textContainer, children: t }),
            (0, l.jsx)("img", { className: E.image, src: g, alt: "" }),
          ],
        });
      }
      function _(e) {
        let { onClose: t } = e;
        return (0, l.jsxs)(I, {
          onClose: t,
          children: [
            (0, l.jsx)(d.Heading, {
              style: { color: "white" },
              variant: "heading-lg/semibold",
              color: "none",
              children: h.default.Messages.GUILD_FEED_NUX_MEMBER_TITLE,
            }),
            (0, l.jsx)(d.Text, {
              className: E.bodySection,
              variant: "text-sm/normal",
              color: "none",
              children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1,
            }),
            (0, l.jsx)(d.Text, {
              className: E.bodySection,
              variant: "text-sm/normal",
              color: "none",
              children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2,
            }),
            (0, l.jsx)(d.Anchor, {
              className: s(
                E.cta,
                E.ctaLink,
                (0, d.getButtonStyle)({
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.WHITE,
                })
              ),
              href: o.default.getArticleURL(f.HelpdeskArticles.GUILD_HOME),
              children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_3,
            }),
          ],
        });
      }
      function x() {
        (0, d.openModalLazy)(async () => {
          let { default: e } = await a.el("56657").then(a.bind(a, "56657"));
          return t => (0, l.jsx)(e, { ...t });
        });
      }
      function v(e) {
        let { onClose: t } = e;
        return (0, l.jsxs)(I, {
          onClose: t,
          children: [
            (0, l.jsx)(d.Heading, {
              style: { color: "white" },
              variant: "heading-lg/semibold",
              color: "none",
              children: h.default.Messages.GUILD_FEED_NUX_MODERATOR_TITLE,
            }),
            (0, l.jsx)(d.Text, {
              className: E.bodySection,
              variant: "text-sm/normal",
              color: "none",
              children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1,
            }),
            (0, l.jsx)(d.Text, {
              className: E.bodySection,
              variant: "text-sm/normal",
              color: "none",
              children: h.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2,
            }),
            (0, l.jsx)(d.Button, {
              className: E.cta,
              look: d.Button.Looks.INVERTED,
              color: d.Button.Colors.BRAND,
              onClick: x,
              children: h.default.Messages.GUILD_FEED_NUX_MODERATOR_CTA,
            }),
          ],
        });
      }
      function C(e) {
        let { guild: t, onClose: a } = e,
          n = (0, i.useStateFromStores)([r.default], () =>
            r.default.can(f.Permissions.MANAGE_MESSAGES, t)
          ),
          s = (0, c.default)(t, a);
        return s
          ? n
            ? (0, l.jsx)(v, {
                onClose: () => a(m.ContentDismissActionType.UNKNOWN),
              })
            : (0, l.jsx)(_, {
                onClose: () => a(m.ContentDismissActionType.UNKNOWN),
              })
          : null;
      }
    },
    806727: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("151426"),
        i = a("384997"),
        d = a("67076"),
        r = a("994428");
      let u = [s.DismissibleContent.GUILD_FEED_NUX_CARD];
      var o = n.memo(function (e) {
        let { guild: t } = e;
        return (0, l.jsx)(i.default, {
          contentTypes: u,
          groupName: r.DismissibleContentGroupName.GUILD_FEED_TOP,
          children: e => {
            let { visibleContent: a, markAsDismissed: n } = e;
            if (a === s.DismissibleContent.GUILD_FEED_NUX_CARD)
              return (0, l.jsx)(d.default, {
                guild: t,
                onClose: () => n(r.ContentDismissActionType.UNKNOWN),
              });
            return null;
          },
        });
      });
    },
    807058: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("77078"),
        i = a("36694"),
        d = a("782340"),
        r = a("246616"),
        u = n.memo(function () {
          return (0, l.jsxs)("div", {
            className: r.container,
            children: [
              (0, l.jsxs)("div", {
                className: r.divider,
                children: [
                  (0, l.jsx)("div", { className: r.line }),
                  (0, l.jsx)("div", {
                    className: r.icon,
                    children: (0, l.jsx)(i.default, { height: 24, width: 24 }),
                  }),
                  (0, l.jsx)("div", { className: r.line }),
                ],
              }),
              (0, l.jsx)(s.Text, {
                className: r.title,
                color: "header-primary",
                variant: "text-md/semibold",
                children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_TITLE,
              }),
              (0, l.jsx)(s.Text, {
                className: r.subtitle,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_SUBTITLE,
              }),
            ],
          });
        });
    },
    821435: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return B;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("298386"),
        r = a("446674"),
        u = a("77078"),
        o = a("834897"),
        c = a("419830"),
        f = a("374021"),
        m = a("398604"),
        h = a("628059"),
        E = a("841363"),
        g = a("822516"),
        I = a("93550"),
        _ = a("267567"),
        x = a("393414"),
        v = a("716214"),
        C = a("488464"),
        S = a("998716"),
        N = a("42203"),
        p = a("957255"),
        T = a("316133"),
        A = a("943232"),
        j = a("93393"),
        M = a("718550"),
        D = a("811305"),
        F = a("599110"),
        L = a("887446"),
        R = a("154925"),
        b = a("49111"),
        G = a("515631"),
        y = a("745049"),
        O = a("782340"),
        H = a("93286");
      function k(e) {
        let { event: t } = e,
          { scheduled_start_time: a, scheduled_end_time: s } = t,
          d = (0, m.isGuildScheduledEventActive)(t),
          [
            {
              startDateTimeString: r,
              endDateTimeString: o,
              currentOrPastEvent: c,
              upcomingEvent: f,
              diffMinutes: h,
            },
            E,
          ] = n.useState((0, g.getEventTimeData)(a, s));
        n.useEffect(() => {
          let e = setInterval(() => E((0, g.getEventTimeData)(a, s)), 1e3);
          return () => {
            clearInterval(e);
          };
        }, []);
        let I = r,
          _ = "header-secondary";
        return (
          d
            ? ((I = O.default.Messages.STAGE_CHANNEL_LIVE_NOW),
              (_ = "text-positive"))
            : c
              ? ((I = O.default.Messages.STARTING_SOON), (_ = "text-brand"))
              : f
                ? ((I =
                    h > 0
                      ? O.default.Messages.STARTING_IN_MINUTES.format({
                          minutes: h,
                        })
                      : O.default.Messages.STARTING_SOON),
                  (_ = "text-brand"))
                : null != o &&
                  "" !== o &&
                  (I = O.default.Messages.START_DATE_TO_END_DATE.format({
                    start: r,
                    end: o,
                  })),
          (0, l.jsxs)("div", {
            className: i(H.eventTime, { [H.isActive]: d, [H.isBrand]: c || f }),
            children: [
              (0, l.jsx)(j.default, { width: 12, height: 12 }),
              (0, l.jsxs)(u.Text, {
                color: _,
                variant: "text-xs/normal",
                className: H.eventTimeLabel,
                children: [
                  I,
                  (0, l.jsx)("span", { className: H.separator, children: "•" }),
                ],
              }),
            ],
          })
        );
      }
      function U(e) {
        let { event: t, channel: a, isCollapsedSize: s, onEventClick: i } = e,
          d = (0, r.useStateFromStores)([p.default], () =>
            p.default.can(b.Permissions.CONNECT, a)
          ),
          o = n.useCallback(() => {
            null != a &&
              null != a.getGuildId() &&
              d &&
              ((0, v.connectAndOpen)(a),
              (0, x.transitionToGuild)(a.getGuildId(), a.id));
          }, [a, d]),
          c = (0, I.default)(t),
          f =
            t.entity_type === y.GuildScheduledEventEntityTypes.STAGE_INSTANCE
              ? O.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
              : O.default.Messages.JOIN;
        if (null == t.image || s)
          return null != a && d
            ? (0, l.jsx)("div", {
                className: H.eventJoinContainer,
                children: (0, l.jsx)(u.Button, {
                  className: H.joinButton,
                  onClick: o,
                  fullWidth: !0,
                  color: u.Button.Colors.GREEN,
                  children: f,
                }),
              })
            : null;
        return null != a && d
          ? (0, l.jsxs)(u.Clickable, {
              onClick: o,
              className: H.eventJoinContainer,
              children: [
                (0, l.jsx)("div", {
                  className: H.eventImg,
                  style: { backgroundImage: "url(".concat(c, ")") },
                }),
                (0, l.jsx)("div", {
                  className: H.eventImgHover,
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: H.eventImgJoinButton,
                    children: f,
                  }),
                }),
              ],
            })
          : (0, l.jsx)(u.Clickable, {
              onClick: i,
              className: H.eventJoinContainer,
              children: (0, l.jsx)("div", {
                className: H.eventImg,
                style: { backgroundImage: "url(".concat(c, ")") },
              }),
            });
      }
      function w(e) {
        var t;
        let { event: a, channel: n, isActive: s, isCollapsedSize: d } = e,
          r = (0, c.getChannelIconComponent)(n);
        return (0, l.jsxs)("div", {
          className: H.eventInfo,
          children: [
            (!s || d) && (0, l.jsx)(k, { event: a }),
            (0, l.jsx)("div", {
              className: H.location,
              children:
                null != n && null != r
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(r, {
                          width: 12,
                          height: 12,
                          className: H.icon,
                        }),
                        (0, l.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          className: H.locationLabel,
                          children: n.name,
                        }),
                      ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(M.default, {
                          height: 12,
                          width: 12,
                          className: i(H.channelContainer, H.icon),
                        }),
                        (0, l.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          className: H.locationLabel,
                          children: (0, h.guildEventDetailsParser)(
                            null !== (t = (0, E.getLocationFromEvent)(a)) &&
                              void 0 !== t
                              ? t
                              : void 0,
                            !0
                          ),
                        }),
                      ],
                    }),
            }),
          ],
        });
      }
      function B(e) {
        let { event: t, isInList: a } = e,
          { guild_id: s } = t,
          i = (0, o.default)(G.COLLAPSED_SIZE_MEDIA_QUERY),
          u = (0, m.isGuildScheduledEventActive)(t),
          c = (0, r.useStateFromStores)([N.default], () =>
            N.default.getChannel(t.channel_id)
          ),
          h = (0, r.useStateFromStores)(
            [_.default],
            () => _.default.isLurking(s),
            [s]
          ),
          E = n.useCallback(() => {
            F.default.track(b.AnalyticEvents.HOME_EVENT_CLICKED, {
              guild_id: s,
              home_session_id: L.default.getHomeSessionId(s),
              guild_scheduled_event_id: t.id,
              is_active: u,
            }),
              (0, f.openGuildEventDetails)({ eventId: t.id, parentGuildId: s });
          }, [t, s, u]),
          g = (0, r.useStateFromStoresArray)(
            [T.default],
            () =>
              null == c
                ? []
                : T.default.getVoiceStatesForChannel(c).map(e => {
                    let { user: t } = e;
                    return t;
                  }),
            [c]
          ),
          I = (0, r.useStateFromStores)(
            [C.default],
            () => {
              if (null != c && c.type === d.ChannelTypes.GUILD_STAGE_VOICE)
                return C.default.getParticipantCount(
                  null == c ? void 0 : c.id,
                  S.StageChannelParticipantNamedIndex.AUDIENCE
                );
            },
            [c]
          );
        return (0, l.jsx)(R.ActiveNowBase, {
          listItemId: a ? t.id : void 0,
          shouldUseCollapsedLayout: !1,
          onClick: h ? void 0 : E,
          icon: u
            ? (0, l.jsx)("div", { className: H.liveNowIcon })
            : (0, l.jsx)(A.default, {
                width: R.ACTIVE_NOW_ICON_SIZE,
                height: R.ACTIVE_NOW_ICON_SIZE,
              }),
          iconTooltipText: O.default.Messages.GUILD_HOME_EVENTS_TOOLTIP_TEXT,
          header: t.name,
          textNode: (0, l.jsx)(w, {
            event: t,
            channel: c,
            isActive: u,
            isCollapsedSize: i,
          }),
          accessoryNode: u
            ? (0, l.jsx)(D.default, {
                guildId: s,
                users: g,
                count: I,
                size: D.Sizes.SIZE_16,
                max: R.DISPLAYED_PARTICIPANT_AVATARS,
              })
            : null,
          children:
            u &&
            (0, l.jsx)(U, {
              event: t,
              channel: c,
              isCollapsedSize: i,
              onEventClick: E,
            }),
        });
      }
    },
    114935: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return x;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("917351"),
        i = a.n(s),
        d = a("866227"),
        r = a.n(d),
        u = a("151426"),
        o = a("77078"),
        c = a("834897"),
        f = a("10641"),
        m = a("398604"),
        h = a("534222"),
        E = a("821435"),
        g = a("515631"),
        I = a("782340"),
        _ = a("689556");
      function x(e) {
        let { guild: t } = e,
          s = (0, c.default)(g.COLLAPSED_SIZE_MEDIA_QUERY),
          d = (0, h.default)(t.id),
          x = n.useMemo(() => {
            let e = d.filter(e => (0, m.isGuildScheduledEventActive)(e));
            return s && e.length > 0
              ? i.head(e)
              : i
                  .chain(d)
                  .filter(e => !(0, m.isGuildScheduledEventActive)(e))
                  .minBy(e => r(e.scheduled_start_time))
                  .value();
          }, [d, s]);
        if (null == x) return null;
        async function v() {
          await (0, o.openModalLazy)(async () => {
            let { default: e } = await a.el("659707").then(a.bind(a, "659707"));
            return a => (0, l.jsx)(e, { ...a, guildId: t.id });
          }),
            (0, f.markDismissibleContentAsDismissed)(
              u.DismissibleContent.GUILD_HEADER_EVENT_UPSELL
            );
        }
        return (0, l.jsxs)("div", {
          className: _.container,
          children: [
            (0, l.jsxs)("div", {
              className: _.header,
              children: [
                (0, l.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  children: s
                    ? I.default.Messages.GUILD_EVENTS
                    : I.default.Messages.GUILD_HOME_EVENTS_TITLE,
                }),
                d.length >= 2
                  ? (0, l.jsx)(o.Clickable, {
                      onClick: v,
                      children: (0, l.jsx)(o.Text, {
                        className: _.showEvents,
                        variant: "text-sm/normal",
                        children: I.default.Messages.GUILD_HOME_SEE_ALL.format({
                          count: d.length,
                        }),
                      }),
                    })
                  : null,
              ],
            }),
            (0, l.jsx)("div", {
              className: _.events,
              children: (0, l.jsx)(E.default, { event: x, isInList: !1 }),
            }),
          ],
        });
      }
    },
    20362: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("446674"),
        i = a("77078"),
        d = a("503021"),
        r = a("757414"),
        u = a("476263"),
        o = a("782340"),
        c = a("231308");
      function f(e) {
        let { guild: t } = e;
        n.useEffect(() => {
          (0, d.fetchGuildForPopout)(t.id);
        }, [t.id]);
        let a = (0, s.useStateFromStores)(
          [r.default],
          () => r.default.getGuild(t.id),
          [t]
        );
        return (0, l.jsxs)("div", {
          className: c.memberInfo,
          children: [
            (null == a ? void 0 : a.presenceCount) != null
              ? (0, l.jsxs)("div", {
                  className: c.memberCount,
                  children: [
                    (0, l.jsx)("div", { className: c.dotOnline }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      className: c.memberText,
                      children:
                        o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format(
                          { membersOnline: a.presenceCount }
                        ),
                    }),
                  ],
                })
              : null,
            (null == a ? void 0 : a.memberCount) != null
              ? (0, l.jsxs)("div", {
                  className: c.memberCount,
                  children: [
                    (0, l.jsx)("div", { className: c.dotOffline }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      className: c.memberText,
                      children:
                        o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format(
                          { members: a.memberCount }
                        ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      var m = n.memo(function (e) {
        let { guild: t } = e;
        return (0, l.jsxs)("div", {
          className: c.container,
          children: [
            (0, l.jsx)("div", {
              className: c.iconWrapper,
              children: (0, l.jsx)(u.default, {
                className: c.icon,
                guild: t,
                size: u.default.Sizes.LARGER,
                active: !0,
              }),
            }),
            (0, l.jsx)(i.Text, {
              tag: "div",
              className: c.name,
              variant: "heading-xl/semibold",
              children: t.name,
            }),
            null != t.description
              ? (0, l.jsx)(i.Text, {
                  className: c.description,
                  variant: "text-md/normal",
                  children: t.description,
                })
              : null,
            (0, l.jsx)(f, { guild: t }),
          ],
        });
      });
    },
    815619: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useHomeHeader: function () {
            return A;
          },
          default: function () {
            return D;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("446674"),
        r = a("669491"),
        u = a("77078"),
        o = a("841098"),
        c = a("380710"),
        f = a("592407"),
        m = a("242757"),
        h = a("957255"),
        E = a("40469"),
        g = a("476263"),
        I = a("181114"),
        _ = a("118503"),
        x = a("818643"),
        v = a("315102"),
        C = a("49111"),
        S = a("782340"),
        N = a("32492"),
        p = a("141555"),
        T = a("520609");
      let A = e => {
        let t = n.useMemo(
          () =>
            null == e
              ? null
              : v.default.getGuildHomeHeaderURL({
                  id: e.id,
                  homeHeader: e.homeHeader,
                }),
          [e]
        );
        return {
          homeHeaderImage: t,
          isHomeHeaderImageSet: null != t,
          homeHeaderScroll: null != t ? 200 : 0,
        };
      };
      function j(e) {
        let { guild: t } = e,
          a = () => {
            f.default.open(
              t.id,
              C.GuildSettingsSections.ONBOARDING,
              void 0,
              C.GuildSettingsSubsections.SERVER_GUIDE
            );
          },
          n = t.hasFeature(C.GuildFeatures.BANNER);
        return n
          ? (0, l.jsxs)(u.Button, {
              className: N.editButton,
              innerClassName: N.editButtonInner,
              type: "button",
              size: u.Button.Sizes.MEDIUM,
              color: u.Button.Colors.BRAND,
              onClick: a,
              children: [
                (0, l.jsx)(x.default, {
                  height: 16,
                  width: 16,
                  color: r.default.unsafe_rawColors.WHITE_500.css,
                }),
                S.default.Messages.EDIT_IMAGE,
              ],
            })
          : (0, l.jsxs)(I.default, {
              color: u.Button.Colors.GREEN,
              className: N.editButton,
              innerClassName: N.editButtonInner,
              onClick: a,
              children: [
                (0, l.jsx)(_.default, {
                  height: 16,
                  width: 16,
                  className: N.premiumUpsellBadge,
                }),
                S.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA,
              ],
            });
      }
      let M = n.memo(function (e) {
        let { guild: t, titleClassName: n } = e,
          { homeHeaderImage: s, isHomeHeaderImageSet: r } = A(t),
          f = (0, c.useGuildOnboardingSettingsAvailable)(t.id),
          I = (0, d.useStateFromStores)([h.default], () =>
            (0, m.canViewInviteModal)(h.default, t)
          ),
          _ = (0, o.default)();
        return (0, l.jsxs)("div", {
          className: N.header,
          children: [
            (0, l.jsxs)("div", {
              className: N.headerArtWrapper,
              children: [
                (0, l.jsx)("div", {
                  className: i(N.headerArt, { [N.headerArtPlaceholder]: !r }),
                  style: {
                    backgroundImage: "url(".concat(
                      r ? s : "dark" === _ ? p : T,
                      ")"
                    ),
                  },
                }),
                f && (0, l.jsx)(j, { guild: t }),
              ],
            }),
            (0, l.jsx)("div", {
              className: N.titleWrapper,
              children: (0, l.jsxs)("div", {
                className: n,
                children: [
                  (0, l.jsx)(g.default, {
                    className: N.headerIcon,
                    guild: t,
                    size: g.default.Sizes.XLARGE,
                    active: !0,
                  }),
                  (0, l.jsx)(u.HeadingLevel, {
                    children: (0, l.jsxs)("div", {
                      className: N.headerName,
                      children: [
                        (0, l.jsx)(u.Heading, {
                          className: N.headerName,
                          variant: "heading-xxl/bold",
                          children: t.name,
                        }),
                        (0, l.jsx)(E.default, {
                          size: 24,
                          guild: t,
                          tooltipPosition: "bottom",
                          tooltipColor: u.Tooltip.Colors.PRIMARY,
                          className: N.guildBadge,
                        }),
                        I &&
                          (0, l.jsx)(u.Button, {
                            className: N.inviteButton,
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () =>
                              (0, u.openModalLazy)(async () => {
                                let { default: e } = await a
                                  .el("310688")
                                  .then(a.bind(a, "310688"));
                                return a =>
                                  (0, l.jsx)(e, {
                                    ...a,
                                    guild: t,
                                    source: C.InstantInviteSources.GUILD_HOME,
                                  });
                              }),
                            children: S.default.Messages.INSTANT_INVITE,
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      });
      var D = M;
    },
    543071: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return m;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("446674"),
        i = a("77078"),
        d = a("503021"),
        r = a("757414"),
        u = a("794352"),
        o = a("782340"),
        c = a("231308");
      function f(e) {
        let { guild: t } = e;
        n.useEffect(() => {
          (0, d.fetchGuildForPopout)(t.id);
        }, [t.id]);
        let a = (0, s.useStateFromStores)(
          [r.default],
          () => r.default.getGuild(t.id),
          [t]
        );
        return (0, l.jsxs)("div", {
          className: c.memberInfo,
          children: [
            t.hasCommunityInfoSubheader() &&
              (0, l.jsxs)("div", {
                className: c.memberCount,
                children: [
                  (0, l.jsx)(u.default, { width: 14, height: 14 }),
                  (0, l.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      o.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC,
                  }),
                ],
              }),
            (null == a ? void 0 : a.presenceCount) != null &&
              (0, l.jsxs)("div", {
                className: c.memberCount,
                children: [
                  (0, l.jsx)("div", { className: c.dotOnline }),
                  (0, l.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                        membersOnline: a.presenceCount,
                      }),
                  }),
                ],
              }),
            (null == a ? void 0 : a.memberCount) != null &&
              (0, l.jsxs)("div", {
                className: c.memberCount,
                children: [
                  (0, l.jsx)("div", { className: c.dotOffline }),
                  (0, l.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format(
                        { members: a.memberCount }
                      ),
                  }),
                ],
              }),
          ],
        });
      }
      var m = n.memo(function (e) {
        let { guild: t } = e;
        return (0, l.jsx)("div", {
          className: c.container,
          children: (0, l.jsxs)(i.HeadingLevel, {
            component: (0, l.jsx)("div", {
              className: c.header,
              children: (0, l.jsx)(i.Heading, {
                variant: "heading-md/bold",
                children: o.default.Messages.GUILD_HOME_ABOUT,
              }),
            }),
            children: [
              null != t.description
                ? (0, l.jsx)(i.Text, {
                    className: c.description,
                    variant: "text-md/normal",
                    children: t.description,
                  })
                : null,
              (0, l.jsx)(f, { guild: t }),
            ],
          }),
        });
      });
    },
    144295: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return eg;
          },
        }),
        a("424973"),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("355262"),
        r = a("446674"),
        u = a("77078"),
        o = a("851387"),
        c = a("737960"),
        f = a("731898"),
        m = a("834897"),
        h = a("510889"),
        E = a("665182"),
        g = a("624027"),
        I = a("462998"),
        _ = a("69927"),
        x = a("298878"),
        v = a("713810"),
        C = a("185014"),
        S = a("290886"),
        N = a("957687"),
        p = a("90713"),
        T = a("539938"),
        A = a("144491"),
        j = a("56778"),
        M = a("208021"),
        D = a("582713"),
        F = a("861570"),
        L = a("982108"),
        R = a("760190"),
        b = a("305961"),
        G = a("957255"),
        y = a("744983"),
        O = a("223383"),
        H = a("550515"),
        k = a("664336"),
        U = a("395118"),
        w = a("599110"),
        B = a("608275"),
        P = a("677315"),
        V = a("146005"),
        W = a("887446"),
        K = a("827298"),
        z = a("577177"),
        Y = a("75360"),
        Z = a("280110"),
        X = a("914878"),
        J = a("260730"),
        q = a("114935"),
        Q = a("20362"),
        $ = a("815619"),
        ee = a("543071"),
        et = a("49111"),
        ea = a("724210"),
        el = a("515631"),
        en = a("782340"),
        es = a("695647"),
        ei = a("250455"),
        ed = a("487577");
      let er = 936,
        eu = n.memo(function (e) {
          let { guild: t, seenManagerRef: a } = e,
            n = (function (e, t) {
              let a = (0, r.useStateFromStores)(
                  [G.default],
                  () => G.default.can(et.Permissions.MANAGE_MESSAGES, e),
                  [e]
                ),
                n = [];
              return (
                n.push(
                  (0, l.jsx)(k.Icon, {
                    tooltip: en.default.Messages.REFRESH,
                    icon: H.default,
                    onClick: function () {
                      (0, v.fetchGuildFeed)({
                        guildId: e.id,
                        refresh: !0,
                        flushSeenItems: () => {
                          var e;
                          return null === (e = t.current) || void 0 === e
                            ? void 0
                            : e.maybeFlushSeenItems(U.ForceFlushType.IMMEDIATE);
                        },
                      });
                    },
                  })
                ),
                a && n.push((0, l.jsx)(p.default, { guildId: e.id })),
                n
              );
            })(t, a);
          return (0, l.jsxs)(T.default, {
            channelId: ea.StaticChannelRoute.GUILD_HOME,
            guildId: t.id,
            className: i(ei.title, es.background),
            innerClassname: es.headerBarInner,
            toolbar: n,
            children: [
              (0, l.jsx)(T.default.Icon, {
                icon: O.default,
                "aria-hidden": !0,
              }),
              (0, l.jsxs)(T.default.Title, {
                children: [
                  (0, l.jsx)(u.HiddenVisually, { children: t.name }),
                  en.default.Messages.GUILD_HOME,
                ],
              }),
              (0, l.jsx)(x.default, {}),
            ],
          });
        }),
        eo = n.memo(function (e) {
          let { guild: t, containerHeight: a, isUsingCollapsedLayout: s } = e,
            [i, d] = n.useState(0),
            { ref: r, height: o } = (0, f.default)();
          (0, z.default)(t.id),
            n.useEffect(() => {
              if (null != o) d(o + 128 - a);
            }, [a, o]);
          let c = (0, u.useFocusJumpSection)(),
            { hasNewHeader: m } =
              V.GuildHomeHeaderRedesignExperiment.useExperiment(
                { guildId: t.id, location: "69386d_3" },
                { autoTrackExposure: !1 }
              );
          return (0, l.jsx)("aside", {
            className: es.widgets,
            style: { top: Math.min(-i, m ? -48 : 0) },
            children: (0, l.jsx)(u.FocusRing, {
              children: (0, l.jsxs)("div", {
                className: es.widgetsContainer,
                ref: r,
                tabIndex: s ? void 0 : 0,
                "aria-label": en.default.Messages.GUILD_HOME_SIDEBAR_A11Y_LABEL,
                ...(s ? {} : c),
                children: [
                  m
                    ? (0, l.jsx)(ee.default, { guild: t })
                    : (0, l.jsx)(Q.default, { guild: t }),
                  (0, l.jsx)(X.default, {
                    guildId: t.id,
                    isUsingCollapsedLayout: s,
                  }),
                  (0, l.jsx)(q.default, { guild: t }),
                ],
              }),
            }),
          });
        });
      function ec(e) {
        let t,
          { pageWidth: a, onSidebarResize: n } = e,
          s = (0, r.useStateFromStores)([L.default], () =>
            L.default.getSidebarState(ea.StaticChannelRoute.GUILD_HOME)
          );
        if (null == s) return null;
        let i = a - et.CHANNEL_SIDEBAR_WIDTH - 552;
        return (
          s.type === D.SidebarType.VIEW_THREAD
            ? (t = (0, l.jsx)(F.default, {
                channelId: s.channelId,
                baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
                channelViewSource: "Home View",
              }))
            : s.type === D.SidebarType.VIEW_CHANNEL &&
              (t = (0, l.jsx)(I.default, {
                channelId: s.channelId,
                baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
                channelViewSource: "Home View",
              })),
          (0, l.jsx)(E.default, {
            sidebarType: E.ChatSidebarType.HomeSidebar,
            maxWidth: i,
            onWidthChange: n,
            children: t,
          })
        );
      }
      let ef = [
        {
          label: "Segment Reads",
          value: el.GuildFeedRenderMode.SEGMENTED_READ,
        },
        { label: "Top", value: el.GuildFeedRenderMode.TOP },
        { label: "New", value: el.GuildFeedRenderMode.NEW },
      ];
      function em(e) {
        let { renderMode: t, setRenderMode: a } = e,
          { showSelector: n } =
            P.GuildFeedRenderSelectorExperiment.useExperiment(
              { location: "69386d_4" },
              { autoTrackExposure: !1 }
            );
        return n
          ? (0, l.jsx)(u.Select, {
              className: es.selector,
              options: ef,
              select: a,
              isSelected: e => e === t,
              serialize: e => String(e),
            })
          : null;
      }
      let eh = (0, c.default)(function (e) {
          let { guild: t, width: a, height: s } = e,
            o = t.id,
            c = (0, r.useStateFromStores)([L.default], () =>
              L.default.getSection(ea.StaticChannelRoute.GUILD_HOME)
            ),
            E = (0, r.useStateFromStores)([y.default], () =>
              y.default.getCurrentSearchId()
            ),
            [g, I] = n.useState(!1),
            [x, v] = n.useState(et.DEFAULT_CHAT_SIDEBAR_WIDTH),
            S = c === et.ChannelSections.SEARCH,
            N = c === et.ChannelSections.SIDEBAR_CHAT,
            p = S || N,
            T = n.useRef(null),
            A = (0, h.default)("top-messages", T),
            { ref: D } = (0, f.default)(),
            [F, R] = n.useState(el.GuildFeedRenderMode.SEGMENTED_READ),
            b = (0, m.default)(el.COLLAPSED_SIZE_MEDIA_QUERY),
            G = n.useRef(!1),
            { hasNewHeader: O } =
              V.GuildHomeHeaderRedesignExperiment.useExperiment(
                { guildId: o, location: "69386d_5" },
                { autoTrackExposure: !1 }
              ),
            { homeHeaderScroll: H } = (0, $.useHomeHeader)(t);
          n.useEffect(() => {
            G.current = !1;
          }, [o]),
            n.useEffect(() => {
              let e = C.default.getLoadId(o);
              null == e &&
                M.default.closeChannelSidebar(ea.StaticChannelRoute.GUILD_HOME);
            }, [o]),
            (0, Z.default)(o),
            n.useLayoutEffect(() => {
              var e, t;
              let a = W.default.getSavedScrollPosition(o);
              return (
                O && (0 === a || null == a)
                  ? null === (e = T.current) ||
                    void 0 === e ||
                    e.scrollTo({ to: H })
                  : null != a &&
                    (null === (t = T.current) ||
                      void 0 === t ||
                      t.scrollTo({ to: a })),
                () => {
                  var e;
                  let t =
                    null === (e = T.current) || void 0 === e
                      ? void 0
                      : e.getScrollerState();
                  null != t &&
                    (0, B.saveGuildHomeScrollPosition)(o, t.scrollTop);
                }
              );
            }, [o, O, H]);
          let k = a - et.CHANNEL_SIDEBAR_WIDTH - x,
            U = !(p && k < er) || b,
            z = n.useRef(null),
            Y = n.useCallback(() => {
              !G.current &&
                ((0, K.ackGuildHome)(o),
                (G.current = !0),
                w.default.track(et.AnalyticEvents.HOME_FIRST_SCROLL_STARTED, {
                  guild_id: o,
                  home_session_id: W.default.getHomeSessionId(o),
                }));
            }, [o]);
          (0, _.usePageTitle)({
            location: en.default.Messages.GUILD_HOME_HTML_TITLE.format({
              guildName: t.name,
            }),
          });
          let X = (0, u.useFocusJumpSection)(),
            { showDeprecationNotice: q } =
              P.GuildHomeDeprecationExperiment.useExperiment(
                { guildId: o, location: "69386d_6" },
                { autoTrackExposure: !1 }
              ),
            Q = U
              ? (0, l.jsx)(
                  eo,
                  { guild: t, containerHeight: s, isUsingCollapsedLayout: b },
                  "widgets"
                )
              : null;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: i(ei.chat, es.background, {
                  [ei.threadSidebarOpen]: p,
                  [ei.threadSidebarFloating]: p && g,
                }),
                children: [
                  (0, l.jsx)(eu, { guild: t, seenManagerRef: z }),
                  (0, l.jsxs)("div", {
                    ref: D,
                    className: ei.content,
                    children: [
                      (0, l.jsx)(d.ListNavigatorProvider, {
                        navigator: A,
                        children: (0, l.jsx)(d.ListNavigatorContainer, {
                          children: e => {
                            let { ref: a, ...n } = e;
                            return (0, l.jsxs)(u.AdvancedScrollerAuto, {
                              customTheme: !0,
                              onScroll: Y,
                              className: i(es.homeContainer, {
                                [es.homeContainerCollapsed]: b,
                              }),
                              ref: e => {
                                var t;
                                (T.current = e),
                                  (a.current =
                                    null !==
                                      (t =
                                        null == e
                                          ? void 0
                                          : e.getScrollerNode()) && void 0 !== t
                                      ? t
                                      : null);
                              },
                              ...n,
                              ...X,
                              children: [
                                O && (0, l.jsx)($.default, { guild: t }),
                                b ? Q : null,
                                (0, l.jsxs)("div", {
                                  className: es.homeContent,
                                  children: [
                                    q &&
                                      !t.hasFeature(
                                        et.GuildFeatures
                                          .GUILD_HOME_DEPRECATION_OVERRIDE
                                      ) &&
                                      (0, l.jsxs)("div", {
                                        className: es.deprecationNotice,
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className:
                                              es.deprecationNoticeContent,
                                            children: [
                                              (0, l.jsx)(u.Heading, {
                                                className: es.heading,
                                                variant: "heading-lg/semibold",
                                                color: "always-white",
                                                children:
                                                  en.default.Messages
                                                    .GUILD_HOME_DEPRECATION_TITLE,
                                              }),
                                              (0, l.jsx)(u.Text, {
                                                variant: "text-md/normal",
                                                color: "always-white",
                                                children:
                                                  en.default.Messages
                                                    .GUILD_HOME_DEPRECATION_DESCRIPTION,
                                              }),
                                            ],
                                          }),
                                          (0, l.jsx)("img", {
                                            width: 180,
                                            className: es.image,
                                            src: ed,
                                            alt: "",
                                            "aria-hidden": !0,
                                          }),
                                        ],
                                      }),
                                    (0, l.jsx)(u.HeadingLevel, {
                                      component: (0, l.jsxs)("div", {
                                        className: es.topMessagesHeader,
                                        children: [
                                          (0, l.jsx)(u.Heading, {
                                            variant: "heading-md/semibold",
                                            children:
                                              en.default.Messages
                                                .GUILD_FEED_TITLE,
                                          }),
                                          (0, l.jsx)(em, {
                                            renderMode: F,
                                            setRenderMode: R,
                                          }),
                                        ],
                                      }),
                                      children: (0, l.jsx)(J.default, {
                                        guild: t,
                                        renderMode: F,
                                        scrollerRef: T,
                                        seenManagerRef: z,
                                      }),
                                    }),
                                  ],
                                }),
                                b ? null : Q,
                              ],
                            });
                          },
                        }),
                      }),
                      S && null != E && (0, l.jsx)(j.default, { searchId: E }),
                    ],
                  }),
                ],
              }),
              N
                ? (0, l.jsx)(ec, {
                    pageWidth: a,
                    onSidebarResize: (e, t) => {
                      I(t), v(e);
                    },
                  })
                : null,
            ],
          });
        }),
        eE = (0, c.default)(N.default);
      var eg = function (e) {
        let { guildId: t } = e,
          a = (0, r.useStateFromStores)(
            [b.default],
            () => b.default.getGuild(t),
            [t]
          ),
          s = (0, Y.default)(),
          i = (0, r.useStateFromStores)(
            [R.default],
            () => R.default.hasLoadedExperiments
          ),
          d = (0, S.useCanSeeOnboardingHome)(t);
        return (n.useLayoutEffect(() => {
          (0, B.ensureGuildHomeSession)(t);
        }, [t]),
        n.useEffect(() => {
          if (!i) return;
          let e = W.default.getHomeSessionSource(t),
            a = (0, P.canSeeGuildHome)(t) || d;
          if (null != s) {
            let { channelId: t, messageId: l } = s;
            if (!a) {
              (0, A.transitionToMessage)(t, l);
              return;
            }
            e = el.GuildHomeLandingSource.HIGHLIGHTS;
          } else if (!a) {
            o.default.escapeToDefaultChannel(t);
            return;
          }
          (0, B.trackGuildHomeOpened)(t, e);
        }, [t, s, i, d]),
        null == a)
          ? (0, l.jsx)(g.default, { channelId: void 0 })
          : d
            ? (0, l.jsx)(eE, { guild: a })
            : (0, l.jsx)(eh, { guild: a });
      };
    },
    768945: function (e, t, a) {
      "use strict";
      function l(e) {
        var t, a;
        if (null == e) return null;
        if ((null === (t = e.content) || void 0 === t ? void 0 : t.length) > 0)
          return e.content;
        if ((null === (a = e.embeds) || void 0 === a ? void 0 : a.length) > 0) {
          for (let t of e.embeds)
            if (null != t.rawDescription && t.rawDescription.length > 0)
              return t.rawDescription;
        }
        return null;
      }
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        }),
        a("222007");
    },
    99384: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("65597"),
        n = a("42203"),
        s = a("698882");
      function i(e) {
        return (0, l.useStateFromStoresArray)([s.default, n.default], () => {
          let t = s.default.getResourceChannels(e);
          return t.filter(e => null != n.default.getChannel(e.channelId));
        });
      }
    },
    414033: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          MIN_GUILD_HOME_PAGE_WIDTH: function () {
            return o;
          },
          default: function () {
            return c;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("446674"),
        s = a("665182"),
        i = a("462998"),
        d = a("982108"),
        r = a("49111"),
        u = a("724210");
      let o = 656;
      function c(e) {
        let { pageWidth: t, onSidebarResize: a } = e,
          c = (0, n.useStateFromStores)([d.default], () =>
            d.default.getSidebarState(u.StaticChannelRoute.GUILD_HOME)
          );
        if (null == c || null == c.channelId) return null;
        let f = t - r.CHANNEL_SIDEBAR_WIDTH - o;
        return (0, l.jsx)(s.default, {
          sidebarType: s.ChatSidebarType.HomeSidebar,
          maxWidth: f,
          onWidthChange: a,
          children: (0, l.jsx)(i.default, {
            channelId: c.channelId,
            baseChannelId: u.StaticChannelRoute.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
          }),
        });
      }
    },
    957687: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("65597"),
        r = a("77078"),
        u = a("851387"),
        o = a("834897"),
        c = a("716241"),
        f = a("815619"),
        m = a("539938"),
        h = a("208021"),
        E = a("982108"),
        g = a("620193"),
        I = a("599110"),
        _ = a("347895"),
        x = a("698882"),
        v = a("675305"),
        C = a("363176"),
        S = a("414033"),
        N = a("831629"),
        p = a("749623"),
        T = a("112886"),
        A = a("768596"),
        j = a("49111"),
        M = a("724210"),
        D = a("515631"),
        F = a("782340"),
        L = a("332100"),
        R = a("250455");
      let b = S.MIN_GUILD_HOME_PAGE_WIDTH + 300 + 64,
        G = n.memo(function (e) {
          let { guild: t } = e;
          return (0, l.jsxs)(m.default, {
            channelId: M.StaticChannelRoute.GUILD_HOME,
            guildId: t.id,
            className: i(L.title, L.background),
            innerClassname: L.headerBarInner,
            children: [
              (0, l.jsx)(m.default.Icon, {
                icon: g.default,
                "aria-hidden": !0,
              }),
              (0, l.jsxs)(m.default.Title, {
                children: [
                  (0, l.jsx)(r.HiddenVisually, { children: t.name }),
                  F.default.Messages.SERVER_GUIDE,
                ],
              }),
            ],
          });
        });
      function y(e) {
        var t, a;
        let { guild: s, width: m } = e,
          g = (0, d.default)([E.default], () =>
            E.default.getSection(M.StaticChannelRoute.GUILD_HOME)
          ),
          [F, y] = n.useState(!1),
          [O, H] = n.useState(j.DEFAULT_CHAT_SIDEBAR_WIDTH),
          k = g === j.ChannelSections.SIDEBAR_CHAT,
          U = (0, r.useFocusJumpSection)(),
          w = (0, d.default)([x.default], () => x.default.getSettings(s.id)),
          B = null == w ? void 0 : w.welcomeMessage,
          P = (0, C.default)(s.id),
          V =
            !P &&
            (null !==
              (a =
                null == w
                  ? void 0
                  : null === (t = w.resourceChannels) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== a
              ? a
              : 0) === 0,
          W = (0, o.default)(D.COLLAPSED_SIZE_MEDIA_QUERY),
          K = m - j.CHANNEL_SIDEBAR_WIDTH - O,
          z = (k && K < b) || W || V;
        return (n.useEffect(() => {
          if (w === x.NO_SETTINGS) (0, _.fetchGuildHomeSettings)(s.id);
          else if (null != w) {
            var e, t, a, l, n;
            I.default.track(j.AnalyticEvents.SERVER_GUIDE_VIEWED, {
              ...(0, c.collectGuildAnalyticsMetadata)(s.id),
              num_member_actions:
                null !==
                  (a =
                    null === (e = w.newMemberActions) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== a
                  ? a
                  : 0,
              num_member_actions_completed: Object.keys(
                null !== (l = v.default.getCompletedActions(s.id)) &&
                  void 0 !== l
                  ? l
                  : {}
              ).length,
              num_resource_channels:
                null !==
                  (n =
                    null === (t = w.resourceChannels) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== n
                  ? n
                  : 0,
            });
          }
        }, [s.id, w]),
        n.useEffect(
          () => () => {
            h.default.closeChannelSidebar(M.StaticChannelRoute.GUILD_HOME);
          },
          []
        ),
        n.useEffect(() => {
          V && w !== x.NO_SETTINGS && u.default.escapeToDefaultChannel(s.id);
        }, [s.id, V, w]),
        V)
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  className: i(R.chat, L.background, {
                    [R.threadSidebarOpen]: k,
                    [R.threadSidebarFloating]: k && F,
                  }),
                  children: [
                    (0, l.jsx)(G, { guild: s }),
                    (0, l.jsx)(r.AdvancedScrollerAuto, {
                      ...U,
                      children: (0, l.jsxs)("div", {
                        className: i(L.homeContainer, {
                          [L.homeContainerCollapsed]: z,
                        }),
                        children: [
                          (0, l.jsx)("div", {
                            className: L.maxWidthWrapper,
                            children: (0, l.jsx)(f.default, {
                              guild: s,
                              titleClassName: W ? L.emptyHeaderTitle : void 0,
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: i(L.homeContent, L.maxWidthWrapper),
                            children: [
                              (0, l.jsxs)("div", {
                                className: L.mainContent,
                                children: [
                                  P &&
                                    (0, l.jsx)(A.default, {
                                      guildId: s.id,
                                      welcomeMessage: B,
                                    }),
                                  P && (0, l.jsx)(p.default, { guildId: s.id }),
                                  !P || z
                                    ? (0, l.jsx)(T.default, {
                                        guild: s,
                                        isNewMember: P,
                                      })
                                    : null,
                                ],
                              }),
                              z
                                ? null
                                : (0, l.jsx)(N.default, {
                                    guild: s,
                                    isNewMember: P,
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                k
                  ? (0, l.jsx)(S.default, {
                      pageWidth: m,
                      onSidebarResize: (e, t) => {
                        y(t), H(e);
                      },
                    })
                  : null,
              ],
            });
      }
    },
    831629: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        s = a("65597"),
        i = a("77078"),
        d = a("819689"),
        r = a("791234"),
        u = a("503021"),
        o = a("757414"),
        c = a("208021"),
        f = a("42203"),
        m = a("377253"),
        h = a("957255"),
        E = a("16865"),
        g = a("315102"),
        I = a("347895"),
        _ = a("99384"),
        x = a("49111"),
        v = a("782340"),
        C = a("332100");
      let S = n.memo(function (e) {
          let { guild: t } = e,
            a = (0, s.default)([o.default], () => o.default.getGuild(t.id), [
              t,
            ]);
          return (
            n.useEffect(() => {
              null == a && (0, u.fetchGuildForPopout)(t.id);
            }, [t.id, a]),
            (0, l.jsx)("div", {
              className: C.sidebarCardWrapper,
              children: (0, l.jsxs)("div", {
                className: C.sidebarCard,
                children: [
                  (0, l.jsx)(i.Heading, {
                    className: C.sidebarCardHeader,
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: v.default.Messages.GUILD_HOME_ABOUT,
                  }),
                  (0, l.jsx)(i.Text, {
                    className: C.guildDescription,
                    variant: "text-md/normal",
                    color: "text-normal",
                    children: t.description,
                  }),
                  (0, l.jsx)("div", {
                    className: C.guildInfo,
                    children:
                      (null == a ? void 0 : a.memberCount) != null &&
                      (null == a ? void 0 : a.presenceCount) != null &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("div", { className: C.dotOnline }),
                          (0, l.jsx)(i.Text, {
                            className: C.guildInfoText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children:
                              v.default.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format(
                                {
                                  online: null == a ? void 0 : a.presenceCount,
                                  total: null == a ? void 0 : a.memberCount,
                                }
                              ),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            })
          );
        }),
        N = e => {
          let { channelId: t, title: a, icon: u } = e,
            o = (0, s.default)([f.default], () => f.default.getChannel(t)),
            _ = (0, s.default)([m.default], () => m.default.getMessages(t)),
            v = (0, s.default)([h.default], () =>
              h.default.can(x.Permissions.VIEW_CHANNEL, o)
            ),
            S = _.first(),
            N = (0, r.useForumPostMediaProperties)(S, !1),
            p = (null == N ? void 0 : N.length) > 0 ? N[0] : null,
            T =
              null != o &&
              null == S &&
              !_.loadingMore &&
              !_.ready &&
              !_.hasFetched &&
              v;
          n.useEffect(() => {
            T && d.default.fetchMessages({ channelId: t, after: t, limit: 5 });
          }, [t, T]);
          let A = e => {
            null != o &&
              (e.shiftKey
                ? (0, I.selectHomeResourceChannel)(o.guild_id, o.id)
                : c.default.openResourceChannelAsSidebar({
                    guildId: o.guild_id,
                    channelId: o.id,
                  }));
          };
          return (0, l.jsx)(
            i.Clickable,
            {
              className: C.resourceChannel,
              onClick: e => A(e),
              children: (0, l.jsxs)(l.Fragment, {
                children: [
                  (() => {
                    let e = g.default.getResourceChannelIconURL({
                      channelId: t,
                      icon: u,
                    });
                    return null != u && null != e
                      ? (0, l.jsx)("img", {
                          src: e,
                          className: C.resourceImage,
                          alt: "",
                          "aria-hidden": !0,
                        })
                      : null != p
                        ? (0, l.jsx)("img", {
                            className: C.resourceImage,
                            src: p.src,
                            alt: p.alt,
                          })
                        : (0, l.jsx)("div", {
                            className: C.placeholderImage,
                            children: (0, l.jsx)(E.default, {}),
                          });
                  })(),
                  (0, l.jsx)(i.Text, {
                    className: C.guildInfoText,
                    variant: "text-sm/semibold",
                    color: "none",
                    children: a,
                  }),
                ],
              }),
            },
            t
          );
        },
        p = n.memo(function (e) {
          let { guild: t } = e,
            a = (0, _.default)(t.id);
          return 0 === a.length
            ? null
            : (0, l.jsx)("div", {
                className: C.sidebarCardWrapper,
                children: (0, l.jsxs)("div", {
                  className: C.sidebarCard,
                  children: [
                    (0, l.jsx)(i.Heading, {
                      className: C.sidebarCardHeader,
                      variant: "heading-md/bold",
                      color: "header-primary",
                      children: v.default.Messages.GUILD_HOME_RESOURCES,
                    }),
                    (0, l.jsx)("div", {
                      className: C.resourceChannelsList,
                      children: a.map(e =>
                        (0, l.jsx)(
                          N,
                          {
                            channelId: e.channelId,
                            title: e.title,
                            icon: e.icon,
                          },
                          "widget-resource-".concat(e.channelId)
                        )
                      ),
                    }),
                  ],
                }),
              });
        }),
        T = n.memo(function (e) {
          let { guild: t, isNewMember: a } = e;
          return (0, l.jsxs)("aside", {
            className: C.sidebar,
            children: [
              (0, l.jsx)(S, { guild: t }),
              a && (0, l.jsx)(p, { guild: t }),
            ],
          });
        });
      var A = T;
    },
    749623: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          NewMemberAction: function () {
            return j;
          },
          default: function () {
            return D;
          },
        }),
        a("702976");
      var l = a("37983"),
        n = a("884691"),
        s = a("446674"),
        i = a("77078"),
        d = a("679653"),
        r = a("419830"),
        u = a("42203"),
        o = a("26989"),
        c = a("305961"),
        f = a("957255"),
        m = a("593195"),
        h = a("578706"),
        E = a("904276"),
        g = a("641892"),
        I = a("315102"),
        _ = a("568734"),
        x = a("347895"),
        v = a("698882"),
        C = a("675305"),
        S = a("205454"),
        N = a("49111"),
        p = a("657944"),
        T = a("782340"),
        A = a("918648");
      function j(e) {
        let {
            title: t,
            emojiId: a,
            emojiName: n,
            icon: s,
            completed: d,
            Icon: r,
            ...u
          } = e,
          o = "channel" === u.variant ? u.channelId : null,
          c = "static" === u.variant ? u.subtitle : u.channelName,
          f =
            null != o
              ? I.default.getNewMemberActionIconURL({ channelId: o, icon: s })
              : null;
        return (0, l.jsxs)("div", {
          className: A.action,
          children: [
            null != f
              ? (0, l.jsx)("img", {
                  src: f,
                  className: A.icon,
                  width: 32,
                  height: 32,
                  alt: "",
                  "aria-hidden": !0,
                })
              : (0, l.jsx)(S.default, {
                  emojiId: a,
                  emojiName: n,
                  size: S.CTAEmojiSize.LARGE,
                  defaultComponent: (0, l.jsx)("div", {
                    className: A.channelIconContainer,
                    children: (0, l.jsx)(r, { className: A.channelIcon }),
                  }),
                }),
            (0, l.jsxs)("div", {
              className: A.actionInfo,
              children: [
                (0, l.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: t,
                }),
                null != c
                  ? (0, l.jsx)(i.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: c,
                    })
                  : null,
              ],
            }),
            d
              ? (0, l.jsx)(h.default, {
                  backgroundColor: "#fff",
                  className: A.checkCircleCompleted,
                  width: 24,
                  height: 24,
                })
              : (0, l.jsx)(E.default, {
                  className: A.checkCircle,
                  width: 24,
                  height: 24,
                }),
          ],
        });
      }
      function M(e) {
        var t;
        let { action: a, completed: o } = e,
          { channelId: c, title: h, emoji: E, icon: g } = a,
          { id: I, name: _ } = null != E ? E : {},
          v = (0, s.useStateFromStores)([u.default], () =>
            u.default.getChannel(c)
          ),
          C = (0, d.default)(v, !0),
          S = (0, s.useStateFromStores)([f.default], () =>
            f.default.can(N.Permissions.VIEW_CHANNEL, v)
          ),
          p = n.useCallback(() => {
            if (null == v) return null;
            (0, x.selectNewMemberActionChannel)(v.guild_id, v.id);
          }, [v]);
        if (null == v || !S) return null;
        let T =
          null !== (t = (0, r.getChannelIconComponent)(v)) && void 0 !== t
            ? t
            : m.default;
        return (0, l.jsx)(i.Clickable, {
          className: A.clickableAction,
          onClick: p,
          children: (0, l.jsx)(j, {
            variant: "channel",
            channelId: c,
            title: h,
            channelName: C,
            emojiId: I,
            emojiName: _,
            icon: g,
            completed: o,
            Icon: T,
          }),
        });
      }
      function D(e) {
        let { guildId: t } = e,
          a = (0, s.useStateFromStores)(
            [v.default],
            () => v.default.getNewMemberActions(t),
            [t]
          ),
          d = (0, s.useStateFromStores)([C.default], () =>
            C.default.getCompletedActions(t)
          ),
          r = (0, s.useStateFromStores)([o.default], () =>
            o.default.getSelfMember(t)
          ),
          u = (0, s.useStateFromStores)([c.default], () =>
            c.default.getGuild(t)
          );
        n.useEffect(() => {
          var e;
          null == d &&
            (null == r ? void 0 : r.flags) != null &&
            (0, _.hasFlag)(
              null !== (e = r.flags) && void 0 !== e ? e : 0,
              p.GuildMemberFlags.STARTED_HOME_ACTIONS
            ) &&
            (0, x.fetchNewMemberActions)(t);
        }, [d, t, null == r ? void 0 : r.flags]);
        let f = n.useCallback(() => {
          null != u &&
            null != u.rulesChannelId &&
            (0, x.selectNewMemberActionChannel)(u.id, u.rulesChannelId);
        }, [u]);
        return null == r || null == a || 0 === a.length
          ? null
          : (0, l.jsxs)("div", {
              className: A.container,
              children: [
                (0, l.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: T.default.Messages.GET_STARTED,
                }),
                a.map(e =>
                  (0, l.jsx)(
                    M,
                    {
                      action: e,
                      completed: (null == d ? void 0 : d[e.channelId]) === !0,
                      guildId: t,
                    },
                    e.channelId
                  )
                ),
                (null == u ? void 0 : u.rulesChannelId) != null &&
                  (0, l.jsxs)(i.Clickable, {
                    className: A.action,
                    onClick: f,
                    children: [
                      (0, l.jsx)("div", {
                        className: A.rulesIconContainer,
                        children: (0, l.jsx)(g.default, {
                          className: A.rulesIcon,
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: A.actionInfo,
                        children: (0, l.jsx)(i.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children:
                            T.default.Messages
                              .GUILD_SETTINGS_ONBOARDING_RULES_ACTION,
                        }),
                      }),
                    ],
                  }),
              ],
            });
      }
    },
    112886: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("446674"),
        r = a("77078"),
        u = a("819689"),
        o = a("791234"),
        c = a("512630"),
        f = a("367376"),
        m = a("651693"),
        h = a("605160"),
        E = a("933629"),
        g = a("393414"),
        I = a("208021"),
        _ = a("845579"),
        x = a("42203"),
        v = a("923959"),
        C = a("377253"),
        S = a("957255"),
        N = a("471671"),
        p = a("315102"),
        T = a("347895"),
        A = a("768945"),
        j = a("99384"),
        M = a("49111"),
        D = a("782340"),
        F = a("385454"),
        L = a("919163"),
        R = a("448738");
      function b(e) {
        let t,
          a,
          { firstMedia: n, channelId: s } = e,
          r = (0, d.useStateFromStores)([x.default], () =>
            x.default.getChannel(s)
          ),
          [u, o] = (0, h.useShouldObscure)({ media: n, channel: r }),
          f = (0, h.getObscuredAlt)(o),
          g = (0, d.useStateFromStores)([N.default], () =>
            N.default.isFocused()
          ),
          I = (0, m.isAnimatedImageUrl)(n.src),
          v = _.GifAutoPlay.useSetting(),
          { src: C, width: S, height: p, alt: T } = n;
        return (
          p > S ? (a = 72) : (t = 72),
          (0, l.jsxs)("div", {
            className: F.media,
            children: [
              (0, E.renderImageComponent)({
                src: C,
                maxHeight: t,
                maxWidth: a,
                width: S,
                height: p,
                alt: null != T && u && null != f ? f : T,
                autoPlay: v,
                animated: I && !u && g,
                containerClassName: F.thumbnailContainer,
                imageClassName: i({ [F.obscured]: u }),
              }),
              u &&
                (0, l.jsx)(c.default, {
                  obscureReason: o,
                  iconClassname: F.obscuredTag,
                }),
            ],
          })
        );
      }
      function G(e) {
        let { resource: t } = e,
          a = (0, d.useStateFromStores)([x.default], () =>
            x.default.getChannel(t.channelId)
          ),
          s = (0, d.useStateFromStores)([C.default], () =>
            C.default.getMessages(t.channelId)
          ),
          c = (0, d.useStateFromStores)([S.default], () =>
            S.default.can(M.Permissions.VIEW_CHANNEL, a)
          ),
          m = s.first(),
          h = (0, A.default)(m),
          E = (0, o.useForumPostMediaProperties)(m, !1),
          g = (null == E ? void 0 : E.length) > 0 ? E[0] : null,
          _ =
            null != a &&
            null == s.first() &&
            !s.loadingMore &&
            !s.ready &&
            !s.hasFetched &&
            c;
        n.useEffect(() => {
          _ &&
            u.default.fetchMessages({
              channelId: t.channelId,
              after: t.channelId,
              limit: 5,
            });
        }, [t.channelId, _]);
        if (null == a || null == a.guild_id) return null;
        let v = p.default.getResourceChannelIconURL({
            channelId: a.id,
            icon: t.icon,
          }),
          N = null == t.description || 0 === t.description.length;
        return (0, l.jsxs)(r.Clickable, {
          className: F.row,
          onClick: e => {
            null != a &&
              (e.shiftKey
                ? (0, T.selectHomeResourceChannel)(a.guild_id, a.id)
                : I.default.openResourceChannelAsSidebar({
                    guildId: a.guild_id,
                    channelId: a.id,
                  }));
          },
          children: [
            (0, l.jsxs)("div", {
              className: F.content,
              children: [
                (0, l.jsx)(r.Text, {
                  className: F.title,
                  variant: "text-md/bold",
                  color: "header-primary",
                  children: t.title,
                }),
                N &&
                  null != h &&
                  (0, l.jsx)(r.Text, {
                    className: F.messageContent,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    lineClamp: 3,
                    children: f.default.parse(h, !0, {
                      guildId: a.guild_id,
                      channelId: a.id,
                    }),
                  }),
                !N &&
                  (0, l.jsx)(r.Text, {
                    className: i(F.messageContent, L.markup),
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    lineClamp: 3,
                    children: f.default.parse(t.description, !0, {
                      guildId: a.guild_id,
                      channelId: a.id,
                    }),
                  }),
              ],
            }),
            null != t.icon && null != v
              ? (0, l.jsx)("div", {
                  className: F.media,
                  children: (0, l.jsx)("img", {
                    src: v,
                    className: F.thumbnail,
                    width: 72,
                    height: 72,
                    alt: "",
                    "aria-hidden": !0,
                  }),
                })
              : null,
            null == v && null != g
              ? (0, l.jsx)(b, { firstMedia: g, channelId: t.channelId })
              : null,
          ],
        });
      }
      function y(e) {
        let { guild: t, isNewMember: a } = e,
          n = (0, j.default)(t.id);
        if (0 === n.length)
          return a
            ? null
            : (0, l.jsxs)("div", {
                className: F.emptyContainer,
                children: [
                  (0, l.jsx)(r.Heading, {
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    children:
                      D.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE,
                  }),
                  (0, l.jsx)("img", {
                    className: F.emptyStateImage,
                    src: R,
                    alt: "",
                  }),
                  (0, l.jsx)(r.Button, {
                    className: F.emptyStateButton,
                    onClick: () => {
                      let e = v.default.getDefaultChannel(t.id);
                      null != e &&
                        (0, g.transitionTo)(M.Routes.CHANNEL(t.id, e.id));
                    },
                    fullWidth: !0,
                    children:
                      D.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA,
                  }),
                ],
              });
        return (0, l.jsxs)("div", {
          className: F.container,
          children: [
            (0, l.jsx)(r.Heading, {
              variant: "heading-lg/bold",
              color: "header-primary",
              children: D.default.Messages.GUILD_HOME_RESOURCES,
            }),
            n.map(e => (0, l.jsx)(G, { resource: e }, e.channelId)),
          ],
        });
      }
    },
    768596: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return T;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("414456"),
        i = a.n(s),
        d = a("509043"),
        r = a("65597"),
        u = a("77078"),
        o = a("851387"),
        c = a("841098"),
        f = a("206230"),
        m = a("388491"),
        h = a("506885"),
        E = a("217513"),
        g = a("528438"),
        I = a("430312"),
        _ = a("305961"),
        x = a("697218"),
        v = a("928201"),
        C = a("387111"),
        S = a("158998"),
        N = a("590456"),
        p = a("345696");
      function T(e) {
        var t;
        let { guildId: a, welcomeMessage: s, className: T } = e,
          A = (0, c.default)(),
          j = (0, r.default)([_.default], () => _.default.getGuild(a)),
          M = (0, r.default)(
            [f.default],
            () => f.default.syncProfileThemeWithUserTheme
          ),
          D = (0, r.default)([f.default], () => f.default.useReducedMotion),
          F = (0, r.default)([x.default], () =>
            x.default.getUser(null == s ? void 0 : s.authorIds[0])
          ),
          L = (0, r.default)([x.default], () => x.default.getCurrentUser()),
          R = (0, E.default)(null == F ? void 0 : F.id, a),
          [b] = (0, g.default)(F, R),
          G = M
            ? A
            : null !== (t = (0, m.getProfileTheme)(b)) && void 0 !== t
              ? t
              : A,
          y = (0, u.useToken)(u.tokens.colors.BACKGROUND_SECONDARY, G).hex(),
          O = n.useMemo(() => {
            var e;
            return null !== (e = null == s ? void 0 : s.authorIds) &&
              void 0 !== e
              ? e
              : [];
          }, [s]);
        n.useEffect(() => {
          o.default.requestMembersById(a, O);
        }, [a, O]),
          n.useEffect(() => {
            null != F &&
              (0, h.default)(F.id, F.getAvatarURL(a, 48), { guildId: a });
          }, [F, a]);
        let H = (0, S.useName)(L);
        if (null == F || null == L || null == s) return null;
        let k = null != j && j.ownerId === F.id;
        return (0, l.jsx)("div", {
          className: i(p.welcomeMessageContainer, T),
          children: (0, l.jsxs)(I.default, {
            className: p.welcomeMessageProfileContainer,
            user: F,
            guildId: a,
            profileType: N.UserProfileTypes.CARD,
            forceShowPremium: !0,
            useDefaultClientTheme: !0,
            children: [
              (0, l.jsx)("div", { className: p.avatarBackground }),
              D
                ? (0, l.jsx)(u.Avatar, {
                    src: F.getAvatarURL(a, 48),
                    size: u.AvatarSizes.SIZE_48,
                    className: p.avatar,
                    "aria-label": F.username,
                  })
                : (0, l.jsx)(u.AnimatedAvatar, {
                    src: F.getAvatarURL(a, 48),
                    size: u.AvatarSizes.SIZE_48,
                    className: p.avatar,
                    "aria-label": F.username,
                  }),
              (0, l.jsx)("div", {
                className: p.avatarBorder,
                style: {
                  backgroundColor: null != b ? (0, d.int2rgba)(b, 1) : y,
                },
              }),
              (0, l.jsxs)("div", {
                className: p.welcomeMessageContent,
                children: [
                  (0, l.jsxs)("div", {
                    className: p.adminUsernameContainer,
                    children: [
                      (0, l.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        children: C.default.getName(a, null, F),
                      }),
                      k
                        ? (0, l.jsx)(v.default, { className: p.ownerIcon })
                        : null,
                    ],
                  }),
                  (0, l.jsx)(u.Text, {
                    variant: "text-md/medium",
                    children: (function (e, t) {
                      let a = e.split(/\[@username\]/g);
                      return (0, l.jsx)("span", {
                        children: a.map((e, n) =>
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              e,
                              n < a.length - 1
                                ? (0, l.jsx)(u.Text, {
                                    tag: "span",
                                    variant: "text-md/semibold",
                                    children: "@".concat(t),
                                  })
                                : null,
                            ],
                          })
                        ),
                      });
                    })(
                      null == s ? void 0 : s.message,
                      null != H ? H : L.username
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    628059: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          guildEventDetailsParser: function () {
            return n;
          },
        });
      var l = a("367376");
      let n = l.default.parseGuildEventDescription;
    },
    90713: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        s = a("77078"),
        i = a("379607"),
        d = a("290581"),
        r = a("664336"),
        u = a("782340"),
        o = function (e) {
          let { guildId: t } = e,
            [a, o] = n.useState(!1),
            c = n.useCallback(() => {
              o(e => !e);
            }, []);
          return (0, l.jsx)(s.Popout, {
            shouldShow: a,
            animation: s.Popout.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => o(!1),
            renderPopout: function (e) {
              return (0, l.jsx)(i.default, { guildId: t, ...e });
            },
            children: (e, t) => {
              let { isShown: a } = t;
              return (0, l.jsx)(r.Icon, {
                ...e,
                onClick: c,
                tooltip: a
                  ? null
                  : u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
                icon: d.default,
                "aria-label": u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
                selected: a,
              });
            },
          });
        };
    },
    730106: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("75196");
      function s(e) {
        let {
          width: t = 16,
          height: a = 16,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, n.default)(i),
          width: t,
          height: a,
          viewBox: "0 0 16 16",
          children: [
            (0, l.jsx)("circle", {
              cx: "8",
              cy: "8",
              r: "5.5",
              transform: "rotate(180 8 8)",
              stroke: "#A3A6AA",
            }),
            (0, l.jsx)("path", {
              d: "M13.197 5.00035C12.6704 4.08824 11.913 3.33081 11.0008 2.8042C10.0887 2.27759 9.05406 2.00035 8.00084 2.00035L8.00084 8.00035L13.197 5.00035Z",
              fill: s,
            }),
          ],
        });
      }
    },
    215361: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("75196");
      function s(e) {
        let {
          width: t = 16,
          height: a = 16,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, n.default)(i),
          width: t,
          height: a,
          viewBox: "0 0 16 16",
          children: [
            (0, l.jsx)("circle", {
              cx: "8.19531",
              cy: "8.19629",
              r: "5.5",
              transform: "rotate(180 8.19531 8.19629)",
              stroke: "#A3A6AA",
            }),
            (0, l.jsx)("path", {
              d: "M3.00027 11.1964C3.52688 12.1085 4.28431 12.866 5.19643 13.3926C6.10854 13.9192 7.14321 14.1964 8.19643 14.1964C9.24965 14.1964 10.2843 13.9192 11.1964 13.3926C12.1085 12.866 12.866 12.1085 13.3926 11.1964C13.9192 10.2843 14.1964 9.24965 14.1964 8.19643C14.1964 7.14321 13.9192 6.10854 13.3926 5.19643C12.866 4.28431 12.1085 3.52688 11.1964 3.00027C10.2843 2.47366 9.24964 2.19643 8.19642 2.19643L8.19643 8.19643L3.00027 11.1964Z",
              fill: s,
            }),
          ],
        });
      }
    },
    345318: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("75196");
      function s(e) {
        let {
          width: t = 16,
          height: a = 16,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, n.default)(i),
          width: t,
          height: a,
          viewBox: "0 0 16 16",
          children: [
            (0, l.jsx)("circle", {
              cx: "8.19531",
              cy: "8.19629",
              r: "5.5",
              transform: "rotate(180 8.19531 8.19629)",
              stroke: "#A3A6AA",
            }),
            (0, l.jsx)("path", {
              d: "M8.19727 14.1963C9.78856 14.1963 11.3147 13.5641 12.4399 12.4389C13.5651 11.3137 14.1973 9.78759 14.1973 8.19629C14.1973 6.60499 13.5651 5.07887 12.4399 3.95365C11.3147 2.82843 9.78857 2.19629 8.19727 2.19629L8.19727 8.19629L8.19727 14.1963Z",
              fill: s,
            }),
          ],
        });
      }
    },
    818643: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        s = a("851298"),
        i = a("75196"),
        d = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: n = "currentColor",
              ...s
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                  fill: n,
                }),
                (0, l.jsx)("path", {
                  d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                  fill: n,
                }),
              ],
            });
          },
          s.ImagePlusIcon,
          void 0,
          { size: 24 }
        );
    },
    16865: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        s = a("605141"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: a = 16,
              color: n = "currentColor",
              className: s,
              foreground: i,
            } = e;
            return (0, l.jsx)("svg", {
              className: s,
              width: t,
              height: a,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, l.jsx)("path", {
                className: i,
                fill: n,
                d: "M3.99984 1.33301C3.64622 1.33301 3.30708 1.47348 3.05703 1.72353C2.80698 1.97358 2.6665 2.31272 2.6665 2.66634V13.333C2.6665 13.6866 2.80698 14.0258 3.05703 14.2758C3.30708 14.5259 3.64622 14.6663 3.99984 14.6663H11.9998C12.3535 14.6663 12.6926 14.5259 12.9426 14.2758C13.1927 14.0258 13.3332 13.6866 13.3332 13.333V5.33301L9.33317 1.33301H3.99984ZM3.99984 2.66634H8.6665V5.99967H11.9998V13.333H3.99984V2.66634ZM5.33317 7.99967V9.33301H10.6665V7.99967H5.33317ZM5.33317 10.6663V11.9997H8.6665V10.6663H5.33317Z",
              }),
            });
          },
          s.PaperIcon,
          void 0,
          { size: 16 }
        );
    },
    641892: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("469563"),
        s = a("797350"),
        i = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: a = 16,
              color: n = "currentColor",
              className: s,
              foreground: i,
            } = e;
            return (0, l.jsx)("svg", {
              className: s,
              width: t,
              height: a,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, l.jsx)("path", {
                className: i,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.5 17.2916V3.74996H17.5V18.3333H4.5C3.3955 18.3333 2.5 17.4005 2.5 16.25V3.74996C2.5 2.59944 3.3955 1.66663 4.5 1.66663H15.5V15.2083H4.5C3.94775 15.2083 3.5 15.6742 3.5 16.25C3.5 16.8257 3.94775 17.2916 4.5 17.2916H16.5ZM11.9859 4.99996L7.94446 8.9957L6.35432 7.42204L5 8.75288L7.94427 11.6666L13.3333 6.33344L11.9859 4.99996Z",
              }),
            });
          },
          s.BookCheckIcon,
          void 0,
          { size: 16 }
        );
    },
    41688: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          PaperIcon: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("669491"),
        s = a("82169");
      let i = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: i = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
            clipRule: "evenodd",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=94b5e8a3685086ad8916.js.map

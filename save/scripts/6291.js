(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6291"],
  {
    158574: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var a = l("866227"),
        n = l.n(a),
        i = l("851387"),
        u = {
          async setCommunicationDisabledDuration(e, t, l, a, u) {
            let d = null != l ? n().add(l, "s").toISOString() : null;
            await i.default.setCommunicationDisabledUntil({
              guildId: e,
              userId: t,
              communicationDisabledUntilTimestamp: d,
              duration: l,
              reason: a,
              location: u,
            });
          },
        };
    },
    230947: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        });
      var a = l("37983"),
        n = l("884691"),
        i = l("446674"),
        u = l("77078"),
        d = l("750560"),
        s = l("38766"),
        r = l("506885"),
        o = l("271938"),
        c = l("26989"),
        f = l("305961"),
        E = l("957255"),
        M = l("697218"),
        S = l("49111"),
        m = l("782340"),
        I = l("576398");
      function g(e) {
        let {
            guildId: t,
            userId: g,
            analyticsLocation: _,
            analyticsLocations: h,
            context: A,
            icon: C,
          } = e,
          p = f.default.getGuild(t),
          N = o.default.getId(),
          T = (0, i.useStateFromStores)([M.default], () =>
            M.default.getUser(g)
          ),
          R = (0, i.useStateFromStores)(
            [c.default],
            () => c.default.isGuestOrLurker(t, g),
            [t, g]
          );
        (0, i.useStateFromStores)(
          [E.default],
          () => E.default.getGuildVersion(t),
          [t]
        );
        let O = n.useMemo(() => ({ [t]: [g] }), [t, g]);
        (0, d.useSubscribeGuildMembers)(O);
        let b = A === S.AppContext.POPOUT,
          L = (0, s.default)({ guild: p, analyticsLocation: _ });
        if (null == p || b) return null;
        let v =
            N === g &&
            (E.default.can(S.Permissions.CHANGE_NICKNAME, p) ||
              E.default.can(S.Permissions.MANAGE_NICKNAMES, p)),
          D = N === g,
          y = E.default.canManageUser(S.Permissions.MANAGE_NICKNAMES, g, p);
        if (!(v || y || D) || null == T || R) return null;
        let G = p.hasFeature(S.GuildFeatures.HUB),
          P = G
            ? m.default.Messages.HUB_EDIT_PROFILE
            : m.default.Messages.CHANGE_IDENTITY,
          U = D ? P : m.default.Messages.CHANGE_NICKNAME;
        return (0, a.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, a.jsx)("div", {
            className: I.labelWrapper,
            children: (0, a.jsx)("span", { className: I.label, children: U }),
          }),
          icon: C,
          action: () => {
            D
              ? ((0, r.default)(T.id, T.getAvatarURL(t, 80), { guildId: t }),
                L())
              : (0, u.openModalLazy)(async () => {
                  let { default: e } = await l
                    .el("59709")
                    .then(l.bind(l, "59709"));
                  return l =>
                    (0, a.jsx)(e, {
                      ...l,
                      guildId: t,
                      user: T,
                      analyticsSource: _,
                      analyticsLocations: h,
                    });
                });
          },
        });
      }
    },
    278483: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          openDisableCommunication: function () {
            return i;
          },
          openEnableCommunication: function () {
            return u;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("77078");
      function i(e, t, i) {
        (0, n.openModalLazy)(async () => {
          let { default: n } = await l.el("693120").then(l.bind(l, "693120"));
          return l =>
            (0, a.jsx)(n, {
              guildId: e,
              userId: t,
              anaylticsLocations: i,
              ...l,
            });
        });
      }
      function u(e, t, i) {
        (0, n.openModalLazy)(async () => {
          let { default: n } = await l.el("750331").then(l.bind(l, "750331"));
          return l =>
            (0, a.jsx)(n, {
              guildId: e,
              userId: t,
              anaylticsLocations: i,
              ...l,
            });
        });
      }
    },
    994906: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          openGuildMemberModViewSidebar: function () {
            return r;
          },
        });
      var a = l("812204"),
        n = l("208021"),
        i = l("582713"),
        u = l("383606"),
        d = l("459824"),
        s = l("789150");
      function r(e, t, l) {
        var r, o, c;
        let f =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { modViewPanel: s.ModViewPanel.INFO };
        if (!(0, d.canAccessGuildMemberModViewWithExperiment)(e))
          return Promise.resolve();
        let E =
            null !== (r = f.modViewPanel) && void 0 !== r
              ? r
              : s.ModViewPanel.INFO,
          M =
            null !== (o = f.sourceLocation) && void 0 !== o
              ? o
              : a.default.MEMBER_SAFETY_PAGE;
        return (
          (0, u.trackModViewOpened)(e, t, E, M),
          n.default.openGuildSidebar({
            guildId: e,
            baseChannelId: l,
            sidebarType: i.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
            details: {
              type: i.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
              userId: t,
              guildId: e,
              ...f,
              modViewPanel:
                null !== (c = f.modViewPanel) && void 0 !== c
                  ? c
                  : s.ModViewPanel.INFO,
            },
          })
        );
      }
    },
    383606: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          trackModViewOpened: function () {
            return s;
          },
        }),
        l("884691");
      var a = l("812204"),
        n = l("716241"),
        i = l("599110"),
        u = l("789150"),
        d = l("49111");
      function s(e, t, l) {
        let s =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : a.default.MEMBER_SAFETY_PAGE,
          r = {
            guild_id: e,
            target_user_id: t,
            subpanel_name: u.ModViewPanelNameMap[l],
            location: s,
            ...(0, n.collectGuildAnalyticsMetadata)(e),
          };
        return i.default.track(d.AnalyticEvents.GUILD_MOD_VIEW_OPENED, r);
      }
    },
    789150: function (e, t, l) {
      "use strict";
      var a, n;
      l.r(t),
        l.d(t, {
          ModViewPanel: function () {
            return a;
          },
          ModViewPanelNameMap: function () {
            return i;
          },
        }),
        ((n = a || (a = {}))[(n.UNKNOWN = 0)] = "UNKNOWN"),
        (n[(n.INFO = 1)] = "INFO"),
        (n[(n.MESSAGE_HISTORY = 2)] = "MESSAGE_HISTORY"),
        (n[(n.PERMISSIONS = 3)] = "PERMISSIONS");
      let i = {
        0: "UNKNOWN",
        1: "INFO",
        2: "MESSAGE_HISTORY",
        3: "PERMISSIONS",
      };
    },
    341329: function (e, t, l) {
      "use strict";
      let a;
      l.r(t),
        l.d(t, {
          default: function () {
            return X;
          },
        }),
        l("222007");
      var n = l("803182"),
        i = l("811022"),
        u = l("95410"),
        d = l("913144"),
        s = l("404118"),
        r = l("819689"),
        o = l("115718"),
        c = l("689988"),
        f = l("408062"),
        E = l("619443"),
        M = l("582713"),
        S = l("233069"),
        m = l("982108"),
        I = l("42203"),
        g = l("305961"),
        _ = l("660478"),
        h = l("18494"),
        A = l("162771"),
        C = l("718517"),
        p = l("519841"),
        N = l("787336"),
        T = l("49111"),
        R = l("724210"),
        O = l("782340");
      let b = new i.default("MessageManager");
      function L(e) {
        let {
          guildId: t,
          channelId: l,
          messageId: n,
          forceFetch: i,
          isPreload: d,
          jumpType: s,
          skipLocalFetch: c,
          logFailures: M,
        } = e;
        if (null == l) {
          M && b.log("Skipping fetch because channelId is null");
          return;
        }
        if ((0, R.isStaticChannelRoute)(l)) {
          M && b.log("Skipping fetch because channelId is a static route");
          return;
        }
        let S = I.default.getChannel(l);
        if (
          (null == S ? void 0 : S.type) === T.ChannelTypes.GUILD_STORE ||
          ((null == S ? void 0 : S.type) != null &&
            T.ChannelTypesSets.GUILD_THREADS_ONLY.has(S.type))
        ) {
          M && b.log("Skipping fetch because channel is a forum/store");
          return;
        }
        let m = f.default.getOrCreate(l);
        p.AttachmentLinkRefreshExperiment.getCurrentConfig({
          location: "fetch_messages",
        }).enabled &&
          m.some(N.messageHasExpiredAttachmentUrl) &&
          (b.log("Found expired attachment link, clearing messages"),
          f.default.clear(l),
          (m = f.default.getOrCreate(l))),
          null != m.jumpTargetId &&
            null == n &&
            ((m = m.mutate({
              jumpTargetId: null,
              jumped: !1,
              jumpType: o.JumpTypes.ANIMATED,
            })),
            f.default.commit(m)),
          null != m.focusTargetId &&
            null == n &&
            ((m = m.mutate({ focusTargetId: null })), f.default.commit(m));
        let h = i;
        if (
          (!d || E.default.isConnected() || m.loadingMore
            ? m.loadingMore || (m.ready && !m.cached)
              ? null != n
                ? (h = !0)
                : M &&
                  b.log("Skipping fetch because no other conditions matched")
              : null == t || null != g.default.getGuild(t)
                ? (h = !0)
                : M &&
                  b.log(
                    "Skipping fetch we are connected and have loaded messages"
                  )
            : (h = !0),
          h)
        ) {
          if ((f.default.commit(m.mutate({ loadingMore: !0 })), null != n))
            r.default.jumpToMessage({
              channelId: l,
              messageId: n,
              flash: !0,
              isPreload: d,
              skipLocalFetch: c,
              jumpType: s,
            });
          else if (
            (null == S ? void 0 : S.isThread()) &&
            (function (e) {
              if (_.default.hasOpenedThread(e)) return !1;
              if (null == a) {
                var t;
                a =
                  null !== (t = u.default.get(D, {})) && void 0 !== t ? t : {};
              }
              if (e in a) return !1;
              a[e] = Date.now();
              let l = Date.now() - v;
              for (let e in a) a[e] < l && delete a[e];
              return u.default.set(D, a), !0;
            })(l)
          )
            b.log("Jumping to start of thread ".concat(S.id)),
              r.default.fetchMessages({
                channelId: l,
                limit: T.MAX_MESSAGES_PER_CHANNEL,
                jump: { messageId: l, flash: !1 },
                isPreload: d,
                skipLocalFetch: c,
              });
          else if (
            (null == S ? void 0 : S.isThread()) &&
            _.default.hasTrackedUnread(S.id) &&
            !m.ready
          ) {
            let e = _.default.getTrackedAckMessageId(S.id);
            b.log(
              "Jumping to most recent message in thread "
                .concat(S.id, " - ")
                .concat(e)
            ),
              r.default.fetchMessages({
                channelId: l,
                limit: T.MAX_MESSAGES_PER_CHANNEL,
                jump: { messageId: e, flash: !1, offset: 1 },
                isPreload: d,
                skipLocalFetch: c,
              });
          } else
            r.default.fetchMessages({
              channelId: l,
              limit: T.MAX_MESSAGES_PER_CHANNEL,
              isPreload: d,
              skipLocalFetch: c,
              jump: { jumpType: o.JumpTypes.ANIMATED },
            });
        }
      }
      let v = 90 * C.default.Millis.DAY,
        D = "viewedThreadIds";
      function y() {
        let e = h.default.getChannelId();
        if (null != e) {
          let l = I.default.getChannel(e);
          if (null != l) {
            var t;
            let e = (0, n.matchPath)(location.pathname, {
              path: T.Routes.CHANNEL(":guild", ":channel", ":message"),
              exact: !0,
            });
            L({
              guildId: l.getGuildId(),
              channelId: l.id,
              messageId:
                null == e
                  ? void 0
                  : null === (t = e.params) || void 0 === t
                    ? void 0
                    : t.message,
            }),
              F(l.getGuildId(), l.id);
          }
        }
      }
      function G() {
        let {
            isPreload: e,
            skipLocalFetch: t,
            logFailures: l,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          a = h.default.getChannelId();
        if (null != a) {
          let n = I.default.getChannel(a);
          null != n
            ? ((0, S.isTextChannel)(n.type)
                ? L({
                    guildId: n.getGuildId(),
                    channelId: n.id,
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: l,
                  })
                : l &&
                  b.log(
                    "Skipping fetch because the selected channel is not a text channel"
                  ),
              F(n.getGuildId(), n.id))
            : l && b.log("Skipping fetch because channel is null");
        } else
          l && b.log("Skipping fetch because there is no selected channel");
      }
      function P(e) {
        let { guildId: t, channelId: l, messageId: a, jumpType: n } = e;
        L({ guildId: t, channelId: l, messageId: a, jumpType: n }), F(t, l);
      }
      function U(e) {
        let { guildId: t, channelId: l } = e;
        L({ guildId: t, channelId: l });
      }
      function F(e, t) {
        let l = m.default.getCurrentSidebarChannelId(t);
        if (null == l) return;
        let a = m.default.getCurrentSidebarMessageId(t);
        L({ guildId: e, channelId: l, messageId: a });
      }
      function V() {
        let e = h.default.getChannelId(),
          t = A.default.getGuildId();
        if (null == t || null == e) return;
        let l = m.default.getSidebarState(e);
        (null == l ? void 0 : l.type) !== M.SidebarType.VIEW_CHANNEL && F(t, e);
      }
      function x(e) {
        let { guildId: t, channelId: l, context: a } = e;
        a === T.CURRENT_APP_CONTEXT &&
          (L({ guildId: t, channelId: l }), F(t, l));
      }
      function j(e) {
        let { channel: t, messageId: l } = e,
          a = t.guild_id;
        null != a &&
          h.default.getChannelId(a) === t.id &&
          L({ guildId: a, channelId: t.id, messageId: l });
      }
      function w(e) {
        let { channelId: t } = e;
        r.default.fetchMessages({
          channelId: t,
          limit: T.MAX_MESSAGES_PER_CHANNEL,
        });
      }
      function H(e) {
        let { response: t } = e;
        if (null == t || null == t.body) return null;
        if (t.body.code === T.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
          let e = t.body.retry_after;
          null != e &&
            s.default.show({
              title: O.default.Messages.RATE_LIMITED,
              body: O.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                retryAfterMinutes: Math.ceil(e / 60),
              }),
            });
        }
      }
      let k = {};
      function B(e) {
        var t;
        let { channelId: l, jump: a, isStale: n, isPreview: i = !1 } = e;
        if (i) return;
        let u = null !== (t = k[l]) && void 0 !== t ? t : 0;
        if (Date.now() - u < 10 * C.default.Millis.SECOND) return;
        k[l] = Date.now();
        let d = h.default.getChannelId(),
          s = m.default.getCurrentSidebarChannelId(d),
          o = l === d || l === s;
        n &&
          E.default.isConnected() &&
          o &&
          r.default.fetchMessages({
            channelId: l,
            limit: T.MAX_MESSAGES_PER_CHANNEL,
            jump: a,
          });
      }
      function W(e) {
        let { channelId: t, messageRecord: l } = e;
        null != l &&
          d.default.dispatch({
            type: "MESSAGE_SEND_FAILED",
            channelId: t,
            messageId: l.id,
          });
      }
      function Y(e) {
        let { state: t } = e;
        if ("active" !== t) return !1;
        let l = h.default.getChannelId();
        if (null == l) return !1;
        r.default.fetchNewLocalMessages(l, T.MAX_MESSAGES_PER_CHANNEL);
      }
      class K extends c.default {
        _initialize() {
          d.default.subscribe("CONNECTION_OPEN", y);
        }
        _terminate() {
          d.default.unsubscribe("CONNECTION_OPEN", y);
        }
        constructor(...e) {
          super(...e),
            (this.fetchMessages = L),
            (this.loadSelectedChannelIfNecessary = G),
            (this.stores = new Map().set(m.default, V)),
            (this.actions = {
              APP_STATE_UPDATE: Y,
              OVERLAY_INITIALIZE: y,
              CHANNEL_SELECT: P,
              VOICE_CHANNEL_SELECT: U,
              THREAD_CREATE: j,
              THREAD_LIST_SYNC: () => G(),
              CHANNEL_CREATE: j,
              CHANNEL_PRELOAD: x,
              THREAD_CREATE_LOCAL: w,
              GUILD_CREATE: () => G(),
              MESSAGE_END_EDIT: H,
              LOAD_MESSAGES_SUCCESS: B,
              UPLOAD_FAIL: W,
              CHANNEL_DELETE: () => G(),
              THREAD_DELETE: () => G(),
            });
        }
      }
      var X = new K();
    },
    208021: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var a = l("913144"),
        n = l("819689"),
        i = l("115718"),
        u = l("347895"),
        d = l("341329"),
        s = l("582713"),
        r = l("724210"),
        o = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: l,
              baseChannelId: i,
              hasSingleMessageRequest: u,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: i,
              channelId: t,
              details: {
                type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: u,
              },
            }),
              null != l
                ? n.default.jumpToMessage({
                    channelId: t,
                    messageId: l,
                    flash: !0,
                  })
                : d.default.fetchMessages({ channelId: t });
          },
          openChannelAsSidebar(e) {
            let {
              guildId: t,
              channelId: l,
              baseChannelId: u,
              flash: r = !0,
              details: o,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: u,
              channelId: l,
              details: o,
            });
            let c = null == o ? void 0 : o.initialMessageId;
            null != c
              ? n.default.jumpToMessage({
                  channelId: l,
                  messageId: c,
                  flash: r,
                  jumpType: i.JumpTypes.INSTANT,
                })
              : d.default.fetchMessages({ guildId: t, channelId: l });
          },
          openResourceChannelAsSidebar(e) {
            let { guildId: t, channelId: l } = e;
            null != t &&
              ((0, u.selectHomeResourceChannel)(t, l, !1),
              a.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: s.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: r.StaticChannelRoute.GUILD_HOME,
                channelId: l,
              }));
          },
          openThreadAsSidebar(e) {
            let {
              guildId: t,
              baseChannelId: l,
              channelId: u,
              flash: r = !0,
              details: o,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_THREAD,
              baseChannelId: l,
              channelId: u,
              details: o,
            }),
              (null == o ? void 0 : o.initialMessageId) != null
                ? n.default.jumpToMessage({
                    channelId: u,
                    messageId: o.initialMessageId,
                    flash: r,
                    jumpType: i.JumpTypes.INSTANT,
                  })
                : d.default.fetchMessages({ guildId: t, channelId: u });
          },
          closeChannelSidebar(e) {
            a.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: l,
              sidebarType: n,
              details: i,
            } = e;
            return a.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: n,
              baseChannelId: l,
              guildId: t,
              details: i,
            });
          },
          closeGuildSidebar(e) {
            a.default.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
          },
        };
    },
    300925: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return O;
          },
        }),
        l("222007"),
        l("702976");
      var a = l("37983"),
        n = l("884691"),
        i = l("446674"),
        u = l("77078"),
        d = l("158574"),
        s = l("851387"),
        r = l("750560"),
        o = l("278483"),
        c = l("700179"),
        f = l("406043"),
        E = l("130037"),
        M = l("42203"),
        S = l("26989"),
        m = l("305961"),
        I = l("957255"),
        g = l("697218"),
        _ = l("800762"),
        h = l("568734"),
        A = l("387111"),
        C = l("359433"),
        p = l("49111"),
        N = l("903639"),
        T = l("657944"),
        R = l("782340");
      function O(e, t, O, b) {
        let L = n.useMemo(() => ({ [t]: [e.id] }), [t, e.id]),
          v = null != b ? [b] : [];
        (0, r.useSubscribeGuildMembers)(L),
          (0, i.useStateFromStores)(
            [I.default],
            () => I.default.getGuildVersion(t),
            [t]
          );
        let D = (0, i.useStateFromStores)(
            [m.default],
            () => m.default.getGuild(t),
            [t]
          ),
          y = (0, i.useStateFromStores)(
            [g.default],
            () => {
              var t;
              return (
                (null === (t = g.default.getCurrentUser()) || void 0 === t
                  ? void 0
                  : t.id) === e.id
              );
            },
            [e.id]
          ),
          G = (0, i.useStateFromStores)(
            [S.default],
            () => S.default.isGuestOrLurker(t, e.id),
            [t, e.id]
          ),
          P = (0, i.useStateFromStores)(
            [M.default],
            () => M.default.getChannel(O),
            [O]
          ),
          [, U] = (0, f.default)(e.id, t),
          F = null == P ? void 0 : P.isGuildStageVoice(),
          {
            muted: V,
            deafened: x,
            suppressed: j,
            voiceChannelId: w,
          } = (0, i.useStateFromStoresObject)([_.default], () => {
            var l, a, n;
            let i = _.default.getVoiceState(t, e.id);
            return {
              muted:
                null !== (l = null == i ? void 0 : i.mute) && void 0 !== l && l,
              deafened:
                null !== (a = null == i ? void 0 : i.deaf) && void 0 !== a && a,
              suppressed:
                null !== (n = null == i ? void 0 : i.suppress) &&
                void 0 !== n &&
                n,
              voiceChannelId: null == i ? void 0 : i.channelId,
            };
          }),
          H = (0, i.useStateFromStores)([S.default], () =>
            S.default.getMember(t, e.id)
          ),
          k = (0, C.default)(e.id, t, O, b),
          B = (0, E.useTrackModerationAction)(t, {
            location: b,
            targetUserId: e.id,
          }),
          W = (0, c.default)(t, e.id),
          Y =
            null != w &&
            null != O &&
            I.default.canWithPartialContext(p.Permissions.VIEW_CHANNEL, {
              channelId: w,
            }) &&
            !G
              ? [
                  (!F || (F && !j)) &&
                  I.default.canWithPartialContext(p.Permissions.MUTE_MEMBERS, {
                    channelId: O,
                  })
                    ? (0, a.jsx)(
                        u.MenuCheckboxItem,
                        {
                          id: "voice-mute",
                          label: R.default.Messages.SERVER_VOICE_MUTE,
                          checked: V,
                          color: "danger",
                          action: () => {
                            !1 === V && B(E.ModerationActionType.MUTE),
                              s.default.setServerMute(t, e.id, !V);
                          },
                        },
                        "voice-mute"
                      )
                    : null,
                  (!F || (F && !j)) &&
                  I.default.canWithPartialContext(
                    p.Permissions.DEAFEN_MEMBERS,
                    { channelId: O }
                  )
                    ? (0, a.jsx)(
                        u.MenuCheckboxItem,
                        {
                          id: "voice-deafen",
                          label: R.default.Messages.SERVER_DEAFEN,
                          checked: x,
                          color: "danger",
                          action: () => s.default.setServerDeaf(t, e.id, !x),
                        },
                        "voice-deafen"
                      )
                    : null,
                  !y &&
                  null != D &&
                  I.default.canWithPartialContext(p.Permissions.MOVE_MEMBERS, {
                    channelId: O,
                  })
                    ? (0, a.jsx)(
                        u.MenuItem,
                        {
                          id: "voice-disconnect",
                          label: y
                            ? R.default.Messages.DISCONNECT_SELF
                            : R.default.Messages.DISCONNECT_OTHER,
                          color: "danger",
                          action: () => s.default.setChannel(t, e.id, null),
                        },
                        "voice-disconnect"
                      )
                    : null,
                ]
              : [],
          K = async (t, l, a) => {
            if (t.ctrlKey || t.metaKey)
              try {
                var n;
                await d.default.setCommunicationDisabledDuration(
                  l,
                  a,
                  N.DisableCommunicationDuration.DURATION_60_SEC,
                  null,
                  b
                ),
                  B(E.ModerationActionType.TIMEOUT),
                  (0, u.showToast)(
                    (0, u.createToast)(
                      R.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format(
                        {
                          user:
                            null !== (n = A.default.getName(l, null, e)) &&
                            void 0 !== n
                              ? n
                              : "",
                        }
                      ),
                      u.ToastType.SUCCESS
                    )
                  );
              } catch (e) {
                (0, u.showToast)(
                  (0, u.createToast)(
                    R.default.Messages
                      .APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR,
                    u.ToastType.FAILURE
                  )
                );
              }
          },
          X = null;
        if (
          !y &&
          null != D &&
          null != H &&
          null != H.joinedAt &&
          (I.default.canManageUser(p.Permissions.MODERATE_MEMBERS, e, D) ||
            I.default.canManageUser(p.Permissions.MANAGE_ROLES, e, D)) &&
          D.hasFeature(p.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
        ) {
          var z;
          X = (0, h.hasFlag)(
            null !== (z = H.flags) && void 0 !== z ? z : 0,
            T.GuildMemberFlags.BYPASSES_VERIFICATION
          )
            ? (0, a.jsx)(
                u.MenuItem,
                {
                  id: "verify",
                  label: R.default.Messages.MANUALLY_UNVERIFY_MEMBER,
                  action: () => {
                    var t;
                    return s.default.setMemberFlags(
                      D.id,
                      e.id,
                      (0, h.setFlag)(
                        null !== (t = H.flags) && void 0 !== t ? t : 0,
                        T.GuildMemberFlags.BYPASSES_VERIFICATION,
                        !1
                      )
                    );
                  },
                },
                "verify"
              )
            : (0, a.jsx)(
                u.MenuItem,
                {
                  id: "verify",
                  label: R.default.Messages.MANUALLY_VERIFY_MEMBER,
                  action: () => {
                    var t;
                    return s.default.setMemberFlags(
                      D.id,
                      e.id,
                      (0, h.setFlag)(
                        null !== (t = H.flags) && void 0 !== t ? t : 0,
                        T.GuildMemberFlags.BYPASSES_VERIFICATION,
                        !0
                      )
                    );
                  },
                },
                "verify"
              );
        }
        let J =
          y || null == D
            ? []
            : [
                k,
                X,
                W && !G
                  ? U
                    ? (0, a.jsx)(
                        u.MenuItem,
                        {
                          id: "removetimeout",
                          label:
                            R.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format(
                              { user: e.username }
                            ),
                          color: "danger",
                          action: () => {
                            (0, o.openEnableCommunication)(t, e.id, v);
                          },
                        },
                        "removetimeout"
                      )
                    : (0, a.jsx)(
                        u.MenuItem,
                        {
                          id: "timeout",
                          label:
                            R.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format(
                              { user: e.username }
                            ),
                          color: "danger",
                          action: l => {
                            if (l.ctrlKey || l.metaKey) return K(l, t, e.id);
                            (0, o.openDisableCommunication)(t, e.id, v);
                          },
                        },
                        "timeout"
                      )
                  : null,
                I.default.canManageUser(p.Permissions.KICK_MEMBERS, e, D) &&
                !e.isClyde()
                  ? (0, a.jsx)(
                      u.MenuItem,
                      {
                        id: "kick",
                        label: R.default.Messages.KICK_USER.format({
                          user: e.username,
                        }),
                        color: "danger",
                        action: () =>
                          (0, u.openModalLazy)(async () => {
                            let { default: n } = await l
                              .el("125104")
                              .then(l.bind(l, "125104"));
                            return l =>
                              (0, a.jsx)(n, {
                                ...l,
                                location: b,
                                guildId: t,
                                user: e,
                              });
                          }),
                      },
                      "kick"
                    )
                  : null,
                I.default.canManageUser(p.Permissions.BAN_MEMBERS, e, D)
                  ? (0, a.jsx)(
                      u.MenuItem,
                      {
                        id: "ban",
                        label: R.default.Messages.BAN_USER.format({
                          user: e.username,
                        }),
                        color: "danger",
                        action: () =>
                          (0, u.openModalLazy)(async () => {
                            let { default: n } = await l
                              .el("743506")
                              .then(l.bind(l, "743506"));
                            return l =>
                              (0, a.jsx)(n, {
                                ...l,
                                location: b,
                                guildId: t,
                                user: e,
                              });
                          }),
                      },
                      "ban"
                    )
                  : null,
              ];
        return [...Y, ...J];
      }
    },
    359433: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var a = l("37983"),
        n = l("884691"),
        i = l("446674"),
        u = l("77078"),
        d = l("244201"),
        s = l("994906"),
        r = l("459824"),
        o = l("18494"),
        c = l("599110"),
        f = l("49111"),
        E = l("724210"),
        M = l("789150"),
        S = l("782340");
      function m(e, t, l, m) {
        let I = n.useContext(c.AnalyticsContext),
          g = (0, d.useWindowDispatch)(),
          _ = (0, i.useStateFromStores)(
            [o.default],
            () => (null != l ? l : o.default.getChannelId(t, !0)),
            [l, t]
          ),
          h = (0, r.useCanAccessGuildMemberModView)(t, !0);
        return null != t && h
          ? (0, a.jsx)(u.MenuItem, {
              id: "mod-view",
              label: S.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
              action: () => {
                (0, s.openGuildMemberModViewSidebar)(
                  t,
                  e,
                  null != _ ? _ : E.StaticChannelRoute.MEMBER_SAFETY,
                  {
                    modViewPanel: M.ModViewPanel.INFO,
                    sourceLocation: null != m ? m : I.location,
                  }
                ),
                  g.dispatch(f.ComponentActions.POPOUT_CLOSE);
              },
            })
          : null;
      }
    },
    421602: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("77078"),
        i = l("450911"),
        u = l("54239"),
        d = l("271938"),
        s = l("49111"),
        r = l("782340");
      function o(e, t) {
        let l = d.default.getId(),
          o = t === s.AppContext.POPOUT;
        return l === e || o
          ? null
          : (0, a.jsx)(n.MenuItem, {
              id: "message-user",
              label: r.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                i.default.openPrivateChannel(e), (0, u.popLayer)();
              },
            });
      }
    },
    459870: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("446674"),
        i = l("77078"),
        u = l("851387"),
        d = l("987317"),
        s = l("679653"),
        r = l("271938"),
        o = l("42203"),
        c = l("923959"),
        f = l("26989"),
        E = l("305961"),
        M = l("957255"),
        S = l("27618"),
        m = l("697218"),
        I = l("800762"),
        g = l("404008"),
        _ = l("991170"),
        h = l("49111"),
        A = l("782340");
      function C(e, t) {
        let l = (0, n.useStateFromStores)(
            [c.default],
            () => c.default.getChannels(t)[c.GUILD_VOCAL_CHANNELS_KEY],
            [t]
          ),
          C = (0, n.useStateFromStores)(
            [I.default, o.default],
            () => {
              let l = I.default.getUserVoiceChannelId(t, e.id);
              return o.default.getChannel(l);
            },
            [t, e.id]
          ),
          p = (0, n.useStateFromStores)(
            [f.default],
            () => f.default.isGuestOrLurker(t, e.id),
            [t, e.id]
          );
        if (p || null == C) return null;
        let N = e.id === r.default.getId();
        if (!N && !M.default.can(h.Permissions.MOVE_MEMBERS, C)) return null;
        let T = l.filter(t => {
          let { channel: l } = t;
          return (
            l.id !== C.id &&
            (N
              ? M.default.can(h.Permissions.CONNECT, l) &&
                !(0, g.isChannelFull)(l, I.default, E.default)
              : M.default.can(h.Permissions.MOVE_MEMBERS, l) &&
                (M.default.can(h.Permissions.CONNECT, l) ||
                  _.default.can({
                    permission: h.Permissions.CONNECT,
                    user: e,
                    context: l,
                  })) &&
                !(0, g.isChannelFull)(l, I.default, E.default))
          );
        });
        return 0 === T.length
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "voice-move",
              label: A.default.Messages.MOVE_TO,
              children: T.map(l => {
                let { channel: n } = l;
                return (0, a.jsx)(
                  i.MenuItem,
                  {
                    id: n.id,
                    action: () => {
                      var l;
                      return (
                        (l = n),
                        void (e.id === r.default.getId()
                          ? d.default.selectVoiceChannel(l.id)
                          : u.default.setChannel(t, e.id, l.id))
                      );
                    },
                    label: (0, s.computeChannelName)(n, m.default, S.default),
                  },
                  n.id
                );
              }),
            });
      }
    },
    97508: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return _;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("509043"),
        i = l("446674"),
        u = l("77078"),
        d = l("206230"),
        s = l("454273"),
        r = l("130037"),
        o = l("592407"),
        c = l("26989"),
        f = l("305961"),
        E = l("957255"),
        M = l("449008"),
        S = l("49111"),
        m = l("782340"),
        I = l("235324");
      function g(e, t) {
        var l, i;
        return (0, a.jsxs)("div", {
          className: I.roleRow,
          children: [
            "dot" === t
              ? (0, a.jsx)(u.RoleDot, {
                  className: I.roleDot,
                  color:
                    null !== (l = e.colorString) && void 0 !== l
                      ? l
                      : (0, n.int2hex)(S.DEFAULT_ROLE_COLOR),
                  background: !1,
                  tooltip: !1,
                })
              : (0, a.jsx)(u.RoleCircle, {
                  className: I.roleDot,
                  color:
                    null !== (i = e.colorString) && void 0 !== i
                      ? i
                      : (0, n.int2hex)(S.DEFAULT_ROLE_COLOR),
                }),
            (0, a.jsx)("div", { children: e.name }),
          ],
        });
      }
      function _(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          I = (0, i.useStateFromStores)(
            [f.default],
            () => f.default.getGuild(t),
            [t]
          ),
          _ = (0, i.useStateFromStores)([d.default], () => d.default.roleStyle),
          h = (0, r.useTrackModerationAction)(t, {
            location: n,
            targetUserId: e,
          }),
          {
            userRoles: A,
            isGuildMember: C,
            canManageRoles: p,
          } = (0, i.useStateFromStoresObject)(
            [c.default, E.default],
            () => {
              let l = c.default.getMember(t, e);
              return {
                userRoles: null != l ? l.roles : [],
                isGuildMember: null != l,
                canManageRoles:
                  null != I && E.default.can(S.Permissions.MANAGE_ROLES, I),
              };
            },
            [e, t, I]
          );
        if (__OVERLAY__ || null == A || null == I || !C) return null;
        let N = E.default.getHighestRole(I),
          T = Object.values(I.roles).filter(
            e => !(0, s.isEveryoneRoleId)(I.id, e.id)
          ),
          R = p
            ? T.map(l => {
                let n = l.managed || !E.default.isRoleHigher(I, N, l),
                  i = -1 !== A.indexOf(l.id);
                return n && !i
                  ? null
                  : (0, a.jsx)(
                      u.MenuCheckboxItem,
                      {
                        id: l.id,
                        label: () => g(l, _),
                        disabled: n,
                        action: () => {
                          var a;
                          return (
                            (a = l),
                            void (A.includes(a.id)
                              ? (o.default.updateMemberRoles(
                                  t,
                                  e,
                                  A.filter(e => e !== a.id),
                                  [],
                                  [a.id]
                                ),
                                h(r.ModerationActionType.REMOVE_ROLE))
                              : (o.default.updateMemberRoles(
                                  t,
                                  e,
                                  A.concat([a.id]),
                                  [a.id],
                                  []
                                ),
                                h(r.ModerationActionType.ADD_ROLE)))
                          );
                        },
                        checked: i,
                      },
                      l.id
                    );
              })
            : T.filter(e => -1 !== A.indexOf(e.id)).map(e =>
                (0, s.isEveryoneRoleId)(I.id, e.id)
                  ? null
                  : (0, a.jsx)(
                      u.MenuItem,
                      { id: e.id, label: () => g(e, _) },
                      e.id
                    )
              );
        return 0 === R.filter(M.isNotNullish).length
          ? null
          : l
            ? R
            : (0, a.jsx)(u.MenuItem, {
                id: "roles",
                label: m.default.Messages.ROLES_LIST.format({
                  numRoles: R.length,
                }),
                children: R,
              });
      }
    },
  },
]);
//# sourceMappingURL=7fa783e44d665b8aa01b.js.map

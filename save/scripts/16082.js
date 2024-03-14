(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16082"],
  {
    901582: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l,
        u,
        i = n("37983"),
        r = n("884691"),
        o = n("748820"),
        a = n("599110"),
        d = n("117362"),
        s = n("49111");
      ((l = class extends r.Component {
        renderProvider(e) {
          var t, n;
          let {
              section: l,
              page: u,
              object: r,
              objectType: o,
              children: d,
            } = this.props,
            s = this.mergeLocation(e.location, this.getLocation(u, l, r, o)),
            c = this.getContext(
              s,
              null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate,
              null !== (n = this._loadId) && void 0 !== n ? n : e.loadId
            );
          return (0, i.jsx)(a.AnalyticsContext.Provider, {
            value: c,
            children: d,
          });
        }
        render() {
          let { context: e } = this.props;
          return null != e
            ? this.renderProvider(e)
            : (0, i.jsx)(a.AnalyticsContext.Consumer, {
                children: e => this.renderProvider(e),
              });
        }
        constructor(e) {
          super(e),
            (this._loadId = null),
            (this._loadDate = this.props.root ? Date.now() : null),
            (this.getLocation = (0, d.cachedFunction)((e, t, n, l) => {
              let u = {};
              return (
                null != e && (u.page = e),
                null != t && (u.section = t),
                null != n && (u.object = n),
                null != l && (u.objectType = l),
                u
              );
            })),
            (this.mergeLocation = (0, d.cachedFunction)((e, t) => ({
              ...e,
              ...t,
            }))),
            (this.getContext = (0, d.cachedFunction)((e, t, n) => ({
              location: e,
              loadDate: t,
              loadId: n,
            }))),
            null != e.loadId
              ? (this._loadId = e.loadId)
              : e.root && (this._loadId = (0, o.v4)());
        }
      }).Pages = s.AnalyticsPages),
        (l.Sections = s.AnalyticsSections),
        (l.Objects = s.AnalyticsObjects),
        (l.ObjectTypes = s.AnalyticsObjectTypes),
        (l.defaultProps = { root: !1 }),
        (u = l);
    },
    838446: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("901582");
      function i(e, t) {
        return function (n) {
          return (0, l.jsx)(u.default, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, l.jsx)(e, { ...n }),
          });
        };
      }
    },
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("685665");
      function i(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: i } = (0, u.default)(t);
          return (0, l.jsx)(i, { children: (0, l.jsx)(e, { ...n }) });
        };
      }
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("35466");
      n.es(l, t);
    },
    997289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAnalyticsContext: function () {
            return i;
          },
        });
      var l = n("884691"),
        u = n("599110");
      let i = () => l.useContext(u.AnalyticsContext);
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("627445"),
        i = n.n(u),
        r = n("77078"),
        o = n("845579"),
        a = n("662255"),
        d = n("306160");
      function s(e) {
        let { id: t, label: n, onSuccess: u, shiftId: s, showIconFirst: c } = e,
          f = o.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !d.SUPPORTS_COPY || null == t) return null;
        let E = "devmode-copy-id-".concat(t);
        return (0, l.jsx)(
          r.MenuItem,
          {
            id: E,
            label: n,
            action: function (e) {
              let n = null != s && e.shiftKey ? s : t;
              i(null != n, "cannot copy null text"),
                (0, d.copy)(n),
                null == u || u();
            },
            icon: a.default,
            showIconFirst: c,
          },
          E
        );
      }
    },
    700179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canToggleCommunicationDisableOnUser: function () {
            return d;
          },
          default: function () {
            return s;
          },
        }),
        n("222007");
      var l = n("446674"),
        u = n("305961"),
        i = n("957255"),
        r = n("697218"),
        o = n("991170"),
        a = n("49111");
      function d(e, t) {
        let [n, l, d] =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [r.default, u.default, i.default],
          s = l.getGuild(e),
          c = n.getUser(t);
        if (null == s || null == c || c.isNonUserBot()) return !1;
        let f =
          s.isOwner(c) ||
          o.default.can({
            permission: a.Permissions.ADMINISTRATOR,
            user: c,
            context: s,
          });
        return !f && d.canManageUser(a.Permissions.MODERATE_MEMBERS, c, s);
      }
      function s(e, t) {
        return (0, l.useStateFromStores)(
          [r.default, u.default, i.default],
          () => d(e, t, [r.default, u.default, i.default]),
          [e, t]
        );
      }
    },
    406043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCurrentUserCommunicationDisabled: function () {
            return o;
          },
          default: function () {
            return s;
          },
          userCommunicationDisabled: function () {
            return c;
          },
        });
      var l = n("446674"),
        u = n("26989"),
        i = n("697218"),
        r = n("509");
      function o(e) {
        let t = (0, l.useStateFromStores)([i.default], () =>
          i.default.getCurrentUser()
        );
        return s(null == t ? void 0 : t.id, e);
      }
      function a(e, t, n) {
        return null != t && null != e ? n.getMember(t, e) : null;
      }
      function d(e) {
        var t;
        return [
          null !== (t = null == e ? void 0 : e.communicationDisabledUntil) &&
          void 0 !== t
            ? t
            : null,
          (0, r.isMemberCommunicationDisabled)(e),
        ];
      }
      function s(e, t) {
        let n = (0, l.useStateFromStores)(
          [u.default],
          () => a(e, t, u.default),
          [t, e]
        );
        return d(n);
      }
      function c(e, t) {
        let n = a(e, t, u.default);
        return d(n);
      }
    },
    209700: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isInGuildMemberModViewExperiment: function () {
            return r;
          },
          useGuildMemberModViewExperiment: function () {
            return o;
          },
        });
      var l = n("812204"),
        u = n("862205");
      let i = (0, u.createExperiment)({
          kind: "guild",
          id: "2023-08_guild_member_mod_view",
          label: "Guild Member Mod View",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "Guild Member Mod View", config: { enabled: !0 } },
          ],
        }),
        r = function (e) {
          let {
              autoTrackExposure: t = !1,
              disable: n = !1,
              location: u = l.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = i.getCurrentConfig(
              { guildId: e, location: u },
              { autoTrackExposure: t, disable: n }
            );
          return r;
        },
        o = function (e) {
          let {
              autoTrackExposure: t = !1,
              disable: n = !1,
              location: u = l.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = i.useExperiment(
              { guildId: null != e ? e : void 0, location: u },
              { autoTrackExposure: t, disable: n }
            );
          return r;
        };
    },
    459824: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canAccessGuildMemberModViewWithExperiment: function () {
            return c;
          },
          useCanAccessGuildMemberModView: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("316693"),
        u = n("446674"),
        i = n("305961"),
        r = n("697218"),
        o = n("991170"),
        a = n("209700"),
        d = n("562980");
      let s = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [i.default, r.default];
          if (null == e) return !1;
          let [n, u] = t,
            a = n.getGuild(e);
          if (null == a) return !1;
          let s = u.getCurrentUser(),
            c = l.default.hasAny(
              o.default.computePermissions({
                user: s,
                context: a,
                checkElevated: !1,
              }),
              d.MemberSafetyPagePermissions
            );
          return c;
        },
        c = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (null == e) return !1;
          let l = s(e),
            u = (0, a.isInGuildMemberModViewExperiment)(e, {
              autoTrackExposure: t,
              disable: !l,
              location: n,
            });
          return l && u;
        };
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          l = (0, u.useStateFromStores)(
            [i.default, r.default],
            () => s(e, [i.default, r.default]),
            [e]
          ),
          o = (0, a.useGuildMemberModViewExperiment)(e, {
            autoTrackExposure: t,
            disable: !l,
            location: n,
          });
        return l && o;
      }
    },
    130037: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTrackMemberSearchUsed: function () {
            return _;
          },
          useTrackMemberFilterRolesUsed: function () {
            return m;
          },
          MemberSafetyFlagType: function () {
            return i;
          },
          useTrackMemberFilterSafetyFlagsUsed: function () {
            return h;
          },
          ModerationActionType: function () {
            return r;
          },
          useTrackModerationAction: function () {
            return M;
          },
          trackMembersPageViewed: function () {
            return C;
          },
        });
      var l,
        u,
        i,
        r,
        o = n("884691"),
        a = n("812204"),
        d = n("716241"),
        s = n("271938"),
        c = n("599110"),
        f = n("49111");
      function E(e, t, n) {
        var l;
        let u = {
          ...t,
          ...(0, d.collectGuildAnalyticsMetadata)(
            null !== (l = t.guild_id) && void 0 !== l ? l : n
          ),
        };
        c.default.track(e, u);
      }
      function _(e) {
        let t = o.useCallback(
          t => {
            !(function (e) {
              let t = { guild_id: e, location: a.default.MEMBER_SAFETY_PAGE };
              E(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
          },
          [e]
        );
        return t;
      }
      function m(e) {
        let t = o.useCallback(
          t => {
            !(function (e, t) {
              let n = {
                selected_role_count: t.size,
                guild_id: e,
                location: a.default.MEMBER_SAFETY_PAGE,
              };
              E(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, n);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      ((l = i || (i = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (l.COMMUNICATION_DISABLED = "communication_disabled"),
        (l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (l.USERNAME_QUARANTINED = "username_quarantined");
      function h(e) {
        let t = o.useCallback(
          t => {
            !(function (e, t) {
              let n = {
                flag_type: t,
                guild_id: e,
                location: a.default.MEMBER_SAFETY_PAGE,
              };
              E(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      function M(e, t) {
        let { location: n, targetUserId: l, targets: u, locations: i } = t,
          r = o.useCallback(
            t => {
              let r = {
                action_type: t,
                mod_user_id: s.default.getId(),
                guild_id: e,
                location: n,
                locations: i,
                target_user_id: null != l ? l : void 0,
                targets: null != u ? u : void 0,
              };
              E(f.AnalyticEvents.MODERATION_ACTION, r);
            },
            [e, n, l, u, i]
          );
        return r;
      }
      function C(e, t) {
        E(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
          guild_id: e,
          location: t,
        });
      }
      ((u = r || (r = {})).BAN = "ban"),
        (u.KICK = "kick"),
        (u.MUTE = "mute"),
        (u.TIMEOUT = "timeout"),
        (u.ADD_ROLE = "add_role"),
        (u.REMOVE_ROLE = "remove_role"),
        (u.COPY_ID = "copy_id"),
        (u.CHANGE_NICKNAME = "change_nickname");
    },
    347895: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchGuildHomeSettings: function () {
            return M;
          },
          fetchNewMemberActions: function () {
            return C;
          },
          selectHomeResourceChannel: function () {
            return v;
          },
          selectNewMemberActionChannel: function () {
            return p;
          },
          completeNewMemberAction: function () {
            return A;
          },
          getBlockForChannelDeletion: function () {
            return g;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("872717"),
        u = n("913144"),
        i = n("819689"),
        r = n("115718"),
        o = n("38654"),
        a = n("144491"),
        d = n("42203"),
        s = n("599110"),
        c = n("299039"),
        f = n("698882"),
        E = n("129092"),
        _ = n("675305"),
        m = n("290886"),
        h = n("49111");
      let M = async e => {
          u.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e,
          });
          try {
            let t = await l.default.get({
                url: h.Endpoints.GUILD_HOME_SETTINGS(e),
                oldFormErrors: !0,
              }),
              n = (0, E.settingsFromServer)(t.body);
            return (
              u.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: n,
              }),
              n
            );
          } catch (t) {
            u.default.dispatch({
              type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
              guildId: e,
            });
          }
        },
        C = async e => {
          if (!o.default.isFullServerPreview(e)) {
            u.default.dispatch({
              type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
              guildId: e,
            });
            try {
              let t = await l.default.get({
                  url: h.Endpoints.GUILD_MEMBER_ACTIONS(e),
                  oldFormErrors: !0,
                }),
                n = (0, E.actionsFromServer)(t.body);
              return (
                u.default.dispatch({
                  type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                  guildId: e,
                  memberActions: n,
                }),
                n
              );
            } catch (t) {
              u.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                guildId: e,
              });
            }
          }
        },
        v = function (e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (
            (u.default.dispatch({
              type: "SELECT_HOME_RESOURCE_CHANNEL",
              guildId: e,
              channelId: t,
            }),
            null == t)
          )
            return;
          let l = d.default.getChannel(t),
            E = f.default.getResourceForChannel(e, t);
          null != e &&
            !o.default.isFullServerPreview(e) &&
            null != l &&
            null != E &&
            s.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: l.id,
              server_guide_channel_type: "resource",
              channel_action_type: -1,
            }),
            n && (0, a.transitionToChannel)(t),
            i.default.jumpToMessage({
              channelId: t,
              messageId: c.default.castChannelIdAsMessageId(t),
              flash: !1,
              jumpType: r.JumpTypes.INSTANT,
            });
        },
        p = (e, t) => {
          u.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: t,
          });
          let n = d.default.getChannel(t),
            l = f.default.getActionForChannel(e, t);
          null != e &&
            !o.default.isFullServerPreview(e) &&
            null != n &&
            null != l &&
            s.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: n.id,
              server_guide_channel_type: "member action",
              channel_action_type: l.actionType,
            }),
            (0, a.transitionToChannel)(t);
        },
        A = (e, t) => {
          if (
            (u.default.dispatch({
              type: "COMPLETE_NEW_MEMBER_ACTION",
              guildId: e,
              channelId: t,
            }),
            o.default.isFullServerPreview(e))
          )
            return;
          let n = d.default.getChannel(t),
            i = f.default.getActionForChannel(e, t);
          if (null != n && null != i) {
            var r, a;
            let t = c.default.keys(
                null !== (r = _.default.getCompletedActions(e)) && void 0 !== r
                  ? r
                  : {}
              ),
              l =
                null !== (a = f.default.getNewMemberActions(e)) && void 0 !== a
                  ? a
                  : [];
            s.default.track(h.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
              guild_id: n.guild_id,
              channel_id: n.id,
              channel_action_type: i.actionType,
              has_completed_all: l.reduce(
                (e, n) => e && t.includes(n.channelId),
                !0
              ),
            });
          }
          l.default.post({ url: h.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t) });
        };
      async function g(e, t) {
        if (null == e) return !1;
        let n = (0, m.canSeeOnboardingHome)(e);
        if (!n) return !1;
        let l = f.default.getSettings(e);
        return (
          l === f.NO_SETTINGS && (await M(e), (l = f.default.getSettings(e))),
          l !== f.NO_SETTINGS &&
            null != l &&
            (null != l.newMemberActions &&
            null != l.newMemberActions.find(e => e.channelId === t)
              ? "todo"
              : null != l.resourceChannels &&
                null != l.resourceChannels.find(e => e.channelId === t) &&
                "resource")
        );
      }
    },
    129092: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          WELCOME_MESSAGE_MIN_LENGTH: function () {
            return d;
          },
          WELCOME_MESSAGE_MAX_LENGTH: function () {
            return s;
          },
          NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function () {
            return c;
          },
          NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function () {
            return f;
          },
          NEW_MEMBER_ACTION_MAX: function () {
            return E;
          },
          RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function () {
            return _;
          },
          RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function () {
            return m;
          },
          RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function () {
            return h;
          },
          RESOURCE_CHANNEL_MAX: function () {
            return M;
          },
          NewMemberActionTypes: function () {
            return u;
          },
          newMemberActionFromServer: function () {
            return C;
          },
          resourceChannelFromServer: function () {
            return v;
          },
          settingsFromServer: function () {
            return p;
          },
          settingsToServer: function () {
            return A;
          },
          actionsFromServer: function () {
            return g;
          },
          isWelcomeMessageEmpty: function () {
            return S;
          },
          isSettingsEmpty: function () {
            return T;
          },
          isSettingsValid: function () {
            return I;
          },
          isChannelValidForResourceChannel: function () {
            return N;
          },
          isChannelValidForNewMemberAction: function () {
            return y;
          },
        });
      var l,
        u,
        i = n("42203"),
        r = n("449008"),
        o = n("991170"),
        a = n("49111");
      let d = 7,
        s = 300,
        c = 7,
        f = 60,
        E = 5,
        _ = 1,
        m = 30,
        h = 200,
        M = 7;
      function C(e) {
        var t;
        return {
          channelId: e.channel_id,
          actionType: e.action_type,
          title: e.title,
          description: e.description,
          emoji:
            null == e.emoji
              ? null
              : {
                  id: e.emoji.id,
                  name: e.emoji.name,
                  animated: e.emoji.animated,
                },
          icon: null !== (t = e.icon) && void 0 !== t ? t : null,
        };
      }
      function v(e) {
        var t, n;
        return {
          channelId: e.channel_id,
          title: e.title,
          description: null !== (t = e.description) && void 0 !== t ? t : "",
          emoji:
            null == e.emoji
              ? null
              : {
                  id: e.emoji.id,
                  name: e.emoji.name,
                  animated: e.emoji.animated,
                },
          icon: null !== (n = e.icon) && void 0 !== n ? n : null,
        };
      }
      function p(e) {
        if (null == e) return null;
        let {
            welcome_message: t,
            new_member_actions: n,
            resource_channels: l,
            enabled: u,
          } = e,
          o = { authorIds: t.author_ids, message: t.message },
          a = n
            .filter(e =>
              (0, r.isNotNullish)(i.default.getChannel(e.channel_id))
            )
            .map(C),
          d = l
            .filter(e =>
              (0, r.isNotNullish)(i.default.getChannel(e.channel_id))
            )
            .map(v);
        return {
          welcomeMessage: o,
          newMemberActions: a,
          resourceChannels: d,
          enabled: u,
        };
      }
      function A(e, t) {
        var n, l;
        if (null == t) return null;
        let {
            welcomeMessage: u,
            newMemberActions: o,
            resourceChannels: a,
            enabled: d,
          } = t,
          s = {
            author_ids:
              null !== (n = null == u ? void 0 : u.authorIds) && void 0 !== n
                ? n
                : [],
            message:
              null !== (l = null == u ? void 0 : u.message) && void 0 !== l
                ? l
                : "",
          },
          c = (null != o ? o : [])
            .filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, l, u, i, r, o;
              return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (u =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== u
                      ? u
                      : void 0,
                  name:
                    null !==
                      (i =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.name) && void 0 !== i
                      ? i
                      : void 0,
                  animated:
                    null !==
                      (r =
                        null === (l = e.emoji) || void 0 === l
                          ? void 0
                          : l.animated) && void 0 !== r
                      ? r
                      : void 0,
                },
                icon: null !== (o = e.icon) && void 0 !== o ? o : void 0,
              };
            }),
          f = (null != a ? a : [])
            .filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, l, u, i, r, o;
              return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (u =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== u
                      ? u
                      : void 0,
                  name:
                    null !==
                      (i =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.name) && void 0 !== i
                      ? i
                      : void 0,
                  animated:
                    null !==
                      (r =
                        null === (l = e.emoji) || void 0 === l
                          ? void 0
                          : l.animated) && void 0 !== r
                      ? r
                      : void 0,
                },
                icon: null !== (o = e.icon) && void 0 !== o ? o : void 0,
              };
            });
        return {
          guild_id: e,
          welcome_message: s,
          new_member_actions: c,
          resource_channels: f,
          enabled: d,
        };
      }
      ((l = u || (u = {}))[(l.VIEW = 0)] = "VIEW"), (l[(l.CHAT = 1)] = "CHAT");
      let g = e => {
        if (null == e) return null;
        let t = {};
        for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t;
      };
      function S(e) {
        return (
          null == e ||
          ((null == e.message || !(e.message.length > 0)) &&
            (null == e.authorIds || !(e.authorIds.length > 0)) &&
            !0)
        );
      }
      function T(e) {
        return (
          null == e ||
          (!!S(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)) &&
            !0)
        );
      }
      function I(e) {
        var t, n;
        return (
          null != e &&
          (!!T(e) ||
            ((null === (t = e.welcomeMessage) || void 0 === t
              ? void 0
              : t.message) != null &&
              !(e.welcomeMessage.message.length < d) &&
              (null === (n = e.welcomeMessage) || void 0 === n
                ? void 0
                : n.authorIds) != null &&
              0 !== e.welcomeMessage.authorIds.length &&
              null != e.newMemberActions &&
              !(e.newMemberActions.length < 3) &&
              !0))
        );
      }
      function N(e) {
        return (
          e.type === a.ChannelTypes.GUILD_TEXT &&
          !o.default.canEveryoneRole(a.Permissions.SEND_MESSAGES, e) &&
          o.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e)
        );
      }
      function y(e) {
        switch (e.type) {
          case a.ChannelTypes.GUILD_TEXT:
          case a.ChannelTypes.GUILD_ANNOUNCEMENT:
          case a.ChannelTypes.GUILD_FORUM:
          case a.ChannelTypes.GUILD_MEDIA:
            return o.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e);
          default:
            return !1;
        }
      }
    },
    519841: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AttachmentLinkRefreshExperiment: function () {
            return u;
          },
        });
      var l = n("862205");
      let u = (0, l.createExperiment)({
        kind: "user",
        id: "2023-12_attachment_link_refresh",
        label: "Attachment Link Refresh User Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Refresh expired attachment links",
            config: { enabled: !0 },
          },
        ],
      });
    },
    787336: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isAttachmentUrl: function () {
            return f;
          },
          removeSignedUrlParameters: function () {
            return E;
          },
          messageHasExpiredAttachmentUrl: function () {
            return C;
          },
          maybeRefreshAttachmentUrl: function () {
            return p;
          },
        }),
        n("222007");
      var l,
        u = n("872717"),
        i = n("718517"),
        r = n("253981"),
        o = n("519841"),
        a = n("49111");
      let d = new Set([
          window.GLOBAL_ENV.CDN_HOST,
          null === (l = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === l
            ? void 0
            : l.substring(2),
        ]),
        s = new Set(["/attachments/", "/ephemeral-attachments/"]),
        c = 1 * i.default.Millis.HOUR;
      function f(e) {
        return (
          d.has(e.hostname) && Array.from(s).some(t => e.pathname.startsWith(t))
        );
      }
      function E(e) {
        let t = r.default.toURLSafe(e);
        if (null == t) return e;
        for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
        return t;
      }
      function _(e) {
        let t = (function (e) {
          let t = e.searchParams.get("ex"),
            n = parseInt(null != t ? t : "", 16);
          return isNaN(n) ? void 0 : n * i.default.Millis.SECOND;
        })(e);
        return null == t || t <= Date.now() + c;
      }
      function m(e) {
        let t = r.default.toURLSafe(e.url);
        return null != t && _(t);
      }
      function h(e) {
        if (null == e) return !1;
        let t = r.default.toURLSafe(e.url);
        return !!(null != t && f(t)) && _(t);
      }
      function M(e) {
        var t;
        return (
          h(e.image) ||
          (null === (t = e.images) || void 0 === t ? void 0 : t.some(h)) ||
          h(e.video)
        );
      }
      function C(e) {
        return e.attachments.some(m) || e.embeds.some(M);
      }
      async function v(e) {
        let t = await u.default.post({
          url: a.Endpoints.ATTACHMENTS_REFRESH_URLS,
          body: { attachment_urls: [e] },
        });
        return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
      }
      async function p(e) {
        if (
          !o.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "link_clicked",
          }).enabled
        )
          return e;
        let t = r.default.toURLSafe(e);
        if (null == t || !_(t)) return e;
        let n = await v(e);
        return null != n ? n : e;
      }
    },
    38766: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("884691"),
        u = n("79112"),
        i = n("685665"),
        r = n("929423");
      n("424562");
      var o = n("49111"),
        a = n("397336");
      function d(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: d,
            analyticsLocations: s,
            openWithoutBackstack: c = !1,
          } = e,
          { analyticsLocations: f } = (0, i.default)(),
          E = (0, l.useCallback)(() => {
            null != t && (0, r.initGuildIdentitySettings)(t, null != s ? s : f),
              u.default.open(
                o.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? a.ProfileCustomizationSubsection.GUILD
                  : a.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: d,
                  analyticsLocations: s,
                  openWithoutBackstack: c,
                }
              );
          }, [t, n, d, s, c, f]);
        return E;
      }
    },
    467940: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var l = n("37983"),
        u = n("884691"),
        i = n("446674"),
        r = n("77078"),
        o = n("272030"),
        a = n("838446"),
        d = n("158534"),
        s = n("997289"),
        c = n("812204"),
        f = n("685665"),
        E = n("861370"),
        _ = n("230947"),
        m = n("130037"),
        h = n("26989"),
        M = n("800762"),
        C = n("300925"),
        v = n("489836"),
        p = n("421602"),
        A = n("459870"),
        g = n("325882"),
        S = n("625187"),
        T = n("806179"),
        I = n("97508"),
        N = n("49111"),
        y = n("782340"),
        O = (0, d.default)(
          (0, a.default)(
            function (e) {
              var t;
              let {
                  user: n,
                  guildId: a,
                  channelId: d,
                  context: N,
                  onSelect: O,
                  moderationAlertId: L,
                  analyticsLocation: R,
                  analyticsLocations: U,
                  onCloseContextMenu: b,
                  showTransferOwnershipItem: D,
                } = e,
                { analyticsLocations: x } = (0, f.default)(
                  c.default.CONTEXT_MENU
                ),
                G = (0, s.useAnalyticsContext)(),
                P =
                  null !== (t = null == U ? void 0 : U[0]) && void 0 !== t
                    ? t
                    : x[0],
                w = (0, m.useTrackModerationAction)(a, {
                  location: P,
                  targetUserId: n.id,
                }),
                F = (0, i.useStateFromStores)(
                  [M.default],
                  () => {
                    var e;
                    return null !==
                      (e = M.default.getUserVoiceChannelId(a, n.id)) &&
                      void 0 !== e
                      ? e
                      : void 0;
                  },
                  [a, n.id]
                ),
                j = u.useCallback(() => {
                  w(m.ModerationActionType.COPY_ID);
                }, [w]),
                H = (0, i.useStateFromStores)(
                  [h.default],
                  () => h.default.isMember(a, n.id),
                  [a, n.id]
                ),
                k = (0, T.default)(n.id, a),
                V = (0, p.default)(n.id, N),
                B = (0, _.default)({
                  guildId: a,
                  userId: n.id,
                  analyticsLocation: null != R ? R : G.location,
                  analyticsLocations: [P],
                  context: N,
                }),
                W = (0, v.default)(n, P),
                Y = (0, C.default)(n, a, null != d ? d : F, P),
                X = (0, g.default)(d, L),
                K = (0, S.default)(n, a),
                Z = (0, I.default)(n.id, a, !1, P),
                z = (0, E.default)({
                  id: n.id,
                  label: y.default.Messages.COPY_ID_USER,
                  onSuccess: j,
                }),
                q = (0, A.default)(n, a),
                J = !!(null == n ? void 0 : n.isNonUserBot());
              return (0, l.jsxs)(r.Menu, {
                navId: "user-context",
                onClose: () => {
                  (0, o.closeContextMenu)(), null == b || b();
                },
                "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: O,
                children: [
                  !J &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)(r.MenuGroup, { children: [k, V] }),
                        (0, l.jsxs)(r.MenuGroup, { children: [B, W] }),
                        H &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(r.MenuGroup, { children: Y }),
                              (0, l.jsxs)(r.MenuGroup, { children: [Z, q] }),
                            ],
                          }),
                        null != L ? X : null,
                        D && null != K
                          ? (0, l.jsx)(r.MenuGroup, { children: K })
                          : null,
                      ],
                    }),
                  (0, l.jsx)(r.MenuGroup, { children: z }),
                ],
              });
            },
            { object: N.AnalyticsObjects.CONTEXT_MENU }
          ),
          [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU]
        );
    },
    489836: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("77078"),
        r = n("736964"),
        o = n("27618"),
        a = n("697218"),
        d = n("49111"),
        s = n("782340");
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: n } = e,
          c = (0, u.useStateFromStores)(
            [a.default],
            () => {
              var e;
              return (
                (null === (e = a.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === n
              );
            },
            [n]
          ),
          f = (0, u.useStateFromStores)(
            [o.default],
            () => o.default.isBlocked(n),
            [n]
          );
        if (c) return null;
        function E() {
          r.default.addRelationship({
            userId: n,
            context: { location: t },
            type: d.RelationshipTypes.BLOCKED,
          });
        }
        return (0, l.jsx)(i.MenuItem, {
          id: "block",
          label: f ? s.default.Messages.UNBLOCK : s.default.Messages.BLOCK,
          action: () =>
            f
              ? r.default.unblockUser(n, { location: t })
              : (0, i.openModal)(t =>
                  (0, l.jsx)(i.ConfirmModal, {
                    header: s.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                      name: e.username,
                    }),
                    confirmText: s.default.Messages.BLOCK,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: E,
                    ...t,
                    children: (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      children:
                        s.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                          name: e.username,
                        }),
                    }),
                  })
                ),
        });
      }
    },
    325882: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("77078"),
        r = n("228944"),
        o = n("201131"),
        a = n("702873"),
        d = n("42203"),
        s = n("377253"),
        c = n("957255"),
        f = n("49111"),
        E = n("782340");
      function _(e, t) {
        let n = (0, u.useStateFromStores)(
            [c.default],
            () =>
              null != e &&
              c.default.canWithPartialContext(f.Permissions.MANAGE_MESSAGES, {
                channelId: e,
              }),
            [e]
          ),
          _ = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.getChannel(e),
            [e]
          ),
          m = (0, u.useStateFromStores)([s.default], () =>
            null != e && null != t ? s.default.getMessage(e, t) : null
          ),
          h = (0, o.useAutomodAlertActions)(null != m ? m : null);
        if (null == _ || null == m) return null;
        let M =
            null != h &&
            h.actions.hasOwnProperty(r.AutomodAlertActionType.SET_COMPLETED)
              ? r.AutomodAlertActionType.UNSET_COMPLETED
              : r.AutomodAlertActionType.SET_COMPLETED,
          C =
            M === r.AutomodAlertActionType.SET_COMPLETED
              ? E.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED
              : E.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
        return n && null != t
          ? (0, l.jsx)(
              i.MenuItem,
              {
                id: "mark-automod-alert-completed",
                label: C,
                action: () => {
                  (0, a.executeAlertAction)(t, _, M);
                },
              },
              "mark-automod-alert-completed"
            )
          : null;
      }
    },
    625187: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("77078"),
        r = n("305961"),
        o = n("697218"),
        a = n("782340");
      function d(e, t) {
        let d = (0, u.useStateFromStores)([o.default], () =>
            o.default.getCurrentUser()
          ),
          s = (0, u.useStateFromStores)([r.default], () =>
            r.default.getGuild(t)
          );
        return null == s ||
          null == d ||
          e.id === s.ownerId ||
          e.bot ||
          !s.isOwnerWithRequiredMfaLevel(d)
          ? null
          : (0, l.jsx)(i.MenuItem, {
              id: "transfer-ownership",
              color: "danger",
              label: a.default.Messages.TRANSFER_OWNERSHIP,
              action: () =>
                (0, i.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("878551")
                    .then(n.bind(n, "878551"));
                  return n =>
                    (0, l.jsx)(t, { ...n, guild: s, fromUser: d, toUser: e });
                }),
            });
      }
    },
    806179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        u = n("884691"),
        i = n("77078"),
        r = n("244201"),
        o = n("401642"),
        a = n("599110"),
        d = n("49111"),
        s = n("782340");
      function c(e, t, n) {
        let c = u.useContext(a.AnalyticsContext),
          f = (0, r.useWindowDispatch)();
        return (0, l.jsx)(i.MenuItem, {
          id: "user-profile",
          label: s.default.Messages.PROFILE,
          action: () => {
            (0, o.openUserProfileModal)({
              userId: e,
              guildId: null != t ? t : void 0,
              channelId: null != n ? n : void 0,
              analyticsLocation: c.location,
            }),
              f.dispatch(d.ComponentActions.POPOUT_CLOSE);
          },
        });
      }
    },
    401642: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openUserProfileModal: function () {
            return a;
          },
          closeUserProfileModal: function () {
            return d;
          },
        });
      var l = n("913144"),
        u = n("327037"),
        i = n("697218"),
        r = n("506885"),
        o = n("49111");
      function a(e) {
        let {
            userId: t,
            section: n,
            guildId: a = o.ME,
            channelId: d,
            friendToken: s,
            autoFocusNote: c,
            analyticsLocation: f,
          } = e,
          E = i.default.getUser(t),
          _ = a !== o.ME ? a : void 0;
        if (null == E)
          return (0, u.fetchProfile)(t, { friendToken: s, guildId: _ }).then(
            () => {
              l.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: t,
                section: n,
                guildId: a,
                channelId: d,
                friendToken: s,
                autoFocusNote: c,
                analyticsLocation: f,
              });
            }
          );
        (0, r.default)(t, E.getAvatarURL(void 0, 80), {
          withMutualGuilds: !0,
          friendToken: s,
          guildId: _,
        }),
          l.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            section: n,
            guildId: a,
            channelId: d,
            friendToken: s,
            autoFocusNote: c,
            analyticsLocation: f,
          });
      }
      function d() {
        l.default.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
      }
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("469563"),
        i = n("35647"),
        r = n("75196"),
        o = (0, u.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: u = "currentColor",
              foreground: i,
              ...o
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: i,
                fill: u,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          i.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return r;
          },
          copy: function () {
            return o;
          },
        }),
        n("70102");
      var l = n("281071"),
        u = n("773336"),
        i = n("50885");
      let r = (() => {
        if (u.isPlatformEmbedded) return null != i.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function o(e) {
        return (
          !!r && (u.isPlatformEmbedded ? (i.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("669491"),
        i = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: o,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    281071: function (e, t, n) {
      "use strict";
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          l = window.getSelection(),
          u = document.createElement("textarea");
        (u.value = e),
          (u.contentEditable = "true"),
          (u.style.visibility = "none"),
          t.appendChild(u),
          n.selectNodeContents(u),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          u.focus(),
          u.setSelectionRange(0, e.length);
        let i = document.execCommand("copy");
        return t.removeChild(u), i;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return l;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=fc795f2df0a75b3a7b82.js.map

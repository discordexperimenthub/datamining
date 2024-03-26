(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49479"],
  {
    666020: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          subscribeMembers: function () {
            return i;
          },
          unsubscribeMembers: function () {
            return r;
          },
          subscribeToMemberUpdates: function () {
            return o;
          },
          unsubscribeFromMemberUpdates: function () {
            return a;
          },
          subscribeChannel: function () {
            return s;
          },
          subscribeChannelDimensions: function () {
            return d;
          },
        }),
        n("424973");
      var l = n("913144"),
        u = n("696605");
      function i(e, t) {
        l.default.dispatch({
          type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
          guildId: e,
          userIds: t,
        });
      }
      function r(e, t) {
        l.default.dispatch({
          type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
          guildId: e,
          userIds: t,
        });
      }
      function o(e) {
        l.default.dispatch({
          type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
          guildId: e,
        });
      }
      function a(e) {
        l.default.dispatch({
          type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
          guildId: e,
        });
      }
      function s(e, t, n) {
        l.default.dispatch({
          type: "GUILD_SUBSCRIPTIONS_CHANNEL",
          guildId: e,
          channelId: t,
          ranges: n,
        });
      }
      function d(e) {
        let { guildId: t, channelId: n, y: l, height: i, rowHeight: r } = e;
        function o(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return Math.max(0, Math.ceil(Math.ceil(e / r)) + t);
        }
        let a = [];
        function d(e) {
          let t = e + (u.MINIMUM_RANGE - 1);
          return a.push([e, t]), t + 1;
        }
        let c = o(0.5 * i),
          f = o(l, -c),
          E = o(l + i, c);
        for (
          f > 0 && (f = Math.max(d(0), f)),
            f = Math.floor(f / u.MINIMUM_RANGE) * u.MINIMUM_RANGE;
          f <= E;

        )
          f = d(f);
        s(t, n, a);
      }
    },
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
        s = n("117362"),
        d = n("49111");
      ((l = class extends r.Component {
        renderProvider(e) {
          var t, n;
          let {
              section: l,
              page: u,
              object: r,
              objectType: o,
              children: s,
            } = this.props,
            d = this.mergeLocation(e.location, this.getLocation(u, l, r, o)),
            c = this.getContext(
              d,
              null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate,
              null !== (n = this._loadId) && void 0 !== n ? n : e.loadId
            );
          return (0, i.jsx)(a.AnalyticsContext.Provider, {
            value: c,
            children: s,
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
            (this.getLocation = (0, s.cachedFunction)((e, t, n, l) => {
              let u = {};
              return (
                null != e && (u.page = e),
                null != t && (u.section = t),
                null != n && (u.object = n),
                null != l && (u.objectType = l),
                u
              );
            })),
            (this.mergeLocation = (0, s.cachedFunction)((e, t) => ({
              ...e,
              ...t,
            }))),
            (this.getContext = (0, s.cachedFunction)((e, t, n) => ({
              location: e,
              loadDate: t,
              loadId: n,
            }))),
            null != e.loadId
              ? (this._loadId = e.loadId)
              : e.root && (this._loadId = (0, o.v4)());
        }
      }).Pages = d.AnalyticsPages),
        (l.Sections = d.AnalyticsSections),
        (l.Objects = d.AnalyticsObjects),
        (l.ObjectTypes = d.AnalyticsObjectTypes),
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
          let { analyticsLocations: i } = (0, u.default)(t);
          return (0, l.jsx)(u.AnalyticsLocationProvider, {
            value: i,
            children: (0, l.jsx)(e, { ...n }),
          });
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
    750560: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSubscribeGuildMembers: function () {
            return o;
          },
        }),
        n("37983");
      var l = n("884691"),
        u = n("917351"),
        i = n.n(u);
      n("233736");
      var r = n("666020");
      function o(e) {
        l.useEffect(
          () => (
            i.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)),
            () => {
              i.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e));
            }
          ),
          [e]
        );
      }
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("627445"),
        i = n.n(u),
        r = n("77078"),
        o = n("845579"),
        a = n("662255"),
        s = n("306160");
      function d(e) {
        let { id: t, label: n, onSuccess: u, shiftId: d, showIconFirst: c } = e,
          f = o.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !s.SUPPORTS_COPY || null == t) return null;
        let E = "devmode-copy-id-".concat(t);
        return (0, l.jsx)(
          r.MenuItem,
          {
            id: E,
            label: n,
            action: function (e) {
              let n = null != d && e.shiftKey ? d : t;
              i(null != n, "cannot copy null text"),
                (0, s.copy)(n),
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
            return s;
          },
          default: function () {
            return d;
          },
        }),
        n("222007");
      var l = n("446674"),
        u = n("305961"),
        i = n("957255"),
        r = n("697218"),
        o = n("991170"),
        a = n("49111");
      function s(e, t) {
        let [n, l, s] =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [r.default, u.default, i.default],
          d = l.getGuild(e),
          c = n.getUser(t);
        if (null == d || null == c || c.isNonUserBot()) return !1;
        let f =
          d.isOwner(c) ||
          o.can({
            permission: a.Permissions.ADMINISTRATOR,
            user: c,
            context: d,
          });
        return !f && s.canManageUser(a.Permissions.MODERATE_MEMBERS, c, d);
      }
      function d(e, t) {
        return (0, l.useStateFromStores)(
          [r.default, u.default, i.default],
          () => s(e, t, [r.default, u.default, i.default]),
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
            return d;
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
        return d(null == t ? void 0 : t.id, e);
      }
      function a(e, t, n) {
        return null != t && null != e ? n.getMember(t, e) : null;
      }
      function s(e) {
        var t;
        return [
          null !== (t = null == e ? void 0 : e.communicationDisabledUntil) &&
          void 0 !== t
            ? t
            : null,
          (0, r.isMemberCommunicationDisabled)(e),
        ];
      }
      function d(e, t) {
        let n = (0, l.useStateFromStores)(
          [u.default],
          () => a(e, t, u.default),
          [t, e]
        );
        return s(n);
      }
      function c(e, t) {
        let n = a(e, t, u.default);
        return s(n);
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
        s = n("562980");
      let d = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [i.default, r.default];
          if (null == e) return !1;
          let [n, u] = t,
            a = n.getGuild(e);
          if (null == a) return !1;
          let d = u.getCurrentUser(),
            c = l.hasAny(
              o.computePermissions({ user: d, context: a, checkElevated: !1 }),
              s.MemberSafetyPagePermissions
            );
          return c;
        },
        c = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (null == e) return !1;
          let l = d(e),
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
            () => d(e, [i.default, r.default]),
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
        s = n("716241"),
        d = n("271938"),
        c = n("599110"),
        f = n("49111");
      function E(e, t, n) {
        var l;
        let u = {
          ...t,
          ...(0, s.collectGuildAnalyticsMetadata)(
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
                mod_user_id: d.default.getId(),
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
            return S;
          },
          getBlockForChannelDeletion: function () {
            return T;
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
        s = n("42203"),
        d = n("599110"),
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
            let t = await l.HTTP.get({
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
              let t = await l.HTTP.get({
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
          let l = s.default.getChannel(t),
            E = f.default.getResourceForChannel(e, t);
          null != e &&
            !o.default.isFullServerPreview(e) &&
            null != l &&
            null != E &&
            d.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
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
          let n = s.default.getChannel(t),
            l = f.default.getActionForChannel(e, t);
          null != e &&
            !o.default.isFullServerPreview(e) &&
            null != n &&
            null != l &&
            d.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: n.id,
              server_guide_channel_type: "member action",
              channel_action_type: l.actionType,
            }),
            (0, a.transitionToChannel)(t);
        },
        S = (e, t) => {
          if (
            (u.default.dispatch({
              type: "COMPLETE_NEW_MEMBER_ACTION",
              guildId: e,
              channelId: t,
            }),
            o.default.isFullServerPreview(e))
          )
            return;
          let n = s.default.getChannel(t),
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
            d.default.track(h.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
              guild_id: n.guild_id,
              channel_id: n.id,
              channel_action_type: i.actionType,
              has_completed_all: l.reduce(
                (e, n) => e && t.includes(n.channelId),
                !0
              ),
            });
          }
          l.HTTP.post({ url: h.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t) });
        };
      async function T(e, t) {
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
            return s;
          },
          WELCOME_MESSAGE_MAX_LENGTH: function () {
            return d;
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
            return S;
          },
          actionsFromServer: function () {
            return T;
          },
          isWelcomeMessageEmpty: function () {
            return A;
          },
          isSettingsEmpty: function () {
            return I;
          },
          isSettingsValid: function () {
            return g;
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
      let s = 7,
        d = 300,
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
          s = l
            .filter(e =>
              (0, r.isNotNullish)(i.default.getChannel(e.channel_id))
            )
            .map(v);
        return {
          welcomeMessage: o,
          newMemberActions: a,
          resourceChannels: s,
          enabled: u,
        };
      }
      function S(e, t) {
        var n, l;
        if (null == t) return null;
        let {
            welcomeMessage: u,
            newMemberActions: o,
            resourceChannels: a,
            enabled: s,
          } = t,
          d = {
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
          welcome_message: d,
          new_member_actions: c,
          resource_channels: f,
          enabled: s,
        };
      }
      ((l = u || (u = {}))[(l.VIEW = 0)] = "VIEW"), (l[(l.CHAT = 1)] = "CHAT");
      let T = e => {
        if (null == e) return null;
        let t = {};
        for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t;
      };
      function A(e) {
        return (
          null == e ||
          ((null == e.message || !(e.message.length > 0)) &&
            (null == e.authorIds || !(e.authorIds.length > 0)) &&
            !0)
        );
      }
      function I(e) {
        return (
          null == e ||
          (!!A(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)) &&
            !0)
        );
      }
      function g(e) {
        var t, n;
        return (
          null != e &&
          (!!I(e) ||
            ((null === (t = e.welcomeMessage) || void 0 === t
              ? void 0
              : t.message) != null &&
              !(e.welcomeMessage.message.length < s) &&
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
          !o.canEveryoneRole(a.Permissions.SEND_MESSAGES, e) &&
          o.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e)
        );
      }
      function y(e) {
        switch (e.type) {
          case a.ChannelTypes.GUILD_TEXT:
          case a.ChannelTypes.GUILD_ANNOUNCEMENT:
          case a.ChannelTypes.GUILD_FORUM:
          case a.ChannelTypes.GUILD_MEDIA:
            return o.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e);
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
      let s = new Set([
          window.GLOBAL_ENV.CDN_HOST,
          null === (l = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === l
            ? void 0
            : l.substring(2),
        ]),
        d = new Set(["/attachments/", "/ephemeral-attachments/"]),
        c = 1 * i.default.Millis.HOUR;
      function f(e) {
        return (
          s.has(e.hostname) && Array.from(d).some(t => e.pathname.startsWith(t))
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
        let t = await u.HTTP.post({
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
            return s;
          },
        });
      var l = n("884691"),
        u = n("79112"),
        i = n("685665"),
        r = n("929423");
      n("424562");
      var o = n("49111"),
        a = n("397336");
      function s(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: s,
            analyticsLocations: d,
            openWithoutBackstack: c = !1,
          } = e,
          { analyticsLocations: f } = (0, i.default)(),
          E = (0, l.useCallback)(() => {
            null != t && (0, r.initGuildIdentitySettings)(t, null != d ? d : f),
              u.default.open(
                o.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? a.ProfileCustomizationSubsection.GUILD
                  : a.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: n,
                  analyticsLocation: s,
                  analyticsLocations: d,
                  openWithoutBackstack: c,
                }
              );
          }, [t, n, s, d, c, f]);
        return E;
      }
    },
    467940: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        });
      var l = n("37983"),
        u = n("884691"),
        i = n("446674"),
        r = n("77078"),
        o = n("272030"),
        a = n("838446"),
        s = n("158534"),
        d = n("997289"),
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
        S = n("459870"),
        T = n("325882"),
        A = n("625187"),
        I = n("806179"),
        g = n("97508"),
        N = n("49111"),
        y = n("782340"),
        R = (0, s.default)(
          (0, a.default)(
            function (e) {
              var t;
              let {
                  user: n,
                  guildId: a,
                  channelId: s,
                  context: N,
                  onSelect: R,
                  moderationAlertId: b,
                  analyticsLocation: L,
                  analyticsLocations: O,
                  onCloseContextMenu: U,
                  showTransferOwnershipItem: D,
                } = e,
                { analyticsLocations: P } = (0, f.default)(
                  c.default.CONTEXT_MENU
                ),
                G = (0, d.useAnalyticsContext)(),
                x =
                  null !== (t = null == O ? void 0 : O[0]) && void 0 !== t
                    ? t
                    : P[0],
                w = (0, m.useTrackModerationAction)(a, {
                  location: x,
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
                H = u.useCallback(() => {
                  w(m.ModerationActionType.COPY_ID);
                }, [w]),
                j = (0, i.useStateFromStores)(
                  [h.default],
                  () => h.default.isMember(a, n.id),
                  [a, n.id]
                ),
                B = (0, I.default)(n.id, a),
                V = (0, p.default)(n.id, N),
                k = (0, _.default)({
                  guildId: a,
                  userId: n.id,
                  analyticsLocation: null != L ? L : G.location,
                  analyticsLocations: [x],
                  context: N,
                }),
                W = (0, v.default)(n, x),
                Y = (0, C.default)(n, a, null != s ? s : F, x),
                X = (0, T.default)(s, b),
                K = (0, A.default)(n, a),
                Z = (0, g.default)(n.id, a, !1, x),
                z = (0, E.default)({
                  id: n.id,
                  label: y.default.Messages.COPY_ID_USER,
                  onSuccess: H,
                }),
                q = (0, S.default)(n, a),
                J = !!(null == n ? void 0 : n.isNonUserBot());
              return (0, l.jsxs)(r.Menu, {
                navId: "user-context",
                onClose: () => {
                  (0, o.closeContextMenu)(), null == U || U();
                },
                "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: R,
                children: [
                  !J &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)(r.MenuGroup, { children: [B, V] }),
                        (0, l.jsxs)(r.MenuGroup, { children: [k, W] }),
                        j &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(r.MenuGroup, { children: Y }),
                              (0, l.jsxs)(r.MenuGroup, { children: [Z, q] }),
                            ],
                          }),
                        null != b ? X : null,
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
        s = n("49111"),
        d = n("782340");
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
            type: s.RelationshipTypes.BLOCKED,
          });
        }
        return (0, l.jsx)(i.MenuItem, {
          id: "block",
          label: f ? d.default.Messages.UNBLOCK : d.default.Messages.BLOCK,
          action: () =>
            f
              ? r.default.unblockUser(n, { location: t })
              : (0, i.openModal)(t =>
                  (0, l.jsx)(i.ConfirmModal, {
                    header: d.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                      name: e.username,
                    }),
                    confirmText: d.default.Messages.BLOCK,
                    cancelText: d.default.Messages.CANCEL,
                    onConfirm: E,
                    ...t,
                    children: (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      children:
                        d.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
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
        s = n("42203"),
        d = n("377253"),
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
            [s.default],
            () => s.default.getChannel(e),
            [e]
          ),
          m = (0, u.useStateFromStores)([d.default], () =>
            null != e && null != t ? d.default.getMessage(e, t) : null
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
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        i = n("77078"),
        r = n("305961"),
        o = n("697218"),
        a = n("782340");
      function s(e, t) {
        let s = (0, u.useStateFromStores)([o.default], () =>
            o.default.getCurrentUser()
          ),
          d = (0, u.useStateFromStores)([r.default], () =>
            r.default.getGuild(t)
          );
        return null == d ||
          null == s ||
          e.id === d.ownerId ||
          e.bot ||
          !d.isOwnerWithRequiredMfaLevel(s)
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
                    (0, l.jsx)(t, { ...n, guild: d, fromUser: s, toUser: e });
                }),
            });
      }
    },
    806179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983"),
        u = n("884691"),
        i = n("77078"),
        r = n("244201"),
        o = n("685665"),
        a = n("401642"),
        s = n("599110"),
        d = n("49111"),
        c = n("782340");
      function f(e, t, n) {
        let f = u.useContext(s.AnalyticsContext),
          { analyticsLocations: E } = (0, o.default)(),
          _ = (0, r.useWindowDispatch)();
        return (0, l.jsx)(i.MenuItem, {
          id: "user-profile",
          label: c.default.Messages.PROFILE,
          action: () => {
            (0, a.openUserProfileModal)({
              userId: e,
              guildId: null != t ? t : void 0,
              channelId: null != n ? n : void 0,
              sourceAnalyticsLocations: E,
              analyticsLocation: f.location,
            }),
              _.dispatch(d.ComponentActions.POPOUT_CLOSE);
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
            return s;
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
            channelId: s,
            messageId: d,
            roleId: c,
            friendToken: f,
            autoFocusNote: E,
            analyticsLocation: _,
            sourceAnalyticsLocations: m,
          } = e,
          h = i.default.getUser(t),
          M = a !== o.ME ? a : void 0;
        if (null == h)
          return (0, u.fetchProfile)(t, { friendToken: f, guildId: M }).then(
            () => {
              l.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: t,
                section: n,
                guildId: a,
                channelId: s,
                messageId: d,
                roleId: c,
                friendToken: f,
                autoFocusNote: E,
                analyticsLocation: _,
                sourceAnalyticsLocations: m,
              });
            }
          );
        (0, r.default)(t, h.getAvatarURL(void 0, 80), {
          withMutualGuilds: !0,
          friendToken: f,
          guildId: M,
        }),
          l.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            section: n,
            guildId: a,
            channelId: s,
            messageId: d,
            roleId: c,
            friendToken: f,
            autoFocusNote: E,
            analyticsLocation: _,
            sourceAnalyticsLocations: m,
          });
      }
      function s() {
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
//# sourceMappingURL=76681551776498e0aee0.js.map

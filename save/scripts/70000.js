(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70000"],
  {
    352674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("913144"),
        l = {
          startTyping(e) {
            i.default.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
          },
          stopTyping(e) {
            i.default.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
          },
        };
    },
    997289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAnalyticsContext: function () {
            return u;
          },
        });
      var i = n("884691"),
        l = n("599110");
      let u = () => i.useContext(l.AnalyticsContext);
    },
    837707: function (e, t, n) {
      "use strict";
      function i(e) {
        if (null != e) {
          if ("activitySessionId" in e) return e.activitySessionId;
          if ("instanceId" in e) return e.instanceId;
          if ("activity_id" in e) return e.activity_id;
        }
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
    },
    406043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCurrentUserCommunicationDisabled: function () {
            return a;
          },
          default: function () {
            return s;
          },
          userCommunicationDisabled: function () {
            return c;
          },
        });
      var i = n("446674"),
        l = n("26989"),
        u = n("697218"),
        r = n("509");
      function a(e) {
        let t = (0, i.useStateFromStores)([u.default], () =>
          u.default.getCurrentUser()
        );
        return s(null == t ? void 0 : t.id, e);
      }
      function o(e, t, n) {
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
        let n = (0, i.useStateFromStores)(
          [l.default],
          () => o(e, t, l.default),
          [t, e]
        );
        return d(n);
      }
      function c(e, t) {
        let n = o(e, t, l.default);
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
            return a;
          },
        });
      var i = n("812204"),
        l = n("862205");
      let u = (0, l.createExperiment)({
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
              location: l = i.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = u.getCurrentConfig(
              { guildId: e, location: l },
              { autoTrackExposure: t, disable: n }
            );
          return r;
        },
        a = function (e) {
          let {
              autoTrackExposure: t = !1,
              disable: n = !1,
              location: l = i.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = u.useExperiment(
              { guildId: null != e ? e : void 0, location: l },
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
      var i = n("316693"),
        l = n("446674"),
        u = n("305961"),
        r = n("697218"),
        a = n("991170"),
        o = n("209700"),
        d = n("562980");
      let s = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [u.default, r.default];
          if (null == e) return !1;
          let [n, l] = t,
            o = n.getGuild(e);
          if (null == o) return !1;
          let s = l.getCurrentUser(),
            c = i.default.hasAny(
              a.default.computePermissions({
                user: s,
                context: o,
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
          let i = s(e),
            l = (0, o.isInGuildMemberModViewExperiment)(e, {
              autoTrackExposure: t,
              disable: !i,
              location: n,
            });
          return i && l;
        };
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = (0, l.useStateFromStores)(
            [u.default, r.default],
            () => s(e, [u.default, r.default]),
            [e]
          ),
          a = (0, o.useGuildMemberModViewExperiment)(e, {
            autoTrackExposure: t,
            disable: !i,
            location: n,
          });
        return i && a;
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
            return u;
          },
          useTrackMemberFilterSafetyFlagsUsed: function () {
            return M;
          },
          ModerationActionType: function () {
            return r;
          },
          useTrackModerationAction: function () {
            return h;
          },
          trackMembersPageViewed: function () {
            return T;
          },
        });
      var i,
        l,
        u,
        r,
        a = n("884691"),
        o = n("812204"),
        d = n("716241"),
        s = n("271938"),
        c = n("599110"),
        f = n("49111");
      function E(e, t, n) {
        var i;
        let l = {
          ...t,
          ...(0, d.collectGuildAnalyticsMetadata)(
            null !== (i = t.guild_id) && void 0 !== i ? i : n
          ),
        };
        c.default.track(e, l);
      }
      function _(e) {
        let t = a.useCallback(
          t => {
            !(function (e) {
              let t = { guild_id: e, location: o.default.MEMBER_SAFETY_PAGE };
              E(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
          },
          [e]
        );
        return t;
      }
      function m(e) {
        let t = a.useCallback(
          t => {
            !(function (e, t) {
              let n = {
                selected_role_count: t.size,
                guild_id: e,
                location: o.default.MEMBER_SAFETY_PAGE,
              };
              E(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, n);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      ((i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function M(e) {
        let t = a.useCallback(
          t => {
            !(function (e, t) {
              let n = {
                flag_type: t,
                guild_id: e,
                location: o.default.MEMBER_SAFETY_PAGE,
              };
              E(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      function h(e, t) {
        let { location: n, targetUserId: i, targets: l, locations: u } = t,
          r = a.useCallback(
            t => {
              let r = {
                action_type: t,
                mod_user_id: s.default.getId(),
                guild_id: e,
                location: n,
                locations: u,
                target_user_id: null != i ? i : void 0,
                targets: null != l ? l : void 0,
              };
              E(f.AnalyticEvents.MODERATION_ACTION, r);
            },
            [e, n, i, l, u]
          );
        return r;
      }
      function T(e, t) {
        E(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
          guild_id: e,
          location: t,
        });
      }
      ((l = r || (r = {})).BAN = "ban"),
        (l.KICK = "kick"),
        (l.MUTE = "mute"),
        (l.TIMEOUT = "timeout"),
        (l.ADD_ROLE = "add_role"),
        (l.REMOVE_ROLE = "remove_role"),
        (l.COPY_ID = "copy_id"),
        (l.CHANGE_NICKNAME = "change_nickname");
    },
    347895: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchGuildHomeSettings: function () {
            return h;
          },
          fetchNewMemberActions: function () {
            return T;
          },
          selectHomeResourceChannel: function () {
            return C;
          },
          selectNewMemberActionChannel: function () {
            return A;
          },
          completeNewMemberAction: function () {
            return S;
          },
          getBlockForChannelDeletion: function () {
            return v;
          },
        }),
        n("222007"),
        n("808653");
      var i = n("872717"),
        l = n("913144"),
        u = n("819689"),
        r = n("115718"),
        a = n("38654"),
        o = n("144491"),
        d = n("42203"),
        s = n("599110"),
        c = n("299039"),
        f = n("698882"),
        E = n("129092"),
        _ = n("675305"),
        m = n("290886"),
        M = n("49111");
      let h = async e => {
          l.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e,
          });
          try {
            let t = await i.default.get({
                url: M.Endpoints.GUILD_HOME_SETTINGS(e),
                oldFormErrors: !0,
              }),
              n = (0, E.settingsFromServer)(t.body);
            return (
              l.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: n,
              }),
              n
            );
          } catch (t) {
            l.default.dispatch({
              type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
              guildId: e,
            });
          }
        },
        T = async e => {
          if (!a.default.isFullServerPreview(e)) {
            l.default.dispatch({
              type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
              guildId: e,
            });
            try {
              let t = await i.default.get({
                  url: M.Endpoints.GUILD_MEMBER_ACTIONS(e),
                  oldFormErrors: !0,
                }),
                n = (0, E.actionsFromServer)(t.body);
              return (
                l.default.dispatch({
                  type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                  guildId: e,
                  memberActions: n,
                }),
                n
              );
            } catch (t) {
              l.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                guildId: e,
              });
            }
          }
        },
        C = function (e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (
            (l.default.dispatch({
              type: "SELECT_HOME_RESOURCE_CHANNEL",
              guildId: e,
              channelId: t,
            }),
            null == t)
          )
            return;
          let i = d.default.getChannel(t),
            E = f.default.getResourceForChannel(e, t);
          null != e &&
            !a.default.isFullServerPreview(e) &&
            null != i &&
            null != E &&
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: i.id,
              server_guide_channel_type: "resource",
              channel_action_type: -1,
            }),
            n && (0, o.transitionToChannel)(t),
            u.default.jumpToMessage({
              channelId: t,
              messageId: c.default.castChannelIdAsMessageId(t),
              flash: !1,
              jumpType: r.JumpTypes.INSTANT,
            });
        },
        A = (e, t) => {
          l.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: t,
          });
          let n = d.default.getChannel(t),
            i = f.default.getActionForChannel(e, t);
          null != e &&
            !a.default.isFullServerPreview(e) &&
            null != n &&
            null != i &&
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: n.id,
              server_guide_channel_type: "member action",
              channel_action_type: i.actionType,
            }),
            (0, o.transitionToChannel)(t);
        },
        S = (e, t) => {
          if (
            (l.default.dispatch({
              type: "COMPLETE_NEW_MEMBER_ACTION",
              guildId: e,
              channelId: t,
            }),
            a.default.isFullServerPreview(e))
          )
            return;
          let n = d.default.getChannel(t),
            u = f.default.getActionForChannel(e, t);
          if (null != n && null != u) {
            var r, o;
            let t = c.default.keys(
                null !== (r = _.default.getCompletedActions(e)) && void 0 !== r
                  ? r
                  : {}
              ),
              i =
                null !== (o = f.default.getNewMemberActions(e)) && void 0 !== o
                  ? o
                  : [];
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
              guild_id: n.guild_id,
              channel_id: n.id,
              channel_action_type: u.actionType,
              has_completed_all: i.reduce(
                (e, n) => e && t.includes(n.channelId),
                !0
              ),
            });
          }
          i.default.post({ url: M.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t) });
        };
      async function v(e, t) {
        if (null == e) return !1;
        let n = (0, m.canSeeOnboardingHome)(e);
        if (!n) return !1;
        let i = f.default.getSettings(e);
        return (
          i === f.NO_SETTINGS && (await h(e), (i = f.default.getSettings(e))),
          i !== f.NO_SETTINGS &&
            null != i &&
            (null != i.newMemberActions &&
            null != i.newMemberActions.find(e => e.channelId === t)
              ? "todo"
              : null != i.resourceChannels &&
                null != i.resourceChannels.find(e => e.channelId === t) &&
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
            return M;
          },
          RESOURCE_CHANNEL_MAX: function () {
            return h;
          },
          NewMemberActionTypes: function () {
            return l;
          },
          newMemberActionFromServer: function () {
            return T;
          },
          resourceChannelFromServer: function () {
            return C;
          },
          settingsFromServer: function () {
            return A;
          },
          settingsToServer: function () {
            return S;
          },
          actionsFromServer: function () {
            return v;
          },
          isWelcomeMessageEmpty: function () {
            return N;
          },
          isSettingsEmpty: function () {
            return p;
          },
          isSettingsValid: function () {
            return g;
          },
          isChannelValidForResourceChannel: function () {
            return I;
          },
          isChannelValidForNewMemberAction: function () {
            return y;
          },
        });
      var i,
        l,
        u = n("42203"),
        r = n("449008"),
        a = n("991170"),
        o = n("49111");
      let d = 7,
        s = 300,
        c = 7,
        f = 60,
        E = 5,
        _ = 1,
        m = 30,
        M = 200,
        h = 7;
      function T(e) {
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
      function C(e) {
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
      function A(e) {
        if (null == e) return null;
        let {
            welcome_message: t,
            new_member_actions: n,
            resource_channels: i,
            enabled: l,
          } = e,
          a = { authorIds: t.author_ids, message: t.message },
          o = n
            .filter(e =>
              (0, r.isNotNullish)(u.default.getChannel(e.channel_id))
            )
            .map(T),
          d = i
            .filter(e =>
              (0, r.isNotNullish)(u.default.getChannel(e.channel_id))
            )
            .map(C);
        return {
          welcomeMessage: a,
          newMemberActions: o,
          resourceChannels: d,
          enabled: l,
        };
      }
      function S(e, t) {
        var n, i;
        if (null == t) return null;
        let {
            welcomeMessage: l,
            newMemberActions: a,
            resourceChannels: o,
            enabled: d,
          } = t,
          s = {
            author_ids:
              null !== (n = null == l ? void 0 : l.authorIds) && void 0 !== n
                ? n
                : [],
            message:
              null !== (i = null == l ? void 0 : l.message) && void 0 !== i
                ? i
                : "",
          },
          c = (null != a ? a : [])
            .filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, i, l, u, r, a;
              return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (l =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== l
                      ? l
                      : void 0,
                  name:
                    null !==
                      (u =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.name) && void 0 !== u
                      ? u
                      : void 0,
                  animated:
                    null !==
                      (r =
                        null === (i = e.emoji) || void 0 === i
                          ? void 0
                          : i.animated) && void 0 !== r
                      ? r
                      : void 0,
                },
                icon: null !== (a = e.icon) && void 0 !== a ? a : void 0,
              };
            }),
          f = (null != o ? o : [])
            .filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, i, l, u, r, a;
              return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (l =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== l
                      ? l
                      : void 0,
                  name:
                    null !==
                      (u =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.name) && void 0 !== u
                      ? u
                      : void 0,
                  animated:
                    null !==
                      (r =
                        null === (i = e.emoji) || void 0 === i
                          ? void 0
                          : i.animated) && void 0 !== r
                      ? r
                      : void 0,
                },
                icon: null !== (a = e.icon) && void 0 !== a ? a : void 0,
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
      ((i = l || (l = {}))[(i.VIEW = 0)] = "VIEW"), (i[(i.CHAT = 1)] = "CHAT");
      let v = e => {
        if (null == e) return null;
        let t = {};
        for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t;
      };
      function N(e) {
        return (
          null == e ||
          ((null == e.message || !(e.message.length > 0)) &&
            (null == e.authorIds || !(e.authorIds.length > 0)) &&
            !0)
        );
      }
      function p(e) {
        return (
          null == e ||
          (!!N(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)) &&
            !0)
        );
      }
      function g(e) {
        var t, n;
        return (
          null != e &&
          (!!p(e) ||
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
      function I(e) {
        return (
          e.type === o.ChannelTypes.GUILD_TEXT &&
          !a.default.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) &&
          a.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
        );
      }
      function y(e) {
        switch (e.type) {
          case o.ChannelTypes.GUILD_TEXT:
          case o.ChannelTypes.GUILD_ANNOUNCEMENT:
          case o.ChannelTypes.GUILD_FORUM:
          case o.ChannelTypes.GUILD_MEDIA:
            return a.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e);
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
            return l;
          },
        });
      var i = n("862205");
      let l = (0, i.createExperiment)({
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
            return T;
          },
          maybeRefreshAttachmentUrl: function () {
            return A;
          },
        }),
        n("222007");
      var i,
        l = n("872717"),
        u = n("718517"),
        r = n("253981"),
        a = n("519841"),
        o = n("49111");
      let d = new Set([
          window.GLOBAL_ENV.CDN_HOST,
          null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i
            ? void 0
            : i.substring(2),
        ]),
        s = new Set(["/attachments/", "/ephemeral-attachments/"]),
        c = 1 * u.default.Millis.HOUR;
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
          return isNaN(n) ? void 0 : n * u.default.Millis.SECOND;
        })(e);
        return null == t || t <= Date.now() + c;
      }
      function m(e) {
        let t = r.default.toURLSafe(e.url);
        return null != t && _(t);
      }
      function M(e) {
        if (null == e) return !1;
        let t = r.default.toURLSafe(e.url);
        return !!(null != t && f(t)) && _(t);
      }
      function h(e) {
        var t;
        return (
          M(e.image) ||
          (null === (t = e.images) || void 0 === t ? void 0 : t.some(M)) ||
          M(e.video)
        );
      }
      function T(e) {
        return e.attachments.some(m) || e.embeds.some(h);
      }
      async function C(e) {
        let t = await l.default.post({
          url: o.Endpoints.ATTACHMENTS_REFRESH_URLS,
          body: { attachment_urls: [e] },
        });
        return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
      }
      async function A(e) {
        if (
          !a.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "link_clicked",
          }).enabled
        )
          return e;
        let t = r.default.toURLSafe(e);
        if (null == t || !_(t)) return e;
        let n = await C(e);
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
      var i = n("884691"),
        l = n("79112"),
        u = n("685665"),
        r = n("929423");
      n("424562");
      var a = n("49111"),
        o = n("397336");
      function d(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: d,
            analyticsLocations: s,
            openWithoutBackstack: c = !1,
          } = e,
          { analyticsLocations: f } = (0, u.default)(),
          E = (0, i.useCallback)(() => {
            null != t && (0, r.initGuildIdentitySettings)(t, null != s ? s : f),
              l.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != t
                  ? o.ProfileCustomizationSubsection.GUILD
                  : o.ProfileCustomizationSubsection.USER_PROFILE,
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
    85166: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        r = n("42203"),
        a = n("305961"),
        o = n("957255"),
        d = n("697218"),
        s = n("244480"),
        c = n("325861"),
        f = n("49111"),
        E = n("782340");
      function _(e, t, n) {
        var _;
        let m = r.default.getChannel(n),
          M = (0, l.useStateFromStores)(
            [a.default],
            () => a.default.getGuild(t),
            [t]
          ),
          h = (0, l.useStateFromStores)(
            [c.default],
            () => c.default.getPermissionsForUser(e.id, n),
            [n, e.id]
          ),
          T =
            (null === (_ = d.default.getCurrentUser()) || void 0 === _
              ? void 0
              : _.id) === e.id,
          C = (0, l.useStateFromStores)(
            [o.default],
            () =>
              null != n &&
              o.default.canWithPartialContext(f.Permissions.MUTE_MEMBERS, {
                channelId: n,
              }),
            [n]
          );
        return null != m && null != M && (C || T) && h.speaker
          ? (0, i.jsx)(u.MenuItem, {
              id: "audience",
              label: T
                ? E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
                : E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                T
                  ? (0, s.moveSelfToAudience)(m)
                  : (0, s.moveUserToAudience)(e, m);
              },
            })
          : null;
      }
    },
    834247: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("272030"),
        r = n("838446"),
        a = n("158534"),
        o = n("798609"),
        d = n("846883"),
        s = n("812204"),
        c = n("243288"),
        f = n("321135"),
        E = n("873254"),
        _ = n("861370"),
        m = n("230947"),
        M = n("726750"),
        h = n("85166"),
        T = n("170990"),
        C = n("304582"),
        A = n("72057"),
        S = n("300925"),
        v = n("563816"),
        N = n("489836"),
        p = n("406703"),
        g = n("502533"),
        I = n("314838"),
        y = n("383161"),
        U = n("421602"),
        L = n("459870"),
        R = n("692986"),
        O = n("806179"),
        b = n("97508"),
        G = n("816106"),
        D = n("623879"),
        F = n("49111"),
        H = n("782340"),
        w = (0, a.default)(
          (0, r.default)(
            function (e) {
              let {
                  user: t,
                  guildId: n,
                  channel: r,
                  showMediaItems: a = !1,
                  showChatItems: s = !0,
                  showChannelCallItems: w = !1,
                  showModalItems: P = !0,
                  showStageChannelItems: j = !1,
                  context: x,
                  onSelect: k,
                  onHeightUpdate: V,
                } = e,
                B = {
                  page: F.AnalyticsPages.GUILD_CHANNEL,
                  section: F.AnalyticsSections.CHAT_USERNAME,
                  object: F.AnalyticsObjects.CONTEXT_MENU_ITEM,
                },
                W = (0, O.default)(t.id, n, r.id),
                X = (0, y.default)(t, n, x),
                Y = (0, U.default)(t.id, x),
                z = (0, D.default)(t.id),
                K = (0, p.default)(t, x),
                q = (0, A.default)({ user: t, guildId: n, context: x }),
                J = (0, C.default)(t),
                Q = (0, G.default)(t.id),
                Z = (0, R.default)(t.id),
                $ = (0, m.default)({
                  guildId: n,
                  userId: t.id,
                  analyticsLocation: B,
                  context: x,
                }),
                ee = (0, I.default)(t, n),
                et = (0, d.default)(null, t),
                en = (0, T.default)(t),
                ei = (0, N.default)(t),
                el = (0, S.default)(t, n, r.id),
                eu = (0, b.default)(t.id, n),
                er = (0, L.default)(t, n),
                ea = (0, _.default)({
                  id: t.id,
                  label: H.default.Messages.COPY_ID_USER,
                }),
                eo = (0, g.default)(t.id, r.id),
                ed = (0, f.default)(t.id),
                es = (0, c.default)(r.id),
                ec = (0, M.default)(t),
                ef = (0, h.default)(t, n, r.id),
                eE = (0, v.default)({
                  commandType: o.ApplicationCommandType.USER,
                  commandTargetId: t.id,
                  channel: r,
                  guildId: n,
                  onHeightUpdate: V,
                  context: x,
                }),
                e_ = (0, E.default)(t.id),
                em = t.isNonUserBot();
              return (0, i.jsxs)(l.Menu, {
                navId: "user-context",
                onClose: u.closeContextMenu,
                "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: k,
                children: [
                  !em &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsxs)(l.MenuGroup, { children: [ec, j && ef] }),
                        (0, i.jsxs)(l.MenuGroup, {
                          children: [P && W, s && X, Y, K, P && q, P && J, z],
                        }),
                        a && (0, i.jsx)(l.MenuGroup, { children: Q }),
                        (0, i.jsx)(l.MenuGroup, { children: P && et }),
                        (0, i.jsxs)(l.MenuGroup, {
                          children: [
                            a && Z,
                            a && eo,
                            P && $,
                            eE,
                            P && ee,
                            en,
                            P && ei,
                            w && e_,
                          ],
                        }),
                        (0, i.jsx)(l.MenuGroup, { children: el }),
                        (0, i.jsxs)(l.MenuGroup, { children: [eu, er] }),
                        w && (0, i.jsxs)(l.MenuGroup, { children: [es, ed] }),
                      ],
                    }),
                  (0, i.jsx)(l.MenuGroup, { children: ea }),
                ],
              });
            },
            { object: F.AnalyticsObjects.CONTEXT_MENU }
          ),
          [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU]
        );
    },
    383161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          mentionUser: function () {
            return _;
          },
          default: function () {
            return m;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        r = n("352674"),
        a = n("42203"),
        o = n("957255"),
        d = n("18494"),
        s = n("659500"),
        c = n("158998"),
        f = n("49111"),
        E = n("782340");
      function _(e, t) {
        let { id: n } = e,
          i = "@".concat(c.default.getUserTag(e, { decoration: "never" }));
        s.ComponentDispatch.dispatchToLastSubscribed(
          f.ComponentActions.INSERT_TEXT,
          { plainText: i, rawText: "<@".concat(n, ">") }
        ),
          null != t && r.default.startTyping(t);
      }
      function m(e, t, n) {
        let [r, s] = (0, l.useStateFromStoresArray)(
            [d.default, a.default, o.default],
            () => {
              let e = d.default.getChannelId(t),
                n = a.default.getChannel(e),
                i =
                  null != n &&
                  (n.isMultiUserDM() ||
                    o.default.can(f.Permissions.SEND_MESSAGES, n));
              return [e, i];
            },
            [t]
          ),
          c = n === f.AppContext.POPOUT;
        return !s || c
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "mention",
              label: E.default.Messages.MENTION,
              action: function () {
                _(e, r);
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=2dc2af4879f4512d4777.js.map

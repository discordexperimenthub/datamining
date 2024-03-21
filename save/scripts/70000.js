(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70000"],
  {
    352674: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return l;
          },
        });
      var i = t("913144"),
        l = {
          startTyping(e) {
            i.default.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
          },
          stopTyping(e) {
            i.default.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
          },
        };
    },
    997289: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          useAnalyticsContext: function () {
            return u;
          },
        });
      var i = t("884691"),
        l = t("599110");
      let u = () => i.useContext(l.AnalyticsContext);
    },
    837707: function (e, n, t) {
      "use strict";
      function i(e) {
        if (null != e) {
          if ("activitySessionId" in e) return e.activitySessionId;
          if ("instanceId" in e) return e.instanceId;
          if ("activity_id" in e) return e.activity_id;
        }
      }
      t.r(n),
        t.d(n, {
          default: function () {
            return i;
          },
        });
    },
    406043: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
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
      var i = t("446674"),
        l = t("26989"),
        u = t("697218"),
        r = t("509");
      function a(e) {
        let n = (0, i.useStateFromStores)([u.default], () =>
          u.default.getCurrentUser()
        );
        return s(null == n ? void 0 : n.id, e);
      }
      function o(e, n, t) {
        return null != n && null != e ? t.getMember(n, e) : null;
      }
      function d(e) {
        var n;
        return [
          null !== (n = null == e ? void 0 : e.communicationDisabledUntil) &&
          void 0 !== n
            ? n
            : null,
          (0, r.isMemberCommunicationDisabled)(e),
        ];
      }
      function s(e, n) {
        let t = (0, i.useStateFromStores)(
          [l.default],
          () => o(e, n, l.default),
          [n, e]
        );
        return d(t);
      }
      function c(e, n) {
        let t = o(e, n, l.default);
        return d(t);
      }
    },
    209700: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          isInGuildMemberModViewExperiment: function () {
            return r;
          },
          useGuildMemberModViewExperiment: function () {
            return a;
          },
        });
      var i = t("812204"),
        l = t("862205");
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
              autoTrackExposure: n = !1,
              disable: t = !1,
              location: l = i.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = u.getCurrentConfig(
              { guildId: e, location: l },
              { autoTrackExposure: n, disable: t }
            );
          return r;
        },
        a = function (e) {
          let {
              autoTrackExposure: n = !1,
              disable: t = !1,
              location: l = i.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = u.useExperiment(
              { guildId: null != e ? e : void 0, location: l },
              { autoTrackExposure: n, disable: t }
            );
          return r;
        };
    },
    459824: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          canAccessGuildMemberModViewWithExperiment: function () {
            return c;
          },
          useCanAccessGuildMemberModView: function () {
            return f;
          },
        }),
        t("222007");
      var i = t("316693"),
        l = t("446674"),
        u = t("305961"),
        r = t("697218"),
        a = t("991170"),
        o = t("209700"),
        d = t("562980");
      let s = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [u.default, r.default];
          if (null == e) return !1;
          let [t, l] = n,
            o = t.getGuild(e);
          if (null == o) return !1;
          let s = l.getCurrentUser(),
            c = i.hasAny(
              a.computePermissions({ user: s, context: o, checkElevated: !1 }),
              d.MemberSafetyPagePermissions
            );
          return c;
        },
        c = function (e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = arguments.length > 2 ? arguments[2] : void 0;
          if (null == e) return !1;
          let i = s(e),
            l = (0, o.isInGuildMemberModViewExperiment)(e, {
              autoTrackExposure: n,
              disable: !i,
              location: t,
            });
          return i && l;
        };
      function f(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0,
          i = (0, l.useStateFromStores)(
            [u.default, r.default],
            () => s(e, [u.default, r.default]),
            [e]
          ),
          a = (0, o.useGuildMemberModViewExperiment)(e, {
            autoTrackExposure: n,
            disable: !i,
            location: t,
          });
        return i && a;
      }
    },
    130037: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
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
        a = t("884691"),
        o = t("812204"),
        d = t("716241"),
        s = t("271938"),
        c = t("599110"),
        f = t("49111");
      function E(e, n, t) {
        var i;
        let l = {
          ...n,
          ...(0, d.collectGuildAnalyticsMetadata)(
            null !== (i = n.guild_id) && void 0 !== i ? i : t
          ),
        };
        c.default.track(e, l);
      }
      function _(e) {
        let n = a.useCallback(
          n => {
            !(function (e) {
              let n = { guild_id: e, location: o.default.MEMBER_SAFETY_PAGE };
              E(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
          },
          [e]
        );
        return n;
      }
      function m(e) {
        let n = a.useCallback(
          n => {
            !(function (e, n) {
              let t = {
                selected_role_count: n.size,
                guild_id: e,
                location: o.default.MEMBER_SAFETY_PAGE,
              };
              E(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
          },
          [e]
        );
        return n;
      }
      ((i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function M(e) {
        let n = a.useCallback(
          n => {
            !(function (e, n) {
              let t = {
                flag_type: n,
                guild_id: e,
                location: o.default.MEMBER_SAFETY_PAGE,
              };
              E(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
          },
          [e]
        );
        return n;
      }
      function h(e, n) {
        let { location: t, targetUserId: i, targets: l, locations: u } = n,
          r = a.useCallback(
            n => {
              let r = {
                action_type: n,
                mod_user_id: s.default.getId(),
                guild_id: e,
                location: t,
                locations: u,
                target_user_id: null != i ? i : void 0,
                targets: null != l ? l : void 0,
              };
              E(f.AnalyticEvents.MODERATION_ACTION, r);
            },
            [e, t, i, l, u]
          );
        return r;
      }
      function T(e, n) {
        E(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
          guild_id: e,
          location: n,
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
    347895: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
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
        t("222007"),
        t("808653");
      var i = t("872717"),
        l = t("913144"),
        u = t("819689"),
        r = t("115718"),
        a = t("38654"),
        o = t("144491"),
        d = t("42203"),
        s = t("599110"),
        c = t("299039"),
        f = t("698882"),
        E = t("129092"),
        _ = t("675305"),
        m = t("290886"),
        M = t("49111");
      let h = async e => {
          l.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e,
          });
          try {
            let n = await i.default.get({
                url: M.Endpoints.GUILD_HOME_SETTINGS(e),
                oldFormErrors: !0,
              }),
              t = (0, E.settingsFromServer)(n.body);
            return (
              l.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: t,
              }),
              t
            );
          } catch (n) {
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
              let n = await i.default.get({
                  url: M.Endpoints.GUILD_MEMBER_ACTIONS(e),
                  oldFormErrors: !0,
                }),
                t = (0, E.actionsFromServer)(n.body);
              return (
                l.default.dispatch({
                  type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                  guildId: e,
                  memberActions: t,
                }),
                t
              );
            } catch (n) {
              l.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                guildId: e,
              });
            }
          }
        },
        C = function (e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (
            (l.default.dispatch({
              type: "SELECT_HOME_RESOURCE_CHANNEL",
              guildId: e,
              channelId: n,
            }),
            null == n)
          )
            return;
          let i = d.default.getChannel(n),
            E = f.default.getResourceForChannel(e, n);
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
            t && (0, o.transitionToChannel)(n),
            u.default.jumpToMessage({
              channelId: n,
              messageId: c.default.castChannelIdAsMessageId(n),
              flash: !1,
              jumpType: r.JumpTypes.INSTANT,
            });
        },
        A = (e, n) => {
          l.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: n,
          });
          let t = d.default.getChannel(n),
            i = f.default.getActionForChannel(e, n);
          null != e &&
            !a.default.isFullServerPreview(e) &&
            null != t &&
            null != i &&
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: t.id,
              server_guide_channel_type: "member action",
              channel_action_type: i.actionType,
            }),
            (0, o.transitionToChannel)(n);
        },
        S = (e, n) => {
          if (
            (l.default.dispatch({
              type: "COMPLETE_NEW_MEMBER_ACTION",
              guildId: e,
              channelId: n,
            }),
            a.default.isFullServerPreview(e))
          )
            return;
          let t = d.default.getChannel(n),
            u = f.default.getActionForChannel(e, n);
          if (null != t && null != u) {
            var r, o;
            let n = c.default.keys(
                null !== (r = _.default.getCompletedActions(e)) && void 0 !== r
                  ? r
                  : {}
              ),
              i =
                null !== (o = f.default.getNewMemberActions(e)) && void 0 !== o
                  ? o
                  : [];
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
              guild_id: t.guild_id,
              channel_id: t.id,
              channel_action_type: u.actionType,
              has_completed_all: i.reduce(
                (e, t) => e && n.includes(t.channelId),
                !0
              ),
            });
          }
          i.default.post({ url: M.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, n) });
        };
      async function v(e, n) {
        if (null == e) return !1;
        let t = (0, m.canSeeOnboardingHome)(e);
        if (!t) return !1;
        let i = f.default.getSettings(e);
        return (
          i === f.NO_SETTINGS && (await h(e), (i = f.default.getSettings(e))),
          i !== f.NO_SETTINGS &&
            null != i &&
            (null != i.newMemberActions &&
            null != i.newMemberActions.find(e => e.channelId === n)
              ? "todo"
              : null != i.resourceChannels &&
                null != i.resourceChannels.find(e => e.channelId === n) &&
                "resource")
        );
      }
    },
    129092: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
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
        u = t("42203"),
        r = t("449008"),
        a = t("991170"),
        o = t("49111");
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
        var n;
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
          icon: null !== (n = e.icon) && void 0 !== n ? n : null,
        };
      }
      function C(e) {
        var n, t;
        return {
          channelId: e.channel_id,
          title: e.title,
          description: null !== (n = e.description) && void 0 !== n ? n : "",
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
      function A(e) {
        if (null == e) return null;
        let {
            welcome_message: n,
            new_member_actions: t,
            resource_channels: i,
            enabled: l,
          } = e,
          a = { authorIds: n.author_ids, message: n.message },
          o = t
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
      function S(e, n) {
        var t, i;
        if (null == n) return null;
        let {
            welcomeMessage: l,
            newMemberActions: a,
            resourceChannels: o,
            enabled: d,
          } = n,
          s = {
            author_ids:
              null !== (t = null == l ? void 0 : l.authorIds) && void 0 !== t
                ? t
                : [],
            message:
              null !== (i = null == l ? void 0 : l.message) && void 0 !== i
                ? i
                : "",
          },
          c = (null != a ? a : [])
            .filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId)))
            .map(e => {
              var n, t, i, l, u, r, a;
              return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (l =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.id) && void 0 !== l
                      ? l
                      : void 0,
                  name:
                    null !==
                      (u =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.name) && void 0 !== u
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
              var n, t, i, l, u, r, a;
              return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (l =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.id) && void 0 !== l
                      ? l
                      : void 0,
                  name:
                    null !==
                      (u =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.name) && void 0 !== u
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
        let n = {};
        for (let t in e.channel_actions) n[t] = e.channel_actions[t].completed;
        return n;
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
        var n, t;
        return (
          null != e &&
          (!!p(e) ||
            ((null === (n = e.welcomeMessage) || void 0 === n
              ? void 0
              : n.message) != null &&
              !(e.welcomeMessage.message.length < d) &&
              (null === (t = e.welcomeMessage) || void 0 === t
                ? void 0
                : t.authorIds) != null &&
              0 !== e.welcomeMessage.authorIds.length &&
              null != e.newMemberActions &&
              !(e.newMemberActions.length < 3) &&
              !0))
        );
      }
      function I(e) {
        return (
          e.type === o.ChannelTypes.GUILD_TEXT &&
          !a.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) &&
          a.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
        );
      }
      function y(e) {
        switch (e.type) {
          case o.ChannelTypes.GUILD_TEXT:
          case o.ChannelTypes.GUILD_ANNOUNCEMENT:
          case o.ChannelTypes.GUILD_FORUM:
          case o.ChannelTypes.GUILD_MEDIA:
            return a.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e);
          default:
            return !1;
        }
      }
    },
    519841: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          AttachmentLinkRefreshExperiment: function () {
            return l;
          },
        });
      var i = t("862205");
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
    787336: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
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
        t("222007");
      var i,
        l = t("872717"),
        u = t("718517"),
        r = t("253981"),
        a = t("519841"),
        o = t("49111");
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
          d.has(e.hostname) && Array.from(s).some(n => e.pathname.startsWith(n))
        );
      }
      function E(e) {
        let n = r.default.toURLSafe(e);
        if (null == n) return e;
        for (let e of ["ex", "is", "hm"]) n.searchParams.delete(e);
        return n;
      }
      function _(e) {
        let n = (function (e) {
          let n = e.searchParams.get("ex"),
            t = parseInt(null != n ? n : "", 16);
          return isNaN(t) ? void 0 : t * u.default.Millis.SECOND;
        })(e);
        return null == n || n <= Date.now() + c;
      }
      function m(e) {
        let n = r.default.toURLSafe(e.url);
        return null != n && _(n);
      }
      function M(e) {
        if (null == e) return !1;
        let n = r.default.toURLSafe(e.url);
        return !!(null != n && f(n)) && _(n);
      }
      function h(e) {
        var n;
        return (
          M(e.image) ||
          (null === (n = e.images) || void 0 === n ? void 0 : n.some(M)) ||
          M(e.video)
        );
      }
      function T(e) {
        return e.attachments.some(m) || e.embeds.some(h);
      }
      async function C(e) {
        let n = await l.default.post({
          url: o.Endpoints.ATTACHMENTS_REFRESH_URLS,
          body: { attachment_urls: [e] },
        });
        return n.ok ? n.body.refreshed_urls[0].refreshed : void 0;
      }
      async function A(e) {
        if (
          !a.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "link_clicked",
          }).enabled
        )
          return e;
        let n = r.default.toURLSafe(e);
        if (null == n || !_(n)) return e;
        let t = await C(e);
        return null != t ? t : e;
      }
    },
    38766: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var i = t("884691"),
        l = t("79112"),
        u = t("685665"),
        r = t("929423");
      t("424562");
      var a = t("49111"),
        o = t("397336");
      function d(e) {
        let {
            guild: n,
            scrollPosition: t,
            analyticsLocation: d,
            analyticsLocations: s,
            openWithoutBackstack: c = !1,
          } = e,
          { analyticsLocations: f } = (0, u.default)(),
          E = (0, i.useCallback)(() => {
            null != n && (0, r.initGuildIdentitySettings)(n, null != s ? s : f),
              l.default.open(
                a.UserSettingsSections.PROFILE_CUSTOMIZATION,
                null != n
                  ? o.ProfileCustomizationSubsection.GUILD
                  : o.ProfileCustomizationSubsection.USER_PROFILE,
                {
                  scrollPosition: t,
                  analyticsLocation: d,
                  analyticsLocations: s,
                  openWithoutBackstack: c,
                }
              );
          }, [n, t, d, s, c, f]);
        return E;
      }
    },
    85166: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          },
        });
      var i = t("37983");
      t("884691");
      var l = t("446674"),
        u = t("77078"),
        r = t("42203"),
        a = t("305961"),
        o = t("957255"),
        d = t("697218"),
        s = t("244480"),
        c = t("325861"),
        f = t("49111"),
        E = t("782340");
      function _(e, n, t) {
        var _;
        let m = r.default.getChannel(t),
          M = (0, l.useStateFromStores)(
            [a.default],
            () => a.default.getGuild(n),
            [n]
          ),
          h = (0, l.useStateFromStores)(
            [c.default],
            () => c.default.getPermissionsForUser(e.id, t),
            [t, e.id]
          ),
          T =
            (null === (_ = d.default.getCurrentUser()) || void 0 === _
              ? void 0
              : _.id) === e.id,
          C = (0, l.useStateFromStores)(
            [o.default],
            () =>
              null != t &&
              o.default.canWithPartialContext(f.Permissions.MUTE_MEMBERS, {
                channelId: t,
              }),
            [t]
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
    834247: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return w;
          },
        });
      var i = t("37983");
      t("884691");
      var l = t("77078"),
        u = t("272030"),
        r = t("838446"),
        a = t("158534"),
        o = t("798609"),
        d = t("846883"),
        s = t("812204"),
        c = t("243288"),
        f = t("321135"),
        E = t("873254"),
        _ = t("861370"),
        m = t("230947"),
        M = t("726750"),
        h = t("85166"),
        T = t("170990"),
        C = t("304582"),
        A = t("72057"),
        S = t("300925"),
        v = t("563816"),
        N = t("489836"),
        p = t("406703"),
        g = t("502533"),
        I = t("314838"),
        y = t("383161"),
        U = t("421602"),
        L = t("459870"),
        R = t("692986"),
        O = t("806179"),
        b = t("97508"),
        G = t("816106"),
        D = t("623879"),
        F = t("49111"),
        H = t("782340"),
        w = (0, a.default)(
          (0, r.default)(
            function (e) {
              let {
                  user: n,
                  guildId: t,
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
                W = (0, O.default)(n.id, t, r.id),
                X = (0, y.default)(n, t, x),
                Y = (0, U.default)(n.id, x),
                z = (0, D.default)(n.id),
                K = (0, p.default)(n, x),
                q = (0, A.default)({ user: n, guildId: t, context: x }),
                J = (0, C.default)(n),
                Q = (0, G.default)(n.id),
                Z = (0, R.default)(n.id),
                $ = (0, m.default)({
                  guildId: t,
                  userId: n.id,
                  analyticsLocation: B,
                  context: x,
                }),
                ee = (0, I.default)(n, t),
                en = (0, d.default)(null, n),
                et = (0, T.default)(n),
                ei = (0, N.default)(n),
                el = (0, S.default)(n, t, r.id),
                eu = (0, b.default)(n.id, t),
                er = (0, L.default)(n, t),
                ea = (0, _.default)({
                  id: n.id,
                  label: H.default.Messages.COPY_ID_USER,
                }),
                eo = (0, g.default)(n.id, r.id),
                ed = (0, f.default)(n.id),
                es = (0, c.default)(r.id),
                ec = (0, M.default)(n),
                ef = (0, h.default)(n, t, r.id),
                eE = (0, v.default)({
                  commandType: o.ApplicationCommandType.USER,
                  commandTargetId: n.id,
                  channel: r,
                  guildId: t,
                  onHeightUpdate: V,
                  context: x,
                }),
                e_ = (0, E.default)(n.id),
                em = n.isNonUserBot();
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
                        (0, i.jsx)(l.MenuGroup, { children: P && en }),
                        (0, i.jsxs)(l.MenuGroup, {
                          children: [
                            a && Z,
                            a && eo,
                            P && $,
                            eE,
                            P && ee,
                            et,
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
    383161: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          mentionUser: function () {
            return _;
          },
          default: function () {
            return m;
          },
        }),
        t("222007");
      var i = t("37983");
      t("884691");
      var l = t("446674"),
        u = t("77078"),
        r = t("352674"),
        a = t("42203"),
        o = t("957255"),
        d = t("18494"),
        s = t("659500"),
        c = t("158998"),
        f = t("49111"),
        E = t("782340");
      function _(e, n) {
        let { id: t } = e,
          i = "@".concat(c.default.getUserTag(e, { decoration: "never" }));
        s.ComponentDispatch.dispatchToLastSubscribed(
          f.ComponentActions.INSERT_TEXT,
          { plainText: i, rawText: "<@".concat(t, ">") }
        ),
          null != n && r.default.startTyping(n);
      }
      function m(e, n, t) {
        let [r, s] = (0, l.useStateFromStoresArray)(
            [d.default, a.default, o.default],
            () => {
              let e = d.default.getChannelId(n),
                t = a.default.getChannel(e),
                i =
                  null != t &&
                  (t.isMultiUserDM() ||
                    o.default.can(f.Permissions.SEND_MESSAGES, t));
              return [e, i];
            },
            [n]
          ),
          c = t === f.AppContext.POPOUT;
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
//# sourceMappingURL=718dda62aa1c66834728.js.map

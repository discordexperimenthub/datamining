(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21993"],
  {
    352674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("913144"),
        i = {
          startTyping(e) {
            l.default.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
          },
          stopTyping(e) {
            l.default.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
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
      var l = n("884691"),
        i = n("599110");
      let u = () => l.useContext(i.AnalyticsContext);
    },
    837707: function (e, t, n) {
      "use strict";
      function l(e) {
        if (null != e) {
          if ("activitySessionId" in e) return e.activitySessionId;
          if ("instanceId" in e) return e.instanceId;
          if ("activity_id" in e) return e.activity_id;
        }
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
    },
    633043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("77078"),
        u = n("175339"),
        r = () =>
          (0, l.jsx)("div", {
            className: u.loadingWrapper,
            children: (0, l.jsx)(i.Dots, { dotRadius: 4, themed: !0 }),
          });
    },
    535348: function (e, t, n) {
      "use strict";
      var l, i;
      n.r(t),
        n.d(t, {
          SelfStreamAndVideoAlertType: function () {
            return l;
          },
        }),
        ((i = l || (l = {}))[(i.STREAM = 0)] = "STREAM"),
        (i[(i.VIDEO = 1)] = "VIDEO");
    },
    301603: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("446674"),
        i = n("629109"),
        u = n("271938"),
        r = n("42887"),
        a = n("49111"),
        o = n("353927");
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.MediaEngineContextTypes.DEFAULT,
          n = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
          d = (0, l.useStateFromStores)(
            [r.default],
            () =>
              r.default.supports(o.Features.DISABLE_VIDEO) &&
              r.default.isVideoEnabled()
          ),
          s = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.isLocalVideoDisabled(n, t),
            [n, t]
          ),
          c = null == e || e === n;
        return [
          c && (d || s),
          s,
          e => {
            let l = e
              ? a.VideoToggleState.DISABLED
              : a.VideoToggleState.MANUAL_ENABLED;
            i.default.setDisableLocalVideo(n, l, t);
          },
        ];
      }
    },
    632616: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("452804"),
        u = n("135230"),
        r = n("535348"),
        a = n("782340");
      function o(e) {
        let { type: t, onConfirm: n, ...o } = e,
          d =
            t === r.SelfStreamAndVideoAlertType.STREAM
              ? a.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : a.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          s =
            t === r.SelfStreamAndVideoAlertType.STREAM
              ? a.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : a.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, l.jsx)(u.default, {
          confirmText: a.default.Messages.CONFIRM,
          secondaryConfirmText: a.default.Messages.DONT_ASK_AGAIN,
          title: d,
          cancelText: a.default.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            i.default.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: s,
          ...o,
        });
      }
    },
    243288: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("446674"),
        u = n("77078"),
        r = n("255397"),
        a = n("191145"),
        o = n("782340");
      function d(e) {
        let t = (0, i.useStateFromStores)([a.default], () =>
          a.default.getVoiceParticipantsHidden(e)
        );
        return (0, l.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.default.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => r.default.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    321135: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("37983");
      n("884691");
      var i = n("446674"),
        u = n("77078"),
        r = n("168973"),
        a = n("301603"),
        o = n("632616"),
        d = n("535348"),
        s = n("353927"),
        c = n("782340");
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.MediaEngineContextTypes.DEFAULT,
          [n, f, E] = (0, a.default)(e, t),
          _ = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.disableHideSelfStreamAndVideoConfirmationAlert
          );
        return n
          ? (0, l.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.default.Messages.SHOW_SELF_VIDEO,
              checked: !f,
              action: () => {
                if (_ || f) return E(!f);
                (0, u.openModal)(e =>
                  (0, l.jsx)(o.default, {
                    ...e,
                    type: d.SelfStreamAndVideoAlertType.VIDEO,
                    onConfirm: () => E(!f),
                  })
                );
              },
            })
          : null;
      }
    },
    873254: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("446674"),
        u = n("77078"),
        r = n("648911"),
        a = n("271938"),
        o = n("42887"),
        d = n("782340"),
        s = n("325483");
      function c(e) {
        let t = (0, u.useModalContext)(),
          c = (0, i.useStateFromStores)([o.default], () =>
            o.default.isVideoEnabled()
          ),
          f = (0, i.useStateFromStores)(
            [a.default],
            () => a.default.getId() === e
          ),
          E = (0, r.default)();
        return (!c || E) && f
          ? (0, l.jsx)(u.MenuItem, {
              id: "change-video-background",
              label: (0, l.jsx)("div", {
                className: s.item,
                children: c
                  ? d.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM
                  : d.default.Messages.CAMERA_PREVIEW_MENU_ITEM,
              }),
              action: function () {
                (0, u.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .el("381736")
                      .then(n.bind(n, "381736"));
                    return t => (0, l.jsx)(e, { ...t, videoEnabled: c });
                  },
                  { modalKey: "camera-preview", contextKey: t }
                );
              },
            })
          : null;
      }
    },
    823026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("424973");
      var l = n("37983"),
        i = n("884691"),
        u = n("446674"),
        r = n("77078"),
        a = n("713841"),
        o = n("79112"),
        d = n("988721"),
        s = n("592407"),
        c = n("305961"),
        f = n("957255"),
        E = n("49111"),
        _ = n("782340");
      function m(e) {
        let { user: t, guildId: n, channel: m, context: M } = e,
          S = c.default.getGuild(n),
          A = (0, u.useStateFromStores)([f.default], () =>
            null != S ? f.default.can(E.Permissions.MANAGE_GUILD, S) : null
          ),
          T = (0, d.useContextIndexState)(m, !0, !0),
          C = (0, d.useUserIndexState)(!0, !0),
          { isUserApp: I, isGuildApp: v } = i.useMemo(() => {
            var e, n, l, i;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let u = Object.values(
                null !==
                  (l =
                    null === (e = T.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== l
                  ? l
                  : {}
              ),
              r = Object.values(
                null !==
                  (i =
                    null === (n = C.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {}
              );
            return {
              isGuildApp: u.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: r.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [T, C, null == t ? void 0 : t.id]),
          h = i.useCallback(() => {
            (null == S ? void 0 : S.id) != null &&
              (s.default.open(S.id, E.GuildSettingsSections.INTEGRATIONS),
              a.default.setSection(
                E.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]),
          p = i.useCallback(() => {
            o.default.open(E.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          N = M === E.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !A || N || (!v && !I)) return null;
        let g = [];
        return (
          v &&
            g.push(
              (0, l.jsx)(
                r.MenuItem,
                {
                  id: "manage-integration",
                  label: _.default.Messages.MANAGE_INTEGRATION,
                  action: h,
                },
                "manage-integration"
              )
            ),
          I &&
            g.push(
              (0, l.jsx)(
                r.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: _.default.Messages.MANAGE_AUTHORIZED_APP,
                  action: p,
                },
                "manage-authorized-app"
              )
            ),
          g
        );
      }
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
      var l = n("446674"),
        i = n("26989"),
        u = n("697218"),
        r = n("509");
      function a(e) {
        let t = (0, l.useStateFromStores)([u.default], () =>
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
        let n = (0, l.useStateFromStores)(
          [i.default],
          () => o(e, t, i.default),
          [t, e]
        );
        return d(n);
      }
      function c(e, t) {
        let n = o(e, t, i.default);
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
      var l = n("812204"),
        i = n("862205");
      let u = (0, i.createExperiment)({
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
              location: i = l.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = u.getCurrentConfig(
              { guildId: e, location: i },
              { autoTrackExposure: t, disable: n }
            );
          return r;
        },
        a = function (e) {
          let {
              autoTrackExposure: t = !1,
              disable: n = !1,
              location: i = l.default.GUILD_MEMBER_MOD_VIEW,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            { enabled: r } = u.useExperiment(
              { guildId: null != e ? e : void 0, location: i },
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
        i = n("446674"),
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
          let [n, i] = t,
            o = n.getGuild(e);
          if (null == o) return !1;
          let s = i.getCurrentUser(),
            c = l.default.hasAny(
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
          let l = s(e),
            i = (0, o.isInGuildMemberModViewExperiment)(e, {
              autoTrackExposure: t,
              disable: !l,
              location: n,
            });
          return l && i;
        };
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          l = (0, i.useStateFromStores)(
            [u.default, r.default],
            () => s(e, [u.default, r.default]),
            [e]
          ),
          a = (0, o.useGuildMemberModViewExperiment)(e, {
            autoTrackExposure: t,
            disable: !l,
            location: n,
          });
        return l && a;
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
            return S;
          },
          trackMembersPageViewed: function () {
            return A;
          },
        });
      var l,
        i,
        u,
        r,
        a = n("884691"),
        o = n("812204"),
        d = n("716241"),
        s = n("271938"),
        c = n("599110"),
        f = n("49111");
      function E(e, t, n) {
        var l;
        let i = {
          ...t,
          ...(0, d.collectGuildAnalyticsMetadata)(
            null !== (l = t.guild_id) && void 0 !== l ? l : n
          ),
        };
        c.default.track(e, i);
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
      ((l = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (l.COMMUNICATION_DISABLED = "communication_disabled"),
        (l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (l.USERNAME_QUARANTINED = "username_quarantined");
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
      function S(e, t) {
        let { location: n, targetUserId: l, targets: i, locations: u } = t,
          r = a.useCallback(
            t => {
              let r = {
                action_type: t,
                mod_user_id: s.default.getId(),
                guild_id: e,
                location: n,
                locations: u,
                target_user_id: null != l ? l : void 0,
                targets: null != i ? i : void 0,
              };
              E(f.AnalyticEvents.MODERATION_ACTION, r);
            },
            [e, n, l, i, u]
          );
        return r;
      }
      function A(e, t) {
        E(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
          guild_id: e,
          location: t,
        });
      }
      ((i = r || (r = {})).BAN = "ban"),
        (i.KICK = "kick"),
        (i.MUTE = "mute"),
        (i.TIMEOUT = "timeout"),
        (i.ADD_ROLE = "add_role"),
        (i.REMOVE_ROLE = "remove_role"),
        (i.COPY_ID = "copy_id"),
        (i.CHANGE_NICKNAME = "change_nickname");
    },
    347895: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchGuildHomeSettings: function () {
            return S;
          },
          fetchNewMemberActions: function () {
            return A;
          },
          selectHomeResourceChannel: function () {
            return T;
          },
          selectNewMemberActionChannel: function () {
            return C;
          },
          completeNewMemberAction: function () {
            return I;
          },
          getBlockForChannelDeletion: function () {
            return v;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("872717"),
        i = n("913144"),
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
      let S = async e => {
          i.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e,
          });
          try {
            let t = await l.default.get({
                url: M.Endpoints.GUILD_HOME_SETTINGS(e),
                oldFormErrors: !0,
              }),
              n = (0, E.settingsFromServer)(t.body);
            return (
              i.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: n,
              }),
              n
            );
          } catch (t) {
            i.default.dispatch({
              type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
              guildId: e,
            });
          }
        },
        A = async e => {
          if (!a.default.isFullServerPreview(e)) {
            i.default.dispatch({
              type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
              guildId: e,
            });
            try {
              let t = await l.default.get({
                  url: M.Endpoints.GUILD_MEMBER_ACTIONS(e),
                  oldFormErrors: !0,
                }),
                n = (0, E.actionsFromServer)(t.body);
              return (
                i.default.dispatch({
                  type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                  guildId: e,
                  memberActions: n,
                }),
                n
              );
            } catch (t) {
              i.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                guildId: e,
              });
            }
          }
        },
        T = function (e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (
            (i.default.dispatch({
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
            !a.default.isFullServerPreview(e) &&
            null != l &&
            null != E &&
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: l.id,
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
        C = (e, t) => {
          i.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: t,
          });
          let n = d.default.getChannel(t),
            l = f.default.getActionForChannel(e, t);
          null != e &&
            !a.default.isFullServerPreview(e) &&
            null != n &&
            null != l &&
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: n.id,
              server_guide_channel_type: "member action",
              channel_action_type: l.actionType,
            }),
            (0, o.transitionToChannel)(t);
        },
        I = (e, t) => {
          if (
            (i.default.dispatch({
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
              l =
                null !== (o = f.default.getNewMemberActions(e)) && void 0 !== o
                  ? o
                  : [];
            s.default.track(M.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
              guild_id: n.guild_id,
              channel_id: n.id,
              channel_action_type: u.actionType,
              has_completed_all: l.reduce(
                (e, n) => e && t.includes(n.channelId),
                !0
              ),
            });
          }
          l.default.post({ url: M.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t) });
        };
      async function v(e, t) {
        if (null == e) return !1;
        let n = (0, m.canSeeOnboardingHome)(e);
        if (!n) return !1;
        let l = f.default.getSettings(e);
        return (
          l === f.NO_SETTINGS && (await S(e), (l = f.default.getSettings(e))),
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
            return M;
          },
          RESOURCE_CHANNEL_MAX: function () {
            return S;
          },
          NewMemberActionTypes: function () {
            return i;
          },
          newMemberActionFromServer: function () {
            return A;
          },
          resourceChannelFromServer: function () {
            return T;
          },
          settingsFromServer: function () {
            return C;
          },
          settingsToServer: function () {
            return I;
          },
          actionsFromServer: function () {
            return v;
          },
          isWelcomeMessageEmpty: function () {
            return h;
          },
          isSettingsEmpty: function () {
            return p;
          },
          isSettingsValid: function () {
            return N;
          },
          isChannelValidForResourceChannel: function () {
            return g;
          },
          isChannelValidForNewMemberAction: function () {
            return O;
          },
        });
      var l,
        i,
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
        S = 7;
      function A(e) {
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
      function T(e) {
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
      function C(e) {
        if (null == e) return null;
        let {
            welcome_message: t,
            new_member_actions: n,
            resource_channels: l,
            enabled: i,
          } = e,
          a = { authorIds: t.author_ids, message: t.message },
          o = n
            .filter(e =>
              (0, r.isNotNullish)(u.default.getChannel(e.channel_id))
            )
            .map(A),
          d = l
            .filter(e =>
              (0, r.isNotNullish)(u.default.getChannel(e.channel_id))
            )
            .map(T);
        return {
          welcomeMessage: a,
          newMemberActions: o,
          resourceChannels: d,
          enabled: i,
        };
      }
      function I(e, t) {
        var n, l;
        if (null == t) return null;
        let {
            welcomeMessage: i,
            newMemberActions: a,
            resourceChannels: o,
            enabled: d,
          } = t,
          s = {
            author_ids:
              null !== (n = null == i ? void 0 : i.authorIds) && void 0 !== n
                ? n
                : [],
            message:
              null !== (l = null == i ? void 0 : i.message) && void 0 !== l
                ? l
                : "",
          },
          c = (null != a ? a : [])
            .filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, l, i, u, r, a;
              return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (i =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== i
                      ? i
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
                        null === (l = e.emoji) || void 0 === l
                          ? void 0
                          : l.animated) && void 0 !== r
                      ? r
                      : void 0,
                },
                icon: null !== (a = e.icon) && void 0 !== a ? a : void 0,
              };
            }),
          f = (null != o ? o : [])
            .filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, l, i, u, r, a;
              return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (i =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== i
                      ? i
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
                        null === (l = e.emoji) || void 0 === l
                          ? void 0
                          : l.animated) && void 0 !== r
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
      ((l = i || (i = {}))[(l.VIEW = 0)] = "VIEW"), (l[(l.CHAT = 1)] = "CHAT");
      let v = e => {
        if (null == e) return null;
        let t = {};
        for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t;
      };
      function h(e) {
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
          (!!h(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)) &&
            !0)
        );
      }
      function N(e) {
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
      function g(e) {
        return (
          e.type === o.ChannelTypes.GUILD_TEXT &&
          !a.default.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) &&
          a.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
        );
      }
      function O(e) {
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
    675305: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var l = n("446674"),
        i = n("913144");
      let u = {},
        r = {},
        a = new Set();
      class o extends l.default.Store {
        getCompletedActions(e) {
          return null == e ? null : r[e];
        }
        hasCompletedActionForChannel(e, t) {
          let n = this.getCompletedActions(e);
          return null != n && null != n[t];
        }
        getState(e) {
          return null == e ? {} : { completedActions: r[e], loading: a.has(e) };
        }
      }
      o.displayName = "GuildOnboardingMemberActionStore";
      var d = new o(i.default, {
        GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function (e) {
          let { guildId: t } = e;
          a.add(t);
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function (e) {
          let { memberActions: t, guildId: n } = e;
          if (null == t) {
            r[n] = u;
            return;
          }
          (r[n] = t), a.delete(n);
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function (e) {
          let { guildId: t } = e;
          a.delete(t);
        },
        GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function (e) {
          let { guildId: t } = e;
          if (null == r[t]) return !1;
          delete r[t];
        },
        COMPLETE_NEW_MEMBER_ACTION: function (e) {
          let { guildId: t, channelId: n } = e;
          r = { ...r, [t]: { ...r[t], [n]: !0 } };
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          if (null == r[t.id]) return !1;
          delete r[t.id];
        },
      });
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return i;
          },
        });
      var l = n("49111");
      function i(e, t, n, i) {
        let u = null != n ? n : t,
          r = null != u && e.can(l.Permissions.CREATE_INSTANT_INVITE, u);
        return (
          r ||
          (null != t && null != t.vanityURLCode) ||
          (null == i ? void 0 : i.invite_code) != null
        );
      }
    },
    519841: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AttachmentLinkRefreshExperiment: function () {
            return i;
          },
        });
      var l = n("862205");
      let i = (0, l.createExperiment)({
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
            return A;
          },
          maybeRefreshAttachmentUrl: function () {
            return C;
          },
        }),
        n("222007");
      var l,
        i = n("872717"),
        u = n("718517"),
        r = n("253981"),
        a = n("519841"),
        o = n("49111");
      let d = new Set([
          window.GLOBAL_ENV.CDN_HOST,
          null === (l = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === l
            ? void 0
            : l.substring(2),
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
      function S(e) {
        var t;
        return (
          M(e.image) ||
          (null === (t = e.images) || void 0 === t ? void 0 : t.some(M)) ||
          M(e.video)
        );
      }
      function A(e) {
        return e.attachments.some(m) || e.embeds.some(S);
      }
      async function T(e) {
        let t = await i.default.post({
          url: o.Endpoints.ATTACHMENTS_REFRESH_URLS,
          body: { attachment_urls: [e] },
        });
        return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
      }
      async function C(e) {
        if (
          !a.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "link_clicked",
          }).enabled
        )
          return e;
        let t = r.default.toURLSafe(e);
        if (null == t || !_(t)) return e;
        let n = await T(e);
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
        i = n("79112"),
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
          E = (0, l.useCallback)(() => {
            null != t && (0, r.initGuildIdentitySettings)(t, null != s ? s : f),
              i.default.open(
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
      var l = n("37983");
      n("884691");
      var i = n("446674"),
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
          M = (0, i.useStateFromStores)(
            [a.default],
            () => a.default.getGuild(t),
            [t]
          ),
          S = (0, i.useStateFromStores)(
            [c.default],
            () => c.default.getPermissionsForUser(e.id, n),
            [n, e.id]
          ),
          A =
            (null === (_ = d.default.getCurrentUser()) || void 0 === _
              ? void 0
              : _.id) === e.id,
          T = (0, i.useStateFromStores)(
            [o.default],
            () =>
              null != n &&
              o.default.canWithPartialContext(f.Permissions.MUTE_MEMBERS, {
                channelId: n,
              }),
            [n]
          );
        return null != m && null != M && (T || A) && S.speaker
          ? (0, l.jsx)(u.MenuItem, {
              id: "audience",
              label: A
                ? E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
                : E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                A
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
            return H;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("77078"),
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
        S = n("85166"),
        A = n("170990"),
        T = n("304582"),
        C = n("72057"),
        I = n("300925"),
        v = n("563816"),
        h = n("489836"),
        p = n("406703"),
        N = n("502533"),
        g = n("314838"),
        O = n("383161"),
        L = n("421602"),
        R = n("459870"),
        U = n("692986"),
        y = n("806179"),
        b = n("97508"),
        D = n("816106"),
        G = n("623879"),
        F = n("49111"),
        x = n("782340"),
        H = (0, a.default)(
          (0, r.default)(
            function (e) {
              let {
                  user: t,
                  guildId: n,
                  channel: r,
                  showMediaItems: a = !1,
                  showChatItems: s = !0,
                  showChannelCallItems: H = !1,
                  showModalItems: j = !0,
                  showStageChannelItems: P = !1,
                  context: w,
                  onSelect: V,
                  onHeightUpdate: k,
                } = e,
                B = {
                  page: F.AnalyticsPages.GUILD_CHANNEL,
                  section: F.AnalyticsSections.CHAT_USERNAME,
                  object: F.AnalyticsObjects.CONTEXT_MENU_ITEM,
                },
                W = (0, y.default)(t.id, n, r.id),
                X = (0, O.default)(t, n, w),
                Y = (0, L.default)(t.id, w),
                z = (0, G.default)(t.id),
                K = (0, p.default)(t, w),
                Z = (0, C.default)({ user: t, guildId: n, context: w }),
                Q = (0, T.default)(t),
                q = (0, D.default)(t.id),
                J = (0, U.default)(t.id),
                $ = (0, m.default)({
                  guildId: n,
                  userId: t.id,
                  analyticsLocation: B,
                  context: w,
                }),
                ee = (0, g.default)(t, n),
                et = (0, d.default)(null, t),
                en = (0, A.default)(t),
                el = (0, h.default)(t),
                ei = (0, I.default)(t, n, r.id),
                eu = (0, b.default)(t.id, n),
                er = (0, R.default)(t, n),
                ea = (0, _.default)({
                  id: t.id,
                  label: x.default.Messages.COPY_ID_USER,
                }),
                eo = (0, N.default)(t.id, r.id),
                ed = (0, f.default)(t.id),
                es = (0, c.default)(r.id),
                ec = (0, M.default)(t),
                ef = (0, S.default)(t, n, r.id),
                eE = (0, v.default)({
                  commandType: o.ApplicationCommandType.USER,
                  commandTargetId: t.id,
                  channel: r,
                  guildId: n,
                  onHeightUpdate: k,
                  context: w,
                }),
                e_ = (0, E.default)(t.id),
                em = t.isNonUserBot();
              return (0, l.jsxs)(i.Menu, {
                navId: "user-context",
                onClose: u.closeContextMenu,
                "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: V,
                children: [
                  !em &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)(i.MenuGroup, { children: [ec, P && ef] }),
                        (0, l.jsxs)(i.MenuGroup, {
                          children: [j && W, s && X, Y, K, j && Z, j && Q, z],
                        }),
                        a && (0, l.jsx)(i.MenuGroup, { children: q }),
                        (0, l.jsx)(i.MenuGroup, { children: j && et }),
                        (0, l.jsxs)(i.MenuGroup, {
                          children: [
                            a && J,
                            a && eo,
                            j && $,
                            eE,
                            j && ee,
                            en,
                            j && el,
                            H && e_,
                          ],
                        }),
                        (0, l.jsx)(i.MenuGroup, { children: ei }),
                        (0, l.jsxs)(i.MenuGroup, { children: [eu, er] }),
                        H && (0, l.jsxs)(i.MenuGroup, { children: [es, ed] }),
                      ],
                    }),
                  (0, l.jsx)(i.MenuGroup, { children: ea }),
                ],
              });
            },
            { object: F.AnalyticsObjects.CONTEXT_MENU }
          ),
          [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU]
        );
    },
    563816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var l = n("37983"),
        i = n("884691"),
        u = n("627445"),
        r = n.n(u),
        a = n("446674"),
        o = n("77078"),
        d = n("240249"),
        s = n("916565"),
        c = n("355263"),
        f = n("633043"),
        E = n("823026"),
        _ = n("305961"),
        m = n("697218"),
        M = n("317041"),
        S = n("782340"),
        A = n("466063"),
        T = e => {
          let t,
            {
              commandType: n,
              commandTargetId: u,
              channel: T,
              guildId: C,
              onHeightUpdate: I,
              context: v,
            } = e,
            h = (0, a.useStateFromStores)([_.default], () =>
              _.default.getGuild(null != C ? C : T.guild_id)
            ),
            p = (0, a.useStateFromStores)([m.default], () =>
              m.default.getUser(u)
            ),
            N = (0, E.default)({
              user: p,
              guildId: null == h ? void 0 : h.id,
              channel: T,
              context: v,
            }),
            {
              commands: g,
              sectionDescriptors: O,
              loading: L,
            } = d.useDiscovery(
              T,
              { commandType: n },
              { limit: M.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: R } = i.useMemo(() => {
              let e = {};
              return (
                O.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [O]),
            U = i.useRef(L.current);
          i.useEffect(() => {
            L.current !== U.current &&
              ((U.current = L.current), null == I || I());
          }, [L, I]);
          let y = i.useCallback(
            e => {
              r(null != T, "menu item should not show if channel is null");
              let t = R[e.applicationId],
                n = null != t ? (0, c.getIconComponent)(t) : void 0;
              return (0, l.jsx)(
                o.MenuItem,
                {
                  id: e.id,
                  label: e.displayName,
                  showIconFirst: !0,
                  icon: () =>
                    null != n
                      ? (0, l.jsx)(n, {
                          channel: T,
                          section: t,
                          width: 18,
                          height: 18,
                          selectable: !1,
                        })
                      : null,
                  action: () => {
                    (0, s.default)({
                      command: e,
                      optionValues: {},
                      context: { channel: T, guild: h },
                      commandTargetId: u,
                    });
                  },
                },
                e.id
              );
            },
            [T, h, u, R]
          );
          return (
            L.current
              ? (t = (0, l.jsx)(
                  o.MenuItem,
                  {
                    id: "menu-commands-placeholder",
                    render: () => (0, l.jsx)(f.default, {}),
                    disabled: !0,
                  },
                  "menu-commands-placeholder"
                ))
              : ((t =
                  0 === g.length
                    ? (0, l.jsx)(
                        o.MenuItem,
                        {
                          id: "menu-commands-empty",
                          label:
                            S.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                          disabled: !0,
                        },
                        "menu-commands-empty"
                      )
                    : g.map(y)),
                null != N &&
                  (t = (0, l.jsxs)(l.Fragment, {
                    children: [
                      t,
                      (0, l.jsx)(o.MenuSeparator, {}, "separator"),
                      N,
                    ],
                  }))),
            (0, l.jsx)(o.MenuItem, {
              id: "apps",
              label: S.default.Messages.APPS,
              listClassName: A.list,
              children: t,
            })
          );
        };
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
      var l = n("37983");
      n("884691");
      var i = n("446674"),
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
          l = "@".concat(c.default.getUserTag(e, { decoration: "never" }));
        s.ComponentDispatch.dispatchToLastSubscribed(
          f.ComponentActions.INSERT_TEXT,
          { plainText: l, rawText: "<@".concat(n, ">") }
        ),
          null != t && r.default.startTyping(t);
      }
      function m(e, t, n) {
        let [r, s] = (0, i.useStateFromStoresArray)(
            [d.default, a.default, o.default],
            () => {
              let e = d.default.getChannelId(t),
                n = a.default.getChannel(e),
                l =
                  null != n &&
                  (n.isMultiUserDM() ||
                    o.default.can(f.Permissions.SEND_MESSAGES, n));
              return [e, l];
            },
            [t]
          ),
          c = n === f.AppContext.POPOUT;
        return !s || c
          ? null
          : (0, l.jsx)(u.MenuItem, {
              id: "mention",
              label: E.default.Messages.MENTION,
              action: function () {
                _(e, r);
              },
            });
      }
    },
    648911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("446674"),
        i = n("42887"),
        u = n("512244");
      function r() {
        return (0, l.useStateFromStores)([i.default], () =>
          (0, u.default)(i.default)
        );
      }
    },
  },
]);
//# sourceMappingURL=b5d2b6e7bd3fba16da1f.js.map

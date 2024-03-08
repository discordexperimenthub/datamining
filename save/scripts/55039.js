(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55039"],
  {
    230947: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return A;
          },
        });
      var u = l("37983"),
        a = l("884691"),
        n = l("446674"),
        r = l("77078"),
        d = l("750560"),
        i = l("38766"),
        s = l("506885"),
        o = l("271938"),
        f = l("26989"),
        c = l("305961"),
        E = l("957255"),
        _ = l("697218"),
        M = l("49111"),
        S = l("782340"),
        m = l("576398");
      function A(e) {
        let {
            guildId: t,
            userId: A,
            analyticsLocation: g,
            analyticsLocations: R,
            context: T,
            icon: C,
          } = e,
          I = c.default.getGuild(t),
          N = o.default.getId(),
          O = (0, n.useStateFromStores)([_.default], () =>
            _.default.getUser(A)
          ),
          U = (0, n.useStateFromStores)(
            [f.default],
            () => f.default.isGuestOrLurker(t, A),
            [t, A]
          );
        (0, n.useStateFromStores)(
          [E.default],
          () => E.default.getGuildVersion(t),
          [t]
        );
        let v = a.useMemo(() => ({ [t]: [A] }), [t, A]);
        (0, d.useSubscribeGuildMembers)(v);
        let p = T === M.AppContext.POPOUT,
          b = (0, i.default)({ guild: I, analyticsLocation: g });
        if (null == I || p) return null;
        let h =
            N === A &&
            (E.default.can(M.Permissions.CHANGE_NICKNAME, I) ||
              E.default.can(M.Permissions.MANAGE_NICKNAMES, I)),
          F = N === A,
          L = E.default.canManageUser(M.Permissions.MANAGE_NICKNAMES, A, I);
        if (!(h || L || F) || null == O || U) return null;
        let x = I.hasFeature(M.GuildFeatures.HUB),
          y = x
            ? S.default.Messages.HUB_EDIT_PROFILE
            : S.default.Messages.CHANGE_IDENTITY,
          G = F ? y : S.default.Messages.CHANGE_NICKNAME;
        return (0, u.jsx)(r.MenuItem, {
          id: "change-nickname",
          label: (0, u.jsx)("div", {
            className: m.labelWrapper,
            children: (0, u.jsx)("span", { className: m.label, children: G }),
          }),
          icon: C,
          action: () => {
            F
              ? ((0, s.default)(O.id, O.getAvatarURL(t, 80), { guildId: t }),
                b())
              : (0, r.openModalLazy)(async () => {
                  let { default: e } = await l
                    .el("59709")
                    .then(l.bind(l, "59709"));
                  return l =>
                    (0, u.jsx)(e, {
                      ...l,
                      guildId: t,
                      user: O,
                      analyticsSource: g,
                      analyticsLocations: R,
                    });
                });
          },
        });
      }
    },
    130037: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useTrackMemberSearchUsed: function () {
            return _;
          },
          useTrackMemberFilterRolesUsed: function () {
            return M;
          },
          MemberSafetyFlagType: function () {
            return n;
          },
          useTrackMemberFilterSafetyFlagsUsed: function () {
            return S;
          },
          ModerationActionType: function () {
            return r;
          },
          useTrackModerationAction: function () {
            return m;
          },
          trackMembersPageViewed: function () {
            return A;
          },
        });
      var u,
        a,
        n,
        r,
        d = l("884691"),
        i = l("812204"),
        s = l("716241"),
        o = l("271938"),
        f = l("599110"),
        c = l("49111");
      function E(e, t, l) {
        var u;
        let a = {
          ...t,
          ...(0, s.collectGuildAnalyticsMetadata)(
            null !== (u = t.guild_id) && void 0 !== u ? u : l
          ),
        };
        f.default.track(e, a);
      }
      function _(e) {
        let t = d.useCallback(
          t => {
            !(function (e) {
              let t = { guild_id: e, location: i.default.MEMBER_SAFETY_PAGE };
              E(c.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
          },
          [e]
        );
        return t;
      }
      function M(e) {
        let t = d.useCallback(
          t => {
            !(function (e, t) {
              let l = {
                selected_role_count: t.size,
                guild_id: e,
                location: i.default.MEMBER_SAFETY_PAGE,
              };
              E(c.AnalyticEvents.MOD_DASH_FILTER_ROLES, l);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      ((u = n || (n = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (u.COMMUNICATION_DISABLED = "communication_disabled"),
        (u.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (u.USERNAME_QUARANTINED = "username_quarantined");
      function S(e) {
        let t = d.useCallback(
          t => {
            !(function (e, t) {
              let l = {
                flag_type: t,
                guild_id: e,
                location: i.default.MEMBER_SAFETY_PAGE,
              };
              E(c.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, l);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      function m(e, t) {
        let { location: l, targetUserId: u, targets: a, locations: n } = t,
          r = d.useCallback(
            t => {
              let r = {
                action_type: t,
                mod_user_id: o.default.getId(),
                guild_id: e,
                location: l,
                locations: n,
                target_user_id: null != u ? u : void 0,
                targets: null != a ? a : void 0,
              };
              E(c.AnalyticEvents.MODERATION_ACTION, r);
            },
            [e, l, u, a, n]
          );
        return r;
      }
      function A(e, t) {
        E(c.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
          guild_id: e,
          location: t,
        });
      }
      ((a = r || (r = {})).BAN = "ban"),
        (a.KICK = "kick"),
        (a.MUTE = "mute"),
        (a.TIMEOUT = "timeout"),
        (a.ADD_ROLE = "add_role"),
        (a.REMOVE_ROLE = "remove_role"),
        (a.COPY_ID = "copy_id"),
        (a.CHANGE_NICKNAME = "change_nickname");
    },
    77445: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        });
      var u = l("446674"),
        a = l("271938"),
        n = l("18494"),
        r = l("808422");
      function d() {
        let e = (0, u.useStateFromStores)([n.default], () =>
            n.default.getVoiceChannelId()
          ),
          t = (0, u.useStateFromStores)([a.default], () => a.default.getId()),
          l = (0, r.default)(t, e);
        return (
          l === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    726750: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return M;
          },
        });
      var u = l("37983");
      l("884691");
      var a = l("446674"),
        n = l("77078"),
        r = l("305961"),
        d = l("697218"),
        i = l("800762"),
        s = l("244480"),
        o = l("619395"),
        f = l("325861"),
        c = l("77445"),
        E = l("130563"),
        _ = l("782340");
      function M(e) {
        var t;
        let l = (0, E.default)(),
          M = null == l ? void 0 : l.id,
          S = null == l ? void 0 : l.guild_id,
          m = (0, a.useStateFromStores)(
            [r.default],
            () => r.default.getGuild(S),
            [S]
          ),
          A = (0, a.useStateFromStores)(
            [i.default],
            () =>
              null != M ? i.default.getVoiceStateForChannel(M, e.id) : null,
            [M, e.id]
          ),
          g =
            (null === (t = d.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id) === e.id,
          R = (0, c.default)(),
          T = (0, a.useStateFromStores)(
            [f.default],
            () => f.default.getPermissionsForUser(e.id, M),
            [M, e.id]
          ),
          C = (0, o.useCanModerateRequestToSpeak)(M);
        if (null == l || null == m || null == A || T.speaker) return null;
        let I = () => {
          g
            ? (0, s.audienceAckRequestToSpeak)(l, !1)
            : (0, s.inviteUserToStage)(l, e.id);
        };
        return C
          ? (0, u.jsx)(n.MenuItem, {
              id: "invite-speaker",
              label: g
                ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: I,
            })
          : R && g
            ? (0, u.jsx)(n.MenuItem, {
                id: "invite-speaker",
                label:
                  _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: I,
              })
            : null;
      }
    },
    721429: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        });
      var u = l("37983");
      l("884691");
      var a = l("77078"),
        n = l("272030"),
        r = l("838446"),
        d = l("158534"),
        i = l("798609"),
        s = l("846883"),
        o = l("812204"),
        f = l("861370"),
        c = l("230947"),
        E = l("726750"),
        _ = l("170990"),
        M = l("304582"),
        S = l("72057"),
        m = l("563816"),
        A = l("489836"),
        g = l("406703"),
        R = l("314838"),
        T = l("383161"),
        C = l("421602"),
        I = l("459870"),
        N = l("393394"),
        O = l("806179"),
        U = l("97508"),
        v = l("623879"),
        p = l("49111"),
        b = l("782340"),
        h = (0, d.default)(
          (0, r.default)(
            function (e) {
              let {
                  user: t,
                  guildId: l,
                  channel: r,
                  context: d,
                  onSelect: o,
                  onHeightUpdate: h,
                } = e,
                F = (0, O.default)(t.id, l),
                L = (0, T.default)(t, l, d),
                x = (0, C.default)(t.id, d),
                y = (0, v.default)(t.id),
                G = (0, g.default)(t, d),
                j = (0, S.default)({ user: t, guildId: l, context: d }),
                D = (0, M.default)(t),
                P = (0, c.default)({
                  guildId: l,
                  userId: t.id,
                  analyticsLocation: {
                    page: p.AnalyticsPages.GUILD_CHANNEL,
                    section: p.AnalyticsSections.CHAT_USERNAME,
                    object: p.AnalyticsObjects.CONTEXT_MENU_ITEM,
                  },
                  context: d,
                }),
                k = (0, R.default)(t, l),
                V = (0, s.default)(null, t),
                H = (0, _.default)(t),
                B = (0, A.default)(t),
                K = (0, N.default)(t, l, r.id),
                Y = (0, U.default)(t.id, l),
                w = (0, I.default)(t, l),
                q = (0, f.default)({
                  id: t.id,
                  label: b.default.Messages.COPY_ID_USER,
                }),
                z = (0, E.default)(t),
                W = (0, m.default)({
                  commandType: i.ApplicationCommandType.USER,
                  commandTargetId: t.id,
                  channel: r,
                  guildId: l,
                  onHeightUpdate: h,
                }),
                X = t.isNonUserBot();
              return (0, u.jsxs)(a.Menu, {
                navId: "user-context",
                onClose: n.closeContextMenu,
                "aria-label": b.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: o,
                children: [
                  !X &&
                    (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsx)(a.MenuGroup, { children: z }),
                        (0, u.jsxs)(a.MenuGroup, {
                          children: [F, L, x, G, j, D, y],
                        }),
                        (0, u.jsx)(a.MenuGroup, { children: V }),
                        (0, u.jsxs)(a.MenuGroup, { children: [P, W, k, H, B] }),
                        (0, u.jsx)(a.MenuGroup, { children: K }),
                        (0, u.jsxs)(a.MenuGroup, { children: [Y, w] }),
                      ],
                    }),
                  (0, u.jsx)(a.MenuGroup, { children: q }),
                ],
              });
            },
            { object: p.AnalyticsObjects.CONTEXT_MENU }
          ),
          [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU]
        );
    },
    421602: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var u = l("37983");
      l("884691");
      var a = l("77078"),
        n = l("450911"),
        r = l("54239"),
        d = l("271938"),
        i = l("49111"),
        s = l("782340");
      function o(e, t) {
        let l = d.default.getId(),
          o = t === i.AppContext.POPOUT;
        return l === e || o
          ? null
          : (0, u.jsx)(a.MenuItem, {
              id: "message-user",
              label: s.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                n.default.openPrivateChannel(e), (0, r.popLayer)();
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
      var u = l("37983");
      l("884691");
      var a = l("446674"),
        n = l("77078"),
        r = l("851387"),
        d = l("987317"),
        i = l("679653"),
        s = l("271938"),
        o = l("42203"),
        f = l("923959"),
        c = l("26989"),
        E = l("305961"),
        _ = l("957255"),
        M = l("27618"),
        S = l("697218"),
        m = l("800762"),
        A = l("404008"),
        g = l("991170"),
        R = l("49111"),
        T = l("782340");
      function C(e, t) {
        let l = (0, a.useStateFromStores)(
            [f.default],
            () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY],
            [t]
          ),
          C = (0, a.useStateFromStores)(
            [m.default, o.default],
            () => {
              let l = m.default.getUserVoiceChannelId(t, e.id);
              return o.default.getChannel(l);
            },
            [t, e.id]
          ),
          I = (0, a.useStateFromStores)(
            [c.default],
            () => c.default.isGuestOrLurker(t, e.id),
            [t, e.id]
          );
        if (I || null == C) return null;
        let N = e.id === s.default.getId();
        if (!N && !_.default.can(R.Permissions.MOVE_MEMBERS, C)) return null;
        let O = l.filter(t => {
          let { channel: l } = t;
          return (
            l.id !== C.id &&
            (N
              ? _.default.can(R.Permissions.CONNECT, l) &&
                !(0, A.isChannelFull)(l, m.default, E.default)
              : _.default.can(R.Permissions.MOVE_MEMBERS, l) &&
                (_.default.can(R.Permissions.CONNECT, l) ||
                  g.default.can({
                    permission: R.Permissions.CONNECT,
                    user: e,
                    context: l,
                  })) &&
                !(0, A.isChannelFull)(l, m.default, E.default))
          );
        });
        return 0 === O.length
          ? null
          : (0, u.jsx)(n.MenuItem, {
              id: "voice-move",
              label: T.default.Messages.MOVE_TO,
              children: O.map(l => {
                let { channel: a } = l;
                return (0, u.jsx)(
                  n.MenuItem,
                  {
                    id: a.id,
                    action: () => {
                      var l;
                      return (
                        (l = a),
                        void (e.id === s.default.getId()
                          ? d.default.selectVoiceChannel(l.id)
                          : r.default.setChannel(t, e.id, l.id))
                      );
                    },
                    label: (0, i.computeChannelName)(a, S.default, M.default),
                  },
                  a.id
                );
              }),
            });
      }
    },
    393394: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return m;
          },
        });
      var u = l("37983"),
        a = l("884691"),
        n = l("446674"),
        r = l("77078"),
        d = l("750560"),
        i = l("646240"),
        s = l("263024"),
        o = l("300322"),
        f = l("42203"),
        c = l("305961"),
        E = l("957255"),
        _ = l("697218"),
        M = l("49111"),
        S = l("782340");
      function m(e, t, m) {
        let A = a.useMemo(() => ({ [t]: [e.id] }), [t, e.id]);
        (0, d.useSubscribeGuildMembers)(A),
          (0, n.useStateFromStores)(
            [E.default],
            () => E.default.getGuildVersion(t),
            [t]
          );
        let g = (0, n.useStateFromStores)([f.default], () =>
            f.default.getChannel(m)
          ),
          R = (0, n.useStateFromStores)(
            [c.default],
            () => c.default.getGuild(t),
            [t]
          ),
          T = (0, n.useStateFromStores)([_.default], () =>
            _.default.getCurrentUser()
          ),
          C = (0, i.default)(g, "Context Menu"),
          I = (0, o.useIsThreadModerator)(g);
        if ((null == T ? void 0 : T.id) === e.id) return [C];
        if (null == R || null == g || null == T) return [];
        let N =
          I || (g.ownerId === T.id && g.type === M.ChannelTypes.PRIVATE_THREAD);
        return [
          N
            ? (0, u.jsx)(r.MenuItem, {
                id: "remove",
                label: g.isForumPost()
                  ? S.default.Messages.REMOVE_USER_FROM_FORUM_POST.format({
                      user: e.username,
                    })
                  : S.default.Messages.REMOVE_USER_FROM_THREAD.format({
                      user: e.username,
                    }),
                color: "danger",
                action: () => s.default.removeMember(g, e.id, "Context Menu"),
              })
            : null,
          E.default.canManageUser(M.Permissions.KICK_MEMBERS, e, R)
            ? (0, u.jsx)(r.MenuItem, {
                id: "kick",
                label: N
                  ? S.default.Messages.KICK_USER_FROM_SERVER.format({
                      user: e.username,
                    })
                  : S.default.Messages.KICK_USER.format({ user: e.username }),
                color: "danger",
                action: () =>
                  (0, r.openModalLazy)(async () => {
                    let { default: t } = await l
                      .el("125104")
                      .then(l.bind(l, "125104"));
                    return l => (0, u.jsx)(t, { ...l, guildId: R.id, user: e });
                  }),
              })
            : null,
          E.default.canManageUser(M.Permissions.BAN_MEMBERS, e, R)
            ? (0, u.jsx)(r.MenuItem, {
                id: "ban",
                label: N
                  ? S.default.Messages.BAN_USER_FROM_SERVER.format({
                      user: e.username,
                    })
                  : S.default.Messages.BAN_USER.format({ user: e.username }),
                color: "danger",
                action: () =>
                  (0, r.openModalLazy)(async () => {
                    let { default: t } = await l
                      .el("743506")
                      .then(l.bind(l, "743506"));
                    return l => (0, u.jsx)(t, { ...l, guildId: R.id, user: e });
                  }),
              })
            : null,
        ];
      }
    },
    97508: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        });
      var u = l("37983");
      l("884691");
      var a = l("509043"),
        n = l("446674"),
        r = l("77078"),
        d = l("206230"),
        i = l("454273"),
        s = l("130037"),
        o = l("592407"),
        f = l("26989"),
        c = l("305961"),
        E = l("957255"),
        _ = l("449008"),
        M = l("49111"),
        S = l("782340"),
        m = l("235324");
      function A(e, t) {
        var l, n;
        return (0, u.jsxs)("div", {
          className: m.roleRow,
          children: [
            "dot" === t
              ? (0, u.jsx)(r.RoleDot, {
                  className: m.roleDot,
                  color:
                    null !== (l = e.colorString) && void 0 !== l
                      ? l
                      : (0, a.int2hex)(M.DEFAULT_ROLE_COLOR),
                  background: !1,
                  tooltip: !1,
                })
              : (0, u.jsx)(r.RoleCircle, {
                  className: m.roleDot,
                  color:
                    null !== (n = e.colorString) && void 0 !== n
                      ? n
                      : (0, a.int2hex)(M.DEFAULT_ROLE_COLOR),
                }),
            (0, u.jsx)("div", { children: e.name }),
          ],
        });
      }
      function g(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          m = (0, n.useStateFromStores)(
            [c.default],
            () => c.default.getGuild(t),
            [t]
          ),
          g = (0, n.useStateFromStores)([d.default], () => d.default.roleStyle),
          R = (0, s.useTrackModerationAction)(t, {
            location: a,
            targetUserId: e,
          }),
          {
            userRoles: T,
            isGuildMember: C,
            canManageRoles: I,
          } = (0, n.useStateFromStoresObject)(
            [f.default, E.default],
            () => {
              let l = f.default.getMember(t, e);
              return {
                userRoles: null != l ? l.roles : [],
                isGuildMember: null != l,
                canManageRoles:
                  null != m && E.default.can(M.Permissions.MANAGE_ROLES, m),
              };
            },
            [e, t, m]
          );
        if (__OVERLAY__ || null == T || null == m || !C) return null;
        let N = E.default.getHighestRole(m),
          O = Object.values(m.roles).filter(
            e => !(0, i.isEveryoneRoleId)(m.id, e.id)
          ),
          U = I
            ? O.map(l => {
                let a = l.managed || !E.default.isRoleHigher(m, N, l),
                  n = -1 !== T.indexOf(l.id);
                return a && !n
                  ? null
                  : (0, u.jsx)(
                      r.MenuCheckboxItem,
                      {
                        id: l.id,
                        label: () => A(l, g),
                        disabled: a,
                        action: () => {
                          var u;
                          return (
                            (u = l),
                            void (T.includes(u.id)
                              ? (o.default.updateMemberRoles(
                                  t,
                                  e,
                                  T.filter(e => e !== u.id),
                                  [],
                                  [u.id]
                                ),
                                R(s.ModerationActionType.REMOVE_ROLE))
                              : (o.default.updateMemberRoles(
                                  t,
                                  e,
                                  T.concat([u.id]),
                                  [u.id],
                                  []
                                ),
                                R(s.ModerationActionType.ADD_ROLE)))
                          );
                        },
                        checked: n,
                      },
                      l.id
                    );
              })
            : O.filter(e => -1 !== T.indexOf(e.id)).map(e =>
                (0, i.isEveryoneRoleId)(m.id, e.id)
                  ? null
                  : (0, u.jsx)(
                      r.MenuItem,
                      { id: e.id, label: () => A(e, g) },
                      e.id
                    )
              );
        return 0 === U.filter(_.isNotNullish).length
          ? null
          : l
            ? U
            : (0, u.jsx)(r.MenuItem, {
                id: "roles",
                label: S.default.Messages.ROLES_LIST.format({
                  numRoles: U.length,
                }),
                children: U,
              });
      }
    },
  },
]);
//# sourceMappingURL=f5cba2c98026b5db0ead.js.map

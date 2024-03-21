(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64960"],
  {
    59709: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return T;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        i = l("414456"),
        u = l.n(i),
        s = l("446674"),
        r = l("872717"),
        o = l("77078"),
        d = l("130037"),
        c = l("271938"),
        _ = l("26989"),
        E = l("305961"),
        A = l("957255"),
        N = l("697218"),
        M = l("599110"),
        f = l("158998"),
        v = l("49111"),
        C = l("782340"),
        I = l("562484");
      function m(e) {
        let {
            disabled: t = !1,
            user: l,
            setNickname: i,
            nickname: s,
            error: r,
            hasNick: d,
          } = e,
          _ = a.useRef(null),
          E = a.useCallback(() => {
            var e;
            i(""), null === (e = _.current) || void 0 === e || e.focus();
          }, [i]);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t || null == l || l.id === c.default.getId()
              ? null
              : (0, n.jsx)(o.Card, {
                  type: o.Card.Types.WARNING,
                  className: I.card,
                  children: (0, n.jsx)(o.Text, {
                    className: I.warning,
                    variant: "text-md/normal",
                    children: C.default.Messages.CHANGE_NICKNAME_WARNING,
                  }),
                }),
            (0, n.jsx)(o.FormTitle, {
              className: u(I.itemGroup, { [I.disabled]: t }),
              children: t
                ? C.default.Messages
                    .CHANGE_IDENTITY_MODAL_CHANGE_NICKNAME_DISABLED
                : C.default.Messages.NICKNAME,
            }),
            (0, n.jsx)(o.TextInput, {
              disabled: t,
              inputRef: _,
              maxLength: v.USERNAME_MAX_LENGTH,
              value: s,
              placeholder: f.default.getName(l),
              onChange: i,
              autoFocus: !0,
            }),
            null != r
              ? (0, n.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "text-danger",
                  className: I.nickError,
                  children: r,
                })
              : null,
            d && !t
              ? (0, n.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: o.Button.Colors.LINK,
                  size: o.Button.Sizes.NONE,
                  onClick: E,
                  className: I.reset,
                  children: C.default.Messages.RESET_NICKNAME,
                })
              : null,
          ],
        });
      }
      var T = function (e) {
        var t;
        let {
            transitionState: l,
            user: i,
            guildId: u,
            onClose: c,
            analyticsSource: f,
            analyticsLocations: T,
          } = e,
          g = (0, s.useStateFromStores)([_.default], () =>
            null != u ? _.default.getMember(u, i.id) : null
          ),
          k = (0, s.useStateFromStores)(
            [A.default, N.default, E.default],
            () => {
              var e;
              let t = E.default.getGuild(u);
              return (
                null != t &&
                ((null === (e = N.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === i.id
                  ? A.default.can(v.Permissions.CHANGE_NICKNAME, t) ||
                    A.default.can(v.Permissions.MANAGE_NICKNAMES, t)
                  : A.default.canManageUser(
                      v.Permissions.MANAGE_NICKNAMES,
                      i.id,
                      t
                    ))
              );
            }
          ),
          [S, R] = a.useState(!1),
          [D, h] = a.useState(
            null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : ""
          ),
          [y, L] = a.useState({});
        a.useEffect(() => {
          M.default.track(v.AnalyticEvents.OPEN_MODAL, {
            type: "Change Server Identity",
            location: v.AnalyticsPages.GUILD_CHANNEL,
            source: f,
          });
        }, []);
        let O = (0, d.useTrackModerationAction)(u, {
            location: null == T ? void 0 : T[0],
            targetUserId: i.id,
          }),
          b = a.useCallback(
            async e => {
              var t, l, n, a, s, o, _, E, A;
              e.preventDefault();
              let N = null;
              if (
                (D !==
                  (null !== (t = null == g ? void 0 : g.nick) && void 0 !== t
                    ? t
                    : "") && ((N = null != N ? N : {}).nick = D),
                null == N)
              ) {
                c();
                return;
              }
              try {
                R(!0),
                  await r.HTTP.patch({
                    url: v.Endpoints.GUILD_MEMBER(u, i.id),
                    body: N,
                  }),
                  O(d.ModerationActionType.CHANGE_NICKNAME),
                  c();
              } catch (i) {
                let e;
                R(!1);
                let t =
                  null !==
                    (n =
                      null === (l = i.body) || void 0 === l
                        ? void 0
                        : l.errors) && void 0 !== n
                    ? n
                    : null;
                (null == t ? void 0 : t.nick) != null
                  ? (e =
                      (null === (o = t.nick) || void 0 === o
                        ? void 0
                        : null === (s = o._errors) || void 0 === s
                          ? void 0
                          : null === (a = s[0]) || void 0 === a
                            ? void 0
                            : a.message) ||
                      C.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR)
                  : (null == t ? void 0 : t.username) != null &&
                    (e =
                      (null === (A = t.username) || void 0 === A
                        ? void 0
                        : null === (E = A._errors) || void 0 === E
                          ? void 0
                          : null === (_ = E[0]) || void 0 === _
                            ? void 0
                            : _.message) ||
                      C.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR),
                  L({ nick: e });
              }
            },
            [u, D, c, i, g, O]
          );
        return (0, n.jsx)(o.ModalRoot, {
          "aria-label": C.default.Messages.CHANGE_IDENTITY,
          transitionState: l,
          children: (0, n.jsxs)("form", {
            onSubmit: b,
            children: [
              (0, n.jsx)(o.ModalHeader, {
                separator: !1,
                children: (0, n.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: C.default.Messages.CHANGE_NICKNAME,
                }),
              }),
              (0, n.jsx)(o.ModalContent, {
                className: I.modalContent,
                children: (0, n.jsx)(m, {
                  disabled: !k,
                  user: i,
                  error: y.nick,
                  nickname: D,
                  setNickname: h,
                  hasNick: (null == g ? void 0 : g.nick) != null,
                }),
              }),
              (0, n.jsxs)(o.ModalFooter, {
                children: [
                  (0, n.jsx)(o.Button, {
                    type: "submit",
                    disabled: S,
                    children: C.default.Messages.SAVE,
                  }),
                  (0, n.jsx)(o.Button, {
                    onClick: c,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    children: C.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    130037: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useTrackMemberSearchUsed: function () {
            return A;
          },
          useTrackMemberFilterRolesUsed: function () {
            return N;
          },
          MemberSafetyFlagType: function () {
            return i;
          },
          useTrackMemberFilterSafetyFlagsUsed: function () {
            return M;
          },
          ModerationActionType: function () {
            return u;
          },
          useTrackModerationAction: function () {
            return f;
          },
          trackMembersPageViewed: function () {
            return v;
          },
        });
      var n,
        a,
        i,
        u,
        s = l("884691"),
        r = l("812204"),
        o = l("716241"),
        d = l("271938"),
        c = l("599110"),
        _ = l("49111");
      function E(e, t, l) {
        var n;
        let a = {
          ...t,
          ...(0, o.collectGuildAnalyticsMetadata)(
            null !== (n = t.guild_id) && void 0 !== n ? n : l
          ),
        };
        c.default.track(e, a);
      }
      function A(e) {
        let t = s.useCallback(
          t => {
            !(function (e) {
              let t = { guild_id: e, location: r.default.MEMBER_SAFETY_PAGE };
              E(_.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
          },
          [e]
        );
        return t;
      }
      function N(e) {
        let t = s.useCallback(
          t => {
            !(function (e, t) {
              let l = {
                selected_role_count: t.size,
                guild_id: e,
                location: r.default.MEMBER_SAFETY_PAGE,
              };
              E(_.AnalyticEvents.MOD_DASH_FILTER_ROLES, l);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      ((n = i || (i = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (n.COMMUNICATION_DISABLED = "communication_disabled"),
        (n.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (n.USERNAME_QUARANTINED = "username_quarantined");
      function M(e) {
        let t = s.useCallback(
          t => {
            !(function (e, t) {
              let l = {
                flag_type: t,
                guild_id: e,
                location: r.default.MEMBER_SAFETY_PAGE,
              };
              E(_.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, l);
            })(e, t);
          },
          [e]
        );
        return t;
      }
      function f(e, t) {
        let { location: l, targetUserId: n, targets: a, locations: i } = t,
          u = s.useCallback(
            t => {
              let u = {
                action_type: t,
                mod_user_id: d.default.getId(),
                guild_id: e,
                location: l,
                locations: i,
                target_user_id: null != n ? n : void 0,
                targets: null != a ? a : void 0,
              };
              E(_.AnalyticEvents.MODERATION_ACTION, u);
            },
            [e, l, n, a, i]
          );
        return u;
      }
      function v(e, t) {
        E(_.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
          guild_id: e,
          location: t,
        });
      }
      ((a = u || (u = {})).BAN = "ban"),
        (a.KICK = "kick"),
        (a.MUTE = "mute"),
        (a.TIMEOUT = "timeout"),
        (a.ADD_ROLE = "add_role"),
        (a.REMOVE_ROLE = "remove_role"),
        (a.COPY_ID = "copy_id"),
        (a.CHANGE_NICKNAME = "change_nickname");
    },
  },
]);
//# sourceMappingURL=f93bcff912712eb9e85e.js.map

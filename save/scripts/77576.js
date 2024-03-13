(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77576"],
  {
    126501: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var n = a("913144"),
        l = a("679428"),
        s = a("282109"),
        u = {
          update(e) {
            n.default.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
          },
          toggleCollapseGuild(e) {
            l.default.saveUserGuildSettings(e, {
              hide_muted_channels: !s.default.isGuildCollapsed(e),
            }),
              n.default.dispatch({
                type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                guildId: e,
              });
          },
        };
    },
    969553: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("927944");
      a.es(n, t);
    },
    578411: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          GuildLeaveConfirmModalContents: function () {
            return h;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("414456"),
        s = a.n(l),
        u = a("151426"),
        i = a("77078"),
        r = a("10641"),
        d = a("592407"),
        o = a("267567"),
        c = a("393414"),
        f = a("49111"),
        E = a("782340"),
        C = a("967659");
      let h = e => {
        let { guild: t } = e,
          l = t.id,
          h = async () => {
            let e = o.default.isLurking(l);
            await d.default.leaveGuild(l),
              e
                ? (0, c.transitionTo)(f.Routes.GUILD_DISCOVERY)
                : !(0, r.isDismissibleContentDismissed)(
                    u.DismissibleContent.GUILD_LEAVE_FEEDBACK
                  ) &&
                  (0, i.openModalLazy)(async () => {
                    let { default: e } = await a
                      .el("953750")
                      .then(a.bind(a, "953750"));
                    return a =>
                      (0, n.jsx)(e, { ...a, guildId: l, guildName: t.name });
                  });
          };
        return (0, n.jsx)(i.ConfirmModal, {
          className: s(C.confirmModal),
          bodyClassName: s(C.confirmModalBody),
          header: E.default.Messages.LEAVE_SERVER_TITLE.format({
            name: t.name,
          }),
          confirmText: t.hasFeature(f.GuildFeatures.HUB)
            ? E.default.Messages.LEAVE_HUB
            : E.default.Messages.LEAVE_SERVER,
          cancelText: E.default.Messages.CANCEL,
          onConfirm: h,
          ...e,
          children: (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            children: t.hasFeature(f.GuildFeatures.HUB)
              ? E.default.Messages.LEAVE_HUB_BODY.format({ name: t.name })
              : E.default.Messages.LEAVE_SERVER_BODY.format({ name: t.name }),
          }),
        });
      };
    },
    230947: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        });
      var n = a("37983"),
        l = a("884691"),
        s = a("446674"),
        u = a("77078"),
        i = a("750560"),
        r = a("38766"),
        d = a("506885"),
        o = a("271938"),
        c = a("26989"),
        f = a("305961"),
        E = a("957255"),
        C = a("697218"),
        h = a("49111"),
        v = a("782340"),
        I = a("576398");
      function g(e) {
        let {
            guildId: t,
            userId: g,
            analyticsLocation: M,
            analyticsLocations: m,
            context: N,
            icon: _,
          } = e,
          p = f.default.getGuild(t),
          L = o.default.getId(),
          S = (0, s.useStateFromStores)([C.default], () =>
            C.default.getUser(g)
          ),
          A = (0, s.useStateFromStores)(
            [c.default],
            () => c.default.isGuestOrLurker(t, g),
            [t, g]
          );
        (0, s.useStateFromStores)(
          [E.default],
          () => E.default.getGuildVersion(t),
          [t]
        );
        let V = l.useMemo(() => ({ [t]: [g] }), [t, g]);
        (0, i.useSubscribeGuildMembers)(V);
        let G = N === h.AppContext.POPOUT,
          x = (0, r.default)({ guild: p, analyticsLocation: M });
        if (null == p || G) return null;
        let H =
            L === g &&
            (E.default.can(h.Permissions.CHANGE_NICKNAME, p) ||
              E.default.can(h.Permissions.MANAGE_NICKNAMES, p)),
          T = L === g,
          O = E.default.canManageUser(h.Permissions.MANAGE_NICKNAMES, g, p);
        if (!(H || O || T) || null == S || A) return null;
        let b = p.hasFeature(h.GuildFeatures.HUB),
          U = b
            ? v.default.Messages.HUB_EDIT_PROFILE
            : v.default.Messages.CHANGE_IDENTITY,
          D = T ? U : v.default.Messages.CHANGE_NICKNAME;
        return (0, n.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, n.jsx)("div", {
            className: I.labelWrapper,
            children: (0, n.jsx)("span", { className: I.label, children: D }),
          }),
          icon: _,
          action: () => {
            T
              ? ((0, d.default)(S.id, S.getAvatarURL(t, 80), { guildId: t }),
                x())
              : (0, u.openModalLazy)(async () => {
                  let { default: e } = await a
                    .el("59709")
                    .then(a.bind(a, "59709"));
                  return a =>
                    (0, n.jsx)(e, {
                      ...a,
                      guildId: t,
                      user: S,
                      analyticsSource: M,
                      analyticsLocations: m,
                    });
                });
          },
        });
      }
    },
    747867: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a("37983"),
        l = a("884691"),
        s = a("77078"),
        u = a("398654"),
        i = a("712125"),
        r = a("311161"),
        d = a("45029"),
        o = a("372624"),
        c = a("782340");
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            shouldShowIncidentActions: f,
            isUnderLockdown: E,
            incidentData: C,
          } = (0, u.useGuildIncidentsState)(e.id),
          h = l.useCallback(() => {
            let t = {
              source: i.GuildIncidentActionSources.CONTEXT_MENU,
              alertType: (0, r.getIncidentAlertType)(C),
            };
            (0, s.openModalLazy)(async () => {
              let { default: l } = await a
                .el("186638")
                .then(a.bind(a, "186638"));
              return a =>
                (0, n.jsx)(l, { ...a, guildId: e.id, analyticsData: t });
            });
          }, [e.id, C]);
        return e.isCommunity() && f
          ? (0, n.jsx)(s.MenuItem, {
              id: "server-lockdown",
              label: E
                ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK
                : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
              icon: t ? (E ? o.default : d.default) : void 0,
              action: h,
              color: "danger",
            })
          : null;
      }
    },
    58622: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        s = a("77078"),
        u = a("242757"),
        i = a("923959"),
        r = a("957255"),
        d = a("76539"),
        o = a("49111"),
        c = a("782340");
      function f(e) {
        let { source: t, guild: a, channel: n, stageInstance: s } = e,
          d = (0, l.useStateFromStores)([i.default], () =>
            i.default.getDefaultChannel(
              a.id,
              !0,
              o.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, l.useStateFromStores)([r.default], () =>
            (0, u.canViewInviteModal)(r.default, a, n, s)
          ),
          f = E(t, a, c && null != n ? n : d),
          h = C(t);
        return null == n && t === o.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : c || null != d
            ? f
            : h;
      }
      let E = (e, t, l) =>
          (0, n.jsx)(s.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, s.openModalLazy)(async () => {
                let { default: s } = await a
                  .el("310688")
                  .then(a.bind(a, "310688"));
                return a =>
                  (0, n.jsx)(s, { ...a, guild: t, channel: l, source: e });
              }),
          }),
        C = e =>
          (0, n.jsx)(s.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, s.openModalLazy)(async () => {
                let { default: e } = await a
                  .el("973132")
                  .then(a.bind(a, "973132"));
                return t => (0, n.jsx)(e, { ...t });
              }),
          });
    },
    255812: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("77078"),
        s = a("70025"),
        u = a("334683"),
        i = a("842672"),
        r = a("782340");
      function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          d = (0, u.default)(e),
          o = (0, i.default)();
        return d
          ? (0, n.jsx)(l.MenuItem, {
              id: "create-event",
              label: r.default.Messages.SCHEDULE_EVENT,
              icon: t ? s.default : void 0,
              action: () => {
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await a
                    .el("590942")
                    .then(a.bind(a, "590942"));
                  return a => (0, n.jsx)(t, { ...a, guildId: e });
                }, o);
              },
            })
          : null;
      }
    },
    986003: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          hasNotSetUpChannelOptIn: function () {
            return c;
          },
          toggleShowAllChannels: function () {
            return f;
          },
          optIntoAllChannelsForExistingMember: function () {
            return E;
          },
        }),
        a("702976"),
        a("222007"),
        a("424973"),
        a("151426");
      var n = a("921031");
      a("374363");
      var l = a("923959"),
        s = a("26989"),
        u = a("282109"),
        i = a("568734"),
        r = a("629220"),
        d = a("512395"),
        o = a("657944");
      function c(e) {
        var t, a;
        let n = (0, d.isOptInEnabledForGuild)(e),
          l =
            null !==
              (a =
                null === (t = s.default.getSelfMember(e)) || void 0 === t
                  ? void 0
                  : t.flags) && void 0 !== a
              ? a
              : 0,
          r = (0, i.hasFlag)(l, o.GuildMemberFlags.COMPLETED_ONBOARDING),
          c = u.default.getOptedInChannels(e).size > 0;
        return !n && !r && !c;
      }
      function f(e) {
        if (c(e)) {
          E(e);
          return;
        }
        {
          let t = (0, d.isOptInEnabledForGuild)(e);
          (0, r.setGuildOptIn)(e, !t);
        }
      }
      function E(e) {
        let { include: t = new Set(), exclude: a = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = l.default.getChannels(e),
          u = [
            ...s[(0, l.GUILD_SELECTABLE_CHANNELS_KEY)],
            ...s[(0, l.GUILD_VOCAL_CHANNELS_KEY)],
          ]
            .filter(e => {
              let { channel: t } = e;
              return !t.isThread() && !a.has(t.id);
            })
            .map(e => {
              let { channel: t } = e;
              return t.id;
            });
        t.forEach(e => u.push(e)),
          n.default.onboardExistingMember(e, new Set(u));
      }
    },
    724026: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        s = a("77078"),
        u = a("305961"),
        i = a("697218"),
        r = a("986003"),
        d = a("512395"),
        o = a("49111"),
        c = a("782340");
      function f(e) {
        let t = (0, d.useOptInEnabledForGuild)(e),
          a = (0, l.useStateFromStores)([u.default], () =>
            u.default.getGuild(e)
          ),
          f = (0, l.useStateFromStores)([i.default], () =>
            i.default.getCurrentUser()
          );
        return null != f &&
          null != a &&
          (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff())
          ? (0, n.jsx)(s.MenuCheckboxItem, {
              id: "opt-in",
              label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
              checked: !t,
              action: () => {
                (0, r.toggleShowAllChannels)(e);
              },
            })
          : null;
      }
    },
    70025: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("469563"),
        s = a("969553"),
        u = a("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: l = "currentColor",
              ...s
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, u.default)(s),
              width: t,
              height: a,
              viewBox: "0 0 24 24",
              children: [
                (0, n.jsx)("path", {
                  d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                  fill: l,
                }),
                (0, n.jsx)("path", {
                  d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                  fill: l,
                }),
                (0, n.jsx)("path", { d: "M7 11H12V16H7V11Z", fill: l }),
              ],
            });
          },
          s.CalendarPlusIcon,
          void 0,
          { size: 24 }
        );
    },
    372624: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("469563"),
        s = a("263436"),
        u = a("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: a = 24,
              color: l = "currentColor",
              className: s,
              foreground: i,
              ...r
            } = e;
            return (0, n.jsx)("svg", {
              width: t,
              height: a,
              className: s,
              viewBox: "0 0 24 24",
              ...(0, u.default)(r),
              children: (0, n.jsx)("path", {
                className: i,
                fill: l,
                d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                "aria-hidden": !0,
              }),
            });
          },
          s.LockUnlockedIcon,
          void 0,
          { size: 24 }
        );
    },
    927944: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          CalendarPlusIcon: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("669491"),
        s = a("82169");
      let u = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: u = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...r
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, s.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              fill: "string" == typeof u ? u : u.css,
              className: i,
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M22 13.67c0 .12-.33.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.2.7 2.1 1.73 2.61.11.06.06.39-.06.39H5a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.67ZM5.5 12a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
              clipRule: "evenodd",
              fill: "string" == typeof u ? u : u.css,
              className: i,
            }),
            (0, n.jsx)("path", {
              d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z",
              fill: "string" == typeof u ? u : u.css,
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=188e1a56e5bff3b2d960.js.map

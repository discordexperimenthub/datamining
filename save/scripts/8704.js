(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8704"],
  {
    158534: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return l;
          },
        });
      var a = t("37983");
      t("884691");
      var u = t("685665");
      function l(e, n) {
        return function (t) {
          let { AnalyticsLocationProvider: l } = (0, u.default)(n);
          return (0, a.jsx)(l, { children: (0, a.jsx)(e, { ...t }) });
        };
      }
    },
    754938: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return I;
          },
        });
      var a = t("37983");
      t("884691");
      var u = t("77078"),
        l = t("272030"),
        s = t("158534"),
        r = t("812204"),
        i = t("861370"),
        d = t("715243"),
        c = t("963150"),
        o = t("308798"),
        f = t("47006"),
        E = t("878526"),
        _ = t("782340"),
        I = (0, s.default)(
          function (e) {
            let { channel: n, guild: t, onSelect: s } = e,
              r = (0, f.default)(n),
              I = (0, E.default)(n, t),
              N = (0, d.default)(n, t),
              M = (0, c.default)(n, t),
              C = (0, o.default)(n),
              A = (0, i.default)({
                id: n.id,
                label: _.default.Messages.COPY_ID_CHANNEL,
              });
            return (0, a.jsxs)(u.Menu, {
              navId: "channel-context",
              onClose: l.closeContextMenu,
              "aria-label": _.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, a.jsx)(u.MenuGroup, { children: r }),
                (0, a.jsxs)(u.MenuGroup, { children: [I, N, M] }),
                (0, a.jsx)(u.MenuGroup, { children: C }),
                (0, a.jsx)(u.MenuGroup, { children: A }),
              ],
            });
          },
          [r.default.CONTEXT_MENU, r.default.CHANNEL_ACTIVITY_FEED_VOICE_MENU]
        );
    },
    715243: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var u = t("446674"),
        l = t("77078"),
        s = t("957255"),
        r = t("49111"),
        i = t("782340");
      function d(e, n) {
        let d = (0, u.useStateFromStores)(
          [s.default],
          () => s.default.can(r.Permissions.MANAGE_CHANNELS, e),
          [e]
        );
        return __OVERLAY__ || !d
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "clone-channel",
              label: i.default.Messages.CLONE_CHANNEL,
              action: () =>
                (0, l.openModalLazy)(async () => {
                  let { default: u } = await t
                    .el("581354")
                    .then(t.bind(t, "581354"));
                  return t =>
                    (0, a.jsx)(u, {
                      ...t,
                      channelType: e.type,
                      guildId: n.id,
                      categoryId: e.parent_id,
                      cloneChannelId: e.id,
                    });
                }),
            });
      }
    },
    963150: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var u = t("446674"),
        l = t("77078"),
        s = t("957255"),
        r = t("49111"),
        i = t("782340");
      function d(e, n) {
        let d =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          c = (0, u.useStateFromStores)(
            [s.default],
            () => s.default.can(r.Permissions.MANAGE_CHANNELS, e),
            [e]
          );
        if (__OVERLAY__ || !c) return null;
        let o = () => {
          (0, l.openModalLazy)(async () => {
            let { default: n } = await t.el("581354").then(t.bind(t, "581354"));
            return t =>
              (0, a.jsx)(n, {
                ...t,
                channelType: d,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (d) {
          case r.ChannelTypes.GUILD_TEXT:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-text-channel",
              label: i.default.Messages.CREATE_TEXT_CHANNEL,
              action: o,
            });
          case r.ChannelTypes.GUILD_VOICE:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-voice-channel",
              label: i.default.Messages.CREATE_VOICE_CHANNEL,
              action: o,
            });
          default:
            return null;
        }
      }
    },
    47006: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
        });
      var a = t("37983");
      t("884691");
      var u = t("446674"),
        l = t("77078"),
        s = t("18054"),
        r = t("957255"),
        i = t("49111"),
        d = t("782340");
      function c(e) {
        let {
          canManageChannels: n,
          canManageRoles: t,
          canManageWebhooks: c,
          canAccessChannel: o,
        } = (0, u.useStateFromStoresObject)(
          [r.default],
          () => ({
            canManageChannels: r.default.can(i.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: r.default.can(i.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: r.default.can(i.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: r.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && o && (n || t || c)
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                e.type === i.ChannelTypes.GUILD_CATEGORY
                  ? d.default.Messages.EDIT_CATEGORY
                  : d.default.Messages.EDIT_CHANNEL,
              action: () => s.default.open(e.id),
            })
          : null;
      }
    },
    878526: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return l;
          },
        });
      var a = t("58622"),
        u = t("49111");
      function l(e, n, t) {
        return (0, a.default)({
          guild: n,
          channel: e,
          stageInstance: t,
          source: u.InstantInviteSources.CONTEXT_MENU,
        });
      }
    },
    58622: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var a = t("37983");
      t("884691");
      var u = t("446674"),
        l = t("77078"),
        s = t("242757"),
        r = t("923959"),
        i = t("957255"),
        d = t("76539"),
        c = t("49111"),
        o = t("782340");
      function f(e) {
        let { source: n, guild: t, channel: a, stageInstance: l } = e,
          d = (0, u.useStateFromStores)([r.default], () =>
            r.default.getDefaultChannel(
              t.id,
              !0,
              c.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          o = (0, u.useStateFromStores)([i.default], () =>
            (0, s.canViewInviteModal)(i.default, t, a, l)
          ),
          f = E(n, t, o && null != a ? a : d),
          I = _(n);
        return null == a && n === c.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : o || null != d
            ? f
            : I;
      }
      let E = (e, n, u) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: o.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === c.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: l } = await t
                  .el("310688")
                  .then(t.bind(t, "310688"));
                return t =>
                  (0, a.jsx)(l, { ...t, guild: n, channel: u, source: e });
              }),
          }),
        _ = e =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: o.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === c.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: e } = await t
                  .el("973132")
                  .then(t.bind(t, "973132"));
                return n => (0, a.jsx)(e, { ...n });
              }),
          });
    },
  },
]);
//# sourceMappingURL=0717df03cc2b1b252bb3.js.map

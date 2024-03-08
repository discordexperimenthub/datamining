(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81239"],
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
    599943: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        });
      var a = t("37983");
      t("884691");
      var u = t("77078"),
        l = t("272030"),
        s = t("158534"),
        r = t("812204"),
        i = t("861370"),
        d = t("308798"),
        o = t("47006"),
        c = t("878526"),
        f = t("782340"),
        E = (0, s.default)(
          function (e) {
            let { channel: n, guild: t, onSelect: s } = e,
              r = (0, o.default)(n),
              E = (0, c.default)(n, t),
              _ = (0, d.default)(n),
              I = (0, i.default)({
                id: n.id,
                label: f.default.Messages.COPY_ID_CHANNEL,
              });
            return (0, a.jsxs)(u.Menu, {
              navId: "channel-context",
              onClose: l.closeContextMenu,
              "aria-label": f.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, a.jsx)(u.MenuGroup, { children: r }),
                (0, a.jsx)(u.MenuGroup, { children: E }),
                (0, a.jsx)(u.MenuGroup, { children: _ }),
                (0, a.jsx)(u.MenuGroup, { children: I }),
              ],
            });
          },
          [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_STORE_CHANNEL_MENU]
        );
    },
    47006: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
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
      function o(e) {
        let {
          canManageChannels: n,
          canManageRoles: t,
          canManageWebhooks: o,
          canAccessChannel: c,
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
        return !__OVERLAY__ && c && (n || t || o)
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
        o = t("49111"),
        c = t("782340");
      function f(e) {
        let { source: n, guild: t, channel: a, stageInstance: l } = e,
          d = (0, u.useStateFromStores)([r.default], () =>
            r.default.getDefaultChannel(
              t.id,
              !0,
              o.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, u.useStateFromStores)([i.default], () =>
            (0, s.canViewInviteModal)(i.default, t, a, l)
          ),
          f = E(n, t, c && null != a ? a : d),
          I = _(n);
        return null == a && n === o.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : c || null != d
            ? f
            : I;
      }
      let E = (e, n, u) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
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
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
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
//# sourceMappingURL=9bf3452c38598198d33e.js.map

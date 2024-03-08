(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26886"],
  {
    87657: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
          },
        });
      var u = t("37983"),
        a = t("884691"),
        r = t("77078"),
        i = t("390236"),
        o = a.memo(function (e) {
          var n, t, o, l;
          let {
              user: d,
              size: s = r.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": f = !1,
              ...M
            } = e,
            p = a.useContext(i.default);
          return (0, u.jsx)(r.Avatar, {
            src:
              ((n = d),
              (t = (0, r.getAvatarSize)(s)),
              (o = c),
              (l = p),
              n.getAvatarURL(l, t, o)),
            size: s,
            "aria-label": f ? void 0 : d.username,
            "aria-hidden": f,
            ...M,
          });
        });
    },
    441823: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          openUserContextMenu: function () {
            return r;
          },
          openModerateUserContextMenu: function () {
            return i;
          },
          openModerateRoleContextMenu: function () {
            return o;
          },
          openModerationRaidContextMenu: function () {
            return l;
          },
        }),
        t("70102");
      var u = t("37983");
      t("884691");
      var a = t("272030");
      function r(e, n, r) {
        r.isGroupDM()
          ? (0, a.openContextMenuLazy)(e, async () => {
              let { default: e } = await t
                .el("166452")
                .then(t.bind(t, "166452"));
              return t => (0, u.jsx)(e, { ...t, user: n, channel: r });
            })
          : r.isDM()
            ? (0, a.openContextMenuLazy)(e, async () => {
                let { default: e } = await t
                  .el("130074")
                  .then(t.bind(t, "130074"));
                return t =>
                  (0, u.jsx)(e, {
                    ...t,
                    user: n,
                    channel: r,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != r.guild_id
              ? (0, a.openContextMenuLazy)(e, async () => {
                  let { default: e } = await t
                    .el("834247")
                    .then(t.bind(t, "834247"));
                  return t =>
                    (0, u.jsx)(e, {
                      ...t,
                      user: n,
                      channel: r,
                      guildId: r.guild_id,
                    });
                })
              : (0, a.openContextMenuLazy)(e, async () => {
                  let { default: e } = await t
                    .el("406784")
                    .then(t.bind(t, "406784"));
                  return t => (0, u.jsx)(e, { ...t, user: n });
                });
      }
      function i(e, n) {
        let { user: r, channel: i, moderationAlertId: o, guildId: l, ...d } = n;
        if (
          (null == i ? void 0 : i.isGroupDM()) ||
          (null == i ? void 0 : i.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let s = null != l ? l : null == i ? void 0 : i.getGuildId();
        null != s &&
          (0, a.openContextMenuLazy)(e, async () => {
            let { default: e } = await t.el("467940").then(t.bind(t, "467940"));
            return n =>
              (0, u.jsx)(e, {
                ...n,
                user: r,
                channelId: null == i ? void 0 : i.id,
                guildId: s,
                moderationAlertId: o,
                ...d,
              });
          });
      }
      function o(e, n) {
        let {
          user: r,
          guildId: i,
          analyticsLocations: o,
          onCloseContextMenu: l,
        } = n;
        (0, a.openContextMenuLazy)(e, async () => {
          let { default: e } = await t.el("522651").then(t.bind(t, "522651"));
          return n =>
            (0, u.jsx)(e, {
              ...n,
              user: r,
              guildId: i,
              analyticsLocations: o,
              onCloseContextMenu: l,
            });
        });
      }
      function l(e, n, r) {
        null != r &&
          (0, a.openContextMenuLazy)(e, async () => {
            let { default: e } = await t.el("701587").then(t.bind(t, "701587"));
            return n => (0, u.jsx)(e, { ...n, guildId: r });
          });
      }
    },
  },
]);
//# sourceMappingURL=7c5aa37e9d521f84487a.js.map

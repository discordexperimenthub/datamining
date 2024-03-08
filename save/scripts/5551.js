(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5551"],
  {
    896982: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var a = l("37983");
      l("884691");
      var n = l("446674"),
        u = l("77078"),
        d = l("272030"),
        i = l("851387"),
        s = l("383173"),
        o = l("677099"),
        r = l("542827"),
        c = l("734134"),
        f = l("49111"),
        m = l("782340");
      function E(e) {
        var t;
        let {
            folderId: E,
            folderName: _,
            folderColor: M,
            unread: b,
            onSelect: p,
          } = e,
          S = (0, n.useStateFromStores)(
            [o.default],
            () => o.default.getGuildFolderById(E),
            [E]
          ),
          L = (0, c.default)(
            null !== (t = null == S ? void 0 : S.guildIds) && void 0 !== t
              ? t
              : []
          ),
          g = (0, n.useStateFromStores)(
            [s.default],
            () => s.default.getExpandedFolders().size > 0
          );
        return (0, a.jsxs)(u.Menu, {
          navId: "guild-context",
          "aria-label": m.default.Messages.GUILD_ACTIONS_MENU_LABEL,
          onClose: d.closeContextMenu,
          onSelect: p,
          children: [
            (0, a.jsx)(u.MenuGroup, {
              children: (0, a.jsx)(u.MenuItem, {
                id: "mark-folder-read",
                label: m.default.Messages.SERVER_FOLDER_MARK_AS_READ,
                action: function () {
                  if (null == S) return;
                  let { guildIds: e } = S;
                  (0, r.default)(e, f.AnalyticsSections.GUILD_LIST);
                },
                disabled: !b,
              }),
            }),
            null != L ? (0, a.jsx)(u.MenuGroup, { children: L }) : null,
            (0, a.jsxs)(u.MenuGroup, {
              children: [
                (0, a.jsx)(u.MenuItem, {
                  id: "folder-settings",
                  label: m.default.Messages.SERVER_FOLDER_SETTINGS,
                  action: () =>
                    (0, u.openModalLazy)(async () => {
                      let { default: e } = await l
                        .el("892262")
                        .then(l.bind(l, "892262"));
                      return t =>
                        (0, a.jsx)(e, {
                          ...t,
                          folderId: E,
                          folderName: _,
                          folderColor: M,
                        });
                    }),
                }),
                g &&
                  (0, a.jsx)(u.MenuItem, {
                    id: "folder-collapse",
                    label: m.default.Messages.SERVER_FOLDER_COLLAPSE_ALL,
                    action: () => i.default.collapseAllFolders(),
                  }),
              ],
            }),
          ],
        });
      }
    },
    734134: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return M;
          },
        });
      var a = l("37983"),
        n = l("884691"),
        u = l("866227"),
        d = l.n(u),
        i = l("446674"),
        s = l("77078"),
        o = l("519705"),
        r = l("531674"),
        c = l("862205"),
        f = l("282109"),
        m = l("34676"),
        E = l("782340");
      let _ = (0, c.createExperiment)({
        kind: "user",
        id: "2022-02_guild_folder_mute",
        label: "Guild Folder Mute",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function M(e, t) {
        let { enabled: l } = _.useExperiment(
            { location: "74d87e_1" },
            { autoTrackExposure: !1 }
          ),
          u = (0, i.useStateFromStoresObject)(
            [f.default],
            () => Object.fromEntries(e.map(e => [e, f.default.isMuted(e)])),
            [e]
          ),
          c = n.useCallback(
            l => {
              let a = Object.fromEntries(
                e
                  .filter(e => !u[e])
                  .map(e => [
                    e,
                    {
                      muted: !0,
                      mute_config:
                        null != l
                          ? {
                              selected_time_window: l,
                              end_time:
                                l > 0
                                  ? d().add(l, "second").toISOString()
                                  : null,
                            }
                          : void 0,
                    },
                  ])
              );
              o.default.updateGuildNotificationSettingsBulk(
                a,
                m.NotificationLabels.Muted,
                t
              );
            },
            [e, t, u]
          ),
          M = n.useCallback(() => {
            o.default.updateGuildNotificationSettingsBulk(
              Object.fromEntries(
                e.filter(e => u[e]).map(e => [e, { muted: !1 }])
              ),
              m.NotificationLabels.Unmuted,
              t
            );
          }, [e, t, u]);
        return l
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.MenuItem, {
                  id: "mute-folder",
                  label: E.default.Messages.SERVER_FOLDER_MUTE_ALL,
                  action: () => c(),
                  children: (0, r.getMuteTimes)().map(e => {
                    let { value: t, label: l } = e;
                    return (0, a.jsx)(
                      s.MenuItem,
                      { id: "".concat(t), label: l, action: () => c(t) },
                      t
                    );
                  }),
                }),
                (0, a.jsx)(s.MenuItem, {
                  id: "unmute-folder",
                  label: E.default.Messages.SERVER_FOLDER_UNMUTE_ALL,
                  action: M,
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=52eda252e0cd295a452a.js.map

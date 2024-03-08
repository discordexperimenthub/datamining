(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17369"],
  {
    443070: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var n = a("37983"),
        l = a("884691"),
        i = a("77078"),
        u = a("272030"),
        r = a("861370"),
        d = a("782340");
      function s(e) {
        var t;
        let a = (0, r.default)({
          id: e.id,
          label: e.label,
          shiftId: e.shiftId,
        });
        return (
          l.useEffect(() => {
            null == a && (0, u.closeContextMenu)();
          }, [a]),
          (0, n.jsx)(i.Menu, {
            onSelect: e.onSelect,
            navId: "dev-context",
            "aria-label":
              null !== (t = e["aria-label"]) && void 0 !== t
                ? t
                : d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
            onClose: u.closeContextMenu,
            children: a,
          })
        );
      }
    },
    975419: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        i = a("77078"),
        u = a("272030"),
        r = a("299285"),
        d = a("443070"),
        s = a("686470"),
        c = a("845266"),
        o = a("615019"),
        f = a("433294"),
        I = a("883378"),
        A = a("423219"),
        _ = a("359327"),
        T = a("170616"),
        E = a("75967"),
        N = a("517033"),
        p = a("49111"),
        L = a("782340");
      function C(e) {
        let {
            application: t,
            libraryApplication: a,
            analyticsContext: l,
            onSelect: r,
          } = e,
          d = null != l ? l.location : null,
          s = { ...d, object: p.AnalyticsObjects.CONTEXT_MENU },
          C = (0, I.default)(a, s),
          g = (0, A.default)(a),
          M = (0, T.default)(a),
          O = (0, N.default)(a),
          b = (0, E.default)(a),
          P = (0, f.default)(a, t),
          S = (0, _.default)(a, t),
          h = (0, c.default)(a, t),
          m = (0, o.default)(t);
        return (0, n.jsxs)(i.Menu, {
          navId: "game-context",
          onClose: u.closeContextMenu,
          "aria-label": L.default.Messages.APPLICATION_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: [
            C,
            g,
            M,
            O,
            b,
            P,
            S,
            (0, n.jsx)(i.MenuGroup, { children: h }),
            (0, n.jsx)(i.MenuGroup, { children: m }),
          ],
        });
      }
      function g(e) {
        let { applicationId: t, branchId: a } = e,
          i = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.getApplication(t),
            [t]
          ),
          u = (0, l.useStateFromStores)(
            [s.default],
            () =>
              null != a
                ? s.default.getLibraryApplication(t, a)
                : s.default.getActiveLibraryApplication(t),
            [t, a]
          );
        return null == i || null == u
          ? (0, n.jsx)(d.default, {
              ...e,
              id: t,
              label: L.default.Messages.COPY_ID_APPLICATION,
            })
          : (0, n.jsx)(C, { ...e, application: i, libraryApplication: u });
      }
    },
    845266: function (e, t, a) {
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
        i = a("845579"),
        u = a("306160"),
        r = a("782340");
      function d(e, t) {
        let a = t.primarySkuId,
          d = i.DeveloperMode.useSetting();
        return !__OVERLAY__ && d && u.SUPPORTS_COPY
          ? (0, n.jsxs)(l.MenuItem, {
              id: "application-dev",
              label: r.default.Messages.COPY,
              action: () => (0, u.copy)(t.id),
              children: [
                (0, n.jsx)(l.MenuItem, {
                  id: "app-id",
                  label:
                    r.default.Messages.APPLICATION_CONTEXT_MENU_APPLICATION_ID,
                  action: () => (0, u.copy)(t.id),
                }),
                null != e
                  ? (0, n.jsx)(l.MenuItem, {
                      id: "branch-id",
                      label:
                        r.default.Messages.APPLICATION_CONTEXT_MENU_BRANCH_ID,
                      action: () => (0, u.copy)(e.branchId),
                    })
                  : null,
                null != a
                  ? (0, n.jsx)(l.MenuItem, {
                      id: "sku-id",
                      label: r.default.Messages.APPLICATION_CONTEXT_MENU_SKU_ID,
                      action: () => (0, u.copy)(a),
                    })
                  : null,
              ],
            })
          : null;
      }
    },
    615019: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        i = a("77078"),
        u = a("42887"),
        r = a("782340");
      function d(e) {
        let t = (0, l.useStateFromStores)(
          [u.default],
          () => u.default.hasContext(e.id),
          [e.id]
        );
        return t
          ? (0, n.jsx)(i.MenuItem, {
              id: "ingame-voice",
              label: r.default.Messages.IN_GAME_VOICE_SETTINGS,
              action: () =>
                (0, i.openModalLazy)(async () => {
                  let { default: t } = await a
                    .el("301450")
                    .then(a.bind(a, "301450"));
                  return a =>
                    (0, n.jsx)(t, {
                      ...a,
                      mediaEngineContext: e.id,
                      title: e.name,
                    });
                }),
            })
          : null;
      }
    },
    433294: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        i = a("77078"),
        u = a("535974"),
        r = a("269180"),
        d = a("773336"),
        s = a("782340");
      function c(e, t) {
        let a = e.getBranchedName(t),
          c = (0, l.useStateFromStores)(
            [u.default],
            () => {
              let t = u.default.getState(e.id, e.branchId);
              return null == t ? void 0 : t.installPath;
            },
            [e.branchId, e.id]
          );
        return null != c && (0, d.isDesktop)()
          ? (0, n.jsx)(i.MenuItem, {
              id: "create-shortcut",
              label:
                s.default.Messages
                  .APPLICATION_CONTEXT_MENU_CREATE_DESKTOP_SHORTCUT,
              action: () => r.default.createShortcuts(!0, !1, a, e.id, c),
            })
          : null;
      }
    },
    883378: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        i = a("77078"),
        u = a("161454"),
        r = a("86878"),
        d = a("686470"),
        s = a("535974"),
        c = a("602043"),
        o = a("780009"),
        f = a("860285"),
        I = a("782340");
      function A(e, t) {
        let a = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.getRunningVerifiedApplicationIds().includes(e.id),
            [e.id]
          ),
          A = (0, l.useStateFromStores)(
            [d.default, f.default, s.default, r.default],
            () =>
              (0, c.isLaunchable)({
                LibraryApplicationStore: d.default,
                LaunchableGameStore: f.default,
                DispatchApplicationStore: s.default,
                ConnectedAppsStore: r.default,
                applicationId: e.id,
                branchId: e.branchId,
              }),
            [e.branchId, e.id]
          );
        return a || !A
          ? null
          : (0, n.jsx)(i.MenuItem, {
              id: "launch",
              label: I.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
              action: () =>
                o.playApplication(e.id, e, {
                  analyticsParams: { location: t },
                }),
            });
      }
    },
    423219: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        }),
        a("222007");
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        i = a("77078"),
        u = a("161454"),
        r = a("535974"),
        d = a("780009"),
        s = a("49111"),
        c = a("782340");
      function o(e) {
        let t = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.getRunningVerifiedApplicationIds().includes(e.id),
            [e.id]
          ),
          [a, o] = (0, l.useStateFromStoresArray)(
            [r.default],
            () => [
              r.default.isUpToDate(e.id, e.branchId),
              r.default.shouldPatch(e.id, e.branchId),
            ],
            [e.branchId, e.id]
          );
        return a && !t && o
          ? (0, n.jsx)(i.MenuItem, {
              id: "repair",
              label: c.default.Messages.APPLICATION_CONTEXT_MENU_REPAIR,
              action: () =>
                d.repairApplication(
                  e.id,
                  e.branchId,
                  s.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL
                ),
            })
          : null;
      }
    },
    359327: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return I;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        i = a("77078"),
        u = a("438931"),
        r = a("686470"),
        d = a("535974"),
        s = a("599110"),
        c = a("568734"),
        o = a("49111"),
        f = a("782340");
      function I(e, t) {
        let a = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.isInstalled(e.id, e.branchId),
            [e.branchId, e.id]
          ),
          I = (0, l.useStateFromStores)(
            [r.default],
            () => !r.default.hasRemovedLibraryApplicationThisSession
          );
        if (a && !e.isHidden()) return null;
        function A() {
          let t = (0, c.toggleFlag)(
            e.getFlags(),
            o.LibraryApplicationFlags.HIDDEN
          );
          u.updateFlags(e.id, e.branchId, t),
            s.default.track(o.AnalyticEvents.APPLICATION_SETTINGS_UPDATED, {
              hidden_enabled: (0, c.hasFlag)(
                t,
                o.LibraryApplicationFlags.HIDDEN
              ),
              ...e.getAnalyticsData(),
            });
        }
        return (0, n.jsx)(i.MenuItem, {
          id: "in-library",
          label: e.isHidden()
            ? f.default.Messages.APPLICATION_CONTEXT_MENU_SHOW
            : f.default.Messages.APPLICATION_CONTEXT_MENU_HIDE,
          action: function () {
            null != e &&
              null != t &&
              (e.isHidden() || !I
                ? A()
                : (0, i.openModal)(e =>
                    (0, n.jsx)(i.ConfirmModal, {
                      header:
                        f.default.Messages
                          .APPLICATION_LIBRARY_REMOVE_CONFIRM_HEADER,
                      confirmText:
                        f.default.Messages
                          .APPLICATION_LIBRARY_REMOVE_CONFIRM_CONFIRM,
                      cancelText: f.default.Messages.CANCEL,
                      onConfirm: () => A(),
                      confirmButtonColor: i.Button.Colors.BRAND,
                      ...e,
                      children: (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children:
                          f.default.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_BODY.format(
                            { name: t.name }
                          ),
                      }),
                    })
                  ));
          },
        });
      }
    },
    170616: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return I;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("446674"),
        i = a("77078"),
        u = a("711115"),
        r = a("161454"),
        d = a("677225"),
        s = a("535974"),
        c = a("780009"),
        o = a("49111"),
        f = a("782340");
      function I(e) {
        let t = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.getRunningVerifiedApplicationIds().includes(e.id),
            [e.id]
          ),
          a = (0, l.useStateFromStores)(
            [s.default],
            () => s.default.isInstalled(e.id, e.branchId),
            [e.branchId, e.id]
          ),
          I = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.getTargetManifests(e.id, e.branchId),
            [e.branchId, e.id]
          );
        if (a)
          return t
            ? null
            : (0, n.jsx)(i.MenuItem, {
                id: "uninstall",
                label: f.default.Messages.APPLICATION_CONTEXT_MENU_UNINSTALL,
                action: () =>
                  (0, u.uninstallBranchPrompt)(
                    e.id,
                    e.branchId,
                    o.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL
                  ),
              });
        return null == I
          ? null
          : (0, n.jsx)(i.MenuItem, {
              id: "install",
              label: f.default.Messages.APPLICATION_CONTEXT_MENU_INSTALL,
              action: () =>
                c.installApplication(
                  e.id,
                  e.branchId,
                  o.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL
                ),
            });
      }
    },
    75967: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("77078"),
        i = a("438931"),
        u = a("599110"),
        r = a("568734"),
        d = a("49111"),
        s = a("782340");
      function c(e) {
        return null == e
          ? null
          : (0, n.jsx)(l.MenuCheckboxItem, {
              id: "on-overlay",
              label:
                s.default.Messages
                  .APPLICATION_CONTEXT_MENU_TOGGLE_OVERLAY_DISABLE,
              action: function () {
                if (null == e) return;
                let t = (0, r.toggleFlag)(
                  e.getFlags(),
                  d.LibraryApplicationFlags.OVERLAY_DISABLED
                );
                i.updateFlags(e.id, e.branchId, t),
                  u.default.track(
                    d.AnalyticEvents.APPLICATION_SETTINGS_UPDATED,
                    {
                      overlay_disabled: (0, r.hasFlag)(
                        t,
                        d.LibraryApplicationFlags.OVERLAY_DISABLED
                      ),
                      ...e.getAnalyticsData(),
                    }
                  );
              },
              checked: e.hasFlag(d.LibraryApplicationFlags.OVERLAY_DISABLED),
            });
      }
    },
    517033: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("77078"),
        i = a("438931"),
        u = a("599110"),
        r = a("568734"),
        d = a("49111"),
        s = a("782340");
      function c(e) {
        return null == e
          ? null
          : (0, n.jsx)(l.MenuCheckboxItem, {
              id: "private",
              label: s.default.Messages.APPLICATION_CONTEXT_MENU_PRIVATE_STATUS,
              action: function () {
                if (null == e) return;
                let t = (0, r.toggleFlag)(
                  e.getFlags(),
                  d.LibraryApplicationFlags.PRIVATE
                );
                i.updateFlags(e.id, e.branchId, t),
                  u.default.track(
                    d.AnalyticEvents.APPLICATION_SETTINGS_UPDATED,
                    {
                      private_enabled: (0, r.hasFlag)(
                        t,
                        d.LibraryApplicationFlags.PRIVATE
                      ),
                      ...e.getAnalyticsData(),
                    }
                  );
              },
              checked: e.hasFlag(d.LibraryApplicationFlags.PRIVATE),
            });
      }
    },
  },
]);
//# sourceMappingURL=93410e9f306b2239baf0.js.map

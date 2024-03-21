(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7540"],
  {
    565581: function (t, e, n) {
      "use strict";
      t.exports = n.p + "f6bc645aead00959a690.svg";
    },
    154393: function (t, e, n) {
      "use strict";
      t.exports = n.p + "fef39f80370ecfd7507d.svg";
    },
    280609: function (t, e, n) {
      "use strict";
      t.exports = n.p + "c00cfaed1382bf7f33d4.svg";
    },
    595247: function (t, e, n) {
      "use strict";
      t.exports = n.p + "c8576c5063b9f32889cb.svg";
    },
    551921: function (t, e, n) {
      "use strict";
      t.exports = n.p + "27f92332674f9dacc1e9.svg";
    },
    153518: function (t, e, n) {
      "use strict";
      t.exports = n.p + "f95c22b2edd5edef268b.svg";
    },
    959254: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          sync: function () {
            return c;
          },
        }),
        n("70102");
      var l = n("913144"),
        a = n("605250"),
        i = n("149190"),
        o = n("49111");
      let s = new a.default("CloudSync");
      class r {
        constructor(t) {
          this.message = t;
        }
      }
      async function c(t, e) {
        let n,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        l.default.dispatch({
          type: "GAME_CLOUD_SYNC_START",
          applicationId: t,
          branchId: e,
        });
        try {
          if (
            (n = await i.syncApplication(t, e, a)).type ===
            o.CloudSyncResultTypes.CONFLICT
          )
            throw (
              (l.default.dispatch({
                type: "GAME_CLOUD_SYNC_CONFLICT",
                applicationId: t,
                branchId: e,
                next: n.next,
                remote: n.remote,
              }),
              new r("Conflict in cloud sync."))
            );
          (n.type === o.CloudSyncResultTypes.PULL ||
            n.type === o.CloudSyncResultTypes.PUSH) &&
            s.info("Sync complete", n);
        } catch (n) {
          if (n instanceof r) throw n;
          throw (
            (l.default.dispatch({
              type: "GAME_CLOUD_SYNC_ERROR",
              applicationId: t,
              branchId: e,
            }),
            s.error("Failed to cloud sync:", n),
            Error("Failed to cloud sync."))
          );
        }
        return (
          l.default.dispatch({
            type: "GAME_CLOUD_SYNC_COMPLETE",
            applicationId: t,
            branchId: e,
          }),
          n
        );
      }
    },
    596169: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          playApplication: function () {
            return O;
          },
        }),
        n("70102"),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        i = n("866227"),
        o = n.n(i),
        s = n("446674"),
        r = n("77078"),
        c = n("959254"),
        u = n("823411"),
        d = n("299285"),
        p = n("148813"),
        f = n("145131"),
        C = n("599110"),
        h = n("49111"),
        A = n("782340"),
        y = n("628471"),
        S = n("890957");
      class _ extends a.PureComponent {
        renderConflictButton(t, e, n, a) {
          return (0, l.jsxs)(r.Button, {
            className: y.conflictButton,
            innerClassName: y.conflictButtonInner,
            onClick: a,
            children: [
              (0, l.jsx)("div", { className: n }),
              (0, l.jsxs)("div", {
                className: y.buttonBody,
                children: [
                  (0, l.jsx)("div", {
                    className: y.conflictTitle,
                    children: t,
                  }),
                  (0, l.jsx)("div", {
                    children:
                      A.default.Messages
                        .CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED,
                  }),
                  (0, l.jsx)("div", {
                    className: y.timestamp,
                    children: o(e).calendar(),
                  }),
                ],
              }),
            ],
          });
        }
        renderError() {
          let { application: t } = this.props;
          return (0, l.jsxs)(a.Fragment, {
            children: [
              (0, l.jsxs)(r.ModalContent, {
                children: [
                  (0, l.jsx)(f.default, {
                    justify: f.default.Justify.CENTER,
                    children: (0, l.jsx)("div", { className: y.errorArt }),
                  }),
                  (0, l.jsx)("div", {
                    className: y.description,
                    children:
                      A.default.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format(
                        { applicationName: t.name }
                      ),
                  }),
                ],
              }),
              (0, l.jsx)(r.ModalFooter, {
                children: (0, l.jsxs)(f.default, {
                  justify: f.default.Justify.BETWEEN,
                  children: [
                    (0, l.jsx)(r.Button, {
                      className: y.linkButton,
                      size: y.linkButtonSize,
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      onClick: this.onClose,
                      children: A.default.Messages.CANCEL,
                    }),
                    (0, l.jsxs)(f.default, {
                      direction: f.default.Direction.HORIZONTAL,
                      justify: f.default.Justify.END,
                      children: [
                        (0, l.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: () => this.handlePlay(),
                          className: y.retryButton,
                          children: A.default.Messages.RETRY,
                        }),
                        (0, l.jsx)(r.Button, {
                          onClick: () => this.handlePlay(!1),
                          children: A.default.Messages.GAME_ACTION_BUTTON_PLAY,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        renderConflict() {
          let { application: t, cloudSyncState: e } = this.props;
          if (e.type !== h.CloudSyncStateTypes.CONFLICT)
            throw Error("Cannot render conflict for non conflict type");
          return (0, l.jsxs)(r.ModalContent, {
            className: S.marginBottom20,
            children: [
              (0, l.jsx)("div", {
                className: y.description,
                children:
                  A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format(
                    { applicationName: t.name }
                  ),
              }),
              this.renderConflictButton(
                A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD,
                e.remote.timestamp,
                y.conflictDownloadArt,
                this.handleChooseDownload
              ),
              (0, l.jsxs)(f.default, {
                className: y.choiceWrapper,
                align: f.default.Align.CENTER,
                children: [
                  (0, l.jsx)("div", { className: y.choiceLine }),
                  (0, l.jsx)("div", {
                    className: y.choiceTitle,
                    children: A.default.Messages.CLOUD_SYNC_MODAL_OR,
                  }),
                  (0, l.jsx)("div", { className: y.choiceLine }),
                ],
              }),
              this.renderConflictButton(
                A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD,
                e.next.timestamp,
                y.conflictUploadArt,
                this.handleChooseUpload
              ),
            ],
          });
        }
        render() {
          let { cloudSyncState: t, transitionState: e } = this.props,
            n =
              t.type === h.CloudSyncStateTypes.CONFLICT
                ? A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER
                : A.default.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
          return (0, l.jsxs)(r.ModalRoot, {
            transitionState: e,
            className: y.modal,
            "aria-label": n,
            children: [
              (0, l.jsxs)(r.ModalHeader, {
                separator: !1,
                children: [
                  (0, l.jsx)(r.ModalCloseButton, {
                    className: y.closeButton,
                    onClick: this.onClose,
                  }),
                  (0, l.jsx)(r.FormTitle, {
                    tag: "h2",
                    className: S.marginReset,
                    children: n,
                  }),
                ],
              }),
              t.type === h.CloudSyncStateTypes.CONFLICT
                ? this.renderConflict()
                : this.renderError(),
            ],
          });
        }
        constructor(...t) {
          var e;
          super(...t),
            (e = this),
            (this.onClose = () => {
              this.props.onClose();
            }),
            (this.handlePlay = function () {
              let t =
                  !(arguments.length > 0) ||
                  void 0 === arguments[0] ||
                  arguments[0],
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                { libraryApplication: l, analyticsParams: a } = e.props;
              e.onClose(),
                O(l.id, l, {
                  analyticsParams: a,
                  cloudSync: t,
                  cloudSyncForceHash: n,
                });
            }),
            (this.handleChooseDownload = () => {
              let { cloudSyncState: t } = this.props;
              t.type === h.CloudSyncStateTypes.CONFLICT &&
                this.handlePlay(!0, t.remote.hash);
            }),
            (this.handleChooseUpload = () => {
              let { cloudSyncState: t } = this.props;
              t.type === h.CloudSyncStateTypes.CONFLICT &&
                this.handlePlay(!0, t.next.hash);
            });
        }
      }
      let N = s.default.connectStores([p.default, d.default], t => {
        let { libraryApplication: e, branchId: n } = t;
        return {
          cloudSyncState: p.default.getState(e.id, n),
          application: d.default.getApplication(e.id),
        };
      })(_);
      async function O(t, e, n) {
        let a = d.default.getApplication(t);
        if (null == a) return;
        let {
          cloudSync: i = !0,
          cloudSyncForceHash: o = null,
          analyticsParams: s,
        } = n;
        if (i && null != e) {
          let t = e.branchId;
          try {
            await c.sync(e.id, t, o);
          } catch (n) {
            (0, r.openModal)(n =>
              (0, l.jsx)(N, {
                libraryApplication: e,
                analyticsParams: s,
                branchId: t,
                ...n,
              })
            );
            return;
          }
        }
        return (
          C.default.track(h.AnalyticEvents.APPLICATION_OPENED, {
            application_id: a.id,
            application_name: a.name,
            type: h.AnalyticsGameOpenTypes.LAUNCH,
            distributor: null != e ? e.getDistributor() : null,
            ...s,
          }),
          u.default.launch(a.id, null == e ? void 0 : e.branchId)
        );
      }
    },
    971427: function (t, e, n) {
      "use strict";
      let l;
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        }),
        n("424973");
      var a = n("446674"),
        i = n("913144");
      let o = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class s extends a.default.PersistedStore {
        initialize(t) {
          l = null != t ? t : o;
        }
        getState() {
          return l;
        }
        get hasAcceptedStoreTerms() {
          return l.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(t) {
          return l.hasAcceptedEulaIds.includes(t);
        }
      }
      (s.displayName = "ApplicationStoreUserSettingsStore"),
        (s.persistKey = "ApplicationStoreUserSettingsStore"),
        (s.migrations = [
          t =>
            null == t.hasAcceptedEulaIds ? { ...t, hasAcceptedEulaIds: [] } : t,
        ]);
      var r = new s(i.default, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
          l.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (t) {
          let { eulaId: e } = t;
          if (l.hasAcceptedEulaIds.includes(e)) return !1;
          l.hasAcceptedEulaIds.push(e);
        },
      });
    },
    148813: function (t, e, n) {
      "use strict";
      let l, a, i;
      n.r(e),
        n.d(e, {
          default: function () {
            return A;
          },
        }),
        n("222007");
      var o = n("446674"),
        s = n("913144"),
        r = n("959254"),
        c = n("161454"),
        u = n("686470"),
        d = n("964889"),
        p = n("773336"),
        f = n("149190"),
        C = n("49111");
      class h extends o.default.Store {
        initialize() {
          p.isPlatformEmbedded && f.init(), (l = {}), (a = new Set()), (i = []);
        }
        getState(t, e) {
          let n = (0, d.getComboId)(t, e);
          return l[n];
        }
        isSyncing(t, e) {
          let n = (0, d.getComboId)(t, e);
          return a.has(n);
        }
      }
      h.displayName = "CloudSyncStore";
      var A = new h(s.default, {
        GAME_CLOUD_SYNC_START: function (t) {
          let { applicationId: e, branchId: n } = t,
            l = (0, d.getComboId)(e, n);
          a.add(l);
        },
        GAME_CLOUD_SYNC_UPDATE: function (t) {
          let { state: e } = t;
          for (let t of Object.keys(e)) l[t] = e[t];
        },
        GAME_CLOUD_SYNC_COMPLETE: function (t) {
          let { applicationId: e, branchId: n } = t,
            i = (0, d.getComboId)(e, n);
          return (
            a.delete(i),
            (l[i] = {
              type: C.CloudSyncStateTypes.DONE,
              timestamp: Date.now(),
            }),
            !0
          );
        },
        GAME_CLOUD_SYNC_CONFLICT: function (t) {
          let { applicationId: e, branchId: n, next: i, remote: o } = t,
            s = (0, d.getComboId)(e, n);
          (l[s] = { type: C.CloudSyncStateTypes.CONFLICT, next: i, remote: o }),
            a.delete(s);
        },
        GAME_CLOUD_SYNC_ERROR: function (t) {
          let { applicationId: e, branchId: n } = t,
            i = (0, d.getComboId)(e, n);
          (l[i] = { type: C.CloudSyncStateTypes.ERROR }), a.delete(i);
        },
        RUNNING_GAMES_CHANGE: function () {
          let t = c.default.getRunningDiscordApplicationIds(),
            e = i.filter(e => !t.includes(e));
          for (let t of e) {
            let e = u.default.getActiveLibraryApplication(t);
            null != e &&
              s.default.wait(() => {
                try {
                  r.sync(e.id, e.branchId);
                } catch (t) {}
              });
          }
          return (i = t), !1;
        },
      });
    },
    149190: function (t, e, n) {
      "use strict";
      let l;
      n.r(e),
        n.d(e, {
          init: function () {
            return C;
          },
          syncApplication: function () {
            return h;
          },
        }),
        n("70102");
      var a = n("872717"),
        i = n("913144"),
        o = n("605250"),
        s = n("831610"),
        r = n("271938"),
        c = n("535974"),
        u = n("964889"),
        d = n("773336"),
        p = n("50885"),
        f = n("49111");
      async function C() {
        if (null != l) return;
        if (!(d.isPlatformEmbedded && ((0, d.isMac)() || (0, d.isWindows)()))) {
          new (0, o.default)("CloudSyncUtils").warn(
            "CloudSync is not supported on this platform"
          );
          return;
        }
        await p.default.ensureModule("discord_cloudsync");
        let t = p.default.getCloudSync();
        (l = new t()).on("state", t =>
          i.default.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: t })
        );
      }
      function h(t, e) {
        var n;
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!c.default.supportsCloudSync(t, e))
          return Promise.resolve({ type: f.CloudSyncResultTypes.NONE });
        let o = (function () {
            if (null == l)
              throw Error("Initialize cloud sync module before syncing.");
            return l;
          })(),
          d = c.default.getState(t, e);
        if (null == d)
          throw Error("No dispatch state for ".concat(t, ":").concat(e));
        let p = null !== (n = d.storage) && void 0 !== n ? n : {},
          C = (0, u.getComboId)(t, e),
          h = r.default.getToken();
        if (null == h)
          throw Error("Cannot use cloud sync when not authenticated.");
        let A = null != d.installPath ? (0, s.default)(d.installPath) : null;
        if (null == A)
          throw Error("No install path for ".concat(t, ":").concat(e));
        let y = r.default.getId(),
          S = {
            forceHash: i,
            manifestPath: f.DefaultCloudSyncConfiguration.STORAGE_MANIFEST(
              A,
              y
            ),
            roots:
              null != p.roots
                ? p.roots
                : [
                    {
                      id: f.DefaultCloudSyncConfiguration.ROOT_ID,
                      paths: Object.keys(
                        f.DefaultCloudSyncConfiguration.ROOT_PLATFORMS
                      ).map(t => ({
                        platform: t,
                        path: f.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(
                          A,
                          y
                        ),
                      })),
                      patterns: f.DefaultCloudSyncConfiguration.ROOT_PATTERN,
                    },
                  ],
            storage: {
              baseURL: ""
                .concat((0, a.getAPIBaseURL)())
                .concat(f.Endpoints.APPLICATION_STORAGE(t, e)),
              token: h,
            },
            replacements: {
              INSTALLDIR: f.DefaultCloudSyncConfiguration.INSTALL_DIR(A),
              USERID: y,
              BRANCHID: e,
            },
          };
        return o.sync(C, S);
      }
    },
    551994: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          installApplication: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        i = n("190017"),
        o = n("971427"),
        s = n("98328");
      function r(t, e, r, c, u) {
        let d = s.default.getInstallationPath(t.id, e),
          p = null != t.eulaId && !o.default.hasAcceptedEULA(t.eulaId);
        null == d || p
          ? (0, a.openModalLazy)(async () => {
              let { default: a } = await n
                .el("727441")
                .then(n.bind(n, "727441"));
              return n =>
                (0, l.jsx)(a, {
                  ...n,
                  applicationId: t.id,
                  branchId: e,
                  analyticsLocation: u,
                });
            })
          : (0, i.installApplication)({
              application: t,
              branchId: e,
              buildId: r,
              manifestIds: c,
              installationPath: d,
              analyticsLocation: u,
            });
      }
    },
    780009: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          playApplication: function () {
            return a.playApplication;
          },
          installApplication: function () {
            return p;
          },
          updateApplication: function () {
            return f;
          },
          repairApplication: function () {
            return C;
          },
          performDefaultLibraryApplicationAction: function () {
            return h;
          },
        });
      var l = n("190017"),
        a = n("596169"),
        i = n("299285"),
        o = n("677225"),
        s = n("9377"),
        r = n("535974"),
        c = n("352326"),
        u = n("551994"),
        d = n("49111");
      function p(t, e, n) {
        let l = i.default.getApplication(t);
        if (null == l) return;
        let a = o.default.getTargetBuildId(l.id, e),
          s = o.default.getTargetManifests(l.id, e);
        null != a &&
          null != s &&
          null != u.installApplication &&
          (0, u.installApplication)(l, e, a, s, n);
      }
      function f(t, e) {
        let n = i.default.getApplication(t);
        if (null != n)
          return l.updateApplication(
            n,
            e,
            o.default.getTargetBuildId(n.id, e),
            o.default.getTargetManifests(n.id, e)
          );
      }
      function C(t, e, n) {
        let a = i.default.getApplication(t);
        if (null != a) return l.repairApplication(a, e, n);
      }
      function h(t, e) {
        let n = (0, s.getDefaultLibraryApplicationAction)(
            t,
            r.default,
            c.default
          ),
          { analyticsParams: l } = e;
        switch (n) {
          case d.LibraryApplicationActions.PLAY:
            return (0, a.playApplication)(t.id, t, { analyticsParams: l });
          case d.LibraryApplicationActions.INSTALL:
            return p(t.id, t.branchId, l.source);
          case d.LibraryApplicationActions.UPDATE:
            return f(t.id, t.branchId);
        }
      }
    },
  },
]);
//# sourceMappingURL=b93c4a1ade9f1deb111a.js.map

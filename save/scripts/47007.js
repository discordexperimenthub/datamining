(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47007"],
  {
    743925: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useActivityShelfData: function () {
            return f;
          },
        }),
        l("222007");
      var i = l("884691"),
        n = l("446674"),
        a = l("442939"),
        d = l("697218"),
        u = l("167726"),
        o = l("449008"),
        r = l("773336"),
        c = l("191225"),
        s = l("334368");
      function f(e) {
        let t = (0, n.useStateFromStores)(
            [d.default],
            d.default.getCurrentUser
          ),
          l = (0, n.useStateFromStoresArray)([c.default], () =>
            c.default.getShelfActivities(e)
          ),
          f = (0, n.useStateFromStores)(
            [u.default],
            () => u.default.testModeEmbeddedApplicationId
          ),
          p = l.map(e => e.application_id),
          v = null != f ? [f, ...p] : p,
          A = (0, a.default)(v),
          E = i.useMemo(() => A.filter(o.isNotNullish), [A]),
          m = i.useMemo(
            () =>
              null != f &&
              E.length > 0 &&
              E[0].id === f &&
              null != E[0].embeddedActivityConfig
                ? [{ activity: E[0].embeddedActivityConfig, application: E[0] }]
                : [],
            [E, f]
          ),
          y = i.useMemo(
            () =>
              l
                .map(e => {
                  let t = E.find(t => t.id === e.application_id);
                  return null == t ? null : { activity: e, application: t };
                })
                .filter(o.isNotNullish),
            [l, E]
          );
        return i.useMemo(
          () =>
            [...m, ...y]
              .filter(e => {
                var t;
                let { activity: l } = e;
                return (
                  null !== (t = l.supported_platforms) && void 0 !== t ? t : []
                ).includes((0, s.default)((0, r.getOS)()));
              })
              .filter(e => {
                let { activity: l } = e;
                return (
                  !l.requires_age_gate ||
                  (null == t ? void 0 : t.nsfwAllowed) === !0 ||
                  (null == t ? void 0 : t.nsfwAllowed) == null
                );
              }),
          [null == t ? void 0 : t.nsfwAllowed, y, m]
        );
      }
    },
    91761: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        }),
        l("222007");
      var i = l("446674"),
        n = l("84460"),
        a = l("743925"),
        d = l("807106"),
        u = l("119420");
      function o(e) {
        let { guildId: t, enableFilter: l = !1 } = e,
          { filter: o } = (0, i.useStateFromStoresObject)([n.default], () => ({
            filter: n.default.getFilter(),
          })),
          r = (0, a.useActivityShelfData)(t),
          c = (0, d.default)(r),
          s = (0, u.useDeveloperActivityShelfItems)();
        return [...s, ...c].filter(
          e =>
            !l ||
            "" === o ||
            e.application.name
              .toLocaleLowerCase()
              .includes(o.toLocaleLowerCase())
        );
      }
    },
    807106: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        }),
        l("424973"),
        l("222007");
      var i = l("884691"),
        n = l("798609"),
        a = l("605393"),
        d = l("872173"),
        u = l("773336"),
        o = l("334368");
      function r(e) {
        return (
          d.FrecencyUserSettingsActionCreators.loadIfNecessary(),
          i.useMemo(() => {
            let t = [];
            e.forEach(e => t.push(e.application.id));
            let l = [...t];
            l.sort((e, l) => {
              let i = a.default.getScoreWithoutLoadingLatest(e),
                n = a.default.getScoreWithoutLoadingLatest(l);
              return i !== n
                ? n - i
                : t.findIndex(t => t === e) < t.findIndex(e => e === l)
                  ? -1
                  : 1;
            });
            let i = c(e, l);
            return i;
          }, [e])
        );
      }
      let c = (e, t) => {
        let l = [...e],
          i = 0;
        return (
          t.forEach(e => {
            let t = l.findIndex(t => t.application.id === e);
            if (-1 !== t) {
              let e = l[t];
              l.splice(t, 1), (l = [...l.slice(0, i), e, ...l.slice(i)]), ++i;
            }
          }),
          l
            .map((e, t) => [e, t])
            .filter(e => {
              var t, l;
              let [i] = e,
                a =
                  null === (l = i.application.embeddedActivityConfig) ||
                  void 0 === l
                    ? void 0
                    : null ===
                          (t =
                            l.client_platform_config[
                              (0, o.default)((0, u.getOS)())
                            ]) || void 0 === t
                      ? void 0
                      : t.label_type;
              return (
                !!a &&
                (a === n.EmbeddedActivityLabelTypes.NEW ||
                  a === n.EmbeddedActivityLabelTypes.UPDATED)
              );
            })
            .forEach(e => {
              let [t, i] = e,
                n =
                  null != t.application.embeddedActivityConfig &&
                  null != t.application.embeddedActivityConfig.shelf_rank
                    ? t.application.embeddedActivityConfig.shelf_rank - 1
                    : i;
              if (n < i) {
                let e = l[i];
                l.splice(i, 1), (l = [...l.slice(0, n), e, ...l.slice(n)]);
              }
            }),
          l
        );
      };
    },
    119420: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useDeveloperActivityShelfItems: function () {
            return u;
          },
        });
      var i = l("884691"),
        n = l("446674"),
        a = l("84460"),
        d = l("954016");
      let u = () => {
        let { isEnabled: e, lastUsedObject: t } = (0,
          n.useStateFromStoresObject)(
            [a.default],
            () => ({
              isEnabled: a.default.getIsEnabled(),
              lastUsedObject: a.default.getLastUsedObject(),
            }),
            []
          ),
          l = (0, n.useStateFromStoresArray)(
            [a.default],
            () => a.default.getDeveloperShelfItems(),
            []
          ),
          u = i.useMemo(
            () =>
              e
                ? l
                    .map(e => {
                      let t = {
                        application: e,
                        activity: {
                          ...d.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
                          ...e.embeddedActivityConfig,
                          application_id: e.id,
                        },
                      };
                      return t;
                    })
                    .sort((e, l) => {
                      let i = t[e.application.id],
                        n = t[l.application.id];
                      return null == i ? 1 : null == n ? -1 : n - i;
                    })
                : [],
            [l, e, t]
          );
        return u;
      };
    },
    575136: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
          useEmbeddedAppsByChannel: function () {
            return s;
          },
          useEmbeddedApps: function () {
            return f;
          },
          useEmbeddedAppsWithPresence: function () {
            return p;
          },
        }),
        l("222007"),
        l("424973");
      var i = l("884691"),
        n = l("446674"),
        a = l("442939"),
        d = l("824563"),
        u = l("697218"),
        o = l("449008"),
        r = l("191225");
      function c(e, t) {
        let l = (0, n.useStateFromStoresArray)([r.default], () =>
            null != e && null != e.id && "" !== e.id
              ? r.default.getEmbeddedActivitiesForChannel(e.id)
              : r.NO_ACTIVITIES
          ),
          i = f(l, t);
        return i;
      }
      function s(e) {
        let t = (0, n.useStateFromStores)([r.default], () =>
            null != e
              ? r.default.getEmbeddedActivitiesForGuild(e)
              : r.NO_ACTIVITIES
          ),
          l = f(t),
          a = i.useMemo(() => {
            let e = new Map();
            return (
              l.forEach(t => {
                var l;
                let i = t.embeddedActivity.channelId,
                  n = null !== (l = e.get(i)) && void 0 !== l ? l : [];
                n.push(t), e.set(i, n);
              }),
              e
            );
          }, [l]);
        return a;
      }
      function f(e, t) {
        let l = e.map(e => e.applicationId),
          d = (0, a.default)(l),
          r = new Set([]);
        for (let t of e) for (let e of t.userIds) r.add(e);
        let c = (0, n.useStateFromStoresArray)(
            [u.default],
            () => {
              let e = [];
              for (let t of r) e.push(u.default.getUser(t));
              return e;
            },
            [r]
          ),
          s = i.useMemo(() => {
            let l = new Map();
            c.forEach(e => {
              null != e && l.set(e.id, e);
            });
            let i = e
              .map((e, i) => {
                let n = d[i],
                  a = [];
                if (null != a)
                  for (let i of e.userIds) {
                    let e = l.get(i);
                    if (null != e && null != t) {
                      let l = t(e);
                      null != l && a.push(l);
                    }
                  }
                return null == n
                  ? null
                  : {
                      embeddedActivity: e,
                      application: n,
                      userParticipantAvatarUrls: a,
                    };
              })
              .filter(o.isNotNullish);
            return i;
          }, [e, d, c, t]);
        return s;
      }
      function p(e) {
        let t = (0, n.useStateFromStores)(
          [d.default],
          () => {
            let t = new Map();
            return (
              e.forEach(e => {
                var l;
                let i = d.default.findActivity(
                  null == e
                    ? void 0
                    : e.embeddedActivity.userIds.values().next().value,
                  t => {
                    var l;
                    return (
                      t.application_id ===
                      (null == e
                        ? void 0
                        : null === (l = e.application) || void 0 === l
                          ? void 0
                          : l.id)
                    );
                  }
                );
                t.set(
                  null == e
                    ? void 0
                    : null === (l = e.application) || void 0 === l
                      ? void 0
                      : l.id,
                  { ...e, presenceActivity: i }
                );
              }),
              t
            );
          },
          [e],
          n.statesWillNeverBeEqual
        );
        return t;
      }
    },
    525167: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return n;
          },
        });
      var i = l("49111");
      function n(e, t) {
        let l;
        let n = window.GLOBAL_ENV.CDN_HOST,
          a = window.GLOBAL_ENV.API_ENDPOINT;
        return (l =
          null != n
            ? ""
                .concat(location.protocol, "//")
                .concat(n, "/app-assets/")
                .concat(e, "/store/")
                .concat(t, ".mp4")
            : ""
                .concat(location.protocol)
                .concat(a)
                .concat(i.Endpoints.STORE_ASSET(e, t, "mp4")));
      }
    },
    607573: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ActivityAction: function () {
            return i;
          },
          default: function () {
            return y;
          },
        }),
        l("781738");
      var i,
        n,
        a = l("798609"),
        d = l("685665"),
        u = l("773336"),
        o = l("191225"),
        r = l("706508"),
        c = l("986214"),
        s = l("575136"),
        f = l("334368"),
        p = l("525167"),
        v = l("577261"),
        A = l("698372"),
        E = l("969380"),
        m = l("954016");
      ((n = i || (i = {})).START = "START"),
        (n.JOIN = "JOIN"),
        (n.LEAVE = "LEAVE");
      function y(e) {
        let {
            activityItem: t,
            channel: l,
            guildId: i,
            locationObject: n,
            onActivityItemSelected: y,
            embeddedActivitiesManager: S,
            assetNames: b,
            backgroundResolution: _ = 250,
          } = e,
          { analyticsLocations: I } = (0, d.default)(),
          { application: g, activity: h } = t,
          T = h.client_platform_config[(0, f.default)((0, u.getOS)())],
          N = null != T.label_until && Date.now() < Date.parse(T.label_until),
          L = (0, E.default)({ applicationId: g.id, size: _, names: b }),
          C =
            null != h.activity_preview_video_asset_id
              ? (0, p.default)(g.id, h.activity_preview_video_asset_id)
              : null,
          w = (0, v.default)(),
          D = (0, A.default)(),
          O = (0, s.default)(l),
          F = O.find(e => {
            let { embeddedActivity: t } = e;
            return g.id === t.applicationId;
          }),
          M = "START",
          U = () => {
            (0, c.default)({
              activityItem: t,
              currentEmbeddedApplication: D,
              locationObject: n,
              guildId: i,
              channelId: null == l ? void 0 : l.id,
              embeddedActivitiesManager: S,
              analyticsLocations: I,
            }).then(
              e => e && (null == y ? void 0 : y({ applicationId: g.id }))
            );
          };
        null != l &&
        (null == w ? void 0 : w.channelId) === l.id &&
        (null == D ? void 0 : D.id) === g.id
          ? ((M = "LEAVE"),
            (U = () => {
              !o.default.isLaunchingActivity() &&
                (S.leaveActivity({ channelId: l.id, applicationId: g.id }),
                null == y || y({ applicationId: g.id }));
            }))
          : null != F &&
            ((M = "JOIN"),
            (U = () => {
              !o.default.isLaunchingActivity() &&
                (0, r.default)({
                  applicationId: F.embeddedActivity.applicationId,
                  currentEmbeddedApplication: D,
                  activityChannelId: null == l ? void 0 : l.id,
                  locationObject: n,
                  embeddedActivitiesManager: S,
                  analyticsLocations: I,
                }).then(
                  e => e && (null == y ? void 0 : y({ applicationId: g.id }))
                );
            }));
        let W =
            t.activity.client_platform_config[(0, f.default)((0, u.getOS)())]
              .release_phase,
          x = m.STAFF_RELEASE_PHASES.includes(W),
          P = x
            ? W.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase())
            : void 0;
        return {
          imageBackground: L,
          videoUrl: C,
          joinableEmbeddedApp: F,
          activityAction: M,
          onActivityItemSelected: U,
          labelType: N ? T.label_type : a.EmbeddedActivityLabelTypes.NONE,
          staffReleasePhase: P,
        };
      }
    },
    687292: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        }),
        l("222007");
      var i = l("37983"),
        n = l("884691"),
        a = l("77078"),
        d = l("798609"),
        u = l("956089"),
        o = l("782340"),
        r = l("827755");
      function c(e) {
        let {
            name: t,
            labelType: l,
            collapsed: c = !1,
            showTooltip: s = !1,
          } = e,
          f =
            l === d.EmbeddedActivityLabelTypes.NEW
              ? o.default.Messages.NEW
              : o.default.Messages.UPDATED,
          p =
            l === d.EmbeddedActivityLabelTypes.NEW
              ? r.activityNewBadge
              : r.activityUpdatedBadge,
          [v, A] = n.useState(c ? "" : f);
        if (
          (n.useEffect(() => {
            c
              ? A("")
              : l === d.EmbeddedActivityLabelTypes.NEW
                ? A(o.default.Messages.NEW)
                : l === d.EmbeddedActivityLabelTypes.UPDATED &&
                  A(o.default.Messages.UPDATED);
          }, [c, l]),
          l === d.EmbeddedActivityLabelTypes.NONE)
        )
          return null;
        let E = (0, i.jsx)(u.TextBadge, {
          className: p,
          disableColor: !0,
          text: (0, i.jsx)("span", { children: v }),
        });
        if (!s) return E;
        let m =
          o.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
            activity: t,
          });
        return (0, i.jsx)(a.TooltipContainer, {
          text: m,
          tooltipContentClassName: r.tooltip,
          children: E,
        });
      }
    },
  },
]);
//# sourceMappingURL=0da2fe9cf55137c44106.js.map

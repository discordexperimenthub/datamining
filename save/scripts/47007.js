(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47007"],
  {
    743925: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useActivityShelfData: function () {
            return f;
          },
        }),
        i("222007");
      var l = i("884691"),
        n = i("446674"),
        a = i("442939"),
        d = i("697218"),
        u = i("167726"),
        r = i("449008"),
        o = i("773336"),
        c = i("191225"),
        s = i("334368");
      function f(e) {
        let t = (0, n.useStateFromStores)(
            [d.default],
            d.default.getCurrentUser
          ),
          i = (0, n.useStateFromStoresArray)([c.default], () =>
            c.default.getShelfActivities(e)
          ),
          f = (0, n.useStateFromStores)(
            [u.default],
            () => u.default.testModeEmbeddedApplicationId
          ),
          p = i.map(e => e.application_id),
          v = null != f ? [f, ...p] : p,
          m = (0, a.default)(v),
          A = l.useMemo(() => m.filter(r.isNotNullish), [m]),
          E = l.useMemo(
            () =>
              null != f &&
              A.length > 0 &&
              A[0].id === f &&
              null != A[0].embeddedActivityConfig
                ? [{ activity: A[0].embeddedActivityConfig, application: A[0] }]
                : [],
            [A, f]
          ),
          y = l.useMemo(
            () =>
              i
                .map(e => {
                  let t = A.find(t => t.id === e.application_id);
                  return null == t ? null : { activity: e, application: t };
                })
                .filter(r.isNotNullish),
            [i, A]
          );
        return l.useMemo(
          () =>
            [...E, ...y]
              .filter(e => {
                var t;
                let { activity: i } = e;
                return (
                  null !== (t = i.supported_platforms) && void 0 !== t ? t : []
                ).includes((0, s.default)((0, o.getOS)()));
              })
              .filter(e => {
                let { activity: i } = e;
                return (
                  !i.requires_age_gate ||
                  (null == t ? void 0 : t.nsfwAllowed) === !0 ||
                  (null == t ? void 0 : t.nsfwAllowed) == null
                );
              }),
          [null == t ? void 0 : t.nsfwAllowed, y, E]
        );
      }
    },
    91761: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        }),
        i("222007"),
        i("424973");
      var l = i("884691"),
        n = i("446674"),
        a = i("84460"),
        d = i("743925"),
        u = i("807106"),
        r = i("119420");
      function o(e) {
        let { guildId: t, enableFilter: i = !1 } = e,
          { filter: o } = (0, n.useStateFromStoresObject)([a.default], () => ({
            filter: a.default.getFilter(),
          })),
          c = (0, d.useActivityShelfData)(t),
          s = (0, u.default)(c),
          f = (0, r.useDeveloperActivityShelfItems)();
        return l.useMemo(() => {
          function e(e) {
            return (
              !!(
                !i ||
                "" === o ||
                e.application.name.toLowerCase().includes(o.toLowerCase())
              ) || !1
            );
          }
          let t = [...f].filter(e),
            l = new Set(t.map(e => e.application.id));
          for (let i of s) !l.has(i.application.id) && e(i) && t.push(i);
          return t;
        }, [f, i, o, s]);
      }
    },
    807106: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        }),
        i("424973"),
        i("222007");
      var l = i("884691"),
        n = i("798609"),
        a = i("605393"),
        d = i("872173"),
        u = i("773336"),
        r = i("334368");
      function o(e) {
        return (
          d.FrecencyUserSettingsActionCreators.loadIfNecessary(),
          l.useMemo(() => {
            let t = [];
            e.forEach(e => t.push(e.application.id));
            let i = [...t];
            i.sort((e, i) => {
              let l = a.default.getScoreWithoutLoadingLatest(e),
                n = a.default.getScoreWithoutLoadingLatest(i);
              return l !== n
                ? n - l
                : t.findIndex(t => t === e) < t.findIndex(e => e === i)
                  ? -1
                  : 1;
            });
            let l = c(e, i);
            return l;
          }, [e])
        );
      }
      let c = (e, t) => {
        let i = [...e],
          l = 0;
        return (
          t.forEach(e => {
            let t = i.findIndex(t => t.application.id === e);
            if (-1 !== t) {
              let e = i[t];
              i.splice(t, 1), (i = [...i.slice(0, l), e, ...i.slice(l)]), ++l;
            }
          }),
          i
            .map((e, t) => [e, t])
            .filter(e => {
              var t, i;
              let [l] = e,
                a =
                  null === (i = l.application.embeddedActivityConfig) ||
                  void 0 === i
                    ? void 0
                    : null ===
                          (t =
                            i.client_platform_config[
                              (0, r.default)((0, u.getOS)())
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
              let [t, l] = e,
                n =
                  null != t.application.embeddedActivityConfig &&
                  null != t.application.embeddedActivityConfig.shelf_rank
                    ? t.application.embeddedActivityConfig.shelf_rank - 1
                    : l;
              if (n < l) {
                let e = i[l];
                i.splice(l, 1), (i = [...i.slice(0, n), e, ...i.slice(n)]);
              }
            }),
          i
        );
      };
    },
    119420: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useDeveloperActivityShelfItems: function () {
            return u;
          },
        });
      var l = i("884691"),
        n = i("446674"),
        a = i("84460"),
        d = i("954016");
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
          i = (0, n.useStateFromStoresArray)(
            [a.default],
            () => a.default.getDeveloperShelfItems(),
            []
          ),
          u = l.useMemo(
            () =>
              e
                ? i
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
                    .sort((e, i) => {
                      let l = t[e.application.id],
                        n = t[i.application.id];
                      return null == l ? 1 : null == n ? -1 : n - l;
                    })
                : [],
            [i, e, t]
          );
        return u;
      };
    },
    575136: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
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
        i("222007"),
        i("424973");
      var l = i("884691"),
        n = i("446674"),
        a = i("442939"),
        d = i("824563"),
        u = i("697218"),
        r = i("449008"),
        o = i("191225");
      function c(e, t) {
        let i = (0, n.useStateFromStoresArray)([o.default], () =>
            null != e && null != e.id && "" !== e.id
              ? o.default.getEmbeddedActivitiesForChannel(e.id)
              : o.NO_ACTIVITIES
          ),
          l = f(i, t);
        return l;
      }
      function s(e) {
        let t = (0, n.useStateFromStores)([o.default], () =>
            null != e
              ? o.default.getEmbeddedActivitiesForGuild(e)
              : o.NO_ACTIVITIES
          ),
          i = f(t),
          a = l.useMemo(() => {
            let e = new Map();
            return (
              i.forEach(t => {
                var i;
                let l = t.embeddedActivity.channelId,
                  n = null !== (i = e.get(l)) && void 0 !== i ? i : [];
                n.push(t), e.set(l, n);
              }),
              e
            );
          }, [i]);
        return a;
      }
      function f(e, t) {
        let i = e.map(e => e.applicationId),
          d = (0, a.default)(i),
          o = new Set([]);
        for (let t of e) for (let e of t.userIds) o.add(e);
        let c = (0, n.useStateFromStoresArray)(
            [u.default],
            () => {
              let e = [];
              for (let t of o) e.push(u.default.getUser(t));
              return e;
            },
            [o]
          ),
          s = l.useMemo(() => {
            let i = new Map();
            c.forEach(e => {
              null != e && i.set(e.id, e);
            });
            let l = e
              .map((e, l) => {
                let n = d[l],
                  a = [];
                if (null != a)
                  for (let l of e.userIds) {
                    let e = i.get(l);
                    if (null != e && null != t) {
                      let i = t(e);
                      null != i && a.push(i);
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
              .filter(r.isNotNullish);
            return l;
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
                var i;
                let l = d.default.findActivity(
                  null == e
                    ? void 0
                    : e.embeddedActivity.userIds.values().next().value,
                  t => {
                    var i;
                    return (
                      t.application_id ===
                      (null == e
                        ? void 0
                        : null === (i = e.application) || void 0 === i
                          ? void 0
                          : i.id)
                    );
                  }
                );
                t.set(
                  null == e
                    ? void 0
                    : null === (i = e.application) || void 0 === i
                      ? void 0
                      : i.id,
                  { ...e, presenceActivity: l }
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
    525167: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return n;
          },
        });
      var l = i("49111");
      function n(e, t) {
        let i;
        let n = window.GLOBAL_ENV.CDN_HOST,
          a = window.GLOBAL_ENV.API_ENDPOINT;
        return (i =
          null != n
            ? ""
                .concat(location.protocol, "//")
                .concat(n, "/app-assets/")
                .concat(e, "/store/")
                .concat(t, ".mp4")
            : ""
                .concat(location.protocol)
                .concat(a)
                .concat(l.Endpoints.STORE_ASSET(e, t, "mp4")));
      }
    },
    607573: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ActivityAction: function () {
            return l;
          },
          default: function () {
            return y;
          },
        }),
        i("781738");
      var l,
        n,
        a = i("798609"),
        d = i("685665"),
        u = i("773336"),
        r = i("191225"),
        o = i("706508"),
        c = i("986214"),
        s = i("575136"),
        f = i("334368"),
        p = i("525167"),
        v = i("577261"),
        m = i("698372"),
        A = i("969380"),
        E = i("954016");
      ((n = l || (l = {})).START = "START"),
        (n.JOIN = "JOIN"),
        (n.LEAVE = "LEAVE");
      function y(e) {
        let {
            activityItem: t,
            channel: i,
            guildId: l,
            locationObject: n,
            onActivityItemSelected: y,
            embeddedActivitiesManager: S,
            assetNames: b = ["embedded_cover"],
            backgroundResolution: _ = 250,
          } = e,
          { analyticsLocations: h } = (0, d.default)(),
          { application: I, activity: g } = t,
          T = g.client_platform_config[(0, f.default)((0, u.getOS)())],
          N = null != T.label_until && Date.now() < Date.parse(T.label_until),
          C = (0, A.default)({ applicationId: I.id, size: _, names: b }),
          L =
            null != g.activity_preview_video_asset_id
              ? (0, p.default)(I.id, g.activity_preview_video_asset_id)
              : null,
          w = (0, v.default)(),
          D = (0, m.default)(),
          O = (0, s.default)(i),
          M = O.find(e => {
            let { embeddedActivity: t } = e;
            return I.id === t.applicationId;
          }),
          F = "START",
          U = () => {
            (0, c.default)({
              activityItem: t,
              currentEmbeddedApplication: D,
              locationObject: n,
              guildId: l,
              channelId: null == i ? void 0 : i.id,
              embeddedActivitiesManager: S,
              analyticsLocations: h,
            }).then(
              e => e && (null == y ? void 0 : y({ applicationId: I.id }))
            );
          };
        null != i &&
        (null == w ? void 0 : w.channelId) === i.id &&
        (null == D ? void 0 : D.id) === I.id
          ? ((F = "LEAVE"),
            (U = () => {
              !r.default.isLaunchingActivity() &&
                (S.leaveActivity({ channelId: i.id, applicationId: I.id }),
                null == y || y({ applicationId: I.id }));
            }))
          : null != M &&
            ((F = "JOIN"),
            (U = () => {
              !r.default.isLaunchingActivity() &&
                (0, o.default)({
                  applicationId: M.embeddedActivity.applicationId,
                  currentEmbeddedApplication: D,
                  activityChannelId: null == i ? void 0 : i.id,
                  locationObject: n,
                  embeddedActivitiesManager: S,
                  analyticsLocations: h,
                }).then(
                  e => e && (null == y ? void 0 : y({ applicationId: I.id }))
                );
            }));
        let W =
            t.activity.client_platform_config[(0, f.default)((0, u.getOS)())]
              .release_phase,
          x = E.STAFF_RELEASE_PHASES.includes(W),
          P = x
            ? W.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase())
            : void 0;
        return {
          imageBackground: C,
          videoUrl: L,
          joinableEmbeddedApp: M,
          activityAction: F,
          onActivityItemSelected: U,
          labelType: N ? T.label_type : a.EmbeddedActivityLabelTypes.NONE,
          staffReleasePhase: P,
        };
      }
    },
    687292: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return c;
          },
        }),
        i("222007");
      var l = i("37983"),
        n = i("884691"),
        a = i("77078"),
        d = i("798609"),
        u = i("956089"),
        r = i("782340"),
        o = i("827755");
      function c(e) {
        let {
            name: t,
            labelType: i,
            collapsed: c = !1,
            showTooltip: s = !1,
          } = e,
          f =
            i === d.EmbeddedActivityLabelTypes.NEW
              ? r.default.Messages.NEW
              : r.default.Messages.UPDATED,
          p =
            i === d.EmbeddedActivityLabelTypes.NEW
              ? o.activityNewBadge
              : o.activityUpdatedBadge,
          [v, m] = n.useState(c ? "" : f);
        if (
          (n.useEffect(() => {
            c
              ? m("")
              : i === d.EmbeddedActivityLabelTypes.NEW
                ? m(r.default.Messages.NEW)
                : i === d.EmbeddedActivityLabelTypes.UPDATED &&
                  m(r.default.Messages.UPDATED);
          }, [c, i]),
          i === d.EmbeddedActivityLabelTypes.NONE)
        )
          return null;
        let A = (0, l.jsx)(u.TextBadge, {
          className: p,
          disableColor: !0,
          text: (0, l.jsx)("span", { children: v }),
        });
        if (!s) return A;
        let E =
          r.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
            activity: t,
          });
        return (0, l.jsx)(a.TooltipContainer, {
          text: E,
          tooltipContentClassName: o.tooltip,
          children: A,
        });
      }
    },
  },
]);
//# sourceMappingURL=93c645d9c419b4384a74.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90960"],
  {
    851815: function (e, t, l) {
      "use strict";
      e.exports = l.p + "92fc0348ac06d6fcbd3e.svg";
    },
    255293: function (e, t, l) {
      "use strict";
      e.exports = l.p + "66781ca8a280afe95e6f.svg";
    },
    728791: function (e, t, l) {
      "use strict";
      e.exports = l.p + "271a2bcb5d7b4f98b5cb.svg";
    },
    811513: function (e, t, l) {
      "use strict";
      l.r(t);
      var i = l("430143");
      l.es(i, t);
    },
    857248: function (e, t, l) {
      "use strict";
      l.r(t);
      var i = l("73261");
      l.es(i, t);
    },
    35647: function (e, t, l) {
      "use strict";
      l.r(t);
      var i = l("35466");
      l.es(i, t);
    },
    686569: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ExperimentShelfToDetailPage: function () {
            return a;
          },
        });
      var i = l("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-06_activity_shelf_to_detail_page",
        label: "Activity Shelf to Detail Page",
        defaultConfig: {
          enableBigShelf: !1,
          enableShelfToDetailPage: !1,
          enableSocialProofActivityDetails: !1,
          enableMinimalActivityDetails: !1,
        },
        treatments: [
          {
            id: 0,
            label: "Control",
            config: {
              enableBigShelf: !1,
              enableShelfToDetailPage: !1,
              enableSocialProofActivityDetails: !1,
              enableMinimalActivityDetails: !1,
            },
          },
          {
            id: 1,
            label: "Enable Big Shelf",
            config: {
              enableBigShelf: !0,
              enableShelfToDetailPage: !1,
              enableSocialProofActivityDetails: !1,
              enableMinimalActivityDetails: !1,
            },
          },
          {
            id: 2,
            label: "Enable Activity Shelf to Detail Page",
            config: {
              enableBigShelf: !0,
              enableShelfToDetailPage: !0,
              enableSocialProofActivityDetails: !1,
              enableMinimalActivityDetails: !1,
            },
          },
          {
            id: 3,
            label: "Enable social-proof shelf details",
            config: {
              enableBigShelf: !1,
              enableShelfToDetailPage: !1,
              enableSocialProofActivityDetails: !0,
              enableMinimalActivityDetails: !1,
            },
          },
          {
            id: 4,
            label: "Enable minimal shelf details",
            config: {
              enableBigShelf: !1,
              enableShelfToDetailPage: !1,
              enableSocialProofActivityDetails: !1,
              enableMinimalActivityDetails: !0,
            },
          },
          {
            id: 5,
            label: "Enable minimal shelf details and route to detail page",
            config: {
              enableBigShelf: !0,
              enableShelfToDetailPage: !0,
              enableSocialProofActivityDetails: !1,
              enableMinimalActivityDetails: !0,
            },
          },
        ],
      });
    },
    549548: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a;
          },
        });
      var i = l("782340");
      function a(e) {
        return e > 0
          ? i.default.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
              count: e,
            })
          : i.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
      }
    },
    969380: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        }),
        l("222007");
      var i = l("884691"),
        a = l("550368");
      let n = ["embedded_cover", "embedded_background"];
      function s(e) {
        let { applicationId: t, size: l, names: s = n } = e,
          [r, c] = i.useState(null),
          [o, d] = i.useState(!0),
          u = (0, a.getAssetImage)(t, r, l);
        return (
          i.useEffect(() => {
            (0, a.getAssets)(t).then(e => {
              for (let [t, l] of (d(!1), Object.entries(e)))
                if (null != l && "" !== l.id && s.includes(l.name)) {
                  c(l.id);
                  return;
                }
            });
          }, [t]),
          { url: u, state: o ? "loading" : null != u ? "fetched" : "not-found" }
        );
      }
    },
    555584: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ActivityActionOverlayButton: function () {
            return c;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("77078"),
        n = l("607573"),
        s = l("782340"),
        r = l("178639");
      function c(e) {
        let { action: t, onClick: l } = e,
          c =
            t === n.ActivityAction.JOIN
              ? s.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
              : s.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
          o =
            t === n.ActivityAction.JOIN
              ? a.Button.Colors.PRIMARY
              : a.Button.Colors.RED;
        return (0, i.jsx)("div", {
          className: r.activityOverlay,
          children: (0, i.jsx)(a.Button, {
            className: r.actionButton,
            onClick: l,
            size: a.Button.Sizes.MEDIUM,
            color: o,
            children: c,
          }),
        });
      }
    },
    817039: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        }),
        l("222007");
      var i = l("37983"),
        a = l("884691"),
        n = l("988150"),
        s = l("23619");
      function r(e) {
        let {
            imageBackground: t,
            applicationName: l,
            imageClassName: r,
            imageNotFoundClassName: c,
          } = e,
          [o, d] = a.useState(!1);
        return "not-found" === t.state || o
          ? (0, i.jsx)("div", {
              className: c,
              children: (0, i.jsx)(n.default, { className: s.brokenImageIcon }),
            })
          : "loading" === t.state
            ? null
            : (0, i.jsx)("img", {
                alt: l,
                className: r,
                src: t.url,
                onError: () => d(!0),
              });
      }
    },
    490080: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return V;
          },
        }),
        l("222007");
      var i = l("37983"),
        a = l("884691"),
        n = l("414456"),
        s = l.n(n),
        r = l("446674"),
        c = l("77078"),
        o = l("272030"),
        d = l("811425"),
        u = l("845579"),
        f = l("697218"),
        v = l("167726"),
        h = l("604525"),
        m = l("811305"),
        I = l("58608"),
        E = l("449008"),
        x = l("387111"),
        C = l("159885"),
        T = l("84460"),
        p = l("549548"),
        S = l("607573"),
        g = l("555584"),
        A = l("817039"),
        _ = l("687292"),
        N = l("141962"),
        j = l("639028"),
        D = l("782340"),
        M = l("453193"),
        y = l("728791");
      function L(e) {
        let { value: t, icon: l } = e;
        return (0, i.jsxs)(c.Text, {
          className: M.activityTag,
          color: "interactive-normal",
          variant: "text-xs/semibold",
          children: [
            (0, E.isNotNullish)(l)
              ? (0, i.jsx)(l, {
                  className: M.icon,
                  backgroundColor: "interactive-normal",
                })
              : null,
            t,
          ],
        });
      }
      function b(e) {
        let {
            activity: t,
            application: l,
            channel: a,
            guildId: n,
            large: s = !1,
          } = e,
          o = (0, r.useStateFromStoresArray)([f.default], () => {
            var e;
            return Array.from(
              null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e
                ? e
                : []
            )
              .map(e => {
                let [t] = e;
                return f.default.getUser(t);
              })
              .filter(E.isNotNullish);
          }),
          d = x.default.getName(
            n,
            null == a ? void 0 : a.id,
            null == o ? void 0 : o[0]
          );
        if (((d = (0, C.truncateText)(d, 15)), null == t || 0 === o.length)) {
          var u, v;
          let e = "".concat(
            (0, p.default)(
              null !== (u = l.maxParticipants) && void 0 !== u ? u : 0
            )
          );
          return (
            s && (e = null !== (v = l.description) && void 0 !== v ? v : ""),
            (0, i.jsx)(c.Text, {
              className: M.activitySubtitleText,
              variant: "text-xs/normal",
              color: "interactive-normal",
              children: e,
            })
          );
        }
        return (0, i.jsxs)("div", {
          className: M.activitySubtitleText,
          children: [
            (0, i.jsx)(c.Text, {
              className: M.usersArePlayingText,
              variant: "text-xs/normal",
              children:
                o.length > 1
                  ? D.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format(
                      { username: d, count: o.length - 1 }
                    )
                  : D.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                      username: d,
                    }),
            }),
            (0, i.jsx)(m.default, {
              size: s ? m.Sizes.SIZE_24 : m.Sizes.SIZE_16,
              guildId: n,
              users: o,
              max: 6,
            }),
          ],
        });
      }
      function V(e) {
        var t;
        let {
            activityItem: l,
            channel: n,
            guildId: f,
            locationObject: m,
            onActivityItemVisible: E,
            onActivityItemSelected: x,
            large: C = !1,
          } = e,
          {
            imageBackground: V,
            videoUrl: R,
            activityAction: O,
            joinableEmbeddedApp: H,
            onActivityItemSelected: B,
            labelType: F,
            staffReleasePhase: w,
          } = (0, S.default)({
            activityItem: l,
            channel: n,
            guildId: f,
            locationObject: m,
            onActivityItemVisible: E,
            onActivityItemSelected: x,
            embeddedActivitiesManager: N.default,
          }),
          P = (0, r.useStateFromStores)(
            [T.default, v.default],
            () =>
              T.default.inDevModeForApplication(l.application.id) ||
              v.default.inTestModeForApplication(l.application.id),
            [l.application.id]
          ),
          { application: Y } = l,
          k = a.useCallback(
            e =>
              e &&
              (null == E ? void 0 : E({ applicationId: l.application.id })),
            [l.application.id, E]
          ),
          U = (0, d.useIsVisible)(k, 0.8, !0),
          [G, Z] = a.useState(!1),
          [W, z] = a.useState(G);
        a.useEffect(() => {
          G && z(!0);
        }, [G]);
        let K = () => Z(!0),
          X = () => Z(!1),
          q = u.DeveloperMode.useSetting();
        return (0, i.jsxs)(c.Clickable, {
          onClick: O === S.ActivityAction.START ? B : void 0,
          onContextMenu: q
            ? e => {
                (0, o.openContextMenu)(e, e =>
                  (0, i.jsx)(j.default, { application: Y, ...e })
                );
              }
            : void 0,
          className: s(M.activityItem, {
            [M.large]: !0 === C,
            [M.disabled]: O !== S.ActivityAction.START,
          }),
          children: [
            (0, i.jsxs)("div", {
              ref: U,
              className: s(M.activityImageContainer, { [M.large]: !0 === C }),
              onMouseEnter: K,
              onFocus: K,
              onMouseLeave: X,
              onBlur: X,
              children: [
                (0, i.jsx)(A.default, {
                  imageBackground: V,
                  applicationName: Y.name,
                  imageClassName: s(M.activityImage, { [M.large]: !0 === C }),
                  imageNotFoundClassName: M.brokenImageIconWrapper,
                }),
                null != R && W && O === S.ActivityAction.START
                  ? (0, i.jsx)("div", {
                      className: s(M.activityVideo, { [M.videoFadeOut]: !G }),
                      onAnimationEnd: () => (G ? null : z(!1)),
                      children: (0, i.jsx)(I.default, {
                        className: M.activityVideo,
                        src: R,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                O !== S.ActivityAction.START
                  ? (0, i.jsx)(g.ActivityActionOverlayButton, {
                      action: O,
                      onClick: B,
                    })
                  : null,
                (0, i.jsx)("div", {
                  className: M.overlayBadge,
                  children: (0, i.jsx)("div", {
                    className: M.badgeContainer,
                    children: (0, i.jsx)(_.default, {
                      name: Y.name,
                      labelType: F,
                    }),
                  }),
                }),
                P
                  ? (0, i.jsx)(c.Tooltip, {
                      text: D.default.Messages
                        .EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                      children: e =>
                        (0, i.jsx)("div", {
                          className: M.devShelfBadge,
                          ...e,
                          children: (0, i.jsx)(h.default, {
                            className: M.devShelfIcon,
                          }),
                        }),
                    })
                  : null,
              ],
            }),
            (0, i.jsxs)("div", {
              className: s(M.activityTextContainer, { [M.large]: C }),
              children: [
                C
                  ? (0, i.jsx)(c.Text, {
                      className: M.activityMaxParticipantsLarge,
                      variant: "text-xs/normal",
                      color: "interactive-normal",
                      children: (0, p.default)(
                        null !== (t = Y.maxParticipants) && void 0 !== t ? t : 0
                      ),
                    })
                  : null,
                (0, i.jsxs)("div", {
                  className: M.activityName,
                  children: [
                    (0, i.jsx)(c.Heading, {
                      className: M.activityTitleText,
                      variant: "heading-md/semibold",
                      color: "interactive-active",
                      children: Y.name,
                    }),
                    null != w
                      ? (0, i.jsx)(c.Tooltip, {
                          text: w,
                          children: e =>
                            (0, i.jsx)("img", {
                              className: M.staffBadge,
                              alt: w,
                              src: y,
                              ...e,
                            }),
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(b, {
                  activity: null == H ? void 0 : H.embeddedActivity,
                  application: Y,
                  channel: n,
                  guildId: f,
                  large: C,
                }),
                (0, i.jsx)("div", {
                  className: M.activityTagsContainer,
                  children: Y.tags
                    .slice(0, 3)
                    .map(e =>
                      (0, i.jsx)(
                        L,
                        { value: e },
                        "activity-tag-".concat(Y.id, "-").concat(e)
                      )
                    ),
                }),
              ],
            }),
          ],
        });
      }
    },
    62276: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return V;
          },
        }),
        l("222007");
      var i = l("37983"),
        a = l("884691"),
        n = l("414456"),
        s = l.n(n),
        r = l("446674"),
        c = l("77078"),
        o = l("272030"),
        d = l("811425"),
        u = l("206230"),
        f = l("697218"),
        v = l("155207"),
        h = l("772280"),
        m = l("811305"),
        I = l("58608"),
        E = l("659500"),
        x = l("449008"),
        C = l("387111"),
        T = l("159885"),
        p = l("191225"),
        S = l("686569"),
        g = l("607573"),
        A = l("555584"),
        _ = l("817039"),
        N = l("687292"),
        j = l("141962"),
        D = l("905647"),
        M = l("49111"),
        y = l("782340"),
        L = l("962529"),
        b = l("728791");
      function V(e) {
        let {
            activityItem: t,
            channel: n,
            guildId: V,
            locationObject: R,
            onActivityItemVisible: O,
            onActivityItemSelected: H,
          } = e,
          {
            imageBackground: B,
            videoUrl: F,
            activityAction: w,
            staffReleasePhase: P,
            onActivityItemSelected: Y,
            labelType: k,
          } = (0, g.default)({
            activityItem: t,
            channel: n,
            guildId: V,
            locationObject: R,
            onActivityItemVisible: O,
            onActivityItemSelected: H,
            embeddedActivitiesManager: j.default,
          }),
          { enableShelfToDetailPage: U, enableMinimalActivityDetails: G } =
            S.ExperimentShelfToDetailPage.useExperiment({
              location: "05846b_1",
            }),
          Z = (0, r.useStateFromStores)(
            [u.default],
            () => u.default.useReducedMotion
          ),
          W = (0, r.useStateFromStoresArray)(
            [p.default, f.default],
            () =>
              p.default
                .getUsersHavePlayedByApp(t.application.id)
                .filter(e => {
                  var t;
                  return (
                    (null === (t = f.default.getCurrentUser()) || void 0 === t
                      ? void 0
                      : t.id) !== e
                  );
                })
                .map(e => f.default.getUser(e))
                .filter(x.isNotNullish),
            [t.application.id]
          ),
          z =
            null != W[0]
              ? (0, T.truncateText)(C.default.getName(null, null, W[0]), 25)
              : null,
          K = null;
        null != z && W.length > 1
          ? (K =
              y.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN_AND_MORE.format(
                { username1: z, extras: W.length - 1 }
              ))
          : null != z &&
            (K =
              y.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN.format(
                { username1: z }
              ));
        let X = a.useCallback(
            e =>
              e &&
              (null == O ? void 0 : O({ applicationId: t.application.id })),
            [t.application.id, O]
          ),
          q = (0, d.useIsVisible)(X, 0.8, !0),
          [J, Q] = a.useState(!1),
          [$, ee] = a.useState(J);
        a.useEffect(() => {
          J && ee(!0);
        }, [J]);
        let et = () => Q(!0),
          el = () => Q(!1),
          ei =
            null == t.application.maxParticipants ||
            -1 === t.application.maxParticipants
              ? y.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS
              : y.default.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format(
                  { count: t.application.maxParticipants }
                ),
          ea = a.useCallback(() => {
            U
              ? E.ComponentDispatch.dispatch(
                  M.ComponentActions.SHOW_ACTIVITY_DETAILS,
                  { applicationId: t.application.id }
                )
              : w === g.ActivityAction.START && Y();
          }, [w, t, U, Y]),
          en = D.ACTIVITIES_EXTRA_DETAILS[t.application.id],
          es =
            (null == en ? void 0 : en.playersSuggestionMin) != null &&
            (null == en ? void 0 : en.playersSuggestionMax) != null
              ? ""
                  .concat(en.playersSuggestionMin, " - ")
                  .concat(en.playersSuggestionMax)
              : void 0;
        return (0, i.jsxs)(c.Clickable, {
          className: s(L.activityCard, {
            [L.activityCardReducedMotion]: Z,
            [L.activityCardWithoutDetailPageRoute]: !U,
          }),
          onClick: ea,
          onContextMenu: e => {
            (0, o.openContextMenuLazy)(e, async () => {
              let { default: e } = await l
                .el("639028")
                .then(l.bind(l, "639028"));
              return l => (0, i.jsx)(e, { application: t.application, ...l });
            });
          },
          onMouseEnter: et,
          onFocus: et,
          onMouseLeave: el,
          onBlur: el,
          children: [
            (0, i.jsxs)("div", {
              ref: q,
              className: L.activityCardImageContainer,
              children: [
                (0, i.jsx)(_.default, {
                  imageBackground: B,
                  applicationName: t.application.name,
                  imageClassName: L.activityImage,
                  imageNotFoundClassName: L.brokenImageIconWrapper,
                }),
                !Z && null != F && $
                  ? (0, i.jsx)("div", {
                      className: s(L.video, { [L.videoFadeOut]: !J }),
                      onAnimationEnd: () => (J ? null : ee(!1)),
                      children: (0, i.jsx)(I.default, {
                        className: L.video,
                        src: F,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                      }),
                    })
                  : null,
                w !== g.ActivityAction.START
                  ? (0, i.jsx)(A.ActivityActionOverlayButton, {
                      action: w,
                      onClick: Y,
                    })
                  : null,
                G && null != es
                  ? (0, i.jsx)("div", {
                      className: L.minimalDetailsContainer,
                      children: (0, i.jsxs)("div", {
                        className: L.minimalDetails,
                        children: [
                          (0, i.jsx)(v.default, { width: 16, height: 16 }),
                          (0, i.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            children: es,
                          }),
                        ],
                      }),
                    })
                  : null,
                (0, i.jsx)("div", {
                  className: L.overlayBadge,
                  children: (0, i.jsxs)("div", {
                    className: L.badgeContainer,
                    children: [
                      (0, i.jsx)(N.default, {
                        name: t.application.name,
                        labelType: k,
                      }),
                      null != P
                        ? (0, i.jsx)(c.Tooltip, {
                            text: P,
                            children: e =>
                              (0, i.jsx)("img", {
                                className: L.staffBadge,
                                alt: P,
                                src: b,
                                ...e,
                              }),
                          })
                        : null,
                    ],
                  }),
                }),
              ],
            }),
            G
              ? null
              : (0, i.jsxs)("div", {
                  className: L.activityCardDetails,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(c.Heading, {
                          variant: "heading-xl/extrabold",
                          children: t.application.name,
                        }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-xs/semibold",
                          className: L.activityCardParticipants,
                          children: ei,
                        }),
                      ],
                    }),
                    W.length > 0
                      ? (0, i.jsx)("div", {
                          className: L.activityCardSocialProofContainer,
                          children: (0, i.jsxs)("div", {
                            className: L.activityCardUsersHavePlayedContainer,
                            children: [
                              (0, i.jsx)(m.default, {
                                users: W,
                                guildId: void 0,
                                max: 4,
                              }),
                              null != K
                                ? (0, i.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    className:
                                      L.activityCardUsersHavePlayedText,
                                    children: K,
                                  })
                                : null,
                            ],
                          }),
                        })
                      : (0, i.jsx)(i.Fragment, {
                          children:
                            t.application.tags.length > 0
                              ? (0, i.jsx)("div", {
                                  className: L.activityCardTagContainer,
                                  children: t.application.tags
                                    .slice(0, 3)
                                    .map(e =>
                                      (0, i.jsx)(
                                        "div",
                                        {
                                          className: L.activityCardTag,
                                          children: (0, i.jsx)(c.Text, {
                                            variant: "text-xs/semibold",
                                            children: e,
                                          }),
                                        },
                                        e
                                      )
                                    ),
                                })
                              : null,
                        }),
                    U
                      ? (0, i.jsxs)("div", {
                          className: s(L.activityCardHoverHint, {
                            [L.activityCardHoverHintReducedMotion]: Z,
                          }),
                          children: [
                            (0, i.jsx)(c.Text, {
                              variant: "text-sm/semibold",
                              children: y.default.Messages.LEARN_MORE,
                            }),
                            (0, i.jsx)(h.default, { width: 16, height: 16 }),
                          ],
                        })
                      : null,
                  ],
                }),
          ],
        });
      }
    },
    605455: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return U;
          },
        }),
        l("222007"),
        l("424973");
      var i = l("37983"),
        a = l("884691"),
        n = l("414456"),
        s = l.n(n),
        r = l("759843"),
        c = l("446674"),
        o = l("769846"),
        d = l("77078"),
        u = l("84339"),
        f = l("244201"),
        v = l("716241"),
        h = l("939011"),
        m = l("685665"),
        I = l("442939"),
        E = l("944654"),
        x = l("42203"),
        C = l("471671"),
        T = l("145131"),
        p = l("980428"),
        S = l("599110"),
        g = l("659500"),
        A = l("159885"),
        _ = l("84460"),
        N = l("550766"),
        j = l("686569"),
        D = l("623611"),
        M = l("293564"),
        y = l("218274"),
        L = l("891209"),
        b = l("954016"),
        V = l("49111"),
        R = l("782340"),
        O = l("413432"),
        H = l("851815"),
        B = l("255293");
      let F = (0, A.cssValueToNumber)(
          o.default.ACTIVITY_SHELF_MODAL_MODAL_PADDING
        ),
        w = (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
        P = (0, A.cssValueToNumber)(
          o.default.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH
        ),
        Y = (0, A.cssValueToNumber)(
          o.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH
        ),
        k =
          (0, A.cssValueToNumber)(
            o.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT
          ) +
          F +
          (0, A.cssValueToNumber)(
            o.default.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT
          );
      function U(e) {
        let {
            channel: t,
            guildId: l,
            locationObject: n,
            onClose: o,
            initialSelectedApplicationId: f,
            initialSlide: C = b.ActivityShelfSlides.DIRECTORY,
            enableSelectedTextChannelInvite: A,
            analyticsLocations: k,
            ...U
          } = e,
          { enableBigShelf: Z } = j.ExperimentShelfToDetailPage.useExperiment(
            { location: "0d4108_1" },
            { autoTrackExposure: !0 }
          ),
          { width: W } = (0, E.useScreenDimensions)(),
          z = a.useMemo(
            () => (Z ? Math.max(P, Math.min(W - 2 * F, Y)) : w),
            [W, Z]
          ),
          K = (0, c.useStateFromStores)(
            [_.default],
            () => _.default.getIsEnabled(),
            []
          ),
          { AnalyticsLocationProvider: X } = (0, m.default)(k),
          [q, J] = a.useState(C),
          Q = (0, u.default)(q),
          [$, ee] = a.useState(null),
          [et, el] = a.useState(f),
          [ei, ea] = a.useState(void 0),
          [en] = (0, I.default)(null == et ? [] : [et]),
          es = a.useRef(null),
          er = a.useMemo(
            () => ({
              application_id: et,
              source_section: n.section,
              impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            }),
            [n.section, et]
          );
        a.useEffect(() => {
          if (
            q === b.ActivityShelfSlides.DIRECTORY &&
            null != Q &&
            Q !== b.ActivityShelfSlides.DIRECTORY &&
            null != $
          ) {
            var e;
            null === (e = es.current) || void 0 === e || e.scrollTo({ top: $ });
          }
        }, [$, Q, q]);
        let ec = a.useCallback(e => {
            var t;
            let { applicationId: l } = e,
              i =
                null === (t = es.current) || void 0 === t
                  ? void 0
                  : t.scrollTop;
            null != i && ee(i), el(l), J(b.ActivityShelfSlides.SELECT_CHANNEL);
          }, []),
          eo = a.useCallback(e => {
            let { applicationId: t } = e;
            el(t), J(b.ActivityShelfSlides.DETAIL_PAGE);
          }, []);
        a.useEffect(() => {
          S.default.track(V.AnalyticEvents.OPEN_MODAL, {
            type: "Activity Shelf",
            channel_id: null == t ? void 0 : t.id,
            guild_id: l,
          });
        }, [t, l]),
          a.useEffect(
            () => (
              g.ComponentDispatch.subscribe(
                V.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR,
                ec
              ),
              () => {
                g.ComponentDispatch.unsubscribe(
                  V.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR,
                  ec
                );
              }
            ),
            [ec]
          ),
          a.useEffect(
            () => (
              g.ComponentDispatch.subscribe(
                V.ComponentActions.SHOW_ACTIVITY_DETAILS,
                eo
              ),
              () => {
                g.ComponentDispatch.unsubscribe(
                  V.ComponentActions.SHOW_ACTIVITY_DETAILS,
                  eo
                );
              }
            ),
            [eo]
          ),
          a.useEffect(() => {
            N.dismissNewActivityIndicator();
          }, []);
        let ed = () => {
            J(b.ActivityShelfSlides.DIRECTORY);
          },
          eu = a.useRef(Date.now()),
          ef = a.useRef(!1),
          ev = a.useRef([]),
          eh = a.useCallback(e => {
            null == ev.current.find(t => t === e.applicationId) &&
              ev.current.push(e.applicationId);
          }, []);
        return (
          a.useEffect(() => {
            let e = es.current;
            if (null != e) {
              let t = () => (ef.current = !0);
              return (
                null != e && e.addEventListener("scroll", t),
                () => {
                  null != e && e.removeEventListener("scroll", t);
                }
              );
            }
          }, []),
          a.useEffect(
            () => () => {
              let e = {
                  activity_tiles_viewed: ev.current,
                  duration_ms: Date.now() - eu.current,
                  scrolled: ef.current,
                },
                i = {
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: l,
                  location: (0, h.getLocation)(),
                  ...(0, v.collectGuildAnalyticsMetadata)(l),
                  ...(0, v.collectChannelAnalyticsMetadata)(
                    x.default.getChannel(null == t ? void 0 : t.id)
                  ),
                  ...er,
                  ...e,
                };
              S.default.track(V.AnalyticEvents.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, er, l]
          ),
          (0, i.jsx)(X, {
            children: (0, i.jsxs)(d.ModalRoot, {
              className: s(O.root, { [O.rootBigShelf]: Z }),
              "aria-label": R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...U,
              children: [
                (0, i.jsx)("img", {
                  alt: R.default.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: H,
                  className: O.shelfTopBackground,
                }),
                (0, i.jsx)("img", {
                  alt: R.default.Messages
                    .EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                  src: B,
                  className: O.shelfTopForeground,
                }),
                (0, i.jsxs)(d.ModalHeader, {
                  separator: !1,
                  justify: T.default.Justify.BETWEEN,
                  className: s(O.modalHeader, { [O.modalHeaderBigShelf]: Z }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: O.headerTextContainer,
                      children: [
                        (() => {
                          if (q === b.ActivityShelfSlides.DETAIL_PAGE)
                            return null == en
                              ? null
                              : (0, i.jsxs)("div", {
                                  className: O.activityShelfTitle,
                                  children: [
                                    (0, i.jsx)(d.Heading, {
                                      variant: "heading-xl/extrabold",
                                      children: en.name,
                                    }),
                                    (0, i.jsxs)(d.Clickable, {
                                      className: O.headerBackButton,
                                      onClick: ed,
                                      children: [
                                        (0, i.jsx)(p.default, {}),
                                        (0, i.jsx)(d.Text, {
                                          variant: "text-sm/semibold",
                                          children: R.default.Messages.BACK,
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                          return (0, i.jsx)("div", {
                            className: O.activityShelfTitle,
                            children: (0, i.jsx)(d.Heading, {
                              variant: "heading-xl/extrabold",
                              children:
                                R.default.Messages
                                  .EMBEDDED_ACTIVITIES_SHELF_TITLE,
                            }),
                          });
                        })(),
                        (() => {
                          if (q === b.ActivityShelfSlides.DIRECTORY)
                            return (0, i.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              children: K
                                ? R.default.Messages
                                    .EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
                                : R.default.Messages
                                    .EMBEDDED_ACTIVITIES_SHELF_SUBTITLE,
                            });
                          return null;
                        })(),
                      ],
                    }),
                    (0, i.jsx)(d.ModalCloseButton, {
                      className: O.modalCloseButton,
                      onClick: o,
                    }),
                  ],
                }),
                q === b.ActivityShelfSlides.DIRECTORY && K
                  ? (0, i.jsx)(L.DeveloperShelfControls, {})
                  : null,
                (0, i.jsx)("div", { className: O.modalDivider }),
                (0, i.jsxs)(d.Slides, {
                  activeSlide: q,
                  centered: !1,
                  width: z,
                  children: [
                    (0, i.jsx)(d.Slide, {
                      id: b.ActivityShelfSlides.DIRECTORY,
                      impressionName: r.ImpressionNames.ACTIVITY_SHELF,
                      impressionProperties: {
                        source_section: n.section,
                        impression_group:
                          r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                      },
                      children: (0, i.jsx)(G, {
                        slide: q,
                        children: (0, i.jsx)(M.default, {
                          scrollerRef: es,
                          channel: t,
                          guildId: l,
                          locationObject: n,
                          onActivityItemVisible: eh,
                          onClose: o,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: b.ActivityShelfSlides.SELECT_CHANNEL,
                      impressionName:
                        r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                      impressionProperties: {
                        source_section: n.section,
                        impression_group:
                          r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                        application_id: et,
                      },
                      children: (0, i.jsx)(G, {
                        slide: q,
                        children: (0, i.jsx)(y.default, {
                          applicationId: et,
                          selectedChannelId: ei,
                          setSelectedChannelId: ea,
                          guildId: l,
                          enableSelectedTextChannelInvite: A,
                        }),
                      }),
                    }),
                    (0, i.jsx)(d.Slide, {
                      id: b.ActivityShelfSlides.DETAIL_PAGE,
                      impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: er,
                      children: (0, i.jsx)(G, {
                        slide: q,
                        children:
                          null == et
                            ? null
                            : (0, i.jsx)(D.default, {
                                applicationId: et,
                                channelId: null == t ? void 0 : t.id,
                                guildId: l,
                                onActivityLaunch: o,
                              }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: O.modalDivider }),
                (0, i.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: O.footer,
                  children: (() => {
                    switch (q) {
                      case b.ActivityShelfSlides.DIRECTORY:
                        return (0, i.jsx)(M.ActivityDirectoryFooter, {});
                      case b.ActivityShelfSlides.SELECT_CHANNEL:
                        return (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", { className: O.modalDivider }),
                            (0, i.jsx)(d.ModalFooter, {
                              separator: !1,
                              className: O.footer,
                              children: (0, i.jsx)(y.ChannelSelectorFooter, {
                                onBack: ed,
                                onClose: o,
                                guildId: l,
                                applicationId: et,
                                locationObject: n,
                                selectedChannelId: ei,
                                enableSelectedTextChannelInvite: A,
                              }),
                            }),
                          ],
                        });
                      case b.ActivityShelfSlides.DETAIL_PAGE:
                      case b.ActivityShelfSlides.DIRECTORY:
                      default:
                        return null;
                    }
                  })(),
                }),
              ],
            }),
          })
        );
      }
      let G = e => {
        let { children: t, slide: l } = e,
          n = (0, c.useStateFromStores)(
            [_.default],
            () => _.default.getIsEnabled(),
            []
          ),
          r = a.useContext(f.default),
          o = (0, c.useStateFromStores)(
            [C.default],
            () => C.default.windowSize(r.windowId).height,
            [r.windowId]
          );
        return (0, i.jsx)("div", {
          className: s(O.slideContentOuterContainerSquished, {
            [O.slideContentOuterContainerSquishedWithDev]:
              l === b.ActivityShelfSlides.DIRECTORY && n,
            [O.slideContentOuterContainerTall]:
              l === b.ActivityShelfSlides.DIRECTORY && o > k,
            [O.slideContentOuterContainerTallWithDev]:
              l === b.ActivityShelfSlides.DIRECTORY && o > k && n,
            [O.slideContentOuterContainerNoMetaTextSquished]:
              l === b.ActivityShelfSlides.SELECT_CHANNEL,
            [O.slideContentOuterContainerNoMetaTextTall]:
              l === b.ActivityShelfSlides.SELECT_CHANNEL && o > k,
            [O.slideContentOuterContainerNoMetaTextNoFooterSquished]:
              l === b.ActivityShelfSlides.DETAIL_PAGE,
            [O.slideContentOuterContainerNoMetaTextNoFooterTall]:
              l === b.ActivityShelfSlides.DETAIL_PAGE && o > k,
          }),
          children: t,
        });
      };
    },
    623611: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return y;
          },
        }),
        l("222007");
      var i = l("37983"),
        a = l("884691"),
        n = l("65597"),
        s = l("77078"),
        r = l("812204"),
        c = l("685665"),
        o = l("42203"),
        d = l("665382"),
        u = l("155207"),
        f = l("516358"),
        v = l("507692"),
        h = l("58608"),
        m = l("550766"),
        I = l("986214"),
        E = l("161918"),
        x = l("744203"),
        C = l("248210"),
        T = l("525167"),
        p = l("698372"),
        S = l("969380"),
        g = l("817039"),
        A = l("141962"),
        _ = l("231457"),
        N = l("707181"),
        j = l("905647"),
        D = l("782340"),
        M = l("425354");
      function y(e) {
        var t;
        let {
            applicationId: l,
            guildId: n,
            channelId: o,
            onActivityLaunch: f,
          } = e,
          { AnalyticsLocationProvider: I } = (0, c.default)(
            r.default.ACTIVITY_SHELF_ACTIVITY_DETAILS
          );
        a.useEffect(() => {
          (0, m.fetchShelf)({ guildId: n });
        }, [n]);
        let x = (0, S.default)({
            applicationId: null != l ? l : "",
            size: 2048,
          }),
          C = (0, E.useActivityShelfItemData)(null != n ? n : null, l);
        if (null == C) return null;
        let p =
            null != C.activity.activity_preview_video_asset_id
              ? (0, T.default)(l, C.activity.activity_preview_video_asset_id)
              : null,
          g = j.ACTIVITIES_EXTRA_DETAILS[l],
          A =
            (null == g ? void 0 : g.playersSuggestionMin) != null &&
            (null == g ? void 0 : g.playersSuggestionMax) != null
              ? ""
                  .concat(g.playersSuggestionMin, " - ")
                  .concat(g.playersSuggestionMax)
              : void 0;
        return (0, i.jsx)(I, {
          children: (0, i.jsx)("div", {
            className: M.scrollContainer,
            children: (0, i.jsxs)(s.Scroller, {
              className: M.scroller,
              children: [
                (0, i.jsx)("div", {
                  className: M.launcherOuterContainer,
                  children: (0, i.jsx)(L, {
                    activityItem: C,
                    onLaunch: f,
                    channelId: o,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: M.activityDetailsContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        null != p
                          ? (0, i.jsx)("div", {
                              className: M.heroVideoContainer,
                              children: (0, i.jsx)(h.default, {
                                loop: !0,
                                autoPlay: !0,
                                muted: !0,
                                className: M.heroVideo,
                                src: p,
                                poster: x.url,
                              }),
                            })
                          : null,
                        (0, i.jsx)("div", {
                          className: M.detailsTitle,
                          children: (0, i.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            children: C.application.name,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: M.detailsDetails,
                          children: [
                            null != A
                              ? (0, i.jsxs)("div", {
                                  className: M.detailItem,
                                  children: [
                                    (0, i.jsx)(u.default, {
                                      width: 16,
                                      height: 16,
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: M.detailItemText,
                                      children:
                                        D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                          { nPlayers: A }
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (null == g ? void 0 : g.timeSuggestionMinutes) !=
                            null
                              ? (0, i.jsxs)("div", {
                                  className: M.detailItem,
                                  children: [
                                    (0, i.jsx)(d.default, {
                                      width: 16,
                                      height: 16,
                                    }),
                                    (0, i.jsx)(s.Text, {
                                      variant: "text-xs/semibold",
                                      className: M.detailItemText,
                                      children:
                                        D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                          { nMinutes: g.timeSuggestionMinutes }
                                        ),
                                    }),
                                  ],
                                })
                              : null,
                            (0, i.jsxs)("div", {
                              className: M.detailItem,
                              children: [
                                (0, i.jsx)(v.default, {
                                  width: 16,
                                  height: 16,
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-xs/semibold",
                                  className: M.detailItemText,
                                  children: C.application.tags
                                    .slice(0, 3)
                                    .join(", "),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(s.Heading, {
                      variant: "heading-lg/medium",
                      className: M.detailsDescription,
                      children: C.application.description,
                    }),
                    (0, i.jsx)("div", { className: M.divider }),
                    (0, i.jsx)("div", {
                      className: M.imagesContainer,
                      children: (null !==
                        (t = null == g ? void 0 : g.gameplayImageUrls) &&
                      void 0 !== t
                        ? t
                        : []
                      ).map(e =>
                        (0, i.jsx)(
                          "img",
                          {
                            src: e,
                            alt: D.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                              { activityName: C.application.name }
                            ),
                            className: M.activityImage,
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function L(e) {
        var t, r;
        let { activityItem: d, onLaunch: u, channelId: v } = e,
          h = (0, S.default)({ applicationId: d.application.id, size: 2048 }),
          { analyticsLocations: m } = (0, c.default)(),
          E = (0, p.default)(),
          [T, j] = a.useState(
            null !==
              (t = (0, x.getActivityGuildSuggestion)({
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== t
              ? t
              : void 0
          ),
          [y, L] = a.useState(
            null !==
              (r = (0, C.getActivityVoiceChannelSuggestion)({
                guildId: T,
                allowGdmActivityChannelSuggestion: !0,
              })) && void 0 !== r
              ? r
              : void 0
          ),
          b = (0, n.default)([o.default], () => o.default.getChannel(y), [y]),
          V = (0, x.useSelectGuildOptions)(),
          R = (0, C.useSelectVoiceChannelOptions)(T),
          O = a.useCallback(() => {
            null != y &&
              (0, I.default)({
                activityItem: d,
                currentEmbeddedApplication: E,
                channelId: y,
                guildId: T,
                embeddedActivitiesManager: A.default,
                analyticsLocations: m,
              }).then(u);
          }, [d, m, E, u, y, T]),
          H = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await l
                .el("159747")
                .then(l.bind(l, "159747"));
              return t =>
                (0, i.jsx)(e, { activityItem: d, ...t, analyticsLocations: m });
            });
          }, [d, m]),
          B =
            null == b ||
            (null != b.guild_id &&
              !(
                null != T &&
                null != y &&
                V.some(e => e.value === T) &&
                R.some(e => e.value.channel.id === y)
              ) &&
              !0);
        return (0, i.jsxs)("div", {
          className: M.launcherInnerContainer,
          children: [
            (0, i.jsx)(g.default, {
              applicationName: d.application.name,
              imageBackground: h,
              imageClassName: M.launchImage,
              imageNotFoundClassName: M.brokenLaunchImage,
            }),
            (0, i.jsx)(s.Text, {
              variant: "text-md/medium",
              children: D.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            null == v
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(s.Select, {
                      placeholder: D.default.Messages.GUILD_SELECT,
                      optionClassName: M.option,
                      options: V,
                      renderOptionValue: e => {
                        let t = e.find(e => e.value === T);
                        return null == t
                          ? null
                          : (0, i.jsx)(N.SelectGuildOption, {
                              guildId: t.value,
                            });
                      },
                      renderOptionLabel: e => {
                        let { value: t } = e;
                        return (0, i.jsx)(N.SelectGuildOption, { guildId: t });
                      },
                      isSelected: e => e === T,
                      select: e => {
                        var t;
                        j(e),
                          L(
                            null !==
                              (t = (0, C.getActivityVoiceChannelSuggestion)({
                                guildId: e,
                              })) && void 0 !== t
                              ? t
                              : void 0
                          );
                      },
                      serialize: e => e,
                    }),
                    (0, i.jsx)(s.Select, {
                      placeholder:
                        D.default.Messages
                          .EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                      optionClassName: M.option,
                      options: R,
                      isSelected: e => {
                        let { channel: t } = e;
                        return t.id === y;
                      },
                      select: e => {
                        let { channel: t } = e;
                        return L(t.id);
                      },
                      serialize: e => {
                        let { channel: t } = e;
                        return t.id;
                      },
                      renderOptionValue: () => {
                        let e = R.find(e => e.value.channel.id === y);
                        return null == e
                          ? null
                          : (0, i.jsx)(_.SelectChannelOption, {
                              channel: e.value.channel,
                              users: e.value.users,
                            });
                      },
                      renderOptionLabel: e => {
                        let {
                          value: { channel: t, users: l },
                        } = e;
                        return (0, i.jsx)(_.SelectChannelOption, {
                          channel: t,
                          users: l,
                        });
                      },
                    }),
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: B,
                      onClick: O,
                      children: D.default.Messages.START,
                    }),
                    (0, i.jsx)("div", { className: M.divider }),
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      color: s.Button.Colors.PRIMARY,
                      onClick: H,
                      children: D.default.Messages.SHARE,
                    }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: M.singleRowShareContainer,
                  children: [
                    (0, i.jsx)(s.Button, {
                      fullWidth: !0,
                      disabled: B,
                      onClick: O,
                      children: D.default.Messages.START,
                    }),
                    (0, i.jsx)(s.Button, {
                      className: M.shareIconButton,
                      color: s.Button.Colors.PRIMARY,
                      onClick: H,
                      children: (0, i.jsx)(f.default, {}),
                    }),
                  ],
                }),
          ],
        });
      }
    },
    293564: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return M;
          },
          ActivityDirectoryFooter: function () {
            return y;
          },
        }),
        l("222007");
      var i = l("37983"),
        a = l("884691"),
        n = l("414456"),
        s = l.n(n),
        r = l("617258"),
        c = l("446674"),
        o = l("769846"),
        d = l("77078"),
        u = l("812204"),
        f = l("685665"),
        v = l("305961"),
        h = l("697218"),
        m = l("84460"),
        I = l("550766"),
        E = l("686569"),
        x = l("91761"),
        C = l("607384"),
        T = l("702173"),
        p = l("490080"),
        S = l("62276"),
        g = l("954016"),
        A = l("782340"),
        _ = l("638675");
      let N = (0, r.cssValueToNumber)(
          o.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP
        ),
        j = (0, r.cssValueToNumber)(
          o.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT
        ),
        D = (0, r.cssValueToNumber)(
          o.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT
        );
      function M(e) {
        let {
            channel: t,
            guildId: l,
            locationObject: n,
            onClose: r,
            onActivityItemVisible: o,
            scrollerRef: g,
          } = e,
          [M, y] = a.useState(0),
          L = (0, x.default)({ guildId: l, enableFilter: !0 }),
          b = (0, c.useStateFromStores)([h.default], () =>
            h.default.getCurrentUser()
          ),
          V = (0, c.useStateFromStores)(
            [v.default],
            () => v.default.getGuild(l),
            [l]
          ),
          { AnalyticsLocationProvider: R } = (0, f.default)(
            u.default.ACTIVITY_DIRECTORY
          ),
          O = (0, T.default)(null == t ? void 0 : t.id),
          { isDeveloperActivityShelfEnabled: H, filter: B } = (0,
          c.useStateFromStoresObject)([m.default], () => ({
            filter: m.default.getFilter(),
            isDeveloperActivityShelfEnabled: m.default.getIsEnabled(),
          }));
        a.useEffect(() => {
          let e = g.current;
          if (null != e)
            return (
              e.addEventListener("scroll", t, !1),
              () => {
                null != e && e.removeEventListener("scroll", t, !1);
              }
            );
          function t() {
            var e, t;
            y(
              null !==
                (t =
                  null === (e = g.current) || void 0 === e
                    ? void 0
                    : e.scrollTop) && void 0 !== t
                ? t
                : 0
            );
          }
        }, [g]);
        let {
          enableBigShelf: F,
          enableSocialProofActivityDetails: w,
          enableMinimalActivityDetails: P,
        } = E.ExperimentShelfToDetailPage.useExperiment(
          { location: "a48d9e_5" },
          { autoTrackExposure: !0 }
        );
        if (
          (a.useEffect(() => {
            (O || null != l) && (0, I.fetchShelf)({ guildId: l, force: !0 });
          }, [l, O]),
          (0, C.useFetchDeveloperActivityShelfItems)(),
          (null == V && !O) || null == b)
        )
          return null;
        let Y = L.length > 0;
        return (0, i.jsx)(R, {
          children: (0, i.jsxs)("div", {
            className: _.scrollContainer,
            children: [
              Y && !F
                ? (0, i.jsx)("div", {
                    className: _.scrollBackgroundContainer,
                    style: { top: -M },
                    children: (0, i.jsx)("div", {
                      className: s(_.scrollTierBackground),
                      style: {
                        height: (e => {
                          let t = 1 === e.length,
                            l = Math.ceil(e.length / 2) * (t ? D : j);
                          return N + l;
                        })(L),
                      },
                    }),
                  })
                : null,
              (0, i.jsx)(d.Scroller, {
                ref: g,
                className: _.scroller,
                children: (function () {
                  let e = F || w || P ? S.default : p.default;
                  return Y
                    ? (0, i.jsx)("div", {
                        className: _.scrollSection,
                        children: (0, i.jsx)("div", {
                          className: s(_.shelf, { [_.shelfBigGrid]: F }),
                          children: L.map(a =>
                            (0, i.jsx)(
                              e,
                              {
                                large: 1 === L.length,
                                activityItem: a,
                                channel: t,
                                guildId: l,
                                locationObject: n,
                                onActivityItemVisible: o,
                                onActivityItemSelected: () => {
                                  var e;
                                  (e = a.application.id), r();
                                },
                              },
                              "activity-shelf-item-".concat(a.application.id)
                            )
                          ),
                        }),
                      })
                    : H && B.length > 0
                      ? (0, i.jsx)("div", {
                          className: _.filterError,
                          children:
                            A.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format(
                              { filter: B }
                            ),
                        })
                      : (0, i.jsx)("div", {
                          className: _.spinnerContainer,
                          children: (0, i.jsx)(d.Spinner, {}),
                        });
                })(),
              }),
            ],
          }),
        });
      }
      function y() {
        return (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          children:
            A.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
              surveyURL: g.EMBEDDED_ACTIVITY_SURVEY_URL,
            }),
        });
      }
    },
    218274: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return V;
          },
          ChannelSelectorFooter: function () {
            return R;
          },
        }),
        l("222007");
      var i = l("37983"),
        a = l("884691"),
        n = l("446674"),
        s = l("77078"),
        r = l("452804"),
        c = l("206230"),
        o = l("812204"),
        d = l("685665"),
        u = l("168973"),
        f = l("42203"),
        v = l("305961"),
        h = l("957255"),
        m = l("18494"),
        I = l("944832"),
        E = l("58608"),
        x = l("550766"),
        C = l("191225"),
        T = l("986214"),
        p = l("161918"),
        S = l("248210"),
        g = l("525167"),
        A = l("698372"),
        _ = l("969380"),
        N = l("141962"),
        j = l("231457"),
        D = l("49111"),
        M = l("782340"),
        y = l("424263");
      function L(e) {
        let t = (0, n.useStateFromStores)(
          [v.default, h.default],
          () => {
            let t = v.default.getGuild(e);
            return (
              null != t && h.default.can(D.Permissions.CREATE_INSTANT_INVITE, t)
            );
          },
          [e]
        );
        return t;
      }
      let b = ["embedded_background"];
      function V(e) {
        var t, l;
        let {
            applicationId: o,
            guildId: d,
            selectedChannelId: h,
            setSelectedChannelId: C,
            enableSelectedTextChannelInvite: T,
          } = e,
          A = (0, n.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          N = (0, p.useActivityShelfItemData)(
            null != d ? d : null,
            null != o ? o : ""
          ),
          [D, V] = a.useState(
            T && !u.default.disableInviteWithTextChannelActivityLaunch
          ),
          R = (0, S.useSelectVoiceChannelOptions)(d);
        a.useEffect(() => {
          var e;
          x.fetchShelf({ guildId: d }),
            C(
              null !==
                (e = (0, S.getActivityVoiceChannelSuggestion)({
                  guildId: d,
                })) && void 0 !== e
                ? e
                : void 0
            );
        }, [d, C]);
        let O = null == N ? void 0 : N.activity.activity_preview_video_asset_id,
          H =
            null != O
              ? (0, g.default)(
                  null !== (t = null == N ? void 0 : N.application.id) &&
                    void 0 !== t
                    ? t
                    : "",
                  O
                )
              : null,
          { url: B } = (0, _.default)({
            applicationId:
              null !== (l = null == N ? void 0 : N.application.id) &&
              void 0 !== l
                ? l
                : "",
            size: 1024,
            names: b,
          }),
          F = (0, n.useStateFromStores)([v.default], () =>
            v.default.getGuild(d)
          ),
          w = (0, n.useStateFromStores)([f.default, m.default], () =>
            f.default.getChannel(m.default.getChannelId())
          ),
          P = L(null != d ? d : void 0);
        if ((null == N ? void 0 : N.application) == null || null == F)
          return null;
        let Y =
          (null == w ? void 0 : w.name) == null ||
          (null == w ? void 0 : w.name) === ""
            ? M.default.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME
            : "#".concat(w.name);
        return (0, i.jsxs)(s.Scroller, {
          className: y.scroll,
          children: [
            null != H || null != B
              ? (0, i.jsx)(I.default, {
                  aspectRatio: 16 / 9,
                  className: y.imageContainer,
                  children: (0, i.jsx)(E.default, {
                    className: y.video,
                    src: H,
                    loop: !0,
                    autoPlay: !A,
                    poster: B,
                    muted: !0,
                  }),
                })
              : null,
            (0, i.jsxs)("div", {
              className: y.descriptionArea,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-xl/semibold",
                  children: null == N ? void 0 : N.application.name,
                }),
                (0, i.jsx)(s.Text, {
                  className: y.descriptionAreaSubtext,
                  variant: "text-md/normal",
                  children: null == N ? void 0 : N.application.description,
                }),
              ],
            }),
            (0, i.jsx)(s.Select, {
              placeholder:
                M.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: y.option,
              options: R,
              isSelected: e => {
                let { channel: t } = e;
                return t.id === h;
              },
              select: e => {
                let { channel: t } = e;
                return C(t.id);
              },
              serialize: e => {
                let { channel: t } = e;
                return t.id;
              },
              renderOptionValue: () => {
                let e = R.find(e => e.value.channel.id === h);
                return null == e
                  ? null
                  : (0, i.jsx)(j.SelectChannelOption, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: e => {
                let {
                  value: { channel: t, users: l },
                } = e;
                return (0, i.jsx)(j.SelectChannelOption, {
                  channel: t,
                  users: l,
                });
              },
            }),
            P && T
              ? (0, i.jsxs)(s.Clickable, {
                  className: y.checkboxContainer,
                  onClick: () => {
                    let e = !D;
                    r.default.updatedUnsyncedSettings({
                      disableInviteWithTextChannelActivityLaunch: !e,
                    }),
                      V(e);
                  },
                  children: [
                    (0, i.jsx)(s.Checkbox, {
                      type: s.Checkbox.Types.INVERTED,
                      className: y.checkbox,
                      value: D,
                      displayOnly: !0,
                    }),
                    (0, i.jsxs)(s.Text, {
                      variant: "text-sm/normal",
                      children: [
                        M.default.Messages
                          .EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
                        " ",
                        (0, i.jsx)("strong", { children: Y }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function R(e) {
        let {
            applicationId: t,
            guildId: l,
            locationObject: a,
            onBack: r,
            onClose: c,
            selectedChannelId: v,
            enableSelectedTextChannelInvite: h,
          } = e,
          { AnalyticsLocationProvider: I, analyticsLocations: E } = (0,
          d.default)(o.default.ACTIVITY_CHANNEL_SELECTOR),
          S = (0, p.useActivityShelfItemData)(
            null != l ? l : null,
            null != t ? t : null
          ),
          g = (0, A.default)(),
          _ = (0, n.useStateFromStores)([f.default, m.default], () =>
            f.default.getChannel(m.default.getChannelId())
          ),
          j = (0, n.useStateFromStores)(
            [u.default],
            () => h && !u.default.disableInviteWithTextChannelActivityLaunch
          ),
          b = (0, n.useStateFromStores)(
            [C.default],
            () =>
              null != v &&
              "" !== v &&
              C.default
                .getEmbeddedActivitiesForChannel(v)
                .some(e => e.applicationId === t)
          ),
          V = L(l),
          R = async () => {
            if (null == v || "" === v || null == S || null == l || "" === l)
              return;
            let e = await (0, T.default)({
              activityItem: S,
              currentEmbeddedApplication: g,
              locationObject: a,
              channelId: v,
              guildId: l,
              embeddedActivitiesManager: N.default,
              analyticsLocations: E,
            });
            e &&
              (c(),
              null != _ &&
                V &&
                j &&
                (await x.sendEmbeddedActivityInvite({
                  activityChannelId: v,
                  invitedChannelId: _.id,
                  applicationId: S.application.id,
                  location: D.AnalyticsLocations.ACTIVITY_SHELF,
                })));
          };
        return (0, i.jsx)(I, {
          children: (0, i.jsxs)("div", {
            className: y.footerContainer,
            children: [
              (0, i.jsx)(s.Clickable, {
                onClick: r,
                className: y.backToBrowse,
                children: (0, i.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  children: M.default.Messages.BACK,
                }),
              }),
              null == v
                ? (0, i.jsx)("div", {})
                : (0, i.jsx)(s.Button, {
                    className: y.launchButton,
                    onClick: R,
                    color: b ? s.Button.Colors.GREEN : void 0,
                    fullWidth: !0,
                    children: b
                      ? M.default.Messages.EMBEDDED_ACTIVITIES_JOIN
                      : M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH,
                  }),
            ],
          }),
        });
      }
    },
    891209: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          DeveloperShelfControls: function () {
            return u;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("65597"),
        n = l("77078"),
        s = l("810567"),
        r = l("898065"),
        c = l("84460"),
        o = l("782340"),
        d = l("557427");
      function u() {
        let {
          activityUrlOverride: e,
          useActivityUrlOverride: t,
          filter: l,
        } = (0, a.useStateFromStoresObject)(
          [c.default],
          () => ({
            activityUrlOverride: c.default.getActivityUrlOverride(),
            useActivityUrlOverride: c.default.getUseActivityUrlOverride(),
            filter: c.default.getFilter(),
          }),
          []
        );
        return (0, i.jsxs)("div", {
          className: d.container,
          children: [
            (0, i.jsx)(n.Checkbox, {
              type: n.Checkbox.Types.INVERTED,
              className: d.checkbox,
              value: t,
              onClick: r.toggleUseActivityUrlOverride,
              children: (0, i.jsx)(n.Text, {
                variant: "text-md/semibold",
                children:
                  o.default.Messages
                    .EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE,
              }),
            }),
            (0, i.jsx)(n.FormItem, {
              className: d.urlOverride,
              title:
                o.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
              children: (0, i.jsx)(n.TextInput, {
                disabled: !t,
                value: null != e ? e : void 0,
                onChange: r.setActivityUrlOverride,
                placeholder: "http://localhost:3000",
              }),
            }),
            (0, i.jsx)("div", {
              children: (0, i.jsx)(s.default, {
                className: d.searchBar,
                query: l,
                onChange: r.updateFilter,
                onClear: function () {
                  r.updateFilter("");
                },
              }),
            }),
          ],
        });
      }
    },
    639028: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("77078"),
        n = l("272030"),
        s = l("861370"),
        r = l("782340");
      function c(e) {
        let { application: t, onSelect: l } = e,
          c = (0, s.default)({ id: t.id, label: r.default.Messages.COPY_ID });
        return (0, i.jsx)(a.Menu, {
          navId: "activity-shelf-item-context",
          onClose: n.closeContextMenu,
          "aria-label":
            r.default.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
          onSelect: l,
          children: (0, i.jsx)(
            a.MenuGroup,
            { children: c },
            "developer-actions"
          ),
        });
      }
    },
    861370: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("627445"),
        n = l.n(a),
        s = l("77078"),
        r = l("845579"),
        c = l("662255"),
        o = l("306160");
      function d(e) {
        let { id: t, label: l, onSuccess: a, shiftId: d, showIconFirst: u } = e,
          f = r.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !o.SUPPORTS_COPY || null == t) return null;
        let v = "devmode-copy-id-".concat(t);
        return (0, i.jsx)(
          s.MenuItem,
          {
            id: v,
            label: l,
            action: function (e) {
              let l = null != d && e.shiftKey ? d : t;
              n(null != l, "cannot copy null text"),
                (0, o.copy)(l),
                null == a || a();
            },
            icon: c.default,
            showIconFirst: u,
          },
          v
        );
      }
    },
    360723: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("414456"),
        n = l.n(a),
        s = l("77078"),
        r = l("953109"),
        c = l("749170");
      function o(e) {
        let { className: t, embeddedApps: l, muted: a } = e;
        if (l.length <= 0) return null;
        {
          if (1 === l.length)
            return (0, i.jsx)("div", {
              className: n(c.container, t, a && c.modeMuted),
              children: (0, i.jsx)(r.default, {
                game: l[0].application,
                className: c.icon20px,
              }),
            });
          let e = l.length - 1;
          return (0, i.jsxs)("div", {
            className: n(c.container, t, a && c.modeMuted),
            children: [
              (0, i.jsx)(r.default, {
                game: l[0].application,
                className: c.icon20px,
              }),
              2 === l.length
                ? (0, i.jsx)(r.default, {
                    game: l[1].application,
                    className: c.icon20px,
                  })
                : (0, i.jsx)(s.Text, {
                    className: c.overflow,
                    variant: "text-xs/bold",
                    color: "interactive-active",
                    children: "+".concat(e),
                  }),
            ],
          });
        }
      }
    },
    944654: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          useScreenDimensions: function () {
            return a;
          },
        }),
        l("222007");
      var i = l("884691");
      function a() {
        var e, t;
        let [l, a] = i.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080,
        });
        return (
          i.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth,
                t = window.innerHeight;
              a({ width: e, height: t });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          l
        );
      }
    },
    944832: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("414456"),
        n = l.n(a),
        s = l("846433"),
        r = e => {
          let { aspectRatio: t, style: l, className: a, children: r } = e;
          return (0, i.jsx)("div", {
            className: n(s.outer, a),
            style: { paddingTop: "".concat((1 / t) * 100, "%"), ...l },
            children: (0, i.jsx)("div", { className: s.inner, children: r }),
          });
        };
    },
    533403: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return v;
          },
        }),
        l("424973"),
        l("222007");
      var i = l("37983"),
        a = l("884691"),
        n = l("414456"),
        s = l.n(n),
        r = l("77078"),
        c = l("766274"),
        o = l("368121"),
        d = l("107294"),
        u = l("633827");
      class f extends a.PureComponent {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: l = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            a = [],
            n = e.length === t ? e.length : t - 1,
            s = 0;
          for (; s < n && s < e.length; ) {
            let t = s === e.length - 1;
            a.push(
              l(e[s] || null, t ? null : d.avatarMasked, "user-".concat(s), t)
            ),
              s++;
          }
          if (s < e.length) {
            let t = Math.min(e.length - s, 99);
            a.push(i("+".concat(t), d.moreUsers, "more-users", t));
          }
          return a;
        }
        renderIcon() {
          return this.props.icon
            ? (0, i.jsx)("div", {
                className: d.iconContainer,
                children: (0, i.jsx)(o.default, {
                  width: 16,
                  height: 16,
                  foreground: d.foreground,
                  className: d.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, i.jsxs)("div", {
            className: s(e, d.container),
            ref: e => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            (this.defaultRenderUser = (e, t, l, a) => {
              let { onClick: n, size: o, guildId: f } = this.props,
                v = e instanceof c.default ? e : null != e ? e.user : null;
              return null == v
                ? (0, i.jsx)("div", { className: s(d.emptyUser, t) }, l)
                : (0, i.jsx)(
                    r.Avatar,
                    {
                      tabIndex: 0,
                      src: v.getAvatarURL(f, (0, r.getAvatarSize)(o)),
                      size: o,
                      "aria-label": v.username,
                      className: s(t, u.cursorPointer, d.avatarSize),
                      onClick: e => (null != n ? n(e, v, this._ref) : null),
                    },
                    v.id
                  );
            });
        }
      }
      f.defaultProps = {
        max: 10,
        renderMoreUsers: function (e, t, l) {
          return (0, i.jsx)("div", { className: t, children: e }, l);
        },
        size: r.AvatarSizes.SIZE_24,
      };
      var v = f;
    },
    604525: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return n;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("75196");
      function n(e) {
        let {
          width: t = 24,
          height: l = 24,
          color: n = "currentColor",
          foreground: s,
          ...r
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: l,
          viewBox: "0 0 24 24",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M7.39344 5.33333L5.33333 7.39344V16.6065L7.39348 18.6667H16.6065L18.6667 16.6065V7.39344L16.6065 5.33333H7.39344ZM11.0485 15.6879H9.20459C9.20459 14.1627 7.96392 12.922 6.43868 12.922V11.078C7.96392 11.078 9.20459 9.83735 9.20459 8.31211H11.0485C11.0485 9.82534 10.3057 11.159 9.17607 12C10.3057 12.8411 11.0485 14.1747 11.0485 15.6879ZM17.5556 12.922C16.0304 12.922 14.7896 14.1627 14.7896 15.6879H12.9457C12.9457 14.1747 13.6885 12.8411 14.8181 12C13.6885 11.159 12.9457 9.82534 12.9457 8.31211H14.7896C14.7896 9.83735 16.0304 11.078 17.5556 11.078V12.922Z",
            fill: n,
            className: s,
          }),
        });
      }
    },
    988150: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return n;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("75196");
      function n(e) {
        let {
          width: t = 24,
          height: l = 24,
          color: n = "currentColor",
          foreground: s,
          ...r
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.default)(r),
          width: t,
          height: l,
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            className: s,
            fill: n,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    662255: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("469563"),
        n = l("35647"),
        s = l("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: n,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: n,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          n.IdIcon,
          void 0,
          { size: 24 }
        );
    },
    665382: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("469563"),
        n = l("857248"),
        s = l("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: l = 16,
              color: a = "currentColor",
              foreground: n,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: n,
                fill: a,
                d: "M7 1C6.73479 1.00003 6.48045 1.10539 6.29292 1.29292C6.10539 1.48045 6.00003 1.73479 6 2V6C6.00009 6.23417 6.08234 6.46088 6.23242 6.64062L10.6992 12L6.23242 17.3594C6.08234 17.5391 6.00009 17.7658 6 18V22C6.00003 22.2652 6.10539 22.5195 6.29292 22.7071C6.48045 22.8946 6.73479 23 7 23H17C17.2652 23 17.5195 22.8946 17.7071 22.7071C17.8946 22.5195 18 22.2652 18 22V18C17.9999 17.7658 17.9177 17.5391 17.7676 17.3594L13.3008 12L17.7676 6.64062C17.9177 6.46088 17.9999 6.23417 18 6V2C18 1.73479 17.8946 1.48045 17.7071 1.29292C17.5195 1.10539 17.2652 1.00003 17 1H7ZM12 13.5625L16 18.3613V21H8V18.3613L12 13.5625Z",
              }),
            });
          },
          n.HourglassIcon,
          void 0,
          { size: 16 }
        );
    },
    155207: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return r;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("469563"),
        n = l("811513"),
        s = l("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              foreground: n,
              ...r
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", {
                  className: n,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: n,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, i.jsx)("path", {
                  className: n,
                  fill: a,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, i.jsx)("path", {
                  className: n,
                  fill: a,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          n.GroupIcon,
          void 0,
          { size: 24 }
        );
    },
    516358: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return s;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("469563"),
        n = l("273481"),
        s = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: a = "currentColor",
              className: n,
              foreground: s,
            } = e;
            return (0, i.jsx)("svg", {
              className: n,
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                d: "M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z",
                className: s,
                fill: a,
              }),
            });
          },
          n.ArrowAngleLeftUpIcon,
          void 0,
          { size: 24 }
        );
    },
    430143: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          GroupIcon: function () {
            return s;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("669491"),
        n = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
            className: r,
          }),
        });
      };
    },
    73261: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          HourglassIcon: function () {
            return s;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("669491"),
        n = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M9.1 8.85A.5.5 0 0 1 9.45 8h5.1a.5.5 0 0 1 .35.85l-.84.85a3.25 3.25 0 0 0 0 4.6l2.06 2.06A3 3 0 0 1 17 18.5v1.01a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.01a3 3 0 0 1 .88-2.13l2.06-2.06a3.25 3.25 0 0 0 0-4.6l-.84-.85Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M7 1a3 3 0 0 0-3 3v1.51a6 6 0 0 0 1.76 4.25l2.06 2.06c.1.1.1.26 0 .36l-2.06 2.06A6 6 0 0 0 4 18.5V20a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.51a6 6 0 0 0-1.76-4.25l-2.06-2.06a.25.25 0 0 1 0-.36l2.06-2.06A6 6 0 0 0 20 5.5V4a3 3 0 0 0-3-3H7ZM6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.51a4 4 0 0 1-1.17 2.83l-2.07 2.07c-.88.88-.88 2.3 0 3.18l2.07 2.07A4 4 0 0 1 18 18.49V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.51a4 4 0 0 1 1.17-2.83l2.07-2.07c.88-.88.88-2.3 0-3.18L7.17 8.34A4 4 0 0 1 6 5.51V4Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
    35466: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          IdIcon: function () {
            return s;
          },
        });
      var i = l("37983");
      l("884691");
      var a = l("669491"),
        n = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=c6c1c1c7ef52dd15e6b6.js.map

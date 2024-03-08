(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62498"],
  {
    781324: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          getSafetyHubData: function () {
            return o;
          },
          getSafetyHubDataForClassification: function () {
            return c;
          },
          requestReview: function () {
            return _;
          },
        });
      var n = a("872717"),
        i = a("913144"),
        s = a("651693"),
        l = a("271938"),
        u = a("736393"),
        r = a("49111");
      async function o() {
        i.default.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = l.default.getSuspendedUserToken(),
          e =
            null != t
              ? r.Endpoints.SAFETY_HUB_SUSPENDED
              : r.Endpoints.SAFETY_HUB,
          a =
            null != t
              ? n.default.post({ url: e, body: { token: t } })
              : n.default.get({ url: e });
        await a
          .then(t => {
            let { body: e } = t,
              {
                classifications: a,
                guild_classifications: n,
                account_standing: s,
                is_dsa_eligible: l,
              } = e,
              u = a.map(t => (d(t), t));
            i.default.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: u.concat(null != n ? n : []),
              accountStanding: s,
              isDsaEligible: l,
            });
          })
          .catch(t => {
            var e, a;
            i.default.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
              error:
                null !==
                  (a =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.message) && void 0 !== a
                  ? a
                  : "Unknown error",
            });
          });
      }
      async function c(t) {
        i.default.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: t,
        });
        let e = l.default.getSuspendedUserToken(),
          a =
            null != e
              ? r.Endpoints.SAFETY_HUB_SUSPENDED
              : r.Endpoints.SAFETY_HUB,
          s =
            null != e
              ? n.default.post({ url: a, body: { token: e } })
              : n.default.get({ url: a });
        await s
          .then(e => {
            let { body: a } = e,
              {
                classifications: n,
                account_standing: s,
                is_dsa_eligible: l,
              } = a,
              u = n.find(e => e.id === t);
            null != u
              ? (d(u),
                i.default.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: u,
                  accountStanding: s,
                  isDsaEligible: l,
                }))
              : i.default.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: t,
                });
          })
          .catch(e => {
            var a, n;
            i.default.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (n =
                    null == e
                      ? void 0
                      : null === (a = e.body) || void 0 === a
                        ? void 0
                        : a.message) && void 0 !== n
                  ? n
                  : "Unknown error",
              classificationId: t,
            });
          });
      }
      function d(t) {
        if (null != t.flagged_content && t.flagged_content.length > 0) {
          let e = t.flagged_content[0];
          (e.attachments = e.attachments.filter(t => {
            let { filename: e } = t;
            return (0, s.isImageFile)(e) || (0, s.isVideoFile)(e);
          })),
            (t.flagged_content = (0, u.isFlaggedContentEmpty)(e) ? [] : [e]);
        }
      }
      async function _(t, e, a) {
        let s = l.default.getSuspendedUserToken(),
          u =
            null != s
              ? r.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : r.Endpoints.SAFETY_HUB_REQUEST_REVIEW(t),
          o =
            null != s
              ? n.default.put({
                  url: u,
                  body: { signal: e, user_input: a, token: s },
                })
              : n.default.put({ url: u, body: { signal: e, user_input: a } });
        i.default.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await o
            .then(() => {
              i.default.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: t,
              });
            })
            .catch(t => {
              var e, a;
              throw (
                (i.default.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                  error:
                    null !==
                      (a =
                        null == t
                          ? void 0
                          : null === (e = t.body) || void 0 === e
                            ? void 0
                            : e.message) && void 0 !== a
                      ? a
                      : "Unknown error",
                }),
                t)
              );
            });
      }
    },
    667963: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          useIsSafetyHubDisplayGuildViolationsEnabled: function () {
            return s;
          },
        });
      var n = a("862205");
      let i = (0, n.createExperiment)({
        kind: "user",
        id: "2024-01_safety_hub_display_guild_violations",
        label: "Safety Hub Display Guild Violations",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Display guild violations in account standing",
            config: { enabled: !0 },
          },
        ],
      });
      function s(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    997510: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          useIsSafetyHubGuildViolationInAppAppealsEnabled: function () {
            return s;
          },
        });
      var n = a("862205");
      let i = (0, n.createExperiment)({
        kind: "user",
        id: "2024-02_safety_hub_guild_violation_in_app_appeals",
        label: "Safety Hub Guild Violation In App Appeals",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Allow guild violations to be applied using the new appeals ingestion flow",
            config: { enabled: !0 },
          },
        ],
      });
      function s(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    646356: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return p;
          },
        });
      var n = a("816494"),
        i = a.n(n),
        s = a("446674"),
        l = a("913144"),
        u = a("908539"),
        r = a("170213");
      let o = {},
        c = {},
        d = { state: u.AccountStandingState.ALL_GOOD },
        _ = !1,
        S = !1,
        E = null,
        f = null,
        T = !1,
        A = !1,
        I = null,
        g = r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
        N = "";
      class C extends s.default.Store {
        isFetching() {
          return _;
        }
        getClassifications() {
          return Object.values(o);
        }
        getClassification(t) {
          return o[t];
        }
        getAccountStanding() {
          return d;
        }
        getFetchError() {
          return E;
        }
        isInitialized() {
          return S;
        }
        getClassificationRequestState(t) {
          return c[t];
        }
        getAppealClassificationId() {
          return f;
        }
        getIsDsaEligible() {
          return T;
        }
        getAppealSignal() {
          return g;
        }
        getFreeTextAppealReason() {
          return N;
        }
        getIsSubmitting() {
          return A;
        }
        getSubmitError() {
          return I;
        }
      }
      C.displayName = "SafetyHubStore";
      var p = new C(l.default, {
        SAFETY_HUB_FETCH_START: function (t) {
          _ = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (t) {
          let { classifications: e, accountStanding: a, isDsaEligible: n } = t;
          (o = i(e, "id")), (d = a), (T = n), (_ = !1), (S = !0), (E = null);
        },
        SAFETY_HUB_FETCH_FAILURE: function (t) {
          let { error: e } = t;
          (_ = !1), (S = !1), (E = e);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
          (c[t.classificationId] = u.ClassificationRequestState.PENDING),
            (_ = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
          let { classification: e, accountStanding: a, isDsaEligible: n } = t;
          (o[e.id] = e),
            (c[e.id] = u.ClassificationRequestState.SUCCESS),
            (d = a),
            (_ = !1),
            (E = null),
            (T = n),
            (S = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
          let { error: e, classificationId: a } = t;
          (_ = !1),
            (E = e),
            (c[a] = u.ClassificationRequestState.FAILED),
            (S = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (t) {
          let { classificationId: e } = t;
          f = e;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
          (f = null),
            (g = r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY),
            (N = "");
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
          let { signal: e } = t;
          g = e;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
          let { userInput: e } = t;
          N = e;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
          let {} = t;
          (A = !0), (I = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
          let { classificationId: e } = t;
          (A = !1),
            (I = null),
            (o[e].appeal_status = {
              status: u.AppealStatusType.REVIEW_PENDING,
            });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
          let { error: e } = t;
          (A = !1), (I = e);
        },
        LOGOUT: function () {
          (_ = !1),
            (o = {}),
            (d = { state: u.AccountStandingState.ALL_GOOD }),
            (f = null),
            (g = r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY),
            (N = "");
        },
      });
    },
    310888: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          useIsNewClassification: function () {
            return i;
          },
        });
      var n = a("299039");
      let i = t => {
        let e = n.default.extractTimestamp(t.id);
        return 864e5 > Math.abs(e - new Date().getTime());
      };
    },
    132206: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          useSafetyHubAccountStanding: function () {
            return s;
          },
        });
      var n = a("446674"),
        i = a("646356");
      function s() {
        return (0, n.useStateFromStores)([i.default], () =>
          i.default.getAccountStanding()
        );
      }
    },
    698609: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          useSafetyHubClassification: function () {
            return d;
          },
          useActiveSafetyHubClassifications: function () {
            return _;
          },
          useExpiredSafetyHubClassifications: function () {
            return S;
          },
          useSafetyHubAppealSignal: function () {
            return E;
          },
        });
      var n = a("884691"),
        i = a("446674"),
        s = a("299039"),
        l = a("781324"),
        u = a("997510"),
        r = a("646356"),
        o = a("736393");
      function c() {
        let t = (0, i.useStateFromStoresArray)([r.default], () =>
          r.default.getClassifications()
        );
        return t.sort(
          (t, e) =>
            s.default.extractTimestamp(e.id) - s.default.extractTimestamp(t.id)
        );
      }
      function d(t) {
        let e = (0, i.useStateFromStores)([r.default], () =>
            r.default.getClassification(t)
          ),
          a = (0, i.useStateFromStores)([r.default], () =>
            r.default.getClassificationRequestState(t)
          ),
          s = (0, i.useStateFromStores)([r.default], () =>
            r.default.getIsDsaEligible()
          ),
          c = (0, u.useIsSafetyHubGuildViolationInAppAppealsEnabled)(
            "classification_detail"
          );
        return (
          n.useEffect(() => {
            void 0 === e && null == a && l.getSafetyHubDataForClassification(t);
          }, [t, e, a]),
          {
            classification: e,
            classificationRequestState: a,
            isDsaEligible: s,
            isAppealEligible:
              s &&
              null != e &&
              null == e.appeal_status &&
              (!(0, o.isGuildClassification)(e) || c),
          }
        );
      }
      function _() {
        let t = c(),
          e = new Date();
        return t.filter(t => new Date(t.max_expiration_time) > e);
      }
      function S() {
        let t = c(),
          e = new Date();
        return t.filter(t => new Date(t.max_expiration_time) <= e);
      }
      function E() {
        let t = (0, i.useStateFromStores)([r.default], () =>
          r.default.getAppealSignal()
        );
        return t;
      }
    },
    333781: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          useSafetyHubFetchError: function () {
            return s;
          },
        });
      var n = a("446674"),
        i = a("646356");
      let s = () =>
        (0, n.useStateFromStores)([i.default], () => i.default.getFetchError());
    },
    422671: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          useSafetyHubInitialized: function () {
            return s;
          },
        });
      var n = a("446674"),
        i = a("646356");
      function s() {
        let t = (0, n.useStateFromStores)([i.default], () =>
          i.default.isInitialized()
        );
        return t;
      }
    },
    792105: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return s;
          },
        });
      var n = a("446674"),
        i = a("646356");
      function s() {
        let t = (0, n.useStateFromStores)([i.default], () =>
          i.default.isFetching()
        );
        return t;
      }
    },
    133479: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return g;
          },
        }),
        a("222007");
      var n = a("37983"),
        i = a("884691"),
        s = a("917351"),
        l = a("446674"),
        u = a("669491"),
        r = a("891128"),
        o = a("165984"),
        c = a("505088"),
        d = a("77078"),
        _ = a("697218"),
        S = a("908539"),
        E = a("132206"),
        f = a("260883"),
        T = a("170213"),
        A = a("782340"),
        I = a("948707");
      function g() {
        let t = (0, E.useSafetyHubAccountStanding)(),
          e = (0, l.useStateFromStores)([_.default], () =>
            _.default.getCurrentUser()
          ),
          [a, g] = i.useState(36),
          N = i.useRef({
            [S.AccountStandingState.ALL_GOOD]: null,
            [S.AccountStandingState.LIMITED]: null,
            [S.AccountStandingState.VERY_LIMITED]: null,
            [S.AccountStandingState.AT_RISK]: null,
            [S.AccountStandingState.SUSPENDED]: null,
          }),
          C = i.useCallback(() => {
            let t = Math.max(
              ...Object.values(N.current).map(t => {
                var e;
                return null !==
                  (e = null == t ? void 0 : t.getBoundingClientRect().height) &&
                  void 0 !== e
                  ? e
                  : 36;
              })
            );
            g(Math.max(t, 36));
          }, []);
        i.useEffect(() => {
          C();
          let t = (0, s.debounce)(C, 100);
          window.addEventListener("resize", t);
        }, [C]);
        let p = {
            [S.AccountStandingState.ALL_GOOD]: {
              title:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE_V2,
              description:
                A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION_V2.format(
                  {
                    termsOfService: T.SafetyHubLinks.TOS_LINK,
                    communityGuidelines: T.SafetyHubLinks.COMMUNITY_GUIDELINES,
                  }
                ),
              status:
                A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
              Icon: r.CircleCheckIcon,
              color: u.default.colors.STATUS_POSITIVE,
            },
            [S.AccountStandingState.LIMITED]: {
              title:
                A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE_V2,
              description:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION_V2,
              status:
                A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
              Icon: o.CircleExclamationPointIcon,
              color: u.default.colors.STATUS_WARNING,
            },
            [S.AccountStandingState.VERY_LIMITED]: {
              title:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE_V2,
              description:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION_V2,
              status:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
              Icon: o.CircleExclamationPointIcon,
              color: u.default.unsafe_rawColors.ORANGE_345,
            },
            [S.AccountStandingState.AT_RISK]: {
              title:
                A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE_V2,
              description:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
              status:
                A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
              Icon: o.CircleExclamationPointIcon,
              color: u.default.colors.STATUS_DANGER,
            },
            [S.AccountStandingState.SUSPENDED]: {
              title:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE_V2,
              description:
                A.default.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION_V2,
              status:
                A.default.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
              Icon: c.CircleXIcon,
              color: u.default.colors.ICON_MUTED,
            },
          },
          { title: m, description: U, color: h, Icon: x } = p[t.state],
          H = Object.keys(p).length;
        return (0, n.jsxs)(d.Card, {
          className: I.container,
          outline: !1,
          children: [
            (0, n.jsx)("div", {
              className: I.profile,
              children: (0, n.jsx)(f.default, {
                user: e,
                size: d.AvatarSizes.SIZE_80,
              }),
            }),
            (0, n.jsxs)("div", {
              className: I.status,
              children: [
                (0, n.jsxs)("div", {
                  className: I.title,
                  children: [
                    (0, n.jsx)(d.Heading, {
                      color: "header-primary",
                      variant: "heading-lg/normal",
                      children: m.format({
                        hook: t =>
                          (0, n.jsx)(d.Text, {
                            style: { color: h.css },
                            variant: "heading-lg/bold",
                            tag: "span",
                            children: t,
                          }),
                      }),
                    }),
                    (0, n.jsx)(d.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      children: U,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: I.health,
                  style: { height: a },
                  children: [
                    (0, n.jsx)("div", { className: I.line }),
                    Object.entries(p).map((e, a) => {
                      let [i, s] = e,
                        l = parseInt(i) === t.state;
                      return (0, n.jsxs)(
                        "div",
                        {
                          className: I.statusOption,
                          ref: t => (N.current[parseInt(i)] = t),
                          children: [
                            l
                              ? (0, n.jsx)(x, {
                                  className: I.marker,
                                  color: s.color,
                                })
                              : (0, n.jsx)("div", {
                                  className: I.marker,
                                  style: {
                                    marginLeft: 0 === a ? -6 : 0,
                                    marginRight: a === H - 1 ? -6 : 0,
                                  },
                                  children: (0, n.jsx)("div", {
                                    className: I.empty,
                                  }),
                                }),
                            s.status.format({
                              hook: t =>
                                (0, n.jsx)(d.Text, {
                                  color: "text-normal",
                                  variant: "text-sm/normal",
                                  className: I.statusLabel,
                                  children: t,
                                }),
                            }),
                          ],
                        },
                        a
                      );
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    260883: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var i = a("77078"),
        s = a("58461"),
        l = a("53708");
      function u(t) {
        let { user: e, size: a } = t,
          u = (0, i.getAvatarSpecs)(a),
          r = null != e ? e.getAvatarURL(null, u.size) : l;
        return (0, n.jsx)("div", {
          className: s.avatarBackground,
          children: (0, n.jsx)("div", {
            className: s.avatar,
            style: { width: u.size, height: u.size },
            children: (0, n.jsx)(i.Avatar, {
              src: r,
              "aria-hidden": !0,
              size: a,
            }),
          }),
        });
      }
    },
    861348: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return N;
          },
        });
      var n = a("37983"),
        i = a("884691"),
        s = a("432710"),
        l = a("77078"),
        u = a("155084"),
        r = a("489622"),
        o = a("599110"),
        c = a("781324"),
        d = a("132206"),
        _ = a("333781"),
        S = a("422671"),
        E = a("792105"),
        f = a("133479"),
        T = a("966677"),
        A = a("49111"),
        I = a("782340"),
        g = a("743911");
      function N() {
        let t = (0, E.default)(),
          e = (0, S.useSafetyHubInitialized)(),
          a = (0, d.useSafetyHubAccountStanding)(),
          N = (0, _.useSafetyHubFetchError)();
        return (i.useEffect(() => {
          c.getSafetyHubData();
        }, []),
        i.useEffect(() => {
          e &&
            (o.default.track(A.AnalyticEvents.SAFETY_HUB_VIEWED, {
              account_standing: a.state,
            }),
            u.default.increment({ name: s.MetricEvents.SAFETY_HUB_VIEW }));
        }, [e]),
        t)
          ? (0, n.jsx)("div", { children: (0, n.jsx)(l.Spinner, {}) })
          : null != N
            ? (0, n.jsxs)(r.default, {
                color: r.NoticeColors.DANGER,
                className: g.nagbar,
                children: [
                  I.default.Messages.SAFETY_HUB_ERROR_MESSAGE,
                  (0, n.jsx)(r.NoticeButton, {
                    onClick: () => c.getSafetyHubData(),
                    children: I.default.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON,
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                className: g.container,
                children: [
                  (0, n.jsx)(f.default, {}),
                  (0, n.jsx)(T.ConnectedSafetyHubViolationsContainer, {}),
                ],
              });
      }
    },
    966677: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          ConnectedSafetyHubViolationsContainer: function () {
            return R;
          },
        }),
        a("222007");
      var n = a("37983"),
        i = a("884691"),
        s = a("414456"),
        l = a.n(s),
        u = a("446674"),
        r = a("779807"),
        o = a("77078"),
        c = a("461380"),
        d = a("543289"),
        _ = a("300113"),
        S = a("599110"),
        E = a("299039"),
        f = a("667963"),
        T = a("646356"),
        A = a("736393"),
        I = a("310888"),
        g = a("132206"),
        N = a("698609"),
        C = a("170213"),
        p = a("49111"),
        m = a("782340"),
        U = a("595764");
      let h = t => {
          let { status: e, onClick: a, opened: i, count: s } = t;
          return (0, n.jsxs)(o.Clickable, {
            className: U.header,
            onClick: a,
            children: [
              (0, n.jsx)("div", {
                className: U.headerIconWrapper,
                children: (0, n.jsx)(r.WarningIcon, {
                  color:
                    "active" === e
                      ? o.tokens.colors.INTERACTIVE_ACTIVE
                      : o.tokens.colors.INTERACTIVE_MUTED,
                  width: 24,
                  height: 24,
                }),
              }),
              (0, n.jsxs)("div", {
                className: U.title,
                children: [
                  (0, n.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-normal",
                    children:
                      "active" === e
                        ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE_V2.format(
                            { count: s.toString() }
                          )
                        : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED_V2.format(
                            { count: s.toString() }
                          ),
                  }),
                  (0, n.jsx)(o.Heading, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                      "active" === e
                        ? m.default.Messages
                            .SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE_V2
                        : m.default.Messages
                            .SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED_V2,
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: U.caret,
                children: (0, n.jsx)(c.default, {
                  width: 18,
                  height: 18,
                  direction: i
                    ? c.default.Directions.UP
                    : c.default.Directions.DOWN,
                }),
              }),
            ],
          });
        },
        x = () =>
          (0, n.jsxs)("div", {
            className: U.emptyState,
            children: [
              (0, n.jsxs)("div", {
                className: U.iconContainer,
                children: [
                  (0, n.jsx)("div", {
                    className: U.iconBackground,
                    children: (0, n.jsx)(_.default, { className: U.icon }),
                  }),
                  (0, n.jsx)(d.default, { className: U.stars }),
                ],
              }),
              (0, n.jsx)(o.Heading, {
                variant: "heading-md/bold",
                className: U.emptyStateText,
                children:
                  m.default.Messages
                    .SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE,
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: U.emptyStateSubtext,
                children:
                  m.default.Messages
                    .SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE,
              }),
            ],
          }),
        H = () =>
          (0, n.jsx)("div", {
            className: U.emptyState,
            children: (0, n.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: U.emptyStateSubtext,
              children:
                m.default.Messages
                  .SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED,
            }),
          }),
        O = t => {
          let { timestamp: e } = t;
          return (0, n.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: U.timestamp,
            children: (0, A.getClassificationRelativeIncidentTime)(e),
          });
        },
        F = () =>
          (0, n.jsx)(o.Text, {
            variant: "text-xs/bold",
            className: U.newBadge,
            children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW,
          }),
        D = t => {
          var e;
          let { classification: i } = t,
            { id: s, description: u, max_expiration_time: r } = i,
            c = E.default.extractTimestamp(s),
            d = (0, I.useIsNewClassification)(i),
            _ = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)(
              "violations_container"
            ),
            S = new Date(r),
            T = S.toDateString();
          return (0, n.jsx)(
            o.Clickable,
            {
              onClick: () => {
                (0, o.openModalLazy)(async () => {
                  let { default: t } = await a
                    .el("825138")
                    .then(a.bind(a, "825138"));
                  return e =>
                    (0, n.jsx)(t, {
                      classificationId: s,
                      source: C.SafetyHubAnalyticsActionSource.StandingTab,
                      ...e,
                    });
                });
              },
              className: l(U.itemDetail, { [U.itemDetailNew]: d }),
              children: (0, n.jsxs)("div", {
                className: U.descriptionContainer,
                children: [
                  d ? (0, n.jsx)(F, {}) : (0, n.jsx)(O, { timestamp: c }),
                  (0, n.jsx)(o.Heading, {
                    variant: "heading-lg/normal",
                    children:
                      _ && (0, A.isGuildClassification)(i)
                        ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format(
                            {
                              guildName:
                                null == i
                                  ? void 0
                                  : null === (e = i.guild_metadata) ||
                                      void 0 === e
                                    ? void 0
                                    : e.name,
                              description: u,
                              descriptionHook: t =>
                                (0, n.jsx)(o.Text, {
                                  tag: "span",
                                  variant: "heading-lg/bold",
                                  children: t,
                                }),
                            }
                          )
                        : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format(
                            {
                              description: u,
                              descriptionHook: t =>
                                (0, n.jsx)(o.Text, {
                                  tag: "span",
                                  variant: "heading-lg/bold",
                                  children: t,
                                }),
                            }
                          ),
                  }),
                  (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: U.expirationDate,
                    children:
                      S > new Date()
                        ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format(
                            { expirationDate: T }
                          )
                        : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format(
                            { expirationDate: T }
                          ),
                  }),
                ],
              }),
            },
            s
          );
        },
        v = t => {
          let { status: e, classifications: a } = t,
            [s, l] = i.useState(!1),
            [r, c] = i.useState(3),
            d = (0, g.useSafetyHubAccountStanding)(),
            _ = (0, u.useStateFromStores)([T.default], () =>
              T.default.getIsDsaEligible()
            ),
            E = i.useMemo(() => a.slice(0, r), [a, r]);
          i.useEffect(() => {
            s &&
              S.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
                action: C.SafetyHubAnalyticsActions.ViewViolationsDropdown,
                account_standing: d.state,
                classification_ids: E.map(t => Number(t.id)),
                source: C.SafetyHubAnalyticsActionSource.StandingTab,
                is_violative_content_shown: !1,
                is_dsa_eligible: _,
              });
          }, [s, d.state, E, _]);
          let f = a.length - E.length > 3 ? 3 : a.length - E.length;
          return (0, n.jsxs)("div", {
            className: U.dropdown,
            children: [
              (0, n.jsx)(h, {
                status: e,
                onClick: () => l(t => !t),
                opened: s,
                count: a.length,
              }),
              s &&
                (0, n.jsxs)("div", {
                  className: U.items,
                  children: [
                    (0, n.jsx)(o.TabBar.Separator, {
                      style: { height: "1px", width: "100%" },
                    }),
                    E.length > 0 &&
                      E.map(t => (0, n.jsx)(D, { classification: t }, t.id)),
                    E.length < a.length &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(o.TabBar.Separator, {
                            style: { height: "1px", width: "100%" },
                          }),
                          (0, n.jsx)("button", {
                            className: U.paginationButton,
                            onClick: () => c(t => t + f),
                            children:
                              m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format(
                                { nextPageSize: f }
                              ),
                          }),
                        ],
                      }),
                    0 === E.length && "active" === e && (0, n.jsx)(x, {}),
                    0 === E.length && "expired" === e && (0, n.jsx)(H, {}),
                  ],
                }),
            ],
          });
        },
        R = () => {
          let t = (0, N.useActiveSafetyHubClassifications)(),
            e = (0, N.useExpiredSafetyHubClassifications)();
          return 0 === t.length && 0 === e.length
            ? null
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(v, { status: "active", classifications: t }),
                  (0, n.jsx)(v, { status: "expired", classifications: e }),
                ],
              });
        };
    },
  },
]);
//# sourceMappingURL=8de320c72cab43d7f56f.js.map

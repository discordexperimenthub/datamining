(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95180"],
  {
    511143: function (e, t, r) {
      "use strict";
      var n, u, i, s;
      r.r(t),
        r.d(t, {
          TenureRewardSKUs: function () {
            return n;
          },
          NitroRewardStatus: function () {
            return u;
          },
          MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT: function () {
            return a;
          },
          MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT: function () {
            return l;
          },
          NUM_DAYS_REQUIRED_1_MONTH_VARIANT: function () {
            return o;
          },
          NUM_DAYS_3_REQUIRED_MONTH_VARIANT: function () {
            return d;
          },
        }),
        r("222007"),
        ((i = n || (n = {})).FREE_GUILD_BOOST_1_MONTH = "1215584796672000000"),
        (i.FREE_GUILD_BOOST_3_MONTHS = "1215585048330240000"),
        ((s = u || (u = {}))[(s.PENDING = 0)] = "PENDING"),
        (s[(s.REDEEMABLE = 1)] = "REDEEMABLE"),
        (s[(s.REDEEMED = 2)] = "REDEEMED");
      let a = 10,
        l = 45,
        o = 30,
        d = 90;
    },
    908309: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useUserEligibleForNitroTenureRewardCard: function () {
            return u;
          },
        });
      var n = r("719962");
      function u(e) {
        let { location: t } = e,
          { enableNitroTenureRewardCard: r } =
            n.NitroTenureRewardCardExperiment.useExperiment(
              { location: t },
              { autoTrackExposure: !1 }
            );
        return r;
      }
    },
    719962: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          NitroTenureRewardCardExperiment: function () {
            return u;
          },
        });
      var n = r("862205");
      let u = (0, n.createExperiment)({
        kind: "user",
        id: "2024-03_nitro_tenure_reward_card",
        label: "Nitro Tenure Reward Card",
        defaultConfig: { enableNitroTenureRewardCard: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables the nitro tenure reward card for users",
            config: { enableNitroTenureRewardCard: !0 },
          },
        ],
      });
    },
    359499: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useFreeBoostUserTenureReward: function () {
            return I;
          },
          useFreeBoostTenureRewardEntitlement: function () {
            return U;
          },
          useTenureRewardBadgeDescription: function () {
            return M;
          },
          useShouldShowConfettiAndGlow: function () {
            return O;
          },
          useClearTenureBadge: function () {
            return F;
          },
          useFetchEntitlementsForTenureReward: function () {
            return h;
          },
        }),
        r("222007");
      var n = r("884691"),
        u = r("866227"),
        i = r.n(u),
        s = r("446674"),
        a = r("151426"),
        l = r("316718"),
        o = r("10641"),
        d = r("235145"),
        E = r("384997"),
        c = r("697218"),
        R = r("625634"),
        _ = r("437712"),
        T = r("449008"),
        S = r("764364"),
        f = r("908309"),
        N = r("53641"),
        w = r("485426"),
        D = r("646718"),
        A = r("511143");
      function I() {
        let e = (function () {
            var e;
            let t = (0, s.useStateFromStoresObject)([N.default], () =>
              N.default.getState()
            );
            if (null != t && t.fetchState === N.FetchState.FETCHED)
              return null !==
                (e =
                  t.userTenureRewardStatusByRewardId[
                    A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH
                  ]) && void 0 !== e
                ? e
                : t.userTenureRewardStatusByRewardId[
                    A.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS
                  ];
          })(),
          t = U(),
          r = (0, s.useStateFromStores)(
            [R.default],
            () => R.default.boostSlots
          ),
          u = n.useMemo(() => {
            let e = Object.values(r);
            return e.some(e => null == e.premiumGuildSubscription);
          }, [r]),
          a = null != t;
        if (a && !1 === u)
          return {
            nitroTenureStatus: A.NitroRewardStatus.REDEEMED,
            tenureRewardSkuId: t.skuId,
            showNotification: !0,
          };
        if (a)
          return {
            nitroTenureStatus: A.NitroRewardStatus.REDEEMABLE,
            tenureRewardSkuId: t.skuId,
            showNotification: !0,
          };
        if (!(null != e && (0, w.isUserTenureRewardStatusActive)(e)))
          return null;
        else {
          if (null == e.redeemable_at || null == e.next_tenure_reward_id)
            return null;
          let t = i(e.redeemable_at).diff(i.utc(), "days");
          if (t < 0) return null;
          let r =
              e.next_tenure_reward_id ===
                A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH &&
              t <= A.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT,
            n =
              e.next_tenure_reward_id ===
                A.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS &&
              t <= A.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT;
          return {
            nitroTenureStatus: A.NitroRewardStatus.PENDING,
            tenureRewardSkuId: e.next_tenure_reward_id,
            redeemableInDays: 0 === t ? 1 : t,
            showNotification: n || r,
          };
        }
      }
      let m = new Set();
      function U() {
        let e = (0, s.useStateFromStores)(
            [_.default],
            () => {
              var e;
              return null !==
                (e = _.default.getForApplication(
                  D.PREMIUM_SUBSCRIPTION_APPLICATION
                )) && void 0 !== e
                ? e
                : m;
            },
            [],
            T.areSetsEqual
          ),
          t = (0, w.getPremiumTier2Entitlement)(e);
        if (null == t) return;
        let r = (0, w.getTenureRewardEntitlement)(
          [
            A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH,
            A.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS,
          ],
          e
        );
        return r;
      }
      let C = e => {
          switch (e) {
            case A.NitroRewardStatus.PENDING:
              return [a.DismissibleContent.TENURE_REWARD_PENDING];
            case A.NitroRewardStatus.REDEEMABLE:
              return [a.DismissibleContent.TENURE_REWARD_REDEEMABLE];
            default:
              return [];
          }
        },
        M = () => {
          let e = I(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            [r, u] = n.useState(C(t)),
            i = (0, f.useUserEligibleForNitroTenureRewardCard)({
              location: "Home",
            });
          n.useEffect(() => {
            u(C(t));
          }, [t]);
          let [s] = (0, E.useSelectedDismissibleContent)(r);
          return i
            ? null != e &&
              !0 === e.showNotification &&
              (s === a.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                s === a.DismissibleContent.TENURE_REWARD_PENDING)
              ? (0, w.getTenureRewardBadgeDescription)(e.nitroTenureStatus)
              : null
            : null;
        },
        O = () => {
          var e;
          let t =
              null === (e = I()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            r = (0, f.useUserEligibleForNitroTenureRewardCard)({
              location: "Home",
            }),
            [n] = (0, E.useSelectedDismissibleContent)([
              a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI,
            ]);
          return (
            !!r &&
            null != t &&
            t === A.NitroRewardStatus.REDEEMABLE &&
            null != t &&
            n === a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
          );
        },
        F = () => {
          let e = I(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            r = C(t),
            [u] = (0, d.useGetDismissibleContent)(r);
          n.useEffect(() => {
            null != e &&
              !0 === e.showNotification &&
              (u === a.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                u === a.DismissibleContent.TENURE_REWARD_PENDING) &&
              (0, o.markDismissibleContentAsDismissed)(u);
          }, [e, u]);
        };
      function h() {
        let {
            hasFetchedPremiumApplicationEntitlements: e,
            isFetchingPremiumApplicationEntitlements: t,
          } = (0, s.useStateFromStoresObject)([_.default], () => ({
            hasFetchedPremiumApplicationEntitlements:
              _.default.isFetchedForApplication(
                D.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
            isFetchingPremiumApplicationEntitlements:
              _.default.isFetchingForApplication(
                D.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
          })),
          r = (0, s.useStateFromStores)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (
              null != e && (0, S.isPremiumExactly)(e, D.PremiumTypes.TIER_2)
            );
          }),
          u = n.useRef(!1);
        n.useEffect(() => {
          !1 === e &&
            !1 === t &&
            !0 === r &&
            !1 === u.current &&
            (l.fetchUserEntitlementsForApplication(
              D.PREMIUM_SUBSCRIPTION_APPLICATION
            ),
            (u.current = !0));
        }, [e, t, r]);
      }
    },
    53641: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          FetchState: function () {
            return u;
          },
          default: function () {
            return d;
          },
        });
      var n,
        u,
        i = r("446674"),
        s = r("913144");
      ((n = u || (u = {}))[(n.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (n[(n.FETCHING = 1)] = "FETCHING"),
        (n[(n.FETCHED = 2)] = "FETCHED");
      let a = {
          userTenureRewardStatusByRewardId: {},
          lastFetchTimeMs: null,
          fetchState: 0,
        },
        l = a;
      class o extends i.default.PersistedStore {
        initialize(e) {
          l = { ...l, ...(null != e ? e : {}) };
        }
        getState() {
          return l;
        }
        getFetchState() {
          return l.fetchState;
        }
        getTenureRewardStatusForRewardId(e) {
          return l.userTenureRewardStatusByRewardId[e];
        }
      }
      (o.displayName = "TenureRewardStore"),
        (o.persistKey = "TenureRewardStore");
      var d = new o(s.default, {
        USER_TENURE_REWARD_SYNC_START: function () {
          l.fetchState = 1;
        },
        USER_TENURE_REWARD_SYNC_SUCCESS: function (e) {
          let { userTenureRewardStatus: t } = e;
          if (null != t) {
            let e = {};
            t.forEach(t => {
              null != t.next_tenure_reward_id &&
                (e[t.next_tenure_reward_id] = t);
            }),
              (l.userTenureRewardStatusByRewardId = e);
          } else
            l.userTenureRewardStatusByRewardId =
              a.userTenureRewardStatusByRewardId;
          (l.lastFetchTimeMs = Date.now()), (l.fetchState = 2);
        },
        USER_TENURE_REWARD_STATUS_RESET: function () {
          l.userTenureRewardStatusByRewardId =
            a.userTenureRewardStatusByRewardId;
        },
        USER_TENURE_REWARD_STATUS_DELETE: function (e) {
          let { tenureRewardIds: t } = e;
          t.forEach(e => {
            delete l.userTenureRewardStatusByRewardId[e];
          });
        },
        LOGOUT: function () {
          l = a;
        },
      });
    },
    485426: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          getPremiumTier2Entitlement: function () {
            return l;
          },
          getTenureRewardEntitlement: function () {
            return o;
          },
          isUserTenureRewardStatusActive: function () {
            return d;
          },
          getTenureRewardBadgeDescription: function () {
            return E;
          },
        }),
        r("437712");
      var n = r("552712"),
        u = r("646718"),
        i = r("511143"),
        s = r("49111"),
        a = r("782340");
      function l(e) {
        if (null == e) return;
        let t = Array.from(e).find(e => {
          var t;
          return (
            (t = e).type === s.EntitlementTypes.PURCHASE &&
            t.skuId === u.PremiumSubscriptionSKUs.TIER_2 &&
            t.applicationId === u.PREMIUM_SUBSCRIPTION_APPLICATION &&
            t.isValid(null, n.default)
          );
        });
        return t;
      }
      function o(e, t) {
        if (null == t) return;
        let r = Array.from(t).find(
          t =>
            t.type === s.EntitlementTypes.PREMIUM_PURCHASE &&
            e.includes(t.skuId) &&
            t.applicationId === u.PREMIUM_SUBSCRIPTION_APPLICATION &&
            t.isValid(null, n.default)
        );
        return r;
      }
      function d(e) {
        return null != e.redeemable_at && null != e.next_tenure_reward_id;
      }
      function E(e) {
        switch (e) {
          case i.NitroRewardStatus.PENDING:
            return a.default.Messages.REWARD;
          case i.NitroRewardStatus.REDEEMABLE:
            return a.default.Messages.REDEEM;
          case i.NitroRewardStatus.REDEEMED:
          default:
            return null;
        }
      }
    },
    672950: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var n = r("37983");
      r("884691");
      var u = r("75196"),
        i = e => {
          let {
            className: t,
            backgroundColor: r,
            backgroundCircleSize: i,
            ...s
          } = e;
          return (0, n.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, u.default)({ ...s }),
            children: [
              (0, n.jsx)("circle", {
                r: null != i ? i : "40%",
                cx: "50%",
                cy: "50%",
                className: r,
              }),
              (0, n.jsxs)("g", {
                transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                children: [
                  (0, n.jsx)("path", {
                    d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                    fill: "#FF6BFA",
                    className: t,
                  }),
                  (0, n.jsx)("path", {
                    d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                    fill: "#FFDEF9",
                  }),
                  (0, n.jsx)("path", {
                    d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                    fill: "#FFB0FF",
                  }),
                ],
              }),
            ],
          });
        };
    },
    354588: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return E;
          },
        });
      var n = r("37983");
      r("884691");
      var u = r("414456"),
        i = r.n(u),
        s = r("359499"),
        a = r("672950"),
        l = r("594455"),
        o = r("511143"),
        d = r("627887"),
        E = e => {
          let {
              showAnimations: t = !0,
              iconClassName: r,
              staticPercentage: u,
              innerCircleClassName: E,
              progressCircleStrokeSize: c,
              gemBackgroundCircleSize: R,
            } = e,
            _ = (0, s.useFreeBoostUserTenureReward)();
          if (null == _) return null;
          let { redeemableInDays: T = 0, tenureRewardSkuId: S } = _,
            f =
              o.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === S
                ? o.NUM_DAYS_REQUIRED_1_MONTH_VARIANT
                : o.NUM_DAYS_3_REQUIRED_MONTH_VARIANT,
            N = Math.min(f, Math.max(f - T, 0));
          return (0, n.jsx)("div", {
            className: i(d.gemProgressCircle, r),
            children: (0, n.jsx)(l.default, {
              animationClassName: i(d.activeProgressCircle, {
                [d.activeProgressCircleAnimation]: t,
              }),
              progressCircleStrokeSize: c,
              percentage: null != u ? u : (100 * N) / f,
              initialPercentage:
                null != u ? u : (100 * Math.max(N - 0.25 * f, 0)) / f,
              children: (0, n.jsx)(a.default, {
                className: t ? d.nitroGemAnimation : void 0,
                backgroundColor: i(d.gemBackgroundFill, E),
                backgroundCircleSize: R,
              }),
            }),
          });
        };
    },
    594455: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        }),
        r("222007");
      var n = r("37983"),
        u = r("884691"),
        i = r("43837"),
        s = e => {
          let {
              percentage: t = 0,
              children: r,
              animationClassName: s,
              initialPercentage: a = 0,
              progressCircleStrokeSize: l = 2,
            } = e,
            o = 43 + l / 2,
            d = 2 * Math.PI * o,
            [E, c] = u.useState(a);
          return (
            u.useEffect(() => {
              let e = setTimeout(() => {
                c(t);
              }, 200);
              return () => clearTimeout(e);
            }, [t]),
            (0, n.jsxs)("div", {
              className: i.circleContainer,
              children: [
                (0, n.jsxs)("svg", {
                  viewBox: "0 0 100 100",
                  className: i.circleSVG,
                  children: [
                    (0, n.jsx)("circle", {
                      className: i.baseProgressCircle,
                      fill: "transparent",
                      strokeWidth: l,
                      r: "".concat(o),
                      cx: "50%",
                      cy: "50%",
                    }),
                    (0, n.jsx)("circle", {
                      stroke: "url(#gradient)",
                      strokeWidth: l,
                      strokeLinecap: "round",
                      strokeDasharray: "".concat(d, " ").concat(d),
                      className: s,
                      style: { strokeDashoffset: (1 - E / 100) * d },
                      r: "".concat(o),
                      cx: "50%",
                      cy: "50%",
                    }),
                  ],
                }),
                (0, n.jsx)("svg", {
                  width: "0",
                  height: "0",
                  children: (0, n.jsxs)("linearGradient", {
                    id: "gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                      (0, n.jsx)("stop", {
                        offset: "0%",
                        style: { stopColor: "#FFBDF2" },
                      }),
                      (0, n.jsx)("stop", {
                        offset: "100%",
                        style: { stopColor: "#E742E1" },
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className: i.childrenContainer,
                  children: r,
                }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=95180.c8a25fab41a913e2e238.js.map

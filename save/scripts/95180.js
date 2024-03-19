(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95180"],
  {
    511143: function (e, t, r) {
      "use strict";
      var n, u, i, a;
      r.r(t),
        r.d(t, {
          TenureRewardSKUs: function () {
            return n;
          },
          NitroRewardStatus: function () {
            return u;
          },
          MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT: function () {
            return s;
          },
          MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT: function () {
            return l;
          },
          NUM_DAYS_REQUIRED_1_MONTH_VARIANT: function () {
            return d;
          },
          NUM_DAYS_3_REQUIRED_MONTH_VARIANT: function () {
            return o;
          },
        }),
        r("222007"),
        ((i = n || (n = {})).FREE_GUILD_BOOST_1_MONTH = "1215584796672000000"),
        (i.FREE_GUILD_BOOST_3_MONTHS = "1215585048330240000"),
        ((a = u || (u = {}))[(a.PENDING = 0)] = "PENDING"),
        (a[(a.REDEEMABLE = 1)] = "REDEEMABLE"),
        (a[(a.REDEEMED = 2)] = "REDEEMED");
      let s = 10,
        l = 45,
        d = 30,
        o = 90;
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
            return m;
          },
          useFreeBoostTenureRewardEntitlement: function () {
            return U;
          },
          useTenureRewardBadgeDescription: function () {
            return C;
          },
          useClearTenureBadge: function () {
            return O;
          },
          useFetchEntitlementsForTenureReward: function () {
            return h;
          },
        }),
        r("222007");
      var n = r("884691"),
        u = r("866227"),
        i = r.n(u),
        a = r("446674"),
        s = r("151426"),
        l = r("316718"),
        d = r("10641"),
        o = r("235145"),
        E = r("384997"),
        c = r("697218"),
        _ = r("625634"),
        R = r("437712"),
        T = r("449008"),
        S = r("764364"),
        f = r("908309"),
        N = r("53641"),
        w = r("485426"),
        D = r("646718"),
        I = r("511143");
      function m() {
        let e = (function () {
            var e;
            let t = (0, a.useStateFromStoresObject)([N.default], () =>
              N.default.getState()
            );
            if (null != t && t.fetchState === N.FetchState.FETCHED)
              return null !==
                (e =
                  t.userTenureRewardStatusByRewardId[
                    I.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH
                  ]) && void 0 !== e
                ? e
                : t.userTenureRewardStatusByRewardId[
                    I.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS
                  ];
          })(),
          t = U(),
          r = (0, a.useStateFromStores)(
            [_.default],
            () => _.default.boostSlots
          ),
          u = n.useMemo(() => {
            let e = Object.values(r);
            return e.some(e => null == e.premiumGuildSubscription);
          }, [r]),
          s = null != t;
        if (s && !1 === u)
          return {
            nitroTenureStatus: I.NitroRewardStatus.REDEEMED,
            tenureRewardSkuId: t.skuId,
            showNotification: !0,
          };
        if (s)
          return {
            nitroTenureStatus: I.NitroRewardStatus.REDEEMABLE,
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
                I.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH &&
              t <= I.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT,
            n =
              e.next_tenure_reward_id ===
                I.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS &&
              t <= I.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT;
          return {
            nitroTenureStatus: I.NitroRewardStatus.PENDING,
            tenureRewardSkuId: e.next_tenure_reward_id,
            redeemableInDays: 0 === t ? 1 : t,
            showNotification: n || r,
          };
        }
      }
      let A = new Set();
      function U() {
        let e = (0, a.useStateFromStores)(
            [R.default],
            () => {
              var e;
              return null !==
                (e = R.default.getForApplication(
                  D.PREMIUM_SUBSCRIPTION_APPLICATION
                )) && void 0 !== e
                ? e
                : A;
            },
            [],
            T.areSetsEqual
          ),
          t = (0, w.getPremiumTier2Entitlement)(e);
        if (null == t) return;
        let r = (0, w.getTenureRewardEntitlement)(
          [
            I.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH,
            I.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS,
          ],
          e
        );
        return r;
      }
      let M = e => {
          switch (e) {
            case I.NitroRewardStatus.PENDING:
              return [s.DismissibleContent.TENURE_REWARD_PENDING];
            case I.NitroRewardStatus.REDEEMABLE:
              return [s.DismissibleContent.TENURE_REWARD_REDEEMABLE];
            default:
              return [];
          }
        },
        C = () => {
          let e = m(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            [r, u] = n.useState(M(t)),
            i = (0, f.useUserEligibleForNitroTenureRewardCard)({
              location: "Home",
            });
          n.useEffect(() => {
            u(M(t));
          }, [t]);
          let [a] = (0, E.useSelectedDismissibleContent)(r);
          return i
            ? null != e &&
              !0 === e.showNotification &&
              (a === s.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                a === s.DismissibleContent.TENURE_REWARD_PENDING)
              ? (0, w.getTenureRewardBadgeDescription)(e.nitroTenureStatus)
              : null
            : null;
        },
        O = () => {
          let e = m(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            r = M(t),
            [u] = (0, o.useGetDismissibleContent)(r);
          n.useEffect(() => {
            null != e &&
              !0 === e.showNotification &&
              (u === s.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                u === s.DismissibleContent.TENURE_REWARD_PENDING) &&
              (0, d.markDismissibleContentAsDismissed)(u);
          }, [e, u]);
        };
      function h() {
        let {
            hasFetchedPremiumApplicationEntitlements: e,
            isFetchingPremiumApplicationEntitlements: t,
          } = (0, a.useStateFromStoresObject)([R.default], () => ({
            hasFetchedPremiumApplicationEntitlements:
              R.default.isFetchedForApplication(
                D.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
            isFetchingPremiumApplicationEntitlements:
              R.default.isFetchingForApplication(
                D.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
          })),
          r = (0, a.useStateFromStores)([c.default], () => {
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
            return o;
          },
        });
      var n,
        u,
        i = r("446674"),
        a = r("913144");
      ((n = u || (u = {}))[(n.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (n[(n.FETCHING = 1)] = "FETCHING"),
        (n[(n.FETCHED = 2)] = "FETCHED");
      let s = {
          userTenureRewardStatusByRewardId: {},
          lastFetchTimeMs: null,
          fetchState: 0,
        },
        l = s;
      class d extends i.default.PersistedStore {
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
      (d.displayName = "TenureRewardStore"),
        (d.persistKey = "TenureRewardStore");
      var o = new d(a.default, {
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
              s.userTenureRewardStatusByRewardId;
          (l.lastFetchTimeMs = Date.now()), (l.fetchState = 2);
        },
        USER_TENURE_REWARD_STATUS_RESET: function () {
          l.userTenureRewardStatusByRewardId =
            s.userTenureRewardStatusByRewardId;
        },
        USER_TENURE_REWARD_STATUS_DELETE: function (e) {
          let { tenureRewardIds: t } = e;
          t.forEach(e => {
            delete l.userTenureRewardStatusByRewardId[e];
          });
        },
        LOGOUT: function () {
          l = s;
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
            return d;
          },
          isUserTenureRewardStatusActive: function () {
            return o;
          },
          getTenureRewardBadgeDescription: function () {
            return E;
          },
        }),
        r("437712");
      var n = r("552712"),
        u = r("646718"),
        i = r("511143"),
        a = r("49111"),
        s = r("782340");
      function l(e) {
        if (null == e) return;
        let t = Array.from(e).find(e => {
          var t;
          return (
            (t = e).type === a.EntitlementTypes.PURCHASE &&
            t.skuId === u.PremiumSubscriptionSKUs.TIER_2 &&
            t.applicationId === u.PREMIUM_SUBSCRIPTION_APPLICATION &&
            t.isValid(null, n.default)
          );
        });
        return t;
      }
      function d(e, t) {
        if (null == t) return;
        let r = Array.from(t).find(
          t =>
            t.type === a.EntitlementTypes.PREMIUM_PURCHASE &&
            e.includes(t.skuId) &&
            t.applicationId === u.PREMIUM_SUBSCRIPTION_APPLICATION &&
            t.isValid(null, n.default)
        );
        return r;
      }
      function o(e) {
        return null != e.redeemable_at && null != e.next_tenure_reward_id;
      }
      function E(e) {
        switch (e) {
          case i.NitroRewardStatus.PENDING:
            return s.default.Messages.REWARD;
          case i.NitroRewardStatus.REDEEMABLE:
            return s.default.Messages.REDEEM;
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
            ...a
          } = e;
          return (0, n.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, u.default)({ ...a }),
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
        a = r("359499"),
        s = r("672950"),
        l = r("594455"),
        d = r("511143"),
        o = r("627887"),
        E = e => {
          let {
              showAnimations: t = !0,
              iconClassName: r,
              staticPercentage: u,
              innerCircleClassName: E,
              progressCircleStrokeSize: c,
              gemBackgroundCircleSize: _,
            } = e,
            R = (0, a.useFreeBoostUserTenureReward)();
          if (null == R) return null;
          let { redeemableInDays: T = 0, tenureRewardSkuId: S } = R,
            f =
              d.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === S
                ? d.NUM_DAYS_REQUIRED_1_MONTH_VARIANT
                : d.NUM_DAYS_3_REQUIRED_MONTH_VARIANT,
            N = Math.min(f, Math.max(f - T, 0));
          return (0, n.jsx)("div", {
            className: i(o.gemProgressCircle, r),
            children: (0, n.jsx)(l.default, {
              animationClassName: i(o.activeProgressCircle, {
                [o.activeProgressCircleAnimation]: t,
              }),
              progressCircleStrokeSize: c,
              percentage: null != u ? u : (100 * N) / f,
              initialPercentage:
                null != u ? u : (100 * Math.max(N - 0.25 * f, 0)) / f,
              children: (0, n.jsx)(s.default, {
                className: t ? o.nitroGemAnimation : void 0,
                backgroundColor: i(o.gemBackgroundFill, E),
                backgroundCircleSize: _,
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
            return a;
          },
        }),
        r("222007");
      var n = r("37983"),
        u = r("884691"),
        i = r("43837"),
        a = e => {
          let {
              percentage: t = 0,
              children: r,
              animationClassName: a,
              initialPercentage: s = 0,
              progressCircleStrokeSize: l = 2,
            } = e,
            d = 43 + l / 2,
            o = 2 * Math.PI * d,
            [E, c] = u.useState(s);
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
                      r: "".concat(d),
                      cx: "50%",
                      cy: "50%",
                    }),
                    (0, n.jsx)("circle", {
                      stroke: "url(#gradient)",
                      strokeWidth: l,
                      strokeLinecap: "round",
                      strokeDasharray: "".concat(o, " ").concat(o),
                      className: a,
                      style: { strokeDashoffset: (1 - E / 100) * o },
                      r: "".concat(d),
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
//# sourceMappingURL=95180.cfba9803c7104d72b16d.js.map

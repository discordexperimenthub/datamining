(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92719"],
  {
    444949: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          fetchActivityStatistics: function () {
            return o;
          },
        });
      var n = r("872717"),
        i = r("913144"),
        s = r("251013"),
        u = r("718517"),
        l = r("49111");
      let a = 6 * u.default.Millis.HOUR;
      async function o() {
        let e = s.default.lastFetched;
        if (!(null != e && Date.now() - e < a))
          try {
            let e = await n.HTTP.get({
              url: l.Endpoints.USER_ACTIVITY_STATISTICS,
              oldFormErrors: !0,
            });
            i.default.dispatch({
              type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
              statistics: e.body,
            });
          } catch (e) {
            return e;
          }
      }
    },
    359499: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useFreeBoostUserTenureReward: function () {
            return A;
          },
          useFreeBoostTenureRewardEntitlement: function () {
            return F;
          },
          useTenureRewardBadgeDescription: function () {
            return M;
          },
          useShouldShowConfettiAndGlow: function () {
            return O;
          },
          useClearTenureBadge: function () {
            return p;
          },
          useFetchEntitlementsForTenureReward: function () {
            return v;
          },
        }),
        r("222007");
      var n = r("884691"),
        i = r("866227"),
        s = r.n(i),
        u = r("446674"),
        l = r("151426"),
        a = r("316718"),
        o = r("10641"),
        d = r("235145"),
        c = r("384997"),
        E = r("697218"),
        _ = r("625634"),
        R = r("437712"),
        C = r("599110"),
        S = r("449008"),
        T = r("764364"),
        f = r("908309"),
        m = r("53641"),
        N = r("485426"),
        D = r("646718"),
        w = r("511143"),
        I = r("49111");
      function A() {
        let e = (function () {
            var e;
            let t = (0, u.useStateFromStoresObject)([m.default], () =>
              m.default.getState()
            );
            if (null != t && t.fetchState === m.FetchState.FETCHED)
              return null !==
                (e =
                  t.userTenureRewardStatusByRewardId[
                    w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH
                  ]) && void 0 !== e
                ? e
                : t.userTenureRewardStatusByRewardId[
                    w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS
                  ];
          })(),
          t = F(),
          r = (0, u.useStateFromStores)(
            [_.default],
            () => _.default.boostSlots
          ),
          i = n.useMemo(() => {
            let e = Object.values(r);
            return e.some(e => null == e.premiumGuildSubscription);
          }, [r]),
          l = null != t,
          a = {
            redeemableAt: null == e ? void 0 : e.redeemable_at,
            tenureRewardStatusId: null == e ? void 0 : e.id,
          };
        if (l && !1 === i)
          return {
            ...a,
            nitroTenureStatus: w.NitroRewardStatus.REDEEMED,
            tenureRewardSkuId: t.skuId,
            showNotification: !0,
          };
        if (l)
          return {
            ...a,
            nitroTenureStatus: w.NitroRewardStatus.REDEEMABLE,
            tenureRewardSkuId: t.skuId,
            showNotification: !0,
          };
        if (!(null != e && (0, N.isUserTenureRewardStatusActive)(e)))
          return null;
        else {
          if (null == e.redeemable_at || null == e.next_tenure_reward_id)
            return null;
          let t = s(e.redeemable_at).diff(s.utc(), "days");
          if (t < 0) return null;
          let r =
              e.next_tenure_reward_id ===
                w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH &&
              t <= w.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT,
            n =
              e.next_tenure_reward_id ===
                w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS &&
              t <= w.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT;
          return {
            ...a,
            nitroTenureStatus: w.NitroRewardStatus.PENDING,
            tenureRewardSkuId: e.next_tenure_reward_id,
            redeemableInDays: 0 === t ? 1 : t,
            showNotification: n || r,
          };
        }
      }
      let h = new Set();
      function F() {
        let e = (0, u.useStateFromStores)(
            [R.default],
            () => {
              var e;
              return null !==
                (e = R.default.getForApplication(
                  D.PREMIUM_SUBSCRIPTION_APPLICATION
                )) && void 0 !== e
                ? e
                : h;
            },
            [],
            S.areSetsEqual
          ),
          t = (0, N.getPremiumTier2Entitlement)(e);
        if (null == t) return;
        let r = (0, N.getTenureRewardEntitlement)(
          [
            w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH,
            w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS,
          ],
          e
        );
        return r;
      }
      let U = e => {
          switch (e) {
            case w.NitroRewardStatus.PENDING:
              return [l.DismissibleContent.TENURE_REWARD_PENDING];
            case w.NitroRewardStatus.REDEEMABLE:
              return [l.DismissibleContent.TENURE_REWARD_REDEEMABLE];
            default:
              return [];
          }
        },
        M = () => {
          let e = A(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            [r, i] = n.useState(U(t)),
            s = (0, f.useUserEligibleForNitroTenureRewardCard)({
              location: "Home",
            });
          n.useEffect(() => {
            i(U(t));
          }, [t]);
          let [u] = (0, c.useSelectedDismissibleContent)(r);
          return s
            ? null != e &&
              !0 === e.showNotification &&
              (u === l.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                u === l.DismissibleContent.TENURE_REWARD_PENDING)
              ? (0, N.getTenureRewardBadgeDescription)(e.nitroTenureStatus)
              : null
            : null;
        },
        O = () => {
          var e;
          let t =
              null === (e = A()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            r = (0, f.useUserEligibleForNitroTenureRewardCard)({
              location: "Home",
            }),
            [n] = (0, c.useSelectedDismissibleContent)([
              l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI,
            ]);
          return (
            !!r &&
            null != t &&
            t === w.NitroRewardStatus.REDEEMABLE &&
            n === l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
          );
        },
        p = () => {
          let e = A(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            r = U(t),
            [i] = (0, d.useGetDismissibleContent)(r),
            s = n.useRef(!1),
            u = n.useCallback(() => {
              null != e &&
                !0 === e.showNotification &&
                (i === l.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                  i === l.DismissibleContent.TENURE_REWARD_PENDING) &&
                ((0, o.markDismissibleContentAsDismissed)(i),
                i === l.DismissibleContent.TENURE_REWARD_PENDING &&
                  !1 === s.current &&
                  (C.default.track(
                    I.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED,
                    {
                      user_tenure_reward_id:
                        null == e ? void 0 : e.tenureRewardStatusId,
                      tenure_reward_id: e.tenureRewardSkuId,
                      reward_type: w.NitroRewardType.SERVER_BOOST,
                      redeemable_at: null == e ? void 0 : e.redeemableAt,
                    }
                  ),
                  (s.current = !0)));
            }, [e, i]);
          return u;
        };
      function v() {
        let {
            hasFetchedPremiumApplicationEntitlements: e,
            isFetchingPremiumApplicationEntitlements: t,
          } = (0, u.useStateFromStoresObject)([R.default], () => ({
            hasFetchedPremiumApplicationEntitlements:
              R.default.isFetchedForApplication(
                D.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
            isFetchingPremiumApplicationEntitlements:
              R.default.isFetchingForApplication(
                D.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
          })),
          r = (0, u.useStateFromStores)([E.default], () => {
            let e = E.default.getCurrentUser();
            return (
              null != e && (0, T.isPremiumExactly)(e, D.PremiumTypes.TIER_2)
            );
          }),
          i = n.useRef(!1);
        n.useEffect(() => {
          !1 === e &&
            !1 === t &&
            !0 === r &&
            !1 === i.current &&
            (a.fetchUserEntitlementsForApplication(
              D.PREMIUM_SUBSCRIPTION_APPLICATION
            ),
            (i.current = !0));
        }, [e, t, r]);
      }
    },
    672950: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("75196"),
        s = e => {
          let {
            className: t,
            backgroundColor: r,
            backgroundCircleSize: s,
            ...u
          } = e;
          return (0, n.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, i.default)({ ...u }),
            children: [
              (0, n.jsx)("circle", {
                r: null != s ? s : "40%",
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
            return _;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("414456"),
        s = r.n(i),
        u = r("446674"),
        l = r("206230"),
        a = r("359499"),
        o = r("672950"),
        d = r("594455"),
        c = r("511143"),
        E = r("627887"),
        _ = e => {
          let {
              showAnimations: t = !0,
              iconClassName: r,
              staticPercentage: i,
              innerCircleClassName: _,
              progressCircleStrokeSize: R,
              gemBackgroundCircleSize: C,
            } = e,
            S = (0, a.useFreeBoostUserTenureReward)(),
            T = (0, u.useStateFromStores)(
              [l.default],
              () => l.default.useReducedMotion
            ),
            f = t && !T;
          if (null == S) return null;
          let { redeemableInDays: m = 0, tenureRewardSkuId: N } = S,
            D =
              c.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === N
                ? c.NUM_DAYS_REQUIRED_1_MONTH_VARIANT
                : c.NUM_DAYS_3_REQUIRED_MONTH_VARIANT,
            w = Math.min(D, Math.max(D - m, 0)),
            I = (100 * w) / D,
            A = f ? (100 * Math.max(w - 0.25 * D, 0)) / D : I;
          return (0, n.jsx)("div", {
            className: s(E.gemProgressCircle, r),
            children: (0, n.jsx)(d.default, {
              animationClassName: s(E.activeProgressCircle, {
                [E.activeProgressCircleAnimation]: f,
              }),
              progressCircleStrokeSize: R,
              percentage: null != i ? i : I,
              initialPercentage: null != i ? i : A,
              children: (0, n.jsx)(o.default, {
                className: f ? E.nitroGemAnimation : void 0,
                backgroundColor: s(E.gemBackgroundFill, _),
                backgroundCircleSize: C,
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
            return u;
          },
        }),
        r("222007");
      var n = r("37983"),
        i = r("884691"),
        s = r("43837"),
        u = e => {
          let {
              percentage: t = 0,
              children: r,
              animationClassName: u,
              initialPercentage: l = 0,
              progressCircleStrokeSize: a = 2,
            } = e,
            o = 43 + a / 2,
            d = 2 * Math.PI * o,
            [c, E] = i.useState(l);
          return (
            i.useEffect(() => {
              let e = setTimeout(() => {
                E(t);
              }, 200);
              return () => clearTimeout(e);
            }, [t]),
            (0, n.jsxs)("div", {
              className: s.circleContainer,
              children: [
                (0, n.jsxs)("svg", {
                  viewBox: "0 0 100 100",
                  className: s.circleSVG,
                  children: [
                    (0, n.jsx)("circle", {
                      className: s.baseProgressCircle,
                      fill: "transparent",
                      strokeWidth: a,
                      r: "".concat(o),
                      cx: "50%",
                      cy: "50%",
                    }),
                    (0, n.jsx)("circle", {
                      stroke: "url(#gradient)",
                      strokeWidth: a,
                      strokeLinecap: "round",
                      strokeDasharray: "".concat(d, " ").concat(d),
                      className: u,
                      style: { strokeDashoffset: (1 - c / 100) * d },
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
                  className: s.childrenContainer,
                  children: r,
                }),
              ],
            })
          );
        };
    },
    743826: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return l;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("469563"),
        s = r("422244"),
        u = r("75196"),
        l = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 23,
              height: r = 18,
              color: i = "currentColor",
              ...s
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, u.default)(s),
              width: t,
              height: r,
              viewBox: "0 0 23 18",
              fill: "none",
              children: (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                fill: i,
              }),
            });
          },
          s.ShopIcon,
          void 0,
          { size: 23 }
        );
    },
  },
]);
//# sourceMappingURL=92719.044e8937b368aa38187e.js.map

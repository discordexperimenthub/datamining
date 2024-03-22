(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67407"],
  {
    397613: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ErrorBoundary: function () {
            return l;
          },
        }),
        r("70102"),
        r("222007");
      var n = r("884691");
      let i = (0, n.createContext)(null),
        s = { didCatch: !1, error: null };
      class l extends n.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, r, n = arguments.length, i = Array(n), l = 0;
              l < n;
              l++
            )
              i[l] = arguments[l];
            null === (t = (r = this.props).onReset) ||
              void 0 === t ||
              t.call(r, { args: i, reason: "imperative-api" }),
              this.setState(s);
          }
        }
        componentDidCatch(e, t) {
          var r, n;
          null === (r = (n = this.props).onError) ||
            void 0 === r ||
            r.call(n, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: r } = this.state,
            { resetKeys: n } = this.props;
          if (
            r &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
              );
            })(e.resetKeys, n)
          ) {
            var i, l;
            null === (i = (l = this.props).onReset) ||
              void 0 === i ||
              i.call(l, { next: n, prev: e.resetKeys, reason: "keys" }),
              this.setState(s);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: r,
              fallback: s,
            } = this.props,
            { didCatch: l, error: a } = this.state,
            u = e;
          if (l) {
            let e = { error: a, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, n.isValidElement)(s)) u = s;
            else if ("function" == typeof t) u = t(e);
            else if (r) u = (0, n.createElement)(r, e);
            else throw a;
          }
          return (0, n.createElement)(
            i.Provider,
            {
              value: {
                didCatch: l,
                error: a,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            u
          );
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = s);
        }
      }
    },
    111633: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        var t, r;
        return (e = String(e).toLowerCase()).length < 3
          ? e
          : (121 === e.charCodeAt(0) && ((t = !0), (e = "Y" + e.substr(1))),
            S.test(e)
              ? (e = e.substr(0, e.length - 2))
              : R.test(e) && (e = e.substr(0, e.length - 1)),
            (r = v.exec(e))
              ? u.test(r[1]) && (e = e.substr(0, e.length - 1))
              : (r = h.exec(e)) &&
                c.test(r[1]) &&
                ((e = r[1]),
                T.test(e)
                  ? (e += "e")
                  : g.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (r = p.exec(e)) && c.test(r[1]) && (e = r[1] + "i"),
            (r = N.exec(e)) && u.test(r[1]) && (e = r[1] + n[r[2]]),
            (r = A.exec(e)) && u.test(r[1]) && (e = r[1] + i[r[2]]),
            (r = I.exec(e))
              ? d.test(r[1]) && (e = r[1])
              : (r = m.exec(e)) && d.test(r[1]) && (e = r[1]),
            (r = _.exec(e)) &&
              (d.test(r[1]) || (o.test(r[1]) && !f.test(r[1]))) &&
              (e = r[1]),
            E.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var n = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        i = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        s = "[aeiouy]",
        l = "([^aeiou][^aeiouy]*)",
        a = "(" + s + "[aeiou]*)",
        u = RegExp("^" + l + "?" + a + l),
        o = RegExp("^" + l + "?" + a + l + a + "?$"),
        d = RegExp("^" + l + "?(" + a + l + "){2,}"),
        c = RegExp("^" + l + "?" + s),
        f = RegExp("^" + l + s + "[^aeiouwxy]$"),
        E = /ll$/,
        _ = /^(.+?)e$/,
        p = /^(.+?)y$/,
        m = /^(.+?(s|t))(ion)$/,
        h = /^(.+?)(ed|ing)$/,
        T = /(at|bl|iz)$/,
        v = /^(.+?)eed$/,
        R = /^.+?[^s]s$/,
        S = /^.+?(ss|i)es$/,
        g = /([^aeiouylsz])\1$/,
        N = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        A = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        I = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        }),
        r("70102");
      var n = r("884691");
      function i() {
        let e = (0, n.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: r, createStore: i, children: s } = t,
              l = (0, n.useRef)();
            return (
              !l.current &&
                (r &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !i && (i = () => r)),
                (l.current = i())),
              (0, n.createElement)(e.Provider, { value: l.current }, s)
            );
          },
          useStore: function (t) {
            let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              i = (0, n.useContext)(e);
            if (!i)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return i(t, r);
          },
          useStoreApi: () => {
            let t = (0, n.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, n.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t]
            );
          },
        };
      }
    },
    69448: function (e, t, r) {
      "use strict";
      e.exports = r.p + "f6da6e7ed1d57e445d0e.svg";
    },
    583397: function (e, t, r) {
      "use strict";
      e.exports = r.p + "c133c9df9ee4552c188a.svg";
    },
    378675: function (e, t, r) {
      "use strict";
      e.exports = r.p + "d063b4bf17f1fee95f05.svg";
    },
    665718: function (e, t, r) {
      "use strict";
      e.exports = r.p + "5420f8fd9d89897c6448.svg";
    },
    897327: function (e, t, r) {
      "use strict";
      e.exports = r.p + "d8197d45ef3e7289594d.svg";
    },
    926607: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      r.r(t),
        r.d(t, {
          _: function () {
            return n;
          },
        });
    },
    289867: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var n = r("913144"),
        i = {
          toggleMembersSection() {
            n.default.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
          },
          toggleProfilePanelSection() {
            n.default.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
          },
          toggleSummariesSection() {
            n.default.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
          },
        };
    },
    642950: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return _;
          },
        }),
        r("222007");
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("77078"),
        u = r("54239"),
        o = r("79112"),
        d = r("49111"),
        c = r("782340"),
        f = r("44026");
      class E extends i.Component {
        render() {
          return (0, n.jsxs)("div", {
            className: f.streamerModeEnabled,
            children: [
              (0, n.jsx)("div", { className: f.streamerModeEnabledImage }),
              (0, n.jsx)(a.Clickable, {
                className: l(f.streamerModeEnabledBtn, {
                  [f.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: c.default.Messages.STREAMER_MODE_ENABLED,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleClick = () => {
              !this.props.disableButton &&
                ((0, u.pushLayer)(d.Layers.USER_SETTINGS),
                o.default.setSection(d.UserSettingsSections.STREAMER_MODE));
            });
        }
      }
      E.defaultProps = { disableButton: !1 };
      var _ = E;
    },
    7037: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("833067");
      r.es(n, t);
    },
    177589: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return o;
          },
        });
      var n = r("429928"),
        i = r("36539"),
        s = r("502651"),
        l = r("671071"),
        a = r("322631"),
        u = r("947297");
      function o(e) {
        return (0, i.default)(e)
          ? u.XBOX_APPLICATION_ID_PREFIX + e.name
          : (0, n.default)(e) && null != e.party && null != e.party.id
            ? l.SpotifyApplication.id
            : (0, s.default)(e) && null != e.url
              ? a.TWITCH_APPLICATION_ID_PREFIX + e.url
              : null != e.application_id
                ? e.application_id
                : null;
      }
    },
    359499: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useFreeBoostUserTenureReward: function () {
            return g;
          },
          useFreeBoostTenureRewardEntitlement: function () {
            return A;
          },
          useTenureRewardBadgeDescription: function () {
            return C;
          },
          useShouldShowConfettiAndGlow: function () {
            return b;
          },
          useClearTenureBadge: function () {
            return y;
          },
          useFetchEntitlementsForTenureReward: function () {
            return P;
          },
        }),
        r("222007");
      var n = r("884691"),
        i = r("866227"),
        s = r.n(i),
        l = r("446674"),
        a = r("151426"),
        u = r("316718"),
        o = r("10641"),
        d = r("235145"),
        c = r("384997"),
        f = r("697218"),
        E = r("625634"),
        _ = r("437712"),
        p = r("449008"),
        m = r("764364"),
        h = r("908309"),
        T = r("53641"),
        v = r("485426"),
        R = r("646718"),
        S = r("511143");
      function g() {
        let e = (function () {
            var e;
            let t = (0, l.useStateFromStoresObject)([T.default], () =>
              T.default.getState()
            );
            if (null != t && t.fetchState === T.FetchState.FETCHED)
              return null !==
                (e =
                  t.userTenureRewardStatusByRewardId[
                    S.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH
                  ]) && void 0 !== e
                ? e
                : t.userTenureRewardStatusByRewardId[
                    S.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS
                  ];
          })(),
          t = A(),
          r = (0, l.useStateFromStores)(
            [E.default],
            () => E.default.boostSlots
          ),
          i = n.useMemo(() => {
            let e = Object.values(r);
            return e.some(e => null == e.premiumGuildSubscription);
          }, [r]),
          a = null != t;
        if (a && !1 === i)
          return {
            nitroTenureStatus: S.NitroRewardStatus.REDEEMED,
            tenureRewardSkuId: t.skuId,
            showNotification: !0,
          };
        if (a)
          return {
            nitroTenureStatus: S.NitroRewardStatus.REDEEMABLE,
            tenureRewardSkuId: t.skuId,
            showNotification: !0,
          };
        if (!(null != e && (0, v.isUserTenureRewardStatusActive)(e)))
          return null;
        else {
          if (null == e.redeemable_at || null == e.next_tenure_reward_id)
            return null;
          let t = s(e.redeemable_at).diff(s.utc(), "days");
          if (t < 0) return null;
          let r =
              e.next_tenure_reward_id ===
                S.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH &&
              t <= S.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT,
            n =
              e.next_tenure_reward_id ===
                S.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS &&
              t <= S.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT;
          return {
            nitroTenureStatus: S.NitroRewardStatus.PENDING,
            tenureRewardSkuId: e.next_tenure_reward_id,
            redeemableInDays: 0 === t ? 1 : t,
            showNotification: n || r,
          };
        }
      }
      let N = new Set();
      function A() {
        let e = (0, l.useStateFromStores)(
            [_.default],
            () => {
              var e;
              return null !==
                (e = _.default.getForApplication(
                  R.PREMIUM_SUBSCRIPTION_APPLICATION
                )) && void 0 !== e
                ? e
                : N;
            },
            [],
            p.areSetsEqual
          ),
          t = (0, v.getPremiumTier2Entitlement)(e);
        if (null == t) return;
        let r = (0, v.getTenureRewardEntitlement)(
          [
            S.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH,
            S.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS,
          ],
          e
        );
        return r;
      }
      let I = e => {
          switch (e) {
            case S.NitroRewardStatus.PENDING:
              return [a.DismissibleContent.TENURE_REWARD_PENDING];
            case S.NitroRewardStatus.REDEEMABLE:
              return [a.DismissibleContent.TENURE_REWARD_REDEEMABLE];
            default:
              return [];
          }
        },
        C = () => {
          let e = g(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            [r, i] = n.useState(I(t)),
            s = (0, h.useUserEligibleForNitroTenureRewardCard)({
              location: "Home",
            });
          n.useEffect(() => {
            i(I(t));
          }, [t]);
          let [l] = (0, c.useSelectedDismissibleContent)(r);
          return s
            ? null != e &&
              !0 === e.showNotification &&
              (l === a.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                l === a.DismissibleContent.TENURE_REWARD_PENDING)
              ? (0, v.getTenureRewardBadgeDescription)(e.nitroTenureStatus)
              : null
            : null;
        },
        b = () => {
          var e;
          let t =
              null === (e = g()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            r = (0, h.useUserEligibleForNitroTenureRewardCard)({
              location: "Home",
            }),
            [n] = (0, c.useSelectedDismissibleContent)([
              a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI,
            ]);
          return (
            !!r &&
            null != t &&
            t === S.NitroRewardStatus.REDEEMABLE &&
            null != t &&
            n === a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
          );
        },
        y = () => {
          let e = g(),
            t = null == e ? void 0 : e.nitroTenureStatus,
            r = I(t),
            [i] = (0, d.useGetDismissibleContent)(r);
          n.useEffect(() => {
            null != e &&
              !0 === e.showNotification &&
              (i === a.DismissibleContent.TENURE_REWARD_REDEEMABLE ||
                i === a.DismissibleContent.TENURE_REWARD_PENDING) &&
              (0, o.markDismissibleContentAsDismissed)(i);
          }, [e, i]);
        };
      function P() {
        let {
            hasFetchedPremiumApplicationEntitlements: e,
            isFetchingPremiumApplicationEntitlements: t,
          } = (0, l.useStateFromStoresObject)([_.default], () => ({
            hasFetchedPremiumApplicationEntitlements:
              _.default.isFetchedForApplication(
                R.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
            isFetchingPremiumApplicationEntitlements:
              _.default.isFetchingForApplication(
                R.PREMIUM_SUBSCRIPTION_APPLICATION
              ),
          })),
          r = (0, l.useStateFromStores)([f.default], () => {
            let e = f.default.getCurrentUser();
            return (
              null != e && (0, m.isPremiumExactly)(e, R.PremiumTypes.TIER_2)
            );
          }),
          i = n.useRef(!1);
        n.useEffect(() => {
          !1 === e &&
            !1 === t &&
            !0 === r &&
            !1 === i.current &&
            (u.fetchUserEntitlementsForApplication(
              R.PREMIUM_SUBSCRIPTION_APPLICATION
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
            ...l
          } = e;
          return (0, n.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, i.default)({ ...l }),
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
            return c;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("414456"),
        s = r.n(i),
        l = r("359499"),
        a = r("672950"),
        u = r("594455"),
        o = r("511143"),
        d = r("627887"),
        c = e => {
          let {
              showAnimations: t = !0,
              iconClassName: r,
              staticPercentage: i,
              innerCircleClassName: c,
              progressCircleStrokeSize: f,
              gemBackgroundCircleSize: E,
            } = e,
            _ = (0, l.useFreeBoostUserTenureReward)();
          if (null == _) return null;
          let { redeemableInDays: p = 0, tenureRewardSkuId: m } = _,
            h =
              o.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === m
                ? o.NUM_DAYS_REQUIRED_1_MONTH_VARIANT
                : o.NUM_DAYS_3_REQUIRED_MONTH_VARIANT,
            T = Math.min(h, Math.max(h - p, 0));
          return (0, n.jsx)("div", {
            className: s(d.gemProgressCircle, r),
            children: (0, n.jsx)(u.default, {
              animationClassName: s(d.activeProgressCircle, {
                [d.activeProgressCircleAnimation]: t,
              }),
              progressCircleStrokeSize: f,
              percentage: null != i ? i : (100 * T) / h,
              initialPercentage:
                null != i ? i : (100 * Math.max(T - 0.25 * h, 0)) / h,
              children: (0, n.jsx)(a.default, {
                className: t ? d.nitroGemAnimation : void 0,
                backgroundColor: s(d.gemBackgroundFill, c),
                backgroundCircleSize: E,
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
            return l;
          },
        }),
        r("222007");
      var n = r("37983"),
        i = r("884691"),
        s = r("43837"),
        l = e => {
          let {
              percentage: t = 0,
              children: r,
              animationClassName: l,
              initialPercentage: a = 0,
              progressCircleStrokeSize: u = 2,
            } = e,
            o = 43 + u / 2,
            d = 2 * Math.PI * o,
            [c, f] = i.useState(a);
          return (
            i.useEffect(() => {
              let e = setTimeout(() => {
                f(t);
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
                      strokeWidth: u,
                      r: "".concat(o),
                      cx: "50%",
                      cy: "50%",
                    }),
                    (0, n.jsx)("circle", {
                      stroke: "url(#gradient)",
                      strokeWidth: u,
                      strokeLinecap: "round",
                      strokeDasharray: "".concat(d, " ").concat(d),
                      className: l,
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
    970366: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          trackAppUIViewed: function () {
            return u;
          },
        }),
        r("222007");
      var n = r("748820"),
        i = r("49671"),
        s = r("599110"),
        l = r("49111");
      let a = new (class e {
        trackEvent(e, t) {
          let r = Date.now();
          requestIdleCallback(() => {
            s.default.track(e, {
              ...(function () {
                var e, t, r;
                let n = "--campaign-id=",
                  s =
                    null !==
                      (r =
                        null === i.default || void 0 === i.default
                          ? void 0
                          : null === (t = i.default.processUtils) ||
                              void 0 === t
                            ? void 0
                            : null === (e = t.getMainArgvSync) || void 0 === e
                              ? void 0
                              : e.call(t)) && void 0 !== r
                      ? r
                      : [];
                for (let e of s)
                  if (e.startsWith(n)) return { referrer: e.substr(n.length) };
                return {};
              })(),
              ...(function () {
                let e = !1,
                  t = {
                    total_compressed_byte_size: 0,
                    total_uncompressed_byte_size: 0,
                    total_transfer_byte_size: 0,
                    js_compressed_byte_size: 0,
                    js_uncompressed_byte_size: 0,
                    js_transfer_byte_size: 0,
                    css_compressed_byte_size: 0,
                    css_uncompressed_byte_size: 0,
                    css_transfer_byte_size: 0,
                  };
                return (
                  null != window.performance &&
                    null != window.performance.getEntries &&
                    window.performance.getEntries().forEach(r => {
                      let n =
                          null != r.encodedBodySize
                            ? r.encodedBodySize
                            : r.decodedBodySize,
                        i =
                          null != r.decodedBodySize
                            ? r.decodedBodySize
                            : r.encodedBodySize,
                        s = r.transferSize;
                      null != i &&
                        null != n &&
                        ((e = !0),
                        (t.total_compressed_byte_size += n),
                        (t.total_uncompressed_byte_size += i),
                        null != s && (t.total_uncompressed_byte_size += s),
                        "resource" === r.entryType &&
                          ("script" === r.initiatorType &&
                            null != r.name &&
                            null != r.name.match(/\.js/) &&
                            ((t.js_compressed_byte_size += n),
                            (t.js_uncompressed_byte_size += i),
                            null != s && (t.js_uncompressed_byte_size += s)),
                          "link" === r.initiatorType &&
                            null != r.name &&
                            null != r.name.match(/\.css/) &&
                            ((t.css_compressed_byte_size += n),
                            (t.css_uncompressed_byte_size += i),
                            null != s && (t.css_uncompressed_byte_size += s))));
                    }),
                  e ? t : {}
                );
              })(),
              load_id: this.loadId,
              screen_name: t,
              duration_ms_since_app_opened:
                r - window.GLOBAL_ENV.HTML_TIMESTAMP,
            });
          });
        }
        trackAppUIViewed(e) {
          !this.appUIViewed &&
            (this.trackEvent(l.AnalyticEvents.APP_UI_VIEWED, e),
            (this.appUIViewed = !0));
        }
        constructor() {
          (this.loadId = (0, n.v4)()), (this.appUIViewed = !1);
        }
      })();
      function u(e) {
        a.trackAppUIViewed(e);
      }
    },
    893980: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          trackProfilePanelViewed: function () {
            return u;
          },
          trackProfilePanelToggled: function () {
            return o;
          },
        });
      var n = r("373469"),
        i = r("824563"),
        s = r("27618"),
        l = r("599110"),
        a = r("49111");
      let u = e => {
          let {
            displayProfile: t,
            isMobile: r,
            loadDurationMs: n,
            activity: i,
            customStatusActivity: s,
            status: u,
          } = e;
          l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: r,
            has_activity:
              null != i &&
              (null == i ? void 0 : i.type) !== a.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == i ? void 0 : i.type) === a.ActivityTypes.PLAYING,
            load_duration_ms: n,
            profile_user_status: u,
            has_custom_status: null != s,
            has_profile_effect: null != t.profileEffectId,
            ...d(t),
          });
        },
        o = (e, t) => {
          l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...d(e),
          });
        },
        d = e => {
          var t;
          if (null == e) return {};
          let r = e.userId,
            l = null != n.default.getAnyStreamForUser(r),
            u = i.default.findActivity(r, e => {
              let { type: t } = e;
              return l
                ? t === a.ActivityTypes.PLAYING
                : t !== a.ActivityTypes.CUSTOM_STATUS;
            }),
            o = null == u ? void 0 : u.assets,
            d = s.default.isFriend(r);
          return {
            has_images: !!(null !== (t = null == o ? void 0 : o.large_image) &&
            void 0 !== t
              ? t
              : null == o
                ? void 0
                : o.small_image),
            is_friend: d,
            viewed_profile_user_id: r,
            profile_has_nitro_customization: e.hasPremiumCustomization(),
            profile_has_theme_color_customized: e.hasThemeColors(),
            profile_has_theme_animation: null != e.popoutAnimationParticleType,
          };
        };
    },
    322631: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          TWITCH_APPLICATION_ID_PREFIX: function () {
            return a;
          },
          default: function () {
            return n;
          },
        });
      var n,
        i = r("376556"),
        s = r("653047"),
        l = r("782340");
      let a = "twitch:";
      n = class extends s.default {
        getIconURL() {
          return i.default.get("twitch").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(a).concat(e.url)),
            (this.name =
              l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH);
        }
      };
    },
    947297: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          XBOX_APPLICATION_ID_PREFIX: function () {
            return l;
          },
          default: function () {
            return n;
          },
        });
      var n,
        i = r("376556"),
        s = r("653047");
      let l = "xbox:";
      n = class extends s.default {
        getIconURL() {
          return i.default.get("xbox").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(l).concat(e.name)),
            (this.name = e.name);
        }
      };
    },
    476108: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r("446674"),
        i = r("95410"),
        s = r("913144"),
        l = r("49111");
      let a = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = a,
        o = "LAST_VIEWED_PATH";
      class d extends n.default.PersistedStore {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
          u = null != e ? e : a;
        }
        get defaultRoute() {
          return l.Routes.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : l.Routes.ME;
        }
        get fallbackRoute() {
          return l.Routes.ME;
        }
        getState() {
          return u;
        }
      }
      (d.displayName = "DefaultRouteStore"),
        (d.persistKey = "DefaultRouteStore"),
        (d.migrations = [
          () => {
            let e = i.default.get(o, null);
            return i.default.remove(o), { lastViewedPath: e };
          },
        ]);
      var c = new d(s.default, {
        SAVE_LAST_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
          let { path: t } = e;
          return (u.lastViewedNonVoicePath = t), !0;
        },
      });
    },
    1017: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return T;
          },
        });
      var n = r("446674"),
        i = r("913144"),
        s = r("177589"),
        l = r("824563"),
        a = r("843823"),
        u = r("697218"),
        o = r("49111");
      let d = !1,
        c = {},
        f = {};
      function E(e) {
        let t = !1;
        return (
          e.forEach(e => {
            t = !1 !== p(e) || t;
          }),
          t
        );
      }
      function _(e) {
        let t = f[e];
        if (null == t) return !1;
        let r = t.gameId;
        return (
          null != c[r] &&
            ((c = { ...c }),
            delete c[r][e],
            0 === Object.values(c[r]).length && delete c[r]),
          (f = { ...f }),
          delete f[e],
          !0
        );
      }
      function p(e) {
        let { user: t, activities: r } = e;
        if (null == t) return !1;
        let n = r.filter(e => e.type !== o.ActivityTypes.CUSTOM_STATUS);
        if (0 === n.length) return _(t.id);
        let i = !1;
        return (
          n.forEach(e => {
            (function (e, t) {
              var r, n, i, l;
              let a = (0, s.default)(e);
              if (null == a) return _(t.id);
              let u = f[t.id];
              null != u && u.gameId !== a && _(t.id);
              let o =
                  null !==
                    (n =
                      null === (r = e.timestamps) || void 0 === r
                        ? void 0
                        : r.start) && void 0 !== n
                    ? n
                    : Date.now(),
                d = { userId: t.id, activity: e, startedPlaying: o };
              return (
                (i = a),
                (l = d),
                (c = { ...c, [i]: { ...c[i], [l.userId]: l } }),
                (f = {
                  ...f,
                  [l.userId]: { gameId: i, startedPlaying: l.startedPlaying },
                }),
                !0
              );
            })(e, t) && (i = !0);
          }),
          i
        );
      }
      function m() {
        let e = !1;
        if (!a.default.needsRefresh() && !d) {
          let t;
          (c = {}),
            (f = {}),
            (t = !1),
            l.default.getUserIds().forEach(e => {
              let r = u.default.getUser(e);
              null != r &&
                (t =
                  p({ user: r, activities: l.default.getActivities(e) }) || t);
            }),
            (e = t);
        }
        return (d = !a.default.needsRefresh()), e;
      }
      class h extends n.default.Store {
        initialize() {
          this.waitFor(a.default), this.syncWith([a.default], m);
        }
        get games() {
          return c;
        }
        get usersPlaying() {
          return f;
        }
        get gameIds() {
          return Object.keys(c);
        }
        getNowPlaying(e) {
          return c[e];
        }
        getUserGame(e) {
          return f[e];
        }
      }
      h.displayName = "NowPlayingStore";
      var T = new h(i.default, {
        CONNECTION_OPEN: function () {
          (c = {}), (f = {});
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
          let { guilds: t, presences: r } = e,
            n = !1;
          return (
            t.forEach(e => {
              E(e.presences) && (n = !0);
            }),
            E(r) && (n = !0),
            n
          );
        },
        LOGOUT: function () {
          (c = {}), (f = {});
        },
        PRESENCE_UPDATES: function (e) {
          let { updates: t } = e;
          return t.map(e => p(e)).some(e => e);
        },
        PRESENCES_REPLACE: function (e) {
          let { presences: t } = e;
          return E(t);
        },
      });
    },
    287850: function (e, t, r) {
      "use strict";
      let n, i, s;
      r.r(t),
        r.d(t, {
          default: function () {
            return O;
          },
        }),
        r("222007"),
        r("424973");
      var l,
        a,
        u = r("866227"),
        o = r.n(u),
        d = r("446674"),
        c = r("407846"),
        f = r("913144"),
        E = r("21121"),
        _ = r("934306"),
        p = r("288518"),
        m = r("486503"),
        h = r("233069"),
        T = r("42203"),
        v = r("305961"),
        R = r("660478"),
        S = r("282109"),
        g = r("697218"),
        N = r("299039"),
        A = r("724210");
      ((a = l || (l = {})).DEFAULT = "DEFAULT"), (a.FAVORITE = "FAVORITE");
      let I = new c.default(
        e => {
          let { isRequest: t, isFavorite: r } = e;
          return t ? [] : [r ? "FAVORITE" : "DEFAULT"];
        },
        e => {
          let { lastMessageId: t } = e;
          return -t;
        }
      );
      function C(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, r;
                let n =
                    null !==
                      (r =
                        null !== (t = R.default.lastMessageId(e.id)) &&
                        void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== r
                      ? r
                      : e.id,
                  i = e.isMessageRequestTimestamp;
                if (null != i) {
                  let e = o(i).valueOf(),
                    t = N.default.fromTimestamp(e);
                  return N.default.compare(n, t) > 0 ? n : t;
                }
                return n;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite:
            S.default.isMessagesFavorite(e.id) &&
            (0, E.isInMainTabsExperiment)(),
          isRequest: p.default.isMessageRequest(e.id) || m.default.isSpam(e.id),
        };
      }
      function b() {
        I.clear(),
          Object.values(T.default.getMutablePrivateChannels()).forEach(e => {
            I.set(e.id, C(e));
          }),
          (0, E.isInMainTabsExperiment)() &&
            (0, _.isSplitMessagesTab)() &&
            S.default.getAddedToMessages().forEach(e => {
              let t = T.default.getChannel(e);
              null != t &&
                (0, h.isGuildTextChannelType)(t.type) &&
                I.set(t.id, C(t));
            });
      }
      function y() {
        let e = T.default.getMutablePrivateChannels();
        for (let t in e) I.set(t, C(e[t]));
      }
      let P =
        ((n = []),
        (i = []),
        (s = []),
        () => {
          let e = I.values("FAVORITE"),
            t = I.values("DEFAULT");
          return (
            (n !== e || i !== t) &&
              ((s = []),
              e.forEach(e => {
                let { channelId: t } = e;
                return s.push(t);
              }),
              (n = e),
              t.forEach(e => {
                let { channelId: t } = e;
                return s.push(t);
              }),
              (i = t)),
            s
          );
        });
      class w extends d.default.Store {
        initialize() {
          this.waitFor(T.default, v.default, g.default, p.default, S.default),
            this.syncWith([S.default, p.default], b);
        }
        getPrivateChannelIds() {
          return P();
        }
        getSortedChannels() {
          return [I.values("FAVORITE"), I.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            I.values().forEach(t => {
              let { channelId: r, lastMessageId: n } = t;
              e[r] = n;
            }),
            e
          );
        }
      }
      w.displayName = "PrivateChannelSortStore";
      var O = new w(f.default, {
        CONNECTION_OPEN: b,
        CONNECTION_OPEN_SUPPLEMENTAL: b,
        OVERLAY_INITIALIZE: b,
        CACHE_LOADED: y,
        CACHE_LOADED_LAZY: y,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          t.forEach(e => {
            ((0, h.isPrivate)(e.type) || I.has(e.id)) && I.set(e.id, C(e));
          });
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          if (
            !(0, h.isPrivate)(t.type) ||
            t.id === A.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
          )
            return !1;
          I.set(t.id, C(t));
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          return I.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: r } = e;
          if (!I.has(t)) return !1;
          let n = T.default.getChannel(t);
          return null != n && I.set(t, C(n, r.id));
        },
        GUILD_CREATE: function (e) {
          let t = e.guild.id;
          return I.delete(t);
        },
        LOGOUT: function () {
          I.clear();
        },
      });
    },
    137215: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("546671"),
        u = r("711603");
      let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
        d = {
          [o.UP]: u.up,
          [o.RIGHT]: u.right,
          [o.DOWN]: u.down,
          [o.LEFT]: u.left,
        };
      class c extends i.PureComponent {
        render() {
          let { direction: e, className: t } = this.props;
          return (0, n.jsx)(a.default, {
            className: l(u.arrow, t, { [d[e]]: !0 }),
          });
        }
      }
      c.Directions = o;
      var f = c;
    },
    454589: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        }),
        r("222007");
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("77078"),
        u = r("145131"),
        o = r("461380"),
        d = r("361466");
      class c extends i.PureComponent {
        handleClick(e) {
          let { onBreadcrumbClick: t } = this.props;
          null != t && t(e);
        }
        render() {
          let { breadcrumbs: e, className: t } = this.props,
            r = e.map(this.renderBreadcrumb);
          return (0, n.jsx)(u.default, {
            justify: u.default.Justify.START,
            className: l(d.breadcrumbs, t),
            children: r,
          });
        }
        constructor(...e) {
          super(...e),
            (this.renderBreadcrumb = (e, t) => {
              let {
                  activeId: r,
                  onBreadcrumbClick: i,
                  breadcrumbs: s,
                  renderCustomBreadcrumb: u,
                  separatorClassName: c,
                } = this.props,
                f = e.id === r,
                E = t === s.length - 1,
                _ =
                  null != u
                    ? u(e, f)
                    : (0, n.jsx)("span", {
                        className: l(d.breadcrumb, {
                          [d.activeBreadcrumb]: f,
                          [d.interactiveBreadcrumb]: null != i,
                        }),
                        children: e.label,
                      });
              return (0, n.jsxs)(
                "div",
                {
                  className: l(d.breadcrumbWrapper, {
                    [d.breadcrumbFinalWrapper]: E,
                  }),
                  children: [
                    null != i
                      ? (0, n.jsx)(a.Clickable, {
                          tag: "span",
                          onClick: () => this.handleClick(e),
                          className: d.breadcrumbClickWrapper,
                          children: _,
                        })
                      : _,
                    E
                      ? null
                      : (0, n.jsx)(o.default, {
                          className: l(d.breadcrumbArrow, c),
                          direction: o.default.Directions.RIGHT,
                        }),
                  ],
                },
                e.id
              );
            });
        }
      }
      var f = c;
    },
    440351: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("77078"),
        u = r("145131"),
        o = r("750457"),
        d = r("890957");
      class c extends i.PureComponent {
        render() {
          let {
            title: e,
            description: t,
            agreement: r,
            disagreement: i,
            onAgree: s,
            onDisagree: c,
            imageClassName: f,
          } = this.props;
          return (0, n.jsxs)(u.default, {
            className: o.gatedContent,
            justify: u.default.Justify.CENTER,
            align: u.default.Align.CENTER,
            direction: u.default.Direction.VERTICAL,
            children: [
              (0, n.jsx)("div", { className: l(o.image, f) }),
              (0, n.jsx)("div", {
                className: l(o.title, d.marginBottom8),
                children: e,
              }),
              (0, n.jsx)("div", {
                className: l(o.description, d.marginBottom20),
                children: t,
              }),
              (0, n.jsxs)(u.default, {
                justify: u.default.Justify.CENTER,
                align: u.default.Align.CENTER,
                grow: 0,
                children: [
                  null != i
                    ? (0, n.jsx)(a.Button, {
                        className: o.action,
                        size: a.ButtonSizes.LARGE,
                        color: a.ButtonColors.PRIMARY,
                        onClick: c,
                        children: i,
                      })
                    : null,
                  null != r
                    ? (0, n.jsx)(a.Button, {
                        className: o.action,
                        color: a.Button.Colors.RED,
                        size: a.ButtonSizes.LARGE,
                        onClick: s,
                        children: r,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
      }
      var f = c;
    },
    546671: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("469563"),
        s = r("7037"),
        l = r("246053"),
        a = (0, i.replaceIcon)(function (e) {
          return (0, n.jsx)(l.default, {
            ...e,
            direction: l.default.Directions.UP,
          });
        }, s.ArrowSmallUpIcon);
    },
    833067: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ArrowSmallUpIcon: function () {
            return l;
          },
        });
      var n = r("37983");
      r("884691");
      var i = r("669491"),
        s = r("82169");
      let l = e => {
        let {
          width: t = 24,
          height: r = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...u
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: r,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
            className: a,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=11e0d25a809e1f2da0aa.js.map

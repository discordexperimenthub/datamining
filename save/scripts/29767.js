(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29767"],
  {
    366634: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return u;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("414456"),
        l = i.n(n),
        r = i("748820"),
        o = i("899411");
      let a = (0, r.v4)();
      var u = e => {
        let { open: t, className: i, withHighlight: n = !1 } = e;
        return (0, s.jsxs)("svg", {
          width: "18",
          height: "18",
          className: l(o.button, i, { [o.open]: t, [o.withHighlight]: n }),
          children: [
            n &&
              (0, s.jsx)("defs", {
                children: (0, s.jsxs)("linearGradient", {
                  id: a,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, s.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, s.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, s.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, s.jsx)("path", {
                  stroke: n ? "url(#".concat(a, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  stroke: n ? "url(#".concat(a, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    505088: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i("506070");
      i.es(s, t);
    },
    109731: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i("3696");
      i.es(s, t);
    },
    424823: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i("632874");
      i.es(s, t);
    },
    287083: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i("618807");
      i.es(s, t);
    },
    390300: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i("882039");
      i.es(s, t);
    },
    863921: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("414456"),
        l = i.n(n),
        r = i("931138"),
        o = i("206453"),
        a = i("49111"),
        u = i("666703");
      let c = {
          [a.BoostedGuildTiers.NONE]: u.iconBackgroundTierNone,
          [a.BoostedGuildTiers.TIER_1]: u.iconBackgroundTierOne,
          [a.BoostedGuildTiers.TIER_2]: u.iconBackgroundTierTwo,
          [a.BoostedGuildTiers.TIER_3]: u.iconBackgroundTierThree,
        },
        d = {
          [a.BoostedGuildTiers.NONE]: u.iconTierNone,
          [a.BoostedGuildTiers.TIER_1]: u.iconTierOne,
          [a.BoostedGuildTiers.TIER_2]: u.iconTierTwo,
          [a.BoostedGuildTiers.TIER_3]: u.iconTierThree,
        };
      function f(e) {
        let {
          premiumTier: t,
          iconBackgroundClassName: i,
          iconClassName: n,
          size: a,
        } = e;
        return (0, s.jsx)(r.default, {
          className: l(i, c[t]),
          size: a,
          children: (0, s.jsx)(o.default, {
            tier: t,
            className: l(n, u.boostedGuildIconGem, d[t]),
          }),
        });
      }
    },
    836275: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          openGuildBannerUpsellModal: function () {
            return v;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("77078"),
        l = i("366634"),
        r = i("974755"),
        o = i("427459"),
        a = i("379532"),
        u = i("944305"),
        c = i("49111"),
        d = i("782340"),
        f = i("538977");
      function h(e) {
        let { guild: t, banner: i } = e;
        return (0, s.jsx)("div", {
          className: f.guildBanner,
          style: { backgroundImage: "url(".concat(i) },
          children: (0, s.jsxs)("div", {
            className: f.guildHeader,
            children: [
              (0, s.jsx)(r.default, { guild: t, isBannerVisible: !0 }),
              (0, s.jsx)(n.Heading, {
                className: f.guildName,
                variant: "heading-md/semibold",
                children: t.toString(),
              }),
              (0, s.jsx)(l.default, { className: f.dropdown, open: !1 }),
            ],
          }),
        });
      }
      function v(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: i,
            guild: n,
            isGIF: l,
            banner: r,
          } = e,
          f = l
            ? (0, o.minimumRequiredTierForGuildFeature)(
                c.GuildFeatures.ANIMATED_BANNER
              )
            : (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.BANNER);
        null != f &&
          (0, a.default)({
            analyticsLocations: t,
            analyticsSourceLocation: i,
            guild: n,
            headerProps: {
              title: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
              subtitle: (function (e, t) {
                let i = (0, o.getTierName)(e);
                return t
                  ? d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format(
                      { targetLevelOrPlan: i }
                    )
                  : d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format(
                      { targetLevelOrPlan: i }
                    );
              })(f, l),
              image: (0, s.jsx)(h, { guild: n, banner: r }),
            },
            perkIntro: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: l
              ? (0, u.animatedGuildBannerUpsellPerks)()
              : (0, u.guildBannerUpsellPerks)(),
          });
      }
    },
    974755: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return x;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("414456"),
        l = i.n(n),
        r = i("446674"),
        o = i("77078"),
        a = i("51565"),
        u = i("95039"),
        c = i("863921"),
        d = i("26989"),
        f = i("697218"),
        h = i("580357"),
        v = i("40469"),
        p = i("427459"),
        g = i("49111"),
        m = i("782340"),
        C = i("543385");
      function I(e) {
        let { guild: t, isBannerVisible: i, disableBoostClick: n } = e,
          l = (0, r.useStateFromStores)([f.default, d.default], () => {
            let e = f.default.getCurrentUser();
            return d.default.isMember(t.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: a, premiumSubscriberCount: h } = t;
        if (0 === h && a === g.BoostedGuildTiers.NONE) return null;
        let v = e => {
            e.stopPropagation(),
              e.preventDefault(),
              l &&
                !n &&
                (0, u.openGuildBoostingMarketingModal)({
                  guildId: t.id,
                  location: {
                    section: g.AnalyticsSections.GUILD_HEADER,
                    object: g.AnalyticsObjects.BOOST_GEM_ICON,
                  },
                });
          },
          I =
            a === g.BoostedGuildTiers.NONE
              ? m.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : p.getTierName(a),
          N = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", { className: C.tierTooltipTitle, children: I }),
              (0, s.jsx)("div", {
                children:
                  m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: h }
                  ),
              }),
            ],
          });
        return (0, s.jsx)("div", {
          className: C.guildIconContainer,
          children: (0, s.jsx)(o.Tooltip, {
            text: N,
            position: "bottom",
            "aria-label": null != I ? I : "",
            children: e =>
              (0, s.jsx)(o.Clickable, {
                ...e,
                className: C.premiumGuildIcon,
                onClick: v,
                children: (0, s.jsx)(c.default, {
                  premiumTier: a,
                  iconBackgroundClassName: i
                    ? C.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    i && a !== g.BoostedGuildTiers.TIER_3
                      ? C.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function N(e) {
        let { guild: t, disableColor: i, disableBoostClick: n } = e,
          r = (0, a.default)(t);
        return r
          ? (0, s.jsx)("div", {
              className: C.guildIconV2Container,
              children: (0, s.jsx)(v.default, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: o.Tooltip.Colors.PRIMARY,
                className: l(C.guildBadge, { [C.disableColor]: i }),
                disableBoostClick: n,
              }),
            })
          : (0, s.jsx)("div", {
              className: C.guildIconContainer,
              children: (0, s.jsx)(h.default, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: o.Tooltip.Colors.PRIMARY,
                className: l(C.guildBadge, { [C.disableColor]: i }),
              }),
            });
      }
      function x(e) {
        let { guild: t, isBannerVisible: i, disableBoostClick: n } = e,
          l = (0, a.default)(t);
        if (l)
          return (0, s.jsx)(N, {
            guild: t,
            disableColor: !1,
            disableBoostClick: n,
          });
        let r =
          t.hasFeature(g.GuildFeatures.VERIFIED) ||
          t.hasFeature(g.GuildFeatures.PARTNERED);
        return r
          ? (0, s.jsx)(N, { guild: t, disableColor: !i })
          : (0, s.jsx)(I, {
              guild: t,
              isBannerVisible: i,
              disableBoostClick: n,
            });
      }
    },
    507497: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return g;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("446674"),
        l = i("77078"),
        r = i("685665"),
        o = i("836275"),
        a = i("379532"),
        u = i("305961"),
        c = i("162771"),
        d = i("118503"),
        f = i("49111"),
        h = i("944305"),
        v = i("782340"),
        p = i("78935");
      function g(e) {
        let { analyticsSection: t, analyticsPage: i, isGIF: g, banner: m } = e,
          C = (0, n.useStateFromStores)([c.default], () =>
            c.default.getGuildId()
          ),
          I = (0, n.useStateFromStores)([u.default], () =>
            u.default.getGuild(C)
          ),
          { analyticsLocations: N } = (0, r.default)();
        return null == I ||
          I.hasFeature(f.GuildFeatures.ANIMATED_BANNER) ||
          (!g && I.hasFeature(f.GuildFeatures.BANNER))
          ? null
          : (0, s.jsxs)("div", {
              className: p.container,
              children: [
                (0, s.jsx)(d.default, { className: p.guildBoostingIcon }),
                (0, s.jsx)(l.Text, {
                  color: "header-primary",
                  variant: "text-sm/semibold",
                  children: v.default.Messages.PREMIUM_GUILD_PREVIEW,
                }),
                (0, s.jsx)(l.Button, {
                  look: l.Button.Looks.LINK,
                  color: l.Button.Colors.LINK,
                  className: p.subscribeButton,
                  onClick: () => {
                    if (null == I) return;
                    let e = {
                      section: t,
                      page: i,
                      object: f.AnalyticsObjects.UPSELL_HEADER,
                    };
                    null != m
                      ? (0, o.openGuildBannerUpsellModal)({
                          analyticsLocations: N,
                          analyticsLocation: e,
                          guild: I,
                          isGIF: g,
                          banner: m,
                        })
                      : (0, a.default)({
                          analyticsLocations: N,
                          analyticsSourceLocation: e,
                          guild: I,
                          perks: g
                            ? (0, h.animatedGuildBannerUpsellPerks)()
                            : (0, h.guildBannerUpsellPerks)(),
                        });
                  },
                  children: v.default.Messages.PREMIUM_GUILD_BOOST_SERVER,
                }),
              ],
            });
      }
    },
    193867: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return N;
          },
        });
      var s = i("37983"),
        n = i("884691"),
        l = i("446674"),
        r = i("77078"),
        o = i("812204"),
        a = i("685665"),
        u = i("67069"),
        c = i("635956"),
        d = i("697218"),
        f = i("258078"),
        h = i("599110"),
        v = i("719923"),
        p = i("49111"),
        g = i("75015"),
        m = i("646718"),
        C = i("782340"),
        I = i("931720");
      function N(e) {
        let { analyticsSection: t, type: i } = e,
          N = (0, l.useStateFromStores)([d.default], () =>
            d.default.getCurrentUser()
          ),
          x = v.default.canUseAnimatedAvatar(N),
          b = v.default.canUsePremiumProfileCustomization(N),
          E =
            (i === g.UploadTypes.BANNER && b) ||
            (i === g.UploadTypes.AVATAR && x),
          { sourceAnalyticsLocations: _ } = (0, a.default)(
            o.default.PREMIUM_PREVIEW_UPSELL_HEADER
          );
        if (
          (n.useEffect(() => {
            !E &&
              h.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: _,
              });
          }, [E, t, _]),
          E)
        )
          return null;
        let T = (0, s.jsx)(c.default, {
          className: I.getNitroLink,
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.LINK,
          subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
          showIcon: !1,
          premiumModalAnalyticsLocation: {
            section: t,
            object: p.AnalyticsObjects.BUTTON_CTA,
          },
          disableShine: !0,
        });
        return (0, s.jsx)(u.default, {
          reducedRightPadding: !0,
          className: I.nitroPreviewUpsell,
          text: C.default.Messages.PREMIUM_PREVIEW.format(),
          textSize: f.default.Sizes.SIZE_14,
          textColor: f.default.Colors.HEADER_PRIMARY,
          button: T,
        });
      }
    },
    652914: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("507497"),
        l = i("193867"),
        r = i("75015");
      function o(e) {
        let {
          type: t,
          analyticsPage: i,
          analyticsSection: o,
          isGIF: a,
          banner: u,
        } = e;
        return [r.UploadTypes.BANNER, r.UploadTypes.AVATAR].includes(t) && a
          ? (0, s.jsx)(l.default, { analyticsSection: o, type: t })
          : t === r.UploadTypes.GUILD_BANNER
            ? (0, s.jsx)(n.default, {
                analyticsSection: o,
                analyticsPage: i,
                isGIF: a,
                banner: u,
              })
            : null;
      }
    },
    292687: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return s.default;
          },
        });
      var s = i("870346");
    },
    974889: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return r;
          },
        });
      var s = i("773336"),
        n = i("50885"),
        l = i("870346");
      function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = l.default.getWindow(e);
        null != i &&
          !i.closed &&
          (s.isPlatformEmbedded ? n.default.focus(e, t) : i.focus());
      }
    },
    67069: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return c;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("414456"),
        l = i.n(n),
        r = i("791106"),
        o = i("216422"),
        a = i("258078"),
        u = i("916834");
      function c(e) {
        let {
          text: t,
          textSize: i = a.default.Sizes.SIZE_12,
          textColor: n = a.default.Colors.STANDARD,
          className: c,
          button: d,
          reducedRightPadding: f = !1,
        } = e;
        return (0, s.jsxs)("div", {
          className: l(
            f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding,
            c
          ),
          children: [
            (0, s.jsxs)("div", {
              className: u.noticeLeft,
              children: [
                (0, s.jsx)(o.default, {
                  className: u.icon,
                  color: r.GradientCssUrls.PREMIUM_TIER_2,
                }),
                (0, s.jsx)(a.default, {
                  className: u.text,
                  size: i,
                  color: n,
                  children: t,
                }),
              ],
            }),
            d,
          ],
        });
      }
    },
    931138: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return c;
          },
        });
      var s = i("37983"),
        n = i("884691"),
        l = i("414456"),
        r = i.n(l),
        o = i("77078"),
        a = i("760607"),
        u = i("684133");
      function c(e) {
        let {
            children: t,
            size: i = 16,
            className: l,
            flowerStarClassName: c,
            ...d
          } = e,
          f = n.Children.only(t),
          h = (0, o.useRedesignIconContext)().enabled;
        return (0, s.jsxs)("div", {
          className: r(u.flowerStarContainer, l),
          style: { width: i, height: i },
          children: [
            (0, s.jsx)(a.default, { ...d, className: r(c, u.flowerStar) }),
            (0, s.jsx)("div", {
              className: r(u.childContainer, {
                [u.redesignIconChildContainer]: h,
              }),
              children: f,
            }),
          ],
        });
      }
    },
    381546: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("469563"),
        l = i("505088"),
        r = i("75196"),
        o = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: n = "currentColor",
              foreground: l,
              backgroundColor: o,
              ...a
            } = e;
            return (0, s.jsxs)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: i,
              viewBox: "0 0 14 14",
              children: [
                null != o
                  ? (0, s.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: o })
                  : null,
                (0, s.jsx)("path", {
                  fill: n,
                  className: l,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          l.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return l;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("75196"),
        l = function (e) {
          let {
            width: t = 16,
            height: i = 16,
            color: l = "currentColor",
            foreground: r,
            ...o
          } = e;
          return (0, s.jsx)("svg", {
            ...(0, n.default)(o),
            width: t,
            height: i,
            viewBox: "0 0 16 15.2",
            children: (0, s.jsx)("path", {
              className: r,
              fill: l,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    151185: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("469563"),
        l = i("424823"),
        r = i("75196"),
        o = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: n = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(o),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                fill: n,
                className: l,
                d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
              }),
            });
          },
          l.PlusSmallIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("469563"),
        l = i("390300"),
        r = i("75196"),
        o = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: i = 24,
              color: n = "currentColor",
              foreground: l,
              ...o
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(o),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              children: (0, s.jsx)("path", {
                className: l,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          l.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return o;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("469563"),
        l = i("287083"),
        r = i("75196"),
        o = (0, n.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: i = 32,
              color: n = "currentColor",
              ...l
            } = e;
            return (0, s.jsx)("svg", {
              ...(0, r.default)(l),
              width: t,
              height: i,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: n,
              }),
            });
          },
          l.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    506070: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          CircleXIcon: function () {
            return r;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          secondaryColor: r = "transparent",
          secondaryColorClass: o = "",
          color: a = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...c
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, l.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof r ? r : r.css,
              className: o,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: u,
            }),
          ],
        });
      };
    },
    3696: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          HomeIcon: function () {
            return r;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, l.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
            className: o,
          }),
        });
      };
    },
    632874: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          PlusSmallIcon: function () {
            return r;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, l.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
            className: o,
          }),
        });
      };
    },
    618807: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          StageIcon: function () {
            return r;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, l.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: o,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: o,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: o,
            }),
          ],
        });
      };
    },
    882039: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VoiceNormalIcon: function () {
            return r;
          },
        });
      var s = i("37983");
      i("884691");
      var n = i("669491"),
        l = i("82169");
      let r = e => {
        let {
          width: t = 24,
          height: i = 24,
          color: r = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, l.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: o,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: o,
            }),
          ],
        });
      };
    },
    157590: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VisibilityObserver: function () {
            return r;
          },
        }),
        i("222007");
      var s = i("817736"),
        n = i("118810");
      let l = { root: null, rootMargin: "0px", threshold: 0.5 };
      class r {
        isVisible(e) {
          return null == this._observer || this._visibleComponents.has(e);
        }
        observe(e) {
          let t = this._observer;
          if (null == t) return;
          this.unobserve(e);
          let i = (0, s.findDOMNode)(e);
          (0, n.isElement)(i, HTMLElement) &&
            (this._nodes.set(i, e), this._components.set(e, i), t.observe(i));
        }
        unobserve(e) {
          let t = this._observer;
          if (null == t) return;
          let i = this._components.get(e);
          null != i &&
            (this._nodes.delete(i),
            this._components.delete(e),
            this._visibleComponents.delete(e),
            t.unobserve(i));
        }
        constructor(e = l) {
          (this._nodes = new WeakMap()),
            (this._components = new WeakMap()),
            (this._visibleComponents = new WeakSet()),
            (this._handleEntries = e => {
              e.forEach(e => {
                let t;
                if (null != e.isIntersecting) t = e.isIntersecting;
                else {
                  let { threshold: i } = this._options;
                  t =
                    null == i
                      ? e.intersectionRatio > 0
                      : Array.isArray(i)
                        ? i.some(t => e.intersectionRatio > t)
                        : e.intersectionRatio > i;
                }
                let i = this._nodes.get(e.target);
                if (null != i) {
                  let e = !1;
                  t
                    ? !this._visibleComponents.has(i) &&
                      (this._visibleComponents.add(i), (e = !0))
                    : this._visibleComponents.has(i) &&
                      (this._visibleComponents.delete(i), (e = !0)),
                    e && i.forceUpdate();
                }
              });
            }),
            (this._options = e),
            null != window.IntersectionObserver &&
              (this._observer = new window.IntersectionObserver(
                this._handleEntries,
                e
              ));
        }
      }
    },
    235855: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VisibilitySensor: function () {
            return u;
          },
        }),
        i("222007"),
        i("70102");
      var s = i("884691"),
        n = i("748820"),
        l = i("157590");
      let r = (0, n.v4)(),
        o = new Map(),
        a = new Map();
      class u extends s.Component {
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            i = t.isVisible(this);
          this.props.active && i !== this.isVisible && this.props.onChange(i),
            !e.active && this.props.active
              ? t.observe(this)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = i);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return "".concat(this.elementId, " ").concat(e, " ").concat(t);
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = a.get(e);
          if (!t)
            throw Error("Visibility sensor with id ".concat(e, " not found."));
          return t;
        }
        render() {
          return s.Children.only(this.props.children);
        }
        constructor(e) {
          super(e), (this.isVisible = !1);
          let { root: t, rootMargin: i, threshold: s } = e;
          t
            ? o.has(t)
              ? (this.elementId = o.get(t) || "")
              : o.set(t, (0, n.v4)())
            : (this.elementId = r);
          let u = this.getVisibilityObserverId();
          !a.has(u) &&
            a.set(
              u,
              new l.VisibilityObserver({ root: t, rootMargin: i, threshold: s })
            );
        }
      }
      u.defaultProps = {
        active: !0,
        children: s.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE],
      };
    },
    290381: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          VisibilityObserver: function () {
            return s.VisibilityObserver;
          },
          VisibilitySensor: function () {
            return n.VisibilitySensor;
          },
        }),
        i("6268");
      var s = i("157590"),
        n = i("235855");
    },
  },
]);
//# sourceMappingURL=61e3be906eeca077b02a.js.map

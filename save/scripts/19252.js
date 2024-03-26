(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19252"],
  {
    482500: function (e, t, r) {
      "use strict";
      e.exports = r.p + "ca941f4d08cfb641e3f8.jpg";
    },
    818127: function (e, t, r) {
      "use strict";
      e.exports = r.p + "83dc5aeaa37c361f7721.jpg";
    },
    530514: function (e, t, r) {
      "use strict";
      e.exports = r.p + "bd9de058e9a42d99d512.jpg";
    },
    162332: function (e, t, r) {
      "use strict";
      e.exports = r.p + "335ca339550d5be86785.jpg";
    },
    776204: function (e, t, r) {
      "use strict";
      e.exports = r.p + "2e795294945a9f6e2eaf.jpg";
    },
    266772: function (e, t, r) {
      "use strict";
      e.exports = r.p + "29894d1856711771a15a.jpg";
    },
    489847: function (e, t, r) {
      "use strict";
      e.exports = r.p + "ab3468632852f3725893.png";
    },
    330825: function (e, t, r) {
      "use strict";
      e.exports = r.p + "79903b7cc64eb6d55aa8.png";
    },
    165057: function (e, t, r) {
      "use strict";
      e.exports = r.p + "50eb2aa99e75c1b8630a.png";
    },
    94646: function (e, t, r) {
      "use strict";
      e.exports = r.p + "c5c556a5e9be016ffb2d.png";
    },
    286642: function (e, t, r) {
      "use strict";
      e.exports = r.p + "a3edb1330403965aa3f6.png";
    },
    655029: function (e, t, r) {
      "use strict";
      e.exports = r.p + "6fac2c0e5ed90d06b3b9.png";
    },
    740683: function (e, t, r) {
      "use strict";
      e.exports = r.p + "7b9383fd24920a3a95b7.png";
    },
    714293: function (e, t, r) {
      "use strict";
      e.exports = r.p + "295744c4b4e7cb95b539.png";
    },
    861485: function (e, t, r) {
      "use strict";
      e.exports = r.p + "16abeb1745235d8aea66.png";
    },
    424869: function (e, t, r) {
      "use strict";
      e.exports = r.p + "f1c62ecb6594a7168ae2.png";
    },
    638538: function (e, t, r) {
      "use strict";
      e.exports = r.p + "ac20c9a7b69e25e9d680.png";
    },
    125221: function (e, t, r) {
      "use strict";
      e.exports = r.p + "8ffd6f59392e09ba0fe4.png";
    },
    770704: function (e, t, r) {
      "use strict";
      e.exports = r.p + "81aef01431a5e1293160.png";
    },
    597704: function (e, t, r) {
      "use strict";
      e.exports = r.p + "7bb17dc88ff31be285a8.png";
    },
    290216: function (e, t, r) {
      "use strict";
      e.exports = r.p + "1616ba0a324e68a4fff7.png";
    },
    546483: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        }),
        r("222007");
      var a = r("656280"),
        n = r.n(a),
        o = r("65597"),
        l = r("206230"),
        s = r("388491");
      let i = (e, t) => {
          let r = e.toRgb(),
            a = t.toRgb(),
            [o, l, i] = (0, s.getValueInColorGradientByPercentage)(
              [r.r, r.g, r.b],
              [a.r, a.g, a.b],
              50
            );
          return n({ r: o, g: l, b: i });
        },
        c = (e, t) => {
          if (0 !== t.length)
            return 1 === t.length
              ? {
                  primary: t[0],
                  secondary: t[0],
                  border: t[0].setAlpha(0.4),
                  label: t[0].isLight() ? e.dark : e.light,
                }
              : {
                  primary: t[0],
                  secondary: t[1],
                  border: i(t[0], t[1]).setAlpha(0.4),
                  label: i(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        u = (e, t) => {
          if (0 !== t.length)
            return 1 === t.length
              ? {
                  primary: t[0],
                  secondary: t[0],
                  text: t[0].isLight() ? e.dark : e.light,
                }
              : {
                  primary: t[0],
                  secondary: t[1],
                  text: i(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        d = (e, t) => {
          let { h: r, s: a, l: o } = e.toHsl();
          return n({ h: r, s: a * t, l: o });
        };
      var f = e => t => {
        let r = (0, o.useStateFromStores)(
          [l.default],
          () => l.default.saturation
        );
        if (null == t) return {};
        let a = {
          backgroundColors: c(e, t.backgroundColors),
          buttonColors: u(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === r
          ? {
              ...a,
              isDarkText: !!(
                null != a.backgroundColors &&
                a.backgroundColors.secondary.isLight()
              ),
            }
          : {
              backgroundColors:
                null != a.backgroundColors
                  ? {
                      primary: d(a.backgroundColors.primary, r),
                      secondary: d(a.backgroundColors.secondary, r),
                      border: d(a.backgroundColors.border, r),
                      label: d(a.backgroundColors.label, r),
                    }
                  : void 0,
              buttonColors:
                null != a.buttonColors
                  ? {
                      primary: d(a.buttonColors.primary, r),
                      secondary: d(a.buttonColors.secondary, r),
                      text: d(a.buttonColors.text, r),
                    }
                  : void 0,
              confettiColors: a.confettiColors.map(e => d(e, r)),
              isDarkText: !!(
                null != a.backgroundColors &&
                a.backgroundColors.secondary.isLight()
              ),
            };
      };
    },
    677257: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var a = r("656280"),
        n = r.n(a),
        o = r("669491"),
        l = r("546483");
      let s = n(
          o.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        i = n(
          o.default.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex()
        ),
        c = (0, l.default)({ dark: i, light: s });
      var u = c;
    },
    923702: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        }),
        r("222007");
      var a = r("37983"),
        n = r("884691"),
        o = r("516555"),
        l = r("172858"),
        s = function (e) {
          let {
              confettiTarget: t,
              confettiCanvas: r,
              confettiVelocityMultiplier: s,
              sprites: i,
              colors: c,
            } = e,
            [u, d] = n.useState(null),
            f = (0, o.useConfettiCannon)(r, u),
            [g, C] = n.useState(!1);
          return (
            n.useEffect(() => {
              let e = Array(10).fill(0);
              return (
                null != t &&
                  f.isReady &&
                  !g &&
                  (e = e.map((r, a) =>
                    setTimeout(() => {
                      var r, n;
                      a === e.length - 1 && C(!0),
                        f.createMultipleConfetti(
                          ((r = t.getBoundingClientRect()),
                          (n = null != (n = s) ? n : 1),
                          {
                            ...l.COMMON_CONFETTI_BASE_CONFIG,
                            position: {
                              type: "static-random",
                              minValue: { x: r.x, y: r.y },
                              maxValue: {
                                x: r.x + r.width,
                                y: r.y + r.height / 2,
                              },
                            },
                            velocity: {
                              type: "static-random",
                              minValue: { x: -100 * n, y: -50 * n },
                              maxValue: { x: 100 * n, y: -300 * n },
                            },
                            dragCoefficient: { type: "static", value: 1e-4 },
                          }),
                          50
                        );
                    }, 100 * a)
                  )),
                () => {
                  for (let t of e) clearTimeout(t);
                }
              );
            }, [f, t, g, s]),
            (0, a.jsx)(o.SpriteCanvas, {
              ref: d,
              sprites: null != i ? i : l.COMMON_CONFETTI_SPRITES,
              colors: null != c ? c : l.COMMON_CONFETTI_COLORS,
              spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
              spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
            })
          );
        };
    },
    716120: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var a = r("37983");
      r("884691");
      var n = r("414456"),
        o = r.n(n),
        l = r("65597"),
        s = r("854588"),
        i = r("206230"),
        c = r("284679"),
        u = r("491232"),
        d = r("408381"),
        f = r("467618"),
        g = e => {
          let {
              asset: t,
              assetUrlOverride: r,
              size: n = d.MAX_CONTENT_WIDTH,
              addGradient: g = !0,
              className: C,
              style: p,
              children: b,
            } = e,
            v = (0, l.useStateFromStores)(
              [i.default],
              () => i.default.saturation
            );
          return (0, a.jsx)("div", {
            className: o(f.banner, C),
            style: (() => {
              if (null == t) return p;
              if (1 === v)
                return null != r
                  ? {
                      ...p,
                      backgroundImage: g
                        ? "url(".concat(
                            r,
                            "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)"
                          )
                        : "url(".concat(r, ")"),
                      backgroundBlendMode: "multiply",
                      backgroundSize: "cover",
                    }
                  : {
                      ...p,
                      backgroundImage: "url(".concat(
                        (0, u.getCollectiblesAssetURL)(t, {
                          size: n,
                          format: "jpg",
                        }),
                        ")"
                      ),
                      backgroundSize: "cover",
                    };
              let e = (0, c.hexOpacityToRgba)(
                s.default.unsafe_rawColors.BLACK_500,
                1 - v
              );
              return {
                ...p,
                backgroundImage: "linear-gradient("
                  .concat(e, ", ")
                  .concat(e, "), url(")
                  .concat(
                    (0, u.getCollectiblesAssetURL)(t, {
                      size: n,
                      format: "jpg",
                    }),
                    ")"
                  ),
                backgroundBlendMode: "saturation",
                backgroundSize: "cover",
              };
            })(),
            children: b,
          });
        };
    },
    658756: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          CollectiblesCollectedModalInner: function () {
            return A;
          },
          default: function () {
            return M;
          },
        }),
        r("222007");
      var a = r("37983"),
        n = r("884691"),
        o = r("414456"),
        l = r.n(o),
        s = r("516555"),
        i = r("627445"),
        c = r.n(i),
        u = r("265586"),
        d = r("65597"),
        f = r("77078"),
        g = r("54239"),
        C = r("206230"),
        p = r("812204"),
        b = r("685665"),
        v = r("606292"),
        y = r("688318"),
        S = r("38766"),
        m = r("601095"),
        E = r("493390"),
        x = r("697218"),
        T = r("677257"),
        I = r("923702"),
        h = r("716120"),
        O = r("408381"),
        k = r("380171"),
        N = r("782340"),
        _ = r("580864"),
        L = r("53708");
      let A = e => {
        var t, r;
        let {
            product: o,
            onClose: s,
            confettiTarget: i,
            confettiCanvas: A,
            analyticsLocations: M,
          } = e,
          {
            confettiColors: R,
            backgroundColors: j,
            buttonColors: B,
            isDarkText: F,
          } = (0, T.default)(o.styles),
          D = !0 === F ? _.darkText : _.lightText,
          w =
            null != B
              ? {
                  background: (0, O.getBackgroundGradient)(B, 90),
                  color: B.text.toHslString(),
                }
              : void 0,
          H =
            null != j
              ? { background: (0, O.getBackgroundGradient)(j, 135) }
              : { backgroundColor: "var(--modal-background)" },
          P = (0, d.useStateFromStores)([x.default], () => {
            let e = x.default.getCurrentUser();
            return c(null != e, "User cannot be undefined"), e;
          }),
          U = (0, d.useStateFromStores)(
            [C.default],
            () => C.default.useReducedMotion
          ),
          [z] = o.items,
          { avatarDecorationSrc: G } = (0, y.default)({
            user: P,
            avatarDecorationOverride:
              (null == z ? void 0 : z.type) ===
              u.CollectiblesItemType.AVATAR_DECORATION
                ? z
                : null,
            size: (0, v.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120),
          }),
          V = n.useRef(null),
          { analyticsLocations: W } = (0, b.default)([
            ...M,
            p.default.COLLECTIBLES_COLLECTED_MODAL,
          ]),
          Y = (0, S.default)({ analyticsLocations: W });
        return (0, a.jsxs)(b.AnalyticsLocationProvider, {
          value: W,
          children: [
            (0, a.jsxs)("div", {
              className: _.modalInner,
              ref: V,
              style: H,
              children: [
                (0, a.jsxs)("div", {
                  className: l(_.bannerContainer, {
                    [_.bannerBackgroundFallback]: null == j,
                  }),
                  children: [
                    (0, a.jsx)(h.default, {
                      assetUrlOverride:
                        null ===
                          (t = k.categoryBannerOverrides[o.categorySkuId]) ||
                        void 0 === t
                          ? void 0
                          : t.assetUrlOverride,
                      asset: o.banner,
                      addGradient:
                        null ===
                          (r = k.categoryBannerOverrides[o.categorySkuId]) ||
                        void 0 === r
                          ? void 0
                          : r.addGradient,
                      size: (0, O.getAssetSizeByHeight)(440),
                      className: _.decorationBanner,
                    }),
                    (null == z ? void 0 : z.type) ===
                      u.CollectiblesItemType.AVATAR_DECORATION &&
                      (0, a.jsx)(f.Avatar, {
                        size: f.AvatarSizes.SIZE_120,
                        src: L,
                        avatarDecoration: G,
                        className: _.avatarDecoration,
                        "aria-label": o.name,
                      }),
                    (null == z ? void 0 : z.type) ===
                      u.CollectiblesItemType.PROFILE_EFFECT &&
                      (0, a.jsx)("div", {
                        className: _.profileEffectShopPreview,
                        children: (0, a.jsx)(m.default, {
                          forCollectedModal: !0,
                          profileEffectId: z.id,
                        }),
                      }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: l(_.collectedInfoContainer, {
                    [_.default]: null == j,
                  }),
                  children: [
                    (0, a.jsxs)("div", {
                      className: _.collectedTextContainer,
                      children: [
                        (0, a.jsx)(f.Heading, {
                          variant: "heading-lg/bold",
                          className: D,
                          children:
                            N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format(
                              { itemName: o.name }
                            ),
                        }),
                        (0, a.jsx)(f.Text, {
                          variant: "text-sm/normal",
                          className: D,
                          children:
                            (null == z ? void 0 : z.type) ===
                            u.CollectiblesItemType.PROFILE_EFFECT
                              ? N.default.Messages
                                  .COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION
                              : N.default.Messages
                                  .COLLECTIBLES_PERMANENT_COLLECTION,
                        }),
                      ],
                    }),
                    (0, a.jsx)(f.Button, {
                      onClick: () => {
                        if (
                          (s(),
                          (0, g.popLayer)(),
                          Y(),
                          (null == z ? void 0 : z.type) ===
                            u.CollectiblesItemType.AVATAR_DECORATION)
                        ) {
                          (0, v.openAvatarDecorationModal)({
                            initialSelectedDecoration: z,
                            analyticsLocations: W,
                          });
                          return;
                        }
                        (null == z ? void 0 : z.type) ===
                          u.CollectiblesItemType.PROFILE_EFFECT &&
                          (0, E.openProfileEffectModal)({
                            initialSelectedEffectId: z.id,
                            analyticsLocations: W,
                          });
                      },
                      style: w,
                      children: N.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                  ],
                }),
                (0, a.jsx)(f.ModalCloseButton, {
                  onClick: s,
                  className: _.modalCloseButton,
                  withCircleBackground: !0,
                }),
              ],
            }),
            !U &&
              (0, a.jsx)(I.default, {
                confettiTarget: null != i ? i : V.current,
                confettiCanvas: A,
                sprites: (0, O.getConfettiSprites)(o.categorySkuId),
                colors: null == R ? void 0 : R.map(e => e.toHexString()),
              }),
          ],
        });
      };
      var M = e => {
        let {
            transitionState: t,
            product: r,
            onClose: o,
            analyticsLocations: l,
          } = e,
          i = n.useRef(new s.Environment()),
          [c, u] = n.useState(null);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.ConfettiCanvas, {
              ref: u,
              className: _.confettiCanvas,
              environment: i.current,
            }),
            (0, a.jsx)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: t,
              size: f.ModalSize.DYNAMIC,
              className: _.modalRoot,
              children: (0, a.jsx)(f.ModalContent, {
                className: _.modalContent,
                children: (0, a.jsx)(A, {
                  product: r,
                  onClose: o,
                  confettiCanvas: c,
                  analyticsLocations: l,
                }),
              }),
            }),
          ],
        });
      };
    },
    380171: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          categoryBannerOverrides: function () {
            return n;
          },
        });
      var a = r("635058");
      let n = {
        [a.CollectiblesCategorySkuId.SPRINGTOONS]: {
          assetUrlOverride: r("266772"),
          logoMaxWidth: "48%",
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [a.CollectiblesCategorySkuId.ANIME_V2]: {
          assetUrlOverride: r("482500"),
          addGradient: !1,
          showDarkBannerText: !0,
        },
        [a.CollectiblesCategorySkuId.ELEMENTS]: {
          assetUrlOverride: r("530514"),
          addGradient: !0,
        },
        [a.CollectiblesCategorySkuId.LUNAR_NEW_YEAR]: {
          assetUrlOverride: r("162332"),
          addGradient: !0,
        },
        [a.CollectiblesCategorySkuId.CYBERPUNK]: {
          assetUrlOverride: r("818127"),
          addGradient: !0,
        },
        [a.CollectiblesCategorySkuId.SHY]: {
          assetUrlOverride: r("776204"),
          addGradient: !0,
        },
      };
    },
    408381: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          MAX_CONTENT_WIDTH: function () {
            return o;
          },
          getAssetSizeByHeight: function () {
            return l;
          },
          getBackgroundGradient: function () {
            return s;
          },
          getConfettiSprites: function () {
            return u;
          },
        });
      var a = r("635058"),
        n = r("547630");
      let o = 1060,
        l = e => e * (0, n.default)(),
        s = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: r, secondary: a } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(r.toHslString(), ", ")
            .concat(a.toHslString(), ")");
        },
        i = [r("424869"), r("714293")],
        c = {
          ["".concat(a.CollectiblesCategorySkuId.FANTASY)]: [
            r("655029"),
            r("290216"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.ANIME)]: [
            r("597704"),
            r("714293"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.BREAKFAST)]: [
            r("286642"),
            r("94646"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.HALLOWEEN)]: [
            r("638538"),
            r("861485"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.FALL)]: [
            r("740683"),
            r("489847"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.WINTER)]: [
            r("770704"),
            r("165057"),
          ],
          ["".concat(a.CollectiblesCategorySkuId.MONSTERS)]: [
            r("330825"),
            r("125221"),
          ],
        },
        u = e => {
          var t;
          return null == e ? i : null !== (t = c[e]) && void 0 !== t ? t : i;
        };
    },
    601095: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return d;
          },
        }),
        r("222007");
      var a = r("37983"),
        n = r("884691"),
        o = r("414456"),
        l = r.n(o),
        s = r("859498"),
        i = r("635471"),
        c = r("126746"),
        u = r("93902"),
        d = e => {
          let {
              profileEffectId: t,
              isHovering: r,
              forCollectedModal: o = !1,
              isPurchased: d,
              removeSetHeight: f = !1,
            } = e,
            g = o ? 250 : 0.1,
            [C, p] = n.useState(!0);
          return (n.useEffect(() => {
            if (!0 !== o) p(!1);
            else {
              let e = setTimeout(() => {
                p(!1);
              }, g);
              return () => {
                clearTimeout(e);
              };
            }
          }, [g, o]),
          null != t)
            ? (0, a.jsxs)("div", {
                className: l(c.previewContainer, {
                  [c.previewContainerAnimation]: o,
                  [c.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, a.jsx)("img", {
                    src: u,
                    alt: " ",
                    className: o ? c.previewForCollected : c.preview,
                    "aria-hidden": !0,
                  }),
                  !C &&
                    (0, a.jsx)("div", {
                      className: d ? c.purchasedEffect : void 0,
                      children: (0, a.jsx)(i.default, {
                        profileEffectId: t,
                        useThumbnail: !0,
                        autoPlay: o,
                        restartMethod: s.RestartMethod.FromStart,
                        resetOnHover: !0,
                        isHovering: r,
                        introDelay: g,
                        useOpacityOnHover: !1,
                        shopPreview: !0,
                      }),
                    }),
                ],
              })
            : null;
        };
    },
  },
]);
//# sourceMappingURL=62fb2e8fec8711c2cea4.js.map

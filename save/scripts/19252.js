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
      var n = r("656280"),
        a = r.n(n),
        o = r("65597"),
        l = r("206230"),
        i = r("388491");
      let s = (e, t) => {
          let r = e.toRgb(),
            n = t.toRgb(),
            [o, l, s] = (0, i.getValueInColorGradientByPercentage)(
              [r.r, r.g, r.b],
              [n.r, n.g, n.b],
              50
            );
          return a({ r: o, g: l, b: s });
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
                  border: s(t[0], t[1]).setAlpha(0.4),
                  label: s(t[0], t[1]).isLight() ? e.dark : e.light,
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
                  text: s(t[0], t[1]).isLight() ? e.dark : e.light,
                };
        },
        d = (e, t) => {
          let { h: r, s: n, l: o } = e.toHsl();
          return a({ h: r, s: n * t, l: o });
        };
      var f = e => t => {
        let r = (0, o.default)([l.default], () => l.default.saturation);
        if (null == t) return {};
        let n = {
          backgroundColors: c(e, t.backgroundColors),
          buttonColors: u(e, t.buttonColors),
          confettiColors: t.confettiColors,
        };
        return 1 === r
          ? {
              ...n,
              isDarkText: !!(
                null != n.backgroundColors &&
                n.backgroundColors.secondary.isLight()
              ),
            }
          : {
              backgroundColors:
                null != n.backgroundColors
                  ? {
                      primary: d(n.backgroundColors.primary, r),
                      secondary: d(n.backgroundColors.secondary, r),
                      border: d(n.backgroundColors.border, r),
                      label: d(n.backgroundColors.label, r),
                    }
                  : void 0,
              buttonColors:
                null != n.buttonColors
                  ? {
                      primary: d(n.buttonColors.primary, r),
                      secondary: d(n.buttonColors.secondary, r),
                      text: d(n.buttonColors.text, r),
                    }
                  : void 0,
              confettiColors: n.confettiColors.map(e => d(e, r)),
              isDarkText: !!(
                null != n.backgroundColors &&
                n.backgroundColors.secondary.isLight()
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
      var n = r("656280"),
        a = r.n(n),
        o = r("669491"),
        l = r("546483");
      let i = a(
          o.default.unsafe_rawColors.WHITE_500.resolve({ saturation: 1 }).hex()
        ),
        s = a(
          o.default.unsafe_rawColors.BLACK_500.resolve({ saturation: 1 }).hex()
        ),
        c = (0, l.default)({ dark: s, light: i });
      var u = c;
    },
    923702: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        }),
        r("222007");
      var n = r("37983"),
        a = r("884691"),
        o = r("516555"),
        l = r("172858"),
        i = function (e) {
          let {
              confettiTarget: t,
              confettiCanvas: r,
              confettiVelocityMultiplier: i,
              sprites: s,
              colors: c,
            } = e,
            [u, d] = a.useState(null),
            f = (0, o.useConfettiCannon)(r, u),
            [g, C] = a.useState(!1);
          return (
            a.useEffect(() => {
              let e = Array(10).fill(0);
              return (
                null != t &&
                  f.isReady &&
                  !g &&
                  (e = e.map((r, n) =>
                    setTimeout(() => {
                      var r, a;
                      n === e.length - 1 && C(!0),
                        f.createMultipleConfetti(
                          ((r = t.getBoundingClientRect()),
                          (a = null != (a = i) ? a : 1),
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
                              minValue: { x: -100 * a, y: -50 * a },
                              maxValue: { x: 100 * a, y: -300 * a },
                            },
                            dragCoefficient: { type: "static", value: 1e-4 },
                          }),
                          50
                        );
                    }, 100 * n)
                  )),
                () => {
                  for (let t of e) clearTimeout(t);
                }
              );
            }, [f, t, g, i]),
            (0, n.jsx)(o.SpriteCanvas, {
              ref: d,
              sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
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
      var n = r("37983");
      r("884691");
      var a = r("414456"),
        o = r.n(a),
        l = r("65597"),
        i = r("854588"),
        s = r("206230"),
        c = r("284679"),
        u = r("491232"),
        d = r("408381"),
        f = r("467618"),
        g = e => {
          let {
              asset: t,
              assetUrlOverride: r,
              size: a = d.MAX_CONTENT_WIDTH,
              addGradient: g = !0,
              className: C,
              style: p,
              children: b,
            } = e,
            v = (0, l.default)([s.default], () => s.default.saturation);
          return (0, n.jsx)("div", {
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
                          size: a,
                          format: "jpg",
                        }),
                        ")"
                      ),
                      backgroundSize: "cover",
                    };
              let e = (0, c.hexOpacityToRgba)(
                i.default.unsafe_rawColors.BLACK_500,
                1 - v
              );
              return {
                ...p,
                backgroundImage: "linear-gradient("
                  .concat(e, ", ")
                  .concat(e, "), url(")
                  .concat(
                    (0, u.getCollectiblesAssetURL)(t, {
                      size: a,
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
      var n = r("37983"),
        a = r("884691"),
        o = r("414456"),
        l = r.n(o),
        i = r("516555"),
        s = r("627445"),
        c = r.n(s),
        u = r("265586"),
        d = r("65597"),
        f = r("77078"),
        g = r("54239"),
        C = r("206230"),
        p = r("812204"),
        b = r("685665"),
        v = r("606292"),
        y = r("688318"),
        E = r("38766"),
        m = r("601095"),
        x = r("493390"),
        T = r("697218"),
        I = r("677257"),
        S = r("923702"),
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
            onClose: i,
            confettiTarget: s,
            confettiCanvas: A,
            analyticsLocations: M,
          } = e,
          {
            confettiColors: R,
            backgroundColors: j,
            buttonColors: B,
            isDarkText: F,
          } = (0, I.default)(o.styles),
          D = !0 === F ? _.darkText : _.lightText,
          H =
            null != B
              ? {
                  background: (0, O.getBackgroundGradient)(B, 90),
                  color: B.text.toHslString(),
                }
              : void 0,
          w =
            null != j
              ? { background: (0, O.getBackgroundGradient)(j, 135) }
              : { backgroundColor: "var(--modal-background)" },
          P = (0, d.default)([T.default], () => {
            let e = T.default.getCurrentUser();
            return c(null != e, "User cannot be undefined"), e;
          }),
          z = (0, d.default)([C.default], () => C.default.useReducedMotion),
          [U] = o.items,
          { avatarDecorationSrc: G } = (0, y.default)({
            user: P,
            avatarDecorationOverride:
              (null == U ? void 0 : U.type) ===
              u.CollectiblesItemType.AVATAR_DECORATION
                ? U
                : null,
            size: (0, v.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120),
          }),
          V = a.useRef(null),
          { analyticsLocations: W, AnalyticsLocationProvider: Y } = (0,
          b.default)([...M, p.default.COLLECTIBLES_COLLECTED_MODAL]),
          K = (0, E.default)({ analyticsLocations: W });
        return (0, n.jsxs)(Y, {
          children: [
            (0, n.jsxs)("div", {
              className: _.modalInner,
              ref: V,
              style: w,
              children: [
                (0, n.jsxs)("div", {
                  className: l(_.bannerContainer, {
                    [_.bannerBackgroundFallback]: null == j,
                  }),
                  children: [
                    (0, n.jsx)(h.default, {
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
                    (null == U ? void 0 : U.type) ===
                      u.CollectiblesItemType.AVATAR_DECORATION &&
                      (0, n.jsx)(f.Avatar, {
                        size: f.AvatarSizes.SIZE_120,
                        src: L,
                        avatarDecoration: G,
                        className: _.avatarDecoration,
                        "aria-label": o.name,
                      }),
                    (null == U ? void 0 : U.type) ===
                      u.CollectiblesItemType.PROFILE_EFFECT &&
                      (0, n.jsx)("div", {
                        className: _.profileEffectShopPreview,
                        children: (0, n.jsx)(m.default, {
                          forCollectedModal: !0,
                          profileEffectId: U.id,
                        }),
                      }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: l(_.collectedInfoContainer, {
                    [_.default]: null == j,
                  }),
                  children: [
                    (0, n.jsxs)("div", {
                      className: _.collectedTextContainer,
                      children: [
                        (0, n.jsx)(f.Heading, {
                          variant: "heading-lg/bold",
                          className: D,
                          children:
                            N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format(
                              { itemName: o.name }
                            ),
                        }),
                        (0, n.jsx)(f.Text, {
                          variant: "text-sm/normal",
                          className: D,
                          children:
                            (null == U ? void 0 : U.type) ===
                            u.CollectiblesItemType.PROFILE_EFFECT
                              ? N.default.Messages
                                  .COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION
                              : N.default.Messages
                                  .COLLECTIBLES_PERMANENT_COLLECTION,
                        }),
                      ],
                    }),
                    (0, n.jsx)(f.Button, {
                      onClick: () => {
                        if (
                          (i(),
                          (0, g.popLayer)(),
                          K(),
                          (null == U ? void 0 : U.type) ===
                            u.CollectiblesItemType.AVATAR_DECORATION)
                        ) {
                          (0, v.openAvatarDecorationModal)({
                            initialSelectedDecoration: U,
                            analyticsLocations: W,
                          });
                          return;
                        }
                        (null == U ? void 0 : U.type) ===
                          u.CollectiblesItemType.PROFILE_EFFECT &&
                          (0, x.openProfileEffectModal)({
                            initialSelectedEffectId: U.id,
                            analyticsLocations: W,
                          });
                      },
                      style: H,
                      children: N.default.Messages.COLLECTIBLES_USE_NOW,
                    }),
                  ],
                }),
                (0, n.jsx)(f.ModalCloseButton, {
                  onClick: i,
                  className: _.modalCloseButton,
                  withCircleBackground: !0,
                }),
              ],
            }),
            !z &&
              (0, n.jsx)(S.default, {
                confettiTarget: null != s ? s : V.current,
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
          s = a.useRef(new i.Environment()),
          [c, u] = a.useState(null);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.ConfettiCanvas, {
              ref: u,
              className: _.confettiCanvas,
              environment: s.current,
            }),
            (0, n.jsx)(f.ModalRoot, {
              hideShadow: !0,
              transitionState: t,
              size: f.ModalSize.DYNAMIC,
              className: _.modalRoot,
              children: (0, n.jsx)(f.ModalContent, {
                className: _.modalContent,
                children: (0, n.jsx)(A, {
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
            return a;
          },
        });
      var n = r("635058");
      let a = {
        [n.CollectiblesCategorySkuId.ANIME_V2]: {
          assetUrlOverride: r("482500"),
          addGradient: !1,
        },
        [n.CollectiblesCategorySkuId.ELEMENTS]: {
          assetUrlOverride: r("530514"),
          addGradient: !0,
        },
        [n.CollectiblesCategorySkuId.LUNAR_NEW_YEAR]: {
          assetUrlOverride: r("162332"),
          addGradient: !0,
        },
        [n.CollectiblesCategorySkuId.CYBERPUNK]: {
          assetUrlOverride: r("818127"),
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
            return i;
          },
          getConfettiSprites: function () {
            return u;
          },
        });
      var n = r("635058"),
        a = r("547630");
      let o = 1060,
        l = e => e * (0, a.default)(),
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 180,
            { primary: r, secondary: n } = e;
          return "linear-gradient("
            .concat(t, "deg, ")
            .concat(r.toHslString(), ", ")
            .concat(n.toHslString(), ")");
        },
        s = [r("424869"), r("714293")],
        c = {
          ["".concat(n.CollectiblesCategorySkuId.FANTASY)]: [
            r("655029"),
            r("290216"),
          ],
          ["".concat(n.CollectiblesCategorySkuId.ANIME)]: [
            r("597704"),
            r("714293"),
          ],
          ["".concat(n.CollectiblesCategorySkuId.BREAKFAST)]: [
            r("286642"),
            r("94646"),
          ],
          ["".concat(n.CollectiblesCategorySkuId.HALLOWEEN)]: [
            r("638538"),
            r("861485"),
          ],
          ["".concat(n.CollectiblesCategorySkuId.FALL)]: [
            r("740683"),
            r("489847"),
          ],
          ["".concat(n.CollectiblesCategorySkuId.WINTER)]: [
            r("770704"),
            r("165057"),
          ],
          ["".concat(n.CollectiblesCategorySkuId.MONSTERS)]: [
            r("330825"),
            r("125221"),
          ],
        },
        u = e => {
          var t;
          return null == e ? s : null !== (t = c[e]) && void 0 !== t ? t : s;
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
      var n = r("37983"),
        a = r("884691"),
        o = r("414456"),
        l = r.n(o),
        i = r("859498"),
        s = r("635471"),
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
            [C, p] = a.useState(!0);
          return (a.useEffect(() => {
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
            ? (0, n.jsxs)("div", {
                className: l(c.previewContainer, {
                  [c.previewContainerAnimation]: o,
                  [c.previewContainerSetHeight]: !f,
                }),
                children: [
                  (0, n.jsx)("img", {
                    src: u,
                    alt: " ",
                    className: o ? c.previewForCollected : c.preview,
                    "aria-hidden": !0,
                  }),
                  !C &&
                    (0, n.jsx)("div", {
                      className: d ? c.purchasedEffect : void 0,
                      children: (0, n.jsx)(s.default, {
                        profileEffectId: t,
                        useThumbnail: !0,
                        autoPlay: o,
                        restartMethod: i.RestartMethod.FromStart,
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
//# sourceMappingURL=23674b64e38ea8f87180.js.map

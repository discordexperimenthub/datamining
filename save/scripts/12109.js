(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12109"],
  {
    482500: function (e, t, l) {
      "use strict";
      e.exports = l.p + "ca941f4d08cfb641e3f8.jpg";
    },
    818127: function (e, t, l) {
      "use strict";
      e.exports = l.p + "83dc5aeaa37c361f7721.jpg";
    },
    530514: function (e, t, l) {
      "use strict";
      e.exports = l.p + "bd9de058e9a42d99d512.jpg";
    },
    162332: function (e, t, l) {
      "use strict";
      e.exports = l.p + "335ca339550d5be86785.jpg";
    },
    665484: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        }),
        l("794252");
      var s = l("37983");
      l("884691");
      var a = l("414456"),
        i = l.n(a),
        r = l("506838"),
        n = l("265586"),
        o = l("77078"),
        d = l("782340"),
        u = l("483665");
      function c(e) {
        var t;
        let { item: l, isDarkText: a = !1 } = e;
        let c =
          ((t = null == l ? void 0 : l.type),
          (0, r.match)(t)
            .with(
              n.CollectiblesItemType.AVATAR_DECORATION,
              () => d.default.Messages.USER_SETTINGS_AVATAR_DECORATION
            )
            .with(
              n.CollectiblesItemType.PROFILE_EFFECT,
              () => d.default.Messages.USER_SETTINGS_PROFILE_EFFECT
            )
            .otherwise(() => null));
        return null === c
          ? null
          : (0, s.jsx)(o.Text, {
              variant: "text-xxs/normal",
              className: i([u.container, a ? u.darkText : u.lightText]),
              children: c,
            });
      }
    },
    380171: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          categoryBannerOverrides: function () {
            return a;
          },
        });
      var s = l("635058");
      let a = {
        [s.CollectiblesCategorySkuId.ANIME_V2]: {
          assetUrlOverride: l("482500"),
          addGradient: !1,
        },
        [s.CollectiblesCategorySkuId.ELEMENTS]: {
          assetUrlOverride: l("530514"),
          addGradient: !0,
        },
        [s.CollectiblesCategorySkuId.LUNAR_NEW_YEAR]: {
          assetUrlOverride: l("162332"),
          addGradient: !0,
        },
        [s.CollectiblesCategorySkuId.CYBERPUNK]: {
          assetUrlOverride: l("818127"),
          addGradient: !0,
        },
      };
    },
    179047: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return eu;
          },
        }),
        l("222007");
      var s = l("37983"),
        a = l("884691"),
        i = l("414456"),
        r = l.n(i),
        n = l("265586"),
        o = l("65597"),
        d = l("77078"),
        u = l("54239"),
        c = l("152584"),
        C = l("812204"),
        E = l("685665"),
        T = l("606292"),
        I = l("688318"),
        m = l("692038"),
        f = l("815297"),
        p = l("574073"),
        L = l("291655"),
        A = l("946964"),
        O = l("649844"),
        _ = l("635956"),
        g = l("38766"),
        v = l("184900"),
        h = l("493390"),
        x = l("217513"),
        S = l("790618"),
        N = l("697218"),
        y = l("46829"),
        b = l("216422"),
        R = l("351825"),
        P = l("599110"),
        M = l("719923"),
        D = l("21526"),
        j = l("775416"),
        k = l("491232"),
        B = l("98148"),
        F = l("677257"),
        U = l("716120"),
        w = l("89569"),
        V = l("665484"),
        z = l("342676"),
        H = l("450492"),
        W = l("920580"),
        G = l("791309"),
        Y = l("54809"),
        K = l("408381"),
        X = l("264579"),
        Z = l("380171"),
        q = l("49111"),
        J = l("646718"),
        Q = l("843455"),
        $ = l("782340"),
        ee = l("219591"),
        et = l("53708");
      let el = d.AvatarSizes.SIZE_152,
        es = (0, T.getDecorationSizeForAvatarSize)(el),
        ea = (0, k.getLogoSize)(18),
        ei = e => {
          let { text: t } = e,
            { analyticsLocations: l } = (0, E.default)(),
            i = a.useRef(null);
          return (0, s.jsx)(d.Clickable, {
            className: ee.subscribeNow,
            innerRef: i,
            onClick: () => {
              (0, O.default)({
                subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: l,
                returnRef: i,
              });
            },
            children: t,
          });
        },
        er = e => {
          let {
              product: t,
              user: l,
              category: i,
              onClose: C,
              returnRef: m,
            } = e,
            { analyticsLocations: f } = (0, E.default)(),
            p = M.default.canUseCollectibles(l),
            [L, O] = (0, o.useStateFromStoresArray)([j.default], () => [
              j.default.getPurchase(t.skuId),
              j.default.isClaiming === t.skuId,
            ]),
            { productDetailModalDescriptionHidden: v } = (0, B.default)({
              location: "CollectiblesShopProductDetailsModal",
            }),
            x = (0, g.default)({ analyticsLocations: f }),
            {
              buttonColors: S,
              backgroundColors: N,
              isDarkText: y,
            } = (0, F.default)(t.styles),
            R = !0 === y,
            P = R ? ee.darkText : ee.lightText,
            U =
              null != S
                ? {
                    background: (0, K.getBackgroundGradient)(S, 90),
                    color: S.text.toHslString(),
                  }
                : void 0,
            w =
              null != N
                ? { background: (0, K.getBackgroundGradient)(N, 135) }
                : void 0,
            Z = (0, k.isPremiumCollectiblesProduct)(t),
            er = (0, k.extractPriceByPurchaseTypes)(
              t,
              q.PriceSetAssignmentPurchaseTypes.DEFAULT
            ),
            en = (null == er ? void 0 : er.amount) === 0,
            [eo] = t.items;
          a.useEffect(() => {
            if (
              (null == eo ? void 0 : eo.type) ===
              n.CollectiblesItemType.AVATAR_DECORATION
            )
              return (
                (0, c.setPendingAvatarDecoration)(eo),
                () => (0, c.setPendingAvatarDecoration)(void 0)
              );
          }, [eo]);
          let ed = e =>
              (0, s.jsx)(_.default, {
                subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: Y.closeCollectiblesShopProductDetailsModal,
                onSubscribeModalClose: () => {
                  (0, Y.openCollectiblesShopProductDetailsModal)({
                    product: t,
                    category: i,
                    returnRef: m,
                    analyticsLocations: f,
                  });
                },
              }),
            { avatarDecorationSrc: eu, eventHandlers: ec } = (0, I.default)({
              user: l,
              avatarDecorationOverride:
                (null == eo ? void 0 : eo.type) ===
                n.CollectiblesItemType.AVATAR_DECORATION
                  ? eo
                  : null,
              size: es,
            });
          return (0, s.jsxs)("div", {
            className: ee.collectibleInfoContainer,
            style: w,
            children: [
              (0, s.jsxs)("div", {
                className: ee.titleContainer,
                children: [
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)("img", {
                      className: ee.titleImage,
                      src: (0, k.getCollectiblesAssetURL)(i.logo, { size: ea }),
                      alt: i.name,
                    }),
                  }),
                  (0, s.jsx)(z.default, { category: i, display: "modal" }),
                ],
              }),
              (null == eo ? void 0 : eo.type) ===
                n.CollectiblesItemType.AVATAR_DECORATION &&
                (0, s.jsx)("div", {
                  className: ee.avatarPreviewContainer,
                  children: (0, s.jsx)(d.Avatar, {
                    ...ec,
                    "aria-label": $.default.Messages.USER_SETTINGS_AVATAR,
                    size: el,
                    avatarDecoration: eu,
                    src: et,
                  }),
                }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    className: ee.description,
                    children: [
                      (0, s.jsx)(V.default, { item: eo, isDarkText: R }),
                      (0, s.jsx)(d.Heading, {
                        variant: "heading-xl/extrabold",
                        className: r([ee.headingWithItemTypePill, P]),
                        children: t.name,
                      }),
                      !v &&
                        (0, s.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          className: P,
                          children: t.summary,
                        }),
                      (() => {
                        if (null != L)
                          return (0, s.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            className: r([ee.priceTag, P]),
                            children:
                              $.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                          });
                        if (Z)
                          return (0, s.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            className: r([ee.priceTag, P]),
                            children:
                              $.default.Messages
                                .COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                          });
                        if (p)
                          return (0, s.jsx)(W.default, {
                            product: t,
                            className: ee.priceTag,
                            innerClassName: P,
                            alwaysWhiteText: !R,
                            nitroWheelColor: !0 === R ? "black" : "white",
                          });
                        if (null == er) return null;
                        let e = (0, k.extractPriceByPurchaseTypes)(
                          t,
                          q.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
                        );
                        return (0, s.jsxs)("div", {
                          className: ee.priceTagContainer,
                          children: [
                            (0, s.jsx)(G.default, { price: er }),
                            null != e &&
                              !en &&
                              (0, s.jsx)(G.default, {
                                price: e,
                                variant: "text-xs/medium",
                                alwaysWhiteText: !R,
                                className: r([ee.premiumPriceTag, P]),
                                renderPrice: e =>
                                  $.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format(
                                    {
                                      price: e,
                                      subscribeNowHook: e =>
                                        (0, s.jsx)(ei, { text: e }),
                                    }
                                  ),
                                icon: (0, s.jsx)(d.Tooltip, {
                                  text: $.default.Messages
                                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                  "aria-label":
                                    $.default.Messages
                                      .COLLECTIBLES_NITRO_EXCLUSIVE,
                                  children: e => {
                                    let { ...t } = e;
                                    return (0, s.jsx)(b.default, {
                                      ...t,
                                      className: ee.premiumPriceTagIcon,
                                      color: "white",
                                    });
                                  },
                                }),
                              }),
                          ],
                        });
                      })(),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: ee.buttonsContainer,
                    children: (0, s.jsxs)("div", {
                      className: ee.primaryButtons,
                      children: [
                        !Z || p || en
                          ? null != L
                            ? (0, s.jsx)(d.Button, {
                                style: U,
                                className: ee.button,
                                look: d.Button.Looks.FILLED,
                                onClick: () => {
                                  if (
                                    (C(),
                                    (0, u.popLayer)(),
                                    x(),
                                    (null == eo ? void 0 : eo.type) ===
                                      n.CollectiblesItemType.AVATAR_DECORATION)
                                  ) {
                                    (0, T.openAvatarDecorationModal)({
                                      initialSelectedDecoration: eo,
                                      analyticsLocations: f,
                                    });
                                    return;
                                  }
                                  (null == eo ? void 0 : eo.type) ===
                                    n.CollectiblesItemType.PROFILE_EFFECT &&
                                    (0, h.openProfileEffectModal)({
                                      initialSelectedEffectId: eo.id,
                                      analyticsLocations: f,
                                    });
                                },
                                children:
                                  $.default.Messages.COLLECTIBLES_USE_NOW,
                              })
                            : Z
                              ? (0, s.jsx)(d.Button, {
                                  style: U,
                                  className: ee.button,
                                  look: d.Button.Looks.FILLED,
                                  submitting: O,
                                  submittingStartedLabel:
                                    $.default.Messages.COLLECTIBLES_COLLECTING,
                                  submittingFinishedLabel:
                                    $.default.Messages
                                      .COLLECTIBLES_COLLECTING_FINISHED,
                                  onClick: async () => {
                                    await (0,
                                    D.claimPremiumCollectiblesProduct)(t.skuId),
                                      C(),
                                      (0, X.default)({
                                        product: t,
                                        analyticsLocations: f,
                                      });
                                  },
                                  children:
                                    $.default.Messages
                                      .COLLECTIBLES_ADD_TO_YOUR_COLLECTION,
                                })
                              : (0, s.jsx)(d.Button, {
                                  style: U,
                                  className: ee.button,
                                  look: d.Button.Looks.FILLED,
                                  onClick: () =>
                                    (0, A.default)({
                                      skuId: t.skuId,
                                      analyticsLocations: f,
                                      onClose: e => (e ? C() : (0, Q.NOOP)()),
                                    }),
                                  children:
                                    (null == eo ? void 0 : eo.type) ===
                                    n.CollectiblesItemType.PROFILE_EFFECT
                                      ? $.default.Messages
                                          .COLLECTIBLES_BUY_PROFILE_EFFECT
                                      : $.default.Messages
                                          .COLLECTIBLES_BUY_DECORATION,
                                })
                          : ed($.default.Messages.UNLOCK_WITH_NITRO),
                        !Z &&
                          !en &&
                          (0, s.jsx)(H.default, { product: t, onSuccess: C }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(d.Text, {
                    className: r([ee.disclaimer, P]),
                    variant: "text-xxs/normal",
                    children:
                      null != L
                        ? null
                        : Z
                          ? $.default.Messages
                              .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER
                          : (null == eo ? void 0 : eo.type) ===
                              n.CollectiblesItemType.PROFILE_EFFECT
                            ? $.default.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER
                            : $.default.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER,
                  }),
                ],
              }),
            ],
          });
        },
        en = e => {
          let { product: t, user: l } = e,
            a = M.default.canUsePremiumProfileCustomization(l),
            i = (0, o.useStateFromStoresObject)([S.default], () =>
              S.default.getAllPending()
            ),
            r = (0, x.default)(l.id),
            d = !!(null == r ? void 0 : r.getPreviewBio(i.pendingBio).value),
            [u] = t.items;
          return (0, s.jsxs)("div", {
            className:
              (null == u ? void 0 : u.type) ===
              n.CollectiblesItemType.AVATAR_DECORATION
                ? ee.previewsContainerInner
                : ee.profileEffectPreviewsContainerInner,
            children: [
              (0, s.jsx)(v.default, {
                ...i,
                user: l,
                canUsePremiumCustomization: a,
                onAvatarChange: Q.NOOP,
                onBannerChange: Q.NOOP,
                bodyClassName: ee.profileCustomizationBody,
                pendingAvatarDecoration:
                  (null == u ? void 0 : u.type) ===
                  n.CollectiblesItemType.AVATAR_DECORATION
                    ? u
                    : void 0,
                pendingProfileEffectId:
                  (null == u ? void 0 : u.type) ===
                  n.CollectiblesItemType.PROFILE_EFFECT
                    ? u.id
                    : void 0,
                forProfileEffectModal:
                  (null == u ? void 0 : u.type) ===
                  n.CollectiblesItemType.PROFILE_EFFECT,
                disabledInputs: !0,
                hideExampleButton: !0,
                hideFakeActivity:
                  (null == u ? void 0 : u.type) ===
                    n.CollectiblesItemType.AVATAR_DECORATION || d,
                hideBioSection:
                  (null == u ? void 0 : u.type) ===
                  n.CollectiblesItemType.AVATAR_DECORATION,
                hideMemberStatusSection:
                  (null == u ? void 0 : u.type) ===
                  n.CollectiblesItemType.AVATAR_DECORATION,
                useLargeBanner: !0,
              }),
              (null == u ? void 0 : u.type) ===
                n.CollectiblesItemType.AVATAR_DECORATION &&
                (0, s.jsx)(ed, { user: l }),
            ],
          });
        },
        eo = e => {
          let { author: t } = e,
            l = (0, m.createMessageRecord)({
              ...(0, f.default)({
                author: t,
                channelId: "1337",
                content: $.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT,
              }),
              state: q.MessageStates.SENT,
              id: "0",
            });
          return l;
        },
        ed = e => {
          let { user: t } = e,
            l = eo({ author: t });
          return (0, s.jsx)(d.FocusBlock, {
            children: (0, s.jsxs)(d.Card, {
              className: ee.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, s.jsx)(
                  L.default,
                  {
                    className: ee.mockMessage,
                    author: (0, p.getMessageAuthor)(l),
                    message: l,
                  },
                  l.id
                ),
                (0, s.jsxs)("div", {
                  className: ee.mockInput,
                  children: [
                    (0, s.jsx)(R.default, {
                      className: ee.mockInputButton,
                      width: 24,
                      height: 24,
                    }),
                    (0, s.jsx)(y.default, {
                      className: ee.mockInputButton,
                      width: 24,
                      height: 24,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var eu = e => {
        var t, l;
        let {
            transitionState: i,
            onClose: r,
            product: u,
            category: c,
            returnRef: T,
            analyticsSource: I,
            analyticsLocations: m,
          } = e,
          f = (0, o.default)([N.default], () => N.default.getCurrentUser()),
          { analyticsLocations: p, AnalyticsLocationProvider: L } = (0,
          E.default)([...m, C.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, w.useProductDetailsLinkableRoute)(u);
        let [A] = u.items;
        return (a.useEffect(() => {
          let e =
            (null == A ? void 0 : A.type) ===
            n.CollectiblesItemType.AVATAR_DECORATION
              ? "avatar decoration"
              : "profile effect";
          return (
            P.default.track(q.AnalyticEvents.OPEN_MODAL, {
              type: q.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: I,
              location_stack: p,
              sku_id: u.skuId,
              product_type: e,
            }),
            u.items.map(D.productDetailsOpened),
            () => {
              u.items.map(D.productDetailsClosed);
            }
          );
        }, [I, p, u.skuId, u.items, null == A ? void 0 : A.type]),
        null == f)
          ? null
          : (0, s.jsx)(L, {
              children: (0, s.jsx)(d.ModalRoot, {
                hideShadow: !0,
                className: ee.modalRoot,
                returnRef: T,
                transitionState: i,
                size: d.ModalSize.DYNAMIC,
                children: (0, s.jsxs)(d.ModalContent, {
                  className: ee.modalContent,
                  children: [
                    (0, s.jsx)(er, {
                      user: f,
                      product: u,
                      category: c,
                      onClose: r,
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        (null == A ? void 0 : A.type) ===
                        n.CollectiblesItemType.AVATAR_DECORATION
                          ? ee.collectiblePreviewsContainerWithChat
                          : ee.collectiblePreviewsContainerNoChat,
                      children: [
                        (0, s.jsx)(U.default, {
                          assetUrlOverride:
                            null === (t = Z.categoryBannerOverrides[c.skuId]) ||
                            void 0 === t
                              ? void 0
                              : t.assetUrlOverride,
                          asset: u.banner,
                          addGradient:
                            null === (l = Z.categoryBannerOverrides[c.skuId]) ||
                            void 0 === l
                              ? void 0
                              : l.addGradient,
                          size: (0, K.getAssetSizeByHeight)(540),
                          className: ee.categoryBanner,
                        }),
                        (0, s.jsx)(en, { user: f, product: u }),
                      ],
                    }),
                    (0, s.jsx)(d.ModalCloseButton, {
                      onClick: r,
                      className: ee.modalCloseButton,
                      withCircleBackground: !0,
                    }),
                  ],
                }),
              }),
            });
      };
    },
    291655: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var s = l("37983"),
        a = l("884691"),
        i = l("414456"),
        r = l.n(i),
        n = l("634807"),
        o = l("780571"),
        d = l("39331"),
        u = l("596368"),
        c = l("227439"),
        C = l("5762"),
        E = a.memo(function (e) {
          var t;
          let {
              message: l,
              channel: a,
              compact: i,
              className: E,
              isGroupStart: T,
              hideSimpleEmbedContent: I = !0,
              disableInteraction: m,
            } = e,
            f = (0, n.isMessageNewerThanImprovedMarkdownEpoch)(
              (null !== (t = l.editedTimestamp) && void 0 !== t
                ? t
                : l.timestamp
              ).valueOf()
            ),
            { content: p } = (0, d.default)(l, {
              hideSimpleEmbedContent: I,
              allowList: f,
              allowHeading: f,
              allowLinks: !0,
              previewLinkTarget: !0,
            });
          return (0, s.jsx)(o.default, {
            compact: i,
            className: r(E, {
              [C.message]: !0,
              [C.cozyMessage]: !i,
              [C.groupStart]: T,
            }),
            childrenHeader: (0, c.default)({
              ...e,
              channel: a,
              guildId: void 0,
            }),
            childrenMessageContent: (0, u.default)(e, p),
            disableInteraction: m,
          });
        });
    },
  },
]);
//# sourceMappingURL=2fdd746f22402511b778.js.map

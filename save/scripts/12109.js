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
            return d;
          },
        }),
        l("794252");
      var s = l("37983");
      l("884691");
      var a = l("506838"),
        i = l("265586"),
        r = l("77078"),
        o = l("782340"),
        n = l("483665");
      function d(e) {
        var t;
        let { item: l } = e;
        let d =
          ((t = null == l ? void 0 : l.type),
          (0, a.match)(t)
            .with(
              i.CollectiblesItemType.AVATAR_DECORATION,
              () => o.default.Messages.USER_SETTINGS_AVATAR_DECORATION
            )
            .with(
              i.CollectiblesItemType.PROFILE_EFFECT,
              () => o.default.Messages.USER_SETTINGS_PROFILE_EFFECT
            )
            .otherwise(() => null));
        return null === d
          ? null
          : (0, s.jsx)(r.Text, {
              color: "always-white",
              variant: "text-xxs/normal",
              className: n.container,
              children: d,
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
            return en;
          },
        }),
        l("222007");
      var s = l("37983"),
        a = l("884691"),
        i = l("265586"),
        r = l("65597"),
        o = l("77078"),
        n = l("54239"),
        d = l("152584"),
        c = l("812204"),
        u = l("685665"),
        C = l("606292"),
        E = l("688318"),
        I = l("692038"),
        T = l("815297"),
        m = l("574073"),
        f = l("291655"),
        p = l("946964"),
        L = l("649844"),
        A = l("635956"),
        O = l("38766"),
        _ = l("184900"),
        v = l("493390"),
        g = l("217513"),
        h = l("790618"),
        S = l("697218"),
        y = l("46829"),
        N = l("216422"),
        x = l("351825"),
        R = l("599110"),
        b = l("719923"),
        P = l("21526"),
        M = l("775416"),
        D = l("491232"),
        j = l("98148"),
        B = l("677257"),
        k = l("716120"),
        F = l("89569"),
        U = l("665484"),
        w = l("342676"),
        V = l("450492"),
        z = l("920580"),
        H = l("791309"),
        G = l("54809"),
        W = l("408381"),
        Y = l("264579"),
        K = l("380171"),
        X = l("49111"),
        Z = l("646718"),
        q = l("843455"),
        J = l("782340"),
        Q = l("219591"),
        $ = l("53708");
      let ee = o.AvatarSizes.SIZE_152,
        et = (0, C.getDecorationSizeForAvatarSize)(ee),
        el = (0, D.getLogoSize)(18),
        es = e => {
          let { text: t } = e,
            { analyticsLocations: l } = (0, u.default)(),
            i = a.useRef(null);
          return (0, s.jsx)(o.Clickable, {
            className: Q.subscribeNow,
            innerRef: i,
            onClick: () => {
              (0, L.default)({
                subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: l,
                returnRef: i,
              });
            },
            children: t,
          });
        },
        ea = e => {
          let {
              product: t,
              user: l,
              category: c,
              onClose: I,
              returnRef: T,
            } = e,
            { analyticsLocations: m } = (0, u.default)(),
            f = b.default.canUseCollectibles(l),
            [L, _] = (0, r.useStateFromStoresArray)([M.default], () => [
              M.default.getPurchase(t.skuId),
              M.default.isClaiming === t.skuId,
            ]),
            { productDetailModalDescriptionHidden: g } = (0, j.default)({
              location: "CollectiblesShopProductDetailsModal",
            }),
            h = (0, O.default)({ analyticsLocations: m }),
            { buttonColors: S, backgroundColors: y } = (0, B.default)(t.styles),
            x =
              null != S
                ? {
                    background: (0, W.getBackgroundGradient)(S, 90),
                    color: S.text.toHslString(),
                  }
                : void 0,
            R =
              null != y
                ? { background: (0, W.getBackgroundGradient)(y, 135) }
                : void 0,
            k = (0, D.isPremiumCollectiblesProduct)(t),
            F = (0, D.extractPriceByPurchaseTypes)(
              t,
              X.PriceSetAssignmentPurchaseTypes.DEFAULT
            ),
            K = (null == F ? void 0 : F.amount) === 0,
            [ea] = t.items;
          a.useEffect(() => {
            if (
              (null == ea ? void 0 : ea.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION
            )
              return (
                (0, d.setPendingAvatarDecoration)(ea),
                () => (0, d.setPendingAvatarDecoration)(void 0)
              );
          }, [ea]);
          let ei = e =>
              (0, s.jsx)(A.default, {
                subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: G.closeCollectiblesShopProductDetailsModal,
                onSubscribeModalClose: () => {
                  (0, G.openCollectiblesShopProductDetailsModal)({
                    product: t,
                    category: c,
                    returnRef: T,
                    analyticsLocations: m,
                  });
                },
              }),
            { avatarDecorationSrc: er, eventHandlers: eo } = (0, E.default)({
              user: l,
              avatarDecorationOverride:
                (null == ea ? void 0 : ea.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION
                  ? ea
                  : null,
              size: et,
            });
          return (0, s.jsxs)("div", {
            className: Q.collectibleInfoContainer,
            style: R,
            children: [
              (0, s.jsxs)("div", {
                className: Q.titleContainer,
                children: [
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)("img", {
                      className: Q.titleImage,
                      src: (0, D.getCollectiblesAssetURL)(c.logo, { size: el }),
                      alt: c.name,
                    }),
                  }),
                  (0, s.jsx)(w.default, { category: c, display: "modal" }),
                ],
              }),
              (null == ea ? void 0 : ea.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, s.jsx)("div", {
                  className: Q.avatarPreviewContainer,
                  children: (0, s.jsx)(o.Avatar, {
                    ...eo,
                    "aria-label": J.default.Messages.USER_SETTINGS_AVATAR,
                    size: ee,
                    avatarDecoration: er,
                    src: $,
                  }),
                }),
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    className: Q.description,
                    children: [
                      (0, s.jsx)(U.default, { item: ea }),
                      (0, s.jsx)(o.Heading, {
                        color: "always-white",
                        variant: "heading-xl/extrabold",
                        className: Q.headingWithItemTypePill,
                        children: t.name,
                      }),
                      !g &&
                        (0, s.jsx)(o.Text, {
                          color: "always-white",
                          variant: "text-sm/normal",
                          children: t.summary,
                        }),
                      (() => {
                        if (null != L)
                          return (0, s.jsx)(o.Text, {
                            color: "always-white",
                            variant: "text-md/semibold",
                            className: Q.priceTag,
                            children:
                              J.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                          });
                        if (k)
                          return (0, s.jsx)(o.Text, {
                            color: "always-white",
                            variant: "text-md/semibold",
                            className: Q.priceTag,
                            children:
                              J.default.Messages
                                .COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                          });
                        if (f)
                          return (0, s.jsx)(z.default, {
                            product: t,
                            className: Q.priceTag,
                          });
                        if (null == F) return null;
                        let e = (0, D.extractPriceByPurchaseTypes)(
                          t,
                          X.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
                        );
                        return (0, s.jsxs)("div", {
                          className: Q.priceTagContainer,
                          children: [
                            (0, s.jsx)(H.default, { price: F }),
                            null != e &&
                              !K &&
                              (0, s.jsx)(H.default, {
                                price: e,
                                variant: "text-xs/medium",
                                className: Q.premiumPriceTag,
                                renderPrice: e =>
                                  J.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format(
                                    {
                                      price: e,
                                      subscribeNowHook: e =>
                                        (0, s.jsx)(es, { text: e }),
                                    }
                                  ),
                                icon: (0, s.jsx)(o.Tooltip, {
                                  text: J.default.Messages
                                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                  "aria-label":
                                    J.default.Messages
                                      .COLLECTIBLES_NITRO_EXCLUSIVE,
                                  children: e => {
                                    let { ...t } = e;
                                    return (0, s.jsx)(N.default, {
                                      ...t,
                                      className: Q.premiumPriceTagIcon,
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
                    className: Q.buttonsContainer,
                    children: (0, s.jsxs)("div", {
                      className: Q.primaryButtons,
                      children: [
                        !k || f || K
                          ? null != L
                            ? (0, s.jsx)(o.Button, {
                                style: x,
                                className: Q.button,
                                look: o.Button.Looks.FILLED,
                                onClick: () => {
                                  if (
                                    (I(),
                                    (0, n.popLayer)(),
                                    h(),
                                    (null == ea ? void 0 : ea.type) ===
                                      i.CollectiblesItemType.AVATAR_DECORATION)
                                  ) {
                                    (0, C.openAvatarDecorationModal)({
                                      initialSelectedDecoration: ea,
                                      analyticsLocations: m,
                                    });
                                    return;
                                  }
                                  (null == ea ? void 0 : ea.type) ===
                                    i.CollectiblesItemType.PROFILE_EFFECT &&
                                    (0, v.openProfileEffectModal)({
                                      initialSelectedEffectId: ea.id,
                                      analyticsLocations: m,
                                    });
                                },
                                children:
                                  J.default.Messages.COLLECTIBLES_USE_NOW,
                              })
                            : k
                              ? (0, s.jsx)(o.Button, {
                                  style: x,
                                  className: Q.button,
                                  look: o.Button.Looks.FILLED,
                                  submitting: _,
                                  submittingStartedLabel:
                                    J.default.Messages.COLLECTIBLES_COLLECTING,
                                  submittingFinishedLabel:
                                    J.default.Messages
                                      .COLLECTIBLES_COLLECTING_FINISHED,
                                  onClick: async () => {
                                    await (0,
                                    P.claimPremiumCollectiblesProduct)(t.skuId),
                                      I(),
                                      (0, Y.default)({
                                        product: t,
                                        analyticsLocations: m,
                                      });
                                  },
                                  children:
                                    J.default.Messages
                                      .COLLECTIBLES_ADD_TO_YOUR_COLLECTION,
                                })
                              : (0, s.jsx)(o.Button, {
                                  style: x,
                                  className: Q.button,
                                  look: o.Button.Looks.FILLED,
                                  onClick: () =>
                                    (0, p.default)({
                                      skuId: t.skuId,
                                      analyticsLocations: m,
                                      onClose: e => (e ? I() : (0, q.NOOP)()),
                                    }),
                                  children:
                                    (null == ea ? void 0 : ea.type) ===
                                    i.CollectiblesItemType.PROFILE_EFFECT
                                      ? J.default.Messages
                                          .COLLECTIBLES_BUY_PROFILE_EFFECT
                                      : J.default.Messages
                                          .COLLECTIBLES_BUY_DECORATION,
                                })
                          : ei(J.default.Messages.UNLOCK_WITH_NITRO),
                        !k &&
                          !K &&
                          (0, s.jsx)(V.default, { product: t, onSuccess: I }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(o.Text, {
                    color: "none",
                    className: Q.disclaimer,
                    variant: "text-xxs/normal",
                    children:
                      null != L
                        ? null
                        : k
                          ? J.default.Messages
                              .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER
                          : (null == ea ? void 0 : ea.type) ===
                              i.CollectiblesItemType.PROFILE_EFFECT
                            ? J.default.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER
                            : J.default.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER,
                  }),
                ],
              }),
            ],
          });
        },
        ei = e => {
          let { product: t, user: l } = e,
            a = b.default.canUsePremiumProfileCustomization(l),
            o = (0, r.useStateFromStoresObject)([h.default], () =>
              h.default.getAllPending()
            ),
            n = (0, g.default)(l.id),
            d = !!(null == n ? void 0 : n.getPreviewBio(o.pendingBio).value),
            [c] = t.items;
          return (0, s.jsxs)("div", {
            className:
              (null == c ? void 0 : c.type) ===
              i.CollectiblesItemType.AVATAR_DECORATION
                ? Q.previewsContainerInner
                : Q.profileEffectPreviewsContainerInner,
            children: [
              (0, s.jsx)(_.default, {
                ...o,
                user: l,
                canUsePremiumCustomization: a,
                onAvatarChange: q.NOOP,
                onBannerChange: q.NOOP,
                bodyClassName: Q.profileCustomizationBody,
                pendingAvatarDecoration:
                  (null == c ? void 0 : c.type) ===
                  i.CollectiblesItemType.AVATAR_DECORATION
                    ? c
                    : void 0,
                pendingProfileEffectId:
                  (null == c ? void 0 : c.type) ===
                  i.CollectiblesItemType.PROFILE_EFFECT
                    ? c.id
                    : void 0,
                forProfileEffectModal:
                  (null == c ? void 0 : c.type) ===
                  i.CollectiblesItemType.PROFILE_EFFECT,
                disabledInputs: !0,
                hideExampleButton: !0,
                hideFakeActivity:
                  (null == c ? void 0 : c.type) ===
                    i.CollectiblesItemType.AVATAR_DECORATION || d,
                hideBioSection:
                  (null == c ? void 0 : c.type) ===
                  i.CollectiblesItemType.AVATAR_DECORATION,
                hideMemberStatusSection:
                  (null == c ? void 0 : c.type) ===
                  i.CollectiblesItemType.AVATAR_DECORATION,
                useLargeBanner: !0,
              }),
              (null == c ? void 0 : c.type) ===
                i.CollectiblesItemType.AVATAR_DECORATION &&
                (0, s.jsx)(eo, { user: l }),
            ],
          });
        },
        er = e => {
          let { author: t } = e,
            l = (0, I.createMessageRecord)({
              ...(0, T.default)({
                author: t,
                channelId: "1337",
                content: J.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT,
              }),
              state: X.MessageStates.SENT,
              id: "0",
            });
          return l;
        },
        eo = e => {
          let { user: t } = e,
            l = er({ author: t });
          return (0, s.jsx)(o.FocusBlock, {
            children: (0, s.jsxs)(o.Card, {
              className: Q.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, s.jsx)(
                  f.default,
                  {
                    className: Q.mockMessage,
                    author: (0, m.getMessageAuthor)(l),
                    message: l,
                  },
                  l.id
                ),
                (0, s.jsxs)("div", {
                  className: Q.mockInput,
                  children: [
                    (0, s.jsx)(x.default, {
                      className: Q.mockInputButton,
                      width: 24,
                      height: 24,
                    }),
                    (0, s.jsx)(y.default, {
                      className: Q.mockInputButton,
                      width: 24,
                      height: 24,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var en = e => {
        var t, l;
        let {
            transitionState: n,
            onClose: d,
            product: C,
            category: E,
            returnRef: I,
            analyticsSource: T,
            analyticsLocations: m,
          } = e,
          f = (0, r.default)([S.default], () => S.default.getCurrentUser()),
          { analyticsLocations: p, AnalyticsLocationProvider: L } = (0,
          u.default)([...m, c.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, F.useProductDetailsLinkableRoute)(C);
        let [A] = C.items;
        return (a.useEffect(() => {
          let e =
            (null == A ? void 0 : A.type) ===
            i.CollectiblesItemType.AVATAR_DECORATION
              ? "avatar decoration"
              : "profile effect";
          R.default.track(X.AnalyticEvents.OPEN_MODAL, {
            type: X.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: T,
            location_stack: p,
            sku_id: C.skuId,
            product_type: e,
          }),
            C.items.map(P.productDetailsOpened);
        }, [T, p, C.skuId, C.items, null == A ? void 0 : A.type]),
        null == f)
          ? null
          : (0, s.jsx)(L, {
              children: (0, s.jsx)(o.ModalRoot, {
                hideShadow: !0,
                className: Q.modalRoot,
                returnRef: I,
                transitionState: n,
                size: o.ModalSize.DYNAMIC,
                children: (0, s.jsxs)(o.ModalContent, {
                  className: Q.modalContent,
                  children: [
                    (0, s.jsx)(ea, {
                      user: f,
                      product: C,
                      category: E,
                      onClose: d,
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        (null == A ? void 0 : A.type) ===
                        i.CollectiblesItemType.AVATAR_DECORATION
                          ? Q.collectiblePreviewsContainerWithChat
                          : Q.collectiblePreviewsContainerNoChat,
                      children: [
                        (0, s.jsx)(k.default, {
                          assetUrlOverride:
                            null === (t = K.categoryBannerOverrides[E.skuId]) ||
                            void 0 === t
                              ? void 0
                              : t.assetUrlOverride,
                          asset: C.banner,
                          addGradient:
                            null === (l = K.categoryBannerOverrides[E.skuId]) ||
                            void 0 === l
                              ? void 0
                              : l.addGradient,
                          size: (0, W.getAssetSizeByHeight)(540),
                          className: Q.categoryBanner,
                        }),
                        (0, s.jsx)(ei, { user: f, product: C }),
                      ],
                    }),
                    (0, s.jsx)(o.ModalCloseButton, {
                      onClick: d,
                      className: Q.modalCloseButton,
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
        o = l("634807"),
        n = l("780571"),
        d = l("39331"),
        c = l("596368"),
        u = l("227439"),
        C = l("5762"),
        E = a.memo(function (e) {
          var t;
          let {
              message: l,
              channel: a,
              compact: i,
              className: E,
              isGroupStart: I,
              hideSimpleEmbedContent: T = !0,
              disableInteraction: m,
            } = e,
            f = (0, o.isMessageNewerThanImprovedMarkdownEpoch)(
              (null !== (t = l.editedTimestamp) && void 0 !== t
                ? t
                : l.timestamp
              ).valueOf()
            ),
            { content: p } = (0, d.default)(l, {
              hideSimpleEmbedContent: T,
              allowList: f,
              allowHeading: f,
              allowLinks: !0,
              previewLinkTarget: !0,
            });
          return (0, s.jsx)(n.default, {
            compact: i,
            className: r(E, {
              [C.message]: !0,
              [C.cozyMessage]: !i,
              [C.groupStart]: I,
            }),
            childrenHeader: (0, u.default)({
              ...e,
              channel: a,
              guildId: void 0,
            }),
            childrenMessageContent: (0, c.default)(e, p),
            disableInteraction: m,
          });
        });
    },
  },
]);
//# sourceMappingURL=23dfaa1fc9ae1a877166.js.map

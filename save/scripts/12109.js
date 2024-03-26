(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12109"],
  {
    665484: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        }),
        l("794252");
      var a = l("37983");
      l("884691");
      var s = l("414456"),
        i = l.n(s),
        n = l("506838"),
        r = l("265586"),
        o = l("77078"),
        d = l("782340"),
        u = l("483665");
      function c(e) {
        var t;
        let { item: l, isDarkText: s = !1 } = e;
        let c =
          ((t = null == l ? void 0 : l.type),
          (0, n.match)(t)
            .with(
              r.CollectiblesItemType.AVATAR_DECORATION,
              () => d.default.Messages.USER_SETTINGS_AVATAR_DECORATION
            )
            .with(
              r.CollectiblesItemType.PROFILE_EFFECT,
              () => d.default.Messages.USER_SETTINGS_PROFILE_EFFECT
            )
            .otherwise(() => null));
        return null === c
          ? null
          : (0, a.jsx)(o.Text, {
              variant: "text-xxs/normal",
              className: i([u.container, s ? u.darkText : u.lightText]),
              children: c,
            });
      }
    },
    179047: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return ed;
          },
        }),
        l("222007");
      var a = l("37983"),
        s = l("884691"),
        i = l("414456"),
        n = l.n(i),
        r = l("265586"),
        o = l("65597"),
        d = l("77078"),
        u = l("54239"),
        c = l("152584"),
        C = l("812204"),
        T = l("685665"),
        E = l("606292"),
        m = l("688318"),
        I = l("692038"),
        L = l("815297"),
        f = l("574073"),
        p = l("291655"),
        A = l("946964"),
        _ = l("649844"),
        O = l("635956"),
        v = l("38766"),
        g = l("184900"),
        h = l("493390"),
        x = l("217513"),
        S = l("790618"),
        N = l("697218"),
        y = l("46829"),
        R = l("216422"),
        b = l("351825"),
        P = l("599110"),
        M = l("719923"),
        D = l("21526"),
        j = l("775416"),
        k = l("491232"),
        B = l("677257"),
        F = l("716120"),
        U = l("89569"),
        w = l("665484"),
        V = l("342676"),
        H = l("419513"),
        z = l("450492"),
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
        ea = (0, E.getDecorationSizeForAvatarSize)(el),
        es = e => {
          let { text: t } = e,
            { analyticsLocations: l } = (0, T.default)(),
            i = s.useRef(null);
          return (0, a.jsx)(d.Clickable, {
            className: ee.subscribeNow,
            innerRef: i,
            onClick: () => {
              (0, _.default)({
                subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: l,
                returnRef: i,
              });
            },
            children: t,
          });
        },
        ei = e => {
          let {
              product: t,
              user: l,
              category: i,
              onClose: C,
              returnRef: I,
            } = e,
            { analyticsLocations: L } = (0, T.default)(),
            f = M.default.canUseCollectibles(l),
            [p, _] = (0, o.useStateFromStoresArray)([j.default], () => [
              j.default.getPurchase(t.skuId),
              j.default.isClaiming === t.skuId,
            ]),
            g = (0, v.default)({ analyticsLocations: L }),
            {
              buttonColors: x,
              backgroundColors: S,
              isDarkText: N,
            } = (0, B.default)(t.styles),
            y = !0 === N,
            b = y ? ee.darkText : ee.lightText,
            P =
              null != x
                ? {
                    background: (0, K.getBackgroundGradient)(x, 90),
                    color: x.text.toHslString(),
                  }
                : void 0,
            F =
              null != S
                ? { background: (0, K.getBackgroundGradient)(S, 135) }
                : void 0,
            U = (0, k.isPremiumCollectiblesProduct)(t),
            Z = (0, k.extractPriceByPurchaseTypes)(
              t,
              q.PriceSetAssignmentPurchaseTypes.DEFAULT
            ),
            ei = (null == Z ? void 0 : Z.amount) === 0,
            [en] = t.items;
          s.useEffect(() => {
            if (
              (null == en ? void 0 : en.type) ===
              r.CollectiblesItemType.AVATAR_DECORATION
            )
              return (
                (0, c.setPendingAvatarDecoration)(en),
                () => (0, c.setPendingAvatarDecoration)(void 0)
              );
          }, [en]);
          let er = e =>
              (0, a.jsx)(O.default, {
                subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: Y.closeCollectiblesShopProductDetailsModal,
                onSubscribeModalClose: () => {
                  (0, Y.openCollectiblesShopProductDetailsModal)({
                    product: t,
                    category: i,
                    returnRef: I,
                    analyticsLocations: L,
                  });
                },
              }),
            { avatarDecorationSrc: eo, eventHandlers: ed } = (0, m.default)({
              user: l,
              avatarDecorationOverride:
                (null == en ? void 0 : en.type) ===
                r.CollectiblesItemType.AVATAR_DECORATION
                  ? en
                  : null,
              size: ea,
            });
          return (0, a.jsxs)("div", {
            className: ee.collectibleInfoContainer,
            style: F,
            children: [
              (0, a.jsxs)("div", {
                className: ee.titleContainer,
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)("img", {
                      className: ee.titleImage,
                      src: (0, k.getCollectiblesAssetURL)(i.logo, {
                        size: H.LOGO_SIZE,
                      }),
                      alt: i.name,
                    }),
                  }),
                  (0, a.jsx)(V.default, { category: i, display: "modal" }),
                ],
              }),
              (null == en ? void 0 : en.type) ===
                r.CollectiblesItemType.AVATAR_DECORATION &&
                (0, a.jsx)("div", {
                  className: ee.avatarPreviewContainer,
                  children: (0, a.jsx)(d.Avatar, {
                    ...ed,
                    "aria-label": $.default.Messages.USER_SETTINGS_AVATAR,
                    size: el,
                    avatarDecoration: eo,
                    src: et,
                  }),
                }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("div", {
                    className: ee.description,
                    children: [
                      (0, a.jsx)(w.default, { item: en, isDarkText: y }),
                      (0, a.jsx)(d.Heading, {
                        variant: "heading-xl/extrabold",
                        className: n([ee.headingWithItemTypePill, b]),
                        children: t.name,
                      }),
                      (0, a.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        className: b,
                        children: t.summary,
                      }),
                      (() => {
                        if (null != p)
                          return (0, a.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            className: n([ee.priceTag, b]),
                            children:
                              $.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                          });
                        if (U)
                          return (0, a.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            className: n([ee.priceTag, b]),
                            children:
                              $.default.Messages
                                .COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                          });
                        if (f)
                          return (0, a.jsx)(W.default, {
                            product: t,
                            className: ee.priceTag,
                            innerClassName: b,
                            alwaysWhiteText: !y,
                            nitroWheelColor: !0 === y ? "black" : "white",
                          });
                        if (null == Z) return null;
                        let e = (0, k.extractPriceByPurchaseTypes)(
                          t,
                          q.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
                        );
                        return (0, a.jsxs)("div", {
                          className: ee.priceTagContainer,
                          children: [
                            (0, a.jsx)(G.default, { price: Z }),
                            null != e &&
                              !ei &&
                              (0, a.jsx)(G.default, {
                                price: e,
                                variant: "text-xs/medium",
                                alwaysWhiteText: !y,
                                className: n([ee.premiumPriceTag, b]),
                                renderPrice: e =>
                                  $.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format(
                                    {
                                      price: e,
                                      subscribeNowHook: e =>
                                        (0, a.jsx)(es, { text: e }),
                                    }
                                  ),
                                icon: (0, a.jsx)(d.Tooltip, {
                                  text: $.default.Messages
                                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                  "aria-label":
                                    $.default.Messages
                                      .COLLECTIBLES_NITRO_EXCLUSIVE,
                                  children: e => {
                                    let { ...t } = e;
                                    return (0, a.jsx)(R.default, {
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
                  (0, a.jsx)("div", {
                    className: ee.buttonsContainer,
                    children: (0, a.jsxs)("div", {
                      className: ee.primaryButtons,
                      children: [
                        !U || f || ei
                          ? null != p
                            ? (0, a.jsx)(d.Button, {
                                style: P,
                                className: ee.button,
                                look: d.Button.Looks.FILLED,
                                onClick: () => {
                                  if (
                                    (C(),
                                    (0, u.popLayer)(),
                                    g(),
                                    (null == en ? void 0 : en.type) ===
                                      r.CollectiblesItemType.AVATAR_DECORATION)
                                  ) {
                                    (0, E.openAvatarDecorationModal)({
                                      initialSelectedDecoration: en,
                                      analyticsLocations: L,
                                    });
                                    return;
                                  }
                                  (null == en ? void 0 : en.type) ===
                                    r.CollectiblesItemType.PROFILE_EFFECT &&
                                    (0, h.openProfileEffectModal)({
                                      initialSelectedEffectId: en.id,
                                      analyticsLocations: L,
                                    });
                                },
                                children:
                                  $.default.Messages.COLLECTIBLES_USE_NOW,
                              })
                            : U
                              ? (0, a.jsx)(d.Button, {
                                  style: P,
                                  className: ee.button,
                                  look: d.Button.Looks.FILLED,
                                  submitting: _,
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
                                        analyticsLocations: L,
                                      });
                                  },
                                  children:
                                    $.default.Messages
                                      .COLLECTIBLES_ADD_TO_YOUR_COLLECTION,
                                })
                              : (0, a.jsx)(d.Button, {
                                  style: P,
                                  className: ee.button,
                                  look: d.Button.Looks.FILLED,
                                  onClick: () =>
                                    (0, A.default)({
                                      skuId: t.skuId,
                                      analyticsLocations: L,
                                      onClose: e => (e ? C() : (0, Q.NOOP)()),
                                    }),
                                  children:
                                    (null == en ? void 0 : en.type) ===
                                    r.CollectiblesItemType.PROFILE_EFFECT
                                      ? $.default.Messages
                                          .COLLECTIBLES_BUY_PROFILE_EFFECT
                                      : $.default.Messages
                                          .COLLECTIBLES_BUY_DECORATION,
                                })
                          : er($.default.Messages.UNLOCK_WITH_NITRO),
                        !U &&
                          !ei &&
                          (0, a.jsx)(z.default, { product: t, onSuccess: C }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(d.Text, {
                    className: n([ee.disclaimer, b]),
                    variant: "text-xxs/normal",
                    children:
                      null != p
                        ? null
                        : U
                          ? $.default.Messages
                              .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER
                          : (null == en ? void 0 : en.type) ===
                              r.CollectiblesItemType.PROFILE_EFFECT
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
            s = M.default.canUsePremiumProfileCustomization(l),
            i = (0, o.useStateFromStoresObject)([S.default], () =>
              S.default.getAllPending()
            ),
            n = (0, x.default)(l.id),
            d = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value),
            [u] = t.items;
          return (0, a.jsxs)("div", {
            className:
              (null == u ? void 0 : u.type) ===
              r.CollectiblesItemType.AVATAR_DECORATION
                ? ee.previewsContainerInner
                : ee.profileEffectPreviewsContainerInner,
            children: [
              (0, a.jsx)(g.default, {
                ...i,
                user: l,
                canUsePremiumCustomization: s,
                onAvatarChange: Q.NOOP,
                onBannerChange: Q.NOOP,
                bodyClassName: ee.profileCustomizationBody,
                pendingAvatarDecoration:
                  (null == u ? void 0 : u.type) ===
                  r.CollectiblesItemType.AVATAR_DECORATION
                    ? u
                    : void 0,
                pendingProfileEffectId:
                  (null == u ? void 0 : u.type) ===
                  r.CollectiblesItemType.PROFILE_EFFECT
                    ? u.id
                    : void 0,
                forProfileEffectModal:
                  (null == u ? void 0 : u.type) ===
                  r.CollectiblesItemType.PROFILE_EFFECT,
                disabledInputs: !0,
                hideExampleButton: !0,
                hideFakeActivity:
                  (null == u ? void 0 : u.type) ===
                    r.CollectiblesItemType.AVATAR_DECORATION || d,
                hideBioSection:
                  (null == u ? void 0 : u.type) ===
                  r.CollectiblesItemType.AVATAR_DECORATION,
                hideMemberStatusSection:
                  (null == u ? void 0 : u.type) ===
                  r.CollectiblesItemType.AVATAR_DECORATION,
                useLargeBanner: !0,
              }),
              (null == u ? void 0 : u.type) ===
                r.CollectiblesItemType.AVATAR_DECORATION &&
                (0, a.jsx)(eo, { user: l }),
            ],
          });
        },
        er = e => {
          let { author: t } = e,
            l = (0, I.createMessageRecord)({
              ...(0, L.default)({
                author: t,
                channelId: "1337",
                content: $.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT,
              }),
              state: q.MessageStates.SENT,
              id: "0",
            });
          return l;
        },
        eo = e => {
          let { user: t } = e,
            l = er({ author: t });
          return (0, a.jsx)(d.FocusBlock, {
            children: (0, a.jsxs)(d.Card, {
              className: ee.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, a.jsx)(
                  p.default,
                  {
                    className: ee.mockMessage,
                    author: (0, f.getMessageAuthor)(l),
                    message: l,
                  },
                  l.id
                ),
                (0, a.jsxs)("div", {
                  className: ee.mockInput,
                  children: [
                    (0, a.jsx)(b.default, {
                      className: ee.mockInputButton,
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)(y.default, {
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
      var ed = e => {
        var t, l;
        let {
            transitionState: i,
            onClose: n,
            product: u,
            category: c,
            returnRef: E,
            analyticsSource: m,
            analyticsLocations: I,
          } = e,
          L = (0, o.useStateFromStores)([N.default], () =>
            N.default.getCurrentUser()
          ),
          { analyticsLocations: f } = (0, T.default)([
            ...I,
            C.default.COLLECTIBLES_SHOP_DETAILS_MODAL,
          ]);
        (0, U.useProductDetailsLinkableRoute)(u);
        let [p] = u.items;
        return (s.useEffect(() => {
          let e =
            (null == p ? void 0 : p.type) ===
            r.CollectiblesItemType.AVATAR_DECORATION
              ? "avatar decoration"
              : "profile effect";
          return (
            P.default.track(q.AnalyticEvents.OPEN_MODAL, {
              type: q.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: m,
              location_stack: f,
              sku_id: u.skuId,
              product_type: e,
            }),
            u.items.map(D.productDetailsOpened),
            () => {
              u.items.map(D.productDetailsClosed);
            }
          );
        }, [m, f, u.skuId, u.items, null == p ? void 0 : p.type]),
        null == L)
          ? null
          : (0, a.jsx)(T.AnalyticsLocationProvider, {
              value: f,
              children: (0, a.jsx)(d.ModalRoot, {
                hideShadow: !0,
                className: ee.modalRoot,
                returnRef: E,
                transitionState: i,
                size: d.ModalSize.DYNAMIC,
                children: (0, a.jsxs)(d.ModalContent, {
                  className: ee.modalContent,
                  children: [
                    (0, a.jsx)(ei, {
                      user: L,
                      product: u,
                      category: c,
                      onClose: n,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        (null == p ? void 0 : p.type) ===
                        r.CollectiblesItemType.AVATAR_DECORATION
                          ? ee.collectiblePreviewsContainerWithChat
                          : ee.collectiblePreviewsContainerNoChat,
                      children: [
                        (0, a.jsx)(F.default, {
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
                        (0, a.jsx)(en, { user: L, product: u }),
                      ],
                    }),
                    (0, a.jsx)(d.ModalCloseButton, {
                      onClick: n,
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
            return T;
          },
        });
      var a = l("37983"),
        s = l("884691"),
        i = l("414456"),
        n = l.n(i),
        r = l("634807"),
        o = l("780571"),
        d = l("39331"),
        u = l("596368"),
        c = l("227439"),
        C = l("5762"),
        T = s.memo(function (e) {
          var t;
          let {
              message: l,
              channel: s,
              compact: i,
              className: T,
              isGroupStart: E,
              hideSimpleEmbedContent: m = !0,
              disableInteraction: I,
            } = e,
            L = (0, r.isMessageNewerThanImprovedMarkdownEpoch)(
              (null !== (t = l.editedTimestamp) && void 0 !== t
                ? t
                : l.timestamp
              ).valueOf()
            ),
            { content: f } = (0, d.default)(l, {
              hideSimpleEmbedContent: m,
              allowList: L,
              allowHeading: L,
              allowLinks: !0,
              previewLinkTarget: !0,
            });
          return (0, a.jsx)(o.default, {
            compact: i,
            className: n(T, {
              [C.message]: !0,
              [C.cozyMessage]: !i,
              [C.groupStart]: E,
            }),
            childrenHeader: (0, c.default)({
              ...e,
              channel: s,
              guildId: void 0,
            }),
            childrenMessageContent: (0, u.default)(e, f),
            disableInteraction: I,
          });
        });
    },
  },
]);
//# sourceMappingURL=08240714595222e1013e.js.map

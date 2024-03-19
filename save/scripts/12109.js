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
        o = l("265586"),
        r = l("77078"),
        d = l("782340"),
        u = l("483665");
      function c(e) {
        var t;
        let { item: l, isDarkText: s = !1 } = e;
        let c =
          ((t = null == l ? void 0 : l.type),
          (0, n.match)(t)
            .with(
              o.CollectiblesItemType.AVATAR_DECORATION,
              () => d.default.Messages.USER_SETTINGS_AVATAR_DECORATION
            )
            .with(
              o.CollectiblesItemType.PROFILE_EFFECT,
              () => d.default.Messages.USER_SETTINGS_PROFILE_EFFECT
            )
            .otherwise(() => null));
        return null === c
          ? null
          : (0, a.jsx)(r.Text, {
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
            return eu;
          },
        }),
        l("222007");
      var a = l("37983"),
        s = l("884691"),
        i = l("414456"),
        n = l.n(i),
        o = l("265586"),
        r = l("65597"),
        d = l("77078"),
        u = l("54239"),
        c = l("152584"),
        C = l("812204"),
        T = l("685665"),
        E = l("606292"),
        m = l("688318"),
        I = l("692038"),
        f = l("815297"),
        L = l("574073"),
        p = l("291655"),
        A = l("946964"),
        _ = l("649844"),
        O = l("635956"),
        v = l("38766"),
        h = l("184900"),
        g = l("493390"),
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
        B = l("98148"),
        F = l("677257"),
        U = l("716120"),
        w = l("89569"),
        V = l("665484"),
        H = l("342676"),
        z = l("419513"),
        W = l("450492"),
        G = l("920580"),
        Y = l("791309"),
        K = l("54809"),
        X = l("408381"),
        Z = l("264579"),
        q = l("380171"),
        J = l("49111"),
        Q = l("646718"),
        $ = l("843455"),
        ee = l("782340"),
        et = l("219591"),
        el = l("53708");
      let ea = d.AvatarSizes.SIZE_152,
        es = (0, E.getDecorationSizeForAvatarSize)(ea),
        ei = e => {
          let { text: t } = e,
            { analyticsLocations: l } = (0, T.default)(),
            i = s.useRef(null);
          return (0, a.jsx)(d.Clickable, {
            className: et.subscribeNow,
            innerRef: i,
            onClick: () => {
              (0, _.default)({
                subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: l,
                returnRef: i,
              });
            },
            children: t,
          });
        },
        en = e => {
          let {
              product: t,
              user: l,
              category: i,
              onClose: C,
              returnRef: I,
            } = e,
            { analyticsLocations: f } = (0, T.default)(),
            L = M.default.canUseCollectibles(l),
            [p, _] = (0, r.useStateFromStoresArray)([j.default], () => [
              j.default.getPurchase(t.skuId),
              j.default.isClaiming === t.skuId,
            ]),
            { productDetailModalDescriptionHidden: h } = (0, B.default)({
              location: "CollectiblesShopProductDetailsModal",
            }),
            x = (0, v.default)({ analyticsLocations: f }),
            {
              buttonColors: S,
              backgroundColors: N,
              isDarkText: y,
            } = (0, F.default)(t.styles),
            b = !0 === y,
            P = b ? et.darkText : et.lightText,
            U =
              null != S
                ? {
                    background: (0, X.getBackgroundGradient)(S, 90),
                    color: S.text.toHslString(),
                  }
                : void 0,
            w =
              null != N
                ? { background: (0, X.getBackgroundGradient)(N, 135) }
                : void 0,
            q = (0, k.isPremiumCollectiblesProduct)(t),
            en = (0, k.extractPriceByPurchaseTypes)(
              t,
              J.PriceSetAssignmentPurchaseTypes.DEFAULT
            ),
            eo = (null == en ? void 0 : en.amount) === 0,
            [er] = t.items;
          s.useEffect(() => {
            if (
              (null == er ? void 0 : er.type) ===
              o.CollectiblesItemType.AVATAR_DECORATION
            )
              return (
                (0, c.setPendingAvatarDecoration)(er),
                () => (0, c.setPendingAvatarDecoration)(void 0)
              );
          }, [er]);
          let ed = e =>
              (0, a.jsx)(O.default, {
                subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: K.closeCollectiblesShopProductDetailsModal,
                onSubscribeModalClose: () => {
                  (0, K.openCollectiblesShopProductDetailsModal)({
                    product: t,
                    category: i,
                    returnRef: I,
                    analyticsLocations: f,
                  });
                },
              }),
            { avatarDecorationSrc: eu, eventHandlers: ec } = (0, m.default)({
              user: l,
              avatarDecorationOverride:
                (null == er ? void 0 : er.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION
                  ? er
                  : null,
              size: es,
            });
          return (0, a.jsxs)("div", {
            className: et.collectibleInfoContainer,
            style: w,
            children: [
              (0, a.jsxs)("div", {
                className: et.titleContainer,
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)("img", {
                      className: et.titleImage,
                      src: (0, k.getCollectiblesAssetURL)(i.logo, {
                        size: z.LOGO_SIZE,
                      }),
                      alt: i.name,
                    }),
                  }),
                  (0, a.jsx)(H.default, { category: i, display: "modal" }),
                ],
              }),
              (null == er ? void 0 : er.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION &&
                (0, a.jsx)("div", {
                  className: et.avatarPreviewContainer,
                  children: (0, a.jsx)(d.Avatar, {
                    ...ec,
                    "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR,
                    size: ea,
                    avatarDecoration: eu,
                    src: el,
                  }),
                }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("div", {
                    className: et.description,
                    children: [
                      (0, a.jsx)(V.default, { item: er, isDarkText: b }),
                      (0, a.jsx)(d.Heading, {
                        variant: "heading-xl/extrabold",
                        className: n([et.headingWithItemTypePill, P]),
                        children: t.name,
                      }),
                      !h &&
                        (0, a.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          className: P,
                          children: t.summary,
                        }),
                      (() => {
                        if (null != p)
                          return (0, a.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            className: n([et.priceTag, P]),
                            children:
                              ee.default.Messages.COLLECTIBLES_ALREADY_OWNED,
                          });
                        if (q)
                          return (0, a.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            className: n([et.priceTag, P]),
                            children:
                              ee.default.Messages
                                .COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                          });
                        if (L)
                          return (0, a.jsx)(G.default, {
                            product: t,
                            className: et.priceTag,
                            innerClassName: P,
                            alwaysWhiteText: !b,
                            nitroWheelColor: !0 === b ? "black" : "white",
                          });
                        if (null == en) return null;
                        let e = (0, k.extractPriceByPurchaseTypes)(
                          t,
                          J.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2
                        );
                        return (0, a.jsxs)("div", {
                          className: et.priceTagContainer,
                          children: [
                            (0, a.jsx)(Y.default, { price: en }),
                            null != e &&
                              !eo &&
                              (0, a.jsx)(Y.default, {
                                price: e,
                                variant: "text-xs/medium",
                                alwaysWhiteText: !b,
                                className: n([et.premiumPriceTag, P]),
                                renderPrice: e =>
                                  ee.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format(
                                    {
                                      price: e,
                                      subscribeNowHook: e =>
                                        (0, a.jsx)(ei, { text: e }),
                                    }
                                  ),
                                icon: (0, a.jsx)(d.Tooltip, {
                                  text: ee.default.Messages
                                    .COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                  "aria-label":
                                    ee.default.Messages
                                      .COLLECTIBLES_NITRO_EXCLUSIVE,
                                  children: e => {
                                    let { ...t } = e;
                                    return (0, a.jsx)(R.default, {
                                      ...t,
                                      className: et.premiumPriceTagIcon,
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
                    className: et.buttonsContainer,
                    children: (0, a.jsxs)("div", {
                      className: et.primaryButtons,
                      children: [
                        !q || L || eo
                          ? null != p
                            ? (0, a.jsx)(d.Button, {
                                style: U,
                                className: et.button,
                                look: d.Button.Looks.FILLED,
                                onClick: () => {
                                  if (
                                    (C(),
                                    (0, u.popLayer)(),
                                    x(),
                                    (null == er ? void 0 : er.type) ===
                                      o.CollectiblesItemType.AVATAR_DECORATION)
                                  ) {
                                    (0, E.openAvatarDecorationModal)({
                                      initialSelectedDecoration: er,
                                      analyticsLocations: f,
                                    });
                                    return;
                                  }
                                  (null == er ? void 0 : er.type) ===
                                    o.CollectiblesItemType.PROFILE_EFFECT &&
                                    (0, g.openProfileEffectModal)({
                                      initialSelectedEffectId: er.id,
                                      analyticsLocations: f,
                                    });
                                },
                                children:
                                  ee.default.Messages.COLLECTIBLES_USE_NOW,
                              })
                            : q
                              ? (0, a.jsx)(d.Button, {
                                  style: U,
                                  className: et.button,
                                  look: d.Button.Looks.FILLED,
                                  submitting: _,
                                  submittingStartedLabel:
                                    ee.default.Messages.COLLECTIBLES_COLLECTING,
                                  submittingFinishedLabel:
                                    ee.default.Messages
                                      .COLLECTIBLES_COLLECTING_FINISHED,
                                  onClick: async () => {
                                    await (0,
                                    D.claimPremiumCollectiblesProduct)(t.skuId),
                                      C(),
                                      (0, Z.default)({
                                        product: t,
                                        analyticsLocations: f,
                                      });
                                  },
                                  children:
                                    ee.default.Messages
                                      .COLLECTIBLES_ADD_TO_YOUR_COLLECTION,
                                })
                              : (0, a.jsx)(d.Button, {
                                  style: U,
                                  className: et.button,
                                  look: d.Button.Looks.FILLED,
                                  onClick: () =>
                                    (0, A.default)({
                                      skuId: t.skuId,
                                      analyticsLocations: f,
                                      onClose: e => (e ? C() : (0, $.NOOP)()),
                                    }),
                                  children:
                                    (null == er ? void 0 : er.type) ===
                                    o.CollectiblesItemType.PROFILE_EFFECT
                                      ? ee.default.Messages
                                          .COLLECTIBLES_BUY_PROFILE_EFFECT
                                      : ee.default.Messages
                                          .COLLECTIBLES_BUY_DECORATION,
                                })
                          : ed(ee.default.Messages.UNLOCK_WITH_NITRO),
                        !q &&
                          !eo &&
                          (0, a.jsx)(W.default, { product: t, onSuccess: C }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(d.Text, {
                    className: n([et.disclaimer, P]),
                    variant: "text-xxs/normal",
                    children:
                      null != p
                        ? null
                        : q
                          ? ee.default.Messages
                              .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER
                          : (null == er ? void 0 : er.type) ===
                              o.CollectiblesItemType.PROFILE_EFFECT
                            ? ee.default.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER
                            : ee.default.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER,
                  }),
                ],
              }),
            ],
          });
        },
        eo = e => {
          let { product: t, user: l } = e,
            s = M.default.canUsePremiumProfileCustomization(l),
            i = (0, r.useStateFromStoresObject)([S.default], () =>
              S.default.getAllPending()
            ),
            n = (0, x.default)(l.id),
            d = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value),
            [u] = t.items;
          return (0, a.jsxs)("div", {
            className:
              (null == u ? void 0 : u.type) ===
              o.CollectiblesItemType.AVATAR_DECORATION
                ? et.previewsContainerInner
                : et.profileEffectPreviewsContainerInner,
            children: [
              (0, a.jsx)(h.default, {
                ...i,
                user: l,
                canUsePremiumCustomization: s,
                onAvatarChange: $.NOOP,
                onBannerChange: $.NOOP,
                bodyClassName: et.profileCustomizationBody,
                pendingAvatarDecoration:
                  (null == u ? void 0 : u.type) ===
                  o.CollectiblesItemType.AVATAR_DECORATION
                    ? u
                    : void 0,
                pendingProfileEffectId:
                  (null == u ? void 0 : u.type) ===
                  o.CollectiblesItemType.PROFILE_EFFECT
                    ? u.id
                    : void 0,
                forProfileEffectModal:
                  (null == u ? void 0 : u.type) ===
                  o.CollectiblesItemType.PROFILE_EFFECT,
                disabledInputs: !0,
                hideExampleButton: !0,
                hideFakeActivity:
                  (null == u ? void 0 : u.type) ===
                    o.CollectiblesItemType.AVATAR_DECORATION || d,
                hideBioSection:
                  (null == u ? void 0 : u.type) ===
                  o.CollectiblesItemType.AVATAR_DECORATION,
                hideMemberStatusSection:
                  (null == u ? void 0 : u.type) ===
                  o.CollectiblesItemType.AVATAR_DECORATION,
                useLargeBanner: !0,
              }),
              (null == u ? void 0 : u.type) ===
                o.CollectiblesItemType.AVATAR_DECORATION &&
                (0, a.jsx)(ed, { user: l }),
            ],
          });
        },
        er = e => {
          let { author: t } = e,
            l = (0, I.createMessageRecord)({
              ...(0, f.default)({
                author: t,
                channelId: "1337",
                content: ee.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT,
              }),
              state: J.MessageStates.SENT,
              id: "0",
            });
          return l;
        },
        ed = e => {
          let { user: t } = e,
            l = er({ author: t });
          return (0, a.jsx)(d.FocusBlock, {
            children: (0, a.jsxs)(d.Card, {
              className: et.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, a.jsx)(
                  p.default,
                  {
                    className: et.mockMessage,
                    author: (0, L.getMessageAuthor)(l),
                    message: l,
                  },
                  l.id
                ),
                (0, a.jsxs)("div", {
                  className: et.mockInput,
                  children: [
                    (0, a.jsx)(b.default, {
                      className: et.mockInputButton,
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)(y.default, {
                      className: et.mockInputButton,
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
            onClose: n,
            product: u,
            category: c,
            returnRef: E,
            analyticsSource: m,
            analyticsLocations: I,
          } = e,
          f = (0, r.default)([N.default], () => N.default.getCurrentUser()),
          { analyticsLocations: L, AnalyticsLocationProvider: p } = (0,
          T.default)([...I, C.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, w.useProductDetailsLinkableRoute)(u);
        let [A] = u.items;
        return (s.useEffect(() => {
          let e =
            (null == A ? void 0 : A.type) ===
            o.CollectiblesItemType.AVATAR_DECORATION
              ? "avatar decoration"
              : "profile effect";
          return (
            P.default.track(J.AnalyticEvents.OPEN_MODAL, {
              type: J.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: m,
              location_stack: L,
              sku_id: u.skuId,
              product_type: e,
            }),
            u.items.map(D.productDetailsOpened),
            () => {
              u.items.map(D.productDetailsClosed);
            }
          );
        }, [m, L, u.skuId, u.items, null == A ? void 0 : A.type]),
        null == f)
          ? null
          : (0, a.jsx)(p, {
              children: (0, a.jsx)(d.ModalRoot, {
                hideShadow: !0,
                className: et.modalRoot,
                returnRef: E,
                transitionState: i,
                size: d.ModalSize.DYNAMIC,
                children: (0, a.jsxs)(d.ModalContent, {
                  className: et.modalContent,
                  children: [
                    (0, a.jsx)(en, {
                      user: f,
                      product: u,
                      category: c,
                      onClose: n,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        (null == A ? void 0 : A.type) ===
                        o.CollectiblesItemType.AVATAR_DECORATION
                          ? et.collectiblePreviewsContainerWithChat
                          : et.collectiblePreviewsContainerNoChat,
                      children: [
                        (0, a.jsx)(U.default, {
                          assetUrlOverride:
                            null === (t = q.categoryBannerOverrides[c.skuId]) ||
                            void 0 === t
                              ? void 0
                              : t.assetUrlOverride,
                          asset: u.banner,
                          addGradient:
                            null === (l = q.categoryBannerOverrides[c.skuId]) ||
                            void 0 === l
                              ? void 0
                              : l.addGradient,
                          size: (0, X.getAssetSizeByHeight)(540),
                          className: et.categoryBanner,
                        }),
                        (0, a.jsx)(eo, { user: f, product: u }),
                      ],
                    }),
                    (0, a.jsx)(d.ModalCloseButton, {
                      onClick: n,
                      className: et.modalCloseButton,
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
        o = l("634807"),
        r = l("780571"),
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
            f = (0, o.isMessageNewerThanImprovedMarkdownEpoch)(
              (null !== (t = l.editedTimestamp) && void 0 !== t
                ? t
                : l.timestamp
              ).valueOf()
            ),
            { content: L } = (0, d.default)(l, {
              hideSimpleEmbedContent: m,
              allowList: f,
              allowHeading: f,
              allowLinks: !0,
              previewLinkTarget: !0,
            });
          return (0, a.jsx)(r.default, {
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
            childrenMessageContent: (0, u.default)(e, L),
            disableInteraction: I,
          });
        });
    },
  },
]);
//# sourceMappingURL=195fa28d945a1e8ccef8.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13554"],
  {
    551290: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f156f6c8b61734c205fc.png";
    },
    513002: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f328a6f8209d4f1f5022.png";
    },
    777273: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          fetchUserAffinities: function () {
            return r;
          },
        });
      var n = s("872717"),
        l = s("913144"),
        a = s("843823"),
        i = s("49111");
      function r() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.default.needsRefresh()
          ? (l.default.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            n.default
              .get({
                url: i.Endpoints.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                e => {
                  let { body: t } = e;
                  l.default.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  l.default.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                }
              ))
          : Promise.resolve();
      }
    },
    87657: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        a = s("77078"),
        i = s("390236"),
        r = l.memo(function (e) {
          var t, s, r, u;
          let {
              user: d,
              size: o = a.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": f = !1,
              ...S
            } = e,
            E = l.useContext(i.default);
          return (0, n.jsx)(a.Avatar, {
            src:
              ((t = d),
              (s = (0, a.getAvatarSize)(o)),
              (r = c),
              (u = E),
              t.getAvatarURL(u, s, r)),
            size: o,
            "aria-label": f ? void 0 : d.username,
            "aria-hidden": f,
            ...S,
          });
        });
    },
    162848: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return P;
          },
        }),
        s("222007");
      var n = s("37983");
      s("884691");
      var l = s("414456"),
        a = s.n(l),
        i = s("265586"),
        r = s("446674"),
        u = s("77078"),
        d = s("606292"),
        o = s("688318"),
        c = s("635357"),
        f = s("184900"),
        S = s("845962"),
        E = s("506885"),
        I = s("697218"),
        _ = s("153160"),
        p = s("426188"),
        T = s("49111"),
        C = s("782340"),
        m = s("249835"),
        A = s("513002");
      let N = e => {
          let { avatarDecoration: t } = e,
            s = (0, r.useStateFromStores)([I.default], () =>
              I.default.getCurrentUser()
            ),
            { avatarDecorationSrc: l } = (0, o.default)({
              user: s,
              avatarDecorationOverride: t,
              size: (0, d.getDecorationSizeForAvatarSize)(
                u.AvatarSizes.SIZE_40
              ),
            });
          return (0, n.jsx)("img", {
            src: l,
            alt: t.label,
            className: m.avatarDecoration,
          });
        },
        h = e => {
          var t;
          let { profileEffect: s } = e,
            l = (0, r.useStateFromStores)([S.default], () =>
              S.default.getProfileEffectById(s.id)
            ),
            {
              accessibilityLabel: a,
              thumbnailPreviewSrc: i,
              title: u,
            } = null !== (t = null == l ? void 0 : l.config) && void 0 !== t
              ? t
              : {};
          return (0, n.jsxs)("div", {
            className: m.profileEffectContainer,
            children: [
              (0, n.jsx)("img", {
                src: A,
                alt: a,
                className: m.profileEffectBackground,
              }),
              (0, n.jsx)("img", { className: m.profileEffect, src: i, alt: u }),
            ],
          });
        };
      var P = e => {
        let { selectedSkuId: t, selectedSkuPricePreview: s, className: l } = e,
          { product: d } = (0, p.useFetchCollectiblesProduct)(t),
          { giftRecipient: o, giftRecipientError: S } = (0, c.useGiftContext)(),
          A = (0, r.useStateFromStores)([I.default], () =>
            I.default.getCurrentUser()
          );
        if (null == d || null == s) return null;
        let [P] = d.items,
          g = null != o && o.id !== (null == A ? void 0 : A.id);
        return (0, n.jsxs)("div", {
          className: l,
          children: [
            (0, n.jsxs)("div", {
              className: m.previewTitleContainer,
              children: [
                (0, n.jsx)(u.FormTitle, {
                  className: m.previewTitle,
                  children: C.default.Messages.COLLECTIBLES_GIFT_LABEL,
                }),
                g &&
                  (0, n.jsx)(
                    u.Popout,
                    {
                      preload: () =>
                        (0, E.default)(o.id, o.getAvatarURL(null, 80)),
                      renderPopout: e =>
                        (0, n.jsx)(f.default, {
                          ...e,
                          user: o,
                          pendingAvatar: o.getAvatarURL(
                            null,
                            (0, u.getAvatarSize)(u.AvatarSizes.SIZE_80)
                          ),
                          pendingAvatarDecoration:
                            P.type === i.CollectiblesItemType.AVATAR_DECORATION
                              ? P
                              : null,
                          pendingProfileEffectId:
                            P.type === i.CollectiblesItemType.PROFILE_EFFECT
                              ? P.id
                              : null,
                          canUsePremiumCustomization: !0,
                          onAvatarChange: T.NOOP,
                          onBannerChange: T.NOOP,
                          disabledInputs: !0,
                        }),
                      align: "center",
                      position: "right",
                      children: e =>
                        (0, n.jsx)(u.Clickable, {
                          ...e,
                          className: m.previewLink,
                          children: (0, n.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-link",
                            children:
                              C.default.Messages
                                .COLLECTIBLES_PREVIEW_GIFT_PROFILE,
                          }),
                        }),
                    },
                    o.id
                  ),
              ],
            }),
            (0, n.jsxs)("div", {
              className: a(m.previewContainer, {
                [m.previewContainerError]: null != S,
              }),
              children: [
                P.type === i.CollectiblesItemType.AVATAR_DECORATION &&
                  (0, n.jsx)(N, { avatarDecoration: P }),
                P.type === i.CollectiblesItemType.PROFILE_EFFECT &&
                  (0, n.jsx)(h, { profileEffect: P }),
                (0, n.jsxs)("div", {
                  className: m.previewTextContainer,
                  children: [
                    (0, n.jsx)(u.Text, {
                      variant: "text-md/semibold",
                      children: d.name,
                    }),
                    (0, n.jsx)(u.Heading, {
                      variant: "heading-sm/medium",
                      color: "header-secondary",
                      children:
                        P.type === i.CollectiblesItemType.AVATAR_DECORATION
                          ? C.default.Messages.USER_SETTINGS_AVATAR_DECORATION
                          : P.type === i.CollectiblesItemType.PROFILE_EFFECT
                            ? C.default.Messages.USER_SETTINGS_PROFILE_EFFECT
                            : null,
                    }),
                  ],
                }),
                (0, n.jsx)(u.Text, {
                  variant: "text-md/semibold",
                  children: (0, _.formatPrice)(s.amount, s.currency),
                }),
              ],
            }),
            null != S &&
              (0, n.jsx)(u.Text, {
                className: m.recipientError,
                variant: "text-sm/normal",
                color: "status-danger-background",
                children: S,
              }),
          ],
        });
      };
    },
    349133: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return S;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("446674"),
        a = s("77078"),
        i = s("87657"),
        r = s("635357"),
        u = s("27618"),
        d = s("697218"),
        o = s("158998"),
        c = s("21526"),
        f = s("782340"),
        S = e => {
          let { selectedSkuId: t, className: s } = e,
            S = (0, l.useStateFromStoresArray)([u.default], () =>
              u.default.getFriendIDs()
            ),
            E = (0, l.useStateFromStoresArray)(
              [d.default],
              () => d.default.filter(e => S.includes(e.id) && !e.bot),
              [S]
            ),
            {
              giftRecipient: I,
              setGiftRecipient: _,
              giftRecipientError: p,
              setGiftRecipientError: T,
              setValidatingGiftRecipient: C,
            } = (0, r.useGiftContext)();
          if (null == t) return null;
          let m = async e => {
            C(!0), null != p && T(), _(e);
            let s = await (0, c.validateCollectiblesRecipient)(e.id, t);
            !s && T(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED),
              C(!1);
          };
          return (0, n.jsxs)("div", {
            className: s,
            children: [
              (0, n.jsx)(a.FormTitle, {
                children: f.default.Messages.FORM_LABEL_SEND_TO,
              }),
              (0, n.jsx)(a.SearchableSelect, {
                placeholder:
                  f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                renderOptionPrefix: e =>
                  (null == e ? void 0 : e.value) == null
                    ? null
                    : (0, n.jsx)(i.default, {
                        user: e.value,
                        size: a.AvatarSizes.SIZE_20,
                      }),
                value: I,
                onChange: m,
                options: E.map(e => ({
                  value: e,
                  label: "".concat(o.default.getUserTag(e)),
                })),
              }),
            ],
          });
        };
    },
    639137: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        }),
        s("794252");
      var n = s("37983");
      s("884691");
      var l = s("414456"),
        a = s.n(l),
        i = s("506838"),
        r = s("77078"),
        u = s("85336"),
        d = s("782340"),
        o = s("95968");
      function c(e) {
        let { step: t, onClose: s } = e,
          l = (0, i.match)(t)
            .with(
              u.Step.REVIEW,
              () =>
                d.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER
            )
            .with(
              u.Step.ADD_PAYMENT_STEPS,
              () => d.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE
            )
            .with(
              u.Step.GIFT_CUSTOMIZATION,
              () =>
                d.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER
            )
            .with(
              u.Step.AWAITING_PURCHASE_TOKEN_AUTH,
              () => d.default.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING
            )
            .with(u.Step.CONFIRM, () => "")
            .otherwise(() => null);
        return null == l
          ? null
          : (0, n.jsxs)(r.ModalHeader, {
              className: a(o.headerContainerGift),
              separator: t !== u.Step.CONFIRM,
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: l,
                }),
                (0, n.jsx)(r.ModalCloseButton, {
                  onClick: s,
                  className: o.closeButtonGift,
                }),
              ],
            });
      }
    },
    894742: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("516555"),
        i = s("812204"),
        r = s("685665"),
        u = s("635357"),
        d = s("642906"),
        o = s("85336"),
        c = s("385179"),
        f = s("292215"),
        S = s("639137"),
        E = s("526139"),
        I = s("158184"),
        _ = s("385890"),
        p = s("337978"),
        T = s("49111"),
        C = s("843455"),
        m = s("773232");
      function A(e) {
        let {
            onClose: t,
            onComplete: s,
            transitionState: A,
            loadId: N,
            skuId: h,
            isGift: P = !1,
            giftRecipient: g,
            giftMessage: O,
            analyticsLocations: x,
            returnRef: R,
          } = e,
          { analyticsLocations: L, AnalyticsLocationProvider: v } = (0,
          r.default)([...x, i.default.COLLECTIBLES_PAYMENT_MODAL]),
          M = l.useRef(new a.Environment()),
          [F, j] = l.useState(null),
          y = [
            f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG,
            _.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP,
            E.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG,
            ...f.SHARED_STEP_CONFIGS,
            f.REVIEW_STEP_CONFIG,
            {
              key: o.Step.CONFIRM,
              renderStep: e =>
                (0, n.jsx)(I.CollectiblesPaymentModalConfirmStep, {
                  ...e,
                  confettiCanvas: F,
                  analyticsLocations: L,
                }),
              options: {
                bodyClassName: m.modalOverrideBody,
                sliderBodyClassName: m.modalOverrideSliderBody,
              },
            },
          ];
        return (0, n.jsxs)(v, {
          children: [
            (0, n.jsx)(a.ConfettiCanvas, {
              ref: j,
              className: m.confettiCanvas,
              environment: M.current,
            }),
            (0, n.jsx)(d.PaymentContextProvider, {
              loadId: N,
              stepConfigs: y,
              applicationId: T.COLLECTIBLES_APPLICATION_ID,
              skuIDs: [h],
              isGift: P,
              activeSubscription: null,
              purchaseType: C.PurchaseTypes.ONE_TIME,
              children: (0, n.jsx)(u.GiftContextProvider, {
                isGift: P,
                giftRecipient: g,
                giftMessage: O,
                children: (0, n.jsx)(c.PaymentModal, {
                  onClose: t,
                  onComplete: s,
                  applicationId: T.COLLECTIBLES_APPLICATION_ID,
                  skuId: h,
                  initialPlanId: null,
                  analyticsLocations: L,
                  transitionState: A,
                  renderHeader: (e, t, s) =>
                    P
                      ? (0, n.jsx)(S.default, { step: s, onClose: () => t(!1) })
                      : (0, n.jsx)(p.default, {
                          step: s,
                          onClose: () => t(!1),
                        }),
                  returnRef: R,
                  hideShadow: !0,
                }),
              }),
            }),
          ],
        });
      }
    },
    526139: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("357957"),
        a = s("635357"),
        i = s("85336"),
        r = s("262683");
      let u = {
        key: i.Step.ADD_PAYMENT_STEPS,
        renderStep: e => (0, n.jsx)(d, { ...e }),
        options: { renderHeader: !0 },
      };
      function d(e) {
        let { isGift: t } = (0, a.useGiftContext)();
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(r.PaymentModalAddPaymentStep, {
            ...e,
            breadcrumbSteps: [
              i.Step.ADD_PAYMENT_STEPS,
              i.Step.REVIEW,
              i.Step.CONFIRM,
            ],
            onReturn: () => {
              let s = l.default.paymentSources;
              if (0 === Object.keys(s).length) {
                if (t) {
                  e.handleStepChange(i.Step.GIFT_CUSTOMIZATION);
                  return;
                }
                e.handleClose();
              } else
                e.handleStepChange(i.Step.REVIEW, {
                  trackedFromStep: i.Step.ADD_PAYMENT_STEPS,
                });
            },
          }),
        });
      }
    },
    158184: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CollectiblesPaymentModalConfirmStep: function () {
            return m;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        a = s("627445"),
        i = s.n(a),
        r = s("65597"),
        u = s("206230"),
        d = s("853987"),
        o = s("677257"),
        c = s("923702"),
        f = s("658756"),
        S = s("408381"),
        E = s("635357"),
        I = s("642906"),
        _ = s("891865"),
        p = s("650484"),
        T = s("367767");
      function C(e) {
        let { handleClose: t, confettiCanvas: s, analyticsLocations: l } = e,
          {
            skusById: a,
            selectedSkuId: u,
            application: o,
          } = (0, I.usePaymentContext)(),
          c = (0, r.default)([d.default], () => d.default.getProduct(u));
        i(null != u, "Expected selectedSkuId"),
          i(null != o, "Expected application");
        let S = a[u];
        return (i(null != S, "Expected sku"), null == c)
          ? null
          : (0, n.jsxs)(p.PaymentPortalBody, {
              children: [
                (0, n.jsx)(T.default, {}),
                (0, n.jsx)(f.CollectiblesCollectedModalInner, {
                  product: c,
                  onClose: t,
                  confettiCanvas: s,
                  analyticsLocations: l,
                }),
              ],
            });
      }
      function m(e) {
        let {
            isGift: t,
            giftCode: s,
            selectedGiftStyle: a,
            hasSentMessage: i,
            giftRecipient: f,
            giftMessageError: p,
            isSendingMessage: T,
          } = (0, E.useGiftContext)(),
          m = (0, r.default)([u.default], () => u.default.useReducedMotion),
          A = l.useRef(null),
          { selectedSkuId: N } = (0, I.usePaymentContext)(),
          h = (0, r.default)([d.default], () => d.default.getProduct(N)),
          { confettiColors: P } = (0, o.default)(null == h ? void 0 : h.styles);
        return t
          ? (0, n.jsxs)("div", {
              ref: A,
              children: [
                (0, n.jsx)(_.default, {
                  giftCode: s,
                  onClose: e.handleClose,
                  selectedGiftStyle: a,
                  hasSentMessage: i,
                  giftRecipient: f,
                  giftMessageError: p,
                  isSendingMessage: T,
                }),
                !m &&
                  (0, n.jsx)(c.default, {
                    confettiTarget: A.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, S.getConfettiSprites)(
                      null == h ? void 0 : h.categorySkuId
                    ),
                    colors: null == P ? void 0 : P.map(e => e.toHexString()),
                  }),
              ],
            })
          : (0, n.jsx)(C, { ...e });
      }
    },
    385890: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function () {
            return m;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("446674"),
        a = s("77078"),
        i = s("162848"),
        r = s("349133"),
        u = s("705820"),
        d = s("889554"),
        o = s("177998"),
        c = s("697218"),
        f = s("145131"),
        S = s("635357"),
        E = s("642906"),
        I = s("85336"),
        _ = s("650484"),
        p = s("646718"),
        T = s("782340"),
        C = s("645547");
      let m = {
        key: I.Step.GIFT_CUSTOMIZATION,
        renderStep: e => (0, n.jsx)(N, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => T.default.Messages.GIFT_CARD_SELECTION,
        },
      };
      function A(e) {
        let {
            onStepChange: t,
            onBackClick: s,
            showBackButton: l = !1,
            disabled: i = !1,
            loading: r = !1,
          } = e,
          { hasPaymentSources: u } = (0, E.usePaymentContext)(),
          d = u ? I.Step.REVIEW : I.Step.ADD_PAYMENT_STEPS;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(a.Button, {
              onClick: () => t(d),
              disabled: i,
              submitting: r,
              children: T.default.Messages.PAGINATION_NEXT,
            }),
            l ? (0, n.jsx)(o.default, { onClick: s }) : null,
          ],
        });
      }
      function N(e) {
        let { handleStepChange: t, handleClose: s } = e,
          {
            customGiftMessage: o = "",
            setCustomGiftMessage: I,
            giftRecipientError: m,
            validatingGiftRecipient: N,
            giftRecipient: h,
          } = (0, S.useGiftContext)(),
          { selectedSkuId: P, selectedSkuPricePreview: g } = (0,
          E.usePaymentContext)(),
          O = (0, l.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(_.PaymentPortalBody, {
              children: (0, n.jsxs)("div", {
                className: C.stepBody,
                children: [
                  (0, n.jsx)("div", {
                    className: C.bodyColumnMiddle,
                    children: (0, n.jsx)(d.GiftAnimationOptions, {
                      isShopGift: !0,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: C.bodyColumnRight,
                    children: [
                      (0, n.jsx)(r.default, {
                        selectedSkuId: P,
                        className: C.sendTo,
                      }),
                      (0, n.jsx)(u.default, {
                        sectionTitle: T.default.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: e => (null == I ? void 0 : I(e)),
                        pendingText: o,
                        currentText: o,
                        disableThemedBackground: !0,
                        className: C.customGiftMessageWrapper,
                        innerClassName: C.customGiftMessage,
                      }),
                      (0, n.jsx)(i.default, {
                        selectedSkuId: P,
                        selectedSkuPricePreview: g,
                        className: C.giftPreview,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)(_.PaymentPortalFooter, {
              children: (0, n.jsx)(a.ModalFooter, {
                justify: f.default.Justify.BETWEEN,
                align: f.default.Align.CENTER,
                children: (0, n.jsx)(A, {
                  onStepChange: t,
                  onBackClick: s,
                  disabled:
                    null != m ||
                    null == h ||
                    h.id === (null == O ? void 0 : O.id) ||
                    o.length > p.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
                  loading: N,
                }),
              }),
            }),
          ],
        });
      }
    },
    337978: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("77078"),
        a = s("834897"),
        i = s("85336"),
        r = s("101703"),
        u = s("867487"),
        d = s("551290");
      function o(e) {
        let { step: t, onClose: s } = e,
          o = (0, a.default)(r.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
        return t === i.Step.BENEFITS || t === i.Step.CONFIRM
          ? null
          : (0, n.jsxs)("div", {
              className: u.headerContainer,
              children: [
                !o &&
                  (0, n.jsx)("div", {
                    className: u.headerImageContainer,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    children: (0, n.jsx)("img", {
                      src: d,
                      alt: "",
                      className: u.headerImage,
                    }),
                  }),
                (0, n.jsx)(l.ModalCloseButton, {
                  withCircleBackground: !0,
                  className: u.closeButton,
                  onClick: s,
                }),
              ],
            });
      }
    },
    891865: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return M;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("414456"),
        i = s.n(a),
        r = s("917351"),
        u = s.n(r),
        d = s("446674"),
        o = s("77078"),
        c = s("54239"),
        f = s("736964"),
        S = s("777273"),
        E = s("87657"),
        I = s("210721"),
        _ = s("671484"),
        p = s("27618"),
        T = s("102985"),
        C = s("843823"),
        m = s("697218"),
        A = s("920700"),
        N = s("953109"),
        h = s("306160"),
        P = s("659632"),
        g = s("719923"),
        O = s("158998"),
        x = s("49111"),
        R = s("646718"),
        L = s("782340"),
        v = s("164852");
      function M(e) {
        let {
            giftCode: t,
            application: s,
            sku: a,
            subscriptionPlan: r,
            selectedGiftStyle: u,
            onClose: c,
            hasSentMessage: f,
            giftRecipient: S,
            giftMessageError: I,
            isSendingMessage: p,
          } = e,
          [C, m] = l.useState(A.default.Modes.DEFAULT),
          M = (0, d.useStateFromStores)([T.default], () => T.default.enabled),
          j = f || (null != u && null != S),
          y = () => (null != r ? r.skuId : null != a ? a.id : null),
          b = () => {
            let e;
            let t = null != u && R.SeasonalGiftStyles2023.includes(u);
            return null != I
              ? L.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
              : null == r
                ? null
                : (e =
                    r.interval === R.SubscriptionIntervalTypes.MONTH
                      ? j
                        ? t
                          ? L.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                          : L.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                        : L.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY
                      : j
                        ? t
                          ? L.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                          : L.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                        : L.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format(
                    {
                      skuName: (0, g.getTierDisplayName)(r.id),
                      intervalCount: r.intervalCount,
                    }
                  );
          },
          G = (e, t) => {
            null != a &&
              (0, P.trackGiftCodeCopy)(
                new _.default({ code: t, maxUses: 1 }),
                a
              );
            try {
              (0, h.copy)(e), m(A.default.Modes.SUCCESS);
            } catch (e) {
              m(A.default.Modes.ERROR);
            }
            setTimeout(() => {
              m(A.default.Modes.DEFAULT);
            }, 1500);
          },
          U = () => {
            let e;
            if (null == t) return null;
            switch (C) {
              case A.default.Modes.SUCCESS:
                e = L.default.Messages.BILLING_GIFT_COPIED;
                break;
              case A.default.Modes.ERROR:
                e = L.default.Messages.FAILED;
                break;
              default:
                e = L.default.Messages.COPY;
            }
            return (0, n.jsxs)("div", {
              className: v.giftCodeSection,
              children: [
                (0, n.jsx)(o.FormTitle, {
                  children:
                    L.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != t &&
                  (0, n.jsx)(A.default, {
                    hideMessage: M
                      ? L.default.Messages.GIFT_INVENTORY_HIDDEN
                      : null,
                    value: (0, P.getGiftCodeURL)(t),
                    mode: C,
                    text: e,
                    onCopy: e => G(e, t),
                    supportsCopy: h.SUPPORTS_COPY,
                    className: v.copyInput,
                    buttonColor: A.default.ButtonColors.LINK,
                    buttonLook: A.default.ButtonLooks.LINK,
                  }),
                (0, n.jsx)("div", {
                  className: v.subtext,
                  children:
                    L.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        if (p)
          return (0, n.jsxs)("div", {
            className: v.confirmation,
            children: [
              null != s
                ? (0, n.jsx)(N.default, {
                    game: s,
                    className: v.icon,
                    size: N.default.Sizes.LARGE,
                    skuId: y(),
                  })
                : null,
              (0, n.jsx)(o.Spinner, { type: o.SpinnerTypes.PULSING_ELLIPSIS }),
            ],
          });
        let D =
          (null == a ? void 0 : a.productLine) ===
          x.SKUProductLines.COLLECTIBLES;
        return (0, n.jsxs)("div", {
          className: v.confirmation,
          children: [
            null != s
              ? (0, n.jsx)(N.default, {
                  game: s,
                  className: v.icon,
                  size: N.default.Sizes.LARGE,
                  skuId: y(),
                })
              : null,
            (0, n.jsx)(o.Heading, {
              variant: "heading-lg/semibold",
              className: i({
                [v.header]: null == u && !D,
                [v.headerCustomGifting]: null != u && !D,
              }),
              children:
                null != S || (f && null == I)
                  ? L.default.Messages
                      .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                  : null != I
                    ? L.default.Messages
                        .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                    : L.default.Messages
                        .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
            }),
            (f && null != S && null == I) || j
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(E.default, {
                      user: S,
                      className: v.giftRecipient,
                      size: o.AvatarSizes.SIZE_80,
                    }),
                    (0, n.jsx)(o.Heading, {
                      className: v.giftRecipientName,
                      variant: "heading-md/semibold",
                      children: O.default.getName(S),
                    }),
                    (0, n.jsxs)("div", {
                      className: v.giftRecipientTag,
                      children: [" ", O.default.getUserTag(S)],
                    }),
                    (0, n.jsx)("div", {
                      className: v.giftSentMessage,
                      children: b(),
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", { className: v.blurb, children: b() }),
                    null == I && (0, n.jsx)(F, { giftCode: t, onClose: c }),
                    (0, n.jsx)("div", { className: v.divider }),
                    U(),
                  ],
                }),
          ],
        });
      }
      let F = e => {
        let { giftCode: t, onClose: s } = e;
        l.useEffect(() => {
          f.default.fetchRelationships(), (0, S.fetchUserAffinities)();
        }, []);
        let [a, i] = l.useState(),
          [r, _] = l.useState(!1),
          [T, A] = l.useState(!1),
          { userAffinities: N, isLoading: h } = (0, d.useStateFromStoresObject)(
            [C.default],
            () => ({
              userAffinities: C.default.getUserAffinitiesUserIds(),
              isLoading: C.default.getFetching(),
            })
          ),
          P = Array.from(N.values()),
          g = (0, d.useStateFromStores)([p.default], () =>
            p.default.getFriendIDs()
          ),
          x = u.difference(g, P),
          R = [...P, ...x],
          M = (0, d.useStateFromStores)(
            [m.default],
            () => m.default.filter(e => R.includes(e.id) && !e.bot),
            [R]
          ),
          F = null == M || 0 === M.length;
        if (F) return null;
        let j = u.sortBy(M, e => R.indexOf(e.id));
        return (0, n.jsxs)("div", {
          className: v.giftRecipientSection,
          children: [
            (0, n.jsx)(o.FormTitle, {
              children:
                L.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, n.jsxs)("div", {
              className: v.giftRecipient,
              children: [
                (0, n.jsx)(o.SearchableSelect, {
                  placeholder:
                    L.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: v.giftRecipientInputWrapper,
                  className: r ? v.giftRecipientInputError : void 0,
                  renderOptionPrefix: e =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, n.jsx)(E.default, {
                          user: e.value,
                          size: o.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    h
                      ? (0, n.jsx)(o.Spinner, {
                          type: o.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: a,
                  onChange: e => {
                    i(e), _(!1);
                  },
                  options: j.map(e => ({
                    value: e,
                    label: "".concat(O.default.getUserTag(e)),
                  })),
                }),
                (0, n.jsx)(o.Button, {
                  disabled: null == a,
                  submitting: T,
                  className: v.sendToRecipientButton,
                  onClick: () => {
                    A(!0),
                      (0, I.sendGiftMessage)(a, t)
                        .then(() => {
                          s(), (0, c.popAllLayers)();
                        })
                        .catch(() => {
                          _(!0), A(!1);
                        });
                  },
                  children:
                    L.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: r ? v.subtextError : v.subtext,
              children: r
                ? L.default.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : L.default.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT,
            }),
          ],
        });
      };
    },
    7127: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PaymentModalConfirmStep: function () {
            return f;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("627445"),
        a = s.n(l),
        i = s("77078"),
        r = s("642906"),
        u = s("367767"),
        d = s("650484"),
        o = s("782340"),
        c = s("348550");
      function f(e) {
        let { handleClose: t } = e,
          {
            skusById: s,
            selectedSkuId: l,
            application: f,
          } = (0, r.usePaymentContext)();
        a(null != l, "Expected selectedSkuId"),
          a(null != f, "Expected application");
        let S = s[l];
        a(null != S, "Expected sku");
        let E =
          o.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format(
            { applicationName: f.name, itemName: S.name }
          );
        return (0, n.jsxs)(d.PaymentPortalBody, {
          children: [
            (0, n.jsx)(u.default, {}),
            (0, n.jsxs)("div", {
              className: c.confirmation,
              children: [
                (0, n.jsx)(i.Heading, {
                  variant: "heading-xxl/bold",
                  className: c.confirmationHeader,
                  children: "Success!",
                }),
                (0, n.jsx)(i.Text, { variant: "text-md/normal", children: E }),
                (0, n.jsx)("div", { className: c.divider }),
                (0, n.jsx)(i.Button, {
                  onClick: t,
                  children: o.default.Messages.CLOSE,
                }),
              ],
            }),
          ],
        });
      }
    },
    292215: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function () {
            return S;
          },
          ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function () {
            return E;
          },
          REVIEW_STEP_CONFIG: function () {
            return p;
          },
          ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function () {
            return T;
          },
          SHARED_STEP_CONFIGS: function () {
            return C;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("357957"),
        a = s("85336"),
        i = s("262683"),
        r = s("946359"),
        u = s("724269"),
        d = s("7127"),
        o = s("99836"),
        c = s("217796"),
        f = s("782340");
      let S = {
          key: null,
          renderStep: e => (0, n.jsx)(c.OneTimePaymentPredicateStep, { ...e }),
        },
        E = {
          key: a.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)(i.PaymentModalAddPaymentStep, {
                ...e,
                breadcrumbSteps: [
                  a.Step.ADD_PAYMENT_STEPS,
                  a.Step.REVIEW,
                  a.Step.CONFIRM,
                ],
                onReturn: () => {
                  let t = l.default.paymentSources;
                  0 === Object.keys(t).length
                    ? e.handleClose()
                    : e.handleStepChange(a.Step.REVIEW, {
                        trackedFromStep: a.Step.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        I = {
          key: a.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, n.jsx)(u.default, {}),
        },
        _ = {
          key: a.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, n.jsx)(r.default, {}),
          options: { renderHeader: !0 },
        },
        p = {
          key: a.Step.REVIEW,
          renderStep: e => (0, n.jsx)(o.PaymentModalReviewStep, { ...e }),
          options: {
            useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW,
          },
        },
        T = {
          key: a.Step.CONFIRM,
          renderStep: e => (0, n.jsx)(d.PaymentModalConfirmStep, { ...e }),
        },
        C = [I, _];
    },
    217796: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          OneTimePaymentPredicateStep: function () {
            return S;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("627445"),
        i = s.n(a),
        r = s("245187"),
        u = s("635357"),
        d = s("642906"),
        o = s("85336"),
        c = s("628738"),
        f = s("49111");
      function S(e) {
        let { handleStepChange: t, handleClose: s } = e,
          {
            blockedPayments: a,
            hasFetchedSkus: S,
            paymentSources: E,
            hasFetchedPaymentSources: I,
            application: _,
            skusById: p,
            selectedSkuId: T,
          } = (0, d.usePaymentContext)(),
          { isGift: C } = (0, u.useGiftContext)(),
          [m, A] = l.useState(!0);
        return (l.useEffect(() => {
          let e = null != _;
          S && I && e && A(!1);
        }, [S, I, _]),
        l.useEffect(() => {
          if (m || a) return;
          i(null != T, "Expected selectedSkuId");
          let e = p[T];
          if (
            C &&
            (null == e ? void 0 : e.productLine) ===
              f.SKUProductLines.COLLECTIBLES
          ) {
            t(o.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(E).length) {
            t(o.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(o.Step.REVIEW);
        }, [m, a, t, E, C, p, T]),
        m)
          ? (0, n.jsx)(c.default, {})
          : a
            ? (0, n.jsx)(r.BlockedPaymentsContentModal, { onClose: s })
            : null;
      }
    },
    671484: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        }),
        s("702976");
      var n,
        l = s("866227"),
        a = s.n(l),
        i = s("666038"),
        r = s("568734"),
        u = s("797647"),
        d = s("646718");
      let o = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      n = class e extends i.default {
        static createFromServer(t) {
          return new e({
            userId: null != t.user ? t.user.id : null,
            code: t.code,
            skuId: t.sku_id,
            applicationId: t.application_id,
            uses: t.uses,
            maxUses: t.max_uses,
            storeListingId: null != t.store_listing ? t.store_listing.id : null,
            expiresAt: null != t.expires_at ? a(t.expires_at) : null,
            redeemed: t.redeemed,
            subscriptionPlanId:
              null != t.subscription_plan
                ? t.subscription_plan.id
                : t.subscription_plan_id,
            subscriptionPlan:
              null != t.subscription_plan
                ? u.default.createFromServer(t.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != t.entitlement_branches ? t.entitlement_branches : null,
            flags: null != t.flags ? t.flags : 0,
            giftStyle: t.gift_style,
            subscriptionTrial:
              null != t.subscription_trial
                ? {
                    id: t.subscription_trial.id,
                    interval: t.subscription_trial.interval,
                    intervalCount: t.subscription_trial.interval_count,
                    skuId: t.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != t.promotion
                ? {
                    id: t.promotion.id,
                    startDate: t.promotion.start_date,
                    endDate: t.promotion.end_date,
                    inboundHeaderText: t.promotion.inbound_header_text,
                    inboundBodyText: t.promotion.inbound_body_text,
                    inboundHelpCenterLink: t.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let e = this.expiresAt;
          return null != e && a().isAfter(e);
        }
        get hasMultipleCopies() {
          return this.maxUses > 1;
        }
        get isClaimed() {
          return this.uses >= this.maxUses;
        }
        get remainingUses() {
          return this.maxUses - this.uses;
        }
        get isSubscription() {
          return null != this.subscriptionPlanId;
        }
        get premiumSubscriptionType() {
          return (
            (this.isSubscription &&
              d.PremiumSubscriptionSKUToPremiumType[this.skuId]) ||
            null
          );
        }
        get isSelfRedeemable() {
          return !(0, r.hasFlag)(this.flags, o.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, r.hasFlag)(
            this.flags,
            o.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
        constructor(e) {
          super(),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
        }
      };
    },
    920700: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CopyInputModes: function () {
            return f;
          },
          default: function () {
            return E;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        a = s("414456"),
        i = s.n(a),
        r = s("77078"),
        u = s("474293"),
        d = s("145131"),
        o = s("782340"),
        c = s("704524");
      let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
      class S extends l.PureComponent {
        select() {
          var e;
          null === (e = this.inputRef.current) || void 0 === e || e.select();
        }
        renderInput(e) {
          var t;
          let { value: s, mode: l } = this.props,
            a =
              null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
          return (0, n.jsx)("input", {
            className: i((0, u.getClass)(c, "input", l), {
              [c.inputHidden]: e,
            }),
            ref: this.inputRef,
            type: "text",
            value: s,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": a,
          });
        }
        render() {
          let e;
          let {
              text: t = o.default.Messages.COPY,
              mode: s,
              hideMessage: l,
              className: a,
              buttonLook: S,
            } = this.props,
            E = null != l;
          switch (s) {
            case f.SUCCESS:
              e = r.ButtonColors.GREEN;
              break;
            case f.ERROR:
              e = r.ButtonColors.RED;
              break;
            default:
              e = this.props.buttonColor;
          }
          return (0, n.jsx)(r.FocusRing, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
              className: i((0, u.getClass)(c, "copyInput", s), a),
              ref: this.containerRef,
              children: (0, n.jsxs)(d.default, {
                className: c.layout,
                children: [
                  (0, n.jsxs)(d.default, {
                    className: c.inputWrapper,
                    children: [
                      this.renderInput(E),
                      E
                        ? (0, n.jsx)("div", {
                            className: c.hiddenMessage,
                            children: l,
                          })
                        : null,
                    ],
                  }),
                  (0, n.jsx)(d.default, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, n.jsx)(r.Button, {
                      className: c.button,
                      onClick: this.handleButtonClick,
                      size: r.ButtonSizes.MIN,
                      color: e,
                      look: S,
                      children: t,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = l.createRef()),
            (this.containerRef = l.createRef()),
            (this.handleButtonClick = () => {
              this.select();
              let { onCopy: e, value: t } = this.props;
              e(t);
            }),
            (this.handleInputClick = () => {
              this.select();
            });
        }
      }
      (S.contextType = r.FormContext),
        (S.defaultProps = {
          supportsCopy: !0,
          buttonColor: r.ButtonColors.PRIMARY,
          buttonLook: r.ButtonLooks.FILLED,
          mode: f.DEFAULT,
        }),
        (S.Modes = f),
        (S.ButtonColors = r.ButtonColors),
        (S.ButtonLooks = r.ButtonLooks);
      var E = S;
    },
  },
]);
//# sourceMappingURL=01d4db828ab6e2e6e18b.js.map

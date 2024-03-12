(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54293"],
  {
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("37983"),
        u = n("884691"),
        a = n("77078"),
        s = n("390236"),
        i = u.memo(function (e) {
          var t, n, i, l;
          let {
              user: c,
              size: d = a.AvatarSizes.SIZE_32,
              animate: o = !1,
              "aria-hidden": f = !1,
              ...P
            } = e,
            p = u.useContext(s.default);
          return (0, r.jsx)(a.Avatar, {
            src:
              ((t = c),
              (n = (0, a.getAvatarSize)(d)),
              (i = o),
              (l = p),
              t.getAvatarURL(l, n, i)),
            size: d,
            "aria-label": f ? void 0 : c.username,
            "aria-hidden": f,
            ...P,
          });
        });
    },
    750482: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
          MonetizationListingImageAspectStable: function () {
            return d;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("617258"),
        a = n("769846"),
        s = n("801765"),
        i = n("955735");
      let l = (0, u.cssValueToNumber)(
        a.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING
      );
      function c(e) {
        let { listing: t, imageSize: n, alt: u, ...a } = e,
          i = (0, s.useListingThumbnailUrl)(t, n);
        return (0, r.jsx)("img", { src: i, alt: u, ...a });
      }
      function d(e) {
        let { listing: t, aspectRatio: n = 16 / 9, height: u, ...a } = e,
          c = (u - 2 * l) * n,
          d = (0, s.useListingThumbnailUrl)(t, c),
          o = (0, s.useListingThumbnailUrl)(t, c, { shouldAnimate: !1 });
        return (0, r.jsx)(i.default, {
          src: d,
          backgroundSrc: o,
          aspectRatio: n,
          ...a,
        });
      }
    },
    891328: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("414456"),
        a = n.n(u),
        s = n("77078"),
        i = n("750482"),
        l = n("945330"),
        c = n("880672");
      function d(e) {
        let { className: t, onClose: n } = e;
        return (0, r.jsx)(s.Clickable, {
          className: a(c.closeButtonContainer, t),
          onClick: n,
          children: (0, r.jsx)(l.default, {
            width: 16,
            height: 16,
            className: c.closeButtonIcon,
          }),
        });
      }
      function o(e) {
        let { guildProductListing: t, onClose: n, className: u } = e;
        return (0, r.jsxs)(s.ModalHeader, {
          className: a(c.header, u),
          separator: !1,
          children: [
            (0, r.jsx)(i.default, {
              className: c.headerImage,
              listing: t,
              imageSize: 500,
              alt: "",
            }),
            (0, r.jsx)(d, { className: c.closeButton, onClose: n }),
          ],
        });
      }
    },
    134666: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openGuildProductPurchaseConfirmationModal: function () {
            return a;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("77078");
      function a(e) {
        (0, u.openModalLazy)(async () => {
          let { default: t } = await n.el("392977").then(n.bind(n, "392977"));
          return n => (0, r.jsx)(t, { ...e, ...n });
        });
      }
    },
    671183: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n("884691"),
        u = n("627445"),
        a = n.n(u),
        s = n("642906"),
        i = n("134666"),
        l = n("273093");
      function c(e) {
        let { handleClose: t } = e,
          { guildProductListing: n, guildId: u } = (0,
          l.useGuildProductPurchaseContext)(),
          { selectedSkuPricePreview: c } = (0, s.usePaymentContext)();
        return (
          r.useEffect(() => {
            a(null != c, "selectedSkuPricePreview cannot be null"),
              (0, i.openGuildProductPurchaseConfirmationModal)({
                guildId: u,
                guildProductListingId: n.id,
                skuPricePreview: c,
              }),
              t();
          }, []),
          null
        );
      }
    },
    273093: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGuildProductPurchaseContext: function () {
            return d;
          },
          GuildProductPurchaseContextProvider: function () {
            return o;
          },
        });
      var r = n("37983"),
        u = n("884691"),
        a = n("627445"),
        s = n.n(a),
        i = n("446674"),
        l = n("565559");
      let c = u.createContext(void 0);
      function d() {
        let e = u.useContext(c);
        return s(null != e, "GuildProductPurchaseContext not found"), e;
      }
      function o(e) {
        let { children: t, guildProductListingId: n, ...u } = e,
          a = (0, i.useStateFromStores)([l.default], () =>
            l.default.getGuildProduct(n)
          );
        return (
          s(null != a, "guildProductListing cannot be null"),
          (0, r.jsx)(c.Provider, {
            value: { guildProductListing: a, ...u },
            children: t,
          })
        );
      }
    },
    880531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          renderGuildProductPurchaseHeader: function () {
            return c;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("85336"),
        a = n("891328"),
        s = n("273093"),
        i = n("751499");
      function l(e) {
        let { onClose: t } = e,
          { guildProductListing: n } = (0, s.useGuildProductPurchaseContext)();
        return (0, r.jsx)(a.default, {
          guildProductListing: n,
          className: i.header,
          onClose: t,
        });
      }
      let c = (e, t, n) =>
        n === u.Step.CONFIRM ? null : (0, r.jsx)(l, { onClose: () => t(!1) });
    },
    191131: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("812204"),
        a = n("685665"),
        s = n("635357"),
        i = n("642906"),
        l = n("85336"),
        c = n("385179"),
        d = n("262683"),
        o = n("946359"),
        f = n("724269"),
        P = n("99836"),
        p = n("217796"),
        S = n("357957"),
        h = n("671183"),
        A = n("273093"),
        C = n("880531"),
        E = n("843455");
      let T = [
        {
          key: null,
          renderStep: e => (0, r.jsx)(p.OneTimePaymentPredicateStep, { ...e }),
        },
        {
          key: l.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, r.jsx)(d.PaymentModalAddPaymentStep, {
              ...e,
              onReturn: () => {
                let t = S.default.paymentSources;
                0 === Object.keys(t).length
                  ? e.handleClose()
                  : e.handleStepChange(l.Step.REVIEW, {
                      trackedFromStep: l.Step.ADD_PAYMENT_STEPS,
                    });
              },
            }),
        },
        {
          key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(f.default, {}),
        },
        {
          key: l.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(o.default, {}),
        },
        {
          key: l.Step.REVIEW,
          renderStep: e => (0, r.jsx)(P.PaymentModalReviewStep, { ...e }),
        },
        {
          key: l.Step.CONFIRM,
          renderStep: e => (0, r.jsx)(h.default, { ...e }),
        },
      ];
      function m(e) {
        let {
            guildProductContext: t,
            sourceAnalyticsLocations: n,
            applicationId: l,
            ...d
          } = e,
          { AnalyticsLocationProvider: o, analyticsLocations: f } = (0,
          a.default)(n, u.default.GUILD_PRODUCT_PAYMENT_MODAL);
        return (0, r.jsx)(A.GuildProductPurchaseContextProvider, {
          ...t,
          children: (0, r.jsx)(o, {
            children: (0, r.jsx)(i.PaymentContextProvider, {
              stepConfigs: T,
              applicationId: l,
              skuIDs: [d.skuId],
              activeSubscription: null,
              purchaseType: E.PurchaseTypes.ONE_TIME,
              children: (0, r.jsx)(s.GiftContextProvider, {
                children: (0, r.jsx)(c.PaymentModal, {
                  initialPlanId: null,
                  analyticsLocations: f,
                  renderHeader: C.renderGuildProductPurchaseHeader,
                  ...d,
                }),
              }),
            }),
          }),
        });
      }
    },
    217796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          OneTimePaymentPredicateStep: function () {
            return P;
          },
        }),
        n("222007");
      var r = n("37983"),
        u = n("884691"),
        a = n("627445"),
        s = n.n(a),
        i = n("245187"),
        l = n("635357"),
        c = n("642906"),
        d = n("85336"),
        o = n("628738"),
        f = n("49111");
      function P(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: a,
            hasFetchedSkus: P,
            paymentSources: p,
            hasFetchedPaymentSources: S,
            application: h,
            skusById: A,
            selectedSkuId: C,
          } = (0, c.usePaymentContext)(),
          { isGift: E } = (0, l.useGiftContext)(),
          [T, m] = u.useState(!0);
        return (u.useEffect(() => {
          let e = null != h;
          P && S && e && m(!1);
        }, [P, S, h]),
        u.useEffect(() => {
          if (T || a) return;
          s(null != C, "Expected selectedSkuId");
          let e = A[C];
          if (
            E &&
            (null == e ? void 0 : e.productLine) ===
              f.SKUProductLines.COLLECTIBLES
          ) {
            t(d.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(p).length) {
            t(d.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(d.Step.REVIEW);
        }, [T, a, t, p, E, A, C]),
        T)
          ? (0, r.jsx)(o.default, {})
          : a
            ? (0, r.jsx)(i.BlockedPaymentsContentModal, { onClose: n })
            : null;
      }
    },
    971427: function (e, t, n) {
      "use strict";
      let r;
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("424973");
      var u = n("446674"),
        a = n("913144");
      let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class i extends u.default.PersistedStore {
        initialize(e) {
          r = null != e ? e : s;
        }
        getState() {
          return r;
        }
        get hasAcceptedStoreTerms() {
          return r.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return r.hasAcceptedEulaIds.includes(e);
        }
      }
      (i.displayName = "ApplicationStoreUserSettingsStore"),
        (i.persistKey = "ApplicationStoreUserSettingsStore"),
        (i.migrations = [
          e =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]);
      var l = new i(a.default, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
          r.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
          let { eulaId: t } = e;
          if (r.hasAcceptedEulaIds.includes(t)) return !1;
          r.hasAcceptedEulaIds.push(t);
        },
      });
    },
  },
]);
//# sourceMappingURL=fe53bdf49ba9f2ba53ef.js.map

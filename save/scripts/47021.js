(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47021"],
  {
    87657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n("37983"),
        u = n("884691"),
        a = n("77078"),
        i = n("390236"),
        l = u.memo(function (e) {
          var t, n, l, s;
          let {
              user: o,
              size: d = a.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": f = !1,
              ...P
            } = e,
            S = u.useContext(i.default);
          return (0, r.jsx)(a.Avatar, {
            src:
              ((t = o),
              (n = (0, a.getAvatarSize)(d)),
              (l = c),
              (s = S),
              t.getAvatarURL(s, n, l)),
            size: d,
            "aria-label": f ? void 0 : o.username,
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
            return o;
          },
          MonetizationListingImageAspectStable: function () {
            return d;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("617258"),
        a = n("769846"),
        i = n("801765"),
        l = n("955735");
      let s = (0, u.cssValueToNumber)(
        a.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING
      );
      function o(e) {
        let { listing: t, imageSize: n, alt: u, ...a } = e,
          l = (0, i.useListingThumbnailUrl)(t, n);
        return (0, r.jsx)("img", { src: l, alt: u, ...a });
      }
      function d(e) {
        let { listing: t, aspectRatio: n = 16 / 9, height: u, ...a } = e,
          o = (u - 2 * s) * n,
          d = (0, i.useListingThumbnailUrl)(t, o),
          c = (0, i.useListingThumbnailUrl)(t, o, { shouldAnimate: !1 });
        return (0, r.jsx)(l.default, {
          src: d,
          backgroundSrc: c,
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
            return c;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("414456"),
        a = n.n(u),
        i = n("77078"),
        l = n("750482"),
        s = n("945330"),
        o = n("880672");
      function d(e) {
        let { className: t, onClose: n } = e;
        return (0, r.jsx)(i.Clickable, {
          className: a(o.closeButtonContainer, t),
          onClick: n,
          children: (0, r.jsx)(s.default, {
            width: 16,
            height: 16,
            className: o.closeButtonIcon,
          }),
        });
      }
      function c(e) {
        let { guildProductListing: t, onClose: n, className: u } = e;
        return (0, r.jsxs)(i.ModalHeader, {
          className: a(o.header, u),
          separator: !1,
          children: [
            (0, r.jsx)(l.default, {
              className: o.headerImage,
              listing: t,
              imageSize: 500,
              alt: "",
            }),
            (0, r.jsx)(d, { className: o.closeButton, onClose: n }),
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
            return o;
          },
        });
      var r = n("884691"),
        u = n("627445"),
        a = n.n(u),
        i = n("642906"),
        l = n("134666"),
        s = n("273093");
      function o(e) {
        let { handleClose: t } = e,
          { guildProductListing: n, guildId: u } = (0,
          s.useGuildProductPurchaseContext)(),
          { selectedSkuPricePreview: o } = (0, i.usePaymentContext)();
        return (
          r.useEffect(() => {
            a(null != o, "selectedSkuPricePreview cannot be null"),
              (0, l.openGuildProductPurchaseConfirmationModal)({
                guildId: u,
                guildProductListingId: n.id,
                skuPricePreview: o,
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
            return c;
          },
        });
      var r = n("37983"),
        u = n("884691"),
        a = n("627445"),
        i = n.n(a),
        l = n("446674"),
        s = n("565559");
      let o = u.createContext(void 0);
      function d() {
        let e = u.useContext(o);
        return i(null != e, "GuildProductPurchaseContext not found"), e;
      }
      function c(e) {
        let { children: t, guildProductListingId: n, ...u } = e,
          a = (0, l.useStateFromStores)([s.default], () =>
            s.default.getGuildProduct(n)
          );
        return (
          i(null != a, "guildProductListing cannot be null"),
          (0, r.jsx)(o.Provider, {
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
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("85336"),
        a = n("891328"),
        i = n("273093"),
        l = n("751499");
      function s(e) {
        let { onClose: t } = e,
          { guildProductListing: n } = (0, i.useGuildProductPurchaseContext)();
        return (0, r.jsx)(a.default, {
          guildProductListing: n,
          className: l.header,
          onClose: t,
        });
      }
      let o = (e, t, n) =>
        n === u.Step.CONFIRM ? null : (0, r.jsx)(s, { onClose: () => t(!1) });
    },
    191131: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var r = n("37983");
      n("884691");
      var u = n("812204"),
        a = n("685665"),
        i = n("635357"),
        l = n("642906"),
        s = n("85336"),
        o = n("385179"),
        d = n("262683"),
        c = n("946359"),
        f = n("724269"),
        P = n("99836"),
        S = n("217796"),
        p = n("357957"),
        h = n("671183"),
        x = n("273093"),
        C = n("880531"),
        m = n("843455");
      let v = [
        {
          key: null,
          renderStep: e => (0, r.jsx)(S.OneTimePaymentPredicateStep, { ...e }),
        },
        {
          key: s.Step.ADD_PAYMENT_STEPS,
          renderStep: e =>
            (0, r.jsx)(d.PaymentModalAddPaymentStep, {
              ...e,
              onReturn: () => {
                let t = p.default.paymentSources;
                0 === Object.keys(t).length
                  ? e.handleClose()
                  : e.handleStepChange(s.Step.REVIEW, {
                      trackedFromStep: s.Step.ADD_PAYMENT_STEPS,
                    });
              },
            }),
        },
        {
          key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(f.default, {}),
        },
        {
          key: s.Step.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(c.default, {}),
        },
        {
          key: s.Step.REVIEW,
          renderStep: e => (0, r.jsx)(P.PaymentModalReviewStep, { ...e }),
        },
        {
          key: s.Step.CONFIRM,
          renderStep: e => (0, r.jsx)(h.default, { ...e }),
        },
      ];
      function T(e) {
        let {
            guildProductContext: t,
            sourceAnalyticsLocations: n,
            applicationId: s,
            ...d
          } = e,
          { analyticsLocations: c } = (0, a.default)(
            n,
            u.default.GUILD_PRODUCT_PAYMENT_MODAL
          );
        return (0, r.jsx)(x.GuildProductPurchaseContextProvider, {
          ...t,
          children: (0, r.jsx)(a.AnalyticsLocationProvider, {
            value: c,
            children: (0, r.jsx)(l.PaymentContextProvider, {
              stepConfigs: v,
              applicationId: s,
              skuIDs: [d.skuId],
              activeSubscription: null,
              purchaseType: m.PurchaseTypes.ONE_TIME,
              children: (0, r.jsx)(i.GiftContextProvider, {
                children: (0, r.jsx)(o.PaymentModal, {
                  initialPlanId: null,
                  analyticsLocations: c,
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
        i = n.n(a),
        l = n("245187"),
        s = n("635357"),
        o = n("642906"),
        d = n("85336"),
        c = n("628738"),
        f = n("49111");
      function P(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: a,
            hasFetchedSkus: P,
            paymentSources: S,
            hasFetchedPaymentSources: p,
            application: h,
            skusById: x,
            selectedSkuId: C,
          } = (0, o.usePaymentContext)(),
          { isGift: m } = (0, s.useGiftContext)(),
          [v, T] = u.useState(!0);
        return (u.useEffect(() => {
          let e = null != h;
          P && p && e && T(!1);
        }, [P, p, h]),
        u.useEffect(() => {
          if (v || a) return;
          i(null != C, "Expected selectedSkuId");
          let e = x[C];
          if (
            m &&
            (null == e ? void 0 : e.productLine) ===
              f.SKUProductLines.COLLECTIBLES
          ) {
            t(d.Step.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(S).length) {
            t(d.Step.ADD_PAYMENT_STEPS);
            return;
          }
          t(d.Step.REVIEW);
        }, [v, a, t, S, m, x, C]),
        v)
          ? (0, r.jsx)(c.default, {})
          : a
            ? (0, r.jsx)(l.BlockedPaymentsContentModal, { onClose: n })
            : null;
      }
    },
  },
]);
//# sourceMappingURL=920ef6799de892f3b3e1.js.map

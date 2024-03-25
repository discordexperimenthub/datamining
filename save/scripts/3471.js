(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3471"],
  {
    243704: function (e, r, l) {
      "use strict";
      e.exports = l.p + "6418419524dd1e583beb.svg";
    },
    812952: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return N;
          },
        });
      var n,
        t,
        s,
        a,
        o = l("37983"),
        i = l("884691"),
        c = l("414456"),
        d = l.n(c),
        u = l("145131"),
        p = l("138592");
      ((n = s || (s = {})).PRIMARY = "primary"),
        (n.SECONDARY = "secondary"),
        (n.WARNING = "warning"),
        (n.ERROR = "error"),
        ((t = a || (a = {})).SMALL = "small"),
        (t.LARGE = "large"),
        (t.NONE = "none");
      let m = {
          primary: p.colorPrimary,
          secondary: p.colorSecondary,
          warning: p.colorWarning,
          error: p.colorError,
        },
        f = { small: p.small, large: p.large, none: null };
      class E extends i.PureComponent {
        render() {
          let {
            icon: e,
            color: r,
            children: l,
            iconSize: n,
            className: t,
            iconClassName: s,
          } = this.props;
          return (0, o.jsxs)(u.default, {
            className: d(p.note, m[r], t),
            align: u.default.Align.CENTER,
            children: [
              (0, o.jsx)(e, { className: d(p.icon, f[n], s) }),
              (0, o.jsx)("div", { children: l }),
            ],
          });
        }
      }
      (E.Colors = s), (E.Sizes = a);
      var N = E;
    },
    874642: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return _;
          },
        });
      var n = l("37983"),
        t = l("884691"),
        s = l("77078"),
        a = l("812204"),
        o = l("685665"),
        i = l("642906"),
        c = l("85336"),
        d = l("273619"),
        u = l("674158"),
        p = l("427459"),
        m = l("617917"),
        f = l("49111"),
        E = l("782340"),
        N = l("371664"),
        h = l("890957");
      let S = "premium-guild-subscription-upsell-modal-header";
      function x(e) {
        let { title: r, subtitle: l, image: t } = e;
        return (0, n.jsxs)("div", {
          className: N.header,
          children: [
            (0, n.jsx)(s.Heading, {
              variant: "heading-xl/semibold",
              id: S,
              color: "header-primary",
              className: h.marginBottom8,
              children: r,
            }),
            (0, n.jsx)(s.Text, {
              variant: "text-md/normal",
              className: N.subtitleText,
              children: l,
            }),
            t,
          ],
        });
      }
      let C = e => {
          let {
            onClose: r,
            perks: l,
            perkIntro: t = E.default.Messages
              .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
            headerProps: a,
          } = e;
          return (0, n.jsxs)("div", {
            className: N.wrapper,
            children: [
              (0, n.jsx)(s.ModalCloseButton, {
                className: N.closeButton,
                onClick: () => {
                  r();
                },
              }),
              (0, n.jsx)(T, { headerProps: a, perkIntro: t }),
              (0, n.jsx)("div", {
                className: N.perks,
                children: l.map((e, r) => {
                  let {
                    icon: l,
                    iconClassName: t,
                    description: s,
                    color: a,
                  } = e;
                  return (0, n.jsx)(
                    u.default,
                    { icon: l, iconClassName: t, description: s, color: a },
                    r
                  );
                }),
              }),
            ],
          });
        },
        T = e => {
          let { headerProps: r, perkIntro: a } = e;
          return (0, n.jsxs)(t.Fragment, {
            children: [
              null != r
                ? (0, n.jsx)(x, { ...r })
                : (0, n.jsx)("img", {
                    className: N.heroImage,
                    src: l("243704"),
                    alt: E.default.Messages
                      .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT,
                  }),
              (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                className: N.heading,
                children: a,
              }),
            ],
          });
        },
        v = e => {
          let {
              guild: r,
              targetBoostedGuildTier: l,
              onClose: t,
              analyticsSourceLocation: a,
            } = e,
            o = {
              section: f.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
              object: f.AnalyticsObjects.BUTTON_CTA,
              objectType:
                null != l
                  ? (0, p.boostedGuildTierToAnalyticsObjectType)(l)
                  : null,
            };
          return (0, n.jsxs)(s.ModalFooter, {
            className: N.footer,
            children: [
              (0, n.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: () => {
                  t();
                },
                children: E.default.Messages.CLOSE,
              }),
              (0, n.jsx)(m.default, {
                analyticsLocation: o,
                analyticsSourceLocation: a,
                guild: r,
                targetBoostedGuildTier: l,
                onClose: () => {
                  t();
                },
              }),
            ],
          });
        };
      function _(e) {
        let {
            analyticsSourceLocation: r,
            guild: l,
            targetBoostedGuildTier: t,
            perks: u,
            perkIntro: p,
            headerProps: m,
            onClose: f,
            ...E
          } = e,
          { analyticsLocations: N } = (0, o.default)(
            a.default.ACTIVITY_DIRECTORY
          );
        return (0, n.jsx)(o.AnalyticsLocationProvider, {
          value: N,
          children: (0, n.jsx)(i.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(s.ModalRoot, {
              ...E,
              "aria-labelledby": S,
              children: (0, n.jsx)(d.default, {
                hideBreadcrumbs: !0,
                body: (0, n.jsx)(C, {
                  onClose: f,
                  perks: u,
                  perkIntro: p,
                  headerProps: m,
                }),
                footer: (0, n.jsx)(v, {
                  guild: l,
                  targetBoostedGuildTier: t,
                  onClose: f,
                  analyticsSourceLocation: r,
                }),
                steps: [c.Step.PREMIUM_GUILD_UPSELL],
                currentStep: c.Step.PREMIUM_GUILD_UPSELL,
              }),
            }),
          }),
        });
      }
    },
    153727: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return d;
          },
        }),
        l("881410");
      var n = l("37983");
      l("884691");
      var t = l("414456"),
        s = l.n(t),
        a = l("454589"),
        o = l("642906"),
        i = l("85336"),
        c = l("696034");
      function d(e) {
        let { className: r, isEligibleForTrial: l = !1 } = e,
          {
            step: t,
            breadcrumbs: d,
            startedPaymentFlowWithPaymentSourcesRef: u,
          } = (0, o.usePaymentContext)();
        if (null == d || 0 === d.length) return null;
        let p = d.flatMap(e => {
          let r = e.useBreadcrumbLabel(l);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === p.length
          ? null
          : ((p = p.filter(e => {
              let r = e.id !== i.Step.ADD_PAYMENT_STEPS,
                n = e.id === i.Step.ADD_PAYMENT_STEPS && !u.current;
              return !l || (l && (r || n));
            })),
            (0, n.jsx)("div", {
              className: s("breadcrumb", c.wrapper, r),
              children: (0, n.jsx)(a.default, { activeId: t, breadcrumbs: p }),
            }));
      }
    },
    650484: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return f;
          },
          PaymentPortalBody: function () {
            return E;
          },
          PaymentPortalFooter: function () {
            return N;
          },
        });
      var n = l("37983"),
        t = l("884691"),
        s = l("414456"),
        a = l.n(s),
        o = l("627445"),
        i = l.n(o),
        c = l("817736"),
        d = l.n(c),
        u = l("77078"),
        p = l("642906"),
        m = l("304006");
      function f(e) {
        var r, l, s, o, c, d;
        let {
            header: f,
            isLargeModal: E,
            stepProps: N,
          } = (function (e) {
            let { header: r, isLargeModal: l, ...n } = e;
            return { header: r, isLargeModal: l, stepProps: n };
          })(e),
          {
            step: h,
            stepConfigs: S,
            setBodyNode: x,
            setFooterNode: C,
            setModalOverlayNode: T,
            setReadySlideId: v,
          } = (0, p.usePaymentContext)(),
          _ = S.find(e => e.key === h);
        t.useEffect(() => {
          T(null);
        }, [h, T]),
          i(null != _, "Unknown step for current payment flow.");
        let I =
            null !==
              (c =
                null == _
                  ? void 0
                  : null === (r = _.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== c &&
            c,
          j =
            null == _
              ? void 0
              : null === (l = _.options) || void 0 === l
                ? void 0
                : l.bodyClassName,
          P =
            void 0 !== E && E
              ? m.sliderBodyLarge
              : null == _
                ? void 0
                : null === (s = _.options) || void 0 === s
                  ? void 0
                  : s.sliderBodyClassName;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            null ===
              (d =
                null == _
                  ? void 0
                  : null === (o = _.options) || void 0 === o
                    ? void 0
                    : o.renderHeader) ||
            void 0 === d ||
            d
              ? f
              : null,
            _.renderStep(N),
            null == h || I
              ? null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(u.ModalContent, {
                      className: a(m.body, j),
                      children: (0, n.jsx)(u.Slides, {
                        activeSlide: h,
                        centered: !1,
                        onSlideReady: e => v(e),
                        children: S.filter(e => null != e.key).map(e =>
                          (0, n.jsx)(
                            u.Slide,
                            {
                              id: e.key,
                              children: (0, n.jsx)("form", {
                                className: a(m.sliderBody, P),
                                ref: e => x(e),
                                onSubmit: e => e.preventDefault(),
                              }),
                            },
                            e.key
                          )
                        ),
                      }),
                    }),
                    (0, n.jsx)("div", { ref: e => C(e) }),
                    (0, n.jsx)("div", { ref: e => T(e) }),
                  ],
                }),
          ],
        });
      }
      function E(e) {
        let { children: r } = e,
          { bodyNode: l } = (0, p.usePaymentContext)();
        return null == l ? null : d.createPortal(r, l);
      }
      function N(e) {
        let { children: r } = e,
          { footerNode: l } = (0, p.usePaymentContext)();
        return null == l ? null : d.createPortal(r, l);
      }
    },
    273619: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return _;
          },
        }),
        l("222007"),
        l("70102");
      var n = l("37983"),
        t = l("884691"),
        s = l("41092"),
        a = l("414456"),
        o = l.n(a),
        i = l("862337"),
        c = l("77078"),
        d = l("812952"),
        u = l("448993"),
        p = l("736978"),
        m = l("642906"),
        f = l("85336");
      l("153727"), l("650484");
      var E = l("454589"),
        N = l("978679"),
        h = l("745279"),
        S = l("718517"),
        x = l("49111"),
        C = l("782340"),
        T = l("540700");
      let v = new Set([
        f.Step.SKU_SELECT,
        f.Step.AWAITING_AUTHENTICATION,
        f.Step.AWAITING_PURCHASE_TOKEN_AUTH,
        f.Step.CONFIRM,
      ]);
      function _(e) {
        let {
            steps: r,
            currentStep: l,
            body: a,
            paymentError: _,
            header: I,
            footer: j,
            isGift: P = !1,
            giftMessage: A = C.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: R = !1,
            isLoading: L = !1,
            purchaseError: M,
            purchaseErrorBlockRef: b,
            planError: g,
            onScroll: D,
            scrollerClassName: y,
            hasCurrencies: k = !1,
          } = e,
          B = null;
        null != _ && null == (0, f.errorToStep)(_)
          ? (B = _)
          : null != M
            ? (B = M)
            : null != g && (B = g);
        let O = null != B ? B.message : "";
        null != B &&
          B instanceof u.BillingError &&
          (B.code === p.ErrorCodes.CARD_DECLINED &&
            k &&
            (O += " ".concat(C.default.Messages.BILLING_ERROR_TRY_ANOTHER)),
          B.code === p.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (O = C.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          B.code === x.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (O = C.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: U } = (0, m.usePaymentContext)();
        L = L || null == U;
        let G = t.useRef(new i.Timeout());
        t.useEffect(() => {
          let e = G.current;
          return (
            null != U || e.isStarted()
              ? null != U && e.stop()
              : e.start(10 * S.default.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, h.captureBillingException)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [U]);
        let Y = r.includes(f.Step.PAYMENT_TYPE)
          ? f.Step.PAYMENT_TYPE
          : f.Step.ADD_PAYMENT_STEPS;
        return (0, n.jsxs)(s.Elements, {
          options: x.StripeElementsOptions,
          stripe: U,
          children: [
            I,
            (0, n.jsxs)("div", {
              className: o("paymentModalContent", T.content),
              children: [
                P && l !== f.Step.CONFIRM
                  ? (0, n.jsx)(d.default, {
                      className: T.paymentNote,
                      iconSize: d.default.Sizes.SMALL,
                      icon: N.default,
                      color:
                        null == A
                          ? d.default.Colors.PRIMARY
                          : d.default.Colors.SECONDARY,
                      children: A,
                    })
                  : null,
                R
                  ? null
                  : (0, n.jsx)("div", {
                      className: T.breadcrumbsWrapper,
                      children: (0, n.jsx)(E.default, {
                        activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(l)
                          ? Y
                          : l,
                        breadcrumbs: r
                          .filter(
                            e =>
                              !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) &&
                              !v.has(e)
                          )
                          .map(e => ({
                            id: e,
                            label: (0, f.getLabelForStep)(e),
                          })),
                      }),
                    }),
                (0, n.jsxs)("div", {
                  className: T.bodyWrapper,
                  children: [
                    null == B
                      ? null
                      : (0, n.jsx)("div", {
                          className: T.errorBlockWrapper,
                          children: (0, n.jsx)(c.FormErrorBlock, {
                            ref: b,
                            children: O,
                          }),
                        }),
                    L
                      ? (0, n.jsx)(c.Spinner, { className: T.loadingBlock })
                      : (0, n.jsx)(c.Sequencer, {
                          className: T.sequencer,
                          staticClassName: T.sequencerStatic,
                          animatedNodeClassName: T.sequencerAnimatedNode,
                          fillParent: !0,
                          step: l,
                          steps: r,
                          sideMargin: 20,
                          children: (0, n.jsx)(c.AdvancedScrollerThin, {
                            onScroll: D,
                            className: o(T.scroller, y),
                            children: a,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            j,
          ],
        });
      }
    },
    674158: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var t = l("414456"),
        s = l.n(t),
        a = l("870984");
      function o(e) {
        let { icon: r, iconClassName: l, description: t, color: o } = e;
        return (0, n.jsxs)("div", {
          className: a.perkRow,
          children: [
            (0, n.jsx)("div", {
              className: a.perkIconContainer,
              children: (0, n.jsx)(r, {
                color: o,
                className: s(a.perkIcon, l),
              }),
            }),
            (0, n.jsx)("div", { className: a.perkDescription, children: t }),
          ],
        });
      }
    },
    454589: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return p;
          },
        }),
        l("222007");
      var n = l("37983"),
        t = l("884691"),
        s = l("414456"),
        a = l.n(s),
        o = l("77078"),
        i = l("145131"),
        c = l("461380"),
        d = l("361466");
      class u extends t.PureComponent {
        handleClick(e) {
          let { onBreadcrumbClick: r } = this.props;
          null != r && r(e);
        }
        render() {
          let { breadcrumbs: e, className: r } = this.props,
            l = e.map(this.renderBreadcrumb);
          return (0, n.jsx)(i.default, {
            justify: i.default.Justify.START,
            className: a(d.breadcrumbs, r),
            children: l,
          });
        }
        constructor(...e) {
          super(...e),
            (this.renderBreadcrumb = (e, r) => {
              let {
                  activeId: l,
                  onBreadcrumbClick: t,
                  breadcrumbs: s,
                  renderCustomBreadcrumb: i,
                  separatorClassName: u,
                } = this.props,
                p = e.id === l,
                m = r === s.length - 1,
                f =
                  null != i
                    ? i(e, p)
                    : (0, n.jsx)("span", {
                        className: a(d.breadcrumb, {
                          [d.activeBreadcrumb]: p,
                          [d.interactiveBreadcrumb]: null != t,
                        }),
                        children: e.label,
                      });
              return (0, n.jsxs)(
                "div",
                {
                  className: a(d.breadcrumbWrapper, {
                    [d.breadcrumbFinalWrapper]: m,
                  }),
                  children: [
                    null != t
                      ? (0, n.jsx)(o.Clickable, {
                          tag: "span",
                          onClick: () => this.handleClick(e),
                          className: d.breadcrumbClickWrapper,
                          children: f,
                        })
                      : f,
                    m
                      ? null
                      : (0, n.jsx)(c.default, {
                          className: a(d.breadcrumbArrow, u),
                          direction: c.default.Directions.RIGHT,
                        }),
                  ],
                },
                e.id
              );
            });
        }
      }
      var p = u;
    },
    461380: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return E;
          },
        });
      var n = l("37983");
      l("884691");
      var t = l("414456"),
        s = l.n(t),
        a = l("384737"),
        o = l("448052"),
        i = l("748802"),
        c = l("260792"),
        d = l("77078"),
        u = l("75196"),
        p = l("366842");
      let m = {
          UP: p.directionUp,
          RIGHT: p.directionRight,
          DOWN: p.directionDown,
          LEFT: p.directionLeft,
        },
        f = e => {
          let {
              direction: r = m.DOWN,
              width: l = 24,
              height: t = 24,
              color: f = "currentColor",
              transition: E = p.transition,
              className: N,
              foreground: h,
              expanded: S,
              ...x
            } = e,
            { enabled: C } = (0, d.useRedesignIconContext)(),
            T = r;
          if ((!0 === S ? (T = m.DOWN) : !1 === S && (T = m.RIGHT), C)) {
            let e = {
              [m.UP]: c.ChevronSmallUpIcon,
              [m.DOWN]: a.ChevronSmallDownIcon,
              [m.LEFT]: o.ChevronSmallLeftIcon,
              [m.RIGHT]: i.ChevronSmallRightIcon,
            }[T];
            return (0, n.jsx)(e, {
              ...x,
              className: N,
              width: l,
              height: t,
              color: f,
              colorClass: h,
            });
          }
          return (0, n.jsx)("svg", {
            className: s(N, E, T),
            width: l,
            height: t,
            viewBox: "0 0 24 24",
            ...(0, u.default)(x),
            children: (0, n.jsx)("path", {
              className: h,
              fill: "none",
              stroke: f,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      f.Directions = m;
      var E = f;
    },
  },
]);
//# sourceMappingURL=b23b840f1760ce0d3786.js.map

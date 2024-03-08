(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74945"],
  {
    545876: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        }),
        l("70102"),
        l("222007");
      var s = l("37983"),
        a = l("884691"),
        n = l("414456"),
        r = l.n(n),
        i = l("627445"),
        c = l.n(i),
        o = l("446674"),
        d = l("77078"),
        u = l("971427"),
        h = l("701909"),
        p = l("719923"),
        A = l("49111"),
        f = l("646718"),
        L = l("782340"),
        m = l("180978");
      class I extends a.Component {
        componentDidMount() {
          this.props.onChange(
            this.hasAcceptedNeccessaryTerms(this.props, this.state)
          );
        }
        componentDidUpdate(e, t) {
          let l = this.hasAcceptedNeccessaryTerms(e, t),
            s = this.hasAcceptedNeccessaryTerms(this.props, this.state);
          s !== l && this.props.onChange(s);
        }
        hasAcceptedNeccessaryTerms(e, t) {
          return (
            (null == e.eulaId || t.hasAcceptedEULA) &&
            (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
          );
        }
        formatInterval(e) {
          if (e === f.SubscriptionIntervalTypes.YEAR)
            return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
          if (e === f.SubscriptionIntervalTypes.MONTH)
            return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
          throw Error("Invalid interval type: ".concat(e));
        }
        render() {
          let {
              eulaId: e,
              applicationName: t,
              hasPreviouslyAcceptedEULA: a,
              forceShow: n,
              disabled: i,
              className: o,
              checkboxClassname: u,
              checkboxLabelClassname: f,
              finePrint: I,
              showPricingLink: S,
              showWithdrawalWaiver: E,
              isTrial: C,
              isDiscount: _,
              subscriptionPlan: v,
              finePrintClassname: M,
            } = this.props,
            { hasAcceptedEULA: N, hasAcceptedWithdrawalWaiver: R } = this.state;
          return (c(
            !C || null != v,
            "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"
          ),
          n || (null != e && !a) || E)
            ? (0, s.jsxs)("div", {
                className: o,
                children: [
                  E &&
                    (0, s.jsx)(d.FormTitle, {
                      className: m.formTitle,
                      children:
                        L.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER,
                    }),
                  null != e && (n || !a)
                    ? (0, s.jsx)(d.Checkbox, {
                        type: d.Checkbox.Types.INVERTED,
                        value: N,
                        onChange: this.handleToggleEULAAcceptance,
                        disabled: i,
                        className: m.checkbox,
                        children: (0, s.jsx)("div", {
                          className: m.checkboxLabel,
                          children:
                            L.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format(
                              {
                                applicationName: t,
                                onClick: t => {
                                  (0, d.openModalLazy)(async () => {
                                    let { default: t } = await l
                                      .el("523360")
                                      .then(l.bind(l, "523360"));
                                    return l =>
                                      (0, s.jsx)(t, { eulaId: e, ...l });
                                  }),
                                    t.preventDefault();
                                },
                              }
                            ),
                        }),
                      })
                    : null,
                  null == I
                    ? null
                    : (0, s.jsx)("div", {
                        className: r(m.finePrint, M),
                        children: I,
                      }),
                  E
                    ? (0, s.jsxs)("div", {
                        className: o,
                        children: [
                          (0, s.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.INVERTED,
                            value: R,
                            onChange:
                              this.handleToggleEUWithdralWaiverAcceptance,
                            disabled: i,
                            className: r(m.checkbox, u),
                            children: (0, s.jsx)("div", {
                              className: r(m.checkboxLabel, f),
                              children:
                                L.default.Messages
                                  .BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX,
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: m.finePrint,
                            children:
                              L.default.Messages
                                .BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER,
                          }),
                        ],
                      })
                    : null,
                  S &&
                    (0, s.jsxs)("div", {
                      className: m.finePrint,
                      children: [
                        "*",
                        L.default.Messages.BILLING_HOW_PRICING_WORKS.format({
                          documentationLink: h.default.getArticleURL(
                            A.HelpdeskArticles.LOCALIZED_PRICING
                          ),
                        }),
                      ],
                    }),
                  C &&
                    null != v &&
                    (0, s.jsx)(d.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        L.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                          buttonText: (0, p.getBillingReviewSubheader)(null, v),
                          interval: this.formatInterval(
                            null == v ? void 0 : v.interval
                          ),
                          cancelSubscriptionArticle: h.default.getArticleURL(
                            A.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB
                          ),
                          paidServiceTermsArticle: h.default.getArticleURL(
                            A.HelpdeskArticles.PAID_TERMS
                          ),
                        }),
                    }),
                  _ &&
                    null != v &&
                    (0, s.jsx)(d.Text, {
                      variant: "text-xs/medium",
                      color: "interactive-normal",
                      children:
                        L.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                          buttonText: (0, p.getBillingReviewSubheader)(null, v),
                          interval: this.formatInterval(
                            null == v ? void 0 : v.interval
                          ),
                          cancelSubscriptionArticle: h.default.getArticleURL(
                            A.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB
                          ),
                          paidServiceTermsArticle: h.default.getArticleURL(
                            A.HelpdeskArticles.PAID_TERMS
                          ),
                        }),
                    }),
                ],
              })
            : null;
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              hasAcceptedEULA:
                !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
              hasAcceptedWithdrawalWaiver: !1,
            }),
            (this.handleToggleEUWithdralWaiverAcceptance = (e, t) => {
              this.setState({ hasAcceptedWithdrawalWaiver: t });
            }),
            (this.handleToggleEULAAcceptance = (e, t) => {
              this.setState({ hasAcceptedEULA: t });
            });
        }
      }
      var S = o.default.connectStores([u.default], e => {
        let { eulaId: t } = e;
        return {
          hasPreviouslyAcceptedEULA: null != t && u.default.hasAcceptedEULA(t),
        };
      })(I);
    },
    380140: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var s = l("37983"),
        a = l("884691"),
        n = l("446674"),
        r = l("77078"),
        i = l("465527"),
        c = l("846239"),
        o = l("299285"),
        d = l("552712"),
        u = l("145131"),
        h = l("551184"),
        p = l("599110"),
        A = l("733835"),
        f = l("391294"),
        L = l("49111"),
        m = l("515638"),
        I = l("467258");
      class S extends a.Component {
        componentDidMount() {
          let { application: e, skuId: t, sku: l, onClose: s } = this.props;
          null == l
            ? (0, i.fetchSKU)(e.id, t).catch(e => s(e.message))
            : this.track(l);
        }
        componentDidUpdate(e) {
          let { sku: t } = this.props;
          t !== e.sku && null != t && this.track(t);
        }
        track(e) {
          let { analyticsSource: t } = this.props;
          p.default.track(L.AnalyticEvents.OPEN_MODAL, {
            type: "Application Entitlement Confirmation",
            source: t,
            application_id: e.applicationId,
            sku_id: e.id,
          });
        }
        render() {
          let {
              sku: e,
              application: t,
              onClose: l,
              isIAP: a,
              transitionState: n,
            } = this.props,
            i = null != e ? (0, f.getSkuHeaderText)(a, e.type) : null;
          return (0, s.jsxs)(r.ModalRoot, {
            transitionState: n,
            size: r.ModalSize.SMALL,
            "aria-label": i,
            className: I.modal,
            children: [
              (0, s.jsx)(c.default, { application: t, splashSize: 880 }),
              (0, s.jsx)(h.default.Content, {
                className: I.content,
                children: (0, s.jsxs)(u.default, {
                  direction: u.default.Direction.VERTICAL,
                  className: m.confirmContent,
                  children: [
                    (0, s.jsx)(r.ModalCloseButton, {
                      onClick: () => l(),
                      className: m.confirmCloseButton,
                    }),
                    null != e
                      ? (0, s.jsx)(A.default, {
                          application: t,
                          sku: e,
                          isIAP: a,
                          onClose: () => l(),
                        })
                      : null,
                  ],
                }),
              }),
            ],
          });
        }
      }
      var E = n.default.connectStores([d.default, o.default], e => {
        let { applicationId: t, skuId: l } = e;
        return {
          application: o.default.getApplication(t),
          sku: d.default.get(l),
        };
      })(S);
    },
    551184: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("37983"),
        a = l("884691"),
        n = l("414456"),
        r = l.n(n),
        i = l("77078"),
        c = l("98717");
      let o = { SMALL: c.sizeSmall, MEDIUM: c.sizeMedium, LARGE: c.sizeLarge };
      class d extends a.PureComponent {
        calculateScroll() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this._scroller;
          if (null == e) return;
          let { scrollTop: t } = e.getScrollerState(),
            { hideSeparator: l } = this.state;
          0 !== t || l
            ? t > 0 && l && this.setState({ hideSeparator: !1 })
            : this.setState({ hideSeparator: !0 });
        }
        getScroller() {
          return this._scroller;
        }
        renderChildren() {
          let { hideSeparator: e } = this.state;
          return a.Children.map(this.props.children, t =>
            a.isValidElement(t)
              ? t.type === i.ModalContent || t.type === i.ModalListContent
                ? a.cloneElement(t, {
                    scrollerRef: this.setRef,
                    onScroll: this.handleScroll,
                    onResize: this.handleScroll,
                  })
                : t.type === i.ModalHeader && e
                  ? a.cloneElement(t, { separator: !1 })
                  : t
              : t
          );
        }
        render() {
          let {
            className: e,
            children: t,
            tag: l,
            size: a,
            fullscreenOnMobile: n,
            ...i
          } = this.props;
          return (0, s.jsx)(l, {
            className: r(c.modal, e, a, { [c.fullscreenOnMobile]: n }),
            ...i,
            children: this.renderChildren(),
          });
        }
        constructor(e) {
          super(e),
            (this._scroller = null),
            (this.setRef = e => {
              (this._scroller = e), null != e && this.calculateScroll();
            }),
            (this.handleScroll = e => {
              this.calculateScroll();
              let { onScroll: t } = this.props;
              null == t || t(e);
            }),
            (this.state = { hideSeparator: !1 });
        }
      }
      (d.Header = i.ModalHeader),
        (d.Footer = i.ModalFooter),
        (d.Content = i.ModalContent),
        (d.ListContent = i.ModalListContent),
        (d.CloseButton = i.ModalCloseButton),
        (d.Sizes = o),
        (d.defaultProps = {
          fullscreenOnMobile: !0,
          size: o.SMALL,
          tag: "div",
        });
      var u = d;
    },
  },
]);
//# sourceMappingURL=30799e1511ccdbd20460.js.map

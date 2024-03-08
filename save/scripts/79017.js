(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79017"],
  {
    878005: function (e, t, s) {
      "use strict";
      e.exports = s.p + "ddaba4373c0aabfff967.png";
    },
    777273: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          fetchUserAffinities: function () {
            return i;
          },
        });
      var n = s("872717"),
        r = s("913144"),
        a = s("843823"),
        l = s("49111");
      function i() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.default.needsRefresh()
          ? (r.default.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            n.default
              .get({
                url: l.Endpoints.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                e => {
                  let { body: t } = e;
                  r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  r.default.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                }
              ))
          : Promise.resolve();
      }
    },
    657130: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        a = s("446674"),
        l = s("850068"),
        i = s("112679"),
        o = s("926223"),
        u = s("758764"),
        d = s("357957"),
        c = s("45640"),
        p = s("803427"),
        S = s("49111");
      let h = [c.Steps.REVIEW, c.Steps.CONFIRM];
      class f extends r.Component {
        get stepsToRender() {
          let { prependSteps: e } = this.props,
            { steps: t } = this.state;
          return null != e ? [...e, ...t] : t;
        }
        get closable() {
          let { step: e } = this.state,
            t = (0, c.getStepIndex)(e, this.stepsToRender);
          return 0 === t || !this._hasChangedSteps;
        }
        componentDidMount() {
          !d.default.hasFetchedPaymentSources && l.fetchPaymentSources();
        }
        componentDidUpdate(e, t) {
          let { onStepChange: s } = this.props,
            { step: n } = this.state;
          n !== t.step &&
            ((this._hasChangedSteps = !0), null != s && s(t.step, n));
        }
        static getDerivedStateFromProps(e, t) {
          let { billingError: s, isAwaitingAuthentication: n } = e,
            { errorStep: r } = t,
            a = {};
          if (null == s) null != r && (a.errorStep = null);
          else {
            let e = (0, c.errorToStep)(s);
            null != e && e !== t.errorStep && ((a.step = e), (a.errorStep = e));
          }
          return (
            null == t.paymentSourceId &&
              null != e.defaultPaymentSourceId &&
              (a.paymentSourceId = e.defaultPaymentSourceId),
            n
              ? (a.step = c.Steps.AWAITING_AUTHENTICATION)
              : t.step === c.Steps.AWAITING_AUTHENTICATION &&
                (null != s
                  ? (a.step = c.Steps.REVIEW)
                  : (a.step = c.Steps.CONFIRM)),
            a
          );
        }
        render() {
          let {
              isPurchasing: e,
              canSubmit: t,
              submitButtonText: s,
              useShinySubmitButton: r,
              legalNotice: a,
              renderHeader: l,
              onPaymentSourceChange: i,
              price: o,
              onClearError: u,
              size: d,
              renderConfirmationBody: S,
              renderConfirmationFooter: h,
              className: f,
              isGift: E,
              isGiftable: _,
              needsToBeGift: A,
              onIsGiftUpdate: P,
              transitionState: I,
            } = this.props,
            C = {
              [c.Steps.CONFIRM]: { renderBody: S, renderFooter: h },
              [c.Steps.SELECT_PLAN]: {
                renderBody: () =>
                  this.props.renderSelectPlanBody(this.handleSelectPlan),
                renderFooter: () => this.props.renderSelectPlanFooter(),
              },
            },
            { step: T, paymentSourceId: m } = this.state,
            R = this.stepsToRender;
          return (0, n.jsx)(p.default, {
            transitionState: I,
            className: f,
            isPurchasing: e,
            canSubmit: t,
            submitButtonText: s,
            useShinySubmitButton: r,
            legalNotice: a,
            renderHeader: l,
            onPaymentSourceChange: i,
            price: o,
            onClearError: u,
            size: d,
            extraRenderers: C,
            step: T,
            steps: R,
            paymentSourceId: m,
            isGiftable: _,
            isGift: E,
            needsToBeGift: A,
            onIsGiftUpdate: P,
            onBack: this.handleBack,
            onChoosePaymentType: this.handleChoosePaymentType,
            onCreditCardContinue: this.handleCreditCardContinue,
            onPaymentSourceAdd: this.handlePaymentSourceAdd,
            onPurchase: this.handlePurchase,
            onPaypalContinue: this.handlePaypalContinue,
            onVenmoContinue: this.handleVenmoContinue,
            onReviewPaymentSourceChange: this.handleReviewPaymentSourceChange,
            onReviewPaymentSourceAdd: this.handleReviewPaymentSourceAdd,
          });
        }
        constructor(e) {
          super(e),
            (this._hasChangedSteps = !1),
            (this.handlePaypalContinue = () => {
              this.setState({ step: c.Steps.PAYPAL_ADDRESS });
            }),
            (this.handleVenmoContinue = () => {
              this.setState({ step: c.Steps.VENMO_ADDRESS });
            }),
            (this.handleCreditCardContinue = () => {
              this.setState({ step: c.Steps.ADDRESS });
            }),
            (this.handleReviewPaymentSourceChange = e => {
              this.setState({ paymentSourceId: null != e ? e.id : null });
            }),
            (this.handleReviewPaymentSourceAdd = () => {
              this.setState({
                step: c.Steps.PAYMENT_TYPE,
                steps: p.ADD_PAYMENT_STEPS,
                paymentSourceId: null,
              });
              let { onClearError: e } = this.props;
              e && e();
            }),
            (this.handleBack = () => {
              let { paymentSources: e, onClose: t } = this.props,
                { step: s, steps: n } = this.state,
                r = this.stepsToRender,
                a = (0, c.getStepIndex)(s, r);
              if (a > 0) {
                let e = r[a - 1],
                  t = e === c.Steps.PAYMENT_TYPE;
                t && i.clearError(),
                  this.setState({
                    step: e,
                    steps: t ? p.ADD_PAYMENT_STEPS : n,
                  });
              } else if ((0, c.canGoBack)(a, e)) {
                let { defaultPaymentSourceId: e } = this.props;
                this.setState({
                  step: c.Steps.REVIEW,
                  steps: p.REVIEW_PAYMENT_STEPS,
                  paymentSourceId: e,
                });
              } else t();
            }),
            (this.handleChoosePaymentType = e => {
              switch (e) {
                case S.PaymentSourceTypes.PAYPAL:
                  this.setState({
                    step: c.Steps.PAYPAL,
                    steps: p.ADD_PAYPAL_STEPS,
                  });
                  break;
                case S.PaymentSourceTypes.CARD:
                  this.setState({
                    step: c.Steps.CREDIT_CARD_INFORMATION,
                    steps: p.ADD_CARD_STEPS,
                  });
                  break;
                case S.PaymentSourceTypes.PAYMENT_REQUEST:
                  this.setState({
                    step: c.Steps.PAYMENT_REQUEST_INFO,
                    steps: p.ADD_PAYMENT_REQUEST_STEPS,
                  });
                  break;
                case S.PaymentSourceTypes.GIROPAY:
                  this.setState({
                    step: c.Steps.ADDRESS,
                    steps: p.ADD_GIROPAY_STEPS,
                  });
                  break;
                case S.PaymentSourceTypes.PAYSAFE_CARD:
                  this.setState({
                    step: c.Steps.ADDRESS,
                    steps: p.ADD_PAYSAFECARD_STEPS,
                  });
                  break;
                case S.PaymentSourceTypes.VENMO:
                  this.setState({
                    step: c.Steps.VENMO,
                    steps: p.ADD_VENMO_STEPS,
                  });
              }
            }),
            (this.handlePaymentSourceAdd = e => {
              this.setState({ step: c.Steps.REVIEW, paymentSourceId: e });
            }),
            (this.handlePurchase = async () => {
              let { paymentSources: e, onPurchase: t, isGift: s } = this.props,
                { paymentSourceId: n } = this.state;
              if (null != n)
                try {
                  await t(e[n], s),
                    this.setState({ steps: h, step: c.Steps.CONFIRM });
                } catch (e) {}
            }),
            (this.handleSelectPlan = () => {
              let { paymentSources: e } = this.props,
                t = Object.values(e).length > 0;
              this.setState({
                step: t ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE,
              });
            });
          let {
              defaultPaymentSourceId: t,
              paymentSources: s,
              initialStep: n,
            } = e,
            r = Object.values(s).length > 0,
            a = n;
          null == a && (a = r ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE),
            (this.state = {
              paymentSourceId: t,
              steps: r ? p.REVIEW_PAYMENT_STEPS : p.ADD_PAYMENT_STEPS,
              step: a,
              errorStep: null,
            });
        }
      }
      f.defaultProps = {
        useShinySubmitButton: !1,
        needsToBeGift: !1,
        isGiftable: !1,
        isGift: !1,
        renderConfirmationBody: S.NOOP_NULL,
        renderConfirmationFooter: S.NOOP_NULL,
        renderSelectPlanBody: S.NOOP_NULL,
        renderSelectPlanFooter: S.NOOP_NULL,
      };
      var E = r.forwardRef((e, t) => {
        let [s, r] = (0, a.useStateFromStoresArray)([d.default], () => [
            d.default.paymentSources,
            d.default.defaultPaymentSourceId,
          ]),
          l = (0, a.useStateFromStores)([o.default], () => o.default.error),
          [i, c] = (0, a.useStateFromStoresArray)([u.default], () => [
            u.default.error,
            u.default.isAwaitingAuthentication,
          ]);
        return (0, n.jsx)(f, {
          ...e,
          ref: t,
          billingError: null != i ? i : l,
          paymentSources: s,
          defaultPaymentSourceId: r,
          isAwaitingAuthentication: c,
        });
      });
    },
    803427: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          REVIEW_PAYMENT_STEPS: function () {
            return F;
          },
          ADD_PAYMENT_STEPS: function () {
            return b;
          },
          ADD_CARD_STEPS: function () {
            return v;
          },
          ADD_PAYPAL_STEPS: function () {
            return G;
          },
          ADD_PAYMENT_REQUEST_STEPS: function () {
            return Y;
          },
          ADD_GIROPAY_STEPS: function () {
            return k;
          },
          ADD_PAYSAFECARD_STEPS: function () {
            return j;
          },
          ADD_VENMO_STEPS: function () {
            return H;
          },
          default: function () {
            return W;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        a = s("41092"),
        l = s("446674"),
        i = s("77078"),
        o = s("913144"),
        u = s("850068"),
        d = s("82731"),
        c = s("112679"),
        p = s("102985"),
        S = s("160299"),
        h = s("40597"),
        f = s("926223"),
        E = s("357957"),
        _ = s("145131"),
        A = s("45640"),
        P = s("773336"),
        I = s("159885"),
        C = s("520713"),
        T = s("814915"),
        m = s("518809"),
        R = s("195175"),
        N = s("780569"),
        g = s("490696"),
        y = s("677987"),
        O = s("393172"),
        L = s("574547"),
        M = s("392336"),
        D = s("49111"),
        B = s("782340"),
        x = s("467258"),
        U = s("98717");
      let F = [
          A.Steps.PAYMENT_TYPE,
          A.Steps.CREDIT_CARD_INFORMATION,
          A.Steps.REVIEW,
        ],
        b = [
          A.Steps.PAYMENT_TYPE,
          A.Steps.CREDIT_CARD_INFORMATION,
          A.Steps.REVIEW,
        ],
        v = [
          A.Steps.PAYMENT_TYPE,
          A.Steps.CREDIT_CARD_INFORMATION,
          A.Steps.ADDRESS,
          A.Steps.REVIEW,
        ],
        G = [
          A.Steps.PAYMENT_TYPE,
          A.Steps.PAYPAL,
          A.Steps.PAYPAL_ADDRESS,
          A.Steps.REVIEW,
        ],
        Y = [
          A.Steps.PAYMENT_TYPE,
          A.Steps.PAYMENT_REQUEST_INFO,
          A.Steps.REVIEW,
        ],
        k = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
        j = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
        H = [
          A.Steps.PAYMENT_TYPE,
          A.Steps.VENMO,
          A.Steps.VENMO_ADDRESS,
          A.Steps.REVIEW,
        ],
        w = (0, I.cssValueToNumber)(U.innerPadding);
      class V extends r.PureComponent {
        async componentDidMount() {
          d.createClient();
          let {
            onPaymentSourceChange: e,
            paymentSources: t,
            defaultPaymentSourceId: s,
            paymentSourceId: n,
          } = this.props;
          null != e &&
            e(
              null != n && n !== s && null != t[n]
                ? t[n]
                : null != s && null != t[s]
                  ? t[s]
                  : null
            );
          let r = await (0, C.getStripe)();
          this.setState({ stripe: r });
        }
        componentDidUpdate(e) {
          let {
            onPaymentSourceChange: t,
            paymentSources: s,
            paymentSourceId: n,
          } = this.props;
          e.paymentSourceId !== n &&
            null != n &&
            null != s[n] &&
            (null == t || t(s[n]));
        }
        componentWillUnmount() {
          d.teardownClients(), c.clearCardInfo();
          let { onClearError: e } = this.props;
          null == e || e(), c.clearError();
        }
        preventDefault(e) {
          e.preventDefault();
        }
        get disabledTooltip() {
          let { needsToBeGift: e, isGift: t, isGiftable: s } = this.props;
          if (!this.state.hasAcceptedNeccessaryTerms)
            return B.default.Messages
              .BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP;
          if (e && !t)
            return s
              ? B.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
              : B.default.Messages
                  .APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE;
          return null;
        }
        renderHeader() {
          let {
              renderHeader: e,
              billingError: t,
              step: s,
              steps: n,
            } = this.props,
            r = n.map(e => ({ id: e, label: (0, A.getCrumbLabels)(e) }));
          return e(s, r, null == (0, A.errorToStep)(t) ? t : null);
        }
        render() {
          let {
              size: e,
              step: t,
              steps: s,
              className: r,
              transitionState: l,
            } = this.props,
            o = this.stepRenderer[t],
            u = o.renderBody();
          return (0, n.jsx)(a.Elements, {
            options: D.StripeElementsOptions,
            stripe: this.state.stripe,
            children: (0, n.jsx)(i.ModalRoot, {
              size: e,
              className: r,
              "aria-label": B.default.Messages.SKU_PAYMENT_STEPS_LABEL,
              transitionState: l,
              children: (0, n.jsx)(i.Scroller, {
                children: (0, n.jsxs)("form", {
                  className: x.form,
                  onSubmit: this.preventDefault,
                  children: [
                    this.renderHeader(),
                    t !== A.Steps.CONFIRM
                      ? (0, n.jsx)("div", { className: x.divider })
                      : null,
                    null != u &&
                      (0, n.jsx)(i.ModalContent, {
                        className: x.modalContent,
                        children: (0, n.jsx)("div", {
                          className: x.content,
                          children: (0, n.jsx)(i.Sequencer, {
                            step: t,
                            steps: s,
                            sideMargin: w,
                            children: u,
                          }),
                        }),
                      }),
                    o.renderFooter(),
                  ],
                }),
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              hasAcceptedNeccessaryTerms: !1,
              token: null,
              confirmingCard: !1,
              stripe: null,
            }),
            (this.handleToggleIsGift = (e, t) => {
              let { onIsGiftUpdate: s } = this.props;
              null == s || s(t);
            }),
            (this.handlePurchaseTermsChange = e => {
              this.setState({ hasAcceptedNeccessaryTerms: e });
            }),
            (this.handleReopenPaypal = () => {
              d.reopenPayPalWindow();
            }),
            (this.handleReopenVenmo = () => {
              d.reopenVenmoWindow();
            }),
            (this.handleCardInfoChange = (e, t) => {
              o.default.wait(() => c.updateCardInfo(e, t));
            }),
            (this.handleBillingAddressChange = (e, t) => {
              o.default.wait(() => c.updateAddressInfo(e, t));
            }),
            (this.handleCreditCardAdd = async () => {
              let { billingAddressInfo: e } = this.props,
                { stripe: t, token: s } = this.state;
              try {
                let n = await u.confirmCardPaymentSource(t, s, e);
                this.props.onPaymentSourceAdd(n.id);
              } catch (e) {}
            }),
            (this.handleStripePaymentRequestAdd = async e => {
              if ((c.updateStripePaymentRequest(e), null == e)) {
                this.props.onBack();
                return;
              }
              try {
                let t = await u.createPaymentRequestPaymentSource(e);
                this.props.onPaymentSourceAdd(t.id);
              } catch (e) {}
            }),
            (this.handlePaypalAdd = async () => {
              let {
                braintreeEmail: e,
                braintreeNonce: t,
                billingAddressInfo: s,
              } = this.props;
              if (0 !== e.length && null != t)
                try {
                  let e = await u.createBraintreePaymentSource(t, s);
                  this.props.onPaymentSourceAdd(e.id);
                } catch (e) {}
            }),
            (this.handleVenmoAdd = async () => {
              let {
                venmoUsername: e,
                braintreeNonce: t,
                billingAddressInfo: s,
              } = this.props;
              if (0 !== e.length && null != t)
                try {
                  let e = await u.createBraintreePaymentSource(t, s);
                  this.props.onPaymentSourceAdd(e.id);
                } catch (e) {}
            }),
            (this.renderBackButton = () => {
              let {
                  step: e,
                  steps: t,
                  paymentSources: s,
                  onBack: r,
                } = this.props,
                a = (0, A.getStepIndex)(e, t),
                l = (0, A.canGoBack)(a, s)
                  ? B.default.Messages.BACK
                  : B.default.Messages.CANCEL;
              return (0, n.jsx)(i.Button, {
                look: i.Button.Looks.LINK,
                className: x.backButton,
                color: x.backButtonColor,
                size: x.backButtonSize,
                onClick: r,
                children: l,
              });
            }),
            (this.stepRenderer = {
              [A.Steps.PAYMENT_TYPE]: {
                renderBody: () => {
                  let {
                    hidePersonalInformation: e,
                    onChoosePaymentType: t,
                    isGiftable: s,
                    needsToBeGift: a,
                    isGift: l,
                  } = this.props;
                  return e
                    ? (0, n.jsx)(i.FormErrorBlock, {
                        className: x.errorBlock,
                        children:
                          B.default.Messages
                            .BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE,
                      })
                    : (0, n.jsxs)(r.Fragment, {
                        children: [
                          (0, n.jsx)(T.default, {
                            className: x.choosePaymentSourceType,
                            onChooseType: t,
                            allowStripeRequestPayments: !P.isPlatformEmbedded,
                            onStripePaymentMethodReceived:
                              this.handleStripePaymentRequestAdd,
                          }),
                          s &&
                            (0, n.jsx)(i.Checkbox, {
                              disabled: a,
                              className: x.giftToggle,
                              type: i.Checkbox.Types.INVERTED,
                              value: l,
                              onChange: this.handleToggleIsGift,
                              children: (0, n.jsx)("div", {
                                className: x.checkboxLabel,
                                children:
                                  B.default.Messages.BILLING_IS_GIFT_PURCHASE,
                              }),
                            }),
                        ],
                      });
                },
                renderFooter: () =>
                  (0, n.jsx)(i.ModalFooter, {
                    direction: _.default.Direction.HORIZONTAL,
                    children: this.renderBackButton(),
                  }),
              },
              [A.Steps.PAYMENT_REQUEST_INFO]: {
                renderBody: () =>
                  (0, n.jsx)(y.PaymentRequestStepBody, {
                    className: x.formItem,
                    stripePaymentMethod: this.props.stripePaymentMethod,
                    submitting: this.props.submitting,
                  }),
                renderFooter: () =>
                  (0, n.jsx)(i.ModalFooter, {
                    direction: _.default.Direction.HORIZONTAL,
                    children: this.renderBackButton(),
                  }),
              },
              [A.Steps.PAYPAL]: {
                renderBody: () =>
                  (0, n.jsx)(m.default, { className: x.formItem }),
                renderFooter: () => {
                  let {
                    submitting: e,
                    braintreeNonce: t,
                    braintreeEmail: s,
                    onPaypalContinue: r,
                    paypalClient: a,
                  } = this.props;
                  return (0, n.jsx)(O.PaypalStepFooter, {
                    submitting: e || null == a,
                    braintreeNonce: t,
                    braintreeEmail: s,
                    onPaypalContinue: r,
                    onReopenPaypal: this.handleReopenPaypal,
                    renderBackButton: this.renderBackButton,
                  });
                },
              },
              [A.Steps.VENMO]: {
                renderBody: () =>
                  (0, n.jsx)(R.default, { className: x.formItem }),
                renderFooter: () => {
                  let {
                    submitting: e,
                    braintreeNonce: t,
                    venmoUsername: s,
                    onVenmoContinue: r,
                    venmoClient: a,
                  } = this.props;
                  return (0, n.jsx)(M.VenmoStepFooter, {
                    submitting: e || null == a,
                    braintreeNonce: t,
                    venmoUsername: s,
                    onVenmoContinue: r,
                    onReopenVenmo: this.handleReopenVenmo,
                    renderBackButton: this.renderBackButton,
                  });
                },
              },
              [A.Steps.CREDIT_CARD_INFORMATION]: {
                renderBody: () => {
                  let { billingError: e } = this.props;
                  return (0, n.jsx)(g.CreditCardInformationBody, {
                    billingError: e,
                    onCardInfoChange: this.handleCardInfoChange,
                  });
                },
                renderFooter: () => {
                  let { isCardInfoValid: e, onCreditCardContinue: t } =
                      this.props,
                    { stripe: s, confirmingCard: r } = this.state,
                    l = async e => {
                      this.setState({ confirmingCard: !0 });
                      try {
                        let n = await u.createCardToken(s, e);
                        this.setState({ token: n }), c.clearError(), t();
                      } catch (e) {
                      } finally {
                        this.setState({ confirmingCard: !1 });
                      }
                    };
                  return (0, n.jsx)(a.ElementsConsumer, {
                    children: t => {
                      let { elements: s } = t;
                      return (0, n.jsx)(g.CreditCardInformationFooter, {
                        isCardInfoValid: e,
                        submitting: r,
                        renderBackButton: this.renderBackButton,
                        onCreditCardContinue: () => l(s),
                      });
                    },
                  });
                },
              },
              [A.Steps.PAYPAL_ADDRESS]: {
                renderBody: () => {
                  let { billingAddressInfo: e, billingError: t } = this.props;
                  return (0, n.jsx)(N.AddressStepBody, {
                    billingAddressInfo: e,
                    billingError: t,
                    onBillingAddressChange: this.handleBillingAddressChange,
                    paymentSourceType: D.PaymentSourceTypes.PAYPAL,
                  });
                },
                renderFooter: () => {
                  let { isBillingAddressInfoValid: e, submitting: t } =
                    this.props;
                  return (0, n.jsx)(N.AddressStepFooter, {
                    isBillingAddressInfoValid: e,
                    submitting: t,
                    onContinue: this.handlePaypalAdd,
                    renderBackButton: this.renderBackButton,
                  });
                },
              },
              [A.Steps.VENMO_ADDRESS]: {
                renderBody: () => {
                  let { billingAddressInfo: e, billingError: t } = this.props;
                  return (0, n.jsx)(N.AddressStepBody, {
                    billingAddressInfo: e,
                    billingError: t,
                    onBillingAddressChange: this.handleBillingAddressChange,
                    paymentSourceType: D.PaymentSourceTypes.VENMO,
                  });
                },
                renderFooter: () => {
                  let { isBillingAddressInfoValid: e, submitting: t } =
                    this.props;
                  return (0, n.jsx)(N.AddressStepFooter, {
                    isBillingAddressInfoValid: e,
                    submitting: t,
                    onContinue: this.handleVenmoAdd,
                    renderBackButton: this.renderBackButton,
                  });
                },
              },
              [A.Steps.ADDRESS]: {
                renderBody: () => {
                  let {
                    billingAddressInfo: e,
                    billingError: t,
                    steps: s,
                  } = this.props;
                  return (0, n.jsx)(N.AddressStepBody, {
                    billingAddressInfo: e,
                    billingError: t,
                    onBillingAddressChange: this.handleBillingAddressChange,
                    paymentSourceType:
                      s === k
                        ? D.PaymentSourceTypes.GIROPAY
                        : D.PaymentSourceTypes.CARD,
                  });
                },
                renderFooter: () => {
                  let { isBillingAddressInfoValid: e, submitting: t } =
                    this.props;
                  return (0, n.jsx)(N.AddressStepFooter, {
                    isBillingAddressInfoValid: e,
                    submitting: t,
                    onContinue: this.handleCreditCardAdd,
                    renderBackButton: this.renderBackButton,
                  });
                },
              },
              [A.Steps.REVIEW]: {
                renderBody: () => {
                  let {
                    legalNotice: e,
                    paymentSources: t,
                    price: s,
                    hidePersonalInformation: r,
                    paymentSourceId: a,
                    onReviewPaymentSourceChange: l,
                    onReviewPaymentSourceAdd: i,
                    isGiftable: o,
                    isGift: u,
                    needsToBeGift: d,
                  } = this.props;
                  return (0, n.jsx)(L.ReviewStepBody, {
                    legalNotice: e,
                    paymentSources: t,
                    price: s,
                    hidePersonalInformation: r,
                    paymentSourceId: a,
                    onPaymentSourceChange: l,
                    onPaymentSourceAdd: i,
                    onPurchaseTermsChange: this.handlePurchaseTermsChange,
                    onToggleIsGift: this.handleToggleIsGift,
                    isGiftable: o,
                    isGift: u,
                    needsToBeGift: d,
                  });
                },
                renderFooter: () => {
                  let {
                    canSubmit: e,
                    submitButtonText: t,
                    useShinySubmitButton: s,
                    isPurchasing: r,
                    paymentSourceId: a,
                    onPurchase: l,
                    needsToBeGift: i,
                    isGift: o,
                    paymentSources: u,
                  } = this.props;
                  return (0, n.jsx)(L.ReviewStepFooter, {
                    canSubmit: e,
                    submitButtonText: t,
                    useShinySubmitButton: s,
                    isPurchasing: r,
                    hasAcceptedTerms: this.state.hasAcceptedNeccessaryTerms,
                    paymentSource: null != a ? u[a] : null,
                    onPurchase: l,
                    tooltipText: this.disabledTooltip,
                    needsToBeGift: i,
                    isGift: o,
                  });
                },
              },
              [A.Steps.CONFIRM]: {
                renderBody: D.NOOP_NULL,
                renderFooter: D.NOOP_NULL,
              },
              [A.Steps.AWAITING_AUTHENTICATION]: {
                renderBody: () =>
                  (0, n.jsx)(i.FormTitle, {
                    className: x.formTitle,
                    children:
                      B.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION,
                  }),
                renderFooter: D.NOOP_NULL,
              },
              ...this.props.extraRenderers,
            });
        }
      }
      V.defaultProps = {
        canSubmit: !0,
        useShinySubmitButton: !1,
        size: i.ModalSize.SMALL,
        billingError: null,
        extraRenderers: {},
        className: x.modal,
      };
      var W = l.default.connectStores(
        [E.default, f.default, S.default, p.default, h.default],
        () => ({
          submitting: S.default.isBusy,
          paymentSources: E.default.paymentSources,
          defaultPaymentSourceId: E.default.defaultPaymentSourceId,
          stripePaymentMethod: f.default.stripePaymentMethod,
          creditCardInfo: f.default.getCreditCardInfo(),
          isCardInfoValid: f.default.isCardInfoValid,
          billingAddressInfo: f.default.getBillingAddressInfo(),
          isBillingAddressInfoValid: f.default.isBillingAddressInfoValid,
          braintreeEmail: f.default.braintreeEmail,
          braintreeNonce: f.default.braintreeNonce,
          venmoUsername: f.default.venmoUsername,
          billingError: f.default.error,
          paypalClient: h.default.getPayPalClient(),
          venmoClient: h.default.getVenmoClient(),
          hidePersonalInformation: p.default.hidePersonalInformation,
        })
      )(V);
    },
    393172: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PaypalStepFooter: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("77078"),
        a = s("145131"),
        l = s("782340");
      let i = e => {
        let {
            submitting: t,
            braintreeNonce: s,
            braintreeEmail: i,
            onPaypalContinue: o,
            onReopenPaypal: u,
            renderBackButton: d,
          } = e,
          c = 0 !== i.length && null != s;
        return (0, n.jsxs)(r.ModalFooter, {
          justify: a.default.Justify.BETWEEN,
          direction: a.default.Direction.HORIZONTAL,
          children: [
            d(),
            (0, n.jsx)(r.Button, {
              submitting: t,
              color: c ? r.Button.Colors.BRAND : r.Button.Colors.PRIMARY,
              onClick: c ? o : u,
              children: c
                ? l.default.Messages.NEXT
                : l.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
            }),
          ],
        });
      };
    },
    574547: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ReviewStepBody: function () {
            return f;
          },
          ReviewStepFooter: function () {
            return E;
          },
        }),
        s("424973");
      var n = s("37983"),
        r = s("884691"),
        a = s("77078"),
        l = s("812952"),
        i = s("740055"),
        o = s("545876"),
        u = s("181114"),
        d = s("561703"),
        c = s("315585"),
        p = s("153160"),
        S = s("782340"),
        h = s("467258");
      let f = e => {
          let {
              legalNotice: t,
              paymentSources: s,
              price: u,
              hidePersonalInformation: f,
              paymentSourceId: E,
              isGiftable: _,
              isGift: A,
              needsToBeGift: P,
              onPaymentSourceChange: I,
              onPaymentSourceAdd: C,
              onPurchaseTermsChange: T,
              onToggleIsGift: m,
            } = e,
            R = [],
            N = null != E ? s[E] : null;
          return (
            null != N &&
              N.invalid &&
              R.push(
                (0, n.jsx)(
                  l.default,
                  {
                    icon: c.default,
                    color: l.default.Colors.ERROR,
                    iconSize: l.default.Sizes.NONE,
                    iconClassName: h.invalidIcon,
                    children: S.default.Messages.BILLING_PAYMENT_SOURCE_INVALID,
                  },
                  "source_invalid"
                )
              ),
            null != u &&
              (u.taxInclusive
                ? R.push(
                    (0, n.jsx)(
                      l.default,
                      {
                        icon: d.default,
                        color: l.default.Colors.PRIMARY,
                        iconSize: l.default.Sizes.LARGE,
                        children: S.default.Messages.BILLING_SALES_TAX_INCLUDED,
                      },
                      "tax_included"
                    )
                  )
                : u.tax > 0 &&
                  R.push(
                    (0, n.jsx)(
                      l.default,
                      {
                        icon: d.default,
                        color: l.default.Colors.PRIMARY,
                        iconSize: l.default.Sizes.LARGE,
                        children:
                          S.default.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, p.formatPrice)(u.tax, u.currency),
                          }),
                      },
                      "tax_added"
                    )
                  )),
            (0, n.jsxs)(r.Fragment, {
              children: [
                (0, n.jsx)(a.FormTitle, {
                  className: h.formTitle,
                  children: S.default.Messages.BILLING_PAY_FOR_IT_WITH,
                }),
                (0, n.jsx)(i.default, {
                  paymentSources: Object.values(s),
                  selectedPaymentSourceId: E,
                  hidePersonalInformation: f,
                  onChange: I,
                  onPaymentSourceAdd: C,
                }),
                R,
                _ &&
                  (0, n.jsx)(a.Checkbox, {
                    disabled: P,
                    className: h.giftToggle,
                    type: a.Checkbox.Types.INVERTED,
                    value: A,
                    onChange: m,
                    children: (0, n.jsx)("div", {
                      className: h.checkboxLabel,
                      children: S.default.Messages.BILLING_IS_GIFT_PURCHASE,
                    }),
                  }),
                (0, n.jsx)(o.default, {
                  onChange: T,
                  forceShow: !0,
                  className: h.purchaseTerms,
                  finePrint: t,
                }),
              ],
            })
          );
        },
        E = e => {
          let {
              canSubmit: t,
              submitButtonText: s,
              useShinySubmitButton: r,
              isPurchasing: l,
              hasAcceptedTerms: i,
              paymentSource: o,
              onPurchase: d,
              tooltipText: c,
              needsToBeGift: p,
              isGift: S,
            } = e,
            f = null != o && !o.invalid,
            E = {
              submitting: l,
              color: a.Button.Colors.GREEN,
              disabled: !(i && !(p && !S) && f && t),
              onClick: d,
            };
          return (0, n.jsx)(a.ModalFooter, {
            children: (0, n.jsxs)("div", {
              className: h.buyButtonTooltipWrapper,
              children: [
                E.disabled && null != c
                  ? (0, n.jsx)(a.Tooltip, {
                      text: c,
                      children: e =>
                        (0, n.jsx)("div", {
                          "aria-hidden": !0,
                          className: h.buyButtonTooltipTarget,
                          ...e,
                        }),
                    })
                  : null,
                r
                  ? (0, n.jsx)(u.default, { ...E, children: s })
                  : (0, n.jsx)(a.Button, { type: "submit", ...E, children: s }),
              ],
            }),
          });
        };
    },
    392336: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          VenmoStepFooter: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("77078"),
        a = s("145131"),
        l = s("782340");
      let i = e => {
        let {
            submitting: t,
            braintreeNonce: s,
            venmoUsername: i,
            onVenmoContinue: o,
            onReopenVenmo: u,
            renderBackButton: d,
          } = e,
          c = 0 !== i.length && null != s;
        return (0, n.jsxs)(r.ModalFooter, {
          justify: a.default.Justify.BETWEEN,
          direction: a.default.Direction.HORIZONTAL,
          children: [
            d(),
            (0, n.jsx)(r.Button, {
              submitting: t,
              color: c ? r.Button.Colors.BRAND : r.Button.Colors.PRIMARY,
              onClick: c ? o : u,
              children: c
                ? l.default.Messages.NEXT
                : l.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
            }),
          ],
        });
      };
    },
    87657: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983"),
        r = s("884691"),
        a = s("77078"),
        l = s("390236"),
        i = r.memo(function (e) {
          var t, s, i, o;
          let {
              user: u,
              size: d = a.AvatarSizes.SIZE_32,
              animate: c = !1,
              "aria-hidden": p = !1,
              ...S
            } = e,
            h = r.useContext(l.default);
          return (0, n.jsx)(a.Avatar, {
            src:
              ((t = u),
              (s = (0, a.getAvatarSize)(d)),
              (i = c),
              (o = h),
              t.getAvatarURL(o, s, i)),
            size: d,
            "aria-label": p ? void 0 : u.username,
            "aria-hidden": p,
            ...S,
          });
        });
    },
    787598: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return z;
          },
        }),
        s("70102"),
        s("424973"),
        s("222007"),
        s("702976");
      var n,
        r,
        a = s("37983"),
        l = s("884691"),
        i = s("748820"),
        o = s("446674"),
        u = s("77078"),
        d = s("913144"),
        c = s("676536"),
        p = s("465527"),
        S = s("703332"),
        h = s("657130"),
        f = s("812952"),
        E = s("846239"),
        _ = s("84460"),
        A = s("299285"),
        P = s("791160"),
        I = s("891865"),
        C = s("697218"),
        T = s("758764"),
        m = s("437712"),
        R = s("622839"),
        N = s("552712"),
        g = s("167726"),
        y = s("454589"),
        O = s("145131"),
        L = s("953109"),
        M = s("315585"),
        D = s("599110"),
        B = s("568734"),
        x = s("45640"),
        U = s("773336"),
        F = s("153160"),
        b = s("882941"),
        v = s("271560"),
        G = s("733835"),
        Y = s("391294"),
        k = s("49111"),
        j = s("782340"),
        H = s("515638");
      ((r = n || (n = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS"),
        (r.TEST_MODE = "TEST_MODE"),
        (r.GIFT_ONLY = "GIFT_ONLY"),
        (r.PREORDER = "PREORDER");
      class w extends l.PureComponent {
        getSkuPrice() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.props,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.state,
            { prices: s } = e,
            { paymentSourceId: n } = t;
          return null == s ? null : s[null != n ? n : R.NO_PAYMENT_SOURCE];
        }
        componentDidMount() {
          let { sku: e, skuId: t, applicationId: s } = this.props;
          null == e
            ? p.fetchSKU(s, t).catch(e => this.handleClose(e.message))
            : D.default.track(
                k.AnalyticEvents.PAYMENT_FLOW_STARTED,
                this.getBaseAnalyticsData()
              );
        }
        componentDidUpdate(e, t) {
          null == e.sku &&
            null != this.props.sku &&
            D.default.track(
              k.AnalyticEvents.PAYMENT_FLOW_STARTED,
              this.getBaseAnalyticsData()
            ),
            this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice());
        }
        checkPriceChange(e, t) {
          let { sku: s, onClose: n } = this.props;
          null != e &&
            null != t &&
            e.discount_percent_off !== t.discount_percent_off &&
            d.default.wait(() => {
              if (null == s) throw Error("Unexpected null SKU");
              n(k.PaymentModalPriceChangedError);
            });
        }
        get closable() {
          let e = this._paymentModalRef.current;
          return null != e && e.closable;
        }
        get isGiftable() {
          let { sku: e } = this.props;
          return null != e && e.isGiftable(this.getPrice());
        }
        get isGift() {
          return this.props.isGift && this.isGiftable;
        }
        getPrice() {
          let { sku: e, isFetchingSKU: t } = this.props;
          if (null == e || t) return null;
          let s = this.getSkuPrice();
          if (null != s)
            return {
              amount: s.amount,
              tax: s.tax,
              taxInclusive: s.tax_inclusive,
              currency: s.currency,
            };
          let { paymentSourceId: n } = this.state;
          if (null == n) {
            let t = e.getPrice();
            if (null == t) throw Error("Sku Price cannot be null");
            return {
              amount: t.amount,
              tax: 0,
              taxInclusive: !1,
              currency: t.currency,
            };
          }
          return null;
        }
        getBaseAnalyticsData() {
          let {
            sku: e,
            analyticsLocation: t,
            appContext: s,
            promotionId: n,
          } = this.props;
          if (null == e) return {};
          let r = this.getPrice();
          return {
            ...(0, P.default)(e),
            load_id: this._loadId,
            payment_type:
              k.PurchaseTypeToAnalyticsPaymentType[k.PurchaseTypes.ONE_TIME],
            is_gift: this.isGift,
            client_event_source:
              s === k.AppContext.OVERLAY ? k.AppContext.OVERLAY : null,
            location: t,
            price: null != r ? r.amount : null,
            currency: null != r ? r.currency : null,
            location_promotion_id: n,
          };
        }
        renderPurchaseWarning() {
          let {
            sku: e,
            isInTestMode: t,
            isIAP: s,
            isUserEntitledToSku: n,
          } = this.props;
          if (null == e) return null;
          let r = (0, v.nativePlatformTypeToSKUOperatingSystem)(
              (0, U.getPlatform)()
            ),
            i = [];
          return (
            (null == r || !e.supportedOperatingSystems.includes(r)) &&
              !s &&
              i.push(
                (0, a.jsx)(
                  f.default,
                  {
                    icon: M.default,
                    iconSize: f.default.Sizes.SMALL,
                    color: f.default.Colors.WARNING,
                    className: H.errorBlock,
                    children:
                      j.default.Messages
                        .APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED,
                  },
                  "UNSUPPORTED_OS"
                )
              ),
            t &&
              i.push(
                (0, a.jsx)(
                  f.default,
                  {
                    icon: M.default,
                    iconSize: f.default.Sizes.SMALL,
                    color: f.default.Colors.WARNING,
                    className: H.errorBlock,
                    children:
                      j.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE,
                  },
                  "TEST_MODE"
                )
              ),
            !0 === n &&
              this.isGiftable &&
              i.push(
                (0, a.jsx)(
                  f.default,
                  {
                    icon: M.default,
                    iconSize: f.default.Sizes.SMALL,
                    color: f.default.Colors.PRIMARY,
                    className: H.errorBlock,
                    children:
                      j.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY,
                  },
                  "GIFT_ONLY"
                )
              ),
            e.isPreorder() &&
              i.push(
                (0, a.jsx)(
                  f.default,
                  {
                    icon: M.default,
                    iconSize: f.default.Sizes.SMALL,
                    color: f.default.Colors.PRIMARY,
                    className: H.errorBlock,
                    children:
                      j.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format(
                        { date: (0, b.getReadablePreorderReleaseDate)(e) }
                      ),
                  },
                  "PREORDER"
                )
              ),
            (0, a.jsx)(l.Fragment, { children: i })
          );
        }
        renderGenericError(e, t) {
          return null == e && null == t
            ? null
            : (0, a.jsx)(u.FormErrorBlock, {
                className: H.errorBlock,
                children: null != e ? e.message : null != t ? t.message : null,
              });
        }
        renderDefaultHeader(e, t, s) {
          let {
            isIAP: n,
            application: r,
            sku: l,
            purchaseError: i,
          } = this.props;
          if (null == l || null == r) return null;
          let o = this.getPrice();
          return (0, a.jsxs)(u.ModalHeader, {
            direction: O.default.Direction.VERTICAL,
            align: O.default.Align.START,
            separator: !1,
            children: [
              (0, a.jsx)(E.default, { application: r, splashSize: 880 }),
              (0, a.jsxs)(O.default, {
                align: O.default.Align.CENTER,
                className: H.headerHeader,
                children: [
                  (0, a.jsx)(u.FormTitle, {
                    tag: u.FormTitleTags.H4,
                    children: (0, Y.getSkuHeaderText)(n, l.type),
                  }),
                  (0, a.jsx)(u.ModalCloseButton, {
                    onClick: () => this.handleClose(),
                  }),
                ],
              }),
              (0, a.jsxs)(O.default, {
                align: O.default.Align.CENTER,
                className: H.headerContent,
                children: [
                  (0, a.jsxs)(O.default, {
                    align: O.default.Align.CENTER,
                    children: [
                      (0, a.jsx)(L.default, { game: r }),
                      (0, a.jsx)("div", {
                        className: H.applicationName,
                        children: l.name,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: H.price,
                    children:
                      null != o
                        ? (0, F.formatPrice)(o.amount, o.currency)
                        : (0, a.jsx)(u.Spinner, {
                            type: u.Spinner.Type.PULSING_ELLIPSIS,
                            className: H.priceSpinner,
                          }),
                  }),
                ],
              }),
              this.renderPurchaseWarning(),
              this.renderGenericError(i, s),
              t.length > 1
                ? (0, a.jsx)(y.default, {
                    activeId: e,
                    breadcrumbs: t,
                    className: H.breadcrumbs,
                  })
                : null,
            ],
          });
        }
        render() {
          let {
            sku: e,
            isFetchingSKU: t,
            isPurchasing: s,
            isEmbeddedIAP: n,
            purchaseError: r,
            isUserEntitledToSku: l,
            forceConfirmationStepOnMount: i,
            transitionState: o,
          } = this.props;
          return null == e || t
            ? (0, a.jsx)(u.Spinner, {})
            : (0, a.jsx)(h.default, {
                ref: this._paymentModalRef,
                transitionState: o,
                canSubmit: null != this.getSkuPrice(),
                needsToBeGift:
                  e.type === k.SKUTypes.DURABLE_PRIMARY && !0 === l,
                isGiftable: this.isGiftable,
                legalNotice: n
                  ? (0, a.jsx)(S.default, { isEmbeddedIAP: n })
                  : null,
                isPurchasing: s,
                purchaseError: r,
                price: this.getPrice(),
                size: u.ModalSize.SMALL,
                onPurchase: this.handlePurchase,
                onIsGiftUpdate: p.updateSKUPaymentIsGift,
                onPaymentSourceChange: this.handlePaymentSourceChange,
                onClose: () => this.handleClose(),
                onClearError: p.clearPurchaseError,
                renderHeader: this.renderHeader,
                renderConfirmationBody: this.renderConfirmation,
                submitButtonText: this.isGift
                  ? j.default.Messages.APPLICATION_STORE_BUY_GIFT
                  : j.default.Messages.APPLICATION_STORE_BUY,
                initialStep: i ? x.Steps.CONFIRM : null,
                onStepChange: this.handleStepChange,
                isGift: this.isGift,
              });
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this.state = { paymentSourceId: null }),
            (this._loadId = (0, i.v4)()),
            (this._stepStartTime = Date.now()),
            (this._flowStartTime = Date.now()),
            (this._paymentModalRef = l.createRef()),
            (this.handlePaymentSourceChange = e => {
              let { applicationId: t, skuId: s } = this.props;
              null != e
                ? (p.fetchPurchasePreview(t, s, e.id),
                  this.setState({ paymentSourceId: e.id }))
                : (p.fetchPurchasePreview(t, s, null),
                  this.setState({ paymentSourceId: null }));
            }),
            (this.handlePurchase = async e => {
              let { applicationId: t, sku: s } = this.props,
                n = this.getPrice(),
                r = null != n ? n.amount : 0,
                a = null != n ? n.currency : k.CurrencyCodes.USD;
              if (null == s) throw Error("SKU is null during purchase");
              if (!R.default.isPurchasingSKU)
                try {
                  D.default.track(k.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                    ...this.getBaseAnalyticsData(),
                    duration_ms: Date.now() - this._flowStartTime,
                  }),
                    await p.purchaseSKU(t, s.id, {
                      expectedAmount: r,
                      expectedCurrency: a,
                      paymentSource: e,
                      analyticsLoadId: this._loadId,
                      isGift: this.isGift,
                    }),
                    (0, c.acceptPurchaseTerms)();
                } catch (t) {
                  throw (
                    (D.default.track(k.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                      ...this.getBaseAnalyticsData(),
                      payment_gateway:
                        e.type === k.PaymentSourceTypes.CARD
                          ? k.PaymentGateways.STRIPE
                          : k.PaymentGateways.BRAINTREE,
                      payment_source_id: e.id,
                      duration_ms: Date.now() - this._flowStartTime,
                      payment_error_code: t.code,
                    }),
                    t)
                  );
                }
            }),
            (this.handleClose = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                { onClose: s } = t.props;
              s(e);
            }),
            (this.handleStepChange = (e, t) => {
              let s = Date.now();
              D.default.track(k.AnalyticEvents.PAYMENT_FLOW_STEP, {
                ...this.getBaseAnalyticsData(),
                from_step: e,
                to_step: t,
                step_duration_ms: s - this._stepStartTime,
                flow_duration_ms: s - this._flowStartTime,
              }),
                (this._stepStartTime = s),
                t === x.Steps.CONFIRM && p.showPurchaseConfirmationStep();
            }),
            (this.renderHeader = (e, t, s) => {
              let { application: n } = this.props;
              if (e === x.Steps.CONFIRM)
                return null != n
                  ? (0, a.jsx)(E.default, { application: n, splashSize: 880 })
                  : null;
              return this.renderDefaultHeader(e, t, s);
            }),
            (this.renderConfirmation = () => {
              let {
                application: e,
                sku: t,
                isIAP: s,
                giftCode: n,
              } = this.props;
              if (null == t || null == e)
                throw Error("No SKU for confirmation step!");
              return (0, a.jsx)("div", {
                className: H.confirmContent,
                children: (0, a.jsxs)(O.default, {
                  direction: O.default.Direction.VERTICAL,
                  children: [
                    (0, a.jsx)(u.ModalCloseButton, {
                      onClick: () => this.handleClose(),
                      className: H.confirmCloseButton,
                    }),
                    null != n
                      ? (0, a.jsx)(I.default, {
                          giftCode: n,
                          application: e,
                          sku: t,
                          onClose: () => this.handleClose(),
                        })
                      : (0, a.jsx)(G.default, {
                          application: e,
                          sku: t,
                          isIAP: s,
                          onClose: () => this.handleClose(),
                        }),
                  ],
                }),
              });
            });
        }
      }
      let V = l.forwardRef((e, t) => {
        var s, n;
        let { applicationId: r, skuId: l, ...i } = e,
          u = (0, o.useStateFromStores)([A.default], () =>
            A.default.getApplication(r)
          ),
          d =
            (0, B.hasFlag)(
              null !== (s = null == u ? void 0 : u.flags) && void 0 !== s
                ? s
                : 0,
              k.ApplicationFlags.EMBEDDED
            ) &&
            (0, B.hasFlag)(
              null !== (n = null == u ? void 0 : u.flags) && void 0 !== n
                ? n
                : 0,
              k.ApplicationFlags.EMBEDDED_IAP
            ),
          [c, p, S, h, f, E, P, I, y] = (0, o.useStateFromStoresArray)(
            [R.default],
            () => [
              R.default.getPricesForSku(l),
              R.default.isPurchasingSKU,
              R.default.error,
              R.default.analyticsLocation,
              R.default.promotionId,
              R.default.giftCode,
              R.default.isGift,
              R.default.isIAP,
              R.default.forceConfirmationStepOnMount,
            ]
          ),
          [O, L] = (0, o.useStateFromStoresArray)([N.default], () => [
            N.default.get(l),
            N.default.isFetching(l),
          ]),
          M = (0, o.useStateFromStores)(
            [_.default, g.default],
            () =>
              g.default.inTestModeForApplication(r) ||
              _.default.inDevModeForApplication(r),
            [r]
          ),
          D = (0, o.useStateFromStores)([m.default, C.default], () =>
            m.default.isEntitledToSku(C.default.getCurrentUser(), l, r)
          ),
          x = (0, o.useStateFromStores)([T.default], () => T.default.error);
        return (0, a.jsx)(w, {
          ...i,
          application: u,
          applicationId: r,
          skuId: l,
          prices: c,
          isPurchasing: p,
          purchaseError: null != x ? x : S,
          analyticsLocation: h,
          promotionId: f,
          isIAP: I,
          giftCode: E,
          isGift: P,
          forceConfirmationStepOnMount: y,
          sku: O,
          isFetchingSKU: L,
          isInTestMode: M,
          isUserEntitledToSku: D,
          isEmbeddedIAP: d,
          ref: t,
        });
      });
      class W extends l.PureComponent {
        close() {
          null != this._skuPaymentModalRef.current &&
            this._skuPaymentModalRef.current.closable &&
            this.handleClose();
        }
        handleClose() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          this.props.onClose(e);
        }
        render() {
          return (0, a.jsx)(V, {
            ...this.props,
            ref: this._skuPaymentModalRef,
            onClose: () => this.handleClose(),
          });
        }
        constructor(...e) {
          super(...e), (this._skuPaymentModalRef = l.createRef());
        }
      }
      var z = W;
    },
    562366: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("457589");
      s.es(n, t);
    },
    891865: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return B;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        a = s("414456"),
        l = s.n(a),
        i = s("917351"),
        o = s.n(i),
        u = s("446674"),
        d = s("77078"),
        c = s("54239"),
        p = s("736964"),
        S = s("777273"),
        h = s("87657"),
        f = s("210721"),
        E = s("671484"),
        _ = s("27618"),
        A = s("102985"),
        P = s("843823"),
        I = s("697218"),
        C = s("920700"),
        T = s("953109"),
        m = s("306160"),
        R = s("659632"),
        N = s("719923"),
        g = s("158998"),
        y = s("642906"),
        O = s("49111"),
        L = s("646718"),
        M = s("782340"),
        D = s("164852");
      function B(e) {
        let {
            giftCode: t,
            application: s,
            sku: a,
            subscriptionPlan: i,
            selectedGiftStyle: o,
            onClose: c,
            hasSentMessage: p,
            giftRecipient: S,
            giftMessageError: f,
            isSendingMessage: _,
          } = e,
          { productLine: P } = (0, y.usePaymentContext)(),
          [I, B] = r.useState(C.default.Modes.DEFAULT),
          U = (0, u.useStateFromStores)([A.default], () => A.default.enabled),
          F = p || (null != o && null != S),
          b = () => (null != i ? i.skuId : null != a ? a.id : null),
          v = () => {
            let e;
            let t = null != o && L.SeasonalGiftStyles2023.includes(o);
            return null != f
              ? M.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
              : null == i
                ? null
                : (e =
                    i.interval === L.SubscriptionIntervalTypes.MONTH
                      ? F
                        ? t
                          ? M.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                          : M.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                        : M.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY
                      : F
                        ? t
                          ? M.default.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                          : M.default.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                        : M.default.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format(
                    {
                      skuName: (0, N.getTierDisplayName)(i.id),
                      intervalCount: i.intervalCount,
                    }
                  );
          },
          G = (e, t) => {
            null != a &&
              (0, R.trackGiftCodeCopy)(
                new E.default({ code: t, maxUses: 1 }),
                a
              );
            try {
              (0, m.copy)(e), B(C.default.Modes.SUCCESS);
            } catch (e) {
              B(C.default.Modes.ERROR);
            }
            setTimeout(() => {
              B(C.default.Modes.DEFAULT);
            }, 1500);
          },
          Y = () => {
            let e;
            if (null == t) return null;
            switch (I) {
              case C.default.Modes.SUCCESS:
                e = M.default.Messages.BILLING_GIFT_COPIED;
                break;
              case C.default.Modes.ERROR:
                e = M.default.Messages.FAILED;
                break;
              default:
                e = M.default.Messages.COPY;
            }
            return (0, n.jsxs)("div", {
              className: D.giftCodeSection,
              children: [
                (0, n.jsx)(d.FormTitle, {
                  children:
                    M.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != t &&
                  (0, n.jsx)(C.default, {
                    hideMessage: U
                      ? M.default.Messages.GIFT_INVENTORY_HIDDEN
                      : null,
                    value: (0, R.getGiftCodeURL)(t),
                    mode: I,
                    text: e,
                    onCopy: e => G(e, t),
                    supportsCopy: m.SUPPORTS_COPY,
                    className: D.copyInput,
                    buttonColor: C.default.ButtonColors.LINK,
                    buttonLook: C.default.ButtonLooks.LINK,
                  }),
                (0, n.jsx)("div", {
                  className: D.subtext,
                  children:
                    M.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        if (_)
          return (0, n.jsxs)("div", {
            className: D.confirmation,
            children: [
              null != s
                ? (0, n.jsx)(T.default, {
                    game: s,
                    className: D.icon,
                    size: T.default.Sizes.LARGE,
                    skuId: b(),
                  })
                : null,
              (0, n.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }),
            ],
          });
        let k = P === O.SKUProductLines.COLLECTIBLES;
        return (0, n.jsxs)("div", {
          className: D.confirmation,
          children: [
            null != s
              ? (0, n.jsx)(T.default, {
                  game: s,
                  className: D.icon,
                  size: T.default.Sizes.LARGE,
                  skuId: b(),
                })
              : null,
            (0, n.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              className: l({
                [D.header]: null == o && !k,
                [D.headerCustomGifting]: null != o && !k,
              }),
              children:
                null != S || (p && null == f)
                  ? M.default.Messages
                      .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                  : null != f
                    ? M.default.Messages
                        .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                    : M.default.Messages
                        .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
            }),
            (p && null != S && null == f) || F
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(h.default, {
                      user: S,
                      className: D.giftRecipient,
                      size: d.AvatarSizes.SIZE_80,
                    }),
                    (0, n.jsx)(d.Heading, {
                      className: D.giftRecipientName,
                      variant: "heading-md/semibold",
                      children: g.default.getName(S),
                    }),
                    (0, n.jsxs)("div", {
                      className: D.giftRecipientTag,
                      children: [" ", g.default.getUserTag(S)],
                    }),
                    (0, n.jsx)("div", {
                      className: D.giftSentMessage,
                      children: v(),
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", { className: D.blurb, children: v() }),
                    null == f && (0, n.jsx)(x, { giftCode: t, onClose: c }),
                    (0, n.jsx)("div", { className: D.divider }),
                    Y(),
                  ],
                }),
          ],
        });
      }
      let x = e => {
        let { giftCode: t, onClose: s } = e;
        r.useEffect(() => {
          p.default.fetchRelationships(), (0, S.fetchUserAffinities)();
        }, []);
        let [a, l] = r.useState(),
          [i, E] = r.useState(!1),
          [A, C] = r.useState(!1),
          { userAffinities: T, isLoading: m } = (0, u.useStateFromStoresObject)(
            [P.default],
            () => ({
              userAffinities: P.default.getUserAffinitiesUserIds(),
              isLoading: P.default.getFetching(),
            })
          ),
          R = Array.from(T.values()),
          N = (0, u.useStateFromStores)([_.default], () =>
            _.default.getFriendIDs()
          ),
          y = o.difference(N, R),
          O = [...R, ...y],
          L = (0, u.useStateFromStores)(
            [I.default],
            () => I.default.filter(e => O.includes(e.id) && !e.bot),
            [O]
          ),
          B = null == L || 0 === L.length;
        if (B) return null;
        let x = o.sortBy(L, e => O.indexOf(e.id));
        return (0, n.jsxs)("div", {
          className: D.giftRecipientSection,
          children: [
            (0, n.jsx)(d.FormTitle, {
              children:
                M.default.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, n.jsxs)("div", {
              className: D.giftRecipient,
              children: [
                (0, n.jsx)(d.SearchableSelect, {
                  placeholder:
                    M.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: D.giftRecipientInputWrapper,
                  className: i ? D.giftRecipientInputError : void 0,
                  renderOptionPrefix: e =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, n.jsx)(h.default, {
                          user: e.value,
                          size: d.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    m
                      ? (0, n.jsx)(d.Spinner, {
                          type: d.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: a,
                  onChange: e => {
                    l(e), E(!1);
                  },
                  options: x.map(e => ({
                    value: e,
                    label: "".concat(g.default.getUserTag(e)),
                  })),
                }),
                (0, n.jsx)(d.Button, {
                  disabled: null == a,
                  submitting: A,
                  className: D.sendToRecipientButton,
                  onClick: () => {
                    C(!0),
                      (0, f.sendGiftMessage)(a, t)
                        .then(() => {
                          s(), (0, c.popAllLayers)();
                        })
                        .catch(() => {
                          E(!0), C(!1);
                        });
                  },
                  children:
                    M.default.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: i ? D.subtextError : D.subtext,
              children: i
                ? M.default.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : M.default.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT,
            }),
          ],
        });
      };
    },
    909469: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PAYMENT_SOURCE_NAMES: function () {
            return p;
          },
          getLocalizedPricingNotice: function () {
            return h;
          },
          getLocalizedPricingBannerStrings: function () {
            return f;
          },
        }),
        s("222007"),
        s("424973");
      var n = s("592861"),
        r = s("988415"),
        a = s("701909"),
        l = s("153160"),
        i = s("49111"),
        o = s("843455"),
        u = s("782340");
      let d = new Set([
          o.CurrencyCodes.ARS,
          o.CurrencyCodes.CLP,
          o.CurrencyCodes.COP,
        ]),
        c = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
        p = {
          [i.PaymentSourceTypes.CARD]: () =>
            u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
          [i.PaymentSourceTypes.PAYPAL]: () =>
            u.default.Messages.PAYMENT_SOURCE_PAYPAL,
          [i.PaymentSourceTypes.SOFORT]: () =>
            u.default.Messages.PAYMENT_SOURCE_SOFORT,
          [i.PaymentSourceTypes.GIROPAY]: () =>
            u.default.Messages.PAYMENT_SOURCE_GIROPAY,
          [i.PaymentSourceTypes.PRZELEWY24]: () =>
            u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
          [i.PaymentSourceTypes.PAYSAFE_CARD]: () =>
            u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
          [i.PaymentSourceTypes.GCASH]: () =>
            u.default.Messages.PAYMENT_SOURCE_GCASH,
          [i.PaymentSourceTypes.GRABPAY_MY]: () =>
            u.default.Messages.PAYMENT_SOURCE_GRABPAY,
          [i.PaymentSourceTypes.MOMO_WALLET]: () =>
            u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
          [i.PaymentSourceTypes.VENMO]: () =>
            u.default.Messages.PAYMENT_SOURCE_VENMO,
          [i.PaymentSourceTypes.KAKAOPAY]: () =>
            u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
          [i.PaymentSourceTypes.GOPAY_WALLET]: () =>
            u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
          [i.PaymentSourceTypes.BANCONTACT]: () =>
            u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
          [i.PaymentSourceTypes.EPS]: () =>
            u.default.Messages.PAYMENT_SOURCE_EPS,
          [i.PaymentSourceTypes.IDEAL]: () =>
            u.default.Messages.PAYMENT_SOURCE_IDEAL,
          [i.PaymentSourceTypes.CASH_APP]: () =>
            u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
          [i.PaymentSourceTypes.APPLE]: () =>
            u.default.Messages.PAYMENT_SOURCE_APPLE,
        },
        S = [
          i.PaymentSourceTypes.EPS,
          i.PaymentSourceTypes.BANCONTACT,
          i.PaymentSourceTypes.IDEAL,
          i.PaymentSourceTypes.SOFORT,
          i.PaymentSourceTypes.GIROPAY,
          i.PaymentSourceTypes.SEPA_DEBIT,
          i.PaymentSourceTypes.PAYSAFE_CARD,
        ],
        h = (e, t, s, n) => {
          if (null == e) return "";
          let a = (0, r.getI18NCountryName)(e);
          if (t === o.CurrencyCodes.EUR)
            return s
              ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format(
                  { country: a }
                )
              : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format(
                  { currencyISOCode: t.toUpperCase() }
                );
          return n
            ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                countryName: a,
              })
            : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                country: a,
              });
        },
        f = e => {
          let {
              localizedPricingPromo: t,
              subscription: s,
              forceSingleLine: n = !1,
              userLocale: h,
            } = e,
            {
              countryCode: f,
              amount: _,
              currency: A,
              paymentSourceTypes: P,
            } = t,
            I = 0 !== P.length,
            C = E(f),
            T = (0, l.formatPrice)(_, A, {
              style: "currency",
              currency: A,
              currencyDisplay: "symbol",
              localeOverride: C,
            }),
            m =
              u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format(
                {
                  helpCenterLink: a.default.getArticleURL(
                    i.HelpdeskArticles.LOCALIZED_PRICING
                  ),
                  currencyISOCode: A.toUpperCase(),
                  localizedPriceWithCurrencySymbol: T,
                }
              );
          if (
            (c.has(A) &&
              (m =
                u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      i.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    localizedPriceWithCurrencySymbol: T,
                  }
                )),
            d.has(A) &&
              (m =
                u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      i.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    currencyISOCode: A.toUpperCase(),
                    localizedPriceWithCurrencySymbol: T,
                  }
                )),
            null != s &&
              !s.hasPremiumNitroMonthly &&
              (m =
                u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format(
                  {
                    helpCenterLink: a.default.getArticleURL(
                      i.HelpdeskArticles.LOCALIZED_PRICING
                    ),
                    currencyISOCode: A.toUpperCase(),
                  }
                )),
            A === o.CurrencyCodes.EUR &&
              (m = n
                ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format(
                    {
                      country: (0, r.getI18NCountryName)(f),
                      currencyISOCode: A.toUpperCase(),
                      helpCenterLink: a.default.getArticleURL(
                        i.HelpdeskArticles.LOCALIZED_PRICING
                      ),
                    }
                  )
                : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format(
                    {
                      currencyISOCode: A.toUpperCase(),
                      helpCenterLink: a.default.getArticleURL(
                        i.HelpdeskArticles.LOCALIZED_PRICING
                      ),
                    }
                  )),
            I)
          ) {
            let e = S.filter(e => P.includes(e)),
              t = P.filter(e => !S.includes(e)),
              s = [...e, ...t],
              n = s.slice(0, 2).map(e => {
                var t, s;
                return null !==
                  (s =
                    null === (t = p[e]) || void 0 === t ? void 0 : t.call(p)) &&
                  void 0 !== s
                  ? s
                  : u.default.Messages.PAYMENT_SOURCE_UNKNOWN;
              });
            P.length >= 3 &&
              n.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
            let r = new Intl.ListFormat(h, {
              style: "short",
              type: "conjunction",
            });
            m =
              u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format(
                {
                  helpCenterLink: a.default.getArticleURL(
                    i.HelpdeskArticles.LOCALIZED_PRICING
                  ),
                  paymentMethods: r.format(n),
                }
              );
          }
          return {
            localizedPricingBannerHeader:
              u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                country: (0, r.getI18NCountryName)(f),
              }),
            localizedPricingBannerBody: m,
            localizedPricingBannerLinkOnly:
              u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                helpCenterLink: a.default.getArticleURL(
                  i.HelpdeskArticles.LOCALIZED_PRICING
                ),
              }),
            localizedPricingBannerSubNotif: I
              ? void 0
              : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF,
          };
        },
        E = e => {
          let t = n.default.find(t => t.alpha2 === e);
          return null == t ? void 0 : t.localeForICU;
        };
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
        r = s("866227"),
        a = s.n(r),
        l = s("666038"),
        i = s("568734"),
        o = s("797647"),
        u = s("646718");
      let d = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      n = class e extends l.default {
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
                ? o.default.createFromServer(t.subscription_plan)
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
              u.PremiumSubscriptionSKUToPremiumType[this.skuId]) ||
            null
          );
        }
        get isSelfRedeemable() {
          return !(0, i.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, i.hasFlag)(
            this.flags,
            d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED
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
            return p;
          },
          default: function () {
            return h;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        a = s("414456"),
        l = s.n(a),
        i = s("77078"),
        o = s("474293"),
        u = s("145131"),
        d = s("782340"),
        c = s("704524");
      let p = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
      class S extends r.PureComponent {
        select() {
          var e;
          null === (e = this.inputRef.current) || void 0 === e || e.select();
        }
        renderInput(e) {
          var t;
          let { value: s, mode: r } = this.props,
            a =
              null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
          return (0, n.jsx)("input", {
            className: l((0, o.getClass)(c, "input", r), {
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
              text: t = d.default.Messages.COPY,
              mode: s,
              hideMessage: r,
              className: a,
              buttonLook: S,
            } = this.props,
            h = null != r;
          switch (s) {
            case p.SUCCESS:
              e = i.ButtonColors.GREEN;
              break;
            case p.ERROR:
              e = i.ButtonColors.RED;
              break;
            default:
              e = this.props.buttonColor;
          }
          return (0, n.jsx)(i.FocusRing, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
              className: l((0, o.getClass)(c, "copyInput", s), a),
              ref: this.containerRef,
              children: (0, n.jsxs)(u.default, {
                className: c.layout,
                children: [
                  (0, n.jsxs)(u.default, {
                    className: c.inputWrapper,
                    children: [
                      this.renderInput(h),
                      h
                        ? (0, n.jsx)("div", {
                            className: c.hiddenMessage,
                            children: r,
                          })
                        : null,
                    ],
                  }),
                  (0, n.jsx)(u.default, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, n.jsx)(i.Button, {
                      className: c.button,
                      onClick: this.handleButtonClick,
                      size: i.ButtonSizes.MIN,
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
            (this.inputRef = r.createRef()),
            (this.containerRef = r.createRef()),
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
      (S.contextType = i.FormContext),
        (S.defaultProps = {
          supportsCopy: !0,
          buttonColor: i.ButtonColors.PRIMARY,
          buttonLook: i.ButtonLooks.FILLED,
          mode: p.DEFAULT,
        }),
        (S.Modes = p),
        (S.ButtonColors = i.ButtonColors),
        (S.ButtonLooks = i.ButtonLooks);
      var h = S;
    },
    561703: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("469563"),
        a = s("562366"),
        l = s("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: s = 16,
              color: r = "currentColor",
              foreground: a,
              ...i
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: s,
              viewBox: "0 0 18 20",
              children: (0, n.jsx)("path", {
                className: a,
                fill: r,
                d: "M15,15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0,20l1.5-1.5L3,20l1.5-1.5L6,20l1.5-1.5L9,20l1.5-1.5L12,20l1.5-1.5L15,20l1.5-1.5L18,20V0L16.5,1.5,15,0,13.5,1.5,12,0,10.5,1.5,9,0,7.5,1.5,6,0,4.5,1.5,3,0,1.5,1.5,0,0Z",
              }),
            });
          },
          a.ReceiptIcon,
          void 0,
          { size: 16 }
        );
    },
    315585: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("75196");
      function a(e) {
        let {
          width: t = 14,
          height: s = 14,
          color: a = "currentColor",
          foreground: l,
          ...i
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, r.default)(i),
          width: t,
          height: s,
          viewBox: "0 0 14 14",
          children: (0, n.jsx)("path", {
            className: l,
            fill: a,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    457589: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          ReceiptIcon: function () {
            return l;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("669491"),
        a = s("82169");
      let l = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: l = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M21 21.93V2.07a1 1 0 0 0-1.27-.97l-2.5.7a3 3 0 0 1-1.46.04l-3.12-.7a3 3 0 0 0-1.3 0l-3.12.7a3 3 0 0 1-1.45-.04l-2.51-.7A1 1 0 0 0 3 2.07v19.86a1 1 0 0 0 1.27.97l2.5-.7a3 3 0 0 1 1.46-.04l3.12.7a3 3 0 0 0 1.3 0l3.12-.7a3 3 0 0 1 1.45.04l2.51.7a1 1 0 0 0 1.27-.97ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
            clipRule: "evenodd",
            className: i,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=0998129e784fe0254758.js.map

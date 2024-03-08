(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25505"],
  {
    52801: function (e, t, s) {
      "use strict";
      e.exports = s.p + "427c912d3d4dbb1e3e11.svg";
    },
    789108: function (e, t, s) {
      "use strict";
      e.exports = s.p + "a4d9f17caaf1041fa989.svg";
    },
    520535: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d83a63e51c1f1f50df79.svg";
    },
    613012: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c459634ec3785edb2529.svg";
    },
    904958: function (e, t, s) {
      "use strict";
      e.exports = s.p + "3d51005f05446f4bbb8d.svg";
    },
    585851: function (e, t, s) {
      "use strict";
      e.exports = s.p + "078c7debaf010103bacc.svg";
    },
    826205: function (e, t, s) {
      "use strict";
      e.exports = s.p + "79fa2a636e7543b0038e.svg";
    },
    92001: function (e, t, s) {
      "use strict";
      e.exports = s.p + "682809d345f8af5a3ca2.svg";
    },
    846903: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d12b5c285831f85c5eee.svg";
    },
    34212: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c60749c54c9f5152ebbc.svg";
    },
    548101: function (e, t, s) {
      "use strict";
      e.exports = s.p + "9060782d88c4a5993423.svg";
    },
    522840: function (e, t, s) {
      "use strict";
      e.exports = s.p + "1ad291ea522c0221b8e4.svg";
    },
    950874: function (e, t, s) {
      "use strict";
      e.exports = s.p + "07b2e1151201a85aa5bf.svg";
    },
    252065: function (e, t, s) {
      "use strict";
      e.exports = s.p + "a3aa982e8b7cd877fcd6.svg";
    },
    107165: function (e, t, s) {
      "use strict";
      e.exports = s.p + "b2b4021247ae472a3393.svg";
    },
    145171: function (e, t, s) {
      "use strict";
      e.exports = s.p + "bf2112f95f21ba326716.svg";
    },
    187785: function (e, t, s) {
      "use strict";
      e.exports = s.p + "e2b3840db2a646d4551b.svg";
    },
    280103: function (e, t, s) {
      "use strict";
      e.exports = s.p + "d4e2b5a430b01fe5c996.svg";
    },
    259732: function (e, t, s) {
      "use strict";
      e.exports = s.p + "cc825f78ecea95a94d74.svg";
    },
    89553: function (e, t, s) {
      "use strict";
      var a, n, i, l, r, u;
      s.r(t),
        s.d(t, {
          RefundReason: function () {
            return a;
          },
          PremiumRefundDisqualificationReason: function () {
            return n;
          },
          AdyenResultCodes: function () {
            return i;
          },
        }),
        ((l = a || (a = {}))[(l.OTHER = 0)] = "OTHER"),
        (l[(l.GIFTING_REFUND = 1)] = "GIFTING_REFUND"),
        (l[(l.BUYERS_REMORSE = 2)] = "BUYERS_REMORSE"),
        (l[(l.WRONG_PURCHASE = 3)] = "WRONG_PURCHASE"),
        (l[(l.FORGOT_TO_CANCEL = 4)] = "FORGOT_TO_CANCEL"),
        (l[(l.SERVER_BOOSTING_COOLDOWN = 5)] = "SERVER_BOOSTING_COOLDOWN"),
        (l[(l.USER_CONFUSION = 6)] = "USER_CONFUSION"),
        (l[(l.WANT_TO_SWITCH_TIERS = 7)] = "WANT_TO_SWITCH_TIERS"),
        (l[(l.DONT_NEED = 8)] = "DONT_NEED"),
        ((r = n || (n = {}))[(r.OTHER = 0)] = "OTHER"),
        (r[(r.ALREADY_REFUNDED = 1)] = "ALREADY_REFUNDED"),
        (r[(r.NOT_USER_REFUNDABLE_TYPE = 2)] = "NOT_USER_REFUNDABLE_TYPE"),
        (r[(r.PAST_REFUNDABLE_DATE = 3)] = "PAST_REFUNDABLE_DATE"),
        (r[(r.ENTITLEMENT_ALREADY_CONSUMED = 4)] =
          "ENTITLEMENT_ALREADY_CONSUMED"),
        (r[(r.ALREADY_REFUNDED_PREMIUM = 5)] = "ALREADY_REFUNDED_PREMIUM"),
        (r[(r.ALREADY_REFUNDED_PREMIUM_GUILD = 6)] =
          "ALREADY_REFUNDED_PREMIUM_GUILD"),
        ((u = i || (i = {})).Authorised = "Authorised"),
        (u.Error = "Error");
    },
    364735: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var a,
        n,
        i = s("37983"),
        l = s("884691"),
        r = s("414456"),
        u = s.n(r),
        o = s("77078"),
        d = s("339783"),
        c = s("865146"),
        E = s("145131"),
        f = s("712218"),
        m = s("745279"),
        p = s("159885"),
        _ = s("782340"),
        I = s("29419");
      ((a = class extends l.PureComponent {
        get typeString() {
          let { paymentSource: e } = this.props;
          if (e instanceof c.PaypalSourceRecord) return f.default.Types.PAYPAL;
          if (e instanceof c.SofortSourceRecord) return f.default.Types.SOFORT;
          if (e instanceof c.CreditCardSourceRecord)
            return f.default.getType(e.brand);
          else if (e instanceof c.GiropaySourceRecord)
            return f.default.Types.GIROPAY;
          else if (e instanceof c.Przelewy24SourceRecord)
            return f.default.Types.PRZELEWY24;
          else if (e instanceof c.PaysafeSourceRecord)
            return f.default.Types.PAYSAFECARD;
          else if (e instanceof c.GcashSourceRecord)
            return f.default.Types.GCASH;
          else if (e instanceof c.GrabPayMySourceRecord)
            return f.default.Types.GRABPAY;
          else if (e instanceof c.MomoWalletSourceRecord)
            return f.default.Types.MOMO_WALLET;
          else if (e instanceof c.VenmoSourceRecord)
            return f.default.Types.VENMO;
          else if (e instanceof c.KaKaoPaySourceRecord)
            return f.default.Types.KAKAOPAY;
          else if (e instanceof c.GoPayWalletSourceRecord)
            return f.default.Types.GOPAY_WALLET;
          else if (e instanceof c.BancontactSourceRecord)
            return f.default.Types.BANCONTACT;
          else if (e instanceof c.EPSSourceRecord) return f.default.Types.EPS;
          else if (e instanceof c.IdealSourceRecord)
            return f.default.Types.IDEAL;
          else if (e instanceof c.CashAppSourceRecord)
            return f.default.Types.CASH_APP;
          else if (e instanceof c.AppleSourceRecord)
            return f.default.Types.APPLE;
          return f.default.Types.UNKNOWN;
        }
        getLabel(e) {
          return e instanceof c.CreditCardSourceRecord
            ? _.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                brand: (0, p.upperCaseFirstChar)(e.brand),
                last_4: e.last4,
              })
            : e instanceof c.PaypalSourceRecord
              ? _.default.Messages.PAYMENT_SOURCE_PAYPAL
              : e instanceof c.SofortSourceRecord
                ? _.default.Messages.PAYMENT_SOURCE_SOFORT
                : e instanceof c.GiropaySourceRecord
                  ? _.default.Messages.PAYMENT_SOURCE_GIROPAY
                  : e instanceof c.Przelewy24SourceRecord
                    ? _.default.Messages.PAYMENT_SOURCE_PRZELEWY24
                    : e instanceof c.PaysafeSourceRecord
                      ? _.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                      : e instanceof c.GcashSourceRecord
                        ? _.default.Messages.PAYMENT_SOURCE_GCASH
                        : e instanceof c.GrabPayMySourceRecord
                          ? _.default.Messages.PAYMENT_SOURCE_GRABPAY
                          : e instanceof c.MomoWalletSourceRecord
                            ? _.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
                            : e instanceof c.VenmoSourceRecord
                              ? _.default.Messages.PAYMENT_SOURCE_VENMO
                              : e instanceof c.KaKaoPaySourceRecord
                                ? _.default.Messages.PAYMENT_SOURCE_KAKAOPAY
                                : e instanceof c.GoPayWalletSourceRecord
                                  ? _.default.Messages
                                      .PAYMENT_SOURCE_GOPAY_WALLET
                                  : e instanceof c.BancontactSourceRecord
                                    ? _.default.Messages
                                        .PAYMENT_SOURCE_BANCONTACT
                                    : e instanceof c.IdealSourceRecord
                                      ? _.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format(
                                          {
                                            bank: (0,
                                            d.getIdealBankDisplayNameFromBankName)(
                                              e.bank
                                            ),
                                          }
                                        )
                                      : e instanceof c.EPSSourceRecord
                                        ? _.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format(
                                            {
                                              bank: (0,
                                              d.getEPSBankDisplayNameFromBankName)(
                                                e.bank
                                              ),
                                            }
                                          )
                                        : e instanceof c.CashAppSourceRecord
                                          ? _.default.Messages
                                              .PAYMENT_SOURCE_CASH_APP_PAY
                                          : e instanceof c.AppleSourceRecord
                                            ? _.default.Messages
                                                .PAYMENT_SOURCE_APPLE
                                            : _.default.Messages
                                                .PAYMENT_SOURCE_UNKNOWN;
        }
        renderDescription() {
          let { paymentSource: e, descriptionClassName: t } = this.props;
          return (0, i.jsx)(o.Text, {
            className: u(I.description, t),
            variant: "text-md/semibold",
            children: this.getLabel(e),
          });
        }
        renderSubText() {
          let { paymentSource: e, locale: t } = this.props,
            s = null;
          return (
            e instanceof c.CreditCardSourceRecord
              ? (s = _.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
                  month: (0, m.getLocalizedDisplayMonth)(e.expiresMonth, t),
                  year: e.expiresYear,
                }))
              : e instanceof c.PaypalSourceRecord
                ? (s = e.email)
                : e instanceof c.SofortSourceRecord
                  ? (s = e.email)
                  : e instanceof c.Przelewy24SourceRecord
                    ? (s = e.email)
                    : e instanceof c.VenmoSourceRecord
                      ? (s = "@" + e.username)
                      : e instanceof c.CashAppSourceRecord && (s = e.username),
            s
          );
        }
        render() {
          let {
              isDefault: e,
              paymentSource: t,
              showSubtext: s,
              isForSubscription: a,
            } = this.props,
            n = this.renderSubText();
          return (0, i.jsxs)(E.default, {
            children: [
              (0, i.jsx)(f.default, { type: this.typeString }),
              (0, i.jsxs)(E.default, {
                direction: E.default.Direction.VERTICAL,
                className: I.descriptionWrapper,
                children: [
                  (0, i.jsxs)(E.default, {
                    align: E.default.Align.CENTER,
                    children: [
                      this.renderDescription(),
                      e
                        ? (0, i.jsx)("div", {
                            className: I.defaultIndicator,
                            children: _.default.Messages.DEFAULT,
                          })
                        : null,
                      a
                        ? (0, i.jsx)("div", {
                            className: I.premiumIndicator,
                            children:
                              _.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION,
                          })
                        : null,
                      t.invalid
                        ? (0, i.jsx)("div", {
                            className: I.invalidIndicator,
                            children: _.default.Messages.PAYMENT_SOURCE_INVALID,
                          })
                        : null,
                    ],
                  }),
                  s && null != n
                    ? (0, i.jsx)("div", { className: I.subText, children: n })
                    : null,
                ],
              }),
            ],
          });
        }
      }).defaultProps = {
        isForSubscription: !1,
        isDefault: !1,
        showSubtext: !1,
      }),
        (n = a);
    },
    404515: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return U;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("414456"),
        l = s.n(i),
        r = s("627445"),
        u = s.n(r),
        o = s("974667"),
        d = s("446674"),
        c = s("77078"),
        E = s("913144"),
        f = s("850068"),
        m = s("444949"),
        p = s("775433"),
        _ = s("510889"),
        I = s("386876"),
        N = s("10514"),
        S = s("521012"),
        P = s("145131"),
        C = s("251752"),
        T = s("719923"),
        R = s("942456"),
        A = s("646718"),
        M = s("843455"),
        h = s("782340"),
        L = s("99119"),
        g = s("246677");
      function x(e) {
        let { payments: t, locale: s, compactMode: i, numPages: r } = e,
          u = n.useRef(null),
          [d, E] = n.useState(0),
          [m, p] = n.useState(null),
          I = t.slice(10 * d, (d + 1) * 10);
        n.useEffect(() => {
          var e;
          null === (e = u.current) || void 0 === e || e.scrollTo({ to: 0 });
        }, [d]);
        let N = n.useCallback(
            e => {
              E(e);
              let s = t[t.length - 1].id;
              e === r - 1 && m !== s && ((0, f.fetchPayments)(10, s), p(s));
            },
            [t, r, m]
          ),
          S = (0, _.default)("billing-history", u);
        return (0, a.jsx)(o.ListNavigatorProvider, {
          navigator: S,
          children: (0, a.jsx)(o.ListNavigatorContainer, {
            children: e => {
              let { ref: t, ...n } = e;
              return (0, a.jsx)(C.default, {
                className: l(L.verticalFit, L.paginator),
                currentPageIndex: d,
                onChangePage: N,
                numPages: r,
                ref: t,
                ...n,
                children: (0, a.jsx)(c.AdvancedScroller, {
                  className: L.bottomDivider,
                  ref: u,
                  children: I.map((e, t) =>
                    (0, a.jsx)(
                      R.default,
                      {
                        className: l(L.paymentRow, L.bottomDivider),
                        payment: e,
                        locale: s,
                        compactMode: i,
                      },
                      t
                    )
                  ),
                }),
              });
            },
          }),
        });
      }
      class y extends n.PureComponent {
        get numPages() {
          return Math.max(Math.ceil(this.props.payments.length / 10), 1);
        }
        componentDidMount() {
          E.default.wait(() => {
            (0, m.fetchActivityStatistics)(), (0, f.fetchPayments)(20);
          });
        }
        renderPremiumExternalSubscription(e) {
          return (
            u(
              null != e.paymentGateway,
              "Expected payment gateway when rendering for external subscription"
            ),
            (0, a.jsxs)(c.Card, {
              className: L.externalRow,
              children: [
                (0, a.jsx)("div", {
                  className: L.externalRowHeader,
                  children: h.default.Messages.BILLING_EXTERNAL_HEADER.format({
                    paymentGatewayName:
                      M.PaymentGatewayToFriendlyName[e.paymentGateway],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: L.externalRowBody,
                  children:
                    h.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
                      paymentGatewayName:
                        M.PaymentGatewayToFriendlyName[e.paymentGateway],
                      billingHistoryLink: (0,
                      T.getExternalSubscriptionMethodUrl)(
                        e.paymentGateway,
                        "BILLING_HISTORY"
                      ),
                    }),
                }),
              ],
            })
          );
        }
        render() {
          let {
              compactMode: e,
              payments: t,
              subscription: s,
              locale: n,
            } = this.props,
            i = null != s && s.isPurchasedExternally;
          return 0 !== t.length || i
            ? (0, a.jsxs)("div", {
                className: L.verticalFit,
                children: [
                  null != s && i
                    ? this.renderPremiumExternalSubscription(s)
                    : null,
                  t.length > 0
                    ? (0, a.jsxs)("div", {
                        className: l(L.paymentPane, L.verticalFit),
                        children: [
                          e
                            ? null
                            : (0, a.jsx)("div", {
                                className: l(L.paymentRow, L.bottomDivider),
                                children: (0, a.jsxs)(P.default, {
                                  className: L.paymentRowHeader,
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: g.date,
                                      children:
                                        h.default.Messages
                                          .BILLING_PAYMENT_TABLE_HEADER_DATE,
                                    }),
                                    (0, a.jsx)("div", {
                                      className: L.paymentRowHeaderDescription,
                                      children:
                                        h.default.Messages
                                          .BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION,
                                    }),
                                    (0, a.jsx)("div", {
                                      className: g.amount,
                                      children:
                                        h.default.Messages
                                          .BILLING_PAYMENT_TABLE_HEADER_AMOUNT,
                                    }),
                                  ],
                                }),
                              }),
                          (0, a.jsx)(x, {
                            compactMode: e,
                            locale: n,
                            payments: t,
                            numPages: this.numPages,
                          }),
                        ],
                      })
                    : null,
                ],
              })
            : null;
        }
        constructor(...e) {
          super(...e), (this.scrollerRef = n.createRef());
        }
      }
      function D(e) {
        var t;
        let s = e.skuId,
          a =
            null === (t = e.subscription) || void 0 === t
              ? void 0
              : t.items[0].planId;
        return !(
          null == s ||
          null == a ||
          Object.values(A.PremiumSubscriptionSKUs).includes(s) ||
          (0, T.isPremiumSubscriptionPlan)(a)
        );
      }
      function U(e) {
        let t = (0, d.useStateFromStores)([I.default], () =>
            I.default.getPayments()
          ),
          s = (0, d.useStateFromStores)([S.default], () =>
            S.default.getPremiumTypeSubscription()
          ),
          i = n.useMemo(
            () =>
              new Set(
                t.filter(D).map(e => {
                  let { subscription: t } = e;
                  return null == t ? void 0 : t.items[0].planId;
                })
              ),
            [t]
          ),
          l = n.useMemo(
            () =>
              new Set(
                t.filter(D).map(e => {
                  let { skuId: t } = e;
                  return t;
                })
              ),
            [t]
          ),
          r = (0, d.useStateFromStoresArray)([N.default], () =>
            N.default.getPlanIdsForSkus(Array.from(l))
          ),
          u = n.useCallback(() => r.length === i.size, [r, i]);
        return (
          n.useEffect(() => {
            !u() &&
              E.default.wait(() => {
                l.forEach(e =>
                  (0, p.fetchSubscriptionPlansForSKU)(
                    e,
                    void 0,
                    void 0,
                    !0,
                    void 0
                  )
                );
              });
          }, [u, l]),
          (0, a.jsx)(y, { ...e, payments: u() ? t : [], subscription: s })
        );
      }
      y.defaultProps = { compactMode: !1 };
    },
    942456: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ep;
          },
        }),
        s("222007"),
        s("424973"),
        s("702976");
      var a,
        n,
        i = s("37983"),
        l = s("884691"),
        r = s("414456"),
        u = s.n(r),
        o = s("627445"),
        d = s.n(o),
        c = s("866227"),
        E = s.n(c),
        f = s("974667"),
        m = s("199108"),
        p = s("446674"),
        _ = s("77078"),
        I = s("54239"),
        N = s("545158"),
        S = s("299285"),
        P = s("609190"),
        C = s("442379"),
        T = s("565559"),
        R = s("928576"),
        A = s("407417"),
        M = s("246421"),
        h = s("264742"),
        L = s("537325"),
        g = s("739295"),
        x = s("24373"),
        y = s("41170"),
        D = s("865146"),
        U = s("305961"),
        O = s("357957"),
        v = s("10514"),
        b = s("251013"),
        B = s("145131"),
        j = s("953109"),
        G = s("37785"),
        F = s("712218"),
        k = s("461380"),
        w = s("36694"),
        Y = s("945330"),
        H = s("743826"),
        W = s("978679"),
        V = s("216422"),
        K = s("306160"),
        z = s("888400"),
        Z = s("568734"),
        X = s("719923"),
        q = s("153160"),
        J = s("364735"),
        Q = s("206343"),
        $ = s("89553"),
        ee = s("49111"),
        et = s("646718"),
        es = s("843455"),
        ea = s("782340"),
        en = s("246677");
      let ei = e =>
          "https://"
            .concat(ee.SUPPORT_DOMAIN, "/hc/")
            .concat(
              e.toLowerCase(),
              "/requests/new?ticket_form_id=360000118612"
            ),
        el = [
          ee.SKUTypes.DURABLE_PRIMARY,
          ee.SKUTypes.DURABLE,
          ee.SKUTypes.CONSUMABLE,
        ];
      ((n = a || (a = {})).TIME_PLAYED = "TIME_PLAYED"),
        (n.PURCHASE_DATE = "PURCHASE_DATE"),
        (n.SKU_TYPE = "SKU_TYPE"),
        (n.ALREADY_REFUNDED = "ALREADY_REFUNDED"),
        (n.PAYMENT_STATUS = "PAYMENT_STATUS"),
        (n.PAYMENT_GATEWAY = "PAYMENT_GATEWAY"),
        (n.SKU_STICKER_PACK = "SKU_STICKER_PACK"),
        (n.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE"),
        (n.GUILD_PRODUCT = "GUILD_PRODUCT");
      let er = [
          ee.PaymentStatusTypes.FAILED,
          ee.PaymentStatusTypes.REVERSED,
          ee.PaymentStatusTypes.CANCELED,
        ],
        eu = [es.PaymentGateways.APPLE],
        eo = e => {
          let { description: t, cost: s } = e;
          return (0, i.jsx)("li", {
            className: en.paymentDetail,
            children: (0, i.jsxs)(B.default, {
              justify: B.default.Justify.BETWEEN,
              children: [
                (0, i.jsx)("div", { children: t }),
                (0, i.jsx)("div", { children: s }),
              ],
            }),
          });
        };
      function ed(e) {
        let { value: t, copyText: s, copyFeedbackText: a } = e,
          [n, r] = l.useState(!1),
          [u, o] = l.useState(!1),
          d = () => {
            (0, K.copy)(t), o(!0), r(!0);
          };
        return (0, i.jsx)(_.Tooltip, {
          forceOpen: u,
          text: n ? a : s,
          children: e => {
            let { onMouseEnter: s, onMouseLeave: a, ...l } = e;
            return (0, i.jsx)(_.Clickable, {
              ...l,
              onMouseEnter: () => {
                n && r(!1), "function" == typeof s && s();
              },
              onMouseLeave: () => {
                o(!1), "function" == typeof a && a();
              },
              onClick: d,
              children: (0, i.jsx)("div", {
                className: en.copiableContainer,
                children: t,
              }),
            });
          },
        });
      }
      let ec = e => {
        let { description: t, detail: s } = e;
        return (0, i.jsx)("li", {
          className: en.guildProductDetail,
          children: (0, i.jsxs)(B.default, {
            justify: B.default.Justify.BETWEEN,
            children: [
              (0, i.jsx)("div", { children: t }),
              (0, i.jsx)("div", { children: s }),
            ],
          }),
        });
      };
      function eE(e) {
        let { guildId: t, guildProductListingId: s } = e,
          a = (0, C.useFetchGuildProductListing)(t, s, {
            requireCurrentGuild: !1,
          }),
          n = (0, R.useProductType)(a),
          r = (0, p.useStateFromStores)([U.default], () =>
            U.default.getGuild(t)
          ),
          u =
            (null == a ? void 0 : a.role_id) != null &&
            (null == a ? void 0 : a.attachments_count) === 0
              ? ea.default.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE
              : n,
          o = l.useCallback(async () => {
            (null == r
              ? void 0
              : r.hasFeature(
                  ee.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE
                )) === !0
              ? await (0, L.default)(ee.Routes.GUILD_PRODUCT(t, s))
              : await (0, L.default)(ee.Routes.CHANNEL(t)),
              (0, I.popLayer)();
          }, [r, t, s]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null != u &&
              (0, i.jsx)(ec, {
                description:
                  ea.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
                detail: u,
              }),
            null != r &&
              (0, i.jsx)(ec, {
                description:
                  ea.default.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
                detail: (0, i.jsx)(G.default, { onClick: o, children: r.name }),
              }),
          ],
        });
      }
      function ef(e) {
        var t, s;
        let { guildId: a, guildProductListingId: n } = e,
          l = (0, C.useFetchGuildProductListing)(a, n, {
            requireCurrentGuild: !1,
          }),
          r = (0, p.useStateFromStores)(
            [T.default],
            () =>
              T.default.getGuildProductFetchState(n) === T.FetchState.FETCHING
          ),
          u = null == l ? void 0 : l.role_id,
          o = (0, p.useStateFromStores)(
            [U.default],
            () => (null != u ? U.default.getRole(a, u) : void 0),
            [a, u]
          ),
          d =
            (null !==
              (s =
                null == l
                  ? void 0
                  : null === (t = l.attachments) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== s
              ? s
              : 0) > 0,
          c = null != o;
        return r
          ? (0, i.jsx)("div", {
              className: en.guildProductBenefits,
              children: (0, i.jsx)(_.Spinner, {}),
            })
          : null != l && (d || c)
            ? (0, i.jsxs)("div", {
                className: en.guildProductBenefits,
                children: [
                  d &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(_.Text, {
                          variant: "text-xs/semibold",
                          color: "header-secondary",
                          className: en.guildProductBenefitLabel,
                          children:
                            ea.default.Messages
                              .GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES,
                        }),
                        (0, i.jsx)(A.default, { guildId: a, productId: l.id }),
                      ],
                    }),
                  c &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        d && (0, i.jsx)("div", { className: en.divider }),
                        (0, i.jsx)(_.Text, {
                          variant: "text-xs/semibold",
                          color: "header-secondary",
                          className: en.guildProductBenefitLabel,
                          children:
                            ea.default.Messages
                              .GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
                        }),
                        (0, i.jsx)(M.default, { role: o }),
                      ],
                    }),
                ],
              })
            : null;
      }
      class em extends l.PureComponent {
        get timePlayed() {
          let { applicationStatistics: e } = this.props;
          return null != e && null != e.total_discord_sku_duration
            ? E.duration(e.total_discord_sku_duration, "seconds")
            : null;
        }
        get daysSincePurchase() {
          let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            s = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
          return E().diff(s, "days");
        }
        get isSkuPreorder() {
          let { payment: e } = this.props;
          return null != e.sku && e.sku.isPreorder();
        }
        get isPremium() {
          let { payment: e } = this.props;
          return (
            e.isPremiumSubscription ||
            e.isPremiumGuildSubscription ||
            e.isPremiumGift
          );
        }
        get typeString() {
          let {
            payment: { paymentSource: e },
          } = this.props;
          return e instanceof D.PaypalSourceRecord
            ? F.default.Types.PAYPAL
            : e instanceof D.CreditCardSourceRecord
              ? F.default.getType(e.brand)
              : F.default.Types.UNKNOWN;
        }
        validateRefundRules() {
          return this.refundRules
            .filter(e => {
              let { canRefund: t } = e;
              return !t();
            })
            .map(e => {
              let { rule: t } = e;
              return t;
            });
        }
        renderStatus() {
          let { payment: e } = this.props;
          switch (e.status) {
            case ee.PaymentStatusTypes.PENDING:
              return (0, i.jsx)("span", {
                className: en.statusTagGrey,
                children: ea.default.Messages.BILLING_TAG_PENDING,
              });
            case ee.PaymentStatusTypes.FAILED:
              return (0, i.jsx)("span", {
                className: en.statusTagRed,
                children: ea.default.Messages.BILLING_TAG_FAILED,
              });
            case ee.PaymentStatusTypes.REFUNDED:
              if (e.amountRefunded !== e.amount)
                return (0, i.jsx)("span", {
                  className: en.statusTagGreen,
                  children: ea.default.Messages.BILLING_TAG_PARTIALLY_REFUNDED,
                });
              return (0, i.jsx)("span", {
                className: en.statusTagGreen,
                children: ea.default.Messages.BILLING_TAG_REFUNDED,
              });
            case ee.PaymentStatusTypes.REVERSED:
              return (0, i.jsx)("span", {
                className: en.statusTagRed,
                children: ea.default.Messages.BILLING_TAG_REVERSED,
              });
            case ee.PaymentStatusTypes.CANCELED:
              return (0, i.jsx)("span", {
                className: en.statusTagRed,
                children: ea.default.Messages.BILLING_TAG_CANCELED,
              });
            default:
              return null;
          }
        }
        renderPrice() {
          let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
          return (0, i.jsx)("span", {
            className: en.price,
            children: (0, q.formatPrice)(t, e.currency),
          });
        }
        renderPaymentIdField() {
          let { payment: e } = this.props;
          return (0, i.jsx)("li", {
            className: en.paymentDetail,
            children: (0, i.jsxs)("div", {
              className: en.paymentInfo,
              children: [
                (0, i.jsx)("div", {
                  children: ea.default.Messages.BILLING_PAYMENT_ID,
                }),
                (0, i.jsx)(ed, {
                  value: e.id,
                  copyText: ea.default.Messages.BILLING_PAYMENT_ID_COPY,
                  copyFeedbackText:
                    ea.default.Messages.BILLING_PAYMENT_ID_COPIED,
                }),
              ],
            }),
          });
        }
        renderPaymentBreakdown() {
          let { payment: e, locale: t, application: s } = this.props,
            {
              taxInclusive: a,
              tax: n,
              amount: r,
              amountRefunded: o,
              currency: d,
            } = e,
            c = null == s ? void 0 : s.guildId;
          return (0, i.jsxs)("div", {
            className: u(en.paymentText, en.paymentBreakdown),
            children: [
              null != e.paymentSource
                ? (0, i.jsx)(J.default, {
                    paymentSource: e.paymentSource,
                    locale: t,
                    descriptionClassName: en.paymentText,
                  })
                : e.paymentGateway === es.PaymentGateways.APPLE_PARTNER
                  ? (0, i.jsx)(J.default, {
                      paymentSource: new D.AppleSourceRecord({}),
                      locale: t,
                      descriptionClassName: en.paymentText,
                    })
                  : null,
              (0, i.jsxs)("ul", {
                children: [
                  this.renderPaymentIdField(),
                  !a && n > 0
                    ? (0, i.jsxs)(l.Fragment, {
                        children: [
                          (0, i.jsx)(eo, {
                            description: e.description,
                            cost: (0, q.formatPrice)(r - n, d),
                          }),
                          (0, i.jsx)(eo, {
                            description:
                              ea.default.Messages
                                .BILLING_PAYMENT_BREAKDOWN_TAXES,
                            cost: (0, q.formatPrice)(n, d),
                          }),
                        ],
                      })
                    : null,
                  (0, i.jsx)(eo, {
                    description:
                      ea.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                    cost: (0, q.formatPrice)(r, d),
                  }),
                  e.isGuildProductPurchase &&
                    null != c &&
                    null != e.sku &&
                    (0, i.jsx)(eE, {
                      guildId: c,
                      guildProductListingId: e.sku.id,
                    }),
                  o > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(eo, {
                          description:
                            ea.default.Messages
                              .BILLING_PAYMENT_BREAKDOWN_REFUNDED,
                          cost: (0, q.formatPrice)(o, d),
                        }),
                        (0, i.jsx)(eo, {
                          description:
                            ea.default.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
                          cost: (0, q.formatPrice)(r - o, d),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        renderInvoiceDownload() {
          let { payment: e } = this.props;
          return (0, i.jsx)(P.default, { payment: e });
        }
        renderRefundDetails() {
          var e;
          let t;
          let { locale: s, payment: a } = this.props,
            n = this.validateRefundRules();
          if (
            n.includes("PAYMENT_GATEWAY") ||
            n.includes("PAYMENT_STATUS") ||
            n.includes("ALREADY_REFUNDED") ||
            n.includes("SKU_STICKER_PACK") ||
            n.includes("SUBSCRIPTION_TYPE") ||
            n.includes("GUILD_PRODUCT")
          )
            return null;
          if (
            (null === (e = a.sku) || void 0 === e ? void 0 : e.productLine) ===
            ee.SKUProductLines.COLLECTIBLES
          )
            return (0, i.jsx)("div", {
              className: en.paymentText,
              children: this.renderRefundActions(n),
            });
          let r = 0 === n.length,
            u = ei(s),
            o = this.isPremium ? 5 : 14;
          return (
            (t = n.includes("SKU_TYPE")
              ? ea.default.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format(
                  { supportURL: u }
                )
              : r
                ? a.isPreorder && this.isSkuPreorder
                  ? ea.default.Messages.BILLING_PREORDER_REFUND_TEXT.format({
                      supportURL: u,
                    })
                  : a.isPremiumSubscription || a.isPremiumGuildSubscription
                    ? ea.default.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
                        dateLimit: o,
                        supportURL: u,
                      })
                    : a.isGift
                      ? ea.default.Messages.BILLING_GIFT_REFUND_TEXT.format({
                          dateLimit: o,
                          supportURL: u,
                        })
                      : ea.default.Messages.BILLING_APPLICATION_REFUND_TEXT.format(
                          { dateLimit: o, playtimeLimit: 2, supportURL: u }
                        )
                : a.isGift
                  ? ea.default.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
                      dateLimit: o,
                    })
                  : a.isPremiumSubscription || a.isPremiumGuildSubscription
                    ? ea.default.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format(
                        { dateLimit: o }
                      )
                    : ea.default.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format(
                        { dateLimit: o, playtimeLimit: 2 }
                      )),
            this.isPremium && (0, Q.userInRefundExperiment)() && (t = null),
            (0, i.jsxs)(l.Fragment, {
              children: [
                (0, i.jsx)(_.H, {
                  className: en.paymentHeader,
                  children: ea.default.Messages.BILLING_REFUND_HEADER,
                }),
                (0, i.jsxs)("div", {
                  className: en.paymentText,
                  children: [
                    (0, i.jsx)("div", { children: t }),
                    this.renderRefundActions(n),
                  ],
                }),
              ],
            })
          );
        }
        renderRefundCriteria(e, t, s, a) {
          return (0, i.jsxs)(
            "div",
            {
              className: en.refundCriteria,
              children: [
                (0, i.jsx)(_.H, { className: en.refundSubHeader, children: e }),
                (0, i.jsxs)("div", {
                  className: en.refundIconContainer,
                  children: [
                    (0, i.jsx)(t, { className: en.refundCriteriaIcon }),
                    null != s && (0, i.jsx)("div", { children: s }),
                  ],
                }),
              ],
            },
            a
          );
        }
        renderRefundActions(e) {
          var t, a, n;
          let { locale: l, payment: r } = this.props;
          if (this.isSkuPreorder || e.includes("SKU_TYPE")) return null;
          let u =
              (null === (t = r.sku) || void 0 === t
                ? void 0
                : t.productLine) === ee.SKUProductLines.COLLECTIBLES,
            o = e.includes("PURCHASE_DATE") ? Y.default : w.default,
            d =
              e.includes("TIME_PLAYED") ||
              (null === (a = r.premiumRefundDisqualificationReasons) ||
              void 0 === a
                ? void 0
                : a.includes(
                    $.PremiumRefundDisqualificationReason.PAST_REFUNDABLE_DATE
                  ))
                ? Y.default
                : w.default;
          if (!this.isPremium || !(0, Q.userInRefundExperiment)())
            return (0, i.jsxs)("div", {
              className: en.refundActions,
              children: [
                (0, i.jsxs)("div", {
                  className: en.refundRules,
                  children: [
                    this.renderRefundCriteria(
                      r.isPreorder
                        ? ea.default.Messages
                            .BILLING_REFUND_RELEASE_DATE_SUBHEADER
                        : ea.default.Messages
                            .BILLING_REFUND_PURCHASE_DATE_SUBHEADER,
                      o,
                      ea.default.Messages.BILLING_REFUND_PURCHASE_DATE.format({
                        daysSincePurchase: this.daysSincePurchase,
                      })
                    ),
                    r.isSubscription || r.isGift || u
                      ? null
                      : this.renderRefundCriteria(
                          ea.default.Messages
                            .BILLING_REFUND_PLAY_TIME_SUBHEADER,
                          d,
                          null != this.timePlayed
                            ? this.timePlayed.humanize()
                            : ea.default.Messages
                                .BILLING_REFUND_PLAY_TIME_NEVER_PLAYED
                        ),
                  ],
                }),
                (0, i.jsx)(_.Anchor, {
                  href: ei(l),
                  children: ea.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM,
                }),
              ],
            });
          let c = (
              null !== (n = r.premiumRefundDisqualificationReasons) &&
              void 0 !== n
                ? n
                : [$.PremiumRefundDisqualificationReason.OTHER]
            )[0],
            E = null != c || 0 !== e.length || r.isPurchasedExternally;
          return (0, i.jsxs)("div", {
            className: en.refundActions,
            children: [
              (0, i.jsx)(_.Tooltip, {
                shouldShow: E,
                text: (function (e) {
                  switch (e) {
                    case $.PremiumRefundDisqualificationReason
                      .ALREADY_REFUNDED_PREMIUM:
                      return ea.default.Messages
                        .BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
                    case $.PremiumRefundDisqualificationReason
                      .ALREADY_REFUNDED_PREMIUM_GUILD:
                      return ea.default.Messages
                        .BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
                    case $.PremiumRefundDisqualificationReason
                      .ENTITLEMENT_ALREADY_CONSUMED:
                      return ea.default.Messages
                        .BILLING_REFUND_ALREADY_CONSUMED_REASON;
                    default:
                      return ea.default.Messages.BILLING_REFUND_GENERIC_REASON;
                  }
                })(c),
                children: e =>
                  (0, i.jsx)(_.Button, {
                    ...e,
                    color: _.Button.Colors.PRIMARY,
                    disabled: E,
                    onClick: () =>
                      (0, _.openModalLazy)(async () => {
                        let { default: e } = await s
                          .el("560785")
                          .then(s.bind(s, "560785"));
                        return t =>
                          (0, i.jsx)(e, {
                            payment: r,
                            reportProblemUrl: ei(l),
                            ...t,
                          });
                      }),
                    children: ea.default.Messages.BILLING_REFUND_BUTTON_TEXT,
                  }),
              }),
              (0, i.jsx)(_.Anchor, {
                href: ei(l),
                children: ea.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM,
              }),
            ],
          });
        }
        renderDescription() {
          let e, t;
          let {
              compactMode: s,
              payment: a,
              application: n,
              guild: r,
              stickerPack: u,
            } = this.props,
            { expanded: o } = this.state,
            c = a.sku,
            f = a.subscription,
            m =
              null != a.paymentSource &&
              ee.PREPAID_PAYMENT_SOURCES.has(a.paymentSource.type);
          if (null != f && 0 !== f.items.length) {
            let s = [],
              a = null;
            if (f.type === ee.SubscriptionTypes.PREMIUM)
              f.items.forEach(e => {
                let { planId: t, quantity: n } = e;
                (0, X.isPremiumBaseSubscriptionPlan)(t)
                  ? (s.push(X.default.getDisplayName(t, !1, m)),
                    (a = (0, X.castPremiumSubscriptionAsSkuId)(
                      et.SubscriptionPlanInfo[t].skuId
                    )))
                  : (s.push(
                      ""
                        .concat(n > 1 ? "".concat(n, "x ") : "")
                        .concat(X.default.getDisplayName(t, !1, m))
                    ),
                    null == a &&
                      (a = (0, X.castPremiumSubscriptionAsSkuId)(
                        et.SubscriptionPlanInfo[t].skuId
                      )));
              });
            else if (f.type === ee.SubscriptionTypes.GUILD) {
              let e = v.default.get(f.items[0].planId);
              d(
                null != e,
                "Guild subscription plan should already have been loaded"
              );
              let t =
                e.interval === et.SubscriptionIntervalTypes.YEAR
                  ? ea.default.Messages.YEARLY_GUILD_SUBSCRIPTION
                  : ea.default.Messages.MONTHLY_GUILD_SUBSCRIPTION;
              s.push(t.format({ planName: e.name })), (a = e.skuId);
            } else if (f.type === ee.SubscriptionTypes.APPLICATION) {
              let e = v.default.get(f.items[0].planId);
              d(
                null != e,
                "Application subscription plan should already have been loaded"
              ),
                null != n
                  ? s.push(
                      ea.default.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format(
                        { tier: null == c ? void 0 : c.name }
                      )
                    )
                  : s.push(
                      ea.default.Messages
                        .APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION
                    ),
                (a = e.skuId);
            }
            (t = s.join(", ")),
              (e = (0, i.jsx)(j.default, {
                className: en.descriptionIcon,
                guildClassName: en.guildDescriptionIcon,
                game: n,
                guild: r,
                size: j.default.Sizes.XSMALL,
                skuId: a,
              }));
          } else if (null != c) {
            var p;
            if (
              ((t = a.isPreorder
                ? ea.default.Messages.PREORDER_SKU_NAME.format({ name: c.name })
                : a.isGuildProductPurchase && a.isSoftDeletedProduct
                  ? ea.default.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT
                  : c.name),
              null != u)
            ) {
              let t = (0, x.getStickerPackPreviewSticker)(u);
              e = (0, i.jsx)(y.default, {
                disableAnimation: !o,
                isInteracting: o,
                sticker: t,
                className: en.descriptionIcon,
                size: 24,
              });
            } else
              e =
                (null === (p = a.sku) || void 0 === p
                  ? void 0
                  : p.productLine) === ee.SKUProductLines.COLLECTIBLES
                  ? (0, i.jsx)(H.default, { className: en.shopIcon })
                  : (0, i.jsx)(j.default, {
                      className: en.descriptionIcon,
                      guildClassName: en.guildDescriptionIcon,
                      game: n,
                      guild: r,
                      size: j.default.Sizes.XSMALL,
                      skuId: c.id,
                    });
          } else
            (e = (0, i.jsx)(V.default, { className: en.descriptionIcon })),
              (t = a.description);
          let I = (0, i.jsx)("div", {
              className: en.date,
              children: (0, z.dateFormat)(E(a.createdAt), "MM/DD/YYYY"),
            }),
            N = a.isGift
              ? (0, i.jsx)(_.Tooltip, {
                  text: ea.default.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
                  children: e =>
                    (0, i.jsx)(W.default, { className: en.giftIcon, ...e }),
                })
              : null;
          return s
            ? (0, i.jsxs)("div", {
                className: en.description,
                children: [e, (0, i.jsxs)("div", { children: [t, I] }), N],
              })
            : (0, i.jsxs)(l.Fragment, {
                children: [
                  I,
                  (0, i.jsxs)("div", {
                    className: en.description,
                    children: [e, (0, i.jsx)("div", { children: t }), N],
                  }),
                ],
              });
        }
        renderGuildProductBenefits() {
          let { payment: e, application: t, locale: s } = this.props,
            a = null == t ? void 0 : t.guildId,
            n = e.isGuildProductPurchase;
          return n
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: en.sectionDivider }),
                  e.isSoftDeletedProduct
                    ? (0, i.jsx)(h.default, {
                        className: en.warningBlock,
                        buttonPosition: h.WarningBlockButtonPosition.RIGHT,
                        notice:
                          ea.default.Messages
                            .GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
                        ctaLabel:
                          ea.default.Messages
                            .GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
                        onClick: () => (0, N.default)(ei(s)),
                      })
                    : null != a &&
                      null != e.sku &&
                      (0, i.jsx)(ef, {
                        guildId: a,
                        guildProductListingId: e.sku.id,
                      }),
                ],
              })
            : null;
        }
        renderExpandedSection() {
          return (0, i.jsx)(_.Clickable, {
            onClick: e => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
              className: en.expandedInfo,
              children: [
                (0, i.jsx)(_.H, {
                  className: en.paymentHeader,
                  children: ea.default.Messages.BILLING_PURCHASE_DETAILS_HEADER,
                }),
                this.renderPaymentBreakdown(),
                this.renderGuildProductBenefits(),
                this.renderInvoiceDownload(),
                this.renderRefundDetails(),
              ],
            }),
          });
        }
        render() {
          let { payment: e, className: t, compactMode: s } = this.props,
            { expanded: a } = this.state;
          return (0, i.jsx)(f.ListNavigatorItem, {
            id: e.id,
            children: e =>
              (0, i.jsxs)(_.Clickable, {
                onClick: this.handleExpandInfo,
                className: u(a ? en.payment : en.hoverablePayment, t, {
                  [en.compact]: s,
                }),
                focusProps: { offset: 4 },
                ...e,
                children: [
                  (0, i.jsxs)(B.default, {
                    className: en.summaryInfo,
                    align: B.default.Align.CENTER,
                    children: [
                      this.renderDescription(),
                      (0, i.jsxs)("div", {
                        className: en.amount,
                        children: [this.renderStatus(), this.renderPrice()],
                      }),
                      (0, i.jsx)(k.default, {
                        className: en.expand,
                        direction: a
                          ? k.default.Directions.UP
                          : k.default.Directions.DOWN,
                      }),
                    ],
                  }),
                  a ? this.renderExpandedSection() : null,
                ],
              }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { expanded: !1 }),
            (this.refundRules = [
              {
                rule: "TIME_PLAYED",
                canRefund: () => {
                  if (this.isSkuPreorder) return !0;
                  let e = this.timePlayed;
                  return (
                    null == e ||
                    e.asMilliseconds() < E.duration(2, "hours").asMilliseconds()
                  );
                },
              },
              {
                rule: "PURCHASE_DATE",
                canRefund: () => {
                  let { payment: e } = this.props;
                  if (this.isSkuPreorder) return !0;
                  let t =
                    e.isPremiumSubscription ||
                    e.isPremiumGuildSubscription ||
                    e.isPremiumGift
                      ? 5
                      : 14;
                  return this.daysSincePurchase <= t;
                },
              },
              {
                rule: "SKU_TYPE",
                canRefund: () => {
                  let { payment: e } = this.props;
                  return null == e.sku || e.sku.type !== ee.SKUTypes.CONSUMABLE;
                },
              },
              {
                rule: "ALREADY_REFUNDED",
                canRefund: () => {
                  let { payment: e } = this.props;
                  return e.amountRefunded < e.amount;
                },
              },
              {
                rule: "PAYMENT_STATUS",
                canRefund: () => {
                  let { payment: e } = this.props;
                  return !er.includes(e.status);
                },
              },
              {
                rule: "PAYMENT_GATEWAY",
                canRefund: () => {
                  let { payment: e } = this.props;
                  return (
                    null == e.paymentGateway || !eu.includes(e.paymentGateway)
                  );
                },
              },
              {
                rule: "SKU_STICKER_PACK",
                canRefund: () => {
                  let { payment: e } = this.props;
                  return (
                    null == e.sku ||
                    !(0, Z.hasFlag)(e.sku.flags, ee.SKUFlags.STICKER_PACK)
                  );
                },
              },
              {
                rule: "SUBSCRIPTION_TYPE",
                canRefund: () => {
                  var e, t;
                  let { payment: s } = this.props;
                  return (
                    (null === (e = s.subscription) || void 0 === e
                      ? void 0
                      : e.type) !== ee.SubscriptionTypes.GUILD &&
                    (null === (t = s.subscription) || void 0 === t
                      ? void 0
                      : t.type) !== ee.SubscriptionTypes.APPLICATION
                  );
                },
              },
              {
                rule: "GUILD_PRODUCT",
                canRefund: () => {
                  let { payment: e } = this.props;
                  return (
                    null == e.sku ||
                    !(0, Z.hasFlag)(e.sku.flags, m.SKUFlags.GUILD_PRODUCT)
                  );
                },
              },
            ]),
            (this.handleExpandInfo = () => {
              this.setState({ expanded: !this.state.expanded });
            });
        }
      }
      function ep(e) {
        var t, s;
        let { payment: a, locale: n, compactMode: r, className: u } = e,
          o = null != a.sku && el.includes(a.sku.type),
          d = null != a.sku && o ? a.sku.applicationId : null,
          c = null === (t = a.sku) || void 0 === t ? void 0 : t.applicationId,
          E =
            (null === (s = a.subscription) || void 0 === s
              ? void 0
              : s.type) === ee.SubscriptionTypes.APPLICATION,
          {
            applicationStatistics: f,
            gameApplication: m,
            paymentSources: _,
          } = (0, p.useStateFromStoresObject)(
            [O.default, b.default, S.default],
            () => {
              var e, t;
              return {
                applicationStatistics:
                  null != d
                    ? b.default.getCurrentUserStatisticsForApplication(d)
                    : null,
                gameApplication:
                  null !== (t = S.default.getApplication(null != d ? d : "")) &&
                  void 0 !== t
                    ? t
                    : null === (e = a.sku) || void 0 === e
                      ? void 0
                      : e.application,
                paymentSources: O.default.paymentSources,
              };
            }
          ),
          I = (0, p.useStateFromStores)([S.default], () =>
            null != c ? S.default.getApplication(c) : null
          );
        l.useEffect(() => {
          E && null != c && (0, g.fetchApplication)(c);
        }, [c, E]);
        let N = (0, p.useStateFromStores)([U.default], () =>
          U.default.getGuild(null == m ? void 0 : m.guildId)
        );
        return (0, i.jsx)(em, {
          applicationStatistics: f,
          application: E ? I : o ? m : void 0,
          guild: N,
          stickerPack: null,
          paymentSources: _,
          locale: n,
          compactMode: r,
          className: u,
          payment: a,
        });
      }
      em.defaultProps = { compactMode: !1 };
    },
    206343: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          userInRefundExperiment: function () {
            return i;
          },
        });
      var a = s("862205");
      let n = (0, a.createExperiment)({
        id: "2021-08_user_initiated_refunds",
        label: "User Initiated Refunds",
        kind: "user",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 0, label: "Control", config: { enabled: !1 } },
          { id: 1, label: "Can refund", config: { enabled: !0 } },
        ],
      });
      function i() {
        let { enabled: e } = n.getCurrentConfig(
          { location: "70b634_1" },
          { autoTrackExposure: !1 }
        );
        return n.trackExposure({ location: "70b634_2" }), e;
      }
    },
    218989: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var a = s("884691"),
        n = s("446674"),
        i = s("521012"),
        l = s("843455"),
        r = function (e) {
          let { subscriptionFilter: t } = e,
            s = (0, n.useStateFromStores)([i.default], () =>
              i.default.getSubscriptions(!0)
            ),
            r = a.useMemo(() => {
              if (null == s) return [];
              let e = Object.values(s).filter(
                e =>
                  !!(
                    e.type === l.SubscriptionTypes.PREMIUM &&
                    (null == t || t(e)) &&
                    (0, i.authenticatedUserFilter)(e)
                  ) || !1
              );
              return e;
            }, [s, t]);
          return (
            r.sort((e, t) => {
              var s, a;
              let n = null !== (s = e.paymentGateway) && void 0 !== s ? s : 0,
                i = null !== (a = t.paymentGateway) && void 0 !== a ? a : 0;
              return n < i ? -1 : n > i ? 1 : 0;
            }),
            r
          );
        };
    },
    681421: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("77078"),
        i = {
          open: function (e, t) {
            (0, n.openModalLazy)(async () => {
              let { default: n } = await s
                .el("524252")
                .then(s.bind(s, "524252"));
              return s => (0, a.jsx)(n, { payment: e, paymentSource: t, ...s });
            });
          },
        };
    },
    609190: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("77078"),
        i = s("681421"),
        l = s("843455"),
        r = s("782340"),
        u = s("246677");
      function o(e) {
        let { payment: t } = e,
          s =
            null != t.paymentSource &&
            t.status === l.PaymentStatusTypes.COMPLETED;
        return null == t.downloadableInvoice || "" === t.downloadableInvoice
          ? s
            ? (0, a.jsx)("div", {
                className: u.downloadInvoice,
                children: (0, a.jsx)(n.Anchor, {
                  onClick: () => {
                    var e, s;
                    (e = t), (s = t.paymentSource), i.default.open(e, s);
                  },
                  children: r.default.Messages.BILLING_DOWNLOAD_INVOICE,
                }),
              })
            : null
          : (0, a.jsxs)("div", {
              className: u.downloadInvoice,
              children: [
                (0, a.jsx)(n.Anchor, {
                  href: t.downloadableInvoice,
                  children: r.default.Messages.BILLING_DOWNLOAD_INVOICE_VAT,
                }),
                null != t.downloadableRefundInvoices
                  ? t.downloadableRefundInvoices.map((e, t) =>
                      (0, a.jsx)(
                        n.Anchor,
                        {
                          className: u.downloadRefundInvoice,
                          href: e,
                          children:
                            r.default.Messages.BILLING_DOWNLOAD_REFUND_INVOICE,
                        },
                        t
                      )
                    )
                  : null,
              ],
            });
      }
    },
    923702: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("516555"),
        l = s("172858"),
        r = function (e) {
          let {
              confettiTarget: t,
              confettiCanvas: s,
              confettiVelocityMultiplier: r,
              sprites: u,
              colors: o,
            } = e,
            [d, c] = n.useState(null),
            E = (0, i.useConfettiCannon)(s, d),
            [f, m] = n.useState(!1);
          return (
            n.useEffect(() => {
              let e = Array(10).fill(0);
              return (
                null != t &&
                  E.isReady &&
                  !f &&
                  (e = e.map((s, a) =>
                    setTimeout(() => {
                      var s, n;
                      a === e.length - 1 && m(!0),
                        E.createMultipleConfetti(
                          ((s = t.getBoundingClientRect()),
                          (n = null != (n = r) ? n : 1),
                          {
                            ...l.COMMON_CONFETTI_BASE_CONFIG,
                            position: {
                              type: "static-random",
                              minValue: { x: s.x, y: s.y },
                              maxValue: {
                                x: s.x + s.width,
                                y: s.y + s.height / 2,
                              },
                            },
                            velocity: {
                              type: "static-random",
                              minValue: { x: -100 * n, y: -50 * n },
                              maxValue: { x: 100 * n, y: -300 * n },
                            },
                            dragCoefficient: { type: "static", value: 1e-4 },
                          }),
                          50
                        );
                    }, 100 * a)
                  )),
                () => {
                  for (let t of e) clearTimeout(t);
                }
              );
            }, [E, t, f, r]),
            (0, a.jsx)(i.SpriteCanvas, {
              ref: c,
              sprites: null != u ? u : l.COMMON_CONFETTI_SPRITES,
              colors: null != o ? o : l.COMMON_CONFETTI_COLORS,
              spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
              spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
            })
          );
        };
    },
    70578: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var a = s("862205");
      let n = (0, a.createExperiment)({
        kind: "user",
        id: "2023-12_pause_subscriptions_experiment",
        label: "Pause Subscriptions Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Pause Subscription Enabled",
            config: { enabled: !0 },
          },
        ],
      });
      var i = e => {
        let {
          location: t,
          autoTrackExposure: s = !0,
          trackExposureOptions: a = {},
        } = e;
        return n.useExperiment(
          { location: t },
          { autoTrackExposure: s, trackExposureOptions: a }
        );
      };
    },
    892843: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("77078"),
        i = s("466645");
      function l(e) {
        let { children: t, ...s } = e;
        return (0, a.jsx)(n.Button, {
          ...s,
          size: n.Button.Sizes.SMALL,
          look: n.Button.Looks.INVERTED,
          className: i.button,
          children: t,
        });
      }
    },
    21367: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Steps: function () {
            return a;
          },
          default: function () {
            return Z;
          },
        }),
        s("222007"),
        s("70102");
      var a,
        n,
        i = s("37983"),
        l = s("884691"),
        r = s("414456"),
        u = s.n(r),
        o = s("516555"),
        d = s("627445"),
        c = s.n(d),
        E = s("446674"),
        f = s("819855"),
        m = s("77078"),
        p = s("850068"),
        _ = s("841098"),
        I = s("812204"),
        N = s("685665"),
        S = s("619935"),
        P = s("10514"),
        C = s("145131"),
        T = s("599110"),
        R = s("745279"),
        A = s("701909"),
        M = s("719923"),
        h = s("153160"),
        L = s("809071"),
        g = s("182650"),
        x = s("883662"),
        y = s("471131"),
        D = s("398309"),
        U = s("249718"),
        O = s("360262"),
        v = s("177998"),
        b = s("146163"),
        B = s("510928"),
        j = s("661128"),
        G = s("646718"),
        F = s("49111"),
        k = s("782340"),
        w = s("871556");
      async function Y(e) {
        let {
          premiumSubscription: t,
          onClose: s,
          setHasError: a,
          setIsCancelling: n,
          analyticsLocations: i,
          analyticsLocation: l,
        } = e;
        try {
          n(!0), a(!1);
          let e = [
            F.SubscriptionStatusTypes.PAST_DUE,
            F.SubscriptionStatusTypes.PAUSED,
          ];
          if (e.includes(t.status)) await (0, p.cancelSubscription)(t.id, i, l);
          else {
            var r, u;
            let e =
              null !==
                (u =
                  null === (r = t.renewalMutations) || void 0 === r
                    ? void 0
                    : r.items) && void 0 !== u
                ? u
                : t.items;
            await (0, p.updateSubscription)(
              t,
              { items: (0, M.getItemsWithoutPremiumPlanItem)(e) },
              i,
              l
            );
          }
          s();
        } catch {
          a(!0), n(!1);
        }
      }
      function H(e) {
        var t;
        let {
            premiumSubscription: s,
            premiumType: a,
            setStep: n,
            onClose: r,
            whatYouLoseExperienceEnabled: u,
            analyticsLocation: o,
          } = e,
          d = (0, S.useBlockedPaymentsConfig)(),
          [c, E] = l.useState(!1),
          [p, I] = l.useState(!1),
          P = (0, _.default)(),
          { analyticsLocations: T } = (0, N.default)(),
          R = null;
        switch (s.status) {
          case F.SubscriptionStatusTypes.PAST_DUE:
          case F.SubscriptionStatusTypes.PAUSED:
            R = k.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
            break;
          default:
            switch (a) {
              case G.PremiumTypes.TIER_0:
                R = d
                  ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format(
                      {
                        date: s.currentPeriodEnd,
                        helpdeskArticle: A.default.getArticleURL(
                          F.HelpdeskArticles.BLOCKED_PAYMENTS
                        ),
                      }
                    )
                  : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format(
                      { date: s.currentPeriodEnd }
                    );
                break;
              case G.PremiumTypes.TIER_1:
                R = d
                  ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format(
                      {
                        date: s.currentPeriodEnd,
                        helpdeskArticle: A.default.getArticleURL(
                          F.HelpdeskArticles.BLOCKED_PAYMENTS
                        ),
                      }
                    )
                  : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format(
                      { date: s.currentPeriodEnd }
                    );
                break;
              default:
                R = d
                  ? k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format(
                      {
                        date: s.currentPeriodEnd,
                        helpdeskArticle: A.default.getArticleURL(
                          F.HelpdeskArticles.BLOCKED_PAYMENTS
                        ),
                      }
                    )
                  : k.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format(
                      { date: s.currentPeriodEnd }
                    );
            }
        }
        let h = s.items.some(e => {
            let { planId: t } = e;
            return !G.PREMIUM_PLANS.has(t);
          }),
          L =
            (h && null == s.renewalMutations) ||
            (null === (t = s.renewalMutations) || void 0 === t
              ? void 0
              : t.items.find(e => {
                  let { planId: t } = e;
                  return !G.PREMIUM_PLANS.has(t);
                })) != null,
          g = L
            ? (0, i.jsx)(m.Button, {
                onClick: () => n(3),
                children: k.default.Messages.NEXT,
              })
            : (0, i.jsx)(m.Button, {
                color: m.Button.Colors.RED,
                disabled: c,
                onClick: async () => {
                  await Y({
                    setHasError: I,
                    onClose: r,
                    premiumSubscription: s,
                    setIsCancelling: E,
                    analyticsLocations: T,
                    analyticsLocation: o,
                  });
                },
                children: u
                  ? k.default.Messages.CONFIRM
                  : k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                      planPremiumType: M.default.getDisplayPremiumType(
                        s.planId
                      ),
                    }),
              }),
          x = (0, i.jsx)(m.Button, {
            look: m.Button.Looks.LINK,
            color: (0, f.isThemeLight)(P)
              ? m.Button.Colors.PRIMARY
              : m.Button.Colors.WHITE,
            onClick: r,
            children: u
              ? k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
              : k.default.Messages.CANCEL,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            u
              ? (0, i.jsx)(B.default, {
                  premiumType: a,
                  className: w.cancellationHeader,
                  onClose: r,
                })
              : (0, i.jsxs)(m.ModalHeader, {
                  separator: !1,
                  children: [
                    (0, i.jsx)(m.FormTitle, {
                      tag: m.FormTitleTags.H4,
                      children:
                        k.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
                          planPremiumType: M.default.getDisplayPremiumType(
                            s.planId
                          ),
                        }),
                    }),
                    (0, i.jsx)(m.ModalCloseButton, { onClick: r }),
                  ],
                }),
            (0, i.jsxs)(m.ModalContent, {
              className: w.body,
              children: [
                p
                  ? (0, i.jsx)(m.FormErrorBlock, {
                      className: w.errorBlock,
                      children: k.default.Messages.BILLING_ERROR_GENERIC,
                    })
                  : null,
                (0, i.jsx)("div", { className: w.cancelImage }),
                (0, i.jsx)("div", { children: R }),
              ],
            }),
            (0, i.jsxs)(m.ModalFooter, {
              justify: C.default.Justify.START,
              children: [g, x],
            }),
          ],
        });
      }
      function W(e) {
        var t, s;
        let { premiumSubscription: a } = e,
          { analyticsLocations: n } = (0, N.default)(),
          [l] = (0, L.useSubscriptionInvoicePreview)({
            subscriptionId: a.id,
            items: (0, M.getItemsWithoutPremiumPlanItem)(
              null !==
                (s =
                  null === (t = a.renewalMutations) || void 0 === t
                    ? void 0
                    : t.items) && void 0 !== s
                ? s
                : a.items
            ),
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: I.default.CANCEL_INVOICE_PREVIEW,
          }),
          r = (0, E.useStateFromStores)([P.default], () =>
            P.default.get(a.planId)
          );
        if (null == l || null == r)
          return (0, i.jsx)(m.Spinner, { className: w.loading });
        let { intervalType: u, intervalCount: o } =
          M.default.getIntervalForInvoice(l);
        return (0, i.jsxs)("div", {
          className: w.bodyText,
          children: [
            (0, i.jsx)("div", {
              className: w.renewalInvoiceDate,
              children:
                0 !== l.total
                  ? k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format(
                      {
                        renewalDate: l.subscriptionPeriodStart,
                        rate: (0, h.formatRate)(
                          (0, h.formatPrice)(l.total, l.currency),
                          u,
                          o
                        ),
                      }
                    )
                  : k.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                      renewalDate: l.subscriptionPeriodStart,
                    }),
            }),
            (0, i.jsxs)(x.PremiumInvoiceTable, {
              children: [
                (0, i.jsx)(x.PremiumInvoiceTableHeader, {
                  children: k.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES,
                }),
                (0, i.jsx)(x.PremiumInvoiceTableRow, {
                  label:
                    k.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
                      planName: M.default.getDisplayName(r.id),
                    }),
                  value: (0, M.getFormattedRateForPlan)(r),
                  className: w.invoiceCancelRow,
                }),
                (0, i.jsx)(x.PremiumInvoiceTableDivider, {}),
                (0, i.jsx)(b.SubscriptionInvoiceFooter, {
                  premiumSubscription: a,
                  renewalInvoice: l,
                  isUpdate: !0,
                }),
              ],
            }),
          ],
        });
      }
      function V(e) {
        let {
            premiumSubscription: t,
            premiumType: s,
            onBack: a,
            onClose: n,
            analyticsLocation: r,
          } = e,
          [o, d] = l.useState(!1),
          [c, E] = l.useState(!1),
          { analyticsLocations: f } = (0, N.default)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(B.default, { premiumType: s, onClose: n }),
            (0, i.jsxs)(m.ModalContent, {
              className: u(w.previewStep, w.body),
              children: [
                c
                  ? (0, i.jsx)(m.FormErrorBlock, {
                      className: w.errorBlock,
                      children: k.default.Messages.BILLING_ERROR_GENERIC,
                    })
                  : null,
                (0, i.jsx)(W, { premiumSubscription: t }),
              ],
            }),
            (0, i.jsxs)(m.ModalFooter, {
              align: C.default.Align.CENTER,
              justify: C.default.Justify.BETWEEN,
              children: [
                (0, i.jsx)(m.Button, {
                  color: m.Button.Colors.RED,
                  disabled: o,
                  onClick: async () => {
                    await Y({
                      setHasError: E,
                      onClose: n,
                      premiumSubscription: t,
                      setIsCancelling: d,
                      analyticsLocations: f,
                      analyticsLocation: r,
                    });
                  },
                  children:
                    k.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                      planPremiumType: M.default.getDisplayPremiumType(
                        t.planId
                      ),
                    }),
                }),
                (0, i.jsx)(v.default, { onClick: a }),
              ],
            }),
          ],
        });
      }
      function K(e) {
        var t;
        return {
          subscription_id: e.id,
          subscription_type: e.type,
          subscription_plan_id:
            null === (t = (0, M.getPremiumPlanItem)(e)) || void 0 === t
              ? void 0
              : t.id,
          subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        };
      }
      ((n = a || (a = {}))[(n.WHAT_YOU_LOSE = 1)] = "WHAT_YOU_LOSE"),
        (n[(n.CONFIRM = 2)] = "CONFIRM"),
        (n[(n.PREVIEW = 3)] = "PREVIEW"),
        (n[(n.CONFIRM_DISCOUNT = 4)] = "CONFIRM_DISCOUNT"),
        (n[(n.DISCOUNT_APPLIED = 5)] = "DISCOUNT_APPLIED"),
        (n[(n.PAUSE_SELECT = 6)] = "PAUSE_SELECT"),
        (n[(n.PAUSE_CONFIRM = 7)] = "PAUSE_CONFIRM");
      let z = {
        1: "What You're Losing",
        2: "Confirm Cancellation",
        3: "Preview Updated Subscription",
        4: "Redeem Churn Discount Started",
        5: "Redeem Churn Discount Completed",
        6: "Select Pause Duration",
        7: "Confirm Pause Duration",
      };
      function Z(e) {
        var t;
        let s,
          {
            premiumSubscription: a,
            transitionState: n,
            onClose: r,
            analyticsLocations: u,
            analyticsLocation: d,
            initialStep: E,
          } = e,
          p = l.useRef(new o.Environment()),
          [S, P] = l.useState(null),
          C =
            null === (t = (0, M.getPremiumPlanItem)(a)) || void 0 === t
              ? void 0
              : t.planId,
          A = null != C ? M.default.getPremiumType(C) : null;
        c(null != A, "Should not be cancelling Nitro without premiumType");
        let h = (0, _.default)();
        l.useEffect(() => {
          T.default.track(F.AnalyticEvents.CANCELLATION_FLOW_STARTED, K(a));
        }, [a]);
        let L =
          A === G.PremiumTypes.TIER_0 ||
          A === G.PremiumTypes.TIER_1 ||
          A === G.PremiumTypes.TIER_2;
        null == E && (E = L ? 1 : 2);
        let { AnalyticsLocationProvider: x } = (0, N.default)(
            u,
            I.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL
          ),
          [v, b, B, Y] = (function (e, t, s) {
            let [a, n] = l.useState(e),
              [i, r] = l.useState(Date.now()),
              [u] = l.useState(Date.now()),
              o = l.useCallback(
                e => {
                  T.default.track(F.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                    from_step: z[a],
                    to_step: z[e],
                    step_duration_ms: Date.now() - i,
                    flow_duration_ms: Date.now() - u,
                    location_stack: s,
                    ...K(t),
                  }),
                    n(e),
                    r(Date.now());
                },
                [s, u, i, a, t]
              );
            return [a, o, i, u];
          })(E, a, u),
          [W, Z] = l.useState(null);
        (0, j.useUnsupportedExternalSubscriptionModalHandler)(a, r, !1);
        let X = e => {
            r(),
              T.default.track(F.AnalyticEvents.CANCELLATION_FLOW_STEP, {
                from_step: z[e],
                to_step: null,
                step_duration_ms: Date.now() - B,
                flow_duration_ms: Date.now() - Y,
                location_stack: u,
                ...K(a),
              });
          },
          q = (0, g.useShouldFetchChurnOffer)(),
          { churnUserDiscountOffer: J, isFetchingChurnDiscountOffer: Q } = (0,
          g.useFetchChurnUserDiscountOffer)(!q || 1 !== v);
        switch (v) {
          case 6:
            s = (0, i.jsx)(U.PremiumSubscriptionPauseModalSelect, {
              premiumSubscription: a,
              premiumType: A,
              setStep: b,
              onClose: () => X(v),
              pauseDuration: W,
              setPauseDuration: Z,
              footer: (0, i.jsxs)("div", {
                className: w.whatYouLoseButtonContainer,
                children: [
                  (0, i.jsx)(m.Button, {
                    disabled: null === W,
                    onClick: () => {
                      0 === W ? b(1) : b(7);
                    },
                    children: k.default.Messages.CONTINUE,
                  }),
                  (0, i.jsx)(m.Button, {
                    look: m.Button.Looks.LINK,
                    color: (0, f.isThemeDark)(h)
                      ? m.Button.Colors.WHITE
                      : m.Button.Colors.PRIMARY,
                    onClick: r,
                    children:
                      k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK,
                  }),
                ],
              }),
              analyticsLocation: d,
            });
            break;
          case 7:
            if (null == W) {
              let e = Error("No pause duration to set");
              throw (
                ((0, R.captureBillingException)(e, {
                  extra: { subscriptionId: a.id, status: a.status },
                }),
                e)
              );
            }
            s = (0, i.jsx)(U.PremiumSubscriptionPauseModalConfirm, {
              premiumSubscription: a,
              premiumType: A,
              setStep: b,
              onClose: () => X(v),
              analyticsLocation: d,
              pauseDuration: W,
            });
            break;
          case 1:
            s = (0, i.jsx)(O.default, {
              premiumType: A,
              titleText: k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
              subtitleText:
                k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
              footer: (0, i.jsxs)("div", {
                className: w.whatYouLoseButtonContainer,
                children: [
                  (0, i.jsx)(m.Button, {
                    onClick: () => b(2),
                    children: k.default.Messages.CONTINUE,
                  }),
                  (0, i.jsx)(m.Button, {
                    look: m.Button.Looks.LINK,
                    color: (0, f.isThemeDark)(h)
                      ? m.Button.Colors.WHITE
                      : m.Button.Colors.PRIMARY,
                    onClick: () => X(v),
                    children:
                      k.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK,
                  }),
                ],
              }),
              onClose: () => X(v),
              onDiscountClaim: () => b(4),
              onContinue: () => b(2),
              isLoading: q && Q,
              churnUserDiscountOffer: J,
              analyticsLocations: u,
            });
            break;
          case 2:
            s = (0, i.jsx)(H, {
              premiumSubscription: a,
              premiumType: A,
              setStep: b,
              onClose: () => X(v),
              whatYouLoseExperienceEnabled: L,
              analyticsLocation: d,
            });
            break;
          case 3:
            s = (0, i.jsx)(V, {
              premiumSubscription: a,
              premiumType: A,
              onBack: () => b(2),
              onClose: () => X(v),
              analyticsLocation: d,
            });
            break;
          case 4:
            s = (0, i.jsx)(y.default, {
              premiumSubscription: a,
              premiumType: A,
              onClose: () => X(v),
              onConfirm: () => b(5),
              userDiscountOffer: J,
            });
            break;
          case 5:
            s = (0, i.jsx)(D.PremiumSubscritionDiscountAppliedModal, {
              premiumSubscription: a,
              premiumType: A,
              onClose: () => X(v),
              confettiCanvas: S,
              userDiscountOffer: J,
            });
            break;
          default:
            throw Error("Unexpected step: ".concat(v));
        }
        return (0, i.jsxs)(x, {
          children: [
            (0, i.jsx)(o.ConfettiCanvas, {
              ref: P,
              className: w.confettiCanvas,
              environment: p.current,
            }),
            (0, i.jsx)(m.ModalRoot, { transitionState: n, children: s }),
          ],
        });
      }
    },
    471131: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return T;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("414456"),
        l = s.n(i),
        r = s("872717"),
        u = s("819855"),
        o = s("77078"),
        d = s("841098"),
        c = s("701909"),
        E = s("719923"),
        f = s("153160"),
        m = s("478968"),
        p = s("510928"),
        _ = s("646718"),
        I = s("49111"),
        N = s("782340"),
        S = s("893643"),
        P = s("940420"),
        C = s("591726"),
        T = function (e) {
          let {
              premiumSubscription: t,
              premiumType: s,
              onClose: i,
              onConfirm: T,
              userDiscountOffer: R,
            } = e,
            [A, M] = n.useState(!1),
            [h, L] = n.useState(!1),
            g = async e => {
              try {
                L(!0),
                  M(!1),
                  await r.default.post({
                    url: I.Endpoints.USER_OFFER_REDEEM,
                    body: { user_discount_offer_id: e },
                  }),
                  T();
              } catch (e) {
                M(!0);
              }
              L(!1);
            },
            x = (0, d.default)(),
            y = (0, u.isThemeDark)(x) ? P : C,
            D = (0, m.useChurnDiscountedPrice)(
              t,
              _.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
              R
            ),
            U = (0, E.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
            O = (0, f.formatPrice)(U.amount, U.currency);
          return null == R
            ? null
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(p.default, { premiumType: s, onClose: i }),
                  (0, a.jsx)(o.ModalContent, {
                    className: S.body,
                    children: (0, a.jsxs)("div", {
                      className: S.confirmDiscountContent,
                      children: [
                        (0, a.jsx)(o.Heading, {
                          variant: "heading-xl/bold",
                          children:
                            N.default.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format(
                              { percent: R.discount.amount }
                            ),
                        }),
                        (0, a.jsxs)("div", {
                          className: S.confirmDiscountDescription,
                          children: [
                            (0, a.jsx)("img", {
                              alt: "",
                              src: y,
                              className: S.confirmDiscountIcon,
                            }),
                            (0, a.jsx)(o.Text, {
                              variant: "text-sm/medium",
                              children:
                                N.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format(
                                  {
                                    percent: R.discount.amount,
                                    numMonths: R.discount.user_usage_limit,
                                    price: O,
                                  }
                                ),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: S.confirmDiscountLegalese,
                          children: (0, a.jsx)(o.Text, {
                            variant: "text-xs/semibold",
                            className: S.confirmDiscountLegaleseText,
                            children:
                              N.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format(
                                {
                                  discountedPrice: D,
                                  billingPeriod: (0,
                                  E.getDiscountIntervalString)(
                                    R.discount.user_usage_limit_interval
                                  ),
                                  numMonths: R.discount.user_usage_limit,
                                  fullPrice: O,
                                  helpdeskArticle: c.default.getArticleURL(
                                    I.HelpdeskArticles.PAID_TERMS
                                  ),
                                }
                              ),
                          }),
                        }),
                        A &&
                          (0, a.jsx)("div", {
                            className: S.redemptionFailedMessage,
                            children: (0, a.jsx)(o.Text, {
                              variant: "text-xs/semibold",
                              className: S.redemptionFailedMessageCopy,
                              children:
                                N.default.Messages
                                  .CHURN_DISCOUNT_REDEMPTION_ERROR,
                            }),
                          }),
                        (0, a.jsxs)("div", {
                          className: l(S.confirmDiscountButtons, {
                            [S.confrimDiscountsButtonsError]: A,
                            [S.confrimDiscountsButtonsNoError]: !A,
                          }),
                          children: [
                            (0, a.jsx)(o.Button, {
                              look: o.ButtonLooks.LINK,
                              onClick: () => i(),
                              children:
                                N.default.Messages.CHURN_DISCOUNT_NEVERMIND,
                            }),
                            (0, a.jsx)(o.Button, {
                              size: o.ButtonSizes.SMALL,
                              submitting: h,
                              onClick: () => g(R.id),
                              children:
                                N.default.Messages
                                  .CHURN_DISCOUNT_CONFIRM_DISCOUNT,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
        };
    },
    398309: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PremiumSubscritionDiscountAppliedModal: function () {
            return P;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("446674"),
        l = s("819855"),
        r = s("77078"),
        u = s("841098"),
        o = s("206230"),
        d = s("923702"),
        c = s("719923"),
        E = s("153160"),
        f = s("478968"),
        m = s("510928"),
        p = s("646718"),
        _ = s("782340"),
        I = s("454555"),
        N = s("940420"),
        S = s("591726");
      function P(e) {
        let {
            premiumSubscription: t,
            premiumType: s,
            onClose: P,
            confettiCanvas: C,
            userWasChurned: T = !1,
            userDiscountOffer: R,
          } = e,
          A = (0, u.default)(),
          M = (0, l.isThemeDark)(A) ? N : S,
          h = n.useRef(null),
          [L, g] = n.useState(!1),
          x = (0, f.useChurnDiscountedPrice)(
            t,
            p.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            R
          ),
          y = (0, c.getPrice)(p.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
          D = (0, E.formatPrice)(y.amount, y.currency),
          U = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.useReducedMotion
          );
        if (
          (n.useEffect(() => {
            null != h.current && null != x && g(!0);
          }, [h, L, x]),
          null == R || null == x)
        )
          return null;
        let O =
            _.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format(
              {
                numMonths: R.discount.user_usage_limit,
                discountedPrice: x,
                regularPrice: D,
              }
            ),
          v = (0, a.jsx)("div", {
            className: I.whatYouLoseButtonContainer,
            children: (0, a.jsx)(r.Button, {
              color: r.Button.Colors.BRAND,
              onClick: P,
              children: _.default.Messages.PREMIUM_DISCOUNT_SWEET,
            }),
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(m.default, {
              premiumType: s,
              className: I.cancellationHeader,
              onClose: P,
            }),
            (0, a.jsx)("div", {
              ref: h,
              children: (0, a.jsx)(r.ModalContent, {
                className: I.body,
                children:
                  null != x
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: I.discountAppliedBody,
                            children: [
                              (0, a.jsx)("img", {
                                alt: "",
                                src: M,
                                className: I.nitroIcon,
                              }),
                              (0, a.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                children: T
                                  ? _.default.Messages
                                      .PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK
                                  : _.default.Messages
                                      .PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED,
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: I.bodyString,
                            children: O,
                          }),
                          v,
                        ],
                      })
                    : (0, a.jsx)(r.Spinner, {}),
              }),
            }),
            !U &&
              L &&
              (0, a.jsx)(d.default, {
                confettiTarget: h.current,
                confettiCanvas: C,
                confettiVelocityMultiplier: 0.75,
              }),
          ],
        });
      }
    },
    249718: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          PremiumSubscriptionPauseModalSelect: function () {
            return P;
          },
          PremiumSubscriptionPauseModalConfirm: function () {
            return C;
          },
        }),
        s("424973"),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("866227"),
        l = s.n(i),
        r = s("216721"),
        u = s("819855"),
        o = s("77078"),
        d = s("850068"),
        c = s("841098"),
        E = s("685665"),
        f = s("145131"),
        m = s("380186"),
        p = s("510928"),
        _ = s("49111"),
        I = s("782340"),
        N = s("598167");
      async function S(e) {
        let {
          premiumSubscription: t,
          pauseDuration: s,
          onClose: a,
          setHasError: n,
          setIsCancelling: i,
          analyticsLocations: l,
          analyticsLocation: r,
        } = e;
        try {
          i(!0),
            n(!1),
            await (0, d.updateSubscription)(t, { pauseDuration: s }, l, r),
            a();
        } catch {
          n(!0), i(!1);
        }
      }
      function P(e) {
        let {
            premiumType: t,
            onClose: s,
            pauseDuration: i,
            setPauseDuration: l,
            footer: u,
            premiumSubscription: d,
          } = e,
          c = n.useCallback(
            e => {
              let { value: t } = e;
              l(t);
            },
            [l]
          ),
          E =
            d.status === _.SubscriptionStatusTypes.PAUSED
              ? I.default.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE
              : I.default.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(p.default, { premiumType: t, onClose: s }),
            (0, a.jsx)(o.ModalHeader, {
              separator: !1,
              children: (0, a.jsxs)("div", {
                className: N.header,
                children: [
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-xl/bold",
                    className: N.modalHeader,
                    children: I.default.Messages.PREMIUM_PAUSE_SELECT_TITLE,
                  }),
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-sm/medium",
                    className: N.subtitle,
                    children: E,
                  }),
                ],
              }),
            }),
            (0, a.jsx)(o.ModalContent, {
              className: N.body,
              children: (0, a.jsx)(o.RadioGroup, {
                options: (function (e) {
                  let t =
                      e.status === _.SubscriptionStatusTypes.PAUSED
                        ? I.default.Messages
                            .PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE
                        : I.default.Messages
                            .PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
                    { durations: s, currentDaysPaused: a } = (0,
                    m.getSubscriptionPauseDurations)(e),
                    n = [];
                  for (let e of s) {
                    let s = r.PauseDuration[e];
                    n.push({
                      name: t.format({ days: s - a }),
                      value: s,
                      radioItemIconClassName: N.radioOption,
                    });
                  }
                  return (
                    n.sort((e, t) => e.value - t.value),
                    n.push({
                      name: I.default.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
                      value: 0,
                      radioBarClassName: N.cancelText,
                      radioItemIconClassName: N.cancelText,
                    }),
                    n
                  );
                })(d),
                onChange: c,
                value: i,
              }),
            }),
            (0, a.jsx)(o.ModalFooter, {
              justify: f.default.Justify.START,
              children: u,
            }),
          ],
        });
      }
      function C(e) {
        let {
            premiumSubscription: t,
            premiumType: s,
            onClose: i,
            pauseDuration: r,
            analyticsLocation: d,
          } = e,
          [m, P] = n.useState(!1),
          { analyticsLocations: C } = (0, E.default)(),
          [T, R] = n.useState(!1),
          A = (0, c.default)(),
          M = null,
          h = null,
          L = [
            _.SubscriptionStatusTypes.PAST_DUE,
            _.SubscriptionStatusTypes.PAUSED,
          ],
          g = L.includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
          x = l(g).add(r, "days").toDate();
        switch (t.status) {
          case _.SubscriptionStatusTypes.PAST_DUE:
            h = I.default.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
              pauseDuration: r,
              resumeDate: x,
            });
            break;
          case _.SubscriptionStatusTypes.PAUSED:
            h = I.default.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({
              resumeDate: x,
            });
            break;
          default:
            h = I.default.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
              pauseDate: g,
              resumeDate: x,
              pauseDuration: r,
            });
        }
        return (
          (M = (0, a.jsx)("div", { className: N.body, children: h })),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(p.default, { premiumType: s, onClose: i }),
              (0, a.jsx)(o.ModalHeader, {
                separator: !1,
                children: (0, a.jsx)("div", {
                  className: N.header,
                  children: (0, a.jsx)(o.Heading, {
                    variant: "heading-xl/bold",
                    className: N.modalHeader,
                    children:
                      I.default.Messages
                        .PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED,
                  }),
                }),
              }),
              (0, a.jsxs)(o.ModalContent, {
                className: N.body,
                children: [
                  m
                    ? (0, a.jsx)(o.FormErrorBlock, {
                        className: N.errorBlock,
                        children: I.default.Messages.BILLING_ERROR_GENERIC,
                      })
                    : null,
                  M,
                ],
              }),
              (0, a.jsx)(o.ModalFooter, {
                justify: f.default.Justify.START,
                children: (0, a.jsxs)("div", {
                  className: N.whatYouLoseButtonContainer,
                  children: [
                    (0, a.jsx)(o.Button, {
                      color: o.Button.Colors.RED,
                      disabled: T || null == r,
                      onClick: async () => {
                        await S({
                          premiumSubscription: t,
                          pauseDuration: r,
                          setIsCancelling: R,
                          setHasError: P,
                          onClose: i,
                          analyticsLocations: C,
                          analyticsLocation: d,
                        });
                      },
                      children: I.default.Messages.CONFIRM,
                    }),
                    (0, a.jsx)(o.Button, {
                      look: o.Button.Looks.LINK,
                      color: (0, u.isThemeDark)(A)
                        ? o.Button.Colors.WHITE
                        : o.Button.Colors.PRIMARY,
                      onClick: i,
                      children:
                        I.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK,
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    58820: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SubscriptionDetailsEmpty: function () {
            return Y;
          },
          VIEWABLE_SUBSCRIPTION_STATUSES: function () {
            return W;
          },
          DuplicateSubscriptionsBanner: function () {
            return V;
          },
          default: function () {
            return K;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("414456"),
        l = s.n(i),
        r = s("627445"),
        u = s.n(r),
        o = s("866227"),
        d = s.n(o),
        c = s("446674"),
        E = s("669491"),
        f = s("77078"),
        m = s("79112"),
        p = s("812204"),
        _ = s("685665"),
        I = s("724038"),
        N = s("649844"),
        S = s("797647"),
        P = s("697218"),
        C = s("145131"),
        T = s("953109"),
        R = s("423487"),
        A = s("599110"),
        M = s("701909"),
        h = s("719923"),
        L = s("713518"),
        g = s("809071"),
        x = s("921149"),
        y = s("892843"),
        D = s("541554"),
        U = s("690679"),
        O = s("95637"),
        v = s("49111"),
        b = s("782340"),
        B = s("809432");
      function j(e) {
        let t,
          {
            subscription: s,
            renewalInvoicePreview: n,
            fromStandaloneBillingPage: i = !0,
            className: r,
          } = e,
          o = (0, c.useStateFromStores)([P.default], () => {
            let e = P.default.getCurrentUser();
            return (
              u(
                null != e,
                "GuildBoostingHeader: currentUser cannot be undefined"
              ),
              e
            );
          });
        if (0 === (0, h.getNumPremiumGuildSubscriptions)(s.additionalPlans))
          return null;
        let { status: d } = s,
          E = (0, h.isPremiumGuildSubscriptionCanceled)(s);
        return (
          (t = E
            ? B.guildBoostingSubscriptionRowCanceled
            : (0, h.isSubscriptionStatusFailedPayment)(d)
              ? B.guildBoostingSubscriptionRowFailedPayment
              : B.guildBoostingSubscriptionRowActive),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: l(t, r),
                children: [
                  (0, a.jsx)("div", {
                    className: B.guildBoostingSubscriptionRowBackground,
                  }),
                  (0, a.jsx)("div", { className: B.guildBoostingImage }),
                  (0, a.jsxs)("div", {
                    className: B.guildBoostingSubscriptionRowBody,
                    children: [
                      (0, a.jsx)("div", {
                        className: l(B.guildBoostingWordmark, {
                          [B.canceled]: E,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        children: (0, h.getPremiumGuildHeaderDescription)({
                          subscription: s,
                          renewalInvoicePreview: n,
                          user: o,
                        }),
                      }),
                    ],
                  }),
                  i &&
                    (0, a.jsx)(y.default, {
                      color: f.Button.Colors.BRAND,
                      onClick: () =>
                        m.default.open(v.UserSettingsSections.GUILD_BOOSTING),
                      children:
                        b.default.Messages
                          .PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS,
                    }),
                ],
              }),
              !i &&
                (0, a.jsx)(f.Text, {
                  className: B.boostingDesktopAppBlurb,
                  variant: "text-sm/normal",
                  children:
                    b.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format(
                      { openAppHook: () => (0, I.default)("app") }
                    ),
                }),
            ],
          })
        );
      }
      function G() {
        return (
          n.useEffect(() => {
            A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
              type: "subscription_settings_missing_payment_method",
            });
          }, []),
          (0, a.jsxs)("div", {
            className: B.paymentBanner,
            children: [
              (0, a.jsx)(R.default, {
                className: B.paymentBannerIcon,
                color: E.default.unsafe_rawColors.YELLOW_260.css,
              }),
              (0, a.jsx)(f.Text, {
                className: B.paymentBannerText,
                variant: "text-sm/normal",
                children: b.default.Messages.MISSING_PAYMENT_METHOD_BANNER,
              }),
            ],
          })
        );
      }
      function F() {
        return (
          n.useEffect(() => {
            A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
              type: "subscription_settings_invalid_payment_method",
            });
          }, []),
          (0, a.jsxs)("div", {
            className: B.paymentBanner,
            children: [
              (0, a.jsx)(R.default, {
                className: B.paymentBannerIcon,
                color: E.default.unsafe_rawColors.RED_360.css,
              }),
              (0, a.jsx)(f.Text, {
                className: B.paymentBannerText,
                variant: "text-sm/normal",
                children: b.default.Messages.INVALID_PAYMENT_METHOD_BANNER,
              }),
            ],
          })
        );
      }
      function k(e) {
        let { daysPastDue: t, subscription: s, openInvoiceId: i } = e,
          { analyticsLocations: l } = (0, _.default)(
            p.default.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER
          );
        return (
          n.useEffect(() => {
            A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
              type: "subscription_settings_invalid_payment_method",
            });
          }, []),
          (0, a.jsxs)("div", {
            className: B.paymentBanner,
            children: [
              (0, a.jsx)(R.default, {
                className: B.paymentBannerIcon,
                color: E.default.unsafe_rawColors.YELLOW_260.css,
              }),
              (0, a.jsx)(f.Text, {
                className: B.paymentBannerText,
                variant: "text-sm/normal",
                children:
                  b.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format(
                    {
                      daysPastDue: t,
                      paymentModalRedirect: () => {
                        (0, N.default)({
                          initialPlanId: s.planIdFromItems,
                          openInvoiceId: i,
                          analyticsLocations: l,
                        });
                      },
                    }
                  ),
              }),
            ],
          })
        );
      }
      function w(e) {
        let { subscription: t, renewalInvoicePreview: s, className: n } = e;
        return (0, a.jsxs)("div", {
          className: l(B.billingInformation, n),
          children: [
            (0, a.jsx)(f.FormTitle, {
              tag: "h3",
              className: B.detailBlockHeader,
              children: b.default.Messages.PREMIUM_SETTINGS_BILLING_INFO,
            }),
            (0, a.jsx)("div", {
              children: h.default.getBillingInformationString(t, s),
            }),
          ],
        });
      }
      function Y(e) {
        let { className: t } = e;
        return (0, a.jsxs)("div", {
          className: t,
          children: [
            (0, a.jsx)(f.FormTitle, {
              className: B.sectionTitle,
              tag: "h1",
              children: b.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER,
            }),
            (0, a.jsx)("p", {
              className: B.sectionDescription,
              children: b.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION,
            }),
            (0, a.jsx)(f.Card, {
              className: B.noItemsCard,
              type: f.Card.Types.CUSTOM,
              children: (0, a.jsxs)(C.default, {
                align: C.default.Align.CENTER,
                children: [
                  (0, a.jsx)(T.default, {
                    game: null,
                    size: T.default.Sizes.SMALL,
                    className: B.noItemsIcon,
                  }),
                  (0, a.jsx)("span", {
                    className: B.cardText,
                    children: b.default.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function H(e) {
        let {
            subscription: t,
            analyticsLocation: s,
            paymentSource: n,
            busy: i,
            fromStandaloneBillingPage: r,
            showInvalidPaymentMethod: u,
            showNoPaymentMethod: o,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: c,
          } = e,
          { analyticsLocations: E } = (0, _.default)(
            p.default.SUBSCRIPTION_DETAILS
          ),
          m =
            null != d
              ? {}
              : {
                  subscriptionId: t.id,
                  renewal: !0,
                  analyticsLocations: E,
                  analyticsLocation: s,
                },
          [I] = (0, g.useSubscriptionInvoicePreview)(m);
        I = null != d ? d : I;
        let N =
            null != c
              ? {}
              : {
                  subscriptionId: t.id,
                  renewal: !0,
                  applyEntitlements: !0,
                  analyticsLocations: E,
                  analyticsLocation: s,
                },
          [S] = (0, g.useSubscriptionInvoicePreview)(N);
        return ((S = null != c ? c : S), null == I || null == S)
          ? (0, a.jsx)(f.Spinner, {})
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: B.subscriptionRows,
                  children: [
                    (0, a.jsx)(D.default, {
                      subscription: t,
                      renewalInvoicePreview: I,
                      paymentSource: n,
                      busy: i,
                      analyticsLocation: s,
                    }),
                    (0, a.jsx)(j, {
                      subscription: t,
                      renewalInvoicePreview: I,
                      fromStandaloneBillingPage: r,
                      className: B.guildSubscriptionRow,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(f.HeadingLevel, {
                    component: (0, a.jsx)(f.FormTitle, {
                      tag: "h5",
                      children: b.default.Messages.BILLING_STEP_PAYMENT,
                    }),
                    children: (0, a.jsxs)("div", {
                      className: B.details,
                      children: [
                        (0, a.jsx)(w, {
                          subscription: t,
                          renewalInvoicePreview: S,
                          className: B.detailsBlock,
                        }),
                        t.isPurchasedExternally ||
                        (null == n ? void 0 : n.id) === t.paymentSourceId
                          ? (0, a.jsxs)("div", {
                              className: l(B.detailsBlock, {
                                [B.redBorder]: u,
                              }),
                              children: [
                                (0, a.jsx)(f.FormTitle, {
                                  tag: "h3",
                                  className: B.detailBlockHeader,
                                  children:
                                    t.isPurchasedExternally &&
                                    null != t.paymentGateway
                                      ? b.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format(
                                          {
                                            paymentGatewayName:
                                              v.PaymentGatewayToFriendlyName[
                                                t.paymentGateway
                                              ],
                                          }
                                        )
                                      : b.default.Messages
                                          .BILLING_PAY_FOR_IT_WITH,
                                }),
                                (0, a.jsx)(U.default, {
                                  subscription: t,
                                  onPaymentSourceAdded:
                                    L.fetchSubscriptionPlansOnNewPaymentSource,
                                  highlightAddPaymentMethodButton: o || u,
                                  analyticsLocation: s,
                                  currentInvoicePreview: I,
                                  dropdownClassName: B.paymentDropdown,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  }),
                }),
              ],
            });
      }
      let W = new Set([
        v.SubscriptionStatusTypes.ACTIVE,
        v.SubscriptionStatusTypes.PAST_DUE,
        v.SubscriptionStatusTypes.CANCELED,
        v.SubscriptionStatusTypes.PAUSE_PENDING,
        v.SubscriptionStatusTypes.PAUSED,
      ]);
      function V() {
        return (
          n.useEffect(() => {
            A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
              type: "subscription_settings_duplicate_subscriptions",
            });
          }, []),
          (0, a.jsxs)("div", {
            className: B.duplicateSubscriptionsBanner,
            children: [
              (0, a.jsx)(R.default, {
                color: E.default.unsafe_rawColors.RED_360.css,
              }),
              (0, a.jsx)(f.Text, {
                className: B.duplicateSubscriptionsBannerText,
                variant: "text-sm/normal",
                children:
                  b.default.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
                    helpCenterLink: M.default.getArticleURL(
                      v.HelpdeskArticles.NITRO
                    ),
                  }),
              }),
            ],
          })
        );
      }
      function K(e) {
        var t;
        let s,
          {
            subscription: n,
            subscriptions: i,
            paymentSource: l,
            busy: r,
            className: u,
            fromStandaloneBillingPage: o = !0,
            analyticsLocation: E,
          } = e;
        null != i && null != i[0] && (n = i[0]);
        let { analyticsLocations: m } = (0, _.default)(
            p.default.SUBSCRIPTION_DETAILS
          ),
          I = null != i ? i.slice(1) : [],
          [N] = (0, g.useSubscriptionInvoicePreview)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: E,
          }),
          [C] = (0, g.useSubscriptionInvoicePreview)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: E,
          }),
          T = (0, c.useStateFromStores)([P.default], () => {
            var e;
            return null === (e = P.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.hasFreePremium();
          }),
          R = d(n.currentPeriodEnd),
          A = null != n.paymentSourceId,
          M =
            null !== (t = null == C ? void 0 : C.total) && void 0 !== t ? t : 0,
          h = null == l ? void 0 : l.invalid,
          L =
            !A &&
            M > 0 &&
            (7 >= R.diff(d(), "days") ||
              n.status === v.SubscriptionStatusTypes.PAST_DUE) &&
            !T &&
            !n.isPurchasedExternally,
          y =
            h &&
            n.status === v.SubscriptionStatusTypes.PAST_DUE &&
            !T &&
            !n.isPurchasedExternally,
          D = (0, x.useIsPrepaidPaymentPastDue)(),
          U = !T && D,
          j =
            (null == n ? void 0 : n.status) ===
            v.SubscriptionStatusTypes.PAST_DUE
              ? d().diff(d(n.currentPeriodStart), "days")
              : 0,
          [w] = (0, g.useGetSubscriptionInvoice)({
            subscriptionId: n.id,
            preventFetch: !U,
          });
        return null == N || null == C
          ? (0, a.jsx)(f.Spinner, {})
          : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId &&
                !(0, S.isNoneSubscription)(n.renewalMutations.planId)) ||
                n.hasExternalPlanChange) &&
              (s = (0, a.jsx)(O.default, {
                subscription: n,
                renewalMutations: n.renewalMutations,
                className: B.renewalMutationNotice,
                analyticsLocation: E,
              })),
            (0, a.jsx)("div", {
              className: u,
              children: (0, a.jsxs)(f.HeadingLevel, {
                component: (0, a.jsx)(f.FormTitle, {
                  className: B.sectionTitle,
                  tag: "h1",
                  children:
                    b.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER,
                }),
                children: [
                  L ? (0, a.jsx)(G, {}) : null,
                  y ? (0, a.jsx)(F, {}) : null,
                  U && null != w
                    ? (0, a.jsx)(k, {
                        daysPastDue: j,
                        subscription: n,
                        openInvoiceId: w.id,
                      })
                    : null,
                  s,
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)("p", {
                      className: B.sectionDescription,
                      children:
                        b.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          I.length > 0
                            ? B.dupSubscriptionRow
                            : B.singleSubscription,
                        children: (0, a.jsx)(H, {
                          subscription: n,
                          analyticsLocation: E,
                          paymentSource: l,
                          busy: r,
                          fromStandaloneBillingPage: o,
                          showNoPaymentMethod: L,
                          showInvalidPaymentMethod: y,
                          fetchedCurrentInvoicePreview: N,
                          fetchedRenewalInvoicePreview: C,
                        }),
                      }),
                      I.map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: B.dupSubscriptionRow,
                            children: [
                              (0, a.jsx)(f.FormTitle, {
                                tag: "h2",
                                className: B.duplicateHeader,
                                children: "Duplicate Subscriptions",
                              }),
                              (0, a.jsx)(H, {
                                subscription: e,
                                analyticsLocation: E,
                                paymentSource: l,
                                busy: r,
                                fromStandaloneBillingPage: o,
                                showNoPaymentMethod: L,
                                showInvalidPaymentMethod: y,
                                fetchedCurrentInvoicePreview: null,
                                fetchedRenewalInvoicePreview: null,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    ],
                  }),
                ],
              }),
            }));
      }
    },
    541554: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Tier1AccountCreditBanner: function () {
            return G;
          },
          default: function () {
            return F;
          },
        }),
        s("70102");
      var a = s("37983");
      s("884691");
      var n = s("414456"),
        i = s.n(n),
        l = s("627445"),
        r = s.n(l),
        u = s("77078"),
        o = s("596523"),
        d = s("812204"),
        c = s("685665"),
        E = s("605250"),
        f = s("649844"),
        m = s("797647"),
        p = s("10514"),
        _ = s("563890"),
        I = s("270227"),
        N = s("745279"),
        S = s("719923"),
        P = s("713518"),
        C = s("380186"),
        T = s("182650"),
        R = s("70578"),
        A = s("154889"),
        M = s("892843"),
        h = s("21367"),
        L = s("400307"),
        g = s("646718"),
        x = s("49111"),
        y = s("782340"),
        D = s("334887");
      let U = new E.default("SubscriptionHeader.tsx"),
        O = {
          page: x.AnalyticsPages.USER_SETTINGS,
          section: x.AnalyticsSections.SETTINGS_PREMIUM,
          object: x.AnalyticsObjects.CARD,
        },
        v = [
          x.SubscriptionStatusTypes.PAUSED,
          x.SubscriptionStatusTypes.PAUSE_PENDING,
        ];
      function b(e) {
        let {
          wordMark: t,
          subscriptionInfo: s,
          buttons: n,
          statusClasses: l,
          shouldUseDiscountMarketing: r,
          discountAmount: u,
        } = e;
        return (0, a.jsxs)("div", {
          className: i(D.banner, l),
          children: [
            (0, a.jsx)("div", { className: D.bannerBackgroundImage }),
            (0, a.jsxs)("div", {
              className: D.detailsContainer,
              children: [
                (0, a.jsx)("div", { className: D.image }),
                (0, a.jsxs)("div", {
                  className: D.details,
                  children: [
                    (0, a.jsxs)("div", {
                      className: D.headerLabel,
                      children: [
                        t,
                        r &&
                          null != u &&
                          (0, a.jsx)(L.PremiumPillWithSparkles, {
                            text: y.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format(
                              { percent: u }
                            ),
                            className: D.discountPill,
                            colorOptions:
                              L.PremiumPillAndSparklesColorOptions
                                .PREMIUM_TIER_2_WHITE_FILL,
                            isPillOnBorder: !1,
                          }),
                      ],
                    }),
                    s,
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", { className: D.buttons, children: n }),
          ],
        });
      }
      function B(e) {
        let {
          wordMark: t,
          subscriptionInfo: s,
          buttons: n,
          statusClasses: l,
          shouldUseDiscountMarketing: r,
          discountAmount: u,
        } = e;
        return (0, a.jsxs)("div", {
          className: i(D.banner, l, D.repositioned),
          children: [
            (0, a.jsx)("div", { className: D.bannerBackgroundImage }),
            (0, a.jsx)("div", {
              className: D.detailsContainer,
              children: (0, a.jsxs)("div", {
                className: D.details,
                children: [
                  (0, a.jsxs)("div", {
                    className: D.headerLabel,
                    children: [
                      (0, a.jsx)("div", { className: D.image }),
                      t,
                      r &&
                        null != u &&
                        (0, a.jsx)(L.PremiumPillWithSparkles, {
                          text: y.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format(
                            { percent: u }
                          ),
                          className: D.discountPill,
                          colorOptions:
                            L.PremiumPillAndSparklesColorOptions
                              .PREMIUM_TIER_2_WHITE_FILL,
                          isPillOnBorder: !1,
                        }),
                    ],
                  }),
                  s,
                ],
              }),
            }),
            (0, a.jsx)("div", { className: D.buttons, children: n }),
          ],
        });
      }
      function j() {
        return (0, a.jsxs)("div", {
          className: D.wordMark,
          children: [
            (0, a.jsx)(I.default, {
              className: D.discordWordmark,
              "aria-label": y.default.Messages.PREMIUM_TIER_1,
            }),
            (0, a.jsx)("div", { className: D.classicWordmark }),
          ],
        });
      }
      function G() {
        let { analyticsLocations: e } = (0, c.default)(
          d.default.ACCOUNT_CREDIT_BANNER
        );
        return (0, a.jsx)(b, {
          wordMark: (0, a.jsx)(j, {}),
          subscriptionInfo: (0, a.jsx)("div", {
            className: D.planInfo,
            children:
              y.default.Messages
                .PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION,
          }),
          buttons: (0, a.jsx)(M.default, {
            className: D.toolsButton,
            onClick: () =>
              (0, f.default)({
                subscriptionTier: g.PremiumSubscriptionSKUs.TIER_1,
                analyticsLocations: e,
                analyticsObject: O,
              }),
            children:
              y.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA,
          }),
          statusClasses: { [D.tier1]: !0 },
        });
      }
      var F = function (e) {
        var t, n;
        let {
            subscription: l,
            renewalInvoicePreview: E,
            paymentSource: L,
            busy: G,
            analyticsLocation: F,
          } = e,
          { analyticsLocations: k } = (0, c.default)(
            d.default.SUBSCRIPTION_HEADER
          ),
          { enabled: w } = (0, R.default)({ location: "subscription_header" }),
          Y = (0, A.usePremiumDiscountOffer)(),
          H =
            null == Y
              ? void 0
              : null === (t = Y.discount) || void 0 === t
                ? void 0
                : t.amount,
          W = (0, T.useHasDiscountApplied)(),
          V = (0, T.useActiveDiscountInfo)(),
          K = () => {
            (l.status === x.SubscriptionStatusTypes.ACTIVE ||
              l.status === x.SubscriptionStatusTypes.PAST_DUE ||
              l.status === x.SubscriptionStatusTypes.PAUSED) &&
              Z(h.Steps.PAUSE_SELECT);
          },
          z = () => {
            (l.status === x.SubscriptionStatusTypes.ACTIVE ||
              l.status === x.SubscriptionStatusTypes.PAST_DUE ||
              l.status === x.SubscriptionStatusTypes.PAUSE_PENDING) &&
              Z();
          },
          Z = e => {
            (0, u.openModalLazy)(async () => {
              let { default: t } = await s.el("21367").then(s.bind(s, "21367"));
              return s =>
                (0, a.jsx)(t, {
                  ...s,
                  premiumSubscription: l,
                  analyticsLocation: F,
                  analyticsLocations: k,
                  initialStep: e,
                });
            });
          },
          X = () => {
            if (null != l && null != l.planIdFromItems) {
              let e = p.default.get(l.planIdFromItems);
              if (null == e) {
                U.info(
                  "Plan not fetched for plan id: ".concat(l.planIdFromItems)
                );
                return;
              }
              let t = (0, P.getCurrencies)(e, null == L ? void 0 : L.id, !1),
                s = t.length > 0 ? t[0] : l.currency,
                a = !1;
              1 === t.length &&
                (null == L ? void 0 : L.id) === l.paymentSourceId &&
                (0, P.planHasCurrency)(e.id, s, null == L ? void 0 : L.id) &&
                (a = !0),
                a
                  ? o.resubscribe(l, k)
                  : (0, f.default)({
                      initialPlanId: l.planIdFromItems,
                      analyticsLocations: k,
                      analyticsLocation: F,
                      analyticsObject: O,
                      subscription: l,
                    });
            }
          },
          q = () => {
            if (!v.includes(l.status) || null == l.pauseEndsAt) {
              (0, N.captureBillingException)(
                Error("Invalid subscription to resume"),
                {
                  extra: {
                    subscriptionId: l.id,
                    status: l.status,
                    pauseEndsAt: l.pauseEndsAt,
                  },
                }
              );
              return;
            }
            o.resume(l, k);
          },
          J = () => {
            l.status === x.SubscriptionStatusTypes.PAUSED &&
              Z(h.Steps.PAUSE_SELECT);
          },
          Q = () => {
            Z(h.Steps.WHAT_YOU_LOSE);
          },
          $ = S.default.getPlanIdFromInvoice(l, E);
        if ((0, m.isNoneSubscription)($)) return null;
        let ee = S.default.getStatusFromInvoice(l, E),
          et = S.default.getPremiumType($),
          es = {
            [D.tier0]: et === g.PremiumTypes.TIER_0,
            [D.tier1]: et === g.PremiumTypes.TIER_1,
            [D.tier2]: et === g.PremiumTypes.TIER_2,
            [D.canceled]: ee === x.SubscriptionStatusTypes.CANCELED,
            [D.pausePending]: ee === x.SubscriptionStatusTypes.PAUSE_PENDING,
            [D.paused]: ee === x.SubscriptionStatusTypes.PAUSED,
            [D.failedPayment]: (0, S.isSubscriptionStatusFailedPayment)(ee),
          },
          ea = null;
        switch (et) {
          case g.PremiumTypes.TIER_0:
            ea = (0, a.jsxs)("div", {
              className: D.wordMark,
              children: [
                (0, a.jsx)(I.default, {
                  className: D.discordWordmark,
                  "aria-label": y.default.Messages.PREMIUM_TIER_0,
                }),
                (0, a.jsx)("div", { className: D.basicWordmark }),
              ],
            });
            break;
          case g.PremiumTypes.TIER_1:
            ea = (0, a.jsx)(j, {});
            break;
          case g.PremiumTypes.TIER_2:
            ea = (0, a.jsx)(_.default, {
              className: D.planName,
              "aria-label": y.default.Messages.PREMIUM_TITLE,
            });
        }
        let en = l.status === x.SubscriptionStatusTypes.PAUSED ? B : b;
        return (0, a.jsx)(en, {
          wordMark: ea,
          subscriptionInfo:
            ((n = $),
            r(null != E, "Expected renewalInvoicePreview"),
            (0, a.jsx)("div", {
              className: D.planInfo,
              children: (0, S.getPlanDescriptionFromInvoice)({
                planId: n,
                subscription: l,
                renewalInvoicePreview: E,
                hasDiscountApplied: W,
                activeDiscountInfo: V,
              }),
            })),
          buttons: (() => {
            let { status: e } = l;
            if (l.isPurchasedExternally) {
              let e = (0, S.getExternalSubscriptionMethodUrl)(
                l.paymentGateway,
                "SUBSCRIPTION_MANAGEMENT"
              );
              return (0, a.jsx)(u.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                children: (0, a.jsx)(u.Button, {
                  className: i(D.toolsButton, D.externalButton),
                  size: u.Button.Sizes.SMALL,
                  look: u.ButtonLooks.OUTLINED,
                  color: u.ButtonColors.WHITE,
                  submitting: G,
                  children: y.default.Messages.BILLING_MANAGE_SUBSCRIPTION,
                }),
              });
            }
            if (S.default.isBaseSubscriptionCanceled(l))
              return (0, a.jsx)(u.Button, {
                className: D.toolsButton,
                size: u.Button.Sizes.SMALL,
                look: u.ButtonLooks.INVERTED,
                color: u.ButtonColors.BRAND,
                submitting: G,
                onClick: X,
                children: y.default.Messages.RESUBSCRIBE,
              });
            if (e === x.SubscriptionStatusTypes.PAUSE_PENDING)
              return (0, a.jsxs)("div", {
                className: D.toolsButtons,
                children: [
                  (0, a.jsx)(u.Button, {
                    className: D.toolsButton,
                    size: u.Button.Sizes.SMALL,
                    look: u.ButtonLooks.LINK,
                    color: u.ButtonColors.WHITE,
                    submitting: G,
                    onClick: z,
                    children: y.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON,
                  }),
                  (0, a.jsx)(u.Button, {
                    className: D.toolsButton,
                    size: u.Button.Sizes.SMALL,
                    look: u.ButtonLooks.INVERTED,
                    color: u.ButtonColors.BRAND,
                    submitting: G,
                    onClick: q,
                    children: y.default.Messages.WITHDRAW_PAUSE,
                  }),
                ],
              });
            if (e === x.SubscriptionStatusTypes.PAUSED) {
              let { durations: e } = (0, C.getSubscriptionPauseDurations)(l);
              return (0, a.jsxs)("div", {
                className: D.toolsButtons,
                children: [
                  e.length > 0
                    ? (0, a.jsx)(u.Button, {
                        className: D.linkButton,
                        size: u.Button.Sizes.SMALL,
                        look: u.ButtonLooks.LINK,
                        color: u.ButtonColors.WHITE,
                        submitting: G,
                        onClick: J,
                        children:
                          y.default.Messages
                            .PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION,
                      })
                    : (0, a.jsx)(u.Button, {
                        className: D.linkButton,
                        size: u.Button.Sizes.SMALL,
                        look: u.ButtonLooks.LINK,
                        color: u.ButtonColors.WHITE,
                        submitting: G,
                        onClick: Q,
                        children:
                          y.default.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON,
                      }),
                  (0, a.jsx)(u.Button, {
                    className: D.toolsButton,
                    size: u.Button.Sizes.SMALL,
                    look: u.ButtonLooks.INVERTED,
                    color: u.ButtonColors.BRAND,
                    submitting: G,
                    onClick: q,
                    children: y.default.Messages.RESUME,
                  }),
                ],
              });
            }
            if (
              e === x.SubscriptionStatusTypes.ACTIVE ||
              e === x.SubscriptionStatusTypes.PAST_DUE
            ) {
              let t = !1,
                s = null;
              return (
                null != l.renewalMutations &&
                  ((t = !0),
                  (s =
                    l.renewalMutations.planId !== l.planId
                      ? y.default.Messages
                          .PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN
                      : y.default.Messages
                          .PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION)),
                null != l.trialEndsAt &&
                  ((t = !0),
                  (s =
                    y.default.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL)),
                e === x.SubscriptionStatusTypes.PAST_DUE && (t = !0),
                (0, a.jsxs)("div", {
                  className: D.toolsButtons,
                  children: [
                    w
                      ? (0, a.jsx)(u.Button, {
                          className: D.toolsButton,
                          size: u.Button.Sizes.SMALL,
                          look: u.ButtonLooks.LINK,
                          color: u.ButtonColors.WHITE,
                          submitting: G,
                          onClick: K,
                          children:
                            y.default.Messages
                              .PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION,
                        })
                      : (0, a.jsx)(u.Button, {
                          className: D.toolsButton,
                          size: u.Button.Sizes.SMALL,
                          look: u.ButtonLooks.LINK,
                          color: u.ButtonColors.WHITE,
                          submitting: G,
                          onClick: z,
                          children: y.default.Messages.CANCEL,
                        }),
                    (0, a.jsx)(u.Tooltip, {
                      text: s,
                      children: e =>
                        (0, a.jsx)(M.default, {
                          ...e,
                          disabled: t,
                          className: D.toolsButton,
                          onClick: () => {
                            (0, f.default)({
                              analyticsLocations: k,
                              analyticsLocation: F,
                              analyticsObject: O,
                              subscription: l,
                            });
                          },
                          children: y.default.Messages.PREMIUM_SWITCH_PLANS,
                        }),
                    }),
                  ],
                })
              );
            }
          })(),
          statusClasses: es,
          shouldUseDiscountMarketing: W,
          discountAmount: H,
        });
      };
    },
    690679: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        }),
        s("222007"),
        s("70102");
      var a = s("37983"),
        n = s("884691"),
        i = s("414456"),
        l = s.n(i),
        r = s("627445"),
        u = s.n(r),
        o = s("446674"),
        d = s("77078"),
        c = s("112679"),
        E = s("596523"),
        f = s("335430"),
        m = s("740055"),
        p = s("685665"),
        _ = s("308592"),
        I = s("102985"),
        N = s("357957"),
        S = s("10514"),
        P = s("719923"),
        C = s("713518"),
        T = s("380186"),
        R = s("809071"),
        A = s("49111"),
        M = s("782340"),
        h = s("229647"),
        L = s("125047");
      function g(e) {
        let {
            subscription: t,
            onPaymentSourceAdded: i,
            highlightAddPaymentMethodButton: r,
            dropdownClassName: g,
            analyticsLocation: y,
            currentInvoicePreview: D,
            disabled: U = !1,
          } = e,
          O = (0, o.useStateFromStores)(
            [I.default],
            () => I.default.hidePersonalInformation
          ),
          [v, b] = (0, o.useStateFromStoresArray)([N.default], () => [
            N.default.paymentSources,
            N.default.hasFetchedPaymentSources,
          ]),
          B = (0, _.useSubscriptionPlansLoaded)((0, T.getSubscriptionSKUs)(t)),
          { analyticsLocations: j } = (0, p.default)(),
          G = n.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]),
          [F, k] = n.useState(!1),
          [w, Y] = n.useState(t.currency),
          H = async (e, s) => {
            if (null == t)
              throw Error("missing subscription and paymentSource");
            null == e
              ? await E.changeSubscriptionCurrency(t, s, j, y)
              : await E.changePaymentSource(t, e, s, j, y),
              k(!1),
              Y(s);
          },
          W = async (e, s, a) => {
            k(!0);
            let n = await (0, R.updateSubscriptionInvoicePreview)({
              subscriptionId: t.id,
              paymentSourceId: null == e ? void 0 : e.id,
              renewal: !0,
              currency: s,
              analyticsLocations: j,
              analyticsLocation: y,
            });
            D.currency !== n.currency ||
            (D.currency === n.currency && D.total !== n.total)
              ? await x(
                  n,
                  () => {
                    a(e, s);
                  },
                  () => {
                    k(!1);
                  }
                )
              : a(e, s);
          },
          V = e => {
            let s = S.default.get(t.planIdForCurrencies);
            u(null != e, "paymentSource not specified for change"),
              u(null != s, "Unable to fetch plan");
            let a = (0, C.getCurrencies)(s.id, e.id, !1),
              n = a.length > 0 ? a[0] : A.CurrencyCodes.USD;
            return n;
          },
          K = e => {
            null != e && W(e, V(e), H);
          },
          z = e => {
            (0, C.fetchSubscriptionPlansOnNewPaymentSource)(
              e.id,
              (0, T.getSubscriptionSKUs)(t)
            ).then(() => {
              W(e, V(e), H);
            }),
              "function" == typeof i && i(e.id);
          },
          Z = () => {
            (0, d.openModalLazy)(
              async () => {
                let { default: e } = await s
                  .el("960391")
                  .then(s.bind(s, "960391"));
                return t =>
                  (0, a.jsx)(e, {
                    ...t,
                    onAddPaymentSource: z,
                    analyticsLocation: y,
                  });
              },
              {
                onCloseCallback: () => {
                  (0, c.clearError)();
                },
                onCloseRequest: A.NOOP,
              }
            );
          };
        if (t.isPurchasedExternally)
          return (e => {
            u(
              null != e.paymentGateway,
              "Expected payment gateway when managed externally"
            );
            let t = (0, P.getExternalSubscriptionMethodUrl)(
              e.paymentGateway,
              "PAYMENT_SOURCE_MANAGEMENT"
            );
            return (0, a.jsx)(d.Anchor, {
              href: t,
              useDefaultUnderlineStyles: !1,
              className: h.externalLink,
              children: (0, a.jsx)(d.Button, {
                fullWidth: !0,
                look: d.Button.Looks.FILLED,
                color: d.Button.Colors.PRIMARY,
                children: M.default.Messages.BILLING_MANAGE_BILLING,
              }),
            });
          })(t);
        if (!b || !B) return (0, a.jsx)(d.Spinner, {});
        if (!(G.length > 0))
          return (0, a.jsx)(d.Button, {
            fullWidth: !0,
            look: d.Button.Looks.FILLED,
            color: r ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
            onClick: Z,
            children: M.default.Messages.BILLING_ADD_PAYMENT_METHOD,
          });
        else {
          let e = S.default.get(t.planIdForCurrencies);
          u(null != e, "Unable to fetch plan");
          let s = (0, C.getCurrencies)(e, t.paymentSourceId, !1);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (() => {
                let e = t.paymentSourceId;
                return (0, a.jsx)(m.default, {
                  prependOption:
                    null == e
                      ? {
                          label:
                            M.default.Messages
                              .ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
                          value: null,
                        }
                      : null,
                  className: g,
                  paymentSources: G,
                  hidePersonalInformation: O,
                  selectedPaymentSourceId: e,
                  onChange: K,
                  onPaymentSourceAdd: Z,
                  dropdownLoading: F,
                  disabled: U,
                });
              })(),
              null != t.paymentSourceId
                ? (0, a.jsx)(f.CurrencyWrapper, {
                    currencies: s,
                    children: (0, a.jsxs)("div", {
                      className: l(h.currency, L.flex, L.alignCenter),
                      children: [
                        (0, a.jsx)("div", {
                          children:
                            M.default.Messages.PAYMENT_CURRENCY_PAYING_IN,
                        }),
                        (0, a.jsx)(f.default, {
                          className: h.currencyDropdown,
                          selectedCurrency: w,
                          currencies: s,
                          onChange: e => {
                            W(void 0, e, H);
                          },
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          });
        }
      }
      let x = async (e, t, n) => {
        let i = await (0, d.openModalLazy)(
          async () => {
            let { default: i } = await s.el("336811").then(s.bind(s, "336811"));
            return s =>
              (0, a.jsx)(i, {
                newInvoice: e,
                onConfirm: t,
                onCancel: n,
                modalProps: s,
              });
          },
          {
            onCloseRequest: () => {
              null != i && (0, d.closeModal)(i), n();
            },
          }
        );
      };
    },
    95637: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return M;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("414456"),
        l = s.n(i),
        r = s("627445"),
        u = s.n(r),
        o = s("446674"),
        d = s("819855"),
        c = s("77078"),
        E = s("850068"),
        f = s("812204"),
        m = s("685665"),
        p = s("161778"),
        _ = s("797647"),
        I = s("10514"),
        N = s("145131"),
        S = s("423487"),
        P = s("719923"),
        C = s("153160"),
        T = s("782340"),
        R = s("264188");
      function A(e) {
        let {
            subscription: t,
            renewalMutations: s,
            transitionState: n,
            onClose: i,
            analyticsLocation: l,
          } = e,
          r = (0, o.useStateFromStores)([p.default], () => p.default.theme),
          { analyticsLocations: S } = (0, m.default)(
            f.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL
          );
        async function A() {
          await (0, E.upgradeSubscription)(t, t.planId, S, l), i();
        }
        let M = I.default.get(t.planId);
        u(null != M, "Missing subscriptionPlan");
        let h = (0, P.getPrice)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
          }),
          L = (0, C.formatRate)(
            (0, C.formatPrice)(h.amount, h.currency),
            M.interval,
            M.intervalCount
          );
        return (0, a.jsxs)(c.ModalRoot, {
          transitionState: n,
          "aria-label":
            T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
          children: [
            (0, a.jsxs)(c.ModalHeader, {
              justify: N.default.Justify.BETWEEN,
              separator: !1,
              children: [
                (0, a.jsx)(c.FormTitle, {
                  tag: c.FormTitleTags.H4,
                  children:
                    T.default.Messages
                      .PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
                }),
                (0, a.jsx)(c.ModalCloseButton, { onClick: i }),
              ],
            }),
            (0, a.jsx)(c.ModalContent, {
              className: R.modalBody,
              children: (0, _.isNoneSubscription)(t.planId)
                ? T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format(
                    {
                      downgradedPlan: P.default.getDisplayName(s.planId),
                      existingRate: L,
                    }
                  )
                : T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format(
                    {
                      existingPlan: P.default.getDisplayName(t.planId),
                      downgradedPlan: P.default.getDisplayName(s.planId),
                      existingRate: L,
                    }
                  ),
            }),
            (0, a.jsxs)(c.ModalFooter, {
              children: [
                (0, a.jsx)(c.Button, {
                  onClick: A,
                  children:
                    T.default.Messages
                      .PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON,
                }),
                (0, a.jsx)(c.Button, {
                  look: c.Button.Looks.LINK,
                  color: (0, d.isThemeLight)(r)
                    ? c.Button.Colors.PRIMARY
                    : c.Button.Colors.WHITE,
                  onClick: i,
                  children: T.default.Messages.NEVERMIND,
                }),
              ],
            }),
          ],
        });
      }
      function M(e) {
        let {
            subscription: t,
            renewalMutations: s,
            className: i,
            analyticsLocation: r,
          } = e,
          [u, o] = n.useState(!1);
        return (0, a.jsxs)("div", {
          className: l(R.root, i),
          children: [
            (0, a.jsx)(S.default, { className: R.infoIcon }),
            (0, a.jsx)("div", {
              className: R.text,
              children:
                T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
                  planName: t.hasExternalPlanChange
                    ? (0, P.getExternalPlanDisplayName)(s)
                    : P.default.getDisplayName(s.planId),
                  date: t.currentPeriodEnd,
                }),
            }),
            t.isPurchasedExternally
              ? null
              : (0, a.jsx)(c.Anchor, {
                  onClick: e => {
                    o(!0), e.preventDefault();
                  },
                  className: R.cancelLink,
                  children: T.default.Messages.CANCEL,
                }),
            u
              ? (0, a.jsx)(c.Modal, {
                  renderModal: e => {
                    let { transitionState: n } = e;
                    return (0, a.jsx)(A, {
                      subscription: t,
                      renewalMutations: s,
                      transitionState: n,
                      onClose: () => o(!1),
                      analyticsLocation: r,
                    });
                  },
                  onCloseRequest: () => o(!1),
                })
              : null,
          ],
        });
      }
    },
    387225: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        i = s("627445"),
        l = s.n(i),
        r = s("446674"),
        u = s("77078"),
        o = s("437822"),
        d = s("135230"),
        c = s("697218"),
        E = s("782340");
      class f extends n.Component {
        render() {
          let { color: e, look: t, size: s } = this.props;
          return (0, a.jsx)(u.Button, {
            look: t,
            size: s,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: E.default.Messages.RESEND_VERIFICATION_EMAIL,
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = { isSendingVerificationEmail: !1 }),
            (this.handleResendVerification = () => {
              let { currentUser: e, onClick: t } = this.props;
              null == t || t(),
                this.setState({ isSendingVerificationEmail: !0 }, () => {
                  o.default
                    .verifyResend()
                    .then(() =>
                      (0, u.openModal)(t =>
                        (0, a.jsx)(u.ConfirmModal, {
                          header: E.default.Messages.VERIFICATION_EMAIL_TITLE,
                          confirmText: E.default.Messages.OKAY,
                          confirmButtonColor: u.Button.Colors.BRAND,
                          ...t,
                          children: (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children:
                              E.default.Messages.VERIFICATION_EMAIL_BODY.format(
                                { email: e.email }
                              ),
                          }),
                        })
                      )
                    )
                    .catch(e => {
                      let { body: t } = e,
                        s = E.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                      null != t && t.email && (s = t.email),
                        (0, u.openModal)(e =>
                          (0, a.jsx)(d.default, {
                            title:
                              E.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                            body: s,
                            ...e,
                          })
                        );
                    })
                    .then(() =>
                      this.setState({ isSendingVerificationEmail: !1 })
                    );
                });
            });
        }
      }
      f.defaultProps = {
        size: u.Button.Sizes.MEDIUM,
        color: u.Button.Colors.BRAND,
      };
      var m = r.default.connectStores([c.default], () => {
        let e = c.default.getCurrentUser();
        return (
          l(
            null != e,
            "ResendEmailVerificationButton: currentUser cannot be undefined"
          ),
          { currentUser: e }
        );
      })(f);
    },
    8966: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        }),
        s("702976");
      var a,
        n,
        i,
        l = s("199108"),
        r = s("666038"),
        u = s("568734"),
        o = s("865146"),
        d = s("137406"),
        c = s("388290"),
        E = s("49111"),
        f = s("646718");
      ((i = a || (a = {}))[(i.GIFT = 1)] = "GIFT"),
        (i[(i.PREORDER = 8)] = "PREORDER"),
        (n = class e extends r.default {
          static createFromServer(t) {
            let s =
                null != t.payment_source
                  ? o.default.createFromServer(t.payment_source)
                  : null,
              a = null != t.sku ? d.default.createFromServer(t.sku) : null,
              n =
                null != t.subscription
                  ? c.default.createFromServer(t.subscription)
                  : null;
            return new e({
              id: t.id,
              createdAt: new Date(t.created_at),
              currency: t.currency,
              tax: t.tax,
              taxInclusive: t.tax_inclusive,
              amount: t.amount,
              amountRefunded: t.amount_refunded,
              status: t.status,
              metadata: t.metadata,
              description: t.description,
              paymentSource: s,
              paymentGateway: t.payment_gateway,
              paymentGatewayPaymentId: t.payment_gateway_payment_id,
              flags: t.flags,
              subscription: n,
              skuId: t.sku_id,
              skuPrice: t.sku_price,
              sku: a,
              downloadableInvoice: t.downloadable_invoice,
              downloadableRefundInvoices: t.downloadable_refund_invoices,
              premiumRefundDisqualificationReasons:
                t.premium_refund_disqualification_reasons,
            });
          }
          get isPurchasedViaApple() {
            return this.paymentGateway === E.PaymentGateways.APPLE;
          }
          get isPurchasedViaGoogle() {
            return this.paymentGateway === E.PaymentGateways.GOOGLE;
          }
          get isPurchasedExternally() {
            return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
          }
          get isSubscription() {
            return null != this.subscription;
          }
          get isPremiumSubscription() {
            return (
              null != this.subscription &&
              f.PREMIUM_PLANS.has(this.subscription.planId)
            );
          }
          get isPremiumGuildSubscription() {
            return (
              null != this.subscription &&
              null !=
                this.subscription.additionalPlans.find(e => {
                  let { planId: t } = e;
                  return f.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t);
                })
            );
          }
          get isGift() {
            return u.hasFlag(this.flags, 1);
          }
          get isPremiumGift() {
            return (
              this.isGift &&
              Object.values(f.PremiumSubscriptionSKUs).includes(this.skuId)
            );
          }
          get isPreorder() {
            return u.hasFlag(this.flags, 8);
          }
          get isGuildProductPurchase() {
            return (
              null != this.sku &&
              (this.sku.productLine === E.SKUProductLines.GUILD_PRODUCT ||
                u.hasFlag(this.sku.flags, l.SKUFlags.GUILD_PRODUCT))
            );
          }
          get isSoftDeletedProduct() {
            var e;
            return (
              (null === (e = this.sku) || void 0 === e ? void 0 : e.deleted) ===
              !0
            );
          }
          constructor(e) {
            super(),
              (this.id = e.id),
              (this.amount = e.amount),
              (this.amountRefunded = e.amountRefunded),
              (this.createdAt = e.createdAt),
              (this.currency = e.currency),
              (this.description = e.description),
              (this.paymentSource = e.paymentSource),
              (this.paymentGateway = e.paymentGateway),
              (this.paymentGatewayPaymentId = e.paymentGatewayPaymentId),
              (this.status = e.status),
              (this.tax = e.tax),
              (this.taxInclusive = e.taxInclusive),
              (this.subscription = e.subscription),
              (this.skuId = e.skuId),
              (this.skuPrice = e.skuPrice),
              (this.sku = e.sku),
              (this.flags = e.flags),
              (this.downloadableInvoice = e.downloadableInvoice),
              (this.downloadableRefundInvoices = e.downloadableRefundInvoices),
              (this.premiumRefundDisqualificationReasons =
                e.premiumRefundDisqualificationReasons);
          }
        });
    },
    386876: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        }),
        s("424973"),
        s("222007");
      var a = s("446674"),
        n = s("913144"),
        i = s("8966");
      let l = [];
      function r(e) {
        let { payment: t } = e,
          s = i.default.createFromServer(t),
          a = l.findIndex(e => e.id === t.id);
        -1 === a
          ? (l.push(s),
            l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()))
          : (l[a] = s),
          (l = [...l]);
      }
      class u extends a.default.Store {
        getPayment(e) {
          return l.find(t => t.id === e);
        }
        getPayments() {
          return l;
        }
      }
      u.displayName = "PaymentStore";
      var o = new u(n.default, {
        BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
          let { payments: t } = e;
          for (let e of t) {
            let t = i.default.createFromServer(e),
              s = l.findIndex(t => t.id === e.id);
            -1 !== s ? (l[s] = t) : l.push(t);
          }
          l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()),
            (l = [...l]);
        },
        PAYMENT_UPDATE: r,
        BILLING_PAYMENT_FETCH_SUCCESS: r,
        LOGOUT: function () {
          l = [];
        },
      });
    },
    251752: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var a = s("37983"),
        n = s("884691"),
        i = s("414456"),
        l = s.n(i),
        r = s("77078"),
        u = s("980428"),
        o = s("772280"),
        d = s("782340"),
        c = s("45604"),
        E = n.forwardRef(function (e, t) {
          let {
              currentPageIndex: s,
              numPages: n,
              onChangePage: i,
              children: E,
              className: f,
              showPageCount: m = !0,
              ...p
            } = e,
            _ = s <= 0,
            I = s >= n - 1;
          return (0, a.jsxs)("div", {
            className: l(c.paginator, f),
            ref: t,
            ...p,
            children: [
              E,
              (0, a.jsxs)("div", {
                className: c.pageActions,
                children: [
                  (0, a.jsx)(r.Clickable, {
                    className: l(c.pageButtonPrev, { [c.disabled]: _ }),
                    tabIndex: _ ? -1 : 0,
                    onClick: _ ? void 0 : () => i(s - 1),
                    children: (0, a.jsx)(u.default, {
                      className: c.pageButtonIcon,
                      "aria-label": d.default.Messages.PAGINATION_PREVIOUS,
                    }),
                  }),
                  m
                    ? (0, a.jsx)("div", {
                        className: c.pageIndicator,
                        children: d.default.Messages.PAGINATOR_OF_PAGES.format({
                          currentPage: s + 1,
                          numPages: n,
                        }),
                      })
                    : (0, a.jsx)("div", {
                        className: c.pageIndicator,
                        children:
                          d.default.Messages.PAGINATOR_CURRENT_PAGE.format({
                            currentPage: s + 1,
                          }),
                      }),
                  (0, a.jsx)(r.Clickable, {
                    className: l(c.pageButtonNext, { [c.disabled]: I }),
                    tabIndex: I ? -1 : 0,
                    onClick: I ? void 0 : () => i(s + 1),
                    children: (0, a.jsx)(o.default, {
                      className: c.pageButtonIcon,
                      "aria-label": d.default.Messages.PAGINATION_NEXT,
                    }),
                  }),
                ],
              }),
            ],
          });
        });
    },
    563890: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var a = s("37983");
      s("884691");
      var n = s("75196");
      function i(e) {
        let {
          width: t = 106,
          height: s = 43,
          color: i = "currentColor",
          foreground: l,
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(r),
          width: t,
          height: s,
          viewBox: "0 0 106 43",
          children: (0, a.jsxs)("g", {
            fill: i,
            className: l,
            fillRule: "evenodd",
            "aria-hidden": !0,
            children: [
              (0, a.jsx)("path", {
                d: "M96.4373 17.6233H83.2985C82.9632 17.6233 82.6698 17.8748 82.6279 18.21L81.9992 22.5687C81.9364 22.9669 82.2507 23.3441 82.6698 23.3441H85.0796C85.3311 23.3441 85.4778 23.5955 85.394 23.8051C85.1006 24.4966 84.8701 25.2719 84.7653 26.0892L83.5499 34.5341C82.7536 40.192 87.4476 43 92.5816 43C97.9461 43 103.227 40.171 104.023 34.5341L105.239 26.0892C105.993 20.557 101.446 17.749 96.4373 17.6233ZM98.952 26.1101L97.7366 34.3665C97.4641 36.3153 95.2638 37.2164 93.2312 37.2164C91.3452 37.2164 89.5012 36.3153 89.7526 34.5341L90.968 26.0892C91.2405 24.2451 93.4408 23.3021 95.4734 23.3021C97.5061 23.3021 99.2453 24.2451 98.952 26.1101Z",
              }),
              (0, a.jsx)("path", {
                d: "M23.5344 17.6233H18.6309C18.2956 17.6233 18.0023 17.8748 17.9603 18.21L16.4516 28.96V28.981L16.5144 33.1301C16.5144 33.2139 16.4516 33.2978 16.3678 33.3187L14.9638 28.3104V28.2895L10.5841 18.0424C10.4794 17.7909 10.2279 17.6233 9.95547 17.6233H4.9891C4.65382 17.6233 4.36044 17.8748 4.31853 18.21L1.00762 41.8894C0.944753 42.3085 1.28004 42.6647 1.67818 42.6647H6.6236C6.95889 42.6647 7.25226 42.4133 7.29417 42.078L8.59339 32.6691V32.6481L8.53052 27.8285L8.67721 27.7865L10.165 32.7948V32.8158L14.2513 42.2666C14.3561 42.518 14.6075 42.6857 14.8799 42.6857H20.2445C20.5797 42.6857 20.8731 42.4342 20.915 42.0989L24.2259 18.4196C24.2888 18.0005 23.9535 17.6233 23.5344 17.6233Z",
              }),
              (0, a.jsx)("path", {
                d: "M34.2634 17.6233H29.318C28.9827 17.6233 28.6893 17.8748 28.6474 18.21L25.3365 41.8684C25.2736 42.2875 25.6089 42.6438 26.007 42.6438H30.9525C31.2877 42.6438 31.5811 42.3923 31.623 42.057L34.9339 18.3986C34.9968 18.0005 34.6825 17.6233 34.2634 17.6233Z",
              }),
              (0, a.jsx)("path", {
                d: "M57.4608 17.6233H38.9573C38.6221 17.6233 38.3287 17.8748 38.2868 18.21L37.6372 22.6316C37.5743 23.0507 37.8886 23.4069 38.3077 23.4069H43.4837C43.9028 23.4069 44.2171 23.7632 44.1542 24.1823L41.7234 41.8684C41.6606 42.2875 41.9958 42.6438 42.394 42.6438H47.4023C47.7376 42.6438 48.0309 42.3923 48.0728 42.057L50.5665 23.9937C50.6084 23.6584 50.9018 23.4069 51.2371 23.4069H56.7902C57.1255 23.4069 57.4188 23.1555 57.4608 22.8202L58.1104 18.3986C58.2151 18.0005 57.8799 17.6233 57.4608 17.6233Z",
              }),
              (0, a.jsx)("path", {
                d: "M71.6056 17.6233H62.1967C61.8615 17.6233 61.5681 17.8748 61.5262 18.21L58.2153 41.8684C58.1524 42.2875 58.4877 42.6438 58.8858 42.6438H63.8941C64.2294 42.6438 64.5228 42.3923 64.5647 42.057L65.5286 34.9951C65.5496 34.8275 65.6963 34.7018 65.8639 34.7018H66.5135C66.6392 34.7018 66.744 34.7646 66.8069 34.8694L71.5847 42.3504C71.7104 42.539 71.9199 42.6647 72.1714 42.6647H78.3741C78.919 42.6647 79.2542 42.0361 78.9399 41.596L73.9107 34.4084C73.7849 34.2407 73.8478 33.9893 74.0364 33.9055C77.2425 32.3338 79.1076 30.7412 79.7153 26.2568C80.4277 20.3894 76.7606 17.6233 71.6056 17.6233ZM73.3239 26.3616C73.1563 27.8075 72.0247 29.2534 70.0759 29.2534H67.1631C66.744 29.2534 66.4297 28.8762 66.4925 28.4781L67.1212 24.1194C67.1631 23.7841 67.4565 23.5326 67.7918 23.5326H70.9141C72.7581 23.5326 73.5125 24.8528 73.3239 26.3616Z",
              }),
              (0, a.jsx)("path", {
                d: "M23.3458 2.64035H26.9082C27.7674 2.64035 28.5008 2.76608 29.0875 3.0385C29.6324 3.26901 30.0934 3.66715 30.4287 4.17008C30.722 4.673 30.8897 5.23879 30.8687 5.80458C30.8687 6.39132 30.722 6.95711 30.4077 7.46004C30.0724 7.98392 29.5695 8.38207 29.0037 8.63353C28.3751 8.9269 27.5788 9.07359 26.6567 9.07359H23.3458V2.64035V2.64035ZM26.6358 7.41813C27.2225 7.41813 27.6626 7.27144 27.9769 6.97807C28.2912 6.66374 28.4589 6.24464 28.4379 5.78363C28.4589 5.36452 28.3122 4.96637 28.0188 4.673C27.7464 4.40058 27.3273 4.2539 26.7615 4.2539H25.6509V7.39717H26.6358V7.41813Z",
              }),
              (0, a.jsx)("path", {
                d: "M36.2331 9.05262C35.7721 8.92689 35.3111 8.7383 34.892 8.48683V6.95711C35.2482 7.22952 35.6673 7.41812 36.0864 7.5229C36.5684 7.66958 37.0504 7.73245 37.5533 7.7534C37.7209 7.7534 37.8886 7.73245 38.0562 7.66958C38.161 7.60672 38.2238 7.54385 38.2238 7.46003C38.2238 7.37621 38.2029 7.29239 38.14 7.22952C38.0352 7.1457 37.9095 7.10379 37.7838 7.08284L36.6941 6.83137C36.0655 6.68469 35.6254 6.47514 35.353 6.22368C35.0806 5.95126 34.9339 5.57407 34.9548 5.19687C34.9548 4.86159 35.0806 4.52631 35.3111 4.27484C35.5835 3.98147 35.9188 3.77192 36.296 3.66714C36.7779 3.52046 37.2809 3.43664 37.8047 3.45759C38.2867 3.45759 38.7477 3.4995 39.2087 3.62523C39.5859 3.70906 39.9422 3.85574 40.2774 4.04434V5.49024C39.9631 5.30165 39.6278 5.17592 39.2926 5.0921C38.9154 4.98732 38.5172 4.94541 38.14 4.94541C37.5742 4.94541 37.2809 5.05019 37.2809 5.23878C37.2809 5.3226 37.3228 5.40642 37.4066 5.44833C37.5533 5.5112 37.7209 5.55311 37.8886 5.59502L38.8106 5.76266C39.3973 5.86744 39.8583 6.05603 40.1517 6.3075C40.4451 6.55896 40.5918 6.95711 40.5918 7.46003C40.5918 8.00486 40.3194 8.50779 39.8583 8.78021C39.3764 9.09453 38.6849 9.26218 37.7838 9.26218C37.2599 9.24122 36.736 9.17835 36.2331 9.05262Z",
              }),
              (0, a.jsx)("path", {
                d: "M42.7294 8.86404C42.2475 8.63353 41.8284 8.2773 41.535 7.81628C41.2626 7.37622 41.1368 6.85234 41.1368 6.32847C41.1368 5.80459 41.2626 5.30166 41.5559 4.8616C41.8493 4.40059 42.2684 4.06531 42.7713 3.8348C43.379 3.58334 44.0287 3.43665 44.6783 3.45761C45.6003 3.45761 46.3547 3.6462 46.9624 4.04435V5.72077C46.7319 5.57408 46.4804 5.44835 46.208 5.36453C45.9146 5.28071 45.6003 5.21784 45.286 5.21784C44.7202 5.21784 44.2801 5.32262 43.9448 5.53217C43.4838 5.78363 43.3371 6.34942 43.5886 6.81043C43.6724 6.95712 43.7981 7.08285 43.9448 7.16667C44.2592 7.37622 44.6992 7.481 45.3069 7.481C45.6212 7.481 45.9146 7.43909 46.208 7.35527C46.4804 7.27145 46.7319 7.16667 46.9624 7.01999V8.63353C46.2499 9.05264 45.4536 9.26219 44.6364 9.24123C43.9867 9.26219 43.3162 9.13646 42.7294 8.86404Z",
              }),
              (0, a.jsx)("path", {
                d: "M49.2463 8.86402C48.7434 8.63352 48.3243 8.27728 48.0309 7.81627C47.7585 7.37621 47.6118 6.85233 47.6118 6.32845C47.6118 5.80457 47.7375 5.30165 48.0309 4.86159C48.3243 4.42153 48.7434 4.06529 49.2463 3.85574C50.4408 3.37377 51.8028 3.37377 52.9973 3.85574C53.4793 4.06529 53.8984 4.42153 54.1917 4.86159C54.4641 5.30165 54.6108 5.82552 54.6108 6.32845C54.6108 6.85233 54.4641 7.37621 54.1917 7.81627C53.8984 8.27728 53.4793 8.63352 52.9973 8.86402C51.7819 9.36695 50.4408 9.36695 49.2463 8.86402ZM52.0124 7.22952C52.2429 6.99901 52.3686 6.66373 52.3477 6.3494C52.3686 6.01412 52.2429 5.69979 52.0124 5.46929C51.7609 5.23878 51.4257 5.134 51.0904 5.134C50.7551 5.11305 50.4198 5.23878 50.1683 5.46929C49.9378 5.69979 49.8121 6.01412 49.8331 6.3494C49.8121 6.68469 49.9378 6.99901 50.1683 7.22952C50.4198 7.46003 50.7551 7.58576 51.0904 7.5648C51.4466 7.58576 51.7819 7.46003 52.0124 7.22952Z",
              }),
              (0, a.jsx)("path", {
                d: "M60.1012 3.79287V5.78361C59.8288 5.61597 59.5145 5.53215 59.2002 5.55311C58.7182 5.55311 58.341 5.69979 58.0686 5.99316C57.8171 6.28654 57.6704 6.74755 57.6704 7.3762V9.05262H55.4282V3.6881H57.6285V5.38546C57.7543 4.75681 57.9429 4.2958 58.2153 4.00242C58.4877 3.70905 58.8649 3.54141 59.263 3.56237C59.5564 3.56237 59.8498 3.64619 60.1012 3.79287Z",
              }),
              (0, a.jsx)("path", {
                d: "M67.5613 2.45178V9.05266H65.3191V7.85821C65.1514 8.27732 64.8371 8.65451 64.4599 8.88502C64.0199 9.13648 63.5379 9.26221 63.035 9.24126C62.5739 9.26221 62.1129 9.11552 61.7148 8.86406C61.3376 8.6126 61.0233 8.25636 60.8347 7.83726C60.6251 7.37625 60.5203 6.87332 60.5203 6.3704C60.4994 5.84652 60.6251 5.32264 60.8347 4.86163C61.0442 4.42157 61.3795 4.06533 61.7776 3.81387C62.1968 3.56241 62.6787 3.43667 63.1607 3.43667C64.2294 3.43667 64.9419 3.89769 65.3191 4.81972V2.45178H67.5613ZM64.9838 7.18765C65.2143 6.95714 65.34 6.64282 65.3191 6.32849C65.3191 6.01416 65.1933 5.69983 64.9838 5.49028C64.4599 5.05022 63.7055 5.05022 63.1607 5.49028C62.9302 5.72079 62.8045 6.01416 62.8254 6.32849C62.8045 6.64282 62.9302 6.95714 63.1607 7.18765C63.4121 7.41816 63.7265 7.52293 64.0618 7.52293C64.418 7.54389 64.7323 7.41816 64.9838 7.18765Z",
              }),
              (0, a.jsx)("path", {
                d: "M15.0895 1.04776C13.9999 0.565789 12.8473 0.209552 11.6529 0C11.4853 0.293372 11.3386 0.586745 11.2128 0.901072C9.95553 0.712476 8.65631 0.712476 7.399 0.901072C7.27327 0.586745 7.12659 0.293372 6.95894 0C5.78546 0.209552 4.63292 0.565789 3.5223 1.06871C1.36391 4.27485 0.77717 7.39717 1.07054 10.4985C2.34881 11.4415 3.77376 12.154 5.28253 12.615C5.61781 12.154 5.93214 11.672 6.1836 11.1691C5.70163 10.9805 5.21967 10.75 4.75865 10.4985C4.88438 10.4147 4.98916 10.3309 5.11489 10.2471C7.7762 11.5044 10.8566 11.5044 13.5389 10.2471C13.6436 10.3309 13.7694 10.4357 13.8951 10.4985C13.4341 10.771 12.9731 11.0015 12.4702 11.1691C12.7216 11.672 13.0359 12.154 13.3712 12.615C14.88 12.154 16.3049 11.4415 17.5832 10.4985C17.9185 6.9152 16.9755 3.81384 15.0895 1.04776ZM6.53984 8.59162C5.72259 8.59162 5.03107 7.83723 5.03107 6.93616C5.03107 6.03509 5.68068 5.25975 6.51889 5.25975C7.35709 5.25975 8.02766 6.01413 8.02766 6.93616C8.02766 7.85819 7.37805 8.59162 6.53984 8.59162ZM12.072 8.59162C11.2548 8.59162 10.5842 7.83723 10.5842 6.93616C10.5842 6.03509 11.2338 5.25975 12.072 5.25975C12.9102 5.25975 13.5808 6.01413 13.5598 6.93616C13.5598 7.85819 12.9102 8.59162 12.072 8.59162Z",
              }),
              (0, a.jsx)("path", {
                d: "M32.7757 4.27485C33.389 4.27485 33.8863 3.82452 33.8863 3.269C33.8863 2.71349 33.389 2.26315 32.7757 2.26315C32.1623 2.26315 31.665 2.71349 31.665 3.269C31.665 3.82452 32.1623 4.27485 32.7757 4.27485Z",
              }),
              (0, a.jsx)("path", {
                d: "M31.665 4.9664C32.3775 5.25977 33.1948 5.25977 33.9072 4.9664V9.09457H31.665V4.9664Z",
              }),
            ],
          }),
        });
      }
    },
    199108: function (e, t, s) {
      "use strict";
      var a, n;
      s.r(t),
        s.d(t, {
          SKUFlags: function () {
            return a;
          },
        }),
        ((n = a || (a = {}))[(n.PREMIUM_PURCHASE = 1)] = "PREMIUM_PURCHASE"),
        (n[(n.HAS_FREE_PREMIUM_CONTENT = 2)] = "HAS_FREE_PREMIUM_CONTENT"),
        (n[(n.AVAILABLE = 4)] = "AVAILABLE"),
        (n[(n.PREMIUM_AND_DISTRIBUTION = 8)] = "PREMIUM_AND_DISTRIBUTION"),
        (n[(n.STICKER = 16)] = "STICKER"),
        (n[(n.GUILD_ROLE = 32)] = "GUILD_ROLE"),
        (n[(n.AVAILABLE_FOR_SUBSCRIPTION_GIFTING = 64)] =
          "AVAILABLE_FOR_SUBSCRIPTION_GIFTING"),
        (n[(n.APPLICATION_GUILD_SUBSCRIPTION = 128)] =
          "APPLICATION_GUILD_SUBSCRIPTION"),
        (n[(n.APPLICATION_USER_SUBSCRIPTION = 256)] =
          "APPLICATION_USER_SUBSCRIPTION"),
        (n[(n.CREATOR_MONETIZATION = 512)] = "CREATOR_MONETIZATION"),
        (n[(n.GUILD_PRODUCT = 1024)] = "GUILD_PRODUCT"),
        (n[(n.STAFF_CREATE_SUBSCRIPTION_GROUP_LISTING_MASK = 384)] =
          "STAFF_CREATE_SUBSCRIPTION_GROUP_LISTING_MASK");
    },
  },
]);
//# sourceMappingURL=25505.9274713318d9938269e2.js.map

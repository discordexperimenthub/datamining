(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40787"],
  {
    2396: function (e, a, n) {
      "use strict";
      e.exports = n.p + "27d910e5335bc8ab70d1.svg";
    },
    111494: function (e, a, n) {
      "use strict";
      e.exports = n.p + "fb2bc9ec875070eb5384.svg";
    },
    577468: function (e, a, n) {
      "use strict";
      e.exports = n.p + "ca67ff158e9860e50cac.svg";
    },
    330574: function (e, a, n) {
      "use strict";
      e.exports = n.p + "5a0a3c94e4973427134e.svg";
    },
    186237: function (e, a, n) {
      "use strict";
      e.exports = n.p + "c269c9b36ab7b621c16b.svg";
    },
    868470: function (e, a, n) {
      "use strict";
      e.exports = n.p + "f57bdf2be6d676da652b.svg";
    },
    441294: function (e, a, n) {
      "use strict";
      e.exports = n.p + "4741849dca44f19ddfa3.svg";
    },
    941754: function (e, a, n) {
      "use strict";
      e.exports = n.p + "461029a773ee21ad9bb9.svg";
    },
    245317: function (e, a, n) {
      "use strict";
      e.exports = n.p + "9f9d36fd84ca5ce1c895.svg";
    },
    679762: function (e, a, n) {
      "use strict";
      e.exports = n.p + "e731b9019f2c2fe6a63a.svg";
    },
    398634: function (e, a, n) {
      "use strict";
      e.exports = n.p + "bc52b5ef73ac80ba64b1.svg";
    },
    338262: function (e, a, n) {
      "use strict";
      e.exports = n.p + "d3d02d383054f64091d5.svg";
    },
    997322: function (e, a, n) {
      "use strict";
      e.exports = n.p + "dcc1b96dda5a27b9a2f0.svg";
    },
    586504: function (e, a, n) {
      "use strict";
      e.exports = n.p + "dd293574a2092f9d4555.svg";
    },
    667100: function (e, a, n) {
      "use strict";
      e.exports = n.p + "08d19f5d231757b14468.svg";
    },
    515533: function (e, a, n) {
      "use strict";
      e.exports = n.p + "66d99a14180b6e5da1a3.svg";
    },
    356402: function (e, a, n) {
      "use strict";
      e.exports = n.p + "a0e2e13b1edb66b440fe.svg";
    },
    165123: function (e, a, n) {
      "use strict";
      e.exports = n.p + "5b309e3bda0a954ae67e.svg";
    },
    955003: function (e, a, n) {
      "use strict";
      e.exports = n.p + "a6a8e98a210bf8b02da7.svg";
    },
    481205: function (e, a, n) {
      "use strict";
      e.exports = n.p + "74cc3a7d069e7bde4642.svg";
    },
    463057: function (e, a, n) {
      "use strict";
      e.exports = n.p + "022b6f08ce8cd06e7d2e.svg";
    },
    286549: function (e, a, n) {
      "use strict";
      e.exports = n.p + "731d9f380624da37c63d.svg";
    },
    936532: function (e, a, n) {
      "use strict";
      e.exports = n.p + "b8ead81360c33e0de3f5.svg";
    },
    697643: function (e, a, n) {
      "use strict";
      e.exports = n.p + "bb2df9b4fe177b88f5cb.svg";
    },
    878188: function (e, a, n) {
      "use strict";
      e.exports = n.p + "38ac3f3a945e2cca9509.svg";
    },
    59619: function (e, a, n) {
      "use strict";
      e.exports = n.p + "abc0b50e7b32970d6ffd.svg";
    },
    740055: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          default: function () {
            return S;
          },
        }),
        n("70102"),
        n("222007");
      var r = n("37983"),
        t = n("884691"),
        s = n("414456"),
        o = n.n(s),
        l = n("669491"),
        u = n("77078"),
        d = n("339783"),
        i = n("865146"),
        c = n("712218"),
        f = n("423487"),
        p = n("701909"),
        y = n("49111"),
        b = n("843455"),
        A = n("782340"),
        _ = n("661321");
      let P = "***@***.***",
        C = new i.CreditCardSourceRecord({
          id: "new_payment_source_id",
          brand: c.default.Types.UNKNOWN,
          type: y.PaymentSourceTypes.CARD,
        });
      function S(e) {
        var a, n;
        let s,
          {
            selectedPaymentSourceId: S,
            paymentSources: g,
            prependOption: T,
            hidePersonalInformation: m,
            onChange: E,
            onPaymentSourceAdd: R,
            isTrial: k = !1,
            disabled: N = !1,
            className: M,
            optionClassName: h,
            dropdownLoading: O,
          } = e,
          v = 0 === g.length,
          B = [...(null != T ? [T] : []), ...g, C].map((e, a) => {
            if (e instanceof i.default) {
              let { brand: a, label: n } = (function (e, a) {
                if (e instanceof i.CreditCardSourceRecord)
                  return e.id === C.id
                    ? {
                        brand: null,
                        label: A.default.Messages.PAYMENT_SOURCES_ADD,
                      }
                    : {
                        brand: a ? c.default.Types.UNKNOWN : e.brand,
                        label:
                          A.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format(
                            { last4: a ? "****" : e.last4 }
                          ),
                      };
                if (e instanceof i.PaypalSourceRecord)
                  return {
                    brand: c.default.Types.PAYPAL,
                    label: a ? P : e.email,
                  };
                if (e instanceof i.SofortSourceRecord)
                  return {
                    brand: c.default.Types.SOFORT,
                    label: a ? P : e.email,
                  };
                else if (e instanceof i.GiropaySourceRecord)
                  return {
                    brand: c.default.Types.GIROPAY,
                    label: A.default.Messages.PAYMENT_SOURCE_GIROPAY,
                  };
                else if (e instanceof i.Przelewy24SourceRecord)
                  return {
                    brand: c.default.Types.PRZELEWY24,
                    label: a ? P : e.email,
                  };
                else if (e instanceof i.PaysafeSourceRecord)
                  return {
                    brand: c.default.Types.PAYSAFECARD,
                    label:
                      A.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT,
                  };
                else if (e instanceof i.GcashSourceRecord)
                  return {
                    brand: c.default.Types.GCASH,
                    label: A.default.Messages.PAYMENT_SOURCE_GCASH,
                  };
                else if (e instanceof i.GrabPayMySourceRecord)
                  return {
                    brand: c.default.Types.GRABPAY,
                    label: A.default.Messages.PAYMENT_SOURCE_GRABPAY,
                  };
                else if (e instanceof i.MomoWalletSourceRecord)
                  return {
                    brand: c.default.Types.MOMO_WALLET,
                    label: A.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                  };
                else if (e instanceof i.VenmoSourceRecord)
                  return {
                    brand: c.default.Types.VENMO,
                    label: a ? "***" : "@" + e.username,
                  };
                else if (e instanceof i.KaKaoPaySourceRecord)
                  return {
                    brand: c.default.Types.KAKAOPAY,
                    label: A.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                  };
                else if (e instanceof i.GoPayWalletSourceRecord)
                  return {
                    brand: c.default.Types.GOPAY_WALLET,
                    label: A.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                  };
                else if (e instanceof i.BancontactSourceRecord)
                  return {
                    brand: c.default.Types.BANCONTACT,
                    label: A.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                  };
                else if (e instanceof i.EPSSourceRecord)
                  return {
                    brand: c.default.Types.EPS,
                    label:
                      A.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                        bank: (0, d.getEPSBankDisplayNameFromBankName)(e.bank),
                      }),
                  };
                else if (e instanceof i.IdealSourceRecord)
                  return {
                    brand: c.default.Types.IDEAL,
                    label:
                      A.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                        bank: (0, d.getIdealBankDisplayNameFromBankName)(
                          e.bank
                        ),
                      }),
                  };
                else if (e instanceof i.CashAppSourceRecord)
                  return {
                    brand: c.default.Types.CASH_APP,
                    label: a ? "***" : e.username,
                  };
                throw Error("Invalid Payment Source");
              })(e, m);
              return {
                value: e.id,
                label: (0, r.jsxs)("div", {
                  className: _.paymentSourceSelectedOption,
                  children: [
                    null != a
                      ? (0, r.jsx)(c.default, { type: c.default.getType(a) })
                      : null,
                    (0, r.jsx)("div", {
                      className: o(_.paymentSourceLabel, {
                        [_.error]: e.invalid,
                      }),
                      children: n,
                    }),
                  ],
                }),
              };
            }
            return {
              key: a,
              value: e.value,
              label: (0, r.jsx)("div", {
                className: _.paymentSourceLabel,
                children: e.label,
              }),
            };
          }),
          Y = t.useMemo(() => g.find(e => e.id === S), [g, S]);
        let L =
          ((a = k),
          (n = Y),
          (s = null),
          a && null != n && !n.canRedeemTrial()
            ? (s = A.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID)
            : a &&
              null != n &&
              n.hasFlag(b.PaymentSourceFlags.NEW) &&
              (s =
                A.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
                  helpDeskArticle: p.default.getArticleURL(
                    y.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE
                  ),
                })),
          s);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            v
              ? (0, r.jsx)(u.Button, {
                  color: u.ButtonColors.BRAND,
                  fullWidth: !0,
                  onClick: R,
                  children: A.default.Messages.PAYMENT_SOURCES_ADD,
                })
              : (0, r.jsx)(u.SingleSelect, {
                  options: B,
                  value: S,
                  onChange: e => {
                    if (e === C.id) null != R && R();
                    else {
                      let a = g.find(a => a.id === e);
                      null != E && E(a);
                    }
                  },
                  isDisabled: N,
                  className: o({ [_.paymentSourceHasWarning]: null != L }, M),
                  optionClassName: h,
                  placeholder: A.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                  renderOptionValue: e => {
                    let [a] = e;
                    return O
                      ? (0, r.jsx)(u.Spinner, {
                          type: u.SpinnerTypes.SPINNING_CIRCLE,
                        })
                      : a.label;
                  },
                }),
            null != L
              ? (0, r.jsxs)("div", {
                  className: _.paymentSourceWarning,
                  children: [
                    (0, r.jsx)(f.default, {
                      className: _.paymentSourceWarningIcon,
                      color: l.default.unsafe_rawColors.YELLOW_300.css,
                    }),
                    (0, r.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      children: L,
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    339783: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          default: function () {
            return o;
          },
          getIdealBankDisplayNameFromBankName: function () {
            return u;
          },
          getEPSBankDisplayNameFromBankName: function () {
            return i;
          },
        }),
        n("222007");
      var r = n("862205"),
        t = n("49111"),
        s = n("782340"),
        o = (0, r.createExperiment)({
          kind: "user",
          id: "2021-08_regional_payment_methods",
          label: "Regional Payment Methods",
          defaultConfig: {
            enabledPaymentTypes: [],
            forceCountryCode: null,
            validCountryCodes: [],
          },
          treatments: [
            {
              id: 1,
              label: "Regional Payment Method for Germany",
              config: {
                enabledPaymentTypes: [
                  t.PaymentSourceTypes.SOFORT,
                  t.PaymentSourceTypes.GIROPAY,
                ],
                forceCountryCode: "DE",
                validCountryCodes: ["DE"],
              },
            },
            {
              id: 2,
              label: "Regional Payment Method for US",
              config: {
                enabledPaymentTypes: [
                  t.PaymentSourceTypes.VENMO,
                  t.PaymentSourceTypes.CASH_APP,
                ],
                forceCountryCode: "US",
                validCountryCodes: ["US"],
              },
            },
            {
              id: 3,
              label: "Regional Payment Method for Brazil",
              config: {
                enabledPaymentTypes: [],
                forceCountryCode: "BR",
                validCountryCodes: ["BR"],
              },
            },
            {
              id: 4,
              label: "Regional Payment Method for Turkey",
              config: {
                enabledPaymentTypes: [],
                forceCountryCode: "TR",
                validCountryCodes: ["TR"],
              },
            },
            {
              id: 5,
              label: "Regional Payment Method for Poland",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.PRZELEWY24],
                forceCountryCode: "PL",
                validCountryCodes: ["PL"],
              },
            },
            {
              id: 6,
              label: "Enable paysafecard",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.PAYSAFE_CARD],
                forceCountryCode: "DE",
                validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"],
              },
            },
            {
              id: 7,
              label: "Regional Payment Method for Philippines",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.GCASH],
                forceCountryCode: "PH",
                validCountryCodes: ["PH"],
              },
            },
            {
              id: 8,
              label: "Regional Payment Method for Malaysia",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.GRABPAY_MY],
                forceCountryCode: "MY",
                validCountryCodes: ["MY"],
              },
            },
            {
              id: 9,
              label: "Regional Payment Method for Vietnam",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.MOMO_WALLET],
                forceCountryCode: "VN",
                validCountryCodes: ["VN"],
              },
            },
            {
              id: 10,
              label: "Regional Payment Method for Indonesia",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.GOPAY_WALLET],
                forceCountryCode: "ID",
                validCountryCodes: ["ID"],
              },
            },
            {
              id: 11,
              label: "Regional Payment Method for South Korea",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.KAKAOPAY],
                forceCountryCode: "KR",
                validCountryCodes: ["KR"],
              },
            },
            {
              id: 12,
              label: "Regional Payment Method for Belgium",
              config: {
                enabledPaymentTypes: [
                  t.PaymentSourceTypes.PAYSAFE_CARD,
                  t.PaymentSourceTypes.SOFORT,
                  t.PaymentSourceTypes.BANCONTACT,
                ],
                forceCountryCode: "BE",
                validCountryCodes: ["BE"],
              },
            },
            {
              id: 13,
              label: "Regional Payment Method for Austria",
              config: {
                enabledPaymentTypes: [
                  t.PaymentSourceTypes.PAYSAFE_CARD,
                  t.PaymentSourceTypes.EPS,
                  t.PaymentSourceTypes.SOFORT,
                ],
                forceCountryCode: "AT",
                validCountryCodes: ["AT"],
              },
            },
            {
              id: 14,
              label: "Regional Payment Method for Netherlands",
              config: {
                enabledPaymentTypes: [
                  t.PaymentSourceTypes.PAYSAFE_CARD,
                  t.PaymentSourceTypes.IDEAL,
                  t.PaymentSourceTypes.SOFORT,
                ],
                forceCountryCode: "NL",
                validCountryCodes: ["NL"],
              },
            },
            {
              id: 15,
              label: "Launch Paysafecard and Sofort",
              config: {
                enabledPaymentTypes: [
                  t.PaymentSourceTypes.PAYSAFE_CARD,
                  t.PaymentSourceTypes.SOFORT,
                ],
                forceCountryCode: "ES",
                validCountryCodes: ["ES", "IT"],
              },
            },
            {
              id: 16,
              label: "Launch Cash App",
              config: {
                enabledPaymentTypes: [t.PaymentSourceTypes.CASH_APP],
                forceCountryCode: "US",
                validCountryCodes: ["US"],
              },
            },
          ],
        });
      let l = new Map([
        ["abn_amro", "ABN AMRO"],
        ["asn_bank", "ASN Bank"],
        ["bunq", "Bunq"],
        ["handelsbanken", "Handelsbanken"],
        ["ing ", "ING"],
        ["knab", "Knab"],
        ["rabobank", "Rabobank"],
        ["revolut", "Revolut"],
        ["regiobank", "RegioBank"],
        ["sns_bank", "SNS Bank (De Volksbank)"],
        ["triodos_bank", "Triodos Bank"],
        ["van_lanschot", "Van Lanschot"],
      ]);
      function u(e) {
        return void 0 !== e && l.has(e)
          ? l.get(e)
          : s.default.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
      let d = new Map([
        ["arzte_und_apotheker_bank", "\xc4rzte- und Apothekerbank"],
        ["austrian_anadi_bank_ag", "Austrian Anadi Bank AG"],
        ["bank_austria", "Bank Austria"],
        ["bankhaus_carl_spangler", "Bankhaus Carl Sp\xe4ngler & Co.AG"],
        [
          "bankhaus_schelhammer_und_schattera_ag",
          "Bankhaus Schelhammer & Schattera AG",
        ],
        ["bawag_psk_ag", "BAWAG P.S.K. AG"],
        ["bks_bank_ag", "BKS Bank AG"],
        ["brull_kallmus_bank_ag", "Br\xfcll Kallmus Bank AG"],
        ["btv_vier_lander_bank", "BTV VIER L\xc4NDER BANK"],
        ["capital_bank_grawe_gruppe_ag", "Capital Bank Grawe Gruppe AG"],
        ["dolomitenbank", "Dolomitenbank"],
        ["easybank_ag", "Easybank AG"],
        ["erste_bank_und_sparkassen", "Erste Bank und Sparkassen"],
        [
          "hypo_alpeadriabank_international_ag",
          "Hypo Alpe-Adria-Bank International AG",
        ],
        [
          "hypo_noe_lb_fur_niederosterreich_u_wien",
          "HYPO NOE LB f\xfcr Nieder\xf6sterreich u. Wien",
        ],
        [
          "hypo_oberosterreich_salzburg_steiermark",
          "HYPO Ober\xf6sterreich, Salzburg, Steiermark",
        ],
        ["hypo_tirol_bank_ag", "Hypo Tirol Bank AG"],
        ["hypo_vorarlberg_bank_ag", "Hypo Vorarlberg Bank AG"],
        [
          "hypo_bank_burgenland_aktiengesellschaft",
          "HYPO-BANK BURGENLAND Aktiengesellschaft",
        ],
        ["marchfelder_bank", "Marchfelder Bank"],
        ["oberbank_ag", "Oberbank AG"],
        [
          "raiffeisen_bankengruppe_osterreich",
          "Raiffeisen Bankengruppe \xd6sterreich",
        ],
        ["schoellerbank_ag", "Schoellerbank AG"],
        ["sparda_bank_wien", "Sparda-Bank Wien"],
        ["volksbank_gruppe", "Volksbank Gruppe"],
        ["volkskreditbank_ag", "Volkskreditbank AG"],
        ["vr_bank_braunau", "VR-Bank Braunau"],
      ]);
      function i(e) {
        return void 0 !== e && d.has(e)
          ? d.get(e)
          : s.default.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
    },
    712218: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          IconTypes: function () {
            return r;
          },
          IconSizes: function () {
            return i;
          },
          default: function () {
            return f;
          },
        }),
        n("781738");
      var r,
        t,
        s = n("37983"),
        o = n("884691"),
        l = n("414456"),
        u = n.n(l),
        d = n("870620");
      ((t = r || (r = {})).UNKNOWN = "unknown"),
        (t.VISA = "visa"),
        (t.DISCOVER = "discover"),
        (t.MASTERCARD = "mastercard"),
        (t.AMEX = "amex"),
        (t.PAYPAL = "paypal"),
        (t.PAYMENT_REQUEST = "paymentRequest"),
        (t.G_PAY = "gPay"),
        (t.DINERS = "diners"),
        (t.JCB = "jcb"),
        (t.UNIONPAY = "unionpay"),
        (t.SOFORT = "sofort"),
        (t.PRZELEWY24 = "przelewy24"),
        (t.GIROPAY = "giropay"),
        (t.PAYSAFECARD = "paysafecard"),
        (t.GCASH = "gcash"),
        (t.GRABPAY = "grabpay"),
        (t.MOMO_WALLET = "momo_wallet"),
        (t.VENMO = "venmo"),
        (t.KAKAOPAY = "kakaopay"),
        (t.GOPAY_WALLET = "gopay_wallet"),
        (t.BANCONTACT = "bancontact"),
        (t.EPS = "eps"),
        (t.IDEAL = "ideal"),
        (t.CASH_APP = "cash_app"),
        (t.APPLE = "apple");
      let i = {
        SMALL: d.cardIconSmall,
        MEDIUM: d.cardIconMedium,
        LARGE: d.cardIconLarge,
        XLARGE: d.cardIconXLarge,
      };
      class c extends o.PureComponent {
        static getType(e) {
          if (null == e) return "unknown";
          let a = e.replace(/[^a-z0-9_]/gi, "").toUpperCase();
          return r[a] || "unknown";
        }
        render() {
          let { flipped: e, type: a, className: n, size: r } = this.props;
          return (0, s.jsx)("div", {
            className: u(r, d[a], n, { [d.flipped]: e }),
            children: a,
          });
        }
      }
      (c.Types = r),
        (c.Sizes = i),
        (c.defaultProps = { size: i.SMALL, flipped: !1 });
      var f = c;
    },
  },
]);
//# sourceMappingURL=40787.b24da697afbb0ccf17aa.js.map

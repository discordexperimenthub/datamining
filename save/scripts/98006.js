(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98006"],
  {
    2396: function (e, r, t) {
      "use strict";
      e.exports = t.p + "27d910e5335bc8ab70d1.svg";
    },
    111494: function (e, r, t) {
      "use strict";
      e.exports = t.p + "fb2bc9ec875070eb5384.svg";
    },
    577468: function (e, r, t) {
      "use strict";
      e.exports = t.p + "ca67ff158e9860e50cac.svg";
    },
    330574: function (e, r, t) {
      "use strict";
      e.exports = t.p + "5a0a3c94e4973427134e.svg";
    },
    186237: function (e, r, t) {
      "use strict";
      e.exports = t.p + "c269c9b36ab7b621c16b.svg";
    },
    868470: function (e, r, t) {
      "use strict";
      e.exports = t.p + "f57bdf2be6d676da652b.svg";
    },
    441294: function (e, r, t) {
      "use strict";
      e.exports = t.p + "4741849dca44f19ddfa3.svg";
    },
    941754: function (e, r, t) {
      "use strict";
      e.exports = t.p + "461029a773ee21ad9bb9.svg";
    },
    245317: function (e, r, t) {
      "use strict";
      e.exports = t.p + "9f9d36fd84ca5ce1c895.svg";
    },
    679762: function (e, r, t) {
      "use strict";
      e.exports = t.p + "e731b9019f2c2fe6a63a.svg";
    },
    398634: function (e, r, t) {
      "use strict";
      e.exports = t.p + "bc52b5ef73ac80ba64b1.svg";
    },
    338262: function (e, r, t) {
      "use strict";
      e.exports = t.p + "d3d02d383054f64091d5.svg";
    },
    997322: function (e, r, t) {
      "use strict";
      e.exports = t.p + "dcc1b96dda5a27b9a2f0.svg";
    },
    586504: function (e, r, t) {
      "use strict";
      e.exports = t.p + "dd293574a2092f9d4555.svg";
    },
    667100: function (e, r, t) {
      "use strict";
      e.exports = t.p + "08d19f5d231757b14468.svg";
    },
    515533: function (e, r, t) {
      "use strict";
      e.exports = t.p + "66d99a14180b6e5da1a3.svg";
    },
    356402: function (e, r, t) {
      "use strict";
      e.exports = t.p + "a0e2e13b1edb66b440fe.svg";
    },
    165123: function (e, r, t) {
      "use strict";
      e.exports = t.p + "5b309e3bda0a954ae67e.svg";
    },
    955003: function (e, r, t) {
      "use strict";
      e.exports = t.p + "a6a8e98a210bf8b02da7.svg";
    },
    481205: function (e, r, t) {
      "use strict";
      e.exports = t.p + "74cc3a7d069e7bde4642.svg";
    },
    463057: function (e, r, t) {
      "use strict";
      e.exports = t.p + "022b6f08ce8cd06e7d2e.svg";
    },
    286549: function (e, r, t) {
      "use strict";
      e.exports = t.p + "731d9f380624da37c63d.svg";
    },
    936532: function (e, r, t) {
      "use strict";
      e.exports = t.p + "b8ead81360c33e0de3f5.svg";
    },
    697643: function (e, r, t) {
      "use strict";
      e.exports = t.p + "bb2df9b4fe177b88f5cb.svg";
    },
    878188: function (e, r, t) {
      "use strict";
      e.exports = t.p + "38ac3f3a945e2cca9509.svg";
    },
    59619: function (e, r, t) {
      "use strict";
      e.exports = t.p + "abc0b50e7b32970d6ffd.svg";
    },
    364735: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return n;
          },
        });
      var a,
        n,
        i = t("37983"),
        o = t("884691"),
        l = t("414456"),
        s = t.n(l),
        c = t("77078"),
        d = t("339783"),
        u = t("865146"),
        h = t("145131"),
        p = t("712218"),
        m = t("745279"),
        g = t("159885"),
        f = t("782340"),
        y = t("29419");
      ((a = class extends o.PureComponent {
        get typeString() {
          let { paymentSource: e } = this.props;
          if (e instanceof u.PaypalSourceRecord) return p.default.Types.PAYPAL;
          if (e instanceof u.SofortSourceRecord) return p.default.Types.SOFORT;
          if (e instanceof u.CreditCardSourceRecord)
            return p.default.getType(e.brand);
          else if (e instanceof u.GiropaySourceRecord)
            return p.default.Types.GIROPAY;
          else if (e instanceof u.Przelewy24SourceRecord)
            return p.default.Types.PRZELEWY24;
          else if (e instanceof u.PaysafeSourceRecord)
            return p.default.Types.PAYSAFECARD;
          else if (e instanceof u.GcashSourceRecord)
            return p.default.Types.GCASH;
          else if (e instanceof u.GrabPayMySourceRecord)
            return p.default.Types.GRABPAY;
          else if (e instanceof u.MomoWalletSourceRecord)
            return p.default.Types.MOMO_WALLET;
          else if (e instanceof u.VenmoSourceRecord)
            return p.default.Types.VENMO;
          else if (e instanceof u.KaKaoPaySourceRecord)
            return p.default.Types.KAKAOPAY;
          else if (e instanceof u.GoPayWalletSourceRecord)
            return p.default.Types.GOPAY_WALLET;
          else if (e instanceof u.BancontactSourceRecord)
            return p.default.Types.BANCONTACT;
          else if (e instanceof u.EPSSourceRecord) return p.default.Types.EPS;
          else if (e instanceof u.IdealSourceRecord)
            return p.default.Types.IDEAL;
          else if (e instanceof u.CashAppSourceRecord)
            return p.default.Types.CASH_APP;
          else if (e instanceof u.AppleSourceRecord)
            return p.default.Types.APPLE;
          return p.default.Types.UNKNOWN;
        }
        getLabel(e) {
          return e instanceof u.CreditCardSourceRecord
            ? f.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
                brand: (0, g.upperCaseFirstChar)(e.brand),
                last_4: e.last4,
              })
            : e instanceof u.PaypalSourceRecord
              ? f.default.Messages.PAYMENT_SOURCE_PAYPAL
              : e instanceof u.SofortSourceRecord
                ? f.default.Messages.PAYMENT_SOURCE_SOFORT
                : e instanceof u.GiropaySourceRecord
                  ? f.default.Messages.PAYMENT_SOURCE_GIROPAY
                  : e instanceof u.Przelewy24SourceRecord
                    ? f.default.Messages.PAYMENT_SOURCE_PRZELEWY24
                    : e instanceof u.PaysafeSourceRecord
                      ? f.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                      : e instanceof u.GcashSourceRecord
                        ? f.default.Messages.PAYMENT_SOURCE_GCASH
                        : e instanceof u.GrabPayMySourceRecord
                          ? f.default.Messages.PAYMENT_SOURCE_GRABPAY
                          : e instanceof u.MomoWalletSourceRecord
                            ? f.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
                            : e instanceof u.VenmoSourceRecord
                              ? f.default.Messages.PAYMENT_SOURCE_VENMO
                              : e instanceof u.KaKaoPaySourceRecord
                                ? f.default.Messages.PAYMENT_SOURCE_KAKAOPAY
                                : e instanceof u.GoPayWalletSourceRecord
                                  ? f.default.Messages
                                      .PAYMENT_SOURCE_GOPAY_WALLET
                                  : e instanceof u.BancontactSourceRecord
                                    ? f.default.Messages
                                        .PAYMENT_SOURCE_BANCONTACT
                                    : e instanceof u.IdealSourceRecord
                                      ? f.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format(
                                          {
                                            bank: (0,
                                            d.getIdealBankDisplayNameFromBankName)(
                                              e.bank
                                            ),
                                          }
                                        )
                                      : e instanceof u.EPSSourceRecord
                                        ? f.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format(
                                            {
                                              bank: (0,
                                              d.getEPSBankDisplayNameFromBankName)(
                                                e.bank
                                              ),
                                            }
                                          )
                                        : e instanceof u.CashAppSourceRecord
                                          ? f.default.Messages
                                              .PAYMENT_SOURCE_CASH_APP_PAY
                                          : e instanceof u.AppleSourceRecord
                                            ? f.default.Messages
                                                .PAYMENT_SOURCE_APPLE
                                            : f.default.Messages
                                                .PAYMENT_SOURCE_UNKNOWN;
        }
        renderDescription() {
          let { paymentSource: e, descriptionClassName: r } = this.props;
          return (0, i.jsx)(c.Text, {
            className: s(y.description, r),
            variant: "text-md/semibold",
            children: this.getLabel(e),
          });
        }
        renderSubText() {
          let { paymentSource: e, locale: r } = this.props,
            t = null;
          return (
            e instanceof u.CreditCardSourceRecord
              ? (t = f.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
                  month: (0, m.getLocalizedDisplayMonth)(e.expiresMonth, r),
                  year: e.expiresYear,
                }))
              : e instanceof u.PaypalSourceRecord
                ? (t = e.email)
                : e instanceof u.SofortSourceRecord
                  ? (t = e.email)
                  : e instanceof u.Przelewy24SourceRecord
                    ? (t = e.email)
                    : e instanceof u.VenmoSourceRecord
                      ? (t = "@" + e.username)
                      : e instanceof u.CashAppSourceRecord && (t = e.username),
            t
          );
        }
        render() {
          let {
              isDefault: e,
              paymentSource: r,
              showSubtext: t,
              isForSubscription: a,
            } = this.props,
            n = this.renderSubText();
          return (0, i.jsxs)(h.default, {
            children: [
              (0, i.jsx)(p.default, { type: this.typeString }),
              (0, i.jsxs)(h.default, {
                direction: h.default.Direction.VERTICAL,
                className: y.descriptionWrapper,
                children: [
                  (0, i.jsxs)(h.default, {
                    align: h.default.Align.CENTER,
                    children: [
                      this.renderDescription(),
                      e
                        ? (0, i.jsx)("div", {
                            className: y.defaultIndicator,
                            children: f.default.Messages.DEFAULT,
                          })
                        : null,
                      a
                        ? (0, i.jsx)("div", {
                            className: y.premiumIndicator,
                            children:
                              f.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION,
                          })
                        : null,
                      r.invalid
                        ? (0, i.jsx)("div", {
                            className: y.invalidIndicator,
                            children: f.default.Messages.PAYMENT_SOURCE_INVALID,
                          })
                        : null,
                    ],
                  }),
                  t && null != n
                    ? (0, i.jsx)("div", { className: y.subText, children: n })
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
    562366: function (e, r, t) {
      "use strict";
      t.r(r);
      var a = t("457589");
      t.es(a, r);
    },
    597590: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("884691");
      let n = a.createContext(void 0);
      var i = n;
    },
    339783: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return o;
          },
          getIdealBankDisplayNameFromBankName: function () {
            return s;
          },
          getEPSBankDisplayNameFromBankName: function () {
            return d;
          },
        }),
        t("222007");
      var a = t("862205"),
        n = t("49111"),
        i = t("782340"),
        o = (0, a.createExperiment)({
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
                  n.PaymentSourceTypes.SOFORT,
                  n.PaymentSourceTypes.GIROPAY,
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
                  n.PaymentSourceTypes.VENMO,
                  n.PaymentSourceTypes.CASH_APP,
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
                enabledPaymentTypes: [n.PaymentSourceTypes.PRZELEWY24],
                forceCountryCode: "PL",
                validCountryCodes: ["PL"],
              },
            },
            {
              id: 6,
              label: "Enable paysafecard",
              config: {
                enabledPaymentTypes: [n.PaymentSourceTypes.PAYSAFE_CARD],
                forceCountryCode: "DE",
                validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"],
              },
            },
            {
              id: 7,
              label: "Regional Payment Method for Philippines",
              config: {
                enabledPaymentTypes: [n.PaymentSourceTypes.GCASH],
                forceCountryCode: "PH",
                validCountryCodes: ["PH"],
              },
            },
            {
              id: 8,
              label: "Regional Payment Method for Malaysia",
              config: {
                enabledPaymentTypes: [n.PaymentSourceTypes.GRABPAY_MY],
                forceCountryCode: "MY",
                validCountryCodes: ["MY"],
              },
            },
            {
              id: 9,
              label: "Regional Payment Method for Vietnam",
              config: {
                enabledPaymentTypes: [n.PaymentSourceTypes.MOMO_WALLET],
                forceCountryCode: "VN",
                validCountryCodes: ["VN"],
              },
            },
            {
              id: 10,
              label: "Regional Payment Method for Indonesia",
              config: {
                enabledPaymentTypes: [n.PaymentSourceTypes.GOPAY_WALLET],
                forceCountryCode: "ID",
                validCountryCodes: ["ID"],
              },
            },
            {
              id: 11,
              label: "Regional Payment Method for South Korea",
              config: {
                enabledPaymentTypes: [n.PaymentSourceTypes.KAKAOPAY],
                forceCountryCode: "KR",
                validCountryCodes: ["KR"],
              },
            },
            {
              id: 12,
              label: "Regional Payment Method for Belgium",
              config: {
                enabledPaymentTypes: [
                  n.PaymentSourceTypes.PAYSAFE_CARD,
                  n.PaymentSourceTypes.SOFORT,
                  n.PaymentSourceTypes.BANCONTACT,
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
                  n.PaymentSourceTypes.PAYSAFE_CARD,
                  n.PaymentSourceTypes.EPS,
                  n.PaymentSourceTypes.SOFORT,
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
                  n.PaymentSourceTypes.PAYSAFE_CARD,
                  n.PaymentSourceTypes.IDEAL,
                  n.PaymentSourceTypes.SOFORT,
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
                  n.PaymentSourceTypes.PAYSAFE_CARD,
                  n.PaymentSourceTypes.SOFORT,
                ],
                forceCountryCode: "ES",
                validCountryCodes: ["ES", "IT"],
              },
            },
            {
              id: 16,
              label: "Launch Cash App",
              config: {
                enabledPaymentTypes: [n.PaymentSourceTypes.CASH_APP],
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
      function s(e) {
        return void 0 !== e && l.has(e)
          ? l.get(e)
          : i.default.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
      let c = new Map([
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
      function d(e) {
        return void 0 !== e && c.has(e)
          ? c.get(e)
          : i.default.Messages.PAYMENT_SOURCE_UNKNOWN;
      }
    },
    398570: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return m;
          },
        }),
        t("222007");
      var a = t("748820"),
        n = t("391679"),
        i = t("446674"),
        o = t("913144"),
        l = t("271938"),
        s = t("368694");
      let c = 0,
        d = [],
        u = [],
        h = !1;
      class p extends i.default.Store {
        initialize() {
          this.waitFor(s.default);
        }
        get loggedEvents() {
          return d;
        }
        get loggedTriggers() {
          return u;
        }
        get trackTriggers() {
          return h;
        }
      }
      p.displayName = "AnalyticsLogStore";
      var m = new p(o.default, {
        TRACK: function (e) {
          let { event: r, properties: t, fingerprint: a } = e;
          if (s.default.isDeveloper) {
            var i;
            (d = [
              ...d,
              {
                key: (c++).toString(),
                event: r,
                properties: t,
                fingerprint:
                  null != (i = a) ? (0, n.extractId)(i) : l.default.getId(),
                timestamp: new Date(),
              },
            ]).length > 500 && d.shift();
          }
        },
        TRACK_TRIGGER: function (e) {
          let {
            experimentId: r,
            descriptor: t,
            exposureType: n,
            excluded: i,
            location: o,
            previouslyTracked: l,
          } = e;
          if (!!s.default.isDeveloper)
            h &&
              (u = [
                ...u,
                {
                  key: (0, a.v4)(),
                  experimentId: r,
                  descriptor: t,
                  exposureType: n,
                  excluded: i,
                  location: o,
                  previouslyTracked: l,
                  timestamp: new Date(),
                },
              ]).length > 500 &&
              u.shift();
        },
        SET_TRACK_TRIGGERS: function (e) {
          let { enabled: r } = e;
          h = r;
        },
        ANALYTICS_LOG_CLEAR: function () {
          (d = []), (u = []);
        },
      });
    },
    220462: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          toggle: function () {
            return i;
          },
        });
      var a = t("913144"),
        n = t("676574");
      function i(e, r) {
        let t = "boolean" == typeof r ? r : !n.default.get(e);
        a.default.dispatch({
          type: "DEV_TOOLS_DEV_SETTING_SET",
          toggle: e,
          value: t,
        });
      }
    },
    304207: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return Y;
          },
        }),
        t("424973"),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("759843"),
        s = t("446674"),
        c = t("77078"),
        d = t("594203"),
        u = t("428958"),
        h = t("368694"),
        p = t("461380"),
        m = t("945330"),
        g = t("496657"),
        f = t("664336"),
        y = t("370492"),
        b = t("584369"),
        x = t("676574");
      t("444489");
      var k = t("556857"),
        v = t("224249"),
        C = t("706098"),
        S = t("383925"),
        j = t("21573"),
        T = t("245515"),
        w = t("172248"),
        N = t("811199"),
        E = t("175768"),
        L = t("358344"),
        _ = t("34971"),
        A = t("134034"),
        R = t("79953"),
        P = t("388557"),
        M = t("238161"),
        O = t("20950"),
        I = t("724209"),
        D = t("782340"),
        B = t("34693"),
        G = t("699412");
      function F(e) {
        let { resizableNode: r, onResize: t, onResizeEnd: n } = e,
          i = (0, d.default)({
            minDimension: b.DEVTOOLS_SIDEBAR_MIN_WIDTH,
            resizableDomNodeRef: r,
            onElementResize: t,
            onElementResizeEnd: n,
            orientation: d.ResizeOrientation.HORIZONTAL_LEFT,
          });
        return (0, a.jsx)("div", { onMouseDown: i, className: B.resizeHandle });
      }
      function H() {
        var e;
        let r = n.useMemo(() => {
            let e = [
              {
                id: "analytics",
                name: "Analytics",
                render: () => (0, a.jsx)(v.default, {}),
              },
              {
                id: "triggers",
                name: "Triggers",
                render: () => (0, a.jsx)(O.default, {}),
              },
              {
                id: "stores",
                name: "Stores",
                render: () => (0, a.jsx)(R.default, {}),
              },
              {
                id: "dispatcher",
                name: "Dispatcher",
                render: () => (0, a.jsx)(T.default, {}),
              },
            ];
            return (
              h.default.isDeveloper &&
                e.push({
                  id: "quick_actions",
                  name: "Quick Actions",
                  render: () => (0, a.jsx)(A.default, {}),
                }),
              e.push({
                id: "colors",
                name: "Colors",
                render: () => (0, a.jsx)(S.default, {}),
              }),
              e.push({
                id: "design_toggles",
                name: "Design Toggles",
                render: () => (0, a.jsx)(j.default, {}),
              }),
              e.push({
                id: "overlays",
                name: "Dev Overlays",
                render: () =>
                  (0, a.jsx)(w.default, {
                    devSettingsCategory: x.DevSettingsCategory.OVERLAYS,
                  }),
              }),
              e.push({
                id: "messaging",
                name: "Messaging",
                render: () =>
                  (0, a.jsx)(w.default, {
                    devSettingsCategory: x.DevSettingsCategory.MESSAGING,
                  }),
              }),
              e.push({
                id: "permissions",
                name: "Permissions",
                render: () => (0, a.jsx)(_.default, {}),
              }),
              e.push({
                id: "modals",
                name: "Modals",
                render: () => (0, a.jsx)(E.default, {}),
              }),
              e.push({
                id: "affinity",
                name: "Affinity",
                render: () => (0, a.jsx)(k.default, {}),
              }),
              window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                  id: "trials",
                  name: "Trials",
                  render: () => (0, a.jsx)(M.default, {}),
                }),
                e.push({
                  id: "payments",
                  name: "Payments",
                  render: () => (0, a.jsx)(L.default, {}),
                }),
                e.push({
                  id: "subscriptions",
                  name: "Subscriptions",
                  render: () => (0, a.jsx)(P.default, {}),
                }),
                e.push({
                  id: "billing",
                  name: "Billing",
                  render: () => (0, a.jsx)(C.default, {}),
                })),
              e
            );
          }, []),
          {
            TabBar: t,
            renderSelectedTab: i,
            selectedTabId: o,
          } = (0, I.default)(
            {
              tabs: r,
              initialSelectedTabId:
                null !== (e = b.default.lastOpenTabId) && void 0 !== e
                  ? e
                  : void 0,
              onChangeTab: e => {
                (0, y.updateDevToolsSettings)({ lastOpenTabId: e });
              },
            },
            [r]
          );
        return (
          (0, u.default)({
            type: l.ImpressionTypes.PANE,
            name: l.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: o },
          }),
          (0, a.jsxs)(N.DevToolsLayerProvider, {
            children: [
              (0, a.jsxs)(f.default, {
                className: G.headerBar,
                toolbar: (0, a.jsx)(f.default.Icon, {
                  icon: m.default,
                  tooltip: D.default.Messages.CLOSE,
                  onClick: y.toggleDisplayDevTools,
                }),
                children: [
                  (0, a.jsx)(f.default.Icon, {
                    icon: g.default,
                    tooltip: "DevTools",
                  }),
                  (0, a.jsx)(f.default.Title, { children: "DevTools" }),
                ],
              }),
              (0, a.jsx)(t, {}),
              i(),
              (0, a.jsx)(N.DevToolsLayerContainer, {
                className: B.layerContainer,
              }),
            ],
          })
        );
      }
      function U() {
        let e = n.useRef(null),
          r = (0, s.useStateFromStores)(
            [b.default],
            () => b.default.sidebarWidth
          ),
          [t, i] = n.useState(null),
          l = n.useCallback(
            e => (0, y.updateDevToolsSettings)({ sidebarWidth: e }),
            []
          );
        return (n.useEffect(() => {
          null === t && null !== r && i(r);
        }, [r, t]),
        null === t)
          ? null
          : (0, a.jsxs)("div", {
              ref: e,
              className: o(B.container),
              style: { minWidth: b.DEVTOOLS_SIDEBAR_MIN_WIDTH, width: t },
              children: [
                (0, a.jsx)(F, {
                  resizableNode: e,
                  onResize: i,
                  onResizeEnd: l,
                }),
                (0, a.jsx)("div", {
                  className: B.sidebarContent,
                  children: (0, a.jsx)(H, {}),
                }),
              ],
            });
      }
      function z() {
        let e = (0, s.useStateFromStores)(
          [b.default],
          () => b.default.displayTools
        );
        return e
          ? (0, a.jsx)("div", {
              className: o(B.container, B.mobileContainerExpanded),
              children: (0, a.jsx)("div", {
                className: B.sidebarContent,
                children: (0, a.jsx)(H, {}),
              }),
            })
          : (0, a.jsx)("div", {
              className: B.container,
              children: (0, a.jsx)(c.Clickable, {
                onClick: y.toggleDisplayDevTools,
                children: (0, a.jsxs)(f.default, {
                  className: o(G.headerBar, B.mobileHeaderCollapsed),
                  toolbar: (0, a.jsx)(p.default, {
                    direction: p.default.Directions.UP,
                  }),
                  children: [
                    (0, a.jsx)(f.default.Icon, {
                      icon: g.default,
                      tooltip: "DevTools",
                    }),
                    (0, a.jsx)(f.default.Title, { children: "DevTools" }),
                  ],
                }),
              }),
            });
      }
      function Y(e) {
        let { mobile: r } = e;
        return r ? (0, a.jsx)(z, {}) : (0, a.jsx)(U, {});
      }
    },
    444489: function (e, r, t) {
      "use strict";
      t.r(r),
        t("222007"),
        t("37983"),
        t("884691"),
        t("414456"),
        t("77078"),
        t("696316"),
        t("759388"),
        t("456254"),
        t("9074"),
        t("664336"),
        t("50625"),
        t("928063"),
        t("637171"),
        t("724209"),
        t("912970"),
        t("699412");
    },
    556857: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return h;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("446674"),
        i = t("77078"),
        o = t("843823"),
        l = t("697218"),
        s = t("637171"),
        c = t("661535"),
        d = t("699412");
      let u = [
        {
          key: "user",
          cellClassName: c.userCell,
          render(e) {
            var r;
            let { user: t, key: a } = e;
            return null !== (r = null == t ? void 0 : t.username) &&
              void 0 !== r
              ? r
              : a;
          },
        },
        {
          key: "affinity",
          cellClassName: c.affinityCell,
          render(e) {
            let { affinity: r } = e;
            return "".concat(r);
          },
        },
      ];
      function h() {
        let e = (0, n.useStateFromStoresArray)([o.default, l.default], () =>
          o.default.getUserAffinities().map(e => {
            let { user_id: r, affinity: t } = e;
            return { user: l.default.getUser(r), affinity: t, key: r };
          })
        );
        return 0 === e.length
          ? null
          : (0, a.jsx)(i.ScrollerThin, {
              children: (0, a.jsx)(s.default, {
                className: d.panel,
                columns: u,
                rowClassName: c.row,
                data: e,
              }),
            });
      }
    },
    224249: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return A;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("866227"),
        s = t.n(l),
        c = t("446674"),
        d = t("77078"),
        u = t("145079"),
        h = t("697218"),
        p = t("756609"),
        m = t("228220"),
        g = t("664336"),
        f = t("888400"),
        y = t("398570"),
        b = t("370492"),
        x = t("332814"),
        k = t("928063"),
        v = t("637171"),
        C = t("724209"),
        S = t("782340"),
        j = t("731343"),
        T = t("699412");
      let w = [
        {
          key: "event",
          cellClassName: j.eventColumn,
          render(e) {
            let { event: r } = e;
            return r;
          },
        },
        {
          key: "location",
          cellClassName: j.locationColumn,
          render(e) {
            let { properties: r } = e;
            return r.location;
          },
        },
      ];
      function N(e) {
        let { children: r } = e;
        return (0, a.jsx)(d.ScrollerThin, {
          className: j.customPropertiesContainer,
          children: (0, a.jsx)("dl", { children: r }),
        });
      }
      function E(e) {
        let { name: r, children: t } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("dt", {
              className: j.customPropertiesName,
              children: r,
            }),
            (0, a.jsx)("dd", {
              className: j.customPropertiesValue,
              children: t,
            }),
          ],
        });
      }
      let L = [
          {
            id: "details",
            name: "Details",
            render: e => {
              let {
                  loggedEvent: {
                    event: r,
                    properties: t,
                    timestamp: n,
                    fingerprint: i,
                  },
                } = e,
                l = h.default.getUser(i),
                c = s(n);
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(g.default, {
                    className: o(T.headerBar, j.subPanelHeaderBar),
                    children: [
                      (0, a.jsx)(g.default.Icon, {
                        icon: p.default,
                        tooltip: r,
                      }),
                      (0, a.jsx)(g.default.Title, { children: r }),
                    ],
                  }),
                  (0, a.jsxs)(x.Properties, {
                    className: j.commonProperties,
                    children: [
                      (0, a.jsx)(x.Property, {
                        name: "Timestamp (local)",
                        children: (0, a.jsx)("time", {
                          dateTime: n.toISOString(),
                          title: (0, f.dateFormat)(c, "LLLL"),
                          children: (0, f.calendarFormat)(c),
                        }),
                      }),
                      null != l &&
                        (0, a.jsx)(x.Property, {
                          name: "User",
                          children: (0, a.jsx)(u.default, { user: l }),
                        }),
                      (0, a.jsx)(x.Property, {
                        name: "Fingerprint",
                        children: (0, a.jsx)("code", { children: i }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(N, {
                    children: Object.entries(t).map(e => {
                      let [r, t] = e;
                      return (0, a.jsx)(
                        E,
                        {
                          name: "".concat(r, ":"),
                          children:
                            null != t
                              ? (0, a.jsx)("code", {
                                  children: JSON.stringify(t),
                                })
                              : (0, a.jsx)("code", {
                                  className: j.emptyProperty,
                                  children: "null",
                                }),
                        },
                        r
                      );
                    }),
                  }),
                ],
              });
            },
          },
        ],
        _ = {
          events: {
            label: "Events",
            filter: e =>
              Object.entries(_)
                .filter(e => {
                  let [r] = e;
                  return "events" !== r;
                })
                .map(r => {
                  let [t, { filter: a }] = r;
                  return !a(e);
                })
                .every(e => e),
          },
          experiments: {
            label: "Experiments",
            filter: e =>
              [
                "experiment_user_triggered",
                "experiment_guild_triggered",
              ].includes(e.event),
          },
          impressions: {
            label: "Impressions",
            filter: e => e.event.startsWith("impression_"),
          },
          networkActions: {
            label: "Network",
            filter: e => e.event.startsWith("network_action"),
          },
        };
      function A() {
        let e = n.useRef(null),
          r = (0, c.useStateFromStores)(
            [y.default],
            () => y.default.loggedEvents
          ),
          [t, i] = n.useState(Object.keys(_)),
          l = r.filter(e => {
            for (let r of t) if (_[r].filter(e)) return !0;
            return !1;
          }),
          [s, u] = n.useState(void 0),
          h = l.find(e => e.key === s),
          { TabBar: p, renderSelectedTab: g } = (0, C.default)({ tabs: L }, []);
        return (0, a.jsxs)("div", {
          ref: e,
          className: o(T.panel, j.panel),
          children: [
            (0, a.jsxs)("div", {
              className: j.toolbar,
              children: [
                (0, a.jsx)(d.Button, {
                  className: j.toolbarButton,
                  look: d.Button.Looks.BLANK,
                  size: d.Button.Sizes.ICON,
                  onClick: b.clearAnalyticsLog,
                  children: (0, a.jsx)("span", {
                    title: S.default.Messages.CLEAR,
                    children: (0, a.jsx)(m.default, {
                      "aria-label": S.default.Messages.CLEAR,
                    }),
                  }),
                }),
                (0, a.jsx)("div", { className: j.toolbarDivider }),
                (0, a.jsx)("div", {
                  className: j.filters,
                  children: Object.entries(_).map(e => {
                    let [r, n] = e;
                    return (0, a.jsx)(
                      d.Clickable,
                      {
                        className: o(j.filter, t.includes(r) && j.activeFilter),
                        onClick: () => {
                          var e;
                          return (
                            (e = r),
                            void i(r =>
                              r.includes(e) ? r.filter(r => r !== e) : [...r, e]
                            )
                          );
                        },
                        children: n.label,
                      },
                      r
                    );
                  }),
                }),
              ],
            }),
            (0, a.jsx)(d.ScrollerThin, {
              className: j.tableContainer,
              children: (0, a.jsx)(v.default, {
                columns: w,
                data: l,
                selectedRowKey: s,
                onClickRow: u,
              }),
            }),
            null != h &&
              (0, a.jsxs)(k.default, {
                className: j.subPanel,
                minHeight: 100,
                initialHeight:
                  null != e.current ? e.current.clientHeight / 2 : 300,
                children: [(0, a.jsx)(p, {}), g({ loggedEvent: h })],
              }),
          ],
        });
      }
    },
    706098: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return o;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("358344"),
        i = t("388557");
      function o() {
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(n.default, {}), (0, a.jsx)(i.default, {})],
        });
      }
    },
    383925: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return P;
          },
        });
      var a = t("926607");
      t("222007"), t("808653"), t("781738"), t("881410"), t("424973");
      var n = t("37983"),
        i = t("884691"),
        o = t("10371"),
        l = t.n(o),
        s = t("675576"),
        c = t.n(s),
        d = t("917351"),
        u = t.n(d),
        h = t("703809"),
        p = t("95410"),
        m = t("497991"),
        g = t("928114"),
        f = t("111940"),
        y = t("133198"),
        b = t("77078"),
        x = t("841098"),
        k = t("810567"),
        v = t("945330"),
        C = t("811199"),
        S = t("699412");
      function j() {
        let e = (0, a._)([
          "\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ",
          "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  ",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        let e = (0, a._)([
          "\n      export const rawPalette = {\n        ",
          "\n      } as const;\n    ",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      let w = {
          ...y.semanticColorTokens,
          ...m.componentColorTokens,
          ...g.gradients,
        },
        N = { ...A(y.semanticColorTokens), ...A(m.componentColorTokens) },
        E = [
          "100",
          "130",
          "160",
          "200",
          "230",
          "260",
          "300",
          "330",
          "345",
          "360",
          "400",
          "430",
          "460",
          "500",
          "530",
          "560",
          "600",
          "630",
          "645",
          "660",
          "700",
          "730",
          "760",
          "800",
          "830",
          "860",
          "900",
        ];
      function L(e) {
        var r;
        let t =
            "string" == typeof e
              ? 1
              : null !== (r = e.opacity) && void 0 !== r
                ? r
                : 1,
          a = "string" == typeof e ? e : e.color;
        return { color: a, opacity: t };
      }
      function _(e) {
        return "name" in e;
      }
      function A(e) {
        let r = {};
        return (
          Object.keys(e).forEach(t => {
            let a = e[t];
            if ("name" in a)
              a = (function e(r) {
                let t = w[r.name];
                return "name" in t ? e(t) : t;
              })(a);
            r[t] = {
              light: L(a.light),
              dark: L(a.dark),
              darker: L(null != a.darker ? a.darker : a.dark),
              midnight: L(null != a.midnight ? a.midnight : a.dark),
            };
          }),
          r
        );
      }
      function R(e, r) {
        let [t, a] = i.useState(() => {
          let t = p.Storage.get(e);
          return null != t ? t : r;
        });
        return (
          i.useEffect(() => {
            p.Storage.set(e, t);
          }, [e, t]),
          [t, a]
        );
      }
      function P() {
        let e = (0, x.useTheme)(),
          [{ rawPalette: r, semanticTokens: t }, a, o, s, d, p] = (function (
            e,
            r
          ) {
            let [t, a] = R("".concat(e, "-states"), [r]),
              [n, o] = R("".concat(e, "-index"), 0),
              l = t[n],
              s = i.useCallback(
                e => {
                  let r = [e, ...t].slice(0, 20);
                  a(r), o(0);
                },
                [o, a, t]
              ),
              c = i.useCallback(() => {
                o(Math.min(t.length - 1, n + 1));
              }, [n, o, t.length]),
              d = i.useCallback(() => {
                o(Math.max(0, n - 1));
              }, [n, o]),
              u = n < t.length - 1,
              h = n > 0;
            return [l, s, c, d, u, h];
          })("color-override-03-03-23", {
            rawPalette: f.rawPalette,
            semanticTokens: N,
          }),
          [m, g] = i.useState(""),
          [y, w] = i.useState({}),
          [L, _] = i.useState({}),
          A = i.useMemo(() => {
            let e = Object.keys(r);
            return e.reduce((e, r) => [...e, { value: r, label: r }], []);
          }, [r]),
          P = i.useCallback(
            (e, n, i, o) => {
              let l = u.cloneDeep(t);
              (l[e][n] = { color: i, opacity: o }),
                a({ rawPalette: r, semanticTokens: l });
            },
            [t, r, a]
          ),
          M = i.useMemo(() => {
            let a = Object.keys(t).map(r => {
                let a = t[r],
                  { color: n, opacity: i } = a[e];
                return "--"
                  .concat(r, ": hsl(var(--")
                  .concat(n.replace(".", "-"), "-hsl) / ")
                  .concat(i, ");");
              }),
              n = Object.keys(r).flatMap(e => {
                let { hex: t } = r[e],
                  {
                    h: a,
                    s: n,
                    l: i,
                  } = (function (e) {
                    let [r, t, a] =
                        "transparent" === e ? [0, 0, 0] : l(e).hsl(),
                      n = isNaN(r) ? 0 : u.round(r, 1),
                      i = u.round(100 * a, 1),
                      o = u.round(100 * t, 1);
                    return { h: n, s: o, l: i };
                  })(t),
                  o = u.kebabCase(e);
                return [
                  "--"
                    .concat(o, "-hsl: ")
                    .concat(a, " calc(var(--saturation-factor, 1) * ")
                    .concat(n, "%) ")
                    .concat(i, "% !important;"),
                  "--"
                    .concat(o, ": hsl(var(--")
                    .concat(o, "-hsl)) !important;"),
                ];
              });
            return "\n      .theme-"
              .concat(e, " {\n        ")
              .concat(a.join("\n"), "\n\n        ")
              .concat(
                Object.keys(y)
                  .filter(e => y[e])
                  .map(e => "--".concat(e, ": magenta !important;"))
                  .join("\n"),
                "\n\n        "
              )
              .concat(
                Object.keys(L)
                  .filter(e => L[e])
                  .map(e => "--".concat(e, ": magenta !important;"))
                  .join("\n"),
                "\n      }\n\n      html {\n        "
              )
              .concat(n.join("\n"), "\n      }\n    ");
          }, [e, t, r, y, L]),
          O = i.useCallback(e => {
            let r = "",
              t = "",
              a = !1;
            return c(
              j(),
              Object.keys(e)
                .map(n => {
                  (t = n.split("-")[0]) !== r ? ((r = t), (a = !0)) : (a = !1);
                  let i = e[n],
                    o = i.light,
                    l = i.dark,
                    s = i.midnight,
                    c = [
                      ["dark", l],
                      ["light", o],
                    ];
                  (s.opacity !== l.opacity || s.color !== l.color) &&
                    c.push(["midnight", s]);
                  let d = c
                      .map(e => {
                        let [r, { color: t, opacity: a }] = e;
                        return 1 === a
                          ? "".concat(r, ': "').concat(t, '"')
                          : ""
                              .concat(r, ': { color: "')
                              .concat(t, '", opacity: ')
                              .concat(a, " }");
                      })
                      .join(",\n"),
                    u = '"'.concat(n, '": themedToken({ ').concat(d, " })");
                  return "".concat(a ? "\n" : "").concat(u);
                })
                .join(",\n")
            );
          }, []),
          I = i.useCallback(
            e =>
              c(
                T(),
                Object.keys(e).map(r =>
                  '"'.concat(r, '": {hex: "').concat(e[r].hex, '"}')
                )
              ),
            []
          ),
          D = i.useCallback(
            e => {
              let r = {};
              Object.keys(e).forEach(t => {
                Object.keys(e[t]).map(a => {
                  let n = [...E];
                  "primary" !== t && (n = n.filter(e => "645" !== e)),
                    (r["".concat(t, ".").concat(n[+a])] = { hex: e[t][a] });
                });
              }),
                a({ rawPalette: r, semanticTokens: t });
            },
            [t, a]
          );
        return (0, n.jsxs)("div", {
          className: S.panel,
          style: { display: "flex", flexDirection: "column" },
          children: [
            (0, n.jsxs)("div", {
              className: S.toolbar,
              style: { flex: "0 0 34px", padding: "0 4px" },
              children: [
                (0, n.jsxs)("div", {
                  className: S.toolbarGroup,
                  children: [
                    (0, n.jsx)(b.Button, {
                      onClick: o,
                      disabled: !d,
                      size: b.Button.Sizes.MIN,
                      children: "Undo",
                    }),
                    (0, n.jsx)(b.Button, {
                      onClick: s,
                      disabled: !p,
                      size: b.Button.Sizes.MIN,
                      children: "Redo",
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: S.toolbarDivider }),
                (0, n.jsxs)("div", {
                  className: S.toolbarGroup,
                  children: [
                    (0, n.jsx)("span", {
                      className: S.toolbarGroupLabel,
                      children: "Raw",
                    }),
                    (0, n.jsx)(b.Button, {
                      size: b.Button.Sizes.MIN,
                      onClick: () => {
                        navigator.clipboard.readText().then(e => {
                          D(JSON.parse(e));
                        });
                      },
                      children: "Import",
                    }),
                    (0, n.jsx)(b.Button, {
                      size: b.Button.Sizes.MIN,
                      onClick: () => {
                        navigator.clipboard.writeText(I(r));
                      },
                      children: "Export",
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: S.toolbarDivider }),
                (0, n.jsxs)("div", {
                  className: S.toolbarGroup,
                  children: [
                    (0, n.jsx)("span", {
                      className: S.toolbarGroupLabel,
                      children: "Semantic",
                    }),
                    (0, n.jsx)(b.Button, {
                      size: b.Button.Sizes.MIN,
                      onClick: () => {
                        navigator.clipboard.writeText(O(t));
                      },
                      children: "Export",
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: S.toolbarDivider }),
                (0, n.jsx)("div", {
                  className: S.toolbarGroup,
                  children: (0, n.jsx)(b.Button, {
                    size: b.Button.Sizes.MIN,
                    type: "reset",
                    color: b.Button.Colors.RED,
                    onClick: () => {
                      a({ rawPalette: f.rawPalette, semanticTokens: N });
                    },
                    children: "Reset all",
                  }),
                }),
                (0, n.jsx)("div", { className: S.toolbarDivider }),
                (0, n.jsxs)("div", {
                  className: S.toolbarGroup,
                  style: { flexGrow: 1 },
                  children: [
                    (0, n.jsx)(k.default, {
                      size: k.default.Sizes.SMALL,
                      query: m,
                      onChange: g,
                      onClear: () => g(""),
                      placeholder: "Search tokens",
                      "aria-label": "Search tokens",
                    }),
                    " ",
                  ],
                }),
              ],
            }),
            (0, n.jsx)(b.ScrollerThin, {
              children: (0, n.jsx)("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns:
                    "min-content 1fr 1fr min-content min-content",
                  gap: 8,
                  margin: 8,
                  alignItems: "center",
                },
                children: Object.keys(N)
                  .filter(e => "" === m || e.toLowerCase().includes(m))
                  .map(r => {
                    var a;
                    let o = N[r][e],
                      l = null == t[r] ? { ...o } : t[r][e],
                      s = l.color !== o.color || l.opacity !== o.opacity;
                    return (0, n.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, n.jsx)("div", {
                            onMouseEnter: () => {
                              _(e => ({ ...e, [r]: !0 }));
                            },
                            onMouseLeave: () => {
                              _(e => ({ ...e, [r]: !1 }));
                            },
                            children: (0, n.jsx)(b.Checkbox, {
                              value: y[r],
                              onChange: () => {
                                w(e => ({ ...e, [r]: !e[r] }));
                              },
                            }),
                          }),
                          (0, n.jsx)("span", { children: r }),
                          (0, n.jsx)(b.SearchableSelect, {
                            value: l.color,
                            options: A,
                            onChange: t => {
                              P(r, e, t, l.opacity);
                            },
                            renderOptionPrefix: r =>
                              null == r
                                ? null
                                : (0, n.jsx)("div", {
                                    style: {
                                      width: 16,
                                      height: 16,
                                      borderRadius: "50%",
                                      backgroundColor: "var(--".concat(
                                        r.value.replace(".", "-"),
                                        ")"
                                      ),
                                      border: "1px solid ".concat(
                                        "dark" === e ? "white" : "black"
                                      ),
                                    },
                                  }),
                            popoutLayerContext: C.devToolsLayerContext,
                          }),
                          (0, n.jsx)(b.TextInput, {
                            type: "number",
                            style: { width: "4em" },
                            value:
                              null === (a = l.opacity) || void 0 === a
                                ? void 0
                                : a.toString(),
                            onChange: t => {
                              "" !== t && P(r, e, l.color, parseFloat(t));
                            },
                          }),
                          (0, n.jsx)(b.Clickable, {
                            style: s
                              ? {}
                              : { opacity: 0, pointerEvents: "none" },
                            onClick: () => {
                              var t;
                              s &&
                                P(
                                  r,
                                  e,
                                  o.color,
                                  null !== (t = o.opacity) && void 0 !== t
                                    ? t
                                    : 1
                                );
                            },
                            children: (0, n.jsx)(v.default, {
                              width: 16,
                              height: 16,
                            }),
                          }),
                        ],
                      },
                      r
                    );
                  }),
              }),
            }),
            (0, n.jsx)(h.Helmet, {
              children: (0, n.jsx)("style", {
                id: "devtools-color-overrides",
                children: M,
              }),
            }),
          ],
        });
      }
    },
    21573: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return d;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("446674"),
        o = t("77078"),
        l = t("508815"),
        s = t("916523"),
        c = t("722109");
      function d() {
        let e = (0, i.useStateFromStores)(
            [s.default],
            () => s.default.allWithDescriptions(),
            [],
            i.statesWillNeverBeEqual
          ),
          r = n.useMemo(
            () =>
              e.map(e => {
                let [r, t, n] = e;
                return (0, a.jsx)(
                  o.FormItem,
                  {
                    children: (0, a.jsx)(o.FormSwitch, {
                      value: t,
                      note: r,
                      onChange: e => (0, l.toggle)(r, e),
                      hideBorder: !0,
                      children: n,
                    }),
                  },
                  r
                );
              }),
            [e]
          );
        return (0, a.jsxs)("div", {
          className: c.container,
          children: [
            (0, a.jsx)(o.Button, {
              onClick: l.clearAll,
              className: c.button,
              fullWidth: !0,
              children: "Clear all",
            }),
            (0, a.jsx)("div", { className: c.rowsContainer, children: r }),
          ],
        });
      }
    },
    245515: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return E;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("866227"),
        s = t.n(l),
        c = t("77078"),
        d = t("913144"),
        u = t("561703"),
        h = t("315585"),
        p = t("664336"),
        m = t("888400"),
        g = t("50625"),
        f = t("332814"),
        y = t("928063"),
        b = t("637171"),
        x = t("724209"),
        k = t("183698"),
        v = t("699412");
      function C(e) {
        return parseFloat(e.toFixed(3));
      }
      let S = [
        {
          key: "store",
          cellClassName: k.actionColumn,
          render(e) {
            let { trace: r } = e;
            return r.name;
          },
        },
        {
          key: "time",
          cellClassName: k.totalTimeColumn,
          render(e) {
            let { trace: r } = e;
            return "".concat(C(r.time), " ms");
          },
        },
      ];
      function j(e) {
        let { actionLog: r } = e,
          t = n.useMemo(
            () => r.traces.map(e => ({ key: e.name, trace: e })),
            [r]
          );
        return (0, a.jsx)(c.ScrollerThin, {
          children: (0, a.jsx)(b.default, { columns: S, data: t }),
        });
      }
      let T = [
        {
          id: "action",
          name: "Action",
          render(e) {
            var r;
            let { actionLog: t } = e,
              n = s(t.createdAt);
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(f.Properties, {
                  className: k.actionProperties,
                  children: [
                    (0, a.jsx)(f.Property, {
                      name: "Created at",
                      children: (0, a.jsx)("time", {
                        dateTime:
                          null === (r = t.createdAt) || void 0 === r
                            ? void 0
                            : r.toISOString(),
                        title: (0, m.dateFormat)(n, "LLLL"),
                        children: (0, m.calendarFormat)(n),
                      }),
                    }),
                    (0, a.jsxs)(f.Property, {
                      name: "Total Time",
                      children: [C(t.totalTime), " ms"],
                    }),
                  ],
                }),
                (0, a.jsx)(c.ScrollerThin, {
                  className: k.inspectorContainer,
                  children: (0, a.jsx)(g.default, { data: t.action }),
                }),
              ],
            });
          },
        },
        {
          id: "traces",
          name: "Store Handlers",
          render(e) {
            let { actionLog: r } = e;
            return (0, a.jsx)(j, { actionLog: r });
          },
        },
      ];
      function w(e) {
        let { actionLog: r, initialHeight: t } = e,
          i = n.useMemo(
            () =>
              r.error
                ? [
                    ...T,
                    {
                      id: "error",
                      name: (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(h.default, { className: k.errorIcon }),
                          "Error",
                        ],
                      }),
                      render(e) {
                        let { actionLog: r } = e;
                        return (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("div", {
                              className: o(k.errorToolbar, v.toolbar),
                              children: (0, a.jsx)("div", {
                                className: v.toolbarGroup,
                                children: (0, a.jsx)(c.Button, {
                                  className: v.toolbarButton,
                                  size: c.Button.Sizes.MIN,
                                  onClick: () => console.error(r.error),
                                  children: "Log to Console",
                                }),
                              }),
                            }),
                            (0, a.jsx)(c.ScrollerThin, {
                              className: k.inspectorContainer,
                              children: (0, a.jsx)(g.default, {
                                data: r.error,
                              }),
                            }),
                          ],
                        });
                      },
                    },
                  ]
                : T,
            [r]
          ),
          { TabBar: l, renderSelectedTab: s } = (0, x.default)({ tabs: i }, [
            i,
          ]);
        return (0, a.jsxs)(y.default, {
          className: k.subPanel,
          minHeight: 100,
          initialHeight: t,
          children: [
            (0, a.jsx)(l, {}),
            (0, a.jsxs)(p.default, {
              className: o(v.headerBar, k.subPanelHeaderBar),
              children: [
                (0, a.jsx)(p.default.Icon, {
                  icon: u.default,
                  tooltip: r.name,
                }),
                (0, a.jsx)(p.default.Title, { children: r.name }),
              ],
            }),
            s({ actionLog: r }),
          ],
        });
      }
      let N = [
        {
          key: "action",
          cellClassName: k.actionColumn,
          render(e) {
            let { actionLog: r } = e;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                r.error && (0, a.jsx)(h.default, { className: k.errorIcon }),
                r.name,
              ],
            });
          },
        },
        {
          key: "total time",
          cellClassName: k.totalTimeColumn,
          render(e) {
            let { actionLog: r } = e;
            return "".concat(C(r.totalTime), " ms");
          },
        },
      ];
      function E() {
        let e = n.useRef(null),
          r = (function (e) {
            let [r, t] = n.useState([...e.logs]),
              a = n.useCallback(() => t([...e.logs]), [e]);
            return (
              n.useEffect(
                () => (
                  e.on("log", a),
                  () => {
                    e.off("log", a);
                  }
                ),
                [e, a]
              ),
              r
            );
          })(d.default.actionLogger),
          t = n.useMemo(
            () => r.map(e => ({ key: e.id.toString(), actionLog: e })),
            [r]
          ),
          [i, l] = n.useState(),
          s = r.find(e => e.id === i);
        return (0, a.jsxs)("div", {
          ref: e,
          className: o(v.panel, k.panel),
          children: [
            (0, a.jsx)(c.ScrollerThin, {
              className: k.tableContainer,
              children: (0, a.jsx)(b.default, {
                columns: N,
                data: t,
                selectedRowKey: null == i ? void 0 : i.toString(),
                onClickRow: e => l(Number.parseInt(e, 10)),
              }),
            }),
            null != s &&
              (0, a.jsx)(w, {
                actionLog: s,
                initialHeight:
                  null != e.current ? e.current.clientHeight / 2 : 300,
              }),
          ],
        });
      }
    },
    172248: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return p;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("446674"),
        s = t("77078"),
        c = t("220462"),
        d = t("676574"),
        u = t("89447"),
        h = t("699412");
      function p(e) {
        let { devSettingsCategory: r } = e,
          t = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.allByCategory(r),
            [r],
            l.statesWillNeverBeEqual
          ),
          i = n.useMemo(
            () =>
              t.map(e => {
                let [r, t, { label: n }] = e;
                return (0, a.jsx)(
                  s.FormSwitch,
                  {
                    value: t,
                    onChange: e => (0, c.toggle)(r, e),
                    hideBorder: !0,
                    className: u.switch,
                    children: n,
                  },
                  r
                );
              }),
            [t]
          );
        return (0, a.jsx)("div", {
          className: o(h.panel, u.panel),
          children: i,
        });
      }
    },
    50625: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return g;
          },
        }),
        t("222007");
      var a = t("37983");
      t("884691");
      var n = t("420117"),
        i = t("669491"),
        o = t("841098"),
        l = t("505684"),
        s = t("49111"),
        c = t("699412");
      let d = {
        base00: i.default.colors.BACKGROUND_SECONDARY.css,
        base03: i.default.colors.TEXT_WARNING.css,
        base07: i.default.colors.TEXT_NORMAL.css,
        base08: i.default.colors.TEXT_MUTED.css,
        base09: i.default.colors.TEXT_POSITIVE.css,
        base0B: i.default.colors.TEXT_WARNING.css,
        base0D: i.default.colors.TEXT_BRAND.css,
      };
      function u(e) {
        let r = {};
        for (let [t, a] of Object.entries(e)) r[t] = a;
        return r;
      }
      let h = u(d),
        p = u(d);
      function m(e) {
        return s.TOKEN_REGEX.test(e)
          ? (0, a.jsx)(l.default, {
              type: l.default.Types.TEXT,
              children: () => (0, a.jsx)(a.Fragment, { children: e }),
            })
          : e;
      }
      function g(e) {
        let { data: r } = e,
          t = (0, o.default)();
        return (0, a.jsx)("div", {
          className: c.inspectorWrapper,
          children: (0, a.jsx)(n.JSONTree, {
            data: r,
            theme: "light" === t ? p : h,
            invertTheme: !1,
            valueRenderer: m,
          }),
        });
      }
    },
    811199: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          DevToolsLayerContainer: function () {
            return s;
          },
          DevToolsLayerProvider: function () {
            return c;
          },
          devToolsLayerContext: function () {
            return d;
          },
        });
      var a = t("77078");
      let {
          Layer: n,
          LayerContainer: i,
          LayerProvider: o,
          layerContext: l,
        } = (0, a.createLayer)("DevTools"),
        s = i,
        c = o,
        d = l;
    },
    175768: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return u;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("77078"),
        s = t("811199"),
        c = t("699412"),
        d = t("961295");
      function u() {
        let e = {
            BOGOAnnouncementModal: async () => {
              let { default: e } = await t
                .el("981125")
                .then(t.bind(t, "981125"));
              return r => (0, a.jsx)(e, { renderModalProps: r });
            },
          },
          r = Object.keys(e).map(e => ({ label: e, value: e })),
          [i, u] = n.useState(r[0].value);
        return (0, a.jsx)(l.ScrollerThin, {
          className: o(c.panel),
          children: (0, a.jsx)("div", {
            className: d.panelInner,
            children: (0, a.jsxs)("section", {
              className: d.section,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-md/semibold",
                  children: "Open a Modal",
                }),
                (0, a.jsxs)("div", {
                  className: d.inputRow,
                  children: [
                    (0, a.jsx)(l.Select, {
                      className: d.input,
                      options: r,
                      isSelected: e => i === e,
                      placeholder: "Trial ID",
                      serialize: e => String(e),
                      select: e => u(e),
                      popoutLayerContext: s.devToolsLayerContext,
                    }),
                    (0, a.jsx)(l.Button, {
                      onClick: () => {
                        (0, l.openModalLazy)(e[i]);
                      },
                      children: "Open",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    358344: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return y;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("65597"),
        s = t("872717"),
        c = t("77078"),
        d = t("850068"),
        u = t("364735"),
        h = t("357957"),
        p = t("811199"),
        m = t("699412"),
        g = t("961295");
      let f = [
        { label: "VISA", value: "pm_card_us" },
        { label: "Mastercard", value: "pm_card_mastercard" },
        { label: "Canadian Visa", value: "pm_card_ca" },
        { label: "Mexican Visa", value: "pm_card_mx" },
        { label: "German Visa", value: "pm_card_de" },
        { label: "Brazilian Visa", value: "pm_card_br" },
        { label: "UK Visa", value: "pm_card_gb" },
        { label: "Japanese Visa", value: "pm_card_jp" },
        { label: "Malaysia Visa", value: "pm_card_my" },
        { label: "Polish Visa", value: "pm_card_pl" },
      ];
      function y() {
        let [e, r] = n.useState("pm_card_us"),
          t = (0, l.useStateFromStores)(
            [h.default],
            () => h.default.paymentSources
          ),
          i = Object.values(t),
          u = async () => {
            let r = e;
            "" === r && (r = "pm_card_us"),
              await s.HTTP.post({
                url: "/debug/payment-source",
                body: { token: r },
              }),
              await (0, d.fetchPaymentSources)();
          },
          y = async () => {
            await s.HTTP.del("/debug/payment-source"),
              await (0, d.fetchPaymentSources)();
          };
        return (
          n.useEffect(() => {
            (0, d.fetchPaymentSources)();
          }, []),
          (0, a.jsx)(c.ScrollerThin, {
            className: o(m.panel),
            children: (0, a.jsxs)("div", {
              className: g.panelInner,
              children: [
                (0, a.jsxs)(c.Text, {
                  style: { marginBottom: "16px" },
                  variant: "text-lg/bold",
                  children: [" ", "Manage Payment Sources", " "],
                }),
                (0, a.jsxs)("div", {
                  className: g.buttons,
                  children: [
                    (0, a.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: " Card Type ",
                    }),
                    (0, a.jsx)(c.Select, {
                      serialize: e => e,
                      isSelected: r => r === e,
                      options: f,
                      select: r,
                      popoutLayerContext: p.devToolsLayerContext,
                    }),
                    (0, a.jsx)(c.Button, {
                      size: c.Button.Sizes.SMALL,
                      onClick: u,
                      children: "Create Stripe Credit Card",
                    }),
                    i.length > 0 &&
                      (0, a.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: y,
                        children: "Delete All Payment Sources",
                      }),
                  ],
                }),
                (0, a.jsx)(c.Text, {
                  style: { marginTop: "16px", marginBottom: "16px" },
                  variant: "text-md/normal",
                  children: "Existing Payment Sources",
                }),
                i.map(e => (0, a.jsx)(b, { paymentSource: e }, e.id)),
              ],
            }),
          })
        );
      }
      function b(e) {
        let { paymentSource: r } = e;
        return (0, a.jsxs)("div", {
          className: g.inputRow,
          children: [
            (0, a.jsx)(u.default, { locale: "en-US", paymentSource: r }, r.id),
            (0, a.jsx)("img", {
              alt: r.country,
              style: { marginRight: 5, height: 25 },
              src: k(r.country),
            }),
          ],
        });
      }
      let x = ["AN", "MI", "TP"],
        k = e => {
          if (null == e) return "";
          if (x.includes(e))
            return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg";
          let r = e
            .toUpperCase()
            .split("")
            .map(e => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
          return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/".concat(
            r,
            ".svg"
          );
        };
    },
    34971: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return C;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("414456"),
        i = t.n(n),
        o = t("316693"),
        l = t("446674"),
        s = t("77078"),
        c = t("679653"),
        d = t("42203"),
        u = t("305961"),
        h = t("957255"),
        p = t("18494"),
        m = t("162771"),
        g = t("36694"),
        f = t("945330"),
        y = t("465305"),
        b = t("606762"),
        x = t("854231"),
        k = t("699412");
      function v(e) {
        let { title: r, can: t } = e,
          n = t ? g.default : f.default,
          o = (0, a.jsx)("div", {
            className: i(x.iconOuter, t ? x.iconCheck : x.iconCross),
            children: (0, a.jsx)(n, { className: x.icon }),
          });
        return (0, a.jsxs)("div", {
          className: x.scope,
          children: [
            o,
            (0, a.jsx)("div", {
              className: x.scopeInner,
              children: (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: r,
              }),
            }),
          ],
        });
      }
      function C() {
        let e = (0, l.useStateFromStores)([p.default], () =>
            p.default.getChannelId()
          ),
          r = (0, l.useStateFromStores)([m.default], () =>
            m.default.getGuildId()
          ),
          t = (0, l.useStateFromStores)([d.default], () =>
            d.default.getChannel(e)
          ),
          n = (0, l.useStateFromStores)([u.default], () =>
            u.default.getGuild(r)
          ),
          g = (0, l.useStateFromStores)([h.default], () =>
            h.default.computePermissions(t)
          ),
          f = (0, l.useStateFromStores)([h.default], () =>
            h.default.computePermissions(n)
          ),
          C = (0, c.default)(t, !0),
          S = null != t ? (0, b.getChannelPermissionSpecMap)(t, !1, !0) : null,
          j = null != n ? y.default.getGuildPermissionSpecMap(n) : null,
          T = Object.values(null != S ? S : {}).map(e => {
            let { title: r, flag: t } = e,
              n = o.has(g, t);
            return (0, a.jsx)(v, { title: r, can: n }, r);
          }),
          w = Object.values(null != j ? j : {}).map(e => {
            let { title: r, flag: t } = e,
              n = o.has(f, t);
            return (0, a.jsx)(v, { title: r, can: n }, r);
          });
        return (0, a.jsx)("div", {
          className: i(k.panel, x.panel),
          children: (0, a.jsxs)("div", {
            className: x.panelInner,
            children: [
              (0, a.jsxs)("section", {
                className: x.section,
                children: [
                  (0, a.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children:
                      null != C
                        ? "Permissions in ".concat(C)
                        : "No channel selected",
                  }),
                  T,
                ],
              }),
              (0, a.jsxs)("section", {
                className: x.section,
                children: [
                  (0, a.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children:
                      null != n
                        ? "Permissions in ".concat(n.name)
                        : "No guild selected",
                  }),
                  w,
                ],
              }),
            ],
          }),
        });
      }
    },
    332814: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          Properties: function () {
            return s;
          },
          Property: function () {
            return c;
          },
          BooleanPropertyValue: function () {
            return d;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("414456"),
        i = t.n(n),
        o = t("77078"),
        l = t("699412");
      function s(e) {
        let { className: r, children: t } = e;
        return (0, a.jsx)("dl", { className: i(l.properties, r), children: t });
      }
      function c(e) {
        let { name: r, children: t } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("dt", { className: l.propertyName, children: r }),
            (0, a.jsx)("dd", { children: t }),
          ],
        });
      }
      function d(e) {
        let { value: r } = e;
        return (0, a.jsx)(o.Checkbox, {
          size: 16,
          value: r,
          shape: o.Checkbox.Shapes.SMALL_BOX,
          displayOnly: !0,
        });
      }
    },
    134034: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return h;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("414456"),
        i = t.n(n),
        o = t("77078"),
        l = t("15408"),
        s = t("484894"),
        c = t("769284"),
        d = t("890957");
      let u = () => {
        t.el("776502")
          .then(t.bind(t, "776502"))
          .then(e => {
            let { openMFAModal: r } = e;
            r(
              {
                ticket: "ticket",
                methods: [
                  { type: "webauthn", challenge: "{}" },
                  { type: "totp", backup_codes_allowed: !0 },
                  { type: "sms" },
                  { type: "password" },
                ],
              },
              console.log,
              console.error
            );
          });
      };
      function h() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: i(c.buttonsContainer, d.marginBottom20),
              children: (0, a.jsx)(s.OverridePremiumTypeDropDown, {
                isDevTools: !0,
              }),
            }),
            (0, a.jsx)("div", {
              className: i(c.buttonsContainer, d.marginBottom20),
              children: (0, a.jsx)(o.Button, {
                onClick: u,
                children: "Launch MFA",
              }),
            }),
            (0, a.jsx)("div", {
              className: i(c.buttonsContainer, d.marginBottom20),
              children: (0, a.jsx)(o.Button, {
                onClick: () => (0, l.default)(),
                children: "Launch Vibing Wumpus",
              }),
            }),
          ],
        });
      }
    },
    79953: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return S;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("446674"),
        s = t("77078"),
        c = t("810567"),
        d = t("547896"),
        u = t("664336"),
        h = t("50625"),
        p = t("928063"),
        m = t("637171"),
        g = t("724209"),
        f = t("699412"),
        y = t("232276");
      function b(e, r) {
        return e.store.getName().localeCompare(r.store.getName());
      }
      function x(e) {
        let { store: r, dataGetter: t } = e,
          [i, o] = n.useState(t(r));
        return (
          n.useEffect(() => {
            let e = () => o(t(r));
            return (
              e(),
              r.addChangeListener(e),
              () => {
                r.removeChangeListener(e);
              }
            );
          }, [r, t]),
          (0, a.jsx)(s.ScrollerThin, {
            className: y.inspectorContainer,
            children: (0, a.jsx)(h.default, { data: i }),
          })
        );
      }
      let k = [
          {
            key: "name",
            cellClassName: y.eventColumn,
            render(e) {
              let { store: r } = e;
              return r.getName();
            },
          },
        ],
        v = [
          {
            id: "local",
            name: "Local Variables",
            render(e) {
              let { store: r } = e;
              return null == r.__getLocalVars
                ? (0, a.jsxs)("div", {
                    className: y.inspectorContainer,
                    children: [
                      "Store is missing ",
                      (0, a.jsx)("code", { children: "__getLocalVars" }),
                      " method.",
                    ],
                  })
                : (0, a.jsx)(x, {
                    store: r,
                    dataGetter: e => e.__getLocalVars(),
                  });
            },
          },
          {
            id: "instance",
            name: "Store Instance",
            render(e) {
              let { store: r } = e;
              return (0, a.jsx)(x, { store: r, dataGetter: e => e });
            },
          },
        ];
      function C(e) {
        let { store: r, initialHeight: t } = e,
          { TabBar: n, renderSelectedTab: i } = (0, g.default)({ tabs: v }, []);
        return (0, a.jsxs)(p.default, {
          className: y.subPanel,
          minHeight: 100,
          initialHeight: t,
          children: [
            (0, a.jsx)(n, {}),
            (0, a.jsxs)(u.default, {
              className: o(f.headerBar, y.subPanelHeaderBar),
              children: [
                (0, a.jsx)(u.default.Icon, {
                  icon: d.default,
                  tooltip: r.getName(),
                }),
                (0, a.jsx)(u.default.Title, { children: r.getName() }),
              ],
            }),
            i({ store: r }),
          ],
        });
      }
      function S() {
        let e = n.useRef(null),
          [r, t] = n.useState(""),
          i = l.Store.getAll(),
          d = n.useMemo(
            () => i.map(e => ({ key: e._dispatchToken, store: e })).sort(b),
            [i]
          ),
          u = d.filter(e =>
            (function (e, r) {
              let { store: t } = e;
              return t.getName().toLowerCase().includes(r.toLowerCase());
            })(e, r)
          ),
          [h, p] = n.useState(),
          g = i.find(e => e._dispatchToken === h);
        return (0, a.jsxs)("div", {
          ref: e,
          className: o(f.panel, y.panel),
          children: [
            (0, a.jsx)("div", {
              className: y.toolbar,
              children: (0, a.jsx)(c.default, {
                className: y.searchBar,
                size: c.default.Sizes.SMALL,
                query: r,
                onChange: t,
                onClear: () => t(""),
                placeholder: "Search stores",
                "aria-label": "Search stores",
              }),
            }),
            (0, a.jsx)(s.ScrollerThin, {
              className: y.tableContainer,
              children: (0, a.jsx)(m.default, {
                columns: k,
                data: u,
                selectedRowKey: h,
                onClickRow: p,
              }),
            }),
            null != g &&
              (0, a.jsx)(C, {
                store: g,
                initialHeight:
                  null != e.current ? e.current.clientHeight / 2 : 300,
              }),
          ],
        });
      }
    },
    928063: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return d;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("594203"),
        s = t("779274");
      function c(e) {
        let { resizableNode: r, minHeight: t, onResize: n } = e,
          i = (0, l.default)({
            minDimension: t,
            resizableDomNodeRef: r,
            onElementResize: n,
            orientation: l.ResizeOrientation.VERTICAL_TOP,
            usePointerEvents: !0,
          });
        return (0, a.jsx)("div", {
          onPointerDown: i,
          className: s.resizeHandle,
        });
      }
      function d(e) {
        let { children: r, className: t, initialHeight: i, minHeight: l } = e,
          d = n.useRef(null),
          [u, h] = n.useState(i);
        return (0, a.jsxs)("div", {
          ref: d,
          className: s.container,
          style: { minHeight: l, height: u },
          children: [
            (0, a.jsx)(c, { resizableNode: d, minHeight: l, onResize: h }),
            (0, a.jsx)("div", {
              className: o(s.subPanelContent, t),
              children: r,
            }),
          ],
        });
      }
    },
    388557: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return k;
          },
        }),
        t("222007"),
        t("70102");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("65597"),
        s = t("872717"),
        c = t("77078"),
        d = t("850068"),
        u = t("521012"),
        h = t("811199"),
        p = t("49111"),
        m = t("699412"),
        g = t("961295");
      let f = [
          { label: "Nitro Monthly", value: "511651880837840896" },
          { label: "Nitro Yearly", value: "511651885459963904" },
          { label: "Nitro Classic Monthly", value: "511651871736201216" },
          { label: "Nitro Classic Yearly", value: "511651876987469824" },
          { label: "Basic Monthly", value: "978380692553465866" },
          { label: "Basic Yearly", value: "1024422698568122368" },
        ],
        y = {
          [p.SubscriptionStatusTypes.UNPAID]: "Unpaid",
          [p.SubscriptionStatusTypes.ACTIVE]: "Active",
          [p.SubscriptionStatusTypes.PAST_DUE]: "Past Due",
          [p.SubscriptionStatusTypes.CANCELED]: "Canceled",
          [p.SubscriptionStatusTypes.ENDED]: "Ended",
          [p.SubscriptionStatusTypes.ACCOUNT_HOLD]: "Account Hold",
          [p.SubscriptionStatusTypes.BILLING_RETRY]: "Billing Retry",
          [p.SubscriptionStatusTypes.PAUSED]: "Paused",
          [p.SubscriptionStatusTypes.PAUSE_PENDING]: "Pause Pending",
        },
        b = [
          { label: "Unpaid", value: p.SubscriptionStatusTypes.UNPAID },
          { label: "Active", value: p.SubscriptionStatusTypes.ACTIVE },
          { label: "Past Due", value: p.SubscriptionStatusTypes.PAST_DUE },
          { label: "Canceled", value: p.SubscriptionStatusTypes.CANCELED },
          { label: "Ended", value: p.SubscriptionStatusTypes.ENDED },
          {
            label: "Account Hold",
            value: p.SubscriptionStatusTypes.ACCOUNT_HOLD,
          },
          {
            label: "Billing Retry",
            value: p.SubscriptionStatusTypes.BILLING_RETRY,
          },
          { label: "Paused", value: p.SubscriptionStatusTypes.PAUSED },
          {
            label: "Pause Pending",
            value: p.SubscriptionStatusTypes.PAUSE_PENDING,
          },
        ],
        x = {
          "511651880837840896": "Nitro Monthly",
          "511651885459963904": "Nitro Yearly",
          "511651871736201216": "Nitro Classic Monthly",
          "511651876987469824": "Nitro Classic Yearly",
          "978380692553465866": "Basic Monthly",
          "1024422698568122368": "Basic Yearly",
        };
      function k() {
        let [e, r] = n.useState("511651880837840896"),
          t = (0, l.useStateFromStores)([u.default], () =>
            u.default.getPremiumSubscription()
          ),
          i = async () => {
            await s.HTTP.post({
              url: "/debug/subscription",
              body: { plan_id: e },
            }),
              await (0, d.fetchSubscriptions)();
          },
          p = async () => {
            await s.HTTP.del("/debug/subscription"),
              await (0, d.fetchSubscriptions)();
          };
        return (0, a.jsx)(c.ScrollerThin, {
          className: o(m.panel),
          children: (0, a.jsxs)("div", {
            className: g.panelInner,
            children: [
              (0, a.jsx)(c.Text, {
                style: { marginBottom: "16px" },
                variant: "text-lg/bold",
                children: "Manage Subscription",
              }),
              (0, a.jsxs)("section", {
                className: g.buttons,
                children: [
                  null == t &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.Text, {
                          variant: "text-md/normal",
                          children: " Subscription Type",
                        }),
                        (0, a.jsx)(c.Select, {
                          serialize: e => e,
                          isSelected: r => r === e,
                          options: f,
                          select: r,
                          popoutLayerContext: h.devToolsLayerContext,
                        }),
                        (0, a.jsx)(c.Button, {
                          size: c.Button.Sizes.SMALL,
                          onClick: i,
                          children: "Create Subscription",
                        }),
                      ],
                    }),
                  (0, a.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    onClick: p,
                    children: "Delete Subscription",
                  }),
                ],
              }),
              null != t && (0, a.jsx)(v, { subscription: t }),
            ],
          }),
        });
      }
      function v(e) {
        let { subscription: r } = e,
          t = e => {
            if ((null == e && (e = r.status), e in y)) return y[e];
            throw Error("Unknown status");
          },
          n = async e => {
            await s.HTTP.patch({
              url: "/debug/subscription",
              body: { subscription_status: e },
            });
          },
          i =
            r.planIdFromItems in
            { "978380692553465866": !0, "1024422698568122368": !0 };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.Text, {
              style: { marginTop: "15px" },
              variant: "text-md/normal",
              children: "Existing Subscription",
            }),
            (0, a.jsxs)("div", {
              className: o(
                g.card,
                i ? g.gradientWrapperTier0 : g.gradientWrapperTier2
              ),
              children: [
                (0, a.jsxs)(c.Text, {
                  variant: "text-md/normal",
                  children: [
                    " Subscription Type: ",
                    (() => {
                      let e = r.planIdFromItems;
                      if (null == e) throw Error("No plan id");
                      if (e in x) return x[e];
                      throw Error("Unknown plan id");
                    })(),
                    " ",
                  ],
                }),
                (0, a.jsxs)(c.Text, {
                  variant: "text-md/normal",
                  children: [" Subscription ID ", r.id, " "],
                }),
                (0, a.jsxs)(c.Text, {
                  style: { marginBottom: "15px" },
                  variant: "text-md/normal",
                  children: ["Subscription Status: ", t()],
                }),
                (0, a.jsx)(c.Select, {
                  serialize: e => t(e),
                  isSelected: e => e === r.status,
                  options: b,
                  select: n,
                  popoutLayerContext: h.devToolsLayerContext,
                }),
              ],
            }),
          ],
        });
      }
    },
    637171: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return d;
          },
        });
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("77078"),
        s = t("158352"),
        c = t("699412");
      function d(e) {
        let {
            columns: r,
            rowComponent: t,
            headerClassName: i,
            stickyHeader: d,
            onClickRow: u,
            selectedRowKey: h,
            ...p
          } = e,
          m = n.useMemo(
            () =>
              r.map(e => ({
                renderHeader: () =>
                  (0, a.jsx)(l.Text, {
                    variant: "text-sm/semibold",
                    children: e.key,
                  }),
                ...e,
              })),
            [r]
          );
        return (0, a.jsx)(s.default, {
          ...p,
          columns: m,
          rowComponent:
            null != t
              ? t
              : e => {
                  let { item: r, children: t } = e,
                    n = o(c.tableRow, { [c.selectedTableRow]: r.key === h });
                  return null != u
                    ? (0, a.jsx)(l.Clickable, {
                        className: n,
                        onClick: () => u(r.key),
                        children: t,
                      })
                    : (0, a.jsx)("div", { className: n, children: t });
                },
          headerClassName: o(c.tableHeader, i),
          stickyHeader: null == d || d,
        });
      }
    },
    238161: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return A;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("872717"),
        s = t("151426"),
        c = t("77078"),
        d = t("456015"),
        u = t("872173"),
        h = t("340412"),
        p = t("413709"),
        m = t("830031"),
        g = t("228220"),
        f = t("306160"),
        y = t("719923"),
        b = t("811199"),
        x = t("49111"),
        k = t("646718"),
        v = t("699412"),
        C = t("961295");
      let S = async () => {
          try {
            let { body: e } = await l.HTTP.get({
              url: x.Endpoints.USER_OFFER_IDS,
            });
            return e;
          } catch (e) {
            return [];
          }
        },
        j = async (e, r) => {
          try {
            await l.HTTP.post({ url: x.Endpoints.CREATE_USER_OFFER(e, r) });
          } catch {
          } finally {
            await (0, d.fetchUserOffer)();
          }
        },
        T = async (e, r) => {
          try {
            await l.HTTP.del({ url: x.Endpoints.DELETE_USER_OFFER(e, r) });
          } catch {
          } finally {
            await (0, d.fetchUserOffer)();
          }
        },
        w = async (e, r) => {
          try {
            await l.HTTP.post({ url: x.Endpoints.UNACK_USER_OFFER(e, r) });
          } catch {
          } finally {
            await (0, d.fetchUserOffer)();
          }
        },
        N = async () => {
          try {
            let { body: e } = await l.HTTP.get({
              url: x.Endpoints.USER_OFFERS,
            });
            return e;
          } catch (e) {
            return { trial: [], discount: [] };
          }
        },
        E = async () => {
          try {
            await l.HTTP.del({ url: x.Endpoints.USER_OFFERS });
          } catch {
          } finally {
            await h.default.forceReset(), await (0, d.fetchUserOffer)();
          }
        };
      function L(e) {
        var r, t, i, l;
        let { offer: s, offerOptions: u, forceRefetch: h } = e,
          [b, x] = n.useState(!1),
          [v, S] = n.useState(!1),
          [j, N] = n.useState(!1),
          [E, L] = n.useState(!1);
        n.useEffect(() => {
          j && L(!0);
          let e = setTimeout(() => {
            L(!1);
          }, 500);
          return () => {
            clearTimeout(e);
          };
        }, [j]);
        let {
            id: _,
            expires_at: A,
            redeemed_at: R,
            trial_id: P,
            subscription_trial: M,
          } = s,
          O =
            null !==
              (t =
                null ===
                  (r = u.find(e => {
                    let { value: r } = e;
                    return r === P;
                  })) || void 0 === r
                  ? void 0
                  : r.label) && void 0 !== t
              ? t
              : "Unknown",
          I = null != A,
          D = null != A && new Date(A).getTime() < Date.now(),
          B =
            (null == M ? void 0 : M.sku_id) ===
            k.PremiumSubscriptionSKUs.TIER_0,
          G = async () => {
            N(!0),
              I ? await w(_, "trial") : await (0, d.acknowledgeUserOffer)(s),
              h(),
              N(!1);
          };
        n.useEffect(() => {
          if (b) {
            let e = setTimeout(() => {
              x(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
          if (v) {
            let e = setTimeout(() => {
              S(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
        }, [b, v]);
        let F = "Active";
        return (
          I && (F = "Acknowledged"),
          D && (F = "Expired"),
          (0, a.jsxs)("div", {
            className: o(
              C.card,
              B ? C.gradientWrapperTier0 : C.gradientWrapperTier2
            ),
            children: [
              (0, a.jsxs)("div", {
                className: o(C.row, C.nameRow),
                children: [
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    color: "always-white",
                    children: O,
                  }),
                  (0, a.jsx)(c.Clickable, {
                    onClick: async () => {
                      N(!0), await T(_, "trial"), h(), N(!1);
                    },
                    children: (0, a.jsx)(g.default, {
                      className: o(C.icon, C.trashIcon),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(c.Clickable, {
                className: o(C.row, C.idRow),
                onClick: () => {
                  (0, f.copy)(_), x(!0);
                },
                children: [
                  (0, a.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: ["Offer: ", _],
                  }),
                  b
                    ? (0, a.jsx)(m.default, {
                        className: o(C.icon, C.noMargin),
                      })
                    : (0, a.jsx)(p.default, { className: C.icon }),
                ],
              }),
              (0, a.jsxs)(c.Clickable, {
                className: o(C.row, C.idRow),
                onClick: () => {
                  (0, f.copy)(P), S(!0);
                },
                children: [
                  (0, a.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: ["Trial: ", P],
                  }),
                  v
                    ? (0, a.jsx)(m.default, {
                        className: o(C.icon, C.noMargin),
                      })
                    : (0, a.jsx)(p.default, { className: C.icon }),
                ],
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsxs)(c.Text, {
                  variant: "eyebrow",
                  color: "always-white",
                  children: [
                    "Trial Length:",
                    " ",
                    (0, y.formatIntervalDuration)({
                      intervalType:
                        null !== (i = null == M ? void 0 : M.interval) &&
                        void 0 !== i
                          ? i
                          : k.SubscriptionIntervalTypes.MONTH,
                      intervalCount:
                        null !== (l = null == M ? void 0 : M.interval_count) &&
                        void 0 !== l
                          ? l
                          : 1,
                      capitalize: !1,
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: C.badgeContainer,
                children: [
                  (0, a.jsx)(c.Clickable, {
                    onClick: G,
                    className: o(C.badge, C.clickable, {
                      [C.acked]: I,
                      [C.expired]: D,
                    }),
                    children: (0, a.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "Acknowledged" === F ? void 0 : "always-white",
                      children: F,
                    }),
                  }),
                  null != R &&
                    (0, a.jsx)("div", {
                      className: o(C.badge, C.badgeBottom, C.redeemed),
                      children: (0, a.jsx)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Redeemed",
                      }),
                    }),
                ],
              }),
              (0, a.jsx)("div", {
                className: o(C.loadingContainer, { [C.isLoading]: j || E }),
                children: (0, a.jsx)(c.Spinner, {}),
              }),
            ],
          })
        );
      }
      function _(e) {
        var r, t;
        let { offer: i, offerOptions: l, forceRefetch: s } = e,
          [u, h] = n.useState(!1),
          [y, b] = n.useState(!1),
          [x, k] = n.useState(!1),
          [v, S] = n.useState(!1);
        n.useEffect(() => {
          x && S(!0);
          let e = setTimeout(() => {
            S(!1);
          }, 500);
          return () => {
            clearTimeout(e);
          };
        }, [x]);
        let {
            id: j,
            expires_at: N,
            applied_at: E,
            discount_id: L,
            discount: _,
          } = i,
          A =
            null !==
              (t =
                null ===
                  (r = l.find(e => {
                    let { value: r } = e;
                    return r === L;
                  })) || void 0 === r
                  ? void 0
                  : r.label) && void 0 !== t
              ? t
              : "Unknown",
          R = null != N,
          P = null != N && new Date(N).getTime() < Date.now(),
          M = async () => {
            k(!0),
              R
                ? await w(j, "discount")
                : await (0, d.acknowledgeUserOffer)(void 0, i),
              s(),
              k(!1);
          };
        n.useEffect(() => {
          if (u) {
            let e = setTimeout(() => {
              h(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
          if (y) {
            let e = setTimeout(() => {
              b(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
        }, [u, y]);
        let O = "Active";
        return (
          P && (O = "Expired"),
          R && (O = "Acknowledged"),
          (0, a.jsxs)("div", {
            className: o(C.card, C.discount),
            children: [
              (0, a.jsxs)("div", {
                className: o(C.row, C.nameRow),
                children: [
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-normal",
                    children: A,
                  }),
                  (0, a.jsx)(c.Clickable, {
                    onClick: async () => {
                      k(!0), await T(j, "discount"), s(), k(!1);
                    },
                    children: (0, a.jsx)(g.default, {
                      className: o(C.icon, C.trashIcon),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(c.Clickable, {
                className: o(C.row, C.idRow),
                onClick: () => {
                  (0, f.copy)(j), h(!0);
                },
                children: [
                  (0, a.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "text-normal",
                    children: ["Offer: ", j],
                  }),
                  u
                    ? (0, a.jsx)(m.default, {
                        className: o(C.icon, C.noMargin),
                      })
                    : (0, a.jsx)(p.default, { className: C.icon }),
                ],
              }),
              (0, a.jsxs)(c.Clickable, {
                className: o(C.row, C.idRow),
                onClick: () => {
                  (0, f.copy)(L), b(!0);
                },
                children: [
                  (0, a.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "text-normal",
                    children: ["Discount: ", L],
                  }),
                  y
                    ? (0, a.jsx)(m.default, {
                        className: o(C.icon, C.noMargin),
                      })
                    : (0, a.jsx)(p.default, { className: C.icon }),
                ],
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsxs)(c.Text, {
                  variant: "eyebrow",
                  color: "text-normal",
                  children: [_.amount, "% off"],
                }),
              }),
              (0, a.jsxs)("div", {
                className: C.badgeContainer,
                children: [
                  (0, a.jsx)(c.Clickable, {
                    onClick: M,
                    className: o(C.badge, C.clickable, {
                      [C.acked]: R,
                      [C.expired]: P,
                    }),
                    children: (0, a.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "Acknowledged" === O ? void 0 : "always-white",
                      children: O,
                    }),
                  }),
                  null != E &&
                    (0, a.jsx)("div", {
                      className: o(C.badge, C.badgeBottom, C.redeemed),
                      children: (0, a.jsx)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Applied",
                      }),
                    }),
                ],
              }),
              (0, a.jsx)("div", {
                className: o(C.loadingContainer, { [C.isLoading]: x || v }),
                children: (0, a.jsx)(c.Spinner, {}),
              }),
            ],
          })
        );
      }
      function A() {
        let [e, r] = n.useState([]),
          [t, i] = n.useState([]),
          [l, p] = n.useState(),
          [m, g] = n.useState(),
          [f, y] = n.useState([]),
          [x, k] = n.useState([]),
          [T, w] = n.useState(!0);
        n.useEffect(() => {
          (0 === e.length || 0 === t.length || T) &&
            S().then(e => {
              let t = Object.keys(e.trial).map(r => ({
                  label: r,
                  value: e.trial[r],
                })),
                a = Object.keys(e.discount).map(r => ({
                  label: r,
                  value: e.discount[r],
                }));
              r(t),
                i(a),
                null == l && p(t[0].value),
                null == m && g(a[0].value);
            });
        }, [e, t, l, m, T]),
          n.useEffect(() => {
            T &&
              (w(!1),
              h.default.forceReset(),
              (0, d.fetchUserOffer)(),
              N().then(e => {
                let r = e.trial.sort((e, r) => e.id.localeCompare(r.id));
                y(r);
                let t = e.discount.sort((e, r) => e.id.localeCompare(r.id));
                k(t);
              }));
          }, [T]);
        let A = async () => {
            null != l && (await j(l, "trial"), w(!0));
          },
          R = async () => {
            null != m && (await j(m, "discount"), w(!0));
          },
          P = async () => {
            await E(), w(!0);
          };
        return (0, a.jsx)(c.ScrollerThin, {
          className: o(v.panel),
          children: (0, a.jsxs)("div", {
            className: C.panelInner,
            children: [
              (0, a.jsxs)("section", {
                className: C.section,
                children: [
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Utils",
                  }),
                  (0, a.jsxs)("div", {
                    className: C.buttons,
                    children: [
                      (0, a.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: P,
                        children: "Clear all User Offers",
                      }),
                      (0, a.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: () =>
                          (0, u.removeDismissedContent)(
                            s.DismissibleContent
                              .PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE
                          ),
                        children: "Clear Mobile Trials DismissibleContent",
                      }),
                      (0, a.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: () => w(!0),
                        children: "Refresh DevTools",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                className: C.section,
                children: [
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Create a Trial Offer",
                  }),
                  (0, a.jsxs)("div", {
                    className: C.inputRow,
                    children: [
                      (0, a.jsx)(c.Select, {
                        className: C.input,
                        options: e,
                        isSelected: e => l === e,
                        placeholder: "Trial Type",
                        serialize: e => String(e),
                        select: e => p(e),
                        popoutLayerContext: b.devToolsLayerContext,
                      }),
                      (0, a.jsx)(c.Button, { onClick: A, children: "Create" }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                className: C.section,
                children: [
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Create a Discount Offer",
                  }),
                  (0, a.jsxs)("div", {
                    className: C.inputRow,
                    children: [
                      (0, a.jsx)(c.Select, {
                        className: C.input,
                        options: t,
                        isSelected: e => m === e,
                        placeholder: "Discount Type",
                        serialize: e => String(e),
                        select: e => g(e),
                        popoutLayerContext: b.devToolsLayerContext,
                      }),
                      (0, a.jsx)(c.Button, { onClick: R, children: "Create" }),
                    ],
                  }),
                ],
              }),
              f.length > 0 &&
                (0, a.jsxs)("section", {
                  className: C.section,
                  children: [
                    (0, a.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      children: "Existing Trial Offers",
                    }),
                    f.map(r =>
                      (0, a.jsx)(
                        L,
                        {
                          offer: r,
                          offerOptions: e,
                          forceRefetch: () => w(!0),
                        },
                        r.id
                      )
                    ),
                  ],
                }),
              x.length > 0 &&
                (0, a.jsxs)("section", {
                  className: C.section,
                  children: [
                    (0, a.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      children: "Existing Discount Offers",
                    }),
                    x.map(e =>
                      (0, a.jsx)(
                        _,
                        {
                          offer: e,
                          offerOptions: t,
                          forceRefetch: () => w(!0),
                        },
                        e.id
                      )
                    ),
                  ],
                }),
            ],
          }),
        });
      }
    },
    20950: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return _;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("448105"),
        s = t.n(l),
        c = t("866227"),
        d = t.n(c),
        u = t("446674"),
        h = t("77078"),
        p = t("913144"),
        m = t("810567"),
        g = t("756609"),
        f = t("228220"),
        y = t("664336"),
        b = t("888400"),
        x = t("398570"),
        k = t("370492"),
        v = t("332814"),
        C = t("928063"),
        S = t("637171"),
        j = t("724209"),
        T = t("782340"),
        w = t("731343"),
        N = t("699412");
      let E = [
          {
            key: "id",
            cellClassName: w.eventColumn,
            render(e) {
              let { experimentId: r } = e;
              return r;
            },
          },
          {
            key: "bucket",
            cellClassName: w.locationColumn,
            render(e) {
              let { descriptor: r } = e;
              return r.bucket;
            },
          },
          {
            key: "timestamp",
            cellClassName: w.locationColumn,
            render(e) {
              let { timestamp: r } = e;
              return r.toLocaleString();
            },
          },
        ],
        L = [
          {
            id: "details",
            name: "Details",
            render: e => {
              let {
                  loggedTrigger: {
                    experimentId: r,
                    descriptor: t,
                    exposureType: n,
                    excluded: i,
                    timestamp: l,
                    location: s,
                    previouslyTracked: c,
                  },
                } = e,
                u = d(l);
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(y.default, {
                    className: o(N.headerBar, w.subPanelHeaderBar),
                    children: [
                      (0, a.jsx)(y.default.Icon, {
                        icon: g.default,
                        tooltip: r,
                      }),
                      (0, a.jsx)(y.default.Title, { children: r }),
                    ],
                  }),
                  (0, a.jsxs)(v.Properties, {
                    className: w.commonProperties,
                    children: [
                      (0, a.jsx)(v.Property, {
                        name: "Timestamp (local)",
                        children: (0, a.jsx)("time", {
                          dateTime: l.toISOString(),
                          title: (0, b.dateFormat)(u, "LLLL"),
                          children: (0, b.calendarFormat)(u),
                        }),
                      }),
                      "guild" === t.type &&
                        (0, a.jsx)(v.Property, {
                          name: "Guild ID",
                          children: (0, a.jsx)("code", { children: t.guildId }),
                        }),
                      (0, a.jsx)(v.Property, {
                        name: "Bucket",
                        children: (0, a.jsx)("code", { children: t.bucket }),
                      }),
                      (0, a.jsx)(v.Property, {
                        name: "Revision",
                        children: (0, a.jsx)("code", { children: t.revision }),
                      }),
                      (0, a.jsx)(v.Property, {
                        name: "Override",
                        children: (0, a.jsx)(v.BooleanPropertyValue, {
                          value: t.override,
                        }),
                      }),
                      (0, a.jsx)(v.Property, {
                        name: "Exposure type",
                        children: (0, a.jsx)("code", { children: n }),
                      }),
                      (0, a.jsx)(v.Property, {
                        name: "Excluded",
                        children: (0, a.jsx)(v.BooleanPropertyValue, {
                          value: i,
                        }),
                      }),
                      (0, a.jsx)(v.Property, {
                        name: "Previously tracked",
                        children: (0, a.jsx)(v.BooleanPropertyValue, {
                          value: c,
                        }),
                      }),
                      (0, a.jsx)(v.Property, {
                        name: "Location",
                        children: (0, a.jsx)("code", { children: s }),
                      }),
                    ],
                  }),
                ],
              });
            },
          },
        ];
      function _() {
        let [e, r] = n.useState(""),
          t = n.useRef(null),
          i = (0, u.useStateFromStoresArray)(
            [x.default],
            () => x.default.loggedTriggers
          ),
          l = n.useMemo(
            () =>
              i
                .filter(r => 0 === e.length || s(e, r.experimentId))
                .sort((e, r) => r.timestamp.getTime() - e.timestamp.getTime()),
            [i, e]
          ),
          [c, d] = n.useState(void 0),
          g = l.find(e => e.key === c),
          { TabBar: y, renderSelectedTab: b } = (0, j.default)({ tabs: L }, []),
          v = (0, u.useStateFromStores)(
            [x.default],
            () => x.default.trackTriggers
          ),
          _ = n.useCallback(e => {
            p.default.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
          }, []);
        return (0, a.jsxs)("div", {
          ref: t,
          className: o(N.panel, w.panel),
          children: [
            (0, a.jsxs)("div", {
              className: w.toolbar,
              children: [
                (0, a.jsx)("div", {
                  title: "Enables tracking of all triggers",
                  className: w.triggersEnable,
                  children: (0, a.jsx)(h.Switch, {
                    checked: v,
                    onChange: _,
                    className: w.toolbarSwitch,
                  }),
                }),
                (0, a.jsx)(h.Button, {
                  className: w.toolbarButton,
                  look: h.Button.Looks.BLANK,
                  size: h.Button.Sizes.ICON,
                  onClick: k.clearAnalyticsLog,
                  children: (0, a.jsx)("span", {
                    title: T.default.Messages.CLEAR,
                    children: (0, a.jsx)(f.default, {
                      "aria-label": T.default.Messages.CLEAR,
                    }),
                  }),
                }),
                (0, a.jsx)(m.default, {
                  className: w.searchBar,
                  query: e,
                  onChange: r,
                  onClear: () => r(""),
                  placeholder: "Search by experiment id",
                }),
              ],
            }),
            (0, a.jsx)(h.ScrollerThin, {
              className: w.tableContainer,
              children: (0, a.jsx)(S.default, {
                columns: E,
                data: l,
                selectedRowKey: c,
                onClickRow: d,
              }),
            }),
            null != g &&
              (0, a.jsxs)(C.default, {
                className: w.subPanel,
                minHeight: 100,
                initialHeight:
                  null != t.current ? t.current.clientHeight / 2 : 300,
                children: [(0, a.jsx)(y, {}), b({ loggedTrigger: g })],
              }),
          ],
        });
      }
    },
    508815: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          toggle: function () {
            return i;
          },
          clearAll: function () {
            return o;
          },
        });
      var a = t("913144"),
        n = t("916523");
      function i(e, r) {
        let t = "boolean" == typeof r ? r : !n.default.get(e);
        a.default.dispatch({
          type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
          toggle: e,
          value: t,
        });
      }
      function o() {
        for (let e in n.default.all()) i(e, !1);
      }
    },
    724209: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return m;
          },
        }),
        t("222007"),
        t("424973");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("77078"),
        s = t("811151"),
        c = t("449008"),
        d = t("811199"),
        u = t("699412");
      let h = n.forwardRef(function (e, r) {
        let { id: t, selected: n, onClick: i, children: s } = e;
        return (0, a.jsx)(l.Clickable, {
          className: o(u.tabItem, { [u.selected]: n }),
          "data-tab-id": t,
          innerRef: r,
          onClick: i,
          children: s,
        });
      });
      function p(e) {
        let { tabs: r, selectedTabId: t, onSelectTab: i } = e,
          o = n.useRef(null),
          p = n.useRef(0),
          m = n.useRef(new Map()),
          [g, f] = n.useState([]),
          y = n.useCallback(() => {
            var e, a, n, i;
            if (null == o.current) return;
            let l = [],
              s = o.current.getBoundingClientRect().width;
            if (s !== p.current) {
              for (let o of ((p.current = s),
              (s -=
                null !==
                  (a =
                    null === (e = m.current.get(t)) || void 0 === e
                      ? void 0
                      : e.width) && void 0 !== a
                  ? a
                  : 0),
              r))
                o.id !== t &&
                  (s -=
                    null !==
                      (i =
                        null === (n = m.current.get(o.id)) || void 0 === n
                          ? void 0
                          : n.width) && void 0 !== i
                      ? i
                      : 0) < 0 &&
                  l.push(o.id);
              f(l);
            }
          }, [r, t]),
          b = n.useRef(null);
        n.useEffect(
          () => (
            (b.current = new ResizeObserver(() => y())),
            null != o.current && b.current.observe(o.current),
            () => {
              var e;
              null === (e = b.current) || void 0 === e || e.disconnect();
            }
          ),
          [y]
        );
        let x = n.useCallback(
          e => {
            let { closePopout: n } = e;
            return (0, a.jsx)(l.Menu, {
              navId: "devtools-overflow",
              variant: "fixed",
              onClose: n,
              "aria-label": "Overflowed DevTools Tabs",
              onSelect: n,
              children: r
                .map(e => {
                  let { id: r, name: n } = e;
                  return g.includes(r) && t !== r
                    ? (0, a.jsx)(
                        l.MenuItem,
                        { id: r, label: n, action: () => i(r) },
                        r
                      )
                    : null;
                })
                .filter(c.isNotNullish),
            });
          },
          [r, g, i, t]
        );
        return (0, a.jsxs)("div", {
          className: u.tabBar,
          ref: o,
          children: [
            r
              .map(e => {
                let { id: r, name: n } = e;
                if (!g.includes(r))
                  return (0, a.jsx)(
                    h,
                    {
                      id: r,
                      selected: t === r,
                      ref: e => {
                        var t, a, n;
                        let i =
                          null !==
                            (a =
                              null === (t = m.current.get(r)) || void 0 === t
                                ? void 0
                                : t.width) && void 0 !== a
                            ? a
                            : 0;
                        m.current.set(r, {
                          node: e,
                          width:
                            null !==
                              (n =
                                null == e
                                  ? void 0
                                  : e.getBoundingClientRect().width) &&
                            void 0 !== n
                              ? n
                              : i,
                        });
                      },
                      onClick: t !== r ? () => i(r) : void 0,
                      children: n,
                    },
                    r
                  );
              })
              .filter(c.isNotNullish),
            g.length > 0 &&
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(l.Popout, {
                  layerContext: d.devToolsLayerContext,
                  renderPopout: x,
                  position: "bottom",
                  align: "right",
                  spacing: 0,
                  children: e =>
                    (0, a.jsx)(l.Button, {
                      ...e,
                      className: u.overflowChevron,
                      size: l.Button.Sizes.ICON,
                      look: l.Button.Looks.BLANK,
                      children: (0, a.jsx)(s.default, {
                        className: u.overflowIcon,
                        width: 16,
                        height: 16,
                      }),
                    }),
                }),
              }),
          ],
        });
      }
      function m(e, r) {
        var t, i, o;
        let { tabs: l, initialSelectedTabId: s, onChangeTab: c } = e,
          [d, u] = n.useState(
            null != s ? s : null === (t = l[0]) || void 0 === t ? void 0 : t.id
          ),
          h = n.useCallback(
            () =>
              (0, a.jsx)(p, {
                tabs: l,
                selectedTabId: d,
                onSelectTab: e => {
                  u(e), null == c || c(e);
                },
              }),
            [d, u, c, ...r]
          ),
          m =
            null !==
              (o =
                null === (i = l.find(e => e.id === d)) || void 0 === i
                  ? void 0
                  : i.render) && void 0 !== o
              ? o
              : () => null;
        return { TabBar: h, renderSelectedTab: m, selectedTabId: d };
      }
    },
    348934: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          canCurrentUserManageMessageFilters: function () {
            return s;
          },
          canCurrentUserManageAutomod: function () {
            return c;
          },
          useCanCurrentUserManageAutomod: function () {
            return d;
          },
          useIsUserProfileRuleEnabled: function () {
            return u;
          },
        });
      var a = t("446674"),
        n = t("305961"),
        i = t("957255"),
        o = t("49111");
      let l = function (e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : n.default,
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : i.default,
          a = r.getGuild(e);
        return null != a && t.can(o.Permissions.MANAGE_GUILD, a);
      };
      function s(e) {
        if (null == e) return !1;
        let r = l(e);
        return r;
      }
      function c(e) {
        let r = l(e);
        return r;
      }
      function d(e) {
        return (0, a.useStateFromStores)(
          [n.default, i.default],
          () => l(e, n.default, i.default),
          [e]
        );
      }
      function u(e) {
        return (0, a.useStateFromStores)(
          [n.default],
          () => {
            let r = n.default.getGuild(e);
            return (
              (null == r ? void 0 : r.hasFeature(o.GuildFeatures.COMMUNITY)) ||
              !1
            );
          },
          [e]
        );
      }
    },
    95045: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return c;
          },
          renderAutomodMessageMarkup: function () {
            return d;
          },
        }),
        t("222007"),
        t("781738"),
        t("355025");
      var a = t("312016"),
        n = t("367376"),
        i = t("240873"),
        o = t("49111");
      let l = new Set([o.MessageEmbedTypes.IMAGE, o.MessageEmbedTypes.GIFV]),
        s = new Set([
          "strong",
          "em",
          "u",
          "text",
          "inlineCode",
          "s",
          "spoiler",
        ]);
      function c(e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = r.formatInline ? n.default.parseInlineReply : n.default.parse;
        return (function (e, r, t) {
          var n, o;
          let {
              toAST: c = !1,
              hideSimpleEmbedContent: d = !0,
              formatInline: p = !1,
              postProcessor: m,
            } = t,
            g = !1;
          let f = e(
            r.content,
            !0,
            ((n = r),
            (o = t),
            {
              allowLinks: null != n.webhookId || !!o.allowLinks,
              allowEmojiLinks: null != n.webhookId,
              channelId: n.channel_id,
              messageId: n.id,
              mentionChannels: n.mentionChannels,
              isInteracting: !!o.isInteracting,
              formatInline: !!o.formatInline,
              noStyleAndInteraction: !!o.noStyleAndInteraction,
              allowHeading: !!o.allowHeading,
              allowList: !!o.allowList,
              previewLinkTarget: !!o.previewLinkTarget,
              disableAnimatedEmoji: !!o.disableAnimatedEmoji,
              disableAutoBlockNewlines: !0,
              muted: !1,
            }),
            (e, t) => (
              !Array.isArray(e) && (e = [e]),
              d &&
                (e = (function (e, r) {
                  if (1 !== e.length || 1 !== r.length) return e;
                  let t = e[0],
                    a = r[0];
                  return ("link" === t.type || "attachmentLink" === t.type) &&
                    l.has(a.type) &&
                    (0, i.isEmbedInline)(a)
                    ? []
                    : e;
                })(e, r.embeds)),
              !p &&
                (e = (function (e, r) {
                  return r
                    ? u(e)
                    : ("paragraph" === e[0].type &&
                        e[0].content instanceof Array &&
                        (e[0].content = u(e[0].content)),
                      e);
                })(e, t)),
              (g = (function (e, r) {
                return r
                  ? h(e)
                  : "paragraph" === e[0].type &&
                      e[0].content instanceof Array &&
                      h(e[0].content);
              })(
                (e = (function (e) {
                  let r = e.some(e => "link" !== e.type || !1);
                  return e.filter(e => {
                    let t = "link" === e.type,
                      n = (0, a.parseQuestsEmbedCode)(e.target);
                    return !(t && null != n && !r);
                  });
                })(e)),
                t
              )),
              p &&
                (e = (function e(r) {
                  return (
                    r.forEach(r => {
                      s.has(r.type) &&
                        null != r.content &&
                        (Array.isArray(r.content)
                          ? e(r.content)
                          : (r.content = r.content.replace(/\n/g, " ")));
                    }),
                    r
                  );
                })(e)),
              null != m && (e = m(e, t)),
              e
            )
          );
          return { hasSpoilerEmbeds: g, content: f };
        })(t, e, r);
      }
      function d(e, r, t) {
        var a;
        return (
          (a = n.default.parseAutoModerationSystemMessage),
          a(
            e,
            !0,
            {
              allowLinks: !1,
              allowEmojiLinks: !1,
              mentionChannels: [],
              isInteracting: !1,
              formatInline: !1,
              noStyleAndInteraction: !1,
              allowHeading: !1,
              allowList: !1,
              disableAutoBlockNewlines: !0,
              highlightWord: r,
              disableAnimatedEmoji: !1,
              channelId: t,
              muted: !1,
            },
            e => (!Array.isArray(e) && (e = [e]), e)
          )
        );
      }
      function u(e) {
        let r = e.some(
          e =>
            "emoji" !== e.type &&
            "customEmoji" !== e.type &&
            "soundboard" !== e.type &&
            ("string" != typeof e.content || "" !== e.content.trim()) &&
            !0
        );
        if (r) return e;
        let t = 0;
        return (e.forEach(e => {
          if (
            (("emoji" === e.type ||
              "customEmoji" === e.type ||
              "soundboard" === e.type) &&
              (t += 1),
            t > 30)
          )
            return !1;
        }),
        t > 30)
          ? e
          : (e.forEach(e => {
              e.jumboable = !0;
            }),
            e);
      }
      function h(e) {
        return e.some(
          e =>
            "spoiler" === e.type &&
            Array.isArray(e.content) &&
            e.content.some(
              e => "link" === e.type || "attachmentLink" === e.type
            )
        );
      }
    },
    285471: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          updateClientPremiumTypeOverride: function () {
            return n;
          },
        });
      var a = t("913144");
      let n = (e, r) => {
        a.default.dispatch({
          type: "SET_PREMIUM_TYPE_OVERRIDE",
          premiumType: e,
        }),
          a.default.dispatch({ type: "UPDATE_CLIENT_PREMIUM_TYPE", user: r });
      };
    },
    456015: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          fetchUserOffer: function () {
            return c;
          },
          acknowledgeUserOffer: function () {
            return d;
          },
        });
      var a = t("872717"),
        n = t("151426"),
        i = t("913144"),
        o = t("10641"),
        l = t("872173"),
        s = t("49111");
      async function c() {
        i.default.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
          var e, r, t;
          let c = await a.HTTP.post({ url: s.Endpoints.USER_OFFER }),
            d =
              null !== (e = c.body.user_trial_offer) && void 0 !== e ? e : null,
            u = null !== (r = c.body.user_discount) && void 0 !== r ? r : null,
            h =
              null !== (t = c.body.user_discount_offer) && void 0 !== t
                ? t
                : null;
          return (
            null == d &&
              (0, o.isDismissibleContentDismissed)(
                n.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING
              ) &&
              (0, l.removeDismissedContent)(
                n.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING
              ),
            i.default.dispatch({
              type: "BILLING_USER_OFFER_FETCH_SUCCESS",
              userTrialOffer: d,
              userDiscount: u,
              userDiscountOffer: h,
            }),
            { userTrialOffer: d, userDiscount: u, userDiscountOffer: h }
          );
        } catch (e) {
          i.default.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
      }
      function d(e, r) {
        let t = null != e && null == e.expires_at ? e.id : void 0,
          n = null != r && null == r.expires_at ? r.id : void 0;
        if (void 0 !== t || void 0 !== n)
          return a.HTTP.post({
            url: s.Endpoints.USER_OFFER_ACKNOWLEDGED,
            body: { user_trial_offer_id: t, user_discount_offer_id: n },
            oldFormErrors: !0,
          })
            .then(e => {
              var r, t, a;
              i.default.dispatch({
                type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                userTrialOffer:
                  null !== (r = e.body.user_trial_offer) && void 0 !== r
                    ? r
                    : null,
                userDiscount:
                  null !== (t = e.body.user_discount) && void 0 !== t
                    ? t
                    : null,
                userDiscountOffer:
                  null !== (a = e.body.user_discount_offer) && void 0 !== a
                    ? a
                    : null,
              });
            })
            .catch(e => {
              404 === e.status &&
                i.default.dispatch({
                  type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                  userTrialOffer: null,
                  userDiscount: null,
                  userDiscountOffer: null,
                });
            });
      }
    },
    15408: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return o;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("77078"),
        i = t("892974");
      function o(e) {
        (0, n.openModalLazy)(
          async () => {
            let { default: e } = await t.el("166260").then(t.bind(t, "166260"));
            return r => (0, a.jsx)(e, { ...r });
          },
          { onCloseCallback: e, backdropStyle: i.BackdropStyles.BLUR }
        );
      }
    },
    484894: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          OverridePremiumTypeDropDown: function () {
            return u;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("446674"),
        i = t("77078"),
        o = t("811199"),
        l = t("285471"),
        s = t("400205"),
        c = t("697218"),
        d = t("646718");
      let u = e => {
        let { isDevTools: r = !1 } = e,
          t = (0, n.useStateFromStores)([c.default], () =>
            c.default.getCurrentUser()
          ),
          u = (0, n.useStateFromStores)([s.default], () =>
            s.default.getPremiumTypeOverride()
          );
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)(i.FormSection, {
              title: "Override Client-Side Premium Type",
              tag: i.FormTitleTags.H3,
              children: (0, a.jsx)(i.SingleSelect, {
                options: d.PREMIUM_TYPE_OVERRIDE_OPTIONS,
                value: u,
                onChange: e => {
                  (0, l.updateClientPremiumTypeOverride)(e, t);
                },
                popoutLayerContext: r ? o.devToolsLayerContext : void 0,
              }),
            }),
            (0, a.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              style: { padding: "0" },
              onClick: () => {
                (0, l.updateClientPremiumTypeOverride)(
                  d.UNSELECTED_PREMIUM_TYPE_OVERRIDE,
                  t
                );
              },
              children: "Reset premium type override",
            }),
          ],
        });
      };
    },
    895530: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return l;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("414456"),
        i = t.n(n),
        o = t("612654");
      function l(e) {
        let { children: r, tag: t, className: n } = e;
        return (
          (t = null != t ? t : "h3"),
          (0, a.jsx)(t, { className: i(o.title, n), children: r })
        );
      }
    },
    9074: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return S;
          },
        });
      var a,
        n = t("37983"),
        i = t("884691"),
        o = t("414456"),
        l = t.n(o),
        s = t("404828"),
        c = t.n(s),
        d = t("269936"),
        u = t("647374"),
        h = t("888198"),
        p = t("47677"),
        m = t("895530"),
        g = t("915621"),
        f = t("356410");
      let y = new RegExp(
        "https?://".concat(
          null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ""
        )
      );
      function b(e) {
        return "string" == typeof e.content ? e.content : v(e.content);
      }
      let x = {
          ...c.defaultRules,
          heading: {
            ...c.defaultRules.heading,
            react(e, r, t) {
              let a = "h".concat(e.level);
              return (0, n.jsx)(
                m.default,
                { tag: a, children: r(e.content, t) },
                t.key
              );
            },
          },
          paragraph: {
            ...c.defaultRules.paragraph,
            react: (e, r, t) =>
              (0, n.jsx)(
                "div",
                { className: g.paragraph, children: r(e.content, t) },
                t.key
              ),
          },
          strong: { ...c.defaultRules.strong, order: 6 },
          em: { ...c.defaultRules.em, order: 6 },
          u: { ...c.defaultRules.u, order: 5 },
          del: { ...c.defaultRules.del, order: 6 },
          link: {
            ...u.default,
            ...(0, p.default)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...c.defaultRules.blockQuote,
            react: (e, r, t) =>
              (0, n.jsx)(
                "blockquote",
                { className: g.blockquote, children: b(e) },
                t.key
              ),
          },
          image: {
            ...c.defaultRules.image,
            order: 6,
            match(e, r, t) {
              let a = c.defaultRules.image;
              if (null == a || null == a.match) return !1;
              let n = a.match(e, r, t);
              if (null != n && Array.isArray(n) && n.length >= 3) {
                let e = n[2];
                if ("string" == typeof e) return null != e.match(y) ? n : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...h.default.RULES.inlineCode,
            order: 6,
            react: (e, r, t) =>
              (0, n.jsx)(
                "code",
                { className: g.codeInline, children: b(e) },
                t.key
              ),
          },
          codeBlock: {
            ...c.defaultRules.codeBlock,
            react(e, r, a) {
              let i = () =>
                (0, n.jsx)(
                  "pre",
                  {
                    children: (0, n.jsx)("code", {
                      className: l(f.scrollbarGhostHairline, "hljs"),
                      children: b(e),
                    }),
                  },
                  a.key
                );
              return (0, n.jsx)(
                d.LazyLibrary,
                {
                  createPromise: () => t.el("86256").then(t.bind(t, "86256")),
                  webpackId: "86256",
                  renderFallback: i,
                  render: r => {
                    if (
                      !(e.lang && r.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return i();
                    {
                      let t = r.highlight(e.lang, e.content, !0);
                      return null == t
                        ? i()
                        : (0, n.jsx)(
                            "pre",
                            {
                              children: (0, n.jsx)("code", {
                                className: l(
                                  f.scrollbarGhostHairline,
                                  "hljs",
                                  t.language
                                ),
                                dangerouslySetInnerHTML: { __html: t.value },
                              }),
                            },
                            a.key
                          );
                    }
                  },
                },
                a.key
              );
            },
          },
        },
        k = c.parserFor(x),
        v = c.reactFor(c.ruleOutput(x, "react"));
      class C extends i.PureComponent {
        render() {
          let {
              className: e,
              children: r,
              state: t,
              parser: a,
              output: i,
            } = this.props,
            o = a("".concat(r, "\n\n"), { inline: !1, ...t }),
            s = i(o);
          return (0, n.jsx)("div", {
            className: l(g.markdown, e),
            children: s,
          });
        }
      }
      (C.rules = x), (C.defaultProps = { parser: k, output: v });
      var S = C;
    },
    712218: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          IconTypes: function () {
            return a;
          },
          IconSizes: function () {
            return d;
          },
          default: function () {
            return h;
          },
        }),
        t("781738");
      var a,
        n,
        i = t("37983"),
        o = t("884691"),
        l = t("414456"),
        s = t.n(l),
        c = t("870620");
      ((n = a || (a = {})).UNKNOWN = "unknown"),
        (n.VISA = "visa"),
        (n.DISCOVER = "discover"),
        (n.MASTERCARD = "mastercard"),
        (n.AMEX = "amex"),
        (n.PAYPAL = "paypal"),
        (n.PAYMENT_REQUEST = "paymentRequest"),
        (n.G_PAY = "gPay"),
        (n.DINERS = "diners"),
        (n.JCB = "jcb"),
        (n.UNIONPAY = "unionpay"),
        (n.SOFORT = "sofort"),
        (n.PRZELEWY24 = "przelewy24"),
        (n.GIROPAY = "giropay"),
        (n.PAYSAFECARD = "paysafecard"),
        (n.GCASH = "gcash"),
        (n.GRABPAY = "grabpay"),
        (n.MOMO_WALLET = "momo_wallet"),
        (n.VENMO = "venmo"),
        (n.KAKAOPAY = "kakaopay"),
        (n.GOPAY_WALLET = "gopay_wallet"),
        (n.BANCONTACT = "bancontact"),
        (n.EPS = "eps"),
        (n.IDEAL = "ideal"),
        (n.CASH_APP = "cash_app"),
        (n.APPLE = "apple");
      let d = {
        SMALL: c.cardIconSmall,
        MEDIUM: c.cardIconMedium,
        LARGE: c.cardIconLarge,
        XLARGE: c.cardIconXLarge,
      };
      class u extends o.PureComponent {
        static getType(e) {
          if (null == e) return "unknown";
          let r = e.replace(/[^a-z0-9_]/gi, "").toUpperCase();
          return a[r] || "unknown";
        }
        render() {
          let { flipped: e, type: r, className: t, size: a } = this.props;
          return (0, i.jsx)("div", {
            className: s(a, c[r], t, { [c.flipped]: e }),
            children: r,
          });
        }
      }
      (u.Types = a),
        (u.Sizes = d),
        (u.defaultProps = { size: d.SMALL, flipped: !1 });
      var h = u;
    },
    158352: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return m;
          },
        }),
        t("222007");
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("77078"),
        s = t("837899"),
        c = t("425190"),
        d = t("49111"),
        u = t("356250");
      let h = e =>
        (0, a.jsx)("div", { className: e.className, children: e.children });
      class p extends n.PureComponent {
        isSortable(e) {
          return null != e.sort && !1 !== e.sort;
        }
        getDefaultSort(e) {
          return (r, t) => {
            let a = r[e],
              n = t[e];
            return null != a && null != n ? (a === n ? 0 : a < n ? -1 : 1) : 0;
          };
        }
        renderHeader() {
          let {
              columns: e,
              data: r,
              sortDirection: t,
              sortKey: n,
              headerCellClassName: i,
              headerClassName: p,
              sortedHeaderCellClassName: m,
              stickyHeader: g,
            } = this.props,
            f = e.map(e => {
              let h = null != e.renderHeader ? e.renderHeader(e, r) : e.key,
                p =
                  t === d.TableSortDirections.ASCENDING ? c.default : s.default;
              return (0, a.jsx)(
                l.Clickable,
                {
                  className: o(
                    u.headerCell,
                    i,
                    e.headerCellClassName,
                    e.cellClassName,
                    n === e.key && m,
                    { [u.clickable]: this.isSortable(e) }
                  ),
                  onClick: this.isSortable(e)
                    ? () => this.handleSort(e.key)
                    : void 0,
                  children: (0, a.jsxs)("div", {
                    className: u.headerCellContent,
                    children: [
                      h,
                      this.isSortable(e) && n === e.key
                        ? (0, a.jsx)(p, { className: u.sortIcon })
                        : null,
                    ],
                  }),
                },
                e.key
              );
            });
          return (0, a.jsx)(h, {
            className: o(p, u.row, { [u.stickyHeader]: g }),
            children: f,
          });
        }
        renderBody() {
          let {
              columns: e,
              data: r,
              sortData: t,
              sortKey: a,
              sortDirection: i,
              bodyCellClassName: l,
              rowClassName: s,
              cellProps: c,
              rowProps: h,
              rowComponent: p,
              cellComponent: m,
            } = this.props,
            g = r;
          if (t) {
            let t =
                null != a
                  ? e.find(e => {
                      let { key: r } = e;
                      return r === a;
                    })
                  : null,
              n = [...r],
              o = null != t && t.sort,
              l =
                null != t && null != a && this.isSortable(t)
                  ? n.sort(
                      "function" == typeof o
                        ? (e, r) => o(e, r, i)
                        : this.getDefaultSort(a)
                    )
                  : n;
            g =
              null != t && i === d.TableSortDirections.DESCENDING
                ? l.reverse()
                : l;
          }
          return g.map((r, t) => {
            let a = e.map(e =>
              (0, n.createElement)(
                m,
                {
                  ...c,
                  key: e.key,
                  item: r,
                  className: o(l, e.bodyCellClassName, e.cellClassName),
                },
                null != e.render ? e.render(r, c, t) : r[e.key]
              )
            );
            return (0, n.createElement)(
              p,
              { ...h, key: r.key, item: r, className: o(u.row, s) },
              a
            );
          });
        }
        render() {
          let { className: e, hasHeader: r } = this.props;
          return (0, a.jsxs)("div", {
            className: e,
            children: [r ? this.renderHeader() : null, this.renderBody()],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleSort = e => {
              let { sortKey: r, sortDirection: t, onSort: a } = this.props;
              null != a &&
                a(
                  e,
                  r === e
                    ? t === d.TableSortDirections.ASCENDING
                      ? d.TableSortDirections.DESCENDING
                      : d.TableSortDirections.ASCENDING
                    : d.TableSortDirections.ASCENDING
                );
            });
        }
      }
      (p.SortDirection = d.TableSortDirections),
        (p.defaultProps = {
          initialSortDirection: d.TableSortDirections.ASCENDING,
          rowHeaderComponent: h,
          rowComponent: e =>
            (0, a.jsx)("div", { className: e.className, children: e.children }),
          cellComponent: e =>
            (0, a.jsx)("div", { className: e.className, children: e.children }),
          hasHeader: !0,
          sortData: !0,
          stickyHeader: !1,
        });
      var m = p;
    },
    756609: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return l;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("469563"),
        i = t("308472"),
        o = t("75196"),
        l = (0, n.replaceIcon)(
          function (e) {
            let {
              width: r = 18,
              height: t = 18,
              color: n = "currentColor",
              foreground: i,
              ...l
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, o.default)(l),
              width: r,
              height: t,
              viewBox: "0 0 18 18",
              children: [
                (0, a.jsx)("path", {
                  fill: n,
                  className: i,
                  d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z",
                }),
                (0, a.jsx)("path", {
                  fill: n,
                  className: i,
                  d: "M6.75,4.5H5.25v6h1.5Z",
                }),
                (0, a.jsx)("path", {
                  fill: n,
                  className: i,
                  d: "M9.75,7.5H8.25v3h1.5Z",
                }),
                (0, a.jsx)("path", {
                  fill: n,
                  className: i,
                  d: "M12.75,6h-1.5v4.5h1.5Z",
                }),
              ],
            });
          },
          i.AnalyticsIcon,
          void 0,
          { size: 18 }
        );
    },
    811151: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("75196");
      function i(e) {
        let {
          width: r = 24,
          height: t = 24,
          color: i = "currentColor",
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, n.default)(o),
          width: r,
          height: t,
          viewBox: "0 0 16 16",
          children: [
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
              fill: i,
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
              fill: i,
            }),
          ],
        });
      }
    },
    496657: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return l;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("469563"),
        i = t("400033"),
        o = t("75196"),
        l = (0, n.replaceIcon)(
          function (e) {
            let {
              width: r = 16,
              height: t = 16,
              color: n = "currentColor",
              foreground: i,
              ...l
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, o.default)(l),
              width: r,
              height: t,
              viewBox: "0 0 22 23",
              children: (0, a.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, a.jsx)("path", {
                    className: i,
                    fill: n,
                    d: "M4.3231,4.4332 C4.3231,4.4332 4.5811,4.0472 4.6881,3.8762 C4.7951,3.7052 4.4111,3.3012 4.2621,3.1732 C4.1131,3.0452 3.8781,3.1092 3.8781,3.1092 C2.0031,3.9402 1.0651,5.6452 0.9371,5.9862 C0.8091,6.3272 1.2631,6.6992 1.5981,6.8812 C1.7521,6.9652 1.9971,6.7792 2.1481,6.6412 L2.1991,6.5892 L2.2781,6.5092 L2.2791,6.5082 L7.3801,11.5892 L8.0771,10.8922 L9.3581,9.6112 L4.3161,4.4402 L4.3231,4.4332 Z",
                  }),
                  (0, a.jsx)("path", {
                    className: i,
                    fill: n,
                    d: "M16.3738,9.7931 L16.6428,9.5371 L19.0598,11.9311 C19.0768,11.9461 19.0948,11.9521 19.1108,11.9521 C19.1568,11.9521 19.1948,11.9101 19.1948,11.9101 C19.1948,11.9101 21.8708,9.2551 21.8798,9.2461 C21.9588,9.1681 21.8798,9.1251 21.8798,9.1251 L19.8158,7.0471 L19.8128,7.0501 L19.5298,6.7731 L19.6878,6.6211 L20.0258,6.6601 L19.9618,6.2121 L20.0468,6.1261 L19.9198,5.4801 C19.4788,4.8551 18.2708,3.8541 18.2708,3.8541 L17.6388,3.7401 L17.5748,3.8251 L17.0988,3.7541 L17.1448,4.1601 L17.1748,4.1901 L17.0338,4.3321 L16.2538,3.5691 C16.2538,3.5691 11.7278,1.1111 11.4868,0.9971 C11.3508,0.9341 11.2508,0.8921 11.1548,0.8921 C11.0808,0.8921 11.0088,0.9171 10.9258,0.9761 C10.7338,1.1111 10.8468,1.3831 10.8468,1.3831 L13.6608,6.5831 L14.2238,7.1411 L14.0478,7.3171 L14.0478,7.3171 L13.9828,7.3821 L13.5328,7.3201 L13.6018,7.7661 L13.4718,7.8961 L13.4488,7.8731 C13.4278,7.8521 13.3988,7.8411 13.3708,7.8411 C13.3428,7.8411 13.3148,7.8521 13.2928,7.8731 C13.2498,7.9161 13.2498,7.9861 13.2928,8.0291 L13.3158,8.0521 L13.2538,8.1151 L13.2378,8.0981 C13.2158,8.0771 13.1878,8.0661 13.1598,8.0661 C13.1308,8.0661 13.1028,8.0771 13.0818,8.0981 C13.0388,8.1411 13.0388,8.2111 13.0818,8.2541 L13.0988,8.2711 L11.9148,9.4611 L11.8878,9.4341 C11.8658,9.4131 11.8378,9.4021 11.8098,9.4021 C11.7818,9.4021 11.7538,9.4131 11.7318,9.4341 C11.6888,9.4771 11.6888,9.5471 11.7318,9.5901 L11.7598,9.6171 L11.6968,9.6801 L11.6758,9.6601 C11.6548,9.6381 11.6258,9.6271 11.5988,9.6271 C11.5698,9.6271 11.5418,9.6381 11.5198,9.6601 C11.4778,9.7031 11.4778,9.7721 11.5198,9.8151 L11.5408,9.8361 L11.3868,9.9921 L11.3658,10.1901 L11.4468,10.2731 L11.4448,10.2741 L11.3468,10.3741 L4.9578,16.7621 L4.8748,16.6931 L4.6098,16.7311 L4.4598,16.8831 L4.4498,16.8731 C4.4278,16.8511 4.3998,16.8401 4.3718,16.8401 C4.3438,16.8401 4.3148,16.8511 4.2938,16.8731 C4.2508,16.9161 4.2508,16.9851 4.2938,17.0281 L4.3058,17.0401 L4.2438,17.1041 L4.2378,17.0981 C4.2168,17.0761 4.1878,17.0651 4.1598,17.0651 C4.1318,17.0651 4.1038,17.0761 4.0818,17.0981 C4.0398,17.1411 4.0398,17.2101 4.0818,17.2531 L4.0888,17.2611 L2.9198,18.4501 L2.8958,18.4261 C2.8738,18.4041 2.8468,18.3941 2.8178,18.3941 C2.7898,18.3941 2.7618,18.4041 2.7398,18.4261 C2.6968,18.4691 2.6968,18.5391 2.7398,18.5821 L2.7658,18.6071 L2.7038,18.6701 L2.6848,18.6511 C2.6628,18.6301 2.6348,18.6191 2.6058,18.6191 C2.5788,18.6191 2.5498,18.6301 2.5288,18.6511 C2.4858,18.6941 2.4858,18.7641 2.5288,18.8071 L2.5488,18.8281 L2.4618,18.9171 L2.0088,18.8361 L2.0428,19.3421 L1.8998,19.4881 L2.0238,20.1701 C2.0238,20.1701 2.2138,20.7641 2.6048,21.1581 C2.9838,21.5401 3.5618,21.7231 3.5868,21.7421 L4.2398,21.8561 L4.4008,21.6981 L4.8508,21.7711 L4.7768,21.3261 L4.9138,21.1921 L4.9768,21.2551 C4.9978,21.2761 5.0258,21.2871 5.0538,21.2871 C5.0818,21.2871 5.1108,21.2761 5.1318,21.2551 C5.1748,21.2111 5.1748,21.1421 5.1318,21.0991 L5.0698,21.0371 L5.1338,20.9751 L5.1878,21.0291 C5.2088,21.0511 5.2378,21.0621 5.2658,21.0621 C5.2938,21.0621 5.3218,21.0511 5.3438,21.0291 C5.3868,20.9861 5.3868,20.9171 5.3438,20.8741 L5.2908,20.8201 L6.4778,19.6491 L6.5298,19.7011 C6.5508,19.7231 6.5798,19.7331 6.6078,19.7331 C6.6358,19.7331 6.6638,19.7231 6.6858,19.7011 C6.7278,19.6581 6.7278,19.5881 6.6858,19.5451 L6.6348,19.4951 L6.6978,19.4321 L6.7418,19.4761 C6.7628,19.4971 6.7908,19.5081 6.8188,19.5081 C6.8478,19.5081 6.8758,19.4971 6.8968,19.4761 C6.9398,19.4331 6.9398,19.3631 6.8968,19.3201 L6.8538,19.2771 L6.9868,19.1471 L7.0348,18.8621 L6.9638,18.7911 L6.9648,18.7901 L7.0938,18.6621 L13.4398,12.3141 L13.4368,12.3081 L13.5608,12.4361 L13.7598,12.4141 L13.9388,12.2341 L13.9678,12.2631 C13.9898,12.2841 14.0178,12.2951 14.0458,12.2951 C14.0738,12.2951 14.1028,12.2841 14.1238,12.2631 C14.1668,12.2201 14.1668,12.1501 14.1238,12.1071 L14.0948,12.0781 L14.1578,12.0161 L14.1798,12.0381 C14.2008,12.0591 14.2288,12.0701 14.2578,12.0701 C14.2858,12.0701 14.3138,12.0591 14.3348,12.0381 C14.3778,11.9951 14.3778,11.9251 14.3348,11.8821 L14.3128,11.8591 L15.4988,10.6711 L15.5298,10.7021 C15.5508,10.7231 15.5788,10.7341 15.6068,10.7341 C15.6358,10.7341 15.6638,10.7231 15.6848,10.7021 C15.7278,10.6591 15.7278,10.5891 15.6848,10.5461 L15.6538,10.5151 L15.7168,10.4521 L15.7408,10.4771 C15.7628,10.4981 15.7908,10.5091 15.8188,10.5091 C15.8468,10.5091 15.8748,10.4981 15.8968,10.4771 C15.9398,10.4331 15.9398,10.3641 15.8968,10.3211 L15.8728,10.2961 L16.0048,10.1641 L16.4458,10.2331 L16.3738,9.7931 Z",
                  }),
                  (0, a.jsx)("polygon", {
                    className: i,
                    fill: n,
                    points:
                      "17.255 16.968 14.442 14.836 13.941 14.32 12 16.261 12.488 16.727 14.321 19.476 16.793 22.183 19.642 19.525",
                  }),
                ],
              }),
            });
          },
          i.StaffBadgeIcon,
          void 0,
          { size: 16 }
        );
    },
    561703: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return l;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("469563"),
        i = t("562366"),
        o = t("75196"),
        l = (0, n.replaceIcon)(
          function (e) {
            let {
              width: r = 16,
              height: t = 16,
              color: n = "currentColor",
              foreground: i,
              ...l
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, o.default)(l),
              width: r,
              height: t,
              viewBox: "0 0 18 20",
              children: (0, a.jsx)("path", {
                className: i,
                fill: n,
                d: "M15,15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0,20l1.5-1.5L3,20l1.5-1.5L6,20l1.5-1.5L9,20l1.5-1.5L12,20l1.5-1.5L15,20l1.5-1.5L18,20V0L16.5,1.5,15,0,13.5,1.5,12,0,10.5,1.5,9,0,7.5,1.5,6,0,4.5,1.5,3,0,1.5,1.5,0,0Z",
              }),
            });
          },
          i.ReceiptIcon,
          void 0,
          { size: 16 }
        );
    },
    315585: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("75196");
      function i(e) {
        let {
          width: r = 14,
          height: t = 14,
          color: i = "currentColor",
          foreground: o,
          ...l
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(l),
          width: r,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, a.jsx)("path", {
            className: o,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    664336: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          Icon: function () {
            return g;
          },
          Divider: function () {
            return f;
          },
          default: function () {
            return b;
          },
        });
      var a = t("37983"),
        n = t("884691"),
        i = t("414456"),
        o = t.n(i),
        l = t("353386"),
        s = t("394846"),
        c = t("77078"),
        d = t("597590"),
        u = t("980428"),
        h = t("772280"),
        p = t("587974"),
        m = t("892307");
      let g = e => {
          let {
              className: r,
              iconClassName: t,
              children: n,
              selected: i = !1,
              disabled: l = !1,
              showBadge: s = !1,
              color: d,
              foreground: u,
              background: h,
              icon: g,
              onClick: f,
              onContextMenu: y,
              tooltip: b = null,
              tooltipColor: x,
              tooltipPosition: k = "bottom",
              tooltipDisabled: v,
              hideOnClick: C = !0,
              role: S,
              "aria-label": j,
              "aria-hidden": T,
              "aria-checked": w,
              "aria-expanded": N,
              "aria-haspopup": E,
            } = e,
            L = (0, a.jsx)(g, {
              x: 0,
              y: 0,
              width: 24,
              height: 24,
              className: o(t, m.icon),
              foreground: null != u ? u : void 0,
              background: null != h ? h : void 0,
              color: d,
            }),
            _ = j;
          return (
            null == _ && "string" == typeof b && (_ = b),
            (0, a.jsx)(c.Tooltip, {
              text: b,
              color: x,
              position: k,
              hideOnClick: C,
              shouldShow: !v,
              children: e => {
                let {
                  onMouseEnter: b,
                  onMouseLeave: x,
                  onFocus: k,
                  onBlur: v,
                } = e;
                return null == f
                  ? (0, a.jsx)("div", {
                      className: o(r, [m.iconWrapper]),
                      children: (0, a.jsx)(g, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: o(t, m.icon),
                        foreground: null != u ? u : void 0,
                        background: null != h ? h : void 0,
                        color: d,
                        "aria-hidden": T,
                        onMouseEnter: b,
                        onMouseLeave: x,
                        onFocus: k,
                        onBlur: v,
                      }),
                    })
                  : (0, a.jsxs)(c.Clickable, {
                      tag: "div",
                      onClick: l ? void 0 : f,
                      onContextMenu: l ? void 0 : y,
                      onMouseEnter: b,
                      onMouseLeave: x,
                      onFocus: k,
                      onBlur: v,
                      className: o(r, {
                        [m.iconWrapper]: !0,
                        [m.clickable]: !l && null != f,
                        [m.selected]: i,
                      }),
                      role: S,
                      "aria-label": _,
                      "aria-hidden": T,
                      "aria-checked": w,
                      "aria-haspopup": E,
                      "aria-expanded": N,
                      tabIndex: l || null == f ? -1 : 0,
                      children: [
                        s
                          ? (0, a.jsx)(p.default, {
                              mask: p.default.Masks.HEADER_BAR_BADGE,
                              children: L,
                            })
                          : L,
                        s
                          ? (0, a.jsx)("span", { className: m.iconBadge })
                          : null,
                        n,
                      ],
                    });
              },
            })
          );
        },
        f = e => {
          let { className: r } = e;
          return (0, a.jsx)("div", { className: o(m.divider, r) });
        },
        y = e => {
          let {
              className: r,
              innerClassName: t,
              children: i,
              childrenBottom: u,
              toolbar: h,
              onDoubleClick: p,
              "aria-label": g,
              "aria-labelledby": f,
              role: y,
              scrollable: b,
              transparent: x = !1,
            } = e,
            k = n.useRef(null),
            v = n.useContext(d.default);
          return (0, a.jsx)("section", {
            className: o(r, m.container, {
              [m.themed]: !x,
              [m.transparent]: x,
              [m.themedMobile]: s.isMobile,
            }),
            "aria-label": g,
            "aria-labelledby": f,
            role: y,
            ref: k,
            children: (0, a.jsxs)(c.FocusRingScope, {
              containerRef: k,
              children: [
                (0, a.jsxs)("div", {
                  className: m.upperContainer,
                  children: [
                    (0, a.jsxs)("div", {
                      className: o(m.children, t, { [m.scrollable]: b }),
                      onDoubleClick: p,
                      children: [
                        s.isMobile && null != v
                          ? (0, a.jsx)(l.default, {
                              onClick: v,
                              className: m.hamburger,
                            })
                          : null,
                        i,
                      ],
                    }),
                    null != h
                      ? (0, a.jsx)("div", { className: m.toolbar, children: h })
                      : null,
                  ],
                }),
                u,
              ],
            }),
          });
        };
      (y.Icon = g),
        (y.Title = e => {
          let {
              className: r,
              wrapperClassName: t,
              children: n,
              onContextMenu: i,
              onClick: l,
              id: s,
              muted: d = !1,
              level: u = 1,
            } = e,
            h = (0, a.jsx)(c.HeadingLevel, {
              forceLevel: u,
              children: (0, a.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: d ? "header-secondary" : void 0,
                className: o(r, m.title),
                id: s,
                children: n,
              }),
            });
          return null != l
            ? (0, a.jsx)(c.Clickable, {
                onClick: l,
                onContextMenu: i,
                className: o(t, m.titleWrapper),
                children: h,
              })
            : (0, a.jsx)("div", {
                className: o(t, m.titleWrapper),
                onContextMenu: i,
                children: h,
              });
        }),
        (y.Divider = f),
        (y.Caret = function (e) {
          let { direction: r = "right" } = e;
          return "right" === r
            ? (0, a.jsx)(h.default, { className: m.caret })
            : (0, a.jsx)(u.default, { className: m.caret });
        });
      var b = y;
    },
    457589: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          ReceiptIcon: function () {
            return o;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("669491"),
        i = t("82169");
      let o = e => {
        let {
          width: r = 24,
          height: t = 24,
          color: o = n.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...s
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, i.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: r,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M21 21.93V2.07a1 1 0 0 0-1.27-.97l-2.5.7a3 3 0 0 1-1.46.04l-3.12-.7a3 3 0 0 0-1.3 0l-3.12.7a3 3 0 0 1-1.45-.04l-2.51-.7A1 1 0 0 0 3 2.07v19.86a1 1 0 0 0 1.27.97l2.5-.7a3 3 0 0 1 1.46-.04l3.12.7a3 3 0 0 0 1.3 0l3.12-.7a3 3 0 0 1 1.45.04l2.51.7a1 1 0 0 0 1.27-.97ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
            clipRule: "evenodd",
            className: l,
          }),
        });
      };
    },
    900731: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var a = (0, t("237436").defineColorTokens)({
        "button-danger-background": { dark: "red.430", light: "red.430" },
        "button-danger-background-hover": { dark: "red.500", light: "red.500" },
        "button-danger-background-active": {
          dark: "red.530",
          light: "red.530",
        },
        "button-danger-background-disabled": {
          dark: "red.430",
          light: "red.430",
        },
        "button-positive-background": { dark: "green.430", light: "green.430" },
        "button-positive-background-hover": {
          dark: "green.500",
          light: "green.530",
          midnight: "green.530",
        },
        "button-positive-background-active": {
          dark: "green.530",
          light: "green.530",
        },
        "button-positive-background-disabled": {
          dark: "green.430",
          light: "green.430",
        },
        "button-secondary-background": {
          dark: "primary.500",
          light: "primary.430",
        },
        "button-secondary-background-hover": {
          dark: "primary.430",
          light: "primary.500",
        },
        "button-secondary-background-active": {
          dark: "primary.400",
          light: "primary.530",
        },
        "button-secondary-background-disabled": {
          dark: "primary.500",
          light: "primary.430",
        },
        "button-outline-danger-text": { dark: "white.500", light: "black.500" },
        "button-outline-danger-border": { dark: "red.400", light: "red.430" },
        "button-outline-danger-background": {
          dark: { color: "white.500", opacity: 0 },
          light: { color: "white.500", opacity: 0 },
        },
        "button-outline-danger-background-hover": {
          dark: "red.430",
          light: "red.430",
        },
        "button-outline-danger-text-hover": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-danger-border-hover": {
          dark: "red.430",
          light: "red.430",
        },
        "button-outline-danger-background-active": {
          dark: "red.460",
          light: "red.460",
        },
        "button-outline-danger-text-active": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-danger-border-active": {
          dark: "red.430",
          light: "red.430",
        },
        "button-outline-positive-text": {
          dark: "white.500",
          light: "black.500",
        },
        "button-outline-positive-border": {
          dark: "green.360",
          light: "green.400",
        },
        "button-outline-positive-background": {
          dark: { color: "white.500", opacity: 0 },
          light: { color: "white.500", opacity: 0 },
        },
        "button-outline-positive-background-hover": {
          dark: "green.430",
          light: "green.430",
        },
        "button-outline-positive-text-hover": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-positive-border-hover": {
          dark: "green.430",
          light: "green.430",
        },
        "button-outline-positive-background-active": {
          dark: "green.530",
          light: "green.530",
        },
        "button-outline-positive-text-active": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-positive-border-active": {
          dark: "green.530",
          light: "green.530",
        },
        "button-outline-brand-text": { dark: "white.500", light: "black.500" },
        "button-outline-brand-border": {
          dark: "brand.500",
          light: "brand.500",
        },
        "button-outline-brand-background": {
          dark: { color: "white.500", opacity: 0 },
          light: { color: "white.500", opacity: 0 },
        },
        "button-outline-brand-background-hover": {
          dark: "brand.500",
          light: "brand.500",
        },
        "button-outline-brand-text-hover": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-brand-border-hover": {
          dark: "brand.500",
          light: "brand.500",
        },
        "button-outline-brand-background-active": {
          dark: "brand.560",
          light: "brand.560",
        },
        "button-outline-brand-text-active": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-brand-border-active": {
          dark: "brand.560",
          light: "brand.560",
        },
        "button-outline-primary-text": {
          dark: "white.500",
          light: "black.500",
        },
        "button-outline-primary-border": {
          dark: "primary.500",
          light: "primary.530",
        },
        "button-outline-primary-background": {
          dark: { color: "white.500", opacity: 0 },
          light: { color: "white.500", opacity: 0 },
        },
        "button-outline-primary-background-hover": {
          dark: "primary.500",
          light: "primary.530",
        },
        "button-outline-primary-text-hover": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-primary-border-hover": {
          dark: "primary.500",
          light: "primary.530",
        },
        "button-outline-primary-background-active": {
          dark: "primary.430",
          light: "primary.600",
        },
        "button-outline-primary-text-active": {
          dark: "white.500",
          light: "white.500",
        },
        "button-outline-primary-border-active": {
          dark: "primary.430",
          light: "primary.600",
        },
        "button-creator-revenue-background": {
          dark: "teal.430",
          light: "teal.430",
        },
        "redesign-button-primary-text": { name: "white" },
        "redesign-button-primary-background": {
          dark: "brand.500",
          light: "brand.500",
        },
        "redesign-button-primary-pressed-background": {
          dark: "brand.560",
          light: "brand.560",
        },
        "redesign-button-primary-on-blurple-pressed-text": {
          dark: "brand.530",
          light: "brand.530",
        },
        "redesign-button-primary-alt-text": { name: "text-brand" },
        "redesign-button-primary-alt-border": { name: "text-brand" },
        "redesign-button-primary-alt-background": {
          dark: { color: "brand.500", opacity: 0 },
          light: { color: "brand.500", opacity: 0 },
        },
        "redesign-button-primary-alt-pressed-text": {
          dark: "brand.360",
          light: "brand.560",
        },
        "redesign-button-primary-alt-pressed-border": {
          dark: { color: "brand.400", opacity: 0.5 },
          light: "brand.330",
        },
        "redesign-button-primary-alt-pressed-background": {
          dark: { color: "brand.700", opacity: 0.16 },
          light: { color: "brand.500", opacity: 0.06 },
        },
        "redesign-button-primary-alt-on-blurple-text": { name: "white" },
        "redesign-button-primary-alt-on-blurple-border": { name: "white" },
        "redesign-button-primary-alt-on-blurple-background": {
          dark: { color: "brand.530", opacity: 0 },
          light: { color: "brand.530", opacity: 0 },
        },
        "redesign-button-primary-alt-on-blurple-pressed-border": {
          dark: "brand.360",
          light: "brand.360",
        },
        "redesign-button-primary-alt-on-blurple-pressed-background": {
          dark: { color: "brand.530", opacity: 1 },
          light: { color: "brand.530", opacity: 1 },
        },
        "redesign-button-secondary-text": { name: "text-primary" },
        "redesign-button-secondary-border": { name: "border-subtle" },
        "redesign-button-secondary-background": {
          dark: "primary.460",
          light: "white.500",
        },
        "redesign-button-secondary-pressed-border": {
          dark: { color: "white.500", opacity: 0 },
          light: { color: "black.500", opacity: 0.04 },
        },
        "redesign-button-secondary-pressed-background": {
          dark: "primary.500",
          light: "primary.130",
        },
        "redesign-button-danger-text": { name: "white" },
        "redesign-button-danger-background": {
          dark: "red.430",
          light: "red.430",
        },
        "redesign-button-danger-pressed-background": {
          dark: "red.460",
          light: "red.460",
        },
        "redesign-button-active-text": { name: "white" },
        "redesign-button-positive-text": { name: "white" },
        "redesign-button-positive-background": {
          dark: "green.430",
          light: "green.430",
        },
        "redesign-button-positive-pressed-background": {
          dark: "green.460",
          light: "green.460",
        },
        "redesign-button-overlay-text": {
          dark: "primary.860",
          light: "primary.860",
        },
        "redesign-button-overlay-background": { name: "white" },
        "redesign-button-primary-overlay-background": { name: "white" },
        "redesign-button-overlay-pressed-background": {
          dark: "primary.230",
          light: "primary.230",
        },
        "redesign-button-overlay-alpha-text": { name: "white" },
        "redesign-button-secondary-overlay-text": { name: "white" },
        "redesign-button-overlay-alpha-background": {
          dark: { color: "black.500", opacity: 0.54 },
          darker: { color: "black.500", opacity: 0.54 },
          midnight: { color: "black.500", opacity: 0.54 },
          light: { color: "black.500", opacity: 0.54 },
        },
        "redesign-button-overlay-alpha-pressed-background": {
          dark: { color: "black.500", opacity: 0.64 },
          darker: { color: "black.500", opacity: 0.64 },
          midnight: { color: "black.500", opacity: 0.64 },
          light: { color: "black.500", opacity: 0.64 },
        },
        "redesign-button-selected-background": {
          dark: { color: "brand.500", opacity: 0.24 },
          darker: { color: "brand.500", opacity: 0.24 },
          midnight: { color: "brand.500", opacity: 0.24 },
          light: { color: "brand.500", opacity: 0.16 },
        },
        "redesign-button-selected-pressed-background": {
          dark: { color: "brand.500", opacity: 0.28 },
          darker: { color: "brand.500", opacity: 0.28 },
          midnight: { color: "brand.500", opacity: 0.28 },
          light: { color: "brand.500", opacity: 0.24 },
        },
        "redesign-button-selected-text": { name: "bg-brand" },
      });
    },
    245768: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("237436");
      let n = { figma: { category: "embeds" } };
      var i = (0, a.defineColorTokens)({
        "embed-title": { name: "header-primary", meta: n },
        "embed-background": {
          light: { color: "primary.130" },
          dark: { color: "primary.630" },
          darker: { color: "plum.18" },
          midnight: { color: "plum.23" },
          meta: n,
        },
        "embed-background-alternate": {
          dark: { color: "primary.600" },
          light: { color: "primary.200" },
          meta: n,
        },
      });
    },
    591434: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("237436");
      let n = { figma: { category: "feedback" } };
      var i = (0, a.defineColorTokens)({
        "info-positive-background": {
          dark: { color: "green.360", opacity: 0.1 },
          light: { color: "green.400", opacity: 0.05 },
          meta: n,
        },
        "info-positive-foreground": {
          dark: "green.360",
          light: "green.400",
          meta: n,
        },
        "info-positive-text": {
          dark: "white.500",
          light: "black.500",
          meta: n,
        },
        "info-warning-background": {
          dark: { color: "yellow.300", opacity: 0.1 },
          light: { color: "yellow.400", opacity: 0.1 },
          meta: n,
        },
        "info-warning-foreground": {
          dark: "yellow.300",
          light: "yellow.400",
          meta: n,
        },
        "info-warning-text": { dark: "white.500", light: "black.500", meta: n },
        "info-danger-background": {
          dark: { color: "red.400", opacity: 0.1 },
          light: { color: "red.430", opacity: 0.1 },
          meta: n,
        },
        "info-danger-foreground": {
          dark: "red.400",
          light: "red.430",
          meta: n,
        },
        "info-danger-text": { dark: "white.500", light: "black.500", meta: n },
        "info-help-background": {
          dark: { color: "blue.345", opacity: 0.1 },
          light: { color: "blue.430", opacity: 0.1 },
          meta: n,
        },
        "info-help-foreground": {
          dark: "blue.345",
          light: "blue.430",
          meta: n,
        },
        "info-help-text": { dark: "white.500", light: "black.500", meta: n },
      });
    },
    448072: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("237436");
      let n = { figma: { category: "forms" } };
      var i = (0, a.defineColorTokens)({
        "input-background": {
          dark: "primary.700",
          light: "primary.200",
          meta: n,
        },
        "input-placeholder-text": {
          dark: "input-placeholder-text-dark",
          light: "primary.560",
          meta: n,
        },
        "redesign-input-control-selected": {
          dark: "brand.500",
          light: "brand.500",
        },
      });
    },
    497991: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          componentColorTokens: function () {
            return g;
          },
        });
      var a = t("900731"),
        n = t("245768"),
        i = t("591434"),
        o = t("448072"),
        l = t("868203"),
        s = t("143474"),
        c = t("602642"),
        d = t("765926"),
        u = t("846303"),
        h = t("445077"),
        p = t("5354"),
        m = t("832609");
      let g = {
        ...a.default,
        ...o.default,
        ...i.default,
        ...l.default,
        ...s.default,
        ...c.default,
        ...d.default,
        ...u.default,
        ...h.default,
        ...p.default,
        ...m.default,
        ...n.default,
      };
    },
    868203: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("237436");
      let n = { figma: { category: "chat" } };
      var i = (0, a.defineColorTokens)({
        "channel-text-area-placeholder": {
          dark: "primary.430",
          light: "primary.400",
          midnight: "primary.400",
          meta: n,
        },
        "channeltextarea-background": {
          dark: "primary.560",
          light: "primary.160",
          midnight: "primary.800",
          meta: n,
        },
        "text-message-preview-low-sat": {
          dark: "primary.360",
          darker: "plum.11",
          light: "primary.460",
          midnight: "plum.9",
        },
        "typing-indicator-bg": { name: "bg-base-secondary" },
      });
    },
    143474: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("237436");
      let n = { figma: { category: "misc" } };
      var i = (0, a.defineColorTokens)({
        "activity-card-background": {
          dark: "primary.700",
          light: "white.500",
          meta: n,
        },
        "logo-primary": { dark: "white.500", light: "brand.500", meta: n },
        "focus-primary": { dark: "blue.345", light: "blue.345", meta: n },
        "android-navigation-scrim-background": {
          dark: { color: "primary.830", opacity: 0.5 },
          light: { color: "primary.100", opacity: 0.5 },
          meta: n,
        },
        "bug-reporter-modal-submitting-background": {
          dark: { color: "primary.800", opacity: 0.6 },
          light: { color: "white.500", opacity: 0.6 },
          meta: n,
        },
        "forum-post-extra-media-count-container-background": {
          dark: { color: "primary.660", opacity: 0.8 },
          light: { color: "primary.160", opacity: 0.8 },
          meta: n,
        },
        "forum-post-tag-background": {
          dark: { color: "primary.660", opacity: 0.9 },
          light: { color: "primary.160", opacity: 0.9 },
          meta: n,
        },
        "live-stage-tile-border": {
          dark: { color: "primary.500", opacity: 0.6 },
          light: { color: "primary.430", opacity: 0.15 },
          meta: n,
        },
        "user-profile-header-overflow-background": {
          dark: { color: "primary.700", opacity: 0.5 },
          light: { color: "white.200", opacity: 0.5 },
          meta: n,
        },
        "display-banner-overflow-background": {
          dark: { color: "primary.700", opacity: 0.5 },
          light: { color: "white.200", opacity: 0.5 },
          meta: n,
        },
        "info-box-background": {
          dark: { color: "blue.345", opacity: 0.1 },
          light: { color: "blue.345", opacity: 0.1 },
          meta: n,
        },
        "home-card-resting-border": {
          dark: "transparent",
          light: { color: "primary.400", opacity: 0.24 },
        },
        "creator-revenue-locked-channel-icon": {
          dark: "teal.345",
          light: "teal.400",
        },
        "creator-revenue-icon-gradient-start": {
          dark: "teal.360",
          light: "teal.345",
        },
        "creator-revenue-icon-gradient-end": {
          dark: "teal.430",
          light: "teal.400",
        },
        "creator-revenue-progress-bar": { dark: "teal.400", light: "teal.345" },
        "creator-revenue-info-box-border": {
          dark: "teal.400",
          light: "teal.400",
        },
        "creator-revenue-info-box-background": {
          dark: { color: "teal.430", opacity: 0.1 },
          light: { color: "teal.430", opacity: 0.1 },
        },
        "guild-notifications-bottom-sheet-pill-background": {
          light: "white.500",
          dark: "primary.700",
        },
        "activity-card-icon-overlay": {
          dark: { color: "primary.600", opacity: 0.85 },
          light: { color: "primary.600", opacity: 0.85 },
        },
      });
    },
    602642: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var a = (0, t("237436").defineColorTokens)({
        "android-navigation-bar-background": {
          dark: "primary.830",
          light: "primary.100",
        },
        "android-ripple": {
          dark: { color: "white.500", opacity: 0.07 },
          light: { color: "black.500", opacity: 0.12 },
        },
        "navigator-header-tint": { dark: "white.500", light: "primary.500" },
      });
    },
    765926: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var a = (0, t("237436").defineColorTokens)({
        "modal-background": {
          dark: "primary.600",
          light: "white.500",
          meta: { figma: { category: "overlays" } },
        },
        "modal-footer-background": {
          dark: "primary.630",
          light: "primary.130",
          meta: { figma: { category: "overlays" } },
        },
        "blur-fallback": {
          light: { color: "primary.530", opacity: 0.96 },
          dark: { color: "primary.700", opacity: 0.96 },
          darker: { color: "plum.17", opacity: 0.96 },
          midnight: { color: "plum.19", opacity: 0.96 },
        },
        "blur-fallback-pressed": {
          light: { color: "primary.560", opacity: 0.96 },
          dark: { color: "primary.730", opacity: 0.96 },
          darker: { color: "plum.18", opacity: 0.96 },
          midnight: { color: "plum.20", opacity: 0.96 },
        },
        "theme-locked-blur-fallback": {
          light: { color: "primary.700", opacity: 0.96 },
          dark: { color: "primary.700", opacity: 0.96 },
          darker: { color: "primary.700", opacity: 0.96 },
          midnight: { color: "primary.700", opacity: 0.96 },
        },
        "voice-video-video-tile-background": {
          light: { color: "plum.17", opacity: 0.4 },
          dark: { color: "plum.17", opacity: 0.4 },
          darker: { color: "plum.17", opacity: 0.4 },
          midnight: { color: "plum.17", opacity: 0.4 },
        },
        "voice-video-video-tile-blur-fallback": {
          light: { color: "primary.700", opacity: 0.48 },
          dark: { color: "primary.700", opacity: 0.48 },
          darker: { color: "primary.700", opacity: 0.48 },
          midnight: { color: "primary.700", opacity: 0.48 },
        },
        "legacy-android-blur-overlay-default": {
          light: { color: "primary.130", opacity: 0.1 },
          dark: { color: "primary.660", opacity: 0.5 },
          meta: { figma: { ignore: !0 } },
        },
        "legacy-android-blur-overlay-ultra-thin": {
          light: { color: "white.500", opacity: 0.25 },
          dark: { color: "black.500", opacity: 0.025 },
          meta: { figma: { ignore: !0 } },
        },
        "legacy-blur-fallback-default": {
          light: { color: "primary.230", opacity: 0.975 },
          dark: { color: "primary.660", opacity: 0.975 },
          meta: { figma: { ignore: !0 } },
        },
        "legacy-blur-fallback-ultra-thin": {
          light: { color: "white.500", opacity: 0.95 },
          dark: { color: "black.500", opacity: 0.95 },
          meta: { figma: { ignore: !0 } },
        },
      });
    },
    846303: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var a = (0, t("237436").defineColorTokens)({
        "polls-normal-image-background": {
          dark: "primary.660",
          light: "white.500",
        },
        "polls-normal-fill-hover": {
          dark: "primary.600",
          light: "primary.230",
        },
        "polls-victor-fill": {
          dark: { color: "green.360", opacity: 0.2 },
          light: { color: "green.400", opacity: 0.2 },
        },
        "polls-voted-fill": {
          dark: { color: "brand.500", opacity: 0.2 },
          light: { color: "brand.500", opacity: 0.2 },
        },
      });
    },
    445077: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var a = t("237436");
      let n = { figma: { ignore: !0 } };
      var i = (0, a.defineColorTokens)({
        "profile-gradient-overlay-synced-with-user-theme": {
          dark: { color: "black.500", opacity: 0.8 },
          light: { color: "white.500", opacity: 0.8 },
          meta: n,
        },
        "profile-gradient-overlay": {
          dark: { color: "black.500", opacity: 0.6 },
          light: { color: "white.500", opacity: 0.6 },
          meta: n,
        },
        "profile-gradient-section-box": {
          dark: { color: "black.500", opacity: 0.45 },
          light: { color: "white.500", opacity: 0.45 },
          meta: n,
        },
        "profile-gradient-card-background": {
          dark: { color: "black.500", opacity: 0.7 },
          light: { color: "white.500", opacity: 0.7 },
          meta: n,
        },
        "profile-gradient-message-input-border": {
          dark: { color: "primary.500", opacity: 0.48 },
          light: { color: "primary.430", opacity: 0.24 },
          meta: n,
        },
        "profile-gradient-note-background": {
          dark: { color: "black.500", opacity: 0.3 },
          light: { color: "white.500", opacity: 0.3 },
          meta: n,
        },
        "profile-gradient-profile-body-background-hover": {
          dark: { color: "white.500", opacity: 0.16 },
          light: { color: "black.500", opacity: 0.08 },
          meta: n,
        },
        "profile-gradient-role-pill-background": {
          dark: { color: "primary.660", opacity: 0.5 },
          light: { color: "white.500", opacity: 0.5 },
          meta: n,
        },
        "profile-gradient-role-pill-border": {
          dark: { color: "white.500", opacity: 0.2 },
          light: { color: "primary.660", opacity: 0.2 },
          meta: n,
        },
      });
    },
    5354: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var a = (0, t("237436").defineColorTokens)({
        "scrollbar-thin-thumb": {
          dark: "primary.730",
          light: { color: "primary.500", opacity: 0.3 },
          midnight: "primary.700",
        },
        "scrollbar-thin-track": {
          dark: { color: "black.500", opacity: 0 },
          light: { color: "black.500", opacity: 0 },
        },
        "scrollbar-auto-thumb": {
          dark: "primary.730",
          light: "primary.300",
          midnight: "primary.600",
        },
        "scrollbar-auto-track": {
          dark: "primary.630",
          light: "primary.160",
          midnight: "primary.860",
        },
        "scrollbar-auto-scrollbar-color-thumb": {
          dark: "primary.730",
          light: "primary.230",
          midnight: "primary.700",
        },
        "scrollbar-auto-scrollbar-color-track": {
          dark: "primary.630",
          light: "primary.130",
        },
      });
    },
    832609: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var a = (0, t("237436").defineColorTokens)({
        "status-online": { dark: "green.360", light: "green.400" },
        "status-idle": { dark: "yellow.300", light: "yellow.400" },
        "status-dnd": { dark: "red.400", light: "red.430" },
        "status-offline": { dark: "primary.360", light: "primary.460" },
      });
    },
    928114: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          gradients: function () {
            return a;
          },
        });
      let a = {
        "card-primary-bg": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "white.500", opacity: 0.75 },
        },
        "card-primary-pressed-bg": {
          dark: { color: "white.500", opacity: 0.05 },
          light: { color: "white.500", opacity: 0.075 },
        },
        "card-secondary-bg": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "white.500", opacity: 0.4 },
        },
        "card-secondary-pressed-bg": {
          dark: { color: "white.500", opacity: 0.05 },
          light: { color: "white.500", opacity: 0.75 },
        },
        "bg-mod-faint": {
          dark: { color: "white.500", opacity: 0.05 },
          light: { color: "black.500", opacity: 0.05 },
        },
        "bg-mod-subtle": {
          dark: { color: "white.500", opacity: 0.075 },
          light: { color: "black.500", opacity: 0.075 },
        },
        "bg-mod-strong": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "black.500", opacity: 0.1 },
        },
        "bg-base-primary": {
          dark: { color: "black.500", opacity: 0.7 },
          light: { color: "white.500", opacity: 0.8 },
        },
        "bg-base-secondary": {
          dark: { color: "black.500", opacity: 0.7 },
          light: { color: "white.500", opacity: 0.8 },
        },
        "bg-base-tertiary": {
          dark: { color: "black.500", opacity: 0.7 },
          light: { color: "white.500", opacity: 0.8 },
        },
        "bg-surface-raised": {
          dark: { color: "black.500", opacity: 0.5 },
          light: { color: "white.500", opacity: 0.5 },
        },
        "bg-surface-overlay": {
          dark: { color: "black.500", opacity: 0.5 },
          light: { color: "white.500", opacity: 0.5 },
        },
        "bg-surface-overlay-tmp": {
          dark: { color: "black.500", opacity: 0.5 },
          light: { color: "white.500", opacity: 0.5 },
        },
        "bg-backdrop": {
          dark: {
            color: "gradient.start",
            saturation: 0.25,
            lightness: 0.1,
            opacity: 0.7,
          },
          light: {
            color: "gradient.start",
            saturation: 0.2,
            lightness: 0.3,
            opacity: 0.7,
          },
        },
        "redesign-button-secondary-background": {
          dark: { color: "gradient.end", opacity: 0.1 },
          light: { color: "gradient.end", opacity: 0.1 },
        },
        "redesign-button-secondary-pressed-background": {
          dark: { color: "gradient.end", opacity: 0.2 },
          light: { color: "gradient.end", opacity: 0.2 },
        },
        "redesign-button-primary-pressed-background": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "black.500", opacity: 0.1 },
        },
        "redesign-activity-card-background-pressed": {
          dark: { color: "white.500", opacity: 0.2 },
          light: { color: "black.500", opacity: 0.2 },
        },
        "redesign-activity-card-border": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "black.500", opacity: 0.1 },
        },
        "input-background": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "black.500", opacity: 0.1 },
        },
        "background-secondary-alt": {
          dark: { color: "black.500", opacity: 0.5 },
          light: { color: "white.500", opacity: 0.5 },
        },
        "background-primary": {
          dark: { color: "black.500", opacity: 0.5 },
          light: { color: "white.500", opacity: 0.5 },
        },
        "background-nested-floating": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "black.500", opacity: 0.1 },
        },
        "background-accent": {
          dark: {
            color: "gradient.mid",
            opacity: 0.3,
            lightness: 0.75,
            saturation: "*1.2",
          },
          light: { color: "gradient.mid", opacity: 0.4, lightness: "*0.75" },
        },
        "interactive-muted": {
          dark: { color: "white.500", opacity: 0.3 },
          light: { color: "black.500", opacity: 0.3 },
        },
        "panel-bg": {
          dark: { color: "black.500", opacity: 0.2 },
          light: { color: "white.500", opacity: 0.2 },
        },
        "typing-indicator-bg": {
          dark: {
            color: "gradient.end",
            lightness: "*1.5",
            saturation: "*1.2",
            opacity: 0.9,
          },
          light: {
            color: "gradient.end",
            lightness: "*0.9",
            saturation: "*0.9",
            opacity: 0.9,
          },
        },
        "toast-bg": {
          dark: {
            color: "gradient.start",
            lightness: 0.4,
            saturation: 0.5,
            opacity: 0.95,
          },
          light: {
            color: "gradient.start",
            lightness: 0.7,
            saturation: 0.5,
            opacity: 0.95,
          },
        },
        "chat-banner-bg": {
          dark: { color: "gradient.start", opacity: 1 },
          light: { color: "gradient.start" },
        },
        "expression-picker-bg": {
          dark: { color: "gradient.end", lightness: "*0.95" },
          light: { color: "gradient.end", lightness: "*1.05" },
        },
        "action-sheet-gradient-bg": {
          dark: { color: "gradient.mid", lightness: 0.12, saturation: "*0.5" },
          light: {
            color: "gradient.mid",
            lightness: 0.925,
            saturation: "*0.8",
          },
        },
        "you-bar-bg": {
          dark: { color: "gradient.mid", lightness: 0.16 },
          light: { color: "gradient.mid", lightness: 0.98 },
        },
        "embed-background": {
          dark: { color: "white.500", opacity: 0.1 },
          light: { color: "white.500", opacity: 0.25 },
        },
        "embed-background-alternate": {
          dark: { color: "white.500", opacity: 0.075 },
          light: { color: "white.500", opacity: 0.25 },
        },
      };
    },
    111940: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          rawPalette: function () {
            return a;
          },
        });
      let a = {
        "red.100": { hex: "#fef8f9" },
        "red.130": { hex: "#fef4f4" },
        "red.160": { hex: "#feeaea" },
        "red.200": { hex: "#fdddde" },
        "red.230": { hex: "#fbcdce" },
        "red.260": { hex: "#fbbabb" },
        "red.300": { hex: "#fba6a8" },
        "red.330": { hex: "#fa9193" },
        "red.345": { hex: "#fa777b" },
        "red.360": { hex: "#f85b5f" },
        "red.400": { hex: "#f23f43" },
        "red.430": { hex: "#da373c" },
        "red.460": { hex: "#bb3033" },
        "red.500": { hex: "#a12829" },
        "red.530": { hex: "#8f2022" },
        "red.560": { hex: "#7f1c1e" },
        "red.600": { hex: "#70181a" },
        "red.630": { hex: "#651517" },
        "red.660": { hex: "#5a1314" },
        "red.700": { hex: "#501012" },
        "red.730": { hex: "#460e0f" },
        "red.760": { hex: "#3f0b0c" },
        "red.800": { hex: "#360a0b" },
        "red.830": { hex: "#2e090a" },
        "red.860": { hex: "#280808" },
        "red.900": { hex: "#220606" },
        "orange.100": { hex: "#fff8f5" },
        "orange.130": { hex: "#fff4ed" },
        "orange.160": { hex: "#feeadf" },
        "orange.200": { hex: "#fddecd" },
        "orange.230": { hex: "#fccfb2" },
        "orange.260": { hex: "#fcbd95" },
        "orange.300": { hex: "#fbab70" },
        "orange.330": { hex: "#fa9746" },
        "orange.345": { hex: "#f1882a" },
        "orange.360": { hex: "#db7628" },
        "orange.400": { hex: "#c46926" },
        "orange.430": { hex: "#ac591f" },
        "orange.460": { hex: "#9b4c19" },
        "orange.500": { hex: "#8c4013" },
        "orange.530": { hex: "#7b3710" },
        "orange.560": { hex: "#6d300e" },
        "orange.600": { hex: "#5f2b0b" },
        "orange.630": { hex: "#56260a" },
        "orange.660": { hex: "#4c2209" },
        "orange.700": { hex: "#431e09" },
        "orange.730": { hex: "#3b1a07" },
        "orange.760": { hex: "#331606" },
        "orange.800": { hex: "#2d1305" },
        "orange.830": { hex: "#261005" },
        "orange.860": { hex: "#200e05" },
        "orange.900": { hex: "#190d04" },
        "yellow.100": { hex: "#fff8ef" },
        "yellow.130": { hex: "#fff4e8" },
        "yellow.160": { hex: "#ffebd3" },
        "yellow.200": { hex: "#fee0b6" },
        "yellow.230": { hex: "#fdd18c" },
        "yellow.260": { hex: "#fcc145" },
        "yellow.300": { hex: "#f0b232" },
        "yellow.330": { hex: "#e1a42a" },
        "yellow.345": { hex: "#d49824" },
        "yellow.360": { hex: "#bf861c" },
        "yellow.400": { hex: "#af7615" },
        "yellow.430": { hex: "#9a650d" },
        "yellow.460": { hex: "#8a5709" },
        "yellow.500": { hex: "#7c4b04" },
        "yellow.530": { hex: "#6d4104" },
        "yellow.560": { hex: "#613803" },
        "yellow.600": { hex: "#543203" },
        "yellow.630": { hex: "#4c2d03" },
        "yellow.660": { hex: "#432803" },
        "yellow.700": { hex: "#3b2303" },
        "yellow.730": { hex: "#351e02" },
        "yellow.760": { hex: "#2e1a02" },
        "yellow.800": { hex: "#271602" },
        "yellow.830": { hex: "#221302" },
        "yellow.860": { hex: "#1c1002" },
        "yellow.900": { hex: "#160e02" },
        "green.100": { hex: "#ecfef1" },
        "green.130": { hex: "#defee7" },
        "green.160": { hex: "#bdfcd3" },
        "green.200": { hex: "#88fbb5" },
        "green.230": { hex: "#58f39c" },
        "green.260": { hex: "#48e58b" },
        "green.300": { hex: "#3bd67f" },
        "green.330": { hex: "#2dc771" },
        "green.345": { hex: "#26b968" },
        "green.360": { hex: "#23a55a" },
        "green.400": { hex: "#24934e" },
        "green.430": { hex: "#248045" },
        "green.460": { hex: "#1f703c" },
        "green.500": { hex: "#1a6334" },
        "green.530": { hex: "#15562b" },
        "green.560": { hex: "#124c24" },
        "green.600": { hex: "#0e431f" },
        "green.630": { hex: "#0c3c1c" },
        "green.660": { hex: "#0a3618" },
        "green.700": { hex: "#072f15" },
        "green.730": { hex: "#052910" },
        "green.760": { hex: "#03240e" },
        "green.800": { hex: "#031f0c" },
        "green.830": { hex: "#031b0a" },
        "green.860": { hex: "#041708" },
        "green.900": { hex: "#051307" },
        "blue.100": { hex: "#f6fafe" },
        "blue.130": { hex: "#f0f7fe" },
        "blue.160": { hex: "#e2f0fd" },
        "blue.200": { hex: "#cde8fd" },
        "blue.230": { hex: "#b2ddfc" },
        "blue.260": { hex: "#94d2fc" },
        "blue.300": { hex: "#66c4fd" },
        "blue.330": { hex: "#2eb6ff" },
        "blue.345": { hex: "#00aafc" },
        "blue.360": { hex: "#0097f2" },
        "blue.400": { hex: "#0082eb" },
        "blue.430": { hex: "#006be7" },
        "blue.460": { hex: "#005cd1" },
        "blue.500": { hex: "#0051b6" },
        "blue.530": { hex: "#00489b" },
        "blue.560": { hex: "#004088" },
        "blue.600": { hex: "#003976" },
        "blue.630": { hex: "#00336a" },
        "blue.660": { hex: "#002d5f" },
        "blue.700": { hex: "#002855" },
        "blue.730": { hex: "#002348" },
        "blue.760": { hex: "#001e3f" },
        "blue.800": { hex: "#001a36" },
        "blue.830": { hex: "#001630" },
        "blue.860": { hex: "#00132b" },
        "blue.900": { hex: "#001024" },
        "teal.100": { hex: "#f4fbfd" },
        "teal.130": { hex: "#e9f9fd" },
        "teal.160": { hex: "#d3f4fb" },
        "teal.200": { hex: "#b1eff9" },
        "teal.230": { hex: "#7ee7f7" },
        "teal.260": { hex: "#5edbef" },
        "teal.300": { hex: "#47cbe2" },
        "teal.330": { hex: "#35bcd5" },
        "teal.345": { hex: "#2eb0c9" },
        "teal.360": { hex: "#289fb6" },
        "teal.400": { hex: "#248da1" },
        "teal.430": { hex: "#207a8d" },
        "teal.460": { hex: "#1b6b7c" },
        "teal.500": { hex: "#175e6d" },
        "teal.530": { hex: "#13525f" },
        "teal.560": { hex: "#0f4954" },
        "teal.600": { hex: "#0c4049" },
        "teal.630": { hex: "#0a3942" },
        "teal.660": { hex: "#08333a" },
        "teal.700": { hex: "#062d34" },
        "teal.730": { hex: "#05272d" },
        "teal.760": { hex: "#042227" },
        "teal.800": { hex: "#031d21" },
        "teal.830": { hex: "#02191d" },
        "teal.860": { hex: "#021619" },
        "teal.900": { hex: "#011215" },
        "white.100": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.130": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.160": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.200": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.230": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.260": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.300": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.330": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.345": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.360": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.400": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.430": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.460": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.500": { hex: "#ffffff" },
        "white.530": { hex: "#e8e8e8", meta: { figma: { ignore: !0 } } },
        "white.560": { hex: "#cfcfcf", meta: { figma: { ignore: !0 } } },
        "white.600": { hex: "#adadad", meta: { figma: { ignore: !0 } } },
        "white.630": { hex: "#969696", meta: { figma: { ignore: !0 } } },
        "white.660": { hex: "#838383", meta: { figma: { ignore: !0 } } },
        "white.700": { hex: "#666666", meta: { figma: { ignore: !0 } } },
        "white.730": { hex: "#5f5f5f", meta: { figma: { ignore: !0 } } },
        "white.760": { hex: "#585858", meta: { figma: { ignore: !0 } } },
        "white.800": { hex: "#4d4d4d", meta: { figma: { ignore: !0 } } },
        "white.830": { hex: "#3b3b3b", meta: { figma: { ignore: !0 } } },
        "white.860": { hex: "#262626", meta: { figma: { ignore: !0 } } },
        "white.900": { hex: "#0d0d0d", meta: { figma: { ignore: !0 } } },
        "black.100": { hex: "#f2f2f2", meta: { figma: { ignore: !0 } } },
        "black.130": { hex: "#e8e8e8", meta: { figma: { ignore: !0 } } },
        "black.160": { hex: "#dadada", meta: { figma: { ignore: !0 } } },
        "black.200": { hex: "#cccccc", meta: { figma: { ignore: !0 } } },
        "black.230": { hex: "#bdbdbd", meta: { figma: { ignore: !0 } } },
        "black.260": { hex: "#acacac", meta: { figma: { ignore: !0 } } },
        "black.300": { hex: "#999999", meta: { figma: { ignore: !0 } } },
        "black.330": { hex: "#7a7a7a", meta: { figma: { ignore: !0 } } },
        "black.345": { hex: "#666666", meta: { figma: { ignore: !0 } } },
        "black.360": { hex: "#5c5c5c", meta: { figma: { ignore: !0 } } },
        "black.400": { hex: "#333333", meta: { figma: { ignore: !0 } } },
        "black.430": { hex: "#252525", meta: { figma: { ignore: !0 } } },
        "black.460": { hex: "#141414", meta: { figma: { ignore: !0 } } },
        "black.500": { hex: "#000000" },
        "black.530": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.560": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.600": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.630": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.660": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.700": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.730": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.760": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.800": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.830": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.860": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.900": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "brand.100": { hex: "#f7f7fe" },
        "brand.130": { hex: "#f0f1fe" },
        "brand.160": { hex: "#e7e9fd" },
        "brand.200": { hex: "#dee0fc" },
        "brand.230": { hex: "#d4d7fc" },
        "brand.260": { hex: "#c9cdfb" },
        "brand.300": { hex: "#bcc1fa" },
        "brand.330": { hex: "#a8aff8" },
        "brand.345": { hex: "#9ba3f7" },
        "brand.360": { hex: "#949cf7" },
        "brand.400": { hex: "#7984f5" },
        "brand.430": { hex: "#707bf4" },
        "brand.460": { hex: "#6571f3" },
        "brand.500": { hex: "#5865f2" },
        "brand.530": { hex: "#505cdc" },
        "brand.560": { hex: "#4752c4" },
        "brand.600": { hex: "#3c45a5" },
        "brand.630": { hex: "#343b8f" },
        "brand.660": { hex: "#2d347d" },
        "brand.700": { hex: "#232861" },
        "brand.730": { hex: "#21265b" },
        "brand.760": { hex: "#1e2353" },
        "brand.800": { hex: "#1a1e49" },
        "brand.830": { hex: "#141738" },
        "brand.860": { hex: "#0d0f24" },
        "brand.900": { hex: "#04050c" },
        "primary.100": { hex: "#f9f9f9" },
        "primary.130": { hex: "#f2f3f5" },
        "primary.160": { hex: "#ebedef" },
        "primary.200": { hex: "#e3e5e8" },
        "primary.230": { hex: "#dbdee1" },
        "primary.260": { hex: "#d2d5d9" },
        "primary.300": { hex: "#c4c9ce" },
        "primary.330": { hex: "#b5bac1" },
        "primary.345": { hex: "#a5abb3" },
        "primary.360": { hex: "#949ba4" },
        "primary.400": { hex: "#80848e" },
        "primary.430": { hex: "#6d6f78" },
        "primary.460": { hex: "#5c5e66" },
        "primary.500": { hex: "#4e5058" },
        "primary.530": { hex: "#41434a" },
        "primary.560": { hex: "#383a40" },
        "primary.600": { hex: "#313338" },
        "primary.630": { hex: "#2b2d31" },
        "primary.645": { hex: "#282a2e" },
        "primary.660": { hex: "#232428" },
        "primary.700": { hex: "#1e1f22" },
        "primary.730": { hex: "#1a1b1e" },
        "primary.760": { hex: "#161719" },
        "primary.800": { hex: "#111214" },
        "primary.830": { hex: "#0c0c0d" },
        "primary.860": { hex: "#060607" },
        "primary.900": { hex: "#020202" },
        "plum.0": { hex: "#f9f9fa" },
        "plum.1": { hex: "#f3f3f4" },
        "plum.2": { hex: "#ecedef" },
        "plum.3": { hex: "#e4e5e8" },
        "plum.4": { hex: "#dddee1" },
        "plum.5": { hex: "#d3d5d9" },
        "plum.6": { hex: "#c7c8ce" },
        "plum.7": { hex: "#b8bac1" },
        "plum.8": { hex: "#a8aab4" },
        "plum.9": { hex: "#9597a3" },
        "plum.10": { hex: "#818491" },
        "plum.11": { hex: "#6c6f7c" },
        "plum.12": { hex: "#5b5e6a" },
        "plum.13": { hex: "#4d505b" },
        "plum.14": { hex: "#41434d" },
        "plum.15": { hex: "#383a43" },
        "plum.16": { hex: "#31323b" },
        "plum.17": { hex: "#2c2d35" },
        "plum.18": { hex: "#26272f" },
        "plum.19": { hex: "#212229" },
        "plum.20": { hex: "#1c1d23" },
        "plum.21": { hex: "#18191f" },
        "plum.22": { hex: "#16161c" },
        "plum.23": { hex: "#131318" },
        "plum.24": { hex: "#0f1014" },
        "plum.25": { hex: "#0c0c10" },
        "plum.26": { hex: "#08080b" },
      };
    },
    133198: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          semanticColorTokens: function () {
            return i;
          },
        });
      let a = { figma: { category: "chat" } },
        n = { figma: { ignore: !0 } },
        i = {
          "background-accent": { dark: "primary.530", light: "primary.430" },
          "background-floating": { dark: "primary.800", light: "white.500" },
          "background-mentioned": {
            dark: { color: "yellow.300", opacity: 0.1 },
            light: { color: "yellow.300", opacity: 0.1 },
          },
          "background-mentioned-hover": {
            dark: { color: "yellow.300", opacity: 0.08 },
            light: { color: "yellow.300", opacity: 0.2 },
          },
          "background-message-automod": {
            dark: { color: "red.400", opacity: 0.05 },
            light: { color: "red.400", opacity: 0.05 },
          },
          "background-message-automod-hover": {
            dark: { color: "red.400", opacity: 0.1 },
            light: { color: "red.400", opacity: 0.1 },
          },
          "background-message-highlight": {
            dark: { color: "brand.360", opacity: 0.08 },
            light: { color: "brand.360", opacity: 0.1 },
          },
          "background-message-highlight-hover": {
            dark: { color: "brand.360", opacity: 0.06 },
            light: { color: "brand.360", opacity: 0.2 },
          },
          "background-message-hover": {
            dark: { color: "primary.900", opacity: 0.06 },
            light: { color: "primary.900", opacity: 0.03 },
          },
          "background-mobile-primary": {
            dark: "primary.600",
            light: "primary.100",
          },
          "background-mobile-secondary": {
            dark: "primary.630",
            light: "white.500",
          },
          "background-modifier-accent": {
            dark: { color: "primary.500", opacity: 0.48 },
            light: { color: "primary.400", opacity: 0.24 },
          },
          "background-modifier-accent-2": {
            dark: { color: "primary.500", opacity: 0.48 },
            light: { color: "primary.400", opacity: 0.24 },
          },
          "background-modifier-active": {
            dark: { color: "primary.500", opacity: 0.48 },
            light: { color: "primary.400", opacity: 0.2 },
          },
          "background-modifier-hover": {
            dark: { color: "primary.500", opacity: 0.3 },
            light: { color: "primary.400", opacity: 0.16 },
          },
          "background-modifier-selected": {
            dark: { color: "primary.500", opacity: 0.6 },
            light: { color: "primary.400", opacity: 0.24 },
          },
          "background-nested-floating": {
            dark: "primary.630",
            light: "white.500",
          },
          "background-primary": {
            dark: "primary.600",
            light: "white.500",
            meta: {
              description: "Background for the main content area of the app",
            },
          },
          "background-secondary": {
            dark: "primary.630",
            light: "primary.130",
            meta: {
              description:
                "Background for the secondary content area of the app",
            },
          },
          "background-secondary-alt": {
            dark: "primary.660",
            light: "primary.160",
            meta: {
              description:
                "Alternative for the secondary content area of the app",
            },
          },
          "background-tertiary": {
            dark: "primary.700",
            light: "primary.200",
            meta: {
              description:
                "Background for the tertiary content area of the app",
            },
          },
          black: { dark: "black.500", light: "black.500", meta: n },
          "border-strong": {
            meta: {
              description:
                "A stronger border for use in components that require a more prominent border",
            },
            dark: { color: "white.500", opacity: 0.16 },
            light: { color: "black.500", opacity: 0.16 },
          },
          "border-subtle": {
            meta: {
              description:
                "A subtle border for use in components that require a less prominent border",
            },
            dark: { color: "white.500", opacity: 0.08 },
            light: { color: "black.500", opacity: 0.08 },
          },
          "channel-icon": {
            dark: "primary.400",
            light: "primary.430",
            meta: a,
          },
          "channels-default": {
            dark: "primary.360",
            light: "primary.460",
            meta: a,
          },
          "chat-background": {
            dark: "primary.600",
            light: "white.500",
            meta: a,
          },
          "chat-border": { dark: "primary.700", light: "primary.200", meta: a },
          "chat-input-container-background": {
            dark: "primary.600",
            light: "white.500",
            meta: a,
          },
          "chat-swipe-to-reply-background": {
            dark: "primary.660",
            light: "primary.160",
            darker: "plum.22",
            midnight: "plum.22",
            meta: a,
          },
          "chat-swipe-to-reply-gradient-background": {
            dark: { color: "black.500", opacity: 0.1 },
            light: { color: "white.500", opacity: 0.4 },
            darker: { color: "black.500", opacity: 0.1 },
            midnight: { color: "black.500", opacity: 0.1 },
            meta: a,
          },
          "control-brand-foreground": {
            dark: "brand.360",
            light: "brand.500",
            meta: { figma: { category: "misc" } },
          },
          "control-brand-foreground-new": {
            dark: "brand.360",
            light: "brand.500",
            meta: n,
          },
          "deprecated-card-bg": {
            dark: { color: "primary.700", opacity: 0.6 },
            light: "primary.100",
            meta: n,
          },
          "deprecated-card-editable-bg": {
            dark: { color: "primary.700", opacity: 0.3 },
            light: { color: "primary.100", opacity: 0.6 },
            meta: n,
          },
          "deprecated-quickswitcher-input-background": {
            dark: "primary.400",
            light: "white.500",
            meta: n,
          },
          "deprecated-quickswitcher-input-placeholder": {
            dark: { color: "white.500", opacity: 0.3 },
            light: { color: "primary.500", opacity: 0.3 },
            meta: n,
          },
          "deprecated-store-bg": {
            dark: "primary.600",
            light: "primary.100",
            meta: n,
          },
          "deprecated-text-input-bg": {
            dark: "primary.700",
            light: "primary.200",
            meta: n,
          },
          "deprecated-text-input-border": {
            dark: { color: "black.500", opacity: 0.3 },
            light: { color: "primary.500", opacity: 0.3 },
            meta: n,
          },
          "deprecated-text-input-border-disabled": {
            dark: "primary.700",
            light: "primary.200",
            meta: n,
          },
          "deprecated-text-input-border-hover": {
            dark: "primary.900",
            light: "primary.300",
            meta: n,
          },
          "deprecated-text-input-prefix": {
            dark: "primary.200",
            light: "primary.300",
            meta: n,
          },
          "divider-strong": {
            dark: { color: "white.500", opacity: 0.16 },
            light: { color: "black.500", opacity: 0.16 },
          },
          "divider-subtle": {
            dark: { color: "white.500", opacity: 0.08 },
            light: { color: "black.500", opacity: 0.08 },
          },
          "header-muted": { dark: "primary.360", light: "primary.460" },
          "header-primary": { dark: "primary.130", light: "primary.860" },
          "header-secondary": { dark: "primary.330", light: "primary.500" },
          "home-background": {
            dark: "primary.645",
            light: "primary.100",
            meta: { figma: { category: "background" } },
          },
          "icon-muted": { dark: "primary.500", light: "primary.300" },
          "icon-primary": { dark: "primary.130", light: "primary.860" },
          "icon-secondary": { dark: "primary.330", light: "primary.500" },
          "interactive-active": { dark: "white.500", light: "primary.860" },
          "interactive-hover": { dark: "primary.230", light: "primary.600" },
          "interactive-muted": { dark: "primary.500", light: "primary.300" },
          "interactive-normal": { dark: "primary.330", light: "primary.500" },
          "mention-background": {
            dark: { color: "brand.500", opacity: 0.3 },
            light: { color: "brand.500", opacity: 0.15 },
            meta: a,
          },
          "mention-foreground": {
            dark: "brand.260",
            light: "brand.500",
            meta: a,
          },
          "redesign-activity-card-background": {
            dark: "primary.560",
            light: "white.500",
          },
          "redesign-activity-card-background-pressed": {
            dark: "primary.630",
            light: "primary.160",
          },
          "redesign-activity-card-badge-icon": {
            dark: "primary.400",
            light: "primary.400",
          },
          "redesign-activity-card-border": {
            dark: { color: "white.500", opacity: 0.02 },
            light: { color: "primary.400", opacity: 0.24 },
          },
          "redesign-activity-card-overflow-background": {
            dark: "primary.630",
            darker: "plum.17",
            light: "primary.230",
          },
          "redesign-only-background-active": {
            dark: "primary.530",
            light: "primary.430",
          },
          "redesign-only-background-default": {
            dark: "primary.600",
            light: "white.500",
          },
          "redesign-only-background-overlay": {
            dark: "primary.645",
            light: "primary.160",
          },
          "redesign-only-background-raised": {
            dark: "primary.630",
            light: "primary.130",
          },
          "redesign-only-background-sunken": {
            dark: "primary.660",
            light: "primary.200",
          },
          "spoiler-hidden-background": {
            dark: "primary.700",
            light: "primary.200",
            meta: a,
          },
          "spoiler-revealed-background": {
            dark: "primary.660",
            light: "primary.160",
            meta: a,
          },
          "status-danger": { dark: "red.400", light: "red.430" },
          "status-danger-background": { dark: "red.400", light: "red.430" },
          "status-danger-text": { dark: "white.500", light: "white.500" },
          "status-positive": { dark: "green.360", light: "green.400" },
          "status-positive-background": {
            dark: "green.430",
            light: "green.430",
          },
          "status-positive-text": { dark: "white.500", light: "white.500" },
          "status-warning": { dark: "yellow.300", light: "yellow.400" },
          "status-warning-background": {
            dark: "yellow.300",
            light: "yellow.400",
          },
          "status-warning-text": { dark: "black.500", light: "white.500" },
          "status-speaking": { dark: "green.360", light: "green.360" },
          "halo-positive": {
            dark: { color: "green.360", opacity: 0.24 },
            light: { color: "green.360", opacity: 0.24 },
          },
          "text-brand": { dark: "brand.360", light: "brand.500" },
          "text-danger": { dark: "red.345", light: "red.500" },
          "text-link": { dark: "blue.345", light: "blue.430" },
          "text-link-low-saturation": {
            dark: "blue.330",
            light: "blue.430",
            meta: n,
          },
          "text-low-contrast": { dark: "primary.360", light: "primary.460" },
          "text-muted": { dark: "primary.360", light: "primary.460" },
          "text-muted-on-default": {
            dark: "primary.330",
            light: "primary.430",
          },
          "text-normal": { dark: "primary.230", light: "primary.600" },
          "text-positive": { dark: "green.330", light: "green.430" },
          "text-primary": { dark: "primary.230", light: "primary.600" },
          "text-secondary": { dark: "primary.330", light: "primary.500" },
          "text-warning": { dark: "yellow.300", light: "yellow.430" },
          "textbox-markdown-syntax": {
            dark: "primary.360",
            light: "primary.530",
            meta: a,
          },
          white: { dark: "white.500", light: "white.500", meta: n },
          "bg-brand": { dark: "brand.500", light: "brand.500", meta: n },
          "card-gradient-bg": {
            dark: { color: "black.500", opacity: 0.4 },
            light: { color: "white.500", opacity: 0.7 },
            meta: n,
          },
          "card-gradient-pressed-bg": {
            dark: { color: "black.500", opacity: 0.5 },
            light: { color: "white.500", opacity: 0.5 },
            meta: n,
          },
          "bg-backdrop-no-opacity": {
            light: { color: "black.500" },
            darker: { color: "black.500" },
            midnight: { color: "plum.19" },
            dark: { color: "black.500" },
          },
          "coachmark-bg": { name: "bg-surface-overlay" },
          "toast-bg": { name: "bg-surface-overlay" },
          "alert-bg": { name: "bg-base-primary" },
          "chat-banner-bg": { name: "bg-base-secondary" },
          "guild-icon-inactive-bg": { name: "bg-base-secondary" },
          "guild-icon-inactive-nested-bg": { name: "bg-base-primary" },
          "expression-picker-bg": { name: "bg-base-secondary" },
          "action-sheet-gradient-bg": { name: "bg-base-secondary" },
          "you-bar-bg": { name: "bg-surface-overlay" },
        };
    },
    237436: function (e, r, t) {
      "use strict";
      function a(e) {
        return e;
      }
      t.r(r),
        t.d(r, {
          defineColorTokens: function () {
            return a;
          },
        });
    },
    353386: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return l;
          },
        });
      var a = t("37983");
      t("884691");
      var n = t("421898"),
        i = t.n(n),
        o = t("401921"),
        l = e => {
          let { open: r = !1, className: t, ...n } = e;
          return (0, a.jsxs)("button", {
            type: "button",
            className: i(o.btnHamburger, { [o.btnHamburgerOpen]: r }, t),
            ...n,
            children: [
              (0, a.jsx)("span", {}),
              (0, a.jsx)("span", {}),
              (0, a.jsx)("span", {}),
              (0, a.jsx)("span", {}),
              (0, a.jsx)("span", {}),
              (0, a.jsx)("span", {}),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=2a1b09d6b381c1f8b943.js.map

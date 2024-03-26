(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86213"],
  {
    18502: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          UNITED_STATES: function () {
            return D;
          },
          CANADA: function () {
            return C;
          },
          US_POSTAL_CODE_VALID_LENGTH: function () {
            return R;
          },
          COUNTRIES_WITHOUT_POSTAL_CODES: function () {
            return L;
          },
          COUNTRY_CODE_OPTIONS: function () {
            return A;
          },
          default: function () {
            return W;
          },
        }),
        t("222007"),
        t("70102");
      var l,
        s,
        n,
        i,
        o,
        r,
        u = t("37983"),
        d = t("884691"),
        c = t("549471"),
        I = t("592861"),
        h = t("612562"),
        S = t("77078"),
        m = t("821879"),
        N = t("476765"),
        E = t("449008"),
        p = t("983299"),
        _ = t("782340"),
        b = t("298961");
      let D = "US",
        C = "CA",
        R = 5,
        L = [
          "AE",
          "AG",
          "AN",
          "AO",
          "AW",
          "BF",
          "BI",
          "BJ",
          "BM",
          "BO",
          "BQ",
          "BS",
          "BW",
          "BZ",
          "CD",
          "CF",
          "CG",
          "CI",
          "CK",
          "CM",
          "CW",
          "DJ",
          "DM",
          "ER",
          "FJ",
          "GA",
          "GD",
          "GH",
          "GM",
          "GQ",
          "GY",
          "HK",
          "HM",
          "IE",
          "JM",
          "KE",
          "KI",
          "KM",
          "KN",
          "KP",
          "LY",
          "ML",
          "MO",
          "MR",
          "MW",
          "NA",
          "NR",
          "NU",
          "QA",
          "RW",
          "SB",
          "SC",
          "SL",
          "SR",
          "ST",
          "SX",
          "SY",
          "TD",
          "TF",
          "TG",
          "TK",
          "TL",
          "TO",
          "TV",
          "UG",
          "VU",
          "YE",
          "ZA",
          "ZW",
        ],
        A = I.default
          .map(e => ({ value: e.alpha2, label: e.name }))
          .filter(e => "KP" !== e.value && "SY" !== e.value),
        v = (0, N.uid)(),
        M = (0, N.uid)(),
        g = (0, N.uid)(),
        f = (0, N.uid)(),
        T = (0, N.uid)(),
        O = (0, N.uid)(),
        y = (0, N.uid)();
      ((i = l || (l = {})).NAME = "name"),
        (i.COUNTRY = "country"),
        (i.LINE1 = "line1"),
        (i.LINE2 = "line2"),
        (i.CITY = "city"),
        (i.POSTAL_CODE = "postalCode"),
        (i.STATE = "state"),
        ((o = s || (s = {})).MODAL_US = "modalUS"),
        (o.MODAL_INTL = "modalInternational"),
        (o.MODAL_US_WITH_NAME = "modalUSWithName"),
        (o.MODAL_INTL_WITH_NAME = "modalInternationalWithName"),
        (o.MODAL_US_REDUCED = "modalUSReduced"),
        (o.SETTINGS_US = "settingsUS"),
        (o.SETTINGS_INTL = "settingsInternational"),
        (o.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName"),
        (o.SETTINGS_US_MOBILE = "settingsUSMobile"),
        (o.SETTINGS_INTL_MOBILE = "settingsInternationalMobile"),
        (o.SETTINGS_INTL_NO_NAME_MOBILE =
          "settingsInternationalWithoutNameMobile"),
        ((r = n || (n = {})).EDIT = "edit"),
        (r.CREATE = "create");
      let U = { [D]: h.States, [C]: c.CanadaProvinces },
        B = {
          name: e => ({
            name: "name",
            id: v,
            title: () => _.default.Messages.BILLING_ADDRESS_NAME,
            autoComplete: "name",
            getClassNameForLayout: e =>
              [
                "modalUS",
                "modalInternational",
                "modalUSWithName",
                "modalInternationalWithName",
                "settingsUSMobile",
                "settingsInternationalMobile",
                "settingsInternationalWithoutNameMobile",
              ].includes(e)
                ? b.width100
                : b.width60,
            renderInput: e => (0, u.jsx)(S.TextInput, { ...e }),
          }),
          country: e => ({
            name: "country",
            id: M,
            title: () => _.default.Messages.BILLING_ADDRESS_COUNTRY,
            autoComplete: "country",
            getClassNameForLayout: e => {
              switch (e) {
                case "modalUS":
                case "modalInternational":
                case "modalUSWithName":
                case "modalInternationalWithName":
                  return b.width100;
                case "modalUSReduced":
                  return b.width50;
                default:
                  return b.width75;
              }
            },
            renderInput(e, a) {
              let { onChange: t, ...l } = e;
              return (0, u.jsx)(S.SearchableSelect, {
                ...l,
                autoFocus: !0,
                maxVisibleItems: 8,
                isDisabled: "edit" === a.mode,
                options: A,
                onChange: a => {
                  null != t && t(a, e.name);
                },
              });
            },
          }),
          line1: e => ({
            name: "line1",
            id: g,
            title: () => _.default.Messages.BILLING_ADDRESS_ADDRESS,
            autoComplete: "address-line1",
            placeholder: () =>
              _.default.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
            getClassNameForLayout: e =>
              [
                "modalUS",
                "modalInternational",
                "modalUSWithName",
                "modalInternationalWithName",
                "settingsUSMobile",
                "settingsInternationalMobile",
                "settingsInternationalWithoutNameMobile",
              ].includes(e)
                ? b.width100
                : b.width60,
            renderInput: e => (0, u.jsx)(S.TextInput, { ...e }),
          }),
          line2: e => ({
            name: "line2",
            id: f,
            title: () => _.default.Messages.BILLING_ADDRESS_ADDRESS2,
            placeholder: () =>
              _.default.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
            autoComplete: "address-line2",
            getClassNameForLayout: e =>
              [
                "modalUS",
                "modalInternational",
                "modalUSWithName",
                "modalInternationalWithName",
                "settingsUSMobile",
                "settingsInternationalMobile",
                "settingsInternationalWithoutNameMobile",
              ].includes(e)
                ? b.width100
                : b.width40,
            renderInput: e => (0, u.jsx)(S.TextInput, { ...e }),
          }),
          city: e => ({
            name: "city",
            id: T,
            title: () => _.default.Messages.BILLING_ADDRESS_CITY,
            autoComplete: "address-level2",
            placeholder: () =>
              _.default.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
            getClassNameForLayout: e => {
              switch (e) {
                case "modalInternational":
                case "modalUS":
                case "modalInternationalWithName":
                case "modalUSWithName":
                case "settingsUSMobile":
                case "settingsInternationalMobile":
                case "settingsInternationalWithoutNameMobile":
                  return b.width100;
                case "settingsInternational":
                  return b.width60;
                default:
                  return b.width50;
              }
            },
            renderInput: e => (0, u.jsx)(S.TextInput, { ...e }),
          }),
          postalCode: e => {
            let a, t;
            switch (e) {
              case D:
                (a = _.default.Messages.BILLING_ADDRESS_ZIP_CODE),
                  (t = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER);
                break;
              case C:
                (a = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE),
                  (t =
                    _.default.Messages
                      .BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER);
                break;
              default:
                a = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE;
            }
            return {
              name: "postalCode",
              id: O,
              title: () => a,
              autoComplete: "postal-code",
              placeholder: () => t,
              getClassNameForLayout: e => {
                switch (e) {
                  case "modalInternational":
                  case "modalInternationalWithName":
                    return b.width100;
                  case "modalUS":
                  case "modalUSWithName":
                  case "modalUSReduced":
                  case "settingsUSMobile":
                  case "settingsInternationalMobile":
                  case "settingsInternationalWithoutNameMobile":
                    return b.width50;
                  case "settingsInternational":
                    return b.width30;
                  default:
                    return b.width25;
                }
              },
              renderInput: e =>
                "modalUSReduced" === e.layout
                  ? (0, u.jsx)(S.TextInput, {
                      style: { minHeight: "45px" },
                      ...e,
                    })
                  : (0, u.jsx)(S.TextInput, { ...e }),
            };
          },
          state: e => {
            let a;
            switch (e) {
              case D:
                a = _.default.Messages.BILLING_ADDRESS_STATE;
                break;
              case C:
                a = _.default.Messages.BILLING_ADDRESS_PROVINCE;
                break;
              default:
                a = _.default.Messages.BILLING_ADDRESS_REGION;
            }
            return {
              name: "state",
              id: y,
              title: () => a,
              autoComplete: "address-level1",
              getClassNameForLayout: e => {
                switch (e) {
                  case "modalInternational":
                  case "modalInternationalWithName":
                  case "settingsUSMobile":
                  case "settingsInternationalMobile":
                  case "settingsInternationalWithoutNameMobile":
                    return b.width100;
                  case "modalUS":
                  case "modalUSWithName":
                    return b.width50;
                  case "settingsInternational":
                    return b.width30;
                  default:
                    return b.width25;
                }
              },
              renderInput(a) {
                let t = U[e],
                  l =
                    null == a.value ||
                    "" === a.value ||
                    (null != t &&
                      null !=
                        t.find(e => {
                          let { value: t } = e;
                          return t === a.value;
                        })),
                  { layout: s, onChange: n, ...i } = a;
                return [D, C].includes(e) && l
                  ? (0, u.jsx)(S.SearchableSelect, {
                      ...i,
                      popoutPosition: [
                        "modalUS",
                        "modalInternational",
                      ].includes(s)
                        ? "top"
                        : void 0,
                      options: t,
                      onChange: e => {
                        null != n && n(e, a.name);
                      },
                    })
                  : (0, u.jsx)(S.TextInput, { ...a });
              },
            };
          },
        },
        G = {
          modalUS: [
            [B.country],
            [B.line1],
            [B.line2],
            [B.city],
            [B.state, B.postalCode],
          ],
          modalInternational: [
            [B.country],
            [B.line1],
            [B.line2],
            [B.city],
            [B.state],
            [B.postalCode],
          ],
          modalUSWithName: [
            [B.country],
            [B.name],
            [B.line1],
            [B.line2],
            [B.city],
            [B.state, B.postalCode],
          ],
          modalInternationalWithName: [
            [B.country],
            [B.name],
            [B.line1],
            [B.line2],
            [B.city],
            [B.state],
            [B.postalCode],
          ],
          modalUSReduced: [[B.country, B.postalCode]],
          settingsUS: [
            [B.name],
            [B.line1, B.line2],
            [B.city, B.state, B.postalCode],
            [B.country],
          ],
          settingsUSMobile: [
            [B.name],
            [B.line1],
            [B.line2],
            [B.city],
            [B.state],
            [B.postalCode],
            [B.country],
          ],
          settingsInternational: [
            [B.name],
            [B.line1, B.line2],
            [B.city],
            [B.state, B.postalCode],
            [B.country],
          ],
          settingsInternationalMobile: [
            [B.name],
            [B.line1],
            [B.line2],
            [B.city],
            [B.state],
            [B.postalCode],
            [B.country],
          ],
          settingsInternationalWithoutName: [
            [B.line1, B.line2],
            [B.city],
            [B.state, B.postalCode],
            [B.country],
          ],
          settingsInternationalWithoutNameMobile: [
            [B.line1],
            [B.line2],
            [B.city],
            [B.state],
            [B.postalCode],
            [B.country],
          ],
        };
      class w extends d.PureComponent {
        componentDidMount() {
          this.handleInfoChange();
        }
        componentDidUpdate(e, a) {
          this.state !== a && this.handleInfoChange();
        }
        hasValue(e) {
          return null != e && "" !== e;
        }
        validateForm(e) {
          let { values: a, dirtyFields: t } = this.state,
            l = {},
            s = (0, m.reducedPaymentInfoExperiment)({
              autoTrackExposure: !1,
            }).enabled;
          (!e || t.name) &&
            !this.hasValue(a.name) &&
            "edit" === this.props.mode &&
            (l.name = _.default.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED),
            (!e || t.country) &&
              !this.hasValue(a.country) &&
              (l.country =
                _.default.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED),
            (!e || t.line1) &&
              !this.hasValue(a.line1) &&
              !s &&
              (l.line1 =
                _.default.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED),
            (!e || t.city) &&
              !this.hasValue(a.city) &&
              !s &&
              (l.city = _.default.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
          let n = a.country;
          switch (n) {
            case D:
              if (!e || t.postalCode) {
                let e = a.postalCode;
                this.hasValue(e)
                  ? e.length !== R
                    ? (l.postalCode =
                        _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH)
                    : !/^\d{5}$/.test(e) &&
                      (l.postalCode =
                        _.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID)
                  : (l.postalCode =
                      _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED);
              }
              (!e || t.state) &&
                !this.hasValue(a.state) &&
                !s &&
                (l.state =
                  _.default.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
              break;
            case C:
              (!e || t.postalCode) &&
                !this.hasValue(a.postalCode) &&
                (l.postalCode =
                  _.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED),
                (!e || t.state) &&
                  !this.hasValue(a.state) &&
                  !s &&
                  (l.state =
                    _.default.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
              break;
            default:
              (!e || t.postalCode) &&
                !this.hasValue(a.postalCode) &&
                !L.includes(null != n ? n : "") &&
                (l.postalCode =
                  _.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED);
          }
          return l;
        }
        handleInfoChange() {
          let { values: e, dirtyFields: a } = this.state,
            t = this.validateForm(!1);
          this.props.onBillingAddressChange(
            e,
            0 === Object.keys(t).length,
            Object.keys(a).length > 0
          );
        }
        render() {
          let { errors: e, values: a } = this.state,
            { layout: t, mode: l, className: s, error: n } = this.props,
            i = G[t];
          if (null == i) throw Error("Provide a proper layout property.");
          let o = a.country,
            r = i
              .map(e => {
                let a = e
                  .map(e => e(null != o ? o : ""))
                  .filter(E.isNotNullish);
                return a.length > 0 ? { fields: a } : null;
              })
              .filter(E.isNotNullish);
          return (0, u.jsx)(p.default, {
            className: s,
            form: r,
            layout: t,
            values: a,
            errors: e,
            formError: n,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: l,
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              values: {
                name: this.props.name,
                country: this.props.country,
                line1: this.props.line1,
                line2: this.props.line2,
                city: this.props.city,
                postalCode: this.props.postalCode,
                state: this.props.state,
              },
              dirtyFields: {},
              errors: {},
            }),
            (this.handleFieldBlur = () => {
              this.setState({ errors: this.validateForm(!0) });
            }),
            (this.handleFieldChange = (e, a) => {
              if (null == a) return;
              let { values: t, errors: l, dirtyFields: s } = this.state;
              delete l[a],
                this.setState({
                  values: { ...t, [a]: e },
                  dirtyFields: { ...s, [a]: !0 },
                  errors: l,
                });
            });
        }
      }
      (w.Layouts = s),
        (w.Modes = n),
        (w.defaultProps = {
          name: "",
          country: "",
          line1: "",
          line2: "",
          city: "",
          postalCode: "",
          state: "",
          layout: "modalUS",
          mode: "create",
          error: null,
        });
      var W = w;
    },
    983299: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return c;
          },
        }),
        t("222007");
      var l = t("37983"),
        s = t("884691"),
        n = t("414456"),
        i = t.n(n),
        o = t("77078"),
        r = t("145131"),
        u = t("298961");
      class d extends s.PureComponent {
        componentDidUpdate(e) {
          if (this.props.formError !== e.formError)
            this.setState({ changedSinceError: new Set() });
          else if (null != this.props.formError) {
            let { changedSinceError: a } = this.state,
              t = this.getChangedValues(e);
            t.forEach(e => a.add(e)), this.setState({ changedSinceError: a });
          }
        }
        getChangedValues(e) {
          let { values: a } = this.props,
            { values: t } = e;
          return Object.keys(a).filter(e => a[e] !== t[e]);
        }
        getError(e) {
          let { errors: a, formError: t } = this.props;
          if (null != a[e]) return a[e];
          let l =
            null == t || this.state.changedSinceError.has(e)
              ? null
              : t.getFieldMessage(e);
          return l;
        }
        render() {
          let { form: e, className: a } = this.props,
            t = e.map(this.renderFormRow);
          return (0, l.jsx)("div", { className: a, children: t });
        }
        constructor(...e) {
          super(...e),
            (this.state = { changedSinceError: new Set() }),
            (this.renderFormSection = e => {
              let {
                  values: a,
                  onFieldChange: t,
                  onFieldFocus: s,
                  onFieldBlur: n,
                  layout: r,
                  ...u
                } = this.props,
                {
                  getClassNameForLayout: d,
                  renderInput: c,
                  title: I,
                  name: h,
                  id: S,
                  placeholder: m,
                  ...N
                } = e,
                E = {
                  ...N,
                  placeholder: null == m ? void 0 : m(),
                  layout: r,
                  error: this.getError(h),
                  value: a[h],
                  name: h,
                  "aria-labelledby": S,
                  onChange: t,
                  onFocus: s,
                  onBlur: n,
                };
              return (0, l.jsx)(
                o.FormSection,
                {
                  className: i(null == d ? void 0 : d(r)),
                  title: I(),
                  titleId: S,
                  children: c(E, u),
                },
                h
              );
            }),
            (this.renderFormRow = e => {
              let a = e.fields.map(this.renderFormSection);
              return (0, l.jsx)(
                r.default,
                { className: i(u.row, e.className), children: a },
                e.fields.map(e => e.name).join("")
              );
            });
        }
      }
      var c = d;
    },
    549471: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          CanadaProvinces: function () {
            return l;
          },
        });
      let l = [
        { label: "Alberta", value: "AB" },
        { label: "British Columbia", value: "BC" },
        { label: "Manitoba", value: "MB" },
        { label: "New Brunswick", value: "NB" },
        { label: "Newfoundland and Labrador", value: "NL" },
        { label: "Nova Scotia", value: "NS" },
        { label: "Ontario", value: "ON" },
        { label: "Prince Edward Island", value: "PE" },
        { label: "Quebec", value: "QC" },
        { label: "Saskatchewan", value: "SK" },
        { label: "Northwest Territories", value: "NT" },
        { label: "Nunavut", value: "NU" },
        { label: "Yukon", value: "YT" },
      ];
    },
    612562: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          States: function () {
            return l;
          },
        });
      let l = [
        { label: "Alabama", value: "AL" },
        { label: "Alaska", value: "AK" },
        { label: "American Samoa", value: "AS" },
        { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },
        { label: "Armed Forces: Americas", value: "AA" },
        { label: "Armed Forces: Europe", value: "AE" },
        { label: "Armed Forces: Pacific", value: "AP" },
        { label: "California", value: "CA" },
        { label: "Colorado", value: "CO" },
        { label: "Connecticut", value: "CT" },
        { label: "Delaware", value: "DE" },
        { label: "District Of Columbia", value: "DC" },
        { label: "Federated States Of Micronesia", value: "FM" },
        { label: "Florida", value: "FL" },
        { label: "Georgia", value: "GA" },
        { label: "Guam", value: "GU" },
        { label: "Hawaii", value: "HI" },
        { label: "Idaho", value: "ID" },
        { label: "Illinois", value: "IL" },
        { label: "Indiana", value: "IN" },
        { label: "Iowa", value: "IA" },
        { label: "Kansas", value: "KS" },
        { label: "Kentucky", value: "KY" },
        { label: "Louisiana", value: "LA" },
        { label: "Maine", value: "ME" },
        { label: "Marshall Islands", value: "MH" },
        { label: "Maryland", value: "MD" },
        { label: "Massachusetts", value: "MA" },
        { label: "Michigan", value: "MI" },
        { label: "Minnesota", value: "MN" },
        { label: "Mississippi", value: "MS" },
        { label: "Missouri", value: "MO" },
        { label: "Montana", value: "MT" },
        { label: "Nebraska", value: "NE" },
        { label: "Nevada", value: "NV" },
        { label: "New Hampshire", value: "NH" },
        { label: "New Jersey", value: "NJ" },
        { label: "New Mexico", value: "NM" },
        { label: "New York", value: "NY" },
        { label: "North Carolina", value: "NC" },
        { label: "North Dakota", value: "ND" },
        { label: "Northern Mariana Islands", value: "MP" },
        { label: "Ohio", value: "OH" },
        { label: "Oklahoma", value: "OK" },
        { label: "Oregon", value: "OR" },
        { label: "Palau", value: "PW" },
        { label: "Pennsylvania", value: "PA" },
        { label: "Puerto Rico", value: "PR" },
        { label: "Rhode Island", value: "RI" },
        { label: "South Carolina", value: "SC" },
        { label: "South Dakota", value: "SD" },
        { label: "Tennessee", value: "TN" },
        { label: "Texas", value: "TX" },
        { label: "Utah", value: "UT" },
        { label: "Vermont", value: "VT" },
        { label: "Virgin Islands", value: "VI" },
        { label: "Virginia", value: "VA" },
        { label: "Washington", value: "WA" },
        { label: "West Virginia", value: "WV" },
        { label: "Wisconsin", value: "WI" },
        { label: "Wyoming", value: "WY" },
      ];
    },
  },
]);
//# sourceMappingURL=86213.b6cc5f86ab26cf6b46a4.js.map

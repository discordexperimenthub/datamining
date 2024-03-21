(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94348"],
  {
    607191: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getBillingAddressLayout: function () {
            return l;
          },
          getOverrideBillingAddressLayout: function () {
            return r;
          },
        });
      var o = a("394846"),
        n = a("18502"),
        s = a("49111");
      let l = e =>
          [s.PaymentSourceTypes.CARD, s.PaymentSourceTypes.VENMO].includes(
            e.type
          ) && "US" === e.country
            ? o.isMobile
              ? n.default.Layouts.SETTINGS_US_MOBILE
              : n.default.Layouts.SETTINGS_US
            : e.type === s.PaymentSourceTypes.CARD && "US" !== e.country
              ? o.isMobile
                ? n.default.Layouts.SETTINGS_INTL_MOBILE
                : n.default.Layouts.SETTINGS_INTL
              : o.isMobile
                ? n.default.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
                : n.default.Layouts.SETTINGS_INTL_NO_NAME,
        r = o.isMobile
          ? n.default.Layouts.SETTINGS_US_MOBILE
          : n.default.Layouts.SETTINGS_US;
    },
    524252: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          triggerBrowserDownload: function () {
            return I;
          },
          default: function () {
            return N;
          },
        }),
        a("511434"),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660"),
        a("222007");
      var o = a("37983"),
        n = a("884691"),
        s = a("872717"),
        l = a("77078"),
        r = a("18502"),
        d = a("599417"),
        i = a("607191"),
        u = a("49111"),
        c = a("782340"),
        _ = a("756439");
      function I(e, t) {
        let a = URL.createObjectURL(t),
          o = document.createElement("a");
        (o.href = a),
          (o.download = "receipt_".concat(e, ".pdf")),
          document.body.appendChild(o),
          o.click(),
          document.body.removeChild(o),
          URL.revokeObjectURL(a);
      }
      async function y(e, t, a) {
        let o = u.Endpoints.BILLING_INVOICE_PDF,
          n = t
            ? {
                name: a.name,
                line_1: a.line1,
                line_2: a.line2,
                city: a.city,
                state: a.state,
                postal_code: a.postalCode,
                country: a.country,
              }
            : null,
          l = await s.HTTP.post({
            url: o,
            body: { payment_id: e, billing_address_override: t ? n : null },
            oldFormErrors: !0,
            binary: !0,
          });
        return I(e, l.body), !0;
      }
      function N(e) {
        let { payment: t, paymentSource: a, ...s } = e,
          u = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            postalCode: "",
            state: "",
            country: a.country,
          },
          [I, N] = n.useState(u),
          [L, E] = n.useState(!1),
          [S, O] = n.useState(!1),
          [T, f] = n.useState(!1),
          [p, g] = n.useState("");
        async function m() {
          f(!0);
          try {
            await y(M, L, I);
          } catch (s) {
            var e;
            let t = await s.body.text(),
              a = JSON.parse(t),
              o = new d.default({ ...s, body: a }),
              n =
                null !== (e = o.getAnyErrorMessage()) && void 0 !== e
                  ? e
                  : c.default.Messages
                      .BILLING_DOWNLOAD_INVOICE_PDF_BUTTON_ERROR;
            g(n);
          } finally {
            f(!1);
          }
        }
        let D = i.getOverrideBillingAddressLayout,
          M = t.id,
          h = (0, o.jsx)("div", {
            children: (0, o.jsx)(l.FormSwitch, {
              value: L,
              note: c.default.Messages
                .BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_DESCRIPTION,
              onChange: E,
              children:
                c.default.Messages
                  .BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_TOGGLE,
            }),
          }),
          C = L
            ? (0, o.jsx)(r.default, {
                ...I,
                mode: r.default.Modes.CREATE,
                layout: D,
                onBillingAddressChange: function (e, t) {
                  N(e), O(t);
                },
                error: null,
              })
            : null;
        return (0, o.jsxs)(l.ModalRoot, {
          className: _.modal,
          size: l.ModalSize.DYNAMIC,
          ...s,
          children: [
            (0, o.jsx)(l.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: c.default.Messages.BILLING_DOWNLOAD_INVOICE,
              }),
            }),
            (0, o.jsxs)(l.ModalContent, {
              className: _.body,
              children: [h, C],
            }),
            (0, o.jsxs)(l.ModalFooter, {
              children: [
                (0, o.jsx)(l.Button, {
                  type: "submit",
                  color: l.Button.Colors.GREEN,
                  disabled: L && !S,
                  onClick: m,
                  submitting: T,
                  autoFocus: !0,
                  children:
                    c.default.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON,
                }),
                (0, o.jsx)(l.Text, {
                  color: "text-danger",
                  className: _.error,
                  variant: "text-sm/semibold",
                  children: p,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=34f3817b1f8f6c0d2538.js.map

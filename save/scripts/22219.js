(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22219"],
  {
    629759: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        o = s("77078"),
        l = s("425922"),
        r = s("782340"),
        i = s("36802");
      function u(e) {
        let { transitionState: t, onClose: s, credential: u } = e,
          [d, c] = n.useState(!1),
          [h, E] = n.useState(""),
          [f, M] = n.useState(void 0),
          N = n.useRef(null);
        async function _(e) {
          e.preventDefault(), c(!0);
          try {
            await (0, l.editWebAuthnCredential)(u.id, h), s();
          } catch (e) {
            M(e.message);
          } finally {
            c(!1);
          }
        }
        return (
          n.useEffect(() => {
            if (t === o.ModalTransitionState.ENTERED) {
              var e;
              null === (e = N.current) || void 0 === e || e.focus();
            }
          }, [t]),
          (0, a.jsxs)(o.ModalRoot, {
            transitionState: t,
            children: [
              (0, a.jsxs)(o.ModalHeader, {
                separator: !1,
                className: i.header,
                children: [
                  (0, a.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-lg/bold",
                    className: i.subtitle,
                    children: r.default.Messages.TWO_FA_WEBAUTHN_RENAME,
                  }),
                  (0, a.jsx)(o.ModalCloseButton, {
                    onClick: s,
                    className: i.modalCloseButton,
                  }),
                ],
              }),
              (0, a.jsxs)("form", {
                onSubmit: _,
                children: [
                  (0, a.jsx)(o.ModalContent, {
                    className: i.content,
                    children: (0, a.jsx)(o.FormItem, {
                      title:
                        r.default.Messages.TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
                      error: f,
                      required: !0,
                      children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(o.TextInput, {
                          inputRef: N,
                          "aria-label":
                            r.default.Messages
                              .TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
                          placeholder: u.name,
                          value: h,
                          minLength: 1,
                          maxLength: 32,
                          onChange: E,
                          autoFocus: !0,
                          required: !0,
                        }),
                      }),
                    }),
                  }),
                  (0, a.jsxs)(o.ModalFooter, {
                    children: [
                      (0, a.jsx)(o.Button, {
                        type: "submit",
                        color: o.Button.Colors.BRAND,
                        size: o.Button.Sizes.MEDIUM,
                        submitting: d,
                        disabled: 0 === h.length || h.length > 32,
                        children: r.default.Messages.DONE,
                      }),
                      (0, a.jsx)(o.Button, {
                        className: i.cancel,
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: s,
                        children: r.default.Messages.CANCEL,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=cb38d519caf00fe1da28.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30243"],
  {
    583789: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        r = l.n(s),
        i = l("77078"),
        o = l("476765"),
        u = l("782340"),
        c = l("840921");
      function d(e) {
        let {
            errorText: t,
            title: l,
            description: s,
            transitionState: d,
            onCancel: E,
            onConfirm: I,
            children: M,
          } = e,
          T = (0, o.useUID)(),
          [_, R] = a.useState(!1),
          N = a.useCallback(async () => {
            R(!0);
            try {
              await I();
            } catch (e) {
              throw e;
            } finally {
              R(!1);
            }
          }, [I]);
        return (0, n.jsxs)(i.ModalRoot, {
          className: c.modal,
          transitionState: d,
          "aria-labelledby": T,
          size: i.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(i.ModalContent, {
              className: c.modalContent,
              children: [
                (0, n.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  id: T,
                  children: l,
                }),
                null != s && "" !== s
                  ? (0, n.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: c.description,
                      children: s,
                    })
                  : null,
                (0, n.jsx)("div", { className: c.body, children: M }),
                null != t && "" !== t
                  ? (0, n.jsx)(i.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: t,
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(i.ModalFooter, {
              children: [
                (0, n.jsx)(i.Button, {
                  submitting: _,
                  className: c.button,
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.BRAND,
                  onClick: N,
                  children: u.default.Messages.SAVE,
                }),
                (0, n.jsx)(i.Button, {
                  className: r(c.cancelButton, c.button),
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.PRIMARY,
                  onClick: E,
                  children: u.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    198784: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TextInputFormFieldModal: function () {
            return E;
          },
          ParagraphFormFieldModal: function () {
            return I;
          },
        }),
        l("222007"),
        l("781738");
      var n = l("37983"),
        a = l("884691"),
        s = l("77078"),
        r = l("448993"),
        i = l("567054"),
        o = l("583789"),
        u = l("394294"),
        c = l("782340");
      function d(e) {
        var t;
        let {
            type: l,
            title: i,
            description: d,
            field: E,
            onSave: I,
            onClose: M,
          } = e,
          [T, _] = a.useState(
            null !== (t = null == E ? void 0 : E.label) && void 0 !== t ? t : ""
          ),
          [R, N] = a.useState(null),
          A = async () => {
            null != R && N(null);
            let e = T.trim();
            if ("" === e) {
              N(
                c.default.Messages
                  .MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR
              );
              return;
            }
            try {
              await I({ field_type: l, label: e, required: !0 }), M();
            } catch (t) {
              let e = new r.APIError(t);
              N(e.getAnyErrorMessage());
            }
          };
        return (0, n.jsx)(o.default, {
          ...e,
          errorText: R,
          title: i,
          description: d,
          onConfirm: A,
          onCancel: M,
          children: (0, n.jsx)(s.TextInput, {
            onChange: e => {
              null != R && N(null);
              let t = e.replace(/(\r\n|\n|\r)/g, " ");
              t.length > u.MAX_QUESTION_LENGTH &&
                (t = t.slice(0, u.MAX_QUESTION_LENGTH)),
                _(t);
            },
            placeholder: c.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
            value: T,
          }),
        });
      }
      function E(e) {
        return (0, n.jsx)(d, {
          title: c.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          description:
            c.default.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_TEXT_DESCRIPTION,
          type: i.VerificationFormFieldTypes.TEXT_INPUT,
          ...e,
        });
      }
      function I(e) {
        return (0, n.jsx)(d, {
          title: c.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          description:
            c.default.Messages
              .GUILD_SETTINGS_MEMBER_VERIFICATION_PARAGRAPH_DESCRIPTION,
          type: i.VerificationFormFieldTypes.PARAGRAPH,
          ...e,
        });
      }
    },
  },
]);
//# sourceMappingURL=08ed4f7605b006c4881a.js.map

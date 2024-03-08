(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3383"],
  {
    650672: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return h;
          },
        }),
        l("222007");
      var s = l("37983"),
        n = l("884691"),
        o = l("759843"),
        a = l("77078"),
        r = l("599417"),
        u = l("428958"),
        i = l("782340"),
        d = l("485164");
      let c = RegExp(
        "(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$",
        "i"
      );
      function h(e) {
        let {
            transitionState: t,
            onFormSubmit: l,
            onSuccess: h,
            onClose: p,
            headerText: M,
            confirmButtonText: f,
            confirmButtonColor: A,
            impressionName: m,
          } = e,
          [x, C] = n.useState(!1),
          [R, g] = n.useState(""),
          [j, B] = n.useState(null),
          E = n.useRef(null);
        (0, u.default)({ type: o.ImpressionTypes.MODAL, name: m });
        let I = async e => {
          if ((e.preventDefault(), B(null), C(!0), !1 === c.test(R))) {
            B(i.default.Messages.EMAIL_ENTER_MODAL_INPUT_ERROR), C(!1);
            return;
          }
          try {
            let e = null != l ? await l(R) : void 0;
            null != h && (null != e ? h({ response: e, email: R }) : h(R)), p();
          } catch (t) {
            let e = new r.default(t);
            B(e.getAnyErrorMessage());
          } finally {
            C(!1);
          }
        };
        return (0, s.jsx)(a.ModalRoot, {
          transitionState: t,
          children: (0, s.jsxs)("form", {
            onSubmit: I,
            children: [
              (0, s.jsxs)(a.ModalHeader, {
                separator: !1,
                className: d.header,
                children: [
                  (0, s.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    className: d.title,
                    children: M,
                  }),
                  (0, s.jsx)(a.ModalCloseButton, {
                    onClick: p,
                    className: d.modalCloseButton,
                  }),
                ],
              }),
              (0, s.jsx)(a.ModalContent, {
                children: (0, s.jsx)(a.FormItem, {
                  title: i.default.Messages.YOUR_EMAIL,
                  error: j,
                  children: (0, s.jsx)(a.TextInput, {
                    value: R,
                    onChange: g,
                    inputRef: E,
                  }),
                }),
              }),
              (0, s.jsxs)(a.ModalFooter, {
                children: [
                  (0, s.jsx)(a.Button, {
                    type: "submit",
                    color: null != A ? A : a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    submitting: x,
                    children: f,
                  }),
                  (0, s.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    onClick: p,
                    children: i.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7a7ae988bdd5ad3b9e4b.js.map

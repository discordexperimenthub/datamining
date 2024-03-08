(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64715"],
  {
    583789: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          default: function () {
            return d;
          },
        }),
        t("222007");
      var n = t("37983"),
        a = t("884691"),
        s = t("414456"),
        r = t.n(s),
        i = t("77078"),
        o = t("476765"),
        u = t("782340"),
        c = t("840921");
      function d(e) {
        let {
            errorText: l,
            title: t,
            description: s,
            transitionState: d,
            onCancel: E,
            onConfirm: I,
            children: C,
          } = e,
          h = (0, o.useUID)(),
          [m, M] = a.useState(!1),
          _ = a.useCallback(async () => {
            M(!0);
            try {
              await I();
            } catch (e) {
              throw e;
            } finally {
              M(!1);
            }
          }, [I]);
        return (0, n.jsxs)(i.ModalRoot, {
          className: c.modal,
          transitionState: d,
          "aria-labelledby": h,
          size: i.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(i.ModalContent, {
              className: c.modalContent,
              children: [
                (0, n.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  id: h,
                  children: t,
                }),
                null != s && "" !== s
                  ? (0, n.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: c.description,
                      children: s,
                    })
                  : null,
                (0, n.jsx)("div", { className: c.body, children: C }),
                null != l && "" !== l
                  ? (0, n.jsx)(i.Text, {
                      className: c.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: l,
                    })
                  : null,
              ],
            }),
            (0, n.jsxs)(i.ModalFooter, {
              children: [
                (0, n.jsx)(i.Button, {
                  submitting: m,
                  className: c.button,
                  size: i.Button.Sizes.SMALL,
                  color: i.Button.Colors.BRAND,
                  onClick: _,
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
    827619: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          default: function () {
            return g;
          },
        }),
        t("222007"),
        t("781738");
      var n = t("37983"),
        a = t("884691"),
        s = t("414456"),
        r = t.n(s),
        i = t("476042"),
        o = t("669491"),
        u = t("77078"),
        c = t("448993"),
        d = t("381546"),
        E = t("673220"),
        I = t("351825"),
        C = t("904276"),
        h = t("567054"),
        m = t("583789"),
        M = t("394294"),
        _ = t("782340"),
        x = t("840921");
      let f = "MULTIPLE_CHOICE",
        N = e => {
          let {
              choice: l,
              index: t,
              onChange: s,
              onClear: o,
              onReorder: c,
              isDropHovered: I,
            } = e,
            h = a.useRef(null),
            m = a.useRef(null),
            [, M, N] = (0, i.useDrag)({
              type: f,
              item: { choice: l, index: t },
              end: (e, l) => {
                null != e && !l.didDrop() && c(e.choice, null, !0);
              },
            }),
            [, g] = (0, i.useDrop)({
              accept: f,
              hover: (e, l) => {
                var n;
                let { index: a } = e,
                  s =
                    null === (n = h.current) || void 0 === n
                      ? void 0
                      : n.getBoundingClientRect(),
                  r = l.getClientOffset();
                if (null == s || null == r) return;
                let i = (s.bottom - s.top) / 2,
                  o = r.y - s.top;
                (!(a < t) || !(o < i)) &&
                  (!(a > t) || !(o > i)) &&
                  c(e.choice, t, !1);
              },
              drop: e => {
                c(e.choice, t, !0);
              },
            });
          return (
            a.useLayoutEffect(
              () => (
                M(m),
                N(g(h)),
                () => {
                  M(null), g(null);
                }
              ),
              [M, g, N]
            ),
            (0, n.jsxs)("div", {
              ref: h,
              className: r(x.draggableInputContainer, { [x.dragging]: I }),
              "data-dnd-name": l,
              children: [
                (0, n.jsx)("div", {
                  className: x.radioIconEmptyContainer,
                  children: (0, n.jsx)(C.default, {
                    height: 20,
                    width: 20,
                    className: x.radioIconEmpty,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: x.inputWrapper,
                  children: [
                    (0, n.jsx)(u.TextInput, {
                      autoFocus: !0,
                      onChange: e => s(e),
                      placeholder:
                        _.default.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_PLACEHOLDER.format(
                          { index: t + 1 }
                        ),
                      value: l,
                    }),
                    (0, n.jsx)(u.Button, {
                      className: x.clearButton,
                      onClick: o,
                      look: u.Button.Looks.BLANK,
                      size: u.Button.Sizes.NONE,
                      children: (0, n.jsx)(d.default, {
                        className: x.clearIcon,
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  ref: m,
                  className: x.dragContainer,
                  "data-dnd-name": l,
                  children: (0, n.jsx)(E.default, { className: x.dragIcon }),
                }),
              ],
            })
          );
        };
      var g = function (e) {
        var l, t;
        let { field: s, onSave: r, onClose: i } = e,
          [d, E] = a.useState(
            null !== (l = null == s ? void 0 : s.label) && void 0 !== l ? l : ""
          ),
          [C, f] = a.useState(
            null !== (t = null == s ? void 0 : s.choices) && void 0 !== t
              ? t
              : [""]
          ),
          [g, p] = a.useState(null),
          [R, L] = a.useState(null),
          T = (e, l) => {
            null != g && p(null);
            let t = e.replace(/(\r\n|\n|\r)/g, " ");
            t.length > M.MAX_CHOICE_LENGTH &&
              (t = t.slice(0, M.MAX_CHOICE_LENGTH));
            let n = [...C];
            (n[l] = t), f(n);
          },
          v = (e, l, t) => {
            if (null == C) return;
            null != g && p(null);
            let n = C.indexOf(e),
              a = [...C];
            null != l && l !== n && (a.splice(n, 1), a.splice(l, 0, e), f(a)),
              t ? null !== l && L(null) : l !== R && L(l);
          },
          O = e => {
            null != g && p(null);
            let l = [...C.slice(0, e), ...C.slice(e + 1)];
            f(0 === l.length ? [""] : l);
          },
          j = async () => {
            null != g && p(null);
            let e = d.trim();
            if ("" === e) {
              p(
                _.default.Messages
                  .MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR
              );
              return;
            }
            let l = C.map(e => e.trim()).filter(e => "" !== e);
            if (0 === l.length) {
              p(_.default.Messages.MEMBER_VERIFICATION_CHOICES_REQUIRED_ERROR);
              return;
            }
            let t = {
              field_type: h.VerificationFormFieldTypes.MULTIPLE_CHOICE,
              label: e,
              choices: C,
              required: !0,
            };
            try {
              await r(t), i();
            } catch (l) {
              let e = new c.APIError(l);
              p(e.getAnyErrorMessage());
            }
          };
        return (0, n.jsxs)(m.default, {
          ...e,
          errorText: g,
          title:
            _.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onConfirm: j,
          onCancel: i,
          children: [
            (0, n.jsx)(u.TextInput, {
              autoFocus: !0,
              className: x.spacedItem,
              onChange: e => {
                null != g && p(null);
                let l = e.replace(/(\r\n|\n|\r)/g, " ");
                l.length > M.MAX_QUESTION_LENGTH &&
                  (l = e.slice(0, M.MAX_QUESTION_LENGTH)),
                  E(l);
              },
              placeholder:
                _.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
              value: d,
            }),
            (0, n.jsx)("div", { className: x.divider }),
            C.map((e, l) =>
              (0, n.jsx)(
                N,
                {
                  choice: e,
                  index: l,
                  onChange: e => T(e, l),
                  onClear: () => O(l),
                  onReorder: v,
                  isDropHovered: l === R,
                },
                "choice-".concat(l)
              )
            ),
            C.length !== M.MAX_NUM_CHOICES &&
              (0, n.jsxs)("div", {
                className: x.addItemContainer,
                children: [
                  (0, n.jsx)(I.default, {
                    height: 17,
                    width: 17,
                    color: o.default.unsafe_rawColors.BLUE_345.css,
                  }),
                  (0, n.jsx)(u.Clickable, {
                    className: x.addItemButton,
                    onClick: () => {
                      null != g && p(null),
                        C.length !== M.MAX_NUM_CHOICES && f([...C, ""]);
                    },
                    children: (0, n.jsx)(u.Text, {
                      color: "text-link",
                      variant: "text-md/normal",
                      children:
                        _.default.Messages
                          .MEMBER_VERIFICATION_MULTIPLE_CHOICE_ADD,
                    }),
                  }),
                ],
              }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=cc9262c94c48c47dee2a.js.map

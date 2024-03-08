(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81203"],
  {
    583789: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return c;
          },
        }),
        a("222007");
      var t = a("37983"),
        s = a("884691"),
        n = a("414456"),
        r = a.n(n),
        u = a("77078"),
        i = a("476765"),
        o = a("782340"),
        d = a("840921");
      function c(e) {
        let {
            errorText: l,
            title: a,
            description: n,
            transitionState: c,
            onCancel: E,
            onConfirm: R,
            children: _,
          } = e,
          h = (0, i.useUID)(),
          [M, m] = s.useState(!1),
          f = s.useCallback(async () => {
            m(!0);
            try {
              await R();
            } catch (e) {
              throw e;
            } finally {
              m(!1);
            }
          }, [R]);
        return (0, t.jsxs)(u.ModalRoot, {
          className: d.modal,
          transitionState: c,
          "aria-labelledby": h,
          size: u.ModalSize.SMALL,
          children: [
            (0, t.jsxs)(u.ModalContent, {
              className: d.modalContent,
              children: [
                (0, t.jsx)(u.Heading, {
                  variant: "heading-md/semibold",
                  id: h,
                  children: a,
                }),
                null != n && "" !== n
                  ? (0, t.jsx)(u.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: d.description,
                      children: n,
                    })
                  : null,
                (0, t.jsx)("div", { className: d.body, children: _ }),
                null != l && "" !== l
                  ? (0, t.jsx)(u.Text, {
                      className: d.errorText,
                      variant: "text-xs/normal",
                      color: "text-danger",
                      children: l,
                    })
                  : null,
              ],
            }),
            (0, t.jsxs)(u.ModalFooter, {
              children: [
                (0, t.jsx)(u.Button, {
                  submitting: M,
                  className: d.button,
                  size: u.Button.Sizes.SMALL,
                  color: u.Button.Colors.BRAND,
                  onClick: f,
                  children: o.default.Messages.SAVE,
                }),
                (0, t.jsx)(u.Button, {
                  className: r(d.cancelButton, d.button),
                  size: u.Button.Sizes.SMALL,
                  color: u.Button.Colors.PRIMARY,
                  onClick: E,
                  children: o.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    262099: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return b;
          },
        }),
        a("222007");
      var t = a("37983"),
        s = a("884691"),
        n = a("414456"),
        r = a.n(n),
        u = a("995008"),
        i = a.n(u),
        o = a("476042"),
        d = a("446674"),
        c = a("819855"),
        E = a("77078"),
        R = a("901582"),
        _ = a("448993"),
        h = a("841098"),
        M = a("850391"),
        m = a("149022"),
        f = a("681060"),
        C = a("449918"),
        x = a("42203"),
        I = a("923959"),
        L = a("381546"),
        N = a("673220"),
        g = a("351825"),
        v = a("567054"),
        A = a("583789"),
        p = a("394294"),
        S = a("49111"),
        T = a("782340"),
        U = a("840921");
      let j = "RULE";
      function B(e) {
        let {
            rule: l,
            rulesChannel: a,
            index: n,
            onChange: u,
            onKeyDown: i,
            onClear: d,
            onRuleReorder: c,
            isDropHovered: R,
            focused: _,
            onFocus: h,
            previewEnabled: C,
          } = e,
          x = s.useRef(null),
          I = s.useRef(null),
          [{ textValue: g, richValue: v }, A] = s.useState(
            (0, m.createState)(l.value)
          ),
          [, S, B] = (0, o.useDrag)({
            type: j,
            item: { rule: l, index: n },
            end: (e, l) => {
              null != e && !l.didDrop() && c(e.rule, null, !0);
            },
          }),
          [, F] = (0, o.useDrop)({
            accept: j,
            hover: (e, l) => {
              var a;
              let { index: t } = e,
                s =
                  null === (a = x.current) || void 0 === a
                    ? void 0
                    : a.getBoundingClientRect(),
                r = l.getClientOffset();
              if (null == s || null == r) return;
              let u = (s.bottom - s.top) / 2,
                i = r.y - s.top;
              (!(t < n) || !(i < u)) &&
                (!(t > n) || !(i > u)) &&
                c(e.rule, n, !1);
            },
            drop: e => {
              c(e.rule, n, !0);
            },
          });
        s.useLayoutEffect(
          () => (
            S(I),
            B(F(x)),
            () => {
              S(null), F(null);
            }
          ),
          [S, F, B]
        );
        if (
          (s.useEffect(() => {
            "" !== l.value && "" === g && A((0, m.createState)(l.value));
          }, [l.value, g]),
          null == a)
        )
          return null;
        let b = "" !== l.value ? l.value : l.id;
        return (0, t.jsxs)("div", {
          ref: x,
          className: r(U.draggableInputContainer, { [U.dragging]: R }),
          "data-dnd-name": b,
          children: [
            (0, t.jsxs)("div", {
              className: U.inputWrapper,
              children: [
                (0, t.jsx)(E.Clickable, {
                  onMouseDown: () => h(n),
                  children: (0, t.jsx)(f.default, {
                    innerClassName: U.rulesTextAreaInput,
                    type: M.ChatInputTypes.RULES_INPUT,
                    textValue: g,
                    richValue: v,
                    channel: a,
                    placeholder:
                      T.default.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,
                    focused: _,
                    onChange: (e, l, a) => {
                      let t = l;
                      t.length > p.MAX_RULE_LENGTH &&
                        (t = t.slice(0, p.MAX_RULE_LENGTH)),
                        l !== t && ((l = t), (a = (0, m.toRichValue)(t))),
                        u(l),
                        A({ textValue: l, richValue: a });
                    },
                    onKeyDown: i,
                    canMentionChannels: C,
                    canMentionRoles: C,
                    maxCharacterCount: p.MAX_RULE_LENGTH,
                    characterCountClassName: U.characterCount,
                    onSubmit: () =>
                      Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                  }),
                }),
                (0, t.jsx)(E.Button, {
                  className: U.clearButton,
                  onClick: d,
                  look: E.Button.Looks.BLANK,
                  size: E.Button.Sizes.NONE,
                  children: (0, t.jsx)(L.default, { className: U.clearIcon }),
                }),
                (0, t.jsx)(E.Text, {
                  className: U.rulesInputNumber,
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "".concat(n + 1, "."),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              ref: I,
              className: U.dragContainer,
              "data-dnd-name": b,
              children: (0, t.jsx)(N.default, { className: U.dragIcon }),
            }),
          ],
        });
      }
      function F(e) {
        let { shortRule: l, fullRule: a, disabled: s, onClick: n } = e;
        return s
          ? (0, t.jsx)(E.Tooltip, {
              text: T.default.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({
                number: p.MAX_NUM_RULES,
              }),
              children: e =>
                (0, t.jsx)("div", {
                  ...e,
                  className: r(U.exampleRule, { [U.disabled]: s }),
                  children: (0, t.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: l,
                  }),
                }),
            })
          : (0, t.jsx)(E.Clickable, {
              className: r(U.exampleRule, { [U.disabled]: s }),
              onClick: () => n(a),
              children: (0, t.jsx)(E.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: l,
              }),
            });
      }
      var b = function (e) {
        let { field: l, onSave: a, onClose: n, guild: r } = e,
          u = (0, h.default)(),
          o = r.rulesChannelId,
          M = r.hasFeature(S.GuildFeatures.PREVIEW_ENABLED),
          m = (0, d.useStateFromStores)([x.default], () =>
            null != o ? x.default.getChannel(o) : null
          ),
          f = (0, d.useStateFromStores)([I.default], () =>
            I.default.getDefaultChannel(r.id)
          ),
          [L, N] = s.useState(
            (null == l ? void 0 : l.values) != null
              ? null == l
                ? void 0
                : l.values.map(e => ({ id: i(), value: e }))
              : [{ id: i(), value: "" }]
          ),
          [j, b] = s.useState(null),
          [O, k] = s.useState(null),
          [V, y] = s.useState(0),
          D = e => {
            if (L.length !== p.MAX_NUM_RULES) {
              if (null != e && "" === L[L.length - 1].value) {
                let l = [...L];
                (l[L.length - 1].value = e), N(l), y(l.length - 1);
              } else
                N([...L, { id: i(), value: null != e ? e : "" }]), y(L.length);
            }
          },
          P = (e, l) => {
            let a = [...L];
            (a[l].value = e), N(a);
          },
          w = e => {
            let l = [...L.slice(0, e), ...L.slice(e + 1)];
            N(0 === l.length ? [{ id: i(), value: "" }] : l);
          },
          z = s.useCallback(
            (e, l, a) => {
              if (null == L) return;
              let t = L.indexOf(e);
              if (null != l && l !== t) {
                let a = [...L];
                a.splice(t, 1), a.splice(l, 0, e), N(a);
              }
              a ? null !== O && k(null) : l !== O && k(l);
            },
            [O, L]
          ),
          X = async () => {
            null != j && b(null);
            let e = L.map(e => e.value.trim()).filter(e => "" !== e);
            if (0 === e.length) {
              b(T.default.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);
              return;
            }
            let l = {
              field_type: v.VerificationFormFieldTypes.TERMS,
              label: T.default.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,
              values: e,
              required: !0,
            };
            try {
              await a(l), n();
            } catch (l) {
              let e = new _.APIError(l);
              b(e.getAnyErrorMessage());
            }
          },
          H = L.length === p.MAX_NUM_RULES;
        return (0, t.jsx)(R.default, {
          page: S.AnalyticsPages.GUILD_RULES_CREATE_MODAL,
          children: (0, t.jsxs)(A.default, {
            ...e,
            errorText: j,
            title: T.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,
            onCancel: n,
            onConfirm: X,
            children: [
              L.map((e, l) =>
                (0, t.jsx)(
                  B,
                  {
                    rulesChannel: null != m ? m : f,
                    rule: e,
                    index: l,
                    onChange: e => P(e, l),
                    onClear: () => w(l),
                    onRuleReorder: z,
                    isDropHovered: l === O,
                    focused: l === V,
                    onFocus: y,
                    previewEnabled: null == M || M,
                  },
                  e.id
                )
              ),
              !H &&
                (0, t.jsxs)("div", {
                  className: U.addItemContainer,
                  children: [
                    (0, t.jsx)(g.default, {
                      height: 17,
                      width: 17,
                      color: (0, C.getColor)(
                        (0, c.isThemeDark)(u)
                          ? S.Color.BLUE_345
                          : S.Color.BLUE_430
                      ),
                    }),
                    (0, t.jsx)(E.Clickable, {
                      className: U.addItemButton,
                      onClick: () => D(),
                      children: (0, t.jsx)(E.Text, {
                        color: "text-link",
                        variant: "text-md/normal",
                        children:
                          T.default.Messages.MEMBER_VERIFICATION_ADD_RULE,
                      }),
                    }),
                  ],
                }),
              (0, t.jsx)("div", { className: U.divider }),
              (0, t.jsx)(E.FormTitle, {
                children:
                  T.default.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE,
              }),
              (0, t.jsxs)("div", {
                className: U.termsExampleRulesContainer,
                children: [
                  (0, t.jsxs)("div", {
                    className: U.termsExampleRulePairContainer,
                    children: [
                      (0, t.jsx)(F, {
                        shortRule:
                          T.default.Messages
                            .MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,
                        fullRule:
                          T.default.Messages
                            .MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,
                        disabled: H,
                        onClick: D,
                      }),
                      (0, t.jsx)(F, {
                        shortRule:
                          T.default.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,
                        fullRule:
                          T.default.Messages
                            .MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,
                        disabled: H,
                        onClick: D,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: U.termsExampleRulePairContainer,
                    children: [
                      (0, t.jsx)(F, {
                        shortRule:
                          T.default.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,
                        fullRule:
                          T.default.Messages
                            .MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,
                        disabled: H,
                        onClick: D,
                      }),
                      (0, t.jsx)(F, {
                        shortRule:
                          T.default.Messages.MEMBER_VERIFICATION_RULE_SAFE,
                        fullRule:
                          T.default.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,
                        disabled: H,
                        onClick: D,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=65e17696a3ab1b283938.js.map

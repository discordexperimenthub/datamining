(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28791"],
  {
    376507: function (e, t, s) {
      "use strict";
      function n(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          s = e.replace(/-/g, "+").replace(/_/g, "/") + t,
          n = atob(s),
          l = new ArrayBuffer(n.length),
          a = new Uint8Array(l);
        for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
        return l;
      }
      function l(e) {
        let t = new Uint8Array(e),
          s = "";
        for (let e of t) s += String.fromCharCode(e);
        let n = btoa(s),
          l = n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        return l;
      }
      s.r(t),
        s.d(t, {
          create: function () {
            return g;
          },
          get: function () {
            return x;
          },
        }),
        s("781738"),
        s("101997"),
        s("311790"),
        s("477657"),
        s("811875"),
        s("90301"),
        s("652153"),
        s("28797"),
        s("817884"),
        s("597349"),
        s("667536"),
        s("690341"),
        s("222007"),
        s("70102");
      var a = "copy",
        r = "convert";
      function i(e, t, s) {
        if (t === a) return s;
        if (t === r) return e(s);
        if (t instanceof Array) return s.map(s => i(e, t[0], s));
        if (t instanceof Object) {
          let n = {};
          for (let [l, a] of Object.entries(t)) {
            if (a.derive) {
              let e = a.derive(s);
              void 0 !== e && (s[l] = e);
            }
            if (!(l in s)) {
              if (a.required) throw Error("Missing key: ".concat(l));
              continue;
            }
            if (null == s[l]) {
              n[l] = null;
              continue;
            }
            n[l] = i(e, a.schema, s[l]);
          }
          return n;
        }
      }
      function o(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function u(e) {
        return { required: !0, schema: e };
      }
      function d(e) {
        return { required: !1, schema: e };
      }
      var c = { type: u(a), id: u(r), transports: d(a) },
        f = { appid: d(a), appidExclude: d(a), credProps: d(a) },
        h = { appid: d(a), appidExclude: d(a), credProps: d(a) },
        _ = {
          publicKey: u({
            rp: u(a),
            user: u({ id: u(r), name: u(a), displayName: u(a) }),
            challenge: u(r),
            pubKeyCredParams: u(a),
            timeout: d(a),
            excludeCredentials: d([c]),
            authenticatorSelection: d(a),
            attestation: d(a),
            extensions: d(f),
          }),
          signal: d(a),
        },
        m = {
          type: u(a),
          id: u(a),
          rawId: u(r),
          authenticatorAttachment: d(a),
          response: u({
            clientDataJSON: u(r),
            attestationObject: u(r),
            transports: o(a, e => {
              var t;
              return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
          }),
          clientExtensionResults: o(h, e => e.getClientExtensionResults()),
        },
        E = {
          mediation: d(a),
          publicKey: u({
            challenge: u(r),
            timeout: d(a),
            rpId: d(a),
            allowCredentials: d([c]),
            userVerification: d(a),
            extensions: d(f),
          }),
          signal: d(a),
        },
        p = {
          type: u(a),
          id: u(a),
          rawId: u(r),
          authenticatorAttachment: d(a),
          response: u({
            clientDataJSON: u(r),
            authenticatorData: u(r),
            signature: u(r),
            userHandle: u(r),
          }),
          clientExtensionResults: o(h, e => e.getClientExtensionResults()),
        };
      async function g(e) {
        let t = await navigator.credentials.create(i(n, _, e));
        return i(l, m, t);
      }
      async function x(e) {
        let t = await navigator.credentials.get(i(n, E, e));
        return i(l, p, t);
      }
    },
    695501: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SELECT_NAMES: function () {
            return l;
          },
        });
      var n = s("782340");
      let l = {
        get webauthn() {
          return n.default.Messages.MFA_V2_WEBAUTHN_NAME;
        },
        get totp() {
          return n.default.Messages.MFA_V2_TOTP_NAME;
        },
        get sms() {
          return n.default.Messages.MFA_V2_SMS_NAME;
        },
        get password() {
          return n.default.Messages.MFA_V2_PASSWORD_NAME;
        },
        get backup() {
          return n.default.Messages.MFA_V2_BACKUP_NAME;
        },
      };
    },
    24287: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MFAModal: function () {
            return T;
          },
          MFASlides: function () {
            return b;
          },
          openMFAModal: function () {
            return O;
          },
        }),
        s("222007"),
        s("781738"),
        s("506083"),
        s("70102");
      var n = s("37983"),
        l = s("884691"),
        a = s("376507"),
        r = s("310379"),
        i = s("872717"),
        o = s("77078"),
        u = s("145131"),
        d = s("772280"),
        c = s("773336"),
        f = s("286235"),
        h = s("50885"),
        _ = s("695501"),
        m = s("49111"),
        E = s("782340"),
        p = s("929037");
      function g(e) {
        let { subtitle: t, onClose: s } = e;
        return (0, n.jsxs)(o.ModalHeader, {
          direction: u.default.Direction.VERTICAL,
          className: p.header,
          separator: !1,
          children: [
            (0, n.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: E.default.Messages.MFA_V2_HEADER,
            }),
            null != t &&
              (0, n.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-md/normal",
                className: p.subtitle,
                children: t,
              }),
            (0, n.jsx)(o.ModalCloseButton, {
              className: p.closeButton,
              onClick: s,
            }),
          ],
        });
      }
      function x(e) {
        let { children: t } = e;
        return (0, n.jsx)(o.ModalContent, {
          className: p.content,
          children: t,
        });
      }
      function S(e) {
        let { error: t } = e;
        return null == t
          ? null
          : (0, n.jsx)(o.Text, {
              className: p.error,
              variant: "text-sm/normal",
              color: "text-danger",
              children: t,
            });
      }
      function C(e) {
        let { request: t, setSlide: s, showConfirm: l = !1, ...a } = e,
          r = t.methods.length > 1;
        return r || l
          ? (0, n.jsxs)(o.ModalFooter, {
              className: p.footer,
              direction:
                l && !r
                  ? u.default.Direction.HORIZONTAL_REVERSE
                  : u.default.Direction.HORIZONTAL,
              children: [
                r &&
                  (0, n.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    onClick: () => s("select"),
                    color: o.Button.Colors.PRIMARY,
                    children: E.default.Messages.MFA_V2_GO_TO_SELECT,
                  }),
                l &&
                  (0, n.jsx)(o.Button, {
                    type: "submit",
                    ...a,
                    children: E.default.Messages.CONFIRM,
                  }),
              ],
            })
          : null;
      }
      function A(e) {
        let { request: t, setSlide: s, onClose: l } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(g, {
              subtitle: E.default.Messages.MFA_V2_SELECT_HEADER,
              onClose: l,
            }),
            (0, n.jsx)(x, {
              children: t.methods.map(e =>
                (0, n.jsxs)(
                  o.Clickable,
                  {
                    className: p.listItemContainer,
                    onClick: () => {
                      s(e.type);
                    },
                    children: [
                      (0, n.jsx)(o.Text, {
                        className: p.listItemText,
                        variant: "text-md/semibold",
                        children: _.SELECT_NAMES[e.type],
                      }),
                      (0, n.jsx)(d.default, {
                        width: 20,
                        height: 20,
                        className: p.listItemArrow,
                      }),
                    ],
                  },
                  e.type
                )
              ),
            }),
          ],
        });
      }
      function M(e) {
        let { request: t, finish: s, setSlide: r, onClose: i } = e,
          [u, d] = l.useState(!1),
          [_, p] = l.useState(null),
          { challenge: A } = t.methods.find(e => "webauthn" === e.type),
          M = async () => {
            d(!0), p(null);
            let e =
                c.isPlatformEmbedded &&
                h.default.supportsFeature(m.NativeFeatures.WEBAUTHN)
                  ? h.default.webAuthnAuthenticate(A)
                  : a.get(JSON.parse(A)).then(e => JSON.stringify(e)),
              t = async e => {
                try {
                  await s({ mfaType: "webauthn", data: e });
                } catch (e) {
                  var t;
                  p(
                    null !== (t = e.message) && void 0 !== t
                      ? t
                      : E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR
                  );
                }
              };
            try {
              let s = await e;
              await t(s);
            } catch (e) {
              f.default.captureException(e),
                p(E.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR);
            } finally {
              d(!1);
            }
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(g, { onClose: i }),
            (0, n.jsxs)(x, {
              children: [
                (0, n.jsx)(o.Button, {
                  submitting: u,
                  onClick: M,
                  children: E.default.Messages.MFA_V2_WEBAUTHN_CTA,
                }),
                (0, n.jsx)(S, { error: _ }),
              ],
            }),
            (0, n.jsx)(C, { request: t, setSlide: r }),
          ],
        });
      }
      function v(e) {
        let {
            request: t,
            finish: s,
            setSlide: a,
            onClose: i,
            isSlideReady: u,
          } = e,
          [d, c] = l.useState(!1),
          [f, h] = l.useState(null),
          [_, m] = l.useState(""),
          p = l.useRef(null),
          A = E.default.Messages.TWO_FA_ENTER_BACKUP_LABEL,
          M = E.default.Messages.TWO_FA_BACKUP_CODE,
          v = l.useCallback(
            e => {
              m(e), h(null);
            },
            [m, h]
          );
        return (
          l.useEffect(() => {
            if (u) {
              var e;
              null === (e = p.current) || void 0 === e || e.focus();
            }
          }, [u]),
          (0, n.jsxs)("form", {
            onSubmit: e => {
              e.preventDefault(),
                c(!0),
                s({ mfaType: "backup", data: _.replace(/-/g, "") })
                  .catch(e => {
                    var t, s;
                    h(
                      null !== (s = e.message) && void 0 !== s
                        ? s
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.message
                    );
                  })
                  .finally(() => {
                    c(!1);
                  });
            },
            children: [
              (0, n.jsx)(g, { onClose: i }),
              (0, n.jsx)(x, {
                children: (0, n.jsxs)(o.FormItem, {
                  title: A,
                  children: [
                    (0, n.jsx)(o.TextInput, {
                      inputRef: p,
                      onChange: v,
                      placeholder: M,
                      maxLength: r.BACKUP_CODE_MAX_LENGTH,
                      minLength: r.BACKUP_CODE_MIN_LENGTH,
                      value: _,
                      spellCheck: "false",
                      disabled: d,
                    }),
                    (0, n.jsx)(S, { error: f }),
                  ],
                }),
              }),
              (0, n.jsx)(C, {
                request: t,
                setSlide: a,
                showConfirm: !0,
                disabled: _.length < 8,
                submitting: d,
              }),
            ],
          })
        );
      }
      function j(e) {
        let {
            request: t,
            finish: s,
            setSlide: a,
            onClose: i,
            isSlideReady: u,
          } = e,
          [d, c] = l.useState(!1),
          [f, h] = l.useState(null),
          [_, m] = l.useState(""),
          p = l.useRef(null);
        return (
          l.useEffect(() => {
            if (u) {
              var e;
              null === (e = p.current) || void 0 === e || e.focus();
            }
          }, [u]),
          (0, n.jsxs)("form", {
            onSubmit: e => {
              e.preventDefault(),
                c(!0),
                s({ mfaType: "totp", data: _ })
                  .catch(e => {
                    var t, s;
                    h(
                      null !== (s = e.message) && void 0 !== s
                        ? s
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.message
                    );
                  })
                  .finally(() => {
                    c(!1);
                  });
            },
            children: [
              (0, n.jsx)(g, { onClose: i }),
              (0, n.jsx)(x, {
                children: (0, n.jsxs)(o.FormItem, {
                  title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                  children: [
                    (0, n.jsx)(o.TextInput, {
                      inputRef: p,
                      onChange: m,
                      placeholder:
                        E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                      maxLength: r.TOTP_CODE_LENGTH,
                      minLength: r.TOTP_CODE_LENGTH,
                      value: _,
                      autoComplete: "one-time-code",
                      spellCheck: "false",
                      disabled: d,
                    }),
                    (0, n.jsx)(S, { error: f }),
                  ],
                }),
              }),
              (0, n.jsx)(C, {
                request: t,
                setSlide: a,
                showConfirm: !0,
                disabled: _.length !== r.TOTP_CODE_LENGTH,
                submitting: d,
              }),
            ],
          })
        );
      }
      function N(e) {
        let {
            request: t,
            finish: s,
            setSlide: a,
            onClose: u,
            isSlideReady: d,
          } = e,
          [c, f] = l.useState(!1),
          [h, _] = l.useState(null),
          [A, M] = l.useState(!1),
          [v, j] = l.useState(null),
          [N, y] = l.useState(""),
          T = l.useRef(null);
        l.useEffect(() => {
          f(!0),
            i.default
              .post({
                url: m.Endpoints.LOGIN_SMS_SEND,
                body: { ticket: t.ticket },
                oldFormErrors: !0,
              })
              .then(e => {
                _(e.body.phone);
              })
              .catch(e => {
                var t;
                j(
                  e.message ||
                    (null === (t = e.body) || void 0 === t ? void 0 : t.message)
                );
              })
              .finally(() => {
                f(!1);
              });
        }, [t.ticket]),
          l.useEffect(() => {
            if (d) {
              var e;
              null === (e = T.current) || void 0 === e || e.focus();
            }
          }, [d]);
        let b =
          null == h
            ? E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING
            : E.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                phoneNumber: h,
              });
        return (0, n.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(),
              M(!0),
              s({ mfaType: "sms", data: N })
                .catch(e => {
                  var t, s;
                  j(
                    null !== (s = e.message) && void 0 !== s
                      ? s
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.message
                  );
                })
                .finally(() => {
                  M(!1);
                });
          },
          children: [
            (0, n.jsx)(g, { subtitle: b, onClose: u }),
            (0, n.jsx)(x, {
              children: (0, n.jsxs)(o.FormItem, {
                title: E.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                children: [
                  (0, n.jsxs)("div", {
                    className: p.smsInputContainer,
                    children: [
                      (0, n.jsx)(o.TextInput, {
                        className: p.smsInput,
                        inputRef: T,
                        onChange: y,
                        placeholder:
                          E.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                        maxLength: 10,
                        value: N,
                        autoComplete: "one-time-code",
                        spellCheck: "false",
                        disabled: A,
                      }),
                      (0, n.jsx)(o.Button, {
                        size: o.Button.Sizes.MEDIUM,
                        submitting: c,
                        onClick: () => {
                          i.default
                            .post({
                              url: m.Endpoints.LOGIN_SMS_SEND,
                              body: { ticket: t.ticket },
                              oldFormErrors: !0,
                            })
                            .then(e => {
                              _(e.body.phone);
                            })
                            .catch(e => {
                              var t;
                              j(
                                e.message ||
                                  (null === (t = e.body) || void 0 === t
                                    ? void 0
                                    : t.message)
                              );
                            });
                        },
                        children: E.default.Messages.MFA_SMS_RESEND,
                      }),
                    ],
                  }),
                  (0, n.jsx)(S, { error: v }),
                ],
              }),
            }),
            (0, n.jsx)(C, {
              request: t,
              setSlide: a,
              showConfirm: !0,
              disabled: N.length !== r.SMS_CODE_LENGTH,
              submitting: A,
            }),
          ],
        });
      }
      function y(e) {
        let {
            request: t,
            finish: s,
            setSlide: a,
            onClose: r,
            isSlideReady: i,
          } = e,
          [u, d] = l.useState(!1),
          [c, f] = l.useState(null),
          [h, _] = l.useState(""),
          m = l.useRef(null);
        return (
          l.useEffect(() => {
            if (i) {
              var e;
              null === (e = m.current) || void 0 === e || e.focus();
            }
          }, [i]),
          (0, n.jsxs)("form", {
            onSubmit: e => {
              e.preventDefault(),
                d(!0),
                s({ mfaType: "password", data: h })
                  .catch(e => {
                    var t, s;
                    f(
                      null !== (s = e.message) && void 0 !== s
                        ? s
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.message
                    );
                  })
                  .finally(() => {
                    d(!1);
                  });
            },
            children: [
              (0, n.jsx)(g, { onClose: r }),
              (0, n.jsx)(x, {
                children: (0, n.jsxs)(o.FormItem, {
                  title: E.default.Messages.FORM_LABEL_PASSWORD,
                  children: [
                    (0, n.jsx)(o.TextInput, {
                      inputRef: m,
                      onChange: _,
                      value: h,
                      type: "password",
                      autoComplete: "password",
                      spellCheck: "false",
                      disabled: u,
                    }),
                    (0, n.jsx)(S, { error: c }),
                  ],
                }),
              }),
              (0, n.jsx)(C, {
                request: t,
                setSlide: a,
                showConfirm: !0,
                disabled: 0 === h.length,
                submitting: u,
              }),
            ],
          })
        );
      }
      function T(e) {
        let { transitionState: t, request: s, finish: l, onClose: a } = e;
        return (0, n.jsx)(o.ModalRoot, {
          transitionState: t,
          size: o.ModalSize.SMALL,
          "aria-label": E.default.Messages.MFA_V2_HEADER,
          children: (0, n.jsx)(b, {
            request: s,
            mfaFinish: l,
            onClose: a,
            onEarlyClose: a,
          }),
        });
      }
      function b(e) {
        var t, s;
        let {
            request: a,
            mfaFinish: r,
            onEarlyClose: i,
            onClose: u,
            width: d = 440,
          } = e,
          [c, f] = l.useState(
            null !==
              (s =
                null === (t = a.methods[0]) || void 0 === t
                  ? void 0
                  : t.type) && void 0 !== s
              ? s
              : "select"
          ),
          [h, _] = l.useState(c),
          m = async e => {
            let { mfaType: t, data: s } = e;
            await r({ mfaType: t, data: s, ticket: a.ticket }),
              null != u && u();
          },
          E = { request: a, finish: m, setSlide: f, onClose: i };
        return (0, n.jsxs)(o.Slides, {
          activeSlide: c,
          width: d,
          onSlideReady: _,
          children: [
            (0, n.jsx)(o.Slide, {
              id: "select",
              children: (0, n.jsx)(A, { ...E }),
            }),
            (0, n.jsx)(o.Slide, {
              id: "webauthn",
              children: (0, n.jsx)(M, { ...E }),
            }),
            (0, n.jsx)(o.Slide, {
              id: "totp",
              children: (0, n.jsx)(j, { ...E, isSlideReady: "totp" === h }),
            }),
            (0, n.jsx)(o.Slide, {
              id: "sms",
              children: (0, n.jsx)(N, { ...E, isSlideReady: "sms" === h }),
            }),
            (0, n.jsx)(o.Slide, {
              id: "backup",
              children: (0, n.jsx)(v, { ...E, isSlideReady: "backup" === h }),
            }),
            (0, n.jsx)(o.Slide, {
              id: "password",
              children: (0, n.jsx)(y, { ...E, isSlideReady: "password" === h }),
            }),
          ],
        });
      }
      function O(e, t, s) {
        (0, o.openModal)(s => (0, n.jsx)(T, { finish: t, request: e, ...s }), {
          onCloseCallback: () => {
            s(Error(E.default.Messages.MFA_V2_CANCELED));
          },
        });
      }
    },
    310379: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          BACKUP_CODE_MIN_LENGTH: function () {
            return l;
          },
          BACKUP_CODE_MAX_LENGTH: function () {
            return a;
          },
          TOTP_CODE_LENGTH: function () {
            return r;
          },
          SMS_CODE_LENGTH: function () {
            return i;
          },
          trySubmit: function () {
            return u;
          },
        }),
        s("70102");
      var n = s("872717");
      let l = 8,
        a = 11,
        r = 6,
        i = 6;
      async function o(e) {
        let { ticket: t, mfaType: s, data: l } = e,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        try {
          let e = await n.default.post({
            url: "/mfa/finish",
            body: { ticket: t, mfa_type: s, data: l },
            retries: a,
          });
          return e.body;
        } catch (e) {
          var r;
          if (null === (r = e.body) || void 0 === r ? void 0 : r.message)
            throw Error(e.body.message);
          throw e;
        }
      }
      async function u(e, t) {
        let { token: s } = await o(e);
        return new Promise((e, n) => {
          t({ "X-Discord-MFA-Authorization": s }, t => {
            var s, l;
            return (null === (s = t.body) || void 0 === s ? void 0 : s.code) ===
              60008 ||
              (null === (l = t.body) || void 0 === l ? void 0 : l.code) ===
                60003
              ? (n(Error(t.body.message)), !0)
              : (e(), !1);
          });
        });
      }
    },
  },
]);
//# sourceMappingURL=28791.9924a4f56d9f5012809e.js.map

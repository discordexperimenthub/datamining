(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41834"],
  {
    246369: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3e73cad4071cd76e902a.svg";
    },
    283117: function (e, t, n) {
      "use strict";
      e.exports = n.p + "848be2046a43c09df86c.svg";
    },
    430713: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("872717"),
        a = n("913144"),
        o = n("650893"),
        l = n("49111");
      function r(e, t) {
        return (
          a.default.dispatch({ type: "MFA_SMS_TOGGLE" }),
          i.HTTP.post({
            url: e,
            body: { password: t },
            oldFormErrors: !0,
          }).then(
            e => (a.default.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e),
            e => {
              throw (
                (a.default.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e)
              );
            }
          )
        );
      }
      var s = {
        async enableMFAStart(e) {
          let t = await i.HTTP.post({
            url: l.Endpoints.MFA_TOTP_ENABLE,
            body: { password: e },
            oldFormErrors: !0,
          });
          return t.body;
        },
        async verifyEmailCode(e) {
          let t = await i.HTTP.post({
            url: l.Endpoints.MFA_TOTP_ENABLE_VERIFY,
            body: { code: e },
          });
          return t.body;
        },
        resendEmailCode: e =>
          i.HTTP.post({
            url: l.Endpoints.MFA_TOTP_ENABLE_RESEND,
            body: { password: e },
          }),
        setEmailToken(e) {
          a.default.dispatch({ type: "MFA_ENABLE_EMAIL_TOKEN", token: e });
        },
        enable(e) {
          let { password: t, code: n, secret: o, emailToken: r } = e;
          return i.HTTP.post({
            url: l.Endpoints.MFA_TOTP_ENABLE,
            body: { code: n, secret: o, password: t, email_token: r },
            oldFormErrors: !0,
          }).then(e =>
            a.default.dispatch({
              type: "MFA_ENABLE_SUCCESS",
              token: e.body.token,
              codes: e.body.backup_codes,
            })
          );
        },
        disable() {
          i.HTTP.post({
            url: l.Endpoints.MFA_TOTP_DISABLE,
            oldFormErrors: !0,
          }).then(e => {
            let {
              body: { token: t },
            } = e;
            return a.default.dispatch({
              type: "MFA_DISABLE_SUCCESS",
              token: t,
            });
          });
        },
        enableSMS: e => r(l.Endpoints.MFA_SMS_ENABLE, e),
        disableSMS: e => r(l.Endpoints.MFA_SMS_DISABLE, e),
        sendMFABackupCodesVerificationKeyEmail: e =>
          i.HTTP.post({
            url: l.Endpoints.MFA_SEND_VERIFICATION_KEY,
            body: { password: e },
            oldFormErrors: !0,
          }).then(
            e =>
              a.default.dispatch({
                type: "MFA_SEND_VERIFICATION_KEY",
                nonces: {
                  viewNonce: e.body.nonce,
                  regenerateNonce: e.body.regenerate_nonce,
                },
              }),
            e => {
              throw e;
            }
          ),
        confirmViewBackupCodes(e, t) {
          let { viewNonce: n, regenerateNonce: r } = o.default.getNonces();
          return i.HTTP.post({
            url: l.Endpoints.MFA_CODES_VERIFICATION,
            body: { key: e, nonce: t ? r : n, regenerate: t },
            oldFormErrors: !0,
          }).then(
            t =>
              a.default.dispatch({
                type: "MFA_VIEW_BACKUP_CODES",
                codes: t.body.backup_codes,
                key: e,
              }),
            e => {
              throw e;
            }
          );
        },
        clearBackupCodes() {
          a.default.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
        },
      };
    },
    338807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChecklistItem: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("414456"),
        o = n.n(a),
        l = n("669491"),
        r = n("77078");
      n("357412");
      var s = n("381546"),
        d = n("775955");
      n("782340");
      var c = n("894555");
      n("283117"), n("487663");
      let u = e => {
        let {
            name: t,
            description: n,
            checked: a,
            actionLabel: u,
            actionHandler: E,
          } = e,
          _ = null;
        return (
          (_ = a
            ? (0, i.jsx)(d.default, { width: 20, height: 20 })
            : (0, i.jsx)(s.default, {
                color: l.default.unsafe_rawColors.RED_400.css,
                width: 20,
                height: 20,
              })),
          (0, i.jsxs)("div", {
            className: c.checklistItem,
            children: [
              (0, i.jsx)("div", { className: c.checklistIcon, children: _ }),
              (0, i.jsxs)("div", {
                className: o(c.checklistText, a && c.ineligibleRow),
                children: [
                  (0, i.jsx)(r.Heading, {
                    variant: "heading-md/semibold",
                    className: c.checklistItemName,
                    children: t,
                  }),
                  (0, i.jsx)(r.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: n,
                  }),
                ],
              }),
              null != u &&
                (0, i.jsx)("div", {
                  className: c.eligibilityActionContainer,
                  children: (0, i.jsx)(r.Button, {
                    className: c.eligibilityActionButton,
                    look: r.ButtonLooks.OUTLINED,
                    color: r.ButtonColors.PRIMARY,
                    onClick: E,
                    grow: !0,
                    children: u,
                  }),
                }),
            ],
          })
        );
      };
    },
    702053: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        o = n("77078"),
        l = n("357412"),
        r = n("592407"),
        s = n("803163"),
        d = n("395905"),
        c = n("338807"),
        u = n("219772"),
        E = n("49111"),
        _ = n("782340"),
        f = n("306671"),
        M = n("246369");
      function A() {
        return (0, i.jsxs)("div", {
          className: f.eligibilityHeader,
          children: [
            (0, i.jsx)(o.Heading, {
              className: f.eligibilityHeaderText,
              variant: "heading-lg/extrabold",
              color: "header-primary",
              children:
                _.default.Messages
                  .GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2,
            }),
            (0, i.jsx)("img", {
              className: f.eligibilityHeaderImage,
              src: M,
              alt: "",
            }),
            (0, i.jsx)(o.ModalCloseButton, {
              className: f.eligibilityHeaderCloseButton,
              onClick: () => {
                (0, o.closeModal)(u.ELIGIBILITY_MODAL_KEY);
              },
            }),
          ],
        });
      }
      function S(e) {
        let {
            eligibility: t,
            eligibilityLoading: n,
            eligibilityError: _,
            guildId: M,
            onEligibilityBecameStale: A,
          } = e,
          S = a.useMemo(
            () => ({
              onEligibilityBecameStale: A,
              sortedByIneligible: !0,
              actions: {
                onEnableMFAClick: s.default.enableMFA,
                onRequireModeratorMFAClick: () => {
                  (0, o.closeModal)(u.ELIGIBILITY_MODAL_KEY),
                    r.default.open(
                      M,
                      E.GuildSettingsSections.SAFETY,
                      void 0,
                      E.GuildSettingsSubsections.SAFETY_PERMISSIONS
                    );
                },
              },
            }),
            [M, A]
          ),
          h = (0, l.default)(t, S);
        return null != _
          ? (0, i.jsx)("div", {
              className: f.paddedContainer,
              children: (0, i.jsx)(d.default, { children: _.message }),
            })
          : null == h || n
            ? (0, i.jsx)("div", {
                className: f.paddedContainer,
                children: (0, i.jsx)(o.Spinner, {}),
              })
            : (0, i.jsx)("div", {
                children: h.map((e, t) =>
                  (0, i.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        (0, i.jsx)(c.ChecklistItem, {
                          name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                          description: e.description,
                          checked: e.checked,
                          actionLabel: e.actionLabel,
                          actionHandler: e.actionHandler,
                        }),
                        t < h.length - 1 ? (0, i.jsx)(o.FormDivider, {}) : null,
                      ],
                    },
                    e.checkedLabel
                  )
                ),
              });
      }
      function h(e) {
        let {
          eligibility: t,
          eligibilityLoading: n,
          eligibilityError: a,
          refreshEligibility: l,
          guildId: r,
          transitionState: s,
        } = e;
        return (0, i.jsxs)(o.ModalRoot, {
          className: f.eligibilityModal,
          size: o.ModalSize.MEDIUM,
          transitionState: s,
          children: [
            (0, i.jsx)(A, {}),
            (0, i.jsx)(o.ModalContent, {
              children: (0, i.jsx)(S, {
                eligibility: t,
                eligibilityLoading: n,
                eligibilityError: a,
                guildId: r,
                onEligibilityBecameStale: l,
              }),
            }),
          ],
        });
      }
    },
    775955: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("669491"),
        o = n("75196");
      function l(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: l = a.default.unsafe_rawColors.WHITE_500.css,
          backgroundColor: r = a.default.unsafe_rawColors.BRAND_500.css,
          ...s
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, o.default)(s),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: [
            (0, i.jsx)("path", {
              fill: r,
              d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, i.jsx)("path", {
              d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
              fill: l,
            }),
          ],
        });
      }
    },
    663657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isMfaEmailVerificationEnabled: function () {
            return o;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-07_mfa_email_verification",
        label: "Safety Experience Mfa Email Verification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o() {
        let { enabled: e } = a.getCurrentConfig(
          { location: "41ef90_2" },
          { autoTrackExposure: !0 }
        );
        return e;
      }
    },
    803163: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          showMFASuccessModal: function () {
            return _;
          },
          default: function () {
            return f;
          },
        }),
        n("70102"),
        n("222007");
      var i = n("37983"),
        a = n("884691"),
        o = n("627929"),
        l = n("77078"),
        r = n("430713"),
        s = n("663657"),
        d = n("49111"),
        c = n("782340");
      function u(e) {
        let { onError: t, onSuccess: n, PasswordConfirm: l, ...s } = e,
          [u, E] = a.useState("");
        return (0, i.jsx)(l, {
          ...s,
          handleSubmit: e => r.default.enableMFAStart(e),
          onError: e => {
            var i;
            if (
              ("object" == typeof (i = e) &&
              null != i &&
              (0, o.hasOwnProperty)(i, "code") &&
              "number" == typeof i.code
                ? i.code
                : 0) === d.AbortCodes.MFA_INVALID_SECRET
            )
              n(u), s.onClose();
            else t(e);
          },
          onPasswordChange: E,
          title: c.default.Messages.TWO_FA_ENABLE,
          actionText: c.default.Messages.CONTINUE,
          skipErrorMsgAbortCode: d.AbortCodes.MFA_INVALID_SECRET,
        });
      }
      function E(e, t) {
        return new Promise(a => {
          (0, l.openModalLazy)(async () => {
            let { default: o } = await n.el("936380").then(n.bind(n, "936380"));
            return n =>
              (0, i.jsx)(o, {
                ...n,
                password: e,
                emailToken: t,
                handleEnableMFASuccess: a,
              });
          });
        });
      }
      function _() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return new Promise(t => {
          (0, l.openModalLazy)(
            async () => {
              let { default: t } = await n
                .el("184504")
                .then(n.bind(n, "184504"));
              return n => (0, i.jsx)(t, { ...n, isTotp: e });
            },
            { onCloseCallback: t, onCloseRequest: d.NOOP_NULL }
          );
        });
      }
      var f = {
        enableMFA: async function e() {
          let e = await new Promise((e, t) => {
            (0, l.openModalLazy)(async () => {
              let { default: a } = await n
                .el("583227")
                .then(n.bind(n, "583227"));
              return n =>
                (0, i.jsx)(u, {
                  ...n,
                  onSuccess: e,
                  onError: t,
                  PasswordConfirm: a,
                });
            });
          });
          if ((0, s.isMfaEmailVerificationEnabled)()) {
            var t;
            let a = await ((t = e),
            new Promise(e => {
              (0, l.openModalLazy)(async () => {
                let { default: a } = await n
                  .el("644512")
                  .then(n.bind(n, "644512"));
                return n =>
                  (0, i.jsx)(a, {
                    ...n,
                    onFormSubmit: async e => await r.default.verifyEmailCode(e),
                    onResend: async () => {
                      await r.default.resendEmailCode(t);
                    },
                    onSuccess: e,
                    headerText:
                      c.default.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                    confirmButtonText: c.default.Messages.NEXT,
                  });
              });
            }));
            await E(e, null == a ? void 0 : a.token);
          } else await E(e);
          await _();
        },
      };
    },
    650893: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var i = n("917351"),
        a = n.n(i),
        o = n("171718"),
        l = n("446674"),
        r = n("913144");
      let s = !1,
        d = [],
        c = "",
        u = "",
        E = !1,
        _ = { viewNonce: "", regenerateNonce: "" };
      class f extends l.default.Store {
        getVerificationKey() {
          return c;
        }
        getBackupCodes() {
          return d;
        }
        get togglingSMS() {
          return s;
        }
        getNonces() {
          return _;
        }
        get emailToken() {
          return u;
        }
        get hasSeenBackupPrompt() {
          return E;
        }
      }
      f.displayName = "MFAStore";
      var M = new f(r.default, {
        MFA_ENABLE_SUCCESS: function (e) {
          let { token: t, codes: n } = e;
          void 0 !== t && o.setToken(t), (d = n);
        },
        MFA_ENABLE_EMAIL_TOKEN: function (e) {
          let { token: t } = e;
          u = t;
        },
        MFA_DISABLE_SUCCESS: function (e) {
          let { token: t } = e;
          o.setToken(t);
        },
        MFA_SMS_TOGGLE: function () {
          s = !0;
        },
        MFA_SMS_TOGGLE_COMPLETE: function () {
          s = !1;
        },
        MFA_CLEAR_BACKUP_CODES: function () {
          d = [];
        },
        MFA_VIEW_BACKUP_CODES: function (e) {
          let { codes: t, key: n } = e;
          (d = a.sortBy(t, "code")), (c = n);
        },
        MFA_SEND_VERIFICATION_KEY: function (e) {
          let { nonces: t } = e;
          _ = t;
        },
        MFA_SEEN_BACKUP_CODE_PROMPT: function () {
          E = !0;
        },
      });
    },
  },
]);
//# sourceMappingURL=f0d857e31400a2e98970.js.map

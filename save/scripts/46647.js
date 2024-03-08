(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46647"],
  {
    92693: function (e, t, n) {
      "use strict";
      e.exports = n.p + "0c1a82e7889ced7b3bf1.svg";
    },
    152584: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          accountDetailsInit: function () {
            return N;
          },
          accountDetailsClose: function () {
            return c;
          },
          disableAccount: function () {
            return C;
          },
          saveAccountRequest: function () {
            return A;
          },
          saveAccountChanges: function () {
            return I;
          },
          getHarvestStatus: function () {
            return f;
          },
          requestHarvest: function () {
            return R;
          },
          setPendingAvatar: function () {
            return U;
          },
          setPendingGlobalNameName: function () {
            return O;
          },
          setPendingAvatarDecoration: function () {
            return m;
          },
          setPendingProfileEffectId: function () {
            return p;
          },
          clearErrors: function () {
            return M;
          },
          resetPendingAccountChanges: function () {
            return h;
          },
          resetAllPending: function () {
            return v;
          },
          resetAndCloseUserProfileForm: function () {
            return g;
          },
          setDisableSubmit: function () {
            return G;
          },
        });
      var s = n("872717"),
        o = n("95410"),
        a = n("819855"),
        r = n("913144"),
        l = n("393414"),
        i = n("599110"),
        E = n("315102"),
        _ = n("730622"),
        u = n("437822"),
        d = n("49111"),
        T = n("191349"),
        S = n("782340");
      function N() {
        r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_INIT" });
      }
      function c() {
        r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLOSE" });
      }
      function C(e, t) {
        let n = t
            ? S.default.Messages.DELETE_ACCOUNT
            : S.default.Messages.DISABLE_ACCOUNT,
          o = t ? d.Endpoints.DELETE_ACCOUNT : d.Endpoints.DISABLE_ACCOUNT;
        return (0, _.default)(
          t =>
            s.default.post({
              url: o,
              body: { password: e, ...t },
              oldFormErrors: !0,
            }),
          { modalProps: { title: n }, checkEnabled: !1 }
        ).then(() => {
          u.default.logoutInternal(),
            (0, l.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT);
        });
      }
      async function A(e) {
        let t = await s.default.patch({
            url: d.Endpoints.ME,
            oldFormErrors: !0,
            body: e,
          }),
          n = t.body;
        if (n.token) {
          let t = n.token;
          delete n.token,
            r.default.dispatch({
              type: "UPDATE_TOKEN",
              token: t,
              userId: n.id,
            }),
            (null == e ? void 0 : e.password) != null &&
              (null == e ? void 0 : e.new_password) != null &&
              r.default.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
        }
        return r.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), t;
      }
      function I(e) {
        let {
          username: t,
          discriminator: n,
          email: s,
          emailToken: a,
          password: l,
          avatar: u,
          avatarDecoration: N,
          newPassword: c,
          globalName: C,
        } = e;
        return (
          r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT" }),
          (0, _.default)(
            e => {
              let r = {
                username: t,
                email: s,
                email_token: a,
                password: l,
                avatar: u,
                discriminator: n,
                global_name: C,
                new_password: c,
                ...e,
              };
              null === N && (r.avatar_decoration_id = null),
                null != N &&
                  ((r.avatar_decoration_id = N.id),
                  (r.avatar_decoration_sku_id = N.skuId));
              let i = o.default.get(d.DEVICE_TOKEN),
                E = (0, T.getDevicePushProvider)();
              null != E &&
                null != i &&
                ((r.push_provider = E), (r.push_token = i));
              let _ = o.default.get(d.DEVICE_VOIP_TOKEN);
              return (
                null != T.DEVICE_PUSH_VOIP_PROVIDER &&
                  null != _ &&
                  ((r.push_voip_provider = T.DEVICE_PUSH_VOIP_PROVIDER),
                  (r.push_voip_token = _)),
                A(r)
              );
            },
            {
              checkEnabled: !1,
              modalProps: { title: S.default.Messages.TWO_FA_CHANGE_ACCOUNT },
              hooks: {
                onEarlyClose: () =>
                  r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: {},
                  }),
              },
            }
          ).then(
            e => {
              let t = e.body;
              return (
                i.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                  animated: (0, E.isAnimatedIconHash)(t.avatar),
                }),
                r.default.dispatch({
                  type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS",
                }),
                e
              );
            },
            e => (
              r.default.dispatch({
                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                errors: e.body,
              }),
              e
            )
          )
        );
      }
      function f() {
        return s.default.get({
          url: d.Endpoints.USER_HARVEST,
          oldFormErrors: !0,
        });
      }
      function R() {
        return s.default.post({
          url: d.Endpoints.USER_HARVEST,
          oldFormErrors: !0,
        });
      }
      function U(e) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
          avatar: e,
        }),
          null == e
            ? a.AccessibilityAnnouncer.announce(
                S.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE
              )
            : a.AccessibilityAnnouncer.announce(
                S.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED
              );
      }
      function O(e) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
          globalName: e,
        });
      }
      function m(e) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
          avatarDecoration: e,
        });
      }
      function p(e) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
          profileEffectId: e,
        });
      }
      function M() {
        r.default.dispatch({ type: "USER_SETTINGS_CLEAR_ERRORS" });
      }
      function h() {
        r.default.dispatch({
          type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES",
        });
      }
      function v() {
        r.default.dispatch({ type: "USER_SETTINGS_RESET_ALL_PENDING" });
      }
      function g() {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM",
        });
      }
      function G(e) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
          disable: e,
        });
      }
    },
    330355: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var s = n("37983");
      n("884691");
      var o = n("77078"),
        a = n("782340"),
        r = n("917908");
      function l(e) {
        let { email: t, onClose: n } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: r.header,
              children: [
                (0, s.jsx)(o.Heading, {
                  className: r.title,
                  variant: "heading-xl/semibold",
                  children:
                    a.default.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE,
                }),
                (0, s.jsx)(o.ModalCloseButton, {
                  onClick: n,
                  className: r.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsx)(o.ModalContent, {
              className: r.content,
              children: (0, s.jsx)(o.Text, {
                className: r.description,
                variant: "text-md/normal",
                children:
                  a.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format(
                    { email: t }
                  ),
              }),
            }),
            (0, s.jsx)(o.ModalContent, {
              className: r.content,
              children: (0, s.jsx)(o.Text, {
                className: r.tooltip,
                variant: "text-sm/normal",
                children:
                  a.default.Messages
                    .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM,
              }),
            }),
            (0, s.jsx)(o.ModalFooter, {
              className: r.modalFooter,
              children: (0, s.jsx)(o.Button, {
                className: r.submit,
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.MEDIUM,
                onClick: n,
                children: a.default.Messages.OKAY,
              }),
            }),
          ],
        });
      }
    },
    893044: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var s = n("37983"),
        o = n("884691"),
        a = n("446674"),
        r = n("77078"),
        l = n("599417"),
        i = n("734990"),
        E = n("790618"),
        _ = n("782340"),
        u = n("917908");
      function d(e) {
        var t;
        let {
            isSlideReady: n,
            error: d,
            setEmailToken: T,
            setError: S,
            onNext: N,
            onClose: c,
          } = e,
          [C, A] = o.useState(!1),
          [I, f] = o.useState(""),
          [R, U] = o.useState(!1),
          O = (0, a.useStateFromStores)([E.default], () =>
            E.default.getErrors()
          ),
          m = o.useRef(null);
        o.useEffect(() => {
          if (n) {
            var e;
            null === (e = m.current) || void 0 === e || e.focus();
          }
        }, [n]);
        let p = async e => {
            e.preventDefault(), S(null), A(!0);
            try {
              let { token: e } = await (0, i.confirmEmailChange)(I);
              T(e), N();
            } catch (t) {
              let e = new l.default(t);
              S(e.getAnyErrorMessage());
            } finally {
              A(!1);
            }
          },
          M = async () => {
            if (!R) {
              U(!0);
              try {
                await (0, i.sendConfirmationCode)(!0),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      _.default.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT,
                      r.ToastType.SUCCESS
                    )
                  );
              } catch (n) {
                let e = new l.default(n),
                  t = e.getAnyErrorMessage();
                null != t &&
                  (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE));
              } finally {
                U(!1);
              }
            }
          };
        return (0, s.jsxs)("form", {
          onSubmit: p,
          children: [
            (0, s.jsxs)(r.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, s.jsx)(r.Heading, {
                  className: u.title,
                  variant: "heading-xl/extrabold",
                  children:
                    _.default.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                }),
                (0, s.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: u.subtitle,
                  children:
                    _.default.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE,
                }),
                (0, s.jsx)(r.ModalCloseButton, {
                  onClick: c,
                  className: u.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsxs)(r.ModalContent, {
              className: u.content,
              children: [
                (0, s.jsx)(r.FormItem, {
                  title:
                    _.default.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                  error:
                    null != d
                      ? d
                      : null == O
                        ? void 0
                        : null === (t = O.email_token) || void 0 === t
                          ? void 0
                          : t[0],
                  children: (0, s.jsx)(r.TextInput, {
                    value: I,
                    onChange: f,
                    inputRef: m,
                  }),
                }),
                (0, s.jsx)(r.Text, {
                  className: u.help,
                  variant: "text-sm/normal",
                  children:
                    _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format(
                      { onResend: M }
                    ),
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              children: (0, s.jsx)(r.Button, {
                type: "submit",
                color: r.Button.Colors.BRAND,
                size: r.Button.Sizes.MEDIUM,
                submitting: C,
                children: _.default.Messages.NEXT,
              }),
            }),
          ],
        });
      }
    },
    509943: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var s = n("37983"),
        o = n("884691"),
        a = n("446674"),
        r = n("77078"),
        l = n("599417"),
        i = n("734990"),
        E = n("697218"),
        _ = n("782340"),
        u = n("917908");
      function d(e) {
        let { onNext: t, onClose: n } = e,
          [d, T] = o.useState(!1),
          S = (0, a.useStateFromStores)([E.default], () =>
            E.default.getCurrentUser()
          ),
          N = async e => {
            e.preventDefault(), T(!0);
            try {
              await (0, i.sendConfirmationCode)(), t();
            } catch (n) {
              let e = new l.default(n),
                t = e.getAnyErrorMessage();
              null != t &&
                (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE));
            } finally {
              T(!1);
            }
          };
        return (0, s.jsxs)("form", {
          onSubmit: N,
          children: [
            (0, s.jsxs)(r.ModalHeader, {
              separator: !1,
              className: u.header,
              children: [
                (0, s.jsx)(r.Heading, {
                  className: u.title,
                  variant: "heading-xl/extrabold",
                  children:
                    _.default.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE,
                }),
                (0, s.jsx)(r.ModalCloseButton, {
                  onClick: n,
                  className: u.modalCloseButton,
                }),
              ],
            }),
            (0, s.jsx)(r.ModalContent, {
              className: u.content,
              children: (0, s.jsx)(r.Text, {
                className: u.description,
                variant: "text-md/normal",
                children:
                  _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format(
                    { oldEmail: null == S ? void 0 : S.email }
                  ),
              }),
            }),
            (0, s.jsxs)(r.ModalFooter, {
              className: u.modalFooter,
              children: [
                (0, s.jsx)(r.Button, {
                  type: "submit",
                  color: r.Button.Colors.BRAND,
                  size: r.Button.Sizes.MEDIUM,
                  submitting: d,
                  className: u.submit,
                  children:
                    _.default.Messages
                      .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON,
                }),
                (0, s.jsx)(r.Button, {
                  className: u.cancel,
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.PRIMARY,
                  onClick: n,
                  children: _.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    867693: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var s = n("37983"),
        o = n("884691"),
        a = n("759843"),
        r = n("446674"),
        l = n("77078"),
        i = n("152584"),
        E = n("697218"),
        _ = n("330355"),
        u = n("893044"),
        d = n("509943"),
        T = n("457818"),
        S = n("397336"),
        N = n("917908"),
        c = n("92693");
      function C(e) {
        var t;
        let { transitionState: n, onClose: C } = e,
          A = (0, r.useStateFromStores)([E.default], () =>
            E.default.getCurrentUser()
          ),
          I = o.useRef(
            null !== (t = null == A ? void 0 : A.verified) && void 0 !== t && t
          );
        o.useEffect(() => () => (0, i.accountDetailsClose)(), []);
        let f = null == A ? void 0 : A.verified,
          R = f
            ? S.ChangeEmailSteps.CONFIRM_START
            : S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
          [U, O] = o.useState(R),
          [m, p] = o.useState(null),
          [M, h] = o.useState(null),
          [v, g] = o.useState(null),
          [G, D] = o.useState(""),
          L = {
            impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW,
          };
        return (0, s.jsxs)(l.ModalRoot, {
          transitionState: n,
          disableTrack: !0,
          children: [
            (0, s.jsx)("img", { alt: "", className: N.headerImage, src: c }),
            (0, s.jsxs)(l.Slides, {
              activeSlide: U,
              width: 440,
              onSlideReady: e => p(e),
              children: [
                (0, s.jsx)(l.Slide, {
                  id: S.ChangeEmailSteps.CONFIRM_START,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                  impressionProperties: L,
                  children: (0, s.jsx)(d.default, {
                    onNext: () => O(S.ChangeEmailSteps.CONFIRM_CODE),
                    onClose: C,
                  }),
                }),
                (0, s.jsx)(l.Slide, {
                  id: S.ChangeEmailSteps.CONFIRM_CODE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                  impressionProperties: L,
                  children: (0, s.jsx)(u.default, {
                    error: v,
                    setError: g,
                    setEmailToken: h,
                    isSlideReady: m === S.ChangeEmailSteps.CONFIRM_CODE,
                    onNext: () => O(S.ChangeEmailSteps.EMAIL_AND_PASSWORD),
                    onClose: C,
                  }),
                }),
                (0, s.jsx)(l.Slide, {
                  id: S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                  impressionProperties: { ...L, email_verified: I.current },
                  children: (0, s.jsx)(T.default, {
                    emailToken: M,
                    isSlideReady: m === S.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                    onBack: f ? () => O(S.ChangeEmailSteps.CONFIRM_CODE) : null,
                    onNext: e => {
                      D(e), O(S.ChangeEmailSteps.COMPLETE);
                    },
                    onClose: C,
                  }),
                }),
                (0, s.jsx)(l.Slide, {
                  id: S.ChangeEmailSteps.COMPLETE,
                  impressionName:
                    a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                  impressionProperties: L,
                  children: (0, s.jsx)(_.default, { email: G, onClose: C }),
                }),
              ],
            }),
          ],
        });
      }
    },
    457818: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var s = n("37983"),
        o = n("884691"),
        a = n("446674"),
        r = n("77078"),
        l = n("152584"),
        i = n("790618"),
        E = n("648661"),
        _ = n("782340"),
        u = n("917908");
      function d(e) {
        var t, n;
        let {
            emailToken: d,
            isSlideReady: T,
            onClose: S,
            onBack: N,
            onNext: c,
          } = e,
          [C, A] = o.useState(""),
          [I, f] = o.useState(""),
          [R, U] = o.useState(!1),
          O = (0, a.useStateFromStores)([i.default], () =>
            i.default.getErrors()
          ),
          m = o.useRef(null);
        async function p(e) {
          e.preventDefault(), U(!0);
          let t = await (0, l.saveAccountChanges)({
            email: C,
            emailToken: d,
            password: I,
          });
          if ((U(!1), null == t ? void 0 : t.ok)) c(C);
          else {
            var n, s;
            (null == t
              ? void 0
              : null === (n = t.body) || void 0 === n
                ? void 0
                : n.username) != null
              ? (0, E.showInvalidUsernameToast)()
              : (null == t
                  ? void 0
                  : null === (s = t.body) || void 0 === s
                    ? void 0
                    : s.email_token) != null &&
                (null == N || N());
          }
        }
        return (
          o.useEffect(() => {
            if (T) {
              var e;
              null === (e = m.current) || void 0 === e || e.focus();
            }
          }, [T]),
          (0, s.jsxs)("form", {
            onSubmit: p,
            children: [
              (0, s.jsxs)(r.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                  (0, s.jsx)(r.Heading, {
                    className: u.title,
                    variant: "heading-xl/extrabold",
                    children:
                      _.default.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP,
                  }),
                  (0, s.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: u.subtitle,
                    children:
                      _.default.Messages
                        .USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP,
                  }),
                  (0, s.jsx)(r.ModalCloseButton, {
                    onClick: S,
                    className: u.modalCloseButton,
                  }),
                ],
              }),
              (0, s.jsxs)(r.ModalContent, {
                className: u.content,
                children: [
                  (0, s.jsx)(r.FormItem, {
                    title: _.default.Messages.EMAIL,
                    error:
                      null == O
                        ? void 0
                        : null === (t = O.email) || void 0 === t
                          ? void 0
                          : t[0],
                    children: (0, s.jsx)(r.TextInput, {
                      type: "email",
                      value: C,
                      onChange: A,
                      inputRef: m,
                    }),
                  }),
                  (0, s.jsx)(r.FormItem, {
                    className: u.password,
                    title:
                      _.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                    error:
                      null == O
                        ? void 0
                        : null === (n = O.password) || void 0 === n
                          ? void 0
                          : n[0],
                    children: (0, s.jsx)(r.TextInput, {
                      type: "password",
                      value: I,
                      onChange: f,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(r.ModalFooter, {
                children: [
                  (0, s.jsx)(r.Button, {
                    type: "submit",
                    color: r.Button.Colors.BRAND,
                    size: r.Button.Sizes.MEDIUM,
                    submitting: R,
                    children: _.default.Messages.DONE,
                  }),
                  null != N
                    ? (0, s.jsx)(r.Button, {
                        className: u.cancel,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        onClick: N,
                        children: _.default.Messages.BACK,
                      })
                    : (0, s.jsx)(r.Button, {
                        className: u.cancel,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        onClick: S,
                        children: _.default.Messages.CANCEL,
                      }),
                ],
              }),
            ],
          })
        );
      }
    },
    648661: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          showInvalidUsernameToast: function () {
            return a;
          },
        });
      var s = n("77078"),
        o = n("782340");
      function a() {
        (0, s.showToast)(
          (0, s.createToast)(
            o.default.Messages.USER_SETTINGS_UPDATE_FAILURE,
            s.ToastType.FAILURE
          )
        );
      }
    },
    734990: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          sendConfirmationCode: function () {
            return r;
          },
          confirmEmailChange: function () {
            return l;
          },
        });
      var s = n("759843"),
        o = n("840707"),
        a = n("49111");
      function r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return o.default.put({
          url: a.Endpoints.USER_EMAIL,
          trackedActionData: {
            event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e },
          },
        });
      }
      async function l(e) {
        let t = await o.default.post({
          url: a.Endpoints.USER_EMAIL_VERIFY_CODE,
          body: { code: e },
          trackedActionData: {
            event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
          },
        });
        return t.body;
      }
    },
    790618: function (e, t, n) {
      "use strict";
      let s, o, a, r, l, i, E, _, u, d, T, S, N, c;
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var C = n("265586"),
        A = n("446674"),
        I = n("913144"),
        f = n("49111");
      let R = f.FormStates.CLOSED,
        U = {},
        O = !1;
      function m() {
        (R = f.FormStates.OPEN), (U = {});
      }
      function p() {
        (R = f.FormStates.CLOSED), (U = {});
      }
      function M() {
        h(), v(), (U = {});
      }
      function h() {
        (s = void 0), (o = void 0), (a = void 0), (r = void 0);
      }
      function v() {
        (l = void 0),
          (i = void 0),
          (E = void 0),
          (_ = void 0),
          (u = void 0),
          (r = void 0);
      }
      function g() {
        (T = void 0), (S = void 0), (N = void 0), (c = void 0), (d = void 0);
      }
      class G extends A.default.Store {
        getFormState() {
          return R;
        }
        getErrors() {
          return U;
        }
        showNotice() {
          return (
            void 0 !== s ||
            void 0 !== l ||
            void 0 !== i ||
            void 0 !== E ||
            void 0 !== _ ||
            void 0 !== u ||
            void 0 !== a ||
            void 0 !== r ||
            void 0 !== o
          );
        }
        getPendingAvatar() {
          return s;
        }
        getPendingGlobalName() {
          return o;
        }
        getPendingBanner() {
          return l;
        }
        getPendingBio() {
          return i;
        }
        getPendingPronouns() {
          return E;
        }
        getPendingAccentColor() {
          return _;
        }
        getPendingThemeColors() {
          return u;
        }
        getPendingAvatarDecoration() {
          return a;
        }
        getPendingProfileEffectId() {
          return r;
        }
        getAllPending() {
          return {
            pendingAvatar: s,
            pendingBanner: l,
            pendingBio: i,
            pendingPronouns: E,
            pendingAccentColor: _,
            pendingThemeColors: u,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: r,
            pendingGlobalName: o,
          };
        }
        getTryItOutThemeColors() {
          return d;
        }
        getTryItOutAvatar() {
          return T;
        }
        getTryItOutAvatarDecoration() {
          return S;
        }
        getTryItOutProfileEffectId() {
          return N;
        }
        getTryItOutBanner() {
          return c;
        }
        getAllTryItOut() {
          return {
            tryItOutThemeColors: d,
            tryItOutAvatar: T,
            tryItOutAvatarDecoration: S,
            tryItOutProfileEffectId: N,
            tryItOutBanner: c,
          };
        }
        getIsDisableSubmit() {
          return O;
        }
      }
      G.displayName = "UserSettingsAccountStore";
      var D = new G(I.default, {
        USER_SETTINGS_ACCOUNT_INIT: m,
        USER_SETTINGS_MODAL_INIT: m,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: m,
        USER_SETTINGS_MODAL_SET_SECTION: function (e) {
          let { section: t } = e;
          return t === f.UserSettingsSections.ACCOUNT && m();
        },
        USER_SETTINGS_ACCOUNT_CLOSE: p,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function () {
          M(), g(), p();
        },
        USER_SETTINGS_ACCOUNT_SUBMIT: function () {
          (R = f.FormStates.SUBMITTING), (U = {});
        },
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function (e) {
          var t;
          if (R !== f.FormStates.SUBMITTING) return !1;
          (R = f.FormStates.OPEN),
            (U = null !== (t = e.errors) && void 0 !== t ? t : {});
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function (e) {
          let { avatar: t } = e;
          (s = t), (T = void 0);
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function (e) {
          let { globalName: t } = e;
          o = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function (e) {
          let { avatarDecoration: t } = e;
          a = t;
        },
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM:
          function (e) {
            let { item: t } = e;
            (null == t ? void 0 : t.type) ===
            C.CollectiblesItemType.PROFILE_EFFECT
              ? ((S = null), (N = null == t ? void 0 : t.id))
              : ((N = null), (S = t));
          },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function (e) {
          let { profileEffectId: t } = e;
          r = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function (e) {
          let { banner: t } = e;
          l = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function (e) {
          let { bio: t } = e;
          i = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function (e) {
          let { pronouns: t } = e;
          E = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function (e) {
          let { color: t } = e;
          _ = t;
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function (e) {
          let { themeColors: t } = e;
          u = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function (e) {
          let { avatar: t } = e;
          T = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function (e) {
          let { avatarDecoration: t } = e;
          S = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function (e) {
          let { profileEffectId: t } = e;
          N = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function (e) {
          let { banner: t } = e;
          c = t;
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function (e) {
          let { themeColors: t } = e;
          d = t;
        },
        USER_SETTINGS_CLEAR_ERRORS: function () {
          U = {};
        },
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: h,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: v,
        USER_SETTINGS_RESET_ALL_PENDING: M,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: g,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function () {
          a = void 0;
        },
        LOGOUT: function () {
          s = void 0;
        },
        USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function (e) {
          let { disable: t } = e;
          O = t;
        },
      });
    },
    265586: function (e, t, n) {
      "use strict";
      var s, o;
      n.r(t),
        n.d(t, {
          CollectiblesItemType: function () {
            return s;
          },
        }),
        ((o = s || (s = {}))[(o.NONE = 100)] = "NONE"),
        (o[(o.AVATAR_DECORATION = 0)] = "AVATAR_DECORATION"),
        (o[(o.PROFILE_EFFECT = 1)] = "PROFILE_EFFECT");
    },
  },
]);
//# sourceMappingURL=29e377bd55dcce6d7df2.js.map

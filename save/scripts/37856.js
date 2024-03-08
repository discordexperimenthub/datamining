(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37856"],
  {
    955958: function (t, e, n) {
      "use strict";
      t.exports = n.p + "2067403f7d81a04ff750.svg";
    },
    251721: function (t, e, n) {
      "use strict";
      t.exports = n.p + "d4ee85cbb7dbfd39a9d4.svg";
    },
    152584: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          accountDetailsInit: function () {
            return T;
          },
          accountDetailsClose: function () {
            return p;
          },
          disableAccount: function () {
            return A;
          },
          saveAccountRequest: function () {
            return S;
          },
          saveAccountChanges: function () {
            return N;
          },
          getHarvestStatus: function () {
            return C;
          },
          requestHarvest: function () {
            return m;
          },
          setPendingAvatar: function () {
            return I;
          },
          setPendingGlobalNameName: function () {
            return g;
          },
          setPendingAvatarDecoration: function () {
            return U;
          },
          setPendingProfileEffectId: function () {
            return O;
          },
          clearErrors: function () {
            return R;
          },
          resetPendingAccountChanges: function () {
            return h;
          },
          resetAllPending: function () {
            return v;
          },
          resetAndCloseUserProfileForm: function () {
            return L;
          },
          setDisableSubmit: function () {
            return D;
          },
        });
      var l = n("872717"),
        a = n("95410"),
        o = n("819855"),
        r = n("913144"),
        s = n("393414"),
        u = n("599110"),
        i = n("315102"),
        c = n("730622"),
        d = n("437822"),
        _ = n("49111"),
        f = n("191349"),
        E = n("782340");
      function T() {
        r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_INIT" });
      }
      function p() {
        r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLOSE" });
      }
      function A(t, e) {
        let n = e
            ? E.default.Messages.DELETE_ACCOUNT
            : E.default.Messages.DISABLE_ACCOUNT,
          a = e ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
        return (0, c.default)(
          e =>
            l.default.post({
              url: a,
              body: { password: t, ...e },
              oldFormErrors: !0,
            }),
          { modalProps: { title: n }, checkEnabled: !1 }
        ).then(() => {
          d.default.logoutInternal(),
            (0, s.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT);
        });
      }
      async function S(t) {
        let e = await l.default.patch({
            url: _.Endpoints.ME,
            oldFormErrors: !0,
            body: t,
          }),
          n = e.body;
        if (n.token) {
          let e = n.token;
          delete n.token,
            r.default.dispatch({
              type: "UPDATE_TOKEN",
              token: e,
              userId: n.id,
            }),
            (null == t ? void 0 : t.password) != null &&
              (null == t ? void 0 : t.new_password) != null &&
              r.default.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
        }
        return r.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), e;
      }
      function N(t) {
        let {
          username: e,
          discriminator: n,
          email: l,
          emailToken: o,
          password: s,
          avatar: d,
          avatarDecoration: T,
          newPassword: p,
          globalName: A,
        } = t;
        return (
          r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT" }),
          (0, c.default)(
            t => {
              let r = {
                username: e,
                email: l,
                email_token: o,
                password: s,
                avatar: d,
                discriminator: n,
                global_name: A,
                new_password: p,
                ...t,
              };
              null === T && (r.avatar_decoration_id = null),
                null != T &&
                  ((r.avatar_decoration_id = T.id),
                  (r.avatar_decoration_sku_id = T.skuId));
              let u = a.default.get(_.DEVICE_TOKEN),
                i = (0, f.getDevicePushProvider)();
              null != i &&
                null != u &&
                ((r.push_provider = i), (r.push_token = u));
              let c = a.default.get(_.DEVICE_VOIP_TOKEN);
              return (
                null != f.DEVICE_PUSH_VOIP_PROVIDER &&
                  null != c &&
                  ((r.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER),
                  (r.push_voip_token = c)),
                S(r)
              );
            },
            {
              checkEnabled: !1,
              modalProps: { title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT },
              hooks: {
                onEarlyClose: () =>
                  r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: {},
                  }),
              },
            }
          ).then(
            t => {
              let e = t.body;
              return (
                u.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                  animated: (0, i.isAnimatedIconHash)(e.avatar),
                }),
                r.default.dispatch({
                  type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS",
                }),
                t
              );
            },
            t => (
              r.default.dispatch({
                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                errors: t.body,
              }),
              t
            )
          )
        );
      }
      function C() {
        return l.default.get({
          url: _.Endpoints.USER_HARVEST,
          oldFormErrors: !0,
        });
      }
      function m() {
        return l.default.post({
          url: _.Endpoints.USER_HARVEST,
          oldFormErrors: !0,
        });
      }
      function I(t) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
          avatar: t,
        }),
          null == t
            ? o.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE
              )
            : o.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED
              );
      }
      function g(t) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
          globalName: t,
        });
      }
      function U(t) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
          avatarDecoration: t,
        });
      }
      function O(t) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
          profileEffectId: t,
        });
      }
      function R() {
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
      function L() {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM",
        });
      }
      function D(t) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
          disable: t,
        });
      }
    },
    633156: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        o = n("414456"),
        r = n.n(o),
        s = n("77078"),
        u = n("437822"),
        i = n("152584"),
        c = n("42963"),
        d = n("145131"),
        _ = n("599110"),
        f = n("98013"),
        E = n("439932"),
        T = n("49111"),
        p = n("149806"),
        A = n("782340"),
        S = n("314238");
      function N(t) {
        let {
            email: e,
            setEmail: n,
            claimRequired: o,
            onSuccess: _,
            onClose: f,
          } = t,
          [N, C] = a.useState(),
          [m, I] = a.useState(""),
          [g, U] = a.useState(""),
          [O, R] = a.useState(!1);
        a.useEffect(
          () =>
            c.default.flowStep(
              p.FlowType.ANY,
              p.ClaimAccountSteps.CLAIM_ACCOUNT
            ),
          []
        );
        let h = async t => {
          t.preventDefault(), R(!0), C(""), U("");
          try {
            await (0, i.saveAccountRequest)({ email: e, password: m }),
              R(!1),
              _();
          } catch (t) {
            var n, l;
            (null == t
              ? void 0
              : null === (n = t.body) || void 0 === n
                ? void 0
                : n.email) && C(t.body.email),
              (null == t
                ? void 0
                : null === (l = t.body) || void 0 === l
                  ? void 0
                  : l.password) && U(t.body.password),
              R(!1);
          }
        };
        return (0, l.jsxs)("div", {
          className: r(S.modalLight, (0, E.getThemeClass)(T.ThemeTypes.LIGHT)),
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              className: S.formHeader,
              direction: d.default.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, l.jsx)("div", { className: S.formImage }),
                (0, l.jsx)(s.Heading, {
                  className: S.formTitle,
                  variant: "heading-xl/semibold",
                  children: A.default.Messages.FINISH_SIGNING_UP,
                }),
                (0, l.jsx)(s.Text, {
                  className: S.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: o
                    ? A.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY
                    : A.default.Messages.CLAIM_ACCOUNT_BODY_2,
                }),
                (0, l.jsx)(s.ModalCloseButton, {
                  className: S.closeButton,
                  onClick: f,
                }),
              ],
            }),
            (0, l.jsx)(s.ModalContent, {
              children: (0, l.jsxs)("form", {
                className: S.formContent,
                onSubmit: h,
                children: [
                  (0, l.jsx)(s.FormItem, {
                    title: A.default.Messages.FORM_LABEL_EMAIL,
                    className: S.formItem,
                    children: (0, l.jsx)(s.TextInput, {
                      value: e,
                      error: N,
                      onChange: t => n(t),
                      autoFocus: !0,
                    }),
                  }),
                  (0, l.jsx)(s.FormItem, {
                    title: A.default.Messages.FORM_LABEL_PASSWORD,
                    className: S.formItem,
                    children: (0, l.jsx)(s.TextInput, {
                      type: "password",
                      value: m,
                      error: g,
                      onChange: t => I(t),
                    }),
                  }),
                  (0, l.jsx)(s.Button, {
                    type: "submit",
                    size: s.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: O,
                    disabled: 0 === e.length || 0 === m.length,
                    children: A.default.Messages.CLAIM_ACCOUNT,
                  }),
                  o &&
                    (0, l.jsx)(s.Button, {
                      className: S.logoutButton,
                      color: s.Button.Colors.PRIMARY,
                      look: s.Button.Looks.LINK,
                      size: s.Button.Sizes.NONE,
                      onClick: () => {
                        u.default.logout(), f();
                      },
                      children: A.default.Messages.LOGOUT,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function C(t) {
        let { email: e, claimRequired: n, onClose: o } = t,
          u = n
            ? A.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO
            : A.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;
        function i() {
          window.open((0, f.getCurrentPlatformDownloadURL)(), "_blank"),
            _.default.track(T.AnalyticEvents.DOWNLOAD_APP, {
              platform: (0, f.getPlatformReadableName)(),
              ptb: !1,
              released: !0,
              has_e_mail: !0,
              referring_location: "Claim Modal",
              qr_code: !1,
            });
        }
        return (
          a.useEffect(
            () =>
              c.default.flowStep(
                p.FlowType.ANY,
                p.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS
              ),
            []
          ),
          (0, l.jsxs)("div", {
            className: r(
              S.modalLight,
              (0, E.getThemeClass)(T.ThemeTypes.LIGHT)
            ),
            children: [
              (0, l.jsxs)(s.ModalContent, {
                className: S.successContent,
                children: [
                  !n &&
                    (0, l.jsx)(s.ModalCloseButton, {
                      className: S.closeButton,
                      onClick: o,
                    }),
                  (0, l.jsx)("div", { className: S.successImage }),
                  (0, l.jsx)(s.Text, {
                    className: S.successTitle,
                    variant: "text-lg/semibold",
                    children: u.format({ email: e }),
                  }),
                  (0, l.jsx)(s.Text, {
                    className: S.successPromotion,
                    variant: "text-md/normal",
                    children:
                      A.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04,
                  }),
                ],
              }),
              n
                ? (0, l.jsx)(s.ModalFooter, {
                    direction: d.default.Direction.VERTICAL,
                    children: (0, l.jsx)(s.Button, {
                      size: s.Button.Sizes.LARGE,
                      onClick: o,
                      children: A.default.Messages.OKAY,
                    }),
                  })
                : (0, l.jsx)(s.ModalFooter, {
                    direction: d.default.Direction.VERTICAL,
                    children: (0, l.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      size: s.Button.Sizes.LARGE,
                      onClick: i,
                      children: A.default.Messages.CLAIM_ACCOUNT_GET_APP,
                    }),
                  }),
            ],
          })
        );
      }
      function m(t) {
        let { onClose: e, transitionState: n, claimRequired: o = !1 } = t,
          [r, u] = a.useState(""),
          [i, c] = a.useState(!1);
        return i
          ? (0, l.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, l.jsx)(C, {
                email: r,
                claimRequired: o,
                onClose: e,
              }),
            })
          : (0, l.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, l.jsx)(N, {
                email: r,
                setEmail: u,
                claimRequired: o,
                onSuccess: () => c(!0),
                onClose: e,
              }),
            });
      }
    },
    149806: function (t, e, n) {
      "use strict";
      var l, a, o, r, s, u, i, c, d, _;
      n.r(e),
        n.d(e, {
          FlowType: function () {
            return l;
          },
          AgeGateSteps: function () {
            return a;
          },
          ClaimAccountSteps: function () {
            return o;
          },
          CreateGuildSteps: function () {
            return r;
          },
          RegistrationSteps: function () {
            return s;
          },
        }),
        ((u = l || (l = {})).UNKNOWN = "unknown"),
        (u.ANY = "any"),
        (u.INVITE = "invite"),
        (u.ORGANIC = "organic_registration"),
        (u.ORGANIC_MARKETING = "organic_marketing"),
        (u.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (u.CREATE_GUILD = "create_guild"),
        ((i = a || (a = {})).AGE_GATE = "age_gate"),
        (i.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = o || (o = {})).CLAIM_ACCOUNT = "claim_account"),
        (c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = r || (r = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((_ = s || (s = {})).NUF_STARTED = "nuf_started"),
        (_.AGE_GATE = "age_gate"),
        (_.NUF_COMPLETE = "nuf_complete"),
        (_.HUB_CONNECTION = "hub_connection");
    },
    42963: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return p;
          },
        });
      var l = n("308503"),
        a = n("95410"),
        o = n("605250"),
        r = n("599110"),
        s = n("149806"),
        u = n("49111");
      let i = "UserFlowAnalyticsStore_current",
        c = "UserFlowAnalyticsStore";
      function d(t) {
        if (t === s.FlowType.UNKNOWN) return null;
        let e = a.default.get("".concat(c, "-").concat(t));
        if (null == e) return null;
        let { version: n, ...l } = e;
        return 1 !== n ? null : l;
      }
      new o.default("UserFlowAnalytics");
      let _ = (0, l.default)((t, e) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var t;
          let n =
            null !== (t = e().currentFlow) && void 0 !== t
              ? t
              : a.default.get(i);
          if (null == n) return null;
          let { [n]: l } = e().flows,
            o = null != l ? l : d(n);
          return (null == o ? void 0 : o.currentStep) != null ? n : null;
        },
      }));
      function f(t, e) {
        let { [t]: n, ...l } = _.getState().flows,
          a = null != n ? n : d(t);
        if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== e)
          _.setState({
            flows: {
              ...l,
              [t]: {
                type: t,
                lastStep: null,
                lastTimestamp: null,
                currentStep: e,
                currentTimestamp: new Date(),
                skipped: !1,
              },
            },
            currentFlow: t,
          });
      }
      function E(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = t;
        if (t === s.FlowType.ANY) {
          var a;
          l =
            null !== (a = _.getState().activeFlow()) && void 0 !== a
              ? a
              : s.FlowType.UNKNOWN;
        }
        let { [l]: o, ...r } = _.getState().flows,
          u = null != o ? o : d(l);
        if (null != u && null != u.currentStep)
          u.currentStep !== e &&
            _.setState({
              flows: {
                ...r,
                [l]: {
                  ...u,
                  lastStep: u.currentStep,
                  lastTimestamp: u.currentTimestamp,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: l,
            });
      }
      _.subscribe(
        t => {
          var e;
          if (
            null != t &&
            (!(function (t) {
              if (t.type === s.FlowType.UNKNOWN) return;
              let e = "".concat(c, "-").concat(t.type);
              t.ended
                ? (a.default.remove(e), a.default.remove(i))
                : (a.default.set("".concat(c, "-").concat(t.type), {
                    ...t,
                    version: 1,
                  }),
                  a.default.set(i, t.type));
            })(t),
            r.default.track(
              u.AnalyticEvents.NUO_TRANSITION,
              {
                flow_type: t.type,
                from_step: t.lastStep,
                to_step: t.currentStep,
                seconds_on_from_step:
                  "function" !=
                  typeof (null === (e = t.lastTimestamp) || void 0 === e
                    ? void 0
                    : e.getTime)
                    ? 0
                    : (t.currentTimestamp.getTime() -
                        t.lastTimestamp.getTime()) /
                      1e3,
              },
              { flush: !0 }
            ),
            t.ended)
          ) {
            let e = { ..._.getState().flows };
            delete e[t.type], _.setState({ flows: e, currentFlow: null });
          }
        },
        t => (null != t.currentFlow ? t.flows[t.currentFlow] : void 0)
      );
      function T() {
        return null != _.getState().activeFlow();
      }
      var p = {
        flowStart: f,
        flowStepOrStart: function (t, e) {
          T() ? E(t, e) : f(t, e);
        },
        flowStep: E,
        hasActiveFlow: T,
      };
    },
    98013: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          makeDesktopDownloadURL: function () {
            return i;
          },
          getPlatformReadableName: function () {
            return d;
          },
          getCurrentPlatformDownloadURL: function () {
            return _;
          },
          getMobileDownloadLink: function () {
            return f;
          },
        });
      var l = n("597755"),
        a = n.n(l),
        o = n("815157"),
        r = n("271938"),
        s = n("49111");
      let u = "linux";
      function i(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(s.DownloadLinks.DESKTOP)
          .concat(e ? "/ptb" : "", "?platform=")
          .concat(t)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function c() {
        var t;
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (t = a.os) || void 0 === t
              ? void 0
              : t.family;
        return null == e
          ? "win"
          : -1 !== e.indexOf("Ubuntu") ||
              -1 !== e.indexOf("Debian") ||
              -1 !== e.indexOf("Fedora") ||
              -1 !== e.indexOf("Red Hat") ||
              -1 !== e.indexOf("SuSE") ||
              -1 !== e.indexOf("Linux")
            ? u
            : -1 !== e.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(t) {
        return { win: "Windows", osx: "Mac", [u]: "Linux" }[c(t)];
      }
      function _() {
        let t = c();
        return i(t, !1, t === u ? "tar.gz" : null);
      }
      function f(t, e, n) {
        let l = null != n ? n.toString() : null;
        switch (e) {
          case "iOS":
            return (0, o.default)(
              null != l
                ? l
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: t,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, o.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, o.default)(
              null != l ? l : "https://play.google.com/store/apps/details",
              {
                utmSource: t,
                id: "com.discord",
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, o.generateAttemptId)(),
              }
            );
          default:
            return null != l ? l : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=3d66aa846c3f07b138e7.js.map

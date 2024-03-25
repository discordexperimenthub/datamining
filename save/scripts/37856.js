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
            return S;
          },
          disableAccount: function () {
            return p;
          },
          saveAccountRequest: function () {
            return A;
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
            return g;
          },
          setPendingGlobalNameName: function () {
            return I;
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
      var o = n("872717"),
        l = n("95410"),
        a = n("819855"),
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
      function S() {
        r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLOSE" });
      }
      function p(t, e) {
        let n = e
            ? E.default.Messages.DELETE_ACCOUNT
            : E.default.Messages.DISABLE_ACCOUNT,
          l = e ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
        return (0, c.default)(
          e =>
            o.HTTP.post({
              url: l,
              body: { password: t, ...e },
              oldFormErrors: !0,
            }),
          { modalProps: { title: n }, checkEnabled: !1 }
        ).then(() => {
          d.default.logoutInternal(),
            (0, s.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT);
        });
      }
      async function A(t) {
        let e = await o.HTTP.patch({
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
          email: o,
          emailToken: a,
          password: s,
          avatar: d,
          avatarDecoration: T,
          newPassword: S,
          globalName: p,
        } = t;
        return (
          r.default.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT" }),
          (0, c.default)(
            t => {
              let r = {
                username: e,
                email: o,
                email_token: a,
                password: s,
                avatar: d,
                discriminator: n,
                global_name: p,
                new_password: S,
                ...t,
              };
              null === T && (r.avatar_decoration_id = null),
                null != T &&
                  ((r.avatar_decoration_id = T.id),
                  (r.avatar_decoration_sku_id = T.skuId));
              let u = l.Storage.get(_.DEVICE_TOKEN),
                i = (0, f.getDevicePushProvider)();
              null != i &&
                null != u &&
                ((r.push_provider = i), (r.push_token = u));
              let c = l.Storage.get(_.DEVICE_VOIP_TOKEN);
              return (
                null != f.DEVICE_PUSH_VOIP_PROVIDER &&
                  null != c &&
                  ((r.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER),
                  (r.push_voip_token = c)),
                A(r)
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
        return o.HTTP.get({ url: _.Endpoints.USER_HARVEST, oldFormErrors: !0 });
      }
      function m() {
        return o.HTTP.post({
          url: _.Endpoints.USER_HARVEST,
          oldFormErrors: !0,
        });
      }
      function g(t) {
        r.default.dispatch({
          type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
          avatar: t,
        }),
          null == t
            ? a.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE
              )
            : a.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED
              );
      }
      function I(t) {
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
      var o = n("37983"),
        l = n("884691"),
        a = n("414456"),
        r = n.n(a),
        s = n("77078"),
        u = n("437822"),
        i = n("152584"),
        c = n("42963"),
        d = n("145131"),
        _ = n("599110"),
        f = n("98013"),
        E = n("439932"),
        T = n("49111"),
        S = n("149806"),
        p = n("782340"),
        A = n("314238");
      function N(t) {
        let {
            email: e,
            setEmail: n,
            claimRequired: a,
            onSuccess: _,
            onClose: f,
          } = t,
          [N, C] = l.useState(),
          [m, g] = l.useState(""),
          [I, U] = l.useState(""),
          [O, R] = l.useState(!1);
        l.useEffect(
          () =>
            c.default.flowStep(
              S.FlowType.ANY,
              S.ClaimAccountSteps.CLAIM_ACCOUNT
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
            var n, o;
            (null == t
              ? void 0
              : null === (n = t.body) || void 0 === n
                ? void 0
                : n.email) && C(t.body.email),
              (null == t
                ? void 0
                : null === (o = t.body) || void 0 === o
                  ? void 0
                  : o.password) && U(t.body.password),
              R(!1);
          }
        };
        return (0, o.jsxs)("div", {
          className: r(A.modalLight, (0, E.getThemeClass)(T.ThemeTypes.LIGHT)),
          children: [
            (0, o.jsxs)(s.ModalHeader, {
              className: A.formHeader,
              direction: d.default.Direction.VERTICAL,
              separator: !1,
              children: [
                (0, o.jsx)("div", { className: A.formImage }),
                (0, o.jsx)(s.Heading, {
                  className: A.formTitle,
                  variant: "heading-xl/semibold",
                  children: p.default.Messages.FINISH_SIGNING_UP,
                }),
                (0, o.jsx)(s.Text, {
                  className: A.formBody,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: a
                    ? p.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY
                    : p.default.Messages.CLAIM_ACCOUNT_BODY_2,
                }),
                (0, o.jsx)(s.ModalCloseButton, {
                  className: A.closeButton,
                  onClick: f,
                }),
              ],
            }),
            (0, o.jsx)(s.ModalContent, {
              children: (0, o.jsxs)("form", {
                className: A.formContent,
                onSubmit: h,
                children: [
                  (0, o.jsx)(s.FormItem, {
                    title: p.default.Messages.FORM_LABEL_EMAIL,
                    className: A.formItem,
                    children: (0, o.jsx)(s.TextInput, {
                      value: e,
                      error: N,
                      onChange: t => n(t),
                      autoFocus: !0,
                    }),
                  }),
                  (0, o.jsx)(s.FormItem, {
                    title: p.default.Messages.FORM_LABEL_PASSWORD,
                    className: A.formItem,
                    children: (0, o.jsx)(s.TextInput, {
                      type: "password",
                      value: m,
                      error: I,
                      onChange: t => g(t),
                    }),
                  }),
                  (0, o.jsx)(s.Button, {
                    type: "submit",
                    size: s.Button.Sizes.LARGE,
                    fullWidth: !0,
                    submitting: O,
                    disabled: 0 === e.length || 0 === m.length,
                    children: p.default.Messages.CLAIM_ACCOUNT,
                  }),
                  a &&
                    (0, o.jsx)(s.Button, {
                      className: A.logoutButton,
                      color: s.Button.Colors.PRIMARY,
                      look: s.Button.Looks.LINK,
                      size: s.Button.Sizes.NONE,
                      onClick: () => {
                        u.default.logout(), f();
                      },
                      children: p.default.Messages.LOGOUT,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function C(t) {
        let { email: e, claimRequired: n, onClose: a } = t,
          u = n
            ? p.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO
            : p.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;
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
          l.useEffect(
            () =>
              c.default.flowStep(
                S.FlowType.ANY,
                S.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS
              ),
            []
          ),
          (0, o.jsxs)("div", {
            className: r(
              A.modalLight,
              (0, E.getThemeClass)(T.ThemeTypes.LIGHT)
            ),
            children: [
              (0, o.jsxs)(s.ModalContent, {
                className: A.successContent,
                children: [
                  !n &&
                    (0, o.jsx)(s.ModalCloseButton, {
                      className: A.closeButton,
                      onClick: a,
                    }),
                  (0, o.jsx)("div", { className: A.successImage }),
                  (0, o.jsx)(s.Text, {
                    className: A.successTitle,
                    variant: "text-lg/semibold",
                    children: u.format({ email: e }),
                  }),
                  (0, o.jsx)(s.Text, {
                    className: A.successPromotion,
                    variant: "text-md/normal",
                    children:
                      p.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04,
                  }),
                ],
              }),
              n
                ? (0, o.jsx)(s.ModalFooter, {
                    direction: d.default.Direction.VERTICAL,
                    children: (0, o.jsx)(s.Button, {
                      size: s.Button.Sizes.LARGE,
                      onClick: a,
                      children: p.default.Messages.OKAY,
                    }),
                  })
                : (0, o.jsx)(s.ModalFooter, {
                    direction: d.default.Direction.VERTICAL,
                    children: (0, o.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      size: s.Button.Sizes.LARGE,
                      onClick: i,
                      children: p.default.Messages.CLAIM_ACCOUNT_GET_APP,
                    }),
                  }),
            ],
          })
        );
      }
      function m(t) {
        let { onClose: e, transitionState: n, claimRequired: a = !1 } = t,
          [r, u] = l.useState(""),
          [i, c] = l.useState(!1);
        return i
          ? (0, o.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(C, {
                email: r,
                claimRequired: a,
                onClose: e,
              }),
            })
          : (0, o.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(N, {
                email: r,
                setEmail: u,
                claimRequired: a,
                onSuccess: () => c(!0),
                onClose: e,
              }),
            });
      }
    },
    149806: function (t, e, n) {
      "use strict";
      var o, l, a, r, s, u, i, c, d, _;
      n.r(e),
        n.d(e, {
          FlowType: function () {
            return o;
          },
          AgeGateSteps: function () {
            return l;
          },
          ClaimAccountSteps: function () {
            return a;
          },
          CreateGuildSteps: function () {
            return r;
          },
          RegistrationSteps: function () {
            return s;
          },
        }),
        ((u = o || (o = {})).UNKNOWN = "unknown"),
        (u.ANY = "any"),
        (u.INVITE = "invite"),
        (u.ORGANIC = "organic_registration"),
        (u.ORGANIC_MARKETING = "organic_marketing"),
        (u.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (u.CREATE_GUILD = "create_guild"),
        ((i = l || (l = {})).AGE_GATE = "age_gate"),
        (i.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = a || (a = {})).CLAIM_ACCOUNT = "claim_account"),
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
            return S;
          },
        });
      var o = n("308503"),
        l = n("95410"),
        a = n("605250"),
        r = n("599110"),
        s = n("149806"),
        u = n("49111");
      let i = "UserFlowAnalyticsStore_current",
        c = "UserFlowAnalyticsStore";
      function d(t) {
        if (t === s.FlowType.UNKNOWN) return null;
        let e = l.Storage.get("".concat(c, "-").concat(t));
        if (null == e) return null;
        let { version: n, ...o } = e;
        return 1 !== n ? null : o;
      }
      new a.default("UserFlowAnalytics");
      let _ = (0, o.default)((t, e) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var t;
          let n =
            null !== (t = e().currentFlow) && void 0 !== t
              ? t
              : l.Storage.get(i);
          if (null == n) return null;
          let { [n]: o } = e().flows,
            a = null != o ? o : d(n);
          return (null == a ? void 0 : a.currentStep) != null ? n : null;
        },
      }));
      function f(t, e) {
        let { [t]: n, ...o } = _.getState().flows,
          l = null != n ? n : d(t);
        if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== e)
          _.setState({
            flows: {
              ...o,
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
          o = t;
        if (t === s.FlowType.ANY) {
          var l;
          o =
            null !== (l = _.getState().activeFlow()) && void 0 !== l
              ? l
              : s.FlowType.UNKNOWN;
        }
        let { [o]: a, ...r } = _.getState().flows,
          u = null != a ? a : d(o);
        if (null != u && null != u.currentStep)
          u.currentStep !== e &&
            _.setState({
              flows: {
                ...r,
                [o]: {
                  ...u,
                  lastStep: u.currentStep,
                  lastTimestamp: u.currentTimestamp,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: o,
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
                ? (l.Storage.remove(e), l.Storage.remove(i))
                : (l.Storage.set("".concat(c, "-").concat(t.type), {
                    ...t,
                    version: 1,
                  }),
                  l.Storage.set(i, t.type));
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
      var S = {
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
      var o = n("597755"),
        l = n.n(o),
        a = n("815157"),
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
            : null === (t = l.os) || void 0 === t
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
        let o = null != n ? n.toString() : null;
        switch (e) {
          case "iOS":
            return (0, a.default)(
              null != o
                ? o
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: t,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, a.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, a.default)(
              null != o ? o : "https://play.google.com/store/apps/details",
              {
                utmSource: t,
                id: "com.discord",
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, a.generateAttemptId)(),
              }
            );
          default:
            return null != o ? o : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=c4ab6ac18125242d564c.js.map

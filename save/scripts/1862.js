(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1862"],
  {
    143453: function (e, t, a) {
      "use strict";
      e.exports = a.p + "8da9ef44f0d6b8822df6.png";
    },
    104528: function (e, t, a) {
      "use strict";
      e.exports = a.p + "00f710da7f31fde658db.svg";
    },
    751577: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          clientIdToActivateDevicePlatform: function () {
            return s;
          },
        });
      var n = a("106076"),
        r = a("49111");
      function s(e) {
        let t = null;
        return (
          e === n.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID
            ? (t = r.PlatformTypes.PLAYSTATION)
            : e ===
                n.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID &&
              (t = r.PlatformTypes.PLAYSTATION_STAGING),
          t
        );
      }
    },
    503578: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useActivateDeviceStepTracking: function () {
            return u;
          },
        });
      var n = a("884691"),
        r = a("84339"),
        s = a("599110"),
        o = a("751577"),
        i = a("49111");
      function u(e) {
        let t = (0, r.default)(e);
        n.useEffect(() => {
          if (e === t) return;
          let a = null;
          "user-code-input" !== e.type &&
            (a = (0, o.clientIdToActivateDevicePlatform)(
              e.userCodeData.clientId
            )),
            s.default.track(i.AnalyticEvents.DEVICE_LINK_STEP, {
              previous_step: null == t ? void 0 : t.type,
              current_step: e.type,
              platform_type: a,
            });
        }, [t, e]);
      }
    },
    916537: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useDeviceCodeAuthorizeCallback: function () {
            return C;
          },
        }),
        a("70102");
      var n = a("884691"),
        r = a("627445"),
        s = a.n(r),
        o = a("382825"),
        i = a("619340"),
        u = a("535013"),
        l = a("8222"),
        c = a("751577");
      async function d(e, t, a) {
        var n, r, l, d;
        let C = (0, c.clientIdToActivateDevicePlatform)(e);
        if (null == C)
          throw (
            (await A(a, 1, "authorize"),
            Error("Unsupported client_id for two way link"))
          );
        let f = null;
        try {
          let { body: e } = await i.default.authorize(C, {
            twoWayLinkType: o.TwoWayLinkType.DEVICE_CODE,
            userCode: a,
          });
          f = e.url;
        } catch (e) {
          throw (
            (await A(
              a,
              null !==
                (r =
                  null == e
                    ? void 0
                    : null === (n = e.body) || void 0 === n
                      ? void 0
                      : n.code) && void 0 !== r
                ? r
                : 0,
              "authorize"
            ),
            Error("error during two way authorize"))
          );
        }
        let h = null;
        try {
          s(null != f, "No URL in authorize response");
          let { state: e } = (0, u.getCallbackParamsFromURL)(f);
          s(null != e, "Authorize URL state query parameter must be present"),
            (h = e);
        } catch (e) {
          throw (
            (await A(a, 2, "authorize"), Error("error parsing callback params"))
          );
        }
        try {
          await i.default.callback(C, { code: t, state: h });
        } catch (e) {
          throw (
            (await A(
              a,
              null !==
                (d =
                  null == e
                    ? void 0
                    : null === (l = e.body) || void 0 === l
                      ? void 0
                      : l.code) && void 0 !== d
                ? d
                : 0,
              "callback"
            ),
            Error("error during two way callback"))
          );
        }
      }
      async function A(e, t, a) {
        try {
          await (0, l.finishUserCodeTwoWayLinkError)(e, t, a);
        } catch (e) {}
      }
      function C(e, t, a, r) {
        let s = n.useCallback(
          async n => {
            if (!n) {
              try {
                await (0, l.finishUserCode)(e.userCode, "denied");
              } catch (e) {}
              t();
              return;
            }
            if (null == e.twoWayLinkCode)
              try {
                await (0, l.finishUserCode)(e.userCode, "granted"), r(e);
              } catch (t) {
                a(e);
              }
            else
              try {
                await d(e.clientId, e.twoWayLinkCode, e.userCode), r(e);
              } catch (t) {
                a(e);
              }
          },
          [e, t, a, r]
        );
        return s;
      }
    },
    841263: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useUserCodeSubmit: function () {
            return i;
          },
        }),
        a("222007");
      var n = a("884691"),
        r = a("8222"),
        s = a("555520"),
        o = a("782340");
      function i(e, t, a) {
        let [i, u] = n.useState(!1),
          [l, c] = n.useState(null),
          d = n.useCallback(async () => {
            try {
              u(!0);
              let a = await (0, r.verifyUserCode)(e);
              u(!1),
                t({
                  userCode: e,
                  clientId: a.body.client_id,
                  scopes: a.body.scopes,
                  twoWayLinkCode: a.body.two_way_link_code,
                });
            } catch (e) {
              var n;
              c(
                429 === (n = null == e ? void 0 : e.status)
                  ? o.default.Messages.ACTIVATE_DEVICE_ERROR_RATE_LIMIT
                  : 404 === n || 400 === n
                    ? o.default.Messages.ACTIVATE_DEVICE_ERROR_BAD_CODE
                    : o.default.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN
              ),
                u(!1),
                (null == e ? void 0 : e.status) === 401 && a();
            }
          }, [e, t, a]);
        return (
          n.useEffect(() => {
            e.length === s.OAuthConstants.USER_CODE_LENGTH ? d() : c(null);
          }, [e, d]),
          { manualSubmit: d, error: l, submitting: i }
        );
      }
    },
    965179: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return T;
          },
        }),
        a("222007");
      var n = a("37983"),
        r = a("884691"),
        s = a("528502"),
        o = a("148217"),
        i = a("590157"),
        u = a("393414"),
        l = a("725484"),
        c = a("503578"),
        d = a("280326"),
        A = a("597077"),
        C = a("607025"),
        f = a("878413"),
        h = a("49111"),
        E = a("875326"),
        T = (0, i.makeAuthenticated)(function () {
          let e;
          let [t, a] = r.useState({
            type: "user-code-input",
            usePrefilledCode: !0,
          });
          (0, o.default)(), (0, c.useActivateDeviceStepTracking)(t);
          let i = r.useCallback(() => {
              a({ type: "user-code-input" });
            }, [a]),
            T = r.useCallback(
              e => {
                a({ type: "authorization", userCodeData: e });
              },
              [a]
            ),
            I = r.useCallback(
              e => {
                a({ type: "success", userCodeData: e });
              },
              [a]
            ),
            p = r.useCallback(
              e => {
                a({ type: "error", userCodeData: e });
              },
              [a]
            );
          switch (t.type) {
            case "user-code-input":
              e = (0, n.jsx)(f.UserCodeInput, {
                usePrefilledCode: t.usePrefilledCode || !1,
                onUserCodeAccepted: T,
              });
              break;
            case "authorization":
              e = (0, n.jsx)(d.ActivateDeviceAuthorize, {
                data: t.userCodeData,
                onDenied: i,
                onError: p,
                onSuccess: I,
              });
              break;
            case "success":
              e = (0, n.jsx)(C.ActivateDeviceSuccess, {
                onComplete: () => (0, u.transitionTo)(h.Routes.ME),
                data: t.userCodeData,
              });
              break;
            case "error":
              e = (0, n.jsx)(A.ActivateDeviceError, { onTryAgain: i });
              break;
            default:
              e = null;
          }
          return (0, n.jsxs)("div", {
            className: E.activatePage,
            children: [
              (0, n.jsx)(s.default, {
                className: E.artwork,
                preserveAspectRatio: "xMinYMin slice",
              }),
              (0, n.jsx)(l.default, { show: !0, className: E.logo }),
              (0, n.jsx)("div", { className: E.content, children: e }),
            ],
          });
        });
    },
    280326: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ActivateDeviceAuthorize: function () {
            return i;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("33942"),
        s = a("916537"),
        o = a("253222");
      function i(e) {
        let { data: t, onDenied: a, onError: i, onSuccess: u } = e,
          l = (0, s.useDeviceCodeAuthorizeCallback)(t, a, i, u);
        return (0, n.jsx)("div", {
          className: o.content,
          children: (0, n.jsx)(r.OAuth2Authorize, {
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: l,
          }),
        });
      }
    },
    597077: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ActivateDeviceError: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("77078"),
        s = a("782340"),
        o = a("546315"),
        i = a("143453");
      let u = e => {
        let { onTryAgain: t } = e;
        return (0, n.jsxs)("div", {
          className: o.bodyContent,
          children: [
            (0, n.jsx)("img", { src: i, width: "254", height: "127", alt: "" }),
            (0, n.jsx)(r.Heading, {
              className: o.title,
              variant: "heading-xl/extrabold",
              children: s.default.Messages.ACTIVATE_DEVICE_ERROR_TITLE,
            }),
            (0, n.jsx)(r.Text, {
              tag: "p",
              variant: "text-md/normal",
              color: "header-secondary",
              children: s.default.Messages.ACTIVATE_DEVICE_ERROR_BODY,
            }),
            (0, n.jsx)(r.Button, {
              className: o.footerButton,
              color: r.Button.Colors.BRAND,
              onClick: t,
              children: s.default.Messages.TRY_AGAIN,
            }),
          ],
        });
      };
    },
    607025: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          ActivateDeviceSuccess: function () {
            return c;
          },
        });
      var n = a("37983"),
        r = a("884691"),
        s = a("106076"),
        o = a("77078"),
        i = a("782340"),
        u = a("546315"),
        l = a("104528");
      let c = e => {
        let { onComplete: t, data: a } = e,
          c = null,
          d = (0, r.useId)();
        return (
          (a.clientId ===
            s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID ||
            a.clientId ===
              s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) &&
            (c = (0, n.jsx)("img", {
              src: l,
              width: "241",
              height: "118",
              alt: "",
              "aria-labelledby": d,
            })),
          (0, n.jsxs)("div", {
            className: u.bodyContent,
            children: [
              c,
              (0, n.jsx)(o.Heading, {
                className: u.title,
                variant: "heading-xl/extrabold",
                id: d,
                children: i.default.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE,
              }),
              null != a.twoWayLinkCode
                ? (0, n.jsx)(o.Text, {
                    tag: "p",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      i.default.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY,
                  })
                : null,
              (0, n.jsx)(o.Button, {
                className: u.footerButton,
                color: o.Button.Colors.BRAND,
                onClick: t,
                children: i.default.Messages.DONE,
              }),
            ],
          })
        );
      };
    },
    878413: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          UserCodeInput: function () {
            return h;
          },
        }),
        a("222007");
      var n = a("37983"),
        r = a("884691"),
        s = a("414456"),
        o = a.n(s),
        i = a("730290"),
        u = a("90915"),
        l = a("77078"),
        c = a("8222"),
        d = a("841263"),
        A = a("555520"),
        C = a("782340"),
        f = a("264910");
      function h(e) {
        let { onUserCodeAccepted: t, usePrefilledCode: a } = e,
          [s, h] = r.useState(() => {
            let { user_code: e } = i.parse(window.location.search);
            return a && null != e ? e : "";
          }),
          E = (0, u.useLocation)(),
          T = r.useCallback(() => {
            (0, c.logoutWithRedirect)(E);
          }, [E]),
          {
            manualSubmit: I,
            error: p,
            submitting: _,
          } = (0, d.useUserCodeSubmit)(s, t, T);
        return (0, n.jsxs)("div", {
          className: f.content,
          children: [
            (0, n.jsx)(l.Heading, {
              variant: "heading-xl/extrabold",
              className: f.text,
              children: C.default.Messages.ACTIVATE_DEVICE_TITLE,
            }),
            (0, n.jsx)(l.Text, {
              tag: "p",
              variant: "text-md/medium",
              color: "header-secondary",
              className: f.text,
              children: C.default.Messages.ACTIVATE_DEVICE_BODY,
            }),
            (0, n.jsx)(l.TextInput, {
              placeholder:
                C.default.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({
                  number: A.OAuthConstants.USER_CODE_LENGTH,
                }),
              maxLength: A.OAuthConstants.USER_CODE_LENGTH,
              className: f.textInputContainer,
              inputClassName: o(f.textInput, { [f.textInputError]: null != p }),
              autoComplete: "off",
              autoFocus: !0,
              value: s,
              onChange: h,
              error: p,
            }),
            (0, n.jsx)(l.Button, {
              fullWidth: !0,
              color: l.Button.Colors.BRAND,
              onClick: I,
              submitting: _,
              disabled: s.length !== A.OAuthConstants.USER_CODE_LENGTH,
              children: (0, n.jsx)(l.Text, {
                variant: "text-md/medium",
                children: C.default.Messages.SUBMIT,
              }),
            }),
          ],
        });
      }
    },
    209535: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getRedirectPath: function () {
            return u;
          },
          default: function () {
            return l;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("803182"),
        s = a("447669"),
        o = a("49111"),
        i = a("492397");
      function u() {
        let e = location.pathname + location.search,
          t = i.CONFERENCE_MODE_ENABLED
            ? o.Routes.REGISTER
            : (0, s.getLoginPath)(e, !1);
        return t;
      }
      var l = function () {
        return (0, n.jsx)(r.Redirect, { to: u() });
      };
    },
    590157: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          makeAuthenticated: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("271938"),
        s = a("831588"),
        o = a("209535"),
        i = a("49111");
      function u(e, t) {
        var a, u;
        let l =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passProps: !0 };
        function c(a) {
          if (
            !(0, s.isAuthenticated)() &&
            r.default.getLoginStatus() !== i.LoginStates.LOGGING_IN &&
            r.default.allowLogoutRedirect()
          )
            return null != t
              ? (0, n.jsx)(t, { renderRedirect: (0, n.jsx)(o.default, {}) })
              : (0, n.jsx)(o.default, {});
          return (0, n.jsx)(e, { ...(l.passProps ? a : null) });
        }
        return (
          (c.displayName = "Authenticated(".concat(
            null !==
              (u = null !== (a = e.displayName) && void 0 !== a ? a : e.name) &&
              void 0 !== u
              ? u
              : "<Unknown>",
            ")"
          )),
          c
        );
      }
    },
    106076: function (e, t, a) {
      "use strict";
      var n, r;
      a.r(t),
        a.d(t, {
          ConsoleOAuthApplications: function () {
            return n;
          },
          ConsoleOAuthApplicationsSets: function () {
            return s;
          },
        }),
        a("222007"),
        ((r = n || (n = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (r.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (r.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let s = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
    555520: function (e, t, a) {
      "use strict";
      var n, r;
      a.r(t),
        a.d(t, {
          OAuthConstants: function () {
            return n;
          },
        }),
        ((r = n || (n = {}))[(r.USER_CODE_LENGTH = 8)] = "USER_CODE_LENGTH");
    },
  },
]);
//# sourceMappingURL=99eb58598152e9620398.js.map

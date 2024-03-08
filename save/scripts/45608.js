(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45608"],
  {
    892313: function (E, e, R) {
      "use strict";
      R.r(e),
        R.d(e, {
          default: function () {
            return a;
          },
        });
      var I = R("917351"),
        i = R.n(I),
        s = R("49111"),
        r = R("782340");
      let {
          CAPTCHA: _,
          EMAIL: t,
          PHONE: n,
          REVERIFY_EMAIL: u,
          REVERIFY_PHONE: A,
        } = s.VerificationTypes,
        c = {
          [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [t],
          [s.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [n],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [u],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [A],
          [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [
            t,
            n,
          ],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [
            n,
            u,
          ],
          [s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [
            t,
            A,
          ],
          [s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]:
            [u, A],
          [s.UserRequiredActions.REQUIRE_CAPTCHA]: [_],
          [s.UserRequiredActions.AGREEMENTS]: [],
        };
      var a = {
        isPhoneReverification: (E, e) =>
          void 0 !== E &&
          E.isPhoneVerified() &&
          (e === s.UserRequiredActions.REQUIRE_REVERIFIED_PHONE ||
            e ===
              s.UserRequiredActions
                .REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            e ===
              s.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: E =>
          E === s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL ||
          E ===
            s.UserRequiredActions
              .REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          E ===
            s.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: E =>
          null == E || "symbol" == typeof E ? [] : c[E],
        getButtonTitle(E) {
          switch (E) {
            case s.VerificationTypes.EMAIL:
              return r.default.Messages.VERIFY_BY_EMAIL;
            case s.VerificationTypes.PHONE:
              return r.default.Messages.START_PHONE_VERIFICATION_BUTTON;
            case s.VerificationTypes.REVERIFY_EMAIL:
              return r.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case s.VerificationTypes.REVERIFY_PHONE:
              return r.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
              return r.default.Messages.START_VERIFICATION_BUTTON;
          }
        },
        areVerificationTypesEqual: (E, e) => i.isEqual(E, e),
      };
    },
    330387: function (E, e, R) {
      "use strict";
      R.r(e),
        R.d(e, {
          default: function () {
            return t;
          },
        });
      var I = R("446674"),
        i = R("913144");
      let s = null;
      class r extends I.default.Store {
        hasAction() {
          return null != s;
        }
        getAction() {
          return s;
        }
      }
      function _(E) {
        s = E.requiredAction;
      }
      r.displayName = "UserRequiredActionStore";
      var t = new r(i.default, {
        CONNECTION_OPEN: _,
        USER_REQUIRED_ACTION_UPDATE: _,
      });
    },
  },
]);
//# sourceMappingURL=643fc11a4e6641903ad7.js.map

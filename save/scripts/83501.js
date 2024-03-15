(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83501"],
  {
    719451: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InviteResolvingHeader: function () {
            return g;
          },
          default: function () {
            return h;
          },
        }),
        n("70102");
      var l = n("37983"),
        a = n("884691"),
        u = n("446674"),
        r = n("77078"),
        s = n("770032"),
        i = n("653047"),
        o = n("233069"),
        _ = n("813006"),
        E = n("766274"),
        d = n("697218"),
        I = n("953109"),
        c = n("580357"),
        T = n("124969"),
        N = n("587974"),
        f = n("158998"),
        A = n("49111"),
        O = n("238055"),
        p = n("91366"),
        S = n("782340"),
        C = n("985551");
      let g = () =>
          (0, l.jsxs)(a.Fragment, {
            children: [
              (0, l.jsx)(T.Avatar, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: C.avatar,
              }),
              (0, l.jsx)(T.SubTitle, {
                children:
                  S.default.Messages
                    .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, l.jsx)(T.Title, {
                className: C.inviteResolvingGuildName,
                children: S.default.Messages.LOADING,
              }),
            ],
          }),
        R = e => {
          let { guild: t, user: n, application: a, compact: u } = e;
          if (null != a)
            return (0, l.jsx)(I.default, {
              className: C.appIcon,
              game: a,
              size: C.appIconSize,
            });
          if (null != n)
            return (0, l.jsx)(T.Avatar, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: r.AvatarSizes.SIZE_80,
              className: u ? C.compactAvatar : C.avatar,
            });
          if (null != t)
            return (0, l.jsx)(N.default, {
              mask: N.default.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: C.guildIcon,
              children: (0, l.jsx)(T.GuildIcon, {
                guild: t,
                size: T.GuildIcon.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      var h = e => {
        var t;
        let n,
          a,
          I,
          {
            invite: N,
            disableUser: g = !1,
            error: h,
            flatActivityCount: m = !1,
            isRegister: U = !1,
          } = e,
          { currentUser: M, multiAccounts: D } = (0,
          u.useStateFromStoresObject)([s.default, d.default], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccounts: s.default.getUsers(),
          }));
        if (null == N) return null;
        let L = null != N.guild ? new _.default(N.guild) : null,
          v =
            null != N.channel
              ? (0, o.createChannelRecordFromInvite)(N.channel)
              : null,
          P =
            null != N.target_application
              ? new i.default(N.target_application)
              : null,
          F = g || null == N.inviter ? null : new E.default(N.inviter),
          y =
            (null != N.approximate_member_count &&
              N.approximate_member_count > 100) ||
            (null != L && L.hasFeature(A.GuildFeatures.COMMUNITY)),
          V = !y && null != F,
          H = null,
          G = !1;
        if (null != L)
          (H =
            null == F
              ? S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: f.default.getFormattedName(F),
                })),
            N.target_type === p.InviteTargetTypes.STREAM &&
              null != N.target_user &&
              (H = S.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: f.default.getFormattedName(N.target_user),
              })),
            N.target_type === p.InviteTargetTypes.EMBEDDED_APPLICATION &&
              null != N.target_application &&
              (H =
                null != F
                  ? S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format(
                      { username: f.default.getFormattedName(F) }
                    )
                  : S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            V &&
              null == P &&
              (n = (0, l.jsx)(T.GuildIcon, {
                className: C.icon,
                guild: L,
                size: T.GuildIcon.Sizes.SMALL,
              })),
            (a = L.name),
            null != P &&
              ((a = P.name),
              (I = (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)(T.SubTitle, {
                    className: C.appIn,
                    children: S.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, l.jsxs)("div", {
                    className: C.guildContainer,
                    children: [
                      (0, l.jsx)(T.GuildIcon, {
                        guild: L,
                        size: T.GuildIcon.Sizes.SMALL,
                      }),
                      (0, l.jsx)(r.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: C.appGuildName,
                        children: L.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != v) {
          if (null == F) throw Error("no inviter in group DM invite");
          let e = f.default.getFormattedName(F);
          null != v.name && "" !== v.name
            ? ((H = S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e,
              })),
              (a = v.name),
              null != v.icon &&
                (n = (0, l.jsx)(T.ChannelIcon, {
                  channel: v,
                  size: r.AvatarSizes.SIZE_32,
                })))
            : ((H =
                S.default.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM),
              (a = e));
        } else if (null != F) {
          let e = f.default.getFormattedName(F, !0);
          (a =
            S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
              { username: e }
            )),
            (G = !0),
            (I =
              null != h
                ? null
                : (0, l.jsx)(T.SubTitle, {
                    className: C.directInviteSubTitle,
                    children: U
                      ? S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format(
                          { username: e }
                        )
                      : S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format(
                          { username: e }
                        ),
                  }));
        }
        return (0, l.jsxs)("div", {
          className: C.container,
          children: [
            (0, l.jsx)(R, {
              application: P,
              guild: L,
              user: V ? F : null,
              compact: G,
            }),
            null != h
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(T.SubTitle, {
                      children: S.default.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, l.jsx)(T.Title, { children: h }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(T.SubTitle, { children: H }),
                    (0, l.jsxs)(T.Title, {
                      className: C.title,
                      children: [
                        null != L
                          ? (0, l.jsx)(c.default, {
                              guild: L,
                              className: C.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        a,
                      ],
                    }),
                  ],
                }),
            I,
            null != P ||
            G ||
            (null == N
              ? void 0
              : null === (t = N.guild) || void 0 === t
                ? void 0
                : t.id) === O.INVITE_ROUTING_HUB_GUILD_ID
              ? null
              : (0, l.jsx)(T.ActivityCount, {
                  className: C.activityCount,
                  online: N.approximate_presence_count,
                  total: N.approximate_member_count,
                  flat: m,
                }),
            D.length > 1 ? (0, l.jsx)(T.JoiningAs, { user: M }) : null,
          ],
        });
      };
    },
    238055: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          HubEmailConnectionSteps: function () {
            return l;
          },
          INVITE_ROUTING_HUB_GUILD_ID: function () {
            return u;
          },
        }),
        ((a = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (a.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (a.VERIFY_PIN = "VERIFY_PIN"),
        (a.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (a.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let u = "884924873015689226";
    },
    694787: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          validateMultiAccountTokens: function () {
            return d;
          },
          switchAccount: function () {
            return I;
          },
          removeAccount: function () {
            return c;
          },
        });
      var l = n("171718"),
        a = n("872717"),
        u = n("913144"),
        r = n("437822"),
        s = n("605250"),
        i = n("271938"),
        o = n("770032"),
        _ = n("49111");
      let E = new s.default("MultiAccountActionCreators");
      function d() {
        let e = i.default.getId(),
          t = o.default.getUsers();
        t.forEach(async t => {
          let n,
            { id: r } = t,
            s = l.default.getToken(r);
          if (null == s || "" === s) {
            u.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: r,
            });
            return;
          }
          u.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: r,
          });
          try {
            n = await a.default.get({
              url: _.Endpoints.ME,
              headers: { authorization: s },
              retries: 3,
            });
          } catch (t) {
            let e =
              (null == t ? void 0 : t.status) === 401 ||
              (null == t ? void 0 : t.status) === 403;
            u.default.dispatch({
              type: e
                ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE"
                : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: r,
            });
            return;
          }
          u.default.dispatch({
            type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
          }),
            u.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: r,
            });
        });
      }
      function I(e, t) {
        E.log("Switching account to ".concat(e), { switchSynchronously: t });
        let n = l.default.getToken(e);
        return null == n
          ? (E.log("Switching accounts failed because there was no token"),
            u.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: e,
            }),
            Promise.resolve())
          : r.default.switchAccountToken(n, t);
      }
      function c(e) {
        u.default.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: e });
      }
    },
    927101: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMultiAccountUsers: function () {
            return i;
          },
        });
      var l = n("884691"),
        a = n("446674"),
        u = n("913144"),
        r = n("694787"),
        s = n("770032");
      function i() {
        let e = (0, a.useStateFromStoresObject)([s.default], () => ({
          isLoading: s.default.getIsValidatingUsers(),
          multiAccountUsers: s.default.getUsers(),
        }));
        return (
          l.useEffect(() => {
            u.default.wait(() => {
              r.validateMultiAccountTokens();
            });
          }, []),
          e
        );
      }
    },
    165926: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setNewUser: function () {
            return a;
          },
          setNewUserFlowCompleted: function () {
            return u;
          },
        });
      var l = n("913144");
      function a(e) {
        l.default.wait(() =>
          l.default.dispatch({ type: "NUF_NEW_USER", newUserType: e })
        );
      }
      function u() {
        l.default.wait(() => l.default.dispatch({ type: "NUF_COMPLETE" }));
      }
    },
    56235: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          NewUserTypes: function () {
            return l;
          },
        }),
        ((a = l || (l = {}))[(a.MARKETING_UNCLAIMED = 0)] =
          "MARKETING_UNCLAIMED"),
        (a[(a.INVITE_UNCLAIMED = 1)] = "INVITE_UNCLAIMED"),
        (a[(a.ORGANIC_REGISTERED = 2)] = "ORGANIC_REGISTERED"),
        (a[(a.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3)] =
          "ORGANIC_REGISTERED_GUILD_TEMPLATE");
    },
    878720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChangePhoneReason: function () {
            return a;
          },
          default: function () {
            return d;
          },
        });
      var l,
        a,
        u = n("759843"),
        r = n("872717"),
        s = n("913144"),
        i = n("271938"),
        o = n("840707"),
        _ = n("482931"),
        E = n("49111");
      ((l = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (l.USER_SETTINGS_UPDATE = "user_settings_update"),
        (l.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (l.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (l.CONTACT_SYNC = "contact_sync");
      var d = {
        setCountryCode(e) {
          s.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          r.default.delete({
            url: E.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = i.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            r.default.post({
              url: E.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          r.default.post({
            url: E.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          r.default.post({
            url: E.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          r.default.post({
            url: E.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          r.default.post({
            url: E.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          r.default.post({
            url: E.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          r.default.post({
            url: E.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
          }),
        async verifyPhone(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = {},
            r = i.default.getFingerprint();
          null != r && "" !== r && (a["X-Fingerprint"] = r),
            l && (a.authorization = "");
          let d = await o.default.post({
            url: E.Endpoints.VERIFY_PHONE,
            headers: a,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: u.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              s.default.dispatch({
                type: "MODAL_POP",
                key: _.PHONE_VERIFICATION_MODAL_KEY,
              }),
            d.body
          );
        },
      };
    },
    482931: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PHONE_VERIFICATION_MODAL_KEY: function () {
            return l;
          },
          PHONE_VERIFICATION_CODE_NUM_DIGITS: function () {
            return a;
          },
        });
      let l = "PHONE_VERIFICATION_MODAL_KEY",
        a = 6;
    },
    25033: function (e, t, n) {
      "use strict";
      let l;
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("446674"),
        u = n("913144"),
        r = n("988415");
      let s = (0, r.getDefaultCountryCode)();
      function i(e) {
        var t;
        let { countryCode: n } = e;
        null != n &&
          (s =
            null !== (t = (0, r.getCountryCodeByAlpha2)(n)) && void 0 !== t
              ? t
              : (0, r.getDefaultCountryCode)());
      }
      class o extends a.default.DeviceSettingsStore {
        initialize(e) {
          null != e && (l = e.selectedCountryCode);
        }
        getUserAgnosticState() {
          return { selectedCountryCode: l };
        }
        getCountryCode() {
          return null != l ? l : s;
        }
      }
      (o.displayName = "PhoneStore"), (o.persistKey = "PhoneStore");
      var _ = new o(u.default, {
        PHONE_SET_COUNTRY_CODE: function (e) {
          let { countryCode: t } = e;
          l = t;
        },
        CONNECTION_OPEN: i,
        SET_LOCATION_METADATA: i,
      });
    },
  },
]);
//# sourceMappingURL=83501.36f3427f1ec1f84068f3.js.map

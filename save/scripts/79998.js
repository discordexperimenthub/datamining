(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79998"],
  {
    975391: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d10009c626a2ff1d4b90.svg";
    },
    37920: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8754ac926b9fb38f56a8.svg";
    },
    2862: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8e55ff0ed3f6e4fa5200.svg";
    },
    501851: function (e, t, n) {
      "use strict";
      e.exports = n.p + "3f977e0e1abeba5f6f4e.svg";
    },
    346619: function (e, t, n) {
      "use strict";
      e.exports = n.p + "148ae41296600c88bc9e.svg";
    },
    245288: function (e, t, n) {
      "use strict";
      e.exports = n.p + "41d28dc5d2c29dc4b122.svg";
    },
    314837: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c54752c825291a698843.svg";
    },
    951536: function (e, t, n) {
      "use strict";
      e.exports = n.p + "be307e03c092df2ae51f.svg";
    },
    768025: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ec5916ad3bfd010d6c7b.svg";
    },
    176872: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4e77fe782f516b5685cc.svg";
    },
    69448: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6da6e7ed1d57e445d0e.svg";
    },
    721247: function (e, t, n) {
      "use strict";
      e.exports = n.p + "13e4de50fe494530c2c1.png";
    },
    781073: function (e, t, n) {
      "use strict";
      e.exports = n.p + "09093cfec46da2d3386d.svg";
    },
    229483: function (e, t, n) {
      "use strict";
      e.exports = n.p + "e9802d8cbd4efea22c7f.svg";
    },
    142833: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("759843"),
        a = n("627929"),
        l = n("913144"),
        r = n("840707"),
        i = n("49111"),
        u = {
          signup: (e, t) =>
            r.default.post({
              url: i.Endpoints.HUB_WAITLIST_SIGNUP,
              body: { email: e, school: t },
              trackedActionData: {
                event: s.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: e => {
                  var t;
                  let n = !1,
                    s =
                      null == e
                        ? void 0
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.email_domain;
                  if (null != s) {
                    let e = s.split(".");
                    n = -1 !== e.indexOf("edu");
                  }
                  return (0, a.exact)({ is_edu_email: n });
                },
              },
            }),
          async sendVerificationEmail(e, t, n) {
            let l = await r.default.post({
              url: i.Endpoints.HUB_EMAIL_VERIFY_SEND,
              body: {
                email: e,
                guild_id: n,
                allow_multiple_guilds: t,
                use_verification_code: !0,
              },
              trackedActionData: {
                event: s.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                properties: e => {
                  var t;
                  let n =
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.has_matching_guild;
                  return (0, a.exact)({ has_matching_guild: n });
                },
              },
            });
            return l.body;
          },
          async verify(e) {
            if (null != e)
              try {
                var t;
                let n = await r.default.post({
                    url: i.Endpoints.HUB_EMAIL_VERIFY,
                    body: { token: e },
                    trackedActionData: {
                      event: s.NetworkActionNames.HUB_EMAIL_VERIFY,
                    },
                  }),
                  a =
                    null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                l.default.dispatch({
                  type: "HUB_VERIFY_EMAIL_SUCCESS",
                  guildId: a,
                });
              } catch (e) {
                l.default.dispatch({
                  type: "HUB_VERIFY_EMAIL_FAILURE",
                  errors: e.body,
                });
              }
          },
          async verifyCode(e, t, n) {
            if (null != e)
              try {
                var a;
                let u = await r.default.post({
                    url: i.Endpoints.HUB_EMAIL_VERIFY_CODE,
                    body: { code: e, guild_id: t, email: n },
                    trackedActionData: {
                      event: s.NetworkActionNames.HUB_EMAIL_VERIFY,
                    },
                  }),
                  o =
                    null === (a = u.body.guild) || void 0 === a ? void 0 : a.id;
                return (
                  l.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_SUCCESS",
                    guildId: o,
                  }),
                  u.body
                );
              } catch (e) {
                throw (
                  (l.default.dispatch({
                    type: "HUB_VERIFY_EMAIL_FAILURE",
                    errors: e.body,
                  }),
                  e)
                );
              }
          },
        };
    },
    549869: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return em;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("730290"),
        r = n("759843"),
        i = n("394846"),
        u = n("446674"),
        o = n("913144"),
        d = n("437822"),
        c = n("569272"),
        f = n("970728"),
        E = n("26772"),
        _ = n("73749"),
        I = n("106885"),
        h = n("178116"),
        p = n("759315"),
        T = n("569808"),
        m = n("913645"),
        N = n("777858"),
        g = n("9294"),
        A = n("701662"),
        S = n("271938"),
        C = n("760190"),
        v = n("55411"),
        O = n("337543"),
        R = n("599110"),
        L = n("550368"),
        x = n("831588"),
        M = n("315102"),
        D = n("834030"),
        P = n("315733"),
        U = n("250790"),
        j = n("746040"),
        b = n("504568"),
        G = n("345308"),
        y = n("713177"),
        B = n("773852"),
        F = n("679030"),
        V = n("926593"),
        k = n("683068"),
        H = n("43772"),
        w = n("291850"),
        Y = n("275744"),
        W = n("104110"),
        K = n("860959"),
        z = n("815762"),
        Z = n("152434"),
        X = n("404981"),
        J = n("726206"),
        q = n("49111"),
        Q = n("492397");
      n("527441"), u.default.initialize();
      let $ = (0, U.default)(w.default),
        ee = (0, U.default)(Y.default),
        et = (0, U.default)(H.default),
        en = (0, U.default)(V.default),
        es = (0, U.default)(F.default),
        ea = (0, U.default)(A.default),
        el = (0, U.default)(K.default),
        er = (0, U.default)(b.default),
        ei = (0, U.default)(G.default),
        eu = (0, U.default)(J.default),
        eo = (0, U.default)(p.default),
        ed = (0, U.default)(Z.default),
        ec = (0, U.default)(B.default),
        ef = (0, U.default)(h.default),
        eE = (0, U.default)(N.default),
        e_ = (0, U.default)(y.default),
        eI = (0, U.default)(W.default),
        eh = (0, U.default)(X.default),
        ep = (0, U.default)(z.default);
      class eT extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
          var n;
          let { invite: s, location: a } = e,
            { backgroundId: r } = t,
            i = (0, l.parse)(a.search),
            u = null !== (n = i.redirect_to) && void 0 !== n ? n : null;
          (null == u ||
            "" === u ||
            !(0, P.isSafeRedirect)(u) ||
            u.startsWith(q.Routes.ME)) &&
            (u = null);
          let o = null;
          if (null == s) o = (0, x.getArtForPath)(u);
          else if ((null == s ? void 0 : s.state) === q.InviteStates.RESOLVED) {
            let { guild: e, target_application: t } = s;
            null != t
              ? null != r && (o = (0, L.getAssetImage)(t.id, r, 1024))
              : null != e &&
                "string" == typeof e.splash &&
                (o = M.default.getGuildSplashURL({
                  id: e.id,
                  splash: e.splash,
                }));
          }
          return { redirectTo: u, splash: o };
        }
        componentDidMount() {
          let {
            inviteKey: e,
            hasLoadedExperiments: t,
            isAuthenticated: n,
          } = this.props;
          null != e &&
            (!t && n && d.default.getExperiments(!0),
            R.default.track(
              q.AnalyticEvents.INVITE_OPENED,
              {
                invite_code: (0, g.parseInviteCodeFromInviteKey)(e),
                load_time: D.default.getTimeSinceNavigationStart(),
              },
              { flush: !0 }
            )),
            (t || Q.CONFERENCE_MODE_ENABLED) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            E.default.initialize();
        }
        componentDidUpdate(e) {
          var t, n;
          !e.hasLoadedExperiments &&
            this.props.hasLoadedExperiments &&
            !Q.CONFERENCE_MODE_ENABLED &&
            this.resolveInvite(),
            (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !==
              (null === (n = this.props.invite) || void 0 === n
                ? void 0
                : n.state) && this.maybeFetchApplicationSplash();
        }
        componentWillUnmount() {
          E.default.terminate();
        }
        maybeFetchApplicationSplash() {
          let { invite: e } = this.props;
          if ((null == e ? void 0 : e.state) === q.InviteStates.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
              (0, L.fetchAssetIds)(t.id, ["embedded_splash"]).then(e => {
                let [t] = e;
                return this.setState({ backgroundId: t });
              });
          }
        }
        resolveInvite() {
          let { inviteKey: e } = this.props;
          if (null == e) return;
          let t = async () => {
            let { invite: t } = await f.default.resolveInvite(
              e,
              q.PageAnalyticsLocations.INVITE
            );
            null != t && (0, I.updateAuthInvite)(t);
          };
          t(), f.default.openNativeAppModal(e);
        }
        resolveGuildTemplate() {
          let { guildTemplateCode: e } = this.props;
          null != e &&
            (R.default.track(
              q.AnalyticEvents.GUILD_TEMPLATE_OPENED,
              {
                guild_template_code: e,
                load_time: D.default.getTimeSinceNavigationStart(),
              },
              { flush: !0 }
            ),
            m.default.resolveGuildTemplate(e),
            m.default.openNativeAppModal(e));
        }
        resolveGiftCode() {
          let { giftCode: e } = this.props;
          null != e &&
            c.default.resolveGiftCode(e, !0, !0).then(t => {
              null != t &&
                null == t.giftCode.promotion &&
                o.default.wait(() => c.default.openNativeGiftCodeModal(e));
            });
        }
        render() {
          let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
          return (0, s.jsxs)(j.default, {
            splash: e,
            children: [
              (0, s.jsx)(_.default, {
                path: q.Routes.LOGIN_HANDOFF,
                render: e => (0, s.jsx)(ee, { ...e, redirectTo: t }),
              }),
              (0, s.jsx)(_.default, {
                impressionName: r.ImpressionNames.USER_LOGIN,
                path: q.Routes.LOGIN,
                render: e => (0, s.jsx)($, { ...e, redirectTo: t }),
              }),
              (0, s.jsx)(_.default, {
                impressionName: r.ImpressionNames.USER_REGISTRATION,
                path: q.Routes.REGISTER,
                render: e =>
                  Q.CONFERENCE_MODE_ENABLED
                    ? (0, s.jsx)(et, { ...e, redirectTo: t, inviteKey: n })
                    : (0, s.jsx)(el, { ...e, redirectTo: t }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.GIFT_CODE_LOGIN(":giftCode"),
                render: e => (0, s.jsx)(es, { login: !0, ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.GIFT_CODE(":giftCode"),
                render: e => (0, s.jsx)(es, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: [
                  q.Routes.INVITE_LOGIN(":inviteCode"),
                  q.Routes.INVITE(":inviteCode"),
                ],
                render: e => {
                  let {
                      match: {
                        params: { inviteCode: t },
                        path: n,
                      },
                      location: a,
                      transitionTo: l,
                    } = e,
                    r = (0, g.generateInviteKeyFromUrlParams)(t, a.search);
                  return i.isMobile || i.isTablet
                    ? (0, s.jsx)(ea, { inviteKey: r, transitionTo: l }, r)
                    : (0, s.jsx)(et, {
                        inviteKey: r,
                        location: a,
                        transitionTo: l,
                        login: n === q.Routes.INVITE_LOGIN(":inviteCode"),
                      });
                },
              }),
              (0, s.jsx)(_.default, {
                path: [
                  q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                  q.Routes.GUILD_TEMPLATE(":guildTemplateCode"),
                ],
                render: e => {
                  let {
                    match: {
                      params: { guildTemplateCode: t },
                      path: n,
                    },
                    location: a,
                    transitionTo: l,
                  } = e;
                  return i.isMobile || i.isTablet
                    ? (0, s.jsx)(k.default, { code: t }, t)
                    : (0, s.jsx)(en, {
                        code: t,
                        location: a,
                        transitionTo: l,
                        login:
                          n ===
                          q.Routes.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                      });
                },
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.VERIFY,
                render: e => (0, s.jsx)(eu, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.VERIFY_HUB_EMAIL,
                render: e => (0, s.jsx)(eE, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.VERIFY_REQUEST,
                render: e => (0, s.jsx)(eo, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.DISABLE_EMAIL_NOTIFICATIONS,
                render: e => (0, s.jsx)(ec, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                render: e => (0, s.jsx)(ef, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.AUTHORIZE_IP,
                render: e => (0, s.jsx)(er, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.REJECT_IP,
                render: e =>
                  (0, s.jsx)(ed, { source: q.Routes.REJECT_IP, ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.REJECT_MFA,
                render: e =>
                  (0, s.jsx)(ed, { source: q.Routes.REJECT_MFA, ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.AUTHORIZE_PAYMENT,
                render: e => (0, s.jsx)(ei, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.RESET,
                render: e => (0, s.jsx)(ed, { source: q.Routes.RESET, ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                render: e => (0, s.jsx)(eI, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.CHANNEL(
                  ":guildId",
                  ":channelId?",
                  ":messageId?"
                ),
                render: e => (0, s.jsx)(e_, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.REPORT,
                render: e => (0, s.jsx)(eh, { ...e }),
              }),
              (0, s.jsx)(_.default, {
                path: q.Routes.REPORT_SECOND_LOOK,
                render: e => (0, s.jsx)(ep, { ...e }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              splash: null,
              redirectTo: null,
              backgroundId: null,
            });
        }
      }
      var em = u.default.connectStores(
        [S.default, O.default, v.default, C.default, T.default],
        e => {
          var t, n, s;
          let { match: a, location: l } = e,
            r =
              null == a
                ? void 0
                : null === (t = a.params) || void 0 === t
                  ? void 0
                  : t.inviteCode,
            i = Q.CONFERENCE_MODE_ENABLED ? Q.DEFAULT_INVITE_CODE : void 0,
            u =
              null != r
                ? (0, g.generateInviteKeyFromUrlParams)(r, l.search)
                : i,
            o =
              null == a
                ? void 0
                : null === (n = a.params) || void 0 === n
                  ? void 0
                  : n.giftCode,
            d =
              null == a
                ? void 0
                : null === (s = a.params) || void 0 === s
                  ? void 0
                  : s.guildTemplateCode;
          return {
            inviteKey: u,
            isAuthenticated: S.default.isAuthenticated(),
            giftCode: o,
            guildTemplateCode: d,
            gift: null != o ? v.default.get(o) : null,
            invite: null != u ? O.default.getInvite(u) : null,
            guildTemplate: null != d ? T.default.getGuildTemplate(d) : null,
            hasLoadedExperiments: C.default.hasLoadedExperiments,
          };
        }
      )(eT);
    },
    504568: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        l = n("597755"),
        r = n.n(l),
        i = n("446674"),
        u = n("437822"),
        o = n("457108"),
        d = n("970366"),
        c = n("271938"),
        f = n("124969"),
        E = n("49111"),
        _ = n("782340"),
        I = n("890957");
      i.default.initialize();
      class h extends a.PureComponent {
        componentDidMount() {
          let e = (0, o.default)(this.props.location);
          null != e && u.default.authorizeIPAddress(e),
            (0, d.trackAppUIViewed)("authorize_ip");
        }
        renderLoginButton() {
          if ("Android" === r.os.family || "iOS" === r.os.family) return null;
          let { transitionTo: e } = this.props;
          return (0, s.jsx)(f.Button, {
            onClick: () => e(E.Routes.LOGIN),
            children: _.default.Messages._LOGIN,
          });
        }
        renderFailed() {
          return (0, s.jsxs)(f.default, {
            children: [
              (0, s.jsx)("img", {
                alt: "",
                src: n("501851"),
                className: I.marginBottom20,
              }),
              (0, s.jsx)(f.Title, {
                className: I.marginBottom8,
                children: _.default.Messages.AUTHORIZATION_EXPIRED,
              }),
              (0, s.jsx)(f.SubTitle, {
                className: I.marginBottom40,
                children: _.default.Messages._AUTH_EXPIRED_SUGGESTION,
              }),
              this.renderLoginButton(),
            ],
          });
        }
        renderSucceeded() {
          return (0, s.jsxs)(f.default, {
            children: [
              (0, s.jsx)("img", {
                alt: "",
                src: n("346619"),
                className: I.marginBottom20,
              }),
              (0, s.jsx)(f.Title, {
                className: I.marginBottom8,
                children: _.default.Messages.IP_AUTHORIZATION_SUCCEEDED,
              }),
              (0, s.jsx)(f.SubTitle, {
                className: I.marginBottom40,
                children: _.default.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION,
              }),
              this.renderLoginButton(),
            ],
          });
        }
        renderDefault() {
          return (0, s.jsxs)(f.default, {
            children: [
              (0, s.jsx)(f.AuthSpinner, {}),
              (0, s.jsx)(f.Title, { children: _.default.Messages.AUTHORIZING }),
            ],
          });
        }
        render() {
          let { verifyFailed: e, verifySucceeded: t } = this.props;
          return e
            ? this.renderFailed()
            : t
              ? this.renderSucceeded()
              : this.renderDefault();
        }
      }
      h.defaultProps = { transitionTo: e => n.g.location.assign(e) };
      var p = i.default.connectStores([c.default], () => ({
        verifyFailed: c.default.didVerifyFail(),
        verifySucceeded: c.default.didVerifySucceed(),
      }))(h);
    },
    345308: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        r = n("437822"),
        i = n("457108"),
        u = n("970366"),
        o = n("271938"),
        d = n("124969"),
        c = n("782340"),
        f = n("890957"),
        E = e => {
          let { location: t } = e,
            { verifyFailed: E, verifySucceeded: _ } = (0,
            l.useStateFromStoresObject)([o.default], () => ({
              verifyFailed: o.default.didVerifyFail(),
              verifySucceeded: o.default.didVerifySucceed(),
            }));
          return (a.useEffect(() => {
            let e = (0, i.default)(t);
            null != e && r.default.authorizePayment(e),
              (0, u.trackAppUIViewed)("authorize_payment");
          }, [t]),
          E)
            ? (0, s.jsxs)(d.default, {
                children: [
                  (0, s.jsx)("img", {
                    alt: "",
                    src: n("768025"),
                    className: f.marginBottom20,
                  }),
                  (0, s.jsx)(d.Title, {
                    className: f.marginBottom8,
                    children: c.default.Messages.PAYMENT_AUTHORIZATION_EXPIRED,
                  }),
                  (0, s.jsx)(d.SubTitle, {
                    className: f.marginBottom40,
                    children:
                      c.default.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION,
                  }),
                ],
              })
            : _
              ? (0, s.jsxs)(d.default, {
                  children: [
                    (0, s.jsx)("img", {
                      alt: "",
                      src: n("176872"),
                      className: f.marginBottom20,
                    }),
                    (0, s.jsx)(d.Title, {
                      className: f.marginBottom8,
                      children:
                        c.default.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED,
                    }),
                    (0, s.jsx)(d.SubTitle, {
                      className: f.marginBottom40,
                      children:
                        c.default.Messages.PAYMENT_AUTH_SUCCEEDED_SUGGESTION,
                    }),
                  ],
                })
              : (0, s.jsxs)(d.default, {
                  children: [
                    (0, s.jsx)(d.AuthSpinner, {}),
                    (0, s.jsx)(d.Title, {
                      children: c.default.Messages.PAYMENT_AUTHORIZING,
                    }),
                  ],
                });
        };
    },
    713177: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("778043"),
        l = n("82946"),
        r = n("492249"),
        i = function (e) {
          let { match: t, location: n } = e,
            i = async (e, t) => {
              await (0, a.deepLinkRouteIfLandedAndNotAuthed)(
                r.RPCDeepLinks.CHANNEL,
                {
                  guildId: e.params.guildId,
                  channelId: e.params.channelId,
                  messageId: e.params.messageId,
                  search: t.search,
                }
              );
            };
          return (0, s.jsx)(l.default, {
            match: t,
            location: n,
            attemptDeepLink: i,
          });
        };
    },
    82946: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var s,
        a,
        l = n("37983"),
        r = n("884691"),
        i = n("414456"),
        u = n.n(i),
        o = n("43982"),
        d = n("209535"),
        c = n("393414"),
        f = n("124969"),
        E = n("782340"),
        _ = n("890957");
      ((a = s || (s = {}))[(a.INITIAL = 0)] = "INITIAL"),
        (a[(a.RPC_CONNECTED = 1)] = "RPC_CONNECTED"),
        (a[(a.APP_OPENING = 2)] = "APP_OPENING"),
        (a[(a.APP_OPENED = 3)] = "APP_OPENED");
      var I = function (e) {
        let { match: t, location: n, attemptDeepLink: s } = e,
          [a, i] = r.useState(0);
        r.useEffect(() => {
          o.default.once("connected", () => {
            i(1);
          }),
            o.default.once("disconnected", () => {
              (0, c.transitionTo)((0, d.getRedirectPath)());
            }),
            o.default.connect();
        }, []),
          r.useEffect(() => {
            if (0 !== a) return;
            let e = setTimeout(
              () => (0, c.transitionTo)((0, d.getRedirectPath)()),
              3e3
            );
            return () => clearTimeout(e);
          }, [a]);
        let I = r.useCallback(
          async (e, t) => {
            try {
              i(2), await s(e, t), i(3);
            } catch (e) {
              console.error("Error opening deeplink", e);
            }
          },
          [s]
        );
        if ((0, c.hasNavigated)()) return null;
        switch (a) {
          case 1:
            return (0, l.jsxs)(f.default, {
              children: [
                (0, l.jsx)(f.Title, {
                  className: _.marginBottom8,
                  children: E.default.Messages.DEEPLINK_BROWSER_TITLE,
                }),
                (0, l.jsx)(f.SubTitle, {
                  children: E.default.Messages.DEEPLINK_BROWSER_PROMPT,
                }),
                (0, l.jsx)(f.Button, {
                  className: _.marginTop40,
                  onClick: () => I(t, n),
                  children: E.default.Messages.OPEN_IN_APP,
                }),
                (0, l.jsx)(f.Button, {
                  className: u(_.marginTop8, _.marginCenterHorz),
                  color: f.Button.Colors.LINK,
                  look: f.Button.Looks.LINK,
                  onClick: () => (0, c.transitionTo)((0, d.getRedirectPath)()),
                  children: E.default.Messages.CONTINUE_IN_BROWSER,
                }),
              ],
            });
          case 0:
          case 2:
            return (0, l.jsxs)(f.default, {
              children: [
                (0, l.jsx)(f.Title, {
                  children: E.default.Messages.APP_OPENING,
                }),
                (0, l.jsx)(f.AuthSpinner, {}),
              ],
            });
          case 3:
            return (0, l.jsxs)(f.default, {
              children: [
                (0, l.jsx)(f.Title, {
                  className: _.marginBottom8,
                  children: E.default.Messages.APP_OPENED_TITLE,
                }),
                (0, l.jsx)(f.SubTitle, {
                  children: E.default.Messages.DEEPLINK_BROWSER_APP_OPENED,
                }),
              ],
            });
        }
      };
    },
    773852: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("730290"),
        r = n("446674"),
        i = n("872717"),
        u = n("77078"),
        o = n("457108"),
        d = n("970366"),
        c = n("766274"),
        f = n("476108"),
        E = n("124969"),
        _ = n("49111"),
        I = n("853994"),
        h = n("782340"),
        p = n("890957");
      r.default.initialize();
      class T extends a.PureComponent {
        componentDidMount() {
          let e = (0, o.default)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
          i.HTTP.post({
            url: _.Endpoints.DISABLE_EMAIL_NOTIFICATIONS,
            body: {
              token: e,
              pixel_uuid: t.hash,
              category: t.category,
              email_type: t.email_type,
            },
            oldFormErrors: !0,
          }).then(
            e => {
              let {
                  body: { user: n },
                } = e,
                s = new c.default(n);
              this.setState({
                success: !0,
                busy: !1,
                user: s,
                category: t.category,
              });
            },
            () => this.setState({ success: !1, busy: !1 })
          ),
            (0, d.trackAppUIViewed)("disable_email_notifications");
        }
        renderBusy() {
          return (0, s.jsx)(E.default, {
            children: (0, s.jsx)(E.AuthSpinner, {}),
          });
        }
        renderCategorySuccess(e, t) {
          let { defaultRoute: n, transitionTo: a } = this.props,
            l = h.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format(
              { category: t }
            );
          return (0, s.jsxs)(E.default, {
            children: [
              (0, s.jsx)(E.Title, {
                className: p.marginBottom8,
                children: h.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER,
              }),
              (0, s.jsx)(E.SubTitle, { children: l }),
              (0, s.jsx)(E.Button, {
                className: p.marginTop20,
                onClick: () => a(n),
                children: h.default.Messages.CONTINUE_TO_WEBAPP,
              }),
              (0, s.jsx)(E.Button, {
                className: p.marginTop8,
                color: E.Button.Colors.LINK,
                look: E.Button.Looks.LINK,
                onClick: () =>
                  a(_.Routes.SETTINGS("notifications", I.EMAILS_SUBSECTION)),
                children:
                  h.default.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL,
              }),
            ],
          });
        }
        renderSuccess() {
          let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: a } = this.state;
          if (null != a) {
            let e = I.EmailCategoriesList.find(e => e.category === a);
            if (null != e) return this.renderCategorySuccess(a, e.label());
          }
          return (0, s.jsxs)(E.default, {
            children: [
              (0, s.jsx)(E.Avatar, {
                src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                size: u.AvatarSizes.DEPRECATED_SIZE_100,
                className: p.marginBottom20,
              }),
              (0, s.jsx)(E.Title, {
                className: p.marginBottom8,
                children:
                  h.default.Messages
                    .AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER,
              }),
              (0, s.jsx)(E.SubTitle, {
                children:
                  h.default.Messages
                    .AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY,
              }),
              (0, s.jsx)(E.Button, {
                className: p.marginTop40,
                onClick: () => t(e),
                children: h.default.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, s.jsxs)(E.default, {
            children: [
              (0, s.jsx)(E.Image, {
                src: n("2862"),
                className: p.marginBottom20,
              }),
              (0, s.jsx)(E.Title, {
                className: p.marginBottom8,
                children:
                  h.default.Messages
                    .AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER,
              }),
              (0, s.jsx)(E.SubTitle, {
                children:
                  h.default.Messages
                    .AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY,
              }),
              (0, s.jsx)(E.Button, {
                className: p.marginTop40,
                onClick: () => t(e),
                children: h.default.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        render() {
          let { busy: e, success: t } = this.state;
          return e
            ? this.renderBusy()
            : t
              ? this.renderSuccess()
              : this.renderError();
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              busy: !0,
              success: !1,
              user: null,
              category: null,
            });
        }
      }
      T.defaultProps = { transitionTo: e => n.g.location.assign(e) };
      var m = r.default.connectStores([f.default], () => ({
        defaultRoute: f.default.defaultRoute,
      }))(T);
    },
    679030: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n("222007"),
        n("70102");
      var s,
        a,
        l = n("37983"),
        r = n("884691"),
        i = n("414456"),
        u = n.n(i),
        o = n("446674"),
        d = n("913144"),
        c = n("437822"),
        f = n("569272"),
        E = n("568131"),
        _ = n("327037"),
        I = n("208620"),
        h = n("970366"),
        p = n("271938"),
        T = n("476108"),
        m = n("55411"),
        N = n("686470"),
        g = n("552712"),
        A = n("124969"),
        S = n("659632"),
        C = n("701909"),
        v = n("158998"),
        O = n("404432"),
        R = n("291850"),
        L = n("860959"),
        x = n("49111"),
        M = n("782340"),
        D = n("890957");
      o.default.initialize(),
        ((a = s || (s = {})).REGISTER = "register"),
        (a.LOGIN = "login");
      class P extends r.PureComponent {
        componentDidMount() {
          let { authenticated: e, isResolved: t } = this.props;
          e && this.handleAuthenticated(),
            !t && this.resolveGiftCode(),
            (0, h.trackAppUIViewed)("gift_code");
        }
        componentDidUpdate(e) {
          let { authenticated: t, isResolved: n } = this.props;
          !n &&
            d.default.wait(() => {
              this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
        }
        handleAuthenticated() {
          let { currentUser: e } = this.state;
          E.fetchLibrary(), null == e && this.refreshUser();
        }
        get requiresVerification() {
          let { currentUser: e } = this.state;
          return null != e && !e.verified;
        }
        getCode() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return e.match.params.giftCode;
        }
        getMode() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return e.login ? "login" : "register";
        }
        getErrorMessage(e) {
          let { libraryApplication: t, sku: n } = this.props,
            { error: s } = this.state,
            a = null != s ? s.code : null;
          return a === x.AbortCodes.INVALID_GIFT_SELF_REDEMPTION
            ? M.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT
            : a === x.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED &&
                (null == n ? void 0 : n.productLine) ===
                  x.SKUProductLines.COLLECTIBLES
              ? M.default.Messages.GIFT_ERROR_OWNED
              : null != t || a === x.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED
                ? M.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
                    libraryLink: x.Routes.APPLICATION_LIBRARY,
                  })
                : e.isClaimed ||
                    a === x.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? M.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED
                  : a === x.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? M.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT
                    : void 0;
        }
        renderSpinner(e) {
          return (0, l.jsxs)(A.default, {
            children: [
              (0, l.jsx)(A.Title, { children: e }),
              (0, l.jsx)(A.AuthSpinner, {}),
            ],
          });
        }
        renderExpiredInvite() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, l.jsxs)(A.default, {
            children: [
              (0, l.jsx)(A.Image, {
                src: n("653240"),
                className: D.marginBottom8,
              }),
              (0, l.jsx)(A.Title, {
                className: u(D.marginTop8, D.marginBottom8),
                children: M.default.Messages.GIFT_CODE_AUTH_INVALID_TITLE,
              }),
              (0, l.jsx)(A.SubTitle, {
                children: M.default.Messages.GIFT_CODE_AUTH_INVALID_BODY,
              }),
              (0, l.jsx)(A.Button, {
                className: u(D.marginTop40, D.marginBottom8),
                onClick: () => t(e),
                children: M.default.Messages.CONTINUE_TO_WEBAPP,
              }),
              (0, l.jsx)(A.Button, {
                onClick: () =>
                  window.open(
                    C.default.getArticleURL(x.HelpdeskArticles.GIFTING),
                    "_blank"
                  ),
                look: A.Button.Looks.LINK,
                color: A.Button.Colors.LINK,
                children: M.default.Messages.GIFT_CODE_AUTH_INVALID_TIP,
              }),
            ],
          });
        }
        renderAppOpened() {
          return (0, l.jsxs)(A.default, {
            children: [
              (0, l.jsx)(A.Title, {
                className: D.marginBottom8,
                children: M.default.Messages.APP_OPENED_TITLE,
              }),
              (0, l.jsx)(A.SubTitle, {
                children: M.default.Messages.APP_OPENED_BODY,
              }),
              (0, l.jsx)(A.Button, {
                className: D.marginTop40,
                onClick: () => this.setState({ continueOnWeb: !0 }),
                children: M.default.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER,
              }),
            ],
          });
        }
        renderVerification(e) {
          let { sentVerification: t } = this.state;
          return (0, l.jsxs)(A.default, {
            children: [
              (0, l.jsx)(A.Image, {
                src: n("951536"),
                className: D.marginBottom8,
              }),
              (0, l.jsx)(A.Title, {
                children:
                  M.default.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
                    username: e.username,
                  }),
              }),
              (0, l.jsx)(A.SubTitle, {
                className: D.marginTop20,
                children:
                  M.default.Messages
                    .GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED,
              }),
              (0, l.jsx)(A.Button, {
                disabled: t,
                className: D.marginTop40,
                onClick: this.handleResendVerification,
                children: t
                  ? M.default.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT
                  : M.default.Messages.RESEND_VERIFICATION_EMAIL,
              }),
              (0, l.jsx)(A.Button, {
                look: A.Button.Looks.LINK,
                color: A.Button.Colors.LINK,
                onClick: this.refreshUser,
                className: D.marginTop8,
                children:
                  M.default.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN,
              }),
            ],
          });
        }
        renderAuthenticated(e, t) {
          let n = this.getErrorMessage(e);
          return (0, l.jsxs)(A.default, {
            children: [
              (0, l.jsx)(O.default, { giftCode: e }),
              (0, l.jsx)(A.Button, {
                disabled: null != n,
                className: D.marginTop40,
                onClick: this.handleAccept,
                children: M.default.Messages.GIFT_CODE_AUTH_ACCEPT,
              }),
              null != n
                ? (0, l.jsx)(A.SubTitle, {
                    className: D.marginTop20,
                    children: n,
                  })
                : (0, l.jsx)(A.SubText, {
                    className: D.marginTop20,
                    children:
                      M.default.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
                        userTag: v.default.getUserTag(t),
                        onLogoutClick: this.handleLogout,
                      }),
                  }),
            ],
          });
        }
        render() {
          let {
              nativeAppState: e,
              sku: t,
              authenticated: n,
              giftCode: s,
              isResolved: a,
              isAccepting: r,
              transitionTo: i,
              location: u,
            } = this.props,
            { fetchingUser: o, continueOnWeb: d } = this.state;
          if (e === x.NativeAppStates.OPEN && !d) return this.renderAppOpened();
          if (e === x.NativeAppStates.OPENING)
            return this.renderSpinner(M.default.Messages.APP_OPENING);
          if (r)
            return this.renderSpinner(
              M.default.Messages.GIFT_CODE_AUTH_ACCEPTING
            );
          if (null == s)
            return a
              ? this.renderExpiredInvite()
              : this.renderSpinner(M.default.Messages.GIFT_CODE_AUTH_RESOLVING);
          if (a) {
            if (n) {
              let e = this.state.currentUser;
              return o || null == e
                ? this.renderSpinner(
                    M.default.Messages.GIFT_CODE_AUTH_FETCHING_USER
                  )
                : this.requiresVerification && null != e
                  ? this.renderVerification(e)
                  : this.renderAuthenticated(s, e);
            }
            return "login" === this.getMode()
              ? (0, l.jsx)(R.default, {
                  giftCodeSKU: t,
                  giftCode: s,
                  transitionTo: i,
                  location: u,
                })
              : (0, l.jsx)(L.default, {
                  giftCodeSKU: t,
                  giftCode: s,
                  transitionTo: i,
                  location: u,
                });
          }
          return null;
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              error: null,
              continueOnWeb: !1,
              currentUser: null,
              sentVerification: !1,
              fetchingUser: !1,
            }),
            (this.refreshUser = () => {
              this.setState({ fetchingUser: !0 }),
                _.fetchCurrentUser({ withAnalyticsToken: !0 })
                  .then(e =>
                    this.setState({ currentUser: e, fetchingUser: !1 })
                  )
                  .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            (this.handleLogout = () => {
              let e = this.props.match.params.giftCode;
              c.default.logout(x.Routes.GIFT_CODE_LOGIN(e));
            }),
            (this.handleResendVerification = () => {
              c.default.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            (this.handleAccept = async () => {
              let { transitionTo: e, giftCode: t } = this.props;
              if (null == t)
                throw Error("Trying to accept gift before resolve");
              let n = this.getCode();
              try {
                this.setState({ error: null }),
                  await f.default.redeemGiftCode({ code: n }),
                  e(x.Routes.APP);
              } catch (e) {
                this.setState({ error: e });
              }
            }),
            (this.resolveGiftCode = () => {
              let { transitionTo: e } = this.props,
                t = this.getCode();
              f.default.resolveGiftCode(t, !0, !0).then(n => {
                null != n &&
                  null != n.giftCode.promotion &&
                  e(x.Routes.BILLING_PROMOTION_REDEMPTION(t));
              });
            });
        }
      }
      var U = o.default.connectStores(
        [m.default, N.default, p.default, g.default, T.default, I.default],
        e => {
          let t = e.match.params.giftCode,
            n = m.default.get(t),
            s = null != n ? g.default.get(n.skuId) : null;
          return {
            giftCode: n,
            sku: s,
            libraryApplication:
              null != s && (null == n ? void 0 : n.entitlementBranches) != null
                ? S.firstLibraryApplicationForGiftCode(
                    n.entitlementBranches,
                    s,
                    N.default
                  )
                : null,
            authenticated: p.default.isAuthenticated(),
            defaultRoute: T.default.defaultRoute,
            isResolved: m.default.getIsResolved(t),
            isAccepting: m.default.getIsAccepting(t),
            libraryApplicationsFetched: N.default.fetched,
            nativeAppState: I.default.getState(t),
          };
        }
      )(P);
    },
    926593: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("627445"),
        u = n.n(i),
        o = n("446674"),
        d = n("208620"),
        c = n("569808"),
        f = n("800932"),
        E = n("913645"),
        _ = n("434824"),
        I = n("473759"),
        h = n("165926"),
        p = n("970366"),
        T = n("42963"),
        m = n("271938"),
        N = n("476108"),
        g = n("124969"),
        A = n("65300"),
        S = n("291850"),
        C = n("598489"),
        v = n("860959"),
        O = n("49111"),
        R = n("579033"),
        L = n("56235"),
        x = n("149806"),
        M = n("53452"),
        D = n("782340"),
        P = n("520916"),
        U = n("890957");
      o.default.initialize();
      class j extends a.PureComponent {
        componentDidMount() {
          (0, p.trackAppUIViewed)("guildTemplate"),
            !M.IS_APP_COMPATIBLE_BROWSER &&
              A.default.launch(
                "discord://" + O.Routes.GUILD_TEMPLATE(this.props.code),
                () => void 0
              );
        }
        componentDidUpdate(e) {
          this.props.code !== e.code &&
            E.default.resolveGuildTemplate(this.props.code);
        }
        renderButton(e, t) {
          return M.IS_APP_COMPATIBLE_BROWSER
            ? (0, s.jsx)(g.Button, {
                className: U.marginTop40,
                onClick: t,
                children: e,
              })
            : (0, s.jsx)(g.IncompatibleBrowser, { className: U.marginTop40 });
        }
        renderSpinner(e) {
          return (0, s.jsxs)(g.default, {
            children: [
              (0, s.jsx)(g.Title, { children: e }),
              (0, s.jsx)(g.AuthSpinner, {}),
            ],
          });
        }
        renderInvalidGuildTemplate() {
          return (0, s.jsxs)(g.default, {
            children: [
              (0, s.jsx)(g.Image, {
                src: n("653240"),
                className: U.marginBottom8,
              }),
              (0, s.jsx)(g.Title, {
                className: r(U.marginTop8, U.marginBottom8),
                children: D.default.Messages.GUILD_TEMPLATE_INVALID_TITLE,
              }),
              (0, s.jsx)(g.SubTitle, {
                children: D.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE,
              }),
              this.renderButton(
                D.default.Messages.CONTINUE_TO_WEBAPP,
                this.handleContinue
              ),
            ],
          });
        }
        renderAppOpened() {
          return (0, s.jsxs)(g.default, {
            children: [
              (0, s.jsx)(g.Title, {
                className: U.marginBottom8,
                children: D.default.Messages.APP_OPENED_TITLE,
              }),
              (0, s.jsx)(g.SubTitle, {
                children: D.default.Messages.APP_OPENED_BODY,
              }),
              this.renderButton(
                D.default.Messages.CONTINUE_TO_WEBAPP,
                this.handleContinue
              ),
            ],
          });
        }
        renderAuthenticatedOrDownload() {
          let { guildTemplate: e } = this.props;
          return (u(null != e, "guild template must not be null"),
          e.state === R.GuildTemplateStates.RESOLVING)
            ? (0, s.jsx)(g.default, {
                className: P.authBox,
                children: (0, s.jsx)(I.default, { guildTemplate: e }),
              })
            : (0, s.jsx)(G, { guildTemplate: e });
        }
        renderContinue() {
          return (0, s.jsxs)(g.default, {
            children: [
              (0, s.jsx)(g.Title, {
                children: D.default.Messages.APP_NOT_OPENED,
              }),
              this.renderButton(
                D.default.Messages.CONTINUE_TO_WEBAPP,
                this.handleContinue
              ),
            ],
          });
        }
        render() {
          let {
            guildTemplate: e,
            nativeAppState: t,
            authenticated: n,
            transitionTo: a,
            location: l,
          } = this.props;
          if (null == e) return this.renderSpinner(D.default.Messages.LOADING);
          if (t === O.NativeAppStates.OPEN) return this.renderAppOpened();
          if (t === O.NativeAppStates.OPENING)
            return this.renderSpinner(D.default.Messages.APP_OPENING);
          switch (e.state) {
            case R.GuildTemplateStates.RESOLVING:
              return this.renderSpinner(D.default.Messages.APP_OPENING);
            case R.GuildTemplateStates.RESOLVED:
              if (n || !M.IS_APP_COMPATIBLE_BROWSER)
                return this.renderAuthenticatedOrDownload();
              if (this.props.login)
                return (0, s.jsx)(S.default, {
                  guildTemplate: e,
                  transitionTo: a,
                  location: l,
                });
              else
                return (0, s.jsx)(v.default, {
                  guildTemplate: e,
                  transitionTo: a,
                  location: l,
                  onRegister: () => {
                    (0, h.setNewUser)(
                      L.NewUserTypes.ORGANIC_REGISTERED_GUILD_TEMPLATE
                    ),
                      T.default.flowStart(
                        x.FlowType.ORGANIC_GUILD_TEMPLATES,
                        x.RegistrationSteps.NUF_STARTED
                      );
                  },
                });
            case R.GuildTemplateStates.EXPIRED:
              return this.renderInvalidGuildTemplate();
            default:
              return null;
          }
        }
        constructor(...e) {
          super(...e),
            (this.handleContinue = () => {
              let { defaultRoute: e, transitionTo: t } = this.props;
              t(e);
            });
        }
      }
      function b(e) {
        let t = {
          guildTemplate: (0, o.useStateFromStores)([c.default], () =>
            c.default.getGuildTemplate(e.code)
          ),
          nativeAppState: (0, o.useStateFromStores)([d.default], () =>
            d.default.getState(e.code)
          ),
          authenticated: (0, o.useStateFromStores)([m.default], () =>
            m.default.isAuthenticated()
          ),
          defaultRoute: (0, o.useStateFromStores)(
            [N.default],
            () => N.default.defaultRoute
          ),
        };
        return (0, s.jsx)(j, { ...e, ...t });
      }
      function G(e) {
        let { guildTemplate: t } = e,
          { form: n, handleSubmit: a } = (0, f.default)(t, !1);
        T.default.flowStep(
          x.FlowType.ORGANIC_GUILD_TEMPLATES,
          x.CreateGuildSteps.GUILD_CREATE
        );
        let l = (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.Title, {
              className: P.header,
              children: D.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD,
            }),
            n,
            (0, s.jsx)(g.Button, {
              className: P.createButton,
              onClick: a,
              children: D.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD,
            }),
          ],
        });
        return (0, s.jsx)(C.default, {
          className: P.authBox,
          children: () => [
            (0, s.jsx)(_.default, { guildTemplate: t }, "template"),
            (0, s.jsx)(
              "div",
              { className: P.formContainer, children: l },
              "contents"
            ),
          ],
        });
      }
    },
    683068: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        r = n("77078"),
        i = n("569808"),
        u = n("913645"),
        o = n("473759"),
        d = n("970366"),
        c = n("271938"),
        f = n("124969"),
        E = n("599110"),
        _ = n("724853"),
        I = n("49111"),
        h = n("579033"),
        p = n("782340"),
        T = n("890957");
      function m(e, t, n) {
        e.preventDefault(),
          E.default.track(I.AnalyticEvents.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
          });
        let s = c.default.getFingerprint(),
          a = null != s ? s : c.default.getId();
        u.default.openMobileApp(
          n.state === h.GuildTemplateStates.RESOLVED ? t : void 0,
          a
        );
      }
      function N(e) {
        let { code: t } = e,
          n = (0, l.useStateFromStores)([i.default], () =>
            i.default.getGuildTemplate(t)
          );
        return (a.useEffect(() => {
          (0, d.trackAppUIViewed)("guild_template_mobile");
        }, []),
        null == n || n.state === h.GuildTemplateStates.RESOLVING)
          ? (0, s.jsx)(f.default, { children: (0, s.jsx)(r.Spinner, {}) })
          : n.state === h.GuildTemplateStates.RESOLVED
            ? (0, s.jsxs)(f.default, {
                children: [
                  (0, s.jsx)(o.default, { guildTemplate: n, tall: !0 }),
                  (0, s.jsx)(f.Button, {
                    onClick: e => m(e, t, n),
                    className: T.marginTop20,
                    children: p.default.Messages.GUILD_TEMPLATE_OPEN,
                  }),
                ],
              })
            : (0, s.jsx)(_.default, {
                text: p.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
                buttonCta: p.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
                onClick: e => m(e, t, n),
              });
      }
      l.default.initialize();
    },
    724853: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InvalidMobileCodedLinkInner: function () {
            return I;
          },
          default: function () {
            return h;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        l = n.n(a),
        r = n("669491"),
        i = n("77078"),
        u = n("145131"),
        o = n("124969"),
        d = n("49111"),
        c = n("782340"),
        f = n("243372"),
        E = n("125047"),
        _ = n("890957");
      function I(e) {
        let { text: t, buttonCta: a, onClick: d } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o.Image, { src: n("781073") }),
            (0, s.jsx)(o.Title, {
              className: l(_.marginTop20, _.marginBottom8, E.flexCenter),
              children: c.default.Messages.DISCORD_DESC_SHORT,
            }),
            (0, s.jsx)(o.SubTitle, {
              className: _.marginBottom40,
              children: c.default.Messages.DISCORD_DESC_LONG,
            }),
            (0, s.jsxs)(i.Card, {
              className: f.card,
              type: i.Card.Types.CUSTOM,
              children: [
                (0, s.jsx)("img", {
                  alt: "",
                  className: f.cardAccentLeft,
                  src: n("975391"),
                }),
                (0, s.jsx)("img", {
                  alt: "",
                  className: f.cardAccentRight,
                  src: n("37920"),
                }),
                (0, s.jsxs)(u.default, {
                  className: f.cardContents,
                  direction: u.default.Direction.VERTICAL,
                  align: u.default.Align.STRETCH,
                  grow: 0,
                  children: [
                    (0, s.jsx)(i.Text, {
                      tag: "strong",
                      className: f.buttonTitle,
                      variant: "text-md/normal",
                      style: {
                        color: r.default.unsafe_rawColors.PRIMARY_300.css,
                      },
                      children: t,
                    }),
                    (0, s.jsx)(o.Button, {
                      className: f.button,
                      onClick: d,
                      children: a,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function h(e) {
        let {
          text: t,
          buttonCta: n,
          theme: a = d.ThemeTypes.DARK,
          onClick: l,
        } = e;
        return (0, s.jsx)(o.default, {
          theme: a,
          children: (0, s.jsx)(I, { text: t, buttonCta: n, onClick: l }),
        });
      }
    },
    43772: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return W;
          },
        }),
        n("702976"),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("498574"),
        u = n("391679"),
        o = n("446674"),
        d = n("444095"),
        c = n("970728"),
        f = n("448993"),
        E = n("678916"),
        _ = n("106885"),
        I = n("378020"),
        h = n("534438"),
        p = n("208620"),
        T = n("129040"),
        m = n("9294"),
        N = n("165926"),
        g = n("393414"),
        A = n("970366"),
        S = n("271938"),
        C = n("476108"),
        v = n("337543"),
        O = n("124969"),
        R = n("599110"),
        L = n("568734"),
        x = n("701909"),
        M = n("883029"),
        D = n("65300"),
        P = n("719451"),
        U = n("291850"),
        j = n("860959"),
        b = n("49111"),
        G = n("492397"),
        y = n("56235"),
        B = n("53452"),
        F = n("782340"),
        V = n("890957");
      o.default.initialize();
      let k = "Accept Invite Page",
        H = { REGISTER: "register", LOGIN: "login" };
      async function w(e) {
        let { invite: t } = await c.default.resolveInvite(e, k);
        null != t && (0, _.updateAuthInvite)(t);
      }
      class Y extends a.PureComponent {
        componentDidMount() {
          let { isUnderage: e, login: t, inviteKey: n } = this.props;
          if (
            (R.default.track(
              b.AnalyticEvents.INVITE_VIEWED,
              { invite_code: n },
              { flush: !0 }
            ),
            (0, A.trackAppUIViewed)("invite"),
            !B.IS_APP_COMPATIBLE_BROWSER)
          ) {
            let e = this.getInviteKey();
            D.default.launch("discord://" + b.Routes.INVITE(e), () => void 0);
          }
          if (!t && e) {
            let e = this.getInviteKey(),
              { baseCode: t } = (0, m.parseExtraDataFromInviteKey)(e);
            (0, g.replaceWith)(b.Routes.INVITE_LOGIN(t));
          }
        }
        componentDidUpdate(e) {
          let {
              invite: t,
              nativeAppState: n,
              authenticated: s,
              transitionTo: a,
            } = this.props,
            l = this.getInviteKey();
          if (l !== this.getInviteKey(e)) w(l);
          else if (t.state === b.InviteStates.APP_NOT_OPENED)
            this.handleContinue();
          else if (this.getMode() === H.LOGIN && s !== e.authenticated && s) {
            let e = S.default.getFingerprint();
            if (null != e) {
              let t = (0, u.extractId)(e);
              this.track(b.AnalyticEvents.INVITE_LOGIN_SUCCESSFUL, !0, {
                prev_user_id: t,
              });
            }
            c.default.acceptInvite({
              inviteKey: l,
              context: this.getAcceptInviteContext(k),
              skipOnboarding: !0,
              callback: this.handleContinue,
            });
          }
          if (
            (n !== e.nativeAppState &&
              n === b.NativeAppStates.OPEN &&
              this.track(b.AnalyticEvents.INVITE_APP_INVOKED, !1),
            this.getMode() === H.REGISTER && s && !e.authenticated)
          ) {
            let { channel: e } = t;
            null != e &&
              ((0, N.setNewUser)(y.NewUserTypes.INVITE_UNCLAIMED),
              null != t.guild
                ? a(b.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                : c.default.transitionToInvite(t, a));
          }
        }
        getInviteKey() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return e.inviteKey;
        }
        getMode() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.props;
          return G.CONFERENCE_MODE_ENABLED
            ? H.REGISTER
            : e.login
              ? H.LOGIN
              : H.REGISTER;
        }
        track(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            { invite: s } = this.props,
            a = this.getInviteKey(),
            l = (0, m.parseInviteCodeFromInviteKey)(a),
            r = t
              ? {
                  guild_id: null != s.guild ? s.guild.id : null,
                  channel_id: null != s.channel ? s.channel.id : null,
                  inviter_id: null != s.inviter ? s.inviter.id : null,
                  invite_code: l,
                }
              : { invite_code: l };
          R.default.track(e, { ...r, ...n });
        }
        renderSpinner(e) {
          return (0, s.jsxs)(O.default, {
            children: [
              (0, s.jsx)(O.Title, { children: e }),
              (0, s.jsx)(O.AuthSpinner, {}),
            ],
          });
        }
        renderInvalidInvite() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (0, s.jsxs)(O.default, {
            children: [
              (0, s.jsx)(O.Image, {
                src: n("653240"),
                className: V.marginBottom8,
              }),
              (0, s.jsx)(O.Title, {
                className: r(V.marginTop8, V.marginBottom8),
                children: F.default.Messages.AUTH_INVALID_INVITE_TITLE,
              }),
              (0, s.jsx)(O.SubTitle, {
                children: e
                  ? F.default.Messages.AUTH_BANNED_INVITE_BODY
                  : F.default.Messages.AUTH_INVALID_INVITE_BODY,
              }),
              this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP),
              (0, s.jsx)(O.Button, {
                onClick: () =>
                  window.open(
                    x.default.getArticleURL(b.HelpdeskArticles.INVALID_INVITES),
                    "_blank"
                  ),
                look: O.Button.Looks.LINK,
                color: O.Button.Colors.LINK,
                className: V.marginTop8,
                children: F.default.Messages.AUTH_INVALID_INVITE_TIP,
              }),
            ],
          });
        }
        renderErrorInvite() {
          var e, t;
          return (0, s.jsxs)(O.default, {
            children: [
              (0, s.jsx)(P.default, {
                invite: this.props.invite,
                error:
                  null === (e = this.state.error) || void 0 === e
                    ? void 0
                    : e.message,
              }),
              (null === (t = this.state.error) || void 0 === t
                ? void 0
                : t.code) === b.AbortCodes.INVALID_CANNOT_FRIEND_SELF
                ? this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP)
                : this.renderButton(
                    F.default.Messages.INSTANT_INVITE_ACCEPT,
                    this.handleAccept
                  ),
            ],
          });
        }
        renderExpiredInvite() {
          return this.renderInvalidInvite(!1);
        }
        renderBannedInvite() {
          return this.renderInvalidInvite(!0);
        }
        renderAppOpened(e) {
          let t = null != e ? e : this.handleContinue;
          return (0, s.jsxs)(O.default, {
            children: [
              (0, s.jsx)(O.Title, {
                className: V.marginBottom8,
                children: F.default.Messages.APP_OPENED_TITLE,
              }),
              (0, s.jsx)(O.SubTitle, {
                children: F.default.Messages.APP_OPENED_BODY,
              }),
              this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP, () =>
                t()
              ),
            ],
          });
        }
        renderAuthenticatedHeader() {
          let { invite: e } = this.props;
          return null != e.stage_instance && null != e.guild
            ? (0, s.jsx)(h.default, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : null != e.guild_scheduled_event
              ? (0, s.jsx)(I.GuildScheduledEventInviteHeader, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, s.jsx)(P.default, { invite: e });
        }
        renderAuthenicatedFooter() {
          let { invite: e } = this.props;
          return (null != e.stage_instance ||
            null != e.guild_scheduled_event) &&
            null != e.guild
            ? (0, s.jsx)(O.default, {
                className: V.marginTop20,
                children: (0, s.jsx)(h.StageInviteFooter, {
                  guild: e.guild,
                  onlineCount: e.approximate_presence_count,
                }),
              })
            : null;
        }
        renderAuthenticatedOrDownload() {
          let { invite: e } = this.props,
            t =
              null != e.stage_instance
                ? F.default.Messages.INSTANT_INVITE_ACCEPT_STAGE
                : F.default.Messages.INSTANT_INVITE_ACCEPT;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)(O.default, {
                children: [
                  this.renderAuthenticatedHeader(),
                  this.renderButton(t, this.handleAccept),
                ],
              }),
              this.renderAuthenicatedFooter(),
            ],
          });
        }
        renderContinue() {
          return (0, s.jsxs)(O.default, {
            children: [
              (0, s.jsx)(O.Title, {
                children: F.default.Messages.APP_NOT_OPENED,
              }),
              this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP),
            ],
          });
        }
        render() {
          let {
            invite: e,
            nativeAppState: t,
            authenticated: n,
            transitionTo: a,
            location: l,
          } = this.props;
          if (t === b.NativeAppStates.OPEN) return this.renderAppOpened();
          switch (e.state) {
            case b.InviteStates.APP_OPENED:
              return this.renderAppOpened();
            case b.InviteStates.APP_NOT_OPENED:
              return this.renderContinue();
            case b.InviteStates.RESOLVING:
              return G.CONFERENCE_MODE_ENABLED
                ? this.renderSpinner(
                    F.default.Messages.DEFAULT_INPUT_PLACEHOLDER
                  )
                : this.renderSpinner(F.default.Messages.APP_OPENING);
            case b.InviteStates.APP_OPENING:
              return this.renderSpinner(F.default.Messages.APP_OPENING);
            case b.InviteStates.RESOLVED:
              var r;
              if (
                n &&
                (0, L.hasFlag)(
                  null !== (r = e.flags) && void 0 !== r ? r : 0,
                  i.GuildInviteFlags.IS_GUEST_INVITE
                )
              )
                return (
                  c.default.openApp(e.code),
                  d.SessionStorage.set(T.GUEST_INVITE_KEY, e.code),
                  this.renderAppOpened(() => a(b.Routes.APP))
                );
              if (n || !B.IS_APP_COMPATIBLE_BROWSER)
                return this.renderAuthenticatedOrDownload();
              else if (this.getMode() === H.LOGIN)
                return (0, s.jsx)(U.default, {
                  invite: e,
                  transitionTo: a,
                  location: l,
                });
              else
                return (0, s.jsx)(j.default, {
                  invite: e,
                  onLoginStart: () =>
                    this.track(b.AnalyticEvents.INVITE_LOGIN, !0),
                  location: l,
                  transitionTo: a,
                });
            case b.InviteStates.ACCEPTING:
              return this.renderSpinner(
                F.default.Messages.INSTANT_INVITE_ACCEPTING
              );
            case b.InviteStates.EXPIRED:
              return this.renderExpiredInvite();
            case b.InviteStates.BANNED:
              return this.renderBannedInvite();
            case b.InviteStates.ERROR:
              return this.renderErrorInvite();
            case b.InviteStates.ACCEPTED:
            default:
              return null;
          }
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this.state = { error: null }),
            (this.getAcceptInviteContext = e =>
              c.default.getInviteContext(e, this.props.invite)),
            (this.handleContinue = e => {
              let { invite: t, transitionTo: n } = this.props;
              if (
                null != t.channel ||
                (null == e ? void 0 : e.channel) != null
              ) {
                var s;
                (null === (s = t.guild) || void 0 === s ? void 0 : s.id) != null
                  ? n(b.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                  : c.default.transitionToInvite(null != e ? e : t, n);
              }
            }),
            (this.handleAccept = () => {
              this.setState({ error: null });
              let e = this.getInviteKey();
              c.default
                .acceptInvite({
                  inviteKey: e,
                  context: this.getAcceptInviteContext(k),
                  skipOnboarding: !0,
                  callback: t => {
                    (0, _.updateAuthInvite)(t),
                      null != t.channel && c.default.openApp(e, t.channel.id);
                  },
                })
                .catch(e => {
                  if (
                    e instanceof f.V6OrEarlierAPIError ||
                    e instanceof f.APIError
                  ) {
                    let t = (0, M.getInviteError)(e.code);
                    this.setState({ error: { code: e.code, message: t } });
                  } else
                    this.setState({
                      error: {
                        code: e.code,
                        message: F.default.Messages.INVITE_MODAL_ERROR_DEFAULT,
                      },
                    });
                });
            }),
            (this.handleDefaultTransition = () => {
              let { defaultRoute: e, transitionTo: t } = this.props;
              t(e);
            }),
            (this.renderButton = function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t.handleDefaultTransition,
                { invite: a } = t.props,
                l = null != a.stage_instance || null != a.guild_scheduled_event;
              return B.IS_APP_COMPATIBLE_BROWSER
                ? (0, s.jsx)(O.Button, {
                    className: l ? V.marginTop20 : V.marginTop40,
                    onClick: n,
                    color: l ? O.Button.Colors.GREEN : O.Button.Colors.BRAND,
                    children: e,
                  })
                : (0, s.jsx)(O.IncompatibleBrowser, {
                    className: V.marginTop40,
                  });
            });
        }
      }
      var W = o.default.connectStores(
        [v.default, C.default, S.default, p.default, E.default],
        e => {
          var t;
          let { inviteKey: n } = e;
          return {
            invite:
              null !== (t = v.default.getInvite(n)) && void 0 !== t ? t : {},
            nativeAppState: p.default.getState(n),
            authenticated: S.default.isAuthenticated(),
            defaultRoute: C.default.defaultRoute,
            isUnderage: E.default.isUnderageAnonymous(),
          };
        }
      )(Y);
    },
    104110: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("778043"),
        l = n("82946"),
        r = n("492249"),
        i = function (e) {
          let { match: t, location: n } = e,
            i = async (e, t) => {
              await (0, a.deepLinkRouteIfLandedAndNotAuthed)(
                r.RPCDeepLinks.PICK_GUILD_SETTINGS,
                {
                  section: e.params.section,
                  subsection: e.params.subsection,
                  search: t.search,
                }
              );
            };
          return (0, s.jsx)(l.default, {
            match: t,
            location: n,
            attemptDeepLink: i,
          });
        };
    },
    815762: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        r = n("77078"),
        i = n("437822"),
        u = n("327037"),
        o = n("457108"),
        d = n("965153"),
        c = n("105029"),
        f = n("970366"),
        E = n("271938"),
        _ = n("760190"),
        I = n("124969"),
        h = n("49111"),
        p = n("782340"),
        T = n("890957");
      l.default.initialize();
      var m = e => {
        let { location: t } = e,
          n = (0, l.useStateFromStores)([E.default], () =>
            E.default.isAuthenticated()
          ),
          m = (0, l.useStateFromStores)(
            [_.default],
            () => _.default.hasLoadedExperiments
          ),
          N = (0, c.useIsUnauthenticatedReportFormEnabled)(
            "RSL - Landing Page"
          ),
          [g, A] = a.useState(!1),
          [S, C] = a.useState(p.default.Messages.AUTHORIZING),
          [v, O] = a.useState(!0),
          R = e => {
            switch (e) {
              case h.AbortCodes.INVALID_FORM_BODY:
              case h.AbortCodes.DSA_RSL_REPORT_NOT_FOUND:
                C(p.default.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                break;
              case h.AbortCodes.DSA_RSL_ALREADY_REQUESTED:
                C(
                  p.default.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR
                );
                break;
              case h.AbortCodes.DSA_RSL_LIMITED_TIME:
                C(p.default.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                break;
              case h.AbortCodes.DSA_RSL_REPORT_INELIGIBLE:
                C(p.default.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                break;
              default:
                C(p.default.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR);
            }
          };
        return (
          a.useEffect(() => {
            n
              ? (O(!0),
                u
                  .fetchCurrentUser({ withAnalyticsToken: !0 })
                  .then(() => O(!1))
                  .catch(() => O(!1)))
              : O(!1);
          }, [n]),
          a.useEffect(() => {
            !m && !N && i.default.getExperiments();
          }, [m, N]),
          a.useEffect(() => {
            let e = async e => {
              var t, n;
              try {
                let n =
                  null != e ? await (0, d.submitReportSecondLook)(e) : void 0;
                null != n
                  ? C(p.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE)
                  : R(null === (t = n.body) || void 0 === t ? void 0 : t.code);
              } catch (e) {
                R(null === (n = e.body) || void 0 === n ? void 0 : n.code);
              } finally {
                A(!1);
              }
            };
            A(!0);
            let n = (0, o.default)(t);
            e(n), (0, f.trackAppUIViewed)("report_second_look");
          }, [t]),
          N &&
            !v &&
            (0, s.jsxs)(I.default, {
              children: [
                (0, s.jsx)(I.Title, {
                  className: T.marginBottom8,
                  children: S,
                }),
                g && (0, s.jsx)(r.Spinner, {}),
              ],
            })
        );
      };
    },
    152434: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("781738");
      var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("730290"),
        u = n("394846"),
        o = n("446674"),
        d = n("913144"),
        c = n("437822"),
        f = n("457108"),
        E = n("724038"),
        _ = n("24287"),
        I = n("970366"),
        h = n("271938"),
        p = n("124969"),
        T = n("659500"),
        m = n("49111"),
        N = n("782340"),
        g = n("890957");
      o.default.initialize();
      class A extends a.PureComponent {
        componentDidMount() {
          (0, I.trackAppUIViewed)("reset_password");
        }
        renderPasswordReset() {
          let { password: e, error: t, hasCancel: a } = this.state,
            l = this.isSubmitting(),
            r = null != t ? t : this.renderError("password");
          return (0, s.jsxs)(p.default, {
            onSubmit: this.handleSubmit,
            tag: "form",
            children: [
              (0, s.jsx)("img", {
                alt: "",
                src: null == r ? n("245288") : n("314837"),
                className: g.marginBottom20,
              }),
              (0, s.jsx)(p.Title, {
                children: N.default.Messages.RESET_PASSWORD_TITLE,
              }),
              (0, s.jsxs)(p.Block, {
                className: g.marginTop20,
                children: [
                  (0, s.jsx)(p.Input, {
                    label: N.default.Messages.FORM_LABEL_NEW_PASSWORD,
                    className: g.marginBottom20,
                    name: "password",
                    value: e,
                    onChange: e => this.setState({ password: e }),
                    error: r,
                    type: "password",
                  }),
                  (0, s.jsx)(p.Button, {
                    type: "submit",
                    submitting: l,
                    children: N.default.Messages.CHANGE_PASSWORD,
                  }),
                  a
                    ? (0, s.jsx)(p.Button, {
                        className: g.marginTop8,
                        onClick: this.handleGoToLogin,
                        submitting: l,
                        color: p.Button.Colors.PRIMARY,
                        children: N.default.Messages.CANCEL,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, s.jsx)(p.default, {
            style: { padding: 0 },
            children: (0, s.jsx)(_.MFASlides, {
              mfaFinish: e => {
                let { mfaType: t, data: n } = e;
                return this.handleTokenSubmitMFAv2(t, n);
              },
              request: e,
              onEarlyClose: () => {
                d.default.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderSucceeded() {
          return (0, s.jsxs)(p.default, {
            children: [
              (0, s.jsx)("img", {
                alt: "",
                src: n("245288"),
                className: r(g.marginBottom20, u.isMobile ? g.marginTop20 : ""),
              }),
              (0, s.jsx)(p.Title, {
                className: g.marginBottom40,
                children: N.default.Messages.RESET_PASSWORD_SUCCESS_TITLE,
              }),
              (0, s.jsx)(p.Button, {
                onClick: this.handleOpenApp,
                children: N.default.Messages.VERIFICATION_OPEN_DISCORD,
              }),
            ],
          });
        }
        render() {
          return this.state.success
            ? this.renderSucceeded()
            : null != this.props.mfaTicket && "" !== this.props.mfaTicket
              ? this.renderMFA()
              : this.renderPasswordReset();
        }
        constructor(e) {
          var t;
          super(e),
            (this.handleSubmit = async e => {
              let {
                  location: t,
                  onLoginSuccess: n,
                  source: s,
                  resetToken: a,
                } = this.props,
                { password: l, error: r } = this.state;
              if ((null != e && e.preventDefault(), 0 === l.length)) {
                this.setState({ error: N.default.Messages.PASSWORD_REQUIRED }),
                  T.ComponentDispatch.dispatch(
                    m.ComponentActions.WAVE_EMPHASIZE
                  );
                return;
              }
              null != r && this.setState({ error: null });
              let i = a;
              if ((null != t && (i = (0, f.default)(t)), null != i)) {
                this.setState({ working: !0 });
                try {
                  let {
                    result: e,
                    sms: t,
                    webauthn: a,
                    ticket: r,
                    token: u,
                    totp: o,
                    backup: f,
                  } = await c.default.resetPassword(i, l, s);
                  e === c.PasswordResetResult.MFA
                    ? d.default.dispatch({
                        type: "LOGIN_MFA_STEP",
                        ticket: r,
                        sms: t,
                        webauthn: a,
                        totp: o,
                        backup: f,
                      })
                    : null != n
                      ? n(u)
                      : (d.default.dispatch({
                          type: "LOGIN_SUCCESS",
                          token: u,
                        }),
                        this.handlePasswordChangeSuccess());
                } catch (e) {}
                this.setState({ working: !1 });
              }
            }),
            (this.handleTokenSubmitMFAv2 = (e, t) => {
              let {
                  location: n,
                  mfaTicket: s,
                  onLoginSuccess: a,
                  resetToken: l,
                  source: r,
                } = this.props,
                { password: i } = this.state;
              if (0 === i.length)
                return (
                  d.default.dispatch({ type: "LOGIN_RESET" }), Promise.reject()
                );
              let u = l;
              return (null != n && (u = (0, f.default)(n)), null == u)
                ? (d.default.dispatch({ type: "LOGIN_RESET" }),
                  Promise.reject())
                : c.default
                    .resetPasswordMFAv2({
                      method: e,
                      code: t,
                      ticket: s,
                      password: i,
                      token: u,
                      source: r,
                    })
                    .then(e => {
                      null != a
                        ? a(e)
                        : (d.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e,
                          }),
                          this.handlePasswordChangeSuccess());
                    });
            }),
            (this.handlePasswordChangeSuccess = () => {
              let { replaceWith: e } = this.props;
              if (u.isTablet || u.isMobile) {
                this.setState({ success: !0 });
                return;
              }
              e(m.Routes.APP);
            }),
            (this.handleGoToLogin = () => {
              let { transitionTo: e } = this.props;
              c.default.loginReset(), e(m.Routes.LOGIN);
            }),
            (this.isSubmitting = () => {
              let { loginStatus: e } = this.props,
                { working: t } = this.state;
              return t || e === m.LoginStates.LOGGING_IN_MFA;
            }),
            (this.handleOpenApp = () => {
              (0, E.default)("password_reset");
            }),
            (this.hasError = e =>
              null != this.props.errors[e] || null != this.state.error),
            (this.renderError = e => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let n = t[e];
                return Array.isArray(n) ? n[0] : n;
              }
              return null;
            });
          let n =
            (null === (t = this.props.location) || void 0 === t
              ? void 0
              : t.search) != null && "" !== this.props.location.search
              ? (0, i.parse)(this.props.location.search)
              : null;
          this.state = {
            method: "",
            password: "",
            code: "",
            error: null,
            hasCancel: null != n && null != n.from_login,
            working: !1,
            success: !1,
          };
        }
      }
      A.defaultProps = {
        transitionTo: e => n.g.location.assign(e),
        replaceWith: e => n.g.location.replace(e),
      };
      var S = function (e) {
        let t = (0, o.useStateFromStoresObject)([h.default], () => ({
          loginStatus: h.default.getLoginStatus(),
          mfaTicket: h.default.getMFATicket(),
          errors: h.default.getErrors(),
          mfaMethods: h.default.getMFAMethods(),
        }));
        return (0, s.jsx)(A, { ...e, ...t });
      };
    },
    404981: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("759843"),
        r = n("446674"),
        i = n("77078"),
        u = n("437822"),
        o = n("327037"),
        d = n("143618"),
        c = n("377114"),
        f = n("965153"),
        E = n("105029"),
        _ = n("271938"),
        I = n("760190"),
        h = n("124969"),
        p = n("701909"),
        T = n("49111"),
        m = n("782340"),
        N = n("43434"),
        g = n("890957");
      r.default.initialize();
      let A = e => {
        let { title: t, menuType: a } = e,
          r = () => {
            (0, i.openModalLazy)(async () => {
              let { default: e } = await n
                .el("650672")
                .then(n.bind(n, "650672"));
              return t =>
                (0, s.jsx)(e, {
                  ...t,
                  onSuccess: u,
                  headerText: m.default.Messages.ENTER_EMAIL,
                  confirmButtonText: m.default.Messages.NEXT,
                  confirmButtonColor: i.Button.Colors.BRAND_NEW,
                  impressionName: l.ImpressionNames.URF_ENTER_EMAIL,
                });
            });
          },
          u = e => {
            let t = async () => {
                await (0, f.sendUnauthenticatedReportPincode)(a, e);
              },
              r = async t => await (0, f.verifyUnauthenticatedReport)(a, e, t),
              u = e => {
                let t = null == e ? void 0 : e.token;
                a === d.UnauthenticatedReportNames.MESSAGE
                  ? (0, c.showUnauthenticatedReportModalForMessage)(t)
                  : a === d.UnauthenticatedReportNames.USER &&
                    (0, c.showUnauthenticatedReportModalForUser)(t);
              };
            t(),
              (0, i.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("644512")
                  .then(n.bind(n, "644512"));
                return n =>
                  (0, s.jsx)(e, {
                    ...n,
                    onFormSubmit: r,
                    onResend: t,
                    onSuccess: u,
                    headerText:
                      m.default.Messages
                        .MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
                    confirmButtonText: m.default.Messages.VERIFY,
                    confirmButtonColor: i.Button.Colors.BRAND_NEW,
                    impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE,
                  });
              });
          };
        return (0, s.jsx)("div", {
          className: N.buttonColumn,
          children: (0, s.jsx)(i.Button, {
            className: g.reportButton,
            fullWidth: !0,
            color: i.Button.Colors.BRAND_NEW,
            hover: i.Button.Colors.BRAND_NEW,
            onClick: () => r(),
            children: t,
          }),
        });
      };
      var S = () => {
        let e = (0, r.useStateFromStores)([_.default], () =>
            _.default.isAuthenticated()
          ),
          t = (0, r.useStateFromStores)(
            [I.default],
            () => I.default.hasLoadedExperiments
          ),
          n = (0, E.useIsUnauthenticatedReportFormEnabled)(
            "RSL - Landing Page"
          ),
          [l, c] = a.useState(!0);
        return (
          a.useEffect(() => {
            e
              ? (c(!0),
                o
                  .fetchCurrentUser({ withAnalyticsToken: !0 })
                  .then(() => c(!1))
                  .catch(() => c(!1)))
              : c(!1);
          }, [e]),
          a.useEffect(() => {
            let e = async () => {
              !t &&
                !n &&
                (await u.default.getLocationMetadata(),
                u.default.getExperiments());
            };
            e();
          }, [t, n]),
          l
            ? (0, s.jsx)(h.default, { children: (0, s.jsx)(i.Spinner, {}) })
            : n &&
              (0, s.jsxs)(h.default, {
                children: [
                  (0, s.jsx)(h.Title, {
                    className: g.marginBottom8,
                    children: m.default.Messages.URF_LANDING_PAGE_TITLE,
                  }),
                  (0, s.jsx)(h.SubTitle, {
                    className: g.marginBottom8,
                    children:
                      m.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                        supportURL: p.default.getArticleURL(
                          T.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY
                        ),
                      }),
                  }),
                  (0, s.jsxs)("div", {
                    className: N.container,
                    children: [
                      (0, s.jsx)(A, {
                        title:
                          m.default.Messages
                            .URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
                        menuType: d.UnauthenticatedReportNames.MESSAGE,
                      }),
                      (0, s.jsx)(A, {
                        title:
                          m.default.Messages
                            .URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
                        menuType: d.UnauthenticatedReportNames.USER,
                      }),
                    ],
                  }),
                ],
              })
        );
      };
    },
    726206: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("446674"),
        u = n("437822"),
        o = n("457108"),
        d = n("724038"),
        c = n("970366"),
        f = n("271938"),
        E = n("124969"),
        _ = n("599110"),
        I = n("49111"),
        h = n("782340"),
        p = n("180688"),
        T = n("890957");
      i.default.initialize();
      class m extends a.PureComponent {
        componentDidMount() {
          this.handleVerify(), (0, c.trackAppUIViewed)("verify_email");
        }
        renderVerifyFailed() {
          return (0, s.jsxs)(E.default, {
            children: [
              (0, s.jsx)(E.Image, {
                src: n("768025"),
                className: r(p.image, T.marginBottom20),
              }),
              (0, s.jsx)(E.Title, {
                className: T.marginBottom8,
                children: h.default.Messages.VERFICATION_EXPIRED,
              }),
              (0, s.jsx)(E.SubTitle, {
                className: T.marginBottom40,
                children:
                  h.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION,
              }),
              (0, s.jsx)(E.Button, {
                onClick: this.handleLogin,
                children: h.default.Messages._LOGIN,
              }),
            ],
          });
        }
        renderVerifySucceeded() {
          return (0, s.jsxs)(E.default, {
            children: [
              (0, s.jsx)(E.Image, {
                src: n("176872"),
                className: r(p.image, T.marginBottom20),
              }),
              (0, s.jsx)(E.Title, {
                className: T.marginBottom40,
                children: h.default.Messages.VERIFICATION_VERIFIED,
              }),
              (0, s.jsx)(E.Button, {
                onClick: this.handleOpenApp,
                children: h.default.Messages.VERIFICATION_OPEN_DISCORD,
              }),
            ],
          });
        }
        renderVerifying() {
          return (0, s.jsxs)(E.default, {
            children: [
              (0, s.jsx)(E.Image, {
                src: n("951536"),
                className: r(p.image, T.marginBottom20),
              }),
              (0, s.jsx)(E.Title, {
                className: T.marginBottom8,
                children: h.default.Messages.VERIFICATION_VERIFYING,
              }),
              (0, s.jsx)(E.SubTitle, {
                className: T.marginBottom40,
                children: h.default.Messages.ACTION_MAY_TAKE_A_MOMENT,
              }),
              (0, s.jsx)(E.Button, {
                submitting: !0,
                color: E.Button.Colors.PRIMARY,
              }),
            ],
          });
        }
        render() {
          let { verifyFailed: e, verifySucceeded: t } = this.props;
          return e
            ? this.renderVerifyFailed()
            : t
              ? this.renderVerifySucceeded()
              : this.renderVerifying();
        }
        constructor(...e) {
          super(...e),
            (this.handleVerify = () => {
              let e = (0, o.default)(this.props.location);
              null != e && u.default.verify(e);
            }),
            (this.handleLogin = () => {
              let { transitionTo: e } = this.props;
              e(I.Routes.LOGIN);
            }),
            (this.handleOpenApp = () => {
              let { verifyingUserId: e } = this.props;
              _.default.track(I.AnalyticEvents.VERIFY_ACCOUNT_APP_OPENED, {
                verifying_user_id: e,
              }),
                (0, d.default)("verify_email");
            });
        }
      }
      m.defaultProps = { transitionTo: e => n.g.location.assign(e) };
      var N = i.default.connectStores([f.default], () => ({
        verifyFailed: f.default.didVerifyFail(),
        verifyErrors: f.default.getVerifyErrors(),
        verifySucceeded: f.default.didVerifySucceed(),
        fingerprint: f.default.getFingerprint(),
        verifyingUserId: f.default.getVerifyingUserId(),
      }))(m);
    },
    68130: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("694187"),
        r = n("782340"),
        i = n("350335");
      function u(e) {
        let { icon: t, onChange: n } = e;
        return (0, s.jsx)(a.FocusRing, {
          within: !0,
          children: (0, s.jsxs)("div", {
            className: i.iconContainer,
            children: [
              null != t
                ? (0, s.jsx)("img", {
                    alt: "Your icon",
                    className: i.filledIcon,
                    src: t,
                  })
                : (0, s.jsxs)("svg", {
                    width: "80",
                    height: "80",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    children: [
                      (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M54.8694 2.85498C53.8065 2.4291 52.721 2.04752 51.6153 1.71253L51.3254 2.66957L51.0354 3.62661C51.9783 3.91227 52.9057 4.23362 53.8161 4.58911C54.1311 3.98753 54.4832 3.40847 54.8694 2.85498ZM75.4109 26.1839C76.0125 25.8689 76.5915 25.5168 77.145 25.1306C77.5709 26.1935 77.9525 27.279 78.2875 28.3847L77.3304 28.6746L76.3734 28.9646C76.0877 28.0217 75.7664 27.0943 75.4109 26.1839ZM78.8148 43.8253L79.8102 43.9222C79.9357 42.6318 80 41.3234 80 40C80 38.6766 79.9357 37.3682 79.8102 36.0778L78.8148 36.1747L77.8195 36.2715C77.9389 37.4977 78 38.7414 78 40C78 41.2586 77.9389 42.5023 77.8195 43.7285L78.8148 43.8253ZM43.8253 1.18515L43.9222 0.189853C42.6318 0.0642679 41.3234 0 40 0C38.6766 0 37.3682 0.064268 36.0778 0.189853L36.1747 1.18515L36.2715 2.18045C37.4977 2.06112 38.7414 2 40 2C41.2586 2 42.5023 2.06112 43.7285 2.18045L43.8253 1.18515ZM28.6746 2.66957L28.3847 1.71253C25.8549 2.47897 23.4312 3.48925 21.1408 4.71604L21.6129 5.59756L22.0851 6.47907C24.2606 5.3138 26.5624 4.35439 28.9646 3.62661L28.6746 2.66957ZM15.2587 9.85105L14.6239 9.0784C12.5996 10.7416 10.7416 12.5996 9.0784 14.6239L9.85105 15.2587L10.6237 15.8935C12.2042 13.9699 13.9699 12.2042 15.8935 10.6237L15.2587 9.85105ZM5.59756 21.6129L4.71604 21.1408C3.48925 23.4312 2.47897 25.8549 1.71253 28.3847L2.66957 28.6746L3.62661 28.9646C4.35439 26.5624 5.3138 24.2607 6.47907 22.0851L5.59756 21.6129ZM0 40C0 38.6766 0.0642679 37.3682 0.189853 36.0778L1.18515 36.1747L2.18045 36.2715C2.06112 37.4977 2 38.7414 2 40C2 41.2586 2.06112 42.5023 2.18045 43.7285L1.18515 43.8253L0.189853 43.9222C0.064268 42.6318 0 41.3234 0 40ZM2.66957 51.3254L1.71253 51.6153C2.47897 54.1451 3.48926 56.5688 4.71604 58.8592L5.59756 58.3871L6.47907 57.9149C5.3138 55.7394 4.35439 53.4376 3.62661 51.0354L2.66957 51.3254ZM9.85105 64.7413L9.0784 65.3761C10.7416 67.4004 12.5996 69.2584 14.6239 70.9216L15.2587 70.1489L15.8935 69.3763C13.9699 67.7958 12.2042 66.0301 10.6237 64.1065L9.85105 64.7413ZM21.6129 74.4024L21.1408 75.284C23.4312 76.5107 25.8549 77.521 28.3847 78.2875L28.6746 77.3304L28.9646 76.3734C26.5624 75.6456 24.2607 74.6862 22.0851 73.5209L21.6129 74.4024ZM36.1747 78.8148L36.0778 79.8102C37.3682 79.9357 38.6766 80 40 80C41.3234 80 42.6318 79.9357 43.9222 79.8102L43.8253 78.8148L43.7285 77.8195C42.5023 77.9389 41.2586 78 40 78C38.7414 78 37.4977 77.9389 36.2715 77.8195L36.1747 78.8148ZM51.3254 77.3304L51.6153 78.2875C54.1451 77.521 56.5688 76.5107 58.8592 75.284L58.3871 74.4024L57.9149 73.5209C55.7394 74.6862 53.4376 75.6456 51.0354 76.3734L51.3254 77.3304ZM64.7413 70.1489L65.3761 70.9216C67.4004 69.2584 69.2584 67.4004 70.9216 65.3761L70.1489 64.7413L69.3763 64.1065C67.7958 66.0301 66.0301 67.7958 64.1065 69.3763L64.7413 70.1489ZM74.4024 58.3871L75.284 58.8592C76.5107 56.5688 77.521 54.1451 78.2875 51.6153L77.3304 51.3254L76.3734 51.0354C75.6456 53.4375 74.6862 55.7393 73.5209 57.9149L74.4024 58.3871Z",
                        fill: "currentColor",
                      }),
                      (0, s.jsx)("circle", {
                        cx: "68",
                        cy: "12",
                        r: "12",
                        fill: "#5865f2",
                      }),
                      (0, s.jsx)("path", {
                        d: "M73.3332 11.4075H68.5924V6.66675H67.4072V11.4075H62.6665V12.5927H67.4072V17.3334H68.5924V12.5927H73.3332V11.4075Z",
                        fill: "white",
                      }),
                      (0, s.jsx)("path", {
                        d: "M40 29C37.794 29 36 30.794 36 33C36 35.207 37.794 37 40 37C42.206 37 44 35.207 44 33C44 30.795 42.206 29 40 29Z",
                        fill: "currentColor",
                      }),
                      (0, s.jsx)("path", {
                        d: "M48 26.001H46.07C45.402 26.001 44.777 25.667 44.406 25.111L43.594 23.891C43.223 23.335 42.598 23 41.93 23H38.07C37.402 23 36.777 23.335 36.406 23.89L35.594 25.11C35.223 25.667 34.598 26 33.93 26H32C30.895 26 30 26.896 30 28V39C30 40.104 30.895 41 32 41H48C49.104 41 50 40.104 50 39V28C50 26.897 49.104 26.001 48 26.001ZM40 39C36.691 39 34 36.309 34 33C34 29.692 36.691 27 40 27C43.309 27 46 29.692 46 33C46 36.31 43.309 39 40 39Z",
                        fill: "currentColor",
                      }),
                      (0, s.jsx)("path", {
                        d: "M24.6097 52.712V47.72H22.5457V52.736C22.5457 53.792 22.0777 54.404 21.1417 54.404C20.2177 54.404 19.7377 53.78 19.7377 52.712V47.72H17.6737V52.724C17.6737 55.04 19.0897 56.132 21.1177 56.132C23.1217 56.132 24.6097 55.016 24.6097 52.712ZM26.0314 56H28.0834V53.252H28.6114C30.6154 53.252 31.9474 52.292 31.9474 50.42C31.9474 48.62 30.7114 47.72 28.6954 47.72H26.0314V56ZM29.9554 50.456C29.9554 51.308 29.4514 51.704 28.5394 51.704H28.0594V49.268H28.5754C29.4874 49.268 29.9554 49.664 29.9554 50.456ZM37.8292 56L37.5532 54.224H35.0092V47.72H32.9572V56H37.8292ZM45.9558 51.848C45.9558 49.292 44.4078 47.564 42.0078 47.564C39.6078 47.564 38.0478 49.304 38.0478 51.872C38.0478 54.428 39.6078 56.156 41.9838 56.156C44.3958 56.156 45.9558 54.404 45.9558 51.848ZM43.8918 51.86C43.8918 53.504 43.1958 54.548 41.9958 54.548C40.8078 54.548 40.0998 53.504 40.0998 51.86C40.0998 50.216 40.8078 49.172 41.9958 49.172C43.1958 49.172 43.8918 50.216 43.8918 51.86ZM52.2916 56.084L54.3676 55.748L51.4876 47.684H49.2316L46.2556 56H48.2716L48.8236 54.284H51.6916L52.2916 56.084ZM50.2516 49.796L51.1756 52.676H49.3156L50.2516 49.796ZM62.5174 51.848C62.5174 49.388 61.0174 47.72 58.1374 47.72H55.2814V56H58.1854C60.9814 56 62.5174 54.308 62.5174 51.848ZM60.4534 51.86C60.4534 53.636 59.5414 54.404 58.0774 54.404H57.3334V49.316H58.0774C59.4814 49.316 60.4534 50.12 60.4534 51.86Z",
                        fill: "currentColor",
                      }),
                    ],
                  }),
              (0, s.jsx)(l.default, {
                onChange: n,
                multiple: !1,
                tabIndex: 0,
                "aria-label":
                  r.default.Messages.GUILD_CREATE_UPLOAD_ICON_BUTTON_TEXT,
              }),
            ],
          }),
        });
      }
    },
    106885: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateAuthInvite: function () {
            return a;
          },
        });
      var s = n("913144");
      function a(e) {
        s.default.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
      }
    },
    209535: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRedirectPath: function () {
            return u;
          },
          default: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("803182"),
        l = n("447669"),
        r = n("49111"),
        i = n("492397");
      function u() {
        let e = location.pathname + location.search,
          t = i.CONFERENCE_MODE_ENABLED
            ? r.Routes.REGISTER
            : (0, l.getLoginPath)(e, !1);
        return t;
      }
      var o = function () {
        return (0, s.jsx)(a.Redirect, { to: u() });
      };
    },
    457108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n("730290");
      function a(e) {
        let t = null != e.hash && "" !== e.hash ? (0, s.parse)(e.hash) : null;
        if ((null == t ? void 0 : t.token) != null) return t.token;
        let n =
          null != e.search && "" !== e.search ? (0, s.parse)(e.search) : null;
        return (null == n ? void 0 : n.token) != null ? n.token : null;
      }
    },
    178116: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("730290"),
        r = n("446674"),
        i = n("872717"),
        u = n("970366"),
        o = n("813006"),
        d = n("476108"),
        c = n("124969"),
        f = n("457108"),
        E = n("49111"),
        _ = n("782340"),
        I = n("890957");
      r.default.initialize();
      class h extends a.PureComponent {
        componentDidMount() {
          let e = (0, f.default)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
          i.HTTP.post({
            url: E.Endpoints.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
          }).then(
            e => {
              let {
                  body: { guild: t },
                } = e,
                n = new o.default(t);
              this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 })
          ),
            (0, u.trackAppUIViewed)("disable_server_highlight_notifications");
        }
        renderBusy() {
          return (0, s.jsx)(c.default, {
            children: (0, s.jsx)(c.AuthSpinner, {}),
          });
        }
        renderSuccess() {
          let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
          return (0, s.jsxs)(c.default, {
            children: [
              (0, s.jsx)(c.Title, {
                className: I.marginBottom8,
                children:
                  _.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER,
              }),
              (0, s.jsx)(c.SubTitle, {
                children:
                  _.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
                    guildName: n.name,
                  }),
              }),
              (0, s.jsx)(c.Button, {
                className: I.marginTop40,
                onClick: () => t(e),
                children: _.default.Messages.CONTINUE_TO_WEBAPP,
              }),
              (0, s.jsx)(c.Button, {
                className: I.marginTop8,
                color: c.Button.Colors.LINK,
                look: c.Button.Looks.LINK,
                onClick: () => {
                  t(E.Routes.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                },
                children: _.default.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS,
              }),
            ],
          });
        }
        renderError() {
          let { defaultRoute: e, transitionTo: t } = this.props;
          return (0, s.jsxs)(c.default, {
            children: [
              (0, s.jsx)(c.Image, {
                src: n("2862"),
                className: I.marginBottom20,
              }),
              (0, s.jsx)(c.Title, {
                className: I.marginBottom8,
                children:
                  _.default.Messages
                    .AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER,
              }),
              (0, s.jsx)(c.SubTitle, {
                children:
                  _.default.Messages
                    .AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY,
              }),
              (0, s.jsx)(c.Button, {
                className: I.marginTop40,
                onClick: () => t(e),
                children: _.default.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        render() {
          let { busy: e, success: t } = this.state;
          return e
            ? this.renderBusy()
            : t
              ? this.renderSuccess()
              : this.renderError();
        }
        constructor(...e) {
          super(...e), (this.state = { busy: !0, success: !1, guild: null });
        }
      }
      h.defaultProps = { transitionTo: e => n.g.location.assign(e) };
      var p = r.default.connectStores([d.default], () => ({
        defaultRoute: d.default.defaultRoute,
      }))(h);
    },
    759315: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("446674"),
        u = n("878720"),
        o = n("345327"),
        d = n("25033"),
        c = n("589252"),
        f = n("124969"),
        E = n("578706"),
        _ = n("482931"),
        I = n("782340"),
        h = n("125047"),
        p = n("890957"),
        T = () => {
          let [e, t] = a.useState(""),
            [l, T] = a.useState(""),
            [m, N] = a.useState(!1),
            [g, A] = a.useState(!1),
            [S, C] = a.useState(null),
            [v, O] = a.useState(null),
            R = (0, i.useStateFromStores)([d.default], () =>
              d.default.getCountryCode()
            ),
            L = R.code.split(" ")[0],
            x = async () => {
              try {
                await u.default.resendCode(e);
              } catch (e) {
                O(e.body.message);
              }
            },
            M = async () => {
              N(!0);
              try {
                let { token: t } = await u.default.verifyPhone(L + e, l);
                C(null), O(null), A(!0), u.default.validatePhoneForSupport(t);
              } catch (e) {
                e.body.message
                  ? (C(null), O(e.body.message))
                  : (C(e.body.phone), O(e.body.code));
              } finally {
                N(!1);
              }
            },
            D = (0, s.jsxs)(f.default, {
              children: [
                (0, s.jsx)(f.Image, { src: n("229483") }),
                (0, s.jsxs)(f.Title, {
                  className: r(
                    p.marginTop20,
                    h.flex,
                    h.justifyCenter,
                    h.alignCenter
                  ),
                  children: [
                    I.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED,
                    (0, s.jsx)(E.default, { className: p.marginLeft8 }),
                  ],
                }),
              ],
            });
          return g
            ? D
            : (0, s.jsxs)(f.default, {
                children: [
                  (0, s.jsx)(f.Title, {
                    children: I.default.Messages.ENTER_CODE,
                  }),
                  (0, s.jsx)(f.SubTitle, {
                    className: p.marginTop8,
                    children: I.default.Messages.VERIFY_PHONE_FOR_SUPPORT,
                  }),
                  (0, s.jsxs)(f.Block, {
                    className: p.marginTop20,
                    children: [
                      (0, s.jsx)(c.default, {
                        label: I.default.Messages.FORM_LABEL_PHONE_NUMBER,
                        alpha2: R.alpha2,
                        countryCode: L,
                        value: e,
                        autoComplete: "off",
                        spellCheck: "false",
                        onChange: t,
                        forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
                        error: S,
                      }),
                      (0, s.jsx)(f.Input, {
                        className: p.marginTop20,
                        label: I.default.Messages.CONFIRMATION_CODE,
                        value: l,
                        onChange: T,
                        maxLength: _.PHONE_VERIFICATION_CODE_NUM_DIGITS,
                        error: v,
                      }),
                      (0, s.jsx)(f.Button, {
                        size: f.Button.Sizes.SMALL,
                        look: f.Button.Looks.LINK,
                        onClick: x,
                        children: I.default.Messages.RESEND_CODE,
                      }),
                      (0, s.jsx)(f.Button, {
                        className: p.marginTop20,
                        onClick: M,
                        submitting: m,
                        children: I.default.Messages.DONE,
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    843962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelIconURL: function () {
            return i;
          },
        }),
        n("222007");
      var s = n("697218"),
        a = n("315102"),
        l = n("449008"),
        r = n("49111");
      function i(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
          case r.ChannelTypes.DM:
            let [i] = e.recipients
              .map(s.default.getUser)
              .filter(l.isNotNullish);
            if (null == i) return null;
            return i.getAvatarURL(void 0, t, n);
          case r.ChannelTypes.GROUP_DM:
            return a.default.getChannelIconURL({
              id: e.id,
              icon: e.icon,
              applicationId: e.getApplicationId(),
              size: t,
            });
        }
      }
    },
    208620: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var s = n("446674"),
        a = n("913144"),
        l = n("49111");
      let r = {};
      class i extends s.default.Store {
        getState(e) {
          return r[e];
        }
      }
      i.displayName = "CodedLinkNativeAppStateStore";
      var u = new i(a.default, {
        NATIVE_APP_MODAL_OPENING: function (e) {
          let { code: t } = e;
          r[t] = l.NativeAppStates.OPENING;
        },
        NATIVE_APP_MODAL_OPENED: function (e) {
          let { code: t } = e;
          r[t] = l.NativeAppStates.OPEN;
        },
        NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
          let { code: t } = e;
          r[t] = l.NativeAppStates.OPEN_FAIL;
        },
      });
    },
    586403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        l = n("77078"),
        r = n("1339"),
        i = n("914169"),
        u = n("931874"),
        o = n("745049"),
        d = n("409295");
      function c(e) {
        let { guildScheduledEvent: t, channel: n, onClose: c } = e,
          f = t.entity_type === o.GuildScheduledEventEntityTypes.EXTERNAL,
          E = a.useCallback(
            e => (0, i.createEventLocationClickHandler)(t, c)(e),
            [t, c]
          ),
          _ = (0, u.getLocationDataForEvent)(t, n);
        if (null == _) return null;
        let { IconComponent: I, locationName: h } = _,
          p = (0, s.jsxs)(s.Fragment, {
            children: [
              null != I &&
                (0, s.jsx)(I, {
                  width: 20,
                  height: 20,
                  className: d.channelIcon,
                }),
              (0, s.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, r.guildEventDetailsParser)(h, !0),
              }),
            ],
          });
        return (0, s.jsx)("div", {
          className: d.row,
          children:
            null != E
              ? (0, s.jsx)(l.Clickable, {
                  className: f ? d.externalLocation : d.channelLocation,
                  onClick: E,
                  children: p,
                })
              : p,
        });
      }
    },
    767517: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("872717"),
        a = n("913144"),
        l = n("619443"),
        r = n("239380"),
        i = n("305961"),
        u = n("49111"),
        o = {
          acceptGuildTemplate: (e, t, n) => (
            a.default.dispatch({ type: "GUILD_TEMPLATE_ACCEPT", code: e }),
            new Promise((o, d) => {
              s.HTTP.post({
                url: u.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                body: { name: t, icon: n },
                oldFormErrors: !0,
              }).then(
                t => {
                  let n = t.body;
                  a.default.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                    code: e,
                    guild: n,
                  }),
                    l.default.isConnected()
                      ? i.default.addConditionalChangeListener(() => {
                          if (null != i.default.getGuild(n.id))
                            return (0, r.transitionToGuild)(n.id), o(n), !1;
                        })
                      : ((0, r.transitionToGuild)(n.id), o(n));
                },
                t => {
                  a.default.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                    code: e,
                  }),
                    d(t.body);
                }
              );
            })
          ),
        };
    },
    932180: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("424973");
      var s = n("884691"),
        a = n("599110"),
        l = n("579033"),
        r = n("49111");
      function i(e) {
        let t = s.useRef([]);
        s.useEffect(() => {
          if (null != e && e.state !== l.GuildTemplateStates.RESOLVING)
            !t.current.includes(e.code) &&
              (t.current.push(e.code),
              a.default.track(r.AnalyticEvents.CREATE_GUILD_VIEWED, {
                guild_template_code: e.code,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
              }));
        });
      }
    },
    800932: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("917351"),
        u = n.n(i),
        o = n("509043"),
        d = n("669491"),
        c = n("77078"),
        f = n("437822"),
        E = n("327037"),
        _ = n("68130"),
        I = n("697218"),
        h = n("461380"),
        p = n("593195"),
        T = n("368121"),
        m = n("767517"),
        N = n("5487"),
        g = n("932180"),
        A = n("473759"),
        S = n("49111"),
        C = n("782340"),
        v = n("828999");
      function O(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          [n, l] = a.useState(""),
          [r, i] = a.useState(null),
          [u, o] = a.useState(null),
          d = (0, N.default)(e.code);
        a.useEffect(() => {
          (async function e() {
            let e = I.default.getCurrentUser();
            if (null == e)
              try {
                e = await (0, E.fetchCurrentUser)();
              } catch (e) {
                f.default.verifySSOToken(null);
              }
            null != e && l(d.defaultName.format({ username: e.username }));
          })();
        }, [d.defaultName]);
        (0, g.default)(e);
        let h = (0, s.jsxs)(s.Fragment, {
            children: [
              t ? (0, s.jsx)(A.default, { guildTemplate: e }) : null,
              (0, s.jsx)("div", {
                className: v.icon,
                children: (0, s.jsx)(_.default, { icon: r, onChange: i }),
              }),
              (0, s.jsx)(c.FormItem, {
                title: d.nameLabel,
                children: (0, s.jsx)(c.TextInput, {
                  type: "text",
                  value: n,
                  maxLength: 100,
                  onChange: l,
                  error: null == u ? void 0 : u.name,
                }),
              }),
              (0, s.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: v.guidelines,
                children: d.terms.format({
                  guidelinesURL: S.MarketingURLs.GUIDELINES,
                }),
              }),
            ],
          }),
          p = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name),
          T = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", { className: v.divider }),
              (0, s.jsxs)(c.FormItem, {
                className: v.previewSection,
                title: C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                children: [
                  (0, s.jsx)(R, { channels: e.serializedSourceGuild.channels }),
                  (0, s.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: v.protip,
                    children: [
                      (0, s.jsxs)("span", {
                        className: v.protipText,
                        children: [
                          C.default.Messages.FORM_LABEL_ROLES_PRO_TIP,
                          ":",
                        ],
                      }),
                      " ",
                      C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP,
                    ],
                  }),
                ],
              }),
              p.length > 0
                ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(c.FormItem, {
                      className: v.previewSection,
                      title:
                        C.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                      children: (0, s.jsx)(L, { roles: p }),
                    }),
                  })
                : null,
            ],
          });
        return {
          form: h,
          preview: T,
          handleSubmit: () =>
            m.default.acceptGuildTemplate(e.code, n, r).catch(e => o(e)),
        };
      }
      function R(e) {
        let { channels: t } = e,
          n = u(t)
            .sortBy(e =>
              null == e.parent_id
                ? 1e4 * Number(e.id)
                : 1e4 * Number(e.parent_id) + e.id
            )
            .map(e => {
              let t = (function (e) {
                let { type: t } = e;
                return t === S.ChannelTypes.GUILD_VOICE
                  ? T.default
                  : t === S.ChannelTypes.GUILD_CATEGORY
                    ? h.default
                    : p.default;
              })(e);
              return (0, s.jsxs)(
                "div",
                {
                  className: r(v.channel, {
                    [v.category]: e.type === S.ChannelTypes.GUILD_CATEGORY,
                  }),
                  children: [
                    (0, s.jsx)(t, { className: v.channelIcon }),
                    (0, s.jsx)(c.Text, {
                      className: v.channelText,
                      variant: "text-sm/normal",
                      children: e.name,
                    }),
                  ],
                },
                e.id
              );
            })
            .value();
        return (0, s.jsx)("div", { className: v.channelsWrapper, children: n });
      }
      n("721247");
      function L(e) {
        let { roles: t } = e,
          n = t
            .slice()
            .reverse()
            .map(e => (0, s.jsx)(x, { role: e }, e.id));
        return (0, s.jsx)("ul", { className: v.rolesWrapper, children: n });
      }
      function x(e) {
        var t;
        let { role: n } = e,
          a =
            null == n.color
              ? d.default.unsafe_rawColors.PRIMARY_300.css
              : (0, o.int2hex)(n.color);
        return (0, s.jsxs)("li", {
          className: v.role,
          style: {
            borderColor:
              null !== (t = (0, o.hex2rgb)(a, 0.6)) && void 0 !== t
                ? t
                : void 0,
          },
          children: [
            (0, s.jsx)(c.RoleCircle, { className: v.roleCircle, color: a }),
            (0, s.jsx)("div", { className: v.roleName, children: n.name }),
          ],
        });
      }
    },
    913645: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var s = n("742270"),
        a = n("815157"),
        l = n("391679"),
        r = n("523086"),
        i = n("599110"),
        u = n("65300"),
        o = n("883069"),
        d = n("49111");
      let c = "template";
      var f = {
        ...o.default,
        openNativeAppModal(e) {
          r.default.openNativeAppModal(e, d.RPCCommands.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
          if (
            null != platform.ua &&
            platform.ua.toLowerCase().indexOf("googlebot") > -1
          )
            return;
          let n =
              null != e
                ? (0, s.getGuildTemplateDynamicLinkTemplate)(e)
                : (0, s.getDefaultDynamicLinkTemplate)(),
            r = (0, a.generateAttemptId)(),
            o = (0, a.default)(n, {
              utmSource: c,
              fingerprint: t,
              attemptId: r,
            });
          i.default.track(d.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.maybeExtractId)(t),
            attempt_id: r,
            source: c,
            guild_template_code: e,
          }),
            u.default.launch(o, () => {});
        },
      };
    },
    893552: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("446674"),
        a = n("913144");
      let l = !1,
        r = null,
        i = null;
      class u extends s.default.Store {
        getState() {
          return { verifySuccess: l, verifyErrors: r, redirectGuildId: i };
        }
      }
      u.displayName = "HubEmailVerificationStore";
      var o = new u(a.default, {
        HUB_VERIFY_EMAIL_SUCCESS: function (e) {
          let { guildId: t } = e;
          (l = !0), (r = null), (i = t);
        },
        HUB_VERIFY_EMAIL_FAILURE: function (e) {
          let { errors: t } = e;
          (l = !1), (r = t);
        },
      });
    },
    810621: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var s = n("627445"),
        a = n.n(s),
        l = n("597755"),
        r = n.n(l),
        i = n("742270"),
        u = n("815157"),
        o = n("391679"),
        d = n("393414"),
        c = n("271938"),
        f = n("476108"),
        E = n("599110"),
        _ = n("65300"),
        I = n("49111");
      function h(e) {
        let t = (function (e) {
            var t;
            let n = null === (t = r.os) || void 0 === t ? void 0 : t.family;
            if ("Android" === n || "iOS" === n) {
              let t = c.default.getFingerprint(),
                n = (0, u.generateAttemptId)();
              return (
                a(null != e, "generateAppPath: guildId cannot be null"),
                (0, u.default)((0, i.getInviteDynamicLinkTemplate)(e), {
                  utmSource: "verify_hub_email",
                  fingerprint: t,
                  attemptId: n,
                })
              );
            }
            return "discord://";
          })(e),
          n = (0, u.parseDynamicLink)(t);
        null != n &&
          E.default.track(I.AnalyticEvents.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.maybeExtractId)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          _.default.launch(t, e => {
            !e && (0, d.replaceWith)(f.default.fallbackRoute);
          });
      }
    },
    777858: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        r = n("142833"),
        i = n("457108"),
        u = n("393414"),
        o = n("970366"),
        d = n("124969"),
        c = n("893552"),
        f = n("810621"),
        E = n("49111"),
        _ = n("782340"),
        I = n("425589");
      function h(e) {
        let { location: t } = e,
          [h, p] = a.useState(!1),
          {
            verifySuccess: T,
            verifyErrors: m,
            redirectGuildId: N,
          } = (0, l.useStateFromStores)([c.default], () =>
            c.default.getState()
          );
        a.useEffect(() => {
          let e = (0, i.default)(t);
          r.default.verify(e), (0, o.trackAppUIViewed)("verify_hub_email");
        }, [t]);
        let g = () => {
          (0, f.default)(N), p(!0);
        };
        return h
          ? (0, s.jsxs)(d.default, {
              children: [
                (0, s.jsx)(d.Title, {
                  className: I.title,
                  children: _.default.Messages.APP_OPENED_TITLE,
                }),
                (0, s.jsx)(d.SubTitle, {
                  className: I.subtitle,
                  children: _.default.Messages.APP_OPENED_BODY,
                }),
                (0, s.jsx)(d.Button, {
                  className: I.spacedButton,
                  onClick: () => (0, u.transitionTo)(E.Routes.CHANNEL(N)),
                  children: _.default.Messages.CONTINUE_TO_WEBAPP,
                }),
              ],
            })
          : T
            ? (0, s.jsxs)(d.default, {
                children: [
                  (0, s.jsx)(d.Image, { className: I.image, src: n("176872") }),
                  (0, s.jsx)(d.Title, {
                    className: I.title,
                    children: _.default.Messages.VERIFICATION_VERIFIED,
                  }),
                  (0, s.jsx)(d.Button, {
                    onClick: g,
                    children: _.default.Messages.VERIFICATION_OPEN_DISCORD,
                  }),
                ],
              })
            : null != m
              ? (0, s.jsxs)(d.default, {
                  children: [
                    (0, s.jsx)(d.Image, {
                      className: I.image,
                      src: n("768025"),
                    }),
                    (0, s.jsx)(d.Title, {
                      className: I.title,
                      children: _.default.Messages.VERFICATION_EXPIRED,
                    }),
                    (0, s.jsx)(d.SubTitle, {
                      className: I.subtitle,
                      children:
                        _.default.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION,
                    }),
                    (0, s.jsx)(d.Button, {
                      onClick: g,
                      children: _.default.Messages.VERIFICATION_OPEN_DISCORD,
                    }),
                  ],
                })
              : (0, s.jsxs)(d.default, {
                  children: [
                    (0, s.jsx)(d.Image, {
                      className: I.image,
                      src: n("951536"),
                    }),
                    (0, s.jsx)(d.Title, {
                      className: I.title,
                      children: _.default.Messages.VERIFICATION_VERIFYING,
                    }),
                    (0, s.jsx)(d.SubTitle, {
                      className: I.subtitle,
                      children: _.default.Messages.ACTION_MAY_TAKE_A_MOMENT,
                    }),
                    (0, s.jsx)(d.Button, {
                      submitting: !0,
                      color: d.Button.Colors.PRIMARY,
                    }),
                  ],
                });
      }
      l.default.initialize();
    },
    105029: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsUnauthenticatedReportFormEnabled: function () {
            return l;
          },
        });
      var s = n("862205");
      let a = (0, s.createExperiment)({
        kind: "user",
        id: "2023-09_iar_dsa_webform",
        label: "Safety Experience Unauthenticated Report Form",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "EU user", config: { enabled: !0 } },
          { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
        ],
      });
      function l(e) {
        return a.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    800118: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LARGE_SERVER_MEMBER_THRESHOLD: function () {
            return m;
          },
          isGroupInvite: function () {
            return A;
          },
          isDirectInvite: function () {
            return S;
          },
          isEnhancedCommunityInvite: function () {
            return O;
          },
          InviteDestinationIcon: function () {
            return L;
          },
          InviteMemberCounts: function () {
            return x;
          },
          InviteJoinContext: function () {
            return M;
          },
          InviteHeader: function () {
            return D;
          },
        }),
        n("70102");
      var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("77078"),
        u = n("953109"),
        o = n("580357"),
        d = n("124969"),
        c = n("258078"),
        f = n("315102"),
        E = n("158998"),
        _ = n("91366"),
        I = n("49111"),
        h = n("238055"),
        p = n("782340"),
        T = n("573905");
      let m = 100,
        N = e => {
          var t, n;
          let s = {
            onlineCount:
              null !== (t = e.approximate_presence_count) && void 0 !== t
                ? t
                : 0,
            memberCount:
              null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0,
          };
          return 0 === s.memberCount && 0 === s.memberCount ? null : s;
        },
        g = e =>
          e.target_type === _.InviteTargetTypes.STREAM && null != e.target_user,
        A = e => {
          var t;
          return (
            (null === (t = e.channel) || void 0 === t ? void 0 : t.type) ===
            I.ChannelTypes.GROUP_DM
          );
        },
        S = e => null == e.channel && null == e.guild && null != e.inviter,
        C = e => {
          var t;
          let n = N(e);
          return (
            (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t
              ? t
              : 0) > m
          );
        },
        v = e => e.state === I.InviteStates.ACCEPTED,
        O = e => {
          let { guild_scheduled_event: t } = e;
          return null != t || !1;
        },
        R = e => !O(e) && (!!S(e) || (null != e.inviter && !v(e) && !C(e))),
        L = e => {
          let { guild: t, user: n, application: a } = e;
          if (null != a)
            return (0, s.jsx)(u.default, {
              className: T.appIcon,
              game: a,
              size: T.appIconSize,
            });
          if (null != n)
            return (0, s.jsx)(d.Avatar, {
              src: n.getAvatarURL(void 0, 100),
              size: i.AvatarSizes.DEPRECATED_SIZE_100,
              className: T.avatar,
            });
          if (null != t)
            return (0, s.jsx)(d.GuildIcon, {
              guild: t,
              size: d.GuildIcon.Sizes.LARGER,
              className: T.guildIcon,
              animate: !0,
            });
          else return null;
        };
      function x(e) {
        var t;
        let { invite: n, textClassName: a, className: l } = e,
          i = N(n);
        return null == i ||
          R(n) ||
          (null == n
            ? void 0
            : null === (t = n.guild) || void 0 === t
              ? void 0
              : t.id) === h.INVITE_ROUTING_HUB_GUILD_ID
          ? null
          : (0, s.jsx)(d.ActivityCount, {
              className: r(T.activityCount, l),
              online: i.onlineCount,
              total: i.memberCount,
              textClassName: a,
              flat: !0,
            });
      }
      function M(e) {
        let { invite: t, showBigUserIcon: n } = e,
          l = a.useMemo(
            () =>
              n
                ? null
                : g(t) && null != t.target_user
                  ? f.default.getUserAvatarURL(t.target_user)
                  : R(t) && null != t.inviter
                    ? f.default.getUserAvatarURL(t.inviter)
                    : null,
            [t, n]
          ),
          r = p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
        if (A(t)) {
          var u, o;
          r =
            (null === (u = t.channel) || void 0 === u ? void 0 : u.name) !=
              null &&
            (null === (o = t.inviter) || void 0 === o ? void 0 : o.username) !=
              null
              ? p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format(
                  { username: t.inviter.username }
                )
              : p.default.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;
        } else
          g(t) && null != t.target_user
            ? (r = p.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: t.target_user.username,
              }))
            : v(t)
              ? (r =
                  p.default.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF)
              : R(t) &&
                null != t.inviter &&
                (r =
                  p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format(
                    { username: E.default.getFormattedName(t.inviter) }
                  ));
        return (0, s.jsxs)("div", {
          className: T.inviteJoinContainer,
          children: [
            null != l &&
              (0, s.jsx)("div", {
                className: T.inviterIconWrapper,
                children: (0, s.jsx)(d.Avatar, {
                  src: l,
                  size: i.AvatarSizes.SIZE_24,
                }),
              }),
            (0, s.jsx)(d.SubTitle, {
              className: T.inviteJoinSubTitle,
              children: r,
            }),
          ],
        });
      }
      function D(e) {
        let t,
          n,
          a,
          {
            user: l,
            guild: r,
            channel: u,
            application: f,
            showBigUserIcon: _,
          } = e;
        if (null != r)
          _ &&
            null == f &&
            (t = (0, s.jsx)(d.GuildIcon, {
              guild: r,
              size: d.GuildIcon.Sizes.SMALL,
            })),
            (n = r.name),
            null != f &&
              ((n = f.name),
              (a = (0, s.jsxs)("div", {
                className: T.inviteJoinContainer,
                children: [
                  (0, s.jsx)(d.SubTitle, {
                    className: T.appIn,
                    children: p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, s.jsxs)("div", {
                    className: T.guildContainer,
                    children: [
                      (0, s.jsx)(d.GuildIcon, {
                        guild: r,
                        size: d.GuildIcon.Sizes.SMALL,
                      }),
                      (0, s.jsx)(c.default, {
                        className: T.appGuildName,
                        color: c.default.Colors.CUSTOM,
                        tag: "span",
                        size: c.default.Sizes.SIZE_24,
                        children: r.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != u) {
          if (null == l) throw Error("no inviter in group DM invite");
          let e = E.default.getFormattedName(l);
          null != u.name && "" !== u.name
            ? ((n = u.name),
              null != u.icon &&
                (t = (0, s.jsx)(d.ChannelIcon, {
                  channel: u,
                  size: i.AvatarSizes.SIZE_32,
                })))
            : (n = e);
        } else if (null != l) {
          let e = E.default.getFormattedName(l);
          (n =
            p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
              { username: e }
            )),
            (a = (0, s.jsx)(d.SubTitle, {
              className: T.directInviteSubTitle,
              children:
                p.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format(
                  { username: e }
                ),
            }));
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(d.Title, {
              className: T.title,
              children: [
                null != r
                  ? (0, s.jsx)(o.default, {
                      guild: r,
                      className: T.guildBadge,
                      tooltipPosition: "left",
                    })
                  : null,
                t,
                n,
              ],
            }),
            a,
          ],
        });
      }
    },
    243961: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("653047"),
        r = n("233069"),
        i = n("813006"),
        u = n("766274"),
        o = n("800118"),
        d = n("570683"),
        c = n("49111"),
        f = n("782340"),
        E = n("182092");
      let _ = e => {
        let { state: t } = e;
        switch (t) {
          case c.InviteStates.ACCEPTING:
          case c.InviteStates.APP_OPENING:
            return !0;
          default:
            return !1;
        }
      };
      function I(e) {
        let { invite: t, onAcceptInvite: n, disableUser: I = !1 } = e;
        if (null == t) return null;
        let h = null != t.guild ? new i.default(t.guild) : null,
          p =
            null != t.channel
              ? (0, r.createChannelRecordFromInvite)(t.channel)
              : null,
          T =
            null != t.target_application
              ? new l.default(t.target_application)
              : null,
          m = I || null == t.inviter ? null : new u.default(t.inviter),
          N =
            (null != t.approximate_member_count &&
              t.approximate_member_count > o.LARGE_SERVER_MEMBER_THRESHOLD) ||
            (null != h && h.hasFeature(c.GuildFeatures.COMMUNITY)),
          g = !N && null != m && (0, o.isGroupInvite)(t),
          A = _(t),
          S = { invite: t, user: m, guild: h, channel: p, application: T };
        return (0, o.isEnhancedCommunityInvite)(t)
          ? (0, s.jsx)(d.default, {
              invite: t,
              channel: p,
              isSubmitting: A,
              onAcceptInvite: n,
            })
          : (0, s.jsxs)("div", {
              className: E.container,
              children: [
                (0, s.jsx)(o.InviteDestinationIcon, {
                  application: T,
                  guild: h,
                  user: g || (0, o.isDirectInvite)(t) ? m : null,
                }),
                (0, o.isDirectInvite)(t)
                  ? null
                  : (0, s.jsx)(o.InviteJoinContext, {
                      ...S,
                      showBigUserIcon: g,
                    }),
                (0, s.jsx)(o.InviteHeader, { ...S, showBigUserIcon: g }),
                (0, s.jsx)(o.InviteMemberCounts, { ...S }),
                (0, s.jsx)(a.Button, {
                  onClick: n,
                  submitting: A,
                  className: E.acceptButton,
                  children: f.default.Messages.INSTANT_INVITE_ACCEPT,
                }),
              ],
            });
      }
    },
    701662: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n("222007");
      var s,
        a,
        l = n("37983"),
        r = n("884691"),
        i = n("146606"),
        u = n("446674"),
        o = n("77078"),
        d = n("970728"),
        c = n("724853"),
        f = n("731898"),
        E = n("970366"),
        _ = n("271938"),
        I = n("337543"),
        h = n("124969"),
        p = n("599110"),
        T = n("315102"),
        m = n("449008"),
        N = n("9294"),
        g = n("800118"),
        A = n("243961"),
        S = n("570683"),
        C = n("49111"),
        v = n("782340"),
        O = n("46121");
      function R() {
        return (0, l.jsx)("div", {
          className: O.centerFlex,
          children: (0, l.jsx)(o.Spinner, {}),
        });
      }
      ((a = s || (s = {}))[(a.LOADING = 0)] = "LOADING"),
        (a[(a.DETAILS = 1)] = "DETAILS"),
        (a[(a.ERROR = 2)] = "ERROR");
      let L = e => {
        let t =
          (null == e ? void 0 : e.state) == null &&
          (null == e ? void 0 : e.channel) == null;
        if (null == e || null == e.state || t) return 0;
        let n = e.state;
        switch (n) {
          case C.InviteStates.RESOLVED:
          case C.InviteStates.ACCEPTED:
          case C.InviteStates.APP_NOT_OPENED:
          case C.InviteStates.APP_OPENED:
          case C.InviteStates.ACCEPTING:
          case C.InviteStates.APP_OPENING:
            return 1;
          case C.InviteStates.EXPIRED:
          case C.InviteStates.BANNED:
          case C.InviteStates.ERROR:
            return 2;
          case C.InviteStates.RESOLVING:
            return 0;
          default:
            (0, m.assertNever)(n);
        }
      };
      function x(e) {
        let { invite: t, onAcceptInvite: n } = e;
        if ((null == t ? void 0 : t.state) === C.InviteStates.BANNED)
          return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
            text: v.default.Messages.AUTH_BANNED_INVITE_BODY,
            buttonCta: v.default.Messages.INVITE_INVALID_CTA,
            onClick: n,
          });
        return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
          text: v.default.Messages.INVITE_INVALID_ERROR,
          buttonCta: v.default.Messages.INVITE_INVALID_CTA,
          onClick: n,
        });
      }
      function M(e) {
        let {
            children: t,
            cardChildren: n,
            startAnimHeightPx: s,
            innerStyle: a,
            ...u
          } = e,
          { invite: o } = u,
          [d, c] = r.useState(L(o)),
          { ref: E, height: _ } = (0, f.default)(),
          I = (0, i.useSpring)({
            height:
              null != _ && 0 !== _ ? "".concat(_, "px") : "".concat(s, "px"),
            config: i.config.stiff,
          });
        return (
          r.useEffect(() => {
            let e = L(o);
            e !== d && c(e);
          }, [o, d]),
          (0, l.jsxs)(i.animated.div, {
            className: O.inviteCard,
            style: I,
            children: [
              (0, l.jsx)(i.animated.div, {
                className: O.inviteChildContainer,
                style: I,
                children: (0, l.jsx)("section", {
                  ref: E,
                  className: null == a ? void 0 : a(d),
                  children: t(d),
                }),
              }),
              n,
            ],
          })
        );
      }
      function D(e) {
        let { invite: t } = e;
        if (null == t || !(0, g.isEnhancedCommunityInvite)(t)) return null;
        let n = e => {
          if (null == t) return null;
          if (1 === e) return (0, l.jsx)(S.GuildInfoCard, { invite: t });
          return null;
        };
        return (0, l.jsx)(M, {
          startAnimHeightPx: 0,
          innerStyle: () => O.guildInfoInner,
          ...e,
          children: e => n(e),
        });
      }
      function P(e) {
        let { invite: t } = e,
          n = n => {
            if (null == t) return (0, l.jsx)(R, {});
            switch (n) {
              case 1:
                return (0, l.jsx)(A.default, { ...e, invite: t });
              case 2:
                return (0, l.jsx)(x, { ...e, invite: t });
              default:
                return (0, l.jsx)(R, {});
            }
          },
          s = {
            1: O.inviteCardInner,
            2: O.inviteCardInnerError,
            0: O.inviteCardInnerLoading,
          };
        return (0, l.jsx)(M, {
          startAnimHeightPx: 200,
          innerStyle: e => s[e],
          ...e,
          children: e => n(e),
        });
      }
      function U(e) {
        let { invite: t, onAcceptInvite: n } = e,
          { guild: s } = null != t ? t : {},
          a = {};
        if ((null == s ? void 0 : s.splash) != null) {
          let e = T.default.getGuildSplashURL({ id: s.id, splash: s.splash });
          null != e &&
            ((a.backgroundImage = "url(".concat(e, ")")),
            (a.backgroundSize = "cover"));
        }
        return (0, l.jsxs)(h.default, {
          theme: C.ThemeTypes.DARK,
          className: O.splashBackground,
          style: a,
          contentClassName: O.centerAuthBoxContent,
          children: [
            (0, l.jsx)(P, { ...e, onAcceptInvite: n }),
            (0, l.jsx)(D, { ...e }),
          ],
        });
      }
      function j(e) {
        let { inviteKey: t, transitionTo: n } = e,
          s = (0, u.useStateFromStores)([I.default], () =>
            I.default.getInvite(t)
          );
        return (
          r.useEffect(() => {
            (0, E.trackAppUIViewed)("invite_mobile");
          }, []),
          r.useEffect(() => {
            null != s &&
              s.state === C.InviteStates.RESOLVED &&
              p.default.track(
                C.AnalyticEvents.INVITE_VIEWED,
                {
                  invite_code: t,
                  friends_count: null == s ? void 0 : s.friends_count,
                },
                { flush: !0 }
              );
          }, [s, t]),
          (0, l.jsx)(U, {
            invite: s,
            onAcceptInvite: e => {
              !(function (e, t, n) {
                var s, a, l;
                null == e || e.preventDefault(),
                  p.default.track(C.AnalyticEvents.INVITE_APP_OPENED, {
                    invite_code: (0, N.parseInviteCodeFromInviteKey)(t),
                    guild_id:
                      null == n
                        ? void 0
                        : null === (s = n.guild) || void 0 === s
                          ? void 0
                          : s.id,
                    channel_id:
                      null == n
                        ? void 0
                        : null === (a = n.channel) || void 0 === a
                          ? void 0
                          : a.id,
                    inviter_id:
                      null == n
                        ? void 0
                        : null === (l = n.inviter) || void 0 === l
                          ? void 0
                          : l.id,
                  });
                let r =
                    null != n &&
                    n.state !== C.InviteStates.EXPIRED &&
                    n.state !== C.InviteStates.BANNED
                      ? t
                      : void 0,
                  i = _.default.getFingerprint(),
                  u = null != i ? i : _.default.getId(),
                  o =
                    null != n && (null == n ? void 0 : n.type) != null
                      ? Number(null == n ? void 0 : n.type)
                      : void 0;
                d.default.openApp(r, void 0, u, void 0, o);
              })(e, t, s);
            },
            transitionTo: n,
          })
        );
      }
    },
    570683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildInfoCard: function () {
            return _;
          },
          default: function () {
            return I;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("400271"),
        r = n("586403"),
        i = n("813006"),
        u = n("580357"),
        o = n("476263"),
        d = n("800118"),
        c = n("782340"),
        f = n("852170");
      function E(e) {
        var t;
        let {
          guildScheduledEvent: n,
          channel: i,
          onAcceptInvite: u,
          isSubmitting: o,
        } = e;
        return (0, s.jsxs)("div", {
          className: f.guildEventCard,
          children: [
            (0, s.jsx)(l.default, {
              name: n.name,
              description:
                null !== (t = n.description) && void 0 !== t ? t : void 0,
              headerVariant: "heading-md/medium",
              descriptionClassName: f.channelDescription,
              guildId: n.guild_id,
              guildEventId: n.id,
              eventPreview: n,
            }),
            null != i &&
              (0, s.jsx)("div", {
                className: f.channelInfo,
                children: (0, s.jsx)(r.default, {
                  guildScheduledEvent: n,
                  channel: i,
                }),
              }),
            (0, s.jsx)(a.Button, {
              className: f.acceptButton,
              color: a.Button.Colors.GREEN,
              onClick: u,
              submitting: o,
              children: c.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
            }),
          ],
        });
      }
      function _(e) {
        var t;
        let { invite: n } = e,
          l = null != n.guild ? new i.default(n.guild) : null;
        if (null == l) return null;
        let r = null !== (t = l.description) && void 0 !== t ? t : "";
        return (0, s.jsxs)("div", {
          className: f.guildInfoCard,
          children: [
            (0, s.jsx)(a.Heading, {
              className: f.presentedBy,
              variant: "text-sm/medium",
              children: c.default.Messages.STAGE_INVITE_GUILD_HEADER,
            }),
            (0, s.jsxs)("div", {
              className: f.guildContainer,
              children: [
                (0, s.jsx)(o.default, {
                  guild: l,
                  active: !0,
                  size: o.default.Sizes.MEDIUM,
                }),
                (0, s.jsxs)("div", {
                  className: f.guildDetailsContanier,
                  children: [
                    (0, s.jsxs)(a.Text, {
                      className: f.guildName,
                      color: "header-primary",
                      variant: "text-sm/medium",
                      tag: "span",
                      children: [
                        l.name,
                        (0, s.jsx)(u.default, {
                          guild: l,
                          className: f.guildBadge,
                          tooltipPosition: "left",
                        }),
                      ],
                    }),
                    (0, s.jsx)(d.InviteMemberCounts, {
                      invite: n,
                      textClassName: f.guildInfoMemberCountText,
                      className: f.guildInfoMemberCount,
                    }),
                  ],
                }),
              ],
            }),
            r.length > 0 &&
              (0, s.jsx)("details", {
                className: f.guildDescriptionContainer,
                children: (0, s.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: r,
                }),
              }),
          ],
        });
      }
      function I(e) {
        let { invite: t, channel: n, isSubmitting: a, onAcceptInvite: l } = e,
          { guild_scheduled_event: r } = t;
        return null != r
          ? (0, s.jsx)(E, {
              guildScheduledEvent: r,
              channel: n,
              isSubmitting: a,
              onAcceptInvite: l,
            })
          : null;
      }
    },
    527441: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("446674"),
        a = n("913144");
      let l = null;
      class r extends s.default.PersistedStore {
        initialize(e) {
          var t;
          l =
            null !== (t = null == e ? void 0 : e.type) && void 0 !== t
              ? t
              : null;
        }
        getType() {
          return l;
        }
        getState() {
          return { type: l };
        }
      }
      (r.displayName = "NewUserStore"), (r.persistKey = "nuf");
      var i = new r(a.default, {
        NUF_NEW_USER: function (e) {
          let { newUserType: t } = e;
          l = t;
        },
        NUF_COMPLETE: function () {
          l = null;
        },
      });
    },
    65324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("70102");
      var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        r = n("206230"),
        i = n("491605"),
        u = n("642716"),
        o = n("646718");
      function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: c,
            idleAnimationState: f,
          } = e,
          E = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.useReducedMotion
          ),
          [_, I] = a.useState(c),
          h = a.useRef((0, u.getGiftAnimationData)(t, _)),
          [p, T] = a.useState(null == f),
          [m, N] = a.useState(!1),
          [g, A] = a.useState(-1),
          S = () => {
            (h.current = (0, u.getGiftAnimationData)(t, _)), A(e => e + 1);
          },
          C = () => {
            T(!1), N(!0), A(-1), I(c);
          };
        a.useEffect(() => {
          null == f && I(c);
        }, [f, c]),
          a.useEffect(() => {
            if (null != f && g >= 0) {
              C();
              return;
            }
            S();
          }, [t, f]),
          a.useEffect(() => {
            (!m || null == f) && S();
          }, [_]),
          a.useEffect(() => {
            m && (T(null == f), N(!1), S());
          }, [m]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, s.jsx)(i.default, {
          importData: h.current,
          shouldAnimate: !E && d,
          className: n,
          versionKey: g,
          onComplete:
            null != f
              ? () => {
                  null != f && (I(f), T(!0));
                }
              : void 0,
          loop: p,
        });
      }
    },
    642716: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getGiftAnimationData: function () {
            return l;
          },
        });
      var s = n("210721"),
        a = n("646718");
      let l = (e, t) => {
        let l;
        switch (e) {
          case a.PremiumGiftStyles.SNOWGLOBE:
            l = () =>
              n
                .el("452661")
                .then(n.t.bind(n, "452661", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.PremiumGiftStyles.BOX:
            l = () =>
              n
                .el("726871")
                .then(n.t.bind(n, "726871", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.PremiumGiftStyles.CUP:
            l = () =>
              n
                .el("544929")
                .then(n.t.bind(n, "544929", 19))
                .then(e => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.PremiumGiftStyles.STANDARD_BOX:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("973372")
                    .then(n.t.bind(n, "973372", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("353540")
                    .then(n.t.bind(n, "353540", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("303473")
                    .then(n.t.bind(n, "303473", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.PremiumGiftStyles.CAKE:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("127891")
                    .then(n.t.bind(n, "127891", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("953820")
                    .then(n.t.bind(n, "953820", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("311972")
                    .then(n.t.bind(n, "311972", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.PremiumGiftStyles.CHEST:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("269055")
                    .then(n.t.bind(n, "269055", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("120467")
                    .then(n.t.bind(n, "120467", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("451680")
                    .then(n.t.bind(n, "451680", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.PremiumGiftStyles.COFFEE:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("863089")
                    .then(n.t.bind(n, "863089", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("949233")
                    .then(n.t.bind(n, "949233", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("361896")
                    .then(n.t.bind(n, "361896", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.PremiumGiftStyles.SEASONAL_STANDARD_BOX:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("158302")
                    .then(n.t.bind(n, "158302", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("610146")
                    .then(n.t.bind(n, "610146", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("294569")
                    .then(n.t.bind(n, "294569", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.PremiumGiftStyles.SEASONAL_CAKE:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("124416")
                    .then(n.t.bind(n, "124416", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("335900")
                    .then(n.t.bind(n, "335900", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("566748")
                    .then(n.t.bind(n, "566748", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.PremiumGiftStyles.SEASONAL_CHEST:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("708949")
                    .then(n.t.bind(n, "708949", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("355472")
                    .then(n.t.bind(n, "355472", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("262001")
                    .then(n.t.bind(n, "262001", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.PremiumGiftStyles.SEASONAL_COFFEE:
            switch (t) {
              case s.AnimationState.IDLE:
                l = () =>
                  n
                    .el("836477")
                    .then(n.t.bind(n, "836477", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case s.AnimationState.LOOP:
                l = () =>
                  n
                    .el("737995")
                    .then(n.t.bind(n, "737995", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .el("433750")
                    .then(n.t.bind(n, "433750", 19))
                    .then(e => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            l = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return l;
      };
    },
    149806: function (e, t, n) {
      "use strict";
      var s, a, l, r, i, u, o, d, c, f;
      n.r(t),
        n.d(t, {
          FlowType: function () {
            return s;
          },
          AgeGateSteps: function () {
            return a;
          },
          ClaimAccountSteps: function () {
            return l;
          },
          CreateGuildSteps: function () {
            return r;
          },
          RegistrationSteps: function () {
            return i;
          },
        }),
        ((u = s || (s = {})).UNKNOWN = "unknown"),
        (u.ANY = "any"),
        (u.INVITE = "invite"),
        (u.ORGANIC = "organic_registration"),
        (u.ORGANIC_MARKETING = "organic_marketing"),
        (u.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (u.CREATE_GUILD = "create_guild"),
        ((o = a || (a = {})).AGE_GATE = "age_gate"),
        (o.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((d = l || (l = {})).CLAIM_ACCOUNT = "claim_account"),
        (d.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((c = r || (r = {})).GUILD_TEMPLATES = "guild_templates"),
        (c.GUILD_CREATE = "guild_create"),
        (c.CREATION_INTENT = "creation_intent"),
        (c.CHANNEL_PROMPT = "channel_prompt"),
        (c.JOIN_GUILD = "join_guild"),
        (c.SUCCESS = "create_success"),
        ((f = i || (i = {})).NUF_STARTED = "nuf_started"),
        (f.AGE_GATE = "age_gate"),
        (f.NUF_COMPLETE = "nuf_complete"),
        (f.HUB_CONNECTION = "hub_connection");
    },
    42963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var s = n("308503"),
        a = n("95410"),
        l = n("605250"),
        r = n("599110"),
        i = n("149806"),
        u = n("49111");
      let o = "UserFlowAnalyticsStore_current",
        d = "UserFlowAnalyticsStore";
      function c(e) {
        if (e === i.FlowType.UNKNOWN) return null;
        let t = a.Storage.get("".concat(d, "-").concat(e));
        if (null == t) return null;
        let { version: n, ...s } = t;
        return 1 !== n ? null : s;
      }
      new l.default("UserFlowAnalytics");
      let f = (0, s.default)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
          var e;
          let n =
            null !== (e = t().currentFlow) && void 0 !== e
              ? e
              : a.Storage.get(o);
          if (null == n) return null;
          let { [n]: s } = t().flows,
            l = null != s ? s : c(n);
          return (null == l ? void 0 : l.currentStep) != null ? n : null;
        },
      }));
      function E(e, t) {
        let { [e]: n, ...s } = f.getState().flows,
          a = null != n ? n : c(e);
        if ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t)
          f.setState({
            flows: {
              ...s,
              [e]: {
                type: e,
                lastStep: null,
                lastTimestamp: null,
                currentStep: t,
                currentTimestamp: new Date(),
                skipped: !1,
              },
            },
            currentFlow: e,
          });
      }
      function _(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = e;
        if (e === i.FlowType.ANY) {
          var a;
          s =
            null !== (a = f.getState().activeFlow()) && void 0 !== a
              ? a
              : i.FlowType.UNKNOWN;
        }
        let { [s]: l, ...r } = f.getState().flows,
          u = null != l ? l : c(s);
        if (null != u && null != u.currentStep)
          u.currentStep !== t &&
            f.setState({
              flows: {
                ...r,
                [s]: {
                  ...u,
                  lastStep: u.currentStep,
                  lastTimestamp: u.currentTimestamp,
                  currentStep: t,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: s,
            });
      }
      f.subscribe(
        e => {
          var t;
          if (
            null != e &&
            (!(function (e) {
              if (e.type === i.FlowType.UNKNOWN) return;
              let t = "".concat(d, "-").concat(e.type);
              e.ended
                ? (a.Storage.remove(t), a.Storage.remove(o))
                : (a.Storage.set("".concat(d, "-").concat(e.type), {
                    ...e,
                    version: 1,
                  }),
                  a.Storage.set(o, e.type));
            })(e),
            r.default.track(
              u.AnalyticEvents.NUO_TRANSITION,
              {
                flow_type: e.type,
                from_step: e.lastStep,
                to_step: e.currentStep,
                seconds_on_from_step:
                  "function" !=
                  typeof (null === (t = e.lastTimestamp) || void 0 === t
                    ? void 0
                    : t.getTime)
                    ? 0
                    : (e.currentTimestamp.getTime() -
                        e.lastTimestamp.getTime()) /
                      1e3,
              },
              { flush: !0 }
            ),
            e.ended)
          ) {
            let t = { ...f.getState().flows };
            delete t[e.type], f.setState({ flows: t, currentFlow: null });
          }
        },
        e => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0)
      );
      function I() {
        return null != f.getState().activeFlow();
      }
      var h = {
        flowStart: E,
        flowStepOrStart: function (e, t) {
          I() ? _(e, t) : E(e, t);
        },
        flowStep: _,
        hasActiveFlow: I,
      };
    },
    853994: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EMAILS_SUBSECTION: function () {
            return r;
          },
          EmailCategories: function () {
            return a;
          },
          MarketingEmailCategories: function () {
            return i;
          },
          EmailCategoriesList: function () {
            return u;
          },
        });
      var s,
        a,
        l = n("782340");
      let r = "emails";
      ((s = a || (a = {})).COMMUNICATION = "communication"),
        (s.SOCIAL = "social"),
        (s.TIPS = "tips"),
        (s.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events"),
        (s.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements"),
        (s.FAMILY_CENTER_DIGEST = "family_center_digest");
      let i = [
          "tips",
          "recommendations_and_events",
          "updates_and_announcements",
        ],
        u = [
          {
            category: "communication",
            label: () =>
              l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
            subLabel: () =>
              l.default.Messages
                .USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL,
          },
          {
            category: "social",
            label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
            subLabel: () =>
              l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL,
          },
          {
            category: "updates_and_announcements",
            label: () =>
              l.default.Messages
                .USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
            subLabel: () =>
              l.default.Messages
                .USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL,
          },
          {
            category: "tips",
            label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
            subLabel: () =>
              l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL,
          },
          {
            category: "recommendations_and_events",
            label: () =>
              l.default.Messages
                .USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
            subLabel: () =>
              l.default.Messages
                .USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL,
          },
        ];
    },
    425922: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchWebAuthnConditionalChallenge: function () {
            return r;
          },
          fetchWebAuthnPasswordlessChallenge: function () {
            return i;
          },
          fetchWebAuthnCredentials: function () {
            return u;
          },
          deleteWebAuthnCredential: function () {
            return o;
          },
          editWebAuthnCredential: function () {
            return d;
          },
          startRegisterWebAuthnCredential: function () {
            return c;
          },
          finishRegisterWebAuthnCredential: function () {
            return f;
          },
        });
      var s = n("872717"),
        a = n("913144"),
        l = n("49111");
      async function r() {
        let e = await s.HTTP.post(
          l.Endpoints.WEBAUTHN_CONDITIONAL_UI_CHALLENGE
        );
        return e.body;
      }
      async function i() {
        let e = await s.HTTP.post(l.Endpoints.WEBAUTHN_PASSWORDLESS_CHALLENGE);
        return e.body;
      }
      function u() {
        a.default.dispatch({ type: "MFA_WEBAUTHN_CREDENTIALS_LOADING" }),
          s.HTTP.get(l.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
            a.default.dispatch({
              type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
              credentials: e.body,
            });
          });
      }
      function o(e) {
        s.HTTP.del(l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
          a.default.dispatch({ type: "AUTHENTICATOR_DELETE", credential: e });
        });
      }
      async function d(e, t) {
        let n = await s.HTTP.patch({
          url: l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
          body: { name: t },
        });
        a.default.dispatch({
          type: "AUTHENTICATOR_UPDATE",
          credential: n.body,
        });
      }
      async function c() {
        let {
          body: { ticket: e, challenge: t },
        } = await s.HTTP.post({
          url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
          body: {},
        });
        return { ticket: e, challenge: t };
      }
      async function f(e, t, n) {
        let r = await s.HTTP.post({
          url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
          body: { name: e, ticket: t, credential: n },
        });
        a.default.dispatch({
          type: "AUTHENTICATOR_CREATE",
          credential: r.body,
        }),
          a.default.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            codes: r.body.backup_codes,
          });
      }
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return _;
          },
        });
      var s,
        a,
        l = n("37983");
      n("884691");
      var r = n("414456"),
        i = n.n(r),
        u = n("77078"),
        o = n("36694"),
        d = n("381546"),
        c = n("68238"),
        f = n("423487"),
        E = n("950038");
      ((s = a || (a = {}))[(s.WARNING = 0)] = "WARNING"),
        (s[(s.INFO = 1)] = "INFO"),
        (s[(s.ERROR = 2)] = "ERROR"),
        (s[(s.POSITIVE = 3)] = "POSITIVE");
      var _ = function (e) {
        let {
            children: t,
            messageType: n,
            className: s,
            textColor: a = "text-normal",
            textVariant: r = "text-sm/medium",
          } = e,
          _ = (function (e) {
            switch (e) {
              case 0:
                return f.default;
              case 1:
                return c.default;
              case 2:
                return d.default;
              case 3:
                return o.default;
            }
          })(n),
          I = (function (e) {
            switch (e) {
              case 0:
                return E.warning;
              case 1:
                return E.info;
              case 2:
                return E.error;
              case 3:
                return E.positive;
            }
          })(n);
        return (0, l.jsxs)("div", {
          className: i(E.container, I, s),
          children: [
            (0, l.jsx)("div", {
              className: E.iconDiv,
              children: (0, l.jsx)(_, { className: E.icon }),
            }),
            (0, l.jsx)(u.Text, {
              className: E.text,
              color: a,
              variant: r,
              children: t,
            }),
          ],
        });
      };
    },
    414943: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DEFAULT_SELECT_STYLES: function () {
            return h;
          },
          default: function () {
            return l;
          },
        }),
        n("222007");
      var s,
        a,
        l,
        r,
        i = n("37983"),
        u = n("884691"),
        o = n("414456"),
        d = n.n(o),
        c = n("773392"),
        f = n("77078"),
        E = n("49111"),
        _ = n("782340"),
        I = n("852968");
      ((r = a || (a = {})).TOP = "top"), (r.BOTTOM = "bottom");
      let h = {
        container: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: n, menuIsOpen: s } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: s ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: n ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: n ? 0.5 : 1,
          };
        },
        input: e => ({ ...e, color: "var(--interactive-normal)" }),
        menu: e => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: e => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: n ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: n ? 0.3 : 1,
            },
          };
        },
        menuList: e => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, t) => {
          let { isSelected: n, isFocused: s } = t;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : s
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: e => ({ ...e, color: "var(--text-muted)" }),
      };
      ((s = class extends u.Component {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: s,
              valueRenderer: a,
              optionRenderer: l,
              multiValueRenderer: r,
              options: u,
              value: o,
              autofocus: E,
              disabled: p,
              clearable: T,
              searchable: m,
              styleOverrides: N,
              isMulti: g,
              placeholder: A,
              filterOption: S,
              closeMenuOnSelect: C = !0,
              ...v
            } = this.props,
            O = { ...v };
          null != E && (O.autoFocus = E),
            null != p && (O.isDisabled = p),
            null != T && (O.isClearable = T),
            null != m && (O.isSearchable = m);
          let R = { IndicatorSeparator: () => null };
          null != l &&
            (R.Option = e =>
              (0, i.jsx)(c.components.Option, { ...e, children: l(e.data) })),
            null != a &&
              (R.SingleValue = e =>
                (0, i.jsx)(c.components.SingleValue, {
                  ...e,
                  children: a(e.data),
                })),
            null != r && (R.MultiValue = e => r(e.data));
          let L = null != N ? N : h;
          if (g && Array.isArray(o)) {
            let t = {};
            u.forEach(e => {
              t[String(e.value)] = e;
            }),
              (e = o.map(e => t[String(e)]));
          } else e = null != o ? u.find(e => e.value === o) : null;
          return (0, i.jsx)(f.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)("div", {
              className: d(I.select, t, { [I.error]: null != s }),
              ref: this._containerRef,
              children: [
                (0, i.jsx)(c.default, {
                  ...O,
                  className: n,
                  ref: this._selectRef,
                  isMulti: g,
                  components: R,
                  options: u,
                  styles: L,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: C,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != A ? A : _.default.Messages.SELECT,
                  noOptionsMessage: () => _.default.Messages.NO_RESULTS_FOUND,
                  filterOption: S,
                }),
                null != s
                  ? (0, i.jsx)("div", {
                      className: I.errorMessage,
                      children: s,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._selectRef = u.createRef()),
            (this._containerRef = u.createRef()),
            (this.state = { isFocused: !1, isOpen: !1 }),
            (this.handleFocus = e => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            (this.handleBlur = e => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            (this.handleKeyDown = e => {
              e.which === E.KeyboardKeys.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            (this.handleMenuOpen = () => {
              this.setState({ isOpen: !0 });
            }),
            (this.handleMenuClose = () => {
              this.setState({ isOpen: !1 });
            });
        }
      }).MenuPlacements = a),
        (l = s);
    },
    834030: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("597755"),
        a = n.n(s),
        l = n("279295"),
        r = {
          dump(e) {
            let t;
            null != performance.memory &&
              (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
              });
            let n = {
              browser: { name: a.name, version: a.version },
              os: { name: a.os.family, version: a.os.version },
              memory: t,
            };
            e(n);
          },
          getTimeSinceNavigationStart: () => Date.now() - l.navigationStart,
        };
    },
    883029: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDescriptiveInviteError: function () {
            return u;
          },
          getInviteError: function () {
            return o;
          },
        });
      var s = n("697218"),
        a = n("701909"),
        l = n("719923"),
        r = n("49111"),
        i = n("782340");
      function u(e) {
        switch (e) {
          case r.AbortCodes.TOO_MANY_USER_GUILDS:
            let t = s.default.getCurrentUser(),
              n =
                l.default.canUseIncreasedGuildCap(t) ||
                (null == t ? void 0 : t.isStaff()),
              a = n ? r.MAX_USER_GUILDS_PREMIUM : r.MAX_USER_GUILDS;
            return {
              title: i.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                quantity: a,
              }),
              description: i.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION,
            };
          case r.AbortCodes.GUILD_AT_CAPACITY:
            return {
              title: i.default.Messages.SERVER_IS_CURRENTLY_FULL,
              description: i.default.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          case r.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
              title: i.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
              description: i.default.Messages.PLEASE_TRY_AGAIN_LATER,
            };
          default:
            return null;
        }
      }
      function o(e) {
        switch (e) {
          case r.AbortCodes.TOO_MANY_USER_GUILDS:
            return i.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
          case r.AbortCodes.GUILD_AT_CAPACITY:
            return i.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
          case r.AbortCodes.INVALID_COUNTRY_CODE:
            return i.default.Messages.INVALID_COUNTRY_CODE;
          case r.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
            return i.default.Messages.INVALID_CANNOT_FRIEND_SELF;
          case r.AbortCodes.INVITES_DISABLED:
            return i.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format(
              {
                articleLink: a.default.getArticleURL(
                  r.HelpdeskArticles.INVITE_DISABLED
                ),
              }
            );
          default:
            return i.default.Messages.INVITE_MODAL_ERROR_DEFAULT;
        }
      }
    },
    380186: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getSubscriptionSKUs: function () {
            return E;
          },
          subscriptionCanSwitchImmediately: function () {
            return _;
          },
          subscriptionCanDowngrade: function () {
            return I;
          },
          getOrFetchSubscriptionPlan: function () {
            return h;
          },
          getSubscriptionPauseDurations: function () {
            return p;
          },
        }),
        n("222007"),
        n("424973"),
        n("884691");
      var s = n("627445"),
        a = n.n(s),
        l = n("866227"),
        r = n.n(l),
        i = n("216721");
      n("446674");
      var u = n("775433"),
        o = n("10514"),
        d = n("719923"),
        c = n("49111"),
        f = n("646718");
      function E(e) {
        return e.items
          .map(e => {
            let t = o.default.get(e.planId);
            return a(null != t, "Unable to fetch plan"), t;
          })
          .map(e => e.skuId);
      }
      function _(e, t, n) {
        let s = e.getCurrentSubscriptionPlanIdForGroup(n);
        return (
          (e.type === c.SubscriptionTypes.PREMIUM && null == s) ||
          (a(null != s, "Current subscription has no plan in group"),
          a(
            !(
              s === f.SubscriptionPlans.PREMIUM_YEAR_TIER_1 &&
              t === f.SubscriptionPlans.PREMIUM_MONTH_TIER_2
            ),
            "Unexpected plan switch"
          ),
          n.indexOf(s) < n.indexOf(t))
        );
      }
      function I(e, t, n) {
        return !_(e, t, n);
      }
      function h(e, t) {
        let n = o.default.get(e);
        if (null == n) {
          let n = f.SubscriptionPlanInfo[e];
          a(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
          let s = (0, d.castPremiumSubscriptionAsSkuId)(n.skuId);
          !o.default.isFetchingForSKU(s) &&
            (0, u.fetchSubscriptionPlansForSKU)(s, t);
        }
        return n;
      }
      function p(e) {
        let t = Object.keys(i.PauseDuration).filter(e => isNaN(Number(e)));
        if (e.status !== c.SubscriptionStatusTypes.PAUSED)
          return { durations: t, currentDaysPaused: 0 };
        if (null == e.pauseEndsAt)
          return { durations: [], currentDaysPaused: 0 };
        {
          let n = r(e.currentPeriodStart),
            s = r(e.pauseEndsAt),
            a = Math.round(s.diff(n, "days", !0)),
            l = [];
          for (let e of t) {
            let t = i.PauseDuration[e];
            t > a && l.push(e);
          }
          return { durations: l, currentDaysPaused: a };
        }
      }
    },
    778043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          deepLinkRouteIfLanded: function () {
            return u;
          },
          deepLinkRouteIfLandedAndNotAuthed: function () {
            return o;
          },
        });
      var s = n("43982"),
        a = n("393414"),
        l = n("271938"),
        r = n("773336"),
        i = n("49111");
      let u = r.isPlatformEmbedded
          ? i.NOOP
          : (e, t) => {
              if (!(0, a.hasNavigated)())
                return s.default.request(i.RPCCommands.DEEP_LINK, {
                  type: e,
                  params: t,
                });
            },
        o = r.isPlatformEmbedded
          ? i.NOOP
          : (e, t) => {
              if (!l.default.isAuthenticated())
                return u(e, {
                  ...(t || {}),
                  fingerprint: l.default.getFingerprint(),
                });
            };
    },
    498574: function (e, t, n) {
      "use strict";
      var s, a;
      n.r(t),
        n.d(t, {
          GuildInviteFlags: function () {
            return s;
          },
        }),
        n("222007"),
        ((a = s || (s = {}))[(a.IS_GUEST_INVITE = 1)] = "IS_GUEST_INVITE"),
        (a[(a.IS_VIEWED = 2)] = "IS_VIEWED"),
        (a[(a.IS_ENHANCED = 4)] = "IS_ENHANCED");
    },
    216721: function (e, t, n) {
      "use strict";
      var s, a;
      n.r(t),
        n.d(t, {
          PauseDuration: function () {
            return s;
          },
        }),
        ((a = s || (s = {}))[(a.ONE_MONTH = 30)] = "ONE_MONTH"),
        (a[(a.TWO_MONTHS = 60)] = "TWO_MONTHS"),
        (a[(a.THREE_MONTHS = 90)] = "THREE_MONTHS");
    },
  },
]);
//# sourceMappingURL=634944cf5f586989c929.js.map

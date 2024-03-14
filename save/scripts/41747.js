(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41747"],
  {
    527826: function (e, t, n) {
      "use strict";
      e.exports = n.p + "adf75861421c2a6a6269.png";
    },
    250790: function (e, t, n) {
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
        i = n("483366"),
        r = n.n(i),
        l = n("458960"),
        o = n("394846"),
        u = n("769846"),
        d = n("77078"),
        c = n("159885"),
        f = n("26232");
      let h = (0, c.cssValueToNumber)(
          u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE
        ),
        E = { START: 0, END: 1 },
        g = { friction: 10, tension: 130 };
      var m = function (e) {
        return class extends a.Component {
          componentDidMount() {
            !o.isMobile &&
              (window.addEventListener("resize", this.handleResizeDebounced),
              this.handleResize());
          }
          componentWillUnmount() {
            clearTimeout(this.timeout),
              window.removeEventListener("resize", this.handleResizeDebounced);
          }
          componentWillAppear(e) {
            this.state.shouldAnimate ? this.animateTo(E.END, e) : e();
          }
          componentWillEnter(e) {
            this.state.shouldAnimate
              ? (clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => this.animateTo(E.END, e), 40)))
              : e();
          }
          componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(E.START, e) : e();
          }
          animateTo(e, t) {
            l.default.spring(this.anim, { toValue: e, ...g }).start(t);
          }
          getAnimatedStyle(e) {
            return this.state.shouldAnimate
              ? {
                  opacity: this.anim,
                  transform: e
                    ? void 0
                    : [
                        {
                          scale: this.anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1.05, 1],
                          }),
                        },
                        {
                          translateY: this.anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["-70px", "0px"],
                          }),
                        },
                        { translateZ: 0 },
                      ],
                }
              : null;
          }
          render() {
            return (0, s.jsx)("div", {
              className: f.wrapper,
              children: (0, s.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                children: t => {
                  let { reducedMotion: n } = t;
                  return (0, s.jsx)(l.default.div, {
                    style: this.getAnimatedStyle(n.enabled),
                    children: (0, s.jsx)(e, { ...this.props }),
                  });
                },
              }),
            });
          }
          constructor(...e) {
            super(...e),
              (this.anim = new l.default.Value(E.START)),
              (this.state = { shouldAnimate: !o.isMobile }),
              (this.handleResize = () => {
                let e = window.innerWidth > h;
                !this.state.shouldAnimate && e && this.anim.setValue(E.END),
                  this.setState({ shouldAnimate: e });
              }),
              (this.handleResizeDebounced = r(this.handleResize, 60));
          }
        };
      };
    },
    746040: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("394846"),
        o = n("77078"),
        u = n("2021"),
        d = n("393414"),
        c = n("725484"),
        f = n("554054"),
        h = n("159885"),
        E = n("528502"),
        g = n("49111"),
        m = n("513680");
      let _ = (0, h.cssValueToNumber)(m.responsiveWidthMobile),
        p = [
          g.Routes.LOGIN,
          g.Routes.LOGIN_HANDOFF,
          g.Routes.REGISTER,
          g.Routes.INVITE(""),
          g.Routes.GIFT_CODE(""),
          g.Routes.GUILD_TEMPLATE_LOGIN(""),
          g.Routes.GUILD_TEMPLATE(""),
          g.Routes.DISABLE_EMAIL_NOTIFICATIONS,
          g.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          g.Routes.BILLING_PREMIUM_SUBSCRIBE,
          g.Routes.BILLING_PAYMENT_SOURCES_CREATE,
          g.Routes.BILLING_PAYMENTS,
          g.Routes.BILLING_PREMIUM_SWITCH_PLAN,
          g.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          g.Routes.VERIFY,
          g.Routes.VERIFY_HUB_EMAIL,
          g.Routes.REJECT_IP,
          g.Routes.REJECT_MFA,
          g.Routes.AUTHORIZE_IP,
          g.Routes.AUTHORIZE_PAYMENT,
          g.Routes.RESET,
          g.Routes.HANDOFF,
          g.Routes.REPORT,
          g.Routes.REPORT_SECOND_LOOK,
        ];
      function R(e) {
        return p.some(t => e.startsWith(t));
      }
      class S extends a.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (R(e)) (0, d.transitionTo)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          R(e) ? (0, d.replaceWith)(e) : (window.location = e);
        }
        renderDefault() {
          let { splash: e } = this.props,
            t = (0, s.jsx)(u.default, {
              component: a.Fragment,
              children: a.Children.map(this.props.children, e =>
                a.cloneElement(e, {
                  transitionTo: d.transitionTo,
                  replaceWith: d.replaceWith,
                })
              ),
            });
          return (0, s.jsx)("div", {
            className: m.characterBackground,
            children: (0, s.jsx)(o.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(c.default, {
                          show: !0,
                          className: r(m.logo),
                        }),
                        (0, s.jsx)(f.Splash, { splash: e, children: t }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(E.default, {
                          className: m.artwork,
                          preserveAspectRatio: "xMinYMin slice",
                        }),
                        t,
                      ],
                    }),
            }),
          });
        }
        renderMobile() {
          return (0, s.jsx)(u.default, {
            component: a.Fragment,
            children: a.Children.map(this.props.children, e =>
              a.cloneElement(e, {
                transitionTo: this.mobileTransitionTo,
                replaceWith: this.mobileReplaceWith,
              })
            ),
          });
        }
        render() {
          let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
          return e || l.isMobile || l.isTablet || t
            ? this.renderMobile()
            : this.renderDefault();
        }
        constructor(e) {
          super(e),
            (this.handleResize = () => {
              this.setState({ isMobileWidth: window.innerWidth <= _ });
            }),
            (this.state = { isMobileWidth: window.innerWidth <= _ });
        }
      }
      var A = S;
    },
    404432: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("446674"),
        o = n("77078"),
        u = n("299285"),
        d = n("210721"),
        c = n("65324"),
        f = n("697218"),
        h = n("10514"),
        E = n("552712"),
        g = n("953109"),
        m = n("124969"),
        _ = n("380186"),
        p = n("49111"),
        R = n("646718"),
        S = n("782340"),
        A = n("173494"),
        T = n("125047"),
        N = n("890957"),
        I = l.default.connectStores(
          [E.default, u.default, h.default, f.default],
          e => {
            let { giftCode: t } = e,
              n = E.default.get(t.skuId),
              { subscriptionPlanId: s } = t,
              a = null != s ? (0, _.getOrFetchSubscriptionPlan)(s) : null;
            return {
              sku: n,
              subscriptionPlan: a,
              application: u.default.getApplication(n.applicationId),
              gifter: f.default.getUser(t.userId),
            };
          }
        )(e => {
          let {
              error: t,
              giftCode: n,
              gifter: i,
              sku: l,
              application: u,
              subscriptionPlan: f,
            } = e,
            h =
              null == i
                ? S.default.Messages.GIFT_CODE_AUTH_GIFTED
                : S.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                    username: i.username,
                  }),
            E = l.name;
          return (
            null != f &&
              (E = (
                f.interval === R.SubscriptionIntervalTypes.MONTH
                  ? S.default.Messages
                      .GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY
                  : S.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY
              ).format({ skuName: l.name, intervalCount: f.intervalCount })),
            (0, s.jsxs)(a.Fragment, {
              children: [
                null != n.giftStyle
                  ? (0, s.jsx)(c.default, {
                      defaultAnimationState: d.AnimationState.LOOP,
                      giftStyle: n.giftStyle,
                      className: A.seasonalIcon,
                    })
                  : (0, s.jsx)(m.Avatar, {
                      src: null != i ? i.getAvatarURL(void 0, 100) : null,
                      size: o.AvatarSizes.DEPRECATED_SIZE_100,
                      className: N.marginBottom20,
                    }),
                null != t
                  ? (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(m.SubTitle, {
                          children: S.default.Messages.INVITE_MODAL_ERROR_TITLE,
                        }),
                        (0, s.jsx)(m.Title, { children: t }),
                      ],
                    })
                  : (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(m.SubTitle, { children: h }),
                        (0, s.jsxs)(m.Title, {
                          className: r(N.marginTop8, T.flexCenter),
                          children: [
                            l.productLine !== p.SKUProductLines.COLLECTIBLES &&
                              (0, s.jsx)(g.default, {
                                size: g.default.Sizes.MEDIUM,
                                className: A.applicationIcon,
                                game: u,
                                skuId: l.id,
                              }),
                            E,
                          ],
                        }),
                      ],
                    }),
              ],
            })
          );
        });
    },
    291850: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LoginSpinner: function () {
            return V;
          },
          default: function () {
            return K;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("730290"),
        o = n("394846"),
        u = n("446674"),
        d = n("77078"),
        c = n("913144"),
        f = n("437822"),
        h = n("697796"),
        E = n("524824"),
        g = n("21572"),
        m = n("791160"),
        _ = n("434824"),
        p = n("24287"),
        R = n("382236"),
        S = n("770032"),
        A = n("724554"),
        T = n("878720"),
        N = n("25033"),
        I = n("589252"),
        C = n("970366"),
        O = n("271938"),
        v = n("72177"),
        L = n("476108"),
        x = n("145131"),
        M = n("124969"),
        y = n("980428"),
        b = n("599110"),
        D = n("659500"),
        U = n("773336"),
        G = n("404432"),
        P = n("719451"),
        k = n("331085"),
        B = n("598489"),
        j = n("49111"),
        F = n("579033"),
        w = n("782340"),
        H = n("699177"),
        W = n("890957");
      function V() {
        return (0, s.jsx)(M.default, { children: (0, s.jsx)(d.Spinner, {}) });
      }
      class Y extends a.PureComponent {
        static getDerivedStateFromProps(e) {
          let { handoffAvailable: t, authenticated: n } = e;
          return t || n ? null : { checkingHandoff: !1 };
        }
        componentDidMount() {
          let {
            handoffAvailable: e,
            authenticated: t,
            giftCodeSKU: n,
            invite: s,
            location: a,
          } = this.props;
          e && !t ? (0, h.handoffBegin)() : t && this.loginOrSSO(t, a, !0),
            b.default.track(
              j.AnalyticEvents.LOGIN_VIEWED,
              {
                location:
                  null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...(null != n ? (0, m.default)(n, !1, !1) : {}),
              },
              { flush: !0 }
            ),
            f.default.getLocationMetadata(),
            (0, C.trackAppUIViewed)("login");
        }
        componentDidUpdate(e) {
          let { authenticated: t, location: n } = this.props,
            { checkingHandoff: s } = this.state;
          if (
            (t && !e.authenticated && !s && this.loginOrSSO(t, n),
            e.errors !== this.props.errors)
          ) {
            var a, i, r;
            this.hasError("password")
              ? null === (a = this.passwordRef) || void 0 === a || a.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (i = this.loginRef) || void 0 === i || i.focus()
                : this.hasError("code") &&
                  (null === (r = this.codeRef) || void 0 === r || r.focus());
          }
        }
        get loginSource() {
          let {
            giftCode: e,
            guildTemplate: t,
            invite: n,
            loginSource: s,
            redirectTo: a,
          } = this.props;
          if (null != s) return s;
          if (null != e) return "gift";
          if (null != t) return "guild_template";
          else if (null != n) {
            if (null != n.guild) return "guild_invite";
            if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
          }
          return null != a
            ? (0, E.getLoginHandoffSourceFromRedirectTo)(a)
            : null;
        }
        get giftCodeSKUId() {
          let { giftCode: e } = this.props;
          return null != e ? e.skuId : null;
        }
        get canShowChooseAccount() {
          return this.props.hasLoggedInAccounts;
        }
        loginOrSSO(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          e &&
            null != t &&
            (this.setState({ redirecting: !0 }),
            n
              ? f.default.verifySSOToken().then(() => this.transitionSSO(t))
              : this.transitionSSO(t));
        }
        transitionSSO(e) {
          let { transitionTo: t, redirectTo: n, replaceWith: s } = this.props,
            a = null != e ? (0, l.parse)(e.search) : {};
          if ((delete a.redirect_to, null != n)) null != s ? s(n) : t(n);
          else if (null == a.service) t(j.Routes.APP);
          else {
            let e =
                window.location.protocol +
                window.GLOBAL_ENV.API_ENDPOINT +
                j.Endpoints.SSO,
              t = { ...a, token: O.default.getToken() };
            window.location = "".concat(e, "?").concat((0, l.stringify)(t));
          }
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderHandOffAvailable() {
          let { authBoxClassName: e } = this.props;
          return (0, s.jsxs)(M.default, {
            className: e,
            children: [
              (0, s.jsx)(M.AuthSpinner, {}),
              (0, s.jsx)(M.Title, {
                className: W.marginBottom8,
                children: w.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE,
              }),
              (0, s.jsx)(M.SubTitle, {
                children:
                  w.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION,
              }),
            ],
          });
        }
        renderHandOffContinue() {
          let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
          return null == e
            ? null
            : (0, s.jsxs)(M.default, {
                className: n,
                children: [
                  (0, s.jsx)(M.Avatar, {
                    src: e.getAvatarURL(void 0, 100),
                    size: d.AvatarSizes.DEPRECATED_SIZE_100,
                    className: W.marginBottom20,
                  }),
                  (0, s.jsx)(M.Title, {
                    className: W.marginBottom8,
                    children:
                      w.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                        name: e.toString(),
                      }),
                  }),
                  (0, s.jsx)(M.SubTitle, {
                    className: W.marginBottom40,
                    children: w.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY,
                  }),
                  (0, s.jsxs)(M.Block, {
                    children: [
                      (0, s.jsx)(M.Button, {
                        onClick: () => t(j.Routes.APP),
                        className: W.marginBottom8,
                        children:
                          w.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format(
                            { name: e.toString() }
                          ),
                      }),
                      (0, s.jsx)(M.Button, {
                        look: M.Button.Looks.LINK,
                        color: M.Button.Colors.LINK,
                        onClick: this.handleReset,
                        children:
                          w.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL,
                      }),
                    ],
                  }),
                ],
              });
        }
        renderDisabledAccount() {
          let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === j.LoginStates.ACCOUNT_DISABLED,
            n = t
              ? w.default.Messages.ACCOUNT_DISABLED_TITLE
              : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
            a = t
              ? w.default.Messages.ACCOUNT_DISABLED_DESCRIPTION
              : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
          return (0, s.jsx)(M.default, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, s.jsxs)(d.HeadingLevel, {
              component: (0, s.jsx)(M.Title, {
                className: W.marginBottom8,
                children: n,
              }),
              children: [
                (0, s.jsx)(M.SubTitle, {
                  className: W.marginBottom20,
                  children: a,
                }),
                (0, s.jsxs)(M.Block, {
                  children: [
                    (0, s.jsx)(M.Button, {
                      color: M.Button.Colors.BRAND,
                      type: "submit",
                      children: w.default.Messages._RETURN_TO_LOGIN,
                    }),
                    (0, s.jsx)("div", {
                      className: r(W.marginTop8, H.needAccount),
                      children:
                        w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format(
                          { onClick: this.handleCancelAccountDeletion }
                        ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        renderResolving() {
          let { authBoxClassName: e, country: t } = this.props;
          return (0, s.jsxs)(M.default, {
            className: e,
            children: [
              (0, s.jsx)(P.InviteResolvingHeader, {}),
              (0, s.jsxs)(M.Block, {
                className: W.marginTop20,
                children: [
                  (0, s.jsx)(I.default, {
                    className: W.marginBottom20,
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    label: w.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                    onChange: (e, t) =>
                      this.setState({ login: e, loginPrefix: t }),
                    setRef: this.setLoginRef,
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    spellCheck: "false",
                    value: this.state.login,
                    autoFocus: !0,
                    required: !0,
                  }),
                  (0, s.jsx)(M.Input, {
                    className: W.marginBottom20,
                    label: w.default.Messages.FORM_LABEL_PASSWORD,
                    onChange: e => this.setState({ password: e }),
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, s.jsx)(M.Button, {
                    className: W.marginBottom8,
                    type: "submit",
                    disabled: !0,
                    children: w.default.Messages._LOGIN,
                  }),
                  (0, s.jsx)(M.Button, {
                    disabled: !0,
                    look: M.Button.Looks.LINK,
                    color: M.Button.Colors.LINK,
                    children: w.default.Messages.FORGOT_PASSWORD,
                  }),
                  (0, s.jsx)(M.Button, {
                    disabled: !0,
                    className: W.marginTop4,
                    look: M.Button.Looks.LINK,
                    color: M.Button.Colors.LINK,
                    children: w.default.Messages.NEED_ACCOUNT,
                  }),
                ],
              }),
            ],
          });
        }
        renderDefaultForm(e) {
          var t;
          let n;
          let {
              invite: a,
              giftCode: i,
              loginStatus: l,
              country: o,
              showMobileWebHandoff: u,
              disableAutofocusOnDefaultForm: c,
            } = this.props,
            f = !this.hasError("email") && this.hasError("password"),
            h = (null == a ? void 0 : a.stage_instance) != null;
          return (
            (n =
              null == a || h
                ? null != i
                  ? (0, s.jsx)(G.default, { giftCode: i })
                  : (0, s.jsxs)("div", {
                      className: H.header,
                      children: [
                        (0, s.jsx)(
                          M.Title,
                          {
                            className: W.marginBottom8,
                            children: w.default.Messages.LOGIN_TITLE,
                          },
                          "title"
                        ),
                        !1 === (0, U.isAndroidWeb)()
                          ? (0, s.jsx)(
                              M.SubTitle,
                              { children: w.default.Messages.AUTH_LOGIN_BODY },
                              "subtitle"
                            )
                          : null,
                      ],
                    })
                : (0, s.jsx)(P.default, { invite: a })),
            (0, s.jsxs)(
              x.default,
              {
                direction: x.default.Direction.HORIZONTAL,
                align: x.default.Align.CENTER,
                children: [
                  (0, s.jsxs)("div", {
                    className: H.mainLoginContainer,
                    children: [
                      this.canShowChooseAccount &&
                        this.state.dismissedChooseAccount &&
                        (0, s.jsx)(M.Button, {
                          onClick: () => {
                            this.setState(e => ({
                              ...e,
                              dismissedChooseAccount: !1,
                            }));
                          },
                          look: M.Button.Looks.LINK,
                          color: M.Button.Colors.PRIMARY,
                          className: H.goBackButton,
                          children: (0, s.jsxs)("div", {
                            className: H.content,
                            children: [
                              (0, s.jsx)(y.default, {
                                width: 16,
                                height: 16,
                                className: H.caret,
                              }),
                              (0, s.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: w.default.Messages.AGE_GATE_GO_BACK,
                              }),
                            ],
                          }),
                        }),
                      n,
                      (0, s.jsx)(d.HeadingLevel, {
                        children: (0, s.jsxs)(M.Block, {
                          className: W.marginTop20,
                          children: [
                            (0, s.jsx)(I.default, {
                              alpha2: o.alpha2,
                              countryCode: o.code.split(" ")[0],
                              className: W.marginBottom20,
                              label:
                                w.default.Messages
                                  .FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                              error:
                                null !== (t = this.renderError("login")) &&
                                void 0 !== t
                                  ? t
                                  : this.renderError("email"),
                              onChange: (e, t) =>
                                this.setState({ login: e, loginPrefix: t }),
                              setRef: this.setLoginRef,
                              autoCapitalize: "none",
                              autoComplete: "off",
                              autoCorrect: "off",
                              spellCheck: "false",
                              value: this.state.login,
                              autoFocus: !f && !u && !c,
                              required: !0,
                            }),
                            (0, s.jsx)(M.Input, {
                              label: w.default.Messages.FORM_LABEL_PASSWORD,
                              error: this.renderError("password"),
                              onChange: e => this.setState({ password: e }),
                              name: "password",
                              type: "password",
                              setRef: this.setPasswordRef,
                              autoComplete: "off",
                              spellCheck: "false",
                              autoFocus: f && !u && !c,
                              value: this.state.password,
                              required: !0,
                            }),
                            (0, s.jsx)(M.Button, {
                              onClick: this.handleForgotPassword,
                              look: M.Button.Looks.LINK,
                              color: M.Button.Colors.LINK,
                              className: r(W.marginBottom20, W.marginTop4),
                              children: w.default.Messages.FORGOT_PASSWORD,
                            }),
                            (0, s.jsx)(M.Button, {
                              type: "submit",
                              submitting: l === j.LoginStates.LOGGING_IN,
                              color: h
                                ? M.Button.Colors.GREEN
                                : M.Button.Colors.BRAND,
                              className: W.marginBottom8,
                              children: h
                                ? w.default.Messages._LOGIN_STAGE
                                : w.default.Messages._LOGIN,
                            }),
                            (0, s.jsxs)("div", {
                              className: W.marginTop4,
                              children: [
                                (0, s.jsx)("span", {
                                  className: H.needAccount,
                                  children: w.default.Messages.NEED_ACCOUNT,
                                }),
                                (0, s.jsx)(M.Button, {
                                  onClick: this.handleGotoRegister,
                                  look: M.Button.Looks.LINK,
                                  color: M.Button.Colors.LINK,
                                  className: H.smallRegisterLink,
                                  children: w.default.Messages.REGISTER,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(d.HeadingLevel, {
                    children: e
                      ? (0, s.jsx)(k.default, {
                          authTokenCallback: this.handleAuthToken,
                        })
                      : null,
                  }),
                ],
              },
              "form-wrapper"
            )
          );
        }
        renderDefault() {
          let { authBoxClassName: e, showMobileWebHandoff: t } = this.props;
          return (0, s.jsxs)("div", {
            className: H.pageContainer,
            children: [
              (0, s.jsx)(M.default, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: e,
                expanded: !0,
                children: this.renderDefaultForm(!0),
              }),
              t && (0, s.jsx)(R.default, {}),
            ],
          });
        }
        renderGuildTemplate(e) {
          return (0, s.jsx)(B.default, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: r(this.props.authBoxClassName, H.horizontalAuthBox),
            children: () => [
              (0, s.jsx)(_.default, { guildTemplate: e }, "template"),
              this.renderDefaultForm(!1),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, s.jsx)(M.default, {
            style: { padding: 0 },
            children: (0, s.jsx)(p.MFASlides, {
              mfaFinish: this.handleTokenSubmitMFA,
              request: e,
              onEarlyClose: () => {
                c.default.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderIPAuthorization() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, s.jsx)(M.default, {
            tag: "form",
            className: e,
            children: (0, s.jsx)(g.default, {
              title: w.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
              subtitle:
                w.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format(
                  { onResendClick: this.handleResendCode }
                ),
              error: t,
              onSubmit: this.handleIPAuthorize,
              onCancel: f.default.loginReset,
            }),
          });
        }
        renderPasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, s.jsx)(M.default, {
            tag: "form",
            className: e,
            children: (0, s.jsx)(g.default, {
              title: w.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
              subtitle:
                w.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format(
                  { onResendClick: this.handleResendCode }
                ),
              error: t,
              onSubmit: this.handlePasswordReset,
              onCancel: f.default.loginReset,
            }),
          });
        }
        renderChooseAccount() {
          return (0, s.jsx)(A.default, {
            onDismiss: () => {
              this.setState(e => ({ ...e, dismissedChooseAccount: !0 }));
            },
          });
        }
        render() {
          let {
              authenticated: e,
              invite: t,
              guildTemplate: n,
              loginStatus: a,
              handoffAvailable: i,
            } = this.props,
            { checkingHandoff: r, redirecting: l } = this.state;
          if (l || r) return (0, s.jsx)(V, {});
          if (i) return this.renderHandOffAvailable();
          if (e && r) return this.renderHandOffContinue();
          switch (a) {
            case j.LoginStates.LOGGING_IN_MFA_SMS:
            case j.LoginStates.MFA_SMS_STEP:
            case j.LoginStates.LOGGING_IN_MFA:
            case j.LoginStates.MFA_STEP:
              return this.renderMFA();
            case j.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
            case j.LoginStates.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case j.LoginStates.PHONE_IP_AUTHORIZATION:
              return this.renderIPAuthorization();
            case j.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPasswordRecovery();
            case j.LoginStates.LOGGING_IN:
            case j.LoginStates.NONE:
            default:
              if (null != t && t.state === j.InviteStates.RESOLVING)
                return this.renderResolving();
              if (null != n) {
                if (n.state === F.GuildTemplateStates.RESOLVING)
                  return this.renderResolving();
                return this.renderGuildTemplate(n);
              }
              if (
                this.canShowChooseAccount &&
                !this.state.dismissedChooseAccount
              )
                return this.renderChooseAccount();
              return this.renderDefault();
          }
        }
        constructor(e) {
          var t, n;
          super(e),
            (this.handleAuthToken = async e => {
              await f.default.loginToken(e, !1),
                b.default.track(j.AnalyticEvents.LOGIN_SUCCESSFUL, {
                  source: j.LoginSuccessfulSources.QR_CODE,
                  login_source: this.loginSource,
                  gift_code_sku_id: this.giftCodeSKUId,
                  is_new_user: !1,
                });
            }),
            (this.setLoginRef = e => {
              this.loginRef = e;
            }),
            (this.setPasswordRef = e => {
              this.passwordRef = e;
            }),
            (this.setCodeRef = e => {
              this.codeRef = e;
            }),
            (this.getFullLogin = () => {
              let { loginPrefix: e, login: t } = this.state;
              return e + t;
            }),
            (this.renderError = e => {
              let { errors: t } = this.props;
              if (this.hasError(e)) {
                let n = t[e];
                return Array.isArray(n) ? n[0] : n;
              }
              return null;
            }),
            (this.handleLogin = e => {
              let { password: t, undelete: n } = this.state;
              null != e && e.preventDefault(),
                f.default.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: n,
                  source: this.loginSource,
                  giftCodeSKUId: this.giftCodeSKUId,
                  invite: this.props.invite,
                }),
                D.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE);
            }),
            (this.handleIPAuthorize = async e => {
              let { password: t, undelete: n } = this.state,
                s = this.getFullLogin();
              try {
                let { token: a } = await T.default.verifyPhone(s, e, !1);
                await f.default.authorizeIPAddress(a),
                  f.default.login({
                    login: s,
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                  }),
                  D.ComponentDispatch.dispatch(
                    j.ComponentActions.WAVE_EMPHASIZE
                  );
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            (this.handlePasswordReset = async e => {
              let { transitionTo: t } = this.props;
              this.setState({ phoneVerifyError: null });
              try {
                let { token: n } = await T.default.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1
                );
                t(j.Routes.RESET, {
                  search: (0, l.stringify)({ token: n, from_login: "true" }),
                });
              } catch (e) {
                null != e.body &&
                  null != e.body.message &&
                  this.setState({ phoneVerifyError: e.body.message });
              }
            }),
            (this.handleTokenSubmitMFA = e => {
              let { mfaType: t, data: n, ticket: s } = e;
              return (
                D.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE),
                f.default.loginMFAv2({
                  code: n,
                  ticket: s,
                  mfaType: t,
                  source: this.loginSource,
                  giftCodeSKUId: this.giftCodeSKUId,
                })
              );
            }),
            (this.handleForgotPassword = async e => {
              null != e && e.preventDefault(),
                null != this.loginRef && this.loginRef.focus();
              let t = this.getFullLogin();
              try {
                D.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE),
                  await f.default.forgotPassword(t),
                  (0, d.openModal)(e =>
                    (0, s.jsx)(d.ConfirmModal, {
                      header:
                        w.default.Messages
                          .EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                      confirmText: w.default.Messages.OKAY,
                      confirmButtonColor: M.Button.Colors.BRAND,
                      className: o.isMobile ? H.mobile : "",
                      ...e,
                      children: (0, s.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children:
                          w.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format(
                            { email: t }
                          ),
                      }),
                    })
                  );
              } catch {}
            }),
            (this.handleResendCode = () => {
              T.default.resendCode(this.getFullLogin());
            }),
            (this.handleReset = e => {
              null != e && e.preventDefault(),
                f.default.loginReset(),
                this.setState({
                  password: "",
                  loginPrefix: "",
                  login: "",
                  code: "",
                  smsCode: "",
                  undelete: !1,
                  checkingHandoff: !1,
                  redirecting: !1,
                });
            }),
            (this.handleCancelAccountDeletion = () => {
              this.setState({ undelete: !0 }, this.handleLogin);
            }),
            (this.handleGotoRegister = () => {
              let e;
              let { login: t } = this.state,
                {
                  invite: n,
                  giftCode: s,
                  guildTemplate: a,
                  location: i,
                  transitionTo: r,
                  redirectTo: o,
                } = this.props,
                u = null != i ? (0, l.parse)(i.search) : {};
              "" !== t && (u.email = t),
                null != n
                  ? ((u.mode = "register"), (e = j.Routes.INVITE(n.code)))
                  : null != s
                    ? ((u.mode = "register"), (e = j.Routes.GIFT_CODE(s.code)))
                    : null != a
                      ? (e = j.Routes.GUILD_TEMPLATE(a.code))
                      : null != o
                        ? ((e = j.Routes.REGISTER), (u.redirect_to = o))
                        : (e = j.Routes.REGISTER),
                f.default.loginReset(),
                r(e, { search: (0, l.stringify)(u) }),
                D.ComponentDispatch.dispatch(j.ComponentActions.WAVE_EMPHASIZE);
            });
          let a = null != e.location ? (0, l.parse)(e.location.search) : {};
          this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: "",
            login:
              null !==
                (n = null !== (t = a.email) && void 0 !== t ? t : a.login) &&
              void 0 !== n
                ? n
                : "",
            password: "",
            code: "",
            smsCode: "",
            undelete: !1,
            phoneVerifyError: null,
            dismissedChooseAccount: !1,
          };
        }
      }
      Y.defaultProps = { transitionTo: e => n.g.location.assign(e) };
      var K = function (e) {
        let t = (0, u.useStateFromStoresObject)(
          [v.default, L.default, O.default, S.default, N.default],
          () => ({
            authenticated: O.default.isAuthenticated(),
            handoffAvailable: v.default.isHandoffAvailable(),
            user: v.default.user,
            loginStatus: O.default.getLoginStatus(),
            mfaTicket: O.default.getMFATicket(),
            mfaSMS: O.default.getMFASMS(),
            mfaMethods: O.default.getMFAMethods(),
            maskedPhone: O.default.getMaskedPhone(),
            errors: O.default.getErrors(),
            defaultRoute: L.default.defaultRoute,
            country: N.default.getCountryCode(),
            hasLoggedInAccounts: S.default.getHasLoggedInAccounts(),
          })
        );
        return (0, s.jsx)(Y, { ...e, ...t });
      };
    },
    275744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n("222007"),
        n("506083");
      var s = n("37983"),
        a = n("884691"),
        i = n("730290"),
        r = n("803182"),
        l = n("446674"),
        o = n("437822"),
        u = n("697796"),
        d = n("524824"),
        c = n("393414"),
        f = n("271938"),
        h = n("291850"),
        E = n("49111"),
        g = n("724210");
      function m(e) {
        let t = a.useCallback(
            t => {
              if (
                (function (e) {
                  var t;
                  let n = (0, r.matchPath)(e, {
                    path: E.Routes.CHANNEL(":guildId", ":channelId"),
                  });
                  return (
                    (null == n
                      ? void 0
                      : null === (t = n.params) || void 0 === t
                        ? void 0
                        : t.channelId) ===
                      g.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                  );
                })(t)
              )
                c.replaceWith(t);
              else {
                var n;
                (null !== (n = e.transitionTo) && void 0 !== n
                  ? n
                  : c.transitionTo)(t);
              }
            },
            [e.transitionTo]
          ),
          { isAuthenticated: n, loginStatus: m } = (0,
          l.useStateFromStoresObject)([f.default], () => ({
            isAuthenticated: f.default.isAuthenticated(),
            loginStatus: f.default.getLoginStatus(),
          })),
          { location: _, redirectTo: p } = e,
          [R, S] = a.useState(n);
        function A(e) {
          let { handoffKey: t, handoffToken: n, handoffSource: s } = e;
          (0, u.handoffFromApp)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: s,
          }),
            S(!1);
        }
        return (a.useEffect(() => {
          if (null != _) {
            let { handoff_key: e, handoff_token: t } = (0, i.parse)(_.search);
            if (null != e && null != t) {
              let n =
                null != p
                  ? (0, d.getLoginHandoffSourceFromRedirectTo)(p)
                  : void 0;
              R
                ? o.default.logout(null).finally(() => {
                    A({ handoffKey: e, handoffToken: t, handoffSource: n });
                  })
                : A({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
          }
        }, []),
        R || m === E.LoginStates.LOGGING_IN)
          ? (0, s.jsx)(h.LoginSpinner, {})
          : (0, s.jsx)(h.default, { ...e, transitionTo: t });
      }
    },
    331085: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n("70102"),
        n("222007");
      var s,
        a,
        i,
        r,
        l = n("37983"),
        o = n("884691"),
        u = n("981980"),
        d = n("872717"),
        c = n("77078"),
        f = n("308289"),
        h = n("905949"),
        E = n("605250"),
        g = n("671278"),
        m = n("124969"),
        _ = n("659500"),
        p = n("274515"),
        R = n("158998"),
        S = n("49111"),
        A = n("843455"),
        T = n("782340"),
        N = n("858623"),
        I = n("890957");
      ((i = s || (s = {}))[(i.INITIALIZING = 0)] = "INITIALIZING"),
        (i[(i.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (i[(i.PENDING_FINISH = 2)] = "PENDING_FINISH"),
        (i[(i.PENDING_TICKET = 3)] = "PENDING_TICKET"),
        (i[(i.PENDING_LOGIN = 4)] = "PENDING_LOGIN"),
        (i[(i.FINISH = 5)] = "FINISH"),
        ((r = a || (a = {}))[(r.QR_CODE = 0)] = "QR_CODE"),
        (r[(r.CONFIRM = 1)] = "CONFIRM");
      let C = n("527826"),
        O = new E.default("LoginQRSocket");
      function v(e) {
        let { text: t = "" } = e,
          [n, s] = o.useState(!1);
        return (
          o.useEffect(() => {
            let e = new Image();
            (e.src = C), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
          }, [C]),
          o.useEffect(() => {
            n &&
              c.AccessibilityAnnouncer.announce(
                T.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL
              );
          }, [n]),
          (0, l.jsx)("div", {
            className: N.qrCodeContainer,
            children:
              "" !== t && n
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(g.default, {
                        className: N.qrCode,
                        size: 160,
                        text: t,
                      }),
                      (0, l.jsx)("div", {
                        className: N.qrCodeOverlay,
                        children: (0, l.jsx)("img", { src: C, alt: "" }),
                      }),
                    ],
                  })
                : (0, l.jsx)("div", {
                    className: N.qrCodeOverlay,
                    "aria-label":
                      T.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                    "aria-busy": !0,
                    children: (0, l.jsx)(c.Spinner, {
                      className: N.qrCode,
                      type: c.Spinner.Type.WANDERING_CUBES,
                      "aria-hidden": !0,
                    }),
                  }),
          })
        );
      }
      let L = e => {
        let { className: t, children: n } = e;
        return (0, l.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: t,
          children: n,
        });
      };
      function x(e) {
        let { state: t, cancel: n, errorMessage: s } = e;
        switch (t.step) {
          case 0:
          case 1:
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(v, {
                  text:
                    1 === t.step
                      ? "https://discord.com/ra/".concat(t.fingerprint)
                      : "",
                }),
                (0, l.jsx)(m.Title, {
                  className: I.marginBottom8,
                  children: T.default.Messages.LOGIN_WITH_QR,
                }),
                null != s
                  ? (0, l.jsx)(L, { children: s })
                  : (0, l.jsx)(m.SubTitle, {
                      children:
                        T.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format(),
                    }),
              ],
            });
          case 3:
          case 2: {
            let { user: e } = t;
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(f.default, {
                  className: N.qrAvatar,
                  user: e,
                  size: c.AvatarSizes.SIZE_120,
                  isMobile: !0,
                  status: A.StatusTypes.ONLINE,
                }),
                (0, l.jsx)(m.Title, {
                  className: I.marginBottom8,
                  children: T.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE,
                }),
                (0, l.jsx)(m.SubTitle, {
                  children: T.default.Messages.LOGIN_AS.format({
                    username: "".concat(R.default.getUserTag(e)),
                  }),
                }),
                (0, l.jsx)(c.Button, {
                  look: c.Button.Looks.BLANK,
                  color: c.Button.Colors.LINK,
                  size: c.Button.Sizes.MIN,
                  onClick: n,
                  className: N.startOverButton,
                  children: T.default.Messages.QR_CODE_LOGIN_START_OVER,
                }),
              ],
            });
          }
          case 4:
          case 5:
            return (0, l.jsx)(c.Spinner, {
              type: c.Spinner.Type.WANDERING_CUBES,
            });
        }
      }
      function M(e) {
        let { authTokenCallback: t } = e,
          {
            state: n,
            rsaKeyPair: s,
            cancel: a,
            handleFailure: i,
          } = (function (e) {
            let [t, n] = o.useState(0),
              [s, a] = o.useState(!1),
              [i, r] = o.useState({ step: 0 }),
              [l, d] = o.useState(null),
              c = (0, h.default)(),
              f = o.useMemo(() => new u.default(1500, 3e4), []),
              E = o.useRef();
            E.current = o.useCallback(() => {
              r({ step: 0 }),
                c
                  ? n(e => e + 1)
                  : (O.info(
                      "document is not visible, will defer reconnection when document becomes visible."
                    ),
                    a(!0));
            }, [c]);
            let g = o.useCallback(() => {
                (function (e) {
                  let { current: t } = e;
                  if (void 0 === t)
                    throw Error("tried to unwrap an undefined value.");
                  return t;
                })(E)();
              }, [E]),
              m = o.useCallback(() => {
                O.error(
                  "Could not complete QR code login, trying to restart with a new QR code."
                ),
                  r({ step: 0 }),
                  !f.pending && f.fail(g);
              }, [g, f]);
            return (
              o.useEffect(() => {
                c &&
                  s &&
                  0 === i.step &&
                  (O.info("reconnecting, now that document is visible"),
                  a(!1),
                  n(e => e + 1));
              }, [i, c, s, a]),
              o.useEffect(() => {
                let t = Date.now(),
                  n = () => "".concat(Date.now() - t, "ms"),
                  s = "wss:".concat(
                    window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT,
                    "/?v=2"
                  ),
                  a = new WebSocket(s);
                O.info("[0ms] connecting to ".concat(s));
                let i = e => O.info("[".concat(n(), "] ").concat(e)),
                  l = null,
                  o = null,
                  u = null,
                  c = null,
                  h = !0;
                function E() {
                  if (null != l) return l;
                  throw Error("No key pair set");
                }
                let R = () => {
                  h
                    ? ((h = !1), a.send(JSON.stringify({ op: "heartbeat" })))
                    : (i("heartbeat timeout, reconnecting."), a.close(), m());
                };
                return (
                  (a.onmessage = async t => {
                    let { data: n } = t,
                      s = JSON.parse(n);
                    switch (s.op) {
                      case "nonce_proof": {
                        let e = s.encrypted_nonce,
                          t = await (0, p.decryptNonce)(E(), e);
                        i("computed nonce proof"),
                          a.send(
                            JSON.stringify({ op: "nonce_proof", nonce: t })
                          );
                        return;
                      }
                      case "pending_remote_init": {
                        f.succeed(),
                          _.ComponentDispatch.dispatch(
                            S.ComponentActions.WAVE_EMPHASIZE
                          );
                        let e = await (0, p.publicKeyFingerprint)(E());
                        if (e !== s.fingerprint)
                          throw Error(
                            "bad fingerprint "
                              .concat(e, " !== ")
                              .concat(s.fingerprint)
                          );
                        i("handshake complete awaiting remote auth."),
                          r({ step: 1, fingerprint: e });
                        return;
                      }
                      case "pending_login": {
                        let e = s.ticket;
                        null == e && m(), r({ step: 4, ticket: e });
                        return;
                      }
                      case "pending_ticket": {
                        _.ComponentDispatch.dispatch(
                          S.ComponentActions.WAVE_EMPHASIZE
                        ),
                          i(
                            "remote auth handshake started, awaiting ticket/cancel."
                          );
                        let e = s.encrypted_user_payload,
                          t = await (0, p.decodeEncodedUserRecord)(E(), e);
                        r({ step: 3, user: t });
                        return;
                      }
                      case "pending_finish": {
                        _.ComponentDispatch.dispatch(
                          S.ComponentActions.WAVE_EMPHASIZE
                        ),
                          i(
                            "remote auth handshake started, awaiting finish/cancel."
                          );
                        let e = s.encrypted_user_payload,
                          t = await (0, p.decodeEncodedUserRecord)(E(), e);
                        r({ step: 2, user: t });
                        return;
                      }
                      case "finish": {
                        _.ComponentDispatch.dispatch(
                          S.ComponentActions.WAVE_EMPHASIZE
                        ),
                          i("remote auth handshake finished.");
                        let t = s.encrypted_token;
                        r({ step: 5 });
                        let n = await (0, p.decryptEncodedCiphertext)(E(), t);
                        e(n);
                        return;
                      }
                      case "cancel":
                        i("remote auth handshake cancelled."), g();
                        return;
                      case "hello": {
                        i(
                          "got hello, auth timeout=".concat(s.timeout_ms, "ms")
                        );
                        let e = s.heartbeat_interval;
                        c = setTimeout(
                          () => {
                            (c = null), R(), (u = setInterval(R, e));
                          },
                          Math.floor(e * Math.random())
                        );
                        return;
                      }
                      case "heartbeat_ack":
                        h = !0;
                    }
                  }),
                  (a.onopen = async () => {
                    (l = await (0, p.generateRsaKeyPair)()),
                      (o = await (0, p.serializePublicKey)(l));
                    let e = await (0, p.publicKeyFingerprint)(l);
                    i("connected, handshaking with fingerprint: ".concat(e)),
                      a.send(
                        JSON.stringify({ op: "init", encoded_public_key: o })
                      ),
                      d(l);
                  }),
                  (a.onclose = e => {
                    i(
                      "disconnected, code: "
                        .concat(e.code, " ")
                        .concat(e.reason)
                    ),
                      m();
                  }),
                  (a.onerror = e => {
                    i("disconnected, error: ".concat(JSON.stringify(e))), m();
                  }),
                  () => {
                    i("cleaning up"),
                      (a.onopen = () => null),
                      (a.onmessage = () => null),
                      (a.onclose = () => null),
                      (a.onerror = () => null),
                      a.close(1e3),
                      f.cancel(),
                      null != c && clearTimeout(c),
                      null != u && clearInterval(u);
                  }
                );
              }, [g, e, t, f, m]),
              { state: i, rsaKeyPair: l, cancel: g, handleFailure: m }
            );
          })(t),
          r = (function (e) {
            switch (e) {
              case 0:
              case 1:
                return 0;
              case 3:
              case 2:
              case 4:
              case 5:
                return 1;
            }
          })(n.step);
        return (
          o.useEffect(() => {
            4 === n.step &&
              null != n.ticket &&
              d.default
                .post({
                  url: S.Endpoints.REMOTE_AUTH_LOGIN,
                  body: { ticket: n.ticket },
                  oldFormErrors: !0,
                })
                .then(async e => {
                  if (null != s)
                    try {
                      let n = await (0, p.decryptEncodedCiphertext)(
                        s,
                        e.body.encrypted_token
                      );
                      t(n);
                    } catch (e) {
                      i();
                    }
                  else i();
                })
                .catch(() => {
                  i();
                });
          }, [n, t, s, i]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", { className: N.verticalSeparator }),
              (0, l.jsx)(c.Sequencer, {
                fillParent: !0,
                className: N.qrLogin,
                step: r,
                steps: [0, 1],
                children: (0, l.jsx)("div", {
                  className: N.qrLoginInner,
                  children: (0, l.jsx)(x, { state: n, cancel: a }),
                }),
              }),
            ],
          })
        );
      }
    },
    598489: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        r = n("124969"),
        l = n("316664");
      function o(e) {
        let { children: t, className: n, ...a } = e,
          o = t();
        return (0, s.jsx)(r.default, {
          ...a,
          className: i(n, l.container),
          contentClassName: l.content,
          children: o.map((e, t) =>
            (0, s.jsx)(
              "div",
              {
                className: l.column,
                style: { flexBasis: "".concat(100 / o.length, "%") },
                children: e,
              },
              t
            )
          ),
        });
      }
    },
    860959: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return el;
          },
        }),
        n("781738"),
        n("222007"),
        n("794252");
      var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("730290"),
        o = n("506838"),
        u = n("759843"),
        d = n("446674"),
        c = n("862337"),
        f = n("77078"),
        h = n("437822"),
        E = n("678916"),
        g = n("816540"),
        m = n("208266"),
        _ = n("428958"),
        p = n("307439"),
        R = n("765825"),
        S = n("715570"),
        A = n("486252"),
        T = n("378020"),
        N = n("980976"),
        I = n("534438"),
        C = n("946859"),
        O = n("791160"),
        v = n("434824"),
        L = n("770032"),
        x = n("165926"),
        M = n("25033"),
        y = n("255403"),
        b = n("2581"),
        D = n("644417"),
        U = n("697543"),
        G = n("79345"),
        P = n("447997"),
        k = n("970366"),
        B = n("271938"),
        j = n("350522"),
        F = n("476108"),
        w = n("124969"),
        H = n("980428"),
        W = n("599110"),
        V = n("659500"),
        Y = n("718517"),
        K = n("159885"),
        z = n("404432"),
        q = n("719451"),
        Z = n("598489"),
        Q = n("49111"),
        X = n("771848"),
        J = n("492397"),
        $ = n("56235"),
        ee = n("935583"),
        et = n("782340"),
        en = n("40571"),
        es = n("890957");
      d.default.initialize();
      let ea = /\.$/,
        ei = e =>
          Array.isArray(e)
            ? e
                .map(e => e.replace(ea, ""))
                .join(". ")
                .trim()
            : e;
      class er extends a.PureComponent {
        get registrationSource() {
          let { giftCode: e, guildTemplate: t, invite: n } = this.props;
          if (null != e) return "gift";
          if (null != t) return "guild_template";
          if (null != n) {
            if (null != n.guild) return "guild_invite";
            if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
          }
          return null;
        }
        hasConsent() {
          let { consentRequired: e } = this.props,
            { consent: t } = this.state;
          return null != e && t;
        }
        componentDidMount() {
          this.redirectIfAuthenticated(),
            R.default.trackExposure({ location: "0ba758_1" });
          let { giftCodeSKU: e, invite: t } = this.props;
          W.default.track(
            Q.AnalyticEvents.REGISTER_VIEWED,
            {
              location:
                null != t ? "Invite Register Page" : "Non-Invite Register Page",
              registration_source: this.registrationSource,
              ...(null != e ? (0, O.default)(e, !1, !1) : {}),
            },
            { flush: !0 }
          ),
            null == this.props.consentRequired &&
              h.default.getLocationMetadata(),
            (0, k.trackAppUIViewed)("register");
        }
        componentWillUnmount() {
          this._retryTimer.stop();
        }
        static getDerivedStateFromProps(e, t) {
          let { consentRequired: n } = e,
            { consentRequiredProp: s } = t;
          return null == s && null != n
            ? { consent: !n, consentRequiredProp: n }
            : { consentRequiredProp: n };
        }
        componentDidUpdate(e, t) {
          let {
              apiErrors: n,
              authenticated: s,
              isUnderage: a,
              invite: i,
              onChangeStep: r,
            } = this.props,
            { parsedDateOfBirth: l } = this.state;
          (e.apiErrors !== n || t.parsedDateOfBirth !== l) &&
            (this.hasError("email") || this.hasError("phone")
              ? null != this.emailRef && this.emailRef.focus()
              : this.hasError("username")
                ? null != this.usernameRef && this.usernameRef.focus()
                : this.hasError("global_name")
                  ? null != this.globalNameRef && this.globalNameRef.focus()
                  : this.hasError("password")
                    ? null != this.passwordRef && this.passwordRef.focus()
                    : null == this.state.parsedDateOfBirth
                      ? null != this.dateOfBirthRef.current &&
                        this.dateOfBirthRef.current.focus()
                      : this.hasError("retry_after") &&
                        "number" == typeof this.props.apiErrors.retry_after &&
                        (this.setState({ isRateLimited: !0 }),
                        this._retryTimer.start(
                          this.props.apiErrors.retry_after *
                            Y.default.Millis.SECOND,
                          () => {
                            this.setState({ isRateLimited: !1 });
                          }
                        ))),
            s &&
              !e.authenticated &&
              ((0, x.setNewUser)($.NewUserTypes.ORGANIC_REGISTERED),
              this.redirectIfAuthenticated());
          let o = X.RegistrationSteps.FULL;
          a || this.hasError("date_of_birth")
            ? (o = X.RegistrationSteps.AGE_GATE)
            : null != i &&
              (null != i.guild || null != i.channel) &&
              (o = X.RegistrationSteps.INVITE),
            r(o);
        }
        redirectIfAuthenticated() {
          let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
          e && t(null != n ? n : F.default.defaultRoute);
        }
        async handleRegister() {
          let {
              email: e,
              username: t,
              globalName: n,
              password: s,
              consent: a,
              parsedDateOfBirth: i,
            } = this.state,
            {
              invite: r,
              guildTemplate: l,
              giftCode: o,
              onRegister: u,
              usernameSuggestion: d,
              isMobileWebInviteRegistration: c,
            } = this.props,
            f = null != r ? r.code : null,
            h = null != o ? o.skuId : null,
            E = p.usePromoEmailConsentStore.getState(),
            g = (0, K.isNullOrEmpty)(d) ? null : t === d,
            m = J.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t;
          V.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
          try {
            c || null == r
              ? await (0, S.registerFull)({
                  email: e,
                  username: m,
                  globalName: n,
                  consent: a,
                  password: s,
                  invite: f,
                  usedUsernameSuggestion: g,
                  guildTemplateCode: null == l ? void 0 : l.code,
                  giftCodeSKUId: h,
                  birthday: i,
                  promoEmailConsent: E.required ? E : null,
                })
              : await (0, S.default)({
                  consent: a,
                  invite: f,
                  giftCodeSKUId: h,
                  usedUsernameSuggestion: g,
                  globalName: n,
                }),
              null == u || u();
          } catch (e) {}
        }
        hasError(e) {
          return null != this.props.apiErrors[e];
        }
        renderConsentComponents() {
          let { consent: e } = this.state,
            {
              consentRequired: t,
              registrationCopyExperimentConfig: {
                enableNewCopy: n,
                hasProminentCopy: a,
              },
            } = this.props,
            i = null,
            r = null;
          return (
            t
              ? (r = (0, s.jsx)(A.default, {
                  value: e,
                  onChange: e => this.setState({ consent: e }),
                  subText: et.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY,
                  }),
                }))
              : (i = (0, s.jsx)(w.SubText, {
                  isProminent: !!a,
                  className: es.marginTop8,
                  children: n
                    ? et.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                        buttonText: et.default.Messages.CONTINUE,
                        termsURL: Q.MarketingURLs.TERMS,
                        privacyURL: Q.MarketingURLs.PRIVACY,
                      })
                    : et.default.Messages.TERMS_PRIVACY.format({
                        termsURL: Q.MarketingURLs.TERMS,
                        privacyURL: Q.MarketingURLs.PRIVACY,
                      }),
                })),
            { subText: i, consentText: r }
          );
        }
        renderInviteResolving() {
          let { authBoxClassName: e } = this.props,
            t = e => {
              this.setState({ globalName: e });
            },
            n = this.state.globalName;
          return (0, s.jsxs)(w.default, {
            className: e,
            children: [
              (0, s.jsx)(q.InviteResolvingHeader, {}),
              (0, s.jsxs)(w.Block, {
                className: es.marginTop40,
                children: [
                  (0, s.jsx)(f.FormTitle, {
                    children: et.default.Messages.FORM_LABEL_USERNAME,
                  }),
                  (0, s.jsx)(f.Tooltip, {
                    text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                    position: "right",
                    color: f.Tooltip.Colors.BRAND,
                    children: e => {
                      let { onMouseEnter: a, onMouseLeave: i } = e;
                      return (0, s.jsx)(w.Input, {
                        autoFocus: !0,
                        className: es.marginBottom8,
                        name: "username",
                        value: n,
                        placeholder:
                          et.default.Messages.FORM_PLACEHOLDER_USERNAME,
                        onChange: t,
                        onMouseEnter: a,
                        onMouseLeave: i,
                      });
                    },
                  }),
                  (0, s.jsx)(w.Button, {
                    className: es.marginTop20,
                    disabled: !0,
                    children: et.default.Messages.CONTINUE,
                  }),
                  (0, s.jsx)(w.SubText, {
                    disabled: !0,
                    className: es.marginTop8,
                    children: et.default.Messages.TERMS_PRIVACY.format({
                      termsURL: Q.MarketingURLs.TERMS,
                      privacyURL: Q.MarketingURLs.PRIVACY,
                    }),
                  }),
                  J.CONFERENCE_MODE_ENABLED
                    ? null
                    : (0, s.jsx)(w.Button, {
                        look: w.Button.Looks.LINK,
                        color: w.Button.Colors.LINK,
                        disabled: !0,
                        className: es.marginTop20,
                        children: et.default.Messages.ALREADY_HAVE_ACCOUNT,
                      }),
                ],
              }),
            ],
          });
        }
        renderInviteHeader() {
          let { invite: e } = this.props;
          return (null == e ? void 0 : e.stage_instance) != null &&
            null != e.guild
            ? (0, s.jsx)(I.default, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, s.jsx)(T.GuildScheduledEventInviteHeader, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, s.jsx)(q.default, { invite: e });
        }
        renderInviteButton() {
          let { invite: e, registering: t, consentRequired: n } = this.props,
            { consent: a } = this.state,
            i = w.Button.Colors.BRAND,
            r = et.default.Messages.CONTINUE;
          return (
            (null == e ? void 0 : e.stage_instance) != null &&
              ((i = w.Button.Colors.GREEN),
              (r = et.default.Messages.INSTANT_INVITE_ACCEPT_STAGE)),
            (0, s.jsx)(f.Tooltip, {
              text:
                !a && n
                  ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                  : null,
              children: e =>
                (0, s.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, s.jsx)(w.Button, {
                    type: "submit",
                    submitting: t,
                    disabled: !this.hasConsent(),
                    color: i,
                    children: r,
                  }),
                }),
            })
          );
        }
        renderInvite() {
          let {
              invite: e,
              authBoxClassName: t,
              apiErrors: { username: n, global_name: a },
            } = this.props,
            { subText: i, consentText: r } = this.renderConsentComponents(),
            l =
              (null == e ? void 0 : e.stage_instance) != null ||
              (null == e ? void 0 : e.guild_scheduled_event) != null,
            o = e => {
              this.setState({ globalName: e });
            },
            u = this.state.globalName;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)(w.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: t,
                children: [
                  this.renderInviteHeader(),
                  l ? (0, s.jsx)("div", { className: en.divider }) : null,
                  (0, s.jsxs)(w.Block, {
                    className: l ? void 0 : es.marginTop40,
                    children: [
                      (0, s.jsx)(f.FormTitle, {
                        error: ei(null != a ? a : n),
                        children: et.default.Messages.DISPLAY_NAME,
                      }),
                      (0, s.jsx)(f.Tooltip, {
                        text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                        position: "right",
                        color: f.Tooltip.Colors.BRAND,
                        children: e => {
                          let { onMouseEnter: t, onMouseLeave: i } = e;
                          return (0, s.jsx)(w.Input, {
                            autoFocus: !0,
                            className: es.marginBottom8,
                            name: "global_name",
                            value: u,
                            placeholder:
                              et.default.Messages.FORM_PLACEHOLDER_USERNAME,
                            onChange: o,
                            error: null != n || null != a ? "" : null,
                            onMouseEnter: t,
                            onMouseLeave: i,
                          });
                        },
                      }),
                      (0, s.jsx)(f.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children:
                          et.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2,
                      }),
                      this.renderInviteButton(),
                      i,
                      r,
                      J.CONFERENCE_MODE_ENABLED
                        ? null
                        : (0, s.jsx)(w.Button, {
                            look: w.Button.Looks.LINK,
                            color: w.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: es.marginTop20,
                            children: et.default.Messages.ALREADY_HAVE_ACCOUNT,
                          }),
                    ],
                  }),
                ],
              }),
              null != e && l
                ? (0, s.jsx)(w.default, {
                    className: es.marginTop20,
                    children: (0, s.jsx)(I.StageInviteFooter, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count,
                    }),
                  })
                : null,
            ],
          });
        }
        renderErrorMessage() {
          let {
            apiErrors: { message: e },
          } = this.props;
          return "string" != typeof e
            ? null
            : (0, s.jsx)(w.SubText, {
                className: r(es.marginTop20, en.errorMessage),
                children: e,
              });
        }
        renderFull(e, t) {
          let {
              email: n,
              username: i,
              globalName: l,
              password: o,
              consent: u,
              parsedDateOfBirth: d,
              globalNameFocused: c,
              emailClientError: h,
              usernameClientError: E,
              passwordClientError: g,
              dateOfBirthClientError: _,
            } = this.state,
            {
              registering: p,
              consentRequired: R,
              isMobileWebInviteRegistration: S,
              uniqueUsernameRegistrationConfig: { suggestions: A },
              authBoxClassName: T,
              apiErrors: {
                email: I,
                username: C,
                global_name: O,
                password: v,
                date_of_birth: L,
              } = {},
              hasLoggedInAccounts: x,
              registrationCopyExperimentConfig: { hasCopyAboveButton: M },
            } = this.props,
            { subText: D, consentText: U } = this.renderConsentComponents(),
            G = this.renderErrorMessage(),
            k = (0, s.jsx)(f.Tooltip, {
              text:
                !u && R
                  ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                  : null,
              children: e =>
                (0, s.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, s.jsx)(w.Button, {
                    type: "submit",
                    submitting: p,
                    disabled: !this.hasConsent() || this.state.isRateLimited,
                    children: et.default.Messages.CONTINUE,
                  }),
                }),
            }),
            B = async () => {
              this.setState({ usernameFocused: !0 }),
                A &&
                  l.length > 0 &&
                  !b.default.wasRegistrationSuggestionFetched(l) &&
                  (await y.default.fetchSuggestionsRegistration(l));
            },
            j =
              null != e
                ? (0, s.jsx)(a.Fragment, { children: e() }, "custom-header")
                : (0, s.jsx)(
                    w.Title,
                    { children: et.default.Messages.REGISTER_TITLE },
                    "title"
                  ),
            F = (0, s.jsxs)(w.Block, {
              className: es.marginTop20,
              children: [
                (0, s.jsx)(w.Input, {
                  autoFocus: !0,
                  className: es.marginBottom20,
                  label: et.default.Messages.FORM_LABEL_EMAIL,
                  name: "email",
                  value: n,
                  onChange: e =>
                    this.setState({
                      email: e,
                      emailClientError:
                        0 === e.length ? et.default.Messages.REQUIRED : null,
                    }),
                  error: null != h ? h : ei(I),
                  type: "email",
                  setRef: e => {
                    this.emailRef = e;
                  },
                  required: !0,
                }),
                (0, s.jsx)(w.Input, {
                  label: et.default.Messages.DISPLAY_NAME,
                  className: es.marginBottom20,
                  name: "global_name",
                  value: l,
                  onChange: e => this.setState({ globalName: e }),
                  error: ei(O),
                  maxLength: ee.MAX_DISPLAY_NAME_LENGTH,
                  setRef: e => {
                    this.globalNameRef = e;
                  },
                  onFocus: () => this.setState({ globalNameFocused: !0 }),
                  onBlur: () => this.setState({ globalNameFocused: !1 }),
                }),
                (0, s.jsx)(P.default, {
                  show: c,
                  top: -12,
                  bottom: 20,
                  children: (0, s.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children:
                      et.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2,
                  }),
                }),
                (0, s.jsxs)("div", {
                  onBlur: () => this.setState({ usernameFocused: !1 }),
                  onFocus: B,
                  tabIndex: -1,
                  children: [
                    (0, s.jsx)(w.Input, {
                      label: et.default.Messages.FORM_LABEL_USERNAME,
                      className: es.marginBottom20,
                      name: "username",
                      value: i,
                      onChange: e => {
                        this.setState({
                          username: e.toLocaleLowerCase(),
                          usernameClientError:
                            0 === e.length
                              ? et.default.Messages.REQUIRED
                              : null,
                        });
                      },
                      error: null != E ? E : ei(C),
                      setRef: e => {
                        this.usernameRef = e;
                      },
                      required: !0,
                    }),
                    this.renderUsernameValidation(),
                  ],
                }),
                (0, s.jsx)(w.Input, {
                  label: et.default.Messages.FORM_LABEL_PASSWORD,
                  name: "password",
                  value: o,
                  onChange: e =>
                    this.setState({
                      password: e,
                      passwordClientError:
                        0 === e.length ? et.default.Messages.REQUIRED : null,
                    }),
                  error: null != g ? g : ei(v),
                  type: "password",
                  setRef: e => {
                    this.passwordRef = e;
                  },
                  required: !0,
                }),
                (0, s.jsx)(m.default, {
                  label: et.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                  wrapperClassName: es.marginTop20,
                  name: "date_of_birth",
                  onChange: this.handleBirthdayChange,
                  ref: this.dateOfBirthRef,
                  error: null != _ ? _ : ei(L),
                  value: d,
                  required: !0,
                }),
                M && D,
                (0, s.jsx)(N.default, {}),
                k,
                G,
                U,
                !M && D,
                J.CONFERENCE_MODE_ENABLED
                  ? null
                  : (0, s.jsx)(w.Button, {
                      look: S ? w.Button.Looks.FILLED : w.Button.Looks.LINK,
                      color: S ? w.Button.Colors.PRIMARY : w.Button.Colors.LINK,
                      onClick: this.handleGotoLogin,
                      className: es.marginTop20,
                      children: et.default.Messages.ALREADY_HAVE_ACCOUNT,
                    }),
              ],
            });
          return t
            ? (0, s.jsx)(Z.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: r(T, en.horizontalAuthBox),
                children: () => [
                  j,
                  (0, s.jsxs)(
                    "div",
                    {
                      className: en.flex,
                      children: [
                        (0, s.jsx)(w.Title, {
                          className: en.createAccountTemplateHeader,
                          children: et.default.Messages.REGISTER_TITLE,
                        }),
                        F,
                      ],
                    },
                    "register-title"
                  ),
                ],
              })
            : (0, s.jsxs)(w.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: T,
                children: [
                  x && !S
                    ? (0, s.jsx)(w.Button, {
                        onClick: this.handleGotoLogin,
                        look: w.Button.Looks.LINK,
                        color: w.Button.Colors.PRIMARY,
                        className: en.goBackButton,
                        children: (0, s.jsxs)("div", {
                          className: en.content,
                          children: [
                            (0, s.jsx)(H.default, {
                              width: 16,
                              height: 16,
                              className: en.caret,
                            }),
                            (0, s.jsx)(f.Text, {
                              variant: "text-md/normal",
                              children: et.default.Messages.AGE_GATE_GO_BACK,
                            }),
                          ],
                        }),
                      })
                    : null,
                  j,
                  F,
                ],
              });
        }
        render() {
          let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
          if (e || this.hasError("date_of_birth"))
            return (0, s.jsx)(g.default, {});
          let { invite: n, giftCode: a, guildTemplate: i } = this.props,
            r =
              null != n &&
              null == n.guild &&
              null == n.channel &&
              null != n.inviter;
          return null == n || r || t
            ? null != i
              ? this.renderFull(
                  () => (0, s.jsx)(v.default, { guildTemplate: i }),
                  !0
                )
              : null != a
                ? this.renderFull(() => (0, s.jsx)(z.default, { giftCode: a }))
                : null != n && r && n.state === Q.InviteStates.RESOLVED && !t
                  ? this.renderFull(() =>
                      (0, s.jsx)(q.default, { invite: n, isRegister: !0 })
                    )
                  : this.renderFull()
            : n.state === Q.InviteStates.RESOLVING
              ? this.renderInviteResolving()
              : this.renderInvite();
        }
        constructor(e) {
          var t;
          super(e),
            (this.dateOfBirthRef = a.createRef()),
            (this._retryTimer = new c.Timeout()),
            (this.handleGotoLogin = e => {
              let t;
              let { email: n } = this.state,
                {
                  giftCode: s,
                  guildTemplate: a,
                  invite: i,
                  location: r,
                  onLoginStart: o,
                  redirectTo: u,
                  transitionTo: d,
                  isMobileWebInviteRegistration: c,
                } = this.props;
              if (c) {
                null == o || o(e);
                return;
              }
              let f = null != r ? (0, l.parse)(r.search) : {};
              null != i
                ? (t = Q.Routes.INVITE_LOGIN(i.code))
                : null != s
                  ? (t = Q.Routes.GIFT_CODE_LOGIN(s.code))
                  : null != a
                    ? (t = Q.Routes.GUILD_TEMPLATE_LOGIN(a.code))
                    : null != u
                      ? ((t = Q.Routes.LOGIN), (f.redirect_to = u))
                      : ((t = Q.Routes.LOGIN), "" !== n && (f = { email: n })),
                h.default.loginReset(),
                d(t, { search: (0, l.stringify)(f) }),
                null == o || o(e),
                V.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
            }),
            (this.handleSubmit = e => {
              null == e || e.preventDefault();
              let {
                  email: t,
                  username: n,
                  password: s,
                  parsedDateOfBirth: a,
                } = this.state,
                { invite: i, consentRequired: r } = this.props;
              if (null !== r) {
                if (null == i) {
                  let e = !1;
                  if (
                    (0 === t.length &&
                      (this.setState({
                        emailClientError: et.default.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    0 === n.length &&
                      (this.setState({
                        usernameClientError: et.default.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    0 === s.length &&
                      (this.setState({
                        passwordClientError: et.default.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    null == a &&
                      (this.setState({
                        dateOfBirthClientError: et.default.Messages.REQUIRED,
                      }),
                      (e = !0)),
                    e)
                  )
                    return;
                }
                this.handleRegister();
              }
            }),
            (this.handleBirthdayChange = e => {
              this.setState({ parsedDateOfBirth: e }),
                null != e && this.setState({ dateOfBirthClientError: null });
            }),
            (this.renderUsernameValidation = () => {
              let {
                  username: e,
                  globalName: t,
                  usernameFocused: n,
                } = this.state,
                {
                  usernameSuggestion: a,
                  uniqueUsernameRegistrationConfig: { livecheckEnabled: i },
                } = this.props;
              return (0, s.jsx)(eo, {
                username: e,
                suggestion: a,
                livecheckEnabled: i,
                globalName: t,
                isUsernameFocused: n,
                onClickSuggestion: () => {
                  null != this.usernameRef && this.usernameRef.focus(),
                    null != a && a.length > 0 && this.setState({ username: a });
                },
              });
            });
          let n = null != e.location ? (0, l.parse)(e.location.search) : {};
          this.state = {
            email: null !== (t = n.email) && void 0 !== t ? t : "",
            username: "",
            globalName: "",
            password: "",
            parsedDateOfBirth: null,
            emailClientError: null,
            usernameClientError: null,
            passwordClientError: null,
            dateOfBirthClientError: null,
            consent: !e.consentRequired,
            consentRequiredProp: e.consentRequired,
            isRateLimited: !1,
            globalNameFocused: !1,
            usernameFocused: !1,
          };
        }
      }
      function el(e) {
        let t = (0, d.useStateFromStoresObject)(
            [j.default, B.default, E.default, M.default, L.default],
            () => ({
              consentRequired: j.default.getAuthenticationConsentRequired(),
              registering:
                B.default.getRegisterStatus() ===
                Q.RegistrationStates.REGISTERING,
              apiErrors: B.default.getErrors(),
              authenticated: B.default.isAuthenticated(),
              isUnderage: E.default.isUnderageAnonymous(),
              country: M.default.getCountryCode(),
              hasLoggedInAccounts: L.default.getHasLoggedInAccounts(),
            })
          ),
          n = (0, U.useUURegistrationExperiment)(),
          i = (0, d.useStateFromStores)([b.default], () =>
            b.default.registrationUsernameSuggestion()
          ),
          [r, l] = a.useState(X.RegistrationSteps.FULL);
        return (
          (0, _.default)(
            {
              type: u.ImpressionTypes.VIEW,
              name: u.ImpressionNames.USER_REGISTRATION,
              properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: r,
              },
            },
            {},
            [r]
          ),
          (0, s.jsx)(er, {
            onChangeStep: e => l(e),
            registrationCopyExperimentConfig: R.default.getCurrentConfig(
              { location: "0ba758_2" },
              { autoTrackExposure: !1 }
            ),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t,
          })
        );
      }
      function eo(e) {
        let t,
          {
            username: n,
            suggestion: a,
            globalName: i,
            livecheckEnabled: r,
            isUsernameFocused: l,
            onClickSuggestion: u,
          } = e,
          d = (0, G.useUsernameStatus)(n, r, !0),
          c = r && n.length > 0;
        return (
          (t = c
            ? (0, o.match)(d)
                .with(
                  { type: D.NameValidationState.ERROR, message: o.P.select() },
                  e =>
                    (0, s.jsx)(f.Text, {
                      className: en.messageNegative,
                      variant: "text-sm/normal",
                      children: e,
                    })
                )
                .with(
                  {
                    type: D.NameValidationState.AVAILABLE,
                    message: o.P.select(),
                  },
                  e =>
                    (0, s.jsx)(f.Text, {
                      className: en.messagePositive,
                      variant: "text-sm/normal",
                      children: e,
                    })
                )
                .otherwise(() =>
                  (0, s.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children:
                      et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID,
                  })
                )
            : null != a && a.length > 0 && i.length > 0
              ? (0, s.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: et.default.Messages.UU_REGISTER_SUGGESTION.format({
                    suggestion: a,
                    nameOnClick: u,
                  }),
                })
              : (0, s.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children:
                    et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID,
                })),
          (0, s.jsx)(P.default, {
            show:
              (c &&
                (null == d ? void 0 : d.type) ===
                  D.NameValidationState.ERROR) ||
              l,
            top: -12,
            bottom: 20,
            children: t,
          })
        );
      }
      er.defaultProps = {
        giftCodeResolved: !1,
        transitionTo: e => n.g.location.assign(e),
      };
    },
    905949: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var s = n("884691");
      function a() {
        return (
          "undefined" == typeof document ||
          "visible" === document.visibilityState
        );
      }
      function i() {
        let [e, t] = (0, s.useState)(a());
        return (
          (0, s.useEffect)(() => {
            function e() {
              t(a());
            }
            return (
              window.addEventListener("visibilitychange", e),
              () => {
                window.removeEventListener("visibilitychange", e);
              }
            );
          }, [t]),
          e
        );
      }
    },
    26772: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var s = n("872717"),
        a = n("913144"),
        i = n("437822"),
        r = n("697796"),
        l = n("524824"),
        o = n("72177"),
        u = n("599110"),
        d = n("316272"),
        c = n("49111");
      function f(e, t) {
        u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
          authenticated: e,
          handoff_source: t,
        });
      }
      class h extends d.default {
        _initialize() {
          a.default.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            a.default.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
        }
        _terminate() {
          a.default.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            a.default.unsubscribe(
              "BROWSER_HANDOFF_FROM_APP",
              this.handleHandoff
            );
        }
        handleHandoff(e) {
          let {
            handoffKey: t,
            handoffToken: n,
            fingerprint: a,
            handoffSource: o,
          } = e;
          null != n
            ? s.default
                .post({
                  url: c.Endpoints.HANDOFF_EXCHANGE,
                  body: { key: t, handoff_token: n },
                })
                .then(
                  e => {
                    let { body: t } = e;
                    (0, r.handoffSetUser)(t.user),
                      i.default.loginToken(t.token, !1),
                      f(!0, o);
                  },
                  e => {
                    if (
                      (null != a && f(!1, o),
                      i.default.setFingerprint(a),
                      (0, r.handoffEnd)(),
                      o === l.LoginHandoffSource.ROLE_SUBSCRIPTION)
                    ) {
                      var t;
                      u.default.track(
                        c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE,
                        {
                          reason:
                            null !== (t = e.message) && void 0 !== t
                              ? t
                              : e.text,
                          handoff_source: o,
                        }
                      );
                    }
                  }
                )
            : null != a
              ? (i.default.setFingerprint(a), f(!1, o), (0, r.handoffEnd)())
              : (i.default.setFingerprint(a), (0, r.handoffUnavailable)());
        }
        constructor(...e) {
          super(...e),
            (this.handleEnd = e => {
              let { handoffToken: t, fingerprint: n } = e,
                s = o.default.key;
              null != s && o.default.isHandoffAvailable()
                ? this.handleHandoff({
                    handoffKey: s,
                    handoffToken: t,
                    fingerprint: n,
                    handoffSource: void 0,
                  })
                : (i.default.setFingerprint(null), (0, r.handoffUnavailable)());
            });
        }
      }
      var E = new h();
    },
    2021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        i = n("90915"),
        r = n("266491");
      class l extends a.Component {
        render() {
          let {
              children: e,
              location: t,
              history: n,
              staticContext: l,
              match: o,
              ...u
            } = this.props,
            d = null,
            c = null;
          return (
            a.Children.forEach(e, e => {
              if (null == d && a.isValidElement(e)) {
                let { component: s, render: r, ...o } = e.props,
                  u = o.path || o.from;
                null !=
                  (d =
                    null != u
                      ? (0, i.matchPath)(t.pathname, { ...o, path: u })
                      : null) &&
                  ((o = {
                    ...o,
                    key: u,
                    location: t,
                    match: d,
                    history: n,
                    staticContext: l,
                  }),
                  null != s
                    ? (c = a.createElement(s, o))
                    : null != r && (c = r(o)));
              }
            }),
            (0, s.jsx)(r.default, { ...u, children: c })
          );
        }
      }
      var o = (0, i.withRouter)(l);
    },
    731109: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          submitDateOfBirth: function () {
            return u;
          },
          preventUnderageRegistration: function () {
            return d;
          },
          logoutUnderageNewUser: function () {
            return c;
          },
        });
      var s = n("872717"),
        a = n("913144"),
        i = n("395724"),
        r = n("599110"),
        l = n("586391"),
        o = n("49111");
      function u(e, t) {
        return (
          (0, i.default)(e, t),
          r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: t,
            action: l.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
          }),
          s.default
            .patch({
              url: o.Endpoints.ME,
              oldFormErrors: !0,
              body: { date_of_birth: e.format("YYYY-MM-DD") },
            })
            .then(e => {
              let n = e.body;
              a.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
                r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                  source: t,
                  action: l.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function d(e) {
        a.default.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action:
              l.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function c(e) {
        a.default.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action: l.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
          });
      }
    },
    678916: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("160679"),
        a = n("446674"),
        i = n("913144"),
        r = n("773336"),
        l = n("586391");
      let o = null,
        u = "underage";
      class d extends a.default.Store {
        isUnderageAnonymous() {
          if (r.isPlatformEmbedded) {
            if (null != o && o + l.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now())
              return !0;
          } else {
            let e = s.parse(document.cookie)[u];
            return null != e;
          }
          return !1;
        }
      }
      d.displayName = "AgeGateStore";
      var c = new d(i.default, {
        AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
          (o = Date.now()), (document.cookie = "".concat(u, "=1;path=/"));
        },
        LOGIN_SUCCESS: function () {
          (o = null), (document.cookie = "".concat(u, "=1;path=/;max-age=0"));
        },
      });
    },
    816540: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("77078"),
        i = n("393414"),
        r = n("124969"),
        l = n("701909"),
        o = n("49111"),
        u = n("782340"),
        d = n("168500");
      let c = () => (0, i.transitionTo)(o.Routes.LOGIN);
      var f = e => {
        let { authBoxClassName: t, underageMessage: i } = e;
        return (0, s.jsxs)(r.default, {
          className: t,
          children: [
            (0, s.jsx)("img", { alt: "", src: n("803452"), className: d.img }),
            (0, s.jsx)(r.Title, {
              className: d.title,
              children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER,
            }),
            (0, s.jsx)(r.SubTitle, {
              className: d.subtitle,
              children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                underageMessage:
                  null != i
                    ? i
                    : u.default.Messages
                        .AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                helpURL: l.default.getArticleURL(o.HelpdeskArticles.AGE_GATE),
              }),
            }),
            (0, s.jsx)(a.Button, {
              fullWidth: !0,
              onClick: c,
              children: u.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN,
            }),
          ],
        });
      };
    },
    208266: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007"),
        n("424973");
      var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("866227"),
        o = n.n(l),
        u = n("77078"),
        d = n("414943"),
        c = n("782340"),
        f = n("283764");
      let h = o().localeData().months(),
        E = Array.from(Array(31).keys()).map(e => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        g = Array.from(Array(12).keys()).map(e => ({
          value: e + 1,
          label: h[e],
        })),
        m = /[a-zA-Z0-9]/;
      function _(e) {
        let { options: t, selectOption: n, children: i } = e,
          [r, l] = a.useState("");
        a.useEffect(() => {
          if ("" !== r) {
            let e = setTimeout(() => l(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [r, l]);
        let o = a.useCallback(
          e => {
            if (m.test(e.key)) {
              let s = "".concat(r).concat(e.key.toLowerCase()),
                a = t.find(e => e.label.toLowerCase().startsWith(s));
              null != a && n(a.value), l(s);
            }
          },
          [n, l, r, t]
        );
        return (0, s.jsx)("div", { onKeyDown: o, children: i });
      }
      function p() {
        let e = o().localeData().longDateFormat("L"),
          t = e.indexOf("D"),
          n = e.indexOf("M"),
          s = e.indexOf("Y");
        return (
          (-1 === t || -1 === n || -1 === s) && ((t = 0), (n = 1), (s = 2)),
          [
            { index: t, type: "day" },
            { index: n, type: "month" },
            { index: s, type: "year" },
          ].sort((e, t) => (e.index < t.index ? -1 : 1))
        );
      }
      let R = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: i,
            onChange: l,
            onPopulated: h,
            error: m,
            autoFocus: R,
            required: S,
          } = e,
          {
            day: A,
            setDay: T,
            month: N,
            setMonth: I,
            year: C,
            setYear: O,
          } = (function (e) {
            let t = null,
              n = null,
              s = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (s = e.year()));
            let [i, r] = a.useState(t),
              [l, o] = a.useState(n),
              [u, d] = a.useState(s);
            return {
              day: i,
              setDay: r,
              month: l,
              setMonth: o,
              year: u,
              setYear: d,
            };
          })(n),
          v = a.useMemo(
            () =>
              null != A && null != N && null != C
                ? o("".concat(A, "/").concat(N, "/").concat(C), "DD/MM/YYYY")
                : null,
            [A, N, C]
          );
        a.useEffect(() => {
          l((null == v ? void 0 : v.isValid()) ? v : null);
        }, [v, l]);
        let L = m;
        null != v &&
          !v.isValid() &&
          (L = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let x = (function () {
            let e = new Date().getFullYear(),
              t = a.useRef(
                Array.from(Array(150).keys()).map(t => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }))
              );
            return (
              a.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map(t => ({
                  value: e - t - 3,
                  label: "".concat(e - t - 3),
                }));
              }, [e]),
              t.current
            );
          })(),
          [M, y] = a.useState(R ? 0 : -1),
          b = a.useRef(null),
          D = a.useRef(null),
          U = a.useRef(null),
          G = a.useMemo(p, []),
          P = a.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = G[M]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = b.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = D.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (s = U.current) || void 0 === s || s.focus();
            }
          }, [M, b, D, U, G]);
        a.useEffect(() => {
          setTimeout(P, 500);
        }, []),
          a.useEffect(() => {
            if (M >= G.length) {
              null == h || h();
              return;
            }
            P();
          }, [M, P]);
        let k = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = G[e];
          switch (t) {
            case "day":
              k.push({
                key: "day",
                input: (0, s.jsx)(_, {
                  options: E,
                  selectOption: T,
                  children: (0, s.jsx)(d.default, {
                    ref: b,
                    className: f.inputDay,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: E,
                    value: A,
                    onChange: t => {
                      let { value: n } = t;
                      T(n), y(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              k.push({
                key: "month",
                input: (0, s.jsx)(_, {
                  options: g,
                  selectOption: I,
                  children: (0, s.jsx)(d.default, {
                    ref: D,
                    className: f.inputMonth,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: g,
                    value: N,
                    onChange: t => {
                      let { value: n } = t;
                      I(n), y(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              k.push({
                key: "year",
                input: (0, s.jsx)(_, {
                  options: x,
                  selectOption: O,
                  children: (0, s.jsx)(d.default, {
                    ref: U,
                    className: f.inputYear,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: x,
                    value: C,
                    onChange: t => {
                      let { value: n } = t;
                      O(n), y(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, s.jsxs)("fieldset", {
          className: r(f.container, i),
          children: [
            (0, s.jsx)(u.FormTitle, {
              tag: "legend",
              required: S,
              error: L,
              children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, s.jsx)("div", {
              className: f.inputs,
              children: k.map((e, t) => {
                let { key: n, input: a } = e;
                return (0, s.jsx)(
                  "div",
                  { tabIndex: t + 1, className: f[n], children: a },
                  n
                );
              }),
            }),
          ],
        });
      });
      var S = R;
    },
    524824: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LoginHandoffSource: function () {
            return a;
          },
          getLoginHandoffSourceFromRedirectTo: function () {
            return o;
          },
        });
      var s,
        a,
        i = n("361572"),
        r = n("49111"),
        l = n("724210");
      function o(e) {
        let t = decodeURIComponent(e),
          n = (0, i.tryParseChannelPath)(t);
        return null != n &&
          n.channelId === l.StaticChannelRoute.ROLE_SUBSCRIPTIONS
          ? "role_subscription"
          : t ===
              r.Routes.SETTINGS(
                r.UserSettingsSections.SUBSCRIPTIONS,
                "role-subscriptions"
              )
            ? "role_subscription_setting"
            : void 0;
      }
      ((s = a || (a = {})).ROLE_SUBSCRIPTION = "role_subscription"),
        (s.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting");
    },
    771848: function (e, t, n) {
      "use strict";
      var s, a, i, r;
      n.r(t),
        n.d(t, {
          RegistrationSteps: function () {
            return a;
          },
        }),
        ((i = s || (s = {})).VIEWED = "viewed"),
        (i.SUBMITTED = "submitted"),
        (i.RESEND_CODE = "resend_code"),
        (i.INPUT_ERROR = "input_error"),
        (i.RESPONSE_ERROR = "response_error"),
        (i.SUCCESS = "success"),
        ((r = a || (a = {})).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify");
    },
    765825: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var s = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2022-04_registration_copy_updates",
        label: "Registration Copy Updates",
        defaultConfig: {
          enableNewCopy: !1,
          hasCopyAboveButton: !1,
          hasProminentCopy: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Continue / Copy Above Button / High Prominence Copy",
            config: {
              enableNewCopy: !0,
              hasCopyAboveButton: !0,
              hasProminentCopy: !0,
            },
          },
          {
            id: 2,
            label: "Continue / Copy Below Button / High Prominence Copy",
            config: {
              enableNewCopy: !0,
              hasCopyAboveButton: !1,
              hasProminentCopy: !0,
            },
          },
          {
            id: 3,
            label: "Continue / Copy Above Button / Normal Prominence Copy",
            config: {
              enableNewCopy: !0,
              hasCopyAboveButton: !0,
              hasProminentCopy: !1,
            },
          },
        ],
      });
    },
    395724: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var s = n("866227"),
        a = n.n(s),
        i = n("599110"),
        r = n("49111");
      function l(e, t) {
        i.default.track(r.AnalyticEvents.AGE_GATE_SUBMITTED, {
          dob: 18 > a().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
          dob_day: e.date(),
          dob_month: e.month() + 1,
          dob_year: e.year(),
          source: { section: t },
        });
      }
    },
    715570: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
          registerFull: function () {
            return m;
          },
        });
      var s = n("866227"),
        a = n.n(s),
        i = n("759843"),
        r = n("913144"),
        l = n("599417"),
        o = n("731109"),
        u = n("271938"),
        d = n("599110"),
        c = n("840707"),
        f = n("395724"),
        h = n("49111"),
        E = n("586391");
      function g(e) {
        let { invite: t = null, giftCodeSKUId: n = null, ...s } = e;
        return m({ ...s, invite: t, giftCodeSKUId: n });
      }
      function m(e) {
        let {
          email: t,
          phoneToken: n,
          username: s,
          globalName: g,
          consent: m,
          password: _,
          guildTemplateCode: p,
          birthday: R,
          invite: S = null,
          giftCodeSKUId: A = null,
          multiStep: T = !1,
          promoEmailConsent: N = null,
          usedUsernameSuggestion: I = null,
        } = e;
        return (
          r.default.dispatch({ type: "REGISTER", birthday: T ? R : null }),
          null != R &&
            ((0, f.default)(R, h.AnalyticsSections.REGISTER),
            d.default.track(h.AnalyticEvents.AGE_GATE_ACTION, {
              source: E.AgeGateSource.REGISTER,
              action: E.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
            }),
            !(function (e) {
              let t;
              let n = a().diff(e, "years");
              !(n < 13) &&
                ((t =
                  n >= 13 && n <= 17
                    ? "13-17"
                    : n >= 18 && n <= 22
                      ? "18-22"
                      : "23+"),
                d.default.track(h.AnalyticEvents.USER_AGE_SUBMITTED, {
                  age_bucket: t,
                }));
            })(R)),
          c.default
            .post({
              url: h.Endpoints.REGISTER,
              body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: g,
                password: _,
                invite: S,
                consent: m,
                phone_token: n,
                date_of_birth: null == R ? void 0 : R.format("YYYY-MM-DD"),
                gift_code_sku_id: A,
                guild_template_code: p,
                promotional_email_opt_in: null == N ? void 0 : N.checked,
              },
              trackedActionData: {
                event: i.NetworkActionNames.USER_REGISTER,
                properties: {
                  invite_code: S,
                  used_username_suggestion: I,
                  promotional_email_opt_in: null == N ? void 0 : N.checked,
                  promotional_email_pre_checked:
                    null == N ? void 0 : N.preChecked,
                  was_unique_username: !0,
                },
              },
            })
            .then(
              e => {
                r.default.dispatch({
                  type: "REGISTER_SUCCESS",
                  token: e.body.token,
                }),
                  d.default.track(h.AnalyticEvents.AGE_GATE_ACTION, {
                    source: E.AgeGateSource.REGISTER,
                    action: E.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
                  });
              },
              e => {
                let t = new l.default(e);
                throw (
                  (r.default.dispatch({ type: "REGISTER_FAILURE", error: t }),
                  null != t.getFieldErrors("date_of_birth") &&
                    o.preventUnderageRegistration(E.AgeGateSource.REGISTER),
                  d.default.track(h.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
                    is_unique_username_registration: !0,
                    email_error_reason: t.getFirstFieldErrorMessage("email"),
                    phone_error_reason: t.getFirstFieldErrorMessage("phone"),
                    password_error_reason:
                      t.getFirstFieldErrorMessage("password"),
                    username_error_reason:
                      t.getFirstFieldErrorMessage("username"),
                    global_name_error_reason:
                      t.getFirstFieldErrorMessage("global_name"),
                    date_of_birth_error_reason:
                      t.getFirstFieldErrorMessage("date_of_birth"),
                  }),
                  e)
                );
              }
            )
        );
      }
    },
    486252: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        i = n.n(a),
        r = n("77078"),
        l = n("145131"),
        o = n("124969"),
        u = n("803230"),
        d = n("890957");
      function c(e) {
        let {
          value: t,
          onChange: n,
          subText: a,
          muted: c,
          marginTopStyle: f,
        } = e;
        return (0, s.jsx)(l.default, {
          className: null != f ? f : d.marginTop20,
          align: l.default.Align.CENTER,
          children: (0, s.jsx)(r.Checkbox, {
            value: t,
            type: r.Checkbox.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: u.checkbox,
            children: (0, s.jsx)(o.SubText, {
              className: i({ [u.subText]: !c }),
              children: a,
            }),
          }),
        });
      }
    },
    378020: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildScheduledEventInviteHeader: function () {
            return u;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("77078"),
        i = n("419830"),
        r = n("400271"),
        l = n("398886");
      function o(e) {
        let { channel: t } = e,
          n = (0, i.getSimpleChannelIconComponent)(t.type);
        return (0, s.jsxs)("div", {
          className: l.channelInfoContainer,
          children: [
            null != n ? (0, s.jsx)(n, { width: 20, height: 20 }) : null,
            (0, s.jsx)(a.Text, {
              className: l.channelInfoText,
              color: "none",
              variant: "text-sm/semibold",
              children: t.name,
            }),
          ],
        });
      }
      function u(e) {
        let { channel: t, guildScheduledEvent: n } = e;
        return (0, s.jsxs)("div", {
          className: l.container,
          children: [
            (0, s.jsx)(r.GuildEventStatus, {
              className: l.statusContainer,
              guildId: n.guild_id,
              guildEventId: n.id,
              eventPreview: n,
            }),
            (0, s.jsx)(r.GuildEventDetails, {
              name: n.name,
              description: n.description,
              guildId: n.guild_id,
            }),
            null != t && n.channel_id === t.id
              ? (0, s.jsx)(o, { channel: t })
              : null,
          ],
        });
      }
    },
    980976: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("307439"),
        i = n("486252"),
        r = n("782340"),
        l = n("890957");
      function o() {
        let { required: e, checked: t } = (0, a.usePromoEmailConsentStore)();
        return e
          ? (0, s.jsx)(i.default, {
              value: t,
              subText: r.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
              onChange: a.setPromoEmailConsentChecked,
              marginTopStyle: l.marginTop8,
              muted: !0,
            })
          : null;
      }
    },
    946859: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          formatUsername: function () {
            return a;
          },
        });
      var s = n("50885");
      async function a(e) {
        try {
          return (await s.default.getSetting("USERNAME_PREFIX", "")) + e;
        } catch (e) {}
        return e;
      }
    },
    672630: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("70102");
      var s = n("748820"),
        a = n("872717"),
        i = n("49111"),
        r = {
          generateNonce: function () {
            return (0, s.v4)();
          },
          createHandoffToken: async function e(e) {
            let {
              body: { handoff_token: t },
            } = await a.default.post({
              url: i.Endpoints.HANDOFF,
              body: { key: e },
              oldFormErrors: !0,
              retries: 1,
            });
            if (null != t) return t;
            throw Error("Missing handoff token!");
          },
        };
    },
    382236: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n("222007"),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("506083");
      var s,
        a,
        i = n("37983"),
        r = n("884691"),
        l = n("730290"),
        o = n("391679"),
        u = n("446674"),
        d = n("872717"),
        c = n("95410"),
        f = n("77078"),
        h = n("913144"),
        E = n("437822"),
        g = n("229353"),
        m = n("271938"),
        _ = n("599110"),
        p = n("718517"),
        R = n("672630"),
        S = n("49111"),
        A = n("201763");
      let T = "mweb_handoff_nonce",
        N = "mweb_handoff_nonce_expiration",
        I = 1 * p.default.Millis.MINUTE;
      ((a = s || (s = {})).NONCE_MISSING = "nonce_missing"),
        (a.NONCE_EXPIRED = "nonce_expired"),
        (a.NULL_HANDOFF_TOKEN = "deep_link_failed"),
        (a.HANDOFF_EXCHANGE = "handoff_exchange");
      let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        v = () => {
          c.default.remove(T), c.default.remove(N);
        };
      var L = () => {
        let e = (0, u.useStateFromStores)([m.default], () =>
            m.default.getFingerprint()
          ),
          { fingerprint: t, handoff_token: n } = (0, l.parse)(
            window.location.search
          ),
          s = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
          a = null != s ? s : null !== e ? e : void 0;
        r.useEffect(() => {
          null !== s &&
            e !== s &&
            h.default.dispatch({ type: "FINGERPRINT", fingerprint: s });
        }, [s, e]);
        let [p, L] = r.useState(null),
          x = r.useCallback(
            e => {
              L(e),
                _.default.track(
                  S.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE,
                  { reason: e, fingerprint: (0, o.maybeExtractId)(a) },
                  { fingerprint: a }
                );
            },
            [L, a]
          ),
          M = c.default.get(T);
        if (
          ("null" === n && null === p && x("deep_link_failed"),
          null != n &&
            "null" !== n &&
            null == M &&
            null === p &&
            x("nonce_missing"),
          r.useEffect(() => {
            if (null != M) {
              let e = c.default.get(N);
              (null == e || Date.now() >= e) && (x("nonce_expired"), v());
            }
          }, [M, x]),
          r.useEffect(() => {
            null != n &&
              "null" !== n &&
              null != M &&
              null == p &&
              d.default
                .post({
                  url: S.Endpoints.HANDOFF_EXCHANGE,
                  body: { key: M, handoff_token: n },
                })
                .then(e => E.default.loginToken(e.body.token, !1))
                .then(() => {
                  _.default.track(S.AnalyticEvents.LOGIN_SUCCESSFUL, {
                    source: S.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                    is_new_user: !1,
                    fingerprint: (0, o.maybeExtractId)(a),
                  });
                  let e = new URL(window.location.href),
                    t = new URLSearchParams(e.search);
                  t.delete("handoff_token"),
                    t.delete("fingerprint"),
                    (e.search = t.toString()),
                    window.history.pushState(null, "", e);
                })
                .catch(() => {
                  x("handoff_exchange");
                })
                .finally(() => {
                  v();
                });
          }, [n, M, p, a, x]),
          null == a)
        )
          return null;
        let y = (() => {
            if (null == p)
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1,
                  (0, i.jsx)("br", {}),
                  g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2,
                ],
              });
            if (O.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
            if (C.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
          })(),
          b = null != p && O.has(p);
        return b
          ? (0, i.jsx)("div", {
              className: A.errorContainer,
              children: (0, i.jsx)(f.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: y,
              }),
            })
          : (0, i.jsxs)("div", {
              className: A.container,
              children: [
                (0, i.jsx)(f.Text, {
                  variant: "text-sm/semibold",
                  children: y,
                }),
                (0, i.jsx)(f.Button, {
                  look: f.Button.Looks.INVERTED,
                  color: f.Button.Colors.BRAND_NEW,
                  onClick: () => {
                    let e = R.default.generateNonce();
                    c.default.set(T, e), c.default.set(N, Date.now() + I);
                    let t = new URL(S.MOBILE_WEB_HANDOFF_DEEP_LINK),
                      n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let s = new URLSearchParams();
                    s.set(
                      "redirect",
                      encodeURIComponent(
                        window.location.pathname + n.toString()
                      )
                    ),
                      s.set("key", e),
                      s.set("fingerprint", a),
                      (t.search = s.toString()),
                      _.default.track(
                        S.AnalyticEvents.DEEP_LINK_CLICKED,
                        {
                          fingerprint: (0, o.maybeExtractId)(a),
                          source: "mobile_web_handoff",
                          destination: S.MOBILE_WEB_HANDOFF_DEEP_LINK,
                        },
                        { fingerprint: a, flush: !0 }
                      ),
                      (window.location.href = t.toString());
                  },
                  children: (0, i.jsx)(f.Text, {
                    className: A.buttonText,
                    variant: "text-sm/semibold",
                    children: g.MOBILE_WEB_HANDOFF_BUTTON_TEXT,
                  }),
                }),
              ],
            });
      };
    },
    724554: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("759843"),
        i = n("77078"),
        r = n("428958"),
        l = n("124969"),
        o = n("851460"),
        u = n("782340"),
        d = n("61585");
      function c(e) {
        let { onDismiss: t } = e;
        return (
          (0, r.default)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
          }),
          (0, s.jsxs)(l.default, {
            className: d.chooseAccountAuthBox,
            children: [
              (0, s.jsx)(l.Title, {
                children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT,
              }),
              (0, s.jsx)(i.Text, {
                className: d.chooseAccountHelpText,
                variant: "text-md/normal",
                color: "header-secondary",
                children:
                  u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER,
              }),
              (0, s.jsx)(o.default, {
                actionText: u.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                onAction: e => {
                  e === o.MultiAccountActionType.LOGIN_REQUIRED && t();
                },
              }),
              (0, s.jsx)("div", {
                className: d.actions,
                children: (0, s.jsx)(i.Button, {
                  className: d.chooseAccountButton,
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  onClick: t,
                  size: i.Button.Sizes.MEDIUM,
                  children: (0, s.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children:
                      u.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON,
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    255403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var s = n("759843"),
        a = n("872717"),
        i = n("913144"),
        r = n("448993"),
        l = n("599110"),
        o = n("840707"),
        u = n("210898"),
        d = n("856368"),
        c = n("697543"),
        f = n("49111"),
        h = n("782340");
      n("2581");
      var E = {
        resetSuggestions: () =>
          i.default.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if ((0, c.hasRegistrationUsernameSuggestions)()) {
            i.default.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var n;
              let s = await a.default.get({
                url: f.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                s.ok &&
                (null === (n = s.body) || void 0 === n ? void 0 : n.username) !=
                  null
              )
                return i.default.dispatch({
                  type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                  suggestion: s.body,
                  source: e,
                });
            } catch (e) {
              return;
            }
          }
        },
        async fetchSuggestions(e) {
          if ((0, d.isInPomeloSuggestionsExperiment)())
            try {
              var t;
              i.default.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let n = await a.default.get({
                url: f.Endpoints.POMELO_SUGGESTIONS,
                timeout: e,
              });
              if (
                n.ok &&
                (null === (t = n.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return i.default.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: n.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, n;
          let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let E =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? h.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
              : t.includes("..")
                ? h.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                : t.length < 2 || t.length > 32
                  ? h.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != E)
            return (
              l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                reason: E,
                username_error: !0,
                location: a,
                one_click_flow: c,
              }),
              i.default.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: E,
              })
            );
          if ((0, u.getPomeloAttempt)())
            try {
              let t = await o.default.post({
                url: d
                  ? f.Endpoints.POMELO_ATTEMPT_UNAUTHED
                  : f.Endpoints.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: s.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: a,
                  one_click_flow: c,
                }),
                i.default.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (o) {
              let t = new r.APIError(o),
                s =
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : void 0;
              l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                reason: s,
                username_error: !0,
                location: a,
                one_click_flow: c,
              }),
                i.default.dispatch({
                  username: e,
                  type: "POMELO_ATTEMPT_FAILURE",
                  error:
                    null != t.status && t.status < 500 && 401 !== t.status
                      ? s
                      : void 0,
                  statusCode: t.status,
                  retryAfter: t.retryAfter,
                });
            }
        },
        async createPomelo(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await o.default.post({
              body: e,
              url: f.Endpoints.POMELO_CREATE,
              trackedActionData: {
                event: s.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
            });
          return (
            i.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n.body }),
            n.body
          );
        },
      };
    },
    210898: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getPomeloAttempt: function () {
            return i;
          },
        });
      var s = n("862205");
      let a = (0, s.createExperiment)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          a.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 }
          ).enabled;
    },
    947962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePomeloDebounceDelay: function () {
            return i;
          },
        });
      var s = n("862205");
      let a = (0, s.createExperiment)({
          kind: "user",
          label: "Pomelo Debounce Delay",
          id: "2023-03_pomelo_debounce_delay",
          defaultConfig: { delay: 600 },
          treatments: [
            { id: 1, label: "600ms", config: { delay: 600 } },
            { id: 2, label: "700ms", config: { delay: 700 } },
            { id: 3, label: "800ms", config: { delay: 800 } },
            { id: 4, label: "900ms", config: { delay: 900 } },
            { id: 5, label: "1000ms", config: { delay: 1e3 } },
          ],
        }),
        i = () =>
          a.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    2581: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var s = n("693566"),
        a = n.n(s),
        i = n("446674"),
        r = n("913144"),
        l = n("718517");
      let o = { taken: null, error: void 0, rateLimited: !0 },
        u = {
          validations: new a({ max: 100, maxAge: 6e4 }),
          currentUsernameInvalid: !1,
          retryAfterTime: null,
          suggestions: {
            migration: {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            },
            registration: {
              suggestion: { username: void 0 },
              source: void 0,
              fetched: !1,
            },
          },
        };
      class d extends i.default.Store {
        isRateLimited() {
          return null != u.retryAfterTime && Date.now() < u.retryAfterTime;
        }
        validate(e) {
          let t = u.validations.get(e);
          return this.isRateLimited() && (null == t || t.rateLimited)
            ? o
            : this.isRateLimited() || null == t || !t.rateLimited
              ? t
              : void 0;
        }
        registrationUsernameSuggestion() {
          return u.suggestions.registration.suggestion.username;
        }
        usernameSuggestion() {
          return u.suggestions.migration.suggestion.username;
        }
        usernameSuggestionLoading() {
          return u.suggestions.migration.usernameSuggestionLoading;
        }
        isCurrentUsernameInvalid() {
          return u.currentUsernameInvalid;
        }
        wasRegistrationSuggestionFetched(e) {
          return (
            u.suggestions.registration.source === e &&
            u.suggestions.registration.fetched
          );
        }
        wasSuggestionsFetched() {
          return u.suggestions.migration.fetched;
        }
      }
      d.displayName = "PomeloStore";
      var c = new d(r.default, {
        POMELO_ATTEMPT_SUCCESS: function (e) {
          let { username: t, taken: n } = e;
          u.validations.set(t, { taken: n });
        },
        POMELO_ATTEMPT_FAILURE: function (e) {
          let { username: t, error: n, statusCode: s, retryAfter: a } = e;
          429 === s
            ? u.validations.set(
                t,
                { taken: null, error: n, rateLimited: !0 },
                (null != a ? a : 7) * l.default.Millis.SECOND
              )
            : u.validations.set(t, { taken: null, error: n }),
            null != a &&
              (u.retryAfterTime = Date.now() + a * l.default.Millis.SECOND);
        },
        POMELO_SUGGESTIONS_RESET: function () {
          (u.suggestions.migration = {
            suggestion: { username: void 0 },
            fetched: !1,
            usernameSuggestionLoading: !1,
          }),
            (u.suggestions.registration = {
              suggestion: { username: void 0 },
              source: void 0,
              fetched: !1,
            });
        },
        POMELO_SUGGESTIONS_SUCCESS: function (e) {
          let { suggestion: t } = e;
          (u.suggestions.migration = {
            suggestion: t,
            fetched: !0,
            usernameSuggestionLoading: !1,
          }),
            (null == t ? void 0 : t.invalid_current_username) === !0 &&
              (u.currentUsernameInvalid = !0);
        },
        POMELO_SUGGESTIONS_FETCH: function (e) {
          let { usernameSuggestionLoading: t } = e;
          u.suggestions.migration.usernameSuggestionLoading = t;
        },
        POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
          let { suggestion: t, source: n } = e;
          (u.suggestions.registration = {
            suggestion: t,
            source: n,
            fetched: !0,
          }),
            (null == t ? void 0 : t.username) != null &&
              u.validations.set(t.username, { taken: !1 });
        },
      });
    },
    856368: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isInPomeloSuggestionsExperiment: function () {
            return i;
          },
        });
      var s = n("862205");
      let a = (0, s.createExperiment)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          a.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 }
          ).enabled;
    },
    697543: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUURegistrationExperiment: function () {
            return i;
          },
          hasRegistrationUsernameSuggestions: function () {
            return r;
          },
        });
      var s = n("862205");
      let a = (0, s.createExperiment)({
          kind: "user",
          id: "2023-06_unique_username_registration",
          label: "Unique Username Registration",
          defaultConfig: { livecheckEnabled: !0, suggestions: !0 },
          treatments: [
            {
              id: 1,
              label:
                "Unique Username Registration enabled -livecheck -suggestions",
              config: { livecheckEnabled: !1, suggestions: !1 },
            },
            {
              id: 2,
              label:
                "Unique Username Registration enabled -livecheck +suggestions",
              config: { livecheckEnabled: !1, suggestions: !0 },
            },
            {
              id: 3,
              label:
                "Unique Username Registration enabled +livecheck -suggestions",
              config: { livecheckEnabled: !0, suggestions: !1 },
            },
            {
              id: 4,
              label:
                "Unique Username Registration enabled +livecheck +suggestions",
              config: { livecheckEnabled: !0, suggestions: !0 },
            },
          ],
        }),
        i = () =>
          a.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        r = () =>
          a.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 }
          ).suggestions;
    },
    44984: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUsernameLiveCheck: function () {
            return d;
          },
        });
      var s = n("884691"),
        a = n("917351"),
        i = n("65597"),
        r = n("255403"),
        l = n("947962"),
        o = n("2581"),
        u = n("415133");
      let d = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          c = (0, i.default)([o.default], () => o.default.validate(e), [e]),
          f = (0, i.default)([o.default], () => o.default.isRateLimited()),
          h = (0, l.usePomeloDebounceDelay)(),
          E = s.useMemo(
            () =>
              (0, a.debounce)(
                e =>
                  r.default.attemptPomelo(
                    e,
                    n ? "registration" : "modal",
                    n,
                    d
                  ),
                h
              ),
            [h, n, d]
          );
        return (
          s.useEffect(() => {
            t && !f && null == c && "" !== e && E(e);
          }, [t, f, c, e, E]),
          s.useMemo(
            () =>
              null != c ? (0, u.formatUsernameLiveCheckValidation)(c) : void 0,
            [c]
          )
        );
      };
    },
    79345: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUsernameStatus: function () {
            return i;
          },
        }),
        n("222007");
      var s = n("884691"),
        a = n("44984");
      let i = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0,
          r = (0, a.useUsernameLiveCheck)(e, t, n),
          [l, o] = s.useState(void 0);
        return (
          s.useEffect(() => {
            "" === e || e === i ? o(void 0) : null != r && o(r);
          }, [r, e, i]),
          l
        );
      };
    },
    447997: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        i = n("907002"),
        r = n("230606");
      let l = () => {
        let e = a.useRef(null),
          [t, n] = a.useState(0),
          s = a.useMemo(
            () =>
              new r.default(e => {
                let [t] = e;
                return n(t.contentRect.height);
              }),
            []
          );
        return (
          a.useLayoutEffect(
            () => (
              null != e.current && s.observe(e.current), () => s.disconnect()
            ),
            [s]
          ),
          { ref: e, height: t }
        );
      };
      function o(e) {
        let { show: t, children: n, top: a = 0, bottom: r = 0 } = e,
          { ref: o, height: u } = l(),
          d = (0, i.useSpring)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: {
              height: t ? u : 0,
              paddingBottom: t ? "".concat(r, "px") : "0px",
              marginTop: t ? "".concat(a, "px") : "0px",
            },
            config: { tension: 170, friction: 26 },
          }),
          c = (0, i.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
              duration: 200,
              easing: t ? e => e ** 4 : e => e * (2 - e),
            },
          });
        return (0, s.jsx)(i.animated.div, {
          style: {
            overflow: "hidden",
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop,
          },
          children: (0, s.jsx)(i.animated.div, {
            style: { opacity: c.opacity },
            ref: o,
            children: n,
          }),
        });
      }
    },
    671278: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QRCodeOverlaySizes: function () {
            return a;
          },
          QRCodeWithOverlay: function () {
            return f;
          },
          default: function () {
            return h;
          },
        });
      var s,
        a,
        i = n("37983"),
        r = n("884691"),
        l = n("82697"),
        o = n("679001");
      ((s = a || (a = {})).SIZE_40 = "SIZE_40"), (s.SIZE_60 = "SIZE_60");
      let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        d = n("527826");
      class c extends r.PureComponent {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, i.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: e,
            children: (0, i.jsx)(l.default, { value: t, level: "M", ...n }),
          });
        }
      }
      c.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
      class f extends r.PureComponent {
        render() {
          let { overlaySize: e } = this.props,
            t = u[null != e ? e : "SIZE_40"];
          return (0, i.jsxs)("div", {
            className: o.qrCodeContainer,
            children: [
              (0, i.jsx)(c, { ...this.props }),
              (0, i.jsx)("div", {
                className: o.qrCodeOverlay,
                children: (0, i.jsx)("img", {
                  className: o[t],
                  src: d,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      f.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
      var h = c;
    },
    274515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          generateRsaKeyPair: function () {
            return r;
          },
          serializePublicKey: function () {
            return l;
          },
          publicKeyFingerprint: function () {
            return o;
          },
          decryptEncodedCiphertext: function () {
            return h;
          },
          decryptNonce: function () {
            return E;
          },
          decodeEncodedUserRecord: function () {
            return g;
          },
        }),
        n("311790"),
        n("477657"),
        n("811875"),
        n("90301"),
        n("652153"),
        n("28797"),
        n("817884"),
        n("597349"),
        n("667536"),
        n("690341"),
        n("101997"),
        n("222007"),
        n("781738"),
        n("492311"),
        n("70102");
      var s = n("627445"),
        a = n.n(s),
        i = n("766274");
      function r() {
        return window.crypto.subtle.generateKey(
          {
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256",
          },
          !0,
          ["decrypt"]
        );
      }
      async function l(e) {
        a(null != e.publicKey, "public key cannot be null");
        let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
        return btoa(String.fromCharCode(...new Uint8Array(t)));
      }
      async function o(e) {
        a(null != e.publicKey, "public key cannot be null");
        let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
        return c(t);
      }
      function u(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e)))
          .replace(/\//g, "_")
          .replace(/\+/g, "-")
          .replace(/={1,2}$/, "");
      }
      function d(e) {
        return Uint8Array.from(atob(e), e => e.charCodeAt(0));
      }
      async function c(e) {
        let t = await window.crypto.subtle.digest({ name: "SHA-256" }, e);
        return u(t);
      }
      function f(e, t) {
        return (
          a(null != e.privateKey, "private key cannot be null"),
          window.crypto.subtle.decrypt(
            { name: "RSA-OAEP", hash: "SHA-256" },
            e.privateKey,
            t
          )
        );
      }
      async function h(e, t) {
        let n = new TextDecoder(),
          s = await f(e, d(t));
        return n.decode(s);
      }
      async function E(e, t) {
        let n = await f(e, d(t));
        return u(n);
      }
      async function g(e, t) {
        t = await h(e, t);
        let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
        if (null == n) throw Error("Invalid encoded user record.");
        let [, s, a, r, l] = n;
        return new i.default({
          id: s,
          discriminator: a,
          avatar: "0" === r ? null : r,
          username: l,
        });
      }
    },
  },
]);
//# sourceMappingURL=41747.f309b9bb3a6f2f4f1c8f.js.map

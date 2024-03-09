(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81726"],
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
            return g;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        r = n("483366"),
        l = n.n(r),
        i = n("458960"),
        o = n("394846"),
        u = n("769846"),
        d = n("77078"),
        c = n("159885"),
        f = n("26232");
      let E = (0, c.cssValueToNumber)(
          u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE
        ),
        h = { START: 0, END: 1 },
        _ = { friction: 10, tension: 130 };
      var g = function (e) {
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
            this.state.shouldAnimate ? this.animateTo(h.END, e) : e();
          }
          componentWillEnter(e) {
            this.state.shouldAnimate
              ? (clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => this.animateTo(h.END, e), 40)))
              : e();
          }
          componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(h.START, e) : e();
          }
          animateTo(e, t) {
            i.default.spring(this.anim, { toValue: e, ..._ }).start(t);
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
                  return (0, s.jsx)(i.default.div, {
                    style: this.getAnimatedStyle(n.enabled),
                    children: (0, s.jsx)(e, { ...this.props }),
                  });
                },
              }),
            });
          }
          constructor(...e) {
            super(...e),
              (this.anim = new i.default.Value(h.START)),
              (this.state = { shouldAnimate: !o.isMobile }),
              (this.handleResize = () => {
                let e = window.innerWidth > E;
                !this.state.shouldAnimate && e && this.anim.setValue(h.END),
                  this.setState({ shouldAnimate: e });
              }),
              (this.handleResizeDebounced = l(this.handleResize, 60));
          }
        };
      };
    },
    746040: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("394846"),
        o = n("77078"),
        u = n("2021"),
        d = n("393414"),
        c = n("725484"),
        f = n("554054"),
        E = n("159885"),
        h = n("528502"),
        _ = n("49111"),
        g = n("513680");
      let m = (0, E.cssValueToNumber)(g.responsiveWidthMobile),
        p = [
          _.Routes.LOGIN,
          _.Routes.LOGIN_HANDOFF,
          _.Routes.REGISTER,
          _.Routes.INVITE(""),
          _.Routes.GIFT_CODE(""),
          _.Routes.GUILD_TEMPLATE_LOGIN(""),
          _.Routes.GUILD_TEMPLATE(""),
          _.Routes.DISABLE_EMAIL_NOTIFICATIONS,
          _.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          _.Routes.BILLING_PREMIUM_SUBSCRIBE,
          _.Routes.BILLING_PAYMENT_SOURCES_CREATE,
          _.Routes.BILLING_PAYMENTS,
          _.Routes.BILLING_PREMIUM_SWITCH_PLAN,
          _.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          _.Routes.VERIFY,
          _.Routes.VERIFY_HUB_EMAIL,
          _.Routes.REJECT_IP,
          _.Routes.REJECT_MFA,
          _.Routes.AUTHORIZE_IP,
          _.Routes.AUTHORIZE_PAYMENT,
          _.Routes.RESET,
          _.Routes.HANDOFF,
          _.Routes.REPORT,
          _.Routes.REPORT_SECOND_LOOK,
        ];
      function I(e) {
        return p.some(t => e.startsWith(t));
      }
      class T extends a.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (I(e)) (0, d.transitionTo)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          I(e) ? (0, d.replaceWith)(e) : (window.location = e);
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
            className: g.characterBackground,
            children: (0, s.jsx)(o.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(c.default, {
                          show: !0,
                          className: l(g.logo),
                        }),
                        (0, s.jsx)(f.Splash, { splash: e, children: t }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(h.default, {
                          className: g.artwork,
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
          return e || i.isMobile || i.isTablet || t
            ? this.renderMobile()
            : this.renderDefault();
        }
        constructor(e) {
          super(e),
            (this.handleResize = () => {
              this.setState({ isMobileWidth: window.innerWidth <= m });
            }),
            (this.state = { isMobileWidth: window.innerWidth <= m });
        }
      }
      var N = T;
    },
    404432: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("446674"),
        o = n("77078"),
        u = n("299285"),
        d = n("210721"),
        c = n("65324"),
        f = n("697218"),
        E = n("10514"),
        h = n("552712"),
        _ = n("953109"),
        g = n("124969"),
        m = n("380186"),
        p = n("49111"),
        I = n("646718"),
        T = n("782340"),
        N = n("173494"),
        A = n("125047"),
        S = n("890957"),
        R = i.default.connectStores(
          [h.default, u.default, E.default, f.default],
          e => {
            let { giftCode: t } = e,
              n = h.default.get(t.skuId),
              { subscriptionPlanId: s } = t,
              a = null != s ? (0, m.getOrFetchSubscriptionPlan)(s) : null;
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
              gifter: r,
              sku: i,
              application: u,
              subscriptionPlan: f,
            } = e,
            E =
              null == r
                ? T.default.Messages.GIFT_CODE_AUTH_GIFTED
                : T.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                    username: r.username,
                  }),
            h = i.name;
          return (
            null != f &&
              (h = (
                f.interval === I.SubscriptionIntervalTypes.MONTH
                  ? T.default.Messages
                      .GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY
                  : T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY
              ).format({ skuName: i.name, intervalCount: f.intervalCount })),
            (0, s.jsxs)(a.Fragment, {
              children: [
                null != n.giftStyle
                  ? (0, s.jsx)(c.default, {
                      defaultAnimationState: d.AnimationState.LOOP,
                      giftStyle: n.giftStyle,
                      className: N.seasonalIcon,
                    })
                  : (0, s.jsx)(g.Avatar, {
                      src: null != r ? r.getAvatarURL(void 0, 100) : null,
                      size: o.AvatarSizes.DEPRECATED_SIZE_100,
                      className: S.marginBottom20,
                    }),
                null != t
                  ? (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(g.SubTitle, {
                          children: T.default.Messages.INVITE_MODAL_ERROR_TITLE,
                        }),
                        (0, s.jsx)(g.Title, { children: t }),
                      ],
                    })
                  : (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(g.SubTitle, { children: E }),
                        (0, s.jsxs)(g.Title, {
                          className: l(S.marginTop8, A.flexCenter),
                          children: [
                            i.productLine !== p.SKUProductLines.COLLECTIBLES &&
                              (0, s.jsx)(_.default, {
                                size: _.default.Sizes.MEDIUM,
                                className: N.applicationIcon,
                                game: u,
                                skuId: i.id,
                              }),
                            h,
                          ],
                        }),
                      ],
                    }),
              ],
            })
          );
        });
    },
    719451: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InviteResolvingHeader: function () {
            return S;
          },
          default: function () {
            return C;
          },
        }),
        n("70102");
      var s = n("37983"),
        a = n("884691"),
        r = n("446674"),
        l = n("77078"),
        i = n("770032"),
        o = n("653047"),
        u = n("233069"),
        d = n("813006"),
        c = n("766274"),
        f = n("697218"),
        E = n("953109"),
        h = n("580357"),
        _ = n("124969"),
        g = n("587974"),
        m = n("158998"),
        p = n("49111"),
        I = n("238055"),
        T = n("91366"),
        N = n("782340"),
        A = n("985551");
      let S = () =>
          (0, s.jsxs)(a.Fragment, {
            children: [
              (0, s.jsx)(_.Avatar, {
                src: null,
                size: l.AvatarSizes.DEPRECATED_SIZE_100,
                className: A.avatar,
              }),
              (0, s.jsx)(_.SubTitle, {
                children:
                  N.default.Messages
                    .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, s.jsx)(_.Title, {
                className: A.inviteResolvingGuildName,
                children: N.default.Messages.LOADING,
              }),
            ],
          }),
        R = e => {
          let { guild: t, user: n, application: a, compact: r } = e;
          if (null != a)
            return (0, s.jsx)(E.default, {
              className: A.appIcon,
              game: a,
              size: A.appIconSize,
            });
          if (null != n)
            return (0, s.jsx)(_.Avatar, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: l.AvatarSizes.SIZE_80,
              className: r ? A.compactAvatar : A.avatar,
            });
          if (null != t)
            return (0, s.jsx)(g.default, {
              mask: g.default.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: A.guildIcon,
              children: (0, s.jsx)(_.GuildIcon, {
                guild: t,
                size: _.GuildIcon.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      var C = e => {
        var t;
        let n,
          a,
          E,
          {
            invite: g,
            disableUser: S = !1,
            error: C,
            flatActivityCount: O = !1,
            isRegister: v = !1,
          } = e,
          { currentUser: L, multiAccounts: M } = (0,
          r.useStateFromStoresObject)([i.default, f.default], () => ({
            currentUser: f.default.getCurrentUser(),
            multiAccounts: i.default.getUsers(),
          }));
        if (null == g) return null;
        let x = null != g.guild ? new d.default(g.guild) : null,
          y =
            null != g.channel
              ? (0, u.createChannelRecordFromInvite)(g.channel)
              : null,
          D =
            null != g.target_application
              ? new o.default(g.target_application)
              : null,
          U = S || null == g.inviter ? null : new c.default(g.inviter),
          b =
            (null != g.approximate_member_count &&
              g.approximate_member_count > 100) ||
            (null != x && x.hasFeature(p.GuildFeatures.COMMUNITY)),
          P = !b && null != U,
          G = null,
          F = !1;
        if (null != x)
          (G =
            null == U
              ? N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: m.default.getFormattedName(U),
                })),
            g.target_type === T.InviteTargetTypes.STREAM &&
              null != g.target_user &&
              (G = N.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: m.default.getFormattedName(g.target_user),
              })),
            g.target_type === T.InviteTargetTypes.EMBEDDED_APPLICATION &&
              null != g.target_application &&
              (G =
                null != U
                  ? N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format(
                      { username: m.default.getFormattedName(U) }
                    )
                  : N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            P &&
              null == D &&
              (n = (0, s.jsx)(_.GuildIcon, {
                className: A.icon,
                guild: x,
                size: _.GuildIcon.Sizes.SMALL,
              })),
            (a = x.name),
            null != D &&
              ((a = D.name),
              (E = (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(_.SubTitle, {
                    className: A.appIn,
                    children: N.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, s.jsxs)("div", {
                    className: A.guildContainer,
                    children: [
                      (0, s.jsx)(_.GuildIcon, {
                        guild: x,
                        size: _.GuildIcon.Sizes.SMALL,
                      }),
                      (0, s.jsx)(l.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: A.appGuildName,
                        children: x.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != y) {
          if (null == U) throw Error("no inviter in group DM invite");
          let e = m.default.getFormattedName(U);
          null != y.name && "" !== y.name
            ? ((G = N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e,
              })),
              (a = y.name),
              null != y.icon &&
                (n = (0, s.jsx)(_.ChannelIcon, {
                  channel: y,
                  size: l.AvatarSizes.SIZE_32,
                })))
            : ((G =
                N.default.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM),
              (a = e));
        } else if (null != U) {
          let e = m.default.getFormattedName(U, !0);
          (a =
            N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
              { username: e }
            )),
            (F = !0),
            (E =
              null != C
                ? null
                : (0, s.jsx)(_.SubTitle, {
                    className: A.directInviteSubTitle,
                    children: v
                      ? N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format(
                          { username: e }
                        )
                      : N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format(
                          { username: e }
                        ),
                  }));
        }
        return (0, s.jsxs)("div", {
          className: A.container,
          children: [
            (0, s.jsx)(R, {
              application: D,
              guild: x,
              user: P ? U : null,
              compact: F,
            }),
            null != C
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(_.SubTitle, {
                      children: N.default.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, s.jsx)(_.Title, { children: C }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(_.SubTitle, { children: G }),
                    (0, s.jsxs)(_.Title, {
                      className: A.title,
                      children: [
                        null != x
                          ? (0, s.jsx)(h.default, {
                              guild: x,
                              className: A.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        a,
                      ],
                    }),
                  ],
                }),
            E,
            null != D ||
            F ||
            (null == g
              ? void 0
              : null === (t = g.guild) || void 0 === t
                ? void 0
                : t.id) === I.INVITE_ROUTING_HUB_GUILD_ID
              ? null
              : (0, s.jsx)(_.ActivityCount, {
                  className: A.activityCount,
                  online: g.approximate_presence_count,
                  total: g.approximate_member_count,
                  flat: O,
                }),
            M.length > 1 ? (0, s.jsx)(_.JoiningAs, { user: L }) : null,
          ],
        });
      };
    },
    291850: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LoginSpinner: function () {
            return Y;
          },
          default: function () {
            return K;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("730290"),
        o = n("394846"),
        u = n("446674"),
        d = n("77078"),
        c = n("913144"),
        f = n("437822"),
        E = n("697796"),
        h = n("524824"),
        _ = n("21572"),
        g = n("791160"),
        m = n("434824"),
        p = n("24287"),
        I = n("382236"),
        T = n("770032"),
        N = n("724554"),
        A = n("878720"),
        S = n("25033"),
        R = n("589252"),
        C = n("970366"),
        O = n("271938"),
        v = n("72177"),
        L = n("476108"),
        M = n("145131"),
        x = n("124969"),
        y = n("980428"),
        D = n("599110"),
        U = n("659500"),
        b = n("773336"),
        P = n("404432"),
        G = n("719451"),
        F = n("331085"),
        j = n("598489"),
        k = n("49111"),
        B = n("579033"),
        w = n("782340"),
        H = n("699177"),
        V = n("890957");
      function Y() {
        return (0, s.jsx)(x.default, { children: (0, s.jsx)(d.Spinner, {}) });
      }
      class W extends a.PureComponent {
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
          e && !t ? (0, E.handoffBegin)() : t && this.loginOrSSO(t, a, !0),
            D.default.track(
              k.AnalyticEvents.LOGIN_VIEWED,
              {
                location:
                  null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...(null != n ? (0, g.default)(n, !1, !1) : {}),
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
            var a, r, l;
            this.hasError("password")
              ? null === (a = this.passwordRef) || void 0 === a || a.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (r = this.loginRef) || void 0 === r || r.focus()
                : this.hasError("code") &&
                  (null === (l = this.codeRef) || void 0 === l || l.focus());
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
            ? (0, h.getLoginHandoffSourceFromRedirectTo)(a)
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
            a = null != e ? (0, i.parse)(e.search) : {};
          if ((delete a.redirect_to, null != n)) null != s ? s(n) : t(n);
          else if (null == a.service) t(k.Routes.APP);
          else {
            let e =
                window.location.protocol +
                window.GLOBAL_ENV.API_ENDPOINT +
                k.Endpoints.SSO,
              t = { ...a, token: O.default.getToken() };
            window.location = "".concat(e, "?").concat((0, i.stringify)(t));
          }
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderHandOffAvailable() {
          let { authBoxClassName: e } = this.props;
          return (0, s.jsxs)(x.default, {
            className: e,
            children: [
              (0, s.jsx)(x.AuthSpinner, {}),
              (0, s.jsx)(x.Title, {
                className: V.marginBottom8,
                children: w.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE,
              }),
              (0, s.jsx)(x.SubTitle, {
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
            : (0, s.jsxs)(x.default, {
                className: n,
                children: [
                  (0, s.jsx)(x.Avatar, {
                    src: e.getAvatarURL(void 0, 100),
                    size: d.AvatarSizes.DEPRECATED_SIZE_100,
                    className: V.marginBottom20,
                  }),
                  (0, s.jsx)(x.Title, {
                    className: V.marginBottom8,
                    children:
                      w.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                        name: e.toString(),
                      }),
                  }),
                  (0, s.jsx)(x.SubTitle, {
                    className: V.marginBottom40,
                    children: w.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY,
                  }),
                  (0, s.jsxs)(x.Block, {
                    children: [
                      (0, s.jsx)(x.Button, {
                        onClick: () => t(k.Routes.APP),
                        className: V.marginBottom8,
                        children:
                          w.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format(
                            { name: e.toString() }
                          ),
                      }),
                      (0, s.jsx)(x.Button, {
                        look: x.Button.Looks.LINK,
                        color: x.Button.Colors.LINK,
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
            t = this.props.loginStatus === k.LoginStates.ACCOUNT_DISABLED,
            n = t
              ? w.default.Messages.ACCOUNT_DISABLED_TITLE
              : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
            a = t
              ? w.default.Messages.ACCOUNT_DISABLED_DESCRIPTION
              : w.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
          return (0, s.jsx)(x.default, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, s.jsxs)(d.HeadingLevel, {
              component: (0, s.jsx)(x.Title, {
                className: V.marginBottom8,
                children: n,
              }),
              children: [
                (0, s.jsx)(x.SubTitle, {
                  className: V.marginBottom20,
                  children: a,
                }),
                (0, s.jsxs)(x.Block, {
                  children: [
                    (0, s.jsx)(x.Button, {
                      color: x.Button.Colors.BRAND,
                      type: "submit",
                      children: w.default.Messages._RETURN_TO_LOGIN,
                    }),
                    (0, s.jsx)("div", {
                      className: l(V.marginTop8, H.needAccount),
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
          return (0, s.jsxs)(x.default, {
            className: e,
            children: [
              (0, s.jsx)(G.InviteResolvingHeader, {}),
              (0, s.jsxs)(x.Block, {
                className: V.marginTop20,
                children: [
                  (0, s.jsx)(R.default, {
                    className: V.marginBottom20,
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
                  (0, s.jsx)(x.Input, {
                    className: V.marginBottom20,
                    label: w.default.Messages.FORM_LABEL_PASSWORD,
                    onChange: e => this.setState({ password: e }),
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, s.jsx)(x.Button, {
                    className: V.marginBottom8,
                    type: "submit",
                    disabled: !0,
                    children: w.default.Messages._LOGIN,
                  }),
                  (0, s.jsx)(x.Button, {
                    disabled: !0,
                    look: x.Button.Looks.LINK,
                    color: x.Button.Colors.LINK,
                    children: w.default.Messages.FORGOT_PASSWORD,
                  }),
                  (0, s.jsx)(x.Button, {
                    disabled: !0,
                    className: V.marginTop4,
                    look: x.Button.Looks.LINK,
                    color: x.Button.Colors.LINK,
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
              giftCode: r,
              loginStatus: i,
              country: o,
              showMobileWebHandoff: u,
              disableAutofocusOnDefaultForm: c,
            } = this.props,
            f = !this.hasError("email") && this.hasError("password"),
            E = (null == a ? void 0 : a.stage_instance) != null;
          return (
            (n =
              null == a || E
                ? null != r
                  ? (0, s.jsx)(P.default, { giftCode: r })
                  : (0, s.jsxs)("div", {
                      className: H.header,
                      children: [
                        (0, s.jsx)(
                          x.Title,
                          {
                            className: V.marginBottom8,
                            children: w.default.Messages.LOGIN_TITLE,
                          },
                          "title"
                        ),
                        !1 === (0, b.isAndroidWeb)()
                          ? (0, s.jsx)(
                              x.SubTitle,
                              { children: w.default.Messages.AUTH_LOGIN_BODY },
                              "subtitle"
                            )
                          : null,
                      ],
                    })
                : (0, s.jsx)(G.default, { invite: a })),
            (0, s.jsxs)(
              M.default,
              {
                direction: M.default.Direction.HORIZONTAL,
                align: M.default.Align.CENTER,
                children: [
                  (0, s.jsxs)("div", {
                    className: H.mainLoginContainer,
                    children: [
                      this.canShowChooseAccount &&
                        this.state.dismissedChooseAccount &&
                        (0, s.jsx)(x.Button, {
                          onClick: () => {
                            this.setState(e => ({
                              ...e,
                              dismissedChooseAccount: !1,
                            }));
                          },
                          look: x.Button.Looks.LINK,
                          color: x.Button.Colors.PRIMARY,
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
                        children: (0, s.jsxs)(x.Block, {
                          className: V.marginTop20,
                          children: [
                            (0, s.jsx)(R.default, {
                              alpha2: o.alpha2,
                              countryCode: o.code.split(" ")[0],
                              className: V.marginBottom20,
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
                            (0, s.jsx)(x.Input, {
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
                            (0, s.jsx)(x.Button, {
                              onClick: this.handleForgotPassword,
                              look: x.Button.Looks.LINK,
                              color: x.Button.Colors.LINK,
                              className: l(V.marginBottom20, V.marginTop4),
                              children: w.default.Messages.FORGOT_PASSWORD,
                            }),
                            (0, s.jsx)(x.Button, {
                              type: "submit",
                              submitting: i === k.LoginStates.LOGGING_IN,
                              color: E
                                ? x.Button.Colors.GREEN
                                : x.Button.Colors.BRAND,
                              className: V.marginBottom8,
                              children: E
                                ? w.default.Messages._LOGIN_STAGE
                                : w.default.Messages._LOGIN,
                            }),
                            (0, s.jsxs)("div", {
                              className: V.marginTop4,
                              children: [
                                (0, s.jsx)("span", {
                                  className: H.needAccount,
                                  children: w.default.Messages.NEED_ACCOUNT,
                                }),
                                (0, s.jsx)(x.Button, {
                                  onClick: this.handleGotoRegister,
                                  look: x.Button.Looks.LINK,
                                  color: x.Button.Colors.LINK,
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
                      ? (0, s.jsx)(F.default, {
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
              (0, s.jsx)(x.default, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: e,
                expanded: !0,
                children: this.renderDefaultForm(!0),
              }),
              t && (0, s.jsx)(I.default, {}),
            ],
          });
        }
        renderGuildTemplate(e) {
          return (0, s.jsx)(j.default, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: l(this.props.authBoxClassName, H.horizontalAuthBox),
            children: () => [
              (0, s.jsx)(m.default, { guildTemplate: e }, "template"),
              this.renderDefaultForm(!1),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, s.jsx)(x.default, {
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
          return (0, s.jsx)(x.default, {
            tag: "form",
            className: e,
            children: (0, s.jsx)(_.default, {
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
          return (0, s.jsx)(x.default, {
            tag: "form",
            className: e,
            children: (0, s.jsx)(_.default, {
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
          return (0, s.jsx)(N.default, {
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
              handoffAvailable: r,
            } = this.props,
            { checkingHandoff: l, redirecting: i } = this.state;
          if (i || l) return (0, s.jsx)(Y, {});
          if (r) return this.renderHandOffAvailable();
          if (e && l) return this.renderHandOffContinue();
          switch (a) {
            case k.LoginStates.LOGGING_IN_MFA_SMS:
            case k.LoginStates.MFA_SMS_STEP:
            case k.LoginStates.LOGGING_IN_MFA:
            case k.LoginStates.MFA_STEP:
              return this.renderMFA();
            case k.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
            case k.LoginStates.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case k.LoginStates.PHONE_IP_AUTHORIZATION:
              return this.renderIPAuthorization();
            case k.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPasswordRecovery();
            case k.LoginStates.LOGGING_IN:
            case k.LoginStates.NONE:
            default:
              if (null != t && t.state === k.InviteStates.RESOLVING)
                return this.renderResolving();
              if (null != n) {
                if (n.state === B.GuildTemplateStates.RESOLVING)
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
                D.default.track(k.AnalyticEvents.LOGIN_SUCCESSFUL, {
                  source: k.LoginSuccessfulSources.QR_CODE,
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
                U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE);
            }),
            (this.handleIPAuthorize = async e => {
              let { password: t, undelete: n } = this.state,
                s = this.getFullLogin();
              try {
                let { token: a } = await A.default.verifyPhone(s, e, !1);
                await f.default.authorizeIPAddress(a),
                  f.default.login({
                    login: s,
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                  }),
                  U.ComponentDispatch.dispatch(
                    k.ComponentActions.WAVE_EMPHASIZE
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
                let { token: n } = await A.default.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1
                );
                t(k.Routes.RESET, {
                  search: (0, i.stringify)({ token: n, from_login: "true" }),
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
                U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE),
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
                U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE),
                  await f.default.forgotPassword(t),
                  (0, d.openModal)(e =>
                    (0, s.jsx)(d.ConfirmModal, {
                      header:
                        w.default.Messages
                          .EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                      confirmText: w.default.Messages.OKAY,
                      confirmButtonColor: x.Button.Colors.BRAND,
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
              A.default.resendCode(this.getFullLogin());
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
                  location: r,
                  transitionTo: l,
                  redirectTo: o,
                } = this.props,
                u = null != r ? (0, i.parse)(r.search) : {};
              "" !== t && (u.email = t),
                null != n
                  ? ((u.mode = "register"), (e = k.Routes.INVITE(n.code)))
                  : null != s
                    ? ((u.mode = "register"), (e = k.Routes.GIFT_CODE(s.code)))
                    : null != a
                      ? (e = k.Routes.GUILD_TEMPLATE(a.code))
                      : null != o
                        ? ((e = k.Routes.REGISTER), (u.redirect_to = o))
                        : (e = k.Routes.REGISTER),
                f.default.loginReset(),
                l(e, { search: (0, i.stringify)(u) }),
                U.ComponentDispatch.dispatch(k.ComponentActions.WAVE_EMPHASIZE);
            });
          let a = null != e.location ? (0, i.parse)(e.location.search) : {};
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
      W.defaultProps = { transitionTo: e => n.g.location.assign(e) };
      var K = function (e) {
        let t = (0, u.useStateFromStoresObject)(
          [v.default, L.default, O.default, T.default, S.default],
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
            country: S.default.getCountryCode(),
            hasLoggedInAccounts: T.default.getHasLoggedInAccounts(),
          })
        );
        return (0, s.jsx)(W, { ...e, ...t });
      };
    },
    275744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007"),
        n("506083");
      var s = n("37983"),
        a = n("884691"),
        r = n("730290"),
        l = n("803182"),
        i = n("446674"),
        o = n("437822"),
        u = n("697796"),
        d = n("524824"),
        c = n("393414"),
        f = n("271938"),
        E = n("291850"),
        h = n("49111"),
        _ = n("724210");
      function g(e) {
        let t = a.useCallback(
            t => {
              if (
                (function (e) {
                  var t;
                  let n = (0, l.matchPath)(e, {
                    path: h.Routes.CHANNEL(":guildId", ":channelId"),
                  });
                  return (
                    (null == n
                      ? void 0
                      : null === (t = n.params) || void 0 === t
                        ? void 0
                        : t.channelId) ===
                      _.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
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
          { isAuthenticated: n, loginStatus: g } = (0,
          i.useStateFromStoresObject)([f.default], () => ({
            isAuthenticated: f.default.isAuthenticated(),
            loginStatus: f.default.getLoginStatus(),
          })),
          { location: m, redirectTo: p } = e,
          [I, T] = a.useState(n);
        function N(e) {
          let { handoffKey: t, handoffToken: n, handoffSource: s } = e;
          (0, u.handoffFromApp)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: s,
          }),
            T(!1);
        }
        return (a.useEffect(() => {
          if (null != m) {
            let { handoff_key: e, handoff_token: t } = (0, r.parse)(m.search);
            if (null != e && null != t) {
              let n =
                null != p
                  ? (0, d.getLoginHandoffSourceFromRedirectTo)(p)
                  : void 0;
              I
                ? o.default.logout(null).finally(() => {
                    N({ handoffKey: e, handoffToken: t, handoffSource: n });
                  })
                : N({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
          }
        }, []),
        I || g === h.LoginStates.LOGGING_IN)
          ? (0, s.jsx)(E.LoginSpinner, {})
          : (0, s.jsx)(E.default, { ...e, transitionTo: t });
      }
    },
    331085: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n("70102"),
        n("222007");
      var s,
        a,
        r,
        l,
        i = n("37983"),
        o = n("884691"),
        u = n("981980"),
        d = n("872717"),
        c = n("77078"),
        f = n("308289"),
        E = n("905949"),
        h = n("605250"),
        _ = n("671278"),
        g = n("124969"),
        m = n("659500"),
        p = n("274515"),
        I = n("158998"),
        T = n("49111"),
        N = n("843455"),
        A = n("782340"),
        S = n("858623"),
        R = n("890957");
      ((r = s || (s = {}))[(r.INITIALIZING = 0)] = "INITIALIZING"),
        (r[(r.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (r[(r.PENDING_FINISH = 2)] = "PENDING_FINISH"),
        (r[(r.PENDING_TICKET = 3)] = "PENDING_TICKET"),
        (r[(r.PENDING_LOGIN = 4)] = "PENDING_LOGIN"),
        (r[(r.FINISH = 5)] = "FINISH"),
        ((l = a || (a = {}))[(l.QR_CODE = 0)] = "QR_CODE"),
        (l[(l.CONFIRM = 1)] = "CONFIRM");
      let C = n("527826"),
        O = new h.default("LoginQRSocket");
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
                A.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL
              );
          }, [n]),
          (0, i.jsx)("div", {
            className: S.qrCodeContainer,
            children:
              "" !== t && n
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(_.default, {
                        className: S.qrCode,
                        size: 160,
                        text: t,
                      }),
                      (0, i.jsx)("div", {
                        className: S.qrCodeOverlay,
                        children: (0, i.jsx)("img", { src: C, alt: "" }),
                      }),
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: S.qrCodeOverlay,
                    "aria-label":
                      A.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                    "aria-busy": !0,
                    children: (0, i.jsx)(c.Spinner, {
                      className: S.qrCode,
                      type: c.Spinner.Type.WANDERING_CUBES,
                      "aria-hidden": !0,
                    }),
                  }),
          })
        );
      }
      let L = e => {
        let { className: t, children: n } = e;
        return (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: t,
          children: n,
        });
      };
      function M(e) {
        let { state: t, cancel: n, errorMessage: s } = e;
        switch (t.step) {
          case 0:
          case 1:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(v, {
                  text:
                    1 === t.step
                      ? "https://discord.com/ra/".concat(t.fingerprint)
                      : "",
                }),
                (0, i.jsx)(g.Title, {
                  className: R.marginBottom8,
                  children: A.default.Messages.LOGIN_WITH_QR,
                }),
                null != s
                  ? (0, i.jsx)(L, { children: s })
                  : (0, i.jsx)(g.SubTitle, {
                      children:
                        A.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format(),
                    }),
              ],
            });
          case 3:
          case 2: {
            let { user: e } = t;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.default, {
                  className: S.qrAvatar,
                  user: e,
                  size: c.AvatarSizes.SIZE_120,
                  isMobile: !0,
                  status: N.StatusTypes.ONLINE,
                }),
                (0, i.jsx)(g.Title, {
                  className: R.marginBottom8,
                  children: A.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE,
                }),
                (0, i.jsx)(g.SubTitle, {
                  children: A.default.Messages.LOGIN_AS.format({
                    username: "".concat(I.default.getUserTag(e)),
                  }),
                }),
                (0, i.jsx)(c.Button, {
                  look: c.Button.Looks.BLANK,
                  color: c.Button.Colors.LINK,
                  size: c.Button.Sizes.MIN,
                  onClick: n,
                  className: S.startOverButton,
                  children: A.default.Messages.QR_CODE_LOGIN_START_OVER,
                }),
              ],
            });
          }
          case 4:
          case 5:
            return (0, i.jsx)(c.Spinner, {
              type: c.Spinner.Type.WANDERING_CUBES,
            });
        }
      }
      function x(e) {
        let { authTokenCallback: t } = e,
          {
            state: n,
            rsaKeyPair: s,
            cancel: a,
            handleFailure: r,
          } = (function (e) {
            let [t, n] = o.useState(0),
              [s, a] = o.useState(!1),
              [r, l] = o.useState({ step: 0 }),
              [i, d] = o.useState(null),
              c = (0, E.default)(),
              f = o.useMemo(() => new u.default(1500, 3e4), []),
              h = o.useRef();
            h.current = o.useCallback(() => {
              l({ step: 0 }),
                c
                  ? n(e => e + 1)
                  : (O.info(
                      "document is not visible, will defer reconnection when document becomes visible."
                    ),
                    a(!0));
            }, [c]);
            let _ = o.useCallback(() => {
                (function (e) {
                  let { current: t } = e;
                  if (void 0 === t)
                    throw Error("tried to unwrap an undefined value.");
                  return t;
                })(h)();
              }, [h]),
              g = o.useCallback(() => {
                O.error(
                  "Could not complete QR code login, trying to restart with a new QR code."
                ),
                  l({ step: 0 }),
                  !f.pending && f.fail(_);
              }, [_, f]);
            return (
              o.useEffect(() => {
                c &&
                  s &&
                  0 === r.step &&
                  (O.info("reconnecting, now that document is visible"),
                  a(!1),
                  n(e => e + 1));
              }, [r, c, s, a]),
              o.useEffect(() => {
                let t = Date.now(),
                  n = () => "".concat(Date.now() - t, "ms"),
                  s = "wss:".concat(
                    window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT,
                    "/?v=2"
                  ),
                  a = new WebSocket(s);
                O.info("[0ms] connecting to ".concat(s));
                let r = e => O.info("[".concat(n(), "] ").concat(e)),
                  i = null,
                  o = null,
                  u = null,
                  c = null,
                  E = !0;
                function h() {
                  if (null != i) return i;
                  throw Error("No key pair set");
                }
                let I = () => {
                  E
                    ? ((E = !1), a.send(JSON.stringify({ op: "heartbeat" })))
                    : (r("heartbeat timeout, reconnecting."), a.close(), g());
                };
                return (
                  (a.onmessage = async t => {
                    let { data: n } = t,
                      s = JSON.parse(n);
                    switch (s.op) {
                      case "nonce_proof": {
                        let e = s.encrypted_nonce,
                          t = await (0, p.decryptNonce)(h(), e);
                        r("computed nonce proof"),
                          a.send(
                            JSON.stringify({ op: "nonce_proof", nonce: t })
                          );
                        return;
                      }
                      case "pending_remote_init": {
                        f.succeed(),
                          m.ComponentDispatch.dispatch(
                            T.ComponentActions.WAVE_EMPHASIZE
                          );
                        let e = await (0, p.publicKeyFingerprint)(h());
                        if (e !== s.fingerprint)
                          throw Error(
                            "bad fingerprint "
                              .concat(e, " !== ")
                              .concat(s.fingerprint)
                          );
                        r("handshake complete awaiting remote auth."),
                          l({ step: 1, fingerprint: e });
                        return;
                      }
                      case "pending_login": {
                        let e = s.ticket;
                        null == e && g(), l({ step: 4, ticket: e });
                        return;
                      }
                      case "pending_ticket": {
                        m.ComponentDispatch.dispatch(
                          T.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r(
                            "remote auth handshake started, awaiting ticket/cancel."
                          );
                        let e = s.encrypted_user_payload,
                          t = await (0, p.decodeEncodedUserRecord)(h(), e);
                        l({ step: 3, user: t });
                        return;
                      }
                      case "pending_finish": {
                        m.ComponentDispatch.dispatch(
                          T.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r(
                            "remote auth handshake started, awaiting finish/cancel."
                          );
                        let e = s.encrypted_user_payload,
                          t = await (0, p.decodeEncodedUserRecord)(h(), e);
                        l({ step: 2, user: t });
                        return;
                      }
                      case "finish": {
                        m.ComponentDispatch.dispatch(
                          T.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r("remote auth handshake finished.");
                        let t = s.encrypted_token;
                        l({ step: 5 });
                        let n = await (0, p.decryptEncodedCiphertext)(h(), t);
                        e(n);
                        return;
                      }
                      case "cancel":
                        r("remote auth handshake cancelled."), _();
                        return;
                      case "hello": {
                        r(
                          "got hello, auth timeout=".concat(s.timeout_ms, "ms")
                        );
                        let e = s.heartbeat_interval;
                        c = setTimeout(
                          () => {
                            (c = null), I(), (u = setInterval(I, e));
                          },
                          Math.floor(e * Math.random())
                        );
                        return;
                      }
                      case "heartbeat_ack":
                        E = !0;
                    }
                  }),
                  (a.onopen = async () => {
                    (i = await (0, p.generateRsaKeyPair)()),
                      (o = await (0, p.serializePublicKey)(i));
                    let e = await (0, p.publicKeyFingerprint)(i);
                    r("connected, handshaking with fingerprint: ".concat(e)),
                      a.send(
                        JSON.stringify({ op: "init", encoded_public_key: o })
                      ),
                      d(i);
                  }),
                  (a.onclose = e => {
                    r(
                      "disconnected, code: "
                        .concat(e.code, " ")
                        .concat(e.reason)
                    ),
                      g();
                  }),
                  (a.onerror = e => {
                    r("disconnected, error: ".concat(JSON.stringify(e))), g();
                  }),
                  () => {
                    r("cleaning up"),
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
              }, [_, e, t, f, g]),
              { state: r, rsaKeyPair: i, cancel: _, handleFailure: g }
            );
          })(t),
          l = (function (e) {
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
                  url: T.Endpoints.REMOTE_AUTH_LOGIN,
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
                      r();
                    }
                  else r();
                })
                .catch(() => {
                  r();
                });
          }, [n, t, s, r]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: S.verticalSeparator }),
              (0, i.jsx)(c.Sequencer, {
                fillParent: !0,
                className: S.qrLogin,
                step: l,
                steps: [0, 1],
                children: (0, i.jsx)("div", {
                  className: S.qrLoginInner,
                  children: (0, i.jsx)(M, { state: n, cancel: a }),
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
        r = n.n(a),
        l = n("124969"),
        i = n("316664");
      function o(e) {
        let { children: t, className: n, ...a } = e,
          o = t();
        return (0, s.jsx)(l.default, {
          ...a,
          className: r(n, i.container),
          contentClassName: i.content,
          children: o.map((e, t) =>
            (0, s.jsx)(
              "div",
              {
                className: i.column,
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
            return ei;
          },
        }),
        n("781738"),
        n("222007"),
        n("794252");
      var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("730290"),
        o = n("506838"),
        u = n("759843"),
        d = n("446674"),
        c = n("862337"),
        f = n("77078"),
        E = n("437822"),
        h = n("678916"),
        _ = n("816540"),
        g = n("208266"),
        m = n("428958"),
        p = n("307439"),
        I = n("765825"),
        T = n("715570"),
        N = n("486252"),
        A = n("378020"),
        S = n("980976"),
        R = n("534438"),
        C = n("946859"),
        O = n("791160"),
        v = n("434824"),
        L = n("770032"),
        M = n("165926"),
        x = n("25033"),
        y = n("255403"),
        D = n("2581"),
        U = n("644417"),
        b = n("697543"),
        P = n("79345"),
        G = n("447997"),
        F = n("970366"),
        j = n("271938"),
        k = n("350522"),
        B = n("476108"),
        w = n("124969"),
        H = n("980428"),
        V = n("599110"),
        Y = n("659500"),
        W = n("718517"),
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
        er = e =>
          Array.isArray(e)
            ? e
                .map(e => e.replace(ea, ""))
                .join(". ")
                .trim()
            : e;
      class el extends a.PureComponent {
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
            I.default.trackExposure({ location: "0ba758_1" });
          let { giftCodeSKU: e, invite: t } = this.props;
          V.default.track(
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
              E.default.getLocationMetadata(),
            (0, F.trackAppUIViewed)("register");
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
              invite: r,
              onChangeStep: l,
            } = this.props,
            { parsedDateOfBirth: i } = this.state;
          (e.apiErrors !== n || t.parsedDateOfBirth !== i) &&
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
                            W.default.Millis.SECOND,
                          () => {
                            this.setState({ isRateLimited: !1 });
                          }
                        ))),
            s &&
              !e.authenticated &&
              ((0, M.setNewUser)($.NewUserTypes.ORGANIC_REGISTERED),
              this.redirectIfAuthenticated());
          let o = X.RegistrationSteps.FULL;
          a || this.hasError("date_of_birth")
            ? (o = X.RegistrationSteps.AGE_GATE)
            : null != r &&
              (null != r.guild || null != r.channel) &&
              (o = X.RegistrationSteps.INVITE),
            l(o);
        }
        redirectIfAuthenticated() {
          let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
          e && t(null != n ? n : B.default.defaultRoute);
        }
        async handleRegister() {
          let {
              email: e,
              username: t,
              globalName: n,
              password: s,
              consent: a,
              parsedDateOfBirth: r,
            } = this.state,
            {
              invite: l,
              guildTemplate: i,
              giftCode: o,
              onRegister: u,
              usernameSuggestion: d,
              isMobileWebInviteRegistration: c,
            } = this.props,
            f = null != l ? l.code : null,
            E = null != o ? o.skuId : null,
            h = p.usePromoEmailConsentStore.getState(),
            _ = (0, K.isNullOrEmpty)(d) ? null : t === d,
            g = J.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t;
          Y.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
          try {
            c || null == l
              ? await (0, T.registerFull)({
                  email: e,
                  username: g,
                  globalName: n,
                  consent: a,
                  password: s,
                  invite: f,
                  usedUsernameSuggestion: _,
                  guildTemplateCode: null == i ? void 0 : i.code,
                  giftCodeSKUId: E,
                  birthday: r,
                  promoEmailConsent: h.required ? h : null,
                })
              : await (0, T.default)({
                  consent: a,
                  invite: f,
                  giftCodeSKUId: E,
                  usedUsernameSuggestion: _,
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
            r = null,
            l = null;
          return (
            t
              ? (l = (0, s.jsx)(N.default, {
                  value: e,
                  onChange: e => this.setState({ consent: e }),
                  subText: et.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY,
                  }),
                }))
              : (r = (0, s.jsx)(w.SubText, {
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
            { subText: r, consentText: l }
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
                      let { onMouseEnter: a, onMouseLeave: r } = e;
                      return (0, s.jsx)(w.Input, {
                        autoFocus: !0,
                        className: es.marginBottom8,
                        name: "username",
                        value: n,
                        placeholder:
                          et.default.Messages.FORM_PLACEHOLDER_USERNAME,
                        onChange: t,
                        onMouseEnter: a,
                        onMouseLeave: r,
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
            ? (0, s.jsx)(R.default, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, s.jsx)(A.GuildScheduledEventInviteHeader, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, s.jsx)(q.default, { invite: e });
        }
        renderInviteButton() {
          let { invite: e, registering: t, consentRequired: n } = this.props,
            { consent: a } = this.state,
            r = w.Button.Colors.BRAND,
            l = et.default.Messages.CONTINUE;
          return (
            (null == e ? void 0 : e.stage_instance) != null &&
              ((r = w.Button.Colors.GREEN),
              (l = et.default.Messages.INSTANT_INVITE_ACCEPT_STAGE)),
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
                    color: r,
                    children: l,
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
            { subText: r, consentText: l } = this.renderConsentComponents(),
            i =
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
                  i ? (0, s.jsx)("div", { className: en.divider }) : null,
                  (0, s.jsxs)(w.Block, {
                    className: i ? void 0 : es.marginTop40,
                    children: [
                      (0, s.jsx)(f.FormTitle, {
                        error: er(null != a ? a : n),
                        children: et.default.Messages.DISPLAY_NAME,
                      }),
                      (0, s.jsx)(f.Tooltip, {
                        text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                        position: "right",
                        color: f.Tooltip.Colors.BRAND,
                        children: e => {
                          let { onMouseEnter: t, onMouseLeave: r } = e;
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
                            onMouseLeave: r,
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
                      r,
                      l,
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
              null != e && i
                ? (0, s.jsx)(w.default, {
                    className: es.marginTop20,
                    children: (0, s.jsx)(R.StageInviteFooter, {
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
                className: l(es.marginTop20, en.errorMessage),
                children: e,
              });
        }
        renderFull(e, t) {
          let {
              email: n,
              username: r,
              globalName: i,
              password: o,
              consent: u,
              parsedDateOfBirth: d,
              globalNameFocused: c,
              emailClientError: E,
              usernameClientError: h,
              passwordClientError: _,
              dateOfBirthClientError: m,
            } = this.state,
            {
              registering: p,
              consentRequired: I,
              isMobileWebInviteRegistration: T,
              uniqueUsernameRegistrationConfig: { suggestions: N },
              authBoxClassName: A,
              apiErrors: {
                email: R,
                username: C,
                global_name: O,
                password: v,
                date_of_birth: L,
              } = {},
              hasLoggedInAccounts: M,
              registrationCopyExperimentConfig: { hasCopyAboveButton: x },
            } = this.props,
            { subText: U, consentText: b } = this.renderConsentComponents(),
            P = this.renderErrorMessage(),
            F = (0, s.jsx)(f.Tooltip, {
              text:
                !u && I
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
            j = async () => {
              this.setState({ usernameFocused: !0 }),
                N &&
                  i.length > 0 &&
                  !D.default.wasRegistrationSuggestionFetched(i) &&
                  (await y.default.fetchSuggestionsRegistration(i));
            },
            k =
              null != e
                ? (0, s.jsx)(a.Fragment, { children: e() }, "custom-header")
                : (0, s.jsx)(
                    w.Title,
                    { children: et.default.Messages.REGISTER_TITLE },
                    "title"
                  ),
            B = (0, s.jsxs)(w.Block, {
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
                  error: null != E ? E : er(R),
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
                  value: i,
                  onChange: e => this.setState({ globalName: e }),
                  error: er(O),
                  maxLength: ee.MAX_DISPLAY_NAME_LENGTH,
                  setRef: e => {
                    this.globalNameRef = e;
                  },
                  onFocus: () => this.setState({ globalNameFocused: !0 }),
                  onBlur: () => this.setState({ globalNameFocused: !1 }),
                }),
                (0, s.jsx)(G.default, {
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
                  onFocus: j,
                  tabIndex: -1,
                  children: [
                    (0, s.jsx)(w.Input, {
                      label: et.default.Messages.FORM_LABEL_USERNAME,
                      className: es.marginBottom20,
                      name: "username",
                      value: r,
                      onChange: e => {
                        this.setState({
                          username: e.toLocaleLowerCase(),
                          usernameClientError:
                            0 === e.length
                              ? et.default.Messages.REQUIRED
                              : null,
                        });
                      },
                      error: null != h ? h : er(C),
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
                  error: null != _ ? _ : er(v),
                  type: "password",
                  setRef: e => {
                    this.passwordRef = e;
                  },
                  required: !0,
                }),
                (0, s.jsx)(g.default, {
                  label: et.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                  wrapperClassName: es.marginTop20,
                  name: "date_of_birth",
                  onChange: this.handleBirthdayChange,
                  ref: this.dateOfBirthRef,
                  error: null != m ? m : er(L),
                  value: d,
                  required: !0,
                }),
                x && U,
                (0, s.jsx)(S.default, {}),
                F,
                P,
                b,
                !x && U,
                J.CONFERENCE_MODE_ENABLED
                  ? null
                  : (0, s.jsx)(w.Button, {
                      look: T ? w.Button.Looks.FILLED : w.Button.Looks.LINK,
                      color: T ? w.Button.Colors.PRIMARY : w.Button.Colors.LINK,
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
                className: l(A, en.horizontalAuthBox),
                children: () => [
                  k,
                  (0, s.jsxs)(
                    "div",
                    {
                      className: en.flex,
                      children: [
                        (0, s.jsx)(w.Title, {
                          className: en.createAccountTemplateHeader,
                          children: et.default.Messages.REGISTER_TITLE,
                        }),
                        B,
                      ],
                    },
                    "register-title"
                  ),
                ],
              })
            : (0, s.jsxs)(w.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: A,
                children: [
                  M && !T
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
                  k,
                  B,
                ],
              });
        }
        render() {
          let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
          if (e || this.hasError("date_of_birth"))
            return (0, s.jsx)(_.default, {});
          let { invite: n, giftCode: a, guildTemplate: r } = this.props,
            l =
              null != n &&
              null == n.guild &&
              null == n.channel &&
              null != n.inviter;
          return null == n || l || t
            ? null != r
              ? this.renderFull(
                  () => (0, s.jsx)(v.default, { guildTemplate: r }),
                  !0
                )
              : null != a
                ? this.renderFull(() => (0, s.jsx)(z.default, { giftCode: a }))
                : null != n && l && n.state === Q.InviteStates.RESOLVED && !t
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
                  invite: r,
                  location: l,
                  onLoginStart: o,
                  redirectTo: u,
                  transitionTo: d,
                  isMobileWebInviteRegistration: c,
                } = this.props;
              if (c) {
                null == o || o(e);
                return;
              }
              let f = null != l ? (0, i.parse)(l.search) : {};
              null != r
                ? (t = Q.Routes.INVITE_LOGIN(r.code))
                : null != s
                  ? (t = Q.Routes.GIFT_CODE_LOGIN(s.code))
                  : null != a
                    ? (t = Q.Routes.GUILD_TEMPLATE_LOGIN(a.code))
                    : null != u
                      ? ((t = Q.Routes.LOGIN), (f.redirect_to = u))
                      : ((t = Q.Routes.LOGIN), "" !== n && (f = { email: n })),
                E.default.loginReset(),
                d(t, { search: (0, i.stringify)(f) }),
                null == o || o(e),
                Y.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
            }),
            (this.handleSubmit = e => {
              null == e || e.preventDefault();
              let {
                  email: t,
                  username: n,
                  password: s,
                  parsedDateOfBirth: a,
                } = this.state,
                { invite: r, consentRequired: l } = this.props;
              if (null !== l) {
                if (null == r) {
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
                  uniqueUsernameRegistrationConfig: { livecheckEnabled: r },
                } = this.props;
              return (0, s.jsx)(eo, {
                username: e,
                suggestion: a,
                livecheckEnabled: r,
                globalName: t,
                isUsernameFocused: n,
                onClickSuggestion: () => {
                  null != this.usernameRef && this.usernameRef.focus(),
                    null != a && a.length > 0 && this.setState({ username: a });
                },
              });
            });
          let n = null != e.location ? (0, i.parse)(e.location.search) : {};
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
      function ei(e) {
        let t = (0, d.useStateFromStoresObject)(
            [k.default, j.default, h.default, x.default, L.default],
            () => ({
              consentRequired: k.default.getAuthenticationConsentRequired(),
              registering:
                j.default.getRegisterStatus() ===
                Q.RegistrationStates.REGISTERING,
              apiErrors: j.default.getErrors(),
              authenticated: j.default.isAuthenticated(),
              isUnderage: h.default.isUnderageAnonymous(),
              country: x.default.getCountryCode(),
              hasLoggedInAccounts: L.default.getHasLoggedInAccounts(),
            })
          ),
          n = (0, b.useUURegistrationExperiment)(),
          r = (0, d.useStateFromStores)([D.default], () =>
            D.default.registrationUsernameSuggestion()
          ),
          [l, i] = a.useState(X.RegistrationSteps.FULL);
        return (
          (0, m.default)(
            {
              type: u.ImpressionTypes.VIEW,
              name: u.ImpressionNames.USER_REGISTRATION,
              properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: l,
              },
            },
            {},
            [l]
          ),
          (0, s.jsx)(el, {
            onChangeStep: e => i(e),
            registrationCopyExperimentConfig: I.default.getCurrentConfig(
              { location: "0ba758_2" },
              { autoTrackExposure: !1 }
            ),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: r,
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
            globalName: r,
            livecheckEnabled: l,
            isUsernameFocused: i,
            onClickSuggestion: u,
          } = e,
          d = (0, P.useUsernameStatus)(n, l, !0),
          c = l && n.length > 0;
        return (
          (t = c
            ? (0, o.match)(d)
                .with(
                  { type: U.NameValidationState.ERROR, message: o.P.select() },
                  e =>
                    (0, s.jsx)(f.Text, {
                      className: en.messageNegative,
                      variant: "text-sm/normal",
                      children: e,
                    })
                )
                .with(
                  {
                    type: U.NameValidationState.AVAILABLE,
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
            : null != a && a.length > 0 && r.length > 0
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
          (0, s.jsx)(G.default, {
            show:
              (c &&
                (null == d ? void 0 : d.type) ===
                  U.NameValidationState.ERROR) ||
              i,
            top: -12,
            bottom: 20,
            children: t,
          })
        );
      }
      el.defaultProps = {
        giftCodeResolved: !1,
        transitionTo: e => n.g.location.assign(e),
      };
    },
    905949: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
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
      function r() {
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
            return h;
          },
        }),
        n("222007");
      var s = n("872717"),
        a = n("913144"),
        r = n("437822"),
        l = n("697796"),
        i = n("524824"),
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
      class E extends d.default {
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
                    (0, l.handoffSetUser)(t.user),
                      r.default.loginToken(t.token, !1),
                      f(!0, o);
                  },
                  e => {
                    if (
                      (null != a && f(!1, o),
                      r.default.setFingerprint(a),
                      (0, l.handoffEnd)(),
                      o === i.LoginHandoffSource.ROLE_SUBSCRIPTION)
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
              ? (r.default.setFingerprint(a), f(!1, o), (0, l.handoffEnd)())
              : (r.default.setFingerprint(a), (0, l.handoffUnavailable)());
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
                : (r.default.setFingerprint(null), (0, l.handoffUnavailable)());
            });
        }
      }
      var h = new E();
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
        r = n("90915"),
        l = n("266491");
      class i extends a.Component {
        render() {
          let {
              children: e,
              location: t,
              history: n,
              staticContext: i,
              match: o,
              ...u
            } = this.props,
            d = null,
            c = null;
          return (
            a.Children.forEach(e, e => {
              if (null == d && a.isValidElement(e)) {
                let { component: s, render: l, ...o } = e.props,
                  u = o.path || o.from;
                null !=
                  (d =
                    null != u
                      ? (0, r.matchPath)(t.pathname, { ...o, path: u })
                      : null) &&
                  ((o = {
                    ...o,
                    key: u,
                    location: t,
                    match: d,
                    history: n,
                    staticContext: i,
                  }),
                  null != s
                    ? (c = a.createElement(s, o))
                    : null != l && (c = l(o)));
              }
            }),
            (0, s.jsx)(l.default, { ...u, children: c })
          );
        }
      }
      var o = (0, r.withRouter)(i);
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
        r = n("395724"),
        l = n("599110"),
        i = n("586391"),
        o = n("49111");
      function u(e, t) {
        return (
          (0, r.default)(e, t),
          l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: t,
            action: i.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
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
                l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                  source: t,
                  action: i.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
                });
            })
        );
      }
      function d(e) {
        a.default.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action:
              i.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function c(e) {
        a.default.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action: i.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
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
        r = n("913144"),
        l = n("773336"),
        i = n("586391");
      let o = null,
        u = "underage";
      class d extends a.default.Store {
        isUnderageAnonymous() {
          if (l.isPlatformEmbedded) {
            if (null != o && o + i.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now())
              return !0;
          } else {
            let e = s.parse(document.cookie)[u];
            return null != e;
          }
          return !1;
        }
      }
      d.displayName = "AgeGateStore";
      var c = new d(r.default, {
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
        r = n("393414"),
        l = n("124969"),
        i = n("701909"),
        o = n("49111"),
        u = n("782340"),
        d = n("168500");
      let c = () => (0, r.transitionTo)(o.Routes.LOGIN);
      var f = e => {
        let { authBoxClassName: t, underageMessage: r } = e;
        return (0, s.jsxs)(l.default, {
          className: t,
          children: [
            (0, s.jsx)("img", { alt: "", src: n("803452"), className: d.img }),
            (0, s.jsx)(l.Title, {
              className: d.title,
              children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER,
            }),
            (0, s.jsx)(l.SubTitle, {
              className: d.subtitle,
              children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                underageMessage:
                  null != r
                    ? r
                    : u.default.Messages
                        .AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                helpURL: i.default.getArticleURL(o.HelpdeskArticles.AGE_GATE),
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
            return T;
          },
        }),
        n("222007"),
        n("424973");
      var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("866227"),
        o = n.n(i),
        u = n("77078"),
        d = n("414943"),
        c = n("782340"),
        f = n("283764");
      let E = o().localeData().months(),
        h = Array.from(Array(31).keys()).map(e => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        _ = Array.from(Array(12).keys()).map(e => ({
          value: e + 1,
          label: E[e],
        })),
        g = /[a-zA-Z0-9]/;
      function m(e) {
        let { options: t, selectOption: n, children: r } = e,
          [l, i] = a.useState("");
        a.useEffect(() => {
          if ("" !== l) {
            let e = setTimeout(() => i(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [l, i]);
        let o = a.useCallback(
          e => {
            if (g.test(e.key)) {
              let s = "".concat(l).concat(e.key.toLowerCase()),
                a = t.find(e => e.label.toLowerCase().startsWith(s));
              null != a && n(a.value), i(s);
            }
          },
          [n, i, l, t]
        );
        return (0, s.jsx)("div", { onKeyDown: o, children: r });
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
      let I = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: r,
            onChange: i,
            onPopulated: E,
            error: g,
            autoFocus: I,
            required: T,
          } = e,
          {
            day: N,
            setDay: A,
            month: S,
            setMonth: R,
            year: C,
            setYear: O,
          } = (function (e) {
            let t = null,
              n = null,
              s = null;
            null != e && ((t = e.date()), (n = e.month() + 1), (s = e.year()));
            let [r, l] = a.useState(t),
              [i, o] = a.useState(n),
              [u, d] = a.useState(s);
            return {
              day: r,
              setDay: l,
              month: i,
              setMonth: o,
              year: u,
              setYear: d,
            };
          })(n),
          v = a.useMemo(
            () =>
              null != N && null != S && null != C
                ? o("".concat(N, "/").concat(S, "/").concat(C), "DD/MM/YYYY")
                : null,
            [N, S, C]
          );
        a.useEffect(() => {
          i((null == v ? void 0 : v.isValid()) ? v : null);
        }, [v, i]);
        let L = g;
        null != v &&
          !v.isValid() &&
          (L = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let M = (function () {
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
          [x, y] = a.useState(I ? 0 : -1),
          D = a.useRef(null),
          U = a.useRef(null),
          b = a.useRef(null),
          P = a.useMemo(p, []),
          G = a.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = P[x]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = D.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = U.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (s = b.current) || void 0 === s || s.focus();
            }
          }, [x, D, U, b, P]);
        a.useEffect(() => {
          setTimeout(G, 500);
        }, []),
          a.useEffect(() => {
            if (x >= P.length) {
              null == E || E();
              return;
            }
            G();
          }, [x, G]);
        let F = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = P[e];
          switch (t) {
            case "day":
              F.push({
                key: "day",
                input: (0, s.jsx)(m, {
                  options: h,
                  selectOption: A,
                  children: (0, s.jsx)(d.default, {
                    ref: D,
                    className: f.inputDay,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: h,
                    value: N,
                    onChange: t => {
                      let { value: n } = t;
                      A(n), y(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "month":
              F.push({
                key: "month",
                input: (0, s.jsx)(m, {
                  options: _,
                  selectOption: R,
                  children: (0, s.jsx)(d.default, {
                    ref: U,
                    className: f.inputMonth,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: _,
                    value: S,
                    onChange: t => {
                      let { value: n } = t;
                      R(n), y(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
              break;
            case "year":
              F.push({
                key: "year",
                input: (0, s.jsx)(m, {
                  options: M,
                  selectOption: O,
                  children: (0, s.jsx)(d.default, {
                    ref: b,
                    className: f.inputYear,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: M,
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
          className: l(f.container, r),
          children: [
            (0, s.jsx)(u.FormTitle, {
              tag: "legend",
              required: T,
              error: L,
              children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, s.jsx)("div", {
              className: f.inputs,
              children: F.map((e, t) => {
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
      var T = I;
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
        r = n("361572"),
        l = n("49111"),
        i = n("724210");
      function o(e) {
        let t = decodeURIComponent(e),
          n = (0, r.tryParseChannelPath)(t);
        return null != n &&
          n.channelId === i.StaticChannelRoute.ROLE_SUBSCRIPTIONS
          ? "role_subscription"
          : t ===
              l.Routes.SETTINGS(
                l.UserSettingsSections.SUBSCRIPTIONS,
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
      var s, a, r, l;
      n.r(t),
        n.d(t, {
          RegistrationSteps: function () {
            return a;
          },
        }),
        ((r = s || (s = {})).VIEWED = "viewed"),
        (r.SUBMITTED = "submitted"),
        (r.RESEND_CODE = "resend_code"),
        (r.INPUT_ERROR = "input_error"),
        (r.RESPONSE_ERROR = "response_error"),
        (r.SUCCESS = "success"),
        ((l = a || (a = {})).IDENTITY = "identity"),
        (l.DISPLAY_NAME = "display_name"),
        (l.ACCOUNT_INFORMATION = "account_information"),
        (l.FULL = "full"),
        (l.AGE_GATE = "age_gate"),
        (l.INVITE = "invite"),
        (l.SMS_VERIFY = "sms_verify");
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
            return i;
          },
        });
      var s = n("866227"),
        a = n.n(s),
        r = n("599110"),
        l = n("49111");
      function i(e, t) {
        r.default.track(l.AnalyticEvents.AGE_GATE_SUBMITTED, {
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
            return _;
          },
          registerFull: function () {
            return g;
          },
        });
      var s = n("866227"),
        a = n.n(s),
        r = n("759843"),
        l = n("913144"),
        i = n("599417"),
        o = n("731109"),
        u = n("271938"),
        d = n("599110"),
        c = n("840707"),
        f = n("395724"),
        E = n("49111"),
        h = n("586391");
      function _(e) {
        let { invite: t = null, giftCodeSKUId: n = null, ...s } = e;
        return g({ ...s, invite: t, giftCodeSKUId: n });
      }
      function g(e) {
        let {
          email: t,
          phoneToken: n,
          username: s,
          globalName: _,
          consent: g,
          password: m,
          guildTemplateCode: p,
          birthday: I,
          invite: T = null,
          giftCodeSKUId: N = null,
          multiStep: A = !1,
          promoEmailConsent: S = null,
          usedUsernameSuggestion: R = null,
        } = e;
        return (
          l.default.dispatch({ type: "REGISTER", birthday: A ? I : null }),
          null != I &&
            ((0, f.default)(I, E.AnalyticsSections.REGISTER),
            d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
              source: h.AgeGateSource.REGISTER,
              action: h.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
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
                d.default.track(E.AnalyticEvents.USER_AGE_SUBMITTED, {
                  age_bucket: t,
                }));
            })(I)),
          c.default
            .post({
              url: E.Endpoints.REGISTER,
              body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: _,
                password: m,
                invite: T,
                consent: g,
                phone_token: n,
                date_of_birth: null == I ? void 0 : I.format("YYYY-MM-DD"),
                gift_code_sku_id: N,
                guild_template_code: p,
                promotional_email_opt_in: null == S ? void 0 : S.checked,
              },
              trackedActionData: {
                event: r.NetworkActionNames.USER_REGISTER,
                properties: {
                  invite_code: T,
                  used_username_suggestion: R,
                  promotional_email_opt_in: null == S ? void 0 : S.checked,
                  promotional_email_pre_checked:
                    null == S ? void 0 : S.preChecked,
                  was_unique_username: !0,
                },
              },
            })
            .then(
              e => {
                l.default.dispatch({
                  type: "REGISTER_SUCCESS",
                  token: e.body.token,
                }),
                  d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
                    source: h.AgeGateSource.REGISTER,
                    action: h.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
                  });
              },
              e => {
                let t = new i.default(e);
                throw (
                  (l.default.dispatch({ type: "REGISTER_FAILURE", error: t }),
                  null != t.getFieldErrors("date_of_birth") &&
                    o.preventUnderageRegistration(h.AgeGateSource.REGISTER),
                  d.default.track(E.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
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
        r = n.n(a),
        l = n("77078"),
        i = n("145131"),
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
        return (0, s.jsx)(i.default, {
          className: null != f ? f : d.marginTop20,
          align: i.default.Align.CENTER,
          children: (0, s.jsx)(l.Checkbox, {
            value: t,
            type: l.Checkbox.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: u.checkbox,
            children: (0, s.jsx)(o.SubText, {
              className: r({ [u.subText]: !c }),
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
        r = n("419830"),
        l = n("400271"),
        i = n("398886");
      function o(e) {
        let { channel: t } = e,
          n = (0, r.getSimpleChannelIconComponent)(t.type);
        return (0, s.jsxs)("div", {
          className: i.channelInfoContainer,
          children: [
            null != n ? (0, s.jsx)(n, { width: 20, height: 20 }) : null,
            (0, s.jsx)(a.Text, {
              className: i.channelInfoText,
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
          className: i.container,
          children: [
            (0, s.jsx)(l.GuildEventStatus, {
              className: i.statusContainer,
              guildId: n.guild_id,
              guildEventId: n.id,
              eventPreview: n,
            }),
            (0, s.jsx)(l.GuildEventDetails, {
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
        r = n("486252"),
        l = n("782340"),
        i = n("890957");
      function o() {
        let { required: e, checked: t } = (0, a.usePromoEmailConsentStore)();
        return e
          ? (0, s.jsx)(r.default, {
              value: t,
              subText: l.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
              onChange: a.setPromoEmailConsentChecked,
              marginTopStyle: i.marginTop8,
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
    238055: function (e, t, n) {
      "use strict";
      var s, a;
      n.r(t),
        n.d(t, {
          HubEmailConnectionSteps: function () {
            return s;
          },
          INVITE_ROUTING_HUB_GUILD_ID: function () {
            return r;
          },
        }),
        ((a = s || (s = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (a.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (a.VERIFY_PIN = "VERIFY_PIN"),
        (a.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (a.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let r = "884924873015689226";
    },
    672630: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("70102");
      var s = n("748820"),
        a = n("872717"),
        r = n("49111"),
        l = {
          generateNonce: function () {
            return (0, s.v4)();
          },
          createHandoffToken: async function e(e) {
            let {
              body: { handoff_token: t },
            } = await a.default.post({
              url: r.Endpoints.HANDOFF,
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
        r = n("37983"),
        l = n("884691"),
        i = n("730290"),
        o = n("391679"),
        u = n("446674"),
        d = n("872717"),
        c = n("95410"),
        f = n("77078"),
        E = n("913144"),
        h = n("437822"),
        _ = n("229353"),
        g = n("271938"),
        m = n("599110"),
        p = n("718517"),
        I = n("672630"),
        T = n("49111"),
        N = n("201763");
      let A = "mweb_handoff_nonce",
        S = "mweb_handoff_nonce_expiration",
        R = 1 * p.default.Millis.MINUTE;
      ((a = s || (s = {})).NONCE_MISSING = "nonce_missing"),
        (a.NONCE_EXPIRED = "nonce_expired"),
        (a.NULL_HANDOFF_TOKEN = "deep_link_failed"),
        (a.HANDOFF_EXCHANGE = "handoff_exchange");
      let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        v = () => {
          c.default.remove(A), c.default.remove(S);
        };
      var L = () => {
        let e = (0, u.useStateFromStores)([g.default], () =>
            g.default.getFingerprint()
          ),
          { fingerprint: t, handoff_token: n } = (0, i.parse)(
            window.location.search
          ),
          s = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
          a = null != s ? s : null !== e ? e : void 0;
        l.useEffect(() => {
          null !== s &&
            e !== s &&
            E.default.dispatch({ type: "FINGERPRINT", fingerprint: s });
        }, [s, e]);
        let [p, L] = l.useState(null),
          M = l.useCallback(
            e => {
              L(e),
                m.default.track(
                  T.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE,
                  { reason: e, fingerprint: (0, o.maybeExtractId)(a) },
                  { fingerprint: a }
                );
            },
            [L, a]
          ),
          x = c.default.get(A);
        if (
          ("null" === n && null === p && M("deep_link_failed"),
          null != n &&
            "null" !== n &&
            null == x &&
            null === p &&
            M("nonce_missing"),
          l.useEffect(() => {
            if (null != x) {
              let e = c.default.get(S);
              (null == e || Date.now() >= e) && (M("nonce_expired"), v());
            }
          }, [x, M]),
          l.useEffect(() => {
            null != n &&
              "null" !== n &&
              null != x &&
              null == p &&
              d.default
                .post({
                  url: T.Endpoints.HANDOFF_EXCHANGE,
                  body: { key: x, handoff_token: n },
                })
                .then(e => h.default.loginToken(e.body.token, !1))
                .then(() => {
                  m.default.track(T.AnalyticEvents.LOGIN_SUCCESSFUL, {
                    source: T.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
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
                  M("handoff_exchange");
                })
                .finally(() => {
                  v();
                });
          }, [n, x, p, a, M]),
          null == a)
        )
          return null;
        let y = (() => {
            if (null == p)
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1,
                  (0, r.jsx)("br", {}),
                  _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2,
                ],
              });
            if (O.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
            if (C.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
          })(),
          D = null != p && O.has(p);
        return D
          ? (0, r.jsx)("div", {
              className: N.errorContainer,
              children: (0, r.jsx)(f.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: y,
              }),
            })
          : (0, r.jsxs)("div", {
              className: N.container,
              children: [
                (0, r.jsx)(f.Text, {
                  variant: "text-sm/semibold",
                  children: y,
                }),
                (0, r.jsx)(f.Button, {
                  look: f.Button.Looks.INVERTED,
                  color: f.Button.Colors.BRAND_NEW,
                  onClick: () => {
                    let e = I.default.generateNonce();
                    c.default.set(A, e), c.default.set(S, Date.now() + R);
                    let t = new URL(T.MOBILE_WEB_HANDOFF_DEEP_LINK),
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
                      m.default.track(
                        T.AnalyticEvents.DEEP_LINK_CLICKED,
                        {
                          fingerprint: (0, o.maybeExtractId)(a),
                          source: "mobile_web_handoff",
                          destination: T.MOBILE_WEB_HANDOFF_DEEP_LINK,
                        },
                        { fingerprint: a, flush: !0 }
                      ),
                      (window.location.href = t.toString());
                  },
                  children: (0, r.jsx)(f.Text, {
                    className: N.buttonText,
                    variant: "text-sm/semibold",
                    children: _.MOBILE_WEB_HANDOFF_BUTTON_TEXT,
                  }),
                }),
              ],
            });
      };
    },
    694787: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          validateMultiAccountTokens: function () {
            return f;
          },
          switchAccount: function () {
            return E;
          },
          removeAccount: function () {
            return h;
          },
        });
      var s = n("171718"),
        a = n("872717"),
        r = n("913144"),
        l = n("437822"),
        i = n("605250"),
        o = n("271938"),
        u = n("770032"),
        d = n("49111");
      let c = new i.default("MultiAccountActionCreators");
      function f() {
        let e = o.default.getId(),
          t = u.default.getUsers();
        t.forEach(async t => {
          let n,
            { id: l } = t,
            i = s.default.getToken(l);
          if (null == i || "" === i) {
            r.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: l,
            });
            return;
          }
          r.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: l,
          });
          try {
            n = await a.default.get({
              url: d.Endpoints.ME,
              headers: { authorization: i },
              retries: 3,
            });
          } catch (t) {
            let e =
              (null == t ? void 0 : t.status) === 401 ||
              (null == t ? void 0 : t.status) === 403;
            r.default.dispatch({
              type: e
                ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE"
                : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: l,
            });
            return;
          }
          r.default.dispatch({
            type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
          }),
            r.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: l,
            });
        });
      }
      function E(e, t) {
        c.log("Switching account to ".concat(e), { switchSynchronously: t });
        let n = s.default.getToken(e);
        return null == n
          ? (c.log("Switching accounts failed because there was no token"),
            r.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: e,
            }),
            Promise.resolve())
          : l.default.switchAccountToken(n, t);
      }
      function h(e) {
        r.default.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: e });
      }
    },
    927101: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useMultiAccountUsers: function () {
            return o;
          },
        });
      var s = n("884691"),
        a = n("446674"),
        r = n("913144"),
        l = n("694787"),
        i = n("770032");
      function o() {
        let e = (0, a.useStateFromStoresObject)([i.default], () => ({
          isLoading: i.default.getIsValidatingUsers(),
          multiAccountUsers: i.default.getUsers(),
        }));
        return (
          s.useEffect(() => {
            r.default.wait(() => {
              l.validateMultiAccountTokens();
            });
          }, []),
          e
        );
      }
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
        r = n("77078"),
        l = n("428958"),
        i = n("124969"),
        o = n("851460"),
        u = n("782340"),
        d = n("61585");
      function c(e) {
        let { onDismiss: t } = e;
        return (
          (0, l.default)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
          }),
          (0, s.jsxs)(i.default, {
            className: d.chooseAccountAuthBox,
            children: [
              (0, s.jsx)(i.Title, {
                children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT,
              }),
              (0, s.jsx)(r.Text, {
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
                children: (0, s.jsx)(r.Button, {
                  className: d.chooseAccountButton,
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.PRIMARY,
                  onClick: t,
                  size: r.Button.Sizes.MEDIUM,
                  children: (0, s.jsx)(r.Text, {
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
    165926: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setNewUser: function () {
            return a;
          },
          setNewUserFlowCompleted: function () {
            return r;
          },
        });
      var s = n("913144");
      function a(e) {
        s.default.wait(() =>
          s.default.dispatch({ type: "NUF_NEW_USER", newUserType: e })
        );
      }
      function r() {
        s.default.wait(() => s.default.dispatch({ type: "NUF_COMPLETE" }));
      }
    },
    56235: function (e, t, n) {
      "use strict";
      var s, a;
      n.r(t),
        n.d(t, {
          NewUserTypes: function () {
            return s;
          },
        }),
        ((a = s || (s = {}))[(a.MARKETING_UNCLAIMED = 0)] =
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
            return f;
          },
        });
      var s,
        a,
        r = n("759843"),
        l = n("872717"),
        i = n("913144"),
        o = n("271938"),
        u = n("840707"),
        d = n("482931"),
        c = n("49111");
      ((s = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (s.USER_SETTINGS_UPDATE = "user_settings_update"),
        (s.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (s.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (s.CONTACT_SYNC = "contact_sync");
      var f = {
        setCountryCode(e) {
          i.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          l.default.delete({
            url: c.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = o.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            l.default.post({
              url: c.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          l.default.post({
            url: c.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          l.default.post({
            url: c.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          l.default.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          l.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          l.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          l.default.post({
            url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
          }),
        async verifyPhone(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = {},
            l = o.default.getFingerprint();
          null != l && "" !== l && (a["X-Fingerprint"] = l),
            s && (a.authorization = "");
          let f = await u.default.post({
            url: c.Endpoints.VERIFY_PHONE,
            headers: a,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: r.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              i.default.dispatch({
                type: "MODAL_POP",
                key: d.PHONE_VERIFICATION_MODAL_KEY,
              }),
            f.body
          );
        },
      };
    },
    482931: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PHONE_VERIFICATION_MODAL_KEY: function () {
            return s;
          },
          PHONE_VERIFICATION_CODE_NUM_DIGITS: function () {
            return a;
          },
        });
      let s = "PHONE_VERIFICATION_MODAL_KEY",
        a = 6;
    },
    25033: function (e, t, n) {
      "use strict";
      let s;
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("446674"),
        r = n("913144"),
        l = n("988415");
      let i = (0, l.getDefaultCountryCode)();
      function o(e) {
        var t;
        let { countryCode: n } = e;
        null != n &&
          (i =
            null !== (t = (0, l.getCountryCodeByAlpha2)(n)) && void 0 !== t
              ? t
              : (0, l.getDefaultCountryCode)());
      }
      class u extends a.default.DeviceSettingsStore {
        initialize(e) {
          null != e && (s = e.selectedCountryCode);
        }
        getUserAgnosticState() {
          return { selectedCountryCode: s };
        }
        getCountryCode() {
          return null != s ? s : i;
        }
      }
      (u.displayName = "PhoneStore"), (u.persistKey = "PhoneStore");
      var d = new u(r.default, {
        PHONE_SET_COUNTRY_CODE: function (e) {
          let { countryCode: t } = e;
          s = t;
        },
        CONNECTION_OPEN: o,
        SET_LOCATION_METADATA: o,
      });
    },
    255403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var s = n("759843"),
        a = n("872717"),
        r = n("913144"),
        l = n("448993"),
        i = n("599110"),
        o = n("840707"),
        u = n("210898"),
        d = n("856368"),
        c = n("697543"),
        f = n("49111"),
        E = n("782340");
      n("2581");
      var h = {
        resetSuggestions: () =>
          r.default.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if ((0, c.hasRegistrationUsernameSuggestions)()) {
            r.default.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
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
                return r.default.dispatch({
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
              r.default.dispatch({
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
                return r.default.dispatch({
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
          let h =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? E.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
              : t.includes("..")
                ? E.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                : t.length < 2 || t.length > 32
                  ? E.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != h)
            return (
              i.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                reason: h,
                username_error: !0,
                location: a,
                one_click_flow: c,
              }),
              r.default.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: h,
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
                i.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: a,
                  one_click_flow: c,
                }),
                r.default.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (o) {
              let t = new l.APIError(o),
                s =
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : void 0;
              i.default.track(f.AnalyticEvents.POMELO_ERRORS, {
                reason: s,
                username_error: !0,
                location: a,
                one_click_flow: c,
              }),
                r.default.dispatch({
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
            r.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n.body }),
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
            return r;
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
        r = () =>
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
            return r;
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
        r = () =>
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
        r = n("446674"),
        l = n("913144"),
        i = n("718517");
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
      class d extends r.default.Store {
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
      var c = new d(l.default, {
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
                (null != a ? a : 7) * i.default.Millis.SECOND
              )
            : u.validations.set(t, { taken: null, error: n }),
            null != a &&
              (u.retryAfterTime = Date.now() + a * i.default.Millis.SECOND);
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
            return r;
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
        r = () =>
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
            return r;
          },
          hasRegistrationUsernameSuggestions: function () {
            return l;
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
        r = () =>
          a.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        l = () =>
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
        r = n("65597"),
        l = n("255403"),
        i = n("947962"),
        o = n("2581"),
        u = n("415133");
      let d = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          c = (0, r.default)([o.default], () => o.default.validate(e), [e]),
          f = (0, r.default)([o.default], () => o.default.isRateLimited()),
          E = (0, i.usePomeloDebounceDelay)(),
          h = s.useMemo(
            () =>
              (0, a.debounce)(
                e =>
                  l.default.attemptPomelo(
                    e,
                    n ? "registration" : "modal",
                    n,
                    d
                  ),
                E
              ),
            [E, n, d]
          );
        return (
          s.useEffect(() => {
            t && !f && null == c && "" !== e && h(e);
          }, [t, f, c, e, h]),
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
            return r;
          },
        }),
        n("222007");
      var s = n("884691"),
        a = n("44984");
      let r = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0,
          l = (0, a.useUsernameLiveCheck)(e, t, n),
          [i, o] = s.useState(void 0);
        return (
          s.useEffect(() => {
            "" === e || e === r ? o(void 0) : null != l && o(l);
          }, [l, e, r]),
          i
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
        r = n("907002"),
        l = n("230606");
      let i = () => {
        let e = a.useRef(null),
          [t, n] = a.useState(0),
          s = a.useMemo(
            () =>
              new l.default(e => {
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
        let { show: t, children: n, top: a = 0, bottom: l = 0 } = e,
          { ref: o, height: u } = i(),
          d = (0, r.useSpring)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: {
              height: t ? u : 0,
              paddingBottom: t ? "".concat(l, "px") : "0px",
              marginTop: t ? "".concat(a, "px") : "0px",
            },
            config: { tension: 170, friction: 26 },
          }),
          c = (0, r.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
              duration: 200,
              easing: t ? e => e ** 4 : e => e * (2 - e),
            },
          });
        return (0, s.jsx)(r.animated.div, {
          style: {
            overflow: "hidden",
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop,
          },
          children: (0, s.jsx)(r.animated.div, {
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
            return E;
          },
        });
      var s,
        a,
        r = n("37983"),
        l = n("884691"),
        i = n("82697"),
        o = n("679001");
      ((s = a || (a = {})).SIZE_40 = "SIZE_40"), (s.SIZE_60 = "SIZE_60");
      let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        d = n("527826");
      class c extends l.PureComponent {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, r.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: e,
            children: (0, r.jsx)(i.default, { value: t, level: "M", ...n }),
          });
        }
      }
      c.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
      class f extends l.PureComponent {
        render() {
          let { overlaySize: e } = this.props,
            t = u[null != e ? e : "SIZE_40"];
          return (0, r.jsxs)("div", {
            className: o.qrCodeContainer,
            children: [
              (0, r.jsx)(c, { ...this.props }),
              (0, r.jsx)("div", {
                className: o.qrCodeOverlay,
                children: (0, r.jsx)("img", {
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
      var E = c;
    },
    274515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          generateRsaKeyPair: function () {
            return l;
          },
          serializePublicKey: function () {
            return i;
          },
          publicKeyFingerprint: function () {
            return o;
          },
          decryptEncodedCiphertext: function () {
            return E;
          },
          decryptNonce: function () {
            return h;
          },
          decodeEncodedUserRecord: function () {
            return _;
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
        r = n("766274");
      function l() {
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
      async function i(e) {
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
      async function E(e, t) {
        let n = new TextDecoder(),
          s = await f(e, d(t));
        return n.decode(s);
      }
      async function h(e, t) {
        let n = await f(e, d(t));
        return u(n);
      }
      async function _(e, t) {
        t = await E(e, t);
        let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
        if (null == n) throw Error("Invalid encoded user record.");
        let [, s, a, l, i] = n;
        return new r.default({
          id: s,
          discriminator: a,
          avatar: "0" === l ? null : l,
          username: i,
        });
      }
    },
  },
]);
//# sourceMappingURL=81726.fd218f2db8ffabddf299.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81726"],
  {
    527826: function (e, t, n) {
      "use strict";
      e.exports = n.p + "adf75861421c2a6a6269.png";
    },
    837291: function (e, t, n) {
      "use strict";
      function s(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
          s = atob(n),
          a = new ArrayBuffer(s.length),
          r = new Uint8Array(a);
        for (let e = 0; e < s.length; e++) r[e] = s.charCodeAt(e);
        return a;
      }
      function a(e) {
        let t = new Uint8Array(e),
          n = "";
        for (let e of t) n += String.fromCharCode(e);
        let s = btoa(n),
          a = s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        return a;
      }
      n.r(t),
        n.d(t, {
          get: function () {
            return m;
          },
          parseRequestOptionsFromJSON: function () {
            return _;
          },
        }),
        n("781738"),
        n("101997"),
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
        n("222007"),
        n("70102"),
        n("274635");
      var r = "copy",
        i = "convert";
      function l(e, t, n) {
        if (t === r) return n;
        if (t === i) return e(n);
        if (t instanceof Array) return n.map(n => l(e, t[0], n));
        if (t instanceof Object) {
          let s = {};
          for (let [a, r] of Object.entries(t)) {
            if (r.derive) {
              let e = r.derive(n);
              void 0 !== e && (n[a] = e);
            }
            if (!(a in n)) {
              if (r.required) throw Error("Missing key: ".concat(a));
              continue;
            }
            if (null == n[a]) {
              s[a] = null;
              continue;
            }
            s[a] = l(e, r.schema, n[a]);
          }
          return s;
        }
      }
      function o(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function u(e) {
        return { required: !0, schema: e };
      }
      function d(e) {
        return { required: !1, schema: e };
      }
      var c = { type: u(r), id: u(i), transports: d(r) },
        f = { appid: d(r), appidExclude: d(r), credProps: d(r) },
        E = { appid: d(r), appidExclude: d(r), credProps: d(r) };
      u({
        rp: u(r),
        user: u({ id: u(i), name: u(r), displayName: u(r) }),
        challenge: u(i),
        pubKeyCredParams: u(r),
        timeout: d(r),
        excludeCredentials: d([c]),
        authenticatorSelection: d(r),
        attestation: d(r),
        extensions: d(f),
      }),
        d(r),
        u(r),
        u(r),
        u(i),
        d(r),
        u({
          clientDataJSON: u(i),
          attestationObject: u(i),
          transports: o(r, e => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
          }),
        }),
        o(E, e => e.getClientExtensionResults());
      var h = {
          mediation: d(r),
          publicKey: u({
            challenge: u(i),
            timeout: d(r),
            rpId: d(r),
            allowCredentials: d([c]),
            userVerification: d(r),
            extensions: d(f),
          }),
          signal: d(r),
        },
        g = {
          type: u(r),
          id: u(r),
          rawId: u(i),
          authenticatorAttachment: d(r),
          response: u({
            clientDataJSON: u(i),
            authenticatorData: u(i),
            signature: u(i),
            userHandle: u(i),
          }),
          clientExtensionResults: o(E, e => e.getClientExtensionResults()),
        };
      function _(e) {
        return l(s, h, e);
      }
      async function m(e) {
        let t = await navigator.credentials.get(e);
        return (t.toJSON = () => l(a, g, t)), t;
      }
    },
    250790: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var s = n("37983"),
        a = n("884691"),
        r = n("483366"),
        i = n.n(r),
        l = n("458960"),
        o = n("394846"),
        u = n("769846"),
        d = n("77078"),
        c = n("159885"),
        f = n("26232");
      let E = (0, c.cssValueToNumber)(
          u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE
        ),
        h = { START: 0, END: 1 },
        g = { friction: 10, tension: 130 };
      var _ = function (e) {
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
              (this.anim = new l.default.Value(h.START)),
              (this.state = { shouldAnimate: !o.isMobile }),
              (this.handleResize = () => {
                let e = window.innerWidth > E;
                !this.state.shouldAnimate && e && this.anim.setValue(h.END),
                  this.setState({ shouldAnimate: e });
              }),
              (this.handleResizeDebounced = i(this.handleResize, 60));
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
        i = n.n(r),
        l = n("394846"),
        o = n("77078"),
        u = n("2021"),
        d = n("393414"),
        c = n("725484"),
        f = n("554054"),
        E = n("159885"),
        h = n("528502"),
        g = n("49111"),
        _ = n("513680");
      let m = (0, E.cssValueToNumber)(_.responsiveWidthMobile),
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
      function T(e) {
        return p.some(t => e.startsWith(t));
      }
      class I extends a.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (T(e)) (0, d.transitionTo)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          T(e) ? (0, d.replaceWith)(e) : (window.location = e);
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
            className: _.characterBackground,
            children: (0, s.jsx)(o.HeadingLevel, {
              forceLevel: 1,
              children:
                null != e
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(c.default, {
                          show: !0,
                          className: i(_.logo),
                        }),
                        (0, s.jsx)(f.Splash, { splash: e, children: t }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(h.default, {
                          className: _.artwork,
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
              this.setState({ isMobileWidth: window.innerWidth <= m });
            }),
            (this.state = { isMobileWidth: window.innerWidth <= m });
        }
      }
      var N = I;
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
        i = n.n(r),
        l = n("446674"),
        o = n("77078"),
        u = n("299285"),
        d = n("210721"),
        c = n("65324"),
        f = n("697218"),
        E = n("10514"),
        h = n("552712"),
        g = n("953109"),
        _ = n("124969"),
        m = n("380186"),
        p = n("49111"),
        T = n("646718"),
        I = n("782340"),
        N = n("173494"),
        A = n("125047"),
        S = n("890957"),
        R = l.default.connectStores(
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
              sku: l,
              application: u,
              subscriptionPlan: f,
            } = e,
            E =
              null == r
                ? I.default.Messages.GIFT_CODE_AUTH_GIFTED
                : I.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                    username: r.username,
                  }),
            h = l.name;
          return (
            null != f &&
              (h = (
                f.interval === T.SubscriptionIntervalTypes.MONTH
                  ? I.default.Messages
                      .GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY
                  : I.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY
              ).format({ skuName: l.name, intervalCount: f.intervalCount })),
            (0, s.jsxs)(a.Fragment, {
              children: [
                null != n.giftStyle
                  ? (0, s.jsx)(c.default, {
                      defaultAnimationState: d.AnimationState.LOOP,
                      giftStyle: n.giftStyle,
                      className: N.seasonalIcon,
                    })
                  : (0, s.jsx)(_.Avatar, {
                      src: null != r ? r.getAvatarURL(void 0, 100) : null,
                      size: o.AvatarSizes.DEPRECATED_SIZE_100,
                      className: S.marginBottom20,
                    }),
                null != t
                  ? (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(_.SubTitle, {
                          children: I.default.Messages.INVITE_MODAL_ERROR_TITLE,
                        }),
                        (0, s.jsx)(_.Title, { children: t }),
                      ],
                    })
                  : (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(_.SubTitle, { children: E }),
                        (0, s.jsxs)(_.Title, {
                          className: i(S.marginTop8, A.flexCenter),
                          children: [
                            l.productLine !== p.SKUProductLines.COLLECTIBLES &&
                              (0, s.jsx)(g.default, {
                                size: g.default.Sizes.MEDIUM,
                                className: N.applicationIcon,
                                game: u,
                                skuId: l.id,
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
        i = n("77078"),
        l = n("770032"),
        o = n("653047"),
        u = n("233069"),
        d = n("813006"),
        c = n("766274"),
        f = n("697218"),
        E = n("953109"),
        h = n("580357"),
        g = n("124969"),
        _ = n("587974"),
        m = n("158998"),
        p = n("49111"),
        T = n("238055"),
        I = n("91366"),
        N = n("782340"),
        A = n("985551");
      let S = () =>
          (0, s.jsxs)(a.Fragment, {
            children: [
              (0, s.jsx)(g.Avatar, {
                src: null,
                size: i.AvatarSizes.DEPRECATED_SIZE_100,
                className: A.avatar,
              }),
              (0, s.jsx)(g.SubTitle, {
                children:
                  N.default.Messages
                    .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, s.jsx)(g.Title, {
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
            return (0, s.jsx)(g.Avatar, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: i.AvatarSizes.SIZE_80,
              className: r ? A.compactAvatar : A.avatar,
            });
          if (null != t)
            return (0, s.jsx)(_.default, {
              mask: _.default.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: A.guildIcon,
              children: (0, s.jsx)(g.GuildIcon, {
                guild: t,
                size: g.GuildIcon.Sizes.LARGER,
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
            invite: _,
            disableUser: S = !1,
            error: C,
            flatActivityCount: O = !1,
            isRegister: v = !1,
          } = e,
          { currentUser: L, multiAccounts: M } = (0,
          r.useStateFromStoresObject)([l.default, f.default], () => ({
            currentUser: f.default.getCurrentUser(),
            multiAccounts: l.default.getUsers(),
          }));
        if (null == _) return null;
        let x = null != _.guild ? new d.default(_.guild) : null,
          y =
            null != _.channel
              ? (0, u.createChannelRecordFromInvite)(_.channel)
              : null,
          b =
            null != _.target_application
              ? new o.default(_.target_application)
              : null,
          D = S || null == _.inviter ? null : new c.default(_.inviter),
          U =
            (null != _.approximate_member_count &&
              _.approximate_member_count > 100) ||
            (null != x && x.hasFeature(p.GuildFeatures.COMMUNITY)),
          P = !U && null != D,
          G = null,
          F = !1;
        if (null != x)
          (G =
            null == D
              ? N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: m.default.getFormattedName(D),
                })),
            _.target_type === I.InviteTargetTypes.STREAM &&
              null != _.target_user &&
              (G = N.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: m.default.getFormattedName(_.target_user),
              })),
            _.target_type === I.InviteTargetTypes.EMBEDDED_APPLICATION &&
              null != _.target_application &&
              (G =
                null != D
                  ? N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format(
                      { username: m.default.getFormattedName(D) }
                    )
                  : N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            P &&
              null == b &&
              (n = (0, s.jsx)(g.GuildIcon, {
                className: A.icon,
                guild: x,
                size: g.GuildIcon.Sizes.SMALL,
              })),
            (a = x.name),
            null != b &&
              ((a = b.name),
              (E = (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(g.SubTitle, {
                    className: A.appIn,
                    children: N.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, s.jsxs)("div", {
                    className: A.guildContainer,
                    children: [
                      (0, s.jsx)(g.GuildIcon, {
                        guild: x,
                        size: g.GuildIcon.Sizes.SMALL,
                      }),
                      (0, s.jsx)(i.Text, {
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
          if (null == D) throw Error("no inviter in group DM invite");
          let e = m.default.getFormattedName(D);
          null != y.name && "" !== y.name
            ? ((G = N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e,
              })),
              (a = y.name),
              null != y.icon &&
                (n = (0, s.jsx)(g.ChannelIcon, {
                  channel: y,
                  size: i.AvatarSizes.SIZE_32,
                })))
            : ((G =
                N.default.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM),
              (a = e));
        } else if (null != D) {
          let e = m.default.getFormattedName(D, !0);
          (a =
            N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
              { username: e }
            )),
            (F = !0),
            (E =
              null != C
                ? null
                : (0, s.jsx)(g.SubTitle, {
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
              application: b,
              guild: x,
              user: P ? D : null,
              compact: F,
            }),
            null != C
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(g.SubTitle, {
                      children: N.default.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, s.jsx)(g.Title, { children: C }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(g.SubTitle, { children: G }),
                    (0, s.jsxs)(g.Title, {
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
            null != b ||
            F ||
            (null == _
              ? void 0
              : null === (t = _.guild) || void 0 === t
                ? void 0
                : t.id) === T.INVITE_ROUTING_HUB_GUILD_ID
              ? null
              : (0, s.jsx)(g.ActivityCount, {
                  className: A.activityCount,
                  online: _.approximate_presence_count,
                  total: _.approximate_member_count,
                  flat: O,
                }),
            M.length > 1 ? (0, s.jsx)(g.JoiningAs, { user: L }) : null,
          ],
        });
      };
    },
    291850: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LoginSpinner: function () {
            return q;
          },
          default: function () {
            return Q;
          },
        });
      var s = n("37983"),
        a = n("884691"),
        r = n("837291"),
        i = n("414456"),
        l = n.n(i),
        o = n("730290"),
        u = n("394846"),
        d = n("446674"),
        c = n("77078"),
        f = n("913144"),
        E = n("437822"),
        h = n("697796"),
        g = n("49671"),
        _ = n("524824"),
        m = n("21572"),
        p = n("791160"),
        T = n("434824"),
        I = n("24287"),
        N = n("382236"),
        A = n("770032"),
        S = n("724554"),
        R = n("878720"),
        C = n("25033"),
        O = n("589252"),
        v = n("970366"),
        L = n("113665"),
        M = n("425922"),
        x = n("271938"),
        y = n("72177"),
        b = n("476108"),
        D = n("145131"),
        U = n("124969"),
        P = n("980428"),
        G = n("599110"),
        F = n("659500"),
        j = n("773336"),
        w = n("404432"),
        k = n("719451"),
        B = n("331085"),
        H = n("598489"),
        V = n("49111"),
        Y = n("579033"),
        W = n("782340"),
        K = n("699177"),
        z = n("890957");
      function q() {
        return (0, s.jsx)(U.default, { children: (0, s.jsx)(c.Spinner, {}) });
      }
      class Z extends a.PureComponent {
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
            G.default.track(
              V.AnalyticEvents.LOGIN_VIEWED,
              {
                location:
                  null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...(null != n ? (0, p.default)(n, !1, !1) : {}),
              },
              { flush: !0 }
            ),
            null == g.default &&
              this.props.hasPasswordlessExperiment &&
              window.PublicKeyCredential &&
              PublicKeyCredential.isConditionalMediationAvailable &&
              PublicKeyCredential.isConditionalMediationAvailable().then(e => {
                e &&
                  (0, M.fetchWebAuthnConditionalChallenge)().then(e => {
                    let { challenge: t, ticket: n } = e,
                      s = JSON.parse(t);
                    (s.signal =
                      this.state.conditionalMediationAbortController.signal),
                      (0, r.get)((0, r.parseRequestOptionsFromJSON)(s)).then(
                        e => {
                          E.default
                            .loginWebAuthn({
                              ticket: n,
                              credential: JSON.stringify(e),
                              source: this.loginSource,
                              giftCodeSKUId: this.giftCodeSKUId,
                            })
                            .then(e => {
                              f.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e,
                              });
                            });
                        }
                      );
                  });
              }),
            E.default.getLocationMetadata(),
            (0, v.trackAppUIViewed)("login");
        }
        componentDidUpdate(e) {
          let { authenticated: t, location: n } = this.props,
            { checkingHandoff: s } = this.state;
          if (
            (t &&
              !e.authenticated &&
              !s &&
              (this.state.conditionalMediationAbortController.abort(),
              this.loginOrSSO(t, n)),
            e.errors !== this.props.errors)
          ) {
            var a, r, i;
            this.hasError("password")
              ? null === (a = this.passwordRef) || void 0 === a || a.focus()
              : this.hasError("email") || this.hasError("login")
                ? null === (r = this.loginRef) || void 0 === r || r.focus()
                : this.hasError("code") &&
                  (null === (i = this.codeRef) || void 0 === i || i.focus());
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
            ? (0, _.getLoginHandoffSourceFromRedirectTo)(a)
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
              ? E.default.verifySSOToken().then(() => this.transitionSSO(t))
              : this.transitionSSO(t));
        }
        transitionSSO(e) {
          let { transitionTo: t, redirectTo: n, replaceWith: s } = this.props,
            a = null != e ? (0, o.parse)(e.search) : {};
          if ((delete a.redirect_to, null != n)) null != s ? s(n) : t(n);
          else if (null == a.service) t(V.Routes.APP);
          else {
            let e =
                window.location.protocol +
                window.GLOBAL_ENV.API_ENDPOINT +
                V.Endpoints.SSO,
              t = { ...a, token: x.default.getToken() };
            window.location = "".concat(e, "?").concat((0, o.stringify)(t));
          }
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderHandOffAvailable() {
          let { authBoxClassName: e } = this.props;
          return (0, s.jsxs)(U.default, {
            className: e,
            children: [
              (0, s.jsx)(U.AuthSpinner, {}),
              (0, s.jsx)(U.Title, {
                className: z.marginBottom8,
                children: W.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE,
              }),
              (0, s.jsx)(U.SubTitle, {
                children:
                  W.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION,
              }),
            ],
          });
        }
        renderHandOffContinue() {
          let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
          return null == e
            ? null
            : (0, s.jsxs)(U.default, {
                className: n,
                children: [
                  (0, s.jsx)(U.Avatar, {
                    src: e.getAvatarURL(void 0, 100),
                    size: c.AvatarSizes.DEPRECATED_SIZE_100,
                    className: z.marginBottom20,
                  }),
                  (0, s.jsx)(U.Title, {
                    className: z.marginBottom8,
                    children:
                      W.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                        name: e.toString(),
                      }),
                  }),
                  (0, s.jsx)(U.SubTitle, {
                    className: z.marginBottom40,
                    children: W.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY,
                  }),
                  (0, s.jsxs)(U.Block, {
                    children: [
                      (0, s.jsx)(U.Button, {
                        onClick: () => t(V.Routes.APP),
                        className: z.marginBottom8,
                        children:
                          W.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format(
                            { name: e.toString() }
                          ),
                      }),
                      (0, s.jsx)(U.Button, {
                        look: U.Button.Looks.LINK,
                        color: U.Button.Colors.LINK,
                        onClick: this.handleReset,
                        children:
                          W.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL,
                      }),
                    ],
                  }),
                ],
              });
        }
        renderDisabledAccount() {
          let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === V.LoginStates.ACCOUNT_DISABLED,
            n = t
              ? W.default.Messages.ACCOUNT_DISABLED_TITLE
              : W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
            a = t
              ? W.default.Messages.ACCOUNT_DISABLED_DESCRIPTION
              : W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
          return (0, s.jsx)(U.default, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, s.jsxs)(c.HeadingLevel, {
              component: (0, s.jsx)(U.Title, {
                className: z.marginBottom8,
                children: n,
              }),
              children: [
                (0, s.jsx)(U.SubTitle, {
                  className: z.marginBottom20,
                  children: a,
                }),
                (0, s.jsxs)(U.Block, {
                  children: [
                    (0, s.jsx)(U.Button, {
                      color: U.Button.Colors.BRAND,
                      type: "submit",
                      children: W.default.Messages._RETURN_TO_LOGIN,
                    }),
                    (0, s.jsx)("div", {
                      className: l(z.marginTop8, K.needAccount),
                      children:
                        W.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format(
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
          return (0, s.jsxs)(U.default, {
            className: e,
            children: [
              (0, s.jsx)(k.InviteResolvingHeader, {}),
              (0, s.jsxs)(U.Block, {
                className: z.marginTop20,
                children: [
                  (0, s.jsx)(O.default, {
                    className: z.marginBottom20,
                    alpha2: t.alpha2,
                    countryCode: t.code.split(" ")[0],
                    label: W.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
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
                  (0, s.jsx)(U.Input, {
                    className: z.marginBottom20,
                    label: W.default.Messages.FORM_LABEL_PASSWORD,
                    onChange: e => this.setState({ password: e }),
                    type: "password",
                    setRef: this.setPasswordRef,
                    autoComplete: "off",
                    spellCheck: "false",
                    value: this.state.password,
                    required: !0,
                  }),
                  (0, s.jsx)(U.Button, {
                    className: z.marginBottom8,
                    type: "submit",
                    disabled: !0,
                    children: W.default.Messages._LOGIN,
                  }),
                  (0, s.jsx)(U.Button, {
                    disabled: !0,
                    look: U.Button.Looks.LINK,
                    color: U.Button.Colors.LINK,
                    children: W.default.Messages.FORGOT_PASSWORD,
                  }),
                  (0, s.jsx)(U.Button, {
                    disabled: !0,
                    className: z.marginTop4,
                    look: U.Button.Looks.LINK,
                    color: U.Button.Colors.LINK,
                    children: W.default.Messages.NEED_ACCOUNT,
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
              disableAutofocusOnDefaultForm: d,
            } = this.props,
            f = !this.hasError("email") && this.hasError("password"),
            E = (null == a ? void 0 : a.stage_instance) != null;
          return (
            (n =
              null == a || E
                ? null != r
                  ? (0, s.jsx)(w.default, { giftCode: r })
                  : (0, s.jsxs)("div", {
                      className: K.header,
                      children: [
                        (0, s.jsx)(
                          U.Title,
                          {
                            className: z.marginBottom8,
                            children: W.default.Messages.LOGIN_TITLE,
                          },
                          "title"
                        ),
                        !1 === (0, j.isAndroidWeb)()
                          ? (0, s.jsx)(
                              U.SubTitle,
                              { children: W.default.Messages.AUTH_LOGIN_BODY },
                              "subtitle"
                            )
                          : null,
                      ],
                    })
                : (0, s.jsx)(k.default, { invite: a })),
            (0, s.jsxs)(
              D.default,
              {
                direction: D.default.Direction.HORIZONTAL,
                align: D.default.Align.CENTER,
                children: [
                  (0, s.jsxs)("div", {
                    className: K.mainLoginContainer,
                    children: [
                      this.canShowChooseAccount &&
                        this.state.dismissedChooseAccount &&
                        (0, s.jsx)(U.Button, {
                          onClick: () => {
                            this.setState(e => ({
                              ...e,
                              dismissedChooseAccount: !1,
                            }));
                          },
                          look: U.Button.Looks.LINK,
                          color: U.Button.Colors.PRIMARY,
                          className: K.goBackButton,
                          children: (0, s.jsxs)("div", {
                            className: K.content,
                            children: [
                              (0, s.jsx)(P.default, {
                                width: 16,
                                height: 16,
                                className: K.caret,
                              }),
                              (0, s.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: W.default.Messages.AGE_GATE_GO_BACK,
                              }),
                            ],
                          }),
                        }),
                      n,
                      (0, s.jsx)(c.HeadingLevel, {
                        children: (0, s.jsxs)(U.Block, {
                          className: z.marginTop20,
                          children: [
                            (0, s.jsx)(O.default, {
                              alpha2: o.alpha2,
                              countryCode: o.code.split(" ")[0],
                              className: z.marginBottom20,
                              label:
                                W.default.Messages
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
                              autoComplete: this.props.hasPasswordlessExperiment
                                ? "webauthn"
                                : "off",
                              autoCorrect: "off",
                              spellCheck: "false",
                              value: this.state.login,
                              autoFocus: !f && !u && !d,
                              required: !0,
                            }),
                            (0, s.jsx)(U.Input, {
                              label: W.default.Messages.FORM_LABEL_PASSWORD,
                              error: this.renderError("password"),
                              onChange: e => this.setState({ password: e }),
                              name: "password",
                              type: "password",
                              setRef: this.setPasswordRef,
                              autoComplete: "off",
                              spellCheck: "false",
                              autoFocus: f && !u && !d,
                              value: this.state.password,
                              required: !0,
                            }),
                            (0, s.jsx)(U.Button, {
                              onClick: this.handleForgotPassword,
                              look: U.Button.Looks.LINK,
                              color: U.Button.Colors.LINK,
                              className: l(z.marginBottom20, z.marginTop4),
                              children: W.default.Messages.FORGOT_PASSWORD,
                            }),
                            (0, s.jsx)(U.Button, {
                              type: "submit",
                              submitting: i === V.LoginStates.LOGGING_IN,
                              color: E
                                ? U.Button.Colors.GREEN
                                : U.Button.Colors.BRAND,
                              className: z.marginBottom8,
                              children: E
                                ? W.default.Messages._LOGIN_STAGE
                                : W.default.Messages._LOGIN,
                            }),
                            (0, s.jsxs)("div", {
                              className: z.marginTop4,
                              children: [
                                (0, s.jsx)("span", {
                                  className: K.needAccount,
                                  children: W.default.Messages.NEED_ACCOUNT,
                                }),
                                (0, s.jsx)(U.Button, {
                                  onClick: this.handleGotoRegister,
                                  look: U.Button.Looks.LINK,
                                  color: U.Button.Colors.LINK,
                                  className: K.smallRegisterLink,
                                  children: W.default.Messages.REGISTER,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.HeadingLevel, {
                    children: e
                      ? (0, s.jsx)(B.default, {
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
            className: K.pageContainer,
            children: [
              (0, s.jsx)(U.default, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: e,
                expanded: !0,
                children: this.renderDefaultForm(!0),
              }),
              t && (0, s.jsx)(N.default, {}),
            ],
          });
        }
        renderGuildTemplate(e) {
          return (0, s.jsx)(H.default, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: l(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [
              (0, s.jsx)(T.default, { guildTemplate: e }, "template"),
              this.renderDefaultForm(!1),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, s.jsx)(U.default, {
            style: { padding: 0 },
            children: (0, s.jsx)(I.MFASlides, {
              mfaFinish: this.handleTokenSubmitMFA,
              request: e,
              onEarlyClose: () => {
                f.default.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderIPAuthorization() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, s.jsx)(U.default, {
            tag: "form",
            className: e,
            children: (0, s.jsx)(m.default, {
              title: W.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
              subtitle:
                W.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format(
                  { onResendClick: this.handleResendCode }
                ),
              error: t,
              onSubmit: this.handleIPAuthorize,
              onCancel: E.default.loginReset,
            }),
          });
        }
        renderPasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, s.jsx)(U.default, {
            tag: "form",
            className: e,
            children: (0, s.jsx)(m.default, {
              title: W.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
              subtitle:
                W.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format(
                  { onResendClick: this.handleResendCode }
                ),
              error: t,
              onSubmit: this.handlePasswordReset,
              onCancel: E.default.loginReset,
            }),
          });
        }
        renderChooseAccount() {
          return (0, s.jsx)(S.default, {
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
            { checkingHandoff: i, redirecting: l } = this.state;
          if (l || i) return (0, s.jsx)(q, {});
          if (r) return this.renderHandOffAvailable();
          if (e && i) return this.renderHandOffContinue();
          switch (a) {
            case V.LoginStates.LOGGING_IN_MFA_SMS:
            case V.LoginStates.MFA_SMS_STEP:
            case V.LoginStates.LOGGING_IN_MFA:
            case V.LoginStates.MFA_STEP:
              return this.renderMFA();
            case V.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
            case V.LoginStates.ACCOUNT_DISABLED:
              return this.renderDisabledAccount();
            case V.LoginStates.PHONE_IP_AUTHORIZATION:
              return this.renderIPAuthorization();
            case V.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
              return this.renderPasswordRecovery();
            case V.LoginStates.LOGGING_IN:
            case V.LoginStates.NONE:
            default:
              if (null != t && t.state === V.InviteStates.RESOLVING)
                return this.renderResolving();
              if (null != n) {
                if (n.state === Y.GuildTemplateStates.RESOLVING)
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
              await E.default.loginToken(e, !1),
                G.default.track(V.AnalyticEvents.LOGIN_SUCCESSFUL, {
                  source: V.LoginSuccessfulSources.QR_CODE,
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
                E.default.login({
                  login: this.getFullLogin(),
                  password: t,
                  undelete: n,
                  source: this.loginSource,
                  giftCodeSKUId: this.giftCodeSKUId,
                  invite: this.props.invite,
                }),
                F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE);
            }),
            (this.handleIPAuthorize = async e => {
              let { password: t, undelete: n } = this.state,
                s = this.getFullLogin();
              try {
                let { token: a } = await R.default.verifyPhone(s, e, !1);
                await E.default.authorizeIPAddress(a),
                  E.default.login({
                    login: s,
                    password: t,
                    undelete: n,
                    source: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                  }),
                  F.ComponentDispatch.dispatch(
                    V.ComponentActions.WAVE_EMPHASIZE
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
                let { token: n } = await R.default.verifyPhone(
                  this.getFullLogin(),
                  e,
                  !1
                );
                t(V.Routes.RESET, {
                  search: (0, o.stringify)({ token: n, from_login: "true" }),
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
                F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE),
                E.default.loginMFAv2({
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
                F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE),
                  await E.default.forgotPassword(t),
                  (0, c.openModal)(e =>
                    (0, s.jsx)(c.ConfirmModal, {
                      header:
                        W.default.Messages
                          .EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                      confirmText: W.default.Messages.OKAY,
                      confirmButtonColor: U.Button.Colors.BRAND,
                      className: u.isMobile ? K.mobile : "",
                      ...e,
                      children: (0, s.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children:
                          W.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format(
                            { email: t }
                          ),
                      }),
                    })
                  );
              } catch {}
            }),
            (this.handleResendCode = () => {
              R.default.resendCode(this.getFullLogin());
            }),
            (this.handleReset = e => {
              null != e && e.preventDefault(),
                E.default.loginReset(),
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
                  transitionTo: i,
                  redirectTo: l,
                } = this.props,
                u = null != r ? (0, o.parse)(r.search) : {};
              "" !== t && (u.email = t),
                null != n
                  ? ((u.mode = "register"), (e = V.Routes.INVITE(n.code)))
                  : null != s
                    ? ((u.mode = "register"), (e = V.Routes.GIFT_CODE(s.code)))
                    : null != a
                      ? (e = V.Routes.GUILD_TEMPLATE(a.code))
                      : null != l
                        ? ((e = V.Routes.REGISTER), (u.redirect_to = l))
                        : (e = V.Routes.REGISTER),
                E.default.loginReset(),
                i(e, { search: (0, o.stringify)(u) }),
                F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE);
            });
          let a = null != e.location ? (0, o.parse)(e.location.search) : {};
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
            conditionalMediationAbortController: new AbortController(),
          };
        }
      }
      Z.defaultProps = { transitionTo: e => n.g.location.assign(e) };
      var Q = function (e) {
        let t = (0, d.useStateFromStoresObject)(
            [y.default, b.default, x.default, A.default, C.default],
            () => ({
              authenticated: x.default.isAuthenticated(),
              handoffAvailable: y.default.isHandoffAvailable(),
              user: y.default.user,
              loginStatus: x.default.getLoginStatus(),
              mfaTicket: x.default.getMFATicket(),
              mfaSMS: x.default.getMFASMS(),
              mfaMethods: x.default.getMFAMethods(),
              maskedPhone: x.default.getMaskedPhone(),
              errors: x.default.getErrors(),
              defaultRoute: b.default.defaultRoute,
              country: C.default.getCountryCode(),
              hasLoggedInAccounts: A.default.getHasLoggedInAccounts(),
            })
          ),
          n = L.default.useExperiment({ location: "login" }).enabled;
        return (0, s.jsx)(Z, { ...e, ...t, hasPasswordlessExperiment: n });
      };
    },
    275744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007"),
        n("506083");
      var s = n("37983"),
        a = n("884691"),
        r = n("730290"),
        i = n("803182"),
        l = n("446674"),
        o = n("437822"),
        u = n("697796"),
        d = n("524824"),
        c = n("393414"),
        f = n("271938"),
        E = n("291850"),
        h = n("49111"),
        g = n("724210");
      function _(e) {
        let t = a.useCallback(
            t => {
              if (
                (function (e) {
                  var t;
                  let n = (0, i.matchPath)(e, {
                    path: h.Routes.CHANNEL(":guildId", ":channelId"),
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
          { isAuthenticated: n, loginStatus: _ } = (0,
          l.useStateFromStoresObject)([f.default], () => ({
            isAuthenticated: f.default.isAuthenticated(),
            loginStatus: f.default.getLoginStatus(),
          })),
          { location: m, redirectTo: p } = e,
          [T, I] = a.useState(n);
        function N(e) {
          let { handoffKey: t, handoffToken: n, handoffSource: s } = e;
          (0, u.handoffFromApp)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: s,
          }),
            I(!1);
        }
        return (a.useEffect(() => {
          if (null != m) {
            let { handoff_key: e, handoff_token: t } = (0, r.parse)(m.search);
            if (null != e && null != t) {
              let n =
                null != p
                  ? (0, d.getLoginHandoffSourceFromRedirectTo)(p)
                  : void 0;
              T
                ? o.default.logout(null).finally(() => {
                    N({ handoffKey: e, handoffToken: t, handoffSource: n });
                  })
                : N({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
          }
        }, []),
        T || _ === h.LoginStates.LOGGING_IN)
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
        i,
        l = n("37983"),
        o = n("884691"),
        u = n("981980"),
        d = n("872717"),
        c = n("77078"),
        f = n("308289"),
        E = n("905949"),
        h = n("605250"),
        g = n("671278"),
        _ = n("124969"),
        m = n("659500"),
        p = n("274515"),
        T = n("158998"),
        I = n("49111"),
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
        ((i = a || (a = {}))[(i.QR_CODE = 0)] = "QR_CODE"),
        (i[(i.CONFIRM = 1)] = "CONFIRM");
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
          (0, l.jsx)("div", {
            className: S.qrCodeContainer,
            children:
              "" !== t && n
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(g.default, {
                        className: S.qrCode,
                        size: 160,
                        text: t,
                      }),
                      (0, l.jsx)("div", {
                        className: S.qrCodeOverlay,
                        children: (0, l.jsx)("img", { src: C, alt: "" }),
                      }),
                    ],
                  })
                : (0, l.jsx)("div", {
                    className: S.qrCodeOverlay,
                    "aria-label":
                      A.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                    "aria-busy": !0,
                    children: (0, l.jsx)(c.Spinner, {
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
        return (0, l.jsx)(c.Text, {
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
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(v, {
                  text:
                    1 === t.step
                      ? "https://discord.com/ra/".concat(t.fingerprint)
                      : "",
                }),
                (0, l.jsx)(_.Title, {
                  className: R.marginBottom8,
                  children: A.default.Messages.LOGIN_WITH_QR,
                }),
                null != s
                  ? (0, l.jsx)(L, { children: s })
                  : (0, l.jsx)(_.SubTitle, {
                      children:
                        A.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format(),
                    }),
              ],
            });
          case 3:
          case 2: {
            let { user: e } = t;
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(f.default, {
                  className: S.qrAvatar,
                  user: e,
                  size: c.AvatarSizes.SIZE_120,
                  isMobile: !0,
                  status: N.StatusTypes.ONLINE,
                }),
                (0, l.jsx)(_.Title, {
                  className: R.marginBottom8,
                  children: A.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE,
                }),
                (0, l.jsx)(_.SubTitle, {
                  children: A.default.Messages.LOGIN_AS.format({
                    username: "".concat(T.default.getUserTag(e)),
                  }),
                }),
                (0, l.jsx)(c.Button, {
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
            return (0, l.jsx)(c.Spinner, {
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
              [r, i] = o.useState({ step: 0 }),
              [l, d] = o.useState(null),
              c = (0, E.default)(),
              f = o.useMemo(() => new u.default(1500, 3e4), []),
              h = o.useRef();
            h.current = o.useCallback(() => {
              i({ step: 0 }),
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
                })(h)();
              }, [h]),
              _ = o.useCallback(() => {
                O.error(
                  "Could not complete QR code login, trying to restart with a new QR code."
                ),
                  i({ step: 0 }),
                  !f.pending && f.fail(g);
              }, [g, f]);
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
                  l = null,
                  o = null,
                  u = null,
                  c = null,
                  E = !0;
                function h() {
                  if (null != l) return l;
                  throw Error("No key pair set");
                }
                let T = () => {
                  E
                    ? ((E = !1), a.send(JSON.stringify({ op: "heartbeat" })))
                    : (r("heartbeat timeout, reconnecting."), a.close(), _());
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
                            I.ComponentActions.WAVE_EMPHASIZE
                          );
                        let e = await (0, p.publicKeyFingerprint)(h());
                        if (e !== s.fingerprint)
                          throw Error(
                            "bad fingerprint "
                              .concat(e, " !== ")
                              .concat(s.fingerprint)
                          );
                        r("handshake complete awaiting remote auth."),
                          i({ step: 1, fingerprint: e });
                        return;
                      }
                      case "pending_login": {
                        let e = s.ticket;
                        null == e && _(), i({ step: 4, ticket: e });
                        return;
                      }
                      case "pending_ticket": {
                        m.ComponentDispatch.dispatch(
                          I.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r(
                            "remote auth handshake started, awaiting ticket/cancel."
                          );
                        let e = s.encrypted_user_payload,
                          t = await (0, p.decodeEncodedUserRecord)(h(), e);
                        i({ step: 3, user: t });
                        return;
                      }
                      case "pending_finish": {
                        m.ComponentDispatch.dispatch(
                          I.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r(
                            "remote auth handshake started, awaiting finish/cancel."
                          );
                        let e = s.encrypted_user_payload,
                          t = await (0, p.decodeEncodedUserRecord)(h(), e);
                        i({ step: 2, user: t });
                        return;
                      }
                      case "finish": {
                        m.ComponentDispatch.dispatch(
                          I.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r("remote auth handshake finished.");
                        let t = s.encrypted_token;
                        i({ step: 5 });
                        let n = await (0, p.decryptEncodedCiphertext)(h(), t);
                        e(n);
                        return;
                      }
                      case "cancel":
                        r("remote auth handshake cancelled."), g();
                        return;
                      case "hello": {
                        r(
                          "got hello, auth timeout=".concat(s.timeout_ms, "ms")
                        );
                        let e = s.heartbeat_interval;
                        c = setTimeout(
                          () => {
                            (c = null), T(), (u = setInterval(T, e));
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
                    (l = await (0, p.generateRsaKeyPair)()),
                      (o = await (0, p.serializePublicKey)(l));
                    let e = await (0, p.publicKeyFingerprint)(l);
                    r("connected, handshaking with fingerprint: ".concat(e)),
                      a.send(
                        JSON.stringify({ op: "init", encoded_public_key: o })
                      ),
                      d(l);
                  }),
                  (a.onclose = e => {
                    r(
                      "disconnected, code: "
                        .concat(e.code, " ")
                        .concat(e.reason)
                    ),
                      _();
                  }),
                  (a.onerror = e => {
                    r("disconnected, error: ".concat(JSON.stringify(e))), _();
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
              }, [g, e, t, f, _]),
              { state: r, rsaKeyPair: l, cancel: g, handleFailure: _ }
            );
          })(t),
          i = (function (e) {
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
              d.HTTP.post({
                url: I.Endpoints.REMOTE_AUTH_LOGIN,
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
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", { className: S.verticalSeparator }),
              (0, l.jsx)(c.Sequencer, {
                fillParent: !0,
                className: S.qrLogin,
                step: i,
                steps: [0, 1],
                children: (0, l.jsx)("div", {
                  className: S.qrLoginInner,
                  children: (0, l.jsx)(M, { state: n, cancel: a }),
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
        i = n("124969"),
        l = n("316664");
      function o(e) {
        let { children: t, className: n, ...a } = e,
          o = t();
        return (0, s.jsx)(i.default, {
          ...a,
          className: r(n, l.container),
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
        r = n("414456"),
        i = n.n(r),
        l = n("730290"),
        o = n("506838"),
        u = n("759843"),
        d = n("446674"),
        c = n("862337"),
        f = n("77078"),
        E = n("437822"),
        h = n("678916"),
        g = n("816540"),
        _ = n("208266"),
        m = n("428958"),
        p = n("307439"),
        T = n("765825"),
        I = n("715570"),
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
        b = n("2581"),
        D = n("644417"),
        U = n("697543"),
        P = n("79345"),
        G = n("447997"),
        F = n("970366"),
        j = n("271938"),
        w = n("350522"),
        k = n("476108"),
        B = n("124969"),
        H = n("980428"),
        V = n("599110"),
        Y = n("659500"),
        W = n("718517"),
        K = n("159885"),
        z = n("404432"),
        q = n("719451"),
        Z = n("598489"),
        Q = n("49111"),
        J = n("771848"),
        X = n("492397"),
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
      class ei extends a.PureComponent {
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
            T.default.trackExposure({ location: "0ba758_1" });
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
              onChangeStep: i,
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
                            W.default.Millis.SECOND,
                          () => {
                            this.setState({ isRateLimited: !1 });
                          }
                        ))),
            s &&
              !e.authenticated &&
              ((0, M.setNewUser)($.NewUserTypes.ORGANIC_REGISTERED),
              this.redirectIfAuthenticated());
          let o = J.RegistrationSteps.FULL;
          a || this.hasError("date_of_birth")
            ? (o = J.RegistrationSteps.AGE_GATE)
            : null != r &&
              (null != r.guild || null != r.channel) &&
              (o = J.RegistrationSteps.INVITE),
            i(o);
        }
        redirectIfAuthenticated() {
          let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
          e && t(null != n ? n : k.default.defaultRoute);
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
              invite: i,
              guildTemplate: l,
              giftCode: o,
              onRegister: u,
              usernameSuggestion: d,
              isMobileWebInviteRegistration: c,
            } = this.props,
            f = null != i ? i.code : null,
            E = null != o ? o.skuId : null,
            h = p.usePromoEmailConsentStore.getState(),
            g = (0, K.isNullOrEmpty)(d) ? null : t === d,
            _ = X.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t,
            m = X.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(n) : n;
          Y.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
          try {
            c || null == i
              ? await (0, I.registerFull)({
                  email: e,
                  username: _,
                  globalName: m,
                  consent: a,
                  password: s,
                  invite: f,
                  usedUsernameSuggestion: g,
                  guildTemplateCode: null == l ? void 0 : l.code,
                  giftCodeSKUId: E,
                  birthday: r,
                  promoEmailConsent: h.required ? h : null,
                })
              : await (0, I.default)({
                  consent: a,
                  invite: f,
                  giftCodeSKUId: E,
                  usedUsernameSuggestion: g,
                  globalName: m,
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
            i = null;
          return (
            t
              ? (i = (0, s.jsx)(N.default, {
                  value: e,
                  onChange: e => this.setState({ consent: e }),
                  subText: et.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY,
                  }),
                }))
              : (r = (0, s.jsx)(B.SubText, {
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
            { subText: r, consentText: i }
          );
        }
        renderInviteResolving() {
          let { authBoxClassName: e } = this.props,
            t = e => {
              this.setState({ globalName: e });
            },
            n = this.state.globalName;
          return (0, s.jsxs)(B.default, {
            className: e,
            children: [
              (0, s.jsx)(q.InviteResolvingHeader, {}),
              (0, s.jsxs)(B.Block, {
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
                      return (0, s.jsx)(B.Input, {
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
                  (0, s.jsx)(B.Button, {
                    className: es.marginTop20,
                    disabled: !0,
                    children: et.default.Messages.CONTINUE,
                  }),
                  (0, s.jsx)(B.SubText, {
                    disabled: !0,
                    className: es.marginTop8,
                    children: et.default.Messages.TERMS_PRIVACY.format({
                      termsURL: Q.MarketingURLs.TERMS,
                      privacyURL: Q.MarketingURLs.PRIVACY,
                    }),
                  }),
                  X.CONFERENCE_MODE_ENABLED
                    ? null
                    : (0, s.jsx)(B.Button, {
                        look: B.Button.Looks.LINK,
                        color: B.Button.Colors.LINK,
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
            r = B.Button.Colors.BRAND,
            i = et.default.Messages.CONTINUE;
          return (
            (null == e ? void 0 : e.stage_instance) != null &&
              ((r = B.Button.Colors.GREEN),
              (i = et.default.Messages.INSTANT_INVITE_ACCEPT_STAGE)),
            (0, s.jsx)(f.Tooltip, {
              text:
                !a && n
                  ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                  : null,
              children: e =>
                (0, s.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, s.jsx)(B.Button, {
                    type: "submit",
                    submitting: t,
                    disabled: !this.hasConsent(),
                    color: r,
                    children: i,
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
            { subText: r, consentText: i } = this.renderConsentComponents(),
            l =
              (null == e ? void 0 : e.stage_instance) != null ||
              (null == e ? void 0 : e.guild_scheduled_event) != null,
            o = e => {
              this.setState({ globalName: e });
            },
            u = this.state.globalName;
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)(B.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: t,
                children: [
                  this.renderInviteHeader(),
                  l ? (0, s.jsx)("div", { className: en.divider }) : null,
                  (0, s.jsxs)(B.Block, {
                    className: l ? void 0 : es.marginTop40,
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
                          return (0, s.jsx)(B.Input, {
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
                      i,
                      X.CONFERENCE_MODE_ENABLED
                        ? null
                        : (0, s.jsx)(B.Button, {
                            look: B.Button.Looks.LINK,
                            color: B.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: es.marginTop20,
                            children: et.default.Messages.ALREADY_HAVE_ACCOUNT,
                          }),
                    ],
                  }),
                ],
              }),
              null != e && l
                ? (0, s.jsx)(B.default, {
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
            : (0, s.jsx)(B.SubText, {
                className: i(es.marginTop20, en.errorMessage),
                children: e,
              });
        }
        renderFull(e, t) {
          let {
              email: n,
              username: r,
              globalName: l,
              password: o,
              consent: u,
              parsedDateOfBirth: d,
              globalNameFocused: c,
              emailClientError: E,
              usernameClientError: h,
              passwordClientError: g,
              dateOfBirthClientError: m,
            } = this.state,
            {
              registering: p,
              consentRequired: T,
              isMobileWebInviteRegistration: I,
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
            { subText: D, consentText: U } = this.renderConsentComponents(),
            P = this.renderErrorMessage(),
            F = (0, s.jsx)(f.Tooltip, {
              text:
                !u && T
                  ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                  : null,
              children: e =>
                (0, s.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, s.jsx)(B.Button, {
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
                  l.length > 0 &&
                  !b.default.wasRegistrationSuggestionFetched(l) &&
                  (await y.default.fetchSuggestionsRegistration(l));
            },
            w =
              null != e
                ? (0, s.jsx)(a.Fragment, { children: e() }, "custom-header")
                : (0, s.jsx)(
                    B.Title,
                    { children: et.default.Messages.REGISTER_TITLE },
                    "title"
                  ),
            k = (0, s.jsxs)(B.Block, {
              className: es.marginTop20,
              children: [
                (0, s.jsx)(B.Input, {
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
                (0, s.jsx)(B.Input, {
                  label: et.default.Messages.DISPLAY_NAME,
                  className: es.marginBottom20,
                  name: "global_name",
                  value: l,
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
                    (0, s.jsx)(B.Input, {
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
                (0, s.jsx)(B.Input, {
                  label: et.default.Messages.FORM_LABEL_PASSWORD,
                  name: "password",
                  value: o,
                  onChange: e =>
                    this.setState({
                      password: e,
                      passwordClientError:
                        0 === e.length ? et.default.Messages.REQUIRED : null,
                    }),
                  error: null != g ? g : er(v),
                  type: "password",
                  setRef: e => {
                    this.passwordRef = e;
                  },
                  required: !0,
                }),
                (0, s.jsx)(_.default, {
                  label: et.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                  wrapperClassName: es.marginTop20,
                  name: "date_of_birth",
                  onChange: this.handleBirthdayChange,
                  ref: this.dateOfBirthRef,
                  error: null != m ? m : er(L),
                  value: d,
                  required: !0,
                }),
                x && D,
                (0, s.jsx)(S.default, {}),
                F,
                P,
                U,
                !x && D,
                X.CONFERENCE_MODE_ENABLED
                  ? null
                  : (0, s.jsx)(B.Button, {
                      look: I ? B.Button.Looks.FILLED : B.Button.Looks.LINK,
                      color: I ? B.Button.Colors.PRIMARY : B.Button.Colors.LINK,
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
                className: i(A, en.horizontalAuthBox),
                children: () => [
                  w,
                  (0, s.jsxs)(
                    "div",
                    {
                      className: en.flex,
                      children: [
                        (0, s.jsx)(B.Title, {
                          className: en.createAccountTemplateHeader,
                          children: et.default.Messages.REGISTER_TITLE,
                        }),
                        k,
                      ],
                    },
                    "register-title"
                  ),
                ],
              })
            : (0, s.jsxs)(B.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: A,
                children: [
                  M && !I
                    ? (0, s.jsx)(B.Button, {
                        onClick: this.handleGotoLogin,
                        look: B.Button.Looks.LINK,
                        color: B.Button.Colors.PRIMARY,
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
                  w,
                  k,
                ],
              });
        }
        render() {
          let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
          if (e || this.hasError("date_of_birth"))
            return (0, s.jsx)(g.default, {});
          let { invite: n, giftCode: a, guildTemplate: r } = this.props,
            i =
              null != n &&
              null == n.guild &&
              null == n.channel &&
              null != n.inviter;
          return null == n || i || t
            ? null != r
              ? this.renderFull(
                  () => (0, s.jsx)(v.default, { guildTemplate: r }),
                  !0
                )
              : null != a
                ? this.renderFull(() => (0, s.jsx)(z.default, { giftCode: a }))
                : null != n && i && n.state === Q.InviteStates.RESOLVED && !t
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
                  location: i,
                  onLoginStart: o,
                  redirectTo: u,
                  transitionTo: d,
                  isMobileWebInviteRegistration: c,
                } = this.props;
              if (c) {
                null == o || o(e);
                return;
              }
              let f = null != i ? (0, l.parse)(i.search) : {};
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
                d(t, { search: (0, l.stringify)(f) }),
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
                { invite: r, consentRequired: i } = this.props;
              if (null !== i) {
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
            [w.default, j.default, h.default, x.default, L.default],
            () => ({
              consentRequired: w.default.getAuthenticationConsentRequired(),
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
          n = (0, U.useUURegistrationExperiment)(),
          r = (0, d.useStateFromStores)([b.default], () =>
            b.default.registrationUsernameSuggestion()
          ),
          [i, l] = a.useState(J.RegistrationSteps.FULL);
        return (
          (0, m.default)(
            {
              type: u.ImpressionTypes.VIEW,
              name: u.ImpressionNames.USER_REGISTRATION,
              properties: {
                impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                step: i,
              },
            },
            {},
            [i]
          ),
          (0, s.jsx)(ei, {
            onChangeStep: e => l(e),
            registrationCopyExperimentConfig: T.default.getCurrentConfig(
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
            livecheckEnabled: i,
            isUsernameFocused: l,
            onClickSuggestion: u,
          } = e,
          d = (0, P.useUsernameStatus)(n, i, !0),
          c = i && n.length > 0;
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
                  D.NameValidationState.ERROR) ||
              l,
            top: -12,
            bottom: 20,
            children: t,
          })
        );
      }
      ei.defaultProps = {
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
        i = n("697796"),
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
            ? s.HTTP.post({
                url: c.Endpoints.HANDOFF_EXCHANGE,
                body: { key: t, handoff_token: n },
              }).then(
                e => {
                  let { body: t } = e;
                  (0, i.handoffSetUser)(t.user),
                    r.default.loginToken(t.token, !1),
                    f(!0, o);
                },
                e => {
                  if (
                    (null != a && f(!1, o),
                    r.default.setFingerprint(a),
                    (0, i.handoffEnd)(),
                    o === l.LoginHandoffSource.ROLE_SUBSCRIPTION)
                  ) {
                    var t;
                    u.default.track(
                      c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE,
                      {
                        reason:
                          null !== (t = e.message) && void 0 !== t ? t : e.text,
                        handoff_source: o,
                      }
                    );
                  }
                }
              )
            : null != a
              ? (r.default.setFingerprint(a), f(!1, o), (0, i.handoffEnd)())
              : (r.default.setFingerprint(a), (0, i.handoffUnavailable)());
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
                : (r.default.setFingerprint(null), (0, i.handoffUnavailable)());
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
        i = n("266491");
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
                let { component: s, render: i, ...o } = e.props,
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
                    staticContext: l,
                  }),
                  null != s
                    ? (c = a.createElement(s, o))
                    : null != i && (c = i(o)));
              }
            }),
            (0, s.jsx)(i.TransitionGroup, { ...u, children: c })
          );
        }
      }
      var o = (0, r.withRouter)(l);
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
        i = n("599110"),
        l = n("586391"),
        o = n("49111");
      function u(e, t) {
        return (
          (0, r.default)(e, t),
          i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: t,
            action: l.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
          }),
          s.HTTP.patch({
            url: o.Endpoints.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
          }).then(e => {
            let n = e.body;
            a.default.dispatch({ type: "CURRENT_USER_UPDATE", user: n }),
              i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                source: t,
                action: l.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
              });
          })
        );
      }
      function d(e) {
        a.default.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
          i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
            source: e,
            action:
              l.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
          });
      }
      function c(e) {
        a.default.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
          i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
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
        r = n("913144"),
        i = n("773336"),
        l = n("586391");
      let o = null,
        u = "underage";
      class d extends a.default.Store {
        isUnderageAnonymous() {
          if (i.isPlatformEmbedded) {
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
        i = n("124969"),
        l = n("701909"),
        o = n("49111"),
        u = n("782340"),
        d = n("168500");
      let c = () => (0, r.transitionTo)(o.Routes.LOGIN);
      var f = e => {
        let { authBoxClassName: t, underageMessage: r } = e;
        return (0, s.jsxs)(i.default, {
          className: t,
          children: [
            (0, s.jsx)("img", { alt: "", src: n("803452"), className: d.img }),
            (0, s.jsx)(i.Title, {
              className: d.title,
              children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER,
            }),
            (0, s.jsx)(i.SubTitle, {
              className: d.subtitle,
              children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                underageMessage:
                  null != r
                    ? r
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
            return I;
          },
        }),
        n("222007"),
        n("424973");
      var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        i = n.n(r),
        l = n("866227"),
        o = n.n(l),
        u = n("77078"),
        d = n("414943"),
        c = n("782340"),
        f = n("283764");
      let E = o().localeData().months(),
        h = Array.from(Array(31).keys()).map(e => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        g = Array.from(Array(12).keys()).map(e => ({
          value: e + 1,
          label: E[e],
        })),
        _ = /[a-zA-Z0-9]/;
      function m(e) {
        let { options: t, selectOption: n, children: r } = e,
          [i, l] = a.useState("");
        a.useEffect(() => {
          if ("" !== i) {
            let e = setTimeout(() => l(""), 1e3);
            return () => clearTimeout(e);
          }
        }, [i, l]);
        let o = a.useCallback(
          e => {
            if (_.test(e.key)) {
              let s = "".concat(i).concat(e.key.toLowerCase()),
                a = t.find(e => e.label.toLowerCase().startsWith(s));
              null != a && n(a.value), l(s);
            }
          },
          [n, l, i, t]
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
      let T = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: r,
            onChange: l,
            onPopulated: E,
            error: _,
            autoFocus: T,
            required: I,
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
            let [r, i] = a.useState(t),
              [l, o] = a.useState(n),
              [u, d] = a.useState(s);
            return {
              day: r,
              setDay: i,
              month: l,
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
          l((null == v ? void 0 : v.isValid()) ? v : null);
        }, [v, l]);
        let L = _;
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
          [x, y] = a.useState(T ? 0 : -1),
          b = a.useRef(null),
          D = a.useRef(null),
          U = a.useRef(null),
          P = a.useMemo(p, []),
          G = a.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = P[x]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = b.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = D.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (s = U.current) || void 0 === s || s.focus();
            }
          }, [x, b, D, U, P]);
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
                    ref: b,
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
                  options: g,
                  selectOption: R,
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
                    ref: U,
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
          className: i(f.container, r),
          children: [
            (0, s.jsx)(u.FormTitle, {
              tag: "legend",
              required: I,
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
      var I = T;
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
        i = n("49111"),
        l = n("724210");
      function o(e) {
        let t = decodeURIComponent(e),
          n = (0, r.tryParseChannelPath)(t);
        return null != n &&
          n.channelId === l.StaticChannelRoute.ROLE_SUBSCRIPTIONS
          ? "role_subscription"
          : t ===
              i.Routes.SETTINGS(
                i.UserSettingsSections.SUBSCRIPTIONS,
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
      var s, a, r, i;
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
        ((i = a || (a = {})).IDENTITY = "identity"),
        (i.DISPLAY_NAME = "display_name"),
        (i.ACCOUNT_INFORMATION = "account_information"),
        (i.FULL = "full"),
        (i.AGE_GATE = "age_gate"),
        (i.INVITE = "invite"),
        (i.SMS_VERIFY = "sms_verify");
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
        r = n("599110"),
        i = n("49111");
      function l(e, t) {
        r.default.track(i.AnalyticEvents.AGE_GATE_SUBMITTED, {
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
            return _;
          },
        });
      var s = n("866227"),
        a = n.n(s),
        r = n("759843"),
        i = n("913144"),
        l = n("599417"),
        o = n("731109"),
        u = n("271938"),
        d = n("599110"),
        c = n("840707"),
        f = n("395724"),
        E = n("49111"),
        h = n("586391");
      function g(e) {
        let { invite: t = null, giftCodeSKUId: n = null, ...s } = e;
        return _({ ...s, invite: t, giftCodeSKUId: n });
      }
      function _(e) {
        let {
          email: t,
          phoneToken: n,
          username: s,
          globalName: g,
          consent: _,
          password: m,
          guildTemplateCode: p,
          birthday: T,
          invite: I = null,
          giftCodeSKUId: N = null,
          multiStep: A = !1,
          promoEmailConsent: S = null,
          usedUsernameSuggestion: R = null,
        } = e;
        return (
          i.default.dispatch({ type: "REGISTER", birthday: A ? T : null }),
          null != T &&
            ((0, f.default)(T, E.AnalyticsSections.REGISTER),
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
            })(T)),
          c.default
            .post({
              url: E.Endpoints.REGISTER,
              body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: g,
                password: m,
                invite: I,
                consent: _,
                phone_token: n,
                date_of_birth: null == T ? void 0 : T.format("YYYY-MM-DD"),
                gift_code_sku_id: N,
                guild_template_code: p,
                promotional_email_opt_in: null == S ? void 0 : S.checked,
              },
              trackedActionData: {
                event: r.NetworkActionNames.USER_REGISTER,
                properties: {
                  invite_code: I,
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
                i.default.dispatch({
                  type: "REGISTER_SUCCESS",
                  token: e.body.token,
                }),
                  d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
                    source: h.AgeGateSource.REGISTER,
                    action: h.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
                  });
              },
              e => {
                let t = new l.default(e);
                throw (
                  (i.default.dispatch({ type: "REGISTER_FAILURE", error: t }),
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
        i = n("77078"),
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
          children: (0, s.jsx)(i.Checkbox, {
            value: t,
            type: i.Checkbox.Types.INVERTED,
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
        i = n("400271"),
        l = n("398886");
      function o(e) {
        let { channel: t } = e,
          n = (0, r.getSimpleChannelIconComponent)(t.type);
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
            (0, s.jsx)(i.GuildEventStatus, {
              className: l.statusContainer,
              guildId: n.guild_id,
              guildEventId: n.id,
              eventPreview: n,
            }),
            (0, s.jsx)(i.GuildEventDetails, {
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
        i = n("782340"),
        l = n("890957");
      function o() {
        let { required: e, checked: t } = (0, a.usePromoEmailConsentStore)();
        return e
          ? (0, s.jsx)(r.default, {
              value: t,
              subText: i.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
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
            return i;
          },
        }),
        n("70102");
      var s = n("748820"),
        a = n("872717"),
        r = n("49111"),
        i = {
          generateNonce: function () {
            return (0, s.v4)();
          },
          createHandoffToken: async function e(e) {
            let {
              body: { handoff_token: t },
            } = await a.HTTP.post({
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
        i = n("884691"),
        l = n("730290"),
        o = n("391679"),
        u = n("446674"),
        d = n("872717"),
        c = n("95410"),
        f = n("77078"),
        E = n("913144"),
        h = n("437822"),
        g = n("229353"),
        _ = n("271938"),
        m = n("599110"),
        p = n("718517"),
        T = n("672630"),
        I = n("49111"),
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
        let e = (0, u.useStateFromStores)([_.default], () =>
            _.default.getFingerprint()
          ),
          { fingerprint: t, handoff_token: n } = (0, l.parse)(
            window.location.search
          ),
          s = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
          a = null != s ? s : null !== e ? e : void 0;
        i.useEffect(() => {
          null !== s &&
            e !== s &&
            E.default.dispatch({ type: "FINGERPRINT", fingerprint: s });
        }, [s, e]);
        let [p, L] = i.useState(null),
          M = i.useCallback(
            e => {
              L(e),
                m.default.track(
                  I.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE,
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
          i.useEffect(() => {
            if (null != x) {
              let e = c.default.get(S);
              (null == e || Date.now() >= e) && (M("nonce_expired"), v());
            }
          }, [x, M]),
          i.useEffect(() => {
            null != n &&
              "null" !== n &&
              null != x &&
              null == p &&
              d.HTTP.post({
                url: I.Endpoints.HANDOFF_EXCHANGE,
                body: { key: x, handoff_token: n },
              })
                .then(e => h.default.loginToken(e.body.token, !1))
                .then(() => {
                  m.default.track(I.AnalyticEvents.LOGIN_SUCCESSFUL, {
                    source: I.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
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
                  g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1,
                  (0, r.jsx)("br", {}),
                  g.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2,
                ],
              });
            if (O.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
            if (C.has(p)) return g.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
          })(),
          b = null != p && O.has(p);
        return b
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
                    let e = T.default.generateNonce();
                    c.default.set(A, e), c.default.set(S, Date.now() + R);
                    let t = new URL(I.MOBILE_WEB_HANDOFF_DEEP_LINK),
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
                        I.AnalyticEvents.DEEP_LINK_CLICKED,
                        {
                          fingerprint: (0, o.maybeExtractId)(a),
                          source: "mobile_web_handoff",
                          destination: I.MOBILE_WEB_HANDOFF_DEEP_LINK,
                        },
                        { fingerprint: a, flush: !0 }
                      ),
                      (window.location.href = t.toString());
                  },
                  children: (0, r.jsx)(f.Text, {
                    className: N.buttonText,
                    variant: "text-sm/semibold",
                    children: g.MOBILE_WEB_HANDOFF_BUTTON_TEXT,
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
        i = n("437822"),
        l = n("605250"),
        o = n("271938"),
        u = n("770032"),
        d = n("49111");
      let c = new l.default("MultiAccountActionCreators");
      function f() {
        let e = o.default.getId(),
          t = u.default.getUsers();
        t.forEach(async t => {
          let n,
            { id: i } = t,
            l = s.getToken(i);
          if (null == l || "" === l) {
            r.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: i,
            });
            return;
          }
          r.default.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: i,
          });
          try {
            n = await a.HTTP.get({
              url: d.Endpoints.ME,
              headers: { authorization: l },
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
              userId: i,
            });
            return;
          }
          r.default.dispatch({
            type: e === i ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
          }),
            r.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: i,
            });
        });
      }
      function E(e, t) {
        c.log("Switching account to ".concat(e), { switchSynchronously: t });
        let n = s.getToken(e);
        return null == n
          ? (c.log("Switching accounts failed because there was no token"),
            r.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: e,
            }),
            Promise.resolve())
          : i.default.switchAccountToken(n, t);
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
        i = n("694787"),
        l = n("770032");
      function o() {
        let e = (0, a.useStateFromStoresObject)([l.default], () => ({
          isLoading: l.default.getIsValidatingUsers(),
          multiAccountUsers: l.default.getUsers(),
        }));
        return (
          s.useEffect(() => {
            r.default.wait(() => {
              i.validateMultiAccountTokens();
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
        i = n("428958"),
        l = n("124969"),
        o = n("851460"),
        u = n("782340"),
        d = n("61585");
      function c(e) {
        let { onDismiss: t } = e;
        return (
          (0, i.default)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
          }),
          (0, s.jsxs)(l.default, {
            className: d.chooseAccountAuthBox,
            children: [
              (0, s.jsx)(l.Title, {
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
        i = n("872717"),
        l = n("913144"),
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
          l.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          i.HTTP.del({
            url: c.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = o.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            i.HTTP.post({
              url: c.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          i.HTTP.post({
            url: c.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          i.HTTP.post({
            url: c.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          i.HTTP.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          i.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          i.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          i.HTTP.post({
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
            i = o.default.getFingerprint();
          null != i && "" !== i && (a["X-Fingerprint"] = i),
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
              l.default.dispatch({
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
        i = n("988415");
      let l = (0, i.getDefaultCountryCode)();
      function o(e) {
        var t;
        let { countryCode: n } = e;
        null != n &&
          (l =
            null !== (t = (0, i.getCountryCodeByAlpha2)(n)) && void 0 !== t
              ? t
              : (0, i.getDefaultCountryCode)());
      }
      class u extends a.default.DeviceSettingsStore {
        initialize(e) {
          null != e && (s = e.selectedCountryCode);
        }
        getUserAgnosticState() {
          return { selectedCountryCode: s };
        }
        getCountryCode() {
          return null != s ? s : l;
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
        i = n("448993"),
        l = n("599110"),
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
              let s = await a.HTTP.get({
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
              let n = await a.HTTP.get({
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
              l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
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
                l.default.track(f.AnalyticEvents.POMELO_ERRORS, {
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
              let t = new i.APIError(o),
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
        i = n("913144"),
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
      var c = new d(i.default, {
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
            return i;
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
        i = () =>
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
        i = n("255403"),
        l = n("947962"),
        o = n("2581"),
        u = n("415133");
      let d = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          c = (0, r.useStateFromStores)(
            [o.default],
            () => o.default.validate(e),
            [e]
          ),
          f = (0, r.useStateFromStores)([o.default], () =>
            o.default.isRateLimited()
          ),
          E = (0, l.usePomeloDebounceDelay)(),
          h = s.useMemo(
            () =>
              (0, a.debounce)(
                e =>
                  i.default.attemptPomelo(
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
          i = (0, a.useUsernameLiveCheck)(e, t, n),
          [l, o] = s.useState(void 0);
        return (
          s.useEffect(() => {
            "" === e || e === r ? o(void 0) : null != i && o(i);
          }, [i, e, r]),
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
        r = n("146606"),
        i = n("230606");
      let l = () => {
        let e = a.useRef(null),
          [t, n] = a.useState(0),
          s = a.useMemo(
            () =>
              new i.default(e => {
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
        let { show: t, children: n, top: a = 0, bottom: i = 0 } = e,
          { ref: o, height: u } = l(),
          d = (0, r.useSpring)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: {
              height: t ? u : 0,
              paddingBottom: t ? "".concat(i, "px") : "0px",
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
    113665: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var s = (0, n("862205").createExperiment)({
        id: "2024-03_passwordless_login",
        label: "Passwordless Login",
        kind: "user",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 0, label: "Control", config: { enabled: !1 } },
          { id: 1, label: "Enabled", config: { enabled: !0 } },
        ],
      });
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
        i = n("884691"),
        l = n("82697"),
        o = n("679001");
      ((s = a || (a = {})).SIZE_40 = "SIZE_40"), (s.SIZE_60 = "SIZE_60");
      let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        d = n("527826");
      class c extends i.PureComponent {
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
            children: (0, r.jsx)(l.default, { value: t, level: "M", ...n }),
          });
        }
      }
      c.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
      class f extends i.PureComponent {
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
            return i;
          },
          serializePublicKey: function () {
            return l;
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
        r = n("766274");
      function i() {
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
      async function E(e, t) {
        let n = new TextDecoder(),
          s = await f(e, d(t));
        return n.decode(s);
      }
      async function h(e, t) {
        let n = await f(e, d(t));
        return u(n);
      }
      async function g(e, t) {
        t = await E(e, t);
        let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
        if (null == n) throw Error("Invalid encoded user record.");
        let [, s, a, i, l] = n;
        return new r.default({
          id: s,
          discriminator: a,
          avatar: "0" === i ? null : i,
          username: l,
        });
      }
    },
  },
]);
//# sourceMappingURL=81726.30d7595e76e622be0c09.js.map

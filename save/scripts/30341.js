(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30341"],
  {
    527826: function (e, t, n) {
      "use strict";
      e.exports = n.p + "adf75861421c2a6a6269.png";
    },
    97595: function (e, t, n) {
      "use strict";
      e.exports = n.p + "79b6525428d203d4dc7a.svg";
    },
    251834: function (e, t, n) {
      "use strict";
      e.exports = n.p + "559d26c8222b2691e986.svg";
    },
    800573: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4db33740afa8c892ed27.svg";
    },
    41668: function (e, t, n) {
      "use strict";
      e.exports = n.p + "1ed67ff58fdb5a109fc8.svg";
    },
    660389: function (e, t, n) {
      "use strict";
      e.exports = n.p + "6e27695fd61b8fa1ebde.svg";
    },
    212509: function (e, t, n) {
      "use strict";
      e.exports = n.p + "deabad3453b517c8cb7f.png";
    },
    494323: function (e, t, n) {
      "use strict";
      e.exports = n.p + "bd6a8da80056942f263e.svg";
    },
    556659: function (e, t, n) {
      "use strict";
      e.exports = n.p + "dad1a596835f9bb1024d.svg";
    },
    787762: function (e, t, n) {
      "use strict";
      e.exports = n.p + "4396f31050743192914e.svg";
    },
    508971: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a7d2c7ff9cdc7b4b1d04.svg";
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
            return g;
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
        l = "convert";
      function i(e, t, n) {
        if (t === r) return n;
        if (t === l) return e(n);
        if (t instanceof Array) return n.map(n => i(e, t[0], n));
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
            s[a] = i(e, r.schema, n[a]);
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
      var c = { type: u(r), id: u(l), transports: d(r) },
        E = { appid: d(r), appidExclude: d(r), credProps: d(r) },
        f = { appid: d(r), appidExclude: d(r), credProps: d(r) };
      u({
        rp: u(r),
        user: u({ id: u(l), name: u(r), displayName: u(r) }),
        challenge: u(l),
        pubKeyCredParams: u(r),
        timeout: d(r),
        excludeCredentials: d([c]),
        authenticatorSelection: d(r),
        attestation: d(r),
        extensions: d(E),
      }),
        d(r),
        u(r),
        u(r),
        u(l),
        d(r),
        u({
          clientDataJSON: u(l),
          attestationObject: u(l),
          transports: o(r, e => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
          }),
        }),
        o(f, e => e.getClientExtensionResults());
      var _ = {
          mediation: d(r),
          publicKey: u({
            challenge: u(l),
            timeout: d(r),
            rpId: d(r),
            allowCredentials: d([c]),
            userVerification: d(r),
            extensions: d(E),
          }),
          signal: d(r),
        },
        h = {
          type: u(r),
          id: u(r),
          rawId: u(l),
          authenticatorAttachment: d(r),
          response: u({
            clientDataJSON: u(l),
            authenticatorData: u(l),
            signature: u(l),
            userHandle: u(l),
          }),
          clientExtensionResults: o(f, e => e.getClientExtensionResults()),
        };
      function g(e) {
        return i(s, _, e);
      }
      async function m(e) {
        let t = await navigator.credentials.get(e);
        return (t.toJSON = () => i(a, h, t)), t;
      }
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
        E = n("26232");
      let f = (0, c.cssValueToNumber)(
          u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE
        ),
        _ = { START: 0, END: 1 },
        h = { friction: 10, tension: 130 };
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
            this.state.shouldAnimate ? this.animateTo(_.END, e) : e();
          }
          componentWillEnter(e) {
            this.state.shouldAnimate
              ? (clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => this.animateTo(_.END, e), 40)))
              : e();
          }
          componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(_.START, e) : e();
          }
          animateTo(e, t) {
            i.default.spring(this.anim, { toValue: e, ...h }).start(t);
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
              className: E.wrapper,
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
              (this.anim = new i.default.Value(_.START)),
              (this.state = { shouldAnimate: !o.isMobile }),
              (this.handleResize = () => {
                let e = window.innerWidth > f;
                !this.state.shouldAnimate && e && this.anim.setValue(_.END),
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
            return A;
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
        E = n("554054"),
        f = n("159885"),
        _ = n("528502"),
        h = n("49111"),
        g = n("513680");
      let m = (0, f.cssValueToNumber)(g.responsiveWidthMobile),
        T = [
          h.Routes.LOGIN,
          h.Routes.LOGIN_HANDOFF,
          h.Routes.REGISTER,
          h.Routes.INVITE(""),
          h.Routes.GIFT_CODE(""),
          h.Routes.GUILD_TEMPLATE_LOGIN(""),
          h.Routes.GUILD_TEMPLATE(""),
          h.Routes.DISABLE_EMAIL_NOTIFICATIONS,
          h.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
          h.Routes.BILLING_PREMIUM_SUBSCRIBE,
          h.Routes.BILLING_PAYMENT_SOURCES_CREATE,
          h.Routes.BILLING_PAYMENTS,
          h.Routes.BILLING_PREMIUM_SWITCH_PLAN,
          h.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
          h.Routes.VERIFY,
          h.Routes.VERIFY_HUB_EMAIL,
          h.Routes.REJECT_IP,
          h.Routes.REJECT_MFA,
          h.Routes.AUTHORIZE_IP,
          h.Routes.AUTHORIZE_PAYMENT,
          h.Routes.RESET,
          h.Routes.HANDOFF,
          h.Routes.REPORT,
          h.Routes.REPORT_SECOND_LOOK,
        ];
      function p(e) {
        return T.some(t => e.startsWith(t));
      }
      class I extends a.Component {
        componentDidMount() {
          window.addEventListener("resize", this.handleResize);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        mobileTransitionTo(e, t) {
          if (p(e)) (0, d.transitionTo)(e, t);
          else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
          }
        }
        mobileReplaceWith(e) {
          p(e) ? (0, d.replaceWith)(e) : (window.location = e);
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
                        (0, s.jsx)(E.Splash, { splash: e, children: t }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(_.default, {
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
      var A = I;
    },
    404432: function (e, t, n) {
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
        i = n("446674"),
        o = n("77078"),
        u = n("299285"),
        d = n("210721"),
        c = n("65324"),
        E = n("697218"),
        f = n("10514"),
        _ = n("552712"),
        h = n("953109"),
        g = n("124969"),
        m = n("380186"),
        T = n("49111"),
        p = n("646718"),
        I = n("782340"),
        A = n("173494"),
        S = n("125047"),
        R = n("890957"),
        N = i.default.connectStores(
          [_.default, u.default, f.default, E.default],
          e => {
            let { giftCode: t } = e,
              n = _.default.get(t.skuId),
              { subscriptionPlanId: s } = t,
              a = null != s ? (0, m.getOrFetchSubscriptionPlan)(s) : null;
            return {
              sku: n,
              subscriptionPlan: a,
              application: u.default.getApplication(n.applicationId),
              gifter: E.default.getUser(t.userId),
            };
          }
        )(e => {
          let {
              error: t,
              giftCode: n,
              gifter: r,
              sku: i,
              application: u,
              subscriptionPlan: E,
            } = e,
            f =
              null == r
                ? I.default.Messages.GIFT_CODE_AUTH_GIFTED
                : I.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                    username: r.username,
                  }),
            _ = i.name;
          return (
            null != E &&
              (_ = (
                E.interval === p.SubscriptionIntervalTypes.MONTH
                  ? I.default.Messages
                      .GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY
                  : I.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY
              ).format({ skuName: i.name, intervalCount: E.intervalCount })),
            (0, s.jsxs)(a.Fragment, {
              children: [
                null != n.giftStyle
                  ? (0, s.jsx)(c.default, {
                      defaultAnimationState: d.AnimationState.LOOP,
                      giftStyle: n.giftStyle,
                      className: A.seasonalIcon,
                    })
                  : (0, s.jsx)(g.Avatar, {
                      src: null != r ? r.getAvatarURL(void 0, 100) : null,
                      size: o.AvatarSizes.DEPRECATED_SIZE_100,
                      className: R.marginBottom20,
                    }),
                null != t
                  ? (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(g.SubTitle, {
                          children: I.default.Messages.INVITE_MODAL_ERROR_TITLE,
                        }),
                        (0, s.jsx)(g.Title, { children: t }),
                      ],
                    })
                  : (0, s.jsxs)(a.Fragment, {
                      children: [
                        (0, s.jsx)(g.SubTitle, { children: f }),
                        (0, s.jsxs)(g.Title, {
                          className: l(R.marginTop8, S.flexCenter),
                          children: [
                            i.productLine !== T.SKUProductLines.COLLECTIBLES &&
                              (0, s.jsx)(h.default, {
                                size: h.default.Sizes.MEDIUM,
                                className: A.applicationIcon,
                                game: u,
                                skuId: i.id,
                              }),
                            _,
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
            return R;
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
        E = n("697218"),
        f = n("953109"),
        _ = n("580357"),
        h = n("124969"),
        g = n("587974"),
        m = n("158998"),
        T = n("49111"),
        p = n("238055"),
        I = n("91366"),
        A = n("782340"),
        S = n("985551");
      let R = () =>
          (0, s.jsxs)(a.Fragment, {
            children: [
              (0, s.jsx)(h.Avatar, {
                src: null,
                size: l.AvatarSizes.DEPRECATED_SIZE_100,
                className: S.avatar,
              }),
              (0, s.jsx)(h.SubTitle, {
                children:
                  A.default.Messages
                    .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, s.jsx)(h.Title, {
                className: S.inviteResolvingGuildName,
                children: A.default.Messages.LOADING,
              }),
            ],
          }),
        N = e => {
          let { guild: t, user: n, application: a, compact: r } = e;
          if (null != a)
            return (0, s.jsx)(f.default, {
              className: S.appIcon,
              game: a,
              size: S.appIconSize,
            });
          if (null != n)
            return (0, s.jsx)(h.Avatar, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: l.AvatarSizes.SIZE_80,
              className: r ? S.compactAvatar : S.avatar,
            });
          if (null != t)
            return (0, s.jsx)(g.default, {
              mask: g.default.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: S.guildIcon,
              children: (0, s.jsx)(h.GuildIcon, {
                guild: t,
                size: h.GuildIcon.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      var C = e => {
        var t;
        let n,
          a,
          f,
          {
            invite: g,
            disableUser: R = !1,
            error: C,
            flatActivityCount: O = !1,
            isRegister: L = !1,
          } = e,
          { currentUser: M, multiAccounts: v } = (0,
          r.useStateFromStoresObject)([i.default, E.default], () => ({
            currentUser: E.default.getCurrentUser(),
            multiAccounts: i.default.getUsers(),
          }));
        if (null == g) return null;
        let D = null != g.guild ? new d.default(g.guild) : null,
          x =
            null != g.channel
              ? (0, u.createChannelRecordFromInvite)(g.channel)
              : null,
          U =
            null != g.target_application
              ? new o.default(g.target_application)
              : null,
          y = R || null == g.inviter ? null : new c.default(g.inviter),
          b =
            (null != g.approximate_member_count &&
              g.approximate_member_count > 100) ||
            (null != D && D.hasFeature(T.GuildFeatures.COMMUNITY)),
          P = !b && null != y,
          G = null,
          F = !1;
        if (null != D)
          (G =
            null == y
              ? A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: m.default.getFormattedName(y),
                })),
            g.target_type === I.InviteTargetTypes.STREAM &&
              null != g.target_user &&
              (G = A.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: m.default.getFormattedName(g.target_user),
              })),
            g.target_type === I.InviteTargetTypes.EMBEDDED_APPLICATION &&
              null != g.target_application &&
              (G =
                null != y
                  ? A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format(
                      { username: m.default.getFormattedName(y) }
                    )
                  : A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            P &&
              null == U &&
              (n = (0, s.jsx)(h.GuildIcon, {
                className: S.icon,
                guild: D,
                size: h.GuildIcon.Sizes.SMALL,
              })),
            (a = D.name),
            null != U &&
              ((a = U.name),
              (f = (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)(h.SubTitle, {
                    className: S.appIn,
                    children: A.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, s.jsxs)("div", {
                    className: S.guildContainer,
                    children: [
                      (0, s.jsx)(h.GuildIcon, {
                        guild: D,
                        size: h.GuildIcon.Sizes.SMALL,
                      }),
                      (0, s.jsx)(l.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: S.appGuildName,
                        children: D.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != x) {
          if (null == y) throw Error("no inviter in group DM invite");
          let e = m.default.getFormattedName(y);
          null != x.name && "" !== x.name
            ? ((G = A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e,
              })),
              (a = x.name),
              null != x.icon &&
                (n = (0, s.jsx)(h.ChannelIcon, {
                  channel: x,
                  size: l.AvatarSizes.SIZE_32,
                })))
            : ((G =
                A.default.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM),
              (a = e));
        } else if (null != y) {
          let e = m.default.getFormattedName(y, !0);
          (a =
            A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
              { username: e }
            )),
            (F = !0),
            (f =
              null != C
                ? null
                : (0, s.jsx)(h.SubTitle, {
                    className: S.directInviteSubTitle,
                    children: L
                      ? A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format(
                          { username: e }
                        )
                      : A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format(
                          { username: e }
                        ),
                  }));
        }
        return (0, s.jsxs)("div", {
          className: S.container,
          children: [
            (0, s.jsx)(N, {
              application: U,
              guild: D,
              user: P ? y : null,
              compact: F,
            }),
            null != C
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(h.SubTitle, {
                      children: A.default.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, s.jsx)(h.Title, { children: C }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(h.SubTitle, { children: G }),
                    (0, s.jsxs)(h.Title, {
                      className: S.title,
                      children: [
                        null != D
                          ? (0, s.jsx)(_.default, {
                              guild: D,
                              className: S.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        a,
                      ],
                    }),
                  ],
                }),
            f,
            null != U ||
            F ||
            (null == g
              ? void 0
              : null === (t = g.guild) || void 0 === t
                ? void 0
                : t.id) === p.INVITE_ROUTING_HUB_GUILD_ID
              ? null
              : (0, s.jsx)(h.ActivityCount, {
                  className: S.activityCount,
                  online: g.approximate_presence_count,
                  total: g.approximate_member_count,
                  flat: O,
                }),
            v.length > 1 ? (0, s.jsx)(h.JoiningAs, { user: M }) : null,
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
        l = n("414456"),
        i = n.n(l),
        o = n("730290"),
        u = n("394846"),
        d = n("446674"),
        c = n("77078"),
        E = n("913144"),
        f = n("437822"),
        _ = n("697796"),
        h = n("49671"),
        g = n("524824"),
        m = n("21572"),
        T = n("791160"),
        p = n("434824"),
        I = n("24287"),
        A = n("382236"),
        S = n("770032"),
        R = n("724554"),
        N = n("878720"),
        C = n("25033"),
        O = n("589252"),
        L = n("970366"),
        M = n("113665"),
        v = n("425922"),
        D = n("271938"),
        x = n("72177"),
        U = n("476108"),
        y = n("145131"),
        b = n("124969"),
        P = n("980428"),
        G = n("599110"),
        F = n("659500"),
        B = n("773336"),
        j = n("404432"),
        w = n("719451"),
        k = n("331085"),
        H = n("598489"),
        V = n("49111"),
        Y = n("579033"),
        W = n("782340"),
        K = n("699177"),
        z = n("890957");
      function q() {
        return (0, s.jsx)(b.default, { children: (0, s.jsx)(c.Spinner, {}) });
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
          e && !t ? (0, _.handoffBegin)() : t && this.loginOrSSO(t, a, !0),
            G.default.track(
              V.AnalyticEvents.LOGIN_VIEWED,
              {
                location:
                  null != s ? "Invite Login Page" : "Non-Invite Login Page",
                login_source: this.loginSource,
                authenticated: t,
                ...(null != n ? (0, T.default)(n, !1, !1) : {}),
              },
              { flush: !0 }
            ),
            null == h.default &&
              this.props.hasPasswordlessExperiment &&
              window.PublicKeyCredential &&
              PublicKeyCredential.isConditionalMediationAvailable &&
              PublicKeyCredential.isConditionalMediationAvailable().then(e => {
                e &&
                  (0, v.fetchWebAuthnConditionalChallenge)().then(e => {
                    let { challenge: t, ticket: n } = e,
                      s = JSON.parse(t);
                    (s.signal =
                      this.state.conditionalMediationAbortController.signal),
                      (0, r.get)((0, r.parseRequestOptionsFromJSON)(s)).then(
                        e => {
                          f.default
                            .loginWebAuthn({
                              ticket: n,
                              credential: JSON.stringify(e),
                              source: this.loginSource,
                              giftCodeSKUId: this.giftCodeSKUId,
                            })
                            .then(e => {
                              E.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e,
                              });
                            });
                        }
                      );
                  });
              }),
            f.default.getLocationMetadata(),
            (0, L.trackAppUIViewed)("login");
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
            ? (0, g.getLoginHandoffSourceFromRedirectTo)(a)
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
            a = null != e ? (0, o.parse)(e.search) : {};
          if ((delete a.redirect_to, null != n)) null != s ? s(n) : t(n);
          else if (null == a.service) t(V.Routes.APP);
          else {
            let e =
                window.location.protocol +
                window.GLOBAL_ENV.API_ENDPOINT +
                V.Endpoints.SSO,
              t = { ...a, token: D.default.getToken() };
            window.location = "".concat(e, "?").concat((0, o.stringify)(t));
          }
        }
        hasError(e) {
          return null != this.props.errors[e];
        }
        renderHandOffAvailable() {
          let { authBoxClassName: e } = this.props;
          return (0, s.jsxs)(b.default, {
            className: e,
            children: [
              (0, s.jsx)(b.AuthSpinner, {}),
              (0, s.jsx)(b.Title, {
                className: z.marginBottom8,
                children: W.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE,
              }),
              (0, s.jsx)(b.SubTitle, {
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
            : (0, s.jsxs)(b.default, {
                className: n,
                children: [
                  (0, s.jsx)(b.Avatar, {
                    src: e.getAvatarURL(void 0, 100),
                    size: c.AvatarSizes.DEPRECATED_SIZE_100,
                    className: z.marginBottom20,
                  }),
                  (0, s.jsx)(b.Title, {
                    className: z.marginBottom8,
                    children:
                      W.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                        name: e.toString(),
                      }),
                  }),
                  (0, s.jsx)(b.SubTitle, {
                    className: z.marginBottom40,
                    children: W.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY,
                  }),
                  (0, s.jsxs)(b.Block, {
                    children: [
                      (0, s.jsx)(b.Button, {
                        onClick: () => t(V.Routes.APP),
                        className: z.marginBottom8,
                        children:
                          W.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format(
                            { name: e.toString() }
                          ),
                      }),
                      (0, s.jsx)(b.Button, {
                        look: b.Button.Looks.LINK,
                        color: b.Button.Colors.LINK,
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
          return (0, s.jsx)(b.default, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, s.jsxs)(c.HeadingLevel, {
              component: (0, s.jsx)(b.Title, {
                className: z.marginBottom8,
                children: n,
              }),
              children: [
                (0, s.jsx)(b.SubTitle, {
                  className: z.marginBottom20,
                  children: a,
                }),
                (0, s.jsxs)(b.Block, {
                  children: [
                    (0, s.jsx)(b.Button, {
                      color: b.Button.Colors.BRAND,
                      type: "submit",
                      children: W.default.Messages._RETURN_TO_LOGIN,
                    }),
                    (0, s.jsx)("div", {
                      className: i(z.marginTop8, K.needAccount),
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
          return (0, s.jsxs)(b.default, {
            className: e,
            children: [
              (0, s.jsx)(w.InviteResolvingHeader, {}),
              (0, s.jsxs)(b.Block, {
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
                  (0, s.jsx)(b.Input, {
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
                  (0, s.jsx)(b.Button, {
                    className: z.marginBottom8,
                    type: "submit",
                    disabled: !0,
                    children: W.default.Messages._LOGIN,
                  }),
                  (0, s.jsx)(b.Button, {
                    disabled: !0,
                    look: b.Button.Looks.LINK,
                    color: b.Button.Colors.LINK,
                    children: W.default.Messages.FORGOT_PASSWORD,
                  }),
                  (0, s.jsx)(b.Button, {
                    disabled: !0,
                    className: z.marginTop4,
                    look: b.Button.Looks.LINK,
                    color: b.Button.Colors.LINK,
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
              loginStatus: l,
              country: o,
              showMobileWebHandoff: u,
              disableAutofocusOnDefaultForm: d,
            } = this.props,
            E = !this.hasError("email") && this.hasError("password"),
            f = (null == a ? void 0 : a.stage_instance) != null;
          return (
            (n =
              null == a || f
                ? null != r
                  ? (0, s.jsx)(j.default, { giftCode: r })
                  : (0, s.jsxs)("div", {
                      className: K.header,
                      children: [
                        (0, s.jsx)(
                          b.Title,
                          {
                            className: z.marginBottom8,
                            children: W.default.Messages.LOGIN_TITLE,
                          },
                          "title"
                        ),
                        !1 === (0, B.isAndroidWeb)()
                          ? (0, s.jsx)(
                              b.SubTitle,
                              { children: W.default.Messages.AUTH_LOGIN_BODY },
                              "subtitle"
                            )
                          : null,
                      ],
                    })
                : (0, s.jsx)(w.default, { invite: a })),
            (0, s.jsxs)(
              y.default,
              {
                direction: y.default.Direction.HORIZONTAL,
                align: y.default.Align.CENTER,
                children: [
                  (0, s.jsxs)("div", {
                    className: K.mainLoginContainer,
                    children: [
                      this.canShowChooseAccount &&
                        this.state.dismissedChooseAccount &&
                        (0, s.jsx)(b.Button, {
                          onClick: () => {
                            this.setState(e => ({
                              ...e,
                              dismissedChooseAccount: !1,
                            }));
                          },
                          look: b.Button.Looks.LINK,
                          color: b.Button.Colors.PRIMARY,
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
                        children: (0, s.jsxs)(b.Block, {
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
                              autoFocus: !E && !u && !d,
                              required: !0,
                            }),
                            (0, s.jsx)(b.Input, {
                              label: W.default.Messages.FORM_LABEL_PASSWORD,
                              error: this.renderError("password"),
                              onChange: e => this.setState({ password: e }),
                              name: "password",
                              type: "password",
                              setRef: this.setPasswordRef,
                              autoComplete: "off",
                              spellCheck: "false",
                              autoFocus: E && !u && !d,
                              value: this.state.password,
                              required: !0,
                            }),
                            (0, s.jsx)(b.Button, {
                              onClick: this.handleForgotPassword,
                              look: b.Button.Looks.LINK,
                              color: b.Button.Colors.LINK,
                              className: i(z.marginBottom20, z.marginTop4),
                              children: W.default.Messages.FORGOT_PASSWORD,
                            }),
                            (0, s.jsx)(b.Button, {
                              type: "submit",
                              submitting: l === V.LoginStates.LOGGING_IN,
                              color: f
                                ? b.Button.Colors.GREEN
                                : b.Button.Colors.BRAND,
                              className: z.marginBottom8,
                              children: f
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
                                (0, s.jsx)(b.Button, {
                                  onClick: this.handleGotoRegister,
                                  look: b.Button.Looks.LINK,
                                  color: b.Button.Colors.LINK,
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
            className: K.pageContainer,
            children: [
              (0, s.jsx)(b.default, {
                onSubmit: this.handleLogin,
                tag: "form",
                className: e,
                expanded: !0,
                children: this.renderDefaultForm(!0),
              }),
              t && (0, s.jsx)(A.default, {}),
            ],
          });
        }
        renderGuildTemplate(e) {
          return (0, s.jsx)(H.default, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: i(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [
              (0, s.jsx)(p.default, { guildTemplate: e }, "template"),
              this.renderDefaultForm(!1),
            ],
          });
        }
        renderMFA() {
          let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
          };
          return (0, s.jsx)(b.default, {
            style: { padding: 0 },
            children: (0, s.jsx)(I.MFASlides, {
              mfaFinish: this.handleTokenSubmitMFA,
              request: e,
              onEarlyClose: () => {
                E.default.dispatch({ type: "LOGIN_RESET" });
              },
              width: 480,
            }),
          });
        }
        renderIPAuthorization() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, s.jsx)(b.default, {
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
              onCancel: f.default.loginReset,
            }),
          });
        }
        renderPasswordRecovery() {
          let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
          return (0, s.jsx)(b.default, {
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
              onCancel: f.default.loginReset,
            }),
          });
        }
        renderChooseAccount() {
          return (0, s.jsx)(R.default, {
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
          if (i || l) return (0, s.jsx)(q, {});
          if (r) return this.renderHandOffAvailable();
          if (e && l) return this.renderHandOffContinue();
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
              await f.default.loginToken(e, !1),
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
                f.default.login({
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
                let { token: a } = await N.default.verifyPhone(s, e, !1);
                await f.default.authorizeIPAddress(a),
                  f.default.login({
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
                let { token: n } = await N.default.verifyPhone(
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
                F.ComponentDispatch.dispatch(V.ComponentActions.WAVE_EMPHASIZE),
                  await f.default.forgotPassword(t),
                  (0, c.openModal)(e =>
                    (0, s.jsx)(c.ConfirmModal, {
                      header:
                        W.default.Messages
                          .EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                      confirmText: W.default.Messages.OKAY,
                      confirmButtonColor: b.Button.Colors.BRAND,
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
              N.default.resendCode(this.getFullLogin());
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
                  redirectTo: i,
                } = this.props,
                u = null != r ? (0, o.parse)(r.search) : {};
              "" !== t && (u.email = t),
                null != n
                  ? ((u.mode = "register"), (e = V.Routes.INVITE(n.code)))
                  : null != s
                    ? ((u.mode = "register"), (e = V.Routes.GIFT_CODE(s.code)))
                    : null != a
                      ? (e = V.Routes.GUILD_TEMPLATE(a.code))
                      : null != i
                        ? ((e = V.Routes.REGISTER), (u.redirect_to = i))
                        : (e = V.Routes.REGISTER),
                f.default.loginReset(),
                l(e, { search: (0, o.stringify)(u) }),
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
            [x.default, U.default, D.default, S.default, C.default],
            () => ({
              authenticated: D.default.isAuthenticated(),
              handoffAvailable: x.default.isHandoffAvailable(),
              user: x.default.user,
              loginStatus: D.default.getLoginStatus(),
              mfaTicket: D.default.getMFATicket(),
              mfaSMS: D.default.getMFASMS(),
              mfaMethods: D.default.getMFAMethods(),
              maskedPhone: D.default.getMaskedPhone(),
              errors: D.default.getErrors(),
              defaultRoute: U.default.defaultRoute,
              country: C.default.getCountryCode(),
              hasLoggedInAccounts: S.default.getHasLoggedInAccounts(),
            })
          ),
          n = M.default.useExperiment({ location: "login" }).enabled;
        return (0, s.jsx)(Z, { ...e, ...t, hasPasswordlessExperiment: n });
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
        E = n("271938"),
        f = n("291850"),
        _ = n("49111"),
        h = n("724210");
      function g(e) {
        let t = a.useCallback(
            t => {
              if (
                (function (e) {
                  var t;
                  let n = (0, l.matchPath)(e, {
                    path: _.Routes.CHANNEL(":guildId", ":channelId"),
                  });
                  return (
                    (null == n
                      ? void 0
                      : null === (t = n.params) || void 0 === t
                        ? void 0
                        : t.channelId) ===
                      h.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
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
          i.useStateFromStoresObject)([E.default], () => ({
            isAuthenticated: E.default.isAuthenticated(),
            loginStatus: E.default.getLoginStatus(),
          })),
          { location: m, redirectTo: T } = e,
          [p, I] = a.useState(n);
        function A(e) {
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
                null != T
                  ? (0, d.getLoginHandoffSourceFromRedirectTo)(T)
                  : void 0;
              p
                ? o.default.logout(null).finally(() => {
                    A({ handoffKey: e, handoffToken: t, handoffSource: n });
                  })
                : A({ handoffKey: e, handoffToken: t, handoffSource: n });
            }
          }
        }, []),
        p || g === _.LoginStates.LOGGING_IN)
          ? (0, s.jsx)(f.LoginSpinner, {})
          : (0, s.jsx)(f.default, { ...e, transitionTo: t });
      }
    },
    331085: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
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
        E = n("308289"),
        f = n("905949"),
        _ = n("605250"),
        h = n("671278"),
        g = n("124969"),
        m = n("659500"),
        T = n("274515"),
        p = n("158998"),
        I = n("49111"),
        A = n("843455"),
        S = n("782340"),
        R = n("858623"),
        N = n("890957");
      ((r = s || (s = {}))[(r.INITIALIZING = 0)] = "INITIALIZING"),
        (r[(r.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (r[(r.PENDING_FINISH = 2)] = "PENDING_FINISH"),
        (r[(r.PENDING_TICKET = 3)] = "PENDING_TICKET"),
        (r[(r.PENDING_LOGIN = 4)] = "PENDING_LOGIN"),
        (r[(r.FINISH = 5)] = "FINISH"),
        ((l = a || (a = {}))[(l.QR_CODE = 0)] = "QR_CODE"),
        (l[(l.CONFIRM = 1)] = "CONFIRM");
      let C = n("527826"),
        O = new _.default("LoginQRSocket");
      function L(e) {
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
                S.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL
              );
          }, [n]),
          (0, i.jsx)("div", {
            className: R.qrCodeContainer,
            children:
              "" !== t && n
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(h.default, {
                        className: R.qrCode,
                        size: 160,
                        text: t,
                      }),
                      (0, i.jsx)("div", {
                        className: R.qrCodeOverlay,
                        children: (0, i.jsx)("img", { src: C, alt: "" }),
                      }),
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: R.qrCodeOverlay,
                    "aria-label":
                      S.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                    "aria-busy": !0,
                    children: (0, i.jsx)(c.Spinner, {
                      className: R.qrCode,
                      type: c.Spinner.Type.WANDERING_CUBES,
                      "aria-hidden": !0,
                    }),
                  }),
          })
        );
      }
      let M = e => {
        let { className: t, children: n } = e;
        return (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: t,
          children: n,
        });
      };
      function v(e) {
        let { state: t, cancel: n, errorMessage: s } = e;
        switch (t.step) {
          case 0:
          case 1:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(L, {
                  text:
                    1 === t.step
                      ? "https://discord.com/ra/".concat(t.fingerprint)
                      : "",
                }),
                (0, i.jsx)(g.Title, {
                  className: N.marginBottom8,
                  children: S.default.Messages.LOGIN_WITH_QR,
                }),
                null != s
                  ? (0, i.jsx)(M, { children: s })
                  : (0, i.jsx)(g.SubTitle, {
                      children:
                        S.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format(),
                    }),
              ],
            });
          case 3:
          case 2: {
            let { user: e } = t;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(E.default, {
                  className: R.qrAvatar,
                  user: e,
                  size: c.AvatarSizes.SIZE_120,
                  isMobile: !0,
                  status: A.StatusTypes.ONLINE,
                }),
                (0, i.jsx)(g.Title, {
                  className: N.marginBottom8,
                  children: S.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE,
                }),
                (0, i.jsx)(g.SubTitle, {
                  children: S.default.Messages.LOGIN_AS.format({
                    username: "".concat(p.default.getUserTag(e)),
                  }),
                }),
                (0, i.jsx)(c.Button, {
                  look: c.Button.Looks.BLANK,
                  color: c.Button.Colors.LINK,
                  size: c.Button.Sizes.MIN,
                  onClick: n,
                  className: R.startOverButton,
                  children: S.default.Messages.QR_CODE_LOGIN_START_OVER,
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
      function D(e) {
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
              c = (0, f.default)(),
              E = o.useMemo(() => new u.default(1500, 3e4), []),
              _ = o.useRef();
            _.current = o.useCallback(() => {
              l({ step: 0 }),
                c
                  ? n(e => e + 1)
                  : (O.info(
                      "document is not visible, will defer reconnection when document becomes visible."
                    ),
                    a(!0));
            }, [c]);
            let h = o.useCallback(() => {
                (function (e) {
                  let { current: t } = e;
                  if (void 0 === t)
                    throw Error("tried to unwrap an undefined value.");
                  return t;
                })(_)();
              }, [_]),
              g = o.useCallback(() => {
                O.error(
                  "Could not complete QR code login, trying to restart with a new QR code."
                ),
                  l({ step: 0 }),
                  !E.pending && E.fail(h);
              }, [h, E]);
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
                  f = !0;
                function _() {
                  if (null != i) return i;
                  throw Error("No key pair set");
                }
                let p = () => {
                  f
                    ? ((f = !1), a.send(JSON.stringify({ op: "heartbeat" })))
                    : (r("heartbeat timeout, reconnecting."), a.close(), g());
                };
                return (
                  (a.onmessage = async t => {
                    let { data: n } = t,
                      s = JSON.parse(n);
                    switch (s.op) {
                      case "nonce_proof": {
                        let e = s.encrypted_nonce,
                          t = await (0, T.decryptNonce)(_(), e);
                        r("computed nonce proof"),
                          a.send(
                            JSON.stringify({ op: "nonce_proof", nonce: t })
                          );
                        return;
                      }
                      case "pending_remote_init": {
                        E.succeed(),
                          m.ComponentDispatch.dispatch(
                            I.ComponentActions.WAVE_EMPHASIZE
                          );
                        let e = await (0, T.publicKeyFingerprint)(_());
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
                          I.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r(
                            "remote auth handshake started, awaiting ticket/cancel."
                          );
                        let e = s.encrypted_user_payload,
                          t = await (0, T.decodeEncodedUserRecord)(_(), e);
                        l({ step: 3, user: t });
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
                          t = await (0, T.decodeEncodedUserRecord)(_(), e);
                        l({ step: 2, user: t });
                        return;
                      }
                      case "finish": {
                        m.ComponentDispatch.dispatch(
                          I.ComponentActions.WAVE_EMPHASIZE
                        ),
                          r("remote auth handshake finished.");
                        let t = s.encrypted_token;
                        l({ step: 5 });
                        let n = await (0, T.decryptEncodedCiphertext)(_(), t);
                        e(n);
                        return;
                      }
                      case "cancel":
                        r("remote auth handshake cancelled."), h();
                        return;
                      case "hello": {
                        r(
                          "got hello, auth timeout=".concat(s.timeout_ms, "ms")
                        );
                        let e = s.heartbeat_interval;
                        c = setTimeout(
                          () => {
                            (c = null), p(), (u = setInterval(p, e));
                          },
                          Math.floor(e * Math.random())
                        );
                        return;
                      }
                      case "heartbeat_ack":
                        f = !0;
                    }
                  }),
                  (a.onopen = async () => {
                    (i = await (0, T.generateRsaKeyPair)()),
                      (o = await (0, T.serializePublicKey)(i));
                    let e = await (0, T.publicKeyFingerprint)(i);
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
                      E.cancel(),
                      null != c && clearTimeout(c),
                      null != u && clearInterval(u);
                  }
                );
              }, [h, e, t, E, g]),
              { state: r, rsaKeyPair: i, cancel: h, handleFailure: g }
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
              d.HTTP.post({
                url: I.Endpoints.REMOTE_AUTH_LOGIN,
                body: { ticket: n.ticket },
                oldFormErrors: !0,
              })
                .then(async e => {
                  if (null != s)
                    try {
                      let n = await (0, T.decryptEncodedCiphertext)(
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
              (0, i.jsx)("div", { className: R.verticalSeparator }),
              (0, i.jsx)(c.Sequencer, {
                fillParent: !0,
                className: R.qrLogin,
                step: l,
                steps: [0, 1],
                children: (0, i.jsx)("div", {
                  className: R.qrLoginInner,
                  children: (0, i.jsx)(v, { state: n, cancel: a }),
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
        E = n("77078"),
        f = n("437822"),
        _ = n("678916"),
        h = n("816540"),
        g = n("208266"),
        m = n("428958"),
        T = n("307439"),
        p = n("765825"),
        I = n("715570"),
        A = n("486252"),
        S = n("378020"),
        R = n("980976"),
        N = n("534438"),
        C = n("946859"),
        O = n("791160"),
        L = n("434824"),
        M = n("770032"),
        v = n("165926"),
        D = n("25033"),
        x = n("255403"),
        U = n("2581"),
        y = n("644417"),
        b = n("697543"),
        P = n("79345"),
        G = n("447997"),
        F = n("970366"),
        B = n("271938"),
        j = n("350522"),
        w = n("476108"),
        k = n("124969"),
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
            p.default.trackExposure({ location: "0ba758_1" });
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
              f.default.getLocationMetadata(),
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
              ((0, v.setNewUser)($.NewUserTypes.ORGANIC_REGISTERED),
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
          e && t(null != n ? n : w.default.defaultRoute);
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
            E = null != l ? l.code : null,
            f = null != o ? o.skuId : null,
            _ = T.usePromoEmailConsentStore.getState(),
            h = (0, K.isNullOrEmpty)(d) ? null : t === d,
            g = J.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t,
            m = J.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(n) : n;
          Y.ComponentDispatch.dispatch(Q.ComponentActions.WAVE_EMPHASIZE);
          try {
            c || null == l
              ? await (0, I.registerFull)({
                  email: e,
                  username: g,
                  globalName: m,
                  consent: a,
                  password: s,
                  invite: E,
                  usedUsernameSuggestion: h,
                  guildTemplateCode: null == i ? void 0 : i.code,
                  giftCodeSKUId: f,
                  birthday: r,
                  promoEmailConsent: _.required ? _ : null,
                })
              : await (0, I.default)({
                  consent: a,
                  invite: E,
                  giftCodeSKUId: f,
                  usedUsernameSuggestion: h,
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
            l = null;
          return (
            t
              ? (l = (0, s.jsx)(A.default, {
                  value: e,
                  onChange: e => this.setState({ consent: e }),
                  subText: et.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                    termsURL: Q.MarketingURLs.TERMS,
                    privacyURL: Q.MarketingURLs.PRIVACY,
                  }),
                }))
              : (r = (0, s.jsx)(k.SubText, {
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
          return (0, s.jsxs)(k.default, {
            className: e,
            children: [
              (0, s.jsx)(q.InviteResolvingHeader, {}),
              (0, s.jsxs)(k.Block, {
                className: es.marginTop40,
                children: [
                  (0, s.jsx)(E.FormTitle, {
                    children: et.default.Messages.FORM_LABEL_USERNAME,
                  }),
                  (0, s.jsx)(E.Tooltip, {
                    text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                    position: "right",
                    color: E.Tooltip.Colors.BRAND,
                    children: e => {
                      let { onMouseEnter: a, onMouseLeave: r } = e;
                      return (0, s.jsx)(k.Input, {
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
                  (0, s.jsx)(k.Button, {
                    className: es.marginTop20,
                    disabled: !0,
                    children: et.default.Messages.CONTINUE,
                  }),
                  (0, s.jsx)(k.SubText, {
                    disabled: !0,
                    className: es.marginTop8,
                    children: et.default.Messages.TERMS_PRIVACY.format({
                      termsURL: Q.MarketingURLs.TERMS,
                      privacyURL: Q.MarketingURLs.PRIVACY,
                    }),
                  }),
                  J.CONFERENCE_MODE_ENABLED
                    ? null
                    : (0, s.jsx)(k.Button, {
                        look: k.Button.Looks.LINK,
                        color: k.Button.Colors.LINK,
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
            ? (0, s.jsx)(N.default, {
                stageInstance: e.stage_instance,
                guild: e.guild,
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, s.jsx)(S.GuildScheduledEventInviteHeader, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, s.jsx)(q.default, { invite: e });
        }
        renderInviteButton() {
          let { invite: e, registering: t, consentRequired: n } = this.props,
            { consent: a } = this.state,
            r = k.Button.Colors.BRAND,
            l = et.default.Messages.CONTINUE;
          return (
            (null == e ? void 0 : e.stage_instance) != null &&
              ((r = k.Button.Colors.GREEN),
              (l = et.default.Messages.INSTANT_INVITE_ACCEPT_STAGE)),
            (0, s.jsx)(E.Tooltip, {
              text:
                !a && n
                  ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                  : null,
              children: e =>
                (0, s.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, s.jsx)(k.Button, {
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
              (0, s.jsxs)(k.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: t,
                children: [
                  this.renderInviteHeader(),
                  i ? (0, s.jsx)("div", { className: en.divider }) : null,
                  (0, s.jsxs)(k.Block, {
                    className: i ? void 0 : es.marginTop40,
                    children: [
                      (0, s.jsx)(E.FormTitle, {
                        error: er(null != a ? a : n),
                        children: et.default.Messages.DISPLAY_NAME,
                      }),
                      (0, s.jsx)(E.Tooltip, {
                        text: et.default.Messages.AUTH_USERNAME_TOOLTIP,
                        position: "right",
                        color: E.Tooltip.Colors.BRAND,
                        children: e => {
                          let { onMouseEnter: t, onMouseLeave: r } = e;
                          return (0, s.jsx)(k.Input, {
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
                      (0, s.jsx)(E.Text, {
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
                        : (0, s.jsx)(k.Button, {
                            look: k.Button.Looks.LINK,
                            color: k.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: es.marginTop20,
                            children: et.default.Messages.ALREADY_HAVE_ACCOUNT,
                          }),
                    ],
                  }),
                ],
              }),
              null != e && i
                ? (0, s.jsx)(k.default, {
                    className: es.marginTop20,
                    children: (0, s.jsx)(N.StageInviteFooter, {
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
            : (0, s.jsx)(k.SubText, {
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
              emailClientError: f,
              usernameClientError: _,
              passwordClientError: h,
              dateOfBirthClientError: m,
            } = this.state,
            {
              registering: T,
              consentRequired: p,
              isMobileWebInviteRegistration: I,
              uniqueUsernameRegistrationConfig: { suggestions: A },
              authBoxClassName: S,
              apiErrors: {
                email: N,
                username: C,
                global_name: O,
                password: L,
                date_of_birth: M,
              } = {},
              hasLoggedInAccounts: v,
              registrationCopyExperimentConfig: { hasCopyAboveButton: D },
            } = this.props,
            { subText: y, consentText: b } = this.renderConsentComponents(),
            P = this.renderErrorMessage(),
            F = (0, s.jsx)(E.Tooltip, {
              text:
                !u && p
                  ? et.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                  : null,
              children: e =>
                (0, s.jsx)("div", {
                  className: es.marginTop20,
                  ...e,
                  children: (0, s.jsx)(k.Button, {
                    type: "submit",
                    submitting: T,
                    disabled: !this.hasConsent() || this.state.isRateLimited,
                    children: et.default.Messages.CONTINUE,
                  }),
                }),
            }),
            B = async () => {
              this.setState({ usernameFocused: !0 }),
                A &&
                  i.length > 0 &&
                  !U.default.wasRegistrationSuggestionFetched(i) &&
                  (await x.default.fetchSuggestionsRegistration(i));
            },
            j =
              null != e
                ? (0, s.jsx)(a.Fragment, { children: e() }, "custom-header")
                : (0, s.jsx)(
                    k.Title,
                    { children: et.default.Messages.REGISTER_TITLE },
                    "title"
                  ),
            w = (0, s.jsxs)(k.Block, {
              className: es.marginTop20,
              children: [
                (0, s.jsx)(k.Input, {
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
                  error: null != f ? f : er(N),
                  type: "email",
                  setRef: e => {
                    this.emailRef = e;
                  },
                  required: !0,
                }),
                (0, s.jsx)(k.Input, {
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
                  children: (0, s.jsx)(E.Text, {
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
                    (0, s.jsx)(k.Input, {
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
                      error: null != _ ? _ : er(C),
                      setRef: e => {
                        this.usernameRef = e;
                      },
                      required: !0,
                    }),
                    this.renderUsernameValidation(),
                  ],
                }),
                (0, s.jsx)(k.Input, {
                  label: et.default.Messages.FORM_LABEL_PASSWORD,
                  name: "password",
                  value: o,
                  onChange: e =>
                    this.setState({
                      password: e,
                      passwordClientError:
                        0 === e.length ? et.default.Messages.REQUIRED : null,
                    }),
                  error: null != h ? h : er(L),
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
                  error: null != m ? m : er(M),
                  value: d,
                  required: !0,
                }),
                D && y,
                (0, s.jsx)(R.default, {}),
                F,
                P,
                b,
                !D && y,
                J.CONFERENCE_MODE_ENABLED
                  ? null
                  : (0, s.jsx)(k.Button, {
                      look: I ? k.Button.Looks.FILLED : k.Button.Looks.LINK,
                      color: I ? k.Button.Colors.PRIMARY : k.Button.Colors.LINK,
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
                className: l(S, en.horizontalAuthBox),
                children: () => [
                  j,
                  (0, s.jsxs)(
                    "div",
                    {
                      className: en.flex,
                      children: [
                        (0, s.jsx)(k.Title, {
                          className: en.createAccountTemplateHeader,
                          children: et.default.Messages.REGISTER_TITLE,
                        }),
                        w,
                      ],
                    },
                    "register-title"
                  ),
                ],
              })
            : (0, s.jsxs)(k.default, {
                onSubmit: this.handleSubmit,
                tag: "form",
                className: S,
                children: [
                  v && !I
                    ? (0, s.jsx)(k.Button, {
                        onClick: this.handleGotoLogin,
                        look: k.Button.Looks.LINK,
                        color: k.Button.Colors.PRIMARY,
                        className: en.goBackButton,
                        children: (0, s.jsxs)("div", {
                          className: en.content,
                          children: [
                            (0, s.jsx)(H.default, {
                              width: 16,
                              height: 16,
                              className: en.caret,
                            }),
                            (0, s.jsx)(E.Text, {
                              variant: "text-md/normal",
                              children: et.default.Messages.AGE_GATE_GO_BACK,
                            }),
                          ],
                        }),
                      })
                    : null,
                  j,
                  w,
                ],
              });
        }
        render() {
          let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
          if (e || this.hasError("date_of_birth"))
            return (0, s.jsx)(h.default, {});
          let { invite: n, giftCode: a, guildTemplate: r } = this.props,
            l =
              null != n &&
              null == n.guild &&
              null == n.channel &&
              null != n.inviter;
          return null == n || l || t
            ? null != r
              ? this.renderFull(
                  () => (0, s.jsx)(L.default, { guildTemplate: r }),
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
              let E = null != l ? (0, i.parse)(l.search) : {};
              null != r
                ? (t = Q.Routes.INVITE_LOGIN(r.code))
                : null != s
                  ? (t = Q.Routes.GIFT_CODE_LOGIN(s.code))
                  : null != a
                    ? (t = Q.Routes.GUILD_TEMPLATE_LOGIN(a.code))
                    : null != u
                      ? ((t = Q.Routes.LOGIN), (E.redirect_to = u))
                      : ((t = Q.Routes.LOGIN), "" !== n && (E = { email: n })),
                f.default.loginReset(),
                d(t, { search: (0, i.stringify)(E) }),
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
            [j.default, B.default, _.default, D.default, M.default],
            () => ({
              consentRequired: j.default.getAuthenticationConsentRequired(),
              registering:
                B.default.getRegisterStatus() ===
                Q.RegistrationStates.REGISTERING,
              apiErrors: B.default.getErrors(),
              authenticated: B.default.isAuthenticated(),
              isUnderage: _.default.isUnderageAnonymous(),
              country: D.default.getCountryCode(),
              hasLoggedInAccounts: M.default.getHasLoggedInAccounts(),
            })
          ),
          n = (0, b.useUURegistrationExperiment)(),
          r = (0, d.useStateFromStores)([U.default], () =>
            U.default.registrationUsernameSuggestion()
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
            registrationCopyExperimentConfig: p.default.getCurrentConfig(
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
                  { type: y.NameValidationState.ERROR, message: o.P.select() },
                  e =>
                    (0, s.jsx)(E.Text, {
                      className: en.messageNegative,
                      variant: "text-sm/normal",
                      children: e,
                    })
                )
                .with(
                  {
                    type: y.NameValidationState.AVAILABLE,
                    message: o.P.select(),
                  },
                  e =>
                    (0, s.jsx)(E.Text, {
                      className: en.messagePositive,
                      variant: "text-sm/normal",
                      children: e,
                    })
                )
                .otherwise(() =>
                  (0, s.jsx)(E.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children:
                      et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID,
                  })
                )
            : null != a && a.length > 0 && r.length > 0
              ? (0, s.jsx)(E.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: et.default.Messages.UU_REGISTER_SUGGESTION.format({
                    suggestion: a,
                    nameOnClick: u,
                  }),
                })
              : (0, s.jsx)(E.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children:
                    et.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID,
                })),
          (0, s.jsx)(G.default, {
            show:
              (c &&
                (null == d ? void 0 : d.type) ===
                  y.NameValidationState.ERROR) ||
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
            return _;
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
      function E(e, t) {
        u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
          authenticated: e,
          handoff_source: t,
        });
      }
      class f extends d.default {
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
                  (0, l.handoffSetUser)(t.user),
                    r.default.loginToken(t.token, !1),
                    E(!0, o);
                },
                e => {
                  if (
                    (null != a && E(!1, o),
                    r.default.setFingerprint(a),
                    (0, l.handoffEnd)(),
                    o === i.LoginHandoffSource.ROLE_SUBSCRIPTION)
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
              ? (r.default.setFingerprint(a), E(!1, o), (0, l.handoffEnd)())
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
      var _ = new f();
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
            (0, s.jsx)(l.TransitionGroup, { ...u, children: c })
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
          s.HTTP.patch({
            url: o.Endpoints.ME,
            oldFormErrors: !0,
            body: { date_of_birth: e.format("YYYY-MM-DD") },
          }).then(e => {
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
            return E;
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
      var E = e => {
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
            return I;
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
        E = n("283764");
      let f = o().localeData().months(),
        _ = Array.from(Array(31).keys()).map(e => ({
          value: e + 1,
          label: "".concat(e + 1),
        })),
        h = Array.from(Array(12).keys()).map(e => ({
          value: e + 1,
          label: f[e],
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
      function T() {
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
      let p = a.forwardRef(function (e, t) {
        let {
            value: n,
            wrapperClassName: r,
            onChange: i,
            onPopulated: f,
            error: g,
            autoFocus: p,
            required: I,
          } = e,
          {
            day: A,
            setDay: S,
            month: R,
            setMonth: N,
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
          L = a.useMemo(
            () =>
              null != A && null != R && null != C
                ? o("".concat(A, "/").concat(R, "/").concat(C), "DD/MM/YYYY")
                : null,
            [A, R, C]
          );
        a.useEffect(() => {
          i((null == L ? void 0 : L.isValid()) ? L : null);
        }, [L, i]);
        let M = g;
        null != L &&
          !L.isValid() &&
          (M = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let v = (function () {
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
          [D, x] = a.useState(p ? 0 : -1),
          U = a.useRef(null),
          y = a.useRef(null),
          b = a.useRef(null),
          P = a.useMemo(T, []),
          G = a.useCallback(() => {
            var e, t, n, s;
            switch (null === (e = P[D]) || void 0 === e ? void 0 : e.type) {
              case "day":
                null === (t = U.current) || void 0 === t || t.focus();
                break;
              case "month":
                null === (n = y.current) || void 0 === n || n.focus();
                break;
              case "year":
                null === (s = b.current) || void 0 === s || s.focus();
            }
          }, [D, U, y, b, P]);
        a.useEffect(() => {
          setTimeout(G, 500);
        }, []),
          a.useEffect(() => {
            if (D >= P.length) {
              null == f || f();
              return;
            }
            G();
          }, [D, G]);
        let F = [];
        for (let e = 0; e < 3; e++) {
          let { type: t } = P[e];
          switch (t) {
            case "day":
              F.push({
                key: "day",
                input: (0, s.jsx)(m, {
                  options: _,
                  selectOption: S,
                  children: (0, s.jsx)(d.default, {
                    ref: U,
                    className: E.inputDay,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_DAY,
                    }),
                    options: _,
                    value: A,
                    onChange: t => {
                      let { value: n } = t;
                      S(n), x(e + 1);
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
                  options: h,
                  selectOption: N,
                  children: (0, s.jsx)(d.default, {
                    ref: y,
                    className: E.inputMonth,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_MONTH,
                    }),
                    options: h,
                    value: R,
                    onChange: t => {
                      let { value: n } = t;
                      N(n), x(e + 1);
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
                  options: v,
                  selectOption: O,
                  children: (0, s.jsx)(d.default, {
                    ref: b,
                    className: E.inputYear,
                    "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                    menuPlacement: d.default.MenuPlacements.TOP,
                    placeholder: (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      children: c.default.Messages.AGE_GATE_DOB_YEAR,
                    }),
                    options: v,
                    value: C,
                    onChange: t => {
                      let { value: n } = t;
                      O(n), x(e + 1);
                    },
                    maxMenuHeight: 215,
                  }),
                }),
              });
          }
        }
        return (0, s.jsxs)("fieldset", {
          className: l(E.container, r),
          children: [
            (0, s.jsx)(u.FormTitle, {
              tag: "legend",
              required: I,
              error: M,
              children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH,
            }),
            (0, s.jsx)("div", {
              className: E.inputs,
              children: F.map((e, t) => {
                let { key: n, input: a } = e;
                return (0, s.jsx)(
                  "div",
                  { tabIndex: t + 1, className: E[n], children: a },
                  n
                );
              }),
            }),
          ],
        });
      });
      var I = p;
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
            return h;
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
        E = n("395724"),
        f = n("49111"),
        _ = n("586391");
      function h(e) {
        let { invite: t = null, giftCodeSKUId: n = null, ...s } = e;
        return g({ ...s, invite: t, giftCodeSKUId: n });
      }
      function g(e) {
        let {
          email: t,
          phoneToken: n,
          username: s,
          globalName: h,
          consent: g,
          password: m,
          guildTemplateCode: T,
          birthday: p,
          invite: I = null,
          giftCodeSKUId: A = null,
          multiStep: S = !1,
          promoEmailConsent: R = null,
          usedUsernameSuggestion: N = null,
        } = e;
        return (
          l.default.dispatch({ type: "REGISTER", birthday: S ? p : null }),
          null != p &&
            ((0, E.default)(p, f.AnalyticsSections.REGISTER),
            d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
              source: _.AgeGateSource.REGISTER,
              action: _.AgeGateAnalyticAction.AGE_GATE_SUBMITTED,
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
                d.default.track(f.AnalyticEvents.USER_AGE_SUBMITTED, {
                  age_bucket: t,
                }));
            })(p)),
          c.default
            .post({
              url: f.Endpoints.REGISTER,
              body: {
                fingerprint: u.default.getFingerprint(),
                email: t,
                username: s,
                global_name: h,
                password: m,
                invite: I,
                consent: g,
                phone_token: n,
                date_of_birth: null == p ? void 0 : p.format("YYYY-MM-DD"),
                gift_code_sku_id: A,
                guild_template_code: T,
                promotional_email_opt_in: null == R ? void 0 : R.checked,
              },
              trackedActionData: {
                event: r.NetworkActionNames.USER_REGISTER,
                properties: {
                  invite_code: I,
                  used_username_suggestion: N,
                  promotional_email_opt_in: null == R ? void 0 : R.checked,
                  promotional_email_pre_checked:
                    null == R ? void 0 : R.preChecked,
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
                  d.default.track(f.AnalyticEvents.AGE_GATE_ACTION, {
                    source: _.AgeGateSource.REGISTER,
                    action: _.AgeGateAnalyticAction.AGE_GATE_SUCCESS,
                  });
              },
              e => {
                let t = new i.default(e);
                throw (
                  (l.default.dispatch({ type: "REGISTER_FAILURE", error: t }),
                  null != t.getFieldErrors("date_of_birth") &&
                    o.preventUnderageRegistration(_.AgeGateSource.REGISTER),
                  d.default.track(f.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
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
          marginTopStyle: E,
        } = e;
        return (0, s.jsx)(i.default, {
          className: null != E ? E : d.marginTop20,
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
    819220: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getVerifiedName: function () {
            return a;
          },
        });
      var s = n("5487");
      function a(e) {
        return (0, s.default)(e).author;
      }
    },
    5487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var s = n("579033"),
        a = n("782340");
      function r(e) {
        switch (e) {
          case s.InternalTemplateCodes.CLASSROOM:
            return {
              header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM,
              description:
                a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM,
              nameLabel:
                a.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.LOCAL_COMMUNITIES:
            return {
              header:
                a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES,
              nameLabel:
                a.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.CREATORS_HOBBIES:
            return {
              header:
                a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES,
              nameLabel:
                a.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.GLOBAL_COMMUNITIES:
            return {
              header:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES,
              nameLabel:
                a.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.FRIENDS_FAMILY:
            return {
              header:
                a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY,
              nameLabel:
                a.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.STUDY_GROUPS:
            return {
              header:
                a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS,
              nameLabel:
                a.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.CREATE_FROM_SCRATCH:
            return {
              header:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH,
              nameLabel:
                a.default.Messages
                  .GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.CAMPUS_CLUBS:
            return {
              header:
                a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS,
              nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages
                  .GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.LEAGUE_CLUBS:
            return {
              header:
                a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS,
              nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
              author: a.default.Messages.DISCORD_NAME,
            };
          case s.InternalTemplateCodes.GITHUB_HACKATHON:
            return {
              header:
                a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON,
              description:
                a.default.Messages
                  .GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON,
              nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
              author: "GitHub Education",
            };
          default:
            return {
              header: a.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD,
              nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME,
              terms: a.default.Messages.CREATE_SERVER_GUIDELINES,
              defaultName:
                a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT,
            };
        }
      }
    },
    434824: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("124969"),
        r = n("5487"),
        l = n("473759"),
        i = n("579033"),
        o = n("223369");
      let u = {
        [i.InternalTemplateCodes.CLASSROOM]: n("251834"),
        [i.InternalTemplateCodes.LOCAL_COMMUNITIES]: n("787762"),
        [i.InternalTemplateCodes.CREATORS_HOBBIES]: n("41668"),
        [i.InternalTemplateCodes.GLOBAL_COMMUNITIES]: n("494323"),
        [i.InternalTemplateCodes.FRIENDS_FAMILY]: n("660389"),
        [i.InternalTemplateCodes.STUDY_GROUPS]: n("508971"),
        [i.InternalTemplateCodes.CREATE_FROM_SCRATCH]: n("800573"),
        [i.InternalTemplateCodes.CAMPUS_CLUBS]: n("97595"),
        [i.InternalTemplateCodes.LEAGUE_CLUBS]: n("556659"),
        [i.InternalTemplateCodes.GITHUB_HACKATHON]: n("212509"),
      };
      function d(e) {
        let { headerId: t, guildTemplate: n } = e,
          d = n.code,
          c = u[d];
        if (null != c) {
          var E;
          let { header: e, description: u, author: f } = (0, r.default)(d);
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("img", { className: o.image, src: c, alt: "" }),
              (0, s.jsx)(a.Title, { className: o.header, id: t, children: e }),
              (0, s.jsx)(a.SubTitle, { children: u }),
              n.state === i.GuildTemplateStates.RESOLVED
                ? (0, s.jsx)(l.UsagePill, {
                    className: o.usagePill,
                    count: null !== (E = n.usageCount) && void 0 !== E ? E : 0,
                    verifiedName: f,
                  })
                : null,
            ],
          });
        }
        return (0, s.jsx)(l.default, {
          pillClassName: o.usagePill,
          guildTemplate: n,
          tall: !0,
        });
      }
    },
    473759: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UsagePill: function () {
            return T;
          },
          default: function () {
            return p;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("414456"),
        r = n.n(a),
        l = n("77078"),
        i = n("931138"),
        o = n("124969"),
        u = n("486952"),
        d = n("819220"),
        c = n("5487"),
        E = n("579033"),
        f = n("782340"),
        _ = n("118243"),
        h = n("890957");
      function g() {
        return (0, s.jsx)(i.default, {
          className: _.verifiedIcon,
          children: (0, s.jsx)("div", {
            className: _.verifiedCheckContainer,
            children: (0, s.jsx)(u.default, { className: _.verifiedCheck }),
          }),
        });
      }
      function m(e) {
        let { verified: t, text: n } = e;
        return t
          ? (0, s.jsxs)("div", {
              className: _.verifiedNameContainer,
              children: [(0, s.jsx)(g, {}), n],
            })
          : (0, s.jsx)(s.Fragment, { children: n });
      }
      function T(e) {
        let { className: t, count: n, creator: a, verifiedName: l } = e;
        return (0, s.jsx)("div", {
          className: r(_.usagePill, t, _.userText),
          children:
            null != a || null != l
              ? f.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                  usageCount: n,
                  creator: null != l ? l : a,
                  creatorHook: (e, t) =>
                    (0, s.jsx)(m, { text: e, verified: null != l }, t),
                })
              : f.default.Messages.GUILD_TEMPLATE_USAGES.format({
                  usageCount: n,
                }),
        });
      }
      function p(e) {
        var t;
        let { guildTemplate: n, error: a, tall: i, pillClassName: u } = e;
        if (null != a && "" !== a)
          return (0, s.jsxs)("div", {
            className: _.container,
            children: [
              (0, s.jsx)(o.Title, {
                children: f.default.Messages.INVITE_MODAL_ERROR_TITLE,
              }),
              (0, s.jsx)(o.SubTitle, { children: a }),
            ],
          });
        if (n.state === E.GuildTemplateStates.RESOLVING)
          return (0, s.jsx)("div", {
            className: _.container,
            children: (0, s.jsx)(l.Spinner, {}),
          });
        let g = (0, c.default)(n.code).header;
        if (!i)
          return (0, s.jsxs)("div", {
            className: _.container,
            children: [
              (0, s.jsx)(o.Title, { className: _.title, children: g }),
              (0, s.jsx)(o.SubTitle, {
                className: r(_.subtitle, _.userText),
                children: n.name,
              }),
            ],
          });
        return (0, s.jsxs)("div", {
          className: _.container,
          children: [
            (0, s.jsx)(o.Title, { className: _.title, children: g }),
            (0, s.jsx)(o.SubTitle, {
              className: r(_.subtitle, h.marginTop2),
              children: f.default.Messages.GUILD_TEMPLATE_BASED_ON,
            }),
            (0, s.jsx)(o.Title, {
              className: r(_.title, _.userText),
              children: n.name,
            }),
            null != n.description &&
              "" !== n.description &&
              (0, s.jsx)(o.SubTitle, {
                className: r(_.subtitle, _.userText, h.marginTop8),
                children: n.description,
              }),
            (0, s.jsx)(T, {
              className: u,
              count: null !== (t = n.usageCount) && void 0 !== t ? t : 0,
              creator: n.creator.username,
              verifiedName: (0, d.getVerifiedName)(n.code),
            }),
          ],
        });
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
            return M;
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
        E = n("77078"),
        f = n("913144"),
        _ = n("437822"),
        h = n("229353"),
        g = n("271938"),
        m = n("599110"),
        T = n("718517"),
        p = n("672630"),
        I = n("49111"),
        A = n("201763");
      let S = "mweb_handoff_nonce",
        R = "mweb_handoff_nonce_expiration",
        N = 1 * T.default.Millis.MINUTE;
      ((a = s || (s = {})).NONCE_MISSING = "nonce_missing"),
        (a.NONCE_EXPIRED = "nonce_expired"),
        (a.NULL_HANDOFF_TOKEN = "deep_link_failed"),
        (a.HANDOFF_EXCHANGE = "handoff_exchange");
      let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
        O = new Set(["deep_link_failed"]),
        L = () => {
          c.Storage.remove(S), c.Storage.remove(R);
        };
      var M = () => {
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
            f.default.dispatch({ type: "FINGERPRINT", fingerprint: s });
        }, [s, e]);
        let [T, M] = l.useState(null),
          v = l.useCallback(
            e => {
              M(e),
                m.default.track(
                  I.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE,
                  { reason: e, fingerprint: (0, o.maybeExtractId)(a) },
                  { fingerprint: a }
                );
            },
            [M, a]
          ),
          D = c.Storage.get(S);
        if (
          ("null" === n && null === T && v("deep_link_failed"),
          null != n &&
            "null" !== n &&
            null == D &&
            null === T &&
            v("nonce_missing"),
          l.useEffect(() => {
            if (null != D) {
              let e = c.Storage.get(R);
              (null == e || Date.now() >= e) && (v("nonce_expired"), L());
            }
          }, [D, v]),
          l.useEffect(() => {
            null != n &&
              "null" !== n &&
              null != D &&
              null == T &&
              d.HTTP.post({
                url: I.Endpoints.HANDOFF_EXCHANGE,
                body: { key: D, handoff_token: n },
              })
                .then(e => _.default.loginToken(e.body.token, !1))
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
                  v("handoff_exchange");
                })
                .finally(() => {
                  L();
                });
          }, [n, D, T, a, v]),
          null == a)
        )
          return null;
        let x = (() => {
            if (null == T)
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1,
                  (0, r.jsx)("br", {}),
                  h.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2,
                ],
              });
            if (O.has(T)) return h.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
            if (C.has(T)) return h.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN;
          })(),
          U = null != T && O.has(T);
        return U
          ? (0, r.jsx)("div", {
              className: A.errorContainer,
              children: (0, r.jsx)(E.Text, {
                color: "interactive-normal",
                variant: "text-sm/semibold",
                children: x,
              }),
            })
          : (0, r.jsxs)("div", {
              className: A.container,
              children: [
                (0, r.jsx)(E.Text, {
                  variant: "text-sm/semibold",
                  children: x,
                }),
                (0, r.jsx)(E.Button, {
                  look: E.Button.Looks.INVERTED,
                  color: E.Button.Colors.BRAND_NEW,
                  onClick: () => {
                    let e = p.default.generateNonce();
                    c.Storage.set(S, e), c.Storage.set(R, Date.now() + N);
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
                  children: (0, r.jsx)(E.Text, {
                    className: A.buttonText,
                    variant: "text-sm/semibold",
                    children: h.MOBILE_WEB_HANDOFF_BUTTON_TEXT,
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
            return E;
          },
          switchAccount: function () {
            return f;
          },
          removeAccount: function () {
            return _;
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
      function E() {
        let e = o.default.getId(),
          t = u.default.getUsers();
        t.forEach(async t => {
          let n,
            { id: l } = t,
            i = s.getToken(l);
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
            n = await a.HTTP.get({
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
      function f(e, t) {
        c.log("Switching account to ".concat(e), { switchSynchronously: t });
        let n = s.getToken(e);
        return null == n
          ? (c.log("Switching accounts failed because there was no token"),
            r.default.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: e,
            }),
            Promise.resolve())
          : l.default.switchAccountToken(n, t);
      }
      function _(e) {
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
            return E;
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
      var E = {
        setCountryCode(e) {
          i.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          l.HTTP.del({
            url: c.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = o.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            l.HTTP.post({
              url: c.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          l.HTTP.post({
            url: c.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          l.HTTP.post({
            url: c.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          l.HTTP.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          l.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          l.HTTP.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          l.HTTP.post({
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
          let E = await u.default.post({
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
            E.body
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
            return _;
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
        E = n("49111"),
        f = n("782340");
      n("2581");
      var _ = {
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
                url: E.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
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
                url: E.Endpoints.POMELO_SUGGESTIONS,
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
          let _ =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
              : t.includes("..")
                ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                : t.length < 2 || t.length > 32
                  ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != _)
            return (
              i.default.track(E.AnalyticEvents.POMELO_ERRORS, {
                reason: _,
                username_error: !0,
                location: a,
                one_click_flow: c,
              }),
              r.default.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: _,
              })
            );
          if ((0, u.getPomeloAttempt)())
            try {
              let t = await o.default.post({
                url: d
                  ? E.Endpoints.POMELO_ATTEMPT_UNAUTHED
                  : E.Endpoints.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: s.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                i.default.track(E.AnalyticEvents.POMELO_ERRORS, {
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
              i.default.track(E.AnalyticEvents.POMELO_ERRORS, {
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
              url: E.Endpoints.POMELO_CREATE,
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
          c = (0, r.useStateFromStores)(
            [o.default],
            () => o.default.validate(e),
            [e]
          ),
          E = (0, r.useStateFromStores)([o.default], () =>
            o.default.isRateLimited()
          ),
          f = (0, i.usePomeloDebounceDelay)(),
          _ = s.useMemo(
            () =>
              (0, a.debounce)(
                e =>
                  l.default.attemptPomelo(
                    e,
                    n ? "registration" : "modal",
                    n,
                    d
                  ),
                f
              ),
            [f, n, d]
          );
        return (
          s.useEffect(() => {
            t && !E && null == c && "" !== e && _(e);
          }, [t, E, c, e, _]),
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
        r = n("146606"),
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
            return E;
          },
          default: function () {
            return f;
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
      class E extends l.PureComponent {
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
      E.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
      var f = c;
    },
    98013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeDesktopDownloadURL: function () {
            return u;
          },
          getPlatformReadableName: function () {
            return c;
          },
          getCurrentPlatformDownloadURL: function () {
            return E;
          },
          getMobileDownloadLink: function () {
            return f;
          },
        });
      var s = n("597755"),
        a = n.n(s),
        r = n("815157"),
        l = n("271938"),
        i = n("49111");
      let o = "linux";
      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(i.DownloadLinks.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function d() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = a.os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? o
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function c(e) {
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[d(e)];
      }
      function E() {
        let e = d();
        return u(e, !1, e === o ? "tar.gz" : null);
      }
      function f(e, t, n) {
        let s = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, r.default)(
              null != s
                ? s
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, r.default)(
              null != s ? s : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
              }
            );
          default:
            return null != s ? s : "https://www.discord.com";
        }
      }
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
            return f;
          },
          decryptNonce: function () {
            return _;
          },
          decodeEncodedUserRecord: function () {
            return h;
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
      function E(e, t) {
        return (
          a(null != e.privateKey, "private key cannot be null"),
          window.crypto.subtle.decrypt(
            { name: "RSA-OAEP", hash: "SHA-256" },
            e.privateKey,
            t
          )
        );
      }
      async function f(e, t) {
        let n = new TextDecoder(),
          s = await E(e, d(t));
        return n.decode(s);
      }
      async function _(e, t) {
        let n = await E(e, d(t));
        return u(n);
      }
      async function h(e, t) {
        t = await f(e, t);
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
//# sourceMappingURL=30341.006f829f895a8aff0c19.js.map

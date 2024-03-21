(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17832"],
  {
    310013: function (e, t, n) {
      "use strict";
      var l = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        r = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          arguments: !0,
          arity: !0,
        },
        a = "function" == typeof Object.getOwnPropertySymbols;
      e.exports = function (e, t, n) {
        if ("string" != typeof t) {
          var i = Object.getOwnPropertyNames(t);
          a && (i = i.concat(Object.getOwnPropertySymbols(t)));
          for (var s = 0; s < i.length; ++s)
            if (!l[i[s]] && !r[i[s]] && (!n || !n[i[s]]))
              try {
                e[i[s]] = t[i[s]];
              } catch (e) {}
        }
        return e;
      };
    },
    80300: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          backgroundImagePreloader: function () {
            return d;
          },
        }),
        n("424973");
      var l = n("37983"),
        r = n("884691"),
        a = n("310013"),
        i = n.n(a),
        s = n("407063");
      let u = /url\(['"](.*)['"]\)/,
        o = e => {
          if (null == e || "" === e || "none" === e) return null;
          let t = e.match(u);
          return null != t ? t[1] : e;
        };
      function d(e) {
        class t extends r.Component {
          componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: l } = this.state,
              { style: r } = this.props,
              a = null != r ? o(r.backgroundImage) : null;
            null == a && a !== n
              ? this.setState({ loaded: !0, cached: a })
              : this.cachedURLs.indexOf(a) >= 0
                ? this.setState({ loaded: !0, cached: a })
                : null != a &&
                  a !== n &&
                  !0 === l &&
                  this.setState({ loaded: !1 }, () => this.preloadURL(a));
          }
          preloadURL(e) {
            this.canceller && this.canceller(),
              (this.canceller = (0, s.loadImage)(e, t => {
                this.canceller && (this.canceller = null),
                  !t &&
                    (this.cachedURLs.push(e),
                    this.setState({ cached: e, loaded: !0 }));
                let { onBackgroundImageLoad: n } = this.props;
                n && n(t, e);
              }));
          }
          componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
          }
          render() {
            let { style: t, onBackgroundImageLoad: n, ...r } = this.props,
              { loaded: a, cached: i } = this.state;
            if (!a && null != t) {
              var s;
              t = {
                ...t,
                backgroundImage:
                  null == (s = i) || "" === s || "none" === s
                    ? "none"
                    : "url(".concat(s, ")"),
              };
            }
            return (0, l.jsx)(e, { style: t, ...r });
          }
          constructor(e) {
            super(e), (this.cachedURLs = []), (this.canceller = null);
            let { style: t } = e,
              n = null != t ? o(t.backgroundImage) : null;
            (this.cachedURLs = [n]), (this.state = { cached: n, loaded: !0 });
          }
        }
        return i(t, e), t;
      }
    },
    646074: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("871238");
      n.es(l, t);
    },
    956967: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCurrentUserHasAutomodQuarantinedProfile: function () {
            return N;
          },
          useGuildAutomodProfileQuarantineErrors: function () {
            return L;
          },
          useOpenFixQuarantinedProfileModal: function () {
            return p;
          },
        }),
        n("702976");
      var l = n("884691"),
        r = n("65597"),
        a = n("79112"),
        i = n("685665"),
        s = n("929423"),
        u = n("271938"),
        o = n("26989"),
        d = n("305961"),
        c = n("957255"),
        I = n("162771"),
        f = n("681937"),
        _ = n("49111"),
        E = n("657944"),
        h = n("397336"),
        T = n("782340");
      function N(e) {
        return (0, r.default)(
          [u.default, o.default],
          () => {
            if (null == e) return !1;
            let t = u.default.getId();
            return (0, f.hasAutomodQuarantinedProfile)(
              o.default.getMember(e, t)
            );
          },
          [e]
        );
      }
      function L(e) {
        return (0, r.useStateFromStoresObject)(
          [u.default, o.default, I.default, d.default],
          () => {
            let t = { nick: void 0, bio: void 0 },
              n = I.default.getGuildId(),
              l = null != e ? e : n,
              r = d.default.getGuild(l);
            if (null == r || null == l) return t;
            let a = u.default.getId(),
              i = o.default.getMember(l, a),
              s = (0, f.getAutomodQuarantinedProfileFlags)(
                null == i ? void 0 : i.flags
              );
            if (0 === s.size) return t;
            if (
              s.has(
                E.GuildMemberFlags
                  .AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME
              )
            ) {
              if (null == e) {
                var c;
                t.nick = [
                  T.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format(
                    {
                      guildName: null !== (c = r.name) && void 0 !== c ? c : "",
                    }
                  ),
                ];
              } else
                t.nick = [
                  T.default.Messages
                    .GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME,
                ];
            }
            return (
              s.has(E.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) &&
                (t.bio = [
                  T.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO,
                ]),
              t
            );
          },
          [e]
        );
      }
      function p(e) {
        let {
            guildId: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: o,
            openWithoutBackstack: I,
          } = e,
          { analyticsLocations: f } = (0, i.default)(),
          E = (0, r.default)([d.default], () => d.default.getGuild(t), [t]),
          T = (0, r.default)(
            [c.default],
            () => null != E && c.default.can(_.Permissions.CHANGE_NICKNAME, E),
            [E]
          ),
          N = l.useCallback(() => {
            if (null == E) return;
            let e = _.UserSettingsSections.PROFILE_CUSTOMIZATION,
              t = h.ProfileCustomizationSubsection.GUILD;
            T
              ? (0, s.initGuildIdentitySettings)(E, null != o ? o : f)
              : (t = h.ProfileCustomizationSubsection.USER_PROFILE),
              a.default.open(e, t, {
                scrollPosition: n,
                analyticsLocation: u,
                analyticsLocations: o,
                openWithoutBackstack: I,
              });
          }, [T, n, u, o, I, E, f]);
        return [N, T];
      }
    },
    55812: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("222007");
      var l = n("37983"),
        r = n("884691"),
        a = n("65597"),
        i = n("77078"),
        s = n("812204"),
        u = n("685665"),
        o = n("271938"),
        d = n("26989"),
        c = n("305961"),
        I = n("476263"),
        f = n("533930"),
        _ = n("599110"),
        E = n("681937"),
        h = n("956967"),
        T = n("143460"),
        N = n("49111"),
        L = n("657944"),
        p = n("782340"),
        S = n("261591");
      function g(e) {
        var t;
        let { onClose: n, transitionState: g, guildId: A } = e,
          D = (0, a.default)([o.default], () => o.default.getId()),
          R = (0, a.default)([d.default], () => d.default.getMember(A, D), [
            A,
            D,
          ]),
          M = (0, a.default)([c.default], () => c.default.getGuild(A), [A]),
          G =
            null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "",
          U = (0, E.getAutomodQuarantinedGuildMemberFlags)(R),
          { analyticsLocations: C } = (0, u.default)(
            s.default.AUTOMOD_PROFILE_QUARANTINE_ALERT
          ),
          [m, O] = (0, h.useOpenFixQuarantinedProfileModal)({
            guildId: A,
            analyticsLocations: C,
            openWithoutBackstack: !0,
          }),
          y = U.has(
            L.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME
          )
            ? p.default.Messages
                .GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE
            : p.default.Messages
                .GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
        !O &&
          (y =
            p.default.Messages
              .GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
        let P = O
          ? p.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA
          : p.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
        return (r.useEffect(() => {
          _.default.track(N.AnalyticEvents.OPEN_MODAL, {
            type: T.QUARANTINE_USER_ALERT_KEY,
            guild_id: A,
            other_user_id: D,
          });
        }, []),
        r.useEffect(() => {
          if (null == M) {
            n();
            return;
          }
        }, [M, n]),
        null == M)
          ? null
          : (0, l.jsxs)(i.ModalRoot, {
              transitionState: g,
              size: i.ModalSize.SMALL,
              children: [
                (0, l.jsx)(i.ModalHeader, {
                  separator: !1,
                  children: (0, l.jsxs)("div", {
                    className: S.headerContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: S.guildIconContainer,
                        children: [
                          (0, l.jsx)(I.default, {
                            guild: M,
                            size: I.default.Sizes.LARGER,
                          }),
                          (0, l.jsx)("div", {
                            className: S.statusContainer,
                            children: (0, l.jsx)(f.default, {
                              className: S.statusIcon,
                              width: 24,
                              height: 24,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)(i.Heading, {
                        color: "header-primary",
                        variant: "heading-md/semibold",
                        children:
                          p.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format(
                            { guildName: G }
                          ),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(i.ModalContent, {
                  children: (0, l.jsx)("div", {
                    className: S.descriptionContainer,
                    children: (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: y,
                    }),
                  }),
                }),
                (0, l.jsxs)(i.ModalFooter, {
                  children: [
                    (0, l.jsx)(i.Button, {
                      onClick: () => {
                        m(), n();
                      },
                      color: i.Button.Colors.BRAND_NEW,
                      look: i.Button.Looks.FILLED,
                      children: P,
                    }),
                    (0, l.jsx)(i.Button, {
                      onClick: n,
                      color: i.Button.Colors.PRIMARY,
                      look: i.Button.Looks.LINK,
                      children: p.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    929423: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          saveGuildIdentityChanges: function () {
            return s;
          },
          setCurrentGuild: function () {
            return u;
          },
          initGuildIdentitySettings: function () {
            return o;
          },
          closeGuildIdentitySettings: function () {
            return d;
          },
          resetAndCloseGuildIdentityForm: function () {
            return c;
          },
          setPendingAvatar: function () {
            return I;
          },
          setPendingAvatarDecoration: function () {
            return f;
          },
          setPendingProfileEffectId: function () {
            return _;
          },
          setPendingBanner: function () {
            return E;
          },
          setPendingBio: function () {
            return h;
          },
          setPendingPronouns: function () {
            return T;
          },
          setPendingNickname: function () {
            return N;
          },
          setPendingThemeColors: function () {
            return L;
          },
          resetPendingMemberChanges: function () {
            return p;
          },
          resetPendingProfileChanges: function () {
            return S;
          },
          resetAllPending: function () {
            return g;
          },
          clearErrors: function () {
            return A;
          },
          setDisableSubmit: function () {
            return D;
          },
        }),
        n("70102");
      var l = n("872717"),
        r = n("913144"),
        a = n("54239"),
        i = n("49111");
      async function s(e, t) {
        let { nick: n, avatar: a, avatarDecoration: s } = t;
        if (null == e) throw Error("Need guildId");
        r.default.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SUBMIT" });
        let u = {
          nick: n,
          avatar: a,
          avatar_decoration_id: null === s ? null : null == s ? void 0 : s.id,
          avatar_decoration_sku_id:
            null === s ? null : null == s ? void 0 : s.skuId,
        };
        try {
          let t = await l.HTTP.patch({
            url: i.Endpoints.SET_GUILD_MEMBER(e),
            body: u,
            oldFormErrors: !0,
          });
          return (
            r.default.dispatch({
              type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS",
            }),
            r.default.dispatch({
              type: "GUILD_MEMBER_PROFILE_UPDATE",
              guildMember: t.body,
              guildId: e,
            }),
            t
          );
        } catch (t) {
          let e = t.body;
          (null == e ? void 0 : e.username) != null &&
            ((e.nick = e.username), delete e.username),
            r.default.dispatch({
              type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
              errors: t.body,
            });
        }
      }
      function u(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
          guild: e,
        });
      }
      function o(e, t) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_INIT",
          guild: e,
          analyticsLocations: t,
        });
      }
      function d() {
        r.default.dispatch({ type: "GUILD_IDENTITY_SETTINGS_CLOSE" }),
          (0, a.popLayer)();
      }
      function c() {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM",
        });
      }
      function I(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
          avatar: e,
        });
      }
      function f(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
          avatarDecoration: e,
        });
      }
      function _(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
          profileEffectId: e,
        });
      }
      function E(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
          banner: e,
        });
      }
      function h(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
          bio: e,
        });
      }
      function T(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
          pronouns: e,
        });
      }
      function N(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
          nickname: e,
        });
      }
      function L(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
          themeColors: e,
        });
      }
      function p() {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES",
        });
      }
      function S() {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES",
        });
      }
      function g() {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING",
        });
      }
      function A() {
        r.default.dispatch({ type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS" });
      }
      function D(e) {
        r.default.dispatch({
          type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
          disable: e,
        });
      }
    },
    931138: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        a = n("414456"),
        i = n.n(a),
        s = n("77078"),
        u = n("760607"),
        o = n("684133");
      function d(e) {
        let {
            children: t,
            size: n = 16,
            className: a,
            flowerStarClassName: d,
            ...c
          } = e,
          I = r.Children.only(t),
          f = (0, s.useRedesignIconContext)().enabled;
        return (0, l.jsxs)("div", {
          className: i(o.flowerStarContainer, a),
          style: { width: n, height: n },
          children: [
            (0, l.jsx)(u.default, { ...c, className: i(d, o.flowerStar) }),
            (0, l.jsx)("div", {
              className: i(o.childContainer, {
                [o.redesignIconChildContainer]: f,
              }),
              children: I,
            }),
          ],
        });
      }
    },
    476263: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        a = n("414456"),
        i = n.n(a),
        s = n("90915"),
        u = n("446674"),
        o = n("669491"),
        d = n("77078"),
        c = n("80300"),
        I = n("471671"),
        f = n("103603"),
        _ = n("474293"),
        E = n("580357"),
        h = n("356659");
      let T = {
          SMOL: "Smol",
          MINI: "Mini",
          SMALLER: "Smaller",
          SMALL: "Small",
          MEDIUM: "Medium",
          LARGE: "Large",
          LARGER: "Larger",
          XLARGE: "XLarge",
        },
        N = {
          [T.SMOL]: 16,
          [T.MINI]: 20,
          [T.SMALLER]: 24,
          [T.SMALL]: 30,
          [T.MEDIUM]: 40,
          [T.LARGE]: 50,
          [T.LARGER]: 64,
          [T.XLARGE]: 100,
        },
        L = {
          [T.SMOL]: [10, 10, 8, 6, 6, 4],
          [T.MINI]: [12, 12, 10, 10, 8, 6, 4],
          [T.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
          [T.SMALL]: [14, 14, 12, 12, 10, 8, 6],
          [T.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
          [T.LARGE]: [18, 18, 16, 16, 14, 12, 10],
          [T.LARGER]: [19, 19, 17, 17, 15, 13, 11],
          [T.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
        };
      class p extends r.PureComponent {
        renderAcronym() {
          let { guild: e, iconSrc: t } = this.props;
          return null != e.icon || null != t
            ? null
            : (0, l.jsx)("div", { className: h.acronym, children: e.acronym });
        }
        renderBadge() {
          let { showBadge: e, guild: t, badgeStrokeColor: n } = this.props;
          return e && null != t.hasFeature
            ? (0, l.jsx)(E.default, {
                className: h.guildIconBadge,
                guild: t,
                badgeStrokeColor: n,
              })
            : null;
        }
        renderIcon() {
          var e, t;
          let {
              guild: n,
              className: r,
              showBadge: a,
              active: s,
              size: u,
              style: o = {},
              textScale: c,
              showTooltip: I,
              tooltipPosition: f,
              onClick: E,
              to: T,
              badgeStrokeColor: N,
              animate: p,
              tabIndex: S,
              iconSrc: g,
              "aria-hidden": A,
              ...D
            } = this.props,
            R = L[u],
            M = null != E ? d.Clickable : "div";
          return (0, l.jsxs)(M, {
            className: i(h.icon, r, (0, _.getClass)(h, "iconSize", u), {
              [null !== (e = (0, _.getClass)(h, "iconActive", u)) &&
              void 0 !== e
                ? e
                : ""]: s,
              [h.iconInactive]: !s,
              [h.noIcon]: null == n.icon,
            }),
            "aria-hidden": A,
            style:
              null == n.icon
                ? {
                    fontSize:
                      (null !== (t = R[n.acronym.length]) && void 0 !== t
                        ? t
                        : R[R.length - 1]) * c,
                    ...o,
                  }
                : o,
            onClick: null != T || null == E ? void 0 : E,
            tabIndex: S,
            ...D,
            children: [this.renderAcronym(), this.renderBadge()],
          });
        }
        renderTooltip() {
          let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
          return t
            ? (0, l.jsx)(d.Tooltip, {
                text: e.name,
                position: n,
                "aria-label": !1,
                children: e =>
                  r.cloneElement(r.Children.only(this.renderIcon()), { ...e }),
              })
            : this.renderIcon();
        }
        render() {
          let {
            to: e,
            guild: t,
            source: n,
            tabIndex: r,
            "aria-hidden": a,
          } = this.props;
          return null != e
            ? (0, l.jsx)(s.Link, {
                "aria-hidden": a,
                to: {
                  pathname: e,
                  state: null != n ? { analyticsSource: n } : null,
                },
                "aria-label": t.toString(),
                tabIndex: r,
                children: this.renderTooltip(),
              })
            : this.renderTooltip();
        }
      }
      let S = u.default.connectStores([I.default], e => {
        let { guild: t, animate: n, iconSrc: l, style: r, size: a } = e;
        return {
          style: {
            ...r,
            backgroundImage: (0, f.makeCssUrlString)(
              null != l ? l : t.getIconURL(N[a], n && I.default.isFocused())
            ),
          },
        };
      })((0, c.backgroundImagePreloader)(e => (0, l.jsx)(p, { ...e })));
      class g extends r.PureComponent {
        render() {
          return (0, l.jsx)(S, { ...this.props });
        }
      }
      (g.Sizes = T),
        (g.defaultProps = {
          size: T.LARGE,
          textScale: 1,
          showBadge: !1,
          showTooltip: !1,
          active: !1,
          tooltipPosition: "top",
          badgeStrokeColor: o.default.unsafe_rawColors.WHITE_500.css,
          animate: !1,
        });
      var A = g;
    },
    533930: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("646074"),
        i = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              color: t = "currentColor",
              height: n = 24,
              width: r = 24,
              ...a
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(a),
              width: r,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                  stroke: t,
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                  fill: t,
                }),
              ],
            });
          },
          a.ChatXIcon,
          void 0,
          { size: 24 }
        );
    },
    760607: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("75196"),
        a = function (e) {
          let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: i,
            ...s
          } = e;
          return (0, l.jsx)("svg", {
            ...(0, r.default)(s),
            width: t,
            height: n,
            viewBox: "0 0 16 15.2",
            children: (0, l.jsx)("path", {
              className: i,
              fill: a,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
    474293: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getClass: function () {
            return r;
          },
        }),
        n("808653");
      var l = n("159885");
      function r(e, t) {
        for (
          var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          r[a - 2] = arguments[a];
        let i = r.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
          s = "".concat(t).concat(i),
          u = e[s];
        if (null != u) return u;
      }
    },
    871238: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatXIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15.3 15.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3a1 1 0 0 1 1.4 1.42L20.43 19l2.29 2.3a1 1 0 0 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 0 1 0-1.4Z",
              className: s,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "m18.65 14.4-.53-.52a3 3 0 0 0-4.24 4.24l.53.53c.2.2.2.5 0 .7l-.53.53a2.99 2.99 0 0 0-.84 1.63c-.04.25-.23.46-.48.47L12 22H2.2a1 1 0 0 1-.75-1.66l2.07-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.43-4.8c-.02.25-.23.44-.48.48-.6.1-1.17.38-1.63.84l-.52.52a.5.5 0 0 1-.71 0Z",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=13ac2ad45b5bcfb0475a.js.map

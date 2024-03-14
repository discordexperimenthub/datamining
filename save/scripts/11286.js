(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11286"],
  {
    352674: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("913144"),
        l = {
          startTyping(e) {
            i.default.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
          },
          stopTyping(e) {
            i.default.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
          },
        };
    },
    997289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAnalyticsContext: function () {
            return r;
          },
        });
      var i = n("884691"),
        l = n("599110");
      let r = () => i.useContext(l.AnalyticsContext);
    },
    837707: function (e, t, n) {
      "use strict";
      function i(e) {
        if (null != e) {
          if ("activitySessionId" in e) return e.activitySessionId;
          if ("instanceId" in e) return e.instanceId;
          if ("activity_id" in e) return e.activity_id;
        }
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
    },
    462274: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useColorStore: function () {
            return f;
          },
          maybeFetchColors: function () {
            return c;
          },
          default: function () {
            return m;
          },
          useAvatarColors: function () {
            return g;
          },
        }),
        n("222007");
      var i = n("884691"),
        l = n("656280"),
        r = n.n(l),
        u = n("308503"),
        a = n("446674"),
        s = n("206230"),
        o = n("284679"),
        d = n("103603");
      let f = (0, u.default)(() => ({ palette: {}, fetching: {} }));
      async function c(e) {
        null == f.getState().palette[e] && (await h(e));
      }
      async function h(e) {
        if (!f.getState().fetching[e]) {
          f.setState(t => ({ fetching: { ...t.fetching, [e]: !0 } }));
          try {
            let t = await (0, d.getPaletteForAvatar)(e),
              n = (0, o.getComplimentaryPaletteForColor)(t[0]);
            f.setState(i => ({
              fetching: { ...i.fetching, [e]: !1 },
              palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
            }));
          } catch (t) {
            f.setState(t => ({ fetching: { ...t.fetching, [e]: !1 } }));
          }
        }
      }
      function m(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [i] = g(e, t, n);
        return i;
      }
      function g(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = f(t => (null == e ? void 0 : t.palette[e])),
          u = (0, a.useStateFromStores)([s.default], () =>
            n && s.default.desaturateUserColors ? s.default.saturation : 1
          );
        i.useEffect(() => {
          null != e && null == l && h(e);
        }, [e, l]);
        let o = i.useMemo(
          () =>
            null == l
              ? void 0
              : l.map(e => {
                  let [t, n, i] = e,
                    { h: l, s: a, l: s } = r({ r: t, g: n, b: i }).toHsl();
                  return r({ h: l, s: a * u, l: s }).toHexString();
                }),
          [l, u]
        );
        return null != o ? o : [t, t];
      }
    },
    166452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("272030"),
        u = n("838446"),
        a = n("158534"),
        s = n("798609"),
        o = n("846883"),
        d = n("812204"),
        f = n("389153"),
        c = n("243288"),
        h = n("321135"),
        m = n("873254"),
        g = n("861370"),
        v = n("726750"),
        p = n("170990"),
        M = n("304582"),
        P = n("72057"),
        C = n("563816"),
        b = n("489836"),
        _ = n("406703"),
        S = n("343856"),
        I = n("502533"),
        x = n("314838"),
        U = n("383161"),
        T = n("421602"),
        y = n("432487"),
        E = n("151200"),
        A = n("692986"),
        j = n("806179"),
        R = n("816106"),
        G = n("623879"),
        N = n("49111"),
        O = n("782340"),
        w = (0, a.default)(
          (0, u.default)(
            function (e) {
              var t;
              let {
                  user: n,
                  channel: u,
                  context: a,
                  showChatItems: d = !0,
                  showMediaItems: N = !1,
                  showChannelCallItems: w = !1,
                  showModalItems: F = !0,
                  onSelect: L,
                  onHeightUpdate: B,
                } = e,
                z = (0, j.default)(n.id, null),
                D = (0, U.default)(n, null, a),
                k = (0, E.default)(n.id, u.id),
                H = (0, T.default)(n.id, a),
                W = (0, _.default)(n, a),
                Y = (0, P.default)({ user: n, context: a }),
                X = (0, M.default)(n),
                Z = (0, R.default)(n.id),
                V = (0, y.default)(n.id, u.id),
                q = (0, A.default)(n.id),
                J = (0, I.default)(n.id, u.id),
                K = (0, x.default)(n),
                Q = (0, o.default)(null, n),
                $ = (0, p.default)(n),
                ee = (0, b.default)(n),
                et = (0, g.default)({
                  id: n.id,
                  label: O.default.Messages.COPY_ID_USER,
                }),
                en = (0, G.default)(n.id),
                ei = (0, h.default)(n.id),
                el = (0, c.default)(u.id),
                er = (0, v.default)(n),
                eu = (0, m.default)(n.id),
                ea = (0, C.default)({
                  commandType: s.ApplicationCommandType.USER,
                  commandTargetId: n.id,
                  channel: u,
                  guildId: void 0,
                  onHeightUpdate: B,
                }),
                es = (0, S.default)(n, u),
                eo = (0, f.useIsInUserAppExperiment)(null, {
                  location: "GroupDMUserContextMenu",
                }),
                ed = n.isNonUserBot(),
                ef = u.isManaged(),
                ec =
                  null === (t = u.recipients) || void 0 === t
                    ? void 0
                    : t.includes(n.id);
              return (0, i.jsxs)(l.Menu, {
                navId: "user-context",
                onClose: r.closeContextMenu,
                "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: L,
                children: [
                  !ed &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(l.MenuGroup, { children: er }),
                        (0, i.jsxs)(l.MenuGroup, {
                          children: [
                            F && z,
                            d && D,
                            H,
                            W,
                            !ef && k,
                            F && Y,
                            F && X,
                            en,
                          ],
                        }),
                        N && (0, i.jsx)(l.MenuGroup, { children: Z }),
                        ec &&
                          (0, i.jsxs)(l.MenuGroup, {
                            children: [!ef && V, es],
                          }),
                        (0, i.jsx)(l.MenuGroup, { children: F && Q }),
                        (0, i.jsxs)(l.MenuGroup, {
                          children: [
                            N && q,
                            N && J,
                            eo && ea,
                            F && K,
                            $,
                            F && ee,
                            N && eu,
                          ],
                        }),
                        w && (0, i.jsxs)(l.MenuGroup, { children: [el, ei] }),
                      ],
                    }),
                  (0, i.jsx)(l.MenuGroup, { children: et }),
                ],
              });
            },
            { object: N.AnalyticsObjects.CONTEXT_MENU }
          ),
          [d.default.CONTEXT_MENU, d.default.GROUP_DM_USER_MENU]
        );
    },
    343856: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        r = n("669491"),
        u = n("77078"),
        a = n("450911"),
        s = n("145079"),
        o = n("87657"),
        d = n("697218"),
        f = n("782340"),
        c = n("766646");
      function h(e) {
        let { color: t, className: n } = e;
        return (0, i.jsx)("svg", {
          className: n,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, i.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, i.jsxs)("g", {
                stroke: t,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, i.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, i.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, i.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, i.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function m(e, t) {
        let n = (0, l.useStateFromStores)([d.default], () =>
          d.default.getCurrentUser()
        );
        return null == n ||
          t.ownerId !== n.id ||
          e.id === n.id ||
          (null == t ? void 0 : t.isBroadcastChannel())
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: f.default.Messages.CHANGE_DM_OWNER,
              action: () => {
                var l;
                return (
                  (l = n),
                  void (0, u.openModal)(n =>
                    (0, i.jsxs)(u.ConfirmModal, {
                      bodyClassName: c.confirmModal,
                      header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: f.default.Messages.CONFIRM,
                      cancelText: f.default.Messages.CANCEL,
                      onConfirm: () => a.default.setDMOwner(t.id, e.id),
                      ...n,
                      children: [
                        (0, i.jsx)(h, {
                          color: r.default.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: c.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: c.from,
                              children: (0, i.jsx)(o.default, {
                                user: l,
                                size: u.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: c.to,
                              children: (0, i.jsx)(o.default, {
                                user: e,
                                size: u.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(u.Text, {
                          variant: "text-md/normal",
                          children:
                            f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                              usernameHook: (t, n) =>
                                (0, i.jsx)(
                                  s.default,
                                  {
                                    usernameIcon: (0, i.jsx)(u.Avatar, {
                                      className: c.avatarIcon,
                                      src: e.getAvatarURL(void 0, 16),
                                      size: u.AvatarSizes.SIZE_16,
                                      "aria-hidden": !0,
                                    }),
                                    className: c.discordTag,
                                    usernameClass: c.username,
                                    discriminatorClass: c.discriminator,
                                    user: e,
                                  },
                                  n
                                ),
                            }),
                        }),
                      ],
                    })
                  )
                );
              },
            });
      }
    },
    383161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          mentionUser: function () {
            return m;
          },
          default: function () {
            return g;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        r = n("77078"),
        u = n("352674"),
        a = n("42203"),
        s = n("957255"),
        o = n("18494"),
        d = n("659500"),
        f = n("158998"),
        c = n("49111"),
        h = n("782340");
      function m(e, t) {
        let { id: n } = e,
          i = "@".concat(f.default.getUserTag(e, { decoration: "never" }));
        d.ComponentDispatch.dispatchToLastSubscribed(
          c.ComponentActions.INSERT_TEXT,
          { plainText: i, rawText: "<@".concat(n, ">") }
        ),
          null != t && u.default.startTyping(t);
      }
      function g(e, t, n) {
        let [u, d] = (0, l.useStateFromStoresArray)(
            [o.default, a.default, s.default],
            () => {
              let e = o.default.getChannelId(t),
                n = a.default.getChannel(e),
                i =
                  null != n &&
                  (n.isMultiUserDM() ||
                    s.default.can(c.Permissions.SEND_MESSAGES, n));
              return [e, i];
            },
            [t]
          ),
          f = n === c.AppContext.POPOUT;
        return !d || f
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "mention",
              label: h.default.Messages.MENTION,
              action: function () {
                m(e, u);
              },
            });
      }
    },
    421602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("450911"),
        u = n("54239"),
        a = n("271938"),
        s = n("49111"),
        o = n("782340");
      function d(e, t) {
        let n = a.default.getId(),
          d = t === s.AppContext.POPOUT;
        return n === e || d
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "message-user",
              label: o.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                r.default.openPrivateChannel(e), (0, u.popLayer)();
              },
            });
      }
    },
    432487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        r = n("77078"),
        u = n("450911"),
        a = n("42203"),
        s = n("697218"),
        o = n("782340");
      function d(e, t) {
        let n = (0, l.useStateFromStores)(
            [s.default],
            () => s.default.getCurrentUser(),
            []
          ),
          d = (0, l.useStateFromStores)(
            [a.default],
            () => a.default.getChannel(t),
            [t]
          );
        return null == d || d.isOwner(e) || null == n || !d.isOwner(n.id)
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "remove",
              label: o.default.Messages.REMOVE_FROM_GROUP,
              action: () => u.default.removeRecipient(t, e),
              color: "danger",
            });
      }
    },
    151200: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        r = n("77078"),
        u = n("561288"),
        a = n("191145"),
        s = n("271938"),
        o = n("99795"),
        d = n("782340");
      function f(e, t) {
        let n = (0, l.useStateFromStores)(
            [s.default],
            () => s.default.getId() === e,
            [e]
          ),
          [f, c] = (0, l.useStateFromStoresArray)(
            [a.default],
            () => [
              a.default.getParticipants(t),
              a.default.getParticipant(t, e),
            ],
            [t, e]
          );
        return n || 0 === f.length
          ? null
          : null == c
            ? (0, i.jsx)(r.MenuItem, {
                id: "ring",
                label: d.default.Messages.RING,
                action: () => u.default.ring(t, [e]),
              })
            : c.type === o.ParticipantTypes.USER && c.ringing
              ? (0, i.jsx)(r.MenuItem, {
                  id: "stop-ringing",
                  label: d.default.Messages.STOP_RINGING,
                  action: () => u.default.stopRinging(t, [e]),
                })
              : null;
      }
    },
    811907: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var i,
        l = n("906932"),
        r = n("315102"),
        u = n("719923"),
        a = n("646718");
      function s(e, t) {
        return null == t || "" === t ? e : t;
      }
      i = class {
        get premiumSince() {
          return this._userProfile.premiumSince;
        }
        get premiumGuildSince() {
          return this._userProfile.premiumGuildSince;
        }
        get premiumType() {
          return this._userProfile.premiumType;
        }
        get primaryColor() {
          var e, t;
          return null !==
            (t =
              null === (e = this.themeColors) || void 0 === e
                ? void 0
                : e[0]) && void 0 !== t
            ? t
            : this.accentColor;
        }
        get canUsePremiumProfileCustomization() {
          return u.default.isPremiumAtLeast(
            this.premiumType,
            a.PremiumTypes.TIER_2
          );
        }
        get canEditThemes() {
          return this.canUsePremiumProfileCustomization;
        }
        get application() {
          return this._userProfile.application;
        }
        hasThemeColors() {
          var e, t;
          return (
            (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) !=
              null ||
            (null === (t = this.themeColors) || void 0 === t ? void 0 : t[1]) !=
              null
          );
        }
        hasPremiumCustomization() {
          return (
            this.isUsingGuildMemberBanner() ||
            this.isUsingGuildMemberBio() ||
            null != this.banner ||
            this.hasThemeColors() ||
            null != this.popoutAnimationParticleType
          );
        }
        hasFullProfile() {
          return (
            void 0 !== this._userProfile &&
            (null == this.guildId || void 0 !== this._guildMemberProfile)
          );
        }
        isUsingGuildMemberBanner() {
          var e;
          return (
            (null === (e = this._guildMemberProfile) || void 0 === e
              ? void 0
              : e.banner) != null
          );
        }
        isUsingGuildMemberBio() {
          var e, t;
          return (
            (null === (e = this._guildMemberProfile) || void 0 === e
              ? void 0
              : e.bio) != null &&
            (null === (t = this._guildMemberProfile) || void 0 === t
              ? void 0
              : t.bio) !== ""
          );
        }
        isUsingGuildMemberPronouns() {
          var e, t;
          return (
            (null === (e = this._guildMemberProfile) || void 0 === e
              ? void 0
              : e.pronouns) != null &&
            (null === (t = this._guildMemberProfile) || void 0 === t
              ? void 0
              : t.pronouns) !== ""
          );
        }
        getBannerURL(e) {
          let { canAnimate: t, size: n } = e;
          return null != this.guildId && this.isUsingGuildMemberBanner()
            ? (0, r.getGuildMemberBannerURL)({
                id: this.userId,
                guildId: this.guildId,
                banner: this.banner,
                canAnimate: t,
                size: n,
              })
            : (0, r.getUserBannerURL)({
                id: this.userId,
                banner: this.banner,
                canAnimate: t,
                size: n,
              });
        }
        getPreviewBanner(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 480;
          return null != e
            ? e
            : null === e
              ? this.isUsingGuildMemberBanner()
                ? (0, r.getUserBannerURL)({
                    id: this.userId,
                    banner: this._userProfile.banner,
                    canAnimate: t,
                    size: n,
                  })
                : null
              : this.getBannerURL({ canAnimate: t, size: 480 });
        }
        getPreviewBio(e) {
          var t;
          return (0, l.getProfilePreviewField)(
            e,
            null === (t = this._guildMemberProfile) || void 0 === t
              ? void 0
              : t.bio,
            this._userProfile.bio,
            null != this.guildId
          );
        }
        getPreviewThemeColors(e) {
          return (null == e ? void 0 : e[0]) != null &&
            (null == e ? void 0 : e[1]) != null
            ? e
            : void 0 !== e
              ? this._userProfile.themeColors
              : this.themeColors;
        }
        getBadges() {
          var e, t, n;
          return [
            ...(null !== (t = this._userProfile.badges) && void 0 !== t
              ? t
              : []),
            ...(null !==
              (n =
                null === (e = this._guildMemberProfile) || void 0 === e
                  ? void 0
                  : e.badges) && void 0 !== n
              ? n
              : []),
          ];
        }
        getLegacyUsername() {
          return this._userProfile.legacyUsername;
        }
        constructor(e, t) {
          var n, i, l, r;
          (this.userId = e.userId),
            (this.guildId = null == t ? void 0 : t.guildId),
            (this.banner =
              null !== (n = null == t ? void 0 : t.banner) && void 0 !== n
                ? n
                : e.banner),
            (this.bio = s(e.bio, null == t ? void 0 : t.bio)),
            (this.pronouns = s(e.pronouns, null == t ? void 0 : t.pronouns)),
            (this.accentColor = e.accentColor),
            (this.themeColors =
              null !== (i = null == t ? void 0 : t.themeColors) && void 0 !== i
                ? i
                : e.themeColors),
            (this.popoutAnimationParticleType =
              null !==
                (l = null == t ? void 0 : t.popoutAnimationParticleType) &&
              void 0 !== l
                ? l
                : e.popoutAnimationParticleType),
            (this.profileEffectId =
              null !== (r = null == t ? void 0 : t.profileEffectId) &&
              void 0 !== r
                ? r
                : e.profileEffectId),
            (this._userProfile = e),
            (this._guildMemberProfile = t);
        }
      };
    },
    506885: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("913144"),
        l = n("327037"),
        r = n("462274"),
        u = n("535013"),
        a = n("42203"),
        s = n("26989"),
        o = n("713135"),
        d = n("386714");
      async function f(e, t) {
        var n, f, c;
        let h,
          {
            withMutualGuilds: m = !1,
            withMutualFriendsCount: g = !1,
            friendToken: v,
            preloadUserBanner: p = !0,
            dispatchWait: M = !1,
            guildId: P,
            channelId: C,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
        if ("" === e) return;
        null != t && (0, r.maybeFetchColors)(t),
          null != P && !m && (m = !0),
          null != P &&
            (h =
              null !==
                (f =
                  null ===
                    (n = (0, u.getVisibleConnectionsRole)({
                      guildMember: s.default.getMember(P, e),
                      channel: a.default.getChannel(C),
                    })) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== f
                ? f
                : void 0);
        let b = o.default.getUserProfile(e),
          _ = o.default.getMutualGuilds(e),
          S = o.default.getMutualFriendsCount(e),
          I = o.default.isFetchingProfile(e),
          x =
            (null == b ? void 0 : b.profileFetchFailed) ||
            (!I && ((!Array.isArray(_) && m) || (null == S && g))),
          U = p ? d.default : void 0,
          T = !1;
        if (null != P) {
          let t = o.default.getGuildMemberProfile(e, P);
          T = null == t;
        }
        !(
          !x &&
          !T &&
          (I ||
            Date.now() -
              (null !== (c = null == b ? void 0 : b.lastFetched) && void 0 !== c
                ? c
                : 0) <
              6e4)
        ) &&
          (M
            ? await i.default.wait(() =>
                (0, l.fetchProfile)(
                  e,
                  {
                    withMutualGuilds: m,
                    withMutualFriendsCount: g,
                    friendToken: v,
                    guildId: P,
                    connectionsRoleId: h,
                  },
                  U
                )
              )
            : await (0, l.fetchProfile)(
                e,
                {
                  withMutualGuilds: m,
                  withMutualFriendsCount: g,
                  friendToken: v,
                  guildId: P,
                  connectionsRoleId: h,
                },
                U
              ));
      }
    },
    386714: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("845579"),
        l = n("217513");
      function r(e, t) {
        if ("undefined" == typeof Image) return;
        let n = (0, l.getDisplayProfile)(e.user.id, t);
        if (null == n) return;
        let r = i.GifAutoPlay.getSetting(),
          u = n.getBannerURL({ canAnimate: r, size: 480 });
        if (null == u) return;
        let a = new Image();
        a.src = u;
      }
    },
    217513: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
          getDisplayProfile: function () {
            return d;
          },
        }),
        n("222007");
      var i = n("446674"),
        l = n("697218"),
        r = n("117362"),
        u = n("811907"),
        a = n("713135");
      function s(e, t) {
        return (0, i.useStateFromStores)([l.default, a.default], () =>
          d(e, t, [l.default, a.default])
        );
      }
      let o = (0, r.cachedFunction)((e, t) => new u.default(e, t));
      function d(e, t) {
        let [n, i] =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [l.default, a.default],
          r = n.getUser(e),
          u = i.getUserProfile(e),
          s = i.getGuildMemberProfile(e, t);
        return null == r || null == u ? null : o(u, s);
      }
    },
  },
]);
//# sourceMappingURL=fcbce70c3f8b1405c821.js.map

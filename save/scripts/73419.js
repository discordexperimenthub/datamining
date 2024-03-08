(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73419"],
  {
    56585: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ffd15f0afc010d71a931.svg";
    },
    685073: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          loadInviteSuggestions: function () {
            return s;
          },
          searchInviteSuggestions: function () {
            return i;
          },
        }),
        n("222007");
      var l = n("913144"),
        a = n("777273");
      function s(e) {
        let {
          omitUserIds: t,
          guild: n,
          channel: s,
          applicationId: i,
          inviteTargetType: r,
        } = e;
        return (0, a.fetchUserAffinities)().then(() => {
          l.default.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: s,
            applicationId: i,
            inviteTargetType: r,
          });
        });
      }
      function i(e) {
        l.default.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    777273: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchUserAffinities: function () {
            return r;
          },
        });
      var l = n("872717"),
        a = n("913144"),
        s = n("843823"),
        i = n("49111");
      function r() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.default.needsRefresh()
          ? (a.default.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            l.default
              .get({
                url: i.Endpoints.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                e => {
                  let { body: t } = e;
                  a.default.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  a.default.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                }
              ))
          : Promise.resolve();
      }
    },
    733154: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("76527");
      n.es(l, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("782542");
      n.es(l, t);
    },
    197801: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("469062");
      n.es(l, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("618807");
      n.es(l, t);
    },
    390300: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("882039");
      n.es(l, t);
    },
    148387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InvitePropertiesType: function () {
            return a;
          },
          default: function () {
            return f;
          },
        });
      var l,
        a,
        s = n("450911"),
        i = n("819689"),
        r = n("605250"),
        u = n("42203"),
        o = n("718517"),
        d = n("231987");
      let c = 1 * o.default.Millis.SECOND + 10;
      ((l = a || (a = {}))[(l.GROUP_DM = 0)] = "GROUP_DM"),
        (l[(l.USER = 1)] = "USER"),
        (l[(l.CHANNEL = 2)] = "CHANNEL");
      class h extends d.default {
        _sendInvite(e, t, n, l, a) {
          i.default.sendInvite(e.id, t, n, l).then(
            () => a(null, !0),
            () => a(null, !1)
          );
        }
        drain(e, t) {
          let { location: n, suggested: l } = e;
          switch (e.type) {
            case 0:
            case 2:
              this._sendInvite(e.channel, e.inviteKey, n, l, t);
              break;
            case 1:
              s.default.ensurePrivateChannel(e.user.id).then(
                a => {
                  let s = u.default.getChannel(a);
                  null != s && this._sendInvite(s, e.inviteKey, n, l, t);
                },
                () => t(null, !1)
              );
          }
        }
        constructor() {
          super(new r.default("InviteQueue"), c);
        }
      }
      var f = new h();
    },
    843962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getChannelIconURL: function () {
            return r;
          },
        }),
        n("222007");
      var l = n("697218"),
        a = n("315102"),
        s = n("449008"),
        i = n("49111");
      function r(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
          n = arguments.length > 2 ? arguments[2] : void 0;
        switch (e.type) {
          case i.ChannelTypes.DM:
            let [r] = e.recipients
              .map(l.default.getUser)
              .filter(s.isNotNullish);
            if (null == r) return null;
            return r.getAvatarURL(void 0, t, n);
          case i.ChannelTypes.GROUP_DM:
            return a.default.getChannelIconURL({
              id: e.id,
              icon: e.icon,
              applicationId: e.getApplicationId(),
              size: t,
            });
        }
      }
    },
    659404: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CommunityEndlessInvitesExperiment: function () {
            return a;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "guild",
        id: "2023-04_community_endless_invites",
        label: "Community Endless Invites",
        defaultConfig: { defaultInvitesToNeverExpire: !1 },
        treatments: [
          {
            id: 1,
            label: "Causes invites to never expire (by default) in the Guild",
            config: { defaultInvitesToNeverExpire: !0 },
          },
        ],
      });
    },
    262362: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("65597"),
        a = n("305961"),
        s = n("354023"),
        i = n("659404"),
        r = n("49111");
      function u(e) {
        let { guildId: t } = e,
          n = i.CommunityEndlessInvitesExperiment.useExperiment({
            guildId: null != t ? t : r.EMPTY_STRING_SNOWFLAKE_ID,
            location: "6798be_2",
          }),
          u = (0, l.default)([a.default], () => a.default.getGuild(t));
        return (
          null != t &&
          (function (e) {
            var t;
            let { guild: n, experimentConfig: l } = e,
              { defaultInvitesToNeverExpire: a } =
                null != l
                  ? l
                  : i.CommunityEndlessInvitesExperiment.getCurrentConfig({
                      guildId:
                        null !== (t = null == n ? void 0 : n.id) && void 0 !== t
                          ? t
                          : r.EMPTY_STRING_SNOWFLAKE_ID,
                      location: "6798be_1",
                    });
            if (
              (null == n ? void 0 : n.hasFeature(r.GuildFeatures.HUB)) === !0 ||
              ((null == n
                ? void 0
                : n.hasFeature(r.GuildFeatures.COMMUNITY)) === !0 &&
                a)
            )
              return s.default.INVITE_OPTIONS_FOREVER.value;
          })({ guild: u, experimentConfig: n })
        );
      }
    },
    385042: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("884691"),
        a = n("69927"),
        s = n("773336"),
        i = n("782340");
      function r() {
        return (
          l.useEffect(() => {
            !s.isPlatformEmbedded &&
              (0, a.flashPageTitle)({
                messages: [
                  i.default.Messages.GO_LIVE_HEY,
                  i.default.Messages.GO_LIVE_LOOK,
                  i.default.Messages.GO_LIVE_LISTEN,
                ],
                interval: 600,
                count: 20,
                onlyWhenBlurred: !0,
              });
          }, []),
          null
        );
      }
    },
    87241: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuestVoiceInvitesExperiment: function () {
            return a;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "guild",
        id: "2023-02_guest_voice_invites",
        label: "Guest Voice Invites",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Allow creation of guest voice invites",
            config: { enabled: !0 },
          },
        ],
      });
    },
    155996: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("884691"),
        a = n("298386"),
        s = n("65597"),
        i = n("656038"),
        r = n("42203"),
        u = n("923959"),
        o = n("449008");
      function d(e) {
        let t = (0, s.useStateFromStoresArray)([u.default], () =>
            u.default.getVocalChannelIds(e)
          ),
          n = (0, s.useStateFromStoresArray)(
            [r.default],
            () => t.map(e => r.default.getChannel(e)).filter(o.isNotNullish),
            [t]
          ),
          d = l.useMemo(
            () =>
              n.filter(
                e => !(0, i.default)(e) && e.type === a.ChannelTypes.GUILD_VOICE
              ),
            [n]
          );
        return d;
      }
    },
    41594: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChannelItemIcon: function () {
            return V;
          },
          default: function () {
            return O;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("974667"),
        u = n("617258"),
        o = n("446674"),
        d = n("77078"),
        c = n("843962"),
        h = n("679653"),
        f = n("419830"),
        I = n("565298"),
        g = n("305961"),
        E = n("824563"),
        v = n("191542"),
        T = n("697218"),
        m = n("37785"),
        p = n("98292"),
        _ = n("587974"),
        N = n("50885"),
        C = n("49111"),
        S = n("133335"),
        x = n("39776");
      let M = {
        SELECTED: x.modeSelected,
        CONNECTED: x.modeConnected,
        UNREAD_IMPORTANT: x.modeUnreadImportant,
        UNREAD_LESS_IMPORTANT: x.modeUnreadLessImportant,
        MUTED: x.modeMuted,
        LOCKED: x.modeLocked,
      };
      function A(e) {
        e.preventDefault(), e.stopPropagation();
      }
      let y = N.default.getEnableHardwareAcceleration()
        ? d.AnimatedAvatar
        : d.Avatar;
      function R(e) {
        let { channel: t } = e;
        return (0, l.jsx)(y, {
          src: (0, c.getChannelIconURL)(t),
          "aria-hidden": !0,
          size: d.AvatarSizes.SIZE_20,
        });
      }
      function L(e) {
        let { channel: t } = e,
          n = (0, o.useStateFromStores)([T.default], () =>
            T.default.getUser(null == t ? void 0 : t.recipients[0])
          ),
          a = (0, o.useStateFromStores)(
            [v.default],
            () =>
              !(null == n || null == t || t.isMultiUserDM()) &&
              null !=
                v.default.getTypingUsers(null == t ? void 0 : t.id)[
                  null == n ? void 0 : n.id
                ]
          ),
          { status: s, isMobile: i } = (0, o.useStateFromStoresObject)(
            [E.default],
            () =>
              null == n || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1 }
                : {
                    status: E.default.getStatus(n.id),
                    isMobile: E.default.isMobileOnline(n.id),
                  }
          );
        return (0, l.jsx)(y, {
          size: d.AvatarSizes.SIZE_20,
          src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
          status: s,
          isMobile: i,
          isTyping: a,
          "aria-label": null == n ? void 0 : n.username,
          statusTooltip: !0,
        });
      }
      let j = [13, 11, 10, 10, 10, 10, 10],
        V = e => {
          var t;
          let {
              className: n,
              channel: a,
              locked: s,
              hasActiveThreads: r,
              withGuildIcon: c,
            } = e,
            h = (0, o.useStateFromStores)(
              [g.default],
              () => g.default.getGuild(a.guild_id),
              [a.guild_id]
            ),
            I = c ? (null == h ? void 0 : h.getIconURL(48)) : null,
            E = null != I,
            v = (function (e, t, n) {
              switch (e.type) {
                case C.ChannelTypes.DM:
                  return function () {
                    return (0, l.jsx)(L, { channel: e });
                  };
                case C.ChannelTypes.GROUP_DM:
                  return function () {
                    return (0, l.jsx)(R, { channel: e });
                  };
                default:
                  return (0, f.getChannelIconComponent)(e, t, n);
              }
            })(a, h, { locked: s, hasActiveThreads: r });
          if (null == v) return null;
          let T = E
              ? null == h
                ? void 0
                : h.name
              : (0, f.getChannelIconTooltipText)(a, h, s, r),
            m =
              E && null != h
                ? "".concat(h.name, " - ").concat(T, " icon")
                : "".concat(T, " icon"),
            p = (0, u.getAcronym)(
              null !== (t = null == h ? void 0 : h.toString()) && void 0 !== t
                ? t
                : null
            ),
            N =
              a.type === C.ChannelTypes.DM ||
              a.type === C.ChannelTypes.GROUP_DM;
          return (0, l.jsx)(d.Tooltip, {
            text: T,
            delay: 500,
            children: e => {
              var t;
              return (0, l.jsxs)("div", {
                ...e,
                role: "img",
                "aria-label": m,
                className: i(x.iconContainer, {
                  [x.iconContainerWithGuildIcon]: E,
                }),
                children: [
                  E &&
                    (0, l.jsx)(_.default, {
                      mask: _.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
                      children: (0, l.jsx)("img", {
                        alt: "",
                        src: I,
                        className: x.channelGuildIcon,
                      }),
                    }),
                  !E &&
                    c &&
                    !N &&
                    (0, l.jsx)(_.default, {
                      mask: _.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
                      children: (0, l.jsx)("div", {
                        className: i(x.channelGuildIcon, x.acronym),
                        style: {
                          fontSize:
                            (t = p).length - 1 > j.length
                              ? j[j.length - 1]
                              : j[t.length - 1],
                        },
                        children: p,
                      }),
                    }),
                  (0, l.jsx)(v, {
                    className: i(x.icon, { [x.iconWithGuildIcon]: c }, n),
                  }),
                ],
              });
            },
          });
        };
      function O(e) {
        var t;
        let {
            channel: n,
            name: s,
            muted: u,
            selected: o,
            connected: c,
            unread: f,
            locked: g,
            hasActiveThreads: E,
            onClick: v,
            onMouseDown: T,
            onMouseUp: _,
            onContextMenu: N,
            connectDragPreview: y,
            className: R,
            iconClassName: L,
            subtitle: j,
            subtitleColor: O,
            channel: { type: D },
            onMouseEnter: w,
            onMouseLeave: U,
            "aria-label": G,
            children: P,
            guild: F,
            channelTypeOverride: H,
            forceInteractable: b,
            mentionCount: B,
            resolvedUnreadSetting: k,
            isFavoriteSuggestion: K,
            withGuildIcon: W,
          } = e,
          Y = k === S.UnreadSetting.ALL_MESSAGES || (null != B && B > 0),
          { role: Z, ...z } = (0, r.useListItem)(n.id),
          X = a.useRef(null),
          q = a.useRef(null),
          Q = (0, I.default)(n),
          J = C.Routes.CHANNEL(Q, n.id),
          $ = (0, h.default)(n),
          ee = n.isGuildVocal(),
          et = (0, l.jsx)("div", {
            className: i({ [x.favoritesSuggestion]: K }),
            children: (0, l.jsxs)(m.default, {
              role: ee && !c ? "button" : "link",
              href: ee ? void 0 : J,
              target: "_blank",
              ref: X,
              className: x.link,
              onClick: () => (null == v ? void 0 : v(n)),
              ...z,
              "aria-label": G,
              focusProps: { enabled: !1 },
              children: [
                (0, l.jsxs)("div", {
                  className: x.linkTop,
                  children: [
                    (0, l.jsx)(V, {
                      className: L,
                      channel: n,
                      guild: F,
                      hasActiveThreads: E,
                      locked: g,
                      withGuildIcon: W,
                    }),
                    (0, l.jsx)(p.default, {
                      className: i(x.name),
                      "aria-hidden": !0,
                      children: null == s ? $ : s,
                    }),
                    a.Children.count(P) > 0
                      ? (0, l.jsx)("div", {
                          onClick: A,
                          className: x.children,
                          children: P,
                        })
                      : null,
                  ],
                }),
                null != j
                  ? (0, l.jsx)("div", {
                      className: i(x.linkBottom, { [x.withGuildIcon]: W }),
                      children: (0, l.jsx)(d.Text, {
                        color: null != O ? O : "text-muted",
                        variant: "text-xs/medium",
                        className: x.subtitle,
                        children: j,
                      }),
                    })
                  : null,
              ],
            }),
          });
        return (0, l.jsx)(d.FocusRing, {
          focusTarget: X,
          ringTarget: q,
          offset: { top: 2, bottom: 2, right: 4 },
          children: (0, l.jsxs)("div", {
            className: i(
              R,
              null != v || null != _ || null != T || b
                ? x.wrapper
                : x.notInteractive,
              (() => {
                if (o) return M.SELECTED;
                if (c) return M.CONNECTED;
                if (g) return M.LOCKED;
                if (u) return M.MUTED;
                if (f) return Y ? M.UNREAD_IMPORTANT : M.UNREAD_LESS_IMPORTANT;
                return null;
              })(),
              (function (e) {
                switch (e) {
                  case C.ChannelTypes.GUILD_STAGE_VOICE:
                  case C.ChannelTypes.GUILD_VOICE:
                    return x.typeVoice;
                  case C.ChannelTypes.ANNOUNCEMENT_THREAD:
                  case C.ChannelTypes.PUBLIC_THREAD:
                  case C.ChannelTypes.PRIVATE_THREAD:
                    return x.typeThread;
                  case C.ChannelTypes.GUILD_ANNOUNCEMENT:
                  case C.ChannelTypes.GUILD_TEXT:
                  case C.ChannelTypes.GUILD_STORE:
                  case C.ChannelTypes.GUILD_FORUM:
                  case C.ChannelTypes.GUILD_MEDIA:
                  default:
                    return x.typeDefault;
                }
              })(null != H ? H : D)
            ),
            onMouseUp: e => (null == _ ? void 0 : _(e, n)),
            onMouseDown: e => (null == T ? void 0 : T(e, n)),
            onContextMenu: e => (null == N ? void 0 : N(e, n)),
            onMouseEnter: w,
            onMouseLeave: U,
            children: [
              u || !f || (o && !ee)
                ? null
                : (0, l.jsx)("div", {
                    className: i(x.unread, Y ? x.unreadImportant : void 0),
                  }),
              null !== (t = null == y ? void 0 : y(et)) && void 0 !== t
                ? t
                : et,
            ],
          }),
        });
      }
    },
    512027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l = (0, n("862205").createExperiment)({
        kind: "guild",
        id: "2022-11_default_to_server_vanity_v2",
        label: "Default To Server Vanity v2",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    234919: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l = (0, n("862205").createExperiment)({
        kind: "guild",
        id: "2022-05_vanity_url_target",
        label: "Vanity URL Targeting",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    310688: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eg;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("627445"),
        u = n.n(r),
        o = n("917351"),
        d = n.n(o),
        c = n("759843"),
        h = n("498574"),
        f = n("446674"),
        I = n("669491"),
        g = n("77078"),
        E = n("970728"),
        v = n("685073"),
        T = n("84339"),
        m = n("812204"),
        p = n("685665"),
        _ = n("442939"),
        N = n("656038"),
        C = n("419830"),
        S = n("262362"),
        x = n("582415"),
        M = n("385042"),
        A = n("87241"),
        y = n("155996"),
        R = n("834052"),
        L = n("373469"),
        j = n("19766"),
        V = n("42203"),
        O = n("923959"),
        D = n("330154"),
        w = n("705955"),
        U = n("957255"),
        G = n("824563"),
        P = n("18494"),
        F = n("697218"),
        H = n("316133"),
        b = n("941886"),
        B = n("145131"),
        k = n("810567"),
        K = n("474571"),
        W = n("423487"),
        Y = n("599110"),
        Z = n("568734"),
        z = n("354023"),
        X = n("9294"),
        q = n("512027"),
        Q = n("234919"),
        J = n("52393"),
        $ = n("216463"),
        ee = n("474592"),
        et = n("652453"),
        en = n("470259"),
        el = n("91366"),
        ea = n("49111"),
        es = n("724210"),
        ei = n("782340"),
        er = n("696862"),
        eu = n("890957"),
        eo = n("633827"),
        ed = n("56585");
      let {
        INVITE_OPTIONS_FOREVER: ec,
        INVITE_OPTIONS_7_DAYS: eh,
        INVITE_OPTIONS_UNLIMITED: ef,
      } = z.default;
      class eI extends a.PureComponent {
        componentDidMount() {
          let {
              inviteChannel: e,
              code: t,
              guild: n,
              source: l,
              canCreateInvites: a,
              analyticsLocation: s,
              streamUserId: i,
              targetType: r,
              targetUserId: u,
              application: o,
              initialCounts: d,
              rows: c,
              showFriends: h,
              modalState: f,
              setModalState: I,
            } = this.props,
            { maxAge: g, maxUses: v, temporary: T } = f;
          if (a) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            I({ networkError: void 0 }),
              E.default
                .createInvite(
                  n,
                  {
                    validate: null != t ? t : null,
                    max_age: g,
                    max_uses: v,
                    target_user_id: u,
                    target_type: r,
                    target_application_id: null == o ? void 0 : o.id,
                    temporary: T,
                  },
                  l
                )
                .catch(e => I({ networkError: e }));
          }
          if (
            (h &&
              Y.default.track(ea.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
                location: l,
                num_suggestions: c.length,
                num_friends: d.numFriends,
                num_dms: d.numDms,
                num_group_dms: d.numGroupDms,
                guild_id: n.id,
              }),
            Q.default.trackExposure({
              guildId: null == n ? void 0 : n.id,
              location: "acc417_1",
            }),
            null != i)
          ) {
            let e = L.default.getStreamForUser(i, n.id),
              t = (0, x.getStreamerApplication)(e, G.default);
            Y.default.track(ea.AnalyticEvents.OPEN_MODAL, {
              type: "Send Stream Invite",
              source: l,
              location: s,
              other_user_id: i,
              application_id: null != t ? t.id : null,
              application_name: null != t ? t.name : null,
              game_id: null != t ? t.id : null,
            });
          } else
            (null == o ? void 0 : o.id) != null ||
              Y.default.track(ea.AnalyticEvents.OPEN_MODAL, {
                type: "Instant Invite Modal",
                source: l,
                location: s,
              });
        }
        componentWillUnmount() {
          let {
            inviteChannel: e,
            inviteFlags: t,
            setInviteFlags: n,
          } = this.props;
          (0, Z.hasFlag)(t, h.GuildInviteFlags.IS_GUEST_INVITE) &&
            null != e &&
            (n((0, Z.removeFlag)(t, h.GuildInviteFlags.IS_GUEST_INVITE)),
            E.default.clearInviteFromStore(e.id));
        }
        getInviteKey() {
          let {
              code: e,
              vanityURLCode: t,
              guildScheduledEvent: n,
              modalState: l,
            } = this.props,
            { showVanityURL: a } = l,
            s = a ? t : null != e ? e : t;
          return null == s
            ? s
            : (0, X.generateInviteKeyFromExtraData)({
                baseCode: s,
                guildScheduledEventId: null == n ? void 0 : n.id,
              });
        }
        renderChannelWarning() {
          let { inviteChannel: e } = this.props;
          return (0, N.default)(e)
            ? (0, l.jsxs)("div", {
                className: er.warningContainer,
                children: [
                  (0, l.jsx)(W.default, {
                    className: er.warningIcon,
                    color: I.default.unsafe_rawColors.YELLOW_300.css,
                    width: 12,
                  }),
                  (0, l.jsx)(g.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      ei.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING,
                  }),
                ],
              })
            : null;
        }
        renderHeader() {
          let e;
          let {
              guild: t,
              showFriends: n,
              guildScheduledEvent: a,
              streamUserId: s,
              application: r,
              welcomeToServer: u,
              inviteChannel: o,
              modalState: d,
              handleDone: c,
            } = this.props,
            { query: h } = d,
            f = null,
            I = null;
          if (
            ((e = u
              ? null
              : null != s
                ? ei.default.Messages.INVITE_STREAM_HEADER
                : null != r
                  ? ei.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format(
                      { applicationName: r.name }
                    )
                  : null != a
                    ? ei.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE
                    : (null == o ? void 0 : o.isGuildStageVoice())
                      ? ei.default.Messages
                          .STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER
                      : ei.default.Messages.INVITE_TO_SERVER_NAME.format({
                          name: t.toString(),
                        })),
            null != o)
          ) {
            let e = (0, C.getChannelIconComponent)(o, t);
            null != e &&
              (I = (0, l.jsxs)("div", {
                className: er.headerChannelContainer,
                children: [
                  (0, l.jsx)(e, { className: er.channelIcon }),
                  (0, l.jsx)(g.Text, {
                    color: "interactive-normal",
                    variant: "text-md/normal",
                    children: o.name,
                  }),
                ],
              }));
          }
          return (
            (f = t.hasFeature(ea.GuildFeatures.HUB)
              ? (0, l.jsxs)("div", {
                  className: er.hubHeader,
                  children: [
                    (0, l.jsx)(g.Heading, {
                      className: i(
                        er.hubInviteTitle,
                        er.headerCloseButtonSpacing
                      ),
                      id: this._headerId,
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: ei.default.Messages.HUB_INVITE_HEADER,
                    }),
                    (0, l.jsx)(g.Text, {
                      color: "header-secondary",
                      variant: "text-md/normal",
                      children: ei.default.Messages.HUB_INVITE_SUBHEADER,
                    }),
                    n &&
                      (0, l.jsx)(k.default, {
                        query: h,
                        className: er.hubFriendSearch,
                        onChange: this.handleQueryChange,
                        placeholder:
                          ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                        "aria-label":
                          ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                  ],
                })
              : n
                ? (0, l.jsxs)("div", {
                    className: er.header,
                    children: [
                      (0, l.jsx)("div", {
                        className: er.headerTopRow,
                        children: (0, l.jsx)(g.FormTitle, {
                          id: this._headerId,
                          tag: "h2",
                          className: i(
                            eu.marginBottom4,
                            er.headerCloseButtonSpacing,
                            er.headerText
                          ),
                          children: e,
                        }),
                      }),
                      I,
                      (0, l.jsx)(k.default, {
                        query: h,
                        className: er.searchBar,
                        onChange: this.handleQueryChange,
                        placeholder:
                          ei.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                      (0, l.jsx)("div", {
                        className: eu.marginTop8,
                        children: this.renderChannelWarning(),
                      }),
                    ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(g.FormTitle, {
                        id: this._headerId,
                        tag: "h2",
                        className: i(
                          eu.marginReset,
                          er.headerCloseButtonSpacing,
                          er.headerText
                        ),
                        children: e,
                      }),
                      I,
                      this.renderChannelWarning(),
                    ],
                  })),
            (0, l.jsxs)(g.ModalHeader, {
              separator: n,
              children: [
                (0, l.jsx)(g.ModalCloseButton, {
                  className: er.closeButton,
                  onClick: c,
                }),
                (0, l.jsxs)("div", {
                  className: er.headerContainer,
                  children: [
                    u &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("img", {
                            className: er.welcomeImage,
                            src: ed,
                            alt: "",
                          }),
                          (0, l.jsx)(g.H, {
                            className: er.welcomeHeading,
                            children:
                              ei.default.Messages.INVITE_WELCOME_HEADING,
                          }),
                          (0, l.jsx)("p", {
                            className: er.welcomeSubheading,
                            children:
                              ei.default.Messages.INVITE_WELCOME_SUBHEADING,
                          }),
                        ],
                      }),
                    null != s ? (0, l.jsx)(M.default, {}) : null,
                    f,
                  ],
                }),
              ],
            })
          );
        }
        renderFriendsBody() {
          let { rows: e } = this.props,
            t = this.getInviteKey();
          return 0 === e.length
            ? (0, l.jsx)(g.ModalContent, {
                className: i(er.inviteRowEmptyState),
                children: (0, l.jsx)(b.EmptyStateText, {
                  children: ei.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS,
                }),
              })
            : null == t
              ? (0, l.jsx)(g.ModalContent, {
                  className: i(er.inviteRowEmptyState),
                  children: (0, l.jsx)(b.EmptyStateText, {
                    children: ei.default.Messages.INVITE_FRIEND_MODAL_LOADING,
                  }),
                })
              : (0, l.jsx)(g.ModalListContent, {
                  className: er.scroller,
                  sections: [e.length],
                  renderSection: this.renderSection,
                  sectionHeight: 0,
                  renderRow: this.renderRow,
                  rowHeight: this.getRowHeight,
                  paddingBottom: 16,
                });
        }
        renderSection() {
          return null;
        }
        renderBody() {
          var e;
          let {
            guild: t,
            showFriends: n,
            streamUserId: a,
            application: s,
          } = this.props;
          if (n) return this.renderFriendsBody();
          let i = (0, J.default)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""
            ),
            r = F.default.getCurrentUser();
          u(null != r, "InstantInviteModal: user cannot be undefined");
          let o = t.isOwner(r),
            d = o
              ? ei.default.Messages.INVITE_SHARE_LINK_OWN_SERVER
              : ei.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
          return (
            null != a
              ? (d = ei.default.Messages.INVITE_SHARE_LINK_TO_STREAM)
              : null != s &&
                (d =
                  ei.default.Messages
                    .EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY),
            (0, l.jsx)(g.ModalContent, {
              className: er.noScroll,
              children: (0, l.jsxs)(B.default, {
                direction: B.default.Direction.VERTICAL,
                className: eu.marginBottom20,
                children: [
                  (0, l.jsx)(g.Text, {
                    className: er.subText,
                    variant: "text-sm/normal",
                    children: d,
                  }),
                  (0, l.jsx)(et.InviteCopyInput, {
                    ...this.props,
                    copyValue: i,
                  }),
                ],
              }),
            })
          );
        }
        renderFooter() {
          var e;
          let {
              noInvitesAvailable: t,
              showFriends: n,
              guildScheduledEvent: a,
              streamUserId: s,
              application: r,
              inviteChannel: u,
              modalState: o,
            } = this.props,
            { maxAge: d } = o,
            c = null,
            h = (0, J.default)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""
            );
          if (n) {
            let e = ei.default.Messages.INVITE_FOOTER_LINK_HEADER;
            null != s
              ? (e = ei.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER)
              : null != r
                ? (e =
                    ei.default.Messages
                      .EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER)
                : null != a
                  ? (e = ei.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER)
                  : (null == u ? void 0 : u.isGuildStageVoice()) &&
                    (e =
                      ei.default.Messages
                        .STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER),
              (c = (0, l.jsxs)(B.default, {
                direction: B.default.Direction.VERTICAL,
                className: er.content,
                children: [
                  (0, l.jsx)(g.FormTitle, {
                    tag: "h5",
                    className: eu.marginBottom8,
                    children: e,
                  }),
                  (0, l.jsx)(et.InviteCopyInput, {
                    ...this.props,
                    copyValue: h,
                  }),
                ],
              }));
          } else
            !t &&
              (c = (0, l.jsxs)(B.default, {
                justify: B.default.Justify.BETWEEN,
                className: eu.marginTop20,
                children: [
                  (0, l.jsx)(g.Checkbox, {
                    size: 18,
                    type: g.Checkbox.Types.INVERTED,
                    value: d === ec.value,
                    onChange: this.handleToggleMaxAge,
                    children: (0, l.jsx)(g.Text, {
                      className: er.checkBoxLabel,
                      variant: "text-sm/normal",
                      children:
                        ei.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE,
                    }),
                  }),
                  (0, l.jsx)(g.Tooltip, {
                    text: ei.default.Messages.LINK_SETTINGS,
                    children: e => {
                      let { onMouseEnter: t, onMouseLeave: n } = e;
                      return (0, l.jsx)(g.Clickable, {
                        onClick: this.openSettings,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        className: eo.cursorPointer,
                        children: (0, l.jsx)(K.default, {
                          width: 18,
                          height: 18,
                          color: I.default.unsafe_rawColors.PRIMARY_400.css,
                        }),
                      });
                    },
                  }),
                ],
              }));
          return null != c
            ? (0, l.jsx)(g.ModalFooter, {
                className: i({ [er.noPadding]: !n, [er.footer]: n }),
                children: c,
              })
            : null;
        }
        getModalContent() {
          let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
          switch (n) {
            case el.InstantInviteModalPages.MAIN:
              return (0, l.jsxs)(l.Fragment, {
                children: [
                  this.renderHeader(),
                  this.renderBody(),
                  this.renderFooter(),
                ],
              });
            case el.InstantInviteModalPages.SETTINGS:
              return (0, l.jsx)(ee.InstantInviteSettingsPage, {
                ...this.props,
                headerId: this._headerId,
                onSelectMaxAge: this.handleSelectMaxAge,
                onSelectMaxUses: this.handleSelectMaxUses,
                onToggleTemporary: this.handleToggleTemporary,
                handleDone: t,
              });
            case el.InstantInviteModalPages.GUEST:
              var a;
              let s = (0, J.default)(
                null !== (a = this.getInviteKey()) && void 0 !== a ? a : ""
              );
              return (0, l.jsx)($.InstantInviteGuestPage, {
                ...this.props,
                headerId: this._headerId,
                handleDone: t,
                copyValue: s,
              });
            default:
              return null;
          }
        }
        render() {
          let { transitionState: e, inviteChannel: t, guild: n } = this.props;
          return (0, l.jsx)("div", {
            className: this.props.showFriends ? er.wrapper : void 0,
            children: (0, l.jsx)(g.ModalRoot, {
              impression: {
                impressionName: c.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                  invite_channel_id: null == t ? void 0 : t.id,
                  invite_guild_id: n.id,
                },
              },
              "aria-labelledby": this._headerId,
              transitionState: e,
              className: er.modal,
              children: this.getModalContent(),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._scroller = null),
            (this._headerId = d.uniqueId()),
            (this.openSettings = () => {
              let { changePage: e } = this.props;
              e(el.InstantInviteModalPages.SETTINGS);
            }),
            (this.handleSelectMaxAge = e => {
              let { modalState: t, setModalState: n } = this.props;
              n({ maxAge: e, savedMaxAge: t.maxAge });
            }),
            (this.handleSelectMaxUses = e => {
              let { setModalState: t } = this.props;
              t({ maxUses: e });
            }),
            (this.handleToggleTemporary = e => {
              let { setModalState: t } = this.props;
              t({ temporary: e });
            }),
            (this.handleToggleGuest = e => {
              let { inviteFlags: t, setInviteFlags: n } = this.props;
              n((0, Z.setFlag)(t, h.GuildInviteFlags.IS_GUEST_INVITE, e));
            }),
            (this.handleQueryChange = e => {
              var t;
              let { setModalState: n } = this.props;
              null === (t = this._scroller) ||
                void 0 === t ||
                t.scrollTo({ to: 0 }),
                (0, v.searchInviteSuggestions)(e),
                n({ query: e });
            }),
            (this.handleClearSearch = () => {
              this.handleQueryChange("");
            }),
            (this.handleToggleMaxAge = () => {
              let { modalState: e, setModalState: t } = this.props,
                { maxAge: n, savedMaxAge: l } = e;
              t({ maxAge: l, savedMaxAge: n });
            }),
            (this.getRowHeight = (e, t) => {
              if (e > 0) return 0;
              let n = this.props.rows[t];
              switch (n.type) {
                case z.RowTypes.CHANNEL:
                case z.RowTypes.GROUP_DM:
                case z.RowTypes.DM:
                case z.RowTypes.FRIEND:
                  return en.INVITE_ROW_HEIGHT;
                default:
                  return 0;
              }
            }),
            (this.renderRow = e => {
              let { section: t, row: n } = e;
              if (t > 0) return null;
              let { analyticsLocation: a } = this.props,
                s = this.getInviteKey(),
                i = this.props.rows[n],
                r = "".concat(i.type, "-").concat(i.item.id);
              switch (i.type) {
                case z.RowTypes.GROUP_DM:
                case z.RowTypes.CHANNEL:
                  return (0, l.jsx)(
                    en.InviteRow,
                    { row: i, channel: i.item, inviteKey: s, location: a },
                    r
                  );
                case z.RowTypes.DM:
                case z.RowTypes.FRIEND:
                  return (0, l.jsx)(
                    en.InviteRow,
                    { row: i, user: i.item, inviteKey: s, location: a },
                    r
                  );
                default:
                  return null;
              }
            });
        }
      }
      eI.defaultProps = {
        analyticsLocation: ea.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
        defaultMaxAge: eh.value,
      };
      var eg = a.forwardRef(function (e, t) {
        var n, s, i, r;
        let {
            channel: u,
            guild: o,
            source: d,
            guildScheduledEvent: c,
            streamUserId: I,
            applicationId: g,
            transitionState: C,
            onClose: x,
            welcomeToServer: M,
            page: L,
            analyticsLocation: G,
          } = e,
          [F, b] = a.useState(
            L === el.InstantInviteModalPages.GUEST
              ? h.GuildInviteFlags.IS_GUEST_INVITE
              : 0
          ),
          { AnalyticsLocationProvider: B, analyticsLocations: k } = (0,
          p.default)(m.default.INSTANT_INVITE_MODAL),
          K = (0, f.useStateFromStores)([V.default, P.default], () => {
            let e = P.default.getVoiceChannelId();
            if (null == e) return null;
            let t = V.default.getChannel(e);
            return (null == t ? void 0 : t.guild_id) === o.id ? t : null;
          }),
          W =
            null != K &&
            !(0, N.default)(K) &&
            [
              ea.InstantInviteSources.GUILD_CONTEXT_MENU,
              ea.InstantInviteSources.GUILD_HEADER,
            ].includes(d),
          Y = (0, y.default)(o.id),
          z = (0, f.useStateFromStores)(
            [P.default, V.default, O.default],
            () => {
              if (
                W &&
                ((0, Z.hasFlag)(F, h.GuildInviteFlags.IS_GUEST_INVITE) ||
                  L === el.InstantInviteModalPages.GUEST)
              )
                return K;
              if (L === el.InstantInviteModalPages.GUEST)
                return 1 === Y.length ? Y[0] : void 0;
              if (null != u) return u;
              let e = P.default.getChannelId(),
                t =
                  null == e || (0, es.isStaticChannelRoute)(e)
                    ? void 0
                    : V.default.getChannel(e);
              return (
                (null == t ? void 0 : t.isThread()) &&
                  (t = V.default.getChannel(t.parent_id)),
                null != t
                  ? t
                  : O.default.getDefaultChannel(
                      o.id,
                      !0,
                      ea.Permissions.CREATE_INSTANT_INVITE
                    )
              );
            },
            [W, F, L, u, o.id, K, Y]
          ),
          [X, Q] = a.useState(null),
          J = null != X ? X : z,
          $ = null;
        null != I
          ? ($ = el.InviteTargetTypes.STREAM)
          : null != g && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
        let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
          et = (0, f.useStateFromStores)(
            [D.default],
            () => {
              let e = null != J ? J.id : null;
              return null == e
                ? null
                : D.default.getInvite(e, {
                    targetType: $,
                    targetUserId: I,
                    targetApplicationId: g,
                  });
            },
            [J, $, I, g]
          ),
          [en, ei, er, eu, eo] = (0, f.useStateFromStoresArray)(
            [w.default, H.default, j.default],
            () => {
              let e = null != J ? J.id : null;
              return [
                w.default.getInviteSuggestionRows(),
                w.default.getTotalSuggestionsCount() >= 1,
                w.default.getInitialCounts(),
                null != u && null != J
                  ? H.default.getVoiceStatesForChannel(J)
                  : null,
                null != ee ? j.default.getProps(ee, e) : null,
              ];
            },
            [J, u, ee]
          ),
          ed = (0, f.useStateFromStores)(
            [U.default],
            () =>
              null != J &&
              U.default.can(ea.Permissions.CREATE_INSTANT_INVITE, J),
            [J]
          ),
          eg = null === et || !ed,
          [eE] = a.useState(() => {
            let e = new Set();
            return (
              null != I && null != eu
                ? eu.forEach(t => {
                    let { user: n } = t;
                    e.add(n.id);
                  })
                : null != ee &&
                  null != eo &&
                  $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION &&
                  eo.rows.forEach(t => {
                    t.type === j.MemberListRowTypes.MEMBER && e.add(t.userId);
                  }),
              e
            );
          }),
          ev = null == u ? void 0 : u.id,
          eT = (0, f.useStateFromStores)(
            [R.default],
            () => R.default.getStageInstanceByChannel(ev),
            [ev]
          );
        a.useEffect(() => {
          (0, v.loadInviteSuggestions)({
            omitUserIds: eE,
            guild: o,
            channel: u,
            applicationId: g,
            inviteTargetType: $,
          }).catch(ea.NOOP_NULL);
        }, [eE, u, o, g, $]);
        let [em] = (0, _.default)(null != g ? [g] : []),
          ep = (0, S.default)({ guildId: ee }),
          e_ = null != et ? et.code : void 0,
          eN = null == et ? void 0 : et.maxAge,
          eC = null == et ? void 0 : et.maxUses,
          eS = null == et ? void 0 : et.temporary,
          ex = o.vanityURLCode,
          eM = null != ex && ex.length > 0,
          { enabled: eA } = q.default.useExperiment(
            {
              guildId:
                null !==
                  (i =
                    null !==
                      (s =
                        null !== (n = o.id) && void 0 !== n
                          ? n
                          : null == et
                            ? void 0
                            : et.guild.id) && void 0 !== s
                      ? s
                      : ee) && void 0 !== i
                  ? i
                  : ea.EMPTY_STRING_SNOWFLAKE_ID,
              location: "acc417_2",
            },
            { autoTrackExposure: eM }
          ),
          ey = eA && !(null == J ? void 0 : J.isGuildVocal()) && eM,
          eR = (null == J ? void 0 : J.type) === ea.ChannelTypes.GUILD_VOICE,
          eL = (0, N.default)(J);
        !ed &&
          (null == eT ? void 0 : eT.invite_code) != null &&
          (e_ = eT.invite_code);
        let [ej, eV] = a.useState({
            query: "",
            maxAge:
              null !== (r = null != eN ? eN : ep) && void 0 !== r
                ? r
                : eh.value,
            savedMaxAge:
              eN === ec.value ? (null != ep ? ep : eh.value) : ec.value,
            maxUses: null != eC && 0 !== eC ? eC : ef.value,
            temporary: null != eS && eS,
            networkError: void 0,
            showVanityURL: ey,
            currentPage: null != L ? L : el.InstantInviteModalPages.MAIN,
            lastPage: void 0,
          }),
          eO = a.useCallback(e => {
            eV(t => ({ ...t, ...e }));
          }, []),
          eD = a.useCallback(
            e => {
              eO({ currentPage: e, lastPage: ej.currentPage });
            },
            [ej.currentPage, eO]
          ),
          ew =
            (eR || W) &&
            L !== el.InstantInviteModalPages.GUEST &&
            !ey &&
            !eg &&
            !eL,
          { enabled: eU } = A.GuestVoiceInvitesExperiment.useExperiment(
            { guildId: null == o ? void 0 : o.id, location: "acc417_3" },
            { autoTrackExposure: ew }
          ),
          { maxAge: eG, maxUses: eP, temporary: eF, savedMaxAge: eH } = ej,
          eb = a.useCallback(() => {
            let { currentPage: e, lastPage: t } = ej;
            e === el.InstantInviteModalPages.SETTINGS && null != t
              ? eD(t)
              : x();
          }, [eD, ej, x]),
          eB = a.useCallback(() => {
            let e = null == J ? void 0 : J.id;
            0 === eP && 0 === eG && !eF && ey
              ? eO({ networkError: void 0, showVanityURL: !0 })
              : null != e &&
                (eO({ networkError: void 0, showVanityURL: !1 }),
                E.default
                  .createInvite(
                    e,
                    {
                      max_age: eG,
                      max_uses: eP,
                      target_type: $,
                      target_user_id: I,
                      target_application_id: null == em ? void 0 : em.id,
                      temporary: eF,
                      flags: F,
                    },
                    d
                  )
                  .catch(e => eO({ networkError: e, showVanityURL: ey }))),
              eG !== ec.value &&
                eH !== ec.value &&
                eO({ savedMaxAge: ec.value });
          }, [
            ey,
            J,
            d,
            null == em ? void 0 : em.id,
            $,
            I,
            eG,
            eP,
            eF,
            F,
            eO,
            eH,
          ]),
          ek = (0, T.default)(J),
          eK = (0, T.default)(F),
          eW = ek !== J,
          eY = eK !== F;
        return (
          a.useEffect(() => {
            (eW || eY) && eB();
          }, [eB, eW, eY]),
          (0, l.jsx)(B, {
            children: (0, l.jsx)(eI, {
              ref: t,
              canCreateInvites: ed,
              noInvitesAvailable: eg,
              inviteChannel: J,
              guild: o,
              guildScheduledEvent: c,
              streamUserId: I,
              vanityURLCode: ex,
              targetType: $,
              targetUserId: I,
              application: em,
              rows: en,
              showFriends: ei,
              initialCounts: er,
              code: e_,
              source: d,
              welcomeToServer: M,
              analyticsLocations: k,
              analyticsLocation: G,
              transitionState: C,
              onClose: x,
              canShowVanityURL: ey,
              isGuestInviteCreationToggleEnabled: eU && ew,
              shouldHideTemporaryInviteToggle:
                (eU && ew) || L === el.InstantInviteModalPages.GUEST,
              modalState: ej,
              setModalState: eO,
              changePage: eD,
              onGenerateNewLink: eB,
              inviteFlags: F,
              setInviteFlags: b,
              showGuestInviteToggleForCurrentVoiceChannel: W,
              setInviteChannel: Q,
              handleDone: eb,
            }),
          })
        );
      });
    },
    216463: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InstantInviteGuestPage: function () {
            return g;
          },
        }),
        n("808653");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("155996"),
        o = n("41594"),
        d = n("652453"),
        c = n("782340"),
        h = n("696862"),
        f = n("890957");
      let I = e => {
          let { guild: t, inviteChannel: n, setInviteChannel: s } = e,
            i = (0, u.default)(t.id),
            d = a.useMemo(
              () => i.reduce((e, t) => ({ ...e, [t.id]: t }), {}),
              [i]
            ),
            h = a.useMemo(
              () => Object.values(d).map(e => ({ value: e.id, label: e.name })),
              [d]
            );
          return (0, l.jsx)(r.SearchableSelect, {
            options: h,
            value: null == n ? void 0 : n.id,
            onChange: e => {
              s(d[e]);
            },
            placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
            renderOptionPrefix: e => {
              if (null == e) return null;
              let n = e.value,
                a = d[n];
              return null == a
                ? null
                : (0, l.jsx)(o.ChannelItemIcon, { channel: a, guild: t });
            },
          });
        },
        g = e => {
          let {
            handleDone: t,
            headerId: n,
            inviteChannel: a,
            copyValue: s,
          } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(r.ModalHeader, {
                children: [
                  (0, l.jsx)(r.ModalCloseButton, {
                    className: h.closeButton,
                    onClick: t,
                  }),
                  (0, l.jsx)("div", {
                    className: h.headerContainer,
                    children: (0, l.jsx)(r.FormTitle, {
                      id: n,
                      tag: "h2",
                      className: i(
                        f.marginReset,
                        h.headerCloseButtonSpacing,
                        h.headerText
                      ),
                      children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY,
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(r.ModalContent, {
                className: h.noScroll,
                children: (0, l.jsxs)("div", {
                  className: h.guestBody,
                  children: [
                    (0, l.jsx)(r.Text, {
                      tag: "div",
                      variant: "heading-sm/normal",
                      color: "header-secondary",
                      children: c.default.Messages.INVITE_A_GUEST_EXPLANATION,
                    }),
                    (0, l.jsx)(r.FormTitle, {
                      tag: "h5",
                      className: h.guestSelectChannelHeader,
                      children: c.default.Messages.INVITE_A_GUEST_STEP_1,
                    }),
                    (0, l.jsx)(I, { ...e }),
                    (0, l.jsx)(r.FormTitle, {
                      tag: "h5",
                      className: h.guestSendInviteLinkHeader,
                      children: c.default.Messages.INVITE_A_GUEST_STEP_2,
                    }),
                    (0, l.jsx)(d.InviteCopyInput, {
                      ...e,
                      copyValue: null == a ? "" : s,
                      disabled: null == a,
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    825691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("354023"),
        u = n("782340"),
        o = n("476057"),
        d = n("890957");
      let c = r.default.getMaxAgeOptions;
      function h(e) {
        let { temporary: t, shouldHide: n, onToggleTemporary: a } = e;
        return n
          ? (0, l.jsx)("div", { className: d.marginTop20 })
          : (0, l.jsx)(i.FormItem, {
              className: s(d.marginTop20, o.switch),
              children: (0, l.jsx)(i.FormSwitch, {
                value: t,
                onChange: e => a(e),
                note: u.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                hideBorder: !0,
                children: (0, l.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: u.default.Messages.GRANT_TEMPORARY_MEMBERSHIP,
                }),
              }),
            });
      }
      let f = r.default.getMaxUsesOptions;
      function I(e) {
        var t;
        let {
            shouldHideTemporaryInviteToggle: n,
            maxAge: a,
            maxUses: r,
            temporary: I,
            onGenerateNewLink: g,
            onToggleTemporary: E,
            onSelectMaxAge: v,
            onSelectMaxUses: T,
          } = e,
          m = c.find(e => e.value === a),
          p = f.find(e => e.value === r);
        return (0, l.jsx)("div", {
          className: o.settingsContent,
          children: (0, l.jsxs)("form", {
            onSubmit: g,
            children: [
              (0, l.jsx)(i.FormItem, {
                title: u.default.Messages.EXPIRE_AFTER,
                className: d.marginTop20,
                children: (0, l.jsx)(i.SingleSelect, {
                  value:
                    null !== (t = null == m ? void 0 : m.value) && void 0 !== t
                      ? t
                      : c[0].value,
                  options: c,
                  onChange: v,
                  maxVisibleItems: 8,
                }),
              }),
              (0, l.jsx)(i.FormItem, {
                title: u.default.Messages.MAX_NUMBER_OF_USES,
                className: s(d.marginTop20, d.marginBottom4),
                children: (0, l.jsx)(i.SingleSelect, {
                  value: null == p ? void 0 : p.value,
                  options: f,
                  onChange: T,
                }),
              }),
              (0, l.jsx)(h, {
                temporary: I,
                shouldHide: n,
                onToggleTemporary: E,
              }),
            ],
          }),
        });
      }
    },
    339485: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("819855"),
        i = n("77078"),
        r = n("782340");
      function u(e) {
        let { onConfirm: t, onDismiss: n, theme: u } = e;
        return (0, l.jsxs)(a.Fragment, {
          children: [
            (0, l.jsx)(i.Button, {
              onClick: t,
              children: r.default.Messages.GENERATE_A_NEW_LINK,
            }),
            (0, l.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: (0, s.isThemeLight)(u)
                ? i.Button.Colors.PRIMARY
                : i.Button.Colors.WHITE,
              onClick: n,
              children: r.default.Messages.CANCEL,
            }),
          ],
        });
      }
    },
    474592: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InstantInviteSettingsPage: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("841098"),
        u = n("825691"),
        o = n("339485"),
        d = n("782340"),
        c = n("696862"),
        h = n("890957");
      let f = e => {
        let {
            handleDone: t,
            headerId: n,
            modalState: a,
            shouldHideTemporaryInviteToggle: f,
            onGenerateNewLink: I,
            onToggleTemporary: g,
            onSelectMaxAge: E,
            onSelectMaxUses: v,
          } = e,
          T = (0, r.default)(),
          { maxAge: m, maxUses: p, temporary: _ } = a;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              children: [
                (0, l.jsx)(i.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: t,
                }),
                (0, l.jsx)("div", {
                  className: c.headerContainer,
                  children: (0, l.jsx)(i.FormTitle, {
                    id: n,
                    tag: "h2",
                    className: s(
                      h.marginReset,
                      c.headerCloseButtonSpacing,
                      c.headerText
                    ),
                    children: d.default.Messages.INVITE_SETTINGS_TITLE,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(u.default, {
              shouldHideTemporaryInviteToggle: f,
              maxAge: m,
              maxUses: p,
              temporary: _,
              onToggleTemporary: g,
              onSelectMaxAge: E,
              onSelectMaxUses: v,
              onGenerateNewLink: I,
            }),
            (0, l.jsx)(i.ModalFooter, {
              className: c.settingsFooter,
              children: (0, l.jsx)(o.default, {
                theme: T,
                onConfirm: () => {
                  I(), t();
                },
                onDismiss: t,
              }),
            }),
          ],
        });
      };
    },
    652453: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          RawInviteCopyInputConnected: function () {
            return x;
          },
          InviteCopyInput: function () {
            return M;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("498574"),
        u = n("446674"),
        o = n("862337"),
        d = n("77078"),
        c = n("162771"),
        h = n("102985"),
        f = n("599110"),
        I = n("306160"),
        g = n("568734"),
        E = n("354023"),
        v = n("865699"),
        T = n("91366"),
        m = n("49111"),
        p = n("782340"),
        _ = n("696862"),
        N = n("182893"),
        C = n("125047"),
        S = n("890957");
      let x = u.default.connectStores([h.default], () => ({
          hideValue: h.default.hideInstantInvites,
        }))(e => {
          let {
              value: t,
              autoFocus: n,
              hideValue: s,
              onCopy: r,
              disabled: u,
            } = e,
            [c, h] = a.useState(!1),
            [f, g] = a.useState(!1),
            E = a.useMemo(() => new o.DelayedCall(1e3, () => g(!1)), [g]);
          return (
            a.useEffect(
              () => () => {
                E.cancel();
              },
              [E]
            ),
            (0, l.jsxs)("div", {
              className: i(N.input, C.flexJustifyBetween, C.flexCenter, {
                [N.success]: f,
                [N.focused]: c,
              }),
              children: [
                (0, l.jsx)(d.TextInput, {
                  className: _.copyInput,
                  name: "invite",
                  value: s ? p.default.Messages.INSTANT_INVITE_HIDDEN : t,
                  editable: !1,
                  inputClassName: _.input,
                  autoFocus: n,
                  onFocus: () => (n ? h(!0) : null),
                  onBlur: () => (n ? h(!1) : null),
                  spellCheck: "false",
                  onClick: e => e.currentTarget.select(),
                  "aria-label": p.default.Messages.FORM_LABEL_INVITE_LINK,
                  disabled: u,
                }),
                I.SUPPORTS_COPY
                  ? (0, l.jsx)(d.Button, {
                      size: d.Button.Sizes.SMALL,
                      color: f ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                      className: _.copyButton,
                      onClick: () => {
                        g(!0), E.delay(), r(t);
                      },
                      disabled: u,
                      children: f
                        ? p.default.Messages.INVITE_COPIED
                        : p.default.Messages.COPY,
                    })
                  : null,
              ],
            })
          );
        }),
        M = e => {
          let {
              guild: t,
              noInvitesAvailable: n,
              showFriends: s,
              onClose: u,
              modalState: o,
              isGuestInviteCreationToggleEnabled: h,
              inviteFlags: N,
              setInviteFlags: C,
              showGuestInviteToggleForCurrentVoiceChannel: M,
              copyValue: A,
              changePage: y,
              inviteChannel: R,
              source: L,
              code: j,
              guildScheduledEvent: V,
              disabled: O,
            } = e,
            { maxAge: D, maxUses: w, networkError: U, showVanityURL: G } = o,
            P = a.useCallback(() => {
              (0, I.copy)(A),
                f.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
                  server: c.default.getGuildId(),
                  channel: null == R ? void 0 : R.id,
                  channel_type: null == R ? void 0 : R.type,
                  location: L,
                  code: j,
                  guild_scheduled_event_id: null == V ? void 0 : V.id,
                });
            }, [A, R, L, j, V]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(x, { value: A, autoFocus: s, onCopy: P, disabled: O }),
              h
                ? (0, l.jsx)("div", {
                    className: _.temporaryMembershipContainerBackground,
                    children: (0, l.jsx)(d.FormSwitch, {
                      className: _.temporaryMembershipContainer,
                      value: (0, g.hasFlag)(
                        N,
                        r.GuildInviteFlags.IS_GUEST_INVITE
                      ),
                      onChange: e =>
                        C(
                          (0, g.setFlag)(
                            N,
                            r.GuildInviteFlags.IS_GUEST_INVITE,
                            e
                          )
                        ),
                      note: p.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                      disabled: O,
                      hideBorder: !0,
                      children: M
                        ? p.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY
                        : p.default.Messages.GRANT_GUEST_MEMBERSHIP,
                    }),
                  })
                : null,
              n || G
                ? null
                : (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: i(S.marginTop8, _.footerText),
                    children: [
                      (0, E.maxAgeString)(D, w),
                      " ",
                      s
                        ? (0, l.jsx)(d.Anchor, {
                            onClick: () =>
                              y(T.InstantInviteModalPages.SETTINGS),
                            children: p.default.Messages.INVITE_EDIT_LINK,
                          })
                        : null,
                    ],
                  }),
              !n && s && G
                ? (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: i(S.marginTop8, _.footerText),
                    children: [
                      p.default.Messages.INVITE_VANITY_USED,
                      " ",
                      (0, l.jsx)(d.Anchor, {
                        onClick: () => y(T.InstantInviteModalPages.SETTINGS),
                        children: p.default.Messages.INVITE_EDIT_LINK,
                      }),
                    ],
                  })
                : null,
              null != U
                ? (0, l.jsx)(v.InviteErrorMessage, {
                    guild: t,
                    error: U,
                    onClose: u,
                  })
                : null,
            ],
          });
        };
    },
    865699: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InviteErrorMessage: function () {
            return c;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        i = n("592407"),
        r = n("957255"),
        u = n("49111"),
        o = n("782340"),
        d = n("696862");
      function c(e) {
        let { guild: t, error: n, onClose: c } = e,
          h = t.id,
          f = a.useCallback(() => {
            c(), i.default.open(h, u.GuildSettingsSections.INSTANT_INVITES);
          }, [h, c]),
          I = a.useCallback(
            e =>
              (0, l.jsx)(s.Clickable, {
                className: d.errorLink,
                onClick: f,
                children: (0, l.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [f]
          ),
          g = a.useCallback(
            e =>
              (0, l.jsx)(s.Anchor, {
                href: u.MarketingURLs.INVITES_HELP,
                target: "_blank",
                children: (0, l.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            []
          ),
          E =
            n.code !== u.AbortCodes.TOO_MANY_INVITES
              ? n.getAnyErrorMessage()
              : r.default.can(u.Permissions.MANAGE_GUILD, t)
                ? o.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: I,
                    inviteHelpHook: g,
                  })
                : o.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
        return (0, l.jsx)(s.Text, {
          className: d.errorMessage,
          variant: "text-xs/normal",
          color: "text-danger",
          children: E,
        });
      }
    },
    470259: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          INVITE_ROW_HEIGHT: function () {
            return p;
          },
          InviteRow: function () {
            return _;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("819855"),
        i = n("77078"),
        r = n("148387"),
        u = n("843962"),
        o = n("679653"),
        d = n("161778"),
        c = n("305961"),
        h = n("705955"),
        f = n("27618"),
        I = n("697218"),
        g = n("315102"),
        E = n("159885"),
        v = n("158998"),
        T = n("782340"),
        m = n("696862");
      let p = 44;
      class _ extends a.Component {
        shouldComponentUpdate(e, t) {
          return (
            this.state.sending !== t.sending ||
            this.state.invited !== t.invited ||
            this.state.hovered !== t.hovered ||
            this.props.user !== e.user ||
            this.props.channel !== e.channel
          );
        }
        renderUserOrChannel() {
          let e, t, n;
          let { user: a, channel: s } = this.props;
          if (null != a)
            (t = a.getAvatarURL(null == s ? void 0 : s.guild_id, 32)),
              (n = v.default.getName(a));
          else if (
            null != s &&
            ((t = (0, u.getChannelIconURL)(s)),
            (n = (0, o.computeChannelName)(s, I.default, f.default)),
            null == t && null != s.guild_id)
          ) {
            let n = c.default.getGuild(s.guild_id);
            null != n &&
              (null != n.icon
                ? (t = g.default.getGuildIconURL({
                    id: s.guild_id,
                    icon: n.icon,
                    size: 32,
                  }))
                : (e = (0, E.getAcronym)(n.name)));
          }
          if (null == t || null == n)
            return null != e
              ? (0, l.jsx)("div", {
                  className: m.acronym,
                  "aria-hidden": !0,
                  children: e,
                })
              : null;
          return (0, l.jsx)(i.Avatar, {
            src: t,
            "aria-label": n,
            size: i.AvatarSizes.SIZE_32,
            className: m.inviteRowAvatar,
          });
        }
        render() {
          let e;
          let { user: t, channel: n } = this.props,
            { sending: a, invited: r, hovered: u } = this.state;
          return (
            (e = r
              ? (0, l.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  size: i.Button.Sizes.SMALL,
                  disabled: !0,
                  color: (0, s.isThemeDark)(d.default.theme)
                    ? i.Button.Colors.WHITE
                    : i.Button.Colors.BRAND,
                  children: T.default.Messages.INVITE_FRIEND_MODAL_SENT,
                })
              : (0, l.jsx)(i.Button, {
                  color: i.Button.Colors.GREEN,
                  look: u ? i.Button.Looks.FILLED : i.Button.Looks.OUTLINED,
                  className: m.inviteRowButton,
                  size: i.Button.Sizes.SMALL,
                  submitting: a,
                  onClick: this.handleClickInvite,
                  children: T.default.Messages.INVITE_FRIEND_MODAL_INVITE,
                })),
            (0, l.jsxs)("div", {
              className: m.inviteRow,
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave,
              children: [
                (0, l.jsxs)("div", {
                  className: m.inviteRowInfo,
                  children: [
                    this.renderUserOrChannel(),
                    (0, l.jsxs)("div", {
                      className: m.inviteRowName,
                      children: [
                        v.default.getName(t),
                        null != n
                          ? (0, o.computeChannelName)(
                              n,
                              I.default,
                              f.default,
                              !0
                            )
                          : null,
                      ],
                    }),
                  ],
                }),
                e,
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            (this.state = { sending: !1, invited: !1, hovered: !1 }),
            (this.handleMouseEnter = () => {
              this.setState({ hovered: !0 });
            }),
            (this.handleMouseLeave = () => {
              this.setState({ hovered: !1 });
            }),
            (this.getSuggestedProps = () => {
              var e;
              let { row: t } = this.props;
              return null !==
                (e =
                  null != t ? h.default.getSelectedInviteMetadata(t) : null) &&
                void 0 !== e
                ? e
                : null;
            }),
            (this.handleClickInvite = () => {
              let {
                user: e,
                channel: t,
                inviteKey: n,
                location: l,
              } = this.props;
              null != n &&
                (null != t
                  ? (this.setState({ sending: !0 }),
                    r.default.enqueue(
                      {
                        type: r.InvitePropertiesType.GROUP_DM,
                        channel: t,
                        inviteKey: n,
                        location: l,
                        suggested: this.getSuggestedProps(),
                      },
                      e => {
                        this.setState({ sending: !1, invited: e });
                      }
                    ))
                  : null != e &&
                    (this.setState({ sending: !0 }),
                    r.default.enqueue(
                      {
                        type: r.InvitePropertiesType.USER,
                        user: e,
                        inviteKey: n,
                        location: l,
                        suggested: this.getSuggestedProps(),
                      },
                      e => {
                        this.setState({ sending: !1, invited: e });
                      }
                    )));
            });
        }
      }
    },
    705955: function (e, t, n) {
      "use strict";
      let l, a, s, i, r, u, o;
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        }),
        n("222007");
      var d = n("446674"),
        c = n("913144"),
        h = n("116460"),
        f = n("449008"),
        I = n("354023"),
        g = n("299039"),
        E = n("42203"),
        v = n("957255"),
        T = n("27618"),
        m = n("843823"),
        p = n("49111"),
        _ = n("91366");
      let N = new Set(),
        C = [],
        S = new Map();
      function x(e) {
        let t = new Set(),
          n =
            null == i || o === _.InviteTargetTypes.EMBEDDED_APPLICATION
              ? void 0
              : i.id,
          l = (0, I.getMostRecentDMedUser)(N, n);
        for (let e of (null != l && !T.default.isBlocked(l.id) && t.add(l.id),
        m.default.getUserAffinitiesUserIds()))
          t.add(e);
        let a = new Set();
        if (o === _.InviteTargetTypes.EMBEDDED_APPLICATION) {
          let e = h.default.getChannelHistory();
          e.map(e => E.default.getChannel(e))
            .filter(f.isNotNullish)
            .filter(e => e.type === p.ChannelTypes.GUILD_TEXT)
            .filter(e => v.default.can(p.Permissions.SEND_MESSAGES, e))
            .slice(0, 3)
            .forEach(e => a.add(e.id));
        }
        return (0, I.generateRowsForQuery)({
          query: e,
          omitUserIds: N,
          suggestedUserIds: t,
          maxRowsWithoutQuery: 100,
          omitGuildId: n,
          suggestedChannelIds: a,
          inviteTargetType: o,
        });
      }
      function M(e) {
        (C = e),
          (S = new Map()),
          e.forEach((e, t) => {
            S.set(e, { index: t });
          });
      }
      class A extends d.default.Store {
        initialize() {
          this.waitFor(T.default, m.default);
        }
        getInviteSuggestionRows() {
          return C;
        }
        getTotalSuggestionsCount() {
          return a;
        }
        getInitialCounts() {
          return l;
        }
        getSelectedInviteMetadata(e) {
          let t = S.get(e),
            n = m.default.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: C.length,
                numAffinityConnections: n.size,
                isFiltered: s,
              }
            : null;
        }
      }
      A.displayName = "InviteSuggestionsStore";
      var y = new A(c.default, {
        LOAD_INVITE_SUGGESTIONS: function (e) {
          let {
            omitUserIds: t,
            guild: n,
            channel: d,
            applicationId: c,
            inviteTargetType: h,
          } = e;
          (i = null != d ? n : null), (r = d), (u = c), (o = h);
          let f = T.default.getRelationships(),
            E = g.default
              .keys(f)
              .filter(e => f[e] === p.RelationshipTypes.BLOCKED),
            v = (0, I.getUsersAlreadyJoined)({
              channel: r,
              applicationId: u,
              inviteTargetType: h,
            });
          (N = new Set([...t, ...E, ...v])), (s = !1);
          let { rows: m, counts: _ } = x("");
          M(m), (l = _), (a = C.length);
        },
        INVITE_SUGGESTIONS_SEARCH: function (e) {
          let { query: t } = e;
          s = "" !== t;
          let { rows: n } = x(t);
          M(n);
        },
      });
    },
    191542: function (e, t, n) {
      "use strict";
      let l;
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("446674"),
        s = n("872717"),
        i = n("913144"),
        r = n("718517"),
        u = n("271938"),
        o = n("401848"),
        d = n("49111"),
        c = n("724210");
      let h = 10 * r.default.Millis.SECOND,
        f = 1.5 * r.default.Millis.SECOND,
        I = {},
        g = Object.freeze({});
      function E(e) {
        var t;
        return null !== (t = I[e]) && void 0 !== t ? t : g;
      }
      function v(e) {
        var t, n;
        let { channelId: l, userId: a } = e,
          s = { ...E(l) };
        clearTimeout(s[a]),
          (s[a] =
            ((t = l),
            (n = a),
            setTimeout(() => {
              i.default.dispatch({
                type: "TYPING_STOP",
                channelId: t,
                userId: n,
              });
            }, h))),
          (I[l] = s);
      }
      function T(e) {
        let { channelId: t, userId: n } = e,
          l = I[t];
        if (null == l || null == l[n]) return !1;
        let a = { ...l };
        clearTimeout(a[n]), delete a[n], (I[t] = a);
      }
      function m() {
        I = {};
      }
      class p extends a.default.Store {
        getTypingUsers(e) {
          return E(e);
        }
        isTyping(e, t) {
          return null != E(e)[t];
        }
      }
      p.displayName = "TypingStore";
      var _ = new p(i.default, {
        TYPING_START: v,
        TYPING_STOP: T,
        TYPING_START_LOCAL: function (e) {
          let { channelId: t } = e,
            n = u.default.getId();
          if (null == n || t === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
            return !1;
          null != l &&
            l.channelId !== t &&
            (null != l.timeout && clearTimeout(l.timeout), (l = null));
          let a = Date.now(),
            r = 0.8 * h;
          if (null != l && (null != l.timeout || l.prevSend + r > a)) return !1;
          let I = null == l || l.prevSend > a - 2 * r ? f : 0,
            T = setTimeout(() => {
              if (
                null != l &&
                l.channelId === t &&
                n === u.default.getId() &&
                null != l.timeout
              )
                (l.timeout = null),
                  !(
                    (function (e) {
                      let t = E(e);
                      return t === g ? 0 : Object.keys(t).length;
                    })(t) > 5
                  ) &&
                    s.default
                      .post({ url: d.Endpoints.TYPING(t), oldFormErrors: !0 })
                      .then(e => {
                        if (200 === e.status) {
                          var n, l;
                          let a =
                              null !== (n = e.body.message_send_cooldown_ms) &&
                              void 0 !== n
                                ? n
                                : 0,
                            s =
                              null !== (l = e.body.thread_create_cooldown_ms) &&
                              void 0 !== l
                                ? l
                                : 0;
                          a > 0 &&
                            i.default.dispatch({
                              type: "SLOWMODE_SET_COOLDOWN",
                              channelId: t,
                              slowmodeType: o.SlowmodeType.SendMessage,
                              cooldownMs: a,
                            }),
                            s > 0 &&
                              i.default.dispatch({
                                type: "SLOWMODE_SET_COOLDOWN",
                                channelId: t,
                                slowmodeType: o.SlowmodeType.CreateThread,
                                cooldownMs: s,
                              });
                        }
                      });
            }, I);
          return (
            (l = { channelId: t, timeout: T, prevSend: a }),
            v({ channelId: t, userId: n })
          );
        },
        TYPING_STOP_LOCAL: function (e) {
          let { channelId: t } = e,
            n = u.default.getId();
          return (
            null != n &&
            null != l &&
            l.channelId === t &&
            null != l.timeout &&
            (clearTimeout(l.timeout),
            (l = null),
            T({ channelId: t, userId: n }))
          );
        },
        CONNECTION_OPEN: m,
        OVERLAY_INITIALIZE: m,
        MESSAGE_CREATE: function (e) {
          let {
            channelId: t,
            message: { author: n },
            optimistic: a,
          } = e;
          return (
            a &&
              !(function (e) {
                if (null == l || l.channelId !== e) return;
                null != l.timeout && clearTimeout(l.timeout), (l = null);
              })(t),
            null != n && T({ channelId: t, userId: n.id })
          );
        },
      });
    },
    941886: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EmptyStateImage: function () {
            return v;
          },
          EmptyStateText: function () {
            return T;
          },
          default: function () {
            return a;
          },
        });
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        u = n.n(r),
        o = n("819855"),
        d = n("77078"),
        c = n("145131"),
        h = n("49111"),
        f = n("177914"),
        I = n("890957");
      let { Provider: g, Consumer: E } = i.createContext(h.ThemeTypes.DARK);
      class v extends i.PureComponent {
        render() {
          let {
            lightSrc: e,
            darkSrc: t,
            width: n,
            height: l,
            offsetX: a,
            offsetY: i,
            style: r,
          } = this.props;
          return (0, s.jsx)(E, {
            children: d =>
              (0, s.jsx)(c.default.Child, {
                grow: 0,
                className: u(f.image, I.marginBottom40),
                style: {
                  ...r,
                  width: n,
                  height: l,
                  marginLeft: a,
                  marginTop: i,
                  backgroundImage: "url(".concat(
                    (0, o.isThemeDark)(d) ? t : e,
                    ")"
                  ),
                },
              }),
          });
        }
      }
      let T = e => {
        let {
          children: t,
          className: n,
          noteClassName: l,
          note: a,
          style: i,
        } = e;
        return (0, s.jsxs)(c.default.Child, {
          grow: 0,
          direction: c.default.Direction.VERTICAL,
          style: i,
          children: [
            null != t &&
              (0, s.jsx)(d.H, { className: u(n, f.title), children: t }),
            null != a
              ? (0, s.jsx)("div", {
                  className: u(l, f.text, I.marginTop8),
                  children: a,
                })
              : null,
          ],
        });
      };
      ((l = class extends i.PureComponent {
        render() {
          let { children: e, theme: t, className: n, style: l } = this.props;
          return (0, s.jsx)(g, {
            value: t,
            children: (0, s.jsx)(c.default, {
              direction: c.default.Direction.VERTICAL,
              align: c.default.Align.CENTER,
              justify: c.default.Justify.CENTER,
              className: u(f.wrapper, n),
              style: l,
              children: e,
            }),
          });
        }
      }).Text = T),
        (l.Image = v),
        (a = l);
    },
    37785: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        i = n("393414"),
        r = n("49111"),
        u = a.forwardRef(function (e, t) {
          let {
              href: n,
              children: u,
              onClick: o,
              onKeyPress: d,
              focusProps: c,
              ...h
            } = e,
            f = a.useCallback(
              e => {
                !e.repeat &&
                  ((e.charCode === r.KeyboardKeys.SPACE ||
                    e.charCode === r.KeyboardKeys.ENTER) &&
                    (e.preventDefault(),
                    null != n && (0, i.transitionTo)(n),
                    null == o || o()),
                  null == d || d(e));
              },
              [n, d, o]
            ),
            I = a.useCallback(
              e => {
                !e.metaKey &&
                  !e.shiftKey &&
                  0 === e.button &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, i.transitionTo)(n),
                  null == o || o());
              },
              [n, o]
            ),
            g = (0, l.jsx)("a", {
              ref: t,
              href: n,
              onClick: I,
              onKeyPress: f,
              ...h,
              children: u,
            });
          return (0, l.jsx)(s.FocusRing, { ...c, children: g });
        });
    },
    98292: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("77078"),
        u = n("709945");
      function o(e) {
        let { children: t, "aria-label": n, className: s, position: o } = e,
          d = a.useRef(null),
          c = null != n ? n : "string" == typeof t && t;
        return (0, l.jsx)(r.Tooltip, {
          position: null != o ? o : "top",
          delay: 500,
          text: t,
          "aria-label": c,
          children: n => {
            let { onMouseEnter: a, onMouseLeave: r } = n;
            return (0, l.jsx)("div", {
              className: i(s, u.overflow),
              ref: d,
              "aria-hidden": e["aria-hidden"],
              onMouseEnter: () => {
                let { current: e } = d;
                null != e &&
                  e.offsetWidth < e.scrollWidth &&
                  (null == a || a());
              },
              onMouseLeave: r,
              children: t,
            });
          },
        });
      }
    },
    109264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("733154"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z",
              }),
            });
          },
          s.ChatIcon,
          void 0,
          { size: 24 }
        );
    },
    474571: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("197801"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return 16 === t || 16 === n
              ? (0, l.jsx)("svg", {
                  ...(0, i.default)(r),
                  width: t,
                  height: n,
                  viewBox: "0 0 16 16",
                  children: (0, l.jsx)("path", {
                    fill: a,
                    className: s,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
                  }),
                })
              : (0, l.jsx)("svg", {
                  ...(0, i.default)(r),
                  width: t,
                  height: n,
                  viewBox: "0 0 24 24",
                  children: (0, l.jsx)("path", {
                    fill: a,
                    className: s,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
                  }),
                });
          },
          s.SettingsIcon,
          void 0,
          { size: 24 }
        );
    },
    368121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("390300"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: s,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                "aria-hidden": !0,
              }),
            });
          },
          s.VoiceNormalIcon,
          void 0,
          { size: 24 }
        );
    },
    228427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("287083"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: a = "currentColor",
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: a,
              }),
            });
          },
          s.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    619911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("125094"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                  className: s,
                  fill: a,
                }),
                (0, l.jsx)("path", {
                  d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                  className: s,
                  fill: a,
                }),
              ],
            });
          },
          s.ScreenArrowIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return i;
          },
          copy: function () {
            return r;
          },
        }),
        n("70102");
      var l = n("281071"),
        a = n("773336"),
        s = n("50885");
      let i = (() => {
        if (a.isPlatformEmbedded) return null != s.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function r(e) {
        return (
          !!i && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    76527: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: r,
          }),
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: r,
            }),
          ],
        });
      };
    },
    469062: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SettingsIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
    618807: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: r,
            }),
          ],
        });
      };
    },
    882039: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceNormalIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
              className: r,
            }),
          ],
        });
      };
    },
    498574: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          GuildInviteFlags: function () {
            return l;
          },
        }),
        n("222007"),
        ((a = l || (l = {}))[(a.IS_GUEST_INVITE = 1)] = "IS_GUEST_INVITE"),
        (a[(a.IS_VIEWED = 2)] = "IS_VIEWED"),
        (a[(a.IS_ENHANCED = 4)] = "IS_ENHANCED");
    },
    281071: function (e, t, n) {
      "use strict";
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          l = window.getSelection(),
          a = document.createElement("textarea");
        (a.value = e),
          (a.contentEditable = "true"),
          (a.style.visibility = "none"),
          t.appendChild(a),
          n.selectNodeContents(a),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          a.focus(),
          a.setSelectionRange(0, e.length);
        let s = document.execCommand("copy");
        return t.removeChild(a), s;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return l;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=97bbc4414d0d1fd7ab7b.js.map

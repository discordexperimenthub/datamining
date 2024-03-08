(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41737"],
  {
    823026: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        }),
        l("424973");
      var u = l("37983"),
        a = l("884691"),
        d = l("446674"),
        n = l("77078"),
        s = l("713841"),
        i = l("79112"),
        o = l("988721"),
        r = l("592407"),
        c = l("305961"),
        f = l("957255"),
        M = l("49111"),
        E = l("782340");
      function g(e) {
        let { user: t, guildId: l, channel: g, context: A } = e,
          S = c.default.getGuild(l),
          _ = (0, d.useStateFromStores)([f.default], () =>
            null != S ? f.default.can(M.Permissions.MANAGE_GUILD, S) : null
          ),
          v = (0, o.useContextIndexState)(g, !0, !0),
          p = (0, o.useUserIndexState)(!0, !0),
          { isUserApp: N, isGuildApp: T } = a.useMemo(() => {
            var e, l, u, a;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let d = Object.values(
                null !==
                  (u =
                    null === (e = v.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== u
                  ? u
                  : {}
              ),
              n = Object.values(
                null !==
                  (a =
                    null === (l = p.result) || void 0 === l
                      ? void 0
                      : l.sections) && void 0 !== a
                  ? a
                  : {}
              );
            return {
              isGuildApp: d.some(e => {
                var l;
                return (
                  (null === (l = e.descriptor.application) || void 0 === l
                    ? void 0
                    : l.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: n.some(e => {
                var l;
                return (
                  (null === (l = e.descriptor.application) || void 0 === l
                    ? void 0
                    : l.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [v, p, null == t ? void 0 : t.id]),
          m = a.useCallback(() => {
            (null == S ? void 0 : S.id) != null &&
              (r.default.open(S.id, M.GuildSettingsSections.INTEGRATIONS),
              s.default.setSection(
                M.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]),
          U = a.useCallback(() => {
            i.default.open(M.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          I = A === M.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !_ || I || (!T && !N)) return null;
        let b = [];
        return (
          T &&
            b.push(
              (0, u.jsx)(
                n.MenuItem,
                {
                  id: "manage-integration",
                  label: E.default.Messages.MANAGE_INTEGRATION,
                  action: m,
                },
                "manage-integration"
              )
            ),
          N &&
            b.push(
              (0, u.jsx)(
                n.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: E.default.Messages.MANAGE_AUTHORIZED_APP,
                  action: U,
                },
                "manage-authorized-app"
              )
            ),
          b
        );
      }
    },
    242757: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          canViewInviteModal: function () {
            return a;
          },
        });
      var u = l("49111");
      function a(e, t, l, a) {
        let d = null != l ? l : t,
          n = null != d && e.can(u.Permissions.CREATE_INSTANT_INVITE, d);
        return (
          n ||
          (null != t && null != t.vanityURLCode) ||
          (null == a ? void 0 : a.invite_code) != null
        );
      }
    },
    539593: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return L;
          },
        });
      var u = l("37983");
      l("884691");
      var a = l("77078"),
        d = l("272030"),
        n = l("838446"),
        s = l("158534"),
        i = l("846883"),
        o = l("812204"),
        r = l("861370"),
        c = l("230947"),
        f = l("823026"),
        M = l("170990"),
        E = l("304582"),
        g = l("72057"),
        A = l("300925"),
        S = l("489836"),
        _ = l("406703"),
        v = l("314838"),
        p = l("383161"),
        N = l("421602"),
        T = l("459870"),
        m = l("692986"),
        U = l("806179"),
        I = l("97508"),
        b = l("816106"),
        O = l("623879"),
        C = l("49111"),
        x = l("782340"),
        L = (0, s.default)(
          (0, n.default)(
            function (e) {
              let {
                  user: t,
                  guildId: l,
                  showModalItems: n = !0,
                  showMediaItems: s = !1,
                  showChatItems: o = !0,
                  context: L,
                  onSelect: D,
                } = e,
                h = {
                  page: C.AnalyticsPages.GUILD_CHANNEL,
                  section: C.AnalyticsSections.CHAT_USERNAME,
                  object: C.AnalyticsObjects.CONTEXT_MENU_ITEM,
                },
                j = (0, U.default)(t.id, l),
                V = (0, p.default)(t, l, L),
                G = (0, N.default)(t.id, L),
                R = (0, O.default)(t.id),
                k = (0, _.default)(t, L),
                P = (0, g.default)({ user: t, guildId: l, context: L }),
                B = (0, E.default)(t),
                F = (0, b.default)(t.id),
                y = (0, m.default)(t.id),
                w = (0, c.default)({
                  guildId: l,
                  userId: t.id,
                  analyticsLocation: h,
                  context: L,
                }),
                H = (0, f.default)({ user: t, guildId: l }),
                X = (0, v.default)(t, l),
                Y = (0, i.default)(null, t),
                z = (0, M.default)(t),
                Z = (0, S.default)(t),
                W = (0, A.default)(t, l),
                q = (0, I.default)(t.id, l),
                J = (0, T.default)(t, l),
                K = (0, r.default)({
                  id: t.id,
                  label: x.default.Messages.COPY_ID_USER,
                }),
                Q = t.isNonUserBot();
              return (0, u.jsxs)(a.Menu, {
                navId: "user-context",
                onClose: d.closeContextMenu,
                "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: D,
                children: [
                  !Q &&
                    (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsxs)(a.MenuGroup, {
                          children: [n && j, o && V, G, k, n && P, n && B, R],
                        }),
                        s && (0, u.jsx)(a.MenuGroup, { children: F }),
                        (0, u.jsx)(a.MenuGroup, { children: n && Y }),
                        (0, u.jsxs)(a.MenuGroup, {
                          children: [s && y, n && w, n && X, z, H, n && Z],
                        }),
                        (0, u.jsx)(a.MenuGroup, { children: W }),
                        (0, u.jsxs)(a.MenuGroup, { children: [q, J] }),
                      ],
                    }),
                  (0, u.jsx)(a.MenuGroup, { children: K }),
                ],
              });
            },
            { object: C.AnalyticsObjects.CONTEXT_MENU }
          ),
          [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU]
        );
    },
    692986: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return v;
          },
        });
      var u = l("37983");
      l("884691");
      var a = l("446674"),
        d = l("77078"),
        n = l("404118"),
        s = l("629109"),
        i = l("235004"),
        o = l("42887"),
        r = l("945956"),
        c = l("162771"),
        f = l("697218"),
        M = l("423487"),
        E = l("599110"),
        g = l("49111"),
        A = l("353927"),
        S = l("782340"),
        _ = l("622393");
      function v(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : A.MediaEngineContextTypes.DEFAULT,
          l = (0, a.useStateFromStores)([f.default], () => {
            var t;
            return (
              (null === (t = f.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id) === e
            );
          }),
          v = (0, a.useStateFromStores)([i.default], () =>
            i.default.isLocalSoundboardMuted(e)
          ),
          {
            muted: p,
            deafened: N = !1,
            localVideoDisabled: T = !1,
            localVideoAutoDisabled: m = !1,
          } = (0, a.useStateFromStoresObject)(
            [o.default],
            () =>
              l
                ? {
                    muted: o.default.isSelfMute(t),
                    deafened: o.default.isSelfDeaf(t),
                  }
                : {
                    muted: o.default.isLocalMute(e, t),
                    localVideoDisabled: o.default.isLocalVideoDisabled(e, t),
                    localVideoAutoDisabled: o.default.isLocalVideoAutoDisabled(
                      e,
                      t
                    ),
                  },
            [l, t, e]
          ),
          U =
            o.default.supports(A.Features.DISABLE_VIDEO) && !l
              ? (0, u.jsx)(
                  d.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: S.default.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (m) {
                        n.default.show({
                          title: S.default.Messages.UNSTABLE_CONNECTION,
                          body: S.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: S.default.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: S.default.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            s.default.setDisableLocalVideo(
                              e,
                              g.VideoToggleState.MANUAL_ENABLED
                            ),
                        });
                        return;
                      }
                      let l = T
                        ? g.VideoToggleState.MANUAL_ENABLED
                        : g.VideoToggleState.DISABLED;
                      s.default.setDisableLocalVideo(e, l, t);
                    },
                    checked: T,
                    subtext: m
                      ? (0, u.jsxs)("div", {
                          className: _.videoPaused,
                          children: [
                            (0, u.jsx)(M.default, {
                              width: 12,
                              className: _.warningCircle,
                            }),
                            S.default.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video"
                )
              : null,
          I = l
            ? null
            : (0, u.jsx)(
                d.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: S.default.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let l = r.default.getRTCConnection();
                    E.default.track(
                      g.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED,
                      {
                        guild_id: c.default.getGuildId(),
                        target_user_id: e,
                        media_session_id:
                          null == l ? void 0 : l.getMediaSessionId(),
                        parent_media_session_id:
                          null == l ? void 0 : l.parentMediaSessionId,
                        mute_soundboard: !v,
                      }
                    ),
                      s.default.toggleLocalSoundboardMute(e, t);
                  },
                  checked: v,
                },
                "soundboard-sound-mute"
              );
        return l
          ? [
              (0, u.jsx)(
                d.MenuCheckboxItem,
                {
                  id: "mute",
                  label: S.default.Messages.SOUND_MUTE,
                  action: () => s.default.toggleSelfMute({ context: t }),
                  checked: p,
                },
                "self-mute"
              ),
              (0, u.jsx)(
                d.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: S.default.Messages.DEAFEN,
                  action: () => s.default.toggleSelfDeaf({ context: t }),
                  checked: N,
                },
                "self-deafen"
              ),
              U,
            ]
          : [
              (0, u.jsx)(
                d.MenuCheckboxItem,
                {
                  id: "mute",
                  label: S.default.Messages.SOUND_MUTE,
                  action: () => s.default.toggleLocalMute(e, t),
                  checked: p,
                },
                "self-mute"
              ),
              I,
              U,
            ];
      }
    },
    816106: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return M;
          },
        });
      var u = l("37983");
      l("884691");
      var a = l("446674"),
        d = l("77078"),
        n = l("629109"),
        s = l("42887"),
        i = l("697218"),
        o = l("829536"),
        r = l("773336"),
        c = l("353927"),
        f = l("782340");
      function M(e) {
        var t;
        let l =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.MediaEngineContextTypes.DEFAULT,
          M = (0, a.useStateFromStores)(
            [s.default],
            () => s.default.getLocalVolume(e, l),
            [e, l]
          ),
          E =
            e ===
            (null === (t = i.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          g = l === c.MediaEngineContextTypes.STREAM;
        return E
          ? null
          : (0, u.jsx)(d.MenuControlItem, {
              id: "user-volume",
              label: g
                ? f.default.Messages.STREAM_VOLUME
                : f.default.Messages.USER_VOLUME,
              control: (t, a) =>
                (0, u.jsx)(d.MenuSliderControl, {
                  ...t,
                  ref: a,
                  value: (0, o.amplitudeToPerceptual)(M),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: t =>
                    n.default.setLocalVolume(
                      e,
                      (0, o.perceptualToAmplitude)(t),
                      l
                    ),
                  "aria-label": g
                    ? f.default.Messages.STREAM_VOLUME
                    : f.default.Messages.USER_VOLUME,
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=62d1af6324c19e9cf599.js.map

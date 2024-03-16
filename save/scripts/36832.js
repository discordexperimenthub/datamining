(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36832"],
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
            return u;
          },
        });
      var i = n("884691"),
        l = n("599110");
      let u = () => i.useContext(l.AnalyticsContext);
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
    633043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("175339"),
        r = () =>
          (0, i.jsx)("div", {
            className: u.loadingWrapper,
            children: (0, i.jsx)(l.Dots, { dotRadius: 4, themed: !0 }),
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
            return g;
          },
          useAvatarColors: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("884691"),
        l = n("656280"),
        u = n.n(l),
        r = n("308503"),
        a = n("446674"),
        s = n("206230"),
        d = n("284679"),
        o = n("103603");
      let f = (0, r.default)(() => ({ palette: {}, fetching: {} }));
      async function c(e) {
        null == f.getState().palette[e] && (await m(e));
      }
      async function m(e) {
        if (!f.getState().fetching[e]) {
          f.setState(t => ({ fetching: { ...t.fetching, [e]: !0 } }));
          try {
            let t = await (0, o.getPaletteForAvatar)(e),
              n = (0, d.getComplimentaryPaletteForColor)(t[0]);
            f.setState(i => ({
              fetching: { ...i.fetching, [e]: !1 },
              palette: { ...i.palette, [e]: [...t.slice(0, 2), ...n] },
            }));
          } catch (t) {
            f.setState(t => ({ fetching: { ...t.fetching, [e]: !1 } }));
          }
        }
      }
      function g(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [i] = h(e, t, n);
        return i;
      }
      function h(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = f(t => (null == e ? void 0 : t.palette[e])),
          r = (0, a.useStateFromStores)([s.default], () =>
            n && s.default.desaturateUserColors ? s.default.saturation : 1
          );
        i.useEffect(() => {
          null != e && null == l && m(e);
        }, [e, l]);
        let d = i.useMemo(
          () =>
            null == l
              ? void 0
              : l.map(e => {
                  let [t, n, i] = e,
                    { h: l, s: a, l: s } = u({ r: t, g: n, b: i }).toHsl();
                  return u({ h: l, s: a * r, l: s }).toHexString();
                }),
          [l, r]
        );
        return null != d ? d : [t, t];
      }
    },
    535348: function (e, t, n) {
      "use strict";
      var i, l;
      n.r(t),
        n.d(t, {
          SelfStreamAndVideoAlertType: function () {
            return i;
          },
        }),
        ((l = i || (i = {}))[(l.STREAM = 0)] = "STREAM"),
        (l[(l.VIDEO = 1)] = "VIDEO");
    },
    301603: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("446674"),
        l = n("629109"),
        u = n("271938"),
        r = n("42887"),
        a = n("49111"),
        s = n("353927");
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.MediaEngineContextTypes.DEFAULT,
          n = (0, i.useStateFromStores)([u.default], () => u.default.getId()),
          d = (0, i.useStateFromStores)(
            [r.default],
            () =>
              r.default.supports(s.Features.DISABLE_VIDEO) &&
              r.default.isVideoEnabled()
          ),
          o = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.isLocalVideoDisabled(n, t),
            [n, t]
          ),
          f = null == e || e === n;
        return [
          f && (d || o),
          o,
          e => {
            let i = e
              ? a.VideoToggleState.DISABLED
              : a.VideoToggleState.MANUAL_ENABLED;
            l.default.setDisableLocalVideo(n, i, t);
          },
        ];
      }
    },
    632616: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("452804"),
        u = n("135230"),
        r = n("535348"),
        a = n("782340");
      function s(e) {
        let { type: t, onConfirm: n, ...s } = e,
          d =
            t === r.SelfStreamAndVideoAlertType.STREAM
              ? a.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : a.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          o =
            t === r.SelfStreamAndVideoAlertType.STREAM
              ? a.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : a.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, i.jsx)(u.default, {
          confirmText: a.default.Messages.CONFIRM,
          secondaryConfirmText: a.default.Messages.DONT_ASK_AGAIN,
          title: d,
          cancelText: a.default.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            l.default.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: o,
          ...s,
        });
      }
    },
    243288: function (e, t, n) {
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
        u = n("77078"),
        r = n("255397"),
        a = n("191145"),
        s = n("782340");
      function d(e) {
        let t = (0, l.useStateFromStores)([a.default], () =>
          a.default.getVoiceParticipantsHidden(e)
        );
        return (0, i.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => r.default.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    321135: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        r = n("168973"),
        a = n("301603"),
        s = n("632616"),
        d = n("535348"),
        o = n("353927"),
        f = n("782340");
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.MediaEngineContextTypes.DEFAULT,
          [n, c, m] = (0, a.default)(e, t),
          g = (0, l.useStateFromStores)(
            [r.default],
            () => r.default.disableHideSelfStreamAndVideoConfirmationAlert
          );
        return n
          ? (0, i.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: f.default.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                if (g || c) return m(!c);
                (0, u.openModal)(e =>
                  (0, i.jsx)(s.default, {
                    ...e,
                    type: d.SelfStreamAndVideoAlertType.VIDEO,
                    onConfirm: () => m(!c),
                  })
                );
              },
            })
          : null;
      }
    },
    873254: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        r = n("648911"),
        a = n("271938"),
        s = n("42887"),
        d = n("782340"),
        o = n("325483");
      function f(e) {
        let t = (0, u.useModalContext)(),
          f = (0, l.useStateFromStores)([s.default], () =>
            s.default.isVideoEnabled()
          ),
          c = (0, l.useStateFromStores)(
            [a.default],
            () => a.default.getId() === e
          ),
          m = (0, r.default)();
        return (!f || m) && c
          ? (0, i.jsx)(u.MenuItem, {
              id: "change-video-background",
              label: (0, i.jsx)("div", {
                className: o.item,
                children: f
                  ? d.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM
                  : d.default.Messages.CAMERA_PREVIEW_MENU_ITEM,
              }),
              action: function () {
                (0, u.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .el("381736")
                      .then(n.bind(n, "381736"));
                    return t => (0, i.jsx)(e, { ...t, videoEnabled: f });
                  },
                  { modalKey: "camera-preview", contextKey: t }
                );
              },
            })
          : null;
      }
    },
    823026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("424973");
      var i = n("37983"),
        l = n("884691"),
        u = n("446674"),
        r = n("77078"),
        a = n("713841"),
        s = n("79112"),
        d = n("988721"),
        o = n("592407"),
        f = n("305961"),
        c = n("957255"),
        m = n("49111"),
        g = n("782340");
      function h(e) {
        let { user: t, guildId: n, channel: h, context: v } = e,
          p = f.default.getGuild(n),
          M = (0, u.useStateFromStores)([c.default], () =>
            null != p ? c.default.can(m.Permissions.MANAGE_GUILD, p) : null
          ),
          S = (0, d.useContextIndexState)(h, !0, !0),
          I = (0, d.useUserIndexState)(!0, !0),
          { isUserApp: A, isGuildApp: _ } = l.useMemo(() => {
            var e, n, i, l;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let u = Object.values(
                null !==
                  (i =
                    null === (e = S.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {}
              ),
              r = Object.values(
                null !==
                  (l =
                    null === (n = I.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== l
                  ? l
                  : {}
              );
            return {
              isGuildApp: u.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: r.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [S, I, null == t ? void 0 : t.id]),
          E = l.useCallback(() => {
            (null == p ? void 0 : p.id) != null &&
              (o.default.open(p.id, m.GuildSettingsSections.INTEGRATIONS),
              a.default.setSection(
                m.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == p ? void 0 : p.id]),
          C = l.useCallback(() => {
            s.default.open(m.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          T = v === m.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !M || T || (!_ && !A)) return null;
        let b = [];
        return (
          _ &&
            b.push(
              (0, i.jsx)(
                r.MenuItem,
                {
                  id: "manage-integration",
                  label: g.default.Messages.MANAGE_INTEGRATION,
                  action: E,
                },
                "manage-integration"
              )
            ),
          A &&
            b.push(
              (0, i.jsx)(
                r.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: g.default.Messages.MANAGE_AUTHORIZED_APP,
                  action: C,
                },
                "manage-authorized-app"
              )
            ),
          b
        );
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return l;
          },
        });
      var i = n("49111");
      function l(e, t, n, l) {
        let u = null != n ? n : t,
          r = null != u && e.can(i.Permissions.CREATE_INSTANT_INVITE, u);
        return (
          r ||
          (null != t && null != t.vanityURLCode) ||
          (null == l ? void 0 : l.invite_code) != null
        );
      }
    },
    166452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("272030"),
        r = n("838446"),
        a = n("158534"),
        s = n("798609"),
        d = n("846883"),
        o = n("812204"),
        f = n("389153"),
        c = n("243288"),
        m = n("321135"),
        g = n("873254"),
        h = n("861370"),
        v = n("726750"),
        p = n("170990"),
        M = n("304582"),
        S = n("72057"),
        I = n("563816"),
        A = n("489836"),
        _ = n("406703"),
        E = n("343856"),
        C = n("502533"),
        T = n("314838"),
        b = n("383161"),
        P = n("421602"),
        x = n("432487"),
        N = n("151200"),
        O = n("692986"),
        U = n("806179"),
        y = n("816106"),
        R = n("623879"),
        j = n("49111"),
        F = n("782340"),
        G = (0, a.default)(
          (0, r.default)(
            function (e) {
              var t;
              let {
                  user: n,
                  channel: r,
                  context: a,
                  showChatItems: o = !0,
                  showMediaItems: j = !1,
                  showChannelCallItems: G = !1,
                  showModalItems: D = !0,
                  onSelect: L,
                  onHeightUpdate: w,
                } = e,
                V = (0, U.default)(n.id, null),
                B = (0, b.default)(n, null, a),
                H = (0, N.default)(n.id, r.id),
                k = (0, P.default)(n.id, a),
                z = (0, _.default)(n, a),
                W = (0, S.default)({ user: n, context: a }),
                Y = (0, M.default)(n),
                Z = (0, y.default)(n.id),
                X = (0, x.default)(n.id, r.id),
                K = (0, O.default)(n.id),
                Q = (0, C.default)(n.id, r.id),
                q = (0, T.default)(n),
                J = (0, d.default)(null, n),
                $ = (0, p.default)(n),
                ee = (0, A.default)(n),
                et = (0, h.default)({
                  id: n.id,
                  label: F.default.Messages.COPY_ID_USER,
                }),
                en = (0, R.default)(n.id),
                ei = (0, m.default)(n.id),
                el = (0, c.default)(r.id),
                eu = (0, v.default)(n),
                er = (0, g.default)(n.id),
                ea = (0, I.default)({
                  commandType: s.ApplicationCommandType.USER,
                  commandTargetId: n.id,
                  channel: r,
                  guildId: void 0,
                  onHeightUpdate: w,
                }),
                es = (0, E.default)(n, r),
                ed = (0, f.useIsUserInUserAppExperiment)({
                  location: "GroupDMUserContextMenu",
                }),
                eo = n.isNonUserBot(),
                ef = r.isManaged(),
                ec =
                  null === (t = r.recipients) || void 0 === t
                    ? void 0
                    : t.includes(n.id);
              return (0, i.jsxs)(l.Menu, {
                navId: "user-context",
                onClose: u.closeContextMenu,
                "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: L,
                children: [
                  !eo &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(l.MenuGroup, { children: eu }),
                        (0, i.jsxs)(l.MenuGroup, {
                          children: [
                            D && V,
                            o && B,
                            k,
                            z,
                            !ef && H,
                            D && W,
                            D && Y,
                            en,
                          ],
                        }),
                        j && (0, i.jsx)(l.MenuGroup, { children: Z }),
                        ec &&
                          (0, i.jsxs)(l.MenuGroup, {
                            children: [!ef && X, es],
                          }),
                        (0, i.jsx)(l.MenuGroup, { children: D && J }),
                        (0, i.jsxs)(l.MenuGroup, {
                          children: [
                            j && K,
                            j && Q,
                            ed && ea,
                            D && q,
                            $,
                            D && ee,
                            j && er,
                          ],
                        }),
                        G && (0, i.jsxs)(l.MenuGroup, { children: [el, ei] }),
                      ],
                    }),
                  (0, i.jsx)(l.MenuGroup, { children: et }),
                ],
              });
            },
            { object: j.AnalyticsObjects.CONTEXT_MENU }
          ),
          [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU]
        );
    },
    563816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n("37983"),
        l = n("884691"),
        u = n("627445"),
        r = n.n(u),
        a = n("446674"),
        s = n("77078"),
        d = n("240249"),
        o = n("916565"),
        f = n("355263"),
        c = n("633043"),
        m = n("823026"),
        g = n("305961"),
        h = n("697218"),
        v = n("317041"),
        p = n("782340"),
        M = n("466063"),
        S = e => {
          let t,
            {
              commandType: n,
              commandTargetId: u,
              channel: S,
              guildId: I,
              onHeightUpdate: A,
              context: _,
            } = e,
            E = (0, a.useStateFromStores)([g.default], () =>
              g.default.getGuild(null != I ? I : S.guild_id)
            ),
            C = (0, a.useStateFromStores)([h.default], () =>
              h.default.getUser(u)
            ),
            T = (0, m.default)({
              user: C,
              guildId: null == E ? void 0 : E.id,
              channel: S,
              context: _,
            }),
            {
              commands: b,
              sectionDescriptors: P,
              loading: x,
            } = d.useDiscovery(
              S,
              { commandType: n },
              { limit: v.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: N } = l.useMemo(() => {
              let e = {};
              return (
                P.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [P]),
            O = l.useRef(x.current);
          l.useEffect(() => {
            x.current !== O.current &&
              ((O.current = x.current), null == A || A());
          }, [x, A]);
          let U = l.useCallback(
            e => {
              r(null != S, "menu item should not show if channel is null");
              let t = N[e.applicationId],
                n = null != t ? (0, f.getIconComponent)(t) : void 0;
              return (0, i.jsx)(
                s.MenuItem,
                {
                  id: e.id,
                  label: e.displayName,
                  showIconFirst: !0,
                  icon: () =>
                    null != n
                      ? (0, i.jsx)(n, {
                          channel: S,
                          section: t,
                          width: 18,
                          height: 18,
                          selectable: !1,
                        })
                      : null,
                  action: () => {
                    (0, o.default)({
                      command: e,
                      optionValues: {},
                      context: { channel: S, guild: E },
                      commandTargetId: u,
                    });
                  },
                },
                e.id
              );
            },
            [S, E, u, N]
          );
          return (
            x.current
              ? (t = (0, i.jsx)(
                  s.MenuItem,
                  {
                    id: "menu-commands-placeholder",
                    render: () => (0, i.jsx)(c.default, {}),
                    disabled: !0,
                  },
                  "menu-commands-placeholder"
                ))
              : ((t =
                  0 === b.length
                    ? (0, i.jsx)(
                        s.MenuItem,
                        {
                          id: "menu-commands-empty",
                          label:
                            p.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                          disabled: !0,
                        },
                        "menu-commands-empty"
                      )
                    : b.map(U)),
                null != T &&
                  (t = (0, i.jsxs)(i.Fragment, {
                    children: [
                      t,
                      (0, i.jsx)(s.MenuSeparator, {}, "separator"),
                      T,
                    ],
                  }))),
            (0, i.jsx)(s.MenuItem, {
              id: "apps",
              label: p.default.Messages.APPS,
              listClassName: M.list,
              children: t,
            })
          );
        };
    },
    343856: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("669491"),
        r = n("77078"),
        a = n("450911"),
        s = n("145079"),
        d = n("87657"),
        o = n("697218"),
        f = n("782340"),
        c = n("766646");
      function m(e) {
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
      function g(e, t) {
        let n = (0, l.useStateFromStores)([o.default], () =>
          o.default.getCurrentUser()
        );
        return null == n ||
          t.ownerId !== n.id ||
          e.id === n.id ||
          (null == t ? void 0 : t.isBroadcastChannel())
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: f.default.Messages.CHANGE_DM_OWNER,
              action: () => {
                var l;
                return (
                  (l = n),
                  void (0, r.openModal)(n =>
                    (0, i.jsxs)(r.ConfirmModal, {
                      bodyClassName: c.confirmModal,
                      header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: f.default.Messages.CONFIRM,
                      cancelText: f.default.Messages.CANCEL,
                      onConfirm: () => a.default.setDMOwner(t.id, e.id),
                      ...n,
                      children: [
                        (0, i.jsx)(m, {
                          color: u.default.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: c.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: c.from,
                              children: (0, i.jsx)(d.default, {
                                user: l,
                                size: r.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: c.to,
                              children: (0, i.jsx)(d.default, {
                                user: e,
                                size: r.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(r.Text, {
                          variant: "text-md/normal",
                          children:
                            f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                              usernameHook: (t, n) =>
                                (0, i.jsx)(
                                  s.default,
                                  {
                                    usernameIcon: (0, i.jsx)(r.Avatar, {
                                      className: c.avatarIcon,
                                      src: e.getAvatarURL(void 0, 16),
                                      size: r.AvatarSizes.SIZE_16,
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
            return g;
          },
          default: function () {
            return h;
          },
        }),
        n("222007");
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        r = n("352674"),
        a = n("42203"),
        s = n("957255"),
        d = n("18494"),
        o = n("659500"),
        f = n("158998"),
        c = n("49111"),
        m = n("782340");
      function g(e, t) {
        let { id: n } = e,
          i = "@".concat(f.default.getUserTag(e, { decoration: "never" }));
        o.ComponentDispatch.dispatchToLastSubscribed(
          c.ComponentActions.INSERT_TEXT,
          { plainText: i, rawText: "<@".concat(n, ">") }
        ),
          null != t && r.default.startTyping(t);
      }
      function h(e, t, n) {
        let [r, o] = (0, l.useStateFromStoresArray)(
            [d.default, a.default, s.default],
            () => {
              let e = d.default.getChannelId(t),
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
        return !o || f
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "mention",
              label: m.default.Messages.MENTION,
              action: function () {
                g(e, r);
              },
            });
      }
    },
    421602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("450911"),
        r = n("54239"),
        a = n("271938"),
        s = n("49111"),
        d = n("782340");
      function o(e, t) {
        let n = a.default.getId(),
          o = t === s.AppContext.POPOUT;
        return n === e || o
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "message-user",
              label: d.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                u.default.openPrivateChannel(e), (0, r.popLayer)();
              },
            });
      }
    },
    432487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        r = n("450911"),
        a = n("42203"),
        s = n("697218"),
        d = n("782340");
      function o(e, t) {
        let n = (0, l.useStateFromStores)(
            [s.default],
            () => s.default.getCurrentUser(),
            []
          ),
          o = (0, l.useStateFromStores)(
            [a.default],
            () => a.default.getChannel(t),
            [t]
          );
        return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id)
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "remove",
              label: d.default.Messages.REMOVE_FROM_GROUP,
              action: () => r.default.removeRecipient(t, e),
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
        u = n("77078"),
        r = n("561288"),
        a = n("191145"),
        s = n("271938"),
        d = n("99795"),
        o = n("782340");
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
            ? (0, i.jsx)(u.MenuItem, {
                id: "ring",
                label: o.default.Messages.RING,
                action: () => r.default.ring(t, [e]),
              })
            : c.type === d.ParticipantTypes.USER && c.ringing
              ? (0, i.jsx)(u.MenuItem, {
                  id: "stop-ringing",
                  label: o.default.Messages.STOP_RINGING,
                  action: () => r.default.stopRinging(t, [e]),
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
        u = n("315102"),
        r = n("719923"),
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
          return r.default.isPremiumAtLeast(
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
            ? (0, u.getGuildMemberBannerURL)({
                id: this.userId,
                guildId: this.guildId,
                banner: this.banner,
                canAnimate: t,
                size: n,
              })
            : (0, u.getUserBannerURL)({
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
                ? (0, u.getUserBannerURL)({
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
          var n, i, l, u;
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
              null !== (u = null == t ? void 0 : t.profileEffectId) &&
              void 0 !== u
                ? u
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
        u = n("462274"),
        r = n("535013"),
        a = n("42203"),
        s = n("26989"),
        d = n("713135"),
        o = n("386714");
      async function f(e, t) {
        var n, f, c;
        let m,
          {
            withMutualGuilds: g = !1,
            withMutualFriendsCount: h = !1,
            friendToken: v,
            preloadUserBanner: p = !0,
            dispatchWait: M = !1,
            guildId: S,
            channelId: I,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
        if ("" === e) return;
        null != t && (0, u.maybeFetchColors)(t),
          null != S && !g && (g = !0),
          null != S &&
            (m =
              null !==
                (f =
                  null ===
                    (n = (0, r.getVisibleConnectionsRole)({
                      guildMember: s.default.getMember(S, e),
                      channel: a.default.getChannel(I),
                    })) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== f
                ? f
                : void 0);
        let A = d.default.getUserProfile(e),
          _ = d.default.getMutualGuilds(e),
          E = d.default.getMutualFriendsCount(e),
          C = d.default.isFetchingProfile(e),
          T =
            (null == A ? void 0 : A.profileFetchFailed) ||
            (!C && ((!Array.isArray(_) && g) || (null == E && h))),
          b = p ? o.default : void 0,
          P = !1;
        if (null != S) {
          let t = d.default.getGuildMemberProfile(e, S);
          P = null == t;
        }
        !(
          !T &&
          !P &&
          (C ||
            Date.now() -
              (null !== (c = null == A ? void 0 : A.lastFetched) && void 0 !== c
                ? c
                : 0) <
              6e4)
        ) &&
          (M
            ? await i.default.wait(() =>
                (0, l.fetchProfile)(
                  e,
                  {
                    withMutualGuilds: g,
                    withMutualFriendsCount: h,
                    friendToken: v,
                    guildId: S,
                    connectionsRoleId: m,
                  },
                  b
                )
              )
            : await (0, l.fetchProfile)(
                e,
                {
                  withMutualGuilds: g,
                  withMutualFriendsCount: h,
                  friendToken: v,
                  guildId: S,
                  connectionsRoleId: m,
                },
                b
              ));
      }
    },
    386714: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("845579"),
        l = n("217513");
      function u(e, t) {
        if ("undefined" == typeof Image) return;
        let n = (0, l.getDisplayProfile)(e.user.id, t);
        if (null == n) return;
        let u = i.GifAutoPlay.getSetting(),
          r = n.getBannerURL({ canAnimate: u, size: 480 });
        if (null == r) return;
        let a = new Image();
        a.src = r;
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
            return o;
          },
        }),
        n("222007");
      var i = n("446674"),
        l = n("697218"),
        u = n("117362"),
        r = n("811907"),
        a = n("713135");
      function s(e, t) {
        return (0, i.useStateFromStores)([l.default, a.default], () =>
          o(e, t, [l.default, a.default])
        );
      }
      let d = (0, u.cachedFunction)((e, t) => new r.default(e, t));
      function o(e, t) {
        let [n, i] =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [l.default, a.default],
          u = n.getUser(e),
          r = i.getUserProfile(e),
          s = i.getGuildMemberProfile(e, t);
        return null == u || null == r ? null : d(r, s);
      }
    },
    648911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("446674"),
        l = n("42887"),
        u = n("512244");
      function r() {
        return (0, i.useStateFromStores)([l.default], () =>
          (0, u.default)(l.default)
        );
      }
    },
  },
]);
//# sourceMappingURL=55d77b7481a03b094df4.js.map

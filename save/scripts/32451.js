(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32451"],
  {
    633043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("175339"),
        r = () =>
          (0, u.jsx)("div", {
            className: s.loadingWrapper,
            children: (0, u.jsx)(a.Dots, { dotRadius: 4, themed: !0 }),
          });
    },
    535348: function (e, t, n) {
      "use strict";
      var u, a;
      n.r(t),
        n.d(t, {
          SelfStreamAndVideoAlertType: function () {
            return u;
          },
        }),
        ((a = u || (u = {}))[(a.STREAM = 0)] = "STREAM"),
        (a[(a.VIDEO = 1)] = "VIDEO");
    },
    301603: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var u = n("446674"),
        a = n("629109"),
        s = n("271938"),
        r = n("42887"),
        i = n("49111"),
        l = n("353927");
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.MediaEngineContextTypes.DEFAULT,
          n = (0, u.useStateFromStores)([s.default], () => s.default.getId()),
          o = (0, u.useStateFromStores)(
            [r.default],
            () =>
              r.default.supports(l.Features.DISABLE_VIDEO) &&
              r.default.isVideoEnabled()
          ),
          d = (0, u.useStateFromStores)(
            [r.default],
            () => r.default.isLocalVideoDisabled(n, t),
            [n, t]
          ),
          f = null == e || e === n;
        return [
          f && (o || d),
          d,
          e => {
            let u = e
              ? i.VideoToggleState.DISABLED
              : i.VideoToggleState.MANUAL_ENABLED;
            a.default.setDisableLocalVideo(n, u, t);
          },
        ];
      }
    },
    632616: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("452804"),
        s = n("135230"),
        r = n("535348"),
        i = n("782340");
      function l(e) {
        let { type: t, onConfirm: n, ...l } = e,
          o =
            t === r.SelfStreamAndVideoAlertType.STREAM
              ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            t === r.SelfStreamAndVideoAlertType.STREAM
              ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, u.jsx)(s.default, {
          confirmText: i.default.Messages.CONFIRM,
          secondaryConfirmText: i.default.Messages.DONT_ASK_AGAIN,
          title: o,
          cancelText: i.default.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            a.default.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: d,
          ...l,
        });
      }
    },
    243288: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        r = n("255397"),
        i = n("191145"),
        l = n("782340");
      function o(e) {
        let t = (0, a.useStateFromStores)([i.default], () =>
          i.default.getVoiceParticipantsHidden(e)
        );
        return (0, u.jsx)(s.MenuCheckboxItem, {
          id: "no-video-hide",
          label: l.default.Messages.STREAM_SHOW_NON_VIDEO,
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
      var u = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        r = n("168973"),
        i = n("301603"),
        l = n("632616"),
        o = n("535348"),
        d = n("353927"),
        f = n("782340");
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.MediaEngineContextTypes.DEFAULT,
          [n, c, E] = (0, i.default)(e, t),
          S = (0, a.useStateFromStores)(
            [r.default],
            () => r.default.disableHideSelfStreamAndVideoConfirmationAlert
          );
        return n
          ? (0, u.jsx)(s.MenuCheckboxItem, {
              id: "self-video-hide",
              label: f.default.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                if (S || c) return E(!c);
                (0, s.openModal)(e =>
                  (0, u.jsx)(l.default, {
                    ...e,
                    type: o.SelfStreamAndVideoAlertType.VIDEO,
                    onConfirm: () => E(!c),
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
      var u = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        r = n("648911"),
        i = n("271938"),
        l = n("42887"),
        o = n("782340"),
        d = n("325483");
      function f(e) {
        let t = (0, s.useModalContext)(),
          f = (0, a.useStateFromStores)([l.default], () =>
            l.default.isVideoEnabled()
          ),
          c = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.getId() === e
          ),
          E = (0, r.default)();
        return (!f || E) && c
          ? (0, u.jsx)(s.MenuItem, {
              id: "change-video-background",
              label: (0, u.jsx)("div", {
                className: d.item,
                children: f
                  ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM
                  : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM,
              }),
              action: function () {
                (0, s.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .el("381736")
                      .then(n.bind(n, "381736"));
                    return t => (0, u.jsx)(e, { ...t, videoEnabled: f });
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
            return I;
          },
        }),
        n("424973");
      var u = n("37983"),
        a = n("884691"),
        s = n("446674"),
        r = n("77078"),
        i = n("713841"),
        l = n("79112"),
        o = n("988721"),
        d = n("592407"),
        f = n("305961"),
        c = n("957255"),
        E = n("49111"),
        S = n("782340");
      function I(e) {
        let { user: t, guildId: n, channel: I, context: p } = e,
          A = f.default.getGuild(n),
          C = (0, s.useStateFromStores)([c.default], () =>
            null != A ? c.default.can(E.Permissions.MANAGE_GUILD, A) : null
          ),
          T = (0, o.useContextIndexState)(I, !0, !0),
          N = (0, o.useUserIndexState)(!0, !0),
          { isUserApp: _, isGuildApp: g } = a.useMemo(() => {
            var e, n, u, a;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let s = Object.values(
                null !==
                  (u =
                    null === (e = T.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== u
                  ? u
                  : {}
              ),
              r = Object.values(
                null !==
                  (a =
                    null === (n = N.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== a
                  ? a
                  : {}
              );
            return {
              isGuildApp: s.some(e => {
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
          }, [T, N, null == t ? void 0 : t.id]),
          m = a.useCallback(() => {
            (null == A ? void 0 : A.id) != null &&
              (d.default.open(A.id, E.GuildSettingsSections.INTEGRATIONS),
              i.default.setSection(
                E.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == A ? void 0 : A.id]),
          v = a.useCallback(() => {
            l.default.open(E.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          M = p === E.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !C || M || (!g && !_)) return null;
        let R = [];
        return (
          g &&
            R.push(
              (0, u.jsx)(
                r.MenuItem,
                {
                  id: "manage-integration",
                  label: S.default.Messages.MANAGE_INTEGRATION,
                  action: m,
                },
                "manage-integration"
              )
            ),
          _ &&
            R.push(
              (0, u.jsx)(
                r.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: S.default.Messages.MANAGE_AUTHORIZED_APP,
                  action: v,
                },
                "manage-authorized-app"
              )
            ),
          R
        );
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return a;
          },
        });
      var u = n("49111");
      function a(e, t, n, a) {
        let s = null != n ? n : t,
          r = null != s && e.can(u.Permissions.CREATE_INSTANT_INVITE, s);
        return (
          r ||
          (null != t && null != t.vanityURLCode) ||
          (null == a ? void 0 : a.invite_code) != null
        );
      }
    },
    16108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          acceptMessageRequest: function () {
            return l;
          },
          clearMessageRequestState: function () {
            return o;
          },
          markAsMessageRequest: function () {
            return d;
          },
          rejectMessageRequest: function () {
            return f;
          },
          rejectMessageRequestBatch: function () {
            return c;
          },
          fetchUserCountryCode: function () {
            return E;
          },
        });
      var u = n("872717"),
        a = n("913144"),
        s = n("437822"),
        r = n("773163"),
        i = n("49111");
      async function l(e) {
        await u.default.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: r.MessageRequestConsentStatusTypes.ACCEPTED },
        }),
          a.default.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: e,
          });
      }
      function o(e) {
        return u.default.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: {
            consent_status: r.MessageRequestConsentStatusTypes.UNSPECIFIED,
          },
        });
      }
      function d(e) {
        return u.default.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: r.MessageRequestConsentStatusTypes.PENDING },
        });
      }
      function f(e) {
        return u.default.delete({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
        });
      }
      function c(e) {
        return u.default.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: e },
        });
      }
      function E() {
        s.default.getLocationMetadata();
      }
    },
    773163: function (e, t, n) {
      "use strict";
      var u, a;
      n.r(t),
        n.d(t, {
          MessageRequestConsentStatusTypes: function () {
            return u;
          },
        }),
        ((a = u || (u = {}))[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.PENDING = 1)] = "PENDING"),
        (a[(a.ACCEPTED = 2)] = "ACCEPTED"),
        (a[(a.REJECTED = 3)] = "REJECTED");
    },
    533855: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelSafetyWarning: function () {
            return s;
          },
        });
      var u = n("446674"),
        a = n("764828");
      function s(e, t) {
        let n = (0, u.useStateFromStores)(
            [a.default],
            () => a.default.getChannelSafetyWarnings(e),
            [e]
          ),
          s = n.filter(e => e.type === t);
        return s.find(e => null == e.dismiss_timestamp);
      }
    },
    908041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUserIsTeen: function () {
            return r;
          },
        });
      var u = n("446674"),
        a = n("697218"),
        s = n("499799");
      function r(e) {
        let t = (0, u.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          }),
          n = (0, s.useStaffTeenSafetyAssistAgeBypass)(e);
        return !1 === t || n;
      }
    },
    898436: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationBannerForChannel: function () {
            return l;
          },
        });
      var u = n("764828"),
        a = n("533855"),
        s = n("761771"),
        r = n("888203"),
        i = n("328564");
      function l(e, t) {
        let n = (0, s.useIsEligibleForInappropriateConversationWarning)({
            location: t,
          }),
          l = (0, i.useSafetyAlertsSettingOrDefault)(),
          o = (0, r.useInappropriateConversationWarningsForChannel)(e),
          d = (0, a.useChannelSafetyWarning)(
            e,
            u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
          );
        if (!!n && !!l && 0 !== o.length) {
          if (
            !o.some(
              e =>
                e.type ===
                  u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type ===
                  u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != e.dismiss_timestamp)
            )
          )
            return d;
        }
      }
    },
    888203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInappropriateConversationWarningsForChannel: function () {
            return s;
          },
        });
      var u = n("446674"),
        a = n("764828");
      function s(e) {
        let t = (0, u.useStateFromStores)(
          [a.default],
          () => a.default.getChannelSafetyWarnings(e),
          [e]
        );
        return t.filter(
          e =>
            e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
        );
      }
    },
    328564: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSafetyAlertsSettingOrDefault: function () {
            return r;
          },
        });
      var u = n("446674"),
        a = n("374363"),
        s = n("908041");
      let r = () => {
        let e = (0, u.useStateFromStores)([a.default], () => {
            var e, t, n;
            return (
              null ===
                (n =
                  null === (t = a.default.settings.privacy) || void 0 === t
                    ? void 0
                    : null === (e = t.inappropriateConversationWarnings) ||
                        void 0 === e
                      ? void 0
                      : e.value) ||
              void 0 === n ||
              n
            );
          }),
          t = (0, s.useUserIsTeen)("safety_warnings_setting");
        return t && e;
      };
    },
    563816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var u = n("37983"),
        a = n("884691"),
        s = n("627445"),
        r = n.n(s),
        i = n("446674"),
        l = n("77078"),
        o = n("240249"),
        d = n("916565"),
        f = n("355263"),
        c = n("633043"),
        E = n("823026"),
        S = n("305961"),
        I = n("697218"),
        p = n("317041"),
        A = n("782340"),
        C = n("466063"),
        T = e => {
          let t,
            {
              commandType: n,
              commandTargetId: s,
              channel: T,
              guildId: N,
              onHeightUpdate: _,
              context: g,
            } = e,
            m = (0, i.useStateFromStores)([S.default], () =>
              S.default.getGuild(null != N ? N : T.guild_id)
            ),
            v = (0, i.useStateFromStores)([I.default], () =>
              I.default.getUser(s)
            ),
            M = (0, E.default)({
              user: v,
              guildId: null == m ? void 0 : m.id,
              channel: T,
              context: g,
            }),
            {
              commands: R,
              sectionDescriptors: O,
              loading: y,
            } = o.useDiscovery(
              T,
              { commandType: n },
              { limit: p.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: h } = a.useMemo(() => {
              let e = {};
              return (
                O.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [O]),
            D = a.useRef(y.current);
          a.useEffect(() => {
            y.current !== D.current &&
              ((D.current = y.current), null == _ || _());
          }, [y, _]);
          let P = a.useCallback(
            e => {
              r(null != T, "menu item should not show if channel is null");
              let t = h[e.applicationId],
                n = null != t ? (0, f.getIconComponent)(t) : void 0;
              return (0, u.jsx)(
                l.MenuItem,
                {
                  id: e.id,
                  label: e.displayName,
                  showIconFirst: !0,
                  icon: () =>
                    null != n
                      ? (0, u.jsx)(n, {
                          channel: T,
                          section: t,
                          width: 18,
                          height: 18,
                          selectable: !1,
                        })
                      : null,
                  action: () => {
                    (0, d.default)({
                      command: e,
                      optionValues: {},
                      context: { channel: T, guild: m },
                      commandTargetId: s,
                    });
                  },
                },
                e.id
              );
            },
            [T, m, s, h]
          );
          return (
            y.current
              ? (t = (0, u.jsx)(
                  l.MenuItem,
                  {
                    id: "menu-commands-placeholder",
                    render: () => (0, u.jsx)(c.default, {}),
                    disabled: !0,
                  },
                  "menu-commands-placeholder"
                ))
              : ((t =
                  0 === R.length
                    ? (0, u.jsx)(
                        l.MenuItem,
                        {
                          id: "menu-commands-empty",
                          label:
                            A.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                          disabled: !0,
                        },
                        "menu-commands-empty"
                      )
                    : R.map(P)),
                null != M &&
                  (t = (0, u.jsxs)(u.Fragment, {
                    children: [
                      t,
                      (0, u.jsx)(l.MenuSeparator, {}, "separator"),
                      M,
                    ],
                  }))),
            (0, u.jsx)(l.MenuItem, {
              id: "apps",
              label: A.default.Messages.APPS,
              listClassName: C.list,
              children: t,
            })
          );
        };
    },
    648911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var u = n("446674"),
        a = n("42887"),
        s = n("512244");
      function r() {
        return (0, u.useStateFromStores)([a.default], () =>
          (0, s.default)(a.default)
        );
      }
    },
  },
]);
//# sourceMappingURL=da3b1dcc2e17bcb0026d.js.map

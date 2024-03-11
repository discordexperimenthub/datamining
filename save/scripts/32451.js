(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32451"],
  {
    633043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("175339"),
        s = () =>
          (0, u.jsx)("div", {
            className: r.loadingWrapper,
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
        r = n("271938"),
        s = n("42887"),
        i = n("49111"),
        l = n("353927");
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l.MediaEngineContextTypes.DEFAULT,
          n = (0, u.useStateFromStores)([r.default], () => r.default.getId()),
          o = (0, u.useStateFromStores)(
            [s.default],
            () =>
              s.default.supports(l.Features.DISABLE_VIDEO) &&
              s.default.isVideoEnabled()
          ),
          d = (0, u.useStateFromStores)(
            [s.default],
            () => s.default.isLocalVideoDisabled(n, t),
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
        r = n("135230"),
        s = n("535348"),
        i = n("782340");
      function l(e) {
        let { type: t, onConfirm: n, ...l } = e,
          o =
            t === s.SelfStreamAndVideoAlertType.STREAM
              ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          d =
            t === s.SelfStreamAndVideoAlertType.STREAM
              ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, u.jsx)(r.default, {
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
        r = n("77078"),
        s = n("255397"),
        i = n("191145"),
        l = n("782340");
      function o(e) {
        let t = (0, a.useStateFromStores)([i.default], () =>
          i.default.getVoiceParticipantsHidden(e)
        );
        return (0, u.jsx)(r.MenuCheckboxItem, {
          id: "no-video-hide",
          label: l.default.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => s.default.toggleVoiceParticipantsHidden(e, !t),
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
        r = n("77078"),
        s = n("168973"),
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
            [s.default],
            () => s.default.disableHideSelfStreamAndVideoConfirmationAlert
          );
        return n
          ? (0, u.jsx)(r.MenuCheckboxItem, {
              id: "self-video-hide",
              label: f.default.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                if (S || c) return E(!c);
                (0, r.openModal)(e =>
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
        r = n("77078"),
        s = n("648911"),
        i = n("271938"),
        l = n("42887"),
        o = n("782340"),
        d = n("325483");
      function f(e) {
        let t = (0, r.useModalContext)(),
          f = (0, a.useStateFromStores)([l.default], () =>
            l.default.isVideoEnabled()
          ),
          c = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.getId() === e
          ),
          E = (0, s.default)();
        return (!f || E) && c
          ? (0, u.jsx)(r.MenuItem, {
              id: "change-video-background",
              label: (0, u.jsx)("div", {
                className: d.item,
                children: f
                  ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM
                  : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM,
              }),
              action: function () {
                (0, r.openModalLazy)(
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
            return p;
          },
        }),
        n("424973");
      var u = n("37983"),
        a = n("884691"),
        r = n("446674"),
        s = n("77078"),
        i = n("713841"),
        l = n("79112"),
        o = n("988721"),
        d = n("592407"),
        f = n("305961"),
        c = n("957255"),
        E = n("49111"),
        S = n("782340");
      function p(e) {
        let { user: t, guildId: n, channel: p, context: I } = e,
          g = f.default.getGuild(n),
          A = (0, r.useStateFromStores)([c.default], () =>
            null != g ? c.default.can(E.Permissions.MANAGE_GUILD, g) : null
          ),
          T = (0, o.useContextIndexState)(p, !0, !0),
          C = (0, o.useUserIndexState)(!0, !0),
          { isUserApp: _, isGuildApp: N } = a.useMemo(() => {
            var e, n, u, a;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let r = Object.values(
                null !==
                  (u =
                    null === (e = T.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== u
                  ? u
                  : {}
              ),
              s = Object.values(
                null !==
                  (a =
                    null === (n = C.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== a
                  ? a
                  : {}
              );
            return {
              isGuildApp: r.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: s.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [T, C, null == t ? void 0 : t.id]),
          m = a.useCallback(() => {
            (null == g ? void 0 : g.id) != null &&
              (d.default.open(g.id, E.GuildSettingsSections.INTEGRATIONS),
              i.default.setSection(
                E.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == g ? void 0 : g.id]),
          v = a.useCallback(() => {
            l.default.open(E.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          M = I === E.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !A || M || (!N && !_)) return null;
        let R = [];
        return (
          N &&
            R.push(
              (0, u.jsx)(
                s.MenuItem,
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
                s.MenuItem,
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
        let r = null != n ? n : t,
          s = null != r && e.can(u.Permissions.CREATE_INSTANT_INVITE, r);
        return (
          s ||
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
        r = n("437822"),
        s = n("773163"),
        i = n("49111");
      async function l(e) {
        await u.default.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED },
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
            consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED,
          },
        });
      }
      function d(e) {
        return u.default.put({
          url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
          body: { consent_status: s.MessageRequestConsentStatusTypes.PENDING },
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
        r.default.getLocationMetadata();
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
            return i;
          },
        });
      var u = n("884691"),
        a = n("446674"),
        r = n("764828"),
        s = n("13427");
      function i(e, t, n) {
        let i = (0, a.useStateFromStores)(
            [r.default],
            () => r.default.getChannelSafetyWarnings(e),
            [e]
          ),
          l = i.filter(e => e.type === t);
        return (
          u.useEffect(() => {
            t === r.SafetyWarningTypes.STRANGER_DANGER &&
              l.length > 0 &&
              s.StrangerDangerTeensExperiment.trackExposure({ location: n });
          }, [t, l.length, n]),
          l.find(e => null == e.dismiss_timestamp)
        );
      }
    },
    908041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useUserIsTeen: function () {
            return s;
          },
        });
      var u = n("446674"),
        a = n("697218"),
        r = n("499799");
      function s(e) {
        let t = (0, u.useStateFromStores)([a.default], () => {
            var e;
            return null === (e = a.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.nsfwAllowed;
          }),
          n = (0, r.useStaffTeenSafetyAssistAgeBypass)(e);
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
        r = n("761771"),
        s = n("888203"),
        i = n("328564");
      function l(e, t) {
        let n = (0, r.useIsEligibleForInappropriateConversationWarning)({
            location: t,
          }),
          l = (0, i.useSafetyAlertsSettingOrDefault)(),
          o = (0, s.useInappropriateConversationWarningsForChannel)(e),
          d = (0, a.useChannelSafetyWarning)(
            e,
            u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            t
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
            return r;
          },
        });
      var u = n("446674"),
        a = n("764828");
      function r(e) {
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
            return s;
          },
        });
      var u = n("446674"),
        a = n("374363"),
        r = n("908041");
      let s = () => {
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
          t = (0, r.useUserIsTeen)("safety_warnings_setting");
        return t && e;
      };
    },
    13427: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StrangerDangerTeensExperiment: function () {
            return a;
          },
          useIsEligibleForStrangerDangerTeens: function () {
            return r;
          },
        });
      var u = n("862205");
      let a = (0, u.createExperiment)({
        kind: "user",
        id: "2023-08_self_mod_stranger_danger_teens",
        label: "Stranger Danger Teens",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable stranger danger for teens",
            config: { enabled: !0 },
          },
        ],
      });
      function r(e) {
        return a.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
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
        r = n("627445"),
        s = n.n(r),
        i = n("446674"),
        l = n("77078"),
        o = n("240249"),
        d = n("916565"),
        f = n("355263"),
        c = n("633043"),
        E = n("823026"),
        S = n("305961"),
        p = n("697218"),
        I = n("317041"),
        g = n("782340"),
        A = n("466063"),
        T = e => {
          let t,
            {
              commandType: n,
              commandTargetId: r,
              channel: T,
              guildId: C,
              onHeightUpdate: _,
              context: N,
            } = e,
            m = (0, i.useStateFromStores)([S.default], () =>
              S.default.getGuild(null != C ? C : T.guild_id)
            ),
            v = (0, i.useStateFromStores)([p.default], () =>
              p.default.getUser(r)
            ),
            M = (0, E.default)({
              user: v,
              guildId: null == m ? void 0 : m.id,
              channel: T,
              context: N,
            }),
            {
              commands: R,
              sectionDescriptors: O,
              loading: y,
            } = o.useDiscovery(
              T,
              { commandType: n },
              { limit: I.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: D } = a.useMemo(() => {
              let e = {};
              return (
                O.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [O]),
            h = a.useRef(y.current);
          a.useEffect(() => {
            y.current !== h.current &&
              ((h.current = y.current), null == _ || _());
          }, [y, _]);
          let P = a.useCallback(
            e => {
              s(null != T, "menu item should not show if channel is null");
              let t = D[e.applicationId],
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
                      commandTargetId: r,
                    });
                  },
                },
                e.id
              );
            },
            [T, m, r, D]
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
                            g.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
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
              label: g.default.Messages.APPS,
              listClassName: A.list,
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
            return s;
          },
        });
      var u = n("446674"),
        a = n("42887"),
        r = n("512244");
      function s() {
        return (0, u.useStateFromStores)([a.default], () =>
          (0, r.default)(a.default)
        );
      }
    },
  },
]);
//# sourceMappingURL=26482bab87e5be545c2d.js.map

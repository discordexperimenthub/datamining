(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72013"],
  {
    713841: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("913144"),
        u = n("592407"),
        l = n("482391"),
        i = n("611183"),
        d = {
          init() {
            a.default.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
          },
          setSection(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_SET_SECTION",
              section: e,
              sectionId: t,
            });
          },
          startEditingCommandPermissions(e) {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
              commandId: e,
            });
          },
          stopEditingCommandPermissions(e) {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
              commandId: e,
            });
          },
          startEditingIntegration(e) {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
              integrationId: e,
            });
          },
          stopEditingIntegration() {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION",
            });
          },
          updateIntegration(e) {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
              settings: e,
            });
          },
          startEditingWebhook(e) {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
              webhookId: e,
            });
          },
          stopEditingWebhook() {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK",
            });
          },
          updateWebhook(e) {
            a.default.dispatch({
              type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
              settings: e,
            });
          },
          async saveApplicationPermissions(e, t, n) {
            try {
              a.default.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await l.updateApplicationCommandPermissions({
                  applicationId: e,
                  commandId: e,
                  defaultEveryoneValue: !0,
                  defaultEverywhereValue: !0,
                  guildId: t,
                  permissions: n,
                }),
                a.default.dispatch({
                  type: "INTEGRATION_SETTINGS_SAVE_SUCCESS",
                });
            } catch (e) {
              a.default.dispatch({
                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                errors: e.body,
              });
            }
          },
          async saveIntegration(e, t) {
            try {
              a.default.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await u.default.updateIntegration(
                  e,
                  t.id,
                  t.expire_behavior,
                  t.expire_grace_period,
                  t.enable_emoticons
                ),
                a.default.dispatch({
                  type: "INTEGRATION_SETTINGS_SAVE_SUCCESS",
                });
            } catch (e) {
              a.default.dispatch({
                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                errors: e.body,
              });
            }
          },
          async saveWebhook(e, t) {
            try {
              a.default.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" }),
                await i.default.update(e, t.id, t),
                a.default.dispatch({
                  type: "INTEGRATION_SETTINGS_SAVE_SUCCESS",
                });
            } catch (e) {
              a.default.dispatch({
                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                errors: e.body,
              });
            }
          },
        };
    },
    611183: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("917351"),
        u = n.n(a),
        l = n("872717"),
        i = n("913144"),
        d = n("49111");
      let r = ["Spidey Bot", "Captain Hook"];
      var s = {
        fetchForGuild(e) {
          i.default.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            l.default
              .get({ url: d.Endpoints.GUILD_WEBHOOKS(e), oldFormErrors: !0 })
              .then(t => {
                let { body: n } = t;
                return i.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  webhooks: n,
                });
              })
              .catch(t => {
                let { body: n } = t;
                i.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  error: n.message,
                });
              });
        },
        fetchForChannel(e, t) {
          i.default.dispatch({
            type: "WEBHOOKS_FETCHING",
            guildId: e,
            channelId: t,
          }),
            l.default
              .get({ url: d.Endpoints.CHANNEL_WEBHOOKS(t), oldFormErrors: !0 })
              .then(n => {
                let { body: a } = n;
                return i.default.dispatch({
                  type: "WEBHOOKS_UPDATE",
                  guildId: e,
                  channelId: t,
                  webhooks: a,
                });
              });
        },
        create: (e, t, n) => (
          null == n && (n = r[u.random(0, r.length - 1)]),
          l.default
            .post({
              url: d.Endpoints.CHANNEL_WEBHOOKS(t),
              body: { name: n },
              oldFormErrors: !0,
            })
            .then(t => {
              let { body: n } = t;
              return (
                i.default.dispatch({
                  type: "WEBHOOK_CREATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            })
        ),
        delete: (e, t) =>
          l.default
            .delete({ url: d.Endpoints.WEBHOOK(t), oldFormErrors: !0 })
            .then(() => {
              i.default.dispatch({
                type: "WEBHOOK_DELETE",
                guildId: e,
                webhookId: t,
              });
            }),
        update: (e, t, n) =>
          l.default
            .patch({ url: d.Endpoints.WEBHOOK(t), body: n, oldFormErrors: !0 })
            .then(t => {
              let { body: n } = t;
              return (
                i.default.dispatch({
                  type: "WEBHOOK_UPDATE",
                  guildId: e,
                  webhook: n,
                }),
                n
              );
            }),
      };
    },
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("35466");
      n.es(a, t);
    },
    633043: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("77078"),
        l = n("175339"),
        i = () =>
          (0, a.jsx)("div", {
            className: l.loadingWrapper,
            children: (0, a.jsx)(u.Dots, { dotRadius: 4, themed: !0 }),
          });
    },
    535348: function (e, t, n) {
      "use strict";
      var a, u;
      n.r(t),
        n.d(t, {
          SelfStreamAndVideoAlertType: function () {
            return a;
          },
        }),
        ((u = a || (a = {}))[(u.STREAM = 0)] = "STREAM"),
        (u[(u.VIDEO = 1)] = "VIDEO");
    },
    301603: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("446674"),
        u = n("629109"),
        l = n("271938"),
        i = n("42887"),
        d = n("49111"),
        r = n("353927");
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.MediaEngineContextTypes.DEFAULT,
          n = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
          s = (0, a.useStateFromStores)(
            [i.default],
            () =>
              i.default.supports(r.Features.DISABLE_VIDEO) &&
              i.default.isVideoEnabled()
          ),
          o = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.isLocalVideoDisabled(n, t),
            [n, t]
          ),
          c = null == e || e === n;
        return [
          c && (s || o),
          o,
          e => {
            let a = e
              ? d.VideoToggleState.DISABLED
              : d.VideoToggleState.MANUAL_ENABLED;
            u.default.setDisableLocalVideo(n, a, t);
          },
        ];
      }
    },
    632616: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("452804"),
        l = n("135230"),
        i = n("535348"),
        d = n("782340");
      function r(e) {
        let { type: t, onConfirm: n, ...r } = e,
          s =
            t === i.SelfStreamAndVideoAlertType.STREAM
              ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          o =
            t === i.SelfStreamAndVideoAlertType.STREAM
              ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, a.jsx)(l.default, {
          confirmText: d.default.Messages.CONFIRM,
          secondaryConfirmText: d.default.Messages.DONT_ASK_AGAIN,
          title: s,
          cancelText: d.default.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            u.default.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: o,
          ...r,
        });
      }
    },
    243288: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("446674"),
        l = n("77078"),
        i = n("255397"),
        d = n("191145"),
        r = n("782340");
      function s(e) {
        let t = (0, u.useStateFromStores)([d.default], () =>
          d.default.getVoiceParticipantsHidden(e)
        );
        return (0, a.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => i.default.toggleVoiceParticipantsHidden(e, !t),
        });
      }
    },
    321135: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var u = n("446674"),
        l = n("77078"),
        i = n("168973"),
        d = n("301603"),
        r = n("632616"),
        s = n("535348"),
        o = n("353927"),
        c = n("782340");
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.MediaEngineContextTypes.DEFAULT,
          [n, f, E] = (0, d.default)(e, t),
          S = (0, u.useStateFromStores)(
            [i.default],
            () => i.default.disableHideSelfStreamAndVideoConfirmationAlert
          );
        return n
          ? (0, a.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.default.Messages.SHOW_SELF_VIDEO,
              checked: !f,
              action: () => {
                if (S || f) return E(!f);
                (0, l.openModal)(e =>
                  (0, a.jsx)(r.default, {
                    ...e,
                    type: s.SelfStreamAndVideoAlertType.VIDEO,
                    onConfirm: () => E(!f),
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
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("446674"),
        l = n("77078"),
        i = n("648911"),
        d = n("271938"),
        r = n("42887"),
        s = n("782340"),
        o = n("325483");
      function c(e) {
        let t = (0, l.useModalContext)(),
          c = (0, u.useStateFromStores)([r.default], () =>
            r.default.isVideoEnabled()
          ),
          f = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.getId() === e
          ),
          E = (0, i.default)();
        return (!c || E) && f
          ? (0, a.jsx)(l.MenuItem, {
              id: "change-video-background",
              label: (0, a.jsx)("div", {
                className: o.item,
                children: c
                  ? s.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM
                  : s.default.Messages.CAMERA_PREVIEW_MENU_ITEM,
              }),
              action: function () {
                (0, l.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .el("381736")
                      .then(n.bind(n, "381736"));
                    return t => (0, a.jsx)(e, { ...t, videoEnabled: c });
                  },
                  { modalKey: "camera-preview", contextKey: t }
                );
              },
            })
          : null;
      }
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("627445"),
        l = n.n(u),
        i = n("77078"),
        d = n("845579"),
        r = n("662255"),
        s = n("306160");
      function o(e) {
        let { id: t, label: n, onSuccess: u, shiftId: o, showIconFirst: c } = e,
          f = d.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !s.SUPPORTS_COPY || null == t) return null;
        let E = "devmode-copy-id-".concat(t);
        return (0, a.jsx)(
          i.MenuItem,
          {
            id: E,
            label: n,
            action: function (e) {
              let n = null != o && e.shiftKey ? o : t;
              l(null != n, "cannot copy null text"),
                (0, s.copy)(n),
                null == u || u();
            },
            icon: r.default,
            showIconFirst: c,
          },
          E
        );
      }
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("446674"),
        u = n("76393");
      function l() {
        return (0, a.useStateFromStores)(
          [u.default],
          () =>
            null != u.default.getRemoteSessionId() ||
            null != u.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    823026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("424973");
      var a = n("37983"),
        u = n("884691"),
        l = n("446674"),
        i = n("77078"),
        d = n("713841"),
        r = n("79112"),
        s = n("988721"),
        o = n("592407"),
        c = n("305961"),
        f = n("957255"),
        E = n("49111"),
        S = n("782340");
      function T(e) {
        let { user: t, guildId: n, channel: T, context: _ } = e,
          I = c.default.getGuild(n),
          A = (0, l.useStateFromStores)([f.default], () =>
            null != I ? f.default.can(E.Permissions.MANAGE_GUILD, I) : null
          ),
          p = (0, s.useContextIndexState)(T, !0, !0),
          N = (0, s.useUserIndexState)(!0, !0),
          { isUserApp: m, isGuildApp: h } = u.useMemo(() => {
            var e, n, a, u;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (a =
                    null === (e = p.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== a
                  ? a
                  : {}
              ),
              i = Object.values(
                null !==
                  (u =
                    null === (n = N.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== u
                  ? u
                  : {}
              );
            return {
              isGuildApp: l.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
              isUserApp: i.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [p, N, null == t ? void 0 : t.id]),
          O = u.useCallback(() => {
            (null == I ? void 0 : I.id) != null &&
              (o.default.open(I.id, E.GuildSettingsSections.INTEGRATIONS),
              d.default.setSection(
                E.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == I ? void 0 : I.id]),
          g = u.useCallback(() => {
            r.default.open(E.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          M = _ === E.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !A || M || (!h && !m)) return null;
        let C = [];
        return (
          h &&
            C.push(
              (0, a.jsx)(
                i.MenuItem,
                {
                  id: "manage-integration",
                  label: S.default.Messages.MANAGE_INTEGRATION,
                  action: O,
                },
                "manage-integration"
              )
            ),
          m &&
            C.push(
              (0, a.jsx)(
                i.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: S.default.Messages.MANAGE_AUTHORIZED_APP,
                  action: g,
                },
                "manage-authorized-app"
              )
            ),
          C
        );
      }
    },
    482391: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearIntegrationPermissions: function () {
            return r;
          },
          editPermissions: function () {
            return s;
          },
          getApplicationCommands: function () {
            return o;
          },
          getApplicationCommandPermissions: function () {
            return c;
          },
          initIntegrationPermissions: function () {
            return f;
          },
          resetPermissions: function () {
            return E;
          },
          updateApplicationCommandPermissions: function () {
            return S;
          },
        });
      var a = n("872717"),
        u = n("913144"),
        l = n("507217"),
        i = n("389153"),
        d = n("49111");
      function r() {
        u.default.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function s(e, t, n) {
        u.default.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function o(e, t) {
        a.default.get(d.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
          n => {
            u.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: n.body.application_commands,
              guildId: e,
              permissions: n.body.permissions,
            });
          },
          () => {
            u.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: t,
            });
          }
        );
      }
      async function c(e, t, n) {
        let l = [];
        try {
          let u = await a.default.get(
            d.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
          );
          u.ok && (l = u.body.permissions);
        } catch (a) {
          if (404 !== a.status) {
            u.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: e,
              commandId: n,
              guildId: t,
            });
            return;
          }
        }
        u.default.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: e,
          commandId: n,
          guildId: t,
          permissions: l,
        });
      }
      function f(e) {
        u.default.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function E(e) {
        u.default.dispatch({
          commandId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_RESET",
        });
      }
      async function S(e) {
        let {
            applicationId: t,
            commandId: n,
            defaultEveryoneValue: a,
            defaultEverywhereValue: d,
            guildId: r,
            permissions: s,
          } = e,
          o =
            n === t
              ? (function (e, t, n, a) {
                  if (!n || !a) return t;
                  let u = { [e]: n, [(0, i.allChannelsSentinel)(e)]: a };
                  return t.filter(e => {
                    let t = u[e.id];
                    return null == t || e.permission !== t;
                  });
                })(r, s, a, d)
              : s,
          c = await l.updateApplicationGuildCommandPermissions(t, r, n, o);
        c.ok &&
          u.default.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: r,
            permissions: c.body.permissions,
          });
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return u;
          },
        });
      var a = n("49111");
      function u(e, t, n, u) {
        let l = null != n ? n : t,
          i = null != l && e.can(a.Permissions.CREATE_INSTANT_INVITE, l);
        return (
          i ||
          (null != t && null != t.vanityURLCode) ||
          (null == u ? void 0 : u.invite_code) != null
        );
      }
    },
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return A;
          },
          inviteUserToStage: function () {
            return p;
          },
          audienceAckRequestToSpeak: function () {
            return N;
          },
          moveSelfToAudience: function () {
            return m;
          },
          setUserSuppress: function () {
            return h;
          },
          moveUserToAudience: function () {
            return O;
          },
          setEveryoneRolePermissionAllowed: function () {
            return g;
          },
          startStage: function () {
            return M;
          },
          editStage: function () {
            return C;
          },
          endStage: function () {
            return R;
          },
        });
      var a = n("627445"),
        u = n.n(a),
        l = n("316693"),
        i = n("872717"),
        d = n("450911");
      n("851387");
      var r = n("798609"),
        s = n("716241"),
        o = n("18494"),
        c = n("800762"),
        f = n("991170"),
        E = n("716214"),
        S = n("230324"),
        T = n("738983"),
        _ = n("808422"),
        I = n("49111");
      function A(e, t) {
        let n = e.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          t &&
            (0, s.trackWithMetadata)(
              I.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, S.getStageChannelMetadata)(e) }
            ),
          i.default.patch({
            url: I.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function p(e, t) {
        let n = e.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          i.default.patch({
            url: I.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function N(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null == e ? void 0 : e.getGuildId();
        u(null != a, "This channel cannot be guildless.");
        let l = c.default.getVoiceStateForChannel(e.id),
          d = (0, _.getAudienceRequestToSpeakState)(l);
        return (
          d ===
            _.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, s.trackWithMetadata)(I.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, S.getStageChannelMetadata)(e),
            }),
          i.default.patch({
            url: I.Endpoints.UPDATE_VOICE_STATE(a),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function m(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          u(null != t, "This channel cannot be guildless."),
          i.default.patch({
            url: I.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function h(e, t, n) {
        let a = e.getGuildId();
        return (
          u(null != a, "This channel cannot be guildless."),
          i.default.patch({
            url: I.Endpoints.UPDATE_VOICE_STATE(a, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function O(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          h(t, e.id, !0),
          i.default.patch({
            url: I.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function g(e, t, n) {
        let a = e.getGuildId();
        u(null != a, "Channel cannot be guildless");
        let i = e.permissionOverwrites[a],
          s = {
            id: a,
            type: r.PermissionOverwriteType.ROLE,
            allow: f.default.NONE,
            deny: f.default.NONE,
            ...i,
          };
        n
          ? ((s.allow = l.default.add(s.allow, t)),
            (s.deny = l.default.remove(s.deny, t)))
          : ((s.allow = l.default.remove(s.allow, t)),
            (s.deny = l.default.add(s.deny, t))),
          d.default.updatePermissionOverwrite(e.id, s);
      }
      async function M(e, t, n, a) {
        if ("" === t) return;
        let u = o.default.getVoiceChannelId() === e.id;
        !u && (0, E.connectToStage)(e);
        let l = await (0, T.startStageInstance)(e.id, t, n, a);
        return N(e, !1, !0), l;
      }
      async function C(e, t, n) {
        if ("" === t) return;
        let a = await (0, T.updateStageInstance)(e.id, t, n);
        return a;
      }
      async function R(e) {
        await (0, T.endStageInstance)(e.id);
      }
    },
    230324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          summarizeUsernamesParticipating: function () {
            return c;
          },
          getRemoveModeratorTooltipHint: function () {
            return f;
          },
          getStageChannelMetadata: function () {
            return E;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var a = n("945956"),
        u = n("387111"),
        l = n("991170"),
        i = n("834052"),
        d = n("837979"),
        r = n("49111"),
        s = n("606762"),
        o = n("782340");
      function c(e, t, n, a) {
        let l = t[0],
          i = u.default.getName(e, n, l),
          d = null != a ? a : t.length;
        return 1 === d && null != l
          ? i
          : null == l
            ? o.default.Messages.SPEAKING_COUNT.format({ count: d })
            : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: i,
                count: d - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case s.RowType.OWNER:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case s.RowType.ADMINISTRATOR:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case s.RowType.MEMBER:
          case s.RowType.ROLE:
            return t
              ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case s.RowType.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let t = i.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: a.default.getMediaSessionId(),
          request_to_speak_state: l.default.canEveryoneRole(
            r.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? d.RequestToSpeakPermissionStates.EVERYONE
            : d.RequestToSpeakPermissionStates.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    738983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          startStageInstance: function () {
            return l;
          },
          updateStageInstance: function () {
            return i;
          },
          endStageInstance: function () {
            return d;
          },
        });
      var a = n("872717"),
        u = n("49111");
      async function l(e, t, n, l, i) {
        let d = await a.default.post({
          url: u.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: i,
            send_start_notification: l,
          },
        });
        return d.body;
      }
      async function i(e, t, n) {
        let l = await a.default.patch({
          url: u.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return l.body;
      }
      function d(e) {
        return a.default.delete(u.Endpoints.STAGE_INSTANCE(e));
      }
    },
    77445: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("446674"),
        u = n("271938"),
        l = n("18494"),
        i = n("808422");
      function d() {
        let e = (0, a.useStateFromStores)([l.default], () =>
            l.default.getVoiceChannelId()
          ),
          t = (0, a.useStateFromStores)([u.default], () => u.default.getId()),
          n = (0, i.default)(t, e);
        return (
          n === i.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    130563: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("446674"),
        u = n("42203"),
        l = n("18494");
      function i() {
        return (0, a.useStateFromStores)([l.default, u.default], () => {
          let e = l.default.getVoiceChannelId();
          if (null != e) {
            let t = u.default.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    726750: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("446674"),
        l = n("77078"),
        i = n("305961"),
        d = n("697218"),
        r = n("800762"),
        s = n("244480"),
        o = n("619395"),
        c = n("325861"),
        f = n("77445"),
        E = n("130563"),
        S = n("782340");
      function T(e) {
        var t;
        let n = (0, E.default)(),
          T = null == n ? void 0 : n.id,
          _ = null == n ? void 0 : n.guild_id,
          I = (0, u.useStateFromStores)(
            [i.default],
            () => i.default.getGuild(_),
            [_]
          ),
          A = (0, u.useStateFromStores)(
            [r.default],
            () =>
              null != T ? r.default.getVoiceStateForChannel(T, e.id) : null,
            [T, e.id]
          ),
          p =
            (null === (t = d.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id) === e.id,
          N = (0, f.default)(),
          m = (0, u.useStateFromStores)(
            [c.default],
            () => c.default.getPermissionsForUser(e.id, T),
            [T, e.id]
          ),
          h = (0, o.useCanModerateRequestToSpeak)(T);
        if (null == n || null == I || null == A || m.speaker) return null;
        let O = () => {
          p
            ? (0, s.audienceAckRequestToSpeak)(n, !1)
            : (0, s.inviteUserToStage)(n, e.id);
        };
        return h
          ? (0, a.jsx)(l.MenuItem, {
              id: "invite-speaker",
              label: p
                ? S.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : S.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: O,
            })
          : N && p
            ? (0, a.jsx)(l.MenuItem, {
                id: "invite-speaker",
                label:
                  S.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: O,
              })
            : null;
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return I;
          },
          useCanStartPublicThread: function () {
            return A;
          },
          computeCanStartPublicThread: function () {
            return p;
          },
          useCanStartPrivateThread: function () {
            return N;
          },
          useCanStartThread: function () {
            return m;
          },
          useCanViewThreadForMessage: function () {
            return O;
          },
          useHasActiveThreads: function () {
            return g;
          },
          useCanManageThread: function () {
            return M;
          },
          useCanUnarchiveThread: function () {
            return v;
          },
          canUnarchiveThread: function () {
            return y;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return D;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return P;
          },
          computeIsReadOnlyThread: function () {
            return b;
          },
          useIsThreadModerator: function () {
            return U;
          },
          useCanJoinThreadVoice: function () {
            return L;
          },
          useIsNonModInLockedThread: function () {
            return F;
          },
        });
      var a = n("917351"),
        u = n.n(a),
        l = n("316693"),
        i = n("446674"),
        d = n("296892"),
        r = n("889014"),
        s = n("913491"),
        o = n("233069"),
        c = n("271938"),
        f = n("42203"),
        E = n("957255"),
        S = n("299039"),
        T = n("401690"),
        _ = n("49111");
      let I = (0, d.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function A(e, t) {
        let n = (0, i.useStateFromStores)(
          [E.default],
          () => {
            let t = e.isForumLikeChannel()
              ? _.Permissions.SEND_MESSAGES
              : l.default.combine(
                  _.Permissions.CREATE_PUBLIC_THREADS,
                  _.Permissions.READ_MESSAGE_HISTORY
                );
            return E.default.can(t, e);
          },
          [e]
        );
        return h(n, e, t);
      }
      function p(e, t) {
        let n = e.isForumLikeChannel()
            ? _.Permissions.SEND_MESSAGES
            : l.default.combine(
                _.Permissions.CREATE_PUBLIC_THREADS,
                _.Permissions.READ_MESSAGE_HISTORY
              ),
          a = E.default.can(n, e);
        return h(a, e, t);
      }
      function N(e) {
        let t = (0, i.useStateFromStores)(
          [E.default],
          () =>
            E.default.can(
              l.default.combine(_.Permissions.CREATE_PRIVATE_THREADS),
              e
            ),
          [e]
        );
        return e.type === _.ChannelTypes.GUILD_TEXT && h(t, e);
      }
      function m(e) {
        let t = A(e),
          n = N(e);
        return t || n;
      }
      function h(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !o.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(_.MessageFlags.HAS_THREAD) || (0, s.default)(n)))
          ) && !0
        );
      }
      function O(e) {
        let t = (0, i.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(S.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, i.useStateFromStores)(
            [E.default],
            () => E.default.can(_.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(_.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function g(e) {
        return (0, i.useStateFromStoresObject)([T.default, E.default], () => {
          let t = T.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = T.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            a = T.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            l = u(n).some(e =>
              E.default.can(_.Permissions.VIEW_CHANNEL, e.channel)
            ),
            i = u(t).some(
              e =>
                !(e.channel.id in n) &&
                E.default.can(_.Permissions.VIEW_CHANNEL, e.channel)
            ),
            d = u(a).some(e => E.default.can(_.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: l || i || d,
            hasMoreActiveThreads: d || i,
          };
        });
      }
      function M(e) {
        let t = (0, i.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, i.useStateFromStores)(
            [E.default],
            () => null != t && E.default.can(_.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          a = (0, i.useStateFromStores)([c.default], () => c.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === a || !1)))
        );
      }
      function C(e, t) {
        return null != e && t.can(_.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function R(e, t, n) {
        var a;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (a = e.threadMetadata) || void 0 === a ? void 0 : a.locked)
            ? n
            : t)
        );
      }
      function v(e) {
        let t = (0, i.useStateFromStores)([E.default], () => C(e, E.default)),
          n = U(e);
        return R(e, t, n);
      }
      function y(e) {
        let t = C(e, E.default),
          n = (function (e) {
            return G(e, E.default);
          })(e);
        return R(e, t, n);
      }
      function D(e) {
        var t;
        let n = (0, i.useStateFromStores)(
          [E.default],
          () =>
            null != e &&
            E.default.can(_.Permissions.SEND_MESSAGES_IN_THREADS, e)
        );
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              n))
        );
      }
      function P(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              E.default.can(_.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function b(e) {
        let t = E.default.can(_.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function G(e, t) {
        return null != e && t.can(_.Permissions.MANAGE_THREADS, e);
      }
      function U(e) {
        return (0, i.useStateFromStores)([E.default], () => G(e, E.default));
      }
      function L(e) {
        let t = (0, r.default)(),
          n = (0, i.useStateFromStores)([E.default], () =>
            E.default.can(_.Permissions.CONNECT, e)
          ),
          a = D(e),
          u = I.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && u && n && a;
      }
      function F(e) {
        let t = U(e);
        return e.isLockedThread() && !t;
      }
    },
    563816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983"),
        u = n("884691"),
        l = n("627445"),
        i = n.n(l),
        d = n("446674"),
        r = n("77078"),
        s = n("240249"),
        o = n("916565"),
        c = n("355263"),
        f = n("633043"),
        E = n("823026"),
        S = n("305961"),
        T = n("697218"),
        _ = n("317041"),
        I = n("782340"),
        A = n("466063"),
        p = e => {
          let t,
            {
              commandType: n,
              commandTargetId: l,
              channel: p,
              guildId: N,
              onHeightUpdate: m,
              context: h,
            } = e,
            O = (0, d.useStateFromStores)([S.default], () =>
              S.default.getGuild(null != N ? N : p.guild_id)
            ),
            g = (0, d.useStateFromStores)([T.default], () =>
              T.default.getUser(l)
            ),
            M = (0, E.default)({
              user: g,
              guildId: null == O ? void 0 : O.id,
              channel: p,
              context: h,
            }),
            {
              commands: C,
              sectionDescriptors: R,
              loading: v,
            } = s.useDiscovery(
              p,
              { commandType: n },
              { limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: y } = u.useMemo(() => {
              let e = {};
              return (
                R.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [R]),
            D = u.useRef(v.current);
          u.useEffect(() => {
            v.current !== D.current &&
              ((D.current = v.current), null == m || m());
          }, [v, m]);
          let P = u.useCallback(
            e => {
              i(null != p, "menu item should not show if channel is null");
              let t = y[e.applicationId],
                n = null != t ? (0, c.getIconComponent)(t) : void 0;
              return (0, a.jsx)(
                r.MenuItem,
                {
                  id: e.id,
                  label: e.displayName,
                  showIconFirst: !0,
                  icon: () =>
                    null != n
                      ? (0, a.jsx)(n, {
                          channel: p,
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
                      context: { channel: p, guild: O },
                      commandTargetId: l,
                    });
                  },
                },
                e.id
              );
            },
            [p, O, l, y]
          );
          return (
            v.current
              ? (t = (0, a.jsx)(
                  r.MenuItem,
                  {
                    id: "menu-commands-placeholder",
                    render: () => (0, a.jsx)(f.default, {}),
                    disabled: !0,
                  },
                  "menu-commands-placeholder"
                ))
              : ((t =
                  0 === C.length
                    ? (0, a.jsx)(
                        r.MenuItem,
                        {
                          id: "menu-commands-empty",
                          label:
                            I.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                          disabled: !0,
                        },
                        "menu-commands-empty"
                      )
                    : C.map(P)),
                null != M &&
                  (t = (0, a.jsxs)(a.Fragment, {
                    children: [
                      t,
                      (0, a.jsx)(r.MenuSeparator, {}, "separator"),
                      M,
                    ],
                  }))),
            (0, a.jsx)(r.MenuItem, {
              id: "apps",
              label: I.default.Messages.APPS,
              listClassName: A.list,
              children: t,
            })
          );
        };
    },
    502533: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("446674"),
        l = n("77078"),
        i = n("255397"),
        d = n("191145"),
        r = n("800762"),
        s = n("49111"),
        o = n("782340");
      function c(e, t) {
        let n = (0, u.useStateFromStores)(
            [d.default],
            () => e === d.default.getSelectedParticipantId(t),
            [t, e]
          ),
          c = (0, u.useStateFromStores)(
            [d.default, r.default],
            () => {
              let n = r.default.isInChannel(t, e) && r.default.hasVideo(t),
                a = d.default.getLayout(t),
                u =
                  a === s.ChannelLayouts.MINIMUM ||
                  a === s.ChannelLayouts.NORMAL;
              return !n || u;
            },
            [t, e]
          );
        return c
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "focus-video",
              label: n
                ? o.default.Messages.UNFOCUS_PARTICIPANT
                : o.default.Messages.FOCUS_PARTICIPANT,
              action: () => i.default.selectParticipant(t, n ? null : e),
            });
      }
    },
    692986: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("446674"),
        l = n("77078"),
        i = n("404118"),
        d = n("629109"),
        r = n("235004"),
        s = n("42887"),
        o = n("945956"),
        c = n("162771"),
        f = n("697218"),
        E = n("423487"),
        S = n("599110"),
        T = n("49111"),
        _ = n("353927"),
        I = n("782340"),
        A = n("622393");
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _.MediaEngineContextTypes.DEFAULT,
          n = (0, u.useStateFromStores)([f.default], () => {
            var t;
            return (
              (null === (t = f.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id) === e
            );
          }),
          p = (0, u.useStateFromStores)([r.default], () =>
            r.default.isLocalSoundboardMuted(e)
          ),
          {
            muted: N,
            deafened: m = !1,
            localVideoDisabled: h = !1,
            localVideoAutoDisabled: O = !1,
          } = (0, u.useStateFromStoresObject)(
            [s.default],
            () =>
              n
                ? {
                    muted: s.default.isSelfMute(t),
                    deafened: s.default.isSelfDeaf(t),
                  }
                : {
                    muted: s.default.isLocalMute(e, t),
                    localVideoDisabled: s.default.isLocalVideoDisabled(e, t),
                    localVideoAutoDisabled: s.default.isLocalVideoAutoDisabled(
                      e,
                      t
                    ),
                  },
            [n, t, e]
          ),
          g =
            s.default.supports(_.Features.DISABLE_VIDEO) && !n
              ? (0, a.jsx)(
                  l.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: I.default.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (O) {
                        i.default.show({
                          title: I.default.Messages.UNSTABLE_CONNECTION,
                          body: I.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: I.default.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: I.default.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            d.default.setDisableLocalVideo(
                              e,
                              T.VideoToggleState.MANUAL_ENABLED
                            ),
                        });
                        return;
                      }
                      let n = h
                        ? T.VideoToggleState.MANUAL_ENABLED
                        : T.VideoToggleState.DISABLED;
                      d.default.setDisableLocalVideo(e, n, t);
                    },
                    checked: h,
                    subtext: O
                      ? (0, a.jsxs)("div", {
                          className: A.videoPaused,
                          children: [
                            (0, a.jsx)(E.default, {
                              width: 12,
                              className: A.warningCircle,
                            }),
                            I.default.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video"
                )
              : null,
          M = n
            ? null
            : (0, a.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: I.default.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let n = o.default.getRTCConnection();
                    S.default.track(
                      T.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED,
                      {
                        guild_id: c.default.getGuildId(),
                        target_user_id: e,
                        media_session_id:
                          null == n ? void 0 : n.getMediaSessionId(),
                        parent_media_session_id:
                          null == n ? void 0 : n.parentMediaSessionId,
                        mute_soundboard: !p,
                      }
                    ),
                      d.default.toggleLocalSoundboardMute(e, t);
                  },
                  checked: p,
                },
                "soundboard-sound-mute"
              );
        return n
          ? [
              (0, a.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "mute",
                  label: I.default.Messages.SOUND_MUTE,
                  action: () => d.default.toggleSelfMute({ context: t }),
                  checked: N,
                },
                "self-mute"
              ),
              (0, a.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: I.default.Messages.DEAFEN,
                  action: () => d.default.toggleSelfDeaf({ context: t }),
                  checked: m,
                },
                "self-deafen"
              ),
              g,
            ]
          : [
              (0, a.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "mute",
                  label: I.default.Messages.SOUND_MUTE,
                  action: () => d.default.toggleLocalMute(e, t),
                  checked: N,
                },
                "self-mute"
              ),
              M,
              g,
            ];
      }
    },
    816106: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("446674"),
        l = n("77078"),
        i = n("629109"),
        d = n("42887"),
        r = n("697218"),
        s = n("829536"),
        o = n("773336"),
        c = n("353927"),
        f = n("782340");
      function E(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.MediaEngineContextTypes.DEFAULT,
          E = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.getLocalVolume(e, n),
            [e, n]
          ),
          S =
            e ===
            (null === (t = r.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          T = n === c.MediaEngineContextTypes.STREAM;
        return S
          ? null
          : (0, a.jsx)(l.MenuControlItem, {
              id: "user-volume",
              label: T
                ? f.default.Messages.STREAM_VOLUME
                : f.default.Messages.USER_VOLUME,
              control: (t, u) =>
                (0, a.jsx)(l.MenuSliderControl, {
                  ...t,
                  ref: u,
                  value: (0, s.amplitudeToPerceptual)(E),
                  maxValue: o.isPlatformEmbedded ? 200 : 100,
                  onChange: t =>
                    i.default.setLocalVolume(
                      e,
                      (0, s.perceptualToAmplitude)(t),
                      n
                    ),
                  "aria-label": T
                    ? f.default.Messages.STREAM_VOLUME
                    : f.default.Messages.USER_VOLUME,
                }),
            });
      }
    },
    648911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("446674"),
        u = n("42887"),
        l = n("512244");
      function i() {
        return (0, a.useStateFromStores)([u.default], () =>
          (0, l.default)(u.default)
        );
      }
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("469563"),
        l = n("35647"),
        i = n("75196"),
        d = (0, u.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: u = "currentColor",
              foreground: l,
              ...d
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(d),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: l,
                fill: u,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          l.IdIcon,
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
            return d;
          },
        }),
        n("70102");
      var a = n("281071"),
        u = n("773336"),
        l = n("50885");
      let i = (() => {
        if (u.isPlatformEmbedded) return null != l.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function d(e) {
        return (
          !!i && (u.isPlatformEmbedded ? (l.default.copy(e), !0) : a.copy(e))
        );
      }
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var u = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...r
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: d,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
    265586: function (e, t, n) {
      "use strict";
      var a, u;
      n.r(t),
        n.d(t, {
          CollectiblesItemType: function () {
            return a;
          },
        }),
        ((u = a || (a = {}))[(u.NONE = 100)] = "NONE"),
        (u[(u.AVATAR_DECORATION = 0)] = "AVATAR_DECORATION"),
        (u[(u.PROFILE_EFFECT = 1)] = "PROFILE_EFFECT");
    },
    281071: function (e, t, n) {
      "use strict";
      function a(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          a = window.getSelection(),
          u = document.createElement("textarea");
        (u.value = e),
          (u.contentEditable = "true"),
          (u.style.visibility = "none"),
          t.appendChild(u),
          n.selectNodeContents(u),
          null == a || a.removeAllRanges(),
          null == a || a.addRange(n),
          u.focus(),
          u.setSelectionRange(0, e.length);
        let l = document.execCommand("copy");
        return t.removeChild(u), l;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return a;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=032295a18b4a91466111.js.map

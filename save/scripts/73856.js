(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73856"],
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
        l = n("592407"),
        u = n("482391"),
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
                await u.updateApplicationCommandPermissions({
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
                await l.default.updateIntegration(
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
            return o;
          },
        });
      var a = n("917351"),
        l = n.n(a),
        u = n("872717"),
        i = n("913144"),
        d = n("49111");
      let s = ["Spidey Bot", "Captain Hook"];
      var o = {
        fetchForGuild(e) {
          i.default.dispatch({ type: "WEBHOOKS_FETCHING", guildId: e }),
            u.default
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
            u.default
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
          null == n && (n = s[l.random(0, s.length - 1)]),
          u.default
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
          u.default
            .delete({ url: d.Endpoints.WEBHOOK(t), oldFormErrors: !0 })
            .then(() => {
              i.default.dispatch({
                type: "WEBHOOK_DELETE",
                guildId: e,
                webhookId: t,
              });
            }),
        update: (e, t, n) =>
          u.default
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
      var l = n("77078"),
        u = n("175339"),
        i = () =>
          (0, a.jsx)("div", {
            className: u.loadingWrapper,
            children: (0, a.jsx)(l.Dots, { dotRadius: 4, themed: !0 }),
          });
    },
    535348: function (e, t, n) {
      "use strict";
      var a, l;
      n.r(t),
        n.d(t, {
          SelfStreamAndVideoAlertType: function () {
            return a;
          },
        }),
        ((l = a || (a = {}))[(l.STREAM = 0)] = "STREAM"),
        (l[(l.VIDEO = 1)] = "VIDEO");
    },
    301603: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("446674"),
        l = n("629109"),
        u = n("271938"),
        i = n("42887"),
        d = n("49111"),
        s = n("353927");
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.MediaEngineContextTypes.DEFAULT,
          n = (0, a.useStateFromStores)([u.default], () => u.default.getId()),
          o = (0, a.useStateFromStores)(
            [i.default],
            () =>
              i.default.supports(s.Features.DISABLE_VIDEO) &&
              i.default.isVideoEnabled()
          ),
          r = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.isLocalVideoDisabled(n, t),
            [n, t]
          ),
          c = null == e || e === n;
        return [
          c && (o || r),
          r,
          e => {
            let a = e
              ? d.VideoToggleState.DISABLED
              : d.VideoToggleState.MANUAL_ENABLED;
            l.default.setDisableLocalVideo(n, a, t);
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
      var a = n("37983");
      n("884691");
      var l = n("452804"),
        u = n("135230"),
        i = n("535348"),
        d = n("782340");
      function s(e) {
        let { type: t, onConfirm: n, ...s } = e,
          o =
            t === i.SelfStreamAndVideoAlertType.STREAM
              ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          r =
            t === i.SelfStreamAndVideoAlertType.STREAM
              ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, a.jsx)(u.default, {
          confirmText: d.default.Messages.CONFIRM,
          secondaryConfirmText: d.default.Messages.DONT_ASK_AGAIN,
          title: o,
          cancelText: d.default.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            l.default.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              n();
          },
          body: r,
          ...s,
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
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        i = n("255397"),
        d = n("191145"),
        s = n("782340");
      function o(e) {
        let t = (0, l.useStateFromStores)([d.default], () =>
          d.default.getVoiceParticipantsHidden(e)
        );
        return (0, a.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
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
      var l = n("446674"),
        u = n("77078"),
        i = n("168973"),
        d = n("301603"),
        s = n("632616"),
        o = n("535348"),
        r = n("353927"),
        c = n("782340");
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.MediaEngineContextTypes.DEFAULT,
          [n, f, E] = (0, d.default)(e, t),
          S = (0, l.useStateFromStores)(
            [i.default],
            () => i.default.disableHideSelfStreamAndVideoConfirmationAlert
          );
        return n
          ? (0, a.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.default.Messages.SHOW_SELF_VIDEO,
              checked: !f,
              action: () => {
                if (S || f) return E(!f);
                (0, u.openModal)(e =>
                  (0, a.jsx)(s.default, {
                    ...e,
                    type: o.SelfStreamAndVideoAlertType.VIDEO,
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
      var l = n("446674"),
        u = n("77078"),
        i = n("648911"),
        d = n("271938"),
        s = n("42887"),
        o = n("782340"),
        r = n("325483");
      function c(e) {
        let t = (0, u.useModalContext)(),
          c = (0, l.useStateFromStores)([s.default], () =>
            s.default.isVideoEnabled()
          ),
          f = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.getId() === e
          ),
          E = (0, i.default)();
        return (!c || E) && f
          ? (0, a.jsx)(u.MenuItem, {
              id: "change-video-background",
              label: (0, a.jsx)("div", {
                className: r.item,
                children: c
                  ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM
                  : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM,
              }),
              action: function () {
                (0, u.openModalLazy)(
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
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("627445"),
        u = n.n(l),
        i = n("77078"),
        d = n("845579"),
        s = n("662255"),
        o = n("306160");
      function r(e) {
        let { id: t, label: n, onSuccess: l, shiftId: r, showIconFirst: c } = e,
          f = d.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !o.SUPPORTS_COPY || null == t) return null;
        let E = "devmode-copy-id-".concat(t);
        return (0, a.jsx)(
          i.MenuItem,
          {
            id: E,
            label: n,
            action: function (e) {
              let n = null != r && e.shiftKey ? r : t;
              u(null != n, "cannot copy null text"),
                (0, o.copy)(n),
                null == l || l();
            },
            icon: s.default,
            showIconFirst: c,
          },
          E
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
        l = n("884691"),
        u = n("446674"),
        i = n("77078"),
        d = n("713841"),
        s = n("79112"),
        o = n("988721"),
        r = n("592407"),
        c = n("305961"),
        f = n("957255"),
        E = n("49111"),
        S = n("782340");
      function T(e) {
        let { user: t, guildId: n, channel: T, context: _ } = e,
          I = c.default.getGuild(n),
          p = (0, u.useStateFromStores)([f.default], () =>
            null != I ? f.default.can(E.Permissions.MANAGE_GUILD, I) : null
          ),
          N = (0, o.useContextIndexState)(T, !0, !0),
          A = (0, o.useUserIndexState)(!0, !0),
          { isUserApp: m, isGuildApp: O } = l.useMemo(() => {
            var e, n, a, l;
            if ((null == t ? void 0 : t.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let u = Object.values(
                null !==
                  (a =
                    null === (e = N.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== a
                  ? a
                  : {}
              ),
              i = Object.values(
                null !==
                  (l =
                    null === (n = A.result) || void 0 === n
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
              isUserApp: i.some(e => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === (null == t ? void 0 : t.id)
                );
              }),
            };
          }, [N, A, null == t ? void 0 : t.id]),
          g = l.useCallback(() => {
            (null == I ? void 0 : I.id) != null &&
              (r.default.open(I.id, E.GuildSettingsSections.INTEGRATIONS),
              d.default.setSection(
                E.IntegrationSettingsSections.APPLICATION,
                null == t ? void 0 : t.id
              ));
          }, [null == t ? void 0 : t.id, null == I ? void 0 : I.id]),
          M = l.useCallback(() => {
            s.default.open(E.UserSettingsSections.AUTHORIZED_APPS);
          }, []),
          h = _ === E.AppContext.POPOUT;
        if (!(null == t ? void 0 : t.bot) || !p || h || (!O && !m)) return null;
        let C = [];
        return (
          O &&
            C.push(
              (0, a.jsx)(
                i.MenuItem,
                {
                  id: "manage-integration",
                  label: S.default.Messages.MANAGE_INTEGRATION,
                  action: g,
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
                  action: M,
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
            return s;
          },
          editPermissions: function () {
            return o;
          },
          getApplicationCommands: function () {
            return r;
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
        l = n("913144"),
        u = n("507217"),
        i = n("389153"),
        d = n("49111");
      function s() {
        l.default.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
      }
      function o(e, t, n) {
        l.default.dispatch({
          applicationId: e,
          commandId: t,
          permissions: n,
          type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
        });
      }
      function r(e, t) {
        a.default.get(d.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
          n => {
            l.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
              applicationId: t,
              commands: n.body.application_commands,
              guildId: e,
              permissions: n.body.permissions,
            });
          },
          () => {
            l.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
              applicationId: t,
            });
          }
        );
      }
      async function c(e, t, n) {
        let u = [];
        try {
          let l = await a.default.get(
            d.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
          );
          l.ok && (u = l.body.permissions);
        } catch (a) {
          if (404 !== a.status) {
            l.default.dispatch({
              type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
              applicationId: e,
              commandId: n,
              guildId: t,
            });
            return;
          }
        }
        l.default.dispatch({
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: e,
          commandId: n,
          guildId: t,
          permissions: u,
        });
      }
      function f(e) {
        l.default.dispatch({
          applicationId: e,
          type: "INTEGRATION_PERMISSION_SETTINGS_INIT",
        });
      }
      function E(e) {
        l.default.dispatch({
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
            guildId: s,
            permissions: o,
          } = e,
          r =
            n === t
              ? (function (e, t, n, a) {
                  if (!n || !a) return t;
                  let l = { [e]: n, [(0, i.allChannelsSentinel)(e)]: a };
                  return t.filter(e => {
                    let t = l[e.id];
                    return null == t || e.permission !== t;
                  });
                })(s, o, a, d)
              : o,
          c = await u.updateApplicationGuildCommandPermissions(t, s, n, r);
        c.ok &&
          l.default.dispatch({
            type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
            applicationId: t,
            commandId: n,
            guildId: s,
            permissions: c.body.permissions,
          });
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
      var a = n("49111");
      function l(e, t, n, l) {
        let u = null != n ? n : t,
          i = null != u && e.can(a.Permissions.CREATE_INSTANT_INVITE, u);
        return (
          i ||
          (null != t && null != t.vanityURLCode) ||
          (null == l ? void 0 : l.invite_code) != null
        );
      }
    },
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return p;
          },
          inviteUserToStage: function () {
            return N;
          },
          audienceAckRequestToSpeak: function () {
            return A;
          },
          moveSelfToAudience: function () {
            return m;
          },
          setUserSuppress: function () {
            return O;
          },
          moveUserToAudience: function () {
            return g;
          },
          setEveryoneRolePermissionAllowed: function () {
            return M;
          },
          startStage: function () {
            return h;
          },
          editStage: function () {
            return C;
          },
          endStage: function () {
            return R;
          },
        });
      var a = n("627445"),
        l = n.n(a),
        u = n("316693"),
        i = n("872717"),
        d = n("450911");
      n("851387");
      var s = n("798609"),
        o = n("716241"),
        r = n("18494"),
        c = n("800762"),
        f = n("991170"),
        E = n("716214"),
        S = n("230324"),
        T = n("738983"),
        _ = n("808422"),
        I = n("49111");
      function p(e, t) {
        let n = e.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
          t &&
            (0, o.trackWithMetadata)(
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
      function N(e, t) {
        let n = e.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
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
      function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null == e ? void 0 : e.getGuildId();
        l(null != a, "This channel cannot be guildless.");
        let u = c.default.getVoiceStateForChannel(e.id),
          d = (0, _.getAudienceRequestToSpeakState)(u);
        return (
          d ===
            _.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, o.trackWithMetadata)(I.AnalyticEvents.PROMOTED_TO_SPEAKER, {
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
          l(null != t, "This channel cannot be guildless."),
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
      function O(e, t, n) {
        let a = e.getGuildId();
        return (
          l(null != a, "This channel cannot be guildless."),
          i.default.patch({
            url: I.Endpoints.UPDATE_VOICE_STATE(a, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function g(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          l(null != n, "This channel cannot be guildless."),
          O(t, e.id, !0),
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
      function M(e, t, n) {
        let a = e.getGuildId();
        l(null != a, "Channel cannot be guildless");
        let i = e.permissionOverwrites[a],
          o = {
            id: a,
            type: s.PermissionOverwriteType.ROLE,
            allow: f.default.NONE,
            deny: f.default.NONE,
            ...i,
          };
        n
          ? ((o.allow = u.default.add(o.allow, t)),
            (o.deny = u.default.remove(o.deny, t)))
          : ((o.allow = u.default.remove(o.allow, t)),
            (o.deny = u.default.add(o.deny, t))),
          d.default.updatePermissionOverwrite(e.id, o);
      }
      async function h(e, t, n, a) {
        if ("" === t) return;
        let l = r.default.getVoiceChannelId() === e.id;
        !l && (0, E.connectToStage)(e);
        let u = await (0, T.startStageInstance)(e.id, t, n, a);
        return A(e, !1, !0), u;
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
        l = n("387111"),
        u = n("991170"),
        i = n("834052"),
        d = n("837979"),
        s = n("49111"),
        o = n("606762"),
        r = n("782340");
      function c(e, t, n, a) {
        let u = t[0],
          i = l.default.getName(e, n, u),
          d = null != a ? a : t.length;
        return 1 === d && null != u
          ? i
          : null == u
            ? r.default.Messages.SPEAKING_COUNT.format({ count: d })
            : r.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: i,
                count: d - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case o.RowType.OWNER:
            return r.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case o.RowType.ADMINISTRATOR:
            return r.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case o.RowType.MEMBER:
          case o.RowType.ROLE:
            return t
              ? r.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : r.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case o.RowType.EMPTY_STATE:
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
          request_to_speak_state: u.default.canEveryoneRole(
            s.Permissions.REQUEST_TO_SPEAK,
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
            return u;
          },
          updateStageInstance: function () {
            return i;
          },
          endStageInstance: function () {
            return d;
          },
        });
      var a = n("872717"),
        l = n("49111");
      async function u(e, t, n, u, i) {
        let d = await a.default.post({
          url: l.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: i,
            send_start_notification: u,
          },
        });
        return d.body;
      }
      async function i(e, t, n) {
        let u = await a.default.patch({
          url: l.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return u.body;
      }
      function d(e) {
        return a.default.delete(l.Endpoints.STAGE_INSTANCE(e));
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
        l = n("271938"),
        u = n("18494"),
        i = n("808422");
      function d() {
        let e = (0, a.useStateFromStores)([u.default], () =>
            u.default.getVoiceChannelId()
          ),
          t = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
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
        l = n("42203"),
        u = n("18494");
      function i() {
        return (0, a.useStateFromStores)([u.default, l.default], () => {
          let e = u.default.getVoiceChannelId();
          if (null != e) {
            let t = l.default.getChannel(e);
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
      var l = n("446674"),
        u = n("77078"),
        i = n("305961"),
        d = n("697218"),
        s = n("800762"),
        o = n("244480"),
        r = n("619395"),
        c = n("325861"),
        f = n("77445"),
        E = n("130563"),
        S = n("782340");
      function T(e) {
        var t;
        let n = (0, E.default)(),
          T = null == n ? void 0 : n.id,
          _ = null == n ? void 0 : n.guild_id,
          I = (0, l.useStateFromStores)(
            [i.default],
            () => i.default.getGuild(_),
            [_]
          ),
          p = (0, l.useStateFromStores)(
            [s.default],
            () =>
              null != T ? s.default.getVoiceStateForChannel(T, e.id) : null,
            [T, e.id]
          ),
          N =
            (null === (t = d.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id) === e.id,
          A = (0, f.default)(),
          m = (0, l.useStateFromStores)(
            [c.default],
            () => c.default.getPermissionsForUser(e.id, T),
            [T, e.id]
          ),
          O = (0, r.useCanModerateRequestToSpeak)(T);
        if (null == n || null == I || null == p || m.speaker) return null;
        let g = () => {
          N
            ? (0, o.audienceAckRequestToSpeak)(n, !1)
            : (0, o.inviteUserToStage)(n, e.id);
        };
        return O
          ? (0, a.jsx)(u.MenuItem, {
              id: "invite-speaker",
              label: N
                ? S.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : S.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: g,
            })
          : A && N
            ? (0, a.jsx)(u.MenuItem, {
                id: "invite-speaker",
                label:
                  S.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: g,
              })
            : null;
      }
    },
    563816: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        u = n("627445"),
        i = n.n(u),
        d = n("446674"),
        s = n("77078"),
        o = n("240249"),
        r = n("916565"),
        c = n("355263"),
        f = n("633043"),
        E = n("823026"),
        S = n("305961"),
        T = n("697218"),
        _ = n("317041"),
        I = n("782340"),
        p = n("466063"),
        N = e => {
          let t,
            {
              commandType: n,
              commandTargetId: u,
              channel: N,
              guildId: A,
              onHeightUpdate: m,
              context: O,
            } = e,
            g = (0, d.useStateFromStores)([S.default], () =>
              S.default.getGuild(null != A ? A : N.guild_id)
            ),
            M = (0, d.useStateFromStores)([T.default], () =>
              T.default.getUser(u)
            ),
            h = (0, E.default)({
              user: M,
              guildId: null == g ? void 0 : g.id,
              channel: N,
              context: O,
            }),
            {
              commands: C,
              sectionDescriptors: R,
              loading: v,
            } = o.useDiscovery(
              N,
              { commandType: n },
              { limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT }
            ),
            { sections: y } = l.useMemo(() => {
              let e = {};
              return (
                R.forEach(t => {
                  e[t.id] = t;
                }),
                { sections: e }
              );
            }, [R]),
            D = l.useRef(v.current);
          l.useEffect(() => {
            v.current !== D.current &&
              ((D.current = v.current), null == m || m());
          }, [v, m]);
          let G = l.useCallback(
            e => {
              i(null != N, "menu item should not show if channel is null");
              let t = y[e.applicationId],
                n = null != t ? (0, c.getIconComponent)(t) : void 0;
              return (0, a.jsx)(
                s.MenuItem,
                {
                  id: e.id,
                  label: e.displayName,
                  showIconFirst: !0,
                  icon: () =>
                    null != n
                      ? (0, a.jsx)(n, {
                          channel: N,
                          section: t,
                          width: 18,
                          height: 18,
                          selectable: !1,
                        })
                      : null,
                  action: () => {
                    (0, r.default)({
                      command: e,
                      optionValues: {},
                      context: { channel: N, guild: g },
                      commandTargetId: u,
                    });
                  },
                },
                e.id
              );
            },
            [N, g, u, y]
          );
          return (
            v.current
              ? (t = (0, a.jsx)(
                  s.MenuItem,
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
                        s.MenuItem,
                        {
                          id: "menu-commands-empty",
                          label:
                            I.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                          disabled: !0,
                        },
                        "menu-commands-empty"
                      )
                    : C.map(G)),
                null != h &&
                  (t = (0, a.jsxs)(a.Fragment, {
                    children: [
                      t,
                      (0, a.jsx)(s.MenuSeparator, {}, "separator"),
                      h,
                    ],
                  }))),
            (0, a.jsx)(s.MenuItem, {
              id: "apps",
              label: I.default.Messages.APPS,
              listClassName: p.list,
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
      var l = n("446674"),
        u = n("77078"),
        i = n("255397"),
        d = n("191145"),
        s = n("800762"),
        o = n("49111"),
        r = n("782340");
      function c(e, t) {
        let n = (0, l.useStateFromStores)(
            [d.default],
            () => e === d.default.getSelectedParticipantId(t),
            [t, e]
          ),
          c = (0, l.useStateFromStores)(
            [d.default, s.default],
            () => {
              let n = s.default.isInChannel(t, e) && s.default.hasVideo(t),
                a = d.default.getLayout(t),
                l =
                  a === o.ChannelLayouts.MINIMUM ||
                  a === o.ChannelLayouts.NORMAL;
              return !n || l;
            },
            [t, e]
          );
        return c
          ? null
          : (0, a.jsx)(u.MenuItem, {
              id: "focus-video",
              label: n
                ? r.default.Messages.UNFOCUS_PARTICIPANT
                : r.default.Messages.FOCUS_PARTICIPANT,
              action: () => i.default.selectParticipant(t, n ? null : e),
            });
      }
    },
    692986: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        i = n("404118"),
        d = n("629109"),
        s = n("235004"),
        o = n("42887"),
        r = n("945956"),
        c = n("162771"),
        f = n("697218"),
        E = n("423487"),
        S = n("599110"),
        T = n("49111"),
        _ = n("353927"),
        I = n("782340"),
        p = n("622393");
      function N(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _.MediaEngineContextTypes.DEFAULT,
          n = (0, l.useStateFromStores)([f.default], () => {
            var t;
            return (
              (null === (t = f.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id) === e
            );
          }),
          N = (0, l.useStateFromStores)([s.default], () =>
            s.default.isLocalSoundboardMuted(e)
          ),
          {
            muted: A,
            deafened: m = !1,
            localVideoDisabled: O = !1,
            localVideoAutoDisabled: g = !1,
          } = (0, l.useStateFromStoresObject)(
            [o.default],
            () =>
              n
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
            [n, t, e]
          ),
          M =
            o.default.supports(_.Features.DISABLE_VIDEO) && !n
              ? (0, a.jsx)(
                  u.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: I.default.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (g) {
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
                      let n = O
                        ? T.VideoToggleState.MANUAL_ENABLED
                        : T.VideoToggleState.DISABLED;
                      d.default.setDisableLocalVideo(e, n, t);
                    },
                    checked: O,
                    subtext: g
                      ? (0, a.jsxs)("div", {
                          className: p.videoPaused,
                          children: [
                            (0, a.jsx)(E.default, {
                              width: 12,
                              className: p.warningCircle,
                            }),
                            I.default.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video"
                )
              : null,
          h = n
            ? null
            : (0, a.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: I.default.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let n = r.default.getRTCConnection();
                    S.default.track(
                      T.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED,
                      {
                        guild_id: c.default.getGuildId(),
                        target_user_id: e,
                        media_session_id:
                          null == n ? void 0 : n.getMediaSessionId(),
                        parent_media_session_id:
                          null == n ? void 0 : n.parentMediaSessionId,
                        mute_soundboard: !N,
                      }
                    ),
                      d.default.toggleLocalSoundboardMute(e, t);
                  },
                  checked: N,
                },
                "soundboard-sound-mute"
              );
        return n
          ? [
              (0, a.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "mute",
                  label: I.default.Messages.SOUND_MUTE,
                  action: () => d.default.toggleSelfMute({ context: t }),
                  checked: A,
                },
                "self-mute"
              ),
              (0, a.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: I.default.Messages.DEAFEN,
                  action: () => d.default.toggleSelfDeaf({ context: t }),
                  checked: m,
                },
                "self-deafen"
              ),
              M,
            ]
          : [
              (0, a.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "mute",
                  label: I.default.Messages.SOUND_MUTE,
                  action: () => d.default.toggleLocalMute(e, t),
                  checked: A,
                },
                "self-mute"
              ),
              h,
              M,
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
      var l = n("446674"),
        u = n("77078"),
        i = n("629109"),
        d = n("42887"),
        s = n("697218"),
        o = n("829536"),
        r = n("773336"),
        c = n("353927"),
        f = n("782340");
      function E(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.MediaEngineContextTypes.DEFAULT,
          E = (0, l.useStateFromStores)(
            [d.default],
            () => d.default.getLocalVolume(e, n),
            [e, n]
          ),
          S =
            e ===
            (null === (t = s.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          T = n === c.MediaEngineContextTypes.STREAM;
        return S
          ? null
          : (0, a.jsx)(u.MenuControlItem, {
              id: "user-volume",
              label: T
                ? f.default.Messages.STREAM_VOLUME
                : f.default.Messages.USER_VOLUME,
              control: (t, l) =>
                (0, a.jsx)(u.MenuSliderControl, {
                  ...t,
                  ref: l,
                  value: (0, o.amplitudeToPerceptual)(E),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: t =>
                    i.default.setLocalVolume(
                      e,
                      (0, o.perceptualToAmplitude)(t),
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
        l = n("42887"),
        u = n("512244");
      function i() {
        return (0, a.useStateFromStores)([l.default], () =>
          (0, u.default)(l.default)
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
      var l = n("469563"),
        u = n("35647"),
        i = n("75196"),
        d = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: u,
              ...d
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(d),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: u,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          u.IdIcon,
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
        l = n("773336"),
        u = n("50885");
      let i = (() => {
        if (l.isPlatformEmbedded) return null != u.default.copy;
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
          !!i && (l.isPlatformEmbedded ? (u.default.copy(e), !0) : a.copy(e))
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
      var l = n("669491"),
        u = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...s
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, u.default)(s),
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
          l = document.createElement("textarea");
        (l.value = e),
          (l.contentEditable = "true"),
          (l.style.visibility = "none"),
          t.appendChild(l),
          n.selectNodeContents(l),
          null == a || a.removeAllRanges(),
          null == a || a.addRange(n),
          l.focus(),
          l.setSelectionRange(0, e.length);
        let u = document.execCommand("copy");
        return t.removeChild(l), u;
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
//# sourceMappingURL=7661ed295ffe62d0033a.js.map

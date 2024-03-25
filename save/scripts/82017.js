(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82017"],
  {
    35647: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("35466");
      n.es(l, t);
    },
    997289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAnalyticsContext: function () {
            return a;
          },
        });
      var l = n("884691"),
        u = n("599110");
      let a = () => l.useContext(u.AnalyticsContext);
    },
    837707: function (e, t, n) {
      "use strict";
      function l(e) {
        if (null != e) {
          if ("activitySessionId" in e) return e.activitySessionId;
          if ("instanceId" in e) return e.instanceId;
          if ("activity_id" in e) return e.activity_id;
        }
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("627445"),
        a = n.n(u),
        i = n("77078"),
        d = n("845579"),
        s = n("662255"),
        o = n("306160");
      function r(e) {
        let { id: t, label: n, onSuccess: u, shiftId: r, showIconFirst: c } = e,
          f = d.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !o.SUPPORTS_COPY || null == t) return null;
        let E = "devmode-copy-id-".concat(t);
        return (0, l.jsx)(
          i.MenuItem,
          {
            id: E,
            label: n,
            action: function (e) {
              let n = null != r && e.shiftKey ? r : t;
              a(null != n, "cannot copy null text"),
                (0, o.copy)(n),
                null == u || u();
            },
            icon: s.default,
            showIconFirst: c,
          },
          E
        );
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
      var l = n("49111");
      function u(e, t, n, u) {
        let a = null != n ? n : t,
          i = null != a && e.can(l.Permissions.CREATE_INSTANT_INVITE, a);
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
            return p;
          },
          inviteUserToStage: function () {
            return M;
          },
          audienceAckRequestToSpeak: function () {
            return A;
          },
          moveSelfToAudience: function () {
            return v;
          },
          setUserSuppress: function () {
            return I;
          },
          moveUserToAudience: function () {
            return m;
          },
          setEveryoneRolePermissionAllowed: function () {
            return C;
          },
          startStage: function () {
            return h;
          },
          editStage: function () {
            return N;
          },
          endStage: function () {
            return O;
          },
        });
      var l = n("627445"),
        u = n.n(l),
        a = n("316693"),
        i = n("872717"),
        d = n("450911");
      n("851387");
      var s = n("798609"),
        o = n("716241"),
        r = n("18494"),
        c = n("800762"),
        f = n("991170"),
        E = n("716214"),
        _ = n("230324"),
        S = n("738983"),
        T = n("808422"),
        g = n("49111");
      function p(e, t) {
        let n = e.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          t &&
            (0, o.trackWithMetadata)(
              g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, _.getStageChannelMetadata)(e) }
            ),
          i.HTTP.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function M(e, t) {
        let n = e.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          i.HTTP.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
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
          l = null == e ? void 0 : e.getGuildId();
        u(null != l, "This channel cannot be guildless.");
        let a = c.default.getVoiceStateForChannel(e.id),
          d = (0, T.getAudienceRequestToSpeakState)(a);
        return (
          d ===
            T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, o.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, _.getStageChannelMetadata)(e),
            }),
          i.HTTP.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(l),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function v(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          u(null != t, "This channel cannot be guildless."),
          i.HTTP.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function I(e, t, n) {
        let l = e.getGuildId();
        return (
          u(null != l, "This channel cannot be guildless."),
          i.HTTP.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(l, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function m(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          u(null != n, "This channel cannot be guildless."),
          I(t, e.id, !0),
          i.HTTP.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(e, t, n) {
        let l = e.getGuildId();
        u(null != l, "Channel cannot be guildless");
        let i = e.permissionOverwrites[l],
          o = {
            id: l,
            type: s.PermissionOverwriteType.ROLE,
            allow: f.NONE,
            deny: f.NONE,
            ...i,
          };
        n
          ? ((o.allow = a.add(o.allow, t)), (o.deny = a.remove(o.deny, t)))
          : ((o.allow = a.remove(o.allow, t)), (o.deny = a.add(o.deny, t))),
          d.default.updatePermissionOverwrite(e.id, o);
      }
      async function h(e, t, n, l) {
        if ("" === t) return;
        let u = r.default.getVoiceChannelId() === e.id;
        !u && (0, E.connectToStage)(e);
        let a = await (0, S.startStageInstance)(e.id, t, n, l);
        return A(e, !1, !0), a;
      }
      async function N(e, t, n) {
        if ("" === t) return;
        let l = await (0, S.updateStageInstance)(e.id, t, n);
        return l;
      }
      async function O(e) {
        await (0, S.endStageInstance)(e.id);
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
      var l = n("945956"),
        u = n("387111"),
        a = n("991170"),
        i = n("834052"),
        d = n("837979"),
        s = n("49111"),
        o = n("606762"),
        r = n("782340");
      function c(e, t, n, l) {
        let a = t[0],
          i = u.default.getName(e, n, a),
          d = null != l ? l : t.length;
        return 1 === d && null != a
          ? i
          : null == a
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
          media_session_id: l.default.getMediaSessionId(),
          request_to_speak_state: a.canEveryoneRole(
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
            return a;
          },
          updateStageInstance: function () {
            return i;
          },
          endStageInstance: function () {
            return d;
          },
        });
      var l = n("872717"),
        u = n("49111");
      async function a(e, t, n, a, i) {
        let d = await l.HTTP.post({
          url: u.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: i,
            send_start_notification: a,
          },
        });
        return d.body;
      }
      async function i(e, t, n) {
        let a = await l.HTTP.patch({
          url: u.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return a.body;
      }
      function d(e) {
        return l.HTTP.del(u.Endpoints.STAGE_INSTANCE(e));
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
      var l = n("446674"),
        u = n("271938"),
        a = n("18494"),
        i = n("808422");
      function d() {
        let e = (0, l.useStateFromStores)([a.default], () =>
            a.default.getVoiceChannelId()
          ),
          t = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
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
      var l = n("446674"),
        u = n("42203"),
        a = n("18494");
      function i() {
        return (0, l.useStateFromStores)([a.default, u.default], () => {
          let e = a.default.getVoiceChannelId();
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
            return S;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        i = n("305961"),
        d = n("697218"),
        s = n("800762"),
        o = n("244480"),
        r = n("619395"),
        c = n("325861"),
        f = n("77445"),
        E = n("130563"),
        _ = n("782340");
      function S(e) {
        var t;
        let n = (0, E.default)(),
          S = null == n ? void 0 : n.id,
          T = null == n ? void 0 : n.guild_id,
          g = (0, u.useStateFromStores)(
            [i.default],
            () => i.default.getGuild(T),
            [T]
          ),
          p = (0, u.useStateFromStores)(
            [s.default],
            () =>
              null != S ? s.default.getVoiceStateForChannel(S, e.id) : null,
            [S, e.id]
          ),
          M =
            (null === (t = d.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id) === e.id,
          A = (0, f.default)(),
          v = (0, u.useStateFromStores)(
            [c.default],
            () => c.default.getPermissionsForUser(e.id, S),
            [S, e.id]
          ),
          I = (0, r.useCanModerateRequestToSpeak)(S);
        if (null == n || null == g || null == p || v.speaker) return null;
        let m = () => {
          M
            ? (0, o.audienceAckRequestToSpeak)(n, !1)
            : (0, o.inviteUserToStage)(n, e.id);
        };
        return I
          ? (0, l.jsx)(a.MenuItem, {
              id: "invite-speaker",
              label: M
                ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: m,
            })
          : A && M
            ? (0, l.jsx)(a.MenuItem, {
                id: "invite-speaker",
                label:
                  _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: m,
              })
            : null;
      }
    },
    406784: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("77078"),
        a = n("272030"),
        i = n("838446"),
        d = n("158534"),
        s = n("846883"),
        o = n("812204"),
        r = n("861370"),
        c = n("726750"),
        f = n("170990"),
        E = n("304582"),
        _ = n("72057"),
        S = n("489836"),
        T = n("406703"),
        g = n("314838"),
        p = n("421602"),
        M = n("692986"),
        A = n("806179"),
        v = n("816106"),
        I = n("623879"),
        m = n("49111"),
        C = n("782340"),
        h = (0, d.default)(
          (0, i.default)(
            function (e) {
              let {
                  user: t,
                  showMediaItems: n = !1,
                  mediaEngineContext: i,
                  onSelect: d,
                } = e,
                o = (0, A.default)(t.id),
                m = (0, p.default)(t.id),
                h = (0, T.default)(t),
                N = (0, _.default)({ user: t }),
                O = (0, E.default)(t),
                R = (0, I.default)(t.id),
                y = (0, v.default)(t.id),
                U = (0, M.default)(t.id, i),
                b = (0, g.default)(t),
                P = (0, s.default)(null, t),
                x = (0, f.default)(t),
                D = (0, S.default)(t),
                V = (0, r.default)({
                  id: t.id,
                  label: C.default.Messages.COPY_ID_USER,
                }),
                L = (0, c.default)(t),
                w = t.isNonUserBot();
              return (0, l.jsxs)(u.Menu, {
                navId: "user-context",
                onClose: a.closeContextMenu,
                "aria-label": C.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: d,
                children: [
                  !w &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(u.MenuGroup, { children: L }),
                        (0, l.jsxs)(u.MenuGroup, {
                          children: [o, m, h, N, O, R],
                        }),
                        n && (0, l.jsx)(u.MenuGroup, { children: y }),
                        (0, l.jsx)(u.MenuGroup, { children: P }),
                        (0, l.jsxs)(u.MenuGroup, {
                          children: [n && U, b, x, D],
                        }),
                      ],
                    }),
                  (0, l.jsx)(u.MenuGroup, { children: V }),
                ],
              });
            },
            { object: m.AnalyticsObjects.CONTEXT_MENU }
          ),
          [o.default.CONTEXT_MENU, o.default.USER_GENERIC_MENU]
        );
    },
    421602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("77078"),
        a = n("450911"),
        i = n("54239"),
        d = n("271938"),
        s = n("49111"),
        o = n("782340");
      function r(e, t) {
        let n = d.default.getId(),
          r = t === s.AppContext.POPOUT;
        return n === e || r
          ? null
          : (0, l.jsx)(u.MenuItem, {
              id: "message-user",
              label: o.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                a.default.openPrivateChannel(e), (0, i.popLayer)();
              },
            });
      }
    },
    692986: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
        i = n("404118"),
        d = n("629109"),
        s = n("235004"),
        o = n("42887"),
        r = n("945956"),
        c = n("162771"),
        f = n("697218"),
        E = n("423487"),
        _ = n("599110"),
        S = n("49111"),
        T = n("353927"),
        g = n("782340"),
        p = n("622393");
      function M(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : T.MediaEngineContextTypes.DEFAULT,
          n = (0, u.useStateFromStores)([f.default], () => {
            var t;
            return (
              (null === (t = f.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id) === e
            );
          }),
          M = (0, u.useStateFromStores)([s.default], () =>
            s.default.isLocalSoundboardMuted(e)
          ),
          {
            muted: A,
            deafened: v = !1,
            localVideoDisabled: I = !1,
            localVideoAutoDisabled: m = !1,
          } = (0, u.useStateFromStoresObject)(
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
          C =
            o.default.supports(T.Features.DISABLE_VIDEO) && !n
              ? (0, l.jsx)(
                  a.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: g.default.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (m) {
                        i.default.show({
                          title: g.default.Messages.UNSTABLE_CONNECTION,
                          body: g.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: g.default.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: g.default.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            d.default.setDisableLocalVideo(
                              e,
                              S.VideoToggleState.MANUAL_ENABLED
                            ),
                        });
                        return;
                      }
                      let n = I
                        ? S.VideoToggleState.MANUAL_ENABLED
                        : S.VideoToggleState.DISABLED;
                      d.default.setDisableLocalVideo(e, n, t);
                    },
                    checked: I,
                    subtext: m
                      ? (0, l.jsxs)("div", {
                          className: p.videoPaused,
                          children: [
                            (0, l.jsx)(E.default, {
                              width: 12,
                              className: p.warningCircle,
                            }),
                            g.default.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video"
                )
              : null,
          h = n
            ? null
            : (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: g.default.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let n = r.default.getRTCConnection();
                    _.default.track(
                      S.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED,
                      {
                        guild_id: c.default.getGuildId(),
                        target_user_id: e,
                        media_session_id:
                          null == n ? void 0 : n.getMediaSessionId(),
                        parent_media_session_id:
                          null == n ? void 0 : n.parentMediaSessionId,
                        mute_soundboard: !M,
                      }
                    ),
                      d.default.toggleLocalSoundboardMute(e, t);
                  },
                  checked: M,
                },
                "soundboard-sound-mute"
              );
        return n
          ? [
              (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "mute",
                  label: g.default.Messages.SOUND_MUTE,
                  action: () => d.default.toggleSelfMute({ context: t }),
                  checked: A,
                },
                "self-mute"
              ),
              (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: g.default.Messages.DEAFEN,
                  action: () => d.default.toggleSelfDeaf({ context: t }),
                  checked: v,
                },
                "self-deafen"
              ),
              C,
            ]
          : [
              (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "mute",
                  label: g.default.Messages.SOUND_MUTE,
                  action: () => d.default.toggleLocalMute(e, t),
                  checked: A,
                },
                "self-mute"
              ),
              h,
              C,
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
      var l = n("37983");
      n("884691");
      var u = n("446674"),
        a = n("77078"),
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
          E = (0, u.useStateFromStores)(
            [d.default],
            () => d.default.getLocalVolume(e, n),
            [e, n]
          ),
          _ =
            e ===
            (null === (t = s.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          S = n === c.MediaEngineContextTypes.STREAM;
        return _
          ? null
          : (0, l.jsx)(a.MenuControlItem, {
              id: "user-volume",
              label: S
                ? f.default.Messages.STREAM_VOLUME
                : f.default.Messages.USER_VOLUME,
              control: (t, u) =>
                (0, l.jsx)(a.MenuSliderControl, {
                  ...t,
                  ref: u,
                  value: (0, o.amplitudeToPerceptual)(E),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: t =>
                    i.default.setLocalVolume(
                      e,
                      (0, o.perceptualToAmplitude)(t),
                      n
                    ),
                  "aria-label": S
                    ? f.default.Messages.STREAM_VOLUME
                    : f.default.Messages.USER_VOLUME,
                }),
            });
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
      var l = n("37983");
      n("884691");
      var u = n("469563"),
        a = n("35647"),
        i = n("75196"),
        d = (0, u.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: u = "currentColor",
              foreground: a,
              ...d
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(d),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: a,
                fill: u,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z",
              }),
            });
          },
          a.IdIcon,
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
      var l = n("281071"),
        u = n("773336"),
        a = n("50885");
      let i = (() => {
        if (u.isPlatformEmbedded) return null != a.default.copy;
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
          !!i && (u.isPlatformEmbedded ? (a.default.copy(e), !0) : l.copy(e))
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
      var l = n("37983");
      n("884691");
      var u = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...s
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: d,
            }),
            (0, l.jsx)("path", {
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
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          l = window.getSelection(),
          u = document.createElement("textarea");
        (u.value = e),
          (u.contentEditable = "true"),
          (u.style.visibility = "none"),
          t.appendChild(u),
          n.selectNodeContents(u),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          u.focus(),
          u.setSelectionRange(0, e.length);
        let a = document.execCommand("copy");
        return t.removeChild(u), a;
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
//# sourceMappingURL=cc61f9934ef03186a01a.js.map

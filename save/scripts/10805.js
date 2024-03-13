(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10805"],
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
            return u;
          },
        });
      var l = n("884691"),
        i = n("599110");
      let u = () => l.useContext(i.AnalyticsContext);
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
    462274: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useColorStore: function () {
            return c;
          },
          maybeFetchColors: function () {
            return f;
          },
          default: function () {
            return E;
          },
          useAvatarColors: function () {
            return _;
          },
        }),
        n("222007");
      var l = n("884691"),
        i = n("656280"),
        u = n.n(i),
        r = n("308503"),
        a = n("446674"),
        o = n("206230"),
        d = n("284679"),
        s = n("103603");
      let c = (0, r.default)(() => ({ palette: {}, fetching: {} }));
      async function f(e) {
        null == c.getState().palette[e] && (await g(e));
      }
      async function g(e) {
        if (!c.getState().fetching[e]) {
          c.setState(t => ({ fetching: { ...t.fetching, [e]: !0 } }));
          try {
            let t = await (0, s.getPaletteForAvatar)(e),
              n = (0, d.getComplimentaryPaletteForColor)(t[0]);
            c.setState(l => ({
              fetching: { ...l.fetching, [e]: !1 },
              palette: { ...l.palette, [e]: [...t.slice(0, 2), ...n] },
            }));
          } catch (t) {
            c.setState(t => ({ fetching: { ...t.fetching, [e]: !1 } }));
          }
        }
      }
      function E(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [l] = _(e, t, n);
        return l;
      }
      function _(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = c(t => (null == e ? void 0 : t.palette[e])),
          r = (0, a.useStateFromStores)([o.default], () =>
            n && o.default.desaturateUserColors ? o.default.saturation : 1
          );
        l.useEffect(() => {
          null != e && null == i && g(e);
        }, [e, i]);
        let d = l.useMemo(
          () =>
            null == i
              ? void 0
              : i.map(e => {
                  let [t, n, l] = e,
                    { h: i, s: a, l: o } = u({ r: t, g: n, b: l }).toHsl();
                  return u({ h: i, s: a * r, l: o }).toHexString();
                }),
          [i, r]
        );
        return null != d ? d : [t, t];
      }
    },
    861370: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("627445"),
        u = n.n(i),
        r = n("77078"),
        a = n("845579"),
        o = n("662255"),
        d = n("306160");
      function s(e) {
        let { id: t, label: n, onSuccess: i, shiftId: s, showIconFirst: c } = e,
          f = a.DeveloperMode.useSetting();
        if (__OVERLAY__ || !f || !d.SUPPORTS_COPY || null == t) return null;
        let g = "devmode-copy-id-".concat(t);
        return (0, l.jsx)(
          r.MenuItem,
          {
            id: g,
            label: n,
            action: function (e) {
              let n = null != s && e.shiftKey ? s : t;
              u(null != n, "cannot copy null text"),
                (0, d.copy)(n),
                null == i || i();
            },
            icon: o.default,
            showIconFirst: c,
          },
          g
        );
      }
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return i;
          },
        });
      var l = n("49111");
      function i(e, t, n, i) {
        let u = null != n ? n : t,
          r = null != u && e.can(l.Permissions.CREATE_INSTANT_INVITE, u);
        return (
          r ||
          (null != t && null != t.vanityURLCode) ||
          (null == i ? void 0 : i.invite_code) != null
        );
      }
    },
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return m;
          },
          inviteUserToStage: function () {
            return v;
          },
          audienceAckRequestToSpeak: function () {
            return p;
          },
          moveSelfToAudience: function () {
            return T;
          },
          setUserSuppress: function () {
            return M;
          },
          moveUserToAudience: function () {
            return C;
          },
          setEveryoneRolePermissionAllowed: function () {
            return A;
          },
          startStage: function () {
            return I;
          },
          editStage: function () {
            return b;
          },
          endStage: function () {
            return P;
          },
        });
      var l = n("627445"),
        i = n.n(l),
        u = n("316693"),
        r = n("872717"),
        a = n("450911");
      n("851387");
      var o = n("798609"),
        d = n("716241"),
        s = n("18494"),
        c = n("800762"),
        f = n("991170"),
        g = n("716214"),
        E = n("230324"),
        _ = n("738983"),
        h = n("808422"),
        S = n("49111");
      function m(e, t) {
        let n = e.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          t &&
            (0, d.trackWithMetadata)(
              S.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, E.getStageChannelMetadata)(e) }
            ),
          r.default.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function v(e, t) {
        let n = e.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          r.default.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == e ? void 0 : e.getGuildId();
        i(null != l, "This channel cannot be guildless.");
        let u = c.default.getVoiceStateForChannel(e.id),
          a = (0, h.getAudienceRequestToSpeakState)(u);
        return (
          a ===
            h.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.trackWithMetadata)(S.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, E.getStageChannelMetadata)(e),
            }),
          r.default.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(l),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function T(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          i(null != t, "This channel cannot be guildless."),
          r.default.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function M(e, t, n) {
        let l = e.getGuildId();
        return (
          i(null != l, "This channel cannot be guildless."),
          r.default.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(l, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function C(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          M(t, e.id, !0),
          r.default.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function A(e, t, n) {
        let l = e.getGuildId();
        i(null != l, "Channel cannot be guildless");
        let r = e.permissionOverwrites[l],
          d = {
            id: l,
            type: o.PermissionOverwriteType.ROLE,
            allow: f.default.NONE,
            deny: f.default.NONE,
            ...r,
          };
        n
          ? ((d.allow = u.default.add(d.allow, t)),
            (d.deny = u.default.remove(d.deny, t)))
          : ((d.allow = u.default.remove(d.allow, t)),
            (d.deny = u.default.add(d.deny, t))),
          a.default.updatePermissionOverwrite(e.id, d);
      }
      async function I(e, t, n, l) {
        if ("" === t) return;
        let i = s.default.getVoiceChannelId() === e.id;
        !i && (0, g.connectToStage)(e);
        let u = await (0, _.startStageInstance)(e.id, t, n, l);
        return p(e, !1, !0), u;
      }
      async function b(e, t, n) {
        if ("" === t) return;
        let l = await (0, _.updateStageInstance)(e.id, t, n);
        return l;
      }
      async function P(e) {
        await (0, _.endStageInstance)(e.id);
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
            return g;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var l = n("945956"),
        i = n("387111"),
        u = n("991170"),
        r = n("834052"),
        a = n("837979"),
        o = n("49111"),
        d = n("606762"),
        s = n("782340");
      function c(e, t, n, l) {
        let u = t[0],
          r = i.default.getName(e, n, u),
          a = null != l ? l : t.length;
        return 1 === a && null != u
          ? r
          : null == u
            ? s.default.Messages.SPEAKING_COUNT.format({ count: a })
            : s.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: r,
                count: a - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case d.RowType.OWNER:
            return s.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case d.RowType.ADMINISTRATOR:
            return s.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case d.RowType.MEMBER:
          case d.RowType.ROLE:
            return t
              ? s.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : s.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case d.RowType.EMPTY_STATE:
        }
        return null;
      }
      function g(e) {
        let t = r.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: l.default.getMediaSessionId(),
          request_to_speak_state: u.default.canEveryoneRole(
            o.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? a.RequestToSpeakPermissionStates.EVERYONE
            : a.RequestToSpeakPermissionStates.NO_ONE,
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
            return r;
          },
          endStageInstance: function () {
            return a;
          },
        });
      var l = n("872717"),
        i = n("49111");
      async function u(e, t, n, u, r) {
        let a = await l.default.post({
          url: i.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: r,
            send_start_notification: u,
          },
        });
        return a.body;
      }
      async function r(e, t, n) {
        let u = await l.default.patch({
          url: i.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return u.body;
      }
      function a(e) {
        return l.default.delete(i.Endpoints.STAGE_INSTANCE(e));
      }
    },
    77445: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("446674"),
        i = n("271938"),
        u = n("18494"),
        r = n("808422");
      function a() {
        let e = (0, l.useStateFromStores)([u.default], () =>
            u.default.getVoiceChannelId()
          ),
          t = (0, l.useStateFromStores)([i.default], () => i.default.getId()),
          n = (0, r.default)(t, e);
        return (
          n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    130563: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("446674"),
        i = n("42203"),
        u = n("18494");
      function r() {
        return (0, l.useStateFromStores)([u.default, i.default], () => {
          let e = u.default.getVoiceChannelId();
          if (null != e) {
            let t = i.default.getChannel(e);
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
            return _;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("446674"),
        u = n("77078"),
        r = n("305961"),
        a = n("697218"),
        o = n("800762"),
        d = n("244480"),
        s = n("619395"),
        c = n("325861"),
        f = n("77445"),
        g = n("130563"),
        E = n("782340");
      function _(e) {
        var t;
        let n = (0, g.default)(),
          _ = null == n ? void 0 : n.id,
          h = null == n ? void 0 : n.guild_id,
          S = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.getGuild(h),
            [h]
          ),
          m = (0, i.useStateFromStores)(
            [o.default],
            () =>
              null != _ ? o.default.getVoiceStateForChannel(_, e.id) : null,
            [_, e.id]
          ),
          v =
            (null === (t = a.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id) === e.id,
          p = (0, f.default)(),
          T = (0, i.useStateFromStores)(
            [c.default],
            () => c.default.getPermissionsForUser(e.id, _),
            [_, e.id]
          ),
          M = (0, s.useCanModerateRequestToSpeak)(_);
        if (null == n || null == S || null == m || T.speaker) return null;
        let C = () => {
          v
            ? (0, d.audienceAckRequestToSpeak)(n, !1)
            : (0, d.inviteUserToStage)(n, e.id);
        };
        return M
          ? (0, l.jsx)(u.MenuItem, {
              id: "invite-speaker",
              label: v
                ? E.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : E.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: C,
            })
          : p && v
            ? (0, l.jsx)(u.MenuItem, {
                id: "invite-speaker",
                label:
                  E.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: C,
              })
            : null;
      }
    },
    406784: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("77078"),
        u = n("272030"),
        r = n("838446"),
        a = n("158534"),
        o = n("846883"),
        d = n("812204"),
        s = n("861370"),
        c = n("726750"),
        f = n("170990"),
        g = n("304582"),
        E = n("72057"),
        _ = n("489836"),
        h = n("406703"),
        S = n("314838"),
        m = n("421602"),
        v = n("692986"),
        p = n("806179"),
        T = n("816106"),
        M = n("623879"),
        C = n("49111"),
        A = n("782340"),
        I = (0, a.default)(
          (0, r.default)(
            function (e) {
              let {
                  user: t,
                  showMediaItems: n = !1,
                  mediaEngineContext: r,
                  onSelect: a,
                } = e,
                d = (0, p.default)(t.id),
                C = (0, m.default)(t.id),
                I = (0, h.default)(t),
                b = (0, E.default)({ user: t }),
                P = (0, g.default)(t),
                O = (0, M.default)(t.id),
                N = (0, T.default)(t.id),
                R = (0, v.default)(t.id, r),
                y = (0, S.default)(t),
                U = (0, o.default)(null, t),
                L = (0, f.default)(t),
                D = (0, _.default)(t),
                V = (0, s.default)({
                  id: t.id,
                  label: A.default.Messages.COPY_ID_USER,
                }),
                x = (0, c.default)(t),
                w = t.isNonUserBot();
              return (0, l.jsxs)(i.Menu, {
                navId: "user-context",
                onClose: u.closeContextMenu,
                "aria-label": A.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: a,
                children: [
                  !w &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(i.MenuGroup, { children: x }),
                        (0, l.jsxs)(i.MenuGroup, {
                          children: [d, C, I, b, P, O],
                        }),
                        n && (0, l.jsx)(i.MenuGroup, { children: N }),
                        (0, l.jsx)(i.MenuGroup, { children: U }),
                        (0, l.jsxs)(i.MenuGroup, {
                          children: [n && R, y, L, D],
                        }),
                      ],
                    }),
                  (0, l.jsx)(i.MenuGroup, { children: V }),
                ],
              });
            },
            { object: C.AnalyticsObjects.CONTEXT_MENU }
          ),
          [d.default.CONTEXT_MENU, d.default.USER_GENERIC_MENU]
        );
    },
    421602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("77078"),
        u = n("450911"),
        r = n("54239"),
        a = n("271938"),
        o = n("49111"),
        d = n("782340");
      function s(e, t) {
        let n = a.default.getId(),
          s = t === o.AppContext.POPOUT;
        return n === e || s
          ? null
          : (0, l.jsx)(i.MenuItem, {
              id: "message-user",
              label: d.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                u.default.openPrivateChannel(e), (0, r.popLayer)();
              },
            });
      }
    },
    692986: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("446674"),
        u = n("77078"),
        r = n("404118"),
        a = n("629109"),
        o = n("235004"),
        d = n("42887"),
        s = n("945956"),
        c = n("162771"),
        f = n("697218"),
        g = n("423487"),
        E = n("599110"),
        _ = n("49111"),
        h = n("353927"),
        S = n("782340"),
        m = n("622393");
      function v(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : h.MediaEngineContextTypes.DEFAULT,
          n = (0, i.useStateFromStores)([f.default], () => {
            var t;
            return (
              (null === (t = f.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id) === e
            );
          }),
          v = (0, i.useStateFromStores)([o.default], () =>
            o.default.isLocalSoundboardMuted(e)
          ),
          {
            muted: p,
            deafened: T = !1,
            localVideoDisabled: M = !1,
            localVideoAutoDisabled: C = !1,
          } = (0, i.useStateFromStoresObject)(
            [d.default],
            () =>
              n
                ? {
                    muted: d.default.isSelfMute(t),
                    deafened: d.default.isSelfDeaf(t),
                  }
                : {
                    muted: d.default.isLocalMute(e, t),
                    localVideoDisabled: d.default.isLocalVideoDisabled(e, t),
                    localVideoAutoDisabled: d.default.isLocalVideoAutoDisabled(
                      e,
                      t
                    ),
                  },
            [n, t, e]
          ),
          A =
            d.default.supports(h.Features.DISABLE_VIDEO) && !n
              ? (0, l.jsx)(
                  u.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: S.default.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (C) {
                        r.default.show({
                          title: S.default.Messages.UNSTABLE_CONNECTION,
                          body: S.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: S.default.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: S.default.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            a.default.setDisableLocalVideo(
                              e,
                              _.VideoToggleState.MANUAL_ENABLED
                            ),
                        });
                        return;
                      }
                      let n = M
                        ? _.VideoToggleState.MANUAL_ENABLED
                        : _.VideoToggleState.DISABLED;
                      a.default.setDisableLocalVideo(e, n, t);
                    },
                    checked: M,
                    subtext: C
                      ? (0, l.jsxs)("div", {
                          className: m.videoPaused,
                          children: [
                            (0, l.jsx)(g.default, {
                              width: 12,
                              className: m.warningCircle,
                            }),
                            S.default.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video"
                )
              : null,
          I = n
            ? null
            : (0, l.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: S.default.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let n = s.default.getRTCConnection();
                    E.default.track(
                      _.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED,
                      {
                        guild_id: c.default.getGuildId(),
                        target_user_id: e,
                        media_session_id:
                          null == n ? void 0 : n.getMediaSessionId(),
                        parent_media_session_id:
                          null == n ? void 0 : n.parentMediaSessionId,
                        mute_soundboard: !v,
                      }
                    ),
                      a.default.toggleLocalSoundboardMute(e, t);
                  },
                  checked: v,
                },
                "soundboard-sound-mute"
              );
        return n
          ? [
              (0, l.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "mute",
                  label: S.default.Messages.SOUND_MUTE,
                  action: () => a.default.toggleSelfMute({ context: t }),
                  checked: p,
                },
                "self-mute"
              ),
              (0, l.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: S.default.Messages.DEAFEN,
                  action: () => a.default.toggleSelfDeaf({ context: t }),
                  checked: T,
                },
                "self-deafen"
              ),
              A,
            ]
          : [
              (0, l.jsx)(
                u.MenuCheckboxItem,
                {
                  id: "mute",
                  label: S.default.Messages.SOUND_MUTE,
                  action: () => a.default.toggleLocalMute(e, t),
                  checked: p,
                },
                "self-mute"
              ),
              I,
              A,
            ];
      }
    },
    816106: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("446674"),
        u = n("77078"),
        r = n("629109"),
        a = n("42887"),
        o = n("697218"),
        d = n("829536"),
        s = n("773336"),
        c = n("353927"),
        f = n("782340");
      function g(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.MediaEngineContextTypes.DEFAULT,
          g = (0, i.useStateFromStores)(
            [a.default],
            () => a.default.getLocalVolume(e, n),
            [e, n]
          ),
          E =
            e ===
            (null === (t = o.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          _ = n === c.MediaEngineContextTypes.STREAM;
        return E
          ? null
          : (0, l.jsx)(u.MenuControlItem, {
              id: "user-volume",
              label: _
                ? f.default.Messages.STREAM_VOLUME
                : f.default.Messages.USER_VOLUME,
              control: (t, i) =>
                (0, l.jsx)(u.MenuSliderControl, {
                  ...t,
                  ref: i,
                  value: (0, d.amplitudeToPerceptual)(g),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: t =>
                    r.default.setLocalVolume(
                      e,
                      (0, d.perceptualToAmplitude)(t),
                      n
                    ),
                  "aria-label": _
                    ? f.default.Messages.STREAM_VOLUME
                    : f.default.Messages.USER_VOLUME,
                }),
            });
      }
    },
    811907: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("222007");
      var l,
        i = n("906932"),
        u = n("315102"),
        r = n("719923"),
        a = n("646718");
      function o(e, t) {
        return null == t || "" === t ? e : t;
      }
      l = class {
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
          return (0, i.getProfilePreviewField)(
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
          var n, l, i, u;
          (this.userId = e.userId),
            (this.guildId = null == t ? void 0 : t.guildId),
            (this.banner =
              null !== (n = null == t ? void 0 : t.banner) && void 0 !== n
                ? n
                : e.banner),
            (this.bio = o(e.bio, null == t ? void 0 : t.bio)),
            (this.pronouns = o(e.pronouns, null == t ? void 0 : t.pronouns)),
            (this.accentColor = e.accentColor),
            (this.themeColors =
              null !== (l = null == t ? void 0 : t.themeColors) && void 0 !== l
                ? l
                : e.themeColors),
            (this.popoutAnimationParticleType =
              null !==
                (i = null == t ? void 0 : t.popoutAnimationParticleType) &&
              void 0 !== i
                ? i
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
            return c;
          },
        });
      var l = n("913144"),
        i = n("327037"),
        u = n("462274"),
        r = n("535013"),
        a = n("42203"),
        o = n("26989"),
        d = n("713135"),
        s = n("386714");
      async function c(e, t) {
        var n, c, f;
        let g,
          {
            withMutualGuilds: E = !1,
            withMutualFriendsCount: _ = !1,
            friendToken: h,
            preloadUserBanner: S = !0,
            dispatchWait: m = !1,
            guildId: v,
            channelId: p,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
        if ("" === e) return;
        null != t && (0, u.maybeFetchColors)(t),
          null != v && !E && (E = !0),
          null != v &&
            (g =
              null !==
                (c =
                  null ===
                    (n = (0, r.getVisibleConnectionsRole)({
                      guildMember: o.default.getMember(v, e),
                      channel: a.default.getChannel(p),
                    })) || void 0 === n
                    ? void 0
                    : n.id) && void 0 !== c
                ? c
                : void 0);
        let T = d.default.getUserProfile(e),
          M = d.default.getMutualGuilds(e),
          C = d.default.getMutualFriendsCount(e),
          A = d.default.isFetchingProfile(e),
          I =
            (null == T ? void 0 : T.profileFetchFailed) ||
            (!A && ((!Array.isArray(M) && E) || (null == C && _))),
          b = S ? s.default : void 0,
          P = !1;
        if (null != v) {
          let t = d.default.getGuildMemberProfile(e, v);
          P = null == t;
        }
        !(
          !I &&
          !P &&
          (A ||
            Date.now() -
              (null !== (f = null == T ? void 0 : T.lastFetched) && void 0 !== f
                ? f
                : 0) <
              6e4)
        ) &&
          (m
            ? await l.default.wait(() =>
                (0, i.fetchProfile)(
                  e,
                  {
                    withMutualGuilds: E,
                    withMutualFriendsCount: _,
                    friendToken: h,
                    guildId: v,
                    connectionsRoleId: g,
                  },
                  b
                )
              )
            : await (0, i.fetchProfile)(
                e,
                {
                  withMutualGuilds: E,
                  withMutualFriendsCount: _,
                  friendToken: h,
                  guildId: v,
                  connectionsRoleId: g,
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
      var l = n("845579"),
        i = n("217513");
      function u(e, t) {
        if ("undefined" == typeof Image) return;
        let n = (0, i.getDisplayProfile)(e.user.id, t);
        if (null == n) return;
        let u = l.GifAutoPlay.getSetting(),
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
            return o;
          },
          getDisplayProfile: function () {
            return s;
          },
        }),
        n("222007");
      var l = n("446674"),
        i = n("697218"),
        u = n("117362"),
        r = n("811907"),
        a = n("713135");
      function o(e, t) {
        return (0, l.useStateFromStores)([i.default, a.default], () =>
          s(e, t, [i.default, a.default])
        );
      }
      let d = (0, u.cachedFunction)((e, t) => new r.default(e, t));
      function s(e, t) {
        let [n, l] =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [i.default, a.default],
          u = n.getUser(e),
          r = l.getUserProfile(e),
          o = l.getGuildMemberProfile(e, t);
        return null == u || null == r ? null : d(r, o);
      }
    },
    662255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        u = n("35647"),
        r = n("75196"),
        a = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: u,
              ...a
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: u,
                fill: i,
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
            return r;
          },
          copy: function () {
            return a;
          },
        }),
        n("70102");
      var l = n("281071"),
        i = n("773336"),
        u = n("50885");
      let r = (() => {
        if (i.isPlatformEmbedded) return null != u.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function a(e) {
        return (
          !!r && (i.isPlatformEmbedded ? (u.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    35466: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IdIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        u = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: a = "",
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, u.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: a,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: a,
            }),
          ],
        });
      };
    },
    265586: function (e, t, n) {
      "use strict";
      var l, i;
      n.r(t),
        n.d(t, {
          CollectiblesItemType: function () {
            return l;
          },
        }),
        ((i = l || (l = {}))[(i.NONE = 100)] = "NONE"),
        (i[(i.AVATAR_DECORATION = 0)] = "AVATAR_DECORATION"),
        (i[(i.PROFILE_EFFECT = 1)] = "PROFILE_EFFECT");
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
          i = document.createElement("textarea");
        (i.value = e),
          (i.contentEditable = "true"),
          (i.style.visibility = "none"),
          t.appendChild(i),
          n.selectNodeContents(i),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          i.focus(),
          i.setSelectionRange(0, e.length);
        let u = document.execCommand("copy");
        return t.removeChild(i), u;
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
//# sourceMappingURL=dd6b37e2704a325c1434.js.map

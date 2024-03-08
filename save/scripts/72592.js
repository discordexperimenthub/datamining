(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72592"],
  {
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    811513: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("430143");
      n.es(a, t);
    },
    287083: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("618807");
      n.es(a, t);
    },
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return g;
          },
          inviteUserToStage: function () {
            return I;
          },
          audienceAckRequestToSpeak: function () {
            return S;
          },
          moveSelfToAudience: function () {
            return C;
          },
          setUserSuppress: function () {
            return v;
          },
          moveUserToAudience: function () {
            return N;
          },
          setEveryoneRolePermissionAllowed: function () {
            return A;
          },
          startStage: function () {
            return M;
          },
          editStage: function () {
            return R;
          },
          endStage: function () {
            return O;
          },
        });
      var a = n("627445"),
        s = n.n(a),
        l = n("316693"),
        i = n("872717"),
        r = n("450911");
      n("851387");
      var u = n("798609"),
        c = n("716241"),
        d = n("18494"),
        o = n("800762"),
        f = n("991170"),
        _ = n("716214"),
        h = n("230324"),
        E = n("738983"),
        p = n("808422"),
        T = n("49111");
      function g(e, t) {
        let n = e.getGuildId();
        return (
          s(null != n, "This channel cannot be guildless."),
          t &&
            (0, c.trackWithMetadata)(
              T.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, h.getStageChannelMetadata)(e) }
            ),
          i.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function I(e, t) {
        let n = e.getGuildId();
        return (
          s(null != n, "This channel cannot be guildless."),
          i.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function S(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null == e ? void 0 : e.getGuildId();
        s(null != a, "This channel cannot be guildless.");
        let l = o.default.getVoiceStateForChannel(e.id),
          r = (0, p.getAudienceRequestToSpeakState)(l);
        return (
          r ===
            p.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, c.trackWithMetadata)(T.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, h.getStageChannelMetadata)(e),
            }),
          i.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(a),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function C(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          s(null != t, "This channel cannot be guildless."),
          i.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function v(e, t, n) {
        let a = e.getGuildId();
        return (
          s(null != a, "This channel cannot be guildless."),
          i.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(a, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function N(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          s(null != n, "This channel cannot be guildless."),
          v(t, e.id, !0),
          i.default.patch({
            url: T.Endpoints.UPDATE_VOICE_STATE(n, e.id),
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
        let a = e.getGuildId();
        s(null != a, "Channel cannot be guildless");
        let i = e.permissionOverwrites[a],
          c = {
            id: a,
            type: u.PermissionOverwriteType.ROLE,
            allow: f.default.NONE,
            deny: f.default.NONE,
            ...i,
          };
        n
          ? ((c.allow = l.default.add(c.allow, t)),
            (c.deny = l.default.remove(c.deny, t)))
          : ((c.allow = l.default.remove(c.allow, t)),
            (c.deny = l.default.add(c.deny, t))),
          r.default.updatePermissionOverwrite(e.id, c);
      }
      async function M(e, t, n, a) {
        if ("" === t) return;
        let s = d.default.getVoiceChannelId() === e.id;
        !s && (0, _.connectToStage)(e);
        let l = await (0, E.startStageInstance)(e.id, t, n, a);
        return S(e, !1, !0), l;
      }
      async function R(e, t, n) {
        if ("" === t) return;
        let a = await (0, E.updateStageInstance)(e.id, t, n);
        return a;
      }
      async function O(e) {
        await (0, E.endStageInstance)(e.id);
      }
    },
    230324: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          summarizeUsernamesParticipating: function () {
            return o;
          },
          getRemoveModeratorTooltipHint: function () {
            return f;
          },
          getStageChannelMetadata: function () {
            return _;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var a = n("945956"),
        s = n("387111"),
        l = n("991170"),
        i = n("834052"),
        r = n("837979"),
        u = n("49111"),
        c = n("606762"),
        d = n("782340");
      function o(e, t, n, a) {
        let l = t[0],
          i = s.default.getName(e, n, l),
          r = null != a ? a : t.length;
        return 1 === r && null != l
          ? i
          : null == l
            ? d.default.Messages.SPEAKING_COUNT.format({ count: r })
            : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: i,
                count: r - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case c.RowType.OWNER:
            return d.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case c.RowType.ADMINISTRATOR:
            return d.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case c.RowType.MEMBER:
          case c.RowType.ROLE:
            return t
              ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case c.RowType.EMPTY_STATE:
        }
        return null;
      }
      function _(e) {
        let t = i.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: a.default.getMediaSessionId(),
          request_to_speak_state: l.default.canEveryoneRole(
            u.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? r.RequestToSpeakPermissionStates.EVERYONE
            : r.RequestToSpeakPermissionStates.NO_ONE,
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
            return r;
          },
        });
      var a = n("872717"),
        s = n("49111");
      async function l(e, t, n, l, i) {
        let r = await a.default.post({
          url: s.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: i,
            send_start_notification: l,
          },
        });
        return r.body;
      }
      async function i(e, t, n) {
        let l = await a.default.patch({
          url: s.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return l.body;
      }
      function r(e) {
        return a.default.delete(s.Endpoints.STAGE_INSTANCE(e));
      }
    },
    119184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        l = n.n(s),
        i = n("782340"),
        r = n("662190"),
        u = n("284434"),
        c = n("315956");
      function d(e) {
        let { className: t, children: n } = e;
        return (0, a.jsxs)("div", {
          className: l(r.container, t),
          children: [
            (0, a.jsx)("img", {
              alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: l(r.sparkleIcon, r.sparkleBottom),
            }),
            n,
            (0, a.jsx)("img", {
              alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: u,
              className: l(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    337649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        l = n("476765"),
        i = n("849467"),
        r = n("155207"),
        u = n("228427"),
        c = n("244480"),
        d = n("151642"),
        o = n("29846"),
        f = n("119184"),
        _ = n("782340"),
        h = n("479682");
      function E(e) {
        let { channel: t, transitionState: n, onClose: E, ...p } = e,
          T = (0, l.useUID)(),
          g = (0, d.useStageBlockedUsersCount)(t.id),
          I = async () => {
            await (0, c.moveSelfToAudience)(t), E();
          },
          S = async () => {
            await (0, c.audienceAckRequestToSpeak)(t, !1), E();
          };
        return (0, a.jsx)(s.ModalRoot, {
          transitionState: n,
          "aria-labelledby": T,
          ...p,
          size: s.ModalSize.SMALL,
          children: (0, a.jsxs)(s.ModalContent, {
            className: h.content,
            children: [
              (0, a.jsx)(f.default, {
                children: (0, a.jsx)("div", {
                  className: h.stageIconBackground,
                  children: (0, a.jsx)(u.default, {
                    width: 40,
                    height: 40,
                    className: h.stageIcon,
                  }),
                }),
              }),
              (0, a.jsx)(s.Heading, {
                id: T,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: h.headerTitle,
                children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE,
              }),
              (0, a.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: h.headerSubtitle,
                children:
                  _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE,
              }),
              g > 0 && (0, a.jsx)(o.BlockedUsersNotice, { channelId: t.id }),
              (0, a.jsxs)("div", {
                className: h.buttonsContainer,
                children: [
                  (0, a.jsxs)(s.Button, {
                    color: s.Button.Colors.PRIMARY,
                    className: h.button,
                    innerClassName: h.innerButton,
                    onClick: S,
                    children: [
                      (0, a.jsx)("div", {
                        className: h.icon,
                        children: (0, a.jsx)(i.default, {
                          width: 20,
                          height: 20,
                        }),
                      }),
                      _.default.Messages
                        .STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER,
                    ],
                  }),
                  (0, a.jsxs)(s.Button, {
                    color: s.Button.Colors.PRIMARY,
                    className: h.button,
                    innerClassName: h.innerButton,
                    onClick: I,
                    children: [
                      (0, a.jsx)("div", {
                        className: h.icon,
                        children: (0, a.jsx)(r.default, {
                          width: 20,
                          height: 20,
                        }),
                      }),
                      _.default.Messages
                        .STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE,
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    328275: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("833222"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: s = "currentColor",
              ...l
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, a.jsx)("clipPath", {
                  children: (0, a.jsx)("path", { d: "m.000183 0h16v16h-16z" }),
                }),
                (0, a.jsx)("g", {
                  clipPath: "url(#a)",
                  children: (0, a.jsx)("path", {
                    d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                    fill: s,
                  }),
                }),
              ],
            });
          },
          l.DenyIcon,
          void 0,
          { size: 32 }
        );
    },
    155207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("811513"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: s,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          l.GroupIcon,
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
      var a = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("287083"),
        i = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: s = "currentColor",
              ...l
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, i.default)(l),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                fill: s,
              }),
            });
          },
          l.StageIcon,
          void 0,
          { size: 32 }
        );
    },
    430143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GroupIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
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
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=dc21d3e6cef65e31576d.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77118"],
  {
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    340126: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("131690");
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
            return h;
          },
          moveSelfToAudience: function () {
            return N;
          },
          setUserSuppress: function () {
            return A;
          },
          moveUserToAudience: function () {
            return C;
          },
          setEveryoneRolePermissionAllowed: function () {
            return R;
          },
          startStage: function () {
            return M;
          },
          editStage: function () {
            return O;
          },
          endStage: function () {
            return v;
          },
        });
      var a = n("627445"),
        s = n.n(a),
        i = n("316693"),
        l = n("872717"),
        r = n("450911");
      n("851387");
      var u = n("798609"),
        o = n("716241"),
        d = n("18494"),
        c = n("800762"),
        T = n("991170"),
        E = n("716214"),
        _ = n("230324"),
        f = n("738983"),
        p = n("808422"),
        S = n("49111");
      function g(e, t) {
        let n = e.getGuildId();
        return (
          s(null != n, "This channel cannot be guildless."),
          t &&
            (0, o.trackWithMetadata)(
              S.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, _.getStageChannelMetadata)(e) }
            ),
          l.HTTP.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(n),
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
          l.HTTP.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function h(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null == e ? void 0 : e.getGuildId();
        s(null != a, "This channel cannot be guildless.");
        let i = c.default.getVoiceStateForChannel(e.id),
          r = (0, p.getAudienceRequestToSpeakState)(i);
        return (
          r ===
            p.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, o.trackWithMetadata)(S.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, _.getStageChannelMetadata)(e),
            }),
          l.HTTP.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(a),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function N(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          s(null != t, "This channel cannot be guildless."),
          l.HTTP.patch({
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
      function A(e, t, n) {
        let a = e.getGuildId();
        return (
          s(null != a, "This channel cannot be guildless."),
          l.HTTP.patch({
            url: S.Endpoints.UPDATE_VOICE_STATE(a, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function C(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          s(null != n, "This channel cannot be guildless."),
          A(t, e.id, !0),
          l.HTTP.patch({
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
      function R(e, t, n) {
        let a = e.getGuildId();
        s(null != a, "Channel cannot be guildless");
        let l = e.permissionOverwrites[a],
          o = {
            id: a,
            type: u.PermissionOverwriteType.ROLE,
            allow: T.NONE,
            deny: T.NONE,
            ...l,
          };
        n
          ? ((o.allow = i.add(o.allow, t)), (o.deny = i.remove(o.deny, t)))
          : ((o.allow = i.remove(o.allow, t)), (o.deny = i.add(o.deny, t))),
          r.default.updatePermissionOverwrite(e.id, o);
      }
      async function M(e, t, n, a) {
        if ("" === t) return;
        let s = d.default.getVoiceChannelId() === e.id;
        !s && (0, E.connectToStage)(e);
        let i = await (0, f.startStageInstance)(e.id, t, n, a);
        return h(e, !1, !0), i;
      }
      async function O(e, t, n) {
        if ("" === t) return;
        let a = await (0, f.updateStageInstance)(e.id, t, n);
        return a;
      }
      async function v(e) {
        await (0, f.endStageInstance)(e.id);
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
            return T;
          },
          getStageChannelMetadata: function () {
            return E;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var a = n("945956"),
        s = n("387111"),
        i = n("991170"),
        l = n("834052"),
        r = n("837979"),
        u = n("49111"),
        o = n("606762"),
        d = n("782340");
      function c(e, t, n, a) {
        let i = t[0],
          l = s.default.getName(e, n, i),
          r = null != a ? a : t.length;
        return 1 === r && null != i
          ? l
          : null == i
            ? d.default.Messages.SPEAKING_COUNT.format({ count: r })
            : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: l,
                count: r - 1,
              });
      }
      function T(e, t) {
        switch (e) {
          case o.RowType.OWNER:
            return d.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case o.RowType.ADMINISTRATOR:
            return d.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case o.RowType.MEMBER:
          case o.RowType.ROLE:
            return t
              ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case o.RowType.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let t = l.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: a.default.getMediaSessionId(),
          request_to_speak_state: i.canEveryoneRole(
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
            return i;
          },
          updateStageInstance: function () {
            return l;
          },
          endStageInstance: function () {
            return r;
          },
        });
      var a = n("872717"),
        s = n("49111");
      async function i(e, t, n, i, l) {
        let r = await a.HTTP.post({
          url: s.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: l,
            send_start_notification: i,
          },
        });
        return r.body;
      }
      async function l(e, t, n) {
        let i = await a.HTTP.patch({
          url: s.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return i.body;
      }
      function r(e) {
        return a.HTTP.del(s.Endpoints.STAGE_INSTANCE(e));
      }
    },
    312953: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("77078"),
        i = n("987317"),
        l = n("476765"),
        r = n("674083"),
        u = n("244480"),
        o = n("119184"),
        d = n("782340"),
        c = n("905430"),
        T = e => {
          let { channel: t, ...n } = e,
            T = (0, l.useUID)();
          return (0, a.jsxs)(s.ConfirmModal, {
            confirmText: d.default.Messages.END_STAGE,
            cancelText: d.default.Messages.CANCEL,
            onConfirm: () => {
              (0, u.endStage)(t), i.default.disconnect();
            },
            confirmButtonColor: s.Button.Colors.RED,
            bodyClassName: c.body,
            ...n,
            children: [
              (0, a.jsx)(o.default, {
                className: c.headerIconContainer,
                children: (0, a.jsx)("div", {
                  className: c.iconBackground,
                  children: (0, a.jsx)(r.default, {
                    width: 40,
                    height: 40,
                    className: c.headerIcon,
                  }),
                }),
              }),
              (0, a.jsx)(s.Heading, {
                id: T,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: c.title,
                children: d.default.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE,
              }),
              (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: c.subtitle,
                children:
                  d.default.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE,
              }),
            ],
          });
        };
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
        i = n.n(s),
        l = n("782340"),
        r = n("662190"),
        u = n("284434"),
        o = n("315956");
      function d(e) {
        let { className: t, children: n } = e;
        return (0, a.jsxs)("div", {
          className: i(r.container, t),
          children: [
            (0, a.jsx)("img", {
              alt: l.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: i(r.sparkleIcon, r.sparkleBottom),
            }),
            n,
            (0, a.jsx)("img", {
              alt: l.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: u,
              className: i(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return l;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return u;
          },
        });
      var a = n("995008"),
        s = n.n(a),
        i = n("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return s(e);
        },
        r = () => (0, i.useLazyValue)(() => l()),
        u = e => {
          let { children: t } = e;
          return t(r());
        };
    },
    674083: function (e, t, n) {
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
        i = n("340126"),
        l = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 40,
              height: n = 40,
              color: s = "currentColor",
              ...i
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 40 40",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M37.581 26.6667L40 29.0857L35.7524 33.3333L40 37.581L37.581 40L33.3334 35.7524L29.0857 40L26.6667 37.581L30.9143 33.3333L26.6667 29.0857L29.0857 26.6667L33.3334 30.9143L37.581 26.6667Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M23.3294 21.5042C22.1286 22.3692 21.1773 23.5589 20.6041 24.9448C20.4081 24.981 20.2062 25 20 25C18.1667 25 16.6667 23.5 16.6667 21.6667C16.6667 19.8333 18.1667 18.3333 20 18.3333C21.7789 18.3333 23.244 19.7456 23.3294 21.5042ZM28.1664 20C27.3936 16.1977 24.0293 13.3333 20 13.3333C15.4 13.3333 11.6667 17.0667 11.6667 21.6667C11.6667 23.1833 12.1 24.5833 12.8167 25.8167L10.6334 27.0833C9.70002 25.4833 9.16669 23.6333 9.16669 21.6667C9.16669 15.7 14.0334 10.8333 20 10.8333C25.4001 10.8333 29.8992 14.8197 30.7049 20H28.1664ZM35.7468 20C34.915 12.0346 28.1871 5.83333 20 5.83333C11.25 5.83333 4.16669 12.9167 4.16669 21.6667C4.16669 24.55 4.95002 27.25 6.28335 29.5667L4.13335 30.8167C2.58335 28.1333 1.66669 25 1.66669 21.6667C1.66669 11.55 9.88335 3.33333 20 3.33333C29.5549 3.33333 37.415 10.6628 38.2584 20H35.7468ZM20.0154 27.5C20.0052 27.6654 20 27.8321 20 28V33.3333H14.1667V32.5C14.1667 29.6667 16.5667 27.5 20 27.5C20.0051 27.5 20.0103 27.5 20.0154 27.5Z",
                  fill: s,
                }),
              ],
            });
          },
          i.StageXIcon,
          void 0,
          { size: 40 }
        );
    },
    131690: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          StageXIcon: function () {
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        i = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, i.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M22.34 13.02c.31.03.63-.17.65-.49L23 12a11 11 0 1 0-20.09 6.2c.34.5 1.05.51 1.46.07l.02-.02c.33-.36.34-.91.07-1.33A9 9 0 1 1 21 12.36c-.01.38.37.68.75.65.2-.02.4-.01.6 0Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12.6 16.03c.23.02.4.23.44.46.1.6.38 1.17.84 1.63l.52.53c.2.2.2.5 0 .7l-.52.53a3 3 0 0 0-.86 2.46c.03.31-.17.63-.49.65a11.16 11.16 0 0 1-5.4-1.12 1.52 1.52 0 0 1-.8-1.84 6 6 0 0 1 6.26-4ZM13.13 14.78A3 3 0 0 1 9 12a3 3 0 1 1 4.13 2.78Z",
              className: r,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M18.79 13.71c-.08.3-.45.39-.67.17a3 3 0 0 0-.81-.58.62.62 0 0 1-.35-.63c.02-.22.04-.44.04-.67a5 5 0 1 0-9.6 1.94c.17.42.13.9-.18 1.23l-.05.06c-.43.47-1.18.42-1.45-.14a7 7 0 1 1 13.07-1.38ZM16.7 15.3a1 1 0 0 0-1.4 1.4l2.29 2.3-2.3 2.3a1 1 0 0 0 1.42 1.4L19 20.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 19l2.3-2.3a1 1 0 0 0-1.42-1.4L19 17.58l-2.3-2.3Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=e017b6b74b56120e27b2.js.map

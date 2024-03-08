(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40318"],
  {
    653711: function (e, t, l) {
      "use strict";
      e.exports = l.p + "772249b152057988b646.svg";
    },
    570459: function (e, t, l) {
      "use strict";
      e.exports = l.p + "f0e84f5784fdd3cc6b42.svg";
    },
    503021: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          fetchGuildForPopout: function () {
            return i;
          },
        });
      var n = l("872717"),
        a = l("913144"),
        s = l("49111");
      async function i(e) {
        a.default.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId: e });
        try {
          let t = await n.default.get({
            url: s.Endpoints.GUILD_PREVIEW(e),
            oldFormErrors: !0,
          });
          a.default.dispatch({
            type: "GUILD_POPOUT_FETCH_SUCCESS",
            guildId: e,
            guild: t.body,
          });
        } catch (t) {
          a.default.dispatch({
            type: "GUILD_POPOUT_FETCH_FAILURE",
            guildId: e,
          });
        }
      }
    },
    757414: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var n,
        a,
        s = l("446674"),
        i = l("913144"),
        u = l("271938"),
        d = l("794818");
      ((n = a || (a = {})).UNSET = "unset"),
        (n.FETCHING = "fetching"),
        (n.FAILED = "failed"),
        (n.SUCCEEDED = "succeeded");
      let r = { guilds: {} };
      class o extends s.default.Store {
        initialize() {
          this.waitFor(u.default);
        }
        isFetchingGuild(e) {
          let t = r.guilds[e];
          return null != t && "fetching" === t.fetchState;
        }
        getGuild(e) {
          let t = r.guilds[e];
          return null != t ? t.guild : null;
        }
        hasFetchFailed(e) {
          let t = r.guilds[e];
          return null != t && "failed" === t.fetchState;
        }
      }
      o.displayName = "GuildPopoutStore";
      var c = new o(i.default, {
        GUILD_POPOUT_FETCH_START: function (e) {
          let { guildId: t } = e;
          r.guilds[t] = { ...r.guilds[t], fetchState: "fetching" };
        },
        GUILD_POPOUT_FETCH_SUCCESS: function (e) {
          let { guildId: t, guild: l } = e,
            n = (0, d.makeDiscoverableGuild)(l);
          r.guilds[t] = { ...r.guilds[t], guild: n, fetchState: "succeeded" };
        },
        GUILD_POPOUT_FETCH_FAILURE: function (e) {
          let { guildId: t } = e;
          r.guilds[t] = { ...r.guilds[t], fetchState: "failed" };
        },
      });
    },
    246060: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          GuildUnavilableDialog: function () {
            return R;
          },
          GuildDialog: function () {
            return j;
          },
          default: function () {
            return b;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("414456"),
        i = l.n(s),
        u = l("446674"),
        d = l("669491"),
        r = l("819855"),
        o = l("77078"),
        c = l("841098"),
        f = l("407063"),
        h = l("393414"),
        g = l("271938"),
        m = l("26989"),
        _ = l("580357"),
        E = l("587974"),
        T = l("315102"),
        S = l("794818"),
        p = l("503021"),
        I = l("757414"),
        N = l("49111"),
        v = l("782340"),
        x = l("574569"),
        A = l("653711"),
        O = l("570459");
      function P() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", { className: x.splashPlaceholder }),
            (0, n.jsxs)("div", {
              className: i(x.body, x.hasSplash),
              children: [
                (0, n.jsx)("div", { className: x.iconPlaceholder }),
                (0, n.jsx)("div", {
                  className: x.headerText,
                  children: (0, n.jsx)("div", { className: x.namePlaceholder }),
                }),
                (0, n.jsxs)("div", {
                  className: x.memberInfo,
                  children: [
                    (0, n.jsx)("div", {
                      className: x.memberCount,
                      children: (0, n.jsx)("div", {
                        className: x.memberInfoPlaceholder,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: x.memberCount,
                      children: (0, n.jsx)("div", {
                        className: x.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: x.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function R() {
        let e = (0, c.default)();
        return (0, n.jsx)(o.Dialog, {
          "aria-label": v.default.Messages.GUILD_UNAVAILABLE_HEADER,
          className: x.guildPopout,
          children: (0, n.jsxs)("div", {
            className: x.body,
            children: [
              (0, n.jsx)("img", {
                src: (0, r.isThemeDark)(e) ? A : O,
                className: x.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, n.jsx)(o.Heading, {
                className: x.unavailableHeader,
                variant: "heading-md/semibold",
                children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER,
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR,
              }),
            ],
          }),
        });
      }
      function j(e) {
        var t, l;
        let { guild: s, channelId: r, messageId: c } = e,
          {
            name: p,
            id: I,
            discoverySplash: A,
            icon: O,
            description: P,
            presenceCount: R,
            memberCount: j,
            emojis: b,
          } = s,
          C = (0, u.useStateFromStores)([g.default], () => g.default.getId()),
          U = (0, u.useStateFromStores)(
            [m.default],
            () => m.default.isMember(I, C),
            [I, C]
          ),
          [D, y] = a.useState(!1),
          M = e => {
            if ((e.stopPropagation(), U)) (0, h.transitionToGuild)(I, r, c);
            else {
              let e = {
                page: N.AnalyticsPages.GUILD_CHANNEL,
                section: N.AnalyticsSections.GUILD_POPOUT,
                object: N.AnalyticsObjects.CARD,
              };
              (0, S.startLurking)(I, e);
            }
            y(!0);
          },
          L = T.default.getGuildDiscoverySplashURL({
            id: I,
            splash: A,
            size: 250 * (0, f.getDevicePixelRatio)(),
          }),
          G =
            null !==
              (t = T.default.getGuildIconURL({ id: I, icon: O, size: 80 })) &&
            void 0 !== t
              ? t
              : void 0,
          w = b,
          F = null;
        return (
          null != w &&
            w.length > 6 &&
            null != b &&
            ((w =
              null !==
                (l =
                  null == b
                    ? void 0
                    : b.slice(
                        Math.max((null == b ? void 0 : b.length) - 6, 0)
                      )) && void 0 !== l
                ? l
                : []),
            (F = b.length - 6)),
          (0, n.jsxs)(o.Dialog, {
            "aria-label": p,
            className: x.guildPopout,
            children: [
              null != L
                ? (0, n.jsx)("img", {
                    src: L,
                    alt: "",
                    className: x.splashImage,
                  })
                : null,
              (0, n.jsxs)("div", {
                className: i(x.body, { [x.hasSplash]: null != L }),
                children: [
                  (0, n.jsx)("div", {
                    className: i({ [x.iconWithSplash]: null != L }),
                    children: (0, n.jsx)(o.Clickable, {
                      onClick: M,
                      children: (0, n.jsx)(E.default, {
                        mask: E.default.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, n.jsx)("div", {
                          className: x.iconMask,
                          children: (0, n.jsx)(E.default, {
                            mask: E.default.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, n.jsx)("img", {
                              src: G,
                              alt: "",
                              className: x.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != p
                    ? (0, n.jsxs)("div", {
                        className: x.guildNameWrapper,
                        children: [
                          (0, n.jsx)(_.default, {
                            className: x.badge,
                            guild: s,
                            tooltipPosition: "top",
                            tooltipColor: o.Tooltip.Colors.PRIMARY,
                            badgeColor:
                              d.default.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, n.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            className: x.guildName,
                            children: p,
                          }),
                        ],
                      })
                    : null,
                  null != P
                    ? (0, n.jsx)(o.Text, {
                        color: "header-secondary",
                        className: x.description,
                        variant: "text-sm/normal",
                        children: P,
                      })
                    : null,
                  (0, n.jsxs)("div", {
                    className: x.memberInfo,
                    children: [
                      null != R
                        ? (0, n.jsxs)("div", {
                            className: x.memberCount,
                            children: [
                              (0, n.jsx)("div", { className: x.dotOnline }),
                              (0, n.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                className: x.memberText,
                                children:
                                  v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                    { membersOnline: R }
                                  ),
                              }),
                            ],
                          })
                        : null,
                      null != j
                        ? (0, n.jsxs)("div", {
                            className: x.memberCount,
                            children: [
                              (0, n.jsx)("div", { className: x.dotOffline }),
                              (0, n.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                className: x.memberText,
                                children:
                                  v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                                    { count: j }
                                  ),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: x.footer,
                children: [
                  null != w && w.length > 0
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: x.emojiHeader,
                            color: "header-secondary",
                            children: v.default.Messages.SERVER_EMOJI,
                          }),
                          (0, n.jsxs)("div", {
                            className: i(x.emojiContainer, {
                              [x.withCounter]: null != F,
                            }),
                            children: [
                              w.map(e => {
                                let t = T.default.getEmojiURL({
                                  id: e.id,
                                  animated: !1,
                                  size: 24,
                                });
                                return (0, n.jsx)(
                                  o.Tooltip,
                                  {
                                    text: ":".concat(e.name, ":"),
                                    children: e =>
                                      (0, n.jsx)("img", {
                                        ...e,
                                        width: 24,
                                        height: 24,
                                        src: t,
                                        className: i({ [x.emoji]: null == F }),
                                        alt: "",
                                      }),
                                  },
                                  e.id
                                );
                              }),
                              null != F
                                ? (0, n.jsx)(o.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: x.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(F),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  (0, n.jsx)(o.Button, {
                    look: o.Button.Looks.FILLED,
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.SMALL,
                    onClick: M,
                    submitting: D,
                    autoFocus: !0,
                    children:
                      v.default.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON,
                  }),
                ],
              }),
            ],
          })
        );
      }
      function b(e) {
        let { guildId: t, channelId: l, messageId: s } = e,
          {
            loading: i,
            unavailable: d,
            guild: r,
          } = (0, u.useStateFromStoresObject)(
            [I.default],
            () => ({
              guild: I.default.getGuild(t),
              loading: I.default.isFetchingGuild(t),
              unavailable: I.default.hasFetchFailed(t),
            }),
            [t]
          );
        return (a.useEffect(() => {
          null == r && !i && !d && (0, p.fetchGuildForPopout)(t);
        }, [r, t, i, d]),
        i)
          ? (0, n.jsx)(o.Dialog, {
              "aria-label": v.default.Messages.LOADING,
              className: x.guildPopout,
              children: (0, n.jsx)(P, {}),
            })
          : null == r || d
            ? (0, n.jsx)(R, {})
            : (0, n.jsx)(j, { guild: r, channelId: l, messageId: s });
      }
    },
    687521: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983"),
        a = l("884691"),
        s = l("446674"),
        i = l("77078"),
        u = l("503021"),
        d = l("757414"),
        r = l("246060");
      function o(e) {
        let { guildId: t, channelId: l, messageId: o, ...c } = e,
          { unavailable: f, guild: h } = (0, s.useStateFromStoresObject)(
            [d.default],
            () => ({
              guild: d.default.getGuild(t),
              unavailable: d.default.hasFetchFailed(t),
            }),
            [t]
          ),
          g = null != h,
          m = a.useCallback(async () => {
            try {
              !g && (await (0, u.fetchGuildForPopout)(t));
            } catch {}
          }, [g, t]);
        return f
          ? (0, n.jsx)(i.Popout, {
              position: "right",
              renderPopout: e => (0, n.jsx)(r.GuildUnavilableDialog, {}),
              ...c,
            })
          : (0, n.jsx)(i.Popout, {
              position: "right",
              preload: m,
              renderPopout: e =>
                null == h
                  ? (0, n.jsx)(n.Fragment, {})
                  : (0, n.jsx)(r.GuildDialog, {
                      ...e,
                      guild: h,
                      channelId: l,
                      messageId: o,
                    }),
              ...c,
            });
      }
    },
    244480: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          toggleRequestToSpeak: function () {
            return T;
          },
          inviteUserToStage: function () {
            return S;
          },
          audienceAckRequestToSpeak: function () {
            return p;
          },
          moveSelfToAudience: function () {
            return I;
          },
          setUserSuppress: function () {
            return N;
          },
          moveUserToAudience: function () {
            return v;
          },
          setEveryoneRolePermissionAllowed: function () {
            return x;
          },
          startStage: function () {
            return A;
          },
          editStage: function () {
            return O;
          },
          endStage: function () {
            return P;
          },
        });
      var n = l("627445"),
        a = l.n(n),
        s = l("316693"),
        i = l("872717"),
        u = l("450911");
      l("851387");
      var d = l("798609"),
        r = l("716241"),
        o = l("18494"),
        c = l("800762"),
        f = l("991170"),
        h = l("716214"),
        g = l("230324"),
        m = l("738983"),
        _ = l("808422"),
        E = l("49111");
      function T(e, t) {
        let l = e.getGuildId();
        return (
          a(null != l, "This channel cannot be guildless."),
          t &&
            (0, r.trackWithMetadata)(
              E.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, g.getStageChannelMetadata)(e) }
            ),
          i.default.patch({
            url: E.Endpoints.UPDATE_VOICE_STATE(l),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function S(e, t) {
        let l = e.getGuildId();
        return (
          a(null != l, "This channel cannot be guildless."),
          i.default.patch({
            url: E.Endpoints.UPDATE_VOICE_STATE(l, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function p(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = null == e ? void 0 : e.getGuildId();
        a(null != n, "This channel cannot be guildless.");
        let s = c.default.getVoiceStateForChannel(e.id),
          u = (0, _.getAudienceRequestToSpeakState)(s);
        return (
          u ===
            _.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, r.trackWithMetadata)(E.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, g.getStageChannelMetadata)(e),
            }),
          i.default.patch({
            url: E.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(l ? { silent: l } : {}),
            },
          })
        );
      }
      function I(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          a(null != t, "This channel cannot be guildless."),
          i.default.patch({
            url: E.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(e, t, l) {
        let n = e.getGuildId();
        return (
          a(null != n, "This channel cannot be guildless."),
          i.default.patch({
            url: E.Endpoints.UPDATE_VOICE_STATE(n, t),
            body: { suppress: l, channel_id: e.id },
          })
        );
      }
      function v(e, t) {
        if (null == t || null == e) return;
        let l = t.getGuildId();
        return (
          a(null != l, "This channel cannot be guildless."),
          N(t, e.id, !0),
          i.default.patch({
            url: E.Endpoints.UPDATE_VOICE_STATE(l, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function x(e, t, l) {
        let n = e.getGuildId();
        a(null != n, "Channel cannot be guildless");
        let i = e.permissionOverwrites[n],
          r = {
            id: n,
            type: d.PermissionOverwriteType.ROLE,
            allow: f.default.NONE,
            deny: f.default.NONE,
            ...i,
          };
        l
          ? ((r.allow = s.default.add(r.allow, t)),
            (r.deny = s.default.remove(r.deny, t)))
          : ((r.allow = s.default.remove(r.allow, t)),
            (r.deny = s.default.add(r.deny, t))),
          u.default.updatePermissionOverwrite(e.id, r);
      }
      async function A(e, t, l, n) {
        if ("" === t) return;
        let a = o.default.getVoiceChannelId() === e.id;
        !a && (0, h.connectToStage)(e);
        let s = await (0, m.startStageInstance)(e.id, t, l, n);
        return p(e, !1, !0), s;
      }
      async function O(e, t, l) {
        if ("" === t) return;
        let n = await (0, m.updateStageInstance)(e.id, t, l);
        return n;
      }
      async function P(e) {
        await (0, m.endStageInstance)(e.id);
      }
    },
    230324: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          summarizeUsernamesParticipating: function () {
            return c;
          },
          getRemoveModeratorTooltipHint: function () {
            return f;
          },
          getStageChannelMetadata: function () {
            return h;
          },
        }),
        l("808653"),
        l("222007"),
        l("917351");
      var n = l("945956"),
        a = l("387111"),
        s = l("991170"),
        i = l("834052"),
        u = l("837979"),
        d = l("49111"),
        r = l("606762"),
        o = l("782340");
      function c(e, t, l, n) {
        let s = t[0],
          i = a.default.getName(e, l, s),
          u = null != n ? n : t.length;
        return 1 === u && null != s
          ? i
          : null == s
            ? o.default.Messages.SPEAKING_COUNT.format({ count: u })
            : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: i,
                count: u - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case r.RowType.OWNER:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case r.RowType.ADMINISTRATOR:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case r.RowType.MEMBER:
          case r.RowType.ROLE:
            return t
              ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case r.RowType.EMPTY_STATE:
        }
        return null;
      }
      function h(e) {
        let t = i.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: n.default.getMediaSessionId(),
          request_to_speak_state: s.default.canEveryoneRole(
            d.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? u.RequestToSpeakPermissionStates.EVERYONE
            : u.RequestToSpeakPermissionStates.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    738983: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          startStageInstance: function () {
            return s;
          },
          updateStageInstance: function () {
            return i;
          },
          endStageInstance: function () {
            return u;
          },
        });
      var n = l("872717"),
        a = l("49111");
      async function s(e, t, l, s, i) {
        let u = await n.default.post({
          url: a.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: l,
            guild_scheduled_event_id: i,
            send_start_notification: s,
          },
        });
        return u.body;
      }
      async function i(e, t, l) {
        let s = await n.default.patch({
          url: a.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: l },
        });
        return s.body;
      }
      function u(e) {
        return n.default.delete(a.Endpoints.STAGE_INSTANCE(e));
      }
    },
    328275: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var n = l("37983");
      l("884691");
      var a = l("469563"),
        s = l("833222"),
        i = l("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: l = 32,
              color: a = "currentColor",
              ...s
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: l,
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, n.jsx)("clipPath", {
                  children: (0, n.jsx)("path", { d: "m.000183 0h16v16h-16z" }),
                }),
                (0, n.jsx)("g", {
                  clipPath: "url(#a)",
                  children: (0, n.jsx)("path", {
                    d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                    fill: a,
                  }),
                }),
              ],
            });
          },
          s.DenyIcon,
          void 0,
          { size: 32 }
        );
    },
  },
]);
//# sourceMappingURL=8d75a6130590a6637999.js.map

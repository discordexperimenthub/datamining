(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40318"],
  {
    653711: function (e, t, n) {
      "use strict";
      e.exports = n.p + "772249b152057988b646.svg";
    },
    570459: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f0e84f5784fdd3cc6b42.svg";
    },
    503021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchGuildForPopout: function () {
            return i;
          },
        });
      var l = n("872717"),
        a = n("913144"),
        s = n("49111");
      async function i(e) {
        a.default.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId: e });
        try {
          let t = await l.HTTP.get({
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
    757414: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l,
        a,
        s = n("446674"),
        i = n("913144"),
        u = n("271938"),
        d = n("794818");
      ((l = a || (a = {})).UNSET = "unset"),
        (l.FETCHING = "fetching"),
        (l.FAILED = "failed"),
        (l.SUCCEEDED = "succeeded");
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
          let { guildId: t, guild: n } = e,
            l = (0, d.makeDiscoverableGuild)(n);
          r.guilds[t] = { ...r.guilds[t], guild: l, fetchState: "succeeded" };
        },
        GUILD_POPOUT_FETCH_FAILURE: function (e) {
          let { guildId: t } = e;
          r.guilds[t] = { ...r.guilds[t], fetchState: "failed" };
        },
      });
    },
    246060: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
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
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        u = n("446674"),
        d = n("669491"),
        r = n("819855"),
        o = n("77078"),
        c = n("841098"),
        h = n("407063"),
        f = n("393414"),
        g = n("271938"),
        m = n("26989"),
        T = n("580357"),
        _ = n("587974"),
        E = n("315102"),
        S = n("794818"),
        p = n("503021"),
        I = n("757414"),
        N = n("49111"),
        v = n("782340"),
        P = n("574569"),
        x = n("653711"),
        A = n("570459");
      function O() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", { className: P.splashPlaceholder }),
            (0, l.jsxs)("div", {
              className: i(P.body, P.hasSplash),
              children: [
                (0, l.jsx)("div", { className: P.iconPlaceholder }),
                (0, l.jsx)("div", {
                  className: P.headerText,
                  children: (0, l.jsx)("div", { className: P.namePlaceholder }),
                }),
                (0, l.jsxs)("div", {
                  className: P.memberInfo,
                  children: [
                    (0, l.jsx)("div", {
                      className: P.memberCount,
                      children: (0, l.jsx)("div", {
                        className: P.memberInfoPlaceholder,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: P.memberCount,
                      children: (0, l.jsx)("div", {
                        className: P.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: P.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function R() {
        let e = (0, c.default)();
        return (0, l.jsx)(o.Dialog, {
          "aria-label": v.default.Messages.GUILD_UNAVAILABLE_HEADER,
          className: P.guildPopout,
          children: (0, l.jsxs)("div", {
            className: P.body,
            children: [
              (0, l.jsx)("img", {
                src: (0, r.isThemeDark)(e) ? x : A,
                className: P.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, l.jsx)(o.Heading, {
                className: P.unavailableHeader,
                variant: "heading-md/semibold",
                children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER,
              }),
              (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR,
              }),
            ],
          }),
        });
      }
      function j(e) {
        var t, n;
        let { guild: s, channelId: r, messageId: c } = e,
          {
            name: p,
            id: I,
            discoverySplash: x,
            icon: A,
            description: O,
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
            if ((e.stopPropagation(), U)) (0, f.transitionToGuild)(I, r, c);
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
          L = E.default.getGuildDiscoverySplashURL({
            id: I,
            splash: x,
            size: 250 * (0, h.getDevicePixelRatio)(),
          }),
          G =
            null !==
              (t = E.default.getGuildIconURL({ id: I, icon: A, size: 80 })) &&
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
                (n =
                  null == b
                    ? void 0
                    : b.slice(
                        Math.max((null == b ? void 0 : b.length) - 6, 0)
                      )) && void 0 !== n
                ? n
                : []),
            (F = b.length - 6)),
          (0, l.jsxs)(o.Dialog, {
            "aria-label": p,
            className: P.guildPopout,
            children: [
              null != L
                ? (0, l.jsx)("img", {
                    src: L,
                    alt: "",
                    className: P.splashImage,
                  })
                : null,
              (0, l.jsxs)("div", {
                className: i(P.body, { [P.hasSplash]: null != L }),
                children: [
                  (0, l.jsx)("div", {
                    className: i({ [P.iconWithSplash]: null != L }),
                    children: (0, l.jsx)(o.Clickable, {
                      onClick: M,
                      children: (0, l.jsx)(_.default, {
                        mask: _.default.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, l.jsx)("div", {
                          className: P.iconMask,
                          children: (0, l.jsx)(_.default, {
                            mask: _.default.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, l.jsx)("img", {
                              src: G,
                              alt: "",
                              className: P.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != p
                    ? (0, l.jsxs)("div", {
                        className: P.guildNameWrapper,
                        children: [
                          (0, l.jsx)(T.default, {
                            className: P.badge,
                            guild: s,
                            tooltipPosition: "top",
                            tooltipColor: o.Tooltip.Colors.PRIMARY,
                            badgeColor:
                              d.default.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, l.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            className: P.guildName,
                            children: p,
                          }),
                        ],
                      })
                    : null,
                  null != O
                    ? (0, l.jsx)(o.Text, {
                        color: "header-secondary",
                        className: P.description,
                        variant: "text-sm/normal",
                        children: O,
                      })
                    : null,
                  (0, l.jsxs)("div", {
                    className: P.memberInfo,
                    children: [
                      null != R
                        ? (0, l.jsxs)("div", {
                            className: P.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: P.dotOnline }),
                              (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                className: P.memberText,
                                children:
                                  v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                    { membersOnline: R }
                                  ),
                              }),
                            ],
                          })
                        : null,
                      null != j
                        ? (0, l.jsxs)("div", {
                            className: P.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: P.dotOffline }),
                              (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                className: P.memberText,
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
              (0, l.jsxs)("div", {
                className: P.footer,
                children: [
                  null != w && w.length > 0
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: P.emojiHeader,
                            color: "header-secondary",
                            children: v.default.Messages.SERVER_EMOJI,
                          }),
                          (0, l.jsxs)("div", {
                            className: i(P.emojiContainer, {
                              [P.withCounter]: null != F,
                            }),
                            children: [
                              w.map(e => {
                                let t = E.default.getEmojiURL({
                                  id: e.id,
                                  animated: !1,
                                  size: 24,
                                });
                                return (0, l.jsx)(
                                  o.Tooltip,
                                  {
                                    text: ":".concat(e.name, ":"),
                                    children: e =>
                                      (0, l.jsx)("img", {
                                        ...e,
                                        width: 24,
                                        height: 24,
                                        src: t,
                                        className: i({ [P.emoji]: null == F }),
                                        alt: "",
                                      }),
                                  },
                                  e.id
                                );
                              }),
                              null != F
                                ? (0, l.jsx)(o.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: P.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(F),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  (0, l.jsx)(o.Button, {
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
        let { guildId: t, channelId: n, messageId: s } = e,
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
          ? (0, l.jsx)(o.Dialog, {
              "aria-label": v.default.Messages.LOADING,
              className: P.guildPopout,
              children: (0, l.jsx)(O, {}),
            })
          : null == r || d
            ? (0, l.jsx)(R, {})
            : (0, l.jsx)(j, { guild: r, channelId: n, messageId: s });
      }
    },
    687521: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        u = n("503021"),
        d = n("757414"),
        r = n("246060");
      function o(e) {
        let { guildId: t, channelId: n, messageId: o, ...c } = e,
          { unavailable: h, guild: f } = (0, s.useStateFromStoresObject)(
            [d.default],
            () => ({
              guild: d.default.getGuild(t),
              unavailable: d.default.hasFetchFailed(t),
            }),
            [t]
          ),
          g = null != f,
          m = a.useCallback(async () => {
            try {
              !g && (await (0, u.fetchGuildForPopout)(t));
            } catch {}
          }, [g, t]);
        return h
          ? (0, l.jsx)(i.Popout, {
              position: "right",
              renderPopout: e => (0, l.jsx)(r.GuildUnavilableDialog, {}),
              ...c,
            })
          : (0, l.jsx)(i.Popout, {
              position: "right",
              preload: m,
              renderPopout: e =>
                null == f
                  ? (0, l.jsx)(l.Fragment, {})
                  : (0, l.jsx)(r.GuildDialog, {
                      ...e,
                      guild: f,
                      channelId: n,
                      messageId: o,
                    }),
              ...c,
            });
      }
    },
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return E;
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
            return P;
          },
          startStage: function () {
            return x;
          },
          editStage: function () {
            return A;
          },
          endStage: function () {
            return O;
          },
        });
      var l = n("627445"),
        a = n.n(l),
        s = n("316693"),
        i = n("872717"),
        u = n("450911");
      n("851387");
      var d = n("798609"),
        r = n("716241"),
        o = n("18494"),
        c = n("800762"),
        h = n("991170"),
        f = n("716214"),
        g = n("230324"),
        m = n("738983"),
        T = n("808422"),
        _ = n("49111");
      function E(e, t) {
        let n = e.getGuildId();
        return (
          a(null != n, "This channel cannot be guildless."),
          t &&
            (0, r.trackWithMetadata)(
              _.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, g.getStageChannelMetadata)(e) }
            ),
          i.HTTP.patch({
            url: _.Endpoints.UPDATE_VOICE_STATE(n),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function S(e, t) {
        let n = e.getGuildId();
        return (
          a(null != n, "This channel cannot be guildless."),
          i.HTTP.patch({
            url: _.Endpoints.UPDATE_VOICE_STATE(n, t),
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
        a(null != l, "This channel cannot be guildless.");
        let s = c.default.getVoiceStateForChannel(e.id),
          u = (0, T.getAudienceRequestToSpeakState)(s);
        return (
          u ===
            T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, r.trackWithMetadata)(_.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, g.getStageChannelMetadata)(e),
            }),
          i.HTTP.patch({
            url: _.Endpoints.UPDATE_VOICE_STATE(l),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function I(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          a(null != t, "This channel cannot be guildless."),
          i.HTTP.patch({
            url: _.Endpoints.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(e, t, n) {
        let l = e.getGuildId();
        return (
          a(null != l, "This channel cannot be guildless."),
          i.HTTP.patch({
            url: _.Endpoints.UPDATE_VOICE_STATE(l, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function v(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          a(null != n, "This channel cannot be guildless."),
          N(t, e.id, !0),
          i.HTTP.patch({
            url: _.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function P(e, t, n) {
        let l = e.getGuildId();
        a(null != l, "Channel cannot be guildless");
        let i = e.permissionOverwrites[l],
          r = {
            id: l,
            type: d.PermissionOverwriteType.ROLE,
            allow: h.NONE,
            deny: h.NONE,
            ...i,
          };
        n
          ? ((r.allow = s.add(r.allow, t)), (r.deny = s.remove(r.deny, t)))
          : ((r.allow = s.remove(r.allow, t)), (r.deny = s.add(r.deny, t))),
          u.default.updatePermissionOverwrite(e.id, r);
      }
      async function x(e, t, n, l) {
        if ("" === t) return;
        let a = o.default.getVoiceChannelId() === e.id;
        !a && (0, f.connectToStage)(e);
        let s = await (0, m.startStageInstance)(e.id, t, n, l);
        return p(e, !1, !0), s;
      }
      async function A(e, t, n) {
        if ("" === t) return;
        let l = await (0, m.updateStageInstance)(e.id, t, n);
        return l;
      }
      async function O(e) {
        await (0, m.endStageInstance)(e.id);
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
            return h;
          },
          getStageChannelMetadata: function () {
            return f;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var l = n("945956"),
        a = n("387111"),
        s = n("991170"),
        i = n("834052"),
        u = n("837979"),
        d = n("49111"),
        r = n("606762"),
        o = n("782340");
      function c(e, t, n, l) {
        let s = t[0],
          i = a.default.getName(e, n, s),
          u = null != l ? l : t.length;
        return 1 === u && null != s
          ? i
          : null == s
            ? o.default.Messages.SPEAKING_COUNT.format({ count: u })
            : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: i,
                count: u - 1,
              });
      }
      function h(e, t) {
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
      function f(e) {
        let t = i.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: l.default.getMediaSessionId(),
          request_to_speak_state: s.canEveryoneRole(
            d.Permissions.REQUEST_TO_SPEAK,
            e
          )
            ? u.RequestToSpeakPermissionStates.EVERYONE
            : u.RequestToSpeakPermissionStates.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    738983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
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
      var l = n("872717"),
        a = n("49111");
      async function s(e, t, n, s, i) {
        let u = await l.HTTP.post({
          url: a.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: i,
            send_start_notification: s,
          },
        });
        return u.body;
      }
      async function i(e, t, n) {
        let s = await l.HTTP.patch({
          url: a.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return s.body;
      }
      function u(e) {
        return l.HTTP.del(a.Endpoints.STAGE_INSTANCE(e));
      }
    },
    328275: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("833222"),
        i = n("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: a = "currentColor",
              ...s
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, l.jsx)("clipPath", {
                  children: (0, l.jsx)("path", { d: "m.000183 0h16v16h-16z" }),
                }),
                (0, l.jsx)("g", {
                  clipPath: "url(#a)",
                  children: (0, l.jsx)("path", {
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
//# sourceMappingURL=a6a1f0e377ce83020777.js.map

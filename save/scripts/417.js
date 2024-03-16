(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["417"],
  {
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
            return s;
          },
        });
      var u = n("446674"),
        a = n("629109"),
        d = n("271938"),
        l = n("42887"),
        i = n("49111"),
        r = n("353927");
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.MediaEngineContextTypes.DEFAULT,
          n = (0, u.useStateFromStores)([d.default], () => d.default.getId()),
          s = (0, u.useStateFromStores)(
            [l.default],
            () =>
              l.default.supports(r.Features.DISABLE_VIDEO) &&
              l.default.isVideoEnabled()
          ),
          o = (0, u.useStateFromStores)(
            [l.default],
            () => l.default.isLocalVideoDisabled(n, t),
            [n, t]
          ),
          f = null == e || e === n;
        return [
          f && (s || o),
          o,
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
            return r;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("452804"),
        d = n("135230"),
        l = n("535348"),
        i = n("782340");
      function r(e) {
        let { type: t, onConfirm: n, ...r } = e,
          s =
            t === l.SelfStreamAndVideoAlertType.STREAM
              ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER
              : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
          o =
            t === l.SelfStreamAndVideoAlertType.STREAM
              ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY
              : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
        return (0, u.jsx)(d.default, {
          confirmText: i.default.Messages.CONFIRM,
          secondaryConfirmText: i.default.Messages.DONT_ASK_AGAIN,
          title: s,
          cancelText: i.default.Messages.CANCEL,
          onConfirm: n,
          onConfirmSecondary: () => {
            a.default.updatedUnsyncedSettings({
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
      var u = n("37983");
      n("884691");
      var a = n("446674"),
        d = n("77078"),
        l = n("255397"),
        i = n("191145"),
        r = n("782340");
      function s(e) {
        let t = (0, a.useStateFromStores)([i.default], () =>
          i.default.getVoiceParticipantsHidden(e)
        );
        return (0, u.jsx)(d.MenuCheckboxItem, {
          id: "no-video-hide",
          label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
          checked: !t,
          action: () => l.default.toggleVoiceParticipantsHidden(e, !t),
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
        d = n("77078"),
        l = n("168973"),
        i = n("301603"),
        r = n("632616"),
        s = n("535348"),
        o = n("353927"),
        f = n("782340");
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.MediaEngineContextTypes.DEFAULT,
          [n, c, E] = (0, i.default)(e, t),
          S = (0, a.useStateFromStores)(
            [l.default],
            () => l.default.disableHideSelfStreamAndVideoConfirmationAlert
          );
        return n
          ? (0, u.jsx)(d.MenuCheckboxItem, {
              id: "self-video-hide",
              label: f.default.Messages.SHOW_SELF_VIDEO,
              checked: !c,
              action: () => {
                if (S || c) return E(!c);
                (0, d.openModal)(e =>
                  (0, u.jsx)(r.default, {
                    ...e,
                    type: s.SelfStreamAndVideoAlertType.VIDEO,
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
        d = n("77078"),
        l = n("648911"),
        i = n("271938"),
        r = n("42887"),
        s = n("782340"),
        o = n("325483");
      function f(e) {
        let t = (0, d.useModalContext)(),
          f = (0, a.useStateFromStores)([r.default], () =>
            r.default.isVideoEnabled()
          ),
          c = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.getId() === e
          ),
          E = (0, l.default)();
        return (!f || E) && c
          ? (0, u.jsx)(d.MenuItem, {
              id: "change-video-background",
              label: (0, u.jsx)("div", {
                className: o.item,
                children: f
                  ? s.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM
                  : s.default.Messages.CAMERA_PREVIEW_MENU_ITEM,
              }),
              action: function () {
                (0, d.openModalLazy)(
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
    207273: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var u = n("298386"),
        a = n("446674"),
        d = n("913144"),
        l = n("619443");
      let i = new Set(),
        r = {};
      function s() {
        i.clear();
      }
      function o(e) {
        i.delete(e.guild.id);
      }
      class f extends a.default.Store {
        getChannelStatus(e) {
          var t;
          if (null != e && null != e.guild_id) {
            if (e.type === u.ChannelTypes.GUILD_VOICE)
              return (
                !i.has(e.guild_id) &&
                  (i.add(e.guild_id),
                  l.default.getSocket().requestChannelStatuses(e.guild_id)),
                null === (t = r[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
              );
          }
        }
      }
      f.displayName = "ChannelStatusStore";
      var c = new f(d.default, {
        GUILD_CREATE: o,
        GUILD_DELETE: o,
        CONNECTION_RESUMED: s,
        CONNECTION_OPEN: s,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          null == r[e.guildId] && (r[e.guildId] = {}),
            (r[e.guildId][e.id] = e.status);
        },
        CHANNEL_STATUSES: function (e) {
          for (let { id: t, status: n } of ((r[e.guildId] = {}), e.channels))
            r[e.guildId][t] = n;
        },
      });
    },
    229233: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("77078"),
        d = n("272030"),
        l = n("158534"),
        i = n("812204"),
        r = n("861370"),
        s = n("47495"),
        o = n("715243"),
        f = n("261675"),
        c = n("963150"),
        E = n("308798"),
        S = n("47006"),
        _ = n("878526"),
        M = n("531674"),
        A = n("619436"),
        C = n("625399"),
        I = n("731390"),
        T = n("339876"),
        N = n("49111"),
        g = n("782340"),
        O = (0, l.default)(
          function (e) {
            let { channel: t, guild: n, includeTopic: l = !1, onSelect: i } = e,
              O = (0, T.default)(t),
              p = (0, M.default)(t),
              h = (0, A.default)(t),
              D = (0, f.default)(t),
              m = (0, S.default)(t),
              L = (0, _.default)(t, n),
              v = (0, o.default)(t, n),
              x = (0, c.default)(t, n, N.ChannelTypes.GUILD_TEXT),
              V = (0, c.default)(t, n, N.ChannelTypes.GUILD_VOICE),
              y = (0, E.default)(t),
              F = (0, r.default)({
                id: t.id,
                label: g.default.Messages.COPY_ID_CHANNEL,
              }),
              R = (0, I.default)(t, "title_context_menu"),
              U = (0, s.useShouldUseNewNotificationSystem)(
                "ChannelTitleContextMenu"
              ),
              b = (0, C.default)(t);
            return (0, u.jsxs)(a.Menu, {
              navId: "channel-context",
              onClose: d.closeContextMenu,
              "aria-label": g.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: i,
              children: [
                (0, u.jsx)(a.MenuGroup, { children: O }),
                (0, u.jsx)(a.MenuGroup, { children: p }),
                (0, u.jsxs)(a.MenuGroup, { children: [l ? D : U ? b : h, m] }),
                (0, u.jsxs)(a.MenuGroup, { children: [L, v, x, V] }),
                (0, u.jsx)(a.MenuGroup, { children: R }),
                (0, u.jsx)(a.MenuGroup, { children: y }),
                (0, u.jsx)(a.MenuGroup, { children: F }),
              ],
            });
          },
          [i.default.CONTEXT_MENU, i.default.CHANNEL_TITLE_MENU]
        );
    },
    261675: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("77078"),
        d = n("306160"),
        l = n("782340");
      function i(e) {
        return d.SUPPORTS_COPY
          ? (0, u.jsx)(a.MenuItem, {
              id: "copy-channel-topic",
              label: l.default.Messages.COPY_CHANNEL_TOPIC,
              action: () => (0, d.copy)(e.topic),
            })
          : null;
      }
    },
    648911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var u = n("446674"),
        a = n("42887"),
        d = n("512244");
      function l() {
        return (0, u.useStateFromStores)([a.default], () =>
          (0, d.default)(a.default)
        );
      }
    },
  },
]);
//# sourceMappingURL=20a1f0443a9bb2c3e94a.js.map

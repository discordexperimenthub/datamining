(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36924"],
  {
    207273: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return f;
          },
        }),
        u("222007");
      var n = u("298386"),
        l = u("446674"),
        d = u("913144"),
        a = u("619443");
      let i = new Set(),
        s = {};
      function r() {
        i.clear();
      }
      function o(e) {
        i.delete(e.guild.id);
      }
      class c extends l.default.Store {
        getChannelStatus(e) {
          var t;
          if (null != e && null != e.guild_id) {
            if (e.type === n.ChannelTypes.GUILD_VOICE)
              return (
                !i.has(e.guild_id) &&
                  (i.add(e.guild_id),
                  a.default.getSocket().requestChannelStatuses(e.guild_id)),
                null === (t = s[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
              );
          }
        }
      }
      c.displayName = "ChannelStatusStore";
      var f = new c(d.default, {
        GUILD_CREATE: o,
        GUILD_DELETE: o,
        CONNECTION_RESUMED: r,
        CONNECTION_OPEN: r,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          null == s[e.guildId] && (s[e.guildId] = {}),
            (s[e.guildId][e.id] = e.status);
        },
        CHANNEL_STATUSES: function (e) {
          for (let { id: t, status: u } of ((s[e.guildId] = {}), e.channels))
            s[e.guildId][t] = u;
        },
      });
    },
    229233: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return g;
          },
        });
      var n = u("37983");
      u("884691");
      var l = u("77078"),
        d = u("272030"),
        a = u("158534"),
        i = u("812204"),
        s = u("861370"),
        r = u("47495"),
        o = u("715243"),
        c = u("261675"),
        f = u("963150"),
        C = u("308798"),
        _ = u("47006"),
        E = u("878526"),
        N = u("531674"),
        h = u("619436"),
        p = u("625399"),
        T = u("731390"),
        I = u("339876"),
        S = u("49111"),
        M = u("782340"),
        g = (0, a.default)(
          function (e) {
            let { channel: t, guild: u, includeTopic: a = !1, onSelect: i } = e,
              g = (0, I.default)(t),
              L = (0, N.default)(t),
              O = (0, h.default)(t),
              x = (0, c.default)(t),
              U = (0, _.default)(t),
              A = (0, E.default)(t, u),
              G = (0, o.default)(t, u),
              v = (0, f.default)(t, u, S.ChannelTypes.GUILD_TEXT),
              j = (0, f.default)(t, u, S.ChannelTypes.GUILD_VOICE),
              D = (0, C.default)(t),
              y = (0, s.default)({
                id: t.id,
                label: M.default.Messages.COPY_ID_CHANNEL,
              }),
              P = (0, T.default)(t, "title_context_menu"),
              H = (0, r.useShouldUseNewNotificationSystem)(
                "ChannelTitleContextMenu"
              ),
              b = (0, p.default)(t);
            return (0, n.jsxs)(l.Menu, {
              navId: "channel-context",
              onClose: d.closeContextMenu,
              "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: i,
              children: [
                (0, n.jsx)(l.MenuGroup, { children: g }),
                (0, n.jsx)(l.MenuGroup, { children: L }),
                (0, n.jsxs)(l.MenuGroup, { children: [a ? x : H ? b : O, U] }),
                (0, n.jsxs)(l.MenuGroup, { children: [A, G, v, j] }),
                (0, n.jsx)(l.MenuGroup, { children: P }),
                (0, n.jsx)(l.MenuGroup, { children: D }),
                (0, n.jsx)(l.MenuGroup, { children: y }),
              ],
            });
          },
          [i.default.CONTEXT_MENU, i.default.CHANNEL_TITLE_MENU]
        );
    },
    261675: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return i;
          },
        });
      var n = u("37983");
      u("884691");
      var l = u("77078"),
        d = u("306160"),
        a = u("782340");
      function i(e) {
        return d.SUPPORTS_COPY
          ? (0, n.jsx)(l.MenuItem, {
              id: "copy-channel-topic",
              label: a.default.Messages.COPY_CHANNEL_TOPIC,
              action: () => (0, d.copy)(e.topic),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=2a9e9c7b7407f18411cb.js.map

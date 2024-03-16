(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16263"],
  {
    969176: function (e, t, n) {
      var a = n("354069");
      e.exports = function (e, t) {
        return a(e, t);
      };
    },
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("685665");
      function u(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: u } = (0, l.default)(t);
          return (0, a.jsx)(u, { children: (0, a.jsx)(e, { ...n }) });
        };
      }
    },
    207273: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var a = n("298386"),
        l = n("446674"),
        u = n("913144"),
        i = n("619443");
      let d = new Set(),
        s = {};
      function r() {
        d.clear();
      }
      function o(e) {
        d.delete(e.guild.id);
      }
      class c extends l.default.Store {
        getChannelStatus(e) {
          var t;
          if (null != e && null != e.guild_id) {
            if (e.type === a.ChannelTypes.GUILD_VOICE)
              return (
                !d.has(e.guild_id) &&
                  (d.add(e.guild_id),
                  i.default.getSocket().requestChannelStatuses(e.guild_id)),
                null === (t = s[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
              );
          }
        }
      }
      c.displayName = "ChannelStatusStore";
      var f = new c(u.default, {
        GUILD_CREATE: o,
        GUILD_DELETE: o,
        CONNECTION_RESUMED: r,
        CONNECTION_OPEN: r,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          null == s[e.guildId] && (s[e.guildId] = {}),
            (s[e.guildId][e.id] = e.status);
        },
        CHANNEL_STATUSES: function (e) {
          for (let { id: t, status: n } of ((s[e.guildId] = {}), e.channels))
            s[e.guildId][t] = n;
        },
      });
    },
    913452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOpenInPopoutExperiment: function () {
            return u;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function u(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    229233: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("272030"),
        i = n("158534"),
        d = n("812204"),
        s = n("861370"),
        r = n("47495"),
        o = n("715243"),
        c = n("261675"),
        f = n("963150"),
        _ = n("308798"),
        E = n("47006"),
        C = n("878526"),
        p = n("531674"),
        h = n("619436"),
        N = n("625399"),
        I = n("731390"),
        T = n("339876"),
        O = n("49111"),
        g = n("782340"),
        M = (0, i.default)(
          function (e) {
            let { channel: t, guild: n, includeTopic: i = !1, onSelect: d } = e,
              M = (0, T.default)(t),
              m = (0, p.default)(t),
              A = (0, h.default)(t),
              L = (0, c.default)(t),
              S = (0, E.default)(t),
              x = (0, C.default)(t, n),
              v = (0, o.default)(t, n),
              U = (0, f.default)(t, n, O.ChannelTypes.GUILD_TEXT),
              y = (0, f.default)(t, n, O.ChannelTypes.GUILD_VOICE),
              P = (0, _.default)(t),
              b = (0, s.default)({
                id: t.id,
                label: g.default.Messages.COPY_ID_CHANNEL,
              }),
              G = (0, I.default)(t, "title_context_menu"),
              j = (0, r.useShouldUseNewNotificationSystem)(
                "ChannelTitleContextMenu"
              ),
              V = (0, N.default)(t);
            return (0, a.jsxs)(l.Menu, {
              navId: "channel-context",
              onClose: u.closeContextMenu,
              "aria-label": g.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: d,
              children: [
                (0, a.jsx)(l.MenuGroup, { children: M }),
                (0, a.jsx)(l.MenuGroup, { children: m }),
                (0, a.jsxs)(l.MenuGroup, { children: [i ? L : j ? V : A, S] }),
                (0, a.jsxs)(l.MenuGroup, { children: [x, v, U, y] }),
                (0, a.jsx)(l.MenuGroup, { children: G }),
                (0, a.jsx)(l.MenuGroup, { children: P }),
                (0, a.jsx)(l.MenuGroup, { children: b }),
              ],
            });
          },
          [d.default.CONTEXT_MENU, d.default.CHANNEL_TITLE_MENU]
        );
    },
    715243: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        i = n("957255"),
        d = n("49111"),
        s = n("782340");
      function r(e, t) {
        let r = (0, l.useStateFromStores)(
          [i.default],
          () => i.default.can(d.Permissions.MANAGE_CHANNELS, e),
          [e]
        );
        return __OVERLAY__ || !r
          ? null
          : (0, a.jsx)(u.MenuItem, {
              id: "clone-channel",
              label: s.default.Messages.CLONE_CHANNEL,
              action: () =>
                (0, u.openModalLazy)(async () => {
                  let { default: l } = await n
                    .el("581354")
                    .then(n.bind(n, "581354"));
                  return n =>
                    (0, a.jsx)(l, {
                      ...n,
                      channelType: e.type,
                      guildId: t.id,
                      categoryId: e.parent_id,
                      cloneChannelId: e.id,
                    });
                }),
            });
      }
    },
    261675: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("306160"),
        i = n("782340");
      function d(e) {
        return u.SUPPORTS_COPY
          ? (0, a.jsx)(l.MenuItem, {
              id: "copy-channel-topic",
              label: i.default.Messages.COPY_CHANNEL_TOPIC,
              action: () => (0, u.copy)(e.topic),
            })
          : null;
      }
    },
    963150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        i = n("957255"),
        d = n("49111"),
        s = n("782340");
      function r(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          o = (0, l.useStateFromStores)(
            [i.default],
            () => i.default.can(d.Permissions.MANAGE_CHANNELS, e),
            [e]
          );
        if (__OVERLAY__ || !o) return null;
        let c = () => {
          (0, u.openModalLazy)(async () => {
            let { default: t } = await n.el("581354").then(n.bind(n, "581354"));
            return n =>
              (0, a.jsx)(t, {
                ...n,
                channelType: r,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (r) {
          case d.ChannelTypes.GUILD_TEXT:
            return (0, a.jsx)(u.MenuItem, {
              id: "create-text-channel",
              label: s.default.Messages.CREATE_TEXT_CHANNEL,
              action: c,
            });
          case d.ChannelTypes.GUILD_VOICE:
            return (0, a.jsx)(u.MenuItem, {
              id: "create-voice-channel",
              label: s.default.Messages.CREATE_VOICE_CHANNEL,
              action: c,
            });
          default:
            return null;
        }
      }
    },
    47006: function (e, t, n) {
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
        i = n("18054"),
        d = n("957255"),
        s = n("49111"),
        r = n("782340");
      function o(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: o,
          canAccessChannel: c,
        } = (0, l.useStateFromStoresObject)(
          [d.default],
          () => ({
            canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: d.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && c && (t || n || o)
          ? (0, a.jsx)(u.MenuItem, {
              id: "edit-channel",
              label:
                e.type === s.ChannelTypes.GUILD_CATEGORY
                  ? r.default.Messages.EDIT_CATEGORY
                  : r.default.Messages.EDIT_CHANNEL,
              action: () => i.default.open(e.id),
            })
          : null;
      }
    },
    878526: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("58622"),
        l = n("49111");
      function u(e, t, n) {
        return (0, a.default)({
          guild: t,
          channel: e,
          stageInstance: n,
          source: l.InstantInviteSources.CONTEXT_MENU,
        });
      }
    },
    731390: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        u = n("77078"),
        i = n("390236"),
        d = n("292508"),
        s = n("383294"),
        r = n("913452"),
        o = n("533466"),
        c = n("49111"),
        f = n("765479");
      function _(e) {
        let { windowKey: t, channel: n } = e;
        return (0, a.jsx)(d.default, {
          withTitleBar: !0,
          windowKey: t,
          title: n.name,
          channelId: n.id,
          contentClassName: f.popoutContent,
          children: (0, a.jsx)(i.default.Provider, {
            value: n.guild_id,
            children: (0, a.jsx)(o.default, { providedChannel: n }),
          }),
        });
      }
      function E(e, t) {
        let n = (0, r.useOpenInPopoutExperiment)(t),
          i = l.useCallback(() => {
            s.open(
              "".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id),
              t => (0, a.jsx)(_, { windowKey: t, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 }
            );
          }, [e]);
        return n
          ? (0, a.jsx)(u.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => i(),
            })
          : null;
      }
    },
    339876: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        i = n("498139"),
        d = n("629220"),
        s = n("512395"),
        r = n("282109"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let { isFavoritesPerk: t } = (0, i.useFavoritesServerExperiment)(
            "useChannelOptInItems"
          ),
          n = (0, s.useOptInEnabledForGuild)(e.guild_id),
          f = (0, l.useStateFromStores)([r.default], () =>
            r.default.isChannelOptedIn(e.guild_id, e.id)
          ),
          _ = (0, l.useStateFromStores)(
            [r.default],
            () =>
              null != e.parent_id &&
              r.default.isChannelOptedIn(e.guild_id, e.parent_id)
          ),
          E = (0, l.useStateFromStores)([r.default], () =>
            r.default.isFavorite(e.guild_id, e.id)
          ),
          C = () => {
            (0, d.setOptInChannel)(e.guild_id, e.id, !f, {
              section: o.AnalyticsSections.CONTEXT_MENU,
            });
          },
          p = () => {
            null != e.parent_id &&
              (0, d.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                section: o.AnalyticsSections.CONTEXT_MENU,
              });
          };
        if (!n || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(u.MenuItem, {
            id: "opt-into-category",
            label: f
              ? c.default.Messages.CHANNEL_OPT_OUT
              : c.default.Messages.CHANNEL_OPT_IN,
            action: () => C(),
          });
        let h = E
            ? c.default.Messages.REMOVE_FAVORITE
            : c.default.Messages.ADD_FAVORITE,
          N = E
            ? c.default.Messages.UNPIN_CHANNEL
            : c.default.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(u.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? N : h,
              action: () => {
                (0, d.setIsFavorite)(e.guild_id, e.id, !E, {
                  section: o.AnalyticsSections.CONTEXT_MENU,
                });
              },
            }),
            _
              ? (0, a.jsx)(u.MenuItem, {
                  id: "opt-out-category",
                  label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => p(),
                })
              : (0, a.jsx)(u.MenuItem, {
                  id: "opt-into-channel",
                  label: f
                    ? c.default.Messages.CHANNEL_OPT_OUT
                    : c.default.Messages.CHANNEL_OPT_IN,
                  action: () => C(),
                }),
          ],
        });
      }
    },
    58622: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        u = n("77078"),
        i = n("242757"),
        d = n("923959"),
        s = n("957255"),
        r = n("76539"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let { source: t, guild: n, channel: a, stageInstance: u } = e,
          r = (0, l.useStateFromStores)([d.default], () =>
            d.default.getDefaultChannel(
              n.id,
              !0,
              o.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, l.useStateFromStores)([s.default], () =>
            (0, i.canViewInviteModal)(s.default, n, a, u)
          ),
          f = _(t, n, c && null != a ? a : r),
          C = E(t);
        return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : c || null != r
            ? f
            : C;
      }
      let _ = (e, t, l) =>
          (0, a.jsx)(u.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
            action: () =>
              (0, u.openModalLazy)(async () => {
                let { default: u } = await n
                  .el("310688")
                  .then(n.bind(n, "310688"));
                return n =>
                  (0, a.jsx)(u, { ...n, guild: t, channel: l, source: e });
              }),
          }),
        E = e =>
          (0, a.jsx)(u.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
            action: () =>
              (0, u.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("973132")
                  .then(n.bind(n, "973132"));
                return t => (0, a.jsx)(e, { ...t });
              }),
          });
    },
    830210: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
          getChannelVideoLimit: function () {
            return s;
          },
        });
      var a = n("446674"),
        l = n("305961"),
        u = n("316133"),
        i = n("49111");
      function d(e) {
        return (0, a.useStateFromStoresObject)(
          [u.default, l.default],
          () => {
            let t = u.default.countVoiceStatesForChannel(e.id),
              n = l.default.getGuild(e.getGuildId());
            return null == n
              ? { reachedLimit: !1, limit: -1 }
              : e.type === i.ChannelTypes.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers,
                  };
          },
          [e]
        );
      }
      function s(e) {
        let t = u.default.countVoiceStatesForChannel(e.id),
          n = l.default.getGuild(e.getGuildId());
        return null == n
          ? { reachedLimit: !1, limit: -1 }
          : e.type === i.ChannelTypes.GUILD_STAGE_VOICE
            ? {
                reachedLimit: t > n.maxStageVideoChannelUsers,
                limit: n.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                limit: n.maxVideoChannelUsers,
              };
      }
    },
    727284: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        u = n("845579"),
        i = n("49111");
      function d(e, t) {
        u.AlwaysPreviewVideo.getSetting()
          ? (0, l.openModalLazy)(
              async () => {
                let { default: t } = await n
                  .el("381736")
                  .then(n.bind(n, "381736"));
                return n =>
                  (0, a.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  t === i.AppContext.POPOUT
                    ? l.POPOUT_MODAL_CONTEXT
                    : l.DEFAULT_MODAL_CONTEXT,
              }
            )
          : null == e || e();
      }
    },
  },
]);
//# sourceMappingURL=4188291e827401d8c8e0.js.map

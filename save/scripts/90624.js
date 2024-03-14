(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90624"],
  {
    969176: function (e, t, n) {
      var a = n("354069");
      e.exports = function (e, t) {
        return a(e, t);
      };
    },
    289867: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("913144"),
        l = {
          toggleMembersSection() {
            a.default.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
          },
          toggleProfilePanelSection() {
            a.default.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
          },
          toggleSummariesSection() {
            a.default.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
          },
        };
    },
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("685665");
      function i(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: i } = (0, l.default)(t);
          return (0, a.jsx)(i, { children: (0, a.jsx)(e, { ...n }) });
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
        i = n("913144"),
        u = n("619443");
      let s = new Set(),
        r = {};
      function d() {
        s.clear();
      }
      function o(e) {
        s.delete(e.guild.id);
      }
      class c extends l.default.Store {
        getChannelStatus(e) {
          var t;
          if (null != e && null != e.guild_id) {
            if (e.type === a.ChannelTypes.GUILD_VOICE)
              return (
                !s.has(e.guild_id) &&
                  (s.add(e.guild_id),
                  u.default.getSocket().requestChannelStatuses(e.guild_id)),
                null === (t = r[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
              );
          }
        }
      }
      c.displayName = "ChannelStatusStore";
      var f = new c(i.default, {
        GUILD_CREATE: o,
        GUILD_DELETE: o,
        CONNECTION_RESUMED: d,
        CONNECTION_OPEN: d,
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
    913452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOpenInPopoutExperiment: function () {
            return i;
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
      function i(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    229233: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("272030"),
        u = n("158534"),
        s = n("812204"),
        r = n("861370"),
        d = n("47495"),
        o = n("715243"),
        c = n("261675"),
        f = n("963150"),
        _ = n("308798"),
        E = n("47006"),
        p = n("878526"),
        C = n("531674"),
        h = n("619436"),
        T = n("625399"),
        I = n("731390"),
        N = n("339876"),
        m = n("49111"),
        g = n("782340"),
        O = (0, u.default)(
          function (e) {
            let { channel: t, guild: n, includeTopic: u = !1, onSelect: s } = e,
              O = (0, N.default)(t),
              A = (0, C.default)(t),
              S = (0, h.default)(t),
              M = (0, c.default)(t),
              L = (0, E.default)(t),
              v = (0, p.default)(t, n),
              y = (0, o.default)(t, n),
              x = (0, f.default)(t, n, m.ChannelTypes.GUILD_TEXT),
              P = (0, f.default)(t, n, m.ChannelTypes.GUILD_VOICE),
              U = (0, _.default)(t),
              G = (0, r.default)({
                id: t.id,
                label: g.default.Messages.COPY_ID_CHANNEL,
              }),
              b = (0, I.default)(t, "title_context_menu"),
              j = (0, d.useShouldUseNewNotificationSystem)(
                "ChannelTitleContextMenu"
              ),
              V = (0, T.default)(t);
            return (0, a.jsxs)(l.Menu, {
              navId: "channel-context",
              onClose: i.closeContextMenu,
              "aria-label": g.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, a.jsx)(l.MenuGroup, { children: O }),
                (0, a.jsx)(l.MenuGroup, { children: A }),
                (0, a.jsxs)(l.MenuGroup, { children: [u ? M : j ? V : S, L] }),
                (0, a.jsxs)(l.MenuGroup, { children: [v, y, x, P] }),
                (0, a.jsx)(l.MenuGroup, { children: b }),
                (0, a.jsx)(l.MenuGroup, { children: U }),
                (0, a.jsx)(l.MenuGroup, { children: G }),
              ],
            });
          },
          [s.default.CONTEXT_MENU, s.default.CHANNEL_TITLE_MENU]
        );
    },
    715243: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("957255"),
        s = n("49111"),
        r = n("782340");
      function d(e, t) {
        let d = (0, l.useStateFromStores)(
          [u.default],
          () => u.default.can(s.Permissions.MANAGE_CHANNELS, e),
          [e]
        );
        return __OVERLAY__ || !d
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "clone-channel",
              label: r.default.Messages.CLONE_CHANNEL,
              action: () =>
                (0, i.openModalLazy)(async () => {
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
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("306160"),
        u = n("782340");
      function s(e) {
        return i.SUPPORTS_COPY
          ? (0, a.jsx)(l.MenuItem, {
              id: "copy-channel-topic",
              label: u.default.Messages.COPY_CHANNEL_TOPIC,
              action: () => (0, i.copy)(e.topic),
            })
          : null;
      }
    },
    963150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("446674"),
        i = n("77078"),
        u = n("957255"),
        s = n("49111"),
        r = n("782340");
      function d(e, t) {
        let d =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          o = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.can(s.Permissions.MANAGE_CHANNELS, e),
            [e]
          );
        if (__OVERLAY__ || !o) return null;
        let c = () => {
          (0, i.openModalLazy)(async () => {
            let { default: t } = await n.el("581354").then(n.bind(n, "581354"));
            return n =>
              (0, a.jsx)(t, {
                ...n,
                channelType: d,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (d) {
          case s.ChannelTypes.GUILD_TEXT:
            return (0, a.jsx)(i.MenuItem, {
              id: "create-text-channel",
              label: r.default.Messages.CREATE_TEXT_CHANNEL,
              action: c,
            });
          case s.ChannelTypes.GUILD_VOICE:
            return (0, a.jsx)(i.MenuItem, {
              id: "create-voice-channel",
              label: r.default.Messages.CREATE_VOICE_CHANNEL,
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
        i = n("77078"),
        u = n("18054"),
        s = n("957255"),
        r = n("49111"),
        d = n("782340");
      function o(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: o,
          canAccessChannel: c,
        } = (0, l.useStateFromStoresObject)(
          [s.default],
          () => ({
            canManageChannels: s.default.can(r.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: s.default.can(r.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: s.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: s.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && c && (t || n || o)
          ? (0, a.jsx)(i.MenuItem, {
              id: "edit-channel",
              label:
                e.type === r.ChannelTypes.GUILD_CATEGORY
                  ? d.default.Messages.EDIT_CATEGORY
                  : d.default.Messages.EDIT_CHANNEL,
              action: () => u.default.open(e.id),
            })
          : null;
      }
    },
    878526: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("58622"),
        l = n("49111");
      function i(e, t, n) {
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
        i = n("77078"),
        u = n("390236"),
        s = n("292508"),
        r = n("383294"),
        d = n("913452"),
        o = n("533466"),
        c = n("49111"),
        f = n("765479");
      function _(e) {
        let { windowKey: t, channel: n } = e;
        return (0, a.jsx)(s.default, {
          withTitleBar: !0,
          windowKey: t,
          title: n.name,
          channelId: n.id,
          contentClassName: f.popoutContent,
          children: (0, a.jsx)(u.default.Provider, {
            value: n.guild_id,
            children: (0, a.jsx)(o.default, { providedChannel: n }),
          }),
        });
      }
      function E(e, t) {
        let n = (0, d.useOpenInPopoutExperiment)(t),
          u = l.useCallback(() => {
            r.open(
              "".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id),
              t => (0, a.jsx)(_, { windowKey: t, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 }
            );
          }, [e]);
        return n
          ? (0, a.jsx)(i.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => u(),
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
        i = n("77078"),
        u = n("498139"),
        s = n("629220"),
        r = n("512395"),
        d = n("282109"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let { isFavoritesPerk: t } = (0, u.useFavoritesServerExperiment)(
            "useChannelOptInItems"
          ),
          n = (0, r.useOptInEnabledForGuild)(e.guild_id),
          f = (0, l.useStateFromStores)([d.default], () =>
            d.default.isChannelOptedIn(e.guild_id, e.id)
          ),
          _ = (0, l.useStateFromStores)(
            [d.default],
            () =>
              null != e.parent_id &&
              d.default.isChannelOptedIn(e.guild_id, e.parent_id)
          ),
          E = (0, l.useStateFromStores)([d.default], () =>
            d.default.isFavorite(e.guild_id, e.id)
          ),
          p = () => {
            (0, s.setOptInChannel)(e.guild_id, e.id, !f, {
              section: o.AnalyticsSections.CONTEXT_MENU,
            });
          },
          C = () => {
            null != e.parent_id &&
              (0, s.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                section: o.AnalyticsSections.CONTEXT_MENU,
              });
          };
        if (!n || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(i.MenuItem, {
            id: "opt-into-category",
            label: f
              ? c.default.Messages.CHANNEL_OPT_OUT
              : c.default.Messages.CHANNEL_OPT_IN,
            action: () => p(),
          });
        let h = E
            ? c.default.Messages.REMOVE_FAVORITE
            : c.default.Messages.ADD_FAVORITE,
          T = E
            ? c.default.Messages.UNPIN_CHANNEL
            : c.default.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? T : h,
              action: () => {
                (0, s.setIsFavorite)(e.guild_id, e.id, !E, {
                  section: o.AnalyticsSections.CONTEXT_MENU,
                });
              },
            }),
            _
              ? (0, a.jsx)(i.MenuItem, {
                  id: "opt-out-category",
                  label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => C(),
                })
              : (0, a.jsx)(i.MenuItem, {
                  id: "opt-into-channel",
                  label: f
                    ? c.default.Messages.CHANNEL_OPT_OUT
                    : c.default.Messages.CHANNEL_OPT_IN,
                  action: () => p(),
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
        i = n("77078"),
        u = n("242757"),
        s = n("923959"),
        r = n("957255"),
        d = n("76539"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let { source: t, guild: n, channel: a, stageInstance: i } = e,
          d = (0, l.useStateFromStores)([s.default], () =>
            s.default.getDefaultChannel(
              n.id,
              !0,
              o.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, l.useStateFromStores)([r.default], () =>
            (0, u.canViewInviteModal)(r.default, n, a, i)
          ),
          f = _(t, n, c && null != a ? a : d),
          p = E(t);
        return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : c || null != d
            ? f
            : p;
      }
      let _ = (e, t, l) =>
          (0, a.jsx)(i.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: i } = await n
                  .el("310688")
                  .then(n.bind(n, "310688"));
                return n =>
                  (0, a.jsx)(i, { ...n, guild: t, channel: l, source: e });
              }),
          }),
        E = e =>
          (0, a.jsx)(i.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: e } = await n
                  .el("973132")
                  .then(n.bind(n, "973132"));
                return t => (0, a.jsx)(e, { ...t });
              }),
          });
    },
    893980: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackProfilePanelViewed: function () {
            return r;
          },
          trackProfilePanelToggled: function () {
            return d;
          },
        });
      var a = n("373469"),
        l = n("824563"),
        i = n("27618"),
        u = n("599110"),
        s = n("49111");
      let r = e => {
          let {
            displayProfile: t,
            isMobile: n,
            loadDurationMs: a,
            activity: l,
            customStatusActivity: i,
            status: r,
          } = e;
          u.default.track(s.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: n,
            has_activity:
              null != l &&
              (null == l ? void 0 : l.type) !== s.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == l ? void 0 : l.type) === s.ActivityTypes.PLAYING,
            load_duration_ms: a,
            profile_user_status: r,
            has_custom_status: null != i,
            has_profile_effect: null != t.profileEffectId,
            ...o(t),
          });
        },
        d = (e, t) => {
          u.default.track(s.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...o(e),
          });
        },
        o = e => {
          var t;
          if (null == e) return {};
          let n = e.userId,
            u = null != a.default.getAnyStreamForUser(n),
            r = l.default.findActivity(n, e => {
              let { type: t } = e;
              return u
                ? t === s.ActivityTypes.PLAYING
                : t !== s.ActivityTypes.CUSTOM_STATUS;
            }),
            d = null == r ? void 0 : r.assets,
            o = i.default.isFriend(n);
          return {
            has_images: !!(null !== (t = null == d ? void 0 : d.large_image) &&
            void 0 !== t
              ? t
              : null == d
                ? void 0
                : d.small_image),
            is_friend: o,
            viewed_profile_user_id: n,
            profile_has_nitro_customization: e.hasPremiumCustomization(),
            profile_has_theme_color_customized: e.hasThemeColors(),
            profile_has_theme_animation: null != e.popoutAnimationParticleType,
          };
        };
    },
    830210: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
          getChannelVideoLimit: function () {
            return r;
          },
        });
      var a = n("446674"),
        l = n("305961"),
        i = n("316133"),
        u = n("49111");
      function s(e) {
        return (0, a.useStateFromStoresObject)(
          [i.default, l.default],
          () => {
            let t = i.default.countVoiceStatesForChannel(e.id),
              n = l.default.getGuild(e.getGuildId());
            return null == n
              ? { reachedLimit: !1, limit: -1 }
              : e.type === u.ChannelTypes.GUILD_STAGE_VOICE
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
      function r(e) {
        let t = i.default.countVoiceStatesForChannel(e.id),
          n = l.default.getGuild(e.getGuildId());
        return null == n
          ? { reachedLimit: !1, limit: -1 }
          : e.type === u.ChannelTypes.GUILD_STAGE_VOICE
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
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("845579"),
        u = n("49111");
      function s(e, t) {
        i.AlwaysPreviewVideo.getSetting()
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
                  t === u.AppContext.POPOUT
                    ? l.POPOUT_MODAL_CONTEXT
                    : l.DEFAULT_MODAL_CONTEXT,
              }
            )
          : null == e || e();
      }
    },
  },
]);
//# sourceMappingURL=3f1386366a6f20ecb1ac.js.map

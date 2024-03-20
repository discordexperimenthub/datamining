(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70874"],
  {
    969176: function (e, t, n) {
      var a = n("354069");
      e.exports = function (e, t) {
        return a(e, t);
      };
    },
    665718: function (e, t, n) {
      "use strict";
      e.exports = n.p + "5420f8fd9d89897c6448.svg";
    },
    897327: function (e, t, n) {
      "use strict";
      e.exports = n.p + "d8197d45ef3e7289594d.svg";
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
      let r = new Set(),
        s = {};
      function d() {
        r.clear();
      }
      function o(e) {
        r.delete(e.guild.id);
      }
      class c extends l.default.Store {
        getChannelStatus(e) {
          var t;
          if (null != e && null != e.guild_id) {
            if (e.type === a.ChannelTypes.GUILD_VOICE)
              return (
                !r.has(e.guild_id) &&
                  (r.add(e.guild_id),
                  u.default.getSocket().requestChannelStatuses(e.guild_id)),
                null === (t = s[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
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
            return A;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("272030"),
        u = n("158534"),
        r = n("812204"),
        s = n("861370"),
        d = n("47495"),
        o = n("715243"),
        c = n("261675"),
        f = n("963150"),
        _ = n("308798"),
        E = n("47006"),
        p = n("878526"),
        C = n("531674"),
        I = n("619436"),
        h = n("625399"),
        T = n("731390"),
        N = n("339876"),
        g = n("49111"),
        m = n("782340"),
        A = (0, u.default)(
          function (e) {
            let { channel: t, guild: n, includeTopic: u = !1, onSelect: r } = e,
              A = (0, N.default)(t),
              O = (0, C.default)(t),
              S = (0, I.default)(t),
              v = (0, c.default)(t),
              L = (0, E.default)(t),
              P = (0, p.default)(t, n),
              y = (0, o.default)(t, n),
              M = (0, f.default)(t, n, g.ChannelTypes.GUILD_TEXT),
              x = (0, f.default)(t, n, g.ChannelTypes.GUILD_VOICE),
              U = (0, _.default)(t),
              G = (0, s.default)({
                id: t.id,
                label: m.default.Messages.COPY_ID_CHANNEL,
              }),
              R = (0, T.default)(t, "title_context_menu"),
              b = (0, d.useShouldUseNewNotificationSystem)(
                "ChannelTitleContextMenu"
              ),
              j = (0, h.default)(t);
            return (0, a.jsxs)(l.Menu, {
              navId: "channel-context",
              onClose: i.closeContextMenu,
              "aria-label": m.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: r,
              children: [
                (0, a.jsx)(l.MenuGroup, { children: A }),
                (0, a.jsx)(l.MenuGroup, { children: O }),
                (0, a.jsxs)(l.MenuGroup, { children: [u ? v : b ? j : S, L] }),
                (0, a.jsxs)(l.MenuGroup, { children: [P, y, M, x] }),
                (0, a.jsx)(l.MenuGroup, { children: R }),
                (0, a.jsx)(l.MenuGroup, { children: U }),
                (0, a.jsx)(l.MenuGroup, { children: G }),
              ],
            });
          },
          [r.default.CONTEXT_MENU, r.default.CHANNEL_TITLE_MENU]
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
        r = n("49111"),
        s = n("782340");
      function d(e, t) {
        let d = (0, l.useStateFromStores)(
          [u.default],
          () => u.default.can(r.Permissions.MANAGE_CHANNELS, e),
          [e]
        );
        return __OVERLAY__ || !d
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "clone-channel",
              label: s.default.Messages.CLONE_CHANNEL,
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
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("306160"),
        u = n("782340");
      function r(e) {
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
        r = n("49111"),
        s = n("782340");
      function d(e, t) {
        let d =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          o = (0, l.useStateFromStores)(
            [u.default],
            () => u.default.can(r.Permissions.MANAGE_CHANNELS, e),
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
          case r.ChannelTypes.GUILD_TEXT:
            return (0, a.jsx)(i.MenuItem, {
              id: "create-text-channel",
              label: s.default.Messages.CREATE_TEXT_CHANNEL,
              action: c,
            });
          case r.ChannelTypes.GUILD_VOICE:
            return (0, a.jsx)(i.MenuItem, {
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
        i = n("77078"),
        u = n("18054"),
        r = n("957255"),
        s = n("49111"),
        d = n("782340");
      function o(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: o,
          canAccessChannel: c,
        } = (0, l.useStateFromStoresObject)(
          [r.default],
          () => ({
            canManageChannels: r.default.can(s.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: r.default.can(s.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: r.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: r.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && c && (t || n || o)
          ? (0, a.jsx)(i.MenuItem, {
              id: "edit-channel",
              label:
                e.type === s.ChannelTypes.GUILD_CATEGORY
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
        r = n("292508"),
        s = n("383294"),
        d = n("913452"),
        o = n("533466"),
        c = n("49111"),
        f = n("765479");
      function _(e) {
        let { windowKey: t, channel: n } = e;
        return (0, a.jsx)(r.default, {
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
            s.open(
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
        r = n("629220"),
        s = n("512395"),
        d = n("282109"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let { isFavoritesPerk: t } = (0, u.useFavoritesServerExperiment)(
            "useChannelOptInItems"
          ),
          n = (0, s.useOptInEnabledForGuild)(e.guild_id),
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
            (0, r.setOptInChannel)(e.guild_id, e.id, !f, {
              section: o.AnalyticsSections.CONTEXT_MENU,
            });
          },
          C = () => {
            null != e.parent_id &&
              (0, r.setOptInChannel)(e.guild_id, e.parent_id, !1, {
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
        let I = E
            ? c.default.Messages.REMOVE_FAVORITE
            : c.default.Messages.ADD_FAVORITE,
          h = E
            ? c.default.Messages.UNPIN_CHANNEL
            : c.default.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? h : I,
              action: () => {
                (0, r.setIsFavorite)(e.guild_id, e.id, !E, {
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
        r = n("923959"),
        s = n("957255"),
        d = n("76539"),
        o = n("49111"),
        c = n("782340");
      function f(e) {
        let { source: t, guild: n, channel: a, stageInstance: i } = e,
          d = (0, l.useStateFromStores)([r.default], () =>
            r.default.getDefaultChannel(
              n.id,
              !0,
              o.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, l.useStateFromStores)([s.default], () =>
            (0, u.canViewInviteModal)(s.default, n, a, i)
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
    177589: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("429928"),
        l = n("36539"),
        i = n("502651"),
        u = n("671071"),
        r = n("322631"),
        s = n("947297");
      function d(e) {
        return (0, l.default)(e)
          ? s.XBOX_APPLICATION_ID_PREFIX + e.name
          : (0, a.default)(e) && null != e.party && null != e.party.id
            ? u.SpotifyApplication.id
            : (0, i.default)(e) && null != e.url
              ? r.TWITCH_APPLICATION_ID_PREFIX + e.url
              : null != e.application_id
                ? e.application_id
                : null;
      }
    },
    893980: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackProfilePanelViewed: function () {
            return s;
          },
          trackProfilePanelToggled: function () {
            return d;
          },
        });
      var a = n("373469"),
        l = n("824563"),
        i = n("27618"),
        u = n("599110"),
        r = n("49111");
      let s = e => {
          let {
            displayProfile: t,
            isMobile: n,
            loadDurationMs: a,
            activity: l,
            customStatusActivity: i,
            status: s,
          } = e;
          u.default.track(r.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: n,
            has_activity:
              null != l &&
              (null == l ? void 0 : l.type) !== r.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == l ? void 0 : l.type) === r.ActivityTypes.PLAYING,
            load_duration_ms: a,
            profile_user_status: s,
            has_custom_status: null != i,
            has_profile_effect: null != t.profileEffectId,
            ...o(t),
          });
        },
        d = (e, t) => {
          u.default.track(r.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...o(e),
          });
        },
        o = e => {
          var t;
          if (null == e) return {};
          let n = e.userId,
            u = null != a.default.getAnyStreamForUser(n),
            s = l.default.findActivity(n, e => {
              let { type: t } = e;
              return u
                ? t === r.ActivityTypes.PLAYING
                : t !== r.ActivityTypes.CUSTOM_STATUS;
            }),
            d = null == s ? void 0 : s.assets,
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
            return r;
          },
          getChannelVideoLimit: function () {
            return s;
          },
        });
      var a = n("446674"),
        l = n("305961"),
        i = n("316133"),
        u = n("49111");
      function r(e) {
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
      function s(e) {
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
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("845579"),
        u = n("49111");
      function r(e, t) {
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
    322631: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TWITCH_APPLICATION_ID_PREFIX: function () {
            return r;
          },
          default: function () {
            return a;
          },
        });
      var a,
        l = n("376556"),
        i = n("653047"),
        u = n("782340");
      let r = "twitch:";
      a = class extends i.default {
        getIconURL() {
          return l.default.get("twitch").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(r).concat(e.url)),
            (this.name =
              u.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH);
        }
      };
    },
    947297: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          XBOX_APPLICATION_ID_PREFIX: function () {
            return u;
          },
          default: function () {
            return a;
          },
        });
      var a,
        l = n("376556"),
        i = n("653047");
      let u = "xbox:";
      a = class extends i.default {
        getIconURL() {
          return l.default.get("xbox").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(u).concat(e.name)),
            (this.name = e.name);
        }
      };
    },
    1017: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("446674"),
        l = n("913144"),
        i = n("177589"),
        u = n("824563"),
        r = n("843823"),
        s = n("697218"),
        d = n("49111");
      let o = !1,
        c = {},
        f = {};
      function _(e) {
        let t = !1;
        return (
          e.forEach(e => {
            t = !1 !== p(e) || t;
          }),
          t
        );
      }
      function E(e) {
        let t = f[e];
        if (null == t) return !1;
        let n = t.gameId;
        return (
          null != c[n] &&
            ((c = { ...c }),
            delete c[n][e],
            0 === Object.values(c[n]).length && delete c[n]),
          (f = { ...f }),
          delete f[e],
          !0
        );
      }
      function p(e) {
        let { user: t, activities: n } = e;
        if (null == t) return !1;
        let a = n.filter(e => e.type !== d.ActivityTypes.CUSTOM_STATUS);
        if (0 === a.length) return E(t.id);
        let l = !1;
        return (
          a.forEach(e => {
            (function (e, t) {
              var n, a, l, u;
              let r = (0, i.default)(e);
              if (null == r) return E(t.id);
              let s = f[t.id];
              null != s && s.gameId !== r && E(t.id);
              let d =
                  null !==
                    (a =
                      null === (n = e.timestamps) || void 0 === n
                        ? void 0
                        : n.start) && void 0 !== a
                    ? a
                    : Date.now(),
                o = { userId: t.id, activity: e, startedPlaying: d };
              return (
                (l = r),
                (u = o),
                (c = { ...c, [l]: { ...c[l], [u.userId]: u } }),
                (f = {
                  ...f,
                  [u.userId]: { gameId: l, startedPlaying: u.startedPlaying },
                }),
                !0
              );
            })(e, t) && (l = !0);
          }),
          l
        );
      }
      function C() {
        let e = !1;
        if (!r.default.needsRefresh() && !o) {
          let t;
          (c = {}),
            (f = {}),
            (t = !1),
            u.default.getUserIds().forEach(e => {
              let n = s.default.getUser(e);
              null != n &&
                (t =
                  p({ user: n, activities: u.default.getActivities(e) }) || t);
            }),
            (e = t);
        }
        return (o = !r.default.needsRefresh()), e;
      }
      class I extends a.default.Store {
        initialize() {
          this.waitFor(r.default), this.syncWith([r.default], C);
        }
        get games() {
          return c;
        }
        get usersPlaying() {
          return f;
        }
        get gameIds() {
          return Object.keys(c);
        }
        getNowPlaying(e) {
          return c[e];
        }
        getUserGame(e) {
          return f[e];
        }
      }
      I.displayName = "NowPlayingStore";
      var h = new I(l.default, {
        CONNECTION_OPEN: function () {
          (c = {}), (f = {});
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
          let { guilds: t, presences: n } = e,
            a = !1;
          return (
            t.forEach(e => {
              _(e.presences) && (a = !0);
            }),
            _(n) && (a = !0),
            a
          );
        },
        LOGOUT: function () {
          (c = {}), (f = {});
        },
        PRESENCE_UPDATES: function (e) {
          let { updates: t } = e;
          return t.map(e => p(e)).some(e => e);
        },
        PRESENCES_REPLACE: function (e) {
          let { presences: t } = e;
          return _(t);
        },
      });
    },
    440351: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983"),
        l = n("884691"),
        i = n("414456"),
        u = n.n(i),
        r = n("77078"),
        s = n("145131"),
        d = n("750457"),
        o = n("890957");
      class c extends l.PureComponent {
        render() {
          let {
            title: e,
            description: t,
            agreement: n,
            disagreement: l,
            onAgree: i,
            onDisagree: c,
            imageClassName: f,
          } = this.props;
          return (0, a.jsxs)(s.default, {
            className: d.gatedContent,
            justify: s.default.Justify.CENTER,
            align: s.default.Align.CENTER,
            direction: s.default.Direction.VERTICAL,
            children: [
              (0, a.jsx)("div", { className: u(d.image, f) }),
              (0, a.jsx)("div", {
                className: u(d.title, o.marginBottom8),
                children: e,
              }),
              (0, a.jsx)("div", {
                className: u(d.description, o.marginBottom20),
                children: t,
              }),
              (0, a.jsxs)(s.default, {
                justify: s.default.Justify.CENTER,
                align: s.default.Align.CENTER,
                grow: 0,
                children: [
                  null != l
                    ? (0, a.jsx)(r.Button, {
                        className: d.action,
                        size: r.ButtonSizes.LARGE,
                        color: r.ButtonColors.PRIMARY,
                        onClick: c,
                        children: l,
                      })
                    : null,
                  null != n
                    ? (0, a.jsx)(r.Button, {
                        className: d.action,
                        color: r.Button.Colors.RED,
                        size: r.ButtonSizes.LARGE,
                        onClick: i,
                        children: n,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
      }
      var f = c;
    },
  },
]);
//# sourceMappingURL=a936587e9470393c4403.js.map

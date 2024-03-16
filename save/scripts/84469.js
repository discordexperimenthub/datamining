(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84469"],
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
            return i;
          },
        });
      var a = n("913144"),
        i = {
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
            return l;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("685665");
      function l(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: l } = (0, i.default)(t);
          return (0, a.jsx)(l, { children: (0, a.jsx)(e, { ...n }) });
        };
      }
    },
    913452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOpenInPopoutExperiment: function () {
            return l;
          },
        });
      var a = n("862205");
      let i = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function l(e) {
        return i.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    715243: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("957255"),
        s = n("49111"),
        r = n("782340");
      function o(e, t) {
        let o = (0, i.useStateFromStores)(
          [u.default],
          () => u.default.can(s.Permissions.MANAGE_CHANNELS, e),
          [e]
        );
        return __OVERLAY__ || !o
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "clone-channel",
              label: r.default.Messages.CLONE_CHANNEL,
              action: () =>
                (0, l.openModalLazy)(async () => {
                  let { default: i } = await n
                    .el("581354")
                    .then(n.bind(n, "581354"));
                  return n =>
                    (0, a.jsx)(i, {
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
    963150: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("957255"),
        s = n("49111"),
        r = n("782340");
      function o(e, t) {
        let o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          d = (0, i.useStateFromStores)(
            [u.default],
            () => u.default.can(s.Permissions.MANAGE_CHANNELS, e),
            [e]
          );
        if (__OVERLAY__ || !d) return null;
        let c = () => {
          (0, l.openModalLazy)(async () => {
            let { default: t } = await n.el("581354").then(n.bind(n, "581354"));
            return n =>
              (0, a.jsx)(t, {
                ...n,
                channelType: o,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (o) {
          case s.ChannelTypes.GUILD_TEXT:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-text-channel",
              label: r.default.Messages.CREATE_TEXT_CHANNEL,
              action: c,
            });
          case s.ChannelTypes.GUILD_VOICE:
            return (0, a.jsx)(l.MenuItem, {
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
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        u = n("18054"),
        s = n("957255"),
        r = n("49111"),
        o = n("782340");
      function d(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: d,
          canAccessChannel: c,
        } = (0, i.useStateFromStoresObject)(
          [s.default],
          () => ({
            canManageChannels: s.default.can(r.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: s.default.can(r.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: s.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: s.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && c && (t || n || d)
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                e.type === r.ChannelTypes.GUILD_CATEGORY
                  ? o.default.Messages.EDIT_CATEGORY
                  : o.default.Messages.EDIT_CHANNEL,
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
            return l;
          },
        });
      var a = n("58622"),
        i = n("49111");
      function l(e, t, n) {
        return (0, a.default)({
          guild: t,
          channel: e,
          stageInstance: n,
          source: i.InstantInviteSources.CONTEXT_MENU,
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
        i = n("884691"),
        l = n("77078"),
        u = n("390236"),
        s = n("292508"),
        r = n("383294"),
        o = n("913452"),
        d = n("533466"),
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
            children: (0, a.jsx)(d.default, { providedChannel: n }),
          }),
        });
      }
      function E(e, t) {
        let n = (0, o.useOpenInPopoutExperiment)(t),
          u = i.useCallback(() => {
            r.open(
              "".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id),
              t => (0, a.jsx)(_, { windowKey: t, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 }
            );
          }, [e]);
        return n
          ? (0, a.jsx)(l.MenuItem, {
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
      var i = n("446674"),
        l = n("77078"),
        u = n("498139"),
        s = n("629220"),
        r = n("512395"),
        o = n("282109"),
        d = n("49111"),
        c = n("782340");
      function f(e) {
        let { isFavoritesPerk: t } = (0, u.useFavoritesServerExperiment)(
            "useChannelOptInItems"
          ),
          n = (0, r.useOptInEnabledForGuild)(e.guild_id),
          f = (0, i.useStateFromStores)([o.default], () =>
            o.default.isChannelOptedIn(e.guild_id, e.id)
          ),
          _ = (0, i.useStateFromStores)(
            [o.default],
            () =>
              null != e.parent_id &&
              o.default.isChannelOptedIn(e.guild_id, e.parent_id)
          ),
          E = (0, i.useStateFromStores)([o.default], () =>
            o.default.isFavorite(e.guild_id, e.id)
          ),
          p = () => {
            (0, s.setOptInChannel)(e.guild_id, e.id, !f, {
              section: d.AnalyticsSections.CONTEXT_MENU,
            });
          },
          h = () => {
            null != e.parent_id &&
              (0, s.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                section: d.AnalyticsSections.CONTEXT_MENU,
              });
          };
        if (!n || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(l.MenuItem, {
            id: "opt-into-category",
            label: f
              ? c.default.Messages.CHANNEL_OPT_OUT
              : c.default.Messages.CHANNEL_OPT_IN,
            action: () => p(),
          });
        let m = E
            ? c.default.Messages.REMOVE_FAVORITE
            : c.default.Messages.ADD_FAVORITE,
          T = E
            ? c.default.Messages.UNPIN_CHANNEL
            : c.default.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? T : m,
              action: () => {
                (0, s.setIsFavorite)(e.guild_id, e.id, !E, {
                  section: d.AnalyticsSections.CONTEXT_MENU,
                });
              },
            }),
            _
              ? (0, a.jsx)(l.MenuItem, {
                  id: "opt-out-category",
                  label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => h(),
                })
              : (0, a.jsx)(l.MenuItem, {
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
      var i = n("446674"),
        l = n("77078"),
        u = n("242757"),
        s = n("923959"),
        r = n("957255"),
        o = n("76539"),
        d = n("49111"),
        c = n("782340");
      function f(e) {
        let { source: t, guild: n, channel: a, stageInstance: l } = e,
          o = (0, i.useStateFromStores)([s.default], () =>
            s.default.getDefaultChannel(
              n.id,
              !0,
              d.Permissions.CREATE_INSTANT_INVITE
            )
          ),
          c = (0, i.useStateFromStores)([r.default], () =>
            (0, u.canViewInviteModal)(r.default, n, a, l)
          ),
          f = _(t, n, c && null != a ? a : o),
          p = E(t);
        return null == a && t === d.InstantInviteSources.GUILD_CONTEXT_MENU
          ? null
          : c || null != o
            ? f
            : p;
      }
      let _ = (e, t, i) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === d.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: l } = await n
                  .el("310688")
                  .then(n.bind(n, "310688"));
                return n =>
                  (0, a.jsx)(l, { ...n, guild: t, channel: i, source: e });
              }),
          }),
        E = e =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: c.default.Messages.INVITE_PEOPLE,
            color: "brand",
            icon:
              e === d.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
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
            return o;
          },
        });
      var a = n("373469"),
        i = n("824563"),
        l = n("27618"),
        u = n("599110"),
        s = n("49111");
      let r = e => {
          let {
            displayProfile: t,
            isMobile: n,
            loadDurationMs: a,
            activity: i,
            customStatusActivity: l,
            status: r,
          } = e;
          u.default.track(s.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: n,
            has_activity:
              null != i &&
              (null == i ? void 0 : i.type) !== s.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == i ? void 0 : i.type) === s.ActivityTypes.PLAYING,
            load_duration_ms: a,
            profile_user_status: r,
            has_custom_status: null != l,
            has_profile_effect: null != t.profileEffectId,
            ...d(t),
          });
        },
        o = (e, t) => {
          u.default.track(s.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...d(e),
          });
        },
        d = e => {
          var t;
          if (null == e) return {};
          let n = e.userId,
            u = null != a.default.getAnyStreamForUser(n),
            r = i.default.findActivity(n, e => {
              let { type: t } = e;
              return u
                ? t === s.ActivityTypes.PLAYING
                : t !== s.ActivityTypes.CUSTOM_STATUS;
            }),
            o = null == r ? void 0 : r.assets,
            d = l.default.isFriend(n);
          return {
            has_images: !!(null !== (t = null == o ? void 0 : o.large_image) &&
            void 0 !== t
              ? t
              : null == o
                ? void 0
                : o.small_image),
            is_friend: d,
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
        i = n("305961"),
        l = n("316133"),
        u = n("49111");
      function s(e) {
        return (0, a.useStateFromStoresObject)(
          [l.default, i.default],
          () => {
            let t = l.default.countVoiceStatesForChannel(e.id),
              n = i.default.getGuild(e.getGuildId());
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
        let t = l.default.countVoiceStatesForChannel(e.id),
          n = i.default.getGuild(e.getGuildId());
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
      var i = n("77078"),
        l = n("845579"),
        u = n("49111");
      function s(e, t) {
        l.AlwaysPreviewVideo.getSetting()
          ? (0, i.openModalLazy)(
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
                    ? i.POPOUT_MODAL_CONTEXT
                    : i.DEFAULT_MODAL_CONTEXT,
              }
            )
          : null == e || e();
      }
    },
  },
]);
//# sourceMappingURL=5b6dc4f6aac95fc9c8c3.js.map

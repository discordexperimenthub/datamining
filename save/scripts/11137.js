(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11137"],
  {
    18054: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          init: function () {
            return s;
          },
          close: function () {
            return c;
          },
          setSection: function () {
            return _;
          },
          updateChannel: function () {
            return f;
          },
          saveChannel: function () {
            return E;
          },
          deleteChannel: function () {
            return N;
          },
          default: function () {
            return S;
          },
        }),
        n("702976");
      var l = n("872717"),
        a = n("913144"),
        u = n("81732");
      n("21121"), n("693051");
      var i = n("263024");
      n("492114");
      var r = n("42203"),
        o = n("54239"),
        d = n("49111");
      function s(e, t, n) {
        a.default.dispatch({
          type: "CHANNEL_SETTINGS_INIT",
          channelId: e,
          location: t,
          subsection: n,
        });
      }
      function c() {
        a.default.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
      }
      function _(e) {
        a.default.dispatch({
          type: "CHANNEL_SETTINGS_SET_SECTION",
          section: e,
        });
      }
      function f(e) {
        let {
          name: t,
          type: n,
          topic: l,
          bitrate: u,
          userLimit: i,
          nsfw: r,
          flags: o,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: s,
          defaultAutoArchiveDuration: c,
          template: _,
          defaultReactionEmoji: f,
          rtcRegion: E,
          videoQualityMode: N,
          autoArchiveDuration: S,
          locked: T,
          invitable: C,
          availableTags: h,
          defaultSortOrder: m,
          defaultForumLayout: I,
          iconEmoji: p,
          themeColor: A,
        } = e;
        a.default.dispatch({
          type: "CHANNEL_SETTINGS_UPDATE",
          name: t,
          channelType: n,
          topic: l,
          bitrate: u,
          userLimit: i,
          nsfw: r,
          flags: o,
          rateLimitPerUser: d,
          defaultThreadRateLimitPerUser: s,
          defaultAutoArchiveDuration: c,
          template: _,
          defaultReactionEmoji: f,
          rtcRegion: E,
          videoQualityMode: N,
          autoArchiveDuration: S,
          locked: T,
          invitable: C,
          availableTags: h,
          defaultSortOrder: m,
          defaultForumLayout: I,
          iconEmoji: p,
          themeColor: A,
        });
      }
      async function E(e, t) {
        let {
            name: n,
            type: o,
            position: s,
            topic: c,
            bitrate: _,
            userLimit: f,
            nsfw: E,
            flags: N,
            permissionOverwrites: S,
            rateLimitPerUser: T,
            defaultThreadRateLimitPerUser: C,
            defaultAutoArchiveDuration: h,
            template: m,
            defaultReactionEmoji: I,
            rtcRegion: p,
            videoQualityMode: A,
            autoArchiveDuration: L,
            locked: v,
            invitable: g,
            availableTags: y,
            defaultSortOrder: O,
            defaultForumLayout: G,
            iconEmoji: M,
            themeColor: H,
          } = t,
          U = r.default.getChannel(e);
        return (
          a.default.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
          await i.default.unarchiveThreadIfNecessary(e),
          l.default
            .patch({
              url: d.Endpoints.CHANNEL(e),
              body: {
                name: n,
                type: o,
                position: s,
                topic: c,
                bitrate: _,
                user_limit: f,
                nsfw: E,
                flags: N,
                permission_overwrites: S,
                rate_limit_per_user: T,
                default_thread_rate_limit_per_user: C,
                default_auto_archive_duration: h,
                template: m,
                rtc_region: p,
                video_quality_mode: A,
                auto_archive_duration: L,
                locked: v,
                invitable: g,
                default_reaction_emoji:
                  null != I
                    ? {
                        emoji_id: null == I ? void 0 : I.emojiId,
                        emoji_name: null == I ? void 0 : I.emojiName,
                      }
                    : null === I
                      ? null
                      : void 0,
                available_tags:
                  null == y
                    ? void 0
                    : y.map(e => ({
                        id: e.id,
                        name: e.name,
                        emoji_id: e.emojiId,
                        emoji_name: e.emojiName,
                        moderated: e.moderated,
                      })),
                default_sort_order: O,
                default_forum_layout: G,
                icon_emoji:
                  null != M
                    ? { id: M.id, name: M.name }
                    : null === M
                      ? null
                      : void 0,
                theme_color: H,
              },
              oldFormErrors: !0,
            })
            .then(
              t => {
                a.default.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                  channelId: e,
                });
                let n = null == U ? void 0 : U.getGuildId();
                return (
                  null != n &&
                    !(null == U ? void 0 : U.isThread()) &&
                    u.default.checkGuildTemplateDirty(n),
                  t
                );
              },
              e => (
                a.default.dispatch({
                  type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e
              )
            )
        );
      }
      function N(e) {
        let t = r.default.getChannel(e);
        l.default
          .delete({ url: d.Endpoints.CHANNEL(e), oldFormErrors: !0 })
          .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e &&
              !(null == t ? void 0 : t.isThread()) &&
              u.default.checkGuildTemplateDirty(e),
              c();
          });
      }
      var S = {
        init: s,
        open: function (e, t, n) {
          s(e, t, n), (0, o.pushLayer)(d.Layers.CHANNEL_SETTINGS);
        },
        close: c,
        setSection: _,
        selectPermissionOverwrite: function (e) {
          a.default.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
          });
        },
        updateChannel: f,
        saveChannel: E,
        deleteChannel: N,
        updateVoiceChannelStatus: function (e, t) {
          return l.default.put({
            url: d.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
          });
        },
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
      var l = n("37983");
      n("884691");
      var a = n("685665");
      function u(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: u } = (0, a.default)(t);
          return (0, l.jsx)(u, { children: (0, l.jsx)(e, { ...n }) });
        };
      }
    },
    887127: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        u = n("272030"),
        i = n("54239"),
        r = n("158534"),
        o = n("812204"),
        d = n("861370"),
        s = n("393414"),
        c = n("47006"),
        _ = n("782340"),
        f = (0, r.default)(
          function (e) {
            let { channel: t, onSelect: n } = e,
              r = (0, c.default)(t),
              o = (0, d.default)({
                id: t.id,
                label: _.default.Messages.COPY_ID_CHANNEL,
              });
            return (0, l.jsxs)(a.Menu, {
              navId: "channel-context",
              onClose: u.closeContextMenu,
              "aria-label": _.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
              onSelect: n,
              children: [
                (0, l.jsxs)(a.MenuGroup, {
                  children: [
                    r,
                    t.isCategory()
                      ? null
                      : (0, l.jsx)(a.MenuItem, {
                          id: "jump-to-channel",
                          label: _.default.Messages.JUMP_TO_CHANNEL,
                          action: () => {
                            (0, s.transitionToGuild)(t.guild_id, t.id),
                              (0, i.popLayer)();
                          },
                        }),
                  ],
                }),
                (0, l.jsx)(a.MenuGroup, { children: o }),
              ],
            });
          },
          [o.default.CONTEXT_MENU, o.default.CHANNEL_AUDIT_LOG_MENU]
        );
    },
    47006: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        u = n("77078"),
        i = n("18054"),
        r = n("957255"),
        o = n("49111"),
        d = n("782340");
      function s(e) {
        let {
          canManageChannels: t,
          canManageRoles: n,
          canManageWebhooks: s,
          canAccessChannel: c,
        } = (0, a.useStateFromStoresObject)(
          [r.default],
          () => ({
            canManageChannels: r.default.can(o.Permissions.MANAGE_CHANNELS, e),
            canManageRoles: r.default.can(o.Permissions.MANAGE_ROLES, e),
            canManageWebhooks: r.default.can(o.Permissions.MANAGE_WEBHOOKS, e),
            canAccessChannel: r.default.can(e.accessPermissions, e),
          }),
          [e]
        );
        return !__OVERLAY__ && c && (t || n || s)
          ? (0, l.jsx)(u.MenuItem, {
              id: "edit-channel",
              label:
                e.type === o.ChannelTypes.GUILD_CATEGORY
                  ? d.default.Messages.EDIT_CATEGORY
                  : d.default.Messages.EDIT_CHANNEL,
              action: () => i.default.open(e.id),
            })
          : null;
      }
    },
    492114: function (e, t, n) {
      "use strict";
      let l, a, u, i, r, o;
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        }),
        n("808653"),
        n("702976"),
        n("222007");
      var d = n("917351"),
        s = n.n(d),
        c = n("866227"),
        _ = n.n(c),
        f = n("446674"),
        E = n("872717"),
        N = n("913144"),
        S = n("233069"),
        T = n("813006"),
        C = n("517763"),
        h = n("766274"),
        m = n("42203"),
        I = n("49111");
      let p = I.FormStates.CLOSED,
        A = {},
        L = {},
        v = !1,
        g = !1,
        y = null,
        O = [
          "name",
          "type",
          "topic_",
          "bitrate_",
          "userLimit_",
          "nsfw_",
          "flags_",
          "rateLimitPerUser_",
          "defaultThreadRateLimitPerUser",
          "defaultAutoArchiveDuration",
          "template",
          "defaultReactionEmoji",
          "rtcRegion",
          "videoQualityMode",
          "threadMetadata",
          "banner",
          "availableTags",
          "defaultSortOrder",
          "defaultForumLayout",
          "iconEmoji",
          "themeColor",
        ];
      function G(e) {
        let t = m.default.getChannel(e.channelId);
        if (null == t) return H();
        (p = I.FormStates.OPEN),
          (i = u = t),
          (y = "location" in e && null != e.location ? e.location : null),
          (a = "subsection" in e ? e.subsection : null),
          null != i && (i = i.set("nsfw", i.isNSFW())),
          (r = m.default.getChannel(i.parent_id)),
          (o = i.getGuildId()),
          (A = {}),
          M({
            type: "CHANNEL_SETTINGS_SET_SECTION",
            section: null != l ? l : I.ChannelSettingsSections.OVERVIEW,
            subsection: a,
          });
      }
      function M(e) {
        (l = e.section),
          (a = e.subsection),
          null != i &&
            l === I.ChannelSettingsSections.INSTANT_INVITES &&
            ((v = !0),
            E.default
              .get({
                url: I.Endpoints.INSTANT_INVITES(i.id),
                oldFormErrors: !0,
              })
              .then(
                e => {
                  (v = !1),
                    N.default.dispatch({
                      type: "CHANNEL_SETTINGS_LOADED_INVITES",
                      invites: e.body,
                    });
                },
                () => (v = !1)
              ));
      }
      function H() {
        (g = !1),
          (p = I.FormStates.CLOSED),
          (l = null),
          (i = u = null),
          (r = null),
          (L = {});
      }
      let U = s.debounce(() => {
        if (null == i || null == u) return !1;
        let e = i.toJS(),
          t = u.toJS(),
          n = O.every(n => e[n] === t[n]);
        n && i !== u && ((i = u), D.emitChange());
      }, 500);
      function b(e) {
        return new C.default({
          code: e.code,
          temporary: e.temporary,
          revoked: e.revoked,
          inviter: null != e.inviter ? new h.default(e.inviter) : null,
          channel: (0, S.createChannelRecordFromInvite)(e.channel),
          guild: null != e.guild ? new T.default(e.guild) : null,
          uses: e.uses,
          maxUses: e.max_uses,
          maxAge: e.max_age,
          createdAt: _(e.created_at),
          type: e.type,
        });
      }
      class j extends f.default.Store {
        initialize() {
          this.waitFor(m.default);
        }
        hasChanges() {
          return i !== u;
        }
        isOpen() {
          return g;
        }
        getSection() {
          return l;
        }
        getInvites() {
          return { invites: L, loading: v };
        }
        showNotice() {
          return this.hasChanges();
        }
        getChannel() {
          return i;
        }
        getFormState() {
          return p;
        }
        getCategory() {
          return r;
        }
        getProps() {
          return {
            submitting: p === I.FormStates.SUBMITTING,
            errors: A,
            channel: i,
            section: l,
            subsection: a,
            invites: L,
            selectedOverwriteId: o,
            hasChanges: this.hasChanges(),
            analyticsLocation: y,
          };
        }
      }
      j.displayName = "ChannelSettingsStore";
      let D = new j(N.default, {
        CHANNEL_SETTINGS_INIT: G,
        CHANNEL_SETTINGS_OPEN: function (e) {
          (g = !0), G(e);
        },
        CHANNEL_SETTINGS_SUBMIT: function () {
          (p = I.FormStates.SUBMITTING), (A = {});
        },
        CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
          (u = i), (p = I.FormStates.OPEN);
        },
        CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
          var t;
          (p = I.FormStates.OPEN),
            (A = Object.keys(
              null !== (t = e.errors) && void 0 !== t ? t : {}
            ).reduce((t, n) => {
              let l = e.errors[n];
              return (0, d.isArray)(l) ? (t[n] = l.join("\n")) : (t[n] = l), t;
            }, {}));
        },
        CHANNEL_SETTINGS_CLOSE: H,
        CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
          let { overwriteId: t } = e;
          o = t;
        },
        CHANNEL_SETTINGS_UPDATE: function (e) {
          let {
            name: t,
            channelType: n,
            topic: l,
            bitrate: a,
            userLimit: u,
            nsfw: r,
            flags: o,
            rateLimitPerUser: d,
            defaultThreadRateLimitPerUser: s,
            autoArchiveDuration: c,
            locked: _,
            invitable: f,
            defaultAutoArchiveDuration: E,
            template: N,
            defaultReactionEmoji: S,
            rtcRegion: T,
            videoQualityMode: C,
            availableTags: h,
            defaultSortOrder: m,
            defaultForumLayout: I,
            iconEmoji: p,
            themeColor: A,
          } = e;
          if (null == i) return !1;
          null != t && (i = i.set("name", t)),
            null != l && (i = i.set("topic", l)),
            null != a && (i = i.set("bitrate", a)),
            null != u && (i = i.set("userLimit", u)),
            null != r && (i = i.set("nsfw", r)),
            null != o && (i = i.set("flags", o)),
            null != d && (i = i.set("rateLimitPerUser", d)),
            null != s && (i = i.set("defaultThreadRateLimitPerUser", s)),
            null != c &&
              (i = i.set("threadMetadata", {
                ...i.threadMetadata,
                autoArchiveDuration: c,
              })),
            null != _ &&
              (i = i.set("threadMetadata", { ...i.threadMetadata, locked: _ })),
            null != f &&
              (i = i.set("threadMetadata", {
                ...i.threadMetadata,
                invitable: f,
              })),
            null != E && (i = i.set("defaultAutoArchiveDuration", E)),
            null != N && (i = i.set("template", N)),
            null != n && (i = i.set("type", n)),
            void 0 !== T && (i = i.set("rtcRegion", T)),
            null != C && (i = i.set("videoQualityMode", C)),
            void 0 !== S && (i = i.set("defaultReactionEmoji", S)),
            null != h && (i = i.set("availableTags", h)),
            null != m && (i = i.set("defaultSortOrder", m)),
            null != I && (i = i.set("defaultForumLayout", I)),
            void 0 !== p && (i = i.set("iconEmoji", p)),
            null != A && (i = i.set("themeColor", A)),
            U();
        },
        CHANNEL_SETTINGS_SET_SECTION: M,
        CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
          (L = {}),
            e.invites.forEach(e => {
              L[e.code] = b(e);
            });
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          if (null == i) return !1;
          let n = !1;
          for (let e of t)
            (function (e) {
              if (null == u || u.id !== e) return !1;
              if (u === i) {
                let t = m.default.getChannel(e);
                if (null == t) return !1;
                (i = u = t), (r = m.default.getChannel(i.parent_id));
              } else {
                let t = m.default.getChannel(e);
                if (null == t) return !1;
                (u = t),
                  null != i &&
                    ((i = i.set(
                      "permissionOverwrites",
                      u.permissionOverwrites
                    )),
                    (r = m.default.getChannel(i.parent_id)));
              }
              return !0;
            })(e.id) &&
              null != i &&
              (null != o &&
                null == i.permissionOverwrites[o] &&
                (o = i.getGuildId()),
              (n = !0));
          return n;
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          if (null == i || i.id !== t) return !1;
          p = I.FormStates.CLOSED;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          (L = { ...L }), delete L[e.code];
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          L = { ...L, [e.invite.code]: b(e.invite) };
        },
      });
      var R = D;
    },
  },
]);
//# sourceMappingURL=ebe668bd5afdd1e56695.js.map

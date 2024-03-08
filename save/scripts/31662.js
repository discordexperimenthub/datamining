(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31662"],
  {
    437140: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("70102");
      var l = n("759843"),
        i = n("627929"),
        a = n("913144"),
        s = n("81732"),
        r = n("282109"),
        u = n("34676"),
        d = n("840707"),
        o = n("519705"),
        c = n("49111"),
        f = n("397336"),
        E = {
          createChannel(e) {
            let {
              guildId: t,
              type: n,
              name: E,
              permissionOverwrites: h = [],
              bitrate: _,
              userLimit: v,
              parentId: g,
              skuId: C,
              branchId: S,
            } = e;
            a.default.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
            let p = { type: n, name: E, permission_overwrites: h };
            if (
              (null != _ && _ !== c.BITRATE_DEFAULT && (p.bitrate = _),
              null != v && v > 0 && (p.user_limit = v),
              null != g && (p.parent_id = g),
              n === c.ChannelTypes.GUILD_STORE)
            ) {
              if (null == C) throw Error("Unexpected missing SKU");
              (p.sku_id = C), (p.branch_id = S);
            }
            return d.default
              .post({
                url: c.Endpoints.GUILD_CHANNELS(t),
                body: p,
                oldFormErrors: !0,
                trackedActionData: {
                  event: l.NetworkActionNames.CHANNEL_CREATE,
                  properties: e => {
                    var t, n;
                    return (0, i.exact)({
                      is_private: h.length > 0,
                      channel_id:
                        null == e
                          ? void 0
                          : null === (t = e.body) || void 0 === t
                            ? void 0
                            : t.id,
                      channel_type:
                        null == e
                          ? void 0
                          : null === (n = e.body) || void 0 === n
                            ? void 0
                            : n.type,
                    });
                  },
                },
              })
              .then(
                e => (
                  r.default.isOptInEnabled(t) &&
                    o.default.updateChannelOverrideSettings(
                      t,
                      e.body.id,
                      {
                        flags:
                          f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
                      },
                      u.NotificationLabels.OptedIn
                    ),
                  s.default.checkGuildTemplateDirty(t),
                  e
                ),
                e => {
                  throw (
                    (a.default.dispatch({
                      type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                      errors: e.body,
                    }),
                    e)
                  );
                }
              );
          },
          createRoleSubscriptionTemplateChannel: (e, t, n, a) =>
            d.default.post({
              url: c.Endpoints.GUILD_CHANNELS(e),
              body: { name: t, type: n, topic: a },
              oldFormErrors: !0,
              trackedActionData: {
                event: l.NetworkActionNames.CHANNEL_CREATE,
                properties: e => {
                  var t, n;
                  return (0, i.exact)({
                    is_private: !0,
                    channel_id:
                      null == e
                        ? void 0
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.id,
                    channel_type:
                      null == e
                        ? void 0
                        : null === (n = e.body) || void 0 === n
                          ? void 0
                          : n.type,
                  });
                },
              },
            }),
        };
    },
    519705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007"),
        n("702976");
      var l = n("872717"),
        i = n("819855"),
        a = n("913144"),
        s = n("679428"),
        r = n("282109"),
        u = n("568734"),
        d = n("34676"),
        o = n("299039"),
        c = n("49111"),
        f = n("397336"),
        E = n("782340"),
        h = {
          open(e) {
            a.default.dispatch({
              type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
              guildId: e,
            });
          },
          close() {
            a.default.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
          },
          updateGuildNotificationSettings(e, t, n, l) {
            let i = (0, d.getCurrentGuildSettings)(e);
            s.default.saveUserGuildSettings(e, t),
              a.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, d.trackGuildNotificationSettingsUpdate)(e, t, i, n, l);
          },
          updateGuildAndChannelNotificationSettings(e, t, n, l) {
            let i = o.default.keys(t.channel_overrides),
              r = (0, d.getCurrentGuildSettings)(e),
              u = (0, d.getManyCurrentChannelSettings)(e, i);
            s.default.saveUserGuildSettings(e, t),
              a.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, d.trackGuildNotificationSettingsUpdate)(e, t, r, n, l),
              o.default.keys(t.channel_overrides).forEach(i => {
                let a = u.get(i);
                (0, d.trackChannelNotificationSettingsUpdate)(
                  e,
                  i,
                  t.channel_overrides[i],
                  a,
                  n,
                  l
                );
              });
          },
          updateGuildNotificationSettingsBulk(e, t, n) {
            let l = o.default.keys(e),
              i = (0, d.getManyCurrentGuildSettings)(l);
            s.default.saveUserGuildSettingsBulk(e),
              o.default.entries(e).forEach(e => {
                let [l, s] = e,
                  r = i.get(l);
                a.default.dispatch({
                  type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                  guildId: l,
                  settings: s,
                }),
                  (0, d.trackGuildNotificationSettingsUpdate)(l, s, r, t, n);
              });
          },
          updateChannelOverrideSettings(e, t, n, l, r) {
            let u = (0, d.getCurrentChannelSettings)(e, t);
            s.default.saveUserGuildSettings(e, {
              channel_overrides: { [t]: n },
            }),
              a.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n,
              }),
              i.AccessibilityAnnouncer.announce(
                E.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED
              ),
              (0, d.trackChannelNotificationSettingsUpdate)(e, t, n, u, l, r);
          },
          updateChannelOverrideSettingsBulk(e, t, n, l) {
            let i = o.default.keys(t),
              r = (0, d.getManyCurrentChannelSettings)(e, i);
            s.default.saveUserGuildSettings(e, { channel_overrides: t }),
              a.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t,
              }),
              o.default
                .keys(t)
                .forEach(i =>
                  (0, d.trackChannelNotificationSettingsUpdate)(
                    e,
                    i,
                    t[i],
                    r.get(i),
                    n,
                    l
                  )
                );
          },
          setForumThreadsCreated(e, t) {
            let n = t
                ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON
                : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
              l = t
                ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF
                : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
              i = r.default.getChannelFlags(e);
            this.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { flags: (i & ~l) | n },
              d.NotificationLabel.forumThreadsCreated(t)
            );
          },
          async setAccountFlag(e, t) {
            let n = r.default.accountNotificationSettings.flags,
              i = (0, u.setFlag)(n, e, t);
            await l.default.patch({
              url: c.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
              body: { flags: i },
            }),
              await a.default.dispatch({
                type: "NOTIFICATION_SETTINGS_UPDATE",
                settings: { flags: i },
              });
          },
        };
    },
    811513: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("430143");
      n.es(l, t);
    },
    696675: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("886181");
      n.es(l, t);
    },
    304983: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("541742");
      n.es(l, t);
    },
    651072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("862205");
      let i = (0, l.createExperiment)({
        kind: "guild",
        id: "2023-09_recurring_events",
        label: "Allows guild to create recurring events",
        defaultConfig: {
          showRecurringEventsDesktop: !1,
          showRecurringEventsMobile: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Recurring Events are enabled (Desktop Only)",
            config: {
              showRecurringEventsDesktop: !0,
              showRecurringEventsMobile: !1,
            },
          },
          {
            id: 2,
            label: "Recurring Events are enabled on Mobile + Desktop",
            config: {
              showRecurringEventsDesktop: !0,
              showRecurringEventsMobile: !0,
            },
          },
        ],
      });
      var a = i;
    },
    374860: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          navigateToEvent: function () {
            return c;
          },
          postStartActions: function () {
            return f;
          },
        });
      var l = n("627445"),
        i = n.n(l),
        a = n("987317"),
        s = n("244480"),
        r = n("716214"),
        u = n("42203"),
        d = n("945956"),
        o = n("745049");
      async function c(e, t) {
        let { entity_type: n } = e;
        switch (n) {
          case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE: {
            let t = d.default.getChannelId(),
              n = u.default.getChannel(e.channel_id);
            i(null != n, "could not find channel"),
              t !== n.id &&
                (await r.connectToStage(n, !0),
                await r.navigateToStage(n, null, !1)),
              await (0, s.audienceAckRequestToSpeak)(n, !1, !0);
            break;
          }
          case o.GuildScheduledEventEntityTypes.VOICE: {
            let t = d.default.getChannelId(),
              n = u.default.getChannel(e.channel_id);
            i(null != n, "could not find channel"),
              t !== n.id && a.default.selectVoiceChannel(n.id);
          }
        }
      }
      function f(e, t) {
        let { entity_type: n } = e;
        switch (n) {
          case o.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
          case o.GuildScheduledEventEntityTypes.VOICE:
          case o.GuildScheduledEventEntityTypes.EXTERNAL:
            null == t || t();
        }
        return Promise.resolve();
      }
    },
    495829: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          preStartEventActions: function () {
            return h;
          },
          setEventAsActive: function () {
            return _;
          },
        }),
        n("424973"),
        n("222007"),
        n("70102");
      var l = n("627445"),
        i = n.n(l),
        a = n("437140"),
        s = n("738983"),
        r = n("233069"),
        u = n("42203"),
        d = n("305961"),
        o = n("322224"),
        c = n("745049"),
        f = n("49111");
      async function E(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          l = [];
        l.push(...n);
        let i = await a.default.createChannel({
          guildId: e.id,
          type: f.ChannelTypes.GUILD_STAGE_VOICE,
          name: t.substring(0, 100),
          permissionOverwrites: l,
        });
        if (null == i || 201 !== i.status)
          throw Error("Can't create channel for event");
        return (0, r.createChannelRecordFromServer)(i.body);
      }
      async function h(e, t) {
        let { entity_type: n } = e;
        if (n === c.GuildScheduledEventEntityTypes.STAGE_INSTANCE) {
          let n = await (function (e, t) {
            let { guild_id: n, channel_id: l } = e,
              i = d.default.getGuild(n);
            if (null == i) return Promise.resolve(null);
            let a = u.default.getChannel(l);
            return null == a ? E(i, e.name, t) : Promise.resolve(a);
          })(e, t);
          i(null != n, "could not find or create channel");
        }
      }
      async function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          { channel_id: n, entity_type: l, name: a, id: r, guild_id: u } = e;
        switch (l) {
          case c.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
            i(null != n, "channel_id is required"),
              await (0, s.startStageInstance)(
                n,
                a,
                c.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
                t,
                r
              );
            break;
          case c.GuildScheduledEventEntityTypes.VOICE:
            i(null != n, "channel_id is required"),
              await o.default.startEvent(r, u);
            break;
          case c.GuildScheduledEventEntityTypes.EXTERNAL:
            await o.default.startEvent(r, u);
        }
      }
    },
    883310: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      var l = n("884691"),
        i = n("448993"),
        a = n("374860"),
        s = n("495829");
      let r = { onSuccess: () => {}, permissionOverwrites: [] };
      function u() {
        let [e, t] = l.useState(!1),
          [n, u] = l.useState(null);
        return [
          async function e(e, n) {
            let {
              onSuccess: l = r.onSuccess,
              permissionOverwrites: d = r.permissionOverwrites,
            } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : r;
            t(!0);
            try {
              await s.preStartEventActions(e, d),
                await s.setEventAsActive(e, n),
                await (0, a.navigateToEvent)(e, l),
                await (0, a.postStartActions)(e, l),
                t(!1);
            } catch (n) {
              let e = new i.APIError(n);
              u(e), t(!1);
            }
            t(!1);
          },
          { loading: e, error: n },
        ];
      }
    },
    617347: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildEventBodyImageLocation: function () {
            return i;
          },
          default: function () {
            return D;
          },
        });
      var l,
        i,
        a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        u = n.n(r),
        d = n("446674"),
        o = n("77078"),
        c = n("812204"),
        f = n("685665"),
        E = n("656038"),
        h = n("419830"),
        _ = n("817963"),
        v = n("957255"),
        g = n("476263"),
        C = n("718550"),
        S = n("398604"),
        p = n("651072"),
        T = n("1339"),
        N = n("613767"),
        A = n("822516"),
        I = n("707916"),
        m = n("255050"),
        y = n("400271"),
        R = n("427554"),
        O = n("644189"),
        L = n("29913"),
        G = n("745049"),
        x = n("49111"),
        M = n("782340"),
        w = n("402155");
      function U(e) {
        let { channel: t, onClick: n } = e,
          { canManageAllEvents: l } = (0, _.useManageResourcePermissions)(t),
          i = (0, d.useStateFromStores)(
            [v.default],
            () => !t.isGuildVocal() || v.default.can(x.Permissions.CONNECT, t),
            [t]
          ),
          r = s.useMemo(() => (0, E.default)(t), [t]),
          c = (0, h.getChannelIconComponent)(t);
        return (0, a.jsx)(o.Tooltip, {
          text: M.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !i && null != n,
          children: e =>
            (0, a.jsxs)(o.Clickable, {
              ...e,
              className: u(w.inline, w.channelContainer, {
                [w.channelContainerEnabled]: i && null != n,
                [w.channelContainerDisabled]: !i && null != n,
              }),
              onClick: n,
              children: [
                (0, a.jsx)(o.Tooltip, {
                  text: M.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && r && i && null != n,
                  children: e =>
                    null != c
                      ? (0, a.jsx)(c, {
                          ...e,
                          width: 20,
                          height: 20,
                          className: w.icon,
                        })
                      : null,
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: w.channelLocation,
                  children: t.name,
                }),
              ],
            }),
        });
      }
      function k(e) {
        let {
          guild: t,
          channel: n,
          onJoinClick: l,
          handleLocationClick: i,
          location: s,
          isExternal: r,
          isHub: d,
        } = e;
        if (d)
          return null == t
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                className: w.inline,
                children: [
                  (0, a.jsx)(g.default, {
                    className: w.guildIcon,
                    size: g.default.Sizes.MINI,
                    active: !0,
                    guild: t,
                  }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == t ? void 0 : t.name,
                  }),
                ],
              });
        return null != n
          ? (0, a.jsx)(U, { channel: n, onClick: l })
          : (0, a.jsxs)(o.Clickable, {
              className: w.inline,
              onClick: i,
              children: [
                (0, a.jsx)(C.default, {
                  height: 20,
                  width: 20,
                  className: u(w.channelContainer, w.icon),
                }),
                (0, a.jsx)(o.Text, {
                  className: r ? w.externalLocation : w.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, T.guildEventDetailsParser)(s, !0),
                }),
              ],
            });
      }
      function D(e) {
        var t;
        let {
            className: n,
            guild: l,
            channel: i,
            creator: s,
            name: r,
            entityType: E,
            description: h,
            imageLocation: _ = 0,
            imageSource: v,
            isActive: g,
            isUserLurking: C,
            isJoined: T = !1,
            isMember: M = !1,
            isHub: U = !1,
            speakers: D,
            speakerCount: P,
            rsvped: b,
            canInvite: j,
            location: V,
            truncate: H,
            onContextMenu: F,
            onJoinClick: B,
            onJoinGuildClick: Z,
            onGoToGuildClick: Y,
            onRsvpClick: K,
            onStartClick: q,
            onInviteClick: z,
            onEndClick: W,
            onClick: X,
            isNew: J,
            guildEventId: Q,
            eventPreview: $,
            recurrenceRule: ee,
            recurrenceId: et,
          } = e,
          en = (0, N.isChannelPublic)(i, E),
          el = E === G.GuildScheduledEventEntityTypes.EXTERNAL,
          { analyticsLocations: ei } = (0, f.default)(
            c.default.GUILD_EVENT_CARD
          ),
          { showRecurringEventsDesktop: ea } = p.default.useExperiment(
            {
              guildId:
                null !== (t = null == l ? void 0 : l.id) && void 0 !== t
                  ? t
                  : x.EMPTY_STRING_SNOWFLAKE_ID,
              location: ei[0],
            },
            { autoTrackExposure: !1 }
          ),
          es = (0, d.useStateFromStores)([S.default], () =>
            S.default.getGuildScheduledEvent(Q)
          ),
          er = [];
        if (null != ee && null != es) {
          let e = (0, A.getRRule)(ee);
          er = (0, A.generateNextRecurrences)(
            4,
            e,
            new Date(es.scheduled_start_time)
          );
        }
        let eu = ea && er.length > 0;
        return (0, a.jsxs)(o.ClickableContainer, {
          "aria-label": r,
          onClick: () => (null == X ? void 0 : X(et)),
          onContextMenu: F,
          className: u(w.card, { [w.joined]: T, [w.lurking]: C }, n),
          children: [
            (0, a.jsxs)("div", {
              className: u(w.padding, { [w.isRecurring]: eu }),
              children: [
                0 === _ && (0, a.jsx)(m.default, { source: v }),
                (0, a.jsx)(y.default, {
                  creator: s,
                  name: r,
                  description: h,
                  imageSource: 1 === _ ? v : null,
                  truncate: H,
                  guildId: null == l ? void 0 : l.id,
                  isHub: U,
                  isNew: J,
                  guildEventId: Q,
                  eventPreview: $,
                  recurrenceId: et,
                }),
                g &&
                  null != l &&
                  null != D &&
                  P > 0 &&
                  (0, a.jsx)(L.default, {
                    guild: l,
                    speakers: D,
                    speakerCount: P,
                    className: w.spacing,
                  }),
                (0, a.jsx)("hr", { className: w.divider }),
                (0, a.jsxs)("div", {
                  className: u(w.inline, w.footer),
                  children: [
                    (0, a.jsx)(k, {
                      guild: l,
                      channel: i,
                      onJoinClick: B,
                      handleLocationClick: el
                        ? e => e.stopPropagation()
                        : void 0,
                      location: V,
                      isExternal: el,
                      isHub: U,
                    }),
                    U
                      ? (0, a.jsx)(O.default, {
                          isActive: g,
                          isUserLurking: C,
                          isMember: M,
                          rsvped: b,
                          onRsvpClick: K,
                          onJoinGuildClick: Z,
                          onGoToGuildClick: Y,
                          guildName: null == l ? void 0 : l.name,
                          canInvite: j,
                          isChannelPublic: en,
                          onInviteClick: z,
                        })
                      : (0, a.jsx)(I.default, {
                          entityType: E,
                          isJoined: T,
                          isActive: g,
                          isUserLurking: C,
                          rsvped: b,
                          canInvite: j,
                          isChannelPublic: en,
                          onContextMenu: F,
                          onJoinClick: B,
                          onRsvpClick: K,
                          onStartClick: q,
                          onInviteClick: z,
                          onEndClick: W,
                        }),
                  ],
                }),
                eu && (0, a.jsx)("hr", { className: w.divider }),
              ],
            }),
            eu &&
              (0, a.jsx)(R.default, {
                guildId: null == l ? void 0 : l.id,
                recurrenceRule: ee,
                guildEventId: Q,
                onRecurrenceClick: X,
              }),
          ],
        });
      }
      ((l = i || (i = {}))[(l.BANNER = 0)] = "BANNER"),
        (l[(l.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    29913: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("849467"),
        u = n("782340"),
        d = n("602552");
      function o(e) {
        let { guild: t, speakers: n, speakerCount: i, className: o } = e,
          c = n.slice(0, 5),
          f = c.map(e => {
            var n, i;
            return (0, l.jsxs)(
              "div",
              {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)(s.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (n = e.user) || void 0 === n
                          ? void 0
                          : n.getAvatarURL(t.id, 20),
                    size: s.AvatarSizes.SIZE_20,
                    className: d.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar"
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: d.textInGridContainer,
                    children: (0, l.jsx)(s.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: d.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (i = e.user) || void 0 === i
                  ? void 0
                  : i.id
            );
          }),
          E = i - c.length;
        return (0, l.jsxs)("div", {
          className: a(d.grid, o),
          children: [
            f,
            E > 0 &&
              (0, l.jsxs)("div", {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: d.iconMicrophone,
                    children: (0, l.jsx)(r.default, { height: 12 }),
                  }),
                  (0, l.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: d.textInGrid,
                    children:
                      u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: E }
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    298843: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        u = n("77078"),
        d = n("267567"),
        o = n("817963"),
        c = n("534471"),
        f = n("42203"),
        E = n("305961"),
        h = n("476765"),
        _ = n("794352"),
        v = n("883310"),
        g = n("93550"),
        C = n("617347"),
        S = n("745049"),
        p = n("782340"),
        T = n("764718");
      function N(e) {
        var t;
        let { transitionState: n, event: a, onSuccess: N, onClose: A } = e,
          I = (0, h.useUID)(),
          { guild_id: m, privacy_level: y } = a,
          R = (0, r.useStateFromStores)(
            [f.default],
            () => f.default.getChannel(a.channel_id),
            [a]
          ),
          O = (0, r.useStateFromStores)(
            [E.default],
            () => E.default.getGuild(m),
            [m]
          ),
          { canManageGuildEvent: L } = (0, o.useManageResourcePermissions)(
            null != R ? R : O
          ),
          G = L(a),
          x = (0, r.useStateFromStores)(
            [d.default],
            () => d.default.isLurking(m),
            [m]
          ),
          M = a.entity_type === S.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          [w, U] = i.useState(M),
          [k, { loading: D, error: P }] = (0, v.default)();
        if (!G) return null;
        let b =
            y === S.GuildScheduledEventPrivacyLevel.PUBLIC
              ? p.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL
              : p.default.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,
          j = () => {
            null == N || N(), A(), (0, c.setIsOnStartStageScreen)(!1);
          },
          V = async () => {
            await k(a, w, { onSuccess: j });
          };
        return (0, l.jsx)(u.ModalRoot, {
          transitionState: n,
          "aria-labelledby": I,
          children: (0, l.jsxs)(u.ModalContent, {
            className: T.content,
            children: [
              (0, l.jsx)("div", {
                className: T.previewCard,
                children: (0, l.jsx)(C.default, {
                  guild: O,
                  channel: R,
                  name: a.name,
                  description:
                    null !== (t = a.description) && void 0 !== t ? t : void 0,
                  imageSource: (0, g.default)(a),
                  isActive: !1,
                  isUserLurking: x,
                  speakers: [],
                  speakerCount: 0,
                  rsvped: !0,
                  guildEventId: a.id,
                }),
              }),
              (0, l.jsx)(u.Text, {
                color: "header-secondary",
                className: T.privacyLevel,
                variant: "text-sm/normal",
                children: p.default.Messages.START_EVENT_CONFIRMATION.format({
                  privacyLevel: b,
                  privacyLevelHook: (e, t) =>
                    y !== S.GuildScheduledEventPrivacyLevel.PUBLIC
                      ? null
                      : (0, l.jsxs)(
                          "div",
                          {
                            className: T.privacyLevel,
                            children: [
                              (0, l.jsx)(_.default, {
                                width: 16,
                                height: 16,
                                className: T.publicIcon,
                              }),
                              (0, l.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: e,
                              }),
                            ],
                          },
                          t
                        ),
                }),
              }),
              (0, l.jsx)(u.Heading, {
                variant: "heading-xl/semibold",
                className: T.header,
                children: a.name,
              }),
              M &&
                (0, l.jsx)(u.Checkbox, {
                  className: T.verticalSpacing,
                  type: u.Checkbox.Types.INVERTED,
                  value: w,
                  onChange: e => {
                    let { currentTarget: t } = e;
                    return U(t.checked);
                  },
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    children: p.default.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP,
                  }),
                }),
              (0, l.jsxs)("div", {
                className: s(T.inline, T.buttons, T.verticalSpacing),
                children: [
                  (0, l.jsx)(u.Button, {
                    color: u.Button.Colors.PRIMARY,
                    onClick: () => {
                      A();
                    },
                    className: s(T.button, T.spacing),
                    children: p.default.Messages.STAGE_BLOCKED_USERS_CANCEL,
                  }),
                  (0, l.jsx)(u.Button, {
                    color: u.Button.Colors.GREEN,
                    onClick: V,
                    submitting: D,
                    className: T.button,
                    children: p.default.Messages.START_EVENT,
                  }),
                ],
              }),
              null != P && null != P.getAnyErrorMessage()
                ? (0, l.jsx)(u.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    className: T.errorMessage,
                    children: P.getAnyErrorMessage(),
                  })
                : null,
            ],
          }),
        });
      }
    },
    244480: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleRequestToSpeak: function () {
            return C;
          },
          inviteUserToStage: function () {
            return S;
          },
          audienceAckRequestToSpeak: function () {
            return p;
          },
          moveSelfToAudience: function () {
            return T;
          },
          setUserSuppress: function () {
            return N;
          },
          moveUserToAudience: function () {
            return A;
          },
          setEveryoneRolePermissionAllowed: function () {
            return I;
          },
          startStage: function () {
            return m;
          },
          editStage: function () {
            return y;
          },
          endStage: function () {
            return R;
          },
        });
      var l = n("627445"),
        i = n.n(l),
        a = n("316693"),
        s = n("872717"),
        r = n("450911");
      n("851387");
      var u = n("798609"),
        d = n("716241"),
        o = n("18494"),
        c = n("800762"),
        f = n("991170"),
        E = n("716214"),
        h = n("230324"),
        _ = n("738983"),
        v = n("808422"),
        g = n("49111");
      function C(e, t) {
        let n = e.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          t &&
            (0, d.trackWithMetadata)(
              g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED,
              { ...(0, h.getStageChannelMetadata)(e) }
            ),
          s.default.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(n),
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
          i(null != n, "This channel cannot be guildless."),
          s.default.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
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
        i(null != l, "This channel cannot be guildless.");
        let a = c.default.getVoiceStateForChannel(e.id),
          r = (0, v.getAudienceRequestToSpeakState)(a);
        return (
          r ===
            v.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
              ...(0, h.getStageChannelMetadata)(e),
            }),
          s.default.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(l),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(n ? { silent: n } : {}),
            },
          })
        );
      }
      function T(e) {
        let t = null == e ? void 0 : e.getGuildId();
        return (
          i(null != t, "This channel cannot be guildless."),
          s.default.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(t),
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
          i(null != l, "This channel cannot be guildless."),
          s.default.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(l, t),
            body: { suppress: n, channel_id: e.id },
          })
        );
      }
      function A(e, t) {
        if (null == t || null == e) return;
        let n = t.getGuildId();
        return (
          i(null != n, "This channel cannot be guildless."),
          N(t, e.id, !0),
          s.default.patch({
            url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function I(e, t, n) {
        let l = e.getGuildId();
        i(null != l, "Channel cannot be guildless");
        let s = e.permissionOverwrites[l],
          d = {
            id: l,
            type: u.PermissionOverwriteType.ROLE,
            allow: f.default.NONE,
            deny: f.default.NONE,
            ...s,
          };
        n
          ? ((d.allow = a.default.add(d.allow, t)),
            (d.deny = a.default.remove(d.deny, t)))
          : ((d.allow = a.default.remove(d.allow, t)),
            (d.deny = a.default.add(d.deny, t))),
          r.default.updatePermissionOverwrite(e.id, d);
      }
      async function m(e, t, n, l) {
        if ("" === t) return;
        let i = o.default.getVoiceChannelId() === e.id;
        !i && (0, E.connectToStage)(e);
        let a = await (0, _.startStageInstance)(e.id, t, n, l);
        return p(e, !1, !0), a;
      }
      async function y(e, t, n) {
        if ("" === t) return;
        let l = await (0, _.updateStageInstance)(e.id, t, n);
        return l;
      }
      async function R(e) {
        await (0, _.endStageInstance)(e.id);
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
            return f;
          },
          getStageChannelMetadata: function () {
            return E;
          },
        }),
        n("808653"),
        n("222007"),
        n("917351");
      var l = n("945956"),
        i = n("387111"),
        a = n("991170"),
        s = n("834052"),
        r = n("837979"),
        u = n("49111"),
        d = n("606762"),
        o = n("782340");
      function c(e, t, n, l) {
        let a = t[0],
          s = i.default.getName(e, n, a),
          r = null != l ? l : t.length;
        return 1 === r && null != a
          ? s
          : null == a
            ? o.default.Messages.SPEAKING_COUNT.format({ count: r })
            : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: s,
                count: r - 1,
              });
      }
      function f(e, t) {
        switch (e) {
          case d.RowType.OWNER:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case d.RowType.ADMINISTRATOR:
            return o.default.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case d.RowType.MEMBER:
          case d.RowType.ROLE:
            return t
              ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case d.RowType.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let t = s.default.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: l.default.getMediaSessionId(),
          request_to_speak_state: a.default.canEveryoneRole(
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
            return a;
          },
          updateStageInstance: function () {
            return s;
          },
          endStageInstance: function () {
            return r;
          },
        });
      var l = n("872717"),
        i = n("49111");
      async function a(e, t, n, a, s) {
        let r = await l.default.post({
          url: i.Endpoints.STAGE_INSTANCES,
          body: {
            channel_id: e,
            topic: t,
            privacy_level: n,
            guild_scheduled_event_id: s,
            send_start_notification: a,
          },
        });
        return r.body;
      }
      async function s(e, t, n) {
        let a = await l.default.patch({
          url: i.Endpoints.STAGE_INSTANCE(e),
          body: { topic: t, privacy_level: n },
        });
        return a.body;
      }
      function r(e) {
        return l.default.delete(i.Endpoints.STAGE_INSTANCE(e));
      }
    },
    679428: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var l = n("872717"),
        i = n("689988"),
        a = n("870691"),
        s = n("42203"),
        r = n("718517"),
        u = n("49111");
      let d = {},
        o = 0,
        c = 15 * r.default.Millis.SECOND;
      function f() {
        d = { ...a.default.getCollapsedCategories() };
      }
      function E() {
        !__OVERLAY__ && (clearTimeout(o), (o = setTimeout(() => _({}), c)));
      }
      async function h(e, t) {
        null == e || e === u.ME
          ? await l.default.patch({
              url: u.Endpoints.USER_GUILD_SETTINGS(u.ME),
              body: t,
            })
          : await _(null != t ? { [null != e ? e : u.ME]: t } : {});
      }
      async function _(e) {
        clearTimeout(o);
        let t = 0 !== Object.keys(e).length,
          n = a.default.getCollapsedCategories(),
          i = (function () {
            let e = {},
              t = a.default.getCollapsedCategories();
            for (let n in t) t[n] !== d[n] && (e[n] = !0);
            for (let n in d) t[n] !== d[n] && (e[n] = !0);
            return e;
          })();
        for (let l in i) {
          let i = s.default.getChannel(l);
          null != i &&
            null != i.guild_id &&
            (!(i.guild_id in e) && (e[i.guild_id] = {}),
            null == e[i.guild_id].channel_overrides &&
              (e[i.guild_id].channel_overrides = {}),
            (e[i.guild_id].channel_overrides[i.id] = {
              ...e[i.guild_id].channel_overrides[i.id],
              collapsed: i.id in n,
            }),
            (t = !0));
        }
        return t
          ? ((d = { ...n }),
            delete e[u.FAVORITES],
            (
              await l.default.patch({
                url: u.Endpoints.USER_GUILD_SETTINGS_BULK,
                body: { guilds: e },
              })
            ).body)
          : [];
      }
      function v() {
        d = { ...a.default.getCollapsedCategories() };
      }
      class g extends i.default {
        constructor(...e) {
          super(...e),
            (this.actions = {
              CATEGORY_COLLAPSE: E,
              CATEGORY_EXPAND: E,
              CATEGORY_COLLAPSE_ALL: E,
              CATEGORY_EXPAND_ALL: E,
              POST_CONNECTION_OPEN: f,
              USER_GUILD_SETTINGS_FULL_UPDATE: v,
            }),
            (this.saveUserGuildSettings = h),
            (this.saveUserGuildSettingsBulk = _);
        }
      }
      var C = new g();
    },
    870691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007");
      var l = n("446674"),
        i = n("913144"),
        a = n("449008"),
        s = n("42203"),
        r = n("341542"),
        u = n("923959"),
        d = n("49111");
      let o = {},
        c = 0;
      function f() {
        c += 1;
      }
      function E(e) {
        if (null == o[e]) return !1;
        delete o[e];
      }
      class h extends l.default.PersistedStore {
        initialize(e) {
          this.waitFor(s.default, r.default),
            this.removeChangeListener(f),
            this.addChangeListener(f),
            (o = null != e ? e : {});
        }
        getState() {
          return o;
        }
        isCollapsed(e) {
          return null != e && "null" !== e && !!o[e] && o[e];
        }
        getCollapsedCategories() {
          return o;
        }
        get version() {
          return c;
        }
      }
      (h.displayName = "CategoryCollapseStore"),
        (h.persistKey = "collapsedCategories");
      var _ = new h(i.default, {
        CONNECTION_OPEN: function (e) {
          for (let t of (!e.userGuildSettings.partial && (o = {}),
          e.userGuildSettings.entries))
            if (null != t.channel_overrides)
              for (let e of t.channel_overrides)
                e.collapsed ? (o[e.channel_id] = !0) : delete o[e.channel_id];
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e,
            n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
          for (let e in o) {
            let t = s.default.getChannel(e);
            null != t &&
              null != t.guild_id &&
              n.has(t.guild_id) &&
              delete o[t.id];
          }
          for (let e of t)
            for (let t of e.channel_overrides)
              t.collapsed && (o[t.channel_id] = !0);
        },
        CATEGORY_COLLAPSE: function (e) {
          let { id: t } = e;
          if (o[t]) return !1;
          o[t] = !0;
        },
        CATEGORY_EXPAND: function (e) {
          let { id: t } = e;
          return E(t);
        },
        CATEGORY_COLLAPSE_ALL: function (e) {
          let { guildId: t } = e;
          u.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            "null" !== t.id && (o[t.id] = !0);
          });
        },
        CATEGORY_EXPAND_ALL: function (e) {
          let { guildId: t } = e;
          u.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            delete o[t.id];
          });
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          return E(t);
        },
      });
    },
    849467: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("696675"),
        s = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                  className: a,
                  fill: i,
                }),
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                  className: a,
                  fill: i,
                }),
              ],
            });
          },
          a.MicrophoneIcon,
          void 0,
          { size: 24 }
        );
    },
    433487: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("304983"),
        s = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                fill: i,
                className: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          a.MoreHorizontalIcon,
          void 0,
          { size: 24 }
        );
    },
    155207: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("811513"),
        s = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, s.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  className: a,
                  fill: i,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, l.jsx)("path", {
                  className: a,
                  fill: i,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, l.jsx)("path", {
                  className: a,
                  fill: i,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, l.jsx)("path", {
                  className: a,
                  fill: i,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          a.GroupIcon,
          void 0,
          { size: 24 }
        );
    },
    794352: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("521590"),
        s = n("75196"),
        r = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              className: a,
              foreground: r,
              ...u
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, s.default)(u),
              className: a,
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: r,
                fill: i,
                d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z",
              }),
            });
          },
          a.GlobeEarthIcon,
          void 0,
          { size: 24 }
        );
    },
    430143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GroupIcon: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
            className: r,
          }),
        });
      };
    },
    886181: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MicrophoneIcon: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: r,
            }),
          ],
        });
      };
    },
    541742: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MoreHorizontalIcon: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=307c227b937f768974ae.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53188"],
  {
    406189: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("913144"),
        s = {
          updateChannelDimensions(e, t, n, s, l) {
            i.default.wait(() => {
              i.default.dispatch({
                type: "UPDATE_CHANNEL_DIMENSIONS",
                channelId: e,
                scrollTop: t,
                scrollHeight: n,
                offsetHeight: s,
              }),
                null != l && l();
            });
          },
          updateChannelListScroll(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
            i.default.dispatch({
              type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
              guildId: e,
              scrollTop: t,
              channelIds: n,
            });
          },
          channelListScrollTo(e, t) {
            i.default.dispatch({
              type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
              guildId: e,
              scrollTo: t,
              channelIds: [],
            });
          },
          clearChannelListScrollTo(e) {
            i.default.dispatch({
              type: "UPDATE_CHANNEL_LIST_DIMENSIONS",
              guildId: e,
              scrollTo: null,
              channelIds: [],
            });
          },
          clearChannelDimensions(e, t) {
            this.updateChannelDimensions(e, null, null, null, t);
          },
          updateGuildListScrollTo(e) {
            i.default.dispatch({
              type: "UPDATE_GUILD_LIST_DIMENSIONS",
              scrollTop: e,
            });
          },
        };
    },
    568131: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchLibrary: function () {
            return o;
          },
          createTestModeLibraryApplications: function () {
            return u;
          },
          setActiveLaunchOptionId: function () {
            return d;
          },
        });
      var i = n("872717"),
        s = n("913144"),
        l = n("370999"),
        a = n("271560"),
        r = n("49111");
      async function o() {
        try {
          let e = await (0, a.httpGetWithCountryCodeQuery)(
            { url: r.Endpoints.LIBRARY, oldFormErrors: !0 },
            !1
          );
          s.default.dispatch({
            type: "LIBRARY_FETCH_SUCCESS",
            libraryApplications: e.body,
          });
        } catch (e) {
          s.default.dispatch({ type: "LIBRARY_FETCH_FAIL", error: e });
        }
      }
      async function u(e) {
        let t = e.primarySkuId;
        if (null == t) return;
        let n = await i.HTTP.get({
            url: r.Endpoints.APPLICATION_BRANCH_LIST(e.id),
            oldFormErrors: !0,
          }).then(e => e.body),
          a = n.map(n =>
            l.default.createForTestMode({ id: e.id, skuId: t, branch: n })
          );
        s.default.dispatch({
          type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
          libraryApplications: a,
        });
      }
      function d(e, t, n) {
        s.default.dispatch({
          type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
          applicationId: e,
          branchId: t,
          launchOptionId: n,
        });
      }
    },
    671306: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("55897");
      n.es(i, t);
    },
    388142: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          initiateChannelPrompts: function () {
            return f;
          },
          forcePrompt: function () {
            return T;
          },
          sendGamingStatsMessage: function () {
            return E;
          },
          updateGamingStats: function () {
            return h;
          },
        });
      var i = n("872717"),
        s = n("295426"),
        l = n("819689"),
        a = n("529805"),
        r = n("42203"),
        o = n("474643"),
        u = n("377253"),
        d = n("659500"),
        c = n("49111");
      function f(e) {
        i.HTTP.post({
          url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
          body: { guild_ids: e },
        });
      }
      function T(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
        i.HTTP.post({
          url: c.Endpoints.FORCE_SEND_PROMPT(e),
          body: { prompt_type: t },
        });
      }
      async function E(e, t, n) {
        await i.HTTP.post({
          url: c.Endpoints.SEND_GAMING_STATS(t),
          body: {
            message_reference: { guild_id: e, channel_id: t, message_id: n },
          },
        }),
          _(t);
      }
      async function h(e) {
        let t = await i.HTTP.patch({
          url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id),
        });
        if (null != t.text && "" !== t.text) {
          let n = r.default.getChannel(e.channel_id);
          null != n &&
            ((0, a.createPendingReply)({
              channel: n,
              message: e,
              shouldMention: !1,
              showMentionToggle: !1,
            }),
            _(n.id)),
            s.default.saveDraft(
              e.channel_id,
              t.text,
              o.DraftType.ChannelMessage
            );
        }
      }
      function _(e) {
        let t = u.default.getMessages(e);
        t.hasMoreAfter
          ? l.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL)
          : d.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT);
      }
    },
    696326: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("862205");
      let s = (0, i.createExperiment)({
        kind: "guild",
        id: "2023-03_onboarding_upsell_lifecycle",
        label: "Onboarding Upsell Lifecycle",
        defaultConfig: { showLifecycleUpsells: !1 },
        treatments: [
          {
            id: 1,
            label: "Show new lifecycle upsells",
            config: { showLifecycleUpsells: !0 },
          },
        ],
      });
      var l = s;
    },
    179803: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          shouldShowGuildOnboardingUpsell: function () {
            return S;
          },
          dismissedGuildOnboardingUpsell: function () {
            return I;
          },
        }),
        n("222007");
      var i = n("866227"),
        s = n.n(i),
        l = n("151426"),
        a = n("801340"),
        r = n("10641"),
        o = n("872173"),
        u = n("374363"),
        d = n("305961"),
        c = n("299039"),
        f = n("696326"),
        T = n("380710"),
        E = n("49111"),
        h = n("994428");
      let _ = [
          l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2,
          l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE,
          l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
        ],
        p = [0, 1, 7];
      function S(e, t) {
        var n;
        let i = d.default.getGuilds(),
          l = c.default.entries(i).some(e => {
            let [t, n] = e,
              i = (0, T.isGuildOnboardingSettingsAvailable)(t),
              s = n.hasFeature(E.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
            return i && s;
          });
        if (l || !(0, T.isGuildOnboardingSettingsAvailable)(e)) return !1;
        let o =
            null === (n = u.default.settings.userContent) || void 0 === n
              ? void 0
              : n.guildOnboardingUpsellDismissedAt,
          h = null != o ? a.Timestamp.toDate(o) : void 0,
          S = null != h ? s().diff(h, "days") : null,
          I = _.indexOf(t);
        if (-1 === I) return !1;
        let g = null == S || S > p[I];
        if (!g) return !1;
        let N = _.find(e => !(0, r.isDismissibleContentDismissed)(e)) === t;
        if (!N) return !1;
        let { showLifecycleUpsells: A } = f.default.getCurrentConfig(
          { guildId: e, location: "7f5b67_1" },
          {
            disable: l || !(0, T.isGuildOnboardingSettingsAvailable)(e),
            autoTrackExposure: !0,
          }
        );
        return A;
      }
      function I(e, t) {
        let n = a.Timestamp.now();
        o.PreloadedUserSettingsActionCreators.updateAsync(
          "userContent",
          e => {
            e.guildOnboardingUpsellDismissedAt = n;
          },
          o.UserSettingsDelay.INFREQUENT_USER_ACTION
        ),
          null != t &&
            (0, r.markDismissibleContentAsDismissed)(t, {
              forceTrack: !0,
              dismissAction: h.ContentDismissActionType.AUTO,
              guildId: e,
            });
      }
    },
    933326: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var i = n("689988"),
        s = n("21121"),
        l = n("162771"),
        a = n("398604"),
        r = n("322224");
      let o = {},
        u = new Set(),
        d = async e => {
          let t = a.default.getGuildScheduledEventsForGuild(e);
          if (0 !== t.length) {
            if (!u.has(e))
              try {
                await r.default.getGuildEventsForCurrentUser(e), u.add(e);
              } catch (e) {}
          }
        };
      class c extends i.default {
        async getGuildEventUserCounts(e, t, n) {
          let i = n.filter(
            n =>
              null == o["".concat(e, "-").concat(t, "-").concat(n)] ||
              Date.now() - o["".concat(e, "-").concat(t, "-").concat(n)] > 18e5
          );
          if (
            !(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) ||
            0 !== i.length
          ) {
            (o["".concat(e, "-").concat(t)] = Date.now()),
              i.forEach(
                n =>
                  (o["".concat(e, "-").concat(t, "-").concat(n)] = Date.now())
              );
            try {
              await r.default.fetchGuildEventUserCounts(e, t, i);
            } catch (e) {}
          }
        }
        getGuildEventUsers(e, t, n) {
          return r.default.fetchUsersForGuildEvent(e, t, n);
        }
        getGuildEventsForCurrentUser(e) {
          return d(e);
        }
        handleConnectionOpen() {
          u.clear(), (o = {});
          let e = (0, s.isInMainTabsExperiment)(),
            t = l.default.getLastSelectedGuildId();
          if (e && null != t) {
            let e = a.default.getGuildScheduledEventsForGuild(t);
            e.forEach(e => this.getGuildEventUserCounts(t, e.id, []));
          }
        }
        handleGuildUnavailable(e) {
          let { guildId: t } = e;
          u.delete(t), delete o[t];
        }
        handleGuildDelete(e) {
          let { guild: t } = e,
            n = t.id;
          u.delete(n), delete o[n];
        }
        handleInviteResolveSuccess(e) {
          var t;
          let { invite: n } = e,
            i = n.guild_scheduled_event,
            s = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
          null != i && null != s && d(s);
        }
        handleChannelSelect(e) {
          let { guildId: t } = e;
          if (null == t) return;
          let n = a.default.getGuildScheduledEventsForGuild(t);
          n.forEach(e => this.getGuildEventUserCounts(t, e.id, []));
        }
        constructor(...e) {
          super(...e),
            (this.actions = {
              POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
              GUILD_DELETE: e => this.handleGuildDelete(e),
              GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
              INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
              CHANNEL_SELECT: e => this.handleChannelSelect(e),
            });
        }
      }
      var f = new c();
    },
    596512: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007"),
        n("424973");
      var i = n("693566"),
        s = n.n(i),
        l = n("689988"),
        a = n("599110"),
        r = n("299039"),
        o = n("49111");
      class u extends l.default {
        handleMessageBecameVisible(e) {
          let { messageId: t } = e;
          if (
            null != this.currentlyVisibleMessageTimers[t] ||
            this.viewsInCurrentChannel.has(t)
          )
            return;
          let n = this.recentViewTimes.get(t);
          if (null != n && Date.now() - n < 6e4) return;
          let i = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[t],
              this.viewsInCurrentChannel.add(t),
              this.recentViewTimes.set(t, Date.now()),
              this.bufferViewTrack(e);
          }, 1e3);
          this.currentlyVisibleMessageTimers[t] = i;
        }
        handleMessageLostVisibility(e) {
          let t = this.currentlyVisibleMessageTimers[e];
          null != t &&
            (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e]);
        }
        handleMessageListVisibilityChange(e) {
          for (let t of e) this.handleMessageBecameVisible(t);
          let t = new Set(e.map(e => e.messageId));
          for (let e of r.default.keys(this.currentlyVisibleMessageTimers))
            !t.has(e) && this.handleMessageLostVisibility(e);
        }
        handleChannelSelect() {
          for (let e of Object.values(this.currentlyVisibleMessageTimers))
            clearTimeout(e);
          (this.currentlyVisibleMessageTimers = {}),
            this.viewsInCurrentChannel.clear(),
            this.drainBuffer();
        }
        drainBuffer() {
          for (let e of this.batchBuffer)
            a.default.track(o.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
              message_id: e.messageId,
              channel_id: e.channelId,
              guild_id: e.guildId,
              source_channel_id: e.sourceChannelId,
              source_guild_id: e.sourceGuildId,
            });
          (this.batchBuffer = []),
            null != this.batchTimerId &&
              (clearTimeout(this.batchTimerId), (this.batchTimerId = null));
        }
        bufferViewTrack(e) {
          this.batchBuffer.length >= 10 && this.drainBuffer(),
            this.batchBuffer.push(e),
            null == this.batchTimerId &&
              (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3));
        }
        constructor(...e) {
          super(...e),
            (this.currentlyVisibleMessageTimers = {}),
            (this.viewsInCurrentChannel = new Set()),
            (this.recentViewTimes = new s({ max: 500, maxAge: 6e4 })),
            (this.batchBuffer = []),
            (this.batchTimerId = null),
            (this.actions = {
              CHANNEL_SELECT: () => this.handleChannelSelect(),
            });
        }
      }
      var d = new u();
    },
    935583: function (e, t, n) {
      "use strict";
      var i, s, l, a;
      n.r(t),
        n.d(t, {
          dirtyChars: function () {
            return r;
          },
          coalescePeriods: function () {
            return o;
          },
          EditState: function () {
            return i;
          },
          PomeloEntrypoints: function () {
            return s;
          },
          MAX_DISPLAY_NAME_LENGTH: function () {
            return u;
          },
          POMELO_KEYWORD: function () {
            return d;
          },
          CONTROL_CHARACTERS_CODE: function () {
            return c;
          },
          TIMEOUT_TIME: function () {
            return f;
          },
        });
      let r = /([^A-Za-z0-9_.]+)/g,
        o = /\.+/g;
      ((l = i || (i = {})).NONE = "none"),
        (l.EDIT_DISPLAY_NAME = "display-name"),
        (l.EDIT_USERNAME = "username"),
        (l.PREVIEW = "preview"),
        (l.SUGGESTION = "suggestion"),
        ((a = s || (s = {})).APP_START = "app start"),
        (a.NOTICE = "notice"),
        (a.USER_SETTINGS = "user settings"),
        (a.USER_SETTINGS_EDIT = "user settings edit"),
        (a.YOU_TAB = "you tab");
      let u = 32,
        d = "pomelo",
        c = [
          1564, 917505, 12644, 65279, 173, 6068, 10240, 4447, 847, 4448, 65440,
        ],
        f = 2e3;
    },
    553257: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          experiment: function () {
            return s;
          },
          usePomeloEligibility: function () {
            return l;
          },
          getPomeloEligibility: function () {
            return a;
          },
        });
      var i = n("862205");
      let s = (0, i.createExperiment)({
          kind: "user",
          label: "Pomelo",
          id: "2023-03_pomelo",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        l = () => {
          let { enabled: e } = s.useExperiment(
            { location: "faf26d_1" },
            { autoTrackExposure: !1 }
          );
          return e;
        },
        a = () => {
          let { enabled: e } = s.getCurrentConfig(
            { location: "faf26d_2" },
            { autoTrackExposure: !1 }
          );
          return e;
        };
    },
    42060: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useForceMigration: function () {
            return l;
          },
          getForceMigration: function () {
            return a;
          },
        });
      var i = n("862205");
      let s = (0, i.createExperiment)({
          kind: "user",
          id: "2024-01_uu_forced_migration",
          label: "Unique Username Forced Migration UI",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable Forced Migration UI",
              config: { enabled: !0 },
            },
          ],
        }),
        l = () => {
          let { enabled: e } = s.useExperiment(
            { location: "force_migration" },
            { autoTrackExposure: !1 }
          );
          return e;
        },
        a = () => {
          let { enabled: e } = s.getCurrentConfig(
            { location: "force_migration" },
            { autoTrackExposure: !1 }
          );
          return e;
        };
    },
    363861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("77078");
      async function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        await (0, s.openModalLazy)(async () => {
          let { default: s } = await n.el("892845").then(n.bind(n, "892845"));
          return n => (0, i.jsx)(s, { source: e, oneClickFlow: t, ...n });
        });
      }
    },
    385649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var i = n("446674"),
        s = n("913144"),
        l = n("599110"),
        a = n("773336"),
        r = n("49111");
      let o = {
          desktopType: a.isPlatformEmbedded
            ? r.DesktopNotificationTypes.ALL
            : r.DesktopNotificationTypes.NEVER,
          disableAllSounds: !1,
          disabledSounds: [],
          ttsType: r.TTSNotificationTypes.NEVER,
          disableUnreadBadge: !1,
          taskbarFlash: !0,
          notifyMessagesInSelectedChannel: !1,
        },
        u = o;
      function d(e, t) {
        !__OVERLAY__ && l.default.track(e, t);
      }
      function c(e) {
        let { desktopType: t } = e;
        (u.desktopType = t),
          d(r.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
            notifications_enabled: t === r.DesktopNotificationTypes.ALL,
          });
      }
      class f extends i.default.DeviceSettingsStore {
        initialize(e) {
          u = { ...o, ...e };
        }
        getUserAgnosticState() {
          return u;
        }
        getDesktopType() {
          return u.desktopType;
        }
        getTTSType() {
          return u.ttsType;
        }
        getDisabledSounds() {
          return u.disabledSounds;
        }
        getDisableAllSounds() {
          return u.disableAllSounds;
        }
        getDisableUnreadBadge() {
          return u.disableUnreadBadge;
        }
        getNotifyMessagesInSelectedChannel() {
          return u.notifyMessagesInSelectedChannel;
        }
        get taskbarFlash() {
          return u.taskbarFlash;
        }
        isSoundDisabled(e) {
          return u.disableAllSounds || -1 !== u.disabledSounds.indexOf(e);
        }
      }
      (f.displayName = "NotificationSettingsStore"),
        (f.persistKey = "notifications"),
        (f.migrations = [
          e => {
            let t = { ...e };
            return (
              (t.disabledSounds = t.disabledSounds || []),
              (t.disableUnreadBadge = t.disableUnreadBadge || !1),
              (t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash),
              (t.ttsType = t.ttsType || r.TTSNotificationTypes.NEVER),
              null == t.desktopType &&
                (t.desktopType = a.isPlatformEmbedded
                  ? r.DesktopNotificationTypes.ALL
                  : r.DesktopNotificationTypes.NEVER),
              t
            );
          },
        ]);
      var T = new f(s.default, {
        NOTIFICATIONS_SET_DESKTOP_TYPE: c,
        NOTIFICATIONS_SET_TTS_TYPE: function (e) {
          let { ttsType: t } = e;
          u.ttsType = t;
        },
        NOTIFICATIONS_SET_DISABLED_SOUNDS: function (e) {
          let { sounds: t } = e;
          u.disabledSounds = t;
        },
        NOTIFICATIONS_TOGGLE_ALL_DISABLED: function () {
          u.disableAllSounds = !u.disableAllSounds;
        },
        NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
          let { enabled: t, source: n } = e;
          d(r.AnalyticEvents.ENABLE_NOTIFICATIONS, {
            enabled: t === r.NotificationPermissionTypes.ENABLED,
            source: n,
          }),
            t === r.NotificationPermissionTypes.BLOCKED
              ? c({ desktopType: r.DesktopNotificationTypes.NEVER })
              : t === r.NotificationPermissionTypes.ENABLED &&
                c({ desktopType: r.DesktopNotificationTypes.ALL });
        },
        NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function (e) {
          let { disableUnreadBadge: t } = e;
          u.disableUnreadBadge = t;
        },
        NOTIFICATIONS_SET_TASKBAR_FLASH: function (e) {
          let { taskbarFlash: t } = e;
          u.taskbarFlash = t;
        },
        NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function (e) {
          let { notify: t } = e;
          u.notifyMessagesInSelectedChannel = t;
        },
      });
    },
    985622: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("469563"),
        l = n("671306"),
        a = n("75196"),
        r = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foreground: l,
              ...r
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, a.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, i.jsx)("path", {
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                fill: s,
              }),
            });
          },
          l.ScreenXIcon,
          void 0,
          { size: 24 }
        );
    },
    55897: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenXIcon: function () {
            return a;
          },
        });
      var i = n("37983");
      n("884691");
      var s = n("669491"),
        l = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
              clipRule: "evenodd",
              className: r,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=53188.a8ad646a25a96e2637d7.js.map

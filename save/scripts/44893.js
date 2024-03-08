(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44893"],
  {
    207273: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var i = n("298386"),
        s = n("446674"),
        l = n("913144"),
        a = n("619443");
      let r = new Set(),
        d = {};
      function h() {
        r.clear();
      }
      function o(e) {
        r.delete(e.guild.id);
      }
      class u extends s.default.Store {
        getChannelStatus(e) {
          var t;
          if (null != e && null != e.guild_id) {
            if (e.type === i.ChannelTypes.GUILD_VOICE)
              return (
                !r.has(e.guild_id) &&
                  (r.add(e.guild_id),
                  a.default.getSocket().requestChannelStatuses(e.guild_id)),
                null === (t = d[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
              );
          }
        }
      }
      u.displayName = "ChannelStatusStore";
      var c = new u(l.default, {
        GUILD_CREATE: o,
        GUILD_DELETE: o,
        CONNECTION_RESUMED: h,
        CONNECTION_OPEN: h,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          null == d[e.guildId] && (d[e.guildId] = {}),
            (d[e.guildId][e.id] = e.status);
        },
        CHANNEL_STATUSES: function (e) {
          for (let { id: t, status: n } of ((d[e.guildId] = {}), e.channels))
            d[e.guildId][t] = n;
        },
      });
    },
    650033: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var i = n("446674"),
        s = n("913144");
      let l = {
          disable_alpha_voice_panel:
            "Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It's not feature complete so if there's something you are missing, or you find a problem, you can disable it here.",
          enable_recently_active: "Enable recently active channels",
          happening_main_tab: "Enable Happening tab containing summaries",
          enable_recently_active_summaries:
            "Enable summaries in recently active view",
          disable_theme_key:
            "Disable reloading the entire app when the theme changes",
          theme_setting_in_account_sheet:
            "Show theme settings in the Account action sheet",
          cozy_header: "Cozy header",
          mobile_profile_effect_debug_controls:
            "mobile_profile_effect_debug_controls",
          enable_new_search_filters: "Enables new search filters behavior",
          nav_experiment_server_drawer_enabled:
            "[NavI] Enable expandable server drawer",
          nav_experiment_server_drawer_no_activity:
            "[NavI] Hide activity in server drawer",
          nav_experiment_you_bar_grounded: "[NavI] Grounded you bar",
          nav_experiment_you_bar_large_buttons:
            "[NavI] Small buttons in you bar",
          nav_experiment_you_bar_large_messages:
            "[NavI] Large avatars in messages",
          nav_experiment_you_bar_messages_new_header:
            "[NavI] Use updated header in messages panel",
          force_channel_list_v2: "Force channel list V2",
          render_native_message_previews:
            "Render native message previews in search",
        },
        a = {};
      class r extends i.default.DeviceSettingsStore {
        getUserAgnosticState() {
          return { toggleStates: a };
        }
        initialize(e) {
          for (var t in l) {
            var n, i;
            let s =
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (n = e.toggleStates) || void 0 === n
                      ? void 0
                      : n[t]) &&
              void 0 !== i &&
              i;
            a[t] = s;
          }
        }
        get(e) {
          var t;
          return null !== (t = a[e]) && void 0 !== t && t;
        }
        set(e, t) {
          return (a[e] = t), t;
        }
        all() {
          return a;
        }
        allWithDescriptions() {
          return Object.entries(a).map(e => {
            let [t, n] = e;
            return [t, n, l[t]];
          });
        }
      }
      (r.displayName = "DevToolsDesignTogglesStore"),
        (r.persistKey = "DevToolsDesignTogglesStore");
      var d = new r(s.default, {
        DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
          a[e.toggle] = e.value;
        },
      });
    },
    362391: function (e, t, n) {
      "use strict";
      n.r(t), n("446674"), n("650033");
    },
    319839: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MAX_NEW_CHANNELS_TO_SHOW: function () {
            return z;
          },
          SECTION_INDEX_COMMUNITY: function () {
            return j;
          },
          SECTION_INDEX_FAVORITES: function () {
            return X;
          },
          SECTION_INDEX_UNCATEGORIZED_CHANNELS: function () {
            return K;
          },
          SECTION_INDEX_FIRST_NAMED_CATEGORY: function () {
            return J;
          },
          ChannelListFavoritesCategory: function () {
            return et;
          },
          computeSubtitle: function () {
            return ec;
          },
          computeThreadIds: function () {
            return eC;
          },
          default: function () {
            return s;
          },
        }),
        n("222007"),
        n("70102"),
        n("424973"),
        n("881410"),
        n("808653"),
        n("843762");
      var i,
        s,
        l,
        a = n("627445"),
        r = n.n(a),
        d = n("917351"),
        h = n.n(d),
        o = n("191225"),
        u = n("299285"),
        c = n("207273"),
        C = n("203288"),
        g = n("290886"),
        f = n("398604"),
        p = n("38654"),
        I = n("21121"),
        v = n("325796"),
        _ = n("364281"),
        S = n("797694"),
        E = n("512395"),
        y = n("15684"),
        m = n("401690"),
        w = n("755624"),
        N = n("233069"),
        L = n("870691"),
        T = n("42203"),
        R = n("816092"),
        b = n("305961"),
        A = n("957255"),
        O = n("660478"),
        D = n("18494"),
        G = n("282109"),
        U = n("800762"),
        V = n("316133"),
        M = n("449008"),
        P = n("299039"),
        F = n("89073"),
        H = n("323137"),
        x = n("796618"),
        B = n("49111"),
        k = n("724210"),
        Y = n("843455");
      let W = "placeholder-channel-id",
        z = 2;
      ((l = i || (i = {}))[(l.CannotShow = 1)] = "CannotShow"),
        (l[(l.DoNotShow = 2)] = "DoNotShow"),
        (l[(l.WouldShowIfUncollapsed = 3)] = "WouldShowIfUncollapsed"),
        (l[(l.Show = 4)] = "Show");
      let j = 0,
        X = 1,
        K = 3,
        J = 4,
        q = new Set([String(x.ChannelListCommunityRow.GUILD_DIRECTORY)]);
      s = class {
        getGuild(e, t) {
          var n;
          return (
            (!(e in this.guilds) ||
              !h.isEqual(
                null === (n = this.guilds[e]) || void 0 === n
                  ? void 0
                  : n
                      .getCommunitySection()
                      .getRows()
                      .filter(e => !q.has(e)),
                t
              )) &&
              (this.guilds[e] = new Z(e, t)),
            this.guilds[e]
          );
        }
        getGuildWithoutCommunityRows(e) {
          return (
            !(e in this.guilds) && (this.guilds[e] = new Z(e, [])),
            this.guilds[e]
          );
        }
        clear() {
          this.guilds = {};
        }
        clearGuildId(e) {
          return null != e && e in this.guilds && (delete this.guilds[e], !0);
        }
        updateRecentsCategory(e) {
          var t, n;
          if (null == e || !(e in this.guilds)) return !1;
          return (
            null !==
              (n =
                null === (t = this.guilds[e]) || void 0 === t
                  ? void 0
                  : t.updateRecentsCategory()) &&
            void 0 !== n &&
            n
          );
        }
        nonPositionalChannelIdUpdate(e) {
          let t = T.default.getBasicChannel(e);
          return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof N.ChannelRecordBase ||
              null != (t = T.default.getChannel(e))) &&
            this.nonPositionalChannelUpdate(t)
          );
        }
        nonPositionalChannelUpdate(e) {
          if (null == e.guild_id) return !1;
          let t = this.guilds[e.guild_id];
          if (null == t) return !1;
          let n = !1;
          return (
            e.isThread() &&
              (n = this.nonPositionalChannelIdUpdate(e.parent_id)),
            t.nonPositionalChannelUpdate(e) || n
          );
        }
        updateSubtitles(e, t) {
          let n =
            null == e
              ? Object.values(this.guilds)
              : e in this.guilds
                ? [this.guilds[e]]
                : [];
          n.forEach(e => e.updateSubtitles(t));
        }
        constructor() {
          this.guilds = {};
        }
      };
      class Z {
        get initializationData() {
          return {
            selectedChannel: T.default.getChannel(D.default.getChannelId()),
            selectedVoiceChannelId: D.default.getVoiceChannelId(),
            activeJoinedRelevantThreads:
              m.default.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads:
              m.default.getActiveJoinedUnreadThreadsForGuild(this.id),
          };
        }
        invalidate() {
          (this.sections = null),
            (this.rows = null),
            (this.sortedNamedCategories = null),
            (this.firstVoiceChannel = void 0),
            this.version++;
        }
        getSortedNamedCategories() {
          return (
            null == this.sortedNamedCategories && this.getRows(),
            this.sortedNamedCategories
          );
        }
        getSortedCategories() {
          return [
            this.favoritesCategory,
            this.recentsCategory,
            this.noParentCategory,
            ...this.getSortedNamedCategories(),
            this.voiceChannelsCategory,
          ];
        }
        getSections() {
          let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          return (null == this.sections &&
            (this.sections = this.getRows().map(e => e.length)),
          e)
            ? [...this.sections]
            : this.sections;
        }
        getRows() {
          if (null == this.rows) {
            (this.sortedNamedCategories = h.sortBy(
              Object.values(this.categories),
              e => e.record.position
            )),
              (this.rows = [
                this.communitySection,
                this.favoritesCategory,
                this.recentsCategory,
                this.noParentCategory,
                ...this.sortedNamedCategories,
                this.voiceChannelsCategory,
              ].map(e => e.getRows()));
            let e = 0;
            for (let t of [
              this.noParentCategory,
              ...this.sortedNamedCategories,
            ])
              for (let n of ((t.position = ++e), t.getShownChannelIds()))
                t.channels[n].position = ++e;
          }
          return this.rows;
        }
        getCategoryFromSection(e) {
          switch (e) {
            case j:
              throw Error("Invalid section. Use getCommunitySection instead");
            case X:
              return this.favoritesCategory;
            case K:
              return this.noParentCategory;
            case this.recentsSectionNumber:
              return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
              return this.voiceChannelsCategory;
            default:
              return this.getSortedNamedCategories()[e - J];
          }
        }
        getNamedCategoryFromSection(e) {
          return (
            r(
              (e -= J) >= 0 && e < this.getSortedNamedCategories().length,
              "invalid section index ".concat(e)
            ),
            this.getSortedNamedCategories()[e]
          );
        }
        getCommunitySection() {
          return this.communitySection;
        }
        getChannelFromSectionRow(e, t) {
          let n = this.getCategoryFromSection(e);
          if (null == n) return null;
          let i = n.channels[n.getShownChannelIds()[t]];
          return null == i ? null : { category: n, channel: i };
        }
        isPlaceholderRow(e, t) {
          return (
            r(e > j, "Invalid section"),
            e !== this.recentsSectionNumber && this.getRows()[e][t] === W
          );
        }
        getFirstVoiceChannel(e) {
          if (void 0 === this.firstVoiceChannel) {
            if (
              ((this.firstVoiceChannel =
                this.favoritesCategory.getFirstVoiceChannel(e)),
              null != this.firstVoiceChannel)
            )
              return this.firstVoiceChannel;
            if (
              ((this.firstVoiceChannel =
                this.noParentCategory.getFirstVoiceChannel(e)),
              null != this.firstVoiceChannel)
            )
              return this.firstVoiceChannel;
            for (let t of this.getSortedNamedCategories())
              if (null != t.getFirstVoiceChannel(e)) {
                this.firstVoiceChannel = t.getFirstVoiceChannel(e);
                break;
              }
          }
          return this.firstVoiceChannel;
        }
        getSectionRowsFromChannel(e) {
          if (
            (function (e) {
              return null != e && ev.has(e);
            })(e)
          ) {
            let t = this.getCommunitySection().getRows().indexOf(e);
            return [{ row: t, section: j }];
          }
          let t = [],
            n = T.default.getChannel(e);
          if (null == n || null == e) return t;
          let i = n.isThread();
          if ((i && (n = T.default.getChannel(n.parent_id)), null == n))
            return t;
          let s = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
          s >= 0 && t.push({ section: X, row: s });
          let l = this.recentsCategory.getShownChannelIds().indexOf(n.id);
          if (
            (l >= 0 && t.push({ section: this.recentsSectionNumber, row: l }),
            n.type === B.ChannelTypes.GUILD_CATEGORY)
          ) {
            let e = h.findIndex(
              this.getSortedNamedCategories(),
              e => e.id === (null == n ? void 0 : n.id)
            );
            return [{ section: e + J }];
          }
          let a = this.getCategory(n),
            r =
              a instanceof $
                ? K
                : this.getSortedNamedCategories().indexOf(a) + J,
            d = a.getShownChannelIds().indexOf(n.id);
          if (r >= 0 && d >= 0) {
            let s = i ? a.channels[n.id].threadIds.indexOf(e) : 0;
            t.push({ section: r, row: d, threadOffset: s });
          }
          let o = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
          return (
            o >= 0 &&
              t.push({ section: this.voiceChannelsSectionNumber, row: o }),
            t
          );
        }
        getCategory(e) {
          return null != e.parent_id && e.parent_id in this.categories
            ? this.categories[e.parent_id]
            : this.noParentCategory;
        }
        updateRecentsCategory() {
          let e = this.recentsCategory.updateAllChannels(
            this.initializationData
          );
          return e && this.invalidate(), e;
        }
        nonPositionalChannelUpdate(e) {
          let t = this.initializationData,
            n = this.getCategory(e),
            i = n.updateChannel(e, t);
          return (
            this.favoritesCategory.updateChannel(e, t) && (i = !0),
            this.recentsCategory.updateChannel(e, t) && (i = !0),
            this.voiceChannelsCategory.updateChannel(e, t) && (i = !0),
            i && this.invalidate(),
            i
          );
        }
        getSlicedChannels(e, t) {
          r(e.length > 0, "must have at least one channel in the slice");
          let n = e[0],
            i = e[e.length - 1],
            s = !0,
            l = !1,
            a = [],
            d = [];
          for (let e of this.getSortedCategories()) {
            let r =
              (null == t ? void 0 : t.ignoreRecents) &&
              e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
              let h = e.channels[t];
              s && (h.id === n.id ? (s = !1) : !r && a.push(h)),
                l && !r && d.push(h),
                !s && !l && h.id === i.id && (l = !0);
            }
          }
          return [a, e, d];
        }
        getChannels(e) {
          let t = [];
          if (null == this.allChannelsById)
            for (let e of ((this.allChannelsById = {}),
            this.getSortedCategories()))
              for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
          for (let n of e)
            null != this.allChannelsById[n] && t.push(this.allChannelsById[n]);
          return t;
        }
        updateSubtitles(e) {
          let t = [];
          if (null != e) {
            let n = T.default.getChannel(e);
            if (null != n) {
              if (n.id in this.favoritesCategory.channels)
                t = [this.favoritesCategory.channels[n.id]];
              else if (n.id in this.recentsCategory.channels)
                t = [this.recentsCategory.channels[n.id]];
              else {
                let i = this.getCategory(n);
                null != i && null != i.channels[e] && (t = [i.channels[e]]);
              }
            }
          } else
            t = h(this.getSortedCategories())
              .map(e => Object.values(e.channels))
              .flatten()
              .value();
          let n = !1;
          return (
            t.forEach(e => {
              e.updateSubtitle() && (n = !0);
            }),
            n && this.version++,
            n
          );
        }
        forEachShownChannel(e, t) {
          for (let n of this.getSortedCategories())
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
              for (let t of n.getShownChannelIds()) {
                let i = n.channels[t];
                for (let t of (e(i.record), i.threadIds)) {
                  let n = T.default.getChannel(t);
                  null != n && e(n);
                }
              }
        }
        forEachChannel(e, t) {
          for (let n of this.getSortedCategories())
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
              for (let t of n.getChannelRecords()) e(t);
        }
        constructor(e, t) {
          var n, i;
          (this.id = e),
            (this.sortedNamedCategories = null),
            (this.sections = null),
            (this.rows = null),
            (this.firstVoiceChannel = void 0),
            (this.allChannelsById = null),
            (this.version = 0),
            (this.hideMutedChannels = G.default.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = G.default.getMutedChannels(this.id)),
            (this.optedInChannels =
              null !==
                (n = G.default.getOptedInChannelsWithPendingUpdates(this.id)) &&
              void 0 !== n
                ? n
                : G.default.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, E.isOptInEnabledForGuild)(this.id)),
            (this.hideResourceChannels = (0, g.canSeeOnboardingHome)(this.id)),
            (this.favoriteChannelIds = new Set(
              null !== (i = G.default.getGuildFavorites(this.id)) &&
              void 0 !== i
                ? i
                : []
            )),
            (this.suggestedFavoriteChannelId = _.default.getSuggestedChannelId(
              this.id
            )),
            (this.collapsedCategoryIds = L.default.getCollapsedCategories());
          let s = T.default.getMutableGuildChannelsForGuild(this.id),
            l = b.default.getGuild(this.id),
            a = {},
            d = [],
            o = {};
          for (let e in s) {
            let t = s[e];
            t.type === B.ChannelTypes.GUILD_CATEGORY &&
              ((a[t.id] = t), (o[t.id] = []));
          }
          let u = [],
            c = [],
            C = [],
            f = this.initializationData;
          for (let e in s) {
            let t = s[e];
            if (t.type !== B.ChannelTypes.GUILD_CATEGORY) {
              if (t.type === B.ChannelTypes.GUILD_DIRECTORY) {
                null != l && !l.hasFeature(B.GuildFeatures.HUB) && C.push(t);
                continue;
              }
              eI(this, t, f)
                ? u.push(t)
                : (t.type === B.ChannelTypes.GUILD_VOICE ||
                    t.type === B.ChannelTypes.GUILD_STAGE_VOICE) &&
                  (null != t.parent_id &&
                    null != a[t.parent_id] &&
                    c.push(a[t.parent_id]),
                  c.push(t)),
                null != t.parent_id && t.parent_id in o
                  ? o[t.parent_id].push(t)
                  : d.push(t);
            }
          }
          for (let e in ((this.categories = {}), o))
            this.categories[e] = new ee(this, a[e], o[e], f);
          (this.recentsSectionNumber = 2),
            (this.favoritesSectionNumber = X),
            (this.noParentCategory = new $(this, d, f)),
            (this.favoritesCategory = new et(this, f)),
            (this.recentsCategory = (0, v.isRecentlyActiveChannelsEnabled)()
              ? new en(this, s, f)
              : new ei(this, u, f)),
            (this.voiceChannelsCategory = new es(this, c, a, f)),
            (this.communitySection = new el(t, C.length > 0)),
            r(
              !("null" in this.categories),
              "somehow a null got into categories"
            ),
            (this.voiceChannelsSectionNumber = J + h.size(this.categories));
        }
      }
      class Q {
        updateChannel(e, t) {
          return (
            !!(
              e.id in this.channels && this.channels[e.id].updateChannel(e, t)
            ) && (this.invalidate(), !0)
          );
        }
        invalidate() {
          this.shownChannelIds = null;
        }
        getRows() {
          let e = this.getShownChannelIds();
          return 0 === e.length && this.shouldShowEmptyCategory() ? [W] : e;
        }
        shouldShowEmptyCategory() {
          return h.some(this.channels, e => e.renderLevel >= 3);
        }
        getShownChannelIds() {
          return (
            null == this.shownChannelIds &&
              (this.shownChannelIds = h(this.channels)
                .values()
                .filter(e => 4 === e.renderLevel)
                .sortBy(e => {
                  let { record: t } = e;
                  return t.isGuildVocal() ? t.position + 1e4 : t.position;
                })
                .map(e => e.id)
                .value()),
            this.shownChannelIds
          );
        }
        getShownChannelAndThreadIds() {
          let e = h(this.channels)
            .values()
            .flatMap(e => e.threadIds)
            .value();
          return this.getShownChannelIds().concat(e);
        }
        isEmpty() {
          return 0 === this.getShownChannelIds().length;
        }
        getChannelRecords() {
          return h(this.channels)
            .values()
            .filter(e => e.renderLevel > 1)
            .map(e => e.record)
            .value();
        }
        getFirstVoiceChannel(e) {
          for (let t of this.getShownChannelIds()) {
            if (e && this.channels[t].record.isGuildStageVoice())
              return this.channels[t];
            if (!e && this.channels[t].record.isGuildVocal())
              return this.channels[t];
          }
          return null;
        }
        constructor(e) {
          (this.guild = e),
            (this.isMuted = !1),
            (this.isCollapsed = !1),
            (this.position = -1),
            (this.channels = {}),
            (this.shownChannelIds = null);
        }
      }
      class $ extends Q {
        constructor(e, t, n) {
          super(e),
            (this.channels = h(t)
              .map(e => new er(this, e, n))
              .keyBy(e => e.id)
              .value());
        }
      }
      class ee extends Q {
        shouldShowEmptyCategory() {
          return (
            !!(
              super.shouldShowEmptyCategory() ||
              (A.default.can(Y.Permissions.MANAGE_CHANNELS, this.record) &&
                A.default.can(Y.Permissions.VIEW_CHANNEL, this.record) &&
                h.isEmpty(this.channels) &&
                (!this.guild.optInEnabled ||
                  this.guild.optedInChannels.has(this.id)))
            ) || !1
          );
        }
        constructor(e, t, n, i) {
          for (let s of (super(e),
          (this.record = t),
          (this.id = t.id),
          (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
          (this.isMuted = e.mutedChannelIds.has(t.id)),
          (this.channels = {}),
          n))
            this.channels[s.id] = new er(this, s, i);
        }
      }
      class et extends Q {
        updateChannel(e, t) {
          let n =
              e.id in this.channels && G.default.isFavorite(e.guild_id, e.id),
            i = _.default.getSuggestedChannelId(e.guild_id),
            s = e.id === i && !n;
          if (
            (s &&
              (t = {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
              }),
            e.id in this.channels && this.channels[e.id].updateChannel(e, t))
          )
            return this.invalidate(), !0;
          let l = e.id in this.channels && e.id !== i && !n;
          return !!l && (delete this.channels[e.id], this.invalidate(), !0);
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        constructor(e, t) {
          var n;
          if (
            (super(e),
            !e.optInEnabled &&
              !(function () {
                return !1;
              })())
          )
            return;
          this.channels = h(
            null !== (n = G.default.getGuildFavorites(e.id)) && void 0 !== n
              ? n
              : []
          )
            .map(e => T.default.getChannel(e))
            .filter(M.isNotNullish)
            .map(e => new ed(this, e, t))
            .keyBy(e => e.id)
            .value();
          let i = _.default.getSuggestedChannelId(e.id),
            s = T.default.getChannel(i);
          null != s &&
            null != i &&
            (this.channels[i] = new ed(this, s, {
              ...t,
              activeJoinedRelevantThreads: {},
              activeJoinedUnreadThreads: {},
            }));
        }
      }
      class en extends Q {
        shouldShowEmptyCategory() {
          return (
            this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
          );
        }
        updateAllChannels(e) {
          return Object.values(this.channels).reduce(
            (t, n) => this.updateChannel(n.record, e) || t,
            !1
          );
        }
        updateChannel(e, t) {
          if (!this.enabled) return !1;
          if ((0, N.isThread)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
          }
          if (!(0, N.isGuildReadableType)(e.type)) return !1;
          let n = super.updateChannel(e, t),
            i = this.channels[e.id];
          return null == i
            ? ((i = new eo(this, e, t)),
              (this.channels[e.id] = i),
              this.invalidate(),
              !0)
            : this.updateShownChannelIds(i) || n;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        getShownChannelIds() {
          if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
              ? h(this.channels)
                  .filter(t => t.renderLevel >= e)
                  .map(e => [e.id, e.lastMessageTimestamp, e.renderLevel])
                  .filter(e => {
                    let [, t, n] = e;
                    return (
                      4 === n ||
                      (t > 0 && Date.now() - t < en.MAX_TIMESTAMP_DELTA)
                    );
                  })
                  .sortBy(e => {
                    let [, t, n] = e;
                    return -(t - (4 === n ? 0 : P.DISCORD_EPOCH));
                  })
                  .take(en.MAX_RECENT_CHANNELS)
                  .sortBy(e => {
                    let [, t] = e;
                    return -t;
                  })
                  .map(e => {
                    let [t] = e;
                    return t;
                  })
                  .value()
              : [];
          }
          return this.shownChannelIds;
        }
        updateShownChannelIds(e) {
          var t;
          let n = this.isCollapsed ? 4 : 3;
          if (null == this.shownChannelIds || e.renderLevel < n) return !1;
          if (
            e.lastMessageTimestamp >
            (null === (t = this.channels[this.shownChannelIds[0]]) ||
            void 0 === t
              ? void 0
              : t.lastMessageTimestamp)
          ) {
            let t = this.shownChannelIds.indexOf(e.id);
            return (
              t > -1 && this.shownChannelIds.splice(t, 1),
              this.shownChannelIds.splice(0, 0, e.id),
              this.shownChannelIds.length > en.MAX_RECENT_CHANNELS &&
                (this.shownChannelIds = this.shownChannelIds.slice(
                  0,
                  en.MAX_RECENT_CHANNELS
                )),
              !0
            );
          }
          return !1;
        }
        constructor(e, t, n) {
          if (
            (super(e),
            (this.enabled = !1),
            (this.isCollapsed = S.default.isCollapsed(e.id)),
            (this.enabled =
              (function () {
                return !1;
              })() && Object.keys(t).length >= en.MIN_READABLE_CHANNELS),
            this.enabled)
          )
            for (let e of Object.values(t))
              (0, N.isGuildReadableType)(e.type) &&
                !(0, N.isThread)(e.type) &&
                (this.channels[e.id] = new eo(this, e, n));
        }
      }
      (en.MIN_READABLE_CHANNELS = 7),
        (en.MAX_RECENT_CHANNELS = 10),
        (en.MAX_TIMESTAMP_DELTA = 6048e5);
      class ei extends Q {
        updateAllChannels(e) {
          let t = !1;
          return (
            P.default.keys(this.channels).forEach(n => {
              this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
          );
        }
        updateChannel(e, t) {
          let n = super.updateChannel(e, t);
          if (this.guild.optInEnabled) {
            let n = this.channels[e.id],
              i = eI(this.guild, e, t);
            if (i && null == n)
              return (
                (this.channels[e.id] = new eh(this, e, t)),
                this.invalidate(),
                !0
              );
            if (!i && null != n)
              return delete this.channels[e.id], this.invalidate(), !0;
          }
          return n;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        getShownChannelIds() {
          if (null == this.shownChannelIds) {
            let e = h(this.channels)
                .values()
                .filter(e => 4 === e.renderLevel || 3 === e.renderLevel)
                .filter(e => !e.record.isGuildVocal()),
              t = e
                .sortBy(e => {
                  let { record: t } = e;
                  return t.position;
                })
                .take(5)
                .value(),
              n = e.filter(e => 4 === e.renderLevel).value(),
              i = new Set([...n, ...t]);
            this.shownChannelIds = h([...i])
              .sortBy(e => {
                let { record: t } = e;
                return t.position;
              })
              .map(e => e.id)
              .value();
          }
          return this.shownChannelIds;
        }
        constructor(e, t, n) {
          if (
            (super(e), !e.optInEnabled || p.default.isFullServerPreview(e.id))
          )
            return;
          (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = h(t)
              .map(e => new eh(this, e, n))
              .keyBy(e => e.id)
              .value());
        }
      }
      class es extends Q {
        invalidate() {
          super.invalidate(), (this.hiddenChannelIds = null);
        }
        getHiddenChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.hiddenChannelIds) {
            let e = h(this.channels)
              .filter(e => 3 === e.renderLevel)
              .value();
            if (e.every(e => e.record.isCategory()))
              return (this.hiddenChannelIds = []), this.hiddenChannelIds;
            this.hiddenChannelIds = e.map(e => e.id);
          }
          return this.hiddenChannelIds;
        }
        getRows() {
          if (!this.guild.optInEnabled) return [];
          let e = this.getShownChannelIds();
          return 0 === e.length && this.getHiddenChannelIds().length > 0
            ? [W]
            : e;
        }
        getShownChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.shownChannelIds) {
            let t = h(this.channels)
              .filter(e => 4 === e.renderLevel)
              .orderBy(
                [
                  e =>
                    (function (e, t) {
                      if (e.record.type === B.ChannelTypes.GUILD_CATEGORY)
                        return e.record.position;
                      if (null != e.record.parent_id) {
                        var n, i;
                        return null !==
                          (i =
                            null === (n = t[e.record.parent_id]) || void 0 === n
                              ? void 0
                              : n.position) && void 0 !== i
                          ? i
                          : -1;
                      }
                      return -1;
                    })(e, this.categoriesById),
                  e =>
                    e.record.type === B.ChannelTypes.GUILD_CATEGORY
                      ? -1
                      : e.record.position,
                ],
                ["asc", "asc"]
              )
              .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
              var e;
              let i = t[n];
              if (
                !(n < t.length - 1) ||
                i.record.type !== B.ChannelTypes.GUILD_CATEGORY ||
                (null === (e = t[n + 1]) || void 0 === e
                  ? void 0
                  : e.record.type) !== B.ChannelTypes.GUILD_CATEGORY
              )
                (n !== t.length - 1 ||
                  i.record.type !== B.ChannelTypes.GUILD_CATEGORY) &&
                  this.shownChannelIds.push(i.id);
            }
          }
          return this.shownChannelIds;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        constructor(e, t, n, i) {
          if (
            (super(e),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
          )
            return;
          (this.isCollapsed = H.default.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = h(t)
              .map(e => new eu(this, e, i))
              .keyBy(e => e.id)
              .value());
        }
      }
      class el {
        isEmpty() {
          return 0 === this.communityRows.length;
        }
        getRows() {
          return this.communityRows;
        }
        getRow(e) {
          return this.communityRows[e];
        }
        constructor(e, t) {
          (this.communityRows = e.map(String)),
            t &&
              this.communityRows.push(
                String(x.ChannelListCommunityRow.GUILD_DIRECTORY)
              );
        }
      }
      class ea {
        get isMuted() {
          return this.category.guild.mutedChannelIds.has(this.id);
        }
        get isCollapsed() {
          return R.default.isCollapsed(this.id);
        }
        get isFirstVoiceChannel() {
          return this.category.getFirstVoiceChannel() === this;
        }
        get lastMessageTimestamp() {
          return Math.max(
            O.default.lastMessageTimestamp(this.id),
            ...this.threadIds.map(O.default.lastMessageTimestamp)
          );
        }
        updateChannel(e, t) {
          let n = !1;
          null != e && e !== this.record && ((this.record = e), (n = !0));
          let i = this.computeState(t);
          return (
            (i.renderLevel !== this.renderLevel ||
              !h.isEqual(i.threadIds, this.threadIds)) &&
              ((this.renderLevel = i.renderLevel),
              (this.threadIds = i.threadIds),
              (this.threadCount = h.size(i.threadIds)),
              (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
          );
        }
        updateSubtitle() {
          let e = this.computeSubtitle();
          return !h.isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
        }
        computeSubtitle() {
          return ec(
            this.record,
            this.isCollapsed || this.category.isCollapsed,
            this.category.guild.optInEnabled
          );
        }
        constructor(e, t, n) {
          (this.category = e),
            (this.record = t),
            (this.position = -1),
            (this.threadIds = []),
            (this.threadCount = 0),
            (this.subtitle = null),
            (this.renderLevel = 1),
            (this.id = t.id);
          let { renderLevel: i, threadIds: s } = this.computeState(n);
          (this.renderLevel = i),
            (this.threadCount = h.size(s)),
            (this.threadIds = s),
            4 === i && (this.subtitle = this.computeSubtitle());
        }
      }
      class er extends ea {
        computeState(e) {
          var t;
          let {
              selectedChannel: n,
              selectedVoiceChannelId: i,
              activeJoinedRelevantThreads: s,
              activeJoinedUnreadThreads: l,
            } = e,
            a = [];
          if (!A.default.can(Y.Permissions.VIEW_CHANNEL, this.record)) {
            if (this.id === i) return { renderLevel: 4, threadIds: a };
            if (
              !C.default.isChannelGatedAndVisible(
                this.record.guild_id,
                this.record.id
              )
            )
              return { renderLevel: 1, threadIds: a };
          }
          let r = this.record.parent_id,
            d = this.category.guild;
          if (ef(d, this.record)) return { renderLevel: 1, threadIds: a };
          let o = (null == n ? void 0 : n.id) === this.id || i === this.id,
            u = null != n && n.isThread() && n.parent_id === this.id,
            c =
              null !==
                (t =
                  o || u || (!this.category.isCollapsed && !this.isMuted)
                    ? s[this.id]
                    : l[this.id]) && void 0 !== t
                ? t
                : {};
          return ((a = eC(this.record, c, n, i, d.hideMutedChannels)),
          d.optInEnabled &&
            d.hideResourceChannels &&
            this.record.hasFlag(k.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL))
            ? { renderLevel: o ? 4 : 1, threadIds: a }
            : !d.optInEnabled ||
                d.optedInChannels.has(this.id) ||
                (null != r && d.optedInChannels.has(r))
              ? o ||
                u ||
                !h.isEmpty(a) ||
                O.default.getMentionCount(this.id) > 0
                ? { renderLevel: 4, threadIds: a }
                : d.hideMutedChannels && d.mutedChannelIds.has(this.id)
                  ? { renderLevel: 2, threadIds: a }
                  : this.category.isCollapsed &&
                      (d.mutedChannelIds.has(this.id) ||
                        (null != r && d.mutedChannelIds.has(r)) ||
                        this.record.isGuildVocal() ||
                        this.record.type === B.ChannelTypes.GUILD_STORE ||
                        ((0, N.isGuildReadableType)(this.record.type) &&
                          !O.default.hasUnread(this.record.id)))
                    ? { renderLevel: 3, threadIds: a }
                    : { renderLevel: 4, threadIds: a }
              : { renderLevel: 2, threadIds: a };
        }
      }
      class ed extends ea {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: s,
          } = e;
          return A.default.can(Y.Permissions.VIEW_CHANNEL, this.record)
            ? {
                renderLevel: 4,
                threadIds: eC(
                  this.record,
                  null !== (t = s[this.id]) && void 0 !== t ? t : {},
                  n,
                  i,
                  !1
                ),
              }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class eh extends ea {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: s,
          } = e;
          return A.default.can(Y.Permissions.VIEW_CHANNEL, this.record)
            ? {
                renderLevel: ep(this, e) ? 4 : 3,
                threadIds: eC(
                  this.record,
                  null !== (t = s[this.id]) && void 0 !== t ? t : {},
                  n,
                  i,
                  !1
                ),
              }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class eo extends er {
        computeState(e) {
          let { renderLevel: t, threadIds: n } = super.computeState(e);
          if (t > 1) {
            let i = this.record.parent_id,
              s = this.category.guild;
            s.mutedChannelIds.has(this.id) ||
            (null != i && s.mutedChannelIds.has(i))
              ? (t = 2)
              : 4 === t
                ? (t = 3)
                : 2 === t && eI(this.category.guild, this.record, e) && (t = 3),
              3 === t && ep(this, e) && (t = 4),
              (n = h.sortBy(n, e => -O.default.lastMessageTimestamp(e)));
          }
          return { renderLevel: t, threadIds: n };
        }
      }
      class eu extends er {
        getRenderLevel(e) {
          let t = this.category.guild;
          return !A.default.can(Y.Permissions.VIEW_CHANNEL, this.record) ||
            4 === e ||
            3 === e ||
            ef(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? h.some(U.default.getVoiceStatesForChannel(this.record.id))
                ? 4
                : 3
              : 4;
        }
        computeState(e) {
          let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
          return (
            4 === n &&
              (this.subtitle = ec(
                this.record,
                this.isCollapsed || this.category.isCollapsed,
                this.category.guild.optInEnabled
              )),
            { threadIds: [], renderLevel: n }
          );
        }
      }
      function ec(e, t, n) {
        if (e.type === B.ChannelTypes.GUILD_VOICE) {
          let i = f.default.getActiveEventByChannel(e.id);
          if (null != i) return { type: "event", name: i.name };
          let s = V.default.getVoiceStatesForChannel(e);
          if (n && t && (0, F.hasStream)(s)) return { type: "go-live" };
          let l = c.default.getChannelStatus(e);
          if (null != l && l.length > 0) return { type: "voice", text: l };
          let a = o.default.getEmbeddedActivitiesForChannel(e.id),
            r = (null != a ? a : [])
              .map(e => {
                var t;
                return null ===
                  (t = u.default.getApplication(e.applicationId)) ||
                  void 0 === t
                  ? void 0
                  : t.name;
              })
              .filter(M.isNotNullish);
          return r.length > 0
            ? { type: "embedded-activities", name: r.join(", ") }
            : null;
        }
        return null;
      }
      function eC(e, t, n, i, s) {
        let l = null != n && (n.id === e.id || i === e.id),
          a = null != n && n.isThread() && n.parent_id === e.id;
        if (N.THREADED_CHANNEL_TYPES.has(e.type)) {
          let e = h
            .sortBy(Object.values(t), e => -e.joinTimestamp)
            .map(e => e.channel.id);
          if (l) return e;
          if (a)
            return (
              !(n.id in t) &&
                !(0, I.isInMainTabsExperiment)() &&
                e.unshift(n.id),
              e
            );
          else if (s) return e.filter(e => !w.default.isMuted(e));
          else return e;
        }
        return [];
      }
      function eg() {
        return !1;
      }
      function ef(e, t) {
        return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
      }
      function ep(e, t) {
        let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
        if (O.default.getMentionCount(e.id) > 0) return !0;
        for (let t in i[e.id]) if (O.default.getMentionCount(t) > 0) return !0;
        if (
          null != n &&
          (n.id === e.id || (n.isThread() && n.parent_id === e.id))
        )
          return true;
        let s = y.default.getNewChannelIds(e.category.guild.id);
        if (s.size > z);
        else if (s.has(e.id)) return !0;
        return !1;
      }
      function eI(e, t, n) {
        let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
        if (
          t.type === B.ChannelTypes.GUILD_DIRECTORY ||
          !e.optInEnabled ||
          t.isGuildVocal() ||
          e.optedInChannels.has(t.id) ||
          t.isThread() ||
          (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
          (e.hideResourceChannels &&
            t.hasFlag(k.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL))
        )
          return !1;
        if (
          (null != i &&
            !(0, I.isInMainTabsExperiment)() &&
            (i.id === t.id || (i.isThread() && i.parent_id === t.id))) ||
          O.default.getMentionCount(t.id) > 0
        )
          return !0;
        let l = y.default.getNewChannelIds(e.id),
          a = Array.from(l).sort((e, t) => P.default.compare(t, e));
        if (l.has(t.id) && a.indexOf(t.id) < z) return !0;
        for (let e in s[t.id])
          if (
            O.default.getMentionCount(e) > 0 ||
            O.default.hasUnread(e) ||
            O.default.hasRecentlyVisitedAndRead(e)
          )
            return !0;
        return (
          !(
            e.mutedChannelIds.has(t.id) ||
            (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))
          ) &&
          (!!O.default.hasRecentlyVisitedAndRead(t.id) || !1)
        );
      }
      let ev = new Set(Object.values(x.ChannelListCommunityRow));
    },
    323137: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n("446674"),
        s = n("913144");
      let l = {};
      function a(e) {
        let { guildId: t, expand: n } = e;
        n ? (l[t] = !0) : delete l[t];
      }
      class r extends i.default.PersistedStore {
        initialize(e) {
          l = null != e ? e : {};
        }
        isVoiceCategoryExpanded(e) {
          var t;
          return null !== (t = null != e && l[e]) && void 0 !== t && t;
        }
        isVoiceCategoryCollapsed(e) {
          return !this.isVoiceCategoryExpanded(e);
        }
        getState() {
          return l;
        }
      }
      (r.displayName = "ChannelListVoiceCategoryStore"),
        (r.persistKey = "ChannelListVoiceCategoryStore");
      var d = new r(s.default, {
        VOICE_CATEGORY_COLLAPSE: a,
        VOICE_CATEGORY_EXPAND: a,
      });
    },
    796618: function (e, t, n) {
      "use strict";
      var i, s;
      n.r(t),
        n.d(t, {
          ChannelListCommunityRow: function () {
            return i;
          },
        }),
        ((s = i || (i = {})).GUILD_PREMIUM_PROGRESS_BAR =
          "guild-premium-progress-bar"),
        (s.GUILD_SCHEDULED_EVENTS = "guild-scheduled-events"),
        (s.GUILD_HUB_HEADER_OPTIONS = "guild-hub-header-options"),
        (s.GUILD_FAVORITES = "favorites"),
        (s.GUILD_CHANNEL_LIST_OPT_IN_NOTICE =
          "guild-channel-list-opt-in-notice"),
        (s.GUILD_ROLE_SUBSCRIPTIONS = "role-subscriptions"),
        (s.GUILD_SHOP = "shop"),
        (s.GUILD_MEMBER_APPLICATIONS = "member-applications"),
        (s.GUILD_HOME = "@home"),
        (s.CHANNELS_AND_ROLES = "channels-and-roles"),
        (s.BROWSE_CHANNELS = "browse-channels"),
        (s.GUILD_DIRECTORY = "guild-directory"),
        (s.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR =
          "guild-new-member-actions-progress-bar"),
        (s.GUILD_MOD_DASH_MEMBER_SAFETY = "guild-mod-dash-member-safety");
    },
    325796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isRecentlyActiveChannelsEnabled: function () {
            return s;
          },
        });
      var i = n("650033");
      function s() {
        return i.default.get("enable_recently_active");
      }
      n("362391");
    },
    364281: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var i = n("446674"),
        s = n("913144"),
        l = n("42203"),
        a = n("18494"),
        r = n("282109");
      let d = {},
        h = {},
        o = {};
      function u() {
        let e = a.default.getChannelId();
        if (null == e) return;
        let t = l.default.getChannel(e);
        if (null == t || null == t.guild_id) return;
        let n = t.guild_id;
        if (
          (null == o[e] && (o[e] = 0),
          t.isThread() ||
            (r.default.isOptInEnabled(n) &&
              !r.default.isChannelOrParentOptedIn(n, t.id)))
        ) {
          delete o[e], null != d[n] && d[n].delete(e);
          return;
        }
        if (
          (o[e]++,
          null == d[n] && (d[n] = new Set()),
          r.default.isFavorite(n, e))
        ) {
          d[n].delete(e);
          return;
        }
        if ((null == h[n] || !h[n].has(e)) && o[e] > 50) return d[n].add(e), !0;
      }
      class c extends i.default.PersistedStore {
        initialize(e) {
          var t, n;
          if ((this.syncWith([a.default], u), null == e)) return;
          let {
            suggestedChannels: i,
            dismissedSuggestions: s,
            channelOpensByChannelId: l,
          } = e;
          if (null != i)
            for (let e in i)
              (t = new Set(i[e])), (d[e] = void 0 !== t ? t : new Set());
          if (null != s)
            for (let e in s)
              (n = new Set(s[e])), (h[e] = void 0 !== n ? n : new Set());
          o = null != l ? l : {};
        }
        getSuggestedChannelId(e) {
          return null;
        }
        getState() {
          return {
            suggestedChannels: {},
            dismissedSuggestions: {},
            channelOpensByChannelId: {},
          };
        }
      }
      (c.displayName = "FavoritesSuggestionStore"),
        (c.persistKey = "FavoritesSuggestionStore");
      var C = new c(s.default, {
        DISMISS_FAVORITE_SUGGESTION: function (e) {
          let { guildId: t, channelId: n } = e;
          return (
            null == h[t] && (h[t] = new Set()), h[t].add(n), d[t].delete(n), !0
          );
        },
      });
    },
    797694: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var i = n("446674"),
        s = n("913144");
      let l = new Set();
      class a extends i.default.PersistedStore {
        initialize(e) {
          l.clear(), null == e || e.guilds.forEach(e => l.add(e));
        }
        isCollapsed(e) {
          return l.has(e);
        }
        getState() {
          return { guilds: l };
        }
      }
      (a.displayName = "RecentlyActiveCollapseStore"),
        (a.persistKey = "RecentlyActiveCollapseStore");
      var r = new a(s.default, {
        SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
          let { guildId: t, collapsed: n } = e;
          n ? l.add(t) : l.delete(t);
        },
      });
    },
    15684: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        }),
        n("222007");
      var i = n("446674"),
        s = n("913144"),
        l = n("267363"),
        a = n("582713"),
        r = n("374363"),
        d = n("271938"),
        h = n("42203"),
        o = n("923959"),
        u = n("26989"),
        c = n("305961"),
        C = n("660478"),
        g = n("282109"),
        f = n("718517"),
        p = n("299039"),
        I = n("49111");
      let v = new Set(),
        _ = {},
        S = {};
      function E(e, t) {
        let n = _[e];
        if (null != n && null != t && n.has(t)) {
          var i;
          g.default.isOptInEnabled(e) &&
            !(null === (i = h.default.getChannel(t)) || void 0 === i
              ? void 0
              : i.isThread()) &&
            null == C.default.ackMessageId(t) &&
            s.default.wait(() =>
              (0, l.ack)(t, !0, !0, p.default.atPreviousMillisecond(t))
            );
        }
      }
      function y(e) {
        var t;
        if (null != _[e]) return;
        let n = o.default.getChannels(e),
          i = n[(0, o.GUILD_SELECTABLE_CHANNELS_KEY)].map(e => e.channel.id),
          s =
            null === (t = u.default.getMember(e, d.default.getId())) ||
            void 0 === t
              ? void 0
              : t.joinedAt;
        if (null == s) return;
        _[e] = new Set();
        let l = new Date(s).getTime();
        0 !== i.length &&
          ((_[e] = new Set(
            i.filter(t => {
              let n = p.default.extractTimestamp(t);
              return (
                null == C.default.getTrackedAckMessageId(t) &&
                n > Date.now() - f.default.Millis.WEEK &&
                n > r.default.getGuildRecentsDismissedAt(e) &&
                n > l &&
                !g.default.isChannelOrParentOptedIn(e, t)
              );
            })
          )),
          (S[e] = Date.now()));
      }
      function m() {
        p.default.keys(_).forEach(e => {
          let t = _[e];
          _[e] = new Set(
            [...t].filter(t => !g.default.isChannelOrParentOptedIn(e, t))
          );
        });
      }
      class w extends i.default.Store {
        initialize() {
          this.waitFor(
            o.default,
            d.default,
            u.default,
            g.default,
            C.default,
            r.default
          ),
            this.syncWith([g.default], m);
        }
        getNewChannelIds(e) {
          var t;
          return (
            null != e && null == _[e] && y(e),
            null != e && null !== (t = _[e]) && void 0 !== t ? t : v
          );
        }
        shouldIndicateNewChannel(e, t) {
          var n;
          if (null == e) return !1;
          let i = c.default.getGuild(e);
          return (
            !!(null != i && i.hasFeature(I.GuildFeatures.COMMUNITY)) &&
            (null != e && null == _[e] && y(e),
            (null === (n = _[e]) || void 0 === n ? void 0 : n.has(t)) &&
              null == C.default.getTrackedAckMessageId(t))
          );
        }
      }
      w.displayName = "NewChannelsStore";
      var N = new w(s.default, {
        BULK_CLEAR_RECENTS: function (e) {
          let { guildId: t, channelIds: n } = e;
          if (null == _[t]) return !1;
          n.forEach(e => _[t].delete(e)), 0 === _[t].size && delete _[t];
        },
        CHANNEL_ACK: () => !0,
        CHANNEL_SELECT: function (e) {
          let { guildId: t, channelId: n } = e;
          if (null == t) return !1;
          let i = _[t];
          return null == i || S[t] < Date.now() - f.default.Millis.HOUR
            ? (y(t), !0)
            : (null != n && E(t, n), !1);
        },
        SIDEBAR_VIEW_CHANNEL: function (e) {
          let { guildId: t, channelId: n, sidebarType: i } = e;
          return null != t && i === a.SidebarType.VIEW_CHANNEL && (E(t, n), !1);
        },
        SIDEBAR_VIEW_GUILD: function (e) {
          let { guildId: t, baseChannelId: n } = e;
          return null != t && (E(t, n), !1);
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          delete _[t.id];
        },
        CHANNEL_CREATE: function (e) {
          var t;
          let { channel: n } = e;
          !n.isVocal() &&
            ((_[n.guild_id] =
              null !== (t = _[n.guild_id]) && void 0 !== t ? t : new Set()),
            _[n.guild_id].add(n.id));
        },
      });
    },
    816092: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      var i = n("446674"),
        s = n("913144"),
        l = n("299039"),
        a = n("42203");
      let r = {},
        d = r;
      function h() {
        l.default.keys(d).forEach(e => {
          null == a.default.getChannel(e) && delete d[e];
        });
      }
      class o extends i.default.PersistedStore {
        initialize(e) {
          this.waitFor(a.default), (d = null != e ? e : r);
        }
        getState() {
          return d;
        }
        getCollapsed() {
          return d;
        }
        isCollapsed(e) {
          return d[e] || !1;
        }
      }
      (o.displayName = "CollapsedVoiceChannelStore"),
        (o.persistKey = "collapsedChannels");
      var u = new o(s.default, {
        CONNECTION_OPEN: h,
        OVERLAY_INITIALIZE: h,
        CHANNEL_COLLAPSE: function (e) {
          let { channelId: t } = e;
          d[t] ? delete d[t] : (d[t] = !0), (d = { ...d });
        },
      });
    },
  },
]);
//# sourceMappingURL=d01de68ad482483f0202.js.map

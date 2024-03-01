(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6086"],
  {
    519705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        }),
        n("222007"),
        n("702976");
      var a = n("872717"),
        l = n("819855"),
        i = n("913144"),
        d = n("679428"),
        s = n("282109"),
        r = n("568734"),
        o = n("34676"),
        u = n("299039"),
        f = n("49111"),
        g = n("397336"),
        c = n("782340"),
        _ = {
          open(e) {
            i.default.dispatch({
              type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
              guildId: e,
            });
          },
          close() {
            i.default.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
          },
          updateGuildNotificationSettings(e, t, n, a) {
            let l = (0, o.getCurrentGuildSettings)(e);
            d.default.saveUserGuildSettings(e, t),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, o.trackGuildNotificationSettingsUpdate)(e, t, l, n, a);
          },
          updateGuildAndChannelNotificationSettings(e, t, n, a) {
            let l = u.default.keys(t.channel_overrides),
              s = (0, o.getCurrentGuildSettings)(e),
              r = (0, o.getManyCurrentChannelSettings)(e, l);
            d.default.saveUserGuildSettings(e, t),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                guildId: e,
                settings: t,
              }),
              (0, o.trackGuildNotificationSettingsUpdate)(e, t, s, n, a),
              u.default.keys(t.channel_overrides).forEach(l => {
                let i = r.get(l);
                (0, o.trackChannelNotificationSettingsUpdate)(
                  e,
                  l,
                  t.channel_overrides[l],
                  i,
                  n,
                  a
                );
              });
          },
          updateGuildNotificationSettingsBulk(e, t, n) {
            let a = u.default.keys(e),
              l = (0, o.getManyCurrentGuildSettings)(a);
            d.default.saveUserGuildSettingsBulk(e),
              u.default.entries(e).forEach(e => {
                let [a, d] = e,
                  s = l.get(a);
                i.default.dispatch({
                  type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                  guildId: a,
                  settings: d,
                }),
                  (0, o.trackGuildNotificationSettingsUpdate)(a, d, s, t, n);
              });
          },
          updateChannelOverrideSettings(e, t, n, a, s) {
            let r = (0, o.getCurrentChannelSettings)(e, t);
            d.default.saveUserGuildSettings(e, {
              channel_overrides: { [t]: n },
            }),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                guildId: e,
                channelId: t,
                settings: n,
              }),
              l.AccessibilityAnnouncer.announce(
                c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED
              ),
              (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, r, a, s);
          },
          updateChannelOverrideSettingsBulk(e, t, n, a) {
            let l = u.default.keys(t),
              s = (0, o.getManyCurrentChannelSettings)(e, l);
            d.default.saveUserGuildSettings(e, { channel_overrides: t }),
              i.default.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: t,
              }),
              u.default
                .keys(t)
                .forEach(l =>
                  (0, o.trackChannelNotificationSettingsUpdate)(
                    e,
                    l,
                    t[l],
                    s.get(l),
                    n,
                    a
                  )
                );
          },
          setForumThreadsCreated(e, t) {
            let n = t
                ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON
                : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
              a = t
                ? g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF
                : g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
              l = s.default.getChannelFlags(e);
            this.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { flags: (l & ~a) | n },
              o.NotificationLabel.forumThreadsCreated(t)
            );
          },
          async setAccountFlag(e, t) {
            let n = s.default.accountNotificationSettings.flags,
              l = (0, r.setFlag)(n, e, t);
            await a.default.patch({
              url: f.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
              body: { flags: l },
            }),
              await i.default.dispatch({
                type: "NOTIFICATION_SETTINGS_UPDATE",
                settings: { flags: l },
              });
          },
        };
    },
    412355: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateGuildSelfMember: function () {
            return r;
          },
        }),
        n("702976");
      var a = n("872717"),
        l = n("913144"),
        i = n("479756"),
        d = n("38654"),
        s = n("49111");
      function r(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (d.default.isFullServerPreview(e)) {
          (0, i.updateImpersonatedData)(e, { memberOptions: t });
          return;
        }
        return (
          l.default.dispatch({
            type: "GUILD_MEMBER_UPDATE_LOCAL",
            guildId: e,
            roles: t.roles,
            flags: t.flags,
          }),
          a.default.patch({
            url: s.Endpoints.SET_GUILD_MEMBER(e),
            body: t,
            oldFormErrors: !!n || void 0,
          })
        );
      }
    },
    921031: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n("834022"),
        n("222007"),
        n("702976");
      var a = n("917351"),
        l = n.n(a),
        i = n("872717"),
        d = n("913144"),
        s = n("267363"),
        r = n("716241"),
        o = n("412355"),
        u = n("479756"),
        f = n("38654"),
        g = n("629220"),
        c = n("42203"),
        _ = n("26989"),
        p = n("697218"),
        E = n("599110"),
        N = n("568734"),
        S = n("449008"),
        h = n("286235"),
        C = n("299039"),
        O = n("863636"),
        I = n("380710"),
        A = n("843323"),
        G = n("49111"),
        T = n("657944"),
        D = n("133335");
      function L(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (f.default.isFullServerPreview(e)) return;
        let n = t
            ? O.default.getOnboardingPromptsForOnboarding(e)
            : O.default.getOnboardingPrompts(e),
          a = O.default.getOnboardingResponses(e),
          l = n.map(e => e.options.filter(e => a.includes(e.id))).flat(),
          s = {},
          r = {};
        return (n.forEach(e => {
          (s[e.id] = Date.now()),
            e.options.forEach(e => (r[e.id] = Date.now()));
        }),
        t)
          ? i.default
              .post({
                url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                body: {
                  onboarding_responses: l.map(e => e.id),
                  onboarding_prompts_seen: s,
                  onboarding_responses_seen: r,
                },
              })
              .then(t => {
                null != t.body &&
                  d.default.dispatch({
                    type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                    guildId: e,
                    options: t.body.onboarding_responses,
                    prompts_seen: t.body.onboarding_prompts_seen,
                    options_seen: t.body.onboarding_responses_seen,
                  });
              })
              .catch(e => h.default.captureException(e))
          : i.default
              .put({
                url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                body: {
                  onboarding_responses: l.map(e => e.id),
                  onboarding_prompts_seen: s,
                  onboarding_responses_seen: r,
                },
              })
              .then(t => {
                null != t.body &&
                  d.default.dispatch({
                    type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                    guildId: e,
                    options: t.body.onboarding_responses,
                    prompts_seen: t.body.onboarding_prompts_seen,
                    options_seen: t.body.onboarding_responses_seen,
                  });
              })
              .catch(e => h.default.captureException(e));
      }
      var U = {
        selectOption(e, t, n, a) {
          let i = O.default.getOnboardingPrompt(t);
          if (null == i) return;
          let s = i.singleSelect ? l.without(l.map(i.options, "id"), n) : [];
          d.default.dispatch({
            type: "GUILD_ONBOARDING_SELECT_OPTION",
            guildId: e,
            promptId: t,
            optionId: n,
            selected: a,
            removedOptionIds: s,
          });
        },
        updateOnboardingResponses: l.debounce(L, 1e3),
        updateRolesLocal: function (e, t, n) {
          var a, i;
          let s =
            null !==
              (i =
                null === (a = _.default.getSelfMember(e)) || void 0 === a
                  ? void 0
                  : a.roles) && void 0 !== i
              ? i
              : [];
          if (f.default.isViewingRoles(e)) {
            (0, u.updateImpersonatedRoles)(e, l.difference(l.union(s, t), n));
            return;
          }
          (t.length > 0 || n.length > 0) &&
            d.default.dispatch({
              type: "GUILD_MEMBER_UPDATE_LOCAL",
              guildId: e,
              roles: l.difference(l.union(s, t), n),
              addedRoleIds: t,
              removedRoleIds: n,
            });
        },
        completeOnboarding(e, t) {
          let n = t.length > 0 ? t[t.length - 1] : null,
            a = O.default.getSelectedOptions(e),
            l = (0, I.getSelectedRoleIds)(a),
            i = (0, I.getSelectedChannelIds)(a),
            d = O.default.getEnabled(e)
              ? O.default.getDefaultChannelIds(e)
              : [],
            [o, g] = (0, I.getChannelCoverageForOnboarding)(e, t, d),
            h = [...i, ...d],
            U = h.map(e => c.default.getChannel(e)).filter(S.isNotNullish),
            v = (0, A.getFlattenedChannels)(e, new Set(h), U, !0).length,
            b = null == n ? [] : n.options.map(e => e.id);
          if (
            (E.default.track(G.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
              ...(0, r.collectGuildAnalyticsMetadata)(e),
              step: t.length - 1,
              options_selected:
                null == n ? 0 : a.filter(e => b.includes(e.id)).length,
              skipped: b.length > 0,
              back: !1,
              in_onboarding: !0,
              is_final_step: !0,
              roles_granted: l.size,
              channels_granted: v,
              guild_onboarding_covered_channel_ids: o.map(e => e.id),
              guild_onboarding_uncovered_channel_ids: g.map(e => e.id),
            }),
            (0, s.ackGuildFeature)(
              e,
              D.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
              C.default.fromTimestamp(Date.now())
            ),
            L(e, !0),
            f.default.isFullServerPreview(e))
          ) {
            (0, u.updateImpersonatedChannels)(e, h, []),
              (0, u.updateImpersonatedData)(e, { optInEnabled: !0 }),
              (0, u.updateImpersonatedRoles)(e, Array.from(l));
            let t = p.default.getCurrentUser();
            if (null != t) {
              var F, y;
              let n =
                null !==
                  (y =
                    null === (F = _.default.getMember(e, t.id)) || void 0 === F
                      ? void 0
                      : F.flags) && void 0 !== y
                  ? y
                  : 0;
              (0, u.updateImpersonatedData)(e, {
                memberOptions: {
                  flags: (0, N.setFlag)(
                    n,
                    T.GuildMemberFlags.COMPLETED_ONBOARDING,
                    !0
                  ),
                },
              });
            }
          }
        },
        onboardExistingMember(e, t) {
          let n = new Set(t),
            a = O.default.getEnabled(e)
              ? O.default.getDefaultChannelIds(e)
              : [];
          a.forEach(e => n.add(e)),
            n.size > 0 &&
              (0, g.bulkOptInChannels)(e, Array.from(n), !0, {
                page: G.AnalyticsPages.GUILD_ONBOARDING,
              });
        },
        finishOnboarding(e) {
          d.default.dispatch({ type: "GUILD_ONBOARDING_COMPLETE", guildId: e });
        },
        setUserOnboardingStep(e, t) {
          d.default.dispatch({
            type: "GUILD_ONBOARDING_SET_STEP",
            guildId: e,
            step: t,
          });
        },
        async resetOnboarding(e) {
          let t = p.default.getCurrentUser();
          if (null != t) {
            var n, a;
            let l =
              null !==
                (a =
                  null === (n = _.default.getMember(e, t.id)) || void 0 === n
                    ? void 0
                    : n.flags) && void 0 !== a
                ? a
                : 0;
            await (0, o.updateGuildSelfMember)(e, {
              flags: (0, N.setFlag)(
                l,
                T.GuildMemberFlags.COMPLETED_ONBOARDING,
                !1
              ),
            });
          }
        },
      };
    },
    937692: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          discardOnboardingPromise: function () {
            return p;
          },
          default: function () {
            return E;
          },
          openAndWaitForOnboarding: function () {
            return N;
          },
          isOnboardingActiveForGuild: function () {
            return S;
          },
        });
      var a = n("627445"),
        l = n.n(a),
        i = n("77078"),
        d = n("851387"),
        s = n("393414"),
        r = n("921031"),
        o = n("685829"),
        u = n("471706"),
        f = n("843035"),
        g = n("49111"),
        c = n("724210");
      let _ = {};
      function p(e) {
        _[e] = null;
      }
      async function E(e) {
        let { guildId: t, returnChannelId: n, isPreview: a = !1 } = e;
        (0, i.closeAllModals)(),
          l(null == _[t], "should not double-join guilds");
        let r = await (0, d.waitForGuild)(t);
        if (r.hasFeature(g.GuildFeatures.COMMUNITY)) {
          if (a) (0, o.startOnboarding)(t);
          else {
            if (!r.hasFeature(g.GuildFeatures.GUILD_ONBOARDING)) return;
            await (0, o.maybeFetchOnboardingPrompts)(t);
          }
          u.default.shouldShowOnboarding(t) &&
            (await N(t),
            null != n && (0, s.transitionTo)(g.Routes.CHANNEL(t, n)));
        }
      }
      function N(e) {
        return new Promise(t => {
          (_[e] = t),
            (0, f.waitForOnboardingCompletion)(e).then(() => {
              var t, n;
              null === (n = _[(t = e)]) || void 0 === n || n.call(_),
                (_[t] = null),
                r.default.finishOnboarding(e);
            }),
            (0, s.transitionTo)(
              g.Routes.CHANNEL(e, c.StaticChannelRoute.GUILD_ONBOARDING)
            );
        });
      }
      function S(e) {
        return null != _[e];
      }
    },
    843035: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          waitForOnboardingCompletion: function () {
            return s;
          },
        }),
        n("702976");
      var a = n("26989"),
        l = n("568734"),
        i = n("921031"),
        d = n("657944");
      function s(e) {
        return new Promise(t => {
          a.default.addConditionalChangeListener(() => {
            var n;
            let s = a.default.getSelfMember(e);
            return (
              !(0, l.hasFlag)(
                null !== (n = null == s ? void 0 : s.flags) && void 0 !== n
                  ? n
                  : 0,
                d.GuildMemberFlags.COMPLETED_ONBOARDING
              ) || (i.default.finishOnboarding(e), t(), !1)
            );
          });
        });
      }
    },
    843323: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getFlattenedChannels: function () {
            return r;
          },
          useFlattenedChannels: function () {
            return o;
          },
        }),
        n("222007"),
        n("424973");
      var a = n("917351"),
        l = n.n(a),
        i = n("446674"),
        d = n("42203"),
        s = n("449008");
      function r(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = l(d.default.getMutableGuildChannelsForGuild(e))
            .values()
            .groupBy("parent_id")
            .value(),
          r = l(n)
            .map(e => (e.isCategory() ? e.id : e.parent_id))
            .filter(s.isNotNullish)
            .uniq()
            .map(e => d.default.getChannel(e))
            .filter(s.isNotNullish)
            .sortBy("position")
            .value(),
          o = new Set(r.map(e => e.id)),
          u = n.filter(
            e => !e.isCategory() && (null == e.parent_id || !o.has(e.parent_id))
          );
        for (let e of ((u = l.sortBy(u, e =>
          e.isGuildVocal() ? e.position + 1e4 : e.position
        )),
        r)) {
          !a && u.push(e);
          let d = t.has(e.id) ? i[e.id] : n.filter(t => t.parent_id === e.id);
          (d = l.sortBy(null != d ? d : [], e =>
            e.isGuildVocal() ? e.position + 1e4 : e.position
          )),
            u.push(...d);
        }
        return u;
      }
      function o(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = (0, i.useStateFromStoresArray)([d.default], () => {
            let a = Array.from(t)
              .map(e => d.default.getChannel(e))
              .filter(s.isNotNullish);
            return r(e, t, a, n);
          });
        return a;
      }
    },
    629220: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setOptInChannel: function () {
            return h;
          },
          updateOptInChannelsImmediate: function () {
            return C;
          },
          updateOptInChannelsBatched: function () {
            return I;
          },
          bulkOptInChannels: function () {
            return A;
          },
          setGuildOptIn: function () {
            return G;
          },
          setIsFavorite: function () {
            return T;
          },
          dimissFavoriteSuggestion: function () {
            return L;
          },
        }),
        n("222007");
      var a = n("917351"),
        l = n("151426"),
        i = n("913144"),
        d = n("519705"),
        s = n("716241"),
        r = n("479756"),
        o = n("38654"),
        u = n("679428"),
        f = n("872173"),
        g = n("42203"),
        c = n("282109"),
        _ = n("599110"),
        p = n("568734"),
        E = n("34676"),
        N = n("49111"),
        S = n("397336");
      function h(e, t, n, a) {
        if (null == e) return;
        if (o.default.isFullServerPreview(e)) {
          (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]);
          return;
        }
        let l = c.default.getChannelIdFlags(e, t);
        !n &&
          (l = (0, p.setFlag)(
            l,
            S.ChannelNotificationSettingsFlags.FAVORITED,
            !1
          ));
        let d = (0, E.getCurrentChannelSettings)(e, t),
          f = {
            flags: (0, p.setFlag)(
              l,
              S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
              n
            ),
          };
        u.default.saveUserGuildSettingsBulk({
          [e]: { channel_overrides: { [t]: f } },
        }),
          i.default.dispatch({
            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
            guildId: e,
            channelId: t,
            settings: f,
          }),
          (0, E.trackChannelNotificationSettingsUpdate)(
            e,
            t,
            f,
            d,
            E.NotificationLabel.optedIn(n),
            a
          ),
          D(e),
          _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: a,
          });
      }
      function C(e, t, n, a) {
        if (null == e) return;
        if (o.default.isFullServerPreview(e)) {
          (0, r.updateImpersonatedChannels)(e, n ? [t] : [], n ? [] : [t]),
            (0, r.updateImpersonatedData)(e, { optInEnabled: !0 });
          return;
        }
        let l = c.default.getChannelIdFlags(e, t);
        !n &&
          (l = (0, p.setFlag)(
            l,
            S.ChannelNotificationSettingsFlags.FAVORITED,
            !1
          ));
        let d = (0, E.getCurrentChannelSettings)(e, t),
          f = {
            flags: (0, p.setFlag)(
              l,
              S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
              n
            ),
          };
        if (!c.default.isOptInEnabled(e)) {
          let n = (0, p.setFlag)(
            c.default.getGuildFlags(e),
            S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON,
            !0
          );
          u.default.saveUserGuildSettingsBulk({
            [e]: { channel_overrides: { [t]: f }, flags: n },
          });
        }
        i.default.dispatch({
          type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
          guildId: e,
          channelId: t,
          settings: f,
        }),
          (0, E.trackChannelNotificationSettingsUpdate)(
            e,
            t,
            f,
            d,
            E.NotificationLabel.optedIn(n),
            a
          ),
          D(e),
          _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            ...(0, s.collectChannelAnalyticsMetadata)(g.default.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: a,
          });
      }
      async function O(e, t) {
        if (!(null == e || o.default.isFullServerPreview(e)))
          await u.default.saveUserGuildSettingsBulk({
            [e]: { channel_overrides: t },
          }),
            i.default.dispatch({
              type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
              guildId: e,
              updates: t,
            });
      }
      let I = (0, a.debounce)((e, t) => O(e, t), 1e3);
      function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = arguments.length > 3 ? arguments[3] : void 0;
        if (null == e) return;
        if (o.default.isFullServerPreview(e)) {
          (0, r.updateImpersonatedChannels)(e, t, []),
            n && (0, r.updateImpersonatedData)(e, { optInEnabled: !0 });
          return;
        }
        let l = {};
        if (
          (t.forEach(t => {
            let n = c.default.getChannelIdFlags(e, t);
            l[t] = {
              flags: (0, p.setFlag)(
                n,
                S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
                !0
              ),
            };
          }),
          n)
        ) {
          let t = (0, p.setFlag)(
            c.default.getGuildFlags(e),
            S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON,
            !0
          );
          d.default.updateGuildAndChannelNotificationSettings(
            e,
            { flags: t, channel_overrides: l },
            E.NotificationLabels.OptedIn
          ),
            _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
              ...(0, s.collectGuildAnalyticsMetadata)(e),
              action_type: "add_many_and_enable_guild",
              location: a,
            });
        } else
          d.default.updateChannelOverrideSettingsBulk(
            e,
            l,
            E.NotificationLabels.OptedIn
          ),
            _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
              ...(0, s.collectGuildAnalyticsMetadata)(e),
              action_type: "add_many",
              location: a,
            });
      }
      function G(e, t, n) {
        if (o.default.isFullServerPreview(e)) {
          (0, r.updateImpersonatedData)(e, { optInEnabled: t });
          return;
        }
        let a = c.default.getGuildFlags(e);
        d.default.updateGuildNotificationSettings(
          e,
          {
            flags: (0, p.setFlag)(
              a,
              S.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON,
              t
            ),
          },
          E.NotificationLabel.optedIn(t)
        ),
          _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n,
          });
      }
      function T(e, t, n, a) {
        if (null == e || o.default.isFullServerPreview(e)) return;
        let l = c.default.getChannelIdFlags(e, t);
        !(0, p.hasFlag)(l, S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) &&
          n &&
          (l = (0, p.setFlag)(
            l,
            S.ChannelNotificationSettingsFlags.OPT_IN_ENABLED,
            !0
          )),
          d.default.updateChannelOverrideSettings(
            e,
            t,
            {
              flags: (0, p.setFlag)(
                l,
                S.ChannelNotificationSettingsFlags.FAVORITED,
                n
              ),
            },
            E.NotificationLabel.favorited(n)
          ),
          _.default.track(N.AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: a,
          });
      }
      function D(e) {
        (0, f.updateUserGuildSettings)(
          e,
          e =>
            (!(0, p.hasFlag)(
              e.guildOnboardingProgress,
              l.GuildOnboardingProgress.GUILD_NOTICE_CLEARED
            ) ||
              !!(0, p.hasFlag)(
                e.guildOnboardingProgress,
                l.GuildOnboardingProgress.GUILD_NOTICE_SHOWN
              )) &&
            ((e.guildOnboardingProgress = (0, p.addFlag)(
              e.guildOnboardingProgress,
              l.GuildOnboardingProgress.GUILD_NOTICE_CLEARED
            )),
            (e.guildOnboardingProgress = (0, p.setFlag)(
              e.guildOnboardingProgress,
              l.GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
              !1
            )),
            !0),
          f.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
      function L(e, t) {
        i.default.dispatch({
          type: "DISMISS_FAVORITE_SUGGESTION",
          guildId: e,
          channelId: t,
        });
      }
    },
    679428: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n("222007");
      var a = n("872717"),
        l = n("689988"),
        i = n("870691"),
        d = n("42203"),
        s = n("718517"),
        r = n("49111");
      let o = {},
        u = 0,
        f = 15 * s.default.Millis.SECOND;
      function g() {
        o = { ...i.default.getCollapsedCategories() };
      }
      function c() {
        !__OVERLAY__ && (clearTimeout(u), (u = setTimeout(() => p({}), f)));
      }
      async function _(e, t) {
        null == e || e === r.ME
          ? await a.default.patch({
              url: r.Endpoints.USER_GUILD_SETTINGS(r.ME),
              body: t,
            })
          : await p(null != t ? { [null != e ? e : r.ME]: t } : {});
      }
      async function p(e) {
        clearTimeout(u);
        let t = 0 !== Object.keys(e).length,
          n = i.default.getCollapsedCategories(),
          l = (function () {
            let e = {},
              t = i.default.getCollapsedCategories();
            for (let n in t) t[n] !== o[n] && (e[n] = !0);
            for (let n in o) t[n] !== o[n] && (e[n] = !0);
            return e;
          })();
        for (let a in l) {
          let l = d.default.getChannel(a);
          null != l &&
            null != l.guild_id &&
            (!(l.guild_id in e) && (e[l.guild_id] = {}),
            null == e[l.guild_id].channel_overrides &&
              (e[l.guild_id].channel_overrides = {}),
            (e[l.guild_id].channel_overrides[l.id] = {
              ...e[l.guild_id].channel_overrides[l.id],
              collapsed: l.id in n,
            }),
            (t = !0));
        }
        return t
          ? ((o = { ...n }),
            delete e[r.FAVORITES],
            (
              await a.default.patch({
                url: r.Endpoints.USER_GUILD_SETTINGS_BULK,
                body: { guilds: e },
              })
            ).body)
          : [];
      }
      function E() {
        o = { ...i.default.getCollapsedCategories() };
      }
      class N extends l.default {
        constructor(...e) {
          super(...e),
            (this.actions = {
              CATEGORY_COLLAPSE: c,
              CATEGORY_EXPAND: c,
              CATEGORY_COLLAPSE_ALL: c,
              CATEGORY_EXPAND_ALL: c,
              POST_CONNECTION_OPEN: g,
              USER_GUILD_SETTINGS_FULL_UPDATE: E,
            }),
            (this.saveUserGuildSettings = _),
            (this.saveUserGuildSettingsBulk = p);
        }
      }
      var S = new N();
    },
    870691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007");
      var a = n("446674"),
        l = n("913144"),
        i = n("449008"),
        d = n("42203"),
        s = n("341542"),
        r = n("923959"),
        o = n("49111");
      let u = {},
        f = 0;
      function g() {
        f += 1;
      }
      function c(e) {
        if (null == u[e]) return !1;
        delete u[e];
      }
      class _ extends a.default.PersistedStore {
        initialize(e) {
          this.waitFor(d.default, s.default),
            this.removeChangeListener(g),
            this.addChangeListener(g),
            (u = null != e ? e : {});
        }
        getState() {
          return u;
        }
        isCollapsed(e) {
          return null != e && "null" !== e && !!u[e] && u[e];
        }
        getCollapsedCategories() {
          return u;
        }
        get version() {
          return f;
        }
      }
      (_.displayName = "CategoryCollapseStore"),
        (_.persistKey = "collapsedCategories");
      var p = new _(l.default, {
        CONNECTION_OPEN: function (e) {
          for (let t of (!e.userGuildSettings.partial && (u = {}),
          e.userGuildSettings.entries))
            if (null != t.channel_overrides)
              for (let e of t.channel_overrides)
                e.collapsed ? (u[e.channel_id] = !0) : delete u[e.channel_id];
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e,
            n = new Set(t.map(e => e.guild_id).filter(i.isNotNullish));
          for (let e in u) {
            let t = d.default.getChannel(e);
            null != t &&
              null != t.guild_id &&
              n.has(t.guild_id) &&
              delete u[t.id];
          }
          for (let e of t)
            for (let t of e.channel_overrides)
              t.collapsed && (u[t.channel_id] = !0);
        },
        CATEGORY_COLLAPSE: function (e) {
          let { id: t } = e;
          if (u[t]) return !1;
          u[t] = !0;
        },
        CATEGORY_EXPAND: function (e) {
          let { id: t } = e;
          return c(t);
        },
        CATEGORY_COLLAPSE_ALL: function (e) {
          let { guildId: t } = e;
          r.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            "null" !== t.id && (u[t.id] = !0);
          });
        },
        CATEGORY_EXPAND_ALL: function (e) {
          let { guildId: t } = e;
          r.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            delete u[t.id];
          });
        },
        CHANNEL_DELETE: function (e) {
          let {
            channel: { id: t },
          } = e;
          return c(t);
        },
      });
    },
  },
]);
//# sourceMappingURL=6086.57eee01cfa97489d9289.js.map
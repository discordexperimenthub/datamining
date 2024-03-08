(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77951"],
  {
    287850: function (e, t, u) {
      "use strict";
      let n, s, a;
      u.r(t),
        u.d(t, {
          default: function () {
            return v;
          },
        }),
        u("222007"),
        u("424973");
      var l,
        I,
        r = u("866227"),
        i = u.n(r),
        E = u("446674"),
        _ = u("407846"),
        T = u("913144"),
        f = u("21121"),
        O = u("934306"),
        N = u("288518"),
        d = u("486503"),
        S = u("233069"),
        o = u("42203"),
        M = u("305961"),
        g = u("660478"),
        P = u("282109"),
        A = u("697218"),
        U = u("299039"),
        c = u("724210");
      ((I = l || (l = {})).DEFAULT = "DEFAULT"), (I.FAVORITE = "FAVORITE");
      let m = new _.default(
        e => {
          let { isRequest: t, isFavorite: u } = e;
          return t ? [] : [u ? "FAVORITE" : "DEFAULT"];
        },
        e => {
          let { lastMessageId: t } = e;
          return -t;
        }
      );
      function R(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, u;
                let n =
                    null !==
                      (u =
                        null !== (t = g.default.lastMessageId(e.id)) &&
                        void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== u
                      ? u
                      : e.id,
                  s = e.isMessageRequestTimestamp;
                if (null != s) {
                  let e = i(s).valueOf(),
                    t = U.default.fromTimestamp(e);
                  return U.default.compare(n, t) > 0 ? n : t;
                }
                return n;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite:
            P.default.isMessagesFavorite(e.id) &&
            (0, f.isInMainTabsExperiment)(),
          isRequest: N.default.isMessageRequest(e.id) || d.default.isSpam(e.id),
        };
      }
      function D() {
        m.clear(),
          Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
            m.set(e.id, R(e));
          }),
          (0, f.isInMainTabsExperiment)() &&
            (0, O.isSplitMessagesTab)() &&
            P.default.getAddedToMessages().forEach(e => {
              let t = o.default.getChannel(e);
              null != t &&
                (0, S.isGuildTextChannelType)(t.type) &&
                m.set(t.id, R(t));
            });
      }
      function V() {
        let e = o.default.getMutablePrivateChannels();
        for (let t in e) m.set(t, R(e[t]));
      }
      let h =
        ((n = []),
        (s = []),
        (a = []),
        () => {
          let e = m.values("FAVORITE"),
            t = m.values("DEFAULT");
          return (
            (n !== e || s !== t) &&
              ((a = []),
              e.forEach(e => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (n = e),
              t.forEach(e => {
                let { channelId: t } = e;
                return a.push(t);
              }),
              (s = t)),
            a
          );
        });
      class p extends E.default.Store {
        initialize() {
          this.waitFor(o.default, M.default, A.default, N.default, P.default),
            this.syncWith([P.default, N.default], D);
        }
        getPrivateChannelIds() {
          return h();
        }
        getSortedChannels() {
          return [m.values("FAVORITE"), m.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            m.values().forEach(t => {
              let { channelId: u, lastMessageId: n } = t;
              e[u] = n;
            }),
            e
          );
        }
      }
      p.displayName = "PrivateChannelSortStore";
      var v = new p(T.default, {
        CONNECTION_OPEN: D,
        CONNECTION_OPEN_SUPPLEMENTAL: D,
        OVERLAY_INITIALIZE: D,
        CACHE_LOADED: V,
        CACHE_LOADED_LAZY: V,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          t.forEach(e => {
            ((0, S.isPrivate)(e.type) || m.has(e.id)) && m.set(e.id, R(e));
          });
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          if (
            !(0, S.isPrivate)(t.type) ||
            t.id === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
          )
            return !1;
          m.set(t.id, R(t));
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          return m.delete(t.id);
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: u } = e;
          if (!m.has(t)) return !1;
          let n = o.default.getChannel(t);
          return null != n && m.set(t, R(n, u.id));
        },
        GUILD_CREATE: function (e) {
          let t = e.guild.id;
          return m.delete(t);
        },
        LOGOUT: function () {
          m.clear();
        },
      });
    },
    354023: function (e, t, u) {
      "use strict";
      let n;
      u.r(t),
        u.d(t, {
          RowTypes: function () {
            return s;
          },
          generateRowsForQuery: function () {
            return R;
          },
          getMostRecentDMedUser: function () {
            return D;
          },
          getUsersAlreadyJoined: function () {
            return V;
          },
          maxAgeString: function () {
            return v;
          },
          default: function () {
            return C;
          },
        }),
        u("424973"),
        u("222007");
      var s,
        a,
        l = u("191225"),
        I = u("42203"),
        r = u("26989"),
        i = u("660478"),
        E = u("27618"),
        _ = u("697218"),
        T = u("287850"),
        f = u("25292"),
        O = u("49111"),
        N = u("91366"),
        d = u("782340");
      (n = u("591205")),
        ((a = s || (s = {})).GROUP_DM = "GROUP_DM"),
        (a.DM = "DM"),
        (a.FRIEND = "FRIEND"),
        (a.CHANNEL = "CHANNEL");
      let S = (e, t) => null != e && r.default.isMember(e, t),
        o = e => {
          let {
            omitUserIds: t,
            suggestedUserIds: u,
            maxRowsWithoutQuery: n,
            omitGuildId: s,
            shownUserIds: a,
            rows: l,
            counts: I,
          } = e;
          if (null != u)
            for (let e of u) {
              if (null != n && n > 0 && l.length >= n) break;
              if (t.has(e) || a.has(e)) continue;
              let u = _.default.getUser(e);
              !(null == u || S(s, u.id)) &&
                (a.add(u.id),
                l.push({ type: "FRIEND", item: u, isSuggested: !0 }),
                I.numFriends++);
            }
        },
        M = e => {
          let {
            suggestedChannelIds: t,
            maxRowsWithoutQuery: u,
            rows: n,
            counts: s,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != u && u > 0 && n.length >= u) break;
              let t = I.default.getChannel(e);
              null != t &&
                (n.push({ type: "CHANNEL", item: t, isSuggested: !0 }),
                s.numChannels++);
            }
        },
        g = e => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: u,
              omitGuildId: n,
              shownUserIds: s,
              rows: a,
              counts: l,
              includeGroupDms: r,
              limit: E,
            } = e,
            f = 0;
          for (let e of T.default.getPrivateChannelIds()) {
            if ((null != u && u > 0 && a.length >= u) || (null != E && f >= E))
              break;
            let T = I.default.getChannel(e);
            if (null == T || !T.isPrivate()) continue;
            if (r && T.type === O.ChannelTypes.GROUP_DM) {
              a.push({ type: "GROUP_DM", item: T, isSuggested: !1 }),
                l.numGroupDms++,
                f++;
              continue;
            }
            let N = i.default.lastMessageId(T.id);
            if (null == N) continue;
            let d = T.getRecipientId();
            if (null != d && !t.has(d) && !s.has(d)) {
              let e = _.default.getUser(d);
              if (null == e || e.bot || S(n, e.id)) continue;
              s.add(e.id),
                a.push({ type: "DM", item: e, isSuggested: !1 }),
                l.numDms++,
                f++;
            }
          }
        },
        P = e => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: u,
            omitGuildId: n,
            shownUserIds: s,
            rows: a,
            counts: l,
          } = e;
          for (let e of E.default.getFriendIDs()) {
            if (null != u && u > 0 && a.length >= u) break;
            if (t.has(e) || s.has(e)) continue;
            let I = _.default.getUser(e);
            !(null == I || S(n, I.id)) &&
              (a.push({ type: "FRIEND", item: I, isSuggested: !1 }),
              l.numFriends++);
          }
        },
        A = e => {
          let { query: t, rows: u, counts: n, inviteTargetType: s } = e;
          s === N.InviteTargetTypes.EMBEDDED_APPLICATION &&
            f.default
              .queryChannels({ query: t, limit: 3, guildId: void 0 })
              .forEach(e => {
                let { record: t } = e;
                u.push({ type: "CHANNEL", item: t, isSuggested: !1 }),
                  n.numChannels++;
              });
        },
        U = e => {
          let {
            query: t,
            omitUserIds: u,
            shownUserIds: n,
            rows: s,
            counts: a,
          } = e;
          f.default.queryDMUsers({ query: t, limit: 50 }).forEach(e => {
            let { record: t } = e;
            if (u.has(t.id)) return;
            let l = I.default.getDMFromUserId(t.id);
            if (null == l) return;
            let r = i.default.lastMessageId(l);
            null != r &&
              (n.add(t.id),
              s.push({ type: "DM", item: t, isSuggested: !1 }),
              a.numDms++);
          });
        },
        c = e => {
          let { query: t, rows: u, counts: n } = e;
          f.default
            .queryGroupDMs({ query: t, limit: 50, fuzzy: !1 })
            .forEach(e => {
              let { record: t } = e;
              u.push({ type: "GROUP_DM", item: t, isSuggested: !1 }),
                n.numGroupDms++;
            });
        },
        m = e => {
          let {
            query: t,
            rows: u,
            counts: n,
            omitUserIds: s,
            shownUserIds: a,
          } = e;
          f.default
            .queryFriends({ query: t, limit: 500, _fuzzy: !1 })
            .forEach(e => {
              let { record: t } = e;
              !(s.has(t.id) || a.has(t.id)) &&
                (a.add(t.id),
                u.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                n.numFriends++);
            });
        };
      function R(e) {
        let {
            query: t,
            inviteTargetType: u,
            omitUserIds: n,
            suggestedUserIds: s,
            suggestedChannelIds: a,
            maxRowsWithoutQuery: l,
            omitGuildId: I,
          } = e,
          r = new Set(),
          i = [],
          E = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === t) {
          let e = {
            omitUserIds: n,
            maxRowsWithoutQuery: l,
            omitGuildId: I,
            shownUserIds: r,
            rows: i,
            counts: E,
          };
          u === N.InviteTargetTypes.EMBEDDED_APPLICATION &&
            (g({ ...e, includeGroupDms: !1, limit: 1 }),
            M({ ...e, suggestedChannelIds: a })),
            o({ ...e, suggestedUserIds: s }),
            g({ ...e, includeGroupDms: !0 }),
            P(e);
        } else {
          let e = { query: t, rows: i, counts: E };
          u === N.InviteTargetTypes.EMBEDDED_APPLICATION &&
            A({ ...e, inviteTargetType: u }),
            U({ ...e, omitUserIds: n, shownUserIds: r }),
            c(e),
            m({ ...e, omitUserIds: n, shownUserIds: r });
        }
        return { rows: i, counts: E };
      }
      function D(e, t) {
        for (let u of T.default.getPrivateChannelIds()) {
          let n = I.default.getChannel(u);
          if (null == n || !n.isDM() || null == i.default.lastMessageId(n.id))
            continue;
          let s = n.getRecipientId();
          if (null != s && !e.has(s)) {
            let e = _.default.getUser(s);
            if (null == e || e.bot || S(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function V(e) {
        let { channel: t, inviteTargetType: u, applicationId: n } = e;
        if (u === N.InviteTargetTypes.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of l.default.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === n) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let h = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        p = {
          [n.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: h.MINUTES },
          [n.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: h.HOURS },
          [n.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: h.HOURS },
          [n.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: h.HOURS },
          [n.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: h.DAYS },
          [n.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: h.DAYS },
          [n.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: h.NEVER },
        };
      function v(e, t) {
        let u = parseInt(t, 10),
          n = 0 === u,
          s = p[e].value,
          a = p[e].type;
        switch (a) {
          case h.MINUTES:
            if (n) return d.default.Messages.INVITE_EXPIRES_MINUTES;
            return d.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
              numUses: u,
            });
          case h.HOURS:
            if (n)
              return d.default.Messages.INVITE_EXPIRES_HOURS.format({
                numHours: s,
              });
            return d.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
              numHours: s,
              numUses: u,
            });
          case h.DAYS:
            if (n)
              return d.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                numDays: s,
              });
            return d.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format(
              { numDays: s, numUses: u }
            );
          case h.NEVER:
            if (n) return d.default.Messages.INVITE_EXPIRES_NEVER;
            return d.default.Messages.INVITE_EXPIRES_USES.format({
              numUses: u,
            });
          default:
            return "";
        }
      }
      var C = {
        getMaxAgeOptions: n.MAX_AGE_OPTIONS,
        getMaxUsesOptions: n.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES,
      };
    },
    591205: function (e, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          INVITE_OPTIONS_UNLIMITED: function () {
            return a;
          },
          INVITE_OPTIONS_ONCE: function () {
            return l;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return r;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return i;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return E;
          },
          INVITE_OPTIONS_100_TIMES: function () {
            return _;
          },
          MAX_USES_OPTIONS: function () {
            return T;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return f;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return O;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return N;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return d;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return S;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return o;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return M;
          },
          MAX_AGE_OPTIONS: function () {
            return g;
          },
        });
      var n = u("782340");
      function s(e, t) {
        return {
          value: e,
          get label() {
            return t();
          },
        };
      }
      let a = s(0, () => n.default.Messages.MAX_USES.format({ maxUses: 0 })),
        l = s(1, () => n.default.Messages.MAX_USES.format({ maxUses: 1 })),
        I = s(5, () => n.default.Messages.MAX_USES.format({ maxUses: 5 })),
        r = s(10, () => n.default.Messages.MAX_USES.format({ maxUses: 10 })),
        i = s(25, () => n.default.Messages.MAX_USES.format({ maxUses: 25 })),
        E = s(50, () => n.default.Messages.MAX_USES.format({ maxUses: 50 })),
        _ = s(100, () => n.default.Messages.MAX_USES.format({ maxUses: 100 })),
        T = [a, l, I, r, i, E, _],
        f = s(1800, () =>
          n.default.Messages.DURATION_MINUTES.format({ minutes: 30 })
        ),
        O = s(3600, () =>
          n.default.Messages.DURATION_HOURS.format({ hours: 1 })
        ),
        N = s(21600, () =>
          n.default.Messages.DURATION_HOURS.format({ hours: 6 })
        ),
        d = s(43200, () =>
          n.default.Messages.DURATION_HOURS.format({ hours: 12 })
        ),
        S = s(86400, () =>
          n.default.Messages.DURATION_DAYS.format({ days: 1 })
        ),
        o = s(604800, () =>
          n.default.Messages.DURATION_DAYS.format({ days: 7 })
        ),
        M = s(0, () => n.default.Messages.MAX_AGE_NEVER),
        g = [f, O, N, d, S, o, M];
    },
  },
]);
//# sourceMappingURL=f8ca92ef6a53cb72b35e.js.map

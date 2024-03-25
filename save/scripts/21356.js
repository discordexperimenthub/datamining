(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21356"],
  {
    445356: function (e, t, a) {
      "use strict";
      e.exports = a.p + "c8718df1382ba878f1fc.svg";
    },
    460287: function (e, t, a) {
      "use strict";
      e.exports = a.p + "08e581a604e6635d1424.svg";
    },
    844153: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          BROADCASTING_GUILDS_MAX_MEMBER_COUNT: function () {
            return l;
          },
          BROADCASTING_MAX_ALLOWED_GUILD_IDS: function () {
            return n;
          },
          BROADCASTING_MAX_ALLOWED_USER_IDS: function () {
            return r;
          },
        });
      let l = 200,
        n = 10,
        r = 10;
    },
    194051: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return D;
          },
        }),
        a("222007");
      var l,
        n,
        r = a("917351"),
        s = a("446674"),
        i = a("407846"),
        d = a("913144"),
        o = a("766274"),
        u = a("271938"),
        c = a("299039"),
        S = a("9759"),
        f = a("837374");
      ((n = l || (l = {}))[(n.INVALID = 0)] = "INVALID"),
        (n[(n.VALID_USER_ONLY = 1)] = "VALID_USER_ONLY"),
        (n[(n.VALID = 2)] = "VALID");
      let A = new Set(),
        T = new Set(),
        _ = new Set(),
        E = [],
        I = {
          BROADCASTS_BY_USER_ID: e => "user:".concat(e),
          BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
          BROADCASTS_BY_VALIDITY: e => "validity:".concat(e),
        },
        g = new i.SecondaryIndexMap(
          function (e) {
            let t = A.has(e.userId) ? 1 : 0;
            return (
              null != e.viewers && (t = 2),
              [
                I.BROADCASTS_BY_USER_ID(e.userId),
                I.BROADCASTS_BY_CHANNEL_ID(e.channelId),
                I.BROADCASTS_BY_VALIDITY(t),
              ]
            );
          },
          e => e.channelId
        );
      function R(e, t, a) {
        if (u.default.getId() === e) return !1;
        if (null == t) {
          let t = g.get(e);
          return (
            !!(null != t && (0, r.isEqual)(t.source, a)) &&
            (g.delete(e), void 0)
          );
        }
        !A.has(e) && !T.has(e) && (_.add(e), (E = [..._]));
        let l = (0, f.broadcastFromServer)(t, e, a);
        g.set(e, l);
      }
      function h(e) {
        return null != e
          ? { type: f.BroadcastSourceType.GUILD, guildId: e }
          : { type: f.BroadcastSourceType.GLOBAL };
      }
      class m extends s.default.Store {
        getBroadcasts() {
          return g.values(I.BROADCASTS_BY_VALIDITY(2));
        }
        getBroadcastsToValidateChannels() {
          return g.values(I.BROADCASTS_BY_VALIDITY(1));
        }
        getBroadcastByChannel(e) {
          return g.values(I.BROADCASTS_BY_CHANNEL_ID(e))[0];
        }
        getBroadcastByUser(e) {
          return g.get(e);
        }
        getUserIdsToValidate() {
          return E;
        }
      }
      m.displayName = "BroadcastingStore";
      var D = new m(d.default, {
        PRESENCE_UPDATES: function (e) {
          let { updates: t } = e;
          return t.forEach(e => {
            let { user: t, broadcast: a, guildId: l } = e;
            R(t.id, a, h(l));
          });
        },
        PRESENCES_REPLACE: function (e) {
          let { presences: t } = e;
          return t.forEach(e => {
            let { user: t, broadcast: a, guildId: l } = e;
            R(t.id, a, h(l));
          });
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
          let { presences: t, guilds: a } = e;
          t.forEach(e => {
            let { user: t, broadcast: a, guildId: l } = e;
            R(t.id, a, h(l));
          }),
            a.forEach(e => {
              let { presences: t, id: a } = e;
              t.forEach(e => {
                let { user: t, broadcast: l } = e;
                R(t.id, l, h(a));
              });
            });
        },
        BROADCASTER_BUCKETS_RECEIVED: function (e) {
          let { data: t } = e;
          c.default.keys(t).forEach(e => {
            S.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? A.add(e) : T.add(e),
              _.clear(),
              (E = [..._]);
            let a = g.get(e);
            null != a && (g.delete(e), g.set(e, a));
          });
        },
        BROADCAST_VIEWERS_UPDATE: function (e) {
          let { viewers: t } = e;
          Object.entries(t).forEach(e => {
            let [t, a] = e,
              l = g.get(t);
            null != l && g.set(t, { ...l, viewers: a });
          });
        },
        CHANNEL_RECIPIENT_ADD: function (e) {
          let { channelId: t, user: a } = e,
            l = g.values(I.BROADCASTS_BY_CHANNEL_ID(t))[0];
          if (
            null == l ||
            null == l.viewers ||
            l.viewers.some(e => e.id === a.id)
          )
            return !1;
          g.set(l.userId, { ...l, viewers: [...l.viewers, new o.default(a)] });
        },
        CHANNEL_RECIPIENT_REMOVE: function (e) {
          let { channelId: t, user: a } = e,
            l = g.values(I.BROADCASTS_BY_CHANNEL_ID(t))[0];
          if (null == l || null == l.viewers) return !1;
          g.set(l.userId, {
            ...l,
            viewers: l.viewers.filter(e => e.id !== a.id),
          });
        },
        CHANNEL_CREATE: function (e) {
          var t;
          let { channel: a } = e,
            l = g.values(I.BROADCASTS_BY_CHANNEL_ID(a.id))[0];
          if (null == l) return !1;
          let n = null !== (t = a.rawRecipients) && void 0 !== t ? t : [];
          g.set(l.userId, {
            ...l,
            viewers: n
              .filter(e => e.id !== l.userId)
              .map(e => new o.default(e)),
          });
        },
        LOGOUT: function () {
          A.clear(), T.clear(), _.clear(), (E = []), g.clear();
        },
      });
    },
    882278: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var l = a("884691"),
        n = a("446674"),
        r = a("42203"),
        s = a("697218"),
        i = a("194051"),
        d = a("754493");
      function o(e) {
        var t;
        let a = (0, n.useStateFromStores)([s.default], () =>
            s.default.getCurrentUser()
          ),
          o = (0, n.useStateFromStores)([r.default], () =>
            r.default.getChannel(e)
          ),
          u = (0, n.useStateFromStores)([i.default], () =>
            null != e ? i.default.getBroadcastByChannel(e) : null
          ),
          c = (0, d.default)(),
          S = l.useMemo(() => {
            var e, t;
            return null !==
              (t =
                null == o
                  ? void 0
                  : null === (e = o.recipients) || void 0 === e
                    ? void 0
                    : e
                        .map(e => s.default.getUser(e))
                        .filter(
                          e =>
                            null != e &&
                            e.id !== (null == u ? void 0 : u.userId)
                        )) && void 0 !== t
              ? t
              : [];
          }, [
            null == u ? void 0 : u.userId,
            null == o ? void 0 : o.recipients,
          ]);
        return null == a
          ? []
          : c
            ? S
            : null !==
                  (t =
                    S.length > 0
                      ? [a].concat(S)
                      : null == u
                        ? void 0
                        : u.viewers) && void 0 !== t
              ? t
              : [];
      }
    },
    754493: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useSelfBroadcast: function () {
            return o;
          },
          default: function () {
            return u;
          },
          useIsBroadcastingInChannel: function () {
            return c;
          },
          isBroadcastingInChannel: function () {
            return S;
          },
          getIsBroadcastingToAnyone: function () {
            return f;
          },
        });
      var l = a("446674"),
        n = a("845579");
      a("373469");
      var r = a("271938"),
        s = a("42203");
      a("18494");
      var i = a("101125"),
        d = a("9759");
      function o() {
        let e = (0, l.useStateFromStores)([r.default], () => r.default.getId()),
          { canBroadcast: t } = d.default.useExperiment(
            { location: "use_self_broadcast" },
            { autoTrackExposure: !1 }
          ),
          a = (0, l.useStateFromStores)([i.default], () =>
            i.default.getBroadcast()
          );
        return t && (null == a ? void 0 : a.userId) === e ? a : null;
      }
      function u() {
        let e = o();
        return null != e;
      }
      function c(e) {
        let t = o(),
          a = (0, l.useStateFromStores)([s.default], () =>
            s.default.getChannel(e)
          );
        return (
          null != t &&
          null != a &&
          a.ownerId === t.userId &&
          a.isBroadcastChannel()
        );
      }
      function S(e) {
        let t = r.default.getId(),
          { canBroadcast: a } = d.default.getCurrentConfig(
            { location: "is_broadcasting_in_channel" },
            { autoTrackExposure: !1 }
          ),
          l = i.default.getBroadcast();
        if (!a || null == l || l.userId !== t) return !1;
        let n = s.default.getChannel(e);
        return null != n && n.ownerId === l.userId && n.isBroadcastChannel();
      }
      function f() {
        let e = n.BroadcastAllowedGuildIds.getSetting(),
          t = n.BroadcastAllowedUserIds.getSetting(),
          a = n.BroadcastAllowFriends.getSetting();
        return a || e.length > 0 || t.length > 0;
      }
      a("194051");
    },
    5920: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          selectedTagFromRowData: function () {
            return m;
          },
          useFilteredGuilds: function () {
            return D;
          },
          useBroadcastingPrivacyAudience: function () {
            return x;
          },
          useBroadcastingStoredSelectedTags: function () {
            return N;
          },
          sanitizeAllowedGuildIds: function () {
            return L;
          },
          sanitizeAllowedUserIds: function () {
            return B;
          },
        }),
        a("424973"),
        a("222007");
      var l = a("884691"),
        n = a("627445"),
        r = a.n(n),
        s = a("446674"),
        i = a("137223"),
        d = a("355313"),
        o = a("845579"),
        u = a("271938"),
        c = a("42203"),
        S = a("525065"),
        f = a("26989"),
        A = a("305961"),
        T = a("27618"),
        _ = a("677099"),
        E = a("697218"),
        I = a("299039"),
        g = a("158998"),
        R = a("844153"),
        h = a("606762");
      function m(e) {
        let t;
        return (
          e.rowType === h.RowType.USER
            ? (t = {
                type: i.RichTagTypes.USER,
                label: e.name,
                avatar: e.avatarURL,
              })
            : e.rowType === h.RowType.GUILD &&
              (t = {
                type: i.RichTagTypes.GUILD,
                label: e.name,
                guild: e.guild,
              }),
          r(null != t, "RowData must be a guild or a user"),
          { display: t, row: e }
        );
      }
      function D(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !0,
          a = (0, s.useStateFromStoresArray)(
            [A.default, S.default],
            () => {
              let a = [];
              return (
                e.forEach(e => {
                  var l;
                  let n = A.default.getGuild(e),
                    r =
                      null !== (l = S.default.getMemberCount(e)) && void 0 !== l
                        ? l
                        : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
                  null != n &&
                    r < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT &&
                    (null == t ? void 0 : t(n.name)) &&
                    a.push(n);
                }),
                a
              );
            },
            [e, t]
          );
        return a;
      }
      function v(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !0,
          a = D(e, t),
          n = l.useMemo(
            () =>
              a.map(e => ({
                rowType: h.RowType.GUILD,
                name: e.name,
                id: e.id,
                disabled: !1,
                guild: e,
                key: "".concat(h.RowType.GUILD, ":").concat(e.id),
              })),
            [a]
          );
        return n;
      }
      function C(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !0,
          a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return e
          .filter(e => null != e && (null == t ? void 0 : t(e.username)))
          .map(e => ({
            rowType: h.RowType.USER,
            name: g.default.getUserTag(e),
            id: e.id,
            disabled: a && T.default.isFriend(e.id),
            avatarURL: e.getAvatarURL(null, 24),
            key: "".concat(h.RowType.USER, ":").concat(e.id),
          }));
      }
      function x(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !0,
          a = arguments.length > 2 ? arguments[2] : void 0,
          n = (0, s.useStateFromStores)([_.default], () =>
            _.default.getFlattenedGuildIds()
          ),
          r = v(n, t),
          i = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : () => !0,
              t = arguments.length > 1 ? arguments[1] : void 0,
              a = arguments.length > 2 ? arguments[2] : void 0,
              n = (0, s.useStateFromStoresArray)([T.default], () =>
                T.default.getFriendIDs()
              ),
              r = D(t),
              i = (0, s.useStateFromStores)([u.default], () =>
                u.default.getId()
              ),
              d = (0, s.useStateFromStores)([f.default], () =>
                f.default.getMemberVersion()
              ),
              o = l.useMemo(() => {
                let e = new Set(n);
                return (
                  r.forEach(t => {
                    let a = f.default.getMemberIds(t.id);
                    a.forEach(t => {
                      !e.has(t) && !T.default.isBlocked(t) && e.add(t);
                    });
                  }),
                  e
                );
              }, [r, n, d]),
              S = (0, s.useStateFromStoresArray)(
                [E.default],
                () => [...o].map(e => E.default.getUser(e)),
                [o]
              ),
              A = S.filter(e => null != e && !e.bot && e.id !== i).sort(
                (e, t) => {
                  let a = c.default.getChannel(
                      c.default.getDMFromUserId(null == e ? void 0 : e.id)
                    ),
                    l = c.default.getChannel(
                      c.default.getDMFromUserId(null == t ? void 0 : t.id)
                    );
                  return I.default.compare(
                    null == a ? void 0 : a.lastMessageId,
                    null == l ? void 0 : l.lastMessageId
                  ) > 0
                    ? -1
                    : 1;
                }
              );
            return C(A, e, a);
          })(t, n, a);
        return [i, e ? [] : r];
      }
      function N() {
        let e = o.BroadcastAllowedGuildIds.useSetting(),
          t = o.BroadcastAllowedUserIds.useSetting(),
          a = {},
          l = {};
        if (
          (v(e).forEach(e => {
            let t = (0, d.getFullRowId)(e);
            a[t] = m(e);
          }),
          t.length > 0)
        ) {
          let e = t.map(e => E.default.getUser(e)).filter(e => null != e);
          C(e).map(e => {
            let t = (0, d.getFullRowId)(e);
            l[t] = m(e);
          });
        }
        return { [h.RowType.GUILD]: a, [h.RowType.USER]: l };
      }
      function L(e) {
        let t = u.default.getId(),
          a = e;
        return (
          a.length > R.BROADCASTING_MAX_ALLOWED_GUILD_IDS &&
            (a = a.slice(0, R.BROADCASTING_MAX_ALLOWED_GUILD_IDS)),
          (a = a.filter(e => {
            var a;
            return (
              f.default.isMember(e, t) &&
              (null !== (a = S.default.getMemberCount(e)) && void 0 !== a
                ? a
                : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) <
                R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT
            );
          }))
        );
      }
      function B(e) {
        let t = e;
        return (
          t.length > R.BROADCASTING_MAX_ALLOWED_USER_IDS &&
            (t = t.slice(0, R.BROADCASTING_MAX_ALLOWED_USER_IDS)),
          t
        );
      }
    },
    835236: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        r = a.n(n),
        s = a("77078"),
        i = a("355313"),
        d = a("837899"),
        o = a("425190"),
        u = a("782340"),
        c = a("772046");
      function S(e) {
        let {
          selectedTags: t,
          title: a,
          hintText: n,
          placeholderText: S,
          expanded: f,
          setExpanded: A,
          users: T,
          guilds: _,
          query: E,
          maxCount: I,
          onQueryChange: g,
          onClickRow: R,
          onRemoveTag: h,
        } = e;
        return (0, l.jsx)(s.Collapsible, {
          className: c.collapsible,
          isExpanded: f,
          collapsibleContent: (0, l.jsx)("div", {
            className: r(c.collapsibleContent, { [c.visible]: f }),
            children: (0, l.jsx)(i.default, {
              listClassName: c.list,
              pendingAdditions: t,
              query: E,
              onQueryChange: g,
              onClickRow: R,
              onRemovePendingAddition: h,
              users: T,
              guilds: _,
              renderEmptyText: e =>
                u.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format(
                  { query: e }
                ),
              hintText: n,
              placeholderText: S,
              disabledText:
                u.default.Messages
                  .BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
              maxCount: I,
              hideRowLabel: !0,
            }),
          }),
          children: e => {
            let { onClick: t } = e;
            return (0, l.jsxs)(s.Clickable, {
              className: c.content,
              onClick: e => {
                A(!f), t(e);
              },
              children: [
                (0, l.jsx)(s.Heading, {
                  variant: "text-sm/normal",
                  children: a,
                }),
                f ? (0, l.jsx)(o.default, {}) : (0, l.jsx)(d.default, {}),
              ],
            });
          },
        });
      }
    },
    725420: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        }),
        a("222007");
      var l = a("37983"),
        n = a("884691"),
        r = a("917351"),
        s = a("446674"),
        i = a("750028"),
        d = a("77078"),
        o = a("716241"),
        u = a("355313"),
        c = a("845579"),
        S = a("872173"),
        f = a("305961"),
        A = a("651879"),
        T = a("655518"),
        _ = a("882278"),
        E = a("754493"),
        I = a("5920"),
        g = a("835236"),
        R = a("844153"),
        h = a("49111"),
        m = a("606762"),
        D = a("782340"),
        v = a("557257");
      function C(e) {
        let {
            headerText: t = D.default.Messages.BROADCASTING_SETTINGS,
            buttonCTA: a = D.default.Messages.BROADCAST_SETTINGS_SAVE,
            transitionState: C,
            onClose: x,
            onSave: N,
          } = e,
          L = (0, I.useBroadcastingStoredSelectedTags)(),
          [B, w] = n.useState(L),
          [M, p] = n.useState(""),
          O = c.BroadcastAllowFriends.useSetting(),
          [y, U] = n.useState(null == O || O),
          b = c.BroadcastAutoBroadcast.useSetting(),
          [G, j] = n.useState(b),
          [F, k] = n.useState(!1),
          [P, H] = n.useState(!1),
          V = (0, E.useSelfBroadcast)(),
          Y = (0, _.default)(null == V ? void 0 : V.channelId),
          z = n.useMemo(
            () => O !== y || !(0, r.isEqual)(L, B) || b !== G,
            [O, y, L, B, b, G]
          ),
          W = null != N,
          X = n.useMemo(
            () =>
              y ||
              Object.keys(B[m.RowType.USER]).length > 0 ||
              Object.keys(B[m.RowType.GUILD]).length > 0,
            [y, B]
          ),
          q = (!X && null != V) || (!X && W) || (!z && !W),
          Q = n.useMemo(() => "@" === M.trim().charAt(0), [M]),
          J = (0, s.useStateFromStoresArray)([f.default], () =>
            f.default.getGuildIds()
          ),
          K = (0, I.useFilteredGuilds)(J),
          Z = n.useMemo(() => K.map(e => e.id), [K]),
          [$, ee] = (0, I.useBroadcastingPrivacyAudience)(
            Q,
            function (e) {
              var t;
              let a = ((t = M.trim()), Q ? t.slice(1) : t),
                l = RegExp("".concat(T.default.escape(a)), "i");
              return l.test(e);
            },
            y
          );
        function et() {
          var e;
          null == N || N();
          let [t, a] = er();
          o.default.trackWithMetadata(
            h.AnalyticEvents.BROADCAST_SETTINGS_UPDATED,
            {
              auto_broadcast: G,
              broadcast_to_all_friends: y,
              num_allowed_users_in_broadcast: a.length,
              allowed_users: a,
              num_guilds_in_broadcast: t.length,
              guilds: t,
              num_viewers_in_broadcast: Y.length,
              current_viewers:
                null !== (e = Y.map(e => e.id)) && void 0 !== e ? e : [],
              started_broadcast: W,
            }
          );
        }
        function ea(e) {
          p(e);
        }
        function el(e, t) {
          let a = (0, u.getFullRowId)(t);
          w(l => {
            let n = { ...l };
            return (
              (n[e] = { ...n[e] }),
              a in n[e]
                ? delete n[e][a]
                : (n[e][a] = (0, I.selectedTagFromRowData)(t)),
              n
            );
          });
        }
        function en(e, t) {
          w(a => {
            let l = { ...a };
            return (l[e] = { ...l[e] }), delete l[e][t], l;
          });
        }
        function er() {
          let e = new Set(),
            t = new Set();
          Object.values(B[m.RowType.USER]).forEach(e => {
            let { row: a } = e;
            return t.add(a.id);
          }),
            Object.values(B[m.RowType.GUILD]).forEach(t => {
              let { row: a } = t;
              return e.add(a.id);
            });
          let a = (0, I.sanitizeAllowedGuildIds)(Array.from(e)),
            l = (0, I.sanitizeAllowedUserIds)(Array.from(t));
          return [a, l];
        }
        return (
          n.useEffect(() => {
            o.default.trackWithMetadata(h.AnalyticEvents.OPEN_MODAL, {
              type: W ? "Start Broadcast" : "Update Broadcast",
            });
          }, [W]),
          n.useEffect(() => {
            let e = (0, r.chunk)(Z, 100);
            e.forEach(e => {
              A.default.requestMembers(e, M.trim());
            });
          }, [Z, M]),
          (0, l.jsxs)(d.ModalRoot, {
            transitionState: C,
            children: [
              (0, l.jsx)(d.Heading, {
                variant: "heading-xl/semibold",
                className: v.header,
                children: t,
              }),
              (0, l.jsx)(d.ModalCloseButton, {
                onClick: x,
                className: v.close,
              }),
              (0, l.jsxs)(d.ModalContent, {
                className: v.content,
                paddingFix: !1,
                children: [
                  (0, l.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: v.description,
                    children: D.default.Messages.BROADCASTING_DESCRIPTION,
                  }),
                  (0, l.jsx)(d.FormTitle, {
                    tag: d.FormTitleTags.H5,
                    className: v.title,
                    children:
                      D.default.Messages
                        .BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE,
                  }),
                  (0, l.jsxs)("div", {
                    className: v.switch,
                    children: [
                      (0, l.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children:
                          D.default.Messages
                            .BROADCASTING_SETTINGS_MODAL_FRIENDS,
                      }),
                      (0, l.jsx)(d.Switch, {
                        checked: y,
                        onChange: e => {
                          U(e);
                        },
                      }),
                    ],
                  }),
                  (0, l.jsx)(g.default, {
                    selectedTags: B[m.RowType.USER],
                    query: M,
                    onQueryChange: ea,
                    onClickRow: e => el(m.RowType.USER, e),
                    onRemoveTag: e => en(m.RowType.USER, e),
                    title:
                      D.default.Messages
                        .BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                    hintText:
                      D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format(
                        { count: R.BROADCASTING_MAX_ALLOWED_USER_IDS }
                      ),
                    placeholderText:
                      D.default.Messages
                        .BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                    users: $,
                    expanded: F,
                    setExpanded: e => {
                      ea(""), k(e), H(!1);
                    },
                    maxCount: R.BROADCASTING_MAX_ALLOWED_USER_IDS,
                  }),
                  (0, l.jsx)(g.default, {
                    selectedTags: B[m.RowType.GUILD],
                    query: M,
                    onQueryChange: ea,
                    onClickRow: e => el(m.RowType.GUILD, e),
                    onRemoveTag: e => en(m.RowType.GUILD, e),
                    title:
                      D.default.Messages
                        .BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                    hintText:
                      D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format(
                        { count: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS }
                      ),
                    placeholderText:
                      D.default.Messages
                        .BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                    guilds: ee,
                    expanded: P,
                    setExpanded: e => {
                      ea(""), H(e), k(!1);
                    },
                    maxCount: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS,
                  }),
                  (0, l.jsx)(d.FormTitle, {
                    tag: d.FormTitleTags.H5,
                    className: v.title,
                    children:
                      D.default.Messages
                        .BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE,
                  }),
                  (0, l.jsxs)("div", {
                    className: v.switch,
                    children: [
                      (0, l.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: D.default.Messages.AUTO_BROADCAST_TOGGLE,
                      }),
                      (0, l.jsx)(d.Switch, { checked: G, onChange: j }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(d.ModalFooter, {
                children: (0, l.jsx)(d.Button, {
                  disabled: q,
                  onClick: function () {
                    if (!q) {
                      if (z) {
                        let [e, t] = er();
                        S.PreloadedUserSettingsActionCreators.updateAsync(
                          "broadcast",
                          a => {
                            (a.allowedGuildIds = e),
                              (a.allowedUserIds = t),
                              (a.allowFriends = i.BoolValue.create({
                                value: y,
                              })),
                              (a.autoBroadcast = i.BoolValue.create({
                                value: G,
                              })),
                              et(),
                              x();
                          },
                          S.UserSettingsDelay.INFREQUENT_USER_ACTION
                        );
                        return;
                      }
                      et(), x();
                    }
                  },
                  children: a,
                }),
              }),
            ],
          })
        );
      }
    },
    355313: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          getFullRowId: function () {
            return m;
          },
          default: function () {
            return C;
          },
        }),
        a("222007"),
        a("808653");
      var l = a("37983"),
        n = a("884691"),
        r = a("414456"),
        s = a.n(r),
        i = a("974667"),
        d = a("77078"),
        o = a("507453"),
        u = a("79798"),
        c = a("145131"),
        S = a("476263"),
        f = a("476765"),
        A = a("682344"),
        T = a("454273"),
        _ = a("191458"),
        E = a("606762"),
        I = a("782340"),
        g = a("129647");
      let R = (0, f.uid)(),
        h = (0, f.uid)();
      function m(e) {
        return "".concat(e.rowType, ":").concat(e.id);
      }
      function D(e) {
        return (0, l.jsx)(
          d.FormTitle,
          { tag: "h5", className: s(g.sectionTitle, g.rowHeight), children: e },
          e
        );
      }
      function v(e) {
        let {
            id: t,
            children: a,
            rowLabel: n,
            checked: r,
            onSelect: o,
            disabled: u,
            showCheckbox: S,
            selected: f,
            onMouseEnter: A,
            "aria-posinset": T,
            "aria-setsize": _,
          } = e,
          E = (0, i.useListItem)(t);
        return (0, l.jsx)(d.Clickable, {
          ...E,
          id: t,
          className: s(g.addMemberRow, { [g.selectedRow]: f }),
          onClick: e => {
            !u && (e.preventDefault(), o());
          },
          onMouseEnter: A,
          role: "option",
          "aria-disabled": u,
          "aria-selected": r,
          "aria-setsize": _,
          "aria-posinset": T,
          children: (0, l.jsxs)(c.default, {
            justify: c.default.Justify.BETWEEN,
            align: c.default.Align.CENTER,
            children: [
              S
                ? (0, l.jsx)(d.Checkbox, {
                    displayOnly: !0,
                    size: 18,
                    value: r,
                    type: d.Checkbox.Types.INVERTED,
                    disabled: u,
                    children: (0, l.jsx)("div", {
                      className: g.checkboxLabel,
                      children: a,
                    }),
                  })
                : a,
              null != n
                ? (0, l.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: n,
                  })
                : null,
            ],
          }),
        });
      }
      function C(e) {
        let {
            listClassName: t,
            pendingAdditions: a,
            query: r,
            onQueryChange: i,
            onClickRow: f,
            onRemovePendingAddition: C,
            roles: x = [],
            members: N = [],
            users: L = [],
            guilds: B = [],
            placeholderText: w,
            disabledText: M,
            hintText: p,
            searchTitleText: O,
            renderEmptyText: y,
            focusSearchAfterReady: U,
            isReady: b,
            maxCount: G,
            hideRowLabel: j = !1,
          } = e,
          F = n.useRef(null),
          k = n.useRef(null),
          P = [x.length, N.length, L.length, B.length],
          [H, V] = n.useState(!1),
          [Y, z] = n.useState(0),
          [W, X] = n.useState(-1);
        n.useEffect(() => {
          var e;
          null === (e = F.current) || void 0 === e || e.focus();
        }, []);
        let q = n.useCallback(function (e, t) {
            let a =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if ((z(e), X(t), a)) {
              var l;
              null === (l = k.current) ||
                void 0 === l ||
                l.scrollToIndex({
                  section: null != e ? e : 0,
                  row: null != t ? t : 0,
                  padding: 8,
                });
            }
          }, []),
          Q = n.useCallback(
            (e, t) => {
              if (null == t) return;
              i("");
              let a = e === E.AudienceSelectorSections.ROLES ? x : [],
                l = a[t];
              l.rowType !== E.RowType.EMPTY_STATE && f(l);
            },
            [x, f, i]
          ),
          J = n.useCallback(
            e => {
              var t;
              null != e &&
                e.rowType !== E.RowType.EMPTY_STATE &&
                (f(e),
                i(""),
                null === (t = F.current) || void 0 === t || t.focus());
            },
            [f, i]
          ),
          K = n.useMemo(() => Object.keys(a), [a]),
          Z = n.useMemo(
            () =>
              N.some(e => !e.disabled) ||
              x.some(e => !e.disabled) ||
              L.some(e => !e.disabled) ||
              B.some(e => !e.disabled),
            [N, x, L, B]
          ),
          $ = Z || "" === r.trim();
        function ee() {
          var e;
          V(
            !(null === (e = k.current) || void 0 === e
              ? void 0
              : e.isScrolledToTop()) && $
          );
        }
        return (
          n.useEffect(() => {
            ee();
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: s(g.searchBox, { [g.scrollSeparator]: H }),
                children: [
                  null != O &&
                    (0, l.jsx)(d.FormTitle, {
                      tag: d.FormTitleTags.H5,
                      children: O,
                    }),
                  (0, l.jsx)(_.default, {
                    ref: F,
                    query: r,
                    onQueryChange: i,
                    selectedSection: Y,
                    selectedRow: W,
                    onSelectionChange: q,
                    onSelect: Q,
                    tags: K.map(e => a[e].display),
                    sections: P,
                    onRemoveTag: function (e) {
                      C(K[e]);
                    },
                    placeholder: w,
                    focusAfterReady: U,
                    isReady: b,
                    "aria-labelledby": R,
                    "aria-controls": h,
                  }),
                  null != p
                    ? (0, l.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        children: p,
                      })
                    : null,
                ],
              }),
              $
                ? (0, l.jsx)(d.List, {
                    ref: k,
                    className: s(g.roleMemberList, t),
                    sections: P,
                    renderRow: e => {
                      let t,
                        n,
                        { section: r, row: i } = e,
                        o = null,
                        c = !1,
                        f = !1,
                        _ = !1,
                        I = !c && null != G && Object.keys(a).length >= G;
                      switch (r) {
                        case E.AudienceSelectorSections.ROLES:
                          (c = (n = m((o = x[i]))) in a || o.disabled),
                            (f = o.disabled || I),
                            (_ =
                              Y === E.AudienceSelectorSections.ROLES &&
                              W === i),
                            (t = (0, l.jsxs)("div", {
                              className: g.rowBody,
                              children: [
                                (0, l.jsx)("div", {
                                  className: s(g.rowHeight, g.alignCenter),
                                  children: (0, l.jsx)(A.default, {
                                    color: o.colorString,
                                    height: 20,
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: g.rowLabel,
                                  children: [
                                    (0, l.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      className: g.rowTitle,
                                      color:
                                        o.rowType === E.RowType.EMPTY_STATE
                                          ? "text-muted"
                                          : "text-normal",
                                      children: o.name,
                                    }),
                                    o.disabled && null != M
                                      ? (0, l.jsx)(d.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: M,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case E.AudienceSelectorSections.MEMBERS:
                          (c = (n = m((o = N[i]))) in a || o.disabled),
                            (f = o.disabled || I),
                            (_ =
                              Y === E.AudienceSelectorSections.MEMBERS &&
                              W === i),
                            (t = (0, l.jsxs)("div", {
                              className: g.rowBody,
                              children: [
                                (0, l.jsx)(d.Avatar, {
                                  src: o.avatarURL,
                                  size: d.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, l.jsx)(d.Text, {
                                  className: g.rowLabel,
                                  variant: "text-sm/normal",
                                  children: o.name,
                                }),
                                null != o.nickname
                                  ? (0, l.jsx)(d.Text, {
                                      color: "text-muted",
                                      className: g.rowLabelSubText,
                                      variant: "text-sm/normal",
                                      "aria-hidden": !0,
                                      children: o.username,
                                    })
                                  : null,
                                o.bot &&
                                  (0, l.jsx)(u.default, {
                                    verified: o.verifiedBot,
                                  }),
                              ],
                            }));
                          break;
                        case E.AudienceSelectorSections.USERS:
                          (c = (n = m((o = L[i]))) in a || o.disabled),
                            (f = o.disabled || I),
                            (_ =
                              Y === E.AudienceSelectorSections.USERS &&
                              W === i),
                            (t = (0, l.jsxs)("div", {
                              className: g.rowBody,
                              children: [
                                (0, l.jsx)(d.Avatar, {
                                  src: o.avatarURL,
                                  size: d.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, l.jsxs)("div", {
                                  className: g.rowLabel,
                                  children: [
                                    (0, l.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      children: o.name,
                                    }),
                                    o.disabled && null != M
                                      ? (0, l.jsx)(d.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: M,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case E.AudienceSelectorSections.GUILDS:
                          (c = (n = m((o = B[i]))) in a || o.disabled),
                            (f = o.disabled || I),
                            (_ =
                              Y === E.AudienceSelectorSections.GUILDS &&
                              W === i),
                            (t = (0, l.jsxs)("div", {
                              className: g.rowBody,
                              children: [
                                (0, l.jsx)(S.default, {
                                  guild: o.guild,
                                  active: !0,
                                  size: S.default.Sizes.SMALLER,
                                }),
                                (0, l.jsx)("div", {
                                  className: g.rowLabel,
                                  children: (0, l.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: o.name,
                                  }),
                                }),
                              ],
                            }));
                      }
                      return null == o
                        ? null
                        : (0, l.jsx)(
                            v,
                            {
                              id: "user-row-".concat(i),
                              rowLabel: j ? null : T.getRowTypeLabel(o.rowType),
                              checked: c,
                              disabled: f,
                              onSelect: () => J(o),
                              showCheckbox: o.rowType !== E.RowType.EMPTY_STATE,
                              onMouseEnter: () => q(r, i, !1),
                              selected: _,
                              "aria-posinset": i + 1,
                              "aria-setsize": P.reduce((e, t) => e + t, 0),
                              children: t,
                            },
                            n
                          );
                    },
                    rowHeight: 40,
                    renderSection: e => {
                      let { section: t } = e;
                      switch (t) {
                        case E.AudienceSelectorSections.ROLES:
                          return D(I.default.Messages.ROLES);
                        case E.AudienceSelectorSections.MEMBERS:
                          return D(I.default.Messages.MEMBERS);
                        case E.AudienceSelectorSections.USERS:
                          return D(I.default.Messages.USERS);
                        case E.AudienceSelectorSections.GUILDS:
                          return D(I.default.Messages.SERVERS);
                      }
                    },
                    sectionHeight: 32,
                    onScroll: ee,
                    role: void 0,
                    innerRole: "listbox",
                    innerId: h,
                    innerAriaMultiselectable: !0,
                    innerAriaOrientation: "vertical",
                  })
                : (0, l.jsxs)(c.default, {
                    className: t,
                    align: c.default.Align.CENTER,
                    justify: c.default.Justify.CENTER,
                    direction: c.default.Direction.VERTICAL,
                    children: [
                      (0, l.jsx)(o.default, { className: g.noResultIcon }),
                      (0, l.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: y(r),
                      }),
                    ],
                  }),
            ],
          })
        );
      }
    },
    191458: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var l = a("37983"),
        n = a("884691"),
        r = a("137223"),
        s = a("278243");
      let i = n.forwardRef(function (e, t) {
        let {
          query: a,
          onQueryChange: n,
          onRemoveTag: i,
          onSelect: d,
          onSelectionChange: o,
          selectedSection: u,
          selectedRow: c,
          tags: S,
          sections: f,
          placeholder: A = "",
          focusAfterReady: T,
          isReady: _,
          "aria-labelledby": E,
          "aria-controls": I,
        } = e;
        return (0, l.jsx)(r.default, {
          autoFocus: !0,
          className: s.searchBar,
          maxHeight: 100,
          onQueryChange: n,
          onRemoveTag: i,
          selectedSection: u,
          selectedRow: c,
          onSelect: d,
          onSelectionChange: o,
          placeholder: 0 === S.length ? A : "",
          query: a,
          ref: t,
          size: r.default.Sizes.MEDIUM,
          tags: S,
          sections: f,
          focusAfterReady: T,
          isReady: _,
          inputProps: {
            "aria-labelledby": E,
            "aria-controls": I,
            "aria-expanded": !0,
            "aria-activedescendant": "user-row-".concat(c),
          },
        });
      });
      var d = i;
    },
    507453: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a("37983");
      a("884691");
      var n = a("414456"),
        r = a.n(n),
        s = a("41543");
      function i(e) {
        let { className: t } = e;
        return (0, l.jsx)("div", { className: r(s.image, t) });
      }
    },
  },
]);
//# sourceMappingURL=5a6dfee7b160e66fd685.js.map

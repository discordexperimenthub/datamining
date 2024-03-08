(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87183"],
  {
    267363: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          ack: function () {
            return c;
          },
          ackChannel: function () {
            return E;
          },
          bulkAck: function () {
            return _;
          },
          localAck: function () {
            return A;
          },
          enableAutomaticAck: function () {
            return C;
          },
          disableAutomaticAck: function () {
            return s;
          },
          ackGuildFeature: function () {
            return h;
          },
          ackUserFeature: function () {
            return L;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("913144"),
        u = n("401690"),
        i = n("233069"),
        r = n("42203"),
        d = n("245997"),
        a = n("697218"),
        o = n("299039"),
        f = n("49111");
      function c(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          u = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0;
        l.default.dispatch({
          type: "CHANNEL_ACK",
          channelId: t,
          messageId: u,
          immediate: e,
          force: n,
          context: f.CURRENT_APP_CONTEXT,
          location: i,
        });
      }
      function E(t) {
        t.isCategory()
          ? !(function (t) {
              let e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                l = r.default.getChannel(t);
              if (null == l || null == l.guild_id) return;
              let a = d.default.getCategories(l.guild_id);
              if (null == a[t]) return;
              let o = a[t]
                  .filter(t => {
                    let { channel: e } = t;
                    return (0, i.isGuildReadableType)(e.type);
                  })
                  .map(t => {
                    let { channel: e } = t;
                    return e.id;
                  }),
                f = [...o];
              for (let t of (o.forEach(t => {
                let e = u.default.getActiveJoinedThreadsForParent(
                  l.guild_id,
                  t
                );
                for (let t in e) f.push(t);
              }),
              f))
                c(t, e, n);
            })(t.id, !0, !0)
          : t.isForumLikeChannel()
            ? c(t.id, !0, !0, o.default.fromTimestamp(Date.now()))
            : c(t.id, !0, !0);
      }
      function _(t, e) {
        l.default.dispatch({
          type: "BULK_ACK",
          channels: t,
          context: f.CURRENT_APP_CONTEXT,
          onFinished: e,
        });
      }
      function A(t) {
        l.default.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: t });
      }
      function C(t, e) {
        l.default.dispatch({
          type: "ENABLE_AUTOMATIC_ACK",
          channelId: t,
          windowId: e,
        });
      }
      function s(t, e) {
        l.default.dispatch({
          type: "DISABLE_AUTOMATIC_ACK",
          channelId: t,
          windowId: e,
        });
      }
      function h(t, e, n) {
        l.default.dispatch({
          type: "GUILD_FEATURE_ACK",
          id: t,
          ackType: e,
          ackedId: n,
          local: !1,
        });
      }
      function L(t, e) {
        var n;
        let u =
          null === (n = a.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.id;
        null != u &&
          l.default.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: t,
            ackedId: e,
            local: !1,
          });
      }
    },
    320954: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return i;
          },
        });
      var l = n("917351"),
        u = n.n(l);
      function i(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => !0;
        return u(t)
          .map(t =>
            "null" === t.channel.id ? e[t.channel.id] : [t, e[t.channel.id]]
          )
          .flattenDeep()
          .filter(n)
          .value();
      }
    },
    245997: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return v;
          },
        }),
        n("424973"),
        n("222007"),
        n("808653");
      var l = n("446674"),
        u = n("913144"),
        i = n("320954"),
        r = n("379881"),
        d = n("271938"),
        a = n("42203"),
        o = n("923959"),
        f = n("305961"),
        c = n("49111");
      let E = null,
        _ = {},
        A = null;
      function C() {
        return { _categories: [], null: [] };
      }
      let s = C();
      function h(t, e) {
        t.index = e;
      }
      function L(t) {
        let e = o.default.getChannels(t),
          n = C(),
          l = t => {
            var e;
            let { channel: l } = t,
              u =
                null !== (e = n[null != l.parent_id ? l.parent_id : "null"]) &&
                void 0 !== e
                  ? e
                  : n.null;
            u.push({ channel: l, index: -1 });
          };
        return (
          e[c.ChannelTypes.GUILD_CATEGORY].forEach(t => {
            let { channel: e } = t;
            n._categories.push({ channel: e, index: -1 }), (n[e.id] = []);
          }),
          e[(0, o.GUILD_SELECTABLE_CHANNELS_KEY)].forEach(l),
          e[(0, o.GUILD_VOCAL_CHANNELS_KEY)].forEach(l),
          (0, i.default)(n._categories, n).forEach(h),
          (_[t] = n),
          n
        );
      }
      function T() {
        (_ = {}), null != E && L(E);
      }
      function N(t) {
        let {
          guild: { id: e },
        } = t;
        (_[e] = void 0), E === e && L(e);
      }
      function g(t) {
        let {
          channel: { guild_id: e },
        } = t;
        if (null == e) return !1;
        (_[e] = void 0), E === e && L(e);
      }
      function p(t) {
        let { guildId: e } = t;
        (_[e] = void 0), e === E && L(e);
      }
      function U(t, e) {
        if (((A = e), null == t || null == t.getGuildId())) return !1;
        let n = t.getGuildId();
        return null != n && ((_[n] = void 0), n === E && L(n), !0);
      }
      function I() {
        L(c.FAVORITES);
      }
      class D extends l.default.Store {
        initialize() {
          this.waitFor(o.default, f.default, d.default, a.default, r.default),
            this.syncWith([r.default], I);
        }
        getCategories(t) {
          return null != t
            ? (function (t) {
                let e = _[t];
                return null != e ? e : L(t);
              })(t)
            : s;
        }
      }
      D.displayName = "GuildCategoryStore";
      var v = new D(u.default, {
        CHANNEL_SELECT: function (t) {
          let { guildId: e } = t;
          if (((E = null != e ? e : null), null == e || null != _[e]))
            return !1;
          L(e);
        },
        CONNECTION_OPEN: T,
        OVERLAY_INITIALIZE: T,
        CACHE_LOADED_LAZY: T,
        GUILD_CREATE: N,
        GUILD_UPDATE: N,
        GUILD_DELETE: function (t) {
          let {
            guild: { id: e },
          } = t;
          delete _[e];
        },
        CHANNEL_CREATE: g,
        CHANNEL_DELETE: g,
        CHANNEL_UPDATES: function (t) {
          let { channels: e } = t,
            n = !1;
          for (let { guild_id: t } of e)
            null != t && ((_[t] = void 0), (n = !0), E === t && L(t));
          return n;
        },
        GUILD_MEMBER_UPDATE: function (t) {
          let { guildId: e, user: n } = t;
          if (d.default.getId() !== n.id) return !1;
          (_[e] = void 0), e === E && L(e);
        },
        CURRENT_USER_UPDATE: function () {
          if (null == E) return !1;
          L(E);
        },
        GUILD_ROLE_CREATE: p,
        GUILD_ROLE_UPDATE: p,
        GUILD_ROLE_DELETE: p,
        IMPERSONATE_UPDATE: p,
        IMPERSONATE_STOP: p,
        VOICE_CHANNEL_SELECT: function (t) {
          let { channelId: e } = t;
          return null == e && null != A
            ? U(a.default.getChannel(A), null)
            : U(a.default.getChannel(e), e);
        },
        VOICE_STATE_UPDATES: function (t) {
          let { voiceStates: e } = t;
          return e.reduce((t, e) => {
            let { channelId: n, sessionId: l } = e;
            return d.default.getSessionId() !== l
              ? t
              : U(a.default.getChannel(n), n) || t;
          }, !1);
        },
      });
    },
  },
]);
//# sourceMappingURL=a634043a642a06e08101.js.map

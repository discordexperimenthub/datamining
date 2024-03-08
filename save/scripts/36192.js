(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36192"],
  {
    288207: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        }),
        n("222007");
      let l = new Set(["nvidia"]);
      function u(t) {
        for (let e of Object.keys(t)) {
          let n = t[e];
          if (null != n && null == n.error && l.has(e)) return !0;
        }
        return !1;
      }
    },
    439792: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var l = n("570277"),
        u = n.n(l),
        i = n("773336");
      let r = {
        [i.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function a(t) {
        let e = r[(0, i.getPlatform)()];
        if (null == e) return !1;
        for (let n of Object.keys(t)) {
          let l = t[n],
            i = e[n];
          if (null == l || null == i || null != l.error) continue;
          let r = (function (t) {
            var e, n;
            return ""
              .concat(null !== (e = t.major) && void 0 !== e ? e : 0, ".")
              .concat(null !== (n = t.minor) && void 0 !== n ? n : 0, ".0");
          })(l);
          if (!u.satisfies(r, i)) return !0;
        }
        return !1;
      }
    },
    709496: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return a;
          },
        }),
        n("222007");
      var l = n("570277"),
        u = n.n(l),
        i = n("773336");
      let r = { [i.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function a(t) {
        let e = r[(0, i.getPlatform)()];
        if (null == e) return !1;
        for (let n of Object.keys(t)) {
          let l = t[n],
            i = e[n];
          if (null == l || null == i || null != l.error) continue;
          let r = (function (t) {
            var e, n;
            return ""
              .concat(null !== (e = t.major) && void 0 !== e ? e : 0, ".")
              .concat(null !== (n = t.minor) && void 0 !== n ? n : 0, ".0");
          })(l);
          if (!u.satisfies(r, i)) return !0;
        }
        return !1;
      }
    },
    767960: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return I;
          },
        });
      var l = n("446674"),
        u = n("913144"),
        i = n("773336"),
        r = n("50885"),
        a = n("288207"),
        o = n("439792"),
        s = n("709496");
      let d = !1,
        f = !0,
        c = !1;
      class E extends l.default.Store {
        initialize() {
          !(!i.isPlatformEmbedded || __OVERLAY__) &&
            r.default.getGPUDriverVersions().then(t => {
              (d = (0, s.default)(t)),
                (f = (0, a.default)(t)),
                (c = (0, o.default)(t)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return d;
        }
        get canUseHardwareAcceleration() {
          return f;
        }
        get problematicGPUDriver() {
          return c;
        }
        getState() {
          return {
            GPUDriversOutdated: d,
            canUseHardwareAcceleration: f,
            problematicGPUDriver: c,
          };
        }
      }
      E.displayName = "StreamingCapabilitiesStore";
      var I = new E(u.default, {
        OVERLAY_INITIALIZE: function (t) {
          let { streamingCapabilitiesStoreState: e } = t;
          (d = e.GPUDriversOutdated), (f = e.canUseHardwareAcceleration);
        },
      });
    },
    269596: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        }),
        n("222007");
      var l = n("446674"),
        u = n("913144"),
        i = n("197881"),
        r = n("492397");
      let a = new Set(),
        o = {};
      class s extends l.default.PersistedStore {
        initialize(t) {
          null != t &&
            (Array.isArray(t.hiddenHotspots) && (a = new Set(t.hiddenHotspots)),
            null != t.hotspotOverrides && (o = t.hotspotOverrides));
        }
        hasHotspot(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !e && o[t];
          return (
            !(
              r.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()
            ) &&
            (n || !a.has(t))
          );
        }
        hasHiddenHotspot(t) {
          return a.has(t);
        }
        getHotspotOverride(t) {
          return o[t];
        }
        getState() {
          return { hiddenHotspots: a, hotspotOverrides: o };
        }
      }
      (s.displayName = "HotspotStore"),
        (s.persistKey = "hotspots"),
        (s.migrations = [
          t => ({ hiddenHotspots: null != t ? t : [], hotspotOverrides: {} }),
        ]);
      var d = new s(u.default, {
        OVERLAY_INITIALIZE: function (t) {
          let { hiddenHotspots: e } = t;
          a = new Set(e);
        },
        HOTSPOT_HIDE: function (t) {
          let { location: e } = t;
          if (a.has(e)) return !1;
          a.add(e);
        },
        HOTSPOT_OVERRIDE_SET: function (t) {
          let { location: e, enabled: n } = t;
          o[e] = n;
        },
        HOTSPOT_OVERRIDE_CLEAR: function (t) {
          let { location: e } = t;
          if (null == o[e]) return !1;
          delete o[e];
        },
      });
    },
    869305: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return q;
          },
        }),
        n("860677"),
        n("222007");
      var l = n("917351"),
        u = n.n(l),
        i = n("981980"),
        r = n("151426"),
        a = n("299285"),
        o = n("385976"),
        s = n("789563"),
        d = n("767960"),
        f = n("269596"),
        c = n("288518"),
        E = n("235004"),
        I = n("755624"),
        g = n("800843"),
        S = n("610730"),
        O = n("374363"),
        C = n("116949"),
        T = n("373469"),
        A = n("271938"),
        N = n("950104"),
        _ = n("42203"),
        p = n("86878"),
        v = n("925758"),
        y = n("546463"),
        h = n("341542"),
        R = n("525065"),
        L = n("26989"),
        P = n("305961"),
        m = n("216391"),
        D = n("260320"),
        b = n("169602"),
        V = n("52028"),
        w = n("42887"),
        H = n("824563"),
        U = n("945956"),
        Y = n("660478"),
        B = n("27618"),
        M = n("18494"),
        G = n("282109"),
        F = n("697218"),
        k = n("800762"),
        j = n("357957"),
        J = n("167726"),
        x = n("703370"),
        z = n("953998"),
        W = n("901165"),
        Z = n("819068");
      async function q(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : new i.default();
        await new Promise(t => setImmediate(t));
        let l = F.default.getCurrentUser();
        if (null == l)
          return new Promise(l => {
            n.fail(() => {
              l(q(t, e, n));
            });
          });
        n.succeed();
        let Q = Object.values(F.default.getUsers()),
          K = Object.values(P.default.getGuilds()),
          X = P.default.getAllGuildsRoles(),
          $ = u.values(_.default.getInitialOverlayState()),
          tt = L.default.getMutableAllGuildsAndMembers(),
          te = Y.default.getAllReadStates(!0),
          tn = k.default.getAllVoiceStates(),
          tl = H.default.getState(),
          tu = h.default.unavailableGuilds,
          ti = u.mapValues(o.default.getGuilds(), t => t.emojis),
          tr = G.default.getAllSettings(),
          ta = N.default.getInternalState(),
          to = z.default.getStates(),
          ts = p.default.getAllConnections(),
          td = V.default.getApplicationActivities(),
          tf = v.default.getParties(),
          tc = v.default.getUserParties(),
          tE = A.default.getSessionId(),
          tI = A.default.getAnalyticsToken(),
          tg = x.default.getGameForPID(e),
          tS = R.default.getMemberCounts(),
          tO = B.default.getRelationships(),
          tC = Array.from(c.default.getMessageRequestChannelIds()),
          tT = M.default.getVoiceChannelId(),
          tA = W.default.getFocusedPID(),
          tN = W.default.getSelectedGuildId(),
          t_ = W.default.getSelectedChannelId(),
          tp = w.default.getState(),
          tv = y.default.games,
          ty = Object.values(j.default.paymentSources).map(t => t.toJS()),
          th = j.default.defaultPaymentSourceId,
          tR = j.default.hasFetchedPaymentSources,
          tL = T.default.getState(),
          tP = a.default._getAllApplications().map(t => t.toJS()),
          tm = J.default.testModeApplicationId,
          tD = {
            null: {
              state: U.default.getState(),
              pings: U.default.getPings(),
              quality: U.default.getQuality(),
              hostname: U.default.getHostname(),
              lossRate: U.default.getOutboundLossRate(),
            },
          };
        m.default.forEach((t, e) => {
          tD[e] = {
            state: t.state,
            pings: t.getPings(),
            quality: t.quality,
            hostname: t.hostname,
            lossRate: t.getOutboundLossRate(),
          };
        });
        let tb = D.default.getLobbies(),
          tV = b.default.getAllVoiceStates(),
          tw = Array.from(f.default.getState().hiddenHotspots),
          tH = s.default.getSerializedState(),
          tU = d.default.getState(),
          tY = I.default.getInitialOverlayState(),
          tB = g.default.getInitialOverlayState(),
          tM = S.default.getInitialOverlayState(),
          tG = (0, C.protoToB64)(r.PreloadedUserSettings, O.default.settings),
          tF = E.default.getOverlaySerializedState();
        return {
          type: "OVERLAY_INITIALIZE",
          version: Z.OVERLAY_VERSION,
          users: Q,
          guilds: K,
          allGuildsRoles: X,
          channels: $,
          guildMembers: tt,
          readStates: te,
          voiceStates: tn,
          unavailableGuilds: tu,
          emojis: ti,
          allUserGuildSettings: tr,
          callStoreInternalState: ta,
          activityLauncherStates: to,
          connectedApps: ts,
          localActivities: td,
          parties: tf,
          userParties: tc,
          user: l,
          messageRequestChannelIds: tC,
          token: t,
          sessionId: tE,
          analyticsToken: tI,
          presences: tl,
          currentGame: tg,
          selectedVoiceChannelId: tT,
          selectedChannelId: t_,
          selectedGuildId: tN,
          guildMemberCounts: tS,
          relationships: tO,
          mediaEngineState: tp,
          rtcConnectionStates: tD,
          focusedPID: tA,
          applications: tP,
          paymentSources: ty,
          defaultPaymentSourceId: th,
          hasFetchedPaymentSources: tR,
          testModeApplicationId: tm,
          lobbies: tb,
          lobbyVoiceStates: tV,
          applicationStreamState: tL,
          hiddenHotspots: tw,
          serializedExperimentStore: tH,
          streamingCapabilitiesStoreState: tU,
          joinedThreads: tY,
          threadMembers: tB,
          threadMessages: tM,
          userSettingsProto: tG,
          soundboardStoreState: tF,
          detectableApplications: tv,
        };
      }
    },
    925758: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return A;
          },
        }),
        n("222007");
      var l = n("917351"),
        u = n.n(l),
        i = n("446674"),
        r = n("913144"),
        a = n("271938"),
        o = n("27618"),
        s = n("101125"),
        d = n("49111");
      let f = {},
        c = {};
      function E(t, e) {
        var n;
        let l = null !== (n = f[t]) && void 0 !== n ? n : {};
        return l[e];
      }
      function I(t, e) {
        let n = E(t, e);
        if (null == n) return;
        let l = f[t];
        delete l[e], u.isEmpty(l) && delete f[t];
        let i = c[n];
        null != i && (i.delete(t), 0 === i.size && delete c[n]);
      }
      function g(t, e, n, l) {
        let u = n.find(t => null != t.party && t.party.id),
          i = null != u && null != u.party ? u.party.id : null,
          r = E(e, t);
        if (null == i || l === d.StatusTypes.OFFLINE)
          return null != r && (I(e, t), void 0);
        if (null != r) {
          if (r === i) return !1;
          I(e, t);
        }
        !(function (t, e, n) {
          var l;
          let u = f[t];
          if (
            (null == u && (u = f[t] = {}), (u[e] = n), o.default.isBlocked(t))
          )
            return;
          let i = null !== (l = c[n]) && void 0 !== l ? l : new Set();
          (c[n] = i), i.add(t);
        })(e, t, i);
      }
      function S(t) {
        let { guild: e } = t,
          n = !1;
        for (let { user: t, status: l, activities: u } of e.presences)
          !1 !== g(e.id, t.id, u, l) && (n = !0);
        return n;
      }
      function O(t, e) {
        let n = !1;
        return (
          e.forEach(e => {
            null != e && g(t, e.user.id, e.activities, e.status) && (n = !0);
          }),
          n
        );
      }
      function C() {
        let t = a.default.getId(),
          e = s.default.getActivities();
        return g(d.ME, t, e);
      }
      class T extends i.default.Store {
        initialize() {
          this.syncWith([s.default], C), this.waitFor(s.default, o.default);
        }
        getParty(t) {
          return null != t && null != c[t] ? c[t] : null;
        }
        getUserParties() {
          return f;
        }
        getParties() {
          return c;
        }
      }
      T.displayName = "GamePartyStore";
      var A = new T(r.default, {
        CONNECTION_OPEN_SUPPLEMENTAL: function (t) {
          let { guilds: e, presences: n } = t,
            l = !1;
          for (let { user: t, status: e, activities: u } of n)
            null != t && !1 !== g(d.ME, t.id, u, e) && (l = !0);
          for (let t of e) !1 !== S({ guild: t }) && (l = !0);
          return l;
        },
        OVERLAY_INITIALIZE: function (t) {
          let { parties: e, userParties: n } = t;
          (c = {}),
            (f = { ...n }),
            Object.keys(e).forEach(t => (c[t] = new Set(e[t])));
        },
        GUILD_CREATE: S,
        PRESENCES_REPLACE: function (t) {
          let { presences: e } = t,
            n = !1;
          for (let { user: t, activities: l } of e)
            null != t && !1 !== g(d.ME, t.id, l) && (n = !0);
          return n;
        },
        PRESENCE_UPDATES: function (t) {
          let { updates: e } = t;
          return e
            .map(t => {
              let { guildId: e, user: n, status: l, activities: u } = t;
              return g(null != e ? e : d.ME, n.id, u, l);
            })
            .some(t => t);
        },
        THREAD_MEMBER_LIST_UPDATE: function (t) {
          let { guildId: e, members: n } = t;
          return O(
            e,
            n.map(t => t.presence)
          );
        },
        THREAD_MEMBERS_UPDATE: function (t) {
          let { guildId: e, addedMembers: n } = t;
          return (
            null != n &&
            O(
              e,
              n.map(t => t.presence)
            )
          );
        },
        RELATIONSHIP_ADD: function (t) {
          let { relationship: e } = t;
          if (!o.default.isBlocked(e.id)) return !1;
          let n = f[e.id];
          if (null == n) return !1;
          for (let t of u.values(n)) {
            let n = c[t];
            null != n && n.delete(e.id);
          }
        },
        RELATIONSHIP_REMOVE: function (t) {
          let { relationship: e } = t,
            n = f[e.id];
          if (null == n) return !1;
          for (let t of u.values(n)) {
            let n = c[t];
            null != n && n.add(e.id);
          }
        },
      });
    },
    216391: function (t, e, n) {
      "use strict";
      let l;
      n.r(e),
        n.d(e, {
          default: function () {
            return A;
          },
        }),
        n("70102");
      var u = n("917351"),
        i = n.n(u),
        r = n("446674"),
        a = n("913144"),
        o = n("997722"),
        s = n("422791"),
        d = n("271938"),
        f = n("260320"),
        c = n("42887"),
        E = n("49111");
      let I = {};
      function g() {
        i.forEach(I, (t, e) => {
          t.destroy(), delete I[e];
        });
      }
      function S(t, e, n) {
        let l = I[t];
        return null != l ? e(l) : n;
      }
      function O(t) {
        let { lobbyId: e } = t,
          n = I[e];
        if (null == n) return !1;
        n.destroy(), delete I[e];
      }
      function C() {
        return !0;
      }
      class T extends r.default.Store {
        forEach(t) {
          i.each(I, t);
        }
        getState(t) {
          return S(t, t => t.state, E.RTCConnectionStates.DISCONNECTED);
        }
        isConnected(t) {
          return this.getState(t) === E.RTCConnectionStates.RTC_CONNECTED;
        }
        isDisconnected(t) {
          return this.getState(t) === E.RTCConnectionStates.DISCONNECTED;
        }
        getHostname(t) {
          return S(t, t => t.hostname, null);
        }
        getQuality(t) {
          return S(t, t => t.quality, E.RTCConnectionQuality.UNKNOWN);
        }
        getPings(t) {
          return S(t, t => t.getPings(), []);
        }
        getAveragePing(t) {
          return S(t, t => t.getAveragePing(), 0);
        }
        getLastPing(t) {
          return S(t, t => t.getLastPing(), 0);
        }
        getOutboundLossRate(t) {
          return S(t, t => t.getOutboundLossRate(), 0);
        }
        getMediaSessionId(t) {
          return S(t, t => t.getMediaSessionId(), null);
        }
        getRTCConnectionId(t) {
          return S(t, t => t.getRTCConnectionId(), null);
        }
        getDuration(t) {
          return S(t, t => t.getDuration(), 0);
        }
      }
      T.displayName = "RTCConnectionStore";
      var A = new T(
        a.default,
        c.default.isSupported()
          ? {
              CONNECTION_OPEN: function (t) {
                (l = t.sessionId), g();
              },
              CONNECTION_CLOSED: function () {
                (l = null), g();
              },
              RTC_CONNECTION_STATE: C,
              RTC_CONNECTION_PING: C,
              RTC_CONNECTION_LOSS_RATE: C,
              RTC_CONNECTION_UPDATE_ID: function (t) {
                return i.some(I, e => e === t.connection);
              },
              LOBBY_VOICE_STATE_UPDATE: function (t) {
                if (d.default.getId() !== t.userId || t.sessionId !== l)
                  return !1;
                let e = I[t.lobbyId];
                null != e && null == t.channelId
                  ? (e.destroy(), delete I[t.lobbyId])
                  : null != e
                    ? (e.channelId = t.channelId)
                    : null != t.channelId &&
                      ((e = (function (t, e) {
                        if (null == l)
                          throw Error(
                            "Creating RTCConnection without session."
                          );
                        let n = f.default.getLobby(t);
                        if (null == n)
                          throw Error("Creating RTCConnection without lobby.");
                        let u = n.application_id,
                          i = new o.default({
                            userId: d.default.getId(),
                            sessionId: l,
                            guildId: t,
                            channelId: e,
                            context: u,
                          });
                        return (
                          i.on(s.RTCConnectionEvent.State, (e, n, l) => {
                            a.default.dispatch({
                              type: "RTC_CONNECTION_STATE",
                              state: e,
                              ...n,
                              ...l,
                              lobbyId: t,
                            });
                          }),
                          i.on(s.RTCConnectionEvent.Ping, (e, n) => {
                            a.default.dispatch({
                              type: "RTC_CONNECTION_PING",
                              pings: e,
                              quality: n,
                              lobbyId: t,
                            });
                          }),
                          i.on(s.RTCConnectionEvent.OutboundLossRate, e => {
                            a.default.dispatch({
                              type: "RTC_CONNECTION_LOSS_RATE",
                              lossRate: e,
                              lobbyId: t,
                            });
                          }),
                          i
                        );
                      })(t.lobbyId, t.channelId)),
                      (I[t.lobbyId] = e));
              },
              LOBBY_VOICE_SERVER_UPDATE: function (t) {
                let e = I[t.lobbyId];
                if (null == e) return !1;
                e.connect(t.endpoint, t.token);
              },
              LOBBY_DELETE: O,
              LOBBY_DISCONNECT: O,
            }
          : {}
      );
    },
    169602: function (t, e, n) {
      "use strict";
      let l, u;
      n.r(e),
        n.d(e, {
          default: function () {
            return I;
          },
        });
      var i = n("917351"),
        r = n.n(i),
        a = n("446674"),
        o = n("913144"),
        s = n("628454");
      let d = Object.freeze({}),
        f = {};
      function c(t) {
        let { lobbyId: e } = t;
        delete f[e];
      }
      class E extends a.default.Store {
        getAllVoiceStates() {
          return f;
        }
        getVoiceStates(t) {
          var e;
          return null !== (e = f[t]) && void 0 !== e ? e : d;
        }
        getVoiceState(t, e) {
          return this.getVoiceStates(t)[e];
        }
        getLobbyIdsForUser(t) {
          return Object.keys(f).filter(e => null != f[e][t]);
        }
      }
      E.displayName = "LobbyVoiceStateStore";
      var I = new E(o.default, {
        CONNECTION_OPEN: function (t) {
          let { user: e, sessionId: n } = t;
          (f = {}), (l = e.id), (u = n);
        },
        OVERLAY_INITIALIZE: function (t) {
          let { lobbyVoiceStates: e, user: n, sessionId: i } = t;
          (f = {}),
            r.each(e, (t, e) => {
              (f[e] = {}),
                r.each(t, (t, n) => {
                  f[e][n] = new s.default(t);
                });
            }),
            (l = n.id),
            (u = i);
        },
        LOBBY_VOICE_STATE_UPDATE: function (t) {
          var e;
          let n,
            {
              sessionId: i,
              userId: r,
              lobbyId: a,
              channelId: o,
              mute: d,
              deaf: c,
              selfMute: E,
              selfDeaf: I,
            } = t,
            g = r === l && i !== u,
            S = null !== (e = f[a]) && void 0 !== e ? e : {},
            O = S[r];
          if (
            (null != o &&
              !g &&
              (n =
                null == O
                  ? new s.default({
                      userId: r,
                      sessionId: i,
                      channelId: o,
                      mute: d,
                      deaf: c,
                      selfMute: E,
                      selfDeaf: I,
                    })
                  : O.merge({
                      userId: r,
                      sessionId: i,
                      channelId: o,
                      mute: d,
                      deaf: c,
                      selfMute: E,
                      selfDeaf: I,
                    })),
            O === n)
          )
            return !1;
          null == n ? ((S = { ...S }), delete S[r]) : (S = { ...S, [r]: n }),
            (f[a] = S);
        },
        LOBBY_DELETE: c,
        LOBBY_DISCONNECT: c,
      });
    },
    953998: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var l = n("446674"),
        u = n("862337"),
        i = n("913144"),
        r = n("49111");
      let a = {},
        o = {};
      function s(t, e, n) {
        var l;
        let { applicationId: s } = n,
          d = null !== (l = a[s]) && void 0 !== l ? l : {};
        if (
          ((d[e] = t),
          (a[s] = d),
          !__OVERLAY__ && t === r.ActivityActionStates.FAILED)
        ) {
          null != o[s] && o[s].stop();
          let t = new u.Timeout();
          t.start(12e4, () =>
            i.default.dispatch({
              type: "ACTIVITY_LAUNCH_FAIL",
              applicationId: s,
              activityType: e,
            })
          ),
            (o[s] = t);
        }
      }
      function d(t) {
        return s(
          r.ActivityActionStates.COMPLETE,
          r.ActivityActionTypes.JOIN,
          t
        );
      }
      class f extends l.default.Store {
        getState(t, e) {
          let n = a[t];
          return null == n ? void 0 : n[e];
        }
        getStates() {
          return a;
        }
      }
      f.displayName = "ActivityLauncherStore";
      var c = new f(i.default, {
        OVERLAY_INITIALIZE: function (t) {
          let { activityLauncherStates: e } = t;
          a = { ...e };
        },
        ACTIVITY_JOIN_LOADING: t =>
          s(r.ActivityActionStates.LOADING, r.ActivityActionTypes.JOIN, t),
        ACTIVITY_JOIN_FAILED: t =>
          s(r.ActivityActionStates.FAILED, r.ActivityActionTypes.JOIN, t),
        ACTIVITY_JOIN: d,
        EMBEDDED_ACTIVITY_CLOSE: d,
        ACTIVITY_LAUNCH_FAIL: function (t) {
          let { applicationId: e, activityType: n } = t,
            l = a[e];
          if (null == l || l[n] !== r.ActivityActionStates.FAILED) return !1;
          delete l[n];
        },
      });
    },
  },
]);
//# sourceMappingURL=055dc4ddf279f0efb2ce.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60106"],
  {
    766665: function (e, t, n) {
      var l = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && l
          ? l(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    53708: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6c7b8245d3a54cf98b2.png";
    },
    284434: function (e, t, n) {
      "use strict";
      e.exports = n.p + "51063f34b3960c1d5da8.svg";
    },
    315956: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f92a8b5812e2da52a179.svg";
    },
    533662: function (e, t, n) {
      "use strict";
      e.exports = n.p + "71c2b8b8dce7967a6cba.svg";
    },
    101017: function (e, t, n) {
      "use strict";
      e.exports = n.p + "76db37e93ca50f3fa98b.svg";
    },
    65757: function (e, t, n) {
      "use strict";
      e.exports = n.p + "829f8ef7dcf355fbe141.svg";
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("962821");
      n.es(l, t);
    },
    811513: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("430143");
      n.es(l, t);
    },
    851298: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("499779");
      n.es(l, t);
    },
    304983: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("541742");
      n.es(l, t);
    },
    769174: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("28289");
      n.es(l, t);
    },
    501030: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDirectoryEntryBroadcastInfo: function () {
            return s;
          },
        });
      var l = n("872717"),
        a = n("49111");
      async function s(e, t, n) {
        let s = await l.default.get({
          url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
          query: { type: t, entity_id: n },
        });
        return s.body;
      }
    },
    960757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("446674"),
        s = n("152475"),
        i = n("42203"),
        r = n("501030"),
        u = n("730647"),
        d = n("49111");
      let o = { can_broadcast: !1 };
      function c(e, t, n) {
        let [c, E] = l.useState(o),
          [f, h] = l.useState(!1),
          v = l.useRef(!1),
          _ = null == e ? void 0 : e.id,
          I =
            null == e
              ? void 0
              : e.hasFeature(d.GuildFeatures.HAS_DIRECTORY_ENTRY);
        l.useEffect(() => {
          if (!I) {
            E(o);
            return;
          }
          if (v.current || null == _) return;
          let e = async () => {
            v.current = !0;
            try {
              let e = await (0, r.getDirectoryEntryBroadcastInfo)(
                _,
                u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                t
              );
              E(e);
            } catch (e) {
              E(o);
            }
            v.current = !1;
          };
          e();
        }, [_, I, t]),
          l.useEffect(() => {
            var e;
            if (!c.can_broadcast) {
              h(!1);
              return;
            }
            h(null === (e = c.has_broadcast) || void 0 === e || e);
          }, [c]);
        let m = (0, a.useStateFromStores)([i.default], () =>
          (0, s.canEveryoneRoleViewEvent)(n, [i.default])
        );
        return {
          broadcastInfo: c,
          broadcastToDirectoryChannels: m && f,
          setBroadcastToDirectoryChannels: h,
          canEveryoneRoleViewEvent: m,
        };
      }
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return c;
          },
          replaceRoleIconSourceSize: function () {
            return E;
          },
          isRoleIconAssetUrl: function () {
            return h;
          },
          canGuildUseRoleIcons: function () {
            return v;
          },
        }),
        n("781738");
      var l = n("867805"),
        a = n("407063"),
        s = n("315102"),
        i = n("773336"),
        r = n("49111");
      let u = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        d = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        o = (0, i.isAndroid)(),
        c = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? l.default.getByName(
                  l.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: f(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        E = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())
            )
          ),
        f = (e, t) => {
          let { id: n, icon: l } = e;
          if (null == l) return;
          if (l.startsWith("data:")) return l;
          let i = s.SUPPORTS_WEBP ? "webp" : "png",
            c = "",
            E = "quality=lossless";
          return (null != t &&
            ((c =
              "size=" +
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())),
            (E = o ? "" : "&" + E)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(u, "/")
                .concat(n, "/")
                .concat(l, ".")
                .concat(i, "?")
                .concat(c)
                .concat(E)
            : "".concat(d).concat(r.Endpoints.ROLE_ICON(n, l), "?").concat(c);
        },
        h = e =>
          e.startsWith(u) ||
          (e.startsWith("".concat(d, "/roles")) && e.includes("/icons/")),
        v = (e, t) => {
          var n;
          let l =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return l || e.features.has(r.GuildFeatures.ROLE_ICONS);
        };
    },
    651072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
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
      var s = a;
    },
    334683: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("446674"),
        s = n("817963"),
        i = n("923959"),
        r = n("305961"),
        u = n("957255"),
        d = n("49111"),
        o = (e, t) => {
          let n = (0, a.useStateFromStores)(
              [r.default],
              () => r.default.getGuild(e),
              [e]
            ),
            { canCreateGuildEvent: o } = (0, s.useManageResourcePermissions)(n),
            c = (0, a.useStateFromStores)(
              [i.default],
              () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY],
              [e]
            ),
            E = l.useMemo(
              () =>
                null != t
                  ? c.filter(e => {
                      let { channel: n } = e;
                      return n.type === t;
                    })
                  : c,
              [c, t]
            ),
            f = (0, a.useStateFromStores)(
              [u.default],
              () => {
                if (u.default.can(d.Permissions.ADMINISTRATOR, n) || o)
                  return !0;
                for (let { channel: e } of E) {
                  let { canCreateGuildEvent: t } = (0,
                  s.getManageResourcePermissions)(e);
                  if (t) return !0;
                }
                return !1;
              },
              [E, n, o]
            );
          return f;
        };
    },
    152475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canEveryoneRoleViewEvent: function () {
            return h;
          },
          isGuildEventInvitable: function () {
            return v;
          },
          default: function () {
            return _;
          },
        }),
        n("222007");
      var l = n("446674"),
        a = n("242757"),
        s = n("834052"),
        i = n("42203"),
        r = n("923959"),
        u = n("305961"),
        d = n("957255"),
        o = n("991170"),
        c = n("398604"),
        E = n("745049"),
        f = n("49111");
      function h(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [i.default];
        let { entityType: l, channelId: a } =
            "entity_type" in (t = e)
              ? { entityType: t.entity_type, channelId: t.channel_id }
              : t,
          s = l === E.GuildScheduledEventEntityTypes.EXTERNAL;
        if (s) return !0;
        let r = n.getChannel(a);
        return (
          null != r && o.default.canEveryoneRole(f.Permissions.VIEW_CHANNEL, r)
        );
      }
      function v(e) {
        let [t, n, l, o] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.default, i.default, u.default, s.default];
        if ((0, c.isGuildEventEnded)(e)) return !1;
        let { guild_id: f, channel_id: v } = e,
          _ = e.entity_type === E.GuildScheduledEventEntityTypes.EXTERNAL,
          I = _ ? t.getDefaultChannel(e.guild_id) : n.getChannel(v),
          m = l.getGuild(f),
          N = o.getStageInstanceByChannel(v);
        return (
          !!(0, a.canViewInviteModal)(d.default, m, I, N) &&
          null != I &&
          h(e, [n])
        );
      }
      function _(e) {
        return (0, l.useStateFromStores)(
          [r.default, i.default, u.default, s.default],
          () => v(e, [r.default, i.default, u.default, s.default]),
          [e]
        );
      }
    },
    397680: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
          getEventException: function () {
            return i;
          },
        });
      var l = n("446674"),
        a = n("398604");
      function s(e, t) {
        let n = (0, l.useStateFromStoresArray)([a.default], () => {
          var e, n;
          return null !==
            (n =
              null === (e = a.default.getGuildScheduledEvent(t)) || void 0 === e
                ? void 0
                : e.guild_scheduled_event_exceptions) && void 0 !== n
            ? n
            : [];
        });
        return r(n, e);
      }
      function i(e, t) {
        var n, l;
        let s =
          null !==
            (l =
              null === (n = a.default.getGuildScheduledEvent(t)) || void 0 === n
                ? void 0
                : n.guild_scheduled_event_exceptions) && void 0 !== l
            ? l
            : [];
        return r(s, e);
      }
      function r(e, t) {
        let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
        return n;
      }
    },
    466148: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
          getEventSchedule: function () {
            return o;
          },
        });
      var l = n("627445"),
        a = n.n(l),
        s = n("446674"),
        i = n("398604"),
        r = n("397680"),
        u = n("822516");
      function d(e, t, n) {
        var l;
        let d =
          null !==
            (l = (0, s.useStateFromStores)([i.default], () =>
              i.default.getGuildScheduledEvent(e)
            )) && void 0 !== l
            ? l
            : n;
        a(null != d, "Event must be defined"),
          (t = null != t ? t : (0, u.getNextRecurrenceIdInEvent)(d));
        let o = (0, r.default)(t, e);
        return c(d, o, t);
      }
      function o(e, t) {
        let n = (0, r.getEventException)(t, e.id);
        return c(e, n, t);
      }
      function c(e, t, n) {
        if (null == e.recurrence_rule || null == n)
          return {
            startTime: new Date(e.scheduled_start_time),
            endTime:
              null != e.scheduled_end_time
                ? new Date(e.scheduled_end_time)
                : null,
          };
        let l = (0, u.getBaseScheduleForRecurrence)(n, e),
          { startDate: a, endDate: s } = (0,
          u.getScheduleForRecurrenceWithException)(l, t);
        return {
          startTime: a.toDate(),
          endTime: null == s ? void 0 : s.toDate(),
        };
      }
    },
    799547: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getEventChannelsByType: function () {
            return i;
          },
          useGetEventChannelsByType: function () {
            return r;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("446674"),
        a = n("817963");
      n("834052");
      var s = n("923959");
      function i(e, t) {
        let [n] =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : [s.default];
        if (null == t) return [];
        let l = n.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
          i = [];
        for (let { channel: e } of l) {
          let { canCreateGuildEvent: n, canManageAllEvents: l } = (0,
            a.getManageResourcePermissions)(e),
            s = n || l;
          e.type === t &&
            (e.isGuildVoice() && s
              ? i.push(e)
              : e.isGuildStageVoice() && s && i.push(e));
        }
        return i;
      }
      function r(e, t) {
        return (0, l.useStateFromStoresArray)(
          [s.default],
          () => i(e, t, [s.default]),
          [e, t]
        );
      }
      n("957255"), n("270161");
    },
    776863: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChannelsUserCanStartStageIn: function () {
            return r;
          },
        }),
        n("808653"),
        n("424973");
      var l = n("446674"),
        a = n("923510"),
        s = n("923959"),
        i = n("957255");
      function r(e) {
        var t;
        let n =
          null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
        return (0, l.useStateFromStoresArray)(
          [s.default, i.default],
          () => {
            let e = s.default.getChannels(n)[s.GUILD_VOCAL_CHANNELS_KEY];
            return e.reduce((e, t) => {
              let n = t.channel;
              return n.isGuildStageVoice()
                ? ((function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : i.default;
                    return (
                      !!e.isGuildStageVoice() &&
                      t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                    );
                  })(t.channel, i.default) && e.push(n),
                  e)
                : e;
            }, []);
          },
          [n]
        );
      }
    },
    617347: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GuildEventBodyImageLocation: function () {
            return a;
          },
          default: function () {
            return U;
          },
        });
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        u = n.n(r),
        d = n("446674"),
        o = n("77078"),
        c = n("812204"),
        E = n("685665"),
        f = n("656038"),
        h = n("419830"),
        v = n("817963"),
        _ = n("957255"),
        I = n("476263"),
        m = n("718550"),
        N = n("398604"),
        T = n("651072"),
        g = n("1339"),
        x = n("613767"),
        C = n("822516"),
        S = n("707916"),
        p = n("255050"),
        A = n("400271"),
        L = n("427554"),
        R = n("644189"),
        M = n("29913"),
        j = n("745049"),
        D = n("49111"),
        y = n("782340"),
        G = n("402155");
      function V(e) {
        let { channel: t, onClick: n } = e,
          { canManageAllEvents: l } = (0, v.useManageResourcePermissions)(t),
          a = (0, d.useStateFromStores)(
            [_.default],
            () => !t.isGuildVocal() || _.default.can(D.Permissions.CONNECT, t),
            [t]
          ),
          r = i.useMemo(() => (0, f.default)(t), [t]),
          c = (0, h.getChannelIconComponent)(t);
        return (0, s.jsx)(o.Tooltip, {
          text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !a && null != n,
          children: e =>
            (0, s.jsxs)(o.Clickable, {
              ...e,
              className: u(G.inline, G.channelContainer, {
                [G.channelContainerEnabled]: a && null != n,
                [G.channelContainerDisabled]: !a && null != n,
              }),
              onClick: n,
              children: [
                (0, s.jsx)(o.Tooltip, {
                  text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: l && r && a && null != n,
                  children: e =>
                    null != c
                      ? (0, s.jsx)(c, {
                          ...e,
                          width: 20,
                          height: 20,
                          className: G.icon,
                        })
                      : null,
                }),
                (0, s.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: G.channelLocation,
                  children: t.name,
                }),
              ],
            }),
        });
      }
      function O(e) {
        let {
          guild: t,
          channel: n,
          onJoinClick: l,
          handleLocationClick: a,
          location: i,
          isExternal: r,
          isHub: d,
        } = e;
        if (d)
          return null == t
            ? (0, s.jsx)("div", {})
            : (0, s.jsxs)("div", {
                className: G.inline,
                children: [
                  (0, s.jsx)(I.default, {
                    className: G.guildIcon,
                    size: I.default.Sizes.MINI,
                    active: !0,
                    guild: t,
                  }),
                  (0, s.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == t ? void 0 : t.name,
                  }),
                ],
              });
        return null != n
          ? (0, s.jsx)(V, { channel: n, onClick: l })
          : (0, s.jsxs)(o.Clickable, {
              className: G.inline,
              onClick: a,
              children: [
                (0, s.jsx)(m.default, {
                  height: 20,
                  width: 20,
                  className: u(G.channelContainer, G.icon),
                }),
                (0, s.jsx)(o.Text, {
                  className: r ? G.externalLocation : G.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, g.guildEventDetailsParser)(i, !0),
                }),
              ],
            });
      }
      function U(e) {
        var t;
        let {
            className: n,
            guild: l,
            channel: a,
            creator: i,
            name: r,
            entityType: f,
            description: h,
            imageLocation: v = 0,
            imageSource: _,
            isActive: I,
            isUserLurking: m,
            isJoined: g = !1,
            isMember: y = !1,
            isHub: V = !1,
            speakers: U,
            speakerCount: b,
            rsvped: B,
            canInvite: w,
            location: F,
            truncate: k,
            onContextMenu: P,
            onJoinClick: H,
            onJoinGuildClick: z,
            onGoToGuildClick: Y,
            onRsvpClick: Z,
            onStartClick: W,
            onInviteClick: X,
            onEndClick: K,
            onClick: q,
            isNew: J,
            guildEventId: Q,
            eventPreview: $,
            recurrenceRule: ee,
            recurrenceId: et,
          } = e,
          en = (0, x.isChannelPublic)(a, f),
          el = f === j.GuildScheduledEventEntityTypes.EXTERNAL,
          { analyticsLocations: ea } = (0, E.default)(
            c.default.GUILD_EVENT_CARD
          ),
          { showRecurringEventsDesktop: es } = T.default.useExperiment(
            {
              guildId:
                null !== (t = null == l ? void 0 : l.id) && void 0 !== t
                  ? t
                  : D.EMPTY_STRING_SNOWFLAKE_ID,
              location: ea[0],
            },
            { autoTrackExposure: !1 }
          ),
          ei = (0, d.useStateFromStores)([N.default], () =>
            N.default.getGuildScheduledEvent(Q)
          ),
          er = [];
        if (null != ee && null != ei) {
          let e = (0, C.getRRule)(ee);
          er = (0, C.generateNextRecurrences)(
            4,
            e,
            new Date(ei.scheduled_start_time)
          );
        }
        let eu = es && er.length > 0;
        return (0, s.jsxs)(o.ClickableContainer, {
          "aria-label": r,
          onClick: () => (null == q ? void 0 : q(et)),
          onContextMenu: P,
          className: u(G.card, { [G.joined]: g, [G.lurking]: m }, n),
          children: [
            (0, s.jsxs)("div", {
              className: u(G.padding, { [G.isRecurring]: eu }),
              children: [
                0 === v && (0, s.jsx)(p.default, { source: _ }),
                (0, s.jsx)(A.default, {
                  creator: i,
                  name: r,
                  description: h,
                  imageSource: 1 === v ? _ : null,
                  truncate: k,
                  guildId: null == l ? void 0 : l.id,
                  isHub: V,
                  isNew: J,
                  guildEventId: Q,
                  eventPreview: $,
                  recurrenceId: et,
                }),
                I &&
                  null != l &&
                  null != U &&
                  b > 0 &&
                  (0, s.jsx)(M.default, {
                    guild: l,
                    speakers: U,
                    speakerCount: b,
                    className: G.spacing,
                  }),
                (0, s.jsx)("hr", { className: G.divider }),
                (0, s.jsxs)("div", {
                  className: u(G.inline, G.footer),
                  children: [
                    (0, s.jsx)(O, {
                      guild: l,
                      channel: a,
                      onJoinClick: H,
                      handleLocationClick: el
                        ? e => e.stopPropagation()
                        : void 0,
                      location: F,
                      isExternal: el,
                      isHub: V,
                    }),
                    V
                      ? (0, s.jsx)(R.default, {
                          isActive: I,
                          isUserLurking: m,
                          isMember: y,
                          rsvped: B,
                          onRsvpClick: Z,
                          onJoinGuildClick: z,
                          onGoToGuildClick: Y,
                          guildName: null == l ? void 0 : l.name,
                          canInvite: w,
                          isChannelPublic: en,
                          onInviteClick: X,
                        })
                      : (0, s.jsx)(S.default, {
                          entityType: f,
                          isJoined: g,
                          isActive: I,
                          isUserLurking: m,
                          rsvped: B,
                          canInvite: w,
                          isChannelPublic: en,
                          onContextMenu: P,
                          onJoinClick: H,
                          onRsvpClick: Z,
                          onStartClick: W,
                          onInviteClick: X,
                          onEndClick: K,
                        }),
                  ],
                }),
                eu && (0, s.jsx)("hr", { className: G.divider }),
              ],
            }),
            eu &&
              (0, s.jsx)(L.default, {
                guildId: null == l ? void 0 : l.id,
                recurrenceRule: ee,
                guildEventId: Q,
                onRecurrenceClick: q,
              }),
          ],
        });
      }
      ((l = a || (a = {}))[(l.BANNER = 0)] = "BANNER"),
        (l[(l.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    844808: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        i = n("20606"),
        r = n("956089"),
        u = n("822516"),
        d = n("782340"),
        o = n("850793");
      function c(e) {
        let { startDate: t, recurrenceRule: n, onRecurrenceChange: c } = e,
          E = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]),
          f = (0, u.getRecurrenceOptions)(t),
          h = e => e.toString(),
          v = (0, l.jsxs)("div", {
            className: o.title,
            children: [
              d.default.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, l.jsx)(r.TextBadge, {
                text: d.default.Messages.NEW,
                color: i.default.BG_BRAND,
              }),
            ],
          });
        return (0, l.jsx)(s.FormItem, {
          title: v,
          required: !0,
          children: (0, l.jsx)(s.Select, {
            placeholder: "gaming",
            options: f,
            select: c,
            serialize: h,
            isSelected: e => null != E && h(e) === h(E),
          }),
        });
      }
    },
    953143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("866227"),
        s = n.n(a),
        i = n("77078"),
        r = n("812204"),
        u = n("685665"),
        d = n("381546"),
        o = n("351825"),
        c = n("651072"),
        E = n("822516"),
        f = n("844808"),
        h = n("49111"),
        v = n("782340"),
        _ = n("785548");
      function I(e) {
        let {
            className: t,
            guildId: n,
            onScheduleChange: a,
            onRecurrenceChange: I,
            onTimeChange: m,
            timeSelected: N = !0,
            schedule: T,
            recurrenceRule: g,
            showEndDate: x = !1,
            requireEndDate: C = !1,
            disableStartDateTime: S = !1,
          } = e,
          { analyticsLocations: p } = (0, u.default)(r.default.EVENT_SETTINGS),
          { showRecurringEventsDesktop: A } = c.default.useExperiment(
            {
              guildId: null != n ? n : h.EMPTY_STRING_SNOWFLAKE_ID,
              location: p[0],
            },
            { autoTrackExposure: !1 }
          );
        if (null == T) return null;
        let L = null,
          R = T.startDate,
          M = s(),
          j = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
          D = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
        null != g &&
          (j.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"),
          D.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
        let y = e => {
          a({ ...T, endDate: e });
        };
        return (
          null != R &&
            c.default.trackExposure({
              guildId: null != n ? n : h.EMPTY_STRING_SNOWFLAKE_ID,
              location: p[0],
            }),
          x &&
            (L =
              null != T.endDate || C
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        className: _.doubleInput,
                        children: [
                          (0, l.jsx)(i.FormItem, {
                            title:
                              v.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: C,
                            children: (0, l.jsx)(i.DateInput, {
                              value: T.endDate,
                              onSelect: y,
                              minDate: T.startDate,
                              maxDate: D,
                            }),
                          }),
                          (0, l.jsx)(i.FormItem, {
                            title:
                              v.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: C,
                            children: (0, l.jsx)(i.TimeInput, {
                              value: T.endDate,
                              onChange: y,
                            }),
                          }),
                        ],
                      }),
                      C
                        ? null
                        : (0, l.jsx)(i.Button, {
                            onClick: () => {
                              y(void 0);
                            },
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.MIN,
                            children: (0, l.jsxs)("div", {
                              className: _.link,
                              children: [
                                (0, l.jsx)(d.default, {
                                  width: 17,
                                  height: 17,
                                  className: _.removeIcon,
                                }),
                                (0, l.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  children:
                                    v.default.Messages
                                      .CREATE_EVENT_REMOVE_END_TIME_LABEL,
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, l.jsx)(i.Button, {
                    look: i.Button.Looks.BLANK,
                    size: i.Button.Sizes.MIN,
                    onClick: () => {
                      y(s(T.startDate).add(1, "hour"));
                    },
                    children: (0, l.jsxs)("div", {
                      className: _.link,
                      children: [
                        (0, l.jsx)(o.default, {
                          width: 20,
                          height: 20,
                          className: _.addIcon,
                        }),
                        (0, l.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children:
                            v.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL,
                        }),
                      ],
                    }),
                  })),
          (0, l.jsxs)("div", {
            className: t,
            children: [
              (0, l.jsxs)("div", {
                className: _.doubleInput,
                children: [
                  (0, l.jsx)(i.FormItem, {
                    title: v.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                    required: !0,
                    children: (0, l.jsx)(i.DateInput, {
                      value: T.startDate,
                      onSelect: e => {
                        a({ ...T, startDate: e });
                      },
                      minDate: M,
                      maxDate: j,
                      disabled: S,
                    }),
                  }),
                  (0, l.jsx)(i.FormItem, {
                    title: v.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, l.jsx)(i.TimeInput, {
                      value: T.startDate,
                      onChange: e => {
                        e.isValid() &&
                          (null == m || m(!0), a({ ...T, startDate: e }));
                      },
                      hideValue: !N,
                      disabled: S,
                    }),
                  }),
                ],
              }),
              L,
              A &&
                null != R &&
                null != I &&
                (0, l.jsx)(f.default, {
                  onRecurrenceChange: I,
                  startDate: R,
                  recurrenceRule: g,
                }),
            ],
          })
        );
      }
    },
    194250: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("866227"),
        i = n.n(s),
        r = n("77078"),
        u = n("656913"),
        d = n("694187"),
        o = n("151642"),
        c = n("29846"),
        E = n("398604"),
        f = n("189443"),
        h = n("822516"),
        v = n("93550"),
        _ = n("953143"),
        I = n("745049"),
        m = n("75015"),
        N = n("782340"),
        T = n("777181");
      function g(e) {
        let { editBroadcastInfoData: t } = e,
          {
            broadcastInfo: n,
            broadcastToDirectoryChannels: a,
            setBroadcastToDirectoryChannels: s,
            canEveryoneRoleViewEvent: i,
          } = t;
        return n.can_broadcast
          ? (0, l.jsxs)(r.FormItem, {
              title: N.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
              className: T.formItem,
              children: [
                (0, l.jsx)(r.Tooltip, {
                  text: (0, l.jsx)(r.Text, {
                    className: T.broadcastInfoTooltip,
                    variant: "text-sm/normal",
                    children:
                      N.default.Messages
                        .HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                  }),
                  "aria-label":
                    N.default.Messages
                      .HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                  shouldShow: !i,
                  children: e =>
                    (0, l.jsx)("div", {
                      ...e,
                      children: (0, l.jsx)(r.Checkbox, {
                        type: r.Checkbox.Types.INVERTED,
                        disabled: !i,
                        value: a,
                        onChange: (e, t) => s(t),
                        children: (0, l.jsx)(r.Text, {
                          variant: "text-md/normal",
                          color: "interactive-active",
                          children: N.default.Messages.HUB_EVENTS_SHARE_TITLE,
                        }),
                      }),
                    }),
                }),
                (0, l.jsx)(r.Text, {
                  className: T.broadcastInfoDescription,
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: N.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION,
                }),
              ],
            })
          : null;
      }
      function x(e) {
        let {
            guildEvent: t,
            guildEventId: s,
            guildId: x,
            editBroadcastInfoData: C,
            error: S,
            validationErrorMessage: p,
            onChange: A,
            canSetFocus: L = !1,
          } = e,
          {
            entityType: R,
            channelId: M,
            description: j,
            name: D,
            image: y,
            scheduledEndTime: G,
            scheduledStartTime: V,
            recurrenceRule: O,
          } = t,
          U = (0, o.useStageBlockedUsersCount)(M),
          b = null != t && (0, E.isGuildScheduledEventActive)(t),
          B = a.useMemo(() => {
            let e = (0, h.getScheduleFromEventData)(t);
            return null != e ? e : { startDate: i(V) };
          }, [t, V]),
          [w, F] = a.useState(() => (0, h.recurrenceRuleToOption)(i(V), O)),
          k = a.useRef(null);
        a.useEffect(() => {
          if (L) {
            var e;
            null === (e = k.current) || void 0 === e || e.focus();
          }
        }, [L]);
        let P = e => {
            A({ image: e });
          },
          H = (e, t) => {
            if (null == e || void 0 === t) {
              P(null);
              return;
            }
            (0, r.openModalLazy)(async () => {
              let { default: a } = await n.el("57015").then(n.bind(n, "57015"));
              return n =>
                (0, l.jsx)(a, {
                  imgURI: e,
                  file: t,
                  onCrop: P,
                  uploadType: m.UploadTypes.SCHEDULED_EVENT_IMAGE,
                  allowSkip: !0,
                  ...n,
                });
            });
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: T.blockedUsersContainer,
              children:
                null != M &&
                !b &&
                U > 0 &&
                (0, l.jsx)(c.BlockedUsersNotice, { channelId: M }),
            }),
            (0, l.jsxs)("div", {
              className: T.form,
              children: [
                (0, l.jsxs)(r.FormItem, {
                  title: N.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                  className: T.topicFormItem,
                  required: !0,
                  children: [
                    (0, l.jsx)(r.TextInput, {
                      className: T.textInput,
                      onChange: e => {
                        A({ name: e });
                      },
                      placeholder:
                        N.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                      maxLength: I.GUILD_EVENT_MAX_NAME_LENGTH,
                      value: D,
                      autoComplete: "off",
                      inputRef: k,
                    }),
                    null != S
                      ? (0, l.jsx)(r.Text, {
                          color: "text-danger",
                          variant: "text-xs/normal",
                          className: T.warning,
                          children: S.getAnyErrorMessage(),
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)(_.default, {
                  className: T.formItem,
                  onScheduleChange: e => {
                    let { startDate: t, endDate: n } = e,
                      l = {
                        scheduledStartTime:
                          null == t ? void 0 : t.toISOString(),
                        scheduledEndTime: null == n ? void 0 : n.toISOString(),
                      };
                    null != t &&
                      null != G &&
                      (null == n ? void 0 : n.isBefore(t)) &&
                      (l.scheduledEndTime = t.add(1, "hour").toISOString()),
                      null != t &&
                        null != w &&
                        (l.recurrenceRule = (0,
                        h.recurrenceOptionToRecurrenceRule)(w, t)),
                      A(l);
                  },
                  onRecurrenceChange: e => {
                    let t = B.startDate;
                    if (null == t) return;
                    let n = (0, h.recurrenceOptionToRecurrenceRule)(e, t);
                    A({ recurrenceRule: n }), F(e);
                  },
                  schedule: B,
                  recurrenceRule: O,
                  showEndDate: R === I.GuildScheduledEventEntityTypes.EXTERNAL,
                  requireEndDate:
                    R === I.GuildScheduledEventEntityTypes.EXTERNAL,
                  disableStartDateTime: b,
                  guildId: x,
                }),
                null != p
                  ? (0, l.jsx)(r.Text, {
                      color: "text-danger",
                      variant: "text-xs/normal",
                      className: T.warning,
                      children: p,
                    })
                  : null,
                (0, l.jsx)(r.FormItem, {
                  title:
                    N.default.Messages
                      .CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                  className: T.formItem,
                  children: (0, l.jsx)(r.TextArea, {
                    className: T.descriptionInput,
                    placeholder:
                      N.default.Messages
                        .GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                    value: j,
                    onChange: e => {
                      A({ description: e });
                    },
                    maxLength: I.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                    autosize: !0,
                  }),
                }),
                (0, l.jsxs)(r.FormItem, {
                  title: N.default.Messages.GUILD_EVENT_IMAGE,
                  className: T.formItem,
                  children: [
                    (0, l.jsx)(r.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      className: T.addImageHint,
                      children:
                        N.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION,
                    }),
                    null != y
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(u.default, {
                              className: T.imagePreview,
                              iconWrapperClassName: T.imagePreviewInner,
                              image: y,
                              makeURL: e => {
                                if (null == e) return null;
                                if (null != x) {
                                  var n;
                                  return null !==
                                    (n = (0, v.default)(
                                      (0, f.convertToFakeGuildEvent)(t, x, s)
                                    )) && void 0 !== n
                                    ? n
                                    : null;
                                }
                              },
                              onChange: H,
                              hint: N.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                              showRemoveButton: !1,
                              enabled: !0,
                            }),
                            (0, l.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              onClick: () => P(null),
                              children:
                                N.default.Messages.GUILD_EVENT_REMOVE_IMAGE,
                            }),
                          ],
                        })
                      : (0, l.jsxs)(r.Button, {
                          size: r.Button.Sizes.SMALL,
                          children: [
                            N.default.Messages.GUILD_EVENT_ADD_IMAGE,
                            (0, l.jsx)(d.default, { onChange: H }),
                          ],
                        }),
                  ],
                }),
                (0, l.jsx)(g, { editBroadcastInfoData: C }),
              ],
            }),
          ],
        });
      }
    },
    590942: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        }),
        n("222007");
      var l,
        a,
        s = n("37983"),
        i = n("884691"),
        r = n("917351"),
        u = n("446674"),
        d = n("77078"),
        o = n("970728"),
        c = n("206230"),
        E = n("526887"),
        f = n("960757"),
        h = n("923959"),
        v = n("305961"),
        _ = n("683911"),
        I = n("476765"),
        m = n("354023"),
        N = n("686904"),
        T = n("398604"),
        g = n("322224"),
        x = n("152475"),
        C = n("799547"),
        S = n("189443"),
        p = n("841363"),
        A = n("822516"),
        L = n("558286"),
        R = n("560309"),
        M = n("151859"),
        j = n("299342"),
        D = n("499950"),
        y = n("27754"),
        G = n("745049"),
        V = n("49111"),
        O = n("782340"),
        U = n("872994");
      let { INVITE_OPTIONS_7_DAYS: b, INVITE_OPTIONS_UNLIMITED: B } = m.default;
      function w(e) {
        let { modal: t } = e,
          { createMultipleConfetti: n } = i.useContext(E.ConfettiCannonContext);
        return (
          i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            n(
              {
                position: {
                  type: "static-random",
                  minValue: { x: l.left - 100, y: l.top - 100 },
                  maxValue: { x: l.left + 100, y: l.top + 100 },
                },
                velocity: {
                  type: "static-random",
                  minValue: { x: -20, y: -20 },
                  maxValue: { x: -60, y: -60 },
                },
              },
              80
            ),
              n(
                {
                  position: {
                    type: "static-random",
                    minValue: { x: l.right - 100, y: l.top - 100 },
                    maxValue: { x: l.right + 100, y: l.top + 100 },
                  },
                  velocity: {
                    type: "static-random",
                    minValue: { x: 20, y: -20 },
                    maxValue: { x: 60, y: -60 },
                  },
                },
                80
              );
          }, [n, t]),
          null
        );
      }
      function F(e) {
        let {
            guildId: t,
            guildEvent: n,
            guildEventId: a,
            editBroadcastInfoData: o,
            isEdit: E,
            formErrors: f,
            transitionState: h,
            loading: v,
            error: m,
            onChange: N,
            onSave: g,
            onClose: x,
            createdEvent: C,
          } = e,
          S = (0, I.useUID)(),
          p = i.useRef(n),
          A = !(0, r.isEqual)(p.current, n),
          y = i.useMemo(
            () => [
              {
                slideId: 0,
                label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                valid: null == f.entity,
                userErrorMessage: f.entity,
              },
              {
                slideId: 1,
                label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                valid: null == f.schedule && null == f.topic && (!E || A),
                userErrorMessage: f.schedule,
              },
              {
                slideId: 2,
                label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                valid: !0,
              },
            ],
            [f, E, A]
          ),
          G = Object.keys(l).length,
          V = (0, T.isGuildScheduledEventActive)(n),
          b = e => Math.max(0, Math.min(e, G - 1)),
          [B, F] = i.useState(V ? 1 : 0),
          [k, P] = i.useState(!1),
          H = i.useMemo(
            () =>
              y
                .slice(0, B + 1)
                .map(e => e.valid)
                .every(Boolean),
            [y, B]
          ),
          z = B >= y.length ? 3 : y[b(B)].slideId,
          Y = 3 === z,
          Z = (0, L.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
        Z(Y);
        let W = (0, u.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          X = i.useRef(null),
          K = e => {
            P(!1), F(b(e));
          };
        i.useEffect(() => {
          null != C && K(3);
        }, [null == C ? void 0 : C.id, K]);
        let q = () => {
            if (!H) return;
            let e = 2 === z;
            e ? g() : Y ? x() : K(B + 1);
          },
          J = () => {
            K(B - 1);
          },
          Q = O.default.Messages.NEXT;
        return (
          2 === z &&
            (Q = E
              ? O.default.Messages.SAVE_EVENT
              : O.default.Messages.SCHEDULE_EVENT),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(d.ModalRoot, {
              transitionState: h,
              "aria-labelledby": S,
              size: d.ModalSize.DYNAMIC,
              children: [
                !W && Y ? (0, s.jsx)(w, { modal: X.current }) : null,
                (0, s.jsxs)(d.ModalContent, {
                  className: U.content,
                  scrollerRef: X,
                  children: [
                    !Y &&
                      (0, s.jsx)(_.default, {
                        steps: y.map(e => e.label),
                        stepIndex: B,
                        onClick: e => {
                          e < B ? J() : e > B && q();
                        },
                      }),
                    (0, s.jsxs)(d.Slides, {
                      activeSlide: z,
                      width: 440,
                      onSlideReady: e => {
                        P(e === z);
                      },
                      children: [
                        (0, s.jsx)(d.Slide, {
                          id: 0,
                          children: (0, s.jsx)(R.default, {
                            guildId: t,
                            guildEvent: n,
                            validationErrorMessage: f.entity,
                            isSlideReady: k,
                            onChange: N,
                          }),
                        }),
                        (0, s.jsx)(d.Slide, {
                          id: 1,
                          children: (0, s.jsx)(j.default, {
                            guildEvent: n,
                            guildEventId: a,
                            guildId: t,
                            editBroadcastInfoData: o,
                            onChange: N,
                            error: m,
                            validationErrorMessage: f.schedule,
                            isSlideReady: k,
                          }),
                        }),
                        (0, s.jsx)(d.Slide, {
                          id: 2,
                          children: (0, s.jsx)(M.default, {
                            guildId: t,
                            guildEvent: n,
                            guildEventId: a,
                            error: m,
                          }),
                        }),
                        (0, s.jsx)(d.Slide, {
                          id: 3,
                          children: (0, s.jsx)(D.default, {
                            onClose: x,
                            event: C,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !Y &&
                  (0, s.jsxs)(d.ModalFooter, {
                    className: U.footer,
                    children: [
                      (0, s.jsxs)("div", {
                        className: U.inline,
                        children: [
                          (0, s.jsx)(d.Button, {
                            color: d.Button.Colors.PRIMARY,
                            onClick: x,
                            children: O.default.Messages.CANCEL,
                          }),
                          (0, s.jsx)(d.Button, {
                            onClick: q,
                            disabled: !H,
                            className: U.button,
                            submitting: v,
                            children: Q,
                          }),
                        ],
                      }),
                      0 !== z &&
                        (0, s.jsx)(d.Button, {
                          look: d.Button.Looks.LINK,
                          size: d.Button.Sizes.MIN,
                          onClick: J,
                          color: d.Button.Colors.LINK,
                          children: O.default.Messages.BACK,
                        }),
                    ],
                  }),
              ],
            }),
          })
        );
      }
      function k(e) {
        let {
            guildId: t,
            guildScheduledEventId: l,
            transitionState: a,
            onClose: r,
          } = e,
          c = (0, u.useStateFromStores)([v.default], () =>
            v.default.getGuild(t)
          ),
          E = (0, u.useStateFromStores)(
            [T.default],
            () => T.default.getGuildScheduledEvent(l),
            [l]
          ),
          _ = (0, u.useStateFromStores)(
            [h.default],
            () => h.default.getDefaultChannel(t),
            [t]
          ),
          I = (0, S.getInitialGuildEventData)(E, _),
          [m, L] = i.useState(I),
          [R] = i.useState((0, S.isEditingEvent)(E)),
          [M, j] = i.useState(null),
          D = e => {
            var t;
            let n = (0, x.isGuildEventInvitable)(e),
              l =
                null !== (t = e.channel_id) && void 0 !== t
                  ? t
                  : null == _
                    ? void 0
                    : _.id;
            null != l &&
              o.default.createInvite(
                l,
                { max_age: b.value, max_uses: B.value },
                V.InstantInviteSources.GUILD_EVENTS
              ),
              n ? j(e) : r();
          },
          U = (0, f.default)(c, null == E ? void 0 : E.id, m),
          [w, { loading: k, error: P }] = (0, N.default)(async () => {
            if (null != M) return;
            let e = {
              broadcastToDirectoryChannels: U.broadcastToDirectoryChannels,
            };
            if (R && null != l)
              return await g.default.saveEvent(l, m, t, e), r();
            let n = await g.default.createGuildEvent(m, t, e);
            return D(n.body), n;
          }),
          H = i.useMemo(() => (0, y.default)(m, R), [m, R]);
        return (0, s.jsx)(F, {
          guildId: t,
          guildEvent: m,
          guildEventId: l,
          editBroadcastInfoData: U,
          isEdit: R,
          formErrors: H,
          transitionState: a,
          loading: k,
          error: P,
          onChange: e => {
            if (null != e.entityType) {
              var n;
              let l = (0, p.getChannelTypeFromEntity)(e.entityType),
                [a] = (0, C.getEventChannelsByType)(t, l);
              (e.channelId =
                null !== (n = null == a ? void 0 : a.id) && void 0 !== n
                  ? n
                  : null),
                e.entityType !== G.GuildScheduledEventEntityTypes.EXTERNAL &&
                  m.entityType === G.GuildScheduledEventEntityTypes.EXTERNAL &&
                  (e.entityMetadata = null);
            }
            L(t => ({ ...t, ...e }));
          },
          onSave: () => {
            null != m.recurrenceRule && R && (0, A.hasScheduleChanges)(E, m)
              ? (0, d.openModalLazy)(async () => {
                  let { ConfirmModal: e } = await n
                    .el("77078")
                    .then(n.bind(n, "77078"));
                  return t =>
                    (0, s.jsxs)(e, {
                      ...t,
                      header: O.default.Messages.EDIT_ALL_EVENTS,
                      confirmText: O.default.Messages.SAVE_EVENT,
                      cancelText: O.default.Messages.NEVERMIND,
                      onConfirm: w,
                      children: [
                        (0, s.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children:
                            O.default.Messages
                              .GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM,
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children:
                            O.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format(),
                        }),
                      ],
                    });
                })
              : w();
          },
          onClose: r,
          createdEvent: M,
        });
      }
      ((a = l || (l = {}))[(a.ENTITY = 0)] = "ENTITY"),
        (a[(a.SETTINGS = 1)] = "SETTINGS"),
        (a[(a.PREVIEW = 2)] = "PREVIEW"),
        (a[(a.SUCCESS = 3)] = "SUCCESS");
    },
    560309: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return F;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("866227"),
        i = n.n(s),
        r = n("446674"),
        u = n("77078"),
        d = n("679653"),
        o = n("42203"),
        c = n("305961"),
        E = n("957255"),
        f = n("27618"),
        h = n("697218"),
        v = n("718550"),
        _ = n("368121"),
        I = n("944633"),
        m = n("228427"),
        N = n("697468"),
        T = n("398604"),
        g = n("334683"),
        x = n("799547"),
        C = n("776863"),
        S = n("613767"),
        p = n("841363"),
        A = n("306939"),
        L = n("745049"),
        R = n("49111"),
        M = n("782340"),
        j = n("504067");
      let D = e => e === L.GuildScheduledEventEntityTypes.EXTERNAL,
        y = (e, t) => {
          let n = o.default.getChannel(e);
          if (null == n) return null;
          let a = n.type === R.ChannelTypes.GUILD_STAGE_VOICE,
            s = (0, S.isChannelPublic)(n, t),
            i = s ? _.default : I.default,
            r = s ? m.default : N.default;
          return (0, l.jsx)(a ? r : i, {
            height: 24,
            className: j.channelOptionIcon,
          });
        },
        G = e => {
          let {
              guildId: t,
              channelType: n,
              channel: a,
              onSelectChannel: s,
              disabled: i,
              entityType: r,
            } = e,
            o = n === R.ChannelTypes.GUILD_STAGE_VOICE,
            c = (0, S.isChannelPublic)(a, r),
            E = (0, x.useGetEventChannelsByType)(t, n);
          return (0, l.jsxs)(u.FormItem, {
            title: o
              ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL
              : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
            className: j.options,
            disabled: i,
            required: !0,
            children: [
              (0, l.jsx)(u.SearchableSelect, {
                value: null == a ? void 0 : a.id,
                options: E.map(e => ({
                  value: e.id,
                  label: (0, d.computeChannelName)(e, h.default, f.default, !0),
                })),
                onChange: e => {
                  let t = E.find(t => t.id === e);
                  s(null != t ? t : void 0);
                },
                renderOptionPrefix: e => y(null == e ? void 0 : e.value, r),
                isDisabled: i,
              }),
              !c &&
                (0, l.jsx)(u.Text, {
                  color: "header-secondary",
                  className: j.channelPrivate,
                  variant: "text-sm/normal",
                  children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION,
                }),
            ],
          });
        };
      function V(e, t, n, l) {
        return t
          ? {
              disabled: !0,
              tooltipText:
                M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT,
            }
          : n
            ? 0 === l && e !== L.GuildScheduledEventEntityTypes.EXTERNAL
              ? {
                  disabled: !0,
                  tooltipText:
                    M.default.Messages
                      .GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL,
                }
              : { disabled: !1, tooltipText: null }
            : {
                disabled: !0,
                tooltipText:
                  M.default.Messages
                    .GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION,
              };
      }
      let O = e => t => {
          e({ entityMetadata: { location: t } });
        },
        U = e => t => {
          var n;
          e({
            channelId:
              null !== (n = null == t ? void 0 : t.id) && void 0 !== n
                ? n
                : null,
          });
        },
        b = (e, t) => n => {
          let { value: l } = n,
            a = { entityType: l, scheduledEndTime: void 0 };
          if (D(l)) {
            var s;
            let e = (
              null !== (s = i(t.scheduledStartTime)) && void 0 !== s ? s : i()
            ).add(2, "hour");
            a.scheduledEndTime = e.toISOString();
          }
          e(a);
        };
      function B(e) {
        let { guildId: t, guildEvent: n, onChange: s, isFocusReady: i } = e,
          { entityType: d, channelId: c } = n,
          E = (0, r.useStateFromStores)(
            [o.default],
            () => o.default.getChannel(c),
            [c]
          ),
          f = a.useRef(null);
        a.useEffect(() => {
          if (i && D(d)) {
            var e;
            null === (e = f.current) || void 0 === e || e.focus();
          }
        }, [i, d]);
        let h = O(s),
          v = U(s),
          _ = (0, p.getLocationFromEventData)(n),
          I = (0, p.getChannelTypeFromEntity)(d),
          m = (0, T.isGuildScheduledEventActive)(n);
        return null == d || d === L.GuildScheduledEventEntityTypes.NONE
          ? null
          : D(d)
            ? (0, l.jsx)(u.FormItem, {
                title:
                  M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                className: j.options,
                required: !0,
                children: (0, l.jsx)(u.TextInput, {
                  className: j.textInput,
                  onChange: h,
                  placeholder:
                    M.default.Messages
                      .GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                  maxLength: L.MAX_EVENT_LOCATION_LENGTH,
                  value: null != _ ? _ : "",
                  inputRef: f,
                }),
              })
            : null == I
              ? null
              : (0, l.jsx)(G, {
                  guildId: t,
                  channelType: I,
                  onSelectChannel: v,
                  channel: E,
                  entityType: d,
                  disabled: m,
                });
      }
      function w(e) {
        let { guildId: t, guildEvent: n, onChange: s } = e,
          i = (0, r.useStateFromStores)(
            [c.default],
            () => c.default.getGuild(t),
            [t]
          ),
          d = (0, g.default)(t, void 0),
          o = (0, g.default)(t, R.ChannelTypes.GUILD_VOICE),
          E = (0, g.default)(t, R.ChannelTypes.GUILD_STAGE_VOICE),
          f = (0, x.useGetEventChannelsByType)(t, R.ChannelTypes.GUILD_VOICE),
          h = (0, C.useChannelsUserCanStartStageIn)(i),
          I = null == i ? void 0 : i.hasFeature(R.GuildFeatures.COMMUNITY),
          N = (0, T.isGuildScheduledEventActive)(n),
          S = b(s, n),
          p = a.useMemo(() => {
            let e = [
              {
                name: M.default.Messages.VOICE_CHANNEL,
                value: L.GuildScheduledEventEntityTypes.VOICE,
                desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                icon: _.default,
                ...V(L.GuildScheduledEventEntityTypes.VOICE, N, o, f.length),
              },
              {
                name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                value: L.GuildScheduledEventEntityTypes.EXTERNAL,
                desc: M.default.Messages
                  .GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                icon: v.default,
                ...V(L.GuildScheduledEventEntityTypes.EXTERNAL, N, d, 0),
              },
            ];
            return I
              ? [
                  {
                    name: M.default.Messages.STAGE_CHANNEL,
                    value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                    desc: M.default.Messages
                      .GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                    icon: m.default,
                    ...V(
                      L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                      N,
                      E,
                      h.length
                    ),
                  },
                  ...e,
                ]
              : e;
          }, [d, o, E, I, f.length, h.length, N]);
        return (0, l.jsx)(u.RadioGroup, {
          value: n.entityType,
          options: p,
          onChange: S,
          className: j.options,
        });
      }
      function F(e) {
        let {
            guildId: t,
            guildEvent: a,
            validationErrorMessage: s,
            onChange: i,
            isSlideReady: d = !1,
          } = e,
          { entityType: o } = a,
          f = (0, r.useStateFromStores)(
            [c.default],
            () => c.default.getGuild(t),
            [t]
          ),
          h = (0, C.useChannelsUserCanStartStageIn)(f),
          v = (0, r.useStateFromStores)([E.default], () =>
            E.default.can(R.Permissions.MANAGE_CHANNELS, f)
          ),
          _ = null == f ? void 0 : f.hasFeature(R.GuildFeatures.COMMUNITY),
          I = b(i, a),
          m = _ && !D(o) && 0 === h.length && v && null != o;
        return (0, l.jsxs)("div", {
          className: j.container,
          children: [
            (0, l.jsx)(u.Heading, {
              variant: "heading-xl/semibold",
              className: j.header,
              children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE,
            }),
            (0, l.jsx)(u.Text, {
              color: "header-secondary",
              className: j.text,
              variant: "text-sm/normal",
              children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE,
            }),
            (0, l.jsx)(w, { guildId: t, guildEvent: a, onChange: i }),
            (0, l.jsx)(B, {
              guildId: t,
              guildEvent: a,
              isFocusReady: d,
              onChange: i,
            }),
            m
              ? (0, l.jsx)(A.default, {
                  onClick: () => {
                    I({
                      value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                      name: M.default.Messages.STAGE_CHANNEL,
                    }),
                      (0, u.openModalLazy)(async () => {
                        let { default: e } = await n
                          .el("581354")
                          .then(n.bind(n, "581354"));
                        return n =>
                          (0, l.jsx)(e, {
                            ...n,
                            channelType: R.ChannelTypes.GUILD_STAGE_VOICE,
                            guildId: t,
                          });
                      });
                  },
                })
              : null,
          ],
        });
      }
    },
    151859: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("446674"),
        i = n("77078"),
        r = n("419830"),
        u = n("267567"),
        d = n("42203"),
        o = n("305961"),
        c = n("697218"),
        E = n("718550"),
        f = n("189443"),
        h = n("841363"),
        v = n("93550"),
        _ = n("617347"),
        I = n("745049"),
        m = n("782340"),
        N = n("973976");
      function T(e) {
        var t, n, T;
        let { guildId: g, guildEvent: x, guildEventId: C, error: S } = e,
          p = a.useMemo(() => (0, f.convertToFakeGuildEvent)(x, g), [x, g]),
          { channel_id: A, name: L, image: R, description: M } = p,
          j = (0, s.useStateFromStores)(
            [d.default],
            () => d.default.getChannel(A),
            [A]
          ),
          D = (0, s.useStateFromStores)(
            [o.default],
            () => o.default.getGuild(g),
            [g]
          ),
          y = (0, h.getLocationFromEvent)(p),
          G = (0, s.useStateFromStores)(
            [c.default],
            () =>
              null != x.creatorId
                ? c.default.getUser(x.creatorId)
                : c.default.getCurrentUser(),
            [x.creatorId]
          ),
          V = (0, s.useStateFromStores)(
            [u.default],
            () => u.default.isLurking(g),
            [g]
          ),
          O = (0, r.getChannelIconComponent)(j, D);
        return (0, l.jsxs)("div", {
          className: N.content,
          children: [
            (0, l.jsx)(_.default, {
              className: N.previewCard,
              guild: D,
              channel: j,
              location: null != y ? y : void 0,
              creator: G,
              name: L,
              description: M,
              imageSource:
                ((n = (0, f.convertToFakeGuildEvent)(x, g, C)),
                null == (T = R) && null == n.image
                  ? null
                  : null != T && /^data:/.test(T)
                    ? T
                    : (0, v.default)(n)),
              isActive: !1,
              isUserLurking: V,
              speakers: [],
              speakerCount: 0,
              rsvped: !0,
              guildEventId: I.FAKE_EVENT_ID,
              eventPreview: p,
            }),
            (0, l.jsxs)("div", {
              className: N.textContainer,
              children: [
                (0, l.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children: m.default.Messages.GUILD_EVENT_PREVIEW_TITLE,
                }),
                (0, l.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: N.subheader,
                  children:
                    null != location
                      ? m.default.Messages
                          .GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY
                      : m.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                          channelName:
                            null !== (t = null == j ? void 0 : j.name) &&
                            void 0 !== t
                              ? t
                              : "",
                          channelHook: () => {
                            var e;
                            return (0, l.jsxs)("div", {
                              className: N.channelName,
                              children: [
                                null != O
                                  ? (0, l.jsx)(O, {
                                      width: 20,
                                      height: 20,
                                      className: N.icon,
                                    })
                                  : (0, l.jsx)(E.default, {
                                      height: 18,
                                      width: 18,
                                      className: N.locationIcon,
                                    }),
                                null !== (e = null == j ? void 0 : j.name) &&
                                void 0 !== e
                                  ? e
                                  : y,
                              ],
                            });
                          },
                        }),
                }),
                null != S &&
                  (0, l.jsx)(i.Text, {
                    color: "text-danger",
                    variant: "text-xs/normal",
                    className: N.subheader,
                    children: S.getAnyErrorMessage(),
                  }),
              ],
            }),
          ],
        });
      }
    },
    299342: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("194250"),
        i = n("782340"),
        r = n("955655");
      function u(e) {
        let { isSlideReady: t, ...n } = e;
        return (0, l.jsxs)("div", {
          className: r.slideContainer,
          children: [
            (0, l.jsxs)("div", {
              className: r.header,
              children: [
                (0, l.jsx)(a.Heading, {
                  variant: "heading-xl/semibold",
                  children: i.default.Messages.GUILD_EVENT_CREATE_HEADER,
                }),
                (0, l.jsx)(a.Text, {
                  color: "header-secondary",
                  className: r.text,
                  variant: "text-sm/normal",
                  children: i.default.Messages.GUILD_EVENT_CREATE_BODY,
                }),
              ],
            }),
            (0, l.jsx)(s.default, { ...n, canSetFocus: t }),
          ],
        });
      }
    },
    499950: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("9294"),
        r = n("512027"),
        u = n("52393"),
        d = n("652453"),
        o = n("119184"),
        c = n("923959"),
        E = n("305961"),
        f = n("330154"),
        h = n("943232"),
        v = n("945330"),
        _ = n("599110"),
        I = n("306160"),
        m = n("354023"),
        N = n("841363"),
        T = n("49111"),
        g = n("782340"),
        x = n("154585");
      let { INVITE_OPTIONS_7_DAYS: C, INVITE_OPTIONS_UNLIMITED: S } = m.default;
      function p(e) {
        var t, n, p;
        let { onClose: A, event: L } = e,
          R = null == L ? void 0 : L.guild_id,
          M = (0, a.useStateFromStores)(
            [c.default],
            () => {
              var e;
              return null != R
                ? null === (e = c.default.getDefaultChannel(R)) || void 0 === e
                  ? void 0
                  : e.id
                : null;
            },
            [R]
          ),
          j = (0, a.useStateFromStores)(
            [E.default],
            () => E.default.getGuild(R),
            [R]
          ),
          D =
            (null == j ? void 0 : j.vanityURLCode) != null &&
            (null == j ? void 0 : j.vanityURLCode.length) > 0,
          { enabled: y } = r.default.useExperiment(
            {
              guildId: null != R ? R : T.EMPTY_STRING_SNOWFLAKE_ID,
              location: "bd50e8_1",
            },
            { autoTrackExposure: D }
          ),
          { channel_id: G, id: V } = null != L ? L : {},
          O = (0, a.useStateFromStores)(
            [f.default],
            () => {
              let e = null != G ? G : M;
              return null == e ? null : f.default.getInvite(e);
            },
            [G, M]
          );
        if (null == L) return A(), null;
        let U =
            y &&
            null !== (t = null == j ? void 0 : j.vanityURLCode) &&
            void 0 !== t
              ? t
              : null == O
                ? void 0
                : O.code,
          b =
            null != U
              ? (0, i.generateInviteKeyFromExtraData)({
                  baseCode: U,
                  guildScheduledEventId: V,
                })
              : null,
          B = null == b || null == O,
          w = (0, u.default)(null != b ? b : ""),
          F =
            null !== (n = null == O ? void 0 : O.maxAge) && void 0 !== n
              ? n
              : C.value,
          k =
            null !== (p = null == O ? void 0 : O.maxUses) && void 0 !== p
              ? p
              : S.value;
        return (0, l.jsxs)("div", {
          className: x.container,
          children: [
            (0, l.jsx)(s.Clickable, {
              onClick: A,
              className: x.close,
              "aria-label": g.default.Messages.CLOSE,
              children: (0, l.jsx)(v.default, {}),
            }),
            (0, l.jsx)(o.default, {
              children: (0, l.jsx)("div", {
                className: x.iconContainer,
                children: (0, l.jsx)(h.default, {
                  height: 30,
                  width: 30,
                  className: x.icon,
                }),
              }),
            }),
            (0, l.jsx)(s.Heading, {
              variant: "heading-xl/semibold",
              className: x.header,
              children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER,
            }),
            (0, l.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: x.body,
              children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY,
            }),
            (0, l.jsxs)("div", {
              className: x.invite,
              children: [
                (0, l.jsx)(d.RawInviteCopyInputConnected, {
                  value: w,
                  autoFocus: !1,
                  onCopy: e => {
                    if (B) return;
                    (0, I.copy)(e);
                    let t = (0, N.getChannelTypeFromEntity)(L.entity_type);
                    _.default.track(T.AnalyticEvents.COPY_INSTANT_INVITE, {
                      server: L.guild_id,
                      channel: G,
                      channel_type: t,
                      location: T.InstantInviteSources.GUILD_EVENTS,
                      code: O.code,
                      guild_scheduled_event_id: null == L ? void 0 : L.id,
                    });
                  },
                }),
                (null == j ? void 0 : j.vanityURLCode) == null &&
                  (0, l.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: x.inviteDetail,
                    children: (0, m.maxAgeString)(F, k),
                  }),
              ],
            }),
          ],
        });
      }
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
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("849467"),
        u = n("782340"),
        d = n("602552");
      function o(e) {
        let { guild: t, speakers: n, speakerCount: a, className: o } = e,
          c = n.slice(0, 5),
          E = c.map(e => {
            var n, a;
            return (0, l.jsxs)(
              "div",
              {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)(i.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (n = e.user) || void 0 === n
                          ? void 0
                          : n.getAvatarURL(t.id, 20),
                    size: i.AvatarSizes.SIZE_20,
                    className: d.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar"
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: d.textInGridContainer,
                    children: (0, l.jsx)(i.Text, {
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
                : null === (a = e.user) || void 0 === a
                  ? void 0
                  : a.id
            );
          }),
          f = a - c.length;
        return (0, l.jsxs)("div", {
          className: s(d.grid, o),
          children: [
            E,
            f > 0 &&
              (0, l.jsxs)("div", {
                className: d.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: d.iconMicrophone,
                    children: (0, l.jsx)(r.default, { height: 12 }),
                  }),
                  (0, l.jsx)(i.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: d.textInGrid,
                    children:
                      u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: f }
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    306939: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        s = n("77078"),
        i = n("139321"),
        r = n("597517"),
        u = n("782340"),
        d = n("319290"),
        o = n("533662");
      let c = () =>
        (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(s.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1,
            }),
            (0, l.jsx)(s.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2,
            }),
            (0, l.jsx)(s.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3,
            }),
            (0, l.jsx)(s.Text, {
              color: "header-primary",
              variant: "text-xs/normal",
              className: d.inlineText,
              children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4,
            }),
          ],
        });
      function E(e) {
        let { onClick: t } = e,
          n = (0, a.useStateFromStores)(
            [i.HotspotStore],
            () =>
              !i.HotspotStore.hasHotspot(
                i.HotspotLocations.STAGE_CHANNEL_UPSELL
              )
          );
        return n
          ? null
          : (0, l.jsxs)("div", {
              className: d.container,
              children: [
                (0, l.jsxs)("div", {
                  className: d.content,
                  children: [
                    (0, l.jsxs)("div", {
                      className: d.textContainer,
                      children: [
                        (0, l.jsx)(s.Heading, {
                          variant: "heading-md/semibold",
                          children:
                            u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE,
                        }),
                        (0, l.jsx)(s.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: d.descriptionText,
                          children:
                            u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY,
                        }),
                        (0, l.jsx)(s.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          children:
                            u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                              suggestionsHook: c,
                            }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: d.image,
                      children: (0, l.jsx)("img", {
                        src: o,
                        alt: u.default.Messages
                          .GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE,
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: d.footer,
                  children: [
                    (0, l.jsx)(s.Button, {
                      onClick: t,
                      color: s.Button.Colors.PRIMARY,
                      size: s.Button.Sizes.SMALL,
                      className: d.button,
                      children: u.default.Messages.CREATE_STAGE_CHANNEL,
                    }),
                    (0, l.jsx)(s.Button, {
                      onClick: () => {
                        r.hideHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL);
                      },
                      color: s.Button.Colors.TRANSPARENT,
                      size: s.Button.Sizes.SMALL,
                      look: s.ButtonLooks.LINK,
                      children: u.default.Messages.DONT_SHOW_AGAIN,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    27754: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("866227"),
        a = n.n(l),
        s = n("841363"),
        i = n("822516"),
        r = n("745049"),
        u = n("782340");
      function d(e, t) {
        return {
          entity: (function (e) {
            let { entityType: t, channelId: n } = e,
              l = (0, s.getLocationFromEventData)(e);
            return null == t
              ? "An event type must be specified."
              : (null == l || "" === l.trim()) && null == n
                ? "Either a location or channel must be specified."
                : void 0;
          })(e),
          schedule: (function (e, t) {
            let n = (0, i.getScheduleFromEventData)(e),
              { entityType: l } = e;
            if (null == n || (null == n ? void 0 : n.startDate) == null)
              return u.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
            let { startDate: s, endDate: d } = n;
            return l === r.GuildScheduledEventEntityTypes.EXTERNAL && null == d
              ? u.default.Messages.GUILD_EVENT_END_DATE_REQUIRED
              : !t && s.isBefore(a())
                ? u.default.Messages.GUILD_EVENT_PAST_START_DATE
                : null != d && null != s && d.isBefore(s)
                  ? u.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE
                  : null != d && d.isBefore(a())
                    ? u.default.Messages.GUILD_EVENT_PAST_END_DATE_1
                    : void 0;
          })(e, t),
          topic: (function (e) {
            let { name: t } = e,
              n = null == t || "" === t.trim();
            return n ? "Topic must be specified." : void 0;
          })(e),
        };
      }
    },
    656913: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("819855"),
        r = n("841098"),
        u = n("449918"),
        d = n("832132"),
        o = n("818643"),
        c = n("608684"),
        E = n("49111"),
        f = n("854045");
      let h = E.Color.PRIMARY_400,
        v = E.Color.PRIMARY_500;
      function _(e) {
        let {
            enabled: t,
            imageClassName: n,
            iconWrapperClassName: a,
            ...E
          } = e,
          _ = (0, r.default)(),
          I = (0, i.isThemeDark)(_) ? h : v,
          m = { height: 18, width: 18, color: (0, u.getColor)(I) };
        return (0, l.jsx)(c.default, {
          className: s({
            [f.avatarUploader]: t,
            [f.avatarUploaderDisabled]: !t,
          }),
          imageClassName: s(n, f.avatarUploaderInnerSquare, {
            [f.avatarUploaderInnerSquareDisabled]: !t,
          }),
          icon:
            null != E.image && "" !== E.image
              ? (0, l.jsx)(d.default, { ...m })
              : (0, l.jsx)(o.default, { ...m }),
          iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
          iconWrapperClassName: a,
          showIcon: !0,
          showIconDisabled: !0,
          hideSize: !0,
          ...E,
        });
      }
    },
    608684: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImageUploaderIcon: function () {
            return v;
          },
          default: function () {
            return I;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("627445"),
        u = n.n(r),
        d = n("77078"),
        o = n("159885"),
        c = n("694187"),
        E = n("49111"),
        f = n("782340"),
        h = n("574448");
      function v(e) {
        let { className: t, icon: n = null } = e;
        return (0, l.jsx)("div", {
          className: i(h.imageUploaderIcon, t),
          children: n,
        });
      }
      class _ extends a.PureComponent {
        handleExternalFileChange(e) {
          u(
            null != this.inputRef.current,
            "ImageInputRef asked to handleExternalFileChange when not mounted"
          ),
            this.inputRef.current.handleFileChange(e);
        }
        render() {
          var e;
          let t, n, a, s;
          let {
            image: r,
            hint: u,
            name: _,
            makeURL: I,
            disabled: m,
            onChange: N,
            showIcon: T,
            showIconDisabled: g,
            className: x,
            imageClassName: C,
            iconClassName: S,
            iconWrapperClassName: p,
            icon: A,
            hideSize: L,
            imageStyle: R,
            showRemoveButton: M,
            maxFileSizeBytes: j,
            onFileSizeError: D,
            onOpenImageSelectModal: y,
            "aria-label": G,
          } = this.props;
          if (
            (null != (t = null != r && /^data:/.test(r) ? r : I(r))
              ? (n = 'url("'.concat(t, '")'))
              : null != _ &&
                (a = (0, l.jsx)("div", {
                  className: h.imageUploaderAcronym,
                  children: (0, o.getAcronym)(_),
                })),
            m)
          )
            return (0, l.jsx)("div", {
              className: i(h.imageUploader, h.disabled, x),
              children: (0, l.jsxs)("div", {
                className: i(h.imageUploaderInner, C),
                style: { ...R, backgroundImage: n },
                children: [
                  a,
                  g &&
                    (0, l.jsx)("div", {
                      className: i(
                        h.imageUploaderIcon,
                        h.imageUploaderIconDisabled,
                        S
                      ),
                      children: A,
                    }),
                ],
              }),
            });
          null != r
            ? (s = (0, l.jsx)(d.Anchor, {
                className: h.removeButton,
                onClick: this.handleRemove,
                children: f.default.Messages.REMOVE,
              }))
            : !L &&
              (s = (0, l.jsx)("small", {
                className: h.sizeInfo,
                children: f.default.Messages.MINIMUM_SIZE.format({
                  size: E.AVATAR_SIZE,
                }),
              }));
          let V =
            null !== (e = null != G ? G : u) && void 0 !== e
              ? e
              : f.default.Messages.CHANGE_AVATAR;
          return (0, l.jsxs)("div", {
            className: i(h.imageUploader, x),
            children: [
              (0, l.jsx)(d.FocusRing, {
                within: !0,
                children: (0, l.jsxs)("div", {
                  className: T ? i(h.imageUploaderIconWrapper, p) : void 0,
                  children: [
                    (0, l.jsxs)("div", {
                      className: i(h.imageUploaderInner, C),
                      style: { ...R, backgroundImage: n },
                      children: [
                        (0, l.jsx)("span", { "aria-hidden": !0, children: a }),
                        null != y
                          ? (0, l.jsx)(d.Clickable, {
                              className: h.imageUploaderFileInput,
                              "aria-label": V,
                              onClick: y,
                            })
                          : (0, l.jsx)(c.default, {
                              ref: this.inputRef,
                              onChange: N,
                              className: h.imageUploaderFileInput,
                              "aria-label": V,
                              tabIndex: 0,
                              maxFileSizeBytes: j,
                              onFileSizeError: D,
                            }),
                      ],
                    }),
                    null != u &&
                      (0, l.jsx)("div", {
                        className: h.imageUploaderHint,
                        "aria-hidden": "true",
                        children: u,
                      }),
                    T && (0, l.jsx)(v, { className: S, icon: A }),
                  ],
                }),
              }),
              M ? s : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = a.createRef()),
            (this.handleRemove = () => {
              this.props.onChange(null);
            });
        }
      }
      _.defaultProps = {
        name: "",
        makeURL: e => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      };
      var I = _;
    },
    242757: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canViewInviteModal: function () {
            return a;
          },
        });
      var l = n("49111");
      function a(e, t, n, a) {
        let s = null != n ? n : t,
          i = null != s && e.can(l.Permissions.CREATE_INSTANT_INVITE, s);
        return (
          i ||
          (null != t && null != t.vanityURLCode) ||
          (null == a ? void 0 : a.invite_code) != null
        );
      }
    },
    512027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var l = (0, n("862205").createExperiment)({
        kind: "guild",
        id: "2022-11_default_to_server_vanity_v2",
        label: "Default To Server Vanity v2",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    652453: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          RawInviteCopyInputConnected: function () {
            return p;
          },
          InviteCopyInput: function () {
            return A;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        i = n.n(s),
        r = n("498574"),
        u = n("446674"),
        d = n("862337"),
        o = n("77078"),
        c = n("162771"),
        E = n("102985"),
        f = n("599110"),
        h = n("306160"),
        v = n("568734"),
        _ = n("354023"),
        I = n("865699"),
        m = n("91366"),
        N = n("49111"),
        T = n("782340"),
        g = n("696862"),
        x = n("182893"),
        C = n("125047"),
        S = n("890957");
      let p = u.default.connectStores([E.default], () => ({
          hideValue: E.default.hideInstantInvites,
        }))(e => {
          let {
              value: t,
              autoFocus: n,
              hideValue: s,
              onCopy: r,
              disabled: u,
            } = e,
            [c, E] = a.useState(!1),
            [f, v] = a.useState(!1),
            _ = a.useMemo(() => new d.DelayedCall(1e3, () => v(!1)), [v]);
          return (
            a.useEffect(
              () => () => {
                _.cancel();
              },
              [_]
            ),
            (0, l.jsxs)("div", {
              className: i(x.input, C.flexJustifyBetween, C.flexCenter, {
                [x.success]: f,
                [x.focused]: c,
              }),
              children: [
                (0, l.jsx)(o.TextInput, {
                  className: g.copyInput,
                  name: "invite",
                  value: s ? T.default.Messages.INSTANT_INVITE_HIDDEN : t,
                  editable: !1,
                  inputClassName: g.input,
                  autoFocus: n,
                  onFocus: () => (n ? E(!0) : null),
                  onBlur: () => (n ? E(!1) : null),
                  spellCheck: "false",
                  onClick: e => e.currentTarget.select(),
                  "aria-label": T.default.Messages.FORM_LABEL_INVITE_LINK,
                  disabled: u,
                }),
                h.SUPPORTS_COPY
                  ? (0, l.jsx)(o.Button, {
                      size: o.Button.Sizes.SMALL,
                      color: f ? o.Button.Colors.GREEN : o.Button.Colors.BRAND,
                      className: g.copyButton,
                      onClick: () => {
                        v(!0), _.delay(), r(t);
                      },
                      disabled: u,
                      children: f
                        ? T.default.Messages.INVITE_COPIED
                        : T.default.Messages.COPY,
                    })
                  : null,
              ],
            })
          );
        }),
        A = e => {
          let {
              guild: t,
              noInvitesAvailable: n,
              showFriends: s,
              onClose: u,
              modalState: d,
              isGuestInviteCreationToggleEnabled: E,
              inviteFlags: x,
              setInviteFlags: C,
              showGuestInviteToggleForCurrentVoiceChannel: A,
              copyValue: L,
              changePage: R,
              inviteChannel: M,
              source: j,
              code: D,
              guildScheduledEvent: y,
              disabled: G,
            } = e,
            { maxAge: V, maxUses: O, networkError: U, showVanityURL: b } = d,
            B = a.useCallback(() => {
              (0, h.copy)(L),
                f.default.track(N.AnalyticEvents.COPY_INSTANT_INVITE, {
                  server: c.default.getGuildId(),
                  channel: null == M ? void 0 : M.id,
                  channel_type: null == M ? void 0 : M.type,
                  location: j,
                  code: D,
                  guild_scheduled_event_id: null == y ? void 0 : y.id,
                });
            }, [L, M, j, D, y]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(p, { value: L, autoFocus: s, onCopy: B, disabled: G }),
              E
                ? (0, l.jsx)("div", {
                    className: g.temporaryMembershipContainerBackground,
                    children: (0, l.jsx)(o.FormSwitch, {
                      className: g.temporaryMembershipContainer,
                      value: (0, v.hasFlag)(
                        x,
                        r.GuildInviteFlags.IS_GUEST_INVITE
                      ),
                      onChange: e =>
                        C(
                          (0, v.setFlag)(
                            x,
                            r.GuildInviteFlags.IS_GUEST_INVITE,
                            e
                          )
                        ),
                      note: T.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                      disabled: G,
                      hideBorder: !0,
                      children: A
                        ? T.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY
                        : T.default.Messages.GRANT_GUEST_MEMBERSHIP,
                    }),
                  })
                : null,
              n || b
                ? null
                : (0, l.jsxs)(o.Text, {
                    variant: "text-xs/normal",
                    className: i(S.marginTop8, g.footerText),
                    children: [
                      (0, _.maxAgeString)(V, O),
                      " ",
                      s
                        ? (0, l.jsx)(o.Anchor, {
                            onClick: () =>
                              R(m.InstantInviteModalPages.SETTINGS),
                            children: T.default.Messages.INVITE_EDIT_LINK,
                          })
                        : null,
                    ],
                  }),
              !n && s && b
                ? (0, l.jsxs)(o.Text, {
                    variant: "text-xs/normal",
                    className: i(S.marginTop8, g.footerText),
                    children: [
                      T.default.Messages.INVITE_VANITY_USED,
                      " ",
                      (0, l.jsx)(o.Anchor, {
                        onClick: () => R(m.InstantInviteModalPages.SETTINGS),
                        children: T.default.Messages.INVITE_EDIT_LINK,
                      }),
                    ],
                  })
                : null,
              null != U
                ? (0, l.jsx)(I.InviteErrorMessage, {
                    guild: t,
                    error: U,
                    onClose: u,
                  })
                : null,
            ],
          });
        };
    },
    865699: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          InviteErrorMessage: function () {
            return c;
          },
        });
      var l = n("37983"),
        a = n("884691"),
        s = n("77078"),
        i = n("592407"),
        r = n("957255"),
        u = n("49111"),
        d = n("782340"),
        o = n("696862");
      function c(e) {
        let { guild: t, error: n, onClose: c } = e,
          E = t.id,
          f = a.useCallback(() => {
            c(), i.default.open(E, u.GuildSettingsSections.INSTANT_INVITES);
          }, [E, c]),
          h = a.useCallback(
            e =>
              (0, l.jsx)(s.Clickable, {
                className: o.errorLink,
                onClick: f,
                children: (0, l.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [f]
          ),
          v = a.useCallback(
            e =>
              (0, l.jsx)(s.Anchor, {
                href: u.MarketingURLs.INVITES_HELP,
                target: "_blank",
                children: (0, l.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            []
          ),
          _ =
            n.code !== u.AbortCodes.TOO_MANY_INVITES
              ? n.getAnyErrorMessage()
              : r.default.can(u.Permissions.MANAGE_GUILD, t)
                ? d.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: h,
                    inviteHelpHook: v,
                  })
                : d.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
        return (0, l.jsx)(s.Text, {
          className: o.errorMessage,
          variant: "text-xs/normal",
          color: "text-danger",
          children: _,
        });
      }
    },
    119184: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("782340"),
        r = n("662190"),
        u = n("284434"),
        d = n("315956");
      function o(e) {
        let { className: t, children: n } = e;
        return (0, l.jsxs)("div", {
          className: s(r.container, t),
          children: [
            (0, l.jsx)("img", {
              alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: d,
              className: s(r.sparkleIcon, r.sparkleBottom),
            }),
            n,
            (0, l.jsx)("img", {
              alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: u,
              className: s(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    683911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("77078"),
        r = n("258078"),
        u = n("641286");
      function d(e) {
        let { steps: t, stepIndex: n, onClick: a } = e;
        return (0, l.jsx)("div", {
          className: u.container,
          children: t.map((e, t) => {
            let d = n === t;
            return (0, l.jsxs)(
              i.Clickable,
              {
                onClick: () => a(t),
                className: u.stepContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: s(u.progressBar, { [u.selectedProgressBar]: d }),
                  }),
                  (0, l.jsx)(r.default, {
                    color: d ? r.default.Colors.BRAND : r.default.Colors.MUTED,
                    size: r.default.Sizes.SIZE_12,
                    children: e,
                  }),
                ],
              },
              e
            );
          }),
        });
      }
    },
    191814: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      function a(e) {
        let { size: t, horizontal: n = !1 } = e,
          a = n ? t : 1,
          s = n ? 1 : t;
        return (0, l.jsx)("span", {
          style: {
            display: "block",
            width: a,
            minWidth: a,
            height: s,
            minHeight: s,
          },
        });
      }
      n("884691");
    },
    328275: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("833222"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 32,
              height: n = 32,
              color: a = "currentColor",
              ...s
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, l.jsx)("clipPath", {
                  children: (0, l.jsx)("path", { d: "m.000183 0h16v16h-16z" }),
                }),
                (0, l.jsx)("g", {
                  clipPath: "url(#a)",
                  children: (0, l.jsx)("path", {
                    d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                    fill: a,
                  }),
                }),
              ],
            });
          },
          s.DenyIcon,
          void 0,
          { size: 32 }
        );
    },
    461380: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("414456"),
        s = n.n(a),
        i = n("384737"),
        r = n("448052"),
        u = n("748802"),
        d = n("260792"),
        o = n("77078"),
        c = n("75196"),
        E = n("366842");
      let f = {
          UP: E.directionUp,
          RIGHT: E.directionRight,
          DOWN: E.directionDown,
          LEFT: E.directionLeft,
        },
        h = e => {
          let {
              direction: t = f.DOWN,
              width: n = 24,
              height: a = 24,
              color: h = "currentColor",
              transition: v = E.transition,
              className: _,
              foreground: I,
              expanded: m,
              ...N
            } = e,
            { enabled: T } = (0, o.useRedesignIconContext)(),
            g = t;
          if ((!0 === m ? (g = f.DOWN) : !1 === m && (g = f.RIGHT), T)) {
            let e = {
              [f.UP]: d.ChevronSmallUpIcon,
              [f.DOWN]: i.ChevronSmallDownIcon,
              [f.LEFT]: r.ChevronSmallLeftIcon,
              [f.RIGHT]: u.ChevronSmallRightIcon,
            }[g];
            return (0, l.jsx)(e, {
              ...N,
              className: _,
              width: n,
              height: a,
              color: h,
              colorClass: I,
            });
          }
          return (0, l.jsx)("svg", {
            className: s(_, v, g),
            width: n,
            height: a,
            viewBox: "0 0 24 24",
            ...(0, c.default)(N),
            children: (0, l.jsx)("path", {
              className: I,
              fill: "none",
              stroke: h,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M7 10L12 15 17 10",
              "aria-hidden": !0,
            }),
          });
        };
      h.Directions = f;
      var v = h;
    },
    832132: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("504318"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              color: t = "currentColor",
              height: n = 24,
              width: a = 24,
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(s),
              width: a,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                fill: t,
              }),
            });
          },
          s.PencilIcon,
          void 0,
          { size: 24 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("469563"),
        i = n("163725"),
        r = n("75196"),
        u = (0, s.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: s = "currentColor",
              foregroundColor: i = a.default.unsafe_rawColors.RED_400.css,
              foreground: u,
              background: d,
              ...o
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, r.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("rect", {
                  fill: i,
                  className: u,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, l.jsx)("path", {
                  fill: s,
                  className: d,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          i.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    818643: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        s = n("851298"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              ...s
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                  fill: a,
                }),
                (0, l.jsx)("path", {
                  d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                  fill: a,
                }),
              ],
            });
          },
          s.ImagePlusIcon,
          void 0,
          { size: 24 }
        );
    },
    543289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function s(e) {
        let { width: t = 104, height: n = 80, ...s } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.default)(s),
          width: t,
          height: n,
          viewBox: "0 0 104 80",
          fill: "none",
          children: [
            (0, l.jsx)("path", {
              d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
              fill: "#ADF3FF",
            }),
            (0, l.jsx)("path", {
              d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
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
      var a = n("469563"),
        s = n("304983"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                fill: a,
                className: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z",
              }),
            });
          },
          s.MoreHorizontalIcon,
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
      var a = n("469563"),
        s = n("811513"),
        i = n("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: s,
              ...r
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(r),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z",
                }),
                (0, l.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z",
                }),
              ],
            });
          },
          s.GroupIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return i;
          },
          copy: function () {
            return r;
          },
        }),
        n("70102");
      var l = n("281071"),
        a = n("773336"),
        s = n("50885");
      let i = (() => {
        if (a.isPlatformEmbedded) return null != s.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function r(e) {
        return (
          !!i && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    686904: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }),
        n("222007");
      var l = n("884691"),
        a = n("448993");
      function s(e, t) {
        let [n, s] = l.useState(!1),
          [i, r] = l.useState(null),
          u = async () => {
            s(!0), r(null);
            try {
              let t = await e();
              return s(!1), r(null), t;
            } catch (n) {
              let e = new a.APIError(n);
              return null == t || t(e), r(e), s(!1), null;
            }
          };
        return [u, { loading: n, error: i }];
      }
    },
    866190: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsWindowFocused: function () {
            return r;
          },
        });
      var l = n("884691"),
        a = n("446674"),
        s = n("244201"),
        i = n("471671");
      function r() {
        let { windowId: e } = l.useContext(s.default);
        return (0, a.useStateFromStores)(
          [i.default],
          () => i.default.isFocused(e),
          [e]
        );
      }
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: r,
            }),
          ],
        });
      };
    },
    430143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GroupIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
            className: r,
          }),
        });
      };
    },
    499779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImagePlusIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
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
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
    28289: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TrophyIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        s = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...u
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, s.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            fillRule: "evenodd",
            d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
    498574: function (e, t, n) {
      "use strict";
      var l, a;
      n.r(t),
        n.d(t, {
          GuildInviteFlags: function () {
            return l;
          },
        }),
        n("222007"),
        ((a = l || (l = {}))[(a.IS_GUEST_INVITE = 1)] = "IS_GUEST_INVITE"),
        (a[(a.IS_VIEWED = 2)] = "IS_VIEWED"),
        (a[(a.IS_ENHANCED = 4)] = "IS_ENHANCED");
    },
    281071: function (e, t, n) {
      "use strict";
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          l = window.getSelection(),
          a = document.createElement("textarea");
        (a.value = e),
          (a.contentEditable = "true"),
          (a.style.visibility = "none"),
          t.appendChild(a),
          n.selectNodeContents(a),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          a.focus(),
          a.setSelectionRange(0, e.length);
        let s = document.execCommand("copy");
        return t.removeChild(a), s;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return l;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=f82f9004156da764c2bb.js.map

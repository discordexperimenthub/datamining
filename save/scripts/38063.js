(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38063"],
  {
    766665: function (e, t, n) {
      var r = n("424498");
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    69448: function (e, t, n) {
      "use strict";
      e.exports = n.p + "f6da6e7ed1d57e445d0e.svg";
    },
    163725: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("962821");
      n.es(r, t);
    },
    889014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n("446674"),
        a = n("76393");
      function i() {
        return (0, r.useStateFromStores)(
          [a.default],
          () =>
            null != a.default.getRemoteSessionId() ||
            null != a.default.getAwaitingRemoteSessionInfo()
        );
      }
    },
    413266: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openReportRaidModal: function () {
            return i;
          },
          openSafetyChannelSetupModal: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("77078");
      function i(e) {
        (0, a.openModalLazy)(async () => {
          let { default: t } = await n.el("423588").then(n.bind(n, "423588"));
          return n => (0, r.jsx)(t, { ...n, guildId: e });
        });
      }
      function u(e) {
        (0, a.openModalLazy)(async () => {
          let { default: t } = await n.el("982537").then(n.bind(n, "982537"));
          return n => (0, r.jsx)(t, { ...n, guildId: e });
        });
      }
    },
    701203: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanReportRaid: function () {
            return d;
          },
          useCanEnableRaidAlerts: function () {
            return f;
          },
        });
      var r = n("884691"),
        a = n("446674");
      n("926809");
      var i = n("957255"),
        u = n("610174"),
        o = n("413476"),
        s = n("311161"),
        l = n("54346"),
        c = n("49111");
      function d(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : c.EMPTY_STRING_SNOWFLAKE_ID,
          { enableRaidReporting: u } = o.ReportRaidExperiment.useExperiment(
            { guildId: n, location: "4467c7_1" },
            { autoTrackExposure: !1 }
          ),
          d = (0, a.useStateFromStores)(
            [i.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.default;
                return (
                  t.can(c.Permissions.BAN_MEMBERS, e) ||
                  t.can(c.Permissions.KICK_MEMBERS, e) ||
                  t.can(c.Permissions.MANAGE_GUILD, e)
                );
              })(e, i.default),
            [e]
          ),
          f = (0, a.useStateFromStores)(
            [l.default],
            () => (null != e ? l.default.getGuildIncident(e.id) : null),
            [e]
          ),
          h = null != f && (0, s.hasDetectedActivity)(f);
        return (
          r.useEffect(() => {
            !h &&
              d &&
              o.ReportRaidExperiment.trackExposure({
                guildId: n,
                location: "4467c7_2",
              });
          }, [h, d, n]),
          !h && d && u
        );
      }
      function f(e) {
        var t;
        let n =
            null !== (t = null == e ? void 0 : e.id) && void 0 !== t
              ? t
              : c.EMPTY_STRING_SNOWFLAKE_ID,
          r = (0, a.useStateFromStores)(
            [i.default],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.default;
                return t.can(c.Permissions.MANAGE_GUILD, e);
              })(e, i.default),
            [e]
          ),
          { enableRaidAlerts: s } = o.RaidAlertExperiment.useExperiment(
            { guildId: n, location: "4467c7_3" },
            { autoTrackExposure: r }
          ),
          { showAlertMode: l } = (0, u.useGuildAlertModeEnabled)(n);
        return r && (s || l);
      }
    },
    689226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getRoleIconData: function () {
            return d;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return E;
          },
          canGuildUseRoleIcons: function () {
            return m;
          },
        }),
        n("781738");
      var r = n("867805"),
        a = n("407063"),
        i = n("315102"),
        u = n("773336"),
        o = n("49111");
      let s = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        l = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, u.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? r.default.getByName(
                  r.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: h(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())
            )
          ),
        h = (e, t) => {
          let { id: n, icon: r } = e;
          if (null == r) return;
          if (r.startsWith("data:")) return r;
          let u = i.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(s, "/")
                .concat(n, "/")
                .concat(r, ".")
                .concat(u, "?")
                .concat(d)
                .concat(f)
            : "".concat(l).concat(o.Endpoints.ROLE_ICON(n, r), "?").concat(d);
        },
        E = e =>
          e.startsWith(s) ||
          (e.startsWith("".concat(l, "/roles")) && e.includes("/icons/")),
        m = (e, t) => {
          var n;
          let r =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return r || e.features.has(o.GuildFeatures.ROLE_ICONS);
        };
    },
    199938: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          staffOnlyGuildSettingsAccess: function () {
            return s;
          },
          useGuildAccessRateInsightExperiment: function () {
            return l;
          },
        });
      var r = n("884691"),
        a = n("862205"),
        i = n("697218"),
        u = n("49111");
      let o = (0, a.createExperiment)({
        kind: "guild",
        id: "2022-03_guild_access_rate_insight_experiment",
        label: "Guild Access Rate Insight Experiment",
        defaultConfig: { showAccessRate: !1 },
        treatments: [
          {
            id: 1,
            label: "Show guild access rate in insights",
            config: { showAccessRate: !0 },
          },
        ],
      });
      function s(e) {
        var t;
        let n =
          null === (t = i.default.getCurrentUser()) || void 0 === t
            ? void 0
            : t.isStaff();
        return (
          n &&
          o.getCurrentConfig({ guildId: e, location: "77b4b2_1" })
            .showAccessRate
        );
      }
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          r.useEffect(() => {
            !t &&
              null != e &&
              o.trackExposure({ guildId: e, location: "77b4b2_2" });
          }, [e, t]),
          o.useExperiment(
            {
              guildId: null != e ? e : u.EMPTY_STRING_SNOWFLAKE_ID,
              location: "77b4b2_3",
            },
            { autoTrackExposure: !1, disable: t || null == e }
          )
        );
      }
    },
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return v;
          },
          useCanStartPublicThread: function () {
            return _;
          },
          computeCanStartPublicThread: function () {
            return A;
          },
          useCanStartPrivateThread: function () {
            return p;
          },
          useCanStartThread: function () {
            return g;
          },
          useCanViewThreadForMessage: function () {
            return R;
          },
          useHasActiveThreads: function () {
            return C;
          },
          useCanManageThread: function () {
            return I;
          },
          useCanUnarchiveThread: function () {
            return M;
          },
          canUnarchiveThread: function () {
            return P;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return b;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return y;
          },
          computeIsReadOnlyThread: function () {
            return w;
          },
          useIsThreadModerator: function () {
            return D;
          },
          useCanJoinThreadVoice: function () {
            return O;
          },
          useIsNonModInLockedThread: function () {
            return F;
          },
        });
      var r = n("917351"),
        a = n.n(r),
        i = n("316693"),
        u = n("446674"),
        o = n("296892"),
        s = n("889014"),
        l = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        E = n("299039"),
        m = n("401690"),
        S = n("49111");
      let v = (0, o.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function _(e, t) {
        let n = (0, u.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? S.Permissions.SEND_MESSAGES
              : i.combine(
                  S.Permissions.CREATE_PUBLIC_THREADS,
                  S.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return T(n, e, t);
      }
      function A(e, t) {
        let n = e.isForumLikeChannel()
            ? S.Permissions.SEND_MESSAGES
            : i.combine(
                S.Permissions.CREATE_PUBLIC_THREADS,
                S.Permissions.READ_MESSAGE_HISTORY
              ),
          r = h.default.can(n, e);
        return T(r, e, t);
      }
      function p(e) {
        let t = (0, u.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(i.combine(S.Permissions.CREATE_PRIVATE_THREADS), e),
          [e]
        );
        return e.type === S.ChannelTypes.GUILD_TEXT && T(t, e);
      }
      function g(e) {
        let t = _(e),
          n = p(e);
        return t || n;
      }
      function T(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(S.MessageFlags.HAS_THREAD) || (0, l.default)(n)))
          ) && !0
        );
      }
      function R(e) {
        let t = (0, u.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(E.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, u.useStateFromStores)(
            [h.default],
            () => h.default.can(S.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(S.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function C(e) {
        return (0, u.useStateFromStoresObject)([m.default, h.default], () => {
          let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            i = a(n).some(e =>
              h.default.can(S.Permissions.VIEW_CHANNEL, e.channel)
            ),
            u = a(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(S.Permissions.VIEW_CHANNEL, e.channel)
            ),
            o = a(r).some(e => h.default.can(S.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: i || u || o,
            hasMoreActiveThreads: o || u,
          };
        });
      }
      function I(e) {
        let t = (0, u.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, u.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(S.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          r = (0, u.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)))
        );
      }
      function N(e, t) {
        return null != e && t.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function x(e, t, n) {
        var r;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked)
            ? n
            : t)
        );
      }
      function M(e) {
        let t = (0, u.useStateFromStores)([h.default], () => N(e, h.default)),
          n = D(e);
        return x(e, t, n);
      }
      function P(e) {
        let t = N(e, h.default),
          n = (function (e) {
            return L(e, h.default);
          })(e);
        return x(e, t, n);
      }
      function b(e) {
        var t;
        let n = (0, u.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)
        );
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              n))
        );
      }
      function y(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function w(e) {
        let t = h.default.can(S.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function L(e, t) {
        return null != e && t.can(S.Permissions.MANAGE_THREADS, e);
      }
      function D(e) {
        return (0, u.useStateFromStores)([h.default], () => L(e, h.default));
      }
      function O(e) {
        let t = (0, s.default)(),
          n = (0, u.useStateFromStores)([h.default], () =>
            h.default.can(S.Permissions.CONNECT, e)
          ),
          r = b(e),
          a = v.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && a && n && r;
      }
      function F(e) {
        let t = D(e);
        return e.isLockedThread() && !t;
      }
    },
    555158: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HelpMessageTypes: function () {
            return a;
          },
          default: function () {
            return E;
          },
        });
      var r,
        a,
        i = n("37983");
      n("884691");
      var u = n("414456"),
        o = n.n(u),
        s = n("77078"),
        l = n("36694"),
        c = n("381546"),
        d = n("68238"),
        f = n("423487"),
        h = n("950038");
      ((r = a || (a = {}))[(r.WARNING = 0)] = "WARNING"),
        (r[(r.INFO = 1)] = "INFO"),
        (r[(r.ERROR = 2)] = "ERROR"),
        (r[(r.POSITIVE = 3)] = "POSITIVE");
      var E = function (e) {
        let {
            children: t,
            messageType: n,
            className: r,
            textColor: a = "text-normal",
            textVariant: u = "text-sm/medium",
          } = e,
          E = (function (e) {
            switch (e) {
              case 0:
                return f.default;
              case 1:
                return d.default;
              case 2:
                return c.default;
              case 3:
                return l.default;
            }
          })(n),
          m = (function (e) {
            switch (e) {
              case 0:
                return h.warning;
              case 1:
                return h.info;
              case 2:
                return h.error;
              case 3:
                return h.positive;
            }
          })(n);
        return (0, i.jsxs)("div", {
          className: o(h.container, m, r),
          children: [
            (0, i.jsx)("div", {
              className: h.iconDiv,
              children: (0, i.jsx)(E, { className: h.icon }),
            }),
            (0, i.jsx)(s.Text, {
              className: h.text,
              color: a,
              variant: u,
              children: t,
            }),
          ],
        });
      };
    },
    756609: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("308472"),
        u = n("75196"),
        o = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 18,
              height: n = 18,
              color: a = "currentColor",
              foreground: i,
              ...o
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, u.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 18 18",
              children: [
                (0, r.jsx)("path", {
                  fill: a,
                  className: i,
                  d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z",
                }),
                (0, r.jsx)("path", {
                  fill: a,
                  className: i,
                  d: "M6.75,4.5H5.25v6h1.5Z",
                }),
                (0, r.jsx)("path", {
                  fill: a,
                  className: i,
                  d: "M9.75,7.5H8.25v3h1.5Z",
                }),
                (0, r.jsx)("path", {
                  fill: a,
                  className: i,
                  d: "M12.75,6h-1.5v4.5h1.5Z",
                }),
              ],
            });
          },
          i.AnalyticsIcon,
          void 0,
          { size: 18 }
        );
    },
    867544: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("469563"),
        u = n("163725"),
        o = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foregroundColor: u = a.default.unsafe_rawColors.RED_400.css,
              foreground: s,
              background: l,
              ...c
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, o.default)(c),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("rect", {
                  fill: u,
                  className: s,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, r.jsx)("path", {
                  fill: i,
                  className: l,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z",
                }),
              ],
            });
          },
          u.EyeSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return u;
          },
          copy: function () {
            return o;
          },
        }),
        n("70102");
      var r = n("281071"),
        a = n("773336"),
        i = n("50885");
      let u = (() => {
        if (a.isPlatformEmbedded) return null != i.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function o(e) {
        return (
          !!u && (a.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
        );
      }
    },
    962821: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeSlashIcon: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("82169");
      let u = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: u = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...s
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: o,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: o,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
              className: o,
            }),
          ],
        });
      };
    },
    281071: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          r = window.getSelection(),
          a = document.createElement("textarea");
        (a.value = e),
          (a.contentEditable = "true"),
          (a.style.visibility = "none"),
          t.appendChild(a),
          n.selectNodeContents(a),
          null == r || r.removeAllRanges(),
          null == r || r.addRange(n),
          a.focus(),
          a.setSelectionRange(0, e.length);
        let i = document.execCommand("copy");
        return t.removeChild(a), i;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return r;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=6f018a09869187d82de2.js.map

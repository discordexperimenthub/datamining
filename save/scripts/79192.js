(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79192"],
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
            return u;
          },
        });
      var r = n("446674"),
        a = n("76393");
      function u() {
        return (0, r.useStateFromStores)(
          [a.default],
          () =>
            null != a.default.getRemoteSessionId() ||
            null != a.default.getAwaitingRemoteSessionInfo()
        );
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
            return S;
          },
          canGuildUseRoleIcons: function () {
            return m;
          },
        }),
        n("781738");
      var r = n("867805"),
        a = n("407063"),
        u = n("315102"),
        i = n("773336"),
        o = n("49111");
      let s = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        l = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, i.isAndroid)(),
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
          let i = u.SUPPORTS_WEBP ? "webp" : "png",
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
                .concat(i, "?")
                .concat(d)
                .concat(f)
            : "".concat(l).concat(o.Endpoints.ROLE_ICON(n, r), "?").concat(d);
        },
        S = e =>
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
    300322: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VoiceInThreadsExperiment: function () {
            return v;
          },
          useCanStartPublicThread: function () {
            return T;
          },
          computeCanStartPublicThread: function () {
            return _;
          },
          useCanStartPrivateThread: function () {
            return A;
          },
          useCanStartThread: function () {
            return C;
          },
          useCanViewThreadForMessage: function () {
            return p;
          },
          useHasActiveThreads: function () {
            return N;
          },
          useCanManageThread: function () {
            return R;
          },
          useCanUnarchiveThread: function () {
            return M;
          },
          canUnarchiveThread: function () {
            return y;
          },
          useIsActiveChannelOrUnarchivableThread: function () {
            return x;
          },
          getIsActiveChannelOrUnarchivableThread: function () {
            return w;
          },
          computeIsReadOnlyThread: function () {
            return D;
          },
          useIsThreadModerator: function () {
            return b;
          },
          useCanJoinThreadVoice: function () {
            return L;
          },
          useIsNonModInLockedThread: function () {
            return F;
          },
        });
      var r = n("917351"),
        a = n.n(r),
        u = n("316693"),
        i = n("446674"),
        o = n("296892"),
        s = n("889014"),
        l = n("913491"),
        c = n("233069"),
        d = n("271938"),
        f = n("42203"),
        h = n("957255"),
        S = n("299039"),
        m = n("401690"),
        E = n("49111");
      let v = (0, o.default)({
        id: "2022-07_voice_in_threads",
        label: "Voice in Threads",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function T(e, t) {
        let n = (0, i.useStateFromStores)(
          [h.default],
          () => {
            let t = e.isForumLikeChannel()
              ? E.Permissions.SEND_MESSAGES
              : u.combine(
                  E.Permissions.CREATE_PUBLIC_THREADS,
                  E.Permissions.READ_MESSAGE_HISTORY
                );
            return h.default.can(t, e);
          },
          [e]
        );
        return g(n, e, t);
      }
      function _(e, t) {
        let n = e.isForumLikeChannel()
            ? E.Permissions.SEND_MESSAGES
            : u.combine(
                E.Permissions.CREATE_PUBLIC_THREADS,
                E.Permissions.READ_MESSAGE_HISTORY
              ),
          r = h.default.can(n, e);
        return g(r, e, t);
      }
      function A(e) {
        let t = (0, i.useStateFromStores)(
          [h.default],
          () =>
            h.default.can(u.combine(E.Permissions.CREATE_PRIVATE_THREADS), e),
          [e]
        );
        return e.type === E.ChannelTypes.GUILD_TEXT && g(t, e);
      }
      function C(e) {
        let t = T(e),
          n = A(e);
        return t || n;
      }
      function g(e, t, n) {
        return (
          !(
            __OVERLAY__ ||
            !e ||
            !c.THREADED_CHANNEL_TYPES.has(t.type) ||
            (null != n &&
              (n.hasFlag(E.MessageFlags.HAS_THREAD) || (0, l.default)(n)))
          ) && !0
        );
      }
      function p(e) {
        let t = (0, i.useStateFromStores)(
            [f.default],
            () =>
              f.default.getChannel(S.default.castMessageIdAsChannelId(e.id)),
            [e]
          ),
          n = (0, i.useStateFromStores)(
            [h.default],
            () => h.default.can(E.Permissions.VIEW_CHANNEL, t),
            [t]
          );
        return (function (e, t, n) {
          return (
            (!!t.hasFlag(E.MessageFlags.HAS_THREAD) && null != n && !!e) || !1
          );
        })(n, e, t);
      }
      function N(e) {
        return (0, i.useStateFromStoresObject)([m.default, h.default], () => {
          let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = m.default.getActiveJoinedRelevantThreadsForParent(
              e.guild_id,
              e.id
            ),
            r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            u = a(n).some(e =>
              h.default.can(E.Permissions.VIEW_CHANNEL, e.channel)
            ),
            i = a(t).some(
              e =>
                !(e.channel.id in n) &&
                h.default.can(E.Permissions.VIEW_CHANNEL, e.channel)
            ),
            o = a(r).some(e => h.default.can(E.Permissions.VIEW_CHANNEL, e));
          return {
            hasActiveThreads: u || i || o,
            hasMoreActiveThreads: o || i,
          };
        });
      }
      function R(e) {
        let t = (0, i.useStateFromStores)([f.default], () =>
            f.default.getChannel(null == e ? void 0 : e.parent_id)
          ),
          n = (0, i.useStateFromStores)(
            [h.default],
            () => null != t && h.default.can(E.Permissions.MANAGE_THREADS, t),
            [t]
          ),
          r = (0, i.useStateFromStores)([d.default], () => d.default.getId());
        return (
          !!(null != e && null != t && e.isThread()) &&
          (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)))
        );
      }
      function I(e, t) {
        return null != e && t.can(E.Permissions.SEND_MESSAGES_IN_THREADS, e);
      }
      function P(e, t, n) {
        var r;
        return (
          !!(null != e && e.isThread()) &&
          ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked)
            ? n
            : t)
        );
      }
      function M(e) {
        let t = (0, i.useStateFromStores)([h.default], () => I(e, h.default)),
          n = b(e);
        return P(e, t, n);
      }
      function y(e) {
        let t = I(e, h.default),
          n = (function (e) {
            return O(e, h.default);
          })(e);
        return P(e, t, n);
      }
      function x(e) {
        var t;
        let n = (0, i.useStateFromStores)(
          [h.default],
          () =>
            null != e &&
            h.default.can(E.Permissions.SEND_MESSAGES_IN_THREADS, e)
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
      function w(e) {
        var t;
        return (
          null != e &&
          (!e.isThread() ||
            e.isActiveThread() ||
            (e.isArchivedThread() &&
              (null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.locked) !== !0 &&
              h.default.can(E.Permissions.SEND_MESSAGES_IN_THREADS, e)))
        );
      }
      function D(e) {
        let t = h.default.can(E.Permissions.MANAGE_THREADS, e);
        return e.isArchivedLockedThread() && !t;
      }
      function O(e, t) {
        return null != e && t.can(E.Permissions.MANAGE_THREADS, e);
      }
      function b(e) {
        return (0, i.useStateFromStores)([h.default], () => O(e, h.default));
      }
      function L(e) {
        let t = (0, s.default)(),
          n = (0, i.useStateFromStores)([h.default], () =>
            h.default.can(E.Permissions.CONNECT, e)
          ),
          r = x(e),
          a = v.useExperiment(
            { guildId: e.guild_id, location: "e791ea_1" },
            { autoTrackExposure: !1 }
          ).enabled;
        return !t && e.isVocalThread() && a && n && r;
      }
      function F(e) {
        let t = b(e);
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
            return S;
          },
        });
      var r,
        a,
        u = n("37983");
      n("884691");
      var i = n("414456"),
        o = n.n(i),
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
      var S = function (e) {
        let {
            children: t,
            messageType: n,
            className: r,
            textColor: a = "text-normal",
            textVariant: i = "text-sm/medium",
          } = e,
          S = (function (e) {
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
        return (0, u.jsxs)("div", {
          className: o(h.container, m, r),
          children: [
            (0, u.jsx)("div", {
              className: h.iconDiv,
              children: (0, u.jsx)(S, { className: h.icon }),
            }),
            (0, u.jsx)(s.Text, {
              className: h.text,
              color: a,
              variant: i,
              children: t,
            }),
          ],
        });
      };
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
        u = n("469563"),
        i = n("163725"),
        o = n("75196"),
        s = (0, u.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: u = "currentColor",
              foregroundColor: i = a.default.unsafe_rawColors.RED_400.css,
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
                  fill: i,
                  className: s,
                  x: "2",
                  y: "21.2154",
                  width: "26",
                  height: "2",
                  transform: "rotate(-45 2 21.2154)",
                }),
                (0, r.jsx)("path", {
                  fill: u,
                  className: l,
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
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return i;
          },
          copy: function () {
            return o;
          },
        }),
        n("70102");
      var r = n("281071"),
        a = n("773336"),
        u = n("50885");
      let i = (() => {
        if (a.isPlatformEmbedded) return null != u.default.copy;
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
          !!i && (a.isPlatformEmbedded ? (u.default.copy(e), !0) : r.copy(e))
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
      var r = n("37983");
      n("884691");
      var a = n("669491"),
        u = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...s
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, u.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
              className: o,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
              className: o,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
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
        let u = document.execCommand("copy");
        return t.removeChild(a), u;
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
//# sourceMappingURL=6518a4e479902b99e0d8.js.map

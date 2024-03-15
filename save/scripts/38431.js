(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38431"],
  {
    767590: function (e, t, n) {
      var a = n("890022"),
        i = n("566040"),
        l = n("846165"),
        r = Math.ceil,
        s = Math.max;
      e.exports = function (e, t, n) {
        t = (n ? i(e, t, n) : void 0 === t) ? 1 : s(l(t), 0);
        var u = null == e ? 0 : e.length;
        if (!u || t < 1) return [];
        for (var o = 0, d = 0, c = Array(r(u / t)); o < u; )
          c[d++] = a(e, o, (o += t));
        return c;
      };
    },
    846165: function (e, t, n) {
      var a = n("323033");
      e.exports = function (e) {
        var t = a(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
    },
    397613: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ErrorBoundary: function () {
            return r;
          },
        }),
        n("70102"),
        n("222007");
      var a = n("884691");
      let i = (0, a.createContext)(null),
        l = { didCatch: !1, error: null };
      class r extends a.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, a = arguments.length, i = Array(a), r = 0;
              r < a;
              r++
            )
              i[r] = arguments[r];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: i, reason: "imperative-api" }),
              this.setState(l);
          }
        }
        componentDidCatch(e, t) {
          var n, a;
          null === (n = (a = this.props).onError) ||
            void 0 === n ||
            n.call(a, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: a } = this.props;
          if (
            n &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
              );
            })(e.resetKeys, a)
          ) {
            var i, r;
            null === (i = (r = this.props).onReset) ||
              void 0 === i ||
              i.call(r, { next: a, prev: e.resetKeys, reason: "keys" }),
              this.setState(l);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: l,
            } = this.props,
            { didCatch: r, error: s } = this.state,
            u = e;
          if (r) {
            let e = { error: s, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, a.isValidElement)(l)) u = l;
            else if ("function" == typeof t) u = t(e);
            else if (n) u = (0, a.createElement)(n, e);
            else throw s;
          }
          return (0, a.createElement)(
            i.Provider,
            {
              value: {
                didCatch: r,
                error: s,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            u
          );
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = l);
        }
      }
    },
    111633: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t, n;
        return (e = String(e).toLowerCase()).length < 3
          ? e
          : (121 === e.charCodeAt(0) && ((t = !0), (e = "Y" + e.substr(1))),
            I.test(e)
              ? (e = e.substr(0, e.length - 2))
              : S.test(e) && (e = e.substr(0, e.length - 1)),
            (n = x.exec(e))
              ? u.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = g.exec(e)) &&
                c.test(n[1]) &&
                ((e = n[1]),
                m.test(e)
                  ? (e += "e")
                  : b.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"),
            (n = y.exec(e)) && u.test(n[1]) && (e = n[1] + a[n[2]]),
            (n = C.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]),
            (n = M.exec(e))
              ? d.test(n[1]) && (e = n[1])
              : (n = v.exec(e)) && d.test(n[1]) && (e = n[1]),
            (n = h.exec(e)) &&
              (d.test(n[1]) || (o.test(n[1]) && !f.test(n[1]))) &&
              (e = n[1]),
            p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var a = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        i = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        l = "[aeiouy]",
        r = "([^aeiou][^aeiouy]*)",
        s = "(" + l + "[aeiou]*)",
        u = RegExp("^" + r + "?" + s + r),
        o = RegExp("^" + r + "?" + s + r + s + "?$"),
        d = RegExp("^" + r + "?(" + s + r + "){2,}"),
        c = RegExp("^" + r + "?" + l),
        f = RegExp("^" + r + l + "[^aeiouwxy]$"),
        p = /ll$/,
        h = /^(.+?)e$/,
        E = /^(.+?)y$/,
        v = /^(.+?(s|t))(ion)$/,
        g = /^(.+?)(ed|ing)$/,
        m = /(at|bl|iz)$/,
        x = /^(.+?)eed$/,
        S = /^.+?[^s]s$/,
        I = /^.+?(ss|i)es$/,
        b = /([^aeiouylsz])\1$/,
        y = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        M = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("70102");
      var a = n("884691");
      function i() {
        let e = (0, a.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: i, children: l } = t,
              r = (0, a.useRef)();
            return (
              !r.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !i && (i = () => n)),
                (r.current = i())),
              (0, a.createElement)(e.Provider, { value: r.current }, l)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              i = (0, a.useContext)(e);
            if (!i)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return i(t, n);
          },
          useStoreApi: () => {
            let t = (0, a.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, a.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t]
            );
          },
        };
      }
    },
    327241: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("272030"),
        r = n("838446"),
        s = n("158534"),
        u = n("846883"),
        o = n("812204"),
        d = n("861370"),
        c = n("20209"),
        f = n("972701"),
        p = n("390008"),
        h = n("41205"),
        E = n("936947"),
        v = n("47495"),
        g = n("715243"),
        m = n("458574"),
        x = n("963150"),
        S = n("308798"),
        I = n("47006"),
        b = n("878526"),
        y = n("44141"),
        C = n("531674"),
        M = n("619436"),
        N = n("625399"),
        A = n("731390"),
        _ = n("339876"),
        T = n("49111"),
        R = n("782340");
      function L(e) {
        let { channel: t, onSelect: n } = e,
          r = (0, y.default)(t),
          s = (0, m.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          g = (0, p.default)(t),
          x = (0, h.default)(t),
          S = (0, E.default)(t),
          b = (0, C.default)(t),
          A = (0, M.default)(t),
          _ = (0, I.default)(t),
          T = (0, d.default)({
            id: t.id,
            label: R.default.Messages.COPY_ID_CHANNEL,
          }),
          L = (0, u.default)(t),
          j = (0, N.default)(t),
          D = (0, v.useShouldUseNewNotificationSystem)(
            "ChannelContextFavoritesMenu"
          );
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": R.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: [
            (0, a.jsx)(i.MenuGroup, { children: r }),
            (0, a.jsxs)(i.MenuGroup, { children: [x, S, g, o] }),
            (0, a.jsxs)(i.MenuGroup, { children: [b, D ? j : A] }),
            (0, a.jsx)(i.MenuGroup, { children: _ }),
            (0, a.jsx)(i.MenuGroup, { children: L }),
            (0, a.jsx)(i.MenuGroup, { children: c }),
            (0, a.jsx)(i.MenuGroup, { children: s }),
            (0, a.jsx)(i.MenuGroup, { children: T }),
          ],
        });
      }
      function j(e) {
        let { channel: t, guild: n, onSelect: r } = e,
          s = (0, y.default)(t),
          u = (0, m.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          p = (0, _.default)(t),
          h = (0, C.default)(t),
          E = (0, I.default)(t),
          T = (0, b.default)(t, n),
          L = (0, g.default)(t, n),
          j = (0, x.default)(t, n),
          D = (0, S.default)(t),
          O = (0, d.default)({
            id: t.id,
            label: R.default.Messages.COPY_ID_CHANNEL,
          }),
          G = (0, A.default)(t, "list_text_channel_context_menu"),
          w = (0, M.default)(t),
          B = (0, N.default)(t),
          H = (0, v.useShouldUseNewNotificationSystem)(
            "ChannelContextMenuNormal"
          );
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": R.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: [
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [s, o] },
              "mark-as-read-or-favorite"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [T, p, u, G] },
              "channel-actions"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [h, H ? B : w] },
              "notifications"
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [E, L, j, D] },
              "admin-actions"
            ),
            (0, a.jsx)(i.MenuGroup, { children: c }),
            (0, a.jsx)(i.MenuGroup, { children: O }, "developer-actions"),
          ],
        });
      }
      var D = (0, s.default)(
        (0, r.default)(
          function (e) {
            let t = (0, c.default)();
            return t ? (0, a.jsx)(L, { ...e }) : (0, a.jsx)(j, { ...e });
          },
          { object: T.AnalyticsObjects.CONTEXT_MENU }
        ),
        [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU]
      );
    },
    393027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("803182"),
        i = n("308503"),
        l = n("49111");
      function r(e) {
        let t = (0, a.matchPath)(null != e ? e : "", {
          path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === l.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, a.matchPath)(null != e ? e : "", {
          path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      var s = (0, i.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: a } = r(t);
          e({ path: t, guildId: n, channelId: a });
        },
        resetPath(t) {
          let { guildId: n, channelId: a } = r(t);
          e({ path: null, guildId: n, channelId: a, basePath: t });
        },
      }));
    },
    208021: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("913144"),
        i = n("819689"),
        l = n("115718"),
        r = n("347895"),
        s = n("341329"),
        u = n("582713"),
        o = n("724210"),
        d = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: n,
              baseChannelId: l,
              hasSingleMessageRequest: r,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: l,
              channelId: t,
              details: {
                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: r,
              },
            }),
              null != n
                ? i.default.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                  })
                : s.default.fetchMessages({ channelId: t });
          },
          openChannelAsSidebar(e) {
            let {
              guildId: t,
              channelId: n,
              baseChannelId: r,
              flash: o = !0,
              details: d,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: r,
              channelId: n,
              details: d,
            });
            let c = null == d ? void 0 : d.initialMessageId;
            null != c
              ? i.default.jumpToMessage({
                  channelId: n,
                  messageId: c,
                  flash: o,
                  jumpType: l.JumpTypes.INSTANT,
                })
              : s.default.fetchMessages({ guildId: t, channelId: n });
          },
          openResourceChannelAsSidebar(e) {
            let { guildId: t, channelId: n } = e;
            null != t &&
              ((0, r.selectHomeResourceChannel)(t, n, !1),
              a.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: u.SidebarType.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: o.StaticChannelRoute.GUILD_HOME,
                channelId: n,
              }));
          },
          openThreadAsSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              channelId: r,
              flash: o = !0,
              details: d,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_THREAD,
              baseChannelId: n,
              channelId: r,
              details: d,
            }),
              (null == d ? void 0 : d.initialMessageId) != null
                ? i.default.jumpToMessage({
                    channelId: r,
                    messageId: d.initialMessageId,
                    flash: o,
                    jumpType: l.JumpTypes.INSTANT,
                  })
                : s.default.fetchMessages({ guildId: t, channelId: r });
          },
          closeChannelSidebar(e) {
            a.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              sidebarType: i,
              details: l,
            } = e;
            return a.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: i,
              baseChannelId: n,
              guildId: t,
              details: l,
            });
          },
          closeGuildSidebar(e) {
            a.default.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
          },
        };
    },
    98013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeDesktopDownloadURL: function () {
            return o;
          },
          getPlatformReadableName: function () {
            return c;
          },
          getCurrentPlatformDownloadURL: function () {
            return f;
          },
          getMobileDownloadLink: function () {
            return p;
          },
        });
      var a = n("597755"),
        i = n.n(a),
        l = n("815157"),
        r = n("271938"),
        s = n("49111");
      let u = "linux";
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(s.DownloadLinks.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function d() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = i.os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? u
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function c(e) {
        return { win: "Windows", osx: "Mac", [u]: "Linux" }[d(e)];
      }
      function f() {
        let e = d();
        return o(e, !1, e === u ? "tar.gz" : null);
      }
      function p(e, t, n) {
        let a = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, l.default)(
              null != a
                ? a
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, l.default)(
              null != a ? a : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          default:
            return null != a ? a : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=7d3c499049e8ff656f27.js.map

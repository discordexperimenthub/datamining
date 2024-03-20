(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27999"],
  {
    767590: function (e, t, n) {
      var i = n("890022"),
        r = n("566040"),
        a = n("846165"),
        l = Math.ceil,
        u = Math.max;
      e.exports = function (e, t, n) {
        t = (n ? r(e, t, n) : void 0 === t) ? 1 : u(a(t), 0);
        var o = null == e ? 0 : e.length;
        if (!o || t < 1) return [];
        for (var s = 0, d = 0, c = Array(l(o / t)); s < o; )
          c[d++] = i(e, s, (s += t));
        return c;
      };
    },
    846165: function (e, t, n) {
      var i = n("323033");
      e.exports = function (e) {
        var t = i(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
    },
    397613: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ErrorBoundary: function () {
            return l;
          },
        }),
        n("70102"),
        n("222007");
      var i = n("884691");
      let r = (0, i.createContext)(null),
        a = { didCatch: !1, error: null };
      class l extends i.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, i = arguments.length, r = Array(i), l = 0;
              l < i;
              l++
            )
              r[l] = arguments[l];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: r, reason: "imperative-api" }),
              this.setState(a);
          }
        }
        componentDidCatch(e, t) {
          var n, i;
          null === (n = (i = this.props).onError) ||
            void 0 === n ||
            n.call(i, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
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
            })(e.resetKeys, i)
          ) {
            var r, l;
            null === (r = (l = this.props).onReset) ||
              void 0 === r ||
              r.call(l, { next: i, prev: e.resetKeys, reason: "keys" }),
              this.setState(a);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: a,
            } = this.props,
            { didCatch: l, error: u } = this.state,
            o = e;
          if (l) {
            let e = { error: u, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(a)) o = a;
            else if ("function" == typeof t) o = t(e);
            else if (n) o = (0, i.createElement)(n, e);
            else throw u;
          }
          return (0, i.createElement)(
            r.Provider,
            {
              value: {
                didCatch: l,
                error: u,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            o
          );
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = a);
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
            b.test(e)
              ? (e = e.substr(0, e.length - 2))
              : E.test(e) && (e = e.substr(0, e.length - 1)),
            (n = C.exec(e))
              ? o.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = v.exec(e)) &&
                c.test(n[1]) &&
                ((e = n[1]),
                g.test(e)
                  ? (e += "e")
                  : S.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = m.exec(e)) && c.test(n[1]) && (e = n[1] + "i"),
            (n = y.exec(e)) && o.test(n[1]) && (e = n[1] + i[n[2]]),
            (n = I.exec(e)) && o.test(n[1]) && (e = n[1] + r[n[2]]),
            (n = M.exec(e))
              ? d.test(n[1]) && (e = n[1])
              : (n = x.exec(e)) && d.test(n[1]) && (e = n[1]),
            (n = p.exec(e)) &&
              (d.test(n[1]) || (s.test(n[1]) && !f.test(n[1]))) &&
              (e = n[1]),
            h.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var i = {
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
        r = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        a = "[aeiouy]",
        l = "([^aeiou][^aeiouy]*)",
        u = "(" + a + "[aeiou]*)",
        o = RegExp("^" + l + "?" + u + l),
        s = RegExp("^" + l + "?" + u + l + u + "?$"),
        d = RegExp("^" + l + "?(" + u + l + "){2,}"),
        c = RegExp("^" + l + "?" + a),
        f = RegExp("^" + l + a + "[^aeiouwxy]$"),
        h = /ll$/,
        p = /^(.+?)e$/,
        m = /^(.+?)y$/,
        x = /^(.+?(s|t))(ion)$/,
        v = /^(.+?)(ed|ing)$/,
        g = /(at|bl|iz)$/,
        C = /^(.+?)eed$/,
        E = /^.+?[^s]s$/,
        b = /^.+?(ss|i)es$/,
        S = /([^aeiouylsz])\1$/,
        y = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        M = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("70102");
      var i = n("884691");
      function r() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: r, children: a } = t,
              l = (0, i.useRef)();
            return (
              !l.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !r && (r = () => n)),
                (l.current = r())),
              (0, i.createElement)(e.Provider, { value: l.current }, a)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              r = (0, i.useContext)(e);
            if (!r)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return r(t, n);
          },
          useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, i.useMemo)(
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
    913452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOpenInPopoutExperiment: function () {
            return a;
          },
        });
      var i = n("862205");
      let r = (0, i.createExperiment)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function a(e) {
        return r.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    327241: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("272030"),
        l = n("838446"),
        u = n("158534"),
        o = n("846883"),
        s = n("812204"),
        d = n("861370"),
        c = n("20209"),
        f = n("972701"),
        h = n("390008"),
        p = n("41205"),
        m = n("936947"),
        x = n("47495"),
        v = n("715243"),
        g = n("458574"),
        C = n("963150"),
        E = n("308798"),
        b = n("47006"),
        S = n("878526"),
        y = n("44141"),
        I = n("531674"),
        M = n("619436"),
        O = n("625399"),
        N = n("731390"),
        _ = n("339876"),
        L = n("49111"),
        w = n("782340");
      function A(e) {
        let { channel: t, onSelect: n } = e,
          l = (0, y.default)(t),
          u = (0, g.default)(t),
          s = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          v = (0, h.default)(t),
          C = (0, p.default)(t),
          E = (0, m.default)(t),
          S = (0, I.default)(t),
          N = (0, M.default)(t),
          _ = (0, b.default)(t),
          L = (0, d.default)({
            id: t.id,
            label: w.default.Messages.COPY_ID_CHANNEL,
          }),
          A = (0, o.default)(t),
          j = (0, O.default)(t),
          P = (0, x.useShouldUseNewNotificationSystem)(
            "ChannelContextFavoritesMenu"
          );
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: a.closeContextMenu,
          "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: l }),
            (0, i.jsxs)(r.MenuGroup, { children: [C, E, v, s] }),
            (0, i.jsxs)(r.MenuGroup, { children: [S, P ? j : N] }),
            (0, i.jsx)(r.MenuGroup, { children: _ }),
            (0, i.jsx)(r.MenuGroup, { children: A }),
            (0, i.jsx)(r.MenuGroup, { children: c }),
            (0, i.jsx)(r.MenuGroup, { children: u }),
            (0, i.jsx)(r.MenuGroup, { children: L }),
          ],
        });
      }
      function j(e) {
        let { channel: t, guild: n, onSelect: l } = e,
          u = (0, y.default)(t),
          o = (0, g.default)(t),
          s = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          h = (0, _.default)(t),
          p = (0, I.default)(t),
          m = (0, b.default)(t),
          L = (0, S.default)(t, n),
          A = (0, v.default)(t, n),
          j = (0, C.default)(t, n),
          P = (0, E.default)(t),
          T = (0, d.default)({
            id: t.id,
            label: w.default.Messages.COPY_ID_CHANNEL,
          }),
          U = (0, N.default)(t, "list_text_channel_context_menu"),
          G = (0, M.default)(t),
          R = (0, O.default)(t),
          D = (0, x.useShouldUseNewNotificationSystem)(
            "ChannelContextMenuNormal"
          );
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: a.closeContextMenu,
          "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: l,
          children: [
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [u, s] },
              "mark-as-read-or-favorite"
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [L, h, o, U] },
              "channel-actions"
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [p, D ? R : G] },
              "notifications"
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [m, A, j, P] },
              "admin-actions"
            ),
            (0, i.jsx)(r.MenuGroup, { children: c }),
            (0, i.jsx)(r.MenuGroup, { children: T }, "developer-actions"),
          ],
        });
      }
      var P = (0, u.default)(
        (0, l.default)(
          function (e) {
            let t = (0, c.default)();
            return t ? (0, i.jsx)(A, { ...e }) : (0, i.jsx)(j, { ...e });
          },
          { object: L.AnalyticsObjects.CONTEXT_MENU }
        ),
        [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU]
      );
    },
    731390: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        a = n("77078"),
        l = n("390236"),
        u = n("292508"),
        o = n("383294"),
        s = n("913452"),
        d = n("533466"),
        c = n("49111"),
        f = n("765479");
      function h(e) {
        let { windowKey: t, channel: n } = e;
        return (0, i.jsx)(u.default, {
          withTitleBar: !0,
          windowKey: t,
          title: n.name,
          channelId: n.id,
          contentClassName: f.popoutContent,
          children: (0, i.jsx)(l.default.Provider, {
            value: n.guild_id,
            children: (0, i.jsx)(d.default, { providedChannel: n }),
          }),
        });
      }
      function p(e, t) {
        let n = (0, s.useOpenInPopoutExperiment)(t),
          l = r.useCallback(() => {
            o.open(
              "".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id),
              t => (0, i.jsx)(h, { windowKey: t, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 }
            );
          }, [e]);
        return n
          ? (0, i.jsx)(a.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => l(),
            })
          : null;
      }
    },
    393027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("803182"),
        r = n("308503"),
        a = n("49111");
      function l(e) {
        let t = (0, i.matchPath)(null != e ? e : "", {
          path: a.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.matchPath)(null != e ? e : "", {
          path: a.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      var u = (0, r.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = l(t);
          e({ path: t, guildId: n, channelId: i });
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = l(t);
          e({ path: null, guildId: n, channelId: i, basePath: t });
        },
      }));
    },
    830210: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
          getChannelVideoLimit: function () {
            return o;
          },
        });
      var i = n("446674"),
        r = n("305961"),
        a = n("316133"),
        l = n("49111");
      function u(e) {
        return (0, i.useStateFromStoresObject)(
          [a.default, r.default],
          () => {
            let t = a.default.countVoiceStatesForChannel(e.id),
              n = r.default.getGuild(e.getGuildId());
            return null == n
              ? { reachedLimit: !1, limit: -1 }
              : e.type === l.ChannelTypes.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers,
                  };
          },
          [e]
        );
      }
      function o(e) {
        let t = a.default.countVoiceStatesForChannel(e.id),
          n = r.default.getGuild(e.getGuildId());
        return null == n
          ? { reachedLimit: !1, limit: -1 }
          : e.type === l.ChannelTypes.GUILD_STAGE_VOICE
            ? {
                reachedLimit: t > n.maxStageVideoChannelUsers,
                limit: n.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                limit: n.maxVideoChannelUsers,
              };
      }
    },
    727284: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("77078"),
        a = n("845579"),
        l = n("49111");
      function u(e, t) {
        a.AlwaysPreviewVideo.getSetting()
          ? (0, r.openModalLazy)(
              async () => {
                let { default: t } = await n
                  .el("381736")
                  .then(n.bind(n, "381736"));
                return n =>
                  (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  t === l.AppContext.POPOUT
                    ? r.POPOUT_MODAL_CONTEXT
                    : r.DEFAULT_MODAL_CONTEXT,
              }
            )
          : null == e || e();
      }
    },
    98013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeDesktopDownloadURL: function () {
            return s;
          },
          getPlatformReadableName: function () {
            return c;
          },
          getCurrentPlatformDownloadURL: function () {
            return f;
          },
          getMobileDownloadLink: function () {
            return h;
          },
        });
      var i = n("597755"),
        r = n.n(i),
        a = n("815157"),
        l = n("271938"),
        u = n("49111");
      let o = "linux";
      function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(u.DownloadLinks.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function d() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = r.os) || void 0 === e
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
            ? o
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function c(e) {
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[d(e)];
      }
      function f() {
        let e = d();
        return s(e, !1, e === o ? "tar.gz" : null);
      }
      function h(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, a.default)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, a.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, a.default)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, a.generateAttemptId)(),
              }
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=4b79ebf69c7fcd4548d8.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8246"],
  {
    767590: function (e, t, n) {
      var l = n("890022"),
        a = n("566040"),
        r = n("846165"),
        i = Math.ceil,
        u = Math.max;
      e.exports = function (e, t, n) {
        t = (n ? a(e, t, n) : void 0 === t) ? 1 : u(r(t), 0);
        var s = null == e ? 0 : e.length;
        if (!s || t < 1) return [];
        for (var o = 0, d = 0, c = Array(i(s / t)); o < s; )
          c[d++] = l(e, o, (o += t));
        return c;
      };
    },
    846165: function (e, t, n) {
      var l = n("323033");
      e.exports = function (e) {
        var t = l(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
    },
    397613: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ErrorBoundary: function () {
            return i;
          },
        }),
        n("70102"),
        n("222007");
      var l = n("884691");
      let a = (0, l.createContext)(null),
        r = { didCatch: !1, error: null };
      class i extends l.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, l = arguments.length, a = Array(l), i = 0;
              i < l;
              i++
            )
              a[i] = arguments[i];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: a, reason: "imperative-api" }),
              this.setState(r);
          }
        }
        componentDidCatch(e, t) {
          var n, l;
          null === (n = (l = this.props).onError) ||
            void 0 === n ||
            n.call(l, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: l } = this.props;
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
            })(e.resetKeys, l)
          ) {
            var a, i;
            null === (a = (i = this.props).onReset) ||
              void 0 === a ||
              a.call(i, { next: l, prev: e.resetKeys, reason: "keys" }),
              this.setState(r);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: r,
            } = this.props,
            { didCatch: i, error: u } = this.state,
            s = e;
          if (i) {
            let e = { error: u, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, l.isValidElement)(r)) s = r;
            else if ("function" == typeof t) s = t(e);
            else if (n) s = (0, l.createElement)(n, e);
            else throw u;
          }
          return (0, l.createElement)(
            a.Provider,
            {
              value: {
                didCatch: i,
                error: u,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            s
          );
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = r);
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
            L.test(e)
              ? (e = e.substr(0, e.length - 2))
              : E.test(e) && (e = e.substr(0, e.length - 1)),
            (n = g.exec(e))
              ? s.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = x.exec(e)) &&
                c.test(n[1]) &&
                ((e = n[1]),
                m.test(e)
                  ? (e += "e")
                  : I.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = C.exec(e)) && c.test(n[1]) && (e = n[1] + "i"),
            (n = M.exec(e)) && s.test(n[1]) && (e = n[1] + l[n[2]]),
            (n = N.exec(e)) && s.test(n[1]) && (e = n[1] + a[n[2]]),
            (n = y.exec(e))
              ? d.test(n[1]) && (e = n[1])
              : (n = v.exec(e)) && d.test(n[1]) && (e = n[1]),
            (n = p.exec(e)) &&
              (d.test(n[1]) || (o.test(n[1]) && !f.test(n[1]))) &&
              (e = n[1]),
            h.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
            t && (e = "y" + e.substr(1)),
            e);
      };
      var l = {
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
        a = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        r = "[aeiouy]",
        i = "([^aeiou][^aeiouy]*)",
        u = "(" + r + "[aeiou]*)",
        s = RegExp("^" + i + "?" + u + i),
        o = RegExp("^" + i + "?" + u + i + u + "?$"),
        d = RegExp("^" + i + "?(" + u + i + "){2,}"),
        c = RegExp("^" + i + "?" + r),
        f = RegExp("^" + i + r + "[^aeiouwxy]$"),
        h = /ll$/,
        p = /^(.+?)e$/,
        C = /^(.+?)y$/,
        v = /^(.+?(s|t))(ion)$/,
        x = /^(.+?)(ed|ing)$/,
        m = /(at|bl|iz)$/,
        g = /^(.+?)eed$/,
        E = /^.+?[^s]s$/,
        L = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        M = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        y = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        }),
        n("70102");
      var l = n("884691");
      function a() {
        let e = (0, l.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: a, children: r } = t,
              i = (0, l.useRef)();
            return (
              !i.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !a && (a = () => n)),
                (i.current = a())),
              (0, l.createElement)(e.Provider, { value: i.current }, r)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              a = (0, l.useContext)(e);
            if (!a)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return a(t, n);
          },
          useStoreApi: () => {
            let t = (0, l.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return (0, l.useMemo)(
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
    587864: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("53531");
      n.es(l, t);
    },
    913452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOpenInPopoutExperiment: function () {
            return r;
          },
        });
      var l = n("862205");
      let a = (0, l.createExperiment)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        return a.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    327241: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("272030"),
        i = n("838446"),
        u = n("158534"),
        s = n("846883"),
        o = n("812204"),
        d = n("861370"),
        c = n("20209"),
        f = n("972701"),
        h = n("390008"),
        p = n("41205"),
        C = n("936947"),
        v = n("47495"),
        x = n("715243"),
        m = n("458574"),
        g = n("963150"),
        E = n("308798"),
        L = n("47006"),
        I = n("878526"),
        M = n("44141"),
        N = n("531674"),
        y = n("619436"),
        T = n("625399"),
        b = n("731390"),
        S = n("339876"),
        _ = n("49111"),
        O = n("782340");
      function H(e) {
        let { channel: t, onSelect: n } = e,
          i = (0, M.default)(t),
          u = (0, m.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          x = (0, h.default)(t),
          g = (0, p.default)(t),
          E = (0, C.default)(t),
          I = (0, N.default)(t),
          b = (0, y.default)(t),
          S = (0, L.default)(t),
          _ = (0, d.default)({
            id: t.id,
            label: O.default.Messages.COPY_ID_CHANNEL,
          }),
          H = (0, s.default)(t),
          w = (0, T.default)(t),
          A = (0, v.useShouldUseNewNotificationSystem)(
            "ChannelContextFavoritesMenu"
          );
        return (0, l.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: r.closeContextMenu,
          "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: [
            (0, l.jsx)(a.MenuGroup, { children: i }),
            (0, l.jsxs)(a.MenuGroup, { children: [g, E, x, o] }),
            (0, l.jsxs)(a.MenuGroup, { children: [I, A ? w : b] }),
            (0, l.jsx)(a.MenuGroup, { children: S }),
            (0, l.jsx)(a.MenuGroup, { children: H }),
            (0, l.jsx)(a.MenuGroup, { children: c }),
            (0, l.jsx)(a.MenuGroup, { children: u }),
            (0, l.jsx)(a.MenuGroup, { children: _ }),
          ],
        });
      }
      function w(e) {
        let { channel: t, guild: n, onSelect: i } = e,
          u = (0, M.default)(t),
          s = (0, m.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          h = (0, S.default)(t),
          p = (0, N.default)(t),
          C = (0, L.default)(t),
          _ = (0, I.default)(t, n),
          H = (0, x.default)(t, n),
          w = (0, g.default)(t, n),
          A = (0, E.default)(t),
          j = (0, d.default)({
            id: t.id,
            label: O.default.Messages.COPY_ID_CHANNEL,
          }),
          U = (0, b.default)(t, "list_text_channel_context_menu"),
          V = (0, y.default)(t),
          G = (0, T.default)(t),
          R = (0, v.useShouldUseNewNotificationSystem)(
            "ChannelContextMenuNormal"
          );
        return (0, l.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: r.closeContextMenu,
          "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: i,
          children: [
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [u, o] },
              "mark-as-read-or-favorite"
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [_, h, s, U] },
              "channel-actions"
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [p, R ? G : V] },
              "notifications"
            ),
            (0, l.jsxs)(
              a.MenuGroup,
              { children: [C, H, w, A] },
              "admin-actions"
            ),
            (0, l.jsx)(a.MenuGroup, { children: c }),
            (0, l.jsx)(a.MenuGroup, { children: j }, "developer-actions"),
          ],
        });
      }
      var A = (0, u.default)(
        (0, i.default)(
          function (e) {
            let t = (0, c.default)();
            return t ? (0, l.jsx)(H, { ...e }) : (0, l.jsx)(w, { ...e });
          },
          { object: _.AnalyticsObjects.CONTEXT_MENU }
        ),
        [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU]
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
      var l = n("37983"),
        a = n("884691"),
        r = n("77078"),
        i = n("390236"),
        u = n("292508"),
        s = n("383294"),
        o = n("913452"),
        d = n("533466"),
        c = n("49111"),
        f = n("765479");
      function h(e) {
        let { windowKey: t, channel: n } = e;
        return (0, l.jsx)(u.default, {
          withTitleBar: !0,
          windowKey: t,
          title: n.name,
          channelId: n.id,
          contentClassName: f.popoutContent,
          children: (0, l.jsx)(i.default.Provider, {
            value: n.guild_id,
            children: (0, l.jsx)(d.default, { providedChannel: n }),
          }),
        });
      }
      function p(e, t) {
        let n = (0, o.useOpenInPopoutExperiment)(t),
          i = a.useCallback(() => {
            s.open(
              "".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id),
              t => (0, l.jsx)(h, { windowKey: t, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 }
            );
          }, [e]);
        return n
          ? (0, l.jsx)(r.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => i(),
            })
          : null;
      }
    },
    619335: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var l = n("274870"),
        a = n("116320"),
        r = n("617559"),
        i = n("213523"),
        u = n("593195"),
        s = n("361777"),
        o = n("497757"),
        d = n("774223"),
        c = n("991497"),
        f = n("393621"),
        h = n("905999"),
        p = n("660074"),
        C = n("990745"),
        v = n("190986"),
        x = n("721618"),
        m = n("733160"),
        g = n("990864"),
        E = n("274652"),
        L = n("922744"),
        I = n("155207"),
        M = n("745183"),
        N = n("368121"),
        y = n("944633"),
        T = n("228427"),
        b = n("959097"),
        S = n("656038"),
        _ = n("49111");
      function O(e, t) {
        switch (e.type) {
          case _.ChannelTypes.DM:
            return a.default;
          case _.ChannelTypes.GROUP_DM:
            let n = (0, l.getIsBroadcastingGDM)(e.id);
            return n ? d.default : I.default;
          case _.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return E.default;
            if ((0, S.default)(e)) return g.default;
            else return m.default;
          case _.ChannelTypes.GUILD_TEXT:
            if (e.id === (null == t ? void 0 : t.rulesChannelId))
              return i.default;
            if (e.isNSFW()) return o.default;
            else if ((0, S.default)(e)) return s.default;
            else return u.default;
          case _.ChannelTypes.GUILD_FORUM:
            let O = e.isMediaChannel();
            if (e.isNSFW()) return O ? x.default : h.default;
            if ((0, S.default)(e)) return O ? v.default : f.default;
            else return O ? C.default : c.default;
          case _.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return x.default;
            if ((0, S.default)(e)) return v.default;
            else return C.default;
          case _.ChannelTypes.GUILD_STAGE_VOICE:
            return T.default;
          case _.ChannelTypes.GUILD_VOICE:
            if ((0, S.default)(e)) return y.default;
            return N.default;
          case _.ChannelTypes.ANNOUNCEMENT_THREAD:
          case _.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return L.default;
            if (e.isForumPost()) return p.default;
            else return b.default;
          case _.ChannelTypes.PRIVATE_THREAD:
            if (e.isNSFW()) return L.default;
            return M.default;
          case _.ChannelTypes.GUILD_DIRECTORY:
            return r.default;
          default:
            return null;
        }
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
      var l = n("803182"),
        a = n("308503"),
        r = n("49111");
      function i(e) {
        let t = (0, l.matchPath)(null != e ? e : "", {
          path: r.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === r.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, l.matchPath)(null != e ? e : "", {
          path: r.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      var u = (0, a.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: l } = i(t);
          e({ path: t, guildId: n, channelId: l });
        },
        resetPath(t) {
          let { guildId: n, channelId: l } = i(t);
          e({ path: null, guildId: n, channelId: l, basePath: t });
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
            return s;
          },
        });
      var l = n("446674"),
        a = n("305961"),
        r = n("316133"),
        i = n("49111");
      function u(e) {
        return (0, l.useStateFromStoresObject)(
          [r.default, a.default],
          () => {
            let t = r.default.countVoiceStatesForChannel(e.id),
              n = a.default.getGuild(e.getGuildId());
            return null == n
              ? { reachedLimit: !1, limit: -1 }
              : e.type === i.ChannelTypes.GUILD_STAGE_VOICE
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
      function s(e) {
        let t = r.default.countVoiceStatesForChannel(e.id),
          n = a.default.getGuild(e.getGuildId());
        return null == n
          ? { reachedLimit: !1, limit: -1 }
          : e.type === i.ChannelTypes.GUILD_STAGE_VOICE
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
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("845579"),
        i = n("49111");
      function u(e, t) {
        r.AlwaysPreviewVideo.getSetting()
          ? (0, a.openModalLazy)(
              async () => {
                let { default: t } = await n
                  .el("381736")
                  .then(n.bind(n, "381736"));
                return n =>
                  (0, l.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  t === i.AppContext.POPOUT
                    ? a.POPOUT_MODAL_CONTEXT
                    : a.DEFAULT_MODAL_CONTEXT,
              }
            )
          : null == e || e();
      }
    },
    922744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        r = n("782926"),
        i = n("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: r,
              ...u
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  className: r,
                  fill: a,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: a,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z",
                }),
              ],
            });
          },
          r.ThreadIcon,
          void 0,
          { size: 24 }
        );
    },
    745183: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("469563"),
        r = n("587864"),
        i = n("75196"),
        u = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              foreground: r,
              ...u
            } = e;
            return (0, l.jsxs)("svg", {
              ...(0, i.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, l.jsx)("path", {
                  className: r,
                  fill: a,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: a,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, l.jsx)("path", {
                  className: r,
                  fill: a,
                  d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z",
                }),
              ],
            });
          },
          r.ThreadLockIcon,
          void 0,
          { size: 24 }
        );
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
            return h;
          },
        });
      var l = n("597755"),
        a = n.n(l),
        r = n("815157"),
        i = n("271938"),
        u = n("49111");
      let s = "linux";
      function o(e) {
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
            : null === (e = a.os) || void 0 === e
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
            ? s
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function c(e) {
        return { win: "Windows", osx: "Mac", [s]: "Linux" }[d(e)];
      }
      function f() {
        let e = d();
        return o(e, !1, e === s ? "tar.gz" : null);
      }
      function h(e, t, n) {
        let l = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, r.default)(
              null != l
                ? l
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, r.default)(
              null != l ? l : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
              }
            );
          default:
            return null != l ? l : "https://www.discord.com";
        }
      }
    },
    53531: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ThreadLockIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        r = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...s
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, r.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
              fill: "string" == typeof i ? i : i.css,
              className: u,
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              fill: "string" == typeof i ? i : i.css,
              className: u,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=522af99532c0b1d8c599.js.map

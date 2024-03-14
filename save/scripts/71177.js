(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71177"],
  {
    767590: function (e, t, n) {
      var i = n("890022"),
        a = n("566040"),
        l = n("846165"),
        r = Math.ceil,
        u = Math.max;
      e.exports = function (e, t, n) {
        t = (n ? a(e, t, n) : void 0 === t) ? 1 : u(l(t), 0);
        var s = null == e ? 0 : e.length;
        if (!s || t < 1) return [];
        for (var o = 0, d = 0, c = Array(r(s / t)); o < s; )
          c[d++] = i(e, o, (o += t));
        return c;
      };
    },
    969176: function (e, t, n) {
      var i = n("354069");
      e.exports = function (e, t) {
        return i(e, t);
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
            return r;
          },
        }),
        n("70102"),
        n("222007");
      var i = n("884691");
      let a = (0, i.createContext)(null),
        l = { didCatch: !1, error: null };
      class r extends i.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, i = arguments.length, a = Array(i), r = 0;
              r < i;
              r++
            )
              a[r] = arguments[r];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: a, reason: "imperative-api" }),
              this.setState(l);
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
            var a, r;
            null === (a = (r = this.props).onReset) ||
              void 0 === a ||
              a.call(r, { next: i, prev: e.resetKeys, reason: "keys" }),
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
            { didCatch: r, error: u } = this.state,
            s = e;
          if (r) {
            let e = { error: u, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(l)) s = l;
            else if ("function" == typeof t) s = t(e);
            else if (n) s = (0, i.createElement)(n, e);
            else throw u;
          }
          return (0, i.createElement)(
            a.Provider,
            {
              value: {
                didCatch: r,
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
            S.test(e)
              ? (e = e.substr(0, e.length - 2))
              : x.test(e) && (e = e.substr(0, e.length - 1)),
            (n = g.exec(e))
              ? s.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = v.exec(e)) &&
                c.test(n[1]) &&
                ((e = n[1]),
                _.test(e)
                  ? (e += "e")
                  : C.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = m.exec(e)) && c.test(n[1]) && (e = n[1] + "i"),
            (n = y.exec(e)) && s.test(n[1]) && (e = n[1] + i[n[2]]),
            (n = I.exec(e)) && s.test(n[1]) && (e = n[1] + a[n[2]]),
            (n = T.exec(e))
              ? d.test(n[1]) && (e = n[1])
              : (n = E.exec(e)) && d.test(n[1]) && (e = n[1]),
            (n = h.exec(e)) &&
              (d.test(n[1]) || (o.test(n[1]) && !f.test(n[1]))) &&
              (e = n[1]),
            p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)),
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
        a = {
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
        u = "(" + l + "[aeiou]*)",
        s = RegExp("^" + r + "?" + u + r),
        o = RegExp("^" + r + "?" + u + r + u + "?$"),
        d = RegExp("^" + r + "?(" + u + r + "){2,}"),
        c = RegExp("^" + r + "?" + l),
        f = RegExp("^" + r + l + "[^aeiouwxy]$"),
        p = /ll$/,
        h = /^(.+?)e$/,
        m = /^(.+?)y$/,
        E = /^(.+?(s|t))(ion)$/,
        v = /^(.+?)(ed|ing)$/,
        _ = /(at|bl|iz)$/,
        g = /^(.+?)eed$/,
        x = /^.+?[^s]s$/,
        S = /^.+?(ss|i)es$/,
        C = /([^aeiouylsz])\1$/,
        y = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        I = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        T = RegExp(
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
      var i = n("884691");
      function a() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: a, children: l } = t,
              r = (0, i.useRef)();
            return (
              !r.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !a && (a = () => n)),
                (r.current = a())),
              (0, i.createElement)(e.Provider, { value: r.current }, l)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              a = (0, i.useContext)(e);
            if (!a)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return a(t, n);
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
    289867: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("913144"),
        a = {
          toggleMembersSection() {
            i.default.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
          },
          toggleProfilePanelSection() {
            i.default.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
          },
          toggleSummariesSection() {
            i.default.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
          },
        };
    },
    913452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOpenInPopoutExperiment: function () {
            return l;
          },
        });
      var i = n("862205");
      let a = (0, i.createExperiment)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function l(e) {
        return a.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    327241: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        });
      var i = n("37983");
      n("884691");
      var a = n("77078"),
        l = n("272030"),
        r = n("838446"),
        u = n("158534"),
        s = n("846883"),
        o = n("812204"),
        d = n("861370"),
        c = n("20209"),
        f = n("972701"),
        p = n("390008"),
        h = n("41205"),
        m = n("936947"),
        E = n("47495"),
        v = n("715243"),
        _ = n("458574"),
        g = n("963150"),
        x = n("308798"),
        S = n("47006"),
        C = n("878526"),
        y = n("44141"),
        I = n("531674"),
        T = n("619436"),
        b = n("625399"),
        A = n("731390"),
        N = n("339876"),
        M = n("49111"),
        L = n("782340");
      function O(e) {
        let { channel: t, onSelect: n } = e,
          r = (0, y.default)(t),
          u = (0, _.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          v = (0, p.default)(t),
          g = (0, h.default)(t),
          x = (0, m.default)(t),
          C = (0, I.default)(t),
          A = (0, T.default)(t),
          N = (0, S.default)(t),
          M = (0, d.default)({
            id: t.id,
            label: L.default.Messages.COPY_ID_CHANNEL,
          }),
          O = (0, s.default)(t),
          P = (0, b.default)(t),
          G = (0, E.useShouldUseNewNotificationSystem)(
            "ChannelContextFavoritesMenu"
          );
        return (0, i.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: [
            (0, i.jsx)(a.MenuGroup, { children: r }),
            (0, i.jsxs)(a.MenuGroup, { children: [g, x, v, o] }),
            (0, i.jsxs)(a.MenuGroup, { children: [C, G ? P : A] }),
            (0, i.jsx)(a.MenuGroup, { children: N }),
            (0, i.jsx)(a.MenuGroup, { children: O }),
            (0, i.jsx)(a.MenuGroup, { children: c }),
            (0, i.jsx)(a.MenuGroup, { children: u }),
            (0, i.jsx)(a.MenuGroup, { children: M }),
          ],
        });
      }
      function P(e) {
        let { channel: t, guild: n, onSelect: r } = e,
          u = (0, y.default)(t),
          s = (0, _.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          p = (0, N.default)(t),
          h = (0, I.default)(t),
          m = (0, S.default)(t),
          M = (0, C.default)(t, n),
          O = (0, v.default)(t, n),
          P = (0, g.default)(t, n),
          G = (0, x.default)(t),
          U = (0, d.default)({
            id: t.id,
            label: L.default.Messages.COPY_ID_CHANNEL,
          }),
          R = (0, A.default)(t, "list_text_channel_context_menu"),
          w = (0, T.default)(t),
          j = (0, b.default)(t),
          D = (0, E.useShouldUseNewNotificationSystem)(
            "ChannelContextMenuNormal"
          );
        return (0, i.jsxs)(a.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: [
            (0, i.jsxs)(
              a.MenuGroup,
              { children: [u, o] },
              "mark-as-read-or-favorite"
            ),
            (0, i.jsxs)(
              a.MenuGroup,
              { children: [M, p, s, R] },
              "channel-actions"
            ),
            (0, i.jsxs)(
              a.MenuGroup,
              { children: [h, D ? j : w] },
              "notifications"
            ),
            (0, i.jsxs)(
              a.MenuGroup,
              { children: [m, O, P, G] },
              "admin-actions"
            ),
            (0, i.jsx)(a.MenuGroup, { children: c }),
            (0, i.jsx)(a.MenuGroup, { children: U }, "developer-actions"),
          ],
        });
      }
      var G = (0, u.default)(
        (0, r.default)(
          function (e) {
            let t = (0, c.default)();
            return t ? (0, i.jsx)(O, { ...e }) : (0, i.jsx)(P, { ...e });
          },
          { object: M.AnalyticsObjects.CONTEXT_MENU }
        ),
        [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU]
      );
    },
    731390: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var i = n("37983"),
        a = n("884691"),
        l = n("77078"),
        r = n("390236"),
        u = n("292508"),
        s = n("383294"),
        o = n("913452"),
        d = n("533466"),
        c = n("49111"),
        f = n("765479");
      function p(e) {
        let { windowKey: t, channel: n } = e;
        return (0, i.jsx)(u.default, {
          withTitleBar: !0,
          windowKey: t,
          title: n.name,
          channelId: n.id,
          contentClassName: f.popoutContent,
          children: (0, i.jsx)(r.default.Provider, {
            value: n.guild_id,
            children: (0, i.jsx)(d.default, { providedChannel: n }),
          }),
        });
      }
      function h(e, t) {
        let n = (0, o.useOpenInPopoutExperiment)(t),
          r = a.useCallback(() => {
            s.open(
              "".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id),
              t => (0, i.jsx)(p, { windowKey: t, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 }
            );
          }, [e]);
        return n
          ? (0, i.jsx)(l.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => r(),
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
        a = n("308503"),
        l = n("49111");
      function r(e) {
        let t = (0, i.matchPath)(null != e ? e : "", {
          path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === l.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.matchPath)(null != e ? e : "", {
          path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
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
          let { guildId: n, channelId: i } = r(t);
          e({ path: t, guildId: n, channelId: i });
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = r(t);
          e({ path: null, guildId: n, channelId: i, basePath: t });
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
      var i = n("913144"),
        a = n("819689"),
        l = n("115718"),
        r = n("347895"),
        u = n("341329"),
        s = n("582713"),
        o = n("724210"),
        d = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: n,
              baseChannelId: l,
              hasSingleMessageRequest: r,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: l,
              channelId: t,
              details: {
                type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: r,
              },
            }),
              null != n
                ? a.default.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                  })
                : u.default.fetchMessages({ channelId: t });
          },
          openChannelAsSidebar(e) {
            let {
              guildId: t,
              channelId: n,
              baseChannelId: r,
              flash: o = !0,
              details: d,
            } = e;
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: r,
              channelId: n,
              details: d,
            });
            let c = null == d ? void 0 : d.initialMessageId;
            null != c
              ? a.default.jumpToMessage({
                  channelId: n,
                  messageId: c,
                  flash: o,
                  jumpType: l.JumpTypes.INSTANT,
                })
              : u.default.fetchMessages({ guildId: t, channelId: n });
          },
          openResourceChannelAsSidebar(e) {
            let { guildId: t, channelId: n } = e;
            null != t &&
              ((0, r.selectHomeResourceChannel)(t, n, !1),
              i.default.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: s.SidebarType.VIEW_CHANNEL,
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
            i.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_THREAD,
              baseChannelId: n,
              channelId: r,
              details: d,
            }),
              (null == d ? void 0 : d.initialMessageId) != null
                ? a.default.jumpToMessage({
                    channelId: r,
                    messageId: d.initialMessageId,
                    flash: o,
                    jumpType: l.JumpTypes.INSTANT,
                  })
                : u.default.fetchMessages({ guildId: t, channelId: r });
          },
          closeChannelSidebar(e) {
            i.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              sidebarType: a,
              details: l,
            } = e;
            return i.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: a,
              baseChannelId: n,
              guildId: t,
              details: l,
            });
          },
          closeGuildSidebar(e) {
            i.default.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
          },
        };
    },
    893980: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          trackProfilePanelViewed: function () {
            return s;
          },
          trackProfilePanelToggled: function () {
            return o;
          },
        });
      var i = n("373469"),
        a = n("824563"),
        l = n("27618"),
        r = n("599110"),
        u = n("49111");
      let s = e => {
          let {
            displayProfile: t,
            isMobile: n,
            loadDurationMs: i,
            activity: a,
            customStatusActivity: l,
            status: s,
          } = e;
          r.default.track(u.AnalyticEvents.DM_PROFILE_VIEWED, {
            has_mobile_indicator: n,
            has_activity:
              null != a &&
              (null == a ? void 0 : a.type) !== u.ActivityTypes.CUSTOM_STATUS,
            has_game_activity:
              (null == a ? void 0 : a.type) === u.ActivityTypes.PLAYING,
            load_duration_ms: i,
            profile_user_status: s,
            has_custom_status: null != l,
            has_profile_effect: null != t.profileEffectId,
            ...d(t),
          });
        },
        o = (e, t) => {
          r.default.track(u.AnalyticEvents.DM_PROFILE_TOGGLED, {
            is_profile_open: t,
            ...d(e),
          });
        },
        d = e => {
          var t;
          if (null == e) return {};
          let n = e.userId,
            r = null != i.default.getAnyStreamForUser(n),
            s = a.default.findActivity(n, e => {
              let { type: t } = e;
              return r
                ? t === u.ActivityTypes.PLAYING
                : t !== u.ActivityTypes.CUSTOM_STATUS;
            }),
            o = null == s ? void 0 : s.assets,
            d = l.default.isFriend(n);
          return {
            has_images: !!(null !== (t = null == o ? void 0 : o.large_image) &&
            void 0 !== t
              ? t
              : null == o
                ? void 0
                : o.small_image),
            is_friend: d,
            viewed_profile_user_id: n,
            profile_has_nitro_customization: e.hasPremiumCustomization(),
            profile_has_theme_color_customized: e.hasThemeColors(),
            profile_has_theme_animation: null != e.popoutAnimationParticleType,
          };
        };
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
      var i = n("446674"),
        a = n("305961"),
        l = n("316133"),
        r = n("49111");
      function u(e) {
        return (0, i.useStateFromStoresObject)(
          [l.default, a.default],
          () => {
            let t = l.default.countVoiceStatesForChannel(e.id),
              n = a.default.getGuild(e.getGuildId());
            return null == n
              ? { reachedLimit: !1, limit: -1 }
              : e.type === r.ChannelTypes.GUILD_STAGE_VOICE
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
        let t = l.default.countVoiceStatesForChannel(e.id),
          n = a.default.getGuild(e.getGuildId());
        return null == n
          ? { reachedLimit: !1, limit: -1 }
          : e.type === r.ChannelTypes.GUILD_STAGE_VOICE
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
      var a = n("77078"),
        l = n("845579"),
        r = n("49111");
      function u(e, t) {
        l.AlwaysPreviewVideo.getSetting()
          ? (0, a.openModalLazy)(
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
                  t === r.AppContext.POPOUT
                    ? a.POPOUT_MODAL_CONTEXT
                    : a.DEFAULT_MODAL_CONTEXT,
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
      var i = n("597755"),
        a = n.n(i),
        l = n("815157"),
        r = n("271938"),
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
      function p(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, l.default)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, l.default)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=c24a01e148df3402c273.js.map

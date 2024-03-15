(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16263"],
  {
    767590: function (e, t, n) {
      var a = n("890022"),
        r = n("566040"),
        l = n("846165"),
        i = Math.ceil,
        s = Math.max;
      e.exports = function (e, t, n) {
        t = (n ? r(e, t, n) : void 0 === t) ? 1 : s(l(t), 0);
        var u = null == e ? 0 : e.length;
        if (!u || t < 1) return [];
        for (var o = 0, d = 0, c = Array(i(u / t)); o < u; )
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
            return i;
          },
        }),
        n("70102"),
        n("222007");
      var a = n("884691");
      let r = (0, a.createContext)(null),
        l = { didCatch: !1, error: null };
      class i extends a.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, a = arguments.length, r = Array(a), i = 0;
              i < a;
              i++
            )
              r[i] = arguments[i];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: r, reason: "imperative-api" }),
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
            var r, i;
            null === (r = (i = this.props).onReset) ||
              void 0 === r ||
              r.call(i, { next: a, prev: e.resetKeys, reason: "keys" }),
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
            { didCatch: i, error: s } = this.state,
            u = e;
          if (i) {
            let e = { error: s, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, a.isValidElement)(l)) u = l;
            else if ("function" == typeof t) u = t(e);
            else if (n) u = (0, a.createElement)(n, e);
            else throw s;
          }
          return (0, a.createElement)(
            r.Provider,
            {
              value: {
                didCatch: i,
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
            g.test(e)
              ? (e = e.substr(0, e.length - 2))
              : N.test(e) && (e = e.substr(0, e.length - 1)),
            (n = I.exec(e))
              ? u.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = _.exec(e)) &&
                c.test(n[1]) &&
                ((e = n[1]),
                v.test(e)
                  ? (e += "e")
                  : m.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"),
            (n = y.exec(e)) && u.test(n[1]) && (e = n[1] + a[n[2]]),
            (n = T.exec(e)) && u.test(n[1]) && (e = n[1] + r[n[2]]),
            (n = x.exec(e))
              ? d.test(n[1]) && (e = n[1])
              : (n = C.exec(e)) && d.test(n[1]) && (e = n[1]),
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
        r = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        l = "[aeiouy]",
        i = "([^aeiou][^aeiouy]*)",
        s = "(" + l + "[aeiou]*)",
        u = RegExp("^" + i + "?" + s + i),
        o = RegExp("^" + i + "?" + s + i + s + "?$"),
        d = RegExp("^" + i + "?(" + s + i + "){2,}"),
        c = RegExp("^" + i + "?" + l),
        f = RegExp("^" + i + l + "[^aeiouwxy]$"),
        p = /ll$/,
        h = /^(.+?)e$/,
        E = /^(.+?)y$/,
        C = /^(.+?(s|t))(ion)$/,
        _ = /^(.+?)(ed|ing)$/,
        v = /(at|bl|iz)$/,
        I = /^(.+?)eed$/,
        N = /^.+?[^s]s$/,
        g = /^.+?(ss|i)es$/,
        m = /([^aeiouylsz])\1$/,
        y = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        x = RegExp(
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
      var a = n("884691");
      function r() {
        let e = (0, a.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: r, children: l } = t,
              i = (0, a.useRef)();
            return (
              !i.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !r && (r = () => n)),
                (i.current = r())),
              (0, a.createElement)(e.Provider, { value: i.current }, l)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              r = (0, a.useContext)(e);
            if (!r)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return r(t, n);
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
    587864: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("53531");
      n.es(a, t);
    },
    327241: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("77078"),
        l = n("272030"),
        i = n("838446"),
        s = n("158534"),
        u = n("846883"),
        o = n("812204"),
        d = n("861370"),
        c = n("20209"),
        f = n("972701"),
        p = n("390008"),
        h = n("41205"),
        E = n("936947"),
        C = n("47495"),
        _ = n("715243"),
        v = n("458574"),
        I = n("963150"),
        N = n("308798"),
        g = n("47006"),
        m = n("878526"),
        y = n("44141"),
        T = n("531674"),
        x = n("619436"),
        S = n("625399"),
        M = n("731390"),
        R = n("339876"),
        A = n("49111"),
        L = n("782340");
      function H(e) {
        let { channel: t, onSelect: n } = e,
          i = (0, y.default)(t),
          s = (0, v.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          _ = (0, p.default)(t),
          I = (0, h.default)(t),
          N = (0, E.default)(t),
          m = (0, T.default)(t),
          M = (0, x.default)(t),
          R = (0, g.default)(t),
          A = (0, d.default)({
            id: t.id,
            label: L.default.Messages.COPY_ID_CHANNEL,
          }),
          H = (0, u.default)(t),
          b = (0, S.default)(t),
          O = (0, C.useShouldUseNewNotificationSystem)(
            "ChannelContextFavoritesMenu"
          );
        return (0, a.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: [
            (0, a.jsx)(r.MenuGroup, { children: i }),
            (0, a.jsxs)(r.MenuGroup, { children: [I, N, _, o] }),
            (0, a.jsxs)(r.MenuGroup, { children: [m, O ? b : M] }),
            (0, a.jsx)(r.MenuGroup, { children: R }),
            (0, a.jsx)(r.MenuGroup, { children: H }),
            (0, a.jsx)(r.MenuGroup, { children: c }),
            (0, a.jsx)(r.MenuGroup, { children: s }),
            (0, a.jsx)(r.MenuGroup, { children: A }),
          ],
        });
      }
      function b(e) {
        let { channel: t, guild: n, onSelect: i } = e,
          s = (0, y.default)(t),
          u = (0, v.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          p = (0, R.default)(t),
          h = (0, T.default)(t),
          E = (0, g.default)(t),
          A = (0, m.default)(t, n),
          H = (0, _.default)(t, n),
          b = (0, I.default)(t, n),
          O = (0, N.default)(t),
          D = (0, d.default)({
            id: t.id,
            label: L.default.Messages.COPY_ID_CHANNEL,
          }),
          P = (0, M.default)(t, "list_text_channel_context_menu"),
          F = (0, x.default)(t),
          V = (0, S.default)(t),
          U = (0, C.useShouldUseNewNotificationSystem)(
            "ChannelContextMenuNormal"
          );
        return (0, a.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: l.closeContextMenu,
          "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: i,
          children: [
            (0, a.jsxs)(
              r.MenuGroup,
              { children: [s, o] },
              "mark-as-read-or-favorite"
            ),
            (0, a.jsxs)(
              r.MenuGroup,
              { children: [A, p, u, P] },
              "channel-actions"
            ),
            (0, a.jsxs)(
              r.MenuGroup,
              { children: [h, U ? V : F] },
              "notifications"
            ),
            (0, a.jsxs)(
              r.MenuGroup,
              { children: [E, H, b, O] },
              "admin-actions"
            ),
            (0, a.jsx)(r.MenuGroup, { children: c }),
            (0, a.jsx)(r.MenuGroup, { children: D }, "developer-actions"),
          ],
        });
      }
      var O = (0, s.default)(
        (0, i.default)(
          function (e) {
            let t = (0, c.default)();
            return t ? (0, a.jsx)(H, { ...e }) : (0, a.jsx)(b, { ...e });
          },
          { object: A.AnalyticsObjects.CONTEXT_MENU }
        ),
        [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_TEXT_CHANNEL_MENU]
      );
    },
    619335: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var a = n("274870"),
        r = n("116320"),
        l = n("617559"),
        i = n("213523"),
        s = n("593195"),
        u = n("361777"),
        o = n("497757"),
        d = n("774223"),
        c = n("991497"),
        f = n("393621"),
        p = n("905999"),
        h = n("660074"),
        E = n("990745"),
        C = n("190986"),
        _ = n("721618"),
        v = n("733160"),
        I = n("990864"),
        N = n("274652"),
        g = n("922744"),
        m = n("155207"),
        y = n("745183"),
        T = n("368121"),
        x = n("944633"),
        S = n("228427"),
        M = n("959097"),
        R = n("656038"),
        A = n("49111");
      function L(e, t) {
        switch (e.type) {
          case A.ChannelTypes.DM:
            return r.default;
          case A.ChannelTypes.GROUP_DM:
            let n = (0, a.getIsBroadcastingGDM)(e.id);
            return n ? d.default : m.default;
          case A.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return N.default;
            if ((0, R.default)(e)) return I.default;
            else return v.default;
          case A.ChannelTypes.GUILD_TEXT:
            if (e.id === (null == t ? void 0 : t.rulesChannelId))
              return i.default;
            if (e.isNSFW()) return o.default;
            else if ((0, R.default)(e)) return u.default;
            else return s.default;
          case A.ChannelTypes.GUILD_FORUM:
            let L = e.isMediaChannel();
            if (e.isNSFW()) return L ? _.default : p.default;
            if ((0, R.default)(e)) return L ? C.default : f.default;
            else return L ? E.default : c.default;
          case A.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return _.default;
            if ((0, R.default)(e)) return C.default;
            else return E.default;
          case A.ChannelTypes.GUILD_STAGE_VOICE:
            return S.default;
          case A.ChannelTypes.GUILD_VOICE:
            if ((0, R.default)(e)) return x.default;
            return T.default;
          case A.ChannelTypes.ANNOUNCEMENT_THREAD:
          case A.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return g.default;
            if (e.isForumPost()) return h.default;
            else return M.default;
          case A.ChannelTypes.PRIVATE_THREAD:
            if (e.isNSFW()) return g.default;
            return y.default;
          case A.ChannelTypes.GUILD_DIRECTORY:
            return l.default;
          default:
            return null;
        }
      }
    },
    878720: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChangePhoneReason: function () {
            return r;
          },
          default: function () {
            return f;
          },
        });
      var a,
        r,
        l = n("759843"),
        i = n("872717"),
        s = n("913144"),
        u = n("271938"),
        o = n("840707"),
        d = n("482931"),
        c = n("49111");
      ((a = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (a.USER_SETTINGS_UPDATE = "user_settings_update"),
        (a.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (a.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (a.CONTACT_SYNC = "contact_sync");
      var f = {
        setCountryCode(e) {
          s.default.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
          });
        },
        removePhone: (e, t) =>
          i.default.delete({
            url: c.Endpoints.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
          }),
        resendCode(e) {
          let t = {},
            n = u.default.getFingerprint();
          return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            i.default.post({
              url: c.Endpoints.RESEND_PHONE,
              headers: t,
              body: { phone: e },
            })
          );
        },
        beginAddPhone: (e, t) =>
          i.default.post({
            url: c.Endpoints.PHONE,
            body: { phone: e, change_phone_reason: t },
          }),
        addPhone: (e, t, n) =>
          i.default.post({
            url: c.Endpoints.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        addPhoneWithoutPassword: e =>
          i.default.post({
            url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: { code: e },
          }),
        beginReverifyPhone: (e, t) =>
          i.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
          }),
        reverifyPhone: (e, t, n) =>
          i.default.post({
            url: c.Endpoints.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
          }),
        validatePhoneForSupport: e =>
          i.default.post({
            url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
          }),
        async verifyPhone(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = {},
            i = u.default.getFingerprint();
          null != i && "" !== i && (r["X-Fingerprint"] = i),
            a && (r.authorization = "");
          let f = await o.default.post({
            url: c.Endpoints.VERIFY_PHONE,
            headers: r,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: l.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              s.default.dispatch({
                type: "MODAL_POP",
                key: d.PHONE_VERIFICATION_MODAL_KEY,
              }),
            f.body
          );
        },
      };
    },
    482931: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PHONE_VERIFICATION_MODAL_KEY: function () {
            return a;
          },
          PHONE_VERIFICATION_CODE_NUM_DIGITS: function () {
            return r;
          },
        });
      let a = "PHONE_VERIFICATION_MODAL_KEY",
        r = 6;
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
        r = n("308503"),
        l = n("49111");
      function i(e) {
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
      var s = (0, r.default)(e => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: a } = i(t);
          e({ path: t, guildId: n, channelId: a });
        },
        resetPath(t) {
          let { guildId: n, channelId: a } = i(t);
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
        r = n("819689"),
        l = n("115718"),
        i = n("347895"),
        s = n("341329"),
        u = n("582713"),
        o = n("724210"),
        d = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: n,
              baseChannelId: l,
              hasSingleMessageRequest: i,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: l,
              channelId: t,
              details: {
                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: i,
              },
            }),
              null != n
                ? r.default.jumpToMessage({
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
              baseChannelId: i,
              flash: o = !0,
              details: d,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: i,
              channelId: n,
              details: d,
            });
            let c = null == d ? void 0 : d.initialMessageId;
            null != c
              ? r.default.jumpToMessage({
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
              ((0, i.selectHomeResourceChannel)(t, n, !1),
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
              channelId: i,
              flash: o = !0,
              details: d,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.SidebarType.VIEW_THREAD,
              baseChannelId: n,
              channelId: i,
              details: d,
            }),
              (null == d ? void 0 : d.initialMessageId) != null
                ? r.default.jumpToMessage({
                    channelId: i,
                    messageId: d.initialMessageId,
                    flash: o,
                    jumpType: l.JumpTypes.INSTANT,
                  })
                : s.default.fetchMessages({ guildId: t, channelId: i });
          },
          closeChannelSidebar(e) {
            a.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              sidebarType: r,
              details: l,
            } = e;
            return a.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: r,
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
    922744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("782926"),
        i = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...s
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  className: l,
                  fill: r,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: r,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: r,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z",
                }),
              ],
            });
          },
          l.ThreadIcon,
          void 0,
          { size: 24 }
        );
    },
    745183: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var r = n("469563"),
        l = n("587864"),
        i = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              foreground: l,
              ...s
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  className: l,
                  fill: r,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: r,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, a.jsx)("path", {
                  className: l,
                  fill: r,
                  d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z",
                }),
              ],
            });
          },
          l.ThreadLockIcon,
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
            return p;
          },
        });
      var a = n("597755"),
        r = n.n(a),
        l = n("815157"),
        i = n("271938"),
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
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, l.default)(
              null != a ? a : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          default:
            return null != a ? a : "https://www.discord.com";
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
      var a = n("37983");
      n("884691");
      var r = n("669491"),
        l = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
              fill: "string" == typeof i ? i : i.css,
              className: s,
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z",
              clipRule: "evenodd",
              fill: "string" == typeof i ? i : i.css,
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=21c0b400510fccb23c58.js.map

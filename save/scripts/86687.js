(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86687"],
  {
    767590: function (e, t, n) {
      var a = n("890022"),
        l = n("566040"),
        r = n("846165"),
        i = Math.ceil,
        u = Math.max;
      e.exports = function (e, t, n) {
        t = (n ? l(e, t, n) : void 0 === t) ? 1 : u(r(t), 0);
        var s = null == e ? 0 : e.length;
        if (!s || t < 1) return [];
        for (var o = 0, d = 0, c = Array(i(s / t)); o < s; )
          c[d++] = a(e, o, (o += t));
        return c;
      };
    },
    969176: function (e, t, n) {
      var a = n("354069");
      e.exports = function (e, t) {
        return a(e, t);
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
      let l = (0, a.createContext)(null),
        r = { didCatch: !1, error: null };
      class i extends a.Component {
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, a = arguments.length, l = Array(a), i = 0;
              i < a;
              i++
            )
              l[i] = arguments[i];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: l, reason: "imperative-api" }),
              this.setState(r);
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
            var l, i;
            null === (l = (i = this.props).onReset) ||
              void 0 === l ||
              l.call(i, { next: a, prev: e.resetKeys, reason: "keys" }),
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
            if ((0, a.isValidElement)(r)) s = r;
            else if ("function" == typeof t) s = t(e);
            else if (n) s = (0, a.createElement)(n, e);
            else throw u;
          }
          return (0, a.createElement)(
            l.Provider,
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
            g.test(e)
              ? (e = e.substr(0, e.length - 2))
              : I.test(e) && (e = e.substr(0, e.length - 1)),
            (n = m.exec(e))
              ? s.test(n[1]) && (e = e.substr(0, e.length - 1))
              : (n = _.exec(e)) &&
                c.test(n[1]) &&
                ((e = n[1]),
                v.test(e)
                  ? (e += "e")
                  : N.test(e)
                    ? (e = e.substr(0, e.length - 1))
                    : f.test(e) && (e += "e")),
            (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"),
            (n = x.exec(e)) && s.test(n[1]) && (e = n[1] + a[n[2]]),
            (n = y.exec(e)) && s.test(n[1]) && (e = n[1] + l[n[2]]),
            (n = T.exec(e))
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
        l = {
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
        p = /ll$/,
        h = /^(.+?)e$/,
        E = /^(.+?)y$/,
        C = /^(.+?(s|t))(ion)$/,
        _ = /^(.+?)(ed|ing)$/,
        v = /(at|bl|iz)$/,
        m = /^(.+?)eed$/,
        I = /^.+?[^s]s$/,
        g = /^.+?(ss|i)es$/,
        N = /([^aeiouylsz])\1$/,
        x = RegExp(
          "^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"
        ),
        y = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        T = RegExp(
          "^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$"
        );
    },
    949041: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("70102");
      var a = n("884691");
      function l() {
        let e = (0, a.createContext)(void 0);
        return {
          Provider: t => {
            let { initialStore: n, createStore: l, children: r } = t,
              i = (0, a.useRef)();
            return (
              !i.current &&
                (n &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version."
                  ),
                  !l && (l = () => n)),
                (i.current = l())),
              (0, a.createElement)(e.Provider, { value: i.current }, r)
            );
          },
          useStore: function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is,
              l = (0, a.useContext)(e);
            if (!l)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor."
              );
            return l(t, n);
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
    913452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useOpenInPopoutExperiment: function () {
            return r;
          },
        });
      var a = n("862205");
      let l = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    327241: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("272030"),
        i = n("838446"),
        u = n("158534"),
        s = n("846883"),
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
        m = n("963150"),
        I = n("308798"),
        g = n("47006"),
        N = n("878526"),
        x = n("44141"),
        y = n("531674"),
        T = n("619436"),
        S = n("625399"),
        L = n("731390"),
        O = n("339876"),
        M = n("49111"),
        b = n("782340");
      function A(e) {
        let { channel: t, onSelect: n } = e,
          i = (0, x.default)(t),
          u = (0, v.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          _ = (0, p.default)(t),
          m = (0, h.default)(t),
          I = (0, E.default)(t),
          N = (0, y.default)(t),
          L = (0, T.default)(t),
          O = (0, g.default)(t),
          M = (0, d.default)({
            id: t.id,
            label: b.default.Messages.COPY_ID_CHANNEL,
          }),
          A = (0, s.default)(t),
          R = (0, S.default)(t),
          H = (0, C.useShouldUseNewNotificationSystem)(
            "ChannelContextFavoritesMenu"
          );
        return (0, a.jsxs)(l.Menu, {
          navId: "channel-context",
          onClose: r.closeContextMenu,
          "aria-label": b.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: [
            (0, a.jsx)(l.MenuGroup, { children: i }),
            (0, a.jsxs)(l.MenuGroup, { children: [m, I, _, o] }),
            (0, a.jsxs)(l.MenuGroup, { children: [N, H ? R : L] }),
            (0, a.jsx)(l.MenuGroup, { children: O }),
            (0, a.jsx)(l.MenuGroup, { children: A }),
            (0, a.jsx)(l.MenuGroup, { children: c }),
            (0, a.jsx)(l.MenuGroup, { children: u }),
            (0, a.jsx)(l.MenuGroup, { children: M }),
          ],
        });
      }
      function R(e) {
        let { channel: t, guild: n, onSelect: i } = e,
          u = (0, x.default)(t),
          s = (0, v.default)(t),
          o = (0, f.useAddToFavoritesItem)(t),
          c = (0, f.useRemoveFromFavoritesItem)(t),
          p = (0, O.default)(t),
          h = (0, y.default)(t),
          E = (0, g.default)(t),
          M = (0, N.default)(t, n),
          A = (0, _.default)(t, n),
          R = (0, m.default)(t, n),
          H = (0, I.default)(t),
          P = (0, d.default)({
            id: t.id,
            label: b.default.Messages.COPY_ID_CHANNEL,
          }),
          D = (0, L.default)(t, "list_text_channel_context_menu"),
          V = (0, T.default)(t),
          U = (0, S.default)(t),
          w = (0, C.useShouldUseNewNotificationSystem)(
            "ChannelContextMenuNormal"
          );
        return (0, a.jsxs)(l.Menu, {
          navId: "channel-context",
          onClose: r.closeContextMenu,
          "aria-label": b.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: i,
          children: [
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [u, o] },
              "mark-as-read-or-favorite"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [M, p, s, D] },
              "channel-actions"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [h, w ? U : V] },
              "notifications"
            ),
            (0, a.jsxs)(
              l.MenuGroup,
              { children: [E, A, R, H] },
              "admin-actions"
            ),
            (0, a.jsx)(l.MenuGroup, { children: c }),
            (0, a.jsx)(l.MenuGroup, { children: P }, "developer-actions"),
          ],
        });
      }
      var H = (0, u.default)(
        (0, i.default)(
          function (e) {
            let t = (0, c.default)();
            return t ? (0, a.jsx)(A, { ...e }) : (0, a.jsx)(R, { ...e });
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
      var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        i = n("390236"),
        u = n("292508"),
        s = n("383294"),
        o = n("913452"),
        d = n("533466"),
        c = n("49111"),
        f = n("765479");
      function p(e) {
        let { windowKey: t, channel: n } = e;
        return (0, a.jsx)(u.default, {
          withTitleBar: !0,
          windowKey: t,
          title: n.name,
          channelId: n.id,
          contentClassName: f.popoutContent,
          children: (0, a.jsx)(i.default.Provider, {
            value: n.guild_id,
            children: (0, a.jsx)(d.default, { providedChannel: n }),
          }),
        });
      }
      function h(e, t) {
        let n = (0, o.useOpenInPopoutExperiment)(t),
          i = l.useCallback(() => {
            s.open(
              "".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id),
              t => (0, a.jsx)(p, { windowKey: t, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 }
            );
          }, [e]);
        return n
          ? (0, a.jsx)(r.MenuItem, {
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
            return b;
          },
        });
      var a = n("274870"),
        l = n("116320"),
        r = n("617559"),
        i = n("213523"),
        u = n("593195"),
        s = n("361777"),
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
        m = n("990864"),
        I = n("274652"),
        g = n("922744"),
        N = n("155207"),
        x = n("745183"),
        y = n("368121"),
        T = n("944633"),
        S = n("228427"),
        L = n("959097"),
        O = n("656038"),
        M = n("49111");
      function b(e, t) {
        switch (e.type) {
          case M.ChannelTypes.DM:
            return l.default;
          case M.ChannelTypes.GROUP_DM:
            let n = (0, a.getIsBroadcastingGDM)(e.id);
            return n ? d.default : N.default;
          case M.ChannelTypes.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return I.default;
            if ((0, O.default)(e)) return m.default;
            else return v.default;
          case M.ChannelTypes.GUILD_TEXT:
            if (e.id === (null == t ? void 0 : t.rulesChannelId))
              return i.default;
            if (e.isNSFW()) return o.default;
            else if ((0, O.default)(e)) return s.default;
            else return u.default;
          case M.ChannelTypes.GUILD_FORUM:
            let b = e.isMediaChannel();
            if (e.isNSFW()) return b ? _.default : p.default;
            if ((0, O.default)(e)) return b ? C.default : f.default;
            else return b ? E.default : c.default;
          case M.ChannelTypes.GUILD_MEDIA:
            if (e.isNSFW()) return _.default;
            if ((0, O.default)(e)) return C.default;
            else return E.default;
          case M.ChannelTypes.GUILD_STAGE_VOICE:
            return S.default;
          case M.ChannelTypes.GUILD_VOICE:
            if ((0, O.default)(e)) return T.default;
            return y.default;
          case M.ChannelTypes.ANNOUNCEMENT_THREAD:
          case M.ChannelTypes.PUBLIC_THREAD:
            if (e.isNSFW()) return g.default;
            if (e.isForumPost()) return h.default;
            else return L.default;
          case M.ChannelTypes.PRIVATE_THREAD:
            if (e.isNSFW()) return g.default;
            return x.default;
          case M.ChannelTypes.GUILD_DIRECTORY:
            return r.default;
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
            return l;
          },
          default: function () {
            return f;
          },
        });
      var a,
        l,
        r = n("759843"),
        i = n("872717"),
        u = n("913144"),
        s = n("271938"),
        o = n("840707"),
        d = n("482931"),
        c = n("49111");
      ((a = l || (l = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (a.USER_SETTINGS_UPDATE = "user_settings_update"),
        (a.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (a.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (a.CONTACT_SYNC = "contact_sync");
      var f = {
        setCountryCode(e) {
          u.default.dispatch({
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
            n = s.default.getFingerprint();
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
            l = {},
            i = s.default.getFingerprint();
          null != i && "" !== i && (l["X-Fingerprint"] = i),
            a && (l.authorization = "");
          let f = await o.default.post({
            url: c.Endpoints.VERIFY_PHONE,
            headers: l,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: r.NetworkActionNames.USER_VERIFY_PHONE,
            },
          });
          return (
            n &&
              u.default.dispatch({
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
            return l;
          },
        });
      let a = "PHONE_VERIFICATION_MODAL_KEY",
        l = 6;
    },
    393027: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("803182"),
        l = n("308503"),
        r = n("49111");
      function i(e) {
        let t = (0, a.matchPath)(null != e ? e : "", {
          path: r.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === r.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, a.matchPath)(null != e ? e : "", {
          path: r.Routes.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      var u = (0, l.default)(e => ({
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
        l = n("819689"),
        r = n("115718"),
        i = n("347895"),
        u = n("341329"),
        s = n("582713"),
        o = n("724210"),
        d = {
          openPrivateChannelAsSidebar(e) {
            let {
              channelId: t,
              messageId: n,
              baseChannelId: r,
              hasSingleMessageRequest: i,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_MESSAGE_REQUEST,
              baseChannelId: r,
              channelId: t,
              details: {
                type: s.SidebarOpenDetailsType.MESSAGE_REQUEST,
                hasSingleMessageRequest: i,
              },
            }),
              null != n
                ? l.default.jumpToMessage({
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
              baseChannelId: i,
              flash: o = !0,
              details: d,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: i,
              channelId: n,
              details: d,
            });
            let c = null == d ? void 0 : d.initialMessageId;
            null != c
              ? l.default.jumpToMessage({
                  channelId: n,
                  messageId: c,
                  flash: o,
                  jumpType: r.JumpTypes.INSTANT,
                })
              : u.default.fetchMessages({ guildId: t, channelId: n });
          },
          openResourceChannelAsSidebar(e) {
            let { guildId: t, channelId: n } = e;
            null != t &&
              ((0, i.selectHomeResourceChannel)(t, n, !1),
              a.default.dispatch({
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
              channelId: i,
              flash: o = !0,
              details: d,
            } = e;
            a.default.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: s.SidebarType.VIEW_THREAD,
              baseChannelId: n,
              channelId: i,
              details: d,
            }),
              (null == d ? void 0 : d.initialMessageId) != null
                ? l.default.jumpToMessage({
                    channelId: i,
                    messageId: d.initialMessageId,
                    flash: o,
                    jumpType: r.JumpTypes.INSTANT,
                  })
                : u.default.fetchMessages({ guildId: t, channelId: i });
          },
          closeChannelSidebar(e) {
            a.default.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
          },
          openGuildSidebar(e) {
            let {
              guildId: t,
              baseChannelId: n,
              sidebarType: l,
              details: r,
            } = e;
            return a.default.dispatch({
              type: "SIDEBAR_VIEW_GUILD",
              sidebarType: l,
              baseChannelId: n,
              guildId: t,
              details: r,
            });
          },
          closeGuildSidebar(e) {
            a.default.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
          },
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
      var a = n("446674"),
        l = n("305961"),
        r = n("316133"),
        i = n("49111");
      function u(e) {
        return (0, a.useStateFromStoresObject)(
          [r.default, l.default],
          () => {
            let t = r.default.countVoiceStatesForChannel(e.id),
              n = l.default.getGuild(e.getGuildId());
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
          n = l.default.getGuild(e.getGuildId());
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
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        r = n("845579"),
        i = n("49111");
      function u(e, t) {
        r.AlwaysPreviewVideo.getSetting()
          ? (0, l.openModalLazy)(
              async () => {
                let { default: t } = await n
                  .el("381736")
                  .then(n.bind(n, "381736"));
                return n =>
                  (0, a.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  t === i.AppContext.POPOUT
                    ? l.POPOUT_MODAL_CONTEXT
                    : l.DEFAULT_MODAL_CONTEXT,
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
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        r = n("782926"),
        i = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...u
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  className: r,
                  fill: l,
                  d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z",
                }),
                (0, a.jsx)("path", {
                  className: r,
                  fill: l,
                  d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z",
                }),
                (0, a.jsx)("path", {
                  className: r,
                  fill: l,
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
      var a = n("37983");
      n("884691");
      var l = n("469563"),
        r = n("587864"),
        i = n("75196"),
        u = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: l = "currentColor",
              foreground: r,
              ...u
            } = e;
            return (0, a.jsxs)("svg", {
              ...(0, i.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, a.jsx)("path", {
                  className: r,
                  fill: l,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z",
                }),
                (0, a.jsx)("path", {
                  className: r,
                  fill: l,
                  d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z",
                }),
                (0, a.jsx)("path", {
                  className: r,
                  fill: l,
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
            return p;
          },
        });
      var a = n("597755"),
        l = n.n(a),
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
            : null === (e = l.os) || void 0 === e
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
        let a = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, r.default)(
              null != a
                ? a
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, r.default)(
              null != a ? a : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: i.default.getFingerprint(),
                attemptId: (0, r.generateAttemptId)(),
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
      var l = n("669491"),
        r = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...s
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, r.default)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              d: "M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72A1 1 0 0 1 13 19v.15a1 1 0 0 1-.35.69l-1 1 .35.36ZM14.66 16.32c.1-.39.26-.75.45-1.09l-8.2-5.47a1 1 0 1 0-1.12 1.66l8.13 5.42a3 3 0 0 1 .74-.52ZM16.43 13.8c.62-.43 1.36-.7 2.15-.78a1 1 0 0 0-.37-.43L9.73 6.93a1 1 0 0 0-1.11 1.66l7.81 5.21Z",
              fill: "string" == typeof i ? i : i.css,
              className: u,
            }),
            (0, a.jsx)("path", {
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
//# sourceMappingURL=2b1176a64691f2128f67.js.map

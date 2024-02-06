(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31800"],
  {
    267363: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ack: function () {
            return s;
          },
          ackChannel: function () {
            return f;
          },
          bulkAck: function () {
            return h;
          },
          localAck: function () {
            return E;
          },
          enableAutomaticAck: function () {
            return L;
          },
          disableAutomaticAck: function () {
            return p;
          },
          ackGuildFeature: function () {
            return C;
          },
          ackUserFeature: function () {
            return A;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("249654"),
        i = n("913144"),
        r = n("401690"),
        a = n("233069"),
        u = n("42203"),
        o = n("245997"),
        d = n("697218"),
        c = n("49111");
      function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = arguments.length > 3 ? arguments[3] : void 0,
          r = arguments.length > 4 ? arguments[4] : void 0;
        i.default.dispatch({
          type: "CHANNEL_ACK",
          channelId: e,
          messageId: l,
          immediate: t,
          force: n,
          context: c.CURRENT_APP_CONTEXT,
          location: r,
        });
      }
      function f(e) {
        e.isCategory()
          ? !(function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                l = u.default.getChannel(e);
              if (null == l || null == l.guild_id) return;
              let i = o.default.getCategories(l.guild_id);
              if (null == i[e]) return;
              let d = i[e]
                  .filter(e => {
                    let { channel: t } = e;
                    return (0, a.isGuildReadableType)(t.type);
                  })
                  .map(e => {
                    let { channel: t } = e;
                    return t.id;
                  }),
                c = [...d];
              for (let e of (d.forEach(e => {
                let t = r.default.getActiveJoinedThreadsForParent(
                  l.guild_id,
                  e
                );
                for (let e in t) c.push(e);
              }),
              c))
                s(e, t, n);
            })(e.id, !0, !0)
          : e.isForumLikeChannel()
            ? s(e.id, !0, !0, l.default.fromTimestamp(Date.now()))
            : s(e.id, !0, !0);
      }
      function h(e, t) {
        i.default.dispatch({
          type: "BULK_ACK",
          channels: e,
          context: c.CURRENT_APP_CONTEXT,
          onFinished: t,
        });
      }
      function E(e) {
        i.default.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
      }
      function L(e, t) {
        i.default.dispatch({
          type: "ENABLE_AUTOMATIC_ACK",
          channelId: e,
          windowId: t,
        });
      }
      function p(e, t) {
        i.default.dispatch({
          type: "DISABLE_AUTOMATIC_ACK",
          channelId: e,
          windowId: t,
        });
      }
      function C(e, t, n) {
        i.default.dispatch({
          type: "GUILD_FEATURE_ACK",
          id: e,
          ackType: t,
          ackedId: n,
          local: !1,
        });
      }
      function A(e, t) {
        var n;
        let l =
          null === (n = d.default.getCurrentUser()) || void 0 === n
            ? void 0
            : n.id;
        null != l &&
          i.default.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e,
            ackedId: t,
            local: !1,
          });
      }
    },
    304580: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var l,
        i,
        r = n("37983");
      n("884691");
      var a = n("414456"),
        u = n.n(a),
        o = n("394846"),
        d = n("77078"),
        c = n("945330"),
        s = n("381546"),
        f = n("782340"),
        h = n("955892");
      ((l = i || (i = {})).DEFAULT = ""),
        (l.BOLD = "Bold"),
        (l.SOLID = "Solid");
      let E = e => {
        let { closeAction: t, variant: n, keybind: l, className: i } = e;
        return (0, r.jsxs)("div", {
          className: u(h.container, i),
          children: [
            (0, r.jsx)(d.Clickable, {
              className: u(h.closeButton, {
                [h.closeButtonBold]: "Bold" === n,
                [h.closeButtonSolid]: "Solid" === n,
              }),
              onClick: t,
              "aria-label": f.default.Messages.CLOSE,
              children:
                "Solid" === n
                  ? (0, r.jsx)(s.default, {
                      width: 24,
                      height: 24,
                      "aria-hidden": !0,
                    })
                  : (0, r.jsx)(c.default, {
                      width: 18,
                      height: 18,
                      "aria-hidden": !0,
                    }),
            }),
            o.isMobile
              ? null
              : (0, r.jsx)("div", {
                  className: u(h.keybind),
                  "aria-hidden": !0,
                  children: l,
                }),
          ],
        });
      };
      (E.defaultProps = { variant: "" }), (E.Variants = i);
      var L = E;
    },
    80300: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          backgroundImagePreloader: function () {
            return c;
          },
        }),
        n("424973");
      var l = n("37983"),
        i = n("884691"),
        r = n("310013"),
        a = n.n(r),
        u = n("407063");
      let o = /url\(['"](.*)['"]\)/,
        d = e => {
          if (null == e || "" === e || "none" === e) return null;
          let t = e.match(o);
          return null != t ? t[1] : e;
        };
      function c(e) {
        class t extends i.Component {
          componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: l } = this.state,
              { style: i } = this.props,
              r = null != i ? d(i.backgroundImage) : null;
            null == r && r !== n
              ? this.setState({ loaded: !0, cached: r })
              : this.cachedURLs.indexOf(r) >= 0
                ? this.setState({ loaded: !0, cached: r })
                : null != r &&
                  r !== n &&
                  !0 === l &&
                  this.setState({ loaded: !1 }, () => this.preloadURL(r));
          }
          preloadURL(e) {
            this.canceller && this.canceller(),
              (this.canceller = (0, u.loadImage)(e, t => {
                this.canceller && (this.canceller = null),
                  !t &&
                    (this.cachedURLs.push(e),
                    this.setState({ cached: e, loaded: !0 }));
                let { onBackgroundImageLoad: n } = this.props;
                n && n(t, e);
              }));
          }
          componentWillUnmount() {
            this.canceller && this.canceller(), (this.cachedURLs.length = 0);
          }
          render() {
            let { style: t, onBackgroundImageLoad: n, ...i } = this.props,
              { loaded: r, cached: a } = this.state;
            if (!r && null != t) {
              var u;
              t = {
                ...t,
                backgroundImage:
                  null == (u = a) || "" === u || "none" === u
                    ? "none"
                    : "url(".concat(u, ")"),
              };
            }
            return (0, l.jsx)(e, { style: t, ...i });
          }
          constructor(e) {
            super(e), (this.cachedURLs = []), (this.canceller = null);
            let { style: t } = e,
              n = null != t ? d(t.backgroundImage) : null;
            (this.cachedURLs = [n]), (this.state = { cached: n, loaded: !0 });
          }
        }
        return a(t, e), t;
      }
    },
    253980: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("341869");
      n.es(l, t);
    },
    320954: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("917351"),
        i = n.n(l);
      function r(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : () => !0;
        return i(e)
          .map(e =>
            "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]
          )
          .flattenDeep()
          .filter(n)
          .value();
      }
    },
    245997: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("424973"),
        n("222007"),
        n("808653");
      var l = n("446674"),
        i = n("913144"),
        r = n("320954"),
        a = n("379881"),
        u = n("271938"),
        o = n("42203"),
        d = n("923959"),
        c = n("305961"),
        s = n("49111");
      let f = null,
        h = {},
        E = null;
      function L() {
        return { _categories: [], null: [] };
      }
      let p = L();
      function C(e, t) {
        e.index = t;
      }
      function A(e) {
        let t = d.default.getChannels(e),
          n = L(),
          l = e => {
            var t;
            let { channel: l } = e,
              i =
                null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) &&
                void 0 !== t
                  ? t
                  : n.null;
            i.push({ channel: l, index: -1 });
          };
        return (
          t[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let { channel: t } = e;
            n._categories.push({ channel: t, index: -1 }), (n[t.id] = []);
          }),
          t[(0, d.GUILD_SELECTABLE_CHANNELS_KEY)].forEach(l),
          t[(0, d.GUILD_VOCAL_CHANNELS_KEY)].forEach(l),
          (0, r.default)(n._categories, n).forEach(C),
          (h[e] = n),
          n
        );
      }
      function g() {
        (h = {}), null != f && A(f);
      }
      function _(e) {
        let {
          guild: { id: t },
        } = e;
        (h[t] = void 0), f === t && A(t);
      }
      function I(e) {
        let {
          channel: { guild_id: t },
        } = e;
        if (null == t) return !1;
        (h[t] = void 0), f === t && A(t);
      }
      function v(e) {
        let { guildId: t } = e;
        (h[t] = void 0), t === f && A(t);
      }
      function N(e, t) {
        if (((E = t), null == e || null == e.getGuildId())) return !1;
        let n = e.getGuildId();
        return null != n && ((h[n] = void 0), n === f && A(n), !0);
      }
      function R() {
        A(s.FAVORITES);
      }
      class S extends l.default.Store {
        initialize() {
          this.waitFor(d.default, c.default, u.default, o.default, a.default),
            this.syncWith([a.default], R);
        }
        getCategories(e) {
          return null != e
            ? (function (e) {
                let t = h[e];
                return null != t ? t : A(e);
              })(e)
            : p;
        }
      }
      S.displayName = "GuildCategoryStore";
      var T = new S(i.default, {
        CHANNEL_SELECT: function (e) {
          let { guildId: t } = e;
          if (((f = null != t ? t : null), null == t || null != h[t]))
            return !1;
          A(t);
        },
        CONNECTION_OPEN: g,
        OVERLAY_INITIALIZE: g,
        CACHE_LOADED_LAZY: g,
        GUILD_CREATE: _,
        GUILD_UPDATE: _,
        GUILD_DELETE: function (e) {
          let {
            guild: { id: t },
          } = e;
          delete h[t];
        },
        CHANNEL_CREATE: I,
        CHANNEL_DELETE: I,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          for (let { guild_id: e } of t)
            null != e && ((h[e] = void 0), (n = !0), f === e && A(e));
          return n;
        },
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e;
          if (u.default.getId() !== n.id) return !1;
          (h[t] = void 0), t === f && A(t);
        },
        CURRENT_USER_UPDATE: function () {
          if (null == f) return !1;
          A(f);
        },
        GUILD_ROLE_CREATE: v,
        GUILD_ROLE_UPDATE: v,
        GUILD_ROLE_DELETE: v,
        IMPERSONATE_UPDATE: v,
        IMPERSONATE_STOP: v,
        VOICE_CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          return null == t && null != E
            ? N(o.default.getChannel(E), null)
            : N(o.default.getChannel(t), t);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return t.reduce((e, t) => {
            let { channelId: n, sessionId: l } = t;
            return u.default.getSessionId() !== l
              ? e
              : N(o.default.getChannel(n), n) || e;
          }, !1);
        },
      });
    },
    476263: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var l = n("37983"),
        i = n("884691"),
        r = n("414456"),
        a = n.n(r),
        u = n("90915"),
        o = n("446674"),
        d = n("669491"),
        c = n("77078"),
        s = n("80300"),
        f = n("471671"),
        h = n("103603"),
        E = n("474293"),
        L = n("580357"),
        p = n("491088");
      let C = {
          SMOL: "Smol",
          MINI: "Mini",
          SMALLER: "Smaller",
          SMALL: "Small",
          MEDIUM: "Medium",
          LARGE: "Large",
          LARGER: "Larger",
          XLARGE: "XLarge",
        },
        A = {
          [C.SMOL]: 16,
          [C.MINI]: 20,
          [C.SMALLER]: 24,
          [C.SMALL]: 30,
          [C.MEDIUM]: 40,
          [C.LARGE]: 50,
          [C.LARGER]: 64,
          [C.XLARGE]: 100,
        },
        g = {
          [C.SMOL]: [10, 10, 8, 6, 6, 4],
          [C.MINI]: [12, 12, 10, 10, 8, 6, 4],
          [C.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
          [C.SMALL]: [14, 14, 12, 12, 10, 8, 6],
          [C.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
          [C.LARGE]: [18, 18, 16, 16, 14, 12, 10],
          [C.LARGER]: [19, 19, 17, 17, 15, 13, 11],
          [C.XLARGE]: [20, 20, 18, 18, 16, 14, 12],
        };
      class _ extends i.PureComponent {
        renderAcronym() {
          let { guild: e, iconSrc: t } = this.props;
          return null != e.icon || null != t
            ? null
            : (0, l.jsx)("div", { className: p.acronym, children: e.acronym });
        }
        renderBadge() {
          let { showBadge: e, guild: t, badgeStrokeColor: n } = this.props;
          return e && null != t.hasFeature
            ? (0, l.jsx)(L.default, {
                className: p.guildIconBadge,
                guild: t,
                badgeStrokeColor: n,
              })
            : null;
        }
        renderIcon() {
          var e, t;
          let {
              guild: n,
              className: i,
              showBadge: r,
              active: u,
              size: o,
              style: d = {},
              textScale: s,
              showTooltip: f,
              tooltipPosition: h,
              onClick: L,
              to: C,
              badgeStrokeColor: A,
              animate: _,
              tabIndex: I,
              iconSrc: v,
              "aria-hidden": N,
              ...R
            } = this.props,
            S = g[o],
            T = null != L ? c.Clickable : "div";
          return (0, l.jsxs)(T, {
            className: a(p.icon, i, (0, E.getClass)(p, "iconSize", o), {
              [null !== (e = (0, E.getClass)(p, "iconActive", o)) &&
              void 0 !== e
                ? e
                : ""]: u,
              [p.iconInactive]: !u,
              [p.noIcon]: null == n.icon,
            }),
            "aria-hidden": N,
            style:
              null == n.icon
                ? {
                    fontSize:
                      (null !== (t = S[n.acronym.length]) && void 0 !== t
                        ? t
                        : S[S.length - 1]) * s,
                    ...d,
                  }
                : d,
            onClick: null != C || null == L ? void 0 : L,
            tabIndex: I,
            ...R,
            children: [this.renderAcronym(), this.renderBadge()],
          });
        }
        renderTooltip() {
          let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
          return t
            ? (0, l.jsx)(c.Tooltip, {
                text: e.name,
                position: n,
                "aria-label": !1,
                children: e =>
                  i.cloneElement(i.Children.only(this.renderIcon()), { ...e }),
              })
            : this.renderIcon();
        }
        render() {
          let {
            to: e,
            guild: t,
            source: n,
            tabIndex: i,
            "aria-hidden": r,
          } = this.props;
          return null != e
            ? (0, l.jsx)(u.Link, {
                "aria-hidden": r,
                to: {
                  pathname: e,
                  state: null != n ? { analyticsSource: n } : null,
                },
                "aria-label": t.toString(),
                tabIndex: i,
                children: this.renderTooltip(),
              })
            : this.renderTooltip();
        }
      }
      let I = o.default.connectStores([f.default], e => {
        let { guild: t, animate: n, iconSrc: l, style: i, size: r } = e;
        return {
          style: {
            ...i,
            backgroundImage: (0, h.makeCssUrlString)(
              null != l ? l : t.getIconURL(A[r], n && f.default.isFocused())
            ),
          },
        };
      })((0, s.backgroundImagePreloader)(e => (0, l.jsx)(_, { ...e })));
      class v extends i.PureComponent {
        render() {
          return (0, l.jsx)(I, { ...this.props });
        }
      }
      (v.Sizes = C),
        (v.defaultProps = {
          size: C.LARGE,
          textScale: 1,
          showBadge: !1,
          showTooltip: !1,
          active: !1,
          tooltipPosition: "top",
          badgeStrokeColor: d.default.unsafe_rawColors.WHITE_500.css,
          animate: !1,
        });
      var N = v;
    },
    171710: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("469563"),
        r = n("253980"),
        a = n("75196"),
        u = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: r,
              ...u
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, a.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, l.jsx)("path", {
                className: r,
                fill: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.291 5.70697L15.998 9.41397L21.705 3.70697L20.291 2.29297L15.998 6.58597L13.705 4.29297L12.291 5.70697ZM1.99805 7H11.088C11.564 9.837 14.025 12 16.998 12V18C16.998 19.103 16.102 20 14.998 20H8.33205L2.99805 24V20H1.99805C0.894047 20 -0.00195312 19.103 -0.00195312 18V9C-0.00195312 7.897 0.894047 7 1.99805 7Z",
              }),
            });
          },
          r.ChatCheckIcon,
          void 0,
          { size: 24 }
        );
    },
    474293: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getClass: function () {
            return i;
          },
        }),
        n("808653");
      var l = n("159885");
      function i(e, t) {
        for (
          var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2;
          r < n;
          r++
        )
          i[r - 2] = arguments[r];
        let a = i.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
          u = "".concat(t).concat(a),
          o = e[u];
        if (null != o) return o;
      }
    },
    341869: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatCheckIcon: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("669491"),
        r = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, r.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M12.66 21.98c.4-.03.56-.51.28-.8l-.06-.06a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l2.53-2.52a3 3 0 0 1 .64-.5c.14-.07.24-.2.27-.34a10 10 0 1 0-18.24 3.32c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.22 0 .44 0 .66-.02Z",
              className: u,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof a ? a : a.css,
              d: "M23.7 17.7a1 1 0 0 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
              className: u,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=31800.586e542bd69ce108b4d2.js.map

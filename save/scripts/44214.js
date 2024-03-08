(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44214"],
  {
    689226: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          getRoleIconData: function () {
            return d;
          },
          replaceRoleIconSourceSize: function () {
            return f;
          },
          isRoleIconAssetUrl: function () {
            return _;
          },
          canGuildUseRoleIcons: function () {
            return C;
          },
        }),
        e("781738");
      var l = e("867805"),
        i = e("407063"),
        o = e("315102"),
        a = e("773336"),
        u = e("49111");
      let c = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        r = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        s = (0, a.isAndroid)(),
        d = (n, t) => {
          if (null == n) return null;
          let e =
            null != n.unicodeEmoji
              ? l.default.getByName(
                  l.default.convertSurrogateToName(n.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: v(n, t),
            unicodeEmoji: null != e ? e : void 0,
          };
        },
        f = (n, t) =>
          n.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())
            )
          ),
        v = (n, t) => {
          let { id: e, icon: l } = n;
          if (null == l) return;
          if (l.startsWith("data:")) return l;
          let a = o.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)())),
            (f = s ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(c, "/")
                .concat(e, "/")
                .concat(l, ".")
                .concat(a, "?")
                .concat(d)
                .concat(f)
            : "".concat(r).concat(u.Endpoints.ROLE_ICON(e, l), "?").concat(d);
        },
        _ = n =>
          n.startsWith(c) ||
          (n.startsWith("".concat(r, "/roles")) && n.includes("/icons/")),
        C = (n, t) => {
          var e;
          let l =
            (null == t
              ? void 0
              : null === (e = t.tags) || void 0 === e
                ? void 0
                : e.subscription_listing_id) != null;
          return l || n.features.has(u.GuildFeatures.ROLE_ICONS);
        };
    },
    467475: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return a;
          },
        });
      var l = e("65597"),
        i = e("42203"),
        o = e("724210");
      function a(n) {
        let t = (0, l.default)([i.default], () => {
          let t = i.default.getChannel(n);
          return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? i.default.getChannel(null == t ? void 0 : t.parent_id)
            : null;
        });
        return (
          (null == t
            ? void 0
            : t.hasFlag(o.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
        );
      }
    },
    146574: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          getNativeContextMenuChannelAnalytics: function () {
            return o;
          },
        });
      var l = e("18494"),
        i = e("724210");
      function o() {
        var n;
        let t =
          null !== (n = l.default.getCurrentlySelectedChannelId()) &&
          void 0 !== n
            ? n
            : void 0;
        return null != t && (0, i.isStaticChannelRoute)(t)
          ? { channel_static_route: t }
          : { channel_id: t };
      }
    },
    399758: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return r;
          },
        });
      var l = e("37983");
      e("884691");
      var i = e("77078"),
        o = e("272030"),
        a = e("773336"),
        u = e("26051"),
        c = e("782340");
      function r(n) {
        let { href: t, textContent: e, onSelect: r } = n,
          s = (0, u.default)(t, e);
        return a.isPlatformEmbedded && null != s
          ? (0, l.jsx)(i.Menu, {
              navId: "image-context",
              onClose: o.closeContextMenu,
              "aria-label": c.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
              onSelect: r,
              children: (0, l.jsx)(i.MenuGroup, { children: s }),
            })
          : null;
      }
    },
    26051: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return E;
          },
        });
      var l = e("37983");
      e("884691");
      var i = e("77078"),
        o = e("689226"),
        a = e("467475"),
        u = e("24373"),
        c = e("48703"),
        r = e("599110"),
        s = e("128259"),
        d = e("773336"),
        f = e("50885"),
        v = e("146574"),
        _ = e("49111"),
        C = e("782340");
      function E(n, t, e, E) {
        let N = (0, a.default)(null == e ? void 0 : e.getChannelId());
        if (
          !d.isPlatformEmbedded ||
          null == n ||
          "" === n ||
          N ||
          (null == E ? void 0 : E.shouldHideMediaOptions) === !0 ||
          (null != n && null != (0, u.isStickerAssetUrl)(n)) ||
          (null != n && (0, o.isRoleIconAssetUrl)(n))
        )
          return null;
        let h = (0, c.getHostname)(n),
          g = e => {
            r.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
              hostname: h,
              ...(0, v.getNativeContextMenuChannelAnalytics)(),
            }),
              (0, s.handleClick)(
                {
                  href: n,
                  trusted: (0, s.isLinkTrusted)(n, t),
                  shouldConfirm: !0,
                },
                e
              );
          };
        return [
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "copy-native-link",
              label: C.default.Messages.COPY_LINK,
              action: () => {
                r.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                  hostname: h,
                  ...(0, v.getNativeContextMenuChannelAnalytics)(),
                }),
                  f.default.copy(n);
              },
            },
            "copy-native-link"
          ),
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "open-native-link",
              label: C.default.Messages.OPEN_LINK,
              action: n => g(n),
            },
            "open-native-link"
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=ca85bb0d365bfb3c6525.js.map

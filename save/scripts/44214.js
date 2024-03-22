(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44214"],
  {
    689226: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
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
        n("781738");
      var l = n("867805"),
        i = n("407063"),
        o = n("315102"),
        a = n("773336"),
        u = n("49111");
      let c = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        r = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        s = (0, a.isAndroid)(),
        d = (t, e) => {
          if (null == t) return null;
          let n =
            null != t.unicodeEmoji
              ? l.default.getByName(
                  l.default.convertSurrogateToName(t.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: v(t, e),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (t, e) =>
          t.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)())
            )
          ),
        v = (t, e) => {
          let { id: n, icon: l } = t;
          if (null == l) return;
          if (l.startsWith("data:")) return l;
          let a = o.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != e &&
            ((d =
              "size=" +
              (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)())),
            (f = s ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(c, "/")
                .concat(n, "/")
                .concat(l, ".")
                .concat(a, "?")
                .concat(d)
                .concat(f)
            : "".concat(r).concat(u.Endpoints.ROLE_ICON(n, l), "?").concat(d);
        },
        _ = t =>
          t.startsWith(c) ||
          (t.startsWith("".concat(r, "/roles")) && t.includes("/icons/")),
        C = (t, e) => {
          var n;
          let l =
            (null == e
              ? void 0
              : null === (n = e.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return l || t.features.has(u.GuildFeatures.ROLE_ICONS);
        };
    },
    467475: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return a;
          },
        });
      var l = n("65597"),
        i = n("42203"),
        o = n("724210");
      function a(t) {
        let e = (0, l.useStateFromStores)([i.default], () => {
          let e = i.default.getChannel(t);
          return (null == e ? void 0 : e.parent_id) != null && e.isForumPost()
            ? i.default.getChannel(null == e ? void 0 : e.parent_id)
            : null;
        });
        return (
          (null == e
            ? void 0
            : e.hasFlag(o.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
        );
      }
    },
    146574: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getNativeContextMenuChannelAnalytics: function () {
            return o;
          },
        });
      var l = n("18494"),
        i = n("724210");
      function o() {
        var t;
        let e =
          null !== (t = l.default.getCurrentlySelectedChannelId()) &&
          void 0 !== t
            ? t
            : void 0;
        return null != e && (0, i.isStaticChannelRoute)(e)
          ? { channel_static_route: e }
          : { channel_id: e };
      }
    },
    399758: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("77078"),
        o = n("272030"),
        a = n("773336"),
        u = n("26051"),
        c = n("782340");
      function r(t) {
        let { href: e, textContent: n, onSelect: r } = t,
          s = (0, u.default)(e, n);
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
    26051: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return E;
          },
        });
      var l = n("37983");
      n("884691");
      var i = n("77078"),
        o = n("689226"),
        a = n("467475"),
        u = n("24373"),
        c = n("48703"),
        r = n("599110"),
        s = n("128259"),
        d = n("773336"),
        f = n("50885"),
        v = n("146574"),
        _ = n("49111"),
        C = n("782340");
      function E(t, e, n, E) {
        let N = (0, a.default)(null == n ? void 0 : n.getChannelId());
        if (
          !d.isPlatformEmbedded ||
          null == t ||
          "" === t ||
          N ||
          (null == E ? void 0 : E.shouldHideMediaOptions) === !0 ||
          (null != t && null != (0, u.isStickerAssetUrl)(t)) ||
          (null != t && (0, o.isRoleIconAssetUrl)(t))
        )
          return null;
        let h = (0, c.getHostname)(t),
          g = n => {
            r.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
              hostname: h,
              ...(0, v.getNativeContextMenuChannelAnalytics)(),
            }),
              (0, s.handleClick)(
                {
                  href: t,
                  trusted: (0, s.isLinkTrusted)(t, e),
                  shouldConfirm: !0,
                },
                n
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
                  f.default.copy(t);
              },
            },
            "copy-native-link"
          ),
          (0, l.jsx)(
            i.MenuItem,
            {
              id: "open-native-link",
              label: C.default.Messages.OPEN_LINK,
              action: t => g(t),
            },
            "open-native-link"
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=7e56af8dab74c34fbafd.js.map

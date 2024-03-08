(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56164"],
  {
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
            return h;
          },
          canGuildUseRoleIcons: function () {
            return v;
          },
        }),
        n("781738");
      var a = n("867805"),
        l = n("407063"),
        i = n("315102"),
        u = n("773336"),
        o = n("49111");
      let s = ""
          .concat(location.protocol, "//")
          .concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        r = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, u.isAndroid)(),
        d = (e, t) => {
          if (null == e) return null;
          let n =
            null != e.unicodeEmoji
              ? a.default.getByName(
                  a.default.convertSurrogateToName(e.unicodeEmoji, !1)
                )
              : void 0;
          return {
            customIconSrc: E(e, t),
            unicodeEmoji: null != n ? n : void 0,
          };
        },
        f = (e, t) =>
          e.replace(
            /size=[0-9]+/g,
            "size=".concat(
              (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)())
            )
          ),
        E = (e, t) => {
          let { id: n, icon: a } = e;
          if (null == a) return;
          if (a.startsWith("data:")) return a;
          let u = i.SUPPORTS_WEBP ? "webp" : "png",
            d = "",
            f = "quality=lossless";
          return (null != t &&
            ((d =
              "size=" +
              (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)())),
            (f = c ? "" : "&" + f)),
          null != window.GLOBAL_ENV.CDN_HOST)
            ? ""
                .concat(s, "/")
                .concat(n, "/")
                .concat(a, ".")
                .concat(u, "?")
                .concat(d)
                .concat(f)
            : "".concat(r).concat(o.Endpoints.ROLE_ICON(n, a), "?").concat(d);
        },
        h = e =>
          e.startsWith(s) ||
          (e.startsWith("".concat(r, "/roles")) && e.includes("/icons/")),
        v = (e, t) => {
          var n;
          let a =
            (null == t
              ? void 0
              : null === (n = t.tags) || void 0 === n
                ? void 0
                : n.subscription_listing_id) != null;
          return a || e.features.has(o.GuildFeatures.ROLE_ICONS);
        };
    },
    467475: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("65597"),
        l = n("42203"),
        i = n("724210");
      function u(e) {
        let t = (0, a.default)([l.default], () => {
          let t = l.default.getChannel(e);
          return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? l.default.getChannel(null == t ? void 0 : t.parent_id)
            : null;
        });
        return (
          (null == t
            ? void 0
            : t.hasFlag(i.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
        );
      }
    },
    146574: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getNativeContextMenuChannelAnalytics: function () {
            return i;
          },
        });
      var a = n("18494"),
        l = n("724210");
      function i() {
        var e;
        let t =
          null !== (e = a.default.getCurrentlySelectedChannelId()) &&
          void 0 !== e
            ? e
            : void 0;
        return null != t && (0, l.isStaticChannelRoute)(t)
          ? { channel_static_route: t }
          : { channel_id: t };
      }
    },
    467592: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("272030"),
        u = n("773336"),
        o = n("447651"),
        s = n("26051"),
        r = n("782340");
      function c(e) {
        let { src: t, onSelect: n } = e,
          c = (0, o.default)(t),
          d = (0, s.default)(t, null);
        return u.isPlatformEmbedded
          ? (0, a.jsxs)(l.Menu, {
              navId: "image-context",
              onClose: i.closeContextMenu,
              "aria-label": r.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
              onSelect: n,
              children: [
                (0, a.jsx)(l.MenuGroup, { children: c }),
                (0, a.jsx)(l.MenuGroup, { children: d }),
              ],
            })
          : null;
      }
    },
    447651: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("404118"),
        u = n("689226"),
        o = n("467475"),
        s = n("599110"),
        r = n("773336"),
        c = n("286235"),
        d = n("253981"),
        f = n("50885"),
        E = n("146574"),
        h = n("49111"),
        v = n("782340");
      let _ = "https://media.discordapp.net",
        g = /^.*\.discordapp\.net$/,
        p = "cdn.discordapp.com",
        M = "".concat(_, "/stickers"),
        C = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        I = new Set(["jpg", "jpeg", "png"]),
        N = e => {
          var t, n, a, l;
          return null === (l = d.default.toURLSafe(e)) || void 0 === l
            ? void 0
            : null === (a = l.pathname) || void 0 === a
              ? void 0
              : null === (n = a.split(".")) || void 0 === n
                ? void 0
                : null === (t = n.pop()) || void 0 === t
                  ? void 0
                  : t.toLowerCase();
        };
      function m(e, t) {
        i.default.show({ title: v.default.Messages.ERROR, body: e }),
          c.default.captureException(t);
      }
      function A(e, t, n) {
        let i = (0, o.default)(null == t ? void 0 : t.getChannelId());
        if (
          i ||
          (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
          !r.isPlatformEmbedded ||
          null == e ||
          !(function (e) {
            let t = d.default.toURLSafe(e);
            if (null == t) return !1;
            let n = N(e);
            return (
              (g.test(t.hostname) || t.host === p) &&
              !e.startsWith(M) &&
              !(0, u.isRoleIconAssetUrl)(e) &&
              null != n &&
              C.has(n)
            );
          })(e)
        )
          return null;
        let c = (function (e) {
            let t = d.default.toURLSafe(e);
            return null == t || t.host === p
              ? e
              : t.origin === _
                ? ((t.host = p),
                  t.searchParams.delete("size"),
                  t.searchParams.delete("width"),
                  t.searchParams.delete("height"),
                  t.searchParams.delete("quality"),
                  t.searchParams.delete("format"),
                  t.toString())
                : (t.searchParams.delete("width"),
                  t.searchParams.delete("height"),
                  t.searchParams.set("quality", "lossless"),
                  t.toString());
          })(e),
          A = async () => {
            try {
              await f.default.saveImage(c),
                s.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, E.getNativeContextMenuChannelAnalytics)(),
                });
            } catch (e) {
              s.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, E.getNativeContextMenuChannelAnalytics)(),
              }),
                m(v.default.Messages.ERROR_SAVING_IMAGE, e);
            }
          },
          O = async () => {
            try {
              await f.default.copyImage(c),
                s.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, E.getNativeContextMenuChannelAnalytics)(),
                });
            } catch (e) {
              m(v.default.Messages.ERROR_COPYING_IMAGE, e),
                s.default.track(
                  h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED,
                  { ...(0, E.getNativeContextMenuChannelAnalytics)() }
                );
            }
          };
        return [
          f.default.canCopyImage() &&
          (function (e) {
            let t = N(e);
            return null != t && I.has(t);
          })(e)
            ? (0, a.jsx)(
                l.MenuItem,
                {
                  id: "copy-image",
                  label: v.default.Messages.COPY_IMAGE_MENU_ITEM,
                  action: O,
                },
                "copy-image"
              )
            : null,
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "save-image",
              label: v.default.Messages.SAVE_IMAGE_MENU_ITEM,
              action: A,
            },
            "save-image"
          ),
        ];
      }
    },
    26051: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("77078"),
        i = n("689226"),
        u = n("467475"),
        o = n("24373"),
        s = n("48703"),
        r = n("599110"),
        c = n("128259"),
        d = n("773336"),
        f = n("50885"),
        E = n("146574"),
        h = n("49111"),
        v = n("782340");
      function _(e, t, n, _) {
        let g = (0, u.default)(null == n ? void 0 : n.getChannelId());
        if (
          !d.isPlatformEmbedded ||
          null == e ||
          "" === e ||
          g ||
          (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 ||
          (null != e && null != (0, o.isStickerAssetUrl)(e)) ||
          (null != e && (0, i.isRoleIconAssetUrl)(e))
        )
          return null;
        let p = (0, s.getHostname)(e),
          M = n => {
            r.default.track(h.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
              hostname: p,
              ...(0, E.getNativeContextMenuChannelAnalytics)(),
            }),
              (0, c.handleClick)(
                {
                  href: e,
                  trusted: (0, c.isLinkTrusted)(e, t),
                  shouldConfirm: !0,
                },
                n
              );
          };
        return [
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "copy-native-link",
              label: v.default.Messages.COPY_LINK,
              action: () => {
                r.default.track(h.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                  hostname: p,
                  ...(0, E.getNativeContextMenuChannelAnalytics)(),
                }),
                  f.default.copy(e);
              },
            },
            "copy-native-link"
          ),
          (0, a.jsx)(
            l.MenuItem,
            {
              id: "open-native-link",
              label: v.default.Messages.OPEN_LINK,
              action: e => M(e),
            },
            "open-native-link"
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=1da8d065ace285cadd28.js.map

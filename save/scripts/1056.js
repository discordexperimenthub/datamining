(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1056"],
  {
    819074: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a6ecd83d0dec80c3b73d.svg";
    },
    96154: function (e, t, n) {
      "use strict";
      e.exports = n.p + "c6385e608fcdaec54ef4.svg";
    },
    976078: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b2bc10c8c9d44f0ff644.svg";
    },
    742203: function (e, t, n) {
      "use strict";
      e.exports = n.p + "838d4bac7b80d28fd676.svg";
    },
    381e3: function (e, t, n) {
      "use strict";
      e.exports = n.p + "8cd255a58ce1af51e9ef.svg";
    },
    637816: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a2c736476ce092c94a5b.svg";
    },
    637099: function (e, t, n) {
      "use strict";
      e.exports = n.p + "55067ac9356cb0674ad3.svg";
    },
    389902: function (e, t, n) {
      "use strict";
      e.exports = n.p + "dcb57f386a6bf90a27c9.svg";
    },
    321211: function (e, t, n) {
      "use strict";
      e.exports = n.p + "bb0ba69615cae0dd25b7.svg";
    },
    786937: function (e, t, n) {
      "use strict";
      e.exports = n.p + "ecc4859664616ed5ad9a.svg";
    },
    649486: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n("222007");
      var s,
        a,
        l = n("37983"),
        r = n("884691"),
        i = n("414456"),
        o = n.n(i),
        c = n("597755"),
        d = n.n(c),
        u = n("394846"),
        f = n("171718"),
        p = n("446674"),
        m = n("77078"),
        g = n("774146"),
        x = n("271938"),
        O = n("697218"),
        D = n("476765"),
        h = n("599110"),
        v = n("98013"),
        N = n("439932"),
        A = n("49111"),
        L = n("782340"),
        b = n("847674");
      ((a = s || (s = {}))[(a.OSX = 0)] = "OSX"),
        (a[(a.WINDOWS = 1)] = "WINDOWS"),
        (a[(a.LINUX = 2)] = "LINUX"),
        (a[(a.IOS = 3)] = "IOS"),
        (a[(a.ANDROID = 4)] = "ANDROID");
      let S = [
          {
            getOs: () => L.default.Messages.PLATFORM_MACOS,
            icon: b.apple,
            url: () => (0, v.makeDesktopDownloadURL)("osx", !1),
            platformKey: 0,
          },
          {
            getOs: () => L.default.Messages.PLATFORM_WINDOWS,
            icon: b.windows,
            url: () => (0, v.makeDesktopDownloadURL)("win", !1),
            platformKey: 1,
          },
          {
            getOs: () => L.default.Messages.PLATFORM_LINUX,
            icon: b.linux,
            url: [
              {
                url: () => (0, v.makeDesktopDownloadURL)("linux", !1, "deb"),
                getText: () => L.default.Messages.DEB,
              },
              {
                url: () => (0, v.makeDesktopDownloadURL)("linux", !1, "tar.gz"),
                getText: () => L.default.Messages.TAR_GZ,
              },
            ],
            platformKey: 2,
          },
        ],
        M = [
          {
            getOs: () => L.default.Messages.PLATFORM_IOS,
            icon: b.ios,
            url: () => A.DownloadLinks.IOS,
            platformKey: 3,
          },
          {
            getOs: () => L.default.Messages.PLATFORM_ANDROID,
            icon: b.android,
            url: () => A.DownloadLinks.ANDROID,
            platformKey: 4,
          },
        ],
        j = (0, N.getThemeClass)(A.ThemeTypes.LIGHT),
        w = e => {
          let { url: t, text: n, onClick: s } = e;
          return (0, l.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: b.downloadButton,
            onClick: s,
            children: n,
          });
        },
        k = e => {
          let t,
            {
              platform: n,
              onClick: s,
              onMouseEnter: a,
              isActive: r,
              claimed: i,
            } = e,
            { getOs: c, icon: d, url: u, platformKey: f } = n,
            p = c(),
            g = o(b.icon, d);
          if (Array.isArray(u))
            t = u.map((e, t) => {
              let n = i ? e.url() : "";
              return (0, l.jsx)(
                w,
                { url: n, onClick: () => s(p), text: e.getText() },
                "".concat(n, "-").concat(t)
              );
            });
          else {
            let e = i ? u() : void 0;
            t = (0, l.jsx)(w, {
              url: e,
              onClick: () => s(p),
              text: L.default.Messages.DOWNLOAD,
            });
          }
          return (0, l.jsx)("li", {
            className: o(b.platform, { [b.active]: r }),
            onMouseEnter: () => a(f),
            children: (0, l.jsxs)("div", {
              className: b.contentWrapper,
              children: [
                (0, l.jsxs)("div", {
                  className: b.iconWrap,
                  children: [
                    (0, l.jsx)("div", { className: g }),
                    (0, l.jsx)("div", { className: o(b.active, g) }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(m.Heading, {
                      className: b.platformName,
                      variant: "heading-lg/semibold",
                      children: p,
                    }),
                    (0, l.jsx)("div", {
                      className: o(b.downloadButtons, {
                        [b.list]: Array.isArray(t),
                      }),
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function I(e) {
        let { source: t, onClose: n, transitionState: s } = e,
          a = (0, p.useStateFromStores)([O.default], () =>
            O.default.getCurrentUser()
          ),
          i = (0, p.useStateFromStores)([x.default], () =>
            x.default.getFingerprint()
          ),
          c = null == a || a.isClaimed(),
          [v, N] = r.useState(
            (function () {
              var e;
              switch (null === (e = d.os) || void 0 === e ? void 0 : e.family) {
                case "OS X":
                  return 0;
                case "Windows":
                  return 1;
                case "Ubuntu":
                case "Debian":
                case "Fedora":
                case "Red Hat":
                case "SuSE":
                case "Linux":
                  return 2;
                case "iOS":
                  return 3;
                case "Android":
                  return 4;
                default:
                  return;
              }
            })()
          );
        function w(e) {
          (null != f.getToken() || null != i) &&
            h.default.track(A.AnalyticEvents.DOWNLOAD_APP, {
              platform: e,
              ptb: !1,
              released: !0,
              has_e_mail: c,
              referring_location: t,
              qr_code: !1,
            }),
            !c && (n(), g.openClaimAccountModal());
        }
        function I(e) {
          N(e);
        }
        r.useEffect(() => {
          h.default.track(A.AnalyticEvents.OPEN_MODAL, {
            type: "Download App",
            source: { location: t },
          });
        }, [t]);
        let y = (0, D.useUID)();
        return (0, l.jsx)(m.ModalRoot, {
          className: o(b.downloadApps, j),
          transitionState: s,
          "aria-labelledby": y,
          children: (0, l.jsx)("div", {
            className: b.inner,
            children: (0, l.jsxs)(m.HeadingLevel, {
              component: (0, l.jsx)(m.HiddenVisually, {
                children: (0, l.jsx)(m.H, {
                  id: y,
                  children: L.default.Messages.DOWNLOAD_APP,
                }),
              }),
              children: [
                (0, l.jsx)(m.ModalCloseButton, {
                  onClick: n,
                  className: b.modalCloseButton,
                }),
                !u.isMobile &&
                  (0, l.jsx)("div", {
                    className: b.platformsWrap,
                    children: (0, l.jsx)(m.HeadingLevel, {
                      component: (0, l.jsx)(m.Heading, {
                        variant: "heading-lg/semibold",
                        className: b.header,
                        children: L.default.Messages.DOWNLOAD_DESKTOP_TITLE,
                      }),
                      children: (0, l.jsx)("ul", {
                        className: b.platforms,
                        children: S.map(e =>
                          (0, l.jsx)(
                            k,
                            {
                              isActive: v === e.platformKey,
                              platform: e,
                              onClick: w,
                              onMouseEnter: I,
                              claimed: c,
                            },
                            e.platformKey
                          )
                        ),
                      }),
                    }),
                  }),
                (0, l.jsx)("div", {
                  className: b.platformsWrap,
                  children: (0, l.jsxs)(m.HeadingLevel, {
                    component: (0, l.jsx)(l.Fragment, {
                      children:
                        !u.isMobile &&
                        (0, l.jsx)(m.Heading, {
                          variant: "heading-lg/semibold",
                          className: b.header,
                          children: L.default.Messages.DOWNLOAD_MOBILE_TITLE,
                        }),
                    }),
                    children: [
                      (0, l.jsx)("ul", {
                        className: b.platforms,
                        children: M.map(e =>
                          (0, l.jsx)(
                            k,
                            {
                              isActive: v === e.platformKey,
                              platform: e,
                              onClick: w,
                              onMouseEnter: I,
                              claimed: c,
                            },
                            e.platformKey
                          )
                        ),
                      }),
                      (0, l.jsx)(m.Text, {
                        className: b.footer,
                        variant: "text-sm/normal",
                        children:
                          L.default.Messages.DOWNLOAD_DESKTOP_FOOTER.format(),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return r;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return o;
          },
        });
      var s = n("995008"),
        a = n.n(s),
        l = n("775560");
      let r = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        i = () => (0, l.useLazyValue)(() => r()),
        o = e => {
          let { children: t } = e;
          return t(i());
        };
    },
    98013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          makeDesktopDownloadURL: function () {
            return c;
          },
          getPlatformReadableName: function () {
            return u;
          },
          getCurrentPlatformDownloadURL: function () {
            return f;
          },
          getMobileDownloadLink: function () {
            return p;
          },
        });
      var s = n("597755"),
        a = n.n(s),
        l = n("815157"),
        r = n("271938"),
        i = n("49111");
      let o = "linux";
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(i.DownloadLinks.DESKTOP)
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
            ? o
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function u(e) {
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[d(e)];
      }
      function f() {
        let e = d();
        return c(e, !1, e === o ? "tar.gz" : null);
      }
      function p(e, t, n) {
        let s = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, l.default)(
              null != s
                ? s
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          case "Android":
            return (0, l.default)(
              null != s ? s : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, l.generateAttemptId)(),
              }
            );
          default:
            return null != s ? s : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=8d361d23252cc0f9832b.js.map

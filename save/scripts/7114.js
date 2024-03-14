(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7114"],
  {
    229372: function (e, t, n) {
      "use strict";
      e.exports = n.p + "a7d6af4279f16c27ae9b.svg";
    },
    231050: function (e, t, n) {
      "use strict";
      e.exports = n.p + "1681fafa511fd53e8bfd.svg";
    },
    769791: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          openPremiumSite: function () {
            return l;
          },
          openTrack: function () {
            return a;
          },
          openAlbum: function () {
            return d;
          },
          openArtist: function () {
            return c;
          },
        }),
        n("70102");
      var o = n("773336"),
        i = n("155815"),
        r = n("884385"),
        s = n("450484");
      function u(e, t, n) {
        let u;
        !(0, o.isDesktop)() && (u = window.open("", "_blank")),
          (0, r.getSpotifyMetadataFromActivity)(e, t)
            .then(e => n(e))
            .then(e => {
              let { resourceType: t, resourceId: n } = e,
                o = i.default.isProtocolRegistered()
                  ? s.SpotifyEndpoints.PLAYER_OPEN(t, n)
                  : s.SpotifyEndpoints.WEB_OPEN(t, n);
              null != u ? (u.location.href = o) : window.open(o);
            })
            .catch(() => {
              null != u && u.close();
            });
      }
      function l() {
        window.open(s.SpotifyEndpoints.PREMIUM_SITE);
      }
      function a(e) {
        var t;
        let { sync_id: n, metadata: o } = e;
        if (null == n) return;
        let r = (0, s.getSpotifyResourceType)(
          null !== (t = null == o ? void 0 : o.type) && void 0 !== t
            ? t
            : s.SpotifyResourceTypes.TRACK
        );
        if (null == r) return;
        let u = i.default.isProtocolRegistered()
          ? s.SpotifyEndpoints.PLAYER_OPEN(r, n)
          : s.SpotifyEndpoints.WEB_OPEN(r, n);
        window.open(u);
      }
      function d(e, t) {
        u(e, t, t => {
          var n;
          let { album_id: o } = t,
            i =
              (0, s.getSpotifyResourceType)(
                null === (n = e.metadata) || void 0 === n ? void 0 : n.type
              ) === s.SpotifyResourceTypes.EPISODE;
          return {
            resourceType: i
              ? s.SpotifyResourceTypes.SHOW
              : s.SpotifyResourceTypes.ALBUM,
            resourceId: o,
          };
        });
      }
      function c(e, t, n) {
        u(e, t, e => {
          let { artist_ids: t } = e;
          if (null == t) throw Error("no artist ids in metadata");
          let o = t[n];
          if (null == o) throw Error("invalid artist index");
          return { resourceType: s.SpotifyResourceTypes.ARTIST, resourceId: o };
        });
      }
    },
    775195: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var o = n("37983");
      n("884691");
      var i = n("77078"),
        r = n("145131"),
        s = n("476765"),
        u = n("769791"),
        l = n("782340"),
        a = n("508069");
      function d(e) {
        let { transitionState: t, onClose: n } = e,
          d = (0, s.useUID)();
        return (0, o.jsxs)(i.ModalRoot, {
          "aria-labelledby": d,
          transitionState: t,
          size: i.ModalSize.SMALL,
          children: [
            (0, o.jsx)(i.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(i.Heading, {
                id: d,
                variant: "heading-lg/semibold",
                children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_HEADER,
              }),
            }),
            (0, o.jsxs)(i.ModalContent, {
              children: [
                (0, o.jsx)(r.default, {
                  justify: r.default.Justify.CENTER,
                  children: (0, o.jsx)("div", { className: a.image }),
                }),
                (0, o.jsx)(i.Text, {
                  className: a.text,
                  variant: "text-sm/normal",
                  children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BODY,
                }),
              ],
            }),
            (0, o.jsxs)(i.ModalFooter, {
              children: [
                (0, o.jsx)(i.Button, {
                  onClick: function () {
                    (0, u.openPremiumSite)(), n();
                  },
                  children: l.default.Messages.SPOTIFY_PREMIUM_UPGRADE_BUTTON,
                }),
                (0, o.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  onClick: n,
                  children: l.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    476765: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return u;
          },
          UID: function () {
            return l;
          },
        });
      var o = n("995008"),
        i = n.n(o),
        r = n("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(e);
        },
        u = () => (0, r.useLazyValue)(() => s()),
        l = e => {
          let { children: t } = e;
          return t(u());
        };
    },
  },
]);
//# sourceMappingURL=d0f0984f497caa75724b.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17784"],
  {
    308472: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("879018");
      a.es(n, t);
    },
    646077: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        }),
        a("222007");
      var n = a("37983"),
        l = a("884691"),
        o = a("414456"),
        s = a.n(o),
        i = a("77078"),
        c = a("812204"),
        r = a("685665"),
        u = a("873622"),
        d = a("476765"),
        f = a("599110"),
        p = a("652914"),
        h = a("254398"),
        A = a("49111"),
        _ = a("782340"),
        g = a("699111");
      function y(e) {
        let {
            transitionState: t,
            onClose: o,
            onComplete: y,
            uploadType: m,
            showUpsellHeader: E,
            analyticsPage: w,
          } = e,
          [R, x] = l.useState(!1),
          I = (0, i.useModalContext)(),
          L = (0, d.useUID)(),
          { AnalyticsLocationProvider: N } = (0, r.default)(
            c.default.GIF_PICKER
          );
        async function S(e) {
          let { gifSrc: t } = e;
          if (null == t || R) return;
          x(!0);
          let l = (0, h.makeTenorProxyURL)(t),
            s = await fetch(l),
            c = await s.blob();
          o(),
            (0, i.openModalLazy)(
              async () => {
                let { default: e } = await a
                  .el("57015")
                  .then(a.bind(a, "57015"));
                return t =>
                  (0, n.jsx)(e, {
                    imgURI: l,
                    file: new File([c], "tenor.gif", { type: "image/gif" }),
                    onCrop: y,
                    uploadType: m,
                    showUpsellHeader: E,
                    ...t,
                  });
              },
              { contextKey: I }
            );
        }
        return (
          l.useEffect(() => {
            f.default.track(A.AnalyticEvents.OPEN_MODAL, {
              type: A.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
              location: { page: w },
            });
          }, [w]),
          (0, n.jsx)(N, {
            children: (0, n.jsxs)(i.ModalRoot, {
              className: g.gifPickerCroppingModal,
              "aria-labelledby": L,
              transitionState: t,
              size: i.ModalSize.SMALL,
              children: [
                E
                  ? (0, n.jsx)(p.default, {
                      type: m,
                      analyticsPage: w,
                      analyticsSection:
                        A.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                      isGIF: !0,
                    })
                  : null,
                (0, n.jsxs)(i.ModalHeader, {
                  className: g.modalHeader,
                  separator: !1,
                  children: [
                    (0, n.jsx)(i.FormTitle, {
                      className: g.titleCase,
                      tag: i.FormTitleTags.H1,
                      children:
                        _.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
                    }),
                    (0, n.jsx)(i.ModalCloseButton, {
                      onClick: o,
                      className: g.modalCloseButton,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(u.default, {
                      className: s(g.gifPicker, { [g.loadingOverlay]: R }),
                      onSelectGIF: S,
                      hideFavorites: !0,
                    }),
                    R && (0, n.jsx)(i.Spinner, { className: g.spinner }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    254398: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          makeTenorProxyURL: function () {
            return o;
          },
        }),
        a("511434"),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660"),
        a("222007"),
        a("70102");
      var n = a("49111");
      let l = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
      function o(e) {
        let t = new URL("".concat(window.location.protocol).concat(e)),
          { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
        if (null == t.pathname.match(l))
          throw Error("Unexpected Tenor GIF path.");
        let o = "".concat(n.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
        return "".concat(location.protocol).concat(a).concat(o);
      }
    },
    42507: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useFrecencySettings: function () {
            return i;
          },
        });
      var n = a("884691"),
        l = a("446674"),
        o = a("872173"),
        s = a("374363");
      function i() {
        return (
          n.useEffect(() => {
            o.FrecencyUserSettingsActionCreators.loadIfNecessary();
          }, []),
          (0, l.useStateFromStores)(
            [s.default],
            () => s.default.frecencyWithoutFetchingLatest
          )
        );
      }
    },
    879018: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          AnalyticsIcon: function () {
            return s;
          },
        });
      var n = a("37983");
      a("884691");
      var l = a("669491"),
        o = a("82169");
      let s = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: s = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, o.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: a,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
            clipRule: "evenodd",
            className: i,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=5f879f49c7f660147331.js.map

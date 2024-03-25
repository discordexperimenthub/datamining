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
            return g;
          },
        }),
        a("222007");
      var n = a("37983"),
        o = a("884691"),
        l = a("414456"),
        s = a.n(l),
        i = a("77078"),
        c = a("812204"),
        r = a("685665"),
        u = a("873622"),
        d = a("476765"),
        f = a("599110"),
        p = a("652914"),
        h = a("254398"),
        A = a("49111"),
        y = a("782340"),
        _ = a("699111");
      function g(e) {
        let {
            transitionState: t,
            onClose: l,
            onComplete: g,
            uploadType: m,
            showUpsellHeader: E,
            analyticsPage: w,
          } = e,
          [R, v] = o.useState(!1),
          x = (0, i.useModalContext)(),
          L = (0, d.useUID)(),
          { analyticsLocations: I } = (0, r.default)(c.default.GIF_PICKER);
        async function N(e) {
          let { gifSrc: t } = e;
          if (null == t || R) return;
          v(!0);
          let o = (0, h.makeTenorProxyURL)(t),
            s = await fetch(o),
            c = await s.blob();
          l(),
            (0, i.openModalLazy)(
              async () => {
                let { default: e } = await a
                  .el("57015")
                  .then(a.bind(a, "57015"));
                return t =>
                  (0, n.jsx)(e, {
                    imgURI: o,
                    file: new File([c], "tenor.gif", { type: "image/gif" }),
                    onCrop: g,
                    uploadType: m,
                    showUpsellHeader: E,
                    ...t,
                  });
              },
              { contextKey: x }
            );
        }
        return (
          o.useEffect(() => {
            f.default.track(A.AnalyticEvents.OPEN_MODAL, {
              type: A.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
              location: { page: w },
            });
          }, [w]),
          (0, n.jsx)(r.AnalyticsLocationProvider, {
            value: I,
            children: (0, n.jsxs)(i.ModalRoot, {
              className: _.gifPickerCroppingModal,
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
                  className: _.modalHeader,
                  separator: !1,
                  children: [
                    (0, n.jsx)(i.FormTitle, {
                      className: _.titleCase,
                      tag: i.FormTitleTags.H1,
                      children:
                        y.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF,
                    }),
                    (0, n.jsx)(i.ModalCloseButton, {
                      onClick: l,
                      className: _.modalCloseButton,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(u.default, {
                      className: s(_.gifPicker, { [_.loadingOverlay]: R }),
                      onSelectGIF: N,
                      hideFavorites: !0,
                    }),
                    R && (0, n.jsx)(i.Spinner, { className: _.spinner }),
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
            return l;
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
      let o = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
      function l(e) {
        let t = new URL("".concat(window.location.protocol).concat(e)),
          { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
        if (null == t.pathname.match(o))
          throw Error("Unexpected Tenor GIF path.");
        let l = "".concat(n.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
        return "".concat(location.protocol).concat(a).concat(l);
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
        o = a("446674"),
        l = a("872173"),
        s = a("374363");
      function i() {
        return (
          n.useEffect(() => {
            l.FrecencyUserSettingsActionCreators.loadIfNecessary();
          }, []),
          (0, o.useStateFromStores)(
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
      var o = a("669491"),
        l = a("82169");
      let s = e => {
        let {
          width: t = 24,
          height: a = 24,
          color: s = o.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, l.default)(c),
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
//# sourceMappingURL=c366a4923c0c1c41fff3.js.map

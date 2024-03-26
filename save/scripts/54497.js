(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54497"],
  {
    833222: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("583103");
      n.es(r, t);
    },
    851298: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("499779");
      n.es(r, t);
    },
    75015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UploadTypes: function () {
            return i;
          },
          EDITING_CONTAINER_WIDTH: function () {
            return l;
          },
          USER_BANNER_MAX_WIDTH: function () {
            return o;
          },
          USER_BANNER_MAX_HEIGHT: function () {
            return E;
          },
          GUILD_BANNER_MAX_WIDTH: function () {
            return c;
          },
          GUILD_BANNER_MAX_HEIGHT: function () {
            return A;
          },
          SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function () {
            return d;
          },
          SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function () {
            return _;
          },
          HOME_HEADER_MAX_WIDTH: function () {
            return f;
          },
          HOME_HEADER_MAX_HEIGHT: function () {
            return I;
          },
          BANNER_ASPECT_RATIO: function () {
            return R;
          },
          GUILD_BANNER_ASPECT_RATIO: function () {
            return C;
          },
          SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function () {
            return M;
          },
          HOME_HEADER_ASPECT_RATIO: function () {
            return N;
          },
          MAX_BANNER_OVERLAY_HEIGHT: function () {
            return T;
          },
          MAX_GUILD_BANNER_OVERLAY_HEIGHT: function () {
            return h;
          },
          MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function () {
            return D;
          },
          MAX_HOME_HEADER_OVERLAY_HEIGHT: function () {
            return O;
          },
          VIDEO_BACKGROUND_ASPECT_RATIO: function () {
            return v;
          },
          MAX_VIDEO_OVERLAY_HEIGHT: function () {
            return H;
          },
          MessageTypes: function () {
            return u;
          },
        });
      var r,
        a,
        i,
        u,
        s = n("917219");
      ((r = i || (i = {}))[(r.AVATAR = 0)] = "AVATAR"),
        (r[(r.BANNER = 1)] = "BANNER"),
        (r[(r.GUILD_BANNER = 2)] = "GUILD_BANNER"),
        (r[(r.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
        (r[(r.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
        (r[(r.HOME_HEADER = 5)] = "HOME_HEADER"),
        (r[(r.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
      let l = 568,
        o = 2400,
        E = 848,
        c = 2400,
        A = 1350,
        d = 2400,
        _ = 960,
        f = 2400,
        I = 600,
        R = 17 / 6,
        C = 16 / 9,
        M = 2.5,
        N = 4,
        T = l / R,
        h = l / C,
        D = l / M,
        O = l / N,
        v =
          s.BACKGROUND_REPLACEMENT_SIZE.width /
          s.BACKGROUND_REPLACEMENT_SIZE.height,
        H = l / v;
      ((a = u || (u = {}))[(a.CROP_GIF_START = 0)] = "CROP_GIF_START"),
        (a[(a.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
        (a[(a.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
    },
    648911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var r = n("446674"),
        a = n("42887"),
        i = n("512244");
      function u() {
        return (0, r.useStateFromStores)([a.default], () =>
          (0, i.default)(a.default)
        );
      }
    },
    381736: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        }),
        n("222007");
      var r = n("37983"),
        a = n("884691"),
        i = n("77078"),
        u = n("629109"),
        s = n("901582"),
        l = n("997289"),
        o = n("812204"),
        E = n("685665"),
        c = n("845579"),
        A = n("659558"),
        d = n("154867"),
        _ = n("439141"),
        f = n("648911"),
        I = n("42887"),
        R = n("697218"),
        C = n("145131"),
        M = n("476765"),
        N = n("599110"),
        T = n("739477"),
        h = n("49111"),
        D = n("782340"),
        O = n("424382");
      let v = { width: 368, height: 207 };
      function H(e) {
        let {
            transitionState: t,
            videoEnabled: n,
            onEnable: v,
            onClose: H,
          } = e,
          L = I.default.getCameraComponent(),
          g = (0, M.useUID)(),
          S = (0, f.default)(),
          V = c.AlwaysPreviewVideo.useSetting(),
          [p, G] = a.useState(
            (0, A.getLastUsedVideoBackgroundOption)(R.default.getCurrentUser())
          ),
          x = (0, l.useAnalyticsContext)(),
          { analyticsLocations: P } = (0, E.default)(o.default.CAMERA_PREVIEW),
          B = a.useRef(null);
        a.useEffect(() => {
          N.default.track(h.AnalyticEvents.OPEN_MODAL, {
            type: "Camera Preview Modal",
          });
        }, []),
          a.useEffect(() => {
            var e;
            null === (e = B.current) || void 0 === e || e.scrollToTop();
          }, []);
        let w = async () => {
            await U(), u.default.setVideoEnabled(!0), null == v || v();
          },
          U = async () => {
            try {
              await (0, _.applyBackgroundOptionLive)(p, {
                location: {
                  page: h.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                  ...x.location,
                },
              });
            } catch (e) {}
            await H(), (0, d.saveLastUsedBackgroundOption)(p);
          };
        return (0, r.jsx)(E.AnalyticsLocationProvider, {
          value: P,
          children: (0, r.jsx)(s.default, {
            page: h.AnalyticsPages.PREVIEW_CAMERA_MODAL,
            children: (0, r.jsxs)(i.ModalRoot, {
              className: O.modalRoot,
              size: i.ModalSize.DYNAMIC,
              "aria-labelledby": g,
              transitionState: t,
              children: [
                (0, r.jsxs)(i.ModalContent, {
                  className: S ? O.contentWithVideoBackgrounds : O.content,
                  scrollerRef: B,
                  children: [
                    (0, r.jsx)(i.Heading, {
                      id: g,
                      className: O.header,
                      variant: "heading-xl/semibold",
                      children: n
                        ? D.default.Messages
                            .CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER
                        : D.default.Messages.CAMERA_PREVIEW_MODAL_HEADER,
                    }),
                    (0, r.jsx)(T.default, {
                      hidePreviewToggle: !0,
                      showSmallBackgroundOptions: !0,
                      hideDeviceHeader: !0,
                      selectedBackgroundOption: p,
                      onSelectBackgroundOption: G,
                      hideDeviceSelector: n,
                      renderCamera: e =>
                        (0, r.jsxs)("div", {
                          className: O.cameraPreview,
                          children: [
                            (0, r.jsx)("div", {
                              className: O.camera,
                              children: (0, r.jsx)(L, {
                                disabled: !1,
                                deviceId: e,
                                width: 368,
                                height: 207,
                              }),
                            }),
                            (0, r.jsx)(T.FilterLoadingIndicator, {}),
                          ],
                        }),
                      onLearnMore: H,
                    }),
                  ],
                }),
                (0, r.jsxs)(i.ModalFooter, {
                  justify: C.default.Justify.BETWEEN,
                  children: [
                    (() => {
                      let e = n
                        ? D.default.Messages
                            .CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND
                        : D.default.Messages.CAMERA_ON;
                      return (0, r.jsx)(i.Button, {
                        onClick: n ? U : w,
                        size: i.Button.Sizes.SMALL,
                        autoFocus: !n,
                        children: e,
                      });
                    })(),
                    (0, r.jsx)(i.Checkbox, {
                      size: 18,
                      type: i.Checkbox.Types.INVERTED,
                      value: V,
                      onChange: () => {
                        c.AlwaysPreviewVideo.updateSetting(!V),
                          N.default.track(
                            h.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL,
                            { always_preview_video: !V }
                          );
                      },
                      children: (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children:
                          D.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW,
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(i.ModalCloseButton, {
                  onClick: H,
                  className: O.modalClose,
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
            return u;
          },
          useUID: function () {
            return s;
          },
          UID: function () {
            return l;
          },
        });
      var r = n("995008"),
        a = n.n(r),
        i = n("775560");
      let u = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        s = () => (0, i.useLazyValue)(() => u()),
        l = e => {
          let { children: t } = e;
          return t(s());
        };
    },
    818643: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("851298"),
        u = n("75196"),
        s = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              ...i
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, u.default)(i),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                  fill: a,
                }),
              ],
            });
          },
          i.ImagePlusIcon,
          void 0,
          { size: 24 }
        );
    },
    468759: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("469563"),
        i = n("833222"),
        u = n("75196"),
        s = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: a = "currentColor",
              className: i,
              foreground: s,
              ...l
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, u.default)(l),
              className: i,
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                (0, r.jsx)("path", {
                  className: s,
                  fill: a,
                  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
                }),
              ],
            });
          },
          i.DenyIcon,
          void 0,
          { size: 24 }
        );
    },
    719347: function (e, t, n) {
      "use strict";
      var r, a;
      n.r(t),
        n.d(t, {
          MEDIA_MOSAIC_MAX_WIDTH: function () {
            return i;
          },
          MEDIA_MOSAIC_MAX_HEIGHT: function () {
            return u;
          },
          MINIMUM_MEDIA_MOSAIC_DIM: function () {
            return s;
          },
          MediaLayoutType: function () {
            return r;
          },
          SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function () {
            return l;
          },
        });
      let i = 550,
        u = 350,
        s = 40;
      ((a = r || (r = {})).STATIC = "STATIC"),
        (a.RESPONSIVE = "RESPONSIVE"),
        (a.MOSAIC = "MOSAIC");
      let l = 20;
    },
    583103: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DenyIcon: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("82169");
      let u = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: u = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...l
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: s,
          }),
        });
      };
    },
    499779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImagePlusIcon: function () {
            return u;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("669491"),
        i = n("82169");
      let u = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: u = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.default)(l),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=90010cde41583abd33ac.js.map

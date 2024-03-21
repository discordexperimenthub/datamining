(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2872"],
  {
    833222: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("583103");
      n.es(i, t);
    },
    851298: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("499779");
      n.es(i, t);
    },
    202909: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("804830");
      n.es(i, t);
    },
    876726: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("849638");
      n.es(i, t);
    },
    597517: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          hideHotspot: function () {
            return s;
          },
          setHotspotOverride: function () {
            return o;
          },
          clearHotspotOverride: function () {
            return a;
          },
        });
      var i = n("913144"),
        r = n("599110"),
        u = n("49111");
      function s(e) {
        r.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
          hotspot_location: e,
        }),
          i.default.wait(() => {
            i.default.dispatch({ type: "HOTSPOT_HIDE", location: e });
          });
      }
      function o(e, t) {
        i.default.dispatch({
          type: "HOTSPOT_OVERRIDE_SET",
          location: e,
          enabled: t,
        });
      }
      function a(e) {
        i.default.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location: e });
      }
    },
    269596: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var i = n("446674"),
        r = n("913144"),
        u = n("197881"),
        s = n("492397");
      let o = new Set(),
        a = {};
      class l extends i.default.PersistedStore {
        initialize(e) {
          null != e &&
            (Array.isArray(e.hiddenHotspots) && (o = new Set(e.hiddenHotspots)),
            null != e.hotspotOverrides && (a = e.hotspotOverrides));
        }
        hasHotspot(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && a[e];
          return (
            !(
              s.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()
            ) &&
            (n || !o.has(e))
          );
        }
        hasHiddenHotspot(e) {
          return o.has(e);
        }
        getHotspotOverride(e) {
          return a[e];
        }
        getState() {
          return { hiddenHotspots: o, hotspotOverrides: a };
        }
      }
      (l.displayName = "HotspotStore"),
        (l.persistKey = "hotspots"),
        (l.migrations = [
          e => ({ hiddenHotspots: null != e ? e : [], hotspotOverrides: {} }),
        ]);
      var c = new l(r.default, {
        OVERLAY_INITIALIZE: function (e) {
          let { hiddenHotspots: t } = e;
          o = new Set(t);
        },
        HOTSPOT_HIDE: function (e) {
          let { location: t } = e;
          if (o.has(t)) return !1;
          o.add(t);
        },
        HOTSPOT_OVERRIDE_SET: function (e) {
          let { location: t, enabled: n } = e;
          a[t] = n;
        },
        HOTSPOT_OVERRIDE_CLEAR: function (e) {
          let { location: t } = e;
          if (null == a[t]) return !1;
          delete a[t];
        },
      });
    },
    75015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UploadTypes: function () {
            return u;
          },
          EDITING_CONTAINER_WIDTH: function () {
            return a;
          },
          USER_BANNER_MAX_WIDTH: function () {
            return l;
          },
          USER_BANNER_MAX_HEIGHT: function () {
            return c;
          },
          GUILD_BANNER_MAX_WIDTH: function () {
            return d;
          },
          GUILD_BANNER_MAX_HEIGHT: function () {
            return E;
          },
          SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function () {
            return f;
          },
          SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function () {
            return _;
          },
          HOME_HEADER_MAX_WIDTH: function () {
            return I;
          },
          HOME_HEADER_MAX_HEIGHT: function () {
            return h;
          },
          BANNER_ASPECT_RATIO: function () {
            return A;
          },
          GUILD_BANNER_ASPECT_RATIO: function () {
            return R;
          },
          SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function () {
            return C;
          },
          HOME_HEADER_ASPECT_RATIO: function () {
            return p;
          },
          MAX_BANNER_OVERLAY_HEIGHT: function () {
            return S;
          },
          MAX_GUILD_BANNER_OVERLAY_HEIGHT: function () {
            return L;
          },
          MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function () {
            return m;
          },
          MAX_HOME_HEADER_OVERLAY_HEIGHT: function () {
            return M;
          },
          VIDEO_BACKGROUND_ASPECT_RATIO: function () {
            return O;
          },
          MAX_VIDEO_OVERLAY_HEIGHT: function () {
            return v;
          },
          MessageTypes: function () {
            return s;
          },
        });
      var i,
        r,
        u,
        s,
        o = n("917219");
      ((i = u || (u = {}))[(i.AVATAR = 0)] = "AVATAR"),
        (i[(i.BANNER = 1)] = "BANNER"),
        (i[(i.GUILD_BANNER = 2)] = "GUILD_BANNER"),
        (i[(i.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
        (i[(i.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
        (i[(i.HOME_HEADER = 5)] = "HOME_HEADER"),
        (i[(i.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
      let a = 568,
        l = 2400,
        c = 848,
        d = 2400,
        E = 1350,
        f = 2400,
        _ = 960,
        I = 2400,
        h = 600,
        A = 17 / 6,
        R = 16 / 9,
        C = 2.5,
        p = 4,
        S = a / A,
        L = a / R,
        m = a / C,
        M = a / p,
        O =
          o.BACKGROUND_REPLACEMENT_SIZE.width /
          o.BACKGROUND_REPLACEMENT_SIZE.height,
        v = a / O;
      ((r = s || (s = {}))[(r.CROP_GIF_START = 0)] = "CROP_GIF_START"),
        (r[(r.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
        (r[(r.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
    },
    716849: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NON_SUBSCRIBER_SENTINEL: function () {
            return I;
          },
          maybeFetchPremiumLikelihood: function () {
            return A;
          },
          useMaybeFetchPremiumLikelihood: function () {
            return R;
          },
        });
      var i = n("884691"),
        r = n("65597"),
        u = n("872717"),
        s = n("913144"),
        o = n("775433"),
        a = n("697218"),
        l = n("10514"),
        c = n("764364"),
        d = n("719923"),
        E = n("676572"),
        f = n("646718"),
        _ = n("49111");
      let I = "nonSubscriber";
      async function h() {
        try {
          s.default.dispatch({ type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH" });
          let { body: e } = await u.HTTP.get({
            url: _.Endpoints.USER_PREMIUM_LIKELIHOOD,
          });
          s.default.dispatch({
            type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
            premiumLikelihood: (function (e) {
              return {
                [I]: e.non_subscriber,
                [f.PremiumSubscriptionSKUs.TIER_0]:
                  e[f.PremiumSubscriptionSKUs.TIER_0],
                [f.PremiumSubscriptionSKUs.TIER_2]:
                  e[f.PremiumSubscriptionSKUs.TIER_2],
              };
            })(e),
          });
        } catch (e) {
          404 === e.status
            ? s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
              })
            : s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR",
              });
        }
      }
      function A(e) {
        let { enabled: t, useExpectedValue: n } = e.getCurrentConfig(
            { location: "443cca_1" },
            { autoTrackExposure: !1 }
          ),
          i = E.default.shouldFetchPremiumLikelihood(),
          r = a.default.getCurrentUser();
        C(r, i, t, n);
      }
      function R(e) {
        let { enabled: t, useExpectedValue: n } = e.useExperiment(
            { location: "443cca_2" },
            { autoTrackExposure: !1 }
          ),
          u = (0, r.default)([E.default], () =>
            E.default.shouldFetchPremiumLikelihood()
          ),
          s = (0, r.default)([a.default], () => a.default.getCurrentUser());
        i.useEffect(() => {
          C(s, u, t, n);
        }, [s, u, t, n]);
      }
      function C(e, t, n, i) {
        null != e &&
          !(0, c.isPremium)(e) &&
          n &&
          (t && h(),
          i &&
            (!l.default.isLoadedForSKU(
              (0, d.castPremiumSubscriptionAsSkuId)(
                f.PremiumSubscriptionSKUs.TIER_0
              )
            ) &&
              !l.default.isFetchingForSKU(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  f.PremiumSubscriptionSKUs.TIER_0
                )
              ) &&
              (0, o.fetchSubscriptionPlansForSKU)(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  f.PremiumSubscriptionSKUs.TIER_0
                )
              ),
            !l.default.isLoadedForSKU(
              (0, d.castPremiumSubscriptionAsSkuId)(
                f.PremiumSubscriptionSKUs.TIER_2
              )
            ) &&
              !l.default.isFetchingForSKU(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  f.PremiumSubscriptionSKUs.TIER_2
                )
              ) &&
              (0, o.fetchSubscriptionPlansForSKU)(
                (0, d.castPremiumSubscriptionAsSkuId)(
                  f.PremiumSubscriptionSKUs.TIER_2
                )
              )));
      }
    },
    676572: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var i = n("446674"),
        r = n("913144");
      let u = { premiumLikelihood: void 0, isFetching: !1, fetched: !1 },
        s = u;
      class o extends i.default.Store {
        initialize() {
          s = u;
        }
        getState() {
          return s;
        }
        shouldFetchPremiumLikelihood() {
          return !s.isFetching && !s.fetched;
        }
      }
      o.displayName = "UserPremiumLikelihoodStore";
      var a = new o(r.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function () {
          s.isFetching = !0;
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function (e) {
          let { premiumLikelihood: t } = e;
          (s.premiumLikelihood = t), (s.fetched = !0), (s.isFetching = !1);
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function () {
          s.isFetching = !1;
        },
        LOGOUT: function () {
          s.premiumLikelihood = void 0;
        },
      });
    },
    552917: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var i = n("862205");
      let r = (0, i.createExperiment)({
        kind: "user",
        id: "2022-12_premium_targeted_upsells",
        label: "Premium Targeted Upsells",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Use highest expected value to determine Nitro upsells",
            config: { enabled: !0, useExpectedValue: !0, useLikelihood: !1 },
          },
          {
            id: 2,
            label: "Use highest likelihood to determine Nitro upsells",
            config: { enabled: !0, useExpectedValue: !1, useLikelihood: !0 },
          },
        ],
      });
      var u = r;
    },
    648911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n("446674"),
        r = n("42887"),
        u = n("512244");
      function s() {
        return (0, i.useStateFromStores)([r.default], () =>
          (0, u.default)(r.default)
        );
      }
    },
    381736: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var i = n("37983"),
        r = n("884691"),
        u = n("77078"),
        s = n("629109"),
        o = n("901582"),
        a = n("997289"),
        l = n("812204"),
        c = n("685665"),
        d = n("845579"),
        E = n("659558"),
        f = n("154867"),
        _ = n("439141"),
        I = n("648911"),
        h = n("42887"),
        A = n("697218"),
        R = n("145131"),
        C = n("476765"),
        p = n("599110"),
        S = n("739477"),
        L = n("49111"),
        m = n("782340"),
        M = n("424382");
      let O = { width: 368, height: 207 };
      function v(e) {
        let {
            transitionState: t,
            videoEnabled: n,
            onEnable: O,
            onClose: v,
          } = e,
          T = h.default.getCameraComponent(),
          H = (0, C.useUID)(),
          N = (0, I.default)(),
          g = d.AlwaysPreviewVideo.useSetting(),
          [D, P] = r.useState(
            (0, E.getLastUsedVideoBackgroundOption)(A.default.getCurrentUser())
          ),
          U = (0, a.useAnalyticsContext)(),
          { AnalyticsLocationProvider: x } = (0, c.default)(
            l.default.CAMERA_PREVIEW
          ),
          y = r.useRef(null);
        r.useEffect(() => {
          p.default.track(L.AnalyticEvents.OPEN_MODAL, {
            type: "Camera Preview Modal",
          });
        }, []),
          r.useEffect(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.scrollToTop();
          }, []);
        let w = async () => {
            await V(), s.default.setVideoEnabled(!0), null == O || O();
          },
          V = async () => {
            try {
              await (0, _.applyBackgroundOptionLive)(D, {
                location: {
                  page: L.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                  ...U.location,
                },
              });
            } catch (e) {}
            await v(), (0, f.saveLastUsedBackgroundOption)(D);
          };
        return (0, i.jsx)(x, {
          children: (0, i.jsx)(o.default, {
            page: L.AnalyticsPages.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsxs)(u.ModalRoot, {
              className: M.modalRoot,
              size: u.ModalSize.DYNAMIC,
              "aria-labelledby": H,
              transitionState: t,
              children: [
                (0, i.jsxs)(u.ModalContent, {
                  className: N ? M.contentWithVideoBackgrounds : M.content,
                  scrollerRef: y,
                  children: [
                    (0, i.jsx)(u.Heading, {
                      id: H,
                      className: M.header,
                      variant: "heading-xl/semibold",
                      children: n
                        ? m.default.Messages
                            .CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER
                        : m.default.Messages.CAMERA_PREVIEW_MODAL_HEADER,
                    }),
                    (0, i.jsx)(S.default, {
                      hidePreviewToggle: !0,
                      showSmallBackgroundOptions: !0,
                      hideDeviceHeader: !0,
                      selectedBackgroundOption: D,
                      onSelectBackgroundOption: P,
                      hideDeviceSelector: n,
                      renderCamera: e =>
                        (0, i.jsxs)("div", {
                          className: M.cameraPreview,
                          children: [
                            (0, i.jsx)("div", {
                              className: M.camera,
                              children: (0, i.jsx)(T, {
                                disabled: !1,
                                deviceId: e,
                                width: 368,
                                height: 207,
                              }),
                            }),
                            (0, i.jsx)(S.FilterLoadingIndicator, {}),
                          ],
                        }),
                      onLearnMore: v,
                    }),
                  ],
                }),
                (0, i.jsxs)(u.ModalFooter, {
                  justify: R.default.Justify.BETWEEN,
                  children: [
                    (() => {
                      let e = n
                        ? m.default.Messages
                            .CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND
                        : m.default.Messages.CAMERA_ON;
                      return (0, i.jsx)(u.Button, {
                        onClick: n ? V : w,
                        size: u.Button.Sizes.SMALL,
                        autoFocus: !n,
                        children: e,
                      });
                    })(),
                    (0, i.jsx)(u.Checkbox, {
                      size: 18,
                      type: u.Checkbox.Types.INVERTED,
                      value: g,
                      onChange: () => {
                        d.AlwaysPreviewVideo.updateSetting(!g),
                          p.default.track(
                            L.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL,
                            { always_preview_video: !g }
                          );
                      },
                      children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        children:
                          m.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW,
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(u.ModalCloseButton, {
                  onClick: v,
                  className: M.modalClose,
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
            return s;
          },
          useUID: function () {
            return o;
          },
          UID: function () {
            return a;
          },
        });
      var i = n("995008"),
        r = n.n(i),
        u = n("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        o = () => (0, u.useLazyValue)(() => s()),
        a = e => {
          let { children: t } = e;
          return t(o());
        };
    },
    818643: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        u = n("851298"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              ...u
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                  fill: r,
                }),
                (0, i.jsx)("path", {
                  d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                  fill: r,
                }),
              ],
            });
          },
          u.ImagePlusIcon,
          void 0,
          { size: 24 }
        );
    },
    216422: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        u = n("202909"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              viewBox: u = "0 0 24 24",
              foreground: o,
              ...a
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: n,
              viewBox: u,
              children: (0, i.jsx)("path", {
                className: o,
                fill: r,
                d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z",
              }),
            });
          },
          u.NitroWheelIcon,
          void 0,
          { size: 24 }
        );
    },
    468759: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        u = n("833222"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: r = "currentColor",
              className: u,
              foreground: o,
              ...a
            } = e;
            return (0, i.jsxs)("svg", {
              ...(0, s.default)(a),
              className: u,
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, i.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                (0, i.jsx)("path", {
                  className: o,
                  fill: r,
                  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
                }),
              ],
            });
          },
          u.DenyIcon,
          void 0,
          { size: 24 }
        );
    },
    132755: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("469563"),
        u = n("876726"),
        s = n("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: r = "currentColor",
              foreground: u,
              ...o
            } = e;
            return (0, i.jsx)("svg", {
              ...(0, s.default)(o),
              width: t,
              height: n,
              viewBox: "0 0 18 18",
              fill: "none",
              children: (0, i.jsx)("path", {
                className: u,
                d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                fill: r,
              }),
            });
          },
          u.PlayIcon,
          void 0,
          { size: 16 }
        );
    },
    719347: function (e, t, n) {
      "use strict";
      var i, r;
      n.r(t),
        n.d(t, {
          MEDIA_MOSAIC_MAX_WIDTH: function () {
            return u;
          },
          MEDIA_MOSAIC_MAX_HEIGHT: function () {
            return s;
          },
          MINIMUM_MEDIA_MOSAIC_DIM: function () {
            return o;
          },
          MediaLayoutType: function () {
            return i;
          },
          SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function () {
            return a;
          },
        });
      let u = 550,
        s = 350,
        o = 40;
      ((r = i || (i = {})).STATIC = "STATIC"),
        (r.RESPONSIVE = "RESPONSIVE"),
        (r.MOSAIC = "MOSAIC");
      let a = 20;
    },
    58608: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n("37983"),
        r = n("884691"),
        u = n("118810"),
        s = n("446674"),
        o = n("206230"),
        a = n("719347");
      let l = e => {
        let {
            externalRef: t,
            autoPlay: n,
            playOnHover: l,
            responsive: c,
            mediaLayoutType: d,
            ...E
          } = e,
          f = (0, s.useStateFromStores)(
            [o.default],
            () => o.default.useReducedMotion
          ),
          _ = r.useRef(null);
        function I() {
          var e;
          l &&
            (null == _ || null === (e = _.current) || void 0 === e || e.play());
        }
        function h() {
          var e;
          l &&
            (null == _ ||
              null === (e = _.current) ||
              void 0 === e ||
              e.pause());
        }
        return (
          r.useLayoutEffect(
            () => () => {
              let { current: e } = _;
              null != e &&
                (function (e) {
                  e.removeAttribute("src"),
                    Array.from(e.children).forEach(e => {
                      (0, u.isElement)(e, HTMLSourceElement) &&
                        (e.removeAttribute("src"), e.removeAttribute("type")),
                        (0, u.isElement)(e, HTMLImageElement) &&
                          e.removeAttribute("src");
                    });
                  try {
                    e.load();
                  } catch (e) {}
                })(e);
            },
            []
          ),
          r.useLayoutEffect(
            () => (
              "function" == typeof t
                ? (t(null), t(_.current))
                : null != t && (t.current = _.current),
              () => {
                "function" == typeof t
                  ? t(null)
                  : null != t && (t.current = null);
              }
            ),
            [t, _]
          ),
          (0, i.jsx)("video", {
            ref: _,
            autoPlay: !f && !l && n,
            onMouseEnter: I,
            onMouseLeave: h,
            onFocus: I,
            onBlur: h,
            style:
              d === a.MediaLayoutType.MOSAIC
                ? {
                    width: "100%",
                    height: "100%",
                    maxHeight: "inherit",
                    objectFit: "cover",
                  }
                : c
                  ? (function () {
                      return {
                        maxWidth: E.width,
                        maxHeight: E.height,
                        width: "100%",
                        height: "100%",
                      };
                    })()
                  : {},
            ...E,
          })
        );
      };
      var c = r.forwardRef((e, t) => (0, i.jsx)(l, { ...e, externalRef: t }));
    },
    583103: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DenyIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        u = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, u.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: o,
          }),
        });
      };
    },
    499779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImagePlusIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        u = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, u.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              className: o,
            }),
          ],
        });
      };
    },
    804830: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NitroWheelIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        u = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, u.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
              className: o,
            }),
          ],
        });
      };
    },
    849638: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PlayIcon: function () {
            return s;
          },
        });
      var i = n("37983");
      n("884691");
      var r = n("669491"),
        u = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...a
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, u.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=5433dfcc5f90b305be59.js.map

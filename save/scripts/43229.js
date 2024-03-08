(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43229"],
  {
    817295: function (e, t, n) {
      "use strict";
      function r() {
        return n.el("225629").then(n.bind(n, "225629"));
      }
      async function i(e, t, n, i, a) {
        let l = await r();
        return l.crop_gif(e, t, n, i, a);
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
          wasmCropGIF: function () {
            return i;
          },
        });
    },
    112679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          updateStripePaymentRequest: function () {
            return i;
          },
          updateCardInfo: function () {
            return a;
          },
          clearCardInfo: function () {
            return l;
          },
          updateAddressInfo: function () {
            return s;
          },
          clearError: function () {
            return u;
          },
        });
      var r = n("913144");
      function i(e) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
          stripePaymentMethod: e,
        });
      }
      function a(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function l() {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
          info: { name: "" },
          isValid: !1,
        });
      }
      function s(e, t) {
        r.default.dispatch({
          type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
          info: e,
          isValid: t,
        });
      }
      function u() {
        r.default.wait(() =>
          r.default.dispatch({ type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR" })
        );
      }
    },
    55689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          clearPurchaseTokenAuthState: function () {
            return i;
          },
        });
      var r = n("913144");
      function i() {
        r.default.dispatch({ type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE" });
      }
    },
    666031: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("392861");
      n.es(r, t);
    },
    578478: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("962139");
      n.es(r, t);
    },
    202909: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("804830");
      n.es(r, t);
    },
    125094: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("782542");
      n.es(r, t);
    },
    252744: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var r = n("884691");
      function i(e) {
        let [t, n] = (0, r.useState)(!1),
          i = (0, r.useRef)(e.current);
        return (
          (0, r.useEffect)(() => {
            i.current = e.current;
          }, [e]),
          (0, r.useEffect)(() => {
            let e = i.current;
            if (null == e) return;
            let t = () => n(!0),
              r = () => n(!1);
            return (
              e.addEventListener("mouseenter", t),
              e.addEventListener("mouseleave", r),
              () => {
                e.removeEventListener("mouseenter", t),
                  e.removeEventListener("mouseleave", r);
              }
            );
          }, [i]),
          t
        );
      }
    },
    75015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UploadTypes: function () {
            return a;
          },
          EDITING_CONTAINER_WIDTH: function () {
            return u;
          },
          USER_BANNER_MAX_WIDTH: function () {
            return o;
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
            return _;
          },
          SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function () {
            return A;
          },
          HOME_HEADER_MAX_WIDTH: function () {
            return T;
          },
          HOME_HEADER_MAX_HEIGHT: function () {
            return f;
          },
          BANNER_ASPECT_RATIO: function () {
            return I;
          },
          GUILD_BANNER_ASPECT_RATIO: function () {
            return h;
          },
          SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function () {
            return R;
          },
          HOME_HEADER_ASPECT_RATIO: function () {
            return p;
          },
          MAX_BANNER_OVERLAY_HEIGHT: function () {
            return N;
          },
          MAX_GUILD_BANNER_OVERLAY_HEIGHT: function () {
            return C;
          },
          MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function () {
            return m;
          },
          MAX_HOME_HEADER_OVERLAY_HEIGHT: function () {
            return M;
          },
          VIDEO_BACKGROUND_ASPECT_RATIO: function () {
            return S;
          },
          MAX_VIDEO_OVERLAY_HEIGHT: function () {
            return O;
          },
          MessageTypes: function () {
            return l;
          },
        });
      var r,
        i,
        a,
        l,
        s = n("917219");
      ((r = a || (a = {}))[(r.AVATAR = 0)] = "AVATAR"),
        (r[(r.BANNER = 1)] = "BANNER"),
        (r[(r.GUILD_BANNER = 2)] = "GUILD_BANNER"),
        (r[(r.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
        (r[(r.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
        (r[(r.HOME_HEADER = 5)] = "HOME_HEADER"),
        (r[(r.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
      let u = 568,
        o = 2400,
        c = 848,
        d = 2400,
        E = 1350,
        _ = 2400,
        A = 960,
        T = 2400,
        f = 600,
        I = 17 / 6,
        h = 16 / 9,
        R = 2.5,
        p = 4,
        N = u / I,
        C = u / h,
        m = u / R,
        M = u / p,
        S =
          s.BACKGROUND_REPLACEMENT_SIZE.width /
          s.BACKGROUND_REPLACEMENT_SIZE.height,
        O = u / S;
      ((i = l || (l = {}))[(i.CROP_GIF_START = 0)] = "CROP_GIF_START"),
        (i[(i.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
        (i[(i.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
    },
    57015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return R;
          },
        }),
        n("222007"),
        n("70102");
      var r = n("37983"),
        i = n("884691"),
        a = n("917351"),
        l = n("77078"),
        s = n("812204"),
        u = n("685665"),
        o = n("652914"),
        c = n("95689"),
        d = n("599110"),
        E = n("8731"),
        _ = n("817295"),
        A = n("75015"),
        T = n("49111"),
        f = n("917219"),
        I = n("782340"),
        h = n("304379"),
        R = e => {
          let {
              file: t,
              imgURI: n,
              transitionState: R,
              allowSkip: p = !1,
              onCrop: N,
              onClose: C,
              uploadType: m = A.UploadTypes.AVATAR,
              showUpsellHeader: M = !1,
              analyticsPage: S,
            } = e,
            [O, D] = i.useState({ width: 0, height: 0 }),
            [g, L] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [P, y] = i.useState(!1),
            [U, H] = i.useState(1),
            [v, w] = i.useState({ x: 0, y: 0 }),
            [G, B] = i.useState(null),
            [x, b] = i.useState(!1),
            { AnalyticsLocationProvider: V } = (0, u.default)(
              s.default.IMAGE_CROPPING_MODAL
            ),
            j = i.useRef({ x: 0, y: 0 }),
            F = i.useRef(null),
            W = i.useRef(null),
            k = "image/gif" === t.type;
          i.useEffect(() => {
            (0, _.default)();
          }, []),
            i.useEffect(() => {
              k &&
                M &&
                d.default.track(T.AnalyticEvents.OPEN_MODAL, {
                  type: T.AnalyticsSections.CROP_GIF_MODAL,
                  location: { page: S },
                });
            }, [M, S, k]);
          let X = () => {
              switch (m) {
                case A.UploadTypes.BANNER:
                  return {
                    height: A.USER_BANNER_MAX_HEIGHT,
                    width: A.USER_BANNER_MAX_WIDTH,
                  };
                case A.UploadTypes.VIDEO_BACKGROUND:
                  return f.BACKGROUND_REPLACEMENT_SIZE;
                case A.UploadTypes.AVATAR:
                case A.UploadTypes.AVATAR_DECORATION:
                  return {
                    height: T.AVATAR_MAX_SIZE,
                    width: T.AVATAR_MAX_SIZE,
                  };
                case A.UploadTypes.GUILD_BANNER:
                  return {
                    height: A.GUILD_BANNER_MAX_HEIGHT,
                    width: A.GUILD_BANNER_MAX_WIDTH,
                  };
                case A.UploadTypes.SCHEDULED_EVENT_IMAGE:
                  return {
                    height: A.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT,
                    width: A.SCHEDULED_EVENT_IMAGE_MAX_WIDTH,
                  };
                case A.UploadTypes.HOME_HEADER:
                  return {
                    height: A.HOME_HEADER_MAX_HEIGHT,
                    width: A.HOME_HEADER_MAX_WIDTH,
                  };
              }
            },
            Y = i.useCallback(
              (e, t, n) => {
                (j.current = (0, E.getBoundedCoordinates)(e, t, n)),
                  null != F.current &&
                    (F.current.style.transform = "translate3d("
                      .concat(j.current.x, "px, ")
                      .concat(j.current.y, "px, 0)"));
              },
              [F]
            ),
            Z = i.useCallback(() => {
              if (null == F.current || U > 1) return;
              let { width: e, height: t } = F.current.getBoundingClientRect(),
                { width: n, height: r } = (0,
                E.adjustImageDimensionsForAspectRatio)(m, e, t),
                i = (0, E.calculateOverlaySize)(m, n, r, t);
              B({ width: n, height: r }),
                D(i),
                L((0, E.calculateDragBoundaries)(n, r, i));
            }, [m, U]),
            z = i.useCallback(
              e => {
                let { x: t, y: n } = j.current;
                if (!P || (e.clientX === t && e.clientY === n)) return;
                let r = e.clientX - v.x,
                  i = e.clientY - v.y;
                Y(r, i, g);
              },
              [g, P, v, Y]
            ),
            K = () => {
              y(!1);
            },
            q = () => {
              let e = X();
              return e.width !== e.height;
            },
            J = async () => {
              let e;
              if (null == F.current) return;
              b(!0);
              let n = F.current,
                r = X();
              if (k)
                try {
                  let { result: i, cancelFn: a } = await (0, E.cropGIF)(
                    t,
                    n,
                    O,
                    j.current,
                    r
                  );
                  (W.current = a), (e = await i), (W.current = null);
                } catch (e) {
                  var i;
                  throw (
                    (null === (i = W.current) || void 0 === i || i.call(W),
                    (W.current = null),
                    Error("Error cropping GIF"))
                  );
                }
              else e = (0, E.cropStaticImage)(n, O, j.current, r);
              await N(e, t), b(!1), C();
            };
          return (
            i.useEffect(
              () => (
                window.addEventListener("mouseup", K),
                window.addEventListener("resize", Z),
                () => {
                  window.removeEventListener("mouseup", K),
                    window.removeEventListener("resize", Z);
                }
              ),
              [Z]
            ),
            i.useEffect(
              () => () => {
                null != W.current && W.current();
              },
              []
            ),
            i.useEffect(() => {
              if (P)
                return (
                  window.addEventListener("mousemove", z),
                  () => window.removeEventListener("mousemove", z)
                );
            }, [z, P]),
            (0, r.jsx)(V, {
              children: (0, r.jsxs)(l.ModalRoot, {
                onAnimationEnd: Z,
                transitionState: R,
                size: l.ModalSize.MEDIUM,
                children: [
                  M &&
                    (0, r.jsx)(o.default, {
                      type: m,
                      analyticsPage: S,
                      analyticsSection: T.AnalyticsSections.CROP_GIF_MODAL,
                      isGIF: k,
                      banner: n,
                    }),
                  (0, r.jsx)(l.ModalHeader, {
                    separator: !1,
                    children: (0, r.jsx)(l.FormTitle, {
                      className: h.titleCase,
                      tag: l.FormTitleTags.H1,
                      children: I.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA,
                    }),
                  }),
                  (0, r.jsxs)(l.ModalContent, {
                    className: h.modalContent,
                    children: [
                      (0, r.jsxs)("div", {
                        className: h.editingContainer,
                        children: [
                          (0, r.jsx)("img", {
                            style: {
                              opacity: null == G ? 0 : 1,
                              transform: "translate3d("
                                .concat(j.current.x, "px, ")
                                .concat(j.current.y, "px, 0px)"),
                              ...(() => {
                                if (null == G) return {};
                                let e = G.width / G.height,
                                  t =
                                    q() && e > A.BANNER_ASPECT_RATIO
                                      ? O.height / G.height
                                      : 1;
                                return {
                                  width: G.width * U * t,
                                  minWidth: G.width * U * t,
                                  height: G.height * U * t,
                                };
                              })(),
                            },
                            className: x ? h.imageDisabled : h.imageEnabled,
                            src: n,
                            alt: "avatar",
                            ref: F,
                            onMouseDown: e => {
                              let t = e.clientX - j.current.x,
                                n = e.clientY - j.current.y;
                              w({ x: t, y: n }), y(!0);
                            },
                            draggable: !1,
                          }),
                          (0, r.jsx)("div", {
                            className:
                              m === A.UploadTypes.AVATAR
                                ? h.overlayAvatar
                                : h.overlayBanner,
                            style: {
                              opacity: null == G ? 0 : 1,
                              width: O.width,
                              height: O.height,
                            },
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: h.sliderContainer,
                        children: [
                          (0, r.jsx)(c.default, {
                            className: h.icon,
                            width: 24,
                            height: 24,
                          }),
                          (0, r.jsx)(l.Slider, {
                            initialValue: 1,
                            minValue: 1,
                            maxValue: 2,
                            keyboardStep: 0.025,
                            asValueChanges: e => {
                              if (null == G) return;
                              let { width: t, height: n } = G,
                                r = (0, E.calculateDragBoundaries)(
                                  t * e,
                                  n * e,
                                  O
                                ),
                                { x: i, y: l } = j.current;
                              (!(0, a.inRange)(i, r.right, r.left) ||
                                !(0, a.inRange)(l, r.top, r.bottom)) &&
                                Y(i, l, r),
                                H(e),
                                L(r);
                            },
                            disabled: x,
                            equidistant: !0,
                            hideBubble: !0,
                            "aria-label":
                              I.default.Messages.FORM_LABEL_AVATAR_SIZE,
                          }),
                          (0, r.jsx)(c.default, {
                            className: h.icon,
                            width: 48,
                            height: 48,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)(l.ModalFooter, {
                    className: h.modalFooter,
                    children: [
                      p
                        ? (0, r.jsx)(l.Button, {
                            className: h.cancelButton,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            size: l.ButtonSizes.SMALL,
                            onClick: () => {
                              p && (N(n, t), C());
                            },
                            children: I.default.Messages.AVATAR_UPLOAD_SKIP,
                          })
                        : null,
                      (0, r.jsxs)("div", {
                        className: h.buttonsRight,
                        children: [
                          (0, r.jsx)(l.Button, {
                            className: h.cancelButton,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            size: l.ButtonSizes.SMALL,
                            onClick: () => {
                              if (null != W.current) {
                                W.current(), (W.current = null), b(!1);
                                return;
                              }
                              C();
                            },
                            children: I.default.Messages.AVATAR_UPLOAD_CANCEL,
                          }),
                          (0, r.jsx)(l.Button, {
                            submitting: x,
                            size: l.ButtonSizes.SMALL,
                            onClick: J,
                            children: I.default.Messages.AVATAR_UPLOAD_APPLY,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    8731: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          cropGIF: function () {
            return l;
          },
          cropStaticImage: function () {
            return s;
          },
          getBoundedCoordinates: function () {
            return u;
          },
          adjustImageDimensionsForAspectRatio: function () {
            return c;
          },
          calculateDragBoundaries: function () {
            return d;
          },
          calculateOverlaySize: function () {
            return E;
          },
          downsizeImage: function () {
            return _;
          },
        }),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("222007"),
        n("70102"),
        n("311790"),
        n("477657"),
        n("811875"),
        n("90301"),
        n("652153"),
        n("28797"),
        n("817884"),
        n("597349"),
        n("667536"),
        n("690341");
      var r = n("917351"),
        i = n("75015");
      function a(e, t, n, r) {
        let i = e.naturalWidth / e.width,
          a = t.width / 2,
          l = t.height / 2,
          s = (e.width / 2 - a - n.x) * i,
          u = (e.height / 2 - l - n.y) * i,
          o = t.width * i,
          c = t.height * i,
          d = Math.min(o, r.width),
          E = Math.min(c, r.height);
        return {
          x: s,
          y: u,
          scaledCropWidth: o,
          scaledCropHeight: c,
          canvasWidth: d,
          canvasHeight: E,
        };
      }
      async function l(e, t, r, l, s) {
        let {
            x: u,
            y: o,
            scaledCropWidth: c,
            scaledCropHeight: d,
          } = a(t, r, l, s),
          E = await e.arrayBuffer(),
          _ = new Worker(new URL(n.p + n.u("39703"), n.b)),
          A = new Promise((e, t) => {
            _.onmessage = n => {
              let { data: r } = n;
              if (r.type === i.MessageTypes.CROP_GIF_COMPLETE) {
                var a;
                e(
                  ((a = new Blob([r.result])),
                  new Promise(e => {
                    let t = new FileReader();
                    (t.onload = t => {
                      var n;
                      let r =
                        null === (n = t.target) || void 0 === n
                          ? void 0
                          : n.result;
                      "string" == typeof r ? e(r) : e("");
                    }),
                      t.readAsDataURL(a);
                  }))
                ),
                  _.terminate();
              } else
                r.type === i.MessageTypes.CROP_GIF_ERROR &&
                  (t(Error("Error cropping GIF")), _.terminate());
            };
          });
        return (
          _.postMessage({
            type: i.MessageTypes.CROP_GIF_START,
            gif: new Uint8Array(E),
            x: 0 | u,
            y: 0 | o,
            width: 0 | c,
            height: 0 | d,
          }),
          { result: A, cancelFn: () => _.terminate() }
        );
      }
      function s(e, t, n, r) {
        let {
            x: i,
            y: l,
            scaledCropWidth: s,
            scaledCropHeight: u,
            canvasWidth: o,
            canvasHeight: c,
          } = a(e, t, n, r),
          d = document.createElement("canvas");
        (d.width = o), (d.height = c);
        let E = d.getContext("2d");
        return (
          null != E && E.drawImage(e, i, l, s, u, 0, 0, d.width, d.height),
          d.toDataURL("image/png")
        );
      }
      function u(e, t, n) {
        return {
          x: (0, r.clamp)(e, n.left, n.right),
          y: (0, r.clamp)(t, n.bottom, n.top),
        };
      }
      function o(e, t, n, r) {
        let a = n,
          l = r;
        n > i.EDITING_CONTAINER_WIDTH &&
          ((a = i.EDITING_CONTAINER_WIDTH),
          (l = r * (i.EDITING_CONTAINER_WIDTH / n)));
        if (n / r < e) return { width: a, height: l };
        let s = t / l,
          u = a * s;
        return { width: u, height: t };
      }
      function c(e, t, n) {
        switch (e) {
          case i.UploadTypes.AVATAR:
          case i.UploadTypes.AVATAR_DECORATION:
            return { width: t, height: n };
          case i.UploadTypes.BANNER:
            return o(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, n);
          case i.UploadTypes.GUILD_BANNER:
            return o(
              i.GUILD_BANNER_ASPECT_RATIO,
              i.MAX_GUILD_BANNER_OVERLAY_HEIGHT,
              t,
              n
            );
          case i.UploadTypes.VIDEO_BACKGROUND:
            return o(
              i.VIDEO_BACKGROUND_ASPECT_RATIO,
              i.MAX_VIDEO_OVERLAY_HEIGHT,
              t,
              n
            );
          case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
            return o(
              i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO,
              i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT,
              t,
              n
            );
          case i.UploadTypes.HOME_HEADER:
            return o(
              i.HOME_HEADER_ASPECT_RATIO,
              i.MAX_HOME_HEADER_OVERLAY_HEIGHT,
              t,
              n
            );
        }
      }
      function d(e, t, n) {
        let r = { top: 0, bottom: 0, left: 0, right: 0 },
          i = e - n.width,
          a = t - n.height;
        return (
          0 !== i && ((r.left = -Math.abs(i / 2)), (r.right = i / 2)),
          0 !== a && ((r.bottom = -Math.abs(a / 2)), (r.top = a / 2)),
          r
        );
      }
      function E(e, t, n, r) {
        switch (e) {
          case i.UploadTypes.AVATAR:
          case i.UploadTypes.AVATAR_DECORATION:
            let a = Math.min(t, n);
            return { width: a, height: a };
          case i.UploadTypes.BANNER:
            let l = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: l, height: l * (1 / i.BANNER_ASPECT_RATIO) };
          case i.UploadTypes.GUILD_BANNER:
            let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: s, height: Math.min(s * (9 / 16), r) };
          case i.UploadTypes.VIDEO_BACKGROUND:
            let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: u, height: u * (9 / 16) };
          case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
            let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: o, height: 0.4 * o };
          case i.UploadTypes.HOME_HEADER:
            let c = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: c, height: c * (1 / i.HOME_HEADER_ASPECT_RATIO) };
        }
      }
      function _(e, t, n) {
        let r = e.naturalWidth / e.naturalHeight,
          i = t,
          a = n;
        e.naturalWidth > e.naturalHeight ? (i /= r) : (a *= r);
        let l = { height: i, width: a };
        return s(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, l);
      }
    },
    649844: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("748820"),
        a = n("77078"),
        l = n("112679"),
        s = n("55689"),
        u = n("676379"),
        o = n("697218"),
        c = n("599110"),
        d = n("659500"),
        E = n("719923"),
        _ = n("49111"),
        A = n("646718");
      function T(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: T,
            onClose: f,
            onComplete: I,
            onSubscriptionConfirmation: h,
            analyticsLocations: R,
            analyticsObject: p,
            analyticsLocation: N,
            analyticsSourceLocation: C,
            isGift: m = !1,
            giftMessage: M,
            subscriptionTier: S,
            trialId: O,
            postSuccessGuild: D,
            openInvoiceId: g,
            applicationId: L,
            referralTrialOfferId: P,
            giftRecipient: y,
            returnRef: U,
            subscription: H,
          } = null != e ? e : {},
          v = !1,
          w = (0, i.v4)(),
          G = o.default.getCurrentUser(),
          B = (0, E.isPremiumExactly)(G, A.PremiumTypes.TIER_2);
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
              let { onClose: i, ...a } = n;
              return (0, r.jsx)(e, {
                ...a,
                loadId: w,
                subscriptionTier: S,
                skuId: (0, E.castPremiumSubscriptionAsSkuId)(S),
                isGift: m,
                giftMessage: M,
                giftRecipient: y,
                initialPlanId: t,
                followupSKUInfo: T,
                onClose: (e, t) => {
                  i(),
                    null == f || f(e),
                    e &&
                      (null == h || h(),
                      !m &&
                        null != t &&
                        t === A.PremiumSubscriptionSKUs.TIER_2 &&
                        !B &&
                        d.ComponentDispatch.dispatch(
                          _.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED
                        ));
                },
                onComplete: () => {
                  (v = !0),
                    null == I || I(),
                    !m && (0, u.setCanPlayWowMoment)(!0);
                },
                onSubscriptionConfirmation: h,
                analyticsLocations: R,
                analyticsObject: p,
                analyticsLocation: N,
                analyticsSourceLocation: C,
                trialId: O,
                postSuccessGuild: D,
                planGroup: A.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                openInvoiceId: g,
                applicationId: L,
                referralTrialOfferId: P,
                returnRef: U,
                subscription: H,
              });
            };
          },
          {
            modalKey: "payment-modal",
            onCloseCallback: () => {
              !v &&
                c.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                  load_id: w,
                  payment_type:
                    _.PurchaseTypeToAnalyticsPaymentType[
                      _.PurchaseTypes.SUBSCRIPTION
                    ],
                  location: null != N ? N : p,
                  source: C,
                  subscription_type: _.SubscriptionTypes.PREMIUM,
                  is_gift: m,
                  eligible_for_trial: null != O,
                  application_id: L,
                  location_stack: R,
                }),
                (0, l.clearError)(),
                (0, s.clearPurchaseTokenAuthState)(),
                null == f || f(v),
                v && (null == h || h());
            },
          }
        );
      }
    },
    676379: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          setCanPlayWowMoment: function () {
            return i;
          },
        });
      var r = n("913144");
      let i = e => {
        r.default.dispatch({
          type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
          value: e,
        });
      };
    },
    635956: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("414456"),
        a = n.n(i),
        l = n("446674"),
        s = n("77078"),
        u = n("79112"),
        o = n("685665"),
        c = n("788506"),
        d = n("649844"),
        E = n("393414"),
        _ = n("797647"),
        A = n("697218"),
        T = n("521012"),
        f = n("471671"),
        I = n("181114"),
        h = n("978679"),
        R = n("216422"),
        p = n("719923"),
        N = n("646718"),
        C = n("49111"),
        m = n("782340"),
        M = n("917746"),
        S = function (e) {
          let {
              isGift: t,
              subscriptionTier: i,
              onClick: S,
              size: O,
              className: D,
              trialId: g,
              isTrialCTA: L,
              buttonText: P,
              buttonTextClassName: y,
              iconClassName: U,
              postSuccessGuild: H,
              onSubscribeModalClose: v,
              premiumModalAnalyticsLocation: w,
              showIcon: G = !0,
              disableShine: B,
              applicationId: x,
              giftMessage: b,
              overrideDisabledButtonText: V,
              shinyButtonClassName: j,
              ...F
            } = e,
            W = (0, l.useStateFromStores)([A.default], () =>
              A.default.getCurrentUser()
            ),
            k = (0, l.useStateFromStores)([f.default], () =>
              f.default.isFocused()
            ),
            X = (0, l.useStateFromStores)([T.default], () =>
              T.default.getPremiumTypeSubscription()
            ),
            { analyticsLocations: Y } = (0, o.default)(),
            Z = e => {
              if ((e.preventDefault(), null == W)) {
                (0, E.transitionTo)(C.Routes.LOGIN);
                return;
              }
              if (
                (null == S || S(e),
                (null == X ? void 0 : X.status) ===
                  C.SubscriptionStatusTypes.ACCOUNT_HOLD)
              ) {
                (0, c.trackPremiumSettingsPaneOpened)(),
                  u.default.open(C.UserSettingsSections.PREMIUM),
                  null == v || v(!1);
                return;
              }
              !(function (e) {
                let {
                  isClaimed: t,
                  isVerified: i,
                  isGift: a,
                  subscriptionTier: l,
                  trialId: u,
                  postSuccessGuild: o,
                  onSubscribeModalClose: c,
                  analyticsLocations: E,
                  premiumModalAnalyticsLocation: _,
                  applicationId: A,
                  giftMessage: T,
                } = e;
                if (!t) {
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("984599")
                      .then(n.bind(n, "984599"));
                    return t => {
                      let { onClose: n, ...i } = t;
                      return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                  });
                  return;
                }
                if (!i) {
                  (0, s.openModalLazy)(async () => {
                    let { default: e } = await n
                      .el("899917")
                      .then(n.bind(n, "899917"));
                    return t => {
                      let { onClose: n, ...i } = t;
                      return (0, r.jsx)(e, { ...i, onClose: n });
                    };
                  });
                  return;
                }
                let f = C.AnalyticsObjectTypes.BUY;
                null != u
                  ? (f = C.AnalyticsObjectTypes.TRIAL)
                  : a && (f = C.AnalyticsObjectTypes.GIFT),
                  (0, d.default)({
                    isGift: a,
                    initialPlanId: null,
                    subscriptionTier: l,
                    analyticsLocations: E,
                    analyticsObject: {
                      object: C.AnalyticsObjects.BUTTON_CTA,
                      objectType: f,
                      ..._,
                    },
                    trialId: u,
                    postSuccessGuild: o,
                    onClose: c,
                    applicationId: A,
                    giftMessage: T,
                  });
              })({
                isClaimed: W.isClaimed(),
                isVerified: W.verified,
                isGift: t,
                subscriptionTier: i,
                trialId: g,
                postSuccessGuild: H,
                onSubscribeModalClose: v,
                analyticsLocations: Y,
                premiumModalAnalyticsLocation: w,
                applicationId: x,
                giftMessage: b,
              });
            };
          if (L)
            return (0, r.jsxs)(s.Button, {
              size: O,
              className: D,
              innerClassName: M.premiumSubscribeButton,
              look: s.Button.Looks.INVERTED,
              onClick: Z,
              ...F,
              children: [
                G && (0, r.jsx)(R.default, { className: M.premiumIcon }),
                (0, r.jsx)("span", {
                  className: a(M.buttonText, y),
                  children:
                    null != P
                      ? P
                      : m.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT,
                }),
              ],
            });
          if (t)
            return (0, r.jsxs)(s.Button, {
              size: O,
              className: D,
              innerClassName: M.giftButton,
              color: s.Button.Colors.PRIMARY,
              onClick: Z,
              ...F,
              children: [
                (0, r.jsx)(h.default, { className: M.giftIcon }),
                (0, r.jsx)("span", {
                  className: a(M.buttonText, y),
                  children:
                    null != P ? P : m.default.Messages.PREMIUM_GIFTING_BUTTON,
                }),
              ],
            });
          let z = m.default.Messages.APPLICATION_STORE_GET_PREMIUM,
            K = null != X ? (0, p.getPremiumPlanItem)(X) : null,
            q =
              null != K
                ? p.default.getPremiumType(K.planId)
                : null == W
                  ? void 0
                  : W.premiumType,
            J =
              i === N.PremiumSubscriptionSKUs.TIER_2 &&
              null != q &&
              [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(q);
          J && (z = m.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
          let Q =
              null != X &&
              X.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD &&
              !(0, _.isNoneSubscription)(X.planId) &&
              !J,
            $ = Q
              ? null != V
                ? V
                : (function (e) {
                    let { ctaSubscriptionSkuId: t, currentPremiumType: n } = e,
                      r = null,
                      i = null;
                    if (
                      null != t &&
                      t !== N.PremiumSubscriptionSKUs.LEGACY &&
                      t !== N.PremiumSubscriptionSKUs.TIER_0 &&
                      t !== N.PremiumSubscriptionSKUs.TIER_1 &&
                      t !== N.PremiumSubscriptionSKUs.TIER_2
                    )
                      return {
                        disabledButtonText: r,
                        disabledButtonTooltipText: i,
                      };
                    let a =
                        null != t
                          ? N.PremiumSubscriptionSKUToPremiumType[
                              (0, p.castPremiumSubscriptionAsSkuId)(t)
                            ]
                          : null,
                      l = null != a ? N.PremiumTypeOrder[a] : null,
                      s = null != n ? N.PremiumTypeOrder[n] : null;
                    return (
                      null != s && null != l && l < s
                        ? ((r =
                            m.default.Messages.APPLICATION_STORE_GET_PREMIUM),
                          (i =
                            m.default.Messages
                              .PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP))
                        : null != a && null != n && a === n
                          ? ((r =
                              m.default.Messages
                                .BILLING_SWITCH_PLAN_CURRENT_PLAN),
                            (i =
                              m.default.Messages
                                .PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP))
                          : null == a &&
                            null != n &&
                            n === N.PremiumTypes.TIER_2 &&
                            (i =
                              m.default.Messages
                                .PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP),
                      { disabledButtonText: r, disabledButtonTooltipText: i }
                    );
                  })({ ctaSubscriptionSkuId: i, currentPremiumType: q })
              : null;
          function ee(e) {
            var t, n;
            return (0, r.jsxs)(I.default, {
              disabled: Q,
              onClick: Z,
              innerClassName: M.premiumSubscribeButton,
              color:
                i === N.PremiumSubscriptionSKUs.TIER_1
                  ? s.Button.Colors.PRIMARY
                  : s.Button.Colors.GREEN,
              size: O,
              className: j,
              wrapperClassName: D,
              pauseAnimation: !k || B,
              ...F,
              ...e,
              children: [
                G && (0, r.jsx)(R.default, { className: a(M.premiumIcon, U) }),
                (0, r.jsx)("span", {
                  className: a(M.buttonText, y),
                  children:
                    null !==
                      (n =
                        null !==
                          (t = null == $ ? void 0 : $.disabledButtonText) &&
                        void 0 !== t
                          ? t
                          : P) && void 0 !== n
                      ? n
                      : z,
                }),
              ],
            });
          }
          return (null == $ ? void 0 : $.disabledButtonTooltipText) != null
            ? (0, r.jsx)(s.Tooltip, {
                text: $.disabledButtonTooltipText,
                children: ee,
              })
            : ee();
        };
    },
    181114: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ShineSizes: function () {
            return i;
          },
          Shine: function () {
            return f;
          },
          default: function () {
            return h;
          },
        });
      var r,
        i,
        a = n("37983"),
        l = n("884691"),
        s = n("414456"),
        u = n.n(s),
        o = n("458960"),
        c = n("77078"),
        d = n("252744"),
        E = n("145131"),
        _ = n("61435");
      ((r = i || (i = {})).DEFAULT = "default"), (r.SMALL = "small");
      let A = { default: _.shineDefault, small: _.shineSmall },
        T = { default: _.shineInnerDefault, small: _.shineInnerSmall };
      class f extends l.PureComponent {
        render() {
          let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
          return (0, a.jsx)(o.default.div, {
            ...r,
            className: u(_.shineContainer, e, { [_.shinePaused]: n }),
            children: (0, a.jsx)(E.default, {
              align: E.default.Align.CENTER,
              justify: E.default.Justify.CENTER,
              className: A[t],
              children: (0, a.jsx)("div", { className: T[t] }),
            }),
          });
        }
      }
      f.defaultProps = { shineSize: "default" };
      let I = e => {
        let {
            children: t,
            className: n,
            disabled: r,
            submitting: i,
            pauseAnimation: s,
            shineSize: o = "default",
            shinePaused: E,
            buttonShineClassName: A,
            onlyShineOnHover: T,
            ...I
          } = e,
          h = l.createRef(),
          R = (0, d.default)(h),
          p = !r && !i && !0 !== s && (!T || R);
        return (0, a.jsxs)(c.Button, {
          buttonRef: h,
          ...I,
          className: u(_.shinyButton, n),
          disabled: r,
          submitting: i,
          children: [
            t,
            p
              ? (0, a.jsx)(f, {
                  shinePaused: E,
                  className: u(
                    _.buttonShine,
                    T ? _.onlyShineOnHover : void 0,
                    A
                  ),
                  shineSize: o,
                })
              : null,
          ],
        });
      };
      I.ShineSizes = i;
      var h = I;
    },
    95689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("578478"),
        l = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                className: a,
                d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                fill: i,
              }),
            });
          },
          a.ImageIcon,
          void 0,
          { size: 24 }
        );
    },
    216422: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("469563"),
        a = n("202909"),
        l = n("75196"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              viewBox: a = "0 0 24 24",
              foreground: s,
              ...u
            } = e;
            return (0, r.jsx)("svg", {
              ...(0, l.default)(u),
              width: t,
              height: n,
              viewBox: a,
              children: (0, r.jsx)("path", {
                className: s,
                fill: i,
                d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z",
              }),
            });
          },
          a.NitroWheelIcon,
          void 0,
          { size: 24 }
        );
    },
    392861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GifIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
            clipRule: "evenodd",
            className: s,
          }),
        });
      };
    },
    962139: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ImageIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
            clipRule: "evenodd",
            className: s,
          }),
        });
      };
    },
    804830: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          NitroWheelIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
              className: s,
            }),
          ],
        });
      };
    },
    782542: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ScreenArrowIcon: function () {
            return l;
          },
        });
      var r = n("37983");
      n("884691");
      var i = n("669491"),
        a = n("82169");
      let l = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: l = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...u
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
              clipRule: "evenodd",
              className: s,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: s,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=5e1aaee98258e02c1e8f.js.map

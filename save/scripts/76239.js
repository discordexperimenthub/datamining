(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76239"],
  {
    357450: function (e, t, l) {
      "use strict";
      e.exports = l.p + "222f914ec12acf16874f.svg";
    },
    348919: function (e, t, l) {
      "use strict";
      e.exports = l.p + "ec6798869dcd1915ecd8.svg";
    },
    597517: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          hideHotspot: function () {
            return s;
          },
          setHotspotOverride: function () {
            return r;
          },
          clearHotspotOverride: function () {
            return o;
          },
        });
      var a = l("913144"),
        i = l("599110"),
        n = l("49111");
      function s(e) {
        i.default.track(n.AnalyticEvents.HOTSPOT_HIDDEN, {
          hotspot_location: e,
        }),
          a.default.wait(() => {
            a.default.dispatch({ type: "HOTSPOT_HIDE", location: e });
          });
      }
      function r(e, t) {
        a.default.dispatch({
          type: "HOTSPOT_OVERRIDE_SET",
          location: e,
          enabled: t,
        });
      }
      function o(e) {
        a.default.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location: e });
      }
    },
    269596: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        }),
        l("222007");
      var a = l("446674"),
        i = l("913144"),
        n = l("197881"),
        s = l("492397");
      let r = new Set(),
        o = {};
      class u extends a.default.PersistedStore {
        initialize(e) {
          null != e &&
            (Array.isArray(e.hiddenHotspots) && (r = new Set(e.hiddenHotspots)),
            null != e.hotspotOverrides && (o = e.hotspotOverrides));
        }
        hasHotspot(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = !t && o[e];
          return (
            !(
              s.CONFERENCE_MODE_ENABLED || n.ProcessArgs.isDisallowPopupsSet()
            ) &&
            (l || !r.has(e))
          );
        }
        hasHiddenHotspot(e) {
          return r.has(e);
        }
        getHotspotOverride(e) {
          return o[e];
        }
        getState() {
          return { hiddenHotspots: r, hotspotOverrides: o };
        }
      }
      (u.displayName = "HotspotStore"),
        (u.persistKey = "hotspots"),
        (u.migrations = [
          e => ({ hiddenHotspots: null != e ? e : [], hotspotOverrides: {} }),
        ]);
      var d = new u(i.default, {
        OVERLAY_INITIALIZE: function (e) {
          let { hiddenHotspots: t } = e;
          r = new Set(t);
        },
        HOTSPOT_HIDE: function (e) {
          let { location: t } = e;
          if (r.has(t)) return !1;
          r.add(t);
        },
        HOTSPOT_OVERRIDE_SET: function (e) {
          let { location: t, enabled: l } = e;
          o[t] = l;
        },
        HOTSPOT_OVERRIDE_CLEAR: function (e) {
          let { location: t } = e;
          if (null == o[t]) return !1;
          delete o[t];
        },
      });
    },
    8731: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          cropGIF: function () {
            return s;
          },
          cropStaticImage: function () {
            return r;
          },
          getBoundedCoordinates: function () {
            return o;
          },
          adjustImageDimensionsForAspectRatio: function () {
            return d;
          },
          calculateDragBoundaries: function () {
            return c;
          },
          calculateOverlaySize: function () {
            return E;
          },
          downsizeImage: function () {
            return I;
          },
        }),
        l("511434"),
        l("313619"),
        l("654714"),
        l("287168"),
        l("956660"),
        l("222007"),
        l("70102"),
        l("311790"),
        l("477657"),
        l("811875"),
        l("90301"),
        l("652153"),
        l("28797"),
        l("817884"),
        l("597349"),
        l("667536"),
        l("690341");
      var a = l("917351"),
        i = l("75015");
      function n(e, t, l, a) {
        let i = e.naturalWidth / e.width,
          n = t.width / 2,
          s = t.height / 2,
          r = (e.width / 2 - n - l.x) * i,
          o = (e.height / 2 - s - l.y) * i,
          u = t.width * i,
          d = t.height * i,
          c = Math.min(u, a.width),
          E = Math.min(d, a.height);
        return {
          x: r,
          y: o,
          scaledCropWidth: u,
          scaledCropHeight: d,
          canvasWidth: c,
          canvasHeight: E,
        };
      }
      async function s(e, t, a, s, r) {
        let {
            x: o,
            y: u,
            scaledCropWidth: d,
            scaledCropHeight: c,
          } = n(t, a, s, r),
          E = await e.arrayBuffer(),
          I = new Worker(new URL(l.p + l.u("39703"), l.b)),
          _ = new Promise((e, t) => {
            I.onmessage = l => {
              let { data: a } = l;
              if (a.type === i.MessageTypes.CROP_GIF_COMPLETE) {
                var n;
                e(
                  ((n = new Blob([a.result])),
                  new Promise(e => {
                    let t = new FileReader();
                    (t.onload = t => {
                      var l;
                      let a =
                        null === (l = t.target) || void 0 === l
                          ? void 0
                          : l.result;
                      "string" == typeof a ? e(a) : e("");
                    }),
                      t.readAsDataURL(n);
                  }))
                ),
                  I.terminate();
              } else
                a.type === i.MessageTypes.CROP_GIF_ERROR &&
                  (t(Error("Error cropping GIF")), I.terminate());
            };
          });
        return (
          I.postMessage({
            type: i.MessageTypes.CROP_GIF_START,
            gif: new Uint8Array(E),
            x: 0 | o,
            y: 0 | u,
            width: 0 | d,
            height: 0 | c,
          }),
          { result: _, cancelFn: () => I.terminate() }
        );
      }
      function r(e, t, l, a) {
        let {
            x: i,
            y: s,
            scaledCropWidth: r,
            scaledCropHeight: o,
            canvasWidth: u,
            canvasHeight: d,
          } = n(e, t, l, a),
          c = document.createElement("canvas");
        (c.width = u), (c.height = d);
        let E = c.getContext("2d");
        return (
          null != E && E.drawImage(e, i, s, r, o, 0, 0, c.width, c.height),
          c.toDataURL("image/png")
        );
      }
      function o(e, t, l) {
        return {
          x: (0, a.clamp)(e, l.left, l.right),
          y: (0, a.clamp)(t, l.bottom, l.top),
        };
      }
      function u(e, t, l, a) {
        let n = l,
          s = a;
        l > i.EDITING_CONTAINER_WIDTH &&
          ((n = i.EDITING_CONTAINER_WIDTH),
          (s = a * (i.EDITING_CONTAINER_WIDTH / l)));
        if (l / a < e) return { width: n, height: s };
        let r = t / s,
          o = n * r;
        return { width: o, height: t };
      }
      function d(e, t, l) {
        switch (e) {
          case i.UploadTypes.AVATAR:
          case i.UploadTypes.AVATAR_DECORATION:
            return { width: t, height: l };
          case i.UploadTypes.BANNER:
            return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, l);
          case i.UploadTypes.GUILD_BANNER:
            return u(
              i.GUILD_BANNER_ASPECT_RATIO,
              i.MAX_GUILD_BANNER_OVERLAY_HEIGHT,
              t,
              l
            );
          case i.UploadTypes.VIDEO_BACKGROUND:
            return u(
              i.VIDEO_BACKGROUND_ASPECT_RATIO,
              i.MAX_VIDEO_OVERLAY_HEIGHT,
              t,
              l
            );
          case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
            return u(
              i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO,
              i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT,
              t,
              l
            );
          case i.UploadTypes.HOME_HEADER:
            return u(
              i.HOME_HEADER_ASPECT_RATIO,
              i.MAX_HOME_HEADER_OVERLAY_HEIGHT,
              t,
              l
            );
        }
      }
      function c(e, t, l) {
        let a = { top: 0, bottom: 0, left: 0, right: 0 },
          i = e - l.width,
          n = t - l.height;
        return (
          0 !== i && ((a.left = -Math.abs(i / 2)), (a.right = i / 2)),
          0 !== n && ((a.bottom = -Math.abs(n / 2)), (a.top = n / 2)),
          a
        );
      }
      function E(e, t, l, a) {
        switch (e) {
          case i.UploadTypes.AVATAR:
          case i.UploadTypes.AVATAR_DECORATION:
            let n = Math.min(t, l);
            return { width: n, height: n };
          case i.UploadTypes.BANNER:
            let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: s, height: s * (1 / i.BANNER_ASPECT_RATIO) };
          case i.UploadTypes.GUILD_BANNER:
            let r = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: r, height: Math.min(r * (9 / 16), a) };
          case i.UploadTypes.VIDEO_BACKGROUND:
            let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: o, height: o * (9 / 16) };
          case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
            let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: u, height: 0.4 * u };
          case i.UploadTypes.HOME_HEADER:
            let d = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: d, height: d * (1 / i.HOME_HEADER_ASPECT_RATIO) };
        }
      }
      function I(e, t, l) {
        let a = e.naturalWidth / e.naturalHeight,
          i = t,
          n = l;
        e.naturalWidth > e.naturalHeight ? (i /= a) : (n *= a);
        let s = { height: i, width: n };
        return r(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, s);
      }
    },
    54666: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return K;
          },
        }),
        l("222007");
      var a = l("37983"),
        i = l("884691"),
        n = l("414456"),
        s = l.n(n),
        r = l("748820"),
        o = l("446674"),
        u = l("819855"),
        d = l("77078"),
        c = l("385976"),
        E = l("208548"),
        I = l("104945"),
        _ = l("8731"),
        f = l("161778"),
        T = l("305961"),
        h = l("697218"),
        m = l("145131"),
        A = l("68238"),
        g = l("599110"),
        p = l("993105"),
        R = l("701909"),
        D = l("103603"),
        L = l("467094"),
        O = l("161585"),
        S = l("24373"),
        v = l("41170"),
        N = l("560241"),
        C = l("49111"),
        M = l("782340"),
        U = l("287065"),
        y = l("357450"),
        H = l("348919");
      let P = new Set([
          "application/json",
          "image/png",
          "image/apng",
          "image/gif",
        ]),
        w = [
          { name: "Sticker file", extensions: ["json", "png", "apng", "gif"] },
        ];
      function x(e, t) {
        g.default.track(C.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
          successful: e,
          error: null != t ? t : "",
        });
      }
      let G = e => {
          let { stickerPreview: t } = e;
          return (0, a.jsxs)("div", {
            className: U.preview,
            children: [
              (0, a.jsx)("div", {
                className: U.previewDark,
                children:
                  null != t
                    ? t
                    : (0, a.jsx)("img", {
                        src: y,
                        alt: M.default.Messages
                          .GUILD_STICKER_PREVIEW_IMG_ALT_DARK,
                      }),
              }),
              (0, a.jsx)("div", {
                className: U.previewLight,
                children:
                  null != t
                    ? t
                    : (0, a.jsx)("img", {
                        src: H,
                        alt: M.default.Messages
                          .GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT,
                      }),
              }),
            ],
          });
        },
        F = e => {
          let { sticker: t, previewData: l, onStickerError: i } = e;
          if (null != t)
            return (0, a.jsx)(v.default, { size: 160, sticker: t });
          if (null == l) return null;
          let { id: n, formatType: s, content: r } = l;
          return (0, a.jsx)(
            v.default,
            {
              assetData: r,
              fileUri: r,
              size: 160,
              sticker: {
                name: n,
                description: "",
                id: n,
                pack_id: "",
                format_type: s,
              },
              onError: i,
            },
            n
          );
        };
      async function j(e) {
        let t = await (0, D.readFileAsBase64)(e),
          l = new Image();
        (l.src = t), await l.decode();
        let a = (0, _.downsizeImage)(l, 320, 320);
        return (0, D.dataUrlToFile)(a, e.name, e.type);
      }
      function K(e) {
        var t, l, n, _, v, y, H, K;
        let { transitionState: b, onClose: B, guildId: k, sticker: V } = e,
          z = (0, o.useStateFromStores)([f.default], () => f.default.theme),
          W = (0, o.useStateFromStores)([c.default], () =>
            (null == V ? void 0 : V.tags) != null
              ? c.default.getCustomEmojiById(V.tags)
              : null
          ),
          X =
            null !==
              (l =
                null === (t = h.default.getCurrentUser()) || void 0 === t
                  ? void 0
                  : t.isStaff()) &&
            void 0 !== l &&
            l,
          Y = X ? N.STAFF_MAX_STICKER_FILE_SIZE : N.MAX_STICKER_FILE_SIZE,
          [Z, q] = i.useState(null),
          [J, Q] = i.useState(
            null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : ""
          ),
          [$, ee] = i.useState({
            file: null,
            filename:
              null !== (_ = (0, S.getFilenameForSticker)(V)) && void 0 !== _
                ? _
                : "",
          }),
          [et, el] = i.useState(null == W ? void 0 : W.id),
          [ea, ei] = i.useState(
            null !== (v = null == W ? void 0 : W.name) && void 0 !== v
              ? v
              : null == V
                ? void 0
                : V.tags
          ),
          [en, es] = i.useState(
            null !== (y = null == V ? void 0 : V.description) && void 0 !== y
              ? y
              : ""
          ),
          [er, eo] = i.useState(!1),
          [eu, ed] = i.useState(null),
          ec = (0, o.useStateFromStores)([T.default], () =>
            T.default.getGuild(k)
          ),
          eE =
            (null == ec ? void 0 : ec.hasFeature(C.GuildFeatures.PARTNERED)) ||
            (null == ec ? void 0 : ec.hasFeature(C.GuildFeatures.VERIFIED)),
          eI = null != V,
          e_ = eI || (null == $ ? void 0 : $.file) != null,
          ef = 0 === en.length || (en.length >= 2 && en.length <= 100),
          eT =
            !er &&
            (null == eu ? void 0 : eu.isBlocking) !== !0 &&
            J.length >= 2 &&
            (null != et ||
              null != ea ||
              ((null == V ? void 0 : V.tags) != null &&
                (null == V ? void 0 : V.tags) !== "")) &&
            e_ &&
            ef,
          eh = async e => {
            var t;
            if (null == e) return;
            let l =
              null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
            if (!P.has(l)) {
              ed({
                message: M.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                isBlocking: !0,
              });
              return;
            }
            let a = e;
            if (
              "image/png" === l &&
              e.size > Y &&
              !(await (0, D.isPNGAnimated)(e))
            ) {
              a = await j(e);
              let t = a.size > Y;
              g.default.track(C.AnalyticEvents.STICKER_FILE_RESIZED, {
                original_file_size_bytes: e.size,
                resized_file_size_bytes: a.size,
                resized_file_too_big: t,
              });
            }
            if (a.size > Y) {
              ed({
                message: M.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                  maxSize: (0, p.formatKbSize)(Y, { useKibibytes: !0 }),
                }),
                isBlocking: null == $.file,
              }),
                g.default.track(
                  C.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED,
                  { size: a.size, filetype: l }
                );
              return;
            }
            let i = (0, S.getStickerFormatTypeFromFileType)(a.type),
              n = i === O.StickerFormat.LOTTIE;
            if (n) {
              if (!eE) {
                ed({
                  message:
                    M.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format(
                      {
                        articleURL: R.default.getArticleURL(
                          C.HelpdeskArticles.STICKERS_UPLOAD
                        ),
                      }
                    ),
                  isBlocking: !0,
                });
                return;
              }
              let e = new FileReader();
              e.addEventListener("load", () => {
                q({ id: (0, r.v4)(), formatType: i, content: e.result }),
                  ed(null);
              }),
                e.readAsText(a);
            } else {
              let e = await (0, D.readFileAsBase64)(a);
              q({ id: (0, r.v4)(), formatType: i, content: e }), ed(null);
            }
            ee({ file: a, filename: a.name });
          },
          em = async e => {
            var t, l, a, i, n, s;
            e.preventDefault();
            let r =
              null !==
                (l =
                  null !== (t = null != et ? et : ea) && void 0 !== t
                    ? t
                    : null == V
                      ? void 0
                      : V.tags) && void 0 !== l
                ? l
                : "";
            try {
              if ((eo(!0), eI))
                await (0, L.updateGuildSticker)(
                  k,
                  null !== (a = null == V ? void 0 : V.id) && void 0 !== a
                    ? a
                    : "",
                  { name: J, tags: r, description: en }
                );
              else {
                let e = new FormData();
                e.append("name", J),
                  e.append("tags", r),
                  e.append("description", en),
                  (null == $ ? void 0 : $.file) != null &&
                    e.append("file", $.file),
                  (s =
                    null !==
                      (n =
                        null === (i = $.file) || void 0 === i
                          ? void 0
                          : i.type) && void 0 !== n
                      ? n
                      : ""),
                  g.default.track(C.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                    filetype: s,
                  }),
                  await (0, L.createGuildSticker)(k, e),
                  x(!0);
              }
              B();
            } catch (e) {
              ed({ message: e.body.message, isBlocking: !1 }),
                x(!1, e.body.message);
            } finally {
              eo(!1);
            }
          },
          eA = i.useCallback(() => {
            ed({
              message: M.default.Messages.GUILD_STICKER_INVALID_STICKER,
              isBlocking: !0,
            });
          }, []),
          eg = F({ sticker: V, previewData: Z, onStickerError: eA }),
          ep = eE
            ? M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION
            : M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
        return (0, a.jsxs)(d.ModalRoot, {
          transitionState: b,
          "aria-labelledby": "STICKER_UPLOAD_MODAL",
          className: U.modal,
          children: [
            (0, a.jsx)(d.ModalCloseButton, {
              onClick: B,
              className: U.modalClose,
            }),
            (0, a.jsxs)("form", {
              onSubmit: em,
              className: U.form,
              children: [
                (0, a.jsxs)(d.ModalContent, {
                  className: U.modalContent,
                  children: [
                    (0, a.jsxs)(d.ModalHeader, {
                      direction: m.default.Direction.VERTICAL,
                      separator: !1,
                      className: U.modalHeader,
                      children: [
                        (0, a.jsx)(d.Heading, {
                          variant: "heading-xl/semibold",
                          className: U.modalHeaderTitle,
                          children:
                            M.default.Messages.GUILD_STICKER_UPLOAD_TITLE,
                        }),
                        (0, a.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: ep.format({
                            fileSize: (0, p.formatKbSize)(
                              N.MAX_STICKER_FILE_SIZE,
                              { useKibibytes: !0 }
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.FormSection, {
                      title:
                        M.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                      className: U.formItem,
                      children: (0, a.jsx)(G, { stickerPreview: eg }),
                    }),
                    (0, a.jsxs)(d.FormSection, {
                      className: s(U.formItem, U.formItemRow),
                      children: [
                        (0, a.jsx)(d.FormItem, {
                          title: eI
                            ? M.default.Messages
                                .GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED
                            : M.default.Messages
                                .GUILD_STICKER_UPLOAD_FILE_TITLE,
                          required: !0,
                          className: U.formItemRowChild,
                          children: eI
                            ? (0, a.jsx)(d.TextInput, {
                                disabled: !0,
                                value:
                                  null !==
                                    (H = null == $ ? void 0 : $.filename) &&
                                  void 0 !== H
                                    ? H
                                    : "",
                              })
                            : (0, a.jsx)(I.default, {
                                buttonText:
                                  M.default.Messages
                                    .GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                filters: w,
                                filename:
                                  null !==
                                    (K = null == $ ? void 0 : $.filename) &&
                                  void 0 !== K
                                    ? K
                                    : "",
                                placeholder:
                                  M.default.Messages
                                    .GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                onFileSelect: eh,
                              }),
                        }),
                        (0, a.jsx)(E.default, {
                          className: U.formItemRowChild,
                          guildId: k,
                          emojiId: et,
                          emojiName: ea,
                          setEmojiId: el,
                          setEmojiName: ei,
                          shouldUpdateBothEmojiFields: !0,
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.FormItem, {
                      title: M.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                      required: !0,
                      className: U.formItem,
                      children: (0, a.jsx)(d.TextInput, {
                        value: J,
                        onChange: Q,
                        placeholder:
                          M.default.Messages
                            .GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                        maxLength: 30,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: U.formItem,
                      children: [
                        (0, a.jsxs)(d.FormTitle, {
                          children: [
                            M.default.Messages
                              .GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE,
                            (0, a.jsx)(d.Tooltip, {
                              text: M.default.Messages
                                .GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                              children: e =>
                                (0, a.jsx)(A.default, {
                                  className: U.infoIcon,
                                  ...e,
                                }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(d.TextArea, {
                          value: en,
                          onChange: es,
                          placeholder:
                            M.default.Messages
                              .GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                          maxLength: 100,
                        }),
                      ],
                    }),
                    null != eu &&
                      (0, a.jsx)(d.Text, {
                        className: U.formItem,
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: eu.message,
                      }),
                  ],
                }),
                (0, a.jsxs)(d.ModalFooter, {
                  className: U.modalFooter,
                  children: [
                    (0, a.jsx)(d.Button, {
                      type: "submit",
                      disabled: !eT,
                      children: eI
                        ? M.default.Messages.GUILD_STICKERS_UPDATE
                        : M.default.Messages.UPLOAD,
                    }),
                    (0, a.jsx)(d.Button, {
                      look: d.Button.Looks.LINK,
                      color: (0, u.isThemeLight)(z)
                        ? d.Button.Colors.PRIMARY
                        : d.Button.Colors.WHITE,
                      onClick: B,
                      children: M.default.Messages.NEVERMIND,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    476765: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return o;
          },
        });
      var a = l("995008"),
        i = l.n(a),
        n = l("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(e);
        },
        r = () => (0, n.useLazyValue)(() => s()),
        o = e => {
          let { children: t } = e;
          return t(r());
        };
    },
    58608: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return d;
          },
        });
      var a = l("37983"),
        i = l("884691"),
        n = l("118810"),
        s = l("446674"),
        r = l("206230"),
        o = l("719347");
      let u = e => {
        let {
            externalRef: t,
            autoPlay: l,
            playOnHover: u,
            responsive: d,
            mediaLayoutType: c,
            ...E
          } = e,
          I = (0, s.useStateFromStores)(
            [r.default],
            () => r.default.useReducedMotion
          ),
          _ = i.useRef(null);
        function f() {
          var e;
          u &&
            (null == _ || null === (e = _.current) || void 0 === e || e.play());
        }
        function T() {
          var e;
          u &&
            (null == _ ||
              null === (e = _.current) ||
              void 0 === e ||
              e.pause());
        }
        return (
          i.useLayoutEffect(
            () => () => {
              let { current: e } = _;
              null != e &&
                (function (e) {
                  e.removeAttribute("src"),
                    Array.from(e.children).forEach(e => {
                      (0, n.isElement)(e, HTMLSourceElement) &&
                        (e.removeAttribute("src"), e.removeAttribute("type")),
                        (0, n.isElement)(e, HTMLImageElement) &&
                          e.removeAttribute("src");
                    });
                  try {
                    e.load();
                  } catch (e) {}
                })(e);
            },
            []
          ),
          i.useLayoutEffect(
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
          (0, a.jsx)("video", {
            ref: _,
            autoPlay: !I && !u && l,
            onMouseEnter: f,
            onMouseLeave: T,
            onFocus: f,
            onBlur: T,
            style:
              c === o.MediaLayoutType.MOSAIC
                ? {
                    width: "100%",
                    height: "100%",
                    maxHeight: "inherit",
                    objectFit: "cover",
                  }
                : d
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
      var d = i.forwardRef((e, t) => (0, a.jsx)(u, { ...e, externalRef: t }));
    },
  },
]);
//# sourceMappingURL=b33617bf1ec63a0a1580.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81221"],
  {
    357450: function (e, t, a) {
      "use strict";
      e.exports = a.p + "222f914ec12acf16874f.svg";
    },
    348919: function (e, t, a) {
      "use strict";
      e.exports = a.p + "ec6798869dcd1915ecd8.svg";
    },
    8731: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          cropGIF: function () {
            return n;
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
            return E;
          },
          calculateOverlaySize: function () {
            return I;
          },
          downsizeImage: function () {
            return _;
          },
        }),
        a("511434"),
        a("313619"),
        a("654714"),
        a("287168"),
        a("956660"),
        a("222007"),
        a("70102"),
        a("311790"),
        a("477657"),
        a("811875"),
        a("90301"),
        a("652153"),
        a("28797"),
        a("817884"),
        a("597349"),
        a("667536"),
        a("690341");
      var l = a("917351"),
        i = a("75015");
      function s(e, t, a, l) {
        let i = e.naturalWidth / e.width,
          s = t.width / 2,
          n = t.height / 2,
          r = (e.width / 2 - s - a.x) * i,
          o = (e.height / 2 - n - a.y) * i,
          u = t.width * i,
          d = t.height * i,
          E = Math.min(u, l.width),
          I = Math.min(d, l.height);
        return {
          x: r,
          y: o,
          scaledCropWidth: u,
          scaledCropHeight: d,
          canvasWidth: E,
          canvasHeight: I,
        };
      }
      async function n(e, t, l, n, r) {
        let {
            x: o,
            y: u,
            scaledCropWidth: d,
            scaledCropHeight: E,
          } = s(t, l, n, r),
          I = await e.arrayBuffer(),
          _ = new Worker(new URL(a.p + a.u("39703"), a.b)),
          c = new Promise((e, t) => {
            _.onmessage = a => {
              let { data: l } = a;
              if (l.type === i.MessageTypes.CROP_GIF_COMPLETE) {
                var s;
                e(
                  ((s = new Blob([l.result])),
                  new Promise(e => {
                    let t = new FileReader();
                    (t.onload = t => {
                      var a;
                      let l =
                        null === (a = t.target) || void 0 === a
                          ? void 0
                          : a.result;
                      "string" == typeof l ? e(l) : e("");
                    }),
                      t.readAsDataURL(s);
                  }))
                ),
                  _.terminate();
              } else
                l.type === i.MessageTypes.CROP_GIF_ERROR &&
                  (t(Error("Error cropping GIF")), _.terminate());
            };
          });
        return (
          _.postMessage({
            type: i.MessageTypes.CROP_GIF_START,
            gif: new Uint8Array(I),
            x: 0 | o,
            y: 0 | u,
            width: 0 | d,
            height: 0 | E,
          }),
          { result: c, cancelFn: () => _.terminate() }
        );
      }
      function r(e, t, a, l) {
        let {
            x: i,
            y: n,
            scaledCropWidth: r,
            scaledCropHeight: o,
            canvasWidth: u,
            canvasHeight: d,
          } = s(e, t, a, l),
          E = document.createElement("canvas");
        (E.width = u), (E.height = d);
        let I = E.getContext("2d");
        return (
          null != I && I.drawImage(e, i, n, r, o, 0, 0, E.width, E.height),
          E.toDataURL("image/png")
        );
      }
      function o(e, t, a) {
        return {
          x: (0, l.clamp)(e, a.left, a.right),
          y: (0, l.clamp)(t, a.bottom, a.top),
        };
      }
      function u(e, t, a, l) {
        let s = a,
          n = l;
        a > i.EDITING_CONTAINER_WIDTH &&
          ((s = i.EDITING_CONTAINER_WIDTH),
          (n = l * (i.EDITING_CONTAINER_WIDTH / a)));
        if (a / l < e) return { width: s, height: n };
        let r = t / n,
          o = s * r;
        return { width: o, height: t };
      }
      function d(e, t, a) {
        switch (e) {
          case i.UploadTypes.AVATAR:
          case i.UploadTypes.AVATAR_DECORATION:
            return { width: t, height: a };
          case i.UploadTypes.BANNER:
            return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, a);
          case i.UploadTypes.GUILD_BANNER:
            return u(
              i.GUILD_BANNER_ASPECT_RATIO,
              i.MAX_GUILD_BANNER_OVERLAY_HEIGHT,
              t,
              a
            );
          case i.UploadTypes.VIDEO_BACKGROUND:
            return u(
              i.VIDEO_BACKGROUND_ASPECT_RATIO,
              i.MAX_VIDEO_OVERLAY_HEIGHT,
              t,
              a
            );
          case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
            return u(
              i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO,
              i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT,
              t,
              a
            );
          case i.UploadTypes.HOME_HEADER:
            return u(
              i.HOME_HEADER_ASPECT_RATIO,
              i.MAX_HOME_HEADER_OVERLAY_HEIGHT,
              t,
              a
            );
        }
      }
      function E(e, t, a) {
        let l = { top: 0, bottom: 0, left: 0, right: 0 },
          i = e - a.width,
          s = t - a.height;
        return (
          0 !== i && ((l.left = -Math.abs(i / 2)), (l.right = i / 2)),
          0 !== s && ((l.bottom = -Math.abs(s / 2)), (l.top = s / 2)),
          l
        );
      }
      function I(e, t, a, l) {
        switch (e) {
          case i.UploadTypes.AVATAR:
          case i.UploadTypes.AVATAR_DECORATION:
            let s = Math.min(t, a);
            return { width: s, height: s };
          case i.UploadTypes.BANNER:
            let n = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: n, height: n * (1 / i.BANNER_ASPECT_RATIO) };
          case i.UploadTypes.GUILD_BANNER:
            let r = Math.min(t, i.EDITING_CONTAINER_WIDTH);
            return { width: r, height: Math.min(r * (9 / 16), l) };
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
      function _(e, t, a) {
        let l = e.naturalWidth / e.naturalHeight,
          i = t,
          s = a;
        e.naturalWidth > e.naturalHeight ? (i /= l) : (s *= l);
        let n = { height: i, width: s };
        return r(e, { width: e.width, height: e.height }, { x: 0, y: 0 }, n);
      }
    },
    54666: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return K;
          },
        }),
        a("222007");
      var l = a("37983"),
        i = a("884691"),
        s = a("414456"),
        n = a.n(s),
        r = a("748820"),
        o = a("446674"),
        u = a("819855"),
        d = a("77078"),
        E = a("385976"),
        I = a("208548"),
        _ = a("104945"),
        c = a("8731"),
        T = a("161778"),
        m = a("305961"),
        f = a("697218"),
        g = a("145131"),
        h = a("68238"),
        A = a("599110"),
        D = a("993105"),
        R = a("701909"),
        p = a("103603"),
        L = a("467094"),
        N = a("161585"),
        S = a("24373"),
        C = a("41170"),
        O = a("560241"),
        U = a("49111"),
        M = a("782340"),
        v = a("287065"),
        G = a("357450"),
        y = a("348919");
      let x = new Set([
          "application/json",
          "image/png",
          "image/apng",
          "image/gif",
        ]),
        P = [
          { name: "Sticker file", extensions: ["json", "png", "apng", "gif"] },
        ];
      function w(e, t) {
        A.default.track(U.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
          successful: e,
          error: null != t ? t : "",
        });
      }
      let F = e => {
          let { stickerPreview: t } = e;
          return (0, l.jsxs)("div", {
            className: v.preview,
            children: [
              (0, l.jsx)("div", {
                className: v.previewDark,
                children:
                  null != t
                    ? t
                    : (0, l.jsx)("img", {
                        src: G,
                        alt: M.default.Messages
                          .GUILD_STICKER_PREVIEW_IMG_ALT_DARK,
                      }),
              }),
              (0, l.jsx)("div", {
                className: v.previewLight,
                children:
                  null != t
                    ? t
                    : (0, l.jsx)("img", {
                        src: y,
                        alt: M.default.Messages
                          .GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT,
                      }),
              }),
            ],
          });
        },
        H = e => {
          let { sticker: t, previewData: a, onStickerError: i } = e;
          if (null != t)
            return (0, l.jsx)(C.default, { size: 160, sticker: t });
          if (null == a) return null;
          let { id: s, formatType: n, content: r } = a;
          return (0, l.jsx)(
            C.default,
            {
              assetData: r,
              fileUri: r,
              size: 160,
              sticker: {
                name: s,
                description: "",
                id: s,
                pack_id: "",
                format_type: n,
              },
              onError: i,
            },
            s
          );
        };
      async function j(e) {
        let t = await (0, p.readFileAsBase64)(e),
          a = new Image();
        (a.src = t), await a.decode();
        let l = (0, c.downsizeImage)(a, 320, 320);
        return (0, p.dataUrlToFile)(l, e.name, e.type);
      }
      function K(e) {
        var t, a, s, c, C, G, y, K;
        let { transitionState: B, onClose: k, guildId: b, sticker: V } = e,
          z = (0, o.useStateFromStores)([T.default], () => T.default.theme),
          W = (0, o.useStateFromStores)([E.default], () =>
            (null == V ? void 0 : V.tags) != null
              ? E.default.getCustomEmojiById(V.tags)
              : null
          ),
          X =
            null !==
              (a =
                null === (t = f.default.getCurrentUser()) || void 0 === t
                  ? void 0
                  : t.isStaff()) &&
            void 0 !== a &&
            a,
          Y = X ? O.STAFF_MAX_STICKER_FILE_SIZE : O.MAX_STICKER_FILE_SIZE,
          [Z, q] = i.useState(null),
          [J, Q] = i.useState(
            null !== (s = null == V ? void 0 : V.name) && void 0 !== s ? s : ""
          ),
          [$, ee] = i.useState({
            file: null,
            filename:
              null !== (c = (0, S.getFilenameForSticker)(V)) && void 0 !== c
                ? c
                : "",
          }),
          [et, ea] = i.useState(null == W ? void 0 : W.id),
          [el, ei] = i.useState(
            null !== (C = null == W ? void 0 : W.name) && void 0 !== C
              ? C
              : null == V
                ? void 0
                : V.tags
          ),
          [es, en] = i.useState(
            null !== (G = null == V ? void 0 : V.description) && void 0 !== G
              ? G
              : ""
          ),
          [er, eo] = i.useState(!1),
          [eu, ed] = i.useState(null),
          eE = (0, o.useStateFromStores)([m.default], () =>
            m.default.getGuild(b)
          ),
          eI =
            (null == eE ? void 0 : eE.hasFeature(U.GuildFeatures.PARTNERED)) ||
            (null == eE ? void 0 : eE.hasFeature(U.GuildFeatures.VERIFIED)),
          e_ = null != V,
          ec = e_ || (null == $ ? void 0 : $.file) != null,
          eT = 0 === es.length || (es.length >= 2 && es.length <= 100),
          em =
            !er &&
            (null == eu ? void 0 : eu.isBlocking) !== !0 &&
            J.length >= 2 &&
            (null != et ||
              null != el ||
              ((null == V ? void 0 : V.tags) != null &&
                (null == V ? void 0 : V.tags) !== "")) &&
            ec &&
            eT,
          ef = async e => {
            var t;
            if (null == e) return;
            let a =
              null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
            if (!x.has(a)) {
              ed({
                message: M.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                isBlocking: !0,
              });
              return;
            }
            let l = e;
            if (
              "image/png" === a &&
              e.size > Y &&
              !(await (0, p.isPNGAnimated)(e))
            ) {
              l = await j(e);
              let t = l.size > Y;
              A.default.track(U.AnalyticEvents.STICKER_FILE_RESIZED, {
                original_file_size_bytes: e.size,
                resized_file_size_bytes: l.size,
                resized_file_too_big: t,
              });
            }
            if (l.size > Y) {
              ed({
                message: M.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                  maxSize: (0, D.formatKbSize)(Y, { useKibibytes: !0 }),
                }),
                isBlocking: null == $.file,
              }),
                A.default.track(
                  U.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED,
                  { size: l.size, filetype: a }
                );
              return;
            }
            let i = (0, S.getStickerFormatTypeFromFileType)(l.type),
              s = i === N.StickerFormat.LOTTIE;
            if (s) {
              if (!eI) {
                ed({
                  message:
                    M.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format(
                      {
                        articleURL: R.default.getArticleURL(
                          U.HelpdeskArticles.STICKERS_UPLOAD
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
                e.readAsText(l);
            } else {
              let e = await (0, p.readFileAsBase64)(l);
              q({ id: (0, r.v4)(), formatType: i, content: e }), ed(null);
            }
            ee({ file: l, filename: l.name });
          },
          eg = async e => {
            var t, a, l, i, s, n;
            e.preventDefault();
            let r =
              null !==
                (a =
                  null !== (t = null != et ? et : el) && void 0 !== t
                    ? t
                    : null == V
                      ? void 0
                      : V.tags) && void 0 !== a
                ? a
                : "";
            try {
              if ((eo(!0), e_))
                await (0, L.updateGuildSticker)(
                  b,
                  null !== (l = null == V ? void 0 : V.id) && void 0 !== l
                    ? l
                    : "",
                  { name: J, tags: r, description: es }
                );
              else {
                let e = new FormData();
                e.append("name", J),
                  e.append("tags", r),
                  e.append("description", es),
                  (null == $ ? void 0 : $.file) != null &&
                    e.append("file", $.file),
                  (n =
                    null !==
                      (s =
                        null === (i = $.file) || void 0 === i
                          ? void 0
                          : i.type) && void 0 !== s
                      ? s
                      : ""),
                  A.default.track(U.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                    filetype: n,
                  }),
                  await (0, L.createGuildSticker)(b, e),
                  w(!0);
              }
              k();
            } catch (e) {
              ed({ message: e.body.message, isBlocking: !1 }),
                w(!1, e.body.message);
            } finally {
              eo(!1);
            }
          },
          eh = i.useCallback(() => {
            ed({
              message: M.default.Messages.GUILD_STICKER_INVALID_STICKER,
              isBlocking: !0,
            });
          }, []),
          eA = H({ sticker: V, previewData: Z, onStickerError: eh }),
          eD = eI
            ? M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION
            : M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
        return (0, l.jsxs)(d.ModalRoot, {
          transitionState: B,
          "aria-labelledby": "STICKER_UPLOAD_MODAL",
          className: v.modal,
          children: [
            (0, l.jsx)(d.ModalCloseButton, {
              onClick: k,
              className: v.modalClose,
            }),
            (0, l.jsxs)("form", {
              onSubmit: eg,
              className: v.form,
              children: [
                (0, l.jsxs)(d.ModalContent, {
                  className: v.modalContent,
                  children: [
                    (0, l.jsxs)(d.ModalHeader, {
                      direction: g.default.Direction.VERTICAL,
                      separator: !1,
                      className: v.modalHeader,
                      children: [
                        (0, l.jsx)(d.Heading, {
                          variant: "heading-xl/semibold",
                          className: v.modalHeaderTitle,
                          children:
                            M.default.Messages.GUILD_STICKER_UPLOAD_TITLE,
                        }),
                        (0, l.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: eD.format({
                            fileSize: (0, D.formatKbSize)(
                              O.MAX_STICKER_FILE_SIZE,
                              { useKibibytes: !0 }
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)(d.FormSection, {
                      title:
                        M.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                      className: v.formItem,
                      children: (0, l.jsx)(F, { stickerPreview: eA }),
                    }),
                    (0, l.jsxs)(d.FormSection, {
                      className: n(v.formItem, v.formItemRow),
                      children: [
                        (0, l.jsx)(d.FormItem, {
                          title: e_
                            ? M.default.Messages
                                .GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED
                            : M.default.Messages
                                .GUILD_STICKER_UPLOAD_FILE_TITLE,
                          required: !0,
                          className: v.formItemRowChild,
                          children: e_
                            ? (0, l.jsx)(d.TextInput, {
                                disabled: !0,
                                value:
                                  null !==
                                    (y = null == $ ? void 0 : $.filename) &&
                                  void 0 !== y
                                    ? y
                                    : "",
                              })
                            : (0, l.jsx)(_.default, {
                                buttonText:
                                  M.default.Messages
                                    .GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                filters: P,
                                filename:
                                  null !==
                                    (K = null == $ ? void 0 : $.filename) &&
                                  void 0 !== K
                                    ? K
                                    : "",
                                placeholder:
                                  M.default.Messages
                                    .GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                onFileSelect: ef,
                              }),
                        }),
                        (0, l.jsx)(I.default, {
                          className: v.formItemRowChild,
                          guildId: b,
                          emojiId: et,
                          emojiName: el,
                          setEmojiId: ea,
                          setEmojiName: ei,
                          shouldUpdateBothEmojiFields: !0,
                        }),
                      ],
                    }),
                    (0, l.jsx)(d.FormItem, {
                      title: M.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                      required: !0,
                      className: v.formItem,
                      children: (0, l.jsx)(d.TextInput, {
                        value: J,
                        onChange: Q,
                        placeholder:
                          M.default.Messages
                            .GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                        maxLength: 30,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: v.formItem,
                      children: [
                        (0, l.jsxs)(d.FormTitle, {
                          children: [
                            M.default.Messages
                              .GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE,
                            (0, l.jsx)(d.Tooltip, {
                              text: M.default.Messages
                                .GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                              children: e =>
                                (0, l.jsx)(h.default, {
                                  className: v.infoIcon,
                                  ...e,
                                }),
                            }),
                          ],
                        }),
                        (0, l.jsx)(d.TextArea, {
                          value: es,
                          onChange: en,
                          placeholder:
                            M.default.Messages
                              .GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                          maxLength: 100,
                        }),
                      ],
                    }),
                    null != eu &&
                      (0, l.jsx)(d.Text, {
                        className: v.formItem,
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: eu.message,
                      }),
                  ],
                }),
                (0, l.jsxs)(d.ModalFooter, {
                  className: v.modalFooter,
                  children: [
                    (0, l.jsx)(d.Button, {
                      type: "submit",
                      disabled: !em,
                      children: e_
                        ? M.default.Messages.GUILD_STICKERS_UPDATE
                        : M.default.Messages.UPLOAD,
                    }),
                    (0, l.jsx)(d.Button, {
                      look: d.Button.Looks.LINK,
                      color: (0, u.isThemeLight)(z)
                        ? d.Button.Colors.PRIMARY
                        : d.Button.Colors.WHITE,
                      onClick: k,
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
    476765: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          uid: function () {
            return n;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return o;
          },
        });
      var l = a("995008"),
        i = a.n(l),
        s = a("775560");
      let n = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(e);
        },
        r = () => (0, s.useLazyValue)(() => n()),
        o = e => {
          let { children: t } = e;
          return t(r());
        };
    },
  },
]);
//# sourceMappingURL=5734e89149c716a534d8.js.map

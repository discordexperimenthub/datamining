(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14566"],
  {
    467475: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var n = a("65597"),
        l = a("42203"),
        i = a("724210");
      function s(e) {
        let t = (0, n.useStateFromStores)([l.default], () => {
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
    165405: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          logVoiceMessagePlaybackStarted: function () {
            return r;
          },
          logVoiceMessagePlaybackEnded: function () {
            return o;
          },
          logVoiceMessagePlaybackFailed: function () {
            return d;
          },
        });
      var n,
        l,
        i = a("599110"),
        s = a("49111");
      function r(e, t, a, n) {
        i.default.track(s.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, {
          message_id: e,
          total_duration_secs: t,
          start_duration_secs: Math.min(null != t ? t : a, a),
          sender_user_id: n,
        });
      }
      function o(e, t, a, n, l) {
        i.default.track(s.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, {
          message_id: e,
          total_duration_secs: t,
          end_duration_secs: Math.min(null != t ? t : a, a),
          sender_user_id: n,
          duration_listening_secs: l,
        });
      }
      function d(e, t) {
        i.default.track(s.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, {
          message_id: e,
          error_message: t,
        });
      }
      ((n = l || (l = {})).SENT = "sent"),
        (n.CANCELLED_DURATION = "cancelled_duration"),
        (n.CANCELLED_USER_REQUESTED = "cancelled_user_requested"),
        (n.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict"),
        (n.CANCELLED_ON_BACKGROUND = "cancelled_on_background");
    },
    994402: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          isMediaAttachment: function () {
            return j;
          },
          getAttachmentKind: function () {
            return D;
          },
          default: function () {
            return w;
          },
        }),
        a("222007"),
        a("702976");
      var n = a("37983"),
        l = a("884691"),
        i = a("414456"),
        s = a.n(i),
        r = a("77078"),
        o = a("447435"),
        d = a("963119"),
        c = a("467475"),
        u = a("651693"),
        h = a("605160"),
        m = a("903962"),
        A = a("165405"),
        _ = a("410889"),
        g = a("725962"),
        I = a("505684"),
        M = a("328620"),
        p = a("522049"),
        E = a("945330"),
        f = a("228220"),
        C = a("568734"),
        x = a("103603"),
        v = a("253981"),
        y = a("719347"),
        T = a("49111"),
        S = a("782340"),
        N = a("494112");
      let O = /\.(mp3|m4a|ogg|wav|flac)$/i,
        j = e => "IMAGE" === e || "VIDEO" === e;
      function D(e, t) {
        let { filename: a, width: n, height: l } = e;
        if (t && null != n && n > 0 && null != l && l > 0)
          return (0, u.isImageFile)(a)
            ? "IMAGE"
            : (0, u.isVideoFile)(a) && null != e.proxy_url
              ? "VIDEO"
              : "INVALID";
        if (null != t && O.test(a) && null != e.url) return "AUDIO";
        if (null != e.url && (0, m.isPlaintextPreviewableFile)(a))
          return "PLAINTEXT_PREVIEW";
        return "OTHER";
      }
      let L = e => {
          let t,
            a,
            {
              downloadURL: l,
              downloadMimeType: i,
              onRemoveAttachment: o,
              isAttachmentMediaType: d,
            } = e;
          return (null != l &&
            null != i &&
            (t = (0, n.jsx)(r.Tooltip, {
              text: S.default.Messages.DOWNLOAD,
              children: e =>
                (0, n.jsx)(g.default, {
                  ...e,
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className: N.hoverButton,
                  iconClassName: N.downloadHoverButtonIcon,
                  focusProps: { offset: 2 },
                  href: l,
                  mimeType: i,
                }),
            })),
          null != o &&
            (a = (0, n.jsx)(r.Tooltip, {
              text: S.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
              children: e =>
                (0, n.jsx)(r.Clickable, {
                  ...e,
                  className: s(N.hoverButton, N.removeAttachmentHoverButton),
                  focusProps: { offset: 2 },
                  onClick: o,
                  "aria-label": S.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                  children: (0, n.jsx)(f.default, { width: 20, height: 20 }),
                }),
            })),
          null == a && null == t)
            ? null
            : (0, n.jsxs)("div", {
                className: s(N.hoverButtonGroup, {
                  [N.nonMediaAttachment]: !d,
                }),
                children: [t, a],
              });
        },
        F = e => {
          let {
              message: t,
              attachment: a,
              inlineMedia: i,
              autoPlayGif: o,
              canRemoveAttachment: d,
              onRemoveAttachment: u,
              onClick: h,
              onContextMenu: m,
              onPlay: g,
              renderImageComponent: I,
              renderVideoComponent: f,
              renderAudioComponent: O,
              renderPlaintextFilePreview: j,
              className: F,
              imgContainerClassName: w,
              imgClassName: b,
              focusable: P,
              hiddenSpoilers: G,
              mediaLayoutType: V,
              maxWidth: k,
              maxHeight: H,
              hasFooter: B,
              useFullWidth: R,
              isAttachmentMediaType: K,
            } = e,
            { width: W, height: X, description: U, spoiler: z } = a,
            Y = D(a, i),
            [q, J] = l.useState(!1),
            Q = (0, c.default)(t.getChannelId()),
            $ = l.useMemo(
              () =>
                null != a.content_type && -1 !== a.content_type.indexOf("/")
                  ? a.content_type.split("/")
                  : ["unknown", "unknown"],
              [a.content_type]
            ),
            Z = l.useCallback(() => {
              u(a);
            }, [a, u]),
            ee = l.useCallback(
              (e, n, l) => {
                if (t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE)) {
                  var i;
                  (0, A.logVoiceMessagePlaybackStarted)(
                    t.id,
                    null !== (i = a.duration_secs) && void 0 !== i ? i : null,
                    n,
                    t.author.id
                  );
                } else null == g || g(e, n, l);
              },
              [t, a.duration_secs, g]
            ),
            et = l.useCallback(
              (e, n) => {
                var l;
                t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) &&
                  (0, A.logVoiceMessagePlaybackEnded)(
                    t.id,
                    null !== (l = a.duration_secs) && void 0 !== l ? l : null,
                    e,
                    t.author.id,
                    n
                  );
              },
              [t, a.duration_secs]
            ),
            ea = l.useCallback(
              e => {
                var a;
                t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) &&
                  (0, A.logVoiceMessagePlaybackFailed)(
                    t.id,
                    null !== (a = null == e ? void 0 : e.message) &&
                      void 0 !== a
                      ? a
                      : null
                  );
              },
              [t]
            ),
            en = l.useCallback(() => {
              if (V === y.MediaLayoutType.MOSAIC) {
                let e =
                  (!Q && "VIDEO" === Y) ||
                  (!Q && "AUDIO" === Y) ||
                  "OTHER" === Y;
                if (K) {
                  if (null == W || null == X) return null;
                  let e = (0, x.getRatio)({
                    width: W,
                    height: X,
                    maxWidth: y.MEDIA_MOSAIC_MAX_WIDTH,
                    maxHeight: y.MEDIA_MOSAIC_MAX_HEIGHT,
                  });
                  if (
                    !R &&
                    (e * W < y.MINIMUM_MEDIA_MOSAIC_DIM ||
                      e * X < y.MINIMUM_MEDIA_MOSAIC_DIM)
                  )
                    return null;
                }
                return (
                  !q &&
                  (0, n.jsx)(L, {
                    downloadURL: e ? a.url : void 0,
                    downloadMimeType: e ? $ : void 0,
                    onRemoveAttachment: d ? Z : void 0,
                    isAttachmentMediaType: K,
                  })
                );
              }
              return (
                d &&
                (0, n.jsx)(r.Clickable, {
                  className: z
                    ? N.spoilerRemoveAttachmentButton
                    : N.removeAttachmentButton,
                  focusProps: { offset: { bottom: 4 } },
                  onClick: () => u(a),
                  "aria-label": S.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
                  children: (0, n.jsx)(E.default, { width: 16, height: 16 }),
                })
              );
            }, [V, d, z, Y, K, q, a, $, Z, W, X, R, u, Q]),
            el = l.useCallback(() => {
              var e;
              return (0, C.hasFlag)(
                null !== (e = a.flags) && void 0 !== e ? e : 0,
                T.MessageAttachmentFlags.IS_CLIP
              )
                ? (0, n.jsxs)(r.TooltipContainer, {
                    text: S.default.Messages.CLIPS_BETA_TAG_HOVER,
                    className: N.clipPill,
                    children: [
                      (0, n.jsx)(p.default, {}),
                      (0, n.jsx)(r.Text, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: S.default.Messages.CLIP_TAG,
                      }),
                    ],
                  })
                : null;
            }, [a]);
          switch (Y) {
            case "IMAGE":
              return (0, n.jsx)(M.GIFAccessoryContext.Consumer, {
                children: e =>
                  I({
                    alt: U,
                    src:
                      null != a.proxy_url && "" !== a.proxy_url
                        ? a.proxy_url
                        : a.url,
                    original: a.url,
                    placeholder: a.placeholder,
                    placeholderVersion: a.placeholder_version,
                    width: W,
                    height: X,
                    autoPlay: o && !G,
                    onClick: h,
                    onContextMenu: m,
                    shouldHideMediaOptions: Q,
                    renderAccessory: e,
                    renderAdjacentContent: en,
                    containerClassName: F,
                    className: w,
                    imageClassName: b,
                    shouldLink: P,
                    hiddenSpoilers: G,
                    responsive: !0,
                    mediaLayoutType: V,
                    maxWidth: k,
                    maxHeight: H,
                    useFullWidth: R,
                  }),
              });
            case "VIDEO":
              let ei = v.default.toURLSafe(a.proxy_url);
              if (null == ei) return null;
              return (
                ei.searchParams.append("format", "jpeg"),
                f({
                  poster: ei.toString(),
                  fileSize: a.size,
                  fileName: a.filename,
                  src: a.url,
                  placeholder: a.placeholder,
                  placeholderVersion: a.placeholder_version,
                  width: W,
                  height: X,
                  onClick: h,
                  onContextMenu: m,
                  renderOverlayContent: el,
                  renderAdjacentContent: en,
                  naturalWidth: W,
                  naturalHeight: X,
                  className: s(F, { [N.hasFooter]: B }),
                  playable: P,
                  responsive: !0,
                  mediaLayoutType: V,
                  maxWidth: k,
                  maxHeight: H,
                  useFullWidth: R,
                  mimeType: $,
                  onPlay: g,
                  downloadable: !Q,
                  mediaPlayerClassName: B ? N.hasFooter : void 0,
                })
              );
            case "AUDIO":
              return O({
                fileSize: a.size,
                fileName: a.filename,
                src: a.url,
                className: F,
                playable: P,
                mimeType: $,
                durationSecs: a.duration_secs,
                waveform: a.waveform,
                renderAdjacentContent: en,
                onVolumeShow: () => J(!0),
                onVolumeHide: () => J(!1),
                onPlay: ee,
                onPause: et,
                onError: ea,
              });
            case "PLAINTEXT_PREVIEW":
              return j({
                attachment: a,
                className: F,
                onClick: h,
                onContextMenu: m,
                renderAdjacentContent: en,
              });
            case "OTHER":
              return (0, n.jsx)(_.default, {
                url: a.url,
                filename: a.filename,
                size: a.size,
                onClick: h,
                onContextMenu: m,
                className: F,
                renderAdjacentContent: en,
              });
            case "INVALID":
              return null;
          }
        };
      var w = e => {
        var t;
        let {
            className: a,
            attachment: i,
            message: r,
            inlineMedia: c,
            useFullWidth: u,
            mediaLayoutType: m,
            canRemoveAttachment: A,
            isSingleMosaicItem: _,
            footer: g,
            ...M
          } = e,
          { width: p, height: E } = i,
          f = (0, d.useShouldRedactExplicitContent)(r.channel_id, r.author.id),
          C = (0, h.getObscureReason)(i, f),
          [v, T] = l.useState(null != C),
          S = m === y.MediaLayoutType.MOSAIC,
          O = !S && ((null != p && p < 200) || (null != E && E < 50)),
          L = D(i, c);
        let w = "IMAGE" === (t = L) || "VIDEO" === t,
          b = j(D(i, c)),
          P = _ && null != C && (0, o.isExplicitMediaBelowConstraints)(p, E),
          G = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, n.jsx)(F, {
              ...M,
              attachment: i,
              message: r,
              inlineMedia: c,
              hiddenSpoilers: e,
              canRemoveAttachment: A,
              className: s(a, N.attachmentContentItem, {
                [N.obscured]: v && !O,
                [N.hiddenSpoiler]: v && C === h.ObscureReason.SPOILER,
                [N.hiddenExplicit]:
                  v &&
                  null != C &&
                  [
                    h.ObscureReason.EXPLICIT_CONTENT,
                    h.ObscureReason.POTENTIAL_EXPLICIT_CONTENT,
                  ].includes(C),
                [N.hiddenAttachment]: v && e,
                [N.inline]: v && O,
              }),
              focusable: !e,
              mediaLayoutType: m,
              hasFooter: null != g,
              useFullWidth: !!P || u,
              isAttachmentMediaType: b,
            });
          };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className: s(N.messageAttachment, {
              [N.messageAttachmentNoJustify]: w,
              [N.messageAttachmentFullWidth]: u,
              [N.messageAttachmentMediaMosaic]: S,
              [N.hideOverflow]: S && b,
              [N.messageAttachmentWithFooter]: null != g,
            }),
            children: [
              null != C
                ? (0, n.jsx)(I.default, {
                    type: I.default.Types.ATTACHMENT,
                    inline: O,
                    reason: C,
                    isSingleMosaicItem: _,
                    obscured: v,
                    containerStyles: (function (e, t, a) {
                      if (!t) return;
                      let n = e.width;
                      if (void 0 !== e.width && void 0 !== e.height) {
                        let { width: t } = (0, x.fit)({
                          width: e.width,
                          height: e.height,
                          maxWidth: 400,
                          maxHeight: 300,
                        });
                        n = t;
                      }
                      return {
                        ...(a !== y.MediaLayoutType.MOSAIC && {
                          maxWidth: null != n ? n : "400px",
                        }),
                        width: "100%",
                        height: "100%",
                        justifySelf: "auto",
                      };
                    })(i, w, m),
                    obscurityControlClassName: s({
                      [N.obscureVideo]: "VIDEO" === L && _ && !v,
                    }),
                    onToggleObscurity: () => T(e => !e),
                    children: e => G(e),
                  })
                : G(),
              g,
            ],
          }),
        });
      };
    },
    377502: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return w;
          },
        }),
        a("222007"),
        a("702976");
      var n = a("37983"),
        l = a("884691"),
        i = a("414456"),
        s = a.n(i),
        r = a("627445"),
        o = a.n(r),
        d = a("917351"),
        c = a.n(d),
        u = a("446674"),
        h = a("411723"),
        m = a("42203"),
        A = a("328620"),
        _ = a("568734"),
        g = a("994402"),
        I = a("719347"),
        M = a("49111"),
        p = a("997328");
      let E = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
        f = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
        C = Math.round((I.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
        x = Math.round((2 * (I.MEDIA_MOSAIC_MAX_WIDTH - 4)) / 3),
        v = x / 2,
        y = e => {
          let { mediaAttachments: t, getAttachmentKind: a, footer: l } = e;
          null != l &&
            o(1 === t.length, "footer only gets applied to single attachments");
          let i = t.length;
          if (1 === i)
            return (0, n.jsx)(T, {
              attachmentsForLayout: t,
              getAttachmentKind: a,
              isSingleImage: !0,
              footer: l,
            });
          if (2 === i)
            return (0, n.jsx)(S, {
              attachmentsForLayout: t,
              getAttachmentKind: a,
            });
          if (3 === i)
            return (0, n.jsx)(N, {
              attachmentsForLayout: t,
              getAttachmentKind: a,
            });
          if (4 === i)
            return (0, n.jsx)(O, {
              attachmentsForLayout: t,
              getAttachmentKind: a,
            });
          let s = i % 3;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              1 === s &&
                (0, n.jsx)(T, {
                  attachmentsForLayout: t.slice(0, s),
                  getAttachmentKind: a,
                }),
              2 === s &&
                (0, n.jsx)(S, {
                  attachmentsForLayout: t.slice(0, s),
                  getAttachmentKind: a,
                }),
              0 === s
                ? (0, n.jsx)(j, {
                    attachmentsForLayout: t,
                    getAttachmentKind: a,
                  })
                : (0, n.jsx)(j, {
                    attachmentsForLayout: t.slice(s),
                    getAttachmentKind: a,
                  }),
            ],
          });
        },
        T = e => {
          let {
              attachmentsForLayout: t,
              getAttachmentKind: a,
              isSingleImage: l,
              footer: i,
            } = e,
            r = t[0];
          return (0, n.jsx)("div", {
            className: s(p.oneByOneGrid, {
              [p.oneByOneGridSingle]: l,
              [p.oneByOneGridMosaic]: !l,
              [p.hasFooter]: null != i,
            }),
            children: (0, n.jsx)(F, {
              props: r,
              attachmentKind: a(r.attachment.id),
              useFullWidth: !l,
              isSingleItem: !0,
              footer: i,
            }),
          });
        },
        S = e => {
          let { attachmentsForLayout: t, getAttachmentKind: a } = e;
          return (0, n.jsx)("div", {
            className: p.oneByTwoGrid,
            children: t.map(e =>
              (0, n.jsx)(
                "div",
                {
                  className: p.oneByTwoGridItem,
                  children: (0, n.jsx)(F, {
                    props: e,
                    attachmentKind: a(e.attachment.id),
                    maxWidth: f,
                    maxHeight: f,
                  }),
                },
                e.attachment.id
              )
            ),
          });
        },
        N = e => {
          let { attachmentsForLayout: t, getAttachmentKind: a } = e;
          return (0, n.jsxs)("div", {
            className: s(p.oneByTwoGrid, p.oneByTwoLayoutThreeGrid),
            children: [
              (0, n.jsx)("div", {
                className: p.oneByTwoSoloItem,
                children: (0, n.jsx)(F, {
                  props: t[0],
                  attachmentKind: a(t[0].attachment.id),
                  maxWidth: x,
                }),
              }),
              (0, n.jsx)("div", {
                className: p.oneByTwoDuoItem,
                children: (0, n.jsx)("div", {
                  className: p.twoByOneGrid,
                  children: t
                    .splice(1)
                    .map(e =>
                      (0, n.jsx)(
                        "div",
                        {
                          className: p.twoByOneGridItem,
                          children: (0, n.jsx)(F, {
                            props: e,
                            attachmentKind: a(e.attachment.id),
                            maxWidth: v,
                            maxHeight: C,
                          }),
                        },
                        e.attachment.id
                      )
                    ),
                }),
              }),
            ],
          });
        },
        O = e => {
          let { attachmentsForLayout: t, getAttachmentKind: a } = e;
          return (0, n.jsx)("div", {
            className: p.twoByTwoGrid,
            children: t.map(e =>
              (0, n.jsx)(
                F,
                {
                  props: e,
                  attachmentKind: a(e.attachment.id),
                  maxWidth: f,
                  maxHeight: C,
                },
                e.attachment.id
              )
            ),
          });
        },
        j = e => {
          let { attachmentsForLayout: t, getAttachmentKind: a } = e;
          return (0, n.jsx)("div", {
            className: p.threeByThreeGrid,
            children: t.map(e =>
              (0, n.jsx)(
                F,
                {
                  props: e,
                  attachmentKind: a(e.attachment.id),
                  maxWidth: E,
                  maxHeight: E,
                },
                e.attachment.id
              )
            ),
          });
        },
        D = e => ({
          className: s(e, p.attachmentContentContainer),
          imgContainerClassName: p.lazyImgContainer,
          imgClassName: p.lazyImg,
        }),
        L = e => ({ className: s(e, p.lazyImg) }),
        F = e => {
          let {
              props: t,
              attachmentKind: a,
              maxWidth: l = I.MEDIA_MOSAIC_MAX_WIDTH,
              maxHeight: i = I.MEDIA_MOSAIC_MAX_HEIGHT,
              useFullWidth: s = !0,
              isSingleItem: r = !1,
              footer: o,
            } = e,
            d = {
              ...t,
              ...("IMAGE" === a && D(t.className)),
              ...("VIDEO" === a && L(t.className)),
              mediaLayoutType: I.MediaLayoutType.MOSAIC,
              maxWidth: l,
              maxHeight: i,
              useFullWidth: s,
              isSingleMosaicItem: r,
            };
          return (0, n.jsx)(A.GIFAccessoryContext.Provider, {
            value: t.gifFavoriteButton,
            children: (0, n.jsx)(g.default, { ...d, footer: o }),
          });
        };
      var w = e => {
        let { attachments: t } = e,
          a = t[0].message.channel_id,
          i = (0, u.useStateFromStores)([m.default], () => {
            var e;
            return null === (e = m.default.getBasicChannel(a)) || void 0 === e
              ? void 0
              : e.guild_id;
          }),
          s = l.useMemo(
            () =>
              new Map(
                t.map(e => [
                  e.attachment.id,
                  (0, g.getAttachmentKind)(e.attachment, e.inlineMedia),
                ])
              ),
            [t]
          ),
          r = l.useCallback(
            e => {
              var t;
              return null !== (t = s.get(e)) && void 0 !== t ? t : "INVALID";
            },
            [s]
          ),
          [o, d] = l.useMemo(
            () =>
              c.partition(t, e => {
                var t;
                return (0, _.hasFlag)(
                  null !== (t = e.attachment.flags) && void 0 !== t ? t : 0,
                  M.MessageAttachmentFlags.IS_CLIP
                );
              }),
            [t]
          ),
          [A, I] = l.useMemo(
            () =>
              c.partition(d, e => (0, g.isMediaAttachment)(r(e.attachment.id))),
            [d, r]
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            A.length > 0 &&
              (0, n.jsx)("div", {
                className: p.mediaAttachmentsContainer,
                children: (0, n.jsx)(y, {
                  mediaAttachments: A,
                  getAttachmentKind: r,
                }),
              }),
            I.length > 0 &&
              (0, n.jsx)("div", {
                className: p.nonMediaAttachmentsContainer,
                children: I.map(e =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: p.nonMediaAttachmentItem,
                      children: (0, n.jsx)(F, {
                        props: e,
                        attachmentKind: r(e.attachment.id),
                      }),
                    },
                    e.attachment.id
                  )
                ),
              }),
            o.length > 0 &&
              o.map(e => {
                var t;
                let {
                  id: a,
                  clip_created_at: l,
                  clip_participants: s,
                  title: o,
                  application: d,
                } = e.attachment;
                return (0, n.jsx)(
                  "div",
                  {
                    className: p.mediaAttachmentsContainer,
                    children: (0, n.jsx)(y, {
                      mediaAttachments: [e],
                      getAttachmentKind: r,
                      footer: (0, n.jsx)(h.default, {
                        createdAt: null != l ? Date.parse(l) : void 0,
                        participantIds:
                          null !==
                            (t =
                              null == s
                                ? void 0
                                : s.map(e => {
                                    let { id: t } = e;
                                    return t;
                                  })) && void 0 !== t
                            ? t
                            : [],
                        applicationId: null == d ? void 0 : d.id,
                        title: o,
                        guildId: i,
                      }),
                    }),
                  },
                  a
                );
              }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=99f33a43e0d20f2c0003.js.map

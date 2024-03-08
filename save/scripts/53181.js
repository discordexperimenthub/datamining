(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53181"],
  {
    327467: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          startMediaViewerSession: function () {
            return o;
          },
          endMediaViewerSession: function () {
            return d;
          },
          incrementSelectedItemChanges: function () {
            return u;
          },
        });
      var n = l("308503"),
        r = l("599110"),
        i = l("49111");
      let s = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        a = (0, n.default)(() => s);
      function o(e, t, l, n) {
        a.setState({
          ...s,
          guildId: e,
          channelId: t,
          channelType: l,
          numMediaItems: n,
        });
      }
      function d() {
        let e = a.getState();
        r.default.track(i.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: e.guildId,
          channel_id: e.channelId,
          channel_type: e.channelType,
          number_viewer_swipes: e.viewerSwipes,
          number_thumbnail_swipes: e.thumbnailSwipes,
          number_selected_item_changes: e.selectedItemChanges,
          number_media_items: e.numMediaItems,
        }),
          a.setState({ ...s });
      }
      function u() {
        a.setState(e => ({ selectedItemChanges: e.selectedItemChanges + 1 }));
      }
    },
    372694: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return c;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("414456"),
        i = l.n(r),
        s = l("746379"),
        a = l.n(s),
        o = l("649809");
      let d = RegExp(
        "^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)"
      );
      function u(e) {
        let t = null,
          l = null,
          n = null;
        try {
          (t = (n = a.parse(e, !0)).host), (l = n.pathname);
        } catch (e) {
          return null;
        }
        return null != n && d.test(null != t ? t : "") && null != l ? n : null;
      }
      function c(e) {
        let {
          className: t,
          embed: { url: l, thumbnail: r },
        } = e;
        if (null == l || null == r) return null;
        let s = u(l);
        if (null == s) return null;
        let a = s.query.iframe_url;
        if (null == a || Array.isArray(a) || null == u(a)) return null;
        let { width: d, height: c } = r;
        return (0, n.jsx)("iframe", {
          className: i(o.embedAmazonMusic, t),
          src: a,
          style: { width: Math.min(d, 500), height: Math.min(c, 400) },
          frameBorder: 0,
          sandbox:
            "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        });
      }
    },
    560176: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          EmbedVideo: function () {
            return _;
          },
          default: function () {
            return r;
          },
        }),
        l("222007"),
        l("424973");
      var n,
        r,
        i = l("37983"),
        s = l("884691"),
        a = l("414456"),
        o = l.n(a),
        d = l("77078"),
        u = l("605160"),
        c = l("659500"),
        m = l("888400"),
        h = l("240873"),
        p = l("103603"),
        g = l("372694"),
        f = l("633667"),
        b = l("58549"),
        x = l("952368"),
        y = l("505684"),
        v = l("488222"),
        E = l("468482"),
        I = l("328620"),
        C = l("62843"),
        M = l("945330"),
        w = l("688622"),
        T = l("323273"),
        S = l("49111"),
        j = l("782340"),
        N = l("919163"),
        A = l("649809");
      function _(e) {
        let {
            className: t,
            iframeWrapperClassName: l,
            maxWidth: n,
            maxHeight: r,
            thumbnail: a,
            video: d,
            provider: u,
            allowFullScreen: m = !0,
            responsive: h = !1,
            renderImageComponent: g,
            renderVideoComponent: b,
            renderLinkComponent: x,
            playable: y = !0,
            autoPlay: v = !1,
            autoMute: I,
            volume: C,
            onPlay: M,
            onEnded: T,
            onVolumeChange: j,
            onMute: N,
            href: _,
            messageId: O,
            channelId: R,
            placeholder: V,
            placeholderVersion: k,
          } = e,
          [L, D] = s.useState(v),
          P = null != d && null == d.proxyURL,
          F = s.useCallback(() => D(!1), [D]),
          H = e => {
            e.preventDefault(),
              e.stopPropagation(),
              null == M || M(!1),
              D(!0),
              P &&
                (c.ComponentDispatch.dispatch(
                  S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED
                ),
                c.ComponentDispatch.subscribeOnce(
                  S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED,
                  F
                ));
          };
        s.useEffect(
          () => () => {
            P &&
              c.ComponentDispatch.unsubscribe(
                S.ComponentActions.VIDEO_EMBED_PLAYBACK_STARTED,
                F
              );
          },
          [P, F]
        );
        let { width: W, height: B } = a;
        null != d && ((W = d.width), (B = d.height));
        let U = (0, p.fit)({ width: W, height: B, maxWidth: n, maxHeight: r });
        (W = Math.max(U.width, 150)), (B = Math.max(U.height, 144));
        let G = (0, w.getBestEffortSrcUrl)(a);
        if (null != d && null != d.proxyURL)
          return (0, i.jsx)("div", {
            className: o(A.embedVideo, t),
            children: b({
              poster: G,
              src: d.proxyURL,
              placeholder: V,
              placeholderVersion: k,
              width: W,
              height: B,
              responsive: h,
              autoPlay: v,
              onEnded: T,
              naturalWidth: d.width,
              naturalHeight: d.height,
              onVolumeChange: j,
              playable: y,
              autoMute: I,
              volume: C,
              onPlay: M,
              onMute: N,
            }),
          });
        if (L && null != d) {
          let e;
          let s = !0 === I || ("function" == typeof I && I()),
            a = { width: W, height: B },
            c = { width: W, height: B };
          if (h) {
            let t = 0 !== W ? B / W : 1;
            (a = { maxWidth: n, maxHeight: r, width: void 0, height: void 0 }),
              (c = { paddingBottom: "".concat(100 * t, "%"), maxWidth: W }),
              (e = {
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: W,
                maxHeight: B,
              });
          }
          return (0, i.jsx)("div", {
            className: t,
            style: a,
            children: (0, i.jsx)("div", {
              className: o(A.embedVideo, l),
              style: c,
              children: (0, i.jsx)(f.default, {
                provider: u,
                src: d.url,
                style: e,
                width: W,
                height: B,
                allowFullScreen: m,
                autoMute: s,
              }),
            }),
          });
        }
        return (0, i.jsxs)("div", {
          className: o(A.embedVideo, t),
          style: h ? { maxWidth: W } : { width: W, height: B },
          children: [
            g({
              src: G,
              width: W,
              height: B,
              maxWidth: W,
              maxHeight: B,
              responsive: h,
              containerClassName: A.embedVideoImageComponent,
              imageClassName: A.embedVideoImageComponentInner,
              placeholder: V,
              placeholderVersion: k,
              onClick: y && null != d ? H : null,
            }),
            (0, i.jsx)("div", {
              className: A.embedVideoActions,
              children: (0, i.jsx)("div", {
                className: A.centerContent,
                children: y
                  ? (0, i.jsx)(E.default, {
                      onPlay: null != d ? H : null,
                      externalURL: _,
                      renderLinkComponent: x,
                      messageId: O,
                      channelId: R,
                    })
                  : null,
              }),
            }),
          ],
        });
      }
      function O(e) {
        let {
          className: t,
          href: l,
          autoPlay: n,
          maxWidth: r,
          maxHeight: s,
          thumbnail: a,
          video: d,
          renderImageComponent: u,
          responsive: c,
          alt: m,
          disableAltTextDisplay: h = !1,
          playable: p = !0,
          hiddenSpoilers: g,
          placeholder: f,
          placeholderVersion: x,
        } = e;
        return (0, i.jsx)(b.default, {
          className: o(A.embedVideo, t),
          original: l,
          poster: (0, w.getBestEffortSrcUrl)(a),
          src: (0, w.getBestEffortSrcUrl)(d),
          alt: m,
          width: a.width,
          height: a.height,
          naturalHeight: d.height,
          naturalWidth: d.width,
          maxWidth: r,
          maxHeight: s,
          responsive: c,
          autoPlay: n,
          playable: p,
          renderImageComponent: u,
          hiddenSpoilers: g,
          disableAltTextDisplay: h,
          placeholder: f,
          placeholderVersion: x,
        });
      }
      ((n = class extends s.PureComponent {
        renderProvider() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { provider: t },
              renderLinkComponent: l,
              messageId: n,
              channelId: r,
            } = this.props;
          return null == t
            ? null
            : (0, i.jsx)("div", {
                className: o(A.embedProvider, A.embedMargin),
                children:
                  null != t.url
                    ? l({
                        className: A.embedLink,
                        href: t.url,
                        tabIndex: e ? 0 : -1,
                        children: t.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: n,
                        channelId: r,
                      })
                    : (0, i.jsx)("span", { children: t.name }),
              });
        }
        renderAuthor() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { author: t },
              renderLinkComponent: l,
              messageId: n,
              channelId: r,
            } = this.props;
          return null == t
            ? null
            : (0, i.jsxs)("div", {
                className: o(A.embedAuthor, A.embedMargin),
                children: [
                  null != t.iconProxyURL
                    ? (0, i.jsx)("img", {
                        alt: "",
                        className: A.embedAuthorIcon,
                        src: t.iconProxyURL,
                      })
                    : null,
                  null != t.url
                    ? l({
                        className: A.embedAuthorNameLink,
                        href: t.url,
                        tabIndex: e ? 0 : -1,
                        children: t.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: n,
                        channelId: r,
                      })
                    : (0, i.jsx)("span", {
                        className: A.embedAuthorName,
                        children: t.name,
                      }),
                ],
              });
        }
        renderTitle() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: t,
              renderLinkComponent: l,
              renderTitle: n,
              messageId: r,
              channelId: s,
            } = this.props,
            { rawTitle: a, url: d } = t;
          return null == a
            ? null
            : (0, i.jsx)("div", {
                className: o(A.embedTitle, A.embedMargin),
                children:
                  null != d
                    ? l({
                        className: A.embedTitleLink,
                        href: d,
                        tabIndex: e ? 0 : -1,
                        children: n(t, a),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: r,
                        channelId: s,
                      })
                    : n(t, a),
              });
        }
        renderDescription() {
          let { embed: e, renderDescription: t } = this.props,
            { rawDescription: l } = e;
          return null == l
            ? null
            : (0, i.jsx)("div", {
                className: o(A.embedDescription, A.embedMargin),
                children: t(e, l, !1),
              });
        }
        renderThumbnail() {
          let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0],
            {
              embed: { thumbnail: t },
              maxThumbnailWidth: l,
              maxThumbnailHeight: n,
              renderImageComponent: r,
              autoPlayGif: s,
            } = this.props;
          return null == t
            ? null
            : (0, i.jsx)(C.MessagesInteractionContext.Consumer, {
                children: i => {
                  let { disableAnimations: a } = i;
                  return r({
                    containerClassName: A.embedThumbnail,
                    src: (0, w.getBestEffortSrcUrl)(t),
                    original: t.url,
                    width: t.width,
                    height: t.height,
                    maxWidth: l,
                    maxHeight: n,
                    shouldLink: e,
                    autoPlay: s && !a,
                  });
                },
              });
        }
        renderFields() {
          let { embed: e } = this.props,
            { fields: t } = e;
          if (null == t || 0 === t.length) return null;
          let l = [],
            n = null;
          return (
            t.forEach(t => {
              let { rawName: r, rawValue: i, inline: s } = t;
              !s && null != n && (l.push(n), (n = null)),
                null == n && (n = []),
                n.push([
                  this.props.renderTitle(e, r),
                  this.props.renderDescription(e, i, !0),
                ]),
                (3 === n.length || !s) && (l.push(n), (n = null));
            }),
            null != n && l.push(n),
            (0, i.jsx)("div", {
              className: A.embedFields,
              children: l.map((e, t) => {
                let { length: l } = e;
                return e.map((e, n) => {
                  let [r, s] = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: A.embedField,
                      style: {
                        gridColumn: (function (e, t) {
                          let l = 12 / t,
                            n = e * l;
                          return "".concat(n + 1, " / ").concat(n + l + 1);
                        })(n, l),
                      },
                      children: [
                        (0, i.jsx)("div", {
                          className: A.embedFieldName,
                          children: r,
                        }),
                        (0, i.jsx)("div", {
                          className: A.embedFieldValue,
                          children: s,
                        }),
                      ],
                    },
                    "".concat(t, "-").concat(n)
                  );
                });
              }),
            })
          );
        }
        renderImages() {
          let { hiddenSpoiler: e = !1, isVisible: t = !0 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { embed: l } = this.props,
            { maxMediaHeight: n } = this.state;
          if (null == l.images) return null;
          let [r, s, a, o] = l.images.map(n =>
            this.renderImage({
              hiddenSpoiler: e,
              isVisible: t,
              image: n,
              isGalleryImage: !0,
              allImages: l.images,
            })
          );
          return null == r && null == s && null == a && null == o
            ? null
            : (0, i.jsxs)("div", {
                className: A.embedGalleryImagesWrapper,
                style: { height: n },
                children: [
                  (0, i.jsxs)("div", {
                    className: A.embedGallerySide,
                    children: [r, null != o && a],
                  }),
                  (0, i.jsxs)("div", {
                    className: A.embedGallerySide,
                    children: [s, null == o && null != a && a, null != o && o],
                  }),
                ],
              });
        }
        renderImage() {
          let {
              hiddenSpoiler: e = !1,
              isVisible: t = !0,
              image: l,
              isGalleryImage: n = !1,
              alt: r = j.default.Messages.IMAGE,
              allImages: s = null,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              renderImageComponent: a,
              className: d,
              autoPlayGif: u,
            } = this.props,
            { maxMediaWidth: c, maxMediaHeight: m } = this.state;
          if (null == l) return null;
          let h = (0, w.getBestEffortSrcUrl)(l),
            p =
              null == s
                ? {}
                : (0, T.createMediaOnClickOverrides)(
                    s.map(T.carouselAssetFromImageEmbed)
                  ),
            g = x.default.isAnimated({
              src: (0, w.getBestEffortSrcUrl)(l),
              original: l.url,
              animated: !1,
            }),
            f = {
              containerClassName: o(d, {
                [A.embedMedia]: !n,
                [A.embedImage]: !n,
                [A.galleryImage]: n,
              }),
              imageContainerClassName: n ? A.galleryImageContainer : void 0,
              imageClassName: n ? A.embedGalleryImageElement : void 0,
              src: (0, w.getBestEffortSrcUrl)(l),
              alt: r,
              responsive: !0,
              limitResponsiveWidth: !n,
              width: l.width,
              height: l.height,
              maxWidth: c,
              maxHeight: m,
              original: l.url,
              shouldLink: t,
              disableAltTextDisplay: !0,
              hiddenSpoilers: e,
              placeholder: l.placeholder,
              placeholderVersion: l.placeholderVersion,
            };
          return (
            h in p && (f.onClick = p[h]),
            (0, i.jsx)(I.GIFAccessoryContext.Consumer, {
              children: t =>
                (0, i.jsx)(
                  C.MessagesInteractionContext.Consumer,
                  {
                    children: l => {
                      let { disableAnimations: n } = l;
                      return a({
                        ...f,
                        autoPlay: u && !n && !e,
                        renderAccessory: g ? t : null,
                      });
                    },
                  },
                  l.url
                ),
            })
          );
        }
        renderVideo() {
          let {
              gifv: e = !1,
              isVisible: t = !0,
              hiddenSpoiler: l = !1,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            {
              embed: { url: n, thumbnail: r, video: s, provider: a },
              renderVideoComponent: o,
              renderImageComponent: d,
              renderLinkComponent: u,
              allowFullScreen: c,
              autoPlayGif: m,
              messageId: h,
              channelId: p,
              obscureReason: g,
            } = this.props,
            { maxMediaWidth: f, maxMediaHeight: b } = this.state;
          if (null == n || null == r) return null;
          if (e)
            return null == s
              ? null
              : (0, i.jsx)(C.MessagesInteractionContext.Consumer, {
                  children: e => {
                    let { disableAnimations: a } = e;
                    return (0, i.jsx)(O, {
                      className: A.embedMedia,
                      href: n,
                      thumbnail: r,
                      video: s,
                      maxWidth: f,
                      maxHeight: b,
                      responsive: !0,
                      autoPlay: !l && m && !a && t,
                      renderImageComponent: d,
                      playable: t,
                      hiddenSpoilers: l,
                      disableAltTextDisplay: null != g,
                      placeholder: s.placeholder,
                      placeholderVersion: s.placeholderVersion,
                    });
                  },
                });
          return (0, i.jsx)(_, {
            className: A.embedMedia,
            href: n,
            allowFullScreen: c,
            thumbnail: r,
            video: s,
            provider: null == a ? void 0 : a.name,
            maxWidth: f,
            maxHeight: b,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: u,
            playable: t && !l,
            messageId: h,
            channelId: p,
            placeholder: null == s ? void 0 : s.placeholder,
            placeholderVersion: null == s ? void 0 : s.placeholderVersion,
          });
        }
        renderFooter() {
          let { footer: e, timestamp: t } = this.props.embed;
          if (null != e) {
            let l =
              null != e.iconProxyURL && "" !== e.iconProxyURL
                ? e.iconProxyURL
                : e.iconURL;
            return (0, i.jsxs)("div", {
              className: o(A.embedFooter, A.embedMargin),
              children: [
                null != l
                  ? (0, i.jsx)("img", {
                      alt: "",
                      className: A.embedFooterIcon,
                      src: l,
                    })
                  : null,
                (0, i.jsxs)("span", {
                  className: A.embedFooterText,
                  children: [
                    e.text,
                    null != e.text && null != t
                      ? (0, i.jsx)("span", {
                          className: A.embedFooterSeparator,
                          children: "•",
                        })
                      : null,
                    null != t ? (0, m.calendarFormat)(t) : null,
                  ],
                }),
              ],
            });
          }
          if (null != t)
            return (0, i.jsx)("div", {
              className: o(A.embedFooter, A.embedMargin),
              children: (0, i.jsx)("span", {
                className: A.embedFooterText,
                children: (0, m.calendarFormat)(t),
              }),
            });
        }
        renderMedia() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: l } = this.state;
          switch (t.type) {
            case S.MessageEmbedTypes.GIFV:
              return this.renderVideo({
                gifv: !0,
                hiddenSpoiler: e,
                isVisible: l,
              });
            case S.MessageEmbedTypes.VIDEO:
            default:
              if (null != t.video)
                return this.renderVideo({
                  gifv: !1,
                  hiddenSpoiler: e,
                  isVisible: l,
                });
              if (null != t.images)
                return this.renderImages({ hiddenSpoiler: e, isVisible: l });
              return this.renderImage({
                hiddenSpoiler: e,
                isVisible: l,
                image: t.image,
                alt: t.rawTitle,
              });
          }
        }
        renderAll() {
          let e, t;
          let { embed: l, hideMedia: n } = this.props,
            { isVisible: r } = this.state,
            i = this.renderProvider(r),
            s = this.renderAuthor(r),
            a = this.renderTitle(r);
          switch (l.type) {
            case S.MessageEmbedTypes.IMAGE:
            case S.MessageEmbedTypes.VIDEO:
            case S.MessageEmbedTypes.GIFV:
              break;
            default:
              e = this.renderDescription();
          }
          let o = this.renderFields();
          !n && (t = this.renderMedia(!r));
          let d = this.renderFooter(),
            u = null == t;
          return (
            l.type === S.MessageEmbedTypes.RICH && (u = null == l.video),
            {
              provider: i,
              author: s,
              title: a,
              description: e,
              thumbnail: !n && u ? this.renderThumbnail(r) : null,
              fields: o,
              media: t,
              footer: d,
            }
          );
        }
        getMaxWidth() {
          let {
              embed: { image: e, images: t, video: l, type: n },
            } = this.props,
            { maxMediaWidth: r, maxMediaHeight: i } = this.state,
            s = null != e ? e : l;
          if (null == s) return;
          let { width: a } = (0, p.fit)({
            width: s.width,
            height: s.height,
            maxWidth: r,
            maxHeight: i,
          });
          return n === S.MessageEmbedTypes.VIDEO || a >= 300
            ? a + 32
            : n === S.MessageEmbedTypes.RICH && void 0 !== t
              ? 520
              : void 0;
        }
        isInline() {
          let { hideMedia: e, embed: t } = this.props;
          return !e && (0, h.isEmbedInline)(t);
        }
        renderSuppressButton(e) {
          return (0, i.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: A.embedSuppressButton,
            onClick: e,
            "aria-label": j.default.Messages.SUPPRESS_ALL_EMBEDS,
            children: (0, i.jsx)(M.default, { width: 16, height: 16 }),
          });
        }
        usesJustifiedAutoStyle() {
          let { embed: e } = this.props;
          return (
            e.type === S.MessageEmbedTypes.IMAGE ||
            e.type === S.MessageEmbedTypes.VIDEO ||
            e.type === S.MessageEmbedTypes.GIFV ||
            ((e.type === S.MessageEmbedTypes.RICH ||
              e.type === S.MessageEmbedTypes.ARTICLE) &&
              (null != e.video || null != e.image))
          );
        }
        getEmbedColor(e) {
          let { color: t } = this.props.embed;
          return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
        }
        getSpoilerStyles(e) {
          let {
              embed: { image: t, images: l, video: n, type: r },
            } = this.props,
            { maxMediaWidth: i, maxMediaHeight: s } = this.state;
          if (!this.usesJustifiedAutoStyle()) return;
          let a = e ? void 0 : this.getMaxWidth();
          if (void 0 === a && void 0 === l && r !== S.MessageEmbedTypes.RICH) {
            let e = null != t ? t : n;
            if (void 0 !== e) {
              let { width: t } = (0, p.fit)({
                width: e.width,
                height: e.height,
                maxWidth: i,
                maxHeight: s,
              });
              a = t;
            }
          }
          return {
            maxWidth: void 0 === a ? "max-content" : a,
            justifySelf: "auto",
          };
        }
        render() {
          var e, t;
          let { embed: l, obscureReason: n, className: r } = this.props;
          return (null === (e = l.provider) || void 0 === e
            ? void 0
            : e.name) === "Spotify"
            ? (0, i.jsx)(v.default, { embed: l, className: r })
            : (null === (t = l.provider) || void 0 === t ? void 0 : t.name) ===
                  "Amazon Music" && l.type === S.MessageEmbedTypes.RICH
              ? (0, i.jsx)(g.default, { embed: l, className: r })
              : this.isInline()
                ? null != n
                  ? (0, i.jsx)(y.default, {
                      type: y.default.Types.ATTACHMENT,
                      reason: n,
                      onReveal: this.onReveal,
                      onToggleObscurity: this.onToggleObscurity,
                      isSingleMosaicItem: !0,
                      containerStyles: this.getSpoilerStyles(!0),
                      children: this.renderInlineMediaEmbed,
                    })
                  : this.renderInlineMediaEmbed()
                : null != n
                  ? (0, i.jsx)(y.default, {
                      type: y.default.Types.EMBED,
                      onReveal: this.onReveal,
                      onToggleObscurity: this.onToggleObscurity,
                      reason: n,
                      isSingleMosaicItem: !0,
                      containerStyles: this.getSpoilerStyles(!1),
                      children: this.renderEmbedContent,
                    })
                  : this.renderEmbedContent();
        }
        constructor(...e) {
          var t;
          super(...e),
            (t = this),
            (this.state = {
              isVisible: null == this.props.obscureReason,
              ...(0, h.getMaxEmbedMediaSize)(this.props.embed),
            }),
            (this.onReveal = () => {
              this.setState({ isVisible: !0 });
            }),
            (this.onToggleObscurity = () => {
              this.setState({ isVisible: !this.state.isVisible });
            }),
            (this.renderInlineMediaEmbed = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                { obscureReason: l, className: n } = t.props;
              return (0, i.jsx)("div", {
                "aria-hidden": e,
                className: o(A.inlineMediaEmbed, n, {
                  [A.spoilerAttachment]: l === u.ObscureReason.SPOILER,
                  [A.hiddenExplicitAttachment]:
                    null != l &&
                    [
                      u.ObscureReason.EXPLICIT_CONTENT,
                      u.ObscureReason.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(l),
                  [A.isHidden]: e,
                  [A.justifyAuto]: t.usesJustifiedAutoStyle(),
                }),
                children: t.renderMedia(e),
              });
            }),
            (this.renderEmbedContent = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                {
                  className: l,
                  onSuppressEmbed: n,
                  obscureReason: r,
                } = t.props,
                {
                  provider: s,
                  author: a,
                  title: d,
                  description: c,
                  fields: m,
                  thumbnail: h,
                  media: p,
                  footer: g,
                } = t.renderAll();
              return (0, i.jsx)("article", {
                className: o(l, A.embedFull, N.markup, {
                  [A.isHidden]: e,
                  [A.spoilerEmbed]: r === u.ObscureReason.SPOILER,
                  [A.hiddenExplicitEmbed]:
                    null != r &&
                    [
                      u.ObscureReason.EXPLICIT_CONTENT,
                      u.ObscureReason.POTENTIAL_EXPLICIT_CONTENT,
                    ].includes(r),
                  [A.justifyAuto]: t.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": e,
                style: {
                  borderColor: t.getEmbedColor(e),
                  maxWidth: t.getMaxWidth(),
                },
                children: (0, i.jsx)("div", {
                  className: A.gridContainer,
                  children: (0, i.jsxs)("div", {
                    className: o({ [A.grid]: !0, [A.hasThumbnail]: null != h }),
                    children: [
                      null != n ? t.renderSuppressButton(n) : null,
                      s,
                      a,
                      d,
                      c,
                      m,
                      p,
                      h,
                      g,
                    ],
                  }),
                }),
              });
            });
        }
      }).defaultProps = {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
      }),
        (r = n);
    },
    633667: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          SupportedEmbedIFrame: function () {
            return r;
          },
          default: function () {
            return h;
          },
        });
      var n,
        r,
        i = l("37983"),
        s = l("884691"),
        a = l("746379"),
        o = l.n(a),
        d = l("649809");
      function u(e) {
        let { autoMute: t, ...l } = e,
          n = s.useRef(null),
          r = s.useCallback(
            e => {
              if (
                e.data["x-tiktok-embed"] &&
                "https://www.tiktok.com" === e.origin &&
                "onPlayerReady" === e.data.type
              ) {
                var l, r, i, s;
                t &&
                  (null === (s = n.current) ||
                    void 0 === s ||
                    null === (i = s.contentWindow) ||
                    void 0 === i ||
                    i.postMessage(
                      { type: "mute", "x-tiktok-embed": !0 },
                      e.origin
                    )),
                  null === (r = n.current) ||
                    void 0 === r ||
                    null === (l = r.contentWindow) ||
                    void 0 === l ||
                    l.postMessage(
                      { type: "play", "x-tiktok-embed": !0 },
                      e.origin
                    );
              }
            },
            [t]
          );
        return (
          s.useEffect(
            () => (
              window.addEventListener("message", r),
              () => window.removeEventListener("message", r)
            ),
            [r]
          ),
          (0, i.jsx)(m, { ref: n, ...l })
        );
      }
      function c(e) {
        let { src: t, autoMute: l, ...n } = e,
          r = o.parse(null != t ? t : "", !0);
        (r.query = { ...r.query, autoplay: "1", auto_play: "1" }),
          l && (r.query.mute = "1"),
          (r.search = null);
        let s = o.format(r);
        return (0, i.jsx)(m, { src: s, ...n });
      }
      let m = s.forwardRef(function (e, t) {
        return (0, i.jsx)("iframe", {
          ref: t,
          className: d.embedIframe,
          allow: "autoplay",
          frameBorder: 0,
          scrolling: "no",
          sandbox:
            "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          ...e,
        });
      });
      function h(e) {
        switch (e.provider) {
          case "YouTube":
            return (0, i.jsx)(c, { ...e });
          case "TikTok":
            return (0, i.jsx)(u, { ...e });
          default:
            return (0, i.jsx)(m, { ...e });
        }
      }
      ((n = r || (r = {})).YOUTUBE = "YouTube"), (n.TIKTOK = "TikTok");
    },
    58549: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var n = l("37983"),
        r = l("884691"),
        i = l("328620"),
        s = l("58608"),
        a = l("49111"),
        o = l("782340");
      function d(e) {
        let {
            poster: t,
            src: l,
            width: i,
            height: o,
            naturalWidth: d,
            naturalHeight: u,
            play: c = !0,
            className: m,
            alt: h,
            responsive: p,
          } = e,
          g = r.useRef(null);
        return (r.useEffect(() => {
          let { current: e } = g;
          null != e && (c ? e.play() : e.pause());
        }, [c]),
        (d <= a.MAX_VIDEO_WIDTH && u <= a.MAX_VIDEO_HEIGHT) ||
          (d <= a.MAX_VIDEO_HEIGHT && u <= a.MAX_VIDEO_WIDTH))
          ? (0, n.jsx)(s.default, {
              ref: g,
              className: m,
              poster: t,
              src: l,
              width: i,
              height: o,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: c,
              preload: "none",
              "aria-label": h,
            })
          : (0, n.jsx)("img", { alt: "", src: t, width: i, height: o });
      }
      function u(e) {
        let {
          src: t,
          poster: l,
          naturalWidth: r,
          naturalHeight: s,
          responsive: a,
          autoPlay: u,
          className: c,
          playable: m = !0,
          renderImageComponent: h,
          alt: p = o.default.Messages.GIF,
          ...g
        } = e;
        return (0, n.jsx)(i.GIFAccessoryContext.Consumer, {
          children: e =>
            h({
              ...g,
              alt: p,
              src: l,
              containerClassName: c,
              autoPlay: u,
              animated: m,
              responsive: a,
              renderAccessory: e,
              tabIndex: m ? 0 : -1,
              children(e) {
                let { src: l, size: i, animating: o, alt: u } = e;
                return (0, n.jsx)(d, {
                  alt: u,
                  className: c,
                  poster: l,
                  src: t,
                  width: i.width,
                  height: i.height,
                  naturalWidth: r,
                  naturalHeight: s,
                  responsive: a,
                  play: m && o,
                });
              },
            }),
        });
      }
    },
    488222: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("414456"),
        i = l.n(r),
        s = l("746379"),
        a = l.n(s),
        o = l("450484"),
        d = l("649809");
      function u(e) {
        let {
          className: t,
          embed: { url: l },
        } = e;
        if (null == l) return null;
        let r = null,
          s = null;
        try {
          let e = a.parse(l, !0);
          (r = e.host), (s = e.pathname);
        } catch (e) {
          return null;
        }
        if ("open.spotify.com" !== r || null == s) return null;
        let u = s.split("/"),
          c = null != u[1] ? u[1].toLowerCase() : null,
          m = null != u[3] ? u[3].toLowerCase() : null,
          h = u[4];
        if (
          ![
            "track",
            "playlist",
            "album",
            "artist",
            "user",
            "show",
            "episode",
          ].includes(null != c ? c : "") ||
          ("user" === c && "playlist" !== m)
        )
          return null;
        "user" === c &&
          "playlist" === m &&
          null != h &&
          (s = "/playlist/".concat(h));
        let p = 352;
        return (
          "track" === c
            ? (p = 80)
            : ("episode" === c || "show" === c) && (p = 232),
          (0, n.jsx)("iframe", {
            className: i(d.embedSpotify, t),
            src: o.SpotifyEndpoints.EMBED(s),
            style: { width: 400, height: p },
            frameBorder: 0,
            sandbox:
              "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          })
        );
      }
    },
    328620: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          GIFAccessoryContext: function () {
            return r;
          },
        });
      var n = l("884691");
      let r = n.createContext(() => null);
    },
    688622: function (e, t, l) {
      "use strict";
      function n(e) {
        let { proxyURL: t, url: l } = e;
        return null != t && "" !== t ? t : l;
      }
      l.r(t),
        l.d(t, {
          getBestEffortSrcUrl: function () {
            return n;
          },
        });
    },
    323273: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          carouselAssetFromImageEmbed: function () {
            return f;
          },
          carouselAssetFromAttachment: function () {
            return b;
          },
          createMediaOnClickOverrides: function () {
            return x;
          },
        }),
        l("222007");
      var n = l("37983");
      l("884691");
      var r = l("118810"),
        i = l("77078"),
        s = l("340616"),
        a = l("447435"),
        o = l("327467"),
        d = l("651693"),
        u = l("924444"),
        c = l("688622"),
        m = l("599110"),
        h = l("253981"),
        p = l("49111"),
        g = l("400402");
      function f(e) {
        let { width: t, height: l } = e,
          r = (0, c.getBestEffortSrcUrl)(e);
        return {
          component: (0, n.jsx)(u.ImageModal, {
            width: t,
            height: l,
            original: e.url,
            renderLinkComponent: e => (0, n.jsx)(s.default, { ...e }),
            src: r,
          }),
          width: t,
          height: l,
          src: r,
        };
      }
      function b(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              l =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ((0, d.isImageFile)(e.filename)) {
              var r, i;
              let o = null !== (r = e.width) && void 0 !== r ? r : 0,
                d = null !== (i = e.height) && void 0 !== i ? i : 0,
                m = (0, c.getBestEffortSrcUrl)({
                  proxyURL: e.proxy_url,
                  url: e.url,
                });
              return {
                component: (0, n.jsx)(u.ImageModal, {
                  width: o,
                  height: d,
                  original: e.url,
                  renderLinkComponent: e => (0, n.jsx)(s.default, { ...e }),
                  src: m,
                  shouldHideMediaOptions: t,
                  obscure: (0, a.isMediaObscured)(
                    { type: a.ObscuredMediaTypes.Attachment, media: e },
                    l
                  ),
                }),
                width: o,
                height: d,
                src: m,
              };
            }
            return null;
          })(e, t, l);
        if (null != r) return r;
        let i = (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ((0, d.isVideoFile)(e.filename)) {
            var r, i;
            let o = null !== (r = e.width) && void 0 !== r ? r : 0,
              d = null !== (i = e.height) && void 0 !== i ? i : 0,
              m = (0, c.getBestEffortSrcUrl)({
                proxyURL: e.proxy_url,
                url: e.url,
              }),
              p = h.default.toURLSafe(e.proxy_url);
            return null == p
              ? null
              : (p.searchParams.append("format", "jpeg"),
                {
                  component: (0, n.jsx)(u.VideoModal, {
                    width: o,
                    height: d,
                    poster: p.toString(),
                    naturalWidth: o,
                    naturalHeight: d,
                    renderLinkComponent: e => (0, n.jsx)(s.default, { ...e }),
                    src: m,
                    fileSize: e.size,
                    fileName: e.filename,
                    shouldHideMediaOptions: t,
                    obscure: (0, a.isMediaObscured)(
                      { type: a.ObscuredMediaTypes.Attachment, media: e },
                      l
                    ),
                  }),
                  width: o,
                  height: d,
                  src: m,
                });
          }
          return null;
        })(e, t, l);
        return null != i ? i : null;
      }
      function x(e, t) {
        let s = {};
        for (let [a, d] of e.entries())
          s[d.src] = s =>
            (function (e, t, s, a) {
              e.preventDefault(),
                (0, r.isElement)(e.currentTarget) && e.currentTarget.blur(),
                null != a &&
                  (m.default.track(
                    p.AnalyticEvents.OPEN_MODAL,
                    { type: p.AnalyticsSections.MEDIA_VIEWER, ...a },
                    { throttlePercent: 0.01 }
                  ),
                  (0, o.startMediaViewerSession)(
                    a.guild_id,
                    a.channel_id,
                    a.channel_type,
                    t.length
                  )),
                (0, i.openModalLazy)(
                  async () => {
                    let { default: e } = await l
                      .el("100814")
                      .then(l.bind(l, "100814"));
                    return l => {
                      let { ...r } = l;
                      return (0, n.jsx)(e, {
                        ...r,
                        onIndexChange:
                          null != a ? o.incrementSelectedItemChanges : void 0,
                        className: g.zoomedCarouselModalRoot,
                        items: t,
                        modalCarouselClassName: g.modalCarouselWrapper,
                        startingIndex: s,
                      });
                    };
                  },
                  {
                    onCloseCallback:
                      null != a ? o.endMediaViewerSession : void 0,
                  }
                );
            })(s, e, a, t);
        return s;
      }
    },
  },
]);
//# sourceMappingURL=103361cbccff64f1039f.js.map

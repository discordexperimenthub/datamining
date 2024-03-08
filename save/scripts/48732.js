(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48732"],
  {
    121432: function (e, t, a) {
      "use strict";
      e.exports = a.p + "21351b92881882ca8597.svg";
    },
    169903: function (e, t, a) {
      "use strict";
      e.exports = a.p + "867436a0aaf9edda9601.svg";
    },
    389291: function (e, t, a) {
      "use strict";
      e.exports = a.p + "bb95de121233bf246961.svg";
    },
    676084: function (e, t, a) {
      "use strict";
      e.exports = a.p + "2b2bc7e0b5e6dc0c2182.svg";
    },
    981125: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("446674"),
        r = a("151426"),
        l = a("77078"),
        o = a("997289"),
        d = a("812204"),
        c = a("685665"),
        i = a("649844"),
        u = a("915639"),
        _ = a("697218"),
        m = a("181114"),
        E = a("599110"),
        N = a("701909"),
        f = a("719923"),
        g = a("702542"),
        h = a("646718"),
        A = a("49111"),
        O = a("782340"),
        C = a("443236"),
        p = a("169903"),
        M = a("389291"),
        D = a("676084"),
        T = a("121432");
      let b = "2023_summer_bogo",
        x = "DnkvLW5052Y";
      function y(e) {
        let { renderModalProps: t } = e,
          { onClose: a } = t,
          y = (0, n.useStateFromStores)([u.default], () => u.default.locale),
          R = y.split("-")[0],
          S = {
            url: ""
              .concat(
                (0, A.YOUTUBE_EMBED_URL)(x),
                "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy="
              )
              .concat("en" === R ? "0" : "1", "&cc_lang_pref=")
              .concat(
                "zh-CN" === y ? "zh-Hans" : "zh-TW" === y ? "zh-Hant" : R
              ),
            width: 498,
            height: 280,
          },
          { location: v } = (0, o.useAnalyticsContext)(),
          { analyticsLocations: L } = (0, c.default)(
            d.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL
          ),
          G = (0, n.useStateFromStores)([_.default], () =>
            _.default.getCurrentUser()
          ),
          j = (0, f.isPremiumExactly)(G, h.PremiumTypes.TIER_2),
          B = (0, f.isPremium)(G) && !j;
        return (0, s.jsx)(g.default, {
          renderModalProps: t,
          heroArt: {
            type: "embed",
            embed: S,
            thumbnail: {
              url: "https://i.ytimg.com/vi/".concat(x, "/maxresdefault.jpg"),
              width: 498,
              height: 280,
            },
            href: "https://youtu.be/".concat(x),
          },
          modalDismissibleContent:
            r.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
          header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
          subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
          subHeaderExtra: () =>
            (0, s.jsx)(l.Anchor, {
              className: C.termsApplyAnchor,
              href: N.default.getArticleURL(
                A.HelpdeskArticles.SUMMER_2023_BOGO
              ),
              children: (0, s.jsx)(l.Heading, {
                variant: "heading-md/normal",
                className: C.termsApplyBodyText,
                children: O.default.Messages.BOGO_TERMS_APPLY,
              }),
            }),
          featureCards: [
            {
              header:
                O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
              subHeader:
                O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format(
                  {
                    helpCenterLink: N.default.getArticleURL(
                      A.HelpdeskArticles.REMIXING
                    ),
                  }
                ),
              imageSrc: p,
              tagText: O.default.Messages.EARLY_ACCESS,
            },
            {
              header:
                O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
              subHeader:
                O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
              imageSrc: D,
            },
            {
              header:
                O.default.Messages
                  .BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
              subHeader:
                O.default.Messages
                  .BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
              imageSrc: M,
            },
          ],
          changeLogId: b,
          button: () => {
            let e = B ? "upgrade_plan_button" : "get_nitro_button",
              t = Date.now();
            return (0, s.jsxs)(m.default, {
              className: C.buttonWide,
              innerClassName: C.innerButton,
              color: l.Button.Colors.GREEN,
              size: l.Button.Sizes.SMALL,
              onClick: () => {
                E.default.track(A.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                  change_log_id: b,
                  cta_type: e,
                  seconds_open: Math.round((Date.now() - t) / 1e3),
                  target: "bogo_payment_model",
                }),
                  (0, i.default)({
                    subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: L,
                    analyticsObject: {
                      ...v,
                      object: A.AnalyticsObjects.BUTTON_CTA,
                      objectType: A.AnalyticsObjectTypes.TIER_2,
                    },
                    onClose: e => {
                      e && a();
                    },
                  });
              },
              children: [
                (0, s.jsx)("img", {
                  alt: "",
                  className: C.nitroIconSubHeader,
                  src: T,
                }),
                O.default.Messages.BOGO_CLAIM_OFFER,
              ],
            });
          },
        });
      }
    },
    215429: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("669491"),
        r = a("819855"),
        l = a("77078"),
        o = a("841098"),
        d = e => {
          let { className: t } = e,
            a = (0, o.default)(),
            d = (0, l.useToken)(n.default.colors.BACKGROUND_ACCENT).hex();
          return (0, s.jsx)("svg", {
            width: "700",
            height: "120",
            viewBox: "0 0 700 120",
            className: t,
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              fill: (0, r.isThemeDark)(a) ? d : "white",
              opacity: "1",
              d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z",
            }),
          });
        };
    },
    702542: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return D;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        r = a("414456"),
        l = a.n(r),
        o = a("446674"),
        d = a("77078"),
        c = a("206230"),
        i = a("10641"),
        u = a("933629"),
        _ = a("560176"),
        m = a("633667"),
        E = a("476765"),
        N = a("956089"),
        f = a("58608"),
        g = a("599110"),
        h = a("215429"),
        A = a("49111"),
        O = a("994428"),
        C = a("481741");
      let p = e => {
          let { tagText: t, className: a } = e;
          return (0, s.jsx)(N.TextBadge, { className: l(C.tag, a), text: t });
        },
        M = e => {
          let {
            header: t,
            subHeader: a,
            imageSrc: n,
            tagText: r,
            wideStyle: o,
          } = e;
          return (0, s.jsxs)("div", {
            className: l(C.featureCard, { [C.wideStyle]: o }),
            children: [
              null != r
                ? (0, s.jsx)(p, { tagText: r, className: C.featureCardTag })
                : null,
              (0, s.jsx)("img", {
                alt: "",
                className: l(C.featureCardImg, { [C.wideStyle]: o }),
                src: n,
              }),
              (0, s.jsxs)("div", {
                className: C.featureCardTextGroup,
                children: [
                  (0, s.jsx)(d.Heading, {
                    variant: "heading-lg/extrabold",
                    className: C.featureCardTextHeader,
                    children: t,
                  }),
                  (0, s.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: a,
                  }),
                ],
              }),
            ],
          });
        };
      function D(e) {
        let {
            className: t,
            renderModalProps: a,
            heroArt: r,
            heroArtClassName: N,
            modalDismissibleContent: p,
            modalTopExtra: D,
            header: T,
            headerClassName: b,
            subHeader: x,
            subHeaderExtra: y,
            featureCards: R,
            changeLogId: S,
            button: v,
          } = e,
          { onClose: L, transitionState: G } = a,
          j = (0, E.useUID)(),
          B = R.length % 2 == 0,
          H = (0, o.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          [U, I] = n.useState(Date.now()),
          [w, k] = n.useState(0),
          [P, V] = n.useState(0),
          [F, Y] = n.useState(!1),
          [z, K] = n.useState(!0),
          W = n.useRef(U),
          X = n.useRef(w),
          q = n.useRef(P),
          Z = n.useRef(F),
          J = n.useRef(z);
        function Q() {
          let e = Date.now(),
            t = e - W.current,
            a = X.current,
            s = q.current;
          return (
            Z.current && (k((a += t)), !J.current && V((s += t))), I(e), [a, s]
          );
        }
        return (
          n.useEffect(() => {
            (W.current = U),
              (X.current = w),
              (q.current = P),
              (Z.current = F),
              (J.current = z);
          }, [U, w, P, F, z]),
          n.useEffect(
            () => () => {
              let [e, t] = Q();
              g.default.track(A.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
                change_log_id: S,
                seconds_played: Math.round(e / 1e3),
              }),
                g.default.track(A.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
                  change_log_id: S,
                  seconds_unmuted: Math.round(t / 1e3),
                });
            },
            [S]
          ),
          n.useEffect(() => {
            null != p && (0, i.requestMarkDismissibleContentAsShown)(p);
            let e = Date.now();
            return (
              g.default.track(A.AnalyticEvents.CHANGE_LOG_OPENED, {
                change_log_id: S,
              }),
              () => {
                g.default.track(A.AnalyticEvents.CHANGE_LOG_CLOSED, {
                  change_log_id: S,
                  seconds_open: Math.round((Date.now() - e) / 1e3),
                }),
                  null != p &&
                    (0, i.markDismissibleContentAsDismissed)(p, {
                      dismissAction: O.ContentDismissActionType.DISMISS,
                    });
              }
            );
          }, [p, S]),
          (0, s.jsxs)(d.ModalRoot, {
            className: l(C.root, t),
            transitionState: G,
            "aria-labelledby": j,
            children: [
              (0, s.jsx)(d.ModalCloseButton, {
                className: C.closeButton,
                onClick: L,
              }),
              (0, s.jsx)(h.default, { className: C.splash }),
              null == D ? void 0 : D(),
              (0, s.jsxs)(d.ModalContent, {
                className: C.content,
                children: [
                  (0, s.jsx)(d.Heading, {
                    variant: "display-md",
                    className: l(C.headerText, b),
                    children: T,
                  }),
                  "video" === r.type
                    ? (0, s.jsx)(f.default, {
                        className: l(C.video, N),
                        autoPlay: !H,
                        loop: !0,
                        muted: !0,
                        controls: !0,
                        controlsList:
                          "nofullscreen nodownload noremoteplayback noplaybackrate",
                        src: r.src,
                        poster: r.poster,
                        onPlay: e => {
                          g.default.track(
                            A.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED,
                            { change_log_id: S }
                          ),
                            I(Date.now()),
                            Y(!0),
                            K(e.currentTarget.muted);
                        },
                        onEnded: e => {
                          Q(), K(e.currentTarget.muted), Y(!1);
                        },
                        onVolumeChange: e => {
                          Q(), K(e.currentTarget.muted);
                        },
                        onPause: e => {
                          Q(), K(e.currentTarget.muted), Y(!1);
                        },
                        disablePictureInPicture: !0,
                      })
                    : "embed" === r.type
                      ? (0, s.jsx)(_.EmbedVideo, {
                          className: l(C.video, N),
                          allowFullScreen: !1,
                          href: r.href,
                          thumbnail: r.thumbnail,
                          video: r.embed,
                          provider: m.SupportedEmbedIFrame.YOUTUBE,
                          maxWidth: r.embed.width,
                          maxHeight: r.embed.height,
                          renderVideoComponent: u.renderVideoComponent,
                          renderImageComponent: u.renderImageComponent,
                          renderLinkComponent: u.renderMaskedLinkComponent,
                          onPlay: () => {
                            g.default.track(
                              A.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED,
                              { change_log_id: S }
                            );
                          },
                        })
                      : "image" === r.type
                        ? (0, s.jsx)("img", {
                            alt: "",
                            className: l(C.video, N),
                            src: r.src,
                          })
                        : null,
                  (0, s.jsx)(d.Heading, {
                    variant: "heading-lg/extrabold",
                    className: C.bodyText,
                    children: x,
                  }),
                  null == y ? void 0 : y(),
                  (0, s.jsx)("div", {
                    className: l(C.featureCardGroup, { [C.wideStyle]: B }),
                    children: R.map((e, t) =>
                      (0, s.jsx)(
                        M,
                        { ...e, wideStyle: B },
                        "".concat(e.header, "_").concat(t)
                      )
                    ),
                  }),
                  v(),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=9b537632fc6eb4ba9f14.js.map

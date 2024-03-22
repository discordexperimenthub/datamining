(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71314"],
  {
    461757: function (e, t, a) {
      "use strict";
      e.exports = a.p + "fc684abfc7369958435c.svg";
    },
    39393: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useExplicitMediaAttachmentsForMessage: function () {
            return d;
          },
          useExplicitMediaEmbedsForMessage: function () {
            return o;
          },
        });
      var s = a("65597"),
        i = a("377253"),
        n = a("447435");
      let d = (e, t, a) => {
          var d, o;
          let l = (0, s.useStateFromStores)([i.default], () =>
            i.default.getMessage(e, t)
          );
          if (null == l) return [];
          let r =
            void 0 !== a
              ? e => e.id === a
              : e =>
                  (0, n.isMediaObscured)(
                    { type: n.ObscuredMediaTypes.Attachment, media: e },
                    (0, n.shouldRedactExplicitContent)(l)
                  );
          return null !==
            (o =
              null == l
                ? void 0
                : null === (d = l.attachments) || void 0 === d
                  ? void 0
                  : d.filter(r)) && void 0 !== o
            ? o
            : [];
        },
        o = (e, t, a) => {
          var d, o;
          let l = (0, s.useStateFromStores)([i.default], () =>
            i.default.getMessage(e, t)
          );
          if (null == l) return [];
          let r =
            void 0 !== a
              ? e => e.id === a
              : e =>
                  (0, n.isMediaObscured)(
                    { type: n.ObscuredMediaTypes.Embed, media: e },
                    (0, n.shouldRedactExplicitContent)(l)
                  );
          return null !==
            (o =
              null == l
                ? void 0
                : null === (d = l.embeds) || void 0 === d
                  ? void 0
                  : d.filter(r)) && void 0 !== o
            ? o
            : [];
        };
    },
    335678: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return R;
          },
        });
      var s = a("37983"),
        i = a("884691"),
        n = a("77078"),
        d = a("79112"),
        o = a("545158"),
        l = a("775032"),
        r = a("701909"),
        c = a("447435"),
        u = a("49111"),
        E = a("782340"),
        _ = a("121120"),
        M = a("461757"),
        R = e => {
          let {
              channelId: t,
              messageId: R,
              transitionState: T,
              onClose: C,
            } = e,
            I = (0, l.default)(),
            f = i.useCallback(
              e => {
                (0, c.trackMediaRedactionAction)({
                  action: e,
                  channelId: t,
                  messageId: R,
                });
              },
              [t, R]
            );
          return (
            i.useEffect(() => {
              (0, c.trackMediaRedactionAction)({
                action:
                  c.TrackMediaRedactionActionType
                    .EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: R,
              });
            }, [t, R]),
            (0, s.jsxs)(n.ModalRoot, {
              transitionState: T,
              "aria-label":
                E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
              children: [
                (0, s.jsx)(n.ModalHeader, {
                  separator: !1,
                  className: _.modalHeader,
                  children: (0, s.jsx)("img", {
                    src: M,
                    alt: E.default.Messages
                      .OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                    className: _.headerImg,
                  }),
                }),
                (0, s.jsxs)(n.ModalContent, {
                  className: _.modalBody,
                  children: [
                    (0, s.jsx)(n.Heading, {
                      variant: "heading-lg/bold",
                      className: _.modalInteriorHeader,
                      children:
                        E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER,
                    }),
                    (0, s.jsx)(n.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: I
                        ? E.default.Messages
                            .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT
                        : E.default.Messages
                            .OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN,
                    }),
                    (0, s.jsxs)("div", {
                      className: _.buttonContainer,
                      children: [
                        I
                          ? (0, s.jsx)(n.Button, {
                              color: n.Button.Colors.BRAND,
                              onClick: function () {
                                f(
                                  c.TrackMediaRedactionActionType
                                    .EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS
                                ),
                                  d.default.open(
                                    u.UserSettingsSections.PRIVACY_AND_SAFETY
                                  ),
                                  C();
                              },
                              fullWidth: !0,
                              children:
                                E.default.Messages
                                  .OBSCURED_CONTENT_UPDATE_SETTINGS_CTA,
                            })
                          : (0, s.jsx)(n.Button, {
                              color: n.Button.Colors.BRAND,
                              onClick: () => {
                                (0, o.default)(
                                  r.default.getArticleURL(
                                    u.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION
                                  )
                                );
                              },
                              fullWidth: !0,
                              children: E.default.Messages.LEARN_MORE,
                            }),
                        (0, s.jsx)(n.Button, {
                          color: n.Button.Colors.PRIMARY,
                          onClick: function () {
                            C(),
                              f(
                                c.TrackMediaRedactionActionType
                                  .EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS
                              );
                          },
                          fullWidth: !0,
                          children:
                            E.default.Messages
                              .OBSCURED_CONTENT_LEARN_MORE_DISMISS,
                        }),
                        (0, s.jsx)(n.Text, {
                          variant: "text-sm/medium",
                          color: "header-secondary",
                          children:
                            E.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format(
                              {
                                handleFalsePositiveHook: () => {
                                  C(),
                                    f(
                                      c.TrackMediaRedactionActionType
                                        .EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE
                                    ),
                                    (0, n.openModalLazy)(async () => {
                                      let { default: e } = await a("151622");
                                      return a =>
                                        (0, s.jsx)(e, {
                                          channelId: t,
                                          messageId: R,
                                          ...a,
                                        });
                                    });
                                },
                              }
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    151622: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        });
      var s = a("37983");
      a("884691");
      var i = a("77078"),
        n = a("695681"),
        d = a("457971"),
        o = a("447435"),
        l = a("908480"),
        r = a("39393"),
        c = a("786214"),
        u = a("782340");
      function E(e) {
        let {
            channelId: t,
            messageId: a,
            attachmentId: E,
            embedId: _,
            transitionState: M,
            onClose: R,
          } = e,
          T = (0, d.useIsEligibleForExplicitMediaRedaction)(),
          C = (0, r.useExplicitMediaAttachmentsForMessage)(t, a, E),
          I = (0, r.useExplicitMediaEmbedsForMessage)(t, a, _),
          { reportFalsePositive: f, isReportFalsePositiveLoading: A } = (0,
          l.useExplicitMediaActions)({
            onSuccess: () => (0, c.handleSuccess)(R),
            onError: () => {
              (0, i.showToast)(
                (0, i.createToast)(
                  u.default.Messages.ERROR_GENERIC_TITLE,
                  i.ToastType.FAILURE
                )
              );
            },
            report: () => {
              (0, n.reportFalsePositive)(
                t,
                a,
                C.map(e => e.id),
                I.map(e => e.id)
              );
            },
          }),
          N = T && (C.length > 0 || I.length > 0);
        return (
          !N && R(),
          (0, s.jsx)(c.ExplicitMediaFalsePositiveModal, {
            messageId: a,
            channelId: t,
            isReportFalsePositiveLoading: A,
            analyticsContext:
              o.TrackMediaRedactionContext
                .EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: f,
            attachmentPreview: 1 === C.length && 0 === I.length ? C[0] : void 0,
            embedPreview: 1 === I.length && 0 === C.length ? I[0] : void 0,
            transitionState: M,
            onClose: R,
          })
        );
      }
    },
    775032: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var s = a("446674"),
        i = a("697218");
      function n() {
        let e = (0, s.useStateFromStores)([i.default], () => {
          var e;
          return null === (e = i.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.nsfwAllowed;
        });
        return e;
      }
    },
  },
]);
//# sourceMappingURL=6eb3b579292b6ce72ccd.js.map

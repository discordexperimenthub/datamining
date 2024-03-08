(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98738"],
  {
    805923: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return L;
          },
        }),
        s("222007");
      var a = s("37983"),
        o = s("884691"),
        l = s("77078"),
        n = s("152584"),
        i = s("812204"),
        r = s("685665"),
        c = s("635956"),
        d = s("648661"),
        A = s("599110"),
        u = s("49111"),
        M = s("646718"),
        E = s("782340"),
        T = s("766633"),
        L = e => {
          let {
              imgURI: t,
              transitionState: s,
              onClose: L,
              onChangeAvatar: _,
            } = e,
            [m, S] = o.useState(!1),
            [R, h] = o.useState(!1),
            { AnalyticsLocationProvider: I, sourceAnalyticsLocations: x } = (0,
            r.default)(i.default.PREMIUM_UPSELL),
            U = async () => {
              S(!0);
              let e = await (0, n.saveAccountChanges)({ avatar: t });
              if (null == e ? void 0 : e.ok) (0, n.setPendingAvatar)(void 0);
              else {
                var s;
                (null == e
                  ? void 0
                  : null === (s = e.body) || void 0 === s
                    ? void 0
                    : s.username) != null && (0, d.showInvalidUsernameToast)();
              }
              S(!1), L();
            };
          return (
            o.useEffect(() => {
              A.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: M.PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL,
                location_stack: x,
              });
            }, [x]),
            (0, a.jsx)(I, {
              children: (0, a.jsxs)(l.ModalRoot, {
                transitionState: s,
                size: l.ModalSize.SMALL,
                "aria-label": E.default.Messages.IMAGE,
                children: [
                  (0, a.jsxs)(l.ModalContent, {
                    className: T.modalContent,
                    paddingFix: !1,
                    orientation: "horizontal",
                    children: [
                      (0, a.jsx)(l.ModalHeader, {
                        separator: !1,
                        className: T.header,
                        children: (0, a.jsx)(l.FormTitle, {
                          tag: l.FormTitleTags.H1,
                          children:
                            E.default.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR,
                        }),
                      }),
                      (0, a.jsx)(l.Text, {
                        color: "text-normal",
                        variant: "text-md/normal",
                        children:
                          E.default.Messages
                            .PREMIUM_UPSELL_ANIMATED_AVATAR_SUBTITLE,
                      }),
                      (0, a.jsxs)("div", {
                        className: T.promo,
                        children: [
                          (0, a.jsx)(l.Text, {
                            color: "text-normal",
                            variant: "text-sm/semibold",
                            className: T.promoText,
                            children:
                              E.default.Messages
                                .PREMIUM_UPSELL_ANIMATED_AVATAR_TEXT,
                          }),
                          (0, a.jsx)(c.default, {
                            submitting: R,
                            premiumModalAnalyticsLocation: {
                              section: u.AnalyticsSections.AVATAR_UPSELL_MODAL,
                              object: u.AnalyticsObjects.BUTTON_CTA,
                            },
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.GREEN,
                            onClick: () => {
                              h(!0);
                            },
                            onSubscribeModalClose: e => {
                              h(!1), e && (U(), L());
                            },
                            buttonText:
                              E.default.Messages.PREMIUM_REQUIRED_GET_NITRO,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)(l.ModalFooter, {
                    className: T.modalFooter,
                    children: [
                      (0, a.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        size: l.ButtonSizes.SMALL,
                        onClick: _,
                        children: E.default.Messages.CHANGE_AVATAR_A11Y_LABEL,
                      }),
                      (0, a.jsxs)("div", {
                        className: T.modalFooterActions,
                        children: [
                          (0, a.jsx)(l.Button, {
                            className: T.cancelButton,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            size: l.ButtonSizes.SMALL,
                            onClick: L,
                            children: E.default.Messages.AVATAR_UPLOAD_CANCEL,
                          }),
                          (0, a.jsx)(l.Button, {
                            size: l.ButtonSizes.SMALL,
                            onClick: U,
                            submitting: m,
                            children: E.default.Messages.SAVE_CHANGES,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(l.Avatar, {
                    src: t,
                    "aria-hidden": !0,
                    className: T.avatar,
                    size: l.AvatarSizes.SIZE_120,
                  }),
                ],
              }),
            })
          );
        };
    },
    648661: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          showInvalidUsernameToast: function () {
            return l;
          },
        });
      var a = s("77078"),
        o = s("782340");
      function l() {
        (0, a.showToast)(
          (0, a.createToast)(
            o.default.Messages.USER_SETTINGS_UPDATE_FAILURE,
            a.ToastType.FAILURE
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=50cca6efe742091428d0.js.map

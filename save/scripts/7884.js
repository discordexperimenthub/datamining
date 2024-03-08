(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7884"],
  {
    745544: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return U;
          },
        }),
        t("222007"),
        t("70102");
      var i = t("37983"),
        l = t("884691"),
        r = t("627445"),
        a = t.n(r),
        o = t("446674"),
        n = t("77078"),
        u = t("635956"),
        d = t("217513"),
        c = t("289918"),
        f = t("430312"),
        P = t("763866"),
        p = t("935409"),
        E = t("824563"),
        M = t("697218"),
        T = t("476765"),
        I = t("599110"),
        m = t("49111"),
        S = t("646718"),
        A = t("590456"),
        _ = t("782340"),
        y = t("261091");
      function U(e) {
        let s,
          {
            transitionState: t,
            avatarSrc: r,
            bannerSrc: U,
            onSubscribe: v,
            onClose: R,
          } = e,
          b = (0, o.useStateFromStores)([M.default], () => {
            let e = M.default.getCurrentUser();
            return (
              a(
                null != e,
                "PremiumProfilePreviewModal: user cannot be undefined"
              ),
              e
            );
          }),
          h = (0, d.default)(b.id),
          [x, L] = (0, o.useStateFromStoresArray)([E.default], () => [
            E.default.findActivity(
              b.id,
              e => e.type === m.ActivityTypes.CUSTOM_STATUS
            ),
            E.default.getStatus(b.id),
          ]),
          j = (0, T.useUID)();
        if (
          (l.useEffect(() => {
            I.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
              type: S.PremiumUpsellTypes.ANIMATED_AVATAR_PREVIEW_GIF_MODAL,
            });
          }, []),
          null != r && null != U)
        )
          throw Error("Invalid Preview Modal Configuration!");
        if (null != r) s = _.default.Messages.PREMIUM_PREVIEW_JOIN_AVATAR;
        else if (null != U) s = _.default.Messages.PREMIUM_PREVIEW_JOIN_BANNER;
        else throw Error("Invalid Preview Modal Configuration!");
        return (0, i.jsx)(n.ModalRoot, {
          className: y.premiumProfilePreviewModal,
          transitionState: t,
          size: n.ModalSize.SMALL,
          "aria-labelledby": j,
          children: (0, i.jsxs)("div", {
            className: y.premiumProfilePreviewContent,
            children: [
              (0, i.jsxs)(f.default, {
                className: y.userPopoutContainer,
                user: b,
                profileType: A.UserProfileTypes.POPOUT,
                children: [
                  (0, i.jsx)(c.default, {
                    bannerSrc: U,
                    user: b,
                    displayProfile: h,
                    onClose: () => {},
                    profileType: A.UserProfileTypes.POPOUT,
                    showPremiumBadgeUpsell: !1,
                    isHovering: !1,
                    allowEdit: !1,
                  }),
                  (0, i.jsx)(p.UserPopoutAvatar, {
                    avatarSrc: r,
                    user: b,
                    displayProfile: h,
                    status: L,
                    isMobile: !1,
                    onClose: R,
                    disableUserProfileLink: !0,
                    hasBanner: (null == h ? void 0 : h.banner) != null,
                    profileType: A.UserProfileTypes.POPOUT,
                  }),
                  (0, i.jsx)(p.UserPopoutBadgeList, { user: b }),
                  (0, i.jsx)(f.default.Inner, {
                    children: (0, i.jsx)(P.default, {
                      activity: null,
                      customStatusActivity: x,
                      displayProfile: h,
                      user: b,
                      onClose: () => {},
                      canDM: !1,
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: y.upsellSection,
                children: [
                  (0, i.jsx)(n.Text, {
                    className: y.joinText,
                    variant: "text-sm/normal",
                    children: s,
                  }),
                  (0, i.jsx)(u.default, {
                    buttonText: _.default.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
                    subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
                    className: y.premiumSubscribeButton,
                    size: n.Button.Sizes.SMALL,
                    premiumModalAnalyticsLocation: {
                      section: m.AnalyticsSections.SETTINGS_EDIT_PROFILE,
                      object: m.AnalyticsObjects.BUTTON_CTA,
                    },
                    onSubscribeModalClose: e => {
                      e && (null == v || v(), R());
                    },
                  }),
                  (0, i.jsx)(n.Button, {
                    onClick: R,
                    size: n.Button.Sizes.SMALL,
                    color: n.Button.Colors.PRIMARY,
                    look: n.Button.Looks.FILLED,
                    children: _.default.Messages.PREMIUM_PREVIEW_EXIT,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=0885a0f905062af035a6.js.map

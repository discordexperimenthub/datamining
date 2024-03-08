(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10094"],
  {
    499237: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var s = a("37983"),
        i = a("884691"),
        n = a("77078"),
        l = a("79112"),
        o = a("635956"),
        r = a("599110"),
        c = a("49111"),
        d = a("646718"),
        E = a("782340"),
        M = a("58200"),
        u = e => {
          let { transitionState: t, onClose: a } = e;
          return (
            i.useEffect(() => {
              r.default.track(c.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: d.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_MODAL,
              });
            }, []),
            (0, s.jsxs)(n.ModalRoot, {
              transitionState: t,
              size: n.ModalSize.SMALL,
              "aria-label": "",
              children: [
                (0, s.jsxs)(n.ModalContent, {
                  className: M.content,
                  children: [
                    (0, s.jsx)("div", { role: "image", className: M.image }),
                    (0, s.jsx)(n.Heading, {
                      variant: "heading-xl/semibold",
                      className: M.header,
                      children:
                        E.default.Messages
                          .AUTOCOMPLETE_EMOJI_UPSELL_MODAL_HEADER,
                    }),
                    (0, s.jsx)(n.Text, {
                      variant: "text-md/normal",
                      children:
                        E.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_BLURB.format(
                          {
                            onLearnMore: () => {
                              a(),
                                l.default.open(c.UserSettingsSections.PREMIUM);
                            },
                          }
                        ),
                    }),
                  ],
                }),
                (0, s.jsx)(n.ModalFooter, {
                  children: (0, s.jsx)(o.default, {
                    onClick: a,
                    buttonText: "Get Nitro",
                    subscriptionTier: d.PremiumSubscriptionSKUs.TIER_2,
                    premiumModalAnalyticsLocation: {
                      page: c.AnalyticsPages
                        .CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL,
                    },
                  }),
                }),
                (0, s.jsx)(n.ModalCloseButton, {
                  className: M.closeButton,
                  onClick: a,
                }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=4ed4378717d1538b0b73.js.map

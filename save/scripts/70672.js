(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70672"],
  {
    974126: function (e, t, s) {
      "use strict";
      e.exports = s.p + "11d7bf0570c566baf4c1.mov";
    },
    790255: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        });
      var a = s("37983"),
        i = s("884691"),
        n = s("446674"),
        l = s("151426"),
        r = s("77078"),
        o = s("206230"),
        d = s("592407"),
        c = s("305961"),
        u = s("476765"),
        m = s("58608"),
        f = s("599110"),
        h = s("179803"),
        N = s("75061"),
        x = s("974126"),
        I = s("49111"),
        D = s("994428"),
        C = s("782340"),
        _ = s("370102");
      function g(e) {
        let { guildId: t, transitionState: s, onClose: g } = e,
          j = (0, u.useUID)(),
          L = (0, n.useStateFromStores)(
            [o.default],
            () => o.default.useReducedMotion
          ),
          p = (0, n.useStateFromStores)([c.default], () =>
            c.default.getGuild(t)
          );
        return (i.useEffect(() => {
          f.default.track(I.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
            type: l.DismissibleContent[
              l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2
            ],
            guild_id: t,
          });
        }, [t]),
        null == p)
          ? null
          : (0, a.jsxs)(r.ModalRoot, {
              transitionState: s,
              "aria-labelledby": j,
              size: r.ModalSize.LARGE,
              className: _.modal,
              children: [
                (0, a.jsxs)("div", {
                  className: _.content,
                  children: [
                    (0, a.jsx)(r.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: _.header,
                      children:
                        C.default.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE,
                    }),
                    (0, a.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        C.default.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format(
                          { guildName: p.name }
                        ),
                    }),
                    (0, a.jsxs)("div", {
                      className: _.testimonials,
                      children: [
                        (0, a.jsx)("div", {
                          className: _.designBuddiesContainer,
                          children: (0, a.jsx)(N.default, {
                            message:
                              C.default.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                            adminTitle:
                              C.default.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
                            profilePic:
                              "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
                            emphasisColor: "text-positive",
                            arrowPosition: "right",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: _.valorantContainer,
                          children: (0, a.jsx)(N.default, {
                            message:
                              C.default.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                            adminTitle:
                              C.default.Messages
                                .GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
                            profilePic:
                              "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
                            emphasisColor: "text-warning",
                            arrowPosition: "left",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: _.buttonContainer,
                      children: [
                        (0, a.jsx)(r.Button, {
                          onClick: () => g(),
                          look: r.Button.Looks.OUTLINED,
                          color: r.Button.Colors.PRIMARY,
                          children: C.default.Messages.CLOSE,
                        }),
                        (0, a.jsx)(r.Button, {
                          onClick: () => {
                            f.default.track(I.AnalyticEvents.UPSELL_CLICKED, {
                              type: l.DismissibleContent[
                                l.DismissibleContent
                                  .GUILD_ONBOARDING_UPSELL_MODAL_V2
                              ],
                              action: "primary",
                            }),
                              d.default.open(
                                t,
                                I.GuildSettingsSections.ONBOARDING
                              ),
                              g(D.ContentDismissActionType.PRIMARY),
                              (0, h.dismissedGuildOnboardingUpsell)(
                                p.id,
                                l.DismissibleContent
                                  .GUILD_ONBOARDING_UPSELL_MODAL_V2
                              );
                          },
                          children: C.default.Messages.CHECK_IT_OUT,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: _.videoContainer,
                  children: (0, a.jsx)(m.default, {
                    className: _.video,
                    loop: !L,
                    autoPlay: !L,
                    playsInline: !0,
                    "data-testid": "onboarding-demo",
                    children: (0, a.jsx)(
                      "source",
                      { src: x, type: "video/mp4" },
                      "hevc"
                    ),
                  }),
                }),
              ],
            });
      }
    },
    75061: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
          TestimonialHero: function () {
            return I;
          },
        }),
        s("222007");
      var a = s("37983"),
        i = s("884691"),
        n = s("414456"),
        l = s.n(n),
        r = s("907002"),
        o = s("446674"),
        d = s("77078"),
        c = s("206230"),
        u = s("246053"),
        m = s("782340"),
        f = s("148143");
      function h(e) {
        let {
          message: t,
          adminTitle: s,
          profilePic: i,
          emphasisColor: n = "interactive-normal",
          arrowPosition: r,
          className: o,
        } = e;
        return (0, a.jsxs)("div", {
          className: l(f.testimonialContainer, o),
          children: [
            (0, a.jsx)(N, {
              testimonial: {
                message: t,
                adminTitle: s,
                profilePic: i,
                emphasisColor: n,
              },
            }),
            (0, a.jsx)(d.Text, {
              variant: "text-lg/bold",
              className: f.quotes,
              children: "“",
            }),
            (0, a.jsx)("div", {
              className: l(f.arrow, {
                [f.arrowRight]: "right" === r,
                [f.arrowLeft]: "left" === r,
              }),
              children: (0, a.jsx)(x, {}),
            }),
          ],
        });
      }
      function N(e) {
        let { testimonial: t, className: s } = e,
          {
            message: i,
            profilePic: n,
            adminTitle: l,
            emphasisColor: r = "interactive-normal",
          } = t;
        return (0, a.jsxs)("div", {
          className: s,
          children: [
            (0, a.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: i.format({
                testimonialHook: (e, t) =>
                  (0, a.jsx)(
                    d.Text,
                    {
                      tag: "span",
                      variant: "text-sm/bold",
                      color: r,
                      children: e,
                    },
                    t
                  ),
              }),
            }),
            (0, a.jsxs)("div", {
              className: f.userContainer,
              children: [
                (0, a.jsx)(d.Avatar, {
                  src: n,
                  size: d.AvatarSizes.SIZE_16,
                  "aria-hidden": !0,
                }),
                (0, a.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: l,
                }),
              ],
            }),
          ],
        });
      }
      function x() {
        return (0, a.jsx)("svg", {
          width: "12",
          height: "20",
          viewBox: "0 0 12 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsx)("path", {
            d: "M11.5 0.662598H0L11.5 19.1626V0.662598Z",
            fill: "#2B2D31",
          }),
        });
      }
      function I(e) {
        let { testimonials: t } = e,
          [[s, n], l] = i.useState([0, "right"]),
          r = i.useCallback(() => {
            l(e => {
              let [s] = e;
              return 0 === s ? [t.length - 1, "left"] : [s - 1, "left"];
            });
          }, [l, t.length]),
          o = i.useCallback(() => {
            l(e => {
              let [s] = e;
              return [(s + 1) % t.length, "right"];
            });
          }, [l, t.length]),
          c = t[s],
          h = i.useCallback(
            (e, t, s, i) =>
              (0, a.jsx)(D, { item: t, state: s, cleanup: i, direction: n }, e),
            [n]
          );
        return (0, a.jsxs)("div", {
          className: f.testimonialHeroContainer,
          children: [
            (0, a.jsx)("div", {
              className: f.animatedContainer,
              children: (0, a.jsx)(d.TransitionGroup, {
                items: [c],
                renderItem: h,
                getItemKey: e => e.adminTitle,
              }),
            }),
            (0, a.jsx)(d.Text, {
              variant: "text-lg/bold",
              className: f.heroQuotes,
              children: "“",
            }),
            (0, a.jsxs)("div", {
              className: f.testimonialsControls,
              children: [
                (0, a.jsxs)(d.Button, {
                  className: f.testimonialControl,
                  innerClassName: f.testimonialControlInner,
                  onClick: r,
                  size: d.Button.Sizes.MIN,
                  color: d.Button.Colors.PRIMARY,
                  children: [
                    (0, a.jsx)(u.default, {
                      className: f.testimonialControlIcon,
                      direction: u.default.Directions.LEFT,
                    }),
                    (0, a.jsx)(d.HiddenVisually, {
                      children: m.default.Messages.BACK,
                    }),
                  ],
                }),
                (0, a.jsxs)(d.Button, {
                  className: f.testimonialControl,
                  innerClassName: f.testimonialControlInner,
                  onClick: o,
                  size: d.Button.Sizes.MIN,
                  color: d.Button.Colors.PRIMARY,
                  children: [
                    (0, a.jsx)(u.default, {
                      className: f.testimonialControlIcon,
                      direction: u.default.Directions.RIGHT,
                    }),
                    (0, a.jsx)(d.HiddenVisually, {
                      children: m.default.Messages.NEXT,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function D(e) {
        let { item: t, state: s, cleanup: i, direction: n } = e,
          l = (0, o.useStateFromStores)(
            [c.default],
            () => c.default.useReducedMotion
          ),
          [u] = (0, r.useSpring)(() => {
            switch (s) {
              case d.TransitionStates.ENTERED:
                return {
                  from: {
                    transform:
                      "right" === n ? "translateX(150%)" : "translate(-150%)",
                  },
                  to: { transform: "translateX(0%)" },
                  immediate: l,
                };
              case d.TransitionStates.YEETED:
                return {
                  from: { transform: "translateX(0%)" },
                  to: {
                    transform:
                      "right" === n ? "translateX(-150%)" : "translate(150%)",
                  },
                  immediate: l,
                  onRest: i,
                };
              default:
                return {};
            }
          }, [s]);
        return (0, a.jsx)(r.animated.div, {
          style: u,
          children: (0, a.jsx)(N, { className: f.testimonial, testimonial: t }),
        });
      }
    },
  },
]);
//# sourceMappingURL=e3f25ca78fd6620b066c.js.map

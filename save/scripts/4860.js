(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4860"],
  {
    68422: function (e, s, a) {
      "use strict";
      e.exports = a.p + "467602d632b5f9c1ce4b.svg";
    },
    578817: function (e, s, a) {
      "use strict";
      e.exports = a.p + "d4d9f2bff23beec65b1f.svg";
    },
    502155: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return x;
          },
        }),
        a("222007");
      var l = a("37983"),
        t = a("884691"),
        n = a("446674"),
        i = a("77078"),
        d = a("716241"),
        r = a("592407"),
        c = a("525065"),
        o = a("476765"),
        u = a("324105"),
        m = a("49111"),
        h = a("782340"),
        f = a("749498"),
        x = e => {
          let { transitionState: s, onClose: a, guild: x } = e,
            v = (0, o.useUID)();
          t.useEffect(() => {
            d.default.trackWithMetadata(m.AnalyticEvents.OPEN_MODAL, {
              type: m.AnalyticsSections.DISCOVERY_SETUP_SUCCESS_MODAL,
            });
          }, []);
          let [N, S] = (0, n.useStateFromStoresArray)(
            [c.default],
            () => [
              c.default.getOnlineCount(x.id),
              c.default.getMemberCount(x.id),
            ],
            [x.id]
          );
          return (0, l.jsxs)(i.ModalRoot, {
            transitionState: s,
            "aria-labelledby": v,
            className: f.root,
            children: [
              (0, l.jsx)(i.ModalHeader, {
                className: f.modalHeader,
                separator: !1,
                children: (0, l.jsx)(i.ModalCloseButton, {
                  onClick: a,
                  className: f.modalCloseButton,
                }),
              }),
              (0, l.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                id: v,
                className: f.header,
                children:
                  h.default.Messages
                    .SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER,
              }),
              (0, l.jsxs)(i.ModalContent, {
                className: f.modalContent,
                children: [
                  (0, l.jsx)(i.Text, {
                    variant: "text-md/normal",
                    className: f.subheader,
                    children:
                      h.default.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format(
                        {
                          onServerSettingsClick: () => {
                            a(),
                              r.default.setSection(
                                m.GuildSettingsSections.DISCOVERY
                              ),
                              d.default.trackWithMetadata(
                                m.AnalyticEvents.SETTINGS_PANE_VIEWED,
                                {
                                  settings_type: "guild",
                                  origin_pane: "DISCOVERY",
                                  destination_pane: "DISCOVERY",
                                }
                              );
                          },
                        }
                      ),
                  }),
                  (0, l.jsx)(u.default, {
                    className: f.previewCard,
                    guild: x,
                    presenceCount: N,
                    memberCount: S,
                  }),
                ],
              }),
              (0, l.jsx)(i.ModalFooter, {
                children: (0, l.jsx)(i.Button, {
                  onClick: a,
                  children: h.default.Messages.GOT_IT,
                }),
              }),
            ],
          });
        };
    },
    324105: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return g;
          },
        }),
        a("222007");
      var l = a("37983"),
        t = a("884691"),
        n = a("414456"),
        i = a.n(n),
        d = a("819855"),
        r = a("77078"),
        c = a("841098"),
        o = a("407063"),
        u = a("580357"),
        m = a("587974"),
        h = a("315102"),
        f = a("159885"),
        x = a("782340"),
        v = a("534045"),
        N = a("68422"),
        S = a("578817");
      let j = [16, 16, 14, 14, 12, 10, 8];
      var g = function (e) {
        var s, a;
        let {
            guild: n,
            disabled: g,
            small: C,
            loading: E = !1,
            description: p,
            memberCount: I,
            presenceCount: _,
            className: M,
          } = e,
          R = (0, c.default)(),
          [T, O] = t.useState(!1);
        if (null == n || E)
          return (0, l.jsx)("div", {
            className: i(M, v.card, v.cardPlaceholder, {
              [v.cardSmall]: C,
              [v.cardDisabled]: g,
            }),
          });
        let { name: D } = n,
          A =
            null != n.discoverySplash && /^data:/.test(n.discoverySplash)
              ? n.discoverySplash
              : h.default.getGuildDiscoverySplashURL({
                  id: n.id,
                  splash: n.discoverySplash,
                  size: 240 * (0, o.getDevicePixelRatio)(),
                }),
          b = (0, d.isThemeDark)(R) ? N : S,
          y =
            null !==
              (s = h.default.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 40,
              })) && void 0 !== s
              ? s
              : void 0,
          k = null != n.description ? n.description : p,
          L = null != I ? I : null == n ? void 0 : n.memberCount,
          U = null != _ ? _ : null == n ? void 0 : n.presenceCount,
          V = null;
        if (null != y)
          V = (0, l.jsx)("img", { src: y, alt: "", className: v.avatar });
        else {
          let e = (0, f.getAcronym)(n.name);
          V = (0, l.jsx)("div", {
            className: v.defaultIcon,
            children: (0, l.jsx)(r.Text, {
              className: v.acronym,
              style: {
                fontSize:
                  null !== (a = j[e.length]) && void 0 !== a
                    ? a
                    : j[j.length - 1],
              },
              variant: "text-sm/normal",
              children: e,
            }),
          });
        }
        return (0, l.jsxs)("div", {
          className: i(M, v.card, {
            [v.cardSmall]: C,
            [v.cardDisabled]: g,
            [v.splashLoaded]: T,
          }),
          children: [
            (0, l.jsxs)("div", {
              className: v.cardHeader,
              children: [
                (0, l.jsx)("div", {
                  className: v.splash,
                  children: (0, l.jsx)("img", {
                    src: null != A ? A : b,
                    alt: "",
                    className: v.splashImage,
                    onLoad: () => O(!0),
                  }),
                }),
                (0, l.jsx)("div", {
                  className: v.guildIcon,
                  children: (0, l.jsx)(m.default, {
                    mask: m.default.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, l.jsx)("div", {
                      className: v.iconMask,
                      children: (0, l.jsx)(m.default, {
                        mask: m.default.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: null != V ? V : null,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: v.guildInfo,
              children: [
                (0, l.jsxs)("div", {
                  className: v.title,
                  children: [
                    (0, l.jsx)(u.default, {
                      className: v.verifiedIcon,
                      guild: n,
                      tooltipColor: r.Tooltip.Colors.PRIMARY,
                    }),
                    (0, l.jsx)(r.Text, {
                      className: v.guildName,
                      variant: "text-md/normal",
                      children: (0, l.jsx)("span", { children: D }),
                    }),
                  ],
                }),
                (0, l.jsx)(r.Text, {
                  className: v.description,
                  variant: "text-sm/normal",
                  children: (0, l.jsx)("span", { children: k }),
                }),
                (0, l.jsxs)("div", {
                  className: v.memberInfo,
                  children: [
                    null != U &&
                      (0, l.jsxs)("div", {
                        className: v.memberCount,
                        children: [
                          (0, l.jsx)("div", { className: v.dotOnline }),
                          (0, l.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            children: C
                              ? x.default.Messages.NUMBERS_ONLY.format({
                                  count: U,
                                })
                              : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                  { membersOnline: U }
                                ),
                          }),
                        ],
                      }),
                    null != L &&
                      (0, l.jsxs)("div", {
                        className: v.memberCount,
                        children: [
                          (0, l.jsx)("div", { className: v.dotOffline }),
                          (0, l.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            children: C
                              ? x.default.Messages.NUMBERS_ONLY.format({
                                  count: L,
                                })
                              : x.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                                  { count: L }
                                ),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    931138: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return o;
          },
        });
      var l = a("37983"),
        t = a("884691"),
        n = a("414456"),
        i = a.n(n),
        d = a("77078"),
        r = a("760607"),
        c = a("684133");
      function o(e) {
        let {
            children: s,
            size: a = 16,
            className: n,
            flowerStarClassName: o,
            ...u
          } = e,
          m = t.Children.only(s),
          h = (0, d.useRedesignIconContext)().enabled;
        return (0, l.jsxs)("div", {
          className: i(c.flowerStarContainer, n),
          style: { width: a, height: a },
          children: [
            (0, l.jsx)(r.default, { ...u, className: i(o, c.flowerStar) }),
            (0, l.jsx)("div", {
              className: i(c.childContainer, {
                [c.redesignIconChildContainer]: h,
              }),
              children: m,
            }),
          ],
        });
      }
    },
    760607: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return n;
          },
        });
      var l = a("37983");
      a("884691");
      var t = a("75196"),
        n = function (e) {
          let {
            width: s = 16,
            height: a = 16,
            color: n = "currentColor",
            foreground: i,
            ...d
          } = e;
          return (0, l.jsx)("svg", {
            ...(0, t.default)(d),
            width: s,
            height: a,
            viewBox: "0 0 16 15.2",
            children: (0, l.jsx)("path", {
              className: i,
              fill: n,
              fillRule: "evenodd",
              d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z",
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=c3d80bf99f78a9afa139.js.map

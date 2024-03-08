(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57257"],
  {
    805828: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          WELCOME_SCREEN_TYPE: function () {
            return t;
          },
          WELCOME_EMOJI_TOOLTIP_STORAGE_KEY: function () {
            return n;
          },
        });
      let t = "Guild Welcome Screen",
        n = "hasClickedWelcomeEmojiPicker";
    },
    900257: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return M;
          },
        }),
        a("424973");
      var t = a("37983"),
        n = a("884691"),
        i = a("446674"),
        s = a("77078"),
        o = a("430568"),
        d = a("419830"),
        c = a("385976"),
        r = a("867805"),
        u = a("393414"),
        m = a("42203"),
        E = a("305961"),
        h = a("957255"),
        f = a("580357"),
        _ = a("476263"),
        C = a("476765"),
        N = a("461380"),
        j = a("593195"),
        p = a("587974"),
        x = a("599110"),
        S = a("223170"),
        g = a("59811"),
        I = a("805828"),
        k = a("49111"),
        v = a("843455"),
        O = a("782340"),
        L = a("750235");
      let T = e => {
        var l;
        let { channelData: a, onClose: n, trackOptionClick: E } = e,
          f = (0, i.useStateFromStores)([m.default], () =>
            m.default.getChannel(a.channel_id)
          ),
          _ = (0, i.useStateFromStores)(
            [h.default],
            () => null != f && h.default.can(v.Permissions.VIEW_CHANNEL, f)
          ),
          C = (0, i.useStateFromStores)(
            [c.default],
            () =>
              null != a.emoji_id
                ? c.default.getCustomEmojiById(a.emoji_id)
                : null,
            [a.emoji_id]
          ),
          p =
            null != a.emoji_name
              ? r.default.getByName(
                  r.default.convertSurrogateToName(a.emoji_name, !1)
                )
              : null,
          x =
            null !== (l = (0, d.getChannelIconComponent)(f)) && void 0 !== l
              ? l
              : j.default;
        return null != f && _
          ? (0, t.jsxs)(s.Clickable, {
              className: L.optionContainer,
              onClick: () => {
                E(), n(), (0, u.transitionToGuild)(f.guild_id, f.id);
              },
              children: [
                null != C || null != p
                  ? (0, t.jsx)(o.default, {
                      emojiName:
                        null != a.emoji_id
                          ? null == C
                            ? void 0
                            : C.name
                          : a.emoji_name,
                      animated: null != C && C.animated,
                      emojiId: null == C ? void 0 : C.id,
                      autoplay: !0,
                      className: L.optionEmoji,
                    })
                  : (0, t.jsx)(x, { className: L.channelIcon }),
                (0, t.jsxs)("div", {
                  className: L.optionTextContainer,
                  children: [
                    (0, t.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: L.channelDescription,
                      children: a.description,
                    }),
                    (0, t.jsxs)(s.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        (0, t.jsx)(x, {
                          className: L.channelTitleIcon,
                          height: 12,
                          width: 12,
                        }),
                        (0, t.jsx)("span", { children: f.name }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(N.default, {
                  direction: N.default.Directions.RIGHT,
                  className: L.optionArrow,
                }),
              ],
            })
          : null;
      };
      var M = e => {
        var l;
        let { onClose: a, transitionState: o, guildId: d, isPreview: c } = e,
          r = (0, i.useStateFromStores)([E.default], () =>
            E.default.getGuild(d)
          ),
          {
            welcomeScreen: u,
            fetching: m,
            hasError: h,
          } = (0, i.useStateFromStoresObject)([g.default], () => ({
            welcomeScreen: g.default.get(d),
            fetching: g.default.isFetching(),
            hasError: g.default.hasError(),
          })),
          N = (0, C.useUID)();
        n.useEffect(() => {
          null == u && (0, S.fetchWelcomeScreen)(d);
        }, [d, u]),
          n.useEffect(() => {
            !1 === m && !0 === h && null == u && a();
          }, [m, h, a, u]),
          n.useEffect(() => {
            u === g.NO_WELCOME_SCREEN && !1 === m && a();
          }, [a, u, m]),
          n.useEffect(() => {
            !0 !== c &&
              x.default.track(k.AnalyticEvents.OPEN_MODAL, {
                type: I.WELCOME_SCREEN_TYPE,
                guild_id: d,
              });
          }, [d, c]);
        let j = n.useCallback(
          e => {
            var l;
            if (null == u || !0 === c) return;
            let a = [],
              t = [],
              n = !1;
            null === (l = u.welcome_channels) ||
              void 0 === l ||
              l.forEach(e => {
                a.push(e.description),
                  t.push(e.channel_id),
                  null != e.emoji_id && (n = !0);
              }),
              x.default.track(
                k.AnalyticEvents.GUILD_WELCOME_SCREEN_OPTION_SELECTED,
                {
                  index: e,
                  guild_id: d,
                  options: a,
                  options_channel_ids: t,
                  guild_description: u.description,
                  has_custom_emojis: n,
                }
              );
          },
          [d, c, u]
        );
        return null == r
          ? null
          : null == u
            ? (0, t.jsx)(s.ModalRoot, {
                transitionState: o,
                className: L.main,
                "aria-label": O.default.Messages.LOADING,
                children: (0, t.jsx)(s.Spinner, {
                  type: s.Spinner.Type.SPINNING_CIRCLE,
                }),
              })
            : (0, t.jsxs)(s.ModalRoot, {
                transitionState: o,
                className: L.main,
                "aria-labelledby": N,
                children: [
                  (0, t.jsx)(s.ModalCloseButton, {
                    onClick: a,
                    className: L.close,
                  }),
                  (0, t.jsx)(p.default, {
                    mask: p.default.Masks.SQUIRCLE,
                    width: 64,
                    height: 64,
                    className: L.guildIcon,
                    children: (0, t.jsx)(_.default, {
                      size: _.default.Sizes.LARGER,
                      guild: r,
                      active: !0,
                      animate: !0,
                      tabIndex: -1,
                    }),
                  }),
                  (0, t.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    className: L.header,
                    id: N,
                    children: O.default.Messages.WELCOME_SCREEN_TITLE.format({
                      guildName: r.name,
                      guildNameHook: (e, l) =>
                        (0, t.jsxs)(
                          "span",
                          {
                            children: [
                              (0, t.jsx)(f.default, {
                                guild: r,
                                className: L.headerGuildBadge,
                                flowerStarClassName: L.flowerStar,
                                tooltipColor: s.Tooltip.Colors.PRIMARY,
                              }),
                              (0, t.jsx)("strong", {
                                className: L.headerGuildName,
                                children: e,
                              }),
                            ],
                          },
                          l
                        ),
                    }),
                  }),
                  null != u.description
                    ? (0, t.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: L.guildDescription,
                        children: u.description,
                      })
                    : null,
                  (0, t.jsx)(s.FormTitle, {
                    className: L.choiceHeader,
                    children: O.default.Messages.WELCOME_SCREEN_CHOICE_HEADER,
                  }),
                  (0, t.jsx)("div", {
                    className: L.options,
                    children:
                      null === (l = u.welcome_channels) || void 0 === l
                        ? void 0
                        : l.map((e, l) =>
                            (0, t.jsx)(
                              T,
                              {
                                channelData: e,
                                trackOptionClick: () => j(l),
                                onClose: a,
                              },
                              "".concat(e.channel_id, "-").concat(l)
                            )
                          ),
                  }),
                  (0, t.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: L.skipColor,
                    className: L.skip,
                    onClick: a,
                    children: O.default.Messages.WELCOME_SCREEN_SKIP,
                  }),
                ],
              });
      };
    },
  },
]);
//# sourceMappingURL=a42b82a784a8c510ec9d.js.map

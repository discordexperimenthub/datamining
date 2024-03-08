(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13743"],
  {
    936992: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          GuildSelectModalHeader: function () {
            return U;
          },
          GuildSelectModalBody: function () {
            return L;
          },
          default: function () {
            return R;
          },
        }),
        t("808653"),
        t("424973"),
        t("222007");
      var l = t("37983"),
        s = t("884691"),
        d = t("448105"),
        n = t.n(d),
        i = t("446674"),
        r = t("77078"),
        o = t("54239"),
        u = t("393414"),
        c = t("305961"),
        _ = t("677099"),
        m = t("476263"),
        I = t("810567"),
        S = t("427459"),
        M = t("49111"),
        C = t("782340"),
        E = t("198591");
      function U(e) {
        let { isTransfer: a = !1, setQuery: t, query: s } = e;
        return (0, l.jsxs)(r.ModalHeader, {
          className: E.selectHeaderContainer,
          children: [
            (0, l.jsx)(r.Heading, {
              className: E.selectHeader,
              variant: "heading-md/semibold",
              children: a
                ? C.default.Messages
                    .PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER
                : C.default.Messages
                    .PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER,
            }),
            (0, l.jsx)(I.default, {
              size: I.default.Sizes.MEDIUM,
              placeholder:
                C.default.Messages
                  .PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
              "aria-label":
                C.default.Messages
                  .PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
              className: E.selectSearch,
              query: s,
              onChange: t,
              onClear: () => t(""),
            }),
          ],
        });
      }
      function L(e) {
        let {
            isTransfer: a = !1,
            selectedSlotGuilds: t,
            onClose: s,
            onSelectGuild: d,
            query: I,
          } = e,
          U = (0, i.useStateFromStores)([_.default], () =>
            _.default.getFlattenedGuildIds()
          ),
          L = (0, i.useStateFromStoresArray)([c.default], () =>
            U.reduce((e, a) => {
              let l = c.default.getGuild(a);
              return null == l || (null != t && t.some(e => e.id === a))
                ? e
                : ((I.length <= 0 ||
                    n(
                      I.toLowerCase(),
                      null == l ? void 0 : l.name.toLowerCase()
                    )) &&
                    e.push(l),
                  e);
            }, [])
          );
        function R() {
          s(), (0, o.popLayer)(), (0, u.transitionTo)(M.Routes.GUILD_DISCOVERY);
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            0 === L.length &&
              (0, l.jsx)("div", {
                className: E.emptyStateWrapper,
                children: (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children:
                    0 === U.length
                      ? C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format(
                          {
                            publicGuildDirectoryHook: (e, a) =>
                              (0, l.jsx)(
                                r.Clickable,
                                { onClick: R, tag: "a", children: e },
                                a
                              ),
                          }
                        )
                      : C.default.Messages
                          .PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND,
                }),
              }),
            L.map(e =>
              (0, l.jsxs)(
                r.Clickable,
                {
                  className: E.selectGuild,
                  onClick: () => {
                    d(e);
                  },
                  children: [
                    (0, l.jsx)(m.default, {
                      className: E.selectGuildIcon,
                      guild: e,
                      size: m.default.Sizes.SMALL,
                    }),
                    (0, l.jsxs)("div", {
                      className: E.selectGuildCopy,
                      children: [
                        (0, l.jsx)(r.Text, {
                          className: E.selectGuildName,
                          variant: "text-md/normal",
                          children: e.name,
                        }),
                        (0, l.jsx)(r.Text, {
                          className: E.selectGuildLevel,
                          color: "text-muted",
                          variant: "text-xs/normal",
                          children: (0, S.getTierName)(e.premiumTier),
                        }),
                      ],
                    }),
                    (0, l.jsx)(r.Text, {
                      className: E.selectGuildPseudoCta,
                      color: "always-white",
                      variant: "text-sm/medium",
                      children: a
                        ? C.default.Messages
                            .PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE
                        : C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION,
                    }),
                  ],
                },
                e.id
              )
            ),
          ],
        });
      }
      function R(e) {
        let { onClose: a, onSelectGuild: t, transitionState: d } = e,
          [n, i] = s.useState("");
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: d,
          className: E.modal,
          size: r.ModalSize.SMALL,
          children: [
            (0, l.jsx)(U, { query: n, setQuery: i }),
            (0, l.jsx)(r.ModalContent, {
              className: E.modalContent,
              children: (0, l.jsx)(L, {
                onClose: a,
                onSelectGuild: t,
                query: n,
              }),
            }),
            (0, l.jsx)(r.ModalCloseButton, {
              className: E.modalCloseButton,
              onClick: a,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=75cdc2557a96a0d589c5.js.map

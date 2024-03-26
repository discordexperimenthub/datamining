(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83197"],
  {
    647924: function (e, s, t) {
      "use strict";
      e.exports = t.p + "2bd9899e33421a2465ae.svg";
    },
    970143: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return E;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("116788"),
        n = t("768961"),
        r = t("224701"),
        c = t("77078"),
        i = t("145131"),
        o = t("701909"),
        d = t("588025"),
        u = t("49111"),
        S = t("782340"),
        m = t("916183"),
        h = t("647924");
      function E(e) {
        let {
            transitionState: s,
            onClose: t,
            questContent: l,
            questConfig: n,
          } = e,
          r =
            l === d.QuestContent.QUEST_BAR
              ? S.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format(
                  { gamePublisher: n.messages.gamePublisher }
                )
              : S.default.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format(
                  {
                    gamePublisher: n.messages.gamePublisher,
                    gameTitle: n.messages.gameTitle,
                  }
                );
        return (0, a.jsxs)(c.ModalRoot, {
          transitionState: s,
          size: c.ModalSize.DYNAMIC,
          className: m.modalRoot,
          children: [
            (0, a.jsxs)(c.ModalHeader, {
              direction: i.default.Direction.VERTICAL,
              separator: !1,
              className: m.modalHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: m.modalTop,
                  children: [
                    (0, a.jsx)("div", {
                      className: m.iconFrame,
                      children: (0, a.jsx)("img", {
                        className: m.icon,
                        alt: "",
                        src: h,
                      }),
                    }),
                    (0, a.jsx)(c.ModalCloseButton, {
                      className: m.closeBtn,
                      onClick: t,
                    }),
                  ],
                }),
                (0, a.jsx)(c.Heading, {
                  variant: "heading-xl/bold",
                  children: S.default.Messages.QUESTS_DISCLOSURE_LABEL,
                }),
              ],
            }),
            (0, a.jsxs)(c.ModalContent, {
              className: m.modalContent,
              children: [
                (0, a.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: m.upperBodyText,
                  children: r,
                }),
                (0, a.jsx)(x, { questContent: l }),
                (0, a.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children:
                    S.default.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
                      privacySettingsUrl: o.default.getArticleURL(
                        u.HelpdeskArticles.QUESTS_PRIVACY_CONTROLS
                      ),
                    }),
                }),
              ],
            }),
            (0, a.jsx)(c.ModalFooter, {
              className: m.footer,
              children: (0, a.jsx)(c.Button, {
                onClick: t,
                children: S.default.Messages.CLOSE,
              }),
            }),
          ],
        });
      }
      function x(e) {
        let { questContent: s } = e;
        switch (s) {
          case d.QuestContent.QUEST_BAR:
            return (0, a.jsxs)("ul", {
              className: m.targetList,
              children: [
                (0, a.jsx)(T, {
                  icon: n.GlobeEarthIcon,
                  children: S.default.Messages.QUESTS_DISCLOSURE_LOCATION,
                }),
                (0, a.jsx)(T, {
                  icon: r.UserIcon,
                  children: S.default.Messages.QUESTS_DISCLOSURE_AGE,
                }),
                (0, a.jsx)(T, {
                  icon: l.GameControllerIcon,
                  children: S.default.Messages.QUESTS_DISCLOSURE_ACTIVITY,
                }),
              ],
            });
          case d.QuestContent.ACTIVITY_PANEL:
          case d.QuestContent.QUESTS_EMBED:
          case d.QuestContent.QUEST_LIVE_STREAM:
            return (0, a.jsx)("ul", {
              className: m.targetList,
              children: (0, a.jsx)(T, {
                icon: l.GameControllerIcon,
                children: S.default.Messages.QUESTS_DISCLOSURE_ACTIVITY,
              }),
            });
          default:
            return null;
        }
      }
      function T(e) {
        let { icon: s, children: t } = e;
        return (0, a.jsxs)(c.Text, {
          variant: "text-sm/medium",
          tag: "li",
          className: m.targetItem,
          children: [(0, a.jsx)(s, { width: 16, height: 16 }), t],
        });
      }
    },
    224701: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          UserIcon: function () {
            return r;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        n = t("82169");
      let r = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...i
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=067f8935e06742f843a7.js.map

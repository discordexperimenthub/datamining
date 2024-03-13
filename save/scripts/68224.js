(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68224"],
  {
    923748: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n("254845");
      n.es(s, t);
    },
    275986: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          QuestsEntryContextMenu: function () {
            return p;
          },
          QuestsEntryContextMenuPopout: function () {
            return x;
          },
        });
      var s = n("37983"),
        u = n("884691"),
        o = n("821455"),
        i = n("923748"),
        l = n("551042"),
        a = n("77078"),
        r = n("272030"),
        c = n("79112"),
        d = n("545158"),
        C = n("124824"),
        E = n("306160"),
        _ = n("815496"),
        M = n("448881"),
        T = n("588025"),
        f = n("227231"),
        N = n("49111"),
        S = n("843455"),
        q = n("782340");
      function p(e) {
        var t;
        let u = (0, f.isDismissible)(e.questContent);
        return (0, s.jsxs)(a.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.closeContextMenu)();
          },
          navId: "quests-entry",
          "aria-label": q.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : S.NOOP,
          children: [
            (0, s.jsxs)(
              a.MenuGroup,
              {
                children: [
                  (0, s.jsx)(a.MenuItem, {
                    id: "get-game",
                    label: q.default.Messages.QUESTS_GET_THIS_GAME,
                    action: () => {
                      (0, _.trackQuestContentClicked)(
                        e.quest.id,
                        e.questContent,
                        _.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
                      ),
                        (0, d.default)(e.quest.config.getGameLink);
                    },
                    icon: i.LinkExternalMediumIcon,
                  }),
                  e.questContent === T.QuestContent.QUESTS_EMBED &&
                    (0, s.jsx)(a.MenuItem, {
                      id: "share-link",
                      label: q.default.Messages.QUESTS_SHARE_LINK,
                      action: () => {
                        (0, _.trackQuestContentClicked)(
                          e.quest.id,
                          e.questContent,
                          _.QuestContentCTA.CONTEXT_MENU_COPY_LINK
                        ),
                          (0, E.copy)((0, f.getQuestUrl)(e.quest.id));
                      },
                      icon: o.CopyIcon,
                    }),
                ],
              },
              "major-actions"
            ),
            (0, s.jsxs)(
              a.MenuGroup,
              {
                children: [
                  !e.hideLearnMore &&
                    (0, s.jsx)(a.MenuItem, {
                      id: "learn-more",
                      label: q.default.Messages.QUESTS_LEARN_MORE_V2,
                      action: () => {
                        (0, _.trackQuestContentClicked)(
                          e.quest.id,
                          e.questContent,
                          _.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
                        ),
                          c.default.open(N.UserSettingsSections.INVENTORY);
                      },
                    }),
                  e.shouldShowDisclosure &&
                    (0, s.jsx)(a.MenuItem, {
                      id: "display-disclosure",
                      label: q.default.Messages.QUESTS_DISCLOSURE_LABEL,
                      action: () => {
                        (0, _.trackQuestContentClicked)(
                          e.quest.id,
                          e.questContent,
                          _.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
                        ),
                          (0, l.openModalLazy)(async () => {
                            let { default: t } = await n
                              .el("970143")
                              .then(n.bind(n, "970143"));
                            return n =>
                              (0, s.jsx)(t, {
                                ...n,
                                questContent: e.questContent,
                                questConfig: e.quest.config,
                              });
                          });
                      },
                    }),
                  u &&
                    (0, s.jsx)(a.MenuItem, {
                      id: "hide-entrypoint",
                      label: q.default.Messages.QUESTS_HIDE_THIS,
                      action: () => {
                        (0, _.trackQuestContentClicked)(
                          e.quest.id,
                          e.questContent,
                          _.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
                        ),
                          (0, f.isDismissible)(e.questContent) &&
                            (0, M.dismissQuestContent)(
                              e.quest.id,
                              e.questContent
                            );
                      },
                      subtext: q.default.Messages.QUESTS_FIND_QUEST,
                    }),
                ],
              },
              "minor-actions"
            ),
          ],
        });
      }
      function x(e) {
        let {
            children: t,
            onOpen: n,
            onClose: o,
            preventIdle: i,
            quest: l,
            questContent: r,
            ...c
          } = e,
          d = u.useCallback(() => {
            (0, _.trackQuestContentClicked)(
              l.id,
              r,
              _.QuestContentCTA.OPEN_CONTEXT_MENU
            ),
              null != n && n();
          }, [n, l, r]);
        return (0, s.jsx)(a.Popout, {
          onRequestOpen: d,
          onRequestClose: o,
          renderPopout: e => {
            let { closePopout: t } = e;
            return i
              ? (0, s.jsx)(C.default, {
                  children: (0, s.jsx)(p, {
                    ...c,
                    quest: l,
                    questContent: r,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(p, { ...c, quest: l, questContent: r, onClose: t });
          },
          animation: a.Popout.Animation.NONE,
          children: e => t(e),
        });
      }
    },
    124824: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var s = n("37983"),
        u = n("884691"),
        o = n("550410");
      function i(e) {
        let { children: t } = e,
          { preventIdle: n, allowIdle: i } = (0, o.usePreventIdle)("popup");
        return (
          u.useEffect(() => (n(), () => i()), [i, n]),
          (0, s.jsx)(s.Fragment, { children: t })
        );
      }
    },
    254845: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LinkExternalMediumIcon: function () {
            return i;
          },
        });
      var s = n("37983");
      n("884691");
      var u = n("669491"),
        o = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = u.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...a
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, o.default)(a),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M7 4a1 1 0 0 0 0 2h9.59L4.29 18.3a1 1 0 1 0 1.42 1.4L18 7.42V17a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H7Z",
            className: l,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=045fcdb1812bea666b56.js.map

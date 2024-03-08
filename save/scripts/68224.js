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
            return q;
          },
          QuestsEntryContextMenuPopout: function () {
            return p;
          },
        });
      var s = n("37983"),
        u = n("884691"),
        o = n("821455"),
        i = n("923748"),
        l = n("551042"),
        a = n("77078"),
        r = n("272030"),
        c = n("545158"),
        d = n("124824"),
        C = n("306160"),
        E = n("815496"),
        _ = n("448881"),
        f = n("588025"),
        M = n("227231"),
        T = n("843455"),
        N = n("782340");
      function q(e) {
        var t;
        let u = (0, M.isDismissible)(e.questContent);
        return (0, s.jsxs)(a.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.closeContextMenu)();
          },
          navId: "quests-entry",
          "aria-label": N.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : T.NOOP,
          children: [
            (0, s.jsxs)(
              a.MenuGroup,
              {
                children: [
                  (0, s.jsx)(a.MenuItem, {
                    id: "get-game",
                    label: N.default.Messages.QUESTS_GET_THIS_GAME,
                    action: () => {
                      (0, E.trackQuestContentClicked)(
                        e.quest.id,
                        e.questContent,
                        E.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
                      ),
                        (0, c.default)(e.quest.config.getGameLink);
                    },
                    icon: i.LinkExternalMediumIcon,
                  }),
                  e.questContent === f.QuestContent.QUESTS_EMBED &&
                    (0, s.jsx)(a.MenuItem, {
                      id: "share-link",
                      label: N.default.Messages.QUESTS_SHARE_LINK,
                      action: () => {
                        (0, E.trackQuestContentClicked)(
                          e.quest.id,
                          e.questContent,
                          E.QuestContentCTA.CONTEXT_MENU_COPY_LINK
                        ),
                          (0, C.copy)((0, M.getQuestUrl)(e.quest.id));
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
                  e.shouldShowDisclosure &&
                    (0, s.jsx)(a.MenuItem, {
                      id: "display-disclosure",
                      label: N.default.Messages.QUESTS_DISCLOSURE_LABEL,
                      action: () => {
                        (0, E.trackQuestContentClicked)(
                          e.quest.id,
                          e.questContent,
                          E.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
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
                      label: N.default.Messages.QUESTS_HIDE_THIS,
                      action: () => {
                        (0, E.trackQuestContentClicked)(
                          e.quest.id,
                          e.questContent,
                          E.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
                        ),
                          (0, M.isDismissible)(e.questContent) &&
                            (0, _.dismissQuestContent)(
                              e.quest.id,
                              e.questContent
                            );
                      },
                      subtext: N.default.Messages.QUESTS_FIND_QUEST,
                    }),
                ],
              },
              "minor-actions"
            ),
          ],
        });
      }
      function p(e) {
        let {
            children: t,
            onOpen: n,
            onClose: o,
            preventIdle: i,
            quest: l,
            questContent: r,
            ...c
          } = e,
          C = u.useCallback(() => {
            (0, E.trackQuestContentClicked)(
              l.id,
              r,
              E.QuestContentCTA.OPEN_CONTEXT_MENU
            ),
              null != n && n();
          }, [n, l, r]);
        return (0, s.jsx)(a.Popout, {
          onRequestOpen: C,
          onRequestClose: o,
          renderPopout: e => {
            let { closePopout: t } = e;
            return i
              ? (0, s.jsx)(d.default, {
                  children: (0, s.jsx)(q, {
                    ...c,
                    quest: l,
                    questContent: r,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(q, { ...c, quest: l, questContent: r, onClose: t });
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
//# sourceMappingURL=333e1bd2aabd267941c8.js.map

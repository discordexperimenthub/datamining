(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67220"],
  {
    467914: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleSpellcheck: function () {
            return u;
          },
          learnWord: function () {
            return s;
          },
          unlearnWord: function () {
            return a;
          },
        });
      var l = n("913144");
      function u() {
        l.default.dispatch({ type: "SPELLCHECK_TOGGLE" });
      }
      function s(e) {
        l.default.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: e });
      }
      function a(e) {
        l.default.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: e });
      }
    },
    875602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("37983"),
        u = n("884691"),
        s = n("371621"),
        a = n("446674"),
        i = n("77078"),
        o = n("272030"),
        c = n("180748"),
        d = n("206230"),
        r = n("65997"),
        f = n("218525"),
        S = n("845579"),
        E = n("599110"),
        p = n("773336"),
        M = n("50885"),
        g = n("385887"),
        m = n("49111"),
        C = n("782340");
      function T(e) {
        var t, n, T, b, h, _, A, I, v;
        let {
            text: x,
            editor: L,
            target: k,
            onHeightUpdate: O,
            onSelect: j,
          } = e,
          G = u.useCallback(() => {
            (0, o.closeContextMenu)(() => {
              s.ReactEditor.focus(L),
                setTimeout(() => g.EditorUtils.focus(L), 0);
            });
          }, [L]),
          [N, R] = (0, f.default)({ text: x, target: k, onHeightUpdate: O }),
          y = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.isSubmitButtonEnabled
          ),
          U = (0, r.default)(),
          D = S.ShowCommandSuggestions.useSetting();
        if (!p.isPlatformEmbedded) return null;
        let H =
            null !==
              (A =
                null === (n = L.chatInputType) || void 0 === n
                  ? void 0
                  : null === (t = n.commands) || void 0 === t
                    ? void 0
                    : t.enabled) &&
            void 0 !== A &&
            A,
          P =
            null !==
              (I =
                null === (b = L.chatInputType) || void 0 === b
                  ? void 0
                  : null === (T = b.stickers) || void 0 === T
                    ? void 0
                    : T.autoSuggest) &&
            void 0 !== I &&
            I,
          W =
            null !==
              (v =
                null === (_ = L.chatInputType) || void 0 === _
                  ? void 0
                  : null === (h = _.submit) || void 0 === h
                    ? void 0
                    : h.button) &&
            void 0 !== v &&
            v,
          K = H || P,
          X =
            "" !== x
              ? [
                  (0, l.jsx)(
                    i.MenuItem,
                    {
                      id: "copy",
                      label: C.default.Messages.COPY,
                      hint: (0, p.isMac)() ? "⌘C" : "Ctrl+C",
                      action: () => setTimeout(() => M.default.copy(), 0),
                    },
                    "copy"
                  ),
                  (0, l.jsx)(
                    i.MenuItem,
                    {
                      id: "cut",
                      label: C.default.Messages.CUT,
                      hint: (0, p.isMac)() ? "⌘X" : "Ctrl+X",
                      action: () => setTimeout(() => M.default.cut(), 0),
                    },
                    "cut"
                  ),
                ]
              : null,
          w = (0, l.jsx)(i.MenuCheckboxItem, {
            id: "command-suggestions",
            label: C.default.Messages.SUGGEST_SLASH_COMMANDS,
            checked: D,
            action: () => {
              let e = !D;
              S.ShowCommandSuggestions.updateSetting(e),
                E.default.track(
                  m.AnalyticEvents.SLASH_COMMAND_SUGGESTIONS_TOGGLED,
                  {
                    enabled: e,
                    location: { object: m.AnalyticsObjects.CONTEXT_MENU },
                  }
                );
            },
          });
        return (0, l.jsxs)(i.Menu, {
          navId: "textarea-context",
          onClose: G,
          "aria-label": C.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
          onSelect: j,
          children: [
            K &&
              (0, l.jsxs)(i.MenuItem, {
                id: "suggestions",
                label: C.default.Messages.TEXTAREA_ACTIONS_SUGGESTIONS,
                children: [P && U, H && w],
              }),
            W &&
              (0, l.jsx)(i.MenuCheckboxItem, {
                id: "submit-button",
                label: C.default.Messages.TEXTAREA_ACTIONS_SUBMIT_BUTTON,
                checked: y,
                action: () => {
                  (0, c.toggleSubmitButton)();
                },
              }),
            (0, l.jsx)(i.MenuGroup, { children: N }),
            (0, l.jsx)(i.MenuGroup, { children: R }),
            (0, l.jsxs)(i.MenuGroup, {
              children: [
                X,
                (0, l.jsx)(i.MenuItem, {
                  id: "paste",
                  label: C.default.Messages.PASTE,
                  hint: (0, p.isMac)() ? "⌘V" : "Ctrl+V",
                  action: () => setTimeout(() => M.default.paste(), 0),
                }),
              ],
            }),
          ],
        });
      }
    },
    65997: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var l = n("37983");
      n("884691");
      var u = n("77078"),
        s = n("685665"),
        a = n("845579"),
        i = n("599110"),
        o = n("49111"),
        c = n("782340");
      function d() {
        let e = a.ExpressionSuggestionsEnabled.useSetting(),
          { analyticsLocations: t } = (0, s.default)();
        return (0, l.jsx)(u.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: c.default.Messages.SUGGEST_STICKERS,
          checked: e,
          action: () => {
            i.default.track(
              o.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED,
              {
                enabled: !e,
                location: { object: o.AnalyticsObjects.CONTEXT_MENU },
                location_stack: t,
              }
            ),
              a.ExpressionSuggestionsEnabled.updateSetting(!e);
          },
        });
      }
    },
    218525: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var l = n("37983"),
        u = n("884691"),
        s = n("118810"),
        a = n("446674"),
        i = n("77078"),
        o = n("467914"),
        c = n("769264"),
        d = n("701909"),
        r = n("749866"),
        f = n("49111"),
        S = n("782340");
      function E(e) {
        let { text: t = "", target: n } = e,
          E = (0, a.useStateFromStores)([c.default], () =>
            c.default.isEnabled()
          ),
          p = (0, a.useStateFromStores)(
            [c.default],
            () => c.default.hasLearnedWord(t),
            [t]
          ),
          M = u.useRef({ ...e, spellcheckEnabled: E });
        M.current = { ...e, spellcheckEnabled: E };
        let g = u.useRef(!1),
          [m, C] = u.useState(!1),
          [T, b] = u.useState([]),
          h = u.useCallback(() => {
            let {
              spellcheckEnabled: e,
              text: t,
              onHeightUpdate: n,
            } = M.current;
            e &&
              (0, r.isSupported)() &&
              Promise.all([
                (0, r.isMisspelled)(t, !0),
                (0, r.getCorrections)(t, !0),
              ]).then(e => {
                let [t, l] = e;
                g.current && (C(t), b(l), n());
              });
          }, []),
          _ = u.useCallback(() => {
            if (
              (0, s.isElement)(n, HTMLInputElement) ||
              (0, s.isElement)(n, HTMLTextAreaElement)
            ) {
              let { selectionStart: e, selectionEnd: t, value: l } = n;
              (n.value = ""),
                (n.value = l),
                "email" !== n.type &&
                  ((n.selectionStart = e), (n.selectionEnd = t));
            }
          }, [n]);
        if (
          (u.useEffect(() => {
            let e = (0, r.addResultListener)(h);
            return (
              (g.current = !0),
              () => {
                (g.current = !1), e();
              }
            );
          }, [h]),
          u.useEffect(() => {
            h();
          }, [t, E, h]),
          !(0, r.isSupported)())
        )
          return [null, null];
        let A = T.map((e, t) =>
            (0, l.jsx)(
              i.MenuItem,
              {
                id: "correction-".concat(t),
                label: e,
                action: () => {
                  (0, r.replaceWithCorrection)(e), n.focus();
                },
              },
              "correction-".concat(t)
            )
          ),
          I = (0, l.jsxs)(l.Fragment, {
            children: [
              m
                ? (0, l.jsx)(i.MenuItem, {
                    id: "add-to-dictionary",
                    label: S.default.Messages.ADD_TO_DICTIONARY,
                    action: () => {
                      (0, o.learnWord)(t), _();
                    },
                  })
                : null,
              p &&
                (0, l.jsx)(i.MenuItem, {
                  id: "remove-from-dictionary",
                  label: S.default.Messages.REMOVE_FROM_DICTIONARY,
                  action: () => {
                    (0, o.unlearnWord)(t), _();
                  },
                }),
              (0, l.jsx)(i.MenuCheckboxItem, {
                id: "spellcheck",
                label: S.default.Messages.SPELLCHECK,
                checked: E,
                action: () => {
                  (0, o.toggleSpellcheck)(), _();
                },
              }),
              E
                ? (0, l.jsx)(i.MenuItem, {
                    id: "languages",
                    label: S.default.Messages.LANGUAGES,
                    action: () =>
                      window.open(
                        d.default.getArticleURL(f.HelpdeskArticles.SPELLCHECK)
                      ),
                  })
                : null,
            ],
          });
        return [A, I];
      }
    },
  },
]);
//# sourceMappingURL=8680879a6e06e0bc5e23.js.map

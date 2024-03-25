(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60796"],
  {
    467914: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          toggleSpellcheck: function () {
            return a;
          },
          learnWord: function () {
            return s;
          },
          unlearnWord: function () {
            return u;
          },
        });
      var l = n("913144");
      function a() {
        l.default.dispatch({ type: "SPELLCHECK_TOGGLE" });
      }
      function s(e) {
        l.default.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: e });
      }
      function u(e) {
        l.default.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: e });
      }
    },
    604288: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("118810"),
        u = n("77078"),
        r = n("272030"),
        c = n("452453"),
        o = n("65997"),
        i = n("218525"),
        d = n("773336"),
        f = n("50885"),
        E = n("782340");
      function C(e) {
        let {
            text: t,
            target: n,
            onHeightUpdate: C,
            onSelect: L,
            isChannelTextArea: S = !1,
          } = e,
          p = a.useCallback(() => {
            (0, r.closeContextMenu)(),
              (0, s.isElement)(n, HTMLElement) &&
                (n.focus(), setTimeout(() => n.focus(), 0));
          }, [n]),
          [M, m] = (0, i.default)({ text: t, target: n, onHeightUpdate: C }),
          h = (0, o.default)();
        if (
          !d.isPlatformEmbedded ||
          !(
            (0, s.isElement)(n, HTMLInputElement) ||
            (0, s.isElement)(n, HTMLTextAreaElement)
          )
        )
          return null;
        let g =
          "" !== t
            ? [
                (0, l.jsx)(
                  u.MenuItem,
                  {
                    id: "copy",
                    label: E.default.Messages.COPY,
                    hint: (0, d.isMac)() ? "⌘C" : "Ctrl+C",
                    action: () => f.default.copy(t),
                  },
                  "copy"
                ),
                (0, l.jsx)(
                  u.MenuItem,
                  {
                    id: "cut",
                    label: E.default.Messages.CUT,
                    hint: (0, d.isMac)() ? "⌘X" : "Ctrl+X",
                    action: () => setTimeout(() => f.default.cut(), 0),
                  },
                  "cut"
                ),
              ]
            : null;
        return (0, l.jsxs)(u.Menu, {
          className: c.ContextMenuClassName,
          navId: "textarea-context",
          onClose: p,
          "aria-label": E.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
          onSelect: L,
          children: [
            S && (0, l.jsx)(u.MenuGroup, { children: h }),
            (0, l.jsx)(u.MenuGroup, { children: M }),
            (0, l.jsx)(u.MenuGroup, { children: m }),
            (0, l.jsxs)(u.MenuGroup, {
              children: [
                g,
                (0, l.jsx)(u.MenuItem, {
                  id: "paste",
                  label: E.default.Messages.PASTE,
                  hint: (0, d.isMac)() ? "⌘V" : "Ctrl+V",
                  action: () => setTimeout(() => f.default.paste(), 0),
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
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("685665"),
        u = n("845579"),
        r = n("599110"),
        c = n("49111"),
        o = n("782340");
      function i() {
        let e = u.ExpressionSuggestionsEnabled.useSetting(),
          { analyticsLocations: t } = (0, s.default)();
        return (0, l.jsx)(a.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: o.default.Messages.SUGGEST_STICKERS,
          checked: e,
          action: () => {
            r.default.track(
              c.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED,
              {
                enabled: !e,
                location: { object: c.AnalyticsObjects.CONTEXT_MENU },
                location_stack: t,
              }
            ),
              u.ExpressionSuggestionsEnabled.updateSetting(!e);
          },
        });
      }
    },
    218525: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        s = n("118810"),
        u = n("446674"),
        r = n("77078"),
        c = n("467914"),
        o = n("769264"),
        i = n("701909"),
        d = n("749866"),
        f = n("49111"),
        E = n("782340");
      function C(e) {
        let { text: t = "", target: n } = e,
          C = (0, u.useStateFromStores)([o.default], () =>
            o.default.isEnabled()
          ),
          L = (0, u.useStateFromStores)(
            [o.default],
            () => o.default.hasLearnedWord(t),
            [t]
          ),
          S = a.useRef({ ...e, spellcheckEnabled: C });
        S.current = { ...e, spellcheckEnabled: C };
        let p = a.useRef(!1),
          [M, m] = a.useState(!1),
          [h, g] = a.useState([]),
          b = a.useCallback(() => {
            let {
              spellcheckEnabled: e,
              text: t,
              onHeightUpdate: n,
            } = S.current;
            e &&
              (0, d.isSupported)() &&
              Promise.all([
                (0, d.isMisspelled)(t, !0),
                (0, d.getCorrections)(t, !0),
              ]).then(e => {
                let [t, l] = e;
                p.current && (m(t), g(l), n());
              });
          }, []),
          T = a.useCallback(() => {
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
          (a.useEffect(() => {
            let e = (0, d.addResultListener)(b);
            return (
              (p.current = !0),
              () => {
                (p.current = !1), e();
              }
            );
          }, [b]),
          a.useEffect(() => {
            b();
          }, [t, C, b]),
          !(0, d.isSupported)())
        )
          return [null, null];
        let _ = h.map((e, t) =>
            (0, l.jsx)(
              r.MenuItem,
              {
                id: "correction-".concat(t),
                label: e,
                action: () => {
                  (0, d.replaceWithCorrection)(e), n.focus();
                },
              },
              "correction-".concat(t)
            )
          ),
          x = (0, l.jsxs)(l.Fragment, {
            children: [
              M
                ? (0, l.jsx)(r.MenuItem, {
                    id: "add-to-dictionary",
                    label: E.default.Messages.ADD_TO_DICTIONARY,
                    action: () => {
                      (0, c.learnWord)(t), T();
                    },
                  })
                : null,
              L &&
                (0, l.jsx)(r.MenuItem, {
                  id: "remove-from-dictionary",
                  label: E.default.Messages.REMOVE_FROM_DICTIONARY,
                  action: () => {
                    (0, c.unlearnWord)(t), T();
                  },
                }),
              (0, l.jsx)(r.MenuCheckboxItem, {
                id: "spellcheck",
                label: E.default.Messages.SPELLCHECK,
                checked: C,
                action: () => {
                  (0, c.toggleSpellcheck)(), T();
                },
              }),
              C
                ? (0, l.jsx)(r.MenuItem, {
                    id: "languages",
                    label: E.default.Messages.LANGUAGES,
                    action: () =>
                      window.open(
                        i.default.getArticleURL(f.HelpdeskArticles.SPELLCHECK)
                      ),
                  })
                : null,
            ],
          });
        return [_, x];
      }
    },
    769264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var l = n("446674"),
        a = n("95410"),
        s = n("913144"),
        u = n("749866");
      let r = "SpellcheckStore",
        c = !0,
        o = new Set();
      function i() {
        a.Storage.set(r, { enabled: c, learnedWords: o });
      }
      class d extends l.default.Store {
        initialize() {
          let e = a.Storage.get(r);
          null != e &&
            ((c = e.enabled),
            (o = new Set(e.learnedWords)),
            (0, u.setEnabled)(c),
            (0, u.setLearnedWords)(o));
        }
        isEnabled() {
          return c;
        }
        hasLearnedWord(e) {
          return o.has(e.toLocaleLowerCase());
        }
      }
      d.displayName = "SpellcheckStore";
      var f = new d(s.default, {
        SPELLCHECK_TOGGLE() {
          (c = !c), (0, u.setEnabled)(c), i();
        },
        SPELLCHECK_LEARN_WORD(e) {
          let { word: t } = e;
          o.add(t.toLocaleLowerCase()), (0, u.setLearnedWords)(o), i();
        },
        SPELLCHECK_UNLEARN_WORD(e) {
          let { word: t } = e;
          o.delete(t.toLocaleLowerCase()), (0, u.setLearnedWords)(o), i();
        },
        I18N_LOAD_SUCCESS(e) {
          let { locale: t } = e;
          (0, u.setAppLocale)(t);
        },
      });
    },
  },
]);
//# sourceMappingURL=548ae54ce72c937c1e8c.js.map

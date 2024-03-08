(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69933"],
  {
    410507: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("2941");
      n.es(l, t);
    },
    597590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("884691");
      let r = l.createContext(void 0);
      var a = r;
    },
    510889: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("884691"),
        r = n("974667"),
        a = n("446674"),
        i = n("206230");
      function s(e, t, n) {
        let s = (0, a.useStateFromStores)(
            [i.default],
            () => i.default.keyboardModeEnabled
          ),
          o = l.useCallback(
            e => {
              let n = document.querySelector(e),
                l = t.current;
              null != n &&
                null != l &&
                (n.focus(), l.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t]
          ),
          c = l.useCallback(
            () =>
              new Promise(e => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: 0,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t]
          ),
          u = l.useCallback(
            () =>
              new Promise(e => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: Number.MAX_SAFE_INTEGER,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t]
          );
        return (0, r.default)({
          id: e,
          isEnabled: s,
          setFocus: o,
          scrollToStart: c,
          scrollToEnd: u,
          orientation: null == n ? void 0 : n.orientation,
        });
      }
    },
    90625: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          IncreasedActivityForumTagPill: function () {
            return C;
          },
          IncreasedActivityForumTagOverflow: function () {
            return b;
          },
          default: function () {
            return v;
          },
          ForumTagOverflow: function () {
            return S;
          },
        }),
        n("222007");
      var l,
        r,
        a = n("37983"),
        i = n("884691"),
        s = n("414456"),
        o = n.n(s),
        c = n("974667"),
        u = n("446674"),
        d = n("77078"),
        f = n("430568"),
        m = n("206230"),
        h = n("385976"),
        g = n("945330"),
        p = n("782340"),
        x = n("375659");
      function C(e) {
        let {
            tag: t,
            size: n = 1,
            disabled: l,
            className: r,
            onClick: s,
            onRemove: C,
            selected: b,
            ariaLabel: v,
          } = e,
          { name: S, emojiId: j, emojiName: E } = t,
          y = null != C,
          [M, k] = i.useState(!1),
          T = (0, u.useStateFromStores)([h.default], () =>
            null != j ? h.default.getUsableCustomEmojiById(j) : null
          ),
          N = y || null != s,
          A = (!y || !M) && (null != j || null != E),
          F = 0 === n,
          I = i.useRef(null),
          w = (0, u.useStateFromStores)(
            [m.default],
            () => m.default.keyboardModeEnabled
          ),
          R = (0, a.jsxs)(a.Fragment, {
            children: [
              A
                ? (0, a.jsx)(f.default, {
                    className: o(x.emoji, { [x.small]: F }),
                    emojiId: j,
                    emojiName: E,
                    animated: !!(null == T ? void 0 : T.animated),
                    size: "reaction",
                    alt: "",
                  })
                : null,
              M &&
                y &&
                (0, a.jsx)("div", {
                  className: x.closeCircle,
                  children: (0, a.jsx)(g.default, { className: x.close }),
                }),
              (0, a.jsx)(d.Text, {
                className: x.increasedActivityText,
                variant: "text-xs/medium",
                lineClamp: 1,
                children: S,
              }),
            ],
          }),
          L = {
            key: t.id,
            className: o(
              x.pill,
              x.increasedActivityPill,
              {
                [x.disabled]: l,
                [x.clickable]: N,
                [x.increasedActivitySmall]: F,
                [x.selected]: b,
              },
              r
            ),
            onClick: e => {
              null == s || s(e),
                null == C || C(t),
                !w && null != I.current && I.current.blur();
            },
            onMouseEnter: () => y && k(!0),
            onMouseLeave: () => y && k(!1),
          },
          _ = (0, c.useListItem)("forum-tag-".concat(t.id));
        return N
          ? (0, a.jsx)(d.Clickable, {
              ..._,
              innerRef: I,
              focusProps: { ringTarget: I },
              "aria-label":
                null != v
                  ? v
                  : p.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: S,
                    }),
              role: "button",
              "aria-pressed": b,
              ...L,
              children: R,
            })
          : (0, a.jsx)("div", {
              "aria-label":
                null != v
                  ? v
                  : p.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                      tagName: S,
                    }),
              ...L,
              children: R,
            });
      }
      function b(e) {
        let { tags: t, count: n, size: l = 1 } = e,
          r = 0 === l;
        return (0, a.jsx)(d.Tooltip, {
          "aria-label": p.default.Messages.FORUM_TAGS,
          text: (0, a.jsx)(a.Fragment, {
            children: t.map(e =>
              (0, a.jsx)(
                v,
                { tag: e, className: x.tooltipPill, size: v.Sizes.SMALL },
                e.id
              )
            ),
          }),
          children: e =>
            (0, a.jsx)("div", {
              ...e,
              className: o(x.pill, x.increasedActivityPill, {
                [x.increasedActivitySmall]: r,
              }),
              children: (0, a.jsxs)(d.Text, {
                className: x.increasedActivityText,
                variant: r ? "text-xs/medium" : "text-sm/medium",
                children: ["+", n],
              }),
            }),
        });
      }
      function v(e) {
        let {
            tag: t,
            size: n = 1,
            disabled: l,
            className: r,
            onClick: s,
            onRemove: C,
            selected: b,
            ariaLabel: v,
          } = e,
          { name: S, emojiId: j, emojiName: E } = t,
          y = null != C,
          [M, k] = i.useState(!1),
          T = (0, u.useStateFromStores)([h.default], () =>
            null != j ? h.default.getUsableCustomEmojiById(j) : null
          ),
          N = y || null != s,
          A = (!y || !M) && (null != j || null != E),
          F = 0 === n,
          I = i.useRef(null),
          w = (0, u.useStateFromStores)(
            [m.default],
            () => m.default.keyboardModeEnabled
          ),
          R = (0, a.jsxs)(a.Fragment, {
            children: [
              A
                ? (0, a.jsx)(f.default, {
                    className: o(x.emoji, { [x.small]: F }),
                    emojiId: j,
                    emojiName: E,
                    animated: !!(null == T ? void 0 : T.animated),
                    size: "reaction",
                  })
                : null,
              M &&
                y &&
                (0, a.jsx)("div", {
                  className: x.closeCircle,
                  children: (0, a.jsx)(g.default, { className: x.close }),
                }),
              (0, a.jsx)(d.Text, {
                variant: F ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: S,
              }),
            ],
          }),
          L = {
            key: t.id,
            className: o(
              x.pill,
              {
                [x.disabled]: l,
                [x.clickable]: N,
                [x.small]: F,
                [x.selected]: b,
              },
              r
            ),
            onClick: e => {
              null == s || s(e),
                null == C || C(t),
                !w && null != I.current && I.current.blur();
            },
            onMouseEnter: () => y && k(!0),
            onMouseLeave: () => y && k(!1),
          },
          _ = (0, c.useListItem)("forum-tag-".concat(t.id));
        return N
          ? (0, a.jsx)(d.Clickable, {
              ..._,
              innerRef: I,
              focusProps: { ringTarget: I },
              "aria-label":
                null != v
                  ? v
                  : p.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: S,
                    }),
              role: "button",
              "aria-pressed": b,
              ...L,
              children: R,
            })
          : (0, a.jsx)("div", { ...L, children: R });
      }
      function S(e) {
        let { tags: t, count: n, size: l = 1 } = e,
          r = 0 === l;
        return (0, a.jsx)(d.Tooltip, {
          "aria-label": p.default.Messages.FORUM_TAGS,
          text: (0, a.jsx)(a.Fragment, {
            children: t.map(e =>
              (0, a.jsx)(
                v,
                { tag: e, className: x.tooltipPill, size: v.Sizes.SMALL },
                e.id
              )
            ),
          }),
          children: e =>
            (0, a.jsx)("div", {
              ...e,
              className: o(x.pill, { [x.small]: r }),
              children: (0, a.jsxs)(d.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
              }),
            }),
        });
      }
      ((r = l || (l = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (v.Sizes = l);
    },
    211248: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CircleIconButtonColors: function () {
            return o;
          },
          CircleIconButtonSizes: function () {
            return c;
          },
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        i = n("77078"),
        s = n("762409");
      let o = {
          TERTIARY: s.tertiary,
          SECONDARY: s.secondary,
          PRIMARY: s.primary,
        },
        c = { SIZE_24: s.size24, SIZE_32: s.size32, SIZE_36: s.size36 };
      function u(e) {
        let {
          className: t,
          tooltip: n,
          color: r,
          size: o = c.SIZE_32,
          icon: u,
          onClick: d,
          disabled: f,
          focusProps: m,
        } = e;
        return (0, l.jsx)(i.Tooltip, {
          text: n,
          shouldShow: !f,
          children: e => {
            let { onClick: c, ...h } = e;
            return (0, l.jsx)(i.Clickable, {
              ...h,
              "aria-label": n,
              "aria-disabled": f,
              className: a(t, s.button, r, o, { [s.disabled]: f }),
              onClick: e => {
                null == c || c(), d(e);
              },
              focusProps: m,
              children: u,
            });
          },
        });
      }
    },
    118530: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("469563"),
        a = n("410507"),
        i = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: r = "currentColor",
              foreground: a,
              ...s
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(s),
              width: t,
              height: n,
              fill: "none",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.33331 1.33331C3.78103 1.33331 3.33331 1.78103 3.33331 2.33331V9.99998H2.33331C1.78103 9.99998 1.33331 10.4477 1.33331 11C1.33331 11.5523 1.78103 12 2.33331 12H3.33331V13.6666C3.33331 14.2189 3.78103 14.6666 4.33331 14.6666C4.8856 14.6666 5.33331 14.2189 5.33331 13.6666V12H6.33331C6.8856 12 7.33331 11.5523 7.33331 11C7.33331 10.4477 6.8856 9.99998 6.33331 9.99998H5.33331V2.33331C5.33331 1.78103 4.8856 1.33331 4.33331 1.33331ZM10.6666 2.33331C10.6666 1.78103 11.1144 1.33331 11.6666 1.33331C12.2189 1.33331 12.6666 1.78103 12.6666 2.33331V3.99998H13.6666C14.2189 3.99998 14.6666 4.44769 14.6666 4.99998C14.6666 5.55226 14.2189 5.99998 13.6666 5.99998H12.6666V13.6666C12.6666 14.2189 12.2189 14.6666 11.6666 14.6666C11.1144 14.6666 10.6666 14.2189 10.6666 13.6666V5.99998H9.66665C9.11436 5.99998 8.66665 5.55226 8.66665 4.99998C8.66665 4.44769 9.11436 3.99998 9.66665 3.99998H10.6666V2.33331Z",
                fill: r,
                className: a,
              }),
            });
          },
          a.FiltersHorizontalIcon,
          void 0,
          { size: 16 }
        );
    },
    664336: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Icon: function () {
            return g;
          },
          Divider: function () {
            return p;
          },
          default: function () {
            return C;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        a = n("414456"),
        i = n.n(a),
        s = n("353386"),
        o = n("394846"),
        c = n("77078"),
        u = n("597590"),
        d = n("980428"),
        f = n("772280"),
        m = n("587974"),
        h = n("892307");
      let g = e => {
          let {
              className: t,
              iconClassName: n,
              children: r,
              selected: a = !1,
              disabled: s = !1,
              showBadge: o = !1,
              color: u,
              foreground: d,
              background: f,
              icon: g,
              onClick: p,
              onContextMenu: x,
              tooltip: C = null,
              tooltipColor: b,
              tooltipPosition: v = "bottom",
              tooltipDisabled: S,
              hideOnClick: j = !0,
              role: E,
              "aria-label": y,
              "aria-hidden": M,
              "aria-checked": k,
              "aria-expanded": T,
              "aria-haspopup": N,
            } = e,
            A = (0, l.jsx)(g, {
              x: 0,
              y: 0,
              width: 24,
              height: 24,
              className: i(n, h.icon),
              foreground: null != d ? d : void 0,
              background: null != f ? f : void 0,
              color: u,
            }),
            F = y;
          return (
            null == F && "string" == typeof C && (F = C),
            (0, l.jsx)(c.Tooltip, {
              text: C,
              color: b,
              position: v,
              hideOnClick: j,
              shouldShow: !S,
              children: e => {
                let {
                  onMouseEnter: C,
                  onMouseLeave: b,
                  onFocus: v,
                  onBlur: S,
                } = e;
                return null == p
                  ? (0, l.jsx)("div", {
                      className: i(t, [h.iconWrapper]),
                      children: (0, l.jsx)(g, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: i(n, h.icon),
                        foreground: null != d ? d : void 0,
                        background: null != f ? f : void 0,
                        color: u,
                        "aria-hidden": M,
                        onMouseEnter: C,
                        onMouseLeave: b,
                        onFocus: v,
                        onBlur: S,
                      }),
                    })
                  : (0, l.jsxs)(c.Clickable, {
                      tag: "div",
                      onClick: s ? void 0 : p,
                      onContextMenu: s ? void 0 : x,
                      onMouseEnter: C,
                      onMouseLeave: b,
                      onFocus: v,
                      onBlur: S,
                      className: i(t, {
                        [h.iconWrapper]: !0,
                        [h.clickable]: !s && null != p,
                        [h.selected]: a,
                      }),
                      role: E,
                      "aria-label": F,
                      "aria-hidden": M,
                      "aria-checked": k,
                      "aria-haspopup": N,
                      "aria-expanded": T,
                      tabIndex: s || null == p ? -1 : 0,
                      children: [
                        o
                          ? (0, l.jsx)(m.default, {
                              mask: m.default.Masks.HEADER_BAR_BADGE,
                              children: A,
                            })
                          : A,
                        o
                          ? (0, l.jsx)("span", { className: h.iconBadge })
                          : null,
                        r,
                      ],
                    });
              },
            })
          );
        },
        p = e => {
          let { className: t } = e;
          return (0, l.jsx)("div", { className: i(h.divider, t) });
        },
        x = e => {
          let {
              className: t,
              innerClassName: n,
              children: a,
              childrenBottom: d,
              toolbar: f,
              onDoubleClick: m,
              "aria-label": g,
              "aria-labelledby": p,
              role: x,
              scrollable: C,
              transparent: b = !1,
            } = e,
            v = r.useRef(null),
            S = r.useContext(u.default);
          return (0, l.jsx)("section", {
            className: i(t, h.container, {
              [h.themed]: !b,
              [h.transparent]: b,
              [h.themedMobile]: o.isMobile,
            }),
            "aria-label": g,
            "aria-labelledby": p,
            role: x,
            ref: v,
            children: (0, l.jsxs)(c.FocusRingScope, {
              containerRef: v,
              children: [
                (0, l.jsxs)("div", {
                  className: h.upperContainer,
                  children: [
                    (0, l.jsxs)("div", {
                      className: i(h.children, n, { [h.scrollable]: C }),
                      onDoubleClick: m,
                      children: [
                        o.isMobile && null != S
                          ? (0, l.jsx)(s.default, {
                              onClick: S,
                              className: h.hamburger,
                            })
                          : null,
                        a,
                      ],
                    }),
                    null != f
                      ? (0, l.jsx)("div", { className: h.toolbar, children: f })
                      : null,
                  ],
                }),
                d,
              ],
            }),
          });
        };
      (x.Icon = g),
        (x.Title = e => {
          let {
              className: t,
              wrapperClassName: n,
              children: r,
              onContextMenu: a,
              onClick: s,
              id: o,
              muted: u = !1,
              level: d = 1,
            } = e,
            f = (0, l.jsx)(c.HeadingLevel, {
              forceLevel: d,
              children: (0, l.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: u ? "header-secondary" : void 0,
                className: i(t, h.title),
                id: o,
                children: r,
              }),
            });
          return null != s
            ? (0, l.jsx)(c.Clickable, {
                onClick: s,
                onContextMenu: a,
                className: i(n, h.titleWrapper),
                children: f,
              })
            : (0, l.jsx)("div", {
                className: i(n, h.titleWrapper),
                onContextMenu: a,
                children: f,
              });
        }),
        (x.Divider = p),
        (x.Caret = function (e) {
          let { direction: t = "right" } = e;
          return "right" === t
            ? (0, l.jsx)(f.default, { className: h.caret })
            : (0, l.jsx)(d.default, { className: h.caret });
        });
      var C = x;
    },
    202752: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getDefaultKeyBinding: function () {
            return a;
          },
          updateContent: function () {
            return M;
          },
          deleteContent: function () {
            return k;
          },
          miscCommand: function () {
            return T;
          },
          getFirstTextBlock: function () {
            return N;
          },
          applyTokensAsEntities: function () {
            return A;
          },
          createEmptyEditorState: function () {
            return F;
          },
          clearContent: function () {
            return I;
          },
          replaceAllContent: function () {
            return w;
          },
          setCollapsedSelection: function () {
            return R;
          },
          setCollapsedEndSelection: function () {
            return L;
          },
          setCollapsedStartSelection: function () {
            return _;
          },
          setToStartSelection: function () {
            return B;
          },
          setToEndSelection: function () {
            return O;
          },
          truncateContent: function () {
            return H;
          },
          scrollCursorIntoView: function () {
            return z;
          },
          isEmpty: function () {
            return Z;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("98159"),
        r = n("952352"),
        a = n.n(r),
        i = n("401816"),
        s = n.n(i),
        o = n("958551"),
        c = n.n(o),
        u = n("661183"),
        d = n.n(u),
        f = n("823821"),
        m = n.n(f),
        h = n("928429"),
        g = n.n(h),
        p = n("234553"),
        x = n.n(p),
        C = n("65994"),
        b = n.n(C),
        v = n("718144"),
        S = n.n(v),
        j = n("640330"),
        E = n.n(j);
      function y(e, t, n, r) {
        let a = r.getCurrentContent(),
          i = null;
        null != e && (i = (a = a.createEntity(...e)).getLastCreatedEntityKey());
        let s = a.getFirstBlock(),
          o = new l.SelectionState({
            anchorKey: s.getKey(),
            anchorOffset: t,
            focusKey: s.getKey(),
            focusOffset: n,
          });
        return (
          (a = l.Modifier.applyEntity(a, o, i)),
          l.EditorState.set(r, { currentContent: a })
        );
      }
      function M(e, t, n, r) {
        let a, i;
        let o = t.getCurrentContent(),
          c = o.getFirstBlock(),
          u = c.getText();
        "number" == typeof n
          ? (n > u.length && (n = u.length),
            null != r && r > u.length && (r = u.length),
            (a = new l.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != r && 0 !== r ? r : n,
            })))
          : (a = t.getSelection());
        let d = t.getCurrentInlineStyle(),
          f = s(o, a);
        return (
          a.isCollapsed()
            ? ((o = l.Modifier.insertText(o, a, e, d, f)),
              (i = "insert-characters"))
            : ((o = l.Modifier.replaceText(o, a, e, d, f)),
              (i = "replace-characters")),
          l.EditorState.push(t, o, i)
        );
      }
      function k(e, t) {
        switch (e) {
          case "delete":
            return S(t);
          case "delete-word":
            return m(t);
          case "backspace":
            return b(t);
          case "backspace-word":
            return d(t);
          case "backspace-to-start-of-line":
            return c(t);
          default:
            return t;
        }
      }
      function T(e, t) {
        switch (e) {
          case "transpose-characters":
            return E(t);
          case "move-selection-to-start-of-block":
            return x(t);
          case "move-selection-to-end-of-block":
            return g(t);
          default:
            return t;
        }
      }
      function N(e) {
        return e.getCurrentContent().getFirstBlock().getText();
      }
      function A(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = t.getCurrentContent(),
          r = l.getFirstBlock(),
          a = r.getText(),
          i = [];
        return (
          r.findEntityRanges(
            e => null !== e.getEntity(),
            (e, t) => {
              let n = l.getEntity(r.getEntityAt(e)).getType(),
                s = a.substring(e, t);
              i.push({ processed: !1, type: n, start: e, end: t, text: s });
            }
          ),
          e.forEach(e => {
            let l = !1;
            if (
              (i.forEach(n => {
                let { type: r, start: a, end: i } = e,
                  s = e.getFullMatch();
                !n.processed &&
                  (n.type === r && n.start === a && n.text === s
                    ? ((n.processed = !0), (l = !0))
                    : ((a >= n.start && a < n.end) ||
                        (i > n.start && i <= n.end)) &&
                      ((n.processed = !0), (t = y(null, n.start, n.end, t))));
              }),
              l)
            )
              return;
            let r = n[e.type];
            t = y(
              [
                e.type,
                null != r && r.mutable ? "MUTABLE" : "IMMUTABLE",
                { token: e },
              ],
              e.start,
              e.end,
              t
            );
          }),
          i.forEach(e => {
            !e.processed && (t = y(null, e.start, e.end, t));
          }),
          t
        );
      }
      function F(e) {
        return l.EditorState.createEmpty(new l.CompositeDecorator(e));
      }
      function I(e) {
        let t = l.EditorState.push(e, l.ContentState.createFromText("")),
          n = e.getSelection();
        return (
          null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
        );
      }
      function w(e, t) {
        let n = N(t);
        return M(e, t, 0, n.length);
      }
      function R(e, t) {
        let n = t.getSelection();
        return (
          (n = (n = n.set("focusOffset", e)).set("anchorOffset", e)),
          l.EditorState.forceSelection(t, n)
        );
      }
      function L(e) {
        let t = e.getCurrentContent().getFirstBlock().getText();
        return R(t.length, e);
      }
      function _(e) {
        return R(0, e);
      }
      function B(e) {
        let t = e.getSelection();
        return (
          (t = (t = t.set("focusOffset", 0)).set("isBackward", !0)),
          l.EditorState.forceSelection(e, t)
        );
      }
      function O(e) {
        let t = N(e),
          n = e.getSelection();
        return (
          (n = (n = n.set("focusOffset", t.length)).set("isBackward", !1)),
          l.EditorState.forceSelection(e, n)
        );
      }
      function H(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 512,
          n = N(e);
        if (n.length > t) {
          let r = e.getSelection();
          (e = M("", e, t, n.length)),
            r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)),
            r.getFocusOffset() > t && (r = r.set("focusOffset", t)),
            (e = l.EditorState.forceSelection(e, r));
        }
        return e;
      }
      function z(e) {
        let t = window.getSelection();
        if (null == t || "Caret" !== t.type || null == e) return;
        let n = t.getRangeAt(0);
        if (
          !(function (e, t) {
            for (; null != e; ) {
              if (e === t) return !0;
              e = e.parentNode;
            }
            return !1;
          })(n.commonAncestorContainer, e)
        )
          return;
        let l = n.getClientRects()[0],
          r = e.getClientRects()[0];
        if (null == l || null == r) return;
        let a = l.left - r.left,
          i = a + e.scrollLeft;
        i < e.scrollLeft
          ? (e.scrollLeft = i - 10)
          : i > e.scrollLeft + e.offsetWidth &&
            (e.scrollLeft = i - e.offsetWidth + 3);
      }
      function Z(e) {
        return 0 === N(e).length;
      }
    },
    2941: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FiltersHorizontalIcon: function () {
            return i;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("669491"),
        a = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M22 5a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 5c0 .34.04.67.11 1H3a1 1 0 0 1 0-2h3.11A4.5 4.5 0 0 0 6 5ZM22 19a1 1 0 0 1-1 1h-8.2a2.5 2.5 0 1 1 0-2H21a1 1 0 0 1 1 1ZM6 19c0 .34.04.67.11 1H3a1 1 0 1 1 0-2h3.11A4.5 4.5 0 0 0 6 19ZM21 13a1 1 0 1 0 0-2h-3.2a2.5 2.5 0 1 0 0 2H21ZM11.11 13a4.5 4.5 0 0 1 0-2H3a1 1 0 1 0 0 2h8.11Z",
            className: s,
          }),
        });
      };
    },
    353386: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("421898"),
        a = n.n(r),
        i = n("401921"),
        s = e => {
          let { open: t = !1, className: n, ...r } = e;
          return (0, l.jsxs)("button", {
            type: "button",
            className: a(i.btnHamburger, { [i.btnHamburgerOpen]: t }, n),
            ...r,
            children: [
              (0, l.jsx)("span", {}),
              (0, l.jsx)("span", {}),
              (0, l.jsx)("span", {}),
              (0, l.jsx)("span", {}),
              (0, l.jsx)("span", {}),
              (0, l.jsx)("span", {}),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=66752a3daac67a2fbbd7.js.map

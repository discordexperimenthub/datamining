(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84304"],
  {
    421898: function (e, t, n) {
      (e = n.nmd(e)),
        !(function () {
          "use strict";
          var t = {}.hasOwnProperty;
          function n() {
            for (var e = "", r = 0; r < arguments.length; r++) {
              var o = arguments[r];
              o &&
                (e = l(
                  e,
                  (function (e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return n.apply(null, e);
                    if (
                      e.toString !== Object.prototype.toString &&
                      !e.toString.toString().includes("[native code]")
                    )
                      return e.toString();
                    var r = "";
                    for (var o in e) t.call(e, o) && e[o] && (r = l(r, o));
                    return r;
                  })(o)
                ));
            }
            return e;
          }
          function l(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          void 0 !== e && e.exports
            ? ((n.default = n), (e.exports = n))
            : "function" == typeof define &&
                "object" == typeof define.amd &&
                define.amd
              ? define("classnames", [], function () {
                  return n;
                })
              : (window.classNames = n);
        })();
    },
    282585: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        }),
        n("222007");
      var l = n("37983"),
        r = n("884691"),
        o = n("77078"),
        a = n("973262"),
        s = n("782340");
      function i(e) {
        let {
            defaultColor: t,
            colors: n,
            value: i,
            onChange: c,
            disabled: u = !1,
            customPickerPosition: d = "bottom",
          } = e,
          [f, p] = r.useState(() =>
            0 === i || i === t || n.some(e => e === i) ? null : i
          );
        r.useEffect(() => {
          p(0 === i || i === t || n.some(e => e === i) ? null : i);
        }, [i, n, t]);
        let h = r.useCallback(
            e => {
              null == c || c(e), p(null);
            },
            [c, p]
          ),
          x = r.useCallback(
            e => {
              null == c || c(e), p(e);
            },
            [c, p]
          ),
          m = r.useCallback(
            () => (0, l.jsx)(a.CustomColorPicker, { onChange: x, value: f }),
            [x, f]
          ),
          C = r.useCallback(
            e => {
              let t = (0, l.jsx)(a.CustomColorButton, {
                ...e,
                "aria-label": s.default.Messages.CUSTOM_COLOR,
              });
              return u
                ? t
                : (0, l.jsx)(o.Popout, {
                    renderPopout: m,
                    position: d,
                    children: e =>
                      (0, l.jsx)(o.Tooltip, {
                        text: s.default.Messages.CUSTOM_COLOR,
                        position: "bottom",
                        children: n =>
                          (0, l.jsx)("div", { ...n, ...e, children: t }),
                      }),
                  });
            },
            [d, u, m]
          ),
          v = r.useCallback(
            e => {
              let t = (0, l.jsx)(a.DefaultColorButton, { ...e });
              return u
                ? t
                : (0, l.jsx)(o.Tooltip, {
                    text: s.default.Messages.DEFAULT,
                    position: "bottom",
                    children: e => (0, l.jsx)("div", { ...e, children: t }),
                  });
            },
            [u]
          );
        return (0, l.jsx)(a.default, {
          ...e,
          renderDefaultButton: v,
          renderCustomButton: C,
          customColor: f,
          onChange: h,
        });
      }
    },
    639055: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("815718");
      n.es(l, t);
    },
    248559: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("222007");
      var l = n("884691"),
        r = () => {
          let [e, t] = (0, l.useState)(null);
          return (
            (0, l.useEffect)(() => {
              var e;
              (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) !=
                null && t(new window.EyeDropper());
            }, []),
            e
          );
        };
    },
    597590: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var l = n("884691");
      let r = l.createContext(void 0);
      var o = r;
    },
    973262: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DefaultColorButton: function () {
            return b;
          },
          CustomColorButton: function () {
            return k;
          },
          CustomColorPicker: function () {
            return N;
          },
          default: function () {
            return y;
          },
        }),
        n("222007");
      var l = n("37983"),
        r = n("884691"),
        o = n("414456"),
        a = n.n(o),
        s = n("974667"),
        i = n("509043"),
        c = n("77078"),
        u = n("248559"),
        d = n("449918"),
        f = n("526975"),
        p = n("36694"),
        h = n("422403"),
        x = n("664336"),
        m = n("49111"),
        C = n("782340"),
        v = n("939342");
      let g = () => Promise.resolve();
      function j(e) {
        let {
            color: t,
            isDefault: n = !1,
            isCustom: r = !1,
            isSelected: o = !1,
            disabled: u = !1,
            style: f = {},
            onClick: x,
            "aria-label": C,
          } = e,
          g = (0, s.useListItem)("color-".concat(t)),
          j = null != t ? (0, i.int2hex)(t) : f.backgroundColor,
          b = !1;
        return (
          r && !o ? (b = !0) : (r || o) && (b = (0, i.getDarkness)(t) > 0.1),
          (0, l.jsx)(c.FocusRing, {
            offset: -2,
            children: (0, l.jsxs)("button", {
              type: "button",
              className: a(v.colorPickerSwatch, {
                [v.disabled]: u,
                [v.default]: n,
                [v.custom]: r,
                [v.noColor]: null == t,
              }),
              disabled: u,
              onClick: () => (null == x ? void 0 : x(t)),
              style: { ...f, backgroundColor: j },
              "aria-label": null != C ? C : j,
              ...g,
              children: [
                r
                  ? (0, l.jsx)(h.default, {
                      className: v.colorPickerDropper,
                      foreground: v.colorPickerDropperFg,
                      width: 14,
                      height: 14,
                      color: (0, d.getColor)(
                        b ? m.Color.WHITE_500 : m.Color.BLACK_500
                      ),
                    })
                  : null,
                (function () {
                  let e = 16,
                    t = 16;
                  if (((r || n) && ((e = 32), (t = 24)), o))
                    return (0, l.jsx)(p.default, {
                      width: e,
                      height: t,
                      color: (0, d.getColor)(
                        b ? m.Color.WHITE_500 : m.Color.BLACK_500
                      ),
                    });
                })(),
              ],
            }),
          })
        );
      }
      class b extends r.PureComponent {
        render() {
          let { color: e, onChange: t, value: n, disabled: r } = this.props;
          return (0, l.jsx)(j, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: r,
          });
        }
      }
      class k extends r.PureComponent {
        render() {
          let {
            customColor: e,
            value: t,
            disabled: n,
            "aria-label": r,
          } = this.props;
          return (0, l.jsx)(j, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            "aria-label": r,
          });
        }
      }
      let N = r.memo(e => {
        let {
            value: t,
            onChange: n,
            onClose: o,
            suggestedColors: a,
            middle: s,
            footer: d,
            showEyeDropper: p,
          } = e,
          m = (0, u.default)(),
          [g, j] = r.useState(() => {
            let e = null != t ? t : 0,
              n = (0, i.int2hex)(e);
            return { current: e, pending: n, input: n };
          });
        r.useEffect(() => {
          if (null == t || t === g.current) return;
          let e = (0, i.int2hex)(t);
          j({ current: t, pending: e, input: e });
        }, [t, g]),
          r.useEffect(() => o, [o]);
        let b = e => {
            let t = "#" === e[0] ? e : "#".concat(e);
            if (!(0, i.isValidHex)(t)) {
              j(e => ({ ...e, input: t }));
              return;
            }
            let l = (0, i.hex2int)(t);
            j({ current: l, pending: t, input: t }), n(l);
          },
          k = async () => {
            if (null != m)
              try {
                let { sRGBHex: e } = await m.open();
                b(e);
              } catch {}
          },
          N = e => {
            j(t => ({ ...t, pending: e, input: e }));
          },
          y = e => {
            n((0, i.hex2int)(e));
          };
        return (0, l.jsxs)(c.Dialog, {
          "aria-label": C.default.Messages.PICK_A_COLOR,
          className: v.customColorPicker,
          children: [
            (0, l.jsx)(f.default, {
              onChange: e => {
                let { hex: t } = e;
                return N(t);
              },
              onChangeComplete: e => {
                let { hex: t } = e;
                return y(t);
              },
              color: g.pending,
            }),
            s,
            (0, l.jsxs)("div", {
              className: v.customColorPickerInputContainer,
              children: [
                p &&
                  null != m &&
                  (0, l.jsx)(x.Icon, {
                    onClick: k,
                    tooltip: C.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                    tooltipPosition: "top",
                    className: v.customColorPickerEyeDropper,
                    icon: h.default,
                  }),
                (0, l.jsx)(c.TextInput, {
                  className: v.customColorPickerInput,
                  value: g.input,
                  onChange: b,
                  maxLength: 7,
                }),
              ],
            }),
            null != a &&
              a.length > 0 &&
              (0, l.jsx)("div", {
                className: v.suggestedColors,
                children: a.map((e, t) =>
                  (0, l.jsx)(
                    c.Clickable,
                    {
                      "aria-label": "",
                      style: { backgroundColor: e },
                      className: v.suggestedColor,
                      onClick: () => b(e),
                    },
                    "".concat(e, "-").concat(t)
                  )
                ),
              }),
            d,
          ],
        });
      });
      function y(e) {
        let {
            className: t,
            defaultColor: n,
            customColor: r,
            colors: o,
            value: i,
            disabled: c,
            onChange: u,
            renderDefaultButton: d,
            renderCustomButton: f,
            colorContainerClassName: p,
          } = e,
          h = e =>
            (0, l.jsx)("div", {
              className: v.colorPickerRow,
              children: e.map(e =>
                (0, l.jsx)(
                  j,
                  { color: e, isSelected: e === i, onClick: u, disabled: c },
                  e
                )
              ),
            }),
          x = o.slice(0, o.length / 2),
          m = o.slice(o.length / 2, o.length),
          C = (0, s.default)({
            id: "color-picker",
            isEnabled: !0,
            scrollToStart: g,
            scrollToEnd: g,
          });
        return (0, l.jsx)(s.ListNavigatorProvider, {
          navigator: C,
          children: (0, l.jsx)(s.ListNavigatorContainer, {
            children: e => {
              let { ref: o, ...s } = e;
              return (0, l.jsxs)("div", {
                className: a(v.container, t),
                ref: o,
                ...s,
                children: [
                  (0, l.jsx)("div", {
                    className: a(v.defaultContainer, p),
                    children: d({
                      value: i,
                      color: n,
                      onChange: u,
                      disabled: c,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: a(v.customContainer, p),
                    children: f({ value: i, customColor: r, disabled: c }),
                  }),
                  (0, l.jsxs)("div", {
                    className: v.presets,
                    children: [h(x), h(m)],
                  }),
                ],
              });
            },
          }),
        });
      }
    },
    526975: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        o = n("266937"),
        a = n("286458"),
        s = n("796727");
      let i = (0, o.CustomPicker)(e =>
        (0, l.jsxs)("div", {
          className: s.wrapper,
          children: [
            (0, l.jsx)("div", {
              className: s.saturation,
              children: (0, l.jsx)(a.Saturation, { ...e }),
            }),
            (0, l.jsx)("div", {
              className: s.hue,
              children: (0, l.jsx)(a.Hue, { ...e, direction: "horizontal" }),
            }),
          ],
        })
      );
      var c = r.memo(i);
    },
    422403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("469563"),
        o = n("639055"),
        a = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: n = 16,
              color: r = "currentColor",
              className: o,
              foreground: a,
            } = e;
            return (0, l.jsx)("svg", {
              className: o,
              width: t,
              height: n,
              viewBox: "0 0 16 16",
              children: (0, l.jsxs)("g", {
                fill: "none",
                children: [
                  (0, l.jsx)("path", { d: "M-4-4h24v24H-4z" }),
                  (0, l.jsx)("path", {
                    className: a,
                    fill: r,
                    d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z",
                  }),
                ],
              }),
            });
          },
          o.EyeDropperIcon,
          void 0,
          { size: 16 }
        );
    },
    664336: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Icon: function () {
            return x;
          },
          Divider: function () {
            return m;
          },
          default: function () {
            return v;
          },
        });
      var l = n("37983"),
        r = n("884691"),
        o = n("414456"),
        a = n.n(o),
        s = n("353386"),
        i = n("394846"),
        c = n("77078"),
        u = n("597590"),
        d = n("980428"),
        f = n("772280"),
        p = n("587974"),
        h = n("892307");
      let x = e => {
          let {
              className: t,
              iconClassName: n,
              children: r,
              selected: o = !1,
              disabled: s = !1,
              showBadge: i = !1,
              color: u,
              foreground: d,
              background: f,
              icon: x,
              onClick: m,
              onContextMenu: C,
              tooltip: v = null,
              tooltipColor: g,
              tooltipPosition: j = "bottom",
              tooltipDisabled: b,
              hideOnClick: k = !0,
              role: N,
              "aria-label": y,
              "aria-hidden": w,
              "aria-checked": E,
              "aria-expanded": M,
              "aria-haspopup": P,
            } = e,
            D = (0, l.jsx)(x, {
              x: 0,
              y: 0,
              width: 24,
              height: 24,
              className: a(n, h.icon),
              foreground: null != d ? d : void 0,
              background: null != f ? f : void 0,
              color: u,
            }),
            L = y;
          return (
            null == L && "string" == typeof v && (L = v),
            (0, l.jsx)(c.Tooltip, {
              text: v,
              color: g,
              position: j,
              hideOnClick: k,
              shouldShow: !b,
              children: e => {
                let {
                  onMouseEnter: v,
                  onMouseLeave: g,
                  onFocus: j,
                  onBlur: b,
                } = e;
                return null == m
                  ? (0, l.jsx)("div", {
                      className: a(t, [h.iconWrapper]),
                      children: (0, l.jsx)(x, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: a(n, h.icon),
                        foreground: null != d ? d : void 0,
                        background: null != f ? f : void 0,
                        color: u,
                        "aria-hidden": w,
                        onMouseEnter: v,
                        onMouseLeave: g,
                        onFocus: j,
                        onBlur: b,
                      }),
                    })
                  : (0, l.jsxs)(c.Clickable, {
                      tag: "div",
                      onClick: s ? void 0 : m,
                      onContextMenu: s ? void 0 : C,
                      onMouseEnter: v,
                      onMouseLeave: g,
                      onFocus: j,
                      onBlur: b,
                      className: a(t, {
                        [h.iconWrapper]: !0,
                        [h.clickable]: !s && null != m,
                        [h.selected]: o,
                      }),
                      role: N,
                      "aria-label": L,
                      "aria-hidden": w,
                      "aria-checked": E,
                      "aria-haspopup": P,
                      "aria-expanded": M,
                      tabIndex: s || null == m ? -1 : 0,
                      children: [
                        i
                          ? (0, l.jsx)(p.default, {
                              mask: p.default.Masks.HEADER_BAR_BADGE,
                              children: D,
                            })
                          : D,
                        i
                          ? (0, l.jsx)("span", { className: h.iconBadge })
                          : null,
                        r,
                      ],
                    });
              },
            })
          );
        },
        m = e => {
          let { className: t } = e;
          return (0, l.jsx)("div", { className: a(h.divider, t) });
        },
        C = e => {
          let {
              className: t,
              innerClassName: n,
              children: o,
              childrenBottom: d,
              toolbar: f,
              onDoubleClick: p,
              "aria-label": x,
              "aria-labelledby": m,
              role: C,
              scrollable: v,
              transparent: g = !1,
            } = e,
            j = r.useRef(null),
            b = r.useContext(u.default);
          return (0, l.jsx)("section", {
            className: a(t, h.container, {
              [h.themed]: !g,
              [h.transparent]: g,
              [h.themedMobile]: i.isMobile,
            }),
            "aria-label": x,
            "aria-labelledby": m,
            role: C,
            ref: j,
            children: (0, l.jsxs)(c.FocusRingScope, {
              containerRef: j,
              children: [
                (0, l.jsxs)("div", {
                  className: h.upperContainer,
                  children: [
                    (0, l.jsxs)("div", {
                      className: a(h.children, n, { [h.scrollable]: v }),
                      onDoubleClick: p,
                      children: [
                        i.isMobile && null != b
                          ? (0, l.jsx)(s.default, {
                              onClick: b,
                              className: h.hamburger,
                            })
                          : null,
                        o,
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
      (C.Icon = x),
        (C.Title = e => {
          let {
              className: t,
              wrapperClassName: n,
              children: r,
              onContextMenu: o,
              onClick: s,
              id: i,
              muted: u = !1,
              level: d = 1,
            } = e,
            f = (0, l.jsx)(c.HeadingLevel, {
              forceLevel: d,
              children: (0, l.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: u ? "header-secondary" : void 0,
                className: a(t, h.title),
                id: i,
                children: r,
              }),
            });
          return null != s
            ? (0, l.jsx)(c.Clickable, {
                onClick: s,
                onContextMenu: o,
                className: a(n, h.titleWrapper),
                children: f,
              })
            : (0, l.jsx)("div", {
                className: a(n, h.titleWrapper),
                onContextMenu: o,
                children: f,
              });
        }),
        (C.Divider = m),
        (C.Caret = function (e) {
          let { direction: t = "right" } = e;
          return "right" === t
            ? (0, l.jsx)(f.default, { className: h.caret })
            : (0, l.jsx)(d.default, { className: h.caret });
        });
      var v = C;
    },
    815718: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EyeDropperIcon: function () {
            return a;
          },
        });
      var l = n("37983");
      n("884691");
      var r = n("669491"),
        o = n("82169");
      let a = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: a = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: s = "",
          ...i
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, o.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "m16.25 2.25-2 2-.63-.63a3 3 0 0 0-4.24 0l-.85.85c-.3.3-.3.77 0 1.06l9.94 9.94c.3.3.77.3 1.06 0l.85-.85a3 3 0 0 0 0-4.24l-.63-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.3 9.7a1 1 0 0 1 1.4 0l3.6 3.6a1 1 0 0 1 0 1.4l-4.84 4.84a5 5 0 0 1-2.7 1.39c-.47.08-.86.42-1.1.83a2.5 2.5 0 1 1-3.42-3.42c.41-.24.75-.63.83-1.1a5 5 0 0 1 1.4-2.7L9.28 9.7Z",
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
        o = n.n(r),
        a = n("401921"),
        s = e => {
          let { open: t = !1, className: n, ...r } = e;
          return (0, l.jsxs)("button", {
            type: "button",
            className: o(a.btnHamburger, { [a.btnHamburgerOpen]: t }, n),
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
//# sourceMappingURL=9f7edd54561b2695e646.js.map

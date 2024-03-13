(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61133"],
  {
    856670: function (e, t, s) {
      "use strict";
      e.exports = s.p + "018197f71e03e53562e7.svg";
    },
    693029: function (e, t, s) {
      "use strict";
      e.exports = s.p + "7e5dd7f59f96cc264184.svg";
    },
    274456: function (e, t, s) {
      "use strict";
      e.exports = s.p + "15f331c71c4a92929dd6.svg";
    },
    193919: function (e, t, s) {
      "use strict";
      e.exports = s.p + "799c4384055c8514120b.svg";
    },
    133403: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("414456"),
        o = s.n(l),
        a = s("77078"),
        r = s("782340"),
        i = s("518377");
      let u = Object.freeze({ DEFAULT: i.default, FILLED: i.filled });
      function c(e) {
        let {
          className: t,
          onClick: s,
          "aria-label": l,
          look: c = u.DEFAULT,
        } = e;
        return (0, n.jsx)(a.Clickable, {
          "aria-label": null != l ? l : r.default.Messages.REMOVE,
          className: o(i.button, c, t),
          onClick: s,
        });
      }
      c.Looks = u;
    },
    913801: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return _;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        o = s("414456"),
        a = s.n(o),
        r = s("862337"),
        i = s("77078"),
        u = s("920700"),
        c = s("306160"),
        d = s("782340"),
        E = s("206887");
      class f extends l.PureComponent {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: s,
              className: l,
              inputClassName: o,
            } = this.props,
            { mode: r } = this.state,
            c = r === u.default.Modes.SUCCESS ? d.default.Messages.COPIED : s;
          return e
            ? (0, n.jsxs)("div", {
                className: a(l, r),
                children: [
                  (0, n.jsx)(i.TextInput, { value: t, inputClassName: o }),
                  (0, n.jsx)(i.Button, {
                    className: E.button,
                    onClick: this.handleCopy,
                    size: i.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(r),
                    look: i.Button.Looks.FILLED,
                    children: c,
                  }),
                ],
              })
            : (0, n.jsx)(u.default, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: r,
                text: c,
              });
        }
        handleCopy() {
          let { onCopy: e, value: t, delay: s } = this.props,
            n = (0, c.copy)(t);
          this.setState({
            mode: n ? u.default.Modes.SUCCESS : u.default.Modes.ERROR,
          }),
            this._timeout.start(s, () =>
              this.setState({ mode: u.default.Modes.DEFAULT })
            ),
            null == e || e();
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case u.default.Modes.SUCCESS:
              return i.Button.Colors.GREEN;
            case u.default.Modes.ERROR:
              return i.Button.Colors.RED;
            default:
              return i.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            (this.state = { mode: u.default.Modes.DEFAULT }),
            (this._timeout = new r.Timeout()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      f.defaultProps = { isVertical: !1, delay: 300 };
      var _ = f;
    },
    45299: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        o = s("907002"),
        a = s("669491"),
        r = s("77078"),
        i = s("659500"),
        u = s("49111"),
        c = s("782340"),
        d = s("645780"),
        E = function (e) {
          var t;
          let {
              message: s,
              errorMessage: E,
              submitting: f,
              onReset: _,
              onSave: C,
              onSaveText: I,
              onResetText: N,
              onSaveButtonColor: h,
              disabled: g,
              saveButtonTooltip: T,
            } = e,
            p = l.useRef(null),
            [{ spring: m }, R] = (0, o.useSpring)(() => ({ spring: 0 }));
          l.useEffect(() => {
            function e() {
              R({ spring: 1, config: o.config.gentle }),
                R({ spring: 0, config: o.config.gentle, delay: 1e3 });
            }
            return (
              i.ComponentDispatch.subscribe(
                u.ComponentActions.EMPHASIZE_NOTICE,
                e
              ),
              () => {
                i.ComponentDispatch.unsubscribe(
                  u.ComponentActions.EMPHASIZE_NOTICE,
                  e
                );
              }
            );
          }, [R]);
          let L = m.to({
              range: [0, 1],
              output: [
                (0, r.useToken)(a.default.colors.TEXT_NORMAL).hex(),
                (0, r.useToken)(a.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            }),
            x = m.to({
              range: [0, 1],
              output: [
                (0, r.useToken)(a.default.colors.BACKGROUND_FLOATING).hex(),
                (0, r.useToken)(a.default.colors.STATUS_DANGER).hex(),
              ],
            }),
            v = m.to({
              range: [0, 1],
              output: [
                (0, r.useToken)(a.default.colors.TEXT_DANGER).hex(),
                (0, r.useToken)(a.default.unsafe_rawColors.WHITE_500).hex(),
              ],
            });
          return (0, n.jsx)(o.animated.div, {
            className: d.container,
            style: { backgroundColor: x },
            children: (0, n.jsx)("div", {
              className: d.flexContainer,
              ref: p,
              children: (0, n.jsxs)(r.FocusRingScope, {
                containerRef: p,
                children: [
                  (0, n.jsx)("div", {
                    className: d.shrinkingContainer,
                    children: (0, n.jsx)(o.animated.div, {
                      className: d.message,
                      style: { color: null != E ? v : L },
                      children:
                        null !== (t = null != E ? E : s) && void 0 !== t
                          ? t
                          : c.default.Messages.SETTINGS_NOTICE_MESSAGE,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: d.actions,
                    children: [
                      null != _ &&
                        (0, n.jsx)(r.Button, {
                          className: d.resetButton,
                          size: r.Button.Sizes.SMALL,
                          color: r.Button.Colors.PRIMARY,
                          look: r.Button.Looks.LINK,
                          onClick: _,
                          children: (0, n.jsx)(o.animated.span, {
                            style: { color: L },
                            children: null != N ? N : c.default.Messages.RESET,
                          }),
                        }),
                      null != C
                        ? (0, n.jsx)(r.Tooltip, {
                            text: T,
                            children: e =>
                              (0, n.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: null != h ? h : r.Button.Colors.GREEN,
                                submitting: f,
                                disabled: g,
                                onClick: C,
                                ...e,
                                children:
                                  null != I
                                    ? I
                                    : c.default.Messages.SAVE_CHANGES,
                              }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    639055: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("815718");
      s.es(n, t);
    },
    248559: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        }),
        s("222007");
      var n = s("884691"),
        l = () => {
          let [e, t] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              var e;
              (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) !=
                null && t(new window.EyeDropper());
            }, []),
            e
          );
        };
    },
    352807: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          openActionCompleteSuccessModal: function () {
            return d;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("77078"),
        o = s("191814"),
        a = s("430677"),
        r = s("476765"),
        i = s("782340"),
        u = s("440809");
      function c(e) {
        let { transitionState: t, Icon: s, title: c, body: d, onClose: E } = e,
          f = (0, r.useUID)();
        return (0, n.jsxs)(l.ModalRoot, {
          className: u.container,
          transitionState: t,
          "aria-labelledby": f,
          children: [
            (0, n.jsxs)(l.ModalContent, {
              children: [
                (0, n.jsx)(a.default, { Icon: s }),
                (0, n.jsx)(o.default, { size: 24 }),
                (0, n.jsx)(l.Heading, {
                  id: f,
                  className: u.title,
                  variant: "heading-xl/semibold",
                  children: c,
                }),
                (0, n.jsx)(o.default, { size: 8 }),
                (0, n.jsx)(l.Text, {
                  className: u.body,
                  variant: "text-sm/normal",
                  children: d,
                }),
              ],
            }),
            (0, n.jsx)(o.default, { size: 24 }),
            (0, n.jsx)(l.Button, {
              size: l.Button.Sizes.MEDIUM,
              grow: !1,
              onClick: E,
              children: i.default.Messages.GOT_IT,
            }),
          ],
        });
      }
      function d(e) {
        (0, l.openModal)(t => (0, n.jsx)(c, { ...t, ...e }));
      }
    },
    306073: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        });
      var n = s("37983"),
        l = s("884691");
      let o = e => t => {
        null == t || t.stopPropagation(), e();
      };
      function a(e) {
        let { onClick: t, className: s, children: a } = e,
          r = l.useRef(null);
        return (0, n.jsx)("div", {
          onClick: t,
          ref: r,
          className: s,
          children: a({ areaRef: r, handleStopPropagation: o }),
        });
      }
    },
    223984: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MessageBlockColors: function () {
            return i;
          },
          default: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("414456"),
        o = s.n(l),
        a = s("77078"),
        r = s("754908");
      let i = {
        RED: r.redMessageBlock,
        YELLOW: r.yellowMessageBlock,
        BROWN: r.brownMessageBlock,
      };
      function u(e) {
        let { color: t, icon: s, children: l, className: i } = e;
        return (0, n.jsx)(a.FormErrorBlock, {
          icon: e => (0, n.jsx)(s, { height: 20, width: 20, ...e }),
          iconClassName: r.messageBlockIcon,
          className: o(t, i),
          children: l,
        });
      }
    },
    417186: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("423487"),
        o = s("223984");
      function a(e) {
        let {
          children: t,
          className: s,
          color: a = o.MessageBlockColors.YELLOW,
        } = e;
        return (0, n.jsx)(o.default, {
          className: s,
          color: a,
          icon: l.default,
          children: t,
        });
      }
    },
    264742: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          WarningBlockButtonPosition: function () {
            return E;
          },
          default: function () {
            return f;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("414456"),
        o = s.n(l),
        a = s("819855"),
        r = s("77078"),
        i = s("841098"),
        u = s("223984"),
        c = s("417186"),
        d = s("715202");
      let E = {
        RIGHT: d.horizontalStatusWarningBlock,
        BOTTOM: d.verticalStatusWarningBlock,
      };
      function f(e) {
        let {
            className: t,
            color: s = u.MessageBlockColors.YELLOW,
            buttonPosition: l = E.BOTTOM,
            notice: f,
            ctaLabel: _,
            ctaLoading: C,
            ctaDisabled: I,
            ctaClassName: N,
            onClick: h,
          } = e,
          g = (0, i.default)();
        return (0, n.jsx)(c.default, {
          className: o(
            d.statusWarningBlock,
            { [d.statusWarningBlockWithCta]: null != _ },
            t
          ),
          color: (0, a.isThemeDark)(g) ? s : u.MessageBlockColors.BROWN,
          children: (0, n.jsxs)("div", {
            className: l,
            children: [
              (0, n.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "interactive-active",
                children: f,
              }),
              null != _ &&
                null != h &&
                (0, n.jsx)("div", {
                  className: d.ctaButtonContainer,
                  children: (0, n.jsx)(r.Button, {
                    className: o(
                      d.ctaButton,
                      (0, a.isThemeDark)(g) ? void 0 : d.ctaBlackButton,
                      N
                    ),
                    color: (0, a.isThemeDark)(g)
                      ? r.Button.Colors.WHITE
                      : r.Button.Colors.CUSTOM,
                    size: r.ButtonSizes.MEDIUM,
                    onClick: h,
                    disabled: I,
                    submitting: C,
                    children: (0, n.jsx)(r.Text, {
                      className: d.ctaButtonText,
                      variant: "text-sm/medium",
                      children: _,
                    }),
                  }),
                }),
            ],
          }),
        });
      }
    },
    797944: function (e, t, s) {
      "use strict";
      var n, l;
      s.r(t),
        s.d(t, {
          HighlightColors: function () {
            return n;
          },
        }),
        ((l = n || (n = {})).ACCENT = "accent"),
        (l.GREEN = "statusGreen"),
        (l.YELLOW = "statusYellow"),
        (l.ORANGE = "statusOrange"),
        (l.RED = "statusRed"),
        (l.NONE = "transparent");
    },
    973262: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DefaultColorButton: function () {
            return p;
          },
          CustomColorButton: function () {
            return m;
          },
          CustomColorPicker: function () {
            return R;
          },
          default: function () {
            return L;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        o = s("414456"),
        a = s.n(o),
        r = s("974667"),
        i = s("509043"),
        u = s("77078"),
        c = s("248559"),
        d = s("449918"),
        E = s("526975"),
        f = s("36694"),
        _ = s("422403"),
        C = s("664336"),
        I = s("49111"),
        N = s("782340"),
        h = s("939342");
      let g = () => Promise.resolve();
      function T(e) {
        let {
            color: t,
            isDefault: s = !1,
            isCustom: l = !1,
            isSelected: o = !1,
            disabled: c = !1,
            style: E = {},
            onClick: C,
            "aria-label": N,
          } = e,
          g = (0, r.useListItem)("color-".concat(t)),
          T = null != t ? (0, i.int2hex)(t) : E.backgroundColor,
          p = !1;
        return (
          l && !o ? (p = !0) : (l || o) && (p = (0, i.getDarkness)(t) > 0.1),
          (0, n.jsx)(u.FocusRing, {
            offset: -2,
            children: (0, n.jsxs)("button", {
              type: "button",
              className: a(h.colorPickerSwatch, {
                [h.disabled]: c,
                [h.default]: s,
                [h.custom]: l,
                [h.noColor]: null == t,
              }),
              disabled: c,
              onClick: () => (null == C ? void 0 : C(t)),
              style: { ...E, backgroundColor: T },
              "aria-label": null != N ? N : T,
              ...g,
              children: [
                l
                  ? (0, n.jsx)(_.default, {
                      className: h.colorPickerDropper,
                      foreground: h.colorPickerDropperFg,
                      width: 14,
                      height: 14,
                      color: (0, d.getColor)(
                        p ? I.Color.WHITE_500 : I.Color.BLACK_500
                      ),
                    })
                  : null,
                (function () {
                  let e = 16,
                    t = 16;
                  if (((l || s) && ((e = 32), (t = 24)), o))
                    return (0, n.jsx)(f.default, {
                      width: e,
                      height: t,
                      color: (0, d.getColor)(
                        p ? I.Color.WHITE_500 : I.Color.BLACK_500
                      ),
                    });
                })(),
              ],
            }),
          })
        );
      }
      class p extends l.PureComponent {
        render() {
          let { color: e, onChange: t, value: s, disabled: l } = this.props;
          return (0, n.jsx)(T, {
            isDefault: !0,
            color: e,
            isSelected: e === s || 0 === s,
            onClick: t,
            disabled: l,
          });
        }
      }
      class m extends l.PureComponent {
        render() {
          let {
            customColor: e,
            value: t,
            disabled: s,
            "aria-label": l,
          } = this.props;
          return (0, n.jsx)(T, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: s,
            "aria-label": l,
          });
        }
      }
      let R = l.memo(e => {
        let {
            value: t,
            onChange: s,
            onClose: o,
            suggestedColors: a,
            middle: r,
            footer: d,
            showEyeDropper: f,
          } = e,
          I = (0, c.default)(),
          [g, T] = l.useState(() => {
            let e = null != t ? t : 0,
              s = (0, i.int2hex)(e);
            return { current: e, pending: s, input: s };
          });
        l.useEffect(() => {
          if (null == t || t === g.current) return;
          let e = (0, i.int2hex)(t);
          T({ current: t, pending: e, input: e });
        }, [t, g]),
          l.useEffect(() => o, [o]);
        let p = e => {
            let t = "#" === e[0] ? e : "#".concat(e);
            if (!(0, i.isValidHex)(t)) {
              T(e => ({ ...e, input: t }));
              return;
            }
            let n = (0, i.hex2int)(t);
            T({ current: n, pending: t, input: t }), s(n);
          },
          m = async () => {
            if (null != I)
              try {
                let { sRGBHex: e } = await I.open();
                p(e);
              } catch {}
          },
          R = e => {
            T(t => ({ ...t, pending: e, input: e }));
          },
          L = e => {
            s((0, i.hex2int)(e));
          };
        return (0, n.jsxs)(u.Dialog, {
          "aria-label": N.default.Messages.PICK_A_COLOR,
          className: h.customColorPicker,
          children: [
            (0, n.jsx)(E.default, {
              onChange: e => {
                let { hex: t } = e;
                return R(t);
              },
              onChangeComplete: e => {
                let { hex: t } = e;
                return L(t);
              },
              color: g.pending,
            }),
            r,
            (0, n.jsxs)("div", {
              className: h.customColorPickerInputContainer,
              children: [
                f &&
                  null != I &&
                  (0, n.jsx)(C.Icon, {
                    onClick: m,
                    tooltip: N.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                    tooltipPosition: "top",
                    className: h.customColorPickerEyeDropper,
                    icon: _.default,
                  }),
                (0, n.jsx)(u.TextInput, {
                  className: h.customColorPickerInput,
                  value: g.input,
                  onChange: p,
                  maxLength: 7,
                }),
              ],
            }),
            null != a &&
              a.length > 0 &&
              (0, n.jsx)("div", {
                className: h.suggestedColors,
                children: a.map((e, t) =>
                  (0, n.jsx)(
                    u.Clickable,
                    {
                      "aria-label": "",
                      style: { backgroundColor: e },
                      className: h.suggestedColor,
                      onClick: () => p(e),
                    },
                    "".concat(e, "-").concat(t)
                  )
                ),
              }),
            d,
          ],
        });
      });
      function L(e) {
        let {
            className: t,
            defaultColor: s,
            customColor: l,
            colors: o,
            value: i,
            disabled: u,
            onChange: c,
            renderDefaultButton: d,
            renderCustomButton: E,
            colorContainerClassName: f,
          } = e,
          _ = e =>
            (0, n.jsx)("div", {
              className: h.colorPickerRow,
              children: e.map(e =>
                (0, n.jsx)(
                  T,
                  { color: e, isSelected: e === i, onClick: c, disabled: u },
                  e
                )
              ),
            }),
          C = o.slice(0, o.length / 2),
          I = o.slice(o.length / 2, o.length),
          N = (0, r.default)({
            id: "color-picker",
            isEnabled: !0,
            scrollToStart: g,
            scrollToEnd: g,
          });
        return (0, n.jsx)(r.ListNavigatorProvider, {
          navigator: N,
          children: (0, n.jsx)(r.ListNavigatorContainer, {
            children: e => {
              let { ref: o, ...r } = e;
              return (0, n.jsxs)("div", {
                className: a(h.container, t),
                ref: o,
                ...r,
                children: [
                  (0, n.jsx)("div", {
                    className: a(h.defaultContainer, f),
                    children: d({
                      value: i,
                      color: s,
                      onChange: c,
                      disabled: u,
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: a(h.customContainer, f),
                    children: E({ value: i, customColor: l, disabled: u }),
                  }),
                  (0, n.jsxs)("div", {
                    className: h.presets,
                    children: [_(C), _(I)],
                  }),
                ],
              });
            },
          }),
        });
      }
    },
    526975: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s("37983"),
        l = s("884691"),
        o = s("266937"),
        a = s("286458"),
        r = s("796727");
      let i = (0, o.CustomPicker)(e =>
        (0, n.jsxs)("div", {
          className: r.wrapper,
          children: [
            (0, n.jsx)("div", {
              className: r.saturation,
              children: (0, n.jsx)(a.Saturation, { ...e }),
            }),
            (0, n.jsx)("div", {
              className: r.hue,
              children: (0, n.jsx)(a.Hue, { ...e, direction: "horizontal" }),
            }),
          ],
        })
      );
      var u = l.memo(i);
    },
    430677: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("414456"),
        o = s.n(l),
        a = s("170861"),
        r = s("274456"),
        i = s("193919");
      function u(e) {
        let { Icon: t, className: s } = e;
        return (0, n.jsx)("div", {
          className: o(a.container, s),
          children: (0, n.jsxs)("div", {
            className: a.innerContainer,
            children: [
              (0, n.jsx)("img", { src: i, alt: "", className: a.star }),
              (0, n.jsx)("div", {
                className: a.iconWrapper,
                children: (0, n.jsx)(t, { width: 40, height: 40 }),
              }),
              (0, n.jsx)("img", { src: r, alt: "", className: a.sparkle }),
            ],
          }),
        });
      }
    },
    950603: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("414456"),
        o = s.n(l),
        a = s("77078"),
        r = s("694187");
      function i(e) {
        let {
          buttonCTA: t,
          onChange: s,
          "aria-label": l,
          multiple: i = !1,
          disabled: u = !1,
          submitting: c = !1,
          ...d
        } = e;
        return (0, n.jsx)(a.FocusRing, {
          within: !0,
          children: (0, n.jsxs)("div", {
            className: o(
              (0, a.getButtonStyle)({ ...d, submitting: c, disabled: u })
            ),
            style: { width: "max-content" },
            "aria-disabled": u,
            children: [
              (0, n.jsx)("span", { "aria-hidden": !0, children: t }),
              (0, n.jsx)(r.default, {
                tabIndex: 0,
                onChange: s,
                multiple: i,
                "aria-label": null != l ? l : t,
                disabled: u,
              }),
            ],
          }),
        });
      }
    },
    422403: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("469563"),
        o = s("639055"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: s = 16,
              color: l = "currentColor",
              className: o,
              foreground: a,
            } = e;
            return (0, n.jsx)("svg", {
              className: o,
              width: t,
              height: s,
              viewBox: "0 0 16 16",
              children: (0, n.jsxs)("g", {
                fill: "none",
                children: [
                  (0, n.jsx)("path", { d: "M-4-4h24v24H-4z" }),
                  (0, n.jsx)("path", {
                    className: a,
                    fill: l,
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
    818643: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("469563"),
        o = s("851298"),
        a = s("75196"),
        r = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: l = "currentColor",
              ...o
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, a.default)(o),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                  fill: l,
                }),
                (0, n.jsx)("path", {
                  d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                  fill: l,
                }),
              ],
            });
          },
          o.ImagePlusIcon,
          void 0,
          { size: 24 }
        );
    },
    62418: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          mapOptionToHighlightedRowOptions: function () {
            return u;
          },
          generateVerificationLevelOptions: function () {
            return c;
          },
          generateContentFilterHighlightedOptions: function () {
            return d;
          },
          generateDmSpamOptions: function () {
            return E;
          },
          generateExplicitImageOptions: function () {
            return f;
          },
        });
      var n = s("151426");
      s("854588");
      var l = s("669491"),
        o = s("797944"),
        a = s("49111"),
        r = s("568456"),
        i = s("782340");
      function u(e) {
        return e.map(e => ({
          title: e.name,
          description: e.desc,
          highlightColor: (function (e) {
            switch (e) {
              case _("PRIMARY_400"):
                return o.HighlightColors.ACCENT;
              case _("GREEN_360"):
                return o.HighlightColors.GREEN;
              case _("YELLOW_360"):
                return o.HighlightColors.YELLOW;
              case _("ORANGE_345"):
                return o.HighlightColors.ORANGE;
              case _("RED_400"):
                return o.HighlightColors.RED;
              default:
                return o.HighlightColors.NONE;
            }
          })(e.color),
          value: e.value,
          disabled: e.disabled,
        }));
      }
      function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: i.default.Messages.VERIFICATION_LEVEL_NONE,
            desc: i.default.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: a.VerificationLevels.NONE,
            disabled: e,
            tooltipText: e
              ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
          },
          {
            name: i.default.Messages.VERIFICATION_LEVEL_LOW,
            desc: i.default.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: a.VerificationLevels.LOW,
            color: t ? void 0 : _("GREEN_360"),
          },
          {
            name: i.default.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: i.default.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
              min: a.VerificationCriteria.ACCOUNT_AGE,
            }),
            value: a.VerificationLevels.MEDIUM,
            color: t ? void 0 : _("YELLOW_360"),
          },
          {
            name: i.default.Messages.VERIFICATION_LEVEL_HIGH,
            desc: i.default.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
              min: a.VerificationCriteria.MEMBER_AGE,
            }),
            value: a.VerificationLevels.HIGH,
            color: t ? void 0 : _("ORANGE_345"),
          },
          {
            name: i.default.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: i.default.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: a.VerificationLevels.VERY_HIGH,
            color: t ? void 0 : _("RED_400"),
          },
        ];
      }
      function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: i.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: i.default.Messages
              .EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: a.GuildExplicitContentFilterTypes.ALL_MEMBERS,
            color: _("RED_400"),
          },
          {
            name: i.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: i.default.Messages
              .EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: a.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e
              ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: _("YELLOW_360"),
          },
          {
            name: i.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: i.default.Messages
              .EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: a.GuildExplicitContentFilterTypes.DISABLED,
            disabled: e,
            tooltipText: e
              ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: _("PRIMARY_400"),
          },
        ];
      }
      function E() {
        return [
          {
            name: i.default.Messages
              .USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: i.default.Messages
              .USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: n.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS,
            color: _("GREEN_360"),
          },
          {
            name: i.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: i.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: n.DmSpamFilterV2.NON_FRIENDS,
            color: _("YELLOW_360"),
          },
          {
            name: i.default.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: i.default.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: n.DmSpamFilterV2.DISABLED,
            color: _("RED_400"),
          },
        ];
      }
      function f() {
        return [
          {
            name: i.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: i.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: r.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS,
            color: _("GREEN_360"),
          },
          {
            name: i.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: i.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: r.ExplicitContentFilterTypes.NON_FRIENDS,
            color: _("YELLOW_360"),
          },
          {
            name: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: i.default.Messages
              .USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: r.ExplicitContentFilterTypes.DISABLED,
            color: _("RED_400"),
          },
        ];
      }
      function _(e) {
        return l.default.unsafe_rawColors[e].css;
      }
    },
    815718: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          EyeDropperIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        o = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: a = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...i
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, o.default)(i),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "m16.25 2.25-2 2-.63-.63a3 3 0 0 0-4.24 0l-.85.85c-.3.3-.3.77 0 1.06l9.94 9.94c.3.3.77.3 1.06 0l.85-.85a3 3 0 0 0 0-4.24l-.63-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.3 9.7a1 1 0 0 1 1.4 0l3.6 3.6a1 1 0 0 1 0 1.4l-4.84 4.84a5 5 0 0 1-2.7 1.39c-.47.08-.86.42-1.1.83a2.5 2.5 0 1 1-3.42-3.42c.41-.24.75-.63.83-1.1a5 5 0 0 1 1.4-2.7L9.28 9.7Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=8c9742fc28af6c22f255.js.map

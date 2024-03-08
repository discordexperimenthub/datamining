(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65875"],
  {
    748268: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c87be216431a35927431.svg";
    },
    913139: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var n = s("913144"),
        r = {
          addKeybind(e) {
            n.default.dispatch({ type: "KEYBINDS_ADD_KEYBIND", keybind: e });
          },
          setKeybind(e) {
            n.default.dispatch({ type: "KEYBINDS_SET_KEYBIND", keybind: e });
          },
          deleteKeybind(e) {
            n.default.dispatch({ type: "KEYBINDS_DELETE_KEYBIND", id: e });
          },
          enableAll(e) {
            n.default.dispatch({
              type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
              enable: e,
            });
          },
        };
    },
    278108: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return p;
          },
        }),
        s("222007"),
        s("424973");
      var n = s("37983"),
        r = s("884691"),
        l = s("499032"),
        a = s.n(l),
        i = s("312165"),
        o = s("3958"),
        d = s("773336"),
        c = s("50885"),
        u = s("49111");
      let h =
        d.isPlatformEmbedded &&
        null != c.default.getDiscordUtils().inputCaptureRegisterElement;
      class f extends r.PureComponent {
        componentDidMount() {
          this._mounted = !0;
        }
        componentWillUnmount() {
          (this._mounted = !1), this.cleanUp();
        }
        componentDidUpdate(e) {
          this.props.defaultValue !== e.defaultValue &&
            this.setState({ codes: this.props.defaultValue });
        }
        cleanUp() {
          d.isPlatformEmbedded &&
            null != this.gs &&
            (this.gs.destroy(), (this.gs = null));
        }
        handleComboChange(e) {
          let { mode: t } = this.state,
            { onChange: s } = this.props;
          t === o.RecordModes.RECORDING &&
            (null != s && s(e), this.setState({ codes: e }));
        }
        render() {
          let e, t;
          let { codes: s, mode: r } = this.state,
            { disabled: l } = this.props;
          return (
            h
              ? ((t = c.default.getDiscordUtils().inputCaptureRegisterElement),
                (e = this.handleNativeChange))
              : !d.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, n.jsx)(o.default, {
              disabled: l,
              value: s,
              mode: r,
              onClick: this.toggleRecordMode,
              onChange: e,
              registerNativeRecorder: t,
              disableOnClickWhileRecording: h,
            })
          );
        }
        constructor(e) {
          super(e),
            (this._mounted = !1),
            (this.recordStart = () => {
              d.isPlatformEmbedded &&
                !h &&
                ((this.gs = new i.default()),
                this.gs.on("change", this.handleGSChange)),
                this.setState({ mode: o.RecordModes.RECORDING });
            }),
            (this.recordEnd = () => {
              this.cleanUp(), this.setState({ mode: o.RecordModes.DEFAULT });
            }),
            (this.toggleRecordMode = () => {
              this.state.mode === o.RecordModes.DEFAULT
                ? this.recordStart()
                : this.recordEnd();
            }),
            (this.handleComboKeys = (e, t, s) => {
              if ((s.preventDefault(), "keydown" === s.type)) {
                let e = t.map(e => [
                    u.KeyboardDeviceTypes.KEYBOARD_KEY,
                    a(e),
                    u.KeyboardEnvs.BROWSER,
                  ]),
                  { keyCode: n } = s;
                null ==
                  e.find(e => {
                    let [, t] = e;
                    return n === t;
                  }) &&
                  e.push([
                    u.KeyboardDeviceTypes.KEYBOARD_KEY,
                    n,
                    u.KeyboardEnvs.BROWSER,
                  ]),
                  this.handleComboChange(e);
              }
            }),
            (this.handleGSChange = e => {
              if (!1 === this._mounted) return;
              let t = [...e.combo];
              this.handleComboChange(t);
            }),
            (this.handleNativeChange = e => {
              e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
          let { defaultValue: t } = e;
          this.state = { codes: t, mode: o.RecordModes.DEFAULT };
        }
      }
      var p = f;
    },
    225389: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("331008");
      s.es(n, t);
    },
    505088: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s("506070");
      s.es(n, t);
    },
    312165: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        }),
        s("222007"),
        s("424973");
      var n,
        r = s("44170"),
        l = s("773336"),
        a = s("50885"),
        i = s("13798"),
        o = s("49111");
      let d = [],
        c = (e, t, s) => {
          let n = (0, l.isWindows)() ? 0 : 1;
          (e !== o.KeyboardDeviceTypes.MOUSE_BUTTON || s !== n) &&
            d.forEach(n => n._handleEvent(e, t, s));
        };
      n = class extends r.EventEmitter {
        destroy() {
          this.removeAllListeners(),
            0 === (d = d.filter(e => e !== this)).length &&
              a.default.setOnInputEventCallback(null);
        }
        toString() {
          return (0, i.toString)(this.combo);
        }
        _handleEvent(e, t, s) {
          0 === t
            ? (this.combo = this.combo.filter(t => {
                let [n, r] = t;
                return !(n === e && r === s);
              }))
            : (this.combo.push([e, s, (0, i.getEnv)()]),
              this.emit("change", this));
        }
        constructor() {
          super(),
            (this.combo = []),
            d.push(this),
            1 === d.length && a.default.setOnInputEventCallback(c);
        }
      };
    },
    644926: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        }),
        s("222007");
      var n = s("37983"),
        r = s("884691"),
        l = s("446674"),
        a = s("77078"),
        i = s("913139"),
        o = s("278108"),
        d = s("485328"),
        c = s("227602"),
        u = s("555158"),
        h = s("13798"),
        f = s("846325"),
        p = s("49111"),
        R = s("782340"),
        E = s("963534");
      function m(e) {
        var t;
        let { transitionState: s, onClose: m } = e,
          N = (0, l.useStateFromStores)([c.default], () =>
            c.default.getKeybindForAction(
              p.GlobalKeybindActions.SOUNDBOARD_HOLD
            )
          ),
          [g, D] = r.useState(
            null !== (t = null == N ? void 0 : N.shortcut) && void 0 !== t
              ? t
              : []
          );
        return (
          r.useEffect(
            () => (
              d.default.disable(),
              () => {
                d.default.enable();
              }
            ),
            []
          ),
          (0, n.jsxs)(a.ModalRoot, {
            transitionState: s,
            children: [
              (0, n.jsxs)(a.ModalHeader, {
                separator: !1,
                children: [
                  (0, n.jsx)(a.Heading, {
                    className: E.header,
                    variant: "heading-xl/semibold",
                    children:
                      R.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER,
                  }),
                  (0, n.jsx)(a.ModalCloseButton, {
                    className: E.closeButton,
                    onClick: m,
                  }),
                ],
              }),
              (0, n.jsxs)(a.ModalContent, {
                className: E.content,
                children: [
                  (0, n.jsx)(u.default, {
                    className: E.warning,
                    messageType: u.HelpMessageTypes.WARNING,
                    children:
                      R.default.Messages
                        .SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE,
                  }),
                  (0, n.jsx)(a.Heading, {
                    className: E.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: R.default.Messages.USER_SETTINGS_KEYBINDS_ACTION,
                  }),
                  (0, n.jsx)(a.Text, {
                    className: E.action,
                    variant: "text-md/normal",
                    children: R.default.Messages.KEYBIND_SOUNDBOARD_HOLD,
                  }),
                  (0, n.jsx)(a.Text, {
                    className: E.actionDescription,
                    variant: "text-sm/normal",
                    children:
                      R.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD,
                  }),
                  (0, n.jsx)(a.Heading, {
                    className: E.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: R.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
                  }),
                  (0, n.jsx)(o.default, { defaultValue: g, onChange: D }),
                  (0, n.jsx)(a.Anchor, {
                    className: E.resetButton,
                    onClick: () => D((0, h.toCombo)(f.DEFAULT_KEYBIND)),
                    children:
                      R.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND,
                  }),
                ],
              }),
              (0, n.jsxs)(a.ModalFooter, {
                children: [
                  (0, n.jsx)(a.Button, {
                    onClick: function () {
                      if (0 === g.length)
                        return null != N && i.default.deleteKeybind(N.id), m();
                      null == N
                        ? i.default.addKeybind({
                            action: p.GlobalKeybindActions.SOUNDBOARD_HOLD,
                            shortcut: g,
                            enabled: !0,
                            params: {},
                          })
                        : i.default.setKeybind({ ...N, shortcut: g });
                      m();
                    },
                    children: R.default.Messages.SAVE,
                  }),
                  (0, n.jsx)(a.Button, {
                    onClick: m,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    children: R.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    555158: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HelpMessageTypes: function () {
            return r;
          },
          default: function () {
            return p;
          },
        });
      var n,
        r,
        l = s("37983");
      s("884691");
      var a = s("414456"),
        i = s.n(a),
        o = s("77078"),
        d = s("36694"),
        c = s("381546"),
        u = s("68238"),
        h = s("423487"),
        f = s("950038");
      ((n = r || (r = {}))[(n.WARNING = 0)] = "WARNING"),
        (n[(n.INFO = 1)] = "INFO"),
        (n[(n.ERROR = 2)] = "ERROR"),
        (n[(n.POSITIVE = 3)] = "POSITIVE");
      var p = function (e) {
        let {
            children: t,
            messageType: s,
            className: n,
            textColor: r = "text-normal",
            textVariant: a = "text-sm/medium",
          } = e,
          p = (function (e) {
            switch (e) {
              case 0:
                return h.default;
              case 1:
                return u.default;
              case 2:
                return c.default;
              case 3:
                return d.default;
            }
          })(s),
          R = (function (e) {
            switch (e) {
              case 0:
                return f.warning;
              case 1:
                return f.info;
              case 2:
                return f.error;
              case 3:
                return f.positive;
            }
          })(s);
        return (0, l.jsxs)("div", {
          className: i(f.container, R, n),
          children: [
            (0, l.jsx)("div", {
              className: f.iconDiv,
              children: (0, l.jsx)(p, { className: f.icon }),
            }),
            (0, l.jsx)(o.Text, {
              className: f.text,
              color: r,
              variant: a,
              children: t,
            }),
          ],
        });
      };
    },
    3958: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          RecordModes: function () {
            return n;
          },
          default: function () {
            return D;
          },
        }),
        s("222007");
      var n,
        r,
        l = s("37983"),
        a = s("884691"),
        i = s("414456"),
        o = s.n(i),
        d = s("800648"),
        c = s.n(d),
        u = s("917351"),
        h = s.n(u),
        f = s("77078"),
        p = s("13798"),
        R = s("145131"),
        E = s("782340"),
        m = s("363172");
      ((r = n || (n = {})).DEFAULT = "DEFAULT"), (r.RECORDING = "RECORDING");
      let N = { DEFAULT: m.default, RECORDING: m.recording };
      class g extends a.PureComponent {
        componentWillUnmount() {
          null != this._unregisterNativeRecorder &&
            this._unregisterNativeRecorder();
        }
        componentDidUpdate(e) {
          let { mode: t } = this.props,
            { mode: s } = e;
          if (s === t) return;
          let { _inputRef: n } = this;
          if (null == n.current) return;
          let { activeElement: r } = document;
          "DEFAULT" === t && n.current === r && n.current.blur(),
            "RECORDING" === t && n.current !== r && n.current.focus();
        }
        render() {
          let e;
          let { mode: t, value: s, disabled: n } = this.props,
            r = (0, p.toString)(s, !0);
          e =
            "RECORDING" === t
              ? E.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING
              : 0 === s.length
                ? E.default.Messages.SHORTCUT_RECORDER_BUTTON
                : E.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
          let a = "DEFAULT" === t && s.length > 0;
          return (0, l.jsx)(f.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, l.jsx)("div", {
              onClick: this.handleClick,
              onMouseDown: this.handleMouseDown,
              ref: this._containerRef,
              className: o(m.container, N[t], {
                [m.hasValue]: a,
                [m.disabled]: n,
              }),
              children: (0, l.jsxs)(R.default, {
                className: m.layout,
                children: [
                  (0, l.jsx)(R.default.Child, {
                    className: m.input,
                    children: (0, l.jsx)("input", {
                      id: this._inputId,
                      placeholder: E.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                      type: "text",
                      ref: this.setInputRef,
                      readOnly: !0,
                      value: r,
                      disabled: "RECORDING" !== this.props.mode || n,
                    }),
                  }),
                  (0, l.jsx)(R.default, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, l.jsxs)(f.Button, {
                      className: m.button,
                      disabled: n,
                      onClick: e => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          this.handleClick(e);
                      },
                      size: f.Button.Sizes.MIN,
                      color: f.ButtonColors.PRIMARY,
                      children: [
                        (0, l.jsx)("span", { className: m.text, children: e }),
                        (0, l.jsx)("span", { className: m.editIcon }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this._inputId = h.uniqueId("key-recorder-")),
            (this._unregisterNativeRecorder = null),
            (this._mousedownMode = null),
            (this._inputRef = a.createRef()),
            (this._containerRef = a.createRef()),
            (this.setInputRef = e => {
              var t;
              let { registerNativeRecorder: s, onChange: n } = this.props;
              if (
                ((this._inputRef.current = e),
                null === (t = this._unregisterNativeRecorder) ||
                  void 0 === t ||
                  t.call(this),
                null != e)
              ) {
                if (null != s && null != n)
                  this._unregisterNativeRecorder = s(e.id, n);
                else if (null != n) {
                  let t = new c(e);
                  t.handleKey = n;
                }
              }
            }),
            (this.handleClick = e => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t, disableOnClickWhileRecording: s } = this.props;
              (!s || "RECORDING" !== this._mousedownMode) && t();
            }),
            (this.handleMouseDown = () => {
              this._mousedownMode = this.props.mode;
            });
        }
      }
      var D = g;
    },
    381546: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("469563"),
        l = s("505088"),
        a = s("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: r = "currentColor",
              foreground: l,
              backgroundColor: i,
              ...o
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, a.default)(o),
              width: t,
              height: s,
              viewBox: "0 0 14 14",
              children: [
                null != i
                  ? (0, n.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: i })
                  : null,
                (0, n.jsx)("path", {
                  fill: r,
                  className: l,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          l.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    68238: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("469563"),
        l = s("225389"),
        a = s("75196"),
        i = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: s = 16,
              color: r = "currentColor",
              foreground: l,
              ...i
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, a.default)(i),
              width: t,
              height: s,
              viewBox: "0 0 12 12",
              children: (0, n.jsx)("path", {
                fill: r,
                className: l,
                d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z",
              }),
            });
          },
          l.CircleInformationIcon,
          {},
          { size: 16 }
        );
    },
    331008: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CircleInformationIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          secondaryColor: a = "transparent",
          secondaryColorClass: i = "",
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...c
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof a ? a : a.css,
              className: i,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
    506070: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CircleXIcon: function () {
            return a;
          },
        });
      var n = s("37983");
      s("884691");
      var r = s("669491"),
        l = s("82169");
      let a = e => {
        let {
          width: t = 24,
          height: s = 24,
          secondaryColor: a = "transparent",
          secondaryColorClass: i = "",
          color: o = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: d = "",
          ...c
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof a ? a : a.css,
              className: i,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=b117765550439bf43ada.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98695"],
  {
    748268: function (e, t, s) {
      "use strict";
      e.exports = s.p + "c87be216431a35927431.svg";
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
        l = s("884691"),
        i = s("499032"),
        a = s.n(i),
        r = s("312165"),
        o = s("3958"),
        d = s("773336"),
        u = s("50885"),
        h = s("49111");
      let c =
        d.isPlatformEmbedded &&
        null != u.default.getDiscordUtils().inputCaptureRegisterElement;
      class m extends l.PureComponent {
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
          let { codes: s, mode: l } = this.state,
            { disabled: i } = this.props;
          return (
            c
              ? ((t = u.default.getDiscordUtils().inputCaptureRegisterElement),
                (e = this.handleNativeChange))
              : !d.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, n.jsx)(o.default, {
              disabled: i,
              value: s,
              mode: l,
              onClick: this.toggleRecordMode,
              onChange: e,
              registerNativeRecorder: t,
              disableOnClickWhileRecording: c,
            })
          );
        }
        constructor(e) {
          super(e),
            (this._mounted = !1),
            (this.recordStart = () => {
              d.isPlatformEmbedded &&
                !c &&
                ((this.gs = new r.default()),
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
                    h.KeyboardDeviceTypes.KEYBOARD_KEY,
                    a(e),
                    h.KeyboardEnvs.BROWSER,
                  ]),
                  { keyCode: n } = s;
                null ==
                  e.find(e => {
                    let [, t] = e;
                    return n === t;
                  }) &&
                  e.push([
                    h.KeyboardDeviceTypes.KEYBOARD_KEY,
                    n,
                    h.KeyboardEnvs.BROWSER,
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
      var p = m;
    },
    301450: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return x;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        i = s("917351"),
        a = s.n(i),
        r = s("446674"),
        o = s("77078"),
        d = s("629109"),
        u = s("278108"),
        h = s("996808"),
        c = s("42887"),
        m = s("145131"),
        p = s("476765"),
        f = s("829536"),
        g = s("49111"),
        E = s("353927"),
        R = s("782340"),
        T = s("519135"),
        _ = s("890957");
      let C = (0, p.uid)(),
        M = (0, p.uid)(),
        O = (0, p.uid)();
      class D extends l.PureComponent {
        handleValueRender(e) {
          return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
        }
        renderAutomaticVADToggle() {
          let { autoThreshold: e } = this.props;
          return (0, n.jsx)(p.UID, {
            children: t =>
              (0, n.jsxs)(m.default, {
                className: _.marginBottom4,
                children: [
                  (0, n.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H3,
                    children: (0, n.jsx)("label", {
                      htmlFor: t,
                      children: R.default.Messages.FORM_LABEL_AUTOMATIC_VAD,
                    }),
                  }),
                  (0, n.jsx)(o.Switch, {
                    id: t,
                    checked: e,
                    onChange: this.handleAutoThresholdChange,
                  }),
                ],
              }),
          });
        }
        renderSlider() {
          let { autoThreshold: e, threshold: t } = this.props;
          if (!e)
            return (0, n.jsx)(o.Slider, {
              initialValue: t + 100,
              onValueRender: this.handleValueRender,
              onValueChange: this.handleSensitivityChange,
              "aria-label": R.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
            });
        }
        render() {
          return (0, n.jsxs)(o.FormItem, {
            title: R.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
            className: _.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleAutoThresholdChange = e => {
              let { onThresholdChange: t, threshold: s } = this.props;
              null == t || t(s, e);
            }),
            (this.handleSensitivityChange = e => {
              let { onThresholdChange: t, autoThreshold: s } = this.props;
              null == t || t(-((100 - e) * 1), s);
            });
        }
      }
      let I = r.default.connectStores([c.default], e => {
        let { mediaEngineContext: t } = e;
        return {
          inputVolume: c.default.getInputVolume(),
          outputVolume: c.default.getOutputVolume(),
          inputDeviceId: c.default.getInputDeviceId(),
          inputDevices: c.default.getInputDevices(),
          outputDevices: c.default.getOutputDevices(),
          outputDeviceId: c.default.getOutputDeviceId(),
          inputMode: c.default.getMode(t),
          shortcut: c.default.getModeOptions(t).shortcut,
          vadThreshold: c.default.getModeOptions(t).threshold,
          vadAutoThreshold: c.default.getModeOptions(t).autoThreshold,
          delay: c.default.getModeOptions(t).delay,
        };
      })(e => {
        let t,
          {
            mediaEngineContext: s,
            inputMode: i,
            shortcut: r,
            delay: h,
            vadThreshold: c,
            vadAutoThreshold: m,
            inputDevices: p,
            inputDeviceId: E,
            inputVolume: T,
            outputDeviceId: I,
            outputDevices: x,
            outputVolume: v,
            speaking: N = !1,
          } = e,
          S = a.first(p),
          b = null != S && S.disabled,
          U = a.first(x),
          A = null != U && U.disabled,
          j = [
            {
              value: g.InputModes.VOICE_ACTIVITY,
              name: R.default.Messages.INPUT_MODE_VAD,
            },
            {
              value: g.InputModes.PUSH_TO_TALK,
              name: R.default.Messages.INPUT_MODE_PTT,
            },
          ];
        return (
          (t =
            i === g.InputModes.PUSH_TO_TALK
              ? (0, n.jsxs)(l.Fragment, {
                  children: [
                    (0, n.jsx)(o.FormItem, {
                      title: R.default.Messages.FORM_LABEL_SHORTCUT,
                      className: _.marginBottom20,
                      children: (0, n.jsx)(u.default, {
                        defaultValue: r,
                        onChange: e => d.default.setMode(i, { shortcut: e }, s),
                      }),
                    }),
                    (0, n.jsxs)(o.FormItem, {
                      className: _.marginBottom8,
                      children: [
                        (0, n.jsx)(o.FormTitle, {
                          id: C,
                          children:
                            R.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY,
                        }),
                        (0, n.jsx)(o.Slider, {
                          initialValue: h,
                          onValueChange: e =>
                            d.default.setMode(i, { delay: e }, s),
                          onValueRender: e =>
                            e >= 1e3
                              ? ((e /= 1e3), "".concat(e.toFixed(2), "s"))
                              : "".concat(e.toFixed(0), "ms"),
                          maxValue: g.MAX_PTT_RELEASE_DELAY,
                          "aria-labelledby": C,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.jsx)(D, {
                  speaking: N,
                  inputMode: i,
                  threshold: c,
                  autoThreshold: m,
                  onThresholdChange: (e, t) =>
                    d.default.setMode(i, { threshold: e, autoThreshold: t }, s),
                })),
          (0, n.jsxs)(l.Fragment, {
            children: [
              (0, n.jsx)(o.FormItem, {
                title: R.default.Messages.FORM_LABEL_INPUT_DEVICE,
                className: _.marginBottom20,
                children: (0, n.jsx)(o.SingleSelect, {
                  value: E,
                  onChange: e => d.default.setInputDevice(e, "Voice Settings"),
                  options: a.map(p, e => {
                    let { id: t, name: s } = e;
                    return { value: t, label: s };
                  }),
                  isDisabled: b,
                }),
              }),
              (0, n.jsxs)(o.FormItem, {
                className: _.marginBottom20,
                children: [
                  (0, n.jsx)(o.FormTitle, {
                    id: M,
                    children: R.default.Messages.FORM_LABEL_INPUT_VOLUME,
                  }),
                  (0, n.jsx)(o.Slider, {
                    initialValue: (0, f.amplitudeToPerceptual)(T),
                    asValueChanges: e =>
                      d.default.setInputVolume((0, f.perceptualToAmplitude)(e)),
                    "aria-labelledby": M,
                  }),
                ],
              }),
              (0, n.jsx)(o.FormItem, {
                title: R.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
                className: _.marginBottom20,
                children: (0, n.jsx)(o.SingleSelect, {
                  value: I,
                  onChange: e => d.default.setOutputDevice(e, "Voice Settings"),
                  options: a.map(x, e => {
                    let { id: t, name: s } = e;
                    return { value: t, label: s };
                  }),
                  isDisabled: A,
                }),
              }),
              (0, n.jsxs)(o.FormItem, {
                className: _.marginBottom20,
                children: [
                  (0, n.jsx)(o.FormTitle, {
                    id: O,
                    children: R.default.Messages.FORM_LABEL_OUTPUT_VOLUME,
                  }),
                  (0, n.jsx)(o.Slider, {
                    initialValue: (0, f.amplitudeToPerceptual)(v),
                    maxValue: 200,
                    asValueChanges: e =>
                      d.default.setOutputVolume(
                        (0, f.perceptualToAmplitude)(e)
                      ),
                    "aria-labelledby": O,
                  }),
                ],
              }),
              (0, n.jsx)(o.FormItem, {
                title: R.default.Messages.FORM_LABEL_INPUT_MODE,
                className: _.marginBottom20,
                children: (0, n.jsx)(o.RadioGroup, {
                  onChange: e => {
                    let { value: t } = e;
                    return d.default.setMode(t, {}, s);
                  },
                  options: j,
                  value: i,
                }),
              }),
              t,
            ],
          })
        );
      });
      function x(e) {
        var t;
        return (
          (0, h.default)(() => {
            null != g.CURRENT_APP_CONTEXT && e.onClose();
          }),
          (0, n.jsxs)(o.ModalRoot, {
            transitionState: e.transitionState,
            "aria-label": R.default.Messages.VOICE_SETTINGS,
            children: [
              (0, n.jsxs)(o.ModalHeader, {
                children: [
                  (0, n.jsxs)(m.default.Child, {
                    children: [
                      (0, n.jsx)(o.FormTitle, {
                        tag: "h1",
                        className: _.marginReset,
                        children: R.default.Messages.VOICE_SETTINGS,
                      }),
                      (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        className: T.title,
                        children: e.title,
                      }),
                    ],
                  }),
                  (0, n.jsx)(m.default.Child, {
                    grow: 0,
                    children: (0, n.jsx)(o.ModalCloseButton, {
                      onClick: e.onClose,
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(o.ModalContent, {
                children: (0, n.jsx)(I, {
                  mediaEngineContext:
                    null !== (t = e.mediaEngineContext) && void 0 !== t
                      ? t
                      : E.MediaEngineContextTypes.DEFAULT,
                }),
              }),
            ],
          })
        );
      }
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
        l = s("44170"),
        i = s("773336"),
        a = s("50885"),
        r = s("13798"),
        o = s("49111");
      let d = [],
        u = (e, t, s) => {
          let n = (0, i.isWindows)() ? 0 : 1;
          (e !== o.KeyboardDeviceTypes.MOUSE_BUTTON || s !== n) &&
            d.forEach(n => n._handleEvent(e, t, s));
        };
      n = class extends l.EventEmitter {
        destroy() {
          this.removeAllListeners(),
            0 === (d = d.filter(e => e !== this)).length &&
              a.default.setOnInputEventCallback(null);
        }
        toString() {
          return (0, r.toString)(this.combo);
        }
        _handleEvent(e, t, s) {
          0 === t
            ? (this.combo = this.combo.filter(t => {
                let [n, l] = t;
                return !(n === e && l === s);
              }))
            : (this.combo.push([e, s, (0, r.getEnv)()]),
              this.emit("change", this));
        }
        constructor() {
          super(),
            (this.combo = []),
            d.push(this),
            1 === d.length && a.default.setOnInputEventCallback(u);
        }
      };
    },
    996808: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("884691"),
        l = s("913144");
      function i(e) {
        let t = (0, n.useRef)(e);
        (0, n.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, n.useEffect)(() => {
            if (__OVERLAY__) {
              function e(e) {
                e.locked && t.current();
              }
              return (
                l.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e),
                () => {
                  l.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e);
                }
              );
            }
          }, []);
      }
    },
    3958: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          RecordModes: function () {
            return n;
          },
          default: function () {
            return _;
          },
        }),
        s("222007");
      var n,
        l,
        i = s("37983"),
        a = s("884691"),
        r = s("414456"),
        o = s.n(r),
        d = s("800648"),
        u = s.n(d),
        h = s("917351"),
        c = s.n(h),
        m = s("77078"),
        p = s("13798"),
        f = s("145131"),
        g = s("782340"),
        E = s("363172");
      ((l = n || (n = {})).DEFAULT = "DEFAULT"), (l.RECORDING = "RECORDING");
      let R = { DEFAULT: E.default, RECORDING: E.recording };
      class T extends a.PureComponent {
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
          let { activeElement: l } = document;
          "DEFAULT" === t && n.current === l && n.current.blur(),
            "RECORDING" === t && n.current !== l && n.current.focus();
        }
        render() {
          let e;
          let { mode: t, value: s, disabled: n } = this.props,
            l = (0, p.toString)(s, !0);
          e =
            "RECORDING" === t
              ? g.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING
              : 0 === s.length
                ? g.default.Messages.SHORTCUT_RECORDER_BUTTON
                : g.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
          let a = "DEFAULT" === t && s.length > 0;
          return (0, i.jsx)(m.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, i.jsx)("div", {
              onClick: this.handleClick,
              onMouseDown: this.handleMouseDown,
              ref: this._containerRef,
              className: o(E.container, R[t], {
                [E.hasValue]: a,
                [E.disabled]: n,
              }),
              children: (0, i.jsxs)(f.default, {
                className: E.layout,
                children: [
                  (0, i.jsx)(f.default.Child, {
                    className: E.input,
                    children: (0, i.jsx)("input", {
                      id: this._inputId,
                      placeholder: g.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                      type: "text",
                      ref: this.setInputRef,
                      readOnly: !0,
                      value: l,
                      disabled: "RECORDING" !== this.props.mode || n,
                    }),
                  }),
                  (0, i.jsx)(f.default, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, i.jsxs)(m.Button, {
                      className: E.button,
                      disabled: n,
                      onClick: e => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          this.handleClick(e);
                      },
                      size: m.Button.Sizes.MIN,
                      color: m.ButtonColors.PRIMARY,
                      children: [
                        (0, i.jsx)("span", { className: E.text, children: e }),
                        (0, i.jsx)("span", { className: E.editIcon }),
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
            (this._inputId = c.uniqueId("key-recorder-")),
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
                  let t = new u(e);
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
      var _ = T;
    },
    476765: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          uid: function () {
            return a;
          },
          useUID: function () {
            return r;
          },
          UID: function () {
            return o;
          },
        });
      var n = s("995008"),
        l = s.n(n),
        i = s("775560");
      let a = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return l(e);
        },
        r = () => (0, i.useLazyValue)(() => a()),
        o = e => {
          let { children: t } = e;
          return t(r());
        };
    },
  },
]);
//# sourceMappingURL=3411b584ce13db10b4ef.js.map

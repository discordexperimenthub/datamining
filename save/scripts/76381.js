(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76381"],
  {
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
    307831: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          EXAMPLE_DOMAIN: function () {
            return n;
          },
          getDnsName: function () {
            return l;
          },
          getHttpName: function () {
            return o;
          },
        });
      let n = "example.com",
        l = e => "_discord.".concat(e),
        o = e => "https://".concat(e, "/.well-known/discord");
    },
    359113: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        }),
        s("222007"),
        s("506083");
      var n,
        l,
        o = s("37983"),
        r = s("884691"),
        a = s("872717"),
        i = s("77078"),
        c = s("920700"),
        u = s("145131"),
        d = s("555158"),
        f = s("306160"),
        N = s("307831"),
        h = s("49111"),
        I = s("782340"),
        m = s("703687");
      function x(e) {
        let { name: t, value: s } = e,
          [n, l] = r.useState(c.CopyInputModes.DEFAULT);
        return (0, o.jsxs)("div", {
          className: m.infoRow,
          children: [
            (0, o.jsx)(i.FormTitle, { className: m.infoTitle, children: t }),
            (0, o.jsx)(c.default, {
              value: s,
              mode: n,
              supportsCopy: f.SUPPORTS_COPY,
              onCopy: () => {
                (0, f.copy)(s), l(c.CopyInputModes.SUCCESS);
              },
            }),
          ],
        });
      }
      function C(e) {
        let { onClose: t, transitionState: s } = e,
          [n, l] = r.useState(""),
          [c, f] = r.useState(""),
          [C, p] = r.useState(null),
          [R, v] = r.useState(!1),
          [O, M] = r.useState("DOMAIN"),
          g = () => {
            v(!0),
              p(null),
              a.HTTP.post({
                url: h.Endpoints.CONNECTION(h.PlatformTypes.DOMAIN, n),
                body: {},
              })
                .then(() => {
                  t();
                })
                .catch(e => {
                  var t, s, n, l, o, r, a;
                  (null === (t = e.body) || void 0 === t ? void 0 : t.proof) &&
                  "DOMAIN" === O
                    ? (f(e.body.proof), M("PROOF_DNS"))
                    : p(
                        (null === (r = e.body) || void 0 === r
                          ? void 0
                          : null === (o = r.errors) || void 0 === o
                            ? void 0
                            : null === (l = o.domain) || void 0 === l
                              ? void 0
                              : null === (n = l._errors) || void 0 === n
                                ? void 0
                                : null === (s = n[0]) || void 0 === s
                                  ? void 0
                                  : s.message) ||
                          (null === (a = e.body) || void 0 === a
                            ? void 0
                            : a.message) ||
                          e.message
                      );
                })
                .finally(() => {
                  v(!1);
                });
          };
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: s,
          className: m.modal,
          children: [
            (0, o.jsxs)(i.ModalHeader, {
              direction: u.default.Direction.VERTICAL,
              className: m.header,
              separator: !1,
              children: [
                (0, o.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children: I.default.Messages.DOMAIN_VERIFICATION_HEADER,
                }),
                (0, o.jsx)(i.ModalCloseButton, {
                  className: m.closeButton,
                  onClick: t,
                }),
              ],
            }),
            (0, o.jsxs)(i.Slides, {
              activeSlide: O,
              width: 440,
              children: [
                (0, o.jsx)(i.Slide, {
                  id: "DOMAIN",
                  children: (0, o.jsxs)("form", {
                    onSubmit: e => {
                      e.preventDefault(), g();
                    },
                    children: [
                      (0, o.jsxs)(i.ModalContent, {
                        className: m.content,
                        children: [
                          (0, o.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: m.description,
                            children:
                              I.default.Messages
                                .DOMAIN_VERIFICATION_DESCRIPTION,
                          }),
                          (0, o.jsx)(i.FormItem, {
                            title: I.default.Messages.DOMAIN_VERIFICATION_LABEL,
                            error: C,
                            children: (0, o.jsx)(i.TextInput, {
                              onChange: l,
                              placeholder: N.EXAMPLE_DOMAIN,
                              maxLength: 253,
                              value: n,
                              disabled: R,
                              autoFocus: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsxs)(i.ModalFooter, {
                        className: m.footer,
                        children: [
                          (0, o.jsx)(i.Button, {
                            type: "submit",
                            submitting: R,
                            disabled: "" === n,
                            children: I.default.Messages.NEXT,
                          }),
                          (0, o.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: I.default.Messages.CANCEL,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, o.jsxs)(i.Slide, {
                  id: "PROOF_DNS",
                  children: [
                    (0, o.jsxs)(i.ModalContent, {
                      className: m.content,
                      children: [
                        (0, o.jsxs)("ol", {
                          className: m.list,
                          children: [
                            (0, o.jsx)("li", {
                              children: (0, o.jsx)(i.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                children:
                                  I.default.Messages
                                    .DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1,
                              }),
                            }),
                            (0, o.jsxs)("li", {
                              children: [
                                (0, o.jsx)(i.Text, {
                                  tag: "span",
                                  variant: "text-md/normal",
                                  children:
                                    I.default.Messages
                                      .DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2,
                                }),
                                (0, o.jsxs)("div", {
                                  className: m.dnsRecordContainer,
                                  children: [
                                    (0, o.jsx)(x, {
                                      name: I.default.Messages
                                        .DOMAIN_VERIFICATION_RECORD_NAME,
                                      value: (0, N.getDnsName)(n),
                                    }),
                                    (0, o.jsx)(x, {
                                      name: I.default.Messages
                                        .DOMAIN_VERIFICATION_RECORD_TYPE,
                                      value: "TXT",
                                    }),
                                    (0, o.jsx)(x, {
                                      name: I.default.Messages
                                        .DOMAIN_VERIFICATION_RECORD_CONTENT,
                                      value: c,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, o.jsx)(d.default, {
                          messageType: d.HelpMessageTypes.INFO,
                          className: m.text,
                          children:
                            I.default.Messages.DOMAIN_VERIFICATION_DNS_WARNING,
                        }),
                        null != C &&
                          (0, o.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: m.text,
                            children: C,
                          }),
                      ],
                    }),
                    (0, o.jsxs)(i.ModalFooter, {
                      className: m.footer,
                      direction: u.default.Direction.HORIZONTAL,
                      children: [
                        (0, o.jsx)(i.Button, {
                          look: i.Button.Looks.LINK,
                          color: i.Button.Colors.PRIMARY,
                          onClick: () => {
                            M("DOMAIN"), p(null);
                          },
                          children: I.default.Messages.BACK,
                        }),
                        (0, o.jsxs)("div", {
                          className: m.footerInner,
                          children: [
                            (0, o.jsx)(i.Button, {
                              look: i.Button.Looks.LINK,
                              color: i.Button.Colors.PRIMARY,
                              onClick: () => {
                                M("PROOF_HTTP"), p(null);
                              },
                              className: m.switchButton,
                              children:
                                I.default.Messages.DOMAIN_VERIFICATION_USE_HTTP,
                            }),
                            (0, o.jsx)(i.Button, {
                              submitting: R,
                              onClick: g,
                              children: I.default.Messages.VERIFY,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)(i.Slide, {
                  id: "PROOF_HTTP",
                  children: [
                    (0, o.jsxs)(i.ModalContent, {
                      className: m.content,
                      children: [
                        (0, o.jsx)(i.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          children:
                            I.default.Messages
                              .DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP,
                        }),
                        (0, o.jsxs)("div", {
                          className: m.httpFileContainer,
                          children: [
                            (0, o.jsx)(x, {
                              name: I.default.Messages
                                .DOMAIN_VERIFICATION_RECORD_NAME,
                              value: (0, N.getHttpName)(n),
                            }),
                            (0, o.jsx)(x, {
                              name: I.default.Messages
                                .DOMAIN_VERIFICATION_RECORD_CONTENT,
                              value: c,
                            }),
                          ],
                        }),
                        null != C &&
                          (0, o.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            className: m.text,
                            children: C,
                          }),
                      ],
                    }),
                    (0, o.jsxs)(i.ModalFooter, {
                      className: m.footer,
                      direction: u.default.Direction.HORIZONTAL,
                      children: [
                        (0, o.jsx)(i.Button, {
                          look: i.Button.Looks.LINK,
                          color: i.Button.Colors.PRIMARY,
                          onClick: () => {
                            M("DOMAIN"), p(null);
                          },
                          children: I.default.Messages.BACK,
                        }),
                        (0, o.jsxs)("div", {
                          className: m.footerInner,
                          children: [
                            (0, o.jsx)(i.Button, {
                              look: i.Button.Looks.LINK,
                              color: i.Button.Colors.PRIMARY,
                              onClick: () => {
                                M("PROOF_DNS"), p(null);
                              },
                              className: m.switchButton,
                              children:
                                I.default.Messages.DOMAIN_VERIFICATION_USE_DNS,
                            }),
                            (0, o.jsx)(i.Button, {
                              submitting: R,
                              onClick: g,
                              children: I.default.Messages.VERIFY,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      ((l = n || (n = {})).DOMAIN = "DOMAIN"),
        (l.PROOF_DNS = "PROOF_DNS"),
        (l.PROOF_HTTP = "PROOF_HTTP");
    },
    920700: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CopyInputModes: function () {
            return f;
          },
          default: function () {
            return h;
          },
        }),
        s("222007");
      var n = s("37983"),
        l = s("884691"),
        o = s("414456"),
        r = s.n(o),
        a = s("77078"),
        i = s("474293"),
        c = s("145131"),
        u = s("782340"),
        d = s("704524");
      let f = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
      class N extends l.PureComponent {
        select() {
          var e;
          null === (e = this.inputRef.current) || void 0 === e || e.select();
        }
        renderInput(e) {
          var t;
          let { value: s, mode: l } = this.props,
            o =
              null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
          return (0, n.jsx)("input", {
            className: r((0, i.getClass)(d, "input", l), {
              [d.inputHidden]: e,
            }),
            ref: this.inputRef,
            type: "text",
            value: s,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": o,
          });
        }
        render() {
          let e;
          let {
              text: t = u.default.Messages.COPY,
              mode: s,
              hideMessage: l,
              className: o,
              buttonLook: N,
            } = this.props,
            h = null != l;
          switch (s) {
            case f.SUCCESS:
              e = a.ButtonColors.GREEN;
              break;
            case f.ERROR:
              e = a.ButtonColors.RED;
              break;
            default:
              e = this.props.buttonColor;
          }
          return (0, n.jsx)(a.FocusRing, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
              className: r((0, i.getClass)(d, "copyInput", s), o),
              ref: this.containerRef,
              children: (0, n.jsxs)(c.default, {
                className: d.layout,
                children: [
                  (0, n.jsxs)(c.default, {
                    className: d.inputWrapper,
                    children: [
                      this.renderInput(h),
                      h
                        ? (0, n.jsx)("div", {
                            className: d.hiddenMessage,
                            children: l,
                          })
                        : null,
                    ],
                  }),
                  (0, n.jsx)(c.default, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, n.jsx)(a.Button, {
                      className: d.button,
                      onClick: this.handleButtonClick,
                      size: a.ButtonSizes.MIN,
                      color: e,
                      look: N,
                      children: t,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.inputRef = l.createRef()),
            (this.containerRef = l.createRef()),
            (this.handleButtonClick = () => {
              this.select();
              let { onCopy: e, value: t } = this.props;
              e(t);
            }),
            (this.handleInputClick = () => {
              this.select();
            });
        }
      }
      (N.contextType = a.FormContext),
        (N.defaultProps = {
          supportsCopy: !0,
          buttonColor: a.ButtonColors.PRIMARY,
          buttonLook: a.ButtonLooks.FILLED,
          mode: f.DEFAULT,
        }),
        (N.Modes = f),
        (N.ButtonColors = a.ButtonColors),
        (N.ButtonLooks = a.ButtonLooks);
      var h = N;
    },
    555158: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HelpMessageTypes: function () {
            return l;
          },
          default: function () {
            return h;
          },
        });
      var n,
        l,
        o = s("37983");
      s("884691");
      var r = s("414456"),
        a = s.n(r),
        i = s("77078"),
        c = s("36694"),
        u = s("381546"),
        d = s("68238"),
        f = s("423487"),
        N = s("950038");
      ((n = l || (l = {}))[(n.WARNING = 0)] = "WARNING"),
        (n[(n.INFO = 1)] = "INFO"),
        (n[(n.ERROR = 2)] = "ERROR"),
        (n[(n.POSITIVE = 3)] = "POSITIVE");
      var h = function (e) {
        let {
            children: t,
            messageType: s,
            className: n,
            textColor: l = "text-normal",
            textVariant: r = "text-sm/medium",
          } = e,
          h = (function (e) {
            switch (e) {
              case 0:
                return f.default;
              case 1:
                return d.default;
              case 2:
                return u.default;
              case 3:
                return c.default;
            }
          })(s),
          I = (function (e) {
            switch (e) {
              case 0:
                return N.warning;
              case 1:
                return N.info;
              case 2:
                return N.error;
              case 3:
                return N.positive;
            }
          })(s);
        return (0, o.jsxs)("div", {
          className: a(N.container, I, n),
          children: [
            (0, o.jsx)("div", {
              className: N.iconDiv,
              children: (0, o.jsx)(h, { className: N.icon }),
            }),
            (0, o.jsx)(i.Text, {
              className: N.text,
              color: l,
              variant: r,
              children: t,
            }),
          ],
        });
      };
    },
    381546: function (e, t, s) {
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
        o = s("505088"),
        r = s("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: l = "currentColor",
              foreground: o,
              backgroundColor: a,
              ...i
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, r.default)(i),
              width: t,
              height: s,
              viewBox: "0 0 14 14",
              children: [
                null != a
                  ? (0, n.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: a })
                  : null,
                (0, n.jsx)("path", {
                  fill: l,
                  className: o,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          o.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    68238: function (e, t, s) {
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
        o = s("225389"),
        r = s("75196"),
        a = (0, l.replaceIcon)(
          function (e) {
            let {
              width: t = 16,
              height: s = 16,
              color: l = "currentColor",
              foreground: o,
              ...a
            } = e;
            return (0, n.jsx)("svg", {
              ...(0, r.default)(a),
              width: t,
              height: s,
              viewBox: "0 0 12 12",
              children: (0, n.jsx)("path", {
                fill: l,
                className: o,
                d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z",
              }),
            });
          },
          o.CircleInformationIcon,
          {},
          { size: 16 }
        );
    },
    306160: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          SUPPORTS_COPY: function () {
            return r;
          },
          copy: function () {
            return a;
          },
        }),
        s("70102");
      var n = s("281071"),
        l = s("773336"),
        o = s("50885");
      let r = (() => {
        if (l.isPlatformEmbedded) return null != o.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function a(e) {
        return (
          !!r && (l.isPlatformEmbedded ? (o.default.copy(e), !0) : n.copy(e))
        );
      }
    },
    474293: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          getClass: function () {
            return l;
          },
        }),
        s("808653");
      var n = s("159885");
      function l(e, t) {
        for (
          var s = arguments.length, l = Array(s > 2 ? s - 2 : 0), o = 2;
          o < s;
          o++
        )
          l[o - 2] = arguments[o];
        let r = l.reduce((e, t) => e + (0, n.upperCaseFirstChar)(t), ""),
          a = "".concat(t).concat(r),
          i = e[a];
        if (null != i) return i;
      }
    },
    331008: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CircleInformationIcon: function () {
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        o = s("82169");
      let r = e => {
        let {
          width: t = 24,
          height: s = 24,
          secondaryColor: r = "transparent",
          secondaryColorClass: a = "",
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...u
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, o.default)(u),
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
              fill: "string" == typeof r ? r : r.css,
              className: a,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
              clipRule: "evenodd",
              className: c,
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
            return r;
          },
        });
      var n = s("37983");
      s("884691");
      var l = s("669491"),
        o = s("82169");
      let r = e => {
        let {
          width: t = 24,
          height: s = 24,
          secondaryColor: r = "transparent",
          secondaryColorClass: a = "",
          color: i = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: c = "",
          ...u
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, o.default)(u),
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
              fill: "string" == typeof r ? r : r.css,
              className: a,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    281071: function (e, t, s) {
      "use strict";
      function n(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let s = document.createRange(),
          n = window.getSelection(),
          l = document.createElement("textarea");
        (l.value = e),
          (l.contentEditable = "true"),
          (l.style.visibility = "none"),
          t.appendChild(l),
          s.selectNodeContents(l),
          null == n || n.removeAllRanges(),
          null == n || n.addRange(s),
          l.focus(),
          l.setSelectionRange(0, e.length);
        let o = document.execCommand("copy");
        return t.removeChild(l), o;
      }
      s.r(t),
        s.d(t, {
          copy: function () {
            return n;
          },
        }),
        s("70102");
    },
  },
]);
//# sourceMappingURL=76deb9b9472af5c59145.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37897"],
  {
    128981: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("424973");
      var r = n("446873"),
        a = n("728983"),
        i = n("884691"),
        c = n("634849"),
        o = "hcaptcha-api-script-id",
        s = "hcaptchaOnLoad",
        p = [],
        d = function (e) {
          void 0 === e && (e = {});
          var t = (0, c.getMountElement)(e.scriptLocation);
          delete e.scriptLocation;
          var n = (0, c.getFrame)(t),
            r = p.find(function (e) {
              return e.scope === n.window;
            });
          if (n.document.getElementById(o) && r) return r.promise;
          var a = new Promise(function (r, a) {
            n.window[s] = r;
            var i = e.apihost || "https://js.hcaptcha.com";
            delete e.apihost;
            var p = n.document.createElement("script");
            (p.id = o),
              (p.src = i + "/1/api.js?render=explicit&onload=" + s),
              (p.async = void 0 === e.loadAsync || e.loadAsync),
              delete e.loadAsync,
              (p.onerror = function (e) {
                return a("script-error");
              });
            var d = (0, c.generateQuery)(e);
            (p.src += "" !== d ? "&" + d : ""), t.appendChild(p);
          });
          return p.push({ promise: a, scope: n.window }), a;
        },
        l = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this)._hcaptcha = void 0),
              (n.renderCaptcha = n.renderCaptcha.bind((0, r.default)(n))),
              (n.resetCaptcha = n.resetCaptcha.bind((0, r.default)(n))),
              (n.removeCaptcha = n.removeCaptcha.bind((0, r.default)(n))),
              (n.isReady = n.isReady.bind((0, r.default)(n))),
              (n.loadCaptcha = n.loadCaptcha.bind((0, r.default)(n))),
              (n.handleOnLoad = n.handleOnLoad.bind((0, r.default)(n))),
              (n.handleSubmit = n.handleSubmit.bind((0, r.default)(n))),
              (n.handleExpire = n.handleExpire.bind((0, r.default)(n))),
              (n.handleError = n.handleError.bind((0, r.default)(n))),
              (n.handleOpen = n.handleOpen.bind((0, r.default)(n))),
              (n.handleClose = n.handleClose.bind((0, r.default)(n))),
              (n.handleChallengeExpired = n.handleChallengeExpired.bind(
                (0, r.default)(n)
              )),
              (n.ref = i.createRef()),
              (n.apiScriptRequested = !1),
              (n.state = {
                isApiReady: !1,
                isRemoved: !1,
                elementId: t.id,
                captchaId: "",
              }),
              n
            );
          }
          (0, a.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this,
                t = (0, c.getMountElement)(this.props.scriptLocation),
                n = (0, c.getFrame)(t);
              if (
                ((this._hcaptcha = n.window.hcaptcha || void 0),
                void 0 !== this._hcaptcha)
              ) {
                this.setState({ isApiReady: !0 }, function () {
                  e.renderCaptcha();
                });
                return;
              }
              this.loadCaptcha();
            }),
            (n.componentWillUnmount = function () {
              var e = this.state.captchaId,
                t = this._hcaptcha;
              this.isReady() && (t.reset(e), t.remove(e));
            }),
            (n.shouldComponentUpdate = function (e, t) {
              return (
                this.state.isApiReady === t.isApiReady &&
                this.state.isRemoved === t.isRemoved &&
                !0
              );
            }),
            (n.componentDidUpdate = function (e) {
              var t = this;
              ![
                "sitekey",
                "size",
                "theme",
                "tabindex",
                "languageOverride",
                "endpoint",
              ].every(function (n) {
                return e[n] === t.props[n];
              }) &&
                this.removeCaptcha(function () {
                  t.renderCaptcha();
                });
            }),
            (n.loadCaptcha = function () {
              if (!this.apiScriptRequested) {
                var e = this.props,
                  t = e.apihost,
                  n = e.assethost,
                  r = e.endpoint,
                  a = e.host,
                  i = e.imghost,
                  c = e.languageOverride,
                  o = e.reCaptchaCompat,
                  s = e.reportapi,
                  p = e.sentry,
                  l = e.custom,
                  u = e.loadAsync,
                  h = e.scriptLocation;
                d({
                  apihost: t,
                  assethost: n,
                  endpoint: r,
                  hl: c,
                  host: a,
                  imghost: i,
                  recaptchacompat: !1 === o ? "off" : null,
                  reportapi: s,
                  sentry: p,
                  custom: l,
                  loadAsync: u,
                  scriptLocation: h,
                })
                  .then(this.handleOnLoad)
                  .catch(this.handleError),
                  (this.apiScriptRequested = !0);
              }
            }),
            (n.renderCaptcha = function (e) {
              if (this.state.isApiReady) {
                var t = Object.assign(
                    {
                      "open-callback": this.handleOpen,
                      "close-callback": this.handleClose,
                      "error-callback": this.handleError,
                      "chalexpired-callback": this.handleChallengeExpired,
                      "expired-callback": this.handleExpire,
                      callback: this.handleSubmit,
                    },
                    this.props,
                    {
                      hl: this.props.hl || this.props.languageOverride,
                      languageOverride: void 0,
                    }
                  ),
                  n = this._hcaptcha.render(this.ref.current, t);
                this.setState({ isRemoved: !1, captchaId: n }, function () {
                  e && e();
                });
              }
            }),
            (n.resetCaptcha = function () {
              var e = this.state.captchaId,
                t = this._hcaptcha;
              this.isReady() && t.reset(e);
            }),
            (n.removeCaptcha = function (e) {
              var t = this.state.captchaId,
                n = this._hcaptcha;
              this.isReady() &&
                this.setState({ isRemoved: !0 }, function () {
                  n.remove(t), e && e();
                });
            }),
            (n.handleOnLoad = function () {
              var e = this;
              this.setState({ isApiReady: !0 }, function () {
                var t = (0, c.getMountElement)(e.props.scriptLocation),
                  n = (0, c.getFrame)(t);
                (e._hcaptcha = n.window.hcaptcha),
                  e.renderCaptcha(function () {
                    var t = e.props.onLoad;
                    t && t();
                  });
              });
            }),
            (n.handleSubmit = function (e) {
              var t = this.props.onVerify,
                n = this.state,
                r = n.isRemoved,
                a = n.captchaId,
                i = this._hcaptcha;
              if (void 0 !== i && !r) {
                var c = i.getResponse(a),
                  o = i.getRespKey(a);
                t && t(c, o);
              }
            }),
            (n.handleExpire = function () {
              var e = this.props.onExpire,
                t = this.state.captchaId,
                n = this._hcaptcha;
              this.isReady() && (n.reset(t), e && e());
            }),
            (n.handleError = function (e) {
              var t = this.props.onError,
                n = this.state.captchaId,
                r = this._hcaptcha;
              this.isReady() && r.reset(n), t && t(e);
            }),
            (n.isReady = function () {
              var e = this.state,
                t = e.isApiReady,
                n = e.isRemoved;
              return t && !n;
            }),
            (n.handleOpen = function () {
              this.isReady() && this.props.onOpen && this.props.onOpen();
            }),
            (n.handleClose = function () {
              this.isReady() && this.props.onClose && this.props.onClose();
            }),
            (n.handleChallengeExpired = function () {
              this.isReady() &&
                this.props.onChalExpired &&
                this.props.onChalExpired();
            }),
            (n.execute = function (e) {
              void 0 === e && (e = null);
              var t = this.state.captchaId,
                n = this._hcaptcha;
              if (this.isReady())
                return e && "object" != typeof e && (e = null), n.execute(t, e);
            }),
            (n.setData = function (e) {
              var t = this.state.captchaId,
                n = this._hcaptcha;
              this.isReady() &&
                (e && "object" != typeof e && (e = null), n.setData(t, e));
            }),
            (n.getResponse = function () {
              return this._hcaptcha.getResponse(this.state.captchaId);
            }),
            (n.getRespKey = function () {
              return this._hcaptcha.getRespKey(this.state.captchaId);
            }),
            (n.render = function () {
              var e = this.state.elementId;
              return i.createElement("div", { ref: this.ref, id: e });
            }),
            t
          );
        })(i.Component);
    },
    634849: function (e, t, n) {
      "use strict";
      function r(e) {
        return Object.entries(e)
          .filter(function (e) {
            e[0];
            var t = e[1];
            return t || !1 === t;
          })
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return encodeURIComponent(t) + "=" + encodeURIComponent(n);
          })
          .join("&");
      }
      function a(e) {
        var t = (e && e.ownerDocument) || document,
          n = t.defaultView || t.parentWindow || window;
        return { document: t, window: n };
      }
      function i(e) {
        return e || document.head;
      }
      n.r(t),
        n.d(t, {
          generateQuery: function () {
            return r;
          },
          getFrame: function () {
            return a;
          },
          getMountElement: function () {
            return i;
          },
        });
    },
    67164: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("808653"),
        n("70102");
      var r = n("884691"),
        a = n.n(r);
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = function (e) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.defer = !0),
            (t.src = e),
            document.head && document.head.appendChild(t);
        },
        o = /(http|https):\/\/(www)?.+\/recaptcha/,
        s = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        p = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).container =
                void 0),
              (t.timer = void 0),
              (t.state = {
                instanceKey: Date.now(),
                ready: !1,
                rendered: !1,
                invisible: "invisible" === t.props.size,
              }),
              (t._isAvailable = function () {
                var e;
                return !!(null == (e = window.grecaptcha) ? void 0 : e.ready);
              }),
              (t._inject = function () {
                var e;
                t.props.inject &&
                  ((e = o),
                  !Array.from(document.scripts).reduce(function (t, n) {
                    return t || e.test(n.src);
                  }, !1)) &&
                  c(
                    "https://recaptcha.net/recaptcha/api.js?render=explicit" +
                      (t.props.hl ? "&hl=" + t.props.hl : "")
                  );
              }),
              (t._prepare = function () {
                var e = t.props,
                  n = e.explicit,
                  r = e.onLoad;
                window.grecaptcha.ready(function () {
                  t.setState({ ready: !0 }, function () {
                    n || t.renderExplicitly(), r && r();
                  });
                });
              }),
              (t._renderRecaptcha = function (e, t) {
                return window.grecaptcha.render(e, t);
              }),
              (t._resetRecaptcha = function () {
                return window.grecaptcha.reset(t.state.instanceId);
              }),
              (t._executeRecaptcha = function () {
                return window.grecaptcha.execute(t.state.instanceId);
              }),
              (t._getResponseRecaptcha = function () {
                return window.grecaptcha.getResponse(t.state.instanceId);
              }),
              (t._onVerify = function (e) {
                return t.props.onVerify(e);
              }),
              (t._onExpire = function () {
                return t.props.onExpire && t.props.onExpire();
              }),
              (t._onError = function () {
                return t.props.onError && t.props.onError();
              }),
              (t._stopTimer = function () {
                t.timer && clearInterval(t.timer);
              }),
              (t.componentDidMount = function () {
                t._inject(),
                  t._isAvailable()
                    ? t._prepare()
                    : (t.timer = window.setInterval(function () {
                        t._isAvailable() && (t._prepare(), t._stopTimer());
                      }, 500));
              }),
              (t.componentWillUnmount = function () {
                t._stopTimer();
              }),
              (t.renderExplicitly = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered)
                    return n(
                      Error(
                        "This recaptcha instance has been already rendered."
                      )
                    );
                  if (!t.state.ready || !t.container)
                    return n(
                      Error("Recaptcha is not ready for rendering yet.")
                    );
                  var r = t._renderRecaptcha(t.container, {
                    sitekey: t.props.sitekey,
                    theme: t.props.theme,
                    size: t.props.size,
                    badge: t.state.invisible ? t.props.badge : void 0,
                    tabindex: t.props.tabindex,
                    callback: t._onVerify,
                    "expired-callback": t._onExpire,
                    "error-callback": t._onError,
                    isolated: t.state.invisible ? t.props.isolated : void 0,
                    hl: t.state.invisible ? void 0 : t.props.hl,
                  });
                  t.setState({ instanceId: r, rendered: !0 }, function () {
                    t.props.onRender && t.props.onRender(), e();
                  });
                });
              }),
              (t.reset = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered) return t._resetRecaptcha(), e();
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.execute = function () {
                return new Promise(function (e, n) {
                  return t.state.invisible
                    ? (t.state.rendered && (t._executeRecaptcha(), e()),
                      n(Error("This recaptcha instance did not render yet.")))
                    : n(
                        Error(
                          "Manual execution is only available for invisible size."
                        )
                      );
                });
              }),
              (t.getResponse = function () {
                return new Promise(function (e, n) {
                  if (t.state.rendered) return e(t._getResponseRecaptcha());
                  n(Error("This recaptcha instance did not render yet."));
                });
              }),
              (t.render = function () {
                var e = a.createElement("div", {
                  key: t.state.instanceKey,
                  id: t.props.id,
                  className: t.props.className,
                  ref: function (e) {
                    return (t.container = e);
                  },
                });
                return t.props.children
                  ? t.props.children({
                      renderExplicitly: t.renderExplicitly,
                      reset: t.reset,
                      execute: t.execute,
                      getResponse: t.getResponse,
                      recaptchaComponent: e,
                    })
                  : e;
              }),
              t
            );
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            i(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = "invisible" === e.size;
              return n !== t.invisible ? { invisible: n } : null;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this;
              s.reduce(function (n, r) {
                return t.props[r] !== e[r] ? [].concat(n, [r]) : n;
              }, []).length > 0 &&
                this.setState(
                  { instanceKey: Date.now(), rendered: !1 },
                  function () {
                    t.props.explicit || t.renderExplicitly();
                  }
                );
            }),
            t
          );
        })(r.Component);
      p.defaultProps = {
        id: "",
        className: "g-recaptcha",
        theme: "light",
        size: "normal",
        badge: "bottomright",
        tabindex: 0,
        explicit: !1,
        inject: !0,
        isolated: !1,
        hl: "",
      };
    },
    954035: function (e, t, n) {
      "use strict";
      e.exports = n.p + "863db41a48a43395cd55.svg";
    },
    446873: function (e, t, n) {
      "use strict";
      function r(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("854508"),
        n("70102");
    },
    507445: function (e, t, n) {
      "use strict";
      var r, a;
      function i(e) {
        return {
          captchaService: e.captcha_service,
          sitekey: e.captcha_sitekey,
          options: { rqdata: e.captcha_rqdata, rqtoken: e.captcha_rqtoken },
        };
      }
      n.r(t),
        n.d(t, {
          CaptchaError: function () {
            return r;
          },
          extractCaptchaPropsFromResponseBody: function () {
            return i;
          },
        }),
        ((a = r || (r = {})).CANCEL = "cancel"),
        (a.ERROR = "error"),
        (a.EXPIRED = "expired");
    },
    158945: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("884691"),
        a = n("599110"),
        i = n("507445"),
        c = n("49111");
      function o(e) {
        let t = r.useRef(!0);
        return (
          r.useEffect(
            () => () => {
              t.current && (null == e || e(i.CaptchaError.CANCEL));
            },
            []
          ),
          r.useEffect(
            () => (
              a.default.track(c.AnalyticEvents.OPEN_MODAL, {
                type: "Guild Join Captcha",
              }),
              () => {
                t.current &&
                  a.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                    type: "Guild Join Captcha",
                  });
              }
            ),
            [t]
          ),
          () => {
            t.current = !1;
          }
        );
      }
    },
    899945: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        }),
        n("222007");
      var r = n("37983"),
        a = n("884691"),
        i = n("77078"),
        c = n("421963"),
        o = n("659500"),
        s = n("158945"),
        p = n("49111"),
        d = n("782340"),
        l = n("960786"),
        u = n("954035");
      let h = new Set([
        i.ModalTransitionState.ENTERING,
        i.ModalTransitionState.ENTERED,
      ]);
      function f(e) {
        let {
            onClose: t,
            onCaptchaVerify: n,
            onReject: f,
            transitionState: v,
            headerText: m,
            bodyText: y,
            rqtoken: E,
            ...C
          } = e,
          R = (0, s.default)(f);
        return (a.useEffect(() => {
          o.ComponentDispatch.subscribe(
            p.ComponentActions.LAYER_POP_ESCAPE_KEY,
            t
          );
        }, [t]),
        null != v && h.has(v))
          ? (0, r.jsx)(i.ModalRoot, {
              transitionState: v,
              "aria-label": "CAPTCHA",
              className: l.modal,
              children: (0, r.jsxs)(i.ModalContent, {
                className: l.container,
                children: [
                  (0, r.jsx)(i.ModalCloseButton, {
                    className: l.close,
                    onClick: t,
                  }),
                  (0, r.jsx)("div", {
                    className: l.content,
                    children:
                      v !== i.ModalTransitionState.ENTERED
                        ? (0, r.jsx)(i.Spinner, {
                            type: i.Spinner.Type.SPINNING_CIRCLE,
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("div", {
                                children: (0, r.jsx)("img", {
                                  src: u,
                                  alt: "",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: l.title,
                                "aria-hidden": !0,
                                children:
                                  null != m
                                    ? m
                                    : d.default.Messages.GENERIC_CAPTCHA_HEADER,
                              }),
                              (0, r.jsx)("div", {
                                children:
                                  null != y
                                    ? y
                                    : d.default.Messages
                                        .GENERIC_CAPTCHA_DESCRIPTION,
                              }),
                              (0, r.jsx)("div", {
                                className: l.captchaContainer,
                                children: (0, r.jsx)(c.default, {
                                  onVerify: e => {
                                    R(), n(e, E), t();
                                  },
                                  ...C,
                                }),
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            })
          : null;
      }
    },
    421963: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        }),
        n("222007");
      var r = n("37983"),
        a = n("884691"),
        i = n("128981"),
        c = n("67164"),
        o = n("748820"),
        s = n("432710"),
        p = n("486196"),
        d = n("155084"),
        l = n("599110"),
        u = n("49111"),
        h = e => {
          let {
              captchaService: t = p.CaptchaTypes.RECAPTCHA,
              sitekey: n,
              rqdata: h,
              onRender: f,
              onVerify: v,
              onError: m,
              onOpen: y,
              onClose: E,
              onChalExpired: C,
              ...R
            } = e,
            b = a.useRef(null),
            _ = (0, o.v4)(),
            [x, g] = a.useState(!1),
            w = a.useCallback(
              e => {
                l.default.track(u.AnalyticEvents.CAPTCHA_EVENT, {
                  captcha_event_name: e,
                  captcha_service: t,
                  sitekey: n,
                  captcha_flow_key: _,
                });
              },
              [_, t, n]
            ),
            A = a.useCallback(
              e => {
                d.default.increment({
                  name: s.MetricEvents.CAPTCHA_EVENT,
                  tags: ["event_name:".concat(e), "captcha_service:".concat(t)],
                });
              },
              [t]
            ),
            k = a.useCallback(() => {
              if (null != h && "" !== h && null != b.current) {
                var e;
                null === (e = b.current) ||
                  void 0 === e ||
                  e.setData({ rqdata: h });
              }
            }, [h, b]),
            I = a.useCallback(() => {
              !x && (w("initial-load"), A("initial-load"), g(!0)), k();
            }, [A, x, w, k]);
          a.useEffect(() => {
            k();
          }, [k]),
            a.useEffect(() => {
              I();
            }, [I]);
          let S = a.useCallback(() => {
              w("error"), A("error"), k(), null == m || m();
            }, [w, A, k, m]),
            T = a.useCallback(
              e => {
                w("verify"), A("verify"), v(e);
              },
              [A, v, w]
            ),
            j = a.useCallback(() => {
              w("render"), null == f || f();
            }, [f, w]),
            O = a.useCallback(() => {
              w("open"), A("open"), null == y || y();
            }, [A, y, w]),
            P = a.useCallback(() => {
              w("close"), k(), null == E || E();
            }, [E, w, k]),
            N = a.useCallback(() => {
              w("chal-expire"), null == C || C();
            }, [C, w]);
          return ((null == n || "" === n) && (n = u.RECAPTCHA_SITE_KEY),
          t === p.CaptchaTypes.RECAPTCHA)
            ? (0, r.jsx)(c.default, {
                ...R,
                onLoad: I,
                onRender: j,
                onVerify: T,
                onError: S,
                sitekey: n,
              })
            : t === p.CaptchaTypes.HCAPTCHA
              ? (0, r.jsx)(i.default, {
                  ref: b,
                  ...R,
                  sitekey: n,
                  onLoad: I,
                  onError: S,
                  onVerify: T,
                  onChalExpired: N,
                  onOpen: O,
                  onClose: P,
                })
              : (0, r.jsx)(c.default, {
                  ...R,
                  sitekey: n,
                  onLoad: I,
                  onRender: j,
                  onVerify: T,
                  onError: S,
                });
        };
    },
  },
]);
//# sourceMappingURL=30a0ef8d3bfa6fc3b5b5.js.map

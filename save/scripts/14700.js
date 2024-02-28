(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14700"],
  {
    903204: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BrowserClient: function () {
            return u;
          },
        });
      var r = n("91320"),
        i = n("648238"),
        a = n("590171"),
        s = n("643487"),
        o = n("124969"),
        l = n("184612");
      class u extends r.BaseClient {
        constructor(t) {
          let e = s.WINDOW.SENTRY_SDK_SOURCE || (0, i.getSDKSource)();
          (t._metadata = t._metadata || {}),
            (t._metadata.sdk = t._metadata.sdk || {
              name: "sentry.javascript.browser",
              packages: [
                { name: `${e}:@sentry/browser`, version: r.SDK_VERSION },
              ],
              version: r.SDK_VERSION,
            }),
            super(t),
            t.sendClientReports &&
              s.WINDOW.document &&
              s.WINDOW.document.addEventListener("visibilitychange", () => {
                "hidden" === s.WINDOW.document.visibilityState &&
                  this._flushOutcomes();
              });
        }
        eventFromException(t, e) {
          return (0, a.eventFromException)(
            this._options.stackParser,
            t,
            e,
            this._options.attachStacktrace
          );
        }
        eventFromMessage(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "info",
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (0, a.eventFromMessage)(
            this._options.stackParser,
            t,
            e,
            n,
            this._options.attachStacktrace
          );
        }
        sendEvent(t, e) {
          let n = this.getIntegrationById(o.BREADCRUMB_INTEGRATION_ID);
          n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t),
            super.sendEvent(t, e);
        }
        captureUserFeedback(t) {
          if (!this._isEnabled()) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.warn("SDK not enabled, will not capture user feedback.");
            return;
          }
          let e = (0, l.createUserFeedbackEnvelope)(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
          });
          this._sendEnvelope(e);
        }
        _prepareEvent(t, e, n) {
          return (
            (t.platform = t.platform || "javascript"),
            super._prepareEvent(t, e, n)
          );
        }
        _flushOutcomes() {
          let t = this._clearOutcomes();
          if (0 === t.length) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log("No outcomes to send");
            return;
          }
          if (!this._dsn) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log("No dsn provided, will not send outcomes");
            return;
          }
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            i.logger.log("Sending outcomes:", t);
          let e = (0, i.createClientReportEnvelope)(
            t,
            this._options.tunnel && (0, i.dsnToString)(this._dsn)
          );
          this._sendEnvelope(e);
        }
      }
    },
    590171: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          eventFromException: function () {
            return u;
          },
          eventFromMessage: function () {
            return c;
          },
          eventFromUnknownInput: function () {
            return d;
          },
          exceptionFromError: function () {
            return a;
          },
        });
      var r = n("91320"),
        i = n("648238");
      function a(t, e) {
        let n = o(t, e),
          r = {
            type: e && e.name,
            value: (function (t) {
              let e = t && t.message;
              return e
                ? e.error && "string" == typeof e.error.message
                  ? e.error.message
                  : e
                : "No error message";
            })(e),
          };
        return (
          n.length && (r.stacktrace = { frames: n }),
          void 0 === r.type &&
            "" === r.value &&
            (r.value = "Unrecoverable error caught"),
          r
        );
      }
      function s(t, e) {
        return { exception: { values: [a(t, e)] } };
      }
      function o(t, e) {
        let n = e.stacktrace || e.stack || "",
          r = (function (t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (l.test(t.message)) return 1;
            }
            return 0;
          })(e);
        try {
          return t(n, r);
        } catch (t) {}
        return [];
      }
      let l = /Minified React error #\d+;/i;
      function u(t, e, n, r) {
        let a = d(t, e, (n && n.syntheticException) || void 0, r);
        return (
          (0, i.addExceptionMechanism)(a),
          (a.level = "error"),
          n && n.event_id && (a.event_id = n.event_id),
          (0, i.resolvedSyncPromise)(a)
        );
      }
      function c(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "info",
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0,
          s = h(t, e, (r && r.syntheticException) || void 0, a);
        return (
          (s.level = n),
          r && r.event_id && (s.event_id = r.event_id),
          (0, i.resolvedSyncPromise)(s)
        );
      }
      function d(t, e, n, a, l) {
        let u;
        if ((0, i.isErrorEvent)(e) && e.error) return s(t, e.error);
        if ((0, i.isDOMError)(e) || (0, i.isDOMException)(e)) {
          if ("stack" in e) u = s(t, e);
          else {
            let r =
                e.name || ((0, i.isDOMError)(e) ? "DOMError" : "DOMException"),
              s = e.message ? `${r}: ${e.message}` : r;
            (u = h(t, s, n, a)), (0, i.addExceptionTypeValue)(u, s);
          }
          return (
            "code" in e &&
              (u.tags = { ...u.tags, "DOMException.code": `${e.code}` }),
            u
          );
        }
        return (0, i.isError)(e)
          ? s(t, e)
          : (0, i.isPlainObject)(e) || (0, i.isEvent)(e)
            ? ((u = (function (t, e, n, a) {
                let s = (0, r.getCurrentHub)().getClient(),
                  l = s && s.getOptions().normalizeDepth,
                  u = {
                    exception: {
                      values: [
                        {
                          type: (0, i.isEvent)(e)
                            ? e.constructor.name
                            : a
                              ? "UnhandledRejection"
                              : "Error",
                          value: (function (t, e) {
                            let { isUnhandledRejection: n } = e,
                              r = (0, i.extractExceptionKeysForMessage)(t),
                              a = n ? "promise rejection" : "exception";
                            if ((0, i.isErrorEvent)(t))
                              return `Event \`ErrorEvent\` captured as ${a} with message \`${t.message}\``;
                            if ((0, i.isEvent)(t)) {
                              let e = (function (t) {
                                try {
                                  let e = Object.getPrototypeOf(t);
                                  return e ? e.constructor.name : void 0;
                                } catch (t) {}
                              })(t);
                              return `Event \`${e}\` (type=${t.type}) captured as ${a}`;
                            }
                            return `Object captured as ${a} with keys: ${r}`;
                          })(e, { isUnhandledRejection: a }),
                        },
                      ],
                    },
                    extra: { __serialized__: (0, i.normalizeToSize)(e, l) },
                  };
                if (n) {
                  let e = o(t, n);
                  e.length &&
                    (u.exception.values[0].stacktrace = { frames: e });
                }
                return u;
              })(t, e, n, l)),
              (0, i.addExceptionMechanism)(u, { synthetic: !0 }),
              u)
            : ((u = h(t, e, n, a)),
              (0, i.addExceptionTypeValue)(u, `${e}`, void 0),
              (0, i.addExceptionMechanism)(u, { synthetic: !0 }),
              u);
      }
      function h(t, e, n, r) {
        let i = { message: e };
        if (r && n) {
          let r = o(t, n);
          r.length &&
            (i.exception = {
              values: [{ value: e, stacktrace: { frames: r } }],
            });
        }
        return i;
      }
    },
    643487: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          WINDOW: function () {
            return a;
          },
          shouldIgnoreOnError: function () {
            return o;
          },
          wrap: function () {
            return function t(e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a = arguments.length > 2 ? arguments[2] : void 0;
              if ("function" != typeof e) return e;
              try {
                let t = e.__sentry_wrapped__;
                if (t) return t;
                if ((0, i.getOriginalFunction)(e)) return e;
              } catch (t) {
                return e;
              }
              let o = function () {
                let o = Array.prototype.slice.call(arguments);
                try {
                  a && "function" == typeof a && a.apply(this, arguments);
                  let r = o.map(e => t(e, n));
                  return e.apply(this, r);
                } catch (t) {
                  throw (
                    (s++,
                    setTimeout(() => {
                      s--;
                    }),
                    (0, r.withScope)(e => {
                      e.addEventProcessor(
                        t => (
                          n.mechanism &&
                            ((0, i.addExceptionTypeValue)(t, void 0, void 0),
                            (0, i.addExceptionMechanism)(t, n.mechanism)),
                          (t.extra = { ...t.extra, arguments: o }),
                          t
                        )
                      ),
                        (0, r.captureException)(t);
                    }),
                    t)
                  );
                }
              };
              try {
                for (let t in e)
                  Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]);
              } catch (t) {}
              (0, i.markFunctionWrapped)(o, e),
                (0, i.addNonEnumerableProperty)(e, "__sentry_wrapped__", o);
              try {
                Object.getOwnPropertyDescriptor(o, "name").configurable &&
                  Object.defineProperty(o, "name", { get: () => e.name });
              } catch (t) {}
              return o;
            };
          },
        });
      var r = n("91320"),
        i = n("648238");
      let a = i.GLOBAL_OBJ,
        s = 0;
      function o() {
        return s > 0;
      }
    },
    887117: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Breadcrumbs: function () {
            return E.Breadcrumbs;
          },
          BrowserClient: function () {
            return a.BrowserClient;
          },
          BrowserProfilingIntegration: function () {
            return m.BrowserProfilingIntegration;
          },
          BrowserTracing: function () {
            return p.BrowserTracing;
          },
          Dedupe: function () {
            return w.Dedupe;
          },
          FunctionToString: function () {
            return r.FunctionToString;
          },
          GlobalHandlers: function () {
            return y.GlobalHandlers;
          },
          HttpContext: function () {
            return S.HttpContext;
          },
          Hub: function () {
            return r.Hub;
          },
          InboundFilters: function () {
            return r.InboundFilters;
          },
          Integrations: function () {
            return k;
          },
          LinkedErrors: function () {
            return b.LinkedErrors;
          },
          ModuleMetadata: function () {
            return r.ModuleMetadata;
          },
          Replay: function () {
            return f.Replay;
          },
          SDK_VERSION: function () {
            return r.SDK_VERSION;
          },
          Scope: function () {
            return r.Scope;
          },
          TryCatch: function () {
            return v.TryCatch;
          },
          WINDOW: function () {
            return i.WINDOW;
          },
          addBreadcrumb: function () {
            return r.addBreadcrumb;
          },
          addGlobalEventProcessor: function () {
            return r.addGlobalEventProcessor;
          },
          addTracingExtensions: function () {
            return r.addTracingExtensions;
          },
          captureEvent: function () {
            return r.captureEvent;
          },
          captureException: function () {
            return r.captureException;
          },
          captureMessage: function () {
            return r.captureMessage;
          },
          captureUserFeedback: function () {
            return d.captureUserFeedback;
          },
          chromeStackLineParser: function () {
            return l.chromeStackLineParser;
          },
          close: function () {
            return d.close;
          },
          configureScope: function () {
            return r.configureScope;
          },
          createTransport: function () {
            return r.createTransport;
          },
          createUserFeedbackEnvelope: function () {
            return c.createUserFeedbackEnvelope;
          },
          defaultIntegrations: function () {
            return d.defaultIntegrations;
          },
          defaultRequestInstrumentationOptions: function () {
            return p.defaultRequestInstrumentationOptions;
          },
          defaultStackLineParsers: function () {
            return l.defaultStackLineParsers;
          },
          defaultStackParser: function () {
            return l.defaultStackParser;
          },
          eventFromException: function () {
            return u.eventFromException;
          },
          eventFromMessage: function () {
            return u.eventFromMessage;
          },
          extractTraceparentData: function () {
            return r.extractTraceparentData;
          },
          flush: function () {
            return d.flush;
          },
          forceLoad: function () {
            return d.forceLoad;
          },
          geckoStackLineParser: function () {
            return l.geckoStackLineParser;
          },
          getActiveTransaction: function () {
            return r.getActiveTransaction;
          },
          getCurrentHub: function () {
            return r.getCurrentHub;
          },
          getHubFromCarrier: function () {
            return r.getHubFromCarrier;
          },
          init: function () {
            return d.init;
          },
          instrumentOutgoingRequests: function () {
            return p.instrumentOutgoingRequests;
          },
          lastEventId: function () {
            return d.lastEventId;
          },
          makeBrowserOfflineTransport: function () {
            return _.makeBrowserOfflineTransport;
          },
          makeFetchTransport: function () {
            return s.makeFetchTransport;
          },
          makeMain: function () {
            return r.makeMain;
          },
          makeMultiplexedTransport: function () {
            return r.makeMultiplexedTransport;
          },
          makeXHRTransport: function () {
            return o.makeXHRTransport;
          },
          onLoad: function () {
            return d.onLoad;
          },
          onProfilingStartRouteTransaction: function () {
            return g.onProfilingStartRouteTransaction;
          },
          opera10StackLineParser: function () {
            return l.opera10StackLineParser;
          },
          opera11StackLineParser: function () {
            return l.opera11StackLineParser;
          },
          setContext: function () {
            return r.setContext;
          },
          setExtra: function () {
            return r.setExtra;
          },
          setExtras: function () {
            return r.setExtras;
          },
          setTag: function () {
            return r.setTag;
          },
          setTags: function () {
            return r.setTags;
          },
          setUser: function () {
            return r.setUser;
          },
          showReportDialog: function () {
            return d.showReportDialog;
          },
          spanStatusfromHttpCode: function () {
            return r.spanStatusfromHttpCode;
          },
          startTransaction: function () {
            return r.startTransaction;
          },
          trace: function () {
            return r.trace;
          },
          winjsStackLineParser: function () {
            return l.winjsStackLineParser;
          },
          withScope: function () {
            return r.withScope;
          },
          wrap: function () {
            return d.wrap;
          },
        });
      var r = n("91320"),
        i = n("643487"),
        a = n("903204"),
        s = n("393746"),
        o = n("975927"),
        l = n("202406"),
        u = n("590171"),
        c = n("184612"),
        d = n("846297"),
        h = n("53383"),
        f = n("438142"),
        p = n("752875"),
        _ = n("490753"),
        g = n("65534"),
        m = n("643714"),
        y = n("297280"),
        v = n("382078"),
        E = n("124969"),
        b = n("140735"),
        S = n("612568"),
        w = n("683900");
      let T = {};
      i.WINDOW.Sentry &&
        i.WINDOW.Sentry.Integrations &&
        (T = i.WINDOW.Sentry.Integrations);
      let k = { ...T, ...r.Integrations, ...h };
    },
    124969: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BREADCRUMB_INTEGRATION_ID: function () {
            return s;
          },
          Breadcrumbs: function () {
            return o;
          },
        });
      var r = n("91320"),
        i = n("648238"),
        a = n("643487");
      let s = "Breadcrumbs";
      class o {
        static __initStatic() {
          this.id = s;
        }
        __init() {
          this.name = o.id;
        }
        constructor(t) {
          o.prototype.__init.call(this),
            (this.options = {
              console: !0,
              dom: !0,
              fetch: !0,
              history: !0,
              sentry: !0,
              xhr: !0,
              ...t,
            });
        }
        setupOnce() {
          this.options.console &&
            (0, i.addInstrumentationHandler)("console", l),
            this.options.dom &&
              (0, i.addInstrumentationHandler)(
                "dom",
                (function (t) {
                  return function (e) {
                    let n;
                    let a =
                        "object" == typeof t ? t.serializeAttribute : void 0,
                      s =
                        "object" == typeof t &&
                        "number" == typeof t.maxStringLength
                          ? t.maxStringLength
                          : void 0;
                    s &&
                      s > 1024 &&
                      (("undefined" == typeof __SENTRY_DEBUG__ ||
                        __SENTRY_DEBUG__) &&
                        i.logger.warn(
                          `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`
                        ),
                      (s = 1024)),
                      "string" == typeof a && (a = [a]);
                    try {
                      let t = e.event;
                      n = (function (t) {
                        return !!t && !!t.target;
                      })(t)
                        ? (0, i.htmlTreeAsString)(t.target, {
                            keyAttrs: a,
                            maxStringLength: s,
                          })
                        : (0, i.htmlTreeAsString)(t, {
                            keyAttrs: a,
                            maxStringLength: s,
                          });
                    } catch (t) {
                      n = "<unknown>";
                    }
                    0 !== n.length &&
                      (0, r.getCurrentHub)().addBreadcrumb(
                        { category: `ui.${e.name}`, message: n },
                        { event: e.event, name: e.name, global: e.global }
                      );
                  };
                })(this.options.dom)
              ),
            this.options.xhr && (0, i.addInstrumentationHandler)("xhr", u),
            this.options.fetch && (0, i.addInstrumentationHandler)("fetch", c),
            this.options.history &&
              (0, i.addInstrumentationHandler)("history", d);
        }
        addSentryBreadcrumb(t) {
          this.options.sentry &&
            (0, r.getCurrentHub)().addBreadcrumb(
              {
                category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
                event_id: t.event_id,
                level: t.level,
                message: (0, i.getEventDescription)(t),
              },
              { event: t }
            );
        }
      }
      o.__initStatic();
      function l(t) {
        for (let e = 0; e < t.args.length; e++)
          if ("ref=Ref<" === t.args[e]) {
            t.args[e + 1] = "viewRef";
            break;
          }
        let e = {
          category: "console",
          data: { arguments: t.args, logger: "console" },
          level: (0, i.severityLevelFromString)(t.level),
          message: (0, i.safeJoin)(t.args, " "),
        };
        if ("assert" === t.level) {
          if (!1 !== t.args[0]) return;
          (e.message = `Assertion failed: ${(0, i.safeJoin)(t.args.slice(1), " ") || "console.assert"}`),
            (e.data.arguments = t.args.slice(1));
        }
        (0, r.getCurrentHub)().addBreadcrumb(e, {
          input: t.args,
          level: t.level,
        });
      }
      function u(t) {
        let { startTimestamp: e, endTimestamp: n } = t,
          a = t.xhr[i.SENTRY_XHR_DATA_KEY];
        if (!e || !n || !a) return;
        let { method: s, url: o, status_code: l, body: u } = a,
          c = { xhr: t.xhr, input: u, startTimestamp: e, endTimestamp: n };
        (0, r.getCurrentHub)().addBreadcrumb(
          {
            category: "xhr",
            data: { method: s, url: o, status_code: l },
            type: "http",
          },
          c
        );
      }
      function c(t) {
        let { startTimestamp: e, endTimestamp: n } = t;
        if (!!n) {
          if (
            !t.fetchData.url.match(/sentry_key/) ||
            "POST" !== t.fetchData.method
          ) {
            if (t.error) {
              let i = t.fetchData,
                a = {
                  data: t.error,
                  input: t.args,
                  startTimestamp: e,
                  endTimestamp: n,
                };
              (0, r.getCurrentHub)().addBreadcrumb(
                { category: "fetch", data: i, level: "error", type: "http" },
                a
              );
            } else {
              let i = {
                  ...t.fetchData,
                  status_code: t.response && t.response.status,
                },
                a = {
                  input: t.args,
                  response: t.response,
                  startTimestamp: e,
                  endTimestamp: n,
                };
              (0, r.getCurrentHub)().addBreadcrumb(
                { category: "fetch", data: i, type: "http" },
                a
              );
            }
          }
        }
      }
      function d(t) {
        let e = t.from,
          n = t.to,
          s = (0, i.parseUrl)(a.WINDOW.location.href),
          o = (0, i.parseUrl)(e),
          l = (0, i.parseUrl)(n);
        !o.path && (o = s),
          s.protocol === l.protocol && s.host === l.host && (n = l.relative),
          s.protocol === o.protocol && s.host === o.host && (e = o.relative),
          (0, r.getCurrentHub)().addBreadcrumb({
            category: "navigation",
            data: { from: e, to: n },
          });
      }
    },
    683900: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Dedupe: function () {
            return i;
          },
        });
      var r = n("648238");
      class i {
        constructor() {
          i.prototype.__init.call(this);
        }
        static __initStatic() {
          this.id = "Dedupe";
        }
        __init() {
          this.name = i.id;
        }
        setupOnce(t, e) {
          let n = t => {
            if (t.type) return t;
            let n = e().getIntegration(i);
            if (n) {
              try {
                if (
                  (function (t, e) {
                    return (
                      !!e &&
                      (!!(
                        (function (t, e) {
                          let n = t.message,
                            r = e.message;
                          return (
                            !!(
                              (n || r) &&
                              (!n || r) &&
                              (n || !r) &&
                              n === r &&
                              s(t, e) &&
                              a(t, e)
                            ) || !1
                          );
                        })(t, e) ||
                        (function (t, e) {
                          let n = o(e),
                            r = o(t);
                          return (
                            !!(
                              n &&
                              r &&
                              n.type === r.type &&
                              n.value === r.value &&
                              s(t, e) &&
                              a(t, e)
                            ) || !1
                          );
                        })(t, e)
                      ) ||
                        !1)
                    );
                  })(t, n._previousEvent)
                )
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      r.logger.warn(
                        "Event dropped due to being a duplicate of previously captured event."
                      ),
                    null
                  );
              } catch (t) {}
              return (n._previousEvent = t);
            }
            return t;
          };
          (n.id = this.name), t(n);
        }
      }
      i.__initStatic();
      function a(t, e) {
        let n = l(t),
          r = l(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          let e = r[t],
            i = n[t];
          if (
            e.filename !== i.filename ||
            e.lineno !== i.lineno ||
            e.colno !== i.colno ||
            e.function !== i.function
          )
            return !1;
        }
        return !0;
      }
      function s(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
          return !(n.join("") !== r.join(""));
        } catch (t) {
          return !1;
        }
      }
      function o(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      function l(t) {
        let e = t.exception;
        if (e)
          try {
            return e.values[0].stacktrace.frames;
          } catch (t) {}
      }
    },
    297280: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          GlobalHandlers: function () {
            return o;
          },
        }),
        n("653041");
      var r = n("91320"),
        i = n("648238"),
        a = n("590171"),
        s = n("643487");
      class o {
        static __initStatic() {
          this.id = "GlobalHandlers";
        }
        __init() {
          this.name = o.id;
        }
        __init2() {
          this._installFunc = { onerror: l, onunhandledrejection: u };
        }
        constructor(t) {
          o.prototype.__init.call(this),
            o.prototype.__init2.call(this),
            (this._options = { onerror: !0, onunhandledrejection: !0, ...t });
        }
        setupOnce() {
          Error.stackTraceLimit = 50;
          let t = this._options;
          for (let e in t) {
            let n = this._installFunc[e];
            n &&
              t[e] &&
              ((function (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  i.logger.log(`Global Handler attached: ${t}`);
              })(e),
              n(),
              (this._installFunc[e] = void 0));
          }
        }
      }
      function l() {
        (0, i.addInstrumentationHandler)("error", t => {
          let [e, n, r] = h();
          if (!e.getIntegration(o)) return;
          let { msg: l, url: u, line: f, column: p, error: _ } = t;
          if ((0, s.shouldIgnoreOnError)() || (_ && _.__sentry_own_request__))
            return;
          let g =
            void 0 === _ && (0, i.isString)(l)
              ? (function (t, e, n, r) {
                  let a = (0, i.isErrorEvent)(t) ? t.message : t,
                    s = "Error",
                    o = a.match(
                      /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                    );
                  return (
                    o && ((s = o[1]), (a = o[2])),
                    c(
                      { exception: { values: [{ type: s, value: a }] } },
                      e,
                      n,
                      r
                    )
                  );
                })(l, u, f, p)
              : c(
                  (0, a.eventFromUnknownInput)(n, _ || l, void 0, r, !1),
                  u,
                  f,
                  p
                );
          (g.level = "error"), d(e, _, g, "onerror");
        });
      }
      function u() {
        (0, i.addInstrumentationHandler)("unhandledrejection", t => {
          let [e, n, r] = h();
          if (!e.getIntegration(o)) return;
          let l = t;
          try {
            "reason" in t
              ? (l = t.reason)
              : "detail" in t && "reason" in t.detail && (l = t.detail.reason);
          } catch (t) {}
          if ((0, s.shouldIgnoreOnError)() || (l && l.__sentry_own_request__))
            return !0;
          let u = (0, i.isPrimitive)(l)
            ? (function (t) {
                return {
                  exception: {
                    values: [
                      {
                        type: "UnhandledRejection",
                        value: `Non-Error promise rejection captured with value: ${String(t)}`,
                      },
                    ],
                  },
                };
              })(l)
            : (0, a.eventFromUnknownInput)(n, l, void 0, r, !0);
          (u.level = "error"), d(e, l, u, "onunhandledrejection");
        });
      }
      o.__initStatic();
      function c(t, e, n, r) {
        let a = (t.exception = t.exception || {}),
          s = (a.values = a.values || []),
          o = (s[0] = s[0] || {}),
          l = (o.stacktrace = o.stacktrace || {}),
          u = (l.frames = l.frames || []),
          c = isNaN(parseInt(r, 10)) ? void 0 : r,
          d = isNaN(parseInt(n, 10)) ? void 0 : n,
          h = (0, i.isString)(e) && e.length > 0 ? e : (0, i.getLocationHref)();
        return (
          0 === u.length &&
            u.push({
              colno: c,
              filename: h,
              function: "?",
              in_app: !0,
              lineno: d,
            }),
          t
        );
      }
      function d(t, e, n, r) {
        (0, i.addExceptionMechanism)(n, { handled: !1, type: r }),
          t.captureEvent(n, { originalException: e });
      }
      function h() {
        let t = (0, r.getCurrentHub)(),
          e = t.getClient(),
          n = (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
          };
        return [t, n.stackParser, n.attachStacktrace];
      }
    },
    612568: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          HttpContext: function () {
            return a;
          },
        });
      var r = n("91320"),
        i = n("643487");
      class a {
        constructor() {
          a.prototype.__init.call(this);
        }
        static __initStatic() {
          this.id = "HttpContext";
        }
        __init() {
          this.name = a.id;
        }
        setupOnce() {
          (0, r.addGlobalEventProcessor)(t => {
            if ((0, r.getCurrentHub)().getIntegration(a)) {
              if (
                !i.WINDOW.navigator &&
                !i.WINDOW.location &&
                !i.WINDOW.document
              )
                return t;
              let e =
                  (t.request && t.request.url) ||
                  (i.WINDOW.location && i.WINDOW.location.href),
                { referrer: n } = i.WINDOW.document || {},
                { userAgent: r } = i.WINDOW.navigator || {},
                a = {
                  ...(t.request && t.request.headers),
                  ...(n && { Referer: n }),
                  ...(r && { "User-Agent": r }),
                },
                s = { ...t.request, ...(e && { url: e }), headers: a };
              return { ...t, request: s };
            }
            return t;
          });
        }
      }
      a.__initStatic();
    },
    53383: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Breadcrumbs: function () {
            return a.Breadcrumbs;
          },
          Dedupe: function () {
            return l.Dedupe;
          },
          GlobalHandlers: function () {
            return r.GlobalHandlers;
          },
          HttpContext: function () {
            return o.HttpContext;
          },
          LinkedErrors: function () {
            return s.LinkedErrors;
          },
          TryCatch: function () {
            return i.TryCatch;
          },
        });
      var r = n("297280"),
        i = n("382078"),
        a = n("124969"),
        s = n("140735"),
        o = n("612568"),
        l = n("683900");
    },
    140735: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          LinkedErrors: function () {
            return a;
          },
        });
      var r = n("648238"),
        i = n("590171");
      class a {
        static __initStatic() {
          this.id = "LinkedErrors";
        }
        __init() {
          this.name = a.id;
        }
        constructor(t = {}) {
          a.prototype.__init.call(this),
            (this._key = t.key || "cause"),
            (this._limit = t.limit || 5);
        }
        setupOnce(t, e) {
          t((t, n) => {
            let s = e(),
              o = s.getClient(),
              l = s.getIntegration(a);
            if (!o || !l) return t;
            let u = o.getOptions();
            return (
              (0, r.applyAggregateErrorsToEvent)(
                i.exceptionFromError,
                u.stackParser,
                u.maxValueLength,
                l._key,
                l._limit,
                t,
                n
              ),
              t
            );
          });
        }
      }
      a.__initStatic();
    },
    382078: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          TryCatch: function () {
            return s;
          },
        });
      var r = n("648238"),
        i = n("643487");
      let a = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
      ];
      class s {
        static __initStatic() {
          this.id = "TryCatch";
        }
        __init() {
          this.name = s.id;
        }
        constructor(t) {
          s.prototype.__init.call(this),
            (this._options = {
              XMLHttpRequest: !0,
              eventTarget: !0,
              requestAnimationFrame: !0,
              setInterval: !0,
              setTimeout: !0,
              ...t,
            });
        }
        setupOnce() {
          this._options.setTimeout && (0, r.fill)(i.WINDOW, "setTimeout", o),
            this._options.setInterval &&
              (0, r.fill)(i.WINDOW, "setInterval", o),
            this._options.requestAnimationFrame &&
              (0, r.fill)(i.WINDOW, "requestAnimationFrame", l),
            this._options.XMLHttpRequest &&
              "XMLHttpRequest" in i.WINDOW &&
              (0, r.fill)(XMLHttpRequest.prototype, "send", u);
          let t = this._options.eventTarget;
          t && (Array.isArray(t) ? t : a).forEach(c);
        }
      }
      function o(t) {
        return function () {
          for (var e = arguments.length, n = Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          let s = n[0];
          return (
            (n[0] = (0, i.wrap)(s, {
              mechanism: {
                data: { function: (0, r.getFunctionName)(t) },
                handled: !0,
                type: "instrument",
              },
            })),
            t.apply(this, n)
          );
        };
      }
      function l(t) {
        return function (e) {
          return t.apply(this, [
            (0, i.wrap)(e, {
              mechanism: {
                data: {
                  function: "requestAnimationFrame",
                  handler: (0, r.getFunctionName)(t),
                },
                handled: !0,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function u(t) {
        return function () {
          for (var e = arguments.length, n = Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          let s = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              t => {
                t in s &&
                  "function" == typeof s[t] &&
                  (0, r.fill)(s, t, function (e) {
                    let n = {
                        mechanism: {
                          data: {
                            function: t,
                            handler: (0, r.getFunctionName)(e),
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      },
                      a = (0, r.getOriginalFunction)(e);
                    return (
                      a &&
                        (n.mechanism.data.handler = (0, r.getFunctionName)(a)),
                      (0, i.wrap)(e, n)
                    );
                  });
              }
            ),
            t.apply(this, n)
          );
        };
      }
      function c(t) {
        let e = i.WINDOW,
          n = e[t] && e[t].prototype;
        n &&
          n.hasOwnProperty &&
          n.hasOwnProperty("addEventListener") &&
          ((0, r.fill)(n, "addEventListener", function (e) {
            return function (n, a, s) {
              try {
                "function" == typeof a.handleEvent &&
                  (a.handleEvent = (0, i.wrap)(a.handleEvent, {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: (0, r.getFunctionName)(a),
                        target: t,
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return e.apply(this, [
                n,
                (0, i.wrap)(a, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: (0, r.getFunctionName)(a),
                      target: t,
                    },
                    handled: !0,
                    type: "instrument",
                  },
                }),
                s,
              ]);
            };
          }),
          (0, r.fill)(n, "removeEventListener", function (t) {
            return function (e, n, r) {
              try {
                let i = n && n.__sentry_wrapped__;
                i && t.call(this, e, i, r);
              } catch (t) {}
              return t.call(this, e, n, r);
            };
          }));
      }
      s.__initStatic();
    },
    65534: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          onProfilingStartRouteTransaction: function () {
            return l;
          },
          wrapTransactionWithProfiling: function () {
            return u;
          },
        });
      var r = n("91320"),
        i = n("648238"),
        a = n("643487"),
        s = n("450436");
      let o = !1;
      function l(t) {
        return t
          ? u(t)
          : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(
                "[Profiling] Transaction is undefined, skipping profiling"
              ),
            t);
      }
      function u(t) {
        let e;
        let n = a.WINDOW.Profiler;
        if ("function" != typeof n)
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(
                "[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."
              ),
            t
          );
        if (o)
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(
                "[Profiling] Profiling has been disabled for the duration of the current user session."
              ),
            t
          );
        let l = (0, r.getCurrentHub)().getClient(),
          u = l && l.getOptions();
        if (!u)
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log("[Profiling] Profiling disabled, no options found."),
            t
          );
        let c = u.profilesSampleRate;
        if (!(0, s.isValidSampleRate)(c))
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.warn(
                "[Profiling] Discarding profile because of invalid sample rate."
              ),
            t
          );
        if (!c)
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(
                "[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"
              ),
            t
          );
        if (!(!0 === c || Math.random() < c))
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(
                `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(c)})`
              ),
            t
          );
        try {
          e = new n({ sampleInterval: 10, maxBufferSize: Math.floor(3e3) });
        } catch (t) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            (i.logger.log(
              "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."
            ),
            i.logger.log(
              "[Profiling] Disabling profiling for current user session."
            )),
            (o = !0);
        }
        if (!e) return t;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          i.logger.log(
            `[Profiling] started profiling transaction: ${t.name || t.description}`
          );
        let d = (0, i.uuid4)();
        async function h() {
          if (!t || !e) return null;
          let n = t.startChild({
            description: "profiler.stop",
            op: "profiler",
          });
          return e
            .stop()
            .then(e =>
              (n.finish(),
              f && (a.WINDOW.clearTimeout(f), (f = void 0)),
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                i.logger.log(
                  `[Profiling] stopped profiling of transaction: ${t.name || t.description}`
                ),
              e)
                ? ((0, s.addProfileToMap)(d, e), null)
                : (("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    i.logger.log(
                      `[Profiling] profiler returned null profile for: ${t.name || t.description}`,
                      "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"
                    ),
                  null)
            )
            .catch(
              t => (
                n.finish(),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  i.logger.log("[Profiling] error while stopping profiler:", t),
                null
              )
            );
        }
        let f = a.WINDOW.setTimeout(() => {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(
                "[Profiling] max profile duration elapsed, stopping profiling for:",
                t.name || t.description
              ),
              h();
          }, 3e4),
          p = t.finish.bind(t);
        return (
          (t.finish = function () {
            return t
              ? (h().then(
                  () => {
                    t.setContext("profile", { profile_id: d }), p();
                  },
                  () => {
                    p();
                  }
                ),
                t)
              : p();
          }),
          t
        );
      }
    },
    643714: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BrowserProfilingIntegration: function () {
            return s;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("65534"),
        a = n("450436");
      class s {
        constructor() {
          s.prototype.__init.call(this), s.prototype.__init2.call(this);
        }
        __init() {
          this.name = "BrowserProfilingIntegration";
        }
        __init2() {
          this.getCurrentHub = void 0;
        }
        setupOnce(t, e) {
          this.getCurrentHub = e;
          let n = this.getCurrentHub().getClient();
          n && "function" == typeof n.on
            ? (n.on("startTransaction", t => {
                (0, i.wrapTransactionWithProfiling)(t);
              }),
              n.on("beforeEnvelope", t => {
                if (!a.PROFILE_MAP.size) return;
                let e = (0, a.findProfiledTransactionsFromEnvelope)(t);
                if (!e.length) return;
                let n = [];
                for (let t of e) {
                  let e = t && t.contexts,
                    i = e && e.profile && e.profile.profile_id;
                  if (!i) {
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      r.logger.log(
                        "[Profiling] cannot find profile for a transaction without a profile context"
                      );
                    continue;
                  }
                  e && e.profile && delete e.profile;
                  let s = a.PROFILE_MAP.get(i);
                  if (!s) {
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      r.logger.log(
                        `[Profiling] Could not retrieve profile for transaction: ${i}`
                      );
                    continue;
                  }
                  a.PROFILE_MAP.delete(i);
                  let o = (0, a.createProfilingEvent)(i, s, t);
                  o && n.push(o);
                }
                (0, a.addProfilesToEnvelope)(t, n);
              }))
            : r.logger.warn(
                "[Profiling] Client does not support hooks, profiling will be disabled"
              );
        }
      }
    },
    450436: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          PROFILE_MAP: function () {
            return E;
          },
          addProfileToMap: function () {
            return b;
          },
          addProfilesToEnvelope: function () {
            return _;
          },
          createProfilingEvent: function () {
            return v;
          },
          findProfiledTransactionsFromEnvelope: function () {
            return g;
          },
          isValidSampleRate: function () {
            return y;
          },
        }),
        n("653041");
      var r,
        i = n("91320"),
        a = n("648238"),
        s = n("643487");
      let o = String(0),
        l = "",
        u = "",
        c = "",
        d = (s.WINDOW.navigator && s.WINDOW.navigator.userAgent) || "",
        h = "",
        f =
          (s.WINDOW.navigator && s.WINDOW.navigator.language) ||
          (s.WINDOW.navigator &&
            s.WINDOW.navigator.languages &&
            s.WINDOW.navigator.languages["0"]) ||
          "",
        p = s.WINDOW.navigator && s.WINDOW.navigator.userAgentData;
      if (
        "object" == typeof (r = p) &&
        null !== r &&
        "getHighEntropyValues" in r
      )
        p.getHighEntropyValues([
          "architecture",
          "model",
          "platform",
          "platformVersion",
          "fullVersionList",
        ])
          .then(t => {
            if (
              ((l = t.platform || ""),
              (c = t.architecture || ""),
              (h = t.model || ""),
              (u = t.platformVersion || ""),
              t.fullVersionList && t.fullVersionList.length > 0)
            ) {
              let e = t.fullVersionList[t.fullVersionList.length - 1];
              d = `${e.brand} ${e.version}`;
            }
          })
          .catch(t => void 0);
      function _(t, e) {
        if (!e.length) return t;
        for (let n of e) t[1].push([{ type: "profile" }, n]);
        return t;
      }
      function g(t) {
        let e = [];
        return (
          (0, a.forEachEnvelopeItem)(t, (t, n) => {
            if ("transaction" === n)
              for (let n = 1; n < t.length; n++) {
                let r = t[n];
                r &&
                  r.contexts &&
                  r.contexts.profile &&
                  r.contexts.profile.profile_id &&
                  e.push(t[n]);
              }
          }),
          e
        );
      }
      let m = new WeakMap();
      function y(t) {
        return ("number" != typeof t && "boolean" != typeof t) ||
          ("number" == typeof t && isNaN(t))
          ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              a.logger.warn(
                `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`
              ),
            !1)
          : !0 === t ||
              !1 === t ||
              (!(t < 0) && !(t > 1)) ||
              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                a.logger.warn(
                  `[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`
                ),
              !1);
      }
      function v(t, e, n) {
        var r;
        return (
          (r = e).samples.length < 2
            ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                a.logger.log(
                  "[Profiling] Discarding profile because it contains less than 2 samples"
                ),
              !1)
            : !!r.frames.length ||
              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                a.logger.log(
                  "[Profiling] Discarding profile because it contains no frames"
                ),
              !1)
        )
          ? (function (t, e, n) {
              if ("transaction" !== t.type)
                throw TypeError(
                  "Profiling events may only be attached to transactions, this should never occur."
                );
              if (null == e)
                throw TypeError(
                  `Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`
                );
              let r = (function (t) {
                  let e =
                    t &&
                    t.contexts &&
                    t.contexts.trace &&
                    t.contexts.trace.trace_id;
                  return ("string" == typeof e &&
                    32 !== e.length &&
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                    a.logger.log(
                      `[Profiling] Invalid traceId: ${e} on profiled event`
                    ),
                  "string" != typeof e)
                    ? ""
                    : e;
                })(t),
                p = (function (t) {
                  return "thread_metadata" in t
                    ? t
                    : (function (t) {
                        let e;
                        let n = 0,
                          r = {
                            samples: [],
                            stacks: [],
                            frames: [],
                            thread_metadata: { [o]: { name: "main" } },
                          };
                        if (!t.samples.length) return r;
                        let i = t.samples[0].timestamp,
                          s =
                            "number" == typeof performance.timeOrigin
                              ? performance.timeOrigin
                              : a.browserPerformanceTimeOrigin || 0,
                          l = s - (a.browserPerformanceTimeOrigin || s);
                        for (let a = 0; a < t.samples.length; a++) {
                          let s = t.samples[a];
                          if (void 0 === s.stackId) {
                            void 0 === e && ((e = n), (r.stacks[e] = []), n++),
                              (r.samples[a] = {
                                elapsed_since_start_ns: (
                                  (s.timestamp + l - i) *
                                  1e6
                                ).toFixed(0),
                                stack_id: e,
                                thread_id: o,
                              });
                            continue;
                          }
                          let u = t.stacks[s.stackId],
                            c = [];
                          for (; u; ) {
                            c.push(u.frameId);
                            let e = t.frames[u.frameId];
                            void 0 === r.frames[u.frameId] &&
                              (r.frames[u.frameId] = {
                                function: e.name,
                                abs_path:
                                  "number" == typeof e.resourceId
                                    ? t.resources[e.resourceId]
                                    : void 0,
                                lineno: e.line,
                                colno: e.column,
                              }),
                              (u =
                                void 0 === u.parentId
                                  ? void 0
                                  : t.stacks[u.parentId]);
                          }
                          let d = {
                            elapsed_since_start_ns: (
                              (s.timestamp + l - i) *
                              1e6
                            ).toFixed(0),
                            stack_id: n,
                            thread_id: o,
                          };
                          (r.stacks[n] = c), (r.samples[a] = d), n++;
                        }
                        return r;
                      })(t);
                })(e),
                _ =
                  "number" == typeof t.start_timestamp
                    ? 1e3 * t.start_timestamp
                    : Date.now(),
                g =
                  "number" == typeof t.timestamp
                    ? 1e3 * t.timestamp
                    : Date.now();
              return {
                event_id: n,
                timestamp: new Date(_).toISOString(),
                platform: "javascript",
                version: "1",
                release: t.release || "",
                environment: t.environment || i.DEFAULT_ENVIRONMENT,
                runtime: {
                  name: "javascript",
                  version: s.WINDOW.navigator.userAgent,
                },
                os: { name: l, version: u, build_number: d },
                device: {
                  locale: f,
                  model: h,
                  manufacturer: d,
                  architecture: c,
                  is_emulator: !1,
                },
                debug_meta: {
                  images: (function (t) {
                    let e;
                    let n = a.GLOBAL_OBJ._sentryDebugIds;
                    if (!n) return [];
                    let r = (0, i.getCurrentHub)();
                    if (!r) return [];
                    let s = r.getClient();
                    if (!s) return [];
                    let o = s.getOptions();
                    if (!o) return [];
                    let l = o.stackParser;
                    if (!l) return [];
                    let u = m.get(l);
                    u ? (e = u) : ((e = new Map()), m.set(l, e));
                    let c = Object.keys(n).reduce((t, r) => {
                        let i;
                        let a = e.get(r);
                        a ? (i = a) : ((i = l(r)), e.set(r, i));
                        for (let e = i.length - 1; e >= 0; e--) {
                          let a = i[e],
                            s = a && a.filename;
                          if (a && s) {
                            t[s] = n[r];
                            break;
                          }
                        }
                        return t;
                      }, {}),
                      d = [];
                    for (let e of t)
                      e &&
                        c[e] &&
                        d.push({
                          type: "sourcemap",
                          code_file: e,
                          debug_id: c[e],
                        });
                    return d;
                  })(e.resources),
                },
                profile: p,
                transactions: [
                  {
                    name: t.transaction || "",
                    id: t.event_id || (0, a.uuid4)(),
                    trace_id: r,
                    active_thread_id: o,
                    relative_start_ns: "0",
                    relative_end_ns: ((g - _) * 1e6).toFixed(0),
                  },
                ],
              };
            })(n, e, t)
          : null;
      }
      let E = new Map();
      function b(t, e) {
        if ((E.set(t, e), E.size > 30)) {
          let t = E.keys().next().value;
          E.delete(t);
        }
      }
    },
    846297: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          captureUserFeedback: function () {
            return R;
          },
          close: function () {
            return w;
          },
          defaultIntegrations: function () {
            return g;
          },
          flush: function () {
            return S;
          },
          forceLoad: function () {
            return E;
          },
          init: function () {
            return m;
          },
          lastEventId: function () {
            return v;
          },
          onLoad: function () {
            return b;
          },
          showReportDialog: function () {
            return y;
          },
          wrap: function () {
            return T;
          },
        });
      var r = n("91320"),
        i = n("648238"),
        a = n("903204"),
        s = n("643487"),
        o = n("297280"),
        l = n("382078"),
        u = n("124969"),
        c = n("140735"),
        d = n("612568"),
        h = n("683900"),
        f = n("202406"),
        p = n("393746"),
        _ = n("975927");
      let g = [
        new r.Integrations.InboundFilters(),
        new r.Integrations.FunctionToString(),
        new l.TryCatch(),
        new u.Breadcrumbs(),
        new o.GlobalHandlers(),
        new c.LinkedErrors(),
        new h.Dedupe(),
        new d.HttpContext(),
      ];
      function m() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = g),
          void 0 === t.release &&
            ("string" == typeof __SENTRY_RELEASE__ &&
              (t.release = __SENTRY_RELEASE__),
            s.WINDOW.SENTRY_RELEASE &&
              s.WINDOW.SENTRY_RELEASE.id &&
              (t.release = s.WINDOW.SENTRY_RELEASE.id)),
          void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
          void 0 === t.sendClientReports && (t.sendClientReports = !0);
        let e = {
          ...t,
          stackParser: (0, i.stackParserFromStackParserOptions)(
            t.stackParser || f.defaultStackParser
          ),
          integrations: (0, r.getIntegrationsToSetup)(t),
          transport:
            t.transport ||
            ((0, i.supportsFetch)()
              ? p.makeFetchTransport
              : _.makeXHRTransport),
        };
        (0, r.initAndBind)(a.BrowserClient, e),
          t.autoSessionTracking &&
            (function () {
              if (void 0 === s.WINDOW.document) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  i.logger.warn(
                    "Session tracking in non-browser environment with @sentry/browser is not supported."
                  );
                return;
              }
              let t = (0, r.getCurrentHub)();
              t.captureSession &&
                (k(t),
                (0, i.addInstrumentationHandler)("history", t => {
                  let { from: e, to: n } = t;
                  !(void 0 === e || e === n) && k((0, r.getCurrentHub)());
                }));
            })();
      }
      function y() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, r.getCurrentHub)();
        if (!s.WINDOW.document) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            i.logger.error(
              "Global document not defined in showReportDialog call"
            );
          return;
        }
        let { client: n, scope: a } = e.getStackTop(),
          o = t.dsn || (n && n.getDsn());
        if (!o) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            i.logger.error("DSN not configured for showReportDialog call");
          return;
        }
        a && (t.user = { ...a.getUser(), ...t.user }),
          !t.eventId && (t.eventId = e.lastEventId());
        let l = s.WINDOW.document.createElement("script");
        (l.async = !0),
          (l.crossOrigin = "anonymous"),
          (l.src = (0, r.getReportDialogEndpoint)(o, t)),
          t.onLoad && (l.onload = t.onLoad);
        let u = s.WINDOW.document.head || s.WINDOW.document.body;
        u
          ? u.appendChild(l)
          : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            i.logger.error(
              "Not injecting report dialog. No injection point found in HTML"
            );
      }
      function v() {
        return (0, r.getCurrentHub)().lastEventId();
      }
      function E() {}
      function b(t) {
        t();
      }
      function S(t) {
        let e = (0, r.getCurrentHub)().getClient();
        return e
          ? e.flush(t)
          : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.warn("Cannot flush events. No client defined."),
            (0, i.resolvedSyncPromise)(!1));
      }
      function w(t) {
        let e = (0, r.getCurrentHub)().getClient();
        return e
          ? e.close(t)
          : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.warn(
                "Cannot flush events and disable SDK. No client defined."
              ),
            (0, i.resolvedSyncPromise)(!1));
      }
      function T(t) {
        return (0, s.wrap)(t)();
      }
      function k(t) {
        t.startSession({ ignoreDuration: !0 }), t.captureSession();
      }
      function R(t) {
        let e = (0, r.getCurrentHub)().getClient();
        e && e.captureUserFeedback(t);
      }
    },
    202406: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          chromeStackLineParser: function () {
            return o;
          },
          defaultStackLineParsers: function () {
            return m;
          },
          defaultStackParser: function () {
            return y;
          },
          geckoStackLineParser: function () {
            return c;
          },
          opera10StackLineParser: function () {
            return p;
          },
          opera11StackLineParser: function () {
            return g;
          },
          winjsStackLineParser: function () {
            return h;
          },
        });
      var r = n("648238");
      function i(t, e, n, r) {
        let i = { filename: t, function: e, in_app: !0 };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
      }
      let a =
          /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        s = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        o = [
          30,
          t => {
            let e = a.exec(t);
            if (e) {
              if (e[2] && 0 === e[2].indexOf("eval")) {
                let t = s.exec(e[2]);
                t && ((e[2] = t[1]), (e[3] = t[2]), (e[4] = t[3]));
              }
              let [t, n] = v(e[1] || "?", e[2]);
              return i(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
            }
          },
        ],
        l =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        c = [
          50,
          t => {
            let e = l.exec(t);
            if (e) {
              if (e[3] && e[3].indexOf(" > eval") > -1) {
                let t = u.exec(e[3]);
                t &&
                  ((e[1] = e[1] || "eval"),
                  (e[3] = t[1]),
                  (e[4] = t[2]),
                  (e[5] = ""));
              }
              let t = e[3],
                n = e[1] || "?";
              return (
                ([n, t] = v(n, t)),
                i(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
              );
            }
          },
        ],
        d =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        h = [
          40,
          t => {
            let e = d.exec(t);
            return e
              ? i(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0)
              : void 0;
          },
        ],
        f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        p = [
          10,
          t => {
            let e = f.exec(t);
            return e ? i(e[2], e[3] || "?", +e[1]) : void 0;
          },
        ],
        _ =
          / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        g = [
          20,
          t => {
            let e = _.exec(t);
            return e ? i(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0;
          },
        ],
        m = [o, c, h],
        y = (0, r.createStackParser)(...m),
        v = (t, e) => {
          let n = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
          return n || r
            ? [
                -1 !== t.indexOf("@") ? t.split("@")[0] : "?",
                n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
              ]
            : [t, e];
        };
    },
    393746: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          makeFetchTransport: function () {
            return s;
          },
        });
      var r = n("91320"),
        i = n("648238"),
        a = n("56618");
      function s(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, a.getNativeFetchImplementation)(),
          n = 0,
          s = 0;
        return (0, r.createTransport)(t, function (r) {
          let o = r.body.length;
          (n += o), s++;
          let l = {
            body: r.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && s < 15,
            ...t.fetchOptions,
          };
          try {
            return e(t.url, l).then(
              t => (
                (n -= o),
                s--,
                {
                  statusCode: t.status,
                  headers: {
                    "x-sentry-rate-limits": t.headers.get(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": t.headers.get("Retry-After"),
                  },
                }
              )
            );
          } catch (t) {
            return (
              (0, a.clearCachedFetchImplementation)(),
              (n -= o),
              s--,
              (0, i.rejectedSyncPromise)(t)
            );
          }
        });
      }
    },
    490753: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          makeBrowserOfflineTransport: function () {
            return l;
          },
        });
      var r = n("91320"),
        i = n("648238");
      function a(t) {
        return new Promise((e, n) => {
          (t.oncomplete = t.onsuccess = () => e(t.result)),
            (t.onabort = t.onerror = () => n(t.error));
        });
      }
      function s(t) {
        return a(t.getAllKeys());
      }
      function o(t) {
        let e;
        function n() {
          return (
            void 0 == e &&
              (e = (function (t, e) {
                let n = indexedDB.open(t);
                n.onupgradeneeded = () => n.result.createObjectStore(e);
                let r = a(n);
                return t =>
                  r.then(n => t(n.transaction(e, "readwrite").objectStore(e)));
              })(t.dbName || "sentry-offline", t.storeName || "queue")),
            e
          );
        }
        return {
          insert: async e => {
            try {
              var r, o, l;
              let u = await (0, i.serializeEnvelope)(e, t.textEncoder);
              await ((r = n()),
              (o = u),
              (l = t.maxQueueSize || 30),
              r(t =>
                s(t).then(e => {
                  if (!(e.length >= l))
                    return t.put(o, Math.max(...e, 0) + 1), a(t.transaction);
                })
              ));
            } catch (t) {}
          },
          pop: async () => {
            try {
              let e = await n()(t =>
                s(t).then(e => {
                  if (0 !== e.length)
                    return a(t.get(e[0])).then(
                      n => (t.delete(e[0]), a(t.transaction).then(() => n))
                    );
                })
              );
              if (e)
                return (0, i.parseEnvelope)(
                  e,
                  t.textEncoder || new TextEncoder(),
                  t.textDecoder || new TextDecoder()
                );
            } catch (t) {}
          },
        };
      }
      function l(t) {
        var e;
        return (
          (e = (0, r.makeOfflineTransport)(t)), t => e({ ...t, createStore: o })
        );
      }
    },
    56618: function (t, e, n) {
      "use strict";
      let r;
      n.r(e),
        n.d(e, {
          clearCachedFetchImplementation: function () {
            return o;
          },
          getNativeFetchImplementation: function () {
            return s;
          },
        });
      var i = n("648238"),
        a = n("643487");
      function s() {
        if (r) return r;
        if ((0, i.isNativeFetch)(a.WINDOW.fetch))
          return (r = a.WINDOW.fetch.bind(a.WINDOW));
        let t = a.WINDOW.document,
          e = a.WINDOW.fetch;
        if (t && "function" == typeof t.createElement)
          try {
            let n = t.createElement("iframe");
            (n.hidden = !0), t.head.appendChild(n);
            let r = n.contentWindow;
            r && r.fetch && (e = r.fetch), t.head.removeChild(n);
          } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                t
              );
          }
        return (r = e.bind(a.WINDOW));
      }
      function o() {
        r = void 0;
      }
    },
    975927: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          makeXHRTransport: function () {
            return a;
          },
        });
      var r = n("91320"),
        i = n("648238");
      function a(t) {
        return (0, r.createTransport)(t, function (e) {
          return new i.SyncPromise((n, r) => {
            let i = new XMLHttpRequest();
            for (let e in ((i.onerror = r),
            (i.onreadystatechange = () => {
              4 === i.readyState &&
                n({
                  statusCode: i.status,
                  headers: {
                    "x-sentry-rate-limits": i.getResponseHeader(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": i.getResponseHeader("Retry-After"),
                  },
                });
            }),
            i.open("POST", t.url),
            t.headers))
              Object.prototype.hasOwnProperty.call(t.headers, e) &&
                i.setRequestHeader(e, t.headers[e]);
            i.send(e.body);
          });
        });
      }
    },
    184612: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          createUserFeedbackEnvelope: function () {
            return i;
          },
        });
      var r = n("648238");
      function i(t, e) {
        let { metadata: n, tunnel: i, dsn: a } = e,
          s = {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...(n &&
              n.sdk && { sdk: { name: n.sdk.name, version: n.sdk.version } }),
            ...(!!i && !!a && { dsn: (0, r.dsnToString)(a) }),
          },
          o = (function (t) {
            return [{ type: "user_report" }, t];
          })(t);
        return (0, r.createEnvelope)(s, [o]);
      }
    },
    507506: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getEnvelopeEndpointWithUrlEncodedAuth: function () {
            return a;
          },
          getReportDialogEndpoint: function () {
            return s;
          },
        });
      var r = n("648238");
      function i(t) {
        let e = t.protocol ? `${t.protocol}:` : "",
          n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
      }
      function a(t) {
        var e, n, a;
        let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = "string" == typeof s ? s : s.tunnel,
          l = "string" != typeof s && s._metadata ? s._metadata.sdk : void 0;
        return (
          o ||
          `${((e = t), `${i(e)}${e.projectId}/envelope/`)}?${((n = t), (a = l), (0, r.urlEncode)({ sentry_key: n.publicKey, sentry_version: "7", ...(a && { sentry_client: `${a.name}/${a.version}` }) }))}`
        );
      }
      function s(t, e) {
        let n = (0, r.makeDsn)(t);
        if (!n) return "";
        let a = `${i(n)}embed/error-page/`,
          s = `dsn=${(0, r.dsnToString)(n)}`;
        for (let t in e)
          if ("dsn" !== t) {
            if ("user" === t) {
              let t = e.user;
              if (!t) continue;
              t.name && (s += `&name=${encodeURIComponent(t.name)}`),
                t.email && (s += `&email=${encodeURIComponent(t.email)}`);
            } else s += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
          }
        return `${a}?${s}`;
      }
    },
    861579: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BaseClient: function () {
            return d;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("507506"),
        a = n("419767"),
        s = n("595208"),
        o = n("741900"),
        l = n("154405"),
        u = n("392405");
      let c = "Not capturing exception because it's already been captured.";
      class d {
        __init() {
          this._integrations = {};
        }
        __init2() {
          this._integrationsInitialized = !1;
        }
        __init3() {
          this._numProcessing = 0;
        }
        __init4() {
          this._outcomes = {};
        }
        __init5() {
          this._hooks = {};
        }
        constructor(t) {
          if (
            (d.prototype.__init.call(this),
            d.prototype.__init2.call(this),
            d.prototype.__init3.call(this),
            d.prototype.__init4.call(this),
            d.prototype.__init5.call(this),
            (this._options = t),
            t.dsn
              ? (this._dsn = (0, r.makeDsn)(t.dsn))
              : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.warn("No DSN provided, client will not do anything."),
            this._dsn)
          ) {
            let e = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, t);
            this._transport = t.transport({
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...t.transportOptions,
              url: e,
            });
          }
        }
        captureException(t, e, n) {
          if ((0, r.checkOrSetAlreadyCaught)(t)) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(c);
            return;
          }
          let i = e && e.event_id;
          return (
            this._process(
              this.eventFromException(t, e)
                .then(t => this._captureEvent(t, e, n))
                .then(t => {
                  i = t;
                })
            ),
            i
          );
        }
        captureMessage(t, e, n, i) {
          let a = n && n.event_id,
            s = (0, r.isPrimitive)(t)
              ? this.eventFromMessage(String(t), e, n)
              : this.eventFromException(t, n);
          return (
            this._process(
              s
                .then(t => this._captureEvent(t, n, i))
                .then(t => {
                  a = t;
                })
            ),
            a
          );
        }
        captureEvent(t, e, n) {
          if (
            e &&
            e.originalException &&
            (0, r.checkOrSetAlreadyCaught)(e.originalException)
          ) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(c);
            return;
          }
          let i = e && e.event_id;
          return (
            this._process(
              this._captureEvent(t, e, n).then(t => {
                i = t;
              })
            ),
            i
          );
        }
        captureSession(t) {
          if (!this._isEnabled()) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.warn("SDK not enabled, will not capture session.");
            return;
          }
          "string" != typeof t.release
            ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.warn(
                "Discarded session because of missing or non-string release"
              )
            : (this.sendSession(t), (0, o.updateSession)(t, { init: !1 }));
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        flush(t) {
          let e = this._transport;
          return e
            ? this._isClientDoneProcessing(t).then(n =>
                e.flush(t).then(t => n && t)
              )
            : (0, r.resolvedSyncPromise)(!0);
        }
        close(t) {
          return this.flush(t).then(t => ((this.getOptions().enabled = !1), t));
        }
        setupIntegrations() {
          this._isEnabled() &&
            !this._integrationsInitialized &&
            ((this._integrations = (0, s.setupIntegrations)(
              this._options.integrations
            )),
            (this._integrationsInitialized = !0));
        }
        getIntegrationById(t) {
          return this._integrations[t];
        }
        getIntegration(t) {
          try {
            return this._integrations[t.id] || null;
          } catch (e) {
            return (
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.warn(
                  `Cannot retrieve integration ${t.id} from the current Client`
                ),
              null
            );
          }
        }
        addIntegration(t) {
          (0, s.setupIntegration)(t, this._integrations);
        }
        sendEvent(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._dsn) {
            let n = (0, a.createEventEnvelope)(
              t,
              this._dsn,
              this._options._metadata,
              this._options.tunnel
            );
            for (let t of e.attachments || [])
              n = (0, r.addItemToEnvelope)(
                n,
                (0, r.createAttachmentEnvelopeItem)(
                  t,
                  this._options.transportOptions &&
                    this._options.transportOptions.textEncoder
                )
              );
            let i = this._sendEnvelope(n);
            i && i.then(e => this.emit("afterSendEvent", t, e), null);
          }
        }
        sendSession(t) {
          if (this._dsn) {
            let e = (0, a.createSessionEnvelope)(
              t,
              this._dsn,
              this._options._metadata,
              this._options.tunnel
            );
            this._sendEnvelope(e);
          }
        }
        recordDroppedEvent(t, e, n) {
          if (this._options.sendClientReports) {
            let n = `${t}:${e}`;
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(`Adding outcome: "${n}"`),
              (this._outcomes[n] = this._outcomes[n] + 1 || 1);
          }
        }
        on(t, e) {
          !this._hooks[t] && (this._hooks[t] = []), this._hooks[t].push(e);
        }
        emit(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          this._hooks[t] && this._hooks[t].forEach(t => t(...n));
        }
        _updateSessionFromEvent(t, e) {
          let n = !1,
            r = !1,
            i = e.exception && e.exception.values;
          if (i)
            for (let t of ((r = !0), i)) {
              let e = t.mechanism;
              if (e && !1 === e.handled) {
                n = !0;
                break;
              }
            }
          let a = "ok" === t.status;
          ((a && 0 === t.errors) || (a && n)) &&
            ((0, o.updateSession)(t, {
              ...(n && { status: "crashed" }),
              errors: t.errors || Number(r || n),
            }),
            this.captureSession(t));
        }
        _isClientDoneProcessing(t) {
          return new r.SyncPromise(e => {
            let n = 0,
              r = setInterval(() => {
                0 == this._numProcessing
                  ? (clearInterval(r), e(!0))
                  : ((n += 1), t && n >= t && (clearInterval(r), e(!1)));
              }, 1);
          });
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
        }
        _prepareEvent(t, e, n) {
          let r = this.getOptions(),
            i = Object.keys(this._integrations);
          return (
            !e.integrations && i.length > 0 && (e.integrations = i),
            (0, u.prepareEvent)(r, t, e, n).then(t => {
              if (null === t) return t;
              let { propagationContext: e } = t.sdkProcessingMetadata || {};
              if (!(t.contexts && t.contexts.trace) && e) {
                let { traceId: r, spanId: i, parentSpanId: a, dsc: s } = e;
                t.contexts = {
                  trace: { trace_id: r, span_id: i, parent_span_id: a },
                  ...t.contexts,
                };
                let o =
                  s || (0, l.getDynamicSamplingContextFromClient)(r, this, n);
                t.sdkProcessingMetadata = {
                  dynamicSamplingContext: o,
                  ...t.sdkProcessingMetadata,
                };
              }
              return t;
            })
          );
        }
        _captureEvent(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return this._processEvent(t, e, n).then(
            t => t.event_id,
            t => {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                ("log" === t.logLevel
                  ? r.logger.log(t.message)
                  : r.logger.warn(t));
            }
          );
        }
        _processEvent(t, e, n) {
          let i = this.getOptions(),
            { sampleRate: a } = i;
          if (!this._isEnabled())
            return (0, r.rejectedSyncPromise)(
              new r.SentryError(
                "SDK not enabled, will not capture event.",
                "log"
              )
            );
          let s = f(t),
            o = h(t),
            l = t.type || "error",
            u = `before send for type \`${l}\``;
          if (o && "number" == typeof a && Math.random() > a)
            return (
              this.recordDroppedEvent("sample_rate", "error", t),
              (0, r.rejectedSyncPromise)(
                new r.SentryError(
                  `Discarding event because it's not included in the random sample (sampling rate = ${a})`,
                  "log"
                )
              )
            );
          let c = "replay_event" === l ? "replay" : l;
          return this._prepareEvent(t, e, n)
            .then(n => {
              if (null === n)
                throw (
                  (this.recordDroppedEvent("event_processor", c, t),
                  new r.SentryError(
                    "An event processor returned `null`, will not send event.",
                    "log"
                  ))
                );
              return e.data && !0 === e.data.__sentry__
                ? n
                : (function (t, e) {
                    let n = `${e} must return \`null\` or a valid event.`;
                    if ((0, r.isThenable)(t))
                      return t.then(
                        t => {
                          if (!(0, r.isPlainObject)(t) && null !== t)
                            throw new r.SentryError(n);
                          return t;
                        },
                        t => {
                          throw new r.SentryError(`${e} rejected with ${t}`);
                        }
                      );
                    if (!(0, r.isPlainObject)(t) && null !== t)
                      throw new r.SentryError(n);
                    return t;
                  })(
                    (function (t, e, n) {
                      let { beforeSend: r, beforeSendTransaction: i } = t;
                      return h(e) && r ? r(e, n) : f(e) && i ? i(e, n) : e;
                    })(i, n, e),
                    u
                  );
            })
            .then(i => {
              if (null === i)
                throw (
                  (this.recordDroppedEvent("before_send", c, t),
                  new r.SentryError(
                    `${u} returned \`null\`, will not send event.`,
                    "log"
                  ))
                );
              let a = n && n.getSession();
              !s && a && this._updateSessionFromEvent(a, i);
              let o = i.transaction_info;
              return (
                s &&
                  o &&
                  i.transaction !== t.transaction &&
                  (i.transaction_info = { ...o, source: "custom" }),
                this.sendEvent(i, e),
                i
              );
            })
            .then(null, t => {
              if (t instanceof r.SentryError) throw t;
              throw (
                (this.captureException(t, {
                  data: { __sentry__: !0 },
                  originalException: t,
                }),
                new r.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`))
              );
            });
        }
        _process(t) {
          this._numProcessing++,
            t.then(
              t => (this._numProcessing--, t),
              t => (this._numProcessing--, t)
            );
        }
        _sendEnvelope(t) {
          if (this._transport && this._dsn)
            return (
              this.emit("beforeEnvelope", t),
              this._transport.send(t).then(null, t => {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  r.logger.error("Error while sending event:", t);
              })
            );
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.logger.error("Transport disabled");
        }
        _clearOutcomes() {
          let t = this._outcomes;
          return (
            (this._outcomes = {}),
            Object.keys(t).map(e => {
              let [n, r] = e.split(":");
              return { reason: n, category: r, quantity: t[e] };
            })
          );
        }
      }
      function h(t) {
        return void 0 === t.type;
      }
      function f(t) {
        return "transaction" === t.type;
      }
    },
    28434: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          DEFAULT_ENVIRONMENT: function () {
            return r;
          },
        });
      let r = "production";
    },
    419767: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          createEventEnvelope: function () {
            return a;
          },
          createSessionEnvelope: function () {
            return i;
          },
        });
      var r = n("648238");
      function i(t, e, n, i) {
        let a = (0, r.getSdkMetadataForEnvelopeHeader)(n),
          s = {
            sent_at: new Date().toISOString(),
            ...(a && { sdk: a }),
            ...(!!i && { dsn: (0, r.dsnToString)(e) }),
          },
          o =
            "aggregates" in t
              ? [{ type: "sessions" }, t]
              : [{ type: "session" }, t.toJSON()];
        return (0, r.createEnvelope)(s, [o]);
      }
      function a(t, e, n, i) {
        var a, s;
        let o = (0, r.getSdkMetadataForEnvelopeHeader)(n),
          l = t.type && "replay_event" !== t.type ? t.type : "event";
        (a = t),
          !(s = n && n.sdk) ||
            ((a.sdk = a.sdk || {}),
            (a.sdk.name = a.sdk.name || s.name),
            (a.sdk.version = a.sdk.version || s.version),
            (a.sdk.integrations = [
              ...(a.sdk.integrations || []),
              ...(s.integrations || []),
            ]),
            (a.sdk.packages = [
              ...(a.sdk.packages || []),
              ...(s.packages || []),
            ]));
        let u = (0, r.createEventEnvelopeHeaders)(t, o, i, e);
        delete t.sdkProcessingMetadata;
        let c = [{ type: l }, t];
        return (0, r.createEnvelope)(u, [c]);
      }
    },
    138122: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          addBreadcrumb: function () {
            return l;
          },
          captureEvent: function () {
            return s;
          },
          captureException: function () {
            return i;
          },
          captureMessage: function () {
            return a;
          },
          configureScope: function () {
            return o;
          },
          setContext: function () {
            return u;
          },
          setExtra: function () {
            return d;
          },
          setExtras: function () {
            return c;
          },
          setTag: function () {
            return f;
          },
          setTags: function () {
            return h;
          },
          setUser: function () {
            return p;
          },
          startTransaction: function () {
            return g;
          },
          withScope: function () {
            return _;
          },
        });
      var r = n("876122");
      function i(t, e) {
        return (0, r.getCurrentHub)().captureException(t, {
          captureContext: e,
        });
      }
      function a(t, e) {
        let n = "string" == typeof e ? e : void 0,
          i = "string" != typeof e ? { captureContext: e } : void 0;
        return (0, r.getCurrentHub)().captureMessage(t, n, i);
      }
      function s(t, e) {
        return (0, r.getCurrentHub)().captureEvent(t, e);
      }
      function o(t) {
        (0, r.getCurrentHub)().configureScope(t);
      }
      function l(t) {
        (0, r.getCurrentHub)().addBreadcrumb(t);
      }
      function u(t, e) {
        (0, r.getCurrentHub)().setContext(t, e);
      }
      function c(t) {
        (0, r.getCurrentHub)().setExtras(t);
      }
      function d(t, e) {
        (0, r.getCurrentHub)().setExtra(t, e);
      }
      function h(t) {
        (0, r.getCurrentHub)().setTags(t);
      }
      function f(t, e) {
        (0, r.getCurrentHub)().setTag(t, e);
      }
      function p(t) {
        (0, r.getCurrentHub)().setUser(t);
      }
      function _(t) {
        (0, r.getCurrentHub)().withScope(t);
      }
      function g(t, e) {
        return (0, r.getCurrentHub)().startTransaction({ ...t }, e);
      }
    },
    876122: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Hub: function () {
            return o;
          },
          getCurrentHub: function () {
            return c;
          },
          getHubFromCarrier: function () {
            return d;
          },
          getMainCarrier: function () {
            return l;
          },
          makeMain: function () {
            return u;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("28434"),
        a = n("703498"),
        s = n("741900");
      class o {
        constructor(t, e = new a.Scope(), n = 4) {
          (this._version = n),
            (this._stack = [{ scope: e }]),
            t && this.bindClient(t);
        }
        isOlderThan(t) {
          return this._version < t;
        }
        bindClient(t) {
          (this.getStackTop().client = t),
            t && t.setupIntegrations && t.setupIntegrations();
        }
        pushScope() {
          let t = a.Scope.clone(this.getScope());
          return (
            this.getStack().push({ client: this.getClient(), scope: t }), t
          );
        }
        popScope() {
          return !(this.getStack().length <= 1) && !!this.getStack().pop();
        }
        withScope(t) {
          let e = this.pushScope();
          try {
            t(e);
          } finally {
            this.popScope();
          }
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getStack() {
          return this._stack;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        captureException(t, e) {
          let n = (this._lastEventId =
              e && e.event_id ? e.event_id : (0, r.uuid4)()),
            i = Error("Sentry syntheticException");
          return (
            this._withClient((r, a) => {
              r.captureException(
                t,
                {
                  originalException: t,
                  syntheticException: i,
                  ...e,
                  event_id: n,
                },
                a
              );
            }),
            n
          );
        }
        captureMessage(t, e, n) {
          let i = (this._lastEventId =
              n && n.event_id ? n.event_id : (0, r.uuid4)()),
            a = Error(t);
          return (
            this._withClient((r, s) => {
              r.captureMessage(
                t,
                e,
                {
                  originalException: t,
                  syntheticException: a,
                  ...n,
                  event_id: i,
                },
                s
              );
            }),
            i
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : (0, r.uuid4)();
          return (
            !t.type && (this._lastEventId = n),
            this._withClient((r, i) => {
              r.captureEvent(t, { ...e, event_id: n }, i);
            }),
            n
          );
        }
        lastEventId() {
          return this._lastEventId;
        }
        addBreadcrumb(t, e) {
          let { scope: n, client: i } = this.getStackTop();
          if (!i) return;
          let { beforeBreadcrumb: a = null, maxBreadcrumbs: s = 100 } =
            (i.getOptions && i.getOptions()) || {};
          if (s <= 0) return;
          let o = { timestamp: (0, r.dateTimestampInSeconds)(), ...t },
            l = a ? (0, r.consoleSandbox)(() => a(o, e)) : o;
          null !== l &&
            (i.emit && i.emit("beforeAddBreadcrumb", l, e),
            n.addBreadcrumb(l, s));
        }
        setUser(t) {
          this.getScope().setUser(t);
        }
        setTags(t) {
          this.getScope().setTags(t);
        }
        setExtras(t) {
          this.getScope().setExtras(t);
        }
        setTag(t, e) {
          this.getScope().setTag(t, e);
        }
        setExtra(t, e) {
          this.getScope().setExtra(t, e);
        }
        setContext(t, e) {
          this.getScope().setContext(t, e);
        }
        configureScope(t) {
          let { scope: e, client: n } = this.getStackTop();
          n && t(e);
        }
        run(t) {
          let e = u(this);
          try {
            t(this);
          } finally {
            u(e);
          }
        }
        getIntegration(t) {
          let e = this.getClient();
          if (!e) return null;
          try {
            return e.getIntegration(t);
          } catch (e) {
            return (
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.warn(
                  `Cannot retrieve integration ${t.id} from the current Hub`
                ),
              null
            );
          }
        }
        startTransaction(t, e) {
          let n = this._callExtensionMethod("startTransaction", t, e);
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              !n &&
              console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),
            n
          );
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders");
        }
        captureSession() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (t) return this.endSession();
          this._sendSessionUpdate();
        }
        endSession() {
          let t = this.getStackTop().scope,
            e = t.getSession();
          e && (0, s.closeSession)(e),
            this._sendSessionUpdate(),
            t.setSession();
        }
        startSession(t) {
          let { scope: e, client: n } = this.getStackTop(),
            { release: a, environment: o = i.DEFAULT_ENVIRONMENT } =
              (n && n.getOptions()) || {},
            { userAgent: l } = r.GLOBAL_OBJ.navigator || {},
            u = (0, s.makeSession)({
              release: a,
              environment: o,
              user: e.getUser(),
              ...(l && { userAgent: l }),
              ...t,
            }),
            c = e.getSession && e.getSession();
          return (
            c &&
              "ok" === c.status &&
              (0, s.updateSession)(c, { status: "exited" }),
            this.endSession(),
            e.setSession(u),
            u
          );
        }
        shouldSendDefaultPii() {
          let t = this.getClient(),
            e = t && t.getOptions();
          return !!(e && e.sendDefaultPii);
        }
        _sendSessionUpdate() {
          let { scope: t, client: e } = this.getStackTop(),
            n = t.getSession();
          n && e && e.captureSession && e.captureSession(n);
        }
        _withClient(t) {
          let { scope: e, client: n } = this.getStackTop();
          n && t(n, e);
        }
        _callExtensionMethod(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
            i < e;
            i++
          )
            n[i - 1] = arguments[i];
          let a = l().__SENTRY__;
          if (a && a.extensions && "function" == typeof a.extensions[t])
            return a.extensions[t].apply(this, n);
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.logger.warn(
              `Extension method ${t} couldn't be found, doing nothing.`
            );
        }
      }
      function l() {
        return (
          (r.GLOBAL_OBJ.__SENTRY__ = r.GLOBAL_OBJ.__SENTRY__ || {
            extensions: {},
            hub: void 0,
          }),
          r.GLOBAL_OBJ
        );
      }
      function u(t) {
        let e = l(),
          n = d(e);
        return h(e, t), n;
      }
      function c() {
        let t = l();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
          let e = t.__SENTRY__.acs.getCurrentHub();
          if (e) return e;
        }
        return (function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l();
          return (
            (!(function (t) {
              return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
            })(t) ||
              d(t).isOlderThan(4)) &&
              h(t, new o()),
            d(t)
          );
        })(t);
      }
      function d(t) {
        return (0, r.getGlobalSingleton)("hub", () => new o(), t);
      }
      function h(t, e) {
        return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0);
      }
    },
    91320: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BaseClient: function () {
            return f.BaseClient;
          },
          DEFAULT_ENVIRONMENT: function () {
            return w.DEFAULT_ENVIRONMENT;
          },
          FunctionToString: function () {
            return k.FunctionToString;
          },
          Hub: function () {
            return c.Hub;
          },
          InboundFilters: function () {
            return R.InboundFilters;
          },
          Integrations: function () {
            return E;
          },
          ModuleMetadata: function () {
            return T.ModuleMetadata;
          },
          SDK_VERSION: function () {
            return y.SDK_VERSION;
          },
          Scope: function () {
            return d.Scope;
          },
          TRACING_DEFAULTS: function () {
            return i.TRACING_DEFAULTS;
          },
          addBreadcrumb: function () {
            return u.addBreadcrumb;
          },
          addGlobalEventProcessor: function () {
            return d.addGlobalEventProcessor;
          },
          addTracingExtensions: function () {
            return r.addTracingExtensions;
          },
          captureEvent: function () {
            return u.captureEvent;
          },
          captureException: function () {
            return u.captureException;
          },
          captureMessage: function () {
            return u.captureMessage;
          },
          configureScope: function () {
            return u.configureScope;
          },
          createTransport: function () {
            return _.createTransport;
          },
          extractTraceparentData: function () {
            return x.extractTraceparentData;
          },
          getActiveTransaction: function () {
            return s.getActiveTransaction;
          },
          getCurrentHub: function () {
            return c.getCurrentHub;
          },
          getDynamicSamplingContextFromClient: function () {
            return l.getDynamicSamplingContextFromClient;
          },
          getHubFromCarrier: function () {
            return c.getHubFromCarrier;
          },
          getIntegrationsToSetup: function () {
            return v.getIntegrationsToSetup;
          },
          getReportDialogEndpoint: function () {
            return h.getReportDialogEndpoint;
          },
          hasTracingEnabled: function () {
            return S.hasTracingEnabled;
          },
          initAndBind: function () {
            return p.initAndBind;
          },
          makeMain: function () {
            return c.makeMain;
          },
          makeMultiplexedTransport: function () {
            return m.makeMultiplexedTransport;
          },
          makeOfflineTransport: function () {
            return g.makeOfflineTransport;
          },
          prepareEvent: function () {
            return b.prepareEvent;
          },
          setContext: function () {
            return u.setContext;
          },
          setExtra: function () {
            return u.setExtra;
          },
          setExtras: function () {
            return u.setExtras;
          },
          setTag: function () {
            return u.setTag;
          },
          setTags: function () {
            return u.setTags;
          },
          setUser: function () {
            return u.setUser;
          },
          spanStatusfromHttpCode: function () {
            return a.spanStatusfromHttpCode;
          },
          startIdleTransaction: function () {
            return r.startIdleTransaction;
          },
          startTransaction: function () {
            return u.startTransaction;
          },
          trace: function () {
            return o.trace;
          },
          withScope: function () {
            return u.withScope;
          },
        });
      var r = n("90668"),
        i = n("376097"),
        a = n("48950"),
        s = n("147816"),
        o = n("468174"),
        l = n("154405"),
        u = n("138122"),
        c = n("876122"),
        d = n("703498"),
        h = n("507506"),
        f = n("861579"),
        p = n("110575"),
        _ = n("347421"),
        g = n("499833"),
        m = n("449701"),
        y = n("139782"),
        v = n("595208"),
        E = n("89837"),
        b = n("392405"),
        S = n("633401"),
        w = n("28434"),
        T = n("333878"),
        k = n("740054"),
        R = n("344106"),
        x = n("648238");
    },
    595208: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getIntegrationsToSetup: function () {
            return o;
          },
          setupIntegration: function () {
            return u;
          },
          setupIntegrations: function () {
            return l;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("876122"),
        a = n("703498");
      let s = [];
      function o(t) {
        let e;
        let n = t.defaultIntegrations || [],
          i = t.integrations;
        n.forEach(t => {
          t.isDefaultInstance = !0;
        });
        let a = (function (t) {
            let e = {};
            return (
              t.forEach(t => {
                let { name: n } = t,
                  r = e[n];
                (!r || r.isDefaultInstance || !t.isDefaultInstance) &&
                  (e[n] = t);
              }),
              Object.keys(e).map(t => e[t])
            );
          })(
            (e = Array.isArray(i)
              ? [...n, ...i]
              : "function" == typeof i
                ? (0, r.arrayify)(i(n))
                : n)
          ),
          s = (function (t, e) {
            for (let n = 0; n < t.length; n++) if (!0 === e(t[n])) return n;
            return -1;
          })(a, t => "Debug" === t.name);
        if (-1 !== s) {
          let [t] = a.splice(s, 1);
          a.push(t);
        }
        return a;
      }
      function l(t) {
        let e = {};
        return (
          t.forEach(t => {
            t && u(t, e);
          }),
          e
        );
      }
      function u(t, e) {
        (e[t.name] = t),
          -1 === s.indexOf(t.name) &&
            (t.setupOnce(a.addGlobalEventProcessor, i.getCurrentHub),
            s.push(t.name),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(`Integration installed: ${t.name}`));
      }
    },
    740054: function (t, e, n) {
      "use strict";
      let r;
      n.r(e),
        n.d(e, {
          FunctionToString: function () {
            return a;
          },
        });
      var i = n("648238");
      class a {
        constructor() {
          a.prototype.__init.call(this);
        }
        static __initStatic() {
          this.id = "FunctionToString";
        }
        __init() {
          this.name = a.id;
        }
        setupOnce() {
          r = Function.prototype.toString;
          try {
            Function.prototype.toString = function () {
              for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              let a = (0, i.getOriginalFunction)(this) || this;
              return r.apply(a, e);
            };
          } catch (t) {}
        }
      }
      a.__initStatic();
    },
    344106: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          InboundFilters: function () {
            return s;
          },
        });
      var r = n("648238");
      let i = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        a = [
          /^.*healthcheck.*$/,
          /^.*healthy.*$/,
          /^.*live.*$/,
          /^.*ready.*$/,
          /^.*heartbeat.*$/,
          /^.*\/health$/,
          /^.*\/healthz$/,
        ];
      class s {
        static __initStatic() {
          this.id = "InboundFilters";
        }
        __init() {
          this.name = s.id;
        }
        constructor(t = {}) {
          (this._options = t), s.prototype.__init.call(this);
        }
        setupOnce(t, e) {
          let n = t => {
            let n = e();
            if (n) {
              let e = n.getIntegration(s);
              if (e) {
                let s = n.getClient(),
                  l = s ? s.getOptions() : {};
                return (function (t, e) {
                  return e.ignoreInternal &&
                    (function (t) {
                      try {
                        return "SentryError" === t.exception.values[0].type;
                      } catch (t) {}
                      return !1;
                    })(t)
                    ? (("undefined" == typeof __SENTRY_DEBUG__ ||
                        __SENTRY_DEBUG__) &&
                        r.logger
                          .warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, r.getEventDescription)(t)}`),
                      !0)
                    : (function (t, e) {
                          return (
                            !t.type &&
                            !!e &&
                            !!e.length &&
                            (function (t) {
                              if (t.message) return [t.message];
                              if (t.exception) {
                                let { values: e } = t.exception;
                                try {
                                  let { type: t = "", value: n = "" } =
                                    (e && e[e.length - 1]) || {};
                                  return [`${n}`, `${t}: ${n}`];
                                } catch (e) {
                                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                                    __SENTRY_DEBUG__) &&
                                    r.logger.error(
                                      `Cannot extract message for event ${(0, r.getEventDescription)(t)}`
                                    );
                                }
                              }
                              return [];
                            })(t).some(t =>
                              (0, r.stringMatchesSomePattern)(t, e)
                            )
                          );
                        })(t, e.ignoreErrors)
                      ? (("undefined" == typeof __SENTRY_DEBUG__ ||
                          __SENTRY_DEBUG__) &&
                          r.logger
                            .warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, r.getEventDescription)(t)}`),
                        !0)
                      : (function (t, e) {
                            if ("transaction" !== t.type || !e || !e.length)
                              return !1;
                            let n = t.transaction;
                            return !!n && (0, r.stringMatchesSomePattern)(n, e);
                          })(t, e.ignoreTransactions)
                        ? (("undefined" == typeof __SENTRY_DEBUG__ ||
                            __SENTRY_DEBUG__) &&
                            r.logger
                              .warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, r.getEventDescription)(t)}`),
                          !0)
                        : (function (t, e) {
                              if (!e || !e.length) return !1;
                              let n = o(t);
                              return (
                                !!n && (0, r.stringMatchesSomePattern)(n, e)
                              );
                            })(t, e.denyUrls)
                          ? (("undefined" == typeof __SENTRY_DEBUG__ ||
                              __SENTRY_DEBUG__) &&
                              r.logger
                                .warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, r.getEventDescription)(t)}.
Url: ${o(t)}`),
                            !0)
                          : !(function (t, e) {
                              if (!e || !e.length) return !0;
                              let n = o(t);
                              return (
                                !n || (0, r.stringMatchesSomePattern)(n, e)
                              );
                            })(t, e.allowUrls) &&
                            (("undefined" == typeof __SENTRY_DEBUG__ ||
                              __SENTRY_DEBUG__) &&
                              r.logger
                                .warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, r.getEventDescription)(t)}.
Url: ${o(t)}`),
                            !0);
                })(
                  t,
                  (function () {
                    let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return {
                      allowUrls: [
                        ...(t.allowUrls || []),
                        ...(e.allowUrls || []),
                      ],
                      denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                      ignoreErrors: [
                        ...(t.ignoreErrors || []),
                        ...(e.ignoreErrors || []),
                        ...(t.disableErrorDefaults ? [] : i),
                      ],
                      ignoreTransactions: [
                        ...(t.ignoreTransactions || []),
                        ...(e.ignoreTransactions || []),
                        ...(t.disableTransactionDefaults ? [] : a),
                      ],
                      ignoreInternal:
                        void 0 === t.ignoreInternal || t.ignoreInternal,
                    };
                  })(e._options, l)
                )
                  ? null
                  : t;
              }
            }
            return t;
          };
          (n.id = this.name), t(n);
        }
      }
      s.__initStatic();
      function o(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return e
            ? (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                for (let e = t.length - 1; e >= 0; e--) {
                  let n = t[e];
                  if (
                    n &&
                    "<anonymous>" !== n.filename &&
                    "[native code]" !== n.filename
                  )
                    return n.filename || null;
                }
                return null;
              })(e)
            : null;
        } catch (e) {
          return (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.error(
                `Cannot extract url for event ${(0, r.getEventDescription)(t)}`
              ),
            null
          );
        }
      }
    },
    89837: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          FunctionToString: function () {
            return r.FunctionToString;
          },
          InboundFilters: function () {
            return i.InboundFilters;
          },
        });
      var r = n("740054"),
        i = n("344106");
    },
    333878: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          ModuleMetadata: function () {
            return a;
          },
        });
      var r = n("648238"),
        i = n("274484");
      class a {
        constructor() {
          a.prototype.__init.call(this);
        }
        static __initStatic() {
          this.id = "ModuleMetadata";
        }
        __init() {
          this.name = a.id;
        }
        setupOnce(t, e) {
          let n = e().getClient();
          if (!n || "function" != typeof n.on) return;
          n.on("beforeEnvelope", t => {
            (0, r.forEachEnvelopeItem)(t, (t, e) => {
              if ("event" === e) {
                let e = Array.isArray(t) ? t[1] : void 0;
                e && ((0, i.stripMetadataFromStackFrames)(e), (t[1] = e));
              }
            });
          });
          let a = n.getOptions().stackParser;
          t(t => ((0, i.addMetadataToStackFrames)(a, t), t));
        }
      }
      a.__initStatic();
    },
    274484: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          addMetadataToStackFrames: function () {
            return s;
          },
          stripMetadataFromStackFrames: function () {
            return o;
          },
        });
      var r = n("648238");
      let i = new Map(),
        a = new Set();
      function s(t, e) {
        try {
          e.exception.values.forEach(e => {
            if (e.stacktrace)
              for (let o of e.stacktrace.frames || []) {
                var n, s;
                if (!o.filename) continue;
                let e =
                  ((n = t),
                  (s = o.filename),
                  !(function (t) {
                    if (r.GLOBAL_OBJ._sentryModuleMetadata)
                      for (let e of Object.keys(
                        r.GLOBAL_OBJ._sentryModuleMetadata
                      )) {
                        let n = r.GLOBAL_OBJ._sentryModuleMetadata[e];
                        if (!a.has(e)) {
                          for (let r of (a.add(e), t(e).reverse()))
                            if (r.filename) {
                              i.set(r.filename, n);
                              break;
                            }
                        }
                      }
                  })(n),
                  i.get(s));
                e && (o.module_metadata = e);
              }
          });
        } catch (t) {}
      }
      function o(t) {
        try {
          t.exception.values.forEach(t => {
            if (t.stacktrace)
              for (let e of t.stacktrace.frames || []) delete e.module_metadata;
          });
        } catch (t) {}
      }
    },
    703498: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Scope: function () {
            return a;
          },
          addGlobalEventProcessor: function () {
            return o;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("741900");
      class a {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = l());
        }
        static clone(t) {
          let e = new a();
          return (
            t &&
              ((e._breadcrumbs = [...t._breadcrumbs]),
              (e._tags = { ...t._tags }),
              (e._extra = { ...t._extra }),
              (e._contexts = { ...t._contexts }),
              (e._user = t._user),
              (e._level = t._level),
              (e._span = t._span),
              (e._session = t._session),
              (e._transactionName = t._transactionName),
              (e._fingerprint = t._fingerprint),
              (e._eventProcessors = [...t._eventProcessors]),
              (e._requestSession = t._requestSession),
              (e._attachments = [...t._attachments]),
              (e._sdkProcessingMetadata = { ...t._sdkProcessingMetadata }),
              (e._propagationContext = { ...t._propagationContext })),
            e
          );
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {}),
            this._session && (0, i.updateSession)(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSpan(t) {
          return (this._span = t), this._notifyScopeListeners(), this;
        }
        getSpan() {
          return this._span;
        }
        getTransaction() {
          let t = this.getSpan();
          return t && t.transaction;
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          if ("function" == typeof t) {
            let e = t(this);
            return e instanceof a ? e : this;
          }
          return (
            t instanceof a
              ? ((this._tags = { ...this._tags, ...t._tags }),
                (this._extra = { ...this._extra, ...t._extra }),
                (this._contexts = { ...this._contexts, ...t._contexts }),
                t._user &&
                  Object.keys(t._user).length &&
                  (this._user = t._user),
                t._level && (this._level = t._level),
                t._fingerprint && (this._fingerprint = t._fingerprint),
                t._requestSession && (this._requestSession = t._requestSession),
                t._propagationContext &&
                  (this._propagationContext = t._propagationContext))
              : (0, r.isPlainObject)(t) &&
                ((this._tags = { ...this._tags, ...t.tags }),
                (this._extra = { ...this._extra, ...t.extra }),
                (this._contexts = { ...this._contexts, ...t.contexts }),
                t.user && (this._user = t.user),
                t.level && (this._level = t.level),
                t.fingerprint && (this._fingerprint = t.fingerprint),
                t.requestSession && (this._requestSession = t.requestSession),
                t.propagationContext &&
                  (this._propagationContext = t.propagationContext)),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            (this._propagationContext = l()),
            this
          );
        }
        addBreadcrumb(t, e) {
          let n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          let i = { timestamp: (0, r.dateTimestampInSeconds)(), ...t };
          return (
            (this._breadcrumbs = [...this._breadcrumbs, i].slice(-n)),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(t) {
          return this._attachments.push(t), this;
        }
        getAttachments() {
          return this._attachments;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        applyToEvent(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            (this._extra &&
              Object.keys(this._extra).length &&
              (t.extra = { ...this._extra, ...t.extra }),
            this._tags &&
              Object.keys(this._tags).length &&
              (t.tags = { ...this._tags, ...t.tags }),
            this._user &&
              Object.keys(this._user).length &&
              (t.user = { ...this._user, ...t.user }),
            this._contexts &&
              Object.keys(this._contexts).length &&
              (t.contexts = { ...this._contexts, ...t.contexts }),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span)
          ) {
            t.contexts = { trace: this._span.getTraceContext(), ...t.contexts };
            let e = this._span.transaction;
            if (e) {
              t.sdkProcessingMetadata = {
                dynamicSamplingContext: e.getDynamicSamplingContext(),
                ...t.sdkProcessingMetadata,
              };
              let n = e.name;
              n && (t.tags = { transaction: n, ...t.tags });
            }
          }
          return (
            this._applyFingerprint(t),
            (t.breadcrumbs = [...(t.breadcrumbs || []), ...this._breadcrumbs]),
            (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
            (t.sdkProcessingMetadata = {
              ...t.sdkProcessingMetadata,
              ...this._sdkProcessingMetadata,
              propagationContext: this._propagationContext,
            }),
            this._notifyEventProcessors(
              [...s(), ...this._eventProcessors],
              t,
              e
            )
          );
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        _notifyEventProcessors(t, e, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new r.SyncPromise((a, s) => {
            let o = t[i];
            if (null === e || "function" != typeof o) a(e);
            else {
              let l = o({ ...e }, n);
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                o.id &&
                null === l &&
                r.logger.log(`Event processor "${o.id}" dropped event`),
                (0, r.isThenable)(l)
                  ? l
                      .then(e =>
                        this._notifyEventProcessors(t, e, n, i + 1).then(a)
                      )
                      .then(null, s)
                  : this._notifyEventProcessors(t, l, n, i + 1)
                      .then(a)
                      .then(null, s);
            }
          });
        }
        _notifyScopeListeners() {
          !this._notifyingListeners &&
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach(t => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
        _applyFingerprint(t) {
          (t.fingerprint = t.fingerprint ? (0, r.arrayify)(t.fingerprint) : []),
            this._fingerprint &&
              (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
        }
      }
      function s() {
        return (0, r.getGlobalSingleton)("globalEventProcessors", () => []);
      }
      function o(t) {
        s().push(t);
      }
      function l() {
        return {
          traceId: (0, r.uuid4)(),
          spanId: (0, r.uuid4)().substring(16),
          sampled: !1,
        };
      }
    },
    110575: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          initAndBind: function () {
            return a;
          },
        });
      var r = n("648238"),
        i = n("876122");
      function a(t, e) {
        !0 === e.debug &&
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            ? r.logger.enable()
            : console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              ));
        let n = (0, i.getCurrentHub)();
        n.getScope().update(e.initialScope);
        let a = new t(e);
        n.bindClient(a);
      }
    },
    741900: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          closeSession: function () {
            return s;
          },
          makeSession: function () {
            return i;
          },
          updateSession: function () {
            return a;
          },
        });
      var r = n("648238");
      function i(t) {
        let e = (0, r.timestampInSeconds)(),
          n = {
            sid: (0, r.uuid4)(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () =>
              (function (t) {
                return (0, r.dropUndefinedKeys)({
                  sid: `${t.sid}`,
                  init: t.init,
                  started: new Date(1e3 * t.started).toISOString(),
                  timestamp: new Date(1e3 * t.timestamp).toISOString(),
                  status: t.status,
                  errors: t.errors,
                  did:
                    "number" == typeof t.did || "string" == typeof t.did
                      ? `${t.did}`
                      : void 0,
                  duration: t.duration,
                  attrs: {
                    release: t.release,
                    environment: t.environment,
                    ip_address: t.ipAddress,
                    user_agent: t.userAgent,
                  },
                });
              })(n),
          };
        return t && a(n, t), n;
      }
      function a(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (e.user &&
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            !t.did &&
              !e.did &&
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || (0, r.timestampInSeconds)()),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, r.uuid4)()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          let e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      function s(t, e) {
        let n = {};
        e
          ? (n = { status: e })
          : "ok" === t.status && (n = { status: "exited" }),
          a(t, n);
      }
    },
    154405: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getDynamicSamplingContextFromClient: function () {
            return a;
          },
        });
      var r = n("648238"),
        i = n("28434");
      function a(t, e, n) {
        let a = e.getOptions(),
          { publicKey: s } = e.getDsn() || {},
          { segment: o } = (n && n.getUser()) || {},
          l = (0, r.dropUndefinedKeys)({
            environment: a.environment || i.DEFAULT_ENVIRONMENT,
            release: a.release,
            user_segment: o,
            public_key: s,
            trace_id: t,
          });
        return e.emit && e.emit("createDsc", l), l;
      }
    },
    750513: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          registerErrorInstrumentation: function () {
            return s;
          },
        });
      var r = n("648238"),
        i = n("147816");
      let a = !1;
      function s() {
        !a &&
          ((a = !0),
          (0, r.addInstrumentationHandler)("error", o),
          (0, r.addInstrumentationHandler)("unhandledrejection", o));
      }
      function o() {
        let t = (0, i.getActiveTransaction)();
        if (t) {
          let e = "internal_error";
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.logger.log(`[Tracing] Transaction: ${e} -> Global error occured`),
            t.setStatus(e);
        }
      }
      o.tag = "sentry_tracingErrorCallback";
    },
    90668: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          addTracingExtensions: function () {
            return f;
          },
          startIdleTransaction: function () {
            return h;
          },
        });
      var r = n("648238"),
        i = n("876122"),
        a = n("633401"),
        s = n("750513"),
        o = n("376097"),
        l = n("912033");
      function u() {
        let t = this.getScope().getSpan();
        return t ? { "sentry-trace": t.toTraceparent() } : {};
      }
      function c(t, e, n) {
        let i;
        return (0, a.hasTracingEnabled)(e)
          ? void 0 !== t.sampled
            ? (t.setMetadata({ sampleRate: Number(t.sampled) }), t)
            : ("function" == typeof e.tracesSampler
                  ? ((i = e.tracesSampler(n)),
                    t.setMetadata({ sampleRate: Number(i) }))
                  : void 0 !== n.parentSampled
                    ? (i = n.parentSampled)
                    : void 0 !== e.tracesSampleRate
                      ? ((i = e.tracesSampleRate),
                        t.setMetadata({ sampleRate: Number(i) }))
                      : ((i = 1), t.setMetadata({ sampleRate: i })),
                !(function (t) {
                  return (0, r.isNaN)(t) ||
                    !("number" == typeof t || "boolean" == typeof t)
                    ? (("undefined" == typeof __SENTRY_DEBUG__ ||
                        __SENTRY_DEBUG__) &&
                        r.logger.warn(
                          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`
                        ),
                      !1)
                    : (!(t < 0) && !(t > 1)) ||
                        (("undefined" == typeof __SENTRY_DEBUG__ ||
                          __SENTRY_DEBUG__) &&
                          r.logger.warn(
                            `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`
                          ),
                        !1);
                })(i))
              ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  r.logger.warn(
                    "[Tracing] Discarding transaction because of invalid sample rate."
                  ),
                (t.sampled = !1),
                t)
              : i
                ? ((t.sampled = Math.random() < i), t.sampled)
                  ? (("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      r.logger.log(
                        `[Tracing] starting ${t.op} transaction - ${t.name}`
                      ),
                    t)
                  : (("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      r.logger.log(
                        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`
                      ),
                    t)
                : (("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    r.logger.log(
                      `[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
                    ),
                  (t.sampled = !1),
                  t)
          : ((t.sampled = !1), t);
      }
      function d(t, e) {
        let n = this.getClient(),
          i = (n && n.getOptions()) || {},
          a = i.instrumenter || "sentry",
          s = t.instrumenter || "sentry";
        a !== s &&
          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.logger
              .error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${a}\` instrumenter.
The transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`),
          (t.sampled = !1));
        let o = new l.Transaction(t, this);
        return (
          (o = c(o, i, {
            parentSampled: t.parentSampled,
            transactionContext: t,
            ...e,
          })).sampled &&
            o.initSpanRecorder(i._experiments && i._experiments.maxSpans),
          n && n.emit && n.emit("startTransaction", o),
          o
        );
      }
      function h(t, e, n, r, i, a, s) {
        let l = t.getClient(),
          u = (l && l.getOptions()) || {},
          d = new o.IdleTransaction(e, t, n, r, s, i);
        return (
          (d = c(d, u, {
            parentSampled: e.parentSampled,
            transactionContext: e,
            ...a,
          })).sampled &&
            d.initSpanRecorder(u._experiments && u._experiments.maxSpans),
          l && l.emit && l.emit("startTransaction", d),
          d
        );
      }
      function f() {
        let t = (0, i.getMainCarrier)();
        t.__SENTRY__ &&
          ((t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}),
          !t.__SENTRY__.extensions.startTransaction &&
            (t.__SENTRY__.extensions.startTransaction = d),
          !t.__SENTRY__.extensions.traceHeaders &&
            (t.__SENTRY__.extensions.traceHeaders = u),
          (0, s.registerErrorInstrumentation)());
      }
    },
    376097: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          IdleTransaction: function () {
            return u;
          },
          TRACING_DEFAULTS: function () {
            return s;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("48950"),
        a = n("912033");
      let s = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
        o = [
          "heartbeatFailed",
          "idleTimeout",
          "documentHidden",
          "finalTimeout",
          "externalFinish",
          "cancelled",
        ];
      class l extends i.SpanRecorder {
        constructor(t, e, n, r) {
          super(r),
            (this._pushActivity = t),
            (this._popActivity = e),
            (this.transactionSpanId = n);
        }
        add(t) {
          t.spanId !== this.transactionSpanId &&
            ((t.finish = e => {
              (t.endTimestamp =
                "number" == typeof e ? e : (0, r.timestampInSeconds)()),
                this._popActivity(t.spanId);
            }),
            void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
            super.add(t);
        }
      }
      class u extends a.Transaction {
        __init() {
          this.activities = {};
        }
        __init2() {
          this._heartbeatCounter = 0;
        }
        __init3() {
          this._finished = !1;
        }
        __init4() {
          this._idleTimeoutCanceledPermanently = !1;
        }
        __init5() {
          this._beforeFinishCallbacks = [];
        }
        __init6() {
          this._finishReason = "externalFinish";
        }
        constructor(
          t,
          e,
          n = s.idleTimeout,
          i = s.finalTimeout,
          a = s.heartbeatInterval,
          o = !1
        ) {
          super(t, e),
            (this._idleHub = e),
            (this._idleTimeout = n),
            (this._finalTimeout = i),
            (this._heartbeatInterval = a),
            (this._onScope = o),
            u.prototype.__init.call(this),
            u.prototype.__init2.call(this),
            u.prototype.__init3.call(this),
            u.prototype.__init4.call(this),
            u.prototype.__init5.call(this),
            u.prototype.__init6.call(this),
            o &&
              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.log(
                  `Setting idle transaction on scope. Span ID: ${this.spanId}`
                ),
              e.configureScope(t => t.setSpan(this))),
            this._restartIdleTimeout(),
            setTimeout(() => {
              !this._finished &&
                (this.setStatus("deadline_exceeded"),
                (this._finishReason = "finalTimeout"),
                this.finish());
            }, this._finalTimeout);
        }
        finish() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, r.timestampInSeconds)();
          if (
            ((this._finished = !0),
            (this.activities = {}),
            "ui.action.click" === this.op &&
              this.setTag("finishReason", this._finishReason),
            this.spanRecorder)
          ) {
            for (let e of (("undefined" == typeof __SENTRY_DEBUG__ ||
              __SENTRY_DEBUG__) &&
              r.logger.log(
                "[Tracing] finishing IdleTransaction",
                new Date(1e3 * t).toISOString(),
                this.op
              ),
            this._beforeFinishCallbacks))
              e(this, t);
            (this.spanRecorder.spans = this.spanRecorder.spans.filter(e => {
              if (e.spanId === this.spanId) return !0;
              !e.endTimestamp &&
                ((e.endTimestamp = t),
                e.setStatus("cancelled"),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  r.logger.log(
                    "[Tracing] cancelling span since transaction ended early",
                    JSON.stringify(e, void 0, 2)
                  ));
              let n = e.startTimestamp < t;
              return (
                !n &&
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                  r.logger.log(
                    "[Tracing] discarding Span since it happened after Transaction was finished",
                    JSON.stringify(e, void 0, 2)
                  ),
                n
              );
            })),
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.log("[Tracing] flushing IdleTransaction");
          } else
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log("[Tracing] No active IdleTransaction");
          if (this._onScope) {
            let t = this._idleHub.getScope();
            t.getTransaction() === this && t.setSpan(void 0);
          }
          return super.finish(t);
        }
        registerBeforeFinishCallback(t) {
          this._beforeFinishCallbacks.push(t);
        }
        initSpanRecorder(t) {
          !this.spanRecorder &&
            ((this.spanRecorder = new l(
              t => {
                !this._finished && this._pushActivity(t);
              },
              t => {
                !this._finished && this._popActivity(t);
              },
              this.spanId,
              t
            )),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log("Starting heartbeat"),
            this._pingHeartbeat()),
            this.spanRecorder.add(this);
        }
        cancelIdleTimeout(t) {
          let { restartOnChildSpanChange: e } =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { restartOnChildSpanChange: !0 };
          (this._idleTimeoutCanceledPermanently = !1 === e),
            this._idleTimeoutID &&
              (clearTimeout(this._idleTimeoutID),
              (this._idleTimeoutID = void 0),
              0 === Object.keys(this.activities).length &&
                this._idleTimeoutCanceledPermanently &&
                ((this._finishReason = "cancelled"), this.finish(t)));
        }
        setFinishReason(t) {
          this._finishReason = t;
        }
        _restartIdleTimeout(t) {
          this.cancelIdleTimeout(),
            (this._idleTimeoutID = setTimeout(() => {
              !this._finished &&
                0 === Object.keys(this.activities).length &&
                ((this._finishReason = "idleTimeout"), this.finish(t));
            }, this._idleTimeout));
        }
        _pushActivity(t) {
          this.cancelIdleTimeout(void 0, {
            restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
          }),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(`[Tracing] pushActivity: ${t}`),
            (this.activities[t] = !0),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(
                "[Tracing] new activities count",
                Object.keys(this.activities).length
              );
        }
        _popActivity(t) {
          if (
            (this.activities[t] &&
              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.log(`[Tracing] popActivity ${t}`),
              delete this.activities[t],
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.log(
                  "[Tracing] new activities count",
                  Object.keys(this.activities).length
                )),
            0 === Object.keys(this.activities).length)
          ) {
            let t = (0, r.timestampInSeconds)();
            this._idleTimeoutCanceledPermanently
              ? ((this._finishReason = "cancelled"), this.finish(t))
              : this._restartIdleTimeout(t + this._idleTimeout / 1e3);
          }
        }
        _beat() {
          if (this._finished) return;
          let t = Object.keys(this.activities).join("");
          t === this._prevHeartbeatString
            ? this._heartbeatCounter++
            : (this._heartbeatCounter = 1),
            (this._prevHeartbeatString = t),
            this._heartbeatCounter >= 3
              ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  r.logger.log(
                    "[Tracing] Transaction finished because of no change for 3 heart beats"
                  ),
                this.setStatus("deadline_exceeded"),
                (this._finishReason = "heartbeatFailed"),
                this.finish())
              : this._pingHeartbeat();
        }
        _pingHeartbeat() {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.logger.log(
              `pinging Heartbeat -> current counter: ${this._heartbeatCounter}`
            ),
            setTimeout(() => {
              this._beat();
            }, this._heartbeatInterval);
        }
      }
    },
    48950: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Span: function () {
            return a;
          },
          SpanRecorder: function () {
            return i;
          },
          spanStatusfromHttpCode: function () {
            return s;
          },
        }),
        n("653041");
      var r = n("648238");
      class i {
        __init() {
          this.spans = [];
        }
        constructor(t = 1e3) {
          i.prototype.__init.call(this), (this._maxlen = t);
        }
        add(t) {
          this.spans.length > this._maxlen
            ? (t.spanRecorder = void 0)
            : this.spans.push(t);
        }
      }
      class a {
        __init2() {
          this.traceId = (0, r.uuid4)();
        }
        __init3() {
          this.spanId = (0, r.uuid4)().substring(16);
        }
        __init4() {
          this.startTimestamp = (0, r.timestampInSeconds)();
        }
        __init5() {
          this.tags = {};
        }
        __init6() {
          this.data = {};
        }
        __init7() {
          this.instrumenter = "sentry";
        }
        constructor(t) {
          if (
            (a.prototype.__init2.call(this),
            a.prototype.__init3.call(this),
            a.prototype.__init4.call(this),
            a.prototype.__init5.call(this),
            a.prototype.__init6.call(this),
            a.prototype.__init7.call(this),
            !t)
          )
            return this;
          t.traceId && (this.traceId = t.traceId),
            t.spanId && (this.spanId = t.spanId),
            t.parentSpanId && (this.parentSpanId = t.parentSpanId),
            "sampled" in t && (this.sampled = t.sampled),
            t.op && (this.op = t.op),
            t.description && (this.description = t.description),
            t.data && (this.data = t.data),
            t.tags && (this.tags = t.tags),
            t.status && (this.status = t.status),
            t.startTimestamp && (this.startTimestamp = t.startTimestamp),
            t.endTimestamp && (this.endTimestamp = t.endTimestamp),
            t.instrumenter && (this.instrumenter = t.instrumenter);
        }
        startChild(t) {
          let e = new a({
            ...t,
            parentSpanId: this.spanId,
            sampled: this.sampled,
            traceId: this.traceId,
          });
          if (
            ((e.spanRecorder = this.spanRecorder),
            e.spanRecorder && e.spanRecorder.add(e),
            (e.transaction = this.transaction),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              e.transaction)
          ) {
            let n = (t && t.op) || "< unknown op >",
              i = e.transaction.name || "< unknown name >",
              a = e.transaction.spanId,
              s = `[Tracing] Starting '${n}' span on transaction '${i}' (${a}).`;
            (e.transaction.metadata.spanMetadata[e.spanId] = { logMessage: s }),
              r.logger.log(s);
          }
          return e;
        }
        setTag(t, e) {
          return (this.tags = { ...this.tags, [t]: e }), this;
        }
        setData(t, e) {
          return (this.data = { ...this.data, [t]: e }), this;
        }
        setStatus(t) {
          return (this.status = t), this;
        }
        setHttpStatus(t) {
          this.setTag("http.status_code", String(t)),
            this.setData("http.response.status_code", t);
          let e = s(t);
          return "unknown_error" !== e && this.setStatus(e), this;
        }
        isSuccess() {
          return "ok" === this.status;
        }
        finish(t) {
          if (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            this.transaction &&
            this.transaction.spanId !== this.spanId
          ) {
            let { logMessage: t } =
              this.transaction.metadata.spanMetadata[this.spanId];
            t && r.logger.log(t.replace("Starting", "Finishing"));
          }
          this.endTimestamp =
            "number" == typeof t ? t : (0, r.timestampInSeconds)();
        }
        toTraceparent() {
          return (0, r.generateSentryTraceHeader)(
            this.traceId,
            this.spanId,
            this.sampled
          );
        }
        toContext() {
          return (0, r.dropUndefinedKeys)({
            data: this.data,
            description: this.description,
            endTimestamp: this.endTimestamp,
            op: this.op,
            parentSpanId: this.parentSpanId,
            sampled: this.sampled,
            spanId: this.spanId,
            startTimestamp: this.startTimestamp,
            status: this.status,
            tags: this.tags,
            traceId: this.traceId,
          });
        }
        updateWithContext(t) {
          return (
            (this.data = t.data || {}),
            (this.description = t.description),
            (this.endTimestamp = t.endTimestamp),
            (this.op = t.op),
            (this.parentSpanId = t.parentSpanId),
            (this.sampled = t.sampled),
            (this.spanId = t.spanId || this.spanId),
            (this.startTimestamp = t.startTimestamp || this.startTimestamp),
            (this.status = t.status),
            (this.tags = t.tags || {}),
            (this.traceId = t.traceId || this.traceId),
            this
          );
        }
        getTraceContext() {
          return (0, r.dropUndefinedKeys)({
            data: Object.keys(this.data).length > 0 ? this.data : void 0,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            trace_id: this.traceId,
          });
        }
        toJSON() {
          return (0, r.dropUndefinedKeys)({
            data: Object.keys(this.data).length > 0 ? this.data : void 0,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            start_timestamp: this.startTimestamp,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this.endTimestamp,
            trace_id: this.traceId,
          });
        }
      }
      function s(t) {
        if (t < 400 && t >= 100) return "ok";
        if (t >= 400 && t < 500)
          switch (t) {
            case 401:
              return "unauthenticated";
            case 403:
              return "permission_denied";
            case 404:
              return "not_found";
            case 409:
              return "already_exists";
            case 413:
              return "failed_precondition";
            case 429:
              return "resource_exhausted";
            default:
              return "invalid_argument";
          }
        if (t >= 500 && t < 600)
          switch (t) {
            case 501:
              return "unimplemented";
            case 503:
              return "unavailable";
            case 504:
              return "deadline_exceeded";
            default:
              return "internal_error";
          }
        return "unknown_error";
      }
    },
    468174: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          trace: function () {
            return s;
          },
        });
      var r = n("648238"),
        i = n("876122"),
        a = n("633401");
      function s(t, e) {
        let n,
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : () => {},
          o = { ...t };
        void 0 !== o.name &&
          void 0 === o.description &&
          (o.description = o.name);
        let l = (0, i.getCurrentHub)(),
          u = l.getScope(),
          c = u.getSpan(),
          d = (function () {
            if ((0, a.hasTracingEnabled)())
              return c ? c.startChild(o) : l.startTransaction(o);
          })();
        function h() {
          d && d.finish(), l.getScope().setSpan(c);
        }
        u.setSpan(d);
        try {
          n = e(d);
        } catch (t) {
          throw (d && d.setStatus("internal_error"), s(t), h(), t);
        }
        return (
          (0, r.isThenable)(n)
            ? Promise.resolve(n).then(
                () => {
                  h();
                },
                t => {
                  d && d.setStatus("internal_error"), s(t), h();
                }
              )
            : h(),
          n
        );
      }
    },
    912033: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Transaction: function () {
            return o;
          },
        });
      var r = n("648238"),
        i = n("876122"),
        a = n("154405"),
        s = n("48950");
      class o extends s.Span {
        __init() {
          this._measurements = {};
        }
        __init2() {
          this._contexts = {};
        }
        __init3() {
          this._frozenDynamicSamplingContext = void 0;
        }
        constructor(t, e) {
          super(t),
            o.prototype.__init.call(this),
            o.prototype.__init2.call(this),
            o.prototype.__init3.call(this),
            (this._hub = e || (0, i.getCurrentHub)()),
            (this._name = t.name || ""),
            (this.metadata = {
              source: "custom",
              ...t.metadata,
              spanMetadata: {},
            }),
            (this._trimEnd = t.trimEnd),
            (this.transaction = this);
          let n = this.metadata.dynamicSamplingContext;
          n && (this._frozenDynamicSamplingContext = { ...n });
        }
        get name() {
          return this._name;
        }
        set name(t) {
          this.setName(t);
        }
        setName(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "custom";
          (this._name = t), (this.metadata.source = e);
        }
        initSpanRecorder() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1e3;
          !this.spanRecorder && (this.spanRecorder = new s.SpanRecorder(t)),
            this.spanRecorder.add(this);
        }
        setContext(t, e) {
          null === e ? delete this._contexts[t] : (this._contexts[t] = e);
        }
        setMeasurement(t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          this._measurements[t] = { value: e, unit: n };
        }
        setMetadata(t) {
          this.metadata = { ...this.metadata, ...t };
        }
        finish(t) {
          if (void 0 !== this.endTimestamp) return;
          !this.name &&
            (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.warn(
                "Transaction has no name, falling back to `<unlabeled transaction>`."
              ),
            (this.name = "<unlabeled transaction>")),
            super.finish(t);
          let e = this._hub.getClient();
          if (
            (e && e.emit && e.emit("finishTransaction", this),
            !0 !== this.sampled)
          ) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(
                "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
              ),
              e && e.recordDroppedEvent("sample_rate", "transaction");
            return;
          }
          let n = this.spanRecorder
            ? this.spanRecorder.spans.filter(t => t !== this && t.endTimestamp)
            : [];
          this._trimEnd &&
            n.length > 0 &&
            (this.endTimestamp = n.reduce((t, e) =>
              t.endTimestamp && e.endTimestamp
                ? t.endTimestamp > e.endTimestamp
                  ? t
                  : e
                : t
            ).endTimestamp);
          let i = this.metadata,
            a = {
              contexts: { ...this._contexts, trace: this.getTraceContext() },
              spans: n,
              start_timestamp: this.startTimestamp,
              tags: this.tags,
              timestamp: this.endTimestamp,
              transaction: this.name,
              type: "transaction",
              sdkProcessingMetadata: {
                ...i,
                dynamicSamplingContext: this.getDynamicSamplingContext(),
              },
              ...(i.source && { transaction_info: { source: i.source } }),
            };
          return (
            Object.keys(this._measurements).length > 0 &&
              (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r.logger.log(
                  "[Measurements] Adding measurements to transaction",
                  JSON.stringify(this._measurements, void 0, 2)
                ),
              (a.measurements = this._measurements)),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.log(
                `[Tracing] Finishing ${this.op} transaction: ${this.name}.`
              ),
            this._hub.captureEvent(a)
          );
        }
        toContext() {
          let t = super.toContext();
          return (0, r.dropUndefinedKeys)({
            ...t,
            name: this.name,
            trimEnd: this._trimEnd,
          });
        }
        updateWithContext(t) {
          return (
            super.updateWithContext(t),
            (this.name = t.name || ""),
            (this._trimEnd = t.trimEnd),
            this
          );
        }
        getDynamicSamplingContext() {
          if (this._frozenDynamicSamplingContext)
            return this._frozenDynamicSamplingContext;
          let t = this._hub || (0, i.getCurrentHub)(),
            e = t.getClient();
          if (!e) return {};
          let n = t.getScope(),
            r = (0, a.getDynamicSamplingContextFromClient)(this.traceId, e, n),
            s = this.metadata.sampleRate;
          void 0 !== s && (r.sample_rate = `${s}`);
          let o = this.metadata.source;
          return (
            o && "url" !== o && (r.transaction = this.name),
            void 0 !== this.sampled && (r.sampled = String(this.sampled)),
            r
          );
        }
        setHub(t) {
          this._hub = t;
        }
      }
    },
    147816: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getActiveTransaction: function () {
            return i;
          },
        });
      var r = n("876122");
      function i(t) {
        return (t || (0, r.getCurrentHub)()).getScope().getTransaction();
      }
    },
    347421: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          createTransport: function () {
            return i;
          },
        }),
        n("653041");
      var r = n("648238");
      function i(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : (0, r.makePromiseBuffer)(t.bufferSize || 30),
          i = {};
        function s(s) {
          let o = [];
          if (
            ((0, r.forEachEnvelopeItem)(s, (e, n) => {
              let s = (0, r.envelopeItemTypeToDataCategory)(n);
              if ((0, r.isRateLimited)(i, s)) {
                let r = a(e, n);
                t.recordDroppedEvent("ratelimit_backoff", s, r);
              } else o.push(e);
            }),
            0 === o.length)
          )
            return (0, r.resolvedSyncPromise)();
          let l = (0, r.createEnvelope)(s[0], o),
            u = e => {
              (0, r.forEachEnvelopeItem)(l, (n, i) => {
                let s = a(n, i);
                t.recordDroppedEvent(
                  e,
                  (0, r.envelopeItemTypeToDataCategory)(i),
                  s
                );
              });
            };
          return n
            .add(() =>
              e({ body: (0, r.serializeEnvelope)(l, t.textEncoder) }).then(
                t => (
                  void 0 !== t.statusCode &&
                    (t.statusCode < 200 || t.statusCode >= 300) &&
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                    r.logger.warn(
                      `Sentry responded with status code ${t.statusCode} to sent event.`
                    ),
                  (i = (0, r.updateRateLimits)(i, t)),
                  t
                ),
                t => {
                  throw (u("network_error"), t);
                }
              )
            )
            .then(
              t => t,
              t => {
                if (t instanceof r.SentryError)
                  return (
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      r.logger.error(
                        "Skipped sending event because buffer is full."
                      ),
                    u("queue_overflow"),
                    (0, r.resolvedSyncPromise)()
                  );
                throw t;
              }
            );
        }
        return (
          (s.__sentry__baseTransport__ = !0),
          { send: s, flush: t => n.drain(t) }
        );
      }
      function a(t, e) {
        if ("event" === e || "transaction" === e)
          return Array.isArray(t) ? t[1] : void 0;
      }
    },
    449701: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          makeMultiplexedTransport: function () {
            return s;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("507506");
      function a(t, e) {
        let n;
        return (
          (0, r.forEachEnvelopeItem)(
            t,
            (t, r) => (
              e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n
            )
          ),
          n
        );
      }
      function s(t, e) {
        return n => {
          let s = t(n),
            o = {};
          function l(e, s) {
            let l = s ? `${e}:${s}` : e;
            if (!o[l]) {
              var u, c;
              let d = (0, r.dsnFromString)(e);
              if (!d) return;
              let h = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(d);
              o[l] = s
                ? ((u = t),
                  (c = s),
                  t => {
                    let e = u(t);
                    return {
                      send: async t => {
                        let n = a(t, [
                          "event",
                          "transaction",
                          "profile",
                          "replay_event",
                        ]);
                        return n && (n.release = c), e.send(t);
                      },
                      flush: t => e.flush(t),
                    };
                  })({ ...n, url: h })
                : t({ ...n, url: h });
            }
            return o[l];
          }
          return {
            send: async function t(t) {
              let n = e({
                envelope: t,
                getEvent: function (e) {
                  return a(t, e && e.length ? e : ["event"]);
                },
              })
                .map(t =>
                  "string" == typeof t ? l(t, void 0) : l(t.dsn, t.release)
                )
                .filter(t => !!t);
              return (
                0 === n.length && n.push(s),
                (await Promise.all(n.map(e => e.send(t))))[0]
              );
            },
            flush: async function t(t) {
              let e = [...Object.keys(o).map(t => o[t]), s];
              return (await Promise.all(e.map(e => e.flush(t)))).every(t => t);
            },
          };
        };
      }
    },
    499833: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          makeOfflineTransport: function () {
            return a;
          },
        });
      var r = n("648238");
      function i(t, e) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          r.logger.info(`[Offline]: ${t}`, e);
      }
      function a(t) {
        return e => {
          let n;
          let a = t(e),
            s = e.createStore ? e.createStore(e) : void 0,
            o = 5e3;
          function l(t) {
            s &&
              (n && clearTimeout(n),
              "number" !=
                typeof (n = setTimeout(async () => {
                  n = void 0;
                  let t = await s.pop();
                  t &&
                    (i("Attempting to send previously queued event"),
                    c(t).catch(t => {
                      i("Failed to retry sending", t);
                    }));
                }, t)) &&
                n.unref &&
                n.unref());
          }
          function u() {
            !n && (l(o), (o = Math.min(2 * o, 36e5)));
          }
          async function c(t) {
            try {
              let e = await a.send(t),
                n = 100;
              if (e) {
                if (e.headers && e.headers["retry-after"])
                  n = (0, r.parseRetryAfterHeader)(e.headers["retry-after"]);
                else if ((e.statusCode || 0) >= 400) return e;
              }
              return l(n), (o = 5e3), e;
            } catch (a) {
              var n, c, d;
              if (
                s &&
                (await ((n = t),
                (c = a),
                (d = o),
                !(0, r.envelopeContainsItemType)(n, [
                  "replay_event",
                  "replay_recording",
                  "client_report",
                ]) &&
                  (!e.shouldStore || e.shouldStore(n, c, d))))
              )
                return (
                  await s.insert(t),
                  u(),
                  i("Error sending. Event queued", a),
                  {}
                );
              throw a;
            }
          }
          return e.flushAtStartup && u(), { send: c, flush: t => a.flush(t) };
        };
      }
    },
    633401: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          hasTracingEnabled: function () {
            return i;
          },
        });
      var r = n("876122");
      function i(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
          return !1;
        let e = (0, r.getCurrentHub)().getClient(),
          n = t || (e && e.getOptions());
        return (
          !!n &&
          (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        );
      }
    },
    392405: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          prepareEvent: function () {
            return s;
          },
        }),
        n("653041");
      var r = n("648238"),
        i = n("28434"),
        a = n("703498");
      function s(t, e, n, s) {
        let { normalizeDepth: l = 3, normalizeMaxBreadth: u = 1e3 } = t,
          c = {
            ...e,
            event_id: e.event_id || n.event_id || (0, r.uuid4)(),
            timestamp: e.timestamp || (0, r.dateTimestampInSeconds)(),
          },
          d = n.integrations || t.integrations.map(t => t.name);
        (function (t, e) {
          let {
            environment: n,
            release: a,
            dist: s,
            maxValueLength: o = 250,
          } = e;
          !("environment" in t) &&
            (t.environment = "environment" in e ? n : i.DEFAULT_ENVIRONMENT),
            void 0 === t.release && void 0 !== a && (t.release = a),
            void 0 === t.dist && void 0 !== s && (t.dist = s),
            t.message && (t.message = (0, r.truncate)(t.message, o));
          let l = t.exception && t.exception.values && t.exception.values[0];
          l && l.value && (l.value = (0, r.truncate)(l.value, o));
          let u = t.request;
          u && u.url && (u.url = (0, r.truncate)(u.url, o));
        })(c, t),
          (function (t, e) {
            e.length > 0 &&
              ((t.sdk = t.sdk || {}),
              (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
          })(c, d),
          void 0 === e.type &&
            (function (t, e) {
              let n;
              let i = r.GLOBAL_OBJ._sentryDebugIds;
              if (!i) return;
              let a = o.get(e);
              a ? (n = a) : ((n = new Map()), o.set(e, n));
              let s = Object.keys(i).reduce((t, r) => {
                let a;
                let s = n.get(r);
                s ? (a = s) : ((a = e(r)), n.set(r, a));
                for (let e = a.length - 1; e >= 0; e--) {
                  let n = a[e];
                  if (n.filename) {
                    t[n.filename] = i[r];
                    break;
                  }
                }
                return t;
              }, {});
              try {
                t.exception.values.forEach(t => {
                  t.stacktrace.frames.forEach(t => {
                    t.filename && (t.debug_id = s[t.filename]);
                  });
                });
              } catch (t) {}
            })(c, t.stackParser);
        let h = s;
        n.captureContext && (h = a.Scope.clone(h).update(n.captureContext));
        let f = (0, r.resolvedSyncPromise)(c);
        if (h) {
          if (h.getAttachments) {
            let t = [...(n.attachments || []), ...h.getAttachments()];
            t.length && (n.attachments = t);
          }
          f = h.applyToEvent(c, n);
        }
        return f.then(t =>
          (t &&
            (function (t) {
              let e = {};
              try {
                t.exception.values.forEach(t => {
                  t.stacktrace.frames.forEach(t => {
                    t.debug_id &&
                      (t.abs_path
                        ? (e[t.abs_path] = t.debug_id)
                        : t.filename && (e[t.filename] = t.debug_id),
                      delete t.debug_id);
                  });
                });
              } catch (t) {}
              if (0 === Object.keys(e).length) return;
              (t.debug_meta = t.debug_meta || {}),
                (t.debug_meta.images = t.debug_meta.images || []);
              let n = t.debug_meta.images;
              Object.keys(e).forEach(t => {
                n.push({ type: "sourcemap", code_file: t, debug_id: e[t] });
              });
            })(t),
          "number" == typeof l && l > 0)
            ? (function (t, e, n) {
                if (!t) return null;
                let i = {
                  ...t,
                  ...(t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(t => ({
                      ...t,
                      ...(t.data && { data: (0, r.normalize)(t.data, e, n) }),
                    })),
                  }),
                  ...(t.user && { user: (0, r.normalize)(t.user, e, n) }),
                  ...(t.contexts && {
                    contexts: (0, r.normalize)(t.contexts, e, n),
                  }),
                  ...(t.extra && { extra: (0, r.normalize)(t.extra, e, n) }),
                };
                return (
                  t.contexts &&
                    t.contexts.trace &&
                    i.contexts &&
                    ((i.contexts.trace = t.contexts.trace),
                    t.contexts.trace.data &&
                      (i.contexts.trace.data = (0, r.normalize)(
                        t.contexts.trace.data,
                        e,
                        n
                      ))),
                  t.spans &&
                    (i.spans = t.spans.map(
                      t => (
                        t.data && (t.data = (0, r.normalize)(t.data, e, n)), t
                      )
                    )),
                  i
                );
              })(t, l, u)
            : t
        );
      }
      let o = new WeakMap();
    },
    139782: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          SDK_VERSION: function () {
            return r;
          },
        });
      let r = "7.60.1";
    },
    438142: function (t, e, n) {
      "use strict";
      let r, i, a, s, o;
      n.r(e),
        n.d(e, {
          Replay: function () {
            return eQ;
          },
        }),
        n("268111"),
        n("941497"),
        n("744285"),
        n("492257"),
        n("873817"),
        n("653041"),
        n("733860"),
        n("216116"),
        n("78328"),
        n("815648");
      var l,
        u,
        c,
        d,
        h,
        f,
        p,
        _,
        g,
        m,
        y,
        v,
        E,
        b,
        S,
        w,
        T = n("91320"),
        k = n("648238"),
        R = n("444675");
      let x = k.GLOBAL_OBJ,
        D = "sentryReplaySession",
        N = "Unable to send Replay";
      ((g = l || (l = {}))[(g.Document = 0)] = "Document"),
        (g[(g.DocumentType = 1)] = "DocumentType"),
        (g[(g.Element = 2)] = "Element"),
        (g[(g.Text = 3)] = "Text"),
        (g[(g.CDATA = 4)] = "CDATA"),
        (g[(g.Comment = 5)] = "Comment");
      function I(t) {
        let e = null == t ? void 0 : t.host;
        return !!(e && e.shadowRoot && e.shadowRoot === t);
      }
      function C(t) {
        let { maskInputOptions: e, tagName: n, type: r } = t;
        "option" === n.toLowerCase() && (n = "select");
        let i = "string" == typeof r ? r.toLowerCase() : void 0;
        return (
          e[n.toLowerCase()] ||
          (i && e[i]) ||
          "password" === i ||
          ("input" === n && !r && e.text)
        );
      }
      function O(t) {
        let {
            input: e,
            maskInputSelector: n,
            unmaskInputSelector: r,
            maskInputOptions: i,
            tagName: a,
            type: s,
            value: o,
            maskInputFn: l,
          } = t,
          u = o || "";
        return r && e.matches(r)
          ? u
          : (e.hasAttribute("data-rr-is-password") && (s = "password"),
            (C({ maskInputOptions: i, tagName: a, type: s }) ||
              (n && e.matches(n))) &&
              (u = l ? l(u) : "*".repeat(u.length)),
            u);
      }
      let A = "__rrweb_original__";
      function U(t) {
        let e = t.type;
        return t.hasAttribute("data-rr-is-password")
          ? "password"
          : e
            ? e.toLowerCase()
            : null;
      }
      function B(t, e, n) {
        return ("string" == typeof n && n.toLowerCase(),
        "INPUT" === e && ("radio" === n || "checkbox" === n))
          ? t.getAttribute("value") || ""
          : t.value;
      }
      let L = 1,
        M = RegExp("[^a-z0-9-_:]");
      function P(t) {
        return t ? t.replace(/[\S]/g, "*") : "";
      }
      function G(t) {
        try {
          let e = t.rules || t.cssRules;
          return e ? Array.from(e).map(Y).join("") : null;
        } catch (t) {
          return null;
        }
      }
      function Y(t) {
        let e = t.cssText;
        if (
          (function (t) {
            return "styleSheet" in t;
          })(t)
        )
          try {
            e = G(t.styleSheet) || e;
          } catch (t) {}
        return F(e);
      }
      function F(t) {
        return t.indexOf(":") > -1
          ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
          : t;
      }
      let z = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        H = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
        $ = /^(data:)([^,]*),(.*)/i;
      function W(t, e) {
        return (t || "").replace(z, (t, n, r, i, a, s) => {
          let o = r || a || s,
            l = n || i || "";
          if (!o) return t;
          if (!H.test(o) || $.test(o)) return `url(${l}${o}${l})`;
          if ("/" === o[0]) {
            var u;
            let t;
            return `url(${l}${((t = ""), (t = (t = (u = e).indexOf("//") > -1 ? u.split("/").slice(0, 3).join("/") : u.split("/")[0]).split("?")[0]) + o)}${l})`;
          }
          let c = e.split("/"),
            d = o.split("/");
          for (let t of (c.pop(), d)) {
            if ("." !== t) ".." === t ? c.pop() : c.push(t);
          }
          return `url(${l}${c.join("/")}${l})`;
        });
      }
      let j = /^[^ \t\n\r\u000c]+/,
        q = /^[, \t\n\r\u000c]+/;
      function Z(t, e) {
        if (!e || "" === e.trim()) return e;
        let n = t.createElement("a");
        return (n.href = e), n.href;
      }
      function V() {
        let t = document.createElement("a");
        return (t.href = ""), t.href;
      }
      function K(t, e, n, r, i, a, s, o) {
        if (!i) return i;
        let l = r.toLowerCase(),
          u = n.toLowerCase();
        if ("src" === l || "href" === l) return Z(t, i);
        if ("xlink:href" === l && "#" !== i[0]) return Z(t, i);
        if ("background" === l && ("table" === u || "td" === u || "th" === u))
          return Z(t, i);
        else if ("srcset" === l)
          return (function (t, e) {
            if ("" === e.trim()) return e;
            let n = 0;
            function r(t) {
              let r;
              let i = t.exec(e.substring(n));
              return i ? ((r = i[0]), (n += r.length), r) : "";
            }
            let i = [];
            for (; r(q), !(n >= e.length); ) {
              let a = r(j);
              if ("," === a.slice(-1))
                (a = Z(t, a.substring(0, a.length - 1))), i.push(a);
              else {
                let r = "";
                a = Z(t, a);
                let s = !1;
                for (;;) {
                  let t = e.charAt(n);
                  if ("" === t) {
                    i.push((a + r).trim());
                    break;
                  }
                  if (s) ")" === t && (s = !1);
                  else {
                    if ("," === t) {
                      (n += 1), i.push((a + r).trim());
                      break;
                    }
                    "(" === t && (s = !0);
                  }
                  (r += t), (n += 1);
                }
              }
            }
            return i.join(", ");
          })(t, i);
        else if ("style" === l) return W(i, V());
        else if ("object" === u && "data" === l) return Z(t, i);
        else if (
          a &&
          (function (t, e, n, r) {
            return (
              !(r && t.matches(r)) &&
              (["placeholder", "title", "aria-label"].indexOf(e) > -1 ||
                ("input" === n &&
                  "value" === e &&
                  t.hasAttribute("type") &&
                  ["submit", "button"].indexOf(
                    t.getAttribute("type").toLowerCase()
                  ) > -1))
            );
          })(e, l, u, s)
        )
          return o ? o(i) : P(i);
        return i;
      }
      function J(t, e, n, r, i) {
        if (!t) return !1;
        if (t.nodeType !== t.ELEMENT_NODE) return J(t.parentNode, e, n, r, i);
        if (r && (t.matches(r) || t.closest(r))) return !1;
        if (i) return !0;
        if ("string" == typeof e) {
          if (t.classList.contains(e)) return !0;
        } else
          for (let n = 0; n < t.classList.length; n++) {
            let r = t.classList[n];
            if (e.test(r)) return !0;
          }
        return !!(n && t.matches(n)) || J(t.parentNode, e, n, r, i);
      }
      function X(t) {
        return null == t ? "" : t.toLowerCase();
      }
      function Q(t, e) {
        let n;
        let {
            doc: a,
            map: s,
            blockClass: o,
            blockSelector: u,
            unblockSelector: c,
            maskTextClass: d,
            maskTextSelector: h,
            unmaskTextSelector: f,
            skipChild: p = !1,
            inlineStylesheet: _ = !0,
            maskInputSelector: g,
            unmaskInputSelector: m,
            maskAllText: y,
            maskInputOptions: v = {},
            maskTextFn: E,
            maskInputFn: b,
            slimDOMOptions: S,
            dataURLOptions: w = {},
            inlineImages: T = !1,
            recordCanvas: k = !1,
            onSerialize: R,
            onIframeLoad: x,
            iframeLoadTimeout: D = 5e3,
            keepIframeSrcFn: N = () => !1,
          } = e,
          { preserveWhiteSpace: C = !0 } = e,
          Y = (function (t, e) {
            var n, a, s;
            let o;
            let {
              doc: u,
              blockClass: c,
              blockSelector: d,
              unblockSelector: h,
              maskTextClass: f,
              maskTextSelector: p,
              unmaskTextSelector: _,
              inlineStylesheet: g,
              maskInputSelector: m,
              unmaskInputSelector: y,
              maskAllText: v,
              maskInputOptions: E = {},
              maskTextFn: b,
              maskInputFn: S,
              dataURLOptions: w = {},
              inlineImages: T,
              recordCanvas: k,
              keepIframeSrcFn: R,
            } = e;
            if (u.__sn) {
              let t = u.__sn.id;
              o = 1 === t ? void 0 : t;
            }
            switch (t.nodeType) {
              case t.DOCUMENT_NODE:
                if ("CSS1Compat" !== t.compatMode)
                  return {
                    type: l.Document,
                    childNodes: [],
                    compatMode: t.compatMode,
                    rootId: o,
                  };
                return { type: l.Document, childNodes: [], rootId: o };
              case t.DOCUMENT_TYPE_NODE:
                return {
                  type: l.DocumentType,
                  name: t.name,
                  publicId: t.publicId,
                  systemId: t.systemId,
                  rootId: o,
                };
              case t.ELEMENT_NODE:
                let x = (function (t, e, n, r) {
                    if (r && t.matches(r)) return !1;
                    if ("string" == typeof e) {
                      if (t.classList.contains(e)) return !0;
                    } else
                      for (let n = 0; n < t.classList.length; n++) {
                        let r = t.classList[n];
                        if (e.test(r)) return !0;
                      }
                    return !!n && t.matches(n);
                  })(t, c, d, h),
                  D = (function (t) {
                    if (t instanceof HTMLFormElement) return "form";
                    let e = t.tagName.toLowerCase().trim();
                    return M.test(e) ? "div" : e;
                  })(t),
                  N = {};
                for (let { name: e, value: n } of Array.from(t.attributes))
                  !(function (t, e, n) {
                    return ("video" === t || "audio" === t) && "autoplay" === e;
                  })(D, e) && (N[e] = K(u, t, D, e, n, v, _, b));
                if ("link" === D && g) {
                  let e = Array.from(u.styleSheets).find(
                      e => e.href === t.href
                    ),
                    n = null;
                  e && (n = G(e)),
                    n &&
                      (delete N.rel,
                      delete N.href,
                      (N._cssText = W(n, e.href)));
                }
                if (
                  "style" === D &&
                  t.sheet &&
                  !(t.innerText || t.textContent || "").trim().length
                ) {
                  let e = G(t.sheet);
                  e && (N._cssText = W(e, V()));
                }
                if (
                  "input" === D ||
                  "textarea" === D ||
                  "select" === D ||
                  "option" === D
                ) {
                  let e = U(t),
                    n = B(t, D.toUpperCase(), e),
                    r = t.checked;
                  "submit" !== e &&
                    "button" !== e &&
                    n &&
                    (N.value = O({
                      input: t,
                      type: e,
                      tagName: D,
                      value: n,
                      maskInputSelector: m,
                      unmaskInputSelector: y,
                      maskInputOptions: E,
                      maskInputFn: S,
                    })),
                    r && (N.checked = r);
                }
                if (
                  ("option" === D &&
                    (t.selected && !E.select
                      ? (N.selected = !0)
                      : delete N.selected),
                  "canvas" === D && k)
                ) {
                  if ("2d" === t.__context)
                    !(function (t) {
                      let e = t.getContext("2d");
                      if (!e) return !0;
                      for (let n = 0; n < t.width; n += 50)
                        for (let r = 0; r < t.height; r += 50) {
                          let i = e.getImageData,
                            a = A in i ? i[A] : i;
                          if (
                            new Uint32Array(
                              a.call(
                                e,
                                n,
                                r,
                                Math.min(50, t.width - n),
                                Math.min(50, t.height - r)
                              ).data.buffer
                            ).some(t => 0 !== t)
                          )
                            return !1;
                        }
                      return !0;
                    })(t) && (N.rr_dataURL = t.toDataURL(w.type, w.quality));
                  else if (!("__context" in t)) {
                    let e = t.toDataURL(w.type, w.quality),
                      n = document.createElement("canvas");
                    (n.width = t.width),
                      (n.height = t.height),
                      e !== n.toDataURL(w.type, w.quality) &&
                        (N.rr_dataURL = e);
                  }
                }
                if ("img" === D && T) {
                  !r && (i = (r = u.createElement("canvas")).getContext("2d"));
                  let e = t.crossOrigin;
                  t.crossOrigin = "anonymous";
                  let n = () => {
                    try {
                      (r.width = t.naturalWidth),
                        (r.height = t.naturalHeight),
                        i.drawImage(t, 0, 0),
                        (N.rr_dataURL = r.toDataURL(w.type, w.quality));
                    } catch (e) {
                      console.warn(
                        `Cannot inline img src=${t.currentSrc}! Error: ${e}`
                      );
                    }
                    e ? (N.crossOrigin = e) : delete N.crossOrigin;
                  };
                  t.complete && 0 !== t.naturalWidth ? n() : (t.onload = n);
                }
                if (
                  (("audio" === D || "video" === D) &&
                    ((N.rr_mediaState = t.paused ? "paused" : "played"),
                    (N.rr_mediaCurrentTime = t.currentTime)),
                  t.scrollLeft && (N.rr_scrollLeft = t.scrollLeft),
                  t.scrollTop && (N.rr_scrollTop = t.scrollTop),
                  x)
                ) {
                  let { width: e, height: n } = t.getBoundingClientRect();
                  N = {
                    class: N.class,
                    rr_width: `${e}px`,
                    rr_height: `${n}px`,
                  };
                }
                return (
                  "iframe" === D &&
                    !R(N.src) &&
                    (!t.contentDocument && (N.rr_src = N.src), delete N.src),
                  {
                    type: l.Element,
                    tagName: D,
                    attributes: N,
                    childNodes: [],
                    isSVG:
                      !!("svg" === (a = t).tagName || a.ownerSVGElement) ||
                      void 0,
                    needBlock: x,
                    rootId: o,
                  }
                );
              case t.TEXT_NODE:
                let I = t.parentNode && t.parentNode.tagName,
                  C = t.textContent,
                  L = "STYLE" === I || void 0,
                  Y = "SCRIPT" === I || void 0;
                if (L && C) {
                  try {
                    if (t.nextSibling || t.previousSibling);
                    else if (
                      null === (n = t.parentNode.sheet) || void 0 === n
                        ? void 0
                        : n.cssRules
                    ) {
                      C = (s = t.parentNode.sheet).cssRules
                        ? Array.from(s.cssRules)
                            .map(t => (t.cssText ? F(t.cssText) : ""))
                            .join("")
                        : "";
                    }
                  } catch (e) {
                    console.warn(
                      `Cannot get CSS styles from text's parentNode. Error: ${e}`,
                      t
                    );
                  }
                  C = W(C, V());
                }
                return (
                  Y && (C = "SCRIPT_PLACEHOLDER"),
                  "TEXTAREA" === I && C
                    ? (C = "")
                    : "OPTION" === I && C
                      ? (C = O({
                          input: t.parentNode,
                          type: null,
                          tagName: I,
                          value: C,
                          maskInputSelector: m,
                          unmaskInputSelector: y,
                          maskInputOptions: E,
                          maskInputFn: S,
                        }))
                      : !L &&
                        !Y &&
                        J(t, f, p, _, v) &&
                        C &&
                        (C = b ? b(C) : P(C)),
                  { type: l.Text, textContent: C || "", isStyle: L, rootId: o }
                );
              case t.CDATA_SECTION_NODE:
                return { type: l.CDATA, textContent: "", rootId: o };
              case t.COMMENT_NODE:
                return {
                  type: l.Comment,
                  textContent: t.textContent || "",
                  rootId: o,
                };
              default:
                return !1;
            }
          })(t, {
            doc: a,
            blockClass: o,
            blockSelector: u,
            unblockSelector: c,
            maskTextClass: d,
            maskTextSelector: h,
            unmaskTextSelector: f,
            inlineStylesheet: _,
            maskInputSelector: g,
            unmaskInputSelector: m,
            maskAllText: y,
            maskInputOptions: v,
            maskTextFn: E,
            maskInputFn: b,
            dataURLOptions: w,
            inlineImages: T,
            recordCanvas: k,
            keepIframeSrcFn: N,
          });
        if (!Y) return console.warn(t, "not serialized"), null;
        n =
          "__sn" in t
            ? t.__sn.id
            : !(function (t, e) {
                  if (e.comment && t.type === l.Comment) return !0;
                  if (t.type === l.Element) {
                    if (
                      e.script &&
                      ("script" === t.tagName ||
                        ("link" === t.tagName &&
                          ("preload" === t.attributes.rel ||
                            "modulepreload" === t.attributes.rel) &&
                          "script" === t.attributes.as) ||
                        ("link" === t.tagName &&
                          "prefetch" === t.attributes.rel &&
                          "string" == typeof t.attributes.href &&
                          t.attributes.href.endsWith(".js")))
                    )
                      return !0;
                    if (
                      e.headFavicon &&
                      (("link" === t.tagName &&
                        "shortcut icon" === t.attributes.rel) ||
                        ("meta" === t.tagName &&
                          (X(t.attributes.name).match(
                            /^msapplication-tile(image|color)$/
                          ) ||
                            "application-name" === X(t.attributes.name) ||
                            "icon" === X(t.attributes.rel) ||
                            "apple-touch-icon" === X(t.attributes.rel) ||
                            "shortcut icon" === X(t.attributes.rel))))
                    )
                      return !0;
                    else if ("meta" === t.tagName) {
                      if (
                        e.headMetaDescKeywords &&
                        X(t.attributes.name).match(/^description|keywords$/)
                      )
                        return !0;
                      if (
                        e.headMetaSocial &&
                        (X(t.attributes.property).match(/^(og|twitter|fb):/) ||
                          X(t.attributes.name).match(/^(og|twitter):/) ||
                          "pinterest" === X(t.attributes.name))
                      )
                        return !0;
                      else if (
                        e.headMetaRobots &&
                        ("robots" === X(t.attributes.name) ||
                          "googlebot" === X(t.attributes.name) ||
                          "bingbot" === X(t.attributes.name))
                      )
                        return !0;
                      else if (
                        e.headMetaHttpEquiv &&
                        void 0 !== t.attributes["http-equiv"]
                      )
                        return !0;
                      else if (
                        e.headMetaAuthorship &&
                        ("author" === X(t.attributes.name) ||
                          "generator" === X(t.attributes.name) ||
                          "framework" === X(t.attributes.name) ||
                          "publisher" === X(t.attributes.name) ||
                          "progid" === X(t.attributes.name) ||
                          X(t.attributes.property).match(/^article:/) ||
                          X(t.attributes.property).match(/^product:/))
                      )
                        return !0;
                      else if (
                        e.headMetaVerification &&
                        ("google-site-verification" === X(t.attributes.name) ||
                          "yandex-verification" === X(t.attributes.name) ||
                          "csrf-token" === X(t.attributes.name) ||
                          "p:domain_verify" === X(t.attributes.name) ||
                          "verify-v1" === X(t.attributes.name) ||
                          "verification" === X(t.attributes.name) ||
                          "shopify-checkout-api-token" === X(t.attributes.name))
                      )
                        return !0;
                    }
                  }
                  return !1;
                })(Y, S) &&
                (C ||
                  Y.type !== l.Text ||
                  Y.isStyle ||
                  Y.textContent.replace(/^\s+|\s+$/gm, "").length)
              ? L++
              : -2;
        let z = Object.assign(Y, { id: n });
        if (((t.__sn = z), -2 === n)) return null;
        (s[n] = t), R && R(t);
        let H = !p;
        if (
          (z.type === l.Element &&
            ((H = H && !z.needBlock),
            delete z.needBlock,
            t.shadowRoot && (z.isShadowHost = !0)),
          (z.type === l.Document || z.type === l.Element) && H)
        ) {
          var $;
          S.headWhitespace &&
            Y.type === l.Element &&
            "head" === Y.tagName &&
            (C = !1);
          let e = {
            doc: a,
            map: s,
            blockClass: o,
            blockSelector: u,
            unblockSelector: c,
            maskTextClass: d,
            maskTextSelector: h,
            unmaskTextSelector: f,
            skipChild: p,
            inlineStylesheet: _,
            maskInputSelector: g,
            unmaskInputSelector: m,
            maskAllText: y,
            maskInputOptions: v,
            maskTextFn: E,
            maskInputFn: b,
            slimDOMOptions: S,
            dataURLOptions: w,
            inlineImages: T,
            recordCanvas: k,
            preserveWhiteSpace: C,
            onSerialize: R,
            onIframeLoad: x,
            iframeLoadTimeout: D,
            keepIframeSrcFn: N,
          };
          for (let n of Array.from(t.childNodes)) {
            let t = Q(n, e);
            t && z.childNodes.push(t);
          }
          if (($ = t).nodeType === $.ELEMENT_NODE && t.shadowRoot)
            for (let n of Array.from(t.shadowRoot.childNodes)) {
              let t = Q(n, e);
              t && ((t.isShadow = !0), z.childNodes.push(t));
            }
        }
        return (
          t.parentNode && I(t.parentNode) && (z.isShadow = !0),
          z.type === l.Element &&
            "iframe" === z.tagName &&
            !(function (t, e, n) {
              let r;
              let i = t.contentWindow;
              if (!i) return;
              let a = !1;
              try {
                r = i.document.readyState;
              } catch (t) {
                return;
              }
              if ("complete" !== r) {
                let r = setTimeout(() => {
                  !a && (e(), (a = !0));
                }, n);
                t.addEventListener("load", () => {
                  clearTimeout(r), (a = !0), e();
                });
                return;
              }
              let s = "about:blank";
              if (i.location.href !== s || t.src === s || "" === t.src) {
                setTimeout(e, 0);
                return;
              }
              t.addEventListener("load", e);
            })(
              t,
              () => {
                let e = t.contentDocument;
                if (e && x) {
                  let n = Q(e, {
                    doc: e,
                    map: s,
                    blockClass: o,
                    blockSelector: u,
                    unblockSelector: c,
                    maskTextClass: d,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    skipChild: !1,
                    inlineStylesheet: _,
                    maskInputSelector: g,
                    unmaskInputSelector: m,
                    maskAllText: y,
                    maskInputOptions: v,
                    maskTextFn: E,
                    maskInputFn: b,
                    slimDOMOptions: S,
                    dataURLOptions: w,
                    inlineImages: T,
                    recordCanvas: k,
                    preserveWhiteSpace: C,
                    onSerialize: R,
                    onIframeLoad: x,
                    iframeLoadTimeout: D,
                    keepIframeSrcFn: N,
                  });
                  n && x(t, n);
                }
              },
              D
            ),
          z
        );
      }
      function tt(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : document,
          r = { capture: !0, passive: !0 };
        return (
          n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
        );
      }
      ((m = u || (u = {}))[(m.DomContentLoaded = 0)] = "DomContentLoaded"),
        (m[(m.Load = 1)] = "Load"),
        (m[(m.FullSnapshot = 2)] = "FullSnapshot"),
        (m[(m.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
        (m[(m.Meta = 4)] = "Meta"),
        (m[(m.Custom = 5)] = "Custom"),
        (m[(m.Plugin = 6)] = "Plugin"),
        ((y = c || (c = {}))[(y.Mutation = 0)] = "Mutation"),
        (y[(y.MouseMove = 1)] = "MouseMove"),
        (y[(y.MouseInteraction = 2)] = "MouseInteraction"),
        (y[(y.Scroll = 3)] = "Scroll"),
        (y[(y.ViewportResize = 4)] = "ViewportResize"),
        (y[(y.Input = 5)] = "Input"),
        (y[(y.TouchMove = 6)] = "TouchMove"),
        (y[(y.MediaInteraction = 7)] = "MediaInteraction"),
        (y[(y.StyleSheetRule = 8)] = "StyleSheetRule"),
        (y[(y.CanvasMutation = 9)] = "CanvasMutation"),
        (y[(y.Font = 10)] = "Font"),
        (y[(y.Log = 11)] = "Log"),
        (y[(y.Drag = 12)] = "Drag"),
        (y[(y.StyleDeclaration = 13)] = "StyleDeclaration"),
        ((v = d || (d = {}))[(v.MouseUp = 0)] = "MouseUp"),
        (v[(v.MouseDown = 1)] = "MouseDown"),
        (v[(v.Click = 2)] = "Click"),
        (v[(v.ContextMenu = 3)] = "ContextMenu"),
        (v[(v.DblClick = 4)] = "DblClick"),
        (v[(v.Focus = 5)] = "Focus"),
        (v[(v.Blur = 6)] = "Blur"),
        (v[(v.TouchStart = 7)] = "TouchStart"),
        (v[(v.TouchMove_Departed = 8)] = "TouchMove_Departed"),
        (v[(v.TouchEnd = 9)] = "TouchEnd"),
        (v[(v.TouchCancel = 10)] = "TouchCancel"),
        ((E = h || (h = {}))[(E["2D"] = 0)] = "2D"),
        (E[(E.WebGL = 1)] = "WebGL"),
        (E[(E.WebGL2 = 2)] = "WebGL2"),
        ((b = f || (f = {}))[(b.Play = 0)] = "Play"),
        (b[(b.Pause = 1)] = "Pause"),
        (b[(b.Seeked = 2)] = "Seeked"),
        (b[(b.VolumeChange = 3)] = "VolumeChange"),
        ((S = p || (p = {})).Start = "start"),
        (S.Pause = "pause"),
        (S.Resume = "resume"),
        (S.Resize = "resize"),
        (S.Finish = "finish"),
        (S.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
        (S.LoadStylesheetStart = "load-stylesheet-start"),
        (S.LoadStylesheetEnd = "load-stylesheet-end"),
        (S.SkipStart = "skip-start"),
        (S.SkipEnd = "skip-end"),
        (S.MouseInteraction = "mouse-interaction"),
        (S.EventCast = "event-cast"),
        (S.CustomEvent = "custom-event"),
        (S.Flush = "flush"),
        (S.StateChange = "state-change"),
        (S.PlayBack = "play-back");
      let te =
          "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        tn = {
          map: {},
          getId: () => (console.error(te), -1),
          getNode: () => (console.error(te), null),
          removeNodeFromMap() {
            console.error(te);
          },
          has: () => (console.error(te), !1),
          reset() {
            console.error(te);
          },
        };
      function tr(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = null,
          i = 0;
        return function (a) {
          let s = Date.now();
          !i && !1 === n.leading && (i = s);
          let o = e - (s - i),
            l = this,
            u = arguments;
          o <= 0 || o > e
            ? (r && (clearTimeout(r), (r = null)), (i = s), t.apply(l, u))
            : !r &&
              !1 !== n.trailing &&
              (r = setTimeout(() => {
                (i = !1 === n.leading ? 0 : Date.now()),
                  (r = null),
                  t.apply(l, u);
              }, o));
        };
      }
      function ti(t, e, n, r) {
        let i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : window,
          a = i.Object.getOwnPropertyDescriptor(t, e);
        return (
          i.Object.defineProperty(
            t,
            e,
            r
              ? n
              : {
                  set(t) {
                    setTimeout(() => {
                      n.set.call(this, t);
                    }, 0),
                      a && a.set && a.set.call(this, t);
                  },
                }
          ),
          () => ti(t, e, a || {}, !0)
        );
      }
      function ta(t, e, n) {
        try {
          if (!(e in t)) return () => {};
          let r = t[e],
            i = n(r);
          return (
            "function" == typeof i &&
              ((i.prototype = i.prototype || {}),
              Object.defineProperties(i, {
                __rrweb_original__: { enumerable: !1, value: r },
              })),
            (t[e] = i),
            () => {
              t[e] = r;
            }
          );
        } catch (t) {
          return () => {};
        }
      }
      function ts() {
        return (
          window.innerHeight ||
          (document.documentElement && document.documentElement.clientHeight) ||
          (document.body && document.body.clientHeight)
        );
      }
      function to() {
        return (
          window.innerWidth ||
          (document.documentElement && document.documentElement.clientWidth) ||
          (document.body && document.body.clientWidth)
        );
      }
      function tl(t, e, n, r) {
        if (!t) return !1;
        if (t.nodeType === t.ELEMENT_NODE) {
          let i = !1,
            a = r && t.matches(r);
          return (
            "string" == typeof e
              ? (i =
                  void 0 !== t.closest
                    ? !a && null !== t.closest("." + e)
                    : !a && t.classList.contains(e))
              : a ||
                t.classList.forEach(t => {
                  e.test(t) && (i = !0);
                }),
            !i && n && (i = t.matches(n)),
            (!a && i) || tl(t.parentNode, e, n, r)
          );
        }
        return t.nodeType, t.TEXT_NODE, tl(t.parentNode, e, n, r);
      }
      function tu(t) {
        return "__sn" in t && -2 === t.__sn.id;
      }
      "undefined" != typeof window &&
        window.Proxy &&
        window.Reflect &&
        (tn = new Proxy(tn, {
          get: (t, e, n) => (
            "map" === e && console.error(te), Reflect.get(t, e, n)
          ),
        }));
      function tc(t) {
        return !!t.changedTouches;
      }
      function td(t) {
        return (
          "__sn" in t &&
          t.__sn.type === l.Element &&
          "iframe" === t.__sn.tagName
        );
      }
      function th(t) {
        return !!(null == t ? void 0 : t.shadowRoot);
      }
      function tf(t) {
        return "__ln" in t;
      }
      class tp {
        constructor() {
          (this.length = 0), (this.head = null);
        }
        get(t) {
          if (t >= this.length) throw Error("Position outside of list range");
          let e = this.head;
          for (let n = 0; n < t; n++) e = (null == e ? void 0 : e.next) || null;
          return e;
        }
        addNode(t) {
          let e = { value: t, previous: null, next: null };
          if (
            ((t.__ln = e), t.previousSibling && "__ln" in t.previousSibling)
          ) {
            let n = t.previousSibling.__ln.next;
            (e.next = n),
              (e.previous = t.previousSibling.__ln),
              (t.previousSibling.__ln.next = e),
              n && (n.previous = e);
          } else if (
            t.nextSibling &&
            "__ln" in t.nextSibling &&
            t.nextSibling.__ln.previous
          ) {
            let n = t.nextSibling.__ln.previous;
            (e.previous = n),
              (e.next = t.nextSibling.__ln),
              (t.nextSibling.__ln.previous = e),
              n && (n.next = e);
          } else
            this.head && (this.head.previous = e),
              (e.next = this.head),
              (this.head = e);
          this.length++;
        }
        removeNode(t) {
          let e = t.__ln;
          this.head &&
            (e.previous
              ? ((e.previous.next = e.next),
                e.next && (e.next.previous = e.previous))
              : ((this.head = e.next),
                this.head && (this.head.previous = null)),
            t.__ln && delete t.__ln,
            this.length--);
        }
      }
      let t_ = (t, e) => `${t}@${e}`;
      function tg(t) {
        return "__sn" in t;
      }
      class tm {
        constructor() {
          (this.frozen = !1),
            (this.locked = !1),
            (this.texts = []),
            (this.attributes = []),
            (this.removes = []),
            (this.mapRemoves = []),
            (this.movedMap = {}),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.processMutations = t => {
              t.forEach(this.processMutation), this.emit();
            }),
            (this.emit = () => {
              if (this.frozen || this.locked) return;
              let t = [],
                e = new tp(),
                n = t => {
                  let e = t,
                    n = -2;
                  for (; -2 === n; )
                    n = (e = e && e.nextSibling) && this.mirror.getId(e);
                  return n;
                },
                r = r => {
                  var i, a, s, o, l;
                  let u = r.getRootNode
                      ? null === (i = r.getRootNode()) || void 0 === i
                        ? void 0
                        : i.host
                      : null,
                    c = u;
                  for (
                    ;
                    null ===
                      (s =
                        null === (a = null == c ? void 0 : c.getRootNode) ||
                        void 0 === a
                          ? void 0
                          : a.call(c)) || void 0 === s
                      ? void 0
                      : s.host;

                  )
                    c =
                      (null ===
                        (l =
                          null === (o = null == c ? void 0 : c.getRootNode) ||
                          void 0 === o
                            ? void 0
                            : o.call(c)) || void 0 === l
                        ? void 0
                        : l.host) || null;
                  let d =
                    !this.doc.contains(r) && (!c || !this.doc.contains(c));
                  if (!r.parentNode || d) return;
                  let h = I(r.parentNode)
                      ? this.mirror.getId(u)
                      : this.mirror.getId(r.parentNode),
                    f = n(r);
                  if (-1 === h || -1 === f) return e.addNode(r);
                  let p = Q(r, {
                    doc: this.doc,
                    map: this.mirror.map,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    unblockSelector: this.unblockSelector,
                    maskTextClass: this.maskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    unmaskTextSelector: this.unmaskTextSelector,
                    maskInputSelector: this.maskInputSelector,
                    unmaskInputSelector: this.unmaskInputSelector,
                    skipChild: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskAllText: this.maskAllText,
                    maskInputOptions: this.maskInputOptions,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: t => {
                      td(t) && this.iframeManager.addIframe(t),
                        th(r) &&
                          this.shadowDomManager.addShadowRoot(
                            r.shadowRoot,
                            document
                          );
                    },
                    onIframeLoad: (t, e) => {
                      this.iframeManager.attachIframe(t, e),
                        this.shadowDomManager.observeAttachShadow(t);
                    },
                  });
                  p && t.push({ parentId: h, nextId: f, node: p });
                };
              for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
              for (let t of this.movedSet)
                (!tv(this.removes, t, this.mirror) ||
                  this.movedSet.has(t.parentNode)) &&
                  r(t);
              for (let t of this.addedSet)
                tE(this.droppedSet, t) || tv(this.removes, t, this.mirror)
                  ? tE(this.movedSet, t)
                    ? r(t)
                    : this.droppedSet.add(t)
                  : r(t);
              let i = null;
              for (; e.length; ) {
                let t = null;
                if (i) {
                  let e = this.mirror.getId(i.value.parentNode),
                    r = n(i.value);
                  -1 !== e && -1 !== r && (t = i);
                }
                if (!t)
                  for (let r = e.length - 1; r >= 0; r--) {
                    let i = e.get(r);
                    if (i) {
                      let e = this.mirror.getId(i.value.parentNode),
                        r = n(i.value);
                      if (-1 !== e && -1 !== r) {
                        t = i;
                        break;
                      }
                    }
                  }
                if (!t) {
                  for (; e.head; ) e.removeNode(e.head.value);
                  break;
                }
                (i = t.previous), e.removeNode(t.value), r(t.value);
              }
              let a = {
                texts: this.texts
                  .map(t => ({ id: this.mirror.getId(t.node), value: t.value }))
                  .filter(t => this.mirror.has(t.id)),
                attributes: this.attributes
                  .map(t => ({
                    id: this.mirror.getId(t.node),
                    attributes: t.attributes,
                  }))
                  .filter(t => this.mirror.has(t.id)),
                removes: this.removes,
                adds: t,
              };
              (a.texts.length ||
                a.attributes.length ||
                a.removes.length ||
                a.adds.length) &&
                ((this.texts = []),
                (this.attributes = []),
                (this.removes = []),
                (this.addedSet = new Set()),
                (this.movedSet = new Set()),
                (this.droppedSet = new Set()),
                (this.movedMap = {}),
                this.mutationCb(a));
            }),
            (this.processMutation = t => {
              if (!tu(t.target))
                switch (t.type) {
                  case "characterData": {
                    let e = t.target.textContent;
                    !tl(
                      t.target,
                      this.blockClass,
                      this.blockSelector,
                      this.unblockSelector
                    ) &&
                      e !== t.oldValue &&
                      this.texts.push({
                        value:
                          J(
                            t.target,
                            this.maskTextClass,
                            this.maskTextSelector,
                            this.unmaskTextSelector,
                            this.maskAllText
                          ) && e
                            ? this.maskTextFn
                              ? this.maskTextFn(e)
                              : e.replace(/[\S]/g, "*")
                            : e,
                        node: t.target,
                      });
                    break;
                  }
                  case "attributes": {
                    let e = t.target,
                      n = e.getAttribute(t.attributeName);
                    if (
                      ("value" === t.attributeName &&
                        (n = O({
                          input: e,
                          maskInputSelector: this.maskInputSelector,
                          unmaskInputSelector: this.unmaskInputSelector,
                          maskInputOptions: this.maskInputOptions,
                          tagName: e.tagName,
                          type: e.getAttribute("type"),
                          value: n,
                          maskInputFn: this.maskInputFn,
                        })),
                      tl(
                        t.target,
                        this.blockClass,
                        this.blockSelector,
                        this.unblockSelector
                      ) || n === t.oldValue)
                    )
                      return;
                    let r = this.attributes.find(e => e.node === t.target);
                    if (
                      (!r &&
                        ((r = { node: t.target, attributes: {} }),
                        this.attributes.push(r)),
                      "type" === t.attributeName &&
                        "INPUT" === e.tagName &&
                        "password" === (t.oldValue || "").toLowerCase() &&
                        e.setAttribute("data-rr-is-password", "true"),
                      "style" === t.attributeName)
                    ) {
                      let n = this.doc.createElement("span");
                      t.oldValue && n.setAttribute("style", t.oldValue),
                        (void 0 === r.attributes.style ||
                          null === r.attributes.style) &&
                          (r.attributes.style = {});
                      try {
                        let t = r.attributes.style;
                        for (let r of Array.from(e.style)) {
                          let i = e.style.getPropertyValue(r),
                            a = e.style.getPropertyPriority(r);
                          (i !== n.style.getPropertyValue(r) ||
                            a !== n.style.getPropertyPriority(r)) &&
                            ("" === a ? (t[r] = i) : (t[r] = [i, a]));
                        }
                        for (let r of Array.from(n.style))
                          "" === e.style.getPropertyValue(r) && (t[r] = !1);
                      } catch (t) {
                        console.warn(
                          "[rrweb] Error when parsing update to style attribute:",
                          t
                        );
                      }
                    } else {
                      let e = t.target;
                      r.attributes[t.attributeName] = K(
                        this.doc,
                        e,
                        e.tagName,
                        t.attributeName,
                        n,
                        this.maskAllText,
                        this.unmaskTextSelector,
                        this.maskTextFn
                      );
                    }
                    break;
                  }
                  case "childList":
                    t.addedNodes.forEach(e => this.genAdds(e, t.target)),
                      t.removedNodes.forEach(e => {
                        let n = this.mirror.getId(e),
                          r = I(t.target)
                            ? this.mirror.getId(t.target.host)
                            : this.mirror.getId(t.target);
                        !(
                          tl(
                            t.target,
                            this.blockClass,
                            this.blockSelector,
                            this.unblockSelector
                          ) || tu(e)
                        ) &&
                          (this.addedSet.has(e)
                            ? (ty(this.addedSet, e), this.droppedSet.add(e))
                            : (this.addedSet.has(t.target) && -1 === n) ||
                              (function t(e, n) {
                                if (I(e)) return !1;
                                let r = n.getId(e);
                                return (
                                  !n.has(r) ||
                                  ((!e.parentNode ||
                                    e.parentNode.nodeType !==
                                      e.DOCUMENT_NODE) &&
                                    (!e.parentNode || t(e.parentNode, n)))
                                );
                              })(t.target, this.mirror) ||
                              (this.movedSet.has(e) && this.movedMap[t_(n, r)]
                                ? ty(this.movedSet, e)
                                : this.removes.push({
                                    parentId: r,
                                    id: n,
                                    isShadow: !!I(t.target) || void 0,
                                  })),
                          this.mapRemoves.push(e));
                      });
                }
            }),
            (this.genAdds = (t, e) => {
              if (
                !(
                  e &&
                  tl(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector
                  )
                )
              ) {
                if ("__sn" in t) {
                  if (tu(t)) return;
                  this.movedSet.add(t);
                  let n = null;
                  if (e && "__sn" in e) n = e.__sn.id;
                  n && (this.movedMap[t_(t.__sn.id, n)] = !0);
                } else this.addedSet.add(t), this.droppedSet.delete(t);
                !tl(
                  t,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector
                ) && t.childNodes.forEach(t => this.genAdds(t));
              }
            });
        }
        init(t) {
          [
            "mutationCb",
            "blockClass",
            "blockSelector",
            "unblockSelector",
            "maskTextClass",
            "maskTextSelector",
            "unmaskTextSelector",
            "maskInputSelector",
            "unmaskInputSelector",
            "inlineStylesheet",
            "maskAllText",
            "maskInputOptions",
            "maskTextFn",
            "maskInputFn",
            "recordCanvas",
            "inlineImages",
            "slimDOMOptions",
            "doc",
            "mirror",
            "iframeManager",
            "shadowDomManager",
            "canvasManager",
          ].forEach(e => {
            this[e] = t[e];
          });
        }
        freeze() {
          (this.frozen = !0), this.canvasManager.freeze();
        }
        unfreeze() {
          (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
        }
        isFrozen() {
          return this.frozen;
        }
        lock() {
          (this.locked = !0), this.canvasManager.lock();
        }
        unlock() {
          (this.locked = !1), this.canvasManager.unlock(), this.emit();
        }
        reset() {
          this.shadowDomManager.reset(), this.canvasManager.reset();
        }
      }
      function ty(t, e) {
        t.delete(e), e.childNodes.forEach(e => ty(t, e));
      }
      function tv(t, e, n) {
        let { parentNode: r } = e;
        if (!r) return !1;
        let i = n.getId(r);
        return !!t.some(t => t.id === i) || tv(t, r, n);
      }
      function tE(t, e) {
        let { parentNode: n } = e;
        return !!n && (!!t.has(n) || tE(t, n));
      }
      let tb = t =>
          function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            try {
              return t(...n);
            } catch (t) {
              try {
                t.__rrweb__ = !0;
              } catch (t) {}
              throw t;
            }
          },
        tS = [];
      function tw(t) {
        try {
          if ("composedPath" in t) {
            let e = t.composedPath();
            if (e.length) return e[0];
          } else if ("path" in t && t.path.length) return t.path[0];
        } catch (t) {}
        return t && t.target;
      }
      function tT(t, e) {
        var n, r;
        let i = new tm();
        tS.push(i), i.init(t);
        let a = window.MutationObserver || window.__rrMutationObserver,
          s =
            null ===
              (r =
                null === (n = null == window ? void 0 : window.Zone) ||
                void 0 === n
                  ? void 0
                  : n.__symbol__) || void 0 === r
              ? void 0
              : r.call(n, "MutationObserver");
        s && window[s] && (a = window[s]);
        let o = new a(
          tb(e => {
            (!t.onMutation || !1 !== t.onMutation(e)) && i.processMutations(e);
          })
        );
        return (
          o.observe(e, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
          }),
          o
        );
      }
      function tk(t) {
        let {
            scrollCb: e,
            doc: n,
            mirror: r,
            blockClass: i,
            blockSelector: a,
            unblockSelector: s,
            sampling: o,
          } = t,
          l = tr(t => {
            let o = tw(t);
            if (!o || tl(o, i, a, s)) return;
            let l = r.getId(o);
            if (o === n) {
              let t = n.scrollingElement || n.documentElement;
              tb(e)({ id: l, x: t.scrollLeft, y: t.scrollTop });
            } else tb(e)({ id: l, x: o.scrollLeft, y: o.scrollTop });
          }, o.scroll || 100);
        return tt("scroll", tb(l), n);
      }
      function tR(t, e) {
        let n = Object.assign({}, t);
        return !e && delete n.userTriggered, n;
      }
      let tx = ["INPUT", "TEXTAREA", "SELECT"],
        tD = new WeakMap();
      function tN(t) {
        return (function (t, e) {
          if (
            (tC("CSSGroupingRule") &&
              t.parentRule instanceof CSSGroupingRule) ||
            (tC("CSSMediaRule") && t.parentRule instanceof CSSMediaRule) ||
            (tC("CSSSupportsRule") &&
              t.parentRule instanceof CSSSupportsRule) ||
            (tC("CSSConditionRule") && t.parentRule instanceof CSSConditionRule)
          ) {
            let n = Array.from(t.parentRule.cssRules).indexOf(t);
            e.unshift(n);
          } else {
            let n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
            e.unshift(n);
          }
          return e;
        })(t, []);
      }
      function tI(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.doc.defaultView;
        if (!n) return () => {};
        !(function (t, e) {
          let {
            mutationCb: n,
            mousemoveCb: r,
            mouseInteractionCb: i,
            scrollCb: a,
            viewportResizeCb: s,
            inputCb: o,
            mediaInteractionCb: l,
            styleSheetRuleCb: u,
            styleDeclarationCb: c,
            canvasMutationCb: d,
            fontCb: h,
          } = t;
          (t.mutationCb = function () {
            for (var t = arguments.length, r = Array(t), i = 0; i < t; i++)
              r[i] = arguments[i];
            e.mutation && e.mutation(...r), n(...r);
          }),
            (t.mousemoveCb = function () {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              e.mousemove && e.mousemove(...n), r(...n);
            }),
            (t.mouseInteractionCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.mouseInteraction && e.mouseInteraction(...n), i(...n);
            }),
            (t.scrollCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.scroll && e.scroll(...n), a(...n);
            }),
            (t.viewportResizeCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.viewportResize && e.viewportResize(...n), s(...n);
            }),
            (t.inputCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.input && e.input(...n), o(...n);
            }),
            (t.mediaInteractionCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.mediaInteaction && e.mediaInteaction(...n), l(...n);
            }),
            (t.styleSheetRuleCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.styleSheetRule && e.styleSheetRule(...n), u(...n);
            }),
            (t.styleDeclarationCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.styleDeclaration && e.styleDeclaration(...n), c(...n);
            }),
            (t.canvasMutationCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.canvasMutation && e.canvasMutation(...n), d(...n);
            }),
            (t.fontCb = function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              e.font && e.font(...n), h(...n);
            });
        })(t, e);
        let r = tT(t, t.doc),
          i = (function (t) {
            let e,
              { mousemoveCb: n, sampling: r, doc: i, mirror: a } = t;
            if (!1 === r.mousemove) return () => {};
            let s = "number" == typeof r.mousemove ? r.mousemove : 50,
              o =
                "number" == typeof r.mousemoveCallback
                  ? r.mousemoveCallback
                  : 500,
              l = [],
              u = tr(t => {
                let r = Date.now() - e;
                tb(n)(
                  l.map(t => ((t.timeOffset -= r), t)),
                  t
                ),
                  (l = []),
                  (e = null);
              }, o),
              d = tr(
                t => {
                  let n = tw(t),
                    { clientX: r, clientY: i } = tc(t)
                      ? t.changedTouches[0]
                      : t;
                  !e && (e = Date.now()),
                    l.push({
                      x: r,
                      y: i,
                      id: a.getId(n),
                      timeOffset: Date.now() - e,
                    }),
                    u(
                      "undefined" != typeof DragEvent && t instanceof DragEvent
                        ? c.Drag
                        : t instanceof MouseEvent
                          ? c.MouseMove
                          : c.TouchMove
                    );
                },
                s,
                { trailing: !1 }
              ),
              h = [
                tt("mousemove", tb(d), i),
                tt("touchmove", tb(d), i),
                tt("drag", tb(d), i),
              ];
            return tb(() => {
              h.forEach(t => t());
            });
          })(t),
          a = (function (t) {
            let {
              mouseInteractionCb: e,
              doc: n,
              mirror: r,
              blockClass: i,
              blockSelector: a,
              unblockSelector: s,
              sampling: o,
            } = t;
            if (!1 === o.mouseInteraction) return () => {};
            let l =
                !0 === o.mouseInteraction || void 0 === o.mouseInteraction
                  ? {}
                  : o.mouseInteraction,
              u = [],
              c = t => n => {
                let o = tw(n);
                if (tl(o, i, a, s)) return;
                let l = tc(n) ? n.changedTouches[0] : n;
                if (!l) return;
                let u = r.getId(o),
                  { clientX: c, clientY: h } = l;
                tb(e)({ type: d[t], id: u, x: c, y: h });
              };
            return (
              Object.keys(d)
                .filter(
                  t =>
                    Number.isNaN(Number(t)) &&
                    !t.endsWith("_Departed") &&
                    !1 !== l[t]
                )
                .forEach(t => {
                  let e = t.toLowerCase(),
                    r = tb(c(t));
                  u.push(tt(e, r, n));
                }),
              tb(() => {
                u.forEach(t => t());
              })
            );
          })(t),
          s = tk(t),
          o = (function (t) {
            let { viewportResizeCb: e } = t,
              n = -1,
              r = -1,
              i = tr(() => {
                let t = ts(),
                  i = to();
                (n !== t || r !== i) &&
                  (tb(e)({ width: Number(i), height: Number(t) }),
                  (n = t),
                  (r = i));
              }, 200);
            return tt("resize", tb(i), window);
          })(t),
          l = (function (t) {
            let {
              inputCb: e,
              doc: n,
              mirror: r,
              blockClass: i,
              blockSelector: a,
              unblockSelector: s,
              ignoreClass: o,
              ignoreSelector: l,
              maskInputSelector: u,
              unmaskInputSelector: c,
              maskInputOptions: d,
              maskInputFn: h,
              sampling: f,
              userTriggeredOnInput: p,
            } = t;
            function _(t) {
              let e = tw(t),
                r = e && e.tagName,
                f = t.isTrusted;
              if (
                ("OPTION" === r && (e = e.parentElement),
                !e || !r || 0 > tx.indexOf(r) || tl(e, i, a, s))
              )
                return;
              let _ = e,
                m = U(_);
              if (_.classList.contains(o) || (l && _.matches(l))) return;
              let y = B(_, r, m),
                v = !1;
              ("radio" === m || "checkbox" === m) && (v = e.checked),
                (function (t) {
                  let {
                    tagName: e,
                    type: n,
                    maskInputOptions: r,
                    maskInputSelector: i,
                  } = t;
                  return i || C({ maskInputOptions: r, tagName: e, type: n });
                })({
                  maskInputOptions: d,
                  maskInputSelector: u,
                  tagName: r,
                  type: m,
                }) &&
                  (y = O({
                    input: _,
                    maskInputOptions: d,
                    maskInputSelector: u,
                    unmaskInputSelector: c,
                    tagName: r,
                    type: m,
                    value: y,
                    maskInputFn: h,
                  })),
                g(e, tb(tR)({ text: y, isChecked: v, userTriggered: f }, p));
              let E = e.name;
              "radio" === m &&
                E &&
                v &&
                n
                  .querySelectorAll(`input[type="radio"][name="${E}"]`)
                  .forEach(t => {
                    if (t !== e) {
                      let e = O({
                        input: t,
                        maskInputOptions: d,
                        maskInputSelector: u,
                        unmaskInputSelector: c,
                        tagName: r,
                        type: m,
                        value: B(t, r, m),
                        maskInputFn: h,
                      });
                      g(
                        t,
                        tb(tR)({ text: e, isChecked: !v, userTriggered: !1 }, p)
                      );
                    }
                  });
            }
            function g(t, n) {
              let i = tD.get(t);
              if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                tD.set(t, n);
                let i = r.getId(t);
                e(Object.assign(Object.assign({}, n), { id: i }));
              }
            }
            let m = ("last" === f.input ? ["change"] : ["input", "change"]).map(
                t => tt(t, tb(_), n)
              ),
              y = Object.getOwnPropertyDescriptor(
                HTMLInputElement.prototype,
                "value"
              ),
              v = [
                [HTMLInputElement.prototype, "value"],
                [HTMLInputElement.prototype, "checked"],
                [HTMLSelectElement.prototype, "value"],
                [HTMLTextAreaElement.prototype, "value"],
                [HTMLSelectElement.prototype, "selectedIndex"],
                [HTMLOptionElement.prototype, "selected"],
              ];
            return (
              y &&
                y.set &&
                m.push(
                  ...v.map(t =>
                    ti(t[0], t[1], {
                      set() {
                        tb(_)({ target: this });
                      },
                    })
                  )
                ),
              tb(() => {
                m.forEach(t => t());
              })
            );
          })(t),
          u = (function (t) {
            let {
                mediaInteractionCb: e,
                blockClass: n,
                blockSelector: r,
                unblockSelector: i,
                mirror: a,
                sampling: s,
              } = t,
              o = t =>
                tr(
                  tb(s => {
                    let o = tw(s);
                    if (!o || tl(o, n, r, i)) return;
                    let { currentTime: l, volume: u, muted: c } = o;
                    e({
                      type: t,
                      id: a.getId(o),
                      currentTime: l,
                      volume: u,
                      muted: c,
                    });
                  }),
                  s.media || 500
                ),
              l = [
                tt("play", o(0)),
                tt("pause", o(1)),
                tt("seeked", o(2)),
                tt("volumechange", o(3)),
              ];
            return tb(() => {
              l.forEach(t => t());
            });
          })(t),
          h = (function (t, e) {
            let { styleSheetRuleCb: n, mirror: r } = t,
              { win: i } = e;
            if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return () => {};
            let a = i.CSSStyleSheet.prototype.insertRule;
            i.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
              apply: tb((t, e, i) => {
                let [a, s] = i,
                  o = r.getId(e.ownerNode);
                return (
                  -1 !== o && n({ id: o, adds: [{ rule: a, index: s }] }),
                  t.apply(e, i)
                );
              }),
            });
            let s = i.CSSStyleSheet.prototype.deleteRule;
            i.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
              apply: tb((t, e, i) => {
                let [a] = i,
                  s = r.getId(e.ownerNode);
                return (
                  -1 !== s && n({ id: s, removes: [{ index: a }] }),
                  t.apply(e, i)
                );
              }),
            });
            let o = {};
            tO("CSSGroupingRule")
              ? (o.CSSGroupingRule = i.CSSGroupingRule)
              : (tO("CSSMediaRule") && (o.CSSMediaRule = i.CSSMediaRule),
                tO("CSSConditionRule") &&
                  (o.CSSConditionRule = i.CSSConditionRule),
                tO("CSSSupportsRule") &&
                  (o.CSSSupportsRule = i.CSSSupportsRule));
            let l = {};
            return (
              Object.entries(o).forEach(t => {
                let [e, i] = t;
                (l[e] = {
                  insertRule: i.prototype.insertRule,
                  deleteRule: i.prototype.deleteRule,
                }),
                  (i.prototype.insertRule = new Proxy(l[e].insertRule, {
                    apply: tb((t, e, i) => {
                      let [a, s] = i,
                        o = r.getId(e.parentStyleSheet.ownerNode);
                      return (
                        -1 !== o &&
                          n({
                            id: o,
                            adds: [{ rule: a, index: [...tN(e), s || 0] }],
                          }),
                        t.apply(e, i)
                      );
                    }),
                  })),
                  (i.prototype.deleteRule = new Proxy(l[e].deleteRule, {
                    apply: tb((t, e, i) => {
                      let [a] = i,
                        s = r.getId(e.parentStyleSheet.ownerNode);
                      return (
                        -1 !== s &&
                          n({ id: s, removes: [{ index: [...tN(e), a] }] }),
                        t.apply(e, i)
                      );
                    }),
                  }));
              }),
              tb(() => {
                (i.CSSStyleSheet.prototype.insertRule = a),
                  (i.CSSStyleSheet.prototype.deleteRule = s),
                  Object.entries(o).forEach(t => {
                    let [e, n] = t;
                    (n.prototype.insertRule = l[e].insertRule),
                      (n.prototype.deleteRule = l[e].deleteRule);
                  });
              })
            );
          })(t, { win: n }),
          f = (function (t, e) {
            let { styleDeclarationCb: n, mirror: r } = t,
              { win: i } = e,
              a = i.CSSStyleDeclaration.prototype.setProperty;
            i.CSSStyleDeclaration.prototype.setProperty = new Proxy(a, {
              apply: tb((t, e, i) => {
                var a, s;
                let [o, l, u] = i,
                  c = r.getId(
                    null ===
                      (s =
                        null === (a = e.parentRule) || void 0 === a
                          ? void 0
                          : a.parentStyleSheet) || void 0 === s
                      ? void 0
                      : s.ownerNode
                  );
                return (
                  -1 !== c &&
                    n({
                      id: c,
                      set: { property: o, value: l, priority: u },
                      index: tN(e.parentRule),
                    }),
                  t.apply(e, i)
                );
              }),
            });
            let s = i.CSSStyleDeclaration.prototype.removeProperty;
            return (
              (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                apply: tb((t, e, i) => {
                  var a, s;
                  let [o] = i,
                    l = r.getId(
                      null ===
                        (s =
                          null === (a = e.parentRule) || void 0 === a
                            ? void 0
                            : a.parentStyleSheet) || void 0 === s
                        ? void 0
                        : s.ownerNode
                    );
                  return (
                    -1 !== l &&
                      n({
                        id: l,
                        remove: { property: o },
                        index: tN(e.parentRule),
                      }),
                    t.apply(e, i)
                  );
                }),
              })),
              tb(() => {
                (i.CSSStyleDeclaration.prototype.setProperty = a),
                  (i.CSSStyleDeclaration.prototype.removeProperty = s);
              })
            );
          })(t, { win: n }),
          p = t.collectFonts
            ? (function (t) {
                let { fontCb: e, doc: n } = t,
                  r = n.defaultView;
                if (!r) return () => {};
                let i = [],
                  a = new WeakMap(),
                  s = r.FontFace;
                r.FontFace = function (t, e, n) {
                  let r = new s(t, e, n);
                  return (
                    a.set(r, {
                      family: t,
                      buffer: "string" != typeof e,
                      descriptors: n,
                      fontSource:
                        "string" == typeof e
                          ? e
                          : JSON.stringify(Array.from(new Uint8Array(e))),
                    }),
                    r
                  );
                };
                let o = ta(n.fonts, "add", function (t) {
                  return function (n) {
                    return (
                      setTimeout(() => {
                        let t = a.get(n);
                        t && (e(t), a.delete(n));
                      }, 0),
                      t.apply(this, [n])
                    );
                  };
                });
                return (
                  i.push(() => {
                    r.FontFace = s;
                  }),
                  i.push(o),
                  tb(() => {
                    i.forEach(t => t());
                  })
                );
              })(t)
            : () => {},
          _ = [];
        for (let e of t.plugins) _.push(e.observer(e.callback, n, e.options));
        return tb(() => {
          tS.forEach(t => t.reset()),
            r.disconnect(),
            i(),
            a(),
            s(),
            o(),
            l(),
            u();
          try {
            h(), f();
          } catch (t) {}
          p(), _.forEach(t => t());
        });
      }
      function tC(t) {
        return void 0 !== window[t];
      }
      function tO(t) {
        return !!(
          void 0 !== window[t] &&
          window[t].prototype &&
          "insertRule" in window[t].prototype &&
          "deleteRule" in window[t].prototype
        );
      }
      class tA {
        constructor(t) {
          (this.iframes = new WeakMap()), (this.mutationCb = t.mutationCb);
        }
        addIframe(t) {
          this.iframes.set(t, !0);
        }
        addLoadListener(t) {
          this.loadListener = t;
        }
        attachIframe(t, e) {
          var n;
          this.mutationCb({
            adds: [{ parentId: t.__sn.id, nextId: null, node: e }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0,
          }),
            null === (n = this.loadListener) || void 0 === n || n.call(this, t);
        }
      }
      class tU {
        constructor(t) {
          (this.restorePatches = []),
            (this.mutationCb = t.mutationCb),
            (this.scrollCb = t.scrollCb),
            (this.bypassOptions = t.bypassOptions),
            (this.mirror = t.mirror);
          let e = this;
          this.restorePatches.push(
            ta(HTMLElement.prototype, "attachShadow", function (t) {
              return function () {
                let n = t.apply(this, arguments);
                return (
                  this.shadowRoot &&
                    e.addShadowRoot(this.shadowRoot, this.ownerDocument),
                  n
                );
              };
            })
          );
        }
        addShadowRoot(t, e) {
          tT(
            Object.assign(Object.assign({}, this.bypassOptions), {
              doc: e,
              mutationCb: this.mutationCb,
              mirror: this.mirror,
              shadowDomManager: this,
            }),
            t
          ),
            tk(
              Object.assign(Object.assign({}, this.bypassOptions), {
                scrollCb: this.scrollCb,
                doc: t,
                mirror: this.mirror,
              })
            );
        }
        observeAttachShadow(t) {
          if (t.contentWindow) {
            let e = this;
            this.restorePatches.push(
              ta(
                t.contentWindow.HTMLElement.prototype,
                "attachShadow",
                function (n) {
                  return function () {
                    let r = n.apply(this, arguments);
                    return (
                      this.shadowRoot &&
                        e.addShadowRoot(this.shadowRoot, t.contentDocument),
                      r
                    );
                  };
                }
              )
            );
          }
        }
        reset() {
          this.restorePatches.forEach(t => t());
        }
      }
      for (
        var tB =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          tL = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
          tM = 0;
        tM < tB.length;
        tM++
      )
        tL[tB.charCodeAt(tM)] = tM;
      var tP = function (t) {
        var e,
          n = new Uint8Array(t),
          r = n.length,
          i = "";
        for (e = 0; e < r; e += 3)
          i +=
            tB[n[e] >> 2] +
            tB[((3 & n[e]) << 4) | (n[e + 1] >> 4)] +
            tB[((15 & n[e + 1]) << 2) | (n[e + 2] >> 6)] +
            tB[63 & n[e + 2]];
        return (
          r % 3 == 2
            ? (i = i.substring(0, i.length - 1) + "=")
            : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
          i
        );
      };
      let tG = new Map(),
        tY = (t, e, n) => {
          var r, i;
          let a;
          if (!t || !(tz(t, e) || "object" == typeof t)) return;
          let s = t.constructor.name;
          let o =
              ((r = n),
              (i = s),
              !(a = tG.get(r)) && ((a = new Map()), tG.set(r, a)),
              !a.has(i) && a.set(i, []),
              a.get(i)),
            l = o.indexOf(t);
          return -1 === l && ((l = o.length), o.push(t)), l;
        },
        tF = (t, e, n) =>
          [...t].map(t =>
            (function t(e, n, r) {
              if (e instanceof Array) return e.map(e => t(e, n, r));
              if (null === e);
              else if (
                e instanceof Float32Array ||
                e instanceof Float64Array ||
                e instanceof Int32Array ||
                e instanceof Uint32Array ||
                e instanceof Uint8Array ||
                e instanceof Uint16Array ||
                e instanceof Int16Array ||
                e instanceof Int8Array ||
                e instanceof Uint8ClampedArray
              )
                return {
                  rr_type: e.constructor.name,
                  args: [Object.values(e)],
                };
              else if (e instanceof ArrayBuffer) {
                let t = e.constructor.name;
                return { rr_type: t, base64: tP(e) };
              } else if (e instanceof DataView)
                return {
                  rr_type: e.constructor.name,
                  args: [t(e.buffer, n, r), e.byteOffset, e.byteLength],
                };
              else if (e instanceof HTMLImageElement) {
                let t = e.constructor.name,
                  { src: n } = e;
                return { rr_type: t, src: n };
              } else if (e instanceof ImageData)
                return {
                  rr_type: e.constructor.name,
                  args: [t(e.data, n, r), e.width, e.height],
                };
              else if (tz(e, n) || "object" == typeof e) {
                let t = e.constructor.name;
                return { rr_type: t, index: tY(e, n, r) };
              }
              return e;
            })(t, e, n)
          ),
        tz = (t, e) =>
          !![
            "WebGLActiveInfo",
            "WebGLBuffer",
            "WebGLFramebuffer",
            "WebGLProgram",
            "WebGLRenderbuffer",
            "WebGLShader",
            "WebGLShaderPrecisionFormat",
            "WebGLTexture",
            "WebGLUniformLocation",
            "WebGLVertexArrayObject",
            "WebGLVertexArrayObjectOES",
          ]
            .filter(t => "function" == typeof e[t])
            .find(n => t instanceof e[n]);
      function tH(t, e, n, r, i, a, s, o) {
        let l = [];
        for (let u of Object.getOwnPropertyNames(t))
          try {
            if ("function" != typeof t[u]) continue;
            let c = ta(t, u, function (l) {
              return function () {
                for (var c = arguments.length, d = Array(c), h = 0; h < c; h++)
                  d[h] = arguments[h];
                let f = l.apply(this, d);
                if ((tY(f, o, t), !tl(this.canvas, r, a, i))) {
                  s.getId(this.canvas);
                  let r = tF([...d], o, t),
                    i = { type: e, property: u, args: r };
                  n(this.canvas, i);
                }
                return f;
              };
            });
            l.push(c);
          } catch (i) {
            let r = ti(t, u, {
              set(t) {
                n(this.canvas, { type: e, property: u, args: [t], setter: !0 });
              },
            });
            l.push(r);
          }
        return l;
      }
      class t$ {
        reset() {
          this.pendingCanvasMutations.clear(),
            this.resetObservers && this.resetObservers();
        }
        freeze() {
          this.frozen = !0;
        }
        unfreeze() {
          this.frozen = !1;
        }
        lock() {
          this.locked = !0;
        }
        unlock() {
          this.locked = !1;
        }
        constructor(t) {
          (this.pendingCanvasMutations = new Map()),
            (this.rafStamps = { latestId: 0, invokeId: null }),
            (this.frozen = !1),
            (this.locked = !1),
            (this.processMutation = function (t, e) {
              ((this.rafStamps.invokeId &&
                this.rafStamps.latestId !== this.rafStamps.invokeId) ||
                !this.rafStamps.invokeId) &&
                (this.rafStamps.invokeId = this.rafStamps.latestId),
                !this.pendingCanvasMutations.has(t) &&
                  this.pendingCanvasMutations.set(t, []),
                this.pendingCanvasMutations.get(t).push(e);
            }),
            (this.mutationCb = t.mutationCb),
            (this.mirror = t.mirror),
            !0 === t.recordCanvas &&
              this.initCanvasMutationObserver(
                t.win,
                t.blockClass,
                t.blockSelector,
                t.unblockSelector
              );
        }
        initCanvasMutationObserver(t, e, n, r) {
          this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
          let i = (function (t, e, n, r) {
              let i = [];
              try {
                let a = ta(
                  t.HTMLCanvasElement.prototype,
                  "getContext",
                  function (t) {
                    return function (i) {
                      for (
                        var a = arguments.length,
                          s = Array(a > 1 ? a - 1 : 0),
                          o = 1;
                        o < a;
                        o++
                      )
                        s[o - 1] = arguments[o];
                      return (
                        !tl(this, e, n, r) &&
                          !("__context" in this) &&
                          (this.__context = i),
                        t.apply(this, [i, ...s])
                      );
                    };
                  }
                );
                i.push(a);
              } catch (t) {
                console.error(
                  "failed to patch HTMLCanvasElement.prototype.getContext"
                );
              }
              return () => {
                i.forEach(t => t());
              };
            })(t, e, r, n),
            a = (function (t, e, n, r, i, a) {
              let s = [];
              for (let a of Object.getOwnPropertyNames(
                e.CanvasRenderingContext2D.prototype
              ))
                try {
                  if (
                    "function" != typeof e.CanvasRenderingContext2D.prototype[a]
                  )
                    continue;
                  let o = ta(
                    e.CanvasRenderingContext2D.prototype,
                    a,
                    function (e) {
                      return function () {
                        for (
                          var s = arguments.length, o = Array(s), l = 0;
                          l < s;
                          l++
                        )
                          o[l] = arguments[l];
                        return (
                          !tl(this.canvas, n, i, r) &&
                            setTimeout(() => {
                              let e = [...o];
                              if (
                                "drawImage" === a &&
                                e[0] &&
                                e[0] instanceof HTMLCanvasElement
                              ) {
                                let t = e[0],
                                  n = t.getContext("2d"),
                                  r =
                                    null == n
                                      ? void 0
                                      : n.getImageData(0, 0, t.width, t.height),
                                  i = null == r ? void 0 : r.data;
                                e[0] = JSON.stringify(i);
                              }
                              t(this.canvas, {
                                type: h["2D"],
                                property: a,
                                args: e,
                              });
                            }, 0),
                          e.apply(this, o)
                        );
                      };
                    }
                  );
                  s.push(o);
                } catch (r) {
                  let n = ti(e.CanvasRenderingContext2D.prototype, a, {
                    set(e) {
                      t(this.canvas, {
                        type: h["2D"],
                        property: a,
                        args: [e],
                        setter: !0,
                      });
                    },
                  });
                  s.push(n);
                }
              return () => {
                s.forEach(t => t());
              };
            })(this.processMutation.bind(this), t, e, r, n, this.mirror),
            s = (function (t, e, n, r, i, a) {
              let s = [];
              return (
                s.push(
                  ...tH(
                    e.WebGLRenderingContext.prototype,
                    h.WebGL,
                    t,
                    n,
                    r,
                    i,
                    a,
                    e
                  )
                ),
                void 0 !== e.WebGL2RenderingContext &&
                  s.push(
                    ...tH(
                      e.WebGL2RenderingContext.prototype,
                      h.WebGL2,
                      t,
                      n,
                      r,
                      i,
                      a,
                      e
                    )
                  ),
                () => {
                  s.forEach(t => t());
                }
              );
            })(this.processMutation.bind(this), t, e, r, n, this.mirror);
          this.resetObservers = () => {
            i(), a(), s();
          };
        }
        startPendingCanvasMutationFlusher() {
          requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }
        startRAFTimestamping() {
          let t = e => {
            (this.rafStamps.latestId = e), requestAnimationFrame(t);
          };
          requestAnimationFrame(t);
        }
        flushPendingCanvasMutations() {
          this.pendingCanvasMutations.forEach((t, e) => {
            let n = this.mirror.getId(e);
            this.flushPendingCanvasMutationFor(e, n);
          }),
            requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }
        flushPendingCanvasMutationFor(t, e) {
          if (this.frozen || this.locked) return;
          let n = this.pendingCanvasMutations.get(t);
          if (!n || -1 === e) return;
          let r = n.map(t =>
              (function (t, e) {
                var n = {};
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) &&
                    0 > e.indexOf(r) &&
                    (n[r] = t[r]);
                if (
                  null != t &&
                  "function" == typeof Object.getOwnPropertySymbols
                )
                  for (
                    var i = 0, r = Object.getOwnPropertySymbols(t);
                    i < r.length;
                    i++
                  )
                    0 > e.indexOf(r[i]) &&
                      Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                      (n[r[i]] = t[r[i]]);
                return n;
              })(t, ["type"])
            ),
            { type: i } = n[0];
          this.mutationCb({ id: e, type: i, commands: r }),
            this.pendingCanvasMutations.delete(t);
        }
      }
      function tW(t) {
        return Object.assign(Object.assign({}, t), { timestamp: Date.now() });
      }
      let tj = {
        map: {},
        getId: t => (t && t.__sn ? t.__sn.id : -1),
        getNode(t) {
          return this.map[t] || null;
        },
        removeNodeFromMap(t) {
          let e = t.__sn && t.__sn.id;
          delete this.map[e],
            t.childNodes &&
              t.childNodes.forEach(t => this.removeNodeFromMap(t));
        },
        has(t) {
          return this.map.hasOwnProperty(t);
        },
        reset() {
          this.map = {};
        },
      };
      function tq() {
        let t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: o = "rr-block",
            blockSelector: l = null,
            unblockSelector: d = null,
            ignoreClass: h = "rr-ignore",
            ignoreSelector: f = null,
            maskTextClass: p = "rr-mask",
            maskTextSelector: _ = null,
            maskInputSelector: g = null,
            unmaskTextSelector: m = null,
            unmaskInputSelector: y = null,
            inlineStylesheet: v = !0,
            maskAllText: E = !1,
            maskAllInputs: b,
            maskInputOptions: S,
            slimDOMOptions: w,
            maskInputFn: T,
            maskTextFn: k,
            hooks: R,
            packFn: x,
            sampling: D = {},
            mousemoveWait: N,
            recordCanvas: I = !1,
            userTriggeredOnInput: C = !1,
            collectFonts: O = !1,
            inlineImages: A = !1,
            plugins: U,
            keepIframeSrcFn: B = () => !1,
            onMutation: L,
          } = e;
        if (!n) throw Error("emit function is required");
        void 0 !== N && void 0 === D.mousemove && (D.mousemove = N);
        let M =
            !0 === b
              ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0,
                  radio: !0,
                  checkbox: !0,
                }
              : void 0 !== S
                ? S
                : {},
          P =
            !0 === w || "all" === w
              ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaVerification: !0,
                  headMetaAuthorship: "all" === w,
                  headMetaDescKeywords: "all" === w,
                }
              : w || {};
        !(function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window;
          "NodeList" in t &&
            !t.NodeList.prototype.forEach &&
            (t.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList" in t &&
              !t.DOMTokenList.prototype.forEach &&
              (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            !Node.prototype.contains &&
              (Node.prototype.contains = function (t) {
                if (!(0 in arguments))
                  throw TypeError("1 argument is required");
                do if (this === t) return !0;
                while ((t = t && t.parentNode));
                return !1;
              });
        })();
        let G = 0,
          Y = t => {
            for (let e of U || [])
              e.eventProcessor && (t = e.eventProcessor(t));
            return x && (t = x(t)), t;
          };
        a = (e, a) => {
          var o;
          if (
            ((null === (o = tS[0]) || void 0 === o ? void 0 : o.isFrozen()) &&
              e.type !== u.FullSnapshot &&
              !(
                e.type === u.IncrementalSnapshot && e.data.source === c.Mutation
              ) &&
              tS.forEach(t => t.unfreeze()),
            n(Y(e), a),
            e.type === u.FullSnapshot)
          )
            (t = e), (G = 0);
          else if (e.type === u.IncrementalSnapshot) {
            if (e.data.source === c.Mutation && e.data.isAttachIframe) return;
            G++;
            let n = i && G >= i,
              a = r && e.timestamp - t.timestamp > r;
            (n || a) && s(!0);
          }
        };
        let F = t => {
            a(
              tW({
                type: u.IncrementalSnapshot,
                data: Object.assign({ source: c.Mutation }, t),
              })
            );
          },
          z = t =>
            a(
              tW({
                type: u.IncrementalSnapshot,
                data: Object.assign({ source: c.Scroll }, t),
              })
            ),
          H = t =>
            a(
              tW({
                type: u.IncrementalSnapshot,
                data: Object.assign({ source: c.CanvasMutation }, t),
              })
            ),
          $ = new tA({ mutationCb: F }),
          W = new t$({
            recordCanvas: I,
            mutationCb: H,
            win: window,
            blockClass: o,
            blockSelector: l,
            unblockSelector: d,
            mirror: tj,
          }),
          j = new tU({
            mutationCb: F,
            scrollCb: z,
            bypassOptions: {
              onMutation: L,
              blockClass: o,
              blockSelector: l,
              unblockSelector: d,
              maskTextClass: p,
              maskTextSelector: _,
              unmaskTextSelector: m,
              maskInputSelector: g,
              unmaskInputSelector: y,
              inlineStylesheet: v,
              maskAllText: E,
              maskInputOptions: M,
              maskTextFn: k,
              maskInputFn: T,
              recordCanvas: I,
              inlineImages: A,
              sampling: D,
              slimDOMOptions: P,
              iframeManager: $,
              canvasManager: W,
            },
            mirror: tj,
          });
        s = function () {
          var t, e, n, r;
          let i =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          a(
            tW({
              type: u.Meta,
              data: { href: window.location.href, width: to(), height: ts() },
            }),
            i
          ),
            tS.forEach(t => t.lock());
          let [s, c] = (function (t, e) {
            let {
                blockClass: n = "rr-block",
                blockSelector: r = null,
                unblockSelector: i = null,
                maskTextClass: a = "rr-mask",
                maskTextSelector: s = null,
                unmaskTextSelector: o = null,
                inlineStylesheet: l = !0,
                inlineImages: u = !1,
                recordCanvas: c = !1,
                maskInputSelector: d = null,
                unmaskInputSelector: h = null,
                maskAllText: f = !1,
                maskAllInputs: p = !1,
                maskTextFn: _,
                maskInputFn: g,
                slimDOM: m = !1,
                dataURLOptions: y,
                preserveWhiteSpace: v,
                onSerialize: E,
                onIframeLoad: b,
                iframeLoadTimeout: S,
                keepIframeSrcFn: w = () => !1,
              } = e || {},
              T = {};
            return [
              Q(t, {
                doc: t,
                map: T,
                blockClass: n,
                blockSelector: r,
                unblockSelector: i,
                maskTextClass: a,
                maskTextSelector: s,
                unmaskTextSelector: o,
                skipChild: !1,
                inlineStylesheet: l,
                maskInputSelector: d,
                unmaskInputSelector: h,
                maskAllText: f,
                maskInputOptions:
                  !0 === p
                    ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                      }
                    : !1 === p
                      ? {}
                      : p,
                maskTextFn: _,
                maskInputFn: g,
                slimDOMOptions:
                  !0 === m || "all" === m
                    ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === m,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0,
                      }
                    : !1 === m
                      ? {}
                      : m,
                dataURLOptions: y,
                inlineImages: u,
                recordCanvas: c,
                preserveWhiteSpace: v,
                onSerialize: E,
                onIframeLoad: b,
                iframeLoadTimeout: S,
                keepIframeSrcFn: w,
              }),
              T,
            ];
          })(document, {
            blockClass: o,
            blockSelector: l,
            unblockSelector: d,
            maskTextClass: p,
            maskTextSelector: _,
            unmaskTextSelector: m,
            maskInputSelector: g,
            unmaskInputSelector: y,
            inlineStylesheet: v,
            maskAllText: E,
            maskAllInputs: M,
            maskTextFn: k,
            slimDOM: P,
            recordCanvas: I,
            inlineImages: A,
            onSerialize: t => {
              td(t) && $.addIframe(t),
                th(t) && j.addShadowRoot(t.shadowRoot, document);
            },
            onIframeLoad: (t, e) => {
              $.attachIframe(t, e), j.observeAttachShadow(t);
            },
            keepIframeSrcFn: B,
          });
          if (!s) return console.warn("Failed to snapshot the document");
          (tj.map = c),
            a(
              tW({
                type: u.FullSnapshot,
                data: {
                  node: s,
                  initialOffset: {
                    left:
                      void 0 !== window.pageXOffset
                        ? window.pageXOffset
                        : (null == document
                            ? void 0
                            : document.documentElement.scrollLeft) ||
                          (null ===
                            (e =
                              null ===
                                (t =
                                  null == document ? void 0 : document.body) ||
                              void 0 === t
                                ? void 0
                                : t.parentElement) || void 0 === e
                            ? void 0
                            : e.scrollLeft) ||
                          (null == document
                            ? void 0
                            : document.body.scrollLeft) ||
                          0,
                    top:
                      void 0 !== window.pageYOffset
                        ? window.pageYOffset
                        : (null == document
                            ? void 0
                            : document.documentElement.scrollTop) ||
                          (null ===
                            (r =
                              null ===
                                (n =
                                  null == document ? void 0 : document.body) ||
                              void 0 === n
                                ? void 0
                                : n.parentElement) || void 0 === r
                            ? void 0
                            : r.scrollTop) ||
                          (null == document
                            ? void 0
                            : document.body.scrollTop) ||
                          0,
                  },
                },
              })
            ),
            tS.forEach(t => t.unlock());
        };
        try {
          let t = [];
          t.push(
            tt("DOMContentLoaded", () => {
              a(tW({ type: u.DomContentLoaded, data: {} }));
            })
          );
          let e = t => {
            var e;
            return tb(tI)(
              {
                onMutation: L,
                mutationCb: F,
                mousemoveCb: (t, e) =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: { source: e, positions: t },
                    })
                  ),
                mouseInteractionCb: t =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: Object.assign({ source: c.MouseInteraction }, t),
                    })
                  ),
                scrollCb: z,
                viewportResizeCb: t =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: Object.assign({ source: c.ViewportResize }, t),
                    })
                  ),
                inputCb: t =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: Object.assign({ source: c.Input }, t),
                    })
                  ),
                mediaInteractionCb: t =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: Object.assign({ source: c.MediaInteraction }, t),
                    })
                  ),
                styleSheetRuleCb: t =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: Object.assign({ source: c.StyleSheetRule }, t),
                    })
                  ),
                styleDeclarationCb: t =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: Object.assign({ source: c.StyleDeclaration }, t),
                    })
                  ),
                canvasMutationCb: H,
                fontCb: t =>
                  a(
                    tW({
                      type: u.IncrementalSnapshot,
                      data: Object.assign({ source: c.Font }, t),
                    })
                  ),
                blockClass: o,
                ignoreClass: h,
                ignoreSelector: f,
                maskTextClass: p,
                maskTextSelector: _,
                unmaskTextSelector: m,
                maskInputSelector: g,
                unmaskInputSelector: y,
                maskInputOptions: M,
                inlineStylesheet: v,
                sampling: D,
                recordCanvas: I,
                inlineImages: A,
                userTriggeredOnInput: C,
                collectFonts: O,
                doc: t,
                maskAllText: E,
                maskInputFn: T,
                maskTextFn: k,
                blockSelector: l,
                unblockSelector: d,
                slimDOMOptions: P,
                mirror: tj,
                iframeManager: $,
                shadowDomManager: j,
                canvasManager: W,
                plugins:
                  (null ===
                    (e = null == U ? void 0 : U.filter(t => t.observer)) ||
                  void 0 === e
                    ? void 0
                    : e.map(t => ({
                        observer: t.observer,
                        options: t.options,
                        callback: e =>
                          a(
                            tW({
                              type: u.Plugin,
                              data: { plugin: t.name, payload: e },
                            })
                          ),
                      }))) || [],
              },
              R
            );
          };
          $.addLoadListener(n => {
            try {
              t.push(e(n.contentDocument));
            } catch (t) {
              console.warn(t);
            }
          });
          let n = () => {
            s(), t.push(e(document));
          };
          return (
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? n()
              : t.push(
                  tt(
                    "load",
                    () => {
                      a(tW({ type: u.Load, data: {} })), n();
                    },
                    window
                  )
                ),
            () => {
              t.forEach(t => t());
            }
          );
        } catch (t) {
          console.warn(t);
        }
      }
      function tZ(t) {
        return t > 9999999999 ? t : 1e3 * t;
      }
      (tq.addCustomEvent = (t, e) => {
        if (!a) throw Error("please add custom event after start recording");
        a(tW({ type: u.Custom, data: { tag: t, payload: e } }));
      }),
        (tq.freezePage = () => {
          tS.forEach(t => t.freeze());
        }),
        (tq.takeFullSnapshot = t => {
          if (!s)
            throw Error("please take full snapshot after start recording");
          s(t);
        }),
        (tq.mirror = tj);
      function tV(t, e) {
        "sentry.transaction" !== e.category &&
          (["ui.click", "ui.input"].includes(e.category)
            ? t.triggerUserActivity()
            : t.checkAndHandleExpiredSession(),
          t.addUpdate(
            () => (
              t.throttledAddEvent({
                type: u.Custom,
                timestamp: 1e3 * (e.timestamp || 0),
                data: {
                  tag: "breadcrumb",
                  payload: (0, k.normalize)(e, 10, 1e3),
                },
              }),
              "console" === e.category
            )
          ));
      }
      function tK(t) {
        let e = tJ(t);
        return (e && e instanceof Element && e.closest("button,a")) || e;
      }
      function tJ(t) {
        return (function (t) {
          return "object" == typeof t && !!t && "target" in t;
        })(t)
          ? t.target
          : t;
      }
      class tX {
        __init() {
          this._lastMutation = 0;
        }
        __init2() {
          this._lastScroll = 0;
        }
        __init3() {
          this._clicks = [];
        }
        constructor(t, e, n = tV) {
          tX.prototype.__init.call(this),
            tX.prototype.__init2.call(this),
            tX.prototype.__init3.call(this),
            (this._timeout = e.timeout / 1e3),
            (this._threshold = e.threshold / 1e3),
            (this._scollTimeout = e.scrollTimeout / 1e3),
            (this._replay = t),
            (this._ignoreSelector = e.ignoreSelector),
            (this._addBreadcrumbEvent = n);
        }
        addListeners() {
          var t;
          let e = () => {
            this._lastScroll = t0();
          };
          let n =
              ((t = () => {
                this._lastMutation = t0();
              }),
              !o &&
                ((o = []),
                (function () {
                  (0, k.fill)(x, "open", function (t) {
                    return function () {
                      for (
                        var e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      if (o)
                        try {
                          o.forEach(t => t());
                        } catch (t) {}
                      return t.apply(x, n);
                    };
                  });
                })()),
              o.push(t),
              () => {
                let e = o ? o.indexOf(t) : -1;
                e > -1 && o.splice(e, 1);
              }),
            r = t => {
              if (!t.target) return;
              let e = tK(t);
              e && this._handleMultiClick(e);
            },
            i = new MutationObserver(() => {
              this._lastMutation = t0();
            });
          i.observe(x.document.documentElement, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          }),
            x.addEventListener("scroll", e, { passive: !0 }),
            x.addEventListener("click", r, { passive: !0 }),
            (this._teardown = () => {
              x.removeEventListener("scroll", e),
                x.removeEventListener("click", r),
                n(),
                i.disconnect(),
                (this._clicks = []),
                (this._lastMutation = 0),
                (this._lastScroll = 0);
            });
        }
        removeListeners() {
          this._teardown && this._teardown(),
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
        }
        handleClick(t, e) {
          var n;
          if (
            (function (t, e) {
              return (
                !!(
                  !tQ.includes(t.tagName) ||
                  ("INPUT" === t.tagName &&
                    !["submit", "button"].includes(
                      t.getAttribute("type") || ""
                    )) ||
                  ("A" === t.tagName &&
                    (t.hasAttribute("download") ||
                      (t.hasAttribute("target") &&
                        "_self" !== t.getAttribute("target")))) ||
                  (e && t.matches(e))
                ) || !1
              );
            })(e, this._ignoreSelector) ||
            !(function (t) {
              return !!(
                t.data &&
                "number" == typeof t.data.nodeId &&
                t.timestamp
              );
            })(t)
          )
            return;
          let r = {
            timestamp: (n = t.timestamp) > 9999999999 ? n / 1e3 : n,
            clickBreadcrumb: t,
            clickCount: 0,
            node: e,
          };
          this._clicks.push(r),
            1 === this._clicks.length && this._scheduleCheckClicks();
        }
        _handleMultiClick(t) {
          this._getClicks(t).forEach(t => {
            t.clickCount++;
          });
        }
        _getClicks(t) {
          return this._clicks.filter(e => e.node === t);
        }
        _checkClicks() {
          let t = [],
            e = t0();
          for (let n of (this._clicks.forEach(n => {
            !n.mutationAfter &&
              this._lastMutation &&
              (n.mutationAfter =
                n.timestamp <= this._lastMutation
                  ? this._lastMutation - n.timestamp
                  : void 0),
              !n.scrollAfter &&
                this._lastScroll &&
                (n.scrollAfter =
                  n.timestamp <= this._lastScroll
                    ? this._lastScroll - n.timestamp
                    : void 0),
              n.timestamp + this._timeout <= e && t.push(n);
          }),
          t)) {
            let t = this._clicks.indexOf(n);
            t > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(t, 1));
          }
          this._clicks.length && this._scheduleCheckClicks();
        }
        _generateBreadcrumbs(t) {
          let e = this._replay,
            n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
            r = t.mutationAfter && t.mutationAfter <= this._threshold,
            { clickCount: i, clickBreadcrumb: a } = t;
          if (!n && !r) {
            let n =
                1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
              r = n < 1e3 * this._timeout ? "mutation" : "timeout",
              s = {
                type: "default",
                message: a.message,
                timestamp: a.timestamp,
                category: "ui.slowClickDetected",
                data: {
                  ...a.data,
                  url: x.location.href,
                  route: e.getCurrentRoute(),
                  timeAfterClickMs: n,
                  endReason: r,
                  clickCount: i || 1,
                },
              };
            this._addBreadcrumbEvent(e, s);
            return;
          }
          if (i > 1) {
            let t = {
              type: "default",
              message: a.message,
              timestamp: a.timestamp,
              category: "ui.multiClick",
              data: {
                ...a.data,
                url: x.location.href,
                route: e.getCurrentRoute(),
                clickCount: i,
                metric: !0,
              },
            };
            this._addBreadcrumbEvent(e, t);
          }
        }
        _scheduleCheckClicks() {
          this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
            (this._checkClickTimeout = setTimeout(
              () => this._checkClicks(),
              1e3
            ));
        }
      }
      let tQ = ["A", "BUTTON", "INPUT"];
      function t0() {
        return Date.now() / 1e3;
      }
      function t1(t) {
        return { timestamp: Date.now() / 1e3, type: "default", ...t };
      }
      ((w = _ || (_ = {}))[(w.Document = 0)] = "Document"),
        (w[(w.DocumentType = 1)] = "DocumentType"),
        (w[(w.Element = 2)] = "Element"),
        (w[(w.Text = 3)] = "Text"),
        (w[(w.CDATA = 4)] = "CDATA"),
        (w[(w.Comment = 5)] = "Comment");
      let t2 = new Set([
          "id",
          "class",
          "aria-label",
          "role",
          "name",
          "alt",
          "title",
          "data-test-id",
          "data-testid",
          "disabled",
          "aria-disabled",
        ]),
        t3 = t => e => {
          if (!t.isEnabled()) return;
          let n = (function (t) {
            let { target: e, message: n } = (function (t) {
              let e;
              let n = "click" === t.name,
                r = null;
              try {
                (r = n ? tK(t.event) : tJ(t.event)),
                  (e =
                    (0, k.htmlTreeAsString)(r, { maxStringLength: 200 }) ||
                    "<unknown>");
              } catch (t) {
                e = "<unknown>";
              }
              return { target: r, message: e };
            })(t);
            return t1({ category: `ui.${t.name}`, ...t5(e, n) });
          })(e);
          if (!n) return;
          let r = "click" === e.name,
            i = r && e.event;
          r &&
            t.clickDetector &&
            i &&
            !i.altKey &&
            !i.metaKey &&
            !i.ctrlKey &&
            !i.shiftKey &&
            !(function (t, e, n) {
              t.handleClick(e, n);
            })(t.clickDetector, n, tK(e.event)),
            tV(t, n);
        };
      function t5(t, e) {
        let n =
          t &&
          (function (t) {
            return "__sn" in t;
          })(t) &&
          t.__sn.type === _.Element
            ? t.__sn
            : null;
        return {
          message: e,
          data: n
            ? {
                nodeId: n.id,
                node: {
                  id: n.id,
                  tagName: n.tagName,
                  textContent: t
                    ? Array.from(t.childNodes)
                        .map(
                          t =>
                            "__sn" in t &&
                            t.__sn.type === _.Text &&
                            t.__sn.textContent
                        )
                        .filter(Boolean)
                        .map(t => t.trim())
                        .join("")
                    : "",
                  attributes: (function (t) {
                    let e = {};
                    for (let n in t)
                      if (t2.has(n)) {
                        let r = n;
                        ("data-testid" === n || "data-test-id" === n) &&
                          (r = "testId"),
                          (e[r] = t[n]);
                      }
                    return e;
                  })(n.attributes),
                },
              }
            : {},
        };
      }
      let t6 = ["name", "type", "startTime", "transferSize", "duration"];
      function t4(t) {
        return function (e) {
          return t6.every(n => t[n] === e[n]);
        };
      }
      let t8 = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
      class t9 extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of 20000000.");
        }
      }
      class t7 {
        __init() {
          this._totalSize = 0;
        }
        constructor() {
          t7.prototype.__init.call(this), (this.events = []);
        }
        get hasEvents() {
          return this.events.length > 0;
        }
        get type() {
          return "sync";
        }
        destroy() {
          this.events = [];
        }
        async addEvent(t) {
          let e = JSON.stringify(t).length;
          if (((this._totalSize += e), this._totalSize > 2e7)) throw new t9();
          this.events.push(t);
        }
        finish() {
          return new Promise(t => {
            let e = this.events;
            this.clear(), t(JSON.stringify(e));
          });
        }
        clear() {
          (this.events = []), (this._totalSize = 0);
        }
        getEarliestTimestamp() {
          let t = this.events.map(t => t.timestamp).sort()[0];
          return t ? tZ(t) : null;
        }
      }
      class et {
        constructor(t) {
          (this._worker = t), (this._id = 0);
        }
        ensureReady() {
          return this._ensureReadyPromise
            ? this._ensureReadyPromise
            : ((this._ensureReadyPromise = new Promise((t, e) => {
                this._worker.addEventListener(
                  "message",
                  n => {
                    let { data: r } = n;
                    r.success ? t() : e();
                  },
                  { once: !0 }
                ),
                  this._worker.addEventListener(
                    "error",
                    t => {
                      e(t);
                    },
                    { once: !0 }
                  );
              })),
              this._ensureReadyPromise);
        }
        destroy() {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            k.logger.log("[Replay] Destroying compression worker"),
            this._worker.terminate();
        }
        postMessage(t, e) {
          let n = this._getAndIncrementId();
          return new Promise((r, i) => {
            let a = e => {
              let { data: s } = e;
              if (s.method === t) {
                if (s.id === n) {
                  if (
                    (this._worker.removeEventListener("message", a), !s.success)
                  ) {
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      k.logger.error("[Replay]", s.response),
                      i(Error("Error in compression worker"));
                    return;
                  }
                  r(s.response);
                }
              }
            };
            this._worker.addEventListener("message", a),
              this._worker.postMessage({ id: n, method: t, arg: e });
          });
        }
        _getAndIncrementId() {
          return this._id++;
        }
      }
      class ee {
        __init() {
          this._totalSize = 0;
        }
        constructor(t) {
          ee.prototype.__init.call(this),
            (this._worker = new et(t)),
            (this._earliestTimestamp = null);
        }
        get hasEvents() {
          return !!this._earliestTimestamp;
        }
        get type() {
          return "worker";
        }
        ensureReady() {
          return this._worker.ensureReady();
        }
        destroy() {
          this._worker.destroy();
        }
        addEvent(t) {
          let e = tZ(t.timestamp);
          (!this._earliestTimestamp || e < this._earliestTimestamp) &&
            (this._earliestTimestamp = e);
          let n = JSON.stringify(t);
          return ((this._totalSize += n.length), this._totalSize > 2e7)
            ? Promise.reject(new t9())
            : this._sendEventToWorker(n);
        }
        finish() {
          return this._finishRequest();
        }
        clear() {
          (this._earliestTimestamp = null),
            (this._totalSize = 0),
            this._worker.postMessage("clear");
        }
        getEarliestTimestamp() {
          return this._earliestTimestamp;
        }
        _sendEventToWorker(t) {
          return this._worker.postMessage("addEvent", t);
        }
        async _finishRequest() {
          let t = await this._worker.postMessage("finish");
          return (this._earliestTimestamp = null), (this._totalSize = 0), t;
        }
      }
      class en {
        constructor(t) {
          (this._fallback = new t7()),
            (this._compression = new ee(t)),
            (this._used = this._fallback),
            (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
        }
        get type() {
          return this._used.type;
        }
        get hasEvents() {
          return this._used.hasEvents;
        }
        destroy() {
          this._fallback.destroy(), this._compression.destroy();
        }
        clear() {
          return this._used.clear();
        }
        getEarliestTimestamp() {
          return this._used.getEarliestTimestamp();
        }
        addEvent(t) {
          return this._used.addEvent(t);
        }
        async finish() {
          return await this.ensureWorkerIsLoaded(), this._used.finish();
        }
        ensureWorkerIsLoaded() {
          return this._ensureWorkerIsLoadedPromise;
        }
        async _ensureWorkerIsLoaded() {
          try {
            await this._compression.ensureReady();
          } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              k.logger.log(
                "[Replay] Failed to load the compression worker, falling back to simple buffer"
              );
            return;
          }
          await this._switchToCompressionWorker();
        }
        async _switchToCompressionWorker() {
          let { events: t } = this._fallback,
            e = [];
          for (let n of t) e.push(this._compression.addEvent(n));
          this._used = this._compression;
          try {
            await Promise.all(e);
          } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              k.logger.warn(
                "[Replay] Failed to add events when switching buffers.",
                t
              );
          }
        }
      }
      function er() {
        try {
          return "sessionStorage" in x && !!x.sessionStorage;
        } catch (t) {
          return !1;
        }
      }
      function ei(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : +new Date();
        return (
          null === t || void 0 === e || !!(e < 0) || (0 !== e && t + e <= n)
        );
      }
      function ea(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : +new Date();
        return (
          ei(t.started, e.maxSessionLife, n) ||
          ei(t.lastActivity, e.sessionIdleExpire, n)
        );
      }
      function es(t) {
        return void 0 !== t && Math.random() < t;
      }
      function eo(t) {
        if (er())
          try {
            x.sessionStorage.setItem(D, JSON.stringify(t));
          } catch (t) {}
      }
      function el(t) {
        let e = Date.now(),
          n = t.id || (0, k.uuid4)(),
          r = t.started || e,
          i = t.lastActivity || e,
          a = t.segmentId || 0;
        return {
          id: n,
          started: r,
          lastActivity: i,
          segmentId: a,
          sampled: t.sampled,
          shouldRefresh: !0,
        };
      }
      function eu(t) {
        let {
            timeouts: e,
            currentSession: n,
            stickySession: r,
            sessionSampleRate: i,
            allowBuffering: a,
          } = t,
          s =
            n ||
            (r &&
              (function () {
                if (!er()) return null;
                try {
                  let t = x.sessionStorage.getItem(D);
                  if (!t) return null;
                  let e = JSON.parse(t);
                  return el(e);
                } catch (t) {
                  return null;
                }
              })());
        if (s) {
          if (!ea(s, e) || (a && s.shouldRefresh))
            return { type: "saved", session: s };
          if (!s.shouldRefresh)
            return { type: "new", session: el({ sampled: !1 }) };
          else
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              k.logger.log("[Replay] Session has expired");
        }
        return {
          type: "new",
          session: (function (t) {
            var e, n;
            let {
              sessionSampleRate: r,
              allowBuffering: i,
              stickySession: a = !1,
            } = t;
            let s = el({
              sampled: ((e = r), (n = i), es(e) ? "session" : !!n && "buffer"),
            });
            return (
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                k.logger.log(`[Replay] Creating new session: ${s.id}`),
              a && eo(s),
              s
            );
          })({ stickySession: r, sessionSampleRate: i, allowBuffering: a }),
        };
      }
      async function ec(t, e, n) {
        if (
          !t.eventBuffer ||
          t.isPaused() ||
          tZ(e.timestamp) + t.timeouts.sessionIdlePause < Date.now()
        )
          return null;
        try {
          n && t.eventBuffer.clear();
          let r = t.getOptions(),
            i = (function (t, e) {
              try {
                if ("function" == typeof e && t.type === u.Custom) return e(t);
              } catch (t) {
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    k.logger.error(
                      "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                      t
                    ),
                  null
                );
              }
              return t;
            })(e, r.beforeAddRecordingEvent);
          if (!i) return;
          return await t.eventBuffer.addEvent(i);
        } catch (r) {
          let e = r && r instanceof t9 ? "addEventSizeExceeded" : "addEvent";
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            k.logger.error(r),
            await t.stop(e);
          let n = (0, T.getCurrentHub)().getClient();
          n && n.recordDroppedEvent("internal_sdk_error", "replay");
        }
      }
      function ed(t) {
        return !t.type;
      }
      function eh(t) {
        return "transaction" === t.type;
      }
      function ef(t) {
        let e = (function () {
          let t = (0, T.getCurrentHub)().getClient();
          if (!t) return !1;
          let e = t.getTransport();
          return !!e && (e.send.__sentry__baseTransport__ || !1);
        })();
        return (n, r) => {
          if (n.type && !eh(n)) return;
          let i = r && r.statusCode;
          if (!e || (!!i && !(i < 200) && !(i >= 300))) {
            if (
              eh(n) &&
              n.contexts &&
              n.contexts.trace &&
              n.contexts.trace.trace_id
            ) {
              t.getContext().traceIds.add(n.contexts.trace.trace_id);
              return;
            }
            if (!n.type)
              n.event_id && t.getContext().errorIds.add(n.event_id),
                "buffer" === t.recordingMode &&
                  n.tags &&
                  n.tags.replayId &&
                  setTimeout(() => {
                    t.sendBufferedReplayOrFlush();
                  });
          }
        };
      }
      function ep(t, e) {
        return e.map(e => {
          let { type: n, start: r, end: i, name: a, data: s } = e,
            o = t.throttledAddEvent({
              type: u.Custom,
              timestamp: r,
              data: {
                tag: "performanceSpan",
                payload: {
                  op: n,
                  description: a,
                  startTimestamp: r,
                  endTimestamp: i,
                  data: s,
                },
              },
            });
          return "string" == typeof o ? Promise.resolve(null) : o;
        });
      }
      function e_(t, e) {
        var n, r;
        if (!!t.isEnabled() && null !== e) {
          if (
            ((n = t),
            (r = e.name),
            !(
              (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) ||
                !n.getOptions()._experiments.traceInternals) &&
              (function (t) {
                let e = (0, T.getCurrentHub)().getClient(),
                  n = e && e.getDsn();
                return !!n && t.includes(n.host);
              })(r)
            ))
          )
            t.addUpdate(() => (ep(t, [e]), !0));
        }
      }
      let eg = ["true", "false", "null"];
      function em(t) {
        let e = (function (t) {
          let e = [];
          for (let n = 0; n < t.length; n++)
            (function (t, e, n) {
              let r = t[t.length - 1],
                i = e[n];
              if (!/\s/.test(i)) {
                if (
                  '"' === i &&
                  !(function t(e, n) {
                    return "\\" === e[n - 1] && !t(e, n - 1);
                  })(e, n)
                ) {
                  (function (t, e) {
                    if (14 === e) {
                      t.pop(), t.push(15);
                      return;
                    }
                    if (22 === e) {
                      t.pop(), t.push(23);
                      return;
                    }
                    if (13 === e) {
                      t.push(14);
                      return;
                    }
                    if (21 === e) {
                      t.push(22);
                      return;
                    }
                    if (10 === e) {
                      t.push(12);
                      return;
                    }
                    if (12 === e) {
                      t.pop(), t.push(11);
                    }
                  })(t, r);
                  return;
                }
                switch (i) {
                  case "{":
                    (function (t, e) {
                      if (!e || 13 === e) {
                        t.push(10);
                        return;
                      }
                      if ((21 === e && t.push(10), 20 === e)) {
                        t.push(10);
                      }
                    })(t, r);
                    break;
                  case "[":
                    (function (t, e) {
                      if (!e || 13 === e) {
                        t.push(20), t.push(21);
                        return;
                      }
                      if ((21 === e && (t.push(20), t.push(21)), 20 === e)) {
                        t.push(20), t.push(21);
                      }
                    })(t, r);
                    break;
                  case ":":
                    (function (t, e) {
                      11 === e && (t.pop(), t.push(13));
                    })(t, r);
                    break;
                  case ",":
                    (function (t, e) {
                      if (13 === e) {
                        t.pop();
                        return;
                      }
                      if (15 === e) {
                        t.pop(), t.pop();
                        return;
                      }
                      if (21 !== e && 23 === e) {
                        t.pop();
                      }
                    })(t, r);
                    break;
                  case "}":
                    (function (t, e) {
                      10 === e && t.pop(),
                        13 === e && (t.pop(), t.pop()),
                        15 === e && (t.pop(), t.pop(), t.pop()),
                        13 === t[t.length - 1] && t.push(15),
                        21 === t[t.length - 1] && t.push(23);
                    })(t, r);
                    break;
                  case "]":
                    (function (t, e) {
                      20 === e && t.pop(),
                        21 === e && (t.pop(), t.pop()),
                        23 === e && (t.pop(), t.pop(), t.pop()),
                        13 === t[t.length - 1] && t.push(15),
                        21 === t[t.length - 1] && t.push(23);
                    })(t, r);
                }
              }
            })(e, t, n);
          return e;
        })(t);
        return (function (t, e) {
          if (!e.length) return t;
          let n = t,
            r = e.length - 1;
          n = (function (t, e) {
            switch (e) {
              case 10:
                return `${t}"~~":"~~"`;
              case 11:
                return `${t}:"~~"`;
              case 12:
                return `${t}~~":"~~"`;
              case 13:
                return (function (t) {
                  let e = t.lastIndexOf(":"),
                    n = t.slice(e + 1);
                  return eg.includes(n.trim())
                    ? `${t},"~~":"~~"`
                    : `${t.slice(0, e + 1)}"~~"`;
                })(t);
              case 14:
              case 22:
                return `${t}~~"`;
              case 15:
                return `${t},"~~":"~~"`;
              case 20:
                return `${t}"~~"`;
              case 21:
                return (function (t) {
                  let e = (function (t) {
                    for (let e = t.length - 1; e >= 0; e--) {
                      let n = t[e];
                      if ("," === n || "[" === n) return e;
                    }
                    return -1;
                  })(t);
                  if (e > -1) {
                    let n = t.slice(e + 1);
                    return eg.includes(n.trim())
                      ? `${t},"~~"`
                      : `${t.slice(0, e + 1)}"~~"`;
                  }
                  return t;
                })(t);
              case 23:
                return `${t},"~~"`;
            }
            return t;
          })(n, e[r]);
          for (let t = r; t >= 0; t--)
            switch (e[t]) {
              case 10:
                n = `${n}}`;
                break;
              case 20:
                n = `${n}]`;
            }
          return n;
        })(t, e);
      }
      function ey(t, e) {
        if (t)
          try {
            if ("string" == typeof t) return e.encode(t).length;
            if (t instanceof URLSearchParams)
              return e.encode(t.toString()).length;
            if (t instanceof FormData) {
              let n = ek(t);
              return e.encode(n).length;
            }
            if (t instanceof Blob) return t.size;
            if (t instanceof ArrayBuffer) return t.byteLength;
          } catch (t) {}
      }
      function ev(t) {
        if (!t) return;
        let e = parseInt(t, 10);
        return isNaN(e) ? void 0 : e;
      }
      function eE(t) {
        return "string" == typeof t
          ? t
          : t instanceof URLSearchParams
            ? t.toString()
            : t instanceof FormData
              ? ek(t)
              : void 0;
      }
      function eb(t, e) {
        if (!e) return null;
        let {
          startTimestamp: n,
          endTimestamp: r,
          url: i,
          method: a,
          statusCode: s,
          request: o,
          response: l,
        } = e;
        return {
          type: t,
          start: n / 1e3,
          end: r / 1e3,
          name: i,
          data: (0, k.dropUndefinedKeys)({
            method: a,
            statusCode: s,
            request: o,
            response: l,
          }),
        };
      }
      function eS(t) {
        return { headers: {}, size: t, _meta: { warnings: ["URL_SKIPPED"] } };
      }
      function ew(t, e, n) {
        if (!e && 0 === Object.keys(t).length) return;
        if (!e) return { headers: t };
        if (!n) return { headers: t, size: e };
        let r = { headers: t, size: e },
          { body: i, warnings: a } = (function (t) {
            if (!t || "string" != typeof t) return { body: t, warnings: [] };
            let e = t.length > 15e4;
            if (
              (function (t) {
                let e = t[0],
                  n = t[t.length - 1];
                return ("[" === e && "]" === n) || ("{" === e && "}" === n);
              })(t)
            )
              try {
                let n = e ? em(t.slice(0, 15e4)) : t;
                return {
                  body: JSON.parse(n),
                  warnings: e ? ["JSON_TRUNCATED"] : [],
                };
              } catch (n) {
                return {
                  body: e ? `${t.slice(0, 15e4)}…` : t,
                  warnings: e
                    ? ["INVALID_JSON", "TEXT_TRUNCATED"]
                    : ["INVALID_JSON"],
                };
              }
            return {
              body: e ? `${t.slice(0, 15e4)}…` : t,
              warnings: e ? ["TEXT_TRUNCATED"] : [],
            };
          })(n);
        return (r.body = i), a.length > 0 && (r._meta = { warnings: a }), r;
      }
      function eT(t, e) {
        return Object.keys(t).reduce((n, r) => {
          let i = r.toLowerCase();
          return e.includes(i) && t[r] && (n[i] = t[r]), n;
        }, {});
      }
      function ek(t) {
        return new URLSearchParams(t).toString();
      }
      function eR(t, e) {
        let n = (function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : x.document.baseURI;
          if (
            t.startsWith("http://") ||
            t.startsWith("https://") ||
            t.startsWith(x.location.origin)
          )
            return t;
          let n = new URL(t, e);
          if (n.origin !== new URL(e).origin) return t;
          let r = n.href;
          return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
        })(t);
        return (0, k.stringMatchesSomePattern)(n, e);
      }
      async function ex(t, e, n) {
        try {
          let r = await eD(t, e, n),
            i = eb("resource.fetch", r);
          e_(n.replay, i);
        } catch (t) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            k.logger.error("[Replay] Failed to capture fetch breadcrumb", t);
        }
      }
      async function eD(t, e, n) {
        let { startTimestamp: r, endTimestamp: i } = e,
          {
            url: a,
            method: s,
            status_code: o = 0,
            request_body_size: l,
            response_body_size: u,
          } = t.data,
          c =
            eR(a, n.networkDetailAllowUrls) && !eR(a, n.networkDetailDenyUrls),
          d = c
            ? (function (t, e, n) {
                let { networkCaptureBodies: r, networkRequestHeaders: i } = t,
                  a = (function (t, e) {
                    return 1 === t.length && "string" != typeof t[0]
                      ? eA(t[0], e)
                      : 2 === t.length
                        ? eA(t[1], e)
                        : {};
                  })(e, i);
                return r ? ew(a, n, eE(eC(e))) : ew(a, n, void 0);
              })(n, e.input, l)
            : eS(l);
        return {
          startTimestamp: r,
          endTimestamp: i,
          url: a,
          method: s,
          statusCode: o,
          request: d,
          response: await eN(c, n, e.response, u),
        };
      }
      async function eN(t, e, n, r) {
        let {
          networkCaptureBodies: i,
          textEncoder: a,
          networkResponseHeaders: s,
        } = e;
        if (!t && void 0 !== r) return eS(r);
        let o = eO(n.headers, s);
        if (!i && void 0 !== r) return ew(o, r, void 0);
        try {
          let e = n.clone(),
            s = await eI(e),
            l = s && s.length && void 0 === r ? ey(s, a) : r;
          if (!t) return eS(l);
          if (i) return ew(o, l, s);
          return ew(o, l, void 0);
        } catch (t) {
          return ew(o, r, void 0);
        }
      }
      async function eI(t) {
        try {
          return await t.text();
        } catch (t) {
          return;
        }
      }
      function eC() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (2 === t.length && "object" == typeof t[1]) return t[1].body;
      }
      function eO(t, e) {
        let n = {};
        return (
          e.forEach(e => {
            t.get(e) && (n[e] = t.get(e));
          }),
          n
        );
      }
      function eA(t, e) {
        if (!t) return {};
        let n = t.headers;
        return n
          ? n instanceof Headers
            ? eO(n, e)
            : Array.isArray(n)
              ? {}
              : eT(n, e)
          : {};
      }
      async function eU(t, e, n) {
        try {
          let r = (function (t, e, n) {
              let { startTimestamp: r, endTimestamp: i, input: a, xhr: s } = e,
                {
                  url: o,
                  method: l,
                  status_code: u = 0,
                  request_body_size: c,
                  response_body_size: d,
                } = t.data;
              if (!o) return null;
              if (
                !eR(o, n.networkDetailAllowUrls) ||
                eR(o, n.networkDetailDenyUrls)
              ) {
                let t = eS(c);
                return {
                  startTimestamp: r,
                  endTimestamp: i,
                  url: o,
                  method: l,
                  statusCode: u,
                  request: t,
                  response: eS(d),
                };
              }
              let h = s[k.SENTRY_XHR_DATA_KEY],
                f = h ? eT(h.request_headers, n.networkRequestHeaders) : {},
                p = eT(
                  (function (t) {
                    let e = t.getAllResponseHeaders();
                    return e
                      ? e.split("\r\n").reduce((t, e) => {
                          let [n, r] = e.split(": ");
                          return (t[n.toLowerCase()] = r), t;
                        }, {})
                      : {};
                  })(s),
                  n.networkResponseHeaders
                ),
                _ = ew(f, c, n.networkCaptureBodies ? eE(a) : void 0);
              return {
                startTimestamp: r,
                endTimestamp: i,
                url: o,
                method: l,
                statusCode: u,
                request: _,
                response: ew(
                  p,
                  d,
                  n.networkCaptureBodies ? e.xhr.responseText : void 0
                ),
              };
            })(t, e, n),
            i = eb("resource.xhr", r);
          e_(n.replay, i);
        } catch (t) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            k.logger.error("[Replay] Failed to capture fetch breadcrumb", t);
        }
      }
      let eB = null,
        eL = t => e => {
          if (!t.isEnabled()) return;
          let n = (function (t) {
            let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
            if (eB === e || !e) return null;
            return ((eB = e),
            !e.category ||
              ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
                e.category
              ) ||
              e.category.startsWith("ui."))
              ? null
              : "console" === e.category
                ? (function (t) {
                    let e = t.data && t.data.arguments;
                    if (!Array.isArray(e) || 0 === e.length) return t1(t);
                    let n = !1,
                      r = e.map(t => {
                        if (!t) return t;
                        if ("string" == typeof t)
                          return t.length > 5e3
                            ? ((n = !0), `${t.slice(0, 5e3)}…`)
                            : t;
                        if ("object" == typeof t)
                          try {
                            let e = (0, k.normalize)(t, 7),
                              r = JSON.stringify(e);
                            if (r.length > 5e3) {
                              let t = em(r.slice(0, 5e3)),
                                e = JSON.parse(t);
                              return (n = !0), e;
                            }
                            return e;
                          } catch (t) {}
                        return t;
                      });
                    return t1({
                      ...t,
                      data: {
                        ...t.data,
                        arguments: r,
                        ...(n
                          ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } }
                          : {}),
                      },
                    });
                  })(e)
                : t1(e);
          })(e);
          n && tV(t, n);
        };
      function eM(t) {
        return !!(t && t.on);
      }
      async function eP(t) {
        try {
          return Promise.all(
            ep(t, [
              (function (t) {
                let {
                    jsHeapSizeLimit: e,
                    totalJSHeapSize: n,
                    usedJSHeapSize: r,
                  } = t,
                  i = Date.now() / 1e3;
                return {
                  type: "memory",
                  name: "memory",
                  start: i,
                  end: i,
                  data: {
                    memory: {
                      jsHeapSizeLimit: e,
                      totalJSHeapSize: n,
                      usedJSHeapSize: r,
                    },
                  },
                };
              })(x.performance.memory),
            ])
          );
        } catch (t) {
          return [];
        }
      }
      let eG = {
        resource: function (t) {
          let {
            entryType: e,
            initiatorType: n,
            name: r,
            responseEnd: i,
            startTime: a,
            decodedBodySize: s,
            encodedBodySize: o,
            responseStatus: l,
            transferSize: u,
          } = t;
          return ["fetch", "xmlhttprequest"].includes(n)
            ? null
            : {
                type: `${e}.${n}`,
                start: eF(a),
                end: eF(i),
                name: r,
                data: {
                  size: u,
                  statusCode: l,
                  decodedBodySize: s,
                  encodedBodySize: o,
                },
              };
        },
        paint: function (t) {
          let { duration: e, entryType: n, name: r, startTime: i } = t,
            a = eF(i);
          return { type: n, name: r, start: a, end: a + e, data: void 0 };
        },
        navigation: function (t) {
          let {
            entryType: e,
            name: n,
            decodedBodySize: r,
            duration: i,
            domComplete: a,
            encodedBodySize: s,
            domContentLoadedEventStart: o,
            domContentLoadedEventEnd: l,
            domInteractive: u,
            loadEventStart: c,
            loadEventEnd: d,
            redirectCount: h,
            startTime: f,
            transferSize: p,
            type: _,
          } = t;
          return 0 === i
            ? null
            : {
                type: `${e}.${_}`,
                start: eF(f),
                end: eF(a),
                name: n,
                data: {
                  size: p,
                  decodedBodySize: r,
                  encodedBodySize: s,
                  duration: i,
                  domInteractive: u,
                  domContentLoadedEventStart: o,
                  domContentLoadedEventEnd: l,
                  loadEventStart: c,
                  loadEventEnd: d,
                  domComplete: a,
                  redirectCount: h,
                },
              };
        },
        "largest-contentful-paint": function (t) {
          let { entryType: e, startTime: n, size: r } = t,
            i = 0;
          if (x.performance) {
            let t = x.performance.getEntriesByType("navigation")[0];
            i = (t && t.activationStart) || 0;
          }
          let a = Math.max(n - i, 0),
            s = eF(i) + a / 1e3;
          return {
            type: e,
            name: e,
            start: s,
            end: s,
            data: { value: a, size: r, nodeId: tq.mirror.getId(t.element) },
          };
        },
      };
      function eY(t) {
        return void 0 === eG[t.entryType] ? null : eG[t.entryType](t);
      }
      function eF(t) {
        return (
          ((k.browserPerformanceTimeOrigin || x.performance.timeOrigin) + t) /
          1e3
        );
      }
      async function ez(t) {
        let { client: e, scope: n, replayId: r, event: i } = t,
          a =
            "object" != typeof e._integrations ||
            null === e._integrations ||
            Array.isArray(e._integrations)
              ? void 0
              : Object.keys(e._integrations),
          s = await (0, T.prepareEvent)(
            e.getOptions(),
            i,
            { event_id: r, integrations: a },
            n
          );
        if (!s) return null;
        s.platform = s.platform || "javascript";
        let o = e.getSdkMetadata && e.getSdkMetadata(),
          { name: l, version: u } = (o && o.sdk) || {};
        return (
          (s.sdk = {
            ...s.sdk,
            name: l || "sentry.javascript.unknown",
            version: u || "0.0.0",
          }),
          s
        );
      }
      async function eH(t) {
        var e, n, r, i;
        let a,
          {
            recordingData: s,
            replayId: o,
            segmentId: l,
            eventContext: u,
            timestamp: c,
            session: d,
          } = t,
          h = (function (t) {
            let e,
              { recordingData: n, headers: r } = t,
              i = `${JSON.stringify(r)}
`;
            if ("string" == typeof n) e = `${i}${n}`;
            else {
              let t = new TextEncoder().encode(i);
              (e = new Uint8Array(t.length + n.length)).set(t),
                e.set(n, t.length);
            }
            return e;
          })({ recordingData: s, headers: { segment_id: l } }),
          { urls: f, errorIds: p, traceIds: _, initialTimestamp: g } = u,
          m = (0, T.getCurrentHub)(),
          y = m.getClient(),
          v = m.getScope(),
          E = y && y.getTransport(),
          b = y && y.getDsn();
        if (!y || !E || !b || !d.sampled) return;
        let S = {
            type: "replay_event",
            replay_start_timestamp: g / 1e3,
            timestamp: c / 1e3,
            error_ids: p,
            trace_ids: _,
            urls: f,
            replay_id: o,
            segment_id: l,
            replay_type: d.sampled,
          },
          w = await ez({ scope: v, client: y, replayId: o, event: S });
        if (!w) {
          y.recordDroppedEvent("event_processor", "replay", S),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              k.logger.log(
                "An event processor returned `null`, will not send event."
              );
          return;
        }
        delete w.sdkProcessingMetadata;
        let R =
          ((e = w),
          (n = h),
          (r = b),
          (i = y.getOptions().tunnel),
          (0, k.createEnvelope)(
            (0, k.createEventEnvelopeHeaders)(
              e,
              (0, k.getSdkMetadataForEnvelopeHeader)(e),
              i,
              r
            ),
            [
              [{ type: "replay_event" }, e],
              [
                {
                  type: "replay_recording",
                  length:
                    "string" == typeof n
                      ? new TextEncoder().encode(n).length
                      : n.length,
                },
                n,
              ],
            ]
          ));
        try {
          a = await E.send(R);
        } catch (e) {
          let t = Error(N);
          try {
            t.cause = e;
          } catch (t) {}
          throw t;
        }
        if (!a) return a;
        if (
          "number" == typeof a.statusCode &&
          (a.statusCode < 200 || a.statusCode >= 300)
        )
          throw new e$(a.statusCode);
        return a;
      }
      class e$ extends Error {
        constructor(t) {
          super(`Transport returned status code ${t}`);
        }
      }
      async function eW(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { count: 0, interval: 5e3 },
          { recordingData: n, options: r } = t;
        if (n.length)
          try {
            return await eH(t), !0;
          } catch (n) {
            if (n instanceof e$) throw n;
            if (
              ((0, T.setContext)("Replays", { _retryCount: e.count }),
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                r._experiments &&
                r._experiments.captureExceptions &&
                (0, T.captureException)(n),
              e.count >= 3)
            ) {
              let t = Error(`${N} - max retries exceeded`);
              try {
                t.cause = n;
              } catch (t) {}
              throw t;
            }
            return (
              (e.interval *= ++e.count),
              new Promise((n, r) => {
                setTimeout(async () => {
                  try {
                    await eW(t, e), n(!0);
                  } catch (t) {
                    r(t);
                  }
                }, e.interval);
              })
            );
          }
      }
      let ej = "__THROTTLED";
      class eq {
        __init() {
          this.eventBuffer = null;
        }
        __init2() {
          this.performanceEvents = [];
        }
        __init3() {
          this.recordingMode = "session";
        }
        __init4() {
          this.timeouts = {
            sessionIdlePause: 3e5,
            sessionIdleExpire: 9e5,
            maxSessionLife: 36e5,
          };
        }
        __init5() {
          this._performanceObserver = null;
        }
        __init6() {
          this._flushLock = null;
        }
        __init7() {
          this._lastActivity = Date.now();
        }
        __init8() {
          this._isEnabled = !1;
        }
        __init9() {
          this._isPaused = !1;
        }
        __init10() {
          this._hasInitializedCoreListeners = !1;
        }
        __init11() {
          this._stopRecording = null;
        }
        __init12() {
          this._context = {
            errorIds: new Set(),
            traceIds: new Set(),
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: "",
          };
        }
        constructor({ options: t, recordingOptions: e }) {
          eq.prototype.__init.call(this),
            eq.prototype.__init2.call(this),
            eq.prototype.__init3.call(this),
            eq.prototype.__init4.call(this),
            eq.prototype.__init5.call(this),
            eq.prototype.__init6.call(this),
            eq.prototype.__init7.call(this),
            eq.prototype.__init8.call(this),
            eq.prototype.__init9.call(this),
            eq.prototype.__init10.call(this),
            eq.prototype.__init11.call(this),
            eq.prototype.__init12.call(this),
            eq.prototype.__init13.call(this),
            eq.prototype.__init14.call(this),
            eq.prototype.__init15.call(this),
            eq.prototype.__init16.call(this),
            eq.prototype.__init17.call(this),
            eq.prototype.__init18.call(this),
            (this._recordingOptions = e),
            (this._options = t),
            (this._debouncedFlush = (function (t, e, n) {
              let r, i, a;
              let s = n && n.maxWait ? Math.max(n.maxWait, e) : 0;
              function o() {
                return l(), (r = t());
              }
              function l() {
                void 0 !== i && clearTimeout(i),
                  void 0 !== a && clearTimeout(a),
                  (i = a = void 0);
              }
              function u() {
                return (
                  i && clearTimeout(i),
                  (i = setTimeout(o, e)),
                  s && void 0 === a && (a = setTimeout(o, s)),
                  r
                );
              }
              return (
                (u.cancel = l),
                (u.flush = function () {
                  return void 0 !== i || void 0 !== a ? o() : r;
                }),
                u
              );
            })(() => this._flush(), this._options.flushMinDelay, {
              maxWait: this._options.flushMaxDelay,
            })),
            (this._throttledAddEvent = (function (t, e, n) {
              let r = new Map(),
                i = t => {
                  let e = t - 5;
                  r.forEach((t, n) => {
                    n < e && r.delete(n);
                  });
                },
                a = () => [...r.values()].reduce((t, e) => t + e, 0),
                s = !1;
              return function () {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++)
                  n[o] = arguments[o];
                let l = Math.floor(Date.now() / 1e3);
                if ((i(l), a() >= 300)) {
                  let t = s;
                  return (s = !0), t ? "__SKIPPED" : ej;
                }
                s = !1;
                let u = r.get(l) || 0;
                return r.set(l, u + 1), t(...n);
              };
            })((t, e) => ec(this, t, e), 300, 5));
          let { slowClickTimeout: n, slowClickIgnoreSelectors: r } =
              this.getOptions(),
            i = n
              ? {
                  threshold: Math.min(3e3, n),
                  timeout: n,
                  scrollTimeout: 300,
                  ignoreSelector: r ? r.join(",") : "",
                }
              : void 0;
          i && (this.clickDetector = new tX(this, i));
        }
        getContext() {
          return this._context;
        }
        isEnabled() {
          return this._isEnabled;
        }
        isPaused() {
          return this._isPaused;
        }
        getOptions() {
          return this._options;
        }
        initializeSampling() {
          let { errorSampleRate: t, sessionSampleRate: e } = this._options;
          if (!(t <= 0) || !(e <= 0)) {
            if (this._loadAndCheckSession()) {
              if (!this.session) {
                this._handleException(
                  Error("Unable to initialize and create session")
                );
                return;
              }
              this.session.sampled &&
                "session" !== this.session.sampled &&
                (this.recordingMode = "buffer"),
                this._initializeRecording();
            }
          }
        }
        start() {
          if (this._isEnabled && "session" === this.recordingMode)
            throw Error("Replay recording is already in progress");
          if (this._isEnabled && "buffer" === this.recordingMode)
            throw Error(
              "Replay buffering is in progress, call `flush()` to save the replay"
            );
          let t = this.session && this.session.id,
            { session: e } = eu({
              timeouts: this.timeouts,
              stickySession: !!this._options.stickySession,
              currentSession: this.session,
              sessionSampleRate: 1,
              allowBuffering: !1,
            });
          (e.previousSessionId = t),
            (this.session = e),
            this._initializeRecording();
        }
        startBuffering() {
          if (this._isEnabled)
            throw Error("Replay recording is already in progress");
          let t = this.session && this.session.id,
            { session: e } = eu({
              timeouts: this.timeouts,
              stickySession: !!this._options.stickySession,
              currentSession: this.session,
              sessionSampleRate: 0,
              allowBuffering: !0,
            });
          (e.previousSessionId = t),
            (this.session = e),
            (this.recordingMode = "buffer"),
            this._initializeRecording();
        }
        startRecording() {
          try {
            var t;
            let e;
            this._stopRecording = tq({
              ...this._recordingOptions,
              ...("buffer" === this.recordingMode && { checkoutEveryNms: 6e4 }),
              emit:
                ((t = this),
                (e = !1),
                (n, r) => {
                  if (!t.checkAndHandleExpiredSession()) {
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      k.logger.warn(
                        "[Replay] Received replay event after session expired."
                      );
                    return;
                  }
                  let i = r || !e;
                  (e = !0),
                    t.addUpdate(() => {
                      if (
                        ("buffer" === t.recordingMode &&
                          i &&
                          t.setInitialState(),
                        ec(t, n, i),
                        !i)
                      )
                        return !1;
                      if (
                        ((function (t, e) {
                          e && t.session && 0 === t.session.segmentId
                            ? ec(
                                t,
                                (function (t) {
                                  let e = t.getOptions();
                                  return {
                                    type: u.Custom,
                                    timestamp: Date.now(),
                                    data: {
                                      tag: "options",
                                      payload: {
                                        sessionSampleRate: e.sessionSampleRate,
                                        errorSampleRate: e.errorSampleRate,
                                        useCompressionOption: e.useCompression,
                                        blockAllMedia: e.blockAllMedia,
                                        maskAllText: e.maskAllText,
                                        maskAllInputs: e.maskAllInputs,
                                        useCompression:
                                          !!t.eventBuffer &&
                                          "worker" === t.eventBuffer.type,
                                        networkDetailHasUrls:
                                          e.networkDetailAllowUrls.length > 0,
                                        networkCaptureBodies:
                                          e.networkCaptureBodies,
                                        networkRequestHasHeaders:
                                          e.networkRequestHeaders.length > 0,
                                        networkResponseHasHeaders:
                                          e.networkResponseHeaders.length > 0,
                                      },
                                    },
                                  };
                                })(t),
                                !1
                              )
                            : Promise.resolve(null);
                        })(t, i),
                        t.session && t.session.previousSessionId)
                      )
                        return !0;
                      if (
                        "buffer" === t.recordingMode &&
                        t.session &&
                        t.eventBuffer
                      ) {
                        let e = t.eventBuffer.getEarliestTimestamp();
                        if (e) {
                          let n = t.getOptions()._experiments.traceInternals
                            ? console.info
                            : k.logger.info;
                          ("undefined" == typeof __SENTRY_DEBUG__ ||
                            __SENTRY_DEBUG__) &&
                            n(
                              `[Replay] Updating session start time to earliest event in buffer at ${e}`
                            ),
                            (t.session.started = e),
                            t.getOptions().stickySession && eo(t.session);
                        }
                      }
                      return "session" === t.recordingMode && t.flush(), !0;
                    });
                }),
              onMutation: this._onMutationHandler,
            });
          } catch (t) {
            this._handleException(t);
          }
        }
        stopRecording() {
          try {
            return (
              this._stopRecording &&
                (this._stopRecording(), (this._stopRecording = void 0)),
              !0
            );
          } catch (t) {
            return this._handleException(t), !1;
          }
        }
        async stop(t) {
          if (this._isEnabled)
            try {
              var e;
              if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                let e = `[Replay] Stopping Replay${t ? ` triggered by ${t}` : ""}`;
                (this.getOptions()._experiments.traceInternals
                  ? console.warn
                  : k.logger.log)(e);
              }
              (this._isEnabled = !1),
                this._removeListeners(),
                this.stopRecording(),
                this._debouncedFlush.cancel(),
                "session" === this.recordingMode &&
                  (await this._flush({ force: !0 })),
                this.eventBuffer && this.eventBuffer.destroy(),
                (this.eventBuffer = null),
                (e = this),
                (function () {
                  if (er())
                    try {
                      x.sessionStorage.removeItem(D);
                    } catch (t) {}
                })(),
                (e.session = void 0);
            } catch (t) {
              this._handleException(t);
            }
        }
        pause() {
          (this._isPaused = !0), this.stopRecording();
        }
        resume() {
          this._loadAndCheckSession() &&
            ((this._isPaused = !1), this.startRecording());
        }
        async sendBufferedReplayOrFlush() {
          let { continueRecording: t = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("session" === this.recordingMode) return this.flushImmediate();
          let e = Date.now(),
            n = this.getOptions()._experiments.traceInternals
              ? console.info
              : k.logger.info;
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            n(`[Replay] Converting buffer to session, starting at ${e}`),
            await this.flushImmediate();
          let r = this.stopRecording();
          t &&
            r &&
            ((this.recordingMode = "session"),
            this.session &&
              ((this.session.shouldRefresh = !1),
              this._updateUserActivity(e),
              this._updateSessionActivity(e),
              (this.session.started = e),
              this._maybeSaveSession()),
            this.startRecording());
        }
        addUpdate(t) {
          let e = t();
          if ("buffer" !== this.recordingMode)
            !0 !== e && this._debouncedFlush();
        }
        triggerUserActivity() {
          if ((this._updateUserActivity(), !this._stopRecording)) {
            if (!this._loadAndCheckSession()) return;
            this.resume();
            return;
          }
          this.checkAndHandleExpiredSession(), this._updateSessionActivity();
        }
        updateUserActivity() {
          this._updateUserActivity(), this._updateSessionActivity();
        }
        conditionalFlush() {
          return "buffer" === this.recordingMode
            ? Promise.resolve()
            : this.flushImmediate();
        }
        flush() {
          return this._debouncedFlush();
        }
        flushImmediate() {
          return this._debouncedFlush(), this._debouncedFlush.flush();
        }
        cancelFlush() {
          this._debouncedFlush.cancel();
        }
        getSessionId() {
          return this.session && this.session.id;
        }
        checkAndHandleExpiredSession() {
          let t = this.getSessionId();
          if (
            this._lastActivity &&
            ei(this._lastActivity, this.timeouts.sessionIdlePause) &&
            this.session &&
            "session" === this.session.sampled
          ) {
            this.pause();
            return;
          }
          return this._loadAndCheckSession()
            ? t === this.getSessionId() || (this._triggerFullSnapshot(), !1)
            : void 0;
        }
        setInitialState() {
          let t = `${x.location.pathname}${x.location.hash}${x.location.search}`,
            e = `${x.location.origin}${t}`;
          (this.performanceEvents = []),
            this._clearContext(),
            (this._context.initialUrl = e),
            (this._context.initialTimestamp = Date.now()),
            this._context.urls.push(e);
        }
        throttledAddEvent(t, e) {
          let n = this._throttledAddEvent(t, e);
          if (n === ej) {
            let t = t1({ category: "replay.throttled" });
            this.addUpdate(() => {
              ec(this, {
                type: u.Custom,
                timestamp: t.timestamp || 0,
                data: { tag: "breadcrumb", payload: t, metric: !0 },
              });
            });
          }
          return n;
        }
        getCurrentRoute() {
          let t =
            this.lastTransaction ||
            (0, T.getCurrentHub)().getScope().getTransaction();
          if (t && ["route", "custom"].includes(t.metadata.source))
            return t.name;
        }
        _initializeRecording() {
          this.setInitialState(),
            this._updateSessionActivity(),
            (this.eventBuffer = (function (t) {
              let { useCompression: e } = t;
              if (e && window.Worker)
                try {
                  let t = (function () {
                    let t = new Blob([t8]);
                    return URL.createObjectURL(t);
                  })();
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    k.logger.log("[Replay] Using compression worker");
                  let e = new Worker(t);
                  return new en(e);
                } catch (t) {
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    k.logger.log(
                      "[Replay] Failed to create compression worker"
                    );
                }
              return (
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  k.logger.log("[Replay] Using simple buffer"),
                new t7()
              );
            })({ useCompression: this._options.useCompression })),
            this._removeListeners(),
            this._addListeners(),
            (this._isEnabled = !0),
            this.startRecording();
        }
        _handleException(t) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            k.logger.error("[Replay]", t),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              this._options._experiments &&
              this._options._experiments.captureExceptions &&
              (0, T.captureException)(t);
        }
        _loadAndCheckSession() {
          let { type: t, session: e } = eu({
            timeouts: this.timeouts,
            stickySession: !!this._options.stickySession,
            currentSession: this.session,
            sessionSampleRate: this._options.sessionSampleRate,
            allowBuffering:
              this._options.errorSampleRate > 0 ||
              "buffer" === this.recordingMode,
          });
          "new" === t && this.setInitialState();
          let n = this.getSessionId();
          return (
            e.id !== n && (e.previousSessionId = n),
            (this.session = e),
            !!this.session.sampled || (this.stop("session unsampled"), !1)
          );
        }
        _addListeners() {
          try {
            x.document.addEventListener(
              "visibilitychange",
              this._handleVisibilityChange
            ),
              x.addEventListener("blur", this._handleWindowBlur),
              x.addEventListener("focus", this._handleWindowFocus),
              x.addEventListener("keydown", this._handleKeyboardEvent),
              this.clickDetector && this.clickDetector.addListeners(),
              !this._hasInitializedCoreListeners &&
                (!(function (t) {
                  var e;
                  let n = (0, T.getCurrentHub)().getScope(),
                    r = (0, T.getCurrentHub)().getClient();
                  n && n.addScopeListener(eL(t)),
                    (0, k.addInstrumentationHandler)("dom", t3(t)),
                    (0, k.addInstrumentationHandler)(
                      "history",
                      ((e = t),
                      t => {
                        if (!e.isEnabled()) return;
                        let n = (function (t) {
                          let { from: e, to: n } = t,
                            r = Date.now() / 1e3;
                          return {
                            type: "navigation.push",
                            start: r,
                            end: r,
                            name: n,
                            data: { previous: e },
                          };
                        })(t);
                        null !== n &&
                          (e.getContext().urls.push(n.name),
                          e.triggerUserActivity(),
                          e.addUpdate(() => (ep(e, [n]), !1)));
                      })
                    ),
                    !(function (t) {
                      let e = (0, T.getCurrentHub)().getClient();
                      try {
                        let i = new TextEncoder(),
                          {
                            networkDetailAllowUrls: a,
                            networkDetailDenyUrls: s,
                            networkCaptureBodies: o,
                            networkRequestHeaders: l,
                            networkResponseHeaders: u,
                          } = t.getOptions(),
                          c = {
                            replay: t,
                            textEncoder: i,
                            networkDetailAllowUrls: a,
                            networkDetailDenyUrls: s,
                            networkCaptureBodies: o,
                            networkRequestHeaders: l,
                            networkResponseHeaders: u,
                          };
                        if (e && e.on)
                          e.on("beforeAddBreadcrumb", (t, e) =>
                            (function (t, e, n) {
                              if (e.data)
                                try {
                                  (function (t) {
                                    return "xhr" === t.category;
                                  })(e) &&
                                    (function (t) {
                                      return t && t.xhr;
                                    })(n) &&
                                    (!(function (t, e, n) {
                                      let { xhr: r, input: i } = e,
                                        a = ey(i, n.textEncoder),
                                        s = r.getResponseHeader(
                                          "content-length"
                                        )
                                          ? ev(
                                              r.getResponseHeader(
                                                "content-length"
                                              )
                                            )
                                          : ey(r.response, n.textEncoder);
                                      void 0 !== a &&
                                        (t.data.request_body_size = a),
                                        void 0 !== s &&
                                          (t.data.response_body_size = s);
                                    })(e, n, t),
                                    eU(e, n, t)),
                                    (function (t) {
                                      return "fetch" === t.category;
                                    })(e) &&
                                      (function (t) {
                                        return t && t.response;
                                      })(n) &&
                                      (!(function (t, e, n) {
                                        let { input: r, response: i } = e,
                                          a = ey(eC(r), n.textEncoder),
                                          s = i
                                            ? ev(
                                                i.headers.get("content-length")
                                              )
                                            : void 0;
                                        void 0 !== a &&
                                          (t.data.request_body_size = a),
                                          void 0 !== s &&
                                            (t.data.response_body_size = s);
                                      })(e, n, t),
                                      ex(e, n, t));
                                } catch (t) {
                                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                                    __SENTRY_DEBUG__) &&
                                    k.logger.warn(
                                      "Error when enriching network breadcrumb"
                                    );
                                }
                            })(c, t, e)
                          );
                        else {
                          var n, r;
                          (0, k.addInstrumentationHandler)(
                            "fetch",
                            ((n = t),
                            t => {
                              if (!!n.isEnabled())
                                e_(
                                  n,
                                  (function (t) {
                                    let {
                                      startTimestamp: e,
                                      endTimestamp: n,
                                      fetchData: r,
                                      response: i,
                                    } = t;
                                    if (!n) return null;
                                    let { method: a, url: s } = r;
                                    return {
                                      type: "resource.fetch",
                                      start: e / 1e3,
                                      end: n / 1e3,
                                      name: s,
                                      data: {
                                        method: a,
                                        statusCode: i ? i.status : void 0,
                                      },
                                    };
                                  })(t)
                                );
                            })
                          ),
                            (0, k.addInstrumentationHandler)(
                              "xhr",
                              ((r = t),
                              t => {
                                if (!!r.isEnabled())
                                  e_(
                                    r,
                                    (function (t) {
                                      let {
                                          startTimestamp: e,
                                          endTimestamp: n,
                                          xhr: r,
                                        } = t,
                                        i = r[k.SENTRY_XHR_DATA_KEY];
                                      if (!e || !n || !i) return null;
                                      let {
                                        method: a,
                                        url: s,
                                        status_code: o,
                                      } = i;
                                      return void 0 === s
                                        ? null
                                        : {
                                            type: "resource.xhr",
                                            name: s,
                                            start: e / 1e3,
                                            end: n / 1e3,
                                            data: { method: a, statusCode: o },
                                          };
                                    })(t)
                                  );
                              })
                            );
                        }
                      } catch (t) {}
                    })(t),
                    (0, T.addGlobalEventProcessor)(
                      (function (t) {
                        let e =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          n = e ? ef(t) : void 0;
                        return (e, r) => {
                          var i, a, s, o;
                          if ("replay_event" === e.type)
                            return delete e.breadcrumbs, e;
                          if (e.type && !eh(e)) return e;
                          if (
                            ((i = e),
                            (a = r),
                            !i.type &&
                              i.exception &&
                              i.exception.values &&
                              i.exception.values.length &&
                              ((a.originalException &&
                                a.originalException.__rrweb__) ||
                                i.exception.values.some(
                                  t =>
                                    !!t.stacktrace &&
                                    !!t.stacktrace.frames &&
                                    !!t.stacktrace.frames.length &&
                                    t.stacktrace.frames.some(
                                      t =>
                                        t.filename &&
                                        t.filename.includes("/rrweb/src/")
                                    )
                                )) &&
                              !t.getOptions()._experiments.captureExceptions)
                          )
                            return (
                              ("undefined" == typeof __SENTRY_DEBUG__ ||
                                __SENTRY_DEBUG__) &&
                                k.logger.log(
                                  "[Replay] Ignoring error from rrweb internals",
                                  e
                                ),
                              null
                            );
                          return (
                            (s = t),
                            (o = e),
                            (("buffer" === s.recordingMode &&
                              o.message !== N &&
                              o.exception &&
                              !o.type &&
                              es(s.getOptions().errorSampleRate)) ||
                              "session" === t.recordingMode) &&
                              (e.tags = {
                                ...e.tags,
                                replayId: t.getSessionId(),
                              }),
                            n && n(e, { statusCode: 200 }),
                            e
                          );
                        };
                      })(
                        t,
                        !(function (t) {
                          return !!(t && t.on);
                        })(r)
                      )
                    ),
                    (function (t) {
                      return !!(t && t.on);
                    })(r) &&
                      (r.on("afterSendEvent", ef(t)),
                      r.on("createDsc", e => {
                        let n = t.getSessionId();
                        n &&
                          t.isEnabled() &&
                          "session" === t.recordingMode &&
                          (e.replay_id = n);
                      }),
                      r.on("startTransaction", e => {
                        t.lastTransaction = e;
                      }),
                      r.on("finishTransaction", e => {
                        t.lastTransaction = e;
                      }));
                })(this),
                (this._hasInitializedCoreListeners = !0));
          } catch (t) {
            this._handleException(t);
          }
          "PerformanceObserver" in x &&
            (this._performanceObserver = (function (t) {
              let e = new PerformanceObserver(e => {
                let n = (function (t, e) {
                  let [n, r, i] = t.reduce(
                      (t, e) => (
                        "navigation" === e.entryType
                          ? t[0].push(e)
                          : "largest-contentful-paint" === e.entryType
                            ? t[1].push(e)
                            : t[2].push(e),
                        t
                      ),
                      [[], [], []]
                    ),
                    a = [],
                    s = [],
                    o = r.length ? r[r.length - 1] : void 0;
                  return (
                    e.forEach(t => {
                      if ("largest-contentful-paint" === t.entryType) {
                        (!o || o.startTime < t.startTime) && (o = t);
                        return;
                      }
                      if ("navigation" === t.entryType) {
                        t.duration > 0 &&
                          !n.find(t4(t)) &&
                          !s.find(t4(t)) &&
                          s.push(t);
                        return;
                      }
                      a.push(t);
                    }),
                    [...(o ? [o] : []), ...n, ...i, ...a, ...s].sort(
                      (t, e) => t.startTime - e.startTime
                    )
                  );
                })(t.performanceEvents, e.getEntries());
                t.performanceEvents = n;
              });
              return (
                [
                  "element",
                  "event",
                  "first-input",
                  "largest-contentful-paint",
                  "layout-shift",
                  "longtask",
                  "navigation",
                  "paint",
                  "resource",
                ].forEach(t => {
                  try {
                    e.observe({ type: t, buffered: !0 });
                  } catch (t) {}
                }),
                e
              );
            })(this));
        }
        _removeListeners() {
          try {
            x.document.removeEventListener(
              "visibilitychange",
              this._handleVisibilityChange
            ),
              x.removeEventListener("blur", this._handleWindowBlur),
              x.removeEventListener("focus", this._handleWindowFocus),
              x.removeEventListener("keydown", this._handleKeyboardEvent),
              this.clickDetector && this.clickDetector.removeListeners(),
              this._performanceObserver &&
                (this._performanceObserver.disconnect(),
                (this._performanceObserver = null));
          } catch (t) {
            this._handleException(t);
          }
        }
        __init13() {
          this._handleVisibilityChange = () => {
            "visible" === x.document.visibilityState
              ? this._doChangeToForegroundTasks()
              : this._doChangeToBackgroundTasks();
          };
        }
        __init14() {
          this._handleWindowBlur = () => {
            let t = t1({ category: "ui.blur" });
            this._doChangeToBackgroundTasks(t);
          };
        }
        __init15() {
          this._handleWindowFocus = () => {
            let t = t1({ category: "ui.focus" });
            this._doChangeToForegroundTasks(t);
          };
        }
        __init16() {
          this._handleKeyboardEvent = t => {
            !(function (t, e) {
              if (!t.isEnabled()) return;
              t.updateUserActivity();
              let n = (function (t) {
                let {
                  metaKey: e,
                  shiftKey: n,
                  ctrlKey: r,
                  altKey: i,
                  key: a,
                  target: s,
                } = t;
                if (
                  !s ||
                  (function (t) {
                    return (
                      "INPUT" === t.tagName ||
                      "TEXTAREA" === t.tagName ||
                      t.isContentEditable
                    );
                  })(s) ||
                  !a
                )
                  return null;
                let o = e || r || i,
                  l = 1 === a.length;
                if (!o && l) return null;
                let u =
                    (0, k.htmlTreeAsString)(s, { maxStringLength: 200 }) ||
                    "<unknown>",
                  c = t5(s, u);
                return t1({
                  category: "ui.keyDown",
                  message: u,
                  data: {
                    ...c.data,
                    metaKey: e,
                    shiftKey: n,
                    ctrlKey: r,
                    altKey: i,
                    key: a,
                  },
                });
              })(e);
              n && tV(t, n);
            })(this, t);
          };
        }
        _doChangeToBackgroundTasks(t) {
          if (!this.session) return;
          let e = ea(this.session, this.timeouts);
          t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush();
        }
        _doChangeToForegroundTasks(t) {
          if (!!this.session) {
            if (!this.checkAndHandleExpiredSession()) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                k.logger.log(
                  "[Replay] Document has become active, but session has expired"
                );
              return;
            }
            t && this._createCustomBreadcrumb(t);
          }
        }
        _triggerFullSnapshot() {
          let t =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          try {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              k.logger.log("[Replay] Taking full rrweb snapshot"),
              tq.takeFullSnapshot(t);
          } catch (t) {
            this._handleException(t);
          }
        }
        _updateUserActivity() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Date.now();
          this._lastActivity = t;
        }
        _updateSessionActivity() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Date.now();
          this.session &&
            ((this.session.lastActivity = t), this._maybeSaveSession());
        }
        _createCustomBreadcrumb(t) {
          this.addUpdate(() => {
            this.throttledAddEvent({
              type: u.Custom,
              timestamp: t.timestamp || 0,
              data: { tag: "breadcrumb", payload: t },
            });
          });
        }
        _addPerformanceEntries() {
          let t = [...this.performanceEvents];
          return (
            (this.performanceEvents = []),
            Promise.all(ep(this, t.map(eY).filter(Boolean)))
          );
        }
        _clearContext() {
          this._context.errorIds.clear(),
            this._context.traceIds.clear(),
            (this._context.urls = []);
        }
        _updateInitialTimestampFromEventBuffer() {
          let { session: t, eventBuffer: e } = this;
          if (!t || !e || t.segmentId) return;
          let n = e.getEarliestTimestamp();
          n &&
            n < this._context.initialTimestamp &&
            (this._context.initialTimestamp = n);
        }
        _popEventContext() {
          let t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls,
          };
          return this._clearContext(), t;
        }
        async _runFlush() {
          if (!this.session || !this.eventBuffer) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              k.logger.error(
                "[Replay] No session or eventBuffer found to flush."
              );
            return;
          }
          if (
            (await this._addPerformanceEntries(),
            !!this.eventBuffer && !!this.eventBuffer.hasEvents)
          ) {
            if ((await eP(this), this.eventBuffer))
              try {
                this._updateInitialTimestampFromEventBuffer();
                let t = await this.eventBuffer.finish(),
                  e = this.session.id,
                  n = this._popEventContext(),
                  r = this.session.segmentId++;
                this._maybeSaveSession(),
                  await eW({
                    replayId: e,
                    recordingData: t,
                    segmentId: r,
                    eventContext: n,
                    session: this.session,
                    options: this.getOptions(),
                    timestamp: Date.now(),
                  });
              } catch (e) {
                this._handleException(e), this.stop("sendReplay");
                let t = (0, T.getCurrentHub)().getClient();
                t && t.recordDroppedEvent("send_error", "replay");
              }
          }
        }
        __init17() {
          var t = this;
          this._flush = async function () {
            let { force: e = !1 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (!t._isEnabled && !e) return;
            if (!t.checkAndHandleExpiredSession()) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                k.logger.error(
                  "[Replay] Attempting to finish replay event after session expired."
                );
              return;
            }
            if (!t.session) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                k.logger.error("[Replay] No session found to flush.");
              return;
            }
            let n = t.session.started,
              r = Date.now() - n;
            if (
              r < t._options.minReplayDuration ||
              r > t.timeouts.maxSessionLife + 5e3
            ) {
              let e = t.getOptions()._experiments.traceInternals
                ? console.warn
                : k.logger.warn;
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                e(
                  `[Replay] Session duration (${Math.floor(r / 1e3)}s) is too short or too long, not sending replay.`
                );
              return;
            }
            if ((t._debouncedFlush.cancel(), !t._flushLock)) {
              (t._flushLock = t._runFlush()),
                await t._flushLock,
                (t._flushLock = null);
              return;
            }
            try {
              await t._flushLock;
            } catch (t) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                k.logger.error(t);
            } finally {
              t._debouncedFlush();
            }
          };
        }
        _maybeSaveSession() {
          this.session && this._options.stickySession && eo(this.session);
        }
        __init18() {
          this._onMutationHandler = t => {
            let e = t.length,
              n = this._options.mutationLimit,
              r = this._options.mutationBreadcrumbLimit,
              i = n && e > n;
            if (e > r || i) {
              let t = t1({
                category: "replay.mutations",
                data: { count: e, limit: i },
              });
              this._createCustomBreadcrumb(t);
            }
            return !i || (this.stop("mutationLimit"), !1);
          };
        }
      }
      function eZ(t, e, n, r) {
        let i = [...t, ...("string" == typeof r ? r.split(",") : []), ...e];
        return (
          void 0 !== n &&
            ("string" == typeof n && i.push(`.${n}`),
            console.warn(
              "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration."
            )),
          i.join(",")
        );
      }
      function eV() {
        return (
          "undefined" != typeof window &&
          (!(0, k.isNodeEnv)() ||
            (function () {
              return void 0 !== R && "renderer" === R.type;
            })())
        );
      }
      let eK =
          'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        eJ = ["content-length", "content-type", "accept"],
        eX = !1;
      class eQ {
        static __initStatic() {
          this.id = "Replay";
        }
        __init() {
          this.name = eQ.id;
        }
        constructor({
          flushMinDelay: t = 5e3,
          flushMaxDelay: e = 5500,
          minReplayDuration: n = 4999,
          stickySession: r = !0,
          useCompression: i = !0,
          _experiments: a = {},
          sessionSampleRate: s,
          errorSampleRate: o,
          maskAllText: l = !0,
          maskAllInputs: u = !0,
          blockAllMedia: c = !0,
          mutationBreadcrumbLimit: d = 750,
          mutationLimit: h = 1e4,
          slowClickTimeout: f = 7e3,
          slowClickIgnoreSelectors: p = [],
          networkDetailAllowUrls: _ = [],
          networkDetailDenyUrls: g = [],
          networkCaptureBodies: m = !0,
          networkRequestHeaders: y = [],
          networkResponseHeaders: v = [],
          mask: E = [],
          unmask: b = [],
          block: S = [],
          unblock: w = [],
          ignore: T = [],
          maskFn: k,
          beforeAddRecordingEvent: R,
          blockClass: x,
          blockSelector: D,
          maskInputOptions: N,
          maskTextClass: I,
          maskTextSelector: C,
          ignoreClass: O,
        } = {}) {
          if (
            (eQ.prototype.__init.call(this),
            (this._recordingOptions = {
              maskAllInputs: u,
              maskAllText: l,
              maskInputOptions: { ...(N || {}), password: !0 },
              maskTextFn: k,
              maskInputFn: k,
              ...(function (t) {
                let {
                    mask: e,
                    unmask: n,
                    block: r,
                    unblock: i,
                    ignore: a,
                    blockClass: s,
                    blockSelector: o,
                    maskTextClass: l,
                    maskTextSelector: u,
                    ignoreClass: c,
                  } = t,
                  d = eZ(e, [".sentry-mask", "[data-sentry-mask]"], l, u),
                  h = eZ(n, [".sentry-unmask", "[data-sentry-unmask]"]),
                  f = {
                    maskTextSelector: d,
                    unmaskTextSelector: h,
                    maskInputSelector: d,
                    unmaskInputSelector: h,
                    blockSelector: eZ(
                      r,
                      [
                        ".sentry-block",
                        "[data-sentry-block]",
                        'base[href="/"]',
                      ],
                      s,
                      o
                    ),
                    unblockSelector: eZ(i, [
                      ".sentry-unblock",
                      "[data-sentry-unblock]",
                    ]),
                    ignoreSelector: eZ(
                      a,
                      [
                        ".sentry-ignore",
                        "[data-sentry-ignore]",
                        'input[type="file"]',
                      ],
                      c
                    ),
                  };
                return (
                  s instanceof RegExp && (f.blockClass = s),
                  l instanceof RegExp && (f.maskTextClass = l),
                  f
                );
              })({
                mask: E,
                unmask: b,
                block: S,
                unblock: w,
                ignore: T,
                blockClass: x,
                blockSelector: D,
                maskTextClass: I,
                maskTextSelector: C,
                ignoreClass: O,
              }),
              slimDOMOptions: "all",
              inlineStylesheet: !0,
              inlineImages: !1,
              collectFonts: !0,
            }),
            (this._initialOptions = {
              flushMinDelay: t,
              flushMaxDelay: e,
              minReplayDuration: Math.min(n, 15e3),
              stickySession: r,
              sessionSampleRate: s,
              errorSampleRate: o,
              useCompression: i,
              blockAllMedia: c,
              maskAllInputs: u,
              maskAllText: l,
              mutationBreadcrumbLimit: d,
              mutationLimit: h,
              slowClickTimeout: f,
              slowClickIgnoreSelectors: p,
              networkDetailAllowUrls: _,
              networkDetailDenyUrls: g,
              networkCaptureBodies: m,
              networkRequestHeaders: e0(y),
              networkResponseHeaders: e0(v),
              beforeAddRecordingEvent: R,
              _experiments: a,
            }),
            "number" == typeof s &&
              (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${s} })`),
              (this._initialOptions.sessionSampleRate = s)),
            "number" == typeof o &&
              (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${o} })`),
              (this._initialOptions.errorSampleRate = o)),
            this._initialOptions.blockAllMedia &&
              (this._recordingOptions.blockSelector = this._recordingOptions
                .blockSelector
                ? `${this._recordingOptions.blockSelector},${eK}`
                : eK),
            this._isInitialized && eV())
          )
            throw Error(
              "Multiple Sentry Session Replay instances are not supported"
            );
          this._isInitialized = !0;
        }
        get _isInitialized() {
          return eX;
        }
        set _isInitialized(t) {
          eX = t;
        }
        setupOnce() {
          eV() && (this._setup(), setTimeout(() => this._initialize()));
        }
        start() {
          this._replay && this._replay.start();
        }
        startBuffering() {
          this._replay && this._replay.startBuffering();
        }
        stop() {
          return this._replay ? this._replay.stop() : Promise.resolve();
        }
        flush(t) {
          return this._replay && this._replay.isEnabled()
            ? this._replay.sendBufferedReplayOrFlush(t)
            : Promise.resolve();
        }
        getReplayId() {
          if (this._replay && this._replay.isEnabled())
            return this._replay.getSessionId();
        }
        _initialize() {
          this._replay && this._replay.initializeSampling();
        }
        _setup() {
          let t = (function (t) {
            let e = (0, T.getCurrentHub)().getClient(),
              n = e && e.getOptions(),
              r = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...(0, k.dropUndefinedKeys)(t),
              };
            return n
              ? (null == t.sessionSampleRate &&
                  null == t.errorSampleRate &&
                  null == n.replaysSessionSampleRate &&
                  null == n.replaysOnErrorSampleRate &&
                  console.warn(
                    "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
                  ),
                "number" == typeof n.replaysSessionSampleRate &&
                  (r.sessionSampleRate = n.replaysSessionSampleRate),
                "number" == typeof n.replaysOnErrorSampleRate &&
                  (r.errorSampleRate = n.replaysOnErrorSampleRate),
                r)
              : (console.warn("SDK client is not available."), r);
          })(this._initialOptions);
          this._replay = new eq({
            options: t,
            recordingOptions: this._recordingOptions,
          });
        }
      }
      eQ.__initStatic();
      function e0(t) {
        return [...eJ, ...t.map(t => t.toLowerCase())];
      }
    },
    147658: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          applyAggregateErrorsToEvent: function () {
            return a;
          },
        });
      var r = n("46834"),
        i = n("336344");
      function a(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 250,
          a = arguments.length > 3 ? arguments[3] : void 0,
          l = arguments.length > 4 ? arguments[4] : void 0,
          u = arguments.length > 5 ? arguments[5] : void 0,
          c = arguments.length > 6 ? arguments[6] : void 0;
        if (
          !u.exception ||
          !u.exception.values ||
          !c ||
          !(0, r.isInstanceOf)(c.originalException, Error)
        )
          return;
        let d =
          u.exception.values.length > 0
            ? u.exception.values[u.exception.values.length - 1]
            : void 0;
        d &&
          (u.exception.values = (function (t, e) {
            return t.map(
              t => (t.value && (t.value = (0, i.truncate)(t.value, e)), t)
            );
          })(
            (function t(e, n, i, a, l, u, c, d) {
              if (u.length >= i + 1) return u;
              let h = [...u];
              if ((0, r.isInstanceOf)(a[l], Error)) {
                s(c, d);
                let r = e(n, a[l]),
                  u = h.length;
                o(r, l, u, d), (h = t(e, n, i, a[l], l, [r, ...h], r, u));
              }
              return (
                Array.isArray(a.errors) &&
                  a.errors.forEach((a, u) => {
                    if ((0, r.isInstanceOf)(a, Error)) {
                      s(c, d);
                      let r = e(n, a),
                        f = h.length;
                      o(r, `errors[${u}]`, f, d),
                        (h = t(e, n, i, a, l, [r, ...h], r, f));
                    }
                  }),
                h
              );
            })(t, e, l, c.originalException, a, u.exception.values, d, 0),
            n
          ));
      }
      function s(t, e) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            is_exception_group: !0,
            exception_id: e,
          });
      }
      function o(t, e, n, r) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r,
          });
      }
    },
    545459: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BAGGAGE_HEADER_NAME: function () {
            return a;
          },
          baggageHeaderToDynamicSamplingContext: function () {
            return l;
          },
          dynamicSamplingContextToSentryBaggageHeader: function () {
            return u;
          },
        });
      var r = n("46834"),
        i = n("529866");
      let a = "baggage",
        s = "sentry-",
        o = /^sentry-/;
      function l(t) {
        if (!(0, r.isString)(t) && !Array.isArray(t)) return;
        let e = {};
        if (Array.isArray(t))
          e = t.reduce((t, e) => {
            let n = c(e);
            return { ...t, ...n };
          }, {});
        else {
          if (!t) return;
          e = c(t);
        }
        let n = Object.entries(e).reduce((t, e) => {
          let [n, r] = e;
          return n.match(o) && (t[n.slice(s.length)] = r), t;
        }, {});
        return Object.keys(n).length > 0 ? n : void 0;
      }
      function u(t) {
        if (!!t)
          return (function (t) {
            if (0 !== Object.keys(t).length)
              return Object.entries(t).reduce((t, e, n) => {
                let [r, a] = e,
                  s = `${encodeURIComponent(r)}=${encodeURIComponent(a)}`,
                  o = 0 === n ? s : `${t},${s}`;
                return o.length > 8192
                  ? (("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      i.logger.warn(
                        `Not adding key: ${r} with val: ${a} to baggage header due to exceeding baggage size limits.`
                      ),
                    t)
                  : o;
              }, "");
          })(
            Object.entries(t).reduce((t, e) => {
              let [n, r] = e;
              return r && (t[`${s}${n}`] = r), t;
            }, {})
          );
      }
      function c(t) {
        return t
          .split(",")
          .map(t => t.split("=").map(t => decodeURIComponent(t.trim())))
          .reduce((t, e) => {
            let [n, r] = e;
            return (t[n] = r), t;
          }, {});
      }
    },
    829919: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getDomElement: function () {
            return o;
          },
          getLocationHref: function () {
            return s;
          },
          htmlTreeAsString: function () {
            return a;
          },
        }),
        n("653041");
      var r = n("46834");
      let i = (0, n("24716").getGlobalObject)();
      function a(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          let n,
            i = t,
            a = [],
            s = 0,
            o = 0,
            l = 3,
            u = Array.isArray(e) ? e : e.keyAttrs,
            c = (!Array.isArray(e) && e.maxStringLength) || 80;
          for (
            ;
            i &&
            s++ < 5 &&
            ((n = (function (t, e) {
              let n, i, a, s, o;
              let l = [];
              if (!t || !t.tagName) return "";
              l.push(t.tagName.toLowerCase());
              let u =
                e && e.length
                  ? e
                      .filter(e => t.getAttribute(e))
                      .map(e => [e, t.getAttribute(e)])
                  : null;
              if (u && u.length)
                u.forEach(t => {
                  l.push(`[${t[0]}="${t[1]}"]`);
                });
              else if (
                (t.id && l.push(`#${t.id}`),
                (n = t.className) && (0, r.isString)(n))
              )
                for (o = 0, i = n.split(/\s+/); o < i.length; o++)
                  l.push(`.${i[o]}`);
              let c = ["aria-label", "type", "name", "title", "alt"];
              for (o = 0; o < c.length; o++)
                (a = c[o]), (s = t.getAttribute(a)) && l.push(`[${a}="${s}"]`);
              return l.join("");
            })(i, u)),
            "html" !== n && (!(s > 1) || !(o + a.length * l + n.length >= c)));

          ) {
            a.push(n), (o += n.length), (i = i.parentNode);
          }
          return a.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      function s() {
        try {
          return i.document.location.href;
        } catch (t) {
          return "";
        }
      }
      function o(t) {
        return i.document && i.document.querySelector
          ? i.document.querySelector(t)
          : null;
      }
    },
    854569: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          createClientReportEnvelope: function () {
            return a;
          },
        });
      var r = n("50074"),
        i = n("868145");
      function a(t, e, n) {
        let a = [
          { type: "client_report" },
          {
            timestamp: n || (0, i.dateTimestampInSeconds)(),
            discarded_events: t,
          },
        ];
        return (0, r.createEnvelope)(e ? { dsn: e } : {}, [a]);
      }
    },
    177668: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          dsnFromString: function () {
            return s;
          },
          dsnToString: function () {
            return a;
          },
          makeDsn: function () {
            return l;
          },
        });
      var r = n("529866");
      let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function a(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            host: n,
            path: r,
            pass: i,
            port: a,
            projectId: s,
            protocol: o,
            publicKey: l,
          } = t;
        return `${o}://${l}${e && i ? `:${i}` : ""}@${n}${a ? `:${a}` : ""}/${r ? `${r}/` : r}${s}`;
      }
      function s(t) {
        let e = i.exec(t);
        if (!e) {
          console.error(`Invalid Sentry Dsn: ${t}`);
          return;
        }
        let [n, r, a = "", s, l = "", u] = e.slice(1),
          c = "",
          d = u,
          h = d.split("/");
        if (
          (h.length > 1 && ((c = h.slice(0, -1).join("/")), (d = h.pop())), d)
        ) {
          let t = d.match(/^\d+/);
          t && (d = t[0]);
        }
        return o({
          host: s,
          pass: a,
          path: c,
          projectId: d,
          port: l,
          protocol: n,
          publicKey: r,
        });
      }
      function o(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      function l(t) {
        let e = "string" == typeof t ? s(t) : o(t);
        if (
          e &&
          (function (t) {
            var e;
            if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__))
              return !0;
            let { port: n, projectId: i, protocol: a } = t;
            if (
              ["protocol", "publicKey", "host", "projectId"].find(
                e =>
                  !t[e] &&
                  (r.logger.error(`Invalid Sentry Dsn: ${e} missing`), !0)
              )
            )
              return !1;
            if (!i.match(/^\d+$/))
              return (
                r.logger.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1
              );
            return "http" === (e = a) || "https" === e
              ? !(n && isNaN(parseInt(n, 10))) ||
                  (r.logger.error(`Invalid Sentry Dsn: Invalid port ${n}`), !1)
              : (r.logger.error(`Invalid Sentry Dsn: Invalid protocol ${a}`),
                !1);
          })(e)
        )
          return e;
      }
    },
    776914: function (t, e, n) {
      "use strict";
      function r() {
        return (
          "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
          !!__SENTRY_BROWSER_BUNDLE__
        );
      }
      function i() {
        return "npm";
      }
      n.r(e),
        n.d(e, {
          getSDKSource: function () {
            return i;
          },
          isBrowserBundle: function () {
            return r;
          },
        });
    },
    50074: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          addItemToEnvelope: function () {
            return o;
          },
          createAttachmentEnvelopeItem: function () {
            return f;
          },
          createEnvelope: function () {
            return s;
          },
          createEventEnvelopeHeaders: function () {
            return m;
          },
          envelopeContainsItemType: function () {
            return u;
          },
          envelopeItemTypeToDataCategory: function () {
            return _;
          },
          forEachEnvelopeItem: function () {
            return l;
          },
          getSdkMetadataForEnvelopeHeader: function () {
            return g;
          },
          parseEnvelope: function () {
            return h;
          },
          serializeEnvelope: function () {
            return d;
          },
        }),
        n("653041"),
        n("268111"),
        n("941497"),
        n("744285"),
        n("492257"),
        n("873817");
      var r = n("177668"),
        i = n("10674"),
        a = n("442853");
      function s(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return [t, e];
      }
      function o(t, e) {
        let [n, r] = t;
        return [n, [...r, e]];
      }
      function l(t, e) {
        for (let n of t[1]) {
          let t = n[0].type;
          if (e(n, t)) return !0;
        }
        return !1;
      }
      function u(t, e) {
        return l(t, (t, n) => e.includes(n));
      }
      function c(t, e) {
        return (e || new TextEncoder()).encode(t);
      }
      function d(t, e) {
        let [n, r] = t,
          a = JSON.stringify(n);
        function s(t) {
          "string" == typeof a
            ? (a = "string" == typeof t ? a + t : [c(a, e), t])
            : a.push("string" == typeof t ? c(t, e) : t);
        }
        for (let t of r) {
          let [e, n] = t;
          if (
            (s(`
${JSON.stringify(e)}
`),
            "string" == typeof n || n instanceof Uint8Array)
          )
            s(n);
          else {
            let t;
            try {
              t = JSON.stringify(n);
            } catch (e) {
              t = JSON.stringify((0, i.normalize)(n));
            }
            s(t);
          }
        }
        return "string" == typeof a
          ? a
          : (function (t) {
              let e = t.reduce((t, e) => t + e.length, 0),
                n = new Uint8Array(e),
                r = 0;
              for (let e of t) n.set(e, r), (r += e.length);
              return n;
            })(a);
      }
      function h(t, e, n) {
        let r = "string" == typeof t ? e.encode(t) : t;
        function i(t) {
          let e = r.subarray(0, t);
          return (r = r.subarray(t + 1)), e;
        }
        function a() {
          let t = r.indexOf(10);
          return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)));
        }
        let s = a(),
          o = [];
        for (; r.length; ) {
          let t = a(),
            e = "number" == typeof t.length ? t.length : void 0;
          o.push([t, e ? i(e) : a()]);
        }
        return [s, o];
      }
      function f(t, e) {
        let n = "string" == typeof t.data ? c(t.data, e) : t.data;
        return [
          (0, a.dropUndefinedKeys)({
            type: "attachment",
            length: n.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType,
          }),
          n,
        ];
      }
      let p = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
      };
      function _(t) {
        return p[t];
      }
      function g(t) {
        if (!t || !t.sdk) return;
        let { name: e, version: n } = t.sdk;
        return { name: e, version: n };
      }
      function m(t, e, n, i) {
        let s =
          t.sdkProcessingMetadata &&
          t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: t.event_id,
          sent_at: new Date().toISOString(),
          ...(e && { sdk: e }),
          ...(!!n && { dsn: (0, r.dsnToString)(i) }),
          ...(s && { trace: (0, a.dropUndefinedKeys)({ ...s }) }),
        };
      }
    },
    303155: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          SentryError: function () {
            return r;
          },
        });
      class r extends Error {
        constructor(t, e = "warn") {
          super(t),
            (this.message = t),
            (this.name = new.target.prototype.constructor.name),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.logLevel = e);
        }
      }
    },
    648238: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BAGGAGE_HEADER_NAME: function () {
            return x.BAGGAGE_HEADER_NAME;
          },
          GLOBAL_OBJ: function () {
            return o.GLOBAL_OBJ;
          },
          SENTRY_XHR_DATA_KEY: function () {
            return l.SENTRY_XHR_DATA_KEY;
          },
          SentryError: function () {
            return s.SentryError;
          },
          SyncPromise: function () {
            return E.SyncPromise;
          },
          addExceptionMechanism: function () {
            return d.addExceptionMechanism;
          },
          addExceptionTypeValue: function () {
            return d.addExceptionTypeValue;
          },
          addInstrumentationHandler: function () {
            return l.addInstrumentationHandler;
          },
          addItemToEnvelope: function () {
            return T.addItemToEnvelope;
          },
          addNonEnumerableProperty: function () {
            return p.addNonEnumerableProperty;
          },
          applyAggregateErrorsToEvent: function () {
            return r.applyAggregateErrorsToEvent;
          },
          arrayify: function () {
            return d.arrayify;
          },
          browserPerformanceTimeOrigin: function () {
            return b.browserPerformanceTimeOrigin;
          },
          checkOrSetAlreadyCaught: function () {
            return d.checkOrSetAlreadyCaught;
          },
          consoleSandbox: function () {
            return c.consoleSandbox;
          },
          createAttachmentEnvelopeItem: function () {
            return T.createAttachmentEnvelopeItem;
          },
          createClientReportEnvelope: function () {
            return k.createClientReportEnvelope;
          },
          createEnvelope: function () {
            return T.createEnvelope;
          },
          createEventEnvelopeHeaders: function () {
            return T.createEventEnvelopeHeaders;
          },
          createStackParser: function () {
            return m.createStackParser;
          },
          dateTimestampInSeconds: function () {
            return b.dateTimestampInSeconds;
          },
          dropUndefinedKeys: function () {
            return p.dropUndefinedKeys;
          },
          dsnFromString: function () {
            return a.dsnFromString;
          },
          dsnToString: function () {
            return a.dsnToString;
          },
          dynamicSamplingContextToSentryBaggageHeader: function () {
            return x.dynamicSamplingContextToSentryBaggageHeader;
          },
          envelopeContainsItemType: function () {
            return T.envelopeContainsItemType;
          },
          envelopeItemTypeToDataCategory: function () {
            return T.envelopeItemTypeToDataCategory;
          },
          extractExceptionKeysForMessage: function () {
            return p.extractExceptionKeysForMessage;
          },
          extractTraceparentData: function () {
            return S.extractTraceparentData;
          },
          fill: function () {
            return p.fill;
          },
          forEachEnvelopeItem: function () {
            return T.forEachEnvelopeItem;
          },
          generateSentryTraceHeader: function () {
            return S.generateSentryTraceHeader;
          },
          getDomElement: function () {
            return i.getDomElement;
          },
          getEventDescription: function () {
            return d.getEventDescription;
          },
          getFunctionName: function () {
            return m.getFunctionName;
          },
          getGlobalSingleton: function () {
            return o.getGlobalSingleton;
          },
          getLocationHref: function () {
            return i.getLocationHref;
          },
          getOriginalFunction: function () {
            return p.getOriginalFunction;
          },
          getSDKSource: function () {
            return w.getSDKSource;
          },
          getSdkMetadataForEnvelopeHeader: function () {
            return T.getSdkMetadataForEnvelopeHeader;
          },
          htmlTreeAsString: function () {
            return i.htmlTreeAsString;
          },
          isDOMError: function () {
            return u.isDOMError;
          },
          isDOMException: function () {
            return u.isDOMException;
          },
          isError: function () {
            return u.isError;
          },
          isErrorEvent: function () {
            return u.isErrorEvent;
          },
          isEvent: function () {
            return u.isEvent;
          },
          isInstanceOf: function () {
            return u.isInstanceOf;
          },
          isNaN: function () {
            return u.isNaN;
          },
          isNativeFetch: function () {
            return v.isNativeFetch;
          },
          isNodeEnv: function () {
            return h.isNodeEnv;
          },
          isPlainObject: function () {
            return u.isPlainObject;
          },
          isPrimitive: function () {
            return u.isPrimitive;
          },
          isRateLimited: function () {
            return R.isRateLimited;
          },
          isString: function () {
            return u.isString;
          },
          isThenable: function () {
            return u.isThenable;
          },
          logger: function () {
            return c.logger;
          },
          makeDsn: function () {
            return a.makeDsn;
          },
          makePromiseBuffer: function () {
            return _.makePromiseBuffer;
          },
          markFunctionWrapped: function () {
            return p.markFunctionWrapped;
          },
          normalize: function () {
            return f.normalize;
          },
          normalizeToSize: function () {
            return f.normalizeToSize;
          },
          parseEnvelope: function () {
            return T.parseEnvelope;
          },
          parseRetryAfterHeader: function () {
            return R.parseRetryAfterHeader;
          },
          parseUrl: function () {
            return D.parseUrl;
          },
          rejectedSyncPromise: function () {
            return E.rejectedSyncPromise;
          },
          resolvedSyncPromise: function () {
            return E.resolvedSyncPromise;
          },
          safeJoin: function () {
            return y.safeJoin;
          },
          serializeEnvelope: function () {
            return T.serializeEnvelope;
          },
          severityLevelFromString: function () {
            return g.severityLevelFromString;
          },
          stackParserFromStackParserOptions: function () {
            return m.stackParserFromStackParserOptions;
          },
          stringMatchesSomePattern: function () {
            return y.stringMatchesSomePattern;
          },
          supportsFetch: function () {
            return v.supportsFetch;
          },
          timestampInSeconds: function () {
            return b.timestampInSeconds;
          },
          tracingContextFromHeaders: function () {
            return S.tracingContextFromHeaders;
          },
          truncate: function () {
            return y.truncate;
          },
          updateRateLimits: function () {
            return R.updateRateLimits;
          },
          urlEncode: function () {
            return p.urlEncode;
          },
          uuid4: function () {
            return d.uuid4;
          },
        });
      var r = n("147658"),
        i = n("829919"),
        a = n("177668"),
        s = n("303155"),
        o = n("24716"),
        l = n("793884"),
        u = n("46834"),
        c = n("529866"),
        d = n("862315"),
        h = n("635602"),
        f = n("10674"),
        p = n("442853"),
        _ = n("765497"),
        g = n("869139"),
        m = n("432038"),
        y = n("336344"),
        v = n("698892"),
        E = n("880803"),
        b = n("868145"),
        S = n("874230"),
        w = n("776914"),
        T = n("50074"),
        k = n("854569"),
        R = n("128603"),
        x = n("545459"),
        D = n("841866");
    },
    793884: function (t, e, n) {
      "use strict";
      let r, i, a;
      n.r(e),
        n.d(e, {
          SENTRY_XHR_DATA_KEY: function () {
            return p;
          },
          addInstrumentationHandler: function () {
            return m;
          },
        }),
        n("653041");
      var s = n("46834"),
        o = n("529866"),
        l = n("442853"),
        u = n("432038"),
        c = n("698892"),
        d = n("24716"),
        h = n("30865");
      let f = (0, d.getGlobalObject)(),
        p = "__sentry_xhr_v2__",
        _ = {},
        g = {};
      function m(t, e) {
        (_[t] = _[t] || []),
          _[t].push(e),
          !(function (t) {
            if (!g[t])
              switch (((g[t] = !0), t)) {
                case "console":
                  (function () {
                    "console" in f &&
                      o.CONSOLE_LEVELS.forEach(function (t) {
                        t in f.console &&
                          (0, l.fill)(f.console, t, function (e) {
                            return function () {
                              for (
                                var n = arguments.length, r = Array(n), i = 0;
                                i < n;
                                i++
                              )
                                r[i] = arguments[i];
                              y("console", { args: r, level: t }),
                                e && e.apply(f.console, r);
                            };
                          });
                      });
                  })();
                  break;
                case "dom":
                  (function () {
                    if (!("document" in f)) return;
                    let t = y.bind(null, "dom"),
                      e = b(t, !0);
                    f.document.addEventListener("click", e, !1),
                      f.document.addEventListener("keypress", e, !1),
                      ["EventTarget", "Node"].forEach(e => {
                        let n = f[e] && f[e].prototype;
                        n &&
                          n.hasOwnProperty &&
                          n.hasOwnProperty("addEventListener") &&
                          ((0, l.fill)(n, "addEventListener", function (e) {
                            return function (n, r, i) {
                              if ("click" === n || "keypress" == n)
                                try {
                                  let r =
                                      (this.__sentry_instrumentation_handlers__ =
                                        this
                                          .__sentry_instrumentation_handlers__ ||
                                        {}),
                                    a = (r[n] = r[n] || { refCount: 0 });
                                  if (!a.handler) {
                                    let r = b(t);
                                    (a.handler = r), e.call(this, n, r, i);
                                  }
                                  a.refCount++;
                                } catch (t) {}
                              return e.call(this, n, r, i);
                            };
                          }),
                          (0, l.fill)(n, "removeEventListener", function (t) {
                            return function (e, n, r) {
                              if ("click" === e || "keypress" == e)
                                try {
                                  let n =
                                      this
                                        .__sentry_instrumentation_handlers__ ||
                                      {},
                                    i = n[e];
                                  i &&
                                    (i.refCount--,
                                    i.refCount <= 0 &&
                                      (t.call(this, e, i.handler, r),
                                      (i.handler = void 0),
                                      delete n[e]),
                                    0 === Object.keys(n).length &&
                                      delete this
                                        .__sentry_instrumentation_handlers__);
                                } catch (t) {}
                              return t.call(this, e, n, r);
                            };
                          }));
                      });
                  })();
                  break;
                case "xhr":
                  (function () {
                    if (!("XMLHttpRequest" in f)) return;
                    let t = XMLHttpRequest.prototype;
                    (0, l.fill)(t, "open", function (t) {
                      return function () {
                        for (
                          var e = arguments.length, n = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          n[r] = arguments[r];
                        let i = n[1],
                          a = (this[p] = {
                            method: (0, s.isString)(n[0])
                              ? n[0].toUpperCase()
                              : n[0],
                            url: n[1],
                            request_headers: {},
                          });
                        (0, s.isString)(i) &&
                          "POST" === a.method &&
                          i.match(/sentry_key/) &&
                          (this.__sentry_own_request__ = !0);
                        let o = () => {
                          let t = this[p];
                          if (t && 4 === this.readyState) {
                            try {
                              t.status_code = this.status;
                            } catch (t) {}
                            y("xhr", {
                              args: n,
                              endTimestamp: Date.now(),
                              startTimestamp: Date.now(),
                              xhr: this,
                            });
                          }
                        };
                        return (
                          "onreadystatechange" in this &&
                          "function" == typeof this.onreadystatechange
                            ? (0, l.fill)(
                                this,
                                "onreadystatechange",
                                function (t) {
                                  return function () {
                                    for (
                                      var e = arguments.length,
                                        n = Array(e),
                                        r = 0;
                                      r < e;
                                      r++
                                    )
                                      n[r] = arguments[r];
                                    return o(), t.apply(this, n);
                                  };
                                }
                              )
                            : this.addEventListener("readystatechange", o),
                          (0, l.fill)(this, "setRequestHeader", function (t) {
                            return function () {
                              for (
                                var e = arguments.length, n = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                n[r] = arguments[r];
                              let [i, a] = n,
                                s = this[p];
                              return (
                                s && (s.request_headers[i.toLowerCase()] = a),
                                t.apply(this, n)
                              );
                            };
                          }),
                          t.apply(this, n)
                        );
                      };
                    }),
                      (0, l.fill)(t, "send", function (t) {
                        return function () {
                          for (
                            var e = arguments.length, n = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            n[r] = arguments[r];
                          let i = this[p];
                          return (
                            i && void 0 !== n[0] && (i.body = n[0]),
                            y("xhr", {
                              args: n,
                              startTimestamp: Date.now(),
                              xhr: this,
                            }),
                            t.apply(this, n)
                          );
                        };
                      });
                  })();
                  break;
                case "fetch":
                  (function () {
                    (0, c.supportsNativeFetch)() &&
                      (0, l.fill)(f, "fetch", function (t) {
                        return function () {
                          for (
                            var e = arguments.length, n = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            n[r] = arguments[r];
                          let { method: i, url: a } = (function (t) {
                              if (0 === t.length)
                                return { method: "GET", url: "" };
                              if (2 === t.length) {
                                let [e, n] = t;
                                return {
                                  url: E(e),
                                  method: v(n, "method")
                                    ? String(n.method).toUpperCase()
                                    : "GET",
                                };
                              }
                              let e = t[0];
                              return {
                                url: E(e),
                                method: v(e, "method")
                                  ? String(e.method).toUpperCase()
                                  : "GET",
                              };
                            })(n),
                            s = {
                              args: n,
                              fetchData: { method: i, url: a },
                              startTimestamp: Date.now(),
                            };
                          return (
                            y("fetch", { ...s }),
                            t.apply(f, n).then(
                              t => (
                                y("fetch", {
                                  ...s,
                                  endTimestamp: Date.now(),
                                  response: t,
                                }),
                                t
                              ),
                              t => {
                                throw (
                                  (y("fetch", {
                                    ...s,
                                    endTimestamp: Date.now(),
                                    error: t,
                                  }),
                                  t)
                                );
                              }
                            )
                          );
                        };
                      });
                  })();
                  break;
                case "history":
                  (function () {
                    if (!(0, h.supportsHistory)()) return;
                    let t = f.onpopstate;
                    function e(t) {
                      return function () {
                        for (
                          var e = arguments.length, n = Array(e), i = 0;
                          i < e;
                          i++
                        )
                          n[i] = arguments[i];
                        let a = n.length > 2 ? n[2] : void 0;
                        if (a) {
                          let t = r,
                            e = String(a);
                          (r = e), y("history", { from: t, to: e });
                        }
                        return t.apply(this, n);
                      };
                    }
                    (f.onpopstate = function () {
                      for (
                        var e = arguments.length, n = Array(e), i = 0;
                        i < e;
                        i++
                      )
                        n[i] = arguments[i];
                      let a = f.location.href,
                        s = r;
                      if (((r = a), y("history", { from: s, to: a }), t))
                        try {
                          return t.apply(this, n);
                        } catch (t) {}
                    }),
                      (0, l.fill)(f.history, "pushState", e),
                      (0, l.fill)(f.history, "replaceState", e);
                  })();
                  break;
                case "error":
                  (function () {
                    (S = f.onerror),
                      (f.onerror = function (t, e, n, r, i) {
                        return (
                          y("error", {
                            column: r,
                            error: i,
                            line: n,
                            msg: t,
                            url: e,
                          }),
                          !!S &&
                            !S.__SENTRY_LOADER__ &&
                            S.apply(this, arguments)
                        );
                      }),
                      (f.onerror.__SENTRY_INSTRUMENTED__ = !0);
                  })();
                  break;
                case "unhandledrejection":
                  (function () {
                    (w = f.onunhandledrejection),
                      (f.onunhandledrejection = function (t) {
                        return (
                          y("unhandledrejection", t),
                          !w ||
                            !!w.__SENTRY_LOADER__ ||
                            w.apply(this, arguments)
                        );
                      }),
                      (f.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
                  })();
                  break;
                default:
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    o.logger.warn("unknown instrumentation type:", t);
                  return;
              }
          })(t);
      }
      function y(t, e) {
        if (t && _[t])
          for (let n of _[t] || [])
            try {
              n(e);
            } catch (e) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                o.logger.error(
                  `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, u.getFunctionName)(n)}
Error:`,
                  e
                );
            }
      }
      function v(t, e) {
        return !!t && "object" == typeof t && !!t[e];
      }
      function E(t) {
        return "string" == typeof t
          ? t
          : t
            ? v(t, "url")
              ? t.url
              : t.toString
                ? t.toString()
                : ""
            : "";
      }
      function b(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return n => {
          if (
            !n ||
            a === n ||
            (function (t) {
              if ("keypress" !== t.type) return !1;
              try {
                let e = t.target;
                if (!e || !e.tagName) return !0;
                if (
                  "INPUT" === e.tagName ||
                  "TEXTAREA" === e.tagName ||
                  e.isContentEditable
                )
                  return !1;
              } catch (t) {}
              return !0;
            })(n)
          )
            return;
          let r = "keypress" === n.type ? "input" : n.type;
          void 0 === i
            ? (t({ event: n, name: r, global: e }), (a = n))
            : (function (t, e) {
                if (!t || t.type !== e.type) return !0;
                try {
                  if (t.target !== e.target) return !0;
                } catch (t) {}
                return !1;
              })(a, n) && (t({ event: n, name: r, global: e }), (a = n)),
            clearTimeout(i),
            (i = f.setTimeout(() => {
              i = void 0;
            }, 1e3));
        };
      }
      let S = null,
        w = null;
    },
    46834: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          isDOMError: function () {
            return o;
          },
          isDOMException: function () {
            return l;
          },
          isElement: function () {
            return f;
          },
          isError: function () {
            return i;
          },
          isErrorEvent: function () {
            return s;
          },
          isEvent: function () {
            return h;
          },
          isInstanceOf: function () {
            return y;
          },
          isNaN: function () {
            return m;
          },
          isPlainObject: function () {
            return d;
          },
          isPrimitive: function () {
            return c;
          },
          isRegExp: function () {
            return p;
          },
          isString: function () {
            return u;
          },
          isSyntheticEvent: function () {
            return g;
          },
          isThenable: function () {
            return _;
          },
        });
      let r = Object.prototype.toString;
      function i(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return y(t, Error);
        }
      }
      function a(t, e) {
        return r.call(t) === `[object ${e}]`;
      }
      function s(t) {
        return a(t, "ErrorEvent");
      }
      function o(t) {
        return a(t, "DOMError");
      }
      function l(t) {
        return a(t, "DOMException");
      }
      function u(t) {
        return a(t, "String");
      }
      function c(t) {
        return null === t || ("object" != typeof t && "function" != typeof t);
      }
      function d(t) {
        return a(t, "Object");
      }
      function h(t) {
        return "undefined" != typeof Event && y(t, Event);
      }
      function f(t) {
        return "undefined" != typeof Element && y(t, Element);
      }
      function p(t) {
        return a(t, "RegExp");
      }
      function _(t) {
        return !!(t && t.then && "function" == typeof t.then);
      }
      function g(t) {
        return (
          d(t) &&
          "nativeEvent" in t &&
          "preventDefault" in t &&
          "stopPropagation" in t
        );
      }
      function m(t) {
        return "number" == typeof t && t != t;
      }
      function y(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
    },
    529866: function (t, e, n) {
      "use strict";
      let r;
      n.r(e),
        n.d(e, {
          CONSOLE_LEVELS: function () {
            return a;
          },
          consoleSandbox: function () {
            return s;
          },
          logger: function () {
            return r;
          },
        });
      var i = n("24716");
      let a = ["debug", "info", "warn", "error", "log", "assert", "trace"];
      function s(t) {
        if (!("console" in i.GLOBAL_OBJ)) return t();
        let e = i.GLOBAL_OBJ.console,
          n = {};
        a.forEach(t => {
          let r = e[t] && e[t].__sentry_original__;
          t in e && r && ((n[t] = e[t]), (e[t] = r));
        });
        try {
          return t();
        } finally {
          Object.keys(n).forEach(t => {
            e[t] = n[t];
          });
        }
      }
      function o() {
        let t = !1,
          e = {
            enable: () => {
              t = !0;
            },
            disable: () => {
              t = !1;
            },
          };
        return (
          "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            ? a.forEach(n => {
                e[n] = function () {
                  for (
                    var e = arguments.length, r = Array(e), a = 0;
                    a < e;
                    a++
                  )
                    r[a] = arguments[a];
                  t &&
                    s(() => {
                      i.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...r);
                    });
                };
              })
            : a.forEach(t => {
                e[t] = () => void 0;
              }),
          e
        );
      }
      r =
        "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          ? (0, i.getGlobalSingleton)("logger", o)
          : o();
    },
    537198: function (t, e, n) {
      "use strict";
      function r() {
        let t = "function" == typeof WeakSet,
          e = t ? new WeakSet() : [];
        return [
          function (n) {
            if (t) return !!e.has(n) || (e.add(n), !1);
            for (let t = 0; t < e.length; t++) if (e[t] === n) return !0;
            return e.push(n), !1;
          },
          function (n) {
            if (t) e.delete(n);
            else
              for (let t = 0; t < e.length; t++)
                if (e[t] === n) {
                  e.splice(t, 1);
                  break;
                }
          },
        ];
      }
      n.r(e),
        n.d(e, {
          memoBuilder: function () {
            return r;
          },
        }),
        n("653041");
    },
    862315: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          addExceptionMechanism: function () {
            return u;
          },
          addExceptionTypeValue: function () {
            return l;
          },
          arrayify: function () {
            return d;
          },
          checkOrSetAlreadyCaught: function () {
            return c;
          },
          getEventDescription: function () {
            return o;
          },
          uuid4: function () {
            return a;
          },
        }),
        n("268111"),
        n("941497"),
        n("744285"),
        n("492257"),
        n("873817");
      var r = n("442853"),
        i = n("24716");
      function a() {
        let t = i.GLOBAL_OBJ,
          e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        let n =
          e && e.getRandomValues
            ? () => e.getRandomValues(new Uint8Array(1))[0]
            : () => 16 * Math.random();
        return "10000000100040008000100000000000".replace(/[018]/g, t =>
          (t ^ ((15 & n()) >> (t / 4))).toString(16)
        );
      }
      function s(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function o(t) {
        let { message: e, event_id: n } = t;
        if (e) return e;
        let r = s(t);
        if (r)
          return r.type && r.value
            ? `${r.type}: ${r.value}`
            : r.type || r.value || n || "<unknown>";
        return n || "<unknown>";
      }
      function l(t, e, n) {
        let r = (t.exception = t.exception || {}),
          i = (r.values = r.values || []),
          a = (i[0] = i[0] || {});
        !a.value && (a.value = e || ""), !a.type && (a.type = n || "Error");
      }
      function u(t, e) {
        let n = s(t);
        if (!n) return;
        let r = n.mechanism;
        if (
          ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
          e && "data" in e)
        ) {
          let t = { ...(r && r.data), ...e.data };
          n.mechanism.data = t;
        }
      }
      function c(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          (0, r.addNonEnumerableProperty)(t, "__sentry_captured__", !0);
        } catch (t) {}
        return !1;
      }
      function d(t) {
        return Array.isArray(t) ? t : [t];
      }
    },
    635602: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          dynamicRequire: function () {
            return s;
          },
          isNodeEnv: function () {
            return a;
          },
        });
      var r = n("776914");
      t = n.hmd(t);
      var i = n("444675");
      function a() {
        return (
          !(0, r.isBrowserBundle)() &&
          "[object process]" ===
            Object.prototype.toString.call(void 0 !== i ? i : 0)
        );
      }
      function s(t, e) {
        return t.require(e);
      }
    },
    10674: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          normalize: function () {
            return o;
          },
          normalizeToSize: function () {
            return function t(e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 3,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 102400,
                i = o(e, n);
              return (function (t) {
                return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length;
              })(i) > r
                ? t(e, n - 1, r)
                : i;
            };
          },
        });
      var r = n("46834"),
        i = n("537198"),
        a = n("442853"),
        s = n("432038");
      function o(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100,
          o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1 / 0;
        try {
          return (function t(e, o) {
            let l =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1 / 0,
              u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1 / 0,
              c =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : (0, i.memoBuilder)(),
              [d, h] = c;
            if (
              null == o ||
              (["number", "boolean", "string"].includes(typeof o) &&
                !(0, r.isNaN)(o))
            )
              return o;
            let f = (function (t, e) {
              try {
                if ("domain" === t && e && "object" == typeof e && e._events)
                  return "[Domain]";
                if ("domainEmitter" === t) return "[DomainEmitter]";
                if (void 0 !== n.g && e === n.g) return "[Global]";
                if ("undefined" != typeof window && e === window)
                  return "[Window]";
                if ("undefined" != typeof document && e === document)
                  return "[Document]";
                if ((0, r.isSyntheticEvent)(e)) return "[SyntheticEvent]";
                if ("number" == typeof e && e != e) return "[NaN]";
                if ("function" == typeof e)
                  return `[Function: ${(0, s.getFunctionName)(e)}]`;
                if ("symbol" == typeof e) return `[${String(e)}]`;
                if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
                let i = (function (t) {
                  let e = Object.getPrototypeOf(t);
                  return e ? e.constructor.name : "null prototype";
                })(e);
                if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
                return `[object ${i}]`;
              } catch (t) {
                return `**non-serializable** (${t})`;
              }
            })(e, o);
            if (!f.startsWith("[object ")) return f;
            if (o.__sentry_skip_normalization__) return o;
            let p =
              "number" == typeof o.__sentry_override_normalization_depth__
                ? o.__sentry_override_normalization_depth__
                : l;
            if (0 === p) return f.replace("object ", "");
            if (d(o)) return "[Circular ~]";
            if (o && "function" == typeof o.toJSON)
              try {
                let e = o.toJSON();
                return t("", e, p - 1, u, c);
              } catch (t) {}
            let _ = Array.isArray(o) ? [] : {},
              g = 0,
              m = (0, a.convertToPlainObject)(o);
            for (let e in m) {
              if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
              if (g >= u) {
                _[e] = "[MaxProperties ~]";
                break;
              }
              let n = m[e];
              (_[e] = t(e, n, p - 1, u, c)), g++;
            }
            return h(o), _;
          })("", t, e, o);
        } catch (t) {
          return { ERROR: `**non-serializable** (${t})` };
        }
      }
    },
    442853: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          addNonEnumerableProperty: function () {
            return o;
          },
          convertToPlainObject: function () {
            return d;
          },
          dropUndefinedKeys: function () {
            return _;
          },
          extractExceptionKeysForMessage: function () {
            return p;
          },
          fill: function () {
            return s;
          },
          getOriginalFunction: function () {
            return u;
          },
          markFunctionWrapped: function () {
            return l;
          },
          urlEncode: function () {
            return c;
          },
        }),
        n("653041");
      var r = n("829919"),
        i = n("46834"),
        a = n("336344");
      function s(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
          i = n(r);
        if ("function" == typeof i)
          try {
            l(i, r);
          } catch (t) {}
        t[e] = i;
      }
      function o(t, e, n) {
        Object.defineProperty(t, e, {
          value: n,
          writable: !0,
          configurable: !0,
        });
      }
      function l(t, e) {
        let n = e.prototype || {};
        (t.prototype = e.prototype = n), o(t, "__sentry_original__", e);
      }
      function u(t) {
        return t.__sentry_original__;
      }
      function c(t) {
        return Object.keys(t)
          .map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
          .join("&");
      }
      function d(t) {
        if ((0, i.isError)(t))
          return { message: t.message, name: t.name, stack: t.stack, ...f(t) };
        if (!(0, i.isEvent)(t)) return t;
        {
          let e = {
            type: t.type,
            target: h(t.target),
            currentTarget: h(t.currentTarget),
            ...f(t),
          };
          return (
            "undefined" != typeof CustomEvent &&
              (0, i.isInstanceOf)(t, CustomEvent) &&
              (e.detail = t.detail),
            e
          );
        }
      }
      function h(t) {
        try {
          return (0, i.isElement)(t)
            ? (0, r.htmlTreeAsString)(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function f(t) {
        if ("object" != typeof t || null === t) return {};
        {
          let e = {};
          for (let n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
      }
      function p(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
          n = Object.keys(d(t));
        if ((n.sort(), !n.length)) return "[object has no keys]";
        if (n[0].length >= e) return (0, a.truncate)(n[0], e);
        for (let t = n.length; t > 0; t--) {
          let r = n.slice(0, t).join(", ");
          if (!(r.length > e)) {
            if (t === n.length) return r;
            return (0, a.truncate)(r, e);
          }
        }
        return "";
      }
      function _(t) {
        return (function t(e, n) {
          if ((0, i.isPlainObject)(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = {};
            for (let r of (n.set(e, i), Object.keys(e)))
              void 0 !== e[r] && (i[r] = t(e[r], n));
            return i;
          }
          if (Array.isArray(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = [];
            return (
              n.set(e, i),
              e.forEach(e => {
                i.push(t(e, n));
              }),
              i
            );
          }
          return e;
        })(t, new Map());
      }
    },
    765497: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          makePromiseBuffer: function () {
            return a;
          },
        }),
        n("653041");
      var r = n("303155"),
        i = n("880803");
      function a(t) {
        let e = [];
        function n(t) {
          return e.splice(e.indexOf(t), 1)[0];
        }
        return {
          $: e,
          add: function (a) {
            if (!(void 0 === t || e.length < t))
              return (0, i.rejectedSyncPromise)(
                new r.SentryError(
                  "Not adding Promise because buffer limit was reached."
                )
              );
            let s = a();
            return (
              -1 === e.indexOf(s) && e.push(s),
              s.then(() => n(s)).then(null, () => n(s).then(null, () => {})),
              s
            );
          },
          drain: function (t) {
            return new i.SyncPromise((n, r) => {
              let a = e.length;
              if (!a) return n(!0);
              let s = setTimeout(() => {
                t && t > 0 && n(!1);
              }, t);
              e.forEach(t => {
                (0, i.resolvedSyncPromise)(t).then(() => {
                  !--a && (clearTimeout(s), n(!0));
                }, r);
              });
            });
          },
        };
      }
    },
    128603: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          isRateLimited: function () {
            return i;
          },
          parseRetryAfterHeader: function () {
            return r;
          },
          updateRateLimits: function () {
            return a;
          },
        });
      function r(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Date.now(),
          n = parseInt(`${t}`, 10);
        if (!isNaN(n)) return 1e3 * n;
        let r = Date.parse(`${t}`);
        return isNaN(r) ? 6e4 : r - e;
      }
      function i(t, e) {
        var n;
        let r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : Date.now();
        return ((n = t)[e] || n.all || 0) > r;
      }
      function a(t, e) {
        let { statusCode: n, headers: i } = e,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Date.now(),
          s = { ...t },
          o = i && i["x-sentry-rate-limits"],
          l = i && i["retry-after"];
        if (o)
          for (let t of o.trim().split(",")) {
            let [e, n] = t.split(":", 2),
              r = parseInt(e, 10),
              i = (isNaN(r) ? 60 : r) * 1e3;
            if (n) for (let t of n.split(";")) s[t] = a + i;
            else s.all = a + i;
          }
        else l ? (s.all = a + r(l, a)) : 429 === n && (s.all = a + 6e4);
        return s;
      }
    },
    869139: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          severityLevelFromString: function () {
            return i;
          },
        });
      let r = ["fatal", "error", "warning", "log", "info", "debug"];
      function i(t) {
        return "warn" === t ? "warning" : r.includes(t) ? t : "log";
      }
    },
    432038: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          createStackParser: function () {
            return i;
          },
          getFunctionName: function () {
            return o;
          },
          stackParserFromStackParserOptions: function () {
            return a;
          },
        }),
        n("653041");
      let r = /\(error: (.*)\)/;
      function i() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        let i = e.sort((t, e) => t[0] - e[0]).map(t => t[1]);
        return function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = [],
            a = t.split("\n");
          for (let t = e; t < a.length; t++) {
            let e = a[t];
            if (e.length > 1024) continue;
            let s = r.test(e) ? e.replace(r, "$1") : e;
            if (!s.match(/\S*Error: /)) {
              for (let t of i) {
                let e = t(s);
                if (e) {
                  n.push(e);
                  break;
                }
              }
              if (n.length >= 50) break;
            }
          }
          return (function (t) {
            if (!t.length) return [];
            let e = t.slice(0, 50),
              n = e[e.length - 1].function;
            n && /sentryWrapped/.test(n) && e.pop(), e.reverse();
            let r = e[e.length - 1].function;
            return (
              r && /captureMessage|captureException/.test(r) && e.pop(),
              e.map(t => ({
                ...t,
                filename: t.filename || e[e.length - 1].filename,
                function: t.function || "?",
              }))
            );
          })(n);
        };
      }
      function a(t) {
        return Array.isArray(t) ? i(...t) : t;
      }
      let s = "<anonymous>";
      function o(t) {
        try {
          if (!t || "function" != typeof t) return s;
          return t.name || s;
        } catch (t) {
          return s;
        }
      }
    },
    336344: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          safeJoin: function () {
            return a;
          },
          stringMatchesSomePattern: function () {
            return s;
          },
          truncate: function () {
            return i;
          },
        }),
        n("653041");
      var r = n("46834");
      function i(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return "string" != typeof t || 0 === e
          ? t
          : t.length <= e
            ? t
            : `${t.slice(0, e)}...`;
      }
      function a(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          try {
            n.push(String(r));
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function s(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return e.some(e =>
          (function (t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              !!(0, r.isString)(t) &&
              ((0, r.isRegExp)(e)
                ? e.test(t)
                : !!(0, r.isString)(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n)
        );
      }
    },
    698892: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          isNativeFetch: function () {
            return s;
          },
          supportsFetch: function () {
            return a;
          },
          supportsNativeFetch: function () {
            return o;
          },
        }),
        n("642549");
      var r = n("529866");
      let i = (0, n("24716").getGlobalObject)();
      function a() {
        if (!("fetch" in i)) return !1;
        try {
          return (
            new Headers(),
            new Request("http://www.example.com"),
            new Response(),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function s(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      function o() {
        if (!a()) return !1;
        if (s(i.fetch)) return !0;
        let t = !1,
          e = i.document;
        if (e && "function" == typeof e.createElement)
          try {
            let n = e.createElement("iframe");
            (n.hidden = !0),
              e.head.appendChild(n),
              n.contentWindow &&
                n.contentWindow.fetch &&
                (t = s(n.contentWindow.fetch)),
              e.head.removeChild(n);
          } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              r.logger.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                t
              );
          }
        return t;
      }
    },
    880803: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          SyncPromise: function () {
            return l;
          },
          rejectedSyncPromise: function () {
            return o;
          },
          resolvedSyncPromise: function () {
            return s;
          },
        }),
        n("653041");
      var r,
        i,
        a = n("46834");
      function s(t) {
        return new l(e => {
          e(t);
        });
      }
      function o(t) {
        return new l((e, n) => {
          n(t);
        });
      }
      ((i = r || (r = {}))[(i.PENDING = 0)] = "PENDING"),
        (i[(i.RESOLVED = 1)] = "RESOLVED"),
        (i[(i.REJECTED = 2)] = "REJECTED");
      class l {
        __init() {
          this._state = r.PENDING;
        }
        __init2() {
          this._handlers = [];
        }
        constructor(t) {
          l.prototype.__init.call(this),
            l.prototype.__init2.call(this),
            l.prototype.__init3.call(this),
            l.prototype.__init4.call(this),
            l.prototype.__init5.call(this),
            l.prototype.__init6.call(this);
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
        then(t, e) {
          return new l((n, r) => {
            this._handlers.push([
              !1,
              e => {
                if (t)
                  try {
                    n(t(e));
                  } catch (t) {
                    r(t);
                  }
                else n(e);
              },
              t => {
                if (e)
                  try {
                    n(e(t));
                  } catch (t) {
                    r(t);
                  }
                else r(t);
              },
            ]),
              this._executeHandlers();
          });
        }
        catch(t) {
          return this.then(t => t, t);
        }
        finally(t) {
          return new l((e, n) => {
            let r, i;
            return this.then(
              e => {
                (i = !1), (r = e), t && t();
              },
              e => {
                (i = !0), (r = e), t && t();
              }
            ).then(() => {
              if (i) {
                n(r);
                return;
              }
              e(r);
            });
          });
        }
        __init3() {
          this._resolve = t => {
            this._setResult(r.RESOLVED, t);
          };
        }
        __init4() {
          this._reject = t => {
            this._setResult(r.REJECTED, t);
          };
        }
        __init5() {
          this._setResult = (t, e) => {
            if (this._state === r.PENDING) {
              if ((0, a.isThenable)(e)) {
                e.then(this._resolve, this._reject);
                return;
              }
              (this._state = t), (this._value = e), this._executeHandlers();
            }
          };
        }
        __init6() {
          this._executeHandlers = () => {
            if (this._state === r.PENDING) return;
            let t = this._handlers.slice();
            (this._handlers = []),
              t.forEach(t => {
                !t[0] &&
                  (this._state === r.RESOLVED && t[1](this._value),
                  this._state === r.REJECTED && t[2](this._value),
                  (t[0] = !0));
              });
          };
        }
      }
    },
    868145: function (t, e, n) {
      "use strict";
      let r;
      n.r(e),
        n.d(e, {
          browserPerformanceTimeOrigin: function () {
            return h;
          },
          dateTimestampInSeconds: function () {
            return c;
          },
          timestampInSeconds: function () {
            return d;
          },
        });
      var i = n("635602"),
        a = n("24716");
      t = n.hmd(t);
      let s = (0, a.getGlobalObject)(),
        o = { nowSeconds: () => Date.now() / 1e3 },
        l = (0, i.isNodeEnv)()
          ? (function () {
              try {
                return (0, i.dynamicRequire)(t, "perf_hooks").performance;
              } catch (t) {
                return;
              }
            })()
          : (function () {
              let { performance: t } = s;
              if (!!t && !!t.now)
                return { now: () => t.now(), timeOrigin: Date.now() - t.now() };
            })(),
        u =
          void 0 === l
            ? o
            : { nowSeconds: () => (l.timeOrigin + l.now()) / 1e3 },
        c = o.nowSeconds.bind(o),
        d = u.nowSeconds.bind(u),
        h = (() => {
          let { performance: t } = s;
          if (!t || !t.now) return;
          let e = t.now(),
            n = Date.now(),
            r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
            i = t.timing && t.timing.navigationStart,
            a = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
          if (r < 36e5 || a < 36e5) return r <= a ? t.timeOrigin : i;
          return n;
        })();
    },
    874230: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          extractTraceparentData: function () {
            return s;
          },
          generateSentryTraceHeader: function () {
            return l;
          },
          tracingContextFromHeaders: function () {
            return o;
          },
        });
      var r = n("545459"),
        i = n("862315");
      let a = RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
      );
      function s(t) {
        let e;
        if (!t) return;
        let n = t.match(a);
        if (n)
          return (
            "1" === n[3] ? (e = !0) : "0" === n[3] && (e = !1),
            { traceId: n[1], parentSampled: e, parentSpanId: n[2] }
          );
      }
      function o(t, e) {
        let n = s(t),
          a = (0, r.baggageHeaderToDynamicSamplingContext)(e),
          { traceId: o, parentSpanId: l, parentSampled: u } = n || {},
          c = {
            traceId: o || (0, i.uuid4)(),
            spanId: (0, i.uuid4)().substring(16),
            sampled: void 0 !== u && u,
          };
        return (
          l && (c.parentSpanId = l),
          a && (c.dsc = a),
          {
            traceparentData: n,
            dynamicSamplingContext: a,
            propagationContext: c,
          }
        );
      }
      function l() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, i.uuid4)(),
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, i.uuid4)().substring(16),
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
      }
    },
    841866: function (t, e, n) {
      "use strict";
      function r(t) {
        if (!t) return {};
        let e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!e) return {};
        let n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r,
        };
      }
      n.r(e),
        n.d(e, {
          parseUrl: function () {
            return r;
          },
        });
    },
    30865: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          supportsHistory: function () {
            return i;
          },
        });
      let r = (0, n("24716").getGlobalObject)();
      function i() {
        let t = r.chrome,
          e = t && t.app && t.app.runtime,
          n =
            "history" in r && !!r.history.pushState && !!r.history.replaceState;
        return !e && n;
      }
    },
    24716: function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.Math == Math ? t : void 0;
      }
      n.r(e),
        n.d(e, {
          GLOBAL_OBJ: function () {
            return i;
          },
          getGlobalObject: function () {
            return a;
          },
          getGlobalSingleton: function () {
            return s;
          },
        });
      let i =
        ("object" == typeof globalThis && r(globalThis)) ||
        ("object" == typeof window && r(window)) ||
        ("object" == typeof self && r(self)) ||
        ("object" == typeof n.g && r(n.g)) ||
        (function () {
          return this;
        })() ||
        {};
      function a() {
        return i;
      }
      function s(t, e, n) {
        let r = n || i,
          a = (r.__SENTRY__ = r.__SENTRY__ || {});
        return a[t] || (a[t] = e());
      }
    },
    321611: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          registerBackgroundTabDetection: function () {
            return s;
          },
        });
      var r = n("91320"),
        i = n("648238"),
        a = n("607190");
      function s() {
        a.WINDOW && a.WINDOW.document
          ? a.WINDOW.document.addEventListener("visibilitychange", () => {
              let t = (0, r.getActiveTransaction)();
              if (a.WINDOW.document.hidden && t) {
                let e = "cancelled";
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  i.logger.log(
                    `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`
                  ),
                  !t.status && t.setStatus(e),
                  t.setTag("visibilitychange", "document.hidden"),
                  t.finish();
              }
            })
          : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            i.logger.warn(
              "[Tracing] Could not set up background tab detection due to lack of global document"
            );
      }
    },
    204325: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BrowserTracing: function () {
            return d;
          },
        });
      var r = n("91320"),
        i = n("648238"),
        a = n("321611"),
        s = n("799821"),
        o = n("722994"),
        l = n("263951"),
        u = n("607190");
      let c = {
        ...r.TRACING_DEFAULTS,
        markBackgroundTransactions: !0,
        routingInstrumentation: l.instrumentRoutingWithDefaults,
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
        enableLongTask: !0,
        _experiments: {},
        ...o.defaultRequestInstrumentationOptions,
      };
      class d {
        __init() {
          this.name = "BrowserTracing";
        }
        __init2() {
          this._hasSetTracePropagationTargets = !1;
        }
        constructor(t) {
          d.prototype.__init.call(this),
            d.prototype.__init2.call(this),
            (0, r.addTracingExtensions)(),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              (this._hasSetTracePropagationTargets = !!(
                t &&
                (t.tracePropagationTargets || t.tracingOrigins)
              )),
            (this.options = { ...c, ...t }),
            void 0 !== this.options._experiments.enableLongTask &&
              (this.options.enableLongTask =
                this.options._experiments.enableLongTask),
            t &&
              !t.tracePropagationTargets &&
              t.tracingOrigins &&
              (this.options.tracePropagationTargets = t.tracingOrigins),
            (this._collectWebVitals = (0, s.startTrackingWebVitals)()),
            this.options.enableLongTask && (0, s.startTrackingLongTasks)(),
            this.options._experiments.enableInteractions &&
              (0, s.startTrackingInteractions)();
        }
        setupOnce(t, e) {
          this._getCurrentHub = e;
          let n = e().getClient(),
            r = n && n.getOptions(),
            {
              routingInstrumentation: s,
              startTransactionOnLocationChange: l,
              startTransactionOnPageLoad: u,
              markBackgroundTransactions: c,
              traceFetch: d,
              traceXHR: h,
              shouldCreateSpanForRequest: f,
              enableHTTPTimings: p,
              _experiments: _,
            } = this.options,
            g = r && r.tracePropagationTargets,
            m = g || this.options.tracePropagationTargets;
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            this._hasSetTracePropagationTargets &&
            g &&
            i.logger.warn(
              "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
            ),
            s(
              t => {
                let n = this._createRouteTransaction(t);
                return (
                  this.options._experiments.onStartRouteTransaction &&
                    this.options._experiments.onStartRouteTransaction(n, t, e),
                  n
                );
              },
              u,
              l
            ),
            c && (0, a.registerBackgroundTabDetection)(),
            _.enableInteractions && this._registerInteractionListener(),
            (0, o.instrumentOutgoingRequests)({
              traceFetch: d,
              traceXHR: h,
              tracePropagationTargets: m,
              shouldCreateSpanForRequest: f,
              enableHTTPTimings: p,
            });
        }
        _createRouteTransaction(t) {
          if (!this._getCurrentHub) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.warn(
                `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`
              );
            return;
          }
          let e = this._getCurrentHub(),
            {
              beforeNavigate: n,
              idleTimeout: a,
              finalTimeout: o,
              heartbeatInterval: l,
            } = this.options,
            c = "pageload" === t.op,
            d = c ? h("sentry-trace") : "",
            f = c ? h("baggage") : "",
            {
              traceparentData: p,
              dynamicSamplingContext: _,
              propagationContext: g,
            } = (0, i.tracingContextFromHeaders)(d, f),
            m = {
              ...t,
              ...p,
              metadata: {
                ...t.metadata,
                dynamicSamplingContext: p && !_ ? {} : _,
              },
              trimEnd: !0,
            },
            y = "function" == typeof n ? n(m) : m,
            v = void 0 === y ? { ...m, sampled: !1 } : y;
          (v.metadata =
            v.name !== m.name
              ? { ...v.metadata, source: "custom" }
              : v.metadata),
            (this._latestRouteName = v.name),
            (this._latestRouteSource = v.metadata && v.metadata.source),
            !1 === v.sampled &&
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(
                `[Tracing] Will not send ${v.op} transaction because of beforeNavigate.`
              ),
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              i.logger.log(`[Tracing] Starting ${v.op} transaction on scope`);
          let { location: E } = u.WINDOW,
            b = (0, r.startIdleTransaction)(e, v, a, o, !0, { location: E }, l),
            S = e.getScope();
          return (
            c && p
              ? S.setPropagationContext(g)
              : S.setPropagationContext({
                  traceId: b.traceId,
                  spanId: b.spanId,
                  parentSpanId: b.parentSpanId,
                  sampled: !!b.sampled,
                }),
            b.registerBeforeFinishCallback(t => {
              this._collectWebVitals(), (0, s.addPerformanceEntries)(t);
            }),
            b
          );
        }
        _registerInteractionListener() {
          let t;
          let e = () => {
            let {
                idleTimeout: e,
                finalTimeout: n,
                heartbeatInterval: a,
              } = this.options,
              s = "ui.action.click",
              o = (0, r.getActiveTransaction)();
            if (o && o.op && ["navigation", "pageload"].includes(o.op)) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                i.logger.warn(
                  `[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`
                );
              return;
            }
            if (
              (t &&
                (t.setFinishReason("interactionInterrupted"),
                t.finish(),
                (t = void 0)),
              !this._getCurrentHub)
            ) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                i.logger.warn(
                  `[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`
                );
              return;
            }
            if (!this._latestRouteName) {
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                i.logger.warn(
                  `[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`
                );
              return;
            }
            let l = this._getCurrentHub(),
              { location: c } = u.WINDOW,
              d = {
                name: this._latestRouteName,
                op: s,
                trimEnd: !0,
                metadata: { source: this._latestRouteSource || "url" },
              };
            t = (0, r.startIdleTransaction)(l, d, e, n, !0, { location: c }, a);
          };
          ["click"].forEach(t => {
            addEventListener(t, e, { once: !1, capture: !0 });
          });
        }
      }
      function h(t) {
        let e = (0, i.getDomElement)(`meta[name=${t}]`);
        return e ? e.getAttribute("content") : void 0;
      }
    },
    799821: function (t, e, n) {
      "use strict";
      let r, i;
      n.r(e),
        n.d(e, {
          addPerformanceEntries: function () {
            return b;
          },
          startTrackingInteractions: function () {
            return E;
          },
          startTrackingLongTasks: function () {
            return v;
          },
          startTrackingWebVitals: function () {
            return y;
          },
        });
      var a = n("91320"),
        s = n("648238"),
        o = n("607190"),
        l = n("540161"),
        u = n("282572"),
        c = n("301072"),
        d = n("233863"),
        h = n("544457"),
        f = n("72609");
      function p(t) {
        return t / 1e3;
      }
      function _() {
        return o.WINDOW && o.WINDOW.addEventListener && o.WINDOW.performance;
      }
      let g = 0,
        m = {};
      function y() {
        let t = _();
        if (t && s.browserPerformanceTimeOrigin) {
          t.mark && o.WINDOW.performance.mark("sentry-tracing-init"),
            (function () {
              (0, u.onFID)(t => {
                let e = t.entries.pop();
                if (!e) return;
                let n = p(s.browserPerformanceTimeOrigin),
                  r = p(e.startTime);
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  s.logger.log("[Measurements] Adding FID"),
                  (m.fid = { value: t.value, unit: "millisecond" }),
                  (m["mark.fid"] = { value: n + r, unit: "second" });
              });
            })();
          let e = (function () {
              return (0, l.onCLS)(t => {
                let e = t.entries.pop();
                e &&
                  (("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    s.logger.log("[Measurements] Adding CLS"),
                  (m.cls = { value: t.value, unit: "" }),
                  (i = e));
              });
            })(),
            n = (function () {
              return (0, c.onLCP)(t => {
                let e = t.entries.pop();
                e &&
                  (("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    s.logger.log("[Measurements] Adding LCP"),
                  (m.lcp = { value: t.value, unit: "millisecond" }),
                  (r = e));
              });
            })();
          return () => {
            e && e(), n && n();
          };
        }
        return () => void 0;
      }
      function v() {
        (0, h.observe)("longtask", t => {
          for (let e of t) {
            let t = (0, a.getActiveTransaction)();
            if (!t) return;
            let n = p(s.browserPerformanceTimeOrigin + e.startTime),
              r = p(e.duration);
            t.startChild({
              description: "Main UI thread blocked",
              op: "ui.long-task",
              startTimestamp: n,
              endTimestamp: n + r,
            });
          }
        });
      }
      function E() {
        (0, h.observe)(
          "event",
          t => {
            for (let e of t) {
              let t = (0, a.getActiveTransaction)();
              if (!t) return;
              if ("click" === e.name) {
                let n = p(s.browserPerformanceTimeOrigin + e.startTime),
                  r = p(e.duration);
                t.startChild({
                  description: (0, s.htmlTreeAsString)(e.target),
                  op: `ui.interaction.${e.name}`,
                  startTimestamp: n,
                  endTimestamp: n + r,
                });
              }
            }
          },
          { durationThreshold: 0 }
        );
      }
      function b(t) {
        let e, n;
        let a = _();
        if (
          !a ||
          !o.WINDOW.performance.getEntries ||
          !s.browserPerformanceTimeOrigin
        )
          return;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          s.logger.log(
            "[Tracing] Adding & adjusting spans using Performance API"
          );
        let l = p(s.browserPerformanceTimeOrigin),
          u = a.getEntries();
        if (
          (u.slice(g).forEach(r => {
            let i = p(r.startTime),
              a = p(r.duration);
            if ("navigation" !== t.op || !(l + i < t.startTimestamp))
              switch (r.entryType) {
                case "navigation":
                  (function (t, e, n) {
                    [
                      "unloadEvent",
                      "redirect",
                      "domContentLoadedEvent",
                      "loadEvent",
                      "connect",
                    ].forEach(r => {
                      S(t, e, r, n);
                    }),
                      S(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"),
                      S(t, e, "fetch", n, "cache", "domainLookupStart"),
                      S(t, e, "domainLookup", n, "DNS"),
                      (function (t, e, n) {
                        (0, f._startChild)(t, {
                          op: "browser",
                          description: "request",
                          startTimestamp: n + p(e.requestStart),
                          endTimestamp: n + p(e.responseEnd),
                        }),
                          (0, f._startChild)(t, {
                            op: "browser",
                            description: "response",
                            startTimestamp: n + p(e.responseStart),
                            endTimestamp: n + p(e.responseEnd),
                          });
                      })(t, e, n);
                  })(t, r, l),
                    (e = l + p(r.responseStart)),
                    (n = l + p(r.requestStart));
                  break;
                case "mark":
                case "paint":
                case "measure": {
                  (function (t, e, n, r, i) {
                    let a = i + n;
                    (0, f._startChild)(t, {
                      description: e.name,
                      endTimestamp: a + r,
                      op: e.entryType,
                      startTimestamp: a,
                    });
                  })(t, r, i, a, l);
                  let e = (0, d.getVisibilityWatcher)(),
                    n = r.startTime < e.firstHiddenTime;
                  "first-paint" === r.name &&
                    n &&
                    (("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      s.logger.log("[Measurements] Adding FP"),
                    (m.fp = { value: r.startTime, unit: "millisecond" })),
                    "first-contentful-paint" === r.name &&
                      n &&
                      (("undefined" == typeof __SENTRY_DEBUG__ ||
                        __SENTRY_DEBUG__) &&
                        s.logger.log("[Measurements] Adding FCP"),
                      (m.fcp = { value: r.startTime, unit: "millisecond" }));
                  break;
                }
                case "resource": {
                  let e = r.name.replace(o.WINDOW.location.origin, "");
                  (function (t, e, n, r, i, a) {
                    if (
                      "xmlhttprequest" === e.initiatorType ||
                      "fetch" === e.initiatorType
                    )
                      return;
                    let s = {};
                    "transferSize" in e &&
                      (s["http.response_transfer_size"] = e.transferSize),
                      "encodedBodySize" in e &&
                        (s["http.response_content_length"] = e.encodedBodySize),
                      "decodedBodySize" in e &&
                        (s["http.decoded_response_content_length"] =
                          e.decodedBodySize),
                      "renderBlockingStatus" in e &&
                        (s["resource.render_blocking_status"] =
                          e.renderBlockingStatus);
                    let o = a + r;
                    (0, f._startChild)(t, {
                      description: n,
                      endTimestamp: o + i,
                      op: e.initiatorType
                        ? `resource.${e.initiatorType}`
                        : "resource.other",
                      startTimestamp: o,
                      data: s,
                    });
                  })(t, r, e, i, a, l);
                }
              }
          }),
          (g = Math.max(u.length - 1, 0)),
          (function (t) {
            let e = o.WINDOW.navigator;
            if (!e) return;
            let n = e.connection;
            n &&
              (n.effectiveType &&
                t.setTag("effectiveConnectionType", n.effectiveType),
              n.type && t.setTag("connectionType", n.type),
              (0, f.isMeasurementValue)(n.rtt) &&
                (m["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
              (0, f.isMeasurementValue)(e.deviceMemory) &&
                t.setTag("deviceMemory", `${e.deviceMemory} GB`),
              (0, f.isMeasurementValue)(e.hardwareConcurrency) &&
                t.setTag("hardwareConcurrency", String(e.hardwareConcurrency));
          })(t),
          "pageload" === t.op)
        ) {
          "number" == typeof e &&
            (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              s.logger.log("[Measurements] Adding TTFB"),
            (m.ttfb = {
              value: (e - t.startTimestamp) * 1e3,
              unit: "millisecond",
            }),
            "number" == typeof n &&
              n <= e &&
              (m["ttfb.requestTime"] = {
                value: (e - n) * 1e3,
                unit: "millisecond",
              })),
            ["fcp", "fp", "lcp"].forEach(e => {
              if (!m[e] || l >= t.startTimestamp) return;
              let n = m[e].value,
                r = Math.abs((l + p(n) - t.startTimestamp) * 1e3),
                i = r - n;
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                s.logger.log(
                  `[Measurements] Normalized ${e} from ${n} to ${r} (${i})`
                ),
                (m[e].value = r);
            });
          let a = m["mark.fid"];
          a &&
            m.fid &&
            ((0, f._startChild)(t, {
              description: "first input delay",
              endTimestamp: a.value + p(m.fid.value),
              op: "ui.action",
              startTimestamp: a.value,
            }),
            delete m["mark.fid"]),
            !("fcp" in m) && delete m.cls,
            Object.keys(m).forEach(e => {
              t.setMeasurement(e, m[e].value, m[e].unit);
            }),
            (function (t) {
              r &&
                (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  s.logger.log("[Measurements] Adding LCP Data"),
                r.element &&
                  t.setTag("lcp.element", (0, s.htmlTreeAsString)(r.element)),
                r.id && t.setTag("lcp.id", r.id),
                r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)),
                t.setTag("lcp.size", r.size)),
                i &&
                  i.sources &&
                  (("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    s.logger.log("[Measurements] Adding CLS Data"),
                  i.sources.forEach((e, n) =>
                    t.setTag(
                      `cls.source.${n + 1}`,
                      (0, s.htmlTreeAsString)(e.node)
                    )
                  ));
            })(t);
        }
        (r = void 0), (i = void 0), (m = {});
      }
      function S(t, e, n, r, i, a) {
        let s = a ? e[a] : e[`${n}End`],
          o = e[`${n}Start`];
        o &&
          s &&
          (0, f._startChild)(t, {
            op: "browser",
            description: i || n,
            startTimestamp: r + p(o),
            endTimestamp: r + p(s),
          });
      }
    },
    72609: function (t, e, n) {
      "use strict";
      function r(t) {
        return "number" == typeof t && isFinite(t);
      }
      function i(t, e) {
        let { startTimestamp: n, ...r } = e;
        return (
          n && t.startTimestamp > n && (t.startTimestamp = n),
          t.startChild({ startTimestamp: n, ...r })
        );
      }
      n.r(e),
        n.d(e, {
          _startChild: function () {
            return i;
          },
          isMeasurementValue: function () {
            return r;
          },
        });
    },
    722994: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          defaultRequestInstrumentationOptions: function () {
            return s;
          },
          instrumentOutgoingRequests: function () {
            return o;
          },
        }),
        n("653041");
      var r = n("91320"),
        i = n("648238");
      let a = ["localhost", /^\/(?!\/)/],
        s = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          tracingOrigins: a,
          tracePropagationTargets: a,
        };
      function o(t) {
        let {
            traceFetch: e,
            traceXHR: n,
            tracePropagationTargets: o,
            tracingOrigins: u,
            shouldCreateSpanForRequest: d,
            enableHTTPTimings: h,
          } = { traceFetch: s.traceFetch, traceXHR: s.traceXHR, ...t },
          f = "function" == typeof d ? d : t => !0,
          p = t =>
            (function (t, e) {
              return (0, i.stringMatchesSomePattern)(t, e || a);
            })(t, o || u),
          _ = {};
        e &&
          (0, i.addInstrumentationHandler)("fetch", t => {
            let e = (function (t, e, n, a) {
              if (!(0, r.hasTracingEnabled)() || !t.fetchData) return;
              let s = e(t.fetchData.url);
              if (t.endTimestamp && s) {
                let e = t.fetchData.__span;
                if (!e) return;
                let n = a[e];
                if (n) {
                  if (t.response) {
                    n.setHttpStatus(t.response.status);
                    let e = parseInt(
                      t.response &&
                        t.response.headers &&
                        t.response.headers.get("content-length")
                    );
                    e > 0 && n.setData("http.response_content_length", e);
                  } else t.error && n.setStatus("internal_error");
                  n.finish(), delete a[e];
                }
                return;
              }
              let o = (0, r.getCurrentHub)(),
                l = o.getScope(),
                u = o.getClient(),
                c = l.getSpan(),
                { method: d, url: h } = t.fetchData,
                f =
                  s && c
                    ? c.startChild({
                        data: { url: h, type: "fetch", "http.method": d },
                        description: `${d} ${h}`,
                        op: "http.client",
                      })
                    : void 0;
              if (
                (f && ((t.fetchData.__span = f.spanId), (a[f.spanId] = f)),
                n(t.fetchData.url) && u)
              ) {
                let e = t.args[0];
                t.args[1] = t.args[1] || {};
                let n = t.args[1];
                n.headers = (function (t, e, n, a) {
                  let s = n.getSpan(),
                    o = s && s.transaction,
                    {
                      traceId: l,
                      sampled: u,
                      dsc: c,
                    } = n.getPropagationContext(),
                    d = s
                      ? s.toTraceparent()
                      : (0, i.generateSentryTraceHeader)(l, void 0, u),
                    h = o
                      ? o.getDynamicSamplingContext()
                      : c ||
                        (0, r.getDynamicSamplingContextFromClient)(l, e, n),
                    f = (0, i.dynamicSamplingContextToSentryBaggageHeader)(h),
                    p =
                      "undefined" != typeof Request &&
                      (0, i.isInstanceOf)(t, Request)
                        ? t.headers
                        : a.headers;
                  if (!p) return { "sentry-trace": d, baggage: f };
                  if (
                    "undefined" != typeof Headers &&
                    (0, i.isInstanceOf)(p, Headers)
                  ) {
                    let t = new Headers(p);
                    return (
                      t.append("sentry-trace", d),
                      f && t.append(i.BAGGAGE_HEADER_NAME, f),
                      t
                    );
                  }
                  if (Array.isArray(p)) {
                    let t = [...p, ["sentry-trace", d]];
                    return f && t.push([i.BAGGAGE_HEADER_NAME, f]), t;
                  } else {
                    let t = "baggage" in p ? p.baggage : void 0,
                      e = [];
                    return (
                      Array.isArray(t) ? e.push(...t) : t && e.push(t),
                      f && e.push(f),
                      {
                        ...p,
                        "sentry-trace": d,
                        baggage: e.length > 0 ? e.join(",") : void 0,
                      }
                    );
                  }
                })(e, u, l, n);
              }
              return f;
            })(t, f, p, _);
            h && e && l(e);
          }),
          n &&
            (0, i.addInstrumentationHandler)("xhr", t => {
              let e = (function (t, e, n, a) {
                let s = t.xhr,
                  o = s && s[i.SENTRY_XHR_DATA_KEY];
                if (
                  !(0, r.hasTracingEnabled)() ||
                  (s && s.__sentry_own_request__) ||
                  !s ||
                  !o
                )
                  return;
                let l = e(o.url);
                if (t.endTimestamp && l) {
                  let t = s.__sentry_xhr_span_id__;
                  if (!t) return;
                  let e = a[t];
                  e &&
                    (e.setHttpStatus(o.status_code), e.finish(), delete a[t]);
                  return;
                }
                let u = (0, r.getCurrentHub)(),
                  d = u.getScope(),
                  h = d.getSpan(),
                  f =
                    l && h
                      ? h.startChild({
                          data: {
                            ...o.data,
                            type: "xhr",
                            "http.method": o.method,
                            url: o.url,
                          },
                          description: `${o.method} ${o.url}`,
                          op: "http.client",
                        })
                      : void 0;
                if (
                  (f &&
                    ((s.__sentry_xhr_span_id__ = f.spanId),
                    (a[s.__sentry_xhr_span_id__] = f)),
                  s.setRequestHeader && n(o.url))
                ) {
                  if (f) {
                    let t = f && f.transaction,
                      e = t && t.getDynamicSamplingContext(),
                      n = (0, i.dynamicSamplingContextToSentryBaggageHeader)(e);
                    c(s, f.toTraceparent(), n);
                  } else {
                    let t = u.getClient(),
                      {
                        traceId: e,
                        sampled: n,
                        dsc: a,
                      } = d.getPropagationContext(),
                      o = (0, i.generateSentryTraceHeader)(e, void 0, n),
                      l =
                        a ||
                        (t
                          ? (0, r.getDynamicSamplingContextFromClient)(e, t, d)
                          : void 0);
                    c(
                      s,
                      o,
                      (0, i.dynamicSamplingContextToSentryBaggageHeader)(l)
                    );
                  }
                }
                return f;
              })(t, f, p, _);
              h && e && l(e);
            });
      }
      function l(t) {
        let e = t.data.url,
          n = new PerformanceObserver(r => {
            r.getEntries().forEach(r => {
              ("fetch" === r.initiatorType ||
                "xmlhttprequest" === r.initiatorType) &&
                r.name.endsWith(e) &&
                ((function (t) {
                  let { name: e, version: n } = (function (t) {
                      let e = "unknown",
                        n = "unknown",
                        r = "";
                      for (let i of t) {
                        if ("/" === i) {
                          [e, n] = t.split("/");
                          break;
                        }
                        if (!isNaN(Number(i))) {
                          (e = "h" === r ? "http" : r), (n = t.split(r)[1]);
                          break;
                        }
                        r += i;
                      }
                      return r === t && (e = r), { name: e, version: n };
                    })(t.nextHopProtocol),
                    r = [];
                  return (r.push(
                    ["network.protocol.version", n],
                    ["network.protocol.name", e]
                  ),
                  i.browserPerformanceTimeOrigin)
                    ? [
                        ...r,
                        ["http.request.redirect_start", u(t.redirectStart)],
                        ["http.request.fetch_start", u(t.fetchStart)],
                        [
                          "http.request.domain_lookup_start",
                          u(t.domainLookupStart),
                        ],
                        [
                          "http.request.domain_lookup_end",
                          u(t.domainLookupEnd),
                        ],
                        ["http.request.connect_start", u(t.connectStart)],
                        [
                          "http.request.secure_connection_start",
                          u(t.secureConnectionStart),
                        ],
                        ["http.request.connection_end", u(t.connectEnd)],
                        ["http.request.request_start", u(t.requestStart)],
                        ["http.request.response_start", u(t.responseStart)],
                        ["http.request.response_end", u(t.responseEnd)],
                      ]
                    : r;
                })(r).forEach(e => t.setData(...e)),
                n.disconnect());
            });
          });
        n.observe({ entryTypes: ["resource"] });
      }
      function u(t) {
        return (
          ((i.browserPerformanceTimeOrigin || performance.timeOrigin) + t) / 1e3
        );
      }
      function c(t, e, n) {
        try {
          t.setRequestHeader("sentry-trace", e),
            n && t.setRequestHeader(i.BAGGAGE_HEADER_NAME, n);
        } catch (t) {}
      }
    },
    263951: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          instrumentRoutingWithDefaults: function () {
            return a;
          },
        });
      var r = n("648238"),
        i = n("607190");
      function a(t) {
        let e,
          n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!i.WINDOW || !i.WINDOW.location) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            r.logger.warn(
              "Could not initialize routing instrumentation due to invalid location"
            );
          return;
        }
        let s = i.WINDOW.location.href;
        n &&
          (e = t({
            name: i.WINDOW.location.pathname,
            startTimestamp: r.browserPerformanceTimeOrigin
              ? r.browserPerformanceTimeOrigin / 1e3
              : void 0,
            op: "pageload",
            metadata: { source: "url" },
          })),
          a &&
            (0, r.addInstrumentationHandler)("history", n => {
              let { to: a, from: o } = n;
              if (void 0 === o && s && -1 !== s.indexOf(a)) {
                s = void 0;
                return;
              }
              o !== a &&
                ((s = void 0),
                e &&
                  (("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    r.logger.log(
                      `[Tracing] Finishing current transaction with op: ${e.op}`
                    ),
                  e.finish()),
                (e = t({
                  name: i.WINDOW.location.pathname,
                  op: "navigation",
                  metadata: { source: "url" },
                })));
            });
      }
    },
    607190: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          WINDOW: function () {
            return r;
          },
        });
      let r = n("648238").GLOBAL_OBJ;
    },
    540161: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          onCLS: function () {
            return o;
          },
        }),
        n("653041");
      var r = n("358133"),
        i = n("416097"),
        a = n("544457"),
        s = n("527475");
      let o = t => {
        let e;
        let n = (0, i.initMetric)("CLS", 0),
          o = 0,
          l = [],
          u = t => {
            t.forEach(t => {
              if (!t.hadRecentInput) {
                let r = l[0],
                  i = l[l.length - 1];
                o &&
                0 !== l.length &&
                t.startTime - i.startTime < 1e3 &&
                t.startTime - r.startTime < 5e3
                  ? ((o += t.value), l.push(t))
                  : ((o = t.value), (l = [t])),
                  o > n.value && ((n.value = o), (n.entries = l), e && e());
              }
            });
          },
          c = (0, a.observe)("layout-shift", u);
        if (c) {
          e = (0, r.bindReporter)(t, n);
          let i = () => {
            u(c.takeRecords()), e(!0);
          };
          return (0, s.onHidden)(i), i;
        }
      };
    },
    282572: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          onFID: function () {
            return l;
          },
        }),
        n("653041");
      var r = n("358133"),
        i = n("233863"),
        a = n("416097"),
        s = n("544457"),
        o = n("527475");
      let l = t => {
        let e;
        let n = (0, i.getVisibilityWatcher)(),
          l = (0, a.initMetric)("FID"),
          u = t => {
            t.startTime < n.firstHiddenTime &&
              ((l.value = t.processingStart - t.startTime),
              l.entries.push(t),
              e(!0));
          },
          c = t => {
            t.forEach(u);
          },
          d = (0, s.observe)("first-input", c);
        (e = (0, r.bindReporter)(t, l)),
          d &&
            (0, o.onHidden)(() => {
              c(d.takeRecords()), d.disconnect();
            }, !0);
      };
    },
    301072: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          onLCP: function () {
            return c;
          },
        });
      var r = n("358133"),
        i = n("726300"),
        a = n("233863"),
        s = n("416097"),
        o = n("544457"),
        l = n("527475");
      let u = {},
        c = t => {
          let e;
          let n = (0, a.getVisibilityWatcher)(),
            c = (0, s.initMetric)("LCP"),
            d = t => {
              let r = t[t.length - 1];
              if (r) {
                let t = Math.max(r.startTime - (0, i.getActivationStart)(), 0);
                t < n.firstHiddenTime &&
                  ((c.value = t), (c.entries = [r]), e());
              }
            },
            h = (0, o.observe)("largest-contentful-paint", d);
          if (h) {
            e = (0, r.bindReporter)(t, c);
            let n = () => {
              !u[c.id] &&
                (d(h.takeRecords()), h.disconnect(), (u[c.id] = !0), e(!0));
            };
            return (
              ["keydown", "click"].forEach(t => {
                addEventListener(t, n, { once: !0, capture: !0 });
              }),
              (0, l.onHidden)(n, !0),
              n
            );
          }
        };
    },
    358133: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          bindReporter: function () {
            return r;
          },
        });
      let r = (t, e, n) => {
        let r, i;
        return a => {
          e.value >= 0 &&
            (a || n) &&
            ((i = e.value - (r || 0)) || void 0 === r) &&
            ((r = e.value), (e.delta = i), t(e));
        };
      };
    },
    134954: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          generateUniqueID: function () {
            return r;
          },
        });
      let r = () =>
        `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
    },
    726300: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getActivationStart: function () {
            return i;
          },
        });
      var r = n("27583");
      let i = () => {
        let t = (0, r.getNavigationEntry)();
        return (t && t.activationStart) || 0;
      };
    },
    27583: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getNavigationEntry: function () {
            return a;
          },
        });
      var r = n("607190");
      let i = () => {
          let t = r.WINDOW.performance.timing,
            e = r.WINDOW.performance.navigation.type,
            n = {
              entryType: "navigation",
              startTime: 0,
              type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate",
            };
          for (let e in t)
            "navigationStart" !== e &&
              "toJSON" !== e &&
              (n[e] = Math.max(t[e] - t.navigationStart, 0));
          return n;
        },
        a = () =>
          r.WINDOW.__WEB_VITALS_POLYFILL__
            ? r.WINDOW.performance &&
              ((performance.getEntriesByType &&
                performance.getEntriesByType("navigation")[0]) ||
                i())
            : r.WINDOW.performance &&
              performance.getEntriesByType &&
              performance.getEntriesByType("navigation")[0];
    },
    233863: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          getVisibilityWatcher: function () {
            return l;
          },
        });
      var r = n("607190"),
        i = n("527475");
      let a = -1,
        s = () =>
          "hidden" !== r.WINDOW.document.visibilityState ||
          r.WINDOW.document.prerendering
            ? 1 / 0
            : 0,
        o = () => {
          (0, i.onHidden)(t => {
            let { timeStamp: e } = t;
            a = e;
          }, !0);
        },
        l = () => (
          a < 0 && ((a = s()), o()),
          {
            get firstHiddenTime() {
              return a;
            },
          }
        );
    },
    416097: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          initMetric: function () {
            return o;
          },
        });
      var r = n("607190"),
        i = n("134954"),
        a = n("726300"),
        s = n("27583");
      let o = (t, e) => {
        let n = (0, s.getNavigationEntry)(),
          o = "navigate";
        return (
          n &&
            (o =
              r.WINDOW.document.prerendering || (0, a.getActivationStart)() > 0
                ? "prerender"
                : n.type.replace(/_/g, "-")),
          {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: (0, i.generateUniqueID)(),
            navigationType: o,
          }
        );
      };
    },
    544457: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          observe: function () {
            return r;
          },
        });
      let r = (t, e, n) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            let r = new PerformanceObserver(t => {
              e(t.getEntries());
            });
            return (
              r.observe(Object.assign({ type: t, buffered: !0 }, n || {})), r
            );
          }
        } catch (t) {}
      };
    },
    527475: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          onHidden: function () {
            return i;
          },
        });
      var r = n("607190");
      let i = (t, e) => {
        let n = i => {
          ("pagehide" === i.type ||
            "hidden" === r.WINDOW.document.visibilityState) &&
            (t(i),
            e &&
              (removeEventListener("visibilitychange", n, !0),
              removeEventListener("pagehide", n, !0)));
        };
        addEventListener("visibilitychange", n, !0),
          addEventListener("pagehide", n, !0);
      };
    },
    752875: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BrowserTracing: function () {
            return r.BrowserTracing;
          },
          defaultRequestInstrumentationOptions: function () {
            return i.defaultRequestInstrumentationOptions;
          },
          instrumentOutgoingRequests: function () {
            return i.instrumentOutgoingRequests;
          },
        });
      var r = n("204325"),
        i = n("722994");
    },
  },
]);
//# sourceMappingURL=14700.672d148cd9db8f9ba8a1.js.map

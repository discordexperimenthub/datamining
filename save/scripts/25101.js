(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25101"],
  {
    386411: function (e, t, n) {
      (e = n.nmd(e)),
        n("424973"),
        n("70102"),
        n("511434"),
        n("313619"),
        n("654714"),
        n("287168"),
        n("956660"),
        n("222007"),
        n("781738"),
        !(function () {
          var t = function (e) {
            "use strict";
            e = e || {};
            var t,
              n,
              r,
              o,
              i,
              a,
              c,
              s,
              l,
              d,
              p,
              u,
              h,
              f,
              y,
              w,
              g = {
                bgColor: "#d00",
                textColor: "#fff",
                fontFamily: "sans-serif",
                fontStyle: "bold",
                type: "circle",
                position: "down",
                animation: "slide",
                elementId: !1,
                dataUrl: !1,
                win: window,
              };
            ((h = {}).ff = "undefined" != typeof InstallTrigger),
              (h.chrome = !!window.chrome),
              (h.opera =
                !!window.opera || navigator.userAgent.indexOf("Opera") >= 0),
              (h.ie = !1),
              (h.safari =
                Object.prototype.toString
                  .call(window.HTMLElement)
                  .indexOf("Constructor") > 0),
              (h.supported = h.chrome || h.ff || h.opera);
            var m = [];
            (p = function () {}), (s = u = !1);
            var x = {};
            (x.ready = function () {
              (s = !0), x.reset(), p();
            }),
              (x.reset = function () {
                s &&
                  ((m = []),
                  (l = !1),
                  (d = !1),
                  a.clearRect(0, 0, o, r),
                  a.drawImage(c, 0, 0, o, r),
                  C.setIcon(i),
                  window.clearTimeout(f),
                  window.clearTimeout(y));
              }),
              (x.start = function () {
                if (s && !d) {
                  var e = function () {
                    (l = m[0]),
                      (d = !1),
                      m.length > 0 && (m.shift(), x.start());
                  };
                  if (m.length > 0) {
                    d = !0;
                    var n = function () {
                      [
                        "type",
                        "animation",
                        "bgColor",
                        "textColor",
                        "fontFamily",
                        "fontStyle",
                      ].forEach(function (e) {
                        e in m[0].options && (t[e] = m[0].options[e]);
                      }),
                        T.run(
                          m[0].options,
                          function () {
                            e();
                          },
                          !1
                        );
                    };
                    l
                      ? T.run(
                          l.options,
                          function () {
                            n();
                          },
                          !0
                        )
                      : n();
                  }
                }
              });
            var b = {},
              v = function (e) {
                return (
                  (e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n),
                  (e.x = o * e.x),
                  (e.y = r * e.y),
                  (e.w = o * e.w),
                  (e.h = r * e.h),
                  (e.len = ("" + e.n).length),
                  e
                );
              };
            (b.circle = function (e) {
              e = v(e);
              var n = !1;
              2 === e.len
                ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w), (n = !0))
                : e.len >= 3 &&
                  ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w), (n = !0)),
                a.clearRect(0, 0, o, r),
                a.drawImage(c, 0, 0, o, r),
                a.beginPath(),
                (a.font =
                  t.fontStyle +
                  " " +
                  Math.floor(e.h * (e.n > 99 ? 0.85 : 1)) +
                  "px " +
                  t.fontFamily),
                (a.textAlign = "center"),
                n
                  ? (a.moveTo(e.x + e.w / 2, e.y),
                    a.lineTo(e.x + e.w - e.h / 2, e.y),
                    a.quadraticCurveTo(
                      e.x + e.w,
                      e.y,
                      e.x + e.w,
                      e.y + e.h / 2
                    ),
                    a.lineTo(e.x + e.w, e.y + e.h - e.h / 2),
                    a.quadraticCurveTo(
                      e.x + e.w,
                      e.y + e.h,
                      e.x + e.w - e.h / 2,
                      e.y + e.h
                    ),
                    a.lineTo(e.x + e.h / 2, e.y + e.h),
                    a.quadraticCurveTo(
                      e.x,
                      e.y + e.h,
                      e.x,
                      e.y + e.h - e.h / 2
                    ),
                    a.lineTo(e.x, e.y + e.h / 2),
                    a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y))
                  : a.arc(
                      e.x + e.w / 2,
                      e.y + e.h / 2,
                      e.h / 2,
                      0,
                      2 * Math.PI
                    ),
                (a.fillStyle =
                  "rgba(" +
                  t.bgColor.r +
                  "," +
                  t.bgColor.g +
                  "," +
                  t.bgColor.b +
                  "," +
                  e.o +
                  ")"),
                a.fill(),
                a.closePath(),
                a.beginPath(),
                a.stroke(),
                (a.fillStyle =
                  "rgba(" +
                  t.textColor.r +
                  "," +
                  t.textColor.g +
                  "," +
                  t.textColor.b +
                  "," +
                  e.o +
                  ")"),
                "number" == typeof e.n && e.n > 999
                  ? a.fillText(
                      (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                      Math.floor(e.x + e.w / 2),
                      Math.floor(e.y + e.h - 0.2 * e.h)
                    )
                  : a.fillText(
                      e.n,
                      Math.floor(e.x + e.w / 2),
                      Math.floor(e.y + e.h - 0.15 * e.h)
                    ),
                a.closePath();
            }),
              (b.rectangle = function (e) {
                e = v(e);
                var n = !1;
                2 === e.len
                  ? ((e.x = e.x - 0.4 * e.w), (e.w = 1.4 * e.w))
                  : e.len >= 3 &&
                    ((e.x = e.x - 0.65 * e.w), (e.w = 1.65 * e.w)),
                  a.clearRect(0, 0, o, r),
                  a.drawImage(c, 0, 0, o, r),
                  a.beginPath(),
                  (a.font =
                    t.fontStyle +
                    " " +
                    Math.floor(e.h * (e.n > 99 ? 0.9 : 1)) +
                    "px " +
                    t.fontFamily),
                  (a.textAlign = "center"),
                  (a.fillStyle =
                    "rgba(" +
                    t.bgColor.r +
                    "," +
                    t.bgColor.g +
                    "," +
                    t.bgColor.b +
                    "," +
                    e.o +
                    ")"),
                  a.fillRect(e.x, e.y, e.w, e.h),
                  (a.fillStyle =
                    "rgba(" +
                    t.textColor.r +
                    "," +
                    t.textColor.g +
                    "," +
                    t.textColor.b +
                    "," +
                    e.o +
                    ")"),
                  "number" == typeof e.n && e.n > 999
                    ? a.fillText(
                        (e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+",
                        Math.floor(e.x + e.w / 2),
                        Math.floor(e.y + e.h - 0.2 * e.h)
                      )
                    : a.fillText(
                        e.n,
                        Math.floor(e.x + e.w / 2),
                        Math.floor(e.y + e.h - 0.15 * e.h)
                      ),
                  a.closePath();
              });
            function E(e) {
              if (e.paused || e.ended || u) return !1;
              try {
                a.clearRect(0, 0, o, r), a.drawImage(e, 0, 0, o, r);
              } catch (e) {}
              (y = setTimeout(function () {
                E(e);
              }, T.duration)),
                C.setIcon(i);
            }
            var C = {};
            function R(e) {
              e = e.replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                function (e, t, n, r) {
                  return t + t + n + n + r + r;
                }
              );
              var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return (
                !!t && {
                  r: parseInt(t[1], 16),
                  g: parseInt(t[2], 16),
                  b: parseInt(t[3], 16),
                }
              );
            }
            function _(e, t) {
              var n,
                r = {};
              for (n in e) r[n] = e[n];
              for (n in t) r[n] = t[n];
              return r;
            }
            (C.getIcon = function () {
              var e = !1;
              return (
                t.element
                  ? (e = t.element)
                  : t.elementId
                    ? (e = w.getElementById(t.elementId)).setAttribute(
                        "href",
                        e.getAttribute("src")
                      )
                    : !1 ===
                        (e = (function () {
                          for (
                            var e = w
                                .getElementsByTagName("head")[0]
                                .getElementsByTagName("link"),
                              t = e.length,
                              n = t - 1;
                            n >= 0;
                            n--
                          )
                            if (
                              /(^|\s)icon(\s|$)/i.test(e[n].getAttribute("rel"))
                            )
                              return e[n];
                          return !1;
                        })()) &&
                      ((e = w.createElement("link")).setAttribute(
                        "rel",
                        "icon"
                      ),
                      w.getElementsByTagName("head")[0].appendChild(e)),
                e.setAttribute("type", "image/png"),
                e
              );
            }),
              (C.setIcon = function (e) {
                var r = e.toDataURL("image/png");
                if ((t.dataUrl && t.dataUrl(r), t.element))
                  t.element.setAttribute("href", r),
                    t.element.setAttribute("src", r);
                else if (t.elementId) {
                  var o = w.getElementById(t.elementId);
                  o.setAttribute("href", r), o.setAttribute("src", r);
                } else if (h.ff || h.opera) {
                  var i = n;
                  (n = w.createElement("link")),
                    h.opera && n.setAttribute("rel", "icon"),
                    n.setAttribute("rel", "icon"),
                    n.setAttribute("type", "image/png"),
                    w.getElementsByTagName("head")[0].appendChild(n),
                    n.setAttribute("href", r),
                    i.parentNode && i.parentNode.removeChild(i);
                } else n.setAttribute("href", r);
              });
            var T = {};
            return (
              (T.duration = 40),
              (T.types = {}),
              (T.types.fade = [
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.2 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.3 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.4 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.5 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.6 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.7 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.8 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 0.9 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
              ]),
              (T.types.none = [{ x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 }]),
              (T.types.pop = [
                { x: 1, y: 1, w: 0, h: 0, o: 1 },
                { x: 0.9, y: 0.9, w: 0.1, h: 0.1, o: 1 },
                { x: 0.8, y: 0.8, w: 0.2, h: 0.2, o: 1 },
                { x: 0.7, y: 0.7, w: 0.3, h: 0.3, o: 1 },
                { x: 0.6, y: 0.6, w: 0.4, h: 0.4, o: 1 },
                { x: 0.5, y: 0.5, w: 0.5, h: 0.5, o: 1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
              ]),
              (T.types.popFade = [
                { x: 0.75, y: 0.75, w: 0, h: 0, o: 0 },
                { x: 0.65, y: 0.65, w: 0.1, h: 0.1, o: 0.2 },
                { x: 0.6, y: 0.6, w: 0.2, h: 0.2, o: 0.4 },
                { x: 0.55, y: 0.55, w: 0.3, h: 0.3, o: 0.6 },
                { x: 0.5, y: 0.5, w: 0.4, h: 0.4, o: 0.8 },
                { x: 0.45, y: 0.45, w: 0.5, h: 0.5, o: 0.9 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
              ]),
              (T.types.slide = [
                { x: 0.4, y: 1, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.9, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.8, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.7, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.6, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.5, w: 0.6, h: 0.6, o: 1 },
                { x: 0.4, y: 0.4, w: 0.6, h: 0.6, o: 1 },
              ]),
              (T.run = function (e, n, r, o) {
                var a =
                  T.types[
                    w.hidden || w.msHidden || w.webkitHidden || w.mozHidden
                      ? "none"
                      : t.animation
                  ];
                if (
                  ((o =
                    !0 === r
                      ? void 0 !== o
                        ? o
                        : a.length - 1
                      : void 0 !== o
                        ? o
                        : 0),
                  (n = n || function () {}),
                  o < a.length && o >= 0)
                )
                  b[t.type](_(e, a[o])),
                    (f = setTimeout(function () {
                      r ? (o -= 1) : (o += 1), T.run(e, n, r, o);
                    }, T.duration)),
                    C.setIcon(i);
                else {
                  n();
                  return;
                }
              }),
              !(function () {
                ((t = _(g, e)).bgColor = R(t.bgColor)),
                  (t.textColor = R(t.textColor)),
                  (t.position = t.position.toLowerCase()),
                  (t.animation = T.types["" + t.animation]
                    ? t.animation
                    : g.animation),
                  (w = t.win.document);
                var s = t.position.indexOf("up") > -1,
                  l = t.position.indexOf("left") > -1;
                if (s || l)
                  for (var d = 0; d < T.types["" + t.animation].length; d++) {
                    var p = T.types["" + t.animation][d];
                    s &&
                      (p.y < 0.6
                        ? (p.y = p.y - 0.4)
                        : (p.y = p.y - 2 * p.y + (1 - p.w))),
                      l &&
                        (p.x < 0.6
                          ? (p.x = p.x - 0.4)
                          : (p.x = p.x - 2 * p.x + (1 - p.h))),
                      (T.types["" + t.animation][d] = p);
                  }
                (t.type = b["" + t.type] ? t.type : g.type),
                  (n = C.getIcon()),
                  (i = document.createElement("canvas")),
                  (c = document.createElement("img")),
                  n.hasAttribute("href")
                    ? (c.setAttribute("crossOrigin", "anonymous"),
                      (c.onload = function () {
                        (r = c.height > 0 ? c.height : 32),
                          (o = c.width > 0 ? c.width : 32),
                          (i.height = r),
                          (i.width = o),
                          (a = i.getContext("2d")),
                          x.ready();
                      }),
                      c.setAttribute("src", n.getAttribute("href")))
                    : ((c.onload = function () {
                        (r = 32),
                          (o = 32),
                          (c.height = r),
                          (c.width = o),
                          (i.height = r),
                          (i.width = o),
                          (a = i.getContext("2d")),
                          x.ready();
                      }),
                      c.setAttribute("src", ""));
              })(),
              {
                badge: function (e, t) {
                  (t = ("string" == typeof t ? { animation: t } : t) || {}),
                    (p = function () {
                      try {
                        if ("number" == typeof e ? e > 0 : "" !== e) {
                          var n = { type: "badge", options: { n: e } };
                          if (
                            ("animation" in t &&
                              T.types["" + t.animation] &&
                              (n.options.animation = "" + t.animation),
                            "type" in t &&
                              b["" + t.type] &&
                              (n.options.type = "" + t.type),
                            ["bgColor", "textColor"].forEach(function (e) {
                              e in t && (n.options[e] = R(t[e]));
                            }),
                            ["fontStyle", "fontFamily"].forEach(function (e) {
                              e in t && (n.options[e] = t[e]);
                            }),
                            m.push(n),
                            m.length > 100)
                          )
                            throw Error("Too many badges requests in queue.");
                          x.start();
                        } else x.reset();
                      } catch (e) {
                        throw Error(
                          "Error setting badge. Message: " + e.message
                        );
                      }
                    }),
                    s && p();
                },
                video: function (e) {
                  (p = function () {
                    try {
                      if ("stop" === e) {
                        (u = !0), x.reset(), (u = !1);
                        return;
                      }
                      e.addEventListener(
                        "play",
                        function () {
                          E(this);
                        },
                        !1
                      );
                    } catch (e) {
                      throw Error("Error setting video. Message: " + e.message);
                    }
                  }),
                    s && p();
                },
                image: function (e) {
                  (p = function () {
                    try {
                      var t = e.width,
                        n = e.height,
                        c = document.createElement("img"),
                        s = t / o < n / r ? t / o : n / r;
                      c.setAttribute("crossOrigin", "anonymous"),
                        (c.onload = function () {
                          a.clearRect(0, 0, o, r),
                            a.drawImage(c, 0, 0, o, r),
                            C.setIcon(i);
                        }),
                        c.setAttribute("src", e.getAttribute("src")),
                        (c.height = n / s),
                        (c.width = t / s);
                    } catch (e) {
                      throw Error("Error setting image. Message: " + e.message);
                    }
                  }),
                    s && p();
                },
                webcam: function (e) {
                  if (
                    ((!window.URL || !window.URL.createObjectURL) &&
                      ((window.URL = window.URL || {}),
                      (window.URL.createObjectURL = function (e) {
                        return e;
                      })),
                    h.supported)
                  ) {
                    var t = !1;
                    (navigator.getUserMedia =
                      navigator.getUserMedia ||
                      navigator.oGetUserMedia ||
                      navigator.msGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.webkitGetUserMedia),
                      (p = function () {
                        try {
                          if ("stop" === e) {
                            (u = !0), x.reset(), (u = !1);
                            return;
                          }
                          ((t = document.createElement("video")).width = o),
                            (t.height = r),
                            navigator.getUserMedia(
                              { video: !0, audio: !1 },
                              function (e) {
                                (t.src = URL.createObjectURL(e)),
                                  t.play(),
                                  E(t);
                              },
                              function () {}
                            );
                        } catch (e) {
                          throw Error(
                            "Error setting webcam. Message: " + e.message
                          );
                        }
                      }),
                      s && p();
                  }
                },
                reset: x.reset,
                browser: { supported: h.supported },
              }
            );
          };
          "undefined" != typeof define && define.amd
            ? define([], function () {
                return t;
              })
            : void 0 !== e && e.exports
              ? (e.exports = t)
              : (this.Favico = t);
        })();
    },
    67164: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("808653"),
        n("70102");
      var r = n("884691"),
        o = n.n(r);
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var a = function (e) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.defer = !0),
            (t.src = e),
            document.head && document.head.appendChild(t);
        },
        c = /(http|https):\/\/(www)?.+\/recaptcha/,
        s = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
        l = (function (e) {
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
                  ((e = c),
                  !Array.from(document.scripts).reduce(function (t, n) {
                    return t || e.test(n.src);
                  }, !1)) &&
                  a(
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
                var e = o.createElement("div", {
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
      l.defaultProps = {
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
    926607: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          !t && (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      n.r(t),
        n.d(t, {
          _: function () {
            return r;
          },
        });
    },
  },
]);
//# sourceMappingURL=faf673263df2feaef44b.js.map

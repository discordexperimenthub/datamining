(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46116"],
  {
    474172: function (t, e, i) {
      "use strict";
      var n = i("696397").charAt;
      t.exports = function (t, e, i) {
        return e + (i ? n(t, e).length : 1);
      };
    },
    78117: function (t, e, i) {
      "use strict";
      i("780440");
      var n = i("404446"),
        r = i("484784"),
        a = i("274198"),
        s = i("664144"),
        o = i("174669"),
        l = i("366483"),
        u = o("species"),
        c = RegExp.prototype;
      t.exports = function (t, e, i, h) {
        var f = o(t),
          d = !s(function () {
            var e = {};
            return (
              (e[f] = function () {
                return 7;
              }),
              7 !== ""[t](e)
            );
          }),
          m =
            d &&
            !s(function () {
              var e = !1,
                i = /a/;
              return (
                "split" === t &&
                  (((i = {}).constructor = {}),
                  (i.constructor[u] = function () {
                    return i;
                  }),
                  (i.flags = ""),
                  (i[f] = /./[f])),
                (i.exec = function () {
                  return (e = !0), null;
                }),
                i[f](""),
                !e
              );
            });
        if (!d || !m || i) {
          var v = n(/./[f]),
            p = e(f, ""[t], function (t, e, i, r, s) {
              var o = n(t),
                l = e.exec;
              if (l === a || l === c.exec)
                return d && !s
                  ? { done: !0, value: v(e, i, r) }
                  : { done: !0, value: o(i, e, r) };
              return { done: !1 };
            });
          r(String.prototype, t, p[0]), r(c, f, p[1]);
        }
        h && l(c[f], "sham", !0);
      };
    },
    87078: function (t, e, i) {
      "use strict";
      var n = i("64980"),
        r = i("116180"),
        a = Math.floor,
        s = n("".charAt),
        o = n("".replace),
        l = n("".slice),
        u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        c = /\$([$&'`]|\d{1,2})/g;
      t.exports = function (t, e, i, n, h, f) {
        var d = i + t.length,
          m = n.length,
          v = c;
        return (
          void 0 !== h && ((h = r(h)), (v = u)),
          o(f, v, function (r, o) {
            var u;
            switch (s(o, 0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return l(e, 0, i);
              case "'":
                return l(e, d);
              case "<":
                u = h[l(o, 1, -1)];
                break;
              default:
                var c = +o;
                if (0 === c) return r;
                if (c > m) {
                  var f = a(c / 10);
                  if (0 === f) return r;
                  if (f <= m)
                    return void 0 === n[f - 1] ? s(o, 1) : n[f - 1] + s(o, 1);
                  return r;
                }
                u = n[c - 1];
            }
            return void 0 === u ? "" : u;
          })
        );
      };
    },
    622279: function (t, e, i) {
      "use strict";
      var n = i("868822"),
        r = i("418855"),
        a = i("125359"),
        s = i("745795"),
        o = i("274198"),
        l = TypeError;
      t.exports = function (t, e) {
        var i = t.exec;
        if (a(i)) {
          var u = n(i, t, e);
          return null !== u && r(u), u;
        }
        if ("RegExp" === s(t)) return n(o, t, e);
        throw l("RegExp#exec called on incompatible receiver");
      };
    },
    274198: function (t, e, i) {
      "use strict";
      var n,
        r,
        a = i("868822"),
        s = i("64980"),
        o = i("998270"),
        l = i("383252"),
        u = i("854745"),
        c = i("17758"),
        h = i("148066"),
        f = i("515011").get,
        d = i("297403"),
        m = i("34810"),
        v = c("native-string-replace", String.prototype.replace),
        p = RegExp.prototype.exec,
        g = p,
        x = s("".charAt),
        I = s("".indexOf),
        w = s("".replace),
        y = s("".slice);
      var b =
          ((r = /b*/g),
          a(p, (n = /a/), "a"),
          a(p, r, "a"),
          0 !== n.lastIndex || 0 !== r.lastIndex),
        A = u.BROKEN_CARET,
        F = void 0 !== /()??/.exec("")[1];
      (b || F || A || d || m) &&
        (g = function (t) {
          var e,
            i,
            n,
            r,
            s,
            u,
            c,
            d = f(this),
            m = o(t),
            k = d.raw;
          if (k)
            return (
              (k.lastIndex = this.lastIndex),
              (e = a(g, k, m)),
              (this.lastIndex = k.lastIndex),
              e
            );
          var E = d.groups,
            C = A && this.sticky,
            _ = a(l, this),
            T = this.source,
            q = 0,
            R = m;
          if (
            (C &&
              (-1 === I((_ = w(_, "y", "")), "g") && (_ += "g"),
              (R = y(m, this.lastIndex)),
              this.lastIndex > 0 &&
                (!this.multiline ||
                  (this.multiline && "\n" !== x(m, this.lastIndex - 1))) &&
                ((T = "(?: " + T + ")"), (R = " " + R), q++),
              (i = RegExp("^(?:" + T + ")", _))),
            F && (i = RegExp("^" + T + "$(?!\\s)", _)),
            b && (n = this.lastIndex),
            (r = a(p, C ? i : this, R)),
            C
              ? r
                ? ((r.input = y(r.input, q)),
                  (r[0] = y(r[0], q)),
                  (r.index = this.lastIndex),
                  (this.lastIndex += r[0].length))
                : (this.lastIndex = 0)
              : b &&
                r &&
                (this.lastIndex = this.global ? r.index + r[0].length : n),
            F &&
              r &&
              r.length > 1 &&
              a(v, r[0], i, function () {
                for (s = 1; s < arguments.length - 2; s++)
                  void 0 === arguments[s] && (r[s] = void 0);
              }),
            r && E)
          )
            for (s = 0, r.groups = u = h(null); s < E.length; s++)
              u[(c = E[s])[0]] = r[c[1]];
          return r;
        }),
        (t.exports = g);
    },
    383252: function (t, e, i) {
      "use strict";
      var n = i("418855");
      t.exports = function () {
        var t = n(this),
          e = "";
        return (
          t.hasIndices && (e += "d"),
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.unicodeSets && (e += "v"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    854745: function (t, e, i) {
      "use strict";
      var n = i("664144"),
        r = i("503486").RegExp,
        a = n(function () {
          var t = r("a", "y");
          return (t.lastIndex = 2), null !== t.exec("abcd");
        }),
        s =
          a ||
          n(function () {
            return !r("a", "y").sticky;
          }),
        o =
          a ||
          n(function () {
            var t = r("^r", "gy");
            return (t.lastIndex = 2), null !== t.exec("str");
          });
      t.exports = { BROKEN_CARET: o, MISSED_STICKY: s, UNSUPPORTED_Y: a };
    },
    297403: function (t, e, i) {
      "use strict";
      var n = i("664144"),
        r = i("503486").RegExp;
      t.exports = n(function () {
        var t = r(".", "s");
        return !(t.dotAll && t.exec("\n") && "s" === t.flags);
      });
    },
    34810: function (t, e, i) {
      "use strict";
      var n = i("664144"),
        r = i("503486").RegExp;
      t.exports = n(function () {
        var t = r("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
      });
    },
    780440: function (t, e, i) {
      "use strict";
      var n = i("859514"),
        r = i("274198");
      n({ target: "RegExp", proto: !0, forced: /./.exec !== r }, { exec: r });
    },
    781738: function (t, e, i) {
      "use strict";
      var n = i("145661"),
        r = i("868822"),
        a = i("64980"),
        s = i("78117"),
        o = i("664144"),
        l = i("418855"),
        u = i("125359"),
        c = i("551544"),
        h = i("969708"),
        f = i("113806"),
        d = i("998270"),
        m = i("590455"),
        v = i("474172"),
        p = i("47361"),
        g = i("87078"),
        x = i("622279"),
        I = i("174669")("replace"),
        w = Math.max,
        y = Math.min,
        b = a([].concat),
        A = a([].push),
        F = a("".indexOf),
        k = a("".slice),
        E = "$0" === "a".replace(/./, "$0"),
        C = !!/./[I] && "" === /./[I]("a", "$0");
      s(
        "replace",
        function (t, e, i) {
          var a = C ? "$" : "$0";
          return [
            function (t, i) {
              var n = m(this),
                a = c(t) ? void 0 : p(t, I);
              return a ? r(a, t, n, i) : r(e, d(n), t, i);
            },
            function (t, r) {
              var s = l(this),
                o = d(t);
              if ("string" == typeof r && -1 === F(r, a) && -1 === F(r, "$<")) {
                var c = i(e, s, o, r);
                if (c.done) return c.value;
              }
              var m = u(r);
              !m && (r = d(r));
              var p = s.global;
              p && ((q = s.unicode), (s.lastIndex = 0));
              for (var I = []; null !== (R = x(s, o)); ) {
                if ((A(I, R), !p)) break;
                "" === d(R[0]) && (s.lastIndex = v(o, f(s.lastIndex), q));
              }
              for (var E = "", C = 0, _ = 0; _ < I.length; _++) {
                for (
                  var T,
                    q,
                    R,
                    O,
                    $ = d((R = I[_])[0]),
                    S = w(y(h(R.index), o.length), 0),
                    D = [],
                    M = 1;
                  M < R.length;
                  M++
                ) {
                  A(D, void 0 === (T = R[M]) ? T : String(T));
                }
                var P = R.groups;
                if (m) {
                  var W = b([$], D, S, o);
                  void 0 !== P && A(W, P), (O = d(n(r, void 0, W)));
                } else O = g($, o, S, D, P, r);
                S >= C && ((E += k(o, C, S) + O), (C = S + $.length));
              }
              return E + k(o, C);
            },
          ];
        },
        !!o(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }) ||
          !E ||
          C
      );
    },
    332822: function (t, e, i) {
      "use strict";
      i("918437")(
        "Uint8",
        function (t) {
          return function (e, i, n) {
            return t(this, e, i, n);
          };
        },
        !0
      );
    },
    854508: function (t, e, i) {
      "use strict";
      var n = i("859514"),
        r = i("503486"),
        a = i("18563"),
        s = i("814026"),
        o = TypeError,
        l = Object.defineProperty,
        u = r.self !== r;
      try {
        if (s) {
          var c = Object.getOwnPropertyDescriptor(r, "self");
          (u || !c || !c.get || !c.enumerable) &&
            a(r, "self", {
              get: function () {
                return r;
              },
              set: function (t) {
                if (this !== r) throw o("Illegal invocation");
                l(r, "self", {
                  value: t,
                  writable: !0,
                  configurable: !0,
                  enumerable: !0,
                });
              },
              configurable: !0,
              enumerable: !0,
            });
        } else n({ global: !0, simple: !0, forced: u }, { self: r });
      } catch (t) {}
    },
    627445: function (t, e, i) {
      "use strict";
      i("70102"), i("781738");
      t.exports = function (t, e, i, n, r, a, s, o) {
        if (!t) {
          var l;
          if (void 0 === e)
            l = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var u = [i, n, r, a, s, o],
              c = 0;
            (l = Error(
              e.replace(/%s/g, function () {
                return u[c++];
              })
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    62981: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return n;
          },
        }),
        i("854508");
      var n,
        r = i("627445"),
        a = i.n(r),
        s = i("429281");
      let o =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope;
      n = class {
        setState(t, e) {
          null != e &&
            (!t && e !== this.currentFrame && this.draw(e),
            (this.currentFrame = e)),
            t && !this.animate && this.resumeAnimation(),
            (this.animate = t),
            this.scheduleOrCancelTick();
        }
        setVisibility(t) {
          let e = this.visible;
          (this.visible = t),
            this.visible && !e && this.resumeAnimation(),
            this.scheduleOrCancelTick();
        }
        resumeAnimation() {
          this.currentFrameTime = performance.now();
        }
        clear() {
          this.canvasContext.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );
        }
        draw(t) {
          return (
            null != this.animation &&
            (this.clear(),
            this.animation.drawInto(
              this.canvasContext,
              t,
              this.canvas.width,
              this.canvas.height
            ),
            !0)
          );
        }
        drop() {
          (this.animate = !1),
            this.scheduleOrCancelTick(),
            s.default.drop(this.key),
            (this.animation = null),
            (this.dropped = !0);
        }
        scheduleOrCancelTick() {
          !this.dropped &&
            (this.hasInitialFrame
              ? this.requestAnimationFrame(
                  this.animate && this.visible ? this.onAnimationTick : null
                )
              : this.requestAnimationFrame(this.onInitialAnimationTick));
        }
        requestAnimationFrame(t) {
          null != t &&
            null == this.requestAnimationFrameId &&
            (this.requestAnimationFrameId = requestAnimationFrame(t)),
            null != t &&
              null != this.requestAnimationFrameId &&
              (cancelAnimationFrame(this.requestAnimationFrameId),
              (this.requestAnimationFrameId = requestAnimationFrame(t))),
            null == t &&
              null != this.requestAnimationFrameId &&
              (cancelAnimationFrame(this.requestAnimationFrameId),
              (this.requestAnimationFrameId = null));
        }
        constructor({
          canvas: t,
          id: e,
          assetUrl: i,
          assetData: n,
          isVisible: r,
          shouldAnimate: l,
          onInitialDraw: u,
          onError: c,
        }) {
          (this.animation = null),
            (this.onInitialAnimationTick = t => {
              this.requestAnimationFrameId = null;
              let e = performance.now();
              if ((e - t < 30 || o) && this.draw(0)) {
                var i;
                this.resumeAnimation(),
                  null === (i = this.onInitialDraw) ||
                    void 0 === i ||
                    i.call(this),
                  (this.hasInitialFrame = !0);
              }
              this.scheduleOrCancelTick();
            }),
            (this.onAnimationTick = t => {
              this.requestAnimationFrameId = null;
              let e = performance.now(),
                i = (o ? e : t) - this.currentFrameTime,
                n = Math.floor(i / this.frameDuration);
              n > 0 &&
                ((e - t < 12 || o) &&
                  (this.draw(this.currentFrame), (this.currentFrame += n)),
                (this.currentFrameTime += n * this.frameDuration)),
                this.scheduleOrCancelTick();
            });
          let h = t.getContext("2d");
          a(null != h, "couldn't get canvas 2d context."),
            (this.canvas = t),
            (this.canvasContext = h),
            (this.animation = null),
            (this.dropped = !1),
            (this.currentFrame = 0),
            (this.currentFrameTime = 0),
            (this.frameDuration = 1e3),
            (this.animate = l),
            (this.visible = r),
            (this.requestAnimationFrameId = null),
            (this.hasInitialFrame = !1),
            (this.onInitialDraw = u),
            (this.onError = c),
            (this.key = ""
              .concat(e, ":")
              .concat(t.width, ":")
              .concat(t.height)),
            s.default
              .create(this.key, t.width, t.height, i, n)
              .then(t => {
                null != t &&
                  (this.dropped
                    ? s.default.drop(this.key)
                    : ((this.animation = t),
                      (this.frameDuration = 1e3 / t.frameRate),
                      this.scheduleOrCancelTick()));
              })
              .catch(t => {
                null == c || c();
              });
        }
      };
    },
    349807: function (t, e, i) {
      "use strict";
      var n;
      i.r(e),
        i.d(e, {
          default: function () {
            return n;
          },
        }),
        i("222007"),
        i("70102");
      n = class {
        drawInto(t, e, i, n) {
          (e %= this.frameCount), this.requireFrame(e);
          let [a, s, o, l] = r(
            e,
            this.frameWidth,
            this.frameHeight,
            this.cells
          );
          t.drawImage(this.canvas, a, s, o, l, 0, 0, i, n);
        }
        drop() {
          var t;
          null === (t = this.native) || void 0 === t || t.drop(),
            (this.native = null);
        }
        requireFrame(t) {
          null != this.native &&
            (!this.renderedFrames.has(t) &&
              (this.paint(t), this.renderedFrames.add(t)),
            this.renderedFrames.size === this.frameCount && this.drop());
        }
        paint(t) {
          if (null != this.native) {
            var e;
            let i = this.native.get_bgra(t, this.frameWidth, this.frameHeight),
              n = new ImageData(i, this.frameWidth, this.frameHeight),
              [a, s, o, l] = r(
                t,
                this.frameWidth,
                this.frameHeight,
                this.cells
              );
            null === (e = this.context) ||
              void 0 === e ||
              e.putImageData(n, a, s, 0, 0, o, l);
          }
        }
        constructor(t, e, i, n) {
          let [r, a, s] = (function (t, e, i) {
            let n = Math.ceil(Math.sqrt(i));
            return [n, n * t, n * e];
          })(i, n, t.frames);
          if (
            ((this.key = e),
            (this.canvas = (function (t, e) {
              if ("function" == typeof OffscreenCanvas)
                return new OffscreenCanvas(t, e);
              let i = document.createElement("canvas");
              return (i.width = t), (i.height = e), i;
            })(a, s)),
            (this.context = this.canvas.getContext("2d")),
            (this.cells = r),
            (this.native = t),
            (this.renderedFrames = new Set()),
            (this.frameWidth = i),
            (this.frameHeight = n),
            (this.frameRate = t.fps),
            (this.frameCount = t.frames),
            null == this.context)
          )
            throw Error("couldn't create 2d canvas context.");
        }
      };
      function r(t, e, i, n) {
        return [Math.floor(t / n) * e, (t % n) * i, e, i];
      }
    },
    429281: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return s;
          },
        }),
        i("222007"),
        i("424973"),
        i("70102");
      var n = i("349807"),
        r = i("244639");
      async function a(t, e, i, a, s) {
        let o = s;
        if (null == o) {
          let t = await fetch(a);
          if (!t.ok) throw Error("Error fetching sticker at ".concat(a));
          o = await t.text();
        }
        if (null == o) return null;
        await (0, r.initialize)();
        let l = new r.default(o);
        return new n.default(l, t, e, i);
      }
      var s = new (class t {
        create(t, e, i, n, r) {
          let s =
            !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
          return this.getCached(t).then(o => {
            var l;
            if (
              (this.referenceCounts.set(
                t,
                (null !== (l = this.referenceCounts.get(t)) && void 0 !== l
                  ? l
                  : 0) + 1
              ),
              o)
            )
              return o;
            let u = { key: t, promise: a(t, e, i, n, r) };
            return (
              s &&
                (this.entries.push(u),
                u.promise
                  .then(e => (null == e && this.removeEntry(t), e))
                  .catch(e => this.removeEntry(t)),
                this.entries.length > 50 && this.removeEntryAt(0)),
              u.promise
            );
          });
        }
        drop(t) {
          this.removeEntry(t);
        }
        getCached(t) {
          let e = this.entries.findIndex(e => e.key === t);
          if (e >= 0) {
            let t = this.entries[e];
            return (
              this.entries.splice(e, 1),
              this.entries.push(t),
              t.promise.then(t => (null == t && this.removeEntryAt(e), t))
            );
          }
          return Promise.resolve(null);
        }
        removeEntry(t) {
          let e = this.entries.findIndex(e => e.key === t);
          if (!(e >= 0)) return null;
          this.removeEntryAt(e);
        }
        removeEntryAt(t) {
          let e = this.entries[t],
            i = this.referenceCounts.get(e.key);
          return null != i && i > 1
            ? (this.referenceCounts.set(e.key, i - 1), null)
            : (this.entries.splice(t, 1),
              this.referenceCounts.delete(e.key),
              e.promise.then(t => (null == t ? void 0 : t.drop())),
              e);
        }
        constructor() {
          (this.entries = []), (this.referenceCounts = new Map());
        }
      })();
    },
    244639: function (t, e, i) {
      "use strict";
      let n, r, a, s, o, l, u, c, h;
      i.r(e),
        i.d(e, {
          initialize: function () {
            return g;
          },
          default: function () {
            return f;
          },
        }),
        i("332822"),
        i("477657"),
        i("811875"),
        i("90301"),
        i("652153"),
        i("28797"),
        i("817884"),
        i("597349"),
        i("667536"),
        i("690341"),
        i("70102");
      var f,
        d = i("627445"),
        m = i.n(d),
        v = i("739942");
      let p = 409600,
        g = (0, v.createQueuedAsyncInitializer)(async () => {
          let t = await i.el("227332").then(i.bind(i, "227332")),
            e = await t.default();
          (a = e.cwrap("lottie_create", "number", ["string"])),
            (s = e._lottie_destroy),
            (o = e._lottie_draw_into_bgra),
            (l = e._lottie_draw_into_rgba),
            (u = e._lottie_frame_count),
            (c = e._lottie_frame_rate),
            (h = e._memory_create),
            (n = e),
            (r = h(p));
        });
      function x(t, e) {
        return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
      }
      f = class {
        get fps() {
          return c(this.native);
        }
        get frames() {
          return u(this.native);
        }
        get_bgra(t, e, i) {
          return (
            m(e <= 320, "width exceeds static allocation."),
            m(i <= 320, "height exceeds static allocation."),
            o(this.native, r, t, e, i),
            x(e, i)
          );
        }
        get_rgba(t, e, i) {
          return (
            m(e <= 320, "width exceeds static allocation."),
            m(i <= 320, "height exceeds static allocation."),
            l(this.native, r, t, e, i),
            x(e, i)
          );
        }
        drop() {
          s(this.native);
        }
        constructor(t) {
          if (((this.native = a(t)), 0 === this.native))
            throw Error("couldn't create wasm lottie. potentially bad json.");
        }
      };
    },
  },
]);
//# sourceMappingURL=693b8d12ab7c8e7a4a50.js.map

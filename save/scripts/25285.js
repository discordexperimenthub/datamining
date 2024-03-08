(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25285"],
  {
    225629: function (n, t, e) {
      "use strict";
      e.a(n, async function (n, r) {
        try {
          e.r(t);
          var i = e("795924"),
            u = e("738113"),
            c = n([i, u]);
          ([i, u] = c.then ? (await c)() : c), e.es(u, t), r();
        } catch (n) {
          r(n);
        }
      });
    },
    738113: function (n, t, e) {
      "use strict";
      e.a(n, async function (r, i) {
        try {
          e.r(t),
            e.d(t, {
              crop_gif: function () {
                return f;
              },
              __wbindgen_string_new: function () {
                return _;
              },
              __wbindgen_rethrow: function () {
                return d;
              },
            }),
            e("311790"),
            e("477657"),
            e("811875"),
            e("90301"),
            e("652153"),
            e("28797"),
            e("817884"),
            e("597349"),
            e("667536"),
            e("690341"),
            e("424973"),
            e("527135");
          var u = e("795924");
          n = e.hmd(n);
          var c = r([u]);
          [u] = c.then ? (await c)() : c;
          let s =
              "undefined" == typeof TextDecoder
                ? (0, n.require)("util").TextDecoder
                : TextDecoder,
            l = new s("utf-8", { ignoreBOM: !0, fatal: !0 });
          l.decode();
          let w = null;
          function o() {
            return (
              (null === w || w.buffer !== u.memory.buffer) &&
                (w = new Uint8Array(u.memory.buffer)),
              w
            );
          }
          let h = Array(32).fill(void 0);
          h.push(void 0, null, !0, !1);
          let b = h.length,
            g = 0,
            y = null;
          function a() {
            return (
              (null === y || y.buffer !== u.memory.buffer) &&
                (y = new Int32Array(u.memory.buffer)),
              y
            );
          }
          function f(n, t, e, r, i) {
            try {
              let h = u.__wbindgen_add_to_stack_pointer(-16);
              var c,
                f,
                _ = (function (n, t) {
                  let e = t(1 * n.length);
                  return o().set(n, e / 1), (g = n.length), e;
                })(n, u.__wbindgen_malloc),
                d = g;
              u.crop_gif(h, _, d, t, e, r, i);
              var s = a()[h / 4 + 0],
                l = a()[h / 4 + 1];
              var w = ((c = s),
              (f = l),
              o().subarray(c / 1, c / 1 + f)).slice();
              return u.__wbindgen_free(s, 1 * l), w;
            } finally {
              u.__wbindgen_add_to_stack_pointer(16);
            }
          }
          function _(n, t) {
            var e,
              r,
              i = ((e = n), (r = t), l.decode(o().subarray(e, e + r)));
            return (function (n) {
              b === h.length && h.push(h.length + 1);
              let t = b;
              return (b = h[t]), (h[t] = n), t;
            })(i);
          }
          function d(n) {
            throw (function (n) {
              var t;
              let e = h[n];
              return (t = n) < 36 || ((h[t] = b), (b = t)), e;
            })(n);
          }
          i();
        } catch (n) {
          i(n);
        }
      });
    },
    527135: function (n, t, e) {
      "use strict";
      e("918437")("Int32", function (n) {
        return function (t, e, r) {
          return n(this, t, e, r);
        };
      });
    },
    311790: function (n, t, e) {
      "use strict";
      e("918437")("Uint8", function (n) {
        return function (t, e, r) {
          return n(this, t, e, r);
        };
      });
    },
    795924: function (n, t, e) {
      "use strict";
      e.a(
        n,
        async function (r, i) {
          try {
            var u = e("738113"),
              c = r([u]),
              [u] = c.then ? (await c)() : c;
            await e.v(t, n.id, "6c50d545de671668.module.wasm", {
              "./index_bg.js": {
                __wbindgen_string_new: u.__wbindgen_string_new,
                __wbindgen_rethrow: u.__wbindgen_rethrow,
              },
            }),
              i();
          } catch (n) {
            i(n);
          }
        },
        1
      );
    },
  },
]);
//# sourceMappingURL=2baa5a41ace6a944e6dc.js.map

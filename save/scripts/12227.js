(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12227"],
  {
    979897: function (e, t, n) {
      (e = n.nmd(e)), n("854508");
      var r =
        r ||
        (function (e) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var t = e.document,
              n = function () {
                return e.URL || e.webkitURL || e;
              },
              r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              i = "download" in r,
              o = function (e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t);
              },
              a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              c = e.webkitRequestFileSystem,
              u = e.requestFileSystem || c || e.mozRequestFileSystem,
              s = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw t;
                }, 0);
              },
              f = "application/octet-stream",
              l = 0,
              d = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              p = function (e, t, n) {
                for (var r = (t = [].concat(t)).length; r--; ) {
                  var i = e["on" + t[r]];
                  if ("function" == typeof i)
                    try {
                      i.call(e, n || e);
                    } catch (e) {
                      s(e);
                    }
                }
              },
              h = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              v = function (t, s, v) {
                !v && (t = h(t));
                var g,
                  w,
                  y = this,
                  m = t.type,
                  S = !1,
                  b = function () {
                    p(y, "writestart progress write writeend".split(" "));
                  },
                  E = function () {
                    if (w && a && "undefined" != typeof FileReader) {
                      var r = new FileReader();
                      (r.onloadend = function () {
                        var e = r.result;
                        (w.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (y.readyState = y.DONE),
                          b();
                      }),
                        r.readAsDataURL(t),
                        (y.readyState = y.INIT);
                      return;
                    }
                    (S || !g) && (g = n().createObjectURL(t)),
                      w
                        ? (w.location.href = g)
                        : void 0 === e.open(g, "_blank") &&
                          a &&
                          (e.location.href = g),
                      (y.readyState = y.DONE),
                      b(),
                      d(g);
                  },
                  O = function (e) {
                    return function () {
                      if (y.readyState !== y.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  R = { create: !0, exclusive: !1 };
                if (((y.readyState = y.INIT), !s && (s = "download"), i)) {
                  (g = n().createObjectURL(t)),
                    setTimeout(function () {
                      (r.href = g),
                        (r.download = s),
                        o(r),
                        b(),
                        d(g),
                        (y.readyState = y.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    m &&
                    m !== f &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, f)),
                    (S = !0)),
                  c && "download" !== s && (s += ".download"),
                  (m === f || c) && (w = e),
                  !u)
                ) {
                  E();
                  return;
                }
                (l += t.size),
                  u(
                    e.TEMPORARY,
                    l,
                    O(function (e) {
                      e.root.getDirectory(
                        "saved",
                        R,
                        O(function (e) {
                          var n = function () {
                            e.getFile(
                              s,
                              R,
                              O(function (e) {
                                e.createWriter(
                                  O(function (n) {
                                    (n.onwriteend = function (t) {
                                      (w.location.href = e.toURL()),
                                        (y.readyState = y.DONE),
                                        p(y, "writeend", t),
                                        d(e);
                                    }),
                                      (n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && E();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          n["on" + e] = y["on" + e];
                                        }),
                                      n.write(t),
                                      (y.abort = function () {
                                        n.abort(), (y.readyState = y.DONE);
                                      }),
                                      (y.readyState = y.WRITING);
                                  }),
                                  E
                                );
                              }),
                              E
                            );
                          };
                          e.getFile(
                            s,
                            { create: !1 },
                            O(function (e) {
                              e.remove(), n();
                            }),
                            O(function (e) {
                              e.code === e.NOT_FOUND_ERR ? n() : E();
                            })
                          );
                        }),
                        E
                      );
                    }),
                    E
                  );
              },
              g = v.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    !n && (e = h(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
                  );
                }
              : ((g.abort = function () {
                  (this.readyState = this.DONE), p(this, "abort");
                }),
                (g.readyState = g.INIT = 0),
                (g.WRITING = 1),
                (g.DONE = 2),
                (g.error =
                  g.onwritestart =
                  g.onprogress =
                  g.onwrite =
                  g.onabort =
                  g.onerror =
                  g.onwriteend =
                    null),
                function (e, t, n) {
                  return new v(e, t, n);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content
        );
      void 0 !== e && e.exports
        ? (e.exports.saveAs = r)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return r;
          });
    },
    60266: function (e, t, n) {
      e.exports = function (e, t, n, r) {
        for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
          var a = e[i];
          t(r, a, n(a), e);
        }
        return r;
      };
    },
    581628: function (e, t, n) {
      var r = n("978603");
      e.exports = function (e, t, n, i) {
        return (
          r(e, function (e, r, o) {
            t(i, e, n(e), o);
          }),
          i
        );
      };
    },
    278296: function (e, t, n) {
      var r = n("60266"),
        i = n("581628"),
        o = n("698273"),
        a = n("725502");
      e.exports = function (e, t) {
        return function (n, c) {
          var u = a(n) ? r : i,
            s = t ? t() : {};
          return u(n, e, o(c, 2), s);
        };
      };
    },
    816494: function (e, t, n) {
      var r = n("766665"),
        i = n("278296")(function (e, t, n) {
          r(e, n, t);
        });
      e.exports = i;
    },
    584811: function (e, t, n) {
      var r = n("818477");
      (t.encode = r.encode), (t.decode = r.decode);
    },
    818477: function (e, t, n) {
      var r = n("446825").Buffer;
      n("70102");
      var i = [
        255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2,
        3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 255, 255, 255, 255, 255,
      ];
      (t.encode = function (e) {
        !r.isBuffer(e) && (e = new r(e));
        var t,
          n,
          i = 0,
          o = 0,
          a = 0,
          c = 0;
        for (
          var u = new r(
            8 *
              ((n = Math.floor((t = e).length / 5)),
              t.length % 5 == 0 ? n : n + 1)
          );
          i < e.length;

        ) {
          var s = e[i];
          a > 3
            ? ((c =
                ((c = s & (255 >> a)) << (a = (a + 5) % 8)) |
                ((i + 1 < e.length ? e[i + 1] : 0) >> (8 - a))),
              i++)
            : ((c = (s >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && i++),
            (u[o] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(c)),
            o++;
        }
        for (i = o; i < u.length; i++) u[i] = 61;
        return u;
      }),
        (t.decode = function (e) {
          var t,
            n = 0,
            o = 0,
            a = 0;
          !r.isBuffer(e) && (e = new r(e));
          for (
            var c = new r(Math.ceil((5 * e.length) / 8)), u = 0;
            u < e.length && 61 != e[u];
            u++
          ) {
            var s = e[u] - 48;
            if (s < i.length)
              (o = i[s]),
                n <= 3
                  ? 0 == (n = (n + 5) % 8)
                    ? ((t |= o), (c[a] = t), a++, (t = 0))
                    : (t |= 255 & (o << (8 - n)))
                  : ((t |= 255 & (o >>> (n = (n + 5) % 8))),
                    (c[a] = t),
                    a++,
                    (t = 255 & (o << (8 - n))));
            else throw Error("Invalid input - it is not base32 encoded string");
          }
          return c.slice(0, a);
        });
    },
    376507: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
          r = atob(n),
          i = new ArrayBuffer(r.length),
          o = new Uint8Array(i);
        for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
        return i;
      }
      function i(e) {
        let t = new Uint8Array(e),
          n = "";
        for (let e of t) n += String.fromCharCode(e);
        let r = btoa(n),
          i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        return i;
      }
      n.r(t),
        n.d(t, {
          create: function () {
            return y;
          },
          get: function () {
            return m;
          },
        }),
        n("781738"),
        n("101997"),
        n("311790"),
        n("477657"),
        n("811875"),
        n("90301"),
        n("652153"),
        n("28797"),
        n("817884"),
        n("597349"),
        n("667536"),
        n("690341"),
        n("222007"),
        n("70102");
      var o = "copy",
        a = "convert";
      function c(e, t, n) {
        if (t === o) return n;
        if (t === a) return e(n);
        if (t instanceof Array) return n.map(n => c(e, t[0], n));
        if (t instanceof Object) {
          let r = {};
          for (let [i, o] of Object.entries(t)) {
            if (o.derive) {
              let e = o.derive(n);
              void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
              if (o.required) throw Error("Missing key: ".concat(i));
              continue;
            }
            if (null == n[i]) {
              r[i] = null;
              continue;
            }
            r[i] = c(e, o.schema, n[i]);
          }
          return r;
        }
      }
      function u(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function s(e) {
        return { required: !0, schema: e };
      }
      function f(e) {
        return { required: !1, schema: e };
      }
      var l = { type: s(o), id: s(a), transports: f(o) },
        d = { appid: f(o), appidExclude: f(o), credProps: f(o) },
        p = { appid: f(o), appidExclude: f(o), credProps: f(o) },
        h = {
          publicKey: s({
            rp: s(o),
            user: s({ id: s(a), name: s(o), displayName: s(o) }),
            challenge: s(a),
            pubKeyCredParams: s(o),
            timeout: f(o),
            excludeCredentials: f([l]),
            authenticatorSelection: f(o),
            attestation: f(o),
            extensions: f(d),
          }),
          signal: f(o),
        },
        v = {
          type: s(o),
          id: s(o),
          rawId: s(a),
          authenticatorAttachment: f(o),
          response: s({
            clientDataJSON: s(a),
            attestationObject: s(a),
            transports: u(o, e => {
              var t;
              return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
          }),
          clientExtensionResults: u(p, e => e.getClientExtensionResults()),
        },
        g = {
          mediation: f(o),
          publicKey: s({
            challenge: s(a),
            timeout: f(o),
            rpId: f(o),
            allowCredentials: f([l]),
            userVerification: f(o),
            extensions: f(d),
          }),
          signal: f(o),
        },
        w = {
          type: s(o),
          id: s(o),
          rawId: s(a),
          authenticatorAttachment: f(o),
          response: s({
            clientDataJSON: s(a),
            authenticatorData: s(a),
            signature: s(a),
            userHandle: s(a),
          }),
          clientExtensionResults: u(p, e => e.getClientExtensionResults()),
        };
      async function y(e) {
        let t = await navigator.credentials.create(c(r, h, e));
        return c(i, v, t);
      }
      async function m(e) {
        let t = await navigator.credentials.get(c(r, g, e));
        return c(i, w, t);
      }
    },
  },
]);
//# sourceMappingURL=7eefe5e66687f5d6512f.js.map

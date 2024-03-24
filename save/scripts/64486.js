(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64486"],
  {
    78349: function (t, n, r) {
      "use strict";
      r("424973"),
        (t.exports.parse = function (t) {
          var n =
            /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(
              t
            );
          if (!n) return null;
          n.shift();
          var r = null,
            e = [];
          n[2] && ((r = (o = n[2].split("-")).shift()), (e = o));
          var i = [];
          n[5] && (i = n[5].split("-")).shift();
          var a = [];
          if (n[6]) {
            (o = n[6].split("-")).shift();
            for (var o, s, u = []; o.length; ) {
              var l = o.shift();
              1 === l.length
                ? s
                  ? (a.push({ singleton: s, extension: u }), (s = l), (u = []))
                  : (s = l)
                : u.push(l);
            }
            a.push({ singleton: s, extension: u });
          }
          var c = [];
          n[7] && ((c = n[7].split("-")).shift(), c.shift());
          var f = [];
          return (
            n[8] && (f = n[8].split("-")).shift(),
            {
              langtag: {
                language: { language: r, extlang: e },
                script: n[3] || null,
                region: n[4] || null,
                variant: i,
                extension: a,
                privateuse: c,
              },
              privateuse: f,
              grandfathered: { irregular: n[0] || null, regular: n[1] || null },
            }
          );
        });
    },
    160679: function (t, n, r) {
      r("70102"),
        r("424973"),
        (n.parse = function (t, n) {
          if ("string" != typeof t)
            throw TypeError("argument str must be a string");
          var r = {},
            i = t.split(a),
            o = (n || {}).decode || e;
          return (
            i.forEach(function (t) {
              var n = t.indexOf("=");
              if (!(n < 0)) {
                var e = t.substr(0, n).trim(),
                  i = t.substr(++n, t.length).trim();
                '"' == i[0] && (i = i.slice(1, -1)),
                  void 0 == r[e] &&
                    (r[e] = (function (t, n) {
                      try {
                        return n(t);
                      } catch (n) {
                        return t;
                      }
                    })(i, o));
              }
            }),
            r
          );
        }),
        (n.serialize = function (t, n, r) {
          var e = r || {},
            a = e.encode || i;
          if (!o.test(t)) throw TypeError("argument name is invalid");
          var s = a(n);
          if (s && !o.test(s)) throw TypeError("argument val is invalid");
          var u = [t + "=" + s];
          if (null != e.maxAge) {
            var l = e.maxAge - 0;
            if (isNaN(l)) throw Error("maxAge should be a Number");
            u.push("Max-Age=" + Math.floor(l));
          }
          if (e.domain) {
            if (!o.test(e.domain)) throw TypeError("option domain is invalid");
            u.push("Domain=" + e.domain);
          }
          if (e.path) {
            if (!o.test(e.path)) throw TypeError("option path is invalid");
            u.push("Path=" + e.path);
          }
          return (
            e.expires && u.push("Expires=" + e.expires.toUTCString()),
            e.httpOnly && u.push("HttpOnly"),
            e.secure && u.push("Secure"),
            e.firstPartyOnly && u.push("First-Party-Only"),
            u.join("; ")
          );
        });
      var e = decodeURIComponent,
        i = encodeURIComponent,
        a = /; */,
        o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    },
    379792: function (t, n, r) {
      "use strict";
      var e = r("727204"),
        i = TypeError,
        a = function (t) {
          var n, r;
          (this.promise = new t(function (t, e) {
            if (void 0 !== n || void 0 !== r)
              throw i("Bad Promise constructor");
            (n = t), (r = e);
          })),
            (this.resolve = e(n)),
            (this.reject = e(r));
        };
      t.exports.f = function (t) {
        return new a(t);
      };
    },
    718530: function (t, n, r) {
      "use strict";
      var e = r("503486");
      t.exports = e.Promise;
    },
    33270: function (t, n, r) {
      "use strict";
      var e = r("418855"),
        i = r("472960"),
        a = r("379792");
      t.exports = function (t, n) {
        if ((e(t), i(n) && n.constructor === t)) return n;
        var r = a.f(t);
        return (0, r.resolve)(n), r.promise;
      };
    },
    499460: function (t, n, r) {
      "use strict";
      var e = r("418855"),
        i = r("338286"),
        a = r("551544"),
        o = r("174669")("species");
      t.exports = function (t, n) {
        var r,
          s = e(t).constructor;
        return void 0 === s || a((r = e(s)[o])) ? n : i(r);
      };
    },
    506083: function (t, n, r) {
      "use strict";
      var e = r("859514"),
        i = r("140925"),
        a = r("718530"),
        o = r("664144"),
        s = r("434978"),
        u = r("125359"),
        l = r("499460"),
        c = r("33270"),
        f = r("484784"),
        h = a && a.prototype;
      if (
        (e(
          {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
              !!a &&
              o(function () {
                h.finally.call({ then: function () {} }, function () {});
              }),
          },
          {
            finally: function (t) {
              var n = l(this, s("Promise")),
                r = u(t);
              return this.then(
                r
                  ? function (r) {
                      return c(n, t()).then(function () {
                        return r;
                      });
                    }
                  : t,
                r
                  ? function (r) {
                      return c(n, t()).then(function () {
                        throw r;
                      });
                    }
                  : t
              );
            },
          }
        ),
        !i && u(a))
      ) {
        var d = s("Promise").prototype.finally;
        h.finally !== d && f(h, "finally", d, { unsafe: !0 });
      }
    },
    826269: function (t, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return u;
          },
        });
      var e = r("37983");
      r("884691");
      var i = r("77078"),
        a = r("476765"),
        o = r("782340"),
        s = r("606077"),
        u = t => {
          let { onClose: n } = t,
            r = (0, a.useUID)();
          return (0, e.jsxs)(i.ModalRoot, {
            ...t,
            "aria-labelledby": r,
            children: [
              (0, e.jsxs)(i.ModalHeader, {
                separator: !1,
                className: s.modalHeader,
                children: [
                  (0, e.jsx)(i.Heading, {
                    id: r,
                    variant: "heading-xl/extrabold",
                    children:
                      o.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING,
                  }),
                  (0, e.jsx)(i.ModalCloseButton, {
                    className: s.closeButton,
                    onClick: n,
                  }),
                ],
              }),
              (0, e.jsx)(i.ModalContent, {
                className: s.modalContent,
                children: (0, e.jsx)(i.Text, {
                  variant: "text-md/normal",
                  className: s.contentText,
                  children:
                    o.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2,
                }),
              }),
              (0, e.jsx)(i.ModalFooter, {
                children: (0, e.jsx)(i.Button, {
                  className: s.button,
                  size: i.Button.Sizes.MIN,
                  onClick: n,
                  children: o.default.Messages.OKAY,
                }),
              }),
            ],
          });
        };
    },
    476765: function (t, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          uid: function () {
            return o;
          },
          useUID: function () {
            return s;
          },
          UID: function () {
            return u;
          },
        });
      var e = r("995008"),
        i = r.n(e),
        a = r("775560");
      let o = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(t);
        },
        s = () => (0, a.useLazyValue)(() => o()),
        u = t => {
          let { children: n } = t;
          return n(s());
        };
    },
  },
]);
//# sourceMappingURL=0eac0168b0780347a468.js.map

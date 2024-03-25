(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27230"],
  {
    78349: function (t, n, e) {
      "use strict";
      e("424973"),
        (t.exports.parse = function (t) {
          var n =
            /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(
              t
            );
          if (!n) return null;
          n.shift();
          var e = null,
            r = [];
          n[2] && ((e = (s = n[2].split("-")).shift()), (r = s));
          var i = [];
          n[5] && (i = n[5].split("-")).shift();
          var a = [];
          if (n[6]) {
            (s = n[6].split("-")).shift();
            for (var s, o, u = []; s.length; ) {
              var l = s.shift();
              1 === l.length
                ? o
                  ? (a.push({ singleton: o, extension: u }), (o = l), (u = []))
                  : (o = l)
                : u.push(l);
            }
            a.push({ singleton: o, extension: u });
          }
          var c = [];
          n[7] && ((c = n[7].split("-")).shift(), c.shift());
          var f = [];
          return (
            n[8] && (f = n[8].split("-")).shift(),
            {
              langtag: {
                language: { language: e, extlang: r },
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
    160679: function (t, n, e) {
      e("70102"),
        e("424973"),
        (n.parse = function (t, n) {
          if ("string" != typeof t)
            throw TypeError("argument str must be a string");
          var e = {},
            i = t.split(a),
            s = (n || {}).decode || r;
          return (
            i.forEach(function (t) {
              var n = t.indexOf("=");
              if (!(n < 0)) {
                var r = t.substr(0, n).trim(),
                  i = t.substr(++n, t.length).trim();
                '"' == i[0] && (i = i.slice(1, -1)),
                  void 0 == e[r] &&
                    (e[r] = (function (t, n) {
                      try {
                        return n(t);
                      } catch (n) {
                        return t;
                      }
                    })(i, s));
              }
            }),
            e
          );
        }),
        (n.serialize = function (t, n, e) {
          var r = e || {},
            a = r.encode || i;
          if (!s.test(t)) throw TypeError("argument name is invalid");
          var o = a(n);
          if (o && !s.test(o)) throw TypeError("argument val is invalid");
          var u = [t + "=" + o];
          if (null != r.maxAge) {
            var l = r.maxAge - 0;
            if (isNaN(l)) throw Error("maxAge should be a Number");
            u.push("Max-Age=" + Math.floor(l));
          }
          if (r.domain) {
            if (!s.test(r.domain)) throw TypeError("option domain is invalid");
            u.push("Domain=" + r.domain);
          }
          if (r.path) {
            if (!s.test(r.path)) throw TypeError("option path is invalid");
            u.push("Path=" + r.path);
          }
          return (
            r.expires && u.push("Expires=" + r.expires.toUTCString()),
            r.httpOnly && u.push("HttpOnly"),
            r.secure && u.push("Secure"),
            r.firstPartyOnly && u.push("First-Party-Only"),
            u.join("; ")
          );
        });
      var r = decodeURIComponent,
        i = encodeURIComponent,
        a = /; */,
        s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    },
    379792: function (t, n, e) {
      "use strict";
      var r = e("727204"),
        i = TypeError,
        a = function (t) {
          var n, e;
          (this.promise = new t(function (t, r) {
            if (void 0 !== n || void 0 !== e)
              throw i("Bad Promise constructor");
            (n = t), (e = r);
          })),
            (this.resolve = r(n)),
            (this.reject = r(e));
        };
      t.exports.f = function (t) {
        return new a(t);
      };
    },
    718530: function (t, n, e) {
      "use strict";
      var r = e("503486");
      t.exports = r.Promise;
    },
    33270: function (t, n, e) {
      "use strict";
      var r = e("418855"),
        i = e("472960"),
        a = e("379792");
      t.exports = function (t, n) {
        if ((r(t), i(n) && n.constructor === t)) return n;
        var e = a.f(t);
        return (0, e.resolve)(n), e.promise;
      };
    },
    499460: function (t, n, e) {
      "use strict";
      var r = e("418855"),
        i = e("338286"),
        a = e("551544"),
        s = e("174669")("species");
      t.exports = function (t, n) {
        var e,
          o = r(t).constructor;
        return void 0 === o || a((e = r(o)[s])) ? n : i(e);
      };
    },
    506083: function (t, n, e) {
      "use strict";
      var r = e("859514"),
        i = e("140925"),
        a = e("718530"),
        s = e("664144"),
        o = e("434978"),
        u = e("125359"),
        l = e("499460"),
        c = e("33270"),
        f = e("484784"),
        d = a && a.prototype;
      if (
        (r(
          {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
              !!a &&
              s(function () {
                d.finally.call({ then: function () {} }, function () {});
              }),
          },
          {
            finally: function (t) {
              var n = l(this, o("Promise")),
                e = u(t);
              return this.then(
                e
                  ? function (e) {
                      return c(n, t()).then(function () {
                        return e;
                      });
                    }
                  : t,
                e
                  ? function (e) {
                      return c(n, t()).then(function () {
                        throw e;
                      });
                    }
                  : t
              );
            },
          }
        ),
        !i && u(a))
      ) {
        var h = o("Promise").prototype.finally;
        d.finally !== h && f(d, "finally", h, { unsafe: !0 });
      }
    },
    285899: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          GUILD_LIMITED_ACCESS_HC_LINK: function () {
            return r;
          },
        });
      let r =
        "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ";
    },
    135722: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var r = e("37983");
      e("884691");
      var i = e("77078"),
        a = e("305961"),
        s = e("476765"),
        o = e("285899"),
        u = e("782340"),
        l = e("528"),
        c = t => {
          let { onClose: n, guildId: e } = t,
            c = (0, s.useUID)(),
            f =
              u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format(
                { helpdeskArticle: o.GUILD_LIMITED_ACCESS_HC_LINK }
              ),
            d = a.default.getGuild(e);
          return (
            null != d &&
              (f =
                u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format(
                  {
                    guildName: d.name,
                    helpdeskArticle: o.GUILD_LIMITED_ACCESS_HC_LINK,
                  }
                )),
            (0, r.jsxs)(i.ModalRoot, {
              ...t,
              "aria-labelledby": c,
              children: [
                (0, r.jsxs)(i.ModalHeader, {
                  separator: !1,
                  className: l.modalHeader,
                  children: [
                    (0, r.jsx)(i.Heading, {
                      id: c,
                      variant: "heading-xl/extrabold",
                      children:
                        u.default.Messages
                          .GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
                    }),
                    (0, r.jsx)(i.ModalCloseButton, {
                      className: l.closeButton,
                      onClick: n,
                    }),
                  ],
                }),
                (0, r.jsx)(i.ModalContent, {
                  className: l.modalContent,
                  children: (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    className: l.contentText,
                    children: f,
                  }),
                }),
                (0, r.jsx)(i.ModalFooter, {
                  children: (0, r.jsx)(i.Button, {
                    className: l.button,
                    size: i.Button.Sizes.MIN,
                    onClick: n,
                    children: u.default.Messages.OKAY,
                  }),
                }),
              ],
            })
          );
        };
    },
    258158: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          default: function () {
            return a;
          },
        });
      var r = e("37983");
      e("884691");
      var i = e("551042");
      function a() {
        (0, i.openModalLazy)(async () => {
          let { default: t } = await e.el("826269").then(e.bind(e, "826269"));
          return n => (0, r.jsx)(t, { ...n });
        });
      }
    },
    476765: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return o;
          },
          UID: function () {
            return u;
          },
        });
      var r = e("995008"),
        i = e.n(r),
        a = e("775560");
      let s = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return i(t);
        },
        o = () => (0, a.useLazyValue)(() => s()),
        u = t => {
          let { children: n } = t;
          return n(o());
        };
    },
  },
]);
//# sourceMappingURL=0ed2eae0cc720596a784.js.map

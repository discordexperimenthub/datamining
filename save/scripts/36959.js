(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36959"],
  {
    584811: function (e, t, s) {
      var r = s("818477");
      (t.encode = r.encode), (t.decode = r.decode);
    },
    818477: function (e, t, s) {
      var r = s("446825").Buffer;
      s("70102");
      var n = [
        255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2,
        3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 255, 255, 255, 255, 255,
      ];
      (t.encode = function (e) {
        !r.isBuffer(e) && (e = new r(e));
        var t,
          s,
          n = 0,
          a = 0,
          i = 0,
          l = 0;
        for (
          var o = new r(
            8 *
              ((s = Math.floor((t = e).length / 5)),
              t.length % 5 == 0 ? s : s + 1)
          );
          n < e.length;

        ) {
          var d = e[n];
          i > 3
            ? ((l =
                ((l = d & (255 >> i)) << (i = (i + 5) % 8)) |
                ((n + 1 < e.length ? e[n + 1] : 0) >> (8 - i))),
              n++)
            : ((l = (d >> (8 - (i + 5))) & 31), 0 == (i = (i + 5) % 8) && n++),
            (o[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(l)),
            a++;
        }
        for (n = a; n < o.length; n++) o[n] = 61;
        return o;
      }),
        (t.decode = function (e) {
          var t,
            s = 0,
            a = 0,
            i = 0;
          !r.isBuffer(e) && (e = new r(e));
          for (
            var l = new r(Math.ceil((5 * e.length) / 8)), o = 0;
            o < e.length && 61 != e[o];
            o++
          ) {
            var d = e[o] - 48;
            if (d < n.length)
              (a = n[d]),
                s <= 3
                  ? 0 == (s = (s + 5) % 8)
                    ? ((t |= a), (l[i] = t), i++, (t = 0))
                    : (t |= 255 & (a << (8 - s)))
                  : ((t |= 255 & (a >>> (s = (s + 5) % 8))),
                    (l[i] = t),
                    i++,
                    (t = 255 & (a << (8 - s))));
            else throw Error("Invalid input - it is not base32 encoded string");
          }
          return l.slice(0, i);
        });
    },
    497109: function (e, t, s) {
      "use strict";
      e.exports = s.p + "f2a141a285c4b6b264e8.svg";
    },
    527826: function (e, t, s) {
      "use strict";
      e.exports = s.p + "adf75861421c2a6a6269.png";
    },
    684494: function (e, t, s) {
      "use strict";
      e.exports = s.p + "9aeee910f76e58071282.png";
    },
    936380: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return x;
          },
        }),
        s("222007");
      var r = s("37983"),
        n = s("884691"),
        a = s("77078"),
        i = s("430713"),
        l = s("663657"),
        o = s("697218"),
        d = s("145131"),
        c = s("671278"),
        u = s("222038"),
        h = s("782340"),
        f = s("132523");
      let g = e => {
        let { image: t, label: s, text: n, children: i } = e;
        return (0, r.jsxs)(d.default, {
          className: f.spacing,
          children: [
            (0, r.jsx)(d.default, {
              grow: 0,
              shrink: 0,
              basis: "156px",
              justify: d.default.Justify.CENTER,
              className: f.image,
              children: t,
            }),
            (0, r.jsx)(d.default, {
              direction: d.default.Direction.VERTICAL,
              justify: d.default.Justify.CENTER,
              children: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)(a.FormTitle, {
                    tag: "h5",
                    className: f.headerSpacing,
                    children: s,
                  }),
                  (0, r.jsx)(a.FormText, {
                    type: a.FormText.Types.DESCRIPTION,
                    children: n,
                  }),
                  i,
                ],
              }),
            }),
          ],
        });
      };
      class p extends n.PureComponent {
        render() {
          var e;
          let { transitionState: t, onClose: n } = this.props,
            { totpSecret: i, code: l, isVerifying: p } = this.state,
            x =
              null === (e = o.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.email,
            m = (0, u.encodeTotpSecretAsUrl)(null != x ? x : "", i),
            v = (0, r.jsx)("form", {
              onSubmit: this.handleActivate,
              children: (0, r.jsxs)(d.default, {
                className: f.inputContainer,
                align: d.default.Align.START,
                children: [
                  (0, r.jsx)(a.TextInput, {
                    value: l,
                    className: f.input,
                    placeholder: "000 000",
                    maxLength: 7,
                    autoComplete: "one-time-code",
                    onChange: this.handleCodeChange,
                    error: this.state.error,
                    autoFocus: !0,
                  }),
                  (0, r.jsx)(d.default.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, r.jsx)(a.Button, {
                      type: "submit",
                      submitting: p,
                      children: h.default.Messages.TWO_FA_ACTIVATE,
                    }),
                  }),
                ],
              }),
            });
          return (0, r.jsxs)(a.ModalRoot, {
            transitionState: t,
            size: a.ModalSize.DYNAMIC,
            className: f.customWidth,
            children: [
              (0, r.jsxs)(a.ModalHeader, {
                separator: !1,
                children: [
                  (0, r.jsxs)(d.default.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                      (0, r.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: h.default.Messages.TWO_FA_ENABLE,
                      }),
                      (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        className: f.subHeader,
                        children: h.default.Messages.TWO_FA_ENABLE_SUBHEADER,
                      }),
                    ],
                  }),
                  (0, r.jsx)(d.default.Child, {
                    grow: 0,
                    children: (0, r.jsx)(a.ModalCloseButton, { onClick: n }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.ModalContent, {
                children: [
                  (0, r.jsx)(g, {
                    image: (0, r.jsx)("img", {
                      alt: "",
                      src: s("684494"),
                      width: 100,
                      height: 100,
                    }),
                    label: h.default.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
                    text: h.default.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
                      googleAuthURL:
                        "https://support.google.com/accounts/answer/1066447?hl=en",
                      authyURL: "https://www.authy.com/",
                    }),
                  }),
                  (0, r.jsx)(a.FormDivider, { className: f.divider }),
                  (0, r.jsx)(g, {
                    image: (0, r.jsx)(c.default, { text: m }),
                    label: h.default.Messages.TWO_FA_QR_LABEL,
                    text: h.default.Messages.TWO_FA_QR_BODY,
                    children: (0, r.jsxs)("div", {
                      className: f.topSpacing,
                      children: [
                        (0, r.jsx)(a.FormTitle, {
                          tag: "h5",
                          className: f.headerSpacing,
                          children: h.default.Messages.TWO_FA_KEY,
                        }),
                        (0, r.jsx)(a.Text, {
                          variant: "text-md/normal",
                          className: f.secret,
                          selectable: !0,
                          children: i,
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(a.FormDivider, { className: f.divider }),
                  (0, r.jsx)(g, {
                    image: (0, r.jsx)("img", { alt: "", src: s("497109") }),
                    label: h.default.Messages._TWO_FA_LOGIN_LABEL,
                    text: h.default.Messages.TWO_FA_LOGIN_BODY,
                    children: v,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              code: "",
              totpSecret: (0, u.generateTotpSecret)(),
              error: null,
              isVerifying: !1,
            }),
            (this.handleCodeChange = e => {
              this.setState({ code: e });
            }),
            (this.handleActivate = e => {
              e.preventDefault();
              let { password: t, emailToken: s } = this.props,
                { totpSecret: r, code: n } = this.state;
              this.setState({ isVerifying: !0 }),
                i.default
                  .enable({
                    password: t,
                    code: n,
                    secret: (0, u.encodeTotpSecret)(r),
                    ...((0, l.isMfaEmailVerificationEnabled)() && {
                      emailToken: s,
                    }),
                  })
                  .then(this.handleActivateSuccess, e =>
                    this.setState({ error: e.body.message, isVerifying: !1 })
                  );
            }),
            (this.handleActivateSuccess = () => {
              let { onClose: e, handleEnableMFASuccess: t } = this.props;
              this.setState({ isVerifying: !1 }), t(), null == e || e();
            });
        }
      }
      var x = p;
    },
    671278: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          QRCodeOverlaySizes: function () {
            return n;
          },
          QRCodeWithOverlay: function () {
            return h;
          },
          default: function () {
            return f;
          },
        });
      var r,
        n,
        a = s("37983"),
        i = s("884691"),
        l = s("82697"),
        o = s("679001");
      ((r = n || (n = {})).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60");
      let d = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        c = s("527826");
      class u extends i.PureComponent {
        render() {
          let { className: e, text: t, ...s } = this.props;
          return (0, a.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: s.size,
              height: s.size,
              backgroundColor: s.bgColor,
            },
            className: e,
            children: (0, a.jsx)(l.default, { value: t, level: "M", ...s }),
          });
        }
      }
      u.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
      class h extends i.PureComponent {
        render() {
          let { overlaySize: e } = this.props,
            t = d[null != e ? e : "SIZE_40"];
          return (0, a.jsxs)("div", {
            className: o.qrCodeContainer,
            children: [
              (0, a.jsx)(u, { ...this.props }),
              (0, a.jsx)("div", {
                className: o.qrCodeOverlay,
                children: (0, a.jsx)("img", {
                  className: o[t],
                  src: c,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      h.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
      var f = u;
    },
    222038: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          hasCrypto: function () {
            return d;
          },
          hasWebAuthn: function () {
            return c;
          },
          generateTotpSecret: function () {
            return u;
          },
          encodeTotpSecret: function () {
            return h;
          },
          encodeTotpSecretAsUrl: function () {
            return f;
          },
        }),
        s("311790"),
        s("477657"),
        s("811875"),
        s("90301"),
        s("652153"),
        s("28797"),
        s("817884"),
        s("597349"),
        s("667536"),
        s("690341"),
        s("781738");
      var r,
        n,
        a,
        i = s("584811");
      let l =
          null !==
            (a = null === (r = window) || void 0 === r ? void 0 : r.crypto) &&
          void 0 !== a
            ? a
            : null === (n = window) || void 0 === n
              ? void 0
              : n.msCrypto,
        o = "Uint8Array" in window,
        d = null != l && "getRandomValues" in l && o,
        c = "PublicKeyCredential" in window && o;
      function u() {
        var e;
        return (function (e) {
          let t = i.encode(e).toString("utf8").replace(/=/g, "");
          return t
            .toLowerCase()
            .replace(/(\w{4})/g, "$1 ")
            .trim();
        })(((e = 20), l.getRandomValues(new Uint8Array(20))));
      }
      function h(e) {
        return e.replace(/[\s._-]+/g, "").toUpperCase();
      }
      function f(e, t) {
        let s =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "Discord";
        return "otpauth://totp/"
          .concat(encodeURI(s), ":")
          .concat(encodeURI(e), "?secret=")
          .concat(h(t), "&issuer=")
          .concat(encodeURIComponent(s));
      }
    },
  },
]);
//# sourceMappingURL=2686fef97c4c4aa95bb1.js.map

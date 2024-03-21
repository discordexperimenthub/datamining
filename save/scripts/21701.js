(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21701"],
  {
    133457: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchEULA: function () {
            return u;
          },
        });
      var r = n("872717"),
        l = n("913144"),
        a = n("49111");
      async function u(e) {
        let t = await r.HTTP.get({
          url: a.Endpoints.STORE_EULA(e),
          oldFormErrors: !0,
        });
        l.default.dispatch({ type: "EULA_FETCH_SUCCESS", eula: t.body });
      }
    },
    523360: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n("37983"),
        l = n("884691"),
        a = n("446674"),
        u = n("77078"),
        o = n("133457"),
        d = n("784736"),
        c = n("145131"),
        s = n("9074"),
        i = n("782340"),
        f = n("733676");
      function h(e) {
        var t;
        let { eulaId: n, transitionState: h, onClose: p } = e,
          m = (0, a.useStateFromStores)([d.default], () =>
            d.default.getEULA(n)
          );
        l.useEffect(() => {
          (0, o.fetchEULA)(n);
        }, [n]);
        let g =
            null !== (t = null == m ? void 0 : m.name) && void 0 !== t
              ? t
              : i.default.Messages.LOADING,
          y =
            null != m
              ? (0, r.jsx)(s.default, {
                  children: m.content,
                  className: f.markdown,
                })
              : (0, r.jsx)(u.Spinner, { className: f.spinner });
        return (0, r.jsxs)(u.ModalRoot, {
          transitionState: h,
          size: u.ModalSize.SMALL,
          "aria-label": g,
          children: [
            (0, r.jsxs)(u.ModalHeader, {
              justify: c.default.Justify.BETWEEN,
              children: [
                (0, r.jsx)(u.Heading, {
                  variant: "heading-lg/semibold",
                  children: g,
                }),
                (0, r.jsx)(u.ModalCloseButton, { onClick: p }),
              ],
            }),
            (0, r.jsx)(u.ModalContent, { children: y }),
          ],
        });
      }
    },
    784736: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("446674"),
        l = n("913144");
      let a = {};
      class u extends r.default.Store {
        getEULA(e) {
          return a[e];
        }
      }
      u.displayName = "EULAStore";
      var o = new u(l.default, {
        EULA_FETCH_SUCCESS: function (e) {
          let { eula: t } = e;
          a[t.id] = t;
        },
      });
    },
    895530: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n("37983");
      n("884691");
      var l = n("414456"),
        a = n.n(l),
        u = n("612654");
      function o(e) {
        let { children: t, tag: n, className: l } = e;
        return (
          (n = null != n ? n : "h3"),
          (0, r.jsx)(n, { className: a(u.title, l), children: t })
        );
      }
    },
    9074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var r,
        l = n("37983"),
        a = n("884691"),
        u = n("414456"),
        o = n.n(u),
        d = n("404828"),
        c = n.n(d),
        s = n("269936"),
        i = n("647374"),
        f = n("888198"),
        h = n("47677"),
        p = n("895530"),
        m = n("915621"),
        g = n("356410");
      let y = new RegExp(
        "https?://".concat(
          null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""
        )
      );
      function E(e) {
        return "string" == typeof e.content ? e.content : v(e.content);
      }
      let b = {
          ...c.defaultRules,
          heading: {
            ...c.defaultRules.heading,
            react(e, t, n) {
              let r = "h".concat(e.level);
              return (0, l.jsx)(
                p.default,
                { tag: r, children: t(e.content, n) },
                n.key
              );
            },
          },
          paragraph: {
            ...c.defaultRules.paragraph,
            react: (e, t, n) =>
              (0, l.jsx)(
                "div",
                { className: m.paragraph, children: t(e.content, n) },
                n.key
              ),
          },
          strong: { ...c.defaultRules.strong, order: 6 },
          em: { ...c.defaultRules.em, order: 6 },
          u: { ...c.defaultRules.u, order: 5 },
          del: { ...c.defaultRules.del, order: 6 },
          link: {
            ...i.default,
            ...(0, h.default)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...c.defaultRules.blockQuote,
            react: (e, t, n) =>
              (0, l.jsx)(
                "blockquote",
                { className: m.blockquote, children: E(e) },
                n.key
              ),
          },
          image: {
            ...c.defaultRules.image,
            order: 6,
            match(e, t, n) {
              let r = c.defaultRules.image;
              if (null == r || null == r.match) return !1;
              let l = r.match(e, t, n);
              if (null != l && Array.isArray(l) && l.length >= 3) {
                let e = l[2];
                if ("string" == typeof e) return null != e.match(y) ? l : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...f.default.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
              (0, l.jsx)(
                "code",
                { className: m.codeInline, children: E(e) },
                n.key
              ),
          },
          codeBlock: {
            ...c.defaultRules.codeBlock,
            react(e, t, r) {
              let a = () =>
                (0, l.jsx)(
                  "pre",
                  {
                    children: (0, l.jsx)("code", {
                      className: o(g.scrollbarGhostHairline, "hljs"),
                      children: E(e),
                    }),
                  },
                  r.key
                );
              return (0, l.jsx)(
                s.LazyLibrary,
                {
                  createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                  webpackId: "86256",
                  renderFallback: a,
                  render: t => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return a();
                    {
                      let n = t.highlight(e.lang, e.content, !0);
                      return null == n
                        ? a()
                        : (0, l.jsx)(
                            "pre",
                            {
                              children: (0, l.jsx)("code", {
                                className: o(
                                  g.scrollbarGhostHairline,
                                  "hljs",
                                  n.language
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              }),
                            },
                            r.key
                          );
                    }
                  },
                },
                r.key
              );
            },
          },
        },
        k = c.parserFor(b),
        v = c.reactFor(c.ruleOutput(b, "react"));
      class x extends a.PureComponent {
        render() {
          let {
              className: e,
              children: t,
              state: n,
              parser: r,
              output: a,
            } = this.props,
            u = r("".concat(t, "\n\n"), { inline: !1, ...n }),
            d = a(u);
          return (0, l.jsx)("div", {
            className: o(m.markdown, e),
            children: d,
          });
        }
      }
      (x.rules = b), (x.defaultProps = { parser: k, output: v });
      var C = x;
    },
    306160: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SUPPORTS_COPY: function () {
            return u;
          },
          copy: function () {
            return o;
          },
        }),
        n("70102");
      var r = n("281071"),
        l = n("773336"),
        a = n("50885");
      let u = (() => {
        if (l.isPlatformEmbedded) return null != a.default.copy;
        try {
          return (
            document.queryCommandEnabled("copy") ||
            document.queryCommandSupported("copy")
          );
        } catch (e) {
          return !1;
        }
      })();
      function o(e) {
        return (
          !!u && (l.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
        );
      }
    },
    281071: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          r = window.getSelection(),
          l = document.createElement("textarea");
        (l.value = e),
          (l.contentEditable = "true"),
          (l.style.visibility = "none"),
          t.appendChild(l),
          n.selectNodeContents(l),
          null == r || r.removeAllRanges(),
          null == r || r.addRange(n),
          l.focus(),
          l.setSelectionRange(0, e.length);
        let a = document.execCommand("copy");
        return t.removeChild(l), a;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return r;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=8e85ef9efaab5be1b361.js.map

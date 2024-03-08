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
      var l = n("872717"),
        r = n("913144"),
        a = n("49111");
      async function u(e) {
        let t = await l.default.get({
          url: a.Endpoints.STORE_EULA(e),
          oldFormErrors: !0,
        });
        r.default.dispatch({ type: "EULA_FETCH_SUCCESS", eula: t.body });
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
      var l = n("37983"),
        r = n("884691"),
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
        r.useEffect(() => {
          (0, o.fetchEULA)(n);
        }, [n]);
        let g =
            null !== (t = null == m ? void 0 : m.name) && void 0 !== t
              ? t
              : i.default.Messages.LOADING,
          y =
            null != m
              ? (0, l.jsx)(s.default, {
                  children: m.content,
                  className: f.markdown,
                })
              : (0, l.jsx)(u.Spinner, { className: f.spinner });
        return (0, l.jsxs)(u.ModalRoot, {
          transitionState: h,
          size: u.ModalSize.SMALL,
          "aria-label": g,
          children: [
            (0, l.jsxs)(u.ModalHeader, {
              justify: c.default.Justify.BETWEEN,
              children: [
                (0, l.jsx)(u.Heading, {
                  variant: "heading-lg/semibold",
                  children: g,
                }),
                (0, l.jsx)(u.ModalCloseButton, { onClick: p }),
              ],
            }),
            (0, l.jsx)(u.ModalContent, { children: y }),
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
      var l = n("446674"),
        r = n("913144");
      let a = {};
      class u extends l.default.Store {
        getEULA(e) {
          return a[e];
        }
      }
      u.displayName = "EULAStore";
      var o = new u(r.default, {
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
      var l = n("37983");
      n("884691");
      var r = n("414456"),
        a = n.n(r),
        u = n("612654");
      function o(e) {
        let { children: t, tag: n, className: r } = e;
        return (
          (n = null != n ? n : "h3"),
          (0, l.jsx)(n, { className: a(u.title, r), children: t })
        );
      }
    },
    9074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var l,
        r = n("37983"),
        a = n("884691"),
        u = n("414456"),
        o = n.n(u),
        d = n("404828"),
        c = n.n(d),
        s = n("269936"),
        i = n("647374"),
        f = n("47677"),
        h = n("895530"),
        p = n("915621"),
        m = n("356410");
      let g = new RegExp(
        "https?://".concat(
          null !== (l = window.GLOBAL_ENV.CDN_HOST) && void 0 !== l ? l : ""
        )
      );
      function y(e) {
        return "string" == typeof e.content ? e.content : k(e.content);
      }
      let E = {
          ...c.defaultRules,
          heading: {
            ...c.defaultRules.heading,
            react(e, t, n) {
              let l = "h".concat(e.level);
              return (0, r.jsx)(
                h.default,
                { tag: l, children: t(e.content, n) },
                n.key
              );
            },
          },
          paragraph: {
            ...c.defaultRules.paragraph,
            react: (e, t, n) =>
              (0, r.jsx)(
                "div",
                { className: p.paragraph, children: t(e.content, n) },
                n.key
              ),
          },
          strong: { ...c.defaultRules.strong, order: 6 },
          em: { ...c.defaultRules.em, order: 6 },
          u: { ...c.defaultRules.u, order: 5 },
          del: { ...c.defaultRules.del, order: 6 },
          link: {
            ...i.default,
            ...(0, f.default)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...c.defaultRules.blockQuote,
            react: (e, t, n) =>
              (0, r.jsx)(
                "blockquote",
                { className: p.blockquote, children: y(e) },
                n.key
              ),
          },
          image: {
            ...c.defaultRules.image,
            order: 6,
            match(e, t, n) {
              let l = c.defaultRules.image;
              if (null == l || null == l.match) return !1;
              let r = l.match(e, t, n);
              if (null != r && Array.isArray(r) && r.length >= 3) {
                let e = r[2];
                if ("string" == typeof e) return null != e.match(g) ? r : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...c.defaultRules.inlineCode,
            order: 6,
            react: (e, t, n) =>
              (0, r.jsx)(
                "code",
                { className: p.codeInline, children: y(e) },
                n.key
              ),
          },
          codeBlock: {
            ...c.defaultRules.codeBlock,
            react(e, t, l) {
              let a = () =>
                (0, r.jsx)(
                  "pre",
                  {
                    children: (0, r.jsx)("code", {
                      className: o(m.scrollbarGhostHairline, "hljs"),
                      children: y(e),
                    }),
                  },
                  l.key
                );
              return (0, r.jsx)(
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
                        : (0, r.jsx)(
                            "pre",
                            {
                              children: (0, r.jsx)("code", {
                                className: o(
                                  m.scrollbarGhostHairline,
                                  "hljs",
                                  n.language
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              }),
                            },
                            l.key
                          );
                    }
                  },
                },
                l.key
              );
            },
          },
        },
        b = c.parserFor(E),
        k = c.reactFor(c.ruleOutput(E, "react"));
      class v extends a.PureComponent {
        render() {
          let {
              className: e,
              children: t,
              state: n,
              parser: l,
              output: a,
            } = this.props,
            u = l("".concat(t, "\n\n"), { inline: !1, ...n }),
            d = a(u);
          return (0, r.jsx)("div", {
            className: o(p.markdown, e),
            children: d,
          });
        }
      }
      (v.rules = E), (v.defaultProps = { parser: b, output: k });
      var x = v;
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
      var l = n("281071"),
        r = n("773336"),
        a = n("50885");
      let u = (() => {
        if (r.isPlatformEmbedded) return null != a.default.copy;
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
          !!u && (r.isPlatformEmbedded ? (a.default.copy(e), !0) : l.copy(e))
        );
      }
    },
    281071: function (e, t, n) {
      "use strict";
      function l(e) {
        let t = document.body;
        if (null == t)
          throw Error(
            "[Utils] ClipboardUtils.copy(): assert failed: document.body != null"
          );
        let n = document.createRange(),
          l = window.getSelection(),
          r = document.createElement("textarea");
        (r.value = e),
          (r.contentEditable = "true"),
          (r.style.visibility = "none"),
          t.appendChild(r),
          n.selectNodeContents(r),
          null == l || l.removeAllRanges(),
          null == l || l.addRange(n),
          r.focus(),
          r.setSelectionRange(0, e.length);
        let a = document.execCommand("copy");
        return t.removeChild(r), a;
      }
      n.r(t),
        n.d(t, {
          copy: function () {
            return l;
          },
        }),
        n("70102");
    },
  },
]);
//# sourceMappingURL=ae7579f5ceb4afbb167a.js.map

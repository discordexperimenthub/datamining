(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77132"],
  {
    997588: function (t, e, n) {
      "use strict";
      t.exports = n.p + "991ecc3f2fc892c5494e.svg";
    },
    745705: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return c;
          },
        });
      var r = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("474539"),
        o = n("145131"),
        l = n("476765"),
        i = n("782340"),
        u = n("976250");
      function c(t) {
        let { url: e, onClose: c, transitionState: d } = t,
          f = (0, l.useUID)(),
          {
            protocol: x,
            hostname: m,
            theRestOfTheUrl: h,
          } = (0, s.useUrlParts)(e);
        return (0, r.jsxs)(a.ModalRoot, {
          transitionState: d,
          "aria-labelledby": f,
          children: [
            (0, r.jsx)("img", { className: u.art, src: n("997588"), alt: "" }),
            (0, r.jsx)(a.ModalContent, {
              children: (0, r.jsxs)(o.default, {
                direction: o.default.Direction.VERTICAL,
                justify: o.default.Justify.CENTER,
                children: [
                  (0, r.jsx)(a.Heading, {
                    id: f,
                    variant: "heading-lg/semibold",
                    className: u.title,
                    children: i.default.Messages.BAD_LINK_WARNING_TITLE_V2,
                  }),
                  (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: u.body,
                    children:
                      i.default.Messages.BAD_LINK_WARNING_BODY_V2.format(),
                  }),
                  (0, r.jsxs)(a.Scroller, {
                    className: u.linkCalloutContainer,
                    children: [
                      (0, r.jsxs)(a.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: [x, "//"],
                      }),
                      (0, r.jsx)(a.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-normal",
                        children: m,
                      }),
                      (0, r.jsx)(a.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: h,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, r.jsx)(a.ModalFooter, {
              children: (0, r.jsx)(a.Button, {
                type: "button",
                size: a.Button.Sizes.MEDIUM,
                color: a.Button.Colors.BRAND,
                onClick: c,
                children: i.default.Messages.GO_BACK,
              }),
            }),
          ],
        });
      }
    },
    474539: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          useUrlParts: function () {
            return s;
          },
          useModalState: function () {
            return o;
          },
        }),
        n("781738"),
        n("222007");
      var r = n("884691"),
        a = n("48703");
      function s(t) {
        let { protocol: e, hostname: n } = r.useMemo(
            () => ({
              protocol: (0, a.getProtocol)(t),
              hostname: (0, a.getHostname)(t),
            }),
            [t]
          ),
          s = "".concat(e, "//").concat(n),
          o = t.replace(s, "");
        return { protocol: e, hostname: n, theRestOfTheUrl: o };
      }
      function o(t) {
        let { url: e, trustUrl: n, onConfirm: a, onClose: o } = t,
          [l, i] = r.useState(!1),
          { protocol: u, hostname: c, theRestOfTheUrl: d } = s(e),
          f = r.useCallback(() => {
            l && n(e), null == o || o(), a();
          }, [e, l, n, a, o]);
        return {
          protocol: u,
          hostname: c,
          theRestOfTheUrl: d,
          shouldTrustUrl: l,
          setShouldTrustUrl: i,
          handleConfirm: f,
        };
      }
    },
    476765: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          uid: function () {
            return o;
          },
          useUID: function () {
            return l;
          },
          UID: function () {
            return i;
          },
        });
      var r = n("995008"),
        a = n.n(r),
        s = n("775560");
      let o = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(t);
        },
        l = () => (0, s.useLazyValue)(() => o()),
        i = t => {
          let { children: e } = t;
          return e(l());
        };
    },
  },
]);
//# sourceMappingURL=877a41b0014594dc063f.js.map

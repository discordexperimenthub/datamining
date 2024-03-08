(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99599"],
  {
    574305: function (e, t, l) {
      "use strict";
      e.exports = l.p + "740a92bb345576ddf2a9.png";
    },
    223993: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return f;
          },
        });
      var n = l("37983"),
        o = l("884691"),
        a = l("77078"),
        r = l("545158"),
        s = l("37785"),
        i = l("709681"),
        u = l("782340"),
        d = l("72758");
      let c = [
        { preBold: "That's pretty...", bold: "fly!" },
        {
          preBold: "On Point will make sure to",
          bold: " tick ",
          postBold: "a look at it!",
        },
        { preBold: "You're...un", bold: "bee ", postBold: "lievable!" },
      ];
      function p(e) {
        let { punConfig: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t.preBold,
            (0, n.jsx)("b", {
              children: (0, n.jsx)("i", { children: t.bold }),
            }),
            t.postBold,
          ],
        });
      }
      function f(e) {
        let { transitionState: t, onClose: l, asanaTask: f } = e;
        o.useEffect(() => {
          (0, i.playSound)("success", 0.1);
        }, []);
        let h = o.useRef(c[Math.floor(Math.random() * c.length)]).current;
        return (0, n.jsx)(a.ModalRoot, {
          className: d.bugReporterSubmitModalRoot,
          transitionState: t,
          "aria-label": u.default.Messages.SUBMIT_BUG,
          children: (0, n.jsxs)(a.ModalContent, {
            style: { overflow: "hidden", paddingRight: "0px" },
            className: d.modalContent,
            paddingFix: !1,
            children: [
              (0, n.jsx)(a.ModalCloseButton, {
                onClick: () => {
                  null == l || l();
                },
                className: d.closeButton,
              }),
              (0, n.jsxs)(a.Text, {
                className: d.submitText,
                variant: "text-sm/normal",
                children: [
                  "Thanks for submitting a ",
                  (0, n.jsx)(s.default, {
                    onClick: () => (0, r.default)(f.permalink_url),
                    children: "bug",
                  }),
                  "!",
                  (0, n.jsx)("br", {}),
                  (0, n.jsx)(p, { punConfig: h }),
                ],
              }),
            ],
          }),
        });
      }
    },
    37785: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        });
      var n = l("37983"),
        o = l("884691"),
        a = l("77078"),
        r = l("393414"),
        s = l("49111"),
        i = o.forwardRef(function (e, t) {
          let {
              href: l,
              children: i,
              onClick: u,
              onKeyPress: d,
              focusProps: c,
              ...p
            } = e,
            f = o.useCallback(
              e => {
                !e.repeat &&
                  ((e.charCode === s.KeyboardKeys.SPACE ||
                    e.charCode === s.KeyboardKeys.ENTER) &&
                    (e.preventDefault(),
                    null != l && (0, r.transitionTo)(l),
                    null == u || u()),
                  null == d || d(e));
              },
              [l, d, u]
            ),
            h = o.useCallback(
              e => {
                !e.metaKey &&
                  !e.shiftKey &&
                  0 === e.button &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  null != l && (0, r.transitionTo)(l),
                  null == u || u());
              },
              [l, u]
            ),
            b = (0, n.jsx)("a", {
              ref: t,
              href: l,
              onClick: h,
              onKeyPress: f,
              ...p,
              children: i,
            });
          return (0, n.jsx)(a.FocusRing, { ...c, children: b });
        });
    },
  },
]);
//# sourceMappingURL=dd8a8601d9d6988d1adf.js.map

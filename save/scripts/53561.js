(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53561"],
  {
    604480: function (e, s, a) {
      "use strict";
      e.exports = a.p + "691f111468c5642e27aa.svg";
    },
    836685: function (e, s, a) {
      "use strict";
      e.exports = a.p + "b7428f6dc2079861d9a3.svg";
    },
    738855: function (e, s, a) {
      "use strict";
      e.exports = a.p + "b289147e7424cd2b8cb8.svg";
    },
    756388: function (e, s, a) {
      "use strict";
      e.exports = a.p + "d7241b0252a287350d84.svg";
    },
    886638: function (e, s, a) {
      "use strict";
      e.exports = a.p + "6af7b8c39f444681b8a3.svg";
    },
    977610: function (e, s, a) {
      "use strict";
      e.exports = a.p + "8a4dc212137439f9af15.svg";
    },
    330230: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return A;
          },
        });
      var t = a("37983");
      a("884691");
      var _ = a("917351"),
        l = a.n(_),
        d = a("775560"),
        u = a("819855"),
        c = a("77078"),
        i = a("841098"),
        S = a("476765"),
        r = a("782340"),
        n = a("649464"),
        O = a("604480"),
        o = a("836685"),
        L = a("738855"),
        E = a("756388"),
        f = a("886638"),
        C = a("977610");
      let M = [E, f, C],
        D = [O, o, L],
        g = [
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_01,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_02,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_03,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_04,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_05,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_06,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_07,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_08,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_09,
          () => r.default.Messages.FOLLOW_SUCCESS_MODAL_HEADER_10,
        ];
      var A = e => {
        let { transitionState: s, onClose: a } = e,
          _ = (0, i.default)(),
          O = (0, S.useUID)(),
          o = (0, u.isThemeDark)(_) ? D : M,
          L = (0, d.useStableMemo)(() => l.sample(o), [o]),
          E = (0, d.useStableMemo)(() => l.sample(g), []);
        return (0, t.jsxs)(c.ModalRoot, {
          transitionState: s,
          className: n.root,
          "aria-labelledby": O,
          children: [
            (0, t.jsx)("img", { alt: "", src: L, className: n.image }),
            (0, t.jsxs)(c.ModalContent, {
              className: n.modal,
              children: [
                (0, t.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  className: n.followSuccessHeader,
                  id: O,
                  children: E(),
                }),
                (0, t.jsx)(c.Text, {
                  color: "text-muted",
                  variant: "text-md/medium",
                  className: n.body,
                  children: r.default.Messages.FOLLOW_SUCCESS_MODAL_BODY,
                }),
                (0, t.jsx)(c.Button, {
                  onClick: a,
                  children: r.default.Messages.TUTORIAL_CLOSE,
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=4de3cff9cd44eebd4057.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88641"],
  {
    74066: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }),
        n("222007");
      var o = n("37983"),
        i = n("884691"),
        r = n("77078"),
        a = n("449918"),
        s = n("526887"),
        d = n("49111"),
        u = n("782340"),
        l = n("532827");
      function c(e) {
        let { onClose: t, initialPercent: n, numActions: c } = e,
          [C, h] = i.useState(n),
          { createMultipleConfetti: m } = i.useContext(s.ConfettiCannonContext);
        return (
          i.useEffect(() => {
            setTimeout(() => h(1), 200),
              setTimeout(() => {
                let e = window.innerWidth / 2,
                  t = window.innerHeight / 2;
                m(
                  {
                    position: {
                      type: "static-random",
                      minValue: { x: e - 5, y: t - 5 },
                      maxValue: { x: e + 5, y: t + 5 },
                    },
                  },
                  25
                );
              }, 700),
              setTimeout(t, 2e3);
          }, [m, t]),
          (0, o.jsxs)("div", {
            children: [
              (0, o.jsx)(r.Heading, {
                className: l.heading,
                variant: "heading-xl/semibold",
                color: "header-primary",
                children:
                  u.default.Messages.MEMBER_ACTION_COMPLETE_MODAL_TEXT_WITH_COUNT.format(
                    { count: c }
                  ),
              }),
              (0, o.jsx)(r.Progress, {
                foregroundGradientColor: [
                  (0, a.getColor)(d.Color.GREEN_300),
                  (0, a.getColor)(d.Color.GREEN_230),
                ],
                percent: 100 * C,
                animate: !0,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=791a9c8cd284f130d962.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1881"],
  {
    684611: function (e, s, a) {
      "use strict";
      e.exports = a.p + "caec3824bcadbcf237b6.svg";
    },
    108838: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return E;
          },
        });
      var t = a("37983");
      a("884691");
      var l = a("77078"),
        n = a("476765"),
        i = a("293137"),
        r = a("97347"),
        d = a("711486"),
        o = a("782340"),
        c = a("716349"),
        u = a("684611");
      let _ = e => {
        let { text: s, icon: a, foreground: n } = e;
        return (0, t.jsxs)("div", {
          className: c.bulletContainer,
          children: [
            (0, t.jsx)("div", {
              className: c.iconContainer,
              children: (0, t.jsx)(a, {
                foreground: n,
                className: c.bulletIcon,
                height: 40,
                width: 40,
              }),
            }),
            (0, t.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: c.bulletText,
              children: s,
            }),
          ],
        });
      };
      function E(e) {
        let { transitionState: s, onClose: a, ...E } = e,
          A = (0, n.useUID)();
        return (0, t.jsx)(l.ModalRoot, {
          transitionState: s,
          "aria-labelledby": A,
          ...E,
          size: l.ModalSize.SMALL,
          children: (0, t.jsxs)("div", {
            className: c.content,
            children: [
              (0, t.jsx)("img", {
                src: u,
                alt: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ALT_TEXT,
                className: c.illustration,
              }),
              (0, t.jsx)(l.Heading, {
                id: A,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: c.headerTitle,
                children: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_TITLE,
              }),
              (0, t.jsx)(_, {
                text: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_1,
                icon: r.default,
                foreground: c.red,
              }),
              (0, t.jsx)(_, {
                text: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_2,
                icon: i.default,
              }),
              (0, t.jsx)(_, {
                text: o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_3,
                icon: d.default,
              }),
              (0, t.jsx)(l.Button, {
                color: l.Button.Colors.BRAND,
                className: c.button,
                onClick: a,
                children:
                  o.default.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ACTION,
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=0b72378d7827c561d68f.js.map

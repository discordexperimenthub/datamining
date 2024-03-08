(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28711"],
  {
    203966: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return d;
          },
        });
      var n = t("37983");
      t("884691");
      var a = t("77078"),
        r = t("476765"),
        l = t("151642"),
        o = t("29846"),
        c = t("782340"),
        i = t("634759");
      function d(e) {
        let {
            channel: s,
            onAccept: t,
            transitionState: d,
            onClose: u,
            ...h
          } = e,
          f = (0, r.useUID)(),
          x = (0, l.useStageBlockedUsers)(s.id);
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: d,
          "aria-labelledby": f,
          ...h,
          size: a.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(a.ModalHeader, {
              className: i.header,
              children: [
                (0, n.jsx)(a.Heading, {
                  variant: "heading-xl/semibold",
                  children:
                    c.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                      number: x.length,
                    }),
                }),
                (0, n.jsx)(a.Text, {
                  color: "header-secondary",
                  className: i.description,
                  variant: "text-sm/normal",
                  children: c.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
                    number: x.length,
                  }),
                }),
              ],
            }),
            (0, n.jsx)(a.ModalContent, {
              className: i.content,
              children: x.map(e => {
                let { user: t, id: a, speaker: r } = e;
                return (0, n.jsx)(
                  o.BlockedUser,
                  { user: t, speaker: r, showStatus: !0, channelId: s.id },
                  a
                );
              }),
            }),
            (0, n.jsxs)(a.ModalFooter, {
              className: i.footer,
              children: [
                (0, n.jsx)(a.Button, {
                  onClick: () => {
                    t(s), u();
                  },
                  color: a.Button.Colors.BRAND,
                  children: c.default.Messages.STAGE_BLOCKED_USERS_ACCEPT,
                }),
                (0, n.jsx)(a.Button, {
                  onClick: () => {
                    u();
                  },
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  children: c.default.Messages.STAGE_BLOCKED_USERS_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    328275: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return o;
          },
        });
      var n = t("37983");
      t("884691");
      var a = t("469563"),
        r = t("833222"),
        l = t("75196"),
        o = (0, a.replaceIcon)(
          function (e) {
            let {
              width: s = 32,
              height: t = 32,
              color: a = "currentColor",
              ...r
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, l.default)(r),
              width: s,
              height: t,
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, n.jsx)("clipPath", {
                  children: (0, n.jsx)("path", { d: "m.000183 0h16v16h-16z" }),
                }),
                (0, n.jsx)("g", {
                  clipPath: "url(#a)",
                  children: (0, n.jsx)("path", {
                    d: "m7.90039 1c-3.9 0-6.999999 3.1-6.999999 7s3.099999 7 6.999999 7c3.90001 0 7.00001-3.1 7.00001-7s-3.2-7-7.00001-7zm0 2.3c.8 0 1.6.3 2.30001.7l-6.40001 6.4c-.3-.7-.6-1.5-.6-2.4 0-2.6 2.1-4.7 4.7-4.7zm0 9.4c-.9 0-1.7-.3-2.4-.7l6.40001-6.4c.4.7.7 1.5.7 2.4-.1 2.6-2.2 4.7-4.70001 4.7z",
                    fill: a,
                  }),
                }),
              ],
            });
          },
          r.DenyIcon,
          void 0,
          { size: 32 }
        );
    },
  },
]);
//# sourceMappingURL=5d5892b6e5131d145624.js.map

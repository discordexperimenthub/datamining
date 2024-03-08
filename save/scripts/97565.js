(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97565"],
  {
    730705: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return h;
          },
        });
      var t = s("37983");
      s("884691");
      var n = s("77078"),
        l = s("476765"),
        o = s("849467"),
        c = s("228427"),
        i = s("244480"),
        d = s("119184"),
        r = s("782340"),
        u = s("570005");
      function h(e) {
        let { transitionState: a, onClose: s, channel: h } = e,
          m = (0, l.useUID)(),
          N = e => {
            (0, i.audienceAckRequestToSpeak)(h, e), s();
          };
        return (0, t.jsx)(n.ModalRoot, {
          size: n.ModalSize.SMALL,
          transitionState: a,
          "aria-labelledby": m,
          className: u.container,
          children: (0, t.jsxs)(n.ModalContent, {
            className: u.content,
            children: [
              (0, t.jsx)(d.default, {
                children: (0, t.jsx)("div", {
                  className: u.iconBackground,
                  children: (0, t.jsx)(o.default, {
                    height: 40,
                    width: 40,
                    className: u.icon,
                  }),
                }),
              }),
              (0, t.jsx)(n.Heading, {
                className: u.header,
                variant: "heading-lg/semibold",
                children: r.default.Messages.STAGE_SPEAK_INVITE_HEADER,
              }),
              (0, t.jsx)(n.Text, {
                color: "header-secondary",
                className: u.description,
                variant: "text-sm/normal",
                children: r.default.Messages.STAGE_SPEAK_INVITE_MODAL.format({
                  stageChannelHook: () =>
                    (0, t.jsxs)("div", {
                      className: u.channel,
                      children: [
                        (0, t.jsx)(c.default, {
                          height: 14,
                          width: 14,
                          className: u.channelIcon,
                        }),
                        (0, t.jsx)(n.Text, {
                          className: u.channelName,
                          variant: "text-sm/normal",
                          children: h.name,
                        }),
                      ],
                    }),
                }),
              }),
              (0, t.jsx)(n.Button, {
                fullWidth: !0,
                color: n.Button.Colors.GREEN,
                onClick: () => N(!1),
                className: u.button,
                children: r.default.Messages.ACCEPT,
              }),
              (0, t.jsx)(n.Button, {
                fullWidth: !0,
                color: n.Button.Colors.RED,
                onClick: () => N(!0),
                className: u.button,
                children: r.default.Messages.DECLINE,
              }),
              (0, t.jsx)(n.Button, {
                fullWidth: !0,
                color: n.Button.Colors.PRIMARY,
                look: n.Button.Looks.LINK,
                onClick: s,
                children: r.default.Messages.NOT_NOW,
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=036a5f70758774794d0a.js.map

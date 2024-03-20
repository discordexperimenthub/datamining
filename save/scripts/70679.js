(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70679"],
  {
    234235: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return l;
          },
        });
      var t = s("37983");
      s("884691");
      var n = s("77078"),
        r = s("686538"),
        o = s("476765"),
        d = s("782340"),
        i = s("453730");
      function l(e) {
        let { channelId: a, messageId: s, onClose: l, transitionState: c } = e,
          u = (0, o.useUID)();
        return (0, t.jsx)(n.ModalRoot, {
          transitionState: c,
          "aria-labelledby": u,
          size: n.ModalSize.SMALL,
          children: (0, t.jsxs)(n.ModalContent, {
            className: i.container,
            children: [
              (0, t.jsx)(n.Heading, {
                id: u,
                variant: "heading-lg/bold",
                color: "header-primary",
                className: i.header,
                children: d.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
              }),
              (0, t.jsx)(n.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: i.subheader,
                children:
                  d.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
              }),
              (0, t.jsxs)("div", {
                className: i.buttonContainer,
                children: [
                  (0, t.jsx)(n.Button, {
                    className: i.button,
                    size: n.Button.Sizes.MEDIUM,
                    color: n.Button.Colors.BRAND,
                    onClick: l,
                    children: d.default.Messages.DISMISS,
                  }),
                  (0, t.jsx)(n.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children:
                      d.default.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format(
                        {
                          handleFalsePositiveHook: () => {
                            l(), (0, r.handleSenderFalsePositiveFlow)(a, s);
                          },
                        }
                      ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=aa4d059e781b0fc1fb5e.js.map

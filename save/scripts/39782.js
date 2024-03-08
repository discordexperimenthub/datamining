(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39782"],
  {
    338052: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        });
      var o = a("37983");
      a("884691");
      var s = a("298386"),
        r = a("77078"),
        l = a("679653"),
        n = a("782340"),
        E = e => {
          let { channel: t, onClose: a, onConfirm: E, transitionState: d } = e,
            {
              title: i,
              body: u,
              confirm: c,
            } = (function (e) {
              let t = (0, l.default)(e, !0);
              return e.type === s.ChannelTypes.GUILD_CATEGORY
                ? {
                    title: n.default.Messages.DELETE_FAVORITES_CHANNEL_TITLE,
                    body: n.default.Messages.DELETE_FAVORITES_CATEGORY_BODY.format(
                      { channelName: t }
                    ),
                    confirm:
                      n.default.Messages.DELETE_FAVORITES_CATEGORY_CONFIRM,
                  }
                : {
                    title: n.default.Messages.DELETE_FAVORITES_CHANNEL_TITLE,
                    body: n.default.Messages.DELETE_FAVORITES_CHANNEL_BODY.format(
                      { channelName: t }
                    ),
                    confirm:
                      n.default.Messages.DELETE_FAVORITES_CHANNEL_CONFIRM,
                  };
            })(t);
          return (0, o.jsxs)(r.ModalRoot, {
            transitionState: d,
            "aria-label": i,
            children: [
              (0, o.jsx)(r.ModalHeader, {
                separator: !1,
                children: (0, o.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: i,
                }),
              }),
              (0, o.jsx)(r.ModalContent, {
                children: (0, o.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-primary",
                  children: u,
                }),
              }),
              (0, o.jsxs)(r.ModalFooter, {
                children: [
                  (0, o.jsx)(r.Button, {
                    onClick: E,
                    color: r.Button.Colors.RED,
                    children: c,
                  }),
                  (0, o.jsx)(r.Button, {
                    onClick: a,
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.PRIMARY,
                    children: n.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=2060094c6fb811fc4dea.js.map

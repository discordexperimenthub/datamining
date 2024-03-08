(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36357"],
  {
    500716: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          EmojiAddModal: function () {
            return h;
          },
        }),
        s("222007");
      var t = s("37983"),
        l = s("884691"),
        i = s("77078"),
        o = s("191814"),
        n = s("476765"),
        d = s("315102"),
        r = s("41391"),
        c = s("782340"),
        u = s("145326");
      function m(e) {
        let { emoji: a, onChange: s, value: l } = e,
          o = d.default.getEmojiURL({
            id: a.id,
            animated: a.animated,
            size: 24,
          });
        return (0, t.jsx)(i.Checkbox, {
          size: 20,
          className: u.emojiRow,
          onChange: s,
          type: i.Checkbox.Types.INVERTED,
          value: l,
          reverse: !0,
          children: (0, t.jsxs)("div", {
            className: u.emojiLabel,
            children: [
              (0, t.jsx)("img", {
                className: u.emojiImage,
                src: o,
                width: 24,
                height: 24,
                alt: "",
              }),
              (0, t.jsx)(i.Text, {
                color: "header-primary",
                variant: "text-md/medium",
                className: u.emojiAlias,
                children: a.name,
              }),
            ],
          }),
        });
      }
      function h(e) {
        let {
            guildId: a,
            initialTierEmojiIds: s,
            onSubmit: d,
            transitionToManageEmoji: h,
            transitionState: j,
            onClose: x,
          } = e,
          _ = (0, r.default)(a),
          [C, I] = l.useState(new Set()),
          f = C.size > 0,
          D = (0, n.useUID)();
        return (0, t.jsx)("form", {
          onSubmit: function (e) {
            e.preventDefault(), d(C), x();
          },
          children: (0, t.jsxs)(i.ModalRoot, {
            transitionState: j,
            "aria-labelledby": D,
            children: [
              (0, t.jsxs)(i.ModalHeader, {
                children: [
                  (0, t.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    id: D,
                    children:
                      c.default.Messages
                        .GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_HEADER,
                  }),
                  (0, t.jsx)(i.ModalCloseButton, {
                    className: u.closeButton,
                    onClick: x,
                  }),
                ],
              }),
              (0, t.jsxs)(i.ModalContent, {
                className: u.modalContent,
                children: [
                  (0, t.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children:
                      c.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_DESCRIPTION.format(
                        { transitionToManageEmoji: h }
                      ),
                  }),
                  (0, t.jsx)(o.default, { size: 16 }),
                  null != _ &&
                    _.length > 0 &&
                    (0, t.jsx)("div", {
                      className: u.emojiContainer,
                      children: _.map(e =>
                        null != s && s.has(e.id)
                          ? null
                          : (0, t.jsx)(
                              m,
                              {
                                emoji: e,
                                onChange: () => {
                                  var a;
                                  return (
                                    (a = e.id),
                                    void I(e => {
                                      let s = new Set(e);
                                      return (
                                        C.has(a) ? s.delete(a) : s.add(a), s
                                      );
                                    })
                                  );
                                },
                                value: C.has(e.id),
                              },
                              e.id
                            )
                      ),
                    }),
                  (0, t.jsx)(o.default, { size: 8 }),
                ],
              }),
              (0, t.jsxs)(i.ModalFooter, {
                className: u.modalFooter,
                children: [
                  (0, t.jsx)(i.Button, {
                    type: "submit",
                    disabled: !f,
                    children:
                      c.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_ADD_MODAL_SAVE_BUTTON.format(
                        { totalEmoji: C.size }
                      ),
                  }),
                  (0, t.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    className: u.cancelButton,
                    onClick: x,
                    children: c.default.Messages.CANCEL,
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
//# sourceMappingURL=917cb87c4b5cf7377735.js.map

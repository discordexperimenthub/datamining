(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14914"],
  {
    456552: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return m;
          },
        }),
        o("222007");
      var i = o("37983"),
        l = o("884691"),
        a = o("77078"),
        s = o("18054"),
        n = o("86678"),
        d = o("20105"),
        r = o("958706"),
        u = o("782340"),
        c = o("712478"),
        m = e => {
          var t, o, m;
          let { channel: j, onClose: N, transitionState: x } = e,
            [h, E] = l.useState(
              null !== (m = j.defaultReactionEmoji) && void 0 !== m ? m : null
            ),
            [v, f] = l.useState(!1),
            [M, _] = l.useState(!1),
            I =
              (null === (t = j.defaultReactionEmoji) || void 0 === t
                ? void 0
                : t.emojiId) !== (null == h ? void 0 : h.emojiId) ||
              (null === (o = j.defaultReactionEmoji) || void 0 === o
                ? void 0
                : o.emojiName) !== (null == h ? void 0 : h.emojiName),
            A = e => {
              let t =
                null == e
                  ? null
                  : (null == e ? void 0 : e.id) != null
                    ? { emojiId: e.id, emojiName: void 0 }
                    : {
                        emojiId: void 0,
                        emojiName: e.optionallyDiverseSequence,
                      };
              E(t);
            },
            R = async () => {
              if (I) {
                f(!0), _(!1);
                try {
                  await (0, s.saveChannel)(j.id, { defaultReactionEmoji: h }),
                    N();
                } catch (e) {
                  _(!0);
                } finally {
                  f(!1);
                }
              }
            };
          return (0, i.jsxs)(a.ModalRoot, {
            transitionState: x,
            "aria-label":
              u.default.Messages
                .FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
            children: [
              (0, i.jsx)(a.ModalHeader, {
                separator: !1,
                className: c.modalHeader,
                children: (0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children:
                    u.default.Messages
                      .FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
                }),
              }),
              (0, i.jsxs)(a.ModalContent, {
                children: [
                  (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    className: c.subtitle,
                    children:
                      u.default.Messages
                        .FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_DESCRIPTION,
                  }),
                  (0, i.jsx)(d.default, { reactionEmoji: h }),
                  (0, i.jsxs)("div", {
                    className: c.buttonRow,
                    children: [
                      (0, i.jsx)(a.Popout, {
                        renderPopout: e => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(n.default, {
                            guildId: null == j ? void 0 : j.guild_id,
                            closePopout: t,
                            onSelectEmoji: (e, o) => {
                              A(e), o && t();
                            },
                            pickerIntention: r.EmojiIntention.COMMUNITY_CONTENT,
                            channel: j,
                          });
                        },
                        position: "right",
                        animation: a.Popout.Animation.NONE,
                        align: "center",
                        children: e =>
                          (0, i.jsx)(a.Button, {
                            ...e,
                            size: a.Button.Sizes.SMALL,
                            onClick: t => {
                              var o;
                              null === (o = e.onClick) ||
                                void 0 === o ||
                                o.call(e, t);
                            },
                            children: u.default.Messages.SELECT_EMOJI,
                          }),
                      }),
                      null != j.defaultReactionEmoji
                        ? (0, i.jsx)(a.Button, {
                            className: c.removeButton,
                            onClick: () => A(null),
                            size: a.Button.Sizes.MIN,
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.RED,
                            children: u.default.Messages.REMOVE,
                          })
                        : null,
                    ],
                  }),
                  M
                    ? (0, i.jsx)("div", {
                        className: c.row,
                        children: (0, i.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          color: "text-danger",
                          children:
                            u.default.Messages
                              .FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_ERROR,
                        }),
                      })
                    : null,
                ],
              }),
              (0, i.jsxs)(a.ModalFooter, {
                className: c.footer,
                children: [
                  (0, i.jsx)(a.Button, {
                    type: "submit",
                    color: a.Button.Colors.BRAND_NEW,
                    size: a.Button.Sizes.SMALL,
                    className: c.button,
                    onClick: R,
                    disabled: !I,
                    submitting: v,
                    autoFocus: !0,
                    children: u.default.Messages.SAVE,
                  }),
                  (0, i.jsx)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.SMALL,
                    className: c.button,
                    onClick: N,
                    children: u.default.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          });
        };
    },
    20105: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return u;
          },
        });
      var i = o("37983");
      o("884691");
      var l = o("446674"),
        a = o("77078"),
        s = o("430568"),
        n = o("385976"),
        d = o("79945"),
        r = o("826660");
      function u(e) {
        let { reactionEmoji: t } = e,
          o = (0, l.useStateFromStores)([n.default], () =>
            (null == t ? void 0 : t.emojiId) != null
              ? n.default.getUsableCustomEmojiById(t.emojiId)
              : null
          );
        return (0, i.jsxs)("div", {
          className: r.container,
          children: [
            (0, i.jsxs)("div", {
              className: r.body,
              children: [
                (0, i.jsxs)("div", {
                  className: r.placeholderLines,
                  children: [
                    (0, i.jsx)(c, { width: "100%", marginBottom: 8 }),
                    (0, i.jsx)(c, { width: "80%", marginBottom: 16 }),
                    (0, i.jsx)(c, { width: "50%", marginBottom: 8 }),
                    (0, i.jsx)(c, { width: "60%", marginBottom: 16 }),
                  ],
                }),
                (0, i.jsx)("div", { className: r.placeholderMedia }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: r.footer,
              children: [
                (0, i.jsxs)("div", {
                  className: r.reaction,
                  children: [
                    null != t
                      ? (0, i.jsx)(s.default, {
                          className: r.reactionEmote,
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: !!(null == o ? void 0 : o.animated),
                        })
                      : (0, i.jsx)(d.default, { className: r.reactionEmote }),
                    (0, i.jsx)(a.Text, {
                      variant: "text-sm/semibold",
                      color: "interactive-normal",
                      children: 17,
                    }),
                  ],
                }),
                (0, i.jsx)(c, { width: "24px", marginBottom: 0 }),
                (0, i.jsx)("div", { className: r.dot }),
                (0, i.jsx)(c, { width: "24px", marginBottom: 0 }),
              ],
            }),
          ],
        });
      }
      function c(e) {
        let { width: t, marginBottom: o } = e;
        return (0, i.jsx)("div", {
          className: r.placeholderLine,
          style: { width: t, marginBottom: o },
        });
      }
    },
  },
]);
//# sourceMappingURL=e3bbc8a9d4328b53c038.js.map

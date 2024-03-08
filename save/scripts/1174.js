(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1174"],
  {
    678642: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          STATUS_MAX_LENGTH: function () {
            return n;
          },
        });
      let n = 60;
    },
    579371: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return p;
          },
        }),
        l("222007");
      var n = l("37983"),
        a = l("884691"),
        s = l("446674"),
        o = l("77078"),
        i = l("430568"),
        u = l("86678"),
        d = l("385976"),
        r = l("42203"),
        m = l("18494"),
        c = l("697218"),
        S = l("882641"),
        T = l("945330"),
        f = l("719923"),
        j = l("233965"),
        x = l("32346"),
        h = l("678642"),
        v = l("958706"),
        g = l("782340"),
        N = l("754748");
      function _(e) {
        let { customStatusEmoji: t, setCustomStatusEmoji: l, onClose: a } = e,
          d = (0, s.useStateFromStores)([m.default, r.default], () =>
            r.default.getChannel(m.default.getVoiceChannelId())
          ),
          c = e => {
            var t;
            if (null == e) {
              l(null);
              return;
            }
            let n =
              null != e.id
                ? { id: e.id, name: e.name, animated: e.animated }
                : {
                    id: null,
                    name:
                      null !== (t = e.optionallyDiverseSequence) && void 0 !== t
                        ? t
                        : "",
                    animated: !1,
                  };
            l(n);
          };
        return (0, n.jsx)(o.Popout, {
          renderPopout: e => {
            var t;
            let { closePopout: l } = e;
            return (0, n.jsx)(u.default, {
              channel: d,
              guildId:
                null !== (t = null == d ? void 0 : d.guild_id) && void 0 !== t
                  ? t
                  : void 0,
              closePopout: l,
              onSelectEmoji: (e, t) => {
                c(e), t && l();
              },
              pickerIntention: v.EmojiIntention.STATUS,
              onNavigateAway: a,
            });
          },
          position: "left",
          animation: o.Popout.Animation.NONE,
          align: "top",
          children: (e, l) => {
            let { isShown: a } = l;
            return (0, n.jsx)(S.default, {
              ...e,
              active: a,
              className: N.emojiButton,
              tabIndex: 0,
              renderButtonContents:
                null == t
                  ? null
                  : () =>
                      (0, n.jsx)(i.default, {
                        className: N.emoji,
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: !!t.animated,
                      }),
            });
          },
        });
      }
      function p(e) {
        var t, l;
        let {
            transitionState: s,
            onClose: i,
            startingText: u,
            startingEmoji: r,
          } = e,
          m = x.default.getCustomHangStatus(),
          S =
            null != u
              ? u
              : null !== (t = null == m ? void 0 : m.status) && void 0 !== t
                ? t
                : "",
          v =
            null !== (l = null == m ? void 0 : m.emoji) && void 0 !== l
              ? l
              : null;
        if ((null == r ? void 0 : r.id) != null) {
          let e =
            f.default.canUseEmojisEverywhere(c.default.getCurrentUser()) &&
            null != d.default.getUsableCustomEmojiById(r.id);
          v = e ? r : null;
        } else (null == r ? void 0 : r.name) != null && (v = r);
        let [p, A] = a.useState(S),
          [C, E] = a.useState(v);
        return (0, n.jsxs)(o.ModalRoot, {
          className: N.modal,
          transitionState: s,
          size: o.ModalSize.DYNAMIC,
          children: [
            (0, n.jsxs)(o.ModalContent, {
              className: N.modalContent,
              children: [
                (0, n.jsx)(o.Button, {
                  "aria-label": g.default.Messages.CLOSE,
                  look: o.Button.Looks.BLANK,
                  size: o.Button.Sizes.NONE,
                  onClick: i,
                  className: N.closeButton,
                  children: (0, n.jsx)(T.default, {
                    width: 16,
                    height: 16,
                    className: N.closeIcon,
                  }),
                }),
                (0, n.jsx)(_, {
                  customStatusEmoji: C,
                  setCustomStatusEmoji: E,
                  onClose: i,
                }),
                (0, n.jsxs)("div", {
                  className: N.customInputGroup,
                  children: [
                    (0, n.jsx)(o.Text, {
                      className: N.leadInText,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: g.default.Messages.STATUS_LEAD_IN_JUST,
                    }),
                    (0, n.jsx)(o.TextInput, {
                      className: N.customInput,
                      value: p,
                      onChange: e => A(e.substring(0, h.STATUS_MAX_LENGTH)),
                      placeholder:
                        g.default.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER,
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(o.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      children: g.default.Messages.SET_STATUS_MODAL_TITLE,
                    }),
                    (0, n.jsx)(o.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: g.default.Messages.SET_STATUS_MODAL_SUBTITLE,
                    }),
                  ],
                }),
                (0, n.jsx)(o.Button, {
                  onClick: () => {
                    let e = p.trim();
                    "" !== e &&
                      null != C &&
                      ((0, j.updateCustomHangStatus)(e, C, !0), i());
                  },
                  disabled: "" === p.trim() || null == C,
                  children: g.default.Messages.SET_STATUS_MODAL_CTA,
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=08a1705f17dc45e225b1.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94255"],
  {
    987034: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          default: function () {
            return x;
          },
        }),
        n("222007");
      var a = n("37983"),
        t = n("884691"),
        o = n("446674"),
        i = n("77078"),
        d = n("430568"),
        s = n("86678"),
        u = n("385976"),
        r = n("923959"),
        c = n("882641"),
        m = n("476765"),
        j = n("381546"),
        h = n("404607"),
        v = n("49111"),
        f = n("958706"),
        C = n("782340"),
        E = n("837576");
      function x(e) {
        var l;
        let {
            transitionState: n,
            onClose: x,
            channelId: N,
            guildId: T,
            tag: g,
          } = e,
          p = (0, m.useUID)(),
          M = null != g,
          [R, _] = t.useState(
            null !== (l = null == g ? void 0 : g.name) && void 0 !== l ? l : ""
          ),
          [I, k] = t.useState(
            null != g ? { id: g.emojiId, name: g.emojiName } : null
          ),
          [A, B] = t.useState(null == g ? void 0 : g.moderated),
          b = (0, o.useStateFromStores)([u.default], () =>
            (null == I ? void 0 : I.id) != null
              ? u.default.getUsableCustomEmojiById(I.id)
              : null
          ),
          O =
            (null == g ? void 0 : g.name) !== R ||
            (null == g ? void 0 : g.emojiId) !== (null == I ? void 0 : I.id) ||
            (null == g ? void 0 : g.emojiName) !==
              (null == I ? void 0 : I.name) ||
            A !== (null == g ? void 0 : g.moderated),
          F = () => {
            if (null != R && O) {
              if (M) {
                h.default.updateForumTag(
                  {
                    id: g.id,
                    name: R,
                    emojiId: null == I ? void 0 : I.id,
                    emojiName: null == I ? void 0 : I.name,
                    moderated: A,
                  },
                  N
                ),
                  x();
                return;
              }
              h.default.createForumTag(
                {
                  name: R,
                  emojiId: null == I ? void 0 : I.id,
                  emojiName: null == I ? void 0 : I.name,
                  moderated: A,
                },
                N
              ),
                x();
            }
          },
          D = e => {
            null != e &&
              k(
                null != e.id
                  ? { id: e.id, name: e.name }
                  : { id: void 0, name: e.optionallyDiverseSequence }
              );
          },
          S = t.useCallback(e => _(e), []),
          y = t.createRef();
        return (
          t.useEffect(() => {
            null != y.current && y.current.focus();
          }, []),
          (0, a.jsxs)(i.ModalRoot, {
            transitionState: n,
            "aria-labelledby": p,
            children: [
              (0, a.jsx)(i.ModalHeader, {
                separator: !1,
                children: (0, a.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  children: M
                    ? C.default.Messages.FORUM_TAG_EDIT
                    : C.default.Messages.FORUM_TAG_CREATE,
                }),
              }),
              (0, a.jsxs)("div", {
                className: E.content,
                children: [
                  (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: C.default.Messages.FORUM_TAG_CREATE_DESCRIPTION,
                  }),
                  (0, a.jsxs)("div", {
                    className: E.inputContainer,
                    children: [
                      (0, a.jsx)("div", {
                        className: E.emojiButtonContainer,
                        children: (0, a.jsx)(i.Popout, {
                          renderPopout: e => {
                            let { closePopout: l } = e,
                              n = r.default.getDefaultChannel(T);
                            return (0, a.jsx)(s.default, {
                              guildId: T,
                              closePopout: l,
                              onSelectEmoji: (e, n) => {
                                D(e), n && l();
                              },
                              pickerIntention:
                                f.EmojiIntention.COMMUNITY_CONTENT,
                              onNavigateAway: x,
                              channel: n,
                            });
                          },
                          position: "left",
                          animation: i.Popout.Animation.NONE,
                          align: "bottom",
                          children: (e, l) => {
                            let { isShown: n } = l;
                            return (0, a.jsx)(c.default, {
                              ...e,
                              onClick: l => {
                                var n;
                                null === (n = e.onClick) ||
                                  void 0 === n ||
                                  n.call(e, l);
                              },
                              active: n,
                              className: E.emojiButton,
                              tabIndex: 0,
                              renderButtonContents:
                                null != I && (null != I.id || null != I.name)
                                  ? () =>
                                      (0, a.jsx)(d.default, {
                                        className: E.emoji,
                                        emojiId: I.id,
                                        emojiName: I.name,
                                        animated: !!(null == b
                                          ? void 0
                                          : b.animated),
                                      })
                                  : null,
                            });
                          },
                        }),
                      }),
                      (0, a.jsx)(i.TextInput, {
                        inputRef: y,
                        maxLength: 20,
                        value: R,
                        inputClassName: E.input,
                        placeholder:
                          C.default.Messages.FORUM_TAG_CREATE_PLACEHOLDER,
                        onChange: S,
                        autoFocus: !0,
                        onKeyDown: e => {
                          e.keyCode === v.KeyboardKeys.ENTER &&
                            R.length > 0 &&
                            (R.length > 0 && F(), e.preventDefault());
                        },
                      }),
                      R.length > 0 || null != I
                        ? (0, a.jsx)(i.Button, {
                            "aria-label":
                              C.default.Messages.FORUM_TAG_EDIT_RESET_LABEL,
                            className: E.clearButton,
                            onClick: () => {
                              _(""), k(null);
                            },
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.NONE,
                            children: (0, a.jsx)(j.default, {
                              className: E.clearIcon,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(i.Checkbox, {
                type: i.Checkbox.Types.INVERTED,
                size: 18,
                value: null != A && A,
                onChange: (e, l) =>
                  B(
                    l || ((null == g ? void 0 : g.moderated) == null && void 0)
                  ),
                className: E.moderatedCheckbox,
                children: (0, a.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: C.default.Messages.FORUM_MODERATED_TAG_CHECKBOX,
                }),
              }),
              (0, a.jsxs)(i.ModalFooter, {
                className: E.footer,
                children: [
                  (0, a.jsxs)("div", {
                    className: E.buttons,
                    children: [
                      (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: () => {
                          x();
                        },
                        children: C.default.Messages.CANCEL,
                      }),
                      (0, a.jsx)(i.Button, {
                        onClick: F,
                        disabled: 0 === R.length || !O,
                        autoFocus: !0,
                        children: C.default.Messages.SAVE,
                      }),
                    ],
                  }),
                  M &&
                    (0, a.jsx)(i.Button, {
                      color: i.Button.Colors.RED,
                      look: i.Button.Looks.LINK,
                      onClick: () => {
                        M && (h.default.deleteForumTag(N, g.id), x());
                      },
                      children: C.default.Messages.FORUM_TAG_REMOVE,
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=1ad54387887793aac18a.js.map

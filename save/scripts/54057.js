(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54057"],
  {
    145106: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return i;
          },
        }),
        l("222007");
      var s = l("37983"),
        n = l("884691"),
        a = l("133403"),
        o = l("164527");
      function i(e) {
        let { hasSetEmoji: t, onClick: l, children: i } = e,
          [r, d] = n.useState(!1);
        return (0, s.jsxs)("div", {
          className: o.container,
          onMouseEnter: () => {
            if (t) {
              d(!0);
              return;
            }
            d(!1);
          },
          onMouseLeave: () => {
            d(!1);
          },
          children: [
            i,
            t &&
              r &&
              (0, s.jsx)(a.default, { onClick: l, className: o.removeButton }),
          ],
        });
      }
    },
    679844: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return x;
          },
        }),
        l("222007");
      var s = l("37983"),
        n = l("884691"),
        a = l("917351"),
        o = l.n(a),
        i = l("446674"),
        r = l("77078"),
        d = l("398410"),
        u = l("571067"),
        c = l("923959"),
        N = l("476765"),
        O = l("423487"),
        m = l("898260"),
        _ = l("449008"),
        E = l("385334"),
        I = l("330724"),
        f = l("136278"),
        R = l("869447"),
        h = l("653138"),
        v = l("782340"),
        T = l("996983");
      function x(e) {
        let {
            transitionState: t,
            onClose: l,
            onSave: a,
            onDelete: O,
            option: _,
            guild: E,
            prompt: x,
            index: M,
          } = e,
          j = (0, N.useUID)(),
          g = (0, i.useStateFromStores)([c.default], () =>
            c.default.getDefaultChannel(E.id)
          ),
          [A, L] = n.useState(() => {
            var e;
            return null !== (e = null == _ ? void 0 : _.emoji) && void 0 !== e
              ? e
              : null;
          }),
          [p, C] = n.useState(() => {
            var e;
            return null !== (e = null == _ ? void 0 : _.title) && void 0 !== e
              ? e
              : "";
          }),
          [D, S] = n.useState(() => {
            var e;
            return null !== (e = null == _ ? void 0 : _.description) &&
              void 0 !== e
              ? e
              : "";
          }),
          [B, H] = n.useState(() => {
            var e;
            return new Set(
              null !== (e = null == _ ? void 0 : _.channelIds) && void 0 !== e
                ? e
                : []
            );
          }),
          [k, G] = n.useState(() => {
            var e;
            return new Set(
              null !== (e = null == _ ? void 0 : _.roleIds) && void 0 !== e
                ? e
                : []
            );
          }),
          [b, U] = n.useState({}),
          y = n.useRef(null);
        return (
          n.useLayoutEffect(() => {
            var e;
            return null === (e = y.current) || void 0 === e
              ? void 0
              : e.focus();
          }, []),
          (0, s.jsxs)(r.ModalRoot, {
            transitionState: t,
            "aria-labelledby": j,
            children: [
              (0, s.jsxs)("div", {
                className: T.container,
                children: [
                  (0, s.jsx)(r.ModalCloseButton, {
                    className: T.closeButton,
                    onClick: l,
                  }),
                  (0, s.jsx)(r.Text, {
                    className: T.questionNumber,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children:
                      v.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format(
                        { index: M + 1 }
                      ),
                  }),
                  (0, s.jsx)(r.Heading, {
                    id: j,
                    className: T.header,
                    variant: "heading-lg/semibold",
                    children:
                      null != x.title && x.title.length > 0
                        ? x.title
                        : v.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                  }),
                  (0, s.jsx)(r.Heading, {
                    className: T.nameHeader,
                    variant: "heading-md/semibold",
                    children:
                      v.default.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER,
                  }),
                  (0, s.jsx)(r.TextInput, {
                    inputRef: y,
                    placeholder:
                      v.default.Messages
                        .ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
                    value: p,
                    onChange: e => C(e),
                    maxLength: h.MAX_PROMPT_OPTION_TITLE_LENGTH,
                    autoFocus: !0,
                  }),
                  (0, s.jsx)(r.InputError, { error: b.title }),
                  (0, s.jsx)(r.TextInput, {
                    className: T.descriptionInput,
                    placeholder:
                      v.default.Messages
                        .ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
                    value: D,
                    onChange: e => S(e),
                    maxLength: h.MAX_PROMPT_OPTION_DESCRIPTION_LENGTH,
                  }),
                  (0, s.jsx)(m.default, { className: T.divider }),
                  (0, s.jsx)(r.Heading, {
                    className: T.rolesHeader,
                    variant: "heading-md/semibold",
                    children:
                      v.default.Messages
                        .ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER,
                  }),
                  (0, s.jsx)(d.default, {
                    guildId: E.id,
                    selectedChannelIds: B,
                    placeholder:
                      v.default.Messages
                        .GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
                    onChange: H,
                    helperText:
                      v.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS,
                    className: T.searchInput,
                  }),
                  (0, s.jsx)(u.default, {
                    guildId: E.id,
                    selectedRoleIds: k,
                    disableEveryoneRole: !0,
                    placeholder:
                      v.default.Messages
                        .GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                    onChange: G,
                    helperText:
                      v.default.Messages
                        .ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT,
                    className: T.searchInput,
                  }),
                  null == b.roles
                    ? null
                    : (0, s.jsx)(r.InputError, { error: b.roles }),
                  (0, s.jsx)(P, { guild: E, roleIds: k }),
                  (0, s.jsx)(m.default, { className: T.divider }),
                  (0, s.jsxs)("div", {
                    className: T.emojiQuestionContainer,
                    children: [
                      (0, s.jsxs)("div", {
                        className: T.emojiQuestionText,
                        children: [
                          (0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children:
                              v.default.Messages
                                .ONBOARDING_PROMPT_OPTION_EMOJI_HEADER,
                          }),
                          (0, s.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              v.default.Messages
                                .ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER,
                          }),
                        ],
                      }),
                      (0, s.jsx)(R.default, {
                        emoji: A,
                        setEmoji: L,
                        channel: g,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(r.ModalFooter, {
                children: (0, s.jsxs)("div", {
                  className: T.footerButtons,
                  children: [
                    (0, s.jsx)("div", {
                      className: T.removeButton,
                      children: (0, s.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.RED,
                        onClick: () => {
                          O(), l();
                        },
                        children: v.default.Messages.REMOVE,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: T.rightButtons,
                      children: [
                        (0, s.jsx)(r.Button, {
                          onClick: l,
                          size: r.Button.Sizes.SMALL,
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          children: v.default.Messages.CANCEL,
                        }),
                        (0, s.jsx)(r.Button, {
                          onClick: () => {
                            var e;
                            let t = {
                                id:
                                  null !== (e = null == _ ? void 0 : _.id) &&
                                  void 0 !== e
                                    ? e
                                    : "".concat(Date.now()),
                                title: p,
                                description: D,
                                channelIds: Array.from(B).sort(),
                                roleIds: Array.from(k).sort(),
                                emoji: null == A ? void 0 : A,
                              },
                              s = f.default.editedOnboardingPrompts,
                              n = (function (e, t, l, s) {
                                let n = {};
                                s.title.length <= 0 &&
                                  (n.title =
                                    v.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                                let a = (0, I.validateOptionRoles)(e, t, l, s);
                                return null != a && (n.roles = a), n;
                              })(E, s, x, t);
                            U(n), o.isEmpty(n) && (a(t), l());
                          },
                          children: v.default.Messages.SAVE,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function P(e) {
        let { guild: t, roleIds: l } = e,
          n = Array.from(l)
            .map(e => t.getRole(e))
            .filter(_.isNotNullish)
            .find(E.isRolePowerful);
        return null == n
          ? null
          : (0, s.jsx)("div", {
              className: T.notice,
              children: (0, s.jsxs)("div", {
                className: T.noticeMessage,
                children: [
                  (0, s.jsx)(O.default, { className: T.noticeIcon }),
                  (0, s.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children:
                      v.default.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
                        permissions: (0, E.getPowerfulPermissionTitles)(
                          t,
                          n
                        ).join(", "),
                      }),
                  }),
                ],
              }),
            });
      }
    },
    869447: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return u;
          },
        });
      var s = l("37983");
      l("884691");
      var n = l("77078"),
        a = l("430568"),
        o = l("86678"),
        i = l("145106"),
        r = l("882641"),
        d = l("958706");
      function u(e) {
        let {
            className: t,
            emojiClassName: l,
            emoji: u,
            setEmoji: c,
            channel: N,
          } = e,
          O = e => (t, l) => {
            var s, n;
            null != t &&
              (null == t.id
                ? c({
                    name:
                      null !== (s = t.optionallyDiverseSequence) && void 0 !== s
                        ? s
                        : "",
                  })
                : c({
                    id: t.id,
                    name:
                      null !== (n = t.originalName) && void 0 !== n
                        ? n
                        : t.name,
                    animated: t.animated,
                  }),
              l && e());
          },
          m =
            null == u || null == u.name
              ? null
              : () => {
                  var e;
                  return (0, s.jsx)(a.default, {
                    className: l,
                    animated: null !== (e = u.animated) && void 0 !== e && e,
                    emojiId: u.id,
                    emojiName: u.name,
                  });
                };
        return (0, s.jsx)(i.default, {
          hasSetEmoji: null != u && null != u.name,
          onClick: () => {
            c(null);
          },
          children: (0, s.jsx)(n.Popout, {
            position: "bottom",
            renderPopout: e => {
              let { closePopout: t } = e;
              return (0, s.jsx)(o.default, {
                closePopout: t,
                onSelectEmoji: O(t),
                pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT,
                channel: N,
              });
            },
            children: (e, l) => {
              let { isShown: n } = l;
              return (0, s.jsx)(r.default, {
                ...e,
                tabIndex: 0,
                active: n,
                className: t,
                renderButtonContents: m,
              });
            },
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=d1d54ab78fe52b0928ff.js.map

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
            return P;
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
        N = l("305961"),
        O = l("476765"),
        m = l("423487"),
        _ = l("898260"),
        E = l("449008"),
        I = l("385334"),
        f = l("330724"),
        R = l("136278"),
        h = l("869447"),
        v = l("653138"),
        T = l("782340"),
        x = l("996983");
      function P(e) {
        let {
            transitionState: t,
            onClose: l,
            onSave: a,
            onDelete: N,
            option: m,
            guild: E,
            prompt: I,
            index: P,
          } = e,
          j = (0, O.useUID)(),
          g = (0, i.useStateFromStores)([c.default], () =>
            c.default.getDefaultChannel(E.id)
          ),
          [A, L] = n.useState(() => {
            var e;
            return null !== (e = null == m ? void 0 : m.emoji) && void 0 !== e
              ? e
              : null;
          }),
          [p, C] = n.useState(() => {
            var e;
            return null !== (e = null == m ? void 0 : m.title) && void 0 !== e
              ? e
              : "";
          }),
          [S, D] = n.useState(() => {
            var e;
            return null !== (e = null == m ? void 0 : m.description) &&
              void 0 !== e
              ? e
              : "";
          }),
          [B, H] = n.useState(() => {
            var e;
            return new Set(
              null !== (e = null == m ? void 0 : m.channelIds) && void 0 !== e
                ? e
                : []
            );
          }),
          [k, G] = n.useState(() => {
            var e;
            return new Set(
              null !== (e = null == m ? void 0 : m.roleIds) && void 0 !== e
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
                className: x.container,
                children: [
                  (0, s.jsx)(r.ModalCloseButton, {
                    className: x.closeButton,
                    onClick: l,
                  }),
                  (0, s.jsx)(r.Text, {
                    className: x.questionNumber,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children:
                      T.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format(
                        { index: P + 1 }
                      ),
                  }),
                  (0, s.jsx)(r.Heading, {
                    id: j,
                    className: x.header,
                    variant: "heading-lg/semibold",
                    children:
                      null != I.title && I.title.length > 0
                        ? I.title
                        : T.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                  }),
                  (0, s.jsx)(r.Heading, {
                    className: x.nameHeader,
                    variant: "heading-md/semibold",
                    children:
                      T.default.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER,
                  }),
                  (0, s.jsx)(r.TextInput, {
                    inputRef: y,
                    placeholder:
                      T.default.Messages
                        .ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
                    value: p,
                    onChange: e => C(e),
                    maxLength: v.MAX_PROMPT_OPTION_TITLE_LENGTH,
                    autoFocus: !0,
                  }),
                  (0, s.jsx)(r.InputError, { error: b.title }),
                  (0, s.jsx)(r.TextInput, {
                    className: x.descriptionInput,
                    placeholder:
                      T.default.Messages
                        .ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
                    value: S,
                    onChange: e => D(e),
                    maxLength: v.MAX_PROMPT_OPTION_DESCRIPTION_LENGTH,
                  }),
                  (0, s.jsx)(_.default, { className: x.divider }),
                  (0, s.jsx)(r.Heading, {
                    className: x.rolesHeader,
                    variant: "heading-md/semibold",
                    children:
                      T.default.Messages
                        .ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER,
                  }),
                  (0, s.jsx)(d.default, {
                    guildId: E.id,
                    selectedChannelIds: B,
                    placeholder:
                      T.default.Messages
                        .GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
                    onChange: H,
                    helperText:
                      T.default.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS,
                    className: x.searchInput,
                  }),
                  (0, s.jsx)(u.default, {
                    guildId: E.id,
                    selectedRoleIds: k,
                    disableEveryoneRole: !0,
                    placeholder:
                      T.default.Messages
                        .GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                    onChange: G,
                    helperText:
                      T.default.Messages
                        .ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT,
                    className: x.searchInput,
                  }),
                  null == b.roles
                    ? null
                    : (0, s.jsx)(r.InputError, { error: b.roles }),
                  (0, s.jsx)(M, { guild: E, roleIds: k }),
                  (0, s.jsx)(_.default, { className: x.divider }),
                  (0, s.jsxs)("div", {
                    className: x.emojiQuestionContainer,
                    children: [
                      (0, s.jsxs)("div", {
                        className: x.emojiQuestionText,
                        children: [
                          (0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children:
                              T.default.Messages
                                .ONBOARDING_PROMPT_OPTION_EMOJI_HEADER,
                          }),
                          (0, s.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              T.default.Messages
                                .ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER,
                          }),
                        ],
                      }),
                      (0, s.jsx)(h.default, {
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
                  className: x.footerButtons,
                  children: [
                    (0, s.jsx)("div", {
                      className: x.removeButton,
                      children: (0, s.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.RED,
                        onClick: () => {
                          N(), l();
                        },
                        children: T.default.Messages.REMOVE,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: x.rightButtons,
                      children: [
                        (0, s.jsx)(r.Button, {
                          onClick: l,
                          size: r.Button.Sizes.SMALL,
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          children: T.default.Messages.CANCEL,
                        }),
                        (0, s.jsx)(r.Button, {
                          onClick: () => {
                            var e;
                            let t = {
                                id:
                                  null !== (e = null == m ? void 0 : m.id) &&
                                  void 0 !== e
                                    ? e
                                    : "".concat(Date.now()),
                                title: p,
                                description: S,
                                channelIds: Array.from(B).sort(),
                                roleIds: Array.from(k).sort(),
                                emoji: null == A ? void 0 : A,
                              },
                              s = R.default.editedOnboardingPrompts,
                              n = (function (e, t, l, s) {
                                let n = {};
                                s.title.length <= 0 &&
                                  (n.title =
                                    T.default.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                                let a = (0, f.validateOptionRoles)(e, t, l, s);
                                return null != a && (n.roles = a), n;
                              })(E, s, I, t);
                            U(n), o.isEmpty(n) && (a(t), l());
                          },
                          children: T.default.Messages.SAVE,
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
      function M(e) {
        let { guild: t, roleIds: l } = e,
          n = (0, i.useStateFromStores)([N.default], () =>
            N.default.getRoles(t.id)
          ),
          a = Array.from(l)
            .map(e => n[e])
            .filter(E.isNotNullish)
            .find(I.isRolePowerful);
        return null == a
          ? null
          : (0, s.jsx)("div", {
              className: x.notice,
              children: (0, s.jsxs)("div", {
                className: x.noticeMessage,
                children: [
                  (0, s.jsx)(m.default, { className: x.noticeIcon }),
                  (0, s.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children:
                      T.default.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
                        permissions: (0, I.getPowerfulPermissionTitles)(
                          t,
                          a
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
//# sourceMappingURL=bf7f4dab14fc9aa1d03a.js.map

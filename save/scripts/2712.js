(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2712"],
  {
    895423: function (e, l, s) {
      "use strict";
      s.r(l),
        s.d(l, {
          default: function () {
            return u;
          },
        });
      var a = s("37983");
      s("884691");
      var t = s("77078"),
        n = s("782340"),
        r = s("840222");
      function u() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(t.Text, {
              className: r.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, a.jsx)(t.HiddenVisually, {
              children: n.default.Messages.REQUIRED,
            }),
          ],
        });
      }
    },
    153774: function (e, l, s) {
      "use strict";
      s.r(l),
        s.d(l, {
          default: function () {
            return N;
          },
        }),
        s("222007");
      var a = s("37983"),
        t = s("884691"),
        n = s("448105"),
        r = s.n(n),
        u = s("65597"),
        o = s("77078"),
        i = s("129092"),
        d = s("26989"),
        E = s("305961"),
        c = s("697218"),
        _ = s("476765"),
        M = s("991170"),
        m = s("895423"),
        I = s("49111"),
        S = s("782340"),
        f = s("371732");
      function N(e) {
        var l, s, n;
        let {
            transitionState: N,
            onClose: g,
            guildId: h,
            welcomeMessage: A,
            onSave: L,
          } = e,
          O = (0, _.useUID)(),
          [T, x] = t.useState({ ...A }),
          G = (0, u.default)([E.default], () => E.default.getGuild(h)),
          v = t.useCallback(
            e => {
              let l = {},
                s = d.default.getMembers(h),
                a = s.filter(s => {
                  var a, t, n;
                  let u = c.default.getUser(s.userId);
                  if (
                    (null != u && (l[s.userId] = u),
                    null == G ||
                      null == u ||
                      ((t = G),
                      (n = u),
                      !(
                        t.isOwner(n) ||
                        M.default.can({
                          permission: I.Permissions.ADMINISTRATOR,
                          context: t,
                          user: n,
                        }) ||
                        (M.default.can({
                          permission: I.Permissions.MANAGE_GUILD,
                          context: t,
                          user: n,
                        }) &&
                          M.default.can({
                            permission: I.Permissions.MANAGE_ROLES,
                            context: t,
                            user: n,
                          }))
                      )))
                  )
                    return !1;
                  let o = ""
                    .concat(null !== (a = s.nick) && void 0 !== a ? a : "", " ")
                    .concat(null == u ? void 0 : u.username);
                  return r(e.toLowerCase(), o.toLowerCase());
                });
              return Promise.resolve(
                a.map(e => {
                  var s, a, t;
                  return {
                    value: e.userId,
                    label:
                      null !==
                        (t =
                          null !== (a = e.nick) && void 0 !== a
                            ? a
                            : null === (s = l[e.userId]) || void 0 === s
                              ? void 0
                              : s.username) && void 0 !== t
                        ? t
                        : "",
                  };
                })
              );
            },
            [h, G]
          ),
          C = t.useCallback(
            e => {
              if (null == h || null == e) return null;
              let l = d.default.getMember(h, e.value);
              if (null == l) return null;
              let s = c.default.getUser(l.userId);
              if (null == s) return null;
              let t = s.getAvatarURL(h, 20);
              return (0, a.jsx)(o.AnimatedAvatar, {
                size: o.AvatarSizes.SIZE_20,
                src: t,
                "aria-hidden": !0,
              });
            },
            [h]
          ),
          R = t.useCallback(
            e => {
              let { value: l } = e;
              x(e => ({ ...e, authorIds: null != l ? [l] : [] }));
            },
            [x]
          ),
          j = t.useCallback(
            e => {
              x(l => ({ ...l, message: null != e ? e : "" }));
            },
            [x]
          ),
          D = t.useCallback(() => {
            L(null), g();
          }, [L, g]),
          k = null !== (l = T.authorIds[0]) && void 0 !== l ? l : "",
          p = (0, u.default)([d.default], () =>
            null != h ? d.default.getMember(h, k) : null
          ),
          b = (0, u.default)([c.default], () =>
            null != p ? c.default.getUser(p.userId) : null
          ),
          B =
            null !==
              (n =
                null !== (s = null == p ? void 0 : p.nick) && void 0 !== s
                  ? s
                  : null == b
                    ? void 0
                    : b.username) && void 0 !== n
              ? n
              : "",
          H = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
              return e.message.length < i.WELCOME_MESSAGE_MIN_LENGTH
                ? S.default.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR_AND_MESSAGE.format(
                    { minLength: i.WELCOME_MESSAGE_MIN_LENGTH }
                  )
                : S.default.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR;
            return e.message.length < i.WELCOME_MESSAGE_MIN_LENGTH
              ? S.default.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_MESSAGE.format(
                  { minLength: i.WELCOME_MESSAGE_MIN_LENGTH }
                )
              : null;
          })(T);
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: N,
          "aria-labelledby": O,
          children: [
            (0, a.jsxs)("div", {
              className: f.container,
              children: [
                (0, a.jsx)(o.ModalCloseButton, {
                  className: f.closeButton,
                  onClick: g,
                }),
                (0, a.jsxs)("div", {
                  className: f.formGroup,
                  children: [
                    (0, a.jsxs)(o.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        S.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_TITLE,
                        (0, a.jsx)(m.default, {}),
                      ],
                    }),
                    (0, a.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        S.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_EXPLAINER,
                    }),
                    (0, a.jsx)(o.SearchableSelect, {
                      value: { value: k, label: B },
                      renderOptionPrefix: C,
                      options: v,
                      onChange: R,
                      filter: !1,
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: f.separator }),
                (0, a.jsxs)("div", {
                  className: f.formGroup,
                  children: [
                    (0, a.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children:
                        S.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_MESSAGE_INPUT_HEADER,
                    }),
                    (0, a.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        S.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION_TIP.format(),
                    }),
                    (0, a.jsx)(o.TextArea, {
                      className: f.welcomeMessageTextInput,
                      placeholder:
                        S.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_PLACEHOLDER,
                      value: T.message,
                      onChange: j,
                      maxLength: i.WELCOME_MESSAGE_MAX_LENGTH,
                    }),
                    null != H
                      ? (0, a.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: H,
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, a.jsx)(o.ModalFooter, {
              children: (0, a.jsxs)("div", {
                className: f.footerButtons,
                children: [
                  (0, a.jsx)("div", {
                    className: f.leftButtons,
                    children: (0, a.jsx)(o.Button, {
                      size: o.Button.Sizes.SMALL,
                      look: o.Button.Looks.LINK,
                      color: o.Button.Colors.RED,
                      onClick: D,
                      children: S.default.Messages.REMOVE,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: f.rightButtons,
                    children: [
                      (0, a.jsx)(o.Button, {
                        onClick: g,
                        size: o.Button.Sizes.SMALL,
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        children: S.default.Messages.CANCEL,
                      }),
                      (0, a.jsx)(o.Button, {
                        disabled: 0 === T.message.length || null != H,
                        onClick: () => {
                          L(T), g();
                        },
                        children: S.default.Messages.SAVE,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=01b1357d547fa29a888d.js.map

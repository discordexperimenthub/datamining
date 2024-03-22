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
      var t = s("37983");
      s("884691");
      var a = s("77078"),
        n = s("782340"),
        r = s("840222");
      function u() {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(a.Text, {
              className: r.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, t.jsx)(a.HiddenVisually, {
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
            return f;
          },
        }),
        s("222007");
      var t = s("37983"),
        a = s("884691"),
        n = s("448105"),
        r = s.n(n),
        u = s("65597"),
        o = s("77078"),
        i = s("129092"),
        d = s("26989"),
        E = s("305961"),
        c = s("697218"),
        _ = s("476765"),
        S = s("991170"),
        M = s("895423"),
        m = s("49111"),
        I = s("782340"),
        N = s("371732");
      function f(e) {
        var l, s, n;
        let {
            transitionState: f,
            onClose: g,
            guildId: h,
            welcomeMessage: A,
            onSave: L,
          } = e,
          O = (0, _.useUID)(),
          [T, x] = a.useState({ ...A }),
          G = (0, u.useStateFromStores)([E.default], () =>
            E.default.getGuild(h)
          ),
          v = a.useCallback(
            e => {
              let l = {},
                s = d.default.getMembers(h),
                t = s.filter(s => {
                  var t, a, n;
                  let u = c.default.getUser(s.userId);
                  if (
                    (null != u && (l[s.userId] = u),
                    null == G ||
                      null == u ||
                      ((a = G),
                      (n = u),
                      !(
                        a.isOwner(n) ||
                        S.can({
                          permission: m.Permissions.ADMINISTRATOR,
                          context: a,
                          user: n,
                        }) ||
                        (S.can({
                          permission: m.Permissions.MANAGE_GUILD,
                          context: a,
                          user: n,
                        }) &&
                          S.can({
                            permission: m.Permissions.MANAGE_ROLES,
                            context: a,
                            user: n,
                          }))
                      )))
                  )
                    return !1;
                  let o = ""
                    .concat(null !== (t = s.nick) && void 0 !== t ? t : "", " ")
                    .concat(null == u ? void 0 : u.username);
                  return r(e.toLowerCase(), o.toLowerCase());
                });
              return Promise.resolve(
                t.map(e => {
                  var s, t, a;
                  return {
                    value: e.userId,
                    label:
                      null !==
                        (a =
                          null !== (t = e.nick) && void 0 !== t
                            ? t
                            : null === (s = l[e.userId]) || void 0 === s
                              ? void 0
                              : s.username) && void 0 !== a
                        ? a
                        : "",
                  };
                })
              );
            },
            [h, G]
          ),
          C = a.useCallback(
            e => {
              if (null == h || null == e) return null;
              let l = d.default.getMember(h, e.value);
              if (null == l) return null;
              let s = c.default.getUser(l.userId);
              if (null == s) return null;
              let a = s.getAvatarURL(h, 20);
              return (0, t.jsx)(o.AnimatedAvatar, {
                size: o.AvatarSizes.SIZE_20,
                src: a,
                "aria-hidden": !0,
              });
            },
            [h]
          ),
          R = a.useCallback(
            e => {
              let { value: l } = e;
              x(e => ({ ...e, authorIds: null != l ? [l] : [] }));
            },
            [x]
          ),
          j = a.useCallback(
            e => {
              x(l => ({ ...l, message: null != e ? e : "" }));
            },
            [x]
          ),
          D = a.useCallback(() => {
            L(null), g();
          }, [L, g]),
          k = null !== (l = T.authorIds[0]) && void 0 !== l ? l : "",
          p = (0, u.useStateFromStores)([d.default], () =>
            null != h ? d.default.getMember(h, k) : null
          ),
          b = (0, u.useStateFromStores)([c.default], () =>
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
                ? I.default.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR_AND_MESSAGE.format(
                    { minLength: i.WELCOME_MESSAGE_MIN_LENGTH }
                  )
                : I.default.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR;
            return e.message.length < i.WELCOME_MESSAGE_MIN_LENGTH
              ? I.default.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_MESSAGE.format(
                  { minLength: i.WELCOME_MESSAGE_MIN_LENGTH }
                )
              : null;
          })(T);
        return (0, t.jsxs)(o.ModalRoot, {
          transitionState: f,
          "aria-labelledby": O,
          children: [
            (0, t.jsxs)("div", {
              className: N.container,
              children: [
                (0, t.jsx)(o.ModalCloseButton, {
                  className: N.closeButton,
                  onClick: g,
                }),
                (0, t.jsxs)("div", {
                  className: N.formGroup,
                  children: [
                    (0, t.jsxs)(o.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        I.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_TITLE,
                        (0, t.jsx)(M.default, {}),
                      ],
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        I.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_EXPLAINER,
                    }),
                    (0, t.jsx)(o.SearchableSelect, {
                      value: { value: k, label: B },
                      renderOptionPrefix: C,
                      options: v,
                      onChange: R,
                      filter: !1,
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: N.separator }),
                (0, t.jsxs)("div", {
                  className: N.formGroup,
                  children: [
                    (0, t.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children:
                        I.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_MESSAGE_INPUT_HEADER,
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children:
                        I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION_TIP.format(),
                    }),
                    (0, t.jsx)(o.TextArea, {
                      className: N.welcomeMessageTextInput,
                      placeholder:
                        I.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_PLACEHOLDER,
                      value: T.message,
                      onChange: j,
                      maxLength: i.WELCOME_MESSAGE_MAX_LENGTH,
                    }),
                    null != H
                      ? (0, t.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: H,
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, t.jsx)(o.ModalFooter, {
              children: (0, t.jsxs)("div", {
                className: N.footerButtons,
                children: [
                  (0, t.jsx)("div", {
                    className: N.leftButtons,
                    children: (0, t.jsx)(o.Button, {
                      size: o.Button.Sizes.SMALL,
                      look: o.Button.Looks.LINK,
                      color: o.Button.Colors.RED,
                      onClick: D,
                      children: I.default.Messages.REMOVE,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: N.rightButtons,
                    children: [
                      (0, t.jsx)(o.Button, {
                        onClick: g,
                        size: o.Button.Sizes.SMALL,
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        children: I.default.Messages.CANCEL,
                      }),
                      (0, t.jsx)(o.Button, {
                        disabled: 0 === T.message.length || null != H,
                        onClick: () => {
                          L(T), g();
                        },
                        children: I.default.Messages.SAVE,
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
//# sourceMappingURL=1f6c943982cf44b77433.js.map

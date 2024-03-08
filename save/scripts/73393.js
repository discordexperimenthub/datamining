(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73393"],
  {
    895423: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("77078"),
        t = a("782340"),
        d = a("840222");
      function i() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(s.Text, {
              className: d.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, n.jsx)(s.HiddenVisually, {
              children: t.default.Messages.REQUIRED,
            }),
          ],
        });
      }
    },
    398296: function (e, l, a) {
      "use strict";
      a.r(l),
        a.d(l, {
          default: function () {
            return S;
          },
        }),
        a("222007");
      var n = a("37983"),
        s = a("884691"),
        t = a("448105"),
        d = a.n(t),
        i = a("65597"),
        r = a("77078"),
        u = a("419830"),
        o = a("129092"),
        c = a("608684"),
        h = a("42203"),
        N = a("923959"),
        E = a("305961"),
        m = a("476765"),
        I = a("507491"),
        C = a("315102"),
        x = a("642807"),
        _ = a("895423"),
        R = a("782340"),
        g = a("371732");
      function v(e, l, a, n) {
        return {
          channelId: e.value,
          title: l,
          description: a,
          emoji: null,
          icon: null != n ? n : null,
        };
      }
      function S(e) {
        var l, a;
        let {
            transitionState: t,
            onClose: S,
            resourceChannel: f,
            guildId: L,
            onSave: j,
            onDelete: T,
            onIconUpload: O,
          } = e,
          G = (0, m.useUID)(),
          [p, A] = s.useState(
            null !== (l = null == f ? void 0 : f.title) && void 0 !== l ? l : ""
          ),
          [D, U] = s.useState(
            null !== (a = null == f ? void 0 : f.description) && void 0 !== a
              ? a
              : ""
          ),
          [B, M] = s.useState(
            (function (e) {
              if (null == e) return null;
              let l = h.default.getChannel(e.channelId);
              return null == l ? null : { value: l.id, label: l.name };
            })(f)
          ),
          b = (0, i.default)([x.default], () => {
            var e;
            return null ===
              (e = x.default.getResourceChannel(
                null == f ? void 0 : f.channelId
              )) || void 0 === e
              ? void 0
              : e.icon;
          }),
          k = (0, i.useStateFromStoresArray)([x.default], () => {
            var e, l;
            let a =
              null !==
                (l =
                  null === (e = x.default.getSettings()) || void 0 === e
                    ? void 0
                    : e.resourceChannels) && void 0 !== l
                ? l
                : [];
            return a.map(e => e.channelId);
          }),
          H = p.length < o.RESOURCE_CHANNEL_TITLE_MIN_LENGTH || null == B,
          P = s.useCallback(() => {
            null != B && !(p.length <= 0) && (j(v(B, p, D, b)), S());
          }, [j, S, p, B, b, D]),
          y = s.useCallback(() => {
            null == T || T(), S();
          }, [T, S]),
          w = s.useCallback(
            e => {
              M(e);
            },
            [M]
          ),
          z = s.useCallback(
            e => {
              let l = N.default.getSelectableChannels(L),
                a = l
                  .filter(
                    l =>
                      (0, o.isChannelValidForResourceChannel)(l.channel) &&
                      !k.includes(l.channel.id) &&
                      d(e, l.channel.name)
                  )
                  .map(e => ({ value: e.channel.id, label: e.channel.name }));
              return Promise.resolve(a);
            },
            [L, k]
          ),
          F = s.useCallback(
            e => {
              if (null == e || null == L) return null;
              let l = h.default.getChannel(e.value),
                a = E.default.getGuild(L);
              if (null == l || null == a) return null;
              let s = (0, u.getChannelIconComponent)(l, a);
              return null == s
                ? null
                : (0, n.jsx)(s, {
                    width: 16,
                    height: 16,
                    className: g.channelIcon,
                  });
            },
            [L]
          ),
          V = s.useCallback(
            e => {
              null != O && null != B && O(v(B, p, D), e);
            },
            [B, p, O, D]
          ),
          X = s.useCallback(
            () =>
              null == b || null == B
                ? null
                : C.default.getResourceChannelIconURL({
                    channelId: B.value,
                    icon: b,
                  }),
            [B, b]
          );
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: t,
          "aria-labelledby": G,
          children: [
            (0, n.jsxs)("div", {
              className: g.containerWithHeader,
              children: [
                (0, n.jsxs)("div", {
                  className: g.splitGroup,
                  children: [
                    (0, n.jsx)("div", {
                      className: g.header,
                      children: (0, n.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children:
                          R.default.Messages
                            .GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EDIT_TITLE,
                      }),
                    }),
                    (0, n.jsx)(r.ModalCloseButton, {
                      className: g.closeButton,
                      onClick: S,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: g.formGroup,
                  children: [
                    (0, n.jsxs)(r.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        R.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL,
                        (0, n.jsx)(_.default, {}),
                      ],
                    }),
                    (0, n.jsx)(r.SearchableSelect, {
                      value: B,
                      renderOptionPrefix: F,
                      options: z,
                      onChange: w,
                    }),
                    (0, n.jsx)(r.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                        R.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EXPLAINER,
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: g.separator }),
                (0, n.jsxs)("div", {
                  className: g.formGroup,
                  children: [
                    (0, n.jsxs)(r.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        R.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE,
                        (0, n.jsx)(_.default, {}),
                      ],
                    }),
                    (0, n.jsx)(r.TextInput, {
                      value: p,
                      onChange: A,
                      placeholder:
                        R.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE_PLACEHOLDER,
                      maxLength: o.RESOURCE_CHANNEL_TITLE_MAX_LENGTH,
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: g.separator }),
                (0, n.jsxs)("div", {
                  className: g.formGroup,
                  children: [
                    (0, n.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children:
                        R.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION,
                    }),
                    (0, n.jsx)(r.TextArea, {
                      value: D,
                      onChange: U,
                      placeholder:
                        R.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION_PLACEHOLDER,
                      maxLength: o.RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH,
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: g.separator }),
                (0, n.jsxs)("div", {
                  className: g.splitGroup,
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(r.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          children:
                            R.default.Messages
                              .GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD,
                        }),
                        (0, n.jsx)(r.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children:
                            R.default.Messages
                              .GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD_EXPLAINER,
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)(c.default, {
                        className: g.uploader,
                        imageClassName: g.uploadImage,
                        image: b,
                        makeURL: X,
                        icon: (0, n.jsx)(I.default, { height: 24, width: 24 }),
                        hideSize: !0,
                        onChange: V,
                        iconClassName: g.uploadImageIcon,
                        showIcon: null == b,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(r.ModalFooter, {
              children: (0, n.jsxs)("div", {
                className: g.footerButtons,
                children: [
                  null != f
                    ? (0, n.jsx)("div", {
                        className: g.removeButton,
                        children: (0, n.jsx)(r.Button, {
                          size: r.Button.Sizes.SMALL,
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.RED,
                          onClick: y,
                          children: R.default.Messages.REMOVE,
                        }),
                      })
                    : (0, n.jsx)("div", {}),
                  (0, n.jsxs)("div", {
                    className: g.rightButtons,
                    children: [
                      (0, n.jsx)(r.Button, {
                        onClick: S,
                        size: r.Button.Sizes.SMALL,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        children: R.default.Messages.CANCEL,
                      }),
                      (0, n.jsx)(r.Button, {
                        disabled: H,
                        onClick: P,
                        children: R.default.Messages.SAVE,
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
//# sourceMappingURL=eaef91dc00120e795ea0.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37138"],
  {
    466564: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          default: function () {
            return y;
          },
        }),
        n("424973"),
        n("222007"),
        n("834022");
      var a = n("37983"),
        t = n("884691"),
        s = n("448105"),
        i = n.n(s),
        o = n("65597"),
        u = n("77078"),
        d = n("430568"),
        r = n("419830"),
        c = n("86678"),
        N = n("129092"),
        I = n("694187"),
        m = n("42203"),
        _ = n("923959"),
        h = n("305961"),
        T = n("476765"),
        v = n("46829"),
        E = n("818643"),
        x = n("987772"),
        A = n("228220"),
        p = n("507491"),
        f = n("315102"),
        O = n("449008"),
        C = n("991170"),
        g = n("642807"),
        j = n("895423"),
        M = n("49111"),
        S = n("958706"),
        G = n("782340"),
        L = n("371732");
      function R(e, l) {
        switch (e) {
          case N.NewMemberActionTypes.VIEW:
            return C.canEveryoneRole(M.Permissions.VIEW_CHANNEL, l);
          case N.NewMemberActionTypes.CHAT:
            if (M.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type))
              return (
                C.canEveryoneRole(M.Permissions.SEND_MESSAGES_IN_THREADS, l) ||
                C.canEveryoneRole(M.Permissions.SEND_MESSAGES, l)
              );
            return C.canEveryoneRole(M.Permissions.SEND_MESSAGES, l);
          default:
            return !1;
        }
      }
      function D() {
        return {
          channelId: [],
          title: [],
          description: [],
          actionType: [],
          emoji: [],
          icon: [],
        };
      }
      function b(e) {
        let l = D(),
          n = m.default.getChannel(e.channelId);
        return (
          (null == e.title ||
            e.title.length < N.NEW_MEMBER_ACTION_TITLE_MIN_LENGTH) &&
            l.title.push(
              G.default.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TITLE_REQUIRED.format(
                { minLength: N.NEW_MEMBER_ACTION_TITLE_MIN_LENGTH }
              )
            ),
          null != e.actionType &&
            null != n &&
            !R(e.actionType, n) &&
            l.actionType.push(
              (function (e) {
                switch (e) {
                  case N.NewMemberActionTypes.VIEW:
                    return G.default.Messages
                      .NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_VIEW_INVALID_FOR_CHANNEL;
                  case N.NewMemberActionTypes.CHAT:
                    return G.default.Messages
                      .NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_CHAT_INVALID_FOR_CHANNEL;
                  default:
                    (0, O.assertNever)(e);
                }
              })(e.actionType)
            ),
          l
        );
      }
      function y(e) {
        var l, n, s, O, C, y, B, U, k;
        let {
            transitionState: H,
            onClose: w,
            guildId: P,
            action: V,
            onSave: F,
            onDelete: W,
            onIconUpload: z,
          } = e,
          Y = (0, T.useUID)(),
          [K, X] = t.useState(
            (function (e) {
              if (null == e) return null;
              let l = m.default.getChannel(e.channelId);
              return null == l ? null : { value: e.channelId, label: l.name };
            })(V)
          ),
          Q = (0, o.useStateFromStores)([m.default], () =>
            m.default.getChannel(null == K ? void 0 : K.value)
          ),
          q = (null == Q ? void 0 : Q.isMediaChannel()) === !0,
          J = t.useMemo(
            () => [
              {
                value: N.NewMemberActionTypes.VIEW,
                name: G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_VIEW,
              },
              {
                value: N.NewMemberActionTypes.CHAT,
                name:
                  (null == Q ? void 0 : Q.type) === M.ChannelTypes.GUILD_FORUM
                    ? q
                      ? G.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_MEDIA_CHANNEL
                      : G.default.Messages
                          .GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_FORUM
                    : G.default.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK,
              },
            ],
            [null == Q ? void 0 : Q.type, q]
          ),
          [Z, $] = t.useState(D()),
          [ee, el] = t.useState(
            null !== (l = null == V ? void 0 : V.title) && void 0 !== l ? l : ""
          );
        let [en, ea] = t.useState(
            ((C = J),
            null == (y = V)
              ? null
              : null !== (B = C.find(e => e.value === y.actionType)) &&
                  void 0 !== B
                ? B
                : null)
          ),
          [et, es] = t.useState(
            null !== (n = null == V ? void 0 : V.emoji) && void 0 !== n
              ? n
              : null
          ),
          ei = (0, o.useStateFromStores)([g.default], () => {
            var e;
            return null ===
              (e = g.default.getNewMemberAction(
                null == V ? void 0 : V.channelId
              )) || void 0 === e
              ? void 0
              : e.icon;
          }),
          eo = (0, o.useStateFromStores)([g.default], () =>
            g.default.getNewMemberActionIconData(
              null == V ? void 0 : V.channelId
            )
          ),
          eu = null == ee || 0 === ee.length || null == en || null == K,
          ed = Object.values(Z).flat().length > 0,
          er = t.useCallback(() => {
            if (null == K || null == en || ee.length <= 0) return;
            let e = {
              channelId: K.value,
              title: ee,
              description: "",
              actionType: en.value,
              emoji: null != et ? et : null,
              icon: null != ei ? ei : null,
            };
            F(e, eo), w();
          }, [F, w, ee, en, K, et, ei, eo]),
          ec = t.useCallback(() => {
            null == W || W(), w();
          }, [W, w]),
          eN = t.useCallback(
            e => {
              el(e),
                $(
                  b({
                    channelId: null == K ? void 0 : K.value,
                    title: e,
                    description: "",
                    actionType: null == en ? void 0 : en.value,
                    emoji: null != et ? et : void 0,
                  })
                );
            },
            [el, $, K, en, et]
          ),
          eI = t.useCallback(
            e => {
              X(e),
                $(
                  b({
                    channelId: null == e ? void 0 : e.value,
                    title: ee,
                    description: "",
                    actionType: null == en ? void 0 : en.value,
                    emoji: null != et ? et : void 0,
                  })
                );
            },
            [X, $, ee, en, et]
          ),
          em = t.useCallback(
            e => {
              ea(e),
                $(
                  b({
                    channelId: null == K ? void 0 : K.value,
                    title: ee,
                    description: "",
                    actionType: null == e ? void 0 : e.value,
                    emoji: null != et ? et : void 0,
                  })
                );
            },
            [ea, $, K, ee, et]
          ),
          e_ = t.useCallback(
            e => {
              let l = _.default.getSelectableChannels(P),
                n = l
                  .filter(
                    l =>
                      (0, N.isChannelValidForNewMemberAction)(l.channel) &&
                      i(e, l.channel.name)
                  )
                  .map(e => ({ value: e.channel.id, label: e.channel.name }));
              return Promise.resolve(n);
            },
            [P]
          ),
          eh = t.useCallback(
            e => {
              if (null == e || null == P) return null;
              let l = m.default.getChannel(e.value),
                n = h.default.getGuild(P);
              if (null == l || null == n) return null;
              let t = (0, r.getChannelIconComponent)(l, n);
              return null == t
                ? null
                : (0, a.jsx)(t, {
                    width: 16,
                    height: 16,
                    className: L.channelIcon,
                  });
            },
            [P]
          ),
          eT = t.useCallback(
            function (e) {
              let l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              if (null == z || null == K || null == en) return;
              let n = {
                channelId: K.value,
                title: ee,
                description: "",
                actionType: en.value,
                emoji: l,
                icon: null != ei ? ei : null,
              };
              es(l), z(n, e);
            },
            [K, ee, z, en, ei]
          ),
          ev = t.useCallback(
            () =>
              null == K
                ? null
                : null != ei
                  ? f.default.getNewMemberActionIconURL({
                      channelId: K.value,
                      icon: ei,
                    })
                  : null != eo
                    ? eo
                    : null,
            [K, ei, eo]
          ),
          eE = ev(),
          ex = e => (l, n) => {
            var a, t;
            if (null == l) return;
            let s = null;
            es(
              (s =
                null == l.id
                  ? {
                      id: null,
                      name:
                        null !== (a = l.optionallyDiverseSequence) &&
                        void 0 !== a
                          ? a
                          : "",
                      animated: !1,
                    }
                  : {
                      id: l.id,
                      name:
                        null !== (t = l.originalName) && void 0 !== t
                          ? t
                          : l.name,
                      animated: l.animated,
                    })
            ),
              eT(null, s),
              n && e();
          },
          eA = null;
        return (
          (eA =
            null != eE
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("img", {
                      src: eE,
                      alt: "",
                      "aria-hidden": !0,
                      className: L.image,
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)("div", {
                      className: L.imageOverlay,
                      children: (0, a.jsx)(x.default, {
                        width: 24,
                        height: 24,
                      }),
                    }),
                  ],
                })
              : null != et
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(d.default, {
                        animated:
                          null !== (s = et.animated) && void 0 !== s && s,
                        emojiId: et.id,
                        emojiName: et.name,
                      }),
                      (0, a.jsx)("div", {
                        className: L.imageOverlay,
                        children: (0, a.jsx)(x.default, {
                          width: 24,
                          height: 24,
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(E.default, { width: 24, height: 24 })),
          (0, a.jsxs)(u.ModalRoot, {
            transitionState: H,
            "aria-labelledby": Y,
            children: [
              (0, a.jsxs)("div", {
                className: L.container,
                children: [
                  (0, a.jsx)(u.ModalCloseButton, {
                    className: L.closeButton,
                    onClick: w,
                  }),
                  (0, a.jsxs)("div", {
                    className: L.formGroup,
                    children: [
                      (0, a.jsxs)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          G.default.Messages
                            .GUILD_SETTINGS_ONBOARDING_ACTION_TITLE,
                          (0, a.jsx)(j.default, {}),
                        ],
                      }),
                      (0, a.jsx)(u.TextInput, {
                        value: ee,
                        error:
                          (null !== (O = null == ee ? void 0 : ee.length) &&
                          void 0 !== O
                            ? O
                            : 0) > 0
                            ? Z.title.join(", ")
                            : null,
                        onChange: eN,
                        placeholder:
                          G.default.Messages
                            .GUILD_SETTINGS_ONBOARDING_ACTION_TITLE_PLACEHOLDER,
                        maxLength: N.NEW_MEMBER_ACTION_TITLE_MAX_LENGTH,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: L.separator }),
                  (0, a.jsxs)("div", {
                    className: L.formGroup,
                    children: [
                      (0, a.jsxs)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          G.default.Messages
                            .GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL,
                          (0, a.jsx)(j.default, {}),
                        ],
                      }),
                      (0, a.jsx)(u.SearchableSelect, {
                        value: K,
                        renderOptionPrefix: eh,
                        options: e_,
                        onChange: eI,
                      }),
                      (0, a.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children:
                          G.default.Messages
                            .GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL_EXPLAINER,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: L.separator }),
                  (0, a.jsxs)("div", {
                    className: L.splitGroup,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children:
                              G.default.Messages
                                .GUILD_SETTINGS_ONBOARDING_ACTION_ICON,
                          }),
                          (0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children:
                              G.default.Messages
                                .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EXPLAINER,
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: L.iconUploadContainer,
                        children: (0, a.jsx)(u.Popout, {
                          position: "bottom",
                          renderPopout: e => {
                            let l = e.closePopout,
                              n = (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(I.default, {
                                    onChange: e => {
                                      eT(e), l();
                                    },
                                    tabIndex: 0,
                                  }),
                                  (0, a.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children:
                                      G.default.Messages
                                        .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_UPLOAD,
                                  }),
                                ],
                              }),
                              t = (0, a.jsx)(u.Popout, {
                                position: "top",
                                renderPopout: e => {
                                  let { closePopout: n } = e;
                                  return (0, a.jsx)(c.default, {
                                    closePopout: () => {
                                      n(), l();
                                    },
                                    onSelectEmoji: ex(() => {
                                      n(), l();
                                    }),
                                    pickerIntention:
                                      S.EmojiIntention.COMMUNITY_CONTENT,
                                    channel: Q,
                                  });
                                },
                                children: e =>
                                  (0, a.jsx)(u.Text, {
                                    ...e,
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children:
                                      G.default.Messages
                                        .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EMOJI,
                                  }),
                              });
                            return (0, a.jsxs)(u.Menu, {
                              navId: "set-image-for-action",
                              "aria-label": "upload",
                              onClose: () => !1,
                              onSelect: () => !1,
                              children: [
                                (0, a.jsx)(u.MenuItem, {
                                  id: "emoji",
                                  label: t,
                                  icon: v.default,
                                }),
                                (0, a.jsx)(u.MenuItem, {
                                  className: L.uploadMenuItem,
                                  id: "upload",
                                  label: n,
                                  icon: p.default,
                                }),
                                (0, a.jsx)(u.MenuItem, {
                                  id: "clear",
                                  color: "danger",
                                  label:
                                    G.default.Messages
                                      .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_REMOVE,
                                  icon: A.default,
                                  action: () => {
                                    eT(null);
                                  },
                                }),
                              ],
                            });
                          },
                          children: e =>
                            (0, a.jsx)("div", {
                              ...e,
                              className: L.iconUpload,
                              children: eA,
                            }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: L.separator }),
                  (0, a.jsxs)("div", {
                    className: L.formGroup,
                    children: [
                      (0, a.jsxs)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          G.default.Messages
                            .GUILD_SETTINGS_ONBOARDING_ACTION_TYPE,
                          (0, a.jsx)(j.default, {}),
                        ],
                      }),
                      (0, a.jsx)(u.RadioGroup, {
                        withTransparentBackground: !0,
                        size: u.RadioGroup.Sizes.NONE,
                        value: null == en ? void 0 : en.value,
                        onChange: em,
                        options:
                          ((U = J),
                          null == (k = Q)
                            ? U
                            : U.map(e => ({ ...e, disabled: !R(e.value, k) }))),
                      }),
                      null != en && Z.actionType.length > 0
                        ? Z.actionType.map(e =>
                            (0, a.jsx)(
                              u.Text,
                              {
                                variant: "text-xs/normal",
                                color: "text-danger",
                                children: e,
                              },
                              e
                            )
                          )
                        : null,
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(u.ModalFooter, {
                children: (0, a.jsxs)("div", {
                  className: L.footerButtons,
                  children: [
                    null != V
                      ? (0, a.jsx)("div", {
                          className: L.removeButton,
                          children: (0, a.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.RED,
                            onClick: ec,
                            children: G.default.Messages.REMOVE,
                          }),
                        })
                      : (0, a.jsx)("div", {}),
                    (0, a.jsxs)("div", {
                      className: L.rightButtons,
                      children: [
                        (0, a.jsx)(u.Button, {
                          onClick: w,
                          size: u.Button.Sizes.SMALL,
                          look: u.Button.Looks.LINK,
                          color: u.Button.Colors.PRIMARY,
                          children: G.default.Messages.CANCEL,
                        }),
                        (0, a.jsx)(u.Button, {
                          disabled: eu || ed,
                          onClick: er,
                          children: G.default.Messages.SAVE,
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
    },
    895423: function (e, l, n) {
      "use strict";
      n.r(l),
        n.d(l, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var t = n("77078"),
        s = n("782340"),
        i = n("840222");
      function o() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(t.Text, {
              className: i.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, a.jsx)(t.HiddenVisually, {
              children: s.default.Messages.REQUIRED,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=b85d7b215ddd6619f891.js.map

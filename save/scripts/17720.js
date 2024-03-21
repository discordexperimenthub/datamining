(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17720"],
  {
    341072: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return H;
          },
        }),
        s("424973"),
        s("222007"),
        s("506083");
      var t = s("37983"),
        l = s("884691"),
        n = s("759843"),
        i = s("446674"),
        d = s("627929"),
        o = s("77078"),
        u = s("581354"),
        r = s("798609"),
        E = s("680986"),
        c = s("81732"),
        N = s("690563"),
        C = s("178225"),
        _ = s("233069"),
        p = s("245997"),
        h = s("305961"),
        T = s("145131"),
        f = s("476765"),
        A = s("461380"),
        m = s("593195"),
        I = s("991497"),
        L = s("990745"),
        M = s("368121"),
        x = s("228427"),
        v = s("404008"),
        g = s("991170"),
        b = s("840707"),
        y = s("49111"),
        D = s("843455"),
        j = s("782340"),
        R = s("552780");
      function H(e) {
        var a, s;
        let { guildId: H, transitionState: O, onSubmit: S, onClose: G } = e,
          P = (0, f.useUID)(),
          F = (0, f.useUID)(),
          U = (0, f.useUID)(),
          B = (0, f.useUID)(),
          [k, Y] = l.useState(y.NULL_STRING_CHANNEL_ID),
          [V, w] = l.useState(y.ChannelTypes.GUILD_TEXT),
          [X, W] = l.useState(""),
          [K, z] = l.useState(!1),
          J = (0, i.useStateFromStores)(
            [h.default],
            () => h.default.getGuild(H),
            [H]
          ),
          q = (0, C.useGuildEligibleForStageChannels)(H),
          Q = (0, E.useCanCreateForumChannel)(H),
          Z = (0, N.useGuildEligibleForMediaChannels)(J),
          $ = l.useMemo(
            () =>
              (function (e) {
                let {
                    canCreateStageChannel: a,
                    canCreateForumChannel: s,
                    canCreateMediaChannel: l,
                  } = e,
                  n = [
                    {
                      icon: m.default,
                      label: j.default.Messages.TEXT_CHANNEL_TYPE,
                      value: y.ChannelTypes.GUILD_TEXT,
                      description:
                        j.default.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION,
                    },
                    {
                      icon: M.default,
                      label: j.default.Messages.VOICE_CHANNEL_TYPE,
                      value: y.ChannelTypes.GUILD_VOICE,
                      description:
                        j.default.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION,
                    },
                  ];
                return (
                  a &&
                    n.push({
                      icon: x.default,
                      label: j.default.Messages.STAGE_VOICE_CHANNEL_TYPE,
                      value: y.ChannelTypes.GUILD_STAGE_VOICE,
                      description:
                        j.default.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION,
                    }),
                  s &&
                    (n.push({
                      icon: I.default,
                      label: j.default.Messages.FORUM_CHANNEL_TYPE,
                      value: y.ChannelTypes.GUILD_FORUM,
                      description: j.default.Messages.FORUM_CHANNEL_DESCRIPTION,
                    }),
                    l &&
                      n.push({
                        icon: L.default,
                        label: j.default.Messages.MEDIA_CHANNEL_TYPE,
                        value: y.ChannelTypes.GUILD_MEDIA,
                        description:
                          j.default.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                        isBeta: !0,
                      })),
                  n.map(e => {
                    let {
                      icon: a,
                      label: s,
                      value: l,
                      description: n,
                      isBeta: i,
                    } = e;
                    return {
                      name: (0, t.jsxs)("div", {
                        className: R.channelOptionWrapper,
                        children: [
                          (0, t.jsx)(a, { className: R.icon }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsxs)(o.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  s,
                                  (0, t.jsx)(u.ChannelTypeBadge, { isBeta: i }),
                                ],
                              }),
                              (0, t.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      }),
                      value: l,
                      channelIcon: a,
                    };
                  })
                );
              })({
                canCreateStageChannel: q,
                canCreateForumChannel: Q,
                canCreateMediaChannel: Z,
              }),
            [q, Q, Z]
          ),
          ee = (0, i.useStateFromStores)(
            [p.default],
            () => p.default.getCategories(H)._categories,
            [H]
          ),
          ea = l.useMemo(
            () =>
              ee.map(e => {
                let { channel: a } = e;
                return { value: a.id, label: a.name };
              }),
            [ee]
          ),
          es =
            null !==
              (s =
                null === (a = $.find(e => e.value === V)) || void 0 === a
                  ? void 0
                  : a.channelIcon) && void 0 !== s
              ? s
              : D.NOOP_NULL,
          et = "" !== X;
        return (0, t.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !et)) return;
            z(!0);
            let a = {
              type: V,
              name: X,
              parent_id: "null" !== k ? k : void 0,
              permission_overwrites: [
                {
                  id: H,
                  type: r.PermissionOverwriteType.ROLE,
                  allow: g.NONE,
                  deny: y.Permissions.VIEW_CHANNEL,
                },
              ],
            };
            b.default
              .post({
                url: y.Endpoints.GUILD_CHANNELS(H),
                body: a,
                oldFormErrors: !0,
                trackedActionData: {
                  event: n.NetworkActionNames.CHANNEL_CREATE,
                  properties: e => {
                    var a, s;
                    return (0, d.exact)({
                      is_private: !0,
                      channel_id:
                        null == e
                          ? void 0
                          : null === (a = e.body) || void 0 === a
                            ? void 0
                            : a.id,
                      channel_type:
                        null == e
                          ? void 0
                          : null === (s = e.body) || void 0 === s
                            ? void 0
                            : s.type,
                    });
                  },
                },
              })
              .then(
                e => {
                  c.default.checkGuildTemplateDirty(H), S(e.body.id), G();
                },
                e => {}
              )
              .finally(() => {
                z(!1);
              });
          },
          children: (0, t.jsxs)(o.ModalRoot, {
            transitionState: O,
            "aria-labelledby": P,
            children: [
              (0, t.jsxs)(o.ModalHeader, {
                children: [
                  (0, t.jsx)(o.Heading, {
                    id: P,
                    variant: "heading-md/semibold",
                    children: j.default.Messages.CREATE_CHANNEL,
                  }),
                  (0, t.jsx)(o.ModalCloseButton, {
                    className: R.closeButton,
                    onClick: G,
                  }),
                ],
              }),
              (0, t.jsxs)(o.ModalContent, {
                className: R.modalContent,
                children: [
                  (0, t.jsx)(o.FormItem, {
                    title: j.default.Messages.CATEGORY,
                    titleId: F,
                    children: (0, t.jsx)(o.SingleSelect, {
                      placeholder:
                        j.default.Messages
                          .CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                      value: k,
                      options: ea,
                      onChange: e => Y(e),
                      "aria-labelledby": F,
                    }),
                  }),
                  (0, t.jsx)("div", { className: R.spacer }),
                  (0, t.jsx)(o.FormItem, {
                    title: j.default.Messages.CHANNEL_TYPE,
                    titleId: U,
                    children: (0, t.jsx)(o.RadioGroup, {
                      options: $,
                      value: V,
                      onChange: e => {
                        let { value: a } = e;
                        return w(a);
                      },
                      "aria-labelledby": U,
                    }),
                  }),
                  (0, t.jsx)("div", { className: R.spacer }),
                  (0, t.jsx)(o.FormItem, {
                    title: j.default.Messages.FORM_LABEL_CHANNEL_NAME,
                    titleId: B,
                    children: (0, t.jsx)(o.TextInput, {
                      value: X,
                      onChange: function (e) {
                        (0, _.isGuildTextChannelType)(V) &&
                          (e = (0, v.sanitizeGuildTextChannelName)(e)),
                          W(e);
                      },
                      maxLength: y.MAX_CHANNEL_NAME_LENGTH,
                      placeholder: j.default.Messages.CHANNEL_NAME_PLACEHOLDER,
                      className: R.inputWrapper,
                      inputClassName: R.inputInner,
                      prefixElement: (0, t.jsx)(es, {
                        className: R.inputPrefix,
                        "aria-hidden": !0,
                      }),
                      "aria-labelledby": B,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)(o.ModalFooter, {
                justify: T.default.Justify.BETWEEN,
                children: [
                  (0, t.jsx)(o.Button, {
                    type: "submit",
                    submitting: K,
                    disabled: !et,
                    children: j.default.Messages.SAVE,
                  }),
                  (0, t.jsxs)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    className: R.backButton,
                    innerClassName: R.backButtonInner,
                    onClick: G,
                    children: [
                      (0, t.jsx)(A.default, {
                        direction: A.default.Directions.LEFT,
                      }),
                      j.default.Messages.BACK,
                    ],
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
//# sourceMappingURL=6d77ee0b6cf4fed5dce2.js.map

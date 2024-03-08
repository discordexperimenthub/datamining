(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64263"],
  {
    547831: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var a = s("884691"),
        l = s("446674"),
        i = s("305961"),
        n = s("256941");
      function r(e) {
        let t = (0, l.useStateFromStores)([i.default], () =>
            i.default.getRoles(e)
          ),
          s = (0, l.useStateFromStores)([n.default], () =>
            n.default.getSubscriptionRoles(e)
          );
        return a.useMemo(
          () => Object.values(t).filter(e => s.has(e.id)),
          [t, s]
        );
      }
    },
    777924: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          CreateEmojiWithRolesModal: function () {
            return N;
          },
          UpdateEmojiRolesModal: function () {
            return C;
          },
        }),
        s("222007");
      var a = s("37983"),
        l = s("884691"),
        i = s("414456"),
        n = s.n(i),
        r = s("917351"),
        d = s.n(r),
        o = s("748820"),
        u = s("77078"),
        c = s("150021"),
        h = s("162426"),
        _ = s("341595"),
        S = s("594098"),
        E = s("191814"),
        m = s("476765"),
        x = s("956089"),
        f = s("599110"),
        j = s("315102"),
        L = s("837008"),
        M = s("547831"),
        R = s("49111"),
        I = s("782340"),
        O = s("903058");
      let g = e => {
        let {
          className: t,
          onChange: s,
          textVariant: l = "text-md/normal",
          label: i,
          value: r,
          isArchived: d = !1,
        } = e;
        return (0, a.jsx)(u.Checkbox, {
          size: 24,
          className: n(O.checklistRow, t),
          value: r,
          onChange: s,
          type: u.Checkbox.Types.INVERTED,
          children: (0, a.jsxs)("div", {
            className: O.checklistLabel,
            children: [
              (0, a.jsx)(u.Text, {
                color: "interactive-active",
                variant: l,
                children: i,
              }),
              d &&
                (0, a.jsx)(x.TextBadge, {
                  text: I.default.Messages
                    .GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
                }),
            ],
          }),
        });
      };
      function A(e) {
        let {
            transitionState: t,
            onClose: s,
            initialRoleIds: i = [],
            listingChoices: n,
            emojiUrl: r,
            saving: o,
            onSave: c,
          } = e,
          h = (0, m.useUID)(),
          [_, x] = l.useState(() => new Set(i)),
          f = l.useMemo(
            () =>
              d.isEqual(
                _,
                new Set(
                  n.map(e => {
                    let { role_id: t } = e;
                    return t;
                  })
                )
              ),
            [n, _]
          ),
          j = _.size > 0,
          L = e =>
            x(t => {
              let s = new Set(t);
              return t.has(e) ? s.delete(e) : s.add(e), s;
            }),
          M = () => {
            c(Array.from(_), s);
          };
        return (0, a.jsxs)(u.ModalRoot, {
          transitionState: t,
          "aria-labelledby": h,
          children: [
            (0, a.jsxs)(u.ModalHeader, {
              separator: !1,
              children: [
                (0, a.jsxs)("div", {
                  className: O.headerContent,
                  children: [
                    (0, a.jsx)(S.default, {
                      src: r,
                      width: 40,
                      height: 40,
                      alt: "",
                    }),
                    (0, a.jsx)(E.default, { size: 16, horizontal: !0 }),
                    (0, a.jsxs)("div", {
                      className: O.headerText,
                      children: [
                        (0, a.jsx)(u.Heading, {
                          id: h,
                          variant: "heading-md/semibold",
                          children:
                            I.default.Messages
                              .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_HEADER,
                        }),
                        (0, a.jsx)(E.default, { size: 2 }),
                        (0, a.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            I.default.Messages
                              .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DESCRIPTION,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(u.ModalCloseButton, {
                  className: O.closeButton,
                  onClick: s,
                }),
              ],
            }),
            (0, a.jsx)("div", { className: O.seperator }),
            (0, a.jsx)(u.ModalContent, {
              className: O.modalContent,
              children: (0, a.jsxs)("div", {
                className: O.checklistContainer,
                children: [
                  (0, a.jsx)(
                    g,
                    {
                      className: O.selectAllCheckbox,
                      label:
                        I.default.Messages
                          .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_SELECT_ALL_LABEL,
                      textVariant: "text-md/semibold",
                      value: f,
                      onChange: () => {
                        f
                          ? x(new Set())
                          : x(
                              new Set(
                                n.map(e => {
                                  let { role_id: t } = e;
                                  return t;
                                })
                              )
                            );
                      },
                    },
                    "allSubscriptionRoles"
                  ),
                  n.map((e, t) =>
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        0 !== t &&
                          (0, a.jsx)("div", { className: O.seperator }),
                        (0, a.jsx)(
                          g,
                          {
                            onChange: () => L(e.role_id),
                            value: _.has(e.role_id),
                            label: e.name,
                            isArchived: e.archived,
                          },
                          e.role_id
                        ),
                      ],
                    })
                  ),
                ],
              }),
            }),
            (0, a.jsx)(u.ModalFooter, {
              children: (0, a.jsx)(u.Tooltip, {
                shouldShow: !j,
                text: I.default.Messages
                  .GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_NEEDS_ONE_ROLE,
                children: e =>
                  (0, a.jsx)(u.Button, {
                    ...e,
                    "aria-label": I.default.Messages.SAVE,
                    disabled: !j,
                    submitting: o,
                    onClick: M,
                    children: I.default.Messages.SAVE,
                  }),
              }),
            }),
          ],
        });
      }
      function N(e) {
        let { guildId: t, data: s, file: i, ...n } = e,
          [r, d] = l.useState(!1),
          u = async (e, a) => {
            try {
              d(!0);
              let l = (0, o.v4)();
              f.default.track(R.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
                guild_id: t,
                upload_id: l,
              }),
                await (0, _.uploadEmojiFile)({
                  guildId: t,
                  uploadId: l,
                  data: s,
                  file: i,
                  roles: e,
                }),
                a();
            } catch (e) {
            } finally {
              d(!1);
            }
          },
          c = (0, L.useSubscriptionListingsForGuild)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0,
          });
        return (0, a.jsx)(A, {
          emojiUrl: s,
          onSave: u,
          saving: r,
          listingChoices: c,
          ...n,
        });
      }
      function C(e) {
        let { emoji: t, guildId: s, ...i } = e,
          n = j.default.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 40,
          }),
          [r, { loading: d }] = (0, h.default)(c.updateEmoji),
          o = async (e, a) => {
            let l = await r({ guildId: s, emojiId: t.id, roles: e });
            null != l && a();
          },
          u = (0, L.useSubscriptionListingsForGuild)(s, {
            includeSoftDeleted: !0,
          });
        u.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
        let _ = (0, M.default)(s),
          S = l.useMemo(() => {
            let e = new Set(
              _.map(e => {
                let { id: t } = e;
                return t;
              })
            );
            return t.roles.filter(t => e.has(t));
          }, [t.roles, _]);
        return (0, a.jsx)(A, {
          emojiUrl: n,
          onSave: o,
          initialRoleIds: S,
          saving: d,
          listingChoices: u,
          ...i,
        });
      }
    },
  },
]);
//# sourceMappingURL=b4ca5f7fc9df3f6a3aa7.js.map

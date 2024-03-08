(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31707"],
  {
    270111: function (e, t, a) {
      "use strict";
      e.exports = a.p + "8b02d737af060c3da754.svg";
    },
    183886: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a("393414"),
        s = a("49111");
      function l() {
        let e = (0, n.getHistory)();
        e.length > 0 ? e.goBack() : (0, n.transitionTo)(s.Routes.ME);
      }
    },
    444752: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("77078"),
        l = a("476263"),
        o = a("782340"),
        i = a("874426"),
        r = a("270111"),
        u = e => {
          let {
            headerId: t,
            reapplyText: a,
            onReapply: u,
            confirmText: d,
            onConfirm: c,
            rejectionReason: f = null,
            guild: E = null,
          } = e;
          return (0, n.jsxs)("div", {
            className: i.confirmation,
            children: [
              (0, n.jsxs)("div", {
                className: i.confirmationContent,
                children: [
                  null !== E
                    ? (0, n.jsx)(l.default, {
                        size: l.default.Sizes.LARGER,
                        guild: E,
                        className: i.guildIcon,
                      })
                    : (0, n.jsx)("img", {
                        alt: o.default.Messages
                          .MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
                        src: r,
                        className: i.verificationStateIcon,
                      }),
                  (0, n.jsx)(s.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: i.header,
                    children:
                      (null == E ? void 0 : E.name) != null
                        ? o.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format(
                            { guildName: E.name }
                          )
                        : o.default.Messages
                            .MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE,
                  }),
                  null != f && "" !== f
                    ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)(s.Text, {
                          variant: "text-sm/normal",
                          children: [
                            (0, n.jsx)("span", {
                              className: i.rejectionReasonLabel,
                              children:
                                o.default.Messages
                                  .MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON,
                            }),
                            (0, n.jsx)("span", {
                              className: i.rejectionReason,
                              children: f,
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
              (0, n.jsxs)("div", {
                className: i.confirmationButtonRow,
                children: [
                  (0, n.jsx)(s.Button, {
                    onClick: u,
                    color: s.Button.Colors.PRIMARY,
                    className: i.confirmationButton,
                    children: a,
                  }),
                  (0, n.jsx)(s.Button, {
                    onClick: c,
                    color: s.Button.Colors.PRIMARY,
                    className: i.confirmationButton,
                    children: d,
                  }),
                ],
              }),
            ],
          });
        };
    },
    388435: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        });
      var n = a("37983");
      a("884691");
      var s = a("446674"),
        l = a("77078"),
        o = a("26989"),
        i = a("305961"),
        r = a("697218"),
        u = a("476765"),
        d = a("549103"),
        c = a("233322"),
        f = a("982527"),
        E = a("183886"),
        I = a("444752"),
        R = a("49111"),
        m = a("782340"),
        C = function (e) {
          let { guildId: t, transitionState: a, ...C } = e,
            M = (0, u.useUID)(),
            N = (0, s.useStateFromStores)(
              [f.default],
              () => f.default.getRequest(t),
              [t]
            ),
            _ = (0, s.useStateFromStores)(
              [i.default],
              () => i.default.getGuild(t),
              [t]
            ),
            A = (0, s.useStateFromStores)([r.default], () => {
              var e;
              return null === (e = r.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id;
            }),
            h = (0, s.useStateFromStores)(
              [o.default],
              () => (null != A ? o.default.getMember(t, A) : null),
              [A, t]
            ),
            T = async () => {
              if (
                null == _
                  ? void 0
                  : _.hasFeature(R.GuildFeatures.PREVIEW_ENABLED)
              ) {
                try {
                  await d.default.removeGuildJoinRequest(t);
                } catch (e) {
                  throw e;
                }
                C.onClose(), (0, c.openMemberVerificationModal)(t);
              } else d.default.resetGuildJoinRequest(t);
            };
          return (0, n.jsx)(l.ModalRoot, {
            size: l.ModalSize.DYNAMIC,
            transitionState: a,
            "aria-labelledby": M,
            children: (0, n.jsx)(I.default, {
              ...C,
              headerId: M,
              reapplyText:
                m.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
              onReapply: T,
              confirmText: m.default.Messages.OKAY,
              onConfirm: () => {
                C.onClose(), null == h && (0, E.default)();
              },
              rejectionReason: null == N ? void 0 : N.rejectionReason,
              guild: _,
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=4fe748bc72a2cf1c847e.js.map

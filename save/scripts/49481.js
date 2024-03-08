(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49481"],
  {
    155554: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        }),
        a("222007");
      var s = a("37983"),
        n = a("884691"),
        u = a("77078"),
        i = a("549103"),
        l = a("567054"),
        d = a("782340"),
        r = e => {
          let {
              guildId: t,
              userId: a,
              onConfirm: r,
              onError: c,
              modalProps: E,
            } = e,
            [o, I] = n.useState(),
            T = async () => {
              try {
                await i.default.updateGuildJoinRequest(
                  t,
                  a,
                  l.GuildJoinRequestApplicationStatuses.REJECTED,
                  o
                ),
                  null == r || r();
              } catch (e) {
                null == c || c();
              }
            };
          return (0, s.jsx)(u.ConfirmModal, {
            header:
              d.default.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_MODAL_TITLE,
            cancelText: d.default.Messages.CANCEL,
            confirmText:
              d.default.Messages
                .GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION,
            onConfirm: T,
            ...E,
            children: (0, s.jsx)(u.TextArea, {
              value: o,
              onChange: I,
              maxLength: 160,
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=351e649490da22ce6106.js.map

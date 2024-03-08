(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45549"],
  {
    125104: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return f;
          },
        }),
        s("222007");
      var t = s("37983"),
        r = s("884691"),
        n = s("77078"),
        c = s("851387"),
        i = s("130037"),
        d = s("158998"),
        u = s("49111"),
        l = s("782340"),
        o = s("12932");
      function f(e) {
        let { guildId: a, user: s, location: f, ...m } = e,
          [C, _] = r.useState(""),
          g = (0, i.useTrackModerationAction)(a, {
            location: f,
            targetUserId: s.id,
          }),
          h = r.useCallback(() => {
            c.default.kickUser(a, s.id, C), g(i.ModerationActionType.KICK);
          }, [a, s.id, C, g]),
          M = r.useCallback(e => {
            _(e);
          }, []);
        return (0, t.jsxs)(n.ConfirmModal, {
          header: l.default.Messages.KICK_USER_FROM_SERVER.format({
            user: s.username,
          }),
          confirmText: l.default.Messages.KICK,
          cancelText: l.default.Messages.CANCEL,
          onConfirm: h,
          ...m,
          children: [
            (0, t.jsx)(n.Text, {
              variant: "text-md/normal",
              className: o.spacing,
              children: l.default.Messages.KICK_USER_BODY.format({
                user: "@".concat(d.default.getName(s)),
              }),
            }),
            (0, t.jsx)(n.FormItem, {
              title: l.default.Messages.FORM_LABEL_REASON_KICK,
              className: o.spacing,
              children: (0, t.jsx)(n.TextArea, {
                maxLength: u.MAX_REASON_LENGTH,
                onChange: M,
                value: C,
                rows: 2,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=fbcf321ea0a4741bdbe2.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86472"],
  {
    241890: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        }),
        s("222007");
      var a = s("37983"),
        n = s("884691"),
        o = s("77078"),
        r = s("452804"),
        d = s("782340"),
        l = s("863184");
      function c(e) {
        let { onSubmit: t, onClose: s, ...c } = e,
          [i, u] = n.useState(!1);
        return (0, a.jsxs)(o.ConfirmModal, {
          header: d.default.Messages.CALL_USER_PROMPT_HEADER,
          confirmButtonColor: o.Button.Colors.GREEN,
          confirmText: d.default.Messages.CALL_USER_CONFIRM,
          cancelText: d.default.Messages.CANCEL,
          onConfirm: t,
          onClose: () => (
            i &&
              r.default.updatedUnsyncedSettings({
                disableCallUserConfirmationPrompt: !0,
              }),
            s()
          ),
          ...c,
          children: [
            (0, a.jsx)(o.Text, {
              variant: "text-md/normal",
              children: d.default.Messages.CALL_USER_PROMPT,
            }),
            (0, a.jsx)(o.Checkbox, {
              type: o.Checkbox.Types.INVERTED,
              value: i,
              onChange: (e, t) => u(t),
              className: l.checkbox,
              children: (0, a.jsx)(o.Text, {
                variant: "text-md/normal",
                children: d.default.Messages.DONT_ASK_AGAIN,
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=697f13c075405035e012.js.map

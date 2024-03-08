(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18990"],
  {
    857727: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return T;
          },
        });
      var n = t("37983");
      t("884691");
      var s = t("77078"),
        r = t("782340");
      function T(e) {
        let { onConfirmUninstall: a, game: t, ...T } = e;
        return (0, n.jsx)(s.ConfirmModal, {
          header: r.default.Messages.APPLICATION_UNINSTALL_PROMPT_TITLE.format({
            gameName: t.name,
          }),
          confirmText: r.default.Messages.APPLICATION_UNINSTALL_PROMPT_CONFIRM,
          cancelText: r.default.Messages.APPLICATION_UNINSTALL_PROMPT_CANCEL,
          onConfirm: a,
          ...T,
          children: (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            children:
              r.default.Messages.APPLICATION_UNINSTALL_PROMPT_BODY.format({
                gameName: t.name,
              }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=e6c624c9da8778fbc7ef.js.map

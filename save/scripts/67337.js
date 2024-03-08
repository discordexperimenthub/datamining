(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67337"],
  {
    968710: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return l;
          },
        });
      var n = t("37983");
      t("884691");
      var s = t("65597"),
        r = t("77078"),
        d = t("697218"),
        u = t("158998"),
        f = t("782340");
      function l(e) {
        let {
            transitionState: a,
            onClose: t,
            userId: l,
            onCancel: o,
            confirmBlock: i,
          } = e,
          c = (0, s.default)([d.default], () => d.default.getUser(l)),
          C = u.default.useName(c);
        return (0, n.jsx)(r.ConfirmModal, {
          header: f.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
            name: C,
          }),
          confirmText: f.default.Messages.BLOCK,
          cancelText: f.default.Messages.CANCEL,
          onConfirm: i,
          onClose: t,
          onCancel: o,
          transitionState: a,
          children: (0, n.jsx)(r.Text, {
            variant: "text-md/normal",
            children: f.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
              name: C,
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=98a8c6a9760b4e33491d.js.map

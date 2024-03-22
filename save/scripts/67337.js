(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67337"],
  {
    968710: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("65597"),
        r = a("77078"),
        o = a("697218"),
        u = a("158998"),
        d = a("782340");
      function f(e) {
        let {
            transitionState: t,
            onClose: a,
            userId: f,
            onCancel: i,
            confirmBlock: l,
          } = e,
          c = (0, n.useStateFromStores)([o.default], () =>
            o.default.getUser(f)
          ),
          C = u.default.useName(c);
        return (0, s.jsx)(r.ConfirmModal, {
          header: d.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
            name: C,
          }),
          confirmText: d.default.Messages.BLOCK,
          cancelText: d.default.Messages.CANCEL,
          onConfirm: l,
          onClose: a,
          onCancel: i,
          transitionState: t,
          children: (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            children: d.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
              name: C,
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=03f79d68e9a35921aaca.js.map

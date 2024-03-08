(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77326"],
  {
    57005: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var s = a("37983");
      a("884691");
      var r = a("77078"),
        n = a("679653"),
        l = a("782340"),
        u = a("611873");
      function d(e) {
        let { channel: t, category: a, ...d } = e,
          o = (0, n.default)(t, !0),
          c = (0, n.default)(a);
        return (0, s.jsx)(r.ConfirmModal, {
          header: l.default.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
          confirmText: l.default.Messages.SYNC_PERMISSIONS,
          cancelText: l.default.Messages.KEEP_PERMISSIONS,
          confirmButtonColor: r.Button.Colors.BRAND,
          ...d,
          children: (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            className: u.message,
            selectable: !1,
            children: l.default.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
              channelName: o,
              categoryName: c,
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=d35c7dd365cf97c19d96.js.map

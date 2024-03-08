(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40261"],
  {
    756912: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var s = n("37983");
      n("884691");
      var a = n("77078"),
        r = n("782340");
      function E(e) {
        let { onConfirm: t, ...n } = e;
        return (0, s.jsx)(a.ConfirmModal, {
          header:
            r.default.Messages
              .MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_TITLE,
          confirmText: r.default.Messages.OK,
          cancelText: r.default.Messages.CANCEL,
          confirmButtonColor: a.Button.Colors.BRAND,
          onConfirm: t,
          ...n,
          children: (0, s.jsx)(a.Text, {
            variant: "text-md/normal",
            children:
              r.default.Messages
                .MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_DESCRIPTION,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=a57d6a2e3f22832cd93b.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85387"],
  {
    758881: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s("37983");
      s("884691");
      var a = s("77078"),
        o = s("736964"),
        u = s("135230"),
        C = s("782340"),
        i = e =>
          (0, n.jsx)(u.default, {
            confirmText:
              C.default.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_CTA,
            title:
              C.default.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_TITLE,
            cancelText: C.default.Messages.CANCEL,
            onConfirm: () => {
              o.default.clearPendingRelationships();
            },
            body: C.default.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_BODY.format(
              { incomingRequestCount: e.incomingRequestCount }
            ),
            confirmColor: a.ButtonColors.RED,
            ...e,
          });
    },
  },
]);
//# sourceMappingURL=10f9283a1cbc6ebbc839.js.map

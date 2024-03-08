(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83949"],
  {
    371895: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return r;
          },
        });
      var n = t("37983");
      t("884691");
      var s = t("452804"),
        d = t("135230"),
        l = t("679653"),
        u = t("782340"),
        r = e => {
          let { onConfirm: a, channel: t, ...r } = e,
            C = (0, l.default)(t);
          return null == C
            ? null
            : (0, n.jsx)(d.default, {
                confirmText: u.default.Messages.CONFIRM,
                secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                title:
                  u.default.Messages.VOICE_CHANNEL_CHANGE_CONFIRMATION_HEADER,
                cancelText: u.default.Messages.CANCEL,
                onConfirm: a,
                onConfirmSecondary: () => {
                  s.default.updatedUnsyncedSettings({
                    disableVoiceChannelChangeAlert: !0,
                  }),
                    a();
                },
                body: u.default.Messages.VOICE_CHANNEL_CHANGE_CONFIRMATION_BODY.format(
                  { channel: C }
                ),
                ...r,
              });
        };
    },
  },
]);
//# sourceMappingURL=c62e009070cbeae19639.js.map

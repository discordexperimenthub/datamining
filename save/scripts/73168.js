(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73168"],
  {
    757973: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return n;
          },
        });
      var t = s("37983");
      s("884691");
      var d = s("135230"),
        u = s("592407"),
        l = s("782340"),
        n = e =>
          (0, t.jsx)(d.default, {
            title: l.default.Messages.GEO_RESTRICTED_MODAL_TITLE,
            body: l.default.Messages.GEO_RESTRICTED_MODAL_BODY.format({
              serverName: e.name,
            }),
            cancelText: l.default.Messages.LEAVE_SERVER,
            onCancel: () => {
              u.default.leaveGuild(e.guildId);
            },
            confirmText: l.default.Messages.OK,
            ...e,
          });
    },
  },
]);
//# sourceMappingURL=b8803d170336d24407ac.js.map

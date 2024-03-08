(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50150"],
  {
    609051: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return u;
          },
        });
      var t = s("37983");
      s("884691");
      var r = s("77078"),
        n = s("782340");
      function u(e) {
        let { ruleName: a, ...s } = e,
          u =
            null != a
              ? a
              : n.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
        return (0, t.jsx)(r.ConfirmModal, {
          ...s,
          header: n.default.Messages.GUILD_AUTOMOD_REMOVE_RULE_CONFIRM_TITLE,
          cancelText: n.default.Messages.CANCEL,
          confirmText: n.default.Messages.CONFIRM,
          children: (0, t.jsx)(r.Text, {
            variant: "text-md/normal",
            children:
              n.default.Messages.GUILD_AUTOMOD_REMOVE_RULE_CONFIRM_DESCRIPTION.format(
                { ruleName: u }
              ),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=bcba2013fe61f7d288a5.js.map

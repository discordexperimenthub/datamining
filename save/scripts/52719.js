(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52719"],
  {
    770332: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return n;
          },
        });
      var t = s("37983");
      s("884691");
      var _ = s("77078"),
        r = s("782340");
      function n(e) {
        let { ruleName: a, keyword: s, ...n } = e,
          u =
            null != a
              ? a
              : r.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
        return (0, t.jsx)(_.ConfirmModal, {
          ...n,
          header:
            r.default.Messages.GUILD_AUTOMOD_ADD_KEYWORD_TO_RULE_CONFIRM_TITLE,
          cancelText: r.default.Messages.CANCEL,
          confirmText: r.default.Messages.CONFIRM,
          children: (0, t.jsx)(_.Text, {
            variant: "text-md/normal",
            children:
              r.default.Messages.GUILD_AUTOMOD_ADD_KEYWORD_TO_RULE_CONFIRM_DESCRIPTION.format(
                { ruleName: u, keyword: s }
              ),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=79ef3aee134b53cf7e8d.js.map

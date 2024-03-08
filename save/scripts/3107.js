(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3107"],
  {
    282683: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return r;
          },
        });
      var s = a("37983");
      a("884691");
      var n = a("77078"),
        u = a("151866"),
        l = a("782340");
      function r(e) {
        let { ruleName: t, onConfirm: a, ...r } = e,
          { setEditingRule: d } = (0, u.useAutomodEditingRuleState)(),
          i =
            null != t
              ? t
              : l.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
        return (0, s.jsx)(n.ConfirmModal, {
          ...r,
          header:
            l.default.Messages.GUILD_AUTOMOD_WARNING_UNSAVED_CHANGES_TITLE,
          cancelText: l.default.Messages.CANCEL,
          confirmText: l.default.Messages.CONFIRM,
          onConfirm: () => {
            d(null), null == a || a();
          },
          children: (0, s.jsx)(n.Text, {
            variant: "text-md/normal",
            children:
              l.default.Messages.GUILD_AUTOMOD_WARNING_UNSAVED_CHANGES_DESCRIPTION.format(
                { ruleName: i }
              ),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=2752059004131ae6083d.js.map

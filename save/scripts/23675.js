(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23675"],
  {
    113286: function (e, n, a) {
      "use strict";
      a.r(n),
        a.d(n, {
          default: function () {
            return o;
          },
        });
      var d = a("37983");
      a("884691");
      var t = a("77078"),
        l = a("272030"),
        s = a("42203"),
        u = a("599110"),
        i = a("793237"),
        r = a("49111"),
        c = a("782340");
      function o(e) {
        let { summary: n, onSelect: a } = e;
        return (0, d.jsx)(t.Menu, {
          onSelect: a,
          navId: "channel-summaries-context-menu",
          "aria-label": c.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: l.closeContextMenu,
          children: (0, d.jsx)(t.MenuGroup, {
            children: (0, d.jsx)(t.MenuItem, {
              id: "delete-summary",
              color: "danger",
              label: c.default.Messages.SUMMARIES_DELETE_SUMMARY,
              action: () => {
                (0, i.deleteSummary)(n);
                let e = s.default.getChannel(n.channelId);
                u.default.track(r.AnalyticEvents.SUMMARY_DELETED, {
                  guild_id: null == e ? void 0 : e.guild_id,
                  channel_id: null == e ? void 0 : e.id,
                  summary_id: n.id,
                  start_message_id: n.startId,
                  end_message_id: n.endId,
                });
              },
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=ebaf52aa1df952a9dfbb.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14033"],
  {
    136394: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("281071"),
        c = n("77078"),
        s = n("272030"),
        i = n("787336"),
        u = n("782340");
      function o(e) {
        let { attachmentUrl: t, attachmentName: n, onSelect: o } = e;
        return (0, a.jsx)(c.Menu, {
          navId: "attachment-link-context",
          onClose: s.closeContextMenu,
          onSelect: o,
          "aria-label": u.default.Messages.LINK_OPTIONS,
          children: (0, a.jsxs)(
            c.MenuGroup,
            {
              children: [
                (0, a.jsx)(c.MenuItem, {
                  id: "attachment-link-copy-link",
                  label: u.default.Messages.COPY_LINK,
                  action: async () => {
                    let e = await (0, i.maybeRefreshAttachmentUrl)(t);
                    (0, l.copy)(null != e ? e : "");
                  },
                }),
                (0, a.jsx)(c.MenuItem, {
                  id: "attachment-link-copy-name",
                  label: u.default.Messages.COPY_TEXT,
                  action: () => {
                    (0, l.copy)(null != n ? n : "");
                  },
                }),
              ],
            },
            "attachment-link-actions"
          ),
        });
      }
    },
  },
]);
//# sourceMappingURL=43a0e96a7410706ade2f.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90594"],
  {
    622618: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return r;
          },
        });
      var l = t("37983");
      t("884691");
      var a = t("77078"),
        u = t("272030"),
        o = t("773336"),
        s = t("50885"),
        c = t("667358"),
        d = t("782340");
      function r(e) {
        let { text: n, onSelect: t } = e,
          r = (0, c.default)(n);
        return o.isPlatformEmbedded
          ? (0, l.jsxs)(a.Menu, {
              navId: "text-context",
              onClose: u.closeContextMenu,
              "aria-label": d.default.Messages.TEXT_ACTIONS_MENU_LABEL,
              onSelect: t,
              children: [
                (0, l.jsx)(a.MenuGroup, { children: r }),
                (0, l.jsx)(a.MenuGroup, {
                  children: (0, l.jsx)(a.MenuItem, {
                    id: "copy",
                    label: d.default.Messages.COPY,
                    action: () => s.default.copy(n),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    667358: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var l = t("37983"),
        a = t("884691"),
        u = t("627445"),
        o = t.n(u),
        s = t("77078"),
        c = t("599110"),
        d = t("773336"),
        r = t("49111"),
        i = t("782340");
      function f(e) {
        let n = a.useCallback(() => {
          o(null != e, "text cannot be null"),
            c.default.track(r.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED),
            window.open(
              "https://www.google.com/search?q=".concat(encodeURIComponent(e)),
              "_blank"
            );
        }, [e]);
        return d.isPlatformEmbedded &&
          null != e &&
          (null == e ? void 0 : e.length) !== 0
          ? [
              (0, l.jsx)(
                s.MenuItem,
                {
                  id: "search-google",
                  label: i.default.Messages.SEARCH_WITH_GOOGLE,
                  action: n,
                },
                "search-google"
              ),
            ]
          : null;
      }
    },
  },
]);
//# sourceMappingURL=536c52a6d51c4883cfc5.js.map

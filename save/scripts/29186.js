(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29186"],
  {
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("685665");
      function s(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: s } = (0, a.default)(t);
          return (0, u.jsx)(s, { children: (0, u.jsx)(e, { ...n }) });
        };
      }
    },
    590079: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("272030"),
        l = n("901582"),
        i = n("158534"),
        r = n("812204"),
        o = n("861370"),
        d = n("421602"),
        c = n("806179"),
        f = n("49111"),
        p = n("782340"),
        E = (0, i.default)(
          function (e) {
            let { user: t, analyticsContext: n, onSelect: i } = e,
              r = (0, c.default)(t.id),
              E = (0, o.default)({
                id: t.id,
                label: p.default.Messages.COPY_ID_USER,
              }),
              M = (0, d.default)(t.id),
              h = t.isNonUserBot();
            return (0, u.jsx)(l.default, {
              context: n,
              object: f.AnalyticsObjects.CONTEXT_MENU,
              children: (0, u.jsxs)(a.Menu, {
                navId: "user-context",
                onClose: s.closeContextMenu,
                "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: i,
                children: [
                  (0, u.jsxs)(a.MenuGroup, { children: [!h && r, !h && M] }),
                  (0, u.jsx)(a.MenuGroup, { children: E }),
                ],
              }),
            });
          },
          [r.default.CONTEXT_MENU, r.default.BANNED_USER_MENU]
        );
    },
    421602: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("77078"),
        s = n("450911"),
        l = n("54239"),
        i = n("271938"),
        r = n("49111"),
        o = n("782340");
      function d(e, t) {
        let n = i.default.getId(),
          d = t === r.AppContext.POPOUT;
        return n === e || d
          ? null
          : (0, u.jsx)(a.MenuItem, {
              id: "message-user",
              label: o.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                s.default.openPrivateChannel(e), (0, l.popLayer)();
              },
            });
      }
    },
    806179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var u = n("37983"),
        a = n("884691"),
        s = n("77078"),
        l = n("244201"),
        i = n("685665"),
        r = n("401642"),
        o = n("599110"),
        d = n("49111"),
        c = n("782340");
      function f(e, t, n) {
        let f = a.useContext(o.AnalyticsContext),
          { analyticsLocations: p } = (0, i.default)(),
          E = (0, l.useWindowDispatch)();
        return (0, u.jsx)(s.MenuItem, {
          id: "user-profile",
          label: c.default.Messages.PROFILE,
          action: () => {
            (0, r.openUserProfileModal)({
              userId: e,
              guildId: null != t ? t : void 0,
              channelId: null != n ? n : void 0,
              sourceAnalyticsLocations: p,
              analyticsLocation: f.location,
            }),
              E.dispatch(d.ComponentActions.POPOUT_CLOSE);
          },
        });
      }
    },
  },
]);
//# sourceMappingURL=657ae6f3de391804d133.js.map

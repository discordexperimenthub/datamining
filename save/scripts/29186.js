(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29186"],
  {
    158534: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("685665");
      function l(e, t) {
        return function (n) {
          let { AnalyticsLocationProvider: l } = (0, a.default)(t);
          return (0, u.jsx)(l, { children: (0, u.jsx)(e, { ...n }) });
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
        l = n("272030"),
        s = n("901582"),
        r = n("158534"),
        i = n("812204"),
        o = n("861370"),
        d = n("421602"),
        c = n("806179"),
        f = n("49111"),
        p = n("782340"),
        E = (0, r.default)(
          function (e) {
            let { user: t, analyticsContext: n, onSelect: r } = e,
              i = (0, c.default)(t.id),
              E = (0, o.default)({
                id: t.id,
                label: p.default.Messages.COPY_ID_USER,
              }),
              M = (0, d.default)(t.id),
              h = t.isNonUserBot();
            return (0, u.jsx)(s.default, {
              context: n,
              object: f.AnalyticsObjects.CONTEXT_MENU,
              children: (0, u.jsxs)(a.Menu, {
                navId: "user-context",
                onClose: l.closeContextMenu,
                "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: r,
                children: [
                  (0, u.jsxs)(a.MenuGroup, { children: [!h && i, !h && M] }),
                  (0, u.jsx)(a.MenuGroup, { children: E }),
                ],
              }),
            });
          },
          [i.default.CONTEXT_MENU, i.default.BANNED_USER_MENU]
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
        l = n("450911"),
        s = n("54239"),
        r = n("271938"),
        i = n("49111"),
        o = n("782340");
      function d(e, t) {
        let n = r.default.getId(),
          d = t === i.AppContext.POPOUT;
        return n === e || d
          ? null
          : (0, u.jsx)(a.MenuItem, {
              id: "message-user",
              label: o.default.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                l.default.openPrivateChannel(e), (0, s.popLayer)();
              },
            });
      }
    },
    806179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var u = n("37983"),
        a = n("884691"),
        l = n("77078"),
        s = n("244201"),
        r = n("401642"),
        i = n("599110"),
        o = n("49111"),
        d = n("782340");
      function c(e, t, n) {
        let c = a.useContext(i.AnalyticsContext),
          f = (0, s.useWindowDispatch)();
        return (0, u.jsx)(l.MenuItem, {
          id: "user-profile",
          label: d.default.Messages.PROFILE,
          action: () => {
            (0, r.openUserProfileModal)({
              userId: e,
              guildId: null != t ? t : void 0,
              channelId: null != n ? n : void 0,
              analyticsLocation: c.location,
            }),
              f.dispatch(o.ComponentActions.POPOUT_CLOSE);
          },
        });
      }
    },
  },
]);
//# sourceMappingURL=7716753bd59f3ba960c4.js.map

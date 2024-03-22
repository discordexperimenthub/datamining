(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77988"],
  {
    846679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var u = n("37983");
      n("884691");
      var a = n("627445"),
        l = n.n(a),
        r = n("65597"),
        d = n("390236"),
        i = n("292508"),
        c = n("42203"),
        o = n("58343");
      function s(e) {
        let { windowKey: t, channelId: n } = e,
          a = (0, r.useStateFromStores)([c.default], () =>
            c.default.getChannel(n)
          );
        return (
          l(null != a, "channel cannot be null for popout"),
          (0, u.jsx)(i.default, {
            withTitleBar: !0,
            windowKey: t,
            title: a.name,
            children: (0, u.jsx)(d.default.Provider, {
              value: a.guild_id,
              children: (0, u.jsx)(o.default, { channel: a }),
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=7199ce76a7ec1589935a.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77988"],
  {
    846679: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var l = t("37983");
      t("884691");
      var u = t("627445"),
        a = t.n(u),
        d = t("65597"),
        i = t("390236"),
        r = t("292508"),
        c = t("42203"),
        f = t("58343");
      function h(e) {
        let { windowKey: n, channelId: t } = e,
          u = (0, d.default)([c.default], () => c.default.getChannel(t));
        return (
          a(null != u, "channel cannot be null for popout"),
          (0, l.jsx)(r.default, {
            withTitleBar: !0,
            windowKey: n,
            title: u.name,
            children: (0, l.jsx)(i.default.Provider, {
              value: u.guild_id,
              children: (0, l.jsx)(f.default, { channel: u }),
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=4faefa451b325d02238c.js.map

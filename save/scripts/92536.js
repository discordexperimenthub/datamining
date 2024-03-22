(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92536"],
  {
    93116: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var a = n("37983");
      n("884691");
      var l = n("627445"),
        d = n.n(l),
        u = n("65597"),
        i = n("916580"),
        r = n("264732"),
        s = n("390236"),
        o = n("292508"),
        c = n("42203"),
        h = n("474643"),
        f = n("494286");
      function p(e) {
        let { windowKey: t, channelId: n } = e,
          l = (0, u.useStateFromStores)([c.default], () =>
            c.default.getChannel(n)
          );
        return (
          d(null != l, "channel cannot be null for popout"),
          (0, a.jsx)(o.default, {
            withTitleBar: !0,
            windowKey: t,
            title: l.name,
            channelId: l.id,
            children: (0, a.jsxs)(s.default.Provider, {
              value: l.guild_id,
              children: [
                (0, a.jsx)(r.default, {
                  channel: l,
                  draftType: h.DraftType.ChannelMessage,
                }),
                (0, a.jsx)(f.default, { channel: l }),
                (0, a.jsx)(i.default, {
                  showInPopoutWindow: !0,
                  disallowTextActivity: !0,
                }),
              ],
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=6cb8b387df6061f69c68.js.map

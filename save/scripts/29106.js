(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29106"],
  {
    19577: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var u = n("37983");
      n("884691");
      var l = n("446674"),
        a = n("77078"),
        o = n("272030"),
        s = n("870346"),
        i = n("383294"),
        c = n("845579"),
        d = n("856133"),
        r = n("758710"),
        f = n("49111"),
        p = n("782340");
      function h(e) {
        let { channel: t, onSelect: n } = e,
          h = (0, d.default)(),
          C = c.RtcPanelShowVoiceStates.useSetting(),
          S = (function (e) {
            let t = (0, l.useStateFromStores)([s.default], () =>
              s.default.getWindow(f.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
            );
            return null == e || null != t
              ? null
              : (0, u.jsx)(a.MenuItem, {
                  id: "popout-call",
                  label: p.default.Messages.POPOUT_PLAYER,
                  icon: r.default,
                  action: () => i.openChannelCallPopout(e),
                });
          })(null != t ? t : void 0);
        return (0, u.jsxs)(a.Menu, {
          navId: "rtc-channel",
          "aria-label": p.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: o.closeContextMenu,
          onSelect: n,
          children: [
            h,
            (0, u.jsxs)(a.MenuGroup, {
              children: [
                S,
                (0, u.jsx)(a.MenuCheckboxItem, {
                  id: "show-voice-states",
                  checked: C,
                  action: () => c.RtcPanelShowVoiceStates.updateSetting(!C),
                  label: p.default.Messages.VOICE_PANEL_SHOW_VOICE_USERS,
                }),
              ],
            }),
          ],
        });
      }
    },
    856133: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var u = n("37983");
      n("884691");
      var l = n("77078"),
        a = n("143082"),
        o = n("252227"),
        s = n("832759");
      function i() {
        return [
          (0, u.jsx)(
            l.MenuGroup,
            { children: (0, o.default)() },
            "input-mode-items"
          ),
          (0, u.jsxs)(
            l.MenuGroup,
            { children: [(0, a.default)(), (0, s.default)()] },
            "input-output"
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=3369b0e34aa85985acbd.js.map

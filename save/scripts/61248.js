(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61248"],
  {
    193990: function (t, e, T) {
      "use strict";
      T.r(e),
        T.d(e, {
          default: function () {
            return I;
          },
        });
      var a = T("913144"),
        I = {
          setDesktopType(t) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
              desktopType: t,
            });
          },
          setTTSType(t) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_TTS_TYPE",
              ttsType: t,
            });
          },
          setDisabledSounds(t) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
              sounds: t,
            });
          },
          toggleDisableAllSounds() {
            a.default.dispatch({ type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED" });
          },
          setDisableUnreadBadge(t) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
              disableUnreadBadge: t,
            });
          },
          setTaskbarFlash(t) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
              taskbarFlash: t,
            });
          },
          setNotifyMessagesInSelectedChannel(t) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
              notify: t,
            });
          },
          setPermissionsState(t, e) {
            a.default.dispatch({
              type: "NOTIFICATIONS_SET_PERMISSION_STATE",
              enabled: t,
              source: e,
            });
          },
          showNotification(t, e, T, I) {
            let s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {};
            a.default.dispatch({
              type: "NOTIFICATION_CREATE",
              icon: t,
              title: e,
              body: T,
              trackingProps: I,
              options: {
                ...s,
                onClick() {
                  var t;
                  null === (t = s.onClick) || void 0 === t || t.call(s),
                    a.default.dispatch({ type: "NOTIFICATION_CLICK" });
                },
              },
            });
          },
          clickedNotification() {
            a.default.dispatch({ type: "NOTIFICATION_CLICK" });
          },
        };
    },
  },
]);
//# sourceMappingURL=54d957ee3c9d4e7fa225.js.map

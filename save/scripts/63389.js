(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63389"],
  {
    833222: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s("583103");
      s.es(r, t);
    },
    838048: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s("253762");
      s.es(r, t);
    },
    696675: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s("886181");
      s.es(r, t);
    },
    780624: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s("449919");
      s.es(r, t);
    },
    29846: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          BlockedUsersNotice: function () {
            return g;
          },
          BlockedUser: function () {
            return p;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("446674"),
        n = s("669491"),
        l = s("77078"),
        i = s("272030"),
        c = s("328275"),
        d = s("849467"),
        o = s("258078"),
        u = s("823050"),
        h = s("158998"),
        f = s("325861"),
        v = s("151642"),
        C = s("782340"),
        x = s("35121");
      let g = e => {
          let { channelId: t } = e,
            s = (0, v.useStageBlockedUsersCount)(t);
          return 0 === s
            ? null
            : (0, r.jsxs)("div", {
                className: x.blockedNotice,
                children: [
                  (0, r.jsx)(c.default, {
                    className: x.blockedIcon,
                    color: n.default.unsafe_rawColors.RED_400.css,
                  }),
                  (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      C.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: s }
                      ),
                  }),
                  (0, r.jsx)(l.Clickable, {
                    className: x.blockedButton,
                    onClick: e => {
                      (0, i.openContextMenu)(
                        e,
                        e => (0, r.jsx)(m, { ...e, channelId: t }),
                        { position: "left", align: "bottom" }
                      );
                    },
                    children: C.default.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        p = e => {
          let { user: t, showStatus: s, speaker: n, channelId: i } = e,
            c = (0, a.useStateFromStores)([f.default], () =>
              f.default.isModerator(t.id, i)
            ),
            v = null;
          return (
            s &&
              (v = n
                ? C.default.Messages.STAGE_SPEAKER
                : c
                  ? C.default.Messages.STAGE_MODERATOR_TOOLTIP
                  : C.default.Messages.STAGE_AUDIENCE),
            (0, r.jsxs)("div", {
              className: x.user,
              children: [
                (0, r.jsx)(
                  u.default,
                  {
                    src: t.getAvatarURL(null, 32),
                    size: l.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: n
                      ? () => (0, r.jsx)(d.default, { className: x.icon })
                      : null,
                  },
                  t.id
                ),
                (0, r.jsxs)("div", {
                  className: x.userInfo,
                  children: [
                    (0, r.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, r.jsx)(o.default, {
                          size: s
                            ? o.default.Sizes.SIZE_16
                            : o.default.Sizes.SIZE_14,
                          children: h.default.getName(t),
                        }),
                        (0, r.jsx)(o.default, {
                          size: s
                            ? o.default.Sizes.SIZE_16
                            : o.default.Sizes.SIZE_14,
                          color: o.default.Colors.HEADER_SECONDARY,
                          children: "#".concat(t.discriminator),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, r.jsx)(l.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: C.default.Messages.BLOCKED,
                        }),
                        (0, r.jsxs)(l.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", v],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        m = e => {
          let { channelId: t } = e,
            s = (0, v.useStageBlockedUsers)(t);
          return (0, r.jsx)(l.Scroller, {
            className: x.container,
            children: s.map(e => {
              let { user: s } = e;
              return (0, r.jsx)(p, { user: s, channelId: t }, s.id);
            }),
          });
        };
    },
    476765: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          uid: function () {
            return l;
          },
          useUID: function () {
            return i;
          },
          UID: function () {
            return c;
          },
        });
      var r = s("995008"),
        a = s.n(r),
        n = s("775560");
      let l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return a(e);
        },
        i = () => (0, n.useLazyValue)(() => l()),
        c = e => {
          let { children: t } = e;
          return t(i());
        };
    },
    200639: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("469563"),
        n = s("838048"),
        l = s("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: a = "currentColor",
              foreground: n,
              ...i
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("path", {
                  d: "M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z",
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  d: "M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z",
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  d: "M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z",
                  className: n,
                  fill: a,
                }),
              ],
            });
          },
          n.HeadphonesSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    849467: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("469563"),
        n = s("696675"),
        l = s("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: a = "currentColor",
              foreground: n,
              ...i
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                  className: n,
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                  className: n,
                  fill: a,
                }),
              ],
            });
          },
          n.MicrophoneIcon,
          void 0,
          { size: 24 }
        );
    },
    97347: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("469563"),
        n = s("780624"),
        l = s("75196"),
        i = (0, a.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: s = 24,
              color: a = "currentColor",
              foreground: n,
              ...i
            } = e;
            return (0, r.jsxs)("svg", {
              ...(0, l.default)(i),
              width: t,
              height: s,
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("path", {
                  d: "M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z",
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  d: "M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z",
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  d: "M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z",
                  fill: a,
                }),
                (0, r.jsx)("path", {
                  d: "M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z",
                  className: n,
                  fill: a,
                }),
              ],
            });
          },
          n.MicrophoneSlashIcon,
          void 0,
          { size: 24 }
        );
    },
    823050: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return C;
          },
        });
      var r,
        a,
        n = s("37983"),
        l = s("884691"),
        i = s("414456"),
        c = s.n(i),
        d = s("77078"),
        o = s("200639"),
        u = s("97347"),
        h = s("587974"),
        f = s("688843");
      ((r = a || (a = {}))[(r.OUTGOING = 0)] = "OUTGOING"),
        (r[(r.INCOMING = 1)] = "INCOMING");
      class v extends l.PureComponent {
        renderStatus() {
          let { muted: e, deafen: t } = this.props,
            s = t ? o.default : u.default;
          return e || t
            ? (0, n.jsx)(s, { className: f.status }, "status")
            : null;
        }
        renderBorder() {
          let { speaking: e } = this.props;
          return (0, n.jsx)(
            "div",
            { className: c(f.border, { [f.speaking]: e }) },
            "border"
          );
        }
        renderMask() {
          let { muted: e, speaking: t, deafen: s } = this.props;
          return e && t
            ? (0, n.jsxs)(n.Fragment, {
                children: [this.renderBorder(), this.renderStatus()],
              })
            : e || s
              ? (0, n.jsx)(n.Fragment, { children: this.renderStatus() })
              : (0, n.jsx)(n.Fragment, { children: this.renderBorder() });
        }
        renderVoiceCallAvatar() {
          let {
              src: e,
              disabled: t,
              ringing: s,
              ringingType: r,
              avatarClassName: a,
              muted: l,
              deafen: i,
              size: o,
              renderIcon: u,
            } = this.props,
            v = (0, d.getAvatarSize)(o),
            C = (0, n.jsx)("img", {
              src: e,
              alt: " ",
              className: c(f.voiceAvatar, a, {
                [f.ringingOutgoing]: s && 0 === r,
              }),
            });
          if (t) return C;
          let x = h.MaskIDs.AVATAR_DEFAULT;
          return (
            null != u
              ? (x =
                  o === d.AvatarSizes.SIZE_32
                    ? h.MaskIDs.AVATAR_CALL_ICON_32
                    : h.MaskIDs.AVATAR_CALL_ICON)
              : (l || i) && (x = h.MaskIDs.AVATAR_VOICE_CALL_80),
            (0, n.jsxs)("div", {
              className: f.callAvatarMaskContainer,
              children: [
                (0, n.jsxs)(h.default, {
                  className: f.callAvatarMask,
                  width: v,
                  height: v,
                  mask: x,
                  children: [null == u ? void 0 : u(), C],
                }),
                this.renderMask(),
              ],
            })
          );
        }
        render() {
          let {
              size: e,
              onClick: t,
              style: s,
              onContextMenu: r,
              className: a,
              ringingType: l,
              ringing: i,
            } = this.props,
            o = c(
              f.wrapper,
              {
                [f.clickable]: null != t,
                [f.ringingOutgoing]: i && 0 === l,
                [f.ringingIncoming]: i && 1 === l,
              },
              a
            ),
            u = (0, d.getAvatarSize)(e),
            h = { height: u, width: u, ...s };
          return (0, n.jsx)("div", {
            style: h,
            onContextMenu: r,
            className: o,
            children: this.renderVoiceCallAvatar(),
          });
        }
      }
      (v.defaultProps = {
        size: d.AvatarSizes.SIZE_80,
        ringingType: 0,
        speaking: !1,
        soundsharing: !1,
        ringing: !1,
        muted: !1,
        deafen: !1,
        hasVideo: !1,
        mirror: !1,
        disabled: !1,
        paused: !1,
      }),
        (v.RingingType = a);
      var C = v;
    },
    583103: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          DenyIcon: function () {
            return l;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("669491"),
        n = s("82169");
      let l = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: l = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: i,
          }),
        });
      };
    },
    253762: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          HeadphonesSlashIcon: function () {
            return l;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("669491"),
        n = s("82169");
      let l = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: l = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM17.06 2.94a.48.48 0 0 0-.11-.77A11 11 0 0 0 2.18 16.94c.14.3.53.35.76.12l3.2-3.2c.25-.25.15-.68-.2-.76a5 5 0 0 0-1.02-.1H3.05a9 9 0 0 1 12.66-9.2c.2.09.44.05.59-.1l.76-.76ZM20.2 8.28a.52.52 0 0 1 .1-.58l.76-.76a.48.48 0 0 1 .77.11 11 11 0 0 1-4.5 14.57c-1.27.71-2.73.23-3.55-.74a3.1 3.1 0 0 1-.17-3.78l1.38-1.97a5 5 0 0 1 4.1-2.13h1.86a9.1 9.1 0 0 0-.75-4.72ZM10.1 17.9c.25-.25.65-.18.74.14a3.1 3.1 0 0 1-.62 2.84 2.85 2.85 0 0 1-3.55.74.16.16 0 0 1-.04-.25l3.48-3.48Z",
            className: i,
          }),
        });
      };
    },
    886181: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MicrophoneIcon: function () {
            return l;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("669491"),
        n = s("82169");
      let l = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: l = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: i,
            }),
            (0, r.jsx)("path", {
              fill: "string" == typeof l ? l : l.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: i,
            }),
          ],
        });
      };
    },
    449919: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MicrophoneSlashIcon: function () {
            return l;
          },
        });
      var r = s("37983");
      s("884691");
      var a = s("669491"),
        n = s("82169");
      let l = e => {
        let {
          width: t = 24,
          height: s = 24,
          color: l = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: s,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "m2.7 22.7 20-20a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4ZM10.8 17.32c-.21.21-.1.58.2.62V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 0 0-2 0c0 1.45-.52 2.79-1.38 3.83l-.02.02A5.99 5.99 0 0 1 12.32 16a.52.52 0 0 0-.34.15l-1.18 1.18ZM15.36 4.52c.15-.15.19-.38.08-.56A4 4 0 0 0 8 6v4c0 .3.03.58.1.86.07.34.49.43.74.18l6.52-6.52ZM5.06 13.98c.16.28.53.31.75.09l.75-.75c.16-.16.19-.4.08-.61A5.97 5.97 0 0 1 6 10a1 1 0 0 0-2 0c0 1.45.39 2.81 1.06 3.98Z",
            className: i,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=0616fb5508fd07a42cbb.js.map

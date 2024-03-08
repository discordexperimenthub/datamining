(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26574"],
  {
    646074: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("871238");
      l.es(n, t);
    },
    505088: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("506070");
      l.es(n, t);
    },
    698210: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("220654");
      l.es(n, t);
    },
    504218: function (e, t, l) {
      "use strict";
      l.r(t);
      var n = l("532453");
      l.es(n, t);
    },
    462392: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          getActionInfo: function () {
            return O;
          },
        });
      var n = l("679653"),
        r = l("42203"),
        a = l("27618"),
        s = l("697218"),
        o = l("593195"),
        u = l("635731"),
        i = l("491401"),
        c = l("381546"),
        d = l("143460"),
        A = l("903639"),
        L = l("782340");
      let C = e => {
          if (e === d.AutomodActionType.QUARANTINE_USER) return !1;
          return !0;
        },
        _ = e => {
          switch (e) {
            case d.AutomodActionType.BLOCK_MESSAGE:
            case d.AutomodActionType.FLAG_TO_CHANNEL:
            case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
            case d.AutomodActionType.QUARANTINE_USER:
              return !0;
            default:
              return !1;
          }
        },
        f = e => {
          switch (e) {
            case d.AutomodActionType.BLOCK_MESSAGE:
              return L.default.Messages
                .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
            case d.AutomodActionType.FLAG_TO_CHANNEL:
              return L.default.Messages
                .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
            case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
              return L.default.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
            case d.AutomodActionType.QUARANTINE_USER:
              return L.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
          }
        },
        N = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.AutomodTriggerType.KEYWORD;
          switch (e) {
            case d.AutomodActionType.BLOCK_MESSAGE:
              switch (t) {
                case d.AutomodTriggerType.MENTION_SPAM:
                  return L.default.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                case d.AutomodTriggerType.ML_SPAM:
                  return L.default.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                default:
                  return L.default.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION;
              }
            case d.AutomodActionType.FLAG_TO_CHANNEL:
              return L.default.Messages
                .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
            case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
              return L.default.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
            case d.AutomodActionType.QUARANTINE_USER:
              return L.default.Messages
                .GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION;
          }
        },
        T = (e, t) => {
          var l, o, u;
          switch (e) {
            case d.AutomodActionType.QUARANTINE_USER:
            case d.AutomodActionType.BLOCK_MESSAGE:
              return null;
            case d.AutomodActionType.FLAG_TO_CHANNEL: {
              let e =
                null == t
                  ? void 0
                  : null === (l = t.metadata) || void 0 === l
                    ? void 0
                    : l.channelId;
              if (null == e) return null;
              let o = r.default.getChannel(e);
              if (null == o) return null;
              let u = (0, n.computeChannelName)(o, s.default, a.default);
              return L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format(
                { channelName: u }
              );
            }
            case d.AutomodActionType.USER_COMMUNICATION_DISABLED: {
              let e =
                  null !==
                    (u =
                      null == t
                        ? void 0
                        : null === (o = t.metadata) || void 0 === o
                          ? void 0
                          : o.durationSeconds) && void 0 !== u
                    ? u
                    : 0,
                l = (0, A.getFriendlyDurationString)(e);
              if (null == l) return null;
              return L.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format(
                { duration: l }
              );
            }
          }
        },
        I = e => {
          switch (e) {
            case d.AutomodActionType.BLOCK_MESSAGE:
              return c.default;
            case d.AutomodActionType.FLAG_TO_CHANNEL:
              return o.default;
            case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
              return i.default;
            case d.AutomodActionType.QUARANTINE_USER:
              return u.default;
          }
        };
      function O(e, t, l) {
        var n, r, a, s;
        return _(e)
          ? {
              headerText: null !== (n = f(e)) && void 0 !== n ? n : "",
              descriptionText: null !== (r = N(e, l)) && void 0 !== r ? r : "",
              helperText: null !== (a = T(e, t)) && void 0 !== a ? a : null,
              icon: null !== (s = I(e)) && void 0 !== s ? s : c.default,
              isEditable: C(e),
            }
          : null;
      }
    },
    998730: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return N;
          },
        }),
        l("222007");
      var n = l("37983"),
        r = l("884691"),
        a = l("446674"),
        s = l("77078"),
        o = l("679653"),
        u = l("42203"),
        i = l("923959"),
        c = l("27618"),
        d = l("697218"),
        A = l("476765"),
        L = l("462392"),
        C = l("782340"),
        _ = l("315759");
      let f = e => {
        let { guildId: t, channel: l, onSelectChannel: r } = e,
          u = (0, a.useStateFromStoresArray)(
            [i.default],
            () =>
              i.default
                .getChannels(t)
                [i.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                  let { channel: t } = e;
                  return (
                    !t.isGuildVocal() &&
                    !t.isThread() &&
                    !t.isForumLikeChannel()
                  );
                })
                .map(e => {
                  let { channel: t } = e;
                  return t;
                }),
            [t]
          );
        return (0, n.jsx)(s.FormItem, {
          className: _.channelSelector,
          required: !0,
          children: (0, n.jsx)(s.SearchableSelect, {
            value: null == l ? void 0 : l.id,
            options: u.map(e => ({
              value: e.id,
              label: (0, o.computeChannelName)(e, d.default, c.default, !0),
            })),
            onChange: e => {
              let t = u.find(t => t.id === e);
              r(null != t ? t : void 0);
            },
            placeholder:
              C.default.Messages
                .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER,
          }),
        });
      };
      function N(e) {
        let {
            action: t,
            triggerType: l,
            guildId: o,
            isEdit: i,
            onEditChannel: c,
            onClose: d,
            transitionState: N,
          } = e,
          T = (0, A.useUID)(),
          [I, O] = r.useState(t.metadata.channelId),
          [h, E] = r.useState(null),
          M = (0, a.useStateFromStores)(
            [u.default],
            () => u.default.getChannel(I),
            [I]
          ),
          S = (0, L.getActionInfo)(t.type, t, l);
        if (null == S) return null;
        let { headerText: v } = S;
        return (0, n.jsxs)(s.ModalRoot, {
          transitionState: N,
          "aria-labelledby": T,
          size: s.ModalSize.SMALL,
          children: [
            (0, n.jsxs)(s.ModalContent, {
              className: _.actionContentContainer,
              children: [
                (0, n.jsx)(s.Heading, {
                  id: T,
                  color: "header-primary",
                  variant: "heading-lg/semibold",
                  className: _.header,
                  children: v,
                }),
                (0, n.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children:
                    C.default.Messages
                      .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION,
                }),
                (0, n.jsx)(f, {
                  guildId: o,
                  channel: M,
                  onSelectChannel: e => {
                    null != e && O(e.id);
                  },
                }),
                null != h
                  ? (0, n.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: h,
                    })
                  : (0, n.jsx)(s.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children:
                        C.default.Messages
                          .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER,
                    }),
              ],
            }),
            (0, n.jsxs)(s.ModalFooter, {
              children: [
                (0, n.jsx)(s.Button, {
                  onClick: () => {
                    if (null == I) {
                      E(
                        C.default.Messages
                          .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL
                      );
                      return;
                    }
                    c(I);
                  },
                  color: s.Button.Colors.BRAND,
                  size: s.Button.Sizes.SMALL,
                  children: i
                    ? C.default.Messages.EDIT
                    : C.default.Messages.SAVE,
                }),
                (0, n.jsx)(s.Button, {
                  onClick: () => {
                    d();
                  },
                  color: s.Button.Colors.TRANSPARENT,
                  look: s.Button.Looks.LINK,
                  children: C.default.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    476765: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          uid: function () {
            return s;
          },
          useUID: function () {
            return o;
          },
          UID: function () {
            return u;
          },
        });
      var n = l("995008"),
        r = l.n(n),
        a = l("775560");
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "uid_";
          return r(e);
        },
        o = () => (0, a.useLazyValue)(() => s()),
        u = e => {
          let { children: t } = e;
          return t(o());
        };
    },
    593195: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("469563"),
        a = l("504218"),
        s = l("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: r = "currentColor",
              className: a,
              foreground: o,
              ...u
            } = e;
            return (0, n.jsx)("svg", {
              width: t,
              height: l,
              viewBox: "0 0 24 24",
              className: a,
              ...(0, s.default)(u),
              children: (0, n.jsx)("path", {
                className: o,
                fill: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z",
              }),
            });
          },
          a.TextIcon,
          void 0,
          { size: 24 }
        );
    },
    635731: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("469563"),
        a = l("646074"),
        s = l("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: r = "currentColor",
              ...a
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, s.default)(a),
              width: t,
              height: l,
              fill: "None",
              viewBox: "0 0 24 24",
              children: [
                (0, n.jsx)("path", {
                  d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                  stroke: r,
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                  fill: r,
                }),
              ],
            });
          },
          a.ChatXIcon,
          void 0,
          { size: 24 }
        );
    },
    491401: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("469563"),
        a = l("698210"),
        s = l("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              color: t = "currentColor",
              height: l = 24,
              width: r = 24,
              ...a
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, s.default)(a),
              width: r,
              height: l,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("path", {
                  d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                  fill: t,
                }),
                (0, n.jsx)("path", {
                  d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                  fill: t,
                }),
              ],
            });
          },
          a.ClockWarningIcon,
          void 0,
          { size: 24 }
        );
    },
    381546: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return o;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("469563"),
        a = l("505088"),
        s = l("75196"),
        o = (0, r.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: l = 24,
              color: r = "currentColor",
              foreground: a,
              backgroundColor: o,
              ...u
            } = e;
            return (0, n.jsxs)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: l,
              viewBox: "0 0 14 14",
              children: [
                null != o
                  ? (0, n.jsx)("circle", { r: 5, cx: 7, cy: 7, fill: o })
                  : null,
                (0, n.jsx)("path", {
                  fill: r,
                  className: a,
                  d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z",
                }),
              ],
            });
          },
          a.CircleXIcon,
          void 0,
          { size: 24 }
        );
    },
    871238: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ChatXIcon: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("669491"),
        a = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.3 15.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3a1 1 0 0 1 1.4 1.42L20.43 19l2.29 2.3a1 1 0 0 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 0 1 0-1.4Z",
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "m18.65 14.4-.53-.52a3 3 0 0 0-4.24 4.24l.53.53c.2.2.2.5 0 .7l-.53.53a2.99 2.99 0 0 0-.84 1.63c-.04.25-.23.46-.48.47L12 22H2.2a1 1 0 0 1-.75-1.66l2.07-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.43-4.8c-.02.25-.23.44-.48.48-.6.1-1.17.38-1.63.84l-.52.52a.5.5 0 0 1-.71 0Z",
              className: o,
            }),
          ],
        });
      };
    },
    506070: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          CircleXIcon: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("669491"),
        a = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          secondaryColor: s = "transparent",
          secondaryColorClass: o = "",
          color: u = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, a.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "string" == typeof s ? s : s.css,
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
              clipRule: "evenodd",
              className: i,
            }),
          ],
        });
      };
    },
    220654: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          ClockWarningIcon: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("669491"),
        a = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M12 23c.08 0 .14-.08.11-.16a2.88 2.88 0 0 1 .29-2.31l2.2-3.85c.18-.3-.06-.73-.3-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.38c0 .13.05.26.15.35l2.56 2.56c.08.08.22.08.28-.02l.36-.64a3.06 3.06 0 0 1 5.3 0l.3.54c.22.38.78.31.86-.12A11 11 0 1 0 12 23Z",
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              fillRule: "evenodd",
              d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    532453: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          TextIcon: function () {
            return s;
          },
        });
      var n = l("37983");
      l("884691");
      var r = l("669491"),
        a = l("82169");
      let s = e => {
        let {
          width: t = 24,
          height: l = 24,
          color: s = r.default.colors.INTERACTIVE_NORMAL,
          colorClass: o = "",
          ...u
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, a.default)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: l,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z",
            clipRule: "evenodd",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=5dedfd87ce675fd3b04a.js.map

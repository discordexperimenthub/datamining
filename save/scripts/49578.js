(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49578"],
  {
    696675: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("886181");
      t.es(a, s);
    },
    126489: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("358931");
      t.es(a, s);
    },
    14526: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return i;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("473374"),
        n = t("195483"),
        r = t("574073");
      function i(e) {
        var s, t;
        let i = (0, r.default)(e.message),
          c = (0, l.renderSystemTag)({
            message: e.message,
            channel: e.channel,
            user:
              null !==
                (t =
                  null === (s = e.message) || void 0 === s
                    ? void 0
                    : s.author) && void 0 !== t
                ? t
                : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage,
          }),
          u = {};
        return (
          null != c && (u[n.UsernameDecorationTypes.SYSTEM_TAG] = c),
          (0, a.jsx)(n.default, { ...e, author: i, decorations: u })
        );
      }
    },
    862846: function (e, s, t) {
      "use strict";
      function a(e, s) {
        return !!(null != s && e.mentions.includes(s.author.id)) || !1;
      }
      t.r(s),
        t.d(s, {
          default: function () {
            return a;
          },
        });
    },
    943409: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return i;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        n = t("696675"),
        r = t("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 19,
              height: t = 24,
              color: l = "currentColor",
              foreground: n,
              ...i
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, r.default)(i),
              width: s,
              height: t,
              viewBox: "0 0 19 24",
              fill: "none",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.7036 11C12.7036 12.66 11.2786 14 9.5 14C7.72143 14 6.28571 12.66 6.28571 11V5C6.28571 3.34 7.72143 2 9.5 2C11.2786 2 12.7143 3.34 12.7143 5L12.7036 11ZM9.5 16.1C12.4571 16.1 15.1786 14 15.1786 11H17C17 14.42 14.0857 17.24 10.5714 17.72V22H8.42857V17.72C4.91429 17.23 2 14.41 2 11H3.82143C3.82143 14 6.54286 16.1 9.5 16.1Z",
                fill: l,
                className: n,
              }),
            });
          },
          n.MicrophoneIcon,
          void 0,
          { size: 24 }
        );
    },
    437472: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return i;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("469563"),
        n = t("126489"),
        r = t("75196"),
        i = (0, l.replaceIcon)(
          function (e) {
            let {
              width: s = 16,
              height: t = 16,
              color: l = "currentColor",
              ...n
            } = e;
            return (0, a.jsx)("svg", {
              width: s,
              height: t,
              ...(0, r.default)(n),
              viewBox: "0 0 16 16",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.20038 2.39762V5.24178C9.20038 6.10455 9.89673 6.80072 10.7597 6.80072H13.6046C13.9558 6.80072 14.1343 6.37826 13.8844 6.12835L9.87292 2.11796C9.62295 1.86806 9.20038 2.04061 9.20038 2.39762ZM10.7461 8.01794C9.22044 8.01794 7.98197 6.77947 7.98197 5.25382V2.03499H3.19561C2.53749 2.03499 1.99902 2.57346 1.99902 3.23158V12.8043C1.99902 13.4624 2.53749 14.0009 3.19561 14.0009H12.7683C13.4265 14.0009 13.9649 13.4624 13.9649 12.8043V8.01794H10.7461ZM9.80015 9C9.80015 9.99411 8.99427 10.8 8.00015 10.8C7.00604 10.8 6.20015 9.99411 6.20015 9H5.00015C5.00015 10.6569 6.3433 12 8.00015 12C9.65701 12 11.0002 10.6569 11.0002 9H9.80015Z",
                fill: l,
              }),
            });
          },
          e => {
            let { width: s = 16, height: t = 16, ...l } = e;
            return (0, a.jsx)(n.StickerSmallIcon, {
              width: s,
              height: t,
              ...l,
            });
          },
          void 0,
          { size: 16 }
        );
    },
    93427: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          renderSingleLineMessage: function () {
            return w;
          },
          default: function () {
            return y;
          },
        });
      var a = t("37983"),
        l = t("884691"),
        n = t("414456"),
        r = t.n(n),
        i = t("866227"),
        c = t.n(i),
        u = t("77078"),
        d = t("390236"),
        o = t("865343"),
        h = t("14526"),
        g = t("38600"),
        f = t("119001"),
        p = t("256572"),
        E = t("862846"),
        M = t("24373"),
        C = t("83910"),
        m = t("95689"),
        v = t("943409"),
        _ = t("437472"),
        T = t("8161"),
        N = t("315102"),
        x = t("888400"),
        S = t("449008"),
        R = t("497880"),
        I = t("719347"),
        A = t("49111"),
        L = t("782340"),
        P = t("356296");
      function j(e) {
        let {
          width: s = 12,
          height: t = 8,
          color: l = "currentColor",
          className: n,
          foreground: r,
        } = e;
        return (0, a.jsx)("svg", {
          className: n,
          width: s,
          height: t,
          viewBox: "0 0 12 8",
          children: (0, a.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: r,
            fill: l,
          }),
        });
      }
      function O(e) {
        let { width: s = 18, height: t = 18, className: l, foreground: n } = e;
        return (0, a.jsx)("svg", {
          className: l,
          width: s,
          height: t,
          viewBox: "0 0 18 18",
          children: (0, a.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: n,
          }),
        });
      }
      function w(e, s, t, l, n) {
        let r, i, c;
        let { iconClass: u, iconSize: d } = n,
          o = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
          h = (0, M.getMessageStickers)(e),
          g = h.length > 0,
          f = null != e.interaction,
          p = e.hasFlag(A.MessageFlags.IS_VOICE_MESSAGE);
        return (
          t
            ? (r = L.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED)
            : e.type === A.MessageTypes.CHANNEL_PINNED_MESSAGE
              ? (r = L.default.Messages.MESSAGE_PINNED)
              : o
                ? g
                  ? (r = L.default.Messages.REPLY_QUOTE_STICKER)
                  : f
                    ? (r = L.default.Messages.REPLY_QUOTE_COMMAND)
                    : p
                      ? (r = L.default.Messages.REPLY_QUOTE_VOICE_MESSAGE)
                      : ((r = L.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT),
                        (c = (0, a.jsx)(m.default, {
                          className: u,
                          width: d,
                          height: d,
                        })))
                : (i = (0, a.jsx)(R.default, {
                    message: e,
                    content: s,
                    className: l,
                    asPartialPreview: !0,
                  })),
          g
            ? (c = (0, a.jsx)(_.default, { className: u, width: d, height: d }))
            : f
              ? (c = (0, a.jsx)(C.default, {
                  className: u,
                  width: d,
                  height: d,
                }))
              : p
                ? (c = (0, a.jsx)(v.default, {
                    className: u,
                    width: d * (19 / 24),
                    height: d,
                  }))
                : (e.attachments.length > 0 || e.embeds.length > 0) &&
                  (c = (0, a.jsx)(m.default, {
                    className: u,
                    width: d,
                    height: d,
                  })),
          { contentPlaceholder: r, renderedContent: i, icon: c }
        );
      }
      function y(e) {
        let s;
        let {
            repliedAuthor: t,
            baseAuthor: n,
            baseMessage: i,
            referencedMessage: M,
            renderPopout: C,
          } = e,
          m = l.useMemo(
            () =>
              null != C && M.state === p.ReferencedMessageState.LOADED
                ? e => C(e, M.message)
                : void 0,
            [M, C]
          ),
          v = l.useContext(d.default),
          _ = (function (e, s, t) {
            let {
              referencedMessage: l,
              compact: n,
              isReplyAuthorBlocked: i,
              repliedAuthor: c,
              showAvatarPopout: d,
              onClickAvatar: o,
              onContextMenu: h,
              onPopoutRequestClose: g,
            } = e;
            if (n || l.state !== p.ReferencedMessageState.LOADED || i)
              return (0, a.jsx)("div", {
                className: P.replyBadge,
                children: (0, a.jsx)(j, { className: P.replyIcon }),
              });
            if (
              l.message.type === A.MessageTypes.USER_JOIN ||
              l.message.type === A.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE ||
              l.message.type === A.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT ||
              l.message.type === A.MessageTypes.GUILD_GAMING_STATS_PROMPT
            )
              return (0, a.jsx)(O, { className: P.userJoinSystemMessageIcon });
            if (
              l.message.type ===
              A.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION
            )
              return (0, a.jsx)(T.default, { className: P.ticketIcon });
            let f = () => {
              var e, t, n, i, u;
              return (
                (e = l.message.author),
                (t = c),
                (n = s),
                (i = o),
                (u = h),
                (0, a.jsx)("img", {
                  alt: "",
                  src:
                    (null == t ? void 0 : t.guildMemberAvatar) != null &&
                    null != n
                      ? (0, N.getGuildMemberAvatarURLSimple)({
                          guildId: n,
                          userId: e.id,
                          avatar: t.guildMemberAvatar,
                        })
                      : e.getAvatarURL(n, 16),
                  onClick: i,
                  onContextMenu: u,
                  className: r({
                    [P.replyAvatar]: !0,
                    [P.clickable]: null != i,
                  }),
                })
              );
            };
            return null != t && null != d
              ? (0, a.jsx)(u.Popout, {
                  renderPopout: t,
                  shouldShow: d,
                  position: "right",
                  onRequestClose: g,
                  children: f,
                })
              : f();
          })(e, v, m),
          R = (function (e, s) {
            let {
                baseMessage: t,
                channel: l,
                referencedMessage: n,
                showUsernamePopout: r,
                onClickUsername: i,
                onContextMenu: c,
                onPopoutRequestClose: u,
              } = e,
              d =
                (null == n ? void 0 : n.state) ===
                p.ReferencedMessageState.LOADED
                  ? n.message
                  : void 0;
            return null == d ||
              d.type === A.MessageTypes.USER_JOIN ||
              d.type === A.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE ||
              d.type ===
                A.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
              d.type === A.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT ||
              d.type === A.MessageTypes.GUILD_GAMING_STATS_PROMPT
              ? null
              : (0, a.jsx)(h.default, {
                  message: d,
                  channel: l,
                  compact: !0,
                  withMentionPrefix: (0, E.default)(t, d),
                  showPopout: r,
                  renderPopout: s,
                  onClick: i,
                  onContextMenu: c,
                  onPopoutRequestClose: u,
                  isRepliedMessage: !0,
                });
          })(e, m),
          y = (function (e) {
            let {
                content: s,
                referencedMessage: t,
                isReplyAuthorBlocked: l,
              } = e,
              n =
                t.state !== p.ReferencedMessageState.DELETED
                  ? e.onClickReply
                  : void 0;
            switch (t.state) {
              case p.ReferencedMessageState.LOADED: {
                let {
                    contentPlaceholder: e,
                    renderedContent: i,
                    icon: c,
                  } = w(t.message, s, l, P.repliedTextContent, {
                    iconClass: P.repliedTextContentIcon,
                    iconSize: I.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE,
                  }),
                  d = t.message.isPoll()
                    ? (0, a.jsx)(f.default, { className: P.pollBadgeReplied })
                    : null;
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(u.Clickable, {
                      className: r(P.repliedTextPreview, P.clickable),
                      onClick: n,
                      children: (0, a.jsx)(u.BlockInteractions, {
                        children:
                          null != i
                            ? i
                            : (0, a.jsx)("span", {
                                className: P.repliedTextPlaceholder,
                                children: e,
                              }),
                      }),
                    }),
                    c,
                    d,
                  ],
                });
              }
              case p.ReferencedMessageState.NOT_LOADED:
                return (0, a.jsx)(u.Clickable, {
                  className: r(P.repliedTextPreview, P.clickable),
                  onClick: n,
                  children: (0, a.jsx)("span", {
                    className: P.repliedTextPlaceholder,
                    children: L.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED,
                  }),
                });
              case p.ReferencedMessageState.DELETED:
                return (0, a.jsx)("div", {
                  className: P.repliedTextPreview,
                  children: (0, a.jsx)("span", {
                    className: P.repliedTextPlaceholder,
                    children: L.default.Messages.REPLY_QUOTE_MESSAGE_DELETED,
                  }),
                });
              default:
                (0, S.assertNever)(t);
            }
          })(e),
          D = l.useMemo(
            () =>
              e.compact ? (0, g.default)((0, x.dateFormat)(c(), "LT")) : null,
            [e.compact]
          );
        return (
          null != t &&
            null != n &&
            (s = L.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
              author: null == n ? void 0 : n.nick,
              repliedAuthor: null == t ? void 0 : t.nick,
            })),
          (0, a.jsxs)("div", {
            id: (0, o.getMessageReplyId)(i),
            className: r(P.repliedMessage, D),
            "aria-label": s,
            children: [_, R, y],
          })
        );
      }
    },
    886181: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          MicrophoneIcon: function () {
            return r;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        n = t("82169");
      let r = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: i,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: i,
            }),
          ],
        });
      };
    },
    358931: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          StickerSmallIcon: function () {
            return r;
          },
        });
      var a = t("37983");
      t("884691");
      var l = t("669491"),
        n = t("82169");
      let r = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: r = l.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...c
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              fillRule: "evenodd",
              d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
              clipRule: "evenodd",
              className: i,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z",
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=ad7cc88775df240d2418.js.map

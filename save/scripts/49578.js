(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49578"],
  {
    696675: function (e, s, t) {
      "use strict";
      t.r(s);
      var l = t("886181");
      t.es(l, s);
    },
    126489: function (e, s, t) {
      "use strict";
      t.r(s);
      var l = t("358931");
      t.es(l, s);
    },
    14526: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return r;
          },
        });
      var l = t("37983");
      t("884691");
      var a = t("473374"),
        n = t("195483"),
        i = t("574073");
      function r(e) {
        var s, t;
        let r = (0, i.default)(e.message),
          c = (0, a.renderSystemTag)({
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
          (0, l.jsx)(n.default, { ...e, author: r, decorations: u })
        );
      }
    },
    862846: function (e, s, t) {
      "use strict";
      function l(e, s) {
        return !!(null != s && e.mentions.includes(s.author.id)) || !1;
      }
      t.r(s),
        t.d(s, {
          default: function () {
            return l;
          },
        });
    },
    943409: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return r;
          },
        });
      var l = t("37983");
      t("884691");
      var a = t("469563"),
        n = t("696675"),
        i = t("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: s = 19,
              height: t = 24,
              color: a = "currentColor",
              foreground: n,
              ...r
            } = e;
            return (0, l.jsx)("svg", {
              ...(0, i.default)(r),
              width: s,
              height: t,
              viewBox: "0 0 19 24",
              fill: "none",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.7036 11C12.7036 12.66 11.2786 14 9.5 14C7.72143 14 6.28571 12.66 6.28571 11V5C6.28571 3.34 7.72143 2 9.5 2C11.2786 2 12.7143 3.34 12.7143 5L12.7036 11ZM9.5 16.1C12.4571 16.1 15.1786 14 15.1786 11H17C17 14.42 14.0857 17.24 10.5714 17.72V22H8.42857V17.72C4.91429 17.23 2 14.41 2 11H3.82143C3.82143 14 6.54286 16.1 9.5 16.1Z",
                fill: a,
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
            return r;
          },
        });
      var l = t("37983");
      t("884691");
      var a = t("469563"),
        n = t("126489"),
        i = t("75196"),
        r = (0, a.replaceIcon)(
          function (e) {
            let {
              width: s = 16,
              height: t = 16,
              color: a = "currentColor",
              ...n
            } = e;
            return (0, l.jsx)("svg", {
              width: s,
              height: t,
              ...(0, i.default)(n),
              viewBox: "0 0 16 16",
              children: (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.20038 2.39762V5.24178C9.20038 6.10455 9.89673 6.80072 10.7597 6.80072H13.6046C13.9558 6.80072 14.1343 6.37826 13.8844 6.12835L9.87292 2.11796C9.62295 1.86806 9.20038 2.04061 9.20038 2.39762ZM10.7461 8.01794C9.22044 8.01794 7.98197 6.77947 7.98197 5.25382V2.03499H3.19561C2.53749 2.03499 1.99902 2.57346 1.99902 3.23158V12.8043C1.99902 13.4624 2.53749 14.0009 3.19561 14.0009H12.7683C13.4265 14.0009 13.9649 13.4624 13.9649 12.8043V8.01794H10.7461ZM9.80015 9C9.80015 9.99411 8.99427 10.8 8.00015 10.8C7.00604 10.8 6.20015 9.99411 6.20015 9H5.00015C5.00015 10.6569 6.3433 12 8.00015 12C9.65701 12 11.0002 10.6569 11.0002 9H9.80015Z",
                fill: a,
              }),
            });
          },
          e => {
            let { width: s = 16, height: t = 16, ...a } = e;
            return (0, l.jsx)(n.StickerSmallIcon, {
              width: s,
              height: t,
              ...a,
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
            return D;
          },
          default: function () {
            return U;
          },
        });
      var l = t("37983"),
        a = t("884691"),
        n = t("414456"),
        i = t.n(n),
        r = t("866227"),
        c = t.n(r),
        u = t("77078"),
        d = t("812204"),
        o = t("685665"),
        h = t("390236"),
        f = t("865343"),
        g = t("14526"),
        p = t("38600"),
        E = t("119001"),
        M = t("256572"),
        C = t("862846"),
        v = t("24373"),
        m = t("83910"),
        _ = t("95689"),
        T = t("943409"),
        x = t("437472"),
        N = t("8161"),
        S = t("315102"),
        R = t("888400"),
        A = t("449008"),
        I = t("497880"),
        L = t("719347"),
        P = t("49111"),
        j = t("782340"),
        O = t("356296");
      function y(e) {
        let {
          width: s = 12,
          height: t = 8,
          color: a = "currentColor",
          className: n,
          foreground: i,
        } = e;
        return (0, l.jsx)("svg", {
          className: n,
          width: s,
          height: t,
          viewBox: "0 0 12 8",
          children: (0, l.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: i,
            fill: a,
          }),
        });
      }
      function w(e) {
        let { width: s = 18, height: t = 18, className: a, foreground: n } = e;
        return (0, l.jsx)("svg", {
          className: a,
          width: s,
          height: t,
          viewBox: "0 0 18 18",
          children: (0, l.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: n,
          }),
        });
      }
      function D(e, s, t, a, n) {
        let i, r, c;
        let { iconClass: u, iconSize: d } = n,
          o = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
          h = (0, v.getMessageStickers)(e),
          f = h.length > 0,
          g = null != e.interaction,
          p = e.hasFlag(P.MessageFlags.IS_VOICE_MESSAGE),
          M = e.isPoll();
        if (t) i = j.default.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
        else if (e.type === P.MessageTypes.CHANNEL_PINNED_MESSAGE)
          i = j.default.Messages.MESSAGE_PINNED;
        else if (o) {
          if (M) {
            var C, N;
            r =
              null == e
                ? void 0
                : null === (N = e.poll) || void 0 === N
                  ? void 0
                  : null === (C = N.question) || void 0 === C
                    ? void 0
                    : C.text;
          } else
            f
              ? (i = j.default.Messages.REPLY_QUOTE_STICKER)
              : g
                ? (i = j.default.Messages.REPLY_QUOTE_COMMAND)
                : p
                  ? (i = j.default.Messages.REPLY_QUOTE_VOICE_MESSAGE)
                  : ((i = j.default.Messages.REPLY_QUOTE_NO_TEXT_CONTENT),
                    (c = (0, l.jsx)(_.default, {
                      className: u,
                      width: d,
                      height: d,
                    })));
        } else
          r = (0, l.jsx)(I.default, { message: e, content: s, className: a });
        return (
          M
            ? (c = (0, l.jsx)(E.default, { className: O.pollBadgeReplied }))
            : f
              ? (c = (0, l.jsx)(x.default, {
                  className: u,
                  width: d,
                  height: d,
                }))
              : g
                ? (c = (0, l.jsx)(m.default, {
                    className: u,
                    width: d,
                    height: d,
                  }))
                : p
                  ? (c = (0, l.jsx)(T.default, {
                      className: u,
                      width: d * (19 / 24),
                      height: d,
                    }))
                  : (e.attachments.length > 0 || e.embeds.length > 0) &&
                    (c = (0, l.jsx)(_.default, {
                      className: u,
                      width: d,
                      height: d,
                    })),
          { contentPlaceholder: i, renderedContent: r, icon: c }
        );
      }
      function U(e) {
        let s;
        let {
            repliedAuthor: t,
            baseAuthor: n,
            baseMessage: r,
            referencedMessage: E,
            renderPopout: v,
          } = e,
          m = a.useMemo(
            () =>
              null != v && E.state === M.ReferencedMessageState.LOADED
                ? e => v(e, E.message)
                : void 0,
            [E, v]
          ),
          _ = a.useContext(h.default),
          T = (function (e, s, t) {
            let {
                referencedMessage: a,
                compact: n,
                isReplyAuthorBlocked: r,
                repliedAuthor: c,
                showAvatarPopout: h,
                onClickAvatar: f,
                onContextMenu: g,
                onPopoutRequestClose: p,
              } = e,
              { analyticsLocations: E } = (0, o.default)(d.default.AVATAR);
            if (n || a.state !== M.ReferencedMessageState.LOADED || r)
              return (0, l.jsx)("div", {
                className: O.replyBadge,
                children: (0, l.jsx)(y, { className: O.replyIcon }),
              });
            if (
              a.message.type === P.MessageTypes.USER_JOIN ||
              a.message.type === P.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE ||
              a.message.type === P.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT ||
              a.message.type === P.MessageTypes.GUILD_GAMING_STATS_PROMPT
            )
              return (0, l.jsx)(w, { className: O.userJoinSystemMessageIcon });
            if (
              a.message.type ===
              P.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION
            )
              return (0, l.jsx)(N.default, { className: O.ticketIcon });
            let C = () => {
              var e, t, n, r, u;
              return (
                (e = a.message.author),
                (t = c),
                (n = s),
                (r = f),
                (u = g),
                (0, l.jsx)("img", {
                  alt: "",
                  src:
                    (null == t ? void 0 : t.guildMemberAvatar) != null &&
                    null != n
                      ? (0, S.getGuildMemberAvatarURLSimple)({
                          guildId: n,
                          userId: e.id,
                          avatar: t.guildMemberAvatar,
                        })
                      : e.getAvatarURL(n, 16),
                  onClick: r,
                  onContextMenu: u,
                  className: i({
                    [O.replyAvatar]: !0,
                    [O.clickable]: null != r,
                  }),
                })
              );
            };
            return null != t && null != h
              ? (0, l.jsx)(o.AnalyticsLocationProvider, {
                  value: E,
                  children: (0, l.jsx)(u.Popout, {
                    renderPopout: t,
                    shouldShow: h,
                    position: "right",
                    onRequestClose: p,
                    children: C,
                  }),
                })
              : (0, l.jsx)(o.AnalyticsLocationProvider, {
                  value: E,
                  children: C(),
                });
          })(e, _, m),
          x = (function (e, s) {
            let {
                baseMessage: t,
                channel: a,
                referencedMessage: n,
                showUsernamePopout: i,
                onClickUsername: r,
                onContextMenu: c,
                onPopoutRequestClose: u,
              } = e,
              d =
                (null == n ? void 0 : n.state) ===
                M.ReferencedMessageState.LOADED
                  ? n.message
                  : void 0;
            return null == d ||
              d.type === P.MessageTypes.USER_JOIN ||
              d.type === P.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE ||
              d.type ===
                P.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
              d.type === P.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT ||
              d.type === P.MessageTypes.GUILD_GAMING_STATS_PROMPT
              ? null
              : (0, l.jsx)(g.default, {
                  message: d,
                  channel: a,
                  compact: !0,
                  withMentionPrefix: (0, C.default)(t, d),
                  showPopout: i,
                  renderPopout: s,
                  onClick: r,
                  onContextMenu: c,
                  onPopoutRequestClose: u,
                  isRepliedMessage: !0,
                });
          })(e, m),
          I = (function (e) {
            let {
                content: s,
                referencedMessage: t,
                isReplyAuthorBlocked: a,
              } = e,
              n =
                t.state !== M.ReferencedMessageState.DELETED
                  ? e.onClickReply
                  : void 0;
            switch (t.state) {
              case M.ReferencedMessageState.LOADED: {
                let {
                  contentPlaceholder: e,
                  renderedContent: r,
                  icon: c,
                } = D(t.message, s, a, O.repliedTextContent, {
                  iconClass: O.repliedTextContentIcon,
                  iconSize: L.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE,
                });
                return (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(u.Clickable, {
                      className: i(O.repliedTextPreview, O.clickable),
                      onClick: n,
                      children: (0, l.jsx)(u.BlockInteractions, {
                        children:
                          null != r
                            ? r
                            : (0, l.jsx)("span", {
                                className: O.repliedTextPlaceholder,
                                children: e,
                              }),
                      }),
                    }),
                    c,
                  ],
                });
              }
              case M.ReferencedMessageState.NOT_LOADED:
                return (0, l.jsx)(u.Clickable, {
                  className: i(O.repliedTextPreview, O.clickable),
                  onClick: n,
                  children: (0, l.jsx)("span", {
                    className: O.repliedTextPlaceholder,
                    children: j.default.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED,
                  }),
                });
              case M.ReferencedMessageState.DELETED:
                return (0, l.jsx)("div", {
                  className: O.repliedTextPreview,
                  children: (0, l.jsx)("span", {
                    className: O.repliedTextPlaceholder,
                    children: j.default.Messages.REPLY_QUOTE_MESSAGE_DELETED,
                  }),
                });
              default:
                (0, A.assertNever)(t);
            }
          })(e),
          U = a.useMemo(
            () =>
              e.compact ? (0, p.default)((0, R.dateFormat)(c(), "LT")) : null,
            [e.compact]
          );
        return (
          null != t &&
            null != n &&
            (s = j.default.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
              author: null == n ? void 0 : n.nick,
              repliedAuthor: null == t ? void 0 : t.nick,
            })),
          (0, l.jsxs)("div", {
            id: (0, f.getMessageReplyId)(r),
            className: i(O.repliedMessage, U),
            "aria-label": s,
            children: [T, x, I],
          })
        );
      }
    },
    886181: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          MicrophoneIcon: function () {
            return i;
          },
        });
      var l = t("37983");
      t("884691");
      var a = t("669491"),
        n = t("82169");
      let i = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: r,
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
            return i;
          },
        });
      var l = t("37983");
      t("884691");
      var a = t("669491"),
        n = t("82169");
      let i = e => {
        let {
          width: s = 24,
          height: t = 24,
          color: i = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: r = "",
          ...c
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, n.default)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: s,
          height: t,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              fillRule: "evenodd",
              d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
              clipRule: "evenodd",
              className: r,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof i ? i : i.css,
              d: "M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=d9c9552c13b88e7fb4e1.js.map

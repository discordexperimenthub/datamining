(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88081"],
  {
    929887: function (e, t, n) {
      "use strict";
      e.exports = n.p + "b024d0fd63aa42ba8670.png";
    },
    167115: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("42564");
      n.es(a, t);
    },
    25116: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("49111");
      function s(e) {
        return e.type === a.MessageTypes.DEFAULT && null != e.messageReference;
      }
    },
    500858: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        }),
        n("702976");
      var a = n("568734"),
        s = n("49111"),
        r = e =>
          null != e &&
          null != e.attachments &&
          !(e.attachments.length < 1) &&
          e.attachments.some(
            e =>
              null != e.flags &&
              (0, a.hasFlag)(e.flags, s.MessageAttachmentFlags.IS_REMIX)
          );
    },
    95045: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
          renderAutomodMessageMarkup: function () {
            return c;
          },
        }),
        n("222007"),
        n("781738"),
        n("355025");
      var a = n("312016"),
        s = n("367376"),
        r = n("240873"),
        i = n("49111");
      let l = new Set([i.MessageEmbedTypes.IMAGE, i.MessageEmbedTypes.GIFV]),
        o = new Set([
          "strong",
          "em",
          "u",
          "text",
          "inlineCode",
          "s",
          "spoiler",
        ]);
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.formatInline ? s.default.parseInlineReply : s.default.parse;
        return (function (e, t, n) {
          var s, i;
          let {
              toAST: u = !1,
              hideSimpleEmbedContent: c = !0,
              formatInline: f = !1,
              postProcessor: g,
            } = n,
            p = !1;
          let E = e(
            t.content,
            !0,
            ((s = t),
            (i = n),
            {
              allowLinks: null != s.webhookId || !!i.allowLinks,
              allowEmojiLinks: null != s.webhookId,
              channelId: s.channel_id,
              messageId: s.id,
              mentionChannels: s.mentionChannels,
              isInteracting: !!i.isInteracting,
              formatInline: !!i.formatInline,
              noStyleAndInteraction: !!i.noStyleAndInteraction,
              allowHeading: !!i.allowHeading,
              allowList: !!i.allowList,
              previewLinkTarget: !!i.previewLinkTarget,
              disableAnimatedEmoji: !!i.disableAnimatedEmoji,
              disableAutoBlockNewlines: !0,
              muted: !1,
            }),
            (e, n) => (
              !Array.isArray(e) && (e = [e]),
              c &&
                (e = (function (e, t) {
                  if (1 !== e.length || 1 !== t.length) return e;
                  let n = e[0],
                    a = t[0];
                  return ("link" === n.type || "attachmentLink" === n.type) &&
                    l.has(a.type) &&
                    (0, r.isEmbedInline)(a)
                    ? []
                    : e;
                })(e, t.embeds)),
              !f &&
                (e = (function (e, t) {
                  return t
                    ? d(e)
                    : ("paragraph" === e[0].type &&
                        e[0].content instanceof Array &&
                        (e[0].content = d(e[0].content)),
                      e);
                })(e, n)),
              (p = (function (e, t) {
                return t
                  ? m(e)
                  : "paragraph" === e[0].type &&
                      e[0].content instanceof Array &&
                      m(e[0].content);
              })(
                (e = (function (e) {
                  let t = e.some(e => "link" !== e.type || !1);
                  return e.filter(e => {
                    let n = "link" === e.type,
                      s = (0, a.parseQuestsEmbedCode)(e.target);
                    return !(n && null != s && !t);
                  });
                })(e)),
                n
              )),
              f &&
                (e = (function e(t) {
                  return (
                    t.forEach(t => {
                      o.has(t.type) &&
                        null != t.content &&
                        (Array.isArray(t.content)
                          ? e(t.content)
                          : (t.content = t.content.replace(/\n/g, " ")));
                    }),
                    t
                  );
                })(e)),
              null != g && (e = g(e, n)),
              e
            )
          );
          return { hasSpoilerEmbeds: p, content: E };
        })(n, e, t);
      }
      function c(e, t, n) {
        var a;
        return (
          (a = s.default.parseAutoModerationSystemMessage),
          a(
            e,
            !0,
            {
              allowLinks: !1,
              allowEmojiLinks: !1,
              mentionChannels: [],
              isInteracting: !1,
              formatInline: !1,
              noStyleAndInteraction: !1,
              allowHeading: !1,
              allowList: !1,
              disableAutoBlockNewlines: !0,
              highlightWord: t,
              disableAnimatedEmoji: !1,
              channelId: n,
              muted: !1,
            },
            e => (!Array.isArray(e) && (e = [e]), e)
          )
        );
      }
      function d(e) {
        let t = e.some(
          e =>
            "emoji" !== e.type &&
            "customEmoji" !== e.type &&
            "soundboard" !== e.type &&
            ("string" != typeof e.content || "" !== e.content.trim()) &&
            !0
        );
        if (t) return e;
        let n = 0;
        return (e.forEach(e => {
          if (
            (("emoji" === e.type ||
              "customEmoji" === e.type ||
              "soundboard" === e.type) &&
              (n += 1),
            n > 30)
          )
            return !1;
        }),
        n > 30)
          ? e
          : (e.forEach(e => {
              e.jumboable = !0;
            }),
            e);
      }
      function m(e) {
        return e.some(
          e =>
            "spoiler" === e.type &&
            Array.isArray(e.content) &&
            e.content.some(
              e => "link" === e.type || "attachmentLink" === e.type
            )
        );
      }
    },
    865343: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getMessageContentId: function () {
            return i;
          },
          getMessageReplyId: function () {
            return l;
          },
          getMessageUsernameId: function () {
            return o;
          },
          getMessageTimestampId: function () {
            return u;
          },
          getMessageReactionsId: function () {
            return c;
          },
          getMessageAccessoriesId: function () {
            return d;
          },
          getMessageAriaLabelledBy: function () {
            return m;
          },
          getMessageAriaDescribedBy: function () {
            return f;
          },
        });
      var a = n("862013"),
        s = n("913491"),
        r = n("49111");
      function i(e) {
        return "message-content-".concat(e.id);
      }
      function l(e) {
        return "message-reply-context-".concat(e.id);
      }
      function o(e, t) {
        let n = null != t ? t : e.id;
        return "message-username-".concat(n);
      }
      function u(e) {
        return "message-timestamp-".concat(e.id);
      }
      function c(e) {
        return "message-reactions-".concat(e.id);
      }
      function d(e) {
        return "message-accessories-".concat(e.id);
      }
      function m(e, t, n) {
        let c = e.type === r.MessageTypes.REPLY && null != e.messageReference,
          m = e.embeds.length > 0,
          f = e.attachments.length > 0,
          g = e.stickerItems.length > 0,
          p = e.codedLinks.length > 0,
          E = e.hasFlag(r.MessageFlags.HAS_THREAD),
          A = m || f || g || p || E || e.type === r.MessageTypes.THREAD_CREATED,
          S =
            m &&
            e.content === e.embeds[0].url &&
            e.embeds[0].type === r.MessageEmbedTypes.GIFV,
          h = e.type !== r.MessageTypes.DEFAULT || (!S && "" !== e.content),
          I = (0, s.default)(e),
          T = !I && (null == n ? void 0 : n.hasTimestamp) !== !1,
          y = o(e, t),
          M = l(e),
          x = I
            ? ""
            : ""
                .concat(c ? M : y, " ")
                .concat(a.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
        if (h) {
          let t = i(e);
          x += " ".concat(t);
        }
        if (A) {
          let t = d(e);
          x += " ".concat(t);
        }
        if (T) {
          let t = u(e);
          x += " "
            .concat(a.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ")
            .concat(t);
        }
        return x.trim();
      }
      function f(e) {
        if (0 === e.reactions.length) return;
        let t = c(e);
        return "".concat(a.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t);
      }
    },
    38600: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n("356296");
      let s = {
          LATIN12: a.latin12CompactTimeStamp,
          LATIN24: a.latin24CompactTimeStamp,
          ASIAN: a.asianCompactTimeStamp,
        },
        r = /(AM|PM)$/;
      function i(e) {
        return null != e.match(r)
          ? s.LATIN24
          : e.length <= 5
            ? s.LATIN12
            : s.ASIAN;
      }
    },
    119001: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        r = n.n(s),
        i = n("167115"),
        l = n("77078"),
        o = n("956089"),
        u = n("782340"),
        c = n("320692");
      function d(e) {
        let { className: t } = e;
        return (0, a.jsx)(o.TextBadge, {
          className: r(t, c.badge),
          disableColor: !0,
          text: (0, a.jsxs)("div", {
            className: c.innerBadge,
            children: [
              (0, a.jsx)(i.PollsIcon, {
                className: c.icon,
                color: l.tokens.colors.INTERACTIVE_ACTIVE,
              }),
              (0, a.jsx)(l.Text, {
                variant: "text-xs/semibold",
                color: "interactive-active",
                children: u.default.Messages.POLL,
              }),
            ],
          }),
        });
      }
    },
    730541: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isPublicSystemMessage: function () {
            return u;
          },
          getPublicSystemMessageAvatar: function () {
            return c;
          },
          trackEnableCommunityFlow: function () {
            return d;
          },
        });
      var a = n("716241"),
        s = n("25116"),
        r = n("599110"),
        i = n("69741"),
        l = n("49111"),
        o = n("929887");
      function u(e) {
        return (
          ((0, s.default)(e) &&
            e.messageReference.guild_id ===
              i.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID) ||
          (null != e.author &&
            e.author.id === i.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID)
        );
      }
      function c() {
        return o;
      }
      let d = e => {
        r.default.track(l.AnalyticEvents.USER_FLOW_TRANSITION, {
          flow_type: i.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
          from_step: e.fromStep,
          to_step: e.toStep,
          ...(0, a.collectGuildAnalyticsMetadata)(e.guildId),
        });
      };
    },
    238956: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanSeeRemixBadge: function () {
            return r;
          },
          useIsRemixANitroPerk: function () {
            return i;
          },
        }),
        n("685665");
      var a = n("862205");
      let s = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08_remix_ga",
        label: "Remix General Available",
        defaultConfig: { canSeeRemixBadge: !1, canRemix: !1, isNitroPerk: !1 },
        treatments: [
          {
            id: 1,
            label: "Remix for Nitro Subscribers",
            config: { canSeeRemixBadge: !0, canRemix: !0, isNitroPerk: !0 },
          },
          {
            id: 3,
            label: "Upsell Remix for Non-Nitro Users",
            config: { canSeeRemixBadge: !0, canRemix: !1, isNitroPerk: !0 },
          },
          {
            id: 5,
            label: "Remix GA for everyone",
            config: { canSeeRemixBadge: !0, canRemix: !0, isNitroPerk: !1 },
          },
        ],
      });
      function r() {
        return s.useExperiment(
          { location: "canSeeRemixBadge" },
          { autoTrackExposure: !0 }
        ).canSeeRemixBadge;
      }
      function i() {
        return !!s.useExperiment(
          { location: "isRemixANitroPerkHook" },
          { autoTrackExposure: !0 }
        ).isNitroPerk;
      }
    },
    497880: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getContent: function () {
            return E;
          },
          memoizeMessageProps: function () {
            return A;
          },
          default: function () {
            return S;
          },
        });
      var a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        i = n.n(r),
        l = n("717837"),
        o = n.n(l),
        u = n("233736"),
        c = n("865343"),
        d = n("587904"),
        m = n("49111"),
        f = n("782340"),
        g = n("919163"),
        p = n("356296");
      function E(e, t) {
        return e.type === m.MessageTypes.VOICE_HANGOUT_INVITE
          ? ""
          : e.hasFlag(m.MessageFlags.SOURCE_MESSAGE_DELETED)
            ? f.default.Messages.SOURCE_MESSAGE_DELETED
            : t;
      }
      function A(e, t) {
        var n, a;
        let { message: s } = t,
          { message: r } = e;
        return (
          (0, u.default)(e, t, ["message"]) &&
          s.content === r.content &&
          s.state === r.state &&
          (null === (n = s.editedTimestamp) || void 0 === n
            ? void 0
            : n.toString()) ===
            (null === (a = r.editedTimestamp) || void 0 === a
              ? void 0
              : a.toString())
        );
      }
      var S = s.memo(function (e) {
        var t;
        let {
            className: n,
            message: r,
            children: l,
            content: u,
            onUpdate: A,
            contentRef: S,
          } = e,
          h = r.isEdited(),
          I = r.state === m.MessageStates.SEND_FAILED,
          T = r.state === m.MessageStates.SENDING,
          y = r.isCommandType(),
          M =
            null === (t = r.editedTimestamp) || void 0 === t
              ? void 0
              : t.toString(),
          x = s.useRef(!1);
        return (
          s.useLayoutEffect(() => {
            x.current ? null != A && A() : (x.current = !0);
          }, [A, r.content, u, M, l]),
          (0, a.jsxs)("div", {
            id: (0, c.getMessageContentId)(r),
            ref: S,
            className: i(n, g.markup, {
              [p.messageContent]: !0,
              [p.isSending]: T && !y,
              [p.markupRtl]: "rtl" === o(r.content),
              [p.isFailed]: I,
            }),
            children: [
              null != l ? l : E(r, u),
              h &&
                null != r.editedTimestamp &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    " ",
                    (0, a.jsx)(d.default, {
                      timestamp: r.editedTimestamp,
                      isEdited: !0,
                      isInline: !1,
                      children: (0, a.jsxs)("span", {
                        className: p.edited,
                        children: ["(", f.default.Messages.MESSAGE_EDITED, ")"],
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      }, A);
    },
    587904: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("414456"),
        r = n.n(s),
        i = n("77078"),
        l = n("38600"),
        o = n("888400"),
        u = n("782340"),
        c = n("356296"),
        d = function (e) {
          let {
              children: t,
              className: n,
              compact: s = !1,
              timestamp: d,
              isVisibleOnlyOnHover: m = !1,
              cozyAlt: f = !1,
              isInline: g = !0,
              id: p,
              isEdited: E = !1,
            } = e,
            A = (0, o.accessibilityLabelCalendarFormat)(d),
            S = s ? (0, o.dateFormat)(d, "LT") : (0, o.calendarFormat)(d),
            h = s ? (0, l.default)(S) : null,
            I = E
              ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                  timeFormatted: A,
                })
              : A;
          return (0, a.jsx)("span", {
            className: r(n, h, {
              [c.timestamp]: !0,
              [c.timestampVisibleOnHover]: m,
              [c.timestampInline]: g,
              [c.alt]: f,
            }),
            children: (0, a.jsx)(i.Tooltip, {
              text: (0, o.dateFormat)(d, "LLLL"),
              "aria-label": I,
              tooltipClassName: c.timestampTooltip,
              delay: 750,
              children: e =>
                (0, a.jsx)("time", {
                  ...e,
                  id: p,
                  dateTime: d.toISOString(),
                  children:
                    null != t
                      ? t
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("i", {
                              className: c.separator,
                              "aria-hidden": !0,
                              children: s ? "[" : " — ",
                            }),
                            S,
                            s &&
                              (0, a.jsxs)("i", {
                                className: c.separator,
                                "aria-hidden": !0,
                                children: ["]", " "],
                              }),
                          ],
                        }),
                }),
            }),
          });
        };
    },
    473374: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          renderSystemTag: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("25116"),
        r = n("730541"),
        i = n("79798"),
        l = n("356296");
      function o(e) {
        let t,
          {
            message: n,
            channel: o,
            user: u,
            compact: c,
            isRepliedMessage: d,
            hideIcon: m = !1,
            children: f,
          } = e;
        return ((null == n ? void 0 : n.isSystemDM())
          ? (t = i.default.Types.SYSTEM_DM)
          : null != n && (0, s.default)(n)
            ? (t = (0, r.isPublicSystemMessage)(n)
                ? i.default.Types.OFFICIAL
                : i.default.Types.SERVER)
            : (null == u ? void 0 : u.bot)
              ? (t = i.default.Types.BOT)
              : null != o &&
                o.isForumPost() &&
                o.ownerId === (null == u ? void 0 : u.id) &&
                !d &&
                (t = i.default.Types.ORIGINAL_POSTER),
        null == t)
          ? null
          : (0, a.jsx)(i.default, {
              className: c ? l.botTagCompact : l.botTagCozy,
              type: t,
              verified: null == u ? void 0 : u.isVerifiedBot(),
              hideIcon: m,
              useRemSizes: !0,
              children: f,
            });
      }
    },
    195483: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          UsernameDecorationTypes: function () {
            return s;
          },
          default: function () {
            return M;
          },
        });
      var a,
        s,
        r = n("37983"),
        i = n("884691"),
        l = n("414456"),
        o = n.n(l),
        u = n("394846"),
        c = n("446674"),
        d = n("77078"),
        m = n("206230"),
        f = n("812204"),
        g = n("685665"),
        p = n("390236"),
        E = n("500858"),
        A = n("238956"),
        S = n("506885"),
        h = n("79798"),
        I = n("315102"),
        T = n("356296");
      function y(e) {
        let { compact: t } = e;
        return (0, r.jsx)(h.default, {
          className: t ? T.botTagCompact : T.botTagCozy,
          type: h.default.Types.REMIX,
          useRemSizes: !0,
        });
      }
      function M(e) {
        let t,
          {
            author: n,
            message: a,
            userOverride: s,
            compact: l = !1,
            withMentionPrefix: h = !1,
            showPopout: M = !1,
            className: x,
            onClick: _,
            onContextMenu: N,
            onPopoutRequestClose: v,
            renderPopout: b,
            renderRemixTag: L = !1,
            decorations: R,
          } = e,
          k = i.useContext(p.default),
          { AnalyticsLocationProvider: C } = (0, g.default)(f.default.USERNAME),
          { nick: j, colorString: w, colorRoleName: D } = n,
          F = null != a.messageReference && null != a.webhookId,
          P = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
          B = (0, A.useCanSeeRemixBadge)(),
          G = {
            className: T.username,
            style: "username" === P && null != w ? { color: w } : void 0,
            onClick: _,
            onContextMenu: N,
            children: (h ? "@" : "") + j,
          };
        t =
          null != b && null != M
            ? (0, r.jsx)(d.Popout, {
                preload: F
                  ? void 0
                  : function () {
                      let e = null != s ? s : a.author;
                      return (0, S.default)(
                        e.id,
                        null != n.guildMemberAvatar && null != k
                          ? (0, I.getGuildMemberAvatarURLSimple)({
                              guildId: k,
                              userId: e.id,
                              avatar: n.guildMemberAvatar,
                              size: 80,
                            })
                          : e.getAvatarURL(k, 80),
                        { guildId: k, channelId: a.channel_id }
                      );
                    },
                renderPopout: b,
                shouldShow: M,
                position: u.isMobile ? "window_center" : "right",
                onRequestClose: v,
                children: e => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)(d.Clickable, {
                    tag: "span",
                    ...n,
                    ...G,
                    className: o(G.className, T.clickable, x),
                  });
                },
              })
            : (0, r.jsx)(d.Clickable, { ...G, className: o(G.className, x) });
        let U = null != R ? R[0] : null,
          O = null != R ? R[1] : null;
        return (0, r.jsxs)(C, {
          children: [
            null != U && l
              ? (0, r.jsxs)(r.Fragment, { children: [" ", U, " "] })
              : null,
            "dot" === P
              ? (0, r.jsx)(d.RoleDot, {
                  color: w,
                  name: D,
                  className: T.roleDot,
                })
              : null,
            t,
            null != O ? (0, r.jsx)(r.Fragment, { children: O }) : null,
            null == U || l ? null : U,
            null != a && (0, E.default)(a) && B && L ? (0, r.jsx)(y, {}) : null,
          ],
        });
      }
      ((a = s || (s = {}))[(a.SYSTEM_TAG = 0)] = "SYSTEM_TAG"),
        (a[(a.BADGES = 1)] = "BADGES");
    },
    42564: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PollsIcon: function () {
            return i;
          },
        });
      var a = n("37983");
      n("884691");
      var s = n("669491"),
        r = n("82169");
      let i = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = s.default.colors.INTERACTIVE_NORMAL,
          colorClass: l = "",
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, r.default)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof i ? i : i.css,
            d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
            className: l,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=1b87a7960c10b0406bb6.js.map

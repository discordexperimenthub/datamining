(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64072"],
  {
    422475: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("606508");
      n.es(a, t);
    },
    14487: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("734382");
      n.es(a, t);
    },
    549990: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanGuildFeedFeatureChannel: function () {
            return c;
          },
        });
      var a = n("316693"),
        i = n("446674"),
        l = n("886484"),
        s = n("677315"),
        u = n("305961"),
        r = n("957255"),
        d = n("49111");
      let o = a.default.combine(
        d.Permissions.VIEW_CHANNEL,
        d.Permissions.MANAGE_MESSAGES,
        d.Permissions.READ_MESSAGE_HISTORY
      );
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.getGuildId(),
          a = (0, i.useStateFromStores)(
            [r.default],
            () => r.default.can(o, e),
            [e]
          ),
          c = (0, i.useStateFromStores)(
            [u.default],
            () => u.default.getGuild(n),
            [n]
          ),
          f = (0, s.useGuildHomeExperiment)(c, !1);
        return (
          !!(
            a &&
            null !== n &&
            f &&
            ((null != e.parentChannelThreadType &&
              d.ChannelTypesSets.GUILD_THREADS_ONLY.has(
                e.parentChannelThreadType
              )) ||
              t) &&
            (0, l.isChannelAvailableInGuildFeed)(e)
          ) || !1
        );
      }
    },
    530101: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983"),
        i = n("884691"),
        l = n("611221"),
        s = n("446674"),
        u = n("77078"),
        r = n("185014"),
        d = n("886484"),
        o = n("300322"),
        c = n("549990"),
        f = n("782340");
      function E(e, t) {
        let E = e.guild_id,
          M = i.useMemo(
            () => ({
              guildId: E,
              entity: e,
              entityType: l.GuildFeedItemTypes.FORUM_POST,
            }),
            [E, e]
          ),
          m = (0, s.useStateFromStores)(
            [r.default],
            () => r.default.getIsItemFeatured(M),
            [M]
          ),
          g = (0, o.useIsThreadModerator)(e),
          S = (0, c.useCanGuildFeedFeatureChannel)(e);
        return g && S
          ? m
            ? (0, a.jsx)(u.MenuItem, {
                id: "guild-feed-unfeature",
                label: f.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                action: () =>
                  (0, u.openModalLazy)(async () => {
                    let { UnfeatureItemConfirmationModal: e } = await n
                      .el("969715")
                      .then(n.bind(n, "969715"));
                    return t =>
                      (0, a.jsx)(e, {
                        featureableItem: M,
                        header:
                          f.default.Messages
                            .GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                        body: f.default.Messages
                          .GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
                        ...t,
                      });
                  }),
              })
            : (0, a.jsx)(u.MenuItem, {
                id: "guild-feed-feature",
                label: f.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                children: (0, d.getFeatureItemsTimes)().map(i => {
                  let { value: l, timePeriod: s } = i;
                  return (0, a.jsx)(
                    u.MenuItem,
                    {
                      id: "".concat(l),
                      label: (0, d.createFeatureItemsTimeLabel)(s),
                      action: () =>
                        (0, u.openModalLazy)(async () => {
                          let { FeatureForumPostConfirmationModal: i } = await n
                            .el("969715")
                            .then(n.bind(n, "969715"));
                          return n =>
                            (0, a.jsx)(i, {
                              thread: e,
                              guildId: E,
                              expiresSeconds: l,
                              timePeriod: s,
                              options: t,
                              ...n,
                            });
                        }),
                    },
                    l
                  );
                }),
              })
          : null;
      }
    },
    39393: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useExplicitMediaAttachmentsForMessage: function () {
            return s;
          },
          useExplicitMediaEmbedsForMessage: function () {
            return u;
          },
        });
      var a = n("65597"),
        i = n("377253"),
        l = n("447435");
      let s = (e, t, n) => {
          var s, u;
          let r = (0, a.default)([i.default], () => i.default.getMessage(e, t));
          if (null == r) return [];
          let d =
            void 0 !== n
              ? e => e.id === n
              : e =>
                  (0, l.isMediaObscured)(
                    { type: l.ObscuredMediaTypes.Attachment, media: e },
                    (0, l.shouldRedactExplicitContent)(r)
                  );
          return null !==
            (u =
              null == r
                ? void 0
                : null === (s = r.attachments) || void 0 === s
                  ? void 0
                  : s.filter(d)) && void 0 !== u
            ? u
            : [];
        },
        u = (e, t, n) => {
          var s, u;
          let r = (0, a.default)([i.default], () => i.default.getMessage(e, t));
          if (null == r) return [];
          let d =
            void 0 !== n
              ? e => e.id === n
              : e =>
                  (0, l.isMediaObscured)(
                    { type: l.ObscuredMediaTypes.Embed, media: e },
                    (0, l.shouldRedactExplicitContent)(r)
                  );
          return null !==
            (u =
              null == r
                ? void 0
                : null === (s = r.embeds) || void 0 === s
                  ? void 0
                  : s.filter(d)) && void 0 !== u
            ? u
            : [];
        };
    },
    151622: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("695681"),
        s = n("457971"),
        u = n("447435"),
        r = n("908480"),
        d = n("39393"),
        o = n("786214"),
        c = n("782340");
      function f(e) {
        let {
            channelId: t,
            messageId: n,
            attachmentId: f,
            embedId: E,
            transitionState: M,
            onClose: m,
          } = e,
          g = (0, s.useIsEligibleForExplicitMediaRedaction)(),
          S = (0, d.useExplicitMediaAttachmentsForMessage)(t, n, f),
          I = (0, d.useExplicitMediaEmbedsForMessage)(t, n, E),
          { reportFalsePositive: p, isReportFalsePositiveLoading: h } = (0,
          r.useExplicitMediaActions)({
            onSuccess: () => (0, o.handleSuccess)(m),
            onError: () => {
              (0, i.showToast)(
                (0, i.createToast)(
                  c.default.Messages.ERROR_GENERIC_TITLE,
                  i.ToastType.FAILURE
                )
              );
            },
            report: () => {
              (0, l.reportFalsePositive)(
                t,
                n,
                S.map(e => e.id),
                I.map(e => e.id)
              );
            },
          }),
          v = g && (S.length > 0 || I.length > 0);
        return (
          !v && m(),
          (0, a.jsx)(o.ExplicitMediaFalsePositiveModal, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: h,
            analyticsContext:
              u.TrackMediaRedactionContext
                .EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: p,
            attachmentPreview: 1 === S.length && 0 === I.length ? S[0] : void 0,
            embedPreview: 1 === I.length && 0 === S.length ? I[0] : void 0,
            transitionState: M,
            onClose: m,
          })
        );
      }
    },
    485684: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n("862205");
      let i = (0, a.createExperiment)({
        kind: "guild",
        id: "2023-07_allow_welcome_message_replies",
        label: "Allow replies to welcome messages",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      var l = i;
    },
    613387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("446674"),
        i = n("913144");
      let l = {};
      class s extends a.default.Store {
        getOptions(e) {
          return l[e];
        }
      }
      s.displayName = "SendMessageOptionsStore";
      var u = new s(i.default, {
        MESSAGE_CREATE: function (e) {
          let { message: t, sendMessageOptions: n } = e;
          null != n && (l[t.id] = n),
            null != t.nonce && t.nonce in l && delete l[t.nonce];
        },
      });
    },
    901205: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          canGuildFeedFeatureMessage: function () {
            return d;
          },
        });
      var a = n("316693"),
        i = n("886484"),
        l = n("677315"),
        s = n("957255"),
        u = n("49111");
      let r = a.default.combine(
        u.Permissions.VIEW_CHANNEL,
        u.Permissions.MANAGE_MESSAGES,
        u.Permissions.READ_MESSAGE_HISTORY
      );
      function d(e, t) {
        let n = e.getGuildId();
        return (
          !!(
            null !== n &&
            (0, l.canSeeGuildHome)(n) &&
            u.ChannelTypesSets.GUILD_FEED_FEATURABLE_MESSAGES.has(e.type) &&
            (0, i.isChannelAvailableInGuildFeed)(e) &&
            (0, i.isMessageAvailableInGuildFeed)(t) &&
            s.default.can(r, e)
          ) || !1
        );
      }
    },
    327054: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("300322"),
        i = n("913491"),
        l = n("49111");
      function s(e, t, n) {
        let s = t.isSystemDM(),
          u = !s && !(0, i.default)(e);
        return (
          u &&
          (n || t.isPrivate()) &&
          (0, a.getIsActiveChannelOrUnarchivableThread)(t) &&
          t.type !== l.ChannelTypes.GUILD_VOICE &&
          t.type !== l.ChannelTypes.GUILD_STAGE_VOICE
        );
      }
    },
    409058: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }),
        n("702976");
      var a = n("819689"),
        i = n("916565");
      function l(e, t, n) {
        let l =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if ((a.default.deleteMessage(e.id, t.id, !0), t.isCommandType())) {
          null != t.interactionData &&
            null != l.applicationId &&
            (0, i.retryCommandMessage)(t, e, l.applicationId);
          return;
        }
        let { content: s, tts: u, flags: r, nonce: d } = t;
        a.default.sendMessage(
          e.id,
          { content: s, tts: u, invalidEmojis: [], validNonShortcutEmojis: [] },
          void 0,
          { nonce: d, flags: r, ...l }
        );
      }
    },
    363396: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          configureJoin: function () {
            return _;
          },
          copyId: function () {
            return A;
          },
          copyLink: function () {
            return T;
          },
          deleteMessage: function () {
            return C;
          },
          editMessage: function () {
            return R;
          },
          markMessageUnread: function () {
            return y;
          },
          pinMessage: function () {
            return O;
          },
          publishMessage: function () {
            return x;
          },
          retrySendMessage: function () {
            return N;
          },
          replyToMessage: function () {
            return b;
          },
          createThread: function () {
            return G;
          },
          goToThread: function () {
            return j;
          },
          markMessageAsReminder: function () {
            return D;
          },
          markMessageRemindersAsComplete: function () {
            return F;
          },
        }),
        n("37983"),
        n("884691"),
        n("77078");
      var a = n("828986"),
        i = n("819689"),
        l = n("249561"),
        s = n("550762"),
        u = n("592407");
      n("377114");
      var r = n("931318"),
        d = n("529805"),
        o = n("967241"),
        c = n("271938"),
        f = n("42203"),
        E = n("599110"),
        M = n("404008"),
        m = n("306160"),
        g = n("659500"),
        S = n("299039"),
        I = n("613387"),
        p = n("456936"),
        h = n("409058"),
        v = n("49111");
      function _(e) {
        let t = e.getGuildId();
        null != t && u.default.open(t, v.GuildSettingsSections.OVERVIEW);
      }
      function A(e, t, n) {
        (0, m.copy)(
          n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id
        );
      }
      function T(e, t) {
        E.default.track(v.AnalyticEvents.MESSAGE_LINK_COPIED, {
          message_id: t.id,
          channel: t.channel_id,
        }),
          (0, m.copy)((0, M.getChannelPermalink)(e.guild_id, e.id, t.id));
      }
      function C(e, t, n) {
        t.state === v.MessageStates.SEND_FAILED || n.shiftKey
          ? i.default.deleteMessage(
              e.id,
              t.id,
              t.state === v.MessageStates.SEND_FAILED
            )
          : l.default.confirmDelete(e, t);
      }
      function R(e, t) {
        i.default.startEditMessage(e.id, t.id, t.content);
      }
      function y(e, t) {
        (0, p.default)(e.id, t.id);
      }
      function O(e, t, n) {
        if (!1 === t.pinned) {
          n.shiftKey
            ? a.default.pinMessage(e, t.id)
            : l.default.confirmPin(e, t);
          return;
        }
        n.shiftKey
          ? a.default.unpinMessage(e, t.id)
          : l.default.confirmUnpin(e, t);
      }
      function x(e, t) {
        (0, s.default)(e.id, t.id);
      }
      function N(e, t) {
        (0, h.default)(e, t, void 0, I.default.getOptions(t.id));
      }
      function b(e, t, n) {
        let a = e.isPrivate(),
          i = t.author.id === c.default.getId();
        (0, d.createPendingReply)({
          channel: e,
          message: t,
          shouldMention: !n.shiftKey && !i,
          showMentionToggle: !a && !i,
        }),
          g.ComponentDispatch.dispatchToLastSubscribed(
            v.ComponentActions.TEXTAREA_FOCUS
          );
      }
      function G(e, t) {
        (0, o.openThreadSidebarForCreating)(e, t, "Message");
      }
      function j(e, t) {
        let n = f.default.getChannel(S.default.castMessageIdAsChannelId(t.id));
        null != n && (0, o.openThreadSidebarForViewing)(n);
      }
      function D(e, t) {
        (0, r.addMessageReminders)(t);
      }
      function F(e, t) {
        (0, r.completeMessageReminders)(t.id);
      }
    },
    261649: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
          useMessageMenu: function () {
            return w;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("118810"),
        l = n("77078"),
        s = n("272030"),
        u = n("798609"),
        r = n("861370"),
        d = n("152298"),
        o = n("447651"),
        c = n("26051"),
        f = n("667358"),
        E = n("22582"),
        M = n("563816"),
        m = n("761136"),
        g = n("126423"),
        S = n("175537"),
        I = n("485598"),
        p = n("518155"),
        h = n("355669"),
        v = n("718381"),
        _ = n("442711"),
        A = n("702495"),
        T = n("875834"),
        C = n("780657"),
        R = n("204462"),
        y = n("487051"),
        O = n("815384"),
        x = n("263879"),
        N = n("604179"),
        b = n("167670"),
        G = n("913274"),
        j = n("514705"),
        D = n("321456"),
        F = n("470254"),
        L = n("678803"),
        P = n("782340");
      function U(e) {
        var t, n;
        let a,
          l,
          u,
          r,
          {
            channel: d,
            message: o,
            target: c,
            attachment: f,
            shouldHideMediaOptions: E,
            onSelect: M,
            onHeightUpdate: m,
          } = e,
          g = c,
          S = c.getAttribute("data-type"),
          I = c.getAttribute("data-id"),
          p = c.getAttribute("data-name");
        if (null != f) l = a = u = f.url;
        else
          for (; (0, i.isElement)(g); )
            (0, i.isElement)(g, HTMLImageElement) &&
              null != g.src &&
              (l = g.src),
              (0, i.isElement)(g, HTMLAnchorElement) &&
                null != g.href &&
                ((a = g.href),
                (r = g.textContent),
                null == l &&
                  "img" === g.getAttribute("data-role") &&
                  ((l = a),
                  g.hasAttribute("data-safe-src") &&
                    "" !== g.getAttribute("data-safe-src") &&
                    (u = g.getAttribute("data-safe-src")))),
              (g = g.parentNode);
        let h =
          null !==
            (n =
              null === (t = document.getSelection()) || void 0 === t
                ? void 0
                : t.toString()) && void 0 !== n
            ? n
            : "";
        return w({
          message: o,
          channel: d,
          attachment: f,
          textSelection: h,
          favoriteableType: S,
          favoriteableId: I,
          favoriteableName: p,
          itemHref: a,
          itemSrc: l,
          itemSafeSrc: u,
          itemTextContent: r,
          canReport: !0,
          onHeightUpdate: m,
          onSelect: M,
          onClose: s.closeContextMenu,
          navId: "message",
          ariaLabel: P.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          shouldHideMediaOptions: E,
        });
      }
      function w(e) {
        let {
            message: t,
            channel: n,
            attachment: i,
            textSelection: s,
            favoriteableType: U,
            favoriteableId: w,
            favoriteableName: k,
            itemHref: V,
            itemSrc: K,
            itemSafeSrc: H,
            itemTextContent: Y,
            canReport: B,
            onHeightUpdate: X,
            onSelect: Z,
            onClose: z,
            navId: J,
            ariaLabel: W,
            shouldHideMediaOptions: q = !1,
          } = e,
          $ = (0, d.default)(s),
          Q = (0, f.default)(s),
          ee = (0, R.default)(t, n),
          et = (0, S.default)(t, n),
          en = (0, _.default)(t, n),
          ea = (0, C.default)(t, n),
          ei = (0, A.default)({ type: U, id: w, name: k }),
          el = (0, j.default)(t, n),
          es = (0, T.default)(t, n),
          eu = (0, y.default)(t),
          er = (0, I.default)(t, n),
          ed = (0, p.default)(t, n),
          eo = (0, x.default)(t, n),
          ec = (0, N.default)(t, n),
          ef = (0, v.default)(t, n),
          eE = (0, G.default)(t),
          eM = (0, D.default)(t, n),
          em = (0, c.default)(null != V ? V : K, Y, t, {
            shouldHideMediaOptions: q,
          }),
          eg = (0, o.default)(H, t, { shouldHideMediaOptions: q }),
          eS = (0, L.default)(t, i),
          eI = (0, r.default)({
            id: t.id,
            label: P.default.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(t.channel_id, "-").concat(t.id),
          }),
          ep = (0, b.default)(t, n),
          eh = (0, F.default)(t, n),
          ev = (0, g.default)(t, n, { hoist: !0 }),
          e_ = (0, m.default)(s, n.getGuildId()),
          eA = (0, O.default)(t),
          eT = (0, h.default)(t),
          eC = (0, M.default)({
            commandType: u.ApplicationCommandType.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: X,
          }),
          eR = (0, E.default)(t, n);
        return (0, a.jsxs)(l.Menu, {
          navId: J,
          onClose: z,
          "aria-label": W,
          onSelect: Z,
          children: [
            (0, a.jsx)(l.MenuGroup, { children: $ }),
            (0, a.jsx)(l.MenuGroup, { children: Q }),
            (0, a.jsxs)(l.MenuGroup, {
              children: [
                "" === s ? ee : null,
                et,
                eu,
                en,
                ea,
                ei,
                ep,
                eh,
                eT,
                eC,
                el,
                es,
                eA,
                er,
                ed,
                eM,
                ev,
                eR,
                ec,
                eo,
                ef,
                B && eE,
              ],
            }),
            null != e_ && (0, a.jsx)(l.MenuGroup, { children: e_ }),
            (0, a.jsxs)(l.MenuGroup, { children: [eg, eS] }),
            (0, a.jsx)(l.MenuGroup, { children: em }),
            (0, a.jsx)(l.MenuGroup, { children: eI }),
          ],
        });
      }
    },
    761136: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n("222007"),
        n("808653");
      var a = n("37983"),
        i = n("884691"),
        l = n("77078"),
        s = n("272030"),
        u = n("353575"),
        r = n("296839"),
        d = n("348934"),
        o = n("151866"),
        c = n("462392"),
        f = n("155158"),
        E = n("592407"),
        M = n("49111"),
        m = n("143460"),
        g = n("782340"),
        S = n("974020");
      let I = m.AutomodTriggerType.KEYWORD;
      function p(e, t) {
        let { perGuildMaxCount: n } = r.triggerConfigs[I],
          { isLoading: m, saveRule: p } = (0, o.useAutomodEditingRuleActions)(),
          { createNewEditingRule: h } = (0, o.useAutomodEditingRuleState)(),
          [v, _] = i.useState(!1),
          [A, T] = (0, u.useSyncAutomodRules)(t),
          { rulesByTriggerType: C, updateRule: R } = (0, u.useAutomodRulesList)(
            t
          ),
          y = i.useMemo(() => {
            var e;
            return null !== (e = C[I]) && void 0 !== e ? e : [];
          }, [C]),
          O = 0 === y.length,
          x = n > y.length && !O,
          N = i.useMemo(
            () => (0, d.canCurrentUserManageMessageFilters)(t),
            [t]
          );
        if (!N || null == e || 0 === e.length || null == t) return null;
        let b = e.split(" ").length,
          G = () => {
            null != t &&
              ((0, s.closeContextMenu)(),
              E.default.open(t, M.GuildSettingsSections.GUILD_AUTOMOD),
              setTimeout(() => {
                h(t, I, {
                  triggerMetadata: {
                    keywordFilter: [e],
                    regexPatterns: [],
                    allowList: [],
                  },
                });
              }, 400));
          },
          j = async t => {
            var n, a;
            (0, s.closeContextMenu)();
            let i = await (0, f.confirmAddKeyword)(t.name, e);
            if (!i) return;
            let l = {
              ...t,
              triggerMetadata: {
                ...t.triggerMetadata,
                keywordFilter: [
                  ...(null !==
                    (a =
                      null === (n = t.triggerMetadata) || void 0 === n
                        ? void 0
                        : n.keywordFilter) && void 0 !== a
                    ? a
                    : []),
                  e,
                ],
              },
            };
            await p(l, y), R(l);
          },
          D = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(l.MenuItem, {
              id: "automod-rules-loading",
              label: g.default.Messages.LOADING,
            }),
          });
        return (
          !A &&
            (D = (0, a.jsxs)(a.Fragment, {
              children: [
                O &&
                  (0, a.jsx)(l.MenuItem, {
                    id: "add-first-rule",
                    label:
                      g.default.Messages
                        .GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                    action: G,
                    disabled: m,
                  }),
                y.map(e => {
                  let t = (0, r.getAvailableActionTypes)(I).reduce((t, n) => {
                    let a = e.actions.find(e => {
                      let { type: t } = e;
                      return n === t;
                    });
                    if (null == a) return t;
                    let i = (0, c.getActionInfo)(n, a);
                    return (t += ", ".concat(
                      null == i ? void 0 : i.headerText
                    ));
                  }, "");
                  return (0, a.jsx)(
                    l.MenuRadioItem,
                    {
                      id: e.id,
                      label: e.name,
                      subtext: (0, a.jsx)(l.Text, {
                        color: "text-muted",
                        className: S.actionTextHeader,
                        variant: "text-xs/normal",
                        children: t.slice(2),
                      }),
                      group: "automod-rule-selection",
                      checked: !1,
                      disabled: m,
                      action: () => j(e),
                    },
                    e.id
                  );
                }),
                x &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(l.MenuSeparator, {}),
                      (0, a.jsx)(l.MenuItem, {
                        id: "add-another-rule",
                        label: g.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                        action: G,
                        disabled: m,
                      }),
                    ],
                  }),
              ],
            })),
          (0, a.jsx)(l.MenuItem, {
            id: "guild-automod-add-selection",
            label: g.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
              keywordCount: b,
            }),
            onFocus: () => {
              !v && (_(!0), T());
            },
            children: D,
          })
        );
      }
    },
    126423: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("611221"),
        l = n("446674"),
        s = n("77078"),
        u = n("530101"),
        r = n("185014"),
        d = n("886484"),
        o = n("901205"),
        c = n("782340");
      function f(e, t, f) {
        let E = t.getGuildId(),
          M = (0, l.useStateFromStores)(
            [r.default],
            () =>
              null !== E &&
              r.default.getIsItemFeatured({
                guildId: E,
                entity: e,
                entityType: i.GuildFeedItemTypes.MESSAGE,
              }),
            [e, E]
          ),
          m = (0, u.default)(t, f);
        if (e.isFirstMessageInForumPost(t)) return m;
        let g = (0, o.canGuildFeedFeatureMessage)(t, e);
        return g
          ? M
            ? (0, a.jsx)(s.MenuItem, {
                id: "guild-feed-unfeature",
                label: c.default.Messages.GUILD_FEED_UNFEATURE_MESSAGE,
                action: () =>
                  null == E
                    ? null
                    : (0, s.openModalLazy)(async () => {
                        let { UnfeatureItemConfirmationModal: t } = await n
                          .el("969715")
                          .then(n.bind(n, "969715"));
                        return n =>
                          (0, a.jsx)(t, {
                            ...n,
                            featureableItem: {
                              guildId: E,
                              entity: e,
                              entityType: i.GuildFeedItemTypes.MESSAGE,
                            },
                            header:
                              c.default.Messages
                                .GUILD_FEED_UNFEATURED_MESSAGE_MODAL_HEADER,
                            body: c.default.Messages
                              .GUILD_FEED_UNFEATURED_MESSAGE_MODAL_BODY,
                          });
                      }),
              })
            : (0, a.jsx)(s.MenuItem, {
                id: "guild-feed-feature",
                label: c.default.Messages.GUILD_FEED_FEATURE_MESSAGE,
                children: (0, d.getFeatureItemsTimes)().map(i => {
                  let { value: l, timePeriod: u } = i;
                  return (0, a.jsx)(
                    s.MenuItem,
                    {
                      id: "".concat(l),
                      label: (0, d.createFeatureItemsTimeLabel)(u),
                      action: () =>
                        null == E
                          ? null
                          : (0, s.openModalLazy)(async () => {
                              let { FeatureMessageConfirmationModal: i } =
                                await n.el("969715").then(n.bind(n, "969715"));
                              return n =>
                                (0, a.jsx)(i, {
                                  ...n,
                                  message: e,
                                  channel: t,
                                  guildId: E,
                                  expiresSeconds: l,
                                  timePeriod: u,
                                  options: f,
                                });
                            }),
                    },
                    l
                  );
                }),
              })
          : null;
      }
    },
    175537: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n("37983"),
        i = n("884691"),
        l = n("446674"),
        s = n("77078"),
        u = n("788506"),
        r = n("166257"),
        d = n("432173"),
        o = n("300322"),
        c = n("845579"),
        f = n("957255"),
        E = n("79945"),
        M = n("315102"),
        m = n("659500"),
        g = n("402671"),
        S = n("49111"),
        I = n("958706"),
        p = n("782340");
      function h(e, t) {
        let { reducedMotion: n } = i.useContext(
            s.AccessibilityPreferencesContext
          ),
          h = (0, o.useIsActiveChannelOrUnarchivableThread)(t),
          v = (0, l.useStateFromStores)(
            [f.default],
            () =>
              (t.isPrivate() ||
                f.default.can(S.Permissions.ADD_REACTIONS, t)) &&
              h,
            [t, h]
          ),
          _ = (0, u.useEmojiInPriorityOrder)(t.getGuildId());
        if (
          !c.RenderReactions.getSetting() ||
          !v ||
          e.type === S.MessageTypes.GUILD_INVITE_REMINDER
        )
          return null;
        let A = _.filter(
          e =>
            !g.default.isEmojiFilteredOrLocked({
              emoji: e,
              channel: t,
              intention: I.EmojiIntention.REACTION,
            })
        )
          .slice(0, 12)
          .map((i, l) => {
            var u, o, c;
            return (0, a.jsx)(
              s.MenuItem,
              {
                color: "default",
                id:
                  null !==
                    (c =
                      null !==
                        (o =
                          null !== (u = i.id) && void 0 !== u
                            ? u
                            : i.optionallyDiverseSequence) && void 0 !== o
                        ? o
                        : i.name) && void 0 !== c
                    ? c
                    : ":".concat(i.name, ":"),
                label: null == i.id ? i.name : ":".concat(i.name, ":"),
                imageUrl: e => {
                  var t;
                  let { isFocused: a } = e;
                  return null != i.id
                    ? M.default.getEmojiURL({
                        id: i.id,
                        animated: i.animated && (!n.enabled || a),
                        size: 18,
                      })
                    : g.default.getURL(
                        null !== (t = i.optionallyDiverseSequence) &&
                          void 0 !== t
                          ? t
                          : ""
                      );
                },
                action: () => {
                  (0, r.addReaction)(
                    t.id,
                    e.id,
                    (0, d.toReactionEmoji)(i),
                    void 0
                  );
                },
                dontCloseOnActionIfHoldingShiftKey: !0,
              },
              l
            );
          });
        return (0, a.jsx)(s.MenuItem, {
          id: "add-reaction",
          label: p.default.Messages.ADD_REACTION,
          action: () => {
            m.ComponentDispatch.dispatchKeyed(
              S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT,
              e.id,
              { emojiPicker: !0 }
            );
          },
          color: "default",
          children: (0, a.jsxs)(a.Fragment, {
            children: [
              A,
              (0, a.jsx)(s.MenuSeparator, {}),
              (0, a.jsx)(s.MenuItem, {
                color: "default",
                id: "other-reactions",
                label: p.default.Messages.VIEW_MORE,
                icon: E.default,
                action: () => {
                  m.ComponentDispatch.dispatchKeyed(
                    S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT,
                    e.id,
                    { emojiPicker: !0 }
                  );
                },
              }),
            ],
          }),
        });
      }
    },
    485598: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("957255"),
        s = n("85175"),
        u = n("363396"),
        r = n("49111"),
        d = n("782340");
      function o(e, t) {
        let n = t.getGuildId(),
          o =
            null != n &&
            (e.type === r.MessageTypes.USER_JOIN ||
              e.type === r.MessageTypes.GUILD_INVITE_REMINDER) &&
            l.default.canWithPartialContext(r.Permissions.MANAGE_GUILD, {
              guildId: n,
            });
        return o
          ? (0, a.jsx)(i.MenuItem, {
              id: "configure",
              label: d.default.Messages.CONFIGURE,
              icon: s.default,
              action: () => (0, u.configureJoin)(t),
            })
          : null;
      }
    },
    355669: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("413709"),
        s = n("306160"),
        u = n("782340");
      function r(e) {
        return s.SUPPORTS_COPY
          ? (0, a.jsx)(i.MenuItem, {
              id: "copy-text",
              label: u.default.Messages.COPY_TEXT,
              icon: l.default,
              action: () => {
                (0, s.copy)(e.content);
              },
            })
          : null;
      }
    },
    442711: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("819689"),
        u = n("300322"),
        r = n("271938"),
        d = n("987772"),
        o = n("61400"),
        c = n("782340");
      function f(e, t) {
        let n = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
          f = (0, u.useIsActiveChannelOrUnarchivableThread)(t),
          E = (0, u.useIsNonModInLockedThread)(t);
        return (0, o.default)(e, n) && f && !E
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit",
              label: c.default.Messages.EDIT_MESSAGE,
              action: () => s.default.startEditMessage(t.id, e.id, e.content),
              icon: d.default,
            })
          : null;
      }
    },
    702495: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("781738");
      var a = n("37983"),
        i = n("884691"),
        l = n("446674"),
        s = n("77078"),
        u = n("150021"),
        r = n("997289"),
        d = n("788506"),
        o = n("385976"),
        c = n("867805"),
        f = n("246511"),
        E = n("467094"),
        M = n("178207"),
        m = n("256860"),
        g = n("364685"),
        S = n("24373"),
        I = n("49111"),
        p = n("782340");
      function h(e) {
        return c.default.getByName(e.replace(/(^:|:$)/g, ""));
      }
      function v(e) {
        let { type: t, id: n, name: v, isInExpressionPicker: _ = !1 } = e,
          { location: A } = (0, r.useAnalyticsContext)(),
          T = i.useMemo(
            () => ({
              ...A,
              section: _
                ? I.AnalyticsSections.EXPRESSION_PICKER
                : I.AnalyticsSections.CONTEXT_MENU,
            }),
            [A, _]
          ),
          C = (0, m.useFavoriteStickerIds)(),
          R = (0, l.useStateFromStores)([g.default], () =>
            t === f.PickerContextMenuDataTypes.STICKER && null != n
              ? g.default.getStickerById(n)
              : null
          ),
          y = null != R && C.includes(R.id),
          O = (0, l.useStateFromStores)([o.default], () => {
            if (t === f.PickerContextMenuDataTypes.EMOJI) {
              if (null != n)
                return o.default.getDisambiguatedEmojiContext().getById(n);
              if (null != v) {
                var e;
                return null !== (e = h(v)) && void 0 !== e
                  ? e
                  : h(c.default.convertSurrogateToName(v));
              }
            }
          }),
          x = (0, d.useIsFavoriteEmoji)(null, O);
        if (null != R && t === f.PickerContextMenuDataTypes.STICKER)
          return (0, S.isGuildSticker)(R) && !(0, S.isAvailableGuildSticker)(R)
            ? null
            : y
              ? (0, a.jsx)(s.MenuItem, {
                  id: "unfavorite",
                  action: () => (0, E.unfavoriteSticker)(R.id),
                  label: p.default.Messages.UNFAVORITE_ITEM,
                })
              : (0, a.jsx)(s.MenuItem, {
                  id: "favorite",
                  action: () => {
                    (0, M.trackStickerFavorited)({
                      sticker: R,
                      location: { ...T, object: I.AnalyticsObjects.STICKER },
                    }),
                      (0, E.favoriteSticker)(null == R ? void 0 : R.id);
                  },
                  label: p.default.Messages.FAVORITE_ITEM,
                });
        if (null != O && t === f.PickerContextMenuDataTypes.EMOJI)
          return x
            ? (0, a.jsx)(s.MenuItem, {
                id: "unfavorite",
                action: () => (0, u.unfavoriteEmoji)(O),
                label: p.default.Messages.UNFAVORITE_ITEM,
              })
            : (0, a.jsx)(s.MenuItem, {
                id: "favorite",
                action: () => {
                  (0, d.trackEmojiFavorited)({
                    emoji: O,
                    location: { ...T, object: I.AnalyticsObjects.EMOJI },
                  }),
                    (0, u.favoriteEmoji)(O);
                },
                label: p.default.Messages.FAVORITE_ITEM,
              });
      }
    },
    780657: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("828986"),
        u = n("249561"),
        r = n("957255"),
        d = n("566998"),
        o = n("327054"),
        c = n("49111"),
        f = n("782340");
      function E(e, t) {
        let n = (0, i.useStateFromStores)(
          [r.default],
          () => r.default.can(c.Permissions.MANAGE_MESSAGES, t),
          [t]
        );
        return e.state !== c.MessageStates.SEND_FAILED &&
          (0, o.default)(e, t, n)
          ? !1 === e.pinned
            ? (0, a.jsx)(l.MenuItem, {
                id: "pin",
                action: function (n) {
                  n.shiftKey
                    ? s.default.pinMessage(t, e.id)
                    : u.default.confirmPin(t, e);
                },
                label: f.default.Messages.PIN_MESSAGE,
                icon: d.default,
              })
            : (0, a.jsx)(l.MenuItem, {
                id: "unpin",
                action: function (n) {
                  n.shiftKey
                    ? s.default.unpinMessage(t, e.id)
                    : u.default.confirmUnpin(t, e);
                },
                label: f.default.Messages.UNPIN_MESSAGE,
                icon: d.default,
              })
          : null;
      }
    },
    204462: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("414456"),
        l = n.n(i),
        s = n("446674"),
        u = n("77078"),
        r = n("788506"),
        d = n("166257"),
        o = n("432173"),
        c = n("300322"),
        f = n("845579"),
        E = n("957255"),
        M = n("315102"),
        m = n("402671"),
        g = n("49111"),
        S = n("958706"),
        I = n("782340"),
        p = n("755640");
      let h = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
      function v(e) {
        var t;
        let { emoji: n, isFocused: i } = e,
          { animated: s, src: r, surrogates: d } = n;
        return (
          null == r && null != n.id
            ? (r = M.default.getEmojiURL({ id: n.id, animated: !!s, size: 20 }))
            : null == r && (r = m.default.getURL(d)),
          (0, a.jsx)(
            u.Tooltip,
            {
              text: n.allNamesString,
              hideOnClick: !0,
              spacing: 16,
              forceOpen: i,
              children: e =>
                (0, a.jsx)("div", {
                  "aria-label": I.default.Messages.ADD_REACTION_NAMED.format({
                    emojiName: n.name,
                  }),
                  className: l(p.button, { [p.focused]: i }),
                  ...e,
                  children:
                    null == r || "" === r.trim()
                      ? (0, a.jsx)("span", {
                          className: l("emoji", "emoji-text", p.icon),
                          ...e,
                          children: d,
                        })
                      : (0, a.jsx)("img", {
                          className: p.icon,
                          src: r,
                          alt: "",
                        }),
                }),
            },
            null !== (t = n.id) && void 0 !== t ? t : n.name
          )
        );
      }
      function _(e, t) {
        let n = (0, r.useEmojiInPriorityOrder)(t.guild_id),
          i = n.filter(e => {
            var n;
            return (
              !(
                e.useSpriteSheet &&
                h.indexOf(
                  null !== (n = e.uniqueName) && void 0 !== n ? n : ""
                ) >= 0
              ) &&
              !m.default.isEmojiPremiumLocked({
                emoji: e,
                channel: t,
                intention: S.EmojiIntention.REACTION,
              })
            );
          });
        i.length > 4 && (i.length = 4);
        let l = f.RenderReactions.useSetting(),
          M = (0, c.useIsActiveChannelOrUnarchivableThread)(t),
          I = (0, s.useStateFromStores)(
            [E.default],
            () =>
              l &&
              M &&
              (t.isPrivate() || E.default.can(g.Permissions.ADD_REACTIONS, t)),
            [t, M, l]
          ),
          _ = n => {
            (0, d.addReaction)(t.id, e.id, (0, o.toReactionEmoji)(n), void 0);
          };
        return I && i.length > 0
          ? (0, a.jsx)(u.MenuGroup, {
              className: p.wrapper,
              children: i.map((e, t) => {
                var n;
                return (0, a.jsx)(
                  u.MenuItem,
                  {
                    id: "quickreact-".concat(
                      null !== (n = e.id) && void 0 !== n ? n : t
                    ),
                    render: t => {
                      let { isFocused: n } = t;
                      return (0, a.jsx)(v, { emoji: e, isFocused: n });
                    },
                    action: () => _(e),
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  t
                );
              }),
            })
          : null;
      }
    },
    487051: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("562228"),
        s = n("259687"),
        u = n("782340");
      function r(e) {
        return null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, l.hasNonVoteReactions)(e))
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "reactions",
              label: u.default.Messages.VIEW_REACTIONS,
              icon: s.default,
              action: () =>
                (0, i.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("57155")
                    .then(n.bind(n, "57155"));
                  return n => (0, a.jsx)(t, { ...n, message: e });
                }),
            });
      }
    },
    815384: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
          useMessageReminderDurations: function () {
            return m;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("866227"),
        l = n.n(i),
        s = n("446674"),
        u = n("77078"),
        r = n("931318"),
        d = n("979268"),
        o = n("520899"),
        c = n("988864"),
        f = n("36562"),
        E = n("782340");
      function M(e) {
        let { showReminders: t } = d.default.useExperiment(
            { location: "a65531_1" },
            { autoTrackExposure: !1 }
          ),
          n = (0, s.useStateFromStores)(
            [o.default],
            () =>
              null !=
              o.default.getMessageReminders().find(t => t.messageId === e.id)
          ),
          i = m(e, t =>
            (0, r.addMessageReminders)(e, l().add(t, "millisecond").toDate())
          );
        return t
          ? (0, a.jsx)(u.MenuItem, {
              id: "mark-todo",
              label: n
                ? E.default.Messages.MESSAGE_REMINDERS_MARK_AS_DONE
                : E.default.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
              icon: n ? f.default : void 0,
              action: () =>
                n
                  ? (0, r.completeMessageReminders)(e.id)
                  : (0, r.addMessageReminders)(e),
              children: n ? null : i,
            })
          : null;
      }
      function m(e, t) {
        return c.MESSAGE_REMINDER_DURATION_ITEMS.map(e => {
          let { duration: n, getLabel: i } = e;
          return (0, a.jsx)(
            u.MenuItem,
            { id: "mark-todo-".concat(n), label: i(), action: () => t(n) },
            n
          );
        });
      }
    },
    263879: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("404118"),
        u = n("562228"),
        r = n("166257"),
        d = n("300322"),
        o = n("957255"),
        c = n("49111"),
        f = n("782340");
      function E(e, t) {
        let n = (0, d.useIsActiveChannelOrUnarchivableThread)(t),
          E = (0, i.useStateFromStores)(
            [o.default],
            () => o.default.can(c.Permissions.MANAGE_MESSAGES, t) && n,
            [t, n]
          );
        return !E ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, u.hasNonVoteReactions)(e))
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "remove-reactions",
              label: f.default.Messages.REMOVE_ALL_REACTIONS,
              action: function (n) {
                n.shiftKey
                  ? (0, r.removeAllReactions)(t.id, e.id)
                  : s.default.show({
                      title:
                        f.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                      body: f.default.Messages
                        .REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                      confirmText: f.default.Messages.YES_TEXT,
                      cancelText: f.default.Messages.NO_TEXT,
                      onConfirm: () => {
                        (0, r.removeAllReactions)(t.id, e.id);
                      },
                    });
              },
              color: "danger",
            });
      }
    },
    604179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n("808653"),
        n("222007");
      var a = n("37983"),
        i = n("884691"),
        l = n("446674"),
        s = n("77078"),
        u = n("404118"),
        r = n("562228"),
        d = n("166257"),
        o = n("300322"),
        c = n("957255"),
        f = n("315102"),
        E = n("402671"),
        M = n("49111"),
        m = n("782340");
      function g(e, t) {
        let { reducedMotion: n } = i.useContext(
            s.AccessibilityPreferencesContext
          ),
          g = (0, o.useIsActiveChannelOrUnarchivableThread)(t),
          S = (0, l.useStateFromStores)(
            [c.default],
            () => c.default.can(M.Permissions.MANAGE_MESSAGES, t) && g,
            [t, g]
          ),
          I = e.reactions.reduce((e, t) => {
            var n;
            return (null === (n = t.count_details) || void 0 === n
              ? void 0
              : n.vote) != null ||
              null !=
                e.find(
                  e =>
                    (null != e.id && e.id === t.emoji.id) ||
                    e.name === t.emoji.name
                )
              ? e
              : [...e, t.emoji];
          }, []),
          p = (n, a) => {
            n.shiftKey
              ? (0, d.removeEmojiReactions)(t.id, e.id, a)
              : u.default.show({
                  title:
                    m.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                  body: m.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                  confirmText: m.default.Messages.YES_TEXT,
                  cancelText: m.default.Messages.NO_TEXT,
                  onConfirm: () => {
                    (0, d.removeEmojiReactions)(t.id, e.id, a);
                  },
                });
          };
        return !S ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, r.hasNonVoteReactions)(e))
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "remove-emoji-reactions",
              label: m.default.Messages.REMOVE_EMOJI_REACTIONS,
              color: "danger",
              children: I.map(e => {
                var t, i;
                return (0, a.jsx)(
                  s.MenuItem,
                  {
                    id: "remove-emoji-reactions-".concat(
                      null !== (t = e.name) && void 0 !== t ? t : e.id
                    ),
                    label: null == e.id ? e.name : ":".concat(e.name, ":"),
                    action: t => p(t, e),
                    imageUrl: t => {
                      var a;
                      let { isFocused: i } = t;
                      return null != e.id
                        ? f.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated && (!n.enabled || i),
                            size: 18,
                          })
                        : E.default.getURL(
                            null !== (a = e.name) && void 0 !== a ? a : ""
                          );
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  null !== (i = e.name) && void 0 !== i ? i : e.id
                );
              }),
            });
      }
    },
    167670: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("625149"),
        s = n("516358"),
        u = n("363396"),
        r = n("782340");
      function d(e, t) {
        let n = (0, l.useCanReplyToMessage)(t, e);
        return n
          ? (0, a.jsx)(i.MenuItem, {
              id: "reply",
              label: r.default.Messages.MESSAGE_ACTION_REPLY,
              icon: s.default,
              action: n => {
                (0, u.replyToMessage)(t, e, n);
              },
            })
          : null;
      }
    },
    913274: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("377114"),
        s = n("907566"),
        u = n("870190"),
        r = n("782340");
      function d(e) {
        return (0, u.canReportMessage)(e)
          ? (0, a.jsx)(i.MenuItem, {
              id: "report",
              label: r.default.Messages.REPORT_MESSAGE_MENU_OPTION,
              action: () => (0, l.showReportModalForMessage)(e),
              icon: s.default,
              color: "danger",
            })
          : null;
      }
    },
    514705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("613387"),
        s = n("409058"),
        u = n("49111"),
        r = n("782340");
      function d(e, t) {
        return e.state !== u.MessageStates.SEND_FAILED
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "resend",
              label: r.default.Messages.RESEND_MESSAGE,
              action: () =>
                (0, s.default)(t, e, void 0, l.default.getOptions(e.id)),
            });
      }
    },
    321456: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("446674"),
        l = n("77078"),
        s = n("76629"),
        u = n("981957"),
        r = n("156690"),
        d = n("782340");
      function o(e, t) {
        let n = (0, i.useStateFromStores)(
          [u.default],
          () => u.default.isSpeakingMessage(t.id, e.id),
          [t, e]
        );
        return "" === e.content
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "tts",
              label: n
                ? d.default.Messages.STOP_SPEAKING_MESSAGE
                : d.default.Messages.SPEAK_MESSAGE,
              icon: r.default,
              action: () =>
                n ? (0, s.stopSpeaking)() : (0, s.speakMessage)(t, e),
            });
      }
    },
    470254: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("300322"),
        s = n("959097"),
        u = n("363396"),
        r = n("782340");
      function d(e, t) {
        let n = (0, l.useCanStartPublicThread)(t, e);
        return n
          ? (0, a.jsx)(i.MenuItem, {
              id: "thread",
              label: r.default.Messages.CREATE_THREAD,
              icon: s.default,
              action: () => {
                (0, u.createThread)(t, e);
              },
            })
          : null;
      }
    },
    678803: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("447435"),
        s = n("721618"),
        u = n("782340");
      function r(e, t) {
        return null != t &&
          (0, l.isMediaObscured)(
            { type: l.ObscuredMediaTypes.Attachment, media: t },
            (0, l.shouldRedactExplicitContent)(e)
          )
          ? (0, a.jsx)(
              i.MenuItem,
              {
                id: "report-image-false-positive",
                label: u.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                action: () => {
                  (0, i.openModalLazy)(async () => {
                    let { default: i } = await n("151622");
                    return n =>
                      (0, a.jsx)(i, {
                        channelId: e.channel_id,
                        messageId: e.id,
                        attachmentId: t.id,
                        ...n,
                      });
                  });
                },
                icon: s.default,
              },
              "report-image-false-positive"
            )
          : null;
      }
    },
    447651: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var a = n("37983");
      n("884691");
      var i = n("77078"),
        l = n("404118"),
        s = n("689226"),
        u = n("467475"),
        r = n("599110"),
        d = n("773336"),
        o = n("286235"),
        c = n("253981"),
        f = n("50885"),
        E = n("146574"),
        M = n("49111"),
        m = n("782340");
      let g = "https://media.discordapp.net",
        S = /^.*\.discordapp\.net$/,
        I = "cdn.discordapp.com",
        p = "".concat(g, "/stickers"),
        h = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        v = new Set(["jpg", "jpeg", "png"]),
        _ = e => {
          var t, n, a, i;
          return null === (i = c.default.toURLSafe(e)) || void 0 === i
            ? void 0
            : null === (a = i.pathname) || void 0 === a
              ? void 0
              : null === (n = a.split(".")) || void 0 === n
                ? void 0
                : null === (t = n.pop()) || void 0 === t
                  ? void 0
                  : t.toLowerCase();
        };
      function A(e, t) {
        l.default.show({ title: m.default.Messages.ERROR, body: e }),
          o.default.captureException(t);
      }
      function T(e, t, n) {
        let l = (0, u.default)(null == t ? void 0 : t.getChannelId());
        if (
          l ||
          (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
          !d.isPlatformEmbedded ||
          null == e ||
          !(function (e) {
            let t = c.default.toURLSafe(e);
            if (null == t) return !1;
            let n = _(e);
            return (
              (S.test(t.hostname) || t.host === I) &&
              !e.startsWith(p) &&
              !(0, s.isRoleIconAssetUrl)(e) &&
              null != n &&
              h.has(n)
            );
          })(e)
        )
          return null;
        let o = (function (e) {
            let t = c.default.toURLSafe(e);
            return null == t || t.host === I
              ? e
              : t.origin === g
                ? ((t.host = I),
                  t.searchParams.delete("size"),
                  t.searchParams.delete("width"),
                  t.searchParams.delete("height"),
                  t.searchParams.delete("quality"),
                  t.searchParams.delete("format"),
                  t.toString())
                : (t.searchParams.delete("width"),
                  t.searchParams.delete("height"),
                  t.searchParams.set("quality", "lossless"),
                  t.toString());
          })(e),
          T = async () => {
            try {
              await f.default.saveImage(o),
                r.default.track(M.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, E.getNativeContextMenuChannelAnalytics)(),
                });
            } catch (e) {
              r.default.track(M.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, E.getNativeContextMenuChannelAnalytics)(),
              }),
                A(m.default.Messages.ERROR_SAVING_IMAGE, e);
            }
          },
          C = async () => {
            try {
              await f.default.copyImage(o),
                r.default.track(M.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, E.getNativeContextMenuChannelAnalytics)(),
                });
            } catch (e) {
              A(m.default.Messages.ERROR_COPYING_IMAGE, e),
                r.default.track(
                  M.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED,
                  { ...(0, E.getNativeContextMenuChannelAnalytics)() }
                );
            }
          };
        return [
          f.default.canCopyImage() &&
          (function (e) {
            let t = _(e);
            return null != t && v.has(t);
          })(e)
            ? (0, a.jsx)(
                i.MenuItem,
                {
                  id: "copy-image",
                  label: m.default.Messages.COPY_IMAGE_MENU_ITEM,
                  action: C,
                },
                "copy-image"
              )
            : null,
          (0, a.jsx)(
            i.MenuItem,
            {
              id: "save-image",
              label: m.default.Messages.SAVE_IMAGE_MENU_ITEM,
              action: T,
            },
            "save-image"
          ),
        ];
      }
    },
    491572: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PollMessageContextItemTypes: function () {
            return a;
          },
          default: function () {
            return o;
          },
        }),
        n("424973");
      var a,
        i,
        l = n("446674"),
        s = n("271938"),
        u = n("957255"),
        r = n("49111");
      (i = a || (a = {}))[(i.END_EARLY = 0)] = "END_EARLY";
      let d = [];
      function o(e, t) {
        let n = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
          a = (0, l.useStateFromStores)(
            [u.default],
            () =>
              !t.isPrivate() && u.default.can(r.Permissions.MANAGE_MESSAGES, t),
            [t]
          ),
          { poll: i } = e;
        if (!e.isPoll() || null == i) return d;
        let o = [],
          c = i.expiry.isSameOrBefore(Date.now()),
          f = !c && (e.author.id === n || a);
        return f && o.push(0), o;
      }
    },
    22582: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("14487"),
        l = n("77078"),
        s = n("847511"),
        u = n("491572"),
        r = n("782340");
      let d = {
        [u.PollMessageContextItemTypes.END_EARLY]: e =>
          (0, a.jsx)(l.MenuItem, {
            id: "end-poll-early",
            label: r.default.Messages.POLL_END_EARLY,
            icon: i.ClockXIcon,
            action: () => {
              s.default.endPollEarly({
                channelId: e.channel_id,
                messageId: e.id,
              });
            },
            iconProps: { color: "currentColor" },
          }),
      };
      function o(e, t) {
        let n = (0, u.default)(e, t);
        return 0 === n.length
          ? null
          : (0, a.jsx)(a.Fragment, { children: n.map(t => d[t](e)) });
      }
    },
    625149: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanReplyToMessage: function () {
            return m;
          },
          canReplyToMessage: function () {
            return g;
          },
        }),
        n("222007");
      var a = n("637612"),
        i = n("446674"),
        l = n("406043"),
        s = n("485684"),
        u = n("913491"),
        r = n("300322"),
        d = n("957255"),
        o = n("697218"),
        c = n("49111"),
        f = n("843455");
      function E(e, t, n) {
        let i;
        i = e.isPrivate()
          ? !e.isSystemDM()
          : n.can(f.Permissions.SEND_MESSAGES, e) &&
            n.can(f.Permissions.READ_MESSAGE_HISTORY, e);
        let l = !(0, u.default)(t),
          r = a.MessageTypesSets.REPLYABLE.has(t.type),
          { enabled: d } = s.default.getCurrentConfig(
            { guildId: e.guild_id, location: "51c7ba_1" },
            { autoTrackExposure: t.type === a.MessageTypes.USER_JOIN }
          );
        return i && (d ? r : l);
      }
      function M(e, t, n, a, i) {
        let l = t.hasFlag(c.MessageFlags.EPHEMERAL),
          s = t.state === c.MessageStates.SENT,
          u = !e.isArchivedThread() || i;
        return n && s && !l && !a && u;
      }
      function m(e, t) {
        var n;
        let a = (0, r.useCanUnarchiveThread)(e),
          [, s] = (0, l.useCurrentUserCommunicationDisabled)(
            null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n
              ? n
              : void 0
          ),
          u = (0, i.useStateFromStores)(
            [d.default],
            () => null != e && null != t && E(e, t, d.default)
          );
        return null != e && null != t && M(e, t, u, s, a);
      }
      function g(e, t) {
        var n;
        let a = (0, r.canUnarchiveThread)(e),
          i = E(e, t, d.default),
          s = o.default.getCurrentUser(),
          [, u] = (0, l.userCommunicationDisabled)(
            null == s ? void 0 : s.id,
            null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0
          );
        return M(e, t, i, u, a);
      }
    },
    76629: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          speakText: function () {
            return i;
          },
          speakMessage: function () {
            return l;
          },
          speakingMessage: function () {
            return s;
          },
          stopSpeaking: function () {
            return u;
          },
          setSpeechRate: function () {
            return r;
          },
        });
      var a = n("913144");
      function i(e, t, n, i, l) {
        a.default.dispatch({
          type: "SPEAK_TEXT",
          text: e,
          interrupt: t,
          maxLength: n,
          onStart: i,
          onEnd: l,
        });
      }
      function l(e, t) {
        a.default.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
      }
      function s(e, t) {
        a.default.dispatch({
          type: "SPEAKING_MESSAGE",
          channelId: e,
          messageId: t,
        });
      }
      function u() {
        a.default.dispatch({ type: "STOP_SPEAKING" });
      }
      function r(e) {
        a.default.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
      }
    },
    981957: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var a = n("446674"),
        i = n("913144");
      let l = { speechRate: 1, currentMessage: null },
        s = l;
      class u extends a.default.DeviceSettingsStore {
        initialize(e) {
          s = { ...l, ...(null != e ? e : null) };
        }
        isSpeakingMessage(e, t) {
          let { currentMessage: n } = s;
          return null !== n && n.channelId === e && n.messageId === t;
        }
        get currentMessage() {
          return s.currentMessage;
        }
        get speechRate() {
          return s.speechRate;
        }
        getUserAgnosticState() {
          return s;
        }
      }
      (u.displayName = "TTSStore"),
        (u.persistKey = "TTSStore"),
        (u.migrations = []);
      var r = new u(
        i.default,
        __OVERLAY__
          ? {}
          : {
              SPEAKING_MESSAGE: function (e) {
                let { messageId: t, channelId: n } = e;
                s = { ...s, currentMessage: { messageId: t, channelId: n } };
              },
              STOP_SPEAKING: function () {
                s = { ...s, currentMessage: null };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                s = { ...s, speechRate: e.speechRate };
              },
            }
      );
    },
    259687: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("469563"),
        l = n("906069"),
        s = n("75196"),
        u = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: l,
              ...u
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                fill: i,
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12ZM6.375 12.8713C7.41054 12.8713 8.25 12.0318 8.25 10.9963C8.25 9.96073 7.41053 9.12128 6.375 9.12128C5.33947 9.12128 4.5 9.96073 4.5 10.9963C4.5 12.0318 5.33946 12.8713 6.375 12.8713ZM19.5 10.9963C19.5 12.0318 18.6605 12.8713 17.625 12.8713C16.5895 12.8713 15.75 12.0318 15.75 10.9963C15.75 9.96073 16.5895 9.12128 17.625 9.12128C18.6605 9.12128 19.5 9.96073 19.5 10.9963ZM10.4867 14.825C10.3576 14.3236 9.8465 14.0217 9.34508 14.1508C8.84365 14.2798 8.54179 14.791 8.67085 15.2924C9.0524 16.7748 10.397 17.8712 12 17.8712C13.603 17.8712 14.9476 16.7748 15.3291 15.2924C15.4582 14.791 15.1563 14.2798 14.6549 14.1508C14.1535 14.0217 13.6424 14.3236 13.5133 14.825C13.3398 15.4991 12.7268 15.9962 12 15.9962C11.2732 15.9962 10.6602 15.4991 10.4867 14.825Z",
              }),
            });
          },
          l.ReactionIcon,
          void 0,
          { size: 24 }
        );
    },
    516358: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("469563"),
        l = n("273481"),
        s = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              className: l,
              foreground: s,
            } = e;
            return (0, a.jsx)("svg", {
              className: l,
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                d: "M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z",
                className: s,
                fill: i,
              }),
            });
          },
          l.ArrowAngleLeftUpIcon,
          void 0,
          { size: 24 }
        );
    },
    156690: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("469563"),
        l = n("422475"),
        s = n("75196"),
        u = (0, i.replaceIcon)(
          function (e) {
            let {
              width: t = 24,
              height: n = 24,
              color: i = "currentColor",
              foreground: l,
              ...u
            } = e;
            return (0, a.jsx)("svg", {
              ...(0, s.default)(u),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: (0, a.jsx)("path", {
                className: l,
                fill: i,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.99805 4.8C2.99805 3.8055 3.80445 3 4.79805 3H19.198C20.1925 3 20.998 3.8055 20.998 4.8V15.6C20.998 16.5936 20.1925 17.4 19.198 17.4H11.098L7.49805 21V17.4H4.79805C3.80445 17.4 2.99805 16.5936 2.99805 15.6V4.8ZM11.5737 5.16264C11.7336 5.00375 11.9739 4.95652 12.183 5.04208C12.3921 5.12708 12.5279 5.33098 12.5279 5.55487V14.444C12.5279 14.669 12.3921 14.8718 12.183 14.9579C11.9739 15.0435 11.7336 14.9963 11.5737 14.8374L9.1739 12.2217H7.4969C7.18945 12.2217 6.9379 11.9717 6.9379 11.6662V8.33273C6.9379 8.02772 7.18945 7.77716 7.4969 7.77716H9.1739L11.5737 5.16264ZM13.6459 7.22159V6.11044C15.8037 6.11044 17.5589 7.85549 17.5589 9.99944C17.5589 12.1445 15.8037 13.8884 13.6459 13.8884V12.7773C15.1871 12.7773 16.4409 11.5312 16.4409 9.99944C16.4409 8.46829 15.1871 7.22159 13.6459 7.22159ZM15.3229 9.99944C15.3229 9.08108 14.5705 8.33273 13.6459 8.33273V9.44387C13.9539 9.44387 14.2049 9.69332 14.2049 9.99944C14.2049 10.3056 13.9539 10.555 13.6459 10.555V11.6662C14.5705 11.6662 15.3229 10.9189 15.3229 9.99944Z",
              }),
            });
          },
          l.ChatSpeakIcon,
          void 0,
          { size: 24 }
        );
    },
    606508: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ChatSpeakIcon: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof s ? s : s.css,
            fillRule: "evenodd",
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Zm2-5.26c0 .61.56 1.09 1.14.87a6 6 0 0 0 0-11.22c-.58-.22-1.14.26-1.14.87v.1c0 .45.32.83.73 1.03a4 4 0 0 1 0 7.22c-.41.2-.73.58-.73 1.04v.09Zm0-3.32c0 .69.7 1.15 1.18.65a2.99 2.99 0 0 0 0-4.14c-.48-.5-1.18-.04-1.18.65v2.84ZM12 7a1 1 0 0 0-1-1h-.05a1 1 0 0 0-.75.34L7.87 9H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.87l2.33 2.66a1 1 0 0 0 .75.34H11a1 1 0 0 0 1-1V7Z",
            clipRule: "evenodd",
            className: u,
          }),
        });
      };
    },
    734382: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ClockXIcon: function () {
            return s;
          },
        });
      var a = n("37983");
      n("884691");
      var i = n("669491"),
        l = n("82169");
      let s = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: s = i.default.colors.INTERACTIVE_NORMAL,
          colorClass: u = "",
          ...r
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.default)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M12.53 22.99c.32-.02.52-.34.49-.65a3 3 0 0 1 .86-2.46l.52-.53a.5.5 0 0 0 0-.7l-.52-.53a3 3 0 0 1-.72-3.09.56.56 0 0 0-.12-.57L11.3 12.7A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.38c0 .13.05.26.15.35l1.3 1.31c.16.15.38.19.58.12a3 3 0 0 1 3.1.72l.52.52c.2.2.5.2.7 0l.53-.52a3 3 0 0 1 2.46-.86c.31.03.63-.17.65-.49L23 12a11 11 0 1 0-10.47 10.99Z",
              className: u,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof s ? s : s.css,
              d: "M15.3 15.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3a1 1 0 0 1 1.4 1.42L20.42 19l2.3 2.3a1 1 0 0 1-1.42 1.4L19 20.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L17.58 19l-2.3-2.3a1 1 0 0 1 0-1.4Z",
              className: u,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=49710e1f8ead6bc7f09e.js.map

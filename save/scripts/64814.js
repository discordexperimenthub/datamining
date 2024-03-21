(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64814"],
  {
    228944: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodAlertActionType: function () {
            return o;
          },
          parseAlertActionsExecution: function () {
            return r;
          },
        }),
        ((u = o || (o = {}))[(u.SET_COMPLETED = 1)] = "SET_COMPLETED"),
        (u[(u.UNSET_COMPLETED = 2)] = "UNSET_COMPLETED"),
        (u[(u.DELETE_USER_MESSAGE = 3)] = "DELETE_USER_MESSAGE"),
        (u[(u.SUBMIT_FEEDBACK = 4)] = "SUBMIT_FEEDBACK");
      function r(e) {
        if (null == e) return null;
        let t = (function (e) {
          if (null == e) return null;
          try {
            return JSON.parse(e);
          } catch (e) {
            return null;
          }
        })(e);
        return null == t || null == t.actions
          ? null
          : (Object.keys(t.actions).forEach(e => {
              t.actions[e].actionType = e;
            }),
            t);
      }
    },
    85448: function (e, t, n) {
      "use strict";
      var o, u, r, _, i, E, a, s;
      function A(e) {
        return e.includes("LEGITIMATE_ACTIVITY")
          ? "LEGITIMATE_ACTIVITY"
          : e.includes("DM_SPAM")
            ? "DM_SPAM"
            : e.includes("JOIN_RAID")
              ? "JOIN_RAID"
              : "OTHER";
      }
      n.r(t),
        n.d(t, {
          Feedback: function () {
            return o;
          },
          RaidAlertType: function () {
            return u;
          },
          RaidResolutionType: function () {
            return r;
          },
          getMostImportantRaidResolutionType: function () {
            return A;
          },
          RaidLockdownFeedbackType: function () {
            return _;
          },
        }),
        n("782340"),
        ((i = o || (o = {})).BUG = "BUG"),
        (i.ALLOWED = "ALLOWED"),
        (i.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"),
        ((E = u || (u = {})).JOIN_RAID = "JOIN_RAID"),
        (E.MENTION_RAID = "MENTION_RAID"),
        ((a = r || (r = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY"),
        (a.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS"),
        (a.LEGITIMATE_DMS = "LEGITIMATE_DMS"),
        (a.DM_SPAM = "DM_SPAM"),
        (a.JOIN_RAID = "JOIN_RAID"),
        (a.OTHER = "OTHER"),
        ((s = _ || (_ = {})).DM_SPAM = "DM_SPAM"),
        (s.MENTION_SPAM = "MENTION_SPAM"),
        (s.CHANNEL_SPAM = "CHANNEL_SPAM"),
        (s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS"),
        (s.CHANGING_SETTINGS = "CHANGING_SETTINGS"),
        (s.OTHER = "OTHER");
    },
    201131: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isAutomodMessageRecord: function () {
            return O;
          },
          isAutomodNotification: function () {
            return c;
          },
          getActionHeaderText: function () {
            return R;
          },
          getQuarantineReasonString: function () {
            return f;
          },
          extractAutomodNotificationFields: function () {
            return S;
          },
          default: function () {
            return m;
          },
          useAutomodAlertActions: function () {
            return L;
          },
          getRaidAlertResolveCTAText: function () {
            return U;
          },
          getUserIdOfAutomodAction: function () {
            return C;
          },
          IS_BACKWARDS_COMPAT_RAID_TYPE: function () {
            return y;
          },
        }),
        n("222007");
      var o = n("884691"),
        u = n("967190"),
        r = n("171149"),
        _ = n("427693"),
        i = n("404336"),
        E = n("772193"),
        a = n("657827"),
        s = n("446674"),
        A = n("42203"),
        d = n("957255"),
        T = n("228944"),
        l = n("85448"),
        N = n("49111"),
        I = n("782340");
      function O(e) {
        return e.type === N.MessageTypes.AUTO_MODERATION_ACTION;
      }
      function c(e) {
        var t;
        return null === (t = e.embeds) || void 0 === t
          ? void 0
          : t.some(e => {
              let { type: t } = e;
              return t === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION;
            });
      }
      function M(e, t) {
        var n, o, u, r, _;
        let [i] = null !== (n = e.embeds) && void 0 !== n ? n : [];
        if (null != i) {
          if (i.type === N.MessageEmbedTypes.AUTO_MODERATION_MESSAGE)
            return null == i
              ? void 0
              : null === (u = i.fields) || void 0 === u
                ? void 0
                : null ===
                      (o = u.find(e => {
                        let { rawName: n } = e;
                        return n === t;
                      })) || void 0 === o
                  ? void 0
                  : o.rawValue;
          if (i.type === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION)
            return null == i
              ? void 0
              : null === (_ = i.fields) || void 0 === _
                ? void 0
                : null ===
                      (r = _.find(e => {
                        let { rawName: n } = e;
                        return n === t;
                      })) || void 0 === r
                  ? void 0
                  : r.rawValue;
        }
      }
      function R(e, t) {
        var n, o;
        let _ =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : N.NOOP_NULL,
          a = (function (e) {
            let t = M(e, r.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
          })(e),
          s = (function (e) {
            let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
            if (null != t) return t;
          })(e),
          A = (function (e) {
            let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
            if (null != t) return t;
          })(e),
          T = (function (e) {
            let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER);
            if (null != t) return t;
          })(e);
        if (null != T) {
          let e = (function (e, t, n) {
            switch (t) {
              case E.AutomodQuarantineUserActionMessageEmbedKeys
                .BLOCK_PROFILE_UPDATE:
                return (function (e) {
                  switch (e) {
                    case u.AutomodBlockProfileUpdateMessageEmbedKeys
                      .NICKNAME_UPDATE:
                      return I.default.Messages
                        .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
                    case u.AutomodBlockProfileUpdateMessageEmbedKeys
                      .NICKNAME_RESET:
                      return I.default.Messages
                        .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
                    default:
                      return;
                  }
                })(e);
              case E.AutomodQuarantineUserActionMessageEmbedKeys
                .QUARANTINE_USER:
                return (function (e) {
                  switch (e) {
                    case i.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                      return I.default.Messages
                        .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
                    case i.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                      return I.default.Messages
                        .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
                    case i.AutomodQuarantineEventMessageEmbedKeys
                      .USERNAME_UPDATE:
                      return I.default.Messages
                        .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
                    default:
                      return;
                  }
                })(n);
              case E.AutomodQuarantineUserActionMessageEmbedKeys
                .BLOCK_GUEST_JOIN:
                return (function () {
                  return I.default.Messages
                    .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN;
                })();
            }
          })(a, s, A);
          if (null != e) return e;
        }
        let l = M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
          O = d.default.can(N.Permissions.VIEW_CHANNEL, t);
        let c =
            ((n = t),
            O
              ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o
                ? o
                : I.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
              : I.default.Messages.NO_ACCESS),
          R = null != t && O ? _ : N.NOOP_NULL,
          f = (function (e, t, n) {
            let o = M(
              e,
              r.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME
            );
            if (null == o) return null;
            let u =
              "blocked" === o
                ? I.default.Messages
                    .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK
                : I.default.Messages
                    .GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK;
            return u.format({ channelName: t, channelHook: n });
          })(e, c, _);
        return null != f
          ? f
          : null != l
            ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format(
                { channelName: c, channelHook: R }
              )
            : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format(
                { channelName: c, channelHook: R }
              );
      }
      function f(e) {
        switch (e) {
          case a.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
            return I.default.Messages
              .GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
          case a.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
            return I.default.Messages
              .GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
          case a.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
            return I.default.Messages
              .GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
          default:
            return I.default.Messages
              .GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
        }
      }
      function S(e) {
        var t, n;
        let o = M(e, _.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE),
          u = M(e, _.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
          r = M(e, _.AutomodNotificationEmbedKeys.RAID_DATETIME),
          i = M(e, _.AutomodNotificationEmbedKeys.DMS_SENT),
          E = M(e, _.AutomodNotificationEmbedKeys.RAID_TYPE),
          a = M(e, _.AutomodNotificationEmbedKeys.RESOLVED_REASON),
          s = M(e, _.AutomodNotificationEmbedKeys.DECISION_ID),
          A = M(
            e,
            _.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL
          );
        return {
          notificationType:
            null !== (t = null == (n = o) ? null : n) && void 0 !== t
              ? t
              : void 0,
          joinAttempts: null != u ? parseInt(u) : void 0,
          raidDatetime: null != r ? new Date(r) : void 0,
          dmsSent: null != i ? parseInt(i) : void 0,
          raidType: null != E ? E : void 0,
          resolvedReason: null != a ? a : void 0,
          decisionId: null != s ? s : void 0,
          suspiciousMentionActivityUntil: null != A ? new Date(A) : void 0,
        };
      }
      function D(e) {
        let t = M(e, r.AutomodMessageEmbedKeys.CHANNEL_ID),
          n = M(e, r.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
          o = (0, T.parseAlertActionsExecution)(n);
        return {
          content: (function (e) {
            var t, n;
            let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
            return null !== (n = null == o ? void 0 : o.rawDescription) &&
              void 0 !== n
              ? n
              : "";
          })(e),
          ruleName: M(e, r.AutomodMessageEmbedKeys.RULE_NAME),
          decisionId: M(e, r.AutomodMessageEmbedKeys.DECISION_ID),
          keyword: M(e, r.AutomodMessageEmbedKeys.KEYWORD),
          keywordMatchedContent: M(
            e,
            r.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT
          ),
          flaggedMessageId: M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
          timeoutDuration: M(e, r.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
          quarantineType: M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER),
          quarantineAction: M(
            e,
            r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION
          ),
          decisionReason: M(e, r.AutomodMessageEmbedKeys.DECISION_REASON),
          embedChannel: A.default.getChannel(t),
          embedChannelId: t,
          alertActionsExecution: null != o ? o : void 0,
        };
      }
      function m(e) {
        let t = o.useMemo(() => D(e), [e]),
          n = (0, s.useStateFromStores)(
            [A.default],
            () => A.default.getChannel(t.embedChannelId),
            [t.embedChannelId]
          );
        return { ...t, embedChannel: n };
      }
      function L(e) {
        if (null == e) return null;
        let { alertActionsExecution: t } = D(e);
        return null != t ? t : null;
      }
      function U(e) {
        if (null == e)
          return I.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
        switch (e) {
          case l.RaidResolutionType.LEGITIMATE_ACTIVITY:
            return I.default.Messages
              .GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
          case l.RaidResolutionType.DM_SPAM:
            return I.default.Messages
              .GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
          case l.RaidResolutionType.JOIN_RAID:
            return I.default.Messages
              .GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
          default:
            return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER;
        }
      }
      function C(e) {
        return M(e, _.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID);
      }
      let y = void 0;
    },
    143460: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AutomodEventType: function () {
            return _.AutomodEventType;
          },
          AutomodTriggerType: function () {
            return i.AutomodTriggerType;
          },
          AutomodActionType: function () {
            return r.AutomodActionType;
          },
          KeywordPreset: function () {
            return u;
          },
          MAX_KEYWORDS_PER_KEYWORD_FILTER: function () {
            return E;
          },
          MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: function () {
            return a;
          },
          MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE: function () {
            return s;
          },
          MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: function () {
            return A;
          },
          MAX_CHARACTERS_PER_KEYWORD: function () {
            return d;
          },
          MIN_CHARACTERS_PER_KEYWORD: function () {
            return T;
          },
          MIN_REGEX_PATTERN_LENGTH: function () {
            return l;
          },
          MAX_REGEX_PATTERN_LENGTH: function () {
            return N;
          },
          MAX_RULE_NAME_LENGTH: function () {
            return I;
          },
          MIN_MENTION_SPAM_LIMIT: function () {
            return O;
          },
          MAX_MENTION_SPAM_LIMIT: function () {
            return c;
          },
          MENTION_SPAM_LIMIT_DEFAULT: function () {
            return M;
          },
          MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: function () {
            return R;
          },
          QUARANTINE_USER_ALERT_KEY: function () {
            return f;
          },
        });
      var o,
        u,
        r = n("214764"),
        _ = n("155481"),
        i = n("363312");
      ((o = u || (u = {}))[(o.PROFANITY = 1)] = "PROFANITY"),
        (o[(o.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (o[(o.SLURS = 3)] = "SLURS"),
        i.AutomodTriggerType.USER_PROFILE,
        i.AutomodTriggerType.SERVER_POLICY,
        i.AutomodTriggerType.MENTION_SPAM,
        i.AutomodTriggerType.ML_SPAM,
        i.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
        i.AutomodTriggerType.KEYWORD;
      let E = 1e3,
        a = 100,
        s = 1e3,
        A = 10,
        d = 60,
        T = 1,
        l = 1,
        N = 260,
        I = 100,
        O = 1,
        c = 50,
        M = 20,
        R = 150,
        f = "automod-profile-quarantine-alert";
    },
    461439: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          _transformMetadataToCamelCase: function () {
            return function e(t) {
              if (null == t) return t;
              let n = Object.keys(t),
                u = n.reduce((n, u) => {
                  let r = (0, o.camelCase)(u);
                  return (
                    "object" != typeof t[u] || Array.isArray(t[u])
                      ? (n[r] = t[u])
                      : (n[r] = e(t[u])),
                    n
                  );
                }, {});
              return u;
            };
          },
          _transformMetadataToSnakeCase: function () {
            return function e(t) {
              if (null == t) return t;
              let n = Object.keys(t),
                u = n.reduce((n, u) => {
                  let r = (0, o.snakeCase)(u);
                  return (
                    "object" != typeof t[u] || Array.isArray(t[u])
                      ? (n[r] = t[u])
                      : (n[r] = e(t[u])),
                    (n[r] = t[u]),
                    n
                  );
                }, {});
              return u;
            };
          },
        }),
        n("808653");
      var o = n("917351");
    },
    928098: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getPromiseableActionHandlers: function () {
            return i;
          },
          openSubmitFeedback: function () {
            return E;
          },
          openRaidResolveModal: function () {
            return a;
          },
          openConfirmRemoveMentionRaid: function () {
            return s;
          },
        });
      var o = n("37983");
      n("884691");
      var u = n("77078"),
        r = n("143460"),
        _ = n("782340");
      function i(e) {
        return {
          [r.AutomodActionType.BLOCK_MESSAGE]: (e, t) =>
            new Promise(e => {
              (0, u.openModalLazy)(async () => {
                let { default: u } = await n
                  .el("83965")
                  .then(n.bind(n, "83965"));
                return n => {
                  var r;
                  return (0, o.jsx)(u, {
                    initialCustomMessage:
                      null !== (r = t.metadata.customMessage) && void 0 !== r
                        ? r
                        : "",
                    onSubmit: o => {
                      (t.metadata.customMessage = o), e(t), n.onClose();
                    },
                    ...n,
                    onClose: () => (e(null), n.onClose()),
                  });
                };
              });
            }),
          [r.AutomodActionType.FLAG_TO_CHANNEL]: (t, _) =>
            new Promise(i => {
              (0, u.openModalLazy)(async () => {
                let { default: u } = await n
                    .el("998730")
                    .then(n.bind(n, "998730")),
                  E = t.actions.find(
                    e => e.type === r.AutomodActionType.FLAG_TO_CHANNEL
                  );
                return n =>
                  (0, o.jsx)(u, {
                    action: _,
                    isEdit: null != E,
                    triggerType: t.triggerType,
                    guildId: e,
                    onEditChannel: e => {
                      (_.metadata.channelId = e),
                        t.exemptChannels.add(e),
                        i(_),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (i(null), n.onClose()),
                  });
              });
            }),
          [r.AutomodActionType.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise(_ => {
              (0, u.openModalLazy)(async () => {
                let { default: u } = await n
                    .el("489118")
                    .then(n.bind(n, "489118")),
                  i = e.actions.find(
                    e =>
                      e.type === r.AutomodActionType.USER_COMMUNICATION_DISABLED
                  );
                return n =>
                  (0, o.jsx)(u, {
                    action: t,
                    isEdit: null != i,
                    triggerType: e.triggerType,
                    onUpdateDuration: e => {
                      null != e && (t.metadata.durationSeconds = e),
                        _(t),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (_(null), n.onClose()),
                  });
              });
            }),
        };
      }
      function E(e, t, r, _) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await n.el("593486").then(n.bind(n, "593486"));
          return n =>
            (0, o.jsx)(u, {
              ...n,
              automodDecision: {
                messageId: e,
                messageContent: t,
                decisionId: r,
                channel: _,
              },
            });
        });
      }
      function a(e, t) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await n.el("561956").then(n.bind(n, "561956"));
          return n => (0, o.jsx)(u, { ...n, messageId: e, guildId: t });
        });
      }
      function s(e) {
        (0, u.openModal)(t =>
          (0, o.jsx)(u.ConfirmModal, {
            header:
              _.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: _.default.Messages.CONFIRM,
            onConfirm: e,
            cancelText: _.default.Messages.CANCEL,
            ...t,
            children: (0, o.jsx)(u.Text, {
              variant: "text-md/normal",
              children:
                _.default.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY,
            }),
          })
        );
      }
    },
    702873: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          validateAutomodRule: function () {
            return c;
          },
          createAutomodRule: function () {
            return M;
          },
          updateAutomodRule: function () {
            return R;
          },
          deleteAutomodRule: function () {
            return f;
          },
          fetchAutomodRules: function () {
            return S;
          },
          executeAlertAction: function () {
            return D;
          },
          removeMentionRaidRestrictionWithFeedback: function () {
            return m;
          },
          clearMentionRaidDetected: function () {
            return L;
          },
        }),
        n("222007");
      var o = n("872717"),
        u = n("913144"),
        r = n("716241"),
        _ = n("305961"),
        i = n("957255"),
        E = n("449008"),
        a = n("299039"),
        s = n("85448"),
        A = n("461439"),
        d = n("928098"),
        T = n("49111");
      function l(e) {
        return {
          type: e.type,
          metadata: (0, A._transformMetadataToSnakeCase)(e.metadata),
        };
      }
      function N(e) {
        var t, n;
        let o = (0, A._transformMetadataToSnakeCase)(e.triggerMetadata);
        return (
          null != o && delete o.keywordLists,
          {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: o,
            actions: e.actions.filter(E.isNotNullish).map(l),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(
              null !== (t = e.exemptChannels) && void 0 !== t ? t : []
            ),
            exempt_roles: Array.from(
              null !== (n = e.exemptRoles) && void 0 !== n ? n : []
            ),
          }
        );
      }
      function I(e) {
        return {
          type: e.type,
          metadata: (0, A._transformMetadataToCamelCase)(e.metadata),
        };
      }
      function O(e) {
        var t, n, o;
        let u = {
          id:
            null !== (t = e.id) && void 0 !== t
              ? t
              : a.default.fromTimestamp(Date.now()),
          name: e.name,
          guildId: e.guild_id,
          eventType: e.event_type,
          triggerType: e.trigger_type,
          triggerMetadata: (0, A._transformMetadataToCamelCase)(
            e.trigger_metadata
          ),
          actions: e.actions.filter(E.isNotNullish).map(I),
          enabled: e.enabled,
          creatorId: e.creator_id,
          position: e.position,
          exemptChannels: new Set(
            null !== (n = e.exempt_channels) && void 0 !== n ? n : []
          ),
          exemptRoles: new Set(
            null !== (o = e.exempt_roles) && void 0 !== o ? o : []
          ),
        };
        return (
          null != u.triggerMetadata && delete u.triggerMetadata.keywordLists, u
        );
      }
      async function c(e) {
        let t = N(e),
          n = await o.HTTP.post({
            url: T.Endpoints.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
          });
        return (0, A._transformMetadataToCamelCase)(n.body);
      }
      async function M(e) {
        let t = N(e);
        delete t.id;
        let n = await o.HTTP.post({
          url: T.Endpoints.GUILD_AUTOMOD_RULES(e.guildId),
          body: t,
        });
        return O(n.body);
      }
      async function R(e) {
        let t = N(e),
          n = await o.HTTP.patch({
            url: T.Endpoints.GUILD_AUTOMOD_RULE(e.guildId, e.id),
            body: t,
          });
        return O(n.body);
      }
      async function f(e, t) {
        return (
          await o.HTTP.del({ url: T.Endpoints.GUILD_AUTOMOD_RULE(t, e) }), !0
        );
      }
      async function S(e) {
        let t = await o.HTTP.get({ url: T.Endpoints.GUILD_AUTOMOD_RULES(e) });
        return Array.isArray(t.body) ? t.body.map(O) : [];
      }
      async function D(e, t, n) {
        i.default.can(T.Permissions.MANAGE_MESSAGES, t) &&
          (await o.HTTP.post({
            url: T.Endpoints.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
          }));
      }
      function m(e, t, n) {
        let u = _.default.getGuild(e);
        if (null != u && !!i.default.can(T.Permissions.MANAGE_GUILD, u))
          (0, d.openConfirmRemoveMentionRaid)(() => {
            (0, r.trackWithMetadata)(T.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: s.Feedback.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: t,
            }),
              o.HTTP.post({
                url: T.Endpoints.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
              }),
              n();
          });
      }
      function L(e) {
        u.default.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: e,
        });
      }
    },
    214764: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodActionType: function () {
            return o;
          },
        }),
        ((u = o || (o = {}))[(u.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
        (u[(u.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
        (u[(u.USER_COMMUNICATION_DISABLED = 3)] =
          "USER_COMMUNICATION_DISABLED"),
        (u[(u.QUARANTINE_USER = 4)] = "QUARANTINE_USER");
    },
    967190: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodBlockProfileUpdateMessageEmbedKeys: function () {
            return o;
          },
        }),
        ((u = o || (o = {})).NICKNAME_UPDATE = "nickname_update"),
        (u.NICKNAME_RESET = "nickname_reset");
    },
    155481: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodEventType: function () {
            return o;
          },
        }),
        ((u = o || (o = {}))[(u.UNKNOWN = 0)] = "UNKNOWN"),
        (u[(u.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (u[(u.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    171149: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodMessageEmbedKeys: function () {
            return o;
          },
        }),
        ((u = o || (o = {})).RULE_NAME = "rule_name"),
        (u.CHANNEL_ID = "channel_id"),
        (u.DECISION_ID = "decision_id"),
        (u.KEYWORD = "keyword"),
        (u.KEYWORD_MATCHED_CONTENT = "keyword_matched_content"),
        (u.FLAGGED_MESSAGE_ID = "flagged_message_id"),
        (u.TIMEOUT_DURATION = "timeout_duration"),
        (u.QUARANTINE_USER = "quarantine_user"),
        (u.QUARANTINE_USER_ACTION = "quarantine_user_action"),
        (u.DECISION_REASON = "decision_reason"),
        (u.ALERT_ACTIONS_EXECUTION = "alert_actions_execution"),
        (u.QUARANTINE_EVENT = "quarantine_event"),
        (u.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type"),
        (u.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome");
    },
    427693: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodNotificationEmbedKeys: function () {
            return o;
          },
        }),
        ((u = o || (o = {})).JOIN_ATTEMPTS = "join_attempts"),
        (u.RAID_DATETIME = "raid_datetime"),
        (u.DMS_SENT = "dms_sent"),
        (u.RAID_TYPE = "raid_type"),
        (u.RESOLVED_REASON = "resolved_reason"),
        (u.NOTIFICATION_TYPE = "notification_type"),
        (u.ACTION_BY_USER_ID = "action_by_user_id"),
        (u.DECISION_ID = "decision_id"),
        (u.SUSPICIOUS_MENTION_ACTIVITY_UNTIL =
          "suspicious_mention_activity_until");
    },
    404336: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodQuarantineEventMessageEmbedKeys: function () {
            return o;
          },
        }),
        ((u = o || (o = {})).MESSAGE_SEND = "message_send"),
        (u.GUILD_JOIN = "guild_join"),
        (u.USERNAME_UPDATE = "username_update");
    },
    772193: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodQuarantineUserActionMessageEmbedKeys: function () {
            return o;
          },
        }),
        ((u = o || (o = {})).BLOCK_PROFILE_UPDATE = "block_profile_update"),
        (u.QUARANTINE_USER = "quarantine_user"),
        (u.BLOCK_GUEST_JOIN = "block_guest_join");
    },
    657827: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodQuarantineUserMessageEmbedKeys: function () {
            return o;
          },
        }),
        ((u = o || (o = {})).BIO = "bio"),
        (u.USERNAME = "username"),
        (u.NICKNAME = "nickname"),
        (u.GLOBAL_NAME = "display_name");
    },
    363312: function (e, t, n) {
      "use strict";
      var o, u;
      n.r(t),
        n.d(t, {
          AutomodTriggerType: function () {
            return o;
          },
        }),
        ((u = o || (o = {}))[(u.KEYWORD = 1)] = "KEYWORD"),
        (u[(u.SPAM_LINK = 2)] = "SPAM_LINK"),
        (u[(u.ML_SPAM = 3)] = "ML_SPAM"),
        (u[(u.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
        (u[(u.MENTION_SPAM = 5)] = "MENTION_SPAM"),
        (u[(u.USER_PROFILE = 6)] = "USER_PROFILE"),
        (u[(u.SERVER_POLICY = 7)] = "SERVER_POLICY");
    },
  },
]);
//# sourceMappingURL=77d6b0ca5b7b0700a91f.js.map

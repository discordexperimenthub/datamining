(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67581"],
  {
    575351: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l = n("37983"),
        u = n("884691"),
        i = n("446674"),
        r = n("77078"),
        d = n("679653"),
        a = n("929278"),
        s = n("347895"),
        o = n("848848"),
        E = n("735251"),
        c = n("534222"),
        _ = n("592407"),
        f = n("610730"),
        N = n("271938"),
        T = n("305961"),
        h = n("957255"),
        S = n("49111"),
        C = n("782340"),
        m = n("221640"),
        v = e => {
          let { channel: t, onClose: n, onConfirm: v, transitionState: I } = e,
            g = (0, d.default)(t, !0),
            M = t.id,
            D = t.isForumPost(),
            L = (0, i.useStateFromStores)([T.default], () =>
              T.default.getGuild(t.getGuildId())
            ),
            A = (0, c.useGuildChannelScheduledEvents)(M),
            { isSubscriptionGated: p } = (0, o.default)(t.id),
            G = (0, E.default)(L, t),
            [O, y] = u.useState(null),
            R = (0, i.useStateFromStores)(
              [N.default],
              () => t.isOwner(N.default.getId()),
              [t]
            ),
            U = (0, i.useStateFromStores)(
              [h.default],
              () =>
                h.default.can(
                  t.isThread()
                    ? S.Permissions.MANAGE_THREADS
                    : S.Permissions.MANAGE_CHANNELS,
                  t
                ),
              [t]
            ),
            H = (0, i.useStateFromStores)(
              [f.default],
              () => {
                var e;
                return null !== (e = f.default.getCount(t.id)) && void 0 !== e
                  ? e
                  : 0;
              },
              [t.id]
            ),
            F = D && (U || (R && H < 1)),
            x =
              A.length > 0 &&
              (t.type === S.ChannelTypes.GUILD_VOICE ||
                t.type === S.ChannelTypes.GUILD_STAGE_VOICE);
          if (
            (u.useEffect(() => {
              (async () => {
                let e = await (0, a.isDefaultChannelThresholdMetAfterDelete)(
                  t.getGuildId(),
                  M
                );
                if (!e) {
                  y("default");
                  return;
                }
                let n = await (0, s.getBlockForChannelDeletion)(
                  t.getGuildId(),
                  M
                );
                if (!1 !== n) {
                  y(n);
                  return;
                }
              })();
            }, [t, M]),
            null != O)
          ) {
            let e;
            let t = C.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
            return (
              (e =
                "todo" === O
                  ? C.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO
                  : "resource" === O
                    ? C.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE
                    : C.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING),
              (0, l.jsxs)(r.ModalRoot, {
                transitionState: I,
                "aria-label": C.default.Messages.CANNOT_DELETE_CHANNEL,
                children: [
                  (0, l.jsx)(r.ModalHeader, {
                    separator: !1,
                    children: (0, l.jsx)(r.Heading, {
                      variant: "heading-lg/semibold",
                      children: C.default.Messages.CANNOT_DELETE_CHANNEL,
                    }),
                  }),
                  (0, l.jsxs)(r.ModalContent, {
                    className: m.modalContent,
                    children: [
                      (0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: t,
                      }),
                      (0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: e.format({
                          onClick: () => {
                            null != L &&
                              (_.default.open(
                                L.id,
                                S.GuildSettingsSections.ONBOARDING
                              ),
                              null == n || n());
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(r.ModalFooter, {
                    children: (0, l.jsx)(r.Button, {
                      onClick: n,
                      children: C.default.Messages.OKAY,
                    }),
                  }),
                ],
              })
            );
          }
          if (null == L) return null;
          if (
            L.hasFeature(S.GuildFeatures.COMMUNITY) &&
            (L.rulesChannelId === M || L.publicUpdatesChannelId === M)
          ) {
            let e = L.rulesChannelId === M,
              t = e
                ? C.default.Messages.DELETE_RULES_CHANNEL_BODY
                : C.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
            return (0, l.jsxs)(r.ModalRoot, {
              transitionState: I,
              "aria-label": C.default.Messages.CANNOT_DELETE_CHANNEL,
              children: [
                (0, l.jsx)(r.ModalHeader, {
                  separator: !1,
                  children: (0, l.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: C.default.Messages.CANNOT_DELETE_CHANNEL,
                  }),
                }),
                (0, l.jsxs)(r.ModalContent, {
                  children: [
                    (0, l.jsx)(r.Text, {
                      variant: "text-md/normal",
                      className: m.modalText,
                      children: t,
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-md/normal",
                      className: m.modalText,
                      children:
                        C.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                          onClick: () => {
                            _.default.open(
                              L.id,
                              S.GuildSettingsSections.COMMUNITY
                            ),
                              null == n || n();
                          },
                        }),
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalFooter, {
                  children: (0, l.jsx)(r.Button, {
                    onClick: n,
                    children: C.default.Messages.OKAY,
                  }),
                }),
              ],
            });
          }
          {
            let { deleteText: e, deleteBody: u } = (() => {
              if (t.type === S.ChannelTypes.GUILD_CATEGORY)
                return {
                  deleteText: C.default.Messages.DELETE_CATEGORY,
                  deleteBody: C.default.Messages.DELETE_CHANNEL_BODY.format({
                    channelName: g,
                  }),
                };
              if (t.isForumPost())
                return {
                  deleteText: F
                    ? C.default.Messages.DELETE_FORUM_POST
                    : C.default.Messages.DELETE_MESSAGE,
                  deleteBody:
                    F && R && !U
                      ? C.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format(
                          { postName: g }
                        )
                      : F
                        ? C.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format(
                            { postName: g }
                          )
                        : C.default.Messages
                            .DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY,
                };
              if (t.isThread())
                return {
                  deleteText: C.default.Messages.DELETE_THREAD,
                  deleteBody: C.default.Messages.DELETE_CHANNEL_BODY.format({
                    channelName: g,
                  }),
                };
              else if (p && G > 0)
                return {
                  deleteText: C.default.Messages.DELETE_CHANNEL,
                  deleteBody:
                    C.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format(
                      { channelName: g, numGuildRoleSubscriptionMembers: G }
                    ),
                };
              return {
                deleteText: C.default.Messages.DELETE_CHANNEL,
                deleteBody: C.default.Messages.DELETE_CHANNEL_BODY.format({
                  channelName: g,
                }),
              };
            })();
            return (0, l.jsxs)(r.ModalRoot, {
              transitionState: I,
              "aria-label": e,
              children: [
                (0, l.jsx)(r.ModalHeader, {
                  separator: !1,
                  children: (0, l.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: e,
                  }),
                }),
                (0, l.jsxs)(r.ModalContent, {
                  className: m.modalContent,
                  children: [
                    (0, l.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-primary",
                      children: u,
                    }),
                    x
                      ? (0, l.jsx)(r.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          className: m.warningText,
                          children:
                            C.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format(
                              { count: A.length }
                            ),
                        })
                      : null,
                  ],
                }),
                (0, l.jsxs)(r.ModalFooter, {
                  children: [
                    (0, l.jsx)(r.Button, {
                      onClick: v,
                      color: r.Button.Colors.RED,
                      children: e,
                    }),
                    (0, l.jsx)(r.Button, {
                      onClick: n,
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      children: C.default.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
          }
        };
    },
    962199: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n("222007");
      var l = n("917351"),
        u = n.n(l),
        i = n("446674"),
        r = n("913144"),
        d = n("398604"),
        a = n("813006"),
        s = n("730647");
      let o = !1,
        E = {},
        c = {},
        _ = {},
        f = e => (
          (_[e.guild_scheduled_event.id] = new a.default(
            e.guild_scheduled_event.guild
          )),
          (c[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class N extends i.default.Store {
        isFetching() {
          return o;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return E[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = _[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = c[e]) && void 0 !== t ? t : void 0;
        }
      }
      N.displayName = "EventDirectoryStore";
      var T = new N(r.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          o = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          o = !1;
          let l = u.sortBy(
              [...n],
              [
                function (e) {
                  return (0, d.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            i = u.map(l, f);
          E[t] = i;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
          o = !1;
        },
      });
    },
    347895: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchGuildHomeSettings: function () {
            return h;
          },
          fetchNewMemberActions: function () {
            return S;
          },
          selectHomeResourceChannel: function () {
            return C;
          },
          selectNewMemberActionChannel: function () {
            return m;
          },
          completeNewMemberAction: function () {
            return v;
          },
          getBlockForChannelDeletion: function () {
            return I;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("872717"),
        u = n("913144"),
        i = n("819689"),
        r = n("115718"),
        d = n("38654"),
        a = n("144491"),
        s = n("42203"),
        o = n("599110"),
        E = n("299039"),
        c = n("698882"),
        _ = n("129092"),
        f = n("675305"),
        N = n("290886"),
        T = n("49111");
      let h = async e => {
          u.default.dispatch({
            type: "GUILD_HOME_SETTINGS_FETCH_START",
            guildId: e,
          });
          try {
            let t = await l.HTTP.get({
                url: T.Endpoints.GUILD_HOME_SETTINGS(e),
                oldFormErrors: !0,
              }),
              n = (0, _.settingsFromServer)(t.body);
            return (
              u.default.dispatch({
                type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                guildId: e,
                homeSettings: n,
              }),
              n
            );
          } catch (t) {
            u.default.dispatch({
              type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
              guildId: e,
            });
          }
        },
        S = async e => {
          if (!d.default.isFullServerPreview(e)) {
            u.default.dispatch({
              type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
              guildId: e,
            });
            try {
              let t = await l.HTTP.get({
                  url: T.Endpoints.GUILD_MEMBER_ACTIONS(e),
                  oldFormErrors: !0,
                }),
                n = (0, _.actionsFromServer)(t.body);
              return (
                u.default.dispatch({
                  type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                  guildId: e,
                  memberActions: n,
                }),
                n
              );
            } catch (t) {
              u.default.dispatch({
                type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                guildId: e,
              });
            }
          }
        },
        C = function (e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (
            (u.default.dispatch({
              type: "SELECT_HOME_RESOURCE_CHANNEL",
              guildId: e,
              channelId: t,
            }),
            null == t)
          )
            return;
          let l = s.default.getChannel(t),
            _ = c.default.getResourceForChannel(e, t);
          null != e &&
            !d.default.isFullServerPreview(e) &&
            null != l &&
            null != _ &&
            o.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: l.id,
              server_guide_channel_type: "resource",
              channel_action_type: -1,
            }),
            n && (0, a.transitionToChannel)(t),
            i.default.jumpToMessage({
              channelId: t,
              messageId: E.default.castChannelIdAsMessageId(t),
              flash: !1,
              jumpType: r.JumpTypes.INSTANT,
            });
        },
        m = (e, t) => {
          u.default.dispatch({
            type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
            guildId: e,
            channelId: t,
          });
          let n = s.default.getChannel(t),
            l = c.default.getActionForChannel(e, t);
          null != e &&
            !d.default.isFullServerPreview(e) &&
            null != n &&
            null != l &&
            o.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
              guild_id: e,
              channel_id: n.id,
              server_guide_channel_type: "member action",
              channel_action_type: l.actionType,
            }),
            (0, a.transitionToChannel)(t);
        },
        v = (e, t) => {
          if (
            (u.default.dispatch({
              type: "COMPLETE_NEW_MEMBER_ACTION",
              guildId: e,
              channelId: t,
            }),
            d.default.isFullServerPreview(e))
          )
            return;
          let n = s.default.getChannel(t),
            i = c.default.getActionForChannel(e, t);
          if (null != n && null != i) {
            var r, a;
            let t = E.default.keys(
                null !== (r = f.default.getCompletedActions(e)) && void 0 !== r
                  ? r
                  : {}
              ),
              l =
                null !== (a = c.default.getNewMemberActions(e)) && void 0 !== a
                  ? a
                  : [];
            o.default.track(T.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
              guild_id: n.guild_id,
              channel_id: n.id,
              channel_action_type: i.actionType,
              has_completed_all: l.reduce(
                (e, n) => e && t.includes(n.channelId),
                !0
              ),
            });
          }
          l.HTTP.post({ url: T.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t) });
        };
      async function I(e, t) {
        if (null == e) return !1;
        let n = (0, N.canSeeOnboardingHome)(e);
        if (!n) return !1;
        let l = c.default.getSettings(e);
        return (
          l === c.NO_SETTINGS && (await h(e), (l = c.default.getSettings(e))),
          l !== c.NO_SETTINGS &&
            null != l &&
            (null != l.newMemberActions &&
            null != l.newMemberActions.find(e => e.channelId === t)
              ? "todo"
              : null != l.resourceChannels &&
                null != l.resourceChannels.find(e => e.channelId === t) &&
                "resource")
        );
      }
    },
    129092: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          WELCOME_MESSAGE_MIN_LENGTH: function () {
            return s;
          },
          WELCOME_MESSAGE_MAX_LENGTH: function () {
            return o;
          },
          NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function () {
            return E;
          },
          NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function () {
            return c;
          },
          NEW_MEMBER_ACTION_MAX: function () {
            return _;
          },
          RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function () {
            return f;
          },
          RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function () {
            return N;
          },
          RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function () {
            return T;
          },
          RESOURCE_CHANNEL_MAX: function () {
            return h;
          },
          NewMemberActionTypes: function () {
            return u;
          },
          newMemberActionFromServer: function () {
            return S;
          },
          resourceChannelFromServer: function () {
            return C;
          },
          settingsFromServer: function () {
            return m;
          },
          settingsToServer: function () {
            return v;
          },
          actionsFromServer: function () {
            return I;
          },
          isWelcomeMessageEmpty: function () {
            return g;
          },
          isSettingsEmpty: function () {
            return M;
          },
          isSettingsValid: function () {
            return D;
          },
          isChannelValidForResourceChannel: function () {
            return L;
          },
          isChannelValidForNewMemberAction: function () {
            return A;
          },
        });
      var l,
        u,
        i = n("42203"),
        r = n("449008"),
        d = n("991170"),
        a = n("49111");
      let s = 7,
        o = 300,
        E = 7,
        c = 60,
        _ = 5,
        f = 1,
        N = 30,
        T = 200,
        h = 7;
      function S(e) {
        var t;
        return {
          channelId: e.channel_id,
          actionType: e.action_type,
          title: e.title,
          description: e.description,
          emoji:
            null == e.emoji
              ? null
              : {
                  id: e.emoji.id,
                  name: e.emoji.name,
                  animated: e.emoji.animated,
                },
          icon: null !== (t = e.icon) && void 0 !== t ? t : null,
        };
      }
      function C(e) {
        var t, n;
        return {
          channelId: e.channel_id,
          title: e.title,
          description: null !== (t = e.description) && void 0 !== t ? t : "",
          emoji:
            null == e.emoji
              ? null
              : {
                  id: e.emoji.id,
                  name: e.emoji.name,
                  animated: e.emoji.animated,
                },
          icon: null !== (n = e.icon) && void 0 !== n ? n : null,
        };
      }
      function m(e) {
        if (null == e) return null;
        let {
            welcome_message: t,
            new_member_actions: n,
            resource_channels: l,
            enabled: u,
          } = e,
          d = { authorIds: t.author_ids, message: t.message },
          a = n
            .filter(e =>
              (0, r.isNotNullish)(i.default.getChannel(e.channel_id))
            )
            .map(S),
          s = l
            .filter(e =>
              (0, r.isNotNullish)(i.default.getChannel(e.channel_id))
            )
            .map(C);
        return {
          welcomeMessage: d,
          newMemberActions: a,
          resourceChannels: s,
          enabled: u,
        };
      }
      function v(e, t) {
        var n, l;
        if (null == t) return null;
        let {
            welcomeMessage: u,
            newMemberActions: d,
            resourceChannels: a,
            enabled: s,
          } = t,
          o = {
            author_ids:
              null !== (n = null == u ? void 0 : u.authorIds) && void 0 !== n
                ? n
                : [],
            message:
              null !== (l = null == u ? void 0 : u.message) && void 0 !== l
                ? l
                : "",
          },
          E = (null != d ? d : [])
            .filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, l, u, i, r, d;
              return {
                channel_id: e.channelId,
                action_type: e.actionType,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (u =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== u
                      ? u
                      : void 0,
                  name:
                    null !==
                      (i =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.name) && void 0 !== i
                      ? i
                      : void 0,
                  animated:
                    null !==
                      (r =
                        null === (l = e.emoji) || void 0 === l
                          ? void 0
                          : l.animated) && void 0 !== r
                      ? r
                      : void 0,
                },
                icon: null !== (d = e.icon) && void 0 !== d ? d : void 0,
              };
            }),
          c = (null != a ? a : [])
            .filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId)))
            .map(e => {
              var t, n, l, u, i, r, d;
              return {
                channel_id: e.channelId,
                title: e.title,
                description: e.description,
                emoji: {
                  id:
                    null !==
                      (u =
                        null === (t = e.emoji) || void 0 === t
                          ? void 0
                          : t.id) && void 0 !== u
                      ? u
                      : void 0,
                  name:
                    null !==
                      (i =
                        null === (n = e.emoji) || void 0 === n
                          ? void 0
                          : n.name) && void 0 !== i
                      ? i
                      : void 0,
                  animated:
                    null !==
                      (r =
                        null === (l = e.emoji) || void 0 === l
                          ? void 0
                          : l.animated) && void 0 !== r
                      ? r
                      : void 0,
                },
                icon: null !== (d = e.icon) && void 0 !== d ? d : void 0,
              };
            });
        return {
          guild_id: e,
          welcome_message: o,
          new_member_actions: E,
          resource_channels: c,
          enabled: s,
        };
      }
      ((l = u || (u = {}))[(l.VIEW = 0)] = "VIEW"), (l[(l.CHAT = 1)] = "CHAT");
      let I = e => {
        if (null == e) return null;
        let t = {};
        for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
        return t;
      };
      function g(e) {
        return (
          null == e ||
          ((null == e.message || !(e.message.length > 0)) &&
            (null == e.authorIds || !(e.authorIds.length > 0)) &&
            !0)
        );
      }
      function M(e) {
        return (
          null == e ||
          (!!g(e.welcomeMessage) &&
            (null == e.newMemberActions || !(e.newMemberActions.length > 0)) &&
            (null == e.resourceChannels || !(e.resourceChannels.length > 0)) &&
            !0)
        );
      }
      function D(e) {
        var t, n;
        return (
          null != e &&
          (!!M(e) ||
            ((null === (t = e.welcomeMessage) || void 0 === t
              ? void 0
              : t.message) != null &&
              !(e.welcomeMessage.message.length < s) &&
              (null === (n = e.welcomeMessage) || void 0 === n
                ? void 0
                : n.authorIds) != null &&
              0 !== e.welcomeMessage.authorIds.length &&
              null != e.newMemberActions &&
              !(e.newMemberActions.length < 3) &&
              !0))
        );
      }
      function L(e) {
        return (
          e.type === a.ChannelTypes.GUILD_TEXT &&
          !d.canEveryoneRole(a.Permissions.SEND_MESSAGES, e) &&
          d.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e)
        );
      }
      function A(e) {
        switch (e.type) {
          case a.ChannelTypes.GUILD_TEXT:
          case a.ChannelTypes.GUILD_ANNOUNCEMENT:
          case a.ChannelTypes.GUILD_FORUM:
          case a.ChannelTypes.GUILD_MEDIA:
            return d.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e);
          default:
            return !1;
        }
      }
    },
    795228: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("884691"),
        u = n("446674"),
        i = n("895026"),
        r = n("36402");
      let d = {};
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, u.useStateFromStores)([r.default], () =>
            r.default.getRoleMemberCount(e)
          );
        return (
          l.useEffect(() => {
            if (null == e) return;
            let n = d[e],
              l = null != n && t > 0 && Date.now() - n < t;
            !l && ((d[e] = Date.now()), i.fetchMemberCounts(e));
          }, [e, t]),
          n
        );
      }
    },
    735251: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n("222007");
      var l = n("884691"),
        u = n("316693"),
        i = n("446674"),
        r = n("305961"),
        d = n("828674"),
        a = n("866595"),
        s = n("795228"),
        o = n("49111");
      function E(e, t) {
        let n = (0, i.useStateFromStores)([r.default], () =>
            null != e ? r.default.getRoles(e.id) : void 0
          ),
          E = (0, s.default)(null == e ? void 0 : e.id);
        return l.useMemo(() => {
          let l =
              null != e && null != n
                ? (function (e, t, n) {
                    let l = new Set();
                    for (let e of Object.keys(n.permissionOverwrites)) {
                      let u = t[e],
                        i = n.permissionOverwrites[e];
                      (0, d.isSubscriptionRole)(u) &&
                        (0, a.isChannelAccessGrantedBy)(n, i) &&
                        l.add(u);
                    }
                    let i = t[e.getEveryoneRoleId()],
                      r =
                        null != i &&
                        !u.has(i.permissions, o.Permissions.VIEW_CHANNEL),
                      s = (0, a.isChannelAccessDeniedBy)(
                        n,
                        n.permissionOverwrites[e.id]
                      );
                    if (r && !s)
                      for (let e of Object.values(t))
                        (0, d.isSubscriptionRole)(e) &&
                          (0, a.isAllChannelsRole)(e) &&
                          l.add(e);
                    return [...l];
                  })(e, n, t)
                : [],
            i = 0;
          for (let e of l) {
            let t = e.id;
            if (null != t) {
              let e = null == E ? void 0 : E[t];
              null != e && (i += e);
            }
          }
          return i;
        }, [E, e, t, n]);
      }
    },
    49129: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getNextShownUpcomingEventNoticeType: function () {
            return d;
          },
        });
      var l = n("866227"),
        u = n.n(l),
        i = n("299039"),
        r = n("745049");
      function d(e, t, n, l) {
        let d = u(),
          a = new Date(e.scheduled_start_time).getTime(),
          s = { start: a - r.EVENT_STARTING_SOON_WINDOW_MILLISECONDS, end: a };
        if (d.isBetween(s.start, s.end)) {
          if (null != t) {
            let e = u(t),
              n = e.isBetween(s.start, s.end),
              i = e.isBetween(
                u(a).subtract(r.ACKED_RECENTLY_WINDOW_DAYS, "days"),
                a
              );
            return n || (i && !l)
              ? void 0
              : r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
          }
          return r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
        }
        let o = i.default.extractTimestamp(e.id),
          E = Math.min(
            (null != n ? n : o) + r.NEW_EVENT_WINDOW_MILLISECONDS,
            a
          ),
          c = d.isBetween(o, E);
        if (c && null == t && !l)
          return r.UpcomingGuildEventNoticeTypes.NEW_EVENT;
      }
    },
    431934: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var l = n("446674"),
        u = n("913144"),
        i = n("271938"),
        r = n("398604"),
        d = n("49129"),
        a = n("745049");
      let s = {},
        o = {};
      function E(e) {
        let t = { ...s };
        delete t[e], (s = t);
        let n = { ...o };
        delete n[e], (o = n);
      }
      class c extends l.default.PersistedStore {
        initialize(e) {
          if (null != e) {
            var t, n;
            (s =
              null !== (t = e.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (o =
                null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n
                  ? n
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(e) {
          return s[e];
        }
        getAllEventDismissals() {
          return s;
        }
        getUpcomingNoticeSeenTime(e) {
          return o[e];
        }
        getAllUpcomingNoticeSeenTimes() {
          return o;
        }
        getState() {
          return { upcomingEventDismissals: s, upcomingEventSeenTimestamps: o };
        }
      }
      (c.displayName = "UpcomingEventNoticesStore"),
        (c.persistKey = "UpcomingEventNotices");
      var _ = new c(u.default, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
          let { eventId: t } = e,
            n = { ...s };
          (n[t] = Date.now()), (s = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
          let { guildScheduledEvent: t } = e;
          (t.status === a.GuildScheduledEventStatus.CANCELED ||
            t.status === a.GuildScheduledEventStatus.COMPLETED) &&
            E(t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
          let { guildScheduledEvent: t } = e;
          E(t.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
          let { userId: t, guildEventId: n } = e,
            l = i.default.getId();
          if (t !== l) return;
          let u = r.default.getGuildScheduledEvent(n);
          if (null == u || u.status !== a.GuildScheduledEventStatus.SCHEDULED)
            return;
          let E = s[n];
          if (null != E) return;
          let c = o[n],
            _ = (0, d.getNextShownUpcomingEventNoticeType)(u, void 0, c, !1);
          if (_ === a.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
            let e = { ...s };
            (e[n] = Date.now()), (s = e);
          }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
          let { guildEventId: t } = e,
            n = { ...o };
          (n[t] = Date.now()), (o = n);
        },
      });
    },
    534222: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
          useActiveEvent: function () {
            return I;
          },
          useActiveEventsByChannel: function () {
            return g;
          },
          useGuildUpcomingEventsNotice: function () {
            return M;
          },
          useGuildActiveEvent: function () {
            return D;
          },
          useGuildChannelScheduledEvents: function () {
            return L;
          },
          useFirstActiveEventChannel: function () {
            return A;
          },
          useImminentUpcomingGuildEvents: function () {
            return p;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("884691"),
        u = n("446674"),
        i = n("962199"),
        r = n("42203"),
        d = n("923959"),
        a = n("305961"),
        s = n("957255"),
        o = n("718517"),
        E = n("449008"),
        c = n("398604"),
        _ = n("49129"),
        f = n("431934"),
        N = n("466148"),
        T = n("822516"),
        h = n("745049"),
        S = n("49111");
      let C = [],
        m = 15 * o.default.Millis.MINUTE;
      function v(e, t) {
        return (0, u.useStateFromStoresArray)(
          [a.default, i.default, c.default, s.default, r.default, d.default],
          () => {
            let n = a.default.getGuild(e);
            if (null == n) return C;
            let l = n.hasFeature(S.GuildFeatures.HUB);
            if (l) {
              var u, o;
              let e =
                  null === (u = d.default.getDefaultChannel(n.id)) ||
                  void 0 === u
                    ? void 0
                    : u.id,
                t =
                  null !== (o = i.default.getEventDirectoryEntries(e)) &&
                  void 0 !== o
                    ? o
                    : [];
              return t
                .map(e => {
                  let t = e.scheduledEventId,
                    n = c.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : i.default.getCachedGuildScheduledEventById(t);
                })
                .filter(E.isNotNullish);
            }
            let _ = c.default.getGuildScheduledEventsByIndex(
              null != t
                ? t
                : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)
            );
            return _.filter(e => {
              let t = e.channel_id;
              if (null == t) return !0;
              let n = r.default.getChannel(t);
              return s.default.can(S.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function I(e) {
        return (0, u.useStateFromStores)(
          [c.default, r.default, s.default],
          () => {
            let t = r.default.getChannel(e);
            if (!s.default.can(S.Permissions.VIEW_CHANNEL, t)) return null;
            let n = null == t ? void 0 : t.guild_id;
            if (null == n) return null;
            let l = c.default.getGuildScheduledEventsByIndex(
              c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e)
            );
            return l.length > 0 ? l[0] : null;
          },
          [e]
        );
      }
      function g(e) {
        let t = (0, u.useStateFromStoresArray)(
            [c.default],
            () => c.default.getGuildScheduledEventsForGuild(e),
            [e]
          ),
          n = l.useMemo(() => {
            let e = new Map();
            return (
              t.forEach(t => {
                let n = t.channel_id;
                null != n && e.set(n, t);
              }),
              e
            );
          }, [t]);
        return n;
      }
      function M(e) {
        var t, n;
        let l =
            ((t = e),
            (0, u.useStateFromStoresArray)(
              [c.default, r.default, s.default],
              () => {
                let e = c.default.getGuildScheduledEventsByIndex(
                  c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)
                );
                return e.filter(e => {
                  if (
                    e.entity_type === h.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== h.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = r.default.getChannel(e.channel_id);
                  return s.default.can(S.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          i = (0, u.useStateFromStoresObject)([f.default], () =>
            f.default.getAllEventDismissals()
          ),
          d = (0, u.useStateFromStoresObject)([f.default], () =>
            f.default.getAllUpcomingNoticeSeenTimes()
          ),
          a = (0, u.useStateFromStoresObject)(
            [c.default],
            () =>
              null == l
                ? {}
                : l.reduce((e, t) => {
                    let n = (0, T.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: c.default.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [l]
          );
        if (null != l && null != a)
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              u = i[t.id],
              r = d[t.id],
              s = null !== (n = a[t.id]) && void 0 !== n && n,
              o = (0, _.getNextShownUpcomingEventNoticeType)(t, u, r, s);
            if (null != o) return { upcomingEvent: t, noticeType: o };
          }
      }
      function D(e) {
        return (0, u.useStateFromStores)(
          [c.default, r.default, s.default],
          () => {
            let t = c.default.getGuildScheduledEventsByIndex(
              c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === h.GuildScheduledEventEntityTypes.NONE ||
                !(0, c.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = r.default.getChannel(e.channel_id);
              return s.default.can(S.Permissions.VIEW_CHANNEL, t);
            });
          },
          [e]
        );
      }
      function L(e) {
        return (0, u.useStateFromStores)(
          [c.default],
          () =>
            c.default.getGuildScheduledEventsByIndex(
              c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
            ),
          [e]
        );
      }
      function A(e) {
        return (0, u.useStateFromStores)(
          [r.default, c.default],
          () => {
            let t = c.default
              .getGuildScheduledEventsByIndex(
                c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
              )
              .find(e => {
                let t = r.default.getChannel(e.channel_id);
                return null != t;
              });
            return r.default.getChannel(null == t ? void 0 : t.channel_id);
          },
          [e]
        );
      }
      function p(e) {
        let [t, n] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, m);
          return () => clearInterval(e);
        }, []);
        let i = (0, u.useStateFromStores)(
            [c.default],
            () =>
              null == e
                ? []
                : c.default.getGuildScheduledEventsByIndex(
                    c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
                  ),
            [e, t]
          ),
          r = l.useMemo(
            () =>
              i.filter(e => {
                let { startTime: t, endTime: n } = (0, N.getEventSchedule)(e),
                  { withinStartWindow: l, diffMinutes: u } = (0,
                  T.getEventTimeData)(
                    t.toISOString(),
                    null == n ? void 0 : n.toISOString()
                  );
                return (
                  e.status !== h.GuildScheduledEventStatus.ACTIVE && l && u < 15
                );
              }),
            [i]
          );
        return r;
      }
    },
    895026: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          fetchMemberCounts: function () {
            return E;
          },
          requestMembersForRole: function () {
            return _;
          },
        });
      var l = n("693566"),
        u = n.n(l),
        i = n("872717"),
        r = n("913144"),
        d = n("851387"),
        a = n("36402"),
        s = n("49111");
      async function o(e) {
        try {
          r.default.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
            guildId: e,
          });
          let t = await i.HTTP.get({
              url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e),
            }),
            n = t.body;
          r.default.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
            guildId: e,
            roleMemberCount: n,
          });
        } catch (t) {
          r.default.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
            guildId: e,
          });
        }
      }
      async function E(e) {
        a.default.shouldFetch(e) && (await o(e));
      }
      let c = new u({ maxAge: 1e4 });
      function _(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = "".concat(e, "-").concat(t);
        if (!n || null == c.get(l)) {
          var u, r;
          return (
            c.set(l, !0),
            (u = e),
            (r = t),
            i.HTTP.get({ url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(u, r) }).then(
              e => (d.default.requestMembersById(u, e.body, !1), e.body.length)
            )
          );
        }
        return Promise.resolve(null);
      }
    },
    36402: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n("446674"),
        u = n("913144");
      let i = {},
        r = {};
      class d extends l.default.Store {
        getRoleMemberCount(e) {
          return null != e ? i[e] : null;
        }
        shouldFetch(e) {
          if (null == e) return !1;
          let t = r[e];
          return null == t || Date.now() - t > 12e4;
        }
      }
      d.displayName = "GuildRoleMemberCountStore";
      var a = new d(u.default, {
        GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
          let { guildId: t, roleMemberCount: n } = e;
          (i[t] = n), (r[t] = Date.now());
        },
        GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
          let { guildId: t, roleId: n, count: l } = e,
            u = i[t];
          if (null == u) return !1;
          u[n] = l;
        },
        GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
          let { guildId: t, roleId: n, added: l } = e,
            u = i[t];
          if (null == u || null == u[n]) return !1;
          let r = Object.keys(l).length;
          u[n] += r;
        },
        GUILD_ROLE_MEMBER_ADD: function (e) {
          let { guildId: t, roleId: n } = e,
            l = i[t];
          if (null == l || null == l[n]) return !1;
          l[n] = l[n] + 1;
        },
        GUILD_ROLE_MEMBER_REMOVE: function (e) {
          let { guildId: t, roleId: n } = e,
            l = i[t];
          if (null == l || null == l[n]) return !1;
          l[n] = Math.max(l[n] - 1, 0);
        },
        GUILD_ROLE_CREATE: function (e) {
          let { guildId: t, role: n } = e;
          null == i[t] && (i[t] = {}), (i[t][n.id] = 0);
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          delete i[t.id], delete r[t.id];
        },
      });
    },
  },
]);
//# sourceMappingURL=4ebcdb143dac8945798d.js.map

(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10524"],
  {
    234997: function (e, t, n) {
      "use strict";
      e.exports = n.p + "870ce21aeffa60252eb0.svg";
    },
    917798: function (e, t, n) {
      "use strict";
      n.r(t);
      var l = n("142233");
      n.es(l, t);
    },
    843624: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return _;
          },
          default: function () {
            return N;
          },
        }),
        n("222007"),
        n("781738");
      var l = n("37983"),
        a = n("884691"),
        u = n("65597"),
        r = n("77078"),
        i = n("18054"),
        d = n("207273"),
        s = n("850391"),
        o = n("149022"),
        c = n("681060"),
        f = n("945956"),
        E = n("145131"),
        C = n("599110"),
        S = n("49111"),
        v = n("782340"),
        h = n("658812");
      let _ = "VoiceChannelStatusModal";
      function N(e) {
        let { channel: t, transitionState: n, onClose: N } = e,
          T = (0, u.useStateFromStores)([d.default], () =>
            d.default.getChannelStatus(t)
          ),
          g = (0, u.useStateFromStores)([f.default], () =>
            f.default.getMediaSessionId()
          ),
          [m, I] = a.useState(null != T ? T : ""),
          [A, p] = a.useState(!1),
          [y, L] = a.useState(null);
        a.useEffect(() => {
          C.default.track(S.AnalyticEvents.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
          });
        }, [t.guild_id]);
        let O = async e => {
            m === T && N(), null == e || e.preventDefault(), L(null), p(!0);
            let n = m.length,
              l = m.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
            await i.default.updateVoiceChannelStatus(t.id, m).then(
              e => {
                204 === e.status
                  ? (C.default.track(S.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
                      guild_id: t.guild_id,
                      channel_id: t.id,
                      media_session_id: g,
                      raw_length: n,
                      text_length: l,
                    }),
                    N())
                  : L(e.body.message);
              },
              e => {
                L(e.body.message);
              }
            ),
              p(!1);
          },
          [F, M] = a.useState((0, o.toRichValue)(m));
        return (0, l.jsx)("form", {
          onSubmit: O,
          className: h.form,
          children: (0, l.jsxs)(r.ModalRoot, {
            transitionState: n,
            size: r.ModalSize.SMALL,
            children: [
              (0, l.jsxs)(r.ModalContent, {
                children: [
                  (0, l.jsxs)(r.ModalHeader, {
                    direction: E.default.Direction.VERTICAL,
                    className: h.modalHeader,
                    separator: !1,
                    children: [
                      (0, l.jsx)(r.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: N,
                      }),
                      (0, l.jsx)("div", { className: h.headerImage }),
                      (0, l.jsx)(r.FormTitle, {
                        tag: "h1",
                        className: h.title,
                        children:
                          v.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE,
                      }),
                      (0, l.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children:
                          v.default.Messages
                            .VOICE_CHANNEL_STATUS_MODAL_SUBTITLE,
                      }),
                    ],
                  }),
                  (0, l.jsxs)(r.FormSection, {
                    className: h.inputSection,
                    title: v.default.Messages.VOICE_CHANNEL_STATUS,
                    children: [
                      (0, l.jsx)(c.default, {
                        innerClassName: h.textArea,
                        textValue: m,
                        richValue: F,
                        placeholder:
                          v.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format(
                            { channelName: t.name }
                          ),
                        focused: !0,
                        channel: t,
                        onChange: (e, t, n) => {
                          I(t), M(n);
                        },
                        onSubmit: () => (
                          O(),
                          Promise.resolve({
                            shouldClear: !1,
                            shouldRefocus: !0,
                          })
                        ),
                        type: s.ChatInputTypes.VOICE_CHANNEL_STATUS,
                        canMentionRoles: !1,
                        canMentionChannels: !1,
                        allowNewLines: !1,
                        parentModalKey: _,
                        maxCharacterCount: 500,
                        showRemainingCharsAfterCount: 250,
                        emojiPickerCloseOnModalOuterClick: !0,
                      }),
                      null != y
                        ? (0, l.jsx)(r.FormErrorBlock, {
                            className: h.error,
                            children: y,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)(r.ModalFooter, {
                justify: E.default.Justify.BETWEEN,
                direction: E.default.Direction.HORIZONTAL,
                children: [
                  (0, l.jsx)(r.Button, {
                    color: r.Button.Colors.PRIMARY,
                    onClick: N,
                    children: v.default.Messages.CANCEL,
                  }),
                  (0, l.jsx)(r.Button, {
                    onClick: O,
                    submitting: A,
                    className: h.button,
                    disabled: m.length > 500,
                    children:
                      v.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    458574: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("281071"),
        u = n("65597"),
        r = n("77078"),
        i = n("867965"),
        d = n("42203"),
        s = n("404008"),
        o = n("49111"),
        c = n("782340");
      function f(e, t, n) {
        let f = (0, u.useStateFromStores)([d.default], () =>
          d.default.getChannel(e.parent_id)
        );
        return (0, l.jsx)(r.MenuItem, {
          id: "channel-copy-link",
          label: c.default.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, i.trackForumPostLinkCopied)({
                postId: e.id,
                location: { section: o.AnalyticsSections.CONTEXT_MENU },
              }),
              (0, a.copy)((0, s.getChannelLinkToCopy)(e, f, t, n));
          },
        });
      }
    },
    308798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("446674"),
        u = n("77078"),
        r = n("18054"),
        i = n("819689"),
        d = n("430475"),
        s = n("610730"),
        o = n("271938"),
        c = n("957255"),
        f = n("299039"),
        E = n("49111"),
        C = n("782340");
      function S(e) {
        let t = e.isForumPost(),
          S = (0, a.useStateFromStores)(
            [o.default],
            () => e.isOwner(o.default.getId()),
            [e]
          ),
          { canManageChannel: v, canAccessChannel: h } = (0,
          a.useStateFromStoresObject)(
            [c.default],
            () => ({
              canAccessChannel: c.default.can(e.accessPermissions, e),
              canManageChannel: c.default.can(
                e.isThread()
                  ? E.Permissions.MANAGE_THREADS
                  : E.Permissions.MANAGE_CHANNELS,
                e
              ),
            }),
            [e]
          ),
          _ = (0, a.useStateFromStores)(
            [s.default],
            () => {
              var t;
              return null !== (t = s.default.getCount(e.id)) && void 0 !== t
                ? t
                : 0;
            },
            [e.id]
          ),
          { firstMessage: N } = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getMessage(e.id),
            [e.id]
          ),
          T = t && (v || (S && _ < 1)),
          g = t && S && !v && _ > 0 && null != N;
        return h && (v || T || g)
          ? (0, l.jsx)(u.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === E.ChannelTypes.GUILD_CATEGORY)
                  return C.default.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return T
                    ? C.default.Messages.DELETE_FORUM_POST
                    : C.default.Messages.DELETE_MESSAGE;
                if (e.isThread()) return C.default.Messages.DELETE_THREAD;
                return C.default.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () =>
                (0, u.openModalLazy)(async () => {
                  let { default: t } = await n
                    .el("575351")
                    .then(n.bind(n, "575351"));
                  return n =>
                    (0, l.jsx)(t, {
                      ...n,
                      onConfirm: () => {
                        n.onClose(),
                          g
                            ? i.default.deleteMessage(
                                e.id,
                                f.default.castChannelIdAsMessageId(e.id)
                              )
                            : r.default.deleteChannel(e.id);
                      },
                      channel: e,
                    });
                }),
            })
          : null;
      }
    },
    962199: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        }),
        n("222007");
      var l = n("917351"),
        a = n.n(l),
        u = n("446674"),
        r = n("913144"),
        i = n("398604"),
        d = n("813006"),
        s = n("730647");
      let o = !1,
        c = {},
        f = {},
        E = {},
        C = e => (
          (E[e.guild_scheduled_event.id] = new d.default(
            e.guild_scheduled_event.guild
          )),
          (f[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class S extends u.default.Store {
        isFetching() {
          return o;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return c[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : void 0;
        }
      }
      S.displayName = "EventDirectoryStore";
      var v = new S(r.default, {
        EVENT_DIRECTORY_FETCH_START: function () {
          o = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
          let { channelId: t, entries: n } = e;
          o = !1;
          let l = a.sortBy(
              [...n],
              [
                function (e) {
                  return (0, i.scheduledEventSort)(e.guild_scheduled_event);
                },
              ]
            ),
            u = a.map(l, C);
          c[t] = u;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
          o = !1;
        },
      });
    },
    200008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          addFavoriteChannel: function () {
            return f;
          },
          removeFavoriteChannel: function () {
            return E;
          },
          setFavoriteChannelNickname: function () {
            return C;
          },
          addFavoriteCategory: function () {
            return S;
          },
          removeFavoriteCategory: function () {
            return v;
          },
          updateFavoriteChannels: function () {
            return h;
          },
          updateFavoriteChannelParent: function () {
            return _;
          },
          toggleFavoriteServerMuted: function () {
            return N;
          },
        }),
        n("222007");
      var l = n("151426"),
        a = n("872173"),
        u = n("42203"),
        r = n("957255"),
        i = n("299039"),
        d = n("379881"),
        s = n("843455");
      function o() {
        let e = d.default.getFavoriteChannels(),
          t = 1;
        for (let n in e) t = Math.max(t, e[n].order);
        return t + 1;
      }
      function c(e) {
        for (let t in e) {
          let n = e[t];
          if (null == n) {
            delete e[t];
            continue;
          }
          if (n.type === l.FavoriteChannelType.CATEGORY) continue;
          let a = u.default.getChannel(t);
          if (
            null == a ||
            (!a.isPrivate() && !r.default.can(s.Permissions.VIEW_CHANNEL, a))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function f(e, t) {
        let n = d.default.isFavorite(e);
        !n &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              (n.favoriteChannels[e] = l.FavoriteChannel.create({
                nickname: "",
                type: l.FavoriteChannelType.REFERENCE_ORIGINAL,
                position: o(),
                parentId: null != t ? t : "0",
              })),
                c(n.favoriteChannels);
            },
            a.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function E(e) {
        let t = d.default.getFavorite(e);
        null != t &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              if (
                (delete n.favoriteChannels[e],
                t.type === l.FavoriteChannelType.CATEGORY)
              )
                for (let t in n.favoriteChannels)
                  n.favoriteChannels[t].parentId === e &&
                    (n.favoriteChannels[t].parentId = "0");
              c(n.favoriteChannels);
            },
            a.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function C(e, t) {
        let n = d.default.isFavorite(e);
        n &&
          a.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            n => {
              n.favoriteChannels[e].nickname = null != t ? t : "";
            },
            a.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function S(e) {
        let t = i.default.fromTimestamp(Date.now());
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[t] = l.FavoriteChannel.create({
              nickname: e,
              type: l.FavoriteChannelType.CATEGORY,
              position: o(),
              parentId: "0",
            });
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function v(e) {
        E(e);
      }
      function h(e) {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          t => {
            for (let l of e)
              if (
                (null != l.position &&
                  (t.favoriteChannels[l.id].position = l.position),
                void 0 !== l.parent_id)
              ) {
                var n;
                t.favoriteChannels[l.id].parentId =
                  null !== (n = l.parent_id) && void 0 !== n ? n : "0";
              }
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function _(e, t) {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          n => {
            n.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          a.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function N() {
        a.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          a.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
    },
    986373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCanFavoriteChannel: function () {
            return E;
          },
          useFavorite: function () {
            return C;
          },
          useFavoritesCategories: function () {
            return S;
          },
          useFavoritesGuildSelected: function () {
            return v;
          },
          useFavoriteAdded: function () {
            return h;
          },
        }),
        n("222007"),
        n("424973");
      var l = n("884691"),
        a = n("298386"),
        u = n("446674");
      n("42203");
      var r = n("923959"),
        i = n("162771"),
        d = n("697218");
      n("299039");
      var s = n("379881"),
        o = n("498139"),
        c = n("136569"),
        f = n("49111");
      function E(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: n } = (0,
          o.useFavoritesServerExperiment)("useCanFavoriteChannel"),
          l = (0, u.useStateFromStores)([s.default], () =>
            s.default.isFavorite(e.id)
          ),
          a = (0, u.useStateFromStores)([d.default], () =>
            d.default.getCurrentUser()
          ),
          r = e.isDM() || e.isThread(),
          i = !r || (n && (null == a ? void 0 : a.isStaff()) === !0);
        return t && !__OVERLAY__ && !l && i;
      }
      function C(e) {
        let t = (0, u.useStateFromStores)([s.default], () =>
          s.default.getFavorite(e)
        );
        return t;
      }
      function S() {
        let e = (0, u.useStateFromStores)([r.default], () =>
          r.default.getChannels(f.FAVORITES)
        )[a.ChannelTypes.GUILD_CATEGORY];
        return e.map(e => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function v() {
        let e = (0, u.useStateFromStores)([i.default], () =>
          i.default.getGuildId()
        );
        return e === f.FAVORITES;
      }
      function h() {
        let { isFavoritesPerk: e } = (0, o.useFavoritesServerExperiment)(
            "useFavoriteAdded"
          ),
          t = (0, c.useFavoritesTooltipStore)(),
          n = l.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          a = l.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: n,
          clearFavoriteAdded: a,
        };
      }
    },
    136569: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFavoritesTooltipStore: function () {
            return a;
          },
        });
      var l = n("308503");
      let a = (0, l.default)(e => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => e({ favoriteAdded: !0 }),
        clearFavoriteAdded: () => e({ favoriteAdded: !1 }),
      }));
    },
    20209: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return r;
          },
        });
      var l = n("446674"),
        a = n("162771"),
        u = n("49111");
      function r() {
        let e = (0, l.useStateFromStores)([a.default], () =>
          a.default.getGuildId()
        );
        return e === u.FAVORITES;
      }
    },
    889486: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          handoffRemote: function () {
            return o;
          },
        });
      var l = n("627445"),
        a = n.n(l),
        u = n("629109"),
        r = n("987317"),
        i = n("42887"),
        d = n("700507"),
        s = n("780338");
      function o(e, t) {
        var n;
        let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
        (0, d.remoteDisconnect)(l), (0, d.disconnectRemote)();
        let o = null != t ? t : e.channelId;
        a(null != o, "attempted to transfer to unknown channel"),
          e.selfMute !== i.default.isSelfMute() && u.default.toggleSelfMute(),
          e.selfDeaf !== i.default.isSelfDeaf() && u.default.toggleSelfDeaf(),
          (0, s.default)(o, "discord_client", l),
          r.default.selectVoiceChannel(o, !1);
      }
    },
    261552: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("446674"),
        a = n("271938"),
        u = n("800762"),
        r = n("76393");
      function i() {
        let e = (0, l.useStateFromStores)([a.default], () => a.default.getId()),
          t = (0, l.useStateFromStores)([r.default], () =>
            r.default.getRemoteSessionId()
          );
        return (0, l.useStateFromStores)([u.default], () => {
          var n;
          return null !== (n = u.default.getVoiceStateForSession(e, t)) &&
            void 0 !== n
            ? n
            : void 0;
        });
      }
    },
    742898: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("446674"),
        a = n("47319"),
        u = n("449008"),
        r = n("49111");
      function i() {
        return (0, l.useStateFromStoresArray)([a.default], () =>
          [
            a.default.getAccount(null, r.PlatformTypes.XBOX),
            a.default.getAccount(null, r.PlatformTypes.PLAYSTATION),
            a.default.getAccount(null, r.PlatformTypes.PLAYSTATION_STAGING),
          ].filter(u.isNotNullish)
        );
      }
    },
    424024: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var l = n("303800"),
        a = n("998564"),
        u = n("420145"),
        r = n("171644");
      function i(e) {
        return null != e
          ? e === r.GameConsoleTypes.XBOX
            ? u.default
            : a.default
          : l.default;
      }
    },
    379304: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("65597"),
        u = n("77078"),
        r = n("926994"),
        i = n("495194"),
        d = n("945956"),
        s = n("800762"),
        o = n("889486"),
        c = n("261552"),
        f = n("742898"),
        E = n("424024"),
        C = n("49111"),
        S = n("782340");
      function v(e) {
        let t = (0, a.useStateFromStores)(
            [d.default],
            () => d.default.getChannelId() === e.id
          ),
          v = (0, c.default)(),
          h = (null == v ? void 0 : v.channelId) === e.id,
          _ = (0, i.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
          N = (0, i.default)(e),
          T = (0, a.useStateFromStores)([s.default], () =>
            s.default.isInChannel(e.id)
          ),
          g = (!T && N) || _,
          m = (0, f.default)();
        if (!h && 0 === m.length) return null;
        let I = t => {
          if (!t.twoWayLink || t.revoked) {
            (0, r.default)(t.type, "Console Transfer Item");
            return;
          }
          t.type === C.PlatformTypes.XBOX
            ? (0, u.openModalLazy)(async () => {
                let { default: t } = await n
                  .el("613895")
                  .then(n.bind(n, "613895"));
                return n => (0, l.jsx)(t, { ...n, channel: e });
              })
            : (t.type === C.PlatformTypes.PLAYSTATION ||
                t.type === C.PlatformTypes.PLAYSTATION_STAGING) &&
              (0, u.openModalLazy)(async () => {
                let { default: a } = await n
                  .el("962512")
                  .then(n.bind(n, "962512"));
                return n =>
                  (0, l.jsx)(a, { ...n, platform: t.type, channel: e });
              });
        };
        return (0, l.jsx)(l.Fragment, {
          children: h
            ? (0, l.jsx)(u.MenuItem, {
                label: S.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                id: "handoff",
                action: () => {
                  (0, o.handoffRemote)(v);
                },
                icon: (0, E.default)(void 0),
                disabled: g,
              })
            : m.map(e =>
                (0, l.jsx)(
                  u.MenuItem,
                  {
                    id: "transfer-".concat(e.type, "-").concat(e.id),
                    label: (function (e, t) {
                      if (e === C.PlatformTypes.XBOX)
                        return t
                          ? S.default.Messages.TRANSFER_VOICE_TO_XBOX
                          : S.default.Messages.JOIN_ON_XBOX;
                      if (e === C.PlatformTypes.PLAYSTATION)
                        return t
                          ? S.default.Messages
                              .CONSOLE_PLAYSTATION_TRANSFER_VOICE
                          : S.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                      if (e === C.PlatformTypes.PLAYSTATION_STAGING)
                        return t
                          ? S.default.Messages
                              .CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE
                          : S.default.Messages
                              .CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE;
                    })(e.type, t),
                    action: () => I(e),
                    icon: (0, E.default)(e.type),
                    disabled: g,
                  },
                  e.id
                )
              ),
        });
      }
    },
    49129: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          getNextShownUpcomingEventNoticeType: function () {
            return i;
          },
        });
      var l = n("866227"),
        a = n.n(l),
        u = n("299039"),
        r = n("745049");
      function i(e, t, n, l) {
        let i = a(),
          d = new Date(e.scheduled_start_time).getTime(),
          s = { start: d - r.EVENT_STARTING_SOON_WINDOW_MILLISECONDS, end: d };
        if (i.isBetween(s.start, s.end)) {
          if (null != t) {
            let e = a(t),
              n = e.isBetween(s.start, s.end),
              u = e.isBetween(
                a(d).subtract(r.ACKED_RECENTLY_WINDOW_DAYS, "days"),
                d
              );
            return n || (u && !l)
              ? void 0
              : r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
          }
          return r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON;
        }
        let o = u.default.extractTimestamp(e.id),
          c = Math.min(
            (null != n ? n : o) + r.NEW_EVENT_WINDOW_MILLISECONDS,
            d
          ),
          f = i.isBetween(o, c);
        if (f && null == t && !l)
          return r.UpcomingGuildEventNoticeTypes.NEW_EVENT;
      }
    },
    431934: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var l = n("446674"),
        a = n("913144"),
        u = n("271938"),
        r = n("398604"),
        i = n("49129"),
        d = n("745049");
      let s = {},
        o = {};
      function c(e) {
        let t = { ...s };
        delete t[e], (s = t);
        let n = { ...o };
        delete n[e], (o = n);
      }
      class f extends l.default.PersistedStore {
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
      (f.displayName = "UpcomingEventNoticesStore"),
        (f.persistKey = "UpcomingEventNotices");
      var E = new f(a.default, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
          let { eventId: t } = e,
            n = { ...s };
          (n[t] = Date.now()), (s = n);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
          let { guildScheduledEvent: t } = e;
          (t.status === d.GuildScheduledEventStatus.CANCELED ||
            t.status === d.GuildScheduledEventStatus.COMPLETED) &&
            c(t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (e) {
          let { guildScheduledEvent: t } = e;
          c(t.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
          let { userId: t, guildEventId: n } = e,
            l = u.default.getId();
          if (t !== l) return;
          let a = r.default.getGuildScheduledEvent(n);
          if (null == a || a.status !== d.GuildScheduledEventStatus.SCHEDULED)
            return;
          let c = s[n];
          if (null != c) return;
          let f = o[n],
            E = (0, i.getNextShownUpcomingEventNoticeType)(a, void 0, f, !1);
          if (E === d.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
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
            return g;
          },
          useActiveEvent: function () {
            return m;
          },
          useActiveEventsByChannel: function () {
            return I;
          },
          useGuildUpcomingEventsNotice: function () {
            return A;
          },
          useGuildActiveEvent: function () {
            return p;
          },
          useGuildChannelScheduledEvents: function () {
            return y;
          },
          useFirstActiveEventChannel: function () {
            return L;
          },
          useImminentUpcomingGuildEvents: function () {
            return O;
          },
        }),
        n("222007"),
        n("808653");
      var l = n("884691"),
        a = n("446674"),
        u = n("962199"),
        r = n("42203"),
        i = n("923959"),
        d = n("305961"),
        s = n("957255"),
        o = n("718517"),
        c = n("449008"),
        f = n("398604"),
        E = n("49129"),
        C = n("431934"),
        S = n("466148"),
        v = n("822516"),
        h = n("745049"),
        _ = n("49111");
      let N = [],
        T = 15 * o.default.Millis.MINUTE;
      function g(e, t) {
        return (0, a.useStateFromStoresArray)(
          [d.default, u.default, f.default, s.default, r.default, i.default],
          () => {
            let n = d.default.getGuild(e);
            if (null == n) return N;
            let l = n.hasFeature(_.GuildFeatures.HUB);
            if (l) {
              var a, o;
              let e =
                  null === (a = i.default.getDefaultChannel(n.id)) ||
                  void 0 === a
                    ? void 0
                    : a.id,
                t =
                  null !== (o = u.default.getEventDirectoryEntries(e)) &&
                  void 0 !== o
                    ? o
                    : [];
              return t
                .map(e => {
                  let t = e.scheduledEventId,
                    n = f.default.getGuildScheduledEvent(t);
                  return null != n
                    ? n
                    : u.default.getCachedGuildScheduledEventById(t);
                })
                .filter(c.isNotNullish);
            }
            let E = f.default.getGuildScheduledEventsByIndex(
              null != t
                ? t
                : f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)
            );
            return E.filter(e => {
              let t = e.channel_id;
              if (null == t) return !0;
              let n = r.default.getChannel(t);
              return s.default.can(_.Permissions.VIEW_CHANNEL, n);
            });
          },
          [t, e]
        );
      }
      function m(e) {
        return (0, a.useStateFromStores)(
          [f.default, r.default, s.default],
          () => {
            let t = r.default.getChannel(e);
            if (!s.default.can(_.Permissions.VIEW_CHANNEL, t)) return null;
            let n = null == t ? void 0 : t.guild_id;
            if (null == n) return null;
            let l = f.default.getGuildScheduledEventsByIndex(
              f.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e)
            );
            return l.length > 0 ? l[0] : null;
          },
          [e]
        );
      }
      function I(e) {
        let t = (0, a.useStateFromStoresArray)(
            [f.default],
            () => f.default.getGuildScheduledEventsForGuild(e),
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
      function A(e) {
        var t, n;
        let l =
            ((t = e),
            (0, a.useStateFromStoresArray)(
              [f.default, r.default, s.default],
              () => {
                let e = f.default.getGuildScheduledEventsByIndex(
                  f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)
                );
                return e.filter(e => {
                  if (
                    e.entity_type === h.GuildScheduledEventEntityTypes.NONE ||
                    e.status !== h.GuildScheduledEventStatus.SCHEDULED
                  )
                    return !1;
                  if (null == e.channel_id) return !0;
                  let t = r.default.getChannel(e.channel_id);
                  return s.default.can(_.Permissions.VIEW_CHANNEL, t);
                });
              },
              [t]
            )),
          u = (0, a.useStateFromStoresObject)([C.default], () =>
            C.default.getAllEventDismissals()
          ),
          i = (0, a.useStateFromStoresObject)([C.default], () =>
            C.default.getAllUpcomingNoticeSeenTimes()
          ),
          d = (0, a.useStateFromStoresObject)(
            [f.default],
            () =>
              null == l
                ? {}
                : l.reduce((e, t) => {
                    let n = (0, v.getNextRecurrenceIdInEvent)(t);
                    return {
                      ...e,
                      [t.id]: f.default.isInterestedInEventRecurrence(t.id, n),
                    };
                  }, {}),
            [l]
          );
        if (null != l && null != d)
          for (let e = 0; e < l.length; e++) {
            let t = l[e],
              a = u[t.id],
              r = i[t.id],
              s = null !== (n = d[t.id]) && void 0 !== n && n,
              o = (0, E.getNextShownUpcomingEventNoticeType)(t, a, r, s);
            if (null != o) return { upcomingEvent: t, noticeType: o };
          }
      }
      function p(e) {
        return (0, a.useStateFromStores)(
          [f.default, r.default, s.default],
          () => {
            let t = f.default.getGuildScheduledEventsByIndex(
              f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
            );
            return t.find(e => {
              if (
                e.entity_type === h.GuildScheduledEventEntityTypes.NONE ||
                !(0, f.isGuildScheduledEventActive)(e)
              )
                return !1;
              if (null == e.channel_id) return !0;
              let t = r.default.getChannel(e.channel_id);
              return s.default.can(_.Permissions.VIEW_CHANNEL, t);
            });
          },
          [e]
        );
      }
      function y(e) {
        return (0, a.useStateFromStores)(
          [f.default],
          () =>
            f.default.getGuildScheduledEventsByIndex(
              f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
            ),
          [e]
        );
      }
      function L(e) {
        return (0, a.useStateFromStores)(
          [r.default, f.default],
          () => {
            let t = f.default
              .getGuildScheduledEventsByIndex(
                f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)
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
      function O(e) {
        let [t, n] = l.useState(() => Date.now());
        l.useEffect(() => {
          let e = setInterval(() => {
            n(Date.now());
          }, T);
          return () => clearInterval(e);
        }, []);
        let u = (0, a.useStateFromStores)(
            [f.default],
            () =>
              null == e
                ? []
                : f.default.getGuildScheduledEventsByIndex(
                    f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)
                  ),
            [e, t]
          ),
          r = l.useMemo(
            () =>
              u.filter(e => {
                let { startTime: t, endTime: n } = (0, S.getEventSchedule)(e),
                  { withinStartWindow: l, diffMinutes: a } = (0,
                  v.getEventTimeData)(
                    t.toISOString(),
                    null == n ? void 0 : n.toISOString()
                  );
                return (
                  e.status !== h.GuildScheduledEventStatus.ACTIVE && l && a < 15
                );
              }),
            [u]
          );
        return r;
      }
    },
    495194: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useIsVoiceChannelLocked: function () {
            return s;
          },
          default: function () {
            return o;
          },
        });
      var l = n("446674"),
        a = n("305961"),
        u = n("957255"),
        r = n("800762"),
        i = n("404008"),
        d = n("843455");
      function s(e) {
        return (0, l.useStateFromStores)(
          [u.default],
          () => null == e || !u.default.can(d.Permissions.CONNECT, e),
          [e]
        );
      }
      function o(e) {
        return (0, l.useStateFromStores)([r.default, a.default], () =>
          (0, i.isChannelFull)(e, r.default, a.default)
        );
      }
    },
    303800: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        }),
        n("222007");
      var l = n("37983"),
        a = n("884691"),
        u = n("748820"),
        r = n("469563"),
        i = n("917798"),
        d = n("75196"),
        s = (0, r.replaceIcon)(
          function (e) {
            let {
                width: t = 16,
                height: n = 16,
                color: r = "currentColor",
                foreground: i,
                ...s
              } = e,
              [o] = a.useState(() => (0, u.v4)());
            return (0, l.jsxs)("svg", {
              ...(0, d.default)(s),
              width: t,
              height: n,
              viewBox: "0 0 24 24",
              children: [
                (0, l.jsx)("g", {
                  clipPath: "url(".concat(o, ")"),
                  children: (0, l.jsx)("path", {
                    className: i,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.83075 2H13.2444C14.817 2 16.0751 3.13475 15.9965 4.55319V11H14.5025V4.69504H3.57264V18.8085H6V22H4.83075C3.25811 22 2 20.8652 2 19.4468V4.55319C2 3.13475 3.25811 2 4.83075 2Z",
                    fill: r,
                  }),
                }),
                (0, l.jsx)("path", {
                  d: "M10.5646 13H19.4354C20.5365 13 21.4507 13.7808 21.5303 14.7893L21.9965 20.6997C22.0492 21.3677 21.5021 21.9485 20.7746 21.9968C20.7429 21.9989 20.7111 22 20.6792 22C19.8442 22 19.1157 21.4795 18.9105 20.7363L18.5495 19.4286H11.4504L11.0894 20.7363C10.8842 21.4795 10.1557 22 9.3207 22C8.5913 22 8 21.4571 8 20.7873C8 20.7581 8.00115 20.7289 8.00345 20.6997L8.46966 14.7893C8.5492 13.7808 9.46342 13 10.5646 13Z",
                  className: i,
                  fill: r,
                }),
                (0, l.jsx)("defs", {
                  children: (0, l.jsx)("clipPath", {
                    id: o,
                    children: (0, l.jsx)("rect", {
                      width: "14",
                      height: "21",
                      fill: r,
                      transform: "translate(2 2)",
                    }),
                  }),
                }),
              ],
            });
          },
          i.MobilePhoneControllerIcon,
          void 0,
          { size: 16 }
        );
    },
    998564: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function u(e) {
        let {
          width: t = 18,
          height: n = 18,
          color: u = "currentColor",
          foreground: r,
          ...i
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(i),
          width: t,
          height: n,
          viewBox: "0 0 18 18",
          children: (0, l.jsx)("path", {
            className: r,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.7516 12.8667C17.4035 13.3058 16.5507 13.6191 16.5507 13.6191L10.2065 15.8979V14.2173L14.8754 12.5538C15.4052 12.364 15.4866 12.0956 15.0559 11.9547C14.6261 11.8135 13.8477 11.854 13.3175 12.0446L10.2065 13.1403V11.3962L10.3858 11.3355C10.3858 11.3355 11.2848 11.0173 12.5488 10.8773C13.8129 10.738 15.3607 10.8963 16.5758 11.3569C17.9451 11.7896 18.0993 12.4275 17.7516 12.8667ZM10.8104 10.005V5.70728C10.8104 5.20255 10.7173 4.73788 10.2437 4.60633C9.88107 4.49017 9.65602 4.82693 9.65602 5.33126V16.0938L6.75349 15.1726V2.34009C7.9876 2.56918 9.78554 3.11075 10.7521 3.43658C13.2102 4.2805 14.0436 5.33085 14.0436 7.69748C14.0436 10.0042 12.6197 10.8785 10.8104 10.005ZM1.42767 14.0417C0.0219393 13.6458 -0.212012 12.8209 0.428722 12.3457C1.02089 11.907 2.02793 11.5767 2.02793 11.5767L6.18966 10.0969V11.7839L3.19485 12.8557C2.66583 13.0456 2.58447 13.3143 3.01432 13.4552C3.44458 13.596 4.22334 13.556 4.75317 13.3657L6.18966 12.8444V14.3537C6.09859 14.3699 5.997 14.3861 5.90309 14.4019C4.4662 14.6367 2.9358 14.5387 1.42767 14.0417Z",
            fill: u,
          }),
        });
      }
    },
    420145: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("75196");
      function u(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: u = "currentColor",
          foreground: r,
          ...i
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.default)(i),
          width: t,
          height: n,
          viewBox: "0 0 60 60",
          children: (0, l.jsx)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: (0, l.jsx)("path", {
              className: r,
              fill: u,
              d: "M8.95185131,8.62650012 L8.92775494,8.65059649 C3.20486729,14.2891468 -0.0119979765,21.9758886 5.02080018e-05,29.9999795 C-0.0119979765,36.56624 2.14462705,42.9517778 6.13257613,48.1686417 C6.16872068,48.2168345 6.24100979,48.252979 6.28920253,48.2168345 C6.33739527,48.1806899 6.34944345,48.120449 6.32534708,48.0602081 C4.03619202,40.9879237 15.722931,23.8433572 21.7711196,16.6626392 C21.795216,16.6385428 21.8193124,16.6144465 21.8193124,16.5783019 C21.8193124,16.5421573 21.795216,16.5060128 21.7590715,16.4819164 C11.6024519,6.37348961 8.8795622,8.68674104 8.92775494,8.65059649 M51.048208,8.62650012 L51.0723044,8.65059649 C56.795192,14.2770987 60.0000091,21.9758886 59.9879609,29.9999795 C60.0000091,36.56624 57.8433841,42.9517778 53.855435,48.1686417 C53.8192905,48.2168345 53.7470014,48.252979 53.6988086,48.2168345 C53.6506159,48.1806899 53.6506159,48.120449 53.6626641,48.0602081 C55.9518191,40.9879237 44.2650801,23.831309 38.2289397,16.650591 C38.2048433,16.6264946 38.180747,16.6023983 38.180747,16.5662537 C38.180747,16.518061 38.2048433,16.4939646 38.2409879,16.4698682 C48.4096556,6.36144143 51.0964008,8.68674104 51.0602562,8.65059649 M30.0000297,0 C36.0482183,0 41.0361667,1.66264946 45.626525,4.38553917 C45.6867659,4.40963554 45.6988141,4.48192464 45.6747177,4.53011738 C45.6506214,4.57831012 45.5903804,4.5903583 45.5301395,4.57831012 C39.7229146,3.32529893 30.8915953,8.33734369 30.0602706,8.84336744 C30.0361742,8.85541562 30.024126,8.86746381 30.0000297,8.86746381 C29.9759333,8.86746381 29.9518369,8.85541562 29.9397887,8.84336744 C27.7229228,7.56625988 19.5663019,3.28915437 14.4217271,4.61445467 C14.3614862,4.62650286 14.3012452,4.61445467 14.2771489,4.56626193 C14.2530525,4.50602101 14.2771489,4.44578009 14.3253416,4.42168372 C18.9156999,1.66264946 23.9638892,0 30.0000297,0 M30.0000297,24.0602245 C30.0361742,24.0602245 30.0723188,24.0843209 30.0964151,24.1084172 C39.0723126,30.9397379 54.4337479,47.8071962 49.7470041,52.5782773 L49.7590523,52.5662291 L49.7590523,52.5782773 L49.7470041,52.5782773 C44.2771283,57.3734547 37.2650849,60.0120071 30.0000297,59.9999589 C22.7349744,60.0120071 15.7108828,57.3734547 10.2530552,52.5782773 L10.2410071,52.5662291 L10.2530552,52.5782773 C5.56631146,47.8071962 20.9277467,30.9276897 29.9036442,24.1084172 C29.9156924,24.0843209 29.9638851,24.0602245 30.0000297,24.0602245",
            }),
          }),
        });
      }
    },
    142233: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MobilePhoneControllerIcon: function () {
            return r;
          },
        });
      var l = n("37983");
      n("884691");
      var a = n("669491"),
        u = n("82169");
      let r = e => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = a.default.colors.INTERACTIVE_NORMAL,
          colorClass: i = "",
          ...d
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, u.default)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.18c.3 0 .54.26.5.56l-.37 2.94c-.07.6-.01 1.18.16 1.7.11.38-.14.8-.52.8H8a3 3 0 0 1-3-3V4Z",
              className: i,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M14.02 15c-1.15 0-2.13.86-2.27 2l-.46 3.7a2.05 2.05 0 0 0 4.04.65l.17-.85h3l.17.85a2.05 2.05 0 0 0 4.04-.65l-.46-3.7a2.29 2.29 0 0 0-2.27-2h-5.96Z",
              className: i,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=39fe432e7289cd751ae8.js.map

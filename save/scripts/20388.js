(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20388"],
  {
    30874: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("77078"),
        i = a("263024"),
        s = a("300322"),
        u = a("782340");
      function l(e) {
        var t;
        let a = (0, s.useCanManageThread)(e),
          l = (0, s.useCanUnarchiveThread)(e),
          o = e.isArchivedThread();
        if (o ? l : a)
          return (
            null === (t = e.threadMetadata) || void 0 === t
              ? void 0
              : t.archived
          )
            ? (0, n.jsx)(r.MenuItem, {
                id: "unarchive-thread",
                label: e.isForumPost()
                  ? u.default.Messages.UNARCHIVE_FORUM_POST
                  : u.default.Messages.UNARCHIVE_THREAD,
                action: () => i.default.unarchiveThread(e, !1),
              })
            : (0, n.jsx)(r.MenuItem, {
                id: "archive-thread",
                label: e.isForumPost()
                  ? u.default.Messages.ARCHIVE_FORUM_POST
                  : u.default.Messages.ARCHIVE_THREAD,
                action: () => i.default.archiveThread(e, !1),
              });
      }
    },
    458574: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("281071"),
        i = a("65597"),
        s = a("77078"),
        u = a("867965"),
        l = a("42203"),
        o = a("404008"),
        d = a("49111"),
        f = a("782340");
      function c(e, t, a) {
        let c = (0, i.default)([l.default], () =>
          l.default.getChannel(e.parent_id)
        );
        return (0, n.jsx)(s.MenuItem, {
          id: "channel-copy-link",
          label: f.default.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, u.trackForumPostLinkCopied)({
                postId: e.id,
                location: { section: d.AnalyticsSections.CONTEXT_MENU },
              }),
              (0, r.copy)((0, o.getChannelLinkToCopy)(e, c, t, a));
          },
        });
      }
    },
    308798: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("446674"),
        i = a("77078"),
        s = a("18054"),
        u = a("819689"),
        l = a("430475"),
        o = a("610730"),
        d = a("271938"),
        f = a("957255"),
        c = a("299039"),
        v = a("49111"),
        h = a("782340");
      function C(e) {
        let t = e.isForumPost(),
          C = (0, r.useStateFromStores)(
            [d.default],
            () => e.isOwner(d.default.getId()),
            [e]
          ),
          { canManageChannel: T, canAccessChannel: F } = (0,
          r.useStateFromStoresObject)(
            [f.default],
            () => ({
              canAccessChannel: f.default.can(e.accessPermissions, e),
              canManageChannel: f.default.can(
                e.isThread()
                  ? v.Permissions.MANAGE_THREADS
                  : v.Permissions.MANAGE_CHANNELS,
                e
              ),
            }),
            [e]
          ),
          E = (0, r.useStateFromStores)(
            [o.default],
            () => {
              var t;
              return null !== (t = o.default.getCount(e.id)) && void 0 !== t
                ? t
                : 0;
            },
            [e.id]
          ),
          { firstMessage: g } = (0, r.useStateFromStores)(
            [l.default],
            () => l.default.getMessage(e.id),
            [e.id]
          ),
          S = t && (T || (C && E < 1)),
          A = t && C && !T && E > 0 && null != g;
        return F && (T || S || A)
          ? (0, n.jsx)(i.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === v.ChannelTypes.GUILD_CATEGORY)
                  return h.default.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return S
                    ? h.default.Messages.DELETE_FORUM_POST
                    : h.default.Messages.DELETE_MESSAGE;
                if (e.isThread()) return h.default.Messages.DELETE_THREAD;
                return h.default.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () =>
                (0, i.openModalLazy)(async () => {
                  let { default: t } = await a
                    .el("575351")
                    .then(a.bind(a, "575351"));
                  return a =>
                    (0, n.jsx)(t, {
                      ...a,
                      onConfirm: () => {
                        a.onClose(),
                          A
                            ? u.default.deleteMessage(
                                e.id,
                                c.default.castChannelIdAsMessageId(e.id)
                              )
                            : s.default.deleteChannel(e.id);
                      },
                      channel: e,
                    });
                }),
            })
          : null;
      }
    },
    13777: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var n = a("37983"),
        r = a("884691"),
        i = a("917351"),
        s = a.n(i),
        u = a("446674"),
        l = a("77078"),
        o = a("848848"),
        d = a("300322"),
        f = a("800762"),
        c = a("242740"),
        v = a("782340");
      function h(e) {
        let t = (0, d.useCanJoinThreadVoice)(e),
          a = (0, u.useStateFromStores)([f.default], () =>
            f.default.isInChannel(e.id)
          ),
          i = (0, u.useStateFromStores)(
            [f.default],
            () => !s.isEmpty(f.default.getVoiceStatesForChannel(e.id))
          ),
          { needSubscriptionToAccess: h } = (0, o.default)(e.id),
          C = r.useCallback(() => {
            c.default.handleVoiceConnect({
              channel: e,
              connected: a,
              needSubscriptionToAccess: h,
              locked: !1,
            });
          }, [e, a, h]);
        return a || !t
          ? null
          : (0, n.jsx)(l.MenuItem, {
              id: "join-thread-voice",
              label: i
                ? v.default.Messages.JOIN_CALL
                : v.default.Messages.START_CALL,
              action: C,
            });
      }
    },
    37774: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("77078"),
        i = a("263024"),
        s = a("300322"),
        u = a("782340");
      function l(e) {
        let t = (0, s.useIsThreadModerator)(e),
          a = e.isLockedThread();
        if (t)
          return a
            ? (0, n.jsx)(r.MenuItem, {
                id: "unlock-thread",
                label: e.isForumPost()
                  ? u.default.Messages.UNLOCK_FORUM_POST
                  : u.default.Messages.UNLOCK_THREAD,
                action: () => i.default.unlockThread(e),
              })
            : (0, n.jsx)(r.MenuItem, {
                id: "lock-thread",
                label: e.isForumPost()
                  ? u.default.Messages.LOCK_FORUM_POST
                  : u.default.Messages.LOCK_THREAD,
                action: () => i.default.lockThread(e),
              });
      }
    },
    117399: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("446674"),
        i = a("77078"),
        s = a("477566"),
        u = a("680986"),
        l = a("263024"),
        o = a("300322"),
        d = a("42203"),
        f = a("724210"),
        c = a("782340");
      function v(e) {
        let t = (0, r.useStateFromStores)([d.default], () =>
            d.default.getChannel(e.parent_id)
          ),
          a = (0, o.useIsThreadModerator)(e),
          v = (0, u.useExistingPin)(e);
        return (null == t ? void 0 : t.isForumLikeChannel()) && a
          ? e.hasFlag(f.ChannelFlags.PINNED)
            ? (0, n.jsx)(i.MenuItem, {
                id: "unpin-thread",
                label: c.default.Messages.UNPIN_POST,
                action: () => l.default.unpin(e),
              })
            : (0, n.jsx)(i.MenuItem, {
                id: "pin-thread",
                label: c.default.Messages.PIN_POST,
                action: function () {
                  null != v
                    ? s.default.show({
                        title: c.default.Messages.FORUM_PIN_CONFIRM_TITLE,
                        body: c.default.Messages.FORUM_PIN_CONFIRM_BODY,
                        onConfirm: async () => {
                          await l.default.unpin(v), l.default.pin(e);
                        },
                      })
                    : l.default.pin(e);
                },
              })
          : null;
      }
    },
    400501: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return l;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("77078"),
        i = a("18054"),
        s = a("300322"),
        u = a("782340");
      function l(e) {
        let t = (0, s.useCanManageThread)(e),
          a = (0, s.useIsActiveChannelOrUnarchivableThread)(e),
          l = (0, s.useIsNonModInLockedThread)(e);
        return !t || !a || l || __OVERLAY__
          ? null
          : (0, n.jsx)(r.MenuItem, {
              id: "edit-thread",
              label: e.isForumPost()
                ? u.default.Messages.EDIT_FORUM_POST
                : u.default.Messages.EDIT_THREAD,
              action: () => {
                (0, r.closeAllModals)(), i.default.open(e.id);
              },
            });
      }
    },
    542640: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return F;
          },
        }),
        a("222007");
      var n = a("37983");
      a("884691");
      var r = a("446674"),
        i = a("77078"),
        s = a("272030"),
        u = a("430568"),
        l = a("385976"),
        o = a("404607"),
        d = a("680986"),
        f = a("300322"),
        c = a("42203"),
        v = a("953371"),
        h = a("782340"),
        C = a("826374");
      function T(e) {
        let { tag: t } = e,
          { name: a, emojiId: i, emojiName: s } = t,
          o = (0, r.useStateFromStores)([l.default], () =>
            null != i ? l.default.getUsableCustomEmojiById(i) : null
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(u.default, {
              className: C.emoji,
              emojiId: i,
              emojiName: s,
              animated: !!(null == o ? void 0 : o.animated),
            }),
            a,
          ],
        });
      }
      function F(e) {
        let t = (0, r.useStateFromStores)(
            [c.default],
            () => c.default.getChannel(e),
            [e]
          ),
          a = (0, f.useCanManageThread)(t),
          u = (0, r.useStateFromStores)(
            [c.default],
            () => c.default.getChannel(null == t ? void 0 : t.parent_id),
            [t]
          ),
          l = (0, d.useVisibleForumTags)(u),
          C = (0, d.useAppliedTags)(t),
          F = C.length >= v.MAX_FORUM_POST_TAGS,
          E = (0, f.useIsActiveChannelOrUnarchivableThread)(t);
        if (null == t) return (0, s.closeContextMenu)(), null;
        if (
          !a ||
          __OVERLAY__ ||
          !t.isForumPost() ||
          (null == l ? void 0 : l.length) === 0 ||
          !E
        )
          return null;
        let g = e => {
            let a = new Set(C);
            if (a.has(e)) a.delete(e);
            else {
              if (F) return;
              a.add(e);
            }
            let n = Array.from(a).map(e => e.id);
            o.default.updateForumPostTags(t.id, n);
          },
          S =
            null == l
              ? void 0
              : l.map(e => {
                  let t = C.includes(e);
                  return (0, n.jsx)(
                    i.MenuCheckboxItem,
                    {
                      id: e.id,
                      label: (0, n.jsx)(T, { tag: e }),
                      disabled: F && !t,
                      action: () => g(e),
                      checked: t,
                    },
                    e.id
                  );
                });
        return (0, n.jsx)(i.MenuItem, {
          id: "edit-tags",
          label: h.default.Messages.FORUM_TAG_POST_EDIT,
          children: S,
        });
      }
    },
    772371: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("446674"),
        i = a("77078"),
        s = a("755624"),
        u = a("263024"),
        l = a("414833"),
        o = a("648564"),
        d = a("782340");
      function f(e) {
        let t = (0, l.useThreadNotificationSetting)(e),
          a = (0, r.useStateFromStores)([s.default], () =>
            s.default.hasJoined(e.id)
          );
        return a
          ? (0, n.jsx)(i.MenuItem, {
              id: "thread-notifications",
              label: d.default.Messages.NOTIFICATION_SETTINGS,
              children: (0, o.getThreadNotificationOptions)().map(a => {
                let { setting: r, label: s } = a;
                return (0, n.jsx)(
                  i.MenuRadioItem,
                  {
                    group: "thread-notifications",
                    id: "".concat(r),
                    label: s,
                    action: () =>
                      u.default.setNotificationSettings(e, { flags: r }),
                    checked: r === t,
                  },
                  r
                );
              }),
            })
          : (0, n.jsx)(i.MenuItem, {
              id: "notifications-disabled",
              label: d.default.Messages.NOTIFICATION_SETTINGS,
              disabled: !0,
            });
      }
    },
    604656: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var n = a("37983");
      a("884691");
      var r = a("77078"),
        i = a("263024"),
        s = a("300322"),
        u = a("49111"),
        l = a("782340");
      function o(e) {
        var t, a;
        let o = (0, s.useIsThreadModerator)(e);
        if (!o || e.type !== u.ChannelTypes.PRIVATE_THREAD) return null;
        let d =
          null ===
            (a =
              null === (t = e.threadMetadata) || void 0 === t
                ? void 0
                : t.invitable) ||
          void 0 === a ||
          a;
        return (0, n.jsx)(r.MenuCheckboxItem, {
          id: "toggle-thread-invitable",
          label: l.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
          checked: d,
          action: () => i.default.setInvitable(e, !d),
        });
      }
    },
    200008: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          addFavoriteChannel: function () {
            return c;
          },
          removeFavoriteChannel: function () {
            return v;
          },
          setFavoriteChannelNickname: function () {
            return h;
          },
          addFavoriteCategory: function () {
            return C;
          },
          removeFavoriteCategory: function () {
            return T;
          },
          updateFavoriteChannels: function () {
            return F;
          },
          updateFavoriteChannelParent: function () {
            return E;
          },
          toggleFavoriteServerMuted: function () {
            return g;
          },
        }),
        a("222007");
      var n = a("151426"),
        r = a("872173"),
        i = a("42203"),
        s = a("957255"),
        u = a("299039"),
        l = a("379881"),
        o = a("843455");
      function d() {
        let e = l.default.getFavoriteChannels(),
          t = 1;
        for (let a in e) t = Math.max(t, e[a].order);
        return t + 1;
      }
      function f(e) {
        for (let t in e) {
          let a = e[t];
          if (null == a) {
            delete e[t];
            continue;
          }
          if (a.type === n.FavoriteChannelType.CATEGORY) continue;
          let r = i.default.getChannel(t);
          if (
            null == r ||
            (!r.isPrivate() && !s.default.can(o.Permissions.VIEW_CHANNEL, r))
          ) {
            delete e[t];
            continue;
          }
        }
      }
      function c(e, t) {
        let a = l.default.isFavorite(e);
        !a &&
          r.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            a => {
              (a.favoriteChannels[e] = n.FavoriteChannel.create({
                nickname: "",
                type: n.FavoriteChannelType.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                f(a.favoriteChannels);
            },
            r.UserSettingsDelay.FREQUENT_USER_ACTION
          );
      }
      function v(e) {
        let t = l.default.getFavorite(e);
        null != t &&
          r.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            a => {
              if (
                (delete a.favoriteChannels[e],
                t.type === n.FavoriteChannelType.CATEGORY)
              )
                for (let t in a.favoriteChannels)
                  a.favoriteChannels[t].parentId === e &&
                    (a.favoriteChannels[t].parentId = "0");
              f(a.favoriteChannels);
            },
            r.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function h(e, t) {
        let a = l.default.isFavorite(e);
        a &&
          r.PreloadedUserSettingsActionCreators.updateAsync(
            "favorites",
            a => {
              a.favoriteChannels[e].nickname = null != t ? t : "";
            },
            r.UserSettingsDelay.INFREQUENT_USER_ACTION
          );
      }
      function C(e) {
        let t = u.default.fromTimestamp(Date.now());
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          a => {
            a.favoriteChannels[t] = n.FavoriteChannel.create({
              nickname: e,
              type: n.FavoriteChannelType.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          r.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function T(e) {
        v(e);
      }
      function F(e) {
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          t => {
            for (let n of e)
              if (
                (null != n.position &&
                  (t.favoriteChannels[n.id].position = n.position),
                void 0 !== n.parent_id)
              ) {
                var a;
                t.favoriteChannels[n.id].parentId =
                  null !== (a = n.parent_id) && void 0 !== a ? a : "0";
              }
          },
          r.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function E(e, t) {
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          a => {
            a.favoriteChannels[e].parentId = null != t ? t : "0";
          },
          r.UserSettingsDelay.FREQUENT_USER_ACTION
        );
      }
      function g() {
        r.PreloadedUserSettingsActionCreators.updateAsync(
          "favorites",
          e => {
            e.muted = !e.muted;
          },
          r.UserSettingsDelay.INFREQUENT_USER_ACTION
        );
      }
    },
    986373: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useCanFavoriteChannel: function () {
            return v;
          },
          useFavorite: function () {
            return h;
          },
          useFavoritesCategories: function () {
            return C;
          },
          useFavoritesGuildSelected: function () {
            return T;
          },
          useFavoriteAdded: function () {
            return F;
          },
        }),
        a("222007"),
        a("424973");
      var n = a("884691"),
        r = a("298386"),
        i = a("446674");
      a("42203");
      var s = a("923959"),
        u = a("162771"),
        l = a("697218");
      a("299039");
      var o = a("379881"),
        d = a("498139"),
        f = a("136569"),
        c = a("49111");
      function v(e) {
        let { favoritesEnabled: t, hasStaffPrivileges: a } = (0,
          d.useFavoritesServerExperiment)("useCanFavoriteChannel"),
          n = (0, i.useStateFromStores)([o.default], () =>
            o.default.isFavorite(e.id)
          ),
          r = (0, i.useStateFromStores)([l.default], () =>
            l.default.getCurrentUser()
          ),
          s = e.isDM() || e.isThread(),
          u = !s || (a && (null == r ? void 0 : r.isStaff()) === !0);
        return t && !__OVERLAY__ && !n && u;
      }
      function h(e) {
        let t = (0, i.useStateFromStores)([o.default], () =>
          o.default.getFavorite(e)
        );
        return t;
      }
      function C() {
        let e = (0, i.useStateFromStores)([s.default], () =>
          s.default.getChannels(c.FAVORITES)
        )[r.ChannelTypes.GUILD_CATEGORY];
        return e.map(e => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function T() {
        let e = (0, i.useStateFromStores)([u.default], () =>
          u.default.getGuildId()
        );
        return e === c.FAVORITES;
      }
      function F() {
        let { isFavoritesPerk: e } = (0, d.useFavoritesServerExperiment)(
            "useFavoriteAdded"
          ),
          t = (0, f.useFavoritesTooltipStore)(),
          a = n.useCallback(() => {
            e && t.notifyFavoriteAdded();
          }, [t, e]),
          r = n.useCallback(() => {
            e && t.clearFavoriteAdded();
          }, [t, e]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: a,
          clearFavoriteAdded: r,
        };
      }
    },
    136569: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useFavoritesTooltipStore: function () {
            return r;
          },
        });
      var n = a("308503");
      let r = (0, n.default)(e => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => e({ favoriteAdded: !0 }),
        clearFavoriteAdded: () => e({ favoriteAdded: !1 }),
      }));
    },
  },
]);
//# sourceMappingURL=fa3ec0a26afeae5b2d3e.js.map

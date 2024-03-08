(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33057"],
  {
    129082: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        }),
        s("222007");
      var l = s("884691"),
        n = s("446674"),
        a = s("429224"),
        o = s("935692"),
        i = s("718517");
      let u = 1 * i.default.Millis.HOUR;
      function r(e) {
        let [t, s] = l.useState(!1),
          i = (0, n.useStateFromStores)(
            [o.default],
            () => o.default.getFollowerStatsForChannel(e),
            [e]
          );
        return (
          l.useEffect(() => {
            let l = null == i || Date.now() - i.lastFetched > u;
            l && !t
              ? (s(!0), a.default.fetchChannelFollowerStats(e))
              : null != i && t && s(!1);
          }, [e, i, t]),
          [i, t]
        );
      }
    },
    557981: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return S;
          },
        }),
        s("222007");
      var l = s("37983");
      s("884691");
      var n = s("65597"),
        a = s("77078"),
        o = s("819689"),
        i = s("592407"),
        u = s("42203"),
        r = s("129082"),
        d = s("49111"),
        c = s("782340"),
        f = s("618537");
      function S(e) {
        let { channelId: t, messageId: s, transitionState: S, onClose: _ } = e,
          g = (0, n.default)([u.default], () => u.default.getChannel(t)),
          [F, E] = (0, r.default)(t),
          C = null == g ? void 0 : g.guild_id;
        return (0, l.jsx)(a.ConfirmModal, {
          header: c.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
          confirmText: c.default.Messages.CONFIRM,
          cancelText: c.default.Messages.CANCEL,
          confirmButtonColor: a.Button.Colors.BRAND,
          onConfirm: () => o.default.crosspostMessage(t, s),
          transitionState: S,
          onClose: _,
          children: (0, l.jsx)(a.Text, {
            variant: "text-md/normal",
            className: f.spacing,
            children: E
              ? (0, l.jsx)(a.Spinner, {})
              : null != F && null != F.guildsFollowing && F.guildsFollowing > 0
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(a.Text, {
                        className: f.spacing,
                        variant: "text-sm/normal",
                        children:
                          c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format(
                            { numGuildsFollowing: F.guildsFollowing }
                          ),
                      }),
                      (0, l.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children:
                          c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format(
                            {
                              onClick: () => {
                                null != C &&
                                  null != _ &&
                                  (_(),
                                  i.default.open(
                                    C,
                                    d.GuildSettingsSections.ANALYTICS
                                  ));
                              },
                            }
                          ),
                      }),
                    ],
                  })
                : c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY,
          }),
        });
      }
    },
    935692: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var l,
        n,
        a = s("446674"),
        o = s("913144");
      ((l = n || (n = {})).FAILED = "failed"), (l.SUCCEEDED = "succeeded");
      let i = {};
      class u extends a.default.Store {
        getFollowerStatsForChannel(e) {
          return i[e];
        }
      }
      u.displayName = "ChannelFollowerStatsStore";
      var r = new u(o.default, {
        CONNECTION_OPEN: function () {
          i = {};
        },
        CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
          let { channelId: t, stats: s } = e;
          (s = null != s ? s : {}),
            (i[t] = {
              loadingStatus: "succeeded",
              lastFetched: Date.now(),
              channelsFollowing: s.channels_following,
              guildMembers: s.guild_members,
              guildsFollowing: s.guilds_following,
              usersSeenEver: s.users_seen_ever,
              subscribersGainedSinceLastPost:
                s.subscribers_gained_since_last_post,
              subscribersLostSinceLastPost: s.subscribers_lost_since_last_post,
            });
        },
        CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
          let { channelId: t } = e;
          i[t] = {
            loadingStatus: "failed",
            lastFetched: Date.now(),
            channelsFollowing: 0,
            guildMembers: 0,
            guildsFollowing: 0,
            usersSeenEver: 0,
            subscribersGainedSinceLastPost: 0,
            subscribersLostSinceLastPost: 0,
          };
        },
      });
    },
  },
]);
//# sourceMappingURL=09a892836baddc5bb770.js.map

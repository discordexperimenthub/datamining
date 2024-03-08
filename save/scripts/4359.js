(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4359"],
  {
    134947: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useTrackThreadBrowserTab: function () {
            return x;
          },
          useActiveThreads: function () {
            return v;
          },
          useActiveGuildThreads: function () {
            return _;
          },
          useArchivedThreads: function () {
            return N;
          },
        }),
        a("222007");
      var s = a("884691"),
        r = a("917351"),
        l = a.n(r),
        n = a("446674"),
        d = a("404607"),
        u = a("42203"),
        i = a("957255"),
        o = a("660478"),
        c = a("449008"),
        f = a("299039"),
        h = a("689275"),
        m = a("821343"),
        g = a("755624"),
        S = a("263024"),
        T = a("487269"),
        E = a("843455");
      function x() {
        s.useEffect(() => {
          (0, T.trackThreadBrowserTab)();
        }, []);
      }
      function v(e) {
        let t = (function (e) {
            let t = (0, n.useStateFromStoresArray)(
              [i.default, h.default, u.default],
              () =>
                l(h.default.getThreadsForParent(e.guild_id, e.id))
                  .values()
                  .map(e => {
                    let { id: t } = e;
                    return u.default.getChannel(t);
                  })
                  .filter(c.isNotNullish)
                  .filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e))
                  .map(e => e.id)
                  .value(),
              [e.guild_id, e.id]
            );
            return s.useMemo(
              () =>
                l(t)
                  .sort((e, t) =>
                    f.default.compare(
                      o.default.lastMessageId(e),
                      o.default.lastMessageId(t)
                    )
                  )
                  .reverse()
                  .value(),
              [t]
            );
          })(e),
          [a, r] = (0, n.useStateFromStores)(
            [g.default],
            () => l.partition(t, e => g.default.hasJoined(e)),
            [t],
            n.statesWillNeverBeEqual
          );
        return { joinedThreadIds: a, unjoinedThreadIds: r };
      }
      function _(e) {
        let t = (0, n.useStateFromStoresArray)(
          [i.default, h.default, u.default],
          () =>
            l(h.default.getThreadsForGuild(e))
              .values()
              .map(e => l.values(e))
              .flatten()
              .map(e => {
                let { id: t } = e;
                return u.default.getChannel(t);
              })
              .filter(c.isNotNullish)
              .filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e))
              .map(e => e.id)
              .value(),
          [e]
        );
        return s.useMemo(
          () =>
            l(t)
              .sort((e, t) =>
                f.default.compare(
                  o.default.lastMessageId(e),
                  o.default.lastMessageId(t)
                )
              )
              .reverse()
              .value(),
          [t]
        );
      }
      function N(e, t, a) {
        let {
            canLoadMore: r,
            loading: o,
            nextOffset: c,
            isInitialLoad: f,
          } = (0, n.useStateFromStoresObject)([m.default], () => ({
            loading: m.default.isLoading(e.id, t, a),
            isInitialLoad: m.default.isInitialLoad,
            canLoadMore: m.default.canLoadMore,
            nextOffset: m.default.nextOffset,
          })),
          h = s.useCallback(() => {
            i.default.can(E.Permissions.READ_MESSAGE_HISTORY, e) &&
              S.default.loadArchivedThreads(e.guild_id, e.id, t, a, c);
          }, [e, t, a, c]);
        s.useEffect(() => {
          f && h();
        }, [e.id, t, a, f]),
          s.useEffect(() => {
            d.default.resort(e.id);
          }, [e.id]);
        let g = (0, n.useStateFromStoresArray)(
          [m.default, u.default, i.default],
          () =>
            l(m.default.getThreads(e.id, t, a))
              .filter(e => {
                let t = u.default.getChannel(e);
                return (
                  null != t && i.default.can(E.Permissions.VIEW_CHANNEL, t)
                );
              })
              .value()
        );
        return { threadIds: g, canLoadMore: r, loading: o || f, loadMore: h };
      }
    },
    998688: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var s = a("37983"),
        r = a("884691"),
        l = a("414456"),
        n = a.n(l),
        d = a("77078"),
        u = a("722602"),
        i = a("913979"),
        o = a("782340"),
        c = a("529353");
      function f(e) {
        let { channel: t, threadIds: a, startThread: l, goToThread: f } = e,
          h = r.useCallback(
            e =>
              (0, s.jsx)(
                i.default,
                { threadId: a[e.row], goToThread: f },
                "".concat(e.section, "-").concat(e.row)
              ),
            [a, f]
          );
        return 0 === a.length
          ? (0, s.jsx)(u.default, {
              channel: t,
              header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
              startThread: l,
            })
          : (0, s.jsx)(d.List, {
              className: n(c.list, c.activeThreadsList),
              fade: !0,
              sections: [a.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: h,
              renderSection: () => null,
              chunkSize: 20,
            });
      }
    },
    537560: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return R;
          },
        }),
        a("222007");
      var s = a("37983"),
        r = a("884691"),
        l = a("414456"),
        n = a.n(l),
        d = a("446674"),
        u = a("77078"),
        i = a("957255"),
        o = a("810567"),
        c = a("945330"),
        f = a("959097"),
        h = a("263024"),
        m = a("300322"),
        g = a("487269"),
        S = a("998688"),
        T = a("695385"),
        E = a("967241"),
        x = a("648564"),
        v = a("49111"),
        _ = a("782340"),
        N = a("638395");
      function R(e) {
        let { channel: t, className: a, onClose: l } = e,
          o = (0, d.useStateFromStores)([i.default], () =>
            i.default.can(v.Permissions.READ_MESSAGE_HISTORY, t)
          ),
          R = (0, m.useCanStartThread)(t),
          j = () => {
            l(),
              (0, E.openThreadSidebarForCreating)(
                t,
                void 0,
                "Thread Browser Empty State"
              );
          },
          M = r.useCallback(
            (e, t) => {
              l(),
                (0, E.openThreadSidebarForViewing)(
                  e,
                  !t,
                  x.OpenThreadAnalyticsLocations.BROWSER
                );
            },
            [l]
          ),
          C = (function (e, t) {
            let [a, s] = r.useState(""),
              [l, n] = r.useState(!1),
              [d, u] = r.useState(!1),
              [i, o] = r.useState([]),
              c = async () => {
                if (null != a && "" !== a) {
                  if (!l) {
                    n(!0);
                    try {
                      let s = await h.default.searchThreads(e, t, a);
                      u(!0), o(s);
                    } finally {
                      n(!1);
                    }
                  }
                }
              };
            return {
              query: a,
              setQuery: e => {
                s(e), 0 === e.length && u(!1);
              },
              isLoading: l,
              hasResults: d,
              submit: c,
              results: i,
            };
          })(t.guild_id, t.id);
        return (
          r.useEffect(() => {
            (0, g.trackThreadBrowserTab)();
          }, []),
          (0, s.jsx)("div", {
            className: n(a, N.container),
            children: (0, s.jsx)(u.HeadingLevel, {
              component: (0, s.jsxs)("div", {
                className: N.header,
                children: [
                  (0, s.jsx)(f.default, { className: N.threadIcon }),
                  (0, s.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    className: N.title,
                    children: _.default.Messages.THREAD_BROWSER_TITLE,
                  }),
                  o
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("div", { className: N.divider }),
                          (0, s.jsx)(A, { ...C }),
                        ],
                      })
                    : null,
                  (0, s.jsx)("div", { className: N.spacer }),
                  R
                    ? (0, s.jsx)(u.Button, {
                        size: u.Button.Sizes.MIN,
                        className: N.createButton,
                        onClick: () => {
                          l(),
                            (0, E.openThreadSidebarForCreating)(
                              t,
                              void 0,
                              "Thread Browser Toolbar"
                            );
                        },
                        children: _.default.Messages.CREATE,
                      })
                    : null,
                  (0, s.jsx)(u.Clickable, {
                    className: N.closeIcon,
                    onClick: l,
                    "aria-label": _.default.Messages.CLOSE,
                    children: (0, s.jsx)(c.default, {}),
                  }),
                ],
              }),
              children: C.hasResults
                ? (0, s.jsx)(S.default, {
                    channel: t,
                    startThread: j,
                    goToThread: M,
                    threadIds: C.results,
                  })
                : (0, s.jsx)(T.default, {
                    channel: t,
                    startThread: j,
                    goToThread: M,
                  }),
            }),
          })
        );
      }
      function A(e) {
        let { query: t, setQuery: a, submit: r, isLoading: l } = e;
        return (0, s.jsx)(o.default, {
          autoFocus: !0,
          className: N.searchBox,
          query: t,
          isLoading: l,
          onChange: e => a(e),
          onClear: () => a(""),
          onKeyDown: e => "Enter" === e.key && r(),
          placeholder: _.default.Messages.SEARCH_THREAD_NAMES,
          "aria-label": _.default.Messages.SEARCH_THREAD_NAMES,
        });
      }
    },
    722602: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var s = a("37983");
      a("884691");
      var r = a("77078"),
        l = a("543289"),
        n = a("959097"),
        d = a("300322"),
        u = a("782340"),
        i = a("704407");
      function o(e) {
        let { channel: t, header: a, startThread: o } = e,
          c = (0, d.useCanStartPublicThread)(t),
          f = (0, d.useCanStartPrivateThread)(t);
        return (0, s.jsxs)("div", {
          className: i.container,
          children: [
            (0, s.jsxs)("div", {
              className: i.iconContainer,
              children: [
                (0, s.jsx)("div", {
                  className: i.icon,
                  children: (0, s.jsx)(n.default, { width: 36, height: 36 }),
                }),
                (0, s.jsx)(l.default, { className: i.stars }),
              ],
            }),
            (0, s.jsx)(r.Heading, {
              className: i.header,
              variant: "heading-xl/semibold",
              children: a,
            }),
            (0, s.jsx)(r.Text, {
              color: "header-secondary",
              variant: "text-md/normal",
              children:
                u.default.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT_REDESIGN,
            }),
            c || f
              ? (0, s.jsx)(r.Button, {
                  className: i.cta,
                  onClick: o,
                  children: u.default.Messages.CREATE_THREAD,
                })
              : null,
          ],
        });
      }
    },
    913979: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return S;
          },
        });
      var s = a("37983"),
        r = a("884691"),
        l = a("446674"),
        n = a("77078"),
        d = a("272030"),
        u = a("42203"),
        i = a("124948"),
        o = a("697218"),
        c = a("811305"),
        f = a("800843"),
        h = a("442184"),
        m = a("648564"),
        g = a("963906"),
        S = r.memo(function (e) {
          let { threadId: t, goToThread: r, showChannelName: i } = e,
            o = (0, l.useStateFromStores)([u.default], () =>
              u.default.getChannel(t)
            ),
            c = (0, l.useStateFromStores)([u.default], () =>
              u.default.getChannel(o.parent_id)
            );
          return (0, s.jsxs)(n.Clickable, {
            className: g.container,
            onClick: e => r(o, e.shiftKey),
            onContextMenu: e =>
              (0, d.openContextMenuLazy)(e, async () => {
                let { default: e } = await a
                  .el("994827")
                  .then(a.bind(a, "994827"));
                return t => (0, s.jsx)(e, { ...t, channel: o });
              }),
            children: [
              (0, s.jsxs)("div", {
                className: g.left,
                children: [
                  (0, s.jsxs)(n.Heading, {
                    className: g.threadNameLine,
                    variant: "heading-md/semibold",
                    children: [
                      (0, s.jsx)("span", {
                        className: g.threadName,
                        children: o.name,
                      }),
                      i && null != c
                        ? (0, s.jsx)("span", {
                            className: g.parentName,
                            children: "#".concat(c.name),
                          })
                        : null,
                    ],
                  }),
                  (0, h.default)(o),
                ],
              }),
              (0, s.jsx)(T, { channel: o }),
            ],
          });
        });
      function T(e) {
        let { channel: t } = e,
          a = (0, l.useStateFromStores)([f.default], () => {
            var e;
            return null !== (e = f.default.getMemberIdsPreview(t.id)) &&
              void 0 !== e
              ? e
              : [];
          }),
          n = (0, l.useStateFromStores)([f.default], () => {
            var e;
            return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e
              ? e
              : 0;
          }),
          d = (0, l.useStateFromStoresArray)([o.default], () =>
            a.map(e => o.default.getUser(e))
          );
        return (r.useEffect(() => {
          a.filter((e, t) => null == d[t]).forEach(e => {
            i.default.requestMember(t.guild_id, e);
          });
        }, []),
        0 === a.length)
          ? null
          : (0, s.jsx)(c.default, {
              className: g.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: d,
              count: n,
              max: m.MAX_THREAD_MEMBERS_PREVIEW,
            });
      }
    },
    442184: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return j;
          },
        });
      var s = a("37983"),
        r = a("884691"),
        l = a("446674"),
        n = a("77078"),
        d = a("308289"),
        u = a("750560"),
        i = a("619335"),
        o = a("95045"),
        c = a("574073"),
        f = a("26989"),
        h = a("660478"),
        m = a("27618"),
        g = a("697218"),
        S = a("959097"),
        T = a("93427"),
        E = a("299039"),
        x = a("158998"),
        v = a("610730"),
        _ = a("487269"),
        N = a("719347"),
        R = a("782340"),
        A = a("963906");
      function j(e) {
        return e.isActiveThread()
          ? (0, s.jsx)(M, { channel: e })
          : (0, s.jsx)(p, { channel: e });
      }
      function M(e) {
        let { channel: t } = e,
          a = (0, l.useStateFromStores)([v.default], () =>
            v.default.getMostRecentMessage(t.id)
          );
        return null == a
          ? (0, s.jsx)(C, { channel: t })
          : (0, s.jsx)(I, { channel: t, message: a });
      }
      function C(e) {
        let { channel: t } = e,
          a = (0, _.useLastMessageTimestamp)(t);
        return (0, s.jsxs)(n.Text, {
          className: A.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [
            R.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES,
            "\xa0 • \xa0",
            (0, _.getTimestampString)(a),
          ],
        });
      }
      function I(e) {
        let { channel: t, message: a } = e;
        (0, u.useSubscribeGuildMembers)({ [t.guild_id]: [a.author.id] });
        let i = (0, l.useStateFromStores)([g.default], () => {
            var e;
            return null !== (e = g.default.getUser(a.author.id)) && void 0 !== e
              ? e
              : a.author;
          }),
          { nick: f, colorString: h } = (0, c.default)(a),
          S = (0, l.useStateFromStores)([m.default], () =>
            m.default.isBlocked(a.author.id)
          ),
          x = r.useMemo(() => {
            let e =
                null != a.content && "" !== a.content
                  ? (0, o.default)(a, { formatInline: !0 }).content
                  : null,
              {
                contentPlaceholder: t,
                renderedContent: r,
                icon: l,
              } = (0, T.renderSingleLineMessage)(a, e, S, A.messageContent, {
                iconClass: A.messageContentIcon,
                iconSize: N.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE,
              });
            return (0, s.jsxs)(s.Fragment, {
              children: [
                null != r ? r : (0, s.jsx)("span", { children: t }),
                l,
              ],
            });
          }, [a, S]);
        return (0, s.jsxs)(n.Text, {
          className: A.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [
            (0, s.jsx)(d.default, {
              className: A.avatar,
              user: i,
              size: n.AvatarSizes.SIZE_16,
            }),
            (0, s.jsx)(n.NameWithRole, {
              name: f,
              color: h,
              className: A.authorName,
            }),
            ":\xa0",
            x,
            "\xa0 • \xa0",
            (0, _.getTimestampString)(E.default.extractTimestamp(a.id)),
          ],
        });
      }
      function p(e) {
        var t, a, r;
        let { channel: o } = e,
          c = (0, l.useStateFromStores)([h.default], () =>
            h.default.lastMessageId(o.id)
          ),
          m =
            null == c
              ? new Date(
                  null !==
                    (a =
                      null === (t = o.threadMetadata) || void 0 === t
                        ? void 0
                        : t.archiveTimestamp) && void 0 !== a
                    ? a
                    : Date.now()
                ).getTime()
              : E.default.extractTimestamp(c);
        (0, u.useSubscribeGuildMembers)({ [o.guild_id]: [o.ownerId] });
        let T = (0, l.useStateFromStores)([g.default], () =>
            g.default.getUser(o.ownerId)
          ),
          v = (0, l.useStateFromStores)([f.default], () =>
            f.default.getMember(o.guild_id, o.ownerId)
          ),
          N = null !== (r = (0, i.default)(o)) && void 0 !== r ? r : S.default;
        return (0, s.jsx)(n.Text, {
          className: A.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children:
            null == T
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className: A.noAvatarIcon,
                      children: (0, s.jsx)(N, { width: 10, height: 10 }),
                    }),
                    R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                      time: (0, _.getTimestampString)(m),
                    }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.default, {
                      className: A.avatar,
                      user: T,
                      size: n.AvatarSizes.SIZE_16,
                    }),
                    R.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                      authorHook(e, t) {
                        var a, r;
                        return (0, s.jsx)(
                          n.NameWithRole,
                          {
                            className: A.startedByName,
                            color:
                              null !==
                                (a = null == v ? void 0 : v.colorString) &&
                              void 0 !== a
                                ? a
                                : void 0,
                            name:
                              null !== (r = null == v ? void 0 : v.nick) &&
                              void 0 !== r
                                ? r
                                : x.default.getName(T),
                          },
                          t
                        );
                      },
                    }),
                    (0, s.jsx)("span", { className: A.bullet, children: "•" }),
                    R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                      time: (0, _.getTimestampString)(m),
                    }),
                  ],
                }),
        });
      }
    },
    695385: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        }),
        a("222007");
      var s = a("37983"),
        r = a("884691"),
        l = a("335710"),
        n = a("77078"),
        d = a("134947"),
        u = a("722602"),
        i = a("913979"),
        o = a("782340"),
        c = a("529353");
      let f = new Set();
      function h(e) {
        let { channel: t, startThread: a, goToThread: h } = e,
          { joinedThreadIds: g, unjoinedThreadIds: S } = (0,
          d.useActiveThreads)(t),
          {
            threadIds: T,
            canLoadMore: E,
            loading: x,
            loadMore: v,
          } = (0, d.useArchivedThreads)(
            t,
            l.ThreadSortOrder.LATEST_ACTIVITY,
            f
          ),
          _ = r.useRef(null);
        (0, d.useTrackThreadBrowserTab)();
        let N = r.useCallback(
            e => {
              let t = 0 === e.section ? g : 1 === e.section ? S : T;
              return (0, s.jsx)(
                i.default,
                { threadId: t[e.row], goToThread: h },
                "".concat(e.section, "-").concat(e.row)
              );
            },
            [T, g, S, h]
          ),
          R = r.useCallback(
            e =>
              0 === e.section
                ? (0, s.jsx)(
                    m,
                    {
                      text: o.default.Messages.THREAD_BROWSER_JOINED_HEADER.format(
                        { count: g.length }
                      ),
                    },
                    e.section
                  )
                : 1 === e.section
                  ? (0, s.jsx)(
                      m,
                      {
                        text: o.default.Messages.THREAD_BROWSER_OTHER_HEADER.format(
                          { count: S.length }
                        ),
                      },
                      e.section
                    )
                  : (0, s.jsx)(
                      m,
                      {
                        text: o.default.Messages.THREAD_BROWSER_ARCHIVED_HEADER,
                      },
                      e.section
                    ),
            [g.length, S.length]
          ),
          A = r.useCallback(
            e =>
              1 === e && g.length > 0
                ? 64
                : 2 === e && (g.length > 0 || S.length > 0)
                  ? 64
                  : 32,
            [g.length, S.length]
          ),
          j = r.useCallback(() => {
            var e;
            let t =
              null === (e = _.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null == t) return;
            let a = t.scrollTop + t.offsetHeight,
              s = t.scrollHeight - a;
            s < 200 && v();
          }, [v]);
        if (0 === g.length && 0 === S.length && 0 === T.length)
          return x
            ? (0, s.jsx)("div", {
                className: c.list,
                children: (0, s.jsx)(n.Spinner, { className: c.spinner }),
              })
            : (0, s.jsx)("div", {
                className: c.list,
                children: (0, s.jsx)(u.default, {
                  channel: t,
                  header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                  startThread: a,
                }),
              });
        return (0, s.jsx)(n.List, {
          ref: _,
          className: c.list,
          fade: !0,
          sections: [g.length, S.length, T.length],
          sectionHeight: A,
          rowHeight: 80,
          renderRow: N,
          renderSection: R,
          chunkSize: 20,
          onScroll: E ? j : void 0,
        });
      }
      function m(e) {
        let { text: t } = e;
        return (0, s.jsx)(n.Text, {
          color: "header-secondary",
          variant: "text-xs/bold",
          className: c.sectionHeader,
          children: t,
        });
      }
    },
  },
]);
//# sourceMappingURL=a5d5c1b6913b0dd64521.js.map
